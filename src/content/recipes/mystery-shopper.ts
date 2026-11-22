import type { Recipe } from '../types'

/* Mystery shopping (/blueprints/mystery-shopper; the slug owns the search phrase "mystery shopping software" and most
   links). One page for ecommerce brands and the agencies that look after their stores (founders, 22 Nov 2026): James
   split it in 2 on 21 Nov (this page for agencies, store-mystery-shopper for a brand's own store) and the founders
   merged them back the next day, because Home linked one and the nav the other. store-mystery-shopper now redirects
   here (public/_redirects). The page keeps the agency page's structure and its 1 real run; the store page's useful
   words joined it (how often to run, what a shop checks, how it differs from a shopper simulation, week on week).
   Its pricing table switches between Agencies (client stores, each shopped every month) and Ecommerce brands (1 store,
   shopped monthly, weekly or daily): 2 variants of 1 blueprint in the pricing JSON (mystery-shopper and
   mystery-shopper-brands), whose tiers' words are `tiers` and `variants` below.
   Personas sign up, browse, fill a basket and leave at checkout before payment (or pay with a card the buyer or the
   client provides), wait as long as the buyer chooses (48 hours by default; James, 22 Nov: never a fixed length on the
   page), wake on every email and text, and bring back every event to the event log, store by store. Its screen is the
   agency's typed task (15 client stores). It keeps the 1 real run, Brand G (sample.ts), stated exactly: 4 journeys from
   the UK, a £40 Body Care Gift Set left at 02:57 and a £21 deodorant left at checkout at 03:11 on Tue 22 Sep 2026,
   48 hours watched, 0 reminders, browse 3 messages, welcome 2 (too few to call), 15 screenshots and 5 messages kept.
   No signature claimed. The clients in the comparison table are invented. A shopper simulation
   (content/blog/shopify-simgym-review-ai-shoppers-vs-ai-customers.ts) is never named here. Its forms name no audience
   in their source, so the card asks for a site, "yours, or a client's with their OK" (lib/join.ts offerOf: own).
   Buyer hints (directional): a CRO agency founder named $300 a month for mystery shopping; a store monitor on the
   market charges $19 to $199 a store a month by how often it runs (unnamed). */

export const recipe: Recipe = {
  id: 'mystery',
  slug: 'mystery-shopper',
  name: 'Mystery shopping',
  group: 'Check your own journeys',
  line: 'Personas shop a store as new shoppers and show every email, text and missing reminder.',
  gets: 'Every email and text a store sends a new shopper, dated, and the reminders that never came.',
  kit: [
    'A persona for each journey: sign up, browse, basket and checkout',
    'Its own inbox, phone number and home connection',
    'Your store, or each client store with its owner’s OK',
    'Stops before payment and at any identity check',
    'Waiting as long as you choose, waking on each email and text',
    'A report per store, every message dated',
  ],

  meta: {
    path: '/blueprints/mystery-shopper',
    title: 'Mystery shopping software for ecommerce brands and agencies',
    description:
      'Mystery shopping software for brands and agencies: personas shop each store as new shoppers, leave a basket before payment and keep every email and text.',
    answer:
      'Mystery shopping sends personas through your store, or each client store with its owner’s OK, as new shoppers. They sign up, fill a basket and stop before payment, then wait as long as you choose for every email and text.',
    ogImage: '/og/mystery-shopper.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Mystery shopping', path: '/blueprints/mystery-shopper' },
    ],
  },

  hero: {
    headline: 'Personas shop your store, or every client store, and show you which reminder never came.',
    sub: 'Mystery shopping sends personas through your store, or each client store with its owner’s OK, as new shoppers. They sign up, fill a basket and stop before payment, then wait as long as you choose for every email and text.',
    screen: 'agencytask',
    capture: {
      kind: 'waitlist',
      source: 'recipe-mystery-hero',
      button: 'Start free',
      interest: 'mystery',
    },
  },

  buyer: 'For ecommerce brands, and the agencies that look after their stores.',
  unit: 'mystery shop',
  per: 'client store',
  /* What each tier includes, by its name, at most 3 short lines (founders, 22 Nov 2026), never repeating what the card's
     month already says. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). `tiers` are the
     Agencies months; `variants` the Ecommerce brands months, under their id in the JSON. */
  tiers: [
    { name: 'Free', includes: ['Each journey you tick, run once', 'Every email, text and screenshot in your event log'] },
    { name: 'Starter', includes: ['A report for each client', 'Alerts when a reminder goes missing', 'Every result by webhook, API or MCP'] },
    { name: 'Agency', includes: ['Every client in one table', 'A row per store in Clay, Baserow or Supabase', 'Competitors shopped too, counted as stores'] },
    { name: 'Scale', includes: ['Stores added from a list or by API', 'History and trends for each store'] },
  ],
  variants: [
    {
      id: 'mystery-shopper-brands',
      tiers: [
        { name: 'Free', includes: ['Each journey you tick, run once', 'Every email, text and screenshot in your event log'] },
        { name: 'Monthly', includes: ['Alerts when an email or text goes missing', 'Every result by webhook, API or MCP'] },
        { name: 'Weekly', includes: ['Each week beside the last', 'Alerts when an email or text goes missing'] },
        { name: 'Daily', includes: ['Alerts the day a reminder stops', 'History and trends for your store'] },
      ],
    },
  ],

  run: {
    tab: 'Real run, September 2026',
    recipe: 'mystery',
    task: 'Send 4 personas to Brand G, a skincare store, 1 for each journey: welcome, browse, basket and checkout. Watch every inbox for 48 hours.',
    targets: 'Brand G, a skincare store, name hidden',
    journey: ['Sign up for emails', 'Browse and leave', 'Leave a basket', 'Leave at checkout, before payment'],
    schedule: 'Once, 22 to 24 September 2026',
    report: 'Every screenshot and message in your event log, timed',
    kit: ['4 journeys, 1 persona each', '4 inboxes, 1 per journey', 'From the UK', '48 hour watch'],
    events: [
      { time: '22 Sep, 02:57', text: 'A £40 Body Care Gift Set left in the basket.' },
      { time: '22 Sep, 03:11', text: 'A £21 deodorant left at checkout, before payment.' },
      { time: '22 to 24 Sep', text: 'Browse: 3 messages arrive. Welcome: 2, too few to call.' },
      { time: '24 Sep, 02:57', text: '48 hours on. No reminder for the £40 basket.' },
      { time: '24 Sep, 03:11', text: '48 hours on. No reminder for the £21 checkout.' },
    ],
    finding: 'A £40 basket and a £21 checkout, both left on 22 Sep. No reminder reached either in 48 hours.',
    fix: 'Both silences in your event log, each with its inbox, the hours it was watched and the screenshots.',
    ledger: 'Real run, September 2026. Store name hidden. 15 screenshots and 5 messages kept.',
  },

  steps: [
    {
      title: 'Add your stores',
      line: 'Paste your store’s address, upload your client list or call the API.',
    },
    {
      title: 'Define the personas',
      line: 'A first-time shopper in Manchester on a phone, or a returning one in Texas on a desktop.',
    },
    {
      title: 'They sign up and fill a basket',
      line: 'At each store, up to checkout before payment, with a screenshot of every step.',
    },
    {
      title: 'They wait, and wake on every email',
      line: 'As long as you choose, so a missing reminder is in your event log too.',
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
          line: 'By default. Give it your card, or a client’s, and it completes the order.',
        },
        { title: 'At an ID check', line: 'It stops there, and the event log keeps what the check asked for.' },
        { title: 'With a person', line: 'If anyone writes or calls, it says it’s an AI.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every store’s journeys land in your event log and the tools you already use.',
    items: [
      { format: 'A report per store', line: 'Every step and message, timed, from sign up to the last email, ready to share.' },
      { format: 'Screenshots and raw emails', line: 'Every step on screen, each raw email with its sender checked, and every text as received.' },
      { format: 'The silences', line: 'A reminder that never came, with the inbox and the hours it was watched.' },
      { format: 'Week on week', line: 'Each run beside the one before, so a change stands out.' },
      { format: 'One table', line: 'A row per store in Clay, Baserow or Supabase.' },
      { format: 'API, MCP and webhooks', line: 'Add stores from your code and read each email and text as it lands.' },
    ],
  },

  settings: [
    { k: 'Stores', v: 'Your own, or every client store with its owner’s OK' },
    { k: 'Journeys', v: 'Sign up, browse, basket, checkout and texts' },
    { k: 'Persona', v: 'A first-time shopper in Manchester on a phone, or your own' },
    { k: 'Waiting', v: 'As long as you choose, 48 hours by default' },
    { k: 'Payment', v: 'Stops before payment, or pays with a card you provide' },
    { k: 'How often', v: 'Monthly, weekly or daily, for every journey you tick' },
  ],

  table: {
    heading: 'The candles and outdoor gear clients sent no basket reminder in 48 hours.',
    line: 'The same journeys at each client store, by the same persona, in the same week.',
    cols: ['Homeware client', 'Candles client', 'Outdoor gear client'],
    rows: [
      { label: 'Time to welcome email', values: ['3 min', '1 min', 'None in 24 h'] },
      { label: 'Pop up offer', values: ['10% off', '15% off', 'Free delivery'] },
      { label: 'Basket reminder', values: ['After 1 hour', 'None in 48 h', 'None in 48 h'] },
      { label: 'Checkout reminder', values: ['After 3 hours', 'After 30 min', 'None in 48 h'] },
      { label: 'STOP honoured', values: ['Yes', 'Yes', 'A text after STOP'] },
    ],
  },

  faq: {
    heading: 'Every email a store sends, kept as it arrived, with its time.',
    items: [
      {
        q: 'What is an AI mystery shopper?',
        a: 'A persona run by AI agents that shops a store as a new shopper. It has its own name, inbox, phone number and home connection, and brings back every page, email and text, each dated.',
        link: { label: 'See how a persona works', to: '/personas' },
      },
      {
        q: 'Is this mystery shopping software or a service?',
        a: 'Both. Developers run it as software, adding stores from their code through the API or MCP. Teams who don’t maintain code pick the blueprint, and we set up the personas and run every shop.',
      },
      {
        q: 'What does a mystery shop of a store check?',
        a: 'The 4 journeys a new shopper takes: signing up for emails and texts, browsing, leaving a basket and leaving at checkout. Then every email and text the store sends while the persona waits, and any reminder that never came.',
      },
      {
        q: 'How many stores can I check?',
        a: 'As many as you like. Each shop counts toward what your plan covers at list rates. The months above show 30, 150 and 500 client stores, or 1 store shopped monthly, weekly or daily. For reports in your own brand, see the Enterprise plan on the pricing page.',
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'How often should it run?',
        a: 'Agencies usually shop each client store monthly, before the client review. For your own store, weekly catches a flow that stops after a theme change or a new app within days, and daily runs every journey you tick each day.',
      },
      {
        q: 'Do my clients need to agree?',
        a: 'Yes. Each client store is shopped with its owner’s OK. The personas shop the way anyone can, stop before payment and at any identity check, and say they’re an AI when they talk to a person.',
      },
      {
        q: 'How is this different from a shopper simulation?',
        a: 'A simulation predicts how shoppers would browse your pages and what they’d add to the basket. Here a persona signs up with its own inbox and phone number, waits, and keeps every email and text the store sends.',
      },
      {
        q: 'Is the September run real?',
        a: 'Yes. In September 2026 personas took 4 journeys at Brand G, a skincare store, name hidden, and every inbox was watched for 48 hours. Every event from it is in the sample output.',
      },
      {
        q: 'Does it place real orders?',
        a: 'Only if you say so. By default every journey stops before payment. Give a persona a payment card, yours or a client’s, and it completes the order, so the confirmation and every email after it join your event log.',
      },
      {
        q: 'Can I compare a store with its competitors?',
        a: 'Yes. Send the same persona to the stores you or a client compete with, and their events sit side by side in your event log. Each store it shops counts toward what your plan covers.',
      },
      {
        q: 'How long does a persona wait after a shop?',
        a: 'As long as you choose. A persona stays yours until you let it go, so it can come back months later as the same shopper, and every new email joins your event log the day it arrives.',
      },
      {
        q: 'What does mystery shopping cost?',
        a: 'It’s billed on the pieces it uses, at list rates. Each persona uses an inbox, a number and browser hours to shop with. A persona is free while it waits. Try it on the Free plan.',
        link: { label: 'See inboxes for AI agents', to: '/email' },
      },
    ],
  },

  final: {
    heading: 'Find the reminder your store, or a client’s, never sends.',
    sub: 'Try it on the Free plan on your own store, or a client store with its owner’s OK.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-mystery-final',
      button: 'Start free',
      interest: 'mystery',
    },
    link: { label: 'See the Test sign-up and agents kit', to: '/kits/test-sign-up-and-agents' },
  },
}
