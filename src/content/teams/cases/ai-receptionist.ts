import { plans, prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI receptionist (/use-cases/ai-receptionist, 22 Nov 2026): one job in one industry, the small-business front desk.
   Modelled on the small-business receptionist pattern in the Product Marketing book, job 1 (a number and texting
   registration per business; after-hours answering; a text back when a caller hangs up). No competitor or competitor
   customer is named and no figure is borrowed. Hollybrook Plumbing is invented, at a .example address. */

const path = '/use-cases/ai-receptionist'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives your AI receptionist its own phone number, inbox and browser, on one API and one bill. A persona holds all three under one name, so it answers the 9pm call and texts the booking back.'

export const useCase: TeamPage = {
  id: 'ai-receptionist',
  kind: 'case',
  name: 'AI receptionist',
  meta: {
    path,
    title: 'AI receptionist: phone number, texts and booking for agents',
    description:
      'An AI receptionist for small business on its own number: it answers every call, texts the booking back and emails the details. Start free, no credit card.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI receptionist', path },
    ],
  },

  hero: { pill: 'Small businesses', headline: 'AI receptionist: every call answered, every booking confirmed by text.', sub },

  scene: {
    steps: [
      { icon: 'phone', label: 'A customer calls at 9pm' },
      { icon: 'check', label: 'The receptionist books the visit' },
      { icon: 'chat', label: 'It texts the booking back' },
      { icon: 'record', label: 'Every call lands in the log' },
    ],
    who: 'Robin, the receptionist at Hollybrook Plumbing',
    note: 'Booked at 9pm, with nobody at the desk',
    fleet: '8 locations · every call answered',
    rows: [
      { at: '21:04', kind: 'call.received', text: '+1 512 555 0187 · 4 min 05 s · transcript kept' },
      { at: '21:08', kind: 'call.ended', text: 'Booked: water heater repair, Thu 8 to 10 am · confirmation texted', tone: 'ok' },
      { at: '21:09', kind: 'email.sent', text: 'Your booking and the visit fee · robin@hollybrook.example' },
      { at: '21:31', kind: 'sms.received', text: '“Can the plumber call when he’s on the way?”' },
      { at: '21:31', kind: 'webhook', text: 'Booking and reply sent to your calendar' },
    ],
    caption: 'A call at 9pm, booked, texted and emailed from one identity. Hollybrook Plumbing is an invented example.',
  },

  uses: {
    heading: 'Every caller answered, every booking confirmed.',
    line: 'For plumbers, salons, clinics, law firms and any small business that loses work to a missed call.',
    items: [
      {
        kit: 'talk',
        name: 'Every call answered',
        line: 'Your AI receptionist answers on its own US or UK number, nights and weekends included, with a transcript of every call.',
        pieces: ['phone', 'personas'],
      },
      {
        kit: 'talk',
        name: 'A text back after a hang-up',
        line: 'When a caller hangs up before booking, the receptionist texts them from the same number to finish it.',
        pieces: ['phone', 'messaging'],
      },
      {
        kit: 'talk',
        name: 'Bookings confirmed by text and email',
        line: 'It texts the time, emails the details from its own inbox and sends a reminder the day before.',
        pieces: ['phone', 'email', 'personas'],
      },
      {
        kit: 'talk',
        name: 'WhatsApp and iMessage',
        line: 'Customers who would rather message reach the same receptionist on WhatsApp or iMessage, under the same name.',
        pieces: ['messaging', 'personas'],
      },
      {
        kit: 'build',
        name: 'A number for every business you serve',
        line: 'Each business you build a receptionist for gets its own number, inbox and texting registration, under your brand on Enterprise.',
        pieces: ['phone', 'email', 'personas'],
      },
      {
        kit: 'test',
        name: 'Your receptionist, called every morning',
        line: 'Personas call it as new customers, then wait days for the text, email and callback it promised.',
        blueprint: 'voice-agent-check',
        pieces: ['personas', 'phone', 'email'],
      },
    ],
  },

  blueprints: {
    heading: 'Text back every missed call, confirm every booking, and check your receptionist.',
    line: 'No code. Pick a job, name the number, and every result lands in Slack, a sheet or your inbox.',
    slugs: ['missed-call-text-back', 'appointment-reminders', 'voice-agent-check', 'lead-leaks', 'ai-disclosure-check'],
  },

  prices: ['number', 'voice', 'sms', 'register', 'inbox', 'persona'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Small business owners', gets: 'Every call answered and booked, nights and weekends, with a transcript to read in the morning.', watch: 'Missed calls, jobs booked, booking rate' },
      { role: 'Office and front desk managers', gets: 'The day’s calls, texts and emails in one timeline per customer.', watch: 'Response time, callbacks kept, no-shows' },
      { role: 'Developers building AI receptionists', gets: 'A number, an inbox and texting registration for each business you serve, on one key.', watch: 'Cost per business, call minutes, latency' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/verify', '/use-cases/ai-agent-for-dental-practices', '/use-cases/ai-agent-for-property-management'],
  },

  faq: {
    heading: 'Before your receptionist takes its first call.',
    items: [
      {
        q: 'What does an AI receptionist cost?',
        a: `Start on the Free plan, with no credit card: it includes a number that receives calls and texts. To text back and call out, paid plans are ${orList(fees)} a month, and usage is billed at list rates. A number is ${prices.number.amount} a month, calls ${prices.voice.amount} a minute and texts ${prices.sms.amount} each. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does the receptionist say it’s an AI?',
        a: 'Yes, whenever it talks to a person, by phone, text or email. It stops before payment unless it’s given the customer’s own payment card, and it stops at any identity check.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'Can I bring my own voice agent?',
        a: 'Yes. Point the number at your voice agent, or let Obsession connect one. Each call reaches your webhook as call.received and call.ended, with its transcript, beside every text and email.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'What about callers who hang up, or calls it gets wrong?',
        a: 'Every call lands in your event log with its time and transcript, and the receptionist texts back anyone who hangs up before booking. Voice agent check also calls it every morning as a new customer and keeps every answer.',
        link: { label: 'See the blueprint', to: '/blueprints/voice-agent-check' },
      },
    ],
  },

  final: {
    heading: 'Put your receptionist on its own number.',
    capture: { kind: 'waitlist', source: 'case-ai-receptionist', button: 'Start free', interest: 'voice-agent' },
  },
}
