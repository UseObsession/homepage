import { useEffect, useId, useRef, useState, useSyncExternalStore, type FormEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { capture as copy } from '../content/capture'
import type { Capture } from '../content/types'
import { ADDRESS_PATTERN, AGENT_PATTERN, WAITLIST_URL, hostOf, isAddress, isAgent, isEmail, submitSignup } from '../lib/waitlist'
import { StatusMark } from './Logo'
import './CaptureForm.css'

/* The 1 capture form (docs/REBUILD.md, section 9), on the design system's .ob-pill-form, .ob-field, .ob-chips and
   .ob-confirm. kind "waitlist" asks for an email; kind "mystery" asks for the store first, then opens the email under it;
   kind "verify" does the same with the AI agent to check (its chat page or phone number), saved as `agent`.
   - Before the script loads it is a real form: method="post" to the waitlist script, which takes form posts too, with
     the browser's own checks. Once hydrated it checks the fields itself and sends JSON, without leaving the page.
   - Errors show 3 ways: the message under the pill, the danger edge, and aria-invalid with aria-describedby. Typing
     in the field clears its error.
   - Sending and success are announced through 1 live region that stays mounted; a second submit while sending does
     nothing.
   - After a sign up, 1 tap answers the roles question. It is saved with the sign up: a 2nd post with the same email
     and source, which the script folds into the same row. Arrowing through the chips sends only the last one.
   - Under every form, 1 privacy line links /privacy. When the page's own micro line already says what we keep, the link
     closes that line instead, so the promise is never said twice and the foot stays 1 line.
   - A mystery or verify form with `orWaitlist` takes a blank first field: the reader joins the waitlist instead (its
     micro says so).
   - A mystery or verify form may carry its own thank you (`done`) for an offer that is more than the 1 free report,
     such as the agencies' 5 stores; without one it says the shared words (content/capture).
   - Before the script runs, the 2 step form's email row is hidden (:root.js), so its email field is only required once
     the page has hydrated: a native post in that moment never fails on a field the reader can't see. */

type Step = 'start' | 'email' | 'done'
type Field = 'store' | 'email'
type Problem = { field: Field | 'form'; text: string } | null
type Saving = 'idle' | 'saving' | 'saved' | 'failed'

/* False on the server and while hydrating, true once the page's script runs: the form checks its own fields from then on. */
const never = () => () => {}
const useHydrated = () => useSyncExternalStore(never, () => true, () => false)

/* A micro line that mentions the email already says what we keep. */
const saysWhatWeKeep = (micro?: string) => !!micro && /\bemail\b/i.test(micro)
/* "https://" sits before the field only when the placeholder is a bare address ("your-store.example"), not a sentence. */
const bareAddress = (placeholder: string) => !/\s/.test(placeholder)

const ROLE_SETTLE_MS = 600

export function CaptureForm({ capture, className = '' }: { capture: Capture; className?: string }) {
  const uid = useId()
  const { pathname } = useLocation()
  /* The 2 step forms: the store (mystery) or the AI agent (verify) first, then the email. Their first field is held
     in `store` either way, and sent as `store` or `agent`. */
  const verify = capture.kind === 'verify'
  const mystery = capture.kind === 'mystery' || verify
  const first = verify ? copy.agent : copy.store
  const roles = capture.roles ?? (verify ? copy.agent.roles : copy.roles)
  const storePlaceholder = capture.placeholder ?? first.placeholder

  const hydrated = useHydrated()
  const [step, setStep] = useState<Step>('start')
  const [store, setStore] = useState('')
  /* A 2 step form sends a shop or a check only with its first field; a blank one (orWaitlist) is a waitlist sign up. */
  const shop = mystery && !!store.trim()
  const [email, setEmail] = useState('')
  const [trap, setTrap] = useState('')
  const [problem, setProblem] = useState<Problem>(null)
  const [busy, setBusy] = useState(false)
  const [live, setLive] = useState('')
  const [preview, setPreview] = useState(false)
  const [role, setRole] = useState('')
  const [saving, setSaving] = useState<Saving>('idle')

  const sending = useRef(false)
  const storeRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const moved = useRef(false)
  const roleTimer = useRef<number | undefined>(undefined)

  /* Focus follows the step the reader just took: into the email once it opens, onto the thank-you once it lands. */
  useEffect(() => {
    if (!moved.current) return
    if (step === 'email') emailRef.current?.focus()
    if (step === 'done') titleRef.current?.focus()
  }, [step])

  useEffect(() => () => window.clearTimeout(roleTimer.current), [])

  const id = {
    store: `${uid}-store`,
    email: `${uid}-email`,
    help: `${uid}-help`,
    error: `${uid}-error`,
    fail: `${uid}-fail`,
    q: `${uid}-q`,
    thanks: `${uid}-thanks`,
  }

  function flag(field: Field, text: string) {
    setProblem({ field, text })
    setLive(text)
    ;(field === 'store' ? storeRef : emailRef).current?.focus()
  }

  function edit(field: Field, value: string) {
    ;(field === 'store' ? setStore : setEmail)(value)
    if (problem && (problem.field === field || problem.field === 'form')) setProblem(null)
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending.current) return
    setProblem(null)

    if (mystery) {
      if (!store.trim()) {
        if (!capture.orWaitlist)
          return flag('store', capture.label ? `Enter ${capture.label[0].toLowerCase()}${capture.label.slice(1)}.` : verify ? copy.errors.agentEmpty : copy.errors.storeEmpty)
      } else if (!(verify ? isAgent(store) : isAddress(store))) return flag('store', verify ? copy.errors.agentBad : copy.errors.storeBad)
      if (step === 'start' && !email.trim()) {
        moved.current = true
        setStep('email')
        setLive(first.next)
        return
      }
    }
    if (!email.trim()) return flag('email', copy.errors.emailEmpty)
    if (!isEmail(email)) return flag('email', copy.errors.emailBad)

    sending.current = true
    setBusy(true)
    setLive(copy.sending)
    const res = await submitSignup({
      email,
      store: shop && !verify ? store : undefined,
      agent: shop && verify ? store : undefined,
      interest: capture.interest,
      source: capture.source,
      page: pathname,
      website: trap,
    })
    sending.current = false
    setBusy(false)

    if (!res.ok) {
      if (res.error === 'bad_email') return flag('email', copy.errors.emailBad)
      const text = res.error === 'rate_limited' ? copy.errors.limited : copy.errors.server
      setProblem({ field: 'form', text })
      setLive(text)
      return
    }
    setPreview(res.preview)
    setLive('')
    moved.current = true
    setStep('done')
  }

  /* The answer is saved once the reader settles on it, so arrowing through the chips sends 1 post, not 6. */
  function pick(value: string) {
    setRole(value)
    setSaving('saving')
    window.clearTimeout(roleTimer.current)
    roleTimer.current = window.setTimeout(async () => {
      const res = await submitSignup({
        email,
        role: value,
        store: shop && !verify ? store : undefined,
        agent: shop && verify ? store : undefined,
        interest: capture.interest,
        source: capture.source,
        page: pathname,
      })
      setSaving(res.ok ? 'saved' : 'failed')
      /* A chip that is still checked can't be picked again, so a failed save lets go of it. */
      if (!res.ok) setRole('')
    }, ROLE_SETTLE_MS)
  }

  const errorOn = (field: Field) => problem?.field === field
  const describe = (field: Field) =>
    [errorOn(field) ? id.error : '', capture.micro ? id.help : ''].filter(Boolean).join(' ') || undefined

  const inline = saysWhatWeKeep(capture.micro)
  const privacyText = inline ? '' : verify ? copy.privacy.verify : mystery ? copy.privacy.mystery : copy.privacy.waitlist
  const privacyLink = (
    <Link className="s-capture__plink" to={copy.privacy.to}>
      {copy.privacy.link}
    </Link>
  )
  const privacy = (
    <p className="s-capture__privacy">
      {privacyText && <>{privacyText} </>}
      {privacyLink}
    </p>
  )
  const status = (
    <p className="ob-sr" role="status" aria-live="polite">
      {live}
    </p>
  )

  if (step === 'done') {
    const done = shop ? (capture.done ?? (verify ? copy.done.verify : copy.done.mystery)) : copy.done.waitlist
    /* The store, the AI agent and the email are set as values that never break at a hyphen ("your-" / "store.example"). */
    const values: Record<string, string> = { '{store}': hostOf(store), '{agent}': hostOf(store), '{email}': email.trim() }
    const fill = (t: string) =>
      t.split(/(\{store\}|\{agent\}|\{email\})/).map((part, i) =>
        values[part] ? (
          <span className="s-capture__value" key={i}>
            {values[part]}
          </span>
        ) : (
          part
        ),
      )
    return (
      <div className={`s-capture s-capture--done ${className}`}>
        <div className="ob-confirm ob-anim-rise is-slow">
          <p className="ob-confirm-title" ref={titleRef} tabIndex={-1}>
            <span className="s-capture__mark" aria-hidden="true">
              <StatusMark state="landed" size={22} />
            </span>
            <span>{fill(done.title)}</span>
          </p>
          <p className="ob-confirm-line">{fill(done.line)}</p>
          <fieldset className="ob-chips s-capture__roles" aria-describedby={id.thanks}>
            <legend className="s-capture__q" id={id.q}>
              {roles.question}
            </legend>
            {roles.options.map((o) => (
              <label className="ob-chip" key={o}>
                <input className="ob-chip-input" type="radio" name={`${uid}-role`} value={o} checked={role === o} onChange={() => pick(o)} />
                <span className="ob-chip-label">{o}</span>
              </label>
            ))}
          </fieldset>
          <p className="ob-confirm-thanks" id={id.thanks} role="status">
            {saving === 'saved' ? copy.roles.thanks : saving === 'failed' ? copy.roles.failed : ''}
          </p>
          {preview && <p className="s-capture__preview">{copy.preview}</p>}
        </div>
        {privacy}
        {status}
      </div>
    )
  }

  const open = step === 'email'

  return (
    <div className={`s-capture s-capture--${capture.kind} ${className}`}>
      <form
        className={`ob-pill-form${problem ? ' is-error' : ''}`}
        method="post"
        action={WAITLIST_URL}
        noValidate={hydrated}
        onSubmit={submit}
        aria-busy={busy || undefined}
      >
        <div className="ob-pill-field">
          {mystery ? (
            <label className="ob-pill-entry" htmlFor={id.store}>
              <span className="ob-sr">{capture.label ?? first.label}</span>
              {!verify && bareAddress(storePlaceholder) && (
                <span className="ob-pill-affix" aria-hidden="true">
                  {copy.store.prefix}
                </span>
              )}
              <input
                ref={storeRef}
                className="ob-pill-input"
                id={id.store}
                name={verify ? 'agent' : 'store'}
                type="text"
                inputMode={verify ? undefined : 'url'}
                autoComplete={verify ? 'off' : 'url'}
                autoCapitalize="none"
                spellCheck={false}
                required={!capture.orWaitlist}
                pattern={verify ? AGENT_PATTERN : ADDRESS_PATTERN}
                placeholder={storePlaceholder}
                value={store}
                onChange={(e) => edit('store', e.target.value)}
                aria-invalid={errorOn('store') || undefined}
                aria-describedby={describe('store')}
              />
            </label>
          ) : (
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
                placeholder={capture.placeholder ?? copy.email.placeholder}
                value={email}
                onChange={(e) => edit('email', e.target.value)}
                aria-invalid={errorOn('email') || undefined}
                aria-describedby={describe('email')}
              />
            </label>
          )}

          {mystery && (
            <div className={`ob-pill-more ob-anim-expand s-capture__more${open ? ' is-open' : ''}`}>
              <div>
                <div className="ob-pill-more-in">
                  <div className="ob-field">
                    <label className="ob-label" htmlFor={id.email}>
                      {store.trim() || !capture.orWaitlist ? first.next : copy.email.label}
                    </label>
                    <input
                      ref={emailRef}
                      className="ob-input ob-input--lg"
                      id={id.email}
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      autoCapitalize="none"
                      spellCheck={false}
                      required={hydrated}
                      placeholder={copy.email.placeholder}
                      value={email}
                      onChange={(e) => edit('email', e.target.value)}
                      aria-invalid={errorOn('email') || undefined}
                      aria-describedby={describe('email')}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <button type="submit" className="ob-btn ob-btn--lg ob-pill-action" aria-busy={busy || undefined}>
            <span className="ob-btn-busy" aria-hidden="true">
              <StatusMark state="working" size={18} />
            </span>
            <span className="ob-btn-label">{capture.button}</span>
          </button>
        </div>

        <div className="ob-pill-foot">
          {capture.micro && (
            <p className="ob-field-help" id={id.help}>
              {capture.micro}
              {inline && <> {privacyLink}</>}
            </p>
          )}
          <p className="ob-field-error ob-anim-message" id={id.error} hidden={!problem || problem.field === 'form'}>
            {problem && problem.field !== 'form' ? problem.text : ''}
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
      {!inline && privacy}
      {status}
    </div>
  )
}
