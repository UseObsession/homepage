import type { Recipe } from '../types'

/* Delivery monitoring (/recipes/delivery-monitoring). A ready-made collection (9 Nov): every email, text and login code
   the reader's own sign-up (or a client's, with their OK) sends a new customer in its first 14 days, timed on real
   inboxes and numbers in each country they sell in, from new accounts opened after every release. Anything missing is
   flagged the day it was due. Codes are tried at checkout and stop before payment. No claim about spam folder
   placement: only what arrived, when, and whether it works. The run and the table match the `qa` screen (release 4.2,
   3 accounts, UK login codes stop on day 6, US codes in 6 seconds). Example. */

export const recipe: Recipe = {
  id: 'delivery',
  slug: 'delivery-monitoring',
  name: 'Delivery monitoring',
  group: 'Check your own journeys',
  line: 'Every email, text and login code your sign-up sends a new customer in its first 14 days, timed, in each country.',
  gets: 'Every message a new customer should get, timed, and anything missing flagged the day it was due.',
  kit: [
    'A new account after every release',
    'Real inboxes',
    'Real numbers in each country you sell in',
    'iPhone, Android and desktop',
    'A 14 day watch, every message timed',
    'Every message kept with its arrival time',
  ],

  meta: {
    path: '/recipes/delivery-monitoring',
    title: 'Delivery monitoring: prove every email, text and code lands',
    description:
      'Every email, text and login code your sign-up sends a new customer in its first 14 days, timed on real inboxes and numbers in each country you sell in.',
    answer:
      'Delivery monitoring records every email, text and login code your sign-up sends a new customer in its first 14 days. After every release, Obsession opens new accounts with real inboxes and numbers in each country you sell in, and flags anything that never arrives.',
    ogImage: '/og/delivery-monitoring.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Delivery monitoring', path: '/recipes/delivery-monitoring' },
    ],
  },

  hero: {
    headline: 'Every email, text and login code your new customers should get, timed.',
    sub: 'Delivery monitoring records every email, text and login code your sign-up sends a new customer in its first 14 days. After every release, Obsession opens new accounts with real inboxes and numbers in each country you sell in, and flags anything that never arrives.',
    screen: 'qa',
    capture: {
      kind: 'waitlist',
      source: 'recipe-delivery-monitoring-hero',
      button: 'Request early access',
      interest: 'delivery',
    },
  },

  run: {
    tab: 'Example: release 4.2',
    recipe: 'delivery',
    task: 'After release 4.2, open 3 new accounts in the UK and US. Watch our first 14 days and flag anything that never arrives.',
    targets: 'Your app, UK and US',
    journey: ['Sign up', 'Log in by text code', 'Open every email', 'Time every message'],
    schedule: 'Every release, then daily for 14 days',
    report: 'Slack alert, every message in a table',
    kit: ['3 new accounts', '3 inboxes', 'UK and US numbers', 'iPhone and Android'],
    events: [
      { time: 'Day 1, 09:00', text: '3 accounts sign up: UK on iPhone, US and UK on Android.' },
      { time: 'Day 1, 09:03', text: 'Welcome emails in 2 to 3 minutes. Login codes by text in under 10 seconds.' },
      { time: 'Day 3, 10:00', text: 'Setup tips email arrives for all 3. Every link opens.' },
      { time: 'Day 6, 09:12', text: 'Login code by text: the US account gets it in 6 seconds.' },
      { time: 'Day 6, 09:22', text: 'Both UK accounts: no code after 10 minutes.' },
    ],
    finding: 'Login codes stopped reaching UK numbers on day 6. US numbers still get them in 6 seconds.',
    fix: 'In #releases in Slack with the text log. A new UK account tries again after the fix.',
    ledger: 'Example run. Every email, text and code timed, with its screenshot.',
  },

  steps: [
    { title: 'Pick the journeys', line: 'Sign-up, onboarding, trial, a launch: every message a customer should get. Yours, or a client’s.' },
    { title: 'New accounts open', line: 'After every release and every week, each with a real inbox and number in the countries you sell in.' },
    { title: 'Every message timed', line: 'Against when it should arrive, for 14 days.' },
    { title: 'What never arrives lands first', line: 'The day it was due, with the screenshot and the log, in Slack, a ticket or a webhook.' },
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
        { title: 'Codes and links', line: 'Every code tried at checkout, stopping before payment. Every link opened on phone and desktop.' },
      ],
    },
    {
      group: 'Every country and device',
      items: [
        { title: 'Real numbers', line: 'In each country you sell in, so a text a network blocks shows up as missing.' },
        { title: 'Phone and desktop', line: 'iPhone and Android, and desktop browsers.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every miss arrives with its log.',
    items: [
      { format: 'Slack', line: 'The day a message doesn’t arrive, with the log attached.' },
      { format: 'Ticket', line: 'For your tracker, with the screenshots and the text log.' },
      { format: '14 day timeline', line: 'Every message each account got, and when.' },
      { format: 'PDF', line: 'For your team or a client, ready to forward.' },
      { format: 'Webhook', line: 'Each arrival and each miss as JSON.' },
    ],
  },

  settings: [
    { k: 'Journeys', v: 'Sign-up, onboarding, trial, renewals and launches' },
    { k: 'New accounts', v: 'After every release, or every week' },
    { k: 'Countries', v: 'A real number in each country you sell in' },
    { k: 'Devices', v: 'iPhone, Android and desktop' },
    { k: 'Window', v: '14 days, or as long as your journey runs' },
  ],

  forWho: [
    { audience: 'founders', line: 'Find the email, text or code new users never get, the day it goes missing.' },
    { audience: 'marketing', line: 'Know every launch email, text and code works in every country you send to.' },
    { audience: 'agencies', line: 'Every client’s messages timed, with a log to forward.' },
    { audience: 'developers', line: 'Every login code timed on real numbers, after every release.' },
  ],

  table: {
    heading: 'Day 1 passed. On day 6, UK login codes stopped arriving.',
    line: 'Example: release 4.2, 3 new accounts.',
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
    heading: 'Real inboxes and numbers, and every message timed.',
    items: [
      {
        q: 'How do I know our welcome emails and login codes arrive?',
        a: 'Delivery monitoring opens new accounts with real inboxes and numbers in each country you sell in, watches your first 14 days, and flags any email, text or code that never arrives.',
      },
      {
        q: 'Why 14 days?',
        a: 'Because a day 1 test misses the login code on day 6 and the trial reminder on day 13. You can set any window.',
      },
      {
        q: 'Are the inboxes and numbers real?',
        a: 'Yes, each with a real number in the country you pick, so a text a network blocks never reaches it either.',
      },
      {
        q: 'Can it check our launch emails and texts?',
        a: 'Yes. Accounts on your list get every send, open every link and try every code at checkout, stopping before payment.',
      },
      { q: 'Does it see our real customers’ data?', a: 'No. It sees only what its own accounts receive.' },
      { q: 'Can agencies run it for clients?', a: 'Yes, with each client’s OK, each with its own log to forward.' },
    ],
  },

  final: {
    heading: 'Find the message your customers never got.',
    sub: 'Early access includes API and MCP access, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-delivery-monitoring-final',
      button: 'Request early access',
      interest: 'delivery',
    },
  },
}
