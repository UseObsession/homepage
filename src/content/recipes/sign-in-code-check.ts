import type { Recipe } from '../types'

/* Sign-in code check (/blueprints/sign-in-code-check, 23 Nov 2026, wave 2: _research/seo/blueprints-22nov/PLAN.md). Test
   sign-up and agents. Every night, personas with their own numbers and inboxes sign in to the reader's own product (test
   accounts they own, or a client's with their OK), ask for a one-time code by text, email or a call, wait for it, type it
   in and time it against the code's own expiry. A late code counts as a failed sign-in. Different from Delivery
   monitoring (new users' first 14 days): this signs existing test accounts in, every night or every hour, on every
   channel. Copies the pull of a bank's login codes and alerts tested end to end (no vendor or customer named). Owns
   "test 2fa codes" ("test 2fa code", "test 2fa sms", "2fa automation testing": Google suggestions, 23 Nov); "otp testing"
   stays with /use-cases/otp-testing, linked in the FAQ. Screen: codecheck. Fernpay is invented, at fernpay.example. The
   run: 4 sign-ins at 02:00; the UK text arrives at 6 min 40 s, 1 min 40 s after Fernpay's own 5 minute expiry. Example. */

export const recipe: Recipe = {
  id: 'codes',
  slug: 'sign-in-code-check',
  name: 'Sign-in code check',
  group: 'Test sign-up and agents',
  line: 'Personas sign in every night and time each 2FA code by text, email and call.',
  gets: 'Every sign-in code timed against its expiry, and any late or missing code flagged that night.',
  kit: [
    'A persona per channel, with its own number or inbox',
    'Local numbers in each country you sell in',
    'Test accounts you own, or a client’s with their OK',
    'Codes by text, email and a call',
    'Every code timed against its expiry',
    'Alerts in Slack, your on-call tool or your CI',
  ],
  build: {
    line: 'Start it from your pipeline or on a schedule, and get each code’s arrival as an event your tests can fail on.',
    code: `await obsession.blueprints.run('sign-in-code-check', {
  url: 'https://app.example/login',
  channels: ['sms', 'email', 'call'],
  countries: ['US', 'UK'],
})
obsession.on('blueprint.result', async (e) => {
  if (!e.passed) await alertOnCall(e) // your own alert
})`,
    events: [
      { kind: 'sms.received', text: 'A code by text on a local number, with the second it arrived.' },
      { kind: 'email.received', text: 'A code or sign-in link in the persona’s own inbox.' },
      { kind: 'call.ended', text: 'A code read aloud on a call, with the digits in its transcript.' },
      { kind: 'blueprint.result', text: 'A pass or fail for each sign-in, timed against your code’s expiry.' },
    ],
  },

  meta: {
    path: '/blueprints/sign-in-code-check',
    title: 'Test 2FA codes by text, email and call, every night',
    description:
      'Personas sign in to your product every night and time each 2FA code by text, email and call against its expiry, and flag any that comes late or never.',
    answer:
      'Sign-in code check signs in to your product every night as personas with their own numbers and inboxes. It times each one-time code by text, email or call against the code’s expiry, and flags any that comes late or never comes.',
    ogImage: '/og/sign-in-code-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Sign-in code check', path: '/blueprints/sign-in-code-check' },
    ],
  },

  hero: {
    headline: 'Test your 2FA codes every night, before a customer waits for one.',
    sub: 'Sign-in code check signs in to your product every night as personas with their own numbers and inboxes. It times each one-time code by text, email or call against the code’s expiry, and flags any that comes late or never comes.',
    screen: 'codecheck',
    capture: {
      kind: 'waitlist',
      source: 'recipe-codes-hero',
      button: 'Start free',
      interest: 'codes',
    },
  },

  buyer: 'For QA leads and engineers who own login and sign-in.',
  unit: 'sign-in check',
  per: 'channel',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['A sign-in by text and one by email', 'Each code timed against your expiry', 'The page after the code, screenshotted'] },
    { name: 'Nightly', includes: ['Your sign-in checked every night', 'Alerts on a late, missing or broken code', 'A run from your pipeline after each release'] },
    { name: 'Every country', includes: ['Local numbers in each country you sell in', 'Codes read aloud on a call, too', 'Arrival times by country, night after night'] },
    { name: 'Hourly', includes: ['A sign-in every hour on each channel', 'Failures straight to your on-call tool', 'Every message kept, as proof for your texting provider'] },
  ],

  run: {
    tab: 'Fernpay’s sign-in, nightly',
    recipe: 'codes',
    task: 'Every night at 02:00, sign in to Fernpay as 4 personas: by text in the US and UK, by email and by a call. Time each code against our 5 minute expiry and alert #auth-alerts if one is late.',
    targets: 'fernpay.example/login, with Fernpay’s own test accounts',
    journey: ['Open the sign-in page', 'Ask for a code', 'Wait on its own number or inbox', 'Type it in and time it'],
    schedule: 'Nightly at 02:00',
    report: 'Slack #auth-alerts, the moment a code is late',
    kit: ['4 personas · test accounts', 'US and UK numbers', '1 inbox for email codes', 'Fernpay’s 5 minute expiry'],
    events: [
      { time: '02:00:02', text: '4 personas ask Fernpay for a sign-in code: by text in the US and UK, by email and by a call.' },
      { time: '02:00:06', text: 'The US text arrives in 4 seconds: “Your Fernpay code is 604 218.” Typed in, signed in.' },
      { time: '02:00:23', text: 'The email code came in 9 seconds. The call reads its code aloud at 21 seconds.' },
      { time: '02:05:02', text: 'The UK code expires, by Fernpay’s own 5 minute limit. No text has reached the UK number.' },
      { time: '02:06:42', text: 'The UK text arrives. Typed in at 02:06:44, the page says “This code has expired.”' },
      { time: '02:06:50', text: 'Slack #auth-alerts: UK sign-in codes late, with the text, its arrival time and the screenshot.' },
    ],
    finding: 'The UK code arrived 6 minutes 40 seconds after it was asked for, 1 minute 40 seconds after it expired. A UK customer signing in at 02:00 couldn’t have got in.',
    fix: 'In #auth-alerts by 02:07: the text, the second it arrived and the expired-code screenshot, ready for whoever owns UK texts.',
    ledger: '4 sign-ins, each code kept with the second it arrived.',
  },

  steps: [
    {
      title: 'Point it at your sign-in',
      line: 'Your login page and the test accounts it may use, or a client’s with their OK.',
    },
    {
      title: 'Pick channels and countries',
      line: 'Codes by text, email or a call, on local numbers in each country you sell in.',
    },
    {
      title: 'It signs in and times every code',
      line: 'Each persona asks for a code, waits on its own number or inbox, types it in and records how long it took.',
    },
    {
      title: 'A late code lands where you work',
      line: 'Slack, your on-call tool, a sheet, your CI or a webhook, with the code and the second it arrived.',
    },
  ],

  checks: [
    {
      group: 'Every code',
      items: [
        { title: 'It arrives', line: 'Each code on its own channel, or the minutes waited when none came.' },
        { title: 'How fast', line: 'Seconds from asking to arrival, by country and channel, night after night.' },
        { title: 'Before it expires', line: 'Each arrival set against your own expiry, so a late code reads as a failed sign-in.' },
        { title: 'It works', line: 'The code typed in, and the page after it screenshotted.' },
      ],
    },
    {
      group: 'Every channel',
      items: [
        { title: 'Texts', line: 'On real local numbers in each country you sell in.' },
        { title: 'Email codes and links', line: 'In the persona’s own inbox, with each sign-in link opened.' },
        { title: 'Codes read on a call', line: 'The call answered, and the digits taken from its transcript.' },
        { title: 'Send again', line: 'Whether asking again brings a new code, and how fast.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Your own accounts', line: 'Test accounts you own, or a client’s with their written OK.' },
        { title: 'CAPTCHAs', line: 'It never gets round a CAPTCHA or a bot block, and reports where one appeared.' },
        { title: 'Identity checks', line: 'It stops at any identity check and keeps what the check asked for.' },
        { title: 'The codes it sees', line: 'Kept in your event log only, for as long as your plan keeps events.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every code comes back timed, with what happened when it was typed in.',
    items: [
      { format: 'A pass or fail per sign-in', line: 'Against your expiry, by channel and country.' },
      { format: 'The code itself', line: 'The text, email or call transcript, exactly as it arrived.' },
      { format: 'Arrival times', line: 'Seconds from asking, kept night after night for every route.' },
      { format: 'The page after the code', line: 'A screenshot of what the customer would have seen.' },
      { format: 'Alerts', line: 'Slack or your on-call tool, the moment a code is late or missing.' },
      { format: 'A step in your CI', line: 'A webhook or API result that can fail the build.' },
    ],
  },

  settings: [
    { k: 'Your sign-in', v: 'Your login page and test accounts, or a client’s with their OK' },
    { k: 'Channels', v: 'Codes by text, email or a call, and sign-in links by email' },
    { k: 'Countries', v: 'A local number in each country you sell in' },
    { k: 'How often', v: 'Every night by default, every hour, or after each release' },
    { k: 'Your limit', v: 'Your code’s expiry, so a late code counts as a failed sign-in' },
    { k: 'Alert when', v: 'A code is late, never arrives or doesn’t work' },
    { k: 'Where it lands', v: 'Slack, your on-call tool, a sheet, your CI or a webhook' },
  ],

  table: {
    heading: 'Nobody signs in at 02:00 to check the UK code arrived. A persona does.',
    cols: ['By hand', 'With Sign-in code check'],
    rows: [
      { label: 'A code that never arrives', values: ['Found when customers write in', 'Flagged the night it happens'] },
      { label: 'A code that arrives late', values: ['Nobody times it', 'Timed against your own expiry'] },
      { label: 'Other countries', values: ['Tried on the team’s own phones', 'Local numbers in each country'] },
      { label: 'Email codes and links', values: ['Checked before a launch', 'Checked every night'] },
      { label: 'Codes read on a call', values: ['Rarely tried', 'Answered, with the digits in the transcript'] },
      { label: 'Proof for your texting provider', values: ['A screenshot, if someone took one', 'The message, its arrival time and the page after it'] },
    ],
  },

  faq: {
    heading: 'A persona signs in, waits for the code and times it.',
    items: [
      {
        q: 'How is Sign-in code check different from the OTP tests in our suite?',
        a: 'Your test suite checks the code inside a release. Sign-in code check signs in from outside every night, on real numbers in each country. A carrier or provider change that breaks codes overnight is caught before customers try to log in.',
        link: { label: 'See OTP testing', to: '/use-cases/otp-testing' },
      },
      {
        q: 'Which channels does Sign-in code check test?',
        a: 'Codes by text, codes and sign-in links by email, and codes read aloud on a call. Each persona has its own number or inbox, so every channel is tested the way a customer meets it.',
        link: { label: 'See phone numbers for AI agents', to: '/phone' },
      },
      {
        q: 'How does my code get each pass or fail?',
        a: 'Start it with obsession.blueprints.run and subscribe to blueprint.result. Each result carries the channel, the country, the code’s arrival time and a pass or fail, with the sms.received or email.received event behind it.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Does it get past CAPTCHAs or identity checks?',
        a: 'No. It never gets round a CAPTCHA or a bot block, and it stops at any identity check. The event log keeps what the check asked for, so you see where a customer would stop too.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'Whose accounts does it sign in to?',
        a: 'Test accounts you own on your product, or a client’s with their written OK. It never signs in to an account that isn’t yours.',
      },
      {
        q: 'Can it run after every release as well as every night?',
        a: 'Yes. Start it from your release pipeline with one call, and a late or missing code can fail the build before the release reaches customers.',
      },
      {
        q: 'How is it different from Delivery monitoring?',
        a: 'Delivery monitoring follows new users through your first 14 days. Sign-in code check signs your test accounts in every night or every hour, on every channel, and times each code against its expiry.',
        link: { label: 'See Delivery monitoring', to: '/blueprints/delivery-monitoring' },
      },
      {
        q: 'What does Sign-in code check cost?',
        a: 'It’s billed on the pieces it uses, at list rates. That’s a number or an inbox for each channel, a few minutes of browser for each sign-in, and the texts and emails it receives. Waiting for a code costs nothing.',
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Know every sign-in code arrived before your customers try to use one.',
    sub: 'Try it on the Free plan with a sign-in by text and one by email, and watch time to detect and the login incidents that reach customers.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-codes-final',
      button: 'Start free',
      interest: 'codes',
    },
    link: { label: 'More blueprints to test sign-up and agents', to: '/blueprints/test-sign-up-and-agents' },
  },
}
