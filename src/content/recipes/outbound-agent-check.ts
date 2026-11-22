import type { Recipe } from '../types'

/* Outbound agent check (/blueprints/outbound-agent-check). Check your AI agents. Screen: outcheck (40 messages read, 3
   flagged: 30% off over the 15% limit, a text at 03:12 inside quiet hours, a claimed customer you don't have; STOP
   honoured; "AI SDR paused by your rule"). The screen quotes the claimed customer by name; the copy never names it.
   The persona version (20 Nov 2026): personas you define as prospects, each with its own name, inbox and number, sit on
   the reader's own AI SDR's lists (added by the reader) and wake on every email, text and call it sends, for as long as
   the sequence runs. They reply the way prospects do, every message is kept as it arrived, and each one that breaks the
   reader's rules is flagged; a demo request at a competitor shows what its AI SDR sends. With the AI SDR, the page says
   what the event log shows; when a rep joins, the persona tells them it's an AI. The run is an example. */

export const recipe: Recipe = {
  id: 'outbound-agent',
  slug: 'outbound-agent-check',
  name: 'Outbound agent check',
  group: 'Check your AI agents',
  line: 'Personas join your AI SDR’s lists, or a competitor’s, as prospects and keep every message.',
  gets: 'Every message an AI SDR sends, kept as it arrived, with the ones that break your rules flagged.',
  kit: [
    'Prospect personas, each with its own inbox and number',
    'Added to your lists by you, or a demo request at a competitor',
    'Your approved claims, prices and discount limit',
    'Your quiet hours and contact limits',
    'Every message dated, with screenshots',
    'Flags in Slack, a sheet or the API',
  ],

  meta: {
    path: '/blueprints/outbound-agent-check',
    title: 'Check what your AI SDR sends, from a prospect’s own inbox',
    description:
      'Personas join an AI SDR’s lists as prospects, keep every email, text and call it sends, yours or a competitor’s, and flag each one that breaks your rules.',
    answer:
      'Outbound agent check puts personas on your AI SDR’s lists as the prospects you define. They keep every email, text and call, and flag each claim, discount or send time that breaks your rules.',
    ogImage: '/og/outbound-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Outbound agent check', path: '/blueprints/outbound-agent-check' },
    ],
  },

  hero: {
    headline: 'What your AI SDR sends prospects, every message kept.',
    sub: 'Outbound agent check puts personas on your AI SDR’s lists as the prospects you define. They keep every email, text and call, and flag each claim, discount or send time that breaks your rules.',
    screen: 'outcheck',
    capture: {
      kind: 'waitlist',
      source: 'recipe-outbound-agent-hero',
      button: 'Start free',
      interest: 'outbound-agent',
    },
  },

  unit: 'outbound check',
  per: 'outbound agent',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['Prospect personas, each with its own inbox and number', 'Every email, text and call kept as it arrived', 'Each message checked against your rules'] },
    { name: 'Starter', includes: ['Personas reply as prospects do: yes, not now, no or STOP', 'Claims, prices and send times checked against your rules', 'Flags in Slack or a sheet, with the quote and the rule'] },
    { name: 'Team', includes: ['The next message after no or STOP, timed', 'A pause on a flag, if you switch it on'] },
    { name: 'Scale', includes: ['Personas added to your lists from your code', 'Every message in your event log, by webhook or API'] },
  ],

  run: {
    tab: 'Your AI SDR, continuously',
    recipe: 'outbound-agent',
    task: 'Add 2 prospect personas to our AI SDR’s lists. Keep every email, text and call it sends them, reply as prospects do, and flag what breaks our rules.',
    targets: 'Your AI SDR: email, text and calls',
    journey: ['Join its lists', 'Keep every message', 'Reply “not now”, then STOP', 'Read against your rules'],
    schedule: 'Every message, as it lands',
    report: 'Slack flags, and every message by API',
    kit: ['2 prospect personas', '2 inboxes', '2 phone numbers', 'Replies as prospects do'],
    events: [
      { time: 'Mon 08:31', text: 'The first email to both personas: “Used by 2,000 teams.” It matches your approved list.' },
      { time: 'Tue 11:26', text: 'Email: “30% off if you sign today.” Your limit is 15%.' },
      { time: 'Wed 03:12', text: 'A text: “Free for a quick demo today?” Your quiet hours run from 21:00 to 08:00.' },
      { time: 'Wed 09:14', text: 'Email: it claims a customer you don’t have.' },
      { time: 'Wed 10:02', text: 'Persona 2 texts STOP. “You’re unsubscribed.” Nothing follows.' },
    ],
    finding: '40 messages read. 3 broke your rules: 30% off where your limit is 15%, a text at 03:12 and a customer you don’t have.',
    fix: 'Each flag in #sales-ops the minute it landed, and your AI SDR paused by the rule you set.',
    ledger: '40 messages kept, 37 within your rules, each dated.',
  },

  steps: [
    {
      title: 'Join the lists',
      line: 'You add prospect personas to the lists your AI SDR sends to, or a client does.',
    },
    { title: 'Add your rules', line: 'Your approved claims, price list, discount limit, quiet hours and contact limits.' },
    {
      title: 'Every message kept',
      line: 'Each persona wakes on every message while the sequence runs and replies yes, not now, no or STOP.',
    },
    {
      title: 'Flags land where you work',
      line: 'Slack, a sheet or the API, with the quote, the time and the rule it broke.',
    },
  ],

  checks: [
    {
      group: 'What it says',
      items: [
        { title: 'Says it’s an AI', line: 'At the start of every call, and in every email and text, with who it acts for.' },
        { title: 'Only true claims', line: 'Every case study, result and figure it cites, beside your approved list.' },
        { title: 'The right price', line: 'Every price it quotes, beside your price list as it read that day.' },
        { title: 'Offers within its limit', line: 'Every discount it offers, beside the limit you set.' },
      ],
    },
    {
      group: 'When it writes',
      items: [
        { title: 'Quiet hours', line: 'Every send time in the persona’s time zone, beside your quiet hours and the law.' },
        { title: 'How often', line: 'Every email, text and call counted against your contact limits.' },
        { title: 'Stops on no and STOP', line: 'And how fast: the next message after “not now”, “no” or STOP is timed.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Added by you', line: 'On the lists you choose, so the personas get what your prospects get.' },
        { title: 'Your numbers', line: 'Each persona is marked as a test, so it stays out of your reply rates.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every message comes back as it arrived, with broken rules flagged.',
    items: [
      { format: 'A line per message', line: 'Within your rules or flagged, with the rule that decided it.' },
      { format: 'The message itself', line: 'Every email, text and call recording, timed in the persona’s time zone.' },
      { format: 'Competitors’ sequences', line: 'What their AI SDRs send after a demo request, message by message.' },
      { format: 'A pause, on your rule', line: 'Your AI SDR paused when a message breaks a rule you switch on.' },
      { format: 'Slack, sheet or API', line: 'Every message as a flag, a row or JSON.' },
    ],
  },

  settings: [
    { k: 'AI SDRs', v: 'Yours, a client’s, or a competitor’s after a demo request' },
    { k: 'Channels', v: 'Email, text and calls' },
    { k: 'Personas', v: '2 or more prospects, added by you' },
    { k: 'Claims', v: 'Your approved case studies, results and figures' },
    { k: 'Prices and offers', v: 'Your price list, and a discount limit such as 15%' },
    { k: 'Quiet hours', v: 'For example 21:00 to 08:00, in the persona’s time zone' },
    { k: 'Pause rule', v: 'Pause your AI SDR on a flag, only if you switch it on' },
    { k: 'Where it lands', v: 'Slack, a sheet, a webhook or the API' },
  ],

  table: {
    heading: 'Your AI SDR sends more than anyone can read. Every message is kept.',
    cols: ['By hand', 'With Outbound agent check'],
    rows: [
      { label: 'Claims', values: ['Spotted when a prospect objects', 'Read against your approved list, every message'] },
      { label: 'Discounts', values: ['Found when a deal arrives at 30% off', 'Flagged the moment it goes over your limit'] },
      { label: 'Send times', values: ['Nobody sees the text sent at 03:12', 'Every send time read against your quiet hours'] },
      { label: 'STOP', values: ['You trust the unsubscribe list', 'STOP sent, and the next message timed'] },
      { label: 'Competitors', values: ['A colleague’s forwarded email', 'Every message after a demo request, dated'] },
    ],
  },

  faq: {
    heading: 'The personas reply as prospects do. You set the rules.',
    items: [
      {
        q: 'Are AI SDRs worth it, or do they just send more spam?',
        a: 'Outbound agent check shows you what yours sends. Personas join its lists as prospects, every message is kept, and each claim, discount and send time that breaks your rules is flagged.',
      },
      {
        q: 'How do the personas get on our lists?',
        a: 'You add Outbound agent check’s personas, or your client does. Each has its own name, inbox and number.',
        link: { label: 'See inboxes for AI agents', to: '/email' },
      },
      {
        q: 'Can Outbound agent check read a competitor’s AI SDR?',
        a: 'Yes. A persona requests a demo or signs up as the prospect you define, and keeps everything the competitor’s AI SDR sends. It has its own name, inbox and number, so nothing points back to you.',
      },
      {
        q: 'Does the persona say it’s an AI?',
        a: 'Whenever it talks to a person, such as a rep who joins the thread or picks up a call. With your AI SDR, your event log keeps both sides word for word.',
        link: { label: 'See how a persona works', to: '/personas' },
      },
      {
        q: 'Will the personas skew our numbers?',
        a: 'No. Each Outbound agent check persona is marked as a test in your list, so it stays out of your reply rates and pipeline.',
      },
      {
        q: 'Can Outbound agent check pause our AI SDR?',
        a: 'Only if you set that rule. Then a flagged message pauses it until you’ve looked.',
      },
      {
        q: 'What does Outbound agent check cost?',
        a: 'Each prospect persona uses an inbox and a number, billed at list rates with every email, text and call it receives. Between messages it waits at no charge, for as long as the sequence runs.',
        link: { label: 'See phone numbers for AI agents', to: '/phone' },
      },
    ],
  },

  final: {
    heading: 'Read what your AI SDR sends, the way your prospects read it.',
    sub: 'Try it on the Free plan with 2 prospect personas on your own lists.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-outbound-agent-final',
      button: 'Start free',
      interest: 'outbound-agent',
    },
    link: { label: 'More blueprints to build agent products', to: '/blueprints/build-agent-products' },
  },
}
