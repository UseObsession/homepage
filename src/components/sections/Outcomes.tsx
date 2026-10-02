import { useEffect, useId, useState, useSyncExternalStore } from 'react'
import type { Outcomes as OutcomesContent } from '../../content/types'
import { useInView } from '../../hooks/useReveal'
import './Outcomes.css'

/* Outcomes (docs/REBUILD.md 2, beat 5): what changes, in numbers. Each figure is large, in tabular numerals, with its
   label and, where the content gives one, its model line. A figure's number tweens once from 0 when the figures come
   into view (motion.css .ob-anim-number: --ob-number-tween, ease-out, from the value on screen), so the eye lands on the
   numbers first. "Up to" stays on the figure's own line: every modelled number is a ceiling and says so.
   Words that are not a number ("Every release", "Day 0, 14 and 28") stand as they are. Screen readers get each value
   whole; reduced motion shows the final figures. */

const REDUCE = '(prefers-reduced-motion: reduce)'
const onReduce = (cb: () => void) => {
  const m = matchMedia(REDUCE)
  m.addEventListener('change', cb)
  return () => m.removeEventListener('change', cb)
}
/* True once the page's script runs and the reader has not asked for reduced motion. */
const useMotionOk = () => useSyncExternalStore(onReduce, () => !matchMedia(REDUCE).matches, () => false)

type Figure = {
  qualifier: string
  currency: string
  num: number | null
  decimals: number
  grouped: boolean
  unit: string
  /* The whole value, when it is words rather than a number. */
  words: string
}

/* "Up to 1,080 hours" > Up to | 1,080 | hours. "Up to $216,000" > Up to | $ 216,000. "Every prospect" > words. */
function parse(value: string): Figure {
  const q = value.match(/^(up to)\s+/i)
  const qualifier = q ? q[1] : ''
  const rest = q ? value.slice(q[0].length) : value
  const m = rest.match(/^([$£€]?)(\d[\d,]*(?:\.\d+)?)(?:\s+(.+))?$/)
  if (!m) return { qualifier, currency: '', num: null, decimals: 0, grouped: false, unit: '', words: rest }
  const digits = m[2]
  return {
    qualifier,
    currency: m[1],
    num: Number(digits.replace(/,/g, '')),
    decimals: digits.includes('.') ? digits.split('.')[1].length : 0,
    grouped: digits.includes(','),
    unit: m[3] ?? '',
    words: '',
  }
}

const format = (f: Figure, n: number) =>
  f.currency +
  new Intl.NumberFormat('en-GB', {
    minimumFractionDigits: f.decimals,
    maximumFractionDigits: f.decimals,
    useGrouping: f.grouped,
  }).format(n)

function tweenMs() {
  const v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--ob-number-tween'))
  return Number.isFinite(v) ? v : 400
}

function Value({ value, armed, run }: { value: string; armed: boolean; run: boolean }) {
  const f = parse(value)
  const target = f.num ?? 0
  const moves = armed && f.num !== null && target > 0
  /* Progress of the tween, 0 to 1. Armed and not yet in view, the figure waits at 0. */
  const [k, setK] = useState(0)
  const [landed, setLanded] = useState(false)

  useEffect(() => {
    if (!moves || !run) return
    const ms = tweenMs()
    let raf = 0
    const t0 = performance.now()
    const step = (t: number) => {
      const p = ms > 0 ? Math.min(1, (t - t0) / ms) : 1
      setK(1 - (1 - p) ** 3)
      if (p < 1) raf = requestAnimationFrame(step)
      else setLanded(true)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [moves, run])

  const now = !moves || landed ? target : target * k
  const shown = format(f, f.decimals ? now : Math.round(now))

  return (
    <p className="s-out-value ob-type-stat">
      <span aria-hidden="true" className="s-out-figure">
        {f.qualifier && <span className="s-out-qual">{f.qualifier}</span>}
        {f.num === null ? (
          <span className="s-out-words">{f.words}</span>
        ) : (
          <span className="s-out-num ob-anim-number">
            <span className="s-out-ghost">{format(f, target)}</span>
            <span className="s-out-live">{shown}</span>
          </span>
        )}
        {f.unit && <small className="s-out-unit">{f.unit}</small>}
      </span>
      <span className="ob-sr">{value}</span>
    </p>
  )
}

export function Outcomes({ outcomes, id }: { outcomes: OutcomesContent; id?: string }) {
  const uid = useId()
  const motionOk = useMotionOk()
  const { ref, inView } = useInView<HTMLUListElement>(0.35)
  const headId = `${uid}-h`
  const n = outcomes.items.length
  const cols = n === 4 ? 2 : Math.min(n, 3)

  return (
    <section className="s-section s-out" id={id} aria-labelledby={headId}>
      <div className="s-wrap">
        <header className="s-head s-out-head">
          <h2 id={headId} className="ob-type-h2">
            {outcomes.heading}
          </h2>
          {outcomes.sub && <p className="ob-type-body-lg">{outcomes.sub}</p>}
        </header>

        <ul ref={ref} className="s-out-list" style={{ ['--s-out-cols' as string]: cols }}>
          {outcomes.items.map((it) => (
            <li key={it.value + it.label} className="s-out-item">
              <Value value={it.value} armed={motionOk} run={inView} />
              <p className="s-out-label">{it.label}</p>
              {it.note && <p className="s-out-note">{it.note}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
