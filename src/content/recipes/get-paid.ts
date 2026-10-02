import type { Capture, Recipe } from '../types'

/* Get paid (/recipes/get-paid). Get paid and save. Screen: invoices (15 overdue invoices, $54,600; Law firm pays
   $6,400 today; Dental group promised for Friday; Gym chain asked for email only; a day 5 call disputes seats and
   comes to you with a drafted reply; every chase signed).
   Base: site_founders.json "Get paid" (approved copy and demo). "For weeks" from the deck is gone: it chases until paid.
   Red lines held: only your real customers, from the invoices in your own accounting tool; polite, in your words; from
   the agent's own billing inbox and phone line, saying it's an AI agent for your company; it calls only the billing
   number the customer gave you (the FCC's 2024 ruling counts AI voices as artificial under the TCPA: confirm with
   counsel before launch); stops when paid or asked;
   disputes, final notices, fees and collections only after your OK; it sends your payment link and never asks for
   card or bank details. The run is an example and says so. */

const roles: Capture['roles'] = {
  question: 'What’s your role?',
  options: ['Founder or owner', 'Finance', 'Agency', 'Something else'],
}

const micro = 'We’ll only use your email to tell you about Obsession.'

export const recipe: Recipe = {
  id: 'get-paid',
  slug: 'get-paid',
  name: 'Get paid',
  group: 'Get paid and save',
  line: 'Chases your overdue invoices politely, by email and phone, from its own inbox and line, until they’re paid.',
  gets: 'Every overdue invoice chased until it’s paid, with every chase on record.',
  kit: [
    'An agent ID that names your company',
    'Its own billing inbox',
    'Its own phone line',
    'Your invoices, read only',
    'A chase on the rhythm you set',
    'Every chase signed and dated',
  ],

  meta: {
    path: '/recipes/get-paid',
    title: 'Get paid: AI agents that chase overdue invoices · Obsession',
    description:
      'A declared AI agent with its own inbox and phone line chases your overdue invoices politely, stops when paid or asked, and escalates only after your OK.',
    answer:
      'Get paid is an Obsession recipe. A declared AI agent with its own billing inbox and phone line chases your customers’ overdue invoices from your accounting tool, politely, until they’re paid. It stops when a customer pays or asks, and anything firmer waits for your OK.',
    ogImage: '/og/get-paid.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Get paid', path: '/recipes/get-paid' },
    ],
  },

  hero: {
    headline: 'AI agents that chase every overdue invoice until it’s paid.',
    sub: 'A declared AI agent emails and calls your customers from its own billing inbox and line, politely, on the rhythm you set. It stops when they pay or ask, and anything firmer waits for your OK.',
    screen: 'invoices',
    capture: {
      kind: 'waitlist',
      source: 'recipe-get-paid-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'get-paid',
    },
  },

  run: {
    tab: 'Overdue invoices',
    recipe: 'get-paid',
    task: 'Chase our 15 overdue invoices until they’re paid. Email first, call on day 5, stay polite, stop if asked, and bring any dispute to me.',
    targets: '15 overdue invoices, from your accounting tool',
    journey: ['Email a polite reminder', 'Call from its own line', 'Match every payment', 'Bring disputes to you'],
    schedule: 'Every weekday until paid',
    report: 'A daily note and a cash sheet',
    kit: ['Agent ID, names your company', 'Billing inbox', 'Phone line', 'Invoices, read only'],
    events: [
      { time: 'Mon 09:00', text: '15 overdue invoices read from your books: $54,600, 6 to 34 days late.' },
      { time: 'Mon 09:10', text: 'A polite reminder to each customer from your declared AI agent, invoice and payment link attached.' },
      { time: 'Tue 10:30', text: 'Dental group, on a call: “$9,800 on Friday.” The date is logged.' },
      { time: 'Wed 14:20', text: 'A customer, on a day 5 call: “We use 6 seats, not 10.” That chase pauses and comes to you.' },
      { time: 'Thu 16:00', text: 'Law firm pays $6,400. Matched to its invoice, so chasing stops.' },
    ],
    finding: '$6,400 paid and $9,800 promised for Friday. 1 dispute needs your call.',
    fix: 'A reply with the seat log attached, drafted. Sent after your OK.',
    ledger: 'Example run. Every email, call and payment dated and signed.',
  },

  steps: [
    {
      title: 'Connect your accounting tool',
      line: 'Overdue invoices, read only. Only your real customers, never a list from anywhere else.',
    },
    {
      title: 'Agents chase politely',
      line: 'From their own billing inbox and phone line, named as your AI agent, on the rhythm you set.',
    },
    {
      title: 'They stop when they should',
      line: 'The day an invoice is paid, or a customer asks them to stop or to use email only.',
    },
    { title: 'You make the hard calls', line: 'Disputes, final notices and anything firmer come to you first, drafted.' },
  ],

  checks: [
    {
      group: 'Every chase',
      items: [
        { title: 'Reminders', line: 'Polite emails with the invoice and your payment link, on your schedule.' },
        { title: 'Calls', line: 'From the agent’s own line, in working hours, saying it’s an AI agent for your company.' },
        { title: 'Promises', line: 'Every date a customer gives, logged and checked the day after.' },
        { title: 'Payments', line: 'Matched to their invoice, so the chasing stops the same day.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Only your customers', line: 'Invoices from your own books, nothing else.' },
        { title: 'When asked', line: 'Stop, email only, or call another person: it does what the customer asks.' },
        { title: 'Anything firmer', line: 'Final notices, late fees and collections wait for your OK.' },
        { title: 'Payment details', line: 'It sends your payment link. It never asks for card or bank details.' },
      ],
    },
  ],

  outputs: {
    heading: 'See who’s paid, who’s promised and who needs you.',
    items: [
      { format: 'Email', line: 'A daily note: paid, promised and stuck, with the total collected.' },
      { format: 'Slack', line: 'When a big invoice lands, or a customer disputes one.' },
      { format: 'Sheet', line: 'Every invoice, every touch and every promised date.' },
      { format: 'Your CRM', line: 'Each customer’s chase history on their record.' },
      { format: 'Webhook', line: 'Every payment and promise as it happens.' },
    ],
  },

  settings: [
    { k: 'Invoices', v: 'Overdue in your accounting tool, after the days you set' },
    { k: 'Rhythm', v: 'Email first, then a call after the days you choose' },
    { k: 'Tone', v: 'Polite, in your words, with your payment link' },
    { k: 'Stops', v: 'When paid, when asked, or when you pause it' },
    { k: 'Firmer steps', v: 'Final notices and fees only after your OK' },
    { k: 'Calls', v: 'In working hours, in each customer’s time zone, to the billing number they gave you' },
  ],

  forWho: [
    { audience: 'founders', line: 'Cash in before payroll, without spending Friday on the phone.' },
    { audience: 'agencies', line: 'Every late client chased politely, so you keep the relationship and the cash.' },
    { audience: 'developers', line: 'Start a chase from your own billing system through the API.' },
  ],

  table: {
    heading: 'Polite from day 1. Firmer only when you say.',
    line: 'Example rhythm. You set your own.',
    cols: ['What the agent does'],
    rows: [
      { label: 'Day 1', values: ['Emails a reminder with the invoice and your payment link'] },
      { label: 'Day 5', values: ['Calls from its own line, then sends a short recap'] },
      { label: 'Every 3 working days', values: ['A short reminder, until it’s paid'] },
      { label: 'The day after a promise', values: ['Checks the payment landed'] },
      { label: 'Day 30', values: ['Drafts a final notice for your OK'] },
    ],
  },

  faq: {
    heading: 'Every chase polite, declared, and stopped the day you’re paid.',
    items: [
      { q: 'Who does it chase?', a: 'Only your real customers, from the invoices in your accounting tool.' },
      {
        q: 'Will our customers know it’s AI?',
        a: 'Yes. Every email and call says it’s an AI agent for your company, from its own billing inbox and line.',
      },
      {
        q: 'Will it upset our customers?',
        a: 'It stays polite, uses your words and your rhythm, and stops the moment it’s asked. Every email and call is on record, so you see exactly what was said.',
      },
      {
        q: 'What if a customer disputes an invoice?',
        a: 'The chase on that invoice pauses, and the dispute comes to you with the history and a drafted reply.',
      },
      { q: 'Does it stop when they pay?', a: 'The same day. Each payment is matched to its invoice, and the chasing ends.' },
      { q: 'Can it get firmer?', a: 'Only after your OK. Final notices, late fees and collections never go out on their own.' },
      { q: 'Does it take payments?', a: 'No. It sends your own payment link and never asks for card or bank details.' },
    ],
  },

  final: {
    heading: 'Never chase an overdue invoice yourself again.',
    sub: 'Join the waitlist. Your agent comes ready with its own billing inbox and phone line.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-get-paid-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'get-paid',
    },
  },
}
