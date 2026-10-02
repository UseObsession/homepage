/* Prerenders every page to static HTML after `vite build`, so crawlers, link previews and AI agents get the
   full copy without running JavaScript. React hydrates the same HTML in the browser (src/main.tsx).
   Also writes sitemap.xml, robots.txt and llms.txt. Run by `npm run build`, after `vite build`.

   It builds its own server bundle with a fixed config instead of reading vite.config.ts. On Cloudflare,
   `wrangler deploy` adds the Cloudflare Vite plugin to the project at build time, which moves Vite's output
   (the client build lands in dist/client) and would break a second `vite build --ssr`. */
import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const server = join(root, 'dist-server')

const dist = [join(root, 'dist', 'client'), join(root, 'dist')].find((d) => existsSync(join(d, 'index.html')))
if (!dist) throw new Error('No built index.html in dist/ or dist/client/. Run vite build first.')

await build({
  configFile: false,
  root,
  logLevel: 'warn',
  plugins: [react()],
  build: { ssr: 'src/entry-server.tsx', outDir: server, emptyOutDir: true },
})

const { render, pages, notFound } = await import(pathToFileURL(join(server, 'entry-server.js')).href)
const SITE = 'https://useobsession.com'
const template = await readFile(join(dist, 'index.html'), 'utf8')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function page(meta, appHtml, { noindex = false } = {}) {
  const url = SITE + (meta.path === '/' ? '/' : meta.path)
  const head = [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Obsession" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:card" content="summary" />`,
    noindex ? `<meta name="robots" content="noindex" />` : '',
  ]
    .filter(Boolean)
    .join('\n    ')

  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${esc(meta.description)}" />`)
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  if (html.includes('<div id="root"></div>')) throw new Error(`Nothing rendered for ${meta.path}`)
  return html
}

for (const meta of pages) {
  const file = meta.path === '/' ? join(dist, 'index.html') : join(dist, meta.path, 'index.html')
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, page(meta, render(meta.path)))
}

/* Hosts such as Cloudflare Pages serve 404.html, with a 404 status, for any path without its own page. */
await writeFile(join(dist, '404.html'), page(notFound, render('/404'), { noindex: true }))

const today = new Date().toISOString().slice(0, 10)
await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((p) => `  <url><loc>${SITE}${p.path === '/' ? '/' : p.path}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`,
)

await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)

/* A plain text guide for AI agents (llmstxt.org). */
const [home, ...rest] = pages
await writeFile(
  join(dist, 'llms.txt'),
  [
    '# Obsession',
    '',
    `> ${home.description}`,
    '',
    'Obsession is the intelligence infrastructure for commercial teams. Test customers with their own inboxes, phone numbers and browsers, marked as automated, go through companies’ journeys (sign up, text opt in, basket, support) and wait days for what follows. Results come back as timestamped proof: a verdict, a timeline, screenshots and the messages themselves. Use a ready recipe, describe a task in plain words, or call the API. It is in early access.',
    '',
    '## Pages',
    '',
    ...rest.map((p) => `- [${p.title}](${SITE}${p.path}): ${p.description}`),
    '',
  ].join('\n'),
)

await rm(server, { recursive: true, force: true })
console.log(`Prerendered ${pages.length} pages and 404.html into ${dist.slice(root.length + 1)}/, with sitemap.xml, robots.txt and llms.txt.`)
