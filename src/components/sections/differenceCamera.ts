/* The difference block's camera (sections/Difference): what moves on the 12 second story clock besides the CSS story.
   Seun's rules of 7 Oct (_research/illus/CAMERA.md): lean in, never dive. The whole stage stays in view at every moment;
   the spotlight does the focusing.
   - The lean: 1.06 at most on a wide screen (1.10 on a phone), its focus shifted at most 30px toward the beat's half,
     and never further than the room round the stage allows (measured once per play: the page's edges at the sides,
     the chips above and the points row below), so only empty margin ever leaves the frame. 3 beats: Today (1.5s), With
     Obsession (4.0s) and the pull back (9.0s, back to the whole stage). Holds drift forward by e^(0.0035t), except the
     end frame; moves ease in and out (cubic) over 0.5s.
   - The spotlight: the half out of the beat dims to 40%, with no blur, over 0.35s, and lifts at the pull back.
   - The "You" cursor: it clicks 4 scraps on the left (2.0 to 3.5s) and gets nowhere, then arcs to the next move's
     button and clicks once (8.5s), and rests beside it, where the drawn cursor sits at rest. It moves on a slight arc,
     presses (scale 0.86 for 0.2s) and leaves a click ring (0.35 to 1.25, 0.45 to 0 opacity, 0.55s).
   - The agent: the brand's square travels the thread and stops at each step as it lands.
   Every motion is 1 Web Animations API animation on transform or opacity, made here in the frame the story starts, so
   it runs in step with the story's CSS. The block pauses and resumes them with the rest (getAnimations). Positions are
   read from layout (offsets), never from transforms, so a scrap's drop or a lift never moves a click. */

const CLOCK = 12
const DRIFT = 0.0035
const PUSH = { desk: 1.06, phone: 1.1 }
const SHIFT = 30
const SETTLE = 0.35
const DIM = 0.4
const MOVE = 0.5
const TAPS = [2, 2.5, 3, 3.5]
const APPROVE = 8.5
const STEP = 1 / 30

type P = { x: number; y: number }
type View = { s: number; x: number; y: number }

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))
const ease = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2)
const IO = 'cubic-bezier(.65,0,.35,1)'

/* Where an element's box sits inside `root`, from layout alone (offsets), so no transform on the way counts. */
function box(el: Element | null, root: HTMLElement) {
  if (!(el instanceof HTMLElement)) return
  let x = 0
  let y = 0
  let n: HTMLElement = el
  while (n !== root) {
    x += n.offsetLeft
    y += n.offsetTop
    const p = n.offsetParent
    if (!(p instanceof HTMLElement) || !(p === root || root.contains(p))) return
    if (p !== root) {
      x += p.clientLeft
      y += p.clientTop
    }
    n = p
  }
  return el.offsetWidth || el.offsetHeight ? { x, y, w: el.offsetWidth, h: el.offsetHeight } : undefined
}

/* The centre of an element on the desk, turned with its tilted scrap. */
function spot(el: Element | null, rig: HTMLElement): P | undefined {
  const b = box(el, rig)
  if (!b || !(el instanceof HTMLElement)) return
  const p = { x: b.x + b.w / 2, y: b.y + b.h / 2 }
  const scrap = el.closest<HTMLElement>('.s-df-scrap')
  const sb = scrap && box(scrap, rig)
  const tilt = Number(scrap?.dataset.tilt)
  if (!sb || !tilt) return p
  const c = { x: sb.x + sb.w / 2, y: sb.y + sb.h / 2 }
  const a = (tilt * Math.PI) / 180
  const dx = p.x - c.x
  const dy = p.y - c.y
  return { x: c.x + dx * Math.cos(a) - dy * Math.sin(a), y: c.y + dx * Math.sin(a) + dy * Math.cos(a) }
}

/* Keyframes from a function of story time, sampled at the given times, over the 12 second clock. */
function frames(times: number[], at: (t: number) => Keyframe): Keyframe[] {
  const ts = [...new Set([0, ...times.map((t) => Math.round(t * 1000) / 1000), CLOCK])].filter((t) => t >= 0 && t <= CLOCK).sort((a, b) => a - b)
  return ts.map((t) => ({ ...at(t), offset: t / CLOCK }))
}
const samples = (t0: number, t1: number) => Array.from({ length: Math.max(1, Math.ceil((t1 - t0) / STEP)) + 1 }, (_, i) => Math.min(t1, t0 + i * STEP))
const timing: KeyframeAnimationOptions = { duration: CLOCK * 1000, fill: 'both' }

export function film(stage: HTMLElement, round: { above?: Element | null; below?: Element | null }): Animation[] {
  const rig = stage.querySelector<HTMLElement>('.s-df-rig')
  if (!rig || typeof rig.animate !== 'function') return []
  const today = rig.querySelector<HTMLElement>('.s-df-today')
  const obs = rig.querySelector<HTMLElement>('.s-df-obs')
  const W = rig.offsetWidth
  const H = rig.offsetHeight
  const R = rig.getBoundingClientRect()
  const k = R.width / W
  if (!W || !H || !(k > 0)) return []
  const phone = W < 500
  const anims: Animation[] = []

  /* ---- The lean ---- */
  const room = (v: number) => clamp(v / k - 2, 0, 64)
  const above = round.above?.getBoundingClientRect()
  const below = round.below?.getBoundingClientRect()
  const L = room(R.left)
  const Rt = room(document.documentElement.clientWidth - R.right)
  const T = room(above ? R.top - above.bottom - 6 : 24)
  const B = room(below ? below.top - R.bottom - 6 : 24)
  const most = Math.min(1 + (L + Rt) / W, 1 + (T + B) / H)
  /* A view at zoom `s`, shifted toward (dx, dy) as far as the room allows: the stage's edges never pass the room. */
  const view = (s0: number, dx = 0, dy = 0): View => {
    const s = clamp(s0, 1, most)
    const gx = ((s - 1) * W) / 2
    const gy = ((s - 1) * H) / 2
    return { s, x: clamp(dx, gx - L, Rt - gx), y: clamp(dy, gy - T, B - gy) }
  }
  const push = phone ? PUSH.phone : PUSH.desk
  const lean = (side: 'today' | 'obs', drift = 0) => {
    const toward = side === 'today' ? SHIFT : -SHIFT
    return view(push * Math.exp(DRIFT * drift), phone ? 0 : toward, phone ? toward : 0)
  }
  const tf = (v: View) => ({ transform: `translate(${v.x.toFixed(2)}px,${v.y.toFixed(2)}px) scale(${v.s.toFixed(4)})` })
  anims.push(
    rig.animate(
      [
        { offset: 0, ...tf(view(1)) },
        { offset: 1.5 / CLOCK, ...tf(view(Math.exp(DRIFT * 1.5))), easing: IO },
        { offset: (1.5 + MOVE) / CLOCK, ...tf(lean('today')) },
        { offset: 4 / CLOCK, ...tf(lean('today', 2)), easing: IO },
        { offset: (4 + MOVE) / CLOCK, ...tf(lean('obs')) },
        { offset: 9 / CLOCK, ...tf(lean('obs', 4.5)), easing: IO },
        { offset: (9 + MOVE) / CLOCK, ...tf(view(1)) },
        { offset: 1, ...tf(view(1)) },
      ],
      timing,
    ),
  )

  /* ---- The spotlight: the half out of the beat dims, readable, and lifts at the pull back ---- */
  const dim = (el: HTMLElement | null, from: number, to: number) => {
    if (!el) return
    anims.push(
      el.animate(
        [
          { offset: 0, opacity: 1 },
          { offset: from / CLOCK, opacity: 1 },
          { offset: (from + SETTLE) / CLOCK, opacity: DIM },
          { offset: to / CLOCK, opacity: DIM },
          { offset: (to + SETTLE) / CLOCK, opacity: 1 },
          { offset: 1, opacity: 1 },
        ],
        timing,
      ),
    )
  }
  dim(obs, 1.5, 4)
  dim(today, 4, 9)

  /* ---- The cursor: 4 clicks that get nowhere, then 1 that decides ---- */
  const ptr = rig.querySelector<HTMLElement>('.s-df-ptr')
  const taps = TAPS.map((_, i) => {
    const scrap = rig.querySelector(`.s-df-scrap[data-tap="${i + 1}"]`)
    return spot(scrap?.querySelector('.is-q') ?? scrap ?? null, rig)
  })
  const btn = spot(rig.querySelector('.s-df-btn'), rig)
  const you = box(rig.querySelector('.s-df-you'), rig)
  if (ptr && btn && taps.every(Boolean)) {
    const pts = taps as P[]
    /* The drawn cursor's tip sits 3px in and 1.5px down from its box; the moving one lands on it exactly. */
    const rest = you ? { x: you.x + 3, y: you.y + 1.5 } : { x: btn.x + 14, y: btn.y + 12 }
    const start = { x: clamp(pts[0].x + 64, 8, W - 8), y: clamp(pts[0].y + 52, 8, H - 8) }
    const legs = [
      { a: start, b: pts[0], t0: 1.62, t1: TAPS[0] - 0.08 },
      ...pts.slice(1).map((b, i) => ({ a: pts[i], b, t0: TAPS[i] + 0.16, t1: TAPS[i + 1] - 0.08 })),
      { a: pts[3], b: btn, t0: 7.5, t1: APPROVE - 0.1 },
      { a: btn, b: rest, t0: APPROVE + 0.16, t1: APPROVE + 0.45 },
    ]
    const where = (t: number): P => {
      let p = start
      for (const g of legs) {
        if (t < g.t0) break
        if (t >= g.t1) {
          p = g.b
          continue
        }
        const e = ease((t - g.t0) / (g.t1 - g.t0))
        /* A slight arc: the path bows to 1 side of the straight line. */
        const mx = (g.a.x + g.b.x) / 2 + (g.b.y - g.a.y) * 0.18
        const my = (g.a.y + g.b.y) / 2 - (g.b.x - g.a.x) * 0.18
        return {
          x: (1 - e) ** 2 * g.a.x + 2 * (1 - e) * e * mx + e * e * g.b.x,
          y: (1 - e) ** 2 * g.a.y + 2 * (1 - e) * e * my + e * e * g.b.y,
        }
      }
      return p
    }
    const presses = [...TAPS, APPROVE]
    const press = (t: number) => {
      for (const c of presses) {
        if (t < c - 0.02 || t > c + 0.2) continue
        return t < c + 0.06 ? 1 - 0.14 * clamp((t - c + 0.02) / 0.08, 0, 1) : 0.86 + 0.14 * clamp((t - c - 0.06) / 0.14, 0, 1)
      }
      return 1
    }
    const times = [1.54, 1.55, 1.7, ...legs.flatMap((g) => samples(g.t0, g.t1)), ...presses.flatMap((c) => [c - 0.02, c + 0.06, c + 0.2])]
    anims.push(
      ptr.animate(
        frames(times, (t) => {
          const p = where(t)
          return {
            transform: `translate(${(p.x - 3).toFixed(2)}px,${(p.y - 1.5).toFixed(2)}px) scale(${press(t).toFixed(3)})`,
            opacity: t < 1.55 ? 0 : clamp((t - 1.55) / 0.15, 0, 1),
          }
        }),
        timing,
      ),
    )
    /* A ring spreads from each click and fades. */
    rig.querySelectorAll<HTMLElement>('.s-df-click').forEach((ring, i) => {
      const c = presses[i]
      const p = i < 4 ? pts[i] : btn
      if (c === undefined || !p) return
      const at = (sc: number) => `translate(${p.x.toFixed(2)}px,${p.y.toFixed(2)}px) scale(${sc})`
      anims.push(
        ring.animate(
          [
            { offset: 0, opacity: 0, transform: at(0.35) },
            { offset: c / CLOCK, opacity: 0, transform: at(0.35) },
            { offset: c / CLOCK + 0.0001, opacity: 0.45, transform: at(0.35), easing: 'cubic-bezier(.2,.7,.3,1)' },
            { offset: (c + 0.55) / CLOCK, opacity: 0, transform: at(1.25) },
            { offset: 1, opacity: 0, transform: at(1.25) },
          ],
          timing,
        ),
      )
    })
  }

  /* ---- The agent: the brand's square travels the thread and stops at each step ---- */
  const journey = rig.querySelector<HTMLElement>('.s-df-journey')
  const sq = journey?.querySelector<HTMLElement>('.s-df-sq')
  if (journey && sq) {
    const nodes = [...journey.querySelectorAll<HTMLElement>('.s-df-node[data-at]')]
      .map((n) => {
        const b = box(n, journey)
        return b && { x: b.x + b.w / 2, y: b.y + b.h / 2, at: Number(n.dataset.at) }
      })
      .filter((n): n is P & { at: number } => !!n && Number.isFinite(n.at))
    if (nodes.length) {
      const first = nodes[0]
      const enter = first.at - 0.3
      const hops = nodes.slice(1).map((n, i) => ({ a: nodes[i], b: n, t0: nodes[i].at + 0.12, t1: n.at - 0.05 }))
      const where = (t: number): P => {
        let p: P = first
        for (const h of hops) {
          if (t < h.t0) break
          if (t >= h.t1) {
            p = h.b
            continue
          }
          const e = ease((t - h.t0) / (h.t1 - h.t0))
          return { x: h.a.x + (h.b.x - h.a.x) * e, y: h.a.y + (h.b.y - h.a.y) * e }
        }
        return p
      }
      const times = [enter - 0.01, enter, enter + 0.15, ...hops.flatMap((h) => samples(h.t0, h.t1))]
      anims.push(
        sq.animate(
          frames(times, (t) => {
            const p = where(t)
            return { transform: `translate(${(p.x - 4).toFixed(2)}px,${(p.y - 4).toFixed(2)}px)`, opacity: t < enter ? 0 : clamp((t - enter) / 0.15, 0, 1) }
          }),
          timing,
        ),
      )
    }
  }

  return anims
}
