/* Pulls the partner logos (the tools a run's results land in) into the site as single colour marks.
   Run it whenever a logo is added, changed or removed in the source folder: npm run partners
   Source: Brand/Partner logos in the workspace (override with OBS_PARTNERS=...). Name files after the tool (clay.svg, hubspot.svg,
   google-sheets.svg); a vendor's brand kit can stay zipped, and the older PilotX files in _from-pilotx are read too.
   For each tool it takes the best source (an SVG over a raster; a clean name over a kit over _from-pilotx) and writes:
   - an SVG: every colour becomes currentColor, white details are cut out (a mask), embedded pictures, fixed sizes,
     styles and editor data go, and the viewBox is trimmed to the ink, so every mark sizes from its own outline;
   - or, when only a raster exists, a mask PNG: the logo's ink as alpha (white and transparent both read as empty),
     trimmed and scaled to 80px tall, which the site paints in the text colour with a CSS mask;
   into src/assets/partners/, with manifest.json (what exists and its shape, which the components read) and
   sources.json (where each came from). A placement shows a logo only when its file is here. Which logos go where is
   src/content/partners.ts, and only the tools listed there are synced: delete a tool's line there and the next run
   takes its file off the site (a logo in the folder is not a licence to show it). Rasters other than PNG are read
   through macOS's sips. */
import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { basename, dirname, extname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { deflateSync, inflateSync } from 'node:zlib'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
/* The repo sits in the workspace (homepage/), or in a worktree 1 level deeper (.wt/NAME/). */
const SRC =
  process.env.OBS_PARTNERS ||
  ['../Brand/Partner logos', '../../Brand/Partner logos'].map((p) => resolve(root, p)).find((p) => existsSync(p)) ||
  resolve(root, '../Brand/Partner logos')
const OUT = join(root, 'src/assets/partners')

/* The tools the site may show, how their files are recognised, and which form reads best as a small single colour
   mark: a logo (wordmark or lockup) or a symbol (the icon alone). `prefer` names a file to take first. */
const TOOLS = [
  { id: 'clay', match: /\bclay\b|^clay[\W_]/i, want: 'logo' },
  { id: 'hubspot', match: /hub\s*spot/i, want: 'logo' },
  { id: 'salesforce', match: /salesforce/i, want: 'logo' },
  /* The lockup without the "from Salesforce" line the 2024 kit adds. */
  { id: 'slack', match: /slack/i, avoid: /icon/i, want: 'logo', prefer: [/(^|\/)Slack logo\.png$/] },
  /* Google's and Microsoft's product icons: recognised, but held back while partners.ts leaves them out (their owners
     forbid recolouring them). */
  { id: 'google-sheets', match: /(google[\W_]*)?sheets?\b|googlesheets/i, want: 'symbol' },
  { id: 'gmail', match: /gmail/i, want: 'symbol' },
  { id: 'outlook', match: /outlook/i, want: 'symbol' },
  { id: 'microsoft-teams', match: /teams/i, want: 'symbol' },
  { id: 'zapier', match: /zapier/i, want: 'logo' },
  { id: 'make', match: /^make([\W_]|$)|make\.com/i, want: 'logo' },
  { id: 'n8n', match: /n8n/i, want: 'logo' },
]
/* The older PilotX files, by their own names. Anything not listed here (Shopify, Airtable, Intercom, Zendesk, Gorgias)
   is never pulled in: those need the founders' OK first. */
const PILOTX = {
  'Slack logo.png': 'slack',
  'Salesforce.com_logo.svg.webp': 'salesforce',
}
const RASTER = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif'])
/* A brand kit's banners and app icons (a logo on a coloured square) are never a mark. */
const NEVER = /(^|[/_\s-])(banner|icon)[\s_-]\d+\.\w+$/i
const MASK_H = 80

if (!existsSync(SRC)) {
  console.error(`Partner logos not found at ${SRC}. The committed marks in src/assets/partners stay as they are.`)
  process.exit(1)
}

/* The tools src/content/partners.ts lists (the keys of its `partners`): only these are synced. */
const LISTED = await (async () => {
  const text = await readFile(join(root, 'src/content/partners.ts'), 'utf8').catch(() => '')
  const block = text.match(/export const partners\b[^=]*=\s*\{([\s\S]*?)\n\}/)
  if (!block) {
    console.error('Could not read the partners list in src/content/partners.ts. The committed marks stay as they are.')
    process.exit(1)
  }
  return new Set([...block[1].matchAll(/^\s*'?([\w-]+)'?\s*:/gm)].map((m) => m[1]))
})()

/* ---- Finding the sources ------------------------------------------------------------------------------------------ */

const toolFor = (name) => {
  const stem = basename(name, extname(name))
  const exact = TOOLS.find((t) => stem.toLowerCase() === t.id)
  if (exact) return exact.id
  const hit = TOOLS.find((t) => t.match.test(stem) && !(t.avoid && t.avoid.test(stem)))
  return hit?.id
}
const formOf = (name) => (/symbol|[\W_]mark[\W_]|icon/i.test(basename(name)) ? 'symbol' : /logo|wordmark|lockup|_id[\w-]+_\d+\./i.test(basename(name)) ? 'logo' : '')
/* Before reading: a named file first, then the folder's own files over a kit over _from-pilotx, an SVG over a raster,
   the wanted form, and a vendor's primary dark (black ink) file over its white or secondary ones. */
const score = (id, tier, name, label) => {
  const tool = TOOLS.find((t) => t.id === id)
  const pref = tool?.prefer?.findIndex((re) => re.test(label)) ?? -1
  let s = pref >= 0 ? 10_000 - pref * 100 : 0
  s -= tier * 1000
  if (extname(name).toLowerCase() === '.svg') s += 100
  const form = formOf(name)
  if (tool?.want && form === tool.want) s += 40
  else if (tool?.want && form) s -= 40
  if (/primary/i.test(name)) s += 10
  if (/(^|[\W_])(blk|black|dark|ink)([\W_]|$)/i.test(name)) s += 5
  if (/(^|[\W_])(wht|white|light|reversed?)([\W_]|$)/i.test(name)) s -= 5
  return s
}

const candidates = new Map() /* id -> [{ score, label, read, ext }] */
const offer = (id, tier, name, label, read) => {
  if (!id || NEVER.test(name)) return
  const list = candidates.get(id) ?? []
  list.push({ score: score(id, tier, name, label), label, read, ext: extname(name).toLowerCase() })
  candidates.set(id, list)
}

/* Tier 0: a file named after the tool (clay.svg). Tier 1: any other file in the folder. Tier 2: a vendor's kit,
   zipped in the folder or unpacked under _kits/. Tier 3: _from-pilotx. */
const top = await readdir(SRC, { withFileTypes: true })
for (const e of top) {
  if (!e.isFile() || e.name.startsWith('.')) continue
  const full = join(SRC, e.name)
  const ext = extname(e.name).toLowerCase()
  if (ext === '.svg' || RASTER.has(ext)) {
    const id = toolFor(e.name)
    const clean = id && basename(e.name, ext).toLowerCase() === id
    offer(id, clean ? 0 : 1, e.name, e.name, () => readFile(full))
  } else if (ext === '.zip') {
    let entries = []
    try {
      entries = execFileSync('unzip', ['-Z1', full], { encoding: 'utf8', maxBuffer: 1 << 24 }).split('\n').filter(Boolean)
    } catch {
      console.warn(`  could not list ${e.name} (unzip missing?)`)
    }
    const zipTool = toolFor(e.name)
    for (const entry of entries) {
      if (entry.startsWith('__MACOSX') || entry.endsWith('/')) continue
      const ext2 = extname(entry).toLowerCase()
      if (ext2 !== '.svg' && !RASTER.has(ext2)) continue
      offer(toolFor(basename(entry)) ?? zipTool, 2, entry, `${e.name} > ${entry}`, async () =>
        execFileSync('unzip', ['-p', full, entry], { maxBuffer: 1 << 28 }),
      )
    }
  }
}
const kits = join(SRC, '_kits')
if (existsSync(kits)) {
  for (const rel of await readdir(kits, { recursive: true })) {
    const ext = extname(rel).toLowerCase()
    if (ext !== '.svg' && !RASTER.has(ext)) continue
    const parts = rel.split(/[\\/]/)
    offer(toolFor(basename(rel)) ?? toolFor(parts[0]), 2, rel, `_kits/${rel}`, () => readFile(join(kits, rel)))
  }
}
const legacy = join(SRC, '_from-pilotx')
if (existsSync(legacy)) {
  for (const name of await readdir(legacy)) {
    const id = PILOTX[name]
    if (id) offer(id, 3, name, `_from-pilotx/${name}`, () => readFile(join(legacy, name)))
  }
}

/* ---- A tiny XML tree (enough for logo files) -------------------------------------------------------------------- */

function parseXml(src) {
  const rootNode = { tag: '#root', attrs: {}, kids: [] }
  const stack = [rootNode]
  const re = /<!--[\s\S]*?-->|<!\[CDATA\[([\s\S]*?)\]\]>|<![^>]*>|<\?[\s\S]*?\?>|<\/([\w:.-]+)\s*>|<([\w:.-]+)((?:\s+[\w:.-]+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*(\/?)>|([^<]+)/g
  let m
  while ((m = re.exec(src))) {
    const cur = stack[stack.length - 1]
    if (m[1] !== undefined) cur.kids.push({ text: m[1] })
    else if (m[2]) {
      if (stack.length > 1) stack.pop()
    } else if (m[3]) {
      const attrs = {}
      for (const a of m[4].matchAll(/([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) attrs[a[1]] = a[2] ?? a[3]
      const node = { tag: m[3], attrs, kids: [] }
      cur.kids.push(node)
      if (!m[5]) stack.push(node)
    } else if (m[6] !== undefined && m[6].trim()) cur.kids.push({ text: m[6] })
  }
  return rootNode.kids.find((k) => k.tag === 'svg')
}

const esc = (v) => String(v).replace(/&(?!(?:[a-z]+|#\d+|#x[\da-f]+);)/gi, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
function serialize(n) {
  if (n.text !== undefined) return n.text.replace(/&(?!(?:[a-z]+|#\d+|#x[\da-f]+);)/gi, '&amp;').replace(/</g, '&lt;')
  const attrs = Object.entries(n.attrs)
    .map(([k, v]) => ` ${k}="${esc(v)}"`)
    .join('')
  return n.kids.length ? `<${n.tag}${attrs}>${n.kids.map(serialize).join('')}</${n.tag}>` : `<${n.tag}${attrs}/>`
}
const clone = (n) => (n.text !== undefined ? { text: n.text } : { tag: n.tag, attrs: { ...n.attrs }, kids: n.kids.map(clone) })
const walk = (n, fn, parents = []) => {
  if (n.text !== undefined) return
  fn(n, parents)
  for (const k of n.kids) walk(k, fn, [...parents, n])
}

/* ---- SVG: to a single colour mark ------------------------------------------------------------------------------- */

const SHAPES = new Set(['path', 'rect', 'circle', 'ellipse', 'polygon', 'polyline', 'line', 'use', 'text', 'tspan'])
const DROP = new Set(['metadata', 'title', 'desc', 'image', 'script', 'foreignObject', 'style', 'filter', 'pattern', 'linearGradient', 'radialGradient'])
const PRESENTATION = ['fill', 'stroke', 'fill-rule', 'clip-rule', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'opacity', 'fill-opacity', 'stroke-opacity', 'display', 'visibility', 'font-family', 'font-size', 'font-weight', 'letter-spacing']
/* Moved from a class rule or a style attribute onto the element (the rest of a style goes). */
const TRANSFER = [...PRESENTATION, 'clip-path', 'mask', 'mask-type']
const KEEP_ATTR = new Set(['mask-type', 'd', 'x', 'y', 'width', 'height', 'cx', 'cy', 'r', 'rx', 'ry', 'x1', 'y1', 'x2', 'y2', 'points', 'transform', 'href', 'xlink:href', 'id', 'clip-path', 'mask', 'clipPathUnits', 'maskUnits', 'maskContentUnits', 'viewBox', 'text-anchor', 'dx', 'dy', ...PRESENTATION])

function colour(v) {
  if (!v) return null
  v = v.trim().toLowerCase()
  if (v === 'none' || v === 'transparent') return 'none'
  if (v.startsWith('url(')) return 'url'
  if (v === 'white') return [255, 255, 255]
  if (v === 'black') return [0, 0, 0]
  let m = v.match(/^#([\da-f]{3,8})$/)
  if (m) {
    const h = m[1].length <= 4 ? [...m[1].slice(0, 3)].map((c) => c + c).join('') : m[1].slice(0, 6)
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16))
  }
  m = v.match(/^rgba?\(\s*([\d.]+)%?[\s,]+([\d.]+)%?[\s,]+([\d.]+)%?/)
  if (m) return [m[1], m[2], m[3]].map((x) => (v.includes('%') ? Math.round((+x * 255) / 100) : +x))
  return 'other'
}
const isWhite = (c) => Array.isArray(c) && Math.min(...c) >= 240

function decls(text) {
  const out = {}
  for (const part of (text || '').split(';')) {
    const i = part.indexOf(':')
    if (i > 0) out[part.slice(0, i).trim()] = part.slice(i + 1).trim()
  }
  return out
}

async function cleanSvg(text) {
  const svg = parseXml(text.toString('utf8'))
  if (!svg) return null
  /* class rules from <style>, then inline styles, become attributes */
  const rules = {}
  walk(svg, (n) => {
    if (n.tag !== 'style') return
    const css = n.kids.map((k) => k.text ?? '').join('').replace(/\/\*[\s\S]*?\*\//g, '')
    for (const m of css.matchAll(/([^{}]+)\{([^}]*)\}/g))
      for (const sel of m[1].split(',').map((s) => s.trim()))
        if (/^\.[\w-]+$/.test(sel)) rules[sel.slice(1)] = { ...(rules[sel.slice(1)] || {}), ...decls(m[2]) }
  })
  const ids = new Map()
  walk(svg, (n) => {
    if (n.attrs.id) ids.set(n.attrs.id, n)
    const own = {}
    for (const c of (n.attrs.class || '').split(/\s+/)) if (rules[c]) Object.assign(own, rules[c])
    Object.assign(own, decls(n.attrs.style))
    for (const [k, v] of Object.entries(own)) if (TRANSFER.includes(k)) n.attrs[k] = v
    delete n.attrs.style
    delete n.attrs.class
  })
  /* references to a pattern (an embedded picture) or a filter take their shape with them */
  const refTag = (v) => {
    const m = (v || '').match(/url\(\s*['"]?#([^'")\s]+)/)
    return m ? ids.get(m[1])?.tag : undefined
  }
  const prune = (n) => {
    n.kids = n.kids.filter((k) => {
      if (k.text !== undefined) return false
      if (DROP.has(k.tag) || k.tag.includes(':')) return false
      if (k.attrs.display === 'none' || k.attrs.visibility === 'hidden') return false
      if (refTag(k.attrs.fill) === 'pattern') return false
      return true
    })
    for (const k of n.kids) {
      for (const a of Object.keys(k.attrs)) if (!KEEP_ATTR.has(a)) delete k.attrs[a]
      if (k.attrs['xlink:href']) {
        k.attrs.href = k.attrs['xlink:href']
        delete k.attrs['xlink:href']
      }
      prune(k)
    }
    n.kids = n.kids.filter((k) => k.tag !== 'g' || k.kids.length > 0)
  }
  prune(svg)
  for (const k of Object.keys(svg.attrs)) if (!['viewBox', 'width', 'height', 'fill', 'stroke'].includes(k)) delete svg.attrs[k]

  /* The view box: its own, or its width and height */
  let vb = (svg.attrs.viewBox || '').trim().split(/[\s,]+/).map(Number)
  if (vb.length !== 4 || vb.some((x) => !isFinite(x))) vb = [0, 0, parseFloat(svg.attrs.width) || 100, parseFloat(svg.attrs.height) || 100]

  /* Each shape's own fill and stroke, resolved through its groups, outside clip paths, masks and symbols' defs:
     ink (any colour), white, or none. */
  const inDefs = (parents) => parents.some((p) => ['clipPath', 'mask', 'defs', 'symbol', 'marker'].includes(p.tag))
  const plan = new Map() /* shape -> { fill, stroke }, in drawing order */
  walk(svg, (n, parents) => {
    if (!SHAPES.has(n.tag) || inDefs(parents)) return
    const chain = [...parents, n]
    const look = (prop, def) => {
      for (let i = chain.length - 1; i >= 0; i--) if (chain[i].attrs[prop] !== undefined) return chain[i].attrs[prop]
      return def
    }
    const opacityZero = (prop) => parseFloat(look(prop, '1')) === 0 || parseFloat(look('opacity', '1')) === 0
    const kind = (prop, def) => {
      const c = colour(look(prop, def))
      if (c === 'none' || c === null || opacityZero(`${prop}-opacity`)) return 'none'
      return isWhite(c) ? 'white' : 'ink'
    }
    const fill = kind('fill', 'black'), stroke = kind('stroke', 'none')
    plan.set(n, { fill, stroke, was: { fill, stroke }, hue: String(look('fill', 'black')).toLowerCase().replace(/\s/g, '') })
  })
  /* Shapes kept in defs for <use> (symbols) take the ink too; clip paths and masks keep their own values. */
  walk(svg, (n, parents) => {
    if (!inDefs(parents) || parents.some((p) => p.tag === 'clipPath' || p.tag === 'mask')) return
    for (const a of ['fill', 'stroke']) {
      const c = colour(n.attrs[a])
      if (c && c !== 'none') n.attrs[a] = 'currentColor'
    }
  })
  /* Colour leaves the groups: every shape states its own. Opacity goes too, so overlaps read as 1 solid mark. */
  walk(svg, (n, parents) => {
    if (inDefs(parents) || ['svg', 'defs', 'clipPath', 'mask', 'symbol', 'marker'].includes(n.tag)) return
    for (const a of ['fill', 'stroke', 'opacity', 'fill-opacity', 'stroke-opacity']) delete n.attrs[a]
  })
  delete svg.attrs.fill
  delete svg.attrs.stroke

  /* A copy of the drawing with every planned paint set by `pick(entry, 'fill' | 'stroke')`; shapes left with neither
     paint go. */
  const paintWith = (tree, pick, more) => {
    const t = clone(tree)
    const map = new Map()
    const pair = (a, b) => {
      if (a.text !== undefined) return
      const p = plan.get(a)
      if (p) map.set(b, p)
      a.kids.forEach((k, i) => pair(k, b.kids[i]))
    }
    pair(tree, t)
    walk(t, (n) => {
      const p = map.get(n)
      if (!p) return
      for (const prop of ['fill', 'stroke']) n.attrs[prop] = pick(p, prop)
      if (n.attrs.fill === 'none' && n.attrs.stroke === 'none') n.drop = true
      if (n.attrs.stroke === 'none') for (const a of ['stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit']) delete n.attrs[a]
      if (more) Object.assign(n.attrs, more(p) ?? {})
    })
    const strip = (n) => {
      n.kids = n.kids.filter((k) => !k.drop)
      n.kids.forEach(strip)
      n.kids = n.kids.filter((k) => k.text !== undefined || !['g', 'defs'].includes(k.tag) || k.kids.length > 0)
    }
    strip(t)
    return t
  }
  const alpha = async (pick) => {
    const t = paintWith(svg, pick)
    const { Resvg } = await import('@resvg/resvg-js')
    const fit = vb[2] >= vb[3] ? { mode: 'width', value: 320 } : { mode: 'height', value: 320 }
    const r = new Resvg(serialize({ tag: 'svg', attrs: { xmlns: 'http://www.w3.org/2000/svg', viewBox: vb.join(' ') }, kids: t.kids }), { fitTo: fit }).render()
    const px = r.pixels /* a getter that copies: read it once */
    const out = new Float32Array(r.width * r.height)
    for (let i = 0; i < out.length; i++) out[i] = px[i * 4 + 3] / 255
    return out
  }

  /* White is read from what lies under it. Over earlier ink it is a cut out (the letters in Salesforce's cloud). Over
     nothing it is the logo itself, drawn for a dark ground (an all white kit file), unless it is a backdrop that fills
     most of the frame under later ink, which goes. */
  const entries = [...plan.entries()]
  for (let i = 0; i < entries.length; i++) {
    const p = entries[i][1]
    for (const prop of ['fill', 'stroke']) {
      if (p[prop] !== 'white') continue
      const self = await alpha((q, pr) => (q === p && pr === prop ? '#000' : 'none'))
      const under = await alpha((q, pr) => (entries.findIndex(([, e]) => e === q) < i && q.was[pr] === 'ink' ? '#000' : 'none'))
      let area = 0, both = 0, before = 0
      for (let k = 0; k < self.length; k++) {
        area += self[k]
        both += Math.min(self[k], under[k])
        before += under[k]
      }
      if (area === 0) p[prop] = 'none'
      else if (both / area > 0.5) p[prop] = 'knock'
      else if (before === 0 && area / self.length > 0.6 && entries.slice(i + 1).some(([, e]) => e.was.fill === 'ink' || e.was.stroke === 'ink')) p[prop] = 'none'
      else p[prop] = 'ink'
    }
  }
  const knocks = entries.filter(([, e]) => e.fill === 'knock' || e.stroke === 'knock').length

  /* Layers: a shape laid over ink of another colour (a tile on a tile, a badge on an envelope) keeps a thin gap
     around it, so the single colour mark still shows its parts instead of 1 merged blob. */
  const gap = Math.min(vb[2], vb[3]) * 0.05
  let layered = 0
  for (let i = 0; i < entries.length; i++) {
    const p = entries[i][1]
    if (p.fill !== 'ink') continue
    const earlier = entries.slice(0, i).map(([, e]) => e)
    if (!earlier.some((e) => e.was.fill === 'ink' && e.hue !== p.hue)) continue
    const self = await alpha((q, pr) => (q === p && pr === 'fill' ? '#000' : 'none'))
    const under = await alpha((q, pr) => (earlier.includes(q) && pr === 'fill' && q.was.fill === 'ink' && q.hue !== p.hue ? '#000' : 'none'))
    let area = 0, both = 0
    for (let k = 0; k < self.length; k++) {
      area += self[k]
      both += Math.min(self[k], under[k])
    }
    if (area > 0 && both / area > 0.02) {
      p.layer = true
      layered++
    }
  }

  const ink = paintWith(svg, (p, prop) => (p[prop] === 'ink' ? 'currentColor' : 'none'))
  const defs = ink.kids.filter((k) => k.tag === 'defs')
  const body = ink.kids.filter((k) => k.tag !== 'defs')
  let kids = [...defs, ...body]
  if (knocks || layered) {
    /* The mask, painted in drawing order: ink shows (white), a cut out hides (black), a layer first clears its gap. */
    const maskTree = paintWith(
      svg,
      (p, prop) => (p[prop] === 'knock' ? '#000' : p[prop] === 'ink' ? '#fff' : 'none'),
      (p) => (p.layer ? { stroke: '#000', 'stroke-width': +(gap * 2).toFixed(3), 'stroke-linejoin': 'round', 'paint-order': 'stroke' } : null),
    )
    const maskBody = maskTree.kids.filter((k) => k.tag !== 'defs')
    const [x, y, w, h] = vb
    const mask = {
      tag: 'mask',
      attrs: { id: '__PMID__', maskUnits: 'userSpaceOnUse', x: x - w, y: y - h, width: w * 3, height: h * 3 },
      kids: [{ tag: 'rect', attrs: { x: x - w, y: y - h, width: w * 3, height: h * 3, fill: '#fff' }, kids: [] }, ...maskBody],
    }
    const defsNode = defs[0] ?? { tag: 'defs', attrs: {}, kids: [] }
    defsNode.kids.push(mask)
    kids = [defsNode, ...defs.slice(1), { tag: 'g', attrs: { mask: 'url(#__PMID__)' }, kids: body }]
  }
  return { tree: { tag: 'svg', attrs: { xmlns: 'http://www.w3.org/2000/svg', viewBox: vb.join(' ') }, kids }, vb, knocks }
}

/* Trim the view box to the ink: render the mark and read where its pixels are. */
async function inkBox(markup, vb) {
  const { Resvg } = await import('@resvg/resvg-js')
  const W = 1600
  const r = new Resvg(markup.replaceAll('currentColor', '#000').replaceAll('__PMID__', 'pm'), { fitTo: { mode: 'width', value: W } }).render()
  const { width, height, pixels } = r
  let x0 = width, y0 = height, x1 = -1, y1 = -1
  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++)
      if (pixels[(y * width + x) * 4 + 3] > 10) {
        if (x < x0) x0 = x
        if (x > x1) x1 = x
        if (y < y0) y0 = y
        if (y > y1) y1 = y
      }
  if (x1 < 0) return null
  const s = vb[2] / width
  return [vb[0] + x0 * s, vb[1] + y0 * s, (x1 + 1 - x0) * s, (y1 + 1 - y0) * s]
}

/* Fewer digits: as many decimals as the mark's size needs (1/2000 of its height), never inside arcs, whose flags can
   run together with the next number. */
function trimNumbers(tree, height) {
  const dp = Math.max(0, Math.min(3, Math.ceil(Math.log10(2000 / height))))
  const round = (s) => s.replace(/-?\d*\.\d+(?:e[-+]?\d+)?/gi, (n) => String(+(+n).toFixed(dp)))
  walk(tree, (n) => {
    for (const a of ['d', 'points', 'transform', 'x', 'y', 'width', 'height', 'cx', 'cy', 'r', 'rx', 'ry', 'x1', 'y1', 'x2', 'y2', 'stroke-width']) {
      if (n.attrs[a] === undefined) continue
      if (a === 'd' && /[aA]/.test(n.attrs[a])) continue
      n.attrs[a] = round(String(n.attrs[a]))
    }
  })
  return dp
}

/* ---- Rasters: to an alpha mask PNG ------------------------------------------------------------------------------ */

const CRC = new Int32Array(256).map((_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c
})
const crc32 = (buf) => {
  let c = -1
  for (const b of buf) c = CRC[(c ^ b) & 255] ^ (c >>> 8)
  return (c ^ -1) >>> 0
}

function decodePng(buf) {
  let pos = 8, w = 0, h = 0, depth = 8, ctype = 6, interlace = 0, palette = null, trns = null
  const idat = []
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos)
    const type = buf.toString('ascii', pos + 4, pos + 8)
    const data = buf.subarray(pos + 8, pos + 8 + len)
    if (type === 'IHDR') [w, h, depth, ctype, interlace] = [data.readUInt32BE(0), data.readUInt32BE(4), data[8], data[9], data[12]]
    else if (type === 'PLTE') palette = data
    else if (type === 'tRNS') trns = data
    else if (type === 'IDAT') idat.push(data)
    else if (type === 'IEND') break
    pos += 12 + len
  }
  if (interlace) throw new Error('interlaced PNG')
  const ch = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[ctype]
  const bpp = Math.max(1, (ch * depth) >> 3)
  const stride = Math.ceil((w * ch * depth) / 8)
  const raw = inflateSync(Buffer.concat(idat))
  const rgba = new Uint8Array(w * h * 4)
  let prev = new Uint8Array(stride)
  const max = (1 << depth) - 1
  for (let y = 0, p = 0; y < h; y++) {
    const f = raw[p++]
    const line = Uint8Array.from(raw.subarray(p, p + stride))
    p += stride
    for (let i = 0; i < stride; i++) {
      const a = i >= bpp ? line[i - bpp] : 0, b = prev[i], c = i >= bpp ? prev[i - bpp] : 0
      let add = 0
      if (f === 1) add = a
      else if (f === 2) add = b
      else if (f === 3) add = (a + b) >> 1
      else if (f === 4) {
        const pp = a + b - c, pa = Math.abs(pp - a), pb = Math.abs(pp - b), pc = Math.abs(pp - c)
        add = pa <= pb && pa <= pc ? a : pb <= pc ? b : c
      }
      line[i] = (line[i] + add) & 255
    }
    prev = line
    const sample = (i) => (depth === 8 ? line[i] : depth === 16 ? line[i * 2] : (line[(i * depth) >> 3] >> (8 - depth - ((i * depth) & 7))) & max)
    const scale = (v) => (depth >= 8 ? v : Math.round((v * 255) / max))
    for (let x = 0; x < w; x++) {
      const o = (y * w + x) * 4
      if (ctype === 3) {
        const i = sample(x)
        rgba.set([palette[i * 3], palette[i * 3 + 1], palette[i * 3 + 2], trns && i < trns.length ? trns[i] : 255], o)
      } else if (ctype === 0 || ctype === 4) {
        const g = scale(sample(x * ch))
        rgba.set([g, g, g, ctype === 4 ? scale(sample(x * ch + 1)) : 255], o)
      } else {
        rgba.set([sample(x * ch), sample(x * ch + 1), sample(x * ch + 2), ctype === 6 ? sample(x * ch + 3) : 255], o)
      }
    }
  }
  return { w, h, rgba }
}

function encodeGreyAlpha(w, h, alpha) {
  const rows = Buffer.alloc((w * 2 + 1) * h)
  for (let y = 0; y < h; y++) {
    rows[y * (w * 2 + 1)] = 0
    for (let x = 0; x < w; x++) rows[y * (w * 2 + 1) + 1 + x * 2 + 1] = alpha[y * w + x]
  }
  const chunk = (type, data) => {
    const len = Buffer.alloc(4)
    len.writeUInt32BE(data.length)
    const td = Buffer.concat([Buffer.from(type, 'ascii'), data])
    const crc = Buffer.alloc(4)
    crc.writeUInt32BE(crc32(td))
    return Buffer.concat([len, td, crc])
  }
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(w, 0)
  ihdr.writeUInt32BE(h, 4)
  ihdr.set([8, 4, 0, 0, 0], 8)
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(rows, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

/* Area resample of 1 channel, so thin strokes keep their weight when the logo shrinks. */
function resample(src, sw, sh, dw, dh) {
  const pass = (data, w, h, nw, horizontal) => {
    const n = horizontal ? w : h, m = nw, other = horizontal ? h : w
    const out = new Float32Array(horizontal ? nw * h : w * nw)
    const r = n / m
    for (let o = 0; o < other; o++)
      for (let i = 0; i < m; i++) {
        const a = i * r, b = a + r
        let sum = 0
        for (let j = Math.floor(a); j < Math.min(n, Math.ceil(b)); j++) {
          const wgt = Math.min(b, j + 1) - Math.max(a, j)
          sum += wgt * (horizontal ? data[o * w + j] : data[j * w + o])
        }
        if (horizontal) out[o * nw + i] = sum / r
        else out[i * w + o] = sum / r
      }
    return out
  }
  return pass(pass(src, sw, sh, dw, true), dw, sh, dh, false)
}

async function rasterToMask(bytes, ext, tmp) {
  let png = bytes
  let direct = null
  if (ext === '.png' && bytes.length <= 400_000) {
    try {
      direct = decodePng(bytes)
    } catch {
      direct = null
    }
  }
  if (!direct) {
    const inFile = join(tmp, 'in' + ext)
    const outFile = join(tmp, 'out.png')
    await writeFile(inFile, bytes)
    try {
      execFileSync('sips', ['-s', 'format', 'png', '-Z', '1200', inFile, '--out', outFile], { stdio: 'ignore' })
    } catch {
      throw new Error('needs macOS sips to read this file type')
    }
    png = await readFile(outFile)
  }
  const { w, h, rgba } = direct ?? decodePng(png)
  /* The logo's ink: opaque and not white. A white logo (made for dark grounds) falls back to its alpha alone. */
  const cov = new Float32Array(w * h)
  let inkSum = 0, alphaSum = 0
  for (let i = 0; i < w * h; i++) {
    const [r, g, b, a] = rgba.subarray(i * 4, i * 4 + 4)
    const m = Math.min(r, g, b)
    const ink = m <= 200 ? 1 : m >= 242 ? 0 : (242 - m) / 42
    cov[i] = (a / 255) * ink
    inkSum += cov[i]
    alphaSum += a / 255
  }
  if (inkSum < alphaSum * 0.02) for (let i = 0; i < w * h; i++) cov[i] = rgba[i * 4 + 3] / 255
  let x0 = w, y0 = h, x1 = -1, y1 = -1
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++)
      if (cov[y * w + x] > 0.04) {
        x0 = Math.min(x0, x)
        x1 = Math.max(x1, x)
        y0 = Math.min(y0, y)
        y1 = Math.max(y1, y)
      }
  if (x1 < 0) throw new Error('no ink found')
  const cw = x1 - x0 + 1, chh = y1 - y0 + 1
  const crop = new Float32Array(cw * chh)
  for (let y = 0; y < chh; y++) for (let x = 0; x < cw; x++) crop[y * cw + x] = cov[(y + y0) * w + x + x0]
  const dh = Math.min(MASK_H, chh)
  const dw = Math.max(1, Math.round((cw * dh) / chh))
  const small = dh === chh ? crop : resample(crop, cw, chh, dw, dh)
  const alpha = Uint8Array.from(small, (v) => Math.round(Math.min(1, Math.max(0, v)) * 255))
  return { png: encodeGreyAlpha(dw, dh, alpha), ratio: cw / chh }
}

/* ---- Run ---------------------------------------------------------------------------------------------------------- */

await rm(OUT, { recursive: true, force: true })
await mkdir(OUT, { recursive: true })
const tmp = await mkdtemp(join(tmpdir(), 'partners-'))
const marks = {}
const sources = {}
const known = [...new Set([...TOOLS.map((t) => t.id), ...Object.values(PILOTX)])]
const ids = known.filter((id) => LISTED.has(id))
const held = known.filter((id) => !LISTED.has(id) && candidates.has(id))

/* 1 source, made into a mark. A file whose white parts sit beside its ink (a logo drawn for dark grounds) scores lower
   than its dark twin, since its white words would be cut out of nothing. */
async function make(c) {
  const bytes = await c.read()
  if (c.ext !== '.svg') return { ...(await rasterToMask(bytes, c.ext, tmp)), knocks: 0 }
  const cleaned = await cleanSvg(bytes)
  if (!cleaned) throw new Error('not an SVG')
  const box = await inkBox(serialize(cleaned.tree), cleaned.vb)
  if (!box) {
    /* An SVG that only wraps a picture: use the picture. */
    const m = bytes.toString('utf8').match(/href="data:image\/(png|jpe?g|webp);base64,([^"]+)"/)
    if (!m) throw new Error('no visible ink')
    return { ...(await rasterToMask(Buffer.from(m[2], 'base64'), '.' + m[1].replace('jpeg', 'jpg'), tmp)), knocks: 0 }
  }
  const dp = trimNumbers(cleaned.tree, box[3])
  const f = (v, up) => +(up ? Math.ceil(v * 10 ** dp) : Math.floor(v * 10 ** dp)) / 10 ** dp
  const x = f(box[0]), y = f(box[1])
  const vb = [x, y, f(box[0] + box[2], true) - x, f(box[1] + box[3], true) - y].map((v) => +v.toFixed(dp))
  cleaned.tree.attrs.viewBox = vb.join(' ')
  return { svg: serialize(cleaned.tree) + '\n', ratio: vb[2] / vb[3], knocks: cleaned.knocks }
}

for (const id of ids) {
  const list = (candidates.get(id) ?? []).sort((a, b) => b.score - a.score)
  let best = null
  for (const c of list) {
    if (best && best.final >= c.score) break
    try {
      const made = await make(c)
      const final = c.score - (made.knocks ? 15 : 0)
      if (!best || final > best.final) best = { ...made, final, label: c.label }
    } catch (err) {
      console.warn(`  ${id}: skipped ${c.label} (${err.message})`)
    }
  }
  if (!best) continue
  const file = `${id}.${best.svg ? 'svg' : 'png'}`
  await writeFile(join(OUT, file), best.svg ?? best.png)
  marks[id] = { file, type: best.svg ? 'svg' : 'mask', ratio: +best.ratio.toFixed(4) }
  sources[id] = best.label
}
await rm(tmp, { recursive: true, force: true })

const sorted = (o) => Object.fromEntries(Object.keys(o).sort().map((k) => [k, o[k]]))
await writeFile(
  join(OUT, 'manifest.json'),
  JSON.stringify({ marks: sorted(marks) }, null, 2) + '\n',
)
await writeFile(join(OUT, 'sources.json'), JSON.stringify(sorted(sources), null, 2) + '\n')

const width = Math.max(...known.map((i) => i.length))
console.log(`Partner marks from ${SRC}:`)
for (const id of ids) {
  const m = marks[id]
  console.log(`  ${id.padEnd(width)}  ${m ? `${m.type === 'svg' ? 'SVG ' : 'mask'}  ${m.ratio.toFixed(2)}:1  <- ${sources[id]}` : 'missing'}`)
}
if (held.length) console.log(`Held back (in the folder, not in src/content/partners.ts): ${held.join(', ')}.`)
const unknown = [...LISTED].filter((id) => !known.includes(id))
if (unknown.length) console.log(`Listed in partners.ts but not recognised here (add it to TOOLS): ${unknown.join(', ')}.`)
const missing = ids.filter((id) => !marks[id])
if (missing.length) console.log(`Still missing: ${missing.join(', ')}. Add ${missing.map((m) => m + '.svg').join(', ')} to the folder and run npm run partners.`)
