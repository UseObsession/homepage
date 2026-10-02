import { useEffect, useRef, useState } from 'react'
import type { Run } from '../content/runs'
import { prefersReducedMotion, useInView } from '../hooks/useReveal'
import { Mark } from './Logo'
import './RunWindow.css'

const STEP_MS = 750
const HOLD_MS = 3800

/* A product window that plays a run: the set up, then each timestamped event, then the summary. */
export function RunWindow({ runs, headings }: { runs: Run[]; headings?: string[] }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  const [index, setIndex] = useState(0)
  const [step, setShown] = useState(0)
  const [auto, setAuto] = useState(true)
  const timer = useRef<number | undefined>(undefined)
  const run = runs[index]
  const shown = prefersReducedMotion() ? run.events.length + 1 : step
  const done = shown > run.events.length

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return
    window.clearTimeout(timer.current)
    if (!done) {
      timer.current = window.setTimeout(() => setShown((s) => s + 1), shown === 0 ? 500 : STEP_MS)
    } else if (auto && runs.length > 1) {
      timer.current = window.setTimeout(() => {
        setIndex((i) => (i + 1) % runs.length)
        setShown(0)
      }, HOLD_MS)
    }
    return () => window.clearTimeout(timer.current)
  }, [inView, shown, done, auto, run.events.length, runs.length])

  function pick(i: number) {
    setAuto(false)
    setIndex(i)
    setShown(0)
  }

  const progress = Math.min(shown / (run.events.length + 1), 1)

  return (
    <div className="runwin-wrap" ref={ref}>
      {headings && <TypedHeading phrases={headings} active={inView} />}
      {runs.length > 1 && (
        <div className="runwin-tabs" role="tablist" aria-label="Example runs">
          {runs.map((r, i) => (
            <button
              key={r.id}
              role="tab"
              aria-selected={i === index}
              className={i === index ? 'on' : ''}
              onClick={() => pick(i)}
            >
              {r.tab}
              <i style={{ transform: `scaleX(${i === index ? progress : 0})` }} />
            </button>
          ))}
        </div>
      )}

      <div className="runwin" role="tabpanel" aria-label={`${run.recipe} on ${run.target}`}>
        <div className="runwin-bar">
          <span className="runwin-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="runwin-crumb">
            Watches <b>/</b> {run.recipe}
          </span>
          <span className={`runwin-status ${done ? 'is-done' : ''}`}>
            {done ? (
              <>
                <Mark size={12} /> Done
              </>
            ) : (
              <>
                <span className="spin" aria-hidden="true" /> Running
              </>
            )}
          </span>
        </div>

        <div className="runwin-body">
          <aside className="runwin-side">
            <dl>
              <div>
                <dt>Company</dt>
                <dd>{run.target}</dd>
              </div>
              <div>
                <dt>Recipe</dt>
                <dd>{run.recipe}</dd>
              </div>
              <div>
                <dt>How often</dt>
                <dd>{run.cadence}</dd>
              </div>
            </dl>
            <p className="runwin-k">Test customer</p>
            <ul className="runwin-kit">
              <li>Own inbox</li>
              <li>Own phone number</li>
              <li>Own browser</li>
              <li>Says it's automated</li>
            </ul>
            <p className="runwin-label">{run.label}</p>
          </aside>

          <div className="runwin-main">
            <p className="runwin-k">Timeline</p>
            <ol className="runwin-events">
              {run.events.map((e, i) => (
                <li key={`${run.id}-${i}`} className={i < shown ? 'in' : ''}>
                  <time>{e.time}</time>
                  <span className="ev-text">{e.text}</span>
                  <span className={`tag ${e.tone}`}>{e.tag}</span>
                </li>
              ))}
            </ol>
            <div className={`runwin-summary ${done ? 'in' : ''}`}>
              <span className="runwin-k">Result</span>
              <p>{run.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Types each phrase, holds it, deletes it and moves to the next, for as long as the window is on screen. */
function TypedHeading({ phrases, active }: { phrases: string[]; active: boolean }) {
  const [i, setI] = useState(0)
  const [count, setCount] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const phrase = phrases[i]
  const still = prefersReducedMotion() || phrases.length === 0
  const n = still ? phrase.length : count

  useEffect(() => {
    if (!active || still) return
    let t: number
    if (!deleting && n < phrase.length) t = window.setTimeout(() => setCount(n + 1), n === 0 ? 300 : 55)
    else if (!deleting) t = window.setTimeout(() => setDeleting(true), 2600)
    else if (n > 0) t = window.setTimeout(() => setCount(n - 1), 24)
    else
      t = window.setTimeout(() => {
        setDeleting(false)
        setI((x) => (x + 1) % phrases.length)
      }, 250)
    return () => window.clearTimeout(t)
  }, [active, still, deleting, n, phrase.length, phrases.length])

  return (
    <h2 className="runwin-head" aria-label={phrases[0]}>
      <span aria-hidden="true">
        {phrase.slice(0, n)}
        <span className="caret" />
      </span>
    </h2>
  )
}
