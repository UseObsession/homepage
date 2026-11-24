import { plans, prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-zoho-agentinbox (24 Nov 2026, agent-business plan). Zoho AgentInbox's facts: Zoho's own page
   zoho.com/agentinbox, read 24 Nov 2026. Its page lists no Pro price. Obsession's prices come from prices.ts. */

const ZH = 'https://www.zoho.com/agentinbox/'

const freePlan = plans.find((p) => p.id === 'free') ?? plans[0]
const freeInboxes = freePlan.allowances.inbox ?? 0

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Zoho AgentInbox',
  company: 'Zoho AgentInbox',
  line: 'Zoho AgentInbox gives an AI agent its own email inbox. Obsession adds a phone number, browser and sandbox under one persona.',
  meta: {
    path: '/compare/obsession-vs-zoho-agentinbox',
    title: 'Zoho AgentInbox vs Obsession (2026): inbox or whole agent',
    description: `Zoho AgentInbox vs Obsession: both give an AI agent its own inbox by API. Obsession adds a number, browser and sandbox on one key. Inbox ${prices.inbox.amount} a month.`,
    answer: `Zoho AgentInbox and Obsession both give an AI agent its own email inbox through an API, with SDKs, an MCP server and notifications when mail arrives. Zoho's page lists a Free plan with 5 inboxes. Obsession adds a phone number, messaging, a cloud browser and a sandbox on the same key and bill. Its inbox is ${prices.inbox.amount} a month.`,
    ogImage: '/og/compare-obsession-vs-zoho-agentinbox.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Zoho AgentInbox', path: '/compare/obsession-vs-zoho-agentinbox' },
    ],
  },
  title: 'Zoho AgentInbox vs Obsession: an inbox for your agent, and the rest',
  dek: 'Zoho AgentInbox is email infrastructure for AI agents, with a free plan. Obsession gives an agent its inbox too, then its own phone number, browser and sandbox, on one key and one bill.',
  primaryKeyword: 'zoho agentinbox',
  keywords: ['zoho agentinbox vs obsession', 'zoho agentinbox free plan', 'zoho agentinbox alternative', 'zoho agentinbox pricing'],
  checked: '2026-11-24',
  readingMinutes: 5,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'One AI agent’s pieces',
    period: 'From Zoho’s own page, read 24 Nov 2026',
    cols: ['Piece', 'Zoho AgentInbox', 'Obsession'],
    rows: [
      { name: 'Email inbox', cells: ['5 free, then by plan', `${freeInboxes} free, then ${prices.inbox.amount} a month`], tone: 'info' },
      { name: 'Sign-up codes and confirm links', cells: ['Handled by the agent', 'Read out of each email and text'], tone: 'info' },
      { name: 'Phone number and texts', cells: ['Not on its page', `${prices.number.amount} a number a month`], tone: 'ok' },
      { name: 'Cloud browser', cells: ['Not on its page', `${prices.browser.amount} a browser hour`], tone: 'ok' },
      { name: 'Sandbox to run code', cells: ['Not on its page', `${prices.sandbox.amount} an active vCPU hour`], tone: 'ok' },
      { name: 'One identity for all of it', cells: ['Not on its page', 'A persona, free while it waits'], tone: 'ok' },
    ],
    notes: ['Not on its page means Zoho’s page doesn’t describe it.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-zoho-does', text: 'What Zoho AgentInbox does well' },
    {
      kind: 'p',
      text: `As listed on 24 November 2026, [Zoho AgentInbox](${ZH}) is email infrastructure for AI agents. Each agent gets its own inbox with a permanent address, scoped credentials and an audit trail of its activity. Zoho calls it a headless full-stack platform, with an email API backed by persistent storage.`,
    },
    {
      kind: 'p',
      text: 'The page lists two-way sync with create, read, update and delete operations for email, and an agent that keeps its address and inbox across sessions. An agent can handle sign-up, verification codes and confirmation links without a person forwarding them. It is notified when mail arrives, so it needn’t poll. Developer tools are SDKs, an MCP server, CLI commands and skill files for coding agents.',
    },
    {
      kind: 'p',
      text: 'The Free plan includes 5 inboxes, 4,000 emails a month and 1GB of storage, with no credit card. It runs on the same infrastructure as the Pro plan, so inboxes and integrations carry over on an upgrade. The page doesn’t list a Pro price.',
    },

    { kind: 'h2', id: 'what-obsession-gives', text: 'What Obsession gives the same agent' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `The inbox does the same job. obsession.inboxes.create() returns an address that sends and receives, keeps threads and attachments, and can send from your own domain. Codes and confirm links are read out of each email, and every new one reaches your webhook as email.received. Free includes ${freeInboxes} inboxes. After that an inbox is ${prices.inbox.amount} a month, and emails are ${prices.email.amount} ${prices.email.unit}.`,
    },
    {
      kind: 'p',
      text: `Beside it, a number is ${prices.number.amount} a month, a browser is ${prices.browser.amount} a browser hour and a sandbox is ${prices.sandbox.amount} an active vCPU hour, all on the same key and bill. Messaging adds iMessage, WhatsApp, Slack and Telegram.`,
    },

    { kind: 'h2', id: 'side-by-side', text: 'Zoho AgentInbox and Obsession side by side', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `Zoho’s row is from [its page](${ZH}), read 24 November 2026. Obsession’s row is from [pricing](/pricing).`,
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Zoho AgentInbox: email API, SDKs, MCP, CLI',
          'Email inboxes for agents with persistent storage, an audit trail and notifications on new mail',
          'Free: 5 inboxes, 4,000 emails a month\nPro price not listed',
          'Its page doesn’t describe a phone number, browser or sandbox',
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
        '**Use Zoho AgentInbox** when your agents work only by email and you want a free plan with 5 inboxes and 1GB of storage.',
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
      text: `A persona costs nothing while it waits. Every email, text, call and page it sees goes into one [event log](/personas), dated, at ${prices.log.amount} ${prices.log.unit}. [Blueprints](/blueprints) are ready-made jobs, so a team that doesn’t write code can run one.`,
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
          q: 'What is Zoho AgentInbox?',
          a: 'It is Zoho’s email infrastructure for AI agents: an inbox for each agent with a permanent address, scoped credentials, an audit trail, SDKs and an MCP server, as listed on its page on 24 November 2026.',
        },
        {
          q: 'Does Zoho AgentInbox have a free plan?',
          a: 'Yes. Its page lists Free with 5 inboxes, 4,000 emails a month and 1GB of storage, with no credit card, read on 24 November 2026. The page doesn’t list a Pro price. Obsession is free to start too, with its first inboxes included.',
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'Is Obsession a Zoho AgentInbox alternative?',
          a: 'For email, yes. Both give an AI agent its own inbox by API, with an MCP server. Obsession also gives the same agent a phone number, messaging, a browser and a sandbox on one key.',
        },
        {
          q: 'Does Zoho AgentInbox give agents phone numbers?',
          a: 'Its page describes email only, as read on 24 November 2026. On Obsession, a US or UK number for texts and calls sits beside the inbox, and text codes reach your webhook as sms.received.',
          link: { label: 'See the phone piece', to: '/phone' },
        },
      ],
    },
  ],
  sources: [{ title: 'Zoho AgentInbox: email infrastructure for AI agents', publisher: 'Zoho', url: ZH }],
  related: ['/email', '/phone', '/browser', '/personas', '/developers', '/compare/obsession-vs-agentmail', '/compare/obsession-vs-lumbox', '/alternatives/agentmail', '/agents'],
}
