import { prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-agentmail (new, 22 Nov 2026, wave 1 of the search migration). AgentMail's facts: its home page
   and blog as read for _research/commercial-view-21nov/research/A_identity_messaging.json (21 Nov 2026), its pricing
   page re-read 22 Nov 2026. The angle: the email piece against theirs, then the number, browser and sandbox on the same
   key and bill. Obsession's prices come from prices.ts. */

const AM = 'https://www.agentmail.to/'
const AM_PRICING = 'https://www.agentmail.to/pricing'
const AM_BROWSER_USE = 'https://www.agentmail.to/blog/how-browser-use-gives-every-browser-agent-its-own-inbox'
const AM_LANESURF = 'https://www.agentmail.to/blog/how-lanesurf-keeps-freight-moving-with-agent-email'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs AgentMail',
  company: 'AgentMail',
  line: 'AgentMail gives AI agents email inboxes. Obsession gives them inboxes, phone numbers, browsers and sandboxes on one key.',
  meta: {
    path: '/compare/obsession-vs-agentmail',
    title: 'Obsession vs AgentMail (2026): an inbox or the whole agent',
    description: `Obsession vs AgentMail: both give AI agents inboxes by API. An Obsession inbox is ${prices.inbox.amount} a month, with a number, browser and sandbox on one key.`,
    answer: `AgentMail and Obsession both give AI agents their own email inboxes through an API, with webhooks and an MCP server. AgentMail is built for email alone. Obsession adds a phone number, messaging, a cloud browser and a sandbox on the same key and bill. Its inbox is ${prices.inbox.amount} a month.`,
    ogImage: '/og/compare-obsession-vs-agentmail.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs AgentMail', path: '/compare/obsession-vs-agentmail' },
    ],
  },
  title: 'Obsession vs AgentMail: an inbox for your agent, and the rest of what it needs',
  dek: 'AgentMail is an email inbox API for AI agents. Obsession gives an agent its inbox too, then its own phone number, browser and sandbox, on one key and one bill.',
  primaryKeyword: 'obsession vs agentmail',
  keywords: ['agentmail vs obsession', 'agentmail pricing', 'agentmail phone number', 'agentmail inbox price'],
  checked: '2026-11-22',
  readingMinutes: 5,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'One AI agent’s pieces',
    period: 'From AgentMail’s own pages, read 21 and 22 Nov 2026',
    cols: ['Piece', 'AgentMail', 'Obsession'],
    rows: [
      { name: 'Email inbox', cells: ['3 free, then by plan', `3 free, then ${prices.inbox.amount} a month`], tone: 'info' },
      { name: 'Each extra inbox', cells: ['$2 a month', `${prices.inbox.amount} a month`], tone: 'info' },
      { name: 'Phone number and texts', cells: ['Not on its pages', `${prices.number.amount} a number a month`], tone: 'ok' },
      { name: 'iMessage and WhatsApp', cells: ['Not on its pages', 'On the same key'], tone: 'ok' },
      { name: 'Cloud browser', cells: ['Not on its pages', `${prices.browser.amount} a browser hour`], tone: 'ok' },
      { name: 'Sandbox to run code', cells: ['Not on its pages', `${prices.sandbox.amount} an active vCPU hour`], tone: 'ok' },
      { name: 'One identity for all of it', cells: ['Not on its pages', 'A persona, free while it waits'], tone: 'ok' },
    ],
    notes: ['Not on its pages means AgentMail’s pages don’t describe it.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-agentmail-does', text: 'What AgentMail does well' },
    {
      kind: 'p',
      text: `As listed on 21 November 2026, [AgentMail’s home page](${AM}) is headed “Email Inboxes for AI agents”. It offers an inbox API with Python and TypeScript SDKs, an MCP server, custom domains, webhooks and websockets, and IMAP and SMTP. Pods let a software product give each of its own users an inbox.`,
    },
    {
      kind: 'p',
      text: `Its blog shows the work it runs. [Lanesurf](${AM_LANESURF}) runs freight dispatch over hundreds of inboxes and millions of messages. [Browser Use](${AM_BROWSER_USE}) gives each browser session its own inbox to sign up and verify. Its pages don’t describe phone numbers, texts, a browser or a sandbox.`,
    },
    {
      kind: 'p',
      text: `On [its pricing page](${AM_PRICING}), as listed on 22 November 2026, Free is $0 for 3 inboxes and 3,000 emails a month. Developer is $20 a month for 10 inboxes and 10,000 emails. Startup is $200 a month for 150 inboxes and 15,000 emails a day. On those two plans each extra inbox is $2 a month, and Enterprise is priced on request.`,
    },

    { kind: 'h2', id: 'what-obsession-gives', text: 'What Obsession gives the same agent' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `The inbox does the same job. obsession.inboxes.create() returns an address that sends and receives, keeps threads and attachments, and can send from your own domain. Codes and confirm links are read out of each email, and every new one reaches your webhook as email.received.`,
    },
    {
      kind: 'p',
      text: `An inbox is ${prices.inbox.amount} a month on every plan, and emails are ${prices.email.amount} ${prices.email.unit}. Start with inboxes, and add a number, a browser or a sandbox later, on the same key and bill.`,
    },

    { kind: 'h2', id: 'side-by-side', text: 'AgentMail and Obsession side by side', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `AgentMail’s row is from its own pages and [its pricing page](${AM_PRICING}), read 21 and 22 November 2026. Obsession’s row is from [pricing](/pricing).`,
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'AgentMail: Inbox API, SDKs, MCP, Pods',
          'Email inboxes for agents, with custom domains, IMAP and inboxes for each of a platform’s users',
          'Free: 3 inboxes\nDeveloper $20 a month\nStartup $200 a month\nExtra inbox $2 a month',
          'No phone number, browser or sandbox on its pages',
          'Agents that work only by email',
        ],
        [
          'Obsession (ours): Email, Phone, Messaging, Browser, Sandbox, Personas',
          'Inboxes, plus a number, messaging, a browser and a sandbox under one identity',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment unless given your own payment card',
          'Agents that email, text, browse and run code',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use each' },
    {
      kind: 'list',
      items: [
        '**Use AgentMail** when your agents work only by email, or your product gives each of its own users an inbox through Pods.',
        '**Use Obsession** when an agent also needs a phone number for text codes, a browser that stays signed in, or a sandbox for the files it receives. One key, one webhook and one bill cover every piece.',
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
      text: `A persona costs nothing while it waits, so a fleet of them can sit for days until a reply lands. Every email, text, call and page it sees goes into one [event log](/personas), dated, at ${prices.log.amount} ${prices.log.unit}.`,
    },
    {
      kind: 'note',
      title: 'What every Obsession agent keeps to',
      text: 'Each agent signs in only with the logins you give it and works within a monthly spend limit you set on its key. Enterprise adds an account per team and SSO. Every agent says it’s an AI when it talks to a person, stops before payment unless given the customer’s own payment card, never uses fake payment details and never clicks paid ads at volume. The full lines are on [the page for companies an agent visits](/agents).',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'Is Obsession an AgentMail alternative?',
          a: 'For email, yes. Both give an AI agent its own inbox by API, with webhooks and an MCP server. Obsession also gives the same agent a phone number, messaging, a browser and a sandbox on one key.',
        },
        {
          q: 'Does AgentMail give agents phone numbers?',
          a: 'Its pages describe email only, as read on 21 November 2026. On Obsession, a US or UK number for texts and calls sits beside the inbox, and text codes reach your webhook as sms.received.',
          link: { label: 'See the phone piece', to: '/phone' },
        },
        {
          q: 'How much does each cost?',
          a: `AgentMail lists Free for 3 inboxes, Developer at $20 a month, Startup at $200 a month and $2 for each extra inbox, read on 22 November 2026. Obsession is free to start, then $20, $99 or $499 a month. Its inbox is ${prices.inbox.amount} a month, and emails are ${prices.email.amount} per 1,000.`,
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'Can I use AgentMail and Obsession together?',
          a: 'Yes. Keep AgentMail for email, and give the same agent an Obsession number and browser. Moving the inbox too puts every email, text and page on one webhook and one bill.',
        },
      ],
    },
  ],
  sources: [
    { title: 'AgentMail: email inboxes for AI agents', publisher: 'AgentMail', url: AM },
    { title: 'How Lanesurf keeps freight moving with agent email', publisher: 'AgentMail', url: AM_LANESURF },
    { title: 'How Browser Use gives every browser agent its own inbox', publisher: 'AgentMail', url: AM_BROWSER_USE },
    { title: 'Pricing', publisher: 'AgentMail', url: AM_PRICING },
  ],
  related: [
    '/email',
    '/phone',
    '/browser',
    '/personas',
    '/developers',
    '/compare/obsession-vs-browserbase',
    '/compare/obsession-vs-exa',
    'long-running-ai-agents',
    'can-ai-agents-log-in-to-websites',
    '/agents',
  ],
}
