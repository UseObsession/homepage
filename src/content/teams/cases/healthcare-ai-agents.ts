import { plans, prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* Healthcare AI agents (/use-cases/healthcare-ai-agents, 23 Nov 2026): the whole range of jobs in one industry, from
   missed calls to payer portals, for clinics, hospitals, care groups, payers and healthtech builders. Owns "healthcare
   ai agents", "ai agents in healthcare use cases", "ai agents for clinics", "ai agents for hospitals", "ai voice agents
   for clinics" and "healthcare ai agent companies" (Google suggestions, 23 Nov 2026); /blog/ai-agent-for-healthcare keeps
   "ai agent for healthcare". No competitor or customer is named and no figure is borrowed. No HIPAA or certification
   claim, no medical advice: a run on patient details starts after a business associate agreement is signed. Meadowvale
   Clinics is invented, at a .example address. */

const path = '/use-cases/healthcare-ai-agents'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives every healthcare AI agent its own phone number, inbox and browser, on one API and one bill. A persona holds them under one name, so one agent can return a missed call, chase a referral and check a payer portal, from one clinic to a health system.'

export const useCase: TeamPage = {
  id: 'healthcare-ai-agents',
  kind: 'case',
  name: 'Healthcare AI agents',
  card: 'Missed calls returned, reminders sent and payer portals checked.',
  meta: {
    path,
    title: 'Healthcare AI agents: calls, reminders and portal work',
    description:
      'Healthcare AI agents on their own number, inbox and browser: they return missed calls, remind patients, chase referrals and check payer portals. Start free.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Healthcare AI agents', path },
    ],
  },

  hero: {
    pill: 'Clinics, hospitals and payers',
    headline: 'Healthcare AI agents: every missed call returned, every portal checked.',
    sub,
  },

  scene: {
    steps: [
      { icon: 'phone', label: 'A call to the clinic goes unanswered' },
      { icon: 'chat', label: 'The agent texts the caller back' },
      { icon: 'check', label: 'The patient picks a time' },
      { icon: 'record', label: 'The booking reaches your system' },
    ],
    who: 'Robin, the front desk agent at Meadowvale Clinics',
    note: 'A missed call became a booking',
    fleet: '30 clinics · 30 numbers · 4,800 calls a month',
    rows: [
      { at: 'Tue 12:14', kind: 'call.ended', text: 'Missed call from a new patient · no voicemail' },
      { at: 'Tue 12:14', kind: 'sms.sent', text: 'Text sent: “Sorry we missed you. Want to book a visit?”' },
      { at: 'Tue 12:16', kind: 'sms.received', text: '“Thursday morning please.”' },
      { at: 'Tue 12:17', kind: 'blueprint.result', text: 'Booked Thu 09:30 · confirmation texted', tone: 'ok' },
    ],
    caption: 'A missed call turned into a booking in three minutes. Meadowvale Clinics is an invented example.',
  },

  uses: {
    heading: 'From the front desk to the payer portal.',
    line: 'For clinics, hospitals, care groups and payers running AI voice agents and portal agents, and the healthtech developers who build them.',
    items: [
      {
        kit: 'talk',
        name: 'Missed calls texted back',
        line: 'Every call nobody picked up gets a text in seconds, and the booking lands in your schedule.',
        blueprint: 'missed-call-text-back',
        pieces: ['phone', 'messaging'],
      },
      {
        kit: 'talk',
        name: 'Reminders and rebooking',
        line: 'Patients who gave their number get a text or call before the visit and can move it by reply.',
        blueprint: 'appointment-reminders',
        pieces: ['phone', 'messaging', 'personas'],
      },
      {
        kit: 'portals',
        name: 'Prior authorization status',
        line: 'The agent signs in to payer portals with the logins you give it and brings each answer to your queue.',
        blueprint: 'prior-authorization-status',
        pieces: ['browser', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Referral and intake documents',
        line: 'It emails each missing form from its own inbox and keeps the reply in the same thread.',
        blueprint: 'document-chaser',
        pieces: ['email', 'personas'],
      },
      {
        kit: 'buy',
        name: 'Supplier reorders',
        line: 'When stock runs low the agent reorders from your approved suppliers and files the receipt.',
        blueprint: 'supplier-reorder-agent',
        pieces: ['browser', 'email', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Your patient line, called as a new patient',
        line: 'Personas call and use your booking page every morning, and a missed callback reaches Slack.',
        blueprint: 'voice-agent-check',
        pieces: ['personas', 'phone', 'browser'],
      },
      {
        kit: 'talk',
        name: 'Your patient-facing agent, checked',
        line: 'It checks what your agent promises and that it says it is an AI, then keeps each answer.',
        blueprint: 'ai-disclosure-check',
        pieces: ['personas', 'phone', 'sandbox'],
      },
      {
        kit: 'build',
        name: 'An agent per patient, for developers',
        line: 'Healthtech teams give each patient’s agent an inbox, a number and a browser through one API.',
        pieces: ['email', 'phone', 'browser', 'personas'],
      },
    ],
  },

  sizes: {
    heading: 'The same work at three sizes.',
    line: 'Each agent keeps its own identity, from one clinic to thousands of agents.',
    items: [
      {
        label: 'One clinic',
        agents: '1 agent · 1 number · one event log',
        jobs: ['Missed calls texted back', 'Reminders by text', 'A nightly check of the phone line'],
        usage: { number: 1, voice: 300, personaVoice: 60, sms: 600, inbox: 1, email: 400, register: 1 },
      },
      {
        label: 'A 30-site practice group',
        agents: '30 agents · 30 numbers · one event log',
        jobs: ['Reminders and rebooking at every site', 'Referral documents chased', 'Prior authorization checked each morning'],
        usage: { number: 30, voice: 9000, personaVoice: 1500, sms: 18000, inbox: 30, email: 12000, browser: 60, register: 1 },
      },
      {
        label: 'A health system or payer with thousands of agents',
        agents: '3,000 agents · one identity each',
        jobs: ['Voice agents on a pool of numbers', 'Portal checks across every payer', 'Regression tests after each model update'],
        usage: { number: 600, voice: 600000, personaVoice: 40000, sms: 500000, inbox: 600, email: 400000, browser: 3000, sandbox: 3000, register: 4 },
      },
    ],
  },

  blueprints: {
    heading: 'Return every missed call, chase every document and test your patient line tonight.',
    line: 'No code. Name your number, your booking page or your agent, and every answer lands in Slack, a sheet or your inbox.',
    slugs: ['missed-call-text-back', 'appointment-reminders', 'prior-authorization-status', 'document-chaser', 'voice-agent-check', 'ai-disclosure-check'],
  },

  prices: ['number', 'voice', 'sms', 'register', 'inbox', 'browser'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Practice managers', gets: 'Every call answered or texted back, with the day’s calls, texts and emails in one timeline.', watch: 'New patient bookings, no-shows, missed calls' },
      { role: 'Revenue cycle leads', gets: 'Each payer portal checked before clinics open, every answer in your work queue with a screenshot.', watch: 'Days in accounts receivable, authorizations pending, rework' },
      { role: 'Patient access and digital leads', gets: 'Reminders, intake documents and a nightly check of your line and your agent.', watch: 'Reminder replies, form completion, answer time' },
      { role: 'Healthtech developers', gets: 'An inbox, a number and a browser for each patient’s agent, under your brand on Enterprise.', watch: 'Agents live, call minutes, cost per patient' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/ai-agent-for-dental-practices', '/use-cases/prior-authorization-ai-agent'],
  },

  faq: {
    heading: 'Before your agent makes its first call.',
    items: [
      {
        q: 'What do healthcare AI agents cost?',
        a: `Start on the Free plan, with no credit card: it includes a number that receives calls and texts. To text reminders and call patients back, paid plans are ${orList(fees)} a month, and usage is billed at list rates. A number is ${prices.number.amount} a month, calls ${prices.voice.amount} a minute and texts ${prices.sms.amount} each. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does the agent tell patients it’s an AI?',
        a: 'Yes, whenever it talks to a person, by phone, text or email. It texts and calls only people who gave you their number, uses only the logins it’s given and works within a monthly spend limit you set on its key. It gives no medical advice.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'Can it work with patient details?',
        a: 'A run on patient details starts after a business associate agreement is signed with Obsession. Until then, use it on your phone line, your booking page and your own agent’s answers.',
        link: { label: 'See prior authorization status', to: '/blueprints/prior-authorization-status' },
      },
      {
        q: 'How do results reach our tools?',
        a: 'Subscribe once to call.ended, sms.received and email.received. Each booking, reply and portal answer reaches your scheduling system, CRM, sheet or Slack through one signed webhook.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Can I run it across many locations?',
        a: 'Yes. Each site gets its own number and agent under one event log, and texting is registered once per business. For one agent in depth, read the guide to an AI agent for healthcare.',
        link: { label: 'Read the guide', to: '/blog/ai-agent-for-healthcare' },
      },
    ],
  },

  final: {
    heading: 'Give your clinic’s agent its own number.',
    capture: { kind: 'waitlist', source: 'case-healthcare-ai-agents', button: 'Start free', interest: 'any' },
  },
}
