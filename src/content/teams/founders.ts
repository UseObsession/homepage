import { plans, prices, registration } from '../prices'
import type { TeamPage } from './types'

/* Founders (/founders, 23 Nov 2026, Seun: "by team we should have a founder that covers any type of founder and also
   freelancers ... same bar as the use case"): any founder, technical or not, in software, ecommerce, services or a local
   business, from the first customer to a product that gives every user an agent. Rebuilt the same day around the kinds
   of founder (Seun: "generalised ... any type of founder, services, software, AI, ecommerce ... their world and KPIs"),
   one at a time in a chooser, never a dump; three sizes costed from prices.ts. The address 301'd to / since the old founders page was retired; it is a page
   again. It owns "ai agents for founders", "ai agents for startups" and "ai tools for founders" (Google suggestions,
   23 Nov 2026, _research/seo/use-cases-23nov/autocomplete_founders_23nov.json); "ai agents for startups" belongs to
   /use-cases/ai-agents-for-startups and "ai agents for entrepreneurs" to the one-person company guide. Halden is invented, at a .example address. */

const path = '/founders'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives every AI agent at your company its own phone number, inbox and browser, on one API and one bill. Whether you build software, sell online, run a service or a local business, a persona holds all three under one name and takes the jobs you cover alone. Pick a blueprint, describe the job with no code, or build your product on the API.'

export const team: TeamPage = {
  id: 'founders',
  name: 'Founders',
  card: 'Software, AI, ecommerce, services or local: the jobs you cover alone, handled.',
  meta: {
    path,
    title: 'AI agents for founders: software, ecommerce, services, AI',
    description:
      'AI agents for founders of software, ecommerce, services, AI and local businesses: each agent gets a phone, inbox and browser, with no code or on the API.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Founders', path },
    ],
  },

  hero: { pill: 'Founders', headline: 'AI agents for founders: every job you cover alone, handled.', sub },

  scene: {
    steps: [
      { icon: 'record', label: 'At 07:00 it reads competitors’ prices' },
      { icon: 'phone', label: 'At 09:12 a demo request is called back' },
      { icon: 'key', label: 'At noon the invoices are filed' },
      { icon: 'check', label: 'At 18:06 a broken link is caught' },
    ],
    who: 'Four agents at Halden, one founder',
    note: 'Four jobs done before the founder looked',
    fleet: '4 agents · one founder · one bill',
    rows: [
      { at: '07:00', kind: 'browser.page', text: 'Competitors’ pricing pages read · 1 new plan since Friday' },
      { at: '09:12', kind: 'call.ended', text: 'Demo request called back in 38 s · call booked Thursday' },
      { at: '12:30', kind: 'blueprint.result', text: '14 invoices downloaded from vendor portals · filed for month-end' },
      { at: '18:06', kind: 'blueprint.result', text: 'Welcome email link opens a 404 · sent to #launch', tone: 'fail' },
    ],
    caption: 'One founder’s Tuesday: four agents, each on its own job. Halden is an invented example.',
  },

  kinds: {
    heading: 'Whatever you’re building, the jobs that slip first.',
    line: 'Pick your kind of founder: what decides your month, the jobs agents take off you and the numbers you watch.',
    label: 'Kinds of founder',
    items: [
      {
        name: 'Software and SaaS',
        short: 'Software',
        tag: 'Trials, demos and churn',
        world: 'Trials, demos and churn decide the month, and a broken sign-up costs you users you never hear from.',
        jobs: ['Every demo request called back within a minute', 'Sign-up and onboarding emails tested after every release', 'Competitors’ trials, upgrade prompts and pricing tracked'],
        kpis: 'Trial to paid, MRR, churn',
        blueprints: ['speed-to-lead-callback', 'website-audit', 'trial-teardown'],
      },
      {
        name: 'AI and agent startups',
        short: 'AI',
        tag: 'Agents that act for users',
        world: 'You ship agents that have to act in the world, and each one needs an inbox, a number and a browser of its own.',
        jobs: ['An inbox, a number, a browser and a sandbox for every user’s agent, from one API', 'Your agent run through real tasks every night, every step scored', 'Login codes caught by text, email and call'],
        kpis: 'Time to ship, task success rate, cost per user',
        blueprints: ['nightly-agent-evaluation', 'sign-in-code-check', 'inbox-agent'],
      },
      {
        name: 'Ecommerce and brands',
        short: 'Ecommerce',
        tag: 'Ads, baskets and repeat orders',
        world: 'Every pound of ad spend lands on a store, a basket and the emails that follow, or doesn’t.',
        jobs: ['Your store shopped as a new customer, every email and text kept', 'Each live ad’s landing page checked every morning for offer, price and stock', 'Competitors’ emails, offers and prices kept, dated'],
        kpis: 'Conversion rate, return on ad spend, repeat purchase rate',
        blueprints: ['mystery-shopper', 'ad-landing-check', 'competitor-tracking'],
      },
      {
        name: 'Services and agencies',
        short: 'Services',
        tag: 'Clients won and kept',
        world: 'Revenue is clients won and kept, and an enquiry that waits until evening often goes to someone else.',
        jobs: ['Every enquiry called back while you’re with a client', 'Client documents and sign-offs chased until they’re in', 'Prospects researched as a new customer before the pitch'],
        kpis: 'Enquiries to clients won, client retention, revenue per client',
        blueprints: ['speed-to-lead-callback', 'document-chaser', 'prospect-intelligence'],
      },
      {
        name: 'Local and multi-site',
        short: 'Local',
        tag: 'Clinics, trades, restaurants',
        world: 'The phone is the till: a missed call is a missed booking, and a no-show is an empty slot.',
        jobs: ['Missed calls texted back within seconds', 'Reminders the day before, and a new time offered after a no-show', 'Supplies reordered under the level you set, with the card you give it'],
        kpis: 'Bookings, calls answered, no-show rate',
        blueprints: ['missed-call-text-back', 'appointment-reminders', 'supplier-reorder-agent'],
      },
      {
        name: 'Marketplaces and platforms',
        short: 'Marketplaces',
        tag: 'Two sides to keep moving',
        world: 'Two sides to keep moving, and every seller or member wants answers from your platform, fast.',
        jobs: ['An agent with its own number and inbox for every seller or member', 'Sign-up tested on both sides after every release', 'Partners’ pages, links and codes checked every Monday'],
        kpis: 'Active sellers, time to first transaction, support load',
        blueprints: ['inbox-agent', 'website-audit', 'partner-checks'],
      },
      {
        name: 'Fintech and regulated',
        short: 'Fintech',
        tag: 'Applications and evidence',
        world: 'Every applicant costs money to win, and every promise your agents make has to hold up later.',
        jobs: ['Every application called back within a minute', 'Payslips and statements chased until the file is complete', 'Your voice agent checked for what it promises, and that it says it’s an AI'],
        kpis: 'Application completion, cost per funded account, complaints',
        blueprints: ['speed-to-lead-callback', 'document-chaser', 'ai-disclosure-check'],
      },
      {
        name: 'First-time founders',
        short: 'First-time',
        tag: 'You are every department',
        world: 'You are sales, support and finance at once, and the admin eats the hours you meant for customers.',
        jobs: ['A job described in a sentence becomes a blueprint, with no code', 'Routine email answered, and the rest handed to you', 'Invoices and receipts collected for your accountant'],
        kpis: 'Hours of admin, response time, leads followed up',
        blueprints: ['inbox-agent', 'invoice-collector', 'missed-call-text-back'],
      },
    ],
  },

  sizes: {
    heading: 'One founder, a team, a company with an agent per customer.',
    line: 'The same agents at three sizes, with a month’s usage worked out at list rates.',
    items: [
      {
        label: 'A solo founder',
        agents: '3 agents · 1 number · 2 inboxes · one event log',
        jobs: ['Every lead called back', 'Routine email answered', 'Invoices collected for month-end'],
        usage: { number: 1, inbox: 2, voice: 60, sms: 200, email: 1500, browser: 10, register: 1 },
      },
      {
        label: 'A 25-person company',
        agents: '12 agents · 5 numbers · 10 inboxes · one event log',
        jobs: ['Your sign-up or store tested after every change', 'Competitors watched each week', 'An agent for each team, with its own number'],
        usage: { number: 5, inbox: 10, voice: 2000, personaVoice: 300, sms: 3000, email: 20000, browser: 200, sandbox: 300, register: 1 },
      },
      {
        label: 'A company with an agent per customer',
        agents: '20,000 customers’ agents · 20,000 inboxes · 2,000 numbers',
        jobs: ['An inbox and a number for every customer’s agent', 'Every event through one signed webhook', 'Each release tested in sandboxes first'],
        usage: { inbox: 20000, number: 2000, email: 1000000, sms: 100000, voice: 30000, personaVoice: 5000, browser: 10000, sandbox: 20000, register: 1 },
      },
    ],
  },

  blueprints: {
    heading: 'Start with the job that slips first.',
    line: 'No code. Pick a blueprint or describe the job in your own words, and every result lands in Slack, your inbox or a sheet.',
    slugs: ['speed-to-lead-callback', 'inbox-agent', 'website-audit', 'mystery-shopper', 'competitor-tracking', 'missed-call-text-back'],
  },

  prices: ['persona', 'number', 'inbox', 'voice', 'browser', 'sandbox'],

  who: {
    heading: 'Who runs it beside you, and what they watch.',
    items: [
      { role: 'Founder and CEO', gets: 'Leads called back, competitors watched and the admin off your desk, with every step in one event log.', watch: 'Pipeline, runway, hours a week on admin' },
      { role: 'Your first engineer', gets: 'One API for every piece an agent needs, with every event through one signed webhook.', watch: 'Time to ship, incidents, vendors to manage' },
      { role: 'Your first operator or growth hire', gets: 'Blueprints that run without code, with every result in Slack or a sheet.', watch: 'Response time, conversion rate, cost per customer' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/ai-agents-for-startups', '/use-cases/ai-agents-for-saas', '/use-cases/ai-agent-for-home-services'],
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
        q: 'Is this only for software founders?',
        a: 'No. Founders of shops, service firms, clinics, trades, marketplaces and fintechs use the same pieces: a number that answers and calls back, an inbox that replies, a browser that checks pages and portals. The blueprint changes with the business, and the pieces stay the same.',
        link: { label: 'Every use case', to: '/use-cases' },
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
    ],
  },

  final: {
    heading: 'Give your first agent its own number and inbox.',
    capture: { kind: 'waitlist', source: 'team-founders', button: 'Start free', interest: 'any' },
  },
}
