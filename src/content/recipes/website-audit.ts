import type { Capture, Recipe } from '../types'

/* Website audit (/recipes/website-audit). Check your own journeys. Screen: ship.
   New page (James's original recipe set had Website audit; on 1 Oct he said QA is the right word, and the Founders
   page sells it as "Ship clean"). After every release, or every morning, a fresh test customer, labelled and declared as AI,
   with its own inbox and number signs up, enters each login code, opens every email and link, sends a labelled test enquiry through each form, tries each
   code at checkout and stops before payment. Your own site or app only, or a client's with their OK.
   Kept from our version: the agency check that a form's test lead actually reaches the inbox or CRM you connect
   (inside data only through tools the customer connects). Kept from James: "Couldn't test" as an honest verdict.
   The run tells the same story as the `ship` screen and the Founders and Developers pages (Thursday 06:02, v2.15,
   LAUNCH20 rejected, the 08:00 send held at 06:11, stopped before payment). Example. */

const roles: Capture['roles'] = {
  question: 'Where should a test customer sign up first?',
  options: ['Our site', 'Our app', 'A client’s, with their OK'],
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'audit',
  slug: 'website-audit',
  name: 'Website audit',
  group: 'Check your own journeys',
  line: 'After every release or every morning, a fresh test customer signs up, fills in every form, opens every email and link, and stops before payment.',
  gets: 'A pass or a break for every step of every release, with the screenshot and a drafted fix.',
  kit: [
    'A labelled AI test customer per run',
    'A fresh inbox and number',
    'Phone and desktop browsers',
    'Starts on every release',
    'A screenshot of every step',
    'Every step signed and dated',
  ],

  meta: {
    path: '/recipes/website-audit',
    title: 'Website audit: AI test customers sign up after every release',
    description:
      'After every release, a labelled AI test customer signs up, enters each code, opens every email and link, and stops before payment. Breaks arrive signed.',
    answer:
      'Website audit is an Obsession recipe. After every release, a labelled AI test customer with a fresh inbox and phone number signs up to your site or app, enters each login code, opens every email and link, tries your codes at checkout and stops before payment, then sends every break with a signed screenshot and a drafted fix.',
    ogImage: '/og/website-audit.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Website audit', path: '/recipes/website-audit' },
    ],
  },

  hero: {
    headline: 'AI agents that sign up as new customers after every release.',
    sub: 'After every release, a fresh AI test customer signs up, enters each code, opens every email and link, and stops before payment. Every break reaches you with its screenshot and a drafted fix, signed.',
    screen: 'ship',
    capture: {
      kind: 'waitlist',
      source: 'recipe-website-audit-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'audit',
    },
  },

  run: {
    tab: 'Release v2.15',
    recipe: 'audit',
    task: 'After every release, sign up as a new customer, enter the code, open every email and try our launch code. Stop before payment.',
    targets: 'your-store.example, on phone and desktop',
    journey: ['Sign up with a fresh inbox', 'Enter the code from the text', 'Open every email and link', 'Stop before payment'],
    schedule: 'After every release',
    report: 'Slack alert per release',
    kit: ['Agent ID, declared as AI', 'Fresh inbox', 'Fresh UK number', 'Starts on every release'],
    events: [
      { time: 'Thu 06:02', text: 'v2.15 ships. A fresh test customer starts on a phone, with its own inbox and UK number.' },
      { time: 'Thu 06:04', text: 'Sign up done in 14 seconds.' },
      { time: 'Thu 06:05', text: 'Login code by text in 8 seconds. It works.' },
      { time: 'Thu 06:07', text: 'Welcome email in 2 minutes. Every link opens.' },
      { time: 'Thu 06:09', text: 'LAUNCH20 rejected at checkout. Your 08:00 email promises it.' },
    ],
    finding: 'The code your 08:00 launch email promises is turned away at checkout.',
    fix: 'You held the 08:00 send at 06:11. The code fix is drafted, and a fresh test customer tries it once it’s live.',
    ledger: 'Example run. Every step timed, screenshotted and signed. Stopped before payment.',
  },

  steps: [
    { title: 'Connect your releases', line: 'A deploy hook, a schedule, or a button you press.' },
    { title: 'A stranger signs up', line: 'A fresh test customer that says it’s AI, with a new inbox and number every run, on phone and desktop.' },
    { title: 'Every step is timed', line: 'Sign up, login code, emails, links, forms and codes, stopping before payment.' },
    { title: 'Breaks reach you first', line: 'A Slack alert with the screenshot and a drafted fix, then a fresh run once the fix ships.' },
  ],

  checks: [
    {
      group: 'Sign up and login',
      items: [
        { title: 'Sign up', line: 'The form on phone and desktop, how long it takes, and every error it shows.' },
        { title: 'Login codes', line: 'By text or email: how long each takes to arrive, and whether it works.' },
        { title: 'Password reset', line: 'The email arrives and its link opens.' },
      ],
    },
    {
      group: 'Emails, links and forms',
      items: [
        { title: 'Welcome email', line: 'It arrives, how fast, and every link opens the right page.' },
        { title: 'Every link', line: 'In your pages and emails, on phone and desktop. Any that error are flagged.' },
        { title: 'Forms', line: 'A labelled test enquiry through each form, and whether it reaches the inbox or CRM you connect.' },
        { title: 'Booking links', line: 'Each one opens to a live calendar, stopping before a slot is taken.' },
      ],
    },
    {
      group: 'Basket and checkout',
      items: [
        { title: 'Codes', line: 'Every welcome and launch code, tried at checkout.' },
        { title: 'Checkout', line: 'Delivery, totals and every step up to payment, where it stops.' },
      ],
    },
  ],

  outputs: {
    heading: 'Each release ends in a pass or a break, with the screenshot behind it.',
    items: [
      { format: 'Slack alert', line: 'Minutes after a release, with the step, the screenshot and the time.' },
      { format: 'Ticket', line: 'Drafted for your tracker, with the steps to repeat the break.' },
      { format: 'Release history', line: 'Every release’s run, step by step, so you see what changed.' },
      { format: 'Webhook', line: 'A pass or a fail your pipeline reads, so it can hold the release.' },
    ],
  },

  settings: [
    { k: 'Runs', v: 'After every deploy, on a schedule, or when you press run' },
    { k: 'Journeys', v: 'Sign up, login, onboarding, forms, basket and checkout' },
    { k: 'Devices', v: 'Phone, desktop or both' },
    { k: 'Countries', v: 'A number in each country you sell in' },
    { k: 'Alerts', v: 'Slack, email or a ticket' },
  ],

  forWho: [
    { audience: 'founders', line: 'Ship every day, and hear about a break before a customer does.' },
    { audience: 'developers', line: 'A deploy hook that signs up as a stranger and posts a pass or a fail your CI can act on.' },
    { audience: 'agencies', line: 'Check every client’s forms, booking links, sign up and checkout every morning, with their OK.' },
  ],

  faq: {
    heading: 'Only your own site, or a client’s with their OK. Always stopped before payment.',
    items: [
      {
        q: 'How is it different from our tests?',
        a: 'Your tests check the code. The agent checks what a new customer gets: the text that arrives, the email, the link and the code, on its own inbox and number.',
      },
      {
        q: 'Does it need access to our code?',
        a: 'No. It uses your site like a customer. A deploy hook starts each run, or it runs on a schedule.',
      },
      {
        q: 'Does it place real orders?',
        a: 'No. It goes through checkout and stops before payment.',
      },
      {
        q: 'Will test customers clutter our data?',
        a: 'Every test customer is labelled, so you can filter them out of your lists and reports.',
      },
      {
        q: 'What if it hits a CAPTCHA or a block?',
        a: 'It stops, and the run names the step it couldn’t test.',
      },
      {
        q: 'Can an agency run it on client sites?',
        a: 'Yes, with each client’s OK. Every client gets its own run, every morning or after each of their releases.',
      },
    ],
  },

  final: {
    heading: 'Catch the break before your 08:00 email goes.',
    sub: 'Join the waitlist. Website audit comes ready to run on your next release.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-website-audit-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'audit',
    },
  },
}
