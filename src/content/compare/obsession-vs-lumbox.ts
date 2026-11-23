import { plans, prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-lumbox (24 Nov 2026, agent-business plan, _research/seo/agent-business-24nov/PLAN.md). Lumbox's
   facts: lumbox.co home and pricing pages, read 24 Nov 2026. The angle: Lumbox is inbox-first with sign-in handling and
   works with outside browsers; Obsession puts inbox, number, browser and sandbox under one persona with one event log.
   Obsession's prices come from prices.ts. */

const LB = 'https://lumbox.co'
const LB_PRICING = 'https://lumbox.co/pricing'

const freePlan = plans.find((p) => p.id === 'free') ?? plans[0]
const freeInboxes = freePlan.allowances.inbox ?? 0

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Lumbox',
  company: 'Lumbox',
  line: 'Lumbox gives an AI agent an inbox and sign-in handling. Obsession adds a phone number, browser and sandbox under one persona.',
  meta: {
    path: '/compare/obsession-vs-lumbox',
    title: 'Obsession vs Lumbox (2026): inbox, sign-in and phone',
    description: `Lumbox vs Obsession: both give an AI agent an inbox that reads sign-in codes. Obsession adds a number, browser and sandbox on one bill. Inbox ${prices.inbox.amount} a month.`,
    answer: `Lumbox and Obsession both give an AI agent its own inbox, with sign-in codes and links read out for it, webhooks and MCP. Lumbox adds a credentials vault and works with outside browsers. Obsession adds a phone number, messaging, its own cloud browser and a sandbox under one persona, with one event log and one bill. Its inbox is ${prices.inbox.amount} a month.`,
    ogImage: '/og/compare-obsession-vs-lumbox.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Lumbox', path: '/compare/obsession-vs-lumbox' },
    ],
  },
  title: 'Obsession vs Lumbox: an inbox that signs in, or the whole agent',
  dek: 'Lumbox is an inbox for AI agents that handles codes and sign-in links. Obsession gives the agent that inbox, then its own phone number, browser and sandbox, on one key and one bill.',
  primaryKeyword: 'lumbox vs obsession',
  keywords: ['lumbox alternative', 'lumbox pricing', 'lumbox phone numbers', 'lumbox vs agentmail'],
  checked: '2026-11-24',
  readingMinutes: 5,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'One AI agent’s pieces',
    period: 'From Lumbox’s own pages, read 24 Nov 2026',
    cols: ['Piece', 'Lumbox', 'Obsession'],
    rows: [
      { name: 'Email inbox', cells: ['3 free, then $9, $29 or $99 a month', `${freeInboxes} free, then ${prices.inbox.amount} a month`], tone: 'info' },
      { name: 'Sign-in codes and links', cells: ['Returned as JSON', 'Read out of each email and text'], tone: 'info' },
      { name: 'Phone number and texts', cells: ['Early access; texts forwarded from your phone', `${prices.number.amount} a number a month`], tone: 'info' },
      { name: 'Cloud browser', cells: ['Works with Browserbase, Skyvern and others', `${prices.browser.amount} a browser hour`], tone: 'info' },
      { name: 'Sandbox to run code', cells: ['Not on its pages', `${prices.sandbox.amount} an active vCPU hour`], tone: 'ok' },
      { name: 'One identity for all of it', cells: ['Not on its pages', 'A persona, free while it waits'], tone: 'ok' },
    ],
    notes: ['Not on its pages means Lumbox’s pages don’t describe it.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-lumbox-does', text: 'What Lumbox does well' },
    {
      kind: 'p',
      text: `As listed on 24 November 2026, [Lumbox](${LB}) gives an AI agent “a real address on trylumbox.com or your own domain”. Incoming mail is parsed to JSON and threaded, and sending sets up DKIM, SPF and DMARC for you. Codes, magic links and verification links come back as JSON, so an agent can finish a sign-in itself, and a vault holds passwords and 2FA secrets.`,
    },
    {
      kind: 'p',
      text: 'Webhooks fire on new mail, replies, clicks, drafts and escalations. It lists 104 MCP tools for Claude Code and Cursor, SDKs for Node and Python, and plain REST. It names Browserbase, Skyvern, Browser Use, LangChain and the OpenAI Agents SDK as tools it works with. Dedicated agent phone numbers are in early access; today you can forward texts from your own phone into an inbox.',
    },
    {
      kind: 'p',
      text: `On [its pricing page](${LB_PRICING}), as listed on 24 November 2026, Free is $0 for 3 inboxes and 500 emails received a month. Starter is $9 a month for 10 inboxes, Pro $29 for 50 and Scale $99 for 250. Enterprise is priced on request.`,
    },

    { kind: 'h2', id: 'what-obsession-gives', text: 'What Obsession gives the same agent' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `The inbox does the same job. obsession.inboxes.create() returns an address that sends and receives, keeps threads and attachments, and can send from your own domain. Codes and confirm links are read out of each email, and every new one reaches your webhook as email.received. Free includes ${freeInboxes} inboxes. After that an inbox is ${prices.inbox.amount} a month, and emails are ${prices.email.amount} ${prices.email.unit}.`,
    },
    {
      kind: 'p',
      text: `What sits beside it is the difference. A number is ${prices.number.amount} a month, with text codes reaching your webhook as sms.received. The browser is Obsession’s own, at ${prices.browser.amount} a browser hour, and it stays signed in. A sandbox runs the files the agent receives. Messaging adds iMessage, WhatsApp, Slack and Telegram.`,
    },

    { kind: 'h2', id: 'side-by-side', text: 'Lumbox and Obsession side by side', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `Lumbox’s row is from [its pages](${LB}) and [its pricing page](${LB_PRICING}), read 24 November 2026. Obsession’s row is from [pricing](/pricing).`,
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Lumbox: inboxes, sign-in handling, vault, MCP',
          'An inbox that returns codes and links as JSON, a credentials vault and webhooks, beside the browser tool you already use',
          'Free: 3 inboxes\nStarter $9 a month\nPro $29\nScale $99',
          'Its pages list phone numbers as early access, and don’t describe a browser or sandbox of its own',
          'Agents that sign in through a browser tool you already run',
        ],
        [
          'Obsession (ours): Email, Phone, Messaging, Browser, Sandbox, Personas',
          'Inboxes, plus a number, messaging, a browser and a sandbox under one identity',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops at any identity check, and before payment without your own payment card',
          'Agents that email, text, browse and run code',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use each' },
    {
      kind: 'list',
      items: [
        '**Use Lumbox** when your agents already run in a browser tool such as Browserbase or Skyvern and mainly need an inbox that hands back codes, with a vault for passwords.',
        '**Use Obsession** when an agent also needs its own phone number, a browser that stays signed in, or a sandbox. One key, one webhook and one bill cover every piece, and teammates who don’t code can run a blueprint.',
        '**Move one piece at a time.** Start with the inbox, and add the number or browser the day a site asks for a text code or a login.',
      ],
    },

    { kind: 'h2', id: 'one-identity', text: 'The inbox, number and browser under one name' },
    {
      kind: 'p',
      text: 'obsession.personas.create({ inbox: true, phone: "US", browser: true }) gives one agent all three. A persona is an AI agent with its own inbox, number and browser under one name. It signs up in the browser, reads the email code, then the text code, and is still signed in next week.',
    },
    {
      kind: 'p',
      text: `A persona costs nothing while it waits. Every email, text, call and page it sees goes into one [event log](/personas), dated, at ${prices.log.amount} ${prices.log.unit}, so you can see which code arrived where.`,
    },
    {
      kind: 'note',
      title: 'What every Obsession agent keeps to',
      text: 'It says it’s an AI when it talks to a person. It stops before payment unless given the customer’s own payment card, and never uses fake payment details. It never gets round a CAPTCHA or a bot block, stops at any identity check and never clicks paid ads at volume. The full lines are on [the page for companies an agent visits](/agents).',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'Is Obsession a Lumbox alternative?',
          a: 'For an inbox that reads sign-in codes, yes. Both give an AI agent its own inbox with webhooks and MCP. Obsession also gives the same agent a phone number, messaging, a browser and a sandbox on one key.',
        },
        {
          q: 'Does Lumbox have phone numbers?',
          a: 'Its pages list dedicated agent numbers as early access and describe forwarding texts from your own phone into an inbox, as read on 24 November 2026. On Obsession, a US or UK number for texts and calls sits beside the inbox.',
          link: { label: 'See the phone piece', to: '/phone' },
        },
        {
          q: 'How much does each cost?',
          a: `Lumbox lists Free for 3 inboxes, then Starter at $9, Pro at $29 and Scale at $99 a month, read on 24 November 2026. Obsession is free to start, then $20, $99 or $499 a month. Its inbox is ${prices.inbox.amount} a month, and emails are ${prices.email.amount} per 1,000.`,
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'Can I use Lumbox and Obsession together?',
          a: 'Yes. Keep Lumbox for email, and give the same agent an Obsession number and browser. Moving the inbox too puts every email, text and page on one webhook and one bill.',
        },
      ],
    },
  ],
  sources: [
    { title: 'Lumbox: inboxes for AI agents', publisher: 'Lumbox', url: LB },
    { title: 'Pricing', publisher: 'Lumbox', url: LB_PRICING },
  ],
  related: ['/email', '/phone', '/browser', '/personas', '/developers', '/compare/obsession-vs-agentmail', '/compare/obsession-vs-lupin', '/alternatives/agentmail', '/agents'],
}
