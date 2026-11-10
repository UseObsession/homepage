import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/web-scraping: for an engineer or data team. "scrape data behind login" stays with its owner
   (docs/SEARCH.md §2); this page owns the definition. No legal claims beyond RFC 9309's own words. Firecrawl is
   described from its own docs, read 11 Nov 2026. */
const DEFINITION =
  'Web scraping is using a program to fetch web pages and pull their content out as data, such as prices, product names or the page’s text, instead of copying it by hand.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Web scraping',
  line: 'Using a program to fetch web pages and pull their content out as data, instead of copying it by hand.',
  meta: {
    path: '/glossary/web-scraping',
    title: 'What is web scraping? What a scraper reads, and its limits',
    description:
      'Web scraping uses a program to fetch web pages and pull out their content as data. What a scraper reads, how robots.txt applies, and where scraping stops.',
    answer: `${DEFINITION} A scraper reads the page in front of it at the moment it runs. A page behind a login needs an account and steps someone writes, and nothing is kept unless you store it.`,
    ogImage: '/og/glossary-web-scraping.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Web scraping', path: '/glossary/web-scraping' },
    ],
  },
  title: 'Web scraping: a program that reads web pages and turns them into data',
  dek: 'Price lists, product pages, job posts and reviews are scraped every day. A scraper sees what any visitor sees, at the moment it runs.',
  primaryKeyword: 'web scraping',
  keywords: ['what is web scraping', 'web scraping meaning', 'web scraping definition', 'web scraper', 'scraping api'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'developers',
  term: {
    name: 'web scraping',
    alternateName: ['web scraper', 'screen scraping', 'data scraping'],
    definition: DEFINITION,
  },
  blocks: [
    { kind: 'h2', id: 'what-a-scraper-reads', text: 'What a web scraper reads' },
    {
      kind: 'p',
      text: 'A scraper requests a page, gets back its HTML and keeps the parts it was told to keep. Many tools also run the page’s JavaScript in a [headless browser](/glossary/headless-browser), so pages that build themselves in the browser can be read too.',
    },
    {
      kind: 'p',
      text: '[Firecrawl’s scrape feature](https://docs.firecrawl.dev/features/scrape), for example, turns a URL into Markdown, cleaned HTML, a screenshot or structured JSON. It can also click, type and wait on a page before reading it. A pricing team might scrape 200 competitors’ product pages each morning and load the prices into a sheet.',
    },
    { kind: 'h2', id: 'robots-txt', text: 'How robots.txt applies to scraping' },
    {
      kind: 'p',
      text: 'Sites publish a robots.txt file to tell crawlers which paths they may fetch. The rules are standardised in [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309), the Robots Exclusion Protocol, which says these rules are not a form of access authorisation. A site’s terms of use and the law in each country are separate questions, and a page that sits behind a sign-in is a different matter again.',
    },
    { kind: 'h2', id: 'where-scraping-stops', text: 'Where web scraping stops' },
    {
      kind: 'list',
      items: [
        '**Logins:** a scraper gets past a sign-in only with an account someone created and steps someone wrote, and the steps break when the page changes.',
        '**Time:** a scraper reads the page as it is now. A price that changed on Tuesday is gone by Wednesday unless an earlier run stored it.',
        '**Inboxes:** emails and texts a company sends after a sign-up never appear on a page, so no scraper sees them.',
      ],
    },
    {
      kind: 'p',
      text: 'Each of those sits behind a [login wall](/glossary/login-wall): the welcome email, the signed-in price, the trial’s limits and the offer in a cancel flow.',
    },
    { kind: 'h2', id: 'keeping-history', text: 'How what companies show customers is kept over time' },
    {
      kind: 'p',
      text: `${ENTITY} Each account stays open for as long as you follow the company, so every new email, price and offer lands dated the day it arrives.`,
    },
    {
      kind: 'p',
      text: 'A scraper reads one page on the day it runs, so teams often use both. [Obsession vs Firecrawl](/compare/obsession-vs-firecrawl) sets out which job each one does.',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the difference between web scraping and web crawling?',
          a: 'A crawler follows links to discover pages, as a search engine does. A scraper extracts content from pages it was pointed at. Many tools do both: crawl to find the pages, then scrape to read them.',
        },
        {
          q: 'Can a scraper read pages behind a login?',
          a: 'When someone gives it an account and writes the steps to sign in, and the site doesn’t stop it with a CAPTCHA or a bot check. It still reads only what that account shows on the day it runs.',
          link: { label: 'Login wall, defined', to: '/glossary/login-wall' },
        },
        {
          q: 'Does a scraper keep history?',
          a: 'Only what you store. Each run returns the page as it is now, so a history means saving every run with its date and comparing them.',
        },
      ],
    },
  ],
  sources: [
    { title: 'Scrape', publisher: 'Firecrawl docs', url: 'https://docs.firecrawl.dev/features/scrape' },
    {
      title: 'RFC 9309: Robots Exclusion Protocol',
      publisher: 'RFC Editor (IETF)',
      url: 'https://www.rfc-editor.org/rfc/rfc9309',
      date: '2022',
    },
  ],
  related: [
    '/glossary/headless-browser',
    '/glossary/web-search-api',
    '/glossary/login-wall',
    '/glossary/web-bot-auth',
    '/compare/obsession-vs-firecrawl',
    '/compare/obsession-vs-browserbase',
    'scrape-data-behind-login',
    'can-ai-agents-log-in-to-websites',
    'exa-vs-tavily-vs-firecrawl',
    'recipe:price-watch',
  ],
}
