import { useSyncExternalStore } from 'react'
import { catalog } from '../content/catalog'
import { offers, roles, suggested, type OfferId, type RoleId } from '../content/join'
import { keepArrivedFrom } from '../content/signupFlags'
import type { Capture } from '../content/types'
import { track } from './analytics'
import { beaconSnapshot, hasUnsent, hostOf, isAddress, isAgent, queueSnapshot, retrySnapshot, saveStatus } from './waitlist'

/* The waitlist sign up, after the email (components/CaptureForm sends the email; components/JoinCard asks the rest).
   1 sign up per visit, kept in this browser for 23 hours so a reload or another page opens it where they left it (the
   script takes updates to a row for 24 hours). Each finished step sends the whole sign up so far under its sign up ID
   (lib/waitlist queueSnapshot), and anything unsent leaves by beacon when the page closes.
   The steps: role (who they are, and an agency's kind; the page picks a default), about (name, company and website,
   all required so we can reply and look at their store), brands (up to 5, optional, worded for who they are), recipes
   (at least 1) with an optional use case, then done. The script's version decides the columns: 3 and up has Website,
   Agency type, Offer, Brands to check, Recipes and Use case; an older one keeps them in Reader, Job detail, First job,
   Store (or Agent) and Anything else, so nothing is lost whichever goes live first (waitlist/Code.js). */

export type JoinStep = 'role' | 'about' | 'brands' | 'recipes' | 'done'
export const MAX_BRANDS = 5

export type JoinState = {
  v: 1
  sid: string
  email: string
  t: number
  /* No waitlist script (a local build): nothing is sent. */
  preview: boolean
  /* The waitlist script's version, from the email's reply. */
  script: number
  page: string
  source: string
  interest?: string
  offer: OfferId
  free: boolean
  arrivedFrom?: string
  step: JoinStep
  role: RoleId | ''
  agencyType: string
  /* Optional sizes: an agency's clients, a sales team's people. */
  agencyClients: string
  teamSize: string
  name: string
  company: string
  site: string
  brands: string[]
  recipes: string[]
  useCase: string
}

const KEY = 'obs-join'
const KEEP_MS = 23 * 60 * 60 * 1000

/* ---- What a form offers ---- */

/* A free check where the form offers one (its kind), else the reader's job on that page: an agency page, the
   developers' page, or the job of the recipe the page is about. */
export function offerOf(capture: Capture, path: string): { offer: OfferId; free: boolean } {
  const agency = /agenc/.test(path) || /agenc/.test(capture.source)
  if (capture.kind === 'verify') return { offer: 'agents', free: true }
  if (capture.kind === 'mystery') return { offer: agency ? 'clients' : 'store', free: true }
  if (agency) return { offer: 'clients', free: false }
  if (path.startsWith('/developers')) return { offer: 'api', free: false }
  const group = catalog.recipes.find((r) => r.id === capture.interest)?.group
  if (group === 'Check your AI agents') return { offer: 'agents', free: false }
  if (group === 'Check your own journeys') return { offer: 'own', free: false }
  if (group === 'Watch other companies') return { offer: 'companies', free: false }
  return { offer: 'any', free: false }
}

export const microOf = (offer: OfferId, free: boolean) => (free && offers[offer].free ? offers[offer].free!.micro : offers[offer].micro)

/* Who they probably are, from the page: they confirm it with 1 tap or change it. */
export function roleOf(offer: OfferId, path: string): RoleId | '' {
  if (offer === 'clients' || /agenc/.test(path)) return 'agency'
  if (path.startsWith('/marketing')) return 'marketing'
  if (path.startsWith('/sales')) return 'sales'
  if (path.startsWith('/developers')) return 'developer'
  if (offer === 'store' || offer === 'own' || offer === 'index' || offer === 'reindex') return 'brand'
  return ''
}

/* What the brands question asks: the page's free check when it offered one (that's why they came), the AI agents on
   an AI agent page, else what fits who they are: client stores, their own store, the rivals marketing watches, the
   accounts sales works. */
export function askOf(s: Pick<JoinState, 'offer' | 'free' | 'role'>): OfferId {
  if (s.free || s.offer === 'agents' || s.offer === 'index' || s.offer === 'reindex') return s.offer
  if (s.role === 'agency') return 'clients'
  if (s.role === 'brand') return s.offer === 'store' ? 'store' : 'own'
  if (s.role === 'marketing') return 'companies'
  if (s.role === 'sales') return 'accounts'
  if (s.role === 'developer') return 'api'
  return s.offer
}

/* Who gets the brands question: everyone a free check or an AI agent page brought, and everyone whose job is other
   companies or their own store. A developer, or "something else" on a page that offers nothing to check, goes from
   their details to the recipes, where the use case says what they'd build. */
export const asksBrands = (s: Pick<JoinState, 'offer' | 'free' | 'role'>) =>
  s.free || s.offer === 'agents' || s.offer === 'index' || s.offer === 'reindex' || !(s.role === 'developer' || (s.role === 'other' && s.offer === 'any'))

/* The steps this sign up takes, in order. */
export const stepsOf = (s: Pick<JoinState, 'offer' | 'free' | 'role'>): JoinStep[] =>
  asksBrands(s) ? ['role', 'about', 'brands', 'recipes'] : ['role', 'about', 'recipes']

/* The step after (or before) this one on their route. */
export const stepAfter = (s: Pick<JoinState, 'offer' | 'free' | 'role'>, step: JoinStep, by: 1 | -1): JoinStep => {
  const steps = stepsOf(s)
  const i = steps.indexOf(step)
  return by > 0 ? (steps[i + 1] ?? 'done') : (steps[i - 1] ?? steps[0])
}

/* The recipes people like them start with (content/join suggested), shown first and never ticked for them. */
export const suggestionsOf = (s: Pick<JoinState, 'role' | 'agencyType'>) =>
  (s.role ? (suggested[`${s.role}:${s.agencyType}`] ?? suggested[s.role] ?? []) : []).filter((id) => catalog.recipes.some((r) => r.id === id))

/* The recipe a page is about is ticked to start with. */
export const recipeOf = (interest?: string) => (catalog.recipes.some((r) => r.id === interest) ? [interest as string] : [])

/* ---- The store ---- */

/* What the card reads and changes. The website's own is 1 sign up per visit, kept in this browser for 23 hours and sent
   to the waitlist (homeJoin). The store lookup makes one of its own for each site it asks about, kept only as long as
   the page: a company can run many stores, so every lookup asks afresh (pages/Lookup). */
export type SaveState = 'idle' | 'saving' | 'failed'
export type JoinStart = Omit<
  JoinState,
  'v' | 'step' | 'role' | 'agencyType' | 'agencyClients' | 'teamSize' | 'name' | 'company' | 'site' | 'brands' | 'recipes' | 'useCase'
> & { site?: string; brands?: string[] }
export type JoinPatch = Partial<Pick<JoinState, 'role' | 'agencyType' | 'agencyClients' | 'teamSize' | 'name' | 'company' | 'site' | 'brands' | 'recipes' | 'useCase'>>
export type JoinStore = {
  get: () => JoinState | null
  subscribe: (l: () => void) => () => void
  begin: (s: JoinStart) => void
  patch: (p: JoinPatch) => void
  go: (step: JoinStep) => void
  save: { get: () => SaveState; subscribe: (l: () => void) => () => void }
  retry: () => void
}

export function joinStore(o: {
  /* Kept in this browser (KEY) for KEEP_MS, so a reload or another page opens it where they left it. */
  keep: boolean
  /* A step finished: the whole card so far goes out. */
  send: (s: JoinState) => void
  save: JoinStore['save']
  retry: () => void
  /* The page closing with something unsent. */
  flush?: (s: JoinState) => void
  method: string
}): JoinStore {
  let state: JoinState | null = null
  let loaded = !o.keep
  let leaving = false
  const listeners = new Set<() => void>()

  const watchLeaving = () => {
    if (leaving || !o.flush || typeof window === 'undefined') return
    leaving = true
    const flush = () => state && o.flush?.(state)
    window.addEventListener('pagehide', flush)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') flush()
    })
  }
  const load = () => {
    if (loaded || typeof window === 'undefined') return
    loaded = true
    try {
      const raw = localStorage.getItem(KEY)
      if (!raw) return
      const s = JSON.parse(raw) as JoinState
      if (s?.v === 1 && Date.now() - s.t < KEEP_MS && s.email && s.sid) {
        state = s
        watchLeaving()
      } else localStorage.removeItem(KEY)
    } catch {
      /* Storage blocked or unreadable: a fresh sign up. */
    }
  }
  const set = (next: JoinState | null) => {
    state = next
    if (o.keep) {
      try {
        if (state) localStorage.setItem(KEY, JSON.stringify(state))
        else localStorage.removeItem(KEY)
      } catch {
        /* The sign up still works for this page. */
      }
    }
    listeners.forEach((l) => l())
  }

  return {
    get: () => {
      load()
      return state
    },
    subscribe: (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    begin: ({ site, brands, ...s }) => {
      set({
        ...s,
        v: 1,
        step: 'role',
        role: roleOf(s.offer, s.page),
        agencyType: '',
        agencyClients: '',
        teamSize: '',
        name: '',
        company: companyFromEmail(s.email),
        site: site ?? siteFromEmail(s.email),
        brands: brands?.length ? brands : [''],
        recipes: recipeOf(s.interest),
        useCase: '',
      })
      watchLeaving()
    },
    /* Typing: kept, sent with the next step. */
    patch: (p) => {
      if (state) set({ ...state, ...p })
    },
    /* A step finished (or Back): the whole card so far goes out. */
    go: (step) => {
      if (!state) return
      const finishing = step === 'done' && state.step !== 'done'
      set({ ...state, step })
      o.send(state)
      if (finishing) track('sign_up', { method: o.method, offer: state.offer })
    },
    save: o.save,
    retry: o.retry,
  }
}

/* The website's sign up: every form on every page (components/CaptureForm). */
export const homeJoin = joinStore({
  keep: true,
  send: (s) => {
    if (!s.preview) queueSnapshot(snapshotOf(s))
  },
  save: saveStatus,
  retry: retrySnapshot,
  flush: (s) => {
    if (!s.preview && hasUnsent()) beaconSnapshot(snapshotOf(s))
  },
  method: 'waitlist',
})

export const useJoinStore = (store: JoinStore) => useSyncExternalStore(store.subscribe, store.get, () => null)
export const useJoin = () => useJoinStore(homeJoin)
export const begin = homeJoin.begin
export const patch = homeJoin.patch
export const go = homeJoin.go

/* ---- What the sheet gets ---- */

/* The sheet's "Step reached" is the last step finished: 1 Email, 2 Role, 3 Name, 4 Brands, 9 Done. */
const STEP_NO: Record<JoinStep, number> = { role: 1, about: 2, brands: 3, recipes: 4, done: 9 }

/* The brands as the sheet keeps them: hosts for an address, a phone number as typed. */
export const cleanBrands = (s: Pick<JoinState, 'brands'>) =>
  s.brands
    .map((b) => b.trim())
    .filter(Boolean)
    .map((b) => (isAddress(b) ? hostOf(b) : b))

export const recipeNames = (ids: string[]) => ids.map((id) => catalog.recipes.find((r) => r.id === id)?.name ?? id)

export function snapshotOf(s: JoinState): Record<string, string> {
  const brands = asksBrands(s) ? cleanBrands(s).join(', ') : ''
  const recipes = recipeNames(s.recipes).join(', ')
  const reader = roles.find((r) => r.id === s.role)?.sheet ?? ''
  const agencyType = s.role === 'agency' ? s.agencyType : ''
  const site = s.site.trim() ? (isAddress(s.site) ? hostOf(s.site) : s.site.trim()) : ''
  const base: Record<string, string> = {
    sid: s.sid,
    email: s.email,
    step: String(STEP_NO[s.step]),
    source: s.source,
    page: s.page,
    reader,
    name: s.name.trim(),
    company: s.company.trim(),
    agency_clients: s.role === 'agency' ? s.agencyClients : '',
    sales_team: s.role === 'sales' ? s.teamSize : '',
  }
  if (s.interest) base.interest = s.interest
  if (s.arrivedFrom) base.arrived_from = s.arrivedFrom
  if (s.script >= 3) {
    return { ...base, site, agency_type: agencyType, offer: `${s.offer}${s.free ? ' (free check)' : ''}`, brands, recipes, use_case: s.useCase.trim() }
  }
  /* Version 2: the columns it has. */
  const detail = [agencyType && `Agency type: ${agencyType}`, site && `Website: ${site}`].filter(Boolean).join('; ')
  return { ...base, job_detail: detail, [askOf(s) === 'agents' ? 'agent' : 'store']: brands, first_job: recipes, note: s.useCase.trim() }
}

/* ---- Checks ---- */

export const brandOk = (offer: OfferId, value: string) => !value.trim() || (offer === 'agents' ? isAgent(value) : isAddress(value))

/* ---- Small helpers ---- */

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

/* The site that sent them, only once the founders switch it on (content/signupFlags). */
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

const SECOND_LEVEL = new Set(['co', 'com', 'org', 'net', 'ac', 'gov', 'ltd', 'plc', 'edu', 'nhs', 'sch', 'me'])
const FREE_MAIL = new Set([
  'gmail', 'googlemail', 'outlook', 'hotmail', 'live', 'msn', 'icloud', 'me', 'mac', 'yahoo', 'ymail', 'proton', 'protonmail',
  'pm', 'aol', 'gmx', 'mail', 'zoho', 'fastmail', 'hey', 'tutanota', 'yandex', 'btinternet', 'sky', 'virginmedia', 'talktalk',
  'comcast', 'verizon', 'att', 'sbcglobal', 'qq', '163',
])

/* "maya@northwind-labs.co.uk" suggests "Northwind Labs"; a free mail address suggests nothing. */
export function companyFromEmail(email: string) {
  const parts = (email.split('@')[1] ?? '').trim().toLowerCase().split('.').filter(Boolean)
  if (parts.length < 2) return ''
  const tld = parts[parts.length - 1]
  const i = parts.length >= 3 && tld.length === 2 && SECOND_LEVEL.has(parts[parts.length - 2]) ? parts.length - 3 : parts.length - 2
  const name = parts[i]
  if (!name || FREE_MAIL.has(name)) return ''
  return name
    .split(/[-_]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

/* "maya@northwind-labs.co.uk" suggests "northwind-labs.co.uk"; a free mail address suggests nothing. */
export function siteFromEmail(email: string) {
  const host = (email.split('@')[1] ?? '').trim().toLowerCase()
  return companyFromEmail(email) && host.includes('.') ? host : ''
}

/* "a.com", "a.com and b.com", "a.com, b.com and c.com". */
export function listOf(items: string[]) {
  if (items.length < 2) return items[0] ?? ''
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`
}
