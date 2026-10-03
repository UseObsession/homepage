import { memo, useCallback, useEffect, useId, useMemo, useRef, useState, type CSSProperties, type FocusEvent, type KeyboardEvent, type PointerEvent } from 'react'
import { recipeGroups } from '../../content/nav'
import { RM, useReducedMotion, useTabRail } from '../../hooks/useConsole'
import type { Demo } from '../../content/types'
import { StatusMark, type Status } from '../Logo'
import { TypedText } from './Typed'
import './Console.css'

/* The hero console (docs/REBUILD.md 1c, 2 and 5): what Obsession can do, as example runs in 1 product window.
   - 1 row of equal tabs (the design system's .ob-ptabs scenario row), then the window (.ob-window): the crumb,
     the task, the plan (targets, journey, how often, report), the set up as kit chips, the run log, the finding with
     the fix, and the ledger line.
   - A run plays its story: the kit chips tick in, events land 1 by 1, the finding rises, the fix and the ledger
     follow. A typed task ("Your own task") types itself in first, then the plan appears: a recipe comes with its
     plan already set up, a typed task has the system set it up.
   - The ring marks carry the status, never colour, and only 1 moves at a time: the bar's mark turns while the run
     works (working) and blinks once it waits for the next run (waiting); the fix shows needs you and the ledger line
     landed, both still. The log is a list of rules with the time beside each event: no bullet marks. The square stays
     only on the Finding's head.
   - It moves through the tabs by itself, once, then rests on the last. Hover or focus holds it; a click, a key or
     the pause button stops it for good, and the reader's choice stays. It waits while off screen or in a hidden tab.
   - The prerendered HTML is the first run, finished: legible with no script. Reduced motion keeps every run finished
     and never advances on its own.
   - Every run's panel is in the page at once, stacked in 1 cell (only the chosen one shown), so the window is
     always as tall as its tallest run and nothing below it moves when the tab changes. On a phone, where the runs
     stack and differ most, only the chosen run takes room and its log grows as each event lands (Console.css). */

const RECIPES: Record<string, string> = Object.fromEntries(recipeGroups.flatMap((g) => g.items.map((r) => [r.id, r.label])))

/* The console's chrome, in the app screens' own words (src/screens). */
const UI = {
  workspace: { agency: 'Your agency', company: 'Your company' },
  missions: 'Missions',
  ownTask: 'Your own task',
  example: 'Example',
  rows: { targets: 'Targets', journey: 'Journey', schedule: 'How often', report: 'Report', kit: 'Set up' },
  log: 'Run log',
  finding: 'Finding',
  status: { setup: 'Setting up', working: 'Working', waiting: 'Waiting' },
  steps: (n: number, of: number) => `${n} of ${of}`,
  pause: 'Pause the example runs',
}

/* Waits, in ms, between the beats of a run: calm enough to read each event as it lands. */
const WAIT = { start: 360, kit: 220, firstEvent: 640, event: 1000, finding: 900, after: 420, send: 520, firstKey: 480 }
/* A hydration this early is before the console has faded in (the hero's stagger), so the first run can play from the
   start without the finished run flashing first. */
const FRESH_MS = 450
const DWELL_FALLBACK = 7000


/* The agent's typing rhythm, at the quick end of motion.css's 20 to 42ms a key: a whole task types in about 3 seconds.
   A little longer after a space or a comma. */
const keyWait = (ch: string, i: number) => {
  const base = 20 + ((i * 7) % 11)
  return ch === ',' ? base + 90 : ch === ' ' ? base + 12 : base
}

type Kind = 'type' | 'send' | 'kit' | 'event' | 'finding' | 'fix' | 'ledger'
type Beat = { kind: Kind; wait: number }

function beatsOf(d: Demo): Beat[] {
  const b: Beat[] = []
  if (d.recipe === 'task') {
    for (let i = 0; i < d.task.length; i++) b.push({ kind: 'type', wait: i === 0 ? WAIT.firstKey : keyWait(d.task[i - 1], i) })
    b.push({ kind: 'send', wait: WAIT.send })
  }
  d.kit.forEach((_, i) => b.push({ kind: 'kit', wait: i === 0 ? WAIT.start : WAIT.kit }))
  d.events.forEach((_, i) => b.push({ kind: 'event', wait: i === 0 ? WAIT.firstEvent : WAIT.event }))
  b.push({ kind: 'finding', wait: WAIT.finding }, { kind: 'fix', wait: WAIT.after }, { kind: 'ledger', wait: WAIT.after })
  return b
}

type View = { typed: number; sent: boolean; kit: number; events: number; finding: boolean; fix: boolean; ledger: boolean; done: boolean; progress: number }

function viewOf(d: Demo, beats: Beat[], p: number): View {
  const v: View = { typed: 0, sent: d.recipe !== 'task', kit: 0, events: 0, finding: false, fix: false, ledger: false, done: p >= beats.length, progress: 0 }
  let keys = 0
  for (let i = 0; i < beats.length; i++) {
    const k = beats[i].kind
    if (k === 'type') keys++
    if (i >= p) continue
    if (k === 'type') v.typed++
    else if (k === 'send') v.sent = true
    else if (k === 'kit') v.kit++
    else if (k === 'event') v.events++
    else v[k] = true
  }
  if (d.recipe !== 'task') v.typed = d.task.length
  /* The progress line counts the run, not the keys typed before it. */
  const runBeats = beats.length - keys - (d.recipe === 'task' ? 1 : 0)
  const runDone = Math.max(0, p - keys - (d.recipe === 'task' ? 1 : 0))
  v.progress = runBeats > 0 ? runDone / runBeats : 1
  return v
}

/* A ring mark held on its still frame: every mark but the 1 that moves (brand.css, "1 mark moves per view"). */
function StillMark({ state, size }: { state: Status; size: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const svg = ref.current?.querySelector('svg')
    if (!svg) return
    svg.pauseAnimations()
    svg.setCurrentTime(0)
  })
  return (
    <span className="s-console-mark" ref={ref} aria-hidden="true">
      <StatusMark state={state} size={size} />
    </span>
  )
}

function Tick() {
  return (
    <span className="ob-kit__tick">
      <svg viewBox="0 0 8 8" aria-hidden="true" focusable="false">
        <path d="M1.2 4.3l1.8 1.8 3.8-4.2" pathLength="1" />
      </svg>
    </span>
  )
}

type Workspace = 'agency' | 'company'

/* A run's panel. Memoised: while a run plays, only its own panel renders again; the others rest. */
const Panel = memo(function Panel({
  d,
  view,
  live,
  id,
  tabId,
  active,
  single,
}: {
  d: Demo
  view: View
  live: boolean
  id: string
  tabId: string
  active: boolean
  single: boolean
}) {
  const isTask = d.recipe === 'task'
  const typing = isTask && !view.sent
  const enter = (on: boolean, slow = false) => (on ? ' is-in' + (live ? ' ob-anim-rise' + (slow ? ' is-slow' : '') : '') : '')
  /* 1 run alone has no tabs: its panel is a plain part of the window, named by the label above it. */
  const tabbed = single ? { role: 'group', 'aria-labelledby': tabId } : { role: 'tabpanel', 'aria-labelledby': tabId, tabIndex: active ? 0 : -1 }
  return (
    <div className={'s-console-panel' + (active ? ' is-active' : '')} id={id} inert={!active} {...tabbed}>
      <div className="s-console-plan">
        <p className="s-console-name">{isTask ? UI.ownTask : (RECIPES[d.recipe] ?? d.tab)}</p>
        <div className={'ob-prompt s-console-prompt' + (typing ? ' ob-prompt--field is-typing' : '')}>
          <span className="ob-prompt-gt" aria-hidden="true">
            ›
          </span>
          <p className="ob-prompt-text">
            {isTask ? (
              <>
                <span aria-hidden="true">
                  <TypedText text={d.task} n={view.typed} caret={typing} typing={typing && view.typed > 0} />
                </span>
                <span className="ob-sr">{d.task}</span>
              </>
            ) : (
              d.task
            )}
          </p>
        </div>
        <dl className={'s-console-rows' + (view.sent ? (live && isTask ? ' ob-anim-fade' : '') : ' is-wait')}>
          <div className="s-console-row">
            <dt>{UI.rows.targets}</dt>
            <dd>{d.targets}</dd>
          </div>
          <div className="s-console-row s-console-row--more">
            <dt>{UI.rows.journey}</dt>
            <dd>
              <ol className="s-console-journey">
                {d.journey.map((s, i) => (
                  <li key={i}>
                    <span className="s-console-n" aria-hidden="true">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </dd>
          </div>
          <div className="s-console-row s-console-row--more">
            <dt>{UI.rows.schedule}</dt>
            <dd>{d.schedule}</dd>
          </div>
          <div className="s-console-row s-console-row--more">
            <dt>{UI.rows.report}</dt>
            <dd>{d.report}</dd>
          </div>
          <div className="s-console-row">
            <dt>{UI.rows.kit}</dt>
            <dd className="s-console-kitrow">
              <ul className="ob-kit s-console-kit">
                {d.kit.map((k, i) => (
                  <li key={i} className={'ob-kit__chip' + (i < view.kit ? (live ? ' is-landing' : '') : ' is-pending')}>
                    <Tick />
                    {k}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>

      <div className="s-console-run">
        <p className="s-console-h">{UI.log}</p>
        <ol className="s-console-log">
          {d.events.map((e, i) => (
            <li key={i} className={'s-console-event' + enter(i < view.events)}>
              <span className="s-console-text">{e.text}</span>
              <span className="s-console-time">{e.time}</span>
            </li>
          ))}
        </ol>
        <div className={'ob-finding s-console-finding' + enter(view.finding, true)}>
          <p className="s-console-h s-console-h--finding">
            <span className="ob-sq is-open" aria-hidden="true" />
            {UI.finding}
          </p>
          <p className="ob-finding-title s-console-finding-title">{d.finding}</p>
          <p className={'s-console-fix' + enter(view.fix)}>
            <StillMark state="needs-you" size={20} />
            <span>{d.fix}</span>
          </p>
        </div>
        <p className={'s-console-ledger' + enter(view.ledger)}>
          <StillMark state="landed" size={16} />
          {d.ledger}
        </p>
      </div>
    </div>
  )
})

/* `tag` replaces the bar's "Example" (the 1 real run says so). 1 demo is single-run mode (a recipe page): no tab row,
   the label names the run, and it plays when the reader reaches it, then rests; Play runs it again.
   In the hero, the typed heading over the console names it (`labelledBy`, its id) in place of the label. */
export function Console({
  label,
  labelledBy,
  demos,
  workspace = 'agency',
  tag = UI.example,
}: {
  label?: string
  labelledBy?: string
  demos: Demo[]
  workspace?: Workspace
  tag?: string
}) {
  const single = demos.length === 1
  const uid = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const winRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const allBeats = useMemo(() => demos.map(beatsOf), [demos])
  /* Every run's finished state: the panels that aren't showing, and the prerendered HTML. */
  const restViews = useMemo(() => demos.map((dm, i) => viewOf(dm, allBeats[i], allBeats[i].length)), [demos, allBeats])

  const [active, setActive] = useState(0)
  /* Beats played in the active run. It starts finished: the rest state, and the prerendered HTML. */
  const [p, setP] = useState(() => allBeats[0]?.length ?? 0)
  /* Bumped for every fresh run, so its progress line starts empty without sliding back. */
  const [run, setRun] = useState(0)
  /* The run is playing in front of the reader, so its arrivals animate. */
  const [live, setLive] = useState(false)
  const [autoOn, setAuto] = useState(false)
  const [started, setStarted] = useState(false)
  const [seen, setSeen] = useState(false)
  const [away, setAway] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const { railRef, railClass } = useTabRail(active)

  /* Reduced motion: every run shows finished, and nothing advances by itself. */
  const reduced = useReducedMotion()
  const auto = autoOn && !reduced
  const d = demos[active]
  const beats = allBeats[active]
  const view = viewOf(d, beats, reduced ? beats.length : p)

  /* Opens a tab and starts its run from the top (finished at once with reduced motion). A reader's choice stops the
     tabs advancing for good. */
  const open = useCallback(
    (i: number, byReader: boolean) => {
      if (byReader) setAuto(false)
      setActive(i)
      setRun((r) => r + 1)
      const still = matchMedia(RM).matches
      setP(still ? (allBeats[i]?.length ?? 0) : 0)
      setLive(!still)
    },
    [allBeats],
  )

  /* Start: motion allowed, so the runs advance by themselves. If the console can't be seen yet (below the fold, or
     still fading in), the first run is set back to its start and plays once the reader gets to it. */
  useEffect(() => {
    const el = winRef.current
    if (!el) return
    const raf = requestAnimationFrame(() => {
      if (!matchMedia(RM).matches) {
        const r = el.getBoundingClientRect()
        if (r.top >= innerHeight || r.bottom <= 0 || performance.now() < FRESH_MS) {
          setP(0)
          setLive(true)
        }
        setAuto(true)
      }
      setAway(document.hidden)
      setStarted(true)
    })
    const io = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.2 })
    io.observe(el)
    const vis = () => setAway(document.hidden)
    document.addEventListener('visibilitychange', vis)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      document.removeEventListener('visibilitychange', vis)
    }
  }, [])

  /* The run's own clock. It waits while the console is off screen or the tab is hidden. */
  const playing = started && seen && !away && !view.done
  useEffect(() => {
    if (!playing) return
    const t = window.setTimeout(() => setP((x) => x + 1), beats[p]?.wait ?? 0)
    return () => window.clearTimeout(t)
  }, [playing, p, beats])

  /* Auto-advance: a finished run holds for the dwell (motion.css --ob-autoplay-dwell), then the next tab opens. 1 pass,
     resting on the last. Hover or focus inside holds it. */
  const dwelling = started && auto && seen && !away && !hovered && !focused && view.done
  useEffect(() => {
    if (!dwelling) return
    const css = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--ob-autoplay-dwell'))
    const t = window.setTimeout(
      () => {
        if (active < demos.length - 1) open(active + 1, false)
        else setAuto(false)
      },
      Number.isFinite(css) && css > 0 ? css : DWELL_FALLBACK,
    )
    return () => window.clearTimeout(t)
  }, [dwelling, active, demos.length, open])

  /* Pause stops the tabs for good, and a run still playing jumps to its finished state, so nothing moves. Play starts
     them again from here (from the first tab, once the last has finished). */
  function togglePause() {
    if (auto) {
      setAuto(false)
      setP(beats.length)
      setLive(false)
      return
    }
    setAuto(true)
    if (view.done && active === demos.length - 1) open(0, false)
  }

  /* Roving focus: arrows, Home and End move along the tabs and open each one (the reader chose it). */
  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    const last = demos.length - 1
    let i = -1
    if (e.key === 'ArrowRight') i = active === last ? 0 : active + 1
    else if (e.key === 'ArrowLeft') i = active === 0 ? last : active - 1
    else if (e.key === 'Home') i = 0
    else if (e.key === 'End') i = last
    if (i < 0) return
    e.preventDefault()
    open(i, true)
    tabRefs.current[i]?.focus()
  }

  const onPointerEnter = (e: PointerEvent) => e.pointerType === 'mouse' && setHovered(true)
  const onPointerLeave = () => setHovered(false)
  /* Keyboard focus on a tab or a run holds the tabs; a click, or focus on the pause button, does not. */
  const onFocus = (e: FocusEvent) => {
    const t = e.target as HTMLElement
    setFocused(t.matches(':focus-visible') && !t.closest('.s-console-pause'))
  }
  const onBlur = (e: FocusEvent) => {
    if (!rootRef.current?.contains(e.relatedTarget as Node | null)) setFocused(false)
  }

  /* The bar's status: the 1 moving mark. Nothing while a task is still being typed. */
  const status: { mark: Status; word: string; detail?: string } | null = !view.sent
    ? null
    : view.done
      ? { mark: 'waiting', word: UI.status.waiting, detail: d.schedule }
      : view.events === 0
        ? { mark: 'working', word: UI.status.setup }
        : { mark: 'working', word: UI.status.working, detail: UI.steps(view.events, d.events.length) }

  const name = d.recipe === 'task' ? UI.ownTask : (RECIPES[d.recipe] ?? d.tab)
  /* What names the tabs (or the single run): the hero's typed heading, or the console's own label. */
  const named = labelledBy ?? (single ? `${uid}-tab-0` : `${uid}-label`)

  return (
    <div
      className="s-console"
      ref={rootRef}
      style={{ '--s-console-count': demos.length } as CSSProperties}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {!labelledBy && (
        <p className="s-console-label" id={named}>
          {label}
        </p>
      )}
      {!single && (
        <div className={railClass} role="tablist" aria-labelledby={named} ref={railRef} onKeyDown={onKey}>
          {demos.map((demo, i) => (
            <button
              key={i}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${i}`}
              className="ob-ptab s-console-tab"
              aria-selected={i === active}
              aria-controls={`${uid}-panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => open(i, true)}
            >
              {demo.tab}
            </button>
          ))}
        </div>
      )}

      {/* data-nosnippet: the runs are examples, so Google never quotes their data as fact (AppScreen does the same). */}
      <div className="ob-window ob-object s-console-win" ref={winRef} data-nosnippet="">
        <div className="ob-window-bar s-console-bar">
          <span className="ob-window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <p className="s-console-crumb">
            <span className="s-console-crumb-ws">
              <b>{UI.workspace[workspace]}</b>
              <span aria-hidden="true"> / </span>
              {UI.missions}
              <span aria-hidden="true"> / </span>
            </span>
            <span className="s-console-crumb-now">{name}</span>
          </p>
          <span className="ob-tag s-console-example">{tag}</span>
          <span className="s-console-end">
            {status && (
              <span className="ob-status s-console-status">
                <span className="s-console-mark" aria-hidden="true" key={status.mark}>
                  <StatusMark state={status.mark} size={14} />
                </span>
                <span>{status.word}</span>
                {status.detail && <span className="ob-status__detail">{status.detail}</span>}
              </span>
            )}
            {!reduced && (
              <button type="button" className="ob-navbtn s-console-pause" aria-label={UI.pause} aria-pressed={!auto} onClick={togglePause}>
                <svg className="ob-navicon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                  {auto ? <path d="M6 4v8M10 4v8" /> : <path d="M5.5 3.75v8.5L12.25 8Z" strokeLinejoin="round" />}
                </svg>
              </button>
            )}
          </span>
          <span className={'s-console-progress' + (view.done ? ' is-done' : '')} aria-hidden="true" key={run}>
            <i style={{ '--s-progress': view.progress } as CSSProperties} />
          </span>
        </div>

        <div className="s-console-body">
          {demos.map((demo, i) => (
            <Panel
              key={i === active ? `${i}-${run}` : i}
              d={demo}
              view={i === active ? view : restViews[i]}
              live={i === active && live}
              id={`${uid}-panel-${i}`}
              tabId={single ? named : `${uid}-tab-${i}`}
              active={i === active}
              single={single}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
