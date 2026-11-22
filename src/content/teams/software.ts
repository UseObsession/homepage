import { personaCostLine, plans } from '../prices'
import type { TeamPage } from './types'

/* B2B software (/use-cases/trial-checks-for-software-companies, 22 Nov 2026): the team page for software and app
   companies with self-serve sign-up, whose QA leads and growth engineers the Top 3 Buyers ranking puts first (group 2,
   product teams that test their own sign-up). A persona per journey tests sign-up, codes and the day-7 email, runs
   competitors' trials, and gives the product's own agents an identity. Larkfield is invented. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const path = '/use-cases/trial-checks-for-software-companies'

const sub =
  'Obsession, the toolkit for AI agents, gives each test journey a persona, an AI agent with its own inbox, number and browser. It signs up after every release, waits for the day-7 email and runs competitors’ trials, with every miss in one event log.'

export const team: TeamPage = {
  id: 'software',
  name: 'B2B software',
  meta: {
    path,
    title: 'Software companies: test sign-up and competitors’ trials',
    description:
      'A persona signs up to your product after every release, gets each code and the day-7 email, and runs competitors’ trials. Every miss lands in one log.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'B2B software', path },
    ],
  },

  hero: {
    pill: 'Software companies',
    headline: 'Software companies: test every code, email and trial a new user meets.',
    sub,
  },

  scene: {
    steps: [
      { icon: 'code', label: 'A release ships at 09:00' },
      { icon: 'persona', label: 'A persona signs up' },
      { icon: 'mail', label: 'The code and welcome arrive' },
      { icon: 'record', label: 'A dead link, caught at 09:04' },
    ],
    who: 'Journey 3, a test persona at larkfield.example',
    note: 'A dead link, caught one minute in',
    fleet: '12 journeys · every deploy',
    rows: [
      { at: 'Tue · 09:02', kind: 'page.visited', text: 'larkfield.example/signup · screenshot saved' },
      { at: 'Tue · 09:02', kind: 'sms.received', text: 'Your Larkfield code is 604117' },
      { at: 'Tue · 09:03', kind: 'email.received', text: 'Welcome to Larkfield' },
      { at: 'Tue · 09:04', kind: 'blueprint.result', text: '“Open the app” leads to a closed staging site', tone: 'fail' },
      { at: 'Tue · 09:05', kind: 'webhook', text: 'Sent to #growth' },
    ],
    caption: 'A dead link in the welcome email, caught a minute after it arrived. Larkfield is an invented team calendar app.',
  },

  uses: {
    heading: 'Your sign-up, your emails and every competitor’s trial.',
    line: 'Every piece runs on one API and one bill, so test journeys, competitors’ trials and your own agents share one key and one event log.',
    items: [
      {
        kit: 'test',
        name: 'Sign-up codes and welcome emails',
        line: 'Every code by text, email or call, and every welcome, timed from each country you sell in.',
        blueprint: 'delivery-monitoring',
        pieces: ['personas', 'email', 'phone'],
      },
      {
        kit: 'test',
        name: 'The day-7 email',
        line: 'Test runs end in minutes. A persona waits for day 2 and day 7, free while it waits.',
        pieces: ['personas', 'email'],
      },
      {
        kit: 'test',
        name: 'QA after every release',
        line: 'A new persona runs your sign-up and onboarding after each release and finds the step that breaks.',
        blueprint: 'website-audit',
        pieces: ['personas', 'browser'],
      },
      {
        kit: 'test',
        name: 'What your support bot says',
        line: 'Each morning a persona asks your in-app bot what your team hears most, and keeps every answer.',
        blueprint: 'support-bot-check',
        pieces: ['browser', 'email'],
      },
      {
        kit: 'test',
        name: 'Answers after a model update',
        line: 'Your hardest cases asked again after every update, with what changed.',
        blueprint: 'drift-watch',
        pieces: ['browser'],
      },
      {
        kit: 'watch',
        name: 'Competitors’ trials, day by day',
        line: 'A persona starts each competitor’s trial and keeps every email, limit, upgrade prompt and offer to stay.',
        blueprint: 'trial-teardown',
        pieces: ['personas', 'browser', 'email'],
      },
      {
        kit: 'build',
        name: 'An identity for your product’s agent',
        line: 'Your in-product agent sends, receives, browses and runs code from its own inbox and number, created in one call.',
        pieces: ['email', 'phone', 'browser', 'sandbox'],
      },
    ],
  },

  blueprints: {
    heading: 'Checks that run after every release.',
    line: 'Each posts what it found to Slack, a sheet or your CI.',
    slugs: ['delivery-monitoring', 'website-audit', 'trial-teardown', 'support-bot-check', 'drift-watch', 'ai-disclosure-check'],
  },

  prices: ['persona', 'inbox', 'number', 'sms', 'browser', 'sandbox'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'QA and engineering', gets: 'A pass or fail for every journey after each release, with the screenshot, the code and the email.', watch: 'Escaped defects, regressions, time to detect' },
      { role: 'Product and growth', gets: 'Every welcome, onboarding and day-7 email a new user gets, beside each competitor’s trial.', watch: 'Activation, conversion, retention' },
      { role: 'Head of AI', gets: 'An inbox, a number and a browser for your in-product agent, with every event in one log.', watch: 'Time to ship, reliability, cost per agent' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/sales-intelligence-behind-the-login', '/use-cases/prospect-intelligence-with-clay'],
  },

  faq: {
    heading: 'Before a persona signs up to your product.',
    items: [
      {
        q: 'We already have test inboxes. Why add this?',
        a: 'Keep them for quick checks. A persona covers the whole journey for weeks, with a number for codes and a browser that keeps the session.',
      },
      {
        q: 'Will these sign-ups show up in our numbers?',
        a: 'Not unless you let them. Each one signs up from an address you can recognise, so you can leave it out of sign-ups, trials and churn.',
      },
      {
        q: 'What does it cost?',
        a: `${personaCostLine} It costs nothing while it waits. Start on the Free plan, with no credit card, then ${orList(fees)} a month.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Is it allowed to start a competitor’s trial?',
        a: 'A persona does only what any user can, through the sign-up anyone can use. It says it’s an AI when it talks to a person, stops before payment unless given your own payment card and never gets round a CAPTCHA.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
    ],
  },

  final: {
    heading: 'Put a persona through your sign-up after every release.',
    capture: { kind: 'waitlist', source: 'team-software', button: 'Start free', interest: 'audit' },
  },
}
