import { piecePaths } from '../piecePaths'
import { prices } from '../prices'
import type { PiecePage } from './types'

/* Browser (/browser), 21 Nov 2026: a cloud browser for AI agents. Its sessions keep their logins, it can connect through a
   home (residential) connection, and the agent drives it over the Chrome DevTools Protocol with Playwright, Puppeteer or
   its own tools. "Headless browser" stays as people type it. The country is a choice in the code and a feature in the
   list, never the pitch. Prices are read from prices.ts, never retyped. */

const sub =
  'Obsession gives each AI agent a cloud browser that keeps its logins from one session to the next and can connect through a home internet connection. Your agent drives it with Playwright, Puppeteer or any tool that speaks the Chrome DevTools Protocol.'

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
      'A cloud browser for AI agents that keeps its logins between sessions and can connect through a home connection. Drive it with Playwright or Puppeteer.',
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
      { title: 'Logins that last', line: 'Sign in once. Cookies and saved logins are kept, so the next session starts signed in.' },
      { title: 'A home connection', line: 'Connect through a home internet connection in the US or any country, so sites load as they do for a person at home.' },
      { title: 'Your own tools', line: 'Playwright, Puppeteer and browser agents connect with one URL, over the Chrome DevTools Protocol.' },
      { title: 'Watch it live', line: 'Open any session in your own browser to watch your agent work, or take over a step yourself.' },
      { title: 'A screenshot of every page', line: 'Each page it visits can be kept as a dated screenshot, so you see what your agent saw.' },
      { title: 'A full screen when a site needs one', line: 'The stealth browser runs with a real screen, for sites that turn a headless browser away.' },
    ],
  },

  events: ['page.visited'],

  price: {
    heading: 'Pay by the browser hour, with the home connection included.',
    line: 'A browser costs only while a session is open, and it arrives on the same bill as every other piece.',
  },

  together: {
    heading: 'The browser finishes what a site starts in email and text.',
    line: 'The same API key and the same bill cover every piece.',
    items: [
      { piece: 'email', line: 'Confirm a sign up from the browser with a link in the agent’s own inbox.' },
      { piece: 'phone', line: 'Finish a text check on the agent’s own number.' },
      { piece: 'messaging', line: 'Tell someone on WhatsApp or iMessage what the browser found.' },
      { piece: 'sandbox', line: 'Work through what the browser downloads, such as a CSV export, in a sandbox.' },
      { piece: 'personas', line: 'Keep the browser’s logins with one identity, for months, beside its inbox and number.' },
    ],
  },

  faq: {
    heading: 'Sign in once, and the browser remembers.',
    items: [
      {
        q: 'What is a browser for AI agents?',
        a: 'A real browser running in the cloud that your agent controls through code. It opens pages, clicks, types and fills in forms. It sends back what it sees, so your agent can use sites that have no API.',
      },
      {
        q: 'Do logins carry over between sessions?',
        a: 'Yes. Each browser keeps its cookies and saved logins. Close a session, open the next one a week later, and it’s still signed in to the same sites.',
      },
      {
        q: 'What is a home connection?',
        a: 'An internet connection from a home rather than a data centre. Pages load the way they do for a person at home, which matters on sites that show different content to data centre traffic. Pick the country when you create the browser.',
      },
      {
        q: 'Is it a headless browser?',
        a: 'The standard browser runs headless, the cheapest way to run many sessions at once. The stealth browser runs with a full screen, for sites that turn a headless browser away.',
      },
      {
        q: 'What does a browser cost?',
        a: `${prices.browser.name}: ${prices.browser.amount} ${prices.browser.unit}. ${prices.stealth.name}: ${prices.stealth.amount} ${prices.stealth.unit}. ${prices.home.name}: ${prices.home.amount} ${prices.home.unit}.`,
      },
    ],
  },

  final: {
    heading: 'Give your agent a browser that stays signed in.',
    capture: { kind: 'waitlist', button: 'Request early access', interest: 'any', source: 'piece-browser' },
  },
}
