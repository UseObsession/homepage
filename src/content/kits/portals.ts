import { kitPathOf, kitsPath } from '../kitPaths'
import { prices } from '../prices'
import type { KitPage } from './types'

/* Work behind logins (/blueprints/work-behind-logins): agents sign in to payer, carrier, supplier and government portals,
   stay signed in for weeks, and receive each login code at their own inbox or number. Product Marketing book, job 4. */

const sub =
  'Your agent signs in to payer, carrier and supplier portals and stays signed in. Its own inbox and number catch every login code, and each page is saved with a screenshot.'

const code = `import { Obsession } from "obsession"
import { chromium } from "playwright"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// A browser on a US home connection that keeps its logins
const browser = await obsession.browsers.create({ home: "US" })

// Drive it with Playwright, over CDP
const session = await chromium.connectOverCDP(browser.cdpUrl)
const page = session.contexts()[0].pages()[0]
await page.goto("https://portal.payer.example/claims")

// Login codes reach you as email.received or sms.received`

export const portals: KitPage = {
  id: 'portals',
  name: 'Work behind logins',
  meta: {
    path: kitPathOf.portals,
    title: 'AI agents for portals: sign in, get the code, do the work',
    description: `A cloud browser that stays signed in to payer, carrier and supplier portals for weeks, with an inbox and number for every login code, at ${prices.browser.amount} an hour.`,
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: kitsPath },
      { name: 'Work behind logins', path: kitPathOf.portals },
    ],
  },

  hero: { headline: 'Work behind logins: portals signed in for weeks, every code caught.', sub },

  scene: {
    steps: [
      { icon: 'browser', label: 'The agent opens the portal' },
      { icon: 'mail', label: 'The code lands in its inbox' },
      { icon: 'key', label: 'It signs in and files the claim' },
      { icon: 'record', label: 'Screenshot and result in the log' },
    ],
    who: 'Claims agent 3 at a medical billing company',
    note: 'From sign-in to claim status in two minutes',
    fleet: '40 agents · 1,900 claims a day',
    rows: [
      { at: '07:30', kind: 'page.visited', text: 'portal.payer.example/login' },
      { at: '07:30', kind: 'email.received', text: 'Your verification code is 551203' },
      { at: '07:31', kind: 'page.visited', text: 'Claim 88213 · pending · screenshot saved' },
      { at: '07:31', kind: 'sandbox.finished', text: 'Appeal letter drafted from the denial reason' },
      { at: '07:32', kind: 'webhook', text: 'Claim status sent to your billing system', tone: 'ok' },
    ],
    caption: 'Sign-in, code and claim in two minutes, every page kept. The billing company and portal are invented examples.',
  },

  pieces: {
    heading: 'A browser that remembers, and a place for the code to land.',
    line: 'The browser keeps its session between runs, so the agent signs in once.',
    items: [
      { piece: 'browser', line: 'A cloud browser that keeps logins for weeks, home connection included.' },
      { piece: 'email', line: 'An inbox for every portal’s login code.' },
      { piece: 'phone', line: 'A number for codes by text or call.' },
      { piece: 'personas', line: 'One identity across the browser, inbox and number.' },
    ],
    prices: ['browser', 'stealth', 'inbox', 'number', 'sms'],
  },

  blueprints: {
    heading: 'Jobs that sign in for you, every morning.',
    line: 'Obsession signs in, starts trials and reads what each company shows its signed-in customers.',
    slugs: ['prior-authorization-status', 'load-tracking', 'invoice-collector', 'price-watch', 'trial-teardown', 'account-watch'],
  },

  code: {
    heading: 'Your scripts, on a browser that stays signed in.',
    line: 'It works with Playwright, Puppeteer and any tool that drives Chrome.',
    label: 'portal.ts',
    code,
  },

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Revenue cycle and operations', gets: 'Claims, eligibility and status checked in portals every morning, each with a screenshot.', watch: 'Days in A/R, denial rate, staff hours' },
      { role: 'Web-agent companies', gets: 'Browsers that stay signed in for weeks, with an inbox and number for every code.', watch: 'Task success rate, cost per task' },
      { role: 'Finance and procurement', gets: 'Invoices and receipts collected from every vendor portal, dated.', watch: 'Time to close, missed invoices' },
    ],
  },

  examples: { heading: 'Worked examples', paths: ['/use-cases/web-behind-the-login'] },

  faq: {
    heading: 'Before your agent signs in.',
    items: [
      { q: 'How long does a login last?', a: 'For weeks. The browser keeps its cookies and session between runs, so the agent signs in once.' },
      { q: 'What happens at a login code?', a: 'It arrives at the persona’s own inbox or number and reaches your code as email.received or sms.received.' },
      { q: 'Is there a charge per GB?', a: 'No. The home connection is included in the browser hour.', link: { label: 'Every rate', to: '/pricing/rates' } },
      {
        q: 'What happens at a step that needs a person?',
        a: 'The event log keeps the page and what it asked for, with a screenshot, so someone on your team can take that step while every other visit carries on.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
    ],
  },

  final: {
    heading: 'Sign your agent in once, and keep it signed in for weeks.',
    capture: { kind: 'waitlist', source: 'kit-portals', button: 'Start free', interest: 'any' },
  },
}
