import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { HomeHow } from '../../content/types'
import './HomeHowItWorks.css'

/* How it works on Home (#how). James's loop of 21 Nov (set up once; something happens; it's saved in your event log; it
   reaches your agent or a person; whatever the agent does next is a new event), redrawn on 22 Nov so any reader, and each
   buyer, sees it work: one real-looking example per buyer plays through the three stops. An event card arrives at
   "Something happens", travels the wire into the log as a dated row, travels on and lights the place it reaches (the
   agent on our runtime, on your servers, or a person), shows what happens there, and, when an agent acts, comes back
   round the return path as the next row in the log. The tabs pick the buyer: support and sales, QA and product, teams
   without engineers. Live call audio is the figure's caption.

   Motion explains the order of things and nothing else. The tour plays only in view, moves to the next buyer every 7.5 s,
   and stops on Pause or after a tab the reader picks. Under prefers-reduced-motion nothing moves and nothing advances by
   itself: each example shows whole, and the tabs still switch. Before the page's script runs, the first example shows
   whole and every word is in the page. Words: content/pages/home.ts (homeHow). */

type Step = 0 | 1 | 2 | 3 | 4
const AT: number[] = [0, 800, 1800, 2700, 3700]
const CYCLE = 7500

const Chev = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M6 3.5 10.5 8 6 12.5" />
  </svg>
)

const PlaceIcon = ({ id }: { id: 'runtime' | 'servers' | 'person' }) => (
  <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    {id === 'runtime' && <path d="M8.8 1.8 3.5 9h4l-.8 5.2L12.5 7h-4l.3-5.2Z" />}
    {id === 'servers' && (
      <>
        <rect x="2.5" y="2.5" width="11" height="4.5" rx="1.2" />
        <rect x="2.5" y="9" width="11" height="4.5" rx="1.2" />
        <path d="M5 4.75h.01M5 11.25h.01" />
      </>
    )}
    {id === 'person' && (
      <>
        <circle cx="8" cy="5.5" r="2.6" />
        <path d="M3 13.5c.7-2.6 2.7-4 5-4s4.3 1.4 5 4" />
      </>
    )}
  </svg>
)

export function HomeHowItWorks({ how, id }: { how: HomeHow; id?: string }) {
  const hid = useId()
  const L = how.loop
  const root = useRef<HTMLDivElement>(null)
  const [ex, setEx] = useState(0)
  const [step, setStep] = useState<Step>(4)
  const [motion, setMotion] = useState(false)
  const [visible, setVisible] = useState(false)
  const [stopped, setStopped] = useState(false)
  const elapsed = useRef(0)
  const advance = useRef(true)

  /* Motion only when the reader allows it; then the first example starts from its arrival. */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const set = () => {
      setMotion(!mq.matches)
      setStep(mq.matches ? 4 : 0)
      elapsed.current = 0
    }
    set()
    mq.addEventListener('change', set)
    return () => mq.removeEventListener('change', set)
  }, [])

  /* Plays only while the figure is on screen and the tab is in front. */
  useEffect(() => {
    const el = root.current
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    let onScreen = false
    const update = () => setVisible(onScreen && document.visibilityState === 'visible')
    const io = new IntersectionObserver(([e]) => {
      onScreen = e.isIntersecting
      update()
    }, { threshold: 0.35 })
    io.observe(el)
    document.addEventListener('visibilitychange', update)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', update)
    }
  }, [])

  const running = motion && visible && !stopped

  /* One clock: the step comes from the time spent on the example. */
  useEffect(() => {
    if (!running) return
    let raf = 0
    let last: number | null = null
    const tick = (t: number) => {
      if (last != null) elapsed.current += t - last
      last = t
      const e = elapsed.current
      let s: Step = 0
      for (let i = AT.length - 1; i >= 0; i--) if (e >= AT[i]) { s = i as Step; break }
      setStep(s)
      if (e >= CYCLE) {
        if (!advance.current) {
          elapsed.current = CYCLE
          setStopped(true)
          return
        }
        elapsed.current = 0
        setStep(0)
        setEx((x) => (x + 1) % L.examples.length)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [running, L.examples.length])

  /* A buyer the reader picks plays from the start, then holds; Play resumes the tour. */
  const pick = (i: number) => {
    setEx(i)
    elapsed.current = 0
    if (motion) {
      advance.current = false
      setStep(0)
      setStopped(false)
    }
  }
  const toggle = () => {
    if (stopped) {
      advance.current = true
      if (elapsed.current >= CYCLE) {
        elapsed.current = 0
        setStep(0)
        setEx((x) => (x + 1) % L.examples.length)
      }
      setStopped(false)
    } else setStopped(true)
  }

  const e = L.examples[ex]
  const reached = step >= 2
  const from = (n: number) => ({ 'data-from': n }) as Record<string, number>

  return (
    <section className="s-section h-how" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head h-how__head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {how.heading}
          </h2>
          <p className="s-bp-line">{how.line}</p>
        </div>

        <figure className="h-how__fig" aria-describedby={`${hid}-d`}>
          <p className="sr-only" id={`${hid}-d`}>
            {L.label}
          </p>

          <div className="h-how__bar">
            <p className="h-how__setup">
              <span className="h-how__n" aria-hidden="true">
                0
              </span>
              <b>{L.setup.name}</b>
              <span>{L.setup.line}</span>
            </p>
            <div className="h-how__who" role="group" aria-label={L.examplesLabel}>
              <span className="h-how__who-label" aria-hidden="true">
                {L.examplesLabel}
              </span>
              {L.examples.map((x, i) => (
                <button key={x.who} type="button" className="h-how__tab" aria-pressed={i === ex} onClick={() => pick(i)}>
                  {x.who}
                </button>
              ))}
              {motion && (
                <button type="button" className="h-how__play" onClick={toggle} aria-label={stopped ? L.play : L.pause}>
                  <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                    {stopped ? <path d="M5 3.5v9l7-4.5z" /> : <path d="M5.5 3.5v9M10.5 3.5v9" />}
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div
            ref={root}
            className={'h-how__stage' + (running ? ' is-running' : '') + (motion ? ' has-motion' : '') + (e.out ? ' has-out' : '')}
            data-step={step}
          >
            {/* 1 · Something happens */}
            <div className="h-how__col h-how__col--in">
              <p className="h-how__station">
                <span className="h-how__n">1</span>
                <b>{L.happens.name}</b>
              </p>
              <p className="h-how__station-line">{L.happens.line}</p>
              <div className="h-how__card h-how__card--in" {...from(0)}>
                <span className="h-how__from">{e.from}</span>
                <span className="h-how__text">{e.in.text}</span>
                <span className="h-how__kind">{e.in.kind}</span>
              </div>
            </div>

            <div className="h-how__wire h-how__wire--a" aria-hidden="true">
              <span className="h-how__verb">{L.saved}</span>
              <span className="h-how__line">
                <i className="h-how__dot" />
              </span>
            </div>

            {/* 2 · Your event log */}
            <div className="h-how__col h-how__col--log">
              <p className="h-how__station">
                <span className="h-how__n">2</span>
                <b>{L.log.name}</b>
              </p>
              <p className="h-how__station-line">{L.log.line}</p>
              <ol className="h-how__log">
                {L.log.rows.map((r) => (
                  <li key={r.at} className="h-how__row h-how__row--old">
                    <span className="h-how__at">{r.at}</span>
                    <span className="h-how__ev">{r.kind}</span>
                    <span className="h-how__txt">{r.text}</span>
                  </li>
                ))}
                <li className="h-how__row h-how__row--new" {...from(1)}>
                  <span className="h-how__at">{e.in.at}</span>
                  <span className="h-how__ev">{e.in.kind}</span>
                  <span className="h-how__txt">{e.in.text}</span>
                </li>
                {e.out && (
                  <li className="h-how__row h-how__row--new h-how__row--next" {...from(4)}>
                    <span className="h-how__at">{e.out.at}</span>
                    <span className="h-how__ev">{e.out.kind}</span>
                    <span className="h-how__txt">{e.out.text}</span>
                  </li>
                )}
              </ol>
            </div>

            <div className="h-how__wire h-how__wire--b" aria-hidden="true">
              <span className="h-how__verb">{L.sent}</span>
              <span className="h-how__line">
                <i className="h-how__dot" />
              </span>
            </div>

            {/* 3 · Reaches your agent, or your team */}
            <div className="h-how__col h-how__col--reach">
              <p className="h-how__station">
                <span className="h-how__n">3</span>
                <b>{L.reach.name}</b>
              </p>
              <p className="h-how__station-line">{L.reach.line}</p>
              <ul className="h-how__places">
                {L.places.map((pl) => (
                  <li key={pl.id} className={'h-how__place' + (reached && pl.id === e.place ? ' is-on' : '')}>
                    <span className="h-how__place-ic">
                      <PlaceIcon id={pl.id} />
                    </span>
                    <span className="h-how__place-words">
                      <b>{pl.name}</b>
                      <span>{pl.line}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="h-how__card h-how__card--does" {...from(3)}>
                <svg className="h-how__does-ic" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                  <path d="M3.5 8.5l3 3 6-7" />
                </svg>
                {e.does}
              </div>
            </div>

            {/* The way back: what the agent does next is a new event. */}
            <div className="h-how__return" aria-hidden="true">
              <span className="h-how__arc">
                <i className="h-how__dot h-how__dot--back" />
              </span>
              <span className="h-how__next">{L.next}</span>
            </div>
          </div>

          <figcaption className="h-how__audio">
            <svg viewBox="0 0 24 12" aria-hidden="true" focusable="false">
              <path d="M1 6c1.5-4 3-4 4.5 0s3 4 4.5 0 3-4 4.5 0 3 4 4.5 0 3-4 4 0" />
            </svg>
            {L.audio}
          </figcaption>
        </figure>

        <Link className="h-how__more" to={how.link.to}>
          {how.link.label}
          <Chev className="h-how__chev" />
        </Link>
      </div>
    </section>
  )
}
