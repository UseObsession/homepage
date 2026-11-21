import type { Recipe } from '../types'

/* Mystery shopping for your store (/blueprints/store-mystery-shopper), split from mystery-shopper.ts on 21 Nov 2026
   (James): an ecommerce brand checks its own store, while the agency version shops many client stores. Personas you
   define sign up with their own inbox and number, browse, fill a basket and leave at checkout before payment, wait 48
   hours, wake on every email and text, and keep every event in the event log, each run beside the last. Its difference
   from a shopper simulation (content/blog/shopify-simgym-review-ai-shoppers-vs-ai-customers.ts, never named here): a
   simulation predicts how shoppers would browse; a persona here is a shopper the store can email and text, and it keeps
   what follows. The run and the weekly table are illustrations, not a real run (the 1 real run stays on the agency
   page). Its screen is the sign-up and checkout watch, where hollin's welcome code fails at checkout.
   Tiers (James, 21 Nov 2026) scale by how often it runs, for 1 store; their prices and cost are in the pricing JSON
   (content/blueprint-tiers.ts). A store monitor on the market charges $19 to $199 a store a month by how often it runs
   (unnamed). */

export const recipe: Recipe = {
  id: 'store-mystery',
  slug: 'store-mystery-shopper',
  name: 'Mystery shopping for your store',
  group: 'Check your own journeys',
  line: 'Personas shop your own store as new shoppers and keep every email, text and reminder that followed, or the silence.',
  gets: 'Every email and text your store sends a new shopper, dated, and the week a reminder stops.',
  kit: [
    'A persona per journey, defined by you',
    'Its own inbox, phone number and home connection',
    'Sign up, browse, basket and checkout',
    'Stops before payment and at any identity check',
    '48 hours of waiting, waking on each email and text',
    'Each run beside the last, every message dated',
  ],

  meta: {
    path: '/blueprints/store-mystery-shopper',
    title: 'Mystery shopping for your store: every email after a basket',
    description:
      'Personas sign up to your store with their own inbox and number, leave a basket and wait 48 hours, keeping every email and text your store sends.',
    answer:
      'Mystery shopping for your store sends personas you define through your own store as new shoppers. They sign up with their own inbox and phone number, browse, fill a basket and leave before payment. Then they wait 48 hours and keep every email and text your store sends, each dated.',
    ogImage: '/og/store-mystery-shopper.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Mystery shopping for your store', path: '/blueprints/store-mystery-shopper' },
    ],
  },

  hero: {
    headline: 'A new persona shops your store each week and shows you the week a reminder stops.',
    sub: 'Mystery shopping for your store sends personas you define through your own store as new shoppers. They sign up with their own inbox and phone number, browse, fill a basket and leave before payment. Then they wait 48 hours and keep every email and text your store sends, each dated.',
    screen: 'shop',
    capture: {
      kind: 'waitlist',
      source: 'recipe-store-mystery-hero',
      button: 'Request early access',
      interest: 'store-mystery',
    },
  },

  buyer: 'For ecommerce brands and their retention teams, checking their own store.',
  unit: 'mystery shop',
  per: 'store',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    {
      name: 'Free',
      includes: [
        'A full mystery shop: sign up, browse, basket and checkout',
        'A 48 hour watch of every inbox and number',
        'Every email, text and screenshot in your event log',
      ],
    },
    {
      name: 'Monthly',
      includes: [
        'A full mystery shop every month',
        'A 48 hour watch after every shop',
        'Email and Slack alerts when an email or text goes missing',
        'Every result by webhook, API or MCP',
      ],
    },
    {
      name: 'Weekly',
      includes: ['A full mystery shop every week', 'Everything in Monthly', 'Each week beside the last, so a change stands out'],
    },
    {
      name: 'Daily',
      includes: [
        'A checkout left every day, before payment',
        'A full mystery shop every week',
        'Everything in Weekly',
        'History and trends for your store',
      ],
    },
  ],

  run: {
    tab: 'Your store, every Monday',
    recipe: 'store-mystery',
    task: 'Every Monday, send 4 new personas through our store, 1 for each journey: welcome, browse, basket and checkout. Watch every inbox and number for 48 hours.',
    targets: 'Your store, as a new shopper from the UK on a phone',
    journey: ['Sign up for emails and texts', 'Browse and leave', 'Leave a basket', 'Leave at checkout, before payment'],
    schedule: 'Every Monday, then a 48 hour watch',
    report: 'Every email, text and screenshot in your event log, and a Slack alert',
    kit: ['4 personas a week', '4 inboxes', 'A UK number', '48 hour watch'],
    events: [
      { time: 'Mon, 09:00', text: '4 personas sign up, browse, fill a basket and leave at checkout, 1 journey each.' },
      { time: 'Mon, 09:04', text: 'Welcome email in 4 minutes, with its 10% code. The text confirmation in 20 seconds.' },
      { time: 'Mon, 10:00', text: 'Basket reminder after 1 hour, naming the right item.' },
      { time: 'Mon, 12:11', text: '3 hours on. No checkout reminder yet. Last week’s came at this point.' },
      { time: 'Wed, 09:11', text: '48 hours on. No reminder for Monday’s checkout.' },
    ],
    finding: 'The checkout reminder stopped this week. For the 2 Mondays before, it came 3 hours after the checkout was left.',
    fix: 'A Slack alert with the empty inbox, the hours it was watched and last week’s email beside it. Next Monday’s persona checks the fix.',
    ledger: 'Every email and text dated, with a screenshot of every step.',
  },

  steps: [
    {
      title: 'Name your store',
      line: 'Paste its address, or start a shop from the API after each release.',
    },
    {
      title: 'Define the persona',
      line: 'A first-time shopper in Manchester on a phone, or a returning one in Texas on a desktop.',
    },
    {
      title: 'It signs up and fills a basket',
      line: 'It signs up with its own inbox and number, browses, fills a basket and leaves at checkout before payment, with a screenshot of every step.',
    },
    {
      title: 'It waits, and wakes on every email',
      line: 'It waits 48 hours by default, so a reminder that never comes is in your event log too, beside last week’s.',
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
          line: 'By default. Give it your own payment card and it completes the order, so the confirmation joins your event log.',
        },
        { title: 'At an ID check', line: 'It stops at that step, and the event log keeps what the check asked for.' },
        { title: 'With a person', line: 'If anyone writes or calls, it says it’s an AI.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every run lands in your event log and the tools you already use.',
    items: [
      { format: 'The timeline', line: 'Every step and message with its time, from the sign up to the last email.' },
      { format: 'The receipts', line: 'Screenshots, each raw email with its sender checked, and texts as received.' },
      { format: 'The silences', line: 'A reminder that never came, with the inbox and the hours it was watched.' },
      { format: 'Week on week', line: 'Each run beside the one before, so a change stands out.' },
      { format: 'Alerts', line: 'An email or Slack message when a flow stops.' },
      { format: 'API and MCP', line: 'Start a mystery shop after each release, and read every event as a tool.' },
    ],
  },

  settings: [
    { k: 'Store', v: 'Your own, or each country store you run' },
    { k: 'Journeys', v: 'Sign up, browse, basket, checkout and texts' },
    { k: 'Persona', v: 'A first-time shopper in Manchester on a phone, or your own' },
    { k: 'Waiting', v: '48 hours by default, 7 days, or as long as you hold the persona' },
    { k: 'Payment', v: 'Stops before payment, or pays with your own card' },
    { k: 'How often', v: 'Monthly, weekly, or a checkout left every day' },
  ],

  forWho: [
    { audience: 'marketing', line: 'Your welcome, basket and checkout emails as a new shopper gets them, week after week.' },
    { audience: 'developers', line: 'Start a mystery shop from your code after each release, and read every email and text as it lands.' },
    { audience: 'agencies', line: 'An agency with 1 client store can start here, and move to the agency plans as clients join.' },
  ],

  table: {
    heading: 'This week’s checkout reminder never came. The 2 weeks before, it came in 3 hours.',
    line: 'The same 4 journeys every Monday, by a new persona each week.',
    cols: ['2 weeks ago', 'Last week', 'This week'],
    rows: [
      { label: 'Time to welcome email', values: ['4 min', '4 min', '4 min'] },
      { label: 'Welcome code', values: ['10% off', '10% off', '10% off'] },
      { label: 'Basket reminder', values: ['After 1 hour', 'After 1 hour', 'After 1 hour'] },
      { label: 'Checkout reminder', values: ['After 3 hours', 'After 3 hours', 'None in 48 h'] },
      { label: 'Text confirmation', values: ['Yes', 'Yes', 'Yes'] },
    ],
  },

  faq: {
    heading: 'Every email your store sends, kept as it arrived, with its time.',
    items: [
      {
        q: 'What does a mystery shop of my store check?',
        a: 'The 4 journeys a new shopper takes: signing up for emails and texts, browsing, leaving a basket and leaving at checkout. Then every email and text your store sends in the next 48 hours, each dated, and any reminder that never came.',
      },
      {
        q: 'How do I see what my store emails after a basket is left?',
        a: 'Name the store and define the persona. It signs up, fills a basket and leaves before payment, then waits 48 hours and wakes on every email and text that follows, each kept with the time it arrived.',
      },
      {
        q: 'How is this different from a shopper simulation?',
        a: 'A simulation predicts how shoppers would browse your pages and what they’d add to the basket. Here a persona signs up with its own inbox and phone number, waits, and keeps every email and text your store sends afterwards, each dated.',
      },
      {
        q: 'How often should it run?',
        a: 'Weekly suits most stores, so a flow that stops after a theme change or a new app is caught within days. Daily adds a checkout left every day, for a store where a day without reminders costs real sales.',
      },
      {
        q: 'Does it place real orders?',
        a: 'Only if you say so. By default every journey stops before payment. Give a persona your own payment card and it completes the order, so the confirmation and every email after it join your event log.',
      },
      {
        q: 'Can I compare my store with my competitors?',
        a: 'Yes. Send the same persona to the stores you compete with, and their emails sit beside yours in your event log.',
      },
      {
        q: 'Can a persona watch for longer than 48 hours?',
        a: 'Yes. It lives as long as you hold it, so it can come back months later as the same shopper, and every new email joins your event log the day it arrives.',
      },
    ],
  },

  final: {
    heading: 'What does your store send a new shopper this week?',
    sub: 'Tell us your store and the shopper. We’ll set up your first personas with you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-store-mystery-final',
      button: 'Request early access',
      interest: 'store-mystery',
    },
  },
}
