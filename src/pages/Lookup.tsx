import { useEffect, useId, useMemo, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { JoinCard } from '../components/JoinCard'
import { StatusMark } from '../components/Logo'
import { HeroExplorer, type ConsoleGo } from '../components/v5/HeroExplorer'
import { capture } from '../content/capture'
import { join, offers } from '../content/join'
import { lookupPage as p } from '../content/pages/lookup'
import { track } from '../lib/analytics'
import { siteFromEmail, type JoinStore } from '../lib/join'
import { askForVisit, askLookup, lookupJoin, openLink, turnstile, type Card, type IndexTotals, type Kind } from '../lib/lookup'
import { after, basketText, changesOf, day, entryOf, halfWithin, list, offersOf, type Entry } from '../lib/lookupEntry'
import { isEmail, isWorkEmail } from '../lib/waitlist'
import { Crumbs } from '../components/Crumbs'
import { Faq } from '../components/sections/Faq'
import { SectionHead } from '../components/sections/DevSection'
import { sampleCard, sampleTotals } from '../content/lookupSample'
import '../components/v5/Hero5.css'
import '../components/CaptureForm.css'
import '../components/JoinCard.css'
import './Lookup.css'

/* /lookup: one exact domain in, at most one entry out (content/pages/lookup.ts). The entry is the website's console
   (components/v5/HeroExplorer, 13 Nov, James: one component for Home, /sample-output and here), opened on Insights:
   the entry's answers, one for each journey, read against the index's totals. Search holds its events (lib/lookupEntry),
   each email's clean copy fetched from the function when it is opened. Under it, or under "not indexed yet", the same form as the website's early access: the work email
   first (a request to update the entry, or to add the site), then the early access card in its place (who they are,
   name, company and site, their other sites, the kinds of data they want). Unlike the website's, nothing is kept: a
   company can run many stores, so each lookup asks afresh. The example under the box runs the lookup for the sample
   store. Nothing here is prerendered but the form: every answer arrives after a lookup.
   13 Nov (James): the entry is not shown at once. The form takes the domain and an email at it; for an indexed site the
   function emails a link, and the page says so. The link opens /lookup#t=<token>: the page trades the token for the
   entry (lib/lookup openLink). The token sits in the fragment, so no server log or Referer header sees it. The sample
   store needs no email. */

type Phase =
  | { at: 'idle' }
  | { at: 'found'; card: Card; view: string; index?: IndexTotals }
  | { at: 'missing'; domain: string; email?: string }
  | { at: 'sent'; domain: string; email: string }

export function Lookup() {
  const uid = useId()
  const [phase, setPhase] = useState<Phase>({ at: 'idle' })
  const [domain, setDomain] = useState('')
  /* The email is built from 2 entries: the part before the @, and the domain looked up, so it is always at the site. */
  const [local, setLocal] = useState('')
  const [busy, setBusy] = useState(false)
  const [problem, setProblem] = useState<string | null>(null)
  const [live, setLive] = useState('')
  const widget = useRef<HTMLDivElement>(null)
  const check = useRef<ReturnType<typeof turnstile> | null>(null)
  const result = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!widget.current) return
    const t = turnstile(widget.current)
    check.current = t
    return () => t.remove()
  }, [])

  useEffect(() => {
    if (phase.at !== 'idle') result.current?.focus()
  }, [phase])

  /* Arriving from the email: trade the link's token for the entry, once. */
  const opened = useRef(false)
  useEffect(() => {
    const link = new URLSearchParams(window.location.hash.slice(1)).get('t')
    if (!link || opened.current) return
    opened.current = true
    setBusy(true)
    setLive(p.form.opening)
    void openLink(link).then((res) => {
      setBusy(false)
      setLive('')
      if (!res.ok) return fail(res.error === 'limit' ? p.errors.limit : res.error === 'server' ? p.errors.server : p.errors.link)
      if (res.data.found) setPhase({ at: 'found', card: res.data.card, view: res.data.view, index: res.data.index })
      else setPhase({ at: 'missing', domain: res.data.domain })
    })
  }, [])

  function fail(text: string) {
    setProblem(text)
    setLive(text)
  }

  async function submitLookup(e?: FormEvent<HTMLFormElement>, typed = domain, name = local) {
    e?.preventDefault()
    if (busy) return
    setProblem(null)
    const site = typed.trim()
    const sample = site.toLowerCase() === p.form.exampleDomain
    const address = `${name.trim()}@${site.replace(/^https?:\/\//i, '').replace(/^www\./i, '').split(/[/?#]/)[0]}`
    if (!sample && !name.trim()) return fail(p.errors.email)
    if (!site) return fail(p.errors.domain)
    if (!sample && !isEmail(address)) return fail(p.errors.email)
    setBusy(true)
    setLive(p.form.busy)
    const token = await check.current?.take()
    if (!token) {
      setBusy(false)
      return fail(p.errors.check)
    }
    const res = await askLookup(site, sample ? '' : address, token)
    setBusy(false)
    if (!res.ok) {
      if (res.error === 'match') return fail(p.errors.match(site.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0]))
      return fail(res.error === 'domain' || res.error === 'check' || res.error === 'limit' || res.error === 'email' ? p.errors[res.error] : p.errors.server)
    }
    setLive('')
    const d = res.data
    if ('sent' in d) setPhase({ at: 'sent', domain: d.domain, email: d.email })
    else if (d.found) setPhase({ at: 'found', card: d.card, view: d.view, index: d.index })
    else setPhase({ at: 'missing', domain: d.domain, email: address })
  }

  function again() {
    setPhase({ at: 'idle' })
    setDomain('')
    setProblem(null)
    if (window.location.hash) window.history.replaceState(null, '', window.location.pathname)
  }

  const take = () => check.current?.take() ?? Promise.resolve(null)
  const ids = { domain: `${uid}-domain`, local: `${uid}-local`, help: `${uid}-help`, error: `${uid}-error` }
  const domainRef = useRef<HTMLInputElement>(null)
  const localRef = useRef<HTMLInputElement>(null)
  /* The closing call takes the reader back to the box. */
  const toForm = () => {
    if (phase.at !== 'idle') again()
    window.setTimeout(() => {
      localRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })
      localRef.current?.focus({ preventScroll: true })
    }, 0)
  }

  return (
    <>
      <section className="v5-hero s-lookup-hero" data-reader="developers" aria-labelledby={`${uid}-h`}>
        <div className="s-wrap v5-hero-wrap">
          <Crumbs />
          <div className="v5-hero-grid">
            <div className="v5-hero-words ob-anim-hero">
              <p className="v5-hero-tag">
                <span className="v5-hero-tag-dot" aria-hidden="true" />
                {p.pill}
              </p>
              <h1 className="v5-hero-h" id={`${uid}-h`}>
                {p.headline}
              </h1>
              <p className="v5-hero-sub">{p.sub}</p>
              <div className="s-lookup__act">
        {phase.at === 'idle' && (
          <div className="s-lookup__join-hero">
            <form className={`ob-pill-form s-lookup__form${problem ? ' is-error' : ''}`} noValidate onSubmit={submitLookup} aria-busy={busy || undefined}>
              <div className="ob-pill-field">
                <label className="ob-pill-entry" htmlFor={ids.local}>
                  <span className="ob-sr">{p.form.emailLabel}</span>
                  <input
                    ref={localRef}
                    className="ob-pill-input s-lookup__local"
                    id={ids.local}
                    name="email"
                    type="text"
                    inputMode="email"
                    autoComplete="email"
                    autoCapitalize="none"
                    spellCheck={false}
                    placeholder={p.form.emailPlaceholder}
                    value={local}
                    onKeyDown={(e) => {
                      /* The @ is already there: typing it moves on to the domain. */
                      if (e.key === '@') {
                        e.preventDefault()
                        domainRef.current?.focus()
                      }
                    }}
                    onChange={(e) => {
                      /* A whole address, pasted or filled in by the browser, splits at its last @. */
                      const v = e.target.value.replace(/\s+/g, '')
                      const at = v.lastIndexOf('@')
                      if (at >= 0) {
                        setLocal(v.slice(0, at))
                        if (v.slice(at + 1)) setDomain(v.slice(at + 1))
                        domainRef.current?.focus()
                      } else setLocal(v)
                      if (problem) setProblem(null)
                    }}
                    aria-invalid={problem ? true : undefined}
                    aria-describedby={[problem ? ids.error : '', ids.help].filter(Boolean).join(' ')}
                  />
                </label>
                <span className="s-lookup__at" aria-hidden="true">
                  @
                </span>
                <label className="ob-pill-entry" htmlFor={ids.domain}>
                  <span className="ob-sr">{p.form.label}</span>
                  <input
                    ref={domainRef}
                    className="ob-pill-input s-lookup__domainin"
                    id={ids.domain}
                    name="domain"
                    type="text"
                    inputMode="url"
                    autoComplete="off"
                    autoCapitalize="none"
                    spellCheck={false}
                    required
                    placeholder={p.form.placeholder}
                    value={domain}
                    onChange={(e) => {
                      setDomain(e.target.value.replace(/\s+/g, '').replace(/^.*@/, ''))
                      if (problem) setProblem(null)
                    }}
                    aria-invalid={problem ? true : undefined}
                    aria-describedby={[problem ? ids.error : '', ids.help].filter(Boolean).join(' ')}
                  />
                </label>
                <button type="submit" className="ob-btn ob-btn--lg ob-pill-action" aria-busy={busy || undefined}>
                  <span className="ob-btn-busy" aria-hidden="true">
                    <StatusMark state="working" size={18} />
                  </span>
                  <span className="ob-btn-label">{p.form.button}</span>
                </button>
              </div>
              <div className="ob-pill-foot">
                <p className="ob-field-help" id={ids.help}>
                  {p.form.help}
                </p>
                <p className="ob-field-error ob-anim-message" id={ids.error} hidden={!problem}>
                  {problem ?? ''}
                </p>
              </div>
              <p className="s-lookup__example">
                {p.form.example}{' '}
                <button
                  type="button"
                  className="ob-btn ob-btn--link ob-btn--inline"
                  onClick={() => {
                    setDomain(p.form.exampleDomain)
                    void submitLookup(undefined, p.form.exampleDomain, '')
                  }}
                >
                  <span className="ob-btn-label">{p.form.exampleDomain}</span>
                </button>
              </p>
            </form>
          </div>
        )}
        {(phase.at === 'missing' || phase.at === 'sent') && (
          <div className="s-lookup__answer" ref={result} tabIndex={-1}>
            {phase.at === 'missing' && (
              <div className="ob-card ob-card--raised s-lookup__missing">
                <h2 className="ob-card-title">{p.missing.headline(phase.domain)}</h2>
                <p className="ob-card-body">{p.missing.line}</p>
                <AskForm key={`add:${phase.domain}`} domain={phase.domain} kind="add" button={p.missing.button} take={take} initial={phase.email} />
              </div>
            )}
            {phase.at === 'sent' && (
              <div className="ob-card ob-card--raised s-lookup__missing" role="status">
                <h2 className="ob-card-title">{p.sent.headline}</h2>
                <p className="ob-card-body">{p.sent.line(phase.email, phase.domain)}</p>
                <p className="s-lookup__quiet">{p.sent.note}</p>
              </div>
            )}
            <p className="s-lookup__again">
              <button type="button" className="ob-btn ob-btn--link" onClick={again}>
                <span className="ob-btn-label">{p.another}</span>
              </button>
            </p>
          </div>
        )}
        {phase.at === 'found' && (
          <p className="s-lookup__again">
            <button type="button" className="ob-btn ob-btn--link" onClick={again}>
              <span className="ob-btn-label">{p.another}</span>
            </button>
          </p>
        )}
                <div className="s-lookup__check" ref={widget} />
                <p className="ob-sr" role="status" aria-live="polite">
                  {live}
                </p>
              </div>
              <ul className="s-lookup__figures">
                {p.figures.map((f) => (
                  <li key={f.label}>
                    <span className="s-lookup__figure">{f.value}</span>
                    <span className="s-lookup__figlabel">{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="v5-hero-visual ob-anim-hero-object">
              <EntryPreview />
            </div>
          </div>
        </div>
      </section>

      {phase.at === 'found' && (
        <section className="s-lookup">
          <div className="s-wrap s-lookup__wrap s-lookup__wrap--entry" ref={result} tabIndex={-1}>
            {phase.at === 'found' && (
              <>
                <StoreEntry card={phase.card} view={phase.view} index={phase.index} again={again} />
                <section className="ob-card ob-card--raised s-lookup__ask" id="update">
                  <div className="s-lookup__askhead">
                    <h3 className="ob-card-title">{p.update.headline}</h3>
                    <p className="ob-card-body">{p.update.line(phase.card.domain)}</p>
                  </div>
                  <AskForm key={`update:${phase.card.domain}`} domain={phase.card.domain} kind="update" button={p.update.button} take={take} />
                </section>
              </>
            )}

          </div>
        </section>
      )}

      <section className="s-section s-lookup-checks" aria-labelledby={`${uid}-checks`}>
        <div className="s-wrap">
          <SectionHead id={`${uid}-checks`} heading={p.checks.heading} line={p.checks.line} />
          <ul className="s-lookup-checks__list">
            {p.checks.items.map((it) => (
              <li key={it.title} className="s-lookup-checks__item" data-every={it.every ? '' : undefined}>
                <span className="s-lookup-checks__tag">{it.every ? p.checks.every : p.checks.request}</span>
                <h3 className="s-lookup-checks__t">{it.title}</h3>
                <p className="s-lookup-checks__l">{it.line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {phase.at !== 'found' && (
        <section className="s-section s-lookup-sample" data-tone="alt" aria-labelledby={`${uid}-sample`}>
          <div className="s-wrap">
            <SectionHead id={`${uid}-sample`} heading={p.sample.heading} line={p.sample.line} />
            <div className="s-lookup-sample__console">
              <EntryConsole card={sampleCard} view="" index={sampleTotals} fetchCopy={sampleCopy} />
            </div>
          </div>
        </section>
      )}

      <section className="s-section s-lookup-steps" aria-labelledby={`${uid}-steps`}>
        <div className="s-wrap">
          <SectionHead id={`${uid}-steps`} heading={p.steps.heading} />
          <ol className="s-lookup-steps__list">
            {p.steps.items.map((it, k) => (
              <li key={it.title} className="s-lookup-steps__item">
                <span className="s-lookup-steps__n" aria-hidden="true">
                  {k + 1}
                </span>
                <h3 className="s-lookup-steps__t">{it.title}</h3>
                <p className="s-lookup-steps__l">{it.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="s-section s-lookup-index" data-tone="alt" aria-labelledby={`${uid}-index`}>
        <div className="s-wrap">
          <SectionHead id={`${uid}-index`} heading={p.indexing.heading} line={p.indexing.line} />
          <ul className="s-lookup-index__list">
            {p.indexing.items.map((it) => (
              <li key={it.title} className="s-lookup-index__item">
                <h3 className="s-lookup-index__t">{it.title}</h3>
                <p className="s-lookup-index__l">{it.line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq faq={p.faq} id="questions" />

      <p className="s-wrap s-lookup-others">
        {p.others.line}{' '}
        <Link className="ob-btn ob-btn--link ob-btn--inline" to={p.others.to}>
          <span className="ob-btn-label">{p.others.link}</span>
        </Link>
      </p>

      <section className="s-section s-lookup-final" data-reader="developers" aria-labelledby={`${uid}-final`}>
        <div className="s-wrap s-lookup-final__in">
          <h2 className="ob-type-h2" id={`${uid}-final`}>
            {p.final.heading}
          </h2>
          <p className="ob-type-body-lg s-lookup-final__line">{p.final.line}</p>
          <button type="button" className="ob-btn ob-btn--lg" onClick={toForm}>
            <span className="ob-btn-label">{p.final.button}</span>
          </button>
        </div>
      </section>

      <p className="s-wrap s-lookup__takedown">
        {p.takedown}{' '}
        <a className="ob-btn ob-btn--link ob-btn--inline" href={`mailto:${p.takedownEmail}?subject=Take%20my%20site%27s%20entry%20down`}>
          <span className="ob-btn-label">{p.takedownEmail}</span>
        </a>
        .
      </p>

    </>
  )
}

/* The entry: the site's name, when it was indexed, then the console on Insights. */
/* The sample's clean copies are the page's own files (public/lookup-sample, from obsession-index/samples/hollin.py). */
const sampleCopy = (id: string) =>
  fetch(`/lookup-sample/${id}.html`)
    .then((r) => (r.ok ? r.text() : null))
    .catch(() => null)

/* An entry in the console, opened on Insights: a looked-up site, or the sample under the hero. */
function EntryConsole({ card, view, index, fetchCopy, ask }: { card: Card; view: string; index?: IndexTotals; fetchCopy?: (id: string) => Promise<string | null>; ask?: () => void }) {
  const entry = useMemo(() => entryOf(card, view, p.console, p.entry, fetchCopy), [card, view, fetchCopy])
  return (
    <HeroExplorer
      ex={entry.console}
      first="insights"
      bar={false}
      autoplay={false}
      anchors={false}
      insights={(go) => ({ panel: <LookupInsights card={card} index={index} entry={entry} go={go} ask={ask} /> })}
    />
  )
}

/* The hero's picture: the sample store's entry at a glance, 1 row a part: the emails after each step, the offers, the
   campaigns, and last the AI shopper check (13 Nov, James: the data first, the AI shopper on request). */
function EntryPreview() {
  const t = p.insights
  const c = sampleCard
  const stall = c.readiness?.find((r) => r.verdict === 'stalled')
  const offers = offersOf(c, t)
  const codes = offers.filter((o) => o.code)
  const pcts = codes.map((o) => o.text.match(/\d+%/)?.[0]).filter((x): x is string => !!x)
  const got = c.journeys.filter((j) => j.emails).length
  const none = c.journeys.find((j) => !j.emails)
  const tot = none && sampleTotals.journeys[none.journey]
  const rows: { q: string; a: string; i: string; bad?: boolean }[] = [
    {
      q: t.emails.heading,
      a: t.emails.summary(got, c.journeys.length),
      i: none && tot ? `${t.change.reminder[none.journey]}: ${t.change.reminderLine(Math.round((tot.answered / tot.runs) * 100), tot.runs, halfWithin(tot.median_minutes))}` : '',
    },
    { q: t.offers.heading, a: t.offers.summary(codes.length, pcts.length ? `${list(pcts)} off` : ''), i: codes.map((o) => `${o.code} · ${o.where}`).join(', ') },
    { q: t.rhythmLabel, a: c.rhythm ? t.weekly(c.rhythm.per_week) : '', i: [c.rhythm?.weekday && t.weekday(c.rhythm.weekday), c.rhythm?.languages.length && t.languages(list(c.rhythm.languages))].filter(Boolean).join(' ') },
    {
      q: t.readiness.heading,
      a: stall ? t.readiness.stopsAt(t.readiness.stages[stall.stage]) : t.readiness.passes,
      i: (c.readiness ?? []).map((r) => `${t.readiness.stages[r.stage]} ${t.readiness.verdicts[r.verdict].toLowerCase()}`).join(' · '),
      bad: !!stall,
    },
  ]
  return (
    <div className="ob-window ob-object s-lookup-preview">
      <div className="ob-window-bar">
        <span className="ob-window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <p className="ob-window-title">{p.preview.title}</p>
        <span className="ob-tag">{p.preview.tag}</span>
      </div>
      <ol className="s-lookup-preview__rows">
        {rows.map((r) => (
          <li key={r.q} className="s-lookup-preview__row" data-none={r.bad ? '' : undefined}>
            <span className="s-lookup-preview__q">{r.q}</span>
            <span className="s-lookup-preview__a">{r.a}</span>
            {r.i && <span className="s-lookup-preview__i">{r.i}</span>}
          </li>
        ))}
      </ol>
    </div>
  )
}

function StoreEntry({ card, view, index, again }: { card: Card; view: string; index?: IndexTotals; again: () => void }) {
  const e = p.entry
  const indexed = e.indexed(day(card.captured.from), day(card.captured.to))
  return (
    <article className="s-lookup__entry">
      <header className="s-lookup__head">
        <div className="s-lookup__title">
          <h2 className="s-lookup__name">{card.name ?? card.domain}</h2>
          <p className="s-lookup__domain">{[card.domain, indexed, e.latest(day(card.captured.mail_until))].join(' · ')}</p>
        </div>
        <button type="button" className="ob-btn ob-btn--link s-lookup__another" onClick={again}>
          <span className="ob-btn-label">{p.another}</span>
        </button>
      </header>
      <EntryConsole card={card} view={view} index={index} ask={() => document.getElementById('update')?.scrollIntoView({ behavior: 'smooth', block: 'center' })} />
      <p className="s-lookup__scope">{e.scope}</p>
    </article>
  )
}

/* Insights for an entry (design A; 13 Nov, James: what to change, not only email gaps). On top, what to change
   first, ranked; then whether an AI shopper can buy (or, where that check hasn't been run, a way to ask for it) beside
   the offers; then the emails after each step, each against the index; then the campaigns. Worked out here from the
   card: the index keeps the events, never the answers. A change or an answer that comes from an event opens Search
   there. */
function LookupInsights({ card, index, entry, go, ask }: { card: Card; index?: IndexTotals; entry: Entry; go: ConsoleGo; ask?: () => void }) {
  const t = p.insights
  const r = card.rhythm
  const weeks = r ? Math.max(1, Math.round((Date.parse(r.to) - Date.parse(r.from)) / (7 * 864e5))) : 0
  const changes = changesOf(card, index, entry, t)
  const offers = offersOf(card, t)
  const stall = card.readiness?.find((x) => x.verdict === 'stalled')
  return (
    <div className="lk-ins">
      <span className="lk-ins__chips">
        <span className="lk-chip">{p.entry.persona}</span>
        <span className="lk-chip">{t.every}</span>
      </span>

      {changes.length > 0 && (
        <section className="lk-sec lk-changes">
          <div className="lk-sec__head">
            <h3 className="lk-sec__h">{t.changes.heading}</h3>
            <p className="lk-sec__line">{t.changes.line}</p>
          </div>
          <ol className="lk-changes__list">
            {changes.map((c, k) => (
              <li key={c.title + k} className="lk-change" data-tone={c.tone}>
                <span className="lk-change__n">{k + 1}</span>
                <div className="lk-change__body">
                  <p className="lk-change__t">{c.title}</p>
                  {c.line && <p className="lk-change__l">{c.line}</p>}
                </div>
                {c.event && (
                  <button type="button" className="lk-q__from lk-change__go" onClick={() => go.search(c.event)}>
                    {t.from(1)}
                  </button>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      <div className="lk-two">
        <section className="lk-sec lk-ready">
          <div className="lk-sec__head">
            <h3 className="lk-sec__h">{t.readiness.heading}</h3>
            <p className="lk-sec__line">{t.readiness.line}</p>
          </div>
          {card.readiness ? (
            <>
              <ol className="lk-stages">
                {card.readiness.map((x) => (
                  <li key={x.stage} className="lk-stage" data-verdict={x.verdict}>
                    <span className="lk-stage__name">{t.readiness.stages[x.stage]}</span>
                    <span className="lk-stage__v">{t.readiness.verdicts[x.verdict]}</span>
                  </li>
                ))}
              </ol>
              {stall && <p className="lk-ready__why">{stall.line}</p>}
            </>
          ) : (
            <div className="lk-missing">
              <p>{t.readiness.missing(card.domain)}</p>
              {ask && (
                <button type="button" className="ob-btn ob-btn--secondary ob-btn--sm" onClick={ask}>
                  <span className="ob-btn-label">{t.readiness.ask}</span>
                </button>
              )}
            </div>
          )}
        </section>

        <section className="lk-sec lk-offers">
          <div className="lk-sec__head">
            <h3 className="lk-sec__h">{t.offers.heading}</h3>
          </div>
          {offers.length ? (
            <ul className="lk-offers__list">
              {offers.map((o) => (
                <li key={o.text + o.seen}>
                  {o.code && <span className="lk-code">{o.code}</span>}
                  <span className="lk-offer__t">{o.text}</span>
                  <span className="lk-offer__w">
                    {o.where} · {o.until ? t.offers.until(day(o.until)) : t.offers.since(day(o.seen))}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="lk-missing">{t.offers.missing}</p>
          )}
        </section>
      </div>

      <section className="lk-sec">
        <div className="lk-sec__head">
          <h3 className="lk-sec__h">{t.emails.heading}</h3>
          <p className="lk-sec__line">{t.emails.summary(card.journeys.filter((j) => j.emails).length, card.journeys.length)}</p>
        </div>
        <div className="lk-qs">
          {card.journeys.map((j) => {
            const hours = j.window_hours || 48
            const tot = index?.journeys[j.journey]
            const items = basketText(j)
            const flags = card.faults.filter((f) => f.journey === j.journey && f.kind !== 'finding')
            const act = entry.acts[j.journey]
            return (
              <article className="lk-q" key={j.journey} data-none={j.emails ? undefined : ''}>
                <p className="lk-q__journey">{p.entry.journeys[j.journey]}</p>
                <h4 className="lk-q__question">{t.questions[j.journey]}</h4>
                <p className="lk-q__answer">{j.emails ? t.yes(after(j.first_after_minutes ?? 0)) : t.no}</p>
                <p className="lk-q__detail">
                  {j.emails ? (
                    <>
                      {t.count(j.emails)} {j.list[0] && t.first(j.list[0].subject || '(no subject)')}
                    </>
                  ) : (
                    <>
                      {items.length > 0 && t.left(list(items))} {t.nothing(hours)}
                    </>
                  )}
                </p>
                {flags.length > 0 && (
                  <ul className="lk-q__flags">
                    {flags.map((f, i) => (
                      <li key={i} data-kind={f.kind}>
                        {p.entry.faults[f.kind as 'blank_name' | 'placeholder']}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="lk-q__foot">
                  <span>{tot && tot.runs > 0 && t.index(Math.round((tot.answered / tot.runs) * 100), tot.runs, halfWithin(tot.median_minutes))}</span>
                  {act && (
                    <button type="button" className="lk-q__from" onClick={() => go.search(act.act)}>
                      {t.from(act.events)}
                    </button>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {r && (
        <div className="lk-rhythm">
          <p className="lk-q__journey">{t.rhythmLabel}</p>
          <p className="lk-rhythm__big">{t.rhythm(r.sends, weeks, r.per_week)}</p>
          <p className="lk-rhythm__line">
            {[r.weekday && t.weekday(r.weekday), r.languages.length > 0 && t.languages(list(r.languages))].filter(Boolean).join(' ')}
          </p>
          {r.latest && r.latest.length > 0 && (
            <>
              <p className="lk-q__journey">{t.latestLabel}</p>
              <ul className="lk-rhythm__list">
                {r.latest.map((m) => {
                  const ev = entry.emails.get(m.id)
                  return (
                    <li key={m.id}>
                      <button type="button" className="lk-rhythm__email" onClick={() => go.search(ev)}>
                        {m.subject || '(no subject)'}
                      </button>
                      <span className="lk-rhythm__when">{day(m.at)}</span>
                    </li>
                  )
                })}
              </ul>
            </>
          )}
        </div>
      )}
      <p className="lk-ins__note">{t.note}</p>
    </div>
  )
}

/* The website's early access form, for 1 site: the work email (checked as the website checks it), sent as a request
   with a Turnstile token, then the early access card in the same spot, on a store of its own (lib/lookup lookupJoin)
   that saves each step to the function and is gone when the page moves on. */
function AskForm({ domain, kind, button, take, initial = '' }: { domain: string; kind: Kind; button: string; take: () => Promise<string | null>; initial?: string }) {
  const uid = useId()
  const offer = kind === 'update' ? 'reindex' : 'index'
  const [email, setEmail] = useState(initial)
  const [problem, setProblem] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [live, setLive] = useState('')
  const [store, setStore] = useState<JoinStore | null>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const id = { email: `${uid}-email`, help: `${uid}-help`, error: `${uid}-error` }

  function flag(text: string) {
    setProblem(text)
    setLive(text)
    emailRef.current?.focus()
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (busy) return
    setProblem(null)
    const address = email.trim()
    if (!address) return flag(capture.errors.emailEmpty)
    if (!isEmail(address)) return flag(capture.errors.emailBad)
    if (!isWorkEmail(address)) return flag(capture.errors.emailPersonal)
    setBusy(true)
    setLive(capture.sending)
    const token = await take()
    if (!token) {
      setBusy(false)
      return flag(p.errors.check)
    }
    const res = await askForVisit(domain, address, kind, token)
    setBusy(false)
    if (!res.ok) return flag(res.error === 'email' ? capture.errors.emailBad : res.error === 'limit' ? p.errors.limit : capture.errors.server)
    track('generate_lead', { form: offer, free: 'no' })
    const next = lookupJoin(domain, kind, res.data.id, res.data.edit)
    next.begin({
      sid: res.data.id,
      email: address,
      t: Date.now(),
      preview: false,
      script: 3,
      page: '/lookup',
      source: 'lookup',
      offer,
      free: false,
      site: siteFromEmail(address) || domain,
      brands: [domain],
    })
    setLive(offers[offer].head ?? '')
    setStore(next)
  }

  const status = (
    <p className="ob-sr" role="status" aria-live="polite">
      {live}
    </p>
  )

  if (store)
    return (
      <div className="s-capture s-capture--done s-lookup__join">
        <JoinCard owner store={store} />
        {status}
      </div>
    )

  return (
    <div className="s-capture s-lookup__join">
      <form className={`ob-pill-form${problem ? ' is-error' : ''}`} noValidate onSubmit={submit} aria-busy={busy || undefined}>
        <div className="ob-pill-field">
          <label className="ob-pill-entry" htmlFor={id.email}>
            <span className="ob-sr">{capture.email.label}</span>
            <input
              ref={emailRef}
              className="ob-pill-input"
              id={id.email}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              autoCapitalize="none"
              spellCheck={false}
              required
              placeholder={capture.email.placeholder}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (problem) setProblem(null)
              }}
              aria-invalid={problem ? true : undefined}
              aria-describedby={[problem ? id.error : '', id.help].filter(Boolean).join(' ')}
            />
          </label>
          <button type="submit" className="ob-btn ob-btn--lg ob-pill-action" aria-busy={busy || undefined}>
            <span className="ob-btn-busy" aria-hidden="true">
              <StatusMark state="working" size={18} />
            </span>
            <span className="ob-btn-label">{button}</span>
          </button>
        </div>
        <div className="ob-pill-foot">
          <p className="ob-field-help" id={id.help}>
            {offers[offer].micro}
          </p>
          <p className="ob-field-error ob-anim-message" id={id.error} hidden={!problem}>
            {problem ?? ''}
          </p>
        </div>
      </form>
      <p className="s-capture__privacy">
        {join.privacy.text}{' '}
        <Link className="s-capture__plink" to={join.privacy.to}>
          {join.privacy.link}
        </Link>
      </p>
      {status}
    </div>
  )
}
