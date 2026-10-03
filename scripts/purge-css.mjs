/* Drops the rules the site never uses from its 1 stylesheet, after the prerender (scripts/prerender.mjs), which then cuts
   each page's own copy from it with `purge` (the same rules, against the page's own HTML and code).
   The design system (src/styles/ds) ships every component and its guideline page's own .ds-* rules; the site uses part
   of it. src/styles/ds stays untouched: this trims the built copy only.

   A rule stays unless 1 of its class names appears nowhere in the built site: not in any page's HTML (the prerendered
   pages and every app screen in them) and not in any script (class names the components set as they run). It is
   conservative on purpose:
   - a token that ends in "-" (a class built at run time, `s-nav--cta-${size}`) keeps every class that starts with it;
   - classes inside a functional pseudo class (:is(), :not(), :has(), :where()) are never counted against a rule;
   - a selector with an escaped character is kept as written;
   - @font-face, @keyframes, @property and the custom properties on :root are always kept.
   The trimmed file gets a new name from its own contents, so a long cached copy of the old one is never reused. */
import { createHash } from 'node:crypto'
import { readdirSync, statSync } from 'node:fs'
import { readFile, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

function skipString(css, i) {
  const q = css[i]
  let j = i + 1
  while (j < css.length && css[j] !== q) j += css[j] === '\\' ? 2 : 1
  return j + 1
}

/* Top level rules and the at rules that hold rules (@media, @supports, @container, @layer), kept as written otherwise. */
function parse(css) {
  const nodes = []
  let i = 0
  while (i < css.length) {
    let j = i
    let paren = 0
    while (j < css.length) {
      const c = css[j]
      if (c === '"' || c === "'") {
        j = skipString(css, j)
        continue
      }
      if (c === '/' && css[j + 1] === '*') {
        const end = css.indexOf('*/', j + 2)
        j = end === -1 ? css.length : end + 2
        continue
      }
      if (c === '(') paren++
      else if (c === ')') paren--
      else if (paren === 0 && (c === '{' || c === ';' || c === '}')) break
      j++
    }
    const prelude = css.slice(i, j).trim()
    if (j >= css.length) {
      if (prelude) nodes.push({ t: 'text', text: prelude })
      break
    }
    if (css[j] === ';') {
      nodes.push({ t: 'text', text: prelude + ';' })
      i = j + 1
      continue
    }
    if (css[j] === '}') {
      i = j + 1
      continue
    }
    let k = j + 1
    let depth = 1
    while (k < css.length && depth) {
      const c = css[k]
      if (c === '"' || c === "'") {
        k = skipString(css, k)
        continue
      }
      if (c === '{') depth++
      else if (c === '}') depth--
      k++
    }
    const body = css.slice(j + 1, k - 1)
    if (prelude.startsWith('@')) {
      const name = prelude.slice(1).split(/[\s({]/)[0].toLowerCase()
      if (['media', 'supports', 'container', 'layer', 'scope', 'document'].includes(name) && body.includes('{'))
        nodes.push({ t: 'group', prelude, children: parse(body) })
      else nodes.push({ t: 'block', prelude, body })
    } else nodes.push({ t: 'rule', selector: prelude, body })
    i = k
  }
  return nodes
}

/* The selector list, split on its top level commas. */
function selectors(list) {
  const out = []
  let depth = 0
  let from = 0
  for (let i = 0; i < list.length; i++) {
    const c = list[i]
    if (c === '(' || c === '[') depth++
    else if (c === ')' || c === ']') depth--
    else if (c === ',' && depth === 0) {
      out.push(list.slice(from, i))
      from = i + 1
    }
  }
  out.push(list.slice(from))
  return out.map((s) => s.trim()).filter(Boolean)
}

/* What a selector demands outright: its own classes, with every parenthesised and bracketed part taken out. */
function demanded(sel) {
  let s = ''
  let depth = 0
  for (const c of sel) {
    if (c === '(' || c === '[') depth++
    else if (c === ')' || c === ']') depth--
    else if (depth === 0) s += c
  }
  return [...s.matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)].map((m) => m[1])
}

function files(dir, ext, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    if (statSync(p).isDirectory()) files(p, ext, out)
    else if (f.endsWith(ext)) out.push(p)
  }
  return out
}

/* The class names a text could set: every word-like token in it. */
export function tokensOf(text, into = new Set()) {
  for (const [t] of text.matchAll(/[A-Za-z_][\w-]*/g)) into.add(t)
  return into
}

/* A stylesheet without the rules whose class names none of `tokens` names (the rules above), and how many went. */
export function purge(css, tokens) {
  const prefixes = [...tokens].filter((t) => t.endsWith('-') && t.length > 2)
  const used = (c) => tokens.has(c) || prefixes.some((p) => c.startsWith(p))
  const keep = (sel) => sel.includes('\\') || demanded(sel).every(used)

  let dropped = 0
  const trim = (nodes) =>
    nodes.flatMap((n) => {
      if (n.t === 'rule') {
        const kept = selectors(n.selector).filter(keep)
        if (!kept.length) {
          dropped++
          return []
        }
        return [{ ...n, selector: kept.join(',') }]
      }
      if (n.t === 'group') {
        const children = trim(n.children)
        return children.length ? [{ ...n, children }] : []
      }
      return [n]
    })
  const emit = (nodes) =>
    nodes
      .map((n) =>
        n.t === 'rule' ? `${n.selector}{${n.body}}` : n.t === 'group' ? `${n.prelude}{${emit(n.children)}}` : n.t === 'block' ? `${n.prelude}{${n.body}}` : n.text,
      )
      .join('')
  return { css: emit(trim(parse(css))), dropped }
}

export async function purgeCss(dist, main) {
  const assets = join(dist, 'assets')
  if (!main || !readdirSync(assets).includes(main)) return null
  const html = files(dist, '.html')
  const js = files(assets, '.js')
  const tokens = new Set()
  for (const f of [...html, ...js]) tokensOf(await readFile(f, 'utf8'), tokens)

  const before = await readFile(join(assets, main), 'utf8')
  const { css: after, dropped } = purge(before, tokens)
  const name = `${main.replace(/-[\w-]+\.css$/, '')}-${createHash('sha256').update(after).digest('base64url').slice(0, 8)}.css`
  await writeFile(join(assets, name), after)
  if (name !== main) await rm(join(assets, main))
  for (const f of html) {
    const page = await readFile(f, 'utf8')
    if (page.includes(main)) await writeFile(f, page.replaceAll(`/assets/${main}`, `/assets/${name}`))
  }
  return { from: main, to: name, before: before.length, after: after.length, dropped }
}
