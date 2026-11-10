import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-firecrawl. Every Firecrawl fact is from its own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/dev_apis.json; the home page and pricing re-read the same day). "firecrawl
   alternatives" and "scrape data behind login" belong to the blog (docs/SEARCH.md §2). */

const FC = 'https://www.firecrawl.dev/'
const FC_SCRAPE = 'https://docs.firecrawl.dev/features/scrape'
const FC_MCP = 'https://docs.firecrawl.dev/mcp-server'
const FC_PRICING = 'https://www.firecrawl.dev/pricing'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Firecrawl',
  company: 'Firecrawl',
  line: 'Firecrawl turns public pages into clean data for AI agents. Obsession keeps what companies show only to customers.',
  meta: {
    path: '/compare/obsession-vs-firecrawl',
    title: 'Obsession vs Firecrawl: scraped pages and data behind login',
    description:
      'Obsession vs Firecrawl: Firecrawl scrapes and crawls pages for AI agents; Obsession keeps what companies show only to signed-up customers, dated, by API.',
    answer:
      'In Obsession vs Firecrawl, Firecrawl turns pages into clean data for AI agents and Obsession keeps what companies show only to signed-up customers. Firecrawl reads a page when your code asks, login steps included in a short session; Obsession stays signed up for months and keeps every email, member price, trial limit and cancel offer, each dated with a screenshot. Teams often use Firecrawl for what a company publishes and Obsession for what it sends its customers.',
    ogImage: '/og/compare-obsession-vs-firecrawl.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Firecrawl', path: '/compare/obsession-vs-firecrawl' },
    ],
  },
  title: 'Obsession vs Firecrawl: scraped pages beside what companies show only to customers',
  dek: 'Firecrawl reads a page the moment your code asks, login steps included. Obsession stays signed up for months and keeps every email, price and offer that arrives.',
  primaryKeyword: 'obsession vs firecrawl',
  keywords: ['firecrawl vs obsession', 'firecrawl interact login', 'scrape data behind login api', 'firecrawl pricing'],
  checked: '2026-11-11',
  readingMinutes: 6,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'northwind.example',
    period: 'Example: Northwind is an invented company',
    cols: ['At Northwind', 'Firecrawl', 'Obsession'],
    rows: [
      { name: 'Any public page as markdown', cells: ['Scrape, crawl, map', 'Use a scraper'], tone: 'info' },
      { name: 'Log in and read a page', cells: ['Interact, short session', 'Account open for months'], tone: 'info' },
      { name: 'Day 3 email after sign-up', cells: ['Not described', '20% off, 09:14, DKIM pass'], tone: 'ok' },
      { name: 'Signed-in price over time', cells: ['Not described', 'Pro £24, then £26, dated'], tone: 'ok' },
      { name: 'Offer in the cancel flow', cells: ['Not described', '50% off for 3 months'], tone: 'ok' },
    ],
    notes: ['Firecrawl’s column follows its own pages, read 11 November 2026. Not described means its pages don’t say.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-each-is', text: 'What Firecrawl and Obsession are' },
    { kind: 'h3', id: 'firecrawl', text: 'Firecrawl: web data from any page you point it at' },
    {
      kind: 'p',
      text: `As of 11 November 2026, [Firecrawl’s home page](${FC}) says “Firecrawl is the open-source web data API for AI agents and LLM applications”. Its products are Search, Scrape, Crawl, Map, Parse, Interact and Monitor: find pages, turn them into markdown or JSON, walk a whole site, and check pages again for changes.`,
    },
    {
      kind: 'p',
      text: `For pages behind a login, Firecrawl offers two tools. Its [scrape endpoint](${FC_SCRAPE}) takes actions such as click, write, press and wait before it reads a page, and serves a cached copy younger than 2 days unless you ask for a fresh one. Interact drives a managed browser through multi-step flows; its home page says it supports “login, click, fill” but “is not designed for long-running persistent sessions”. Its pages don’t describe staying signed up to a company for days or keeping the emails a company sends.`,
    },
    { kind: 'h3', id: 'obsession', text: 'Obsession: the web behind the login, kept over time' },
    {
      kind: 'p',
      text: `${ENTITY} Each account stays open for months, so every new email, price and offer lands dated the day it arrives, and nobody writes or maintains login steps for each company.`,
    },

    { kind: 'h2', id: 'at-a-glance', text: 'Firecrawl and Obsession at a glance', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `Firecrawl’s row is from its own pages and [its pricing page](${FC_PRICING}), read 11 November 2026. Obsession’s row is from [the developer page](/developers).`,
      cols: ['Option', 'What it holds', 'How it’s read', 'Freshness and history', 'Price as listed', 'Best for'],
      rows: [
        [
          'Firecrawl: Search, Scrape, Crawl, Map, Interact, Monitor',
          'Any page you point it at, as markdown or JSON',
          'API, SDKs, CLI and an MCP server',
          'Cache up to 2 days, or fresh\nMonitor checks pages again',
          'Free: 1,000 credits a month\nStandard $99 a month\nScale $749 a month',
          'Turning public pages into data',
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

    { kind: 'h2', id: 'when-to-use', text: 'When to use Firecrawl, and when to use Obsession' },
    {
      kind: 'list',
      items: [
        '**Use Firecrawl** to read pages on demand: a competitor’s docs, a whole site crawled into your own search, a public pricing page turned into JSON, or a page you check again each week. It is open source, so a team can run it itself.',
        '**Use Obsession** for what a company shows only after someone becomes its customer: the welcome email and the 3 that follow, the price a signed-in member pays, the limit on the free plan and the save offer in the cancel flow. Those arrive over days and weeks, after a [login wall](/glossary/login-wall), so a request that lasts minutes never sees them.',
        '**Build it yourself, or look it up.** With [web scraping](/glossary/web-scraping) tools or a [headless browser](/glossary/headless-browser), a team writes the login steps for each company, keeps an inbox per account and stores every capture. Obsession does that for any company you name, and keeps the history for as long as you follow it.',
      ],
    },

    { kind: 'h2', id: 'together', text: 'Using Firecrawl and Obsession together' },
    {
      kind: 'p',
      text: `Both run as MCP servers ([Firecrawl’s is in its docs](${FC_MCP}); Obsession’s install line is on [the developer page](/developers)), so one agent can call both. Firecrawl reads the competitor’s public site; Obsession returns what that competitor emailed new customers this month and the price a signed-in member sees, each with its receipt: the raw email with its DKIM result, or the page as captured.`,
    },
    {
      kind: 'p',
      text: 'To see one company’s record end to end, open [the sample data](/sample-output). An Obsession agent never gets round a CAPTCHA or a bot block; where a site puts one in front of a step, the record names the step it couldn’t reach ([the lines every agent keeps](/agents)).',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'Can Firecrawl scrape pages behind a login?',
          a: 'Yes, for a session. Its scrape actions and its Interact endpoint can fill a login form and read the page after it, and Interact can save a browser profile for later scrapes. Its home page says Interact is not designed for long-running persistent sessions.',
        },
        {
          q: 'Is Obsession a Firecrawl alternative?',
          a: 'For scraping public pages, no: use Firecrawl or another scraper. Obsession holds what companies show only to signed-up customers, kept over months, so teams that need both use both.',
        },
        {
          q: 'Does Firecrawl keep the emails a company sends?',
          a: 'Its pages don’t describe it. Obsession keeps every email a company sends a new subscriber, dated as it arrived, with its sender checked.',
        },
        {
          q: 'How much does each cost?',
          a: 'Firecrawl lists a free plan with 1,000 credits a month, Hobby at $19, Standard at $99, Growth at $399 and Scale at $749 a month, read on 11 November 2026. Obsession is in early access and is priced per call or per company watched, never per token.',
        },
      ],
    },
  ],
  sources: [
    { title: 'Firecrawl: the web data API for AI', publisher: 'Firecrawl', url: FC },
    { title: 'Scrape', publisher: 'Firecrawl docs', url: FC_SCRAPE },
    { title: 'Pricing', publisher: 'Firecrawl', url: FC_PRICING },
    { title: 'Firecrawl MCP server', publisher: 'Firecrawl docs', url: FC_MCP },
  ],
  related: [
    'scrape-data-behind-login',
    'exa-vs-tavily-vs-firecrawl',
    'can-ai-agents-log-in-to-websites',
    '/compare/obsession-vs-exa',
    '/compare/obsession-vs-browserbase',
    '/glossary/web-scraping',
    '/glossary/headless-browser',
    '/glossary/login-wall',
    '/glossary/point-in-time-data',
    'long-running-ai-agents',
    'ai-customers-for-developers',
    '/developers',
    '/sample-output',
  ],
}
