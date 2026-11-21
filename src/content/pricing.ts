import { catalog } from './catalog'
import { pieceOrder, piecePaths } from './piecePaths'
import { prices, type PieceId, type PriceKey } from './prices'
import type { Cta, Faq, Meta } from './types'

/* /pricing (pages/Pricing.tsx): each piece an agent needs, priced on its own, on one bill (James, 21 Nov 2026). The
   hero with 3 of the prices; the full price list, grouped by piece in the nav's order, each group linking to its
   piece's page; the 3 ways to pay (Free, Pay as you go, Scale by contract); the estimator (a quantity per piece in, the
   month's total out, from each price's `value`); the questions; the closing call to early access on Home. Every price
   is read from prices.ts and never typed here. The free allowance below is ours, a proposal for the founders (21 Nov);
   its inboxes, like the event log's days, are read from the price's own note. This file is the page's words only,
   outside the Page glob. */

export type PlanId = 'free' | 'payg' | 'scale'

export type Plan = {
  id: PlanId
  name: string
  /* The card's big words and the line beside them: never a figure, since every figure is a piece's price. */
  price: string
  per: string
  line: string
  includes: string[]
  cta: Cta
  /* The plan the page lifts (Pay as you go): the raised card and the row's 1 primary button. */
  featured?: boolean
}

/* A piece's group in the price list: its name, 1 line, the link to its own page, and its prices in prices.ts order. */
export type PriceGroup = { piece: PieceId; name: string; line: string; link: Cta; keys: PriceKey[] }

/* A field in the estimator: the price it multiplies, its label and the quantity the server draws. `adds` is a monthly
   price that comes with any use of it (texting in the US needs the carriers' registration). */
export type EstimateInput = { key: PriceKey; label: string; start: number; adds?: PriceKey }

export type PricingPage = {
  meta: Meta
  /* 1 sentence for the share card. */
  line: string
  pill: string
  headline: string
  sub: string
  /* Under the hero: 3 of the prices, each its amount and unit. */
  facts: { value: string; label: string }[]
  list: { heading: string; line: string; groups: PriceGroup[] }
  plans: { heading: string; line: string; items: Plan[] }
  estimator: {
    heading: string
    line: string
    inputs: EstimateInput[]
    card: {
      title: string
      /* Under a line the free allowance covers part of. */
      free: (count: string) => string
      total: string
      rest: string
      cta: Cta
      secondary: Cta
      /* Read aloud once the inputs settle. */
      announce: (total: string) => string
    }
  }
  faq: Faq
  final: { heading: string; line: string; cta: Cta; secondary: Cta }
}

const JOIN = '/#join'
const TALK: Cta = { label: 'Talk to us', to: `mailto:${catalog.contact}` }
/* 1,000 with its comma, the same on the server and in every browser. */
export const figure = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
/* "a, b and c". */
const andList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`)
/* A price's words inside a sentence: "The first 3 inboxes are free." becomes "the first 3 inboxes are free". */
const clause = (s = '') => s.charAt(0).toLowerCase() + s.slice(1).replace(/\.$/, '')

/* The free allowance every account gets each month, before any price applies (a proposal for the founders, 21 Nov).
   The inboxes are the inbox price's own note, so a change in prices.ts reaches the page. */
const freeInboxes = Number(/\d+/.exec(prices.inbox.note)?.[0] ?? 0)
export const allowance: { key: PriceKey; count: number; words: string }[] = [
  { key: 'inbox', count: freeInboxes, words: 'inboxes' },
  { key: 'email', count: 3000, words: 'emails' },
  { key: 'browser', count: 10, words: 'browser hours' },
  { key: 'sandbox', count: 10, words: 'sandbox vCPU hours' },
  { key: 'log', count: 100000, words: 'logged events' },
]
const freeWords = andList(allowance.map((a) => `${figure(a.count)} ${a.words}`))
/* How long the event log is kept at no charge, from its price's note ("30 days"). */
const logDays = /\d+ days/.exec(prices.log.note)?.[0] ?? ''

/* Each piece's group in the price list, in the nav's order; its prices are every line of prices.ts for that piece. */
const groupWords: Record<PieceId, { name: string; line: string; link: string }> = {
  email: { name: 'Email', line: 'Inboxes your agents send and receive from, with threads, attachments and webhooks.', link: 'How Email works' },
  phone: { name: 'Phone', line: 'Phone numbers your agents text and call from.', link: 'How Phone works' },
  messaging: { name: 'Messaging', line: 'iMessage lines, WhatsApp, Slack and Telegram, on the same API.', link: 'How Messaging works' },
  browser: { name: 'Browser', line: 'A cloud browser with a home connection, whose sessions keep their logins.', link: 'How Browser works' },
  sandbox: { name: 'Sandbox', line: 'A computer to run code in, started only when a task needs it.', link: 'How Sandbox works' },
  personas: { name: 'Personas and event log', line: 'The pieces under one identity, with a dated log of every page, email, text and call.', link: 'How Personas work' },
}
const keys = Object.keys(prices) as PriceKey[]
const groups: PriceGroup[] = pieceOrder.map((piece) => ({
  piece,
  name: groupWords[piece].name,
  line: groupWords[piece].line,
  link: { label: groupWords[piece].link, to: piecePaths[piece] },
  keys: keys.filter((k) => prices[k].piece === piece),
}))

const { inbox, email, number, sms, whatsapp, browser, sandbox, persona, log, tokens } = prices

export const pricingPage: PricingPage = {
  meta: {
    path: '/pricing',
    title: 'Obsession pricing: agent email, phone, browser and sandbox',
    description:
      'Email, phone numbers, messaging, a cloud browser and a code sandbox for AI agents, each priced on its own, on one bill. Start free, then pay as you go.',
    answer: `Obsession prices each piece an AI agent needs on its own, on one bill. An inbox is ${inbox.amount} ${inbox.unit} (${clause(inbox.note)}), email is ${email.amount} ${email.unit}, a phone number is ${number.amount} ${number.unit}, texts are ${sms.amount} ${sms.unit}, a cloud browser is ${browser.amount} ${browser.unit} and a code sandbox is ${sandbox.amount} ${sandbox.unit}. Every account gets ${freeWords} free each month, pay as you go has no minimum, and Scale adds lower rates by contract.`,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Pricing', path: '/pricing' },
    ],
  },
  line: 'Every piece an AI agent needs, each priced on its own, on one bill.',

  pill: 'Early access pricing',
  headline: 'Each piece has its own price. Pay for what your agents use.',
  sub: 'Obsession prices each piece an AI agent needs on its own, on one bill: email, phone, messaging, a browser and a sandbox. There’s no plan to pick and no minimum: start free, then pay the list price as you go.',
  facts: [
    { value: inbox.amount, label: inbox.unit },
    { value: sms.amount, label: sms.unit },
    { value: browser.amount, label: browser.unit },
  ],

  list: {
    heading: 'Every line on your bill is a piece your agents used.',
    line: 'Prices are in US dollars. Use one piece or all of them, at the same rates.',
    groups,
  },

  plans: {
    heading: 'Every account starts free, with no credit card and no minimum.',
    line: 'Each month the free allowance comes off first. Past it, you pay the list prices with a spend cap you set, or sign for lower rates on Scale.',
    items: [
      {
        id: 'free',
        name: 'Free',
        price: 'No card',
        per: 'needed',
        line: 'For building and testing your first agent.',
        includes: [
          `${figure(freeInboxes)} inboxes`,
          ...allowance.filter((a) => a.key !== 'inbox').map((a) => `${figure(a.count)} ${a.words} a month`),
          `Event log kept for ${logDays}`,
          'The API, SDKs and MCP',
        ],
        cta: { label: 'Get early access', to: JOIN },
      },
      {
        id: 'payg',
        name: 'Pay as you go',
        price: 'List prices',
        per: 'past the free allowance',
        line: 'For agents in production, at any size.',
        includes: [
          'Every price in the list above',
          'The free allowance, every month',
          'A monthly spend cap you set',
          'No minimum and nothing to commit',
          `Event log at ${log.amount} ${log.unit}, kept for ${logDays}`,
          'Webhooks, the API, SDKs and MCP',
        ],
        cta: { label: 'Get early access', to: JOIN },
        featured: true,
      },
      {
        id: 'scale',
        name: 'Scale',
        price: 'Lower rates',
        per: 'by contract',
        line: 'For committed volume, and for products that give agents to their own users.',
        includes: [
          'Lower rates at committed volume',
          'An account for each of your users',
          'White label under your own brand',
          'A longer event log',
          'SSO',
          'Priority support',
        ],
        cta: TALK,
      },
    ],
  },

  estimator: {
    heading: 'See your monthly bill before you write a line of code.',
    line: 'Type what your agents will use in a month. The free allowance comes off first.',
    inputs: [
      { key: 'inbox', label: 'Inboxes', start: 10 },
      { key: 'email', label: 'Emails', start: 20000 },
      { key: 'number', label: 'Phone numbers', start: 2 },
      { key: 'sms', label: 'Texts', start: 1000, adds: 'register' },
      { key: 'voice', label: 'Call minutes', start: 500 },
      { key: 'browser', label: 'Browser hours', start: 50 },
      { key: 'sandbox', label: 'Sandbox vCPU hours', start: 40 },
      { key: 'log', label: 'Logged events', start: 200000 },
    ],
    card: {
      title: 'Your month',
      free: (count) => `First ${count} free`,
      total: 'A month',
      rest: 'Sandbox memory, stealth browser hours, iMessage lines, WhatsApp and model tokens add to this at the prices in the list.',
      cta: { label: 'Get early access', to: JOIN },
      secondary: { label: 'Talk to us about Scale', to: `mailto:${catalog.contact}` },
      announce: (total) => `${total} a month.`,
    },
  },

  faq: {
    heading: 'Questions about prices and bills.',
    items: [
      {
        q: 'Can I use just one piece?',
        a: 'Yes. Each piece works on its own with the same API key. Use only email, then add a phone number or a browser when your agent needs one, on the same bill.',
      },
      {
        q: 'What’s in the free allowance?',
        a: `Every account gets ${freeWords} free each month. Past that, each piece is billed at its list price, and the event log is kept for ${logDays} at no extra charge.`,
      },
      {
        q: 'How is WhatsApp priced?',
        a: `At ${whatsapp.amount} ${whatsapp.unit}. ${whatsapp.note} WhatsApp is for support, sales, bookings and notifications.`,
      },
      {
        q: 'What does a recipe cost?',
        a: 'A recipe is a whole job we run for you, such as a mystery shop. It’s billed on the pieces it uses, at these prices. A mystery shop uses a browser, an inbox and a phone number, so its bill shows the browser hours, emails and texts it used.',
        link: { label: 'See the mystery shopper recipe', to: '/recipes/mystery-shopper' },
      },
      {
        q: 'Does a persona cost anything while it waits?',
        a: `No. A persona is ${clause(persona.amount)} ${persona.unit}: ${clause(persona.note)}. It answers a new message in about 50 ms without starting a machine, so days of waiting for a reply add nothing beyond its inbox and number.`,
      },
      {
        q: 'How are model tokens billed?',
        a: `At ${clause(tokens.amount)}, ${tokens.unit}. With your own key, your model provider bills you and the tokens never reach your Obsession bill.`,
      },
      {
        q: 'Can I cap what I spend?',
        a: 'Yes. Set a monthly spend cap on your account. When the month’s bill reaches it, billable work stops until you raise the cap or the next month starts.',
      },
      {
        q: 'Do you discount volume?',
        a: 'Yes, on Scale. Commit to a monthly volume and each piece gets a lower rate. Scale also gives each of your users an account of their own, under your brand. Pay as you go is the list price at any size.',
      },
    ],
  },

  final: {
    heading: 'Your agent’s first inbox is free.',
    line: 'Request early access and start on the free allowance. Add a credit card when your agents need more.',
    cta: { label: 'Get early access', to: JOIN },
    secondary: { label: 'Talk to us about Scale', to: `mailto:${catalog.contact}` },
  },
}
