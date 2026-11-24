import { plans, prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI agents for startups (/use-cases/ai-agents-for-startups, 23 Nov 2026, Seun: "actually add a use case for startups"):
   the company, where /founders is the person. Each team's first job, run by an agent before the team gets its hire, and
   the same work at pre-seed, seed and Series B, costed from prices.ts. Owns "ai agents for startups", "best ai agents for
   startups" and "building ai agents for startups" (Google suggestions, 23 Nov 2026). Six cards, not more (Seun: "every
   addition should not feel like a dump"). Tallow is invented, at a .example address. */

const path = '/use-cases/ai-agents-for-startups'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives every AI agent at your startup its own phone number, inbox and browser, on one API and one bill. A persona holds all three under one name, so sales, support, product and finance each get an agent before each gets a hire. Pick a blueprint or describe the job with no code, or build on the API.'

export const useCase: TeamPage = {
  id: 'ai-agents-for-startups',
  kind: 'case',
  name: 'AI agents for startups',
  card: 'Sales, support, product and finance covered, from pre-seed to Series B.',
  meta: {
    path,
    title: 'AI agents for startups: sales, support and product, one API',
    description:
      'AI agents for startups from pre-seed to Series B: each agent gets a phone number, inbox and browser to call back leads, test releases and watch competitors.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agents for startups', path },
    ],
  },

  hero: { pill: 'Startups', headline: 'AI agents for startups: every team covered before you hire it.', sub },

  scene: {
    steps: [
      { icon: 'phone', label: 'Sales: a demo request is called back' },
      { icon: 'mail', label: 'Support: a refund question is answered' },
      { icon: 'browser', label: 'Growth: a competitor’s trial is read' },
      { icon: 'code', label: 'Product: the release is tested as a new user' },
    ],
    who: 'Nine agents at Tallow, four teams',
    note: 'Four teams covered before the first hire',
    fleet: '15 people · 9 agents · 4 teams · one bill',
    rows: [
      { at: '09:12', kind: 'call.ended', text: 'Sales · demo request called back in 44 s · meeting booked Thursday' },
      { at: '10:30', kind: 'email.sent', text: 'Support · refund question answered from your policy · ticket closed' },
      { at: '11:05', kind: 'browser.page', text: 'Growth · a competitor’s new Team plan read on day 1 of its trial' },
      { at: '14:09', kind: 'blueprint.result', text: 'Product · release 3.8 stopped the welcome email · sent to #eng', tone: 'fail' },
    ],
    caption: 'One day at a 15-person startup: four teams’ first jobs, each run by an agent of its own. Tallow is an invented example.',
  },

  uses: {
    heading: 'An agent for every team, before every hire.',
    line: 'Each team’s first job, run by an agent with its own number, inbox and browser.',
    items: [
      {
        kit: 'talk',
        name: 'Sales: every demo request called back',
        line: 'A form on your site gets a call from your number within a minute, and the meeting lands in the founder’s calendar.',
        blueprint: 'speed-to-lead-callback',
        pieces: ['phone', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Support: your bot asked what customers ask',
        line: 'Personas ask your support bot about refunds, plans and cancelling, and each answer is kept beside your policy.',
        blueprint: 'support-bot-check',
        pieces: ['personas', 'messaging', 'email'],
      },
      {
        kit: 'test',
        name: 'Product: sign-up tested after every release',
        line: 'A persona signs up as a new user after each release and finds the step that breaks before users do.',
        blueprint: 'website-audit',
        pieces: ['personas', 'email', 'browser'],
      },
      {
        kit: 'portals',
        name: 'Growth: competitors’ trials tracked',
        line: 'A persona starts each competitor’s trial as a new user and keeps every email, prompt and offer it gets.',
        blueprint: 'trial-teardown',
        pieces: ['personas', 'email', 'browser'],
      },
      {
        kit: 'portals',
        name: 'Finance: invoices in for month-end',
        line: 'Every week it downloads each invoice and receipt from the tools you pay, so nothing is missing at close.',
        blueprint: 'invoice-collector',
        pieces: ['browser', 'email', 'personas'],
      },
      {
        kit: 'train',
        name: 'Engineering: your agent tested every night',
        line: 'If your product runs agents, each one works through real tasks with its own inbox, number and browser, and every step is scored.',
        blueprint: 'nightly-agent-evaluation',
        pieces: ['sandbox', 'email', 'phone', 'browser'],
      },
    ],
  },

  sizes: {
    heading: 'Pre-seed, seed, Series B.',
    line: 'The same agents as the company grows, with a month’s usage worked out at list rates.',
    items: [
      {
        label: 'Pre-seed: two founders',
        agents: '3 agents · 1 number · 2 inboxes · one event log',
        jobs: ['Every demo request called back', 'Sign-up tested after each release', 'Invoices in for month-end'],
        usage: { number: 1, inbox: 2, voice: 120, sms: 200, email: 2000, browser: 20, register: 1 },
      },
      {
        label: 'Seed: 15 people',
        agents: '9 agents · 4 numbers · 8 inboxes · one event log',
        jobs: ['Support bot asked every morning', 'Competitors’ trials tracked each week', 'Your own agent tested every night'],
        usage: { number: 4, inbox: 8, voice: 1500, personaVoice: 300, sms: 2000, email: 15000, browser: 150, sandbox: 100, register: 1 },
      },
      {
        label: 'Series B: 150 people',
        agents: '15,000 customers’ agents · 15,000 inboxes · 1,500 numbers',
        jobs: ['An inbox and a number for every customer’s agent', 'Each release tested in sandboxes first', 'Every event through one signed webhook'],
        usage: { inbox: 15000, number: 1500, email: 800000, sms: 60000, voice: 20000, personaVoice: 4000, browser: 6000, sandbox: 15000, register: 1 },
      },
    ],
  },

  blueprints: {
    heading: 'The first blueprint for each team.',
    line: 'No code. Pick one, or describe the job in a sentence, and every result lands in Slack, your inbox or a sheet.',
    slugs: ['speed-to-lead-callback', 'support-bot-check', 'website-audit', 'trial-teardown', 'invoice-collector', 'nightly-agent-evaluation'],
  },

  prices: ['persona', 'number', 'inbox', 'voice', 'browser', 'sandbox'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Founders and CEOs', gets: 'Each team’s first job covered before its first hire, on one bill.', watch: 'Pipeline, runway, burn' },
      { role: 'Product and engineering leads', gets: 'A sign-up check after every release and your agents tested every night.', watch: 'Activation rate, incidents, time to ship' },
      { role: 'Growth and sales leads', gets: 'Every demo request called back, and competitors’ trials and prices kept.', watch: 'Speed to lead, pipeline, trial to paid' },
      { role: 'Operations and finance', gets: 'Invoices and receipts collected from every tool you pay, every week.', watch: 'Month-end close, spend by tool, hours of admin' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/ai-agents-for-saas', '/use-cases/ai-sdr', '/use-cases/otp-testing'],
  },

  faq: {
    heading: 'Before your startup’s first agent starts work.',
    items: [
      {
        q: 'What do AI agents for startups cost?',
        a: `Start on the Free plan, with no credit card: it includes a number that receives calls and texts. To text and call people back, paid plans are ${orList(fees)} a month, and usage is billed at list rates. A number is ${prices.number.amount} a month, calls ${prices.voice.amount} a minute and texts ${prices.sms.amount} each. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does it grow with us?',
        a: 'Yes. The same pieces run one agent at pre-seed and an agent for every customer later, on one bill. Enterprise adds an account per team and white label.',
        link: { label: 'AI agents for enterprise', to: '/use-cases/ai-agents-for-enterprise' },
      },
      {
        q: 'Do we need an engineer to set it up?',
        a: 'No. Pick a blueprint, or describe the job in a sentence and we set it up as a blueprint for you. Your engineers can build on the same pieces through the API and an MCP server.',
        link: { label: 'AI agents without code', to: '/no-code' },
      },
      {
        q: 'Does the agent tell people it’s an AI?',
        a: 'Yes, whenever it talks to a person, by phone, text or email. It texts and calls only people who gave you their number, uses only the logins it is given, works within a monthly spend limit you set on its key, and stops before payment unless it’s given the card.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How do results reach our tools?',
        a: 'Each call, text, email and finished job reaches Slack, your CRM or a sheet through one signed webhook. Your event log keeps every step, with the transcript.',
        link: { label: 'Browse blueprints', to: '/blueprints' },
      },
    ],
  },

  final: {
    heading: 'Give your startup’s first agent its own number and inbox.',
    capture: { kind: 'waitlist', source: 'case-ai-agents-for-startups', button: 'Start free', interest: 'any' },
  },
}
