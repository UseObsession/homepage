import type { Capture, Recipe } from '../types'

/* Renewal negotiation (/recipes/renewal-negotiation). Keep and grow customers. Screen: renewal (a logistics customer, $48,000 a
   year, renews 1 Dec; 4 Sep their procurement agent, declared as AI, asks for 22% off; 10 minutes later the real usage
   goes back with 6% for a 2 year term, from the approved limits; 12 Sep their agent says usage fell, the record shows
   it rose 14%; 1 Oct their agent accepts 6% for 2 years, you tap OK and sign; 29 Nov paid through their supplier portal).
   Base: _research/recipes/ACTIVE-RECIPES.md, recipe 3 (research name retired; the plain name is Renewal negotiation).
   It upgrades Business case from a renewal document to a closed renewal.
   Red lines held: declared as AI for the seller, and it asks the other side's agent to say it's AI and whom it acts for;
   the limits (what is given, and for what) are set once by the customer and held outside the agent; the first quote,
   anything outside the limits, any change to terms and the buyer's own contract in place of yours wait for a person; people sign;
   a person checks the usage export before it is first sent; no bluffs, invented deadlines, rival offers or threatened price rises;
   data only from the tools the customer connects, read only; payment chased in the customer's name, to the billing
   contact and number the buyer gave, with a payment link, never taking card details; stops when asked.
   Up-to-50 rule: the 1 modelled figure (up to 18% of each renewal a buyer's agent negotiates, the average discount
   those agents win; up to $8,640 a year kept on $48,000, 18% × $48,000) carries its sum in the same line. No sources or real names on the
   page. The run is an example and says so. */

const roles: Capture['roles'] = {
  question: 'What’s your role?',
  options: ['Account management', 'Customer success', 'Founder or owner', 'Finance', 'Something else'],
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

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
      'Renewal negotiation is an Obsession recipe. When a customer, or the AI agent negotiating for it, asks for a discount at renewal, a declared AI agent answers each round the same day with the customer’s real usage, offers only what you approved in advance, and takes the deal to signature, purchase order and payment. People sign.',
    ogImage: '/og/renewal-negotiation.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Renewal negotiation', path: '/recipes/renewal-negotiation' },
    ],
  },

  hero: {
    headline: 'AI agents that hold your price at renewal.',
    sub: 'When a customer, or the AI agent negotiating for it, asks for a discount, your declared AI agent answers the same day with the customer’s real usage. It offers only what you approved and takes the deal to signature and payment. You sign.',
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
    task: 'A logistics customer renews on 1 Dec at $48,000 a year. Answer every round inside my limits, bring me anything outside them, and take it to signature and payment.',
    targets: 'A logistics customer, $48,000 a year',
    journey: ['Send the quote, after your OK', 'Answer every round the same day', 'Offer only what you approved', 'Take it to signature and payment'],
    schedule: 'From 120 days before renewal until paid',
    report: 'Each round in Slack, the deal in your CRM',
    kit: ['Agent ID, declared as AI', 'Own inbox and line', 'Usage, read only', 'Your limits'],
    events: [
      { time: '3 Aug, 09:00', text: 'Contract, usage and tickets read. Renews 1 Dec at $48,000. Usage up 14% this year.' },
      { time: '2 Sep, 10:00', text: 'You check the usage and approve the quote. It goes out with the usage behind it.' },
      { time: '4 Sep, 14:12', text: 'Their procurement agent, declared as AI, asks for 22% off.' },
      { time: '4 Sep, 14:22', text: 'Answered in 10 minutes: their usage, and 6% off for a 2 year term, from your limits.' },
      { time: '12 Sep, 11:05', text: 'Their agent says usage fell. The signed record, sent back the same day, shows it rose 14%.' },
      { time: '1 Oct, 16:30', text: 'Their agent accepts 6% for 2 years. You tap OK and sign. The agent chases their signer.' },
      { time: '29 Nov, 09:40', text: 'Invoice accepted in their supplier portal. Paid 2 days before renewal.' },
    ],
    finding: 'Their agent asked for 22% off. They renewed at 6% for 2 years: $7,680 a year kept, 16% of $48,000.',
    fix: 'The next renewal opens 120 days out, with 2 years of usage. Its first quote waits for your OK.',
    ledger: 'Example run. Every ask, answer, offer and approval signed and dated.',
  },

  steps: [
    {
      title: 'Set your limits once',
      line: 'What you’ll give and what for, say up to 6% off for a 2 year term or 4% for paying up front, and never a discount for nothing. The agent can’t go past them.',
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
      line: 'You sign. It chases their signer, files the invoice in their supplier portal against the new purchase order, and chases the payment until it lands.',
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
        { title: 'Purchase order and invoice', line: 'The invoice filed in their supplier portal against the new purchase order, and checked as accepted.' },
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
      { format: 'Cash in', line: 'The purchase order, the accepted invoice and the payment, matched to the renewal.' },
      { format: 'A weekly note', line: 'Renewals in play, the price held so far, and anything waiting on you.' },
    ],
  },

  settings: [
    { k: 'Renewals', v: 'Every renewal on your book, or the ones you pick' },
    { k: 'Start', v: '120 days before renewal, or the date you choose' },
    { k: 'Limits', v: 'What you’ll give and for what, for example up to 6% for a 2 year term, up to 4% for paying up front' },
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
        q: 'What if the buyer isn’t using an AI agent?',
        a: 'It works the same with a person: the same quote, the same limits and an answer the same day, by email or phone.',
      },
      {
        q: 'Can it give away too much?',
        a: 'No. Your limits are enforced outside the agent, so it can’t raise them or work around them. Anything outside them waits for you.',
      },
      {
        q: 'Does it sign contracts?',
        a: 'Never. People sign. It sends the agreed order form and chases their signer, and it never accepts their own contract or changes terms without your OK.',
      },
      {
        q: 'Does it pretend to be our account manager?',
        a: 'No. It says it’s an AI agent working for your company, and asks the buyer’s agent to say whom it works for too.',
      },
      {
        q: 'Will it bluff to close?',
        a: 'No. No invented deadlines or rival offers, and no threats of a price rise. It answers with the real usage, and a person checks that export before it’s first sent.',
      },
      {
        q: 'What’s it worth?',
        a: 'Up to 18% of each renewal a buyer’s AI agent negotiates, the average discount those agents win: up to $8,640 a year kept on $48,000 (18% × $48,000).',
      },
      {
        q: 'How is it different from Business case?',
        a: 'Business case proves your value before the renewal. Renewal negotiation puts that proof to work: it answers every round, then gets the signature, the purchase order and the payment.',
      },
      {
        q: 'How does it chase payment?',
        a: 'By email, and by phone to the billing contact and number they gave you, in business hours, in your company’s name. Calls say they’re AI and recorded. It sends your payment link, never takes card details, and stops when asked.',
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
