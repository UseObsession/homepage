import { prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-browserbase (22 Nov 2026 rewrite, the pieces position). Browserbase's facts: its home and
   identity pages as read for _research/commercial-view-21nov/research/B_browsers_web_agents.json (21 Nov 2026), its
   pricing page re-read 22 Nov 2026. The angle: the browser piece against theirs, home connection included with no
   charge per GB, then the inbox and number for every login code, under one identity. Its claims are stated as its
   own; Obsession's lines are /agents'. Obsession's prices come from prices.ts. */

const BB = 'https://www.browserbase.com/'
const BB_IDENTITY = 'https://www.browserbase.com/identity'
const BB_PRICING = 'https://www.browserbase.com/pricing'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Browserbase',
  company: 'Browserbase',
  line: 'Browserbase runs cloud browsers for AI agents. Obsession gives an agent a browser, plus its own inbox and phone number.',
  meta: {
    path: '/compare/obsession-vs-browserbase',
    title: 'Obsession vs Browserbase (2026): browsers or the whole agent',
    description: `Obsession vs Browserbase: both give AI agents a cloud browser. Obsession’s is ${prices.browser.amount} an hour, no charge per GB, with an inbox and number for codes.`,
    answer: `Browserbase and Obsession both give AI agents a cloud browser that your code drives and that keeps its logins. Browserbase adds search, fetch and session replays. Obsession adds the agent’s own inbox and phone number for every login code, under one identity. Its browser hour is ${prices.browser.amount}, home connection included, with no charge per GB.`,
    ogImage: '/og/compare-obsession-vs-browserbase.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Browserbase', path: '/compare/obsession-vs-browserbase' },
    ],
  },
  title: 'Obsession vs Browserbase: a cloud browser, and the inbox and number beside it',
  dek: 'Browserbase runs cloud browsers for AI agents at high volume. Obsession gives an agent a browser too, then its own email address and phone number for every code a site sends.',
  primaryKeyword: 'obsession vs browserbase',
  keywords: ['browserbase vs obsession', 'browserbase pricing', 'browserbase proxy pricing', 'browserbase contexts login'],
  checked: '2026-11-22',
  readingMinutes: 5,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'One AI agent’s pieces',
    period: 'From Browserbase’s own pages, read 21 and 22 Nov 2026',
    cols: ['Piece', 'Browserbase', 'Obsession'],
    rows: [
      { name: 'Cloud browser', cells: ['$0.10 to $0.12 an hour', `${prices.browser.amount} an hour`], tone: 'info' },
      { name: 'Logins kept between sessions', cells: ['Yes, with Contexts', 'Yes'], tone: 'info' },
      { name: 'Home or proxy connection', cells: ['$10 to $12 a GB past the plan', 'Included, no charge per GB'], tone: 'ok' },
      { name: 'Sandbox to run code', cells: ['Yes, Sandboxes', `${prices.sandbox.amount} an active vCPU hour`], tone: 'info' },
      { name: 'Email inbox for codes', cells: ['Not on its pages', `${prices.inbox.amount} an inbox a month`], tone: 'ok' },
      { name: 'Phone number for text codes', cells: ['Not on its pages', `${prices.number.amount} a number a month`], tone: 'ok' },
      { name: 'One identity for all of it', cells: ['Not on its pages', 'A persona, free while it waits'], tone: 'ok' },
    ],
    notes: ['Not on its pages means Browserbase’s pages don’t describe it. Its hour is $0.12 on Developer and $0.10 on Startup.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-browserbase-does', text: 'What Browserbase does well' },
    {
      kind: 'p',
      text: `As listed on 21 November 2026, [Browserbase’s home page](${BB}) reads “Give your agents access to the whole web.” It says it runs more than 35 million browser sessions a month across 10,000 customers, including Ramp, Microsoft and Lovable. Its products include cloud browsers, Stagehand for browser automation, Search and Fetch APIs, Functions, Sandboxes and Agent Identity.`,
    },
    {
      kind: 'p',
      text: `[Its identity page](${BB_IDENTITY}) lists Web Bot Auth, a signature that tells a site which company’s agent is visiting. It also lists logins through 1Password and a Contexts API that keeps a session’s logins between runs. Its paid plans add stealth modes. Its pages don’t describe an email inbox or a phone number for the agent.`,
    },
    {
      kind: 'p',
      text: `On [its pricing page](${BB_PRICING}), as listed on 22 November 2026, Free is $0 for 1 browser hour. Developer is $20 a month for 100 hours and 1 GB of proxy data. Startup is $99 a month for 500 hours and 5 GB. Past those, an hour is $0.12 or $0.10 and proxy data $12 or $10 a GB. Scale is priced on request.`,
    },

    { kind: 'h2', id: 'what-obsession-gives', text: 'What Obsession gives the same agent' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `Its [browser](/browser) keeps its logins between sessions and connects through a home internet connection. Your agent drives it with Playwright, Puppeteer or any Chrome DevTools Protocol tool. A browser hour is ${prices.browser.amount}, home connection included, with no charge per GB.`,
    },
    {
      kind: 'p',
      text: 'When a site sends a login code, the agent’s own inbox or number receives it, and the code is read out for it. The browser carries on with the next step, with no person in the loop.',
    },

    { kind: 'h2', id: 'side-by-side', text: 'Browserbase and Obsession side by side', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `Browserbase’s row is from its own pages and [its pricing page](${BB_PRICING}), read 21 and 22 November 2026. Obsession’s row is from [pricing](/pricing).`,
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Browserbase: Browsers, Stagehand, Search, Fetch, Sandboxes, Agent Identity',
          'Browsers at high volume, with logins kept, session replays and stealth modes',
          'Free: 1 browser hour\nDeveloper $20 a month\nStartup $99 a month\nProxy data $10 to $12 a GB',
          'No email inbox or phone number on its pages',
          'Agents that live in the browser',
        ],
        [
          'Obsession (ours): Browser, Email, Phone, Messaging, Sandbox, Personas',
          'A browser that stays signed in, plus the inbox and number for every code',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment unless given your card',
          'Agents that sign up, confirm a code and come back',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use each' },
    {
      kind: 'list',
      items: [
        '**Use Browserbase** when your agent lives in the browser at high volume and needs search, fetch and session replays beside it.',
        '**Use Obsession** when the agent also needs its own email address and phone number. It signs up, reads the confirmation code and comes back next week still signed in.',
        '**Watch the bill per GB.** A browser agent that loads heavy pages pays for proxy data on Browserbase past its plan. On Obsession the home connection is part of the hour.',
      ],
    },

    { kind: 'h2', id: 'one-identity', text: 'A browser, inbox and number under one name' },
    {
      kind: 'p',
      text: 'obsession.personas.create({ inbox: true, phone: "US", browser: true }) gives one agent all three. A persona is an AI agent with its own inbox, number and browser under one name. Your Playwright or Puppeteer script connects to its browser by URL, and the steps it runs stay yours.',
    },
    {
      kind: 'p',
      text: 'A persona costs nothing while it waits, so a fleet of them can hold their logins for weeks. Each page it opens arrives in your event log as page.visited, beside every email.received and sms.received, in order and dated.',
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
          q: 'Is Obsession a Browserbase alternative?',
          a: 'For the browser, yes. Both give an AI agent a cloud browser that keeps its logins. Obsession adds the agent’s own inbox and phone number on the same key. For search and fetch APIs or session replays on the same account, Browserbase describes them on its pages.',
        },
        {
          q: 'Does Browserbase charge for proxy data?',
          a: 'Yes. Its pricing page lists 1 GB on Developer and 5 GB on Startup, then $12 or $10 a GB, as listed on 22 November 2026. Obsession’s browser hour includes its home connection, with no charge per GB.',
        },
        {
          q: 'Can my browser agent get login codes by email and text?',
          a: 'On Obsession, yes. Each agent can have its own inbox and number, the code is read out of the email or text, and it reaches your webhook as email.received or sms.received. Browserbase’s pages don’t describe an inbox or a number.',
          link: { label: 'See the email piece', to: '/email' },
        },
        {
          q: 'How much does each cost?',
          a: `Browserbase lists Free with 1 browser hour, Developer at $20 a month, Startup at $99 a month and Scale on request, read on 22 November 2026. Obsession is free to start, then $20, $99 or $499 a month. Its browser hour is ${prices.browser.amount}, an inbox ${prices.inbox.amount} a month and a number ${prices.number.amount} a month.`,
          link: { label: 'See pricing', to: '/pricing' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Browserbase: give your agents access to the whole web', publisher: 'Browserbase', url: BB },
    { title: 'Agent Identity', publisher: 'Browserbase', url: BB_IDENTITY },
    { title: 'Pricing', publisher: 'Browserbase', url: BB_PRICING },
  ],
  related: [
    '/browser',
    '/email',
    '/phone',
    '/personas',
    '/developers',
    '/compare/obsession-vs-agentmail',
    '/compare/obsession-vs-firecrawl',
    '/compare/obsession-vs-exa',
    'can-ai-agents-log-in-to-websites',
    'long-running-ai-agents',
    '/glossary/headless-browser',
    '/glossary/web-bot-auth',
    '/agents',
  ],
}
