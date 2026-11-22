import type { Recipe } from '../types'

/* Delivery monitoring (/blueprints/delivery-monitoring). Check your own journeys. The persona version (20 Nov 2026,
   James): after every release, new personas you define sign up to your own product (or a client's, with their OK),
   each with its own inbox and phone number and a home connection in a country you sell in. They live your first 14
   days, sleep between messages and wake on each one, and every email, text and login code is timed against when it was
   due; anything missing is flagged that day. Codes are tried at checkout and stop before payment. No claim about spam
   folder placement: only what arrived, when, and whether it works. The run and the table match the `qa` screen
   (release 4.2, 3 personas, UK login codes stop on day 6, US codes in 6 seconds, a ticket drafted for your OK).
   Example. */

export const recipe: Recipe = {
  id: 'delivery',
  slug: 'delivery-monitoring',
  name: 'Delivery monitoring',
  group: 'Test sign-up and agents',
  line: 'Personas in each country you sell in live your first 14 days and time every message.',
  gets: 'Every message a new user should get, timed, and anything missing flagged the day it was due.',
  kit: [
    'New personas after every release',
    'Each with its own inbox and phone number',
    'A home connection in each country you sell in',
    'iPhone, Android and desktop',
    'A 14 day life, waking on every message',
    'Every message kept with its arrival time',
  ],

  meta: {
    path: '/blueprints/delivery-monitoring',
    title: 'Check that every sign-up email, text and login code arrives',
    description:
      'Personas sign up to your product in each country you sell in and live its first 14 days, timing every email, text and login code that should arrive.',
    answer:
      'Delivery monitoring sends new personas through your sign up after every release, each with its own inbox and local number. They live your first 14 days, time every message and flag any that never arrives.',
    ogImage: '/og/delivery-monitoring.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Delivery monitoring', path: '/blueprints/delivery-monitoring' },
    ],
  },

  hero: {
    headline: 'Every email, text and login code a new user should get, timed.',
    sub: 'Delivery monitoring sends new personas through your sign up after every release, each with its own inbox and local number. They live your first 14 days, time every message and flag any that never arrives.',
    screen: 'qa',
    capture: {
      kind: 'waitlist',
      source: 'recipe-delivery-monitoring-hero',
      button: 'Start free',
      interest: 'delivery',
    },
  },

  /* Its buyer (21 Nov 2026, James): growth engineers and QA leads, sold as lifecycle testing of their own email and SMS
     flows. The trigger is a broken sequence that reached customers before anyone noticed. */
  buyer: 'For growth engineers and QA leads who ship email and SMS flows.',
  unit: 'delivery check',
  per: 'flow',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['A sign up with its own inbox and phone number', 'Every email, text and login code, timed against when it was due', 'Anything missing, flagged the day it was due'] },
    { name: 'Launch', includes: ['A new user after each release, or twice a week', 'iPhone, Android or desktop', 'Alerts the day a message goes missing'] },
    { name: 'Growth', includes: ['Started by your release pipeline', 'A ticket drafted for your OK when a message goes missing'] },
    { name: 'Global', includes: ['A local number and home connection in each country', 'Every message compared across releases'] },
  ],

  run: {
    tab: 'Release 4.2',
    recipe: 'delivery',
    task: 'After release 4.2, sign up 3 new personas in the UK and US. Live our first 14 days and flag anything that never arrives.',
    targets: 'Your app, UK and US',
    journey: ['Sign up', 'Log in by text code', 'Open every email', 'Time every message'],
    schedule: 'Every release, then daily for 14 days',
    report: 'Slack alert, every message in a table',
    kit: ['3 personas', '3 inboxes', 'UK and US numbers', 'iPhone and Android'],
    events: [
      { time: 'Day 1, 09:00', text: '3 personas sign up: UK on iPhone, US and UK on Android.' },
      { time: 'Day 1, 09:03', text: 'Welcome emails in 2 to 3 minutes. Login codes by text in under 10 seconds.' },
      { time: 'Day 3, 10:00', text: 'Setup tips email arrives for all 3. Every link opens.' },
      { time: 'Day 6, 09:12', text: 'Login code by text: the US persona gets it in 6 seconds.' },
      { time: 'Day 6, 09:22', text: 'Both UK personas: no code after 10 minutes.' },
    ],
    finding: 'Login codes stopped reaching UK numbers on day 6. US numbers still get them in 6 seconds.',
    fix: 'In #releases in Slack with the text log, and a ticket drafted for your OK. A new UK persona tries again after the fix.',
    ledger: 'Every email, text and code timed, with its screenshot.',
  },

  steps: [
    { title: 'Pick what a new user should get', line: 'Every email, text and code in your sign up, onboarding, trial or launch.' },
    {
      title: 'Personas sign up',
      line: 'After every release and every week, from each country you sell in.',
    },
    { title: 'They live your first 14 days', line: 'Sleeping between messages and waking on each, timed against when it was due.' },
    { title: 'What never arrives lands first', line: 'The day it was due, with its log, in Slack, a ticket or a webhook.' },
  ],

  checks: [
    {
      group: 'Your first 14 days',
      items: [
        { title: 'Welcome and onboarding', line: 'Each email and text arrives on the day it should, and every link opens.' },
        { title: 'Login codes and resets', line: 'Timed on every number and inbox, in every country.' },
        { title: 'Trial and renewal reminders', line: 'They arrive on the day your terms promise.' },
      ],
    },
    {
      group: 'Every launch',
      items: [
        { title: 'Emails and texts', line: 'Each send lands in every inbox and on every number.' },
        { title: 'Codes and links', line: 'Every code tried at checkout, stopping before payment, and every link opened.' },
      ],
    },
    {
      group: 'Every country and device',
      items: [
        { title: 'Local numbers', line: 'In each country you sell in, so a blocked text shows up as missing.' },
        { title: 'Phone and desktop', line: 'iPhone and Android, and desktop browsers.' },
      ],
    },
    {
      group: 'When a user leaves',
      items: [
        { title: 'Unsubscribe', line: 'The one-click link and its headers, and any email that still arrives after it.' },
        { title: 'STOP', line: 'The confirmation text, and any text that still arrives after it.' },
        { title: 'Cancel', line: 'Every screen from the cancel button to the confirmation, the offer made on the way and the email after.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every miss arrives with its log.',
    items: [
      { format: 'Slack', line: 'The day a message doesn’t arrive, with the log attached.' },
      { format: 'Ticket', line: 'For your tracker, with the screenshots and the text log.' },
      { format: '14 day timeline', line: 'Every message each persona got, and when.' },
      { format: 'PDF', line: 'For your team or a client, ready to forward.' },
      { format: 'Webhook', line: 'Each arrival and each miss as JSON.' },
    ],
  },

  settings: [
    { k: 'Journeys', v: 'Sign up, onboarding, trial, renewals and launches' },
    { k: 'New personas', v: 'After every release, or every week' },
    { k: 'Connects from', v: 'Each country you sell in, with a local number' },
    { k: 'Devices', v: 'iPhone, Android and desktop' },
    { k: 'Window', v: '14 days, or as long as your journey runs' },
  ],

  table: {
    heading: 'Day 1 passed. On day 6, UK login codes stopped arriving.',
    line: 'Release 4.2, 3 new personas.',
    cols: ['UK, iPhone', 'US, Android', 'UK, Android'],
    rows: [
      { label: 'Day 1, welcome email', values: ['2 min', '2 min', '3 min'] },
      { label: 'Day 1, login code by text', values: ['7 s', '6 s', '8 s'] },
      { label: 'Day 3, setup tips email', values: ['Arrived', 'Arrived', 'Arrived'] },
      { label: 'Day 6, login code by text', values: ['None in 10 min', '6 s', 'None in 10 min'] },
      { label: 'Day 13, trial end reminder', values: ['Watching', 'Watching', 'Watching'] },
    ],
  },

  faq: {
    heading: 'Its own inbox and number, and every message timed.',
    items: [
      {
        q: 'How do I know our welcome emails and login codes arrive?',
        a: 'Delivery monitoring sends new personas through your sign up in each country you sell in, each with its own inbox and a local number. They live your first 14 days and flag any email, text or code that never arrives.',
        link: { label: 'See how a persona works', to: '/personas' },
      },
      {
        q: 'Why 14 days?',
        a: 'Because a day 1 test misses the login code on day 6 and the trial reminder on day 13. You can set any window.',
      },
      {
        q: 'Are the inboxes and numbers real?',
        a: 'Yes. Each persona has its own inbox and a local number in the country you pick, so a text a network blocks never reaches it either.',
        link: { label: 'See phone numbers for AI agents', to: '/phone' },
      },
      {
        q: 'Can it check our launch emails and texts?',
        a: 'Yes. Personas on your list get every send, open every link and try every code at checkout, stopping before payment.',
      },
      { q: 'Does it see our real users’ data?', a: 'No. It sees only what its own personas receive.' },
      { q: 'Can agencies run it for clients?', a: 'Yes, with each client’s OK, each with its own log to forward.' },
      {
        q: 'What does Delivery monitoring cost?',
        a: 'Each new persona uses an inbox, a local number and browser hours, billed at list rates. Over its 14 days the persona mostly waits for the next message, and waiting costs nothing.',
        link: { label: 'See inboxes for AI agents', to: '/email' },
      },
    ],
  },

  final: {
    heading: 'Find the message your new users never got.',
    sub: 'Try it on the Free plan. Your release pipeline can start each run through the API.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-delivery-monitoring-final',
      button: 'Start free',
      interest: 'delivery',
    },
    link: { label: 'More blueprints to test sign-up and agents', to: '/blueprints/test-sign-up-and-agents' },
  },
}
