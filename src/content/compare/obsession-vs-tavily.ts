import { prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-tavily (22 Nov 2026 rewrite, the pieces position). Tavily's facts: its home and pricing pages,
   read 22 Nov 2026; the Nebius post as published (10 Feb 2026). The angle: Tavily searches the public web well;
   Obsession gives the agent its own browser that stays signed in, an inbox and a number; many teams use both.
   "tavily alternatives" stays with the blog guide (docs/SEARCH.md §2). Obsession's prices come from prices.ts. */

const TAVILY = 'https://tavily.com/'
const TAVILY_NEBIUS = 'https://www.tavily.com/blog/tavily-is-joining-nebius'
const TAVILY_PRICING = 'https://tavily.com/pricing'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Tavily',
  company: 'Tavily',
  line: 'Tavily answers an agent’s question from the live public web. Obsession lets the agent act on the answer: email, text and sign in.',
  meta: {
    path: '/compare/obsession-vs-tavily',
    title: 'Obsession vs Tavily (2026): search or a signed-in browser',
    description:
      'Obsession vs Tavily: Tavily gives AI agents real-time web search in one call. Obsession gives an agent a signed-in browser, an inbox and a phone number.',
    answer:
      'Tavily gives AI agents real-time access to the public web in one call, and does it well. Obsession gives an agent its own browser that stays signed in, plus an inbox and a phone number, so it can act on what it finds. Many teams use both, Tavily to ground answers in fresh pages and Obsession to sign up, reply and come back.',
    ogImage: '/og/compare-obsession-vs-tavily.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Tavily', path: '/compare/obsession-vs-tavily' },
    ],
  },
  title: 'Obsession vs Tavily: real-time search, or an agent that can act on it',
  dek: 'Tavily answers your agent’s question from the live public web. Obsession gives the same agent a browser, an email address and a phone number to act with.',
  primaryKeyword: 'obsession vs tavily',
  keywords: ['tavily vs obsession', 'tavily nebius', 'tavily search api', 'web search api for ai agents'],
  checked: '2026-11-22',
  readingMinutes: 5,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'One agent, one vendor question',
    period: 'From Tavily’s own pages, read 22 Nov 2026',
    cols: ['The job', 'Tavily', 'Obsession'],
    rows: [
      { name: 'Search results for a model', cells: ['1 call, real-time', 'Use a search API'], tone: 'info' },
      { name: 'Public pages as clean text', cells: ['Extract, crawl, map', 'In its browser'], tone: 'info' },
      { name: 'Email the vendor from its own address', cells: ['Not on its pages', `Inbox, ${prices.inbox.amount} a month`], tone: 'ok' },
      { name: 'Text the customer back', cells: ['Not on its pages', `Number, ${prices.number.amount} a month`], tone: 'ok' },
      { name: 'Sign in to the vendor portal', cells: ['Not on its pages', 'Its browser keeps its logins'], tone: 'ok' },
    ],
    notes: ['Not on its pages means Tavily’s pages don’t describe it.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-tavily-does', text: 'What Tavily does well' },
    {
      kind: 'p',
      text: `As listed on 22 November 2026, [Tavily’s home page](${TAVILY}) reads “Connect your AI agents to the web” and “One secure API for real-time web access.” Its endpoints are Search, Extract, Research, Crawl and Map. Its logo reads Tavily by Nebius, and [its own post of 10 February 2026](${TAVILY_NEBIUS}) says it is joining Nebius and that “The API remains the same”.`,
    },
    {
      kind: 'p',
      text: `On [its pricing page](${TAVILY_PRICING}), as listed on 22 November 2026, the Researcher plan is free for 1,000 credits a month, with no card. Pay as you go is $0.008 a credit, Project is $30 a month for 4,000 credits, and Enterprise is priced on request. Its home page doesn’t describe signing in to websites.`,
    },

    { kind: 'h2', id: 'what-obsession-gives', text: 'What Obsession gives the same agent' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `Search tells an agent what to do. These pieces let it do it. An [inbox](/email) to email from, at ${prices.inbox.amount} a month. A [phone number](/phone) to text and call from, at ${prices.number.amount} a month. A [browser](/browser) that stays signed in, at ${prices.browser.amount} an hour.`,
    },

    { kind: 'h2', id: 'side-by-side', text: 'Tavily and Obsession side by side', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `Tavily’s row is from its own pages and [its pricing page](${TAVILY_PRICING}), read 22 November 2026. Obsession’s row is from [pricing](/pricing).`,
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Tavily: Search, Extract, Research, Crawl, Map',
          'Real-time public web results and clean page text for a model, in one call',
          'Free: 1,000 credits a month\n$0.008 a credit as you go\nProject $30 a month',
          'No sign-in, inbox or phone number on its pages',
          'Grounding answers in fresh public pages',
        ],
        [
          'Obsession (ours): Browser, Email, Phone, Messaging, Sandbox, Personas',
          'An inbox, a number and a browser that stays signed in, for each agent',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'No web search index of its own',
          'Agents that email, text and sign in',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use each' },
    {
      kind: 'list',
      items: [
        '**Use Tavily** to ground a model in the public web: news, docs and public prices, fetched fresh at high volume.',
        '**Use Obsession** when the agent has to act on the answer: email a vendor from its own address, text a customer back, or sign in to a portal.',
        '**Use both** for a procurement or support agent. Tavily finds the vendor and its terms. Obsession sends the email, takes the reply and logs in to place the request.',
      ],
    },

    { kind: 'h2', id: 'together', text: 'Calling Tavily and Obsession from one agent' },
    {
      kind: 'p',
      text: 'obsession.personas.create({ inbox: true, phone: "US", browser: true }) gives one agent all three pieces. A persona is an AI agent with its own inbox, number and browser under one name. It costs nothing while it waits for a reply.',
    },
    {
      kind: 'p',
      text: 'Every reply reaches your webhook as email.received or sms.received, and every page as page.visited, in one event log. Over MCP, the agent gets the same calls as tools with claude mcp add obsession.',
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
          q: 'Is Obsession a Tavily alternative?',
          a: 'For web search, no. Use Tavily or another search API to ground a model in public pages. Obsession gives the agent an inbox, a number and a browser that stays signed in, so many teams use both.',
        },
        {
          q: 'Who owns Tavily now?',
          a: 'Tavily’s own post of 10 February 2026 says Tavily is joining Nebius, and its logo reads Tavily by Nebius. The same post says the API remains the same.',
        },
        {
          q: 'Can Tavily sign in to a website?',
          a: 'Its home page doesn’t describe it, as read on 22 November 2026. Obsession’s browser keeps its logins between sessions, with its own inbox and number for the codes a site sends.',
          link: { label: 'See the browser piece', to: '/browser' },
        },
        {
          q: 'How much does each cost?',
          a: `Tavily lists 1,000 free credits a month, $0.008 a credit as you go and a Project plan at $30 a month for 4,000 credits, read on 22 November 2026. Obsession is free to start, then $20, $99 or $499 a month. Its inbox is ${prices.inbox.amount} a month and a number ${prices.number.amount} a month.`,
          link: { label: 'See pricing', to: '/pricing' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Tavily: connect your AI agents to the web', publisher: 'Tavily', url: TAVILY },
    { title: 'Tavily is joining Nebius', publisher: 'Tavily', url: TAVILY_NEBIUS, date: '2026-02-10' },
    { title: 'Pricing', publisher: 'Tavily', url: TAVILY_PRICING },
  ],
  related: [
    'exa-vs-tavily-vs-firecrawl',
    'best-web-search-api-for-ai-agents',
    'exa-alternatives',
    '/compare/obsession-vs-exa',
    '/compare/obsession-vs-parallel',
    '/compare/obsession-vs-agentmail',
    '/email',
    '/phone',
    '/browser',
    '/personas',
    '/developers',
    '/glossary/web-search-api',
    '/glossary/llm-grounding',
  ],
}
