import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import type { ExCompany, ExEvent, ExRow, ExTab, Explorer } from '../../content/types'
import { Evidence } from './Evidence'
import { evKey, evidenceGroups, familyOf } from './evidenceGroups'
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
   shows its finished frame.
   12 Nov (James): the examples cover the schema's kinds, not mostly emails and pages (screens, texts, ads, push,
   in-app, chat, calls, post, receipts, statements, documents, displays, job posts, DNS, registers), and Evidence draws
   each the way it arrived (Capture). A chip row shows at most `limit` chips (persona 2, wall 3, kind 4); the rest sit
   behind "…". Persona and wall are one at a time, and a chip picked from "…" takes the last place in the row; kinds
   are many at once (none on is every kind), so one picked from "…" is added and the row stays. Facts shows 5 events a
   page, with back and next.
   12 Nov, later (James): one console for Home and /sample-output. A Facts row opens its record (the event row and its
   reads) in place, so there is no Record tab; Evidence draws the events in view the way each kind arrived, one kind at
   a time (components/v5/Evidence). Wall is one at a time or none (every wall, merged in time order). `tabs` (the
   sample page) puts pill tabs over the window, each picking a company, a persona, a wall and kinds, and opening
   Evidence; `autoplay` and `anchors` are Home's (the typed set up, and /#search and /#insights). */

type Mode = 'search' | 'insights'
type Tab = 'facts' | 'evidence'
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
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const minuteOf = (at: string) => {
  const m = at.match(/(\d{1,2}) (\w{3})\w*(?: (\d{2}):(\d{2}))?/)
  return m ? ((MONTHS.indexOf(m[2]) * 31 + Number(m[1])) * 24 + Number(m[3] ?? 0)) * 60 + Number(m[4] ?? 0) : 0
}
const PUBLIC = ['Ad', 'Job post', 'DNS', 'Register']
const still = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const Svg = ({ html, className }: { html: string; className?: string }) => (
  <span className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
)

export function Chips({
  items,
  on,
  pick,
  empty,
  hint,
  limit,
  more = 'More',
  multi,
}: {
  items: string[]
  on: (v: string) => boolean
  pick: (v: string) => void
  empty?: (v: string) => boolean
  hint?: string
  limit?: number
  more?: string
  /* Many can be on at once: a chip picked from the menu is added, the row stays as it is and the menu stays open. */
  multi?: boolean
}) {
  const [open, setOpen] = useState(false)
  let shown = items
  if (limit && items.length > limit) {
    const at = items.findIndex(on)
    shown = !multi && at >= limit ? [...items.slice(0, limit - 1), items[at]] : items.slice(0, limit)
  }
  const rest = items.filter((v) => !shown.includes(v))
  const chip = (v: string, className: string) => (
    <button
      type="button"
      className={className}
      key={v}
      aria-pressed={on(v)}
      data-empty={empty?.(v) ? '' : undefined}
      data-hint={hint === v ? '' : undefined}
      onClick={() => {
        if (!multi) setOpen(false)
        pick(v)
      }}
    >
      {v}
    </button>
  )
  return (
    <div className="hx-chips">
      {shown.map((v) => chip(v, 'hx-chip'))}
      {rest.length > 0 && (
        <button
          type="button"
          className="hx-chip hx-chipmore"
          aria-expanded={open}
          aria-label={more}
          title={more}
          data-on={rest.some(on) ? '' : undefined}
          onClick={() => setOpen((o) => !o)}
        >
          …
        </button>
      )}
      {open && rest.length > 0 && (
        <div className="hx-chipmenu" role="group" aria-label={more}>
          {rest.map((v) => chip(v, 'hx-chipopt'))}
        </div>
      )}
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

export function HeroExplorer({
  ex,
  tabs,
  tabsLabel,
  start = 'facts',
  autoplay = true,
  anchors = true,
}: {
  ex: Explorer
  tabs?: ExTab[]
  tabsLabel?: string
  start?: Tab
  autoplay?: boolean
  anchors?: boolean
}) {
  const t0 = tabs?.[0]
  const rootRef = useRef<HTMLDivElement>(null)
  const auto = useRef<{ off: boolean } | null>(null)
  const runId = useRef(0)
  const idxId = useRef(0)
  const asked = useRef(false)
  const [mode, setMode] = useState<Mode>('search')
  const [more, setMore] = useState(false)

  /* Search */
  const [ci, setCi] = useState(t0 ? Math.max(0, ex.companies.findIndex((c) => c.domain === t0.company)) : 0)
  const co: ExCompany = ex.companies[ci]
  const [typed, setTyped] = useState(co.domain.length)
  const [searched, setSearched] = useState(true)
  const [persona, setPersona] = useState(t0?.persona ?? co.personas[0])
  /* One wall, or none for every wall. */
  const [wall, setWall] = useState<string | null>(t0 ? t0.wall : (co.views[0]?.wall ?? null))
  const [kinds, setKinds] = useState<string[]>(t0?.kinds ?? [])
  /* The tab last picked over the window (the sample page). */
  const [ti, setTi] = useState(t0 ? 0 : -1)
  /* The Facts row whose record is open. */
  const [openRec, setOpenRec] = useState<string | null>(null)
  /* Evidence's kind, when stepped to rather than picked from a row. */
  const [fam, setFam] = useState<string | null>(null)
  /* The Facts list shows 5 events a page. */
  const [page, setPage] = useState(0)
  const [tab, setTab] = useState<Tab>(start)
  /* The event Evidence shows: picked from a row's link or in Evidence, or the first of its kind. */
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
    if (!autoplay || !el || still() || !('IntersectionObserver' in window)) return
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
  }, [ex, autoplay])

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

  const viewFor = (c: ExCompany, p: string, w: string) =>
    c.views.find((v) => v.persona === p && v.wall === w) ?? c.views.find((v) => v.persona === '*' && v.wall === w)
  /* Every wall at once: this persona's views and the public ones, merged in time order, each event once. */
  const eventsFor = (c: ExCompany, p: string, w: string | null): ExEvent[] => {
    if (w) return viewFor(c, p, w)?.events ?? []
    const seen = new Set<string>()
    return c.views
      .filter((v) => v.persona === p || v.persona === '*')
      .flatMap((v) => v.events)
      .filter((e) => (seen.has(evKey(e)) ? false : (seen.add(evKey(e)), true)))
      .sort((a, b) => minuteOf(a.at) - minuteOf(b.at))
  }
  const clearOutput = () => {
    setPage(0)
    setOpenRec(null)
    setSel(null)
    setFam(null)
  }
  const pickCompany = (k: number) =>
    act(() => {
      const c = ex.companies[k]
      idxId.current++
      setCi(k)
      setTyped(c.domain.length)
      setSearched(true)
      setPersona(c.personas[0])
      setWall(c.views.find((v) => v.persona === c.personas[0])?.wall ?? null)
      setKinds([])
      clearOutput()
      setTi(-1)
      setTab(start)
      setRun(IDLE)
    })
  const pickPersona = (p: string) =>
    act(() => {
      setPersona(p)
      clearOutput()
      if (wall && !viewFor(co, p, wall)) setWall(co.views.find((v) => v.persona === p)?.wall ?? wall)
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
    if (anchors && (hash === '#search' || hash === '#insights')) fromNav.current(hash.slice(1) as Mode)
  }, [hash, anchors])
  /* A tab over the window: its company, persona, wall and kinds, shown as evidence. */
  const pickTab = (k: number) =>
    act(() => {
      const t = tabs![k]
      idxId.current++
      const c = Math.max(0, ex.companies.findIndex((x) => x.domain === t.company))
      setTi(k)
      setMode('search')
      setCi(c)
      setTyped(ex.companies[c].domain.length)
      setSearched(true)
      setPersona(t.persona)
      setWall(t.wall)
      setKinds(t.kinds)
      clearOutput()
      setTab('evidence')
      setRun(IDLE)
    })
  const toggleKind = (v: string) =>
    act(() => {
      const n = co.kinds.find((d) => d.label === v)?.kind
      if (!n) return
      setKinds((ks) => (ks.includes(n) ? ks.filter((k) => k !== n) : [...ks, n]))
      clearOutput()
    })

  const asking = mode === 'insights'
  /* Search's output: the view for this persona behind this wall (or every wall), or, for a company just indexed, its
     first events. The kind filter keeps the acts that what it shows follows. */
  const indexed = !co.covered && run.done && co.index
  const indexing = !co.covered && run.on && !run.done
  const all: ExEvent[] = indexed ? co.index!.first : co.covered ? eventsFor(co, persona, wall) : []
  /* With kinds picked, an act stays only when something shown follows it before the next act. */
  const keepKind = (e: ExEvent) => !kinds.length || kinds.includes(e.kind)
  const kept = all.filter((e, i) => {
    if (e.dir !== 'act') return keepKind(e)
    if (!kinds.length) return true
    for (let j = i + 1; j < all.length && all[j].dir !== 'act'; j++) if (keepKind(all[j])) return true
    return false
  })
  const shown: ExEvent[] = indexing ? (co.index?.first.slice(0, run.facts) ?? []) : kept
  const PER = 5
  const pages = Math.max(1, Math.ceil(shown.length / PER))
  const pg = Math.min(page, pages - 1)
  /* A row's record: the event row and its reads. Public data (an ad library, a job board, DNS, a register) has no
     persona. */
  const recordOf = (e: ExEvent): ExRow => ({
    event: { firm: co.domain, ...(PUBLIC.includes(e.kind) ? {} : { persona }), dir: e.dir, ...e.row },
    reads: (e.facts ?? []).map(({ kind: k, value, reader }) => ({ kind: k, value, reader })),
  })
  /* Evidence: the events in view, grouped by how each kind is drawn; the group of the picked event, or the one stepped
     to, or the first. */
  const groups = evidenceGroups(shown.filter((e) => e.dir !== 'act'))
  const picked = shown.find((e) => evKey(e) === sel && e.evidence)
  const gi = picked ? groups.findIndex((g) => g.id === familyOf(picked)) : Math.max(0, groups.findIndex((g) => g.id === fam))
  const group = groups[gi]
  const cur = picked && group && familyOf(picked) === group.id ? picked : group?.events[0]
  const stepGroup = (d: number) =>
    act(() => {
      setFam(groups[(gi + d + groups.length) % groups.length].id)
      setSel(null)
    })
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
  /* The "…" chip's name: chrome, not copy. */
  const moreLabel = (group: string) => `More ${group.toLowerCase()}s`

  /* The timeline: an act is a quiet line; what the firm showed or sent carries its facts (its reads, each tagged with
     the read's kind) and a link to its evidence. */
  const eventRows = (list: ExEvent[]) => (
    <ul className="hx-facts">
      {list.map((e) => {
        const k = evKey(e)
        const open = openRec === k
        const cells = (
          <>
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
          </>
        )
        return (
          <li className="hx-fact" data-act={e.dir === 'act' ? '' : undefined} data-open={open ? '' : undefined} key={k}>
            {e.row ? (
              <button type="button" className="hx-rowhit" aria-expanded={open} onClick={() => act(() => setOpenRec(open ? null : k))}>
                {cells}
              </button>
            ) : (
              <div className="hx-rowhit">{cells}</div>
            )}
            {e.evidence ? (
              <button
                type="button"
                className="hx-link"
                aria-label={`${ex.openRecord}: ${e.text}`}
                title={ex.openRecord}
                onClick={() =>
                  act(() => {
                    setSel(k)
                    setTab('evidence')
                  })
                }
              >
                <Svg html={LINK} />
              </button>
            ) : (
              <span />
            )}
            {open && (
              <pre className="hx-rec hx-rowrec">
                <Json v={recordOf(e)} />
              </pre>
            )}
          </li>
        )
      })}
    </ul>
  )

  return (
    <div ref={rootRef} className="v5-hx">
      {anchors && (
        <>
          <span id="search" className="hx-anchor" aria-hidden="true" />
          <span id="insights" className="hx-anchor" aria-hidden="true" />
        </>
      )}
      <p className="sr-only">{ex.said}</p>
      {tabs && (
        <div className="ob-ptabs hx-ptabs" role="group" aria-label={tabsLabel}>
          {tabs.map((t, k) => (
            <button key={t.label} type="button" className={'ob-ptab' + (k === ti ? ' is-selected' : '')} aria-pressed={k === ti} onClick={() => pickTab(k)}>
              {t.label}
            </button>
          ))}
        </div>
      )}
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
        </div>

        {/* Search or Insights: folder tabs under the box, the picked one open into everything below it. */}
        <div className="hx-ftabs hx-mtabs" role="group" aria-label="Mode">
          {(['search', 'insights'] as Mode[]).map((m) => (
            <button type="button" className="hx-ftab" key={m} aria-pressed={mode === m} onClick={() => pickMode(m)}>
              {ex.modes[m]}
            </button>
          ))}
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
                  <Chips key={`${co.domain}-persona`} items={co.personas} on={(v) => v === persona} pick={pickPersona} hint={hint ? co.personas[1] : undefined} limit={2} more={moreLabel(ex.groups.persona)} />
                </div>
                {co.walls.length > 0 && (
                  <div className="hx-grp">
                    <p className="hx-gl">{ex.groups.wall}</p>
                    <Chips key={`${co.domain}-wall`} items={co.walls} on={(v) => v === wall} pick={(v) => act(() => { setWall((w) => (w === v ? null : v)); clearOutput() })} empty={(v) => !viewFor(co, persona, v)} limit={3} more={moreLabel(ex.groups.wall)} />
                  </div>
                )}
                {co.kinds.length > 0 && (
                  <div className="hx-grp">
                    <p className="hx-gl">{ex.groups.kind}</p>
                    <Chips key={`${co.domain}-kind`} items={co.kinds.map((d) => d.label)} on={(v) => kinds.includes(co.kinds.find((d) => d.label === v)?.kind ?? '')} pick={toggleKind} limit={4} more={moreLabel(ex.groups.kind)} multi />
                  </div>
                )}
              </>
            )}
          </div>

          {/* Middle: the output, or the report. */}
          <div className="hx-out">
            {/* Facts or Evidence: folder tabs on the output's top edge; one fixed tab names the report or an empty output. */}
            <div className="hx-ftabs hx-ohead">
              {!asking && showTabs ? (
                <div className="hx-ftabset" role="group" aria-label={ex.output.search}>
                  {(['facts', 'evidence'] as Tab[]).map((x) => (
                    <button type="button" className="hx-ftab" key={x} aria-pressed={tab === x} onClick={() => act(() => setTab(x))}>
                      {ex.tabs[x]}
                    </button>
                  ))}
                </div>
              ) : (
                <span className="hx-ftab" data-on="">
                  {asking ? ex.output.insights : ex.output.search}
                </span>
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
              ) : tab === 'evidence' && group && cur ? (
                <Evidence groups={groups} group={group} sel={cur} pick={(e) => act(() => setSel(evKey(e)))} step={stepGroup} />
              ) : shown.length ? (
                <>
                  {eventRows(shown.slice(pg * PER, pg * PER + PER))}
                  {pages > 1 && (
                    <div className="hx-pager">
                      <span className="hx-stepper">
                        <button type="button" aria-label="Earlier events" disabled={pg === 0} onClick={() => act(() => setPage(pg - 1))}>
                          ‹
                        </button>
                        <button type="button" aria-label="Later events" disabled={pg === pages - 1} onClick={() => act(() => setPage(pg + 1))}>
                          ›
                        </button>
                      </span>
                    </div>
                  )}
                </>
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
export function Json({ v, d = 0 }: { v: ExRow | ExRow[string]; d?: number }): ReactNode {
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
