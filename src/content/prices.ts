/* Every price on the site, read from the pricing source: src/lib/pricing/pricing.json, copied from pricing/ in the
   workspace by `npm run pricing` (the founders' calculator reads the same file). Each piece's rate (list and Scale),
   each plan's fee, credit, billing and features, Free's allowances and what Free's number receives come from there,
   worked out by the pricing engine (src/lib/pricing/engine.js); only the words are written here (each piece's name,
   unit and note, each plan's name). Change a number in the workspace's pricing.json, run `npm run pricing`, and it
   changes everywhere. /pricing, /pricing/rates, the piece pages and the developers page read these; Home shows no
   prices (James, 20 Nov). `value` is the number in US dollars per `per`; `amount` and `unit` are the words a reader
   sees. The browser gets only the values this module exports, never the JSON (vite.config.ts contentIndex), so it
   exports data only, no functions. Each blueprint's tiers are priced from the same file by content/blueprint-tiers.ts. */
import { billingPlans, monthlyBill, planRates } from '../lib/pricing/engine.js'
import source from '../lib/pricing/pricing.json'

export type PieceId = 'email' | 'phone' | 'messaging' | 'browser' | 'sandbox' | 'personas'

export type Price = {
  piece: PieceId
  /* What is billed, as a reader names it. */
  name: string
  /* The price as written, and what it is per. */
  amount: string
  unit: string
  /* The same price as a number: dollars per `per`. Absent where the price isn't a fixed number. */
  value?: number
  per?: string
  note?: string
  /* The rate on Scale, where it is lower than `amount`: its amount and, where it differs, its unit. */
  scale?: { amount: string; unit?: string }
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

/* The plans (founders, 21 Nov 2026): a paid plan's fee buys a monthly credit in US dollars, spent at the plan's rates
   on any piece, model tokens included; past the credit, usage is billed at the same rates. Unused credit resets each
   month. Plans differ by features and, on Scale, by lower rates, never by fixed amounts of each piece. Free keeps fixed
   allowances. Enterprise starts monthly with nothing up front; yearly billing is an option chosen later. The numbers
   are the JSON's; the names are written here, in this order. */
export type PlanId = 'free' | 'developer' | 'startup' | 'scale' | 'enterprise'
export type Plan = {
  id: PlanId
  name: string
  /* Dollars a month; null for Enterprise, which starts `from` a month. */
  monthly: number | null
  from: number | null
  /* Dollars of usage the fee buys each month; 0 on Free, null on Enterprise. */
  credit: number | null
  /* 'monthly', and for Enterprise 'yearly' as an option chosen later (`yearlyLater`). */
  billing: string[]
  yearlyLater: boolean
  upfront: boolean
  featured: boolean
  /* Free's fixed amounts, by price key. */
  allowances: Partial<Record<PriceKey, number>>
  /* The US texting campaigns whose monthly fee the plan includes. */
  campaigns: { kind: string; count: number } | null
  /* Days the event log keeps every event at no charge; null where it is set with the buyer (Enterprise). */
  eventLogDays: number | null
  support: string | null
  seats: boolean
  spendCap: boolean
  /* Rates lower than list (Scale). */
  lowerRates: boolean
}
const planNames: Record<PlanId, string> = { free: 'Free', developer: 'Developer', startup: 'Startup', scale: 'Scale', enterprise: 'Enterprise' }
const planIds = Object.keys(planNames) as PlanId[]

type SourcePlan = (typeof source.plans)[number] & {
  from?: number
  credit?: number | null
  billing?: string[]
  billingDefault?: string
  upfront?: boolean
  featured?: boolean
  allowances?: Record<string, number>
  freeNumber?: { textsIn: number; callMinutesIn: number }
  discount?: { off: number; marginFloor: number }
  features?: { register?: { kind: string; campaigns: number }; eventLogDays?: number | null; support?: string; seats?: boolean; spendCap?: boolean }
}
const planOf = (id: PlanId): SourcePlan => {
  const p = source.plans.find((x) => x.id === id)
  if (!p) throw new Error(`prices.ts: no plan "${id}" in src/lib/pricing/pricing.json`)
  return p as SourcePlan
}
const free = planOf('free')
const startupPlan = planOf('startup')
const scalePlan = planOf('scale')

/* ---- The rates on each plan ---- */

/* Each piece's rate on a plan, from the engine: list on Free, Developer and Startup, Scale's rule on Scale. */
const ratesOf = (id: PlanId) => Object.fromEntries(planRates(planOf(id), source).map((r) => [r.id, r]))
const scaleRate = ratesOf('scale')
/* A rate as written per the piece's display units, on a plan. */
const rateAmount = (id: string, plan: PlanId) => {
  const r = ratesOf(plan)[id]
  return r.rate === 0 ? 'Free' : money(r.rate * displayPer(id))
}
/* The Scale amount for a price, where it is lower than list. */
const scaleOf = (id: string): Price['scale'] => (scaleRate[id]?.discounted ? { amount: rateAmount(id, 'scale') } : undefined)

const register = piece('register')
const markupWords = (m: number) => `Cost plus ${Math.round(m * 100)}%`
const listTokensMarkup = piece('tokens').retailMarkup ?? 0
const scaleTokensMarkup = scaleRate.tokens?.markup ?? listTokensMarkup

/* Event log retention by plan, in words: "30 days on Free and Developer, 90 days on Startup and a year on Scale". */
const daysWords = (d: number) => (d === 365 ? 'a year' : `${d} days`)
const eventLogKeptWords = (() => {
  const groups: { days: number; names: string[] }[] = []
  for (const id of planIds) {
    const d = planOf(id).features?.eventLogDays
    if (d == null) continue
    const g = groups.find((x) => x.days === d)
    if (g) g.names.push(planNames[id])
    else groups.push({ days: d, names: [planNames[id]] })
  }
  return andList(groups.map((g) => `${daysWords(g.days)} on ${andList(g.names)}`))
})()

/* ---- The pieces ---- */

/* By piece in the founders' order (piecePaths.ts pieceOrder, 21 Nov), with Personas' prices last. /pricing/rates groups
   them by pieceOrder itself. */
export const prices = {
  inbox: { piece: 'email', name: 'Inbox', amount: amountOf('inbox'), unit: 'an inbox a month', value: retail('inbox'), per: 'inbox a month', note: `${planNames.free} includes ${free.allowances?.inbox ?? 0} inboxes.`, scale: scaleOf('inbox') },
  email: { piece: 'email', name: 'Emails', amount: amountOf('email'), unit: `per ${perWord(displayPer('email'))} emails, sent or received`, value: retail('email'), per: 'email', scale: scaleOf('email') },
  browser: { piece: 'browser', name: 'Browser', amount: amountOf('browser'), unit: 'a browser hour', value: retail('browser'), per: 'browser hour', note: 'Its home connection is included, with no charge per GB.', scale: scaleOf('browser') },
  stealth: { piece: 'browser', name: 'Stealth browser', amount: amountOf('stealth'), unit: 'a browser hour, with a full screen', value: retail('stealth'), per: 'browser hour', scale: scaleOf('stealth') },
  home: { piece: 'browser', name: 'Home connection', amount: 'Included', unit: 'with every browser' },
  number: { piece: 'phone', name: 'Phone number', amount: amountOf('number'), unit: 'a US or UK number a month', value: retail('number'), per: 'number a month', note: 'Numbers in other countries are priced by country, shown before you add one.', scale: scaleOf('number') },
  sms: { piece: 'phone', name: 'Texts', amount: amountOf('sms'), unit: 'a text, sent or received', value: retail('sms'), per: 'text', note: 'Carrier fees included.', scale: scaleOf('sms') },
  /* The filing (`once`) and the monthly fee. A rejected filing is sent again at the carriers' review fee, passed through
     at cost (primitives.phone.registration.reviewOnce). */
  register: {
    piece: 'phone',
    name: 'US texting registration',
    amount: money(register.once?.retail ?? 0),
    unit: `once, then ${money(retail('register'))} a month`,
    value: retail('register'),
    per: 'month',
    note: `US carriers ask every business that texts to register its use (10DLC), and we file it for you. Each paid plan includes the monthly fee of its own campaigns, so the monthly price is for each extra campaign. The filing is paid from your monthly usage. If the carriers reject a filing, sending it again costs ${money(source.primitives.phone.registration.reviewOnce.value)}.`,
    scale: scaleRate.register?.discounted ? { amount: money(scaleRate.register.once?.rate ?? 0), unit: `once, then ${money(scaleRate.register.rate)} a month` } : undefined,
  },
  voice: { piece: 'phone', name: 'Calls', amount: amountOf('voice'), unit: 'a minute, in or out', value: retail('voice'), per: 'minute', note: 'Bring your own voice agent, or connect one.', scale: scaleOf('voice') },
  sandbox: { piece: 'sandbox', name: 'Sandbox', amount: amountOf('sandbox'), unit: 'an active vCPU hour', value: retail('sandbox'), per: 'active vCPU hour', note: 'Billed only while the CPU works, so a sandbox waiting on a task costs almost nothing.', scale: scaleOf('sandbox') },
  memory: { piece: 'sandbox', name: 'Sandbox memory', amount: amountOf('memory'), unit: 'a GiB hour', value: retail('memory'), per: 'GiB hour', scale: scaleOf('memory') },
  imessage: { piece: 'messaging', name: 'iMessage line', amount: amountOf('imessage'), unit: 'a line a month', value: retail('imessage'), per: 'line a month', scale: scaleOf('imessage') },
  whatsapp: {
    piece: 'messaging',
    name: 'WhatsApp',
    amount: `Meta’s fee plus ${money(piece('whatsapp').retailPlus ?? 0)}`,
    unit: 'a message',
    note: 'Meta prices each message by country and kind; we pass its fee through at cost.',
    scale: scaleRate.whatsapp?.discounted ? { amount: `Meta’s fee plus ${money(scaleRate.whatsapp.plus ?? 0)}` } : undefined,
  },
  chat: { piece: 'messaging', name: 'Slack and Telegram', amount: amountOf('chat'), unit: 'on every plan' },
  persona: { piece: 'personas', name: 'Persona', amount: amountOf('persona'), unit: 'while it waits', note: 'You pay only for the pieces it uses.' },
  log: { piece: 'personas', name: 'Event log', amount: amountOf('log'), unit: `per ${perWord(displayPer('log'))} events`, value: retail('log'), per: 'event', note: `Every event kept at no extra charge for ${eventLogKeptWords}, and longer on ${planNames.enterprise}.`, scale: scaleOf('log') },
  tokens: { piece: 'personas', name: 'Model tokens', amount: markupWords(listTokensMarkup), unit: 'or free with your own key', scale: scaleTokensMarkup !== listTokensMarkup ? { amount: markupWords(scaleTokensMarkup) } : undefined },
} satisfies Record<string, Price>

export type PriceKey = keyof typeof prices

/* Each plan, with its numbers from the JSON. */
export const plans: Plan[] = planIds.map((id) => {
  const p = planOf(id)
  const allowances: Partial<Record<PriceKey, number>> = {}
  for (const [k, n] of Object.entries(p.allowances ?? {})) {
    if (!(k in prices)) throw new Error(`prices.ts: plan "${id}" allows "${k}", which has no price here`)
    allowances[k as PriceKey] = Number(n)
  }
  const f = p.features ?? {}
  const billing = p.billing ?? ['monthly']
  return {
    id,
    name: planNames[id],
    monthly: p.monthly,
    from: p.from ?? null,
    credit: p.credit ?? null,
    billing,
    yearlyLater: billing.includes('yearly') && (p.billingDefault ?? 'monthly') === 'monthly',
    upfront: !!p.upfront,
    featured: !!p.featured,
    allowances,
    campaigns: f.register ? { kind: f.register.kind, count: f.register.campaigns } : null,
    eventLogDays: f.eventLogDays ?? null,
    support: f.support ?? null,
    seats: !!f.seats,
    spendCap: !!f.spendCap,
    lowerRates: !!p.discount,
  }
})

/* Each plan ready to bill, for the /pricing calculator: fee, credit, Free's allowances, the campaigns each plan
   includes and every piece's rate on it, as plain data (engine billingPlans). The calculator passes these to the
   engine's monthlyBill and cheapestPlan in the browser, so the JSON never ships. */
export const billing = billingPlans(source)

/* Each piece's rate on each plan as written, per its display units ("$0.32" per 1,000 emails on Scale), for the
   calculator's lines. */
export const rateAmounts = Object.fromEntries(planIds.map((id) => [id, Object.fromEntries(source.pieces.map((p) => [p.id, rateAmount(p.id, id)]))])) as Record<
  PlanId,
  Record<string, string>
>

/* Dollars of model cost in 1 unit of the model tokens piece (1M input tokens at the default model, cache share applied),
   so the calculator can take model spend in dollars at cost. */
export const tokenUnitCost = ratesOf('startup').tokens?.wholesale ?? 1

/* Scale's rule, for the plan card, the rates page and the questions: the share off list, the margin floor it never goes
   under, which prices come down and which stay at list, and model tokens' own markup. */
const keysWhere = (lower: boolean) =>
  (Object.keys(prices) as PriceKey[]).filter((k) => scaleRate[k] && (scaleRate[k].list ?? 0) > 0 && scaleRate[k].discounted === lower)
export const scaleRule = {
  off: scalePlan.discount?.off ?? 0,
  floor: scalePlan.discount?.marginFloor ?? 0,
  lower: keysWhere(true),
  atList: keysWhere(false),
  tokens: { list: markupWords(listTokensMarkup), scale: markupWords(scaleTokensMarkup) },
}

/* Where Scale starts to cost no more than Startup: usage at list rates past Scale's fee less Startup's, plus Startup's
   credit ($499 - $99 + $100 = $500). */
export const scaleFrom = (scalePlan.monthly ?? 0) - (startupPlan.monthly ?? 0) + (startupPlan.credit ?? 0)

/* The credit, worked (the lead, 21 Nov): Startup in a month that uses less than its credit and one that goes past it,
   billed by the engine. The two months use 64% and 130% of Startup's credit, on inboxes at list. */
const creditMonth = (share: number) => {
  const used = Math.round((startupPlan.credit ?? 0) * share)
  const bill = monthlyBill({ inbox: used / retail('inbox') }, startupPlan, source)
  return { used, bill: bill.total ?? 0, unused: bill.unused, payg: bill.payg }
}
export const creditExample = { plan: planNames.startup, fee: startupPlan.monthly ?? 0, credit: startupPlan.credit ?? 0, low: creditMonth(0.64), high: creditMonth(1.3) }

/* What Free's 1 number receives each month (James, 21 Nov): texts and call minutes in, such as login codes. Past these,
   messages still arrive and are kept, but the agent isn't woken until an upgrade. It sends no texts and makes no calls. */
export const freeNumber = { texts: free.freeNumber?.textsIn ?? 0, minutes: free.freeNumber?.callMinutesIn ?? 0 }

/* Every event log retention, in words, for the security page and the questions. */
export const eventLogKept = eventLogKeptWords

/* What a persona costs at the rates (James, 21 Nov), worked out here so it follows any price change. /pricing and the
   personas page both say it. */
const PERSONA_HOURS = 10
export const personaCostLine = `A persona with an inbox, a US number and ${PERSONA_HOURS} browser hours costs ${money(prices.inbox.value + prices.number.value + PERSONA_HOURS * prices.browser.value)} a month, before texts and emails.`
