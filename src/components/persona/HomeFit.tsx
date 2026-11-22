import { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { HomeFit as Words, HomeFitRow } from '../../content/types'
import './HomeFit.css'

/* Home's day one (#act, 22 Nov 2026): one example agent's morning, played out. Six tabs, one per thing an AI agent needs
   to do; beside them a product window where the agent first gets stuck on its own, then the Obsession piece solves it,
   then the event lands in its log. The last tab shows every event in one log. Under the window, the two outcomes in
   words and a link to the piece.

   Motion explains the change ("stuck, then solved, then logged") and nothing else. It plays only in view, advances
   every 7 s, and stops on Pause or after a scene the reader picked. Under prefers-reduced-motion nothing moves: each
   scene shows its solved state, and the tabs still switch. Before the page's script runs (the prerender, crawlers,
   no-script readers) every panel's words are in the page and the first scene shows solved. Words:
   content/pages/home.ts (homeFit). */

type Phase = 'stuck' | 'solve' | 'land'
const STEP = 7000
const SOLVE_AT = 1900
const LAND_AT = 3900

const Chev = () => (
  <svg className="h-act__chev" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M6 3.5 10.5 8 6 12.5" />
  </svg>
)
const No = () => (
  <svg className="h-act__mark" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M5 5l6 6M11 5l-6 6" />
  </svg>
)
const Yes = () => (
  <svg className="h-act__mark" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M3.5 8.5l3 3 6-7" />
  </svg>
)

/* An element shown in one phase of a scene: "stuck" only while stuck, "solve" from the solve on (in order, by --d),
   "land" once the event lands. */
function Show({ on, d = 0, className = '', children }: { on: Phase; d?: number; className?: string; children: ReactNode }) {
  return (
    <div className={className} data-show={on} style={{ ['--d' as string]: `${d}ms` } as CSSProperties}>
      {children}
    </div>
  )
}

function Scene({ row, rows, log }: { row: HomeFitRow; rows: HomeFitRow[]; log: string }) {
  const w = row.scene.words
  switch (row.scene.kind) {
    case 'code':
      return (
        <div className="h-act__code">
          <Show on="solve" className="h-act__toast">
            <span className="h-act__toast-ic" aria-hidden="true">@</span>
            <span>
              <b>{w.from}</b> {w.subject}
            </span>
          </Show>
          <div className="h-act__card">
            <p className="h-act__prompt">{w.prompt}</p>
            <div className="h-act__boxes">
              {w.code.split('').map((c, i) => (
                <span className="h-act__box" key={i}>
                  <Show on="solve" d={450 + i * 110} className="h-act__digit">
                    {c}
                  </Show>
                </span>
              ))}
            </div>
            <div className="h-act__slot">
              <Show on="stuck" className="h-act__note h-act__note--no">
                <No /> {w.nowhere}
              </Show>
              <Show on="solve" d={1250} className="h-act__note h-act__note--yes">
                <Yes /> {w.done}
              </Show>
            </div>
          </div>
        </div>
      )
    case 'call':
      return (
        <div className="h-act__call">
          <div className="h-act__caller">
            <span className="h-act__ring" aria-hidden="true">
              <svg viewBox="0 0 16 16" focusable="false">
                <path d="M4.5 2.5h2l1 3-1.5 1a7 7 0 0 0 3.5 3.5l1-1.5 3 1v2a1.5 1.5 0 0 1-1.5 1.5A10.5 10.5 0 0 1 3 4a1.5 1.5 0 0 1 1.5-1.5Z" />
              </svg>
            </span>
            <span>
              <b>{w.ringing}</b>
              <span className="h-act__sub">{w.caller}</span>
            </span>
          </div>
          <div className="h-act__slot">
            <Show on="stuck" className="h-act__note h-act__note--no">
              <No /> {w.nowhere}
            </Show>
            <Show on="solve" className="h-act__live">
              <span className="h-act__pill h-act__pill--yes">
                <Yes /> {w.connected}
              </span>
              <span className="h-act__wave" aria-hidden="true">
                {Array.from({ length: 14 }, (_, i) => (
                  <i key={i} style={{ ['--k' as string]: i, ['--h' as string]: `${6 + ((i * 7) % 16)}px` } as CSSProperties} />
                ))}
              </span>
            </Show>
          </div>
          <Show on="solve" d={500} className="h-act__bubble">
            {w.said}
          </Show>
          <Show on="solve" d={1200} className="h-act__bubble h-act__bubble--me">
            {w.reply}
          </Show>
        </div>
      )
    case 'chat':
      return (
        <div className="h-act__chat">
          <div className="h-act__bubble">
            <span className="h-act__who">{w.who}</span>
            {w.asked}
          </div>
          <div className="h-act__slot">
            <Show on="stuck" className="h-act__note h-act__note--no">
              <No /> {w.nowhere}
            </Show>
            <Show on="solve" className="h-act__bubble h-act__bubble--me">
              <span className="h-act__who">{w.me}</span>
              {w.reply}
            </Show>
          </div>
          <Show on="solve" d={900} className="h-act__apps">
            {w.apps.split('|').map((a) => (
              <span className="h-act__app" key={a}>
                {a}
              </span>
            ))}
            <span className="h-act__sub">{w.same}</span>
          </Show>
        </div>
      )
    case 'portal':
      return (
        <div className="h-act__portal">
          <div className="h-act__url">
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <rect x="4" y="7" width="8" height="6" rx="1.2" />
              <path d="M5.8 7V5.4a2.2 2.2 0 0 1 4.4 0V7" />
            </svg>
            {row.scene.title}
          </div>
          <div className="h-act__slot h-act__slot--tall">
            <Show on="stuck" className="h-act__login">
              <span className="h-act__note h-act__note--no">
                <No /> {w.expired}
              </span>
              <span className="h-act__field" />
              <span className="h-act__field" />
              <span className="h-act__btn" />
            </Show>
            <Show on="solve" className="h-act__dash">
              <span className="h-act__pill h-act__pill--yes">
                <Yes /> {w.kept}
              </span>
              {[w.row1, w.row2, w.row3].map((r, i) => (
                <Show on="solve" d={350 + i * 160} className="h-act__trow" key={r}>
                  {r}
                </Show>
              ))}
            </Show>
          </div>
        </div>
      )
    case 'sandbox':
      return (
        <div className="h-act__term">
          <p className="h-act__cmd">
            <span aria-hidden="true">$</span> {w.cmd}
          </p>
          <div className="h-act__slot">
            <Show on="stuck" className="h-act__note h-act__note--no">
              <No /> {w.nowhere}
            </Show>
            <div className="h-act__out">
              <Show on="solve" d={200}>{w.out1}</Show>
              <Show on="solve" d={650}>{w.out2}</Show>
              <Show on="solve" d={1150} className="h-act__ok">
                <Yes /> {w.done}
              </Show>
            </div>
          </div>
        </div>
      )
    case 'log': {
      const events = rows.filter((r) => r.event)
      return (
        <div className="h-act__logscene">
          <div className="h-act__slot h-act__slot--tall">
            <Show on="stuck" className="h-act__vendors">
              {w.vendors.split('|').map((v) => (
                <span className="h-act__vendor" key={v}>
                  {v}
                </span>
              ))}
              <span className="h-act__note h-act__note--no">
                <No /> {w.nowhere}
              </span>
            </Show>
            <Show on="solve" className="h-act__fulllog">
              <span className="h-act__loghead">{log}</span>
              {events.map((r, i) => (
                <Show on="solve" d={200 + i * 180} className="h-act__ev" key={r.event!.name}>
                  <span className="h-act__at">{r.event!.at}</span>
                  <span className="h-act__name">{r.event!.name}</span>
                  <span className="h-act__txt">{r.event!.text}</span>
                </Show>
              ))}
              <Show on="solve" d={200 + events.length * 180} className="h-act__note h-act__note--yes">
                <Yes /> {w.summary}
              </Show>
            </Show>
          </div>
        </div>
      )
    }
  }
}

export function HomeFit({ fit, id }: { fit: Words; id?: string }) {
  const uid = useId()
  const rows = fit.rows
  const root = useRef<HTMLDivElement>(null)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const [step, setStep] = useState(0)
  const [phase, setPhase] = useState<Phase>('land')
  const [motion, setMotion] = useState(false)
  const [visible, setVisible] = useState(false)
  const [stopped, setStopped] = useState(false)
  const elapsed = useRef(0)
  const advance = useRef(true)

  /* Motion only when the reader allows it; then the first scene starts from "stuck". */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const set = () => {
      setMotion(!mq.matches)
      setPhase(mq.matches ? 'land' : 'stuck')
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

  /* One clock: the phase comes from the time spent on the scene; the active tab's bar reads --p. */
  useEffect(() => {
    if (!running) return
    let raf = 0
    let last: number | null = null
    const tick = (t: number) => {
      if (last != null) elapsed.current += t - last
      last = t
      const e = elapsed.current
      setPhase(e < SOLVE_AT ? 'stuck' : e < LAND_AT ? 'solve' : 'land')
      root.current?.style.setProperty('--p', String(Math.min(e / STEP, 1)))
      if (e >= STEP) {
        if (!advance.current) {
          elapsed.current = STEP
          setStopped(true)
          return
        }
        elapsed.current = 0
        setPhase('stuck')
        setStep((s) => (s + 1) % rows.length)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [running, rows.length])

  /* A tab the reader picks plays its scene from the start, then holds; Play resumes the tour. */
  const pick = (i: number) => {
    setStep(i)
    elapsed.current = 0
    root.current?.style.setProperty('--p', '0')
    if (motion) {
      advance.current = false
      setPhase('stuck')
      setStopped(false)
    }
  }
  const toggle = () => {
    if (stopped) {
      advance.current = true
      if (elapsed.current >= STEP) {
        elapsed.current = 0
        setStep((s) => (s + 1) % rows.length)
      }
      setStopped(false)
    } else {
      setStopped(true)
    }
  }
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }
    let next: number | null = null
    if (e.key in keys) next = (step + keys[e.key] + rows.length) % rows.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = rows.length - 1
    if (next == null) return
    e.preventDefault()
    pick(next)
    tabs.current[next]?.focus()
  }

  return (
    <section className="s-section h-act" id={id} aria-labelledby={`${uid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head h-act__head">
          <h2 className="s-bp-h" id={`${uid}-h`}>
            {fit.heading}
          </h2>
          <p className="s-bp-line">{fit.line}</p>
        </div>

        <figure className="h-act__fig">
          <div
            ref={root}
            className={'h-act__stage' + (running ? ' is-running' : '') + (motion ? ' has-motion' : '')}
            data-armed={motion ? '' : undefined}
          >
            <div className="h-act__side">
              <div className="h-act__tabs" role="tablist" aria-label={fit.ui.tabs} aria-orientation="vertical" onKeyDown={onKey}>
                {rows.map((r, i) => (
                  <button
                    key={r.need}
                    ref={(el) => {
                      tabs.current[i] = el
                    }}
                    type="button"
                    role="tab"
                    id={`${uid}-t${i}`}
                    aria-selected={i === step}
                    aria-controls={`${uid}-p${i}`}
                    tabIndex={i === step ? 0 : -1}
                    className={'h-act__tab' + (i === step ? ' is-on' : '')}
                    onClick={() => pick(i)}
                  >
                    <span className="h-act__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="h-act__need">{r.need}</span>
                    <span className="h-act__piece">{r.piece.label}</span>
                    <span className="h-act__bar" aria-hidden="true" />
                  </button>
                ))}
              </div>
              {motion && (
                <button type="button" className="h-act__play" onClick={toggle}>
                  {stopped ? (
                    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                      <path d="M5 3.5v9l7-4.5z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                      <path d="M5.5 3.5v9M10.5 3.5v9" />
                    </svg>
                  )}
                  {stopped ? fit.ui.play : fit.ui.pause}
                </button>
              )}
            </div>

            {rows.map((r, i) => (
              <div
                key={r.need}
                role="tabpanel"
                id={`${uid}-p${i}`}
                aria-labelledby={`${uid}-t${i}`}
                hidden={i !== step}
                className="h-act__panel"
                data-phase={i === step ? phase : 'land'}
              >
                <div className="h-act__win" aria-hidden="true">
                  <div className="h-act__winbar">
                    <span className="h-act__dots">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="h-act__title">{r.scene.title}</span>
                    <span className="h-act__agent">
                      <b>{fit.agent.name}</b> {fit.agent.role}
                    </span>
                  </div>
                  <div className={`h-act__scene h-act__scene--${r.scene.kind}`}>
                    <Scene row={r} rows={rows} log={fit.ui.log} />
                  </div>
                  {r.event && (
                    <Show on="land" className="h-act__event">
                      <span className="h-act__dot" />
                      <span className="h-act__at">{r.event.at}</span>
                      <span className="h-act__name">{r.event.name}</span>
                      <span className="h-act__txt">{r.event.text}</span>
                    </Show>
                  )}
                </div>
                <div className="h-act__verdict">
                  <p className="h-act__v h-act__v--no">
                    <No />
                    <span>
                      <b>{fit.ui.stuck}:</b> {r.without}
                    </span>
                  </p>
                  <p className="h-act__v h-act__v--yes">
                    <Yes />
                    <span>
                      <b>{fit.ui.solved}:</b> {r.with}
                    </span>
                  </p>
                  <Link className="h-act__open" to={r.piece.to}>
                    {`${fit.ui.open} ${r.piece.label}`}
                    <Chev />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <figcaption className="h-act__cap">{fit.caption}</figcaption>
        </figure>

        <a className="s-bp-link h-act__more" href={fit.link.to}>
          {fit.link.label}
        </a>
      </div>
    </section>
  )
}
