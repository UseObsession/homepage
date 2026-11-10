import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-browserbase. Every Browserbase fact is from its own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/dev_apis.json; the home page, contexts docs and pricing re-read the same
   day). Browserbase gives a developer's agent cloud browsers; Obsession returns what companies showed signed-up
   customers, already collected. Its CAPTCHA claim is stated as its own; Obsession's line is the one on /agents. */

const BB = 'https://www.browserbase.com/'
const BB_CONTEXTS = 'https://docs.browserbase.com/features/contexts'
const BB_MCP = 'https://docs.browserbase.com/integrations/mcp/setup'
const BB_PRICING = 'https://www.browserbase.com/pricing'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Browserbase',
  company: 'Browserbase',
  line: 'Browserbase gives your agent cloud browsers to drive. Obsession returns what companies showed signed-up customers, dated.',
  meta: {
    path: '/compare/obsession-vs-browserbase',
    title: 'Obsession vs Browserbase: cloud browsers, data behind login',
    description:
      'Obsession vs Browserbase: Browserbase runs cloud browsers your agent drives; Obsession keeps what companies show only to signed-up customers, dated.',
    answer:
      'In Obsession vs Browserbase, Browserbase runs cloud browsers your agent drives and Obsession keeps what companies show only to signed-up customers. Browserbase browsers log in, navigate and keep login state between sessions while your code runs; Obsession has already collected the emails after a sign-up, member prices, trial limits and cancel offers, each dated with a screenshot. Teams use Browserbase to run their own flows and Obsession for what companies send and show their customers, kept over time.',
    ogImage: '/og/compare-obsession-vs-browserbase.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Browserbase', path: '/compare/obsession-vs-browserbase' },
    ],
  },
  title: 'Obsession vs Browserbase: cloud browsers beside what companies show only to customers',
  dek: 'Browserbase is the browser your code drives, for as long as it runs. Obsession is the record of what each company sent and showed its customers, kept for months.',
  primaryKeyword: 'obsession vs browserbase',
  keywords: ['browserbase vs obsession', 'browserbase contexts login', 'headless browser for ai agents', 'browserbase pricing'],
  checked: '2026-11-11',
  readingMinutes: 6,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'northwind.example',
    period: 'Example: Northwind is an invented company',
    cols: ['The job', 'Browserbase', 'Obsession'],
    rows: [
      { name: 'A browser your agent drives', cells: ['25 to 250+ at once', 'Not its job'], tone: 'info' },
      { name: 'Login kept between runs', cells: ['Contexts save cookies', 'Accounts open for months'], tone: 'info' },
      { name: 'Who writes the steps', cells: ['Your code, with Stagehand', 'Done for you'], tone: 'info' },
      { name: 'Day 3 email after sign-up', cells: ['Not described', '20% off, 09:14, DKIM pass'], tone: 'ok' },
      { name: 'Signed-in price history', cells: ['Not described', 'Each change, dated'], tone: 'ok' },
    ],
    notes: ['Browserbase’s column follows its own pages, read 11 November 2026. Not described means its pages don’t say.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-each-is', text: 'What Browserbase and Obsession are' },
    { kind: 'h3', id: 'browserbase', text: 'Browserbase: cloud browsers for your agents' },
    {
      kind: 'p',
      text: `As of 11 November 2026, [Browserbase’s home page](${BB}) reads “Give your agents access to the whole web” and “Browserbase makes the web as reliable and programmable as APIs”. Its products include cloud browsers, Stagehand (its SDK for browser agents), Search and Fetch APIs, Functions, Sandboxes and Agent Identity. It says an agent “logs in, navigates, and pulls data from any website, login walls included”, and that Agent Identity gets agents “past anti-bot systems, CAPTCHAs, and authentication walls”.`,
    },
    {
      kind: 'p',
      text: `[Contexts](${BB_CONTEXTS}) keep a browser’s cookies, localStorage and IndexedDB between sessions to “maintain login states across multiple sessions without needing to log in repeatedly”, and they “live indefinitely”, though a site may still expire its own cookies or log a session out. Its pages don’t describe keeping the emails a company sends after a sign-up or a dated history of what a company showed.`,
    },
    { kind: 'h3', id: 'obsession', text: 'Obsession: what the browsing found, already kept' },
    {
      kind: 'p',
      text: `${ENTITY} You don’t write the sign-up steps, run an inbox per account or store the captures: you name a company and look up what it sends and shows its customers, from the first day it was covered.`,
    },

    { kind: 'h2', id: 'at-a-glance', text: 'Browserbase and Obsession at a glance', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `Browserbase’s row is from its own pages and [its pricing page](${BB_PRICING}), read 11 November 2026. Obsession’s row is from [the developer page](/developers).`,
      cols: ['Option', 'What it holds', 'How it’s read', 'Freshness and history', 'Price as listed', 'Best for'],
      rows: [
        [
          'Browserbase: Browsers, Stagehand, Fetch, Search, Agent Identity',
          'Browser sessions your code runs, with replays',
          'API, Stagehand SDK and an MCP server',
          'Live, while a session runs\nContexts keep login state',
          'Free: 1 browser hour\nDeveloper $20 a month\nStartup $99 a month',
          'Agents that must act in a browser',
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

    { kind: 'h2', id: 'when-to-use', text: 'When to use Browserbase, and when to use Obsession' },
    {
      kind: 'list',
      items: [
        '**Use Browserbase** when your agent has to act: fill a form, book something, test your own sign-up flow, or work inside a site for a user. You write the steps, and its browsers run them at scale with replays to debug.',
        '**Use Obsession** when you need what companies send and show their customers over time: the emails in a competitor’s first week, the [member price](/glossary/member-price) a signed-in customer pays, the limits on a free plan and the offer in a [cancel flow](/glossary/cancel-flow). Those arrive over days and weeks, long after a browser session ends.',
        '**Build or look up.** A [headless browser](/glossary/headless-browser) can collect the same facts if you write and maintain the steps for every company, keep an inbox for each account and store every capture with its date. Obsession does that for any company you name.',
      ],
    },

    { kind: 'h2', id: 'together', text: 'Using Browserbase and Obsession together' },
    {
      kind: 'p',
      text: `Browserbase hosts an [MCP server](${BB_MCP}); Obsession’s install line is on [the developer page](/developers). An agent can look up a competitor’s onboarding emails and trial limits with Obsession, then use a Browserbase session to act on your own product, for example to check your sign-up against what the competitor showed.`,
    },
    {
      kind: 'p',
      text: 'The two take different lines on bot defences. An Obsession agent says it’s an AI when it talks to a person and never gets round a CAPTCHA or a bot block; where a site puts one in front of a step, the record names the step it couldn’t reach. The lines are on [the page for companies an agent visits](/agents), and one company’s whole record is in [the sample data](/sample-output).',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'Is Obsession a Browserbase alternative?',
          a: 'Not for running browsers: use Browserbase when your agent has to act in a site. Obsession is the data a browser would collect from companies’ customer side, kept and dated, so you look it up instead of building the collection.',
        },
        {
          q: 'Can Browserbase keep a login?',
          a: 'Yes. Its contexts save cookies, localStorage and IndexedDB between sessions, so an agent can skip a login, and contexts live until you delete them. A site can still expire its cookies or log a session out.',
        },
        {
          q: 'Does Browserbase keep the emails a company sends?',
          a: 'Its pages don’t describe it. Obsession keeps every email a company sends a new subscriber, dated as it arrived, with its sender checked.',
        },
        {
          q: 'How much does each cost?',
          a: 'Browserbase lists a free plan with 1 browser hour and 15 minute sessions, Developer at $20 a month, Startup at $99 a month and custom Scale plans, read on 11 November 2026. Obsession is in early access and is priced per call or per company watched, never per token.',
        },
      ],
    },
  ],
  sources: [
    { title: 'Browserbase: give your agents access to the whole web', publisher: 'Browserbase', url: BB },
    { title: 'Contexts', publisher: 'Browserbase docs', url: BB_CONTEXTS },
    { title: 'Pricing', publisher: 'Browserbase', url: BB_PRICING },
    { title: 'MCP server setup', publisher: 'Browserbase docs', url: BB_MCP },
  ],
  related: [
    'can-ai-agents-log-in-to-websites',
    'scrape-data-behind-login',
    '/compare/obsession-vs-firecrawl',
    '/compare/obsession-vs-exa',
    '/glossary/headless-browser',
    '/glossary/web-bot-auth',
    '/glossary/declared-agent',
    '/glossary/login-wall',
    'long-running-ai-agents',
    'ai-customers-for-developers',
    '/developers',
    '/agents',
  ],
}
