import { kitPathOf } from '../../kitPaths'
import { freeNumber, prices } from '../../prices'
import type { TeamPage } from '../types'

/* OTP testing (/use-cases/otp-testing, 22 Nov 2026): one job in one industry. A fintech's QA team tests every one-time
   login code after each release, on real US and UK numbers and inboxes, with a browser that keeps the session after the
   code. Modelled on the testing pattern in the Product Marketing book, job 2 (QA personas that wait for codes and day-7
   emails; login codes and alerts tested end to end in more countries) and Commercial View research C. Persona: QA leads
   and auth engineers, measured on escaped defects, time to detect and test coverage. Never gets round a CAPTCHA or an
   identity check. Ledgerly is invented, at a .example address. */

const path = '/use-cases/otp-testing'

const sub =
  'Obsession, the toolkit for AI agents, runs OTP testing on real phone numbers and inboxes, on one API and one bill. After each release a test user signs up and logs every one-time code that arrives by text, email or call, and any that never does.'

export const useCase: TeamPage = {
  id: 'otp-testing',
  kind: 'case',
  name: 'OTP testing',
  meta: {
    path,
    title: 'OTP testing: real phone numbers and inboxes for login codes',
    description:
      'OTP testing on real US and UK numbers and inboxes. After each release a test user signs up, gets each login code by text, email or call, and flags misses.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'OTP testing', path },
    ],
  },

  hero: { pill: 'QA and engineering', headline: 'OTP testing: every login code received on a real number or inbox, after every release.', sub },

  scene: {
    steps: [
      { icon: 'code', label: 'Release 7.4 ships' },
      { icon: 'persona', label: 'Test users sign up in the US and UK' },
      { icon: 'clock', label: 'Each login code is timed' },
      { icon: 'record', label: 'A missing code reaches your CI' },
    ],
    who: 'Login journey, 2 test users at ledgerly.example',
    note: 'The UK code never came',
    fleet: '80 test users · 12 countries',
    rows: [
      { at: '14:02', kind: 'page.visited', text: 'ledgerly.example/login · code requested · screenshot saved' },
      { at: '14:02', kind: 'sms.received', text: 'US +1 · Your Ledgerly code is 604218 · 4 s' },
      { at: '14:02', kind: 'email.received', text: 'Your sign-in link · 9 s' },
      { at: '14:12', kind: 'blueprint.result', text: 'UK +44 · no code after 10 min · release 7.4 flagged', tone: 'fail' },
    ],
    caption: 'The US code came in 4 seconds and the UK code never came, so release 7.4 was flagged. Ledgerly is an invented example.',
  },

  uses: {
    heading: 'Every code a new user waits for, received and timed.',
    line: 'For QA and engineering teams at banks, fintechs, marketplaces and software companies that send login codes by text, email or call.',
    items: [
      {
        kit: 'test',
        name: 'Login codes by text',
        line: 'A real US or UK number receives each one-time code, and your test reads it from the event.',
        pieces: ['phone', 'personas'],
      },
      {
        kit: 'test',
        name: 'Magic links and codes by email',
        line: 'An inbox per test receives sign-in links and email codes, with the time each one took.',
        pieces: ['email', 'personas'],
      },
      {
        kit: 'test',
        name: 'Codes read out on a call',
        line: 'The number takes the call that reads a code aloud, and the transcript holds the digits.',
        pieces: ['phone'],
      },
      {
        kit: 'test',
        name: 'A session that stays signed in',
        line: 'A browser keeps the session after the code, so the test carries on into the account and screenshots each page.',
        pieces: ['browser', 'personas'],
      },
      {
        kit: 'test',
        name: 'Every code after every release',
        line: 'Personas, test users with their own numbers and inboxes, sign up in each country you sell in and live your first 14 days, timing every message.',
        blueprint: 'delivery-monitoring',
        pieces: ['personas', 'email', 'phone'],
      },
      {
        kit: 'test',
        name: 'The whole sign-up, as a new customer',
        line: 'A persona runs sign-up, onboarding and checkout after each release and stops before payment.',
        blueprint: 'website-audit',
        pieces: ['personas', 'browser', 'email'],
      },
    ],
  },

  blueprints: {
    heading: 'Sign in by text and email after every release.',
    line: 'Each posts a pass or fail to Slack, a sheet or your CI.',
    slugs: ['sign-in-code-check', 'delivery-monitoring', 'website-audit'],
  },

  prices: ['number', 'sms', 'voice', 'inbox', 'browser', 'persona'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'QA leads', gets: 'A pass or fail for every login code after each release, with the code, its time and a screenshot.', watch: 'Escaped defects, time to detect, test coverage' },
      { role: 'Engineers on login and identity', gets: 'Codes by text, email and call in each country, read straight from the event in your test.', watch: 'Regressions, incidents, release confidence' },
      { role: 'Growth and lifecycle', gets: 'The welcome and day-7 emails after the code, timed, the week a release breaks one.', watch: 'Activation, conversion, flow revenue' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/funnel-qa-for-cro-agencies', '/use-cases/journey-checks-for-banks-and-fintechs', '/use-cases/trial-checks-for-software-companies'],
  },

  faq: {
    heading: 'Before your first OTP test.',
    items: [
      {
        q: 'How does my test read the code?',
        a: 'Create a number with obsession.numbers.create({ country: "US" }) and subscribe to sms.received. The text reaches your webhook as an event, so your test types the code and carries on.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Our tests time out waiting for codes. What changes?',
        a: 'A persona waits as long as your journey runs, for minutes or days, at no cost while it waits. Each code wakes it about 50 ms after it lands, so no test needs a fixed sleep.',
        link: { label: 'Test sign-up and agents', to: kitPathOf.test },
      },
      {
        q: 'Does it get past CAPTCHAs or identity checks?',
        a: 'No. It never gets round a CAPTCHA or a bot block, and it stops at any identity check. The event log keeps what the check asked for.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'What does OTP testing cost?',
        a: `Start on the Free plan, with no credit card. Its number receives up to ${freeNumber.texts} texts a month. Then a number is ${prices.number.amount} a month and a text ${prices.sms.amount}, sent or received.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Which login code should a persona test first?',
    capture: { kind: 'waitlist', source: 'case-otp-testing', button: 'Start free', interest: 'delivery' },
  },
}
