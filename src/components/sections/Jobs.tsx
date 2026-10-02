import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react'
import type { Jobs as JobsContent } from '../../content/types'
import { AppScreen, type Workspace } from '../AppScreen'
import { StatusMark, type Status } from '../Logo'
import './Jobs.css'

/* Home's 4 jobs (docs/REBUILD.md 1b, kept from James's Home and brought to life). Each job is a calm block: its title,
   its line, and 1 small live element with a job to do.
   - A job with an example and no screen shows the example as the agent logs it: the line types once when it comes into
     view (1 character every --ob-type-step-min to -max, the system's typing pace) while the ring works, then the ring
     lands on the job's status. 1 line types at a time, in reading order, so only 1 mark moves in view.
   - A job with a screen (the 4th, "anything else") gets the full width: its example types into the task field, the way a
     reader would type it, beside the app screen that runs it.
   Screen readers get every example whole from the start. Reduced motion shows every line finished and every mark still. */

const never = () => () => {}
const useHydrated = () => useSyncExternalStore(never, () => true, () => false)

const REDUCE = '(prefers-reduced-motion: reduce)'
const onReduce = (cb: () => void) => {
  const m = matchMedia(REDUCE)
  m.addEventListener('change', cb)
  return () => m.removeEventListener('change', cb)
}
/* Reduced motion, read on the server as "no motion yet". */
const useReduced = () => useSyncExternalStore(onReduce, () => matchMedia(REDUCE).matches, () => true)

/* The status each logged example lands on, in the order of Home's jobs: a rival's offer logged, a prospect's gap found,
   your own journey held for your OK. */
const LANDS: Status[] = ['landed', 'landed', 'needs-you']

type Phase = 'static' | 'idle' | 'typing' | 'done'

/* A time token in ms. The build minifies times ("7000ms" ships as "7s"), so read the unit. */
function tokenMs(name: string, fallback: number) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  const m = raw.match(/^(-?\d*\.?\d+)(ms|s)$/)
  return m ? parseFloat(m[1]) * (m[2] === 's' ? 1000 : 1) : fallback
}

/* A numeral never ends a line apart from its word ("7 days", "40 packaging suppliers"), as in Use cases and Questions. */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1\u00a0')

/* Text that types itself once. The full text holds the space from the first frame, so nothing below it moves. */
function Typed({ text, phase, onDone, caret = false }: { text: string; phase: Phase; onDone: () => void; caret?: boolean }) {
  /* Characters typed so far; only read while typing. Each line types once, so it starts at 0. */
  const [typed, setTyped] = useState(0)
  const done = useRef(onDone)
  useEffect(() => {
    done.current = onDone
  })

  useEffect(() => {
    if (phase !== 'typing') return
    const min = tokenMs('--ob-type-step-min', 20)
    const max = tokenMs('--ob-type-step-max', 42)
    let i = 0
    let t = 0
    const step = () => {
      i += 1
      setTyped(i)
      if (i >= text.length) done.current()
      else t = window.setTimeout(step, min + Math.random() * (max - min))
    }
    t = window.setTimeout(step, max)
    return () => window.clearTimeout(t)
  }, [phase, text])

  const n = phase === 'typing' ? typed : phase === 'idle' ? 0 : text.length
  return (
    <span className="s-job-typed">
      <span className="s-job-typed-ghost" aria-hidden="true">
        {text}
      </span>
      <span className="s-job-typed-live" aria-hidden="true">
        {text.slice(0, n)}
        {((caret && phase !== 'static') || phase === 'typing') && (
          <span className={'ob-caret' + (phase === 'typing' ? ' is-typing' : '')} />
        )}
      </span>
      <span className="ob-sr">{text}</span>
    </span>
  )
}

type Props = {
  jobs: JobsContent
  /* Whose workspace a job's screen shows (components/AppScreen). */
  workspace?: Workspace
  id?: string
}

export function Jobs({ jobs, workspace = 'agency', id }: Props) {
  const uid = useId()
  const hydrated = useHydrated()
  const items = jobs.items
  const reduced = useReduced()
  /* Live elements in the order they came into view, and the ones that have finished typing. */
  const [seen, setSeen] = useState<number[]>([])
  const [finished, setFinished] = useState<number[]>([])
  const live = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        const now = entries
          .filter((e) => e.isIntersecting)
          .map((e) => live.current.indexOf(e.target as HTMLElement))
          .filter((i) => i >= 0)
          .sort((a, b) => a - b)
        if (now.length) setSeen((s) => [...s, ...now.filter((i) => !s.includes(i))])
        entries.forEach((e) => e.isIntersecting && io.unobserve(e.target))
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 1 },
    )
    live.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [items])

  const typing = seen.find((i) => !finished.includes(i))
  const phaseOf = (i: number): Phase => {
    if (!hydrated) return 'static'
    if (reduced || finished.includes(i)) return 'done'
    return typing === i ? 'typing' : 'idle'
  }
  const finish = (i: number) => setFinished((f) => (f.includes(i) ? f : [...f, i]))

  const narrow = items.filter((j) => !j.screen).length
  const headId = `${uid}-h`

  return (
    <section className="s-section s-jobs" id={id} aria-labelledby={headId}>
      <div className="s-wrap">
        <header className="s-head s-jobs-head">
          <h2 id={headId} className="ob-type-h2">
            {jobs.heading}
          </h2>
        </header>

        <ul className="s-jobs-list" style={{ ['--s-jobs-cols' as string]: Math.min(Math.max(narrow, 1), 3) }}>
          {items.map((j, i) => {
            const phase = phaseOf(i)
            const ref = (el: HTMLElement | null) => {
              live.current[i] = el
            }

            if (j.screen)
              return (
                <li key={j.title} className="s-job s-job--wide">
                  <div className="s-job-copy">
                    <h3 className="s-job-title">{j.title}</h3>
                    <p className="s-job-line">{tie(j.line)}</p>
                    {j.example && (
                      <div className="ob-prompt s-job-prompt" ref={ref}>
                        <span className="ob-prompt-gt" aria-hidden="true">
                          ›
                        </span>
                        <p className="ob-prompt-text">
                          <Typed text={tie(j.example)} phase={phase} onDone={() => finish(i)} caret />
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="s-job-screen">
                    <AppScreen name={j.screen} workspace={workspace} />
                  </div>
                </li>
              )

            const mark: Status = phase === 'typing' ? 'working' : phase === 'idle' ? 'waiting' : (LANDS[i] ?? 'landed')
            return (
              <li key={j.title} className="s-job">
                <h3 className="s-job-title">{j.title}</h3>
                <p className="s-job-line">{tie(j.line)}</p>
                {j.example && (
                  <p className="s-job-log" ref={ref}>
                    <span className={'s-job-mark' + (phase === 'static' ? '' : ' ob-anim-fade')} key={mark} aria-hidden="true">
                      <StatusMark state={mark} size={20} />
                    </span>
                    <Typed text={tie(j.example)} phase={phase} onDone={() => finish(i)} />
                  </p>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
