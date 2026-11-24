import type { Recipe } from '../types'

/* Load tracking (/blueprints/load-tracking). Work behind logins. Screen: loads, drawn for a company (Larkspur
   Logistics, an invented brokerage: 8 carrier portals, 312 loads in transit read at 06:00 in 19 minutes; 1 ETA 19 hours
   later and 4 loads with no update, so 5 exceptions; a proof of delivery by email at 06:24). Wave 2 (23 Nov 2026,
   _research/seo/blueprints-22nov/PLAN.md §3): the job brokers, 3PLs and shippers already pay track and trace staff
   for, carrier portal by carrier portal. No competitor or customer is named and no figure is borrowed. Owns "load
   tracking" and "load tracking software" (Google suggestions, 23 Nov; "freight tracking software" and "shipment tracking
   software" sit beside them); "ai agent for freight broker" stays with the use case, which the FAQ links. Logins the
   customer owns only, stops before payment, reads loads and never books or changes one. */

export const recipe: Recipe = {
  id: 'loads',
  slug: 'load-tracking',
  name: 'Load tracking',
  group: 'Work behind logins',
  line: 'Reads every load in your carrier portals 4 times a day and puts each status, ETA and proof of delivery in one sheet.',
  gets: 'Every load’s status and ETA through the day, with the late ones, the stale ones and each proof of delivery first.',
  kit: [
    'A browser per carrier portal, signed in with your logins',
    'An inbox and number per carrier for login codes and status emails',
    'Your loads in transit, from your TMS or a sheet',
    'Every load read 4 times a day',
    'A dated screenshot of every status page',
    'Each proof of delivery attached to its load',
  ],
  build: {
    line: 'Start it with one call, then push each status change into your transportation management system from the event log.',
    code: `await obsession.blueprints.run('load-tracking', {
  loads: { sheet: 'Loads in transit' },
  times: ['06:00', '10:00', '14:00', '18:00'],
})

obsession.on('blueprint.result', async (e) => {
  if (e.data.etaMoved || e.data.stale) await tms.updateLoad(e.data.load, e.data)
})`,
    events: [
      { kind: 'page.visited', text: 'Each carrier page the browser reads, kept with its screenshot.' },
      { kind: 'email.received', text: 'A carrier’s status email or proof of delivery, with the PDF attached.' },
      { kind: 'sms.received', text: 'A login code sent by text, caught at the persona’s own number.' },
      { kind: 'blueprint.result', text: 'Each load’s status, its ETA and how far it moved since the last read.' },
    ],
  },

  meta: {
    path: '/blueprints/load-tracking',
    title: 'Track every load across carrier portals, 4 times a day',
    description:
      'Load tracking signs in to every carrier portal with your own logins, 4 times a day, and puts each load’s status, ETA and proof of delivery in one sheet.',
    answer:
      'Load tracking signs in to each carrier portal with your own logins 4 times a day and reads every load’s status and ETA. It updates one sheet or your transportation management system, with each page saved as a screenshot.',
    ogImage: '/og/load-tracking.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Load tracking', path: '/blueprints/load-tracking' },
    ],
  },

  hero: {
    headline: 'Track every load across your carrier portals, before the customer asks where it is.',
    sub: 'Load tracking signs in to each carrier portal with your own logins 4 times a day and reads every load’s status and ETA. It updates one sheet or your transportation management system, with each page saved as a screenshot.',
    screen: 'loads',
    capture: {
      kind: 'waitlist',
      source: 'recipe-loads-hero',
      button: 'Start free',
      interest: 'loads',
    },
  },

  buyer: 'For freight brokers, third-party logistics providers (3PLs) and shippers’ logistics teams.',
  unit: 'status read',
  per: 'carrier portal',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['The loads in 1 carrier portal, read once', 'Each load’s status and ETA, with a screenshot', 'The late and stale loads, marked'] },
    { name: 'Desk', includes: ['Every load read twice a day', 'One loads sheet across your carriers', 'Each login code caught at the persona’s own inbox or number'] },
    { name: 'Brokerage', includes: ['Every load read 4 times a day', 'Exceptions posted to Slack as they’re found', 'Each proof of delivery attached to its load'] },
    { name: 'Network', includes: ['Each change sent to your TMS by webhook', 'Each customer’s loads kept apart in your event log'] },
  ],

  run: {
    tab: 'Loads in transit, 4 times a day',
    recipe: 'loads',
    task: 'At 06:00, 10:00, 14:00 and 18:00, sign in to 8 carrier portals with Larkspur Logistics’ own logins, read every load in transit and update the loads sheet. Post every exception to #loads.',
    targets: '8 carrier portals, signed in with Larkspur Logistics’ own logins',
    journey: ['Sign in with your logins', 'Read each load’s status and ETA', 'Attach each proof of delivery', 'Flag what moved'],
    schedule: '4 times a day, from 06:00',
    report: 'The loads sheet, and exceptions in #loads in Slack',
    kit: ['8 personas · 1 per carrier', '8 inboxes and numbers', '8 browsers, kept signed in', 'Your loads sheet'],
    events: [
      { time: 'Tue 06:00', text: '8 browsers open 8 carrier portals. 7 are still signed in from last week.' },
      { time: 'Tue 06:02', text: 'Carrier E asks for a login code. It reaches the persona’s inbox in 6 seconds.' },
      { time: 'Tue 06:19', text: 'All 312 loads read, each carrier page saved with a screenshot.' },
      { time: 'Tue 06:19', text: 'Load 77120, Chicago to Memphis: its ETA moved from Tuesday 14:00 to Wednesday 09:00.' },
      { time: 'Tue 06:24', text: 'The proof of delivery for load 77341, delivered at 05:12, arrives in the persona’s inbox.' },
      { time: 'Tue 06:25', text: 'The sheet is updated, and 5 exceptions post to #loads.' },
    ],
    finding: 'At the 06:00 read, 1 load’s ETA had moved 19 hours later and 4 loads had no update since yesterday, 1 of them for 14 hours.',
    fix: 'All 5 at the top of the loads sheet and in #loads by 06:25, each with its screenshot, so your team calls those carriers and tells each customer before they ask.',
    ledger: '312 loads read in 8 carrier portals, every page kept with its screenshot.',
  },

  steps: [
    { title: 'Connect your carrier portals', line: 'Your own logins for each carrier, kept in a browser that stays signed in for weeks.' },
    { title: 'Add the loads', line: 'From your TMS, a sheet or the API, each with its carrier and its tracking, PRO or load number.' },
    { title: 'It reads each load through the day', line: '4 times a day by default. Each page is saved with a screenshot, and each login code lands at the persona’s own inbox or number.' },
    { title: 'Exceptions land where your team works', line: 'Your loads sheet, your TMS, Slack or a webhook, with the late and stale loads first.' },
  ],

  checks: [
    {
      group: 'What it reads for each load',
      items: [
        { title: 'Status', line: 'Picked up, in transit, out for delivery or delivered, in the carrier’s own words.' },
        { title: 'ETA', line: 'The carrier’s latest arrival time, and how far it moved since the last read.' },
        { title: 'Proof of delivery', line: 'The signed copy, from the portal or the carrier’s email, attached to the load.' },
        { title: 'No update', line: 'A load whose status hasn’t moved in the hours you set.' },
        { title: 'Exceptions', line: 'Delays, refused deliveries and missed appointments, as the carrier records them.' },
      ],
    },
    {
      group: 'Signing in',
      items: [
        { title: 'Your logins', line: 'Each carrier portal is signed in with logins your company owns.' },
        { title: 'Login codes', line: 'Each code reaches the persona’s own inbox or number, so a read never waits on staff.' },
        { title: 'Status emails', line: 'Carriers that email updates send them to the persona, and each lands on its load.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Steps for your team', line: 'A portal that needs someone on your team goes to them with the page and its screenshot.' },
        { title: 'Payment', line: 'It stops before payment, so it never pays a carrier invoice or a fee.' },
        { title: 'Bookings', line: 'It reads loads. Booking, cancelling or changing one stays with your team.' },
        { title: 'Spend', line: 'It works within a monthly spend limit you set on its key.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every load’s status and ETA, where your team already looks.',
    items: [
      { format: 'A loads sheet', line: 'Every load in transit with its carrier, status, ETA and the time it last changed.' },
      { format: 'Your TMS', line: 'Each change by webhook, so the load record in your transportation management system keeps itself current.' },
      { format: 'Slack', line: 'Exceptions as they’re found: a slipped ETA, a stale load, a refused delivery.' },
      { format: 'Proof of delivery', line: 'Each signed copy attached to its load, ready to invoice.' },
      { format: 'Screenshots', line: 'Every carrier page, dated, for a claim or a customer’s question.' },
      { format: 'API and MCP', line: 'Ask your own agent where any load is.' },
    ],
  },

  settings: [
    { k: 'Carrier portals', v: 'Every carrier you book, with your own logins' },
    { k: 'Loads', v: 'Every load in transit, from your TMS, a sheet or the API' },
    { k: 'How often', v: '4 times a day by default, or every hour on the loads you choose' },
    { k: 'Login codes', v: 'To each persona’s own inbox or number, 1 persona per carrier' },
    { k: 'No-update alert', v: 'After 6 hours without a status change, or the hours you set' },
    { k: 'Where it lands', v: 'Your loads sheet, your TMS, Slack or a webhook' },
  ],

  table: {
    heading: 'Your team hears about a late load before the customer does.',
    cols: ['By hand', 'With Load tracking'],
    rows: [
      { label: 'Checking status', values: ['A login per carrier, load by load', 'Every load read 4 times a day'] },
      { label: 'A slipped ETA', values: ['Found when the customer calls', 'Flagged at the read it moves'] },
      { label: 'Proof of delivery', values: ['Chased by email for days', 'Attached to the load as it arrives'] },
      { label: 'Login codes', values: ['Sent to whoever set up the login', 'Caught at the persona’s own inbox or number'] },
      { label: 'A portal redesign', values: ['The script breaks', 'The agent reads the new page'] },
      { label: 'Another carrier', values: ['More hours on the phone', 'One more login in your settings'] },
    ],
  },

  faq: {
    heading: 'Before it signs in to your first carrier portal.',
    items: [
      {
        q: 'How do we track every load across carrier portals without logging in to each one?',
        a: 'Load tracking signs in to each carrier portal with your own logins 4 times a day and reads every load’s status and ETA. It updates one sheet or your TMS, with each page saved as a screenshot, so nobody on your team has to log in to check.',
      },
      {
        q: 'Does it replace our load tracking software?',
        a: 'It covers the loads your load tracking software can’t see: carriers with no integration, and portals only a person could read before. Its results can feed the same transportation management system (TMS).',
      },
      {
        q: 'Which carriers does it work with?',
        a: 'Any carrier whose portal your team signs in to, including regional and less-than-truckload (LTL) carriers with no tracking feed. Where a carrier emails its updates, they land in the persona’s inbox and on the load.',
      },
      {
        q: 'Where does it stop?',
        a: 'It signs in only with logins your company owns, works within a monthly spend limit you set on its key, and stops before any payment. It reads loads; booking and changing them stays with your team.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'Can an AI agent make check calls to carriers too?',
        a: 'Yes, from its own number, saying it’s an AI on every call and keeping the transcript. Load tracking reads portals and emails; calls are set up beside it, with every call in the same event log.',
        link: { label: 'See the AI agent for freight brokers', to: '/use-cases/ai-agent-for-freight-brokers' },
      },
      {
        q: 'How do our engineers build on it?',
        a: 'Start it with obsession.blueprints.run and handle each blueprint.result in your own code. Sessions stay signed in for weeks, each page arrives as page.visited with its screenshot, and every change can reach your TMS by webhook.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'How many loads can it track?',
        a: 'As many as you move: a desk’s loads with 3 carriers, or thousands a day across every carrier a 3PL books, each read 4 times a day.',
      },
      {
        q: 'What should we watch once it runs?',
        a: 'Loads each rep handles, check calls your team still makes, on-time updates to customers and how often a customer hears about a late load before they ask. Each read dates every change, so you can see what it does to each.',
      },
      {
        q: 'What does Load tracking cost?',
        a: 'It’s billed on the pieces it uses, at list rates: browser time for each status read, and an inbox and a number per carrier portal for login codes and status emails. The hours between reads cost nothing.',
        link: { label: 'See browsers for AI agents', to: '/browser' },
      },
    ],
  },

  final: {
    heading: 'Know where every load is before your customer asks.',
    sub: 'Try it on the Free plan with the loads in one carrier portal.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-loads-final',
      button: 'Start free',
      interest: 'loads',
    },
    link: { label: 'More blueprints to work behind logins', to: '/blueprints/work-behind-logins' },
  },
}
