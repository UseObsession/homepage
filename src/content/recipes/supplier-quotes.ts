import type { Capture, Recipe } from '../types'

/* Supplier quotes (/recipes/supplier-quotes). Get paid and save. Screen: suppliers (mailer boxes, +18% from 1 Nov:
   $400 to $472 per 1,000; 16 quotes in, the best 3 at $409, $416 and $421; pushback sent Mon 09:14 after your OK;
   rise cut to 6%, $424: $5,760 a year on 120,000 boxes).
   Base: site_founders.json "Cut costs" / "Supplier quotes" (approved copy and demo). Suppliers are the 1 place an
   agent asks people for something, because it's a real order: they are vendors you'd buy from, never prospects or
   rivals.
   Red lines held: the agent asks as your declared AI buyer, only the suppliers on your list, only for an order you'll
   really place; it never pays, never places the order and never signs (you do); the pushback goes after your OK and
   shares the best prices without the quoting suppliers' names. Suppliers are Supplier A, B, C here and Supplier A to P
   on the screen (no real or invented company names). The run is an example and says so. */

const roles: Capture['roles'] = {
  question: 'What’s your role?',
  options: ['Founder or owner', 'Operations or buying', 'Finance', 'Agency', 'Something else'],
}

const micro = 'We’ll only use your email to tell you about Obsession.'

export const recipe: Recipe = {
  id: 'supplier-quotes',
  slug: 'supplier-quotes',
  name: 'Supplier quotes',
  group: 'Get paid and save',
  line: 'Gets quotes for your real order as your declared AI buyer, then pushes back on the price rise until the new price is in writing.',
  gets: 'Every quote side by side, and the new price in writing. You sign.',
  kit: [
    'An agent ID, declared as AI buying for you',
    'Its own buying inbox',
    'Its own phone line',
    'Your order, spec and quantity',
    'A quote sheet',
    'Every quote signed and dated',
  ],

  meta: {
    path: '/recipes/supplier-quotes',
    title: 'Supplier quotes: push back on every price rise · Obsession',
    description:
      'A declared AI agent gets quotes for your real order, pushes back on every price rise and chases until the new price is in writing. It never pays. You sign.',
    answer:
      'Supplier quotes is an Obsession recipe. A declared AI agent with its own buying inbox and phone line asks the suppliers on your list to quote an order you will really place, compares them like for like, and after your OK pushes back on your supplier’s price rise until the new price is in writing. It never pays and never signs.',
    ogImage: '/og/supplier-quotes.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Supplier quotes', path: '/recipes/supplier-quotes' },
    ],
  },

  hero: {
    headline: 'AI agents that answer every price rise with written quotes.',
    sub: 'Your declared AI buyer asks every supplier on your list to quote your real order, then pushes back until the new price is in writing. It never pays. You sign.',
    screen: 'suppliers',
    capture: {
      kind: 'waitlist',
      source: 'recipe-supplier-quotes-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'supplier-quotes',
    },
  },

  run: {
    tab: 'Price rise',
    recipe: 'supplier-quotes',
    task: 'Our box supplier wants 18% more from 1 Nov. Get quotes for our real order, push back with the best 3, and chase until the price is in writing.',
    targets: 'Your supplier, and 16 box makers on your list',
    journey: ['Ask for quotes as your buyer', 'Compare like for like', 'Push back with the best 3', 'Chase until it’s in writing'],
    schedule: 'Daily until the price is in writing',
    report: 'A quote sheet and a Slack note',
    kit: ['Agent ID, declared as AI', 'Buying inbox', 'Phone line', 'Your real order'],
    events: [
      { time: 'Day 1, 08:30', text: 'Notice read: $400 to $472 per 1,000 boxes from 1 Nov.' },
      { time: 'Day 1, 09:15', text: 'Your declared AI buyer asks 16 box makers to quote your order.' },
      { time: 'Day 5, 16:00', text: '16 quotes in. The best 3: $409, $416 and $421 per 1,000.' },
      { time: 'Day 8, 09:14', text: 'After your OK, the 3 best prices, without the suppliers’ names, go to your supplier with a request to review the rise.' },
      { time: 'Day 10, 11:00', text: 'Your supplier cuts the rise to 6%, in writing.' },
    ],
    finding: 'Rise cut from 18% to 6%: $48 less per 1,000 on 120,000 boxes, $5,760 a year.',
    fix: 'Your acceptance, drafted for you to sign. Quotes run again 60 days before next year’s renewal.',
    ledger: 'Example run. Every quote, reply and chase dated and signed.',
  },

  steps: [
    {
      title: 'Tell it the real order',
      line: 'What you buy, how many and by when. It only asks for quotes on orders you’ll place.',
    },
    {
      title: 'Agents ask for quotes',
      line: 'From their own buying inbox and line, as your declared AI buyer, to every supplier on your list.',
    },
    { title: 'Compare like for like', line: 'Price, minimums, lead times and terms, side by side.' },
    {
      title: 'Push back, then you sign',
      line: 'After your OK, it takes the best quotes to your supplier and chases until the price is in writing.',
    },
  ],

  checks: [
    {
      group: 'Every quote',
      items: [
        { title: 'Price at your quantity', line: 'Per unit, with delivery included or stated.' },
        { title: 'Minimums and lead times', line: 'The smallest order, and how many days to deliver.' },
        { title: 'Terms', line: 'Payment terms, how long the price holds, and the notice before it changes.' },
        { title: 'The same spec', line: 'Every supplier quotes the same order, so the comparison is fair.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'It never pays', line: 'No card, no deposit, no order placed.' },
        { title: 'You sign', line: 'Contracts and acceptances wait for your signature.' },
        { title: 'Real orders only', line: 'It asks only the suppliers on your list, and only for an order you mean to place.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every quote side by side, and the new price in writing.',
    items: [
      { format: 'Sheet', line: 'Every supplier’s price, minimum, lead time and terms.' },
      { format: 'Slack', line: 'When a quote beats your price, and when your supplier replies.' },
      { format: 'Email', line: 'The pushback and every reply, in 1 thread you can read.' },
      { format: 'PDF', line: 'The comparison and the price in writing, for your files.' },
      { format: 'Webhook', line: 'Each quote as it lands, into your own tools.' },
    ],
  },

  settings: [
    { k: 'Order', v: 'What you buy, how much and how often' },
    { k: 'Suppliers', v: 'Your list: pasted, a CSV, Clay or the API' },
    { k: 'When', v: 'The day a rise lands, or 60 days before each renewal' },
    { k: 'Pushback', v: 'With the best quotes, after your OK' },
    { k: 'Signing', v: 'Always you' },
    { k: 'Payment', v: 'Never by the agent' },
  ],

  forWho: [
    { audience: 'founders', line: 'Meet every supplier’s price rise with written quotes before you accept it.' },
    { audience: 'agencies', line: 'Quote your print, software and freelance costs again before each renewal.' },
    { audience: 'developers', line: 'When an order passes your users’ limit, start a quote round from your app through the API.' },
  ],

  table: {
    heading: 'The same order, quoted by every supplier.',
    line: 'Example: 120,000 mailer boxes a year.',
    cols: ['Per 1,000 boxes', 'Days to deliver'],
    rows: [
      { label: 'Your supplier, new price', values: ['$472', '5'] },
      { label: 'Supplier A', values: ['$409', '6'] },
      { label: 'Supplier B', values: ['$416', '4'] },
      { label: 'Supplier C', values: ['$421', '5'] },
      { label: 'Your supplier, after pushback', values: ['$424', '5'] },
    ],
  },

  faq: {
    heading: 'Your declared AI buyer, on your real order. You sign. It never pays.',
    items: [
      {
        q: 'Does it pretend to be us?',
        a: 'No. It says it’s an AI agent buying for your company, from its own inbox and line.',
      },
      { q: 'Can it place the order?', a: 'No. It never pays and never signs. You do both.' },
      {
        q: 'What if a supplier wants a person?',
        a: 'It comes to you, with the quote and the thread so far.',
      },
      {
        q: 'Do you ask for quotes we won’t use?',
        a: 'No. Every quote is for an order you’ll really place, on the same spec, so any supplier on your list can win it.',
      },
      {
        q: 'When should it run?',
        a: 'The day a rise lands, or 60 days before each renewal, so you always have time to switch.',
      },
    ],
  },

  final: {
    heading: 'Meet the next price rise with 3 written quotes.',
    sub: 'Join the waitlist. Your AI buyer comes ready with its own buying inbox and phone line.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-supplier-quotes-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'supplier-quotes',
    },
  },
}
