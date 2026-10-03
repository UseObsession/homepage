import type { Capture, Recipe } from '../types'

/* Delivery monitoring (/recipes/delivery-monitoring). Check your own journeys. Screen: qa.
   New page (James's original recipe set had Delivery monitoring; our version's "First 14 days" use case on the
   Founders page). Labelled test customers with real inboxes and numbers live your first 14 days, a new one after
   every release and every week, and prove every email, text and login code arrives. It also covers every launch
   send (Marketing's "Your launch", the Agencies weekend codes, the webinar invite). Your own journeys only, or a
   client's with their OK; every code tried stops before payment. No claim about spam folder placement: only what
   arrived, when, and whether it works.
   The run and the table tell the same story as the `qa` screen (release 4.2, 3 labelled test customers, UK login
   codes stop on day 6, US codes in 6 seconds, the fix ticket drafted). Example. */

const roles: Capture['roles'] = {
  question: 'Whose messages should we prove first?',
  options: ['Ours', 'A client’s, with their OK', 'Both'],
}

const micro = 'We keep your email to set up your first run and tell you about Obsession.'

export const recipe: Recipe = {
  id: 'delivery',
  slug: 'delivery-monitoring',
  name: 'Delivery monitoring',
  group: 'Check your own journeys',
  line: 'Lives your first 14 days as labelled test customers on real inboxes and numbers, and proves every message arrives.',
  gets: 'Every email, text and code your customers should get, timed, and anything missing flagged the day it’s due.',
  kit: [
    'Labelled AI test customers',
    'Real inboxes',
    'Numbers in each country you sell in',
    'iPhone, Android and desktop',
    'A 14 day watch, every message timed',
    'Every step signed and dated',
  ],

  meta: {
    path: '/recipes/delivery-monitoring',
    title: 'Delivery monitoring: prove every email, text and code lands',
    description:
      'Labelled AI test customers live your first 14 days on real inboxes and numbers in each country, and flag any email, text or code that never arrives.',
    answer:
      'Delivery monitoring proves every email, text and login code arrives: after every release, labelled AI test customers with real inboxes and numbers live your first 14 days in each country you sell in, and flag anything that never comes.',
    ogImage: '/og/delivery-monitoring.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Delivery monitoring', path: '/recipes/delivery-monitoring' },
    ],
  },

  hero: {
    headline: 'AI agents that prove every email, text and login code arrives.',
    sub: 'Delivery monitoring proves every email, text and login code arrives: after every release, labelled AI test customers with real inboxes and numbers live your first 14 days in each country you sell in, and flag anything that never comes.',
    screen: 'qa',
    capture: {
      kind: 'waitlist',
      source: 'recipe-delivery-monitoring-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'delivery',
    },
  },

  run: {
    tab: 'Example: release 4.2',
    recipe: 'delivery',
    task: 'After release 4.2, start 3 labelled test customers in the UK and US. Live our first 14 days and flag anything that never arrives.',
    targets: 'Your app, UK and US',
    journey: ['Sign up as labelled test customers', 'Log in by text code', 'Open every email', 'Stop before payment'],
    schedule: 'Every release, then daily for 14 days',
    report: 'Slack alert, ticket drafted',
    kit: ['Agent ID, declared as AI', '3 inboxes', 'UK and US numbers', 'iPhone and Android'],
    events: [
      { time: 'Day 1, 09:00', text: '3 labelled test customers sign up: UK on iPhone, US and UK on Android.' },
      { time: 'Day 1, 09:03', text: 'Welcome emails in 2 to 3 minutes. Login codes by text in under 10 seconds.' },
      { time: 'Day 3, 10:00', text: 'Setup tips email arrives for all 3. Every link opens.' },
      { time: 'Day 6, 09:12', text: 'Login code by text: the US customer gets it in 6 seconds.' },
      { time: 'Day 6, 09:22', text: 'Both UK customers: no code after 10 minutes.' },
    ],
    finding: 'Login codes stopped reaching UK numbers on day 6. US numbers still get them in 6 seconds.',
    fix: 'A fix ticket drafted for your tracker with the text log, filed after your OK. Once it’s fixed, both UK customers try again.',
    ledger: 'Example run. Every email, text and code timed, screenshotted and signed.',
  },

  steps: [
    { title: 'Pick the journeys', line: 'Sign up, onboarding, trial, a launch: every message a customer should get.' },
    { title: 'Labelled test customers join', line: 'Each says it’s AI, with a real inbox and number in the countries you sell in.' },
    { title: 'They live it for 14 days', line: 'Every email, text and code timed against when it should arrive. A new test customer starts every week.' },
    { title: 'What never arrives reaches you', line: 'The day it was due, with the screenshot, the log and a ticket drafted.' },
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
        { title: 'Emails and texts', line: 'Each send lands in every test inbox and on every number.' },
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
    heading: 'Every miss arrives with its log and a ticket drafted for your tracker.',
    items: [
      { format: 'Slack alert', line: 'The day a message doesn’t arrive, with the log attached.' },
      { format: 'Ticket', line: 'Drafted for your tracker, with the screenshots and the text log.' },
      { format: '14 day timeline', line: 'Every message each test customer got, and when.' },
      { format: 'PDF', line: 'For your team or a client, ready to forward.' },
      { format: 'Webhook', line: 'Each arrival and each miss as JSON.' },
    ],
  },

  settings: [
    { k: 'Journeys', v: 'Sign up, onboarding, trial, renewals and launches' },
    { k: 'Test customers', v: 'A new one every release, or every week' },
    { k: 'Countries', v: 'A real number in each country you sell in' },
    { k: 'Devices', v: 'iPhone, Android and desktop' },
    { k: 'Window', v: '14 days, or as long as your journey runs' },
  ],

  forWho: [
    { audience: 'founders', line: 'Find the email, text or code new users never get, the day it goes missing.' },
    { audience: 'marketing', line: 'Know every launch email, text and code works in every country you send to.' },
    { audience: 'agencies', line: 'Prove every client’s messages arrive, with a log to forward.' },
    { audience: 'developers', line: 'Every login code timed on real numbers, after every release.' },
  ],

  table: {
    heading: 'Day 1 passed. On day 6, UK login codes stopped arriving.',
    line: 'Example: release 4.2, 3 labelled test customers.',
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
    heading: 'Every test customer says it’s AI, and lives only your own journeys.',
    items: [
      {
        q: 'How do I know our welcome emails and login codes actually arrive?',
        a: 'Obsession’s Delivery monitoring has labelled AI test customers with real inboxes and numbers live your first 14 days in each country you sell in, and flags any email, text or code that never arrives.',
      },
      {
        q: 'Why 14 days?',
        a: 'Because Delivery monitoring checks what day 1 tests miss: the login code on day 6 and the trial reminder on day 13. 14 days runs a 14 day trial to its last reminder, and you can set any window.',
      },
      {
        q: 'Are the inboxes and numbers real?',
        a: 'Yes. Each Delivery monitoring test customer has its own inbox and a real number in the country you pick, so a text a network blocks never reaches it either.',
      },
      {
        q: 'Can Delivery monitoring check our launch emails and texts?',
        a: 'Yes. Delivery monitoring’s test customers on your list get every send, open every link and try every code, stopping before payment.',
      },
      {
        q: 'Does Delivery monitoring see our real customers’ data?',
        a: 'No. Delivery monitoring only sees what its own test customers receive.',
      },
      {
        q: 'Can agencies run Delivery monitoring for clients?',
        a: 'Yes, with each client’s OK: Delivery monitoring gives every client its own test customers and its own log to forward.',
      },
    ],
  },

  final: {
    heading: 'Find the message your customers never got.',
    sub: 'Join the waitlist. Delivery monitoring comes ready to watch your first 14 days.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-delivery-monitoring-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'delivery',
    },
  },
}
