import { useEffect, useId, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { Crumbs } from '../components/Crumbs'
import { FormatIcon } from '../components/nocode/formats'
import { PersonaGlyph } from '../components/persona/icons'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { DescribeJob } from '../components/describe/DescribeJob'
import { describe } from '../content/describe'
import { catalog } from '../content/catalog'
import { noCodePage as p } from '../content/noCode'
import { plans } from '../content/prices'
import type { PersonaIcon } from '../content/types'
import { useInView } from '../hooks/useReveal'
import './NoCode.css'
import './NoCodeWays.css'

/* /no-code: the page for teams that don't write code. The story: the hero's console (one example company's teams, each
   with its blueprint running; it moves team by team until the reader picks one), what an agent can do once it's
   equipped, the reader's team's first job (typical months from the catalog), every size from 2 agents to 1,200, the two
   ways to start (a ready-made job, or the AI tools the team already uses), the rules and the cost, questions, the form.

   Every picture keeps the site's camera bar (premium-illustration): 1 to 3 beats, a gentle lean-in toward the point, a
   spotlight that dims the rest, and a hairline to a short note that states the point. Motion plays once as a picture
   enters the view; the console's team cycle and its live light are its only loops, and the cycle stops for good when
   the reader takes over. Under reduced motion every picture shows its finished scene and its note, still, and every
   control works. Nothing hides before the page's script arms a picture (data-armed), so the prerender, crawlers and
   readers without script get every word. Words: content/noCode.ts. */

const recipeBySlug = Object.fromEntries(catalog.recipes.map((r) => [r.slug, r]))
const monthsOf = (slug: string) => {
  const r = recipeBySlug[slug]
  if (!r) throw new Error(`pages/NoCode.tsx: no blueprint "${slug}" in the catalog (content/noCode.ts)`)
  const months = r.tiers.filter((t) => !t.free)
  return { name: r.name, months, featured: months.find((t) => t.featured) ?? months[months.length - 1], top: months[months.length - 1] }
}
const usd = (n: number) => (Number.isInteger(n) ? `$${n.toLocaleString('en-US')}` : `$${n.toFixed(2)}`)
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1 ')
const vars = (o: Record<string, number | string>) => o as CSSProperties
const REDUCE = '(prefers-reduced-motion: reduce)'

/* Motion allowed (false on the server and under reduced motion). */
function useMotion() {
  const [ok, setOk] = useState(false)
  useEffect(() => setOk(!window.matchMedia(REDUCE).matches), [])
  return ok
}

/* Plays once as a picture first enters the view. Before then, and only with motion allowed, the picture is armed, so its
   entrance can start from hidden; without script or motion it is its finished scene. */
function useEntrance<T extends Element>(threshold = 0.2) {
  const motion = useMotion()
  const { ref, inView } = useInView<T>(threshold)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (inView) setSeen(true)
  }, [inView])
  return { ref, motion, seen, armed: motion && !seen, cls: seen && motion ? ' is-in' : '' }
}

const Chev = ({ className = 'nc-chev' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M6 3.5 10.5 8 6 12.5" />
  </svg>
)
const Glyph = ({ name, className = 'nc-ic' }: { name: PersonaIcon; className?: string }) => (
  <span className={className} aria-hidden="true">
    <PersonaGlyph name={name} />
  </span>
)
/* A beat's note: a hairline from the picture to a small label that states its point. */
const Note = ({ text, className = '' }: { text: string; className?: string }) => (
  <p className={`nc-note-label ${className}`}>
    <i aria-hidden="true" />
    <span>{text}</span>
  </p>
)
const Bar = ({ crumb }: { crumb: [string, string] }) => (
  <div className="nc-win__bar" aria-hidden="true">
    <span className="nc-win__dots">
      <i />
      <i />
      <i />
    </span>
    <span className="nc-win__crumb">
      <b>{crumb[0]}</b>
      <span>/</span>
      {crumb[1]}
    </span>
  </div>
)

/* ---- The hero's console: one company's teams, each with its blueprint running ---- */

const CYCLE = 6200

function HeroConsole() {
  const c = p.console
  const n = c.teams.length
  const motion = useMotion()
  const { ref, inView } = useInView<HTMLElement>(0.2)
  const [at, setAt] = useState(0)
  const [auto, setAuto] = useState(true)
  /* The beat's second half: lean in on the newest row, dim the rest, draw the note. At rest it is on. */
  const [lean, setLean] = useState(true)
  const [seen, setSeen] = useState(false)
  const [ring, setRing] = useState(0)
  const tabsId = useId()
  useEffect(() => {
    if (inView) setSeen(true)
  }, [inView])
  const team = c.teams[at]

  /* Each team's beat: its rows arrive, then the camera leans in and the note draws. */
  useEffect(() => {
    if (!motion || !seen) return
    setLean(false)
    const t = window.setTimeout(() => setLean(true), team.rows.length * 300 + 650)
    return () => window.clearTimeout(t)
  }, [at, motion, seen, team.rows.length])

  /* Team by team, until the reader picks one, and only while the console is in view. */
  useEffect(() => {
    if (!motion || !seen || !auto || !inView) return
    const t = window.setTimeout(() => setAt((i) => (i + 1) % n), CYCLE)
    return () => window.clearTimeout(t)
  }, [at, motion, seen, auto, inView, n])

  const pick = (i: number) => {
    setAuto(false)
    setAt(i)
    setRing((r) => r + 1)
  }
  const playing = motion && seen
  return (
    <figure
      ref={ref}
      className={'nc-con' + (playing ? ' is-play' : '') + (lean ? ' is-lean' : '') + (auto && playing ? ' is-auto' : '')}
      data-armed={motion && !seen ? '' : undefined}
      data-reader={team.reader}
    >
      <div className="nc-win nc-con__win">
        <div className="nc-win__bar" aria-hidden="true">
          <span className="nc-win__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="nc-win__crumb">
            <b>{c.org}</b>
            <span>/</span>
            {c.page}
          </span>
          <span className="nc-win__search">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="7" cy="7" r="4.25" />
              <path d="M10.2 10.2 13 13" />
            </svg>
            {c.search}
          </span>
        </div>
        <div className="nc-con__body">
          <div className="nc-con__side" role="tablist" aria-label={c.pick} aria-orientation="vertical">
            <p className="nc-con__side-h" aria-hidden="true">
              {c.pick}
            </p>
            {c.teams.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`${tabsId}-${t.id}`}
                aria-selected={i === at}
                aria-controls={`${tabsId}-panel`}
                tabIndex={i === at ? 0 : -1}
                className={'nc-con__team' + (auto && playing && i === (at + 1) % n ? ' is-next' : '')}
                data-reader={t.reader}
                onClick={() => pick(i)}
                onKeyDown={(e) => {
                  if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(e.key)) return
                  e.preventDefault()
                  const next = (at + (e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : -1) + n) % n
                  pick(next)
                  document.getElementById(`${tabsId}-${c.teams[next].id}`)?.focus()
                }}
              >
                <Glyph name={t.icon} />
                <span className="nc-con__team-words">
                  <b>{t.name}</b>
                  <span>{t.blueprint}</span>
                </span>
                {i === at && auto && playing && <i className="nc-con__prog" key={`p-${at}`} style={vars({ '--cycle': `${CYCLE}ms` })} aria-hidden="true" />}
                {i === at && ring > 0 && <i className="nc-ring" key={`r-${ring}`} aria-hidden="true" />}
              </button>
            ))}
          </div>
          <div className="nc-con__main" role="tabpanel" id={`${tabsId}-panel`} aria-labelledby={`${tabsId}-${team.id}`}>
            <div className="nc-con__head">
              <span className="nc-con__who">
                <span className="nc-con__live" aria-hidden="true" />
                {team.blueprint}
              </span>
              <span className="nc-con__meta">
                <span className="nc-con__count">{team.count}</span>
                <span className="nc-con__state">{c.running}</span>
              </span>
            </div>
            <ol className="nc-con__log" key={team.id}>
              {team.rows.map((r, i) => (
                <li key={r.text} className={'nc-con__row' + (r.tone ? ` is-${r.tone}` : '')} style={vars({ '--i': i })}>
                  <time>{r.at}</time>
                  <Glyph name={r.icon} className="nc-ic nc-ic--sm" />
                  <span>{r.text}</span>
                </li>
              ))}
            </ol>
            <Note key={`n-${team.id}`} text={team.note} className="nc-con__note" />
            <p className="nc-con__out">
              <FormatIcon id={team.format} />
              <span>{c.status(n)}</span>
            </p>
          </div>
        </div>
      </div>
      <figcaption className="nc-caption">{c.caption}</figcaption>
    </figure>
  )
}

/* ---- What an agent can do once it's equipped ---- */

function Equip() {
  const e = p.equip
  const motion = useMotion()
  const { ref, inView } = useInView<HTMLDivElement>(0.35)
  const [state, setState] = useState<'alone' | 'equipped'>('equipped')
  const played = useRef(false)
  /* With motion allowed it starts on its own, then switches once as it comes into view. */
  useEffect(() => {
    if (motion && !played.current) setState('alone')
  }, [motion])
  useEffect(() => {
    if (!motion || !inView || played.current) return
    played.current = true
    const t = window.setTimeout(() => setState('equipped'), 1100)
    return () => window.clearTimeout(t)
  }, [motion, inView])
  const on = state === 'equipped'
  return (
    <figure className="nc-eq-fig">
      <div ref={ref} className={'nc-eq' + (on ? ' is-on' : '')}>
        <div className="nc-eq__top">
          <span className="nc-eq__who">
            <Glyph name="persona" />
            <b>{e.agent.name}</b>
          </span>
          <div className="nc-seg" role="group" aria-label={e.states.label}>
            {(['alone', 'equipped'] as const).map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={state === s}
                onClick={() => {
                  played.current = true
                  setState(s)
                }}
              >
                {e.states[s]}
              </button>
            ))}
          </div>
        </div>
        <div className="nc-eq__body">
          <div className="nc-eq__think">
            <p className="nc-eq__h">{e.agent.can}</p>
            <ul>
              {e.agent.think.map((t) => (
                <li key={t}>
                  <svg className="nc-mark nc-mark--yes" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="nc-eq__act">
            <p className="nc-eq__h">{e.agent.act}</p>
            <ul>
              {e.rows.map((r, i) => (
                <li key={r.ability} className="nc-eq__row" style={vars({ '--i': i })}>
                  <Glyph name={r.icon} />
                  <span className="nc-eq__ability">
                    <b>{r.ability}</b>
                    <span className="nc-eq__alone">
                      <svg className="nc-mark nc-mark--lock" viewBox="0 0 16 16" aria-hidden="true">
                        <rect x="4" y="7.2" width="8" height="6" rx="1.3" />
                        <path d="M5.8 7.2V5.6a2.2 2.2 0 0 1 4.4 0v1.6" />
                      </svg>
                      {r.alone}
                    </span>
                    <Link className="nc-eq__job" to={`/blueprints/${r.slug}`} tabIndex={on ? 0 : -1} aria-hidden={!on}>
                      <span className="nc-eq__piece">{r.piece}</span>
                      {tie(r.job)}
                      <Chev />
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Note text={e.note} className="nc-eq__note" />
      <figcaption className="nc-caption">{e.caption}</figcaption>
    </figure>
  )
}

/* ---- The jobs, by team ---- */

function Jobs() {
  const j = p.jobs
  const [at, setAt] = useState(0)
  const tabsId = useId()
  return (
    <div className="nc-jobs">
      <div className="nc-tabs" role="tablist" aria-label="Teams">
        {j.teams.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`${tabsId}-tab-${t.id}`}
            aria-selected={i === at}
            aria-controls={`${tabsId}-panel-${t.id}`}
            tabIndex={i === at ? 0 : -1}
            className="nc-tab"
            data-reader={t.reader}
            onClick={() => setAt(i)}
            onKeyDown={(e) => {
              if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
              const next = (at + (e.key === 'ArrowRight' ? 1 : -1) + j.teams.length) % j.teams.length
              setAt(next)
              document.getElementById(`${tabsId}-tab-${j.teams[next].id}`)?.focus()
            }}
          >
            <Glyph name={t.icon} />
            {t.name}
          </button>
        ))}
      </div>
      {j.teams.map((t, i) => (
        <div key={t.id} role="tabpanel" id={`${tabsId}-panel-${t.id}`} aria-labelledby={`${tabsId}-tab-${t.id}`} hidden={i !== at} className="nc-panel" data-reader={t.reader}>
          <ul className="nc-panel__jobs">
            {t.jobs.map((job, k) => {
              const bp = monthsOf(job.slug)
              return (
                <li key={job.slug + job.line} className="nc-job" style={vars({ '--d': k })}>
                  <Link className="nc-job__link" to={`/blueprints/${job.slug}`}>
                    <span className="nc-job__name">
                      {bp.name}
                      <Chev />
                    </span>
                    <span className="nc-job__line">{tie(job.line)}</span>
                    <span className="nc-job__month">
                      <span>{j.typical}</span>
                      <b>
                        {usd(bp.featured.estimate)} <small>a month</small>
                      </b>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
          <p className="nc-moves">
            <span>{j.moves}</span>
            {t.moves.map((m) => (
              <b key={m}>{m}</b>
            ))}
          </p>
        </div>
      ))}
      <div className="nc-formats">
        <p className="nc-formats__label">{j.formats.label}</p>
        <ul className="nc-formats__list">
          {j.formats.items.map((f) => (
            <li key={f.id}>
              <FormatIcon id={f.id} />
              {f.name}
            </li>
          ))}
        </ul>
        <p className="nc-formats__note">{j.formats.note}</p>
      </div>
      <Link className="nc-more" to={j.all(catalog.recipes.length).to}>
        {j.all(catalog.recipes.length).label}
        <Chev />
      </Link>
    </div>
  )
}

/* ---- Every size, biggest first: dots for the agents each runs, then blueprints at volume ---- */

function Scale() {
  const s = p.scale
  const e = useEntrance<HTMLOListElement>(0.15)
  const top = s.axis.length - 1
  /* Where a count sits on the ten-times scale: 1 at the left edge, 1M at the right. */
  const at = (n: number) => Math.min(1, Math.log10(Math.max(n, 1)) / top)
  return (
    <figure className="nc-scale-fig">
      <ol ref={e.ref} className={'nc-scale' + e.cls} data-armed={e.armed ? '' : undefined}>
        <li className="nc-scale__axis" aria-hidden="true">
          <span className="nc-scale__legend">{s.legend}</span>
          <span className="nc-scale__ticks">
            {s.axis.map((t, i) => (
              <span key={t} style={vars({ '--t': i / top })}>
                {t}
              </span>
            ))}
          </span>
        </li>
        {s.rows.map((r, i) => (
          <li key={r.name} className="nc-scale__row" style={vars({ '--r': i })}>
            <span className="nc-scale__who">
              <b>{r.name}</b>
              <span>{r.size}</span>
            </span>
            <span className="nc-scale__bar" aria-hidden="true" style={vars({ '--w': at(r.agents) })}>
              {s.axis.map((t, k) => (
                <i key={t} className="nc-scale__tick" style={vars({ '--t': k / top })} />
              ))}
              <span className="nc-scale__fill" />
              <span className="nc-scale__cap" />
            </span>
            <span className="nc-scale__n">
              {r.agents.toLocaleString('en-US')}
              {r.plus ? '+' : ''} <small>agents</small>
            </span>
            <Link className="nc-scale__job" to={`/blueprints/${r.slug}`}>
              {tie(r.job)}
              <Chev />
            </Link>
          </li>
        ))}
      </ol>
      <div className="nc-vol">
        <p className="nc-formats__label">{s.volume.label}</p>
        <ul className="nc-vol__list">
          {s.volume.slugs.map((slug) => {
            const bp = monthsOf(slug)
            return (
              <li key={slug}>
                <Link className="nc-vol__card" to={`/blueprints/${slug}`}>
                  <span className="nc-vol__name">
                    {bp.name}
                    <Chev />
                  </span>
                  <span className="nc-vol__covers">{tie(bp.top.covers)}</span>
                  <b className="nc-vol__month">
                    {usd(bp.top.estimate)} <small>{s.volume.per}</small>
                  </b>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <figcaption className="nc-caption">{s.caption}</figcaption>
    </figure>
  )
}

/* ---- The two ways in: a blueprint approved in plain words, and a team's own AI making a call ----
   23 Nov 2026 (Seun: "more interactive and motion ... subtle cue for interactive, bring it to life"). Each picture tours
   its examples while it is on screen: the blueprint card one team's job at a time (the fields fill, the pointer approves
   it, it runs across its locations and the day's result lands), the AI card one tool at a time (the request, a short
   working beat, each step with its light, the answer). A hairline under the chosen tab fills before the next; picking a
   tab stops the tour for good. Under reduced motion nothing moves or advances, the first example shows whole, and the
   tabs still work. A soft light follows the pointer across each card (NoCodeWays.css). */

const TOUR_SHEET = 8400
const TOUR_CHAT = 6600

/* On screen right now (not only once), so a tour pauses when the reader scrolls away. */
function useOnScreen<T extends Element>(threshold = 0.35) {
  const ref = useRef<T>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return { ref, on }
}

/* A tour of n examples: moves on every `ms` while live, stops for good when the reader picks one. */
function useTour(n: number, ms: number, live: boolean) {
  const [i, setI] = useState(0)
  const [touring, setTouring] = useState(true)
  useEffect(() => {
    if (!live || !touring || n < 2) return
    const t = window.setTimeout(() => setI((x) => (x + 1) % n), ms)
    return () => window.clearTimeout(t)
  }, [live, touring, i, n, ms])
  const pick = (k: number) => {
    setTouring(false)
    setI(k)
  }
  return { i, pick, touring: live && touring }
}

function WayTabs({ label, items, i, pick, touring, ms, controls }: { label: string; items: string[]; i: number; pick: (k: number) => void; touring: boolean; ms: number; controls: string }) {
  return (
    <div className="nc-wtabs" role="group" aria-label={label}>
      <span className="nc-wtabs__k" aria-hidden="true">
        {label}
      </span>
      <span className="nc-wtabs__row">
        {items.map((t, k) => (
          <button key={t} type="button" className="nc-wtab" aria-pressed={k === i} aria-controls={controls} onClick={() => pick(k)}>
            {t}
            {touring && k === i && <i className="nc-wtab__prog" key={`${k}-${i}`} aria-hidden="true" style={vars({ '--tour': `${ms}ms` })} />}
          </button>
        ))}
      </span>
    </div>
  )
}

function Sheet() {
  const w = p.ways.sheet
  const e = useEntrance<HTMLDivElement>(0.35)
  const live = useOnScreen<HTMLDivElement>()
  /* The examples, then the reader's own job as the last tab (DescribeJob), which tours a little longer. */
  const n = w.examples.length
  const tour = useTour(n + 1, TOUR_SHEET, e.motion && live.on)
  const own = tour.i === n
  const ex = w.examples[Math.min(tour.i, n - 1)]
  const id = useId()
  return (
    <div ref={live.ref} className="nc-way__pic">
      <WayTabs label={w.tabsLabel} items={[...w.examples.map((x) => x.tab), w.own]} i={tour.i} pick={tour.pick} touring={tour.touring} ms={TOUR_SHEET} controls={id} />
      {own ? (
        <div id={id}>
          <DescribeJob examples={[describe.examples[0]]} />
        </div>
      ) : (
      <div ref={e.ref} id={id} className={'nc-win nc-sheet' + e.cls} data-armed={e.armed ? '' : undefined}>
        <Bar crumb={[w.crumb, ex.name]} />
        <div className="nc-sheet__rig" key={tour.i}>
          <p className="nc-sheet__name">
            <Glyph name="check" className="nc-ic nc-ic--sm" />
            {ex.name}
          </p>
          <dl className="nc-sheet__fields">
            {ex.fields.map(([k, v], n) => (
              <div key={k} style={vars({ '--i': n })}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="nc-sheet__foot" aria-hidden="true">
            <span className="nc-sheet__go">{w.button}</span>
            <span className="nc-sheet__run">
              <span className="nc-con__live" />
              <b>{ex.running}</b>
              <span className="nc-sheet__pips">
                {Array.from({ length: ex.pips }, (_, k) => (
                  <i key={k} style={vars({ '--k': k })} />
                ))}
              </span>
            </span>
            <svg className="nc-ptr" viewBox="0 0 16 16">
              <path d="M3 1.5v12.2l3.1-3 2.05 4.6 2.15-.95-2-4.5h4.3Z" />
            </svg>
            <i className="nc-sheet__ring" />
          </div>
          <p className="nc-sheet__result">
            <i aria-hidden="true" />
            {ex.result}
          </p>
        </div>
      </div>
      )}
    </div>
  )
}

function Chat() {
  const c = p.ways.chat
  const e = useEntrance<HTMLDivElement>(0.35)
  const live = useOnScreen<HTMLDivElement>()
  const tour = useTour(c.examples.length, TOUR_CHAT, e.motion && live.on)
  const ex = c.examples[tour.i]
  const id = useId()
  return (
    <div ref={live.ref} className="nc-way__pic">
      <WayTabs label={c.tabsLabel} items={c.examples.map((x) => x.app)} i={tour.i} pick={tour.pick} touring={tour.touring} ms={TOUR_CHAT} controls={id} />
      <div ref={e.ref} id={id} className={'nc-win nc-chatwin' + e.cls} data-armed={e.armed ? '' : undefined}>
        <Bar crumb={[ex.app, c.chat]} />
        <div className="nc-chat" key={tour.i}>
          <p className="nc-chat__ask nc-anim" style={vars({ '--i': 0 })}>
            {ex.ask}
          </p>
          <p className="nc-chat__typing" aria-hidden="true">
            <i />
            <i />
            <i />
          </p>
          <p className="nc-chat__tool nc-anim" style={vars({ '--i': 4 })}>
            <Glyph name="persona" className="nc-ic nc-ic--xs" />
            {ex.tool}
          </p>
          <ol className="nc-chat__steps">
            {ex.steps.map((st, n) => (
              <li key={st.text} className="nc-anim" style={vars({ '--i': 5 + n * 1.4 })}>
                <time>{st.at}</time>
                <span>{st.text}</span>
              </li>
            ))}
          </ol>
          <p className="nc-chat__answer nc-anim" style={vars({ '--i': 5 + ex.steps.length * 1.4 + 0.6 })}>
            {ex.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

/* The soft light that follows the pointer across a card. */
const follow = (ev: ReactPointerEvent<HTMLElement>) => {
  if (ev.pointerType !== 'mouse') return
  const r = ev.currentTarget.getBoundingClientRect()
  ev.currentTarget.style.setProperty('--mx', `${ev.clientX - r.left}px`)
  ev.currentTarget.style.setProperty('--my', `${ev.clientY - r.top}px`)
}

function Ways({ hid }: { hid: string }) {
  const w = p.ways
  return (
    <figure className="nc-ways-fig">
      <div className="nc-ways">
        <article className="nc-way" data-reader="founders" aria-labelledby={`${hid}-w1`} onPointerMove={follow}>
          <i className="nc-way__spot" aria-hidden="true" />
          <div className="nc-way__words">
            <p className="nc-kicker">{w.job.kicker}</p>
            <h3 className="nc-way__title" id={`${hid}-w1`}>
              {w.job.title}
            </h3>
            <p className="nc-way__line">{w.job.line}</p>
          </div>
          <Sheet />
          <Note text={w.sheet.note} />
          <Link className="ob-btn ob-btn--secondary nc-way__cta" to={w.job.cta.to}>
            <span className="ob-btn-label">{w.job.cta.label}</span>
            <Chev />
          </Link>
        </article>
        <article className="nc-way" data-reader="developers" id="connect" aria-labelledby={`${hid}-w2`} onPointerMove={follow}>
          <i className="nc-way__spot" aria-hidden="true" />
          <div className="nc-way__words">
            <p className="nc-kicker">{w.ai.kicker}</p>
            <h3 className="nc-way__title" id={`${hid}-w2`}>
              {w.ai.title}
            </h3>
            <p className="nc-way__line">{w.ai.line}</p>
          </div>
          <Chat />
          <Note text={w.chat.note} />
          <ul className="nc-tools" aria-label={w.ai.kicker}>
            {w.tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <a className="ob-btn ob-btn--secondary nc-way__cta" href={w.ai.cta.to}>
            <span className="ob-btn-label">{w.ai.cta.label}</span>
            <Chev />
          </a>
        </article>
      </div>
      <figcaption className="nc-caption">
        {w.caption} {w.toolsNote}
      </figcaption>
    </figure>
  )
}

/* ---- The page ---- */

export function NoCode() {
  const hid = useId()
  return (
    <>
      <section className="s-section nc-hero" aria-labelledby={`${hid}-h`}>
        <div className="s-wrap s-wrap--wide nc-hero__grid">
          <div className="nc-hero__words">
            <Crumbs className="nc-crumbs" />
            <div className="ob-anim-hero nc-hero__in">
              <p className="nc-pill">{p.hero.pill}</p>
              <h1 className="nc-h1" id={`${hid}-h`}>
                {p.hero.headline}
              </h1>
              <p className="nc-sub">{p.hero.sub}</p>
              <div className="nc-act">
                <Link className="ob-btn ob-btn--lg" to={p.hero.primary.to}>
                  <span className="ob-btn-label">{p.hero.primary.label}</span>
                </Link>
                <a className="ob-btn ob-btn--lg ob-btn--secondary" href={p.hero.secondary.to}>
                  <span className="ob-btn-label">{p.hero.secondary.label}</span>
                </a>
              </div>
              <p className="nc-hero__note">{p.hero.note}</p>
            </div>
          </div>
          <HeroConsole />
        </div>
      </section>

      <section className="s-section nc-sec" data-tone="alt" id="equipped" aria-labelledby={`${hid}-e`}>
        <div className="s-wrap nc-split">
          <header className="nc-head">
            <h2 className="nc-h2" id={`${hid}-e`}>
              {p.equip.heading}
            </h2>
            <p className="nc-line">{p.equip.line}</p>
          </header>
          <Equip />
        </div>
      </section>

      <section className="s-section nc-sec" id="jobs" aria-labelledby={`${hid}-j`}>
        <div className="s-wrap">
          <header className="nc-head">
            <h2 className="nc-h2" id={`${hid}-j`}>
              {p.jobs.heading}
            </h2>
            <p className="nc-line">{p.jobs.line}</p>
          </header>
          <Jobs />
        </div>
      </section>

      <section className="s-section nc-sec" data-tone="alt" id="scale" aria-labelledby={`${hid}-s`}>
        <div className="s-wrap">
          <header className="nc-head">
            <h2 className="nc-h2" id={`${hid}-s`}>
              {p.scale.heading}
            </h2>
            <p className="nc-line">{p.scale.line}</p>
          </header>
          <Scale />
        </div>
      </section>

      <section className="s-section nc-sec" id="start" aria-labelledby={`${hid}-w`}>
        <div className="s-wrap">
          <header className="nc-head">
            <h2 className="nc-h2" id={`${hid}-w`}>
              {p.ways.heading}
            </h2>
            <p className="nc-line">{p.ways.line}</p>
          </header>
          <Ways hid={hid} />
        </div>
      </section>

      <section className="s-section nc-sec" data-tone="alt" id="rules" aria-labelledby={`${hid}-r`}>
        <div className="s-wrap nc-base">
          <div className="nc-card nc-card--lit nc-rules" data-reader="founders" onPointerMove={follow}>
            <i className="nc-way__spot" aria-hidden="true" />
            <h2 className="nc-card__h" id={`${hid}-r`}>
              {p.rules.heading}
            </h2>
            <ul className="nc-rules__list">
              {p.rules.items.map((r) => (
                <li key={r.text}>
                  <Glyph name={r.icon} />
                  {r.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="nc-card nc-card--lit nc-cost" data-reader="developers" onPointerMove={follow}>
            <i className="nc-way__spot" aria-hidden="true" />
            <h2 className="nc-card__h">{p.cost.heading}</h2>
            <p className="nc-card__line">{p.cost.line}</p>
            <ul className="nc-plans">
              {plans.map((pl) => (
                <li key={pl.id}>
                  <b>{pl.name}</b>
                  <span>{pl.monthly != null ? (pl.monthly === 0 ? '$0' : `${usd(pl.monthly)} a month`) : pl.from != null ? `from ${usd(pl.from)} a month` : ''}</span>
                </li>
              ))}
            </ul>
            <Link className="nc-more" to={p.cost.link.to}>
              {p.cost.link.label}
              <Chev />
            </Link>
          </div>
          <div className="nc-dev" data-reader="developers">
            <div>
              <h2 className="nc-card__h">{p.dev.heading}</h2>
              <p className="nc-card__line">{p.dev.line}</p>
            </div>
            <Link className="ob-btn ob-btn--secondary" to={p.dev.link.to}>
              <span className="ob-btn-label">{p.dev.link.label}</span>
            </Link>
          </div>
        </div>
      </section>

      <Faq faq={p.faq} id="questions" className="s-faq--ruled" />
      <FinalCta final={p.final} id="join" />
    </>
  )
}
