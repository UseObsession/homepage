import { createElement, useSyncExternalStore, type ComponentType, type ReactElement } from 'react'
import { keepArrivedFrom } from '../content/signupFlags'
import { readerNames, readerPages } from '../content/signupReaders'
import type { RoleId } from '../content/types'

/* The light half of the sign up (lib/signup.ts is the rest). Every capture form on every page reads this, so it holds
   none of the question bank: the state of the 1 sign up per visit, where it is kept, step 1 (the email), and the loaders
   for the code that runs the card. That code (lib/signup, content/signup, components/SignupSteps) is its own chunk,
   fetched when a reader first touches a form, so a page that nobody signs up on never carries it.
   - The email never waits for that code: step 1 is built here and sent first, and the sign up is kept as pending in
     sessionStorage before the card's code is asked for. A page that reloads while it loads (a deploy replaced the
     chunk) reopens the card with the fresh code (lib/signup.ts, resume).
   - The state lives in sessionStorage for 24 hours (every read and write in try/catch), so a reload reopens the card at
     the first unanswered step; without storage it simply starts again at its first question, and the row already holds
     the email.
   - Nothing here touches window or document while a component renders: the store starts empty on the server and while
     hydrating, and a saved sign up is read from an effect (CaptureForm). */

export type Kind = 'waitlist' | 'mystery' | 'verify'

/* A page's own thank you for a free shop or check that named a store or an AI agent (Capture.done). */
export type Done = { title: string; line: string }

/* Where the sign up started: the page, its form, and what the page already told us. */
export type Context = {
  page: string
  source: string
  kind: Kind
  interest?: string
  /* A free mystery shop or AI agent check: the store or agent given with the email. */
  store?: string
  agent?: string
  /* The reader the page knows (a reader's own page). */
  pageReader?: RoleId
  /* The page's own question (Capture.roles), asked in place of the first job, or of "Where should results land?" when
     it says `replaces`; on a recipe page, the recipe's name too. */
  question?: { question: string; options: string[]; short?: string; replaces?: 'results'; multi?: boolean; helper?: string }
  recipe?: { name: string }
  /* The page's own thank you for a shop or check (Capture.done). */
  done?: Done
  arrivedFrom?: string
}

export type Answer = { picked: string[]; other?: string }
export type Mark = 'answered' | 'skipped'

export type SignupState = {
  v: 1
  sid: string
  email: string
  ctx: Context
  /* When step 1 was saved (ms): resume only within 24 hours. */
  t: number
  /* The reader: from the page, or picked. Unset before it's asked, or when it was skipped. */
  reader?: RoleId
  /* "Which of these is you?" is in the flow: on a page that doesn't know its reader, or after "Change". */
  askReader: boolean
  readerFrom: '' | 'Page' | 'Asked' | 'Changed'
  readerOther: string
  name: string
  company: string
  /* The company was filled in from the email's domain and hasn't been edited. */
  companyFilled: boolean
  note: string
  answers: Record<string, Answer>
  marks: Record<string, Mark>
  /* The step on screen: a step id, or 'thanks'. */
  current: string
  /* Changing an answer from the thank you returns there. */
  returnTo?: 'thanks'
  /* The furthest step answered or skipped (the sheet's "Step reached"): 1 to 9. */
  reached: number
  done: boolean
  /* The page the thank you was reached on: the only page whose forms keep showing it. */
  doneOn?: string
  /* The thank you's next step, once done. */
  next?: { kind: string; sheet: string; value: string }
  preview: boolean
  /* Moves focus: the form instance that acted, and a counter that ticks on every move. */
  owner: string
  seq: number
  /* Typed but not yet sent with a step (sent by beacon if the page closes). */
  dirty?: boolean
}

export const STORE_KEY = 'obs-signup'
export const RESUME_MS = 24 * 60 * 60 * 1000

let state: SignupState | null = null
const listeners = new Set<() => void>()

export function set(next: SignupState | null, save = true) {
  state = next
  if (save) persist()
  listeners.forEach((l) => l())
}

function persist() {
  try {
    if (state) sessionStorage.setItem(STORE_KEY, JSON.stringify(state))
    else sessionStorage.removeItem(STORE_KEY)
  } catch {
    /* storage blocked: the card lasts as long as the page */
  }
}

const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => listeners.delete(l)
}

export function useSignup() {
  return useSyncExternalStore(
    subscribe,
    () => state,
    () => null,
  )
}

export const getSignup = () => state

/* A sign up whose email is saved but whose card hasn't opened yet: kept before the card's code is asked for, so a
   reload in that moment still opens the card (lib/signup.ts, resume, makes it a full sign up). */
export type Pending = { v: 1; sid: string; email: string; ctx: Context; t: number; preview: boolean; pending: true }

export function savePending(p: Pending) {
  try {
    sessionStorage.setItem(STORE_KEY, JSON.stringify(p))
  } catch {
    /* storage blocked: the card opens only in this page */
  }
}

/* A sign up from earlier in this visit that can still be resumed: the card opens again within 24 hours of the email. */
export function saved(): SignupState | Pending | null {
  let found: (SignupState | Pending) | null = null
  try {
    found = JSON.parse(sessionStorage.getItem(STORE_KEY) ?? 'null') as SignupState | Pending | null
  } catch {
    found = null
  }
  if (!found || found.v !== 1 || !found.sid || !found.email || Date.now() - found.t > RESUME_MS) return null
  return 'pending' in found || !found.done ? found : null
}

/* ---- Step 1: the email ---- */

/* The sign up ID that ties every step to the row step 1 makes (waitlist/Code.js). */
export function newId() {
  try {
    if (crypto.randomUUID) return crypto.randomUUID()
  } catch {
    /* falls through */
  }
  const b = new Uint8Array(16)
  crypto.getRandomValues(b)
  return Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('')
}

/* The reader a page knows from its address, else undefined (content/signupReaders.ts). */
export const readerOfPage = (path: string): RoleId | undefined => readerPages[path]

/* The referring site's host, or utm_source: never a full address. Only when the founders switch it on. */
export function arrivedFrom() {
  if (!keepArrivedFrom) return undefined
  try {
    const utm = new URLSearchParams(location.search).get('utm_source')
    if (utm) return utm.slice(0, 60)
    const ref = document.referrer ? new URL(document.referrer).host : ''
    return ref && ref !== location.host ? ref : undefined
  } catch {
    return undefined
  }
}

/* Step 1's post: the email, the sign up ID and what the page told us. Every later post is the whole sign up so far
   (lib/signup.ts, snapshot), so it adds the rest; where the page already names the first job (a free shop or check,
   a recipe), the card sends that at once, with its Call first. */
export type StepOne = { sid: string; email: string; step: string; source: string; page: string; [key: string]: string }

export function stepOne(email: string, ctx: Context, sid: string): StepOne {
  const reader = ctx.pageReader
  const body: StepOne = {
    sid,
    email: email.trim(),
    step: '1',
    source: ctx.source,
    page: ctx.page,
    interest: ctx.interest ?? '',
    store: ctx.store ?? '',
    agent: ctx.agent ?? '',
    reader: reader ? readerNames[reader] : '',
    reader_from: reader ? 'Page' : '',
  }
  if (keepArrivedFrom) body.arrived_from = ctx.arrivedFrom ?? ''
  return body
}

/* ---- The code that runs the card, loaded on demand ---- */

export const loadSignup = () => import('./signup')

type Card = ComponentType<{ owner: string }>
let card: Card | null = null
let loading: Promise<boolean> | undefined
const waiting = new Set<() => void>()

/* The card's component. A failed load is forgotten, so the next touch of a form tries again. */
export function loadCard() {
  loading ??= import('../components/SignupSteps')
    .then((m) => {
      card = m.SignupSteps
      waiting.forEach((l) => l())
      return true
    })
    .catch(() => {
      loading = undefined
      return false
    })
  return loading
}

/* A reader has touched a form: fetch the card's code now, so it is usually there by the time the email has saved. */
export function warmSignup() {
  void Promise.all([loadSignup(), loadCard()]).catch(() => undefined)
}

/* Whether the card has loaded: until then a form keeps showing its own fields. */
export function useCardReady() {
  return useSyncExternalStore(
    (l) => {
      waiting.add(l)
      return () => waiting.delete(l)
    },
    () => card !== null,
    () => false,
  )
}

/* The card as a component that always exists, so a form can place it in its tree: it draws the loaded one. A form
   renders it only once useCardReady says so. */
export const SignupCard = (props: { owner: string }): ReactElement | null => (card ? createElement(card, props) : null)
