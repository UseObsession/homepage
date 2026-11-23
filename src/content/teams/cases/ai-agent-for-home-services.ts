import { plans, prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI agent for home services (/use-cases/ai-agent-for-home-services, 23 Nov 2026): the range of one trade business's day,
   from the van's missed call to a franchise's 600 locations. Chosen from the Product Marketing book's talk, portals,
   watch, test and build jobs. No competitor or competitor customer is named and no figure is borrowed. Larkfield Heating
   and Plumbing is invented, at a .example address. */

const path = '/use-cases/ai-agent-for-home-services'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives the AI agent at your HVAC, plumbing or home services business its own phone number, inbox and browser, on one API and one bill. A persona holds all three under one name, so it answers the call while the crew is on a job, books it and texts the customer when the van is on its way.'

export const useCase: TeamPage = {
  id: 'ai-agent-for-home-services',
  kind: 'case',
  name: 'AI agent for home services',
  meta: {
    path,
    title: 'AI agent for home services: calls, quotes and texts',
    description:
      'An AI agent for HVAC, plumbers and home services on its own number: it answers calls, books jobs, chases quotes and sends reminders the day before.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agent for home services', path },
    ],
  },

  hero: {
    pill: 'Home services',
    headline: 'AI agent for home services: every call answered while the crew is on the job.',
    sub,
  },

  scene: {
    steps: [
      { icon: 'phone', label: 'A call comes in on a job' },
      { icon: 'chat', label: 'The agent texts back in seconds' },
      { icon: 'check', label: 'It takes the job and address' },
      { icon: 'record', label: 'The job reaches your board' },
    ],
    who: 'Wren, the dispatch agent at Larkfield Heating and Plumbing',
    note: 'Burst pipe booked in four minutes',
    fleet: '60 vans · one number each',
    rows: [
      { at: 'Sat 06:48', kind: 'call.ended', text: 'Burst pipe, Hillcrest Road · emergency, transcript kept' },
      { at: 'Sat 06:49', kind: 'sms.received', text: '“Please send someone, water is coming through the ceiling.”' },
      { at: 'Sat 06:52', kind: 'blueprint.result', text: 'Booked for 07:30 with Dan · arrival text sent', tone: 'ok' },
      { at: 'Sat 06:52', kind: 'webhook', text: 'Your job board has the job, address and photos' },
    ],
    caption: 'An emergency call booked before the office opened. Larkfield Heating and Plumbing is an invented example.',
  },

  uses: {
    heading: 'Every call answered, every job followed through.',
    line: 'For plumbers, HVAC and electrical firms, roofers, cleaners and home services brands, and the developers who build for them.',
    items: [
      {
        kit: 'talk',
        name: 'Missed calls, texted back',
        line: 'The crew can’t pick up under a sink, so the customer gets a text in seconds and the booking starts there.',
        blueprint: 'missed-call-text-back',
        pieces: ['phone', 'messaging'],
      },
      {
        kit: 'talk',
        name: 'Emergency calls, answered and booked',
        line: 'An AI voice agent for home services answers at 6am on a Saturday, takes the address and sends the job to your board.',
        pieces: ['phone', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Quotes, followed up',
        line: 'It emails the quote, texts a nudge three days later and brings the customer’s reply back to your inbox.',
        pieces: ['email', 'messaging', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Reminders and confirmations',
        line: 'A text the day before, a call to anyone who hasn’t confirmed, and a new time offered after a no-show.',
        blueprint: 'appointment-reminders',
        pieces: ['phone', 'messaging'],
      },
      {
        kit: 'buy',
        name: 'Parts and supplies, reordered',
        line: 'When stock falls under the level you set, it reorders from your supplier with the card you give it and logs the delivery date.',
        blueprint: 'supplier-reorder-agent',
        pieces: ['browser', 'email', 'personas'],
      },
      {
        kit: 'portals',
        name: 'Supplier portals, checked for parts',
        line: 'The agent signs in to your suppliers’ trade portals each morning and notes stock and the day’s prices.',
        pieces: ['browser', 'personas', 'email'],
      },
      {
        kit: 'portals',
        name: 'Competitors’ prices, watched',
        line: 'Personas read nearby firms’ callout fees and offers each week and show what changed.',
        blueprint: 'price-watch',
        pieces: ['personas', 'browser', 'email'],
      },
      {
        kit: 'talk',
        name: 'Your voice agent, called every morning',
        line: 'If an AI voice agent answers your line, a persona calls it each morning as a new customer and keeps what it quotes and books.',
        blueprint: 'voice-agent-check',
        pieces: ['personas', 'phone', 'email'],
      },
      {
        kit: 'build',
        name: 'Field service software, built on one key',
        line: 'Give each business you serve its own number, inbox and browser, and one event log across all of them.',
        pieces: ['phone', 'email', 'browser', 'personas'],
      },
    ],
  },

  sizes: {
    heading: 'One plumber with two vans, or 600 locations.',
    line: 'The same agent, from the first van to the whole network.',
    items: [
      {
        label: 'One plumber, two vans',
        agents: '1 agent · 1 number · 1 inbox',
        jobs: ['Missed calls texted back', 'Reminders the day before', 'Review requests'],
        usage: { number: 1, inbox: 1, sms: 300, voice: 120, register: 1 },
      },
      {
        label: 'A firm with 40 vans',
        agents: '4 agents · 4 numbers · one event log',
        jobs: ['Emergency calls booked', 'Quotes followed up', 'Supplier portals checked', 'Competitor prices watched'],
        usage: { number: 4, inbox: 4, sms: 6000, voice: 3000, personaVoice: 1500, browser: 40, register: 1 },
      },
      {
        label: 'A franchise brand with 600 locations',
        agents: '600 agents · 600 numbers · one event log',
        jobs: ['Every location’s calls answered', 'Your answering line checked daily', 'Prices watched in every market'],
        usage: { number: 600, inbox: 600, sms: 150000, voice: 60000, personaVoice: 30000, browser: 1200, register: 5 },
      },
    ],
  },

  blueprints: {
    heading: 'Return every missed call, remind every customer, and watch your suppliers and competitors.',
    line: 'No code. Name your number or your supplier portals, and every answer lands in Slack, a sheet or your inbox.',
    slugs: ['missed-call-text-back', 'appointment-reminders', 'speed-to-lead-callback', 'supplier-reorder-agent', 'price-watch', 'voice-agent-check'],
  },

  prices: ['number', 'voice', 'sms', 'register', 'inbox', 'browser'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Owners', gets: 'Every call answered while you’re on a job, with the day’s calls, texts and quotes in one timeline.', watch: 'Jobs booked, missed calls, quotes won' },
      { role: 'Office managers and dispatchers', gets: 'The phone covered, the job board filled and every customer reminded the day before.', watch: 'Booking rate, response time, no-shows' },
      { role: 'Franchise and operations leads', gets: 'One number for every location and a morning check that each line answers well.', watch: 'Calls answered by location, speed to book, review rate' },
      { role: 'Developers building for field service', gets: 'A number, an inbox and a browser for each business, under your brand on Enterprise.', watch: 'Businesses live, call minutes, cost per business' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/ai-receptionist', '/use-cases/ai-agent-for-property-management'],
  },

  faq: {
    heading: 'Before your agent takes its first call.',
    items: [
      {
        q: 'What does an AI agent for HVAC or plumbing cost?',
        a: `Start on the Free plan, with no credit card: it includes a number that receives calls and texts. To text customers and call them back, paid plans are ${orList(fees)} a month, and usage is billed at list rates. A number is ${prices.number.amount} a month, calls ${prices.voice.amount} a minute and texts ${prices.sms.amount} each. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does the agent tell customers it’s an AI?',
        a: 'Yes, whenever it talks to a person, by phone, text or email. It texts and calls only people who gave your business their number, and it stops before payment unless it’s given the customer’s own payment card.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How does a booked job reach our job board?',
        a: 'Subscribe once to call.ended, sms.received and email.received. Each booking, reply and quote reaches your job board, Slack, a CRM or a sheet through one signed webhook, with the call’s transcript.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Can one agent cover many locations?',
        a: 'Each location gets its own agent, number and inbox under one persona and one event log, so a 600-location brand sees every call in one place and each manager sees theirs.',
        link: { label: 'Talk to the Enterprise plan', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Give your crew’s agent its own number.',
    capture: { kind: 'waitlist', source: 'case-ai-agent-for-home-services', button: 'Start free', interest: 'voice-agent' },
  },
}
