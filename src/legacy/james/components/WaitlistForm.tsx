import { useId, useState, type FormEvent } from 'react'
import { Mark } from './Logo'
import './WaitlistForm.css'

/* VITE_WAITLIST_URL is the Google Apps Script web app in waitlist/ (see README). It takes JSON sent as
   text/plain, which keeps the request simple enough to skip a CORS preflight. Without the URL the form runs
   in preview and sends nothing. */
const ENDPOINT = import.meta.env.VITE_WAITLIST_URL as string | undefined

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const DOMAIN = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/.*)?$/i

type Props = {
  source: string
  /* Ask for the company to watch first, then the email. */
  withCompany?: boolean
  button?: string
}

export function WaitlistForm({ source, withCompany = false, button = 'Join the waitlist' }: Props) {
  const id = useId()
  const [step, setStep] = useState<'company' | 'email' | 'done'>(withCompany ? 'company' : 'email')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [trap, setTrap] = useState('')

  async function submit(e: FormEvent) {
    e.preventDefault()
    setError('')

    if (step === 'company') {
      if (!DOMAIN.test(company.trim())) {
        setError('Enter a web address, like rivalbrand.com')
        return
      }
      setStep('email')
      return
    }

    if (!EMAIL.test(email.trim())) {
      setError('Enter a work email, like you@company.com')
      return
    }

    if (ENDPOINT) {
      setBusy(true)
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ email: email.trim(), company: company.trim(), source, page: location.pathname, website: trap }),
        })
        const body = (await res.json()) as { ok?: boolean }
        if (!res.ok || !body.ok) throw new Error(String(res.status))
      } catch {
        setBusy(false)
        setError("That didn't go through. Try again in a moment.")
        return
      }
      setBusy(false)
    }
    setStep('done')
  }

  if (step === 'done') {
    return (
      <div className="wl-done" role="status">
        <p className="wl-done-head">
          <Mark size={18} /> You're on the list.
        </p>
        <p className="muted">
          {company
            ? `We'll be in touch about ${company.replace(/^https?:\/\//, '').replace(/\/.*$/, '')} and what you'd like to find out.`
            : "We'll be in touch to ask what you'd like to find out first."}
        </p>
        {!ENDPOINT && <p className="wl-preview">Preview: nothing was sent.</p>}
      </div>
    )
  }

  return (
    <form className="wl" onSubmit={submit} noValidate>
      <div className="wl-row">
        {step === 'company' ? (
          <>
            <label className="sr-only" htmlFor={`${id}-co`}>
              Company to watch
            </label>
            <input
              id={`${id}-co`}
              type="text"
              inputMode="url"
              autoComplete="off"
              placeholder="Any company, e.g. rivalbrand.com"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </>
        ) : (
          <>
            <label className="sr-only" htmlFor={`${id}-em`}>
              Work email
            </label>
            <input
              id={`${id}-em`}
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={email}
              autoFocus={withCompany}
              onChange={(e) => setEmail(e.target.value)}
            />
          </>
        )}
        <button className="btn" type="submit" disabled={busy}>
          {step === 'company' ? 'Watch this company' : button}
        </button>
      </div>
      {step === 'email' && withCompany && (
        <p className="wl-note">Where should we send what we find about {company.replace(/^https?:\/\//, '').replace(/\/.*$/, '')}?</p>
      )}
      <input
        className="wl-trap"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={trap}
        onChange={(e) => setTrap(e.target.value)}
      />
      {error ? (
        <p className="wl-err" role="alert">
          {error}
        </p>
      ) : (
        step === 'email' && <p className="wl-consent">We’ll only use your email to contact you about early access.</p>
      )}
    </form>
  )
}
