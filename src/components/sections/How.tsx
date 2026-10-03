import { useEffect, useId, useRef, useState, useSyncExternalStore, type FocusEvent, type KeyboardEvent } from 'react'
import type { PartnerId } from '../../content/partners'
import type { How as HowContent } from '../../content/types'
import { AppScreen, type Workspace } from '../AppScreen'
import { PartnerRow } from '../PartnerMark'
import './How.css'

/* How it works: 1 flow in 4 steps (docs/REBUILD.md 1b and 2), every page's second beat.
   - 1080px and wider: a step rail beside 1 large app screen. The rail is a vertical tab list; the screen crossfades to
     the active step's screen and plays its story. Like the system's auto-advancing tabs (navigation.css .ob-utabs--auto):
     each step fills its progress line over --ob-autoplay-dwell, 1 pass, then it rests on the last step. Hover, focus on
     a step, scrolling away or a hidden tab holds it; picking a step or Pause stops it, and the toggle then reads Play.
     1 clock drives both: the step's timer keeps what is left of the dwell while held, and the line pauses with it.
     Reduced motion never starts it. Arrows, Home and End move between steps.
   - Narrower: the steps stack, each with its own screen under it, every line and chip showing.
   Both layouts are in the markup and CSS shows 1, so the layout never waits for script.
   `partners` (a reader's own tools, content/partners.ts) sit as 1 quiet line of marks under the last step, the one that
   says where the results land; under 2 that can be drawn, the line is left out. */

/* True once the page's script runs (false on the server and while hydrating) and the reader allows motion. */
const REDUCE = '(prefers-reduced-motion: reduce)'
const onReduce = (cb: () => void) => {
  const m = matchMedia(REDUCE)
  m.addEventListener('change', cb)
  return () => m.removeEventListener('change', cb)
}
const useMotionOk = () => useSyncExternalStore(onReduce, () => !matchMedia(REDUCE).matches, () => false)

type Props = {
  how: HowContent
  /* Whose workspace the screens show (components/AppScreen): Home and Agencies keep 'agency'; the other pages pass 'company'. */
  workspace?: Workspace
  /* The reader's tools, shown under the last step. */
  partners?: PartnerId[]
  id?: string
}

/* The list's name for assistive tech; the step's own words already say where the results go. */
const LANDS = 'Results land in'

const STEP_KEYS: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }

/* The pause control's words: a visible label, so it reads as a control, never a stray mark under the rail. */
const UI = { pause: 'Pause', play: 'Play', what: ' the steps' }

/* A time token in ms. The build minifies times ("7000ms" ships as "7s"), so read the unit. */
function tokenMs(name: string, fallback: number) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  const m = raw.match(/^(-?\d*\.?\d+)(ms|s)$/)
  return m ? parseFloat(m[1]) * (m[2] === 's' ? 1000 : 1) : fallback
}

export function How({ how, workspace = 'agency', partners, id }: Props) {
  const uid = useId()
  const steps = how.steps
  const last = steps.length - 1
  const motionOk = useMotionOk()

  const [active, setActive] = useState(0)
  /* The 1 pass is still to run. False once the reader picks a step or pauses, or when the pass reaches the last step. */
  const [auto, setAuto] = useState(true)
  const [inView, setInView] = useState(false)
  const [hover, setHover] = useState(false)
  const [focused, setFocused] = useState(false)
  const [docHidden, setDocHidden] = useState(false)
  /* Bumped each time a step opens, so its screen plays its story again; `cycle` restarts the progress line on Play. */
  const [plays, setPlays] = useState(0)
  const [cycle, setCycle] = useState(0)

  const bodyRef = useRef<HTMLDivElement>(null)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const el = bodyRef.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const sync = () => setDocHidden(document.hidden)
    document.addEventListener('visibilitychange', sync)
    return () => document.removeEventListener('visibilitychange', sync)
  }, [])

  const running = motionOk && auto
  const held = !inView || hover || focused || docHidden

  const open = (i: number) => {
    setActive(i)
    setPlays((p) => p + 1)
  }

  /* The reader picked a step: it opens and stays. */
  const pick = (i: number) => {
    setAuto(false)
    if (i !== active) open(i)
  }

  /* The dwell clock for the open step. It counts only while the line runs, so a hold keeps what is left. */
  const clock = useRef({ key: '', left: 0 })
  useEffect(() => {
    if (!running || held) return
    const key = `${active}-${cycle}`
    if (clock.current.key !== key) clock.current = { key, left: tokenMs('--ob-autoplay-dwell', 7000) }
    const from = performance.now()
    let fired = false
    const t = window.setTimeout(() => {
      fired = true
      if (active < last) open(active + 1)
      else setAuto(false)
    }, clock.current.left)
    return () => {
      window.clearTimeout(t)
      if (!fired) clock.current.left = Math.max(0, clock.current.left - (performance.now() - from))
    }
  }, [running, held, active, cycle, last])

  const toggle = () => {
    if (auto) {
      setAuto(false)
      return
    }
    if (active === last) open(0)
    setCycle((c) => c + 1)
    setAuto(true)
  }

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const from = tabs.current.indexOf(e.target as HTMLButtonElement)
    if (from < 0) return
    let to: number
    if (e.key in STEP_KEYS) to = (from + STEP_KEYS[e.key] + steps.length) % steps.length
    else if (e.key === 'Home') to = 0
    else if (e.key === 'End') to = last
    else return
    e.preventDefault()
    pick(to)
    tabs.current[to]?.focus()
  }

  /* Focus on a step holds the line; focus on the Play toggle does not, so Play answers at once. */
  const onFocusIn = () => setFocused(true)
  const onFocusOut = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false)
  }

  const headId = `${uid}-h`
  const tabId = (i: number) => `${uid}-tab-${i}`
  const panelId = (i: number) => `${uid}-panel-${i}`

  return (
    <section className="s-section s-how" id={id} aria-labelledby={headId}>
      <div className="s-wrap">
        <header className="s-head s-how-head">
          <h2 id={headId} className="ob-type-h2">
            {how.heading}
          </h2>
          {how.sub && <p className="ob-type-body-lg">{how.sub}</p>}
        </header>

        <div className="s-how-body" ref={bodyRef}>
          <div className="s-how-side">
            <div
              className="s-how-rail"
              role="tablist"
              aria-orientation="vertical"
              aria-labelledby={headId}
              onKeyDown={onKey}
              onPointerEnter={() => setHover(true)}
              onPointerLeave={() => setHover(false)}
              onFocus={onFocusIn}
              onBlur={onFocusOut}
            >
              {steps.map((s, i) => {
                const on = i === active
                return (
                  <button
                    key={i}
                    ref={(el) => {
                      tabs.current[i] = el
                    }}
                    type="button"
                    role="tab"
                    id={tabId(i)}
                    aria-selected={on}
                    aria-controls={panelId(i)}
                    aria-labelledby={`${uid}-t${i}`}
                    aria-describedby={`${uid}-l${i}`}
                    tabIndex={on ? 0 : -1}
                    className={'s-how-tab' + (on ? ' is-on' : '')}
                    onClick={() => pick(i)}
                  >
                    <span className="s-how-track" aria-hidden="true">
                      {on && (
                        <i
                          key={`${active}-${cycle}`}
                          className={'s-how-fill' + (running ? ' is-running' : '') + (running && held ? ' is-held' : '')}
                        />
                      )}
                    </span>
                    <span className="s-how-num ob-num" aria-hidden="true">
                      {i + 1}
                    </span>
                    <span className="s-how-title" id={`${uid}-t${i}`}>
                      {s.title}
                    </span>
                    <span className={'s-how-more ob-anim-expand' + (on ? ' is-open' : '')}>
                      <span>
                        <span className="s-how-line" id={`${uid}-l${i}`}>
                          {s.line}
                        </span>
                        {s.chips && s.chips.length > 0 && (
                          <span className="s-how-chips">
                            {s.chips.map((c) => (
                              <span key={c} className="ob-tag">
                                {c}
                              </span>
                            ))}
                          </span>
                        )}
                        {i === last && <PartnerRow ids={partners} label={LANDS} min={2} inline className="s-how-lands" />}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>

            {motionOk && (
              <button type="button" className="ob-btn ob-btn--ghost ob-btn--sm s-how-toggle" onClick={toggle}>
                <svg className="ob-btn-glyph" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                  {auto ? <path d="M6 4v8M10 4v8" /> : <path d="M5.5 3.8v8.4L12 8z" />}
                </svg>
                <span className="ob-btn-label">
                  {auto ? UI.pause : UI.play}
                  <span className="s-sr">{UI.what}</span>
                </span>
              </button>
            )}
          </div>

          <div
            className="s-how-stage"
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
            onFocus={onFocusIn}
            onBlur={onFocusOut}
          >
            {steps.map((s, i) => {
              const on = i === active
              return (
                <div
                  key={i}
                  role="tabpanel"
                  id={panelId(i)}
                  aria-labelledby={tabId(i)}
                  className={'s-how-panel' + (on ? ' is-on' : '')}
                  tabIndex={on ? 0 : -1}
                  inert={!on}
                >
                  <AppScreen name={s.screen} workspace={workspace} playKey={on ? plays : undefined} />
                </div>
              )
            })}
          </div>
        </div>

        <ol className="s-how-list">
          {steps.map((s, i) => (
            <li key={i} className="s-how-item">
              <div className="s-how-copy">
                <span className="s-how-num ob-num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="s-how-title">{s.title}</h3>
                <p className="s-how-line">{s.line}</p>
                {s.chips && s.chips.length > 0 && (
                  <ul className="s-how-chips">
                    {s.chips.map((c) => (
                      <li key={c} className="ob-tag">
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
                {i === last && <PartnerRow ids={partners} label={LANDS} min={2} className="s-how-lands" />}
              </div>
              <AppScreen name={s.screen} workspace={workspace} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
