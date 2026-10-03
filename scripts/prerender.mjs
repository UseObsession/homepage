/* Prerenders every page to static HTML after `vite build`, so crawlers, link previews and AI agents get the full copy
   without running JavaScript. React hydrates the same HTML in the browser (src/main.tsx). Run by `npm run build`.

   Writes, into the built site:
   - 1 HTML file per page with its own head: title, description, canonical, robots, Open Graph and Twitter large image
     tags, the JSON-LD @graph (src/lib/jsonld.ts) and the preload for the main font. Pages are written as PATH.html
     (dist/agencies.html, dist/recipes/mystery-shopper.html), which Cloudflare's static assets serve at /agencies with
     a 200, sending /agencies/ to /agencies: the canonical, with no trailing slash. dist/index.html is Home.
   - 404.html (noindex), which the host serves for any other address.
   - sitemap.xml (every page, recipe, use case and post, each dated by the date a post states or else the last commit to
     its words), robots.txt (search engines and AI crawlers welcome), llms.txt (what Obsession is, and every page with
     its 1 line answer) and llms-full.txt (every page's words as plain text, read from the HTML written here).
   - blog/rss.xml: every post, newest first (RSS 2.0), linked from every page's head, while the blog has a live post.
   Then it checks what it wrote: 1 h1 per page, unique titles and descriptions, every share image present, the JSON-LD
   parses, and every internal link lands on a page or a file. Broken promises fail the build; style notes only warn.

   It builds its own server bundle with a fixed config instead of reading vite.config.ts. Without wrangler.jsonc,
   Cloudflare's own deploy set up added its Vite plugin at build time, which moved the client build to dist/client and
   would break a second `vite build --ssr`; wrangler.jsonc now names dist/ itself, and dist/client is still read if
   it is ever there. Then it trims the shared stylesheet (scripts/purge-css.mjs). */
import react from '@vitejs/plugin-react'
import { execFileSync } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'
import { purgeCss } from './purge-css.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const server = join(root, 'dist-server')

const dist = [join(root, 'dist', 'client'), join(root, 'dist')].find((d) => existsSync(join(d, 'index.html')))
if (!dist) throw new Error('No built index.html in dist/ or dist/client/. Run vite build first.')

/* The server build renders every app screen into the page: components/screens.ts (the browser's, which fetches a screen
   only on a client side move) is swapped for screens.server.ts, which has every screen at hand. */
await build({
  configFile: false,
  root,
  logLevel: 'warn',
  plugins: [react()],
  resolve: { alias: [{ find: /^\.\/screens$/, replacement: join(root, 'src/components/screens.server.ts') }] },
  build: { ssr: 'src/entry-server.tsx', outDir: server, emptyOutDir: true },
})

const { render, entries, notFound, jsonLdScript, absolute, SITE, llms, CONTROLLER, AGENCY_SCREENS, postFileOf, blogUi, blogPage } = await import(
  pathToFileURL(join(server, 'entry-server.js')).href
)
const postEntries = entries.filter((e) => e.kind === 'post')
const FEED = `${SITE}/blog/rss.xml`
const template = await readFile(join(dist, 'index.html'), 'utf8')

/* Each app screen's own CSS, built as its own file (vite.config.ts: build.manifest). A page links the CSS of the screens
   it shows (AppScreen's data-screen) right after the site's stylesheet, so they apply before the first paint and win
   over the screens' shared base. The manifest itself is not part of the site, so it goes once read. */
const manifestFile = join(dist, '.vite', 'manifest.json')
const manifest = existsSync(manifestFile) ? JSON.parse(await readFile(manifestFile, 'utf8')) : {}
const screenCss = new Map(
  Object.entries(manifest)
    .map(([src, m]) => [src.match(/^src\/screens\/css\/([\w-]+)\.css$/)?.[1], m.file])
    .filter(([name, file]) => name && file),
)
await rm(join(dist, '.vite'), { recursive: true, force: true })
const stylesheet = /<link rel="stylesheet"[^>]*href="\/assets\/index-[^"]+\.css"[^>]*>/
if (!template.includes('<div id="root"></div>')) throw new Error('dist/index.html is already prerendered. Run vite build first.')

const problems = []
const notes = []
const fail = (m) => problems.push(m)
const warn = (m) => notes.push(m)

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/* The fonts the first view sets, preloaded so the first paint is already in Geist: the latin sans the words use, and
   the latin mono the hero's typed task line uses (anything the agent is told is Geist Mono). */
const assets = existsSync(join(dist, 'assets')) ? readdirSync(join(dist, 'assets')) : []
const mainFont = assets.find((f) => /^geist-latin-wght-normal-[\w-]+\.woff2$/.test(f))
const monoFont = assets.find((f) => /^geist-mono-latin-wght-normal-[\w-]+\.woff2$/.test(f))
if (!mainFont) fail('The Geist latin font is missing from the build (src/styles/fonts.css).')
if (!monoFont) fail('The Geist Mono latin font is missing from the build (src/styles/fonts.css).')

function head(e, { noindex = false } = {}) {
  const m = e.meta
  const url = absolute(m.path)
  const image = absolute(m.ogImage)
  const alt = [e.headline, e.line].filter(Boolean).join(' ')
  return [
    noindex ? '' : `<link rel="canonical" href="${url}" />`,
    noindex ? `<meta name="robots" content="noindex" />` : `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Obsession" />`,
    `<meta property="og:locale" content="en_GB" />`,
    /* A noindex page (404.html) has no address of its own to share. */
    noindex ? '' : `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:type" content="image/png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(alt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="twitter:image:alt" content="${esc(alt)}" />`,
    `<script type="application/ld+json">${jsonLdScript(e)}</script>`,
    postEntries.length ? `<link rel="alternate" type="application/rss+xml" title="${esc(blogUi.feedTitle)}" href="${FEED}" />` : '',
  ]
    .filter(Boolean)
    .join('\n    ')
}

function page(e, rendered, opts) {
  /* React writes the preloads it wants (the nav lockup's images) at the start of the markup it renders; they belong in
     the head, beside the font's, not inside the root React hydrates. */
  const hints = rendered.match(/^(?:<link rel="preload"[^>]*\/>)+/)?.[0] ?? ''
  const appHtml = rendered.slice(hints.length)
  /* A screen can be drawn by another screen's sheet too: agencytask is compose's markup with its own few rules on top
     (class "app-compose app-agencytask"), so every app-NAME on a screen's root brings that sheet, not only its own. */
  const screens = [
    ...new Set([
      ...[...appHtml.matchAll(/\sdata-screen="([\w-]+)"/g)].map((m) => m[1]),
      ...[...appHtml.matchAll(/class="il appx-il ([^"]+)"/g)].flatMap((m) => [...m[1].matchAll(/\bapp-([a-z]+)\b/g)].map((n) => n[1])),
    ]),
  ]
  for (const s of screens) if (!screenCss.has(s) && existsSync(join(root, `src/screens/css/${s}.css`))) fail(`${e.meta.path}: no built CSS for the ${s} screen.`)
  const screenLinks = screens.filter((s) => screenCss.has(s)).map((s) => `<link rel="stylesheet" crossorigin href="/${screenCss.get(s)}">`)
  const preloads = [
    ...[mainFont, monoFont].filter(Boolean).map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`),
    ...(hints.match(/<link[^>]*\/>/g) ?? []),
  ].filter(Boolean)
  /* Replacements are functions, so a "$" in the copy is never read as a pattern. */
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, () => [...preloads, `<title>${esc(e.meta.title)}</title>`].join('\n    '))
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, () => `<meta name="description" content="${esc(e.meta.description)}" />`)
    .replace(stylesheet, (link) => [link, ...screenLinks].join('\n    '))
    .replace('</head>', () => `    ${head(e, opts)}\n  </head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${appHtml}</div>`)
  if (html.includes('<div id="root"></div>')) throw new Error(`Nothing rendered for ${e.meta.path}`)
  return html
}

/* PATH.html for a page, never PATH/index.html: Cloudflare answers /PATH with it and sends /PATH/ to /PATH. */
const fileFor = (path) => (path === '/' ? join(dist, 'index.html') : join(dist, `${path.slice(1)}.html`))
async function write(path, html) {
  const f = fileFor(path)
  await mkdir(dirname(f), { recursive: true })
  await writeFile(f, html)
}

/* ---- Pages ---- */
const rendered = []
for (const e of entries) {
  const app = render(e.meta.path)
  await write(e.meta.path, page(e, app))
  rendered.push({ e, app })
}

/* Hosts serve 404.html, with a 404 status, for any path without its own page. */
await writeFile(join(dist, '404.html'), page(notFound, render('/404'), { noindex: true }))

/* ---- sitemap.xml: every page and recipe, dated by the last commit that changed its words. ---- */
function lastCommit(file) {
  try {
    return execFileSync('git', ['log', '-1', '--format=%cs', '--', file], { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()
  } catch {
    return ''
  }
}
await writeFile(
  join(dist, 'sitemap.xml'),
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map((e) => {
      const date = e.lastmod || lastCommit(e.source)
      return `  <url><loc>${absolute(e.meta.path)}</loc>${date ? `<lastmod>${date}</lastmod>` : ''}</url>`
    }),
    '</urlset>',
    '',
  ].join('\n'),
)

/* ---- robots.txt: every search engine and AI crawler is welcome, by name for the ones that look for their own. ---- */
const CRAWLERS = [
  'Googlebot',
  'Bingbot',
  'Google-Extended',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot',
  'Applebot-Extended',
  'CCBot',
]
await writeFile(
  join(dist, 'robots.txt'),
  [
    '# useobsession.com welcomes search engines and AI assistants. Every page is static HTML.',
    '# What Obsession is, for AI assistants: /llms.txt, and every page as plain text: /llms-full.txt',
    '',
    'User-agent: *',
    'Allow: /',
    '',
    ...CRAWLERS.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
    `Sitemap: ${SITE}/sitemap.xml`,
    '',
  ].join('\n'),
)

/* ---- llms.txt (llmstxt.org): what Obsession is, then every page with the 1 or 2 sentences it answers. ---- */
const link = (e) => `- [${e.name}](${absolute(e.meta.path)}): ${e.meta.answer}`
const ofKind = (...kinds) => entries.filter((e) => kinds.includes(e.kind))
await writeFile(
  join(dist, 'llms.txt'),
  [
    '# Obsession',
    '',
    `> ${llms.summary}`,
    '',
    llms.intro,
    '',
    '## Pages',
    '',
    ...ofKind('home', 'audience', 'developers', 'verify', 'recipes', 'sample', 'resources').map(link),
    '',
    '## Recipes',
    '',
    ...ofKind('recipe').map(link),
    '',
    '## Use cases',
    '',
    ...ofKind('use-cases', 'use-case').map(link),
    '',
    '## Blog',
    '',
    ...ofKind('blog', 'post').map(link),
    '',
    '## Trust',
    '',
    ...ofKind('agents', 'privacy').map(link),
    '',
    '## Optional',
    '',
    `- [Every page as plain text](${SITE}/llms-full.txt): the words on every page above, in 1 file.`,
    '',
  ].join('\n'),
)

/* ---- blog/rss.xml: every post, newest first. Written only while the blog has a live post (content/blog/archive keeps
   the rest), so an archived blog leaves no feed behind. ---- */
const xml = (s) => esc(s).replace(/'/g, '&apos;')
const rfc822 = (iso) => new Date(`${iso}T09:00:00Z`).toUTCString()
if (postEntries.length) await mkdir(join(dist, 'blog'), { recursive: true })
if (postEntries.length) await writeFile(
  join(dist, 'blog', 'rss.xml'),
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">',
    '  <channel>',
    `    <title>${xml(blogUi.feedTitle)}</title>`,
    `    <link>${absolute('/blog')}</link>`,
    `    <description>${xml(blogPage.meta.description)}</description>`,
    '    <language>en-gb</language>',
    `    <atom:link href="${FEED}" rel="self" type="application/rss+xml" />`,
    ...(postEntries[0] ? [`    <lastBuildDate>${rfc822(postEntries[0].article.updated)}</lastBuildDate>`] : []),
    ...postEntries.map((e) =>
      [
        '    <item>',
        `      <title>${xml(e.article.headline)}</title>`,
        `      <link>${absolute(e.meta.path)}</link>`,
        `      <guid isPermaLink="true">${absolute(e.meta.path)}</guid>`,
        `      <pubDate>${rfc822(e.article.published)}</pubDate>`,
        `      <description>${xml(e.line)}</description>`,
        `      <category>${xml(e.article.section)}</category>`,
        ...e.article.authors.map((a) => `      <dc:creator>${xml(a.name)}</dc:creator>`),
        '    </item>',
      ].join('\n'),
    ),
    '  </channel>',
    '</rss>',
    '',
  ].join('\n'),
)

/* ---- llms-full.txt: every page's own words (the main element, without the nav and footer every page repeats), read
   from the HTML written above. The app screens are pictures of the product: their alt text stands in for them. ---- */
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'])
const BLOCK = new Set(['address', 'article', 'aside', 'blockquote', 'dd', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'header', 'hr', 'legend', 'li', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'summary', 'table', 'tr', 'ul', 'br', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
/* Forms are the capture's controls, not the page's words. */
const SKIP = new Set(['script', 'style', 'svg', 'template', 'noscript', 'form', 'select', 'textarea'])
const decode = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
const attr = (attrs, name) => attrs.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1]
/* A hidden element is not the page's words, unless it's a panel the reader opens by picking a tab or a chip (Use cases,
   Who it's for, Every kind of): those carry data-llms="keep" and are read like the rest. */
const hiddenFromWords = (attrs) => /\shidden(=|\s|$)/.test(attrs) && !/\sdata-llms="keep"/.test(attrs)

function textOf(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*)<\/main>/)?.[1] ?? html
  const src = main.replace(/<!--[\s\S]*?-->/g, '').replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, '')
  const out = []
  const stack = []
  let skip = 0
  for (const m of src.matchAll(/<(\/?)([a-zA-Z][\w-]*)([^>]*?)(\/?)>|([^<]+)/g)) {
    const [, close, rawName, attrs = '', selfClose, text] = m
    if (text !== undefined) {
      if (!skip) out.push(decode(text).replace(/\s+/g, ' '))
      continue
    }
    const name = rawName.toLowerCase()
    if (close) {
      /* A skipped element sits on the stack as !name, so its own closing tag must find it too. */
      const i = stack.findLastIndex((n) => n === name || n === '!' + name)
      if (i === -1) continue
      const popped = stack.splice(i)
      skip -= popped.filter((n) => n.startsWith('!')).length
      if (BLOCK.has(name) && !skip) out.push('\n')
      continue
    }
    const hidden = SKIP.has(name) || /\saria-hidden="true"/.test(attrs) || hiddenFromWords(attrs)
    /* An app screen (role="img") reads as its description; a heading with its own label reads as the label. */
    const pictured = /\srole="img"/.test(attrs) && attr(attrs, 'aria-label')
    const labelled = /^h[1-6]$/.test(name) && attr(attrs, 'aria-label')
    if (!skip) {
      /* A list item that opens with a block (a heading, a paragraph) keeps its marker on the block's own line. */
      if (BLOCK.has(name)) {
        if (out[out.length - 1] !== '- ') out.push('\n')
      }
      else if (out.length && !/\s$/.test(out[out.length - 1])) out.push(' ')
      if (/^h[1-6]$/.test(name)) out.push('#'.repeat(Number(name[1])) + ' ')
      if (name === 'li') out.push('- ')
      if (name === 'img' && attr(attrs, 'alt')) out.push(`[Image: ${decode(attr(attrs, 'alt'))}]`)
      if (pictured) out.push(`[Image: ${decode(attr(attrs, 'aria-label'))}]`)
      if (labelled) out.push(decode(attr(attrs, 'aria-label')))
    }
    if (VOID.has(name) || selfClose) continue
    const skipping = hidden || pictured || labelled
    stack.push(skipping ? '!' + name : name)
    if (skipping) skip++
  }
  return out
    .join('')
    .split('\n')
    .map((l) => l.replace(/\s+/g, ' ').trim())
    .filter((l, i, all) => l && !/^(- |#+ )$/.test(l) && !(l === all[i - 1]))
    .join('\n')
    .replace(/\n(#+ )/g, '\n\n$1')
    .trim()
}

/* How many h2s a reader sees on a page: those outside the app screens (role="img", read as their description) and
   outside anything hidden. llms-full.txt must carry every one of them as a "## " line. */
function visibleH2s(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*)<\/main>/)?.[1] ?? html
  const src = main.replace(/<!--[\s\S]*?-->/g, '').replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, '')
  const stack = []
  let n = 0
  for (const [, close, rawName, attrs = '', selfClose] of src.matchAll(/<(\/?)([a-zA-Z][\w-]*)([^>]*?)(\/?)>/g)) {
    const name = rawName.toLowerCase()
    if (close) {
      const i = stack.findLastIndex((s) => s.name === name)
      if (i !== -1) stack.splice(i)
      continue
    }
    const out = /\srole="img"/.test(attrs) || /\saria-hidden="true"/.test(attrs) || hiddenFromWords(attrs) || SKIP.has(name)
    if (name === 'h2' && !out && !stack.some((s) => s.out)) n++
    if (VOID.has(name) || selfClose) continue
    stack.push({ name, out })
  }
  return n
}

const full = [
  '# Obsession: every page as plain text',
  '',
  `> ${llms.summary}`,
  '',
  `The words on every page of ${SITE}, page by page. The short guide is ${SITE}/llms.txt.`,
  '',
]
for (const { e, app } of rendered) {
  const text = textOf(app)
  const sections = text.split('\n').filter((l) => l.startsWith('## ')).length
  const h2s = visibleH2s(app)
  if (sections < h2s) fail(`${e.meta.path}: llms-full.txt carries ${sections} of the page's ${h2s} sections (textOf in scripts/prerender.mjs).`)
  full.push('---', '', `Page: ${e.meta.title}`, `URL: ${absolute(e.meta.path)}`, `In short: ${e.meta.answer}`, '', text, '')
}
await writeFile(join(dist, 'llms-full.txt'), full.join('\n'))

/* ---- Checks ---- */
const titles = new Map()
const descriptions = new Map()
for (const { e, app } of rendered) {
  const where = e.meta.path
  const h1s = app.match(/<h1[\s>]/g)?.length ?? 0
  if (h1s !== 1) warn(`${where}: ${h1s} h1 elements (the page should have exactly 1).`)
  const t = e.meta.title.length
  const d = e.meta.description.length
  if (t < 55 || t > 60) warn(`${where}: title is ${t} characters (55 to 60).`)
  if (d < 140 || d > 155) warn(`${where}: description is ${d} characters (140 to 155).`)
  if (titles.has(e.meta.title)) fail(`${where} and ${titles.get(e.meta.title)} share the title "${e.meta.title}".`)
  if (descriptions.has(e.meta.description)) fail(`${where} and ${descriptions.get(e.meta.description)} share a description.`)
  titles.set(e.meta.title, where)
  descriptions.set(e.meta.description, where)
  if (!existsSync(join(dist, e.meta.ogImage.slice(1)))) fail(`${where}: the share image ${e.meta.ogImage} is missing (scripts/og.mjs).`)
  try {
    const data = JSON.parse(jsonLdScript(e))
    if (!Array.isArray(data['@graph']) || data['@context'] !== 'https://schema.org') throw new Error('no @graph')
  } catch (err) {
    fail(`${where}: the JSON-LD does not parse (${err.message}).`)
  }
}

/* A post's address is its slug, and its file is named for it (content/registry.ts). */
for (const e of postEntries) {
  const slug = e.meta.path.split('/').pop()
  if (postFileOf[slug] !== slug) fail(`${e.meta.path}: the post's slug and its file's name differ (src/content/blog/${postFileOf[slug]}.ts).`)
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) fail(`${e.meta.path}: a post's slug is lower case words joined by single hyphens.`)
}

/* The browser never loads a screen to see whose workspace it shows, so components/workspace.ts lists the agency ones:
   every screen that says "Your agency" must be on it. */
for (const f of readdirSync(join(root, 'src/screens/html')).filter((f) => f.endsWith('.html'))) {
  const name = f.slice(0, -5)
  if ((await readFile(join(root, 'src/screens/html', f), 'utf8')).includes('Your agency') && !AGENCY_SCREENS.has(name))
    fail(`The ${name} screen is drawn for an agency: add it to AGENCY_SCREENS in src/components/workspace.ts.`)
}

/* Every internal link lands on a page, a redirect or a file. */
const known = new Set(entries.map((e) => e.meta.path))
const redirects = existsSync(join(dist, '_redirects'))
  ? (await readFile(join(dist, '_redirects'), 'utf8'))
      .split('\n')
      .map((l) => l.trim().split(/\s+/)[0])
      .filter((s) => s && !s.startsWith('#'))
  : []
const redirected = (p) => redirects.some((r) => (r.endsWith('/*') ? p.startsWith(r.slice(0, -1)) || p === r.slice(0, -2) : r === p))
for (const { e, app } of rendered) {
  for (const [, href] of app.matchAll(/\shref="(\/[^"#?]*)/g)) {
    const p = href.length > 1 ? href.replace(/\/$/, '') : href
    if (known.has(p) || redirected(p) || existsSync(join(dist, p.slice(1)))) continue
    warn(`${e.meta.path}: links to ${href}, which has no page.`)
  }
}

/* The privacy notice names its controller: the founders supply the registered name and address before it ships. Until
   then the notice gives only its contact line. A bracketed placeholder on any page fails the build. */
if (!CONTROLLER) warn('/privacy: no controller named yet (CONTROLLER in content/site.ts). The founders supply the registered name and address before the site ships.')
for (const { e, app } of [...rendered, { e: notFound, app: render('/404') }])
  if (/\[(registered|company name|address|placeholder|todo)[^\]]*\]/i.test(app)) fail(`${e.meta.path}: a bracketed placeholder is on the page.`)

await rm(server, { recursive: true, force: true })

/* The stylesheet every page blocks on, without the rules no page uses (scripts/purge-css.mjs). */
const purged = await purgeCss(dist)
if (purged) notes.push(`css: ${purged.to}, ${Math.round(purged.before / 1024)} KB to ${Math.round(purged.after / 1024)} KB (${purged.dropped} unused rules dropped).`)

for (const n of [...new Set(notes)]) console.warn(`  note: ${n}`)
if (problems.length) {
  for (const p of problems) console.error(`  error: ${p}`)
  throw new Error(`The prerender found ${problems.length} problem${problems.length > 1 ? 's' : ''}.`)
}
console.log(
  `Prerendered ${rendered.length} pages (${postEntries.length} posts) and 404.html into ${relative(root, dist)}/, with sitemap.xml, robots.txt, llms.txt, llms-full.txt${postEntries.length ? ' and blog/rss.xml' : ' (blog archived: no feed)'}.`,
)
