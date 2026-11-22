/* Every price on the site, read from the pricing source: src/lib/pricing/pricing.json, copied from pricing/ in the
   workspace by `npm run pricing` (the founders' calculator reads the same file). Each piece's rate (list and Scale),
   each plan's fee, credit, billing and features, Free's allowances and what Free's number receives come from there,
   worked out by the pricing engine (src/lib/pricing/engine.js); only the words are written here (each piece's name,
   unit and note, each plan's name). Change a number in the workspace's pricing.json, run `npm run pricing`, and it
   changes everywhere. /pricing, /pricing/rates, the piece pages and the developers page read these; Home shows no
   prices (James, 20 Nov). `value` is the number in US dollars per `per`; `amount` and `unit` are the words a reader
   sees. The browser gets only the values this module exports, never the JSON (vite.config.ts contentIndex), so it
   exports data only, no functions. Each blueprint's typical months are worked out from the same file, at these piece
   rates, by content/blueprint-tiers.ts (founders, 22 Nov 2026: a blueprint run is paid from the plan's credit like any
   piece). Model tokens are taken from the credit at cost plus 10% on every plan, so they carry no Scale rate. */
import { billingPlans, creditWorth, monthlyBill, planRates } from '../lib/pricing/engine.js'
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
  /* The rate on Startup and on Scale, where it is lower than `amount` (the rate ladder, founders 22 Nov 2026: Startup
     10% off, Scale 15% off since 22 Nov 2026, was 20%), or, for a fixed price, the same price written out: its amount and, where it differs, its
     unit. */
  startup?: { amount: string; unit?: string }
  scale?: { amount: string; unit?: string }
  /* The same price on every plan, Enterprise included, off the rate ladder (the US texting registration, founders
     22 Nov 2026). */
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

/* The plans (founders, 21 Nov 2026): a paid plan's fee buys a monthly credit in US dollars, spent at the plan's rates
   on any piece, model tokens included; a plan's lower rates apply only to usage paid from its credit, and past the credit usage is billed at list rates on every plan, up to any spend cap the buyer sets (founders, 22 Nov 2026). Unused credit resets each
   month. Plans differ by features and, on Scale, by lower rates, never by fixed amounts of each piece. Free keeps fixed
   allowances. Enterprise is from a first-month floor, starts monthly with nothing up front, and earns months free when
   paid yearly (founders, 22 Nov 2026). The numbers are the JSON's; the names are written here, in this order. */
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
  /* Dollars of usage the fee buys each month; 0 on Free, null on Enterprise. */
  credit: number | null
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
  /* Rates lower than list (Startup 10% off, Scale 15% off): the share off every piece but model tokens, and what the
     credit is worth at list rates. */
  lowerRates: boolean
  off: number
  worth: number | null
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
  discount?: { off: number; except?: string[] }
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
const developerPlan = planOf('developer')
const startupPlan = planOf('startup')
const scalePlan = planOf('scale')

/* ---- The rates on each plan ---- */

/* Each piece's rate on a plan, from the engine: list on Free and Developer, 10% off on Startup, 15% off on Scale. */
const ratesOf = (id: PlanId) => Object.fromEntries(planRates(planOf(id), source).map((r) => [r.id, r]))
const startupRate = ratesOf('startup')
const scaleRate = ratesOf('scale')
/* A rate as written per the piece's display units, on a plan. */
const rateAmount = (id: string, plan: PlanId) => {
  const r = ratesOf(plan)[id]
  return r.rate === 0 ? 'Free' : money(r.rate * displayPer(id))
}
/* The Startup and Scale amounts for a price, where they are lower than list. */
const startupOf = (id: string): Price['startup'] => (startupRate[id]?.discounted ? { amount: rateAmount(id, 'startup') } : undefined)
const scaleOf = (id: string): Price['scale'] => (scaleRate[id]?.discounted ? { amount: rateAmount(id, 'scale') } : undefined)
/* Both, for a price list entry. */
const ladder = (id: string) => ({ startup: startupOf(id), scale: scaleOf(id) })

/* The US texting registration (founders, 22 Nov 2026): fixed prices, the same on every plan and off the rate ladder, in
   no plan, taken from the buyer's account: its filing (`once`) and its monthly fee for each active campaign. */
const register = piece('register')
const registerUnit = (monthly: number) => `once to file each campaign, then ${money(monthly)} a month while it’s active`
const registerOn = (r: (typeof startupRate)[string] | undefined) => (r ? { amount: money(r.once?.rate ?? 0), unit: registerUnit(r.rate) } : undefined)
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
  inbox: { piece: 'email', name: 'Inbox', amount: amountOf('inbox'), unit: 'an inbox a month', value: retail('inbox'), per: 'inbox a month', note: `${planNames.free} includes ${free.allowances?.inbox ?? 0} inboxes.`, ...ladder('inbox') },
  email: { piece: 'email', name: 'Emails', amount: amountOf('email'), unit: `per ${perWord(displayPer('email'))} emails, sent or received`, value: retail('email'), per: 'email', ...ladder('email') },
  browser: { piece: 'browser', name: 'Browser', amount: amountOf('browser'), unit: 'a browser hour', value: retail('browser'), per: 'browser hour', note: 'Its home connection is included, with no charge per GB.', ...ladder('browser') },
  stealth: { piece: 'browser', name: 'Stealth browser', amount: amountOf('stealth'), unit: 'a browser hour, with a full screen', value: retail('stealth'), per: 'browser hour', ...ladder('stealth') },
  home: { piece: 'browser', name: 'Home connection', amount: 'Included', unit: 'with every browser' },
  number: { piece: 'phone', name: 'Phone number', amount: amountOf('number'), unit: 'a US or UK number a month', value: retail('number'), per: 'number a month', note: 'Numbers in other countries are priced by country, shown before you add one.', ...ladder('number') },
  sms: { piece: 'phone', name: 'Texts', amount: amountOf('sms'), unit: 'a text, sent or received', value: retail('sms'), per: 'text', note: 'Carrier fees included.', ...ladder('sms') },
  /* The filing (`once`) and the monthly fee, the same on every plan; each plan's column writes the price out in full. A
     rejected filing is sent again at the carriers' review fee, passed through at cost
     (primitives.phone.registration.reviewOnce). */
  register: {
    piece: 'phone',
    name: 'US texting registration',
    amount: money(register.once?.retail ?? 0),
    unit: registerUnit(retail('register')),
    value: retail('register'),
    per: 'month',
    fixed: !!register.fixed,
    note: `US carriers require it, and no plan includes it. We file it for you, and a rejected filing costs ${money(source.primitives.phone.registration.reviewOnce.value)} to send again.`,
    startup: register.fixed || startupRate.register?.discounted ? registerOn(startupRate.register) : undefined,
    scale: register.fixed || scaleRate.register?.discounted ? registerOn(scaleRate.register) : undefined,
  },
  voice: { piece: 'phone', name: 'Calls', amount: amountOf('voice'), unit: 'a minute, in or out', value: retail('voice'), per: 'minute', note: 'Bring your own voice agent, or connect one.', ...ladder('voice') },
  sandbox: { piece: 'sandbox', name: 'Sandbox', amount: amountOf('sandbox'), unit: 'an active vCPU hour', value: retail('sandbox'), per: 'active vCPU hour', note: 'Billed only while the CPU works, so a sandbox waiting on a task costs almost nothing.', ...ladder('sandbox') },
  memory: { piece: 'sandbox', name: 'Sandbox memory', amount: amountOf('memory'), unit: 'a GiB hour', value: retail('memory'), per: 'GiB hour', ...ladder('memory') },
  imessage: { piece: 'messaging', name: 'iMessage line', amount: amountOf('imessage'), unit: 'a line a month', value: retail('imessage'), per: 'line a month', ...ladder('imessage') },
  whatsapp: {
    piece: 'messaging',
    name: 'WhatsApp',
    amount: `Meta’s fee plus ${money(piece('whatsapp').retailPlus ?? 0)}`,
    unit: 'a message',
    note: 'Meta prices each message by country and kind; we pass its fee through at cost.',
    startup: startupRate.whatsapp?.discounted ? { amount: `Meta’s fee plus ${money(startupRate.whatsapp.plus ?? 0)}` } : undefined,
    scale: scaleRate.whatsapp?.discounted ? { amount: `Meta’s fee plus ${money(scaleRate.whatsapp.plus ?? 0)}` } : undefined,
  },
  chat: { piece: 'messaging', name: 'Slack and Telegram', amount: amountOf('chat'), unit: 'on every plan' },
  persona: { piece: 'personas', name: 'Persona', amount: amountOf('persona'), unit: 'while it waits', note: 'You pay only for the pieces it uses.' },
  log: { piece: 'personas', name: 'Event log', amount: amountOf('log'), unit: `per ${perWord(displayPer('log'))} events`, value: retail('log'), per: 'event', note: `Kept for ${eventLogKeptWords}, and longer on ${planNames.enterprise}.`, ...ladder('log') },
  tokens: {
    piece: 'personas',
    name: 'Model tokens',
    amount: markupWords(listTokensMarkup),
    unit: 'taken from your credit, or free with your own key',
    note: `What the model costs us, plus ${Math.round(listTokensMarkup * 100)}%, on every plan.`,
    scale: scaleTokensMarkup !== listTokensMarkup ? { amount: markupWords(scaleTokensMarkup) } : undefined,
  },
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
    fromFirstMonth: p.fromRule === 'first month',
    yearlyFree: p.yearly ? p.yearly.monthsCovered - p.yearly.monthsPaid : 0,
    credit: p.credit ?? null,
    billing,
    yearlyLater: billing.includes('yearly') && (p.billingDefault ?? 'monthly') === 'monthly',
    upfront: !!p.upfront,
    featured: !!p.featured,
    allowances,
    eventLogDays: f.eventLogDays ?? null,
    support: f.support ?? null,
    seats: !!f.seats,
    spendCap: !!f.spendCap,
    lowerRates: !!p.discount,
    off: p.discount?.off ?? 0,
    worth: p.credit ? creditWorth(p, source) : null,
  }
})

/* Each plan ready to bill, for the /pricing calculator: fee, credit, Free's allowances and every piece's rate on it, as plain data (engine billingPlans). The calculator passes these to the
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

/* The rate ladder (founders, 22 Nov 2026), for the plan cards, the rates page and the questions: Developer pays list,
   Startup and Scale the share off every piece but model tokens, which stay at cost plus 10% on every plan. */
export const ladderRule = {
  startup: startupPlan.discount?.off ?? 0,
  scale: scalePlan.discount?.off ?? 0,
  list: developerPlan.name ?? 'Developer',
  tokens: markupWords(listTokensMarkup),
}

/* Where Scale starts to cost no more than Startup, in usage at list rates (model tokens aside). A credit spent at its
   plan's rates covers credit / (1 - off) of usage at list (Startup's $100 about $111, Scale's $500 about $588), and usage past
   it is billed at list rates. So Startup bills its fee plus usage at list past $111, and Scale stays at its fee until
   about $588: Scale costs no more once usage at list passes Scale's fee less Startup's plus Startup's credit at list
   ($499 - $99 + $111 = about $511). */
export const scaleFrom = Math.round((scalePlan.monthly ?? 0) - (startupPlan.monthly ?? 0) + creditWorth(startupPlan, source))

/* The credit, worked (the lead, 21 Nov): Startup in a month that uses less than its credit and one that goes past it,
   billed by the engine. The two months use 64% and 130% of Startup's credit, on inboxes at Startup's rate; past the
   credit, the uncovered share of the month is billed at list rates (founders, 22 Nov 2026). */
const creditMonth = (share: number) => {
  const used = Math.round((startupPlan.credit ?? 0) * share)
  const bill = monthlyBill({ inbox: used / startupRate.inbox.rate }, startupPlan, source)
  return { used, bill: bill.total ?? 0, unused: bill.unused, payg: bill.payg }
}
export const creditExample = { plan: planNames.startup, fee: startupPlan.monthly ?? 0, credit: startupPlan.credit ?? 0, low: creditMonth(0.64), high: creditMonth(1.3) }

/* The US texting registration in words (founders, 22 Nov 2026): "$25" once to file each campaign, then "$17" a month
   while it's active, the same on every plan, taken from the buyer's account. No plan includes it. */
export const registration = {
  once: money(register.once?.retail ?? 0),
  monthly: money(retail('register')),
  line: `US texting registration: ${money(register.once?.retail ?? 0)} once to file each campaign, then ${money(retail('register'))} a month while it’s active, taken from your account.`,
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
