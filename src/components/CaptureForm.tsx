import { createElement, useEffect, useId, useRef, useState, useSyncExternalStore, type ComponentType, type FormEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { capture as copy } from '../content/capture'
import { join } from '../content/join'
import type { Capture } from '../content/types'
import { track } from '../lib/analytics'
import { arrivedFrom, begin, microOf, newId, offerOf, useJoin } from '../lib/join'
import { WAITLIST_URL, isEmail, submitSignup } from '../lib/waitlist'
import { StatusMark } from './Logo'
import './CaptureForm.css'
/* The card's styles, here and not in the card, so they keep their place in the site's 1 sheet (the card's code is a
   chunk of its own that loads on demand, and a style a lazy chunk imports would land after tones.css). */
import './JoinCard.css'

/* The 1 capture form: every form on the site is the waitlist (docs/REBUILD.md, section 9), on the design system's
   .ob-pill-form. It asks for the email only, with the page's own offer as its button ("Check 5 stores free", "Check
   my AI agent free", "Join the waitlist"); the line under it says they're joining the waitlist and what they get
   (content/join.ts, worked out from the form by lib/join offerOf). Once the email is saved, the form becomes the card
   (components/JoinCard) in the same spot: name and company, up to 5 brands in the offer's words, the recipes they
   want first and an optional use case.
   - Before the script loads it is a real form: method="post" to the waitlist script, which takes form posts too. Once
     hydrated it checks the email itself and sends JSON without leaving the page.
   - Errors show 3 ways: the message under the pill, the danger edge, and aria-invalid with aria-describedby.
   - Sending and success are announced through 1 live region that stays mounted; a second submit while sending does
     nothing.
   - The email never waits for the card: it is sent and saved first, with a sign up ID that ties every later step to
     its row (waitlist/Code.js). The card's code is a chunk fetched on demand, warmed the moment a reader touches a form,
     so a page nobody signs up on carries none of it. If it can't load, the form says "You're on the list."
   - 1 sign up per visit (lib/join keeps it for a day): every form on every page shows its card, and a reload opens it
     where they left it. Only the form they typed in moves the focus.
   - An older waitlist script (version 1) keeps the email only: the form then says the plain thank you. */

type Problem = { field: 'email' | 'form'; text: string } | null
type Card = ComponentType<{ owner: boolean }>

/* False on the server and while hydrating, true once the page's script runs: the form checks its own fields from then on. */
const never = () => () => {}
const useHydrated = () => useSyncExternalStore(never, () => true, () => false)

/* The card's code, fetched once for every form on the page. */
let card: Card | null = null
let cardLoad: Promise<Card | null> | null = null
const cardListeners = new Set<() => void>()
function loadCard() {
  cardLoad ??= import('./JoinCard')
    .then((m) => {
      card = m.JoinCard
      cardListeners.forEach((l) => l())
      return card
    })
    .catch(() => {
      cardLoad = null
      return null
    })
  return cardLoad
}
const useCard = () =>
  useSyncExternalStore(
    (l) => {
      cardListeners.add(l)
      return () => cardListeners.delete(l)
    },
    () => card,
    () => null,
  )

/* The form the reader typed in: its card takes the focus as they go. */
let ownerId = ''

export function CaptureForm({ capture, className = '' }: { capture: Capture; className?: string }) {
  const uid = useId()
  const { pathname } = useLocation()
  const { offer, free } = offerOf(capture, pathname)
  const micro = microOf(offer, free)

  const hydrated = useHydrated()
  const signup = useJoin()
  const loadedCard = useCard()
  const [email, setEmail] = useState('')
  const [trap, setTrap] = useState('')
  const [problem, setProblem] = useState<Problem>(null)
  const [busy, setBusy] = useState(false)
  const [live, setLive] = useState('')
  /* The email is saved but the card can't open (its code didn't load, or the script keeps the email only). */
  const [joined, setJoined] = useState(false)
  const joinedRef = useRef<HTMLParagraphElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const sending = useRef(false)
  const moved = useRef(false)
  /* A second try of the same email keeps its sign up ID, so a post that landed but timed out makes no second row. */
  const tried = useRef<{ email: string; sid: string } | null>(null)

  /* A sign up from earlier in this visit (a reload, another page) brings the card's code with it. */
  useEffect(() => {
    if (signup && !loadedCard) void loadCard().then((c) => !c && setJoined(true))
  }, [signup, loadedCard])

  useEffect(() => {
    if (joined && moved.current) joinedRef.current?.focus()
  }, [joined])

  const id = { email: `${uid}-email`, help: `${uid}-help`, error: `${uid}-error`, fail: `${uid}-fail` }

  function flag(text: string) {
    setProblem({ field: 'email', text })
    setLive(text)
    emailRef.current?.focus()
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending.current) return
    setProblem(null)
    if (!email.trim()) return flag(copy.errors.emailEmpty)
    if (!isEmail(email)) return flag(copy.errors.emailBad)

    sending.current = true
    setBusy(true)
    setLive(copy.sending)
    void loadCard()
    const address = email.trim()
    const sid = tried.current?.email === address ? tried.current.sid : newId()
    tried.current = { email: address, sid }
    const from = arrivedFrom()
    const res = await submitSignup({
      email: address,
      sid,
      step: '1',
      source: capture.source,
      page: pathname,
      interest: capture.interest,
      offer: `${offer}${free ? ' (free check)' : ''}`,
      arrived_from: from,
      website: trap,
    })

    if (!res.ok) {
      sending.current = false
      setBusy(false)
      if (res.error === 'bad_email') return flag(copy.errors.emailBad)
      const text = res.error === 'rate_limited' ? copy.errors.limited : copy.errors.server
      setProblem({ field: 'form', text })
      setLive(text)
      return
    }
    moved.current = true
    /* Counted in Google Analytics if the visitor allowed it: the offer, never the email. */
    if (!res.preview) track('generate_lead', { form: offer, free: free ? 'yes' : 'no' })
    /* An older script keeps the email and nothing after it: no card. */
    const script = res.preview ? 3 : (res.v ?? 1)
    if (script < 2) {
      sending.current = false
      setBusy(false)
      setLive(copy.joined.title)
      setJoined(true)
      return
    }
    const loaded = await loadCard()
    sending.current = false
    setBusy(false)
    if (!loaded) {
      setLive(copy.joined.title)
      setJoined(true)
      return
    }
    setLive(join.head.title)
    ownerId = uid
    begin({
      sid,
      email: address,
      t: Date.now(),
      preview: res.preview,
      script,
      page: pathname,
      source: capture.source,
      interest: capture.interest,
      offer,
      free,
      arrivedFrom: from,
    })
  }

  const privacy = (
    <p className="s-capture__privacy">
      {join.privacy.text}{' '}
      <Link className="s-capture__plink" to={join.privacy.to}>
        {join.privacy.link}
      </Link>
    </p>
  )
  const status = (
    <p className="ob-sr" role="status" aria-live="polite">
      {live}
    </p>
  )

  /* Once the email is saved, every form is the card. */
  if (signup && loadedCard) {
    return (
      <div className={`s-capture s-capture--done ${className}`}>
        {createElement(loadedCard, { owner: ownerId === uid })}
        {status}
      </div>
    )
  }

  if (joined) {
    return (
      <div className={`s-capture s-capture--done ${className}`}>
        <div className="ob-confirm">
          <p className="ob-confirm-title" tabIndex={-1} ref={joinedRef}>
            <span className="s-capture__mark" aria-hidden="true">
              <StatusMark state="landed" size={22} />
            </span>
            <span>{copy.joined.title}</span>
          </p>
          <p className="ob-confirm-line">{copy.joined.line}</p>
        </div>
        {status}
      </div>
    )
  }

  return (
    <div className={`s-capture s-capture--${capture.kind} ${className}`}>
      <form
        className={`ob-pill-form${problem ? ' is-error' : ''}`}
        method="post"
        action={WAITLIST_URL}
        noValidate={hydrated}
        onSubmit={submit}
        onFocusCapture={() => void loadCard()}
        aria-busy={busy || undefined}
      >
        <div className="ob-pill-field">
          <label className="ob-pill-entry" htmlFor={id.email}>
            <span className="ob-sr">{copy.email.label}</span>
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
              placeholder={copy.email.placeholder}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (problem) setProblem(null)
              }}
              aria-invalid={problem?.field === 'email' || undefined}
              aria-describedby={[problem?.field === 'email' ? id.error : '', id.help].filter(Boolean).join(' ')}
            />
          </label>
          <button type="submit" className="ob-btn ob-btn--lg ob-pill-action" aria-busy={busy || undefined}>
            <span className="ob-btn-busy" aria-hidden="true">
              <StatusMark state="working" size={18} />
            </span>
            <span className="ob-btn-label">{capture.button}</span>
          </button>
        </div>

        <div className="ob-pill-foot">
          <p className="ob-field-help" id={id.help}>
            {micro}
          </p>
          <p className="ob-field-error ob-anim-message" id={id.error} hidden={problem?.field !== 'email'}>
            {problem?.field === 'email' ? problem.text : ''}
          </p>
          <p className="ob-form-error ob-form-error--inline" id={id.fail}>
            {problem?.field === 'form' ? problem.text : ''}
          </p>
        </div>

        {/* Bots fill every field; people never see this one. */}
        <div className="s-capture__trap" aria-hidden="true">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
          </label>
        </div>
        <input type="hidden" name="source" value={capture.source} />
        <input type="hidden" name="page" value={pathname} />
        {capture.interest && <input type="hidden" name="interest" value={capture.interest} />}
      </form>
      {privacy}
      {status}
    </div>
  )
}
