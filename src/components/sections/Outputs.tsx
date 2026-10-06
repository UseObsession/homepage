import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { outputPartners } from '../../content/partners'
import { outputFormats } from '../../content/sample'
import type { Cta, ViewerFormat, ViewerFormatId, ViewerView } from '../../content/types'
import { Mark, StatusMark } from '../Logo'
import { PartnerRow } from '../PartnerMark'
import { hasPartner } from '../partnerFiles'
import { CodeLines, SectionHead } from './DevSection'
import './Outputs.css'

/* The output viewer: the 1 real run (the September store check) in every format it can arrive in. A row of pill tabs
   (.ob-ptabs) picks the format; 1 calm stage shows it. Rebuilt from James's OutputFormats on the design system:
   no auto-advance, so nothing moves until the reader picks a tab; the PDF's 2 pages spread out on click and stack
   again on the next (on a phone the click brings page 2 to the front, since 2 pages side by side would be too small). The status of a verdict is the ring mark plus its word, never a colour.
   `compact` (Home) keeps the tabs and 1 shorter stage, with no line under each format: the section's 1 link says where
   the rest is. */

/* The words the controls need. They are chrome, not copy; a page can pass its own. */
const outputsUi = {
  tabs: 'Output formats',
  spread: 'Show page 2 of the report',
  report: 'Read the full report',
  from: 'From',
  to: 'To',
  lands: 'Lands in',
}

export type OutputsUi = typeof outputsUi
type Ui = OutputsUi

/* An internal link in a router; a plain link otherwise. */
function To({ to, className, children }: { to: string; className?: string; children: ReactNode }) {
  return to.startsWith('#') ? (
    <a className={className} href={to}>
      {children}
    </a>
  ) : (
    <Link className={className} to={to}>
      {children}
    </Link>
  )
}

/* ---- The mocks: each format drawn from its data in content/sample.ts --------------------------------------------- */

function Pdf({ view, ui }: { view: Extract<ViewerView, { kind: 'pdf' }>; ui: Ui }) {
  const [spread, setSpread] = useState(false)
  const [front, back] = view.pages
  return (
    <div className={'s-ov-pdf' + (spread ? ' is-spread' : '')}>
      {front && (
        <img
          className="s-ov-page s-ov-page--front"
          src={front.src}
          alt={front.alt}
          width={front.width}
          height={front.height}
          loading="lazy"
          decoding="async"
        />
      )}
      {back && (
        <img
          className="s-ov-page s-ov-page--back"
          src={back.src}
          alt={back.alt}
          width={back.width}
          height={back.height}
          loading="lazy"
          decoding="async"
        />
      )}
      <button type="button" className="s-ov-pdf__toggle" aria-pressed={spread} aria-label={ui.spread} onClick={() => setSpread((s) => !s)} />
    </div>
  )
}

function Email({ view, ui }: { view: Extract<ViewerView, { kind: 'email' }>; ui: Ui }) {
  const [verdict, ...rest] = view.tag.split(' · ')
  return (
    <div className="s-ov-card s-ov-email ob-object">
      <dl className="s-ov-email__meta">
        <div>
          <dt>{ui.from}</dt>
          <dd>{view.from}</dd>
        </div>
        <div>
          <dt>{ui.to}</dt>
          <dd>{view.to}</dd>
        </div>
      </dl>
      <div className="s-ov-email__body">
        <p className="s-ov-email__subject">{view.subject}</p>
        <p className="ob-status s-ov-status">
          <span aria-hidden="true">
            <StatusMark state="needs-you" size={14} />
          </span>
          {verdict}
          {rest.length > 0 && <span className="ob-status__detail">{rest.join(' · ')}</span>}
        </p>
        <ol className="s-ov-email__timeline">
          {view.timeline.map((t) => (
            <li key={t.time}>
              <time>{t.time}</time>
              <span>{t.text}</span>
            </li>
          ))}
        </ol>
        <span className="s-ov-fauxbtn" aria-hidden="true">
          {view.button}
        </span>
      </div>
    </div>
  )
}

function Slack({ view }: { view: Extract<ViewerView, { kind: 'slack' }> }) {
  return (
    <div className="s-ov-card s-ov-slack ob-object">
      <p className="s-ov-slack__channel">{view.channel}</p>
      <div className="s-ov-slack__msg">
        <span className="s-ov-slack__avatar" aria-hidden="true">
          <Mark size={20} />
        </span>
        <div className="s-ov-slack__content">
          <p className="s-ov-slack__name">
            <b>{view.app}</b>
            <time>{view.time}</time>
          </p>
          <div className="s-ov-slack__attach">
            <p className="s-ov-slack__title">
              <span aria-hidden="true">
                <StatusMark state="needs-you" size={14} />
              </span>
              <span>{view.title}</span>
            </p>
            <p className="s-ov-slack__line">{view.line}</p>
          </div>
          <div className="s-ov-slack__btns" aria-hidden="true">
            {view.buttons.map((b) => (
              <span key={b} className="s-ov-fauxbtn s-ov-fauxbtn--quiet">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Clay({ view }: { view: Extract<ViewerView, { kind: 'clay' }> }) {
  const added = new Set(view.added)
  return (
    <div className="s-ov-clay">
      <div className="s-ov-card s-ov-clay__card ob-object">
        <table className="s-ov-clay__table">
          <thead>
            <tr>
              {view.cols.map((c) => (
                <th key={c} scope="col" className={added.has(c) ? 'is-added' : undefined}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {view.rows.map((r) => (
              <tr key={r.cells[0]} className={r.gap ? 'is-gap' : undefined}>
                {r.cells.map((cell, i) => {
                  const col = view.cols[i]
                  const cls = [
                    added.has(col) ? 'is-added' : '',
                    i === 1 && !r.gap ? 'is-quiet' : '',
                    i > 1 ? 's-ov-mono' : '',
                    cell === 'link' ? 'is-link' : '',
                    cell === '·' ? 'is-quiet' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')
                  return i === 0 ? (
                    <th key={i} scope="row">
                      {cell}
                    </th>
                  ) : (
                    <td key={i} className={cls || undefined}>
                      {cell}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="s-ov-note">{view.note}</p>
    </div>
  )
}

function Webhook({ view }: { view: Extract<ViewerView, { kind: 'webhook' }> }) {
  const space = view.request.indexOf(' ')
  const method = space > 0 ? view.request.slice(0, space) : ''
  const url = space > 0 ? view.request.slice(space + 1) : view.request
  return (
    <div className="s-ov-card s-ov-hook ob-object">
      <p className="s-ov-hook__req">
        {method && <span className="s-ov-hook__method">{method}</span>}
        <span className="s-ov-hook__url">{url}</span>
      </p>
      <pre className="s-ov-hook__body">
        <CodeLines code={view.body} />
      </pre>
    </div>
  )
}

function Workflow({ view }: { view: Extract<ViewerView, { kind: 'workflow' }> }) {
  const chain = view.steps.filter((s) => !s.branch)
  const branch = view.steps.filter((s) => s.branch)
  const node = (s: (typeof view.steps)[number]) => (
    <div className={'s-ov-node' + (s.custom ? ' is-custom' : '')}>
      <span className="s-ov-node__k">{s.k}</span>
      <span className="s-ov-node__v">{s.v}</span>
    </div>
  )
  return (
    <div className="s-ov-flow">
      <ol className="s-ov-flow__chain">
        {chain.map((s) => (
          <li key={s.k + s.v}>{node(s)}</li>
        ))}
        {branch.length > 0 && (
          <li>
            <ul className="s-ov-flow__branch" style={{ ['--s-branches' as string]: branch.length }}>
              {branch.map((s) => (
                <li key={s.v}>{node(s)}</li>
              ))}
            </ul>
          </li>
        )}
      </ol>
      <p className="s-ov-note">{view.note}</p>
    </div>
  )
}

function Mock({ format, ui }: { format: ViewerFormat; ui: Ui }) {
  const v = format.view
  switch (v.kind) {
    case 'pdf':
      return <Pdf view={v} ui={ui} />
    case 'email':
      return <Email view={v} ui={ui} />
    case 'slack':
      return <Slack view={v} />
    case 'clay':
      return <Clay view={v} />
    case 'webhook':
      return <Webhook view={v} />
    case 'workflow':
      return <Workflow view={v} />
  }
}

/* ---- The viewer --------------------------------------------------------------------------------------------------- */

/* The tools a format's tab names, when at least 1 of them can be drawn. */
const dest = (id: ViewerFormatId) => {
  const d = outputPartners[id]
  return d && d.ids.some(hasPartner) ? d : undefined
}

type ViewerProps = {
  /* The run, in each format (content/sample.ts). */
  views?: ViewerFormat[]
  /* A page's own words for each format, matched by label: { format: 'PDF report', line: '...' }. */
  lines?: { format: string; line: string }[]
  /* The format to open on. */
  initial?: ViewerFormatId
  /* The tabs and a shorter stage, with no caption under it (Outputs.css .s-ov--compact). */
  compact?: boolean
  ui?: Ui
}

export function OutputViewer({ views = outputFormats, lines, initial, compact, ui = outputsUi }: ViewerProps) {
  const base = useId()
  const formats = views.map((f) => {
    const own = lines?.find((l) => l.format === f.label)
    return own ? { ...f, line: own.line } : f
  })
  const [index, setIndex] = useState(() => Math.max(0, formats.findIndex((f) => f.id === initial)))
  /* Panels enter with the system's rise only after the reader picks a tab, so nothing animates on load. */
  const [picked, setPicked] = useState(false)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const rail = useRef<HTMLDivElement>(null)

  const select = (n: number, focus = false) => {
    const next = (n + formats.length) % formats.length
    setIndex(next)
    setPicked(true)
    if (focus) tabs.current[next]?.focus()
  }

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: formats.length - 1 }
    if (!(e.key in keys)) return
    e.preventDefault()
    select(keys[e.key], true)
  }

  /* The rail scrolls sideways when it runs out of room (phones): keep the selected tab in view and fade the edge that
     has more (navigation.css .is-scrollable, .is-scroll-start, .is-scroll-end). */
  const measure = useCallback(() => {
    const el = rail.current
    if (!el) return
    const scrollable = el.scrollWidth > el.clientWidth + 1
    el.classList.toggle('is-scrollable', scrollable)
    el.classList.toggle('is-scroll-start', el.scrollLeft <= 1)
    el.classList.toggle('is-scroll-end', el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
  }, [])

  /* Keeps tab i in view along the rail, clear of the 24px edge fade. Smooth only for a reader's pick, and never with
     reduced motion. */
  const reveal = useCallback((i: number, smooth: boolean) => {
    const el = rail.current
    const tab = tabs.current[i]
    if (!el || !tab || el.scrollWidth <= el.clientWidth) return
    const pad = 24
    const left = tab.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft
    const behavior = smooth && !matchMedia('(prefers-reduced-motion: reduce)').matches ? 'smooth' : 'auto'
    if (left < el.scrollLeft + pad) el.scrollTo({ left: left - pad, behavior })
    else if (left + tab.offsetWidth > el.scrollLeft + el.clientWidth - pad)
      el.scrollTo({ left: left + tab.offsetWidth - el.clientWidth + pad, behavior })
  }, [])

  /* The observer reports once as it starts, after the browser's own layout: that first report brings the tab the viewer
     opens on into view and measures the rail, so neither costs a layout of its own while the page hydrates. */
  const opened = useRef(index)
  useEffect(() => {
    const el = rail.current
    if (!el) return
    let first = true
    const resized = () => {
      if (first) reveal(opened.current, false)
      first = false
      measure()
    }
    el.addEventListener('scroll', measure, { passive: true })
    const ro = 'ResizeObserver' in window ? new ResizeObserver(resized) : null
    if (ro) ro.observe(el)
    else resized()
    return () => {
      el.removeEventListener('scroll', measure)
      ro?.disconnect()
    }
  }, [measure, reveal])

  /* After that, each new tab comes into view as it opens. */
  useLayoutEffect(() => {
    if (opened.current === index) return
    opened.current = -1
    reveal(index, picked)
  }, [index, picked, reveal])

  return (
    <div className={'s-ov' + (compact ? ' s-ov--compact' : '')}>
      <div ref={rail} className="ob-ptabs s-ov__tabs" role="tablist" aria-label={ui.tabs} onKeyDown={onKey}>
        {formats.map((f, n) => (
          <button
            key={f.id}
            ref={(el) => {
              tabs.current[n] = el
            }}
            type="button"
            role="tab"
            id={`${base}-tab-${f.id}`}
            aria-selected={n === index}
            aria-controls={`${base}-panel-${f.id}`}
            tabIndex={n === index ? 0 : -1}
            className="ob-ptab"
            onClick={() => select(n)}
          >
            {f.label}
          </button>
        ))}
      </div>
      {formats.map((f, n) => (
        <div
          key={f.id}
          role="tabpanel"
          id={`${base}-panel-${f.id}`}
          aria-labelledby={`${base}-tab-${f.id}`}
          tabIndex={0}
          hidden={n !== index}
          className="s-ov__panel"
        >
          {/* The stage stays still between tabs; only what is on it rises in, and only once the reader picks. A format
              whose tab names a tool carries that tool's mark over its object's top left edge, as part of the object
              (content/partners.ts); the stage keeps its height, so moving between tabs never shifts the page. */}
          <div className={`s-ov__stage s-ov__stage--${f.view.kind} ob-object`}>
            <div className={'s-ov__mock' + (picked ? ' ob-anim-rise' : '')}>
              {dest(f.id) ? (
                <div className={`s-ov__obj s-ov__obj--${f.view.kind}`}>
                  <PartnerRow ids={dest(f.id)?.ids} label={`${ui.lands} ${f.label}`} note={dest(f.id)?.note} className="s-ov__dest" />
                  <Mock format={f} ui={ui} />
                </div>
              ) : (
                <Mock format={f} ui={ui} />
              )}
            </div>
          </div>
          {!compact && (
            <div className={'s-ov__caption' + (picked ? ' ob-anim-fade' : '')}>
              <p className="s-ov__line">{f.line}</p>
              {f.view.kind === 'pdf' && (
                <To to={f.view.to} className="ob-btn ob-btn--link s-ov__more">
                  <span className="ob-btn-label">{ui.report}</span>
                </To>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ---- The section (page.outputs) ----------------------------------------------------------------------------------- */

type Props = ViewerProps & {
  heading: string
  line?: string
  cta?: Cta
  /* The run's numbers, read before the viewer (page.outputs.facts). */
  facts?: { value: string; label: string }[]
  /* page.outputs.formats: the page's own line for each format. */
  formats?: { format: string; line: string }[]
  /* page.outputs.behave: how the agents behave, in 1 row under the run (Home). */
  behave?: { heading: string; items: string[] }
  /* 'paper' is the page's paper break (Paper and Gloss, styles/tones.css); 'base' stands on the page's own ground, for a
     page where the break would touch an ink chapter (Home: the gap is right above it). */
  tone?: 'paper' | 'base'
  id?: string
  className?: string
}

function Arrow() {
  return (
    <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3.5 8h9M9 4.5 12.5 8 9 11.5" />
    </svg>
  )
}

/* Compact (Home): the claim (and the run's numbers, when a page gives them) on the left, the viewer and the link to the
   full report on the right, on the page's split (the claim beside its object, like the questions under it); then how
   the agents behave, in 1 row. Stacked, it reads in the same order: the claim, the numbers, the viewer, the link, the
   row. Home gives no numbers: its line already tells the run. */
export function Outputs({ heading, line, cta, facts, formats, behave, tone = 'paper', compact, views, lines, initial, ui, id, className }: Props) {
  const headingId = useId()
  const paper = tone === 'paper'
  const factList = facts && facts.length > 0 && (
    <dl className="s-out-facts">
      {facts.map((f) => (
        <div key={f.label} className="s-out-fact">
          <dt className="s-out-fact__label">{f.label}</dt>
          <dd className="s-out-fact__value ob-num">{f.value}</dd>
        </div>
      ))}
    </dl>
  )
  return (
    <section
      id={id}
      className={'s-section s-out' + (paper ? ' ob-theme-hybrid' : '') + (compact ? ' s-out--compact' : '') + (className ? ' ' + className : '')}
      data-tone={paper ? 'paper' : undefined}
      aria-labelledby={headingId}
    >
      <div className="s-wrap">
        {compact ? (
          <div className="s-out-split">
            <div className="s-out-claim">
              <SectionHead id={headingId} heading={heading} line={line} />
              {factList}
            </div>
            <div className="s-out-object">
              <OutputViewer views={views} lines={lines ?? formats} initial={initial} ui={ui} compact />
              {cta && (
                <To to={cta.to} className="ob-btn ob-btn--link s-out-more">
                  <span className="ob-btn-label">{cta.label}</span>
                  <Arrow />
                </To>
              )}
            </div>
          </div>
        ) : (
          <>
            <SectionHead id={headingId} heading={heading} line={line} cta={cta} />
            {factList}
            <OutputViewer views={views} lines={lines ?? formats} initial={initial} ui={ui} />
          </>
        )}
        {behave && behave.items.length > 0 && (
          <div className="s-out-behave">
            <h3 className="s-out-behave__h">{behave.heading}</h3>
            <ul className="s-out-behave__list">
              {behave.items.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
