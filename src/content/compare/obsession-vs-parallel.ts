import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-parallel. Every Parallel fact is from its own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/dev_apis.json; the home page and pricing re-read the same day). */

const PARALLEL = 'https://parallel.ai/'
const PARALLEL_SEARCH = 'https://docs.parallel.ai/search/search-quickstart'
const PARALLEL_MCP = 'https://docs.parallel.ai/integrations/mcp/search-mcp'
const PARALLEL_PRICING = 'https://parallel.ai/pricing'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Parallel',
  company: 'Parallel',
  line: 'Parallel searches, extracts and monitors the public web for AI. Obsession keeps what companies show only to customers.',
  meta: {
    path: '/compare/obsession-vs-parallel',
    title: 'Obsession vs Parallel: web research and data behind login',
    description:
      'Obsession vs Parallel: Parallel searches, extracts and monitors the public web for agents; Obsession keeps what companies show only to signed-up customers.',
    answer:
      'In Obsession vs Parallel, Parallel searches, extracts and monitors the public web for AI and Obsession keeps what companies show only to signed-up customers. Parallel works on an index of billions of public pages, with webhook alerts; Obsession keeps the emails after a sign-up, member prices, quotes and cancel offers, each dated with a screenshot. Teams can run both, Parallel on what the web publishes and Obsession on what a company sends its customers.',
    ogImage: '/og/compare-obsession-vs-parallel.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Parallel', path: '/compare/obsession-vs-parallel' },
    ],
  },
  title: 'Obsession vs Parallel: web research beside what companies show only to customers',
  dek: 'Parallel researches and monitors the public web for your agents. Obsession keeps what a company sends and shows its customers.',
  primaryKeyword: 'obsession vs parallel',
  keywords: ['parallel vs obsession', 'parallel web systems', 'parallel monitor api', 'parallel task api'],
  checked: '2026-11-11',
  readingMinutes: 5,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'northwind.example',
    period: 'Example: Northwind is an invented company',
    cols: ['At Northwind', 'Parallel', 'Obsession'],
    rows: [
      { name: 'Research across the web', cells: ['Task API, cited', 'Use a research API'], tone: 'info' },
      { name: 'A public page changes', cells: ['Monitor API, webhook', 'Not its job'], tone: 'info' },
      { name: 'A new email arrives', cells: ['Not described', 'Webhook, 09:14, DKIM pass'], tone: 'ok' },
      { name: 'Signed-in price', cells: ['Not described', 'Pro £24, with screenshot'], tone: 'ok' },
      { name: 'Quote behind a form', cells: ['Not described', '£289 a month over 36'], tone: 'ok' },
    ],
    notes: ['Parallel’s column follows its own pages, read 11 November 2026. Not described means its pages don’t say.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-each-is', text: 'What Parallel and Obsession are' },
    { kind: 'h3', id: 'parallel', text: 'Parallel: search, extract and monitor the public web' },
    {
      kind: 'p',
      text: `As of 11 November 2026, [Parallel’s home page](${PARALLEL}) reads “Where agents find answers” and describes “Web infrastructure for AI to search, extract, monitor, and reason over the world’s information”. Its products are the Task, Monitor, FindAll, Search and Extract APIs on the Parallel Web Index, which it says “contains billions of pages, and millions are added or updated daily”, with a live crawl you can force for time-sensitive queries.`,
    },
    {
      kind: 'p',
      text: `Its [search quickstart](${PARALLEL_SEARCH}) shows Python and TypeScript SDKs. The Monitor API watches public pages and posts changes to a webhook. Its pages don’t describe logging in to sites or what a company sends people who sign up.`,
    },
    { kind: 'h3', id: 'obsession', text: 'Obsession: the web behind the login' },
    {
      kind: 'p',
      text: `${ENTITY} Its notify verb posts each new fact to your webhook the moment it lands, so a welcome email, a new member price or a renewal notice reaches your agent the day the company sends it.`,
    },

    { kind: 'h2', id: 'at-a-glance', text: 'Parallel and Obsession at a glance', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `Parallel’s row is from its own pages and [its pricing page](${PARALLEL_PRICING}), read 11 November 2026. Obsession’s row is from [the developer page](/developers).`,
      cols: ['Option', 'What it holds', 'How it’s read', 'Freshness and history', 'Price as listed', 'Best for'],
      rows: [
        [
          'Parallel: Task, Monitor, FindAll, Search, Extract',
          'An index of billions of public pages',
          'API, SDKs and an MCP server',
          'Millions of pages updated daily\nLive crawl on request',
          'Search from $1 per 1,000\nTask from $5 per 1,000\nScale $1,000 a month',
          'Deep research and monitoring of public pages',
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

    { kind: 'h2', id: 'when-to-use', text: 'When to use Parallel, and when to use Obsession' },
    {
      kind: 'list',
      items: [
        '**Use Parallel** for research and monitoring on the public web: a cited answer across many sources, a list of companies that match a rule, or an alert when a public page changes.',
        '**Use Obsession** for what a company shows only to its customers: the emails and texts after a sign-up, the price a signed-in member pays, the quote a form gives one customer profile and the offer in the cancel flow. Each sits behind a [login wall](/glossary/login-wall).',
        '**Use both** when a monitor needs both sides: Parallel’s alert when a competitor’s pricing page changes, and Obsession’s record of the email it sent existing customers about it, dated, with the raw email behind it.',
      ],
    },

    { kind: 'h2', id: 'together', text: 'Using Parallel and Obsession together' },
    {
      kind: 'p',
      text: `Parallel documents its MCP server [in its docs](${PARALLEL_MCP}); Obsession’s install line is on [the developer page](/developers). Both send webhooks, so one pipeline can take Parallel’s public-page changes and Obsession’s new facts into the same table, and an agent can answer with what a company says in public and what it actually sends customers.`,
    },
    {
      kind: 'p',
      text: 'Obsession’s history starts the day a company is covered and builds for as long as anyone follows it, so it is the part of the picture that can’t be filled in later. See one real record in [the sample data](/sample-output).',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'Is Obsession a Parallel alternative?',
          a: 'For public web research, no: use Parallel or another search and research API. Obsession holds what companies show only to signed-up customers, so most teams that need both use both.',
        },
        {
          q: 'Do both send webhooks?',
          a: 'Yes. Parallel’s Monitor API posts changes to public pages, and Obsession’s notify verb posts each new fact, such as an email, a price or an offer, the moment it lands.',
        },
        {
          q: 'Can Parallel read pages behind a login?',
          a: 'Its pages describe public pages, PDFs and sites heavy with JavaScript, and don’t describe logging in. Obsession keeps accounts open at the companies you name.',
        },
        {
          q: 'How much does each cost?',
          a: 'Parallel lists Search from $1 per 1,000 requests, Task from $5 per 1,000 runs, Monitor from $3 per 1,000 checks and a Scale plan at $1,000 a month, read on 11 November 2026. Obsession is in early access and is priced per call or per company watched, never per token.',
        },
      ],
    },
  ],
  sources: [
    { title: 'Parallel: where agents find answers', publisher: 'Parallel', url: PARALLEL },
    { title: 'Search quickstart', publisher: 'Parallel docs', url: PARALLEL_SEARCH },
    { title: 'Pricing', publisher: 'Parallel', url: PARALLEL_PRICING },
    { title: 'Search MCP', publisher: 'Parallel docs', url: PARALLEL_MCP },
  ],
  related: [
    'best-web-search-api-for-ai-agents',
    'exa-vs-tavily-vs-firecrawl',
    '/compare/obsession-vs-exa',
    '/compare/obsession-vs-tavily',
    '/glossary/web-search-api',
    '/glossary/login-wall',
    '/glossary/point-in-time-data',
    'long-running-ai-agents',
    'what-to-build-with-ai-customers',
    '/developers',
    '/sample-output',
  ],
}
