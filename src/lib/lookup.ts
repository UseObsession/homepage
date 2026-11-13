import { joinStore, snapshotOf, type JoinStore, type SaveState } from './join'

/* The store lookup's calls (pages/Lookup.tsx) to the Edge Function store-lookup in the obsession-index Supabase project
   (obsession-index/supabase/functions/store-lookup), and the Cloudflare Turnstile check every lookup and request needs.

   LOOKUP_URL and TURNSTILE_SITE_KEY can be set at build time (VITE_LOOKUP_URL, VITE_TURNSTILE_SITE_KEY). The site key
   is public: Cloudflare's Turnstile widget "useobsession.com lookup" (hostnames useobsession.com and the previews'
   jamesniranye.workers.dev). Its secret is in Supabase Vault (magnet_turnstile_secret), read by the function. On
   localhost the widget refuses: build with VITE_TURNSTILE_SITE_KEY=1x00000000000000000000AA, Cloudflare's test key,
   against a function using the test secret. */

export const LOOKUP_URL: string =
  import.meta.env.VITE_LOOKUP_URL ?? 'https://vmlyznfsqzqlopzlouit.supabase.co/functions/v1/store-lookup'
export const TURNSTILE_SITE_KEY: string = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? '0x4AAAAAAF_YnMXp5KZVi2PK'

export type CardEmail = { id: string; subject: string; after_minutes?: number; at: string }
export type CardJourney = {
  journey: 'welcome' | 'browse' | 'cart' | 'checkout'
  date: string
  seeded_at?: string
  window_hours: number
  emails: number
  first_after_minutes: number | null
  list: CardEmail[]
  uses_name: boolean
  basket: { name?: string; price?: number; currency?: string }[]
  verdict: 'ok' | 'gap' | 'no_email' | null
}
export type CardFault = { journey: string; kind: 'finding' | 'blank_name' | 'placeholder'; text?: string; email?: string; subject?: string }
export type Card = {
  domain: string
  name: string | null
  journeys: CardJourney[]
  faults: CardFault[]
  rhythm: null | {
    sends: number
    from: string
    to: string
    per_week: number
    weekday: string | null
    languages: string[]
    latest?: CardEmail[]
  }
  captured: { from: string; to: string; mail_until: string }
  built_at?: string
}

export type Answer<T> = { ok: true; data: T } | { ok: false; error: 'domain' | 'check' | 'limit' | 'server' | 'email' | 'view' | 'edit' | 'match' | 'link' }

async function call<T>(route: string, body: Record<string, unknown>): Promise<Answer<T>> {
  try {
    const res = await fetch(`${LOOKUP_URL}/${route}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const out = await res.json().catch(() => ({}))
    if (res.ok) return { ok: true, data: out as T }
    const known = ['domain', 'check', 'limit', 'email', 'view', 'edit', 'match', 'link'] as const
    const error = known.find((k) => k === out?.error) ?? 'server'
    return { ok: false, error }
  } catch {
    return { ok: false, error: 'server' }
  }
}

/* How the index as a whole answered each journey: stores that ran it, stores that sent an email in its window, and the
   middle wait before the first. Totals only. */
export type IndexTotals = { stores: number; journeys: Record<string, { runs: number; answered: number; median_minutes: number | null }> }
export type Found = { found: true; domain: string; card: Card; view: string; index?: IndexTotals } | { found: false; domain: string }

export type Kind = 'add' | 'update'
/* The gated lookup (James, 13 Nov): a domain and an email at it. For an indexed store the function emails a link to the
   entry and answers `sent`; the sample store answers its card at once. The link opens /lookup#t=<token>, and the page
   trades the token for the card (`openLink`). */
export type Asked = Found | { found: true; sent: true; domain: string; email: string }
export const askLookup = (domain: string, email: string, token: string) => call<Asked>('ask', { domain, email, token })
export const openLink = (link: string) => call<Found>('open', { link })
export const askForVisit = (domain: string, email: string, kind: Kind, token: string) =>
  call<{ ok: true; domain: string; kind: Kind; id: string; edit: string }>('request', { domain, email, kind, token })

/* The card after the email, for 1 site (components/JoinCard with a store of its own): each finished step sends the card
   so far to the function, 1 at a time and in order, under the request's edit token. Nothing is kept in the browser. */
export function lookupJoin(domain: string, kind: Kind, id: string, edit: string): JoinStore {
  let status: SaveState = 'idle'
  let latest: Record<string, string> | null = null
  let chain: Promise<void> = Promise.resolve()
  const listeners = new Set<() => void>()
  const setStatus = (next: SaveState) => {
    status = next
    listeners.forEach((l) => l())
  }
  const post = () => {
    chain = chain.then(async () => {
      if (!latest) return
      setStatus('saving')
      const res = await call<{ ok: true }>('details', { id, edit, details: latest })
      setStatus(res.ok ? 'idle' : 'failed')
    })
  }
  return joinStore({
    keep: false,
    send: (s) => {
      latest = { ...snapshotOf(s), domain, kind }
      post()
    },
    save: {
      get: () => status,
      subscribe: (l) => {
        listeners.add(l)
        return () => listeners.delete(l)
      },
    },
    retry: post,
    method: 'lookup',
  })
}
export const openEmail = (id: string, domain: string, view: string) =>
  call<{ id: string; subject: string; html: string }>('email', { id, domain, view })

/* ---- Turnstile ---- */

type Turnstile = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string
  reset: (id: string) => void
  remove: (id: string) => void
}
declare global {
  interface Window {
    turnstile?: Turnstile
  }
}

let loading: Promise<Turnstile> | null = null
function loadTurnstile(): Promise<Turnstile> {
  if (window.turnstile) return Promise.resolve(window.turnstile)
  loading ??= new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    s.async = true
    s.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error('turnstile')))
    s.onerror = () => {
      loading = null
      reject(new Error('turnstile'))
    }
    document.head.appendChild(s)
  })
  return loading
}

/* One widget for the page. It shows itself only when Cloudflare wants the reader to act (interaction-only); every
   lookup or request takes a fresh token, and the widget resets after each one, since a token works once. */
export function turnstile(el: HTMLElement) {
  /* A box of its own per mount: React may mount the page twice in development, and Turnstile refuses a second widget
     in a container that held one. */
  const box = document.createElement('div')
  el.appendChild(box)
  let id: string | null = null
  let gone = false
  let token: string | null = null
  let waiting: ((t: string | null) => void)[] = []
  const settle = (t: string | null) => {
    token = t
    for (const w of waiting) w(t)
    waiting = []
  }
  const ready = loadTurnstile().then((ts) => {
    if (!gone)
      id = ts.render(box, {
        sitekey: TURNSTILE_SITE_KEY,
        appearance: 'interaction-only',
        callback: (t: string) => settle(t),
        'expired-callback': () => (token = null),
        'error-callback': () => settle(null),
      })
    return ts
  })
  return {
    async take(): Promise<string | null> {
      try {
        await ready
      } catch {
        return null
      }
      const t =
        token ??
        (await new Promise<string | null>((resolve) => {
          waiting.push(resolve)
          setTimeout(() => resolve(null), 20_000)
        }))
      token = null
      void ready.then((ts) => id && ts.reset(id))
      return t
    },
    remove() {
      gone = true
      void ready.then((ts) => id && ts.remove(id)).catch(() => {}).finally(() => box.remove())
    },
  }
}
