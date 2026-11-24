import { kitPathOf, kitsPath } from '../kitPaths'
import type { KitPage } from './types'

/* Test sign-up and agents (/blueprints/test-sign-up-and-agents): a persona signs up to the reader's own product as a new user,
   waits days for every code and email, and talks to the reader's own AI agents. Product Marketing book, job 2. */

const sub =
  'A persona, an AI agent with its own inbox, number and browser, signs up to your product. It waits days for the day-7 email and chats with your own AI agents. What arrived, and what never did, lands in one event log.'

export const test: KitPage = {
  id: 'test',
  name: 'Test sign-up and agents',
  meta: {
    path: kitPathOf.test,
    title: 'Test your sign-up flow and your AI agents as a new customer',
    description:
      'A persona signs up to your product, receives every code, email and text for days, and tests your own support and voice agents. Misses land in one log.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: kitsPath },
      { name: 'Test sign-up and agents', path: kitPathOf.test },
    ],
  },

  hero: { headline: 'Test your sign-up and AI agents: every code, email and answer a new customer gets.', sub },

  scene: {
    steps: [
      { icon: 'code', label: 'A new release ships' },
      { icon: 'persona', label: 'A persona signs up' },
      { icon: 'clock', label: 'It waits for day 0, 2 and 7' },
      { icon: 'record', label: 'What came, and what didn’t' },
    ],
    who: 'Journey 14, a test persona at app.example',
    note: 'The day-7 email never came',
    fleet: '60 journeys · run on every release',
    rows: [
      { at: 'Day 0 · 08:00', kind: 'page.visited', text: 'app.example/signup · screenshot saved' },
      { at: 'Day 0 · 08:00', kind: 'sms.received', text: 'Your code is 482913' },
      { at: 'Day 0 · 08:01', kind: 'email.received', text: 'Welcome to App' },
      { at: 'Day 2 · 09:00', kind: 'email.received', text: 'Your first week: where to start' },
      { at: 'Day 7 · 23:59', kind: 'blueprint.result', text: 'Missing: the day-7 email never arrived', tone: 'fail' },
    ],
    caption: 'A test as long as your journey, down to the day-7 email that never came. app.example is an invented example.',
  },

  pieces: {
    heading: 'A new user that waits as long as your journey.',
    line: 'One persona per journey, with its own inbox, number and browser, at no cost while it waits.',
    items: [
      { piece: 'personas', line: 'A persona per journey, awake about 50 ms after a message lands.' },
      { piece: 'email', line: 'An inbox for every welcome, reminder and login link.' },
      { piece: 'phone', line: 'A number for codes by text or call.' },
      { piece: 'browser', line: 'A browser that keeps the session and screenshots every page.' },
    ],
    prices: ['persona', 'inbox', 'number', 'sms', 'browser', 'log'],
  },

  blueprints: {
    heading: 'Checks that run after every release.',
    line: 'Obsession goes through your sign-up, checkout and forms as a new customer, and posts what it found to Slack, a sheet or your CI.',
    slugs: ['website-audit', 'delivery-monitoring', 'sign-in-code-check', 'mystery-shopper', 'lead-leaks', 'ad-landing-check', 'partner-checks'],
  },

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'QA and engineering', gets: 'A pass or fail for every journey after each release, with the screenshot and the email.', watch: 'Escaped defects, time to detect' },
      { role: 'Growth and lifecycle', gets: 'Every welcome, reminder and day-7 email, timed, the week a release breaks one.', watch: 'Activation, conversion, flow revenue' },
      { role: 'Support and AI operations', gets: 'What your support bot and voice agent told a customer this morning, word for word.', watch: 'Resolution rate, policy errors' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: [
      '/use-cases/leak-checks-for-ecommerce-stores',
      '/use-cases/journey-checks-for-banks-and-fintechs',
      '/use-cases/opt-out-and-cancel-checks-for-compliance-teams',
      '/use-cases/funnel-qa-for-cro-agencies',
    ],
  },

  faq: {
    heading: 'Before the first test journey.',
    items: [
      { q: 'How long can a test journey wait?', a: 'As long as your journey runs, for days or weeks. A persona costs nothing while it waits and wakes about 50 ms after a message lands.' },
      { q: 'Can it receive login codes?', a: 'Yes, by email, text or call, at its own inbox and number. Each code reaches your test as it lands.' },
      { q: 'Where do results go?', a: 'To Slack, a sheet, your CI or your own code, through one signed webhook.' },
      {
        q: 'What happens at a step that needs a person?',
        a: 'The event log keeps the page, what it asked for and a screenshot, so your test names the exact step.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
    ],
  },

  final: {
    heading: 'Test your next release as a new customer would.',
    capture: { kind: 'waitlist', source: 'kit-test', button: 'Start free', interest: 'audit' },
  },
}
