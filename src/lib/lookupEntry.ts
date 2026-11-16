import type { LookupJourney, LookupPage } from '../content/pages/lookup'
import type { ExConsole, ExEvent, ExRead } from '../content/types'
import { openEmail, type Card, type CardEmail, type CardJourney, type IndexTotals } from './lookup'

/* A store's entry (the Edge Function's card, lib/lookup.ts) as the console shows a company (components/v5/HeroExplorer):
   one persona behind one wall, its events in time order. For each journey our account's act (signed up, looked at a
   product, left a basket, left a checkout), then each email the site sent; after the journeys, the latest campaign
   emails. An email's clean copy is its evidence, fetched from the function when it is first shown. The facts are what
   the card builder (obsession_index.cards) read: how long after the act an email came, and the faults it found. */

const READER = 'obsession_index.cards'
const ACT: Record<LookupJourney, string> = { welcome: 'sign_up', browse: 'view_product', cart: 'add_to_cart', checkout: 'start_checkout' }

/* "Tue 29 Sep 2026 09:14", in the reader's own time: the console splits it into a day heading and a time. The month
   is spelt here, since some browsers write September "Sept". */
const WEEKDAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const two = (n: number) => String(n).padStart(2, '0')
export function when(iso: string): string {
  const d = new Date(iso)
  return `${WEEKDAY[d.getDay()]} ${d.getDate()} ${MONTH[d.getMonth()]} ${d.getFullYear()} ${two(d.getHours())}:${two(d.getMinutes())}`
}
const DAY = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
export const day = (iso: string) => DAY.format(new Date(iso.length === 10 ? `${iso}T12:00:00Z` : iso))

export function after(minutes: number): string {
  if (minutes < 1) return 'less than a minute'
  if (minutes < 60) return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`
  const hours = Math.round(minutes / 60)
  if (hours < 48) return `${hours} ${hours === 1 ? 'hour' : 'hours'}`
  return `${Math.round(hours / 24)} days`
}

/* "2 min", "27 h", "3 days": how long after its step an email came, short enough for the inbox's left column. */
export function wait(minutes: number): string {
  if (minutes < 1) return '<1 min'
  if (minutes < 60) return `${minutes} min`
  const hours = Math.round(minutes / 60)
  return hours < 100 ? `${hours} h` : `${Math.round(hours / 24)} days`
}
/* "29 Sep", in UTC: the month spelt here, as `when` does. */
export const shortDay = (iso: string) => {
  const d = new Date(iso.length === 10 ? `${iso}T12:00:00Z` : iso)
  return `${d.getUTCDate()} ${MONTH[d.getUTCMonth()]}`
}

export function price(item: { price?: number; currency?: string }): string {
  if (item.price == null) return ''
  try {
    const whole = Number.isInteger(item.price)
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: item.currency || 'GBP', minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: whole ? 0 : 2 }).format(item.price)
  } catch {
    return String(item.price)
  }
}
export const list = (words: string[]) => (words.length < 2 ? words.join('') : `${words.slice(0, -1).join(', ')} and ${words[words.length - 1]}`)
export const basketText = (j: CardJourney) => j.basket.map((b) => [b.name, price(b)].filter(Boolean).join(', ')).filter(Boolean)

export type Entry = {
  console: ExConsole
  /* Each journey's act, and the events from it to the next act, for Insights to point Search at. */
  acts: Partial<Record<LookupJourney, { act: ExEvent; events: number }>>
  emails: Map<string, ExEvent>
}

/* `fetchCopy` gives an email's clean copy: by default from the function, under the lookup's view token; the page's
   sample reads its own static copies. */
export function entryOf(
  card: Card,
  view: string,
  words: LookupPage['console'],
  w: LookupPage['entry'],
  fetchCopy: (id: string) => Promise<string | null> = (id) => openEmail(id, card.domain, view).then((r) => (r.ok ? r.data.html : null)),
): Entry {
  const copies = new Map<string, Promise<string | null>>()
  const load = (id: string) => () => {
    let got = copies.get(id)
    if (!got) {
      got = fetchCopy(id).then((html) => {
        if (html === null) copies.delete(id)
        return html
      })
      copies.set(id, got)
    }
    return got
  }
  const read = (kind: string, text: string, value: ExRead['value']): ExRead => ({ kind, text, value, reader: READER })
  const timed: { iso: string; e: ExEvent }[] = []
  const emails = new Map<string, ExEvent>()
  const acts: Entry['acts'] = {}

  const email = (m: CardEmail, j?: CardJourney): ExEvent => {
    const facts: ExRead[] = []
    if (j && m.after_minutes != null) facts.push(read('after', w.after(after(m.after_minutes), w.since[j.journey]), { minutes: m.after_minutes }))
    for (const f of card.faults) if (f.email === m.id && f.kind !== 'finding') facts.push(read(f.kind, w.faults[f.kind], { [f.kind]: true }))
    const subject = m.subject || '(no subject)'
    return {
      at: when(m.at),
      dir: 'shown',
      kind: 'Email',
      text: subject,
      facts,
      row: { kind: 'email', channel: 'email', wall: ['sign_up'], at: m.at, subject },
      evidence: {
        head: [
          [w.head.subject, subject],
          [w.head.arrived, when(m.at)],
          ...(j && m.after_minutes != null ? [[w.head.after, w.after(after(m.after_minutes), w.since[j.journey])] as [string, string]] : []),
        ],
        body: [subject],
        proof: [w.proof],
        look: { t: 'html', title: subject, load: load(m.id) },
      },
    }
  }

  for (const j of card.journeys) {
    const seed = j.seeded_at ?? `${j.date}T12:00:00Z`
    /* A product view names the product looked at; a basket and a checkout what was in them. */
    const items = j.journey === 'browse' ? basketText(j).slice(0, 1) : basketText(j)
    const facts: ExRead[] = [
      j.emails
        ? read('emails', w.reply(j.emails, j.window_hours || 48, after(j.first_after_minutes ?? 0)), { emails: j.emails, first_after_minutes: j.first_after_minutes ?? 0 })
        : read('emails', w.noReply(j.window_hours || 48), { emails: 0, window_hours: j.window_hours || 48 }),
      ...card.faults.filter((f) => f.journey === j.journey && f.kind === 'finding' && f.text).map((f) => read('finding', f.text!, { finding: f.text! })),
    ]
    const act: ExEvent = {
      at: when(seed),
      dir: 'act',
      kind: 'Act',
      text: w.journeys[j.journey] + (items.length ? `: ${items.join('; ')}` : ''),
      facts,
      row: { kind: 'act', act: ACT[j.journey], wall: ['sign_up'], at: seed, ...(items.length ? { basket: items } : {}) },
    }
    timed.push({ iso: seed, e: act })
    acts[j.journey] = { act, events: 1 + j.list.length }
    for (const m of j.list) {
      const e = email(m, j)
      emails.set(m.id, e)
      timed.push({ iso: m.at, e })
    }
  }
  for (const m of card.rhythm?.latest ?? []) {
    if (emails.has(m.id)) continue
    const e = email(m)
    emails.set(m.id, e)
    timed.push({ iso: m.at, e })
  }
  const events = timed.sort((a, b) => Date.parse(a.iso) - Date.parse(b.iso)).map((t) => t.e)

  return {
    acts,
    emails,
    console: {
      ...words,
      companies: [
        {
          domain: card.domain,
          kind: '',
          covered: true,
          personas: [w.persona],
          walls: [w.wall],
          kinds: [{ label: w.emails, kind: 'Email' }],
          views: [{ persona: w.persona, wall: w.wall, events }],
        },
      ],
    },
  }
}

/* "within a minute", "within 1 hour": how fast half the index's stores are, for a step. */
export const halfWithin = (minutes: number | null | undefined) => (minutes == null ? '' : minutes < 1 ? 'within a minute' : `within ${after(minutes)}`)

/* What to change first (13 Nov, James: an entry finds what to improve, not only email gaps; 16 Nov: the AI shopper
   check left out for now). Ranked: a step with no email, with how many stores in the index send one, then the faults
   in the emails. Each points at the event in Search it comes from. */
export type Change = { title: string; line: string; tone: 'gap' | 'fix'; event?: ExEvent }
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
export function changesOf(card: Card, index: IndexTotals | undefined, entry: Entry, t: LookupPage['insights']): Change[] {
  const out: Change[] = []
  for (const j of card.journeys) {
    if (j.emails) continue
    const tot = index?.journeys[j.journey]
    out.push({ title: t.change.reminder[j.journey], line: tot && tot.runs ? t.share(Math.round((tot.answered / tot.runs) * 100)) : '', tone: 'gap', event: entry.acts[j.journey]?.act })
  }
  for (const f of card.faults) {
    const journey = f.journey as LookupJourney
    if (f.kind === 'finding') {
      if (!f.text || !card.journeys.find((j) => j.journey === journey)?.emails) continue
      out.push({ title: t.change.fix[journey] ?? f.text, line: '', tone: 'fix', event: entry.acts[journey]?.act })
    } else {
      out.push({ title: f.kind === 'blank_name' ? t.change.blank : t.change.placeholder, line: cap(t.where[journey] ?? journey), tone: 'fix', event: f.email ? entry.emails.get(f.email) : undefined })
    }
  }
  return out
}

/* The offers an entry shows: the ones read for it, or else every email subject with a percentage off or free delivery. */
export type Offer = NonNullable<Card['offers']>[number]
export function offersOf(card: Card, t: LookupPage['insights']): Offer[] {
  if (card.offers) return card.offers
  const seen = new Set<string>()
  const mails = [
    ...card.journeys.flatMap((j) => j.list.map((m) => ({ m, where: t.where[j.journey] }))),
    ...(card.rhythm?.latest ?? []).map((m) => ({ m, where: t.rhythmLabel.toLowerCase().replace(/s$/, '') })),
  ]
  return mails
    .filter(({ m }) => /\d{1,2}\s?% off|free (uk |us )?(delivery|shipping)/i.test(m.subject) && !seen.has(m.subject) && (seen.add(m.subject), true))
    .map(({ m, where }) => ({ text: m.subject, where: cap(where), seen: m.at.slice(0, 10) }))
}
