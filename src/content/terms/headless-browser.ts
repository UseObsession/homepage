import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/headless-browser: for an engineer giving an agent a browser. Chrome's headless mode is described from
   Chrome's own docs and Browserbase from its own docs, both read 11 Nov 2026. */
const DEFINITION =
  'A headless browser is a web browser with no visible window, driven by code that loads pages, clicks, types and reads the result.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Headless browser',
  line: 'A web browser that runs without a visible window, driven by code that loads pages, clicks and types.',
  meta: {
    path: '/glossary/headless-browser',
    title: 'What is a headless browser? A real browser your code drives',
    description:
      'A headless browser runs with no window, driven by code that loads pages, clicks and types. How Chrome’s headless mode works and what teams use it for.',
    answer: `${DEFINITION} Chrome runs headless with the --headless flag, and libraries such as Puppeteer and Selenium drive it for testing, scraping and AI agents.`,
    ogImage: '/og/glossary-headless-browser.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Headless browser', path: '/glossary/headless-browser' },
    ],
  },
  title: 'Headless browser: a real browser with no window, driven by code',
  dek: 'A headless browser does for a program what a browser does for a person. It runs the page’s scripts, keeps cookies, fills in forms and takes screenshots.',
  primaryKeyword: 'headless browser',
  keywords: ['what is a headless browser', 'headless browser meaning', 'headless chrome', 'headless mode'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'developers',
  term: {
    name: 'headless browser',
    alternateName: ['headless Chrome', 'headless mode'],
    definition: DEFINITION,
  },
  blocks: [
    { kind: 'h2', id: 'how-headless-mode-works', text: 'How a headless browser works' },
    {
      kind: 'p',
      text: '[Chrome’s documentation](https://developer.chrome.com/docs/chromium/headless) describes headless mode as running the browser in an unattended environment, without any visible UI. You start it by passing --headless to Chrome. Since Chrome 112, headless Chrome creates the browser’s windows without displaying them, and headless and on-screen Chrome are one browser. Since Chrome 132 the older headless mode ships separately, as chrome-headless-shell.',
    },
    {
      kind: 'p',
      text: 'A program then drives it through a library such as Puppeteer or Selenium. A typical script opens a URL and waits for the page to load. It then fills in a form, clicks a button and reads the text or saves a screenshot.',
    },
    { kind: 'h2', id: 'what-teams-use-it-for', text: 'What teams use a headless browser for' },
    {
      kind: 'list',
      items: [
        '**Testing:** engineers run their own sign-up and checkout on every release.',
        '**Scraping:** data teams use one for [web scraping](/glossary/web-scraping) pages that build themselves with JavaScript, which a plain request can’t read.',
        '**Agents:** an AI model gets a browser so it can act on sites that have no API.',
      ],
    },
    {
      kind: 'p',
      text: 'Hosted services run them for you. [Browserbase](https://docs.browserbase.com/introduction/what-is-browserbase), for example, offers fleets of headless browsers at scale, each in an isolated session.',
    },
    { kind: 'h2', id: 'what-a-session-keeps', text: 'What a headless browser session keeps' },
    {
      kind: 'p',
      text: 'A session lasts as long as the code runs. When it ends, the page it read is gone unless the program saved it. Nothing arrives in between either, so the welcome email and the renewal notice go unseen. Staying a customer of a company for months takes an inbox, a phone number and a reason to come back.',
    },
    {
      kind: 'p',
      text: `${ENTITY} Each account keeps its own inbox and stays open for months, so what a company sends between visits is kept too. [Obsession vs Browserbase](/compare/obsession-vs-browserbase) sets the two side by side.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is a headless browser the same as a bot?',
          a: 'It is a tool a bot can use. Standards such as Web Bot Auth let an automated visitor sign its requests, so a site can tell which company’s agent it is.',
          link: { label: 'Web Bot Auth, defined', to: '/glossary/web-bot-auth' },
        },
        {
          q: 'Do I need a headless browser to scrape a site?',
          a: 'Only when the page builds its content with JavaScript or needs clicks and form entries first. A plain HTML page can be read with a simple request.',
        },
        {
          q: 'Is headless Chrome a different browser from Chrome?',
          a: 'Since Chrome 112, headless mode runs the same Chrome, creating its windows without showing them. The older, separate headless browser is now shipped as chrome-headless-shell.',
        },
      ],
    },
  ],
  sources: [
    { title: 'Chrome Headless mode', publisher: 'Chrome for Developers', url: 'https://developer.chrome.com/docs/chromium/headless' },
    { title: 'What is Browserbase?', publisher: 'Browserbase docs', url: 'https://docs.browserbase.com/introduction/what-is-browserbase' },
  ],
  related: [
    '/glossary/web-scraping',
    '/glossary/web-bot-auth',
    '/glossary/login-wall',
    '/glossary/model-context-protocol',
    '/compare/obsession-vs-browserbase',
    '/compare/obsession-vs-firecrawl',
    'long-running-ai-agents',
    'can-ai-agents-log-in-to-websites',
    'scrape-data-behind-login',
  ],
}
