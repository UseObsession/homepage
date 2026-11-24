import { plans, prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI agent platforms (/use-cases/ai-agent-platforms, 23 Nov 2026, _research/seo/use-cases-23nov): for the developer or
   founder building an agent product or platform, from a startup with 100 users to an enterprise platform with a million
   agents. Owns "ai agent platform", "ai agent platform for enterprise", "building ai agents for startups" and
   "infrastructure for ai agent platforms". Modelled on the build job in the Product Marketing book (an identity per end
   user's agent, sign-in codes, signed-in browsers, one event stream). No competitor or competitor customer is named and
   no figure is borrowed. Pathfinder is an invented agent platform, at a .example address. */

const path = '/use-cases/ai-agent-platforms'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives every agent on your AI agent platform its own phone number, inbox and browser, on one API and one bill. A persona holds all three under one identity, created in one call when your user signs up, from 100 users to a million.'

export const useCase: TeamPage = {
  id: 'ai-agent-platforms',
  kind: 'case',
  name: 'AI agent platforms',
  card: 'An inbox, a number and a browser for every user’s agent.',
  meta: {
    path,
    title: 'AI agent platform: an inbox, number and browser per user',
    description:
      'Build an AI agent platform on one API: every user’s agent gets its own inbox, number and signed-in browser in one call. Scale from 100 users to a million.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agent platforms', path },
    ],
  },

  hero: {
    pill: 'Agent platforms',
    headline: 'An AI agent platform where every user’s agent has its own inbox, number and browser.',
    sub,
  },

  scene: {
    steps: [
      { icon: 'person', label: 'A user signs up to your product' },
      { icon: 'persona', label: 'One call creates their agent’s identity' },
      { icon: 'mail', label: 'The agent catches its first sign-in code' },
      { icon: 'record', label: 'Every event reaches your backend' },
    ],
    who: 'Nova, a user’s agent on Pathfinder',
    note: 'One call, a whole identity, signed in',
    fleet: '10,000 personas · 10,000 inboxes · 4,000 numbers',
    rows: [
      { at: '10:14:02', kind: 'webhook', text: 'user.created · Pathfinder asks for an identity for Maya’s agent' },
      { at: '10:14:03', kind: 'blueprint.result', text: 'Persona ready · inbox, US number and browser', tone: 'ok' },
      { at: '10:14:41', kind: 'email.received', text: 'Your Taskboard sign-in code · 604218 · 3 s' },
      { at: '10:14:44', kind: 'browser.page', text: 'taskboard.example · signed in · profile saved for next week' },
    ],
    caption: 'A user’s agent got its own identity and signed in to a tool in under a minute. Pathfinder is an invented example.',
  },

  uses: {
    heading: 'Everything your users’ agents need, per user.',
    line: 'For developers and founders building an AI agent platform, from the first 100 users to an enterprise rollout, and the teams who’d rather pick a blueprint than write code.',
    items: [
      {
        kit: 'build',
        name: 'An identity for every user’s agent',
        line: 'personas.create gives an agent an inbox, a number and a browser profile in one call, and holds them under one name.',
        pieces: ['personas', 'email', 'phone', 'browser'],
      },
      {
        kit: 'portals',
        name: 'Sign-in codes, caught for each agent',
        line: 'The text or email code a tool sends reaches that user’s agent, so it signs in without your user typing it.',
        pieces: ['phone', 'email', 'personas'],
      },
      {
        kit: 'portals',
        name: 'A browser that stays signed in per user',
        line: 'Each agent keeps its own browser profile on its own home connection, still signed in next week.',
        pieces: ['browser', 'personas'],
      },
      {
        kit: 'build',
        name: 'iMessage and WhatsApp for every customer',
        line: 'Your users reach their agent on the apps they already use, one line per customer, under your product’s name.',
        pieces: ['messaging', 'personas'],
      },
      {
        kit: 'build',
        name: 'Sandboxes for code tasks',
        line: 'When an agent has to run code or crunch a file, a sandbox starts for that task and costs almost nothing while it waits.',
        pieces: ['sandbox', 'personas'],
      },
      {
        kit: 'build',
        name: 'One signed webhook for every event',
        line: 'Calls, texts, emails and page visits reach your backend as events with screenshots, ready to replay.',
        pieces: ['personas', 'email', 'phone'],
      },
      {
        kit: 'train',
        name: 'Your own agents, tested every night',
        line: 'Test personas use your product as new users would, and every failed step is flagged before a customer meets it.',
        blueprint: 'nightly-agent-evaluation',
        pieces: ['personas', 'browser', 'email'],
      },
      {
        kit: 'test',
        name: 'Sign-in code delivery, checked each release',
        line: 'US and UK numbers and inboxes request a code and time how long it takes to arrive.',
        blueprint: 'sign-in-code-check',
        pieces: ['phone', 'email', 'personas'],
      },
      {
        kit: 'build',
        name: 'Blueprints your users start from',
        line: 'Start each user from a ready blueprint, such as an email agent on its own address, and let them change it to fit.',
        blueprint: 'inbox-agent',
        pieces: ['personas', 'email', 'phone'],
      },
    ],
  },

  sizes: {
    heading: 'The same platform, from 100 users to a million agents.',
    line: 'Each agent keeps its own identity at every size. A typical month, worked out at list rates, before model tokens.',
    items: [
      {
        label: 'A startup with 100 users',
        agents: '100 personas · 100 inboxes · 100 numbers · one event log',
        jobs: ['An identity in one call at sign-up', 'Sign-in codes caught for each user’s agent', 'Nightly tests of your own agent'],
        usage: { inbox: 100, number: 100, email: 20000, sms: 4000, voice: 300, browser: 200, sandbox: 50, register: 1 },
      },
      {
        label: 'A platform with 10,000 customers',
        agents: '10,000 personas · 10,000 inboxes · 4,000 numbers · 100 iMessage lines',
        jobs: ['A signed-in browser per customer', 'iMessage and WhatsApp lines for customers who ask', 'Sandboxes for code tasks, started per task'],
        usage: { inbox: 10000, number: 4000, email: 600000, sms: 200000, voice: 20000, browser: 8000, sandbox: 4000, imessage: 100, register: 1 },
      },
      {
        label: 'An enterprise platform with 1,000,000 agents',
        agents: '1,000,000 personas · 1,000,000 inboxes · 400,000 numbers · 2,000 iMessage lines',
        jobs: ['White label under your own brand, on Enterprise', 'Every event to one signed webhook, kept longer', 'Blueprints your users start from'],
        usage: { inbox: 1000000, number: 400000, email: 50000000, sms: 8000000, voice: 1000000, browser: 400000, sandbox: 200000, imessage: 2000, register: 200 },
      },
    ],
  },

  blueprints: {
    heading: 'Test your own agents nightly, and offer your users a ready-made job.',
    line: 'No code. Name your sign-up page or your agent, and every result lands in Slack, a sheet or your inbox.',
    slugs: ['nightly-agent-evaluation', 'sign-in-code-check', 'inbox-agent', 'missed-call-text-back', 'imessage-assistant', 'support-bot-check'],
  },

  prices: ['inbox', 'number', 'browser', 'sandbox', 'imessage', 'sms', 'register'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Founders building an agent product', gets: 'A working identity for every early user’s agent in one call, on one key and one bill.', watch: 'Time to first working agent, activation, cost per user' },
      { role: 'Developers on an agent platform', gets: 'Inboxes, numbers, browsers and sandboxes per user, with every event in one signed webhook.', watch: 'Agents live, sign-in success rate, events per agent' },
      { role: 'Platform and infrastructure leads', gets: 'One vendor for every piece an agent needs, with usage by piece and a spend cap you set.', watch: 'Cost per agent, uptime, vendors to manage' },
      { role: 'Enterprise leads', gets: 'White label under your brand on Enterprise, with the event log kept longer.', watch: 'Customers live, retention, support tickets per customer' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/otp-testing', '/use-cases/ai-agent-evaluation'],
  },

  faq: {
    heading: 'Before your platform creates its first agent.',
    items: [
      {
        q: 'What does an AI agent platform cost to run on Obsession?',
        a: `Start on the Free plan, with no credit card. Paid plans are ${orList(fees)} a month for Developer, Startup and Scale, and Enterprise is set with you. Usage is billed at list rates: an inbox is ${prices.inbox.amount} a month, a number ${prices.number.amount} a month and a browser ${prices.browser.amount} an hour. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Do our users’ agents tell people they’re an AI?',
        a: 'Yes, whenever an agent talks to a person. It texts and calls only people who gave your user their number, uses only the logins it’s given and works within a monthly spend limit you set on its key.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How do results reach our backend?',
        a: 'Subscribe once to call.ended, sms.received, email.received and browser.page. Every event reaches your backend through one signed webhook, and Slack, a sheet or your CRM can receive the same results.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Can we run it at many customers, under our brand?',
        a: 'Yes. Each customer’s agent gets its own persona, so one account holds 10,000 or a million. White label under your brand is on Enterprise.',
        link: { label: 'How personas work', to: '/developers#personas' },
      },
    ],
  },

  final: {
    heading: 'Give every user’s agent its own identity.',
    capture: { kind: 'waitlist', source: 'case-ai-agent-platforms', button: 'Start free', interest: 'any' },
  },
}
