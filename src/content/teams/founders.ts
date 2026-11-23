import { plans, prices, registration } from '../prices'
import type { TeamPage } from './types'

/* Founders (/founders, 23 Nov 2026, Seun: "by team we should have a founder that covers any type of founder and also
   freelancers ... same bar as the use case"): any founder, technical or not, in software, ecommerce, services or a local
   business, from the first customer to a product that gives every user an agent. Seven types of blueprint across nine
   jobs, three sizes costed from prices.ts. The address 301'd to / since the old founders page was retired; it is a page
   again. It owns "ai agents for founders", "ai agents for startups" and "ai tools for founders" (Google suggestions,
   23 Nov 2026, _research/seo/use-cases-23nov/autocomplete_founders_23nov.json); "ai agents for entrepreneurs" stays with
   the one-person company guide. Halden is invented, at a .example address. */

const path = '/founders'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives every AI agent at your company its own phone number, inbox and browser, on one API and one bill. A persona holds all three under one name, so it answers leads, tests your sign-up before each launch and handles the admin. Pick a blueprint or describe the job with no code, or build your product on the API.'

export const team: TeamPage = {
  id: 'founders',
  name: 'Founders',
  card: 'Leads answered, launches tested and admin handled, technical or not.',
  meta: {
    path,
    title: 'AI agents for founders and startups: phone, inbox, browser',
    description:
      'AI agents for founders and startups, technical or not: each agent gets a phone number, inbox and browser to answer leads, test launches and run admin.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Founders', path },
    ],
  },

  hero: { pill: 'Founders and startups', headline: 'AI agents for founders: every lead answered, every launch tested.', sub },

  scene: {
    steps: [
      { icon: 'code', label: 'You ship a new onboarding at 18:00' },
      { icon: 'persona', label: 'A persona signs up as a new user' },
      { icon: 'mail', label: 'It waits for every email and code' },
      { icon: 'record', label: 'The broken step lands in Slack' },
    ],
    who: 'Rook, the launch agent at Halden',
    note: 'Broken link caught before your first users',
    fleet: '9 agents · one key · one bill',
    rows: [
      { at: '18:02', kind: 'browser.page', text: 'Signed up as a new user on a phone · screenshots saved' },
      { at: '18:03', kind: 'email.received', text: 'Verification code arrived in 4 s' },
      { at: '18:05', kind: 'email.received', text: 'Welcome email arrived · its “Start setup” link opens a 404' },
      { at: '18:06', kind: 'blueprint.result', text: 'Broken link in the welcome email · sent to #launch', tone: 'fail' },
    ],
    caption: 'A welcome email link that broke on launch night, caught before users met it. Halden is an invented example.',
  },

  uses: {
    heading: 'Every job a founder covers alone, run by agents.',
    line: 'For any founder, technical or not, in software, ecommerce, services or a local business, from the first customer to the first thousand.',
    items: [
      {
        kit: 'talk',
        name: 'Every lead called back in a minute',
        line: 'A form or a missed call gets a call back from your number within a minute, while you’re in a meeting or asleep.',
        blueprint: 'speed-to-lead-callback',
        pieces: ['phone', 'personas'],
      },
      {
        kit: 'build',
        name: 'Your inbox answered',
        line: 'An agent on its own address answers routine email from customers and suppliers, and hands you the rest.',
        blueprint: 'inbox-agent',
        pieces: ['email', 'personas'],
      },
      {
        kit: 'test',
        name: 'Your sign-up tested before every launch',
        line: 'A persona signs up after every release, waits for every email and code, and finds the step that breaks before users do.',
        blueprint: 'website-audit',
        pieces: ['personas', 'email', 'browser'],
      },
      {
        kit: 'test',
        name: 'Your store shopped as a new customer',
        line: 'For ecommerce founders: a persona signs up, fills a basket and keeps every email and text your store sends after it.',
        blueprint: 'mystery-shopper',
        pieces: ['personas', 'email', 'phone', 'browser'],
      },
      {
        kit: 'watch',
        name: 'Competitors watched from day one',
        line: 'Every email, offer and price your competitors send a new customer, dated, from the week you start.',
        blueprint: 'competitor-tracking',
        pieces: ['personas', 'email', 'browser'],
      },
      {
        kit: 'portals',
        name: 'Invoices collected for your accountant',
        line: 'Every week it downloads each invoice and receipt from the tools you pay, so nothing is missing at month-end.',
        blueprint: 'invoice-collector',
        pieces: ['browser', 'email', 'personas'],
      },
      {
        kit: 'build',
        name: 'Your agent product, on one key',
        line: 'If you build with agents, give every user’s agent a number, an inbox, a browser and a sandbox from one API.',
        pieces: ['email', 'phone', 'browser', 'sandbox', 'personas'],
      },
      {
        kit: 'train',
        name: 'Your agents tested every night',
        line: 'Before customers meet a new version, your agent runs real tasks with its own inbox, number and browser, and every step is scored.',
        blueprint: 'nightly-agent-evaluation',
        pieces: ['sandbox', 'email', 'phone', 'browser'],
      },
      {
        kit: 'buy',
        name: 'Travel booked within your limits',
        line: 'A trip request in Slack becomes flights and a hotel inside the budget you set, booked with the card you give it.',
        blueprint: 'travel-booking-agent',
        pieces: ['browser', 'email', 'personas'],
      },
    ],
  },

  sizes: {
    heading: 'One founder, a startup, a product with an agent per user.',
    line: 'The same agents at three sizes, with a month’s usage worked out at list rates.',
    items: [
      {
        label: 'A solo founder',
        agents: '2 agents · 1 number · 2 inboxes · one event log',
        jobs: ['Every lead called back', 'Routine email answered', 'Invoices collected for month-end'],
        usage: { number: 1, inbox: 2, voice: 60, sms: 200, email: 1500, browser: 10, register: 1 },
      },
      {
        label: 'A 25-person startup',
        agents: '12 agents · 5 numbers · 10 inboxes · one event log',
        jobs: ['Sign-up tested after every release', 'Competitors watched each week', 'Agents tested every night'],
        usage: { number: 5, inbox: 10, voice: 2000, personaVoice: 300, sms: 3000, email: 20000, browser: 200, sandbox: 300, register: 1 },
      },
      {
        label: 'A product with an agent per user',
        agents: '20,000 users’ agents · 20,000 inboxes · 2,000 numbers',
        jobs: ['An inbox and a number for every user’s agent', 'Every event through one signed webhook', 'Each release tested in sandboxes first'],
        usage: { inbox: 20000, number: 2000, email: 1000000, sms: 100000, voice: 30000, personaVoice: 5000, browser: 10000, sandbox: 20000, register: 1 },
      },
    ],
  },

  blueprints: {
    heading: 'Start with the job that slips first.',
    line: 'No code. Pick a blueprint or describe the job in your own words, and every result lands in Slack, your inbox or a sheet.',
    slugs: ['speed-to-lead-callback', 'website-audit', 'mystery-shopper', 'competitor-tracking', 'invoice-collector', 'nightly-agent-evaluation'],
  },

  prices: ['persona', 'number', 'inbox', 'voice', 'browser', 'sandbox'],

  who: {
    heading: 'Every kind of founder, and what they watch.',
    items: [
      { role: 'Founders who don’t code', gets: 'Blueprints that answer leads, test the sign-up and collect invoices, set up in a sentence.', watch: 'Leads to calls booked, response time, hours of admin' },
      { role: 'Technical founders building with agents', gets: 'A number, an inbox, a browser and a sandbox for every user’s agent from one API, with one signed webhook.', watch: 'Time to ship, cost per user, vendors to manage' },
      { role: 'Ecommerce and brand founders', gets: 'Your store and your competitors’ stores shopped as a new customer, with every email and text kept.', watch: 'Conversion rate, repeat purchase rate, baskets recovered' },
      { role: 'Services and agency founders', gets: 'Every enquiry called back, and each client’s competitors watched as work you can sell.', watch: 'Enquiries to clients won, client retention, revenue per client' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/ai-agents-for-saas', '/use-cases/ai-agent-platforms', '/use-cases/leak-checks-for-ecommerce-stores'],
  },

  faq: {
    heading: 'Before your first agent starts work.',
    items: [
      {
        q: 'What do AI agents for founders cost?',
        a: `Start on the Free plan, with no credit card: it includes a number that receives calls and texts. To text and call people back, paid plans are ${orList(fees)} a month, and usage is billed at list rates. A number is ${prices.number.amount} a month, calls ${prices.voice.amount} a minute and texts ${prices.sms.amount} each. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'I don’t code. Can I still use it?',
        a: 'Yes. Pick a blueprint, or describe the job in a sentence and we set it up as a blueprint for you. Results go to Slack, your inbox or a sheet, and nothing needs code.',
        link: { label: 'AI agents without code', to: '/no-code' },
      },
      {
        q: 'Can I build my startup’s product on it?',
        a: 'Yes. Every piece comes through one API and an MCP server: an inbox, a number, a browser and a sandbox for each agent, with every event through one signed webhook. Start free and add pieces as you grow.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Does the agent tell people it’s an AI?',
        a: 'Yes, whenever it talks to a person, by phone, text or email. It texts and calls only people who gave you their number, uses only the logins it is given, stops at any identity check and stops before payment unless it’s given the card.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'What should I hand an agent first?',
        a: 'The job that costs most when it slips: usually leads that wait, a sign-up nobody has tested since the last release, or invoices missing at month-end. Start with one blueprint, then add the next.',
        link: { label: 'Browse blueprints', to: '/blueprints' },
      },
    ],
  },

  final: {
    heading: 'Give your first agent its own number and inbox.',
    capture: { kind: 'waitlist', source: 'team-founders', button: 'Start free', interest: 'any' },
  },
}
