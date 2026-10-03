import { useEffect, useId, useRef, useState, useSyncExternalStore, type FormEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { capture as copy } from '../content/capture'
import { recipeBySlug } from '../content/registry'
import type { Capture } from '../content/types'
import { draft, readerOfPage, resume, snapshot, start, useSignup, type Context } from '../lib/signup'
import { ADDRESS_PATTERN, AGENT_PATTERN, WAITLIST_URL, isAddress, isAgent, isEmail, submitSignup } from '../lib/waitlist'
import { StatusMark } from './Logo'
import { SignupSteps } from './SignupSteps'
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
   - Once the email is saved, the form becomes the sign up card (components/SignupSteps) in the same spot: name and
     company, who they are where the page doesn't say, 4 questions for that reader, a note, then 1 next step. Every
     form on the page shows the same card (lib/signup holds 1 sign up per visit), and a reload reopens it.
     Step 1 carries a sign up ID that ties every later step to the row it makes (waitlist/Code.js).
   - The page's reader comes from its address (content/signup.ts, readers' `path`); a recipe page's own question
     (Capture.roles) is asked in place of the first job, as is "Whose store/AI agent is it?" on a free shop or check.
   - Under every form, 1 privacy line links /privacy. When the page's own micro line already says what we keep, the link
     closes that line instead, so the promise is never said twice and the foot stays 1 line.
   - A mystery or verify form with `orWaitlist` takes a blank first field: the reader joins the waitlist instead (its
     micro says so).
   - Before the script runs, the 2 step form's email row is hidden (:root.js), so its email field is only required once
     the page has hydrated: a native post in that moment never fails on a field the reader can't see. */

type Step = 'start' | 'email'
type Field = 'store' | 'email'
type Problem = { field: Field | 'form'; text: string } | null

/* False on the server and while hydrating, true once the page's script runs: the form checks its own fields from then on. */
const never = () => () => {}
const useHydrated = () => useSyncExternalStore(never, () => true, () => false)

/* A micro line that mentions the email already says what we keep. */
const saysWhatWeKeep = (micro?: string) => !!micro && /\bemail\b/i.test(micro)
/* "https://" sits before the field only when the placeholder is a bare address ("your-store.example"), not a sentence. */
const bareAddress = (placeholder: string) => !/\s/.test(placeholder)

export function CaptureForm({ capture, className = '' }: { capture: Capture; className?: string }) {
  const uid = useId()
  const { pathname } = useLocation()
  /* The 2 step forms: the store (mystery) or the AI agent (verify) first, then the email. Their first field is held
     in `store` either way, and sent as `store` or `agent`. */
  const verify = capture.kind === 'verify'
  const mystery = capture.kind === 'mystery' || verify
  const first = verify ? copy.agent : copy.store
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
  const signup = useSignup()

  const sending = useRef(false)
  /* A second try of the same email keeps its sign up ID, so a post that landed but timed out makes no second row. */
  const tried = useRef<{ email: string; sid: string } | null>(null)
  const storeRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const moved = useRef(false)

  /* Focus follows the step the reader just took: into the email once it opens. The card moves it from then on. */
  useEffect(() => {
    if (moved.current && step === 'email') emailRef.current?.focus()
  }, [step])

  /* A sign up from earlier in this visit (a reload, or another page) reopens its card. */
  useEffect(() => resume(), [])

  const id = {
    store: `${uid}-store`,
    email: `${uid}-email`,
    help: `${uid}-help`,
    error: `${uid}-error`,
    fail: `${uid}-fail`,
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
    /* The page's reader, and on a recipe page its name and its own question. */
    const slug = pathname.startsWith('/recipes/') ? pathname.slice('/recipes/'.length) : ''
    const recipe = slug ? recipeBySlug[slug] : undefined
    const ctx: Context = {
      page: pathname,
      source: capture.source,
      kind: capture.kind,
      interest: capture.interest,
      store: shop && !verify ? store.trim() : undefined,
      agent: shop && verify ? store.trim() : undefined,
      pageReader: readerOfPage(pathname),
      recipe: recipe ? { name: recipe.name, question: capture.roles } : undefined,
    }
    const signupDraft = draft(email, ctx)
    if (tried.current?.email === signupDraft.email) signupDraft.sid = tried.current.sid
    tried.current = { email: signupDraft.email, sid: signupDraft.sid }
    const res = await submitSignup({ ...snapshot(signupDraft), website: trap })
    sending.current = false
    setBusy(false)

    if (!res.ok) {
      if (res.error === 'bad_email') return flag('email', copy.errors.emailBad)
      const text = res.error === 'rate_limited' ? copy.errors.limited : copy.errors.server
      setProblem({ field: 'form', text })
      setLive(text)
      return
    }
    setLive('')
    start(signupDraft, uid, res.preview)
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

  /* Once the email is saved, every form on the page is the card. After the thank you, only on the page it ended on. */
  if (signup && (!signup.done || signup.doneOn === pathname)) {
    return (
      <div className={`s-capture s-capture--done ${className}`}>
        <SignupSteps owner={uid} />
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
