import type { Recipe } from '../types'

/* Website audit (/recipes/website-audit). Check your own journeys. Screen: ship.
   The 9 Nov story: the record of what a site shows and sends a new customer, collected after every release or every
   morning: sign-up, login codes, every email and link, forms, and every code at checkout, each step dated with its
   screenshot. The reader's own site, a client's with their OK, or any site they name. It goes every step short of
   paying. Results land in Slack, a ticket, a webhook a pipeline reads, or the API.
   The run tells the `ship` screen's story (Thursday 06:02, v2.15, LAUNCH20 rejected, the 08:00 send held). Example. */

export const recipe: Recipe = {
  id: 'audit',
  slug: 'website-audit',
  name: 'Website audit',
  group: 'Check your own journeys',
  line: 'What your site shows and sends a new customer, collected after every release: sign-up, codes, emails, links and checkout.',
  gets: 'Every step of every release, dated, with its screenshot, and the step that changed.',
  kit: [
    'A fresh account and inbox every run',
    'A phone number for login codes',
    'Phone and desktop browsers',
    'Starts on every release, or every morning',
    'A screenshot of every step',
    'Results in Slack, a webhook or the API',
  ],

  meta: {
    path: '/recipes/website-audit',
    title: 'Website audit: what your site shows and sends a new customer',
    description:
      'Website audit records what your site shows and sends a new customer after every release: sign-up, login codes, emails, links, forms and checkout.',
    answer:
      'Website audit is the record of what your site shows and sends a new customer, after every release. Obsession signs up fresh, enters each login code, opens every email and link and goes to checkout, and dates each step with its screenshot.',
    ogImage: '/og/website-audit.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Website audit', path: '/recipes/website-audit' },
    ],
  },

  hero: {
    headline: 'What your site sends a new customer, after every release.',
    sub: 'Website audit is the record of what your site shows and sends a new customer, after every release. Obsession signs up fresh, enters each login code, opens every email and link and goes to checkout, and dates each step with its screenshot.',
    screen: 'ship',
    capture: {
      kind: 'waitlist',
      source: 'recipe-website-audit-hero',
      button: 'Request early access',
      interest: 'audit',
    },
  },

  run: {
    tab: 'Example: release v2.15',
    recipe: 'audit',
    task: 'After every release, sign up as a new UK customer on a phone, enter the code, open every email and try our launch code. Stop before payment.',
    targets: 'your-store.example, on phone and desktop',
    journey: ['Sign up with a fresh inbox', 'Enter the code from the text', 'Open every email and link', 'Stop before payment'],
    schedule: 'After every release',
    report: 'Slack, and a pass or fail for your pipeline',
    kit: ['New customer · UK', 'Fresh inbox', 'Fresh UK number', 'Starts on every release'],
    events: [
      { time: 'Thu 06:02', text: 'v2.15 ships. A fresh sign-up starts on a phone, with a new inbox and UK number.' },
      { time: 'Thu 06:04', text: 'Sign-up done in 14 seconds.' },
      { time: 'Thu 06:05', text: 'Login code by text in 8 seconds. It works.' },
      { time: 'Thu 06:07', text: 'Welcome email in 2 minutes. Every link opens.' },
      { time: 'Thu 06:09', text: 'LAUNCH20 rejected at checkout. Your 08:00 email promises it.' },
    ],
    finding: 'The code your 08:00 launch email promises is turned away at checkout.',
    fix: 'In Slack at 06:10 with the screenshot. You held the 08:00 send at 06:11.',
    ledger: 'Example run. Every step timed and screenshotted. Stopped before payment, as asked.',
  },

  steps: [
    { title: 'Connect your releases', line: 'A deploy hook, a schedule, or a button you press.' },
    {
      title: 'A new customer every run',
      line: 'A fresh account, inbox and number each time, on phone and desktop, in the countries you sell in.',
    },
    { title: 'Every step recorded', line: 'Sign-up, login code, emails, links, forms and every code at checkout, each timed and screenshotted.' },
    {
      title: 'Results where you work',
      line: 'Slack, a ticket, a webhook your pipeline reads, or the API, with the step that changed since the last release.',
    },
  ],

  checks: [
    {
      group: 'Sign-up and login',
      items: [
        { title: 'Sign-up', line: 'The form on phone and desktop, how long it takes, and every error it shows.' },
        { title: 'Login codes', line: 'By text or email: how long each takes to arrive, and whether it works.' },
        { title: 'Password reset', line: 'The email arrives and its link opens.' },
      ],
    },
    {
      group: 'Emails, links and forms',
      items: [
        { title: 'Welcome email', line: 'It arrives, how fast, and every link opens the right page.' },
        { title: 'Every link', line: 'In your pages and emails, on phone and desktop.' },
        { title: 'Forms', line: 'A test enquiry through each form, and whether it reaches the inbox or CRM you connect.' },
        { title: 'Booking links', line: 'Each one opens to a live calendar, stopping before a slot is taken.' },
      ],
    },
    {
      group: 'Basket and checkout',
      items: [
        { title: 'Codes', line: 'Every welcome and launch code, tried at checkout.' },
        { title: 'Checkout', line: 'Delivery, totals and every step to payment. It stops there.' },
      ],
    },
  ],

  outputs: {
    heading: 'Each release ends in a dated record, step by step.',
    items: [
      { format: 'Slack alert', line: 'Minutes after a release, with the step, the screenshot and the time.' },
      { format: 'Ticket', line: 'Drafted for your tracker, with the steps to repeat the break.' },
      { format: 'Release history', line: 'Every release, step by step, so you see what changed.' },
      { format: 'Webhook', line: 'A pass or a fail your pipeline reads, so it can hold the release.' },
    ],
  },

  settings: [
    { k: 'Sites', v: 'Yours, a client’s with their OK, or any site you name' },
    { k: 'Runs', v: 'After every deploy, on a schedule, or when you press run' },
    { k: 'Steps', v: 'Sign-up, login, onboarding, forms, basket and checkout' },
    { k: 'Devices', v: 'Phone, desktop or both' },
    { k: 'Countries', v: 'A number in each country you sell in' },
    { k: 'Where it lands', v: 'Slack, a ticket, a webhook or the API' },
  ],

  forWho: [
    { audience: 'founders', line: 'Ship every day, and hear about a break before a customer does.' },
    { audience: 'developers', line: 'A deploy hook that signs up as a new customer and posts a pass or a fail your CI can act on.' },
    { audience: 'agencies', line: 'Every client’s forms, booking links, sign-up and checkout, recorded every morning.' },
  ],

  faq: {
    heading: 'A new customer after every release, every step dated.',
    items: [
      {
        q: 'How do I catch a broken sign-up or checkout before customers report it?',
        a: 'Website audit signs up fresh after every release, enters each login code, opens every email and link and goes to checkout. Each step is dated with its screenshot, and a break reaches Slack in minutes.',
      },
      {
        q: 'How is Website audit different from our tests?',
        a: 'Your tests check the code. Website audit records what a new customer gets: the text that arrives, the email, the link and the code, on its own inbox and number.',
      },
      {
        q: 'Does Website audit need access to our code?',
        a: 'No. Website audit uses your site the way a customer does. A deploy hook starts each run, or it runs on a schedule.',
      },
      {
        q: 'Does Website audit place real orders?',
        a: 'No. Website audit goes every step to payment and stops there.',
      },
      {
        q: 'Will test sign-ups clutter our data?',
        a: 'No. Every Website audit sign-up is labelled, so you can filter it out of your lists and reports.',
      },
      {
        q: 'What if Website audit hits a CAPTCHA or a block?',
        a: 'Website audit stops, and the run names the step it couldn’t record.',
      },
      {
        q: 'Can an agency run Website audit on client sites?',
        a: 'Yes, with each client’s OK. Website audit gives every client its own run, every morning or after each release.',
      },
    ],
  },

  final: {
    heading: 'Catch the break before your 08:00 email goes.',
    sub: 'Early access includes Website audit on your next release, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-website-audit-final',
      button: 'Request early access',
      interest: 'audit',
    },
  },
}
