import { plans, prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI agent for hotels (/use-cases/ai-agent-for-hotels, 23 Nov 2026): the range of work in one industry, from the
   booking call at 2am to the rate check at 7am. Modelled on the hospitality stories in the competitor sweep (voice
   agents answering reservation calls, rate intelligence collected several times a day, agents working booking flows)
   and the job chapters of the Product Marketing book. No competitor or competitor customer is named and no figure is
   borrowed. Larkfield Hotels is invented, at a .example address. */

const path = '/use-cases/ai-agent-for-hotels'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives every AI agent at your hotel its own phone number, inbox and browser, on one API and one bill. A persona holds all three under one name, so it answers booking calls at any hour, texts guests before they arrive and checks competitors’ rates every morning.'

export const useCase: TeamPage = {
  id: 'ai-agent-for-hotels',
  kind: 'case',
  name: 'AI agent for hotels',
  meta: {
    path,
    title: 'AI agent for hotels: bookings, guests and rate checks',
    description:
      'An AI agent for hotels on its own number, inbox and browser: it answers booking calls, texts guests, handles group enquiries and checks rates. Start free.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agent for hotels', path },
    ],
  },

  hero: { pill: 'Hotels', headline: 'AI agent for hotels: every booking call answered, every rate checked before breakfast.', sub },

  scene: {
    steps: [
      { icon: 'phone', label: 'A guest calls at 2am' },
      { icon: 'chat', label: 'The agent books and texts a confirmation' },
      { icon: 'browser', label: 'At 7am it checks competitors’ rates' },
      { icon: 'record', label: 'Your team starts with both in Slack' },
    ],
    who: 'Wren, the front desk agent at Larkfield Hotels',
    note: 'Booked overnight, rates checked by seven',
    fleet: '40 hotels · one number each',
    rows: [
      { at: 'Tue 02:07', kind: 'call.ended', text: 'Double room, Fri to Sun · booked on the call · 3 min 10 s' },
      { at: 'Tue 02:08', kind: 'sms.received', text: '“Can we check in early on Friday?”' },
      { at: 'Tue 07:00', kind: 'browser.page', text: '3 competitors’ weekend rates read, 1 member price below yours' },
      { at: 'Tue 07:02', kind: 'blueprint.result', text: 'Early check-in noted · rate gap sent to #revenue', tone: 'ok' },
    ],
    caption: 'A booking taken at 2am and the weekend rates checked by seven. Larkfield Hotels is an invented example.',
  },

  uses: {
    heading: 'Every call answered, every guest looked after, every rate seen.',
    line: 'For independent hotels, groups and chains running an AI agent for hotel booking, guest messages and rate checks, and the developers who build for them.',
    items: [
      {
        kit: 'talk',
        name: 'Booking calls at any hour',
        line: 'Your agent answers on the hotel’s own number at 2am and during the breakfast rush, and books the room.',
        pieces: ['phone', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Pre-arrival texts and upsells',
        line: 'Guests get arrival details and a late check-out offer by text, WhatsApp or iMessage, and each reply lands in your event log.',
        pieces: ['messaging', 'phone', 'personas'],
      },
      {
        kit: 'build',
        name: 'Group and event enquiries',
        line: 'It answers a wedding or conference enquiry from its own inbox, asks the dates and head count, and hands over a ready brief.',
        blueprint: 'inbox-agent',
        pieces: ['email', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Reviews and guest requests',
        line: 'A towel request, a noisy-room message or a review reply goes to the right desk, with the guest’s thread attached.',
        pieces: ['email', 'messaging', 'personas'],
      },
      {
        kit: 'portals',
        name: 'Rates and member prices, every morning',
        line: 'A browser signs in as a new member at 3 competing hotels and reads each room rate and member price before your team starts.',
        blueprint: 'price-watch',
        pieces: ['browser', 'email', 'personas'],
      },
      {
        kit: 'watch',
        name: 'Booking-site listings',
        line: 'Your photos, prices, hours and policies are read on every booking site and map, and each wrong fact is traced.',
        blueprint: 'listings-ai-answers',
        pieces: ['browser', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Your chatbot, asked as a guest',
        line: 'Personas ask your booking chatbot about parking, pets and cancellation, and keep each answer beside your policy.',
        blueprint: 'support-bot-check',
        pieces: ['personas', 'browser', 'email'],
      },
      {
        kit: 'portals',
        name: 'Supplier invoices',
        line: 'A signed-in browser collects each invoice from your suppliers’ portals and flags any that don’t match the order.',
        blueprint: 'invoice-collector',
        pieces: ['browser', 'email', 'personas'],
      },
      {
        kit: 'build',
        name: 'Software for hotels',
        line: 'You build for hotels: each property gets its own number, inbox and browser, under your brand on Enterprise.',
        pieces: ['phone', 'email', 'browser', 'personas'],
      },
    ],
  },

  sizes: {
    heading: 'One hotel, a group or a chain.',
    line: 'The same agent at three sizes. Each agent keeps its own number and inbox, and every result lands in one event log.',
    items: [
      {
        label: 'One boutique hotel',
        agents: '1 agent · 1 number · 1 event log',
        jobs: ['Booking calls day and night', 'Pre-arrival texts', 'Rates checked each morning'],
        usage: { number: 1, inbox: 1, voice: 300, personaVoice: 300, sms: 400, browser: 8 },
      },
      {
        label: 'A 40-hotel group',
        agents: '40 agents · 40 numbers · one event log',
        jobs: ['Group and event enquiries by email', 'Guest requests and reviews', 'Listings checked on every booking site'],
        usage: { number: 40, inbox: 40, voice: 9000, personaVoice: 9000, sms: 16000, email: 20000, browser: 150, register: 1 },
      },
      {
        label: 'A chain of 900 properties',
        agents: '900 agents · 900 numbers · one event log',
        jobs: ['Your chatbot asked as a guest', 'Rates and member prices across every market', 'Invoices from supplier portals'],
        usage: { number: 900, inbox: 900, voice: 150000, personaVoice: 150000, sms: 350000, email: 400000, browser: 3000, register: 1 },
      },
    ],
  },

  blueprints: {
    heading: 'Return every missed call, watch every rate and test your own booking flow.',
    line: 'No code. Name the hotel’s number, booking site or competitors, and every answer lands in Slack, a sheet or your inbox.',
    slugs: ['missed-call-text-back', 'appointment-reminders', 'price-watch', 'listings-ai-answers', 'support-bot-check', 'invoice-collector'],
  },

  prices: ['number', 'voice', 'sms', 'register', 'inbox', 'browser', 'whatsapp'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Owners and general managers', gets: 'Every call answered and every rate gap in one morning timeline.', watch: 'Direct bookings, occupancy, revenue per available room' },
      { role: 'Front desk and reservations', gets: 'Calls and guest messages handled overnight, with each booking confirmed by text.', watch: 'Calls answered, response time, direct booking rate' },
      { role: 'Revenue managers', gets: 'Competitors’ rates and member prices read each morning, beside your own.', watch: 'Rate parity, average daily rate, pick-up against competitors' },
      { role: 'Group operations and enterprise leads', gets: 'One event log across every property, with a number and inbox for each.', watch: 'Properties live, calls answered, cost per property' },
      { role: 'Developers building for hotels', gets: 'A number, an inbox and a browser for every property you serve, on one key.', watch: 'Properties live, call minutes, cost per property' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/ai-receptionist', '/use-cases/ai-agent-for-customer-support'],
  },

  faq: {
    heading: 'Before your agent takes its first booking.',
    items: [
      {
        q: 'What does an AI agent for a hotel cost?',
        a: `Start on the Free plan, with no credit card: it includes a number that receives calls and texts. To call guests back and run the browser, paid plans are ${orList(fees)} a month, and usage is billed at list rates. A number is ${prices.number.amount} a month, calls ${prices.voice.amount} a minute and texts ${prices.sms.amount} each. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does the agent tell guests it’s an AI?',
        a: 'Yes, whenever it talks to a person, by phone, text or email. It texts and calls only people who gave the hotel their number, uses only the logins it’s given and stops at any identity check. It stops before payment unless it’s given the guest’s own card.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How does a booking reach our reservations system?',
        a: 'Subscribe once to call.ended, sms.received and email.received. Each booking, request and reply reaches your system through one signed webhook, and the same results can go to Slack, a sheet or your CRM.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Can it run at every hotel in a group?',
        a: 'Yes. Each hotel’s agent has its own number and inbox, and your events arrive in one log, so one team sees every property. A group with its own brand can run it on Enterprise.',
        link: { label: 'See the plans', to: '/pricing' },
      },
      {
        q: 'Which competitors’ sites can it read?',
        a: 'Public rates, and the member prices it sees after signing up as a new member in a persona’s own name. It never gets round a CAPTCHA, and a bot block is reported as a finding.',
        link: { label: 'See the blueprint', to: '/blueprints/price-watch' },
      },
    ],
  },

  final: {
    heading: 'Give your hotel’s agent its own number.',
    capture: { kind: 'waitlist', source: 'case-ai-agent-for-hotels', button: 'Start free', interest: 'voice-agent' },
  },
}
