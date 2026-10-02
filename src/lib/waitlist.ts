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

export function isEmail(value: string) {
  return EMAIL.test(value.trim())
}

export function isAddress(value: string) {
  return ADDRESS.test(value.trim())
}

/* The same check for the browser's own validation, before the script has loaded. */
export const ADDRESS_PATTERN = '(https?://)?([A-Za-z0-9\\-]+\\.)+[A-Za-z]{2,}(:[0-9]+)?(/\\S*)?'

/* "https://www.your-store.example/shop?x=1" becomes "your-store.example". */
export function hostOf(value: string) {
  return value
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/[/?#].*$/, '')
    .replace(/^www\./i, '')
    .toLowerCase()
}
