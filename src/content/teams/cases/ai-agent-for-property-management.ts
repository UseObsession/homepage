import { plans, prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI agent for property management (/use-cases/ai-agent-for-property-management, 22 Nov 2026): one job in one industry,
   the leasing desk. Modelled on the leasing patterns in the Product Marketing book, job 1 (leasing calls answered after
   hours, tours booked and reminded by text, follow-up after the tour). No competitor or competitor customer is named and
   no figure is borrowed. Kestrel Living is invented, at a .example address. */

const path = '/use-cases/ai-agent-for-property-management'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives your AI agent for property management its own phone number, inbox and browser, on one API and one bill. A persona holds all three under one name, so a prospect who calls at 8pm gets a tour and a text confirming it.'

export const useCase: TeamPage = {
  id: 'ai-agent-for-property-management',
  kind: 'case',
  name: 'AI agent for property management',
  meta: {
    path,
    title: 'AI agent for property management: leasing calls and texts',
    description:
      'An AI agent for property management on each community’s own number: it answers leasing calls, books tours by text and emails the application link.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agent for property management', path },
    ],
  },

  hero: { pill: 'Property management', headline: 'AI agent for property management: every leasing call answered, every tour booked.', sub },

  scene: {
    steps: [
      { icon: 'phone', label: 'A prospect calls about a 2-bed' },
      { icon: 'check', label: 'The agent books a tour' },
      { icon: 'chat', label: 'It texts the time and address' },
      { icon: 'mail', label: 'It emails the application link' },
    ],
    who: 'Ava, the leasing agent at Kestrel Living',
    note: 'A tour booked at 8pm',
    fleet: '60 buildings · every call answered',
    rows: [
      { at: 'Thu 20:12', kind: 'call.received', text: '+1 480 555 0139 · 5 min 02 s · transcript kept' },
      { at: 'Thu 20:17', kind: 'call.ended', text: 'Tour booked: 2-bed at Saguaro Point, Sat 11:00 · confirmation texted', tone: 'ok' },
      { at: 'Sat 12:10', kind: 'email.sent', text: 'Thanks for touring · your application link · leasing@kestrel-living.example' },
      { at: 'Sat 12:40', kind: 'sms.received', text: '“Is parking included?”' },
      { at: 'Sat 12:41', kind: 'webhook', text: 'Tour, question and transcript sent to your CRM' },
    ],
    caption: 'A call at 8pm, a tour on Saturday and the application link after it, on one identity. Kestrel Living is an invented example.',
  },

  uses: {
    heading: 'Every enquiry answered, every tour on the calendar.',
    line: 'For property managers, apartment operators and leasing teams across every community, and the developers who build their agents.',
    items: [
      {
        kit: 'talk',
        name: 'Leasing calls answered',
        line: 'Your agent answers each community’s own number at night and at weekends, with a transcript of every call.',
        pieces: ['phone', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Tours booked and confirmed',
        line: 'It books the tour, texts the time and address, and sends a reminder the morning of the visit.',
        pieces: ['phone', 'messaging', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Follow-up after the tour',
        line: 'It emails the application link from its own inbox and answers the questions that come back by text.',
        pieces: ['email', 'phone'],
      },
      {
        kit: 'talk',
        name: 'Residents’ requests after hours',
        line: 'Residents call or text the same agent at night, and each maintenance request reaches your team through the webhook.',
        pieces: ['phone', 'messaging'],
      },
      {
        kit: 'talk',
        name: 'A number for every community',
        line: 'Every community gets its own number and inbox under one agent, so each lead is tied to the property it called.',
        pieces: ['phone', 'email', 'personas'],
      },
      {
        kit: 'test',
        name: 'Speed to lead on every listing',
        line: 'A persona enquires on your listings and your own form as a new renter and times the first call, text and email.',
        blueprint: 'lead-leaks',
        pieces: ['personas', 'browser', 'phone', 'email'],
      },
    ],
  },

  blueprints: {
    heading: 'Call every new lead back, confirm every viewing, and check every leasing line.',
    line: 'No code. Name the numbers and listings, and every answer lands in Slack, a sheet or your CRM.',
    slugs: ['speed-to-lead-callback', 'appointment-reminders', 'lead-leaks', 'voice-agent-check', 'ai-disclosure-check', 'listings-ai-answers'],
  },

  prices: ['number', 'voice', 'sms', 'register', 'inbox', 'persona'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Leasing directors', gets: 'Every enquiry answered and every tour confirmed, across every community, in one timeline.', watch: 'Lead-to-tour, tours booked, occupancy' },
      { role: 'Community and leasing managers', gets: 'Prospects who called last night already booked for a tour by morning.', watch: 'Response time, lead-to-lease, leases signed' },
      { role: 'Developers building leasing agents', gets: 'A number and an inbox for each community you manage, on one key and one bill.', watch: 'Communities live, call minutes, cost per community' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/sales', '/use-cases/ai-receptionist'],
  },

  faq: {
    heading: 'Before your agent answers its first prospect.',
    items: [
      {
        q: 'What does an AI agent for property management cost?',
        a: `Start on the Free plan, with no credit card: it includes a number that receives calls and texts. To text tour times and call prospects back, paid plans are ${orList(fees)} a month, and usage is billed at list rates. A number is ${prices.number.amount} a month, calls ${prices.voice.amount} a minute and texts ${prices.sms.amount} each. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does the agent say it’s an AI?',
        a: 'Yes, whenever it talks to a person, by phone, text or email. It stops before payment and at any identity check, so the application fee and the screening stay with the renter and your team.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'Can each community have its own number?',
        a: 'Yes. Each call to obsession.numbers.create({ country: "US" }) gives a community its own number, and every call.received and sms.received event names the number it reached, so your CRM knows the property.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Can we check what the agent tells each prospect?',
        a: 'Yes. Every call comes back as a transcript beside the texts and emails after it, so you can read what each prospect was told. Voice agent check calls each morning as different renters and keeps every answer beside your listing.',
        link: { label: 'See the blueprint', to: '/blueprints/voice-agent-check' },
      },
    ],
  },

  final: {
    heading: 'Which community should your agent answer first?',
    capture: { kind: 'waitlist', source: 'case-ai-agent-for-property-management', button: 'Start free', interest: 'voice-agent' },
  },
}
