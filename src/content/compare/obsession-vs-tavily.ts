import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-tavily. Every Tavily fact is from its own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/dev_apis.json; the home page, pricing and the Nebius post re-read the same
   day). "tavily alternatives" belongs to the blog (docs/SEARCH.md §2). */

const TAVILY = 'https://tavily.com/'
const TAVILY_NEBIUS = 'https://www.tavily.com/blog/tavily-is-joining-nebius'
const TAVILY_SEARCH = 'https://docs.tavily.com/documentation/api-reference/endpoint/search'
const TAVILY_MCP = 'https://docs.tavily.com/documentation/mcp'
const TAVILY_PRICING = 'https://tavily.com/pricing'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Tavily',
  company: 'Tavily',
  line: 'Tavily connects AI agents to the live public web. Obsession keeps what companies show only to signed-up customers.',
  meta: {
    path: '/compare/obsession-vs-tavily',
    title: 'Obsession vs Tavily: web search and the data behind login',
    description:
      'Obsession vs Tavily: Tavily gives AI agents real-time public web search; Obsession keeps what companies show only to signed-up customers, dated, by API.',
    answer:
      'In Obsession vs Tavily, Tavily gives AI agents real-time access to the public web and Obsession keeps what companies show only to signed-up customers. Tavily returns search results and clean page text in one call; Obsession returns the emails after a sign-up, member prices, trial limits and cancel offers, each dated with a screenshot. Many agent teams use both, Tavily to ground answers in public pages and Obsession for what a company sends its customers.',
    ogImage: '/og/compare-obsession-vs-tavily.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Tavily', path: '/compare/obsession-vs-tavily' },
    ],
  },
  title: 'Obsession vs Tavily: real-time web search beside what companies show only to customers',
  dek: 'Tavily answers an agent’s question from the live public web in one call. Obsession answers it from what a company sent and showed its customers, kept for months.',
  primaryKeyword: 'obsession vs tavily',
  keywords: ['tavily vs obsession', 'tavily nebius', 'tavily search api', 'web search api for ai agents'],
  checked: '2026-11-11',
  readingMinutes: 5,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'northwind.example',
    period: 'Example: Northwind is an invented company',
    cols: ['At Northwind', 'Tavily', 'Obsession'],
    rows: [
      { name: 'Search results for an LLM', cells: ['1 call, cached or live', 'Use a search API'], tone: 'info' },
      { name: 'Public pages as clean text', cells: ['Extract, crawl, map', 'Not its job'], tone: 'info' },
      { name: 'Welcome email and code', cells: ['Not described', 'WELCOME20, 09:14, dated'], tone: 'ok' },
      { name: 'Free plan’s limits', cells: ['Not described', '3 projects, prompt on day 7'], tone: 'ok' },
      { name: 'Renewal notice', cells: ['Not described', '£24 to £26, 30 days ahead'], tone: 'ok' },
    ],
    notes: ['Tavily’s column follows its own pages, read 11 November 2026. Not described means its pages don’t say.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-each-is', text: 'What Tavily and Obsession are' },
    { kind: 'h3', id: 'tavily', text: 'Tavily: real-time access to the public web' },
    {
      kind: 'p',
      text: `As of 11 November 2026, [Tavily’s home page](${TAVILY}) reads “Connect your AI agents to the web” and “One secure API for real-time web access”. Its endpoints are Search, Extract, Research, Crawl and Map, built to give a model clean, current context in one call. Its logo now reads “Tavily by Nebius”: [Tavily’s own post of 10 February 2026](${TAVILY_NEBIUS}) says it is joining Nebius and that “The API remains the same”.`,
    },
    {
      kind: 'p',
      text: `Its [search reference](${TAVILY_SEARCH}) lets an agent choose between a cached copy and a live fetch (max_age_hours). Its pages don’t describe logging in to sites, keeping accounts open, or what companies send people who sign up.`,
    },
    { kind: 'h3', id: 'obsession', text: 'Obsession: the web behind the login' },
    {
      kind: 'p',
      text: `${ENTITY} A company already covered returns its history in one call, and each new email, price or offer lands dated the day it arrives.`,
    },

    { kind: 'h2', id: 'at-a-glance', text: 'Tavily and Obsession at a glance', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `Tavily’s row is from its own pages and [its pricing page](${TAVILY_PRICING}), read 11 November 2026. Obsession’s row is from [the developer page](/developers).`,
      cols: ['Option', 'What it holds', 'How it’s read', 'Freshness and history', 'Price as listed', 'Best for'],
      rows: [
        [
          'Tavily: Search, Extract, Research, Crawl, Map',
          'The public web, as clean results for a model',
          'API, SDKs and an MCP server',
          'Cached or live, per request',
          'Free: 1,000 credits a month\n$0.008 a credit as you go\nProject $30 a month',
          'Grounding answers in fresh public pages',
        ],
        [
          'Obsession (ours): Search, Insights, Watch, API and MCP',
          'Emails, member prices, trial limits, quotes, cancel offers',
          '5 verbs over MCP, the API and SDKs, or a table',
          'Kept from the first sign-up\nEach fact dated with its screenshot',
          'Early access, onboarding teams now\nPriced per call or per company watched',
          'What a company shows only to customers',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use Tavily, and when to use Obsession' },
    {
      kind: 'list',
      items: [
        '**Use Tavily** to ground a model in the public web: news, docs, public prices and research, fetched fresh at high volume. That is [LLM grounding](/glossary/llm-grounding), and a [web search API](/glossary/web-search-api) is built for it.',
        '**Use Obsession** when the question is about what a company does to its customers: what it emailed in the first week, what it charges a signed-in member, what its free plan allows and what it offers someone who tries to cancel. Those facts sit behind a [login wall](/glossary/login-wall), so no search API holds them.',
        '**Use both** for an agent that researches named companies. Tavily supplies what the company publishes; Obsession supplies what it actually sends, with the date and the receipt.',
      ],
    },

    { kind: 'h2', id: 'together', text: 'Using Tavily and Obsession together' },
    {
      kind: 'p',
      text: `Tavily lists its MCP server [in its docs](${TAVILY_MCP}), and Obsession’s install line is on [the developer page](/developers), so one agent can call both. Asked how a competitor wins new customers, it can read the competitor’s landing pages with Tavily, then look up the welcome series, the code in the first email and the [save offer](/glossary/save-offer) in its cancel flow with Obsession, each fact dated with its screenshot or the raw email.`,
    },
    {
      kind: 'p',
      text: 'Every Obsession fact links its receipt, so a user can check it without trusting either tool. See one company’s whole record in [the sample data](/sample-output), and the lines every Obsession agent keeps on [the page for companies an agent visits](/agents).',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'Is Obsession a Tavily alternative?',
          a: 'For public web search, no: use Tavily or another search API. Obsession holds what companies show only to signed-up customers, so teams that need both use both.',
        },
        {
          q: 'Who owns Tavily now?',
          a: 'Tavily’s own post of 10 February 2026 says Tavily is joining Nebius, and its logo reads Tavily by Nebius. The same post says the API and data policies remain the same.',
        },
        {
          q: 'Can Tavily read pages behind a login?',
          a: 'Its search and extract pages don’t describe logging in to sites; the only authentication they describe is your API key. Obsession keeps accounts open at the companies you name and keeps what they show signed-up customers.',
        },
        {
          q: 'How much does each cost?',
          a: 'Tavily lists 1,000 free credits a month, $0.008 a credit as you go, a Project plan at $30 a month for 4,000 credits and custom Enterprise plans, read on 11 November 2026. Obsession is in early access and is priced per call or per company watched, never per token.',
        },
      ],
    },
  ],
  sources: [
    { title: 'Tavily: connect your AI agents to the web', publisher: 'Tavily', url: TAVILY },
    { title: 'Tavily is joining Nebius', publisher: 'Tavily', url: TAVILY_NEBIUS, date: '2026-02-10' },
    { title: 'Search endpoint', publisher: 'Tavily docs', url: TAVILY_SEARCH },
    { title: 'Pricing', publisher: 'Tavily', url: TAVILY_PRICING },
    { title: 'Tavily MCP server', publisher: 'Tavily docs', url: TAVILY_MCP },
  ],
  related: [
    'exa-vs-tavily-vs-firecrawl',
    'best-web-search-api-for-ai-agents',
    'exa-alternatives',
    '/compare/obsession-vs-exa',
    '/compare/obsession-vs-parallel',
    '/glossary/web-search-api',
    '/glossary/llm-grounding',
    '/glossary/login-wall',
    '/glossary/save-offer',
    'ai-customers-for-developers',
    '/developers',
    '/sample-output',
  ],
}
