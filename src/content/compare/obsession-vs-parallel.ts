import { prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-parallel (22 Nov 2026 rewrite, the pieces position). Parallel's facts: its home and pricing
   pages, read 22 Nov 2026. The angle: Parallel searches and monitors the public web well; Obsession gives the agent its
   own browser that stays signed in, an inbox and a number; many teams use both, and both send webhooks. Obsession's
   prices come from prices.ts. */

const PARALLEL = 'https://parallel.ai/'
const PARALLEL_PRICING = 'https://parallel.ai/pricing'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Parallel',
  company: 'Parallel',
  line: 'Parallel researches and monitors public pages for AI agents. Obsession posts what an agent sees after it signs up: emails, texts and pages.',
  meta: {
    path: '/compare/obsession-vs-parallel',
    title: 'Obsession vs Parallel (2026): search or a signed-in browser',
    description:
      'Obsession vs Parallel: Parallel researches and monitors the public web for agents. Obsession gives an agent a signed-in browser, an inbox and a number.',
    answer:
      'Parallel searches, extracts and monitors the public web for AI agents, on an index of billions of pages, and does it well. Obsession gives an agent its own browser that stays signed in, plus an inbox and a phone number for the sites that need an account. Many teams use both, and both post what they find to a webhook.',
    ogImage: '/og/compare-obsession-vs-parallel.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Parallel', path: '/compare/obsession-vs-parallel' },
    ],
  },
  title: 'Obsession vs Parallel: research the public web, or sign in and act',
  dek: 'Parallel researches and monitors the public web for your agents. Obsession gives the same agent a browser, an email address and a phone number of its own.',
  primaryKeyword: 'obsession vs parallel',
  keywords: ['parallel vs obsession', 'parallel web systems', 'parallel monitor api', 'parallel task api'],
  checked: '2026-11-22',
  readingMinutes: 5,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'One agent, two webhooks',
    period: 'From Parallel’s own pages, read 22 Nov 2026',
    cols: ['The job', 'Parallel', 'Obsession'],
    rows: [
      { name: 'Research across the web', cells: ['Task API', 'Use a research API'], tone: 'info' },
      { name: 'A public page changes', cells: ['Monitor API, webhook', 'Use a monitor'], tone: 'info' },
      { name: 'A reply lands in its inbox', cells: ['Not on its pages', 'email.received, webhook'], tone: 'ok' },
      { name: 'A text code arrives', cells: ['Not on its pages', 'sms.received, webhook'], tone: 'ok' },
      { name: 'Signed in to an account', cells: ['Not on its pages', 'page.visited, logins kept'], tone: 'ok' },
    ],
    notes: ['Not on its pages means Parallel’s pages don’t describe it.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-parallel-does', text: 'What Parallel does well' },
    {
      kind: 'p',
      text: `As listed on 22 November 2026, [Parallel’s home page](${PARALLEL}) reads “Where agents find answers”. It says it lets AI “search, extract, monitor, and reason over the world’s information”. Its products are the Task, Monitor, FindAll, Search and Extract APIs on the Parallel Web Index, which “contains billions of pages, and millions are added or updated daily”.`,
    },
    {
      kind: 'p',
      text: 'Its Search MCP server works with tools such as Cursor and Claude Code, and a free hosted version suits personal use. It describes Extract as working on “any public URL”, and its pages don’t describe signing in to websites.',
    },
    {
      kind: 'p',
      text: `On [its pricing page](${PARALLEL_PRICING}), as listed on 22 November 2026, Search is from $1 per 1,000 requests, Task from $5 per 1,000 runs and Monitor from $3 per 1,000 checks. The Scale plan is $1,000 a month.`,
    },

    { kind: 'h2', id: 'what-obsession-gives', text: 'What Obsession gives the same agent' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `For an agent that watches and acts, three pieces sit beside research. A [browser](/browser) that keeps its logins, at ${prices.browser.amount} an hour. An [inbox](/email) at ${prices.inbox.amount} a month and a [phone number](/phone) at ${prices.number.amount} a month, for the codes and replies a site sends.`,
    },

    { kind: 'h2', id: 'side-by-side', text: 'Parallel and Obsession side by side', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `Parallel’s row is from its own pages and [its pricing page](${PARALLEL_PRICING}), read 22 November 2026. Obsession’s row is from [pricing](/pricing).`,
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Parallel: Task, Monitor, FindAll, Search, Extract',
          'Research tasks, search and alerts on public pages, from an index of billions',
          'Search from $1 per 1,000\nTask from $5 per 1,000\nScale $1,000 a month',
          'Extract reads public URLs; no inbox or number on its pages',
          'Deep research and monitoring of public pages',
        ],
        [
          'Obsession (ours): Browser, Email, Phone, Messaging, Sandbox, Personas',
          'A browser that stays signed in, an inbox and a number, with every event on one webhook',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'No web index of its own',
          'Agents that sign in, reply and act',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use each' },
    {
      kind: 'list',
      items: [
        '**Use Parallel** for research and monitoring on the public web: a research task across many sources, or an alert when a public page changes.',
        '**Use Obsession** when the agent needs an account of its own. It signs up from its own inbox, reads the text code on its own number, and is still signed in next week.',
        '**Use both** in one pipeline. Parallel posts a change on a competitor’s public pricing page. Obsession posts every email, text and page your agent sees, so both land in the same table.',
      ],
    },

    { kind: 'h2', id: 'together', text: 'One event log for everything the agent sees' },
    {
      kind: 'p',
      text: 'obsession.personas.create({ inbox: true, phone: "US", browser: true }) gives one agent all three pieces. A persona is an AI agent with its own inbox, number and browser under one name. It costs nothing while it waits.',
    },
    {
      kind: 'p',
      text: `Every email.received, sms.received and page.visited goes into one event log, in order and dated, then to the webhook you subscribe once. The log is ${prices.log.amount} ${prices.log.unit}, and your agent reads it over MCP with claude mcp add obsession.`,
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
          q: 'Is Obsession a Parallel alternative?',
          a: 'For public web research, no. Use Parallel or another search and research API. Obsession gives the agent a browser that stays signed in, an inbox and a phone number, so many teams use both.',
        },
        {
          q: 'Do both send webhooks?',
          a: 'Yes. Parallel’s Monitor API posts changes to public pages. Obsession posts each email, text, call and page your agent sees, from one event log.',
        },
        {
          q: 'Can Parallel read pages behind a login?',
          a: 'Its pages describe Extract working on any public URL and don’t describe signing in, as read on 22 November 2026. Obsession’s browser keeps its logins between sessions.',
          link: { label: 'See the browser piece', to: '/browser' },
        },
        {
          q: 'How much does each cost?',
          a: `Parallel lists Search from $1 per 1,000 requests, Task from $5 per 1,000 runs, Monitor from $3 per 1,000 checks and Scale at $1,000 a month, read on 22 November 2026. Obsession is free to start, then $20, $99 or $499 a month. Its browser hour is ${prices.browser.amount} and an inbox ${prices.inbox.amount} a month.`,
          link: { label: 'See pricing', to: '/pricing' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Parallel: where agents find answers', publisher: 'Parallel', url: PARALLEL },
    { title: 'Pricing', publisher: 'Parallel', url: PARALLEL_PRICING },
  ],
  related: [
    'best-web-search-api-for-ai-agents',
    'exa-vs-tavily-vs-firecrawl',
    '/compare/obsession-vs-exa',
    '/compare/obsession-vs-tavily',
    '/compare/obsession-vs-browserbase',
    '/browser',
    '/email',
    '/phone',
    '/personas',
    '/developers',
    '/glossary/web-search-api',
    'long-running-ai-agents',
  ],
}
