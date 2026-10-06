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
   applied to the originals first (EDITS below), and a company's own sidebar to a company's HTML (COMPANY). Exits 1 on
   any difference. */
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
   prices and example facts. Then Home's 5 hero screens, made fit for the camera's close look (Seun, 7 Oct: invented
   brands at .example domains with their own favicons, the real tools' marks where the words name them, words a real
   app would use, the story retimed to the beats): each pair the smallest run of markup that changed, so a pair can be
   a start tag or a few elements, and a partner mark is drawn as the component draws it here (its drawing comes with
   the prerender, components/partnerMarks.server.ts). Each must be in the original exactly once, so an edit that no
   longer applies is a difference, not a silent pass. */
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
  pack: [
    ['<div class="appx" role="img" aria-label="A prospect intelligence mission for 12 prospects from Clay, run by a declared Obsession agent through public sign ups only: rows land 1 by 1 with each prospect’s proven gap; when the Coffee prospect lands, its pitch pack builds 3 findings with captures, and a click on Copy link copies the pack’s link.">', '<div class="appx" role="img" aria-label="A prospect intelligence mission for 12 prospects from Clay, run by a declared Obsession AI agent that signs up at each as a new customer, through public sign ups only. Rows land 1 by 1, each with its gap, until 10 of the 12 have one. Hobstone Coffee’s pitch fills with 3 findings and their captures, signed, and a click on Copy link copies its proof link. The lead finding is in the test inbox’s Spam folder. 10 of 12 prospects failed a new customer. Proof link Hobstone can check for itself. Hobstone’s 10% welcome code lands in spam.">'],
    ['<span class="ax-meta">12 prospects from Clay</span>', '<span class="ax-meta">12 prospects from <span class="s-pm-word"><span class="s-pm s-pm--word" role="img" aria-label="Clay" style="--s-pm-em:0.9298;--s-pm-drop:0.186;--s-pm-r:1.8508"></span></span></span>'],
    ['Obsession agent for Your agency', 'Obsession AI agent'],
    ['of 12 gaps proven', 'of 12 with a gap'],
    ['<div class="pk-row pk-r1">\n            <svg class="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"/><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"/><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"/></g></g></svg>\n            <div><p class="pk-nm">Candle prospect</p><p class="pk-gp"><span class="w">Asking the site’s bot</span><span class="g">Bot can’t answer delivery</span></p></div>\n          </div>', '<div class="pk-row pk-r1"><i class="pk-fv fv-tw" aria-hidden="true"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M3 6c.8-.9 1.6-.9 2.4 0s1.6.9 2.4 0 1.6-.9 2.4 0"></path><path d="M3 8.9c.8-.9 1.6-.9 2.4 0s1.6.9 2.4 0 1.6-.9 2.4 0"></path></svg></i><div><p class="pk-nm">Tidewren Swim</p><p class="pk-gp"><span class="w">Waiting for a text, 47h</span><span class="g">Opted in, 0 texts in 48h</span></p></div><svg class="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"></path><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"></path><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"></path></g></g></svg></div>'],
    ['<div class="pk-row pk-r2">\n            <svg class="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"/><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"/><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"/></g></g></svg>\n            <div><p class="pk-nm">Pet food prospect</p><p class="pk-gp"><span class="w">Walking subscribe flow</span><span class="g">Subscribe page returns 404</span></p></div>\n          </div>', '<div class="pk-row pk-r2"><i class="pk-fv fv-fn" aria-hidden="true">F</i><div><p class="pk-nm">Fennick Home</p><p class="pk-gp"><span class="w">Trying the sign up page</span><span class="g">Sign up page returns 404</span></p></div><svg class="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"></path><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"></path><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"></path></g></g></svg></div>'],
    ['<div class="pk-row pk-r3 on">\n            <svg class="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"/><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"/><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"/></g></g></svg>\n            <div><p class="pk-nm">Coffee prospect</p><p class="pk-gp"><span class="w">Reading inbox</span><span class="g">Welcome email in spam</span></p></div>\n          </div>', '<div class="pk-row pk-r3 on"><i class="pk-fv fv-hb" aria-hidden="true">H</i><div><p class="pk-nm">Hobstone Coffee</p><p class="pk-gp"><span class="w">Checking inbox and spam</span><span class="g">Welcome email in spam</span></p></div><svg class="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"></path><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"></path><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"></path></g></g></svg></div>'],
    ['<div class="pk-row">\n            <svg class="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"/><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"/><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"/></g></g></svg>\n            <div><p class="pk-nm">Bike shop prospect</p><p class="pk-gp"><span class="g">Ad 2 lands on a sold out page</span></p></div>\n          </div>', '<div class="pk-row"><i class="pk-fv fv-lb" aria-hidden="true"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6.4c1.2.2 2.2 1 2.8 2.4C6.9 6.3 8.6 4.9 11 4.4"></path></svg></i><div><p class="pk-nm">Larkbound</p><p class="pk-gp"><span class="g">Ad opens a sold out page</span></p></div><svg class="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"></path><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"></path><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"></path></g></g></svg></div>'],
    ['<div class="pk-row dim">\n            <svg class="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"/><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"/><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"/></g></g></svg>\n            <div><p class="pk-nm">Fitness prospect</p><p class="pk-gp"><span class="g">No gap found in 7 days</span></p></div>\n          </div>', '<div class="pk-row dim"><i class="pk-fv fv-hm" aria-hidden="true"><svg viewBox="0 0 14 14" fill="currentColor"><path d="M3.6 10.4C3.4 6.5 5.6 4 10.4 3.6c.2 4.6-2.2 7-6.3 6.9Z"></path><path d="m3.6 10.4 3.9-3.9" fill="none" stroke="#55603F" stroke-width=".9" stroke-linecap="round"></path></svg></i><div><p class="pk-nm">Halvard &amp; Moss</p><p class="pk-gp"><span class="g">No gap found in 7 days</span></p></div><svg class="pk-ok" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="5.15"></circle><path d="M3.9 6.15 5.35 7.6 8.15 4.7"></path></svg></div>'],
    ['<div class="pk-row dim">\n            <svg class="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"/><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"/><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"/></g></g></svg>\n            <div><p class="pk-nm">Jewellery prospect</p><p class="pk-gp"><span class="g">Opting in to texts</span></p></div>\n          </div>', '<p class="pk-lf"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5"></rect><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7"></path></svg>Public sign ups only · nothing bought</p>'],
    ['PDF', '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2.75v7.5M5 7.5l3 3 3-3M3.25 13.25h9.5"></path></svg>PDF'],
    ['Send to Clay', 'Send to <span class="s-pm-word"><span class="s-pm s-pm--word" role="img" aria-label="Clay" style="--s-pm-em:0.9298;--s-pm-drop:0.186;--s-pm-r:1.8508"></span></span>'],
    ['Pitch · Thu 8 Oct', 'Pitch · 8 Oct'],
    ['Prepared for Coffee prospect', 'Prepared for <i class="pk-fv fv-hb" aria-hidden="true">H</i>Hobstone Coffee'],
    ['<li class="pk-f" style="--d:2.4s">', '<li class="pk-f" style="--d:4.65s">'],
    ['09:06 · code inside', '09:06 · 10% code inside'],
    ['<i class="r"></i><i class="r1"></i><i class="r2"></i><i class="r3"></i>', '<b class="sp">Spam</b><i class="pk-mk"></i><i class="dv"></i>'],
    ['<i class="t1"></i>', '<b class="t1">10% off</b>'],
    ['<i class="a3"></i><i class="l3"></i>', ''],
    ['<li class="pk-f" style="--d:2.65s">', '<li class="pk-f" style="--d:4.8s">'],
    ['0 texts in 48 h', '0 texts in 48h'],
    ['<li class="pk-f" style="--d:2.9s">', '<li class="pk-f" style="--d:4.95s">'],
    ['<b>Bot can’t answer delivery</b>', '<b>Bot has no delivery date</b>'],
    ['Ended when staff joined', 'Asked twice · 11:40'],
    ['<span class="ax-shot pk-shot pk-s3" aria-hidden="true"><i class="p1"></i><i class="n1"></i><i class="q1"></i><i class="p2"></i><i class="n2"></i><i class="q2"></i><i class="bt"></i></span>', '<span class="ax-shot pk-shot pk-s3" aria-hidden="true"><i class="p1"></i><i class="n1"></i><i class="q1"></i><i class="p2"></i><i class="n2"></i><i class="q2"></i></span>'],
    ['ed25519 · 7f3a 91c2 … c91e', '11:52 · 7f3a 91c2 … c91e'],
    ['<p class="pk-note ax-fade" style="--d:.3s"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5"/><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7"/></svg>Public sign ups only · nothing bought</p>\n      <div class="ax-toast pk-toast"><svg class="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"/><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"/><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"/></g></g></svg><p><b>Copied</b><span>your-agency.example/p/coffee</span></p><span class="ax-btn">Open</span></div>', ''],
  ],
  shop: [
    ['<div class="appx" role="img" aria-label="A mystery shopper mission, run with each owner’s OK: 6 declared test customers walk a payroll SaaS free trial, 2 baskets at a homeware store and a dental group booking side by side over 3 days. Steps land as the days pass, the store stops before payment and its basket inboxes get 0 emails in 48 hours, the finding that needs you; the bot can’t answer pricing, the trial closes when a rep writes, the dental reply is slow, and the report is ready.">', '<div class="appx" role="img" aria-label="A mystery shopper mission, run with each owner’s OK: 3 declared AI test customers walk a payroll free trial at Paywren, a first order at hollin and a booking enquiry at Molenna Dental over 3 days. At 09:15 on Day 1, hollin’s welcome code SOFTER10 is rejected at checkout, and the shopper stops before payment. Retested after 48 hours, it still fails on Day 3: the finding that needs you. Paywren’s bot won’t give a price, and the shopper stops when a rep emails; Molenna’s first reply comes after 4h 47m. The report is posted in Slack. 10% welcome code rejected at checkout, 09:15. Still failing on Day 3, for every subscriber.">'],
    ['3 journeys · 6 test customers', '3 businesses · 3 AI test customers'],
    ['Obsession agent for Your company', 'Obsession AI agent'],
    ['<b>Payroll SaaS</b>', '<i class="ms-fav fv-pw" aria-hidden="true">P</i><b>Paywren</b>'],
    ['Free trial', 'Payroll · free trial'],
    ['<span class="ms-fd" style="--ms-t:3.4s">', '<span class="ms-fd" style="--ms-t:4.56s">'],
    ['Bot can&rsquo;t answer pricing', 'Bot won’t give a price'],
    ['<i class="ms-pth" style="--ms-a:34px;--ms-w:322px;--ms-t:.72s;--ms-u:2.56s">', '<i class="ms-pth" style="--ms-a:34px;--ms-w:322px;--ms-t:.81s;--ms-u:3.58s">'],
    ['<span class="ax-shot ms-c" style="--ms-x:12px;--ms-t:.55s"><span class="ms-pg ms-sign"><i class="ms-fl"></i><i class="ms-bt"></i></span></span>', '<span class="ax-shot ms-c" style="--ms-x:12px;--ms-t:.57s"><span class="ms-pg ms-sign"><i class="ms-fl"></i><i class="ms-bt"></i></span></span>'],
    ['<span class="ax-shot ms-c" style="--ms-x:98px;--ms-t:1.23s">', '<span class="ax-shot ms-c" style="--ms-x:98px;--ms-t:1.52s">'],
    ['<span class="ax-shot ms-c" style="--ms-x:180px;--ms-t:1.88s">', '<span class="ax-shot ms-c" style="--ms-x:180px;--ms-t:2.43s">'],
    ['<span class="ax-shot ms-c ms-wide" style="--ms-x:232px;--ms-t:2.29s">', '<span class="ax-shot ms-c ms-wide" style="--ms-x:232px;--ms-t:3.01s">'],
    ['<span class="ax-shot ms-c" style="--ms-x:300px;--ms-t:2.83s">', '<span class="ax-shot ms-c" style="--ms-x:300px;--ms-t:3.76s">'],
    ['<i class="ms-end" style="--ms-x:355px;--ms-t:3.26s">', '<i class="ms-end" style="--ms-x:355px;--ms-t:4.36s">'],
    ['<span class="ms-cap" style="--ms-x:12px;--ms-t:.6s">Signed up as AI</span>', '<span class="ms-cap" style="--ms-x:12px;--ms-t:.64s">Signed up as AI</span>'],
    ['<span class="ms-cap" style="--ms-x:98px;--ms-t:1.29s">', '<span class="ms-cap" style="--ms-x:98px;--ms-t:1.61s">'],
    ['Email 1', 'Welcome'],
    ['<span class="ms-cap" style="--ms-x:180px;--ms-t:1.94s">', '<span class="ms-cap" style="--ms-x:180px;--ms-t:2.52s">'],
    ['Email 2', 'Setup'],
    ['<span class="ms-cap" style="--ms-x:232px;--ms-t:2.35s">', '<span class="ms-cap" style="--ms-x:232px;--ms-t:3.09s">'],
    ['Pricing?', 'Asked price'],
    ['<span class="ms-cap" style="--ms-x:300px;--ms-t:2.89s">', '<span class="ms-cap" style="--ms-x:300px;--ms-t:3.85s">'],
    ['Rep wrote', 'Rep emailed'],
    ['<span class="ms-sp ms-row" style="--ms-x:366px;--ms-t:3.3s">', '<span class="ms-sp ms-row" style="--ms-x:366px;--ms-t:4.42s">'],
    ['Closed when a rep wrote', 'Stopped when a rep wrote'],
    ['<b>Homeware store</b>', '<i class="ms-fav fv-hl" aria-hidden="true">h</i><b>hollin</b>'],
    ['2 baskets · &pound;34, &pound;22', 'Store · first order'],
    ['<span class="ms-fd ms-hot" style="--ms-t:4.3s">', '<span class="ms-fd ms-hot" style="--ms-t:5.82s">'],
    ['0 basket emails in 48 hours', 'Welcome code fails at checkout'],
    ['<i class="ms-pth" style="--ms-a:34px;--ms-w:80px;--ms-t:.72s;--ms-u:.63s">', '<i class="ms-pth" style="--ms-a:34px;--ms-w:80px;--ms-t:.81s;--ms-u:.88s">'],
    ['<span class="ax-shot ms-c" style="--ms-x:12px;--ms-t:.55s"><span class="ms-pg ms-bask"><i class="ms-pt"></i><span class="ms-ls"><i></i><i></i></span><i class="ms-bn"></i></span></span>\n          <span class="ax-shot ms-c" style="--ms-x:64px;--ms-t:.96s"><span class="ms-pg ms-bask"><i class="ms-pt ms-p2"></i><span class="ms-ls"><i></i><i></i></span><i class="ms-bn"></i></span></span>', '<span class="ax-shot ms-c ms-d1" style="--ms-x:12px;--ms-t:.57s"><span class="ms-pg ms-wel"><img class="ms-ph" src="/illus/gap/hollin-email-240.webp" width="44" height="10" alt="" decoding="async" loading="lazy"><i class="ms-hd"></i><b>10%</b></span></span> <span class="ax-shot ms-c ms-d1" style="--ms-x:64px;--ms-t:1.14s"><span class="ms-pg ms-co"><img class="ms-th" src="/illus/gap/hollin-pillowcases-120.webp" width="11" height="11" alt="" decoding="async" loading="lazy"><i class="ms-pr"></i><span class="ms-cf"><i></i><b>×</b></span></span></span> '],
    ['<i class="ms-stop" style="--ms-x:114px;--ms-t:1.36s">', '<i class="ms-stop" style="--ms-x:114px;--ms-t:1.7s">'],
    ['<i class="ms-wt" style="--ms-a:118px;--ms-w:336px;--ms-t:1.4s;--ms-u:2.67s">', '<i class="ms-wt" style="--ms-a:118px;--ms-w:336px;--ms-t:1.76s;--ms-u:3.74s">'],
    ['<span class="ms-wl" style="--ms-a:118px;--ms-w:336px;--ms-t:2.2s">', '<span class="ms-wl" style="--ms-a:118px;--ms-w:336px;--ms-t:2.88s">'],
    ['Watching 4 inboxes', 'Retest after 48h'],
    ['<span class="ax-shot ms-c" style="--ms-x:458px;--ms-t:4.1s"><span class="ms-pg ms-box"><b>0</b><i></i></span></span>', '<span class="ax-shot ms-c ms-d3" style="--ms-x:458px;--ms-t:5.54s"><span class="ms-pg ms-co"><img class="ms-th" src="/illus/gap/hollin-pillowcases-120.webp" width="11" height="11" alt="" decoding="async" loading="lazy"><i class="ms-pr"></i><span class="ms-cf"><i></i><b>×</b></span></span></span> '],
    ['<span class="ms-sp" style="--ms-x:12px;--ms-t:1.38s">', '<span class="ms-sp" style="--ms-x:12px;--ms-t:1.73s">'],
    ['<span class="ms-cap ms-tm" style="--ms-x:458px;--ms-t:4.16s">48 h</span>', '<span class="ms-cap ms-rj" style="--ms-t:5.62s">Rejected again</span>'],
    ['<b>Dental group</b>', '<i class="ms-fav fv-md" aria-hidden="true">M</i><b>Molenna Dental</b>'],
    ['Booking', 'Booking enquiry'],
    ['<span class="ms-fd" style="--ms-t:1.62s"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.75 13.5V2.75M3.75 3h7.5l-1.5 2.75 1.5 2.75h-7.5"/></svg>Slow first reply</span>', ''],
    ['<span class="ax-shot ms-c" style="--ms-x:12px;--ms-t:.55s"><span class="ms-pg ms-form"><i class="ms-fl"></i><i class="ms-ta"></i><i class="ms-bt"></i></span></span>', '<span class="ax-shot ms-c" style="--ms-x:12px;--ms-t:.57s"><span class="ms-pg ms-form"><i class="ms-fl"></i><i class="ms-ta"></i><i class="ms-bt"></i></span></span>'],
    ['<i class="ms-wt" style="--ms-a:60px;--ms-w:30px;--ms-t:.93s;--ms-u:.24s">', '<i class="ms-wt" style="--ms-a:60px;--ms-w:34px;--ms-t:1.1s;--ms-u:.34s">'],
    ['<span class="ax-shot ms-c" style="--ms-x:94px;--ms-t:1.2s">', '<span class="ax-shot ms-c" style="--ms-x:98px;--ms-t:1.48s">'],
    ['<i class="ms-pth" style="--ms-a:138px;--ms-w:12px;--ms-t:1.55s;--ms-u:.1s">', '<i class="ms-pth" style="--ms-a:142px;--ms-w:12px;--ms-t:1.97s;--ms-u:.14s">'],
    ['<i class="ms-end" style="--ms-x:149px;--ms-t:1.6s">', '<i class="ms-end" style="--ms-x:153px;--ms-t:2.04s">'],
    ['<span class="ms-done" style="--ms-x:161px;--ms-t:1.64s">', '<span class="ms-done" style="--ms-x:165px;--ms-t:2.1s">'],
    ['Done Day 1', 'Ended Day 1'],
    ['<span class="ms-cap" style="--ms-x:12px;--ms-t:.6s">Form sent</span>', '<span class="ms-cap" style="--ms-x:12px;--ms-t:.64s">Sent 10:40</span>'],
    ['<span class="ms-cap ms-tm" style="--ms-x:94px;--ms-t:1.25s">4 h 12 m</span>', '<span class="ms-cap" style="--ms-x:98px;--ms-t:1.55s">Reply 15:27</span> <span class="ms-fd ms-fc" style="--ms-x:164px;--ms-t:2.07s"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.75 13.5V2.75M3.75 3h7.5l-1.5 2.75 1.5 2.75h-7.5"></path></svg>First reply after 4h 47m</span>'],
    ['Report ready', 'Posted in <span class="s-pm-word"><span class="s-pm s-pm--word s-pm--mask" role="img" aria-label="Slack" style="--s-pm-em:0.8833;--s-pm-drop:0.1272;--s-pm-r:3.9196;--s-pm-src:url(&quot;/assets/slack-BOgQcW_d.png&quot;)"></span></span>'],
  ],
  rivals: [
    ['<div class="appx" role="img" aria-label="The Rivals page: 30 days of Rival A, B and C on 3 timelines, each dated change seen by a declared agent that checks every morning from the US and UK. Today\'s check catches Rival A\'s Pro plan rising from $49 to $59 in the US only, shown with before and after captures, and an update to your comparison page is drafted for your OK.">', '<div class="appx" role="img" aria-label="The Rivals page: 30 days of Tallyhop, Notewell and Pinecrate on 3 timelines, each dated change seen by a declared AI agent that checks their public pages and emails every morning from the US and UK. Today’s 07:04 check catches Tallyhop raising Pro from $49 to $59 in the US only, with screenshots of its pricing page 24 hours apart, and your comparison page is redrafted, waiting for your OK. Pro raised to $59, caught at 07:04 today. Same page, 24 hours apart: $49, then $59. Comparison page redrafted. Live only on your OK.">'],
    ['Obsession agent for Your company', 'Obsession AI agent'],
    ['<span class="rv-mk rv-stk"><svg class="sig st-working rv-w" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"/><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"/><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"/></g></g></svg><svg class="sig st-needs moving" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"/><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"/><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"/></g></g></svg></span>', '<i class="rv-fv rv-fv-t" aria-hidden="true">T</i>'],
    ['<b>Rival A</b>', '<b>Tallyhop</b>'],
    ['<time>07:04</time>', '<span class="rv-at"><span class="rv-mk rv-stk"><svg class="sig st-working rv-w" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"></path><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"></path><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"></path></g></g></svg><svg class="sig st-needs moving" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"></path><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"></path><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"></path></g></g></svg></span><time>07:04</time></span>'],
    ['<p class="rv-ev" style="--rv-day:6"><i class="rv-dot"></i><time>8 Sep</time><span>Launch email</span></p>', '<p class="rv-ev" style="--rv-day:6"><i class="rv-dot"></i><time>8 Sep</time><svg class="rv-gl" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5"></rect><path d="m2.75 4.75 5.25 4 5.25-4" stroke-linecap="round"></path></svg><span>AI Notes launch</span></p>'],
    ['<span>Trial end &minus;20%</span>', '<svg class="rv-gl" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5"></rect><path d="m2.75 4.75 5.25 4 5.25-4" stroke-linecap="round"></path></svg><span>20% off Pro</span>'],
    ['<span>Pro $49 &rarr; $59</span>', '<svg class="rv-gl" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M2.75 8.4V3.5a.75.75 0 0 1 .75-.75h4.9l5.05 5.05a1 1 0 0 1 0 1.4l-4.3 4.3a1 1 0 0 1-1.4 0Z"></path><circle cx="5.75" cy="5.75" r="1" fill="currentColor" stroke="none"></circle></svg><span>Pro $49 → $59</span>'],
    ['<div class="rv-ch ax-in" style="--d:.12s">\n            <span class="rv-mk"><svg class="sig st-waiting" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"/><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"/><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"/></g></g></svg></span>\n            <b>Rival B</b><time>07:02</time>\n          </div>', '<div class="rv-ch ax-in" style="--d:.12s"><i class="rv-fv rv-fv-n" aria-hidden="true">n</i><b>Notewell</b><span class="rv-at"><span class="rv-mk"><svg class="sig st-waiting" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"></path><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"></path><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"></path></g></g></svg></span><time>07:02</time></span></div>'],
    ['<div class="rv-rail"><i class="rv-line"></i>\n            <p class="rv-ev" style="--rv-day:9"><i class="rv-dot"></i><time>11 Sep</time><span>New Team plan</span></p>\n            <p class="rv-ev" style="--rv-day:22"><i class="rv-dot"></i><time>24 Sep</time><span>Launch email</span></p>\n            <p class="rv-ev rv-nil" style="--rv-day:30"><i class="rv-dot"></i><time>Today</time><span>No change</span></p>\n          </div>', '<div class="rv-rail"><i class="rv-line"></i> <p class="rv-ev" style="--rv-day:9"><i class="rv-dot"></i><time>11 Sep</time><svg class="rv-gl" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M4 2.5h5.25l2.75 2.75v8.25H4Z"></path><path d="M9 2.5v3h3"></path></svg><span>Team plan, $99</span></p> <p class="rv-ev" style="--rv-day:22"><i class="rv-dot"></i><time>24 Sep</time><svg class="rv-gl" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5"></rect><path d="m2.75 4.75 5.25 4 5.25-4" stroke-linecap="round"></path></svg><span>Webinar invite</span></p> <p class="rv-ev rv-nil" style="--rv-day:30"><i class="rv-dot"></i><time>Today</time><i class="rv-gl"></i><span>No change</span></p></div>'],
    ['<div class="rv-ch ax-in" style="--d:.18s">\n            <span class="rv-mk"><svg class="sig st-waiting" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"/><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"/><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"/></g></g></svg></span>\n            <b>Rival C</b><time>07:03</time>\n          </div>', '<div class="rv-ch ax-in" style="--d:.18s"><i class="rv-fv rv-fv-p" aria-hidden="true"><svg viewBox="0 0 14 14"><path d="M7 3.6 10.2 9.6H3.8Z" fill="currentColor"></path></svg></i><b>Pinecrate</b><span class="rv-at"><span class="rv-mk"><svg class="sig st-waiting" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"></path><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"></path><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"></path></g></g></svg></span><time>07:03</time></span></div>'],
    ['<div class="rv-rail"><i class="rv-line"></i>\n            <p class="rv-ev" style="--rv-day:3"><i class="rv-dot"></i><time>5 Sep</time><span>No free plan</span></p>\n            <p class="rv-ev" style="--rv-day:19"><i class="rv-dot"></i><time>21 Sep</time><span>Trial end &minus;30%</span></p>\n            <p class="rv-ev" style="--rv-day:26"><i class="rv-dot"></i><time>28 Sep</time><span>Annual &minus;25%</span></p>\n            <p class="rv-ev rv-nil" style="--rv-day:30"><i class="rv-dot"></i><time>Today</time><span>No change</span></p>\n          </div>', '<div class="rv-rail"><i class="rv-line"></i> <p class="rv-ev" style="--rv-day:3"><i class="rv-dot"></i><time>5 Sep</time><svg class="rv-gl" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M4 2.5h5.25l2.75 2.75v8.25H4Z"></path><path d="M9 2.5v3h3"></path></svg><span>Free plan ended</span></p> <p class="rv-ev" style="--rv-day:19"><i class="rv-dot"></i><time>21 Sep</time><svg class="rv-gl" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5"></rect><path d="m2.75 4.75 5.25 4 5.25-4" stroke-linecap="round"></path></svg><span>30% off Pro</span></p> <p class="rv-ev" style="--rv-day:26"><i class="rv-dot"></i><time>28 Sep</time><svg class="rv-gl" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M2.75 8.4V3.5a.75.75 0 0 1 .75-.75h4.9l5.05 5.05a1 1 0 0 1 0 1.4l-4.3 4.3a1 1 0 0 1-1.4 0Z"></path><circle cx="5.75" cy="5.75" r="1" fill="currentColor" stroke="none"></circle></svg><span>Annual 25% off</span></p> <p class="rv-ev rv-nil" style="--rv-day:30"><i class="rv-dot"></i><time>Today</time><i class="rv-gl"></i><span>No change</span></p></div>'],
    ['<p class="ax-k">Rival A · Pricing page</p>', '<p class="ax-k rv-src"><i class="rv-fv rv-fv-t" aria-hidden="true">T</i><span>tallyhop.example</span></p>'],
    ['You&rsquo;re now ', 'Your Pro is now '],
    ['<b>$12 cheaper</b>', '<b>$12</b> less'],
    ['<div class="rv-pg"><p><span>Pro</span><em>US</em></p><b>$49</b><i class="rv-cta"></i></div>', '<div class="rv-pg"><p class="rv-br"><i>T</i>tallyhop</p><p class="rv-pl"><span>Pro</span><em>USD</em></p><b>$49<small>/month</small></b><i class="rv-cta">Start free trial</i></div>'],
    ['<div class="rv-pg"><p><span>Pro</span><em>US</em></p><b><span class="rv-ring">$59</span></b><i class="rv-cta"></i></div>', '<div class="rv-pg"><p class="rv-br"><i>T</i>tallyhop</p><p class="rv-pl"><span>Pro</span><em>USD</em></p><b><span class="rv-ring">$59</span><small>/month</small></b><i class="rv-cta">Start free trial</i></div>'],
    ['Drafted', 'Waiting for your OK'],
    ['Your comparison page', 'Comparison page, 1 edit'],
    ['<time>2 Oct 07:05</time>', '<p class="rv-sent">Sent to <span class="s-pm-word"><span class="s-pm s-pm--word s-pm--mask" role="img" aria-label="Slack" style="--s-pm-em:0.8833;--s-pm-drop:0.1272;--s-pm-r:3.9196;--s-pm-src:url(&quot;/assets/slack-BOgQcW_d.png&quot;)"></span></span> #rivals · 07:05</p>'],
    ['Public pages only · live after your OK', 'Public pages only · edits live after your OK'],
    ['<div class="ax-toast rv-toast"><svg class="sig st-needs" viewBox="2 2 96 96" aria-hidden="true"><g class="sig-rot"><path class="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"/><path class="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"/><g class="sig-orb"><path class="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z"/></g></g></svg><p><b>Rival A raised prices</b><span>Page drafted</span></p><span class="ax-btn">Review</span></div>', ''],
  ],
  inbound: [
    ['<div class="appx" role="img" aria-label="The Inbound page: with your OK, a labelled test lead uses your demo form, site chat and sales line every day at 09:00, 13:00 and 17:00, each reply timed against a 5 minute target. At 09:00 chat replies in 38 s, the form takes 4 h 12 m and lands in the CRM with no owner, and the phone is missed; a routing fix is drafted, AM approves it, and when tested again at 17:00 the first reply comes in 3 min 40 s.">', '<div class="appx" role="img" aria-label="The Lead leaks page: with your OK, a test lead declared as AI uses your demo form, site chat and sales line at 09:00, 13:00 and 17:00 every day, each first reply timed against a 5 minute target, each lead’s owner read from HubSpot. At 09:00 chat replies in 38s and is assigned to JO; the form waits 4h 12m and lands unassigned; the sales line rings out with no voicemail and lands unassigned. The routing fix: unassigned form and phone leads go to the next free rep within 1 minute, live after your OK, and AM approves it at 13:20. At the 17:00 retest the form replies in 3m 40s. Form waited 4h 12m. Phone rang out. 1 routing rule closes both leaks. Same day: 4h 12m down to 3m 40s.">'],
    ['<span class="ax-crumb"><b>Your company</b><span>/</span>Missions<span>/</span>Inbound</span>', '<span class="ax-crumb"><b>Your company</b><span>/</span>Missions<span>/</span>Lead leaks</span>'],
    ['<h2>Inbound</h2>', '<h2>Lead leaks</h2>'],
    ['Labelled test lead · daily', 'Test lead, declared AI · 3 runs a day'],
    ['Obsession agent for Your company', 'Obsession AI agent'],
    ['target 5 min', 'target 5 min · owners in <span class="s-pm-word"><span class="s-pm s-pm--word" role="img" aria-label="HubSpot" style="--s-pm-em:1.0392;--s-pm-drop:0.1663;--s-pm-r:3.5243"></span></span>'],
    ['<span class="ib-rt" style="--t:3.25s">In CRM · owner: <b>nobody</b></span>', '<span class="ib-rt" style="--t:3.25s"><i class="ib-un"></i><b>Unassigned</b></span>'],
    ['In CRM · owner: JO', '<i class="ib-jo">JO</i>Assigned'],
    ['<i class="ib-dash"></i>', '<i class="ib-b ib-b3"></i><i class="ib-x"></i><i class="ib-dash"></i>'],
    ['Waiting for a callback', 'Rang out, no voicemail'],
    ['<span class="n">In CRM · owner: <b>nobody</b></span>', '<span class="n"><i class="ib-un"></i><b>Unassigned</b></span>'],
    ['<span class="ib-ax" style="--p:25.3">1 m</span>', '<span class="ib-ax" style="--p:25.3">1 min</span>'],
    ['Form and phone · in your CRM', 'Form and phone leads · <span class="s-pm-word"><span class="s-pm s-pm--word" role="img" aria-label="HubSpot" style="--s-pm-em:1.0392;--s-pm-drop:0.1663;--s-pm-r:3.5243"></span></span>'],
    ['Owner: nobody', 'Unassigned'],
    ['Approved · AM', 'Approved by AM · 13:20'],
    ['<svg class="ax-ptr ib-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.1 4.6 2-.9-2.1-4.5h4.3Z"/></svg>', '<svg class="ax-ptr ib-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.1 4.6 2-.9-2.1-4.5h4.3Z"></path></svg><p class="ib-lock"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5"></rect><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7"></path></svg>Live after your OK</p>'],
    ['<p class="ib-lock ax-fade" style="--d:.2s"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5"/><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7"/></svg>Fixes go live after your OK</p>', ''],
    ['17:00 test again', '17:00 retest'],
    ['First reply 3 min 40 s', 'Form 3m 40s'],
    ['Open', 'View'],
  ],
  botcheck: [
    ['<div class="appx" role="img" aria-label="The Support bot check for Your company: at 07:00 Test customer 2, declared as AI, asks the support bot the same questions on chat, email and the portal, and 20 checks tick in channel by channel. 18 pass and 2 need you, each with its policy, transcript, time and signature: on chat the bot says 30 days when the refund policy says 14, and on the portal the confirmation email it promised never arrives in 6 hours. A fix for the refund answer is drafted for your OK.">', '<div class="appx" role="img" aria-label="The Support bot check for Your company: at 07:00 Test customer 2, declared as AI, asks the support bot the same questions on chat, email and the portal, and 20 checks tick in channel by channel. 18 pass and 2 need you. On chat the bot says 30 days when your policy says 14, at 07:02, and a fix is suggested for your OK. On the portal it promised a confirmation email at 07:03, and none arrived in 6 hours. Chat quotes 30 days. Your policy says 14. Caught at 07:02. Fix ready for your OK.">'],
    ['Obsession agent for Your company', 'Obsession AI agent'],
    ['Run 07:00', 'Today 07:00'],
    ['Promises kept', 'Keeps promises'],
    ['Codes are live', 'Discount codes'],
    ['Stops after “No”', 'Stops when told no'],
    ['Order status right', 'Order status'],
    ['Refund window stated as 30 days', 'Refund window: 30 days, not 14'],
    ['<p class="bk-vm">Policy <b>14 days</b> · returns page at 07:00</p>', '<p class="bk-vm">Your policy: <b>14 days</b> · returns page, read 07:00</p>'],
    ['Fix drafted · for your OK', 'Suggested fix · waits for your OK'],
    ['<p><span class="bk-gt">Bot</span><span class="bk-ft">No, returns close after <mark>14 days</mark>.</span></p>', '<span class="bk-ap">Approve</span><p><span class="bk-gt">Bot</span><span class="bk-ft">No, returns close after <mark>14 days</mark>.</span></p>'],
    ['Signed<span>ed25519 · 7f3a 91c2 … c91e</span>', 'Signed 07:02 · sent to <span class="s-pm-word"><span class="s-pm s-pm--word s-pm--mask" role="img" aria-label="Slack" style="--s-pm-em:0.8833;--s-pm-drop:0.1272;--s-pm-r:3.9196;--s-pm-src:url(&quot;/assets/slack-BOgQcW_d.png&quot;)"></span></span> #support'],
    ['Promised email arrives', 'Promised email never arrived'],
    ['<p class="bk-vm">Policy <b>confirmation email</b> · test inbox watched</p>', '<p class="bk-vm">Promised <b>07:03</b> · test inbox checked hourly</p>'],
    ['You\'ll get a confirmation email.', 'You’ll get a confirmation email.'],
    ['<span class="bk-a"><b>0 emails</b> in 6 h</span>', '<span class="bk-a"><b>0 emails</b> in 6 hours</span>'],
    ['13:04', '13:03'],
    ['<p class="bk-sg">Signed<span>ed25519 · 2b9e 04d7 … 5a10</span></p>', '<p class="bk-sg">Signed 13:03<span>2b9e 04d7 … 5a10</span></p>'],
    ['<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true">', '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true">'],
    ['<rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5"/>', '<circle cx="8" cy="8" r="5.75"></circle>'],
    ['<path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7"/>', '<path d="M8 5v3.25l2 1.25">'],
    ['With your OK · no jailbreaks', 'Next run tomorrow, 07:00'],
    ['2 failures', '2 checks need you'],
    ['1 fix drafted for your OK', '1 fix ready to approve'],
  ],
}
/* A screen drawn for an agency that has a company's own sidebar in a company's workspace (pack: on Home's hero tabs it
   sits beside 4 screens drawn for a company, so it has their Accounts and Rivals in its nav and their lists), as
   [what forWorkspace's HTML says, what the company's render says], applied after EDITS and forWorkspace; each must be
   in it exactly once. */
const COMPANY = {
  pack: [
    ['Recipes</a>', 'Recipes</a><a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M2.75 13.25h10.5M4.25 13.25V2.75h5.5v10.5M9.75 6.25h2v7"></path><path d="M6.25 5.5h1.5M6.25 8h1.5M6.25 10.5h1.5" stroke-linecap="round"></path></svg>Accounts</a><a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M1.75 8S4 3.75 8 3.75 14.25 8 14.25 8 12 12.25 8 12.25 1.75 8 1.75 8Z"></path><circle cx="8" cy="8" r="1.9"></circle></svg>Rivals</a>'],
    ['<a role="none"><i></i>Homeware</a><a role="none"><i></i>Coffee roaster</a><a role="none"><i></i>Candles</a><a role="none"><i></i>Outdoor gear</a><a role="none"><i></i>Dental group</a>', '<a role="none"><i></i>Prospects</a><a role="none"><i></i>Customers</a><a role="none"><i></i>Rivals</a><a role="none"><i></i>Suppliers</a>'],
  ],
}
function edited(name, html, edits = EDITS, what = 'the original') {
  if (html === undefined) return html
  for (const [was, now] of edits[name] ?? []) {
    const n = html.split(was).length - 1
    if (n !== 1) diffs.push(`${name}: the intended edit from ${JSON.stringify(was)} is in ${what} ${n} times, not once`)
    else html = html.replace(was, () => now)
  }
  return html
}
for (const name of [...Object.keys(EDITS), ...Object.keys(COMPANY)]) if (!originals.has(name)) diffs.push(`EDITS names ${name}, which is not a screen`)

for (const name of files) {
  const before = diffs.length
  const original = edited(name, originals.get(name))
  for (const workspace of ['agency', 'company']) {
    const drawn = renderScreen(name, workspace)
    if (original === undefined || drawn === undefined) continue
    tally.compared++
    const a = root1(workspace === 'company' ? edited(name, forWorkspace(original, workspace), COMPANY, "a company's HTML") : original)
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
