import { prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-agenticmail (new, 23 Nov 2026, AI visibility wave). AgenticMail's facts: agenticmail.io, read
   23 Nov 2026. The angle: open source you run yourself against a hosted platform on one bill. Obsession's prices come
   from prices.ts. */

const AM = 'https://agenticmail.io'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs AgenticMail',
  company: 'AgenticMail',
  line: 'AgenticMail is open source software that gives agents email, a phone number and SMS. Obsession is a hosted platform with a browser and a sandbox on one bill.',
  meta: {
    path: '/compare/obsession-vs-agenticmail',
    title: 'Obsession vs AgenticMail (2026): self-hosted or hosted',
    description: `AgenticMail vs Obsession: open source you host yourself against one hosted key for inboxes, numbers, browsers and sandboxes. An Obsession inbox is ${prices.inbox.amount} a month.`,
    answer: `AgenticMail is MIT-licensed software you can self-host that gives agents email, a phone number and SMS, with an enterprise platform on top. Obsession is hosted: inboxes, phone numbers, messaging, a browser and a sandbox under one persona, one event log and one bill. Its inbox is ${prices.inbox.amount} a month.`,
    ogImage: '/og/compare-obsession-vs-agenticmail.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs AgenticMail', path: '/compare/obsession-vs-agenticmail' },
    ],
  },
  title: 'Obsession vs AgenticMail: self-hosted agent email or one hosted key',
  dek: 'AgenticMail gives an agent email and a phone number as open source you run yourself. Obsession is the hosted version, with a browser and a sandbox on the same key.',
  primaryKeyword: 'agenticmail',
  keywords: ['agenticmail alternative', 'agenticmail vs obsession', 'agenticmail pricing', 'agenticmail mcp'],
  checked: '2026-11-23',
  readingMinutes: 5,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'One AI agent’s pieces',
    period: 'From AgenticMail’s own page, read 23 Nov 2026',
    cols: ['Piece', 'AgenticMail', 'Obsession'],
    rows: [
      { name: 'Email inbox', cells: ['Own email, with your SMTP and IMAP', `${prices.inbox.amount} a month, hosted`], tone: 'info' },
      { name: 'Phone number and texts', cells: ['A number and SMS', `${prices.number.amount} a number a month`], tone: 'info' },
      { name: 'Browser', cells: ['Playwright automation in the enterprise platform', `${prices.browser.amount} a browser hour, hosted`], tone: 'info' },
      { name: 'Sandbox to run code', cells: ['Sandboxed shell commands; no code sandbox described', `${prices.sandbox.amount} an active vCPU hour`], tone: 'ok' },
      { name: 'Run it yourself', cells: ['MIT licence, self-host', 'Hosted'], tone: 'info' },
      { name: 'One bill', cells: ['No prices listed', 'One key, one bill'], tone: 'ok' },
    ],
    notes: ['Not on its page means AgenticMail’s page doesn’t describe it.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-agenticmail-does', text: 'What AgenticMail does well' },
    {
      kind: 'p',
      text: `As listed on 23 November 2026, [AgenticMail](${AM}) ships an open source CLI under the MIT licence that gives agents their own email, a phone number and SMS. Its CLI includes an MCP server for Claude Code, Codex and other MCP clients, and a Node SDK.`,
    },
    {
      kind: 'p',
      text: 'On top sits an enterprise platform with a dashboard, calendars, browsers, governance and fleet management. Browser work uses Playwright. The page lists 145 SaaS integrations and says it has no telemetry or usage tracking. You can deploy it free in the cloud with a subdomain.',
    },
    {
      kind: 'p',
      text: 'Its page lists no price tiers, and its counters read zero, so it doesn’t show how many people use it.',
    },

    { kind: 'h2', id: 'what-obsession-gives', text: 'What Obsession gives the same agent' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `The difference is who runs it. Obsession is hosted, so there is no server to keep up. An inbox is ${prices.inbox.amount} a month, a number is ${prices.number.amount} a month, a browser is ${prices.browser.amount} a browser hour and a sandbox is ${prices.sandbox.amount} an active vCPU hour, all on one key and one bill.`,
    },

    { kind: 'h2', id: 'side-by-side', text: 'AgenticMail and Obsession side by side', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `AgenticMail’s row is from [its page](${AM}), read 23 November 2026. Obsession’s row is from [pricing](/pricing).`,
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'AgenticMail: CLI, Enterprise platform, host plugins',
          'Open source email, phone and SMS for agents, plus a self-hosted platform with governance and 145 integrations',
          'No prices listed; free to self-host',
          'You run and maintain it; its page describes sandboxed shell commands, not a sandbox to run code',
          'Teams who want to self-host and own the code',
        ],
        [
          'Obsession (ours): Email, Phone, Messaging, Browser, Sandbox, Personas',
          'Hosted pieces under one persona, with one event log, webhooks and blueprints',
          'Free to start, then by plan; usage per piece',
          'Stops before payment unless given your own payment card',
          'Teams who want nothing to host',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use each' },
    {
      kind: 'list',
      items: [
        '**Use AgenticMail** when you need to self-host, read the code, or keep every message on your own servers.',
        '**Use Obsession** when you want an inbox, number, browser and sandbox running today without servers, and teammates who don’t write code to run ready-made blueprints.',
        '**Count the upkeep.** Self-hosting costs no licence fee, but someone runs the mail, the phone line and the browsers.',
      ],
    },

    { kind: 'h2', id: 'one-identity', text: 'Personas, the event log and one bill' },
    {
      kind: 'p',
      text: 'obsession.personas.create({ inbox: true, phone: "US", browser: true }) gives one agent all three. A persona is an AI agent with its own inbox, number and browser under one name, and it is still signed in next week.',
    },
    {
      kind: 'p',
      text: `Every email, text, call and page it sees goes into one [event log](/personas), dated, at ${prices.log.amount} ${prices.log.unit}, and every new one reaches your webhook.`,
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
          q: 'Is Obsession an AgenticMail alternative?',
          a: 'If you would rather not host it yourself, yes. Both give an agent email and a phone number, and both offer MCP. Obsession is hosted and adds a browser, a sandbox and one bill.',
        },
        {
          q: 'Is AgenticMail free?',
          a: 'Its page describes MIT-licensed open source software and a free cloud deploy with a subdomain, and lists no prices, as read on 23 November 2026. You carry the hosting.',
        },
        {
          q: 'How much does Obsession cost?',
          a: `Obsession is free to start. An inbox is ${prices.inbox.amount} a month and a number is ${prices.number.amount} a month, with plans above that.`,
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'Can I use AgenticMail and Obsession together?',
          a: 'Yes. Keep AgenticMail for self-hosted email and give the same agent an Obsession browser and sandbox.',
          link: { label: 'See the browser', to: '/browser' },
        },
      ],
    },
  ],
  sources: [{ title: 'AgenticMail', publisher: 'AgenticMail', url: AM }],
  related: ['/email', '/phone', '/browser', '/sandbox', '/personas', '/developers', '/compare/obsession-vs-agentmail', '/compare/obsession-vs-lupin', '/agents'],
}
