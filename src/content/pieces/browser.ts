import { piecePaths } from '../piecePaths'
import { prices } from '../prices'
import type { PiecePage } from './types'

/* Browser (/browser), 21 Nov 2026: a cloud browser for AI agents. Its sessions keep their logins, it can connect through a
   home (residential) connection, and the agent drives it over the Chrome DevTools Protocol with Playwright, Puppeteer or
   its own tools. "Headless browser" stays as people type it. The country is a choice in the code and a feature in the
   list, never the pitch. Prices are read from prices.ts, never retyped. */

const sub =
  'Obsession gives each AI agent a cloud browser that keeps its logins between sessions and can connect through a home internet connection. Your agent drives it with Playwright, Puppeteer or any Chrome DevTools Protocol tool.'

const code = `import { Obsession } from "obsession"
import { chromium } from "playwright"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// A browser on a US home connection
const browser = await obsession.browsers.create({ home: "US" })

// Drive it with Playwright, over CDP
const session = await chromium.connectOverCDP(browser.cdpUrl)
const page = session.contexts()[0].pages()[0]
await page.goto("https://portal.larkfield.example/orders")

// Logins are kept across sessions, so next week it is still signed in`

export const browser: PiecePage = {
  id: 'browser',
  name: 'Browser',
  meta: {
    path: piecePaths.browser,
    title: 'A browser for AI agents that stays signed in · Obsession',
    description:
      'A headless cloud browser for AI agents that keeps its logins between sessions and can use a home connection. Drive it with Playwright or Puppeteer.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Browser', path: piecePaths.browser },
    ],
  },

  hero: {
    headline: 'A browser for AI agents: sign in once and stay signed in',
    sub,
    code,
  },

  can: {
    heading: 'Your agent uses any site the way a person does.',
    line: 'It opens pages, clicks, types and fills in forms, on sites that have no API.',
    items: [
      { title: 'Logins that last', line: 'Sign in once, and the next session starts signed in.' },
      { title: 'A home connection', line: 'Connect from a home in the US or any country, so sites load as they do for a person.' },
      { title: 'Your own tools', line: 'Playwright, Puppeteer and browser agents connect with one URL, over the Chrome DevTools Protocol.' },
      { title: 'Watch it live', line: 'Watch any session from your own browser, or take over a step.' },
      { title: 'A screenshot of every page', line: 'Each page can be kept as a dated screenshot of what your agent saw.' },
      { title: 'A full screen when a site needs one', line: 'The stealth browser runs with a real screen, for sites that turn a headless browser away.' },
    ],
  },

  events: ['page.visited'],

  price: {
    heading: 'Pay by the browser hour, with the home connection included.',
    line: 'A browser costs only while a session is open.',
  },

  together: {
    heading: 'The browser finishes what a site starts in email and text.',
    line: 'One API key and one bill cover every piece.',
    items: [
      { piece: 'email', line: 'Confirm a sign up from the browser with a link in the agent’s own inbox.' },
      { piece: 'phone', line: 'Finish a text check on the agent’s own number.' },
      { piece: 'messaging', line: 'Tell someone on WhatsApp or iMessage what the browser found.' },
      { piece: 'sandbox', line: 'Work through what the browser downloads, such as a CSV export, in a sandbox.' },
      { piece: 'personas', line: 'Keep the browser’s logins with one identity for months, beside its inbox and number.' },
    ],
  },

  faq: {
    heading: 'Sign in once, and the browser remembers.',
    items: [
      {
        q: 'What is a browser for AI agents?',
        a: 'A real browser in the cloud that your agent controls through code. It opens pages, clicks, types and fills in forms, so your agent can use sites that have no API.',
      },
      {
        q: 'Do logins carry over between sessions?',
        a: 'Yes. Each browser keeps its cookies and saved logins, so a session opened a week later is still signed in.',
      },
      {
        q: 'What is a home connection?',
        a: 'An internet connection from a home rather than a data centre, so sites that treat data centre traffic differently load as they do for a person. Pick the country when you create the browser.',
      },
      {
        q: 'Is it a headless browser for AI agents?',
        a: 'The standard browser runs headless, the cheapest way to run many sessions. The stealth browser runs with a full screen, for sites that turn headless browsers away.',
      },
      {
        q: 'What does a browser cost?',
        a: `${prices.browser.name}: ${prices.browser.amount} ${prices.browser.unit}. ${prices.stealth.name}: ${prices.stealth.amount} ${prices.stealth.unit}. ${prices.home.name}: ${prices.home.amount} ${prices.home.unit}.`,
      },
    ],
  },

  final: {
    heading: 'Give your agent a browser that stays signed in.',
    capture: { kind: 'waitlist', button: 'Start free', interest: 'any', source: 'piece-browser' },
  },
}
