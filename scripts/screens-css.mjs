/* How the app screens' CSS lays out the whitespace between their tags: shared by scripts/convert-screens.mjs (which
   decides, for every run of whitespace in a screen's HTML, whether to write it as {' '} or leave it out) and
   scripts/check-screens.mjs (which checks that every run a component leaves out is one the browser renders nothing for).

   A run renders nothing:
   - inside an SVG drawing (outside its text);
   - inside a flex or grid container (a rule that surely applies makes it one, and no rule that might apply makes it
     anything else);
   - next to an element that is surely a block in the flow (a div, p, li, header... that no rule of the screens' CSS
     can make inline, inline-*, contents, none, floated or absolutely placed);
   - first or last inside such a block, when no ::before or ::after rule can put content there.
   The rules are read from src/screens (base, kit and every screen's sheet) and matched against each element with a
   small selector engine that errs towards a space showing: pseudo-classes, attribute selectors, sibling combinators,
   the runtime .play class and the page around the screen are taken to match, except where a rule must surely apply.
   A white-space: pre rule (the developer screen's JSON) keeps every space where it is. */
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { root } from './screens-source.mjs'

const SVG_NS = 'http://www.w3.org/2000/svg'
const SVG_TEXT = new Set(['text', 'tspan', 'textPath', 'title', 'desc'])
const BLOCK_TAGS = new Set([
  'address', 'article', 'aside', 'blockquote', 'dd', 'details', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure',
  'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'li', 'main', 'menu', 'nav', 'ol', 'p',
  'pre', 'section', 'summary', 'table', 'ul',
])
const OUT = join(root, 'src/screens')
const fail = (msg) => {
  throw new Error(msg)
}

/* Splits on any of `seps` outside quotes, brackets and parentheses. */
export function splitTop(s, seps) {
  const out = []
  let depth = 0
  let quote = ''
  let cur = ''
  for (const c of s) {
    if (quote) {
      if (c === quote) quote = ''
    } else if (c === '"' || c === "'") quote = c
    else if (c === '(' || c === '[') depth++
    else if (c === ')' || c === ']') depth--
    else if (!depth && seps.includes(c)) {
      out.push(cur)
      cur = ''
      continue
    }
    cur += c
  }
  out.push(cur)
  return out
}

/* Every style rule in a sheet, at any depth of @media, @supports or @container: { selectors, decls, media }. */
function styleRules(css) {
  const rules = []
  const src = css.replace(/\/\*[\s\S]*?\*\//g, '')
  function walk(s, media) {
    let i = 0
    while (i < s.length) {
      let open = -1
      let quote = ''
      for (let j = i; j < s.length; j++) {
        const c = s[j]
        if (quote) {
          if (c === quote) quote = ''
        } else if (c === '"' || c === "'") quote = c
        else if (c === '{') {
          open = j
          break
        }
      }
      if (open === -1) return
      let depth = 1
      let j = open + 1
      quote = ''
      for (; j < s.length && depth; j++) {
        const c = s[j]
        if (quote) {
          if (c === quote) quote = ''
        } else if (c === '"' || c === "'") quote = c
        else if (c === '{') depth++
        else if (c === '}') depth--
      }
      const prelude = s.slice(i, open).split(';').pop().trim()
      const body = s.slice(open + 1, j - 1)
      if (prelude.startsWith('@')) {
        if (/^@(media|supports|container|layer|scope)\b/.test(prelude)) walk(body, true)
      } else {
        if (body.includes('{')) fail(`Nested CSS is not read by the converter: ${prelude}`)
        const decls = splitTop(body, ';')
          .map((d) => d.trim())
          .filter(Boolean)
          .map((d) => {
            const k = d.indexOf(':')
            return [d.slice(0, k).trim().toLowerCase(), d.slice(k + 1).trim().replace(/\s*!important$/i, '').toLowerCase()]
          })
        rules.push({ selectors: splitTop(prelude, ',').map((x) => x.trim()).filter(Boolean), decls, media })
      }
      i = j
    }
  }
  walk(src, false)
  return rules
}

/* A compound selector, loosely: its tag, classes and ids, and its ::before or ::after. Pseudo-classes, attribute
   selectors and the runtime .play class are dropped, so the compound matches at least everything it really does
   (`loose` says something was dropped). */
function compound(str) {
  let s = ''
  let depth = 0
  let quote = ''
  for (const c of str) {
    if (quote) {
      if (c === quote) quote = ''
      continue
    }
    if (c === '"' || c === "'") quote = c
    else if (c === '(' || c === '[') depth++
    else if (c === ')' || c === ']') depth--
    else if (!depth) s += c
  }
  const pseudo = s.match(/::?(before|after)\b/)?.[1]
  const loose = s.length !== str.length || /:/.test(s.replace(/::?(before|after)\b/, '')) || /\.play\b/.test(s)
  s = s.replace(/::?[\w-]+/g, '')
  const tag = s.match(/^[a-zA-Z][\w-]*/)?.[0]?.toLowerCase()
  const classes = [...s.matchAll(/\.([\w-]+)/g)].map((m) => m[1]).filter((c) => c !== 'play')
  const ids = [...s.matchAll(/#([\w-]+)/g)].map((m) => m[1])
  return { tag, classes, ids, pseudo, loose }
}

/* A selector: its compounds, right most last, and the combinators between them. */
function selector(sel) {
  const parts = []
  const combs = []
  let cur = ''
  let depth = 0
  let quote = ''
  let pending = ''
  const flush = () => {
    if (!cur.trim()) return
    if (parts.length) combs.push(pending || ' ')
    parts.push(compound(cur.trim()))
    cur = ''
    pending = ''
  }
  for (const c of sel) {
    if (quote) {
      if (c === quote) quote = ''
      cur += c
      continue
    }
    if (c === '"' || c === "'") quote = c
    if (c === '(' || c === '[') depth++
    if (c === ')' || c === ']') depth--
    if (!depth && !quote && /[\s>+~]/.test(c)) {
      flush()
      if (c !== ' ' && !/\s/.test(c)) pending = c
      continue
    }
    cur += c
  }
  flush()
  return { parts, combs, loose: parts.some((p) => p.loose) || combs.some((c) => c !== ' ' && c !== '>') }
}

const SHEETS = [
  join(OUT, 'base.css'),
  join(OUT, 'kit.css'),
  ...readdirSync(join(OUT, 'css'))
    .filter((f) => f.endsWith('.css'))
    .sort()
    .map((f) => join(OUT, 'css', f)),
]
const OUTER_OK = new Set(['block', 'flex', 'grid', 'list-item', 'table', 'flow-root'])
const CONTAINER_OK = new Set([...OUTER_OK, 'inline-block', 'inline-flex', 'inline-grid', 'none', 'table-cell'])
/* A flex or grid container renders no space between its children at all (display none renders nothing either). */
const BOX = new Set(['flex', 'grid', 'inline-flex', 'inline-grid'])
/* Rules that matter: { sel, outer, container, pre, displays, media, pseudo }. */
const RULES = []
for (const file of SHEETS) {
  for (const { selectors, decls, media } of styleRules(readFileSync(file, 'utf8'))) {
    const v = (k) => decls.filter(([p]) => p === k).map(([, x]) => x)
    const outer =
      v('display').some((x) => !OUTER_OK.has(x)) ||
      v('position').some((x) => x === 'absolute' || x === 'fixed') ||
      v('float').some((x) => x !== 'none')
    const container = v('display').some((x) => !CONTAINER_OK.has(x))
    const pre = v('white-space').some((x) => /^(pre|pre-wrap|pre-line|break-spaces)\b/.test(x))
    for (const s of selectors) {
      const sel = selector(s)
      const pseudo = sel.parts.at(-1)?.pseudo
      if (pseudo) RULES.push({ sel, pseudo })
      else if (outer || container || pre || v('display').length) RULES.push({ sel, outer, container, pre, displays: v('display'), media })
    }
  }
}

/* ---- the selector engine (over the parse5 tree of 1 screen) ---- */

const isEl = (n) => n && typeof n.tagName === 'string'
const parentEl = (n) => (isEl(n.parentNode) ? n.parentNode : null)
const attr = (el, name) => el.attrs.find((a) => a.name === name)?.value
const classesOf = (el) => (attr(el, 'class') ?? '').split(/\s+/).filter(Boolean)
const children = (n) => (n.tagName === 'template' ? n.content.childNodes : n.childNodes)

/* The reader for a set of screens (name -> HTML): every class they use is one the page around a screen never uses, so
   a compound naming one cannot match there. */
export function screensCss(sources) {
  const SCREEN_CLASSES = new Set()
  for (const html of sources.values()) for (const m of html.matchAll(/\sclass="([^"]*)"/g)) m[1].split(/\s+/).forEach((c) => c && SCREEN_CLASSES.add(c))

  function compoundMatches(el, c) {
    if (c.tag && c.tag !== '*' && c.tag !== el.tagName.toLowerCase()) return false
    const cls = classesOf(el)
    if (!c.classes.every((x) => cls.includes(x))) return false
    return c.ids.every((x) => attr(el, 'id') === x)
  }
  const outside = (c) => !c.classes.some((x) => SCREEN_CLASSES.has(x)) && !c.ids.length
  /* Could `sel` match `el`? Loose (strict = false): yes whenever it might, counting what was dropped from the selector as
     matching, and ancestors outside the screen. Strict: only when it surely does, within the screen itself. */
  function matchesFrom(el, sel, k, strict) {
    if (!compoundMatches(el, sel.parts[k])) return false
    if (k === 0) return true
    const comb = sel.combs[k - 1]
    if (comb === '+' || comb === '~') return !strict
    const rest = () => !strict && sel.parts.slice(0, k).every(outside)
    if (comb === '>') {
      const p = parentEl(el)
      return p ? matchesFrom(p, sel, k - 1, strict) : rest()
    }
    for (let a = parentEl(el); a; a = parentEl(a)) if (matchesFrom(a, sel, k - 1, strict)) return true
    return rest()
  }
  function matches(el, sel, strict = false) {
    if (strict && sel.loose) return false
    return matchesFrom(el, sel, sel.parts.length - 1, strict)
  }

  /* What the CSS could make of an element: inline (or out of the flow), a container whose start and end can show a
     space, generated content before or after, white-space: pre. Cached per element. */
  const INFO = new WeakMap()
  function info(el) {
    let i = INFO.get(el)
    if (i) return i
    i = { outer: false, container: false, before: false, after: false, pre: false, box: false }
    const style = attr(el, 'style') ?? ''
    const inline = /(^|;)\s*(display|position|float)\s*:/i.test(style)
    if (inline) i.outer = i.container = true
    const displays = new Set()
    let surelyBox = false
    for (const r of RULES) {
      if (r.pseudo) {
        const base = { ...r.sel, parts: [...r.sel.parts.slice(0, -1), { ...r.sel.parts.at(-1), pseudo: undefined }] }
        if (!i[r.pseudo] && matches(el, base)) i[r.pseudo] = true
        continue
      }
      if (!matches(el, r.sel)) continue
      if (r.outer) i.outer = true
      if (r.container) i.container = true
      if (r.pre) i.pre = true
      r.displays.forEach((d) => displays.add(d))
      if (!surelyBox && !r.media && r.displays.some((d) => BOX.has(d)) && matches(el, r.sel, true)) surelyBox = true
    }
    /* Surely a flex or grid container: a rule that surely applies makes it one, and nothing that might apply makes it
       anything else. */
    i.box = !inline && surelyBox && [...displays].every((d) => BOX.has(d) || d === 'none')
    INFO.set(el, i)
    return i
  }
  const surelyBlock = (n) => isEl(n) && n.namespaceURI !== SVG_NS && BLOCK_TAGS.has(n.tagName) && !info(n).outer
  const blockContainer = (el) => el.namespaceURI !== SVG_NS && BLOCK_TAGS.has(el.tagName) && !info(el).container
  const inPre = (el) => {
    for (let a = el; a; a = parentEl(a)) if (info(a).pre) return true
    return false
  }

  /* Why a run of whitespace in `el`, between `prev` and `next` (items: { t: 'el', node } or { t: 'text' }, undefined
     at either end), renders nothing; null when it may render a space. */
  function dropReason(el, prev, next) {
    if (inPre(el)) return null
    if (el.namespaceURI === SVG_NS && !SVG_TEXT.has(el.tagName)) return 'svg'
    if (info(el).box) return 'flex or grid'
    if ((prev?.t === 'el' && surelyBlock(prev.node)) || (next?.t === 'el' && surelyBlock(next.node))) return 'block'
    const box = blockContainer(el)
    const i = info(el)
    if (!prev && !next) return box && !i.before && !i.after ? 'edge' : null
    if (!prev) return box && !i.before ? 'edge' : null
    if (!next) return box && !i.after ? 'edge' : null
    return null
  }

  return { isEl, parentEl, attr, classesOf, children, info, inPre, dropReason }
}
