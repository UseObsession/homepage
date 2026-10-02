/* Sends a sign up to the waitlist: the Google Apps Script web app in waitlist/Code.js (see README, "Waitlist").
   The body is JSON sent as text/plain, which keeps the request simple enough to skip a CORS preflight.
   The same script also takes a plain form POST, so the forms work before the page's script has loaded.
   Without VITE_WAITLIST_URL (local builds) nothing is sent: it waits a moment and reports success, marked preview. */

export const WAITLIST_URL = (import.meta.env.VITE_WAITLIST_URL as string | undefined) || undefined
const TIMEOUT_MS = 15000

export type Signup = {
  email: string
  source: string
  page: string
  company?: string
  role?: string
  interest?: string
  store?: string
  /* The free AI agent check: the agent's chat page or phone number (Code.js saves it in the Agent column). */
  agent?: string
  /* The hidden bot field. Anything in it and the script drops the sign up. */
  website?: string
}

export type SignupResult =
  | { ok: true; preview: boolean }
  | { ok: false; error: 'bad_email' | 'rate_limited' | 'failed' }

export async function submitSignup(signup: Signup): Promise<SignupResult> {
  const body: Record<string, string> = {}
  for (const [k, v] of Object.entries(signup)) if (typeof v === 'string' && v.trim()) body[k] = v.trim()

  if (!WAITLIST_URL) {
    await new Promise((r) => setTimeout(r, 700))
    return { ok: true, preview: true }
  }

  /* The script can take a few seconds to wake; past TIMEOUT_MS the reader gets the retry message instead of a spinner. */
  const stop = new AbortController()
  const timer = setTimeout(() => stop.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(WAITLIST_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(body),
      signal: stop.signal,
    })
    const data = (await res.json()) as { ok?: boolean; error?: string }
    if (res.ok && data.ok) return { ok: true, preview: false }
    if (data.error === 'bad_email' || data.error === 'rate_limited') return { ok: false, error: data.error }
    return { ok: false, error: 'failed' }
  } catch {
    return { ok: false, error: 'failed' }
  } finally {
    clearTimeout(timer)
  }
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const ADDRESS = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/\S*)?$/i
/* A phone number as people type it: an optional +, then digits with spaces, brackets or hyphens, 7 to 15 digits. */
const PHONE = /^\+?[\d\s()-]{7,20}$/

export function isEmail(value: string) {
  return EMAIL.test(value.trim())
}

export function isAddress(value: string) {
  return ADDRESS.test(value.trim())
}

export function isPhone(value: string) {
  const v = value.trim()
  const digits = v.replace(/\D/g, '').length
  return PHONE.test(v) && digits >= 7 && digits <= 15
}

/* An AI agent is reached at a chat page (a web address) or a phone number. */
export function isAgent(value: string) {
  return isAddress(value) || isPhone(value)
}

/* The same checks for the browser's own validation, before the script has loaded. */
export const ADDRESS_PATTERN = '(https?://)?([A-Za-z0-9\\-]+\\.)+[A-Za-z]{2,}(:[0-9]+)?(/\\S*)?'
export const AGENT_PATTERN = `(${ADDRESS_PATTERN})|(\\+?[0-9 \\(\\)\\-]{7,20})`

/* "https://www.your-store.example/shop?x=1" becomes "your-store.example". */
export function hostOf(value: string) {
  return value
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/[/?#].*$/, '')
    .replace(/^www\./i, '')
    .toLowerCase()
}
