import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { JoinCard } from '../components/JoinCard'
import { StatusMark } from '../components/Logo'
import { capture } from '../content/capture'
import { join, offers } from '../content/join'
import { lookupPage as p, type LookupJourney } from '../content/pages/lookup'
import { track } from '../lib/analytics'
import { siteFromEmail, type JoinStore } from '../lib/join'
import { askForVisit, lookUp, lookupJoin, openEmail, turnstile, type Card, type CardEmail, type Kind } from '../lib/lookup'
import { isEmail, isWorkEmail } from '../lib/waitlist'
import { NoticeHero } from './Notice'
import '../components/CaptureForm.css'
import '../components/JoinCard.css'
import './Lookup.css'

/* /lookup: one exact domain in, at most one entry out (content/pages/lookup.ts). The entry is drawn from the Edge
   Function's answer. Under it, or under "not indexed yet", the same form as the website's early access: the work email
   first (a request to update the entry, or to add the site), then the early access card in its place (who they are,
   name, company and site, their other sites, the kinds of data they want). Unlike the website's, nothing is kept: a
   company can run many stores, so each lookup asks afresh. The example under the box runs the lookup for the sample
   store. Nothing here is prerendered but the form: every answer arrives after a lookup. */

type Phase =
  | { at: 'idle' }
  | { at: 'found'; card: Card; view: string }
  | { at: 'missing'; domain: string }

const DATE = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
const day = (iso: string) => DATE.format(new Date(iso.length === 10 ? `${iso}T12:00:00Z` : iso))

function after(minutes: number): string {
  if (minutes < 1) return 'less than a minute'
  if (minutes < 60) return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`
  const hours = Math.round(minutes / 60)
  if (hours < 48) return `${hours} ${hours === 1 ? 'hour' : 'hours'}`
  const days = Math.round(hours / 24)
  return `${days} days`
}

function price(item: { price?: number; currency?: string }): string {
  if (item.price == null) return ''
  try {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: item.currency || 'GBP' }).format(item.price)
  } catch {
    return String(item.price)
  }
}

const list = (words: string[]) => (words.length < 2 ? words.join('') : `${words.slice(0, -1).join(', ')} and ${words[words.length - 1]}`)

export function Lookup() {
  const uid = useId()
  const [phase, setPhase] = useState<Phase>({ at: 'idle' })
  const [domain, setDomain] = useState('')
  const [busy, setBusy] = useState(false)
  const [problem, setProblem] = useState<string | null>(null)
  const [live, setLive] = useState('')
  const [reading, setReading] = useState<{ email: CardEmail; html: string | null; failed: boolean } | null>(null)
  const widget = useRef<HTMLDivElement>(null)
  const check = useRef<ReturnType<typeof turnstile> | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
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
    if (res.data.found) setPhase({ at: 'found', card: res.data.card, view: res.data.view })
    else setPhase({ at: 'missing', domain: res.data.domain })
  }

  async function view(item: CardEmail) {
    if (phase.at !== 'found') return
    setReading({ email: item, html: null, failed: false })
    dialog.current?.showModal()
    const res = await openEmail(item.id, phase.card.domain, phase.view)
    setReading({ email: item, html: res.ok ? res.data.html : null, failed: !res.ok })
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
          <div className="s-wrap s-lookup__wrap" ref={result} tabIndex={-1}>
            {phase.at === 'found' && (
              <>
                <StoreCard card={phase.card} onView={view} />
                <section className="s-lookup__block s-lookup__ask">
                  <h3 className="s-lookup__h">{p.update.headline}</h3>
                  <p className="s-lookup__quiet">{p.update.line(phase.card.domain)}</p>
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

            <p className="s-lookup__again">
              <button type="button" className="ob-btn ob-btn--link" onClick={again}>
                <span className="ob-btn-label">{p.another}</span>
              </button>
            </p>
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

      <dialog className="s-lookup__dialog" ref={dialog} onClose={() => setReading(null)} aria-labelledby={`${uid}-subject`}>
        <div className="s-lookup__dialog-head">
          <p className="s-lookup__dialog-subject" id={`${uid}-subject`}>
            {reading?.email.subject}
          </p>
          <button type="button" className="ob-btn ob-btn--secondary ob-btn--sm" onClick={() => dialog.current?.close()}>
            <span className="ob-btn-label">{p.viewer.close}</span>
          </button>
        </div>
        {reading?.html ? (
          <iframe className="s-lookup__frame" title={reading.email.subject} sandbox="" referrerPolicy="no-referrer" srcDoc={reading.html} />
        ) : (
          <p className="s-lookup__dialog-wait">{reading?.failed ? p.viewer.failed : p.viewer.loading}</p>
        )}
        <p className="s-lookup__dialog-note">{p.viewer.note}</p>
      </dialog>
    </>
  )
}

function StoreCard({ card, onView }: { card: Card; onView: (e: CardEmail) => void }) {
  const f = p.found
  return (
    <article className="s-lookup__card">
      <header className="s-lookup__head">
        <h2 className="s-lookup__name">{card.name ?? card.domain}</h2>
        {card.name && <p className="s-lookup__domain">{card.domain}</p>}
        <dl className="s-lookup__dates">
          <div>
            <dt>{f.visited}</dt>
            <dd>{card.captured.from === card.captured.to ? day(card.captured.from) : `${day(card.captured.from)} to ${day(card.captured.to)}`}</dd>
          </div>
          <div>
            <dt>{f.mailUntil}</dt>
            <dd>{day(card.captured.mail_until)}</dd>
          </div>
        </dl>
      </header>

      <ol className="s-lookup__journeys">
        {card.journeys.map((j) => (
          <li key={j.journey} className={`ob-card s-lookup__journey s-lookup__journey--${j.emails ? 'mail' : 'none'}`}>
            <div className="ob-card-head">
              <h3 className="ob-card-label">{f.journeys[j.journey as LookupJourney]}</h3>
              <span className="ob-card-meta">{day(j.date)}</span>
            </div>
            {j.emails ? (
              <p className="s-lookup__state">
                {f.firstAfter} <strong>{after(j.first_after_minutes ?? 0)}</strong>
                <span className="s-lookup__count">{f.emails(j.emails)}</span>
              </p>
            ) : (
              <p className="s-lookup__state s-lookup__state--none">{f.none(j.window_hours || 48)}</p>
            )}
            {j.list.length > 0 && (
              <ul className="s-lookup__emails">
                {j.list.map((m) => (
                  <li key={m.id}>
                    <span className="s-lookup__subject">{m.subject || '(no subject)'}</span>
                    <button type="button" className="ob-btn ob-btn--link ob-btn--sm" onClick={() => onView(m)}>
                      <span className="ob-btn-label">{f.view}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div className="s-lookup__notes">
              {j.uses_name && <span className="s-lookup__note">{f.usesName}</span>}
              {j.basket.length > 0 && (
                <span className="s-lookup__note">
                  {f.left}: {j.basket.map((b) => [b.name, price(b)].filter(Boolean).join(', ')).join('; ')}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>

      <section className="s-lookup__block">
        <h3 className="s-lookup__h">{f.faultsHeading}</h3>
        {card.faults.length ? (
          <ul className="s-lookup__faults">
            {card.faults.map((x, i) => (
              <li key={i}>
                <span className="s-lookup__fault-where">{f.journeys[x.journey as LookupJourney] ?? x.journey}</span>
                {x.kind === 'finding' ? x.text : f.faults[x.kind]}
                {x.subject && x.kind !== 'finding' && <span className="s-lookup__subject"> “{x.subject}”</span>}
              </li>
            ))}
          </ul>
        ) : (
          <p className="s-lookup__quiet">{f.noFaults}</p>
        )}
      </section>

      {card.rhythm && (
        <section className="s-lookup__block">
          <h3 className="s-lookup__h">{f.rhythmHeading}</h3>
          <p className="s-lookup__rhythm">
            {f.rhythm(card.rhythm.sends, day(card.rhythm.from), day(card.rhythm.to), card.rhythm.per_week)}{' '}
            {card.rhythm.weekday && f.weekday(card.rhythm.weekday)}{' '}
            {card.rhythm.languages.length > 0 && f.languages(list(card.rhythm.languages))}
          </p>
          {card.rhythm.latest && card.rhythm.latest.length > 0 && (
            <>
              <p className="s-lookup__latest">{f.latest}</p>
              <ul className="s-lookup__emails">
                {card.rhythm.latest.map((m) => (
                  <li key={m.id}>
                    <span className="s-lookup__subject">{m.subject || '(no subject)'}</span>
                    <span className="s-lookup__when">{day(m.at)}</span>
                    <button type="button" className="ob-btn ob-btn--link ob-btn--sm" onClick={() => onView(m)}>
                      <span className="ob-btn-label">{f.view}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      )}

      <p className="s-lookup__scope">{f.scope}</p>
    </article>
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
