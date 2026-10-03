/* Converts every app screen from its HTML (src/screens/html/NAME.html, as scripts/sync-assets.mjs synced and
   rewrote it: Recipes naming, the final ring geometry, role="none" on drawn links) into a React component,
   src/screens/NAME.tsx. Run once on 3 Oct 2026 and kept for the record: the TSX files are the screens' source now,
   and scripts/check-screens.mjs proves each one renders the markup it came from.
     node scripts/convert-screens.mjs [--from DIR]
   (default: src/screens/html, or those copies at the conversion commit in git: scripts/screens-source.mjs)

   What it writes:
   - src/screens/NAME.tsx: 1 component per screen, a faithful translation of the markup (className, style objects,
     SVG attributes in camelCase, the same aria and data attributes, the same words; the HTML comments become JSX
     comments). The 14 screens drawn for an agency take the reader's workspace, and say what components/AppScreen's
     forWorkspace said in a company's workspace (components/workspace.ts, wordsFor).
   - src/screens/names.ts (every screen's name, safe for the browser) and src/screens/registry.ts (name -> component,
     for the server only).

   Whitespace. The HTML is indented for reading, and the browser renders a run of spaces and newlines between 2 tags
   as 1 space wherever the tags sit in a line of text. JSX drops a run that holds a newline. So every such run is
   either written as {' '} or left out, and only left out where the browser renders nothing for it:
   - inside an SVG drawing (outside its text);
   - inside a flex or grid container (a rule that surely applies makes it one, and no rule that might apply makes it
     anything else);
   - next to an element that is surely a block in the flow (a div, p, li, header... that no rule of the screens' CSS
     can make inline, inline-*, contents, none, floated or absolutely placed);
   - first or last inside such a block, when no ::before or ::after rule can put content there.
   Text set in a white-space: pre rule (the developer screen's JSON) keeps every space as it is. The CSS rules are read
   from src/screens (base, kit and every screen's sheet), matched against each element with a small selector engine
   that errs towards keeping a space: pseudo-classes, attribute selectors, sibling combinators, the runtime .play
   class and the page around the screen are taken to match, except where a rule must surely apply. */
import { parseFragment } from 'parse5'
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { screensCss, splitTop } from './screens-css.mjs'
import { originalScreens, root } from './screens-source.mjs'

const fromArg = process.argv.indexOf('--from')
const sources = originalScreens(fromArg > -1 ? process.argv[fromArg + 1] : undefined)
const OUT = join(root, 'src/screens')
const css = screensCss(sources)
const { isEl, attr, classesOf, children, inPre } = css

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'])
/* HTML attribute -> React prop. Anything else that is not aria-*, data-* or on PASS stops the conversion. */
const ATTRS = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  'stroke-width': 'strokeWidth',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-linecap': 'strokeLinecap',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-opacity': 'strokeOpacity',
  'fill-opacity': 'fillOpacity',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'clip-path': 'clipPath',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'text-anchor': 'textAnchor',
  'dominant-baseline': 'dominantBaseline',
  'vector-effect': 'vectorEffect',
}
const PASS = new Set([
  'id', 'role', 'title', 'lang', 'dir', 'href', 'src', 'alt', 'width', 'height', 'd', 'fill', 'stroke', 'x', 'y', 'x1',
  'y1', 'x2', 'y2', 'cx', 'cy', 'r', 'rx', 'ry', 'points', 'viewBox', 'pathLength', 'transform', 'opacity', 'offset',
])
/* The words that change with the reader's workspace (components/workspace.ts, wordsFor). */
const WORDS = [
  ['Your agency', 'org'],
  ['Clients', 'lists'],
  ['your-agency.example', 'domain'],
]
const WORDS_RE = new RegExp(WORDS.map(([w]) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g')
const WORD_KEY = Object.fromEntries(WORDS)
const hasWords = (s) => WORDS.some(([w]) => s.includes(w))

const fail = (msg) => {
  throw new Error(msg)
}

/* ---- JSX printing ---- */

const hasNl = (s) => /[\n\r\f]/.test(s)
/* JSX text: the characters JSX reads as syntax, the no-break space and any other invisible space as entities. */
function jsxText(s) {
  return s.replace(/[&<>{}\u00a0\u2000-\u200b\u202f\u205f\u3000\ufeff]/g, (c) =>
    c === '{' ? "{'{'}" : c === '}' ? "{'}'}" : ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\u00a0': '&nbsp;' })[c] ?? `&#x${c.codePointAt(0).toString(16)};`,
  )
}
const jsString = (s) =>
  "'" +
  s.replace(/[\\'\n\r\t\u2028\u2029]/g, (c) => ({ '\\': '\\\\', "'": "\\'", '\n': '\\n', '\r': '\\r', '\t': '\\t' })[c] ?? `\\u${c.codePointAt(0).toString(16).padStart(4, '0')}`) +
  "'"
const tplString = (s) => s.replace(/[\\`]|\$\{/g, (c) => '\\' + c)

/* A text in a screen that changes with the workspace: its fixed parts as JSX text, the words as {ws.KEY}. */
function wordsText(s, ctx, esc) {
  if (!ctx.varies) return esc(s)
  let out = ''
  let last = 0
  for (const m of s.matchAll(WORDS_RE)) {
    out += esc(s.slice(last, m.index)) + `{ws.${WORD_KEY[m[0]]}}`
    last = m.index + m[0].length
    ctx.used = true
  }
  return out + esc(s.slice(last))
}

function camel(prop) {
  if (prop.startsWith('--')) return jsString(prop)
  const p = prop.startsWith('-ms-') ? prop.slice(1) : prop
  return p.replace(/^-(\w)/, (_, c) => c.toUpperCase()).replace(/-(\w)/g, (_, c) => c.toUpperCase())
}
function styleObject(value) {
  const seen = new Set()
  const entries = splitTop(value, ';')
    .map((d) => d.trim())
    .filter(Boolean)
    .map((d) => {
      const k = d.indexOf(':')
      if (k < 1) fail(`Unreadable style declaration "${d}"`)
      const prop = d.slice(0, k).trim()
      const val = d.slice(k + 1).trim()
      if (/!important/i.test(val)) fail(`!important in a style attribute: ${d}`)
      if (seen.has(prop)) fail(`${prop} twice in 1 style attribute`)
      seen.add(prop)
      return `${camel(prop)}: ${jsString(val)}`
    })
  return `{{ ${entries.join(', ')} }}`
}

function attrValue(v, ctx) {
  if (ctx.varies && hasWords(v)) {
    ctx.used = true
    return '{`' + tplString(v).replace(WORDS_RE, (w) => '${ws.' + WORD_KEY[w] + '}') + '`}'
  }
  if (/["\n\r\t]/.test(v)) return `{${jsString(v)}}`
  return `"${v.replace(/&/g, '&amp;')}"`
}

function printAttrs(el, ctx) {
  return el.attrs
    .map((a) => {
      const name = a.prefix ? `${a.prefix}:${a.name}` : a.name
      if (name === 'style') return ` style=${styleObject(a.value)}`
      const prop = ATTRS[name] ?? (PASS.has(name) || /^(aria|data)-[\w-]+$/.test(name) ? name : fail(`${ctx.name}: no React name for the attribute ${name}`))
      return ` ${prop}=${attrValue(a.value, ctx)}`
    })
    .join('')
}

const tally = (g, ctx) => {
  if (g.first) ctx.count[g.keep ? 'kept' : 'dropped']++
}
const comment = (text) => `{/* ${text.replace(/\s+/g, ' ').trim().replace(/\*\//g, '* /')} */}`

/* An element's children as items: elements, texts (without their outer whitespace), comments and gaps (a run of
   whitespace between them, deciding whether it renders a space). */
function items(el) {
  const out = []
  for (const c of children(el)) {
    if (c.nodeName === '#comment') out.push({ t: 'comment', text: c.data })
    else if (c.nodeName === '#text') {
      const m = c.value.match(/^([ \t\n\r\f]*)([\s\S]*?)([ \t\n\r\f]*)$/)
      if (m[1]) out.push({ t: 'gap', ws: m[1] })
      if (m[2]) out.push({ t: 'text', text: m[2] })
      if (m[3] && m[2]) out.push({ t: 'gap', ws: m[3] })
    } else if (isEl(c)) out.push({ t: 'el', node: c })
  }
  /* A run of gaps and comments is 1 gap: the comments render nothing, so the spaces around them collapse into 1. */
  for (let i = 0; i < out.length; i++) {
    if (out[i].t !== 'gap') continue
    let j = i
    while (j + 1 < out.length && (out[j + 1].t === 'gap' || out[j + 1].t === 'comment')) j++
    while (out[j].t !== 'gap') j--
    const group = out.slice(i, j + 1).filter((x) => x.t === 'gap')
    const nl = group.some((g) => hasNl(g.ws))
    const prev = out.slice(0, i).findLast((x) => x.t !== 'comment' && x.t !== 'gap')
    const next = out.slice(j + 1).find((x) => x.t !== 'comment' && x.t !== 'gap')
    const keep = !css.dropReason(el, prev, next)
    /* The first gap of the run carries the space (1, or the run's own spaces when it has no newline). */
    group.forEach((g, k) => {
      g.nl = nl
      g.first = k === 0
      g.keep = keep && k === 0
      g.space = nl ? ' ' : group.map((x) => x.ws).join('')
    })
    i = j
  }
  return out
}

function printText(s, ctx) {
  /* A run of whitespace with a newline in it renders as 1 space, and JSX would read it the same way only on 1 line. */
  return wordsText(s.replace(/[ \t\n\r\f]*[\n\r\f][ \t\n\r\f]*/g, ' '), ctx, jsxText)
}

/* An element in white-space: pre: every character as it is, on 1 line (a newline goes in a string). */
function printPre(el, ctx) {
  const open = `<${el.tagName}${printAttrs(el, ctx)}`
  const kids = children(el)
  if (!kids.length) return open + ' />'
  const body = kids
    .map((c) => {
      if (c.nodeName === '#comment') return comment(c.data)
      if (c.nodeName === '#text') return /[\n\r\t]/.test(c.value) || !c.value.trim() ? `{${jsString(c.value)}}` : wordsText(c.value, ctx, jsxText)
      return printPre(c, ctx)
    })
    .join('')
  return `${open}>${body}</${el.tagName}>`
}

function printEl(el, ind, ctx) {
  if (inPre(el)) return printPre(el, ctx)
  ctx.count.elements++
  const tag = el.tagName
  const open = `<${tag}${printAttrs(el, ctx)}`
  const list = items(el)
  if (VOID.has(tag) || !list.length) return open + ' />'
  const block = list.some((x) => x.t === 'gap' && x.nl)
  const one = (x, at) => (x.t === 'el' ? printEl(x.node, at, ctx) : x.t === 'text' ? printText(x.text, ctx) : x.t === 'comment' ? comment(x.text) : '')
  if (!block) {
    const body = list.map((x) => (x.t === 'gap' ? (tally(x, ctx), x.keep ? x.space : '') : one(x, ind))).join('')
    return `${open}>${body}</${tag}>`
  }
  /* Indented: a new line wherever the HTML had one; a gap that renders a space ends its line with {' '}. */
  const lines = [[]]
  let pending = false
  const push = (tok) => {
    const line = lines.at(-1)
    if (pending) {
      line.push({ s: "{' '}" })
      pending = false
    }
    line.push(tok)
  }
  for (const x of list) {
    if (x.t === 'gap') {
      tally(x, ctx)
      if (x.nl) {
        if (x.keep) {
          if (lines.at(-1).length) lines.at(-1).push({ s: "{' '}" })
          else pending = true
        }
        if (lines.at(-1).length) lines.push([])
      } else if (x.keep) push({ s: x.space, space: true })
      continue
    }
    if (x.t === 'comment' && lines.at(-1).length) lines.push([])
    push({ s: one(x, ind + 1) })
    if (x.t === 'comment') lines.push([])
  }
  if (pending) lines.at(-1).push({ s: "{' '}" })
  const pad = '  '.repeat(ind + 1)
  const body = lines
    .filter((l) => l.length)
    .map((l) => {
      /* JSX trims the spaces at either end of a line: those become strings. */
      const toks = l.map((t, k) => (t.space && (k === 0 || k === l.length - 1) ? `{${jsString(t.s)}}` : t.s))
      return pad + toks.join('')
    })
  return `${open}>\n${body.join('\n')}\n${'  '.repeat(ind)}</${tag}>`
}

/* A block comment, wrapped at 120 columns. */
function wrap(text) {
  const lines = ['']
  for (const word of text.split(' ')) {
    if ((lines.at(-1) + ' ' + word).length > 114 && lines.at(-1)) lines.push('')
    lines[lines.length - 1] += (lines.at(-1) ? ' ' : '') + word
  }
  return lines.map((l, i) => (i ? '   ' : '/* ') + l + (i === lines.length - 1 ? ' */' : ''))
}

const pascal = (name) => name[0].toUpperCase() + name.slice(1)

function convert(name, html) {
  const frag = parseFragment(html)
  const top = frag.childNodes.filter((n) => !(n.nodeName === '#text' && !n.value.trim()))
  const lead = top.filter((n) => n.nodeName === '#comment')
  const roots = top.filter(isEl)
  if (roots.length !== 1 || top.length !== roots.length + lead.length) fail(`${name}: expected 1 root element`)
  const rootEl = roots[0]
  if (!/^il appx-il app-/.test(attr(rootEl, 'class') ?? '')) fail(`${name}: the root is not .il.appx-il`)
  const ctx = { name, varies: hasWords(html), used: false, count: { elements: 0, kept: 0, dropped: 0 } }
  const jsx = printEl(rootEl, 2, ctx)
  const fn = `${pascal(name)}Screen`
  const sheets = classesOf(rootEl)
    .filter((c) => /^app-/.test(c) && c !== `app-${name}`)
    .map((c) => `css/${c.slice(4)}.css`)
  const head = [
    ...wrap(
      `The ${name} app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to its root to run the story. ` +
        `Its look and story: ${[`css/${name}.css`, ...sheets].join(' and ')}, loaded by the page, never imported here. ` +
        `Converted from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now.`,
    ),
    ...lead.map((c) => `/* ${c.data.trim()} */`),
  ]
  const body = ctx.varies
    ? [
        `import { wordsFor, type ScreenProps } from '../components/workspace'`,
        '',
        ...head,
        `export function ${fn}({ workspace = 'agency' }: ScreenProps) {`,
        `  const ws = wordsFor(workspace)`,
      ]
    : [...head, `export function ${fn}() {`]
  if (ctx.varies && !ctx.used) fail(`${name}: says a workspace word but none was converted`)
  const src = [...body, '  return (', `    ${jsx}`, '  )', '}', ''].join('\n')
  return { src, fn, varies: ctx.varies, count: ctx.count }
}

const done = []
for (const [name, html] of sources) {
  const r = convert(name, html)
  await writeFile(join(OUT, `${name}.tsx`), r.src)
  done.push({ name, ...r })
  console.log(`${name.padEnd(12)} ${String(r.count.elements).padStart(4)} elements, spaces kept ${String(r.count.kept).padStart(3)}, left out ${String(r.count.dropped).padStart(3)}${r.varies ? '  (workspace)' : ''}`)
}

await writeFile(
  join(OUT, 'names.ts'),
  [
    `/* Every app screen (src/screens/NAME.tsx), by name: what the browser may know about the screens, without their markup`,
    `   (components/screens.ts). scripts/check-screens.mjs checks it against the files and src/screens/registry.ts. */`,
    `export const SCREEN_NAMES: readonly string[] = [`,
    ...done.map((d) => `  '${d.name}',`),
    `]`,
    '',
  ].join('\n'),
)
await writeFile(
  join(OUT, 'registry.ts'),
  [
    `/* Every app screen's component, by name. Server only: the prerender draws the screens into each page's HTML and into`,
    `   dist/screens (src/screens/render.ts); the browser never imports this file, so the screens never ship as code. */`,
    `import type { ComponentType } from 'react'`,
    `import type { ScreenProps } from '../components/workspace'`,
    ...done.map((d) => `import { ${d.fn} } from './${d.name}'`),
    '',
    `export const SCREENS: Readonly<Record<string, ComponentType<ScreenProps>>> = {`,
    ...done.map((d) => `  ${d.name}: ${d.fn},`),
    `}`,
    '',
  ].join('\n'),
)
const t = done.reduce((a, d) => ({ e: a.e + d.count.elements, k: a.k + d.count.kept, x: a.x + d.count.dropped }), { e: 0, k: 0, x: 0 })
console.log(`Converted ${done.length} screens (${done.filter((d) => d.varies).length} take the workspace): ${t.e} elements; spaces between tags kept ${t.k}, left out ${t.x}.`)
