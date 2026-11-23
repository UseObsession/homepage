import { plans, prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI agents for SaaS and software companies (/use-cases/ai-agents-for-saas, 23 Nov 2026): the whole range inside a
   software company, one card per job. No competitor or competitor customer is named and no figure is borrowed.
   Cobalt Desk is invented, at a .example address. */

const path = '/use-cases/ai-agents-for-saas'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives every AI agent in your software company its own inbox, phone number and browser, on one API and one bill. A persona holds all three under one name, so agents test your sign-up, call back demo requests and track competitors, and your users’ agents get an identity too.'

export const useCase: TeamPage = {
  id: 'ai-agents-for-saas',
  kind: 'case',
  name: 'AI agents for SaaS',
  card: 'Sign-up tests, demo callbacks and an inbox for every user’s agent.',
  meta: {
    path,
    title: 'AI agents for SaaS: an inbox, number and browser per agent',
    description:
      'AI agents for SaaS and software companies: each agent gets its own inbox, number and browser to test sign-up, call back demos and track competitors. Start free.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agents for SaaS', path },
    ],
  },

  hero: { pill: 'SaaS and software', headline: 'AI agents for SaaS: one for every job, each with its own inbox, number and browser.', sub },

  scene: {
    steps: [
      { icon: 'mail', label: 'A new user signs up at 02:00' },
      { icon: 'record', label: 'The verification email is read' },
      { icon: 'check', label: 'The code is tried in the browser' },
      { icon: 'chat', label: 'The finding reaches your team' },
    ],
    who: 'Iris, the sign-up tester at Cobalt Desk',
    note: 'Verification email arrived after the code expired',
    fleet: '14 journeys a night · 3 regions · one inbox each',
    rows: [
      { at: '02:00', kind: 'browser.page', text: 'Signed up on cobaltdesk.example · 14-day trial started' },
      { at: '02:00', kind: 'email.received', text: 'Verify your email · sent 02:00, arrived 02:11' },
      { at: '02:11', kind: 'browser.page', text: 'Code entered · “This code has expired”', tone: 'fail' },
      { at: '02:12', kind: 'blueprint.result', text: 'Sign-up blocked for new users · reported to #growth', tone: 'fail' },
    ],
    caption: 'A sign-up that failed at 02:00, found before the morning’s new users hit it. Cobalt Desk is an invented example.',
  },

  uses: {
    heading: 'Every team in a software company has a job for an agent.',
    line: 'For founders, product, QA, support, sales, growth, customer success and the engineers who ship agents to their own users.',
    items: [
      {
        kit: 'build',
        name: 'An inbox and number for every user’s agent',
        line: 'Each agent your users create inside your app gets its own address and number, so it can sign up, take codes and reply.',
        pieces: ['email', 'phone', 'personas'],
      },
      {
        kit: 'test',
        name: 'Your sign-up, tested as a new user every night',
        line: 'A fresh persona signs up, reads the verification email and enters the code in a browser, and tells you the minute it fails.',
        blueprint: 'sign-in-code-check',
        pieces: ['email', 'browser', 'personas'],
      },
      {
        kit: 'test',
        name: 'Onboarding emails, read as the user would',
        line: 'It follows your welcome and day-3 emails, checks each link and shows what a trial user sees first.',
        blueprint: 'website-audit',
        pieces: ['email', 'browser'],
      },
      {
        kit: 'talk',
        name: 'Your support bot, asked as a customer',
        line: 'Personas ask your bot the questions customers ask, and each answer is kept beside your help centre.',
        blueprint: 'support-bot-check',
        pieces: ['personas', 'messaging', 'email'],
      },
      {
        kit: 'talk',
        name: 'Every demo request called back in a minute',
        line: 'The agent rings the number on the form, qualifies the lead and books the call, then writes the result to your CRM.',
        blueprint: 'speed-to-lead-callback',
        pieces: ['phone', 'personas'],
      },
      {
        kit: 'talk',
        name: 'An AI SDR with its own inbox',
        line: 'It emails from its own address to people who asked to hear from you, and every reply comes back to the same thread.',
        pieces: ['email', 'personas'],
      },
      {
        kit: 'portals',
        name: 'Competitors’ trials, upgrade prompts and pricing',
        line: 'Agents start the same trials you compete with, and note each plan change, upgrade prompt and email as it appears.',
        blueprint: 'trial-teardown',
        pieces: ['browser', 'email', 'personas'],
      },
      {
        kit: 'train',
        name: 'Your own agents, tested in a sandbox before release',
        line: 'Every build runs against scripted users in a sandbox overnight, and the score lands before the release call.',
        blueprint: 'nightly-agent-evaluation',
        pieces: ['sandbox', 'personas'],
      },
      {
        kit: 'portals',
        name: 'Vendor invoices collected',
        line: 'Every week it downloads each new invoice and receipt from your vendor portals and files it for finance.',
        blueprint: 'invoice-collector',
        pieces: ['email', 'phone', 'browser'],
      },
    ],
  },

  sizes: {
    heading: 'The same work at three sizes.',
    line: 'From a founder’s first agent to an agent for each of your users. The cost below comes from list rates, before model tokens.',
    items: [
      {
        label: 'A 5-person startup',
        agents: '3 agents · 3 inboxes · 1 number · one event log',
        jobs: ['A nightly sign-up test', 'Demo requests called back', 'Competitors’ trials tracked'],
        usage: { inbox: 3, number: 1, voice: 60, browser: 20 },
      },
      {
        label: 'A 300-person scale-up',
        agents: '40 agents · 40 inboxes · 6 numbers · one event log',
        jobs: ['Onboarding and support bot checked daily', 'An AI SDR team on its own inboxes', 'Vendor invoices filed'],
        usage: { inbox: 40, number: 6, email: 4000, voice: 900, sms: 600, register: 1, browser: 250, sandbox: 100 },
      },
      {
        label: 'An enterprise software company',
        agents: '100,000 users’ agents · 100,000 inboxes · numbers on request',
        jobs: ['An identity for every user’s agent', 'Agents tested in sandboxes before each release', 'A sign-up check in every region'],
        usage: { inbox: 100000, number: 2000, email: 600000, sms: 80000, voice: 30000, register: 40, browser: 4000, sandbox: 5000 },
      },
    ],
  },

  blueprints: {
    heading: 'Test your sign-up, answer every lead and track the market.',
    line: 'No code. Point a blueprint at your sign-up page, demo form or support bot, and every result lands in Slack, a sheet or your CRM.',
    slugs: ['sign-in-code-check', 'support-bot-check', 'speed-to-lead-callback', 'trial-teardown', 'nightly-agent-evaluation', 'invoice-collector'],
  },

  prices: ['inbox', 'number', 'email', 'voice', 'sandbox', 'browser'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Founders and CTOs', gets: 'One account for every agent, with the day’s calls, emails and sign-up tests in a single timeline.', watch: 'Trial sign-ups, activation, cost per agent' },
      { role: 'Heads of product and QA leads', gets: 'A new user signs up every night and reports what broke, with the email and the screen behind it.', watch: 'Sign-up completion, time to first value, escaped bugs' },
      { role: 'Heads of growth and sales', gets: 'Demo requests answered by phone in a minute, and competitors’ trials and pricing logged as they change.', watch: 'Speed to lead, demo-to-opportunity rate, win rate' },
      { role: 'Platform engineers', gets: 'An inbox, number and browser for each user’s agent through one API, with sandboxes to test before release.', watch: 'Agents live, release pass rate, cost per user' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/trial-checks-for-software-companies', '/use-cases/otp-testing', '/use-cases/ai-agent-platforms'],
  },

  faq: {
    heading: 'Before your first agent goes to work.',
    items: [
      {
        q: 'What do AI agents for SaaS cost?',
        a: `Start on the Free plan, with no credit card. Paid plans are ${orList(fees)} a month, and usage is billed at list rates. An inbox is ${prices.inbox.amount} a month, a number ${prices.number.amount} a month and calls ${prices.voice.amount} a minute. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Do agents tell people they are an AI?',
        a: 'Yes, whenever they talk to a person by phone, text or email. They call and text only people who gave you their number, use only logins they are given, and stop at any identity check and before payment unless given a card.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How do results reach our tools?',
        a: 'Subscribe once to email.received, call.ended and blueprint.result. Each result reaches Slack, your CRM or a sheet through one signed webhook, and every blueprint can send to any format you choose.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Can we run it for each of our users’ agents?',
        a: 'Yes. Create a persona per user through the API, and each gets its own inbox and, if you want one, a number. Enterprise adds your own branding and volume pricing.',
        link: { label: 'AI agent platforms', to: '/use-cases/ai-agent-platforms' },
      },
      {
        q: 'Can it check competitors’ trials?',
        a: 'Yes, for trials that need only an email. The agent signs up as itself, records what it sees and stops at any identity check.',
        link: { label: 'Sales intelligence', to: '/use-cases/sales-intelligence-behind-the-login' },
      },
    ],
  },

  final: {
    heading: 'Give your first software agent its own inbox, number and browser.',
    capture: { kind: 'waitlist', source: 'case-ai-agents-for-saas', button: 'Start free', interest: 'any' },
  },
}
