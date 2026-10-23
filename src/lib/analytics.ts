/* Google Analytics (GA4), only with the visitor's yes. Nothing from Google loads and no cookie is set until they choose
   Allow on the consent card (components/ConsentBanner). The loader lives in the page shell (index.html, window.obsGa),
   so a visitor who said yes before is counted from the first paint, before the app loads; this module runs it when the
   yes comes later. Decline, or a browser that sends Global Privacy Control, keeps it off; Cookie settings in the footer
   reopens the card. Ads signals stay off whatever they choose. */

export type Consent = 'granted' | 'denied'

type ObsGa = { id: string; on: boolean; load: () => void }
declare global {
  interface Window {
    obsGa?: ObsGa
    gtag?: (...args: unknown[]) => void
    [disable: `ga-disable-${string}`]: boolean | undefined
  }
}

const KEY = 'obs-consent'
/* Cookie settings (the footer) asks the card to open with this event. */
export const OPEN_CONSENT = 'obs-consent-open'

export function consent(): Consent | null {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

/* The browser's own "don't share" signal: the card doesn't ask, and nothing loads unless they open Cookie settings and
   say yes. */
export const gpc = () => typeof navigator !== 'undefined' && (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true

export function choose(c: Consent) {
  try {
    localStorage.setItem(KEY, c)
  } catch {
    /* Storage blocked: the choice holds for this page only. */
  }
  const ga = window.obsGa
  if (!ga) return
  if (c === 'granted') {
    if (!ga.on) return ga.load()
    window[`ga-disable-${ga.id}`] = false
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
    return
  }
  if (!ga.on) return
  window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
  window[`ga-disable-${ga.id}`] = true
  clearCookies()
}

/* A no after a yes: Google's cookies (_ga and _ga_ with our ID) go too, on this host and each domain above it, where
   Google sets them. */
function clearCookies() {
  const names = document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((n) => n === '_ga' || n.startsWith('_ga_'))
  const parts = location.hostname.split('.')
  const domains = parts.map((_, i) => parts.slice(i).join('.')).filter((d) => d.includes('.'))
  for (const n of names) {
    document.cookie = `${n}=; Max-Age=0; path=/`
    for (const d of domains) document.cookie = `${n}=; Max-Age=0; path=/; domain=.${d}`
  }
}

/* An event, only while analytics is on. Never an email or anything typed: the name of what happened and where. */
export function track(event: string, params: Record<string, string> = {}) {
  if (!window.obsGa?.on || consent() !== 'granted') return
  window.gtag?.('event', event, params)
}
