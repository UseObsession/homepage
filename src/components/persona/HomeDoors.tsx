import { useEffect, useId, useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import type { HomeDoorDemo, HomeDoors as Words } from '../../content/types'
import { PersonaGlyph } from './icons'
import './blueprint.css'
import './HomeDoors.css'

/* The four ways in (#start; two until 26 Nov 2026, when companies and partners joined as a second row with a near-real list
   each: a company's directory, a partner's clients), Home's last section before the sign-up (23 Nov 2026). Seun: send developers and every team
   that doesn't code to their own page, make it plain that Obsession works for both, and let each reader picture using
   it; then "subtle visual cues ... feel interactive and clean ... intelligently animated ... even if a card".

   Two cards side by side (stacked on a phone), each one link to its page. Inside each, one small working picture:
   - Developers pick how they build (the SDK call, the webhook, MCP) and watch their agent's events arrive, newest on top,
     one every few seconds, the newest with the 50 ms it took to reach them. Whatever tab is picked, the same events
     come back: the point of the picture.
   - Teams that don't code see one team's job at a time (marketing, sales, support, finance, operations), its blanks
     filling in turn, then the result landing where that team works. The tour moves on every TOUR ms with a hairline
     filling on the chosen team; picking a team stops it for good.

   Cues, all quiet: a soft light follows the pointer across the card, the card lifts and its edge strengthens, the link's
   words fill like a button with a chevron that steps right, the tabs are raised when chosen. Motion runs only while the
   card is on screen and motion is allowed; under prefers-reduced-motion nothing moves or advances by itself, the first
   job and the newest events show, and the tabs still work. Before the page's script runs every word shows. Words:
   content/pages/home.ts (homeDoors). */

const TOUR = 5200
const NEXT = 2600
const tie = (s: string) => s.replace(/(\d) /g, '$1 ')

const Chev = () => (
  <svg className="h-dr__chev" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M6 3.5 10.5 8 6 12.5" />
  </svg>
)

/* On screen and allowed to move: the two conditions every loop here waits for. */
function useLive<T extends Element>() {
  const ref = useRef<T>(null)
  const [onScreen, setOnScreen] = useState(false)
  const [motion, setMotion] = useState(false)
  useEffect(() => {
    setMotion(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, live: onScreen && motion, motion, onScreen }
}

function Tabs({ label, items, pick, chosen, touring, id }: { label: string; items: string[]; pick: (i: number) => void; chosen: number; touring?: boolean; id: string }) {
  return (
    <div className="h-dr__tabs" role="group" aria-label={label}>
      <span className="h-dr__tabs-k" aria-hidden="true">
        {label}
      </span>
      <span className="h-dr__tabs-row">
        {items.map((t, i) => (
          <button key={t} type="button" className="h-dr__tab" aria-pressed={i === chosen} aria-controls={id} onClick={() => pick(i)}>
            {t}
            {touring && i === chosen && <i className="h-dr__tab-prog" key={`${i}-${chosen}`} aria-hidden="true" style={{ ['--tour' as string]: `${TOUR}ms` } as CSSProperties} />}
          </button>
        ))}
      </span>
    </div>
  )
}

function CodeDemo({ demo }: { demo: Extract<HomeDoorDemo, { kind: 'code' }> }) {
  const id = useId()
  const { ref, live } = useLive<HTMLDivElement>()
  const [tab, setTab] = useState(0)
  const [k, setK] = useState(1)
  const n = demo.events.length
  useEffect(() => {
    if (!live) return
    const t = window.setInterval(() => setK((x) => x + 1), NEXT)
    return () => window.clearInterval(t)
  }, [live])
  /* The newest event on top, the one before it under it. */
  const rows = [k, k - 1].map((i) => ({ i, ...demo.events[((i % n) + n) % n] }))
  return (
    <div ref={ref} className="h-dr__demo">
      <Tabs label={demo.tabsLabel} items={demo.tabs.map((t) => t.label)} pick={setTab} chosen={tab} id={id} />
      <code className="h-dr__call" id={id} key={tab}>
        {demo.tabs[tab].code}
      </code>
      <ol className="h-dr__stream" aria-hidden="true">
        {rows.map((r, j) => (
          <li className={'h-dr__evt' + (j === 0 ? ' is-new' : '')} key={r.i}>
            <i className="h-dr__dot" />
            <span className="h-dr__at">{r.at}</span>
            <span className="h-dr__kind">{r.event}</span>
            {j === 0 && <span className="h-dr__ms">{demo.ms}</span>}
            <span className="h-dr__text">{r.text}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function JobDemo({ demo }: { demo: Extract<HomeDoorDemo, { kind: 'job' }> }) {
  const id = useId()
  const { ref, live } = useLive<HTMLDivElement>()
  const [i, setI] = useState(0)
  const [touring, setTouring] = useState(true)
  useEffect(() => {
    if (!live || !touring) return
    const t = window.setTimeout(() => setI((x) => (x + 1) % demo.jobs.length), TOUR)
    return () => window.clearTimeout(t)
  }, [live, touring, i, demo.jobs.length])
  const pick = (n: number) => {
    setTouring(false)
    setI(n)
  }
  const job = demo.jobs[i]
  let blank = 0
  return (
    <div ref={ref} className="h-dr__demo">
      <Tabs label={demo.tabsLabel} items={demo.jobs.map((j) => j.team)} pick={pick} chosen={i} touring={live && touring} id={id} />
      <div className="h-dr__run" id={id} key={i} aria-live="off">
        <p className="h-dr__job">
          {job.sentence.map((p, n) =>
            typeof p === 'string' ? (
              <span key={n}>{p}</span>
            ) : (
              <mark key={n} className="h-dr__blank h-dr__beat" style={{ ['--d' as string]: blank++ } as CSSProperties}>
                {tie(p.v)}
              </mark>
            ),
          )}
        </p>
        <p className="h-dr__evt is-new h-dr__beat" style={{ ['--d' as string]: 3.4 } as CSSProperties}>
          <i className="h-dr__dot" />
          <span className="h-dr__kind">{job.where}</span>
          <span className="h-dr__ms">{job.at}</span>
          <span className="h-dr__text">{job.result}</span>
        </p>
      </div>
    </div>
  )
}

/* A near-real list: the window's title, one line under it, then the rows rising in turn once the card is seen (26 Nov 2026).
   Under reduced motion, or before the script runs, every row shows at rest. */
function RosterDemo({ demo }: { demo: Extract<HomeDoorDemo, { kind: 'roster' }> }) {
  const { ref, live, motion } = useLive<HTMLDivElement>()
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (live) setSeen(true)
  }, [live])
  /* Waiting: motion allowed and not yet seen, so the rows rest hidden until they rise. */
  const state = seen ? ' is-seen' : motion ? ' is-waiting' : ''
  return (
    <div ref={ref} className={'h-dr__demo h-dr__roster' + state}>
      <p className="h-dr__ros-head">
        <span>{demo.head}</span>
        <span className="h-dr__ros-sub">{demo.sub}</span>
      </p>
      <ul className="h-dr__ros-list">
        {demo.rows.map((r, n) => (
          <li key={r.name} className={'h-dr__ros-row' + (r.lit ? ' is-lit' : '')} style={{ ['--d' as string]: n } as CSSProperties}>
            <span className="h-dr__ros-av" aria-hidden="true">
              <PersonaGlyph name={r.lit ? 'persona' : 'person'} />
            </span>
            <span className="h-dr__ros-main">
              <b>{r.name}</b>
              <span className="h-dr__ros-id">{tie(r.id)}</span>
            </span>
            <span className="h-dr__ros-meta">{tie(r.meta)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* The soft light that follows the pointer across a card, set as two custom properties so CSS draws it. */
const follow = (e: PointerEvent<HTMLLIElement>) => {
  if (e.pointerType !== 'mouse') return
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

/* One agent or ten million: six steps on a log scale, each a bar that grows, the chosen one lit with who runs that many.
   It climbs once from 1 to 10 million while on screen, a hairline filling under the chosen step, and stops on the
   top step; picking a step stops it. Under reduced motion it rests on the top step and the steps still work. */
const CLIMB = 2300
function Scale({ scale }: { scale: NonNullable<Words['scale']> }) {
  const { ref, live } = useLive<HTMLDivElement>()
  const last = scale.steps.length - 1
  const [i, setI] = useState(last)
  const [climbing, setClimbing] = useState(false)
  const started = useRef(false)
  useEffect(() => {
    if (!live || started.current) return
    started.current = true
    setI(0)
    setClimbing(true)
  }, [live])
  useEffect(() => {
    if (!climbing || !live) return
    if (i >= last) {
      setClimbing(false)
      return
    }
    const t = window.setTimeout(() => setI((x) => x + 1), CLIMB)
    return () => window.clearTimeout(t)
  }, [climbing, live, i, last])
  const pick = (k: number) => {
    started.current = true
    setClimbing(false)
    setI(k)
  }
  const top = Math.log10(scale.steps[last].n) || 1
  const st = scale.steps[i]
  return (
    <div ref={ref} className="h-dr__scale">
      <div className="h-dr__scale-head">
        <p className="h-dr__scale-h">{scale.heading}</p>
        <p className="h-dr__scale-line">{scale.line}</p>
      </div>
      <div className="h-dr__ladder" role="group" aria-label={scale.label}>
        {scale.steps.map((x, k) => (
          <button
            key={x.n}
            type="button"
            className="h-dr__rung"
            aria-pressed={k === i}
            aria-label={`${x.n.toLocaleString('en-US')} ${x.n === 1 ? 'agent' : 'agents'}`}
            onClick={() => pick(k)}
            style={{ ['--h' as string]: 0.14 + (0.86 * Math.log10(x.n)) / top } as CSSProperties}
          >
            <span className="h-dr__bar" aria-hidden="true" />
            <span className="h-dr__rung-n">{x.short}</span>
            {climbing && k === i && <i className="h-dr__rung-prog" key={k} aria-hidden="true" style={{ ['--climb' as string]: `${CLIMB}ms` } as CSSProperties} />}
          </button>
        ))}
      </div>
      <p className="h-dr__case" key={i} aria-live="polite">
        <b>{`${st.n.toLocaleString('en-US')} ${st.n === 1 ? 'agent' : 'agents'}`}</b>
        <span>{st.case}</span>
      </p>
    </div>
  )
}

export function HomeDoors({ doors, id, tone }: { doors: Words; id?: string; tone?: 'alt' }) {
  const hid = useId()
  return (
    <section className="s-section h-dr" id={id} data-tone={tone} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {doors.heading}
          </h2>
          <p className="s-bp-line">{doors.line}</p>
        </div>
        <ul className="h-dr__grid">
          {doors.doors.map((d) => (
            <li className="h-dr__card" key={d.id} data-reader={d.reader} onPointerMove={follow}>
              <i className="h-dr__spot" aria-hidden="true" />
              <p className="h-dr__k">
                <span className="h-dr__ic" aria-hidden="true">
                  <PersonaGlyph name={d.icon} />
                </span>
                {d.label}
              </p>
              <h3 className="h-dr__title">
                <Link className="h-dr__link" to={d.cta.to}>
                  {d.title}
                </Link>
              </h3>
              {d.demo.kind === 'code' ? <CodeDemo demo={d.demo} /> : d.demo.kind === 'job' ? <JobDemo demo={d.demo} /> : <RosterDemo demo={d.demo} />}
              <p className="h-dr__line">{d.line}</p>
              <span className="h-dr__go" aria-hidden="true">
                {d.cta.label}
                <Chev />
              </span>
            </li>
          ))}
        </ul>
        {doors.scale && <Scale scale={doors.scale} />}
      </div>
    </section>
  )
}
