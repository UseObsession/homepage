import { plans, prices, registration } from '../../prices'
import { CONTACT_EMAIL } from '../../site'
import type { TeamPage } from '../types'

/* AI agents for enterprise (/use-cases/ai-agents-for-enterprise, 23 Nov 2026): the whole range across departments, from
   one team's pilot to a company with 100,000 agents. Built from the jobs in the Product Marketing book (talk to customers,
   work behind logins, watch the market, test your own sign-up and agents, train and test agents, buy and book) and the
   Enterprise plan's stated features (an account per team, white label, a spend cap). No competitor or competitor customer
   is named and no figure is borrowed; no certification or compliance is claimed. Kestrel Group is invented, at a
   .example address. */

const path = '/use-cases/ai-agents-for-enterprise'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

/* 26 Nov 2026 (the copy plan): the borrowed login named, then the live controls line, then the event log; the headline
   stays (ten cold B2B readers picked it over both new ones). */
const sub =
  'Every agent in your company gets its own phone number, inbox and browser, so it works under its own name, not a person’s. It signs in only with the logins you give it, and every call, email and page lands in one event log your security team can audit.'

export const useCase: TeamPage = {
  id: 'ai-agents-for-enterprise',
  kind: 'case',
  name: 'AI agents for enterprise',
  card: 'From one team’s agents to a million, each its own identity, on one bill.',
  meta: {
    path,
    title: 'AI agents for enterprise: a number, inbox and browser each',
    description:
      'AI agents for enterprise teams, each with its own phone, inbox and browser, one event log for audit and one bill. From 10 agents to a million. Start free.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agents for enterprise', path },
    ],
  },

  hero: {
    pill: 'Enterprise',
    headline: 'AI agents for enterprise: every agent an identity, every call, text and email on the record.',
    sub,
    primary: { label: 'Talk to us', to: `mailto:${CONTACT_EMAIL}?subject=Enterprise` },
    second: { label: 'Start free', to: '#join' },
  },

  scene: {
    steps: [
      { icon: 'phone', label: 'A supplier’s agent calls the line' },
      { icon: 'persona', label: 'The agent answers as itself' },
      { icon: 'mail', label: 'It emails the credit note' },
      { icon: 'record', label: 'Finance gets the event log' },
    ],
    who: 'Otto, an accounts agent at Kestrel Group',
    note: 'Every step logged, one agent, one name',
    fleet: '1,200 agents · 14 teams · one bill',
    rows: [
      { at: 'Tue 09:02', kind: 'call.ended', text: 'Supplier called about invoice 4417 · 3 min 10 s · transcript kept' },
      { at: 'Tue 09:05', kind: 'email.received', text: 'Credit note sent by the supplier to otto@kestrel.example' },
      { at: 'Tue 09:06', kind: 'browser.page', text: 'Signed in with the login it was given · invoice 4417 marked disputed' },
      { at: 'Tue 09:07', kind: 'blueprint.result', text: 'Dispute logged with the credit note attached', tone: 'ok' },
    ],
    caption: 'One agent took a supplier’s call, caught the credit note and updated the portal, and every step is on the record. Kestrel Group is an invented example.',
  },

  uses: {
    heading: 'One platform for every department’s agents.',
    line: 'For operations, customer experience, finance, procurement and IT teams, and the AI platform team that builds for all of them.',
    items: [
      {
        kit: 'talk',
        name: 'Customer calls and texts',
        line: 'Your voice and text agents answer on their own numbers, and every call and reply lands in the event log.',
        pieces: ['phone', 'messaging', 'personas'],
      },
      {
        kit: 'portals',
        name: 'Vendor and payer portals',
        line: 'Agents stay signed in to the portals your teams check every day, and catch the sign-in code by email or text.',
        pieces: ['browser', 'email', 'phone', 'personas'],
      },
      {
        kit: 'portals',
        name: 'Vendor invoices collected',
        line: 'Every week each new invoice and receipt is downloaded from your vendor portals and filed for finance.',
        blueprint: 'invoice-collector',
        pieces: ['email', 'messaging', 'personas'],
      },
      {
        kit: 'watch',
        name: 'Competitors and the market',
        line: 'Agents sign up, subscribe and keep watching, and your team sees each new price, offer and email the day it shows.',
        blueprint: 'competitor-tracking',
        pieces: ['browser', 'email', 'personas'],
      },
      {
        kit: 'test',
        name: 'Your own sign-up, tested as customers',
        line: 'Personas sign up to your product with their own inboxes and numbers, and catch the code that never came.',
        blueprint: 'sign-in-code-check',
        pieces: ['email', 'phone', 'browser', 'personas'],
      },
      {
        kit: 'train',
        name: 'Agents evaluated every night',
        line: 'Each of your agents is called and messaged as a customer overnight, and the answers sit beside your policy by morning.',
        blueprint: 'nightly-agent-evaluation',
        pieces: ['phone', 'email', 'sandbox', 'personas'],
      },
      {
        kit: 'buy',
        name: 'Purchasing and travel, within policy',
        line: 'Agents book and reorder inside the limits you set, and every confirmation and receipt is kept with the booking.',
        blueprint: 'travel-booking-agent',
        pieces: ['browser', 'email', 'personas'],
      },
      {
        kit: 'build',
        name: 'Agents for every team, on one key',
        line: 'Your platform team gives each agent a number, an inbox and a browser from one API, with an account per team and a spend cap you set.',
        pieces: ['phone', 'email', 'browser', 'sandbox', 'personas'],
      },
    ],
  },

  sizes: {
    heading: 'The same agents, from a team’s first ten to a million.',
    line: 'Three sizes, each with a month’s usage worked out at list rates.',
    items: [
      {
        label: 'A company of 100,000 agents',
        agents: '100,000 agents · every one a persona · one bill',
        jobs: ['Every department’s agents on one platform', 'Agents evaluated nightly and your own sign-up tested', 'White label and an account per team'],
        enterprise: true,
        usage: { number: 20000, inbox: 100000, voice: 1500000, personaVoice: 300000, sms: 2000000, email: 10000000, browser: 80000, sandbox: 150000, register: 40 },
      },
      {
        label: 'A business unit',
        agents: '1,000 agents · 1,000 inboxes · an account per team',
        jobs: ['Customer calls and texts on their own numbers', 'Vendor and payer portals worked every day', 'Competitors and the market watched every week'],
        enterprise: true,
        usage: { number: 400, inbox: 1000, voice: 40000, personaVoice: 10000, sms: 60000, email: 200000, browser: 2000, sandbox: 3000, register: 5 },
      },
      {
        label: 'A team’s first 10 agents',
        agents: '10 agents · 10 numbers · 10 inboxes · one event log',
        jobs: ['Supplier calls answered and logged', 'Vendor invoices downloaded each week', 'One portal checked every morning'],
        usage: { number: 10, inbox: 10, voice: 600, sms: 800, email: 3000, browser: 40, register: 1 },
      },
    ],
  },

  blueprints: {
    heading: 'Start a department on a blueprint, with no code.',
    line: 'Name the portal, the line or the supplier, and every answer lands in Slack, a sheet, your CRM or your inbox.',
    slugs: ['invoice-collector', 'competitor-tracking', 'sign-in-code-check', 'nightly-agent-evaluation', 'travel-booking-agent', 'voice-agent-check'],
  },

  prices: ['number', 'voice', 'sms', 'inbox', 'browser', 'register'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Operations leaders', gets: 'Portals worked and suppliers answered every day, with each action on one timeline.', watch: 'Cycle time, tasks done a day, cost per task' },
      { role: 'Customer experience leaders', gets: 'Calls and texts answered on their own numbers, with every transcript kept.', watch: 'Answer time, resolution rate, CSAT' },
      { role: 'IT and the AI platform team', gets: 'One API for every agent’s identity, an account per team, a spend cap you set and white label on Enterprise.', watch: 'Agents live, cost per agent, incidents' },
      { role: 'Risk, audit and procurement', gets: 'A dated record of what each agent did, and a purchase or booking kept with its receipt.', watch: 'Actions logged, receipts kept, spend by team' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/ai-receptionist', '/use-cases/ai-agent-evaluation', '/use-cases/agentic-commerce'],
  },

  faq: {
    heading: 'Before your first department goes live.',
    items: [
      {
        q: 'Why not let an agent use a staff member’s login?',
        a: 'Because every email and sign-in then looks like that person’s, and nobody can tell who did what. Each agent here works under its own identity, signs in only with the logins you give it, and every action lands in one event log your security team can read.',
      },
      {
        q: 'How do we talk to you about a rollout?',
        a: `Email ${CONTACT_EMAIL} with the teams and the work you want agents to take first. Enterprise adds an account per team or per client and SSO, and it starts monthly with nothing paid up front.`,
        link: { label: 'Email us about a rollout', to: `mailto:${CONTACT_EMAIL}?subject=Enterprise` },
      },
      {
        q: 'What do AI agents for enterprise cost?',
        a: `Start on the Free plan, with no credit card. Paid plans are ${orList(fees)} a month, and Enterprise is set with you, with an account per team. Usage is billed at list rates: a number is ${prices.number.amount} a month, calls ${prices.voice.amount} a minute, texts ${prices.sms.amount} each and an inbox ${prices.inbox.amount} a month. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Do the agents tell people they are an AI?',
        a: 'Yes, whenever one talks to a person, by phone, text or email. Each texts and calls only people who gave your business their number, uses only the logins it is given and works within a monthly spend limit you set on its key. It stops before payment unless it is given the card.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How do results reach our own tools?',
        a: 'Subscribe once to call.ended, sms.received, email.received and blueprint.result. Each reaches your CRM, ticketing system, sheet or Slack through one signed webhook, with the transcript or page attached.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Can we run agents for many teams and keep them apart?',
        a: 'Yes. Every agent is its own persona with its own number, inbox and browser, and each event is logged against it. Enterprise adds an account per team, white label and a spend cap you set.',
        link: { label: 'See Enterprise', to: '/pricing' },
      },
      {
        q: 'Can we bring our own voice agent?',
        a: 'Yes. Connect the voice agent you already use to a number, or let a persona speak for itself. Either way the call and its transcript land in the same event log.',
        link: { label: 'See the pieces', to: '/pricing/rates' },
      },
    ],
  },

  final: {
    heading: 'Give your first department’s agents their own numbers.',
    capture: { kind: 'waitlist', source: 'case-ai-agents-for-enterprise', button: 'Start free', interest: 'any' },
  },
}
