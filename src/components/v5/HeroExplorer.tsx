import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import type { ExCompany, ExConsole, ExEvent, ExRow, ExTab } from '../../content/types'
import { ENTER, SEARCH_IC, Steps, Svg, still, wait } from './consoleBits'
import { Evidence, Look } from './Evidence'
import { evKey, evidenceGroups, familyOf } from './evidenceGroups'
import './HeroExplorer.css'

/* The index as a console (9 Nov, James, after Exa's): one component for Home, /sample-output and /lookup. What changes
   from page to page is the data and the Insights.
   13 Nov (James): the box on top (the company searched, or the page's question), then two folder tabs, Search and
   Insights, and under the window the other sources to try (or the page's own). Insights shows whatever component the page sends
   (`insights`), as the AI writes it in production: Home and /sample-output send their question run
   (components/v5/InsightRun), /lookup its store's answers. Search is the index as tables hold it: one company's
   timeline, filtered by the schema's own columns, persona, wall and kind. Its Facts and Evidence are underline tabs.
   Facts lists every event as a card on a timeline (time, a line with a node, the card: kind and wall, what happened,
   its facts), a day heading where the day changes, 5 a page. A card opens in place to its Evidence (the clean copy:
   its headers, as it arrived, its facts with their readers, its proof) and its Record (the event row and its reads);
   an event with no clean copy, such as an act, opens to its Record alone. Evidence, the tab, shows only what can be
   previewed: the events in view that have a clean copy, drawn the way each kind arrived, one kind at a time
   (components/v5/Evidence). Home and /sample-output open on Search, /lookup on Insights (`first`).
   Search on Home: only the set up plays by itself, once: the first company types in and the persona row pulses. A
   company not covered has Watch it, which runs its first visit. A chip row shows at most `limit` chips (persona 2,
   wall 3, kind 4); the rest sit behind "…". Persona and wall are one at a time (no wall is every wall, merged in time
   order); kinds are many at once (none on is every kind). `tabs` (the sample page) puts pill tabs over the window,
   each picking a company, a persona, a wall and kinds, and opening Evidence. `autoplay` and `anchors` are Home's (the
   typed set up, and /#search and /#insights from the nav). `bar` hides the company box where the page has its own
   (the lookup). Under reduced motion nothing types. */

type Mode = 'search' | 'insights'
type Tab = 'facts' | 'evidence'
type Run = { on: boolean; steps: number; facts: number; done: boolean }
const IDLE: Run = { on: false, steps: 0, facts: 0, done: false }
/* What Insights can do in the console: open Search, at an event when it names one. */
export type ConsoleGo = { search: (event?: ExEvent) => void }
/* What a page sends to Insights: its panel and, while Insights is open, what sits in the box over the tabs and under
   the window (Home's question and its other questions). `opened` runs the first time the tab opens. */
export type ConsoleInsights = { panel: ReactNode; bar?: ReactNode; more?: ReactNode; opened?: () => void }
export type ConsoleProps = {
  ex: ExConsole
  insights?: ConsoleInsights | ((go: ConsoleGo) => ConsoleInsights)
  first?: Mode
  tabs?: ExTab[]
  tabsLabel?: string
  start?: Tab
  autoplay?: boolean
  anchors?: boolean
  bar?: boolean
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const minuteOf = (at: string) => {
  const m = at.match(/(\d{1,2}) (\w{3})\w*(?: (\d{2}):(\d{2}))?/)
  return m ? ((MONTHS.indexOf(m[2]) * 31 + Number(m[1])) * 24 + Number(m[3] ?? 0)) * 60 + Number(m[4] ?? 0) : 0
}
/* "5 Nov 10:02" is the day "5 Nov" at "10:02"; a time alone has no day heading; a day alone has no time. */
const dayTime = (at: string) => {
  const m = at.match(/^(.*?)\s*(\d{1,2}:\d{2})(?::\d{2})?$/)
  return m ? { day: m[1], time: m[2] } : { day: at, time: '' }
}
const PUBLIC = ['Ad', 'Job post', 'DNS', 'Register']
const PER = 5

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

/* An opened card: Evidence (the clean copy) when the event has one, and Record (its row and reads). */
function Drawer({ e, record, ex }: { e: ExEvent; record: ExRow; ex: ExConsole }) {
  const ev = e.evidence
  const [t, setT] = useState<'evidence' | 'record'>(ev ? 'evidence' : 'record')
  const tab = (x: 'evidence' | 'record') => (
    <button type="button" role="tab" className="hx-utab" aria-selected={t === x} onClick={() => setT(x)}>
      {ex.tabs[x]}
    </button>
  )
  return (
    <div className="hx-drawer">
      <div className="hx-utabs" role="tablist">
        {ev && tab('evidence')}
        {tab('record')}
      </div>
      {t === 'evidence' && ev ? (
        <div className="hx-dpanel">
          {ev.head.length > 0 && (
            <dl className="hx-ev-head">
              {ev.head.map(([k, v]) => (
                <Fragment key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </Fragment>
              ))}
            </dl>
          )}
          <div className="hx-dlook">
            <Look e={e} />
            {ev.look && ev.body.length > 0 && (
              <div className="sr-only">
                {ev.body.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            )}
          </div>
          {e.facts && e.facts.length > 0 && (
            <div className="hx-dfacts">
              <p className="hx-gl">{ex.tabs.facts}</p>
              {e.facts.map((f) => (
                <p className="hx-dfact" key={f.kind}>
                  <span className="hx-tagk">{f.kind}</span> {f.text} <span className="hx-reader">· {f.reader}</span>
                </p>
              ))}
            </div>
          )}
          {ev.proof.length > 0 && (
            <ul className="hx-ev-proof">
              {ev.proof.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <pre className="hx-rec">
          <Json v={record} />
        </pre>
      )}
    </div>
  )
}

export function HeroExplorer({
  ex,
  insights,
  first = 'search',
  tabs,
  tabsLabel,
  start = 'facts',
  autoplay = true,
  anchors = true,
  bar = true,
}: ConsoleProps) {
  const t0 = tabs?.[0]
  const rootRef = useRef<HTMLDivElement>(null)
  const auto = useRef<{ off: boolean } | null>(null)
  const idxId = useRef(0)
  const [mode, setMode] = useState<Mode>(insights ? first : 'search')
  const [more, setMore] = useState(false)
  const opened = useRef(false)

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
  /* The card that is open. */
  const [openRec, setOpenRec] = useState<string | null>(null)
  /* Evidence's kind, when stepped to rather than picked. */
  const [fam, setFam] = useState<string | null>(null)
  const [page, setPage] = useState(0)
  const [tab, setTab] = useState<Tab>(start)
  /* The event Evidence shows: picked in Evidence, or the first of its kind. */
  const [sel, setSel] = useState<string | null>(null)
  const [hint, setHint] = useState(false)
  const [run, setRun] = useState<Run>(IDLE)

  /* The set up, once, the first time Search is on screen. Any click stops it where it is. */
  useEffect(() => {
    const el = rootRef.current
    if (!autoplay || first !== 'search' || !el || still() || !('IntersectionObserver' in window)) return
    const c0 = ex.companies[0]
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
          for (let i = 1; i <= c0.domain.length; i++) {
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
      idxId.current++
    }
  }, [ex, autoplay, first])

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
  /* Every wall at once: this persona's views and the public ones, merged in time order, each event once. Each event
     keeps the wall it sits behind. */
  const walls = new Map<string, string>()
  const eventsFor = (c: ExCompany, p: string, w: string | null): ExEvent[] => {
    if (w) {
      const list = viewFor(c, p, w)?.events ?? []
      for (const e of list) walls.set(evKey(e), w)
      return list
    }
    return c.views
      .filter((v) => v.persona === p || v.persona === '*')
      .flatMap((v) => v.events.map((e) => (walls.has(evKey(e)) ? null : (walls.set(evKey(e), v.wall), e))))
      .filter((e): e is ExEvent => !!e)
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
  const pickMode = (m: Mode) => act(() => setMode(m))
  /* The first time Insights is open (picked, from the nav, or the page's first tab), the page's Insights hears of it. */
  useEffect(() => {
    if (mode !== 'insights' || opened.current) return
    opened.current = true
    ins?.opened?.()
  })
  /* Arriving from the nav (/#search, /#insights) opens that tab. */
  const { hash } = useLocation()
  const fromNav = useRef(pickMode)
  fromNav.current = pickMode
  useEffect(() => {
    if (anchors && (hash === '#search' || (hash === '#insights' && insights))) fromNav.current(hash.slice(1) as Mode)
  }, [hash, anchors, insights])
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
  const pages = Math.max(1, Math.ceil(shown.length / PER))
  const pg = Math.min(page, pages - 1)
  /* A card's record: the event row and its reads. Public data (an ad library, a job board, DNS, a register) has no
     persona. */
  const recordOf = (e: ExEvent): ExRow => ({
    event: { firm: co.domain, ...(PUBLIC.includes(e.kind) ? {} : { persona }), dir: e.dir, ...e.row },
    reads: (e.facts ?? []).map(({ kind: k, value, reader }) => ({ kind: k, value, reader })),
  })
  /* Evidence: the events in view that have a clean copy, grouped by how each kind is drawn; the group of the picked
     event, or the one stepped to, or the first. */
  const groups = evidenceGroups(shown)
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
  const badge = !searched ? '' : co.covered ? ex.fromIndex : indexed ? co.index!.done : indexing ? ex.newRun : ex.notCovered
  const badgeState = indexing ? 'new' : co.covered || indexed ? 'in' : 'out'
  /* The "…" chip's name: chrome, not copy. */
  const moreLabel = (group: string) => `More ${group.toLowerCase()}s`
  const go: ConsoleGo = {
    search: (e) =>
      act(() => {
        setMode('search')
        setTab('facts')
        const at = e ? shown.findIndex((x) => evKey(x) === evKey(e)) : -1
        if (at < 0) return
        setPage(Math.floor(at / PER))
        setOpenRec(evKey(e!))
      }),
  }

  /* The timeline: a day heading where the day changes, then each event as a card. A card with anything more to show
     (a clean copy, a record, facts) opens in place. */
  const timeline = (list: ExEvent[]) => {
    let lastDay = ''
    return (
      <ol className="hx-tl">
        {list.map((e) => {
          const k = evKey(e)
          const open = openRec === k
          const { day, time } = dayTime(e.at)
          const newDay = day && day !== lastDay
          lastDay = day || lastDay
          const w = walls.get(k)
          const can = !!(e.row || e.evidence || e.facts?.length)
          const card = (
            <>
              <span className="hx-meta">
                {e.kind}
                {w && ` · ${w}`}
              </span>
              <span className="hx-what">{e.text}</span>
              {e.facts && e.facts.length > 0 && (
                <span className="hx-tags">
                  {e.facts.map((f) => (
                    <span className="hx-tag" key={f.kind}>
                      <span className="hx-tagk">{f.kind}</span>
                      {f.text}
                    </span>
                  ))}
                </span>
              )}
            </>
          )
          return (
            <Fragment key={k}>
              {newDay && <li className="hx-day">{day}</li>}
              <li className="hx-ev" data-act={e.dir === 'act' ? '' : undefined} data-open={open ? '' : undefined}>
                <span className="hx-time">{time}</span>
                <span className="hx-rail" aria-hidden="true">
                  <span className="hx-node" />
                </span>
                <div className="hx-evbody">
                  {can ? (
                    <button type="button" className="hx-card" aria-expanded={open} onClick={() => act(() => setOpenRec(open ? null : k))}>
                      {card}
                    </button>
                  ) : (
                    <div className="hx-card">{card}</div>
                  )}
                  {open && <Drawer key={k} e={e} record={recordOf(e)} ex={ex} />}
                </div>
              </li>
            </Fragment>
          )
        })}
      </ol>
    )
  }

  /* The box over the tabs: the company searched (Search), or what the page's Insights puts there. */
  const searchBar = bar && (
    <div className="hx-bar">
      <Svg html={SEARCH_IC} className="hx-ic" />
      <p className="hx-q">
        {co.domain.slice(0, typed) ? <span className="hx-typed">{co.domain.slice(0, typed)}</span> : <span className="hx-ph">{ex.placeholder.search}</span>}
        {!searched && <span className="hx-caret" aria-hidden="true" />}
      </p>
      <button type="button" className="hx-btn" aria-label={ex.buttons.search} title={ex.buttons.search} onClick={() => act(() => setSearched(true))}>
        <Svg html={ENTER} />
      </button>
    </div>
  )

  const search = (
    <>
      <div className="hx-main">
        {/* Left: who asks, behind which wall, which kinds. */}
        <div className="hx-side">
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
              <Chips
                key={`${co.domain}-wall`}
                items={co.walls}
                on={(v) => v === wall}
                pick={(v) =>
                  act(() => {
                    setWall((w) => (w === v ? null : v))
                    clearOutput()
                  })
                }
                empty={(v) => !viewFor(co, persona, v)}
                limit={3}
                more={moreLabel(ex.groups.wall)}
              />
            </div>
          )}
          {co.kinds.length > 0 && (
            <div className="hx-grp">
              <p className="hx-gl">{ex.groups.kind}</p>
              <Chips key={`${co.domain}-kind`} items={co.kinds.map((d) => d.label)} on={(v) => kinds.includes(co.kinds.find((d) => d.label === v)?.kind ?? '')} pick={toggleKind} limit={4} more={moreLabel(ex.groups.kind)} multi />
            </div>
          )}
        </div>

        {/* Right: Facts or Evidence. */}
        <div className="hx-out">
          <div className="hx-utabs hx-ohead">
            {showTabs ? (
              <div className="hx-utabset" role="tablist" aria-label={ex.output.search}>
                {(['facts', 'evidence'] as Tab[]).map((x) => (
                  <button type="button" role="tab" className="hx-utab" key={x} aria-selected={tab === x} onClick={() => act(() => setTab(x))}>
                    {ex.tabs[x]}
                  </button>
                ))}
              </div>
            ) : (
              <span className="hx-utab" data-on="">
                {ex.output.search}
              </span>
            )}
            {badge && (
              <span className="hx-badge" data-state={badgeState}>
                {badge}
              </span>
            )}
          </div>

          <div className="hx-obody">
            {!searched ? null : indexing ? (
              <div className="hx-page">
                <p className="hx-page-h">{co.index?.heading}</p>
                <Steps items={progress} done={run.steps} />
                {shown.length > 0 && timeline(shown)}
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
            ) : tab === 'evidence' ? (
              group && cur ? <Evidence groups={groups} group={group} sel={cur} pick={(e) => act(() => setSel(evKey(e)))} step={stepGroup} /> : <p className="hx-none">{ex.none}</p>
            ) : shown.length ? (
              <>
                {timeline(shown.slice(pg * PER, pg * PER + PER))}
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
    </>
  )

  /* Under the window: other companies to try (Search), or what the page's Insights puts there. */
  const searchMore = ex.companies.length > 1 && (
    <div className="hx-more">
      <button type="button" className="hx-morebtn" aria-expanded={more} onClick={() => act(() => setMore((m) => !m))}>
        {ex.tryLabel.search}
        <span className="hx-chev" aria-hidden="true" />
      </button>
      {more && (
        <div className="hx-try">
          {ex.companies.map((c, k) => (
            <button type="button" key={c.domain} className="hx-trybtn" aria-pressed={k === ci} onClick={() => pickCompany(k)}>
              <span className="hx-trykind">{c.kind}</span>
              {c.domain}
              {!c.covered && <span className="hx-new">new</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
  const ins = typeof insights === 'function' ? insights(go) : insights
  const top = mode === 'insights' ? ins?.bar : searchBar
  const modes: Mode[] = insights ? ['search', 'insights'] : ['search']
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
      {top && <div className="hx-top">{top}</div>}
      {/* Search and Insights: folder tabs on the window's top edge, the picked one open into its panel. */}
      <div className="hx-mtabs" role="tablist">
        {modes.map((m) => (
          <button type="button" role="tab" className="hx-mtab" key={m} aria-selected={mode === m} onClick={() => pickMode(m)}>
            {ex.modes[m]}
          </button>
        ))}
      </div>
      <div className="hx-panel" role="tabpanel" aria-label={ex.modes.search} hidden={mode !== 'search'}>
        {search}
      </div>
      {ins && (
        <div className="hx-panel" role="tabpanel" aria-label={ex.modes.insights} hidden={mode !== 'insights'}>
          {ins.panel}
        </div>
      )}
      {mode === 'insights' ? ins?.more : searchMore}
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
