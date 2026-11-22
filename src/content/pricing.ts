import { pieceOrder, piecePaths } from './piecePaths'
import {
  coversExample,
  eventLogKept,
  freeNumber,
  personaCostLine as personaLine,
  plans,
  prices,
  registration,
  scaleFrom,
  type PieceId,
  type Plan,
  type PlanId,
  type PriceKey,
} from './prices'
import type { Cta, Faq, Meta, PersonaIcon } from './types'

/* The words of /pricing (pages/Pricing.tsx) and /pricing/rates (pages/PricingRates.tsx), outside the Page glob
   (James, 21 Nov 2026: plans first, the long rate list on its own page).

   The plans (founders, 22 Nov 2026): one price list, the pieces at list rates, on every plan. A paid plan's fee covers a
   set amount of usage at those rates (Startup's $99 covers $111); past it, pay as you go at the same list rates, with a
   spend cap if the buyer sets one. What isn't used resets each month and never carries over. Model tokens are pieces
   too, per million on Auto. Free keeps fixed allowances. Enterprise leads with the reseller offer, is from
   $1,500 as a first-month floor, starts monthly with nothing paid up front and earns 2 months free when paid yearly. A
   blueprint run counts toward the plan's usage like any piece, its tokens included, and each blueprint page shows what
   a typical month costs. The US texting registration has fixed prices, the same for everyone, and no plan includes it.

   /pricing: the hero, the 5 plans as cards read from `plans` in prices.ts (each card's fee, what it covers and features
   come from there; who it's for, the words of each feature and its button are written here; Startup is the
   recommended plan). A paid card is its name, price, the value tag ("covers $111 of usage", James 22 Nov 2026: a
   visual, not a sentence), who it's for, its button, the pay as you go line linking to every rate, and 2 to 3 short
   features; the spend cap and the detail live in the questions. Then the calculator (a card per piece with an on/off
   switch, steppers and sliders; the engine's monthlyBill prices the month at list rates on every plan, takes off what
   each plan covers, and the summary picks the cheapest), the questions, the closing call. /pricing/rates: every rate
   grouped by piece, each group linking to its piece's page, then its own questions.

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
  tokensIn: { one: 'million input tokens', many: 'million input tokens' },
  tokensCached: { one: 'million cached input tokens', many: 'million cached input tokens' },
  tokensOut: { one: 'million output tokens', many: 'million output tokens' },
}
/* "1 phone number", "10 million events in your event log". */
const amountOf = (key: PriceKey, n: number) => `${quantity(n)} ${n === 1 ? counts[key]?.one : counts[key]?.many}`
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
/* "Startup’s $99 covers $111", for the questions and the calculator's line. */
const coversWords = (pl: Plan) => `${pl.name}’s ${dollars(pl.monthly ?? 0)} covers ${dollars(pl.covers ?? 0)}`
/* "Events kept for 90 days". */
const keptLine = (pl: Plan) => `Events kept for ${pl.eventLogDays === 365 ? 'a year' : `${pl.eventLogDays} days`}`
const supportLine: Record<string, string> = { email: 'Email support', priority: 'Priority support' }

/* Enterprise's terms (founders, 22 Nov): from $1,500 a month, the floor on the first month's bill; it starts monthly,
   with no yearly commitment and nothing paid up front, and grows with usage; paid yearly, it earns months free. */
const enterpriseStart = `${named('enterprise')} is from ${dollars(enterprise.from ?? 0)} a month${enterprise.fromFirstMonth ? ', the minimum for the first month,' : ''} and starts monthly, with nothing paid up front`
const enterpriseYearly = enterprise.yearlyFree ? `Pay yearly and get ${enterprise.yearlyFree} months free, if you want to.` : ''

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
  /* A paid plan's value tag under the price: the usage its fee covers at list rates ("$111"), set between the small
     words of `plans.covers`. */
  covers?: string
  /* Who it's for, in a few words. */
  for: string
  /* A paid plan's first row: what happens past what it covers, its last words a link to every rate. */
  payg?: { text: string; link: Cta }
  /* 1 short list: a paid plan's 2 to 3 features; Free's allowances; Enterprise's reseller offer and terms. */
  includes: string[]
  cta: Cta
  /* The plan the page lifts (Startup): the raised card, its tag and the row's 1 primary button. */
  featured?: boolean
}

/* A paid plan's first row (buyer panel, 21 Nov: readers took amounts for hard caps): past what it covers, the plan keeps
   working at list rates, which link to every rate (James, 22 Nov 2026). It names the amount, since the button sits
   between it and the value tag. The spend cap is in the questions. */
const payAsYouGo = (pl: Plan) => ({ text: `Past ${dollars(pl.covers ?? 0)}, pay as you go at`, link: { label: 'list rates', to: RATES } })

/* Free's allowances, in prices.ts order; its number with what it receives (the page's answer for search engines). */
const freeIncludes = (Object.keys(prices) as PriceKey[]).flatMap((k) => {
  const n = free.allowances[k]
  if (!n) return []
  return [k === 'number' ? `${amountOf(k, n)} that receives up to ${freeIn} a month` : amountOf(k, n)]
})
/* Free's card: its allowances 2 to a line, what its number receives in the questions. */
const fa = free.allowances
const freeCard = [
  `${amountOf('inbox', fa.inbox ?? 0)} and ${amountOf('email', fa.email ?? 0)}`,
  `${amountOf('number', fa.number ?? 0)} that receives texts and calls`,
  `${amountOf('browser', fa.browser ?? 0)} and ${amountOf('sandbox', fa.sandbox ?? 0)}`,
  amountOf('log', fa.log ?? 0),
]

/* A paid plan's features: how long its event log keeps events, seats and support. */
const paidCard = (pl: Plan) =>
  [pl.eventLogDays ? keptLine(pl) : '', pl.seats ? 'Seats for your team' : '', pl.support ? supportLine[pl.support] ?? '' : ''].filter(Boolean)

const planWords: Record<PlanId, Omit<PlanCard, 'id' | 'name' | 'price' | 'per' | 'featured' | 'covers' | 'payg'>> = {
  free: {
    for: 'For building your first agent.',
    includes: [...freeCard, 'No credit card'],
    cta: { label: 'Start free', to: JOIN },
  },
  developer: {
    for: 'For your first agent in production.',
    includes: paidCard(developer),
    cta: { label: 'Start free', to: JOIN },
  },
  startup: {
    for: 'For agents that work every day.',
    includes: paidCard(startup),
    cta: { label: 'Start free', to: JOIN },
  },
  scale: {
    for: 'For agents that run at volume.',
    includes: paidCard(scale),
    cta: { label: 'Start free', to: JOIN },
  },
  /* The reseller programme first, volume after it (James, 21 Nov); monthly with nothing up front (founder, 21 Nov). */
  enterprise: {
    for: 'For companies that resell Obsession to clients.',
    includes: [
      'White label, with an account per client',
      'Wholesale rates that drop with volume',
      'SSO and a support channel of your own',
      'Monthly, with nothing paid up front',
      ...(enterprise.yearlyFree ? [`${enterprise.yearlyFree} months free when paid yearly`] : []),
    ],
    cta: { label: 'Talk to us', to: JOIN },
  },
}

const planCards: PlanCard[] = plans.map((pl) => ({
  id: pl.id,
  name: pl.name,
  lead: pl.monthly == null ? 'From' : undefined,
  price: dollars(pl.monthly ?? pl.from ?? 0),
  per: 'a month',
  /* Only where the fee covers more than it costs (James, 22 Nov 2026: on Developer it is implied). */
  covers: pl.covers != null && pl.extra > 0 ? dollars(pl.covers) : undefined,
  payg: pl.covers != null ? payAsYouGo(pl) : undefined,
  ...planWords[pl.id],
  featured: pl.featured,
}))

/* ---- /pricing: the calculator ---- */

/* A quantity on a piece's card: the price it counts, its label, where it starts, the stepper's step, and, where the
   range is large, the slider's stops (Free's own allowances are added to them, so the slider lands on Free's edge).
   `adds` is a price that comes with any use of it (texting in the US needs the carriers' registration: 1 active
   campaign). */
export type CalcQuantity = { key: PriceKey; label: string; start: number; step: number; stops?: number[]; adds?: PriceKey }
/* A piece's card: its switch (name and line), whether it starts on, its quantities and a note under them. */
export type CalcPiece = { id: string; name: string; icon: PersonaIcon; line: string; on: boolean; quantities: CalcQuantity[]; note?: string }

const { whatsapp, chat, register, email, inbox, number, browser, sandbox, log, tokensIn, tokensCached, tokensOut } = prices
/* "$0.975 per million input tokens, $0.0975 cached and $4.875 output on Auto, which picks the model for you". */
const tokenRates = `${tokensIn.amount} per million input tokens, ${tokensCached.amount} cached and ${tokensOut.amount} output on Auto, which picks the model for you`

/* The cards in the founders' order (piecePaths.ts pieceOrder). Personas has no card: a persona costs nothing while it
   waits. The event log, which holds every piece's events, and model tokens come last. */
const calcPieces: CalcPiece[] = [
  {
    id: 'email',
    icon: 'mail',
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
    icon: 'browser',
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
    icon: 'phone',
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
    note: `${named('free')}’s number receives up to ${freeIn} a month. It sends no texts and makes no calls, so those need a paid plan. ${registration.line} ${registration.why}`,
  },
  {
    id: 'sandbox',
    icon: 'sandbox',
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
    icon: 'chat',
    name: 'Messaging',
    line: 'iMessage lines, WhatsApp, Slack and Telegram.',
    on: false,
    quantities: [{ key: 'imessage', label: 'iMessage lines', start: 1, step: 1 }],
    note: `${whatsapp.name}: ${whatsapp.amount} ${whatsapp.unit}. ${chat.name}: ${chat.amount.toLowerCase()} ${chat.unit}.`,
  },
  {
    id: 'event log',
    icon: 'record',
    name: EVENT_LOG.name,
    line: EVENT_LOG.line,
    on: false,
    quantities: [{ key: 'log', label: 'Events a month', start: 1000000, step: 100000, stops: [500000, 5000000, 25000000, 50000000] }],
  },
  {
    id: 'tokens',
    icon: 'code',
    name: 'Model tokens',
    line: 'The models your agents run on Auto, counted like any piece.',
    on: false,
    quantities: [
      { key: 'tokensIn', label: 'Input tokens, millions a month', start: 40, step: 5 },
      { key: 'tokensCached', label: 'Cached input tokens, millions a month', start: 40, step: 5 },
      { key: 'tokensOut', label: 'Output tokens, millions a month', start: 2, step: 1 },
    ],
    note: `At ${tokenRates}. With your own key, your provider bills you and nothing reaches your Obsession bill.`,
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
  tokensIn: 'per million',
  tokensCached: 'per million',
  tokensOut: 'per million',
}

export type PricingPage = {
  meta: Meta
  /* 1 sentence for the share card. */
  line: string
  pill: string
  headline: string
  sub: string
  /* Under the hero: 4 short facts a buyer checks before choosing, each with a tick. */
  trust: string[]
  plans: {
    /* The section has no visible heading: the hero above is its claim. */
    label: string
    items: PlanCard[]
    /* The tag on the featured card, and the name of each card's list, read aloud. */
    tag: string
    includes: string
    /* The small words around a paid plan's value tag: "covers" $111 "of usage". */
    covers: { before: string; after: string }
    /* The line under the cards: how the monthly usage works, and the link to every rate. Then the US texting note: the
       registration's fixed prices, which no plan includes. */
    extra: { line: string; link: Cta }
    texting: string
  }
  /* What a job costs: 1 blueprint per type, its typical months read from the pricing engine (content/catalog.ts), never
     typed here. `picks` are blueprint slugs in the types' order; the last card points to every blueprint. */
  jobs: {
    heading: string
    line: string
    picks: string[]
    per: string
    featured: string
    range: string
    more: { heading: string; line: (n: number) => string; link: Cta }
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
      /* A line Free's allowance covers in full. */
      allowance: (n: string) => string
      free: string
      /* The line taking what the plan covers off the month, and its sub. */
      covered: string
      coveredSub: (plan: string, covers: string) => string
      /* Under the lines, when some of what the plan covers is left. */
      unused: (left: string, plan: string) => string
      /* The month on every plan, each with what it covers. */
      each: string
      eachCovers: (covers: string) => string
      eachFree: string
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
/* "Developer costs $20 a month and covers $20 of usage at list rates, Startup $99 for $111 and Scale $499 for $588". */
const paidLine = paid
  .map((pl, i) => (i === 0 ? `${pl.name} costs ${dollars(pl.monthly ?? 0)} a month and covers ${dollars(pl.covers ?? 0)} of usage at list rates` : `${pl.name} ${dollars(pl.monthly ?? 0)} for ${dollars(pl.covers ?? 0)}`))
  .join(', ')
  .replace(/, ([^,]*)$/, ' and $1')
/* "Startup’s $99 covers $111 and Scale’s $499 covers $588": the plans whose fee covers more than it costs. */
const extraLine = andList(paid.filter((pl) => pl.extra > 0).map(coversWords))
const ex = coversExample

export const pricingPage: PricingPage = {
  meta: {
    path: '/pricing',
    title: 'Obsession pricing: plans for agent email, phone and browser',
    description: `${andList(plans.map((pl) => pl.name))} plans for AI agent email, phone, a cloud browser and a sandbox: each fee covers a set amount of usage.`,
    answer: `${openLine} ${named('free')} costs nothing and includes ${andList(freeIncludes)}. ${paidLine}, spent on any piece, model tokens included, and past it you pay as you go at the same list rates. ${enterpriseStart}. It gives resellers wholesale rates.`,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Pricing', path: '/pricing' },
    ],
  },
  line: 'Every piece an AI agent needs, at one list rate each, on one bill.',

  pill: 'Free plan, no credit card',
  headline: 'Start free. A paid plan covers a month of usage, on any piece.',
  sub: `${openLine} A paid plan’s fee covers a set amount of usage at list rates. Past it, you pay as you go at the same rates.`,

  trust: [
    'One list rate per piece, on every plan',
    'A monthly spend cap you set',
    'Change plans at any time',
    'Your own model key, no token charge',
  ],

  plans: {
    label: 'Plans',
    items: planCards,
    tag: 'Recommended',
    includes: 'What’s included',
    covers: { before: 'covers', after: 'of usage' },
    extra: {
      line: `What a plan covers resets each month and doesn’t carry over. Model tokens count toward it like any piece, at ${tokenRates}.`,
      link: { label: 'See every rate', to: RATES },
    },
    texting: `${register.name}: ${registration.once} once to file each campaign, then ${registration.monthly} a month while it’s active. No plan includes it.`,
  },

  jobs: {
    heading: 'What a blueprint costs in a typical month.',
    line: 'A blueprint’s runs use the pieces at list rates, so its month counts toward your plan like any usage. One blueprint of each type, from a single team to a whole network.',
    picks: ['missed-call-text-back', 'mystery-shopper', 'inbox-agent', 'invoice-collector', 'competitor-tracking', 'nightly-agent-evaluation', 'travel-booking-agent'],
    per: 'a month',
    featured: 'A typical month',
    range: 'Small, typical and large months',
    more: {
      heading: 'Every blueprint, priced the same way.',
      line: (n) => `${n} blueprints across 7 types, each page with its free run and 3 typical months.`,
      link: { label: 'Browse blueprints', to: '/blueprints' },
    },
  },

  calc: {
    heading: 'What each plan gets you.',
    line: `${extraLine ? `${extraLine} of usage at list rates. ` : ''}Turn on what your agents use to see your month on each plan.`,
    pieces: calcPieces,
    less: (many) => `Fewer ${many}`,
    more: (many) => `More ${many}`,
    summary: {
      best: 'Your best plan',
      month: 'a month',
      plan: (name) => `${name} plan`,
      at: (n, rate) => `${n} at ${rate}`,
      allowance: (n) => `${n} in ${named('free')}`,
      free: 'Included',
      covered: 'Covered by your plan',
      coveredSub: (plan, covers) => `${plan} covers up to ${covers} of usage`,
      unused: (left, plan) => `${left} of what ${plan} covers is left this month. It doesn’t carry over.`,
      each: 'Your month on each plan',
      eachCovers: (covers) => `covers ${covers}`,
      eachFree: 'free allowances',
      over: 'Past its allowances',
      rows: 'Your month, line by line',
      rest: `WhatsApp messages and the ${registration.once} filing of each new US texting campaign count toward what your plan covers, at their own rates.`,
      cta: { label: 'Start free', to: JOIN },
      secondary: { label: `Talk to us about ${named('enterprise')}`, to: JOIN },
      announce: (plan, total) => `${plan}, ${total} a month.`,
    },
  },

  faq: {
    heading: 'Questions about plans and bills.',
    items: [
      {
        q: 'How does a plan’s monthly usage work?',
        a: `The fee covers a set amount of usage each month at list rates, on any piece: ${extraLine}. On ${ex.plan}, use ${cash(ex.low.used)} and you pay ${cash(ex.low.bill)}. Use ${cash(ex.high.used)} and you pay ${cash(ex.high.bill)}: ${dollars(ex.fee)}, plus ${cash(ex.high.payg)} at list rates for the part past ${dollars(ex.covers)}. Model tokens count toward it like any piece. What isn’t used resets each month.`,
      },
      {
        q: 'Can I use just one piece?',
        a: 'Yes. Each piece works on its own with the same API key, on the same plan and bill.',
      },
      {
        q: 'What happens when I use more than my plan covers?',
        a: `You pay as you go at the same list rates, such as ${email.amount} ${email.unit}. Nothing stops, and you never need ${named('enterprise')} to grow.`,
        link: { label: 'See every rate', to: RATES },
      },
      {
        q: 'Can I cap what I spend?',
        a: 'Yes. Set a monthly spend cap. When the bill reaches it, billable work stops until you raise it or the month ends.',
      },
      {
        q: `When does ${named('scale')} cost less than ${named('startup')}?`,
        a: `Once your usage passes ${dollars(scaleFrom)} a month at list rates. ${coversWords(startup)} and ${coversWords(scale)}, model tokens included.`,
      },
      {
        q: `What happens when ${named('free')} runs out?`,
        a: `That piece pauses until next month, or until you upgrade. Messages to ${named('free')}’s number still arrive and are kept. ${named('free')} needs no card and never bills you.`,
      },
      {
        q: 'Can I change plans?',
        a: 'Yes, at any time. The new plan applies from that day.',
      },
      {
        q: 'What does a blueprint cost?',
        a: `Its runs count toward what your plan covers at list rates, model tokens included, then as you go. Each blueprint’s page shows what a typical month costs, and you can try any blueprint on the Free plan.`,
        link: { label: 'See the mystery shopping blueprint', to: '/blueprints/mystery-shopper' },
      },
      {
        q: 'What does a persona cost?',
        a: `${personaLine} A persona costs nothing while it waits.`,
      },
      {
        q: 'Can my agent send texts on every plan?',
        a: `No. ${named('free')}’s number only receives, up to ${freeIn} a month. Sending texts and calling need a paid plan. US texting also needs the carriers’ registration: ${registration.once} once for each campaign, then ${registration.monthly} a month, on every plan. No plan includes it.`,
        link: { label: 'See the phone rates', to: `${RATES}#phone` },
      },
      {
        q: `What’s in ${named('enterprise')}?`,
        a: `White label for companies that resell Obsession: your brand on every dashboard and report, an account per client, and wholesale rates that drop as your volume grows. ${enterpriseStart}. ${enterpriseYearly}`.trim(),
      },
      {
        q: 'Where is my data kept, and who handles it?',
        a: 'Encrypted in the EU: in Postgres in Ireland, and in Cloudflare R2 for files such as screenshots. Only the 2 founders can reach it. The security page names every supplier and how long we keep your data.',
        link: { label: 'Read about security', to: '/security' },
      },
    ],
  },

  final: {
    heading: 'Your agent’s first inbox is free.',
    line: `Start on ${named('free')}, with no credit card. Pick a plan when your agents need more.`,
    cta: { label: 'Start free', to: JOIN },
    secondary: { label: 'See every rate', to: RATES },
  },
}

/* ---- /pricing/rates: every rate, grouped by piece ---- */

/* A piece's group: its name, 1 line, the link to its own page, and its prices in prices.ts order. */
export type PriceGroup = { piece: PieceId; name: string; line: string; link: Cta; keys: PriceKey[] }

const groupWords: Record<PieceId, { name: string; line: string; link: string }> = {
  email: { name: 'Email', line: 'Inboxes your agents send and receive from.', link: 'How Email works' },
  phone: { name: 'Phone', line: 'Numbers your agents text and call from.', link: 'How Phone works' },
  messaging: { name: 'Messaging', line: 'iMessage, WhatsApp, Slack and Telegram.', link: 'How Messaging works' },
  browser: { name: 'Browser', line: 'A cloud browser with a home connection.', link: 'How Browser works' },
  sandbox: { name: 'Sandbox', line: 'A computer to run code, started only when needed.', link: 'How Sandbox works' },
  personas: { name: `Personas and the ${EVENT_LOG.lower}`, line: `The pieces under one identity, and every event they see.`, link: 'How Personas work' },
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
  /* The list has no visible heading of its own: the hero above is its claim. One price list, so no plan toggle
     (founders, 22 Nov 2026). */
  list: {
    label: string
    groups: PriceGroup[]
  }
  faq: Faq
  final: { heading: string; line: string; cta: Cta; secondary: Cta }
}

const ratesOpen = 'These are the rates Obsession bills for each piece an AI agent uses.'

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

  pill: 'Free plan, no credit card',
  headline: 'One list rate per piece, on every plan.',
  sub: `${ratesOpen} In US dollars, on one bill. A paid plan’s fee covers a set amount of this usage each month.`,

  list: {
    label: 'Every rate, by piece',
    groups,
  },

  faq: {
    heading: 'Questions about rates.',
    items: [
      {
        q: 'Do the rates change with my plan?',
        a: `No. Every plan pays these list rates. What changes is how much usage the fee covers: ${andList(paid.map(coversWords))}. ${named('enterprise')} gets wholesale rates agreed with you.`,
      },
      {
        q: 'How is WhatsApp priced?',
        a: `At ${whatsapp.amount} ${whatsapp.unit}. ${whatsapp.note}`,
      },
      {
        q: 'Why does texting in the US cost a monthly fee?',
        a: `US carriers require every business that texts to register a campaign, and each one carries a monthly fee. Ours is ${registration.once} once to file it, then ${registration.monthly} a month while it’s active, on every plan, and we file it for you. ${named('free')}’s number sends no texts, so it needs none.`,
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
        a: `For ${eventLogKept} at no extra charge, and longer on ${named('enterprise')}. Writing them costs ${log.amount} ${log.unit}.`,
      },
      {
        q: 'How are model tokens billed?',
        a: `Per million tokens, like any piece: ${tokenRates}. Other models are priced at their own rates. They count toward what your plan covers, and with your own key there is no token charge.`,
      },
    ],
  },

  final: {
    heading: 'Turn these rates into a monthly bill.',
    line: 'The calculator on the pricing page prices your month on every plan and picks the cheapest.',
    cta: { label: 'See the plans', to: '/pricing#plans' },
    secondary: { label: 'Start free', to: JOIN },
  },
}
