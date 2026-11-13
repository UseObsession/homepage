/* The store lookup's calls (pages/Lookup.tsx) to the Edge Function store-lookup in the obsession-index Supabase project
   (obsession-index/supabase/functions/store-lookup), and the Cloudflare Turnstile check every lookup and request needs.

   LOOKUP_URL and TURNSTILE_SITE_KEY can be set at build time (VITE_LOOKUP_URL, VITE_TURNSTILE_SITE_KEY). The site key
   below is Cloudflare's published test key, which passes every check: it works only with the test secret, so the
   real site key replaces it before the page goes live, and the build warns while it is here (scripts/prerender.mjs). */

export const LOOKUP_URL: string =
  import.meta.env.VITE_LOOKUP_URL ?? 'https://vmlyznfsqzqlopzlouit.supabase.co/functions/v1/store-lookup'
export const TEST_SITE_KEY = '1x00000000000000000000AA'
export const TURNSTILE_SITE_KEY: string = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? TEST_SITE_KEY

export type CardEmail = { id: string; subject: string; after_minutes?: number; at: string }
export type CardJourney = {
  journey: 'welcome' | 'browse' | 'cart' | 'checkout'
  date: string
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
}

export type Answer<T> = { ok: true; data: T } | { ok: false; error: 'domain' | 'check' | 'limit' | 'server' | 'email' | 'view' }

async function call<T>(route: string, body: Record<string, unknown>): Promise<Answer<T>> {
  try {
    const res = await fetch(`${LOOKUP_URL}/${route}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const out = await res.json().catch(() => ({}))
    if (res.ok) return { ok: true, data: out as T }
    const known = ['domain', 'check', 'limit', 'email', 'view'] as const
    const error = known.find((k) => k === out?.error) ?? 'server'
    return { ok: false, error }
  } catch {
    return { ok: false, error: 'server' }
  }
}

export type Found = { found: true; domain: string; card: Card; view: string } | { found: false; domain: string }

export const lookUp = (domain: string, token: string) => call<Found>('lookup', { domain, token })
export const askForVisit = (domain: string, email: string, token: string) => call<{ ok: true; domain: string }>('request', { domain, email, token })
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
