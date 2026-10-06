import type { Capture, Recipe } from '../types'

/* Renewal negotiation (/recipes/renewal-negotiation). Keep and grow customers. Screen: renewal (Dental group, $48,000 a
   year, renews 21 Nov; round 1, Mon 09:12, their declared procurement agent asks "18% off, or we go to tender"; Mon
   14:40, the same day, your agent answers with the signed usage, 112 of 120 seats used, 4,820 visits booked, usage up
   14% in 90 days, and offers 5% for a 2 year term from the grid AM approved (1 year 0% or 2% paid up front, 2 years 5%
   or 7%, 3 years 8% or 10%; cap 10% off, floor $43,200); round 2, Tue 10:05, they accept; held at $45,600, 95% of list,
   against $39,360 asked; signature requested, then PO, then paid on 30 days). The run tells that story (3 Oct): round 1
   on Mon 7 Sep, 120 days out is 24 Jul and 90 days out 23 Aug; asked 09:12, answered 14:40, 5 hours 28 minutes.
   Base: _research/recipes/ACTIVE-RECIPES.md, recipe 3 (research name retired; the plain name is Renewal negotiation).
   It upgrades Business case from a renewal document to a closed renewal.
   Red lines held: declared as AI for the seller, and it asks the other side's agent to say it's AI and whom it acts for;
   the limits (what is given, and for what) are set once by the customer and held outside the agent; the first quote,
   anything outside the limits, any change to terms and the buyer's own contract in place of yours wait for a person; people sign;
   a person checks the usage export before it is first sent; no bluffs, invented deadlines, rival offers or threatened price rises;
   data only from the tools the customer connects, read only; payment chased in the customer's name, to the billing
   contact and number the buyer gave, with a payment link, never taking card details; stops when asked.
   Up-to-50 rule, no money up to (3 Oct): the 1 modelled figure (up to 520 hours a year back, 10 hours a week of renewal
   rounds, usage exports and chasing x 52) carries its sum in the same line. No sources or real names on the
   page. The run is an example and says so. */

const roles: Capture['roles'] = {
  question: 'What’s your role?',
  options: ['Account management', 'Customer success', 'Founder or owner', 'Finance', 'Something else'],
}

const micro = 'We keep your email to set up your first run and tell you about Obsession.'

export const recipe: Recipe = {
  id: 'renewal',
  slug: 'renewal-negotiation',
  name: 'Renewal negotiation',
  group: 'Keep and grow customers',
  line: 'Answers every discount request at renewal the same day, with real usage, inside the limits you set.',
  gets: 'Every renewal round answered the same day, and the deal taken to signature and payment.',
  kit: [
    'An agent ID, declared as AI',
    'Its own inbox and phone line',
    'A channel for buyers’ AI agents',
    'Contract, usage and tickets, read only',
    'Your limits, which it can’t raise',
    'Every round signed and dated',
  ],

  meta: {
    path: '/recipes/renewal-negotiation',
    title: 'Renewal negotiation: hold your price at renewal · Obsession',
    description:
      'When a customer or its AI agent asks for a discount at renewal, your declared AI agent answers the same day with real usage, inside your limits. You sign.',
    answer:
      'Renewal negotiation holds your price at renewal: when a customer, or the AI agent negotiating for it, asks for a discount, your declared AI agent answers the same day with real usage and offers only what you approved. People sign.',
    ogImage: '/og/renewal-negotiation.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Renewal negotiation', path: '/recipes/renewal-negotiation' },
    ],
  },

  hero: {
    headline: 'AI agents that hold your price at renewal.',
    sub: 'Renewal negotiation holds your price at renewal: when a customer, or the AI agent negotiating for it, asks for a discount, your declared AI agent answers the same day with real usage and offers only what you approved. People sign.',
    screen: 'renewal',
    capture: {
      kind: 'waitlist',
      source: 'recipe-renewal-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'renewal',
    },
  },

  run: {
    tab: 'Example: a $48,000 renewal',
    recipe: 'renewal',
    task: 'Dental group renews on 21 Nov at $48,000 a year. Answer every round inside my limits, bring me anything outside them, and take it to signature and payment.',
    targets: 'Dental group, $48,000 a year',
    journey: ['Send the quote, after your OK', 'Answer every round the same day', 'Offer only what you approved', 'Take it to signature and payment'],
    schedule: 'From 120 days before renewal until paid',
    report: 'Each round in Slack, the deal in your CRM',
    kit: ['Agent ID, declared as AI', 'Own inbox and line', 'Usage, read only', 'Your limits'],
    events: [
      { time: '24 Jul, 09:00', text: 'Contract, usage and tickets read. Renews 21 Nov at $48,000.' },
      { time: '23 Aug, 10:00', text: 'You check the usage and approve the quote. It goes out with the usage behind it.' },
      { time: '7 Sep, 09:12', text: 'Their procurement agent, declared as AI, asks for 18% off, or they go to tender.' },
      { time: '7 Sep, 14:40', text: 'Answered the same day with the signed usage: 112 of 120 seats used, 4,820 visits booked, usage up 14% in 90 days. The offer: 5% off for a 2 year term, from your limits.' },
      { time: '8 Sep, 10:05', text: 'Their agent accepts 5% for 2 years. The order form goes out for signature after your OK, and the agent chases their signer.' },
      { time: '19 Nov, 09:40', text: 'Invoice accepted in their supplier portal. Paid 2 days before renewal.' },
    ],
    finding: 'Their agent asked for 18% off and had an answer the same day. They renewed at 5% for 2 years, $45,600 a year, and paid 2 days before renewal.',
    fix: 'The next renewal opens 120 days out, with 2 years of usage. Its first quote waits for your OK.',
    ledger: 'Example run. Every ask, answer, offer and approval signed and dated.',
  },

  steps: [
    {
      title: 'Set your limits once',
      line: 'What you’ll give and what for, say 5% off for a 2 year term and 2% more for paying up front, and never a discount for nothing. The agent can’t go past them.',
    },
    {
      title: 'It sends the quote before they ask',
      line: '120 days out it reads the contract, usage and tickets you connect. At 90 days, once you’ve approved the quote and checked the usage, it sends both.',
    },
    {
      title: 'It answers every round the same day',
      line: 'By email, by phone or straight to the buyer’s AI agent, always saying it’s AI. A wrong claim gets the real figure back. It never bluffs.',
    },
    {
      title: 'It gets the deal signed and paid',
      line: 'You sign. It chases their signer, files the invoice in their supplier portal against the new PO, and chases the payment until it lands.',
    },
  ],

  checks: [
    {
      group: 'Before the first round',
      items: [
        { title: 'The contract', line: 'The renewal date, any price rise clause and the notice terms, from the contract you connect.' },
        {
          title: 'Usage and tickets',
          line: 'Seats, logins, growth and support history, from the tools you connect. A person checks the export before it’s first sent.',
        },
        { title: 'The people', line: 'Whether your champion and their signer are still there, so the quote reaches the right person.' },
      ],
    },
    {
      group: 'Every round',
      items: [
        { title: 'Who’s on the other side', line: 'It asks the buyer’s agent to say it’s AI and whom it acts for, and logs the answer.' },
        { title: 'Every counter', line: 'Answered the day it arrives, inside your limits. Anything outside them comes to you.' },
        {
          title: 'Every claim',
          line: 'A wrong figure gets the real one back, from the record. No invented deadlines or rival offers, and no threats of a price rise.',
        },
      ],
    },
    {
      group: 'After the yes',
      items: [
        { title: 'Signature', line: 'The agreed order form goes out for signature. People sign: you, then their signer, chased until done.' },
        { title: 'PO and invoice', line: 'The invoice filed in their supplier portal against the new PO, and checked as accepted.' },
        {
          title: 'Payment',
          line: 'A failed card or a late invoice gets an email, a call to the billing number they gave you and a payment link. It never takes card details.',
        },
      ],
    },
  ],

  outputs: {
    heading: 'Every round on the record, from the first ask to the money in.',
    items: [
      { format: 'The round log', line: 'Every ask, answer and offer with its time and who sent it, as a page, a PDF or JSON.' },
      { format: 'Your OK, when it’s needed', line: 'In Slack or email: the first quote and its usage, anything outside your limits, any change to terms, every signature.' },
      { format: 'The usage behind every answer', line: 'The export each answer relied on, signed, so a disputed figure can be checked.' },
      { format: 'Your CRM, kept current', line: 'Stage, price, term and next step on the renewal record, after every round.' },
      { format: 'Cash in', line: 'The PO, the accepted invoice and the payment, matched to the renewal.' },
      { format: 'A weekly note', line: 'Renewals in play, the price held so far, and anything waiting on you.' },
    ],
  },

  settings: [
    { k: 'Renewals', v: 'Every renewal on your book, or the ones you pick' },
    { k: 'Start', v: '120 days before renewal, or the date you choose' },
    { k: 'Limits', v: 'What you’ll give and for what, for example 5% for a 2 year term, 2% more for paying up front, and never more than 10%' },
    { k: 'Channels', v: 'Email, phone and straight to the buyer’s AI agent' },
    { k: 'Needs your OK', v: 'The first quote and its usage, anything outside your limits, any change to terms, their own contract in place of yours' },
    { k: 'Signing', v: 'Always a person' },
    { k: 'Payment', v: 'Their supplier portal, or your payment link. It never takes card details.' },
    { k: 'Data', v: 'Contract, usage and tickets from the tools you connect, read only' },
  ],

  forWho: [
    { audience: 'sales', line: 'Account managers answer every renewal round the same day, on usage the buyer can check.' },
    { audience: 'founders', line: 'No renewals team? Every renewal answered and paid at a price inside your limits, and you sign at the end.' },
    { audience: 'agencies', line: 'Renew retainers on the results you delivered, not the discount procurement asks for.' },
    { audience: 'developers', line: 'Answer buyers’ AI agents from your own billing and usage data, through the API.' },
  ],

  table: {
    heading: 'The agent answers. You approve. People sign.',
    line: 'Anything outside your limits waits for you, and the buyer’s agent is told when to expect an answer.',
    cols: ['The agent', 'You'],
    rows: [
      { label: 'A counter inside your limits', values: ['Answers the same day', 'Set the limits once'] },
      { label: 'The first renewal quote', values: ['Drafts it with the usage', 'Approve it'] },
      { label: 'The usage export', values: ['Builds it from your tools', 'Check it before it’s first sent'] },
      { label: 'A counter outside your limits', values: ['Holds, and says when to expect an answer', 'Decide'] },
      { label: 'A change to terms, or their own contract', values: ['Never on its own', 'Approve or refuse'] },
      { label: 'Signature', values: ['Sends the order form, chases their signer', 'Sign'] },
      { label: 'Payment', values: ['Files the invoice, chases until paid', 'Nothing to do'] },
    ],
  },

  faq: {
    heading: 'Declared as AI on every round. Nothing signed without you.',
    items: [
      {
        q: 'How do I answer a buyer’s AI agent that asks for a renewal discount?',
        a: 'Renewal negotiation answers it the same day: your declared AI agent replies with the real usage and offers only what you approved, like 5% off for a 2 year term, and anything outside your limits waits for you.',
      },
      {
        q: 'What if the buyer isn’t using an AI agent?',
        a: 'Renewal negotiation works the same with a person: the same quote, the same limits and an answer the same day, by email or phone.',
      },
      {
        q: 'Can Renewal negotiation give away too much?',
        a: 'No. Renewal negotiation enforces your limits outside the agent, so it can’t raise them or work around them. Anything outside them waits for you.',
      },
      {
        q: 'Does Renewal negotiation sign contracts?',
        a: 'Never. Renewal negotiation sends the agreed order form and chases their signer, and it never accepts their own contract or changes terms without your OK. People sign.',
      },
      {
        q: 'Does it pretend to be our account manager?',
        a: 'No. The Renewal negotiation agent says it’s an AI agent working for your company, and asks the buyer’s agent to say whom it works for too.',
      },
      {
        q: 'Will Renewal negotiation bluff to close?',
        a: 'No. Renewal negotiation answers with the real usage, and a person checks that export before it’s first sent. No invented deadlines or rival offers, and no threats of a price rise.',
      },
      {
        q: 'What’s it worth?',
        a: 'Renewal negotiation gives up to 520 hours a year back for 1 account manager who spends 10 hours a week on renewal rounds, usage exports and chasing signatures and payments. In the Dental group example, the buyer’s agent had its answer 5 hours 28 minutes after it asked.',
      },
      {
        q: 'How is Renewal negotiation different from Business case?',
        a: 'Renewal negotiation puts the proof Business case builds to work: it answers every round, then gets the signature, the PO and the payment. Business case proves your value before the renewal.',
      },
      {
        q: 'How does Renewal negotiation chase payment?',
        a: 'Renewal negotiation chases by email, and by phone to the billing contact and number they gave you, in business hours, in your company’s name. Calls say they’re AI and recorded. It sends your payment link, never takes card details, and stops when asked.',
      },
    ],
  },

  final: {
    heading: 'Answer every renewal round the same day.',
    sub: 'Join the waitlist. Renewal negotiation comes ready with its own inbox, phone line and a channel for buyers’ AI agents.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-renewal-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'renewal',
    },
  },
}
