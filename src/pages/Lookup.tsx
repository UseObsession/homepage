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
import { askForVisit, lookUp, lookupJoin, turnstile, type Card, type IndexTotals, type Kind } from '../lib/lookup'
import { after, basketText, day, entryOf, list, type Entry } from '../lib/lookupEntry'
import { isEmail, isWorkEmail } from '../lib/waitlist'
import { NoticeHero } from './Notice'
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
   store. Nothing here is prerendered but the form: every answer arrives after a lookup. */

type Phase =
  | { at: 'idle' }
  | { at: 'found'; card: Card; view: string; index?: IndexTotals }
  | { at: 'missing'; domain: string }

export function Lookup() {
  const uid = useId()
  const [phase, setPhase] = useState<Phase>({ at: 'idle' })
  const [domain, setDomain] = useState('')
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

  function fail(text: string) {
    setProblem(text)
    setLive(text)
  }

  async function submitLookup(e?: FormEvent<HTMLFormElement>, typed = domain) {
    e?.preventDefault()
    if (busy) return
    setProblem(null)
    if (!typed.trim()) return fail(p.errors.domain)
    setBusy(true)
    setLive(p.form.busy)
    const token = await check.current?.take()
    if (!token) {
      setBusy(false)
      return fail(p.errors.check)
    }
    const res = await lookUp(typed.trim(), token)
    setBusy(false)
    if (!res.ok) return fail(p.errors[res.error === 'view' || res.error === 'edit' ? 'server' : res.error])
    setLive('')
    if (res.data.found) setPhase({ at: 'found', card: res.data.card, view: res.data.view, index: res.data.index })
    else setPhase({ at: 'missing', domain: res.data.domain })
  }

  function again() {
    setPhase({ at: 'idle' })
    setDomain('')
    setProblem(null)
  }

  const take = () => check.current?.take() ?? Promise.resolve(null)
  const ids = { domain: `${uid}-domain`, help: `${uid}-help`, error: `${uid}-error` }

  return (
    <>
      <NoticeHero headline={p.headline} sub={p.sub} end={false}>
        {phase.at === 'idle' && (
          <div className="s-notice-hero__join">
            <form className={`ob-pill-form s-lookup__form${problem ? ' is-error' : ''}`} noValidate onSubmit={submitLookup} aria-busy={busy || undefined}>
              <div className="ob-pill-field">
                <label className="ob-pill-entry" htmlFor={ids.domain}>
                  <span className="ob-sr">{p.form.label}</span>
                  <input
                    className="ob-pill-input"
                    id={ids.domain}
                    name="domain"
                    type="text"
                    inputMode="url"
                    autoComplete="url"
                    autoCapitalize="none"
                    spellCheck={false}
                    required
                    placeholder={p.form.placeholder}
                    value={domain}
                    onChange={(e) => {
                      setDomain(e.target.value)
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
                    void submitLookup(undefined, p.form.exampleDomain)
                  }}
                >
                  <span className="ob-btn-label">{p.form.exampleDomain}</span>
                </button>
              </p>
            </form>
          </div>
        )}
        <div className="s-lookup__check" ref={widget} />
        <p className="ob-sr" role="status" aria-live="polite">
          {live}
        </p>
      </NoticeHero>

      {phase.at !== 'idle' && (
        <section className="s-lookup">
          <div className={`s-wrap s-lookup__wrap${phase.at === 'found' ? ' s-lookup__wrap--entry' : ''}`} ref={result} tabIndex={-1}>
            {phase.at === 'found' && (
              <>
                <StoreEntry card={phase.card} view={phase.view} index={phase.index} again={again} />
                <section className="ob-card ob-card--raised s-lookup__ask">
                  <div className="s-lookup__askhead">
                    <h3 className="ob-card-title">{p.update.headline}</h3>
                    <p className="ob-card-body">{p.update.line(phase.card.domain)}</p>
                  </div>
                  <AskForm key={`update:${phase.card.domain}`} domain={phase.card.domain} kind="update" button={p.update.button} take={take} />
                </section>
              </>
            )}

            {phase.at === 'missing' && (
              <div className="ob-card ob-card--raised s-lookup__missing">
                <h2 className="ob-card-title">{p.missing.headline(phase.domain)}</h2>
                <p className="ob-card-body">{p.missing.line}</p>
                <AskForm key={`add:${phase.domain}`} domain={phase.domain} kind="add" button={p.missing.button} take={take} />
              </div>
            )}

            {phase.at === 'missing' && (
              <p className="s-lookup__again">
                <button type="button" className="ob-btn ob-btn--link" onClick={again}>
                  <span className="ob-btn-label">{p.another}</span>
                </button>
              </p>
            )}
          </div>
        </section>
      )}

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
function StoreEntry({ card, view, index, again }: { card: Card; view: string; index?: IndexTotals; again: () => void }) {
  const e = p.entry
  const entry = useMemo(() => entryOf(card, view, p.console, e), [card, view, e])
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
      <HeroExplorer
        ex={entry.console}
        first="insights"
        bar={false}
        autoplay={false}
        anchors={false}
        insights={(go) => ({ panel: <LookupInsights card={card} index={index} entry={entry} go={go} /> })}
      />
      <p className="s-lookup__scope">{e.scope}</p>
    </article>
  )
}

/* Insights for an entry (design A): one card for each journey, answering its question from the events in Search,
   read against the index's totals; then the campaign emails after the 48 hours. Worked out here, from the card: the
   index keeps the events, never the answers. "From n events" opens Search at the journey's act. */
function LookupInsights({ card, index, entry, go }: { card: Card; index?: IndexTotals; entry: Entry; go: ConsoleGo }) {
  const t = p.insights
  const r = card.rhythm
  const weeks = r ? Math.max(1, Math.round((Date.parse(r.to) - Date.parse(r.from)) / (7 * 864e5))) : 0
  return (
    <div className="lk-ins">
      <span className="lk-ins__chips">
        <span className="lk-chip">{p.entry.persona}</span>
        <span className="lk-chip">{t.every}</span>
      </span>
      <div className="lk-qs">
        {card.journeys.map((j) => {
          const hours = j.window_hours || 48
          const tot = index?.journeys[j.journey]
          const items = basketText(j)
          const flags = card.faults.filter((f) => f.journey === j.journey)
          const act = entry.acts[j.journey]
          return (
            <article className="lk-q" key={j.journey} data-none={j.emails ? undefined : ''}>
              <p className="lk-q__journey">{p.entry.journeys[j.journey]}</p>
              <h4 className="lk-q__question">{t.questions[j.journey]}</h4>
              <p className="lk-q__answer">{j.emails ? t.yes(after(j.first_after_minutes ?? 0)) : t.no(hours)}</p>
              <p className="lk-q__detail">
                {j.emails ? (
                  <>
                    {t.count(j.emails, hours)} {j.list[0] && t.first(j.list[0].subject || '(no subject)')}
                  </>
                ) : items.length ? (
                  t.left(list(items))
                ) : (
                  t.nothing
                )}
              </p>
              {flags.length > 0 && (
                <ul className="lk-q__flags">
                  {flags.map((f, i) => (
                    <li key={i} data-kind={f.kind}>
                      {f.kind === 'finding' ? f.text : p.entry.faults[f.kind]}
                    </li>
                  ))}
                </ul>
              )}
              <div className="lk-q__foot">
                <span>
                  {tot && tot.runs > 0 &&
                    t.index(Math.round((tot.answered / tot.runs) * 100), tot.runs, tot.median_minutes == null ? '' : tot.median_minutes < 1 ? 'within a minute' : `within ${after(tot.median_minutes)}`)}
                </span>
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
function AskForm({ domain, kind, button, take }: { domain: string; kind: Kind; button: string; take: () => Promise<string | null> }) {
  const uid = useId()
  const offer = kind === 'update' ? 'reindex' : 'index'
  const [email, setEmail] = useState('')
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
