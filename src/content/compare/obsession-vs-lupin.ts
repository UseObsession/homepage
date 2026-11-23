import { prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-lupin (new, 23 Nov 2026, AI visibility wave). Lupin's facts: lupin.sh, read 23 Nov 2026.
   The angle: both bundle inbox, phone, browser and sandbox for an agent through one API; Obsession adds personas as the
   unit, the event log, blueprints for teams who don't code, and one bill. Obsession's prices come from prices.ts. */

const LP = 'https://lupin.sh'
const LP_DOCS = 'https://docs.lupin.sh'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Lupin',
  company: 'Lupin',
  line: 'Lupin gives an AI agent an inbox, phone, browser, containers and proxies on one API. Obsession covers the same ground with personas, an event log and blueprints.',
  meta: {
    path: '/compare/obsession-vs-lupin',
    title: 'Obsession vs Lupin (2026): one API for agent identity',
    description: `Lupin vs Obsession: both give an AI agent an inbox, phone, browser and sandbox on one API. Obsession adds blueprints and an event log. Inbox ${prices.inbox.amount} a month.`,
    answer: `Lupin and Obsession both give an AI agent an inbox, a phone number, a browser and a sandbox through one API, under one identity. Lupin adds proxies and app connections. Obsession adds blueprints for teams who don't write code, one event log of everything the agent did, and one bill. Its inbox is ${prices.inbox.amount} a month.`,
    ogImage: '/og/compare-obsession-vs-lupin.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Lupin', path: '/compare/obsession-vs-lupin' },
    ],
  },
  title: 'Obsession vs Lupin: one API for an agent’s inbox, phone and browser',
  dek: 'Lupin and Obsession both bundle an agent’s inbox, phone number, browser and sandbox. Here is what each page shows, and where the two differ.',
  primaryKeyword: 'lupin vs obsession',
  keywords: ['lupin.sh alternative', 'lupin alternative', 'lupin agent identity', 'lupin.sh pricing'],
  checked: '2026-11-23',
  readingMinutes: 5,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'One AI agent’s pieces',
    period: 'From Lupin’s own page, read 23 Nov 2026',
    cols: ['Piece', 'Lupin', 'Obsession'],
    rows: [
      { name: 'Email inbox', cells: ['Inboxes, drafts, scheduled sends, webhooks', `${prices.inbox.amount} a month`], tone: 'info' },
      { name: 'Phone number and texts', cells: ['Number search, SMS, calls, transcripts', `${prices.number.amount} a number a month`], tone: 'info' },
      { name: 'Cloud browser', cells: ['Isolated sessions, Live View', `${prices.browser.amount} a browser hour`], tone: 'info' },
      { name: 'Sandbox to run code', cells: ['Hosted containers', `${prices.sandbox.amount} an active vCPU hour`], tone: 'info' },
      { name: 'iMessage, WhatsApp, Slack, Telegram', cells: ['Not on its page', 'On the same key'], tone: 'ok' },
      { name: 'Proxies', cells: ['Proxy users, HTTP and SOCKS5', 'A home internet connection for the browser'], tone: 'info' },
      { name: 'Blueprints for teams who don’t code', cells: ['Not on its page', 'Ready-made jobs to run'], tone: 'ok' },
      { name: 'One event log', cells: ['Not on its page', `Every email, text, call and page, ${prices.log.amount} ${prices.log.unit}`], tone: 'ok' },
    ],
    notes: ['Not on its page means Lupin’s page doesn’t describe it. Its docs may.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-lupin-does', text: 'What Lupin does well' },
    {
      kind: 'p',
      text: `As listed on 23 November 2026, [Lupin](${LP}) describes an agent identity as the email, phone, browser, compute, proxy and app connections an agent uses to act, bundled with permissions you control. Its API covers inboxes, phone numbers and calls, browser sessions, containers, proxies and app connections, with an OpenAPI spec, an MCP endpoint and [docs](${LP_DOCS}).`,
    },
    {
      kind: 'p',
      text: 'Email includes drafts, scheduled sends and events by webhook or WebSocket. Browsers give Live View and Chrome DevTools access. Proxies and app connections are on its page; virtual cards are listed as planned. API keys can be scoped to a project or an inbox.',
    },
    {
      kind: 'p',
      text: `Its plans, as shown on 23 November 2026: Free is $0 with 3 inboxes and 30 browser minutes. Developer is $20 a month, Growth $79, Startup $200 and Enterprise is custom. Phone and proxy traffic are priced separately, and its page gives no rates for them.`,
    },

    { kind: 'h2', id: 'what-obsession-gives', text: 'What Obsession gives the same agent' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `The pieces overlap closely. An inbox is ${prices.inbox.amount} a month, a number is ${prices.number.amount} a month, a browser is ${prices.browser.amount} a browser hour and a sandbox is ${prices.sandbox.amount} an active vCPU hour. Messaging adds iMessage, WhatsApp, Slack and Telegram.`,
    },

    { kind: 'h2', id: 'side-by-side', text: 'Lupin and Obsession side by side', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `Lupin’s row is from [its page](${LP}), read 23 November 2026. Obsession’s row is from [pricing](/pricing).`,
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Lupin: Email, Phone, Browsers, Sandboxes, Proxies, Connections',
          'One API and one identity for an agent’s inbox, phone, browser, containers, proxies and app connections',
          'Free $0\nDeveloper $20 a month\nGrowth $79\nStartup $200\nPhone and proxy rates not listed',
          'Its page doesn’t describe messaging apps, blueprints or a single event log',
          'Developers who want proxies and app connections on the same API',
        ],
        [
          'Obsession (ours): Email, Phone, Messaging, Browser, Sandbox, Personas',
          'The same pieces under one persona, with one event log, webhooks and blueprints',
          'Free to start, then by plan; usage per piece',
          'Stops at any identity check, and before payment without your own payment card; no proxies',
          'Developers and teams who don’t code',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use each' },
    {
      kind: 'list',
      items: [
        '**Use Lupin** when your agent needs proxies or app connections on the same API as its inbox and browser.',
        '**Use Obsession** when you want every email, text, call and page an agent sees in one event log, or when teammates who don’t write code need a ready-made job to run.',
        '**Compare the bill.** Both bundle the pieces. Check what each charges for phone and browser time against your own volume.',
      ],
    },

    { kind: 'h2', id: 'one-identity', text: 'Personas, the event log and blueprints' },
    {
      kind: 'p',
      text: 'obsession.personas.create({ inbox: true, phone: "US", browser: true }) gives one agent all three. A persona is an AI agent with its own inbox, number and browser under one name. It signs up in the browser, reads the email code, then the text code, and is still signed in next week.',
    },
    {
      kind: 'p',
      text: `Every email, text, call and page it sees goes into one [event log](/personas), dated, at ${prices.log.amount} ${prices.log.unit}. [Blueprints](/blueprints) are ready-made jobs, so a team that doesn’t write code can run one.`,
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
          q: 'Is Obsession a Lupin alternative?',
          a: 'For giving an agent an inbox, a phone number, a browser and a sandbox on one API, yes. Obsession adds messaging apps, one event log and blueprints, and has no proxies.',
        },
        {
          q: 'Does Lupin have an event log?',
          a: 'Its page mentions webhooks and WebSockets for email events and says phone and browser operations can be inspected. It doesn’t describe one log, as read on 23 November 2026. Obsession keeps one event log of everything a persona does.',
          link: { label: 'See personas', to: '/personas' },
        },
        {
          q: 'How much does each cost?',
          a: `Lupin lists Free at $0, Developer at $20 a month, Growth at $79 and Startup at $200, read on 23 November 2026, with phone and proxy traffic priced separately. Obsession is free to start. Its inbox is ${prices.inbox.amount} a month and a number is ${prices.number.amount}.`,
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'Can I use both?',
          a: 'Yes. Some teams keep one for proxies and move inboxes, numbers and browsers to the other. Using one for all of it puts every event in one place and one bill.',
        },
      ],
    },
  ],
  sources: [
    { title: 'Lupin: identity for AI agents', publisher: 'Lupin', url: LP },
    { title: 'Lupin documentation', publisher: 'Lupin', url: LP_DOCS },
  ],
  related: ['/email', '/phone', '/browser', '/sandbox', '/personas', '/developers', '/compare/obsession-vs-agentmail', '/compare/obsession-vs-e2b', '/agents'],
}
