import { pieceOrder, piecePaths } from './piecePaths'
import { blueprintPlans, freeNumber, personaCostLine as personaLine, plans, prices, type PieceId, type PlanId, type PriceKey } from './prices'
import type { Cta, Faq, Meta } from './types'

/* The words of /pricing (pages/Pricing.tsx) and /pricing/rates (pages/PricingRates.tsx), outside the Page glob
   (James, 21 Nov 2026: plans first, each piece's rate only as extra usage, the long rate list on its own page).

   /pricing: the hero, the 4 plans as cards read from `plans` in prices.ts (each card's monthly price and included
   amounts come from there; who it's for, its gated features and its button are written here; Startup is the recommended
   plan and Enterprise leads with the reseller programme, James 21 Nov), the line that sends
   extra usage to the rates page, the calculator (a card per piece with an on/off switch, steppers and sliders; the
   summary picks the plan whose price plus extra usage costs least), the questions, the closing call.
   /pricing/rates: every rate grouped by piece, each group linking to its piece's page, then its own questions.

   Every price and included amount is read from prices.ts and never typed here: the founders may still change them.
   The stored history is "the event log" (James, 21 Nov); every word for it is in EVENT_LOG below, so a rename is 1 edit. */

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
/* "a, b and c". */
const andList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`)

/* What each counted price is a count of, as a reader names it. A price with no count here is a yes or no (the US
   texting registration): a plan includes it or doesn't. */
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
}
/* "1 phone number", "10 million events in your event log". */
const amountOf = (key: PriceKey, n: number) => `${quantity(n)} ${n === 1 ? counts[key]?.one : counts[key]?.many}`

const keys = Object.keys(prices) as PriceKey[]
const planOf = (id: PlanId) => plans.find((pl) => pl.id === id)
const named = (id: PlanId) => planOf(id)?.name ?? id
/* Free's number: what it receives a month, "50 texts and 30 call minutes" (prices.ts freeNumber). */
const freeIn = `${amountOf('sms', freeNumber.texts)} and ${amountOf('voice', freeNumber.minutes)}`
/* Words a plan adds after 1 of its lines (James, 21 Nov): Free's number only receives, up to freeNumber a month, and
   each paid plan's US texting registration covers its own kind of campaign, its filing included. */
const lineMore: Partial<Record<PlanId, Partial<Record<PriceKey, string>>>> = {
  free: { number: `that receives up to ${freeIn} a month` },
  developer: { register: 'for 1 low volume campaign, filing included' },
  startup: { register: 'for 1 standard campaign, filing included' },
}
/* A plan's included amounts, in prices.ts order; a yes or no price by its name. */
const includedOf = (id: PlanId) => {
  const included = planOf(id)?.included ?? {}
  return keys.flatMap((k) => {
    const n = included[k]
    if (!n) return []
    const line = counts[k] ? amountOf(k, n) : prices[k].name
    const more = lineMore[id]?.[k]
    return [more ? `${line} ${more}` : line]
  })
}
const priceWords = (id: PlanId) => {
  const monthly = planOf(id)?.monthly
  return monthly == null ? 'priced by contract' : `${dollars(monthly)} a month`
}
/* How long the event log keeps events at no charge, from its price's note ("30 days"). */
const keptFor = /\d+ days/.exec(prices.log.note)?.[0] ?? ''

const JOIN = '/#join'
const RATES = '/pricing/rates'

/* ---- /pricing: the plans ---- */

export type PlanCard = {
  id: PlanId
  name: string
  /* The big words and the line beside them: "$20" and "a month", or "Custom" and "by contract". */
  price: string
  per: string
  /* Who it's for, in 1 line. */
  for: string
  /* Each piece's included amount, from prices.ts; Enterprise has words instead. */
  includes: string[]
  /* What the plan opens up beyond the amounts. */
  features: string[]
  cta: Cta
  /* The plan the page lifts (Startup): the raised card, its tag and the row's 1 primary button. */
  featured?: boolean
}

type PlanWords = Pick<PlanCard, 'for' | 'features' | 'cta' | 'featured'> & { includes?: string[] }

const planWords: Record<PlanId, PlanWords> = {
  free: {
    for: 'For building and testing your first agent.',
    features: ['No credit card', 'The API, SDKs and MCP', `Events kept for ${keptFor} in your ${EVENT_LOG.lower}`],
    cta: { label: 'Start free', to: JOIN },
  },
  developer: {
    for: 'For your first agent in production.',
    features: [`Everything in ${named('free')}`, 'Use past the plan at each piece’s rate', 'A monthly spend cap you set'],
    cta: { label: 'Get early access', to: JOIN },
  },
  startup: {
    for: 'For a product whose agents work every day.',
    features: [`Everything in ${named('developer')}`, 'Seats for your whole team', 'Priority support'],
    cta: { label: 'Get early access', to: JOIN },
    featured: true,
  },
  /* The reseller programme first, large volume after it (James, 21 Nov). */
  enterprise: {
    for: 'For agencies and software companies that resell Obsession to their own clients.',
    includes: ['White label, with your brand in place of ours', 'An account for each client', 'Your brand on every report', 'Wholesale rates on every piece'],
    features: ['Contract pricing for large volume', `Events kept longer in your ${EVENT_LOG.lower}`, 'SSO and a support channel of your own'],
    cta: { label: 'Talk to us', to: JOIN },
  },
}

const planCards: PlanCard[] = plans.map((pl) => {
  const w = planWords[pl.id]
  return {
    id: pl.id,
    name: pl.name,
    price: pl.monthly == null ? 'Custom' : dollars(pl.monthly),
    per: pl.monthly == null ? 'by contract' : 'a month',
    for: w.for,
    includes: w.includes ?? includedOf(pl.id),
    features: w.features,
    cta: w.cta,
    featured: w.featured,
  }
})

/* ---- /pricing: the calculator ---- */

/* A quantity on a piece's card: the price it counts, its label, where it starts, the stepper's step, and, where the
   range is large, the slider's stops (the plans' own included amounts are added to them, so the slider lands on
   each plan's edge). `adds` is a monthly price that comes with any use of it (texting in the US needs the carriers'
   registration). */
export type CalcQuantity = { key: PriceKey; label: string; start: number; step: number; stops?: number[]; adds?: PriceKey }
/* A piece's card: its switch (name and line), whether it starts on, its quantities and a note under them. */
export type CalcPiece = { id: string; name: string; line: string; on: boolean; quantities: CalcQuantity[]; note?: string }

const { whatsapp, chat, register, email, inbox, sms, voice, number, browser, sandbox, log, tokens, persona } = prices

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
    id: 'phone',
    name: 'Phone',
    line: 'Numbers your agents text and call from.',
    on: true,
    quantities: [
      { key: 'number', label: 'Phone numbers', start: 2, step: 1 },
      { key: 'sms', label: 'Texts a month', start: 1000, step: 100, adds: 'register' },
      { key: 'voice', label: 'Call minutes a month', start: 200, step: 100 },
    ],
    /* Free includes no texts or minutes it can send, so any here takes the summary to a paid plan. */
    note: `${named('free')}’s number receives up to ${freeIn} a month. It sends no texts and makes no calls, so those need a paid plan.`,
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
    id: 'event log',
    name: EVENT_LOG.name,
    line: EVENT_LOG.line,
    on: false,
    quantities: [{ key: 'log', label: 'Events a month', start: 1000000, step: 100000, stops: [500000, 5000000, 25000000, 50000000] }],
  },
]

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
    /* The line under the cards: extra usage, and the link to every rate. */
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
      included: (n: string) => string
      split: (included: string, extra: string) => string
      extra: (n: string) => string
      free: string
      /* Under a yes or no line the plan includes (the US texting registration). */
      inPlan: string
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

/* A blueprint's own plans past its free run (prices.ts blueprintPlans): "$19, $49 or $99" and "monthly, weekly or daily". */
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)
const blueprintPaid = blueprintPlans.filter((bp) => bp.monthly > 0)
const blueprintCost = `${orList(blueprintPaid.map((bp) => dollars(bp.monthly)))} a month to run it ${orList(blueprintPaid.map((bp) => bp.name.toLowerCase()))}`

export const pricingPage: PricingPage = {
  meta: {
    path: '/pricing',
    title: 'Obsession pricing: plans for agent email, phone and browser',
    description: `${andList(plans.map((pl) => pl.name))} plans for AI agent email, phone numbers, messaging, a cloud browser and a code sandbox, all on one bill.`,
    answer: `${openLine} ${named('free')} costs nothing and includes ${andList(includedOf('free'))}. ${named('developer')} is ${priceWords('developer')}, ${named('startup')} is ${priceWords('startup')} and ${named('enterprise')} is ${priceWords('enterprise')}, with wholesale rates for resellers. Use past a plan is billed at each piece’s rate, such as ${email.amount} ${email.unit}.`,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Pricing', path: '/pricing' },
    ],
  },
  line: 'Every piece an AI agent needs, on one plan and one bill.',

  pill: 'Early access pricing',
  headline: 'Start free. One plan covers every piece your agents use.',
  sub: `${openLine} Each plan includes an amount of every piece, and you pay a piece’s own rate only past it.`,

  plans: {
    label: 'Plans',
    items: planCards,
    tag: 'Recommended',
    includes: 'Each month',
    features: 'Also',
    extra: {
      line: 'Past what a paid plan includes, each piece is billed at its own rate, on the same bill.',
      link: { label: 'See every rate', to: RATES },
    },
  },

  calc: {
    heading: 'See which plan fits before you write a line of code.',
    line: 'Turn on the pieces your agents use and set how much. The summary picks the plan that costs you least.',
    pieces: calcPieces,
    less: (many) => `Fewer ${many}`,
    more: (many) => `More ${many}`,
    summary: {
      best: 'Your best plan',
      month: 'a month',
      plan: (name) => `${name} plan`,
      included: (n) => `${n} included`,
      split: (included, extra) => `${included} included, ${extra} extra`,
      extra: (n) => `${n} extra`,
      free: 'Included',
      inPlan: 'Filing and monthly fee in the plan',
      rows: 'Your month, line by line',
      rest: 'WhatsApp messages and model tokens add to this at their own rates.',
      cta: { label: 'Get early access', to: JOIN },
      secondary: { label: `Talk to us about ${named('enterprise')}`, to: JOIN },
      announce: (plan, total) => `${plan}, ${total} a month.`,
    },
  },

  faq: {
    heading: 'Questions about plans and bills.',
    items: [
      {
        q: 'Can I use just one piece?',
        a: 'Yes. Each piece works on its own with the same API key. Use only email, then add a phone number or a browser when your agent needs one, on the same plan and the same bill.',
      },
      {
        q: 'What happens when I use more than my plan includes?',
        a: 'Each piece past its amount is billed at its own rate, on the same bill. Nothing stops, and a monthly spend cap you set keeps the bill where you want it.',
        link: { label: 'See every rate', to: RATES },
      },
      {
        q: `What happens when ${named('free')} runs out?`,
        a: `That piece pauses until the next month, or until you pick a paid plan. On ${named('free')}’s number, messages past ${freeIn} a month still arrive and are kept, but your agent isn’t woken until you upgrade. ${named('free')} needs no credit card, so it never bills you.`,
      },
      {
        q: 'Can I change plans?',
        a: 'Yes, at any time from your account. The new plan’s amounts apply from the day you change.',
      },
      {
        q: 'What does a blueprint cost?',
        a: `A blueprint is a job that runs on Obsession, one of ours or one you write. Each blueprint has its own plans, priced for each site, store or agent it checks. The first run is free. After that, it’s ${blueprintCost}. Developers who run a blueprint from their own code through the API pay for the pieces it uses, under their plan.`,
        link: { label: 'See the mystery shopper blueprint', to: '/blueprints/mystery-shopper' },
      },
      {
        q: 'What does a persona cost?',
        a: `${personaLine} That’s each piece at its own rate, and a plan’s included amounts cover them first. The persona itself is ${persona.amount.toLowerCase()} ${persona.unit}. ${persona.note} It answers a new message in about 50 ms without starting a machine, so days of waiting for a reply add nothing.`,
      },
      {
        q: 'Can my agent send texts on every plan?',
        a: `No. ${named('free')}’s number receives texts and calls, such as login codes, up to ${freeIn} a month. It sends no texts and makes no calls. Past those amounts, messages still arrive and are kept, but your agent isn’t woken until you upgrade. To send texts or call out, pick ${named('developer')} or ${named('startup')}. Texting from a US number needs the carriers’ registration, and both plans include your first campaign’s filing and monthly fee. ${named('developer')} covers 1 low volume campaign, the carriers’ tier for small senders. ${named('startup')} covers 1 standard campaign, which can send more. Each extra campaign is ${register.amount} ${register.unit}.`,
        link: { label: 'See the phone rates', to: `${RATES}#phone` },
      },
      {
        q: `What’s in ${named('enterprise')}?`,
        a: `${named('enterprise')} is for companies that resell Obsession to their own clients. Your clients see your brand and never ours, on every dashboard and report. Each client gets its own account, and you pay wholesale rates on every piece. ${named('enterprise')} also covers large volume at contract prices, events kept longer in your ${EVENT_LOG.lower}, SSO and a support channel of your own. Talk to us and we’ll price it on your volume.`,
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
  list: { label: string; groups: PriceGroup[] }
  faq: Faq
  final: { heading: string; line: string; cta: Cta; secondary: Cta }
}

const ratesOpen = 'These are the rates Obsession bills for each piece an AI agent uses past what its plan includes.'

export const ratesPage: RatesPage = {
  meta: {
    path: RATES,
    title: 'Obsession rates: agent email, phone, browser, sandbox prices',
    description:
      'Every Obsession rate, piece by piece: inboxes, emails, phone numbers, texts, calls, iMessage, WhatsApp, browser hours, sandbox time and event log events.',
    answer: `${ratesOpen} ${[inbox, email, number, sms, voice, browser, sandbox, log].map((x) => `${x.name}: ${x.amount} ${x.unit}.`).join(' ')}`,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Every rate', path: RATES },
    ],
  },
  line: 'Every rate Obsession bills, piece by piece, in US dollars.',

  pill: 'Early access pricing',
  headline: 'Past your plan, each piece has one rate.',
  sub: `${ratesOpen} Prices are in US dollars, and every piece is on the same bill.`,

  list: { label: 'Every rate, by piece', groups },

  faq: {
    heading: 'Questions about rates.',
    items: [
      {
        q: 'Do the rates change with my plan?',
        a: `No. ${named('developer')} and ${named('startup')} bill the same rates past what they include. ${named('enterprise')} gets wholesale rates, set by contract.`,
      },
      {
        q: 'How is WhatsApp priced?',
        a: `At ${whatsapp.amount} ${whatsapp.unit}. ${whatsapp.note} WhatsApp is for support, sales, bookings and notifications.`,
      },
      {
        q: 'Why does texting in the US cost a monthly fee?',
        a: `US carriers ask every business that texts to register its use, and each registration, called a campaign, carries a monthly fee. ${named('developer')} and ${named('startup')} include your first campaign’s filing and monthly fee. ${named('developer')} covers 1 low volume campaign, the carriers’ tier for small senders. ${named('startup')} covers 1 standard campaign, which can send more. Each extra campaign is ${register.amount} ${register.unit}, and we file every one for you. ${named('free')}’s number sends no texts, so it needs no registration.`,
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
        a: `Every event stays in your ${EVENT_LOG.lower} for ${keptFor} at no extra charge, and longer on ${named('enterprise')}. Storing them is ${log.amount} ${log.unit}.`,
      },
      {
        q: 'How are model tokens billed?',
        a: `At ${tokens.amount.toLowerCase()}, ${tokens.unit}. With your own key, your model provider bills you and the tokens never reach your Obsession bill.`,
      },
    ],
  },

  final: {
    heading: 'A plan includes an amount of every piece.',
    line: 'Pick the plan that fits your agents, and these rates apply only past it.',
    cta: { label: 'See the plans', to: '/pricing#plans' },
    secondary: { label: 'Get early access', to: JOIN },
  },
}
