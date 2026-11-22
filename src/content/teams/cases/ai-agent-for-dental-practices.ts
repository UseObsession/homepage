import { plans, prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI agent for dental practices (/use-cases/ai-agent-for-dental-practices, 22 Nov 2026): one job in one industry, the
   practice's phone and recalls. Modelled on the clinic patterns in the Product Marketing book, job 1 (voice agents that
   book appointments; confirmations, recall reminders and form links by text). No competitor or competitor customer is
   named and no figure is borrowed. Brightwater Dental is invented, at a .example address. */

const path = '/use-cases/ai-agent-for-dental-practices'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives the AI agent at your dental practice its own phone number, inbox and browser, on one API and one bill. A persona holds all three under one name, so it books new patients, confirms by text and sends the six-month recall.'

export const useCase: TeamPage = {
  id: 'ai-agent-for-dental-practices',
  kind: 'case',
  name: 'AI agent for dental practices',
  meta: {
    path,
    title: 'AI agent for dental practices: calls, texts and recalls',
    description:
      'An AI agent for dental practices on its own number: it books new patients, texts confirmations and recalls, and emails the forms. Start free.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agent for dental practices', path },
    ],
  },

  hero: { pill: 'Dental practices', headline: 'AI agent for dental practices: every new patient call booked, every recall sent.', sub },

  scene: {
    steps: [
      { icon: 'chat', label: 'A reminder goes out the day before' },
      { icon: 'phone', label: 'The patient texts to move it' },
      { icon: 'check', label: 'The agent finds a free slot' },
      { icon: 'record', label: 'Your schedule updates itself' },
    ],
    who: 'Sky, the front desk agent at Brightwater Dental',
    note: 'Rebooked by text, no phone tag',
    fleet: '40 practices · one number each',
    rows: [
      { at: 'Mon 09:00', kind: 'email.sent', text: 'Reminder: cleaning and exam, Tue 9:00 · also sent by text' },
      { at: 'Mon 12:41', kind: 'sms.received', text: '“Can I move it to Thursday? Work came up.”' },
      { at: 'Mon 12:42', kind: 'blueprint.result', text: 'Moved to Thu 11:30 · confirmation texted', tone: 'ok' },
      { at: 'Mon 12:42', kind: 'webhook', text: 'Your scheduling system updated · the Tuesday slot is free again' },
    ],
    caption: 'A patient rebooked by text in a minute, and the Tuesday slot freed for someone else. Brightwater Dental is an invented example.',
  },

  uses: {
    heading: 'Every call booked, every patient back on time.',
    line: 'For general and specialist practices and dental groups running an AI voice agent for dental calls, and the developers who build it.',
    items: [
      {
        kit: 'talk',
        name: 'New patient calls',
        line: 'Your agent answers on the practice’s own number, at lunch, after hours and on Saturdays, and books the visit.',
        pieces: ['phone', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Confirmations and reminders',
        line: 'It texts the time when the visit is booked and a reminder the day before, and each reply lands in your event log.',
        pieces: ['phone', 'messaging'],
      },
      {
        kit: 'talk',
        name: 'Recalls',
        line: 'Patients due a cleaning get a text and an email from the same name, with a link to book.',
        pieces: ['phone', 'email', 'personas'],
      },
      {
        kit: 'talk',
        name: 'New patient forms',
        line: 'It emails the forms from its own inbox, and the patient’s reply comes back to the same thread.',
        pieces: ['email', 'personas'],
      },
      {
        kit: 'talk',
        name: 'WhatsApp and iMessage',
        line: 'Patients who would rather message reach the same agent on WhatsApp or iMessage, under the practice’s name.',
        pieces: ['messaging', 'personas'],
      },
      {
        kit: 'test',
        name: 'Your phone line, called every morning',
        line: 'Personas call as new patients, ask the price of a cleaning and wait days for the text and callback.',
        blueprint: 'voice-agent-check',
        pieces: ['personas', 'phone', 'email'],
      },
    ],
  },

  blueprints: {
    heading: 'Confirm every appointment, return every missed call, and hear what your agent tells patients.',
    line: 'No code. Name the practice’s number or booking form, and every answer lands in Slack, a sheet or your inbox.',
    slugs: ['appointment-reminders', 'missed-call-text-back', 'voice-agent-check', 'lead-leaks', 'ai-disclosure-check'],
  },

  prices: ['number', 'voice', 'sms', 'register', 'inbox', 'whatsapp'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Practice managers', gets: 'Every call answered and booked, with the day’s calls, texts and emails in one timeline.', watch: 'New patient bookings, no-shows, missed calls' },
      { role: 'Front desk and treatment coordinators', gets: 'The phone answered while you’re with a patient, and every booking confirmed by text.', watch: 'Booking rate, response time, recall bookings' },
      { role: 'Developers building agents for practices', gets: 'A number, an inbox and texting registration for each practice, under your brand on Enterprise.', watch: 'Practices live, call minutes, cost per practice' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/ai-receptionist', '/verify'],
  },

  faq: {
    heading: 'Before your agent books its first patient.',
    items: [
      {
        q: 'What does an AI agent for a dental practice cost?',
        a: `Start on the Free plan, with no credit card: it includes a number that receives calls and texts. To text reminders and call patients back, paid plans are ${orList(fees)} a month, and usage is billed at list rates. A number is ${prices.number.amount} a month, calls ${prices.voice.amount} a minute and texts ${prices.sms.amount} each. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does the agent tell patients it’s an AI?',
        a: 'Yes, whenever it talks to a person, by phone, text or email. It stops before payment unless it’s given the patient’s own payment card, and it stops at any identity check.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How does a booking reach our scheduling system?',
        a: 'Subscribe once to call.ended, sms.received and email.received. Each booking, confirmation and reply reaches your scheduling system through one signed webhook, with the call’s transcript.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'What if the agent quotes the wrong fee?',
        a: 'Voice agent check calls it every morning as new patients, asks your most common prices and keeps each answer beside your fee list. A wrong fee or a missing callback reaches Slack the same morning.',
        link: { label: 'See the blueprint', to: '/blueprints/voice-agent-check' },
      },
    ],
  },

  final: {
    heading: 'Give your practice’s agent its own number.',
    capture: { kind: 'waitlist', source: 'case-ai-agent-for-dental-practices', button: 'Start free', interest: 'voice-agent' },
  },
}
