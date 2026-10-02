import type { Capture, Recipe } from '../types'

/* Get paid (/recipes/get-paid). Get paid and save. Screen: invoices (15 overdue invoices, $54,600; Law firm pays
   $6,400 today; Dental group promised for Friday; Gym chain asked for email only; a day 5 call disputes seats and
   comes to you with a drafted reply; every chase signed).
   Base: site_founders.json "Get paid" (approved copy and demo). "For weeks" from the deck is gone: it chases until paid.
   Since 3 Oct it also runs the path from signed contract to first cash (the research's "Portal to Paid",
   _research/recipes/ACTIVE-RECIPES.md 9): on the day a deal is won it registers the business in the buyer's supplier
   portal from its company pack, files the forms, gets the vendor ID and PO, submits the invoice against the PO and
   checks it shows as accepted, then chases to payment, and runs the path again before each renewal. The run stays the
   overdue chase (it matches the `invoices` screen); the table shows the new path.
   Up-to-50 rule: "up to 30 days sooner" to first cash, with its model in the same line (the first invoice can't be
   paid until the supplier record exists, which can take about 30 days; the agent starts on the day of signature).
   Red lines held: only your real customers, from the invoices in your own accounting tool; polite, in your words; from
   the agent's own billing inbox and phone line, saying it's an AI agent for your company; it calls only the billing
   number the customer gave you or the number listed for their accounts team (the FCC's 2024 ruling counts AI voices as
   artificial under the TCPA: confirm with counsel before launch); stops when paid or asked;
   disputes, final notices, fees and collections only after your OK; portal terms and any portal fee (on a card capped
   at the fee) only after your OK; where a portal lets only an employee submit, a person at the business submits what
   the agent prepared; it never enters, changes or discusses bank details (finance does, so it can't be mistaken for
   invoice fraud), sends your payment link and never asks for card or bank details. The run is an example and says so. */

const roles: Capture['roles'] = {
  question: 'What’s your role?',
  options: ['Founder or owner', 'Finance', 'Sales', 'Agency', 'Something else'],
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'get-paid',
  slug: 'get-paid',
  name: 'Get paid',
  group: 'Get paid and save',
  line: 'Sets you up in a new customer’s supplier portal the day they sign, then chases every invoice politely until it’s paid.',
  gets: 'Every invoice paid sooner: new customers set up from the day they sign, and every overdue invoice chased until it’s paid.',
  kit: [
    'An agent ID that names your company',
    'Its own billing inbox and phone line',
    'Your invoices, read only',
    'Your company pack, ready for any supplier portal',
    'A chase on the rhythm you set',
    'Every step signed and dated',
  ],

  meta: {
    path: '/recipes/get-paid',
    title: 'Get paid: AI agents that chase overdue invoices · Obsession',
    description:
      'A declared AI agent sets you up in each new customer’s supplier portal the day they sign, then chases every overdue invoice politely until it’s paid.',
    answer:
      'Get paid is an Obsession recipe. On the day a customer signs, a declared AI agent registers you in their supplier portal, gets the vendor ID and PO, and submits the first invoice. It chases every overdue invoice from its own billing inbox and phone line, politely, until it’s paid. Bank details, portal terms and anything firmer wait for your OK.',
    ogImage: '/og/get-paid.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Get paid', path: '/recipes/get-paid' },
    ],
  },

  hero: {
    headline: 'AI agents that chase every invoice from contract to cash.',
    sub: 'The day a customer signs, a declared AI agent sets you up in their supplier portal. Then it chases every invoice politely, by email and phone, until it’s paid.',
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
      title: 'Connect your tools',
      line: 'Your accounting tool and CRM, read only. Only your real customers, never a list from anywhere else.',
    },
    {
      title: 'New customers set up on day 1',
      line: 'The day a deal is won, it registers you in the customer’s supplier portal, files the forms, gets the vendor ID and PO, and submits the invoice.',
    },
    {
      title: 'Every invoice chased politely',
      line: 'From its own billing inbox and phone line, named as your AI agent, on the rhythm you set, until it’s paid or a customer asks it to stop.',
    },
    {
      title: 'You make the hard calls',
      line: 'Bank details, portal terms, disputes, final notices and anything firmer come to you first, drafted.',
    },
  ],

  checks: [
    {
      group: 'New customers',
      items: [
        { title: 'Supplier portals', line: 'Registered from the customer’s invite with your company pack, and every form filed the day it’s asked for.' },
        { title: 'Vendor ID and PO', line: 'Chased with their procurement and accounts teams until both are issued.' },
        { title: 'The first invoice', line: 'Submitted against the PO and checked until it shows as accepted. A rejection is fixed the same day.' },
        { title: 'Renewals', line: 'A new PO lined up before each renewal invoice, so year 2 isn’t late either.' },
      ],
    },
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
        {
          title: 'Bank details',
          line: 'Entered by your finance team, never by the agent. It sends your payment link and never asks for card or bank details.',
        },
      ],
    },
  ],

  outputs: {
    heading: 'See who’s set up, who’s paid, and who needs you.',
    items: [
      { format: 'Email', line: 'A daily note: paid, promised and stuck, with the total collected.' },
      { format: 'Slack', line: 'When a big invoice lands, a PO arrives, or a customer disputes one.' },
      { format: 'A timeline per customer', line: 'From signature to cash: every form, PO, invoice and chase, dated and signed.' },
      { format: 'Sheet', line: 'Every invoice, every touch and every promised date.' },
      { format: 'Your CRM', line: 'Each customer’s chase history on their record.' },
      { format: 'Webhook', line: 'Every payment and promise as it happens.' },
    ],
  },

  settings: [
    { k: 'New customers', v: 'From the day a deal is marked won in your CRM' },
    { k: 'Portals', v: 'Registered from the invite; portal terms and any fee after your OK' },
    { k: 'Invoices', v: 'Overdue in your accounting tool, after the days you set' },
    { k: 'Rhythm', v: 'Email first, then a call after the days you choose' },
    { k: 'Tone', v: 'Polite, in your words, with your payment link' },
    { k: 'Stops', v: 'When paid, when asked, or when you pause it' },
    { k: 'Firmer steps', v: 'Final notices and fees only after your OK' },
    { k: 'Calls', v: 'In working hours, to the billing number they gave you or their accounts team’s line' },
  ],

  forWho: [
    { audience: 'founders', line: 'Cash in before payroll, without spending Friday on the phone or in a supplier portal.' },
    { audience: 'agencies', line: 'Set up in a new client’s supplier portal the week they sign, and every late client chased politely.' },
    { audience: 'sales', line: 'From signed contract to PO and first payment, without chasing procurement yourself.' },
    { audience: 'developers', line: 'Start a chase from your own billing system through the API.' },
  ],

  table: {
    heading: 'The portal work starts the day a customer signs, not the day you invoice.',
    line: 'Example: a new enterprise customer. Up to 30 days sooner to first cash: their first invoice can’t be paid until you’re set up as a supplier, which can take 30 days, so the agent starts on day 1.',
    cols: ['What the agent does'],
    rows: [
      { label: 'Day 1', values: ['Opens the supplier invite and registers you from your company pack. Portal terms wait for your OK.'] },
      { label: 'Day 2', values: ['Files the tax, insurance and security forms from your approved answers. New questions come to you.'] },
      { label: 'Bank details', values: ['Entered by your finance team, never by the agent.'] },
      { label: 'Day 9', values: ['Vendor ID and PO in hand, after 2 chases to their procurement team.'] },
      { label: 'Day 10', values: ['Invoice submitted against the PO, and checked until it shows as accepted.'] },
      { label: 'Due date', values: ['Checks the payment landed. If it hasn’t, the polite chase starts.'] },
    ],
  },

  faq: {
    heading: 'Every chase polite, declared, and stopped the day you’re paid.',
    items: [
      { q: 'Who does it chase?', a: 'Only your real customers, from the invoices in your accounting tool.' },
      {
        q: 'Can it get us set up in a customer’s supplier portal?',
        a: 'Yes. From the customer’s invite, with your company pack, as a named user where the portal allows it. Where only an employee can submit, it prepares everything and a person at your company clicks submit.',
      },
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
      {
        q: 'Does it touch bank details or take payments?',
        a: 'Never. Your finance team enters bank details, and every new accounts contact gets a named person at your company to call back. The agent sends your own payment link and never asks for card or bank details.',
      },
    ],
  },

  final: {
    heading: 'From signed contract to cash, without chasing anyone yourself.',
    sub: 'Join the waitlist. Your agent comes ready with its own billing inbox, phone line and your company pack.',
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
