import { plans, prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI agents for professional services (/use-cases/ai-agents-for-professional-services, 23 Nov 2026): law, accountancy and
   tax, consultancies, architecture and engineering, recruitment and HR advisers. One page that shows the range: enquiries,
   documents, deadlines, portals, invoices, the firm's own intake line, competitors and travel. Agents never give legal or
   tax advice: they chase, book, check and report. No competitor or competitor customer is named and no figure is borrowed.
   Harlow & Pike is invented, at a .example address. */

const path = '/use-cases/ai-agents-for-professional-services'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives the AI agents at your professional services firm their own phone number, inbox and browser, on one API and one bill. A persona holds all three under one name, so they answer new enquiries, chase documents, remind clients of deadlines and check portals.'

export const useCase: TeamPage = {
  id: 'ai-agents-for-professional-services',
  kind: 'case',
  name: 'AI agents for professional services',
  card: 'Enquiries answered, client files chased and portals checked each morning.',
  meta: {
    path,
    title: 'AI agents for professional services: calls, files, portals',
    description:
      'AI agents for professional services on their own numbers and inboxes: they answer enquiries, chase documents, remind clients and check portals. Start free.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agents for professional services', path },
    ],
  },

  hero: {
    pill: 'Professional services',
    headline: 'AI agents for professional services: every enquiry answered, every file chased.',
    sub,
  },

  scene: {
    steps: [
      { icon: 'phone', label: 'A new client calls after 6pm' },
      { icon: 'chat', label: 'The agent books the first meeting' },
      { icon: 'mail', label: 'It emails the list of papers' },
      { icon: 'record', label: 'Your case system updates itself' },
    ],
    who: 'Theo, the intake agent at Harlow & Pike',
    note: 'Called back at 6:12pm, booked for Tuesday',
    fleet: '6 offices · 18 agents · one event log',
    rows: [
      { at: 'Thu 18:04', kind: 'email.received', text: 'Website enquiry: “Our landlord has ended the lease early.”' },
      { at: 'Thu 18:06', kind: 'call.ended', text: 'Called back in 2 minutes · first meeting booked, Tue 10:00' },
      { at: 'Thu 18:07', kind: 'email.sent', text: 'Confirmation and a list of papers to bring · also sent by text' },
      { at: 'Thu 18:07', kind: 'blueprint.result', text: 'Enquiry logged in your case system · owner: Priya, property team', tone: 'ok' },
    ],
    caption: 'An enquiry answered in two minutes, after hours, with the papers requested. Harlow & Pike is an invented example.',
  },

  uses: {
    heading: 'From the first enquiry to the finished file.',
    line: 'For law firms, accountancy and tax firms, consultancies, architecture and engineering practices, and recruitment and HR advisers, and the developers who build for them.',
    items: [
      {
        kit: 'talk',
        name: 'New client enquiries',
        line: 'Your agent calls back every web form and missed call within minutes, at any hour, and books the first meeting.',
        blueprint: 'speed-to-lead-callback',
        pieces: ['phone', 'email', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Documents chased until the file is complete',
        line: 'Year-end records or case papers are requested by email and text, and each reply is matched to the client’s file.',
        blueprint: 'document-chaser',
        pieces: ['email', 'messaging', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Deadlines and appointments',
        line: 'Clients get a reminder by email and text before a filing date or a meeting, and move it with one reply.',
        blueprint: 'appointment-reminders',
        pieces: ['phone', 'email', 'messaging'],
      },
      {
        kit: 'portals',
        name: 'Government and client portals',
        line: 'In the government and client portals your firm has logins for, the agent reads each matter’s status every morning and writes it to your log.',
        pieces: ['browser', 'personas'],
      },
      {
        kit: 'portals',
        name: 'Supplier invoices collected',
        line: 'Each new invoice and receipt from your suppliers’ portals is downloaded every week and filed for finance.',
        blueprint: 'invoice-collector',
        pieces: ['email', 'browser', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Your own intake line, called as a new client',
        line: 'Personas call and fill in your website form as new clients, and time how long the answer and the callback take.',
        blueprint: 'voice-agent-check',
        pieces: ['personas', 'phone', 'email'],
      },
      {
        kit: 'watch',
        name: 'Competitor firms',
        line: 'Their fees, offers and new services are read every week and the changes land in Slack.',
        blueprint: 'competitor-tracking',
        pieces: ['browser', 'personas'],
      },
      {
        kit: 'buy',
        name: 'Travel for client visits',
        line: 'Trains and hotels are booked within the firm’s policy, and each receipt goes to the engagement’s folder.',
        blueprint: 'travel-booking-agent',
        pieces: ['browser', 'email', 'personas'],
      },
      {
        kit: 'build',
        name: 'Practice software with an agent per client matter',
        line: 'You build an inbox, a number and a browser for each matter, under your brand, with one event log.',
        pieces: ['email', 'phone', 'browser', 'personas'],
      },
    ],
  },

  sizes: {
    heading: 'From a three-partner firm to a network of 1,500.',
    line: 'The same agents at three sizes, with a month’s usage worked out at list rates.',
    items: [
      {
        label: 'A 3-partner firm',
        agents: '2 agents · 2 numbers · 2 inboxes · one event log',
        jobs: ['Enquiries called back after hours', 'Year-end records chased by email and text', 'Supplier invoices filed'],
        usage: { number: 2, inbox: 2, voice: 150, sms: 400, email: 1500, browser: 10, register: 1 },
      },
      {
        label: 'A 250-person firm with 6 offices',
        agents: '40 agents · 6 numbers · 40 inboxes · an account per office',
        jobs: ['Every office’s intake line answered and booked', 'Deadlines reminded by email and text', 'Government portals checked every morning'],
        usage: { number: 6, inbox: 40, voice: 3000, personaVoice: 600, sms: 12000, email: 40000, browser: 300, register: 1 },
      },
      {
        label: 'A network of 1,500 member firms or offices',
        agents: '1,500 agents · 1,500 numbers · 1,500 inboxes · one event log',
        jobs: ['Each member’s enquiries and reminders on its own number', 'Every member’s intake line tested the same morning', 'Competitor fees and offers watched in each market'],
        usage: { number: 1500, inbox: 1500, voice: 60000, personaVoice: 15000, sms: 150000, email: 400000, browser: 3000, register: 20 },
      },
    ],
  },

  blueprints: {
    heading: 'Return every enquiry, complete every file, and test your own front door.',
    line: 'No code. Name the firm’s number, form or portal, and every answer lands in Slack, a sheet or your case system.',
    slugs: ['speed-to-lead-callback', 'document-chaser', 'appointment-reminders', 'invoice-collector', 'voice-agent-check', 'competitor-tracking'],
  },

  prices: ['number', 'voice', 'sms', 'register', 'inbox', 'browser'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Managing partners', gets: 'Every enquiry answered and every competitor’s move in one weekly summary.', watch: 'New client enquiries, conversion to first meeting, utilisation' },
      { role: 'Practice and operations managers', gets: 'Documents chased, deadlines reminded and portals checked, with the day’s activity in one timeline.', watch: 'Files complete on time, response time, missed deadlines' },
      { role: 'Finance leads', gets: 'Every supplier invoice downloaded and filed, and each portal checked every morning.', watch: 'Invoices filed on time, missing invoices, month-end close' },
      { role: 'Developers building for professional services', gets: 'An inbox, a number and a browser for each client matter, under your brand on Enterprise.', watch: 'Firms live, call minutes, cost per matter' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/ai-receptionist', '/use-cases/ai-recruiter', '/verify'],
  },

  faq: {
    heading: 'Before your agent answers its first enquiry.',
    items: [
      {
        q: 'What do AI agents for a professional services firm cost?',
        a: `Start on the Free plan, with no credit card: it includes a number that receives calls and texts. To text reminders and call clients back, paid plans are ${orList(fees)} a month, and usage is billed at list rates. A number is ${prices.number.amount} a month, calls ${prices.voice.amount} a minute and texts ${prices.sms.amount} each. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does the agent give legal or tax advice?',
        a: 'No. It chases documents, books meetings, reminds clients, checks portals and reports what it found, and a person at your firm gives every piece of advice. It says it is an AI whenever it talks to a person, texts and calls only people who gave your firm their number, and stops at any identity check.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How do results reach our case or practice system?',
        a: 'Subscribe once to call.ended, sms.received and email.received. Each enquiry, reply and portal status reaches your system through one signed webhook, and a copy can go to Slack or a sheet.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Can it run across our offices or member firms?',
        a: 'Yes. Each office or member firm gets its own number and inbox under its own name, and every call, text and email lands in one event log. Enterprise adds your brand and a central view.',
        link: { label: 'See the plans', to: '/pricing' },
      },
      {
        q: 'Which guides cover law and accounting firms in depth?',
        a: 'The guide to an AI agent for law firms covers intake, conflicts checks and client updates. The guide to an AI agent for accountants covers year-end records and deadline reminders.',
        link: { label: 'AI agent for accountants', to: '/blog/ai-agent-for-accountants' },
      },
    ],
  },

  final: {
    heading: 'Give your firm’s agents their own number.',
    capture: { kind: 'waitlist', source: 'case-ai-agents-for-professional-services', button: 'Start free', interest: 'callback' },
  },
}
