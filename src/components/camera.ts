import { SHOTS, type Note, type Shot } from '../screens/cam'
/* Its styles come with it, as text: the site's 1 sheet is cut to what each page's own HTML and code name (scripts/
   purge-css.mjs), and the camera's classes are only ever set here, after the page has loaded. */
import css from './camera.css?inline'

/* The camera on the app screens (Seun and James, 3 Oct: "pan and zoom in to every clicked target section"; the brief is
   _research/illus/CAMERA.md). AppScreen loads this module with the first screen its page asks it to film (Home's hero
   tabs), and films a screen only if it has a shot list (src/screens/cam.ts), so no other page or screen changes.
   - The rig is the window's fit box (.appx-fit), moved by translate() scale() inside the frame (.ilwrap clips it). A
     shot is a region: the union of its elements, framed at the zoom that fits it, up to a gentle push (Seun, 7 Oct:
     lean in, never dive), so the whole window stays in view. Where the push leaves the camera only a few px to pan, it
     stays centred, so every edge of the window crops the same.
   - A hold drifts forward very slowly; a hold with a note or a click stays still, so its line and its target stay put.
     A move eases the centre (in-out cubic) and the zoom (in log space), and dips out a little on a long one so the eye
     keeps its bearings. The last shot holds the screen's finding, still.
   - A spotlight dims the rest of the window: it crossfades from 1 region to the next as the camera moves, so the light
     moves with the story. A pointer sets off once its shot is framed and still, moves on a slight arc to what the story
     clicks, presses, and a ring spreads from the click (the screen's own drawn pointer hides while the camera runs).
   - Each beat's note (Seun, 7 Oct: "annotate the point the motion is bringing, a line and text box... premium"): once
     its shot has settled and its point has landed, a hairline draws from the lit region's edge, then a small label
     with the point fades and rises in; both leave before the next move, and the last one stays. They are drawn outside
     the rig, in the frame's own px, from where the shot's held view puts the region, so their type never scales or
     blurs. On a phone each label docks to the frame's top or bottom edge with a short line.
   - Measured once per play, on the frame after the story starts (a hero tab's panel is skipped by the browser until it
     is drawn, styles/perf.css), and checked: a measure that does not add up (the window not yet where its styles put
     it, or no close shot laid out) is taken again each frame for a few frames; if it never does, the screen plays as
     drawn. Every motion is 1 Web Animations API animation on transform or opacity, started on the story's own clock
     (its CSS animations' start), so the compositor runs it in step with the story. Off screen it pauses; back in view
     it catches up. A story already playing when the camera arrives (the page's boot
     script plays the first screen at once, src/boot.ts) is joined where it is, easing in from the wide view; a story
     played again eases out from wherever the camera was.
   - Reduced motion never films (AppScreen): the finished screen shows as it always has, with only its last note drawn
     still where it reads cleanly at rest (`still`). */

/* Where the frame crops to the window's main panel (styles/site.css): the card is a third as wide, so shots go tighter. */
const PHONE = '(max-width: 519.98px)'
/* How far the camera leans in, as a share of the wide view (Seun, 7 Oct: "way too zoomed in... you lose sight of the
   whole illustration"). It pushes in gently and never dives: the whole screen stays in frame on a desktop card, and the
   main panel on a phone's, while the spotlight does the focusing. A shot that fits the frame leans in to this ceiling;
   a bigger one stays wide. */
const PUSH = { desk: 1.06, phone: 1.1 } as const
const MOVE = 0.8
/* A hold's zoom grows this much a second. */
const DRIFT = 0.018
/* Rig px the camera may pan before it bothers: a push that leaves less than this stays centred. */
const SLACK = 14
/* The spotlight's fades: in over at least this long as a shot arrives, out as the next move starts. */
const SETTLE = 0.35
const LEAVE = 0.2
/* A story joined late eases in from the wide view over this long; one played again, from where the camera was. */
const JOIN = 0.8
const REJOIN = 0.45
/* App px of air around a shot, and around its lit region (a shot's own `lit` overrides it). */
const PAD = 10
const LIT = 6
/* A move is sampled this often (seconds); holds need only their ends. */
const STEP = 1 / 30
/* Frames a measure that does not add up is taken again for, before the screen plays as drawn. */
const TRIES = 20
/* The least a close beat holds, to be read at a glance (checked while developing). */
const READ = 1.2
/* A note: its line draws over DRAW once the shot has settled, then its label fades and rises over SHOW; both leave
   over GONE, ending as the next move starts. Frame px: how far a label stands off its region, how far into the label
   its line meets it, and the frame's inner margin a label keeps (a phone's labels dock to it). */
const DRAW = 0.35
const SHOW = 0.25
const GONE = 0.2
const RISE = 4
const OFF = 18
const INTO = 14
const EDGE = { desk: 12, phone: 6 } as const
/* A phone's docked line reaches what it points at within this many frame px; farther, it is a stub this long. */
const REACH = 40
const STUB = 12
const PTR = '<path d="M3 1.5v12.2l3.1-3 2.05 4.6 2.15-.95-2-4.5h4.3Z"/>'

type View = { x: number; y: number; s: number }
type Box = { l: number; t: number; r: number; b: number }
type Pt = { x: number; y: number }
type Run = { lead?: CSSAnimation; anims: Animation[]; els: Element[] }
/* A note laid out in the frame's px: its label's box, its line's segments (from the region outward) and its dot. */
type Laid = { label: Box; segs: [Pt, Pt][]; dot?: Pt; text: string }

const runs = new WeakMap<Element, Run>()
const waiting = new WeakSet<HTMLElement>()
const pending = new WeakMap<Element, number>()

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))
const ramp = (t: number, d: number) => clamp(t / d, 0, 1)
const ease = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2)
const num = (v: unknown) => (v === null || v === undefined ? null : Number(v))
const grow = (b: Box, d: number): Box => ({ l: b.l - d, t: b.t - d, r: b.r + d, b: b.b + d })
const warn = (name: string, msg: string) => {
  if (import.meta.env.DEV) console.warn(`camera, ${name}: ${msg}`)
}

/* The story's clock: a finite CSS animation of the story (the screens' spinners loop, and are left out). */
function clock(il: HTMLElement): CSSAnimation | undefined {
  if (typeof il.getAnimations !== 'function' || typeof CSSAnimation === 'undefined') return
  for (const a of il.getAnimations({ subtree: true }))
    if (a instanceof CSSAnimation && Number.isFinite(Number(a.effect?.getComputedTiming().endTime))) return a
}

/* Every animation of a run starts when the story did (once the story has a start time). */
function sync(run: Run, il?: Element) {
  if (!run.lead) return
  const t = num(run.lead.startTime)
  if (t !== null) for (const a of run.anims) a.startTime = t
  else if (il)
    run.lead.ready.then(
      () => {
        if (runs.get(il) === run) sync(run)
      },
      () => {},
    )
}

/* Nothing runs off screen: a run pauses when its screen leaves the view and catches up with the story when it is back. */
let seen: IntersectionObserver | undefined
function watch(il: HTMLElement) {
  seen ??= new IntersectionObserver((entries) => {
    for (const e of entries) {
      const run = runs.get(e.target)
      if (!run) continue
      if (e.isIntersecting) sync(run, e.target)
      else for (const a of run.anims) a.pause()
    }
  })
  seen.observe(il)
}

/* The camera's own styles, written into the page once, with its first shot. */
let styled = false
function style() {
  if (styled) return
  styled = true
  const el = document.createElement('style')
  el.textContent = css
  document.head.append(el)
}

/* Keyframes from a function of story time, at the given times (seconds), over `end` seconds. */
function frames<K extends Keyframe>(times: Iterable<number>, end: number, at: (t: number) => K): Keyframe[] {
  const ts = [...new Set([0, ...times, end])].filter((t) => t >= 0 && t <= end).sort((a, b) => a - b)
  return ts.map((t) => ({ ...at(t), offset: end ? t / end : 0 }))
}

/* Where the rig is now, while a run moves it: its scale and translation (its origin is its top left corner). */
function pose(fit: HTMLElement): { s: number; e: number; f: number } | undefined {
  const m = /^matrix\(([^)]+)\)$/.exec(getComputedStyle(fit).transform)
  const v = m?.[1].split(',').map(Number)
  if (!v || v.length !== 6 || !(v[0] > 0) || v.some((n) => !Number.isFinite(n))) return
  return { s: v[0], e: v[4], f: v[5] }
}

/* A screen's geometry, measured once: the frame (.ilwrap), the rig (.appx-fit, untransformed: any earlier run is cut),
   the window in it and its scale, and how to find a region, frame a view and map the window's px into the frame's. */
function measure(il: HTMLElement) {
  const fit = il.querySelector<HTMLElement>('.appx-fit')
  const win = fit?.querySelector<HTMLElement>('.appx')
  const frame = il.closest<HTMLElement>('.ilwrap') ?? il
  if (!fit || !win) return
  const F = frame.getBoundingClientRect()
  const R = fit.getBoundingClientRect()
  const A = win.getBoundingClientRect()
  const k = A.width / 720
  /* The window fills the fit box, or on a phone its main panel does, flush with the box's right edge. A window that
     isn't (the screen not yet drawn as shown) is measured again. */
  if (!(k > 0) || !R.width || !F.width || Math.abs(A.right - R.right) > 2 || A.left > R.left + 2) return
  const phone = matchMedia(PHONE).matches
  /* The frame's centre in the rig's own px (its origin is the fit box's top left corner). */
  const cx = F.left - R.left + F.width / 2
  const cy = F.top - R.top + F.height / 2
  /* The window's px in the rig's own (the window sits in the fit box at scale k; on phones shifted to its main panel). */
  const ox = A.left - R.left
  const oy = A.top - R.top

  /* Where an element sits in the window, in its own px (720 x 450), from layout alone: the story's own transforms (an
     entrance sliding in, a press) never move a shot, a click or a note. */
  const where = (el: Element): Box | undefined => {
    if (!(el instanceof HTMLElement)) return
    let x = 0
    let y = 0
    for (let n: HTMLElement = el; n !== win; ) {
      x += n.offsetLeft
      y += n.offsetTop
      const p: Element | null = n.offsetParent
      if (!(p instanceof HTMLElement) || !win.contains(p)) return
      if (p !== win) {
        x += p.clientLeft
        y += p.clientTop
      }
      n = p
    }
    return el.offsetWidth || el.offsetHeight ? { l: x, t: y, r: x + el.offsetWidth, b: y + el.offsetHeight } : undefined
  }
  /* The union of what a selector list matches, in the window's px; none when nothing it matches is laid out inside it. */
  const box = (sel: string | undefined): Box | undefined => {
    if (!sel) return
    let els: NodeListOf<Element>
    try {
      els = win.querySelectorAll(sel)
    } catch {
      return
    }
    const u = { l: Infinity, t: Infinity, r: -Infinity, b: -Infinity }
    for (const el of els) {
      const q = where(el)
      if (!q) continue
      u.l = Math.min(u.l, q.l)
      u.t = Math.min(u.t, q.t)
      u.r = Math.max(u.r, q.r)
      u.b = Math.max(u.b, q.b)
    }
    return u.l < u.r && u.l > -2 && u.t > -2 && u.r < 722 && u.b < 452 ? u : undefined
  }
  /* A box in the window's px, as a view shows it in the frame's px. */
  const shown = (v: View, b: Box): Box => ({
    l: F.width / 2 + v.s * (ox + b.l * k - v.x),
    t: F.height / 2 + v.s * (oy + b.t * k - v.y),
    r: F.width / 2 + v.s * (ox + b.r * k - v.x),
    b: F.height / 2 + v.s * (oy + b.b * k - v.y),
  })
  return { fit, win, F, R, k, phone, cx, cy, ox, oy, box, shown, wide: { x: cx, y: cy, s: 1 } as View }
}
type Geo = NonNullable<ReturnType<typeof measure>>

/* A note's label, measured in place (its type is the frame's, never scaled), and where it goes for a view: beside the
   lit region on a desktop, docked to the frame's top or bottom edge on a phone, with its line and the dot it leaves. */
function lay(g: Geo, name: string, note: Note, v: View, lit: Box, label: HTMLElement): Laid | undefined {
  const n: Note = g.phone ? { ...note, ...note.phone } : note
  const text = g.phone ? n.text.replace(/\s*\n\s*/g, ' ') : n.text
  label.textContent = text
  const W = label.offsetWidth
  const H = label.offsetHeight
  if (!W || !H) return
  const edge = g.phone ? EDGE.phone : EDGE.desk
  const at = (sel: string | undefined, or: Box) => {
    const b = sel ? g.box(sel) : undefined
    if (sel && !b) warn(name, `a note's ${sel} matched nothing laid out`)
    return b ? g.shown(v, b) : or
  }
  const region = g.shown(v, lit)
  const from = at(n.from, region)
  const mid = (b: Box) => ({ x: (b.l + b.r) / 2, y: (b.t + b.b) / 2 })
  const cross = n.at ? mid(at(n.at, from)) : { x: from.l + (n.pos ?? 0.5) * (from.r - from.l), y: from.t + (n.pos ?? 0.5) * (from.b - from.t) }
  const inside = (b: Box): Box => {
    const dx = clamp(b.l, edge, g.F.width - edge - (b.r - b.l)) - b.l
    const dy = clamp(b.t, edge, g.F.height - edge - (b.b - b.t)) - b.t
    return { l: b.l + dx, t: b.t + dy, r: b.r + dx, b: b.b + dy }
  }

  /* A phone's label docks to the frame's edge; its line runs straight to the nearest edge of what it points at, when
     that is near (`reach`). Farther, or with a header in between (`gap`), it would cross the words between, so it is a
     short stub pointing the way, with no dot: the spotlight already shows what it means. */
  if (g.phone && n.dock) {
    const top = n.dock === 'top'
    const y0 = top ? edge : g.F.height - edge - H
    const x0 = n.align === 'end' ? g.F.width - edge - W : n.align === 'center' ? cross.x - W / 2 : edge
    const L = inside({ l: x0, t: y0, r: x0 + W, b: y0 + H })
    const x = clamp(cross.x, Math.max(L.l, from.l) + 8, Math.min(L.r, from.r) - 8)
    const b = { x, y: top ? L.b : L.t }
    const far = top ? from.t - b.y : b.y - from.b
    if (far < 4) warn(name, `the phone note "${text}" has no room for its line`)
    if (n.gap || far > (n.reach ?? REACH)) {
      /* A stub runs down (or up) clear of the words it would cross: just before `gap`, where it has one. */
      const by = n.gap ? g.box(n.gap) : undefined
      const sx = by ? clamp(g.shown(v, by).l - 14, L.l + 10, L.r - 10) : clamp(cross.x, L.l + 10, L.r - 10)
      const a = { x: sx, y: b.y + (top ? STUB : -STUB) }
      return { label: L, segs: [[a, { x: sx, y: b.y }]], text }
    }
    const a = { x, y: top ? from.t : from.b }
    return { label: L, segs: [[a, b]], dot: a, text }
  }

  /* Beside the region: the line leaves `from` (out of its side facing the label, or first out of `exit` for `run` px,
     then turning), and the label stands `len` px off `box` on its side, lined up with the line or with `to`. */
  const side = n.side
  const ref = n.box ? at(n.box, from) : from
  const len = n.len ?? OFF
  const flat = side === 'left' || side === 'right'
  const out = n.exit ?? side
  const p0: Pt =
    out === 'below' ? { x: cross.x, y: from.b } : out === 'above' ? { x: cross.x, y: from.t } : out === 'right' ? { x: from.r, y: cross.y } : { x: from.l, y: cross.y }
  const turn: Pt | undefined = n.exit
    ? { x: p0.x + (out === 'right' ? 1 : out === 'left' ? -1 : 0) * (n.run ?? 0), y: p0.y + (out === 'below' ? 1 : out === 'above' ? -1 : 0) * (n.run ?? 0) }
    : undefined
  const line = turn ?? p0
  let L: Box
  if (n.cover) {
    /* Grown to cover whole chrome (its words never cut), lined up with it as `align` says. */
    const c = at(n.cover, ref)
    const w = Math.max(W, c.r - c.l)
    const h = Math.max(H, c.b - c.t)
    const l = n.align === 'end' ? c.r - w : n.align === 'center' ? (c.l + c.r - w) / 2 : c.l
    const t = (c.t + c.b - h) / 2
    L = { l, t, r: l + w, b: t + h }
  } else {
    const to = n.to ? at(n.to, ref) : undefined
    let l: number
    let t: number
    if (flat) {
      l = side === 'right' ? ref.r + len : ref.l - len - W
      t = n.align === 'start' ? (to ? to.t : line.y - INTO) : n.align === 'end' ? (to ? to.b : line.y + INTO) - H : (to ? mid(to).y : line.y) - H / 2
    } else {
      t = side === 'below' ? ref.b + len : ref.t - len - H
      l = n.align === 'end' ? (to ? to.r : line.x + INTO) - W : n.align === 'center' ? (to ? mid(to).x : line.x) - W / 2 : to ? to.l : line.x - INTO
    }
    L = inside({ l, t, r: l + W, b: t + H })
  }
  /* The line ends on the label's edge that faces it. */
  const end: Pt = flat ? { x: side === 'right' ? L.l : L.r, y: line.y } : { x: line.x, y: side === 'below' ? L.t : L.b }
  if (flat ? end.y < L.t + 4 || end.y > L.b - 4 : end.x < L.l + 4 || end.x > L.r - 4) warn(name, `the note "${text}" has its line beside its label, not into it`)
  const segs: [Pt, Pt][] = turn ? [[p0, turn], [turn, end]] : [[p0, end]]
  return { label: L, segs, dot: p0, text }
}

/* A note's elements in the overlay: the dot on the region's edge (a stub has none), 1 or 2 hairline segments, the
   label. */
function draw(layer: HTMLElement, laid: Laid, label: HTMLElement) {
  let dot: HTMLElement | undefined
  if (laid.dot) {
    dot = document.createElement('i')
    dot.className = 'cam-dot'
    dot.style.cssText = `left:${Math.round(laid.dot.x)}px;top:${Math.round(laid.dot.y)}px`
  }
  const segs = laid.segs.map(([a, b]) => {
    const el = document.createElement('i')
    el.className = 'cam-line'
    const x = Math.round(Math.min(a.x, b.x))
    const y = Math.round(Math.min(a.y, b.y))
    const w = Math.max(1, Math.round(Math.abs(b.x - a.x)))
    const h = Math.max(1, Math.round(Math.abs(b.y - a.y)))
    /* It grows from the end nearest the region. */
    const ox = b.x < a.x ? '100%' : '0'
    const oy = b.y < a.y ? '100%' : '0'
    el.style.cssText = `left:${x}px;top:${y}px;width:${w}px;height:${h}px;transform-origin:${ox} ${oy}`
    return { el, flat: w > h, len: Math.hypot(b.x - a.x, b.y - a.y) }
  })
  label.style.left = `${Math.round(laid.label.l)}px`
  label.style.top = `${Math.round(laid.label.t)}px`
  label.style.minWidth = `${Math.round(laid.label.r - laid.label.l)}px`
  label.style.minHeight = `${Math.round(laid.label.b - laid.label.t)}px`
  if (dot) layer.append(dot)
  layer.append(...segs.map((s) => s.el), label)
  return { dot, segs, label }
}

/* The overlay the notes are drawn in: the frame's own px, over the rig, hidden from assistive tech (each screen's text
   alternative carries its notes' points, in order). */
function layer(il: HTMLElement, cls: string) {
  const el = document.createElement('div')
  el.className = 'cam-notes ' + cls
  el.setAttribute('aria-hidden', 'true')
  il.append(el)
  return el
}
const newLabel = (to: HTMLElement) => {
  const p = document.createElement('p')
  p.className = 'cam-note'
  to.append(p)
  return p
}

/* Films a screen's story as it plays: called with the screen's root (.il) and its name once its story has started.
   Again for the same play does nothing; a new play (the story restarted) films it from the start. */
export function film(il: HTMLElement, name: string) {
  const list = SHOTS[name]
  if (!list) return
  const lead = clock(il)
  /* A screen just shown (a hero tab's panel) starts its story once the browser draws it, a frame on: filmed then. A
     panel still hidden waits for its own play. */
  if (!lead) {
    if (!waiting.has(il) && !il.closest('[inert]')) {
      waiting.add(il)
      il.addEventListener(
        'animationstart',
        () => {
          waiting.delete(il)
          film(il, name)
        },
        { once: true },
      )
    }
    return
  }
  if (runs.get(il)?.lead === lead) return
  /* Measured on the next frame, once the screen is drawn as shown; a run already on it carries on until then. */
  const id = pending.get(il)
  if (id !== undefined) cancelAnimationFrame(id)
  pending.set(il, requestAnimationFrame(() => shoot(il, name, list, 0)))
}

function shoot(il: HTMLElement, name: string, list: Shot[], tries: number, was?: { s: number; e: number; f: number }) {
  pending.delete(il)
  const lead = clock(il)
  if (!lead || !il.classList.contains('play') || runs.get(il)?.lead === lead) return
  const fit0 = il.querySelector<HTMLElement>('.appx-fit')
  if (!fit0) return
  /* Where the camera is, if it is filming this screen in view: the new run eases out from there. */
  const old = runs.get(il)
  const state = old?.anims[0]?.playState
  was ??= state === 'running' || state === 'finished' ? pose(fit0) : undefined
  cut(il)
  /* Measured again on the next frame, for a few frames. */
  const again = () => {
    if (tries < TRIES) pending.set(il, requestAnimationFrame(() => shoot(il, name, list, tries + 1, was)))
    return tries < TRIES
  }

  const geo = measure(il)
  if (!geo) {
    if (!again()) warn(name, 'the window never measured up; the screen plays as drawn')
    return
  }
  const { fit, win, F, R, k, phone, cx, cy, ox, oy, box, wide } = geo
  const push = phone ? PUSH.phone : PUSH.desk

  /* A centre the frame stays covered from: inside the window by half the view, or the frame's own centre while the
     view is still wider than the window, or so nearly as wide that panning would only crop 1 edge more than another. */
  const cover = (c: number, s: number, size: number, view: number, mid: number) => {
    const half = view / 2 / s
    return 2 * half >= size - SLACK ? mid : clamp(c, half, size - half)
  }
  const place = (v: View): View => ({ x: cover(v.x, v.s, R.width, F.width, cx), y: cover(v.y, v.s, R.height, F.height, cy), s: v.s })
  /* What a view shows, in the rig's px, and whether a box (window px) is inside it. */
  const sees = (v: View, b: Box) =>
    ox + b.l * k >= v.x - F.width / 2 / v.s - 1 &&
    ox + b.r * k <= v.x + F.width / 2 / v.s + 1 &&
    oy + b.t * k >= v.y - F.height / 2 / v.s - 1 &&
    oy + b.b * k <= v.y + F.height / 2 / v.s + 1

  /* The shots for this size, each with its view, the region it lights (padded) and its click. */
  type Take = { sh: Shot; v: View; lit?: Box; tap?: Box; fits?: number }
  const shots: Take[] = []
  let lost = 0
  for (const sh of list) {
    if (sh.only === (phone ? 'desk' : 'phone')) continue
    const sel = phone ? (sh.phone ?? sh.on) : sh.on
    if (!sel) {
      if (!phone) shots.push({ sh, v: wide })
      continue
    }
    const b = box(sel)
    const c = sh.click ? box(sh.click) : undefined
    if (!b || (sh.click && !c)) {
      lost++
      continue
    }
    const w = (b.r - b.l + 2 * PAD) * k
    const h = (b.b - b.t + 2 * PAD) * k
    const fits = Math.min(F.width / w, F.height / h)
    const s = clamp(fits, 1, push)
    /* A click shot wider or taller than its view centres on what is clicked, so the click stays in frame. */
    const x = ox + (c && w * s > F.width ? (c.l + c.r) / 2 : (b.l + b.r) / 2) * k
    const y = oy + (c && h * s > F.height ? (c.t + c.b) / 2 : (b.t + b.b) / 2) * k
    const v = place({ x, y, s })
    if (!sees(v, b)) warn(name, `the shot at ${sh.at}s (${sel}) is bigger than its view and is cut`)
    if (c && !sees(v, c)) warn(name, `the click at ${sh.tap}s (${sh.click}) is outside its shot's view`)
    shots.push({ sh, v, lit: grow(b, sh.lit ?? LIT), tap: c, fits })
  }
  if (lost) {
    if (again()) return
    warn(name, `${lost} shot(s) matched nothing laid out in the window, and are left out`)
  }
  if (!shots.some((t) => t.lit)) return

  /* The path: the camera opens on the first shot; before each next one it holds, then moves. `stay` is each shot's
     hold (from its arrival to the next move) and `came` the move into it. */
  type Seg = { t0: number; t1: number; a: View; b: View; move: boolean }
  const segs: Seg[] = []
  const stay: { from: number; to: number }[] = []
  const came: number[] = [0]
  const arrived = [0]
  let at = 0
  let v = shots[0].v
  shots.slice(1).forEach(({ sh, v: next }, i) => {
    const cur = shots[i]
    const go = Math.max(at, sh.at - (sh.move ?? MOVE))
    if (cur.lit && go - at < READ) warn(name, `the shot at ${cur.sh.at}s holds ${(go - at).toFixed(2)}s, under ${READ}s`)
    /* A hold drifts in, never past where its shot still fits; a hold with a click or a note stays still. */
    const held = cur.tap || cur.sh.note ? v : place({ ...v, s: Math.min(v.s * Math.exp(DRIFT * (go - at)), Math.max(v.s, Math.min(push, cur.fits ?? push))) })
    if (go > at) segs.push({ t0: at, t1: go, a: v, b: held, move: false })
    stay.push({ from: at, to: go })
    const end = Math.max(go + 0.3, sh.at)
    segs.push({ t0: go, t1: end, a: held, b: next, move: true })
    came.push(go)
    at = end
    arrived.push(end)
    v = next
  })
  stay.push({ from: at, to: Infinity })
  const last = v
  const arrive = at

  /* A move eases the centre and the zoom (in log space); a long one dips out a little and back in. */
  const toward = (a: View, b: View, e: number, dip = 0, p = e): View =>
    place({
      x: a.x + (b.x - a.x) * e,
      y: a.y + (b.y - a.y) * e,
      s: Math.max(1, Math.exp(Math.log(a.s) + (Math.log(b.s) - Math.log(a.s)) * e) * (1 - dip * Math.sin(Math.PI * p))),
    })
  const path = (t: number): View => {
    for (const g of segs) {
      if (t > g.t1) continue
      if (t <= g.t0) return g.a
      const p = (t - g.t0) / (g.t1 - g.t0)
      if (!g.move) return { x: g.a.x + (g.b.x - g.a.x) * p, y: g.a.y + (g.b.y - g.a.y) * p, s: g.a.s + (g.b.s - g.a.s) * p }
      const far = (Math.hypot(g.b.x - g.a.x, g.b.y - g.a.y) * Math.min(g.a.s, g.b.s)) / Math.min(F.width, F.height)
      const dip = g.t1 - g.t0 > 0.79 && far > 0.8 ? Math.min(0.15, (far - 0.45) * 0.4) : 0
      return toward(g.a, g.b, ease(p), dip, p)
    }
    return last
  }

  /* The way in: a story joined late (it has run `late` seconds already) eases in from the wide view where it is; one
     played again eases out from wherever the camera was. */
  const begun = num(lead.startTime)
  const now = num(document.timeline.currentTime)
  const late = begun === null || now === null ? 0 : Math.max(0, (now - begun) / 1000)
  const back = was && { x: (cx - was.e) / was.s, y: (cy - was.f) / was.s, s: was.s }
  const into = late > 0.25 ? { t0: late, d: JOIN, from: back ?? wide } : back ? { t0: late, d: REJOIN, from: back } : undefined
  const view = (t: number): View => {
    if (!into || t >= into.t0 + into.d) return path(t)
    if (t <= into.t0) return into.from
    return toward(into.from, path(t), ease((t - into.t0) / into.d))
  }
  const lit = (t: number) => (into ? ramp(t - into.t0 - into.d * 0.6, SETTLE) : 1)

  style()
  const anims: Animation[] = []
  const els: Element[] = []
  const end = Math.max(arrive, into ? into.t0 + into.d : 0, 0.01)
  const steps = (t0: number, t1: number) => Array.from({ length: Math.max(0, Math.ceil((t1 - t0) / STEP)) }, (_, i) => t0 + i * STEP)

  /* The rig. */
  const tf = (w: View) => `translate(${(cx - w.s * w.x).toFixed(2)}px,${(cy - w.s * w.y).toFixed(2)}px) scale(${w.s.toFixed(4)})`
  const rigTimes = segs.flatMap((g) => (g.move ? [g.t0, ...steps(g.t0, g.t1), g.t1] : [g.t0, g.t1]))
  if (into) rigTimes.push(into.t0, ...steps(into.t0, into.t0 + into.d), into.t0 + into.d)
  anims.push(fit.animate(frames(rigTimes, end, (t) => ({ transform: tf(view(t)) })), { duration: end * 1000, fill: 'both' }))

  /* The spotlight: 1 lit region per close shot, in the window's own px. It comes up over the move into its shot (at
     least SETTLE long) and goes over the next move, so the light crosses from 1 region to the next. A region padded
     to nothing sits on its card's own edge, with no ring of its own. */
  shots.forEach(({ sh, lit: q }, i) => {
    if (!q) return
    const el = document.createElement('i')
    el.className = 'cam-spot' + ((sh.lit ?? LIT) > 0 ? ' cam-edge' : '')
    el.setAttribute('aria-hidden', 'true')
    el.style.cssText = `left:${q.l}px;top:${q.t}px;width:${q.r - q.l}px;height:${q.b - q.t}px;border-radius:${sh.round ?? 10}px`
    win.append(el)
    els.push(el)
    const { from, to } = stay[i]
    const up = i === 0 ? from : Math.min(came[i], from - SETTLE)
    const on = Math.max(from, up + SETTLE)
    const down = Number.isFinite(to) ? Math.max(to + LEAVE, arrived[i + 1] ?? to) : Infinity
    const o = (t: number) => ease(ramp(t - up, on - up)) * (Number.isFinite(to) ? 1 - ease(ramp(t - to, down - to)) : 1) * lit(t)
    const ts = [up, on, ...steps(up, on)]
    if (Number.isFinite(to)) ts.push(to, down, ...steps(to, down))
    if (into) ts.push(into.t0, into.t0 + into.d * 0.6, into.t0 + into.d * 0.6 + SETTLE)
    const span = Number.isFinite(down) ? down : Math.max(on, into ? into.t0 + into.d * 0.6 + SETTLE : 0, 0.01)
    anims.push(el.animate(frames(ts, span, (t) => ({ opacity: o(t).toFixed(3) })), { duration: span * 1000, fill: 'both' }))
  })

  /* The notes: once a shot has settled (or at its cue, when its point lands later), the line draws from the region's
     edge, then the label fades and rises in; both leave as the next move starts, and the last one stays. */
  const notes = shots.filter((t) => t.sh.note && t.lit)
  if (notes.length) {
    const over = layer(il, 'cam-film')
    els.push(over)
    notes.forEach((take) => {
      const i = shots.indexOf(take)
      const note = take.sh.note as Note
      const label = newLabel(over)
      const laid = lay(geo, name, note, take.v, take.lit as Box, label)
      if (!laid) {
        label.remove()
        return
      }
      const { dot, segs: lines, label: lab } = draw(over, laid, label)
      const { from, to } = stay[i]
      const cue = Math.max(from + SETTLE, note.cue ?? 0)
      const shown = cue + DRAW + SHOW
      const gone = Number.isFinite(to) ? to : Infinity
      if (shown > gone - GONE - 0.8) warn(name, `the note "${laid.text}" is read for under .8s before the move at ${to}s`)
      const span = Number.isFinite(gone) ? gone : shown
      const fade = (t: number) => (Number.isFinite(gone) ? 1 - ramp(t - (gone - GONE), GONE) : 1)
      const run = (el: Element, ts: number[], at: (t: number) => Keyframe) =>
        anims.push(el.animate(frames(ts, span, at), { duration: span * 1000, fill: 'both' }))
      const outs = Number.isFinite(gone) ? [gone - GONE, gone] : []
      /* The dot lands where the line starts. */
      if (dot) run(dot, [cue, cue + 0.12, ...outs], (t) => ({ opacity: (ramp(t - cue, 0.12) * fade(t)).toFixed(3) }))
      /* The line draws in its segments' order, each for its share of DRAW: from the region outward, or a stub from the
         label outward. */
      const total = lines.reduce((s, l) => s + l.len, 0) || 1
      let t0 = cue
      for (const l of lines) {
        const d = (DRAW * l.len) / total
        const a = t0
        const grow = (t: number) => {
          const p = ease(ramp(t - a, d))
          return { transform: l.flat ? `scaleX(${p.toFixed(4)})` : `scaleY(${p.toFixed(4)})`, opacity: fade(t).toFixed(3) }
        }
        run(l.el, [a, ...steps(a, a + d), a + d, ...outs], grow)
        t0 += d
      }
      /* The label: in once the line has reached it. */
      const lin = cue + DRAW
      run(lab, [lin, ...steps(lin, lin + SHOW), lin + SHOW, ...outs], (t) => {
        const p = ease(ramp(t - lin, SHOW))
        return { opacity: (p * fade(t)).toFixed(3), transform: `translateY(${((1 - p) * RISE).toFixed(2)}px)` }
      })
    })
  }

  /* The pointer and its click rings: it sets off once its shot is framed and still (and early enough to arc in over
     half a second at least), presses, a ring spreads, then it drifts off and fades. */
  const legs = shots.flatMap(({ sh, tap: q }, i) => {
    if (!q) return []
    const tap = sh.tap ?? sh.at + 0.8
    if (sh.at > tap - 0.6) warn(name, `the click at ${tap}s comes under .6s after its shot lands at ${sh.at}s`)
    const x = q.l + (q.r - q.l) * 0.45
    const y = (q.t + q.b) / 2
    const x0 = clamp(x + (x > 560 ? -84 : 84), 16, 700)
    const y0 = clamp(y + (y > 360 ? -72 : 64), 46, 432)
    /* The arc bows to one side of the straight line. */
    const mx = (x0 + x) / 2 + (y - y0) * 0.18
    const my = (y0 + y) / 2 - (x - x0) * 0.18
    const from = Math.min(Math.max(tap - 0.95, arrived[i] + 0.15), tap - 0.68)
    return [{ x, y, x0, y0, mx, my, tap, from, arc: from + 0.1, to: tap + 0.85 }]
  })
  if (legs.length) {
    const ptr = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    ptr.setAttribute('class', 'cam-ptr')
    ptr.setAttribute('viewBox', '0 0 16 16')
    ptr.setAttribute('aria-hidden', 'true')
    ptr.innerHTML = PTR
    win.append(ptr)
    els.push(ptr)
    const hand = (t: number) => {
      const g = legs.find((l) => t >= l.from && t <= l.to) ?? legs.find((l) => t < l.from) ?? legs[legs.length - 1]
      const { x, y, x0, y0, mx, my, tap, arc } = g
      let px = x
      let py = y
      if (t < tap - 0.08) {
        const p = ease(ramp(t - arc, tap - 0.08 - arc))
        px = (1 - p) ** 2 * x0 + 2 * (1 - p) * p * mx + p * p * x
        py = (1 - p) ** 2 * y0 + 2 * (1 - p) * p * my + p * p * y
      } else if (t > tap + 0.55) {
        const p = ease(ramp(t - tap - 0.55, 0.3))
        px += 6 * p
        py += 8 * p
      }
      const press = t < tap - 0.02 || t > tap + 0.2 ? 1 : t < tap + 0.06 ? 1 - 0.14 * ramp(t - tap + 0.02, 0.08) : 0.86 + 0.14 * ramp(t - tap - 0.06, 0.14)
      const o = t < g.from || t > g.to ? 0 : Math.min(ramp(t - g.from, 0.15), 1 - ramp(t - tap - 0.55, 0.3))
      return { transform: `translate(${(px - 3).toFixed(2)}px,${(py - 1.5).toFixed(2)}px) scale(${press.toFixed(3)})`, opacity: o.toFixed(3) }
    }
    const ptrEnd = legs[legs.length - 1].to
    const ptrTimes = legs.flatMap((l) => [l.from - 0.01, l.from, l.from + 0.15, ...steps(l.arc, l.tap - 0.08), l.tap - 0.08, l.tap - 0.02, l.tap + 0.06, l.tap + 0.2, l.tap + 0.55, ...steps(l.tap + 0.55, l.to), l.to])
    anims.push(ptr.animate(frames(ptrTimes, ptrEnd, hand), { duration: ptrEnd * 1000, fill: 'both' }))

    for (const l of legs) {
      const ring = document.createElement('i')
      ring.className = 'cam-ring'
      ring.setAttribute('aria-hidden', 'true')
      win.append(ring)
      els.push(ring)
      const spread = (s: number) => `translate(${l.x.toFixed(2)}px,${l.y.toFixed(2)}px) scale(${s})`
      const span = l.tap + 0.55
      anims.push(
        ring.animate(
          [
            { offset: 0, opacity: 0, transform: spread(0.35) },
            { offset: l.tap / span, opacity: 0, transform: spread(0.35) },
            { offset: l.tap / span + 0.0001, opacity: 0.45, transform: spread(0.35), easing: 'cubic-bezier(.2,.7,.3,1)' },
            { offset: 1, opacity: 0, transform: spread(1.25) },
          ],
          { duration: span * 1000, fill: 'both' },
        ),
      )
    }
  }

  const run: Run = { lead, anims, els }
  runs.set(il, run)
  il.classList.add('cam-on')
  sync(run, il)
  watch(il)
}

/* Reduced motion: no camera, the finished screen as drawn, with its last note at rest where it reads cleanly without
   the spotlight (its shot's `still`), laid out for the wide view. Measured on the next frame; a screen not laid out
   yet (a hero tab not chosen) gets it when it is shown. */
export function still(il: HTMLElement, name: string) {
  const list = SHOTS[name]
  const sh = list?.[list.length - 1]
  const note = sh?.note
  if (!sh || !note?.still || runs.has(il)) return
  const id = pending.get(il)
  if (id !== undefined) cancelAnimationFrame(id)
  pending.set(
    il,
    requestAnimationFrame(() => {
      pending.delete(il)
      if (runs.has(il)) return
      const g = measure(il)
      if (!g || (g.phone && note.still === 'desk')) return
      const b = g.box(g.phone ? (sh.phone ?? sh.on) : sh.on)
      if (!b) return
      style()
      const over = layer(il, 'cam-still')
      const label = newLabel(over)
      const laid = lay(g, name, note, g.wide, grow(b, sh.lit ?? LIT), label)
      if (!laid) return over.remove()
      draw(over, laid, label)
      runs.set(il, { anims: [], els: [over] })
      il.classList.add('cam-on')
    }),
  )
}

/* Puts the screen back as it was: no camera, the finished or playing story as drawn. */
export function cut(il: HTMLElement) {
  const id = pending.get(il)
  if (id !== undefined) {
    cancelAnimationFrame(id)
    pending.delete(il)
  }
  const run = runs.get(il)
  if (!run) return
  runs.delete(il)
  for (const a of run.anims) a.cancel()
  for (const el of run.els) el.remove()
  il.classList.remove('cam-on')
  seen?.unobserve(il)
}
