/* Compares 2 builds of the site page by page, for a change that must not change what a page says or links to:
     node scripts/check-parity.mjs BEFORE_DIST AFTER_DIST
   For every prerendered page (every .html file outside screens/, including 404.html) it compares:
   - the head: title, every meta tag, canonical and alternate links, and the JSON-LD (parsed);
   - the words a reader sees, block by block (comments, scripts and the whitespace between tags aside), and every heading;
   - every link (href and words) and every image's alt text;
   - the page's markup outside its app screens, element by element and attribute by attribute (built file names, which
     carry a hash of their contents, compared without the hash).
   It prints each difference and the count, and exits 1 when there is any. */
import { parse } from 'parse5'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const [A, B] = process.argv.slice(2)
if (!A || !B) throw new Error('Usage: node scripts/check-parity.mjs BEFORE_DIST AFTER_DIST')

function pages(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    if (statSync(p).isDirectory()) {
      if (!['assets', 'screens', 'og', 'logo'].includes(f) || (dir !== A && dir !== B)) pages(p, out)
    } else if (f.endsWith('.html') && !f.startsWith('__')) out.push(p)
  }
  return out
}

const isEl = (n) => typeof n.tagName === 'string'
const kids = (n) => (n.tagName === 'template' ? n.content.childNodes : n.childNodes ?? [])
const get = (el, name) => el.attrs?.find((a) => a.name === name)?.value
const unhash = (s) => s.replace(/(\/assets\/[\w.-]+?)-[\w-]{8}(\.\w+)/g, '$1-HASH$2')
const SKIP = new Set(['script', 'style', 'template', 'noscript'])
const isScreen = (el) => get(el, 'data-screen') !== undefined && /\bilwrap\b/.test(get(el, 'class') ?? '')

/* The words in a node, in order: each text split at its whitespace (a tag between 2 words parts them too, so the
   whitespace between tags, which check-screens.mjs compares run by run, is not counted twice). */
function words(n, out = []) {
  if (n.nodeName === '#text') out.push(...n.value.split(/\s+/).filter(Boolean))
  else if (!isEl(n) || !SKIP.has(n.tagName)) kids(n).forEach((c) => words(c, out))
  return out
}
const scriptText = (e) => kids(e).map((c) => c.value ?? '').join('')

function facts(file) {
  const doc = parse(readFileSync(file, 'utf8'))
  const all = []
  const walk = (n) => {
    if (isEl(n)) all.push(n)
    kids(n).forEach(walk)
  }
  walk(doc)
  const head = all.find((e) => e.tagName === 'head')
  const body = all.find((e) => e.tagName === 'body')
  const inHead = (e) => {
    for (let p = e.parentNode; p; p = p.parentNode) if (p === head) return true
    return false
  }
  return {
    title: scriptText(all.find((e) => e.tagName === 'title') ?? { childNodes: [] }),
    meta: all.filter((e) => e.tagName === 'meta' && inHead(e)).map((e) => e.attrs.map((a) => `${a.name}=${a.value}`).join(' ')),
    links: all.filter((e) => e.tagName === 'link' && /canonical|alternate|icon|manifest/.test(get(e, 'rel') ?? '')).map((e) => `${get(e, 'rel')} ${get(e, 'href')}`),
    jsonld: all.filter((e) => e.tagName === 'script' && get(e, 'type') === 'application/ld+json').map((e) => JSON.stringify(JSON.parse(scriptText(e)))),
    words: words(body),
    headings: all.filter((e) => /^h[1-6]$/.test(e.tagName)).map((e) => `${e.tagName} ${words(e).join(' ')}`),
    anchors: all.filter((e) => e.tagName === 'a').map((e) => `${get(e, 'href') ?? '(no href)'} ${words(e).join(' ')}`),
    alts: all.filter((e) => get(e, 'alt') !== undefined || get(e, 'aria-label') !== undefined).map((e) => `${e.tagName} ${get(e, 'alt') ?? ''} ${get(e, 'aria-label') ?? ''}`),
    doc,
  }
}

/* The markup outside the app screens: every element, its attributes and its text, with each screen's insides left out
   (scripts/check-screens.mjs compares those). */
function outline(n, out = [], depth = 0) {
  if (n.nodeName === '#text') {
    const t = n.value.replace(/\s+/g, ' ')
    if (t.trim()) out.push(`${depth} "${t.trim()}"`)
    return out
  }
  if (!isEl(n)) {
    kids(n).forEach((c) => outline(c, out, depth))
    return out
  }
  out.push(`${depth} <${n.tagName} ${unhash(n.attrs.map((a) => `${a.name}="${a.value}"`).join(' '))}>`)
  if (n.tagName === 'script' || n.tagName === 'style') out.push(`${depth} ${unhash(kids(n).map((c) => c.value ?? '').join(''))}`)
  else if (!isScreen(n)) kids(n).forEach((c) => outline(c, out, depth + 1))
  return out
}

let differences = 0
const report = (page, what, a, b) => {
  const la = Array.isArray(a) ? a : [a]
  const lb = Array.isArray(b) ? b : [b]
  if (JSON.stringify(la) === JSON.stringify(lb)) return
  differences++
  const i = la.findIndex((x, k) => x !== lb[k])
  console.log(`  ${page}: ${what} differ (${la.length} vs ${lb.length}), first at ${i}:\n      before ${JSON.stringify(la[i])?.slice(0, 300)}\n      after  ${JSON.stringify(lb[i])?.slice(0, 300)}`)
}

const before = pages(A).map((f) => relative(A, f)).sort()
const after = pages(B).map((f) => relative(B, f)).sort()
report('the site', 'page lists', before, after)
let checked = 0
for (const page of before.filter((p) => after.includes(p))) {
  const a = facts(join(A, page))
  const b = facts(join(B, page))
  for (const k of ['title', 'meta', 'links', 'jsonld', 'words', 'headings', 'anchors', 'alts']) report(page, k, a[k], b[k])
  report(page, 'markup outside the screens', outline(a.doc), outline(b.doc))
  checked++
}
console.log(`Compared ${checked} pages: title, meta, links, JSON-LD, words, headings, anchors, alt text and the markup outside the screens.\nDifferences: ${differences}`)
if (differences) process.exit(1)
