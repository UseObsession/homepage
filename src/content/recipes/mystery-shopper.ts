import type { Recipe } from '../types'

/* Store sign-up and checkout (/recipes/mystery-shopper; the slug is kept, the page is retitled, 9 Nov). A ready-made
   collection: what any store sends a new customer after a sign-up, a browse, a basket and a checkout left before
   payment, every email and text timed, from the customer profile the reader picks. It carries the 1 real record,
   Brand G (sample.ts), stated exactly: 4 journeys from the UK, a £40 Body Care Gift Set left at 02:57 and a £21
   deodorant left at checkout at 03:11 on Tue 22 Sep 2026, 48 hours watched, 0 reminders, browse 3 messages, welcome 2
   (too few to call), 15 screenshots and 5 messages kept. No signature claimed. The comparison table is an example. */

export const recipe: Recipe = {
  id: 'mystery',
  slug: 'mystery-shopper',
  name: 'Store sign-up and checkout',
  group: 'Check your own journeys',
  line: 'What any store sends a new customer after a sign-up, a basket and a checkout, every email timed.',
  gets: 'Every email and text a store sends a new customer, timed, and the reminders that never came.',
  kit: [
    'An account at each store, as the profile you pick',
    'An inbox and number for each journey',
    'Sign-up, browse, basket and checkout',
    'Every checkout stopped before payment',
    'A screenshot of every step',
    'Every email kept with its arrival time',
  ],

  meta: {
    path: '/recipes/mystery-shopper',
    title: 'Basket and checkout emails at any store, timed · Obsession',
    description:
      'What any store sends a new customer after a sign-up, a basket and a checkout left before payment: every email and text, timed, with screenshots.',
    answer:
      'Store sign-up and checkout records what any store sends a new customer after a sign-up, a browse, a basket and a checkout left before payment. Every email and text is kept with the time it arrived and a screenshot of each step.',
    ogImage: '/og/mystery-shopper.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Store sign-up and checkout', path: '/recipes/mystery-shopper' },
    ],
  },

  hero: {
    headline: 'The emails after the basket, at any store.',
    sub: 'Store sign-up and checkout records what any store sends a new customer after a sign-up, a browse, a basket and a checkout left before payment. Every email and text is kept with the time it arrived and a screenshot of each step.',
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
    task: 'Sign up to Brand G, a skincare store, 4 ways: welcome, browse, basket and checkout. Watch every inbox for 48 hours.',
    targets: 'Brand G, a skincare store, name hidden',
    journey: ['Sign up for emails', 'Browse and leave', 'Leave a basket', 'Leave at checkout, before payment'],
    schedule: 'Once, 22 to 24 September 2026',
    report: 'The record: every screenshot and message, timed',
    kit: ['4 journeys', '4 inboxes, 1 per journey', 'From the UK', '48 hour watch'],
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
      title: 'Name the stores',
      line: 'A competitor, a prospect, a client or your own. Paste a list, upload a CSV or call the API.',
    },
    {
      title: 'Pick the profile',
      line: 'A new customer in the UK, a returning one in the US, on a phone or a desktop.',
    },
    {
      title: 'Obsession takes each journey',
      line: 'It signs up, browses, fills a basket and leaves at checkout before payment, with a screenshot of every step.',
    },
    {
      title: 'Every email lands, timed',
      line: 'Each inbox is watched for the window you set, so a reminder that never comes is in the record too.',
    },
  ],

  checks: [
    {
      group: 'Sign-up',
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
        { title: 'Before payment', line: 'Every checkout stops before payment.' },
        { title: 'At a CAPTCHA', line: 'It stops, and the record says that step couldn’t be tested.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every store’s record, where you already work.',
    items: [
      { format: 'The timeline', line: 'Every step and message with its time, from the sign-up to the last email.' },
      { format: 'The receipts', line: 'Screenshots, each raw email with its sender checked, and texts as received.' },
      { format: 'The silences', line: 'A reminder that never came, with the inbox and the hours it was watched.' },
      { format: 'API and MCP', line: 'Look up any store’s record from your code or your AI agent.' },
      { format: 'A table', line: 'A row per store in Clay or Google Sheets.' },
      { format: 'A webhook', line: 'Each new email the moment it lands.' },
    ],
  },

  settings: [
    { k: 'Stores', v: 'Any store you name: a competitor, a prospect, a client or your own' },
    { k: 'Journeys', v: 'Sign-up, browse, basket, checkout and texts' },
    { k: 'Profile', v: 'For example: a new customer in the UK, on a phone' },
    { k: 'Window', v: '48 hours, 7 days, or as long as the account stays open' },
    { k: 'How often', v: 'Once, weekly, or a new account every month' },
  ],

  forWho: [
    { audience: 'agencies', line: 'Open a pitch with the prospect’s own emails, and the reminder that never came.' },
    { audience: 'marketing', line: 'Every competitor’s welcome, basket and checkout emails, beside yours.' },
    { audience: 'founders', line: 'See what your store, and the 3 you compete with, send a new customer.' },
    { audience: 'sales', line: 'Know what an account’s customers get before the first call.' },
    { audience: 'developers', line: 'Any store’s sign-up and checkout emails, from your code.' },
  ],

  table: {
    heading: 'Competitor A welcomes new customers 5 minutes sooner, with a bigger offer.',
    line: 'Example: the same journeys at each store, from the same customer profile.',
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
        q: 'How do I see what a store emails after a basket is left?',
        a: 'Name the store. Obsession signs up, fills a basket and leaves before payment, as the customer profile you pick, and every email that follows is kept with the time it arrived.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real accounts. Obsession’s agents sign up and shop the way any customer can, each journey with its own inbox and number, and stop before payment. They say they’re an AI when they talk to a person.',
      },
      {
        q: 'Is the September record real?',
        a: 'Yes. In September 2026 Obsession took 4 journeys at Brand G, a skincare store, name hidden, and watched every inbox for 48 hours. Its whole record is the sample data.',
      },
      {
        q: 'Can I see a store’s past emails?',
        a: 'If the store is already covered, its history comes back at once. If not, Watch it, and the record starts the day Obsession signs up.',
      },
      { q: 'Does it place real orders?', a: 'No. Every journey stops before payment.' },
      {
        q: 'Can I include my own store?',
        a: 'Yes. Name it beside your competitors, and the records sit side by side.',
      },
      {
        q: 'Can I watch a store for longer than 48 hours?',
        a: 'Yes. The account stays open as long as you need, and every new email joins the record the day it arrives.',
      },
    ],
  },

  final: {
    heading: 'Which store should we look up first?',
    sub: 'Early access includes every store already covered, and up to 5 added for you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-mystery-final',
      button: 'Request early access',
      interest: 'mystery',
    },
  },
}
