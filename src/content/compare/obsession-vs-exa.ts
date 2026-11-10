import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-exa. Every Exa fact is from Exa's own pages, read 11 Nov 2026 (_research/seo/pagetypes-11nov/
   research/dev_apis.json, quotes re-read the same day). Exa says it searches "the largest index of public web and
   private information" and defines private information nowhere on its pages, so this page quotes it and contrasts only
   what both pages describe. "exa alternatives" and "exa vs tavily" belong to the blog (docs/SEARCH.md §2). */

const EXA = 'https://exa.ai/'
const EXA_INDEX = 'https://docs.exa.ai/reference/the-exa-index'
const EXA_CONNECT = 'https://exa.ai/connect'
const EXA_SEARCH = 'https://docs.exa.ai/reference/search'
const EXA_MCP = 'https://docs.exa.ai/reference/exa-mcp'
const EXA_PRICING = 'https://exa.ai/pricing'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Exa',
  company: 'Exa',
  line: 'Exa searches the public web for AI agents. Obsession keeps what companies show only to signed-up customers.',
  meta: {
    path: '/compare/obsession-vs-exa',
    title: 'Obsession vs Exa: the public web and the web behind login',
    description:
      'Obsession vs Exa: Exa searches the public web for AI agents; Obsession keeps what companies show only to signed-up customers. What each holds, and price.',
    answer:
      'In Obsession vs Exa, Exa searches the public web for AI agents and Obsession keeps what companies show only to signed-up customers. Exa returns pages anyone can open, live or as stored copies, plus company and people data from its partners; Obsession returns the emails after a sign-up, member prices, trial limits and cancel offers, each dated with a screenshot. Many agent teams use both, Exa for what a company publishes and Obsession for what it sends and shows its customers.',
    ogImage: '/og/compare-obsession-vs-exa.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Exa', path: '/compare/obsession-vs-exa' },
    ],
  },
  title: 'Obsession vs Exa: the public web beside what companies show only to customers',
  dek: 'Exa gives AI agents the public web and the data it licenses, searched in one call. Obsession gives them what a company shows after the sign-up, kept for as long as you follow it.',
  primaryKeyword: 'obsession vs exa',
  keywords: ['exa vs obsession', 'exa private information', 'web data behind login for ai agents', 'exa search api'],
  checked: '2026-11-11',
  readingMinutes: 6,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'northwind.example',
    period: 'Example: Northwind is an invented company',
    cols: ['At Northwind', 'Exa', 'Obsession'],
    rows: [
      { name: 'Articles about Northwind', cells: ['Searched in 1 call', 'Use a search API'], tone: 'info' },
      { name: 'Pricing page', cells: ['Pro £29, live or stored', 'Pro £29, dated'], tone: 'info' },
      { name: 'Day 3 email after sign-up', cells: ['Not described', '20% off, 09:14, DKIM pass'], tone: 'ok' },
      { name: 'Signed-in price', cells: ['Not described', 'Pro £24, with screenshot'], tone: 'ok' },
      { name: 'Offer in the cancel flow', cells: ['Not described', '50% off for 3 months'], tone: 'ok' },
    ],
    notes: ['Exa’s column follows its own pages, read 11 November 2026. Not described means its pages don’t say.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-each-is', text: 'What Exa and Obsession are' },
    { kind: 'h3', id: 'exa', text: 'Exa: search over the public web' },
    {
      kind: 'p',
      text: `As of 11 November 2026, [Exa’s home page](${EXA}) calls Exa “The world’s data for AI agents” and says it searches “the largest index of public web and private information”. Its products include a Search API, a Contents API, an Agent API, a Monitors API, Websets and an MCP server, so an agent can find pages, read them and watch for new ones in a single call.`,
    },
    {
      kind: 'p',
      text: `Exa’s pages don’t define private information. Its [index page](${EXA_INDEX}) says it “searches the public web and select private data sources, with coverage refreshed continuously”, and [Exa Connect](${EXA_CONNECT}) links agents to licensed data providers such as Crunchbase, ZoomInfo and Similarweb. Its pages don’t describe creating accounts at the companies it covers or keeping what those companies send their customers.`,
    },
    { kind: 'h3', id: 'obsession', text: 'Obsession: the web behind the login' },
    {
      kind: 'p',
      text: `${ENTITY} Each account stays open for months, so what a company sends every new subscriber joins the index the day it arrives, and a company already covered comes back with its history in one call.`,
    },

    { kind: 'h2', id: 'at-a-glance', text: 'Exa and Obsession at a glance', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `Exa’s row is from its own pages and [its pricing page](${EXA_PRICING}), read 11 November 2026. Obsession’s row is from [the developer page](/developers).`,
      cols: ['Option', 'What it holds', 'How it’s read', 'Freshness and history', 'Price as listed', 'Best for'],
      rows: [
        [
          'Exa: Search, Contents, Monitors, Websets',
          'The public web, plus select private data sources',
          'API, SDKs and an MCP server',
          'Live fetch on request\nStored copies of pages by date',
          '$10 free credit a month\nSearch from $4 per 1,000\nEnterprise $12,000 a year',
          'Finding and reading public pages',
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

    { kind: 'h2', id: 'when-to-use', text: 'When to use Exa, and when to use Obsession' },
    {
      kind: 'list',
      items: [
        `**Use Exa** when the answer is on a page anyone can open: news about a company, its docs, its public pricing page, or research across thousands of sites. Its [search reference](${EXA_SEARCH}) lets an agent ask for a live fetch (maxAgeHours 0, “fetched within the last 60 seconds”) or for the stored version of a page as of a past date (snapshotAsOf).`,
        '**Use Obsession** when the answer exists only for customers: the 3 emails a competitor sends in its first week, the price a signed-in member pays, the point where a free plan stops, the offer someone gets when they try to cancel. Those facts sit behind a [login wall](/glossary/login-wall), so a search index never holds them.',
        '**Use both** when an agent answers questions about a named company. Search gives it what the company says in public; Obsession gives it what the company actually sends and shows a customer, with the receipt.',
      ],
    },

    { kind: 'h2', id: 'together', text: 'Using Exa and Obsession together' },
    {
      kind: 'p',
      text: `An agent connects both over MCP, the protocol AI assistants use to call tools ([Model Context Protocol](/glossary/model-context-protocol)). Exa lists its server on [its MCP page](${EXA_MCP}); Obsession’s install line is on [the developer page](/developers). Ask for a competitor’s pricing and the agent can pair Exa’s copy of the public pricing page with Obsession’s [member price](/glossary/member-price) and the welcome email that offered 20% off, each dated.`,
    },
    {
      kind: 'p',
      text: 'The two never overlap on work: Exa reads what a company publishes, and Obsession stays signed up to keep what it sends. Neither replaces the other, and an agent that calls both answers with the whole picture. To see what one company’s record looks like, open [the sample data](/sample-output), a real UK skincare store from September 2026.',
    },
    {
      kind: 'note',
      title: 'How Obsession’s agents behave',
      text: 'An Obsession agent signs up the way any customer can, says it’s an AI when it talks to a person, and never gets round a CAPTCHA or a bot block. Where a site puts one in front of a step, the record names the step it couldn’t reach. The full lines are on [the page for companies an agent visits](/agents).',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'Is Obsession an Exa alternative?',
          a: 'For public web search, no: use Exa or another search API. Obsession holds a different web, what companies show only to signed-up customers, so most teams that need both call both.',
        },
        {
          q: 'What does Exa mean by private information?',
          a: 'Exa’s pages don’t define it. Its index page says it searches the public web and select private data sources, and Exa Connect links agents to licensed providers such as Crunchbase and ZoomInfo. None of its pages describe the emails or signed-in prices a company shows its own customers.',
        },
        {
          q: 'Does Exa keep history?',
          a: 'Exa can return the newest stored version of a public page as of a past date, from its own crawl. Obsession keeps what a company sent and showed a signed-up customer, from the day the account opened, each fact dated with its screenshot or the raw email.',
        },
        {
          q: 'How much does each cost?',
          a: 'Exa lists $10 of free credit a month, search from $4 per 1,000 requests and an Enterprise plan at $12,000 a year, read on 11 November 2026. Obsession is in early access and is priced per call or per company watched, never per token.',
        },
        {
          q: 'Can my agent call both?',
          a: 'Yes. Both run as MCP servers and plain HTTP APIs, so an agent can search the public web with Exa and look up a company’s emails, prices and offers with Obsession in the same conversation.',
          link: { label: 'See the API and MCP', to: '/developers' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Exa: the world’s data for AI agents', publisher: 'Exa', url: EXA },
    { title: 'The Exa index', publisher: 'Exa docs', url: EXA_INDEX },
    { title: 'Exa Connect', publisher: 'Exa', url: EXA_CONNECT },
    { title: 'Search reference', publisher: 'Exa docs', url: EXA_SEARCH },
    { title: 'Exa MCP', publisher: 'Exa docs', url: EXA_MCP },
    { title: 'Pricing', publisher: 'Exa', url: EXA_PRICING },
  ],
  related: [
    'exa-vs-tavily-vs-firecrawl',
    'exa-alternatives',
    'best-web-search-api-for-ai-agents',
    '/compare/obsession-vs-tavily',
    '/compare/obsession-vs-parallel',
    '/compare/obsession-vs-firecrawl',
    '/glossary/web-search-api',
    '/glossary/llm-grounding',
    '/glossary/login-wall',
    '/glossary/model-context-protocol',
    'ai-customers-for-developers',
    'what-to-build-with-ai-customers',
    '/developers',
    '/sample-output',
  ],
}
