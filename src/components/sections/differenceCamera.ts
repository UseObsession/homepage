/* The difference block's clock and camera (sections/Difference).
   CLOCK is the 1 story clock: the block writes it into CSS as custom properties (clockVars), so the CSS story and the
   camera below read the same times. Both halves run at once, so the contrast lands in the first 2 seconds:
   - 0 to 0.6s: the scraps drop in on the left; the agent card and the thread draw on the right.
   - Left: the "You" cursor clicks 4 scraps, 0.75s apart (1.5 to 3.75s), and gets nowhere: the last click lands on a
     "?", and the rest of the desk mutes (4.2s). The cursor waits there.
   - Right, meanwhile: the agent's square travels the thread and a step lands every 0.8s (1.2 to 5.2s), each ring
     closing 0.3s after its card. The finding lands at 6.2s and the next move at 7.2s; the cursor leaves the "?", arcs
     to the button and clicks once (8.2s).
   - The pull back (9.2s): the same panel at 2 more companies slides up from behind, then the count (9.8s).
   - The end frame holds from about 10.3s to 16s, and is the frame at rest (prerender, reduced motion, no script).
   Seun's rules of 7 Oct (_research/illus/CAMERA.md): never dive, the whole stage in view at every moment, the spotlight
   does the focusing. The lean is gone (review, 7 Oct): scaling a stage of small words while they are read softens them,
   and any lean either crops the panel or crosses the column. The spotlight is CSS (the desk mutes at CLOCK.dim).
   What moves here is what needs measuring: the cursor and its clicks, and the agent's square on the thread. Each is
   1 Web Animations API animation on transform or opacity over the whole clock, made in the frame the story starts, so
   it runs in step with the CSS. The block pauses and resumes them with the rest (getAnimations). Positions are read from
   layout (offsets), never from transforms, so a scrap's drop or lift never moves a click. */

export const CLOCK = {
  length: 16,
  /* Step i lands at first + i x gap. */
  first: 1.2,
  gap: 0.8,
  taps: [1.5, 2.25, 3, 3.75],
  dim: 4.2,
  find: 6.2,
  next: 7.2,
  approve: 8.2,
  pull: 9.2,
  count: 9.8,
}
export const stepAt = (i: number) => CLOCK.first + i * CLOCK.gap

/* The clock as the CSS custom properties the stylesheet reads (Difference.css, the played story). */
export const clockVars = {
  '--s-df-clock': `${CLOCK.length}s`,
  '--s-df-dim': `${CLOCK.dim}s`,
  '--s-df-find': `${CLOCK.find}s`,
  '--s-df-next': `${CLOCK.next}s`,
  '--s-df-approve': `${CLOCK.approve}s`,
  '--s-df-pull': `${CLOCK.pull}s`,
  '--s-df-count': `${CLOCK.count}s`,
}

const STEP = 1 / 30
const LEAVE = CLOCK.next

type P = { x: number; y: number }

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))
const ease = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2)

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

/* Keyframes from a function of story time, sampled at the given times, over the whole clock. */
function frames(times: number[], at: (t: number) => Keyframe): Keyframe[] {
  const L = CLOCK.length
  const ts = [...new Set([0, ...times.map((t) => Math.round(t * 1000) / 1000), L])].filter((t) => t >= 0 && t <= L).sort((a, b) => a - b)
  return ts.map((t) => ({ ...at(t), offset: t / L }))
}
const samples = (t0: number, t1: number) => Array.from({ length: Math.max(1, Math.ceil((t1 - t0) / STEP)) + 1 }, (_, i) => Math.min(t1, t0 + i * STEP))
const timing = (): KeyframeAnimationOptions => ({ duration: CLOCK.length * 1000, fill: 'both' })

export function film(stage: HTMLElement): Animation[] {
  const rig = stage.querySelector<HTMLElement>('.s-df-rig')
  if (!rig || typeof rig.animate !== 'function') return []
  const W = rig.offsetWidth
  const H = rig.offsetHeight
  if (!W || !H) return []
  const anims: Animation[] = []
  const { taps: TAPS, approve: APPROVE } = CLOCK

  /* ---- The cursor: 4 clicks that get nowhere, a wait on the "?", then 1 click that decides ---- */
  const ptr = rig.querySelector<HTMLElement>('.s-df-ptr')
  const taps = TAPS.map((_, i) => {
    /* The last tap lands on its "?": the 1 drawn in this layout (a phone shows its own short line). */
    const scrap = rig.querySelector(`.s-df-scrap[data-tap="${i + 1}"]`)
    const q = scrap && [...scrap.querySelectorAll<HTMLElement>('.is-q')].find((e) => e.offsetWidth)
    return spot(q ?? scrap ?? null, rig)
  })
  const btn = spot(rig.querySelector('.s-df-btn'), rig)
  const you = box(rig.querySelector('.s-df-you'), rig)
  if (ptr && btn && taps.every(Boolean)) {
    const pts = taps as P[]
    /* The drawn cursor's tip sits 3px in and 1.5px down from its box; the moving one comes to rest on it exactly. */
    const rest = you ? { x: you.x + 3, y: you.y + 1.5 } : { x: btn.x + 14, y: btn.y + 12 }
    const show = TAPS[0] - 0.5
    const start = { x: clamp(pts[0].x + 64, 8, W - 8), y: clamp(pts[0].y + 52, 8, H - 8) }
    const legs = [
      { a: start, b: pts[0], t0: show + 0.12, t1: TAPS[0] - 0.08 },
      ...pts.slice(1).map((b, i) => ({ a: pts[i], b, t0: TAPS[i] + 0.16, t1: TAPS[i + 1] - 0.08 })),
      { a: pts[3], b: btn, t0: LEAVE, t1: APPROVE - 0.1 },
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
    const times = [show - 0.01, show, show + 0.15, ...legs.flatMap((g) => samples(g.t0, g.t1)), ...presses.flatMap((c) => [c - 0.02, c + 0.06, c + 0.2])]
    anims.push(
      ptr.animate(
        frames(times, (t) => {
          const p = where(t)
          return {
            transform: `translate(${(p.x - 3).toFixed(2)}px,${(p.y - 1.5).toFixed(2)}px) scale(${press(t).toFixed(3)})`,
            opacity: t < show ? 0 : clamp((t - show) / 0.15, 0, 1),
          }
        }),
        timing(),
      ),
    )
    /* A ring spreads from each click and fades. */
    rig.querySelectorAll<HTMLElement>('.s-df-click').forEach((ring, i) => {
      const c = presses[i]
      const p = i < 4 ? pts[i] : btn
      if (c === undefined || !p) return
      const L = CLOCK.length
      const at = (sc: number) => `translate(${p.x.toFixed(2)}px,${p.y.toFixed(2)}px) scale(${sc})`
      anims.push(
        ring.animate(
          [
            { offset: 0, opacity: 0, transform: at(0.35) },
            { offset: c / L, opacity: 0, transform: at(0.35) },
            { offset: c / L + 0.0001, opacity: 0.45, transform: at(0.35), easing: 'cubic-bezier(.2,.7,.3,1)' },
            { offset: (c + 0.55) / L, opacity: 0, transform: at(1.25) },
            { offset: 1, opacity: 0, transform: at(1.25) },
          ],
          timing(),
        ),
      )
    })
  }

  /* ---- The agent: the brand's square travels the thread, stops at each step as it lands, and leaves at the pull back ---- */
  const journey = rig.querySelector<HTMLElement>('.s-df-journey')
  const sq = journey?.querySelector<HTMLElement>('.s-df-sq')
  if (journey && sq) {
    const nodes = [...journey.querySelectorAll<HTMLElement>('.s-df-node[data-i]')]
      .map((n) => {
        const b = box(n, journey)
        return b && { x: b.x + b.w / 2, y: b.y + b.h / 2, at: stepAt(Number(n.dataset.i)) }
      })
      .filter((n): n is P & { at: number } => !!n && Number.isFinite(n.at))
    if (nodes.length) {
      const first = nodes[0]
      const enter = first.at - 0.3
      const off = CLOCK.pull
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
      const seen = (t: number) => (t < enter ? 0 : t < off ? clamp((t - enter) / 0.15, 0, 1) : clamp(1 - (t - off) / 0.3, 0, 1))
      const times = [enter - 0.01, enter, enter + 0.15, off, off + 0.3, ...hops.flatMap((h) => samples(h.t0, h.t1))]
      anims.push(
        sq.animate(
          frames(times, (t) => {
            const p = where(t)
            return { transform: `translate(${(p.x - 4).toFixed(2)}px,${(p.y - 4).toFixed(2)}px)`, opacity: seen(t) }
          }),
          timing(),
        ),
      )
    }
  }

  return anims
}
