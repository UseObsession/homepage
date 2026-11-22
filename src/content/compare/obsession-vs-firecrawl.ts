import { prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-firecrawl (22 Nov 2026 rewrite, the pieces position). Firecrawl's facts: its home page as read
   for _research/commercial-view-21nov/research/B_browsers_web_agents.json (21 Nov 2026), its pricing page re-read
   22 Nov 2026. The angle: Firecrawl reads the public web well; Obsession gives the agent its own browser that stays
   signed in, an inbox and a number; many teams use both. "firecrawl alternatives" and "scrape data behind login" stay
   with the blog guides (docs/SEARCH.md §2). Obsession's prices come from prices.ts. */

const FC = 'https://www.firecrawl.dev/'
const FC_PRICING = 'https://www.firecrawl.dev/pricing'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Firecrawl',
  company: 'Firecrawl',
  line: 'Firecrawl turns web pages into clean data for AI agents. Obsession gives an agent a browser that stays signed in, an inbox and a number.',
  meta: {
    path: '/compare/obsession-vs-firecrawl',
    title: 'Obsession vs Firecrawl (2026): scrape or stay signed in',
    description:
      'Obsession vs Firecrawl: Firecrawl scrapes and crawls pages for AI agents. Obsession gives an agent a browser that stays signed in, an inbox and a number.',
    answer:
      'Firecrawl turns web pages into clean markdown and JSON for AI agents, and does it well. Obsession gives an agent its own browser that stays signed in for weeks, plus an inbox and a phone number for the codes a site sends. Many teams use both, Firecrawl to read public sites and Obsession for the portals and accounts an agent signs in to.',
    ogImage: '/og/compare-obsession-vs-firecrawl.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Firecrawl', path: '/compare/obsession-vs-firecrawl' },
    ],
  },
  title: 'Obsession vs Firecrawl: scrape a page, or stay signed in for weeks',
  dek: 'Firecrawl reads any page your code points it at and hands back clean data. Obsession gives your agent a browser, an email address and a phone number that stay its own.',
  primaryKeyword: 'obsession vs firecrawl',
  keywords: ['firecrawl vs obsession', 'firecrawl pricing', 'firecrawl interact login', 'firecrawl persistent session'],
  checked: '2026-11-22',
  readingMinutes: 5,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'One agent, one supplier portal',
    period: 'From Firecrawl’s own pages, read 21 and 22 Nov 2026',
    cols: ['The job', 'Firecrawl', 'Obsession'],
    rows: [
      { name: 'Any public page as markdown', cells: ['Scrape, crawl, map', 'Use a scraper'], tone: 'info' },
      { name: 'Log in and click through', cells: ['Interact, short sessions', 'Its own browser'], tone: 'info' },
      { name: 'Still signed in next week', cells: ['Not for long sessions', 'Logins kept between sessions'], tone: 'ok' },
      { name: 'Receive the login code', cells: ['Not on its pages', `Inbox ${prices.inbox.amount}, number ${prices.number.amount} a month`], tone: 'ok' },
      { name: 'Run code on the file it downloads', cells: ['Not on its pages', `Sandbox, ${prices.sandbox.amount} a vCPU hour`], tone: 'ok' },
    ],
    notes: ['Not on its pages means Firecrawl’s pages don’t describe it.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-firecrawl-does', text: 'What Firecrawl does well' },
    {
      kind: 'p',
      text: `As listed on 21 November 2026, [Firecrawl’s home page](${FC}) calls it “the open-source web data API for AI agents and LLM applications”. Its products are Search, Scrape, Crawl, Map, Parse, Interact, Agent and Monitor, with SDKs in Python, Node.js, Go and Rust and an MCP server. Its logos include Apple, Shopify, Canva and Zapier.`,
    },
    {
      kind: 'p',
      text: 'Interact drives a managed browser through logins, clicks and forms. Its home page says Interact isn’t built for long, persistent sessions. Its pages don’t describe an inbox or a phone number for the agent.',
    },
    {
      kind: 'p',
      text: `On [its pricing page](${FC_PRICING}), as listed on 22 November 2026, Free is 1,000 credits a month. Hobby is $19 a month, Standard $99, Growth $399 and Scale $749, from 5,000 to 1,000,000 credits. Enterprise is priced on request.`,
    },

    { kind: 'h2', id: 'what-obsession-gives', text: 'What Obsession gives the same agent' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `Its [browser](/browser) signs in once and starts the next session still signed in, at ${prices.browser.amount} an hour with its home connection included. Your agent drives it with Playwright, Puppeteer or any Chrome DevTools Protocol tool. Its own [inbox](/email) and [number](/phone) receive the codes a portal sends at login.`,
    },

    { kind: 'h2', id: 'side-by-side', text: 'Firecrawl and Obsession side by side', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `Firecrawl’s row is from its own pages and [its pricing page](${FC_PRICING}), read 21 and 22 November 2026. Obsession’s row is from [pricing](/pricing).`,
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Firecrawl: Search, Scrape, Crawl, Map, Interact, Monitor',
          'Any page as markdown or JSON, whole sites crawled, open source',
          'Free: 1,000 credits a month\nStandard $99 a month\nScale $749 a month',
          'Interact isn’t built for long sessions; no inbox or number on its pages',
          'Turning public pages into data',
        ],
        [
          'Obsession (ours): Browser, Email, Phone, Messaging, Sandbox, Personas',
          'A browser that stays signed in, with the inbox and number for every code',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'No crawler of its own',
          'Agents that work inside portals and accounts',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use each' },
    {
      kind: 'list',
      items: [
        '**Use Firecrawl** to read pages on demand: a supplier’s docs, a whole site crawled into your search, or a public price list turned into JSON. It is open source, so a team can run it itself.',
        '**Use Obsession** when the agent works inside an account, day after day. It signs in to a supplier portal each morning, reads the code from its own inbox or number, and downloads the order list.',
        '**Use both** for a support or operations agent. Firecrawl keeps its knowledge base fresh from public sites. Obsession gives it the portal logins, inbox and number it acts with.',
      ],
    },

    { kind: 'h2', id: 'one-identity', text: 'The browser, inbox and number under one name' },
    {
      kind: 'p',
      text: 'obsession.personas.create({ inbox: true, phone: "US", browser: true }) gives one agent all three. A persona is an AI agent with its own inbox, number and browser under one name. It costs nothing while it waits between runs.',
    },
    {
      kind: 'p',
      text: 'Each page it opens arrives in your event log as page.visited, beside every email.received and sms.received, in order and dated. A file it downloads can go straight into a [sandbox](/sandbox) to be read, with sandbox.finished when the run ends.',
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
          q: 'Can Firecrawl scrape pages behind a login?',
          a: 'Yes, for a session. Interact can log in, click and fill forms before it reads a page. Its home page says Interact isn’t built for long, persistent sessions, as read on 21 November 2026.',
        },
        {
          q: 'Is Obsession a Firecrawl alternative?',
          a: 'For scraping and crawling public pages, no. Use Firecrawl or another scraper. Obsession gives an agent a browser that stays signed in for weeks, with its own inbox and number, so many teams use both.',
        },
        {
          q: 'How much does each cost?',
          a: `Firecrawl lists Free with 1,000 credits a month, then Hobby at $19, Standard at $99, Growth at $399 and Scale at $749 a month, read on 22 November 2026. Obsession is free to start, then $20, $99 or $499 a month. Its browser hour is ${prices.browser.amount}, an inbox ${prices.inbox.amount} a month and a number ${prices.number.amount} a month.`,
          link: { label: 'See pricing', to: '/pricing' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Firecrawl: the web data API for AI', publisher: 'Firecrawl', url: FC },
    { title: 'Pricing', publisher: 'Firecrawl', url: FC_PRICING },
  ],
  related: [
    'scrape-data-behind-login',
    'exa-vs-tavily-vs-firecrawl',
    'can-ai-agents-log-in-to-websites',
    '/compare/obsession-vs-browserbase',
    '/compare/obsession-vs-exa',
    '/browser',
    '/email',
    '/sandbox',
    '/personas',
    '/developers',
    '/glossary/web-scraping',
    '/glossary/headless-browser',
    'long-running-ai-agents',
  ],
}
