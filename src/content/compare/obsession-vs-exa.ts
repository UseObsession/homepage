import { prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-exa (22 Nov 2026 rewrite, the pieces position). Exa's facts: its home page as read for
   _research/commercial-view-21nov/research/B_browsers_web_agents.json (21 Nov 2026), its pricing page re-read 22 Nov
   2026. The angle: Exa searches the public web well; Obsession gives the agent its own browser that stays signed in, an
   inbox and a number; many teams use both. "exa alternatives" and "exa vs tavily" stay with the blog guides
   (docs/SEARCH.md §2). Obsession's prices come from prices.ts. */

const EXA = 'https://exa.ai/'
const EXA_PRICING = 'https://exa.ai/pricing'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Exa',
  company: 'Exa',
  line: 'Exa searches the public web for AI agents. Obsession gives an agent a browser that stays signed in, an inbox and a number.',
  meta: {
    path: '/compare/obsession-vs-exa',
    title: 'Obsession vs Exa (2026): search or a signed-in browser',
    description:
      'Obsession vs Exa: Exa searches the public web for AI agents. Obsession gives an agent its own browser that stays signed in, an inbox and a phone number.',
    answer:
      'Exa searches the public web for AI agents, with company and people data, and does it well. Obsession gives an agent its own browser that stays signed in, plus an inbox and a phone number for sites that need an account. Many teams use both, Exa for public pages and Obsession for the steps after a sign-up.',
    ogImage: '/og/compare-obsession-vs-exa.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Exa', path: '/compare/obsession-vs-exa' },
    ],
  },
  title: 'Obsession vs Exa: search the public web, or sign up and stay signed in',
  dek: 'Exa finds and reads public pages for your agent in one call. Obsession gives the same agent a browser, an email address and a phone number of its own.',
  primaryKeyword: 'obsession vs exa',
  keywords: ['exa vs obsession', 'exa search api', 'exa pricing', 'exa api login'],
  checked: '2026-11-22',
  readingMinutes: 5,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'One research agent',
    period: 'From Exa’s own pages, read 21 and 22 Nov 2026',
    cols: ['The job', 'Exa', 'Obsession'],
    rows: [
      { name: 'Search the public web', cells: ['Its own index, 1 call', 'Use a search API'], tone: 'info' },
      { name: 'Company and people data', cells: ['Yes, by API', 'Use a data API'], tone: 'info' },
      { name: 'Sign up with its own email', cells: ['Not on its pages', `Inbox, ${prices.inbox.amount} a month`], tone: 'ok' },
      { name: 'Receive a text code', cells: ['Not on its pages', `Number, ${prices.number.amount} a month`], tone: 'ok' },
      { name: 'Still signed in next week', cells: ['Not on its pages', 'Its browser keeps its logins'], tone: 'ok' },
      { name: 'Run code on what it finds', cells: ['Not on its pages', `Sandbox, ${prices.sandbox.amount} a vCPU hour`], tone: 'ok' },
    ],
    notes: ['Not on its pages means Exa’s pages don’t describe it.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-exa-does', text: 'What Exa does well' },
    {
      kind: 'p',
      text: `As listed on 21 November 2026, [Exa’s home page](${EXA}) calls Exa “The world’s data for AI agents” and counts more than 900,000 developers. Its products are the Search, Contents, Agent and Monitors APIs, Websets, Exa Connect and an MCP server. An agent can find pages, read them and enrich company and people records in a few calls.`,
    },
    {
      kind: 'p',
      text: `On [its pricing page](${EXA_PRICING}), as listed on 22 November 2026, every account gets $10 of free credit a month. Search is $4 per 1,000 requests on Lite and $7 on Auto and Fast. Deep search is $12 per 1,000, and page contents are $1 per 1,000 pages. Enterprise is $12,000 a year, paid up front. Its pages don’t describe signing up for accounts or keeping a browser signed in.`,
    },

    { kind: 'h2', id: 'what-obsession-gives', text: 'What Obsession gives the same agent' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `For a research agent, that means three pieces search doesn’t cover. A [browser](/browser) that keeps its logins, at ${prices.browser.amount} an hour. An [inbox](/email) to sign up with, at ${prices.inbox.amount} a month. A [phone number](/phone) for text codes, at ${prices.number.amount} a month.`,
    },

    { kind: 'h2', id: 'side-by-side', text: 'Exa and Obsession side by side', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `Exa’s row is from its own pages and [its pricing page](${EXA_PRICING}), read 21 and 22 November 2026. Obsession’s row is from [pricing](/pricing).`,
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Exa: Search, Contents, Agent, Monitors, Websets, MCP',
          'Search and read the public web, with company and people data, in one call',
          '$10 free credit a month\nSearch $4 to $7 per 1,000\nEnterprise $12,000 a year',
          'No sign-up, inbox or signed-in browser on its pages',
          'Finding and reading public pages',
        ],
        [
          'Obsession (ours): Browser, Email, Phone, Messaging, Sandbox, Personas',
          'A browser that stays signed in, an inbox and a number for each agent',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'No web search index of its own',
          'Agents that sign up, sign in and act',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use each' },
    {
      kind: 'list',
      items: [
        '**Use Exa** when the answer sits on a page anyone can open: news, docs, public prices, or a company’s people.',
        '**Use Obsession** when the agent has to become a user: sign up with its own email, confirm a text code, and read what the site shows after the login.',
        '**Use both** for an agent that researches a prospect. Exa finds the company and its people. A persona signs up to the company’s product and keeps every welcome email it sends.',
      ],
    },

    { kind: 'h2', id: 'together', text: 'Calling Exa and Obsession from one agent' },
    {
      kind: 'p',
      text: 'Both run as MCP servers, the standard way an AI agent calls tools. Add Obsession with claude mcp add obsession. Then obsession.personas.create({ inbox: true, phone: "US", browser: true }) gives the agent all three pieces under one name. Each email, text and page reaches your webhook as it lands.',
    },
    {
      kind: 'p',
      text: 'A persona is an AI agent with its own inbox, number and browser under one name. It costs nothing while it waits, so a fleet of them can wait days for the email a site sends on day 7.',
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
          q: 'Is Obsession an Exa alternative?',
          a: 'For web search, no. Use Exa or another search API to find and read public pages. Obsession gives the agent what search can’t: a browser that stays signed in, an inbox and a phone number, so many teams use both.',
        },
        {
          q: 'Can Exa sign in to a website?',
          a: 'Its pages describe searching and reading pages, and don’t describe signing up or keeping a browser signed in, as read on 21 November 2026. Obsession’s browser keeps its logins between sessions, with an inbox and number for the codes a site sends.',
          link: { label: 'See the browser piece', to: '/browser' },
        },
        {
          q: 'How much does each cost?',
          a: `Exa lists $10 of free credit a month, search from $4 per 1,000 requests and Enterprise at $12,000 a year, read on 22 November 2026. Obsession is free to start, then $20, $99 or $499 a month. Its browser hour is ${prices.browser.amount}, an inbox ${prices.inbox.amount} a month and a number ${prices.number.amount} a month.`,
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'Can my agent call both?',
          a: 'Yes. Both run as MCP servers and plain HTTP APIs, so an agent can search with Exa and sign up, read a code and stay signed in with Obsession in the same task.',
          link: { label: 'See the API and MCP', to: '/developers' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Exa: the world’s data for AI agents', publisher: 'Exa', url: EXA },
    { title: 'Pricing', publisher: 'Exa', url: EXA_PRICING },
  ],
  related: [
    'exa-vs-tavily-vs-firecrawl',
    'exa-alternatives',
    'best-web-search-api-for-ai-agents',
    '/compare/obsession-vs-tavily',
    '/compare/obsession-vs-parallel',
    '/compare/obsession-vs-firecrawl',
    '/compare/obsession-vs-browserbase',
    '/browser',
    '/email',
    '/personas',
    '/developers',
    '/use-cases/web-behind-the-login',
    '/glossary/web-search-api',
    '/glossary/model-context-protocol',
  ],
}
