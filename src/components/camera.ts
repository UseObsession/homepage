import type { Shot } from '../screens/cam'
/* Its styles come with it, as text: the site's 1 sheet is cut to what each page's own HTML and code name (scripts/
   purge-css.mjs), and the camera's classes are only ever set here, after the page has loaded. */
import css from './camera.css?inline'

/* The camera on the app screens (Seun and James, 3 Oct: "pan and zoom in to every clicked target section"; the brief is
   _research/illus/CAMERA.md). A screen opts in with a shot list on its root (src/screens/cam.ts); AppScreen loads this
   module with the first such screen it plays, so no page carries it before then.
   - The rig is the window's fit box (.appx-fit), moved by translate() scale() inside the frame (.ilwrap clips it). A
     shot is a region: the union of its elements, framed at the zoom that fits it, clamped so the app's small type
     reads at a glance (tighter on phones). Once the camera is in close, the window always covers the frame.
   - A hold drifts forward very slowly; a move eases the centre (in-out cubic) and the zoom (in log space), and dips out
     on a long one so the eye keeps its bearings. The last shot holds the screen's finding, close and still.
   - A spotlight dims the rest of the window as each shot settles. A pointer moves on a slight arc to what the story
     clicks, presses, and a ring spreads from the click (the screen's own drawn pointer hides while the camera runs).
   - Measured once per play. Every motion is 1 Web Animations API animation on transform or opacity, started on the
     story's own clock (its CSS animations' start), so the compositor runs it in step with the story. Off screen it
     pauses; back in view it catches up. A story already playing when the camera arrives (the page's boot script
     plays the first screen at once, src/boot.ts) is joined where it is, easing in from the wide view.
   - Reduced motion never gets here (AppScreen): the finished screen shows as it always has. */

/* Where the frame crops to the window's main panel (styles/site.css): the card is a third as wide, so shots go tighter. */
const PHONE = '(max-width: 519.98px)'
/* How close a shot comes, in screen px per app px (the window is 720 app px wide): the floor sets the app's 11px type at
   about 22px on a desktop card and 14px on a phone's; the ceiling keeps a small target in its context. */
const ZOOM = { desk: [2, 3.1], phone: [1.3, 1.7] } as const
const MOVE = 0.6
/* A hold's zoom grows this much a second. */
const DRIFT = 0.018
/* The spotlight fades in as a shot settles, and out as the next move starts. */
const SETTLE = 0.35
const LEAVE = 0.2
/* A story joined late eases in from the wide view over this long. */
const JOIN = 0.8
/* App px of air around a shot, and around its lit region. */
const PAD = 10
const LIT = 6
/* A move is sampled this often (seconds); holds need only their ends. */
const STEP = 1 / 30
const PTR = '<path d="M3 1.5v12.2l3.1-3 2.05 4.6 2.15-.95-2-4.5h4.3Z"/>'

type View = { x: number; y: number; s: number }
type Box = { l: number; t: number; r: number; b: number }
type Run = { lead: CSSAnimation; anims: Animation[]; els: Element[] }

const runs = new WeakMap<Element, Run>()
const waiting = new WeakSet<HTMLElement>()

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))
const ramp = (t: number, d: number) => clamp(t / d, 0, 1)
const ease = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2)
const num = (v: unknown) => (v === null || v === undefined ? null : Number(v))

/* The story's clock: a finite CSS animation of the story (the screens' spinners loop, and are left out). */
function clock(il: HTMLElement): CSSAnimation | undefined {
  if (typeof il.getAnimations !== 'function' || typeof CSSAnimation === 'undefined') return
  for (const a of il.getAnimations({ subtree: true }))
    if (a instanceof CSSAnimation && Number.isFinite(Number(a.effect?.getComputedTiming().endTime))) return a
}

/* Every animation of a run starts when the story did. */
function sync(run: Run) {
  const t = num(run.lead.startTime)
  if (t === null) return
  for (const a of run.anims) a.startTime = t
}

/* Nothing runs off screen: a run pauses when its screen leaves the view and catches up with the story when it is back. */
let seen: IntersectionObserver | undefined
function watch(il: HTMLElement) {
  seen ??= new IntersectionObserver((entries) => {
    for (const e of entries) {
      const run = runs.get(e.target)
      if (!run) continue
      if (e.isIntersecting) sync(run)
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

/* Films a screen's story as it plays: called with the screen's root (.il) once its story has started. Again for the
   same play does nothing; a new play (the story restarted) films it from the start. */
export function film(il: HTMLElement) {
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
          film(il)
        },
        { once: true },
      )
    }
    return
  }
  if (runs.get(il)?.lead === lead) return
  cut(il)
  const fit = il.querySelector<HTMLElement>('.appx-fit')
  const win = fit?.querySelector<HTMLElement>('.appx')
  const frame = il.closest<HTMLElement>('.ilwrap') ?? il
  let list: Shot[]
  try {
    list = JSON.parse(il.dataset.cam ?? '')
  } catch {
    return
  }
  if (!fit || !win || !Array.isArray(list)) return

  /* Measured once: the frame, the rig (untransformed: any earlier run is cut), the window and its scale. */
  const F = frame.getBoundingClientRect()
  const R = fit.getBoundingClientRect()
  const A = win.getBoundingClientRect()
  const k = A.width / 720
  if (!k || !R.width || !F.width) return
  const phone = matchMedia(PHONE).matches
  const [zl, zh] = phone ? ZOOM.phone : ZOOM.desk
  const lo = Math.max(1, zl / k)
  const hi = Math.max(lo, zh / k)
  /* The frame's centre in the rig's own px (its origin is the fit box's top left corner). */
  const cx = F.left - R.left + F.width / 2
  const cy = F.top - R.top + F.height / 2

  /* A centre the frame stays covered from: inside the window by half the view, or the frame's own centre while the
     view is still wider than the window. */
  const cover = (c: number, s: number, size: number, view: number, mid: number) => {
    const half = view / 2 / s
    return 2 * half >= size ? mid : clamp(c, half, size - half)
  }
  const place = (v: View): View => ({ x: cover(v.x, v.s, R.width, F.width, cx), y: cover(v.y, v.s, R.height, F.height, cy), s: v.s })
  const wide: View = { x: cx, y: cy, s: 1 }

  /* Where an element sits in the window, in its own px (720 x 450), from layout alone: the story's own transforms (an
     entrance sliding in, a press) never move a shot or a click. */
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
  /* The union of what a selector list matches, in the window's px. */
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
    return u.l < u.r ? u : undefined
  }
  /* The window's px in the rig's own (the window sits in the fit box at scale k; on phones shifted to its main panel). */
  const ox = A.left - R.left
  const oy = A.top - R.top

  /* The shots for this size, each with its view and the region it lights. */
  const shots = list
    .filter((sh) => sh.only !== (phone ? 'desk' : 'phone'))
    .flatMap((sh): { sh: Shot; v: View; lit?: Box }[] => {
      const sel = phone ? (sh.phone ?? sh.on) : sh.on
      if (!sel) return phone ? [] : [{ sh, v: wide }]
      const b = box(sel)
      if (!b) return []
      const s = clamp(Math.min(F.width / ((b.r - b.l + 2 * PAD) * k), F.height / ((b.b - b.t + 2 * PAD) * k)), lo, hi)
      return [{ sh, v: place({ x: ox + ((b.l + b.r) / 2) * k, y: oy + ((b.t + b.b) / 2) * k, s }), lit: b }]
    })
  if (!shots.length) return

  /* The path: the camera opens on the first shot; before each next one it holds (drifting), then moves. */
  type Seg = { t0: number; t1: number; a: View; b: View; move: boolean }
  const segs: Seg[] = []
  const stay: { from: number; to: number }[] = []
  let at = 0
  let v = shots[0].v
  for (const { sh, v: next } of shots.slice(1)) {
    const go = Math.max(at, sh.at - (sh.move ?? MOVE))
    const held = place({ ...v, s: v.s * Math.exp(DRIFT * (go - at)) })
    if (go > at) segs.push({ t0: at, t1: go, a: v, b: held, move: false })
    stay.push({ from: at, to: go })
    const end = Math.max(go + 0.3, sh.at)
    segs.push({ t0: go, t1: end, a: held, b: next, move: true })
    at = end
    v = next
  }
  stay.push({ from: at, to: Infinity })
  const last = v
  const arrive = at

  /* A move eases the centre and the zoom (in log space); a long one dips out and back in. */
  const toward = (a: View, b: View, e: number, dip = 0, p = e): View =>
    place({
      x: a.x + (b.x - a.x) * e,
      y: a.y + (b.y - a.y) * e,
      s: Math.max(1, Math.exp(Math.log(a.s) + (Math.log(b.s) - Math.log(a.s)) * e) * (1 - dip * Math.sin(Math.PI * p))),
    })
  const pose = (t: number): View => {
    for (const g of segs) {
      if (t > g.t1) continue
      if (t <= g.t0) return g.a
      const p = (t - g.t0) / (g.t1 - g.t0)
      if (!g.move) return { x: g.a.x + (g.b.x - g.a.x) * p, y: g.a.y + (g.b.y - g.a.y) * p, s: g.a.s + (g.b.s - g.a.s) * p }
      const far = (Math.hypot(g.b.x - g.a.x, g.b.y - g.a.y) * Math.min(g.a.s, g.b.s)) / Math.min(F.width, F.height)
      return toward(g.a, g.b, ease(p), Math.min(0.3, Math.max(0, far - 0.45) * 0.4), p)
    }
    return last
  }

  /* Joined late: the story has run `late` seconds already, so the camera eases in from the wide view where it is. */
  const begun = num(lead.startTime)
  const now = num(document.timeline.currentTime)
  const late = begun === null || now === null ? 0 : Math.max(0, (now - begun) / 1000)
  const join = late > 0.25
  const view = (t: number): View => {
    if (!join || t >= late + JOIN) return pose(t)
    if (t <= late) return wide
    return toward(wide, pose(t), ease((t - late) / JOIN))
  }
  const lit = (t: number) => (join ? ramp(t - late - JOIN * 0.6, SETTLE) : 1)

  style()
  const anims: Animation[] = []
  const els: Element[] = []
  const end = Math.max(arrive, join ? late + JOIN : 0, 0.01)
  const steps = (t0: number, t1: number) => Array.from({ length: Math.ceil((t1 - t0) / STEP) }, (_, i) => t0 + i * STEP)

  /* The rig. */
  const tf = (w: View) => `translate(${(cx - w.s * w.x).toFixed(2)}px,${(cy - w.s * w.y).toFixed(2)}px) scale(${w.s.toFixed(4)})`
  const rigTimes = segs.flatMap((g) => (g.move ? [g.t0, ...steps(g.t0, g.t1), g.t1] : [g.t0, g.t1]))
  if (join) rigTimes.push(late, ...steps(late, late + JOIN), late + JOIN)
  anims.push(fit.animate(frames(rigTimes, end, (t) => ({ transform: tf(view(t)) })), { duration: end * 1000, fill: 'both' }))

  /* The spotlight: 1 lit region per close shot, in the window's own px, fading in as the shot settles. */
  shots.forEach(({ lit: q }, i) => {
    if (!q) return
    const el = document.createElement('i')
    el.className = 'cam-spot'
    el.setAttribute('aria-hidden', 'true')
    el.style.cssText = `left:${q.l - LIT}px;top:${q.t - LIT}px;width:${q.r - q.l + 2 * LIT}px;height:${q.b - q.t + 2 * LIT}px`
    win.append(el)
    els.push(el)
    const { from, to } = stay[i]
    const o = (t: number) => ramp(t - from, SETTLE) * (1 - ramp(t - to, LEAVE)) * lit(t)
    const ts = [from, from + SETTLE, to, to + LEAVE]
    if (join) ts.push(late, late + JOIN * 0.6, late + JOIN * 0.6 + SETTLE)
    const span = Number.isFinite(to) ? to + LEAVE : Math.max(from + SETTLE, join ? late + JOIN * 0.6 + SETTLE : 0)
    anims.push(el.animate(frames(ts, span, (t) => ({ opacity: o(t).toFixed(3) })), { duration: span * 1000, fill: 'both' }))
  })

  /* The pointer and its click rings: a slight arc in, a press, a ring, then it drifts off and fades. */
  const taps = shots
    .map(({ sh }) => ({ q: sh.click ? box(sh.click) : undefined, tap: sh.tap ?? sh.at + 0.4 }))
    .filter((c): c is { q: Box; tap: number } => !!c.q)
  if (taps.length) {
    const ptr = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    ptr.setAttribute('class', 'cam-ptr')
    ptr.setAttribute('viewBox', '0 0 16 16')
    ptr.setAttribute('aria-hidden', 'true')
    ptr.innerHTML = PTR
    win.append(ptr)
    els.push(ptr)
    const legs = taps.map(({ q, tap }) => {
      const x = q.l + (q.r - q.l) * 0.45
      const y = (q.t + q.b) / 2
      const x0 = clamp(x + (x > 560 ? -84 : 84), 16, 700)
      const y0 = clamp(y + (y > 360 ? -72 : 64), 46, 432)
      /* The arc bows to one side of the straight line. */
      const mx = (x0 + x) / 2 + (y - y0) * 0.18
      const my = (y0 + y) / 2 - (x - x0) * 0.18
      return { x, y, x0, y0, mx, my, tap, from: tap - 0.95, to: tap + 0.85 }
    })
    const hand = (t: number) => {
      const g = legs.find((l) => t >= l.from && t <= l.to) ?? legs.find((l) => t < l.from) ?? legs[legs.length - 1]
      const { x, y, x0, y0, mx, my, tap } = g
      let px = x
      let py = y
      if (t < tap - 0.08) {
        const p = ease(ramp(t - (tap - 0.85), 0.77))
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
    const ptrTimes = legs.flatMap((l) => [l.from - 0.01, l.from, l.from + 0.15, ...steps(l.tap - 0.85, l.tap - 0.08), l.tap - 0.08, l.tap - 0.02, l.tap + 0.06, l.tap + 0.2, l.tap + 0.55, ...steps(l.tap + 0.55, l.to), l.to])
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
  if (num(lead.startTime) === null)
    lead.ready.then(
      () => {
        if (runs.get(il) === run) sync(run)
      },
      () => {},
    )
  else sync(run)
  watch(il)
}

/* Puts the screen back as it was: no camera, the finished or playing story as drawn. */
export function cut(il: HTMLElement) {
  const run = runs.get(il)
  if (!run) return
  runs.delete(il)
  for (const a of run.anims) a.cancel()
  for (const el of run.els) el.remove()
  il.classList.remove('cam-on')
  seen?.unobserve(il)
}
