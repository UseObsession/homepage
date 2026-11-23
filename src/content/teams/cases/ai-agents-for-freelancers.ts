import { plans, prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI agents for freelancers and solo founders (/use-cases/ai-agents-for-freelancers, 23 Nov 2026): one person, a studio or
   a network of freelancers, each agent with its own number, inbox and browser. Blueprints and "describe your own job"
   first, the API second. No competitor or competitor customer is named and no figure is borrowed. Cedar Studio is invented,
   at a .example address. */

const path = '/use-cases/ai-agents-for-freelancers'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives the AI agent you work with its own phone number, inbox and browser, on one API and one bill. A persona holds all three under one name, so it answers new enquiries, chases client documents and checks client portals while you work. Pick a blueprint or describe your own job, with no code.'

export const useCase: TeamPage = {
  id: 'ai-agents-for-freelancers',
  kind: 'case',
  name: 'AI agents for freelancers',
  meta: {
    path,
    title: 'AI agents for freelancers: a number, inbox and browser',
    description:
      'AI agents for freelancers and solo founders: it answers enquiries, chases client documents and works client portals with its own number and inbox. No code.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agents for freelancers', path },
    ],
  },

  hero: { pill: 'Freelancers and solo founders', headline: 'AI agents for freelancers: every enquiry answered, every client followed up.', sub },

  scene: {
    steps: [
      { icon: 'phone', label: 'A new enquiry rings while you’re with a client' },
      { icon: 'chat', label: 'The agent texts and takes the details' },
      { icon: 'check', label: 'It books a call in your diary' },
      { icon: 'record', label: 'The summary lands in your inbox' },
    ],
    who: 'Juno, the agent at Cedar Studio',
    note: 'Enquiry answered while you worked',
    fleet: '10,000 freelancers · an agent each',
    rows: [
      { at: 'Tue 14:02', kind: 'call.ended', text: 'Missed call from a new number · you were on a client call' },
      { at: 'Tue 14:02', kind: 'sms.received', text: '“Hi, I need a brand refresh for a launch in March.”' },
      { at: 'Tue 14:09', kind: 'email.received', text: 'Brief and budget received · reply drafted for your yes' },
      { at: 'Tue 14:10', kind: 'blueprint.result', text: 'Call booked Thu 10:00 · summary sent to you', tone: 'ok' },
    ],
    caption: 'A new client booked while the designer was on another call. Cedar Studio is an invented example.',
  },

  uses: {
    heading: 'The admin that eats your week, handled.',
    line: 'For freelancers, consultants, designers, developers, marketers and virtual assistants working alone, and the studios and networks around them.',
    items: [
      {
        kit: 'talk',
        name: 'New enquiries, called back',
        line: 'Every call and form is answered by text within minutes, and the person is called back while you’re with a client.',
        blueprint: 'speed-to-lead-callback',
        pieces: ['phone', 'messaging', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Missed calls, texted back',
        line: 'A call you can’t take gets a text from your number, and the reply lands in your event log.',
        blueprint: 'missed-call-text-back',
        pieces: ['phone', 'messaging'],
      },
      {
        kit: 'build',
        name: 'Inbox answered',
        line: 'An agent on its own address answers routine email and hands you the messages that need you.',
        blueprint: 'inbox-agent',
        pieces: ['email', 'personas'],
      },
      {
        kit: 'portals',
        name: 'Invoices and receipts collected',
        line: 'Every week it downloads each invoice and receipt from the tools and suppliers you pay, ready for your accountant.',
        blueprint: 'invoice-collector',
        pieces: ['email', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Client documents and approvals',
        line: 'It asks for the files and sign-offs by email or text, and tells you who still owes you one.',
        blueprint: 'document-chaser',
        pieces: ['email', 'messaging'],
      },
      {
        kit: 'portals',
        name: 'Client portals and tools',
        line: 'It signs in with the logins your clients give you, pulls the reports and files, and drops them in your folder.',
        pieces: ['browser', 'personas'],
      },
      {
        kit: 'watch',
        name: 'Competitors watched for your clients',
        line: 'A weekly page of what each client’s competitors changed, ready to send as a paid extra.',
        blueprint: 'competitor-tracking',
        pieces: ['browser', 'email', 'personas'],
      },
      {
        kit: 'test',
        name: 'A client’s sign-up or booking flow, checked',
        line: 'Your agent goes through it as a new customer and sends the broken steps, as paid audit work.',
        blueprint: 'website-audit',
        pieces: ['browser', 'email', 'personas'],
      },
      {
        kit: 'buy',
        name: 'Travel and supplies, within your limits',
        line: 'It books the trip or reorders the stock inside the budget you set, and stops before paying unless you give it the card.',
        blueprint: 'travel-booking-agent',
        pieces: ['browser', 'email', 'personas'],
      },
    ],
  },

  sizes: {
    heading: 'One freelancer, a studio, a network.',
    line: 'The same agents at three sizes, with a month’s usage worked out at list rates.',
    items: [
      {
        label: 'One freelancer',
        agents: '1 agent · 1 number · 1 inbox · one event log',
        jobs: ['Enquiries answered and called back', 'Invoices and receipts collected', 'Routine email answered'],
        usage: { number: 1, inbox: 1, voice: 30, sms: 120, email: 800, browser: 4, register: 1 },
      },
      {
        label: 'A 6-person studio',
        agents: '6 agents · 6 numbers · 6 inboxes · an agent per client',
        jobs: ['Client documents and approvals chased', 'Client portals worked with their logins', 'Competitors watched as a paid extra'],
        usage: { number: 6, inbox: 12, voice: 200, sms: 600, email: 6000, browser: 40, register: 1 },
      },
      {
        label: 'A network of 10,000 freelancers',
        agents: '10,000 agents · every one a persona · one bill',
        jobs: ['An agent for every member, with its own number and inbox', 'Members’ clients’ sign-ups checked', 'White label and an account per member'],
        usage: { number: 10000, inbox: 10000, voice: 150000, personaVoice: 30000, sms: 400000, email: 3000000, browser: 8000, register: 20 },
      },
    ],
  },

  blueprints: {
    heading: 'Answer every enquiry, chase every document, and describe your own job.',
    line: 'No code. Name the job in your own words, and every result lands in your inbox, Slack or a sheet.',
    slugs: ['speed-to-lead-callback', 'inbox-agent', 'invoice-collector', 'document-chaser', 'competitor-tracking', 'travel-booking-agent'],
  },

  prices: ['number', 'inbox', 'sms', 'voice', 'register', 'browser'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Freelancers and consultants', gets: 'Enquiries answered, documents chased and routine email answered, with the day in one timeline.', watch: 'Enquiries to calls booked, documents waiting, hours of admin' },
      { role: 'Studio owners', gets: 'An agent for each client, each with its own inbox and number, and every follow-up logged.', watch: 'Client response time, approvals waiting, billable hours' },
      { role: 'Marketplace product leads', gets: 'An agent for every member, with a number and inbox each, under your brand on Enterprise.', watch: 'Members with an agent, member earnings, cost per member' },
      { role: 'Developers building for freelancers', gets: 'A number, an inbox and a browser for each user from one API, with every event through one signed webhook.', watch: 'Users live, call minutes, cost per user' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/ai-receptionist', '/use-cases/ai-agent-for-customer-support'],
  },

  faq: {
    heading: 'Before your agent answers its first enquiry.',
    items: [
      {
        q: 'What do AI agents for freelancers cost?',
        a: `Start on the Free plan, with no credit card: it includes a number that receives calls and texts. To text and call people back, paid plans are ${orList(fees)} a month, and usage is billed at list rates. A number is ${prices.number.amount} a month, calls ${prices.voice.amount} a minute and texts ${prices.sms.amount} each. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Can I set this up without writing code?',
        a: 'Yes. Pick a blueprint, or describe your own job in a sentence and we set it up as a blueprint for you. Results go to your inbox, Slack or a sheet. If you build products, the same pieces come through the API.',
        link: { label: 'AI agents without code', to: '/no-code' },
      },
      {
        q: 'Does the agent tell people it’s an AI?',
        a: 'Yes, whenever it talks to a person, by phone, text or email. It texts and calls only people who gave you their number, uses only the logins it is given, stops at any identity check and stops before payment unless it’s given the card.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How do results reach my tools?',
        a: 'Each call, text, email and finished job reaches your CRM, sheet or Slack through one signed webhook, or arrives in your inbox. Your event log keeps every step, with the transcript.',
        link: { label: 'Browse blueprints', to: '/blueprints' },
      },
      {
        q: 'Can I run one agent per client?',
        a: 'Yes. Each client gets its own persona with its own number and inbox, so replies never mix. A network can give thousands of members an agent each on one bill.',
        link: { label: 'One-person company guide', to: '/blog/one-person-company-ai-agents' },
      },
    ],
  },

  final: {
    heading: 'Give your agent its own number and inbox.',
    capture: { kind: 'waitlist', source: 'case-ai-agents-for-freelancers', button: 'Start free', interest: 'callback' },
  },
}
