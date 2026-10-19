/* Share images: 1 PNG of 1200 x 630 per page, written to public/og/ (so `vite build` copies them into dist/og/), made at
   build time without a browser: satori lays the card out as SVG, resvg paints it. Run by `npm run build`, before
   `vite build`. Free to host: plain static files.

   The card is the design system's social card (Brand/Design System, Brand chapter, "The social card", .ob-og): the
   dark ground, the final lockup 40px tall at the top left, the page's headline in Geist 600 72px (leading .96, tracking
   -.052em, 14ch), 1 line under it in Geist 400 28px in text-2 (40ch), and the foot in Geist Mono 500 22px in text-3:
   the domain on the left, where the page sits on the right. 64px of padding on every side.
   A long headline first widens its measure, then steps down the scale, so the copy always keeps 64px of air under
   the lockup.

   Home's card carries the site's 1 memorable object beside the headline: the hero's first receipt, on its paper, with
   its rows, its fact and its stamp, tilted a little and torn at the foot (src/styles/v5.css .v5-receipt). Its headline
   and line keep to the left 600px.

   The words come from the content (src/content/meta.ts `entries`), loaded through Vite so the TypeScript content needs
   no build of its own. Unchanged cards are not drawn again (node_modules/.cache/og.json). */
import { Resvg } from '@resvg/resvg-js'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import satori from 'satori'
import { createServer } from 'vite'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const out = join(root, 'public', 'og')
const cacheFile = join(root, 'node_modules', '.cache', 'og.json')
const require = createRequire(import.meta.url)

/* The dark theme's tokens (src/styles/ds/tokens.css): --ob-bg, --ob-text, --ob-text-2, --ob-text-3. */
const INK = { bg: '#080807', text: '#EDEBE5', text2: '#B7B5AC', text3: '#98968E' }
const W = 1200
const H = 630
const PAD = 64
const LOCKUP_H = 40
const FOOT = 22
const COPY_GAP = 20
const COPY_BOTTOM = 48
/* The least air between the lockup and the headline: the card's own padding. */
const AIR = 64
const DOMAIN = 'useobsession.com'

/* The width of "0" in each face, so a ch measure means what it means in CSS. */
const CH = { sans600: 0.683, sans400: 0.663 }

const font = (pkg, file) => readFileSync(join(dirname(require.resolve(`${pkg}/package.json`)), 'files', file))
const fonts = [
  { name: 'Geist', weight: 400, style: 'normal', data: font('@fontsource/geist', 'geist-latin-400-normal.woff') },
  { name: 'Geist', weight: 600, style: 'normal', data: font('@fontsource/geist', 'geist-latin-600-normal.woff') },
  { name: 'Geist Mono', weight: 500, style: 'normal', data: font('@fontsource/geist-mono', 'geist-mono-latin-500-normal.woff') },
]

const lockupSvg = readFileSync(join(root, 'public', 'logo', 'obsession-lockup-white.svg'), 'utf8')
const [, , vbW, vbH] = lockupSvg.match(/viewBox="([^"]+)"/)[1].split(/\s+/).map(Number)
const lockup = { src: `data:image/svg+xml;base64,${Buffer.from(lockupSvg).toString('base64')}`, width: Math.round((LOCKUP_H * vbW) / vbH), height: LOCKUP_H }

const el = (type, style, children) => ({ type, props: { style, children } })

/* How tall a block of text sets at a width: satori lays it out with no height and reports the height it needed. */
async function heightOf(text, { size, weight, leading, tracking = 0, width }) {
  const svg = await satori(el('div', { display: 'flex', width, fontFamily: 'Geist', fontSize: size, fontWeight: weight, lineHeight: leading, letterSpacing: tracking }, text), {
    width,
    fonts,
  })
  return Number(svg.match(/height="([\d.]+)"/)[1])
}
const linesOf = (height, size, leading) => Math.round(height / (size * leading))

/* The headline's scale and measure: the system's 72px at 14ch first, then wider, then smaller. */
const HEADLINE_STEPS = [
  [72, 14],
  [72, 16],
  [72, 18],
  [64, 19],
  [60, 20],
  [56, 21],
  [52, 22],
]

/* A card with a receipt keeps its words to the left of it. */
const BESIDE = 600

async function layout(card) {
  const room = H - 2 * PAD - LOCKUP_H - FOOT - COPY_BOTTOM - AIR
  const cap = card.receipt ? BESIDE : Infinity
  const lineStyle = { size: 28, weight: 400, leading: 1.35, width: Math.min(cap - 40, Math.round(40 * CH.sans400 * 28)) }
  let line = card.line
  let lineH = await heightOf(line, lineStyle)
  if (linesOf(lineH, 28, 1.35) > 3) {
    line = line.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? line
    lineH = await heightOf(line, lineStyle)
  }
  for (const [size, ch] of HEADLINE_STEPS) {
    const width = Math.min(cap, Math.round(ch * CH.sans600 * size))
    const h = await heightOf(card.headline, { size, weight: 600, leading: 0.96, tracking: -0.052 * size, width })
    if (linesOf(h, size, 0.96) <= 4 && h + COPY_GAP + lineH <= room) return { size, width, line, lineWidth: lineStyle.width }
  }
  throw new Error(`The headline "${card.headline}" does not fit a share card.`)
}

/* The receipt's paper and inks (src/styles/v5.css, the dark theme's --v5-paper and --v5-paper-ink). */
const PAPER = { bg: '#f1efe8', ink: '#17160f', ink2: '#5d5a51', line: '#d6d2c6' }
const RECEIPT_W = 408
/* The torn foot: a zigzag of the paper, 10px deep. */
const TEAR = (() => {
  const step = 12
  const pts = [`0,0`, `${RECEIPT_W},0`]
  for (let x = RECEIPT_W, k = 0; x >= 0; x -= step / 2, k++) pts.push(`${x},${k % 2 ? 10 : 2}`)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${RECEIPT_W}" height="10" viewBox="0 0 ${RECEIPT_W} 10"><polygon points="${pts.join(' ')}" fill="${PAPER.bg}"/></svg>`
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
})()

function receiptTree(r) {
  const rule = el('div', { display: 'flex', height: 0, borderTop: `2px dashed ${PAPER.line}`, margin: '14px 0' }, [])
  return el('div', { position: 'absolute', right: 76, top: 112, display: 'flex', flexDirection: 'column', width: RECEIPT_W, transform: 'rotate(-2deg)' }, [
    el(
      'div',
      { display: 'flex', flexDirection: 'column', backgroundColor: PAPER.bg, color: PAPER.ink, padding: '24px 28px 20px', fontFamily: 'Geist Mono', fontWeight: 500, fontSize: 16, lineHeight: 1.55 },
      [
        el('div', { display: 'flex', justifyContent: 'space-between', fontSize: 15 }, [el('span', {}, 'Record'), el('span', {}, r.domain)]),
        rule,
        ...r.rows.map((row) => el('div', { display: 'flex' }, [el('span', { width: 118, color: PAPER.ink2 }, row.k), el('span', {}, row.v)])),
        rule,
        el('div', { display: 'flex', fontSize: 17, lineHeight: 1.45 }, r.fact),
        el('div', { display: 'flex', justifyContent: 'flex-end', marginTop: 14 }, [
          el('span', { display: 'flex', border: `2px solid ${PAPER.ink}`, borderRadius: 4, padding: '3px 12px', fontSize: 16, transform: 'rotate(-6deg)' }, r.stamp),
        ]),
      ],
    ),
    { type: 'img', props: { src: TEAR, width: RECEIPT_W, height: 10, style: { width: RECEIPT_W, height: 10 } } },
  ])
}

function cardTree(card, fit) {
  return el(
    'div',
    { position: 'relative', width: W, height: H, display: 'flex', flexDirection: 'column', padding: PAD, backgroundColor: INK.bg, color: INK.text, fontFamily: 'Geist' },
    [
      { type: 'img', props: { src: lockup.src, width: lockup.width, height: lockup.height, style: { width: lockup.width, height: lockup.height } } },
      el('div', { display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', flexGrow: 1, paddingBottom: COPY_BOTTOM }, [
        el(
          'div',
          {
            display: 'flex',
            maxWidth: fit.width,
            fontSize: fit.size,
            fontWeight: 600,
            lineHeight: 0.96,
            letterSpacing: -0.052 * fit.size,
            textWrap: 'balance',
          },
          card.headline,
        ),
        el(
          'div',
          { display: 'flex', marginTop: COPY_GAP, maxWidth: fit.lineWidth, fontSize: 28, fontWeight: 400, lineHeight: 1.35, color: INK.text2, textWrap: 'pretty' },
          fit.line,
        ),
      ]),
      el(
        'div',
        {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: FOOT,
          fontFamily: 'Geist Mono',
          fontWeight: 500,
          fontSize: FOOT,
          lineHeight: 1,
          color: INK.text3,
        },
        [el('span', {}, DOMAIN), el('span', {}, card.place)],
      ),
      ...(card.receipt ? [receiptTree(card.receipt)] : []),
    ],
  )
}

export async function drawCard(card) {
  const fit = await layout(card)
  const svg = await satori(cardTree(card, fit), { width: W, height: H, fonts })
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: W }, font: { loadSystemFonts: false } }).render().asPng()
  return { png, fit }
}

/* The cards, from the content. */
async function loadCards() {
  const vite = await createServer({
    root,
    configFile: false,
    logLevel: 'error',
    appType: 'custom',
    server: { middlewareMode: true, hmr: false, ws: false },
    optimizeDeps: { noDiscovery: true, include: [] },
  })
  try {
    const { entries } = await vite.ssrLoadModule('/src/content/meta.ts')
    return entries.map((e) => ({
      file: e.meta.ogImage.replace(/^\/og\//, ''),
      headline: e.headline,
      line: e.line,
      /* Where the page sits: its own place (a post's "Blog / Mystery shopping"), else its breadcrumb after Home. */
      place: e.place ?? (e.meta.breadcrumb ?? []).filter((c) => c.path !== '/').map((c) => c.name).join(' / '),
      receipt: e.receipt,
      alt: '',
    }))
  } finally {
    await vite.close()
  }
}

const self = createHash('sha1').update(readFileSync(fileURLToPath(import.meta.url))).digest('hex')
const keyOf = (card) => createHash('sha1').update(self).update(JSON.stringify([card.headline, card.line, card.place, card.receipt ?? null])).digest('hex')

async function main() {
  const started = Date.now()
  const cards = await loadCards()
  const files = new Set()
  for (const c of cards) {
    if (!/^[a-z0-9-]+\.png$/.test(c.file)) throw new Error(`Share image paths are /og/NAME.png: got ${c.file}`)
    if (files.has(c.file)) throw new Error(`2 pages share the image /og/${c.file}`)
    files.add(c.file)
  }

  await mkdir(out, { recursive: true })
  let cache = {}
  try {
    cache = JSON.parse(await readFile(cacheFile, 'utf8'))
  } catch {
    /* first run */
  }

  let drawn = 0
  for (const c of cards) {
    const key = keyOf(c)
    const file = join(out, c.file)
    if (cache[c.file] === key && existsSync(file)) continue
    const { png } = await drawCard(c)
    await writeFile(file, png)
    cache[c.file] = key
    drawn++
  }

  /* Images for pages that no longer exist go. */
  for (const f of await readdir(out)) if (f.endsWith('.png') && !files.has(f)) await rm(join(out, f))

  await mkdir(dirname(cacheFile), { recursive: true })
  await writeFile(cacheFile, JSON.stringify(cache, null, 2))
  console.log(`Share images: ${cards.length} in public/og/ (${drawn} drawn, ${cards.length - drawn} unchanged) in ${Date.now() - started}ms.`)
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main()
