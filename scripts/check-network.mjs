/* Checks that the built site reads as one connected picture of Obsession, the way a crawler and an AI assistant read
   it (29 Oct 2026, the plan in docs/SEARCH.md and lib/connections.ts). Runs after the prerender in `npm run build`:
     node scripts/check-network.mjs [DIST]
   It fails the build when:
   - a guide, recipe, use case or reader page doesn't end on "How Obsession works" (lib/connections.ts);
   - a recipe or use case lists no guides: name it in a post's `related`, or link it from a post;
   - a page has no link to it from another page's text (the nav and footer don't count);
   - a page has more or less than 1 h1, no title or description, or a canonical that isn't its own address;
   - a post's BlogPosting doesn't mention the Obsession app (/#software) and the term "AI customer";
   - llms.txt doesn't group the guides by reader ("## Guides: ...") or leaves a guide out;
   - the sitemap leaves a page out.
   A page with fewer than 3 links in is noted, not failed. */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const SITE = 'https://useobsession.com'
const arg = process.argv[2]
const dist = arg ?? (existsSync('dist/client/index.html') ? 'dist/client' : 'dist')
if (!existsSync(join(dist, 'index.html'))) throw new Error(`No built site in ${dist}/. Run the build first.`)

const READERS = ['/agencies', '/marketing', '/sales', '/developers', '/verify']
/* Pages a reader reaches from the footer or a form, not from the text of another page. */
const NOT_LINKED_IN_TEXT = new Set(['/privacy', '/join'])

const files = []
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f)
    if (statSync(p).isDirectory()) {
      if (!(d === dist && ['assets', 'screens', 'og', 'logo', 'film'].includes(f))) walk(p)
    } else if (f.endsWith('.html') && f !== '404.html' && !f.startsWith('__')) files.push(p)
  }
}
walk(dist)
const pathOf = (f) => {
  const r = ('/' + relative(dist, f).replace(/\\/g, '/')).replace(/\.html$/, '').replace(/\/index$/, '')
  return r === '/index' || r === '' ? '/' : r
}
const pages = new Map(files.map((f) => [pathOf(f), readFileSync(f, 'utf8')]))
const kindOf = (p) =>
  p.startsWith('/blog/') ? 'post' : p.startsWith('/recipes/') ? 'recipe' : p.startsWith('/use-cases/') ? 'use case' : READERS.includes(p) ? 'reader' : 'page'
const mainOf = (html) => {
  const i = html.indexOf('<main')
  const j = html.lastIndexOf('</main>')
  return i >= 0 && j > i ? html.slice(i, j) : ''
}
const linksIn = (html) =>
  [...html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)]
    .map((m) => m[1].replace(SITE, ''))
    .filter((h) => h.startsWith('/') && !h.startsWith('//'))
    .map((h) => h.split('#')[0].split('?')[0].replace(/\/$/, '') || '/')

const problems = []
const notes = []
const fail = (m) => problems.push(m)

const inbound = new Map([...pages.keys()].map((p) => [p, new Set()]))
for (const [p, html] of pages) for (const to of new Set(linksIn(mainOf(html)))) if (to !== p) inbound.get(to)?.add(p)

for (const [p, html] of pages) {
  const kind = kindOf(p)
  if (kind !== 'page' && !html.includes('id="how-obsession-works"')) fail(`${p}: the ${kind} doesn't end on "How Obsession works" (lib/connections.ts).`)
  if ((kind === 'recipe' || kind === 'use case') && !html.includes('id="guides"'))
    fail(`${p}: the ${kind} lists no guides. Name it in a post's \`related\` (${kind === 'recipe' ? `"recipe:${p.split('/').pop()}"` : `"${p}"`}), or link it from a post.`)
  if (!NOT_LINKED_IN_TEXT.has(p) && p !== '/') {
    const n = inbound.get(p).size
    if (n === 0) fail(`${p}: no other page links here in its text, only the nav or the footer.`)
    else if (n < 3) notes.push(`${p}: ${n} link${n > 1 ? 's' : ''} in from other pages' text.`)
  }

  const h1 = (html.match(/<h1\b/g) || []).length
  if (h1 !== 1) fail(`${p}: ${h1} h1 elements, where a page has 1.`)
  if (!/<title>[^<]+<\/title>/.test(html)) fail(`${p}: no title.`)
  if (!/<meta name="description" content="[^"]+"/.test(html)) fail(`${p}: no description.`)
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
  if (!canonical) fail(`${p}: no canonical link.`)
  else if ((canonical.replace(SITE, '').replace(/\/$/, '') || '/') !== p) fail(`${p}: its canonical points at ${canonical}.`)

  if (kind === 'post') {
    const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]).join('')
    if (!ld.includes('/#software')) fail(`${p}: the BlogPosting doesn't mention the Obsession app (/#software, lib/jsonld.ts).`)
    if (!ld.includes('/blog/ai-customers#term')) fail(`${p}: the BlogPosting doesn't mention the term "AI customer" (lib/jsonld.ts).`)
  }
}

const llms = existsSync(join(dist, 'llms.txt')) ? readFileSync(join(dist, 'llms.txt'), 'utf8') : ''
if (!/^## Guides: /m.test(llms)) fail('llms.txt: the guides are not grouped by reader ("## Guides: ...", scripts/prerender.mjs).')
for (const p of pages.keys()) if (kindOf(p) === 'post' && !llms.includes(`${SITE}${p})`)) fail(`llms.txt: ${p} is missing.`)
const sitemap = existsSync(join(dist, 'sitemap.xml')) ? readFileSync(join(dist, 'sitemap.xml'), 'utf8') : ''
for (const p of pages.keys()) if (!NOT_LINKED_IN_TEXT.has(p) && !sitemap.includes(`<loc>${SITE}${p}</loc>`)) fail(`sitemap.xml: ${p} is missing.`)

for (const n of notes) console.warn(`  note: ${n}`)
if (problems.length) {
  for (const p of problems) console.error(`  error: ${p}`)
  throw new Error(`The network check found ${problems.length} problem${problems.length > 1 ? 's' : ''}.`)
}
const count = (k) => [...pages.keys()].filter((p) => kindOf(p) === k).length
console.log(
  `Checked ${pages.size} pages as one network: ${count('post')} guides, ${count('recipe')} recipes and ${count('use case')} use cases each end on how Obsession works, and every page has links in.`,
)
