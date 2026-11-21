/* Every price on the site, read from the pricing source: src/lib/pricing/pricing.json, copied from pricing/ in the
   workspace by `npm run pricing` (the founders' calculator reads the same file). Each piece's retail price, each plan's
   monthly price and included amounts, and what Free's number receives come from there; only the words are written here
   (each piece's name, unit and note, each plan's name). Change a number in the workspace's pricing.json, run
   `npm run pricing`, and it changes everywhere. /pricing, /pricing/rates, the piece pages and the developers page read
   these; Home shows no prices (James, 20 Nov). `value` is the number in US dollars per `per`, for the estimator; `amount`
   and `unit` are the words a reader sees. The browser gets only the values this module exports, never the JSON
   (vite.config.ts contentIndex), so it exports data only, no functions. Each blueprint's tiers are priced from the same
   file by content/blueprint-tiers.ts. */
import source from '../lib/pricing/pricing.json'

export type PieceId = 'email' | 'phone' | 'messaging' | 'browser' | 'sandbox' | 'personas'

export type Price = {
  piece: PieceId
  /* What is billed, as a reader names it. */
  name: string
  /* The price as written, and what it is per. */
  amount: string
  unit: string
  /* The same price as a number, for the estimator: dollars per `per`. Absent where the price isn't a fixed number. */
  value?: number
  per?: string
  note?: string
}

/* ---- Reading the JSON ---- */

type Piece = (typeof source.pieces)[number]
const piece = (id: string): Piece => {
  const p = source.pieces.find((x) => x.id === id)
  if (!p) throw new Error(`prices.ts: no piece "${id}" in src/lib/pricing/pricing.json`)
  return p
}
const retail = (id: string) => piece(id).retail ?? 0
/* How many units the JSON shows a piece's price for (1,000 emails, a million events). */
const displayPer = (id: string) => piece(id).displayPer ?? 1

/* 1,000 with its comma. */
const figure = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
/* Dollars as a price is written: "$140", "$1.50", "$0.08", "$0.015". */
const money = (n: number) => {
  const x = Math.round(n * 1e6) / 1e6
  if (Number.isInteger(x)) return `$${figure(x)}`
  return `$${x.toFixed(Math.max(2, String(x).split('.')[1].length))}`
}
/* A piece's price as written, for the units it is shown per; "Free" when it costs nothing. */
const amountOf = (id: string) => (retail(id) === 0 ? 'Free' : money(retail(id) * displayPer(id)))
/* "1,000", or "million" for a million. */
const perWord = (n: number) => (n === 1e6 ? 'million' : figure(n))
/* "a, b and c". */
const andList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`)

/* ---- The plans ---- */

/* The plans (21 Nov 2026, proposed, for the founders to sign off): a monthly price that includes an amount of each piece;
   anything past it is billed at the rates below. Enterprise is priced by contract. `included` counts each piece in its
   own unit: inboxes, emails, numbers, texts, call minutes, browser hours, vCPU hours, events in the event log. The
   prices and amounts are the JSON's; the names are written here, in this order. */
export type PlanId = 'free' | 'developer' | 'startup' | 'enterprise'
export type Plan = {
  id: PlanId
  name: string
  /* Dollars a month; null where the price is set by contract. */
  monthly: number | null
  included: Partial<Record<PriceKey, number>>
}
const planNames: Record<PlanId, string> = { free: 'Free', developer: 'Developer', startup: 'Startup', enterprise: 'Enterprise' }
const planIds = Object.keys(planNames) as PlanId[]

type SourcePlan = (typeof source.plans)[number]
const planOf = (id: PlanId): SourcePlan => {
  const p = source.plans.find((x) => x.id === id)
  if (!p) throw new Error(`prices.ts: no plan "${id}" in src/lib/pricing/pricing.json`)
  return p
}
const free = planOf('free')
/* The plans that include the first US texting registration (its filing and monthly fee). */
const withRegister = planIds.filter((id) => Number(planOf(id).included.register ?? 0) > 0).map((id) => planNames[id])

/* ---- The pieces ---- */

const register = piece('register')

/* By piece in the founders' order (piecePaths.ts pieceOrder, 21 Nov), with Personas' prices last, so each plan card on
   /pricing lists its included amounts in that order and its event log events last. /pricing/rates groups them by
   pieceOrder itself. */
export const prices = {
  inbox: { piece: 'email', name: 'Inbox', amount: amountOf('inbox'), unit: 'an inbox a month', value: retail('inbox'), per: 'inbox a month', note: `The first ${free.included.inbox} inboxes are free.` },
  email: { piece: 'email', name: 'Emails', amount: amountOf('email'), unit: `per ${perWord(displayPer('email'))} emails, sent or received`, value: retail('email'), per: 'email' },
  browser: { piece: 'browser', name: 'Browser', amount: amountOf('browser'), unit: 'a browser hour', value: retail('browser'), per: 'browser hour', note: 'Its home connection is included, with no charge per GB.' },
  stealth: { piece: 'browser', name: 'Stealth browser', amount: amountOf('stealth'), unit: 'a browser hour, with a full screen', value: retail('stealth'), per: 'browser hour' },
  home: { piece: 'browser', name: 'Home connection', amount: 'Included', unit: 'with every browser' },
  number: { piece: 'phone', name: 'Phone number', amount: amountOf('number'), unit: 'a US or UK number a month', value: retail('number'), per: 'number a month', note: 'Numbers in other countries are priced by country, shown before you add one.' },
  sms: { piece: 'phone', name: 'Texts', amount: amountOf('sms'), unit: 'a text, sent or received', value: retail('sms'), per: 'text', note: 'Carrier fees included.' },
  /* The filing (`once`) and the monthly fee. A rejected filing is sent again at the carriers' review fee, passed through
     at cost (primitives.phone.registration.reviewOnce). */
  register: {
    piece: 'phone',
    name: 'US texting registration',
    amount: money(register.once?.retail ?? 0),
    unit: `once, then ${money(retail('register'))} a month`,
    value: retail('register'),
    per: 'month',
    note: `US carriers ask every business that texts to register its use (10DLC), and we file it for you. ${andList(withRegister)} include your first campaign’s filing and monthly fee, so this price is for each extra campaign. If the carriers reject a filing, sending it again costs ${money(source.primitives.phone.registration.reviewOnce.value)}.`,
  },
  voice: { piece: 'phone', name: 'Calls', amount: amountOf('voice'), unit: 'a minute, in or out', value: retail('voice'), per: 'minute', note: 'Bring your own voice agent, or connect one.' },
  sandbox: { piece: 'sandbox', name: 'Sandbox', amount: amountOf('sandbox'), unit: 'an active vCPU hour', value: retail('sandbox'), per: 'active vCPU hour', note: 'Billed only while the CPU works, so a sandbox waiting on a task costs almost nothing.' },
  memory: { piece: 'sandbox', name: 'Sandbox memory', amount: amountOf('memory'), unit: 'a GiB hour', value: retail('memory'), per: 'GiB hour' },
  imessage: { piece: 'messaging', name: 'iMessage line', amount: amountOf('imessage'), unit: 'a line a month', value: retail('imessage'), per: 'line a month' },
  whatsapp: { piece: 'messaging', name: 'WhatsApp', amount: `Meta’s fee plus ${money(piece('whatsapp').retailPlus ?? 0)}`, unit: 'a message', note: 'Meta prices each message by country and kind; we pass its fee through at cost.' },
  chat: { piece: 'messaging', name: 'Slack and Telegram', amount: amountOf('chat'), unit: 'on every plan' },
  persona: { piece: 'personas', name: 'Persona', amount: amountOf('persona'), unit: 'while it waits', note: 'You pay only for the pieces it uses.' },
  log: { piece: 'personas', name: 'Event log', amount: amountOf('log'), unit: `per ${perWord(displayPer('log'))} events`, value: retail('log'), per: 'event', note: 'Every event kept for 30 days at no extra charge; longer on Enterprise.' },
  tokens: { piece: 'personas', name: 'Model tokens', amount: `Cost plus ${Math.round((piece('tokens').retailMarkup ?? 0) * 100)}%`, unit: 'or free with your own key' },
} satisfies Record<string, Price>

export type PriceKey = keyof typeof prices

/* Each plan, with its price and included amounts from the JSON. An included piece with no price here fails the build. */
export const plans: Plan[] = planIds.map((id) => {
  const p = planOf(id)
  const included: Partial<Record<PriceKey, number>> = {}
  for (const [k, n] of Object.entries(p.included)) {
    if (!(k in prices)) throw new Error(`prices.ts: plan "${id}" includes "${k}", which has no price here`)
    included[k as PriceKey] = Number(n)
  }
  return { id, name: planNames[id], monthly: p.monthly, included }
})

/* What Free's 1 number receives each month (James, 21 Nov): texts and call minutes in, such as login codes. Past these,
   messages still arrive and are kept, but the agent isn't woken until an upgrade. It sends no texts and makes no calls. */
export const freeNumber = { texts: free.freeNumber?.textsIn ?? 0, minutes: free.freeNumber?.callMinutesIn ?? 0 }

/* What a persona costs at the rates (James, 21 Nov), worked out here so it follows any price change. /pricing and the
   personas page both say it. */
const PERSONA_HOURS = 10
export const personaCostLine = `A persona with an inbox, a US number and ${PERSONA_HOURS} browser hours costs ${money(prices.inbox.value + prices.number.value + PERSONA_HOURS * prices.browser.value)} a month, before texts and emails.`
