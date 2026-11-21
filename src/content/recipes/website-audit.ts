import type { Recipe } from '../types'

/* QA on your own flows (/recipes/website-audit; the slug is kept, renamed from Website audit on 20 Nov 2026 to match
   Home's tile). Check your own journeys. Screen: ship.
   The persona version (20 Nov, James): after every release, or every morning, a new persona you define signs up to
   your own product (or a client's, with their OK) on its own inbox and number, from the country you choose. It enters
   each login code, onboards, opens every email and link, fills in each form and tries every code at checkout, each step
   dated with its screenshot, and stops before payment. Results land in Slack, a ticket, a webhook a pipeline reads, or
   the API. The run tells the `ship` screen's story (Thursday 06:02, v2.15, LAUNCH20 rejected, the 08:00 send held).
   Example. */

export const recipe: Recipe = {
  id: 'audit',
  slug: 'website-audit',
  name: 'QA on your own flows',
  group: 'Check your own journeys',
  line: 'A persona signs up and onboards on your own product after every release, in any country, and finds the step that breaks.',
  gets: 'Every step of every release as a new user meets it, dated, with its screenshot, and the step that broke.',
  kit: [
    'A new persona every run, labelled as a test',
    'Its own inbox and phone number, for every code',
    'A home connection in the country you choose',
    'Phone and desktop browsers',
    'Starts on every release, or every morning',
    'Results in Slack, a webhook or the API',
  ],

  meta: {
    path: '/blueprints/website-audit',
    title: 'Audit your website as a new customer after every release',
    description:
      'After every release a persona signs up to your product as a new user, enters each code, opens every email and link and goes to checkout, all dated.',
    answer:
      'QA on your own flows sends a new persona through your product after every release. It signs up, enters each login code, onboards, opens every email and link and goes to checkout, and dates each step with its screenshot.',
    ogImage: '/og/website-audit.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'QA on your own flows', path: '/blueprints/website-audit' },
    ],
  },

  hero: {
    headline: 'Find the step that breaks before a new user does.',
    sub: 'QA on your own flows sends a new persona through your product after every release. It signs up, enters each login code, onboards, opens every email and link and goes to checkout, and dates each step with its screenshot.',
    screen: 'ship',
    capture: {
      kind: 'waitlist',
      source: 'recipe-website-audit-hero',
      button: 'Request early access',
      interest: 'audit',
    },
  },

  unit: 'flow test',
  per: 'product',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    {
      name: 'Free',
      includes: [
        'A sign up, onboarding or checkout, run end to end',
        'Its own inbox and number, for every login code',
        'Each step dated, with its screenshot',
        'The step that broke, and what it showed',
      ],
    },
    {
      name: 'Indie',
      includes: [
        'A flow test each week, or when you press run',
        'A phone or desktop browser',
        'Slack or email when a step breaks',
        'Results by webhook, API or MCP',
      ],
    },
    {
      name: 'Every release',
      includes: [
        'Everything in Indie',
        'Started by every deploy, or each morning',
        'Phone and desktop browsers',
        'A persona in the country you choose',
        'A ticket or webhook your pipeline reads',
      ],
    },
    {
      name: 'Agency',
      includes: [
        'Everything in Every release',
        'Flow tests spread across products as you choose',
        'A report you can share after each release',
        'Each product’s results kept apart in your event log',
      ],
    },
  ],

  run: {
    tab: 'Release v2.15',
    recipe: 'audit',
    task: 'After every release, send a new persona from the UK on a phone: sign up, enter the code, open every email and try our launch code. Stop before payment.',
    targets: 'your-store.example, on phone and desktop',
    journey: ['Sign up with its own inbox', 'Enter the code from the text', 'Open every email and link', 'Stop before payment'],
    schedule: 'After every release',
    report: 'Slack, and a pass or fail for your pipeline',
    kit: ['New user · UK', 'Its own inbox', 'Its own UK number', 'Starts on every release'],
    events: [
      { time: 'Thu 06:02', text: 'v2.15 ships. A new persona signs up on a phone, with its own inbox and UK number.' },
      { time: 'Thu 06:04', text: 'Sign up done in 14 seconds.' },
      { time: 'Thu 06:05', text: 'Login code by text in 8 seconds. It works.' },
      { time: 'Thu 06:07', text: 'Welcome email in 2 minutes. Every link opens.' },
      { time: 'Thu 06:09', text: 'LAUNCH20 rejected at checkout. Your 08:00 email promises it.' },
    ],
    finding: 'The code your 08:00 launch email promises is turned away at checkout.',
    fix: 'In Slack at 06:10 with the screenshot. You held the 08:00 send at 06:11.',
    ledger: 'Every step dated and screenshotted. Stopped before payment, as asked.',
  },

  steps: [
    { title: 'Connect your releases', line: 'A deploy hook, a schedule, or a button you press.' },
    {
      title: 'A new persona every run',
      line: 'Defined by you: a new user in the UK on a phone, or a team admin in Texas on a desktop. A fresh inbox and number each time.',
    },
    {
      title: 'It takes every step',
      line: 'Sign up, login code, onboarding, emails, links, forms and every code at checkout, each dated and screenshotted.',
    },
    {
      title: 'Results where you work',
      line: 'Slack, a ticket, a webhook your pipeline reads, or the API, with the step that changed since the last release.',
    },
  ],

  checks: [
    {
      group: 'Sign up, login and onboarding',
      items: [
        { title: 'Sign up', line: 'The form on phone and desktop, how long it takes, and every error it shows.' },
        { title: 'Login codes', line: 'By text or email: how long each takes to arrive, and whether it works.' },
        { title: 'Password reset', line: 'The email arrives and its link opens.' },
        { title: 'Onboarding', line: 'Every screen a new user meets after sign up, and the one where it stalls.' },
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
        { title: 'Checkout', line: 'Delivery, totals and every step to payment. It stops there, unless you give it your own payment card.' },
      ],
    },
  ],

  outputs: {
    heading: 'Each release ends in your event log, dated step by step.',
    items: [
      { format: 'Slack alert', line: 'Minutes after a release, with the step, the screenshot and the time.' },
      { format: 'Ticket', line: 'Drafted for your tracker, with the steps to repeat the break.' },
      { format: 'Release history', line: 'Every release, step by step, so you see what changed.' },
      { format: 'Webhook', line: 'A pass or a fail your pipeline reads, so it can hold the release.' },
    ],
  },

  settings: [
    { k: 'Flows', v: 'Your own, or a client’s with their OK' },
    { k: 'Runs', v: 'After every deploy, on a schedule, or when you press run' },
    { k: 'Steps', v: 'Sign up, login, onboarding, forms, basket and checkout' },
    { k: 'Persona', v: 'Who signs up, and the country it connects from' },
    { k: 'Devices', v: 'Phone, desktop or both' },
    { k: 'Where it lands', v: 'Slack, a ticket, a webhook or the API' },
  ],

  forWho: [
    { audience: 'founders', line: 'Ship every day, and hear about a break before a new user does.' },
    { audience: 'developers', line: 'A deploy hook that spawns a new persona and posts a pass or a fail your CI can act on.' },
    { audience: 'agencies', line: 'Every client’s forms, booking links, sign up and checkout, run every morning with their OK.' },
  ],

  faq: {
    heading: 'A new user after every release, every step dated.',
    items: [
      {
        q: 'How do I catch a broken sign up or checkout before users report it?',
        a: 'Send a new persona through it after every release. It signs up, enters each login code, opens every email and link and goes to checkout. Each step is dated with its screenshot, and a break reaches Slack in minutes.',
      },
      {
        q: 'How is this different from our tests?',
        a: 'Your tests check the code. A persona meets the flow as a new user does: the text on its own number, the email in its own inbox, the link and the code, from the country you choose.',
      },
      {
        q: 'Does it need access to our code?',
        a: 'No. The persona uses your product the way a new user does. A deploy hook starts each run, or it runs on a schedule.',
      },
      {
        q: 'Does it place real orders?',
        a: 'No. It goes every step to payment and stops there, unless you give it your own payment card.',
      },
      {
        q: 'Will test sign ups clutter our lists?',
        a: 'No. Every persona is labelled as a test, so you can filter it out of your lists and reports.',
      },
      {
        q: 'What if it meets an ID check?',
        a: 'The persona stops at that step, and your event log keeps what the check asked for, so you see where a new user would have to prove who they are.',
      },
      {
        q: 'Can an agency run it on client sites?',
        a: 'Yes, with each client’s OK. Every client gets its own run, every morning or after each release.',
      },
    ],
  },

  final: {
    heading: 'Catch the break before your 08:00 email goes.',
    sub: 'Early access includes a persona on your next release, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-website-audit-final',
      button: 'Request early access',
      interest: 'audit',
    },
  },
}
