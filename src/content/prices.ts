/* Every price on the site, read from the pricing source: src/lib/pricing/pricing.json, copied from pricing/ in the
   workspace by `npm run pricing` (the founders' calculator reads the same file). Each piece's list rate, each plan's
   fee, what it covers, billing and features, Free's allowances and what Free's number receives come from there, worked
   out by the pricing engine (src/lib/pricing/engine.js); only the words are written here (each piece's name, unit and
   note, each plan's name). Change a number in the workspace's pricing.json, run `npm run pricing`, and it changes
   everywhere. /pricing, /pricing/rates, the piece pages and the developers page read these; Home shows no prices
   (James, 20 Nov). `value` is the number in US dollars per `per`; `amount` and `unit` are the words a reader sees. The
   browser gets only the values this module exports, never the JSON (vite.config.ts contentIndex), so it exports data
   only, no functions. Each blueprint's typical months are worked out from the same file, at these list rates, by
   content/blueprint-tiers.ts. There is one price list (founders, 22 Nov 2026): every plan bills every piece at its list
   rate, model tokens included, and a paid plan's fee covers a set amount of that usage. */
import { billingPlans, monthlyBill, pieceRates } from '../lib/pricing/engine.js'
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
  /* A fixed price, the same for everyone (the US texting registration, founders 22 Nov 2026). */
  fixed?: boolean
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

/* The plans (founders, 22 Nov 2026): one price list, the pieces at list rates, on every plan. A paid plan's fee covers a
   set amount of usage at those rates (Developer $20 for $20, Startup $99 for $111, Scale $499 for $588); past it, list
   rates as you go, up to any spend cap the buyer sets. Covered usage resets each month. Model tokens are pieces too,
   per million at the model's price plus 30%. Free keeps fixed allowances. Enterprise is from a first-month floor, starts monthly with nothing up
   front, and earns months free when paid yearly. The numbers are the JSON's; the names are written here, in this order. */
export type PlanId = 'free' | 'developer' | 'startup' | 'scale' | 'enterprise'
export type Plan = {
  id: PlanId
  name: string
  /* Dollars a month; null for Enterprise, which starts `from` a month (`fromFirstMonth`: the floor on the first month's
     bill). */
  monthly: number | null
  from: number | null
  fromFirstMonth: boolean
  /* Months free when paid yearly (Enterprise: 2, paying for 10 of 12); 0 where yearly billing earns nothing. */
  yearlyFree: number
  /* Dollars of usage at list rates the fee covers each month, and how much more that is than the fee; null on Free
     (fixed allowances) and Enterprise (set with the buyer). */
  covers: number | null
  extra: number
  /* 'monthly', and for Enterprise 'yearly' as an option chosen later (`yearlyLater`). */
  billing: string[]
  yearlyLater: boolean
  upfront: boolean
  featured: boolean
  /* Free's fixed amounts, by price key. No paid plan includes any piece. */
  allowances: Partial<Record<PriceKey, number>>
  /* Days the event log keeps every event at no charge; null where it is set with the buyer (Enterprise). */
  eventLogDays: number | null
  support: string | null
  seats: boolean
  spendCap: boolean
}
const planNames: Record<PlanId, string> = { free: 'Free', developer: 'Developer', startup: 'Startup', scale: 'Scale', enterprise: 'Enterprise' }
const planIds = Object.keys(planNames) as PlanId[]

type SourcePlan = (typeof source.plans)[number] & {
  from?: number
  covers?: number | null
  billing?: string[]
  billingDefault?: string
  upfront?: boolean
  featured?: boolean
  allowances?: Record<string, number>
  freeNumber?: { textsIn: number; callMinutesIn: number }
  fromRule?: string
  yearly?: { monthsPaid: number; monthsCovered: number; words: string }
  features?: { eventLogDays?: number | null; support?: string; seats?: boolean; spendCap?: boolean }
}
const planOf = (id: PlanId): SourcePlan => {
  const p = source.plans.find((x) => x.id === id)
  if (!p) throw new Error(`prices.ts: no plan "${id}" in src/lib/pricing/pricing.json`)
  return p as SourcePlan
}
const free = planOf('free')
const startupPlan = planOf('startup')
const scalePlan = planOf('scale')

/* Every piece's list rate from the engine, the one price list. */
const listRates = pieceRates(source).rates

/* The US texting registration (founders, 22 Nov 2026): fixed prices, the same for everyone, in no plan: its filing
   (`once`) and its monthly fee for each active campaign. */
const register = piece('register')
const registerUnit = (monthly: number) => `once to file each campaign, then ${money(monthly)} a month while it’s active`
/* A piece priced at cost plus a markup (model tokens, a persona's voice), as written from the engine's list rate. */
const listAmount = (id: string) => money(Math.round((listRates[id]?.rate ?? 0) * displayPer(id) * 1e4) / 1e4)

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
  inbox: { piece: 'email', name: 'Inbox', amount: amountOf('inbox'), unit: 'an inbox a month', value: retail('inbox'), per: 'inbox a month', note: `${planNames.free} includes ${free.allowances?.inbox ?? 0} inboxes.` },
  email: { piece: 'email', name: 'Emails', amount: amountOf('email'), unit: `per ${perWord(displayPer('email'))} emails, sent or received`, value: retail('email'), per: 'email' },
  browser: { piece: 'browser', name: 'Browser', amount: amountOf('browser'), unit: 'a browser hour', value: retail('browser'), per: 'browser hour', note: 'Its home connection is included, with no charge per GB.' },
  stealth: { piece: 'browser', name: 'Stealth browser', amount: amountOf('stealth'), unit: 'a browser hour, with a full screen', value: retail('stealth'), per: 'browser hour' },
  home: { piece: 'browser', name: 'Home connection', amount: 'Included', unit: 'with every browser' },
  number: { piece: 'phone', name: 'Phone number', amount: amountOf('number'), unit: 'a US or UK number a month', value: retail('number'), per: 'number a month', note: 'Numbers in other countries are priced by country, shown before you add one.' },
  sms: { piece: 'phone', name: 'Texts', amount: amountOf('sms'), unit: 'a text, sent or received', value: retail('sms'), per: 'text', note: 'Carrier fees included.' },
  /* The filing (`once`) and the monthly fee, the same for everyone. A rejected filing is sent again at the carriers'
     review fee, passed through at cost (primitives.phone.registration.reviewOnce). */
  register: {
    piece: 'phone',
    name: 'US texting registration',
    amount: money(register.once?.retail ?? 0),
    unit: registerUnit(retail('register')),
    value: retail('register'),
    per: 'month',
    fixed: !!register.fixed,
    note: `US carriers require it, and no plan includes it. We file it for you, and a rejected filing costs ${money(source.primitives.phone.registration.reviewOnce.value)} to send again.`,
  },
  voice: { piece: 'phone', name: 'Calls', amount: amountOf('voice'), unit: 'a minute, in or out', value: retail('voice'), per: 'minute', note: 'Bring your own voice agent, or connect one.' },
  personaVoice: { piece: 'phone', name: 'A persona’s own voice', amount: listAmount('personaVoice'), unit: 'a minute of a call it speaks on', value: listRates.personaVoice?.rate, per: 'minute', note: 'On top of the call minute, when a persona speaks for itself.' },
  sandbox: { piece: 'sandbox', name: 'Sandbox', amount: amountOf('sandbox'), unit: 'an active vCPU hour', value: retail('sandbox'), per: 'active vCPU hour', note: 'Billed only while the CPU works, so a sandbox waiting on a task costs almost nothing.' },
  memory: { piece: 'sandbox', name: 'Sandbox memory', amount: amountOf('memory'), unit: 'a GiB hour', value: retail('memory'), per: 'GiB hour' },
  imessage: { piece: 'messaging', name: 'iMessage line', amount: amountOf('imessage'), unit: 'a line a month', value: retail('imessage'), per: 'line a month' },
  whatsapp: {
    piece: 'messaging',
    name: 'WhatsApp',
    amount: `Meta’s fee plus ${money(piece('whatsapp').retailPlus ?? 0)}`,
    unit: 'a message',
    note: 'Meta prices each message by country and kind; we pass its fee through at cost.',
  },
  chat: { piece: 'messaging', name: 'Slack and Telegram', amount: amountOf('chat'), unit: 'on every plan' },
  persona: { piece: 'personas', name: 'Persona', amount: amountOf('persona'), unit: 'while it waits', note: 'You pay only for the pieces it uses.' },
  log: { piece: 'personas', name: 'Event log', amount: amountOf('log'), unit: `per ${perWord(displayPer('log'))} events`, value: retail('log'), per: 'event', note: `Kept for ${eventLogKeptWords}, and longer on ${planNames.enterprise}.` },
  /* Model tokens (founders, 22 Nov 2026): pieces like any other, per million on Auto, counted toward what a
     plan covers. Other models have their own rates; with the buyer's own key there is no token charge. */
  tokensIn: { piece: 'personas', name: 'Input tokens', amount: listAmount('tokensIn'), unit: 'per million, on Auto', value: listRates.tokensIn?.rate, per: 'million input tokens', note: 'Auto picks the model for each task. Other models are priced at their own rates, and with your own key there is no token charge.' },
  tokensCached: { piece: 'personas', name: 'Cached input tokens', amount: listAmount('tokensCached'), unit: 'per million, read from the model’s cache', value: listRates.tokensCached?.rate, per: 'million cached input tokens' },
  tokensOut: { piece: 'personas', name: 'Output tokens', amount: listAmount('tokensOut'), unit: 'per million, on Auto', value: listRates.tokensOut?.rate, per: 'million output tokens' },
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
  const covers = p.covers ? p.covers : null
  return {
    id,
    name: planNames[id],
    monthly: p.monthly,
    from: p.from ?? null,
    fromFirstMonth: p.fromRule === 'first month',
    yearlyFree: p.yearly ? p.yearly.monthsCovered - p.yearly.monthsPaid : 0,
    covers,
    extra: covers != null && p.monthly != null ? Math.max(covers - p.monthly, 0) : 0,
    billing,
    yearlyLater: billing.includes('yearly') && (p.billingDefault ?? 'monthly') === 'monthly',
    upfront: !!p.upfront,
    featured: !!p.featured,
    allowances,
    eventLogDays: f.eventLogDays ?? null,
    support: f.support ?? null,
    seats: !!f.seats,
    spendCap: !!f.spendCap,
  }
})

/* Each plan ready to bill, for the /pricing calculator: fee, what it covers, Free's allowances and every piece's list
   rate, as plain data (engine billingPlans). The calculator passes these to the engine's monthlyBill and cheapestPlan in
   the browser, so the JSON never ships. */
export const billing = billingPlans(source)

/* Each piece's list rate as written, per its display units ("$0.40" per 1,000 emails), for the calculator's lines. */
export const listAmounts = Object.fromEntries(source.pieces.map((p) => [p.id, amountOf(p.id)])) as Record<string, string>


/* Where Scale starts to cost no more than Startup, in usage at list rates (model tokens aside). Startup bills its fee
   plus usage at list past the $111 it covers, and Scale stays at its fee until $588: Scale costs no more once usage
   passes Scale's fee less Startup's plus what Startup covers ($499 - $99 + $111 = $511). */
export const scaleFrom = Math.round((scalePlan.monthly ?? 0) - (startupPlan.monthly ?? 0) + (startupPlan.covers ?? 0))

/* What a plan covers, worked (the lead, 21 Nov; founders, 22 Nov 2026): Startup in a month that uses less than it covers
   and one that goes past it, billed by the engine on inboxes at list rates. */
const coveredMonth = (used: number) => {
  const bill = monthlyBill({ inbox: used / retail('inbox') }, startupPlan, source)
  return { used, bill: bill.total ?? 0, unused: bill.unused, payg: bill.payg }
}
export const coversExample = { plan: planNames.startup, fee: startupPlan.monthly ?? 0, covers: startupPlan.covers ?? 0, low: coveredMonth(64), high: coveredMonth(150) }

/* The US texting registration in words (founders, 22 Nov 2026): "$25" once to file each campaign, then "$17" a month
   while it's active, the same for everyone. No plan includes it. */
export const registration = {
  once: money(register.once?.retail ?? 0),
  monthly: money(retail('register')),
  line: `US texting registration: ${money(register.once?.retail ?? 0)} once to file each campaign, then ${money(retail('register'))} a month while it’s active.`,
  why: 'US carriers require it for business texting. No plan includes it.',
}

/* What Free's 1 number receives each month (James, 21 Nov): texts and call minutes in, such as login codes. Past these,
   messages still arrive and are kept, but the agent isn't woken until an upgrade. It sends no texts and makes no calls. */
export const freeNumber = { texts: free.freeNumber?.textsIn ?? 0, minutes: free.freeNumber?.callMinutesIn ?? 0 }

/* Every event log retention, in words, for the security page and the questions. */
export const eventLogKept = eventLogKeptWords

/* What a persona costs at the rates (James, 21 Nov), worked out here so it follows any price change. /pricing and the
   personas page both say it. */
const PERSONA_HOURS = 10
export const personaCostLine = `A persona with an inbox, a US number and ${PERSONA_HOURS} browser hours costs ${money(prices.inbox.value + prices.number.value + PERSONA_HOURS * prices.browser.value)} a month, before texts and emails.`
