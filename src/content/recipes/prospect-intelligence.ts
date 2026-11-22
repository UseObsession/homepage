import type { Recipe } from '../types'

/* Prospect intelligence (/recipes/prospect-intelligence; /recipes/prospect-research redirects here). Watch other
   companies. Screen: pack. Home's tile calls it "Agency prospect audits".
   The persona version (20 Nov 2026): a persona the reader defines signs up, opts in to texts and asks the chat at every
   company on their list, waits, and brings back what each prospect sent, or never sent, to open a pitch with. It works
   from a list (Clay, Google Sheets, a CSV, the API) and writes each finding, its date and a link to its events in your event log back to
   the same rows. Not contact data: no people, no tracking. Kept from James: the "54 of 142" totals, "your team writes
   the first line" and "stop writing when the gap closes". Sold as designed: no index, no "already covered", no caps.
   The run is an example. */

export const recipe: Recipe = {
  id: 'prospect',
  slug: 'prospect-intelligence',
  name: 'Prospect intelligence',
  group: 'Watch other companies',
  line: 'A persona signs up at each prospect and brings back what they send, for your pitch.',
  gets: 'A finding and an event log link on every row, back in Clay, your CRM or a sheet.',
  kit: [
    'A persona at each prospect, with its own inbox',
    'Its own phone number for texts',
    'A home connection in their country',
    'Every email and text kept with its arrival time',
    'Kept for as long as you set',
    'New columns on the rows you already have',
  ],

  meta: {
    path: '/blueprints/prospect-intelligence',
    title: 'Research prospects by what they send their own customers',
    description:
      'A persona signs up at each company on your list and keeps the emails, texts and chat answers it gets, as dated columns in Clay or Sheets, to pitch with.',
    answer:
      'Prospect intelligence sends a persona to sign up, opt in to texts and ask the chat at every company on your list. What each sends, or never sends, lands back in Clay or Sheets.',
    ogImage: '/og/prospect-intelligence.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Prospect intelligence', path: '/blueprints/prospect-intelligence' },
    ],
  },

  hero: {
    headline: 'Open every pitch with the prospect’s own emails, and the ones that never came.',
    sub: 'Prospect intelligence sends a persona to sign up, opt in to texts and ask the chat at every company on your list. What each sends, or never sends, lands back in Clay or Sheets.',
    screen: 'pack',
    capture: {
      kind: 'waitlist',
      source: 'recipe-prospect-hero',
      button: 'Request early access',
      interest: 'prospect',
    },
  },

  unit: 'prospect check',
  per: 'prospect',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['A persona signs up, opts in to texts and asks the chat', 'Every email and text kept, timed from the sign up', 'A finding for each, with a link to its events'] },
    { name: 'Starter', includes: ['Watched for 14 days from the sign up', 'A gap counted only after the spam folder is checked', 'Findings back on your rows in Clay or a sheet'] },
    { name: 'Growth', includes: ['A persona in each prospect’s country', 'A link the prospect can open, for each finding'] },
    { name: 'Scale', includes: ['Subscriber, trial user or buyer personas across your list', 'Every finding in your event log, by webhook or API'] },
  ],

  run: {
    tab: '142 brands, from Clay',
    recipe: 'prospect',
    task: 'Opt in to texts at the 142 brands in our Clay table as a UK subscriber. Tell me which never send one.',
    targets: '142 consumer brands, from a Clay table',
    journey: ['Sign up to emails', 'Opt in to texts', 'Ask the site’s chat', 'Wait 14 days'],
    schedule: 'Day 1, then days 7 and 14',
    report: 'Clay columns, an event log link each',
    kit: ['Persona: subscriber · UK', '142 inboxes', '142 phone numbers', '14 days kept'],
    events: [
      { time: 'Day 1, 09:00', text: 'Signed up and opted in to texts at 142 brands.' },
      { time: 'Day 1, 10:00', text: '131 welcome emails arrive within the hour.' },
      { time: 'Day 1, 11:00', text: 'Asks each site’s chat 1 question. 9 hand over to a person, and the persona says it’s an AI.' },
      { time: 'Day 7', text: '88 brands have sent a text. 54 are still silent.' },
      { time: 'Day 14', text: 'Still silent at day 14: 54 brands, each with its events in your event log.' },
    ],
    finding: '54 of 142 brands took a text opt in and never sent a text in 14 days.',
    fix: '54 event log links and a finding column written back to Clay. Your team writes each first line.',
    ledger: 'Each brand’s events are dated in your event log, and anyone with the link can open them.',
  },

  steps: [
    { title: 'Add your list', line: 'From Clay, Google Sheets, a CSV or the API. You bring the contacts.' },
    {
      title: 'Define the persona',
      line: 'A subscriber, trial user or buyer in each prospect’s country, taking the steps you choose.',
    },
    { title: 'It waits, and keeps everything', line: 'Every email, text and answer, timed from the sign up, for as long as you set.' },
    {
      title: 'Findings land on your rows',
      line: 'A finding, its date and an event log link on every row. Your team writes the first line.',
    },
  ],

  checks: [
    {
      group: 'Sign up and welcome',
      items: [
        { title: 'Welcome email', line: 'Whether it arrives, how fast, whether it lands in spam, and its offer.' },
        { title: 'What they send', line: 'Every email and text after sign up, how often they come and which offers repeat.' },
        { title: 'Sign up form', line: 'Whether it works on phone and desktop, and the step where it breaks.' },
        { title: 'Free trials', line: 'Every onboarding email by trial day, and what a rep sends.' },
      ],
    },
    {
      group: 'Texts',
      items: [{ title: 'Text opt in', line: 'Whether even 1 text follows the opt in, inside the window you set.' }],
    },
    {
      group: 'Chat and booking',
      items: [
        { title: 'The site’s chat', line: 'Whether it answers a buyer’s question, and how fast a person picks up.' },
        { title: 'Booking pages', line: 'Whether the page loads on a phone and shows open slots.' },
      ],
    },
  ],

  outputs: {
    heading: 'A finding about every prospect, with an event log link they can open.',
    items: [
      { format: 'A finding per company', line: 'The gap or the offer, against the rule you set.' },
      { format: 'A timeline', line: 'Every step with its time, from sign up to the end of the window.' },
      { format: 'The emails and texts', line: 'Kept as they arrived, with screenshots.' },
      { format: 'A link anyone can open', line: 'Including the prospect, so the finding stands up on its own.' },
      { format: 'Totals', line: 'For example: 54 of 142 brands never sent a text after the opt in.' },
    ],
  },

  settings: [
    { k: 'What to look for', v: 'The gap your product closes, or the offer you want to see' },
    { k: 'What counts', v: 'For example: no text within 14 days, no welcome email within an hour' },
    { k: 'Persona', v: 'Subscriber, trial user or buyer, in each prospect’s country' },
    { k: 'How long', v: '7, 14 or 30 days, then again on a schedule' },
    { k: 'Afterwards', v: 'Stop, or keep reading and hear when a gap closes' },
    { k: 'Companies', v: 'A Clay table, a sheet, a CSV or the API' },
  ],

  faq: {
    heading: 'Every finding stands up on its own, with a record the prospect can open.',
    items: [
      {
        q: 'What is prospect intelligence?',
        a: 'Prospect intelligence is what a prospect sends the people who sign up, brought back by a persona you define that signs up too. It isn’t contact data: your tools find the people.',
      },
      {
        q: 'How do I find a reason to reach out that 50 other reps don’t have?',
        a: 'Use something only a subscriber of theirs can see. Prospect intelligence signs up at every company on your list and keeps what arrives, so each first line opens on a dated finding.',
      },
      {
        q: 'Does Prospect intelligence work with Clay and Google Sheets?',
        a: 'Yes. Prospect intelligence reads the companies from your table and writes the finding, the date and the event log link back as new columns on the same rows.',
      },
      {
        q: 'Does Prospect intelligence contact their staff?',
        a: 'Only if you set it to. Prospect intelligence’s persona signs up, opts in and asks the site’s chat, and says it’s an AI when it talks to a person. Who asked is never shown.',
      },
      {
        q: 'How do I know a gap is real?',
        a: 'Prospect intelligence counts a gap only once the sign up is confirmed, the spam folder is checked and the full window has been watched. Anything less is No verdict, never a gap.',
      },
      {
        q: 'What happens when the window ends?',
        a: 'Prospect intelligence stops, or reads again on a schedule. If a gap closes you hear about it, so you know to stop writing.',
      },
      {
        q: 'How many prospects can Prospect intelligence cover?',
        a: 'Prospect intelligence covers every company on your list at once, with a persona at each. Run one, or a fleet of thousands.',
      },
    ],
  },

  final: {
    heading: 'Write only to the prospects with the gap you fix.',
    sub: 'Bring your list. We’ll set up the first personas with you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-prospect-final',
      button: 'Request early access',
      interest: 'prospect',
    },
  },
}
