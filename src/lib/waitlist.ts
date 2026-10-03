/* Sends a sign up to the waitlist: the Google Apps Script web app in waitlist/Code.js (see README, "Waitlist").
   The body is JSON sent as text/plain, which keeps the request simple enough to skip a CORS preflight.
   The same script also takes a plain form POST, so the forms work before the page's script has loaded.
   Without VITE_WAITLIST_URL (local builds) nothing is sent: it waits a moment and reports success, marked preview.

   Step 1 (the email) is sent and awaited: the reader sees an error if it fails. Every later step of the sign up card
   (components/SignupSteps) goes through queueSnapshot: the whole sign up so far, keyed by its sign up ID (`sid`), sent
   in the background while the reader moves on. 1 post is in flight at a time and the newest snapshot wins, so a lost
   post is healed by the next one. When the page closes, an unsent snapshot leaves by navigator.sendBeacon. */

export const WAITLIST_URL = (import.meta.env.VITE_WAITLIST_URL as string | undefined) || undefined
const TIMEOUT_MS = 15000
/* Tries per snapshot before the thank you says some answers didn't save. */
const TRIES = 3

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
  /* The sign up ID that ties every later step to this row, and the rest of the sign up so far (lib/signup.ts). */
  sid?: string
  step?: string
  [key: string]: string | undefined
}

export type SignupResult =
  | { ok: true; preview: boolean }
  | { ok: false; error: 'bad_email' | 'rate_limited' | 'failed' }

async function post(body: Record<string, string>): Promise<SignupResult> {
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

/* Step 1: empty fields are left out, so a sign up from an older page reads exactly as before. */
export async function submitSignup(signup: Signup): Promise<SignupResult> {
  const body: Record<string, string> = {}
  for (const [k, v] of Object.entries(signup)) if (typeof v === 'string' && v.trim()) body[k] = v.trim()
  return post(body)
}

/* ---- Every later step: the queue ---- */

export type SaveStatus = 'idle' | 'saving' | 'failed'
let latest: Record<string, string> | null = null
let inFlight = false
let tries = 0
let status: SaveStatus = 'idle'
let retryTimer: ReturnType<typeof setTimeout> | undefined
const listeners = new Set<() => void>()

function setStatus(next: SaveStatus) {
  if (next === status) return
  status = next
  listeners.forEach((l) => l())
}

export const saveStatus = {
  get: () => status,
  subscribe(l: () => void) {
    listeners.add(l)
    return () => listeners.delete(l)
  },
}

/* Every key is sent, empty ones included: an empty value clears a column the reader has moved away from (a question
   from another reader after "Change"). */
export function queueSnapshot(snapshot: Record<string, string>) {
  latest = snapshot
  tries = 0
  clearTimeout(retryTimer)
  void pump()
}

async function pump() {
  if (inFlight || !latest) return
  if (!WAITLIST_URL) {
    latest = null
    return
  }
  const body = latest
  inFlight = true
  setStatus('saving')
  const res = await post(body)
  inFlight = false
  if (res.ok) {
    if (latest === body) latest = null
    tries = 0
    setStatus(latest ? 'saving' : 'idle')
    void pump()
    return
  }
  /* A newer snapshot carries everything this one did: send that instead, with its own tries. */
  if (latest !== body) return void pump()
  tries += 1
  if (res.error !== 'failed' || tries >= TRIES) return setStatus('failed')
  retryTimer = setTimeout(() => void pump(), 1200 * tries)
}

/* "Try again" on the thank you. */
export function retrySnapshot() {
  tries = 0
  void pump()
}

/* Unsent when the page closes. */
export function hasUnsent() {
  return !!latest
}

/* The page is closing: the newest snapshot leaves as a beacon, still text/plain, so still no preflight. */
export function beaconSnapshot(snapshot: Record<string, string>) {
  if (!WAITLIST_URL || typeof navigator === 'undefined' || !navigator.sendBeacon) return false
  try {
    const sent = navigator.sendBeacon(WAITLIST_URL, new Blob([JSON.stringify(snapshot)], { type: 'text/plain;charset=utf-8' }))
    if (sent) latest = null
    return sent
  } catch {
    return false
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
