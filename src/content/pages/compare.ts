import { consoleHeading } from '../console'
import { prices } from '../prices'
import type { Compare, Page } from '../types'

/* /compare (22 Nov 2026 rewrite, the pieces position): the hub of the comparisons. Others give an agent one way in;
   Obsession gives it all of them, under one identity. The table, then each company on its own line in the order the
   comparison pages run: the pieces (AgentMail, Browserbase), the search APIs (Exa, Firecrawl, Tavily, Parallel), then
   the blueprint comparisons (MailCharts, Panoramata, Klue). AgentMail, Browserbase and the search APIs were checked
   21 and 22 Nov 2026 (_research/commercial-view-21nov/research/, pricing pages re-read 22 Nov); the archive and
   battlecard lines keep their October and November facts. A mark of No means the company's own pages don't describe it.
   Obsession's prices come from prices.ts. */

const start = {
  kind: 'waitlist',
  button: 'Start free',
  interest: 'any',
} as const

const table: Compare = {
  heading: 'Others give an agent one way in. Obsession gives it all of them.',
  line: 'From each company’s own pages, read 21 and 22 November 2026.',
  cols: [
    { name: 'Obsession', who: 'Every piece, one API' },
    { name: 'Email APIs', who: 'AgentMail' },
    { name: 'Cloud browsers', who: 'Browserbase' },
    { name: 'Search APIs', who: 'Exa, Firecrawl, Tavily, Parallel' },
    { name: 'Email archives', who: 'MailCharts, Panoramata' },
    { name: 'Competitive intelligence', who: 'Klue, Crayon' },
  ],
  rows: [
    { label: 'An inbox that sends and receives', cells: ['yes', 'yes', 'no', 'no', 'no', 'no'] },
    { label: 'A phone number for texts and calls', cells: ['yes', 'no', 'no', 'no', 'no', 'no'] },
    { label: 'A browser that keeps its logins', cells: ['yes', 'no', 'yes', 'part', 'no', 'no'] },
    { label: 'A sandbox to run code', cells: ['yes', 'no', 'yes', 'no', 'no', 'no'] },
    { label: 'Every piece under one identity', cells: ['yes', 'no', 'no', 'no', 'no', 'no'] },
    { label: 'One key and one bill for every piece', cells: ['yes', 'no', 'part', 'no', 'no', 'no'] },
    { label: 'Search across the public web', cells: ['no', 'no', 'yes', 'yes', 'no', 'part'] },
    { label: 'Competitors’ emails and texts, kept and dated', cells: ['yes', 'no', 'no', 'no', 'part', 'no'] },
  ],
  legend: { yes: 'Yes', part: 'Partly', no: 'No' },
  foot: 'No means the company’s own pages don’t describe it. Partly means some of it. Firecrawl’s Interact keeps a login for a short session. Browserbase’s one key covers its browsers, search and identity tools. Klue and Crayon collect what competitors publish. Email archives keep the brands on their own list or your plan.',
}

export const page: Page = {
  meta: {
    path: '/compare',
    title: 'Obsession compared: AgentMail, Browserbase, Exa, Firecrawl',
    description:
      'Obsession compared with AgentMail, Browserbase, Exa, Firecrawl, Tavily and Parallel: what each gives an AI agent, from each company’s own pages, priced.',
    answer:
      'Others give an agent one way in. Obsession gives it all of them, under one identity. AgentMail gives an agent email, Browserbase a browser, and Exa, Firecrawl, Tavily and Parallel search the public web. Obsession puts an inbox, a phone number, messaging, a browser and a sandbox on one API and one bill.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
    ],
  },

  hero: {
    pill: '',
    headline: 'Obsession compared with AgentMail, Browserbase and the search APIs',
    sub: 'Others give an agent one way in. Obsession gives it all of them, under one identity. Each comparison starts with what the other company does well, from its own pages, with its prices dated.',
    capture: { ...start, source: 'compare-hero' },
    proof: [],
    consoleHeading,
  },

  compare: table,

  parity: {
    heading: 'Pick the tool for the job, or use two together.',
    line: 'Each does its own job well, and many teams run one beside Obsession. Prices for AgentMail, Browserbase and the search APIs are as each listed them on 22 November 2026.',
    items: [
      {
        tool: 'AgentMail',
        job: 'Pick it when your agents work only by email.',
        data: 'Email inboxes for AI agents by API, with SDKs, an MCP server, custom domains and webhooks. Free for 3 inboxes, then $20 or $200 a month.',
      },
      {
        tool: 'Browserbase',
        job: 'Pick it for browsers at high volume, with search, fetch and session replays.',
        data: 'Cloud browsers, Stagehand, Search and Fetch, Sandboxes and Agent Identity. Free for 1 browser hour, then $20 or $99 a month, plus proxy data by the GB.',
      },
      {
        tool: 'Exa',
        job: 'Pick it to search the public web and enrich company and people data.',
        data: 'Search, Contents, Monitors and Websets over its own index, with an MCP server. $10 of free credit a month, then search from $4 per 1,000 requests.',
      },
      {
        tool: 'Firecrawl',
        job: 'Pick it to turn public pages into clean data.',
        data: 'Open source. Search, scrape, crawl and map sites into markdown or JSON. Free for 1,000 credits a month, then from $19 a month.',
      },
      {
        tool: 'Tavily',
        job: 'Pick it for real-time web search in one call.',
        data: 'Search, Extract, Research, Crawl and Map, now Tavily by Nebius. 1,000 free credits a month, then $0.008 a credit.',
      },
      {
        tool: 'Parallel',
        job: 'Pick it for deep research and alerts on public pages.',
        data: 'Task, Monitor, FindAll, Search and Extract on an index of billions of pages. Search from $1 per 1,000 requests.',
      },
      {
        tool: 'Panoramata',
        job: 'Pick it for one place to follow a set list of competitors across channels.',
        data: 'Newsletters, flows, ads, landing pages, SMS and socials for the competitors on your plan: 20 on Startup, from $99 a month, with 6 months of history.',
      },
      {
        tool: 'MailCharts',
        job: 'Pick it to plan email and SMS campaigns from a hand picked index of ecommerce brands.',
        data: 'Signs up to and triggers the journeys of its own index of more than 2,500 hand picked brands, and sorts them. Now part of Validity; pricing on request.',
      },
      {
        tool: 'Klue and Crayon',
        job: 'Pick them when a sales team needs battlecards kept in one place.',
        data: 'Collect news, site changes, reviews and what your reps hear, and turn it into battlecards.',
      },
      {
        tool: 'Several vendors',
        job: 'Pick it when each piece already has an owner on your team.',
        data: 'An email API, a phone provider, a browser and a sandbox, each with its own key, webhook and bill.',
      },
    ],
  },

  faq: {
    heading: 'Questions about the comparison.',
    items: [
      {
        q: 'How is Obsession different from AgentMail?',
        a: `AgentMail gives AI agents email inboxes by API. Obsession gives them inboxes too, at ${prices.inbox.amount} an inbox a month, and puts a phone number, messaging, a browser and a sandbox on the same key and bill.`,
      },
      {
        q: 'How is it different from Browserbase?',
        a: `Both give an agent a cloud browser that keeps its logins. Obsession’s browser hour is ${prices.browser.amount} with its home connection included and no charge per GB, and the agent gets its own inbox and number for login codes. Browserbase adds search and fetch APIs on the same account.`,
      },
      {
        q: 'Does Obsession replace Exa, Firecrawl, Tavily or Parallel?',
        a: 'No. They search and read the public web well. Obsession gives the agent its own browser that stays signed in, an inbox and a phone number, so many teams use both.',
      },
      {
        q: 'How is it different from MailCharts, Panoramata or Klue?',
        a: 'They give marketing and sales teams a library of campaigns or a home for battlecards. Obsession runs the competitor tracking and email and SMS tracking blueprints on the competitors you choose, and keeps every email and text dated as it arrives.',
      },
      {
        q: 'Is this comparison fair?',
        a: 'We read each company’s own pages and mark what those pages show, with the date we read them. If something here is wrong or out of date, tell us and we’ll fix it.',
      },
    ],
  },

  final: {
    heading: 'Give every AI agent its own phone, inbox and browser.',
    sub: 'Free plan, no credit card. One API and one bill for every piece.',
    capture: { ...start, source: 'compare-final' },
    link: { label: 'See pricing', to: '/pricing' },
  },
}
