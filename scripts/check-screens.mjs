/* Proves every app screen's component draws the markup it was converted from (scripts/convert-screens.mjs):
   renderToStaticMarkup of each component (src/screens/render.ts), in both workspaces, against the screen's HTML as it
   stood before the conversion (scripts/screens-source.mjs) and, for a company's workspace, that HTML as AppScreen's
   forWorkspace rewrote it.
     node scripts/check-screens.mjs [--from DIR]      (npm run check:screens)

   Both sides are parsed with parse5 and normalised the way a browser reads them: attribute order, the spacing inside
   class and style attributes, entity encoding (parse5 decodes both), a run of whitespace with a newline in it as 1
   space, comments (React writes none) and the whitespace between tags. That whitespace is still compared run by run:
   a run the component adds, or one whose spaces differ, is a difference, and so is a run it leaves out unless the
   browser renders nothing for it there (scripts/screens-css.mjs: inside an SVG drawing or a flex or grid container,
   beside a block, at the start or end of one); those are counted by why.
   It also checks that src/screens/names.ts, src/screens/registry.ts and the NAME.tsx files name the same screens, and
   that every screen's root is the .il element AppScreen plays. The words changed on purpose since the conversion are
   applied to the originals first (EDITS below). Exits 1 on any difference. */
import { parseFragment } from 'parse5'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { screensCss } from './screens-css.mjs'
import { loadScreens } from './screens-ssr.mjs'
import { forWorkspace, originalScreens, root } from './screens-source.mjs'

const fromArg = process.argv.indexOf('--from')
const originals = originalScreens(fromArg > -1 ? process.argv[fromArg + 1] : undefined)
const { renderScreen, SCREEN_NAMES } = await loadScreens()
const css = screensCss(originals)

const isEl = (n) => typeof n.tagName === 'string'
const nl = (s) => s.replace(/[ \t\n\r\f]*[\n\r\f][ \t\n\r\f]*/g, ' ')

function attrs(el) {
  return el.attrs
    .map((a) => {
      const name = a.prefix ? `${a.prefix}:${a.name}` : a.name
      let v = a.value
      if (name === 'class') v = v.trim().split(/\s+/).join(' ')
      if (name === 'style')
        v = v
          .split(';')
          .map((d) => d.trim())
          .filter(Boolean)
          .map((d) => d.slice(0, d.indexOf(':')).trim() + ':' + d.slice(d.indexOf(':') + 1).trim())
          .join(';')
      return [name, v]
    })
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
}

/* An element's children as `cores` (elements and texts without their outer whitespace) and `gaps`: gaps[k] is the
   whitespace before cores[k] (gaps[cores.length] the whitespace at the end), or null. */
function split(el) {
  const kids = (el.tagName === 'template' ? el.content : el).childNodes.filter((n) => n.nodeName !== '#comment')
  const cores = []
  const gaps = [null]
  const gap = (ws) => {
    if (ws) gaps[cores.length] = /[\n\r\f]/.test(ws) ? ' ' : ws
  }
  let text = ''
  const flush = () => {
    if (!text) return
    const m = text.match(/^([ \t\n\r\f]*)([\s\S]*?)([ \t\n\r\f]*)$/)
    gap(m[1])
    if (m[2]) {
      cores.push({ text: nl(m[2]) })
      gaps.push(null)
      gap(m[3])
    }
    text = ''
  }
  for (const n of kids) {
    if (n.nodeName === '#text') text += n.value
    else {
      flush()
      cores.push({ el: n })
      gaps.push(null)
    }
  }
  flush()
  return { cores, gaps }
}

const tally = { compared: 0, elements: 0, kept: 0, added: 0, left: { svg: 0, 'flex or grid': 0, block: 0, edge: 0 } }
const diffs = []
const describe = (el) => `${el.tagName}${(el.attrs.find((a) => a.name === 'class')?.value ?? '').split(/\s+/).filter(Boolean).map((c) => '.' + c).join('').slice(0, 60)}`

function compare(a, b, path) {
  tally.elements++
  const here = `${path} > ${describe(a)}`
  if (a.tagName !== b.tagName || a.namespaceURI !== b.namespaceURI) return diffs.push(`${here}: element ${b.tagName}`)
  const aa = JSON.stringify(attrs(a))
  const ba = JSON.stringify(attrs(b))
  if (aa !== ba) diffs.push(`${here}: attributes\n      was ${aa}\n      now ${ba}`)
  const A = split(a)
  const B = split(b)
  const kinds = (x) => x.cores.map((c) => (c.el ? '<' + c.el.tagName : JSON.stringify(c.text))).join(' ')
  if (A.cores.length !== B.cores.length || A.cores.some((c, k) => !!c.el !== !!B.cores[k].el || (c.text !== undefined && c.text !== B.cores[k].text)))
    return diffs.push(`${here}: children\n      was ${kinds(A).slice(0, 400)}\n      now ${kinds(B).slice(0, 400)}`)
  const item = (c) => c && (c.el ? { t: 'el', node: c.el } : { t: 'text' })
  A.gaps.forEach((g, k) => {
    const h = B.gaps[k]
    if (g === null && h === null) return
    if (g === null) return tally.added++, diffs.push(`${here}: a space added before child ${k}`)
    if (h !== null) {
      if (g !== h) diffs.push(`${here}: the space before child ${k} was ${JSON.stringify(g)}, now ${JSON.stringify(h)}`)
      else tally.kept++
      return
    }
    const why = css.dropReason(a, item(A.cores[k - 1]), item(A.cores[k]))
    if (why) tally.left[why]++
    else diffs.push(`${here}: the space before child ${k} (${JSON.stringify(g)}) was left out, and it can render`)
  })
  A.cores.forEach((c, k) => c.el && compare(c.el, B.cores[k].el, here))
}

function root1(html) {
  const els = parseFragment(html).childNodes.filter(isEl)
  if (els.length !== 1) throw new Error(`expected 1 root element, found ${els.length}`)
  return els[0]
}

/* The same screens everywhere. */
const files = readdirSync(join(root, 'src/screens'))
  .filter((f) => f.endsWith('.tsx'))
  .map((f) => f.slice(0, -4))
  .sort()
const registry = [...readFileSync(join(root, 'src/screens/registry.ts'), 'utf8').matchAll(/^ {2}(\w+): \w+Screen,$/gm)].map((m) => m[1]).sort()
const lists = { 'src/screens/names.ts': [...SCREEN_NAMES].sort(), 'src/screens/registry.ts': registry, 'src/screens/*.tsx': files, 'the original HTML': [...originals.keys()].sort() }
for (const [what, names] of Object.entries(lists))
  if (JSON.stringify(names) !== JSON.stringify(files)) diffs.push(`${what} names ${names.length} screens, the .tsx files ${files.length}: ${names.filter((n) => !files.includes(n)).concat(files.filter((n) => !names.includes(n))).join(', ')}`)

/* Words a screen changed on purpose since the conversion, each as [what the original said, what it says now]: James's
   2 Oct naming in the Clay use case (prospects, not clients: UK Shopify brands, Sam at the SMS app), and no money gains
   (3 Oct): each screen states what its recipe's copy now does (a count, hours or the time to the fix), keeping its
   prices and example facts. Each must be in the original exactly once, so an edit that no longer applies is a
   difference, not a silent pass. */
const EDITS = {
  proofmail: [
    ['from Sam at Client A to', 'from Sam at the SMS app to'],
    ['<b>Sam, Client A</b>', '<b>Sam, SMS app</b>'],
    ['sam@client-a.example', 'sam@smsapp.example'],
  ],
  claycols: [
    ['Clay table, its UK ecommerce TAM in the SMS popup view', 'Clay table of UK Shopify brands, in the SMS popup view'],
    ['<i>/</i>UK ecommerce TAM<i>', '<i>/</i>UK Shopify brands<i>'],
  ],
  adcheck: [
    ['paused, saving $410 a day.', 'paused, 36 minutes after it was flagged.'],
    ['<span>$410 a day saved</span>', '<span>36 min after the flag</span>'],
  ],
  suppliers: [
    ['replies cutting the rise to 6%, saving $5,760 a year;', 'replies in writing, cutting the rise to 6%: $424 per 1,000 boxes instead of $472;'],
    ['<b>$5,760</b><span>saved a year</span>', '<b>16 quotes</b><span>in 5 days</span>'],
  ],
  spend: [
    ['OK, saving £5,544 a year.', 'OK.'],
    ['<span>Saved a year</span>', '<span>Unused seats removed</span>'],
  ],
  case: [
    ['$184,000 a year saved. The numbers fill, the saving counts up,', '3,120 staff hours a year saved. The numbers fill, the hours count up,'],
    ['style="--case-k:184"', 'style="--case-k:3;--case-r:120"'],
    ['<span>a year saved</span>', '<span>staff hours a year saved</span>'],
    ['312 tickets × 12 × 50 min × $59/h', '312 tickets × 12 × 50 min'],
  ],
}
function edited(name, html) {
  if (html === undefined) return html
  for (const [was, now] of EDITS[name] ?? []) {
    const n = html.split(was).length - 1
    if (n !== 1) diffs.push(`${name}: the intended edit from ${JSON.stringify(was)} is in the original ${n} times, not once`)
    else html = html.replace(was, () => now)
  }
  return html
}
for (const name of Object.keys(EDITS)) if (!originals.has(name)) diffs.push(`EDITS names ${name}, which is not a screen`)

for (const name of files) {
  const before = diffs.length
  const original = edited(name, originals.get(name))
  for (const workspace of ['agency', 'company']) {
    const drawn = renderScreen(name, workspace)
    if (original === undefined || drawn === undefined) continue
    tally.compared++
    const a = root1(forWorkspace(original, workspace))
    const b = root1(drawn)
    if (!/^il appx-il app-/.test(b.attrs.find((x) => x.name === 'class')?.value ?? '')) diffs.push(`${name}: the root is not the .il element AppScreen plays`)
    compare(a, b, `${name} (${workspace})`)
  }
  if (diffs.length > before) console.log(`  ${name}: ${diffs.length - before} difference${diffs.length - before > 1 ? 's' : ''}`)
}

for (const d of diffs.slice(0, 40)) console.log('  ' + d)
const left = tally.left
console.log(
  `Compared ${tally.compared} renders of ${files.length} screens (agency and company workspaces), ${tally.elements} elements.\n` +
    `Whitespace between tags: ${tally.kept} runs kept as they were, ${tally.added} added; ${Object.values(left).reduce((x, y) => x + y)} left out where they render nothing (inside SVG ${left.svg}, inside a flex or grid container ${left['flex or grid']}, beside a block ${left.block}, at a block's start or end ${left.edge}).\n` +
    `Differences: ${diffs.length}`,
)
if (diffs.length) process.exit(1)
