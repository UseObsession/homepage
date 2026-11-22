import type { Recipe } from '../types'

/* Mystery shopping for agencies (/blueprints/mystery-shopper; the slug is kept because many pages link here). Renamed
   from Agentic mystery shopping on 21 Nov 2026, when James split mystery shopping in 2: this one is for agencies (CRO,
   retention, and email and SMS agencies) who check many client stores, each with its owner's OK; a brand checking its
   own store has content/recipes/store-mystery-shopper.ts. Personas sign up, browse, fill a basket and leave at checkout
   before payment (or pay with a card the client provides), wait as long as the agency chooses (48 hours by default;
   James, 22 Nov: agencies want different lengths, so the page never fixes one), wake on every email and text, and
   bring back every event to the event log, client by client. Its screen is the agency's typed task (15 client stores).
   It keeps the 1 real run, Brand G (sample.ts), stated exactly: 4 journeys from the UK, a £40 Body Care Gift Set left
   at 02:57 and a £21 deodorant left at checkout at 03:11 on Tue 22 Sep 2026, 48 hours watched, 0 reminders, browse 3
   messages, welcome 2 (too few to call), 15 screenshots and 5 messages kept. No signature claimed. The clients in the
   comparison table are invented. Its forms name agencies in their source, so the card asks for client stores
   (lib/join.ts offerOf).
   Tiers (James, 21 Nov 2026) scale by how many client stores it covers, each shopped in full once a month; their sizes,
   prices and cost are in the pricing JSON (content/blueprint-tiers.ts), whose Agency tier is the founders' anchor.
   Buyer hints (directional): a CRO agency founder named $300 a month for mystery shopping. */

export const recipe: Recipe = {
  id: 'mystery',
  slug: 'mystery-shopper',
  name: 'Mystery shopping for agencies',
  group: 'Check your own journeys',
  line: 'Personas shop every client store as new shoppers and bring back every email, text and reminder that followed, or the silence.',
  gets: 'Every email and text each client store sends a new shopper, dated, and the reminders that never came.',
  kit: [
    'A persona per journey, at every client store',
    'Its own inbox, phone number and home connection',
    'Sign up, browse, basket and checkout',
    'Stops before payment and at any identity check',
    'Waiting as long as you choose, waking on each email and text',
    'A report per client, every message dated',
  ],

  meta: {
    path: '/blueprints/mystery-shopper',
    title: 'Mystery shopping software for agencies: every client store',
    description:
      'Mystery shopping software for agencies: personas shop each client store as new shoppers, leave a basket before payment and keep every email and text.',
    answer:
      'Mystery shopping for agencies sends personas through every client store you look after, as new shoppers, with each client’s OK. They sign up, browse, fill a basket and leave at checkout before payment. Then they wait as long as you choose and bring back every email and text, dated, client by client.',
    ogImage: '/og/mystery-shopper.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Mystery shopping for agencies', path: '/blueprints/mystery-shopper' },
    ],
  },

  hero: {
    headline: 'Personas shop every client store and show you whose reminder never came.',
    sub: 'Mystery shopping for agencies sends personas through every client store you look after, as new shoppers, with each client’s OK. They sign up, browse, fill a basket and leave at checkout before payment. Then they wait as long as you choose and bring back every email and text, dated, client by client.',
    screen: 'agencytask',
    capture: {
      kind: 'waitlist',
      source: 'recipe-mystery-agencies-hero',
      button: 'Request early access',
      interest: 'mystery',
    },
  },

  buyer: 'For CRO, retention, and email and SMS agencies with many client stores.',
  unit: 'mystery shop',
  per: 'client store',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    {
      name: 'Free',
      includes: [
        'A full mystery shop: sign up, browse, basket and checkout',
        'Waiting as long as you choose, waking on each email and text',
        'Every email, text and screenshot in your event log',
      ],
    },
    {
      name: 'Starter',
      includes: [
        'A full mystery shop of each store, every month',
        'Waiting as long as you choose after every shop, waking on each email and text',
        'A report for each client, ready to share',
        'Email and Slack alerts when a reminder goes missing',
        'Every result by webhook, API or MCP',
      ],
    },
    {
      name: 'Agency',
      includes: [
        'Every client in one table, so you see who needs a call first',
        'A row per store in Clay, Baserow or Supabase',
        'A client’s competitors shopped too, counted as stores',
      ],
    },
    {
      name: 'Scale',
      includes: [
        'Client stores added from a list or by API',
        'History and trends for each client store',
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
      title: 'Add your client stores',
      line: 'Paste the addresses, upload your client list or call the API. Each store is shopped with its owner’s OK.',
    },
    {
      title: 'Define the personas',
      line: 'A first-time shopper in Manchester on a phone, or a returning one in Texas on a desktop. The same personas can shop every client.',
    },
    {
      title: 'They sign up and fill a basket',
      line: 'At each store they sign up, browse, fill a basket and leave at checkout before payment, with a screenshot of every step.',
    },
    {
      title: 'They wait, and wake on every email',
      line: 'They wait as long as you choose, so a reminder that never comes is in your event log too, filed under its client.',
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
          line: 'By default. Give it a payment card from the client and it completes the order, so the confirmation joins your event log.',
        },
        { title: 'At an ID check', line: 'It stops at that step, and the event log keeps what the check asked for.' },
        { title: 'With a person', line: 'If anyone writes or calls, it says it’s an AI.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every client’s journeys land in your event log and the tools you already use.',
    items: [
      { format: 'A report per client', line: 'Every step and message with its time, from the sign up to the last email, ready to share.' },
      { format: 'The receipts', line: 'Screenshots, each raw email with its sender checked, and texts as received.' },
      { format: 'The silences', line: 'A reminder that never came, with the inbox and the hours it was watched.' },
      { format: 'One table', line: 'A row per client store in Clay, Baserow or Supabase.' },
      { format: 'A webhook', line: 'Each new email and text the moment it lands.' },
      { format: 'API and MCP', line: 'Add client stores from your own code, and read every event as a tool.' },
    ],
  },

  settings: [
    { k: 'Stores', v: 'Every client store, each with its owner’s OK' },
    { k: 'Journeys', v: 'Sign up, browse, basket, checkout and texts' },
    { k: 'Persona', v: 'A first-time shopper in Manchester on a phone, or your own' },
    { k: 'Waiting', v: 'As long as you choose, 48 hours by default' },
    { k: 'Payment', v: 'Stops before payment, or pays with a card the client provides' },
    { k: 'How often', v: 'Each client store, once a month' },
  ],

  forWho: [
    { audience: 'agencies', line: 'Shop every client store each month with the client’s OK, and show each one the reminder that never came.' },
    { audience: 'marketing', line: 'A team that runs several brands shops every store in the same week and compares them in one table.' },
    { audience: 'sales', line: 'Bring each client’s dated events to the monthly review, beside what changed since the last shop.' },
    { audience: 'developers', line: 'Add client stores from your own code, and read every email and text as it lands.' },
  ],

  table: {
    heading: '2 of 3 client stores sent no basket reminder in 48 hours.',
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
    heading: 'Every client’s emails, kept as they arrived, with their times.',
    items: [
      {
        q: 'What is an AI mystery shopper?',
        a: 'A persona run by AI agents that shops a store the way a new shopper does. It has its own name, inbox, phone number and home connection, and brings back every page, email and text, each dated. Here it shops every client store you look after.',
      },
      {
        q: 'Is this mystery shopping software or a service?',
        a: 'Both. Developers run it as software, adding client stores from their own code through the API or MCP. Teams who don’t maintain code pick the blueprint, and we set up the personas and run every shop for them.',
      },
      {
        q: 'How many client stores can I check?',
        a: 'As many as you look after. Each store’s shops are paid from your plan’s credit at the piece rates, so a store costs what its runs use, and the months above show what 30, 150 and 500 stores cost. For reports in your own brand, see the Enterprise plan on the pricing page.',
      },
      {
        q: 'Do my clients need to agree?',
        a: 'Yes. Each store is shopped with its owner’s OK. The personas shop the way anyone can, stop before payment and at any identity check, and say they’re an AI when they talk to a person.',
      },
      {
        q: 'What does each client get?',
        a: 'A report on their own store: every step and message with its time, the screenshots, and any reminder that never came, with the hours it was watched.',
      },
      {
        q: 'Is the September run real?',
        a: 'Yes. In September 2026 personas took 4 journeys at Brand G, a skincare store, name hidden, and every inbox was watched for 48 hours. Every event from it is in the sample output.',
      },
      {
        q: 'Does it place real orders?',
        a: 'Only if you say so. By default every journey stops before payment. Give a persona a payment card from the client and it completes the order, so the confirmation and every email after it join your event log.',
      },
      {
        q: 'Can I compare a client with its competitors?',
        a: 'Yes. Send the same persona to the stores a client competes with, and their events sit side by side in your event log. Each store it shops is paid for like a client store, from your plan’s credit.',
      },
      {
        q: 'How long does a persona wait after a shop?',
        a: 'As long as you choose. A persona stays yours until you let it go, so it can come back months later as the same shopper, and every new email joins your event log the day it arrives.',
      },
    ],
  },

  final: {
    heading: 'Which client stores should your first personas shop?',
    sub: 'Tell us the stores and the shopper. We’ll set up your first personas with you, client by client.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-mystery-agencies-final',
      button: 'Request early access',
      interest: 'mystery',
    },
  },
}
