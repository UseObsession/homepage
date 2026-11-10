import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import type { ExCompany, ExEvent, ExRow, Explorer } from '../../content/types'
import './HeroExplorer.css'

/* Home's hero object since 9 Nov (James): the index as a console, after Exa's. Two modes.
   Search: one company's timeline, as the index stores it (content/types.ts ExView). Only the set up plays by itself,
   once: the first company types in, its events arrive and the persona row pulses. Then it is the reader's: persona,
   wall and kind, the schema's own columns. Facts lists the events, each with its reads; Evidence is one event's clean
   copy and Record its rows, stepping through the events the firm showed or sent. A company not covered has Watch it,
   which runs its first visit.
   Insights: one question across a group of companies, like Exa's agent. The first time it is opened, the first question
   types and runs: the companies are found and listed on the left as each is looked up, and the report fills in the
   middle, ending in the answer and 3 numbers. On the left the dot is the state: green in the index, hollow not yet,
   pulsing once watched. A company not in the index gets a Watch button in its row, and all at once under the report;
   watching is the reader's choice. Other questions sit under the window.
   The nav's Products menu links to /#search and /#insights: the window opens in that mode (Insights runs its first
   question if it hasn't yet). The window follows the page's theme. Under reduced motion nothing types and every run
   shows its finished frame. */

type Mode = 'search' | 'insights'
type Tab = 'facts' | 'evidence' | 'record'
type Run = { on: boolean; steps: number; facts: number; done: boolean }
const IDLE: Run = { on: false, steps: 0, facts: 0, done: false }

const SEARCH_IC =
  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/><path d="m10.5 10.5 3 3"/></svg>'
const ASK_IC =
  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M8 1.8 9.4 6.6 14.2 8 9.4 9.4 8 14.2 6.6 9.4 1.8 8 6.6 6.6Z"/></svg>'
const ENTER =
  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 3.5v4.5a2 2 0 0 1-2 2H3.5"/><path d="m6.5 7-3 3 3 3"/></svg>'
const CHECK =
  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3.5 8.5 3 3 6-7"/></svg>'
const LINK =
  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.8 9.2a2.6 2.6 0 0 0 3.7 0l2.2-2.2a2.6 2.6 0 0 0-3.7-3.7l-.9.9"/><path d="M9.2 6.8a2.6 2.6 0 0 0-3.7 0L3.3 9a2.6 2.6 0 0 0 3.7 3.7l.9-.9"/></svg>'

const wait = (ms: number) => new Promise<void>((r) => window.setTimeout(r, ms))
const still = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const Svg = ({ html, className }: { html: string; className?: string }) => (
  <span className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
)

function Chips({ items, on, pick, empty, hint }: { items: string[]; on: (v: string) => boolean; pick: (v: string) => void; empty?: (v: string) => boolean; hint?: string }) {
  return (
    <div className="hx-chips">
      {items.map((v) => (
        <button
          type="button"
          className="hx-chip"
          key={v}
          aria-pressed={on(v)}
          data-empty={empty?.(v) ? '' : undefined}
          data-hint={hint === v ? '' : undefined}
          onClick={() => pick(v)}
        >
          {v}
        </button>
      ))}
    </div>
  )
}

/* A checklist whose first `done` steps are ticked and the next one is in progress. */
function Steps({ items, done }: { items: string[]; done: number }) {
  return (
    <ol className="hx-steps">
      {items.map((st, k) => (
        <li key={st} data-st={k < done ? 'done' : k === done ? 'now' : 'next'}>
          <span className="hx-check" aria-hidden="true" dangerouslySetInnerHTML={{ __html: k < done ? CHECK : '' }} />
          {st}
        </li>
      ))}
    </ol>
  )
}

export function HeroExplorer({ ex }: { ex: Explorer }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const auto = useRef<{ off: boolean } | null>(null)
  const runId = useRef(0)
  const idxId = useRef(0)
  const asked = useRef(false)
  const [mode, setMode] = useState<Mode>('search')
  const [more, setMore] = useState(false)

  /* Search */
  const [ci, setCi] = useState(0)
  const co: ExCompany = ex.companies[ci]
  const [typed, setTyped] = useState(co.domain.length)
  const [searched, setSearched] = useState(true)
  const [persona, setPersona] = useState(co.personas[0])
  const [wall, setWall] = useState(co.views[0]?.wall ?? '')
  const [kind, setKind] = useState<string | null>(null)
  const [tab, setTab] = useState<Tab>('facts')
  /* The event Evidence and Record show: picked from a row's link, or the first one the firm showed or sent. */
  const [sel, setSel] = useState<string | null>(null)
  const [hint, setHint] = useState(false)
  const [run, setRun] = useState<Run>(IDLE)

  /* Insights: which question, how much of it has typed, how far the plan is (-1 while it types, 3 when the report is
     written), how many sources are looked up, which row shows its evidence, and which companies the reader watches. */
  const [qi, setQi] = useState(0)
  const ins = ex.insights[qi]
  const [qTyped, setQTyped] = useState(0)
  const [stage, setStage] = useState(-1)
  const [got, setGot] = useState(0)
  const [openRow, setOpenRow] = useState<number | null>(null)
  const [watched, setWatched] = useState<string[]>([])

  /* The set up, once, the first time the window is on screen. Any click stops it where it is. */
  useEffect(() => {
    const el = rootRef.current
    if (!el || still() || !('IntersectionObserver' in window)) return
    const first = ex.companies[0]
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        const a = { off: false }
        auto.current = a
        void (async () => {
          setSearched(false)
          setTyped(0)
          await wait(600)
          for (let i = 1; i <= first.domain.length; i++) {
            if (a.off) return
            setTyped(i)
            await wait(50 + Math.random() * 40)
          }
          await wait(350)
          if (a.off) return
          setSearched(true)
          await wait(1400)
          if (a.off) return
          setHint(true)
        })()
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      if (auto.current) auto.current.off = true
      runId.current++
      idxId.current++
    }
  }, [ex])

  /* Every click goes through here: the set up stops and shows its finished frame. */
  const act = (f: () => void) => {
    if (auto.current && !auto.current.off) {
      auto.current.off = true
      setTyped(co.domain.length)
      setSearched(true)
    }
    setHint(false)
    f()
  }

  /* An insight run: the question types, the companies are found, each is looked up in the index, then the report is
     written. A newer run cancels an older one. */
  const ask = (k: number) => {
    const id = ++runId.current
    const live = () => id === runId.current
    const q = ex.insights[k]
    asked.current = true
    setQi(k)
    setOpenRow(null)
    setWatched([])
    if (still()) {
      setQTyped(q.question.length)
      setGot(q.sources.length)
      setStage(3)
      return
    }
    setQTyped(0)
    setGot(0)
    setStage(-1)
    void (async () => {
      await wait(250)
      for (let i = 1; i <= q.question.length; i++) {
        if (!live()) return
        setQTyped(i)
        await wait(16 + Math.random() * 22)
      }
      await wait(300)
      if (!live()) return
      setStage(0)
      await wait(900)
      if (!live()) return
      setStage(1)
      for (let i = 1; i <= q.sources.length; i++) {
        await wait(320)
        if (!live()) return
        setGot(i)
      }
      await wait(300)
      if (!live()) return
      setStage(2)
      await wait(800)
      if (live()) setStage(3)
    })()
  }
  const watch = (domains: string[]) => act(() => setWatched((w) => [...w, ...domains.filter((d) => !w.includes(d))]))

  /* Watch it, for a company not covered: the persona is made ready, each step ticks off, then the first facts arrive. */
  const progress = co.index ? [ex.ready(persona), ...co.index.steps] : []
  const indexIt = () =>
    act(() => {
      const id = ++idxId.current
      const live = () => id === idxId.current
      const facts = co.index?.first.length ?? 0
      setRun({ ...IDLE, on: true })
      setTab('facts')
      void (async () => {
        for (let i = 1; i <= progress.length; i++) {
          await wait(i === 1 ? 600 : 700)
          if (!live()) return
          setRun((r) => ({ ...r, steps: i }))
        }
        for (let i = 1; i <= facts; i++) {
          await wait(i === 1 ? 500 : 380)
          if (!live()) return
          setRun((r) => ({ ...r, facts: i }))
        }
        await wait(300)
        if (live()) setRun((r) => ({ ...r, done: true }))
      })()
    })

  const viewFor = (c: ExCompany, p: string, w: string) => c.views.find((v) => v.persona === p && v.wall === w)
  const pickCompany = (k: number) =>
    act(() => {
      const c = ex.companies[k]
      idxId.current++
      setCi(k)
      setTyped(c.domain.length)
      setSearched(true)
      setPersona(c.personas[0])
      setWall(c.views.find((v) => v.persona === c.personas[0])?.wall ?? c.walls[0] ?? '')
      setKind(null)
      setTab('facts')
      setRun(IDLE)
    })
  const pickPersona = (p: string) =>
    act(() => {
      setPersona(p)
      if (!viewFor(co, p, wall)) setWall(co.views.find((v) => v.persona === p)?.wall ?? wall)
    })
  const pickMode = (m: Mode) =>
    act(() => {
      setMode(m)
      if (m === 'insights' && !asked.current) ask(0)
    })
  /* Arriving from the nav (/#search, /#insights) opens that mode. */
  const { hash } = useLocation()
  const fromNav = useRef(pickMode)
  fromNav.current = pickMode
  useEffect(() => {
    if (hash === '#search' || hash === '#insights') fromNav.current(hash.slice(1) as Mode)
  }, [hash])
  const toggleKind = (v: string) =>
    act(() =>
      setKind((k) => {
        const n = co.kinds.find((d) => d.label === v)?.kind ?? null
        return k === n ? null : n
      }),
    )

  const asking = mode === 'insights'
  /* Search's output: the view for this persona behind this wall, or, for a company just indexed, its first events.
     The kind filter leaves acts in place, so every message still sits after what it follows. */
  const indexed = !co.covered && run.done && co.index
  const indexing = !co.covered && run.on && !run.done
  const view = co.covered ? viewFor(co, persona, wall) : undefined
  const all: ExEvent[] = indexed ? co.index!.first : (view?.events ?? [])
  const shown: ExEvent[] = indexing ? (co.index?.first.slice(0, run.facts) ?? []) : all.filter((e) => e.dir === 'act' || !kind || e.kind === kind)
  /* Drill-down: the events the firm showed or sent, each with its clean copy (Evidence) and its rows (Record). */
  const keyOf = (e: ExEvent) => e.at + e.text
  const items = all.filter((e) => e.evidence)
  const fi = Math.max(0, items.findIndex((e) => keyOf(e) === sel))
  const cur = items[fi]
  const record: ExRow | undefined = cur && {
    event: { firm: co.domain, persona, dir: cur.dir, ...cur.row },
    reads: (cur.facts ?? []).map(({ kind: k, value, reader }) => ({ kind: k, value, reader })),
  }
  const stepItem = (d: number) => act(() => setSel(keyOf(items[(fi + d + items.length) % items.length])))
  const showTabs = searched && (co.covered || !!indexed)
  const covered = ins.sources.filter((s) => s.cells).length
  const unwatched = ins.sources.filter((s) => !s.cells && !watched.includes(s.domain)).map((s) => s.domain)
  const watchBtn = (d: string) => (
    <button type="button" className="hx-watch" aria-label={`${ex.insight.watch} ${d}`} onClick={() => watch([d])}>
      {ex.insight.watch}
    </button>
  )

  const badge = asking
    ? stage >= 3
      ? ex.insight.done(ins.sources.length, covered)
      : stage >= 0
        ? ex.insight.collecting(got, ins.sources.length)
        : ''
    : !searched
      ? ''
      : co.covered
        ? ex.fromIndex
        : indexed
          ? co.index!.done
          : indexing
            ? ex.newRun
            : ex.notCovered
  const badgeState = asking ? (stage >= 3 ? 'in' : 'new') : indexing ? 'new' : co.covered || indexed ? 'in' : 'out'
  const btnLabel = asking ? ex.buttons.insights : ex.buttons.search

  /* The timeline: an act is a quiet line; what the firm showed or sent carries its facts (its reads, each tagged with
     the read's kind) and a link to its evidence. */
  const eventRows = (list: ExEvent[]) => (
    <ul className="hx-facts">
      {list.map((e) => (
        <li className="hx-fact" data-act={e.dir === 'act' ? '' : undefined} key={keyOf(e)}>
          <span className="hx-when">{e.at}</span>
          <span className="hx-kind">{e.kind}</span>
          <span className="hx-text">
            <span className="hx-what">{e.text}</span>
            {e.facts && (
              <span className="hx-tags">
                {e.facts.map((f) => (
                  <span className="hx-tag" key={f.kind}>
                    <span className="hx-tagk">{f.kind}</span>
                    {f.text}
                  </span>
                ))}
              </span>
            )}
          </span>
          {e.evidence ? (
            <button
              type="button"
              className="hx-link"
              aria-label={`${ex.openRecord}: ${e.text}`}
              title={ex.openRecord}
              onClick={() =>
                act(() => {
                  setSel(keyOf(e))
                  setTab('evidence')
                })
              }
            >
              <Svg html={LINK} />
            </button>
          ) : (
            <span />
          )}
        </li>
      ))}
    </ul>
  )

  return (
    <div ref={rootRef} className="v5-hx">
      <span id="search" className="hx-anchor" aria-hidden="true" />
      <span id="insights" className="hx-anchor" aria-hidden="true" />
      <p className="sr-only">{ex.said}</p>
      <div className="hx-win">
        {/* The box: a company to search, or a question to ask. */}
        <div className="hx-top">
          <div className="hx-bar" data-ask={asking ? '' : undefined}>
            <Svg html={asking ? ASK_IC : SEARCH_IC} className="hx-ic" />
            <p className="hx-q">
              {asking ? (
                qTyped ? (
                  <span className="hx-typed">{ins.question.slice(0, qTyped)}</span>
                ) : (
                  <span className="hx-ph">{ex.placeholder.insights}</span>
                )
              ) : co.domain.slice(0, typed) ? (
                <span className="hx-typed">{co.domain.slice(0, typed)}</span>
              ) : (
                <span className="hx-ph">{ex.placeholder.search}</span>
              )}
              {(asking ? stage < 0 : !searched) && <span className="hx-caret" aria-hidden="true" />}
            </p>
            <button type="button" className="hx-btn" aria-label={btnLabel} title={btnLabel} onClick={() => act(() => (asking ? ask(qi) : setSearched(true)))}>
              <Svg html={ENTER} />
            </button>
          </div>
          <div className="hx-row">
            <div className="hx-seg" role="group" aria-label="Mode">
              {(['search', 'insights'] as Mode[]).map((m) => (
                <button type="button" key={m} aria-pressed={mode === m} onClick={() => pickMode(m)}>
                  {ex.modes[m]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="hx-main" data-ask={asking ? '' : undefined}>
          {/* Left: what to ask, or the companies collected for the question. */}
          <div className="hx-side">
            {asking ? (
              <>
                <div className="hx-grp">
                  <p className="hx-gl">{ex.groups.asked}</p>
                  <div className="hx-chips">
                    <span className="hx-chip hx-fixed">{ins.persona}</span>
                  </div>
                </div>
                <div className="hx-grp">
                  <p className="hx-gl">
                    {ex.groups.sources}
                    {stage >= 1 && (
                      <span className="hx-count">
                        {got} / {ins.sources.length}
                      </span>
                    )}
                  </p>
                  {stage >= 1 ? (
                    <ul className="hx-srcs">
                      {ins.sources.map((s, k) => {
                        const st = k < got ? 'done' : k === got && stage === 1 ? 'now' : 'next'
                        const on = watched.includes(s.domain)
                        const state = s.cells ? ex.insight.inIndex : on ? ex.insight.watching : ex.insight.notIn
                        return (
                          <li key={s.domain} data-st={st} data-new={s.cells ? undefined : ''} data-watching={on ? '' : undefined} title={st === 'done' ? state : undefined}>
                            <span className="hx-dot" aria-hidden="true" />
                            <span className="hx-dom">{s.domain}</span>
                            {st === 'done' && <span className="sr-only">{state}</span>}
                          </li>
                        )
                      })}
                    </ul>
                  ) : (
                    <p className="hx-none">{ex.insight.waiting}</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="hx-grp">
                  <p className="hx-gl">
                    {ex.groups.persona}
                    {hint && <span className="hx-hint">{ex.hint}</span>}
                  </p>
                  <Chips items={co.personas} on={(v) => v === persona} pick={pickPersona} hint={hint ? co.personas[1] : undefined} />
                </div>
                {co.walls.length > 0 && (
                  <div className="hx-grp">
                    <p className="hx-gl">{ex.groups.wall}</p>
                    <Chips items={co.walls} on={(v) => v === wall} pick={(v) => act(() => setWall(v))} empty={(v) => !viewFor(co, persona, v)} />
                  </div>
                )}
                {co.kinds.length > 0 && (
                  <div className="hx-grp">
                    <p className="hx-gl">{ex.groups.kind}</p>
                    <Chips items={co.kinds.map((d) => d.label)} on={(v) => co.kinds.find((d) => d.label === v)?.kind === kind} pick={toggleKind} />
                  </div>
                )}
              </>
            )}
          </div>

          {/* Middle: the output, or the report. */}
          <div className="hx-out">
            <div className="hx-ohead">
              <span className="hx-lab">{asking ? ex.output.insights : ex.output.search}</span>
              {!asking && showTabs && (
                <div className="hx-tabs" role="group" aria-label={ex.output.search}>
                  {(['facts', 'evidence', 'record'] as Tab[]).map((x) => (
                    <button type="button" key={x} aria-pressed={tab === x} onClick={() => act(() => setTab(x))}>
                      {ex.tabs[x]}
                    </button>
                  ))}
                </div>
              )}
              {badge && (
                <span className="hx-badge" data-state={badgeState}>
                  {badge}
                </span>
              )}
            </div>

            <div className="hx-obody">
              {asking ? (
                <div className="hx-rep">
                  {stage >= 3 ? (
                    <div className="hx-ans">
                      <p className="hx-ans-t">{ins.answer}</p>
                      <div className="hx-stats">
                        {ins.stats.map((s) => (
                          <div className="hx-stat" key={s.l}>
                            <span className="hx-stat-v">{s.v}</span>
                            <span className="hx-stat-l">{s.l}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    stage >= 0 && <Steps items={ins.plan} done={stage} />
                  )}
                  {got > 0 && (
                    <div className="hx-tablewrap">
                      <table className="hx-table">
                        <thead>
                          <tr>
                            {ins.cols.map((c) => (
                              <th key={c}>{c}</th>
                            ))}
                            <th>
                              <span className="sr-only">{ex.openRecord}</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {ins.sources.slice(0, got).map((s, k) => (
                            <Fragment key={s.domain}>
                              <tr data-new={s.cells ? undefined : ''}>
                                <td className="hx-td-dom">{s.domain}</td>
                                {s.cells ? (
                                  <>
                                    <td>{s.cells[0]}</td>
                                    <td>{s.cells[1]}</td>
                                  </>
                                ) : (
                                  <td colSpan={2}>
                                    <span className="hx-missing">
                                      {watched.includes(s.domain) ? ins.watched : ex.insight.notIn}
                                      {!watched.includes(s.domain) && watchBtn(s.domain)}
                                    </span>
                                  </td>
                                )}
                                <td className="hx-td-link">
                                  {s.evidence && (
                                    <button
                                      type="button"
                                      className="hx-link"
                                      aria-expanded={openRow === k}
                                      aria-label={`${ex.openRecord}: ${s.domain}`}
                                      title={ex.openRecord}
                                      onClick={() => act(() => setOpenRow((o) => (o === k ? null : k)))}
                                    >
                                      <Svg html={LINK} />
                                    </button>
                                  )}
                                </td>
                              </tr>
                              {openRow === k && s.evidence && (
                                <tr className="hx-evrow">
                                  <td colSpan={4}>{s.evidence}</td>
                                </tr>
                              )}
                            </Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {stage >= 3 && covered < ins.sources.length && (
                    <div className="hx-callout">
                      <p>{unwatched.length ? ex.insight.missing(unwatched.length, ins.noun) : ex.insight.allWatched(ins.persona)}</p>
                      {unwatched.length > 0 && (
                        <button type="button" className="hx-go" onClick={() => watch(unwatched)}>
                          {ex.insight.watchAll(unwatched.length)}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ) : !searched ? null : indexing ? (
                <div className="hx-page">
                  <p className="hx-page-h">{co.index?.heading}</p>
                  <Steps items={progress} done={run.steps} />
                  {shown.length > 0 && eventRows(shown)}
                </div>
              ) : !co.covered && !indexed ? (
                <div className="hx-est">
                  <p className="hx-empty-t">{ex.unindexed.title}</p>
                  <p className="hx-est-b">{ex.unindexed.line}</p>
                  {co.index && (
                    <button type="button" className="hx-go" onClick={indexIt}>
                      {ex.unindexed.cta}
                    </button>
                  )}
                </div>
              ) : (tab === 'evidence' || tab === 'record') && cur ? (
                <div className="hx-drill">
                  <div className="hx-drillhead">
                    <p className="hx-drillfact">
                      <span className="hx-when">{cur.at}</span>
                      <span className="hx-kind">{cur.kind}</span>
                      <span>{cur.text}</span>
                    </p>
                    {items.length > 1 && (
                      <span className="hx-stepper">
                        <button type="button" aria-label="Previous event" onClick={() => stepItem(-1)}>
                          ‹
                        </button>
                        <span>
                          {fi + 1} of {items.length}
                        </span>
                        <button type="button" aria-label="Next event" onClick={() => stepItem(1)}>
                          ›
                        </button>
                      </span>
                    )}
                  </div>
                  {tab === 'evidence' && cur.evidence ? (
                    <div className="hx-ev">
                      <dl className="hx-ev-head">
                        {cur.evidence.head.map(([k, v]) => (
                          <Fragment key={k}>
                            <dt>{k}</dt>
                            <dd>{v}</dd>
                          </Fragment>
                        ))}
                      </dl>
                      <div className="hx-ev-body">
                        {cur.evidence.body.map((l) => (
                          <p key={l}>{l}</p>
                        ))}
                      </div>
                      <ul className="hx-ev-proof">
                        {cur.evidence.proof.map((l) => (
                          <li key={l}>{l}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    record && (
                      <pre className="hx-rec">
                        <Json v={record} />
                      </pre>
                    )
                  )}
                </div>
              ) : shown.length ? (
                eventRows(shown)
              ) : (
                <p className="hx-none">{ex.none}</p>
              )}
            </div>

          </div>
        </div>
      </div>
      {/* Other companies, or other questions, to try: under the window, folded until asked for. */}
      <div className="hx-more">
        <button type="button" className="hx-morebtn" aria-expanded={more} onClick={() => act(() => setMore((m) => !m))}>
          {ex.tryLabel[mode]}
          <span className="hx-chev" aria-hidden="true" />
        </button>
        {more && (
          <div className="hx-try">
            {asking
              ? ex.insights.map((q, k) => (
                  <button type="button" key={q.label} className="hx-trybtn hx-tryq" aria-pressed={k === qi} onClick={() => act(() => ask(k))}>
                    <span className="hx-trykind">{q.kind}</span>
                    {q.label}
                  </button>
                ))
              : ex.companies.map((c, k) => (
                  <button type="button" key={c.domain} className="hx-trybtn" aria-pressed={k === ci} onClick={() => pickCompany(k)}>
                    <span className="hx-trykind">{c.kind}</span>
                    {c.domain}
                    {!c.covered && <span className="hx-new">new</span>}
                  </button>
                ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* The record as the index stores it: keys in ink, values in green, nested rows indented. */
function Json({ v, d = 0 }: { v: ExRow | ExRow[string]; d?: number }): ReactNode {
  if (Array.isArray(v)) {
    if (v.every((x) => typeof x === 'string'))
      return (
        <>
          {'['}
          {v.map((x, i) => (
            <span key={i}>
              {i ? ', ' : ''}
              <span className="hx-s">"{x as string}"</span>
            </span>
          ))}
          {']'}
        </>
      )
    const pad = '  '.repeat(d + 1)
    return (
      <>
        {'[\n'}
        {v.map((x, i) => (
          <span key={i}>
            {pad}
            <Json v={x} d={d + 1} />
            {i < v.length - 1 ? ',\n' : '\n'}
          </span>
        ))}
        {'  '.repeat(d)}
        {']'}
      </>
    )
  }
  if (typeof v === 'object') {
    const rows = Object.entries(v)
    const pad = '  '.repeat(d + 1)
    return (
      <>
        {'{\n'}
        {rows.map(([k, x], i) => (
          <span key={k}>
            {pad}
            <span className="hx-k">"{k}"</span>: <Json v={x} d={d + 1} />
            {i < rows.length - 1 ? ',\n' : '\n'}
          </span>
        ))}
        {'  '.repeat(d)}
        {'}'}
      </>
    )
  }
  return typeof v === 'string' ? <span className="hx-s">"{v}"</span> : <span className="hx-s">{String(v)}</span>
}
