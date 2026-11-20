import type { Recipe } from '../types'

/* Agentic mystery shopping (/recipes/mystery-shopper; the slug is kept, renamed from Store sign-up and checkout on
   20 Nov 2026 to match Home's tile). The persona version (20 Nov, James): personas you define shop your store, or a
   client's with their OK, as first-time shoppers. They sign up, browse, fill a basket and leave at checkout before
   payment (or pay with your own card if you say so), wait 48 hours by default, wake on every email and text, and bring
   back the record. It carries the 1 real run, Brand G (sample.ts), stated exactly: 4 journeys from the UK, a £40 Body
   Care Gift Set left at 02:57 and a £21 deodorant left at checkout at 03:11 on Tue 22 Sep 2026, 48 hours watched, 0
   reminders, browse 3 messages, welcome 2 (too few to call), 15 screenshots and 5 messages kept. No signature claimed.
   The comparison table is an example. */

export const recipe: Recipe = {
  id: 'mystery',
  slug: 'mystery-shopper',
  name: 'Agentic mystery shopping',
  group: 'Check your own journeys',
  line: 'Personas shop your store as new shoppers and bring back every email, text and reminder that followed, or the silence.',
  gets: 'Every email and text your store sends a new shopper, dated, and the reminders that never came.',
  kit: [
    'A persona per journey, defined by you',
    'Its own inbox, phone number and home connection',
    'Sign up, browse, basket and checkout',
    'Stops before payment by default',
    '48 hours of waiting, waking on each email and text',
    'A screenshot of every step, every message dated',
  ],

  meta: {
    path: '/recipes/mystery-shopper',
    title: 'Agentic mystery shopping: every email after a basket is left',
    description:
      'Personas you define sign up, browse, fill a basket and leave at checkout, then wait 48 hours and bring back every email and text your store sent.',
    answer:
      'Agentic mystery shopping sends personas you define through your store as new shoppers. They sign up, browse, fill a basket and leave at checkout before payment, then wait 48 hours and bring back every email and text, each dated, with screenshots.',
    ogImage: '/og/mystery-shopper.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Agentic mystery shopping', path: '/recipes/mystery-shopper' },
    ],
  },

  hero: {
    headline: 'A persona leaves a basket. You see every email that follows, or the silence.',
    sub: 'Agentic mystery shopping sends personas you define through your store as new shoppers. They sign up, browse, fill a basket and leave at checkout before payment, then wait 48 hours and bring back every email and text, each dated, with screenshots.',
    screen: 'shop',
    capture: {
      kind: 'waitlist',
      source: 'recipe-mystery-hero',
      button: 'Request early access',
      interest: 'mystery',
    },
  },

  run: {
    tab: 'Real run, September 2026',
    recipe: 'mystery',
    task: 'Send 4 personas to Brand G, a skincare store, 1 for each journey: welcome, browse, basket and checkout. Watch every inbox for 48 hours.',
    targets: 'Brand G, a skincare store, name hidden',
    journey: ['Sign up for emails', 'Browse and leave', 'Leave a basket', 'Leave at checkout, before payment'],
    schedule: 'Once, 22 to 24 September 2026',
    report: 'The record: every screenshot and message, timed',
    kit: ['4 journeys, 1 persona each', '4 inboxes, 1 per journey', 'From the UK', '48 hour watch'],
    events: [
      { time: '22 Sep, 02:57', text: 'A £40 Body Care Gift Set left in the basket.' },
      { time: '22 Sep, 03:11', text: 'A £21 deodorant left at checkout, before payment.' },
      { time: '22 to 24 Sep', text: 'Browse: 3 messages arrive. Welcome: 2, too few to call.' },
      { time: '24 Sep, 02:57', text: '48 hours on. No reminder for the £40 basket.' },
      { time: '24 Sep, 03:11', text: '48 hours on. No reminder for the £21 checkout.' },
    ],
    finding: 'A £40 basket and a £21 checkout, both left on 22 Sep. No reminder reached either in 48 hours.',
    fix: 'Both silences in the record, each with its inbox, the hours it was watched and the screenshots.',
    ledger: 'Real run, September 2026. Store name hidden. 15 screenshots and 5 messages kept.',
  },

  steps: [
    {
      title: 'Name your store',
      line: 'Yours, or a client’s with their OK. Paste the address, upload a list or call the API.',
    },
    {
      title: 'Define the persona',
      line: 'A first-time shopper in Manchester on a phone, or a returning one in Texas on a desktop.',
    },
    {
      title: 'It signs up and fills a basket',
      line: 'It signs up, browses, fills a basket and leaves at checkout before payment, with a screenshot of every step.',
    },
    {
      title: 'It waits, and wakes on every email',
      line: 'It sleeps 48 hours by default, or as long as you set, so a reminder that never comes is in the record too.',
    },
  ],

  checks: [
    {
      group: 'Sign up',
      items: [
        { title: 'The pop up', line: 'Its offer, whether double opt in is needed, and the time to the welcome email.' },
        { title: 'The welcome series', line: 'Every step, the gap between each, and the code each one carries.' },
      ],
    },
    {
      group: 'Basket and checkout',
      items: [
        { title: 'Browse reminders', line: 'What follows a product viewed and left.' },
        { title: 'Basket reminders', line: 'When they come, how many, and whether the right item is named.' },
        { title: 'Checkout', line: 'When delivery costs appear, every step up to payment, and what follows a checkout left.' },
      ],
    },
    {
      group: 'Texts',
      items: [{ title: 'Opt in and STOP', line: 'The confirmation text, how often texts come, and whether STOP stops them.' }],
    },
    {
      group: 'Where it stops',
      items: [
        {
          title: 'Before payment',
          line: 'By default. Give it your own payment card and it completes the order, so the confirmation joins the record.',
        },
        { title: 'At an ID check', line: 'It hands the step to a person, then carries on.' },
        { title: 'With a person', line: 'If anyone writes or calls, it says it’s an AI.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every journey’s record, where you already work.',
    items: [
      { format: 'The timeline', line: 'Every step and message with its time, from the sign up to the last email.' },
      { format: 'The receipts', line: 'Screenshots, each raw email with its sender checked, and texts as received.' },
      { format: 'The silences', line: 'A reminder that never came, with the inbox and the hours it was watched.' },
      { format: 'API and MCP', line: 'Your code, or your own agent, spawns shoppers and reads each record as tools.' },
      { format: 'A table', line: 'A row per journey in Clay, Baserow or Supabase.' },
      { format: 'A webhook', line: 'Each new email and text the moment it lands.' },
    ],
  },

  settings: [
    { k: 'Store', v: 'Yours, or a client’s with their OK' },
    { k: 'Journeys', v: 'Sign up, browse, basket, checkout and texts' },
    { k: 'Persona', v: 'For example: a first-time shopper in Manchester, on a phone' },
    { k: 'Waiting', v: '48 hours by default, 7 days, or as long as you hold the persona' },
    { k: 'Payment', v: 'Stops before payment, or pays with your own card' },
    { k: 'How often', v: 'Once, weekly, or a new shopper every month' },
  ],

  forWho: [
    { audience: 'agencies', line: 'Shop every client’s store with their OK, and show them the reminder that never came.' },
    { audience: 'marketing', line: 'Your welcome, basket and checkout emails as a new shopper gets them, beside your rivals’.' },
    { audience: 'founders', line: 'See what your store sends a new shopper, and what it never sends.' },
    { audience: 'sales', line: 'Shop an account’s store with their OK, and bring the record to your next review.' },
    { audience: 'developers', line: 'Spawn mystery shoppers from your code, and read every email and text as it lands.' },
  ],

  table: {
    heading: 'Competitor A welcomes a new shopper 5 minutes sooner, with a bigger offer.',
    line: 'Example: the same journeys at each store, by the same persona.',
    cols: ['You', 'Competitor A', 'Competitor B'],
    rows: [
      { label: 'Time to welcome email', values: ['6 min', '1 min', 'None in 24 h'] },
      { label: 'Welcome offer', values: ['10% off', '15% off', 'Free delivery'] },
      { label: 'Basket reminder', values: ['After 1 hour', 'After 30 min', 'None in 48 h'] },
      { label: 'Text confirmation', values: ['Yes', 'Yes', 'None'] },
      { label: 'STOP honoured', values: ['Yes', 'A text after STOP', 'Yes'] },
    ],
  },

  faq: {
    heading: 'Every email kept as it arrived, with its time.',
    items: [
      {
        q: 'What is agentic mystery shopping?',
        a: 'Mystery shopping done by AI agents. A persona with its own name, inbox, phone number and home connection shops your store the way a new shopper does, then brings back every page, email and text, each dated.',
      },
      {
        q: 'How do I see what my store emails after a basket is left?',
        a: 'Name the store and define the persona. It signs up, fills a basket and leaves before payment, then waits 48 hours and wakes on every email and text that follows, each kept with the time it arrived.',
      },
      {
        q: 'Who are the personas?',
        a: 'Whoever you define: a first-time shopper in Manchester, a returning one in Texas. Each has its own name, inbox, phone number and home connection, shops the way anyone can, and says it’s an AI when it talks to a person.',
      },
      {
        q: 'Is the September record real?',
        a: 'Yes. In September 2026 personas took 4 journeys at Brand G, a skincare store, name hidden, and every inbox was watched for 48 hours. Its whole record is the sample output.',
      },
      {
        q: 'Does it place real orders?',
        a: 'Only if you say so. By default every journey stops before payment. Give a persona your own payment card and it completes the order, so the confirmation and every email after it join the record.',
      },
      {
        q: 'Can I compare my store with others?',
        a: 'Yes. Send the same persona to the stores you compete with, and the records sit side by side.',
      },
      {
        q: 'Can a persona watch for longer than 48 hours?',
        a: 'Yes. It lives as long as you hold it, so it can come back months later as the same shopper, and every new email joins the record the day it arrives.',
      },
    ],
  },

  final: {
    heading: 'Which store should your first persona shop?',
    sub: 'Tell us the store and the shopper. We’ll set up your first personas with you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-mystery-final',
      button: 'Request early access',
      interest: 'mystery',
    },
  },
}
