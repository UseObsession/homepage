import { pieceOrder, piecePaths } from './piecePaths'
import {
  creditExample,
  eventLogKept,
  freeNumber,
  personaCostLine as personaLine,
  plans,
  prices,
  scaleFrom,
  scaleRule,
  type PieceId,
  type Plan,
  type PlanId,
  type PriceKey,
} from './prices'
import type { Cta, Faq, Meta } from './types'

/* The words of /pricing (pages/Pricing.tsx) and /pricing/rates (pages/PricingRates.tsx), outside the Page glob
   (James, 21 Nov 2026: plans first, the long rate list on its own page).

   The plans (founders, 21 Nov 2026): a paid plan's fee buys a month of usage in dollars ("$100 of usage a month, spent
   on any piece"), at each piece's rate, model tokens included; past it, pay as you go at the same rates. What isn't
   used resets each month and never carries over. Plans differ by features and, on Scale, by lower rates. Free keeps
   fixed allowances. Enterprise leads with the reseller offer and starts monthly with nothing paid up front; yearly
   billing is an option chosen later, never a requirement. Blueprint plans are separate products and never use a plan's
   monthly usage; a blueprint a developer runs through the API is billed on the pieces it uses, so it does.

   /pricing: the hero, the 5 plans as cards read from `plans` in prices.ts (each card's fee, monthly usage and features
   come from there; who it's for, the words of each feature and its button are written here; Startup is the
   recommended plan), the line that sends readers to every rate, the calculator (a card per piece with an on/off switch,
   steppers and sliders; the engine's monthlyBill prices the month on every plan and the summary picks the cheapest), the
   questions, the closing call. /pricing/rates: every rate grouped by piece, Scale's beside it where lower, each group
   linking to its piece's page, then its own questions.

   Every price and amount is read from prices.ts and never typed here: the founders may still change them. The stored
   history is "the event log" (James, 21 Nov); every word for it is in EVENT_LOG below, so a rename is 1 edit. */

const EVENT_LOG = {
  name: 'Event log',
  lower: 'event log',
  line: 'Every event from every piece, persona and blueprint, dated, with the message or screenshot behind it.',
  events: 'events in your event log',
  event: 'event in your event log',
}

/* ---- Shared helpers ---- */

/* 1,000 with its comma, the same on the server and in every browser. */
export const figure = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
/* A count as a reader says it: 10,000,000 is "10 million". */
export const quantity = (n: number) => (n >= 1e6 && n % 1e6 === 0 ? `${figure(n / 1e6)} million` : figure(n))
/* Whole dollars, for a plan's price: "$20". */
const dollars = (n: number) => `$${figure(n)}`
/* Dollars to the cent where there are cents: "$129", "$27.90". */
const cash = (n: number) => (Number.isInteger(n) ? dollars(n) : `$${figure(Math.floor(n))}.${String(Math.round((n % 1) * 100)).padStart(2, '0')}`)
/* "a, b and c". */
const andList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`)
/* "20%". */
const percent = (x: number) => `${Math.round(x * 100)}%`

/* What each counted price is a count of, as a reader names it. */
export const counts: Partial<Record<PriceKey, { one: string; many: string }>> = {
  inbox: { one: 'inbox', many: 'inboxes' },
  email: { one: 'email', many: 'emails' },
  number: { one: 'phone number', many: 'phone numbers' },
  sms: { one: 'text', many: 'texts' },
  voice: { one: 'call minute', many: 'call minutes' },
  imessage: { one: 'iMessage line', many: 'iMessage lines' },
  browser: { one: 'browser hour', many: 'browser hours' },
  stealth: { one: 'stealth browser hour', many: 'stealth browser hours' },
  sandbox: { one: 'sandbox vCPU hour', many: 'sandbox vCPU hours' },
  memory: { one: 'GiB hour of sandbox memory', many: 'GiB hours of sandbox memory' },
  log: { one: EVENT_LOG.event, many: EVENT_LOG.events },
  register: { one: 'US texting campaign', many: 'US texting campaigns' },
  tokens: { one: 'dollar of model spend', many: 'dollars of model spend' },
}
/* "1 phone number", "10 million events in your event log". */
const amountOf = (key: PriceKey, n: number) => `${quantity(n)} ${n === 1 ? counts[key]?.one : counts[key]?.many}`
/* The prices Scale lowers, as a reader names them: "inboxes, emails, texts ...". */
const plural: Partial<Record<PriceKey, string>> = {
  inbox: 'inboxes',
  email: 'emails',
  sms: 'texts',
  memory: 'sandbox memory',
  whatsapp: 'WhatsApp',
  register: 'US texting registration',
  log: `the ${EVENT_LOG.lower}`,
  number: 'phone numbers',
  voice: 'calls',
  imessage: 'iMessage lines',
  browser: 'browser hours',
  stealth: 'stealth browser hours',
  sandbox: 'sandbox CPU time',
}
const named = (id: PlanId) => planOf(id).name
const planOf = (id: PlanId): Plan => {
  const pl = plans.find((x) => x.id === id)
  if (!pl) throw new Error(`content/pricing.ts: no plan "${id}" in prices.ts`)
  return pl
}
const free = planOf('free')
const developer = planOf('developer')
const startup = planOf('startup')
const scale = planOf('scale')
const enterprise = planOf('enterprise')
const paid = plans.filter((pl) => (pl.monthly ?? 0) > 0)

/* Free's number: what it receives a month, "50 texts and 30 call minutes" (prices.ts freeNumber). */
const freeIn = `${amountOf('sms', freeNumber.texts)} and ${amountOf('voice', freeNumber.minutes)}`
/* A paid plan's monthly usage: "$100 of usage a month, spent on any piece" (the lead, 21 Nov). */
const usageLine = (pl: Plan) => `${dollars(pl.credit ?? 0)} of usage a month${pl.lowerRates ? ' at lower rates' : ''}, spent on any piece`
/* Scale's lower rates, in words. */
const scaleLower = andList(scaleRule.lower.filter((k) => k !== 'tokens').map((k) => plural[k] ?? k))
const scaleLowerOr = [...scaleRule.lower.filter((k) => k !== 'tokens').map((k) => plural[k] ?? k), 'model tokens'].join(', ').replace(/, ([^,]*)$/, ' or $1')
const scaleSame = andList(scaleRule.atList.filter((k) => k !== 'tokens').map((k) => plural[k] ?? k))
const scaleLowerLine = `Up to ${percent(scaleRule.off)} off ${scaleLower}`
const scaleTokensLine = `Model tokens at ${scaleRule.tokens.scale.toLowerCase()}`
/* A plan's campaigns: "1 low volume campaign", "2 standard campaigns". */
const campaignsOf = (pl: Plan) => (pl.campaigns ? `${pl.campaigns.count} ${pl.campaigns.kind} campaign${pl.campaigns.count === 1 ? '' : 's'}` : '')
/* "Events kept for 90 days in your event log". */
const keptLine = (pl: Plan) => `Events kept for ${pl.eventLogDays === 365 ? 'a year' : `${pl.eventLogDays} days`} in your ${EVENT_LOG.lower}`
const supportLine: Record<string, string> = { email: 'Email support', priority: 'Priority support' }

/* Enterprise's terms (founder, 21 Nov): it starts monthly, with no yearly commitment and nothing paid up front, and
   grows with usage; yearly billing is an option the buyer may choose later. */
const enterpriseStart = `${named('enterprise')} starts monthly, from ${dollars(enterprise.from ?? 0)} a month, with no yearly commitment and nothing paid up front`
const enterpriseYearly = enterprise.yearlyLater ? 'If you want yearly billing later, you can switch to it, but it’s never required.' : ''

const JOIN = '/#join'
const RATES = '/pricing/rates'

/* ---- /pricing: the plans ---- */

export type PlanCard = {
  id: PlanId
  name: string
  /* A word before the price ("From" on Enterprise), the big words and the line beside them: "$99" and "a month". */
  lead?: string
  price: string
  per: string
  /* Who it's for, in 1 line. */
  for: string
  /* What each month brings: a paid plan's usage and the pay as you go line; Free's allowances; Enterprise's reseller offer. */
  includes: string[]
  /* What the plan opens up beyond that. */
  features: string[]
  cta: Cta
  /* The plan the page lifts (Startup): the raised card, its tag and the row's 1 primary button. */
  featured?: boolean
}

/* The last line under every paid plan's usage (buyer panel, 21 Nov: readers took amounts for hard caps): past it the
   plan keeps working at the same rates, and growing never needs Enterprise. */
const payAsYouGo = 'Past it, pay as you go at the same rates, with no limit'

/* Free's allowances, in prices.ts order; its number with what it receives. */
const freeIncludes = (Object.keys(prices) as PriceKey[]).flatMap((k) => {
  const n = free.allowances[k]
  if (!n) return []
  return [k === 'number' ? `${amountOf(k, n)} that receives up to ${freeIn} a month` : amountOf(k, n)]
})

/* A paid plan's features: its US texting campaigns, how long its event log keeps events, support, seats, the spend cap. */
const paidFeatures = (pl: Plan) =>
  [
    pl.campaigns ? `US texting: the monthly fee of ${campaignsOf(pl)}` : '',
    pl.eventLogDays ? keptLine(pl) : '',
    pl.support ? supportLine[pl.support] ?? '' : '',
    pl.seats ? 'Seats for your whole team' : '',
    pl.spendCap ? 'A monthly spend cap you set' : '',
  ].filter(Boolean)

const planWords: Record<PlanId, Omit<PlanCard, 'id' | 'name' | 'price' | 'per' | 'featured'>> = {
  free: {
    for: 'For building and testing your first agent.',
    includes: freeIncludes,
    features: ['No credit card', 'The API, SDKs and MCP', keptLine(free)],
    cta: { label: 'Start free', to: JOIN },
  },
  developer: {
    for: 'For your first agent in production.',
    includes: [usageLine(developer), payAsYouGo],
    features: paidFeatures(developer),
    cta: { label: 'Get early access', to: JOIN },
  },
  startup: {
    for: 'For a product whose agents work every day.',
    includes: [usageLine(startup), payAsYouGo],
    features: paidFeatures(startup),
    cta: { label: 'Get early access', to: JOIN },
  },
  scale: {
    for: 'For agents that run at volume, on lower rates.',
    includes: [usageLine(scale), scaleLowerLine, scaleTokensLine, payAsYouGo],
    features: paidFeatures(scale),
    cta: { label: 'Get early access', to: JOIN },
  },
  /* The reseller programme first, volume after it (James, 21 Nov); monthly with nothing up front (founder, 21 Nov). */
  enterprise: {
    for: 'For agencies and software companies that resell Obsession to their own clients.',
    includes: ['White label, with your brand in place of ours', 'An account for each client', 'Your brand on every report', 'Wholesale rates on every piece'],
    features: [
      'Rates that drop as your volume grows',
      `Events kept longer in your ${EVENT_LOG.lower}`,
      'SSO and a support channel of your own',
      'Starts monthly, with nothing paid up front',
      ...(enterprise.yearlyLater ? ['Yearly billing later, only if you choose it'] : []),
    ],
    cta: { label: 'Talk to us', to: JOIN },
  },
}

const planCards: PlanCard[] = plans.map((pl) => ({
  id: pl.id,
  name: pl.name,
  lead: pl.monthly == null ? 'From' : undefined,
  price: dollars(pl.monthly ?? pl.from ?? 0),
  per: pl.monthly == null ? 'a month, billed monthly' : pl.lowerRates ? 'a month, no contract' : 'a month',
  ...planWords[pl.id],
  featured: pl.featured,
}))

/* ---- /pricing: the calculator ---- */

/* A quantity on a piece's card: the price it counts, its label, where it starts, the stepper's step, and, where the
   range is large, the slider's stops (Free's own allowances are added to them, so the slider lands on Free's edge).
   `adds` is a price that comes with any use of it (texting in the US needs the carriers' registration). */
export type CalcQuantity = { key: PriceKey; label: string; start: number; step: number; stops?: number[]; adds?: PriceKey }
/* A piece's card: its switch (name and line), whether it starts on, its quantities and a note under them. */
export type CalcPiece = { id: string; name: string; line: string; on: boolean; quantities: CalcQuantity[]; note?: string }

const { whatsapp, chat, register, email, inbox, number, browser, sandbox, log, tokens, persona } = prices

/* The cards in the founders' order (piecePaths.ts pieceOrder). Personas has no card: a persona costs nothing while it
   waits. The event log, which holds every piece's events, and model tokens come last. */
const calcPieces: CalcPiece[] = [
  {
    id: 'email',
    name: 'Email',
    line: 'Inboxes your agents send and receive from.',
    on: true,
    quantities: [
      { key: 'inbox', label: 'Inboxes', start: 10, step: 1 },
      { key: 'email', label: 'Emails a month', start: 20000, step: 1000, stops: [1000, 25000, 50000, 250000, 500000, 1000000] },
    ],
  },
  {
    id: 'browser',
    name: 'Browser',
    line: 'A cloud browser with a home connection.',
    on: true,
    quantities: [
      { key: 'browser', label: 'Browser hours a month', start: 100, step: 10, stops: [25, 100, 250, 1000, 2000] },
      { key: 'stealth', label: 'Stealth browser hours', start: 0, step: 10 },
    ],
  },
  {
    id: 'phone',
    name: 'Phone',
    line: 'Numbers your agents text and call from.',
    /* Off until the reader turns it on (James, 21 Nov). */
    on: false,
    quantities: [
      { key: 'number', label: 'Phone numbers', start: 2, step: 1 },
      { key: 'sms', label: 'Texts a month', start: 1000, step: 100, adds: 'register' },
      { key: 'voice', label: 'Call minutes a month', start: 200, step: 100 },
    ],
    /* Free's number sends nothing, so any texts or minutes here take the summary to a paid plan. */
    note: `${named('free')}’s number receives up to ${freeIn} a month. It sends no texts and makes no calls, so those need a paid plan, and each paid plan includes the monthly fee of its US texting campaigns.`,
  },
  {
    id: 'sandbox',
    name: 'Sandbox',
    line: 'A computer to run code in, started only when a task needs it.',
    on: false,
    quantities: [
      { key: 'sandbox', label: 'vCPU hours a month', start: 40, step: 10 },
      { key: 'memory', label: 'GiB hours of memory a month', start: 80, step: 10 },
    ],
  },
  {
    id: 'messaging',
    name: 'Messaging',
    line: 'iMessage lines, WhatsApp, Slack and Telegram.',
    on: false,
    quantities: [{ key: 'imessage', label: 'iMessage lines', start: 1, step: 1 }],
    note: `${whatsapp.name}: ${whatsapp.amount} ${whatsapp.unit}. ${chat.name}: ${chat.amount.toLowerCase()} ${chat.unit}.`,
  },
  {
    id: 'event log',
    name: EVENT_LOG.name,
    line: EVENT_LOG.line,
    on: false,
    quantities: [{ key: 'log', label: 'Events a month', start: 1000000, step: 100000, stops: [500000, 5000000, 25000000, 50000000] }],
  },
  {
    id: 'tokens',
    name: tokens.name,
    line: 'Our model for your agents, paid from the same monthly usage.',
    on: false,
    quantities: [{ key: 'tokens', label: 'Model spend at cost, $ a month', start: 100, step: 10 }],
    note: `${tokens.amount} on every plan, ${tokens.scale?.amount.toLowerCase() ?? tokens.amount.toLowerCase()} on ${named('scale')}. With your own key, your provider bills you and nothing reaches your Obsession bill.`,
  },
]

/* How each rate reads after its amount on a line of the summary: "$0.32 per 1,000". */
export const ratePer: Partial<Record<PriceKey, string>> = {
  inbox: 'each',
  email: 'per 1,000',
  number: 'each',
  sms: 'each',
  register: 'a month',
  voice: 'a minute',
  imessage: 'each',
  browser: 'an hour',
  stealth: 'an hour',
  sandbox: 'an hour',
  memory: 'a GiB hour',
  log: 'per million',
}

export type PricingPage = {
  meta: Meta
  /* 1 sentence for the share card. */
  line: string
  pill: string
  headline: string
  sub: string
  plans: {
    /* The section has no visible heading: the hero above is its claim. */
    label: string
    items: PlanCard[]
    /* The tag on the featured card, and the name of each card's 2 lists, read aloud. */
    tag: string
    includes: string
    features: string
    /* The line under the cards: how the monthly usage works, and the link to every rate. */
    extra: { line: string; link: Cta }
  }
  calc: {
    heading: string
    line: string
    pieces: CalcPiece[]
    /* The stepper buttons' names, from what the quantity counts. */
    less: (many: string) => string
    more: (many: string) => string
    summary: {
      best: string
      month: string
      plan: (name: string) => string
      /* A line's sub: what it counts, at what rate. */
      at: (n: string, rate: string) => string
      /* A line Free's allowance covers in full, and one a paid plan includes (the US texting campaign). */
      allowance: (n: string) => string
      inPlan: string
      free: string
      /* The line taking the plan's monthly usage off the month. */
      covered: (usage: string) => string
      /* Under the lines, when some of the plan's usage is left. */
      unused: (left: string) => string
      /* The month on every plan. */
      each: string
      over: string
      rows: string
      rest: string
      cta: Cta
      secondary: Cta
      /* Read aloud once the inputs settle. */
      announce: (plan: string, total: string) => string
    }
  }
  faq: Faq
  final: { heading: string; line: string; cta: Cta; secondary: Cta }
}

const openLine = `Obsession sells email, phone, messaging, a cloud browser and a code sandbox for AI agents on ${plans.length} plans, with one bill.`
/* "Developer is $20 a month for $20 of usage, Startup $99 for $100 and Scale $499 for $500 at lower rates". */
const paidLine = paid
  .map((pl, i) => `${pl.name}${i === 0 ? ' is' : ''} ${dollars(pl.monthly ?? 0)}${i === 0 ? ' a month' : ''} for ${dollars(pl.credit ?? 0)}${i === 0 ? ' of usage' : ''}${pl.lowerRates ? ' at lower rates' : ''}`)
  .join(', ')
  .replace(/, ([^,]*)$/, ' and $1')
const ex = creditExample

export const pricingPage: PricingPage = {
  meta: {
    path: '/pricing',
    title: 'Obsession pricing: plans for agent email, phone and browser',
    description: `${andList(plans.map((pl) => pl.name))} plans for AI agent email, phone, a cloud browser and a sandbox: a month of usage, spent on any piece.`,
    answer: `${openLine} ${named('free')} costs nothing and includes ${andList(freeIncludes)}. ${paidLine}, each spent on any piece, and past it you pay as you go at the same rates. ${enterpriseStart}, and gives resellers wholesale rates.`,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Pricing', path: '/pricing' },
    ],
  },
  line: 'Every piece an AI agent needs, paid from one month of usage on one bill.',

  pill: 'Early access pricing',
  headline: 'Start free. A paid plan is a month of usage, spent on any piece.',
  sub: `${openLine} A paid plan’s fee buys that much usage each month at each piece’s rate, model tokens included, and past it you pay as you go.`,

  plans: {
    label: 'Plans',
    items: planCards,
    tag: 'Recommended',
    includes: 'Each month',
    features: 'Also',
    extra: {
      line: `A plan’s usage is counted in dollars at each piece’s rate. What you don’t use resets at the start of each month and doesn’t carry over.`,
      link: { label: 'See every rate', to: RATES },
    },
  },

  calc: {
    heading: 'See which plan fits before you write a line of code.',
    line: 'Turn on the pieces your agents use and set how much. The summary prices your month on every plan and picks the one that costs least.',
    pieces: calcPieces,
    less: (many) => `Fewer ${many}`,
    more: (many) => `More ${many}`,
    summary: {
      best: 'Your best plan',
      month: 'a month',
      plan: (name) => `${name} plan`,
      at: (n, rate) => `${n} at ${rate}`,
      allowance: (n) => `${n} in ${named('free')}`,
      inPlan: 'Monthly fee in the plan',
      free: 'Included',
      covered: (usage) => `Paid from the plan’s ${usage} of usage`,
      unused: (left) => `${left} of the plan’s usage is left this month. It doesn’t carry over.`,
      each: 'Your month on each plan',
      over: 'Past its allowances',
      rows: 'Your month, line by line',
      rest: 'WhatsApp messages and the US texting filing are paid from the same monthly usage, at their own rates.',
      cta: { label: 'Get early access', to: JOIN },
      secondary: { label: `Talk to us about ${named('enterprise')}`, to: JOIN },
      announce: (plan, total) => `${plan}, ${total} a month.`,
    },
  },

  faq: {
    heading: 'Questions about plans and bills.',
    items: [
      {
        q: 'How does a plan’s monthly usage work?',
        a: `Each paid plan’s fee buys a set amount of usage every month, in dollars, at each piece’s rate. Spend it on any piece, model tokens included. On ${ex.plan}, ${dollars(ex.fee)} buys ${dollars(ex.credit)} of usage. If your agents use ${cash(ex.low.used)} in a month, the bill stays ${cash(ex.low.bill)}. If they use ${cash(ex.high.used)}, the bill is ${dollars(ex.fee)} + ${cash(ex.high.payg)} = ${cash(ex.high.bill)}. What you don’t use resets at the start of each month and doesn’t carry over.`,
      },
      {
        q: 'Can I use just one piece?',
        a: 'Yes. Each piece works on its own with the same API key. Use only email, then add a phone number or a browser when your agent needs one, on the same plan and the same bill.',
      },
      {
        q: 'What happens when I use more than my plan’s monthly usage?',
        a: `You pay as you go, at the same rates. On ${named('developer')} and ${named('startup')} that’s each piece’s rate on the rates page, such as ${email.amount} ${email.unit}. On ${named('scale')} it’s ${named('scale')}’s lower rate. Nothing stops and we set no limit, so your plan keeps working as your agents grow. You don’t need ${named('enterprise')} to grow: it’s for companies that resell Obsession to their own clients. To keep the bill where you want it, set a monthly spend cap.`,
        link: { label: 'See every rate', to: RATES },
      },
      {
        q: `When does ${named('scale')} cost less than ${named('startup')}?`,
        a: `Once your month’s usage passes ${dollars(scaleFrom)} at the standard rates on the rates page. Past that, ${named('startup')} bills ${dollars(startup.monthly ?? 0)} plus everything past its ${dollars(startup.credit ?? 0)} at the standard rates, and ${named('scale')} bills ${dollars(scale.monthly ?? 0)} plus everything past its ${dollars(scale.credit ?? 0)} at its lower rates, so ${named('scale')} never costs more. It costs less whenever your month includes ${scaleLowerOr}. ${named('scale')} bills these up to ${percent(scaleRule.off)} less, and model tokens at ${scaleRule.tokens.scale.toLowerCase()}. ${scaleSame.charAt(0).toUpperCase() + scaleSame.slice(1)} cost the same on every plan.`,
      },
      {
        q: `What happens when ${named('free')} runs out?`,
        a: `That piece pauses until the next month, or until you pick a paid plan. On ${named('free')}’s number, messages past ${freeIn} a month still arrive and are kept, but your agent isn’t woken until you upgrade. ${named('free')} needs no credit card, so it never bills you.`,
      },
      {
        q: 'Can I change plans?',
        a: 'Yes, at any time from your account. The new plan’s monthly usage and rates apply from the day you change.',
      },
      {
        q: 'What does a blueprint cost?',
        a: `A blueprint is a job that runs on Obsession, one of ours or one you write. Each blueprint has its own plans, priced for the job it does, such as per store, location, competitor or voice agent. Every one starts with a free run, and its page shows what each plan covers. A blueprint’s plan is billed on its own and never uses your plan’s monthly usage. Developers who run a blueprint from their own code through the API pay for the pieces it uses, from their plan’s monthly usage.`,
        link: { label: 'See the mystery shopper blueprint', to: '/blueprints/mystery-shopper' },
      },
      {
        q: 'What does a persona cost?',
        a: `${personaLine} That’s each piece at its own rate, paid from your plan’s monthly usage. The persona itself is ${persona.amount.toLowerCase()} ${persona.unit}. ${persona.note} It answers a new message in about 50 ms without starting a machine, so days of waiting for a reply add nothing.`,
      },
      {
        q: 'Can my agent send texts on every plan?',
        a: `No. ${named('free')}’s number receives texts and calls, such as login codes, up to ${freeIn} a month. It sends no texts and makes no calls. Past those amounts, messages still arrive and are kept, but your agent isn’t woken until you upgrade. To send texts or call out, pick a paid plan. Texting from a US number needs the carriers’ registration. Each paid plan includes the monthly fee of its campaigns: ${andList(paid.map((pl) => `${pl.name} ${campaignsOf(pl)}`))}. A low volume campaign is the carriers’ tier for small senders, and a standard campaign can send more. Filing a campaign is ${register.amount} once, paid from your monthly usage, and each extra campaign is ${register.unit.replace(/^once, then /, '')}.`,
        link: { label: 'See the phone rates', to: `${RATES}#phone` },
      },
      {
        q: `What’s in ${named('enterprise')}?`,
        a: `${named('enterprise')} is for companies that resell Obsession to their own clients. Your clients see your brand and never ours, on every dashboard and report. Each client gets its own account, and you pay wholesale rates on every piece. Your rates drop as your volume grows, and you get events kept longer in your ${EVENT_LOG.lower}, SSO and a support channel of your own. ${enterpriseStart}, and it grows with your usage. ${enterpriseYearly}`.trim(),
      },
      {
        q: 'Can I cap what I spend?',
        a: 'Yes. Set a monthly spend cap on your account. When the month’s bill reaches it, billable work stops until you raise the cap or the next month starts.',
      },
      {
        q: 'Where is my data kept, and who handles it?',
        a: 'Results are stored encrypted in the EU, in a Postgres database in Ireland and, for files such as screenshots, in Cloudflare R2. Every connection to them is encrypted too, and only the 2 founders can reach them. The security page names every supplier that handles your data, how long we keep it and how to send us a security questionnaire.',
        link: { label: 'Read about security', to: '/security' },
      },
    ],
  },

  final: {
    heading: 'Your agent’s first inbox is free.',
    line: `Request early access and start on ${named('free')}, with no credit card. Pick a plan when your agents need more.`,
    cta: { label: 'Get early access', to: JOIN },
    secondary: { label: 'See every rate', to: RATES },
  },
}

/* ---- /pricing/rates: every rate, grouped by piece ---- */

/* A piece's group: its name, 1 line, the link to its own page, and its prices in prices.ts order. */
export type PriceGroup = { piece: PieceId; name: string; line: string; link: Cta; keys: PriceKey[] }

const groupWords: Record<PieceId, { name: string; line: string; link: string }> = {
  email: { name: 'Email', line: 'Inboxes your agents send and receive from, with threads, attachments and webhooks.', link: 'How Email works' },
  phone: { name: 'Phone', line: 'Phone numbers your agents text and call from.', link: 'How Phone works' },
  messaging: { name: 'Messaging', line: 'iMessage lines, WhatsApp, Slack and Telegram, on the same API.', link: 'How Messaging works' },
  browser: { name: 'Browser', line: 'A cloud browser with a home connection, whose sessions keep their logins.', link: 'How Browser works' },
  sandbox: { name: 'Sandbox', line: 'A computer to run code in, started only when a task needs it.', link: 'How Sandbox works' },
  personas: { name: `Personas and the ${EVENT_LOG.lower}`, line: `The pieces under one identity. ${EVENT_LOG.line}`, link: 'How Personas work' },
}
const keys = Object.keys(prices) as PriceKey[]
const groups: PriceGroup[] = pieceOrder.map((piece) => ({
  piece,
  name: groupWords[piece].name,
  line: groupWords[piece].line,
  link: { label: groupWords[piece].link, to: piecePaths[piece] },
  keys: keys.filter((k) => prices[k].piece === piece),
}))

export type RatesPage = {
  meta: Meta
  /* 1 sentence for the share card. */
  line: string
  pill: string
  headline: string
  sub: string
  /* The list has no visible heading of its own: the hero above is its claim. */
  list: { label: string; groups: PriceGroup[]; scale: string }
  faq: Faq
  final: { heading: string; line: string; cta: Cta; secondary: Cta }
}

const ratesOpen = 'These are the rates Obsession bills for each piece an AI agent uses, from a plan’s monthly usage and past it.'

export const ratesPage: RatesPage = {
  meta: {
    path: RATES,
    title: 'Obsession rates: agent email, phone, browser, sandbox prices',
    description:
      'Every Obsession rate, piece by piece: inboxes, emails, phone numbers, texts, calls, iMessage, WhatsApp, browser hours, sandbox time and event log events.',
    answer: `${ratesOpen} ${[inbox, email, number, prices.sms, prices.voice, browser, sandbox, log].map((x) => `${x.name}: ${x.amount} ${x.unit}.`).join(' ')}`,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Every rate', path: RATES },
    ],
  },
  line: 'Every rate Obsession bills, piece by piece, in US dollars.',

  pill: 'Early access pricing',
  headline: `Each piece has one rate, and ${named('scale')} lowers ${scaleRule.lower.length} of them.`,
  sub: `${ratesOpen} Prices are in US dollars, every piece is on the same bill, and ${named('scale')}’s rate is shown beside each one it lowers.`,

  list: { label: 'Every rate, by piece', groups, scale: `On ${named('scale')}` },

  faq: {
    heading: 'Questions about rates.',
    items: [
      {
        q: 'Do the rates change with my plan?',
        a: `Only on ${named('scale')}. ${named('free')}, ${named('developer')} and ${named('startup')} bill the rates on this page. ${named('scale')} bills up to ${percent(scaleRule.off)} less for ${scaleLower}. Its model tokens are ${scaleRule.tokens.scale.toLowerCase()}. ${scaleSame.charAt(0).toUpperCase() + scaleSame.slice(1)} cost the same on every plan. ${named('enterprise')} gets wholesale rates, agreed with you, that drop as your volume grows.`,
      },
      {
        q: 'How is WhatsApp priced?',
        a: `At ${whatsapp.amount} ${whatsapp.unit}${whatsapp.scale ? `, or ${whatsapp.scale.amount} on ${named('scale')}` : ''}. ${whatsapp.note} WhatsApp is for support, sales, bookings and notifications.`,
      },
      {
        q: 'Why does texting in the US cost a monthly fee?',
        a: `US carriers ask every business that texts to register its use, and each registration, called a campaign, carries a monthly fee. Each paid plan includes the monthly fee of its campaigns: ${andList(paid.map((pl) => `${pl.name} ${campaignsOf(pl)}`))}. A low volume campaign is the carriers’ tier for small senders, and a standard campaign can send more. Filing a campaign is ${register.amount} once, paid from your monthly usage, and each extra campaign is ${register.unit.replace(/^once, then /, '')}. We file every one for you. ${named('free')}’s number sends no texts, so it needs no registration.`,
      },
      {
        q: 'What does a phone number outside the US or UK cost?',
        a: number.note,
      },
      {
        q: 'What does a sandbox cost while it waits?',
        a: `Almost nothing. ${sandbox.note}`,
      },
      {
        q: `How long do events stay in the ${EVENT_LOG.lower}?`,
        a: `Every event stays in your ${EVENT_LOG.lower} at no extra charge for ${eventLogKept}, and longer on ${named('enterprise')}. The ${EVENT_LOG.lower} costs ${log.amount} ${log.unit}${log.scale ? `, or ${log.scale.amount} on ${named('scale')}` : ''}.`,
      },
      {
        q: 'How are model tokens billed?',
        a: `At ${tokens.amount.toLowerCase()}${tokens.scale ? `, or ${tokens.scale.amount.toLowerCase()} on ${named('scale')}` : ''}, paid from your plan’s monthly usage. With your own key, your model provider bills you and the tokens never reach your Obsession bill.`,
      },
    ],
  },

  final: {
    heading: 'A plan buys a month of usage at these rates.',
    line: 'Pick the plan that fits your agents. Its fee covers that much usage each month, and past it you pay these rates.',
    cta: { label: 'See the plans', to: '/pricing#plans' },
    secondary: { label: 'Get early access', to: JOIN },
  },
}
