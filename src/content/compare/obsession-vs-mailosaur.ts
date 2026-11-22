import { eventLogKept, freeNumber, plans, prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-mailosaur (wave 2, batch A, page 10; _research/seo/wave2-pull-23nov/PLAN.md). Primary "obsession
   vs mailosaur"; secondaries "mailosaur vs obsession", "mailosaur vs" and "mailosaur pricing" (the brief's; "mailosaur
   vs mailslurp" and "mailosaur vs mailtrap" are the suggested pairs, US, 23 Nov 2026). Never "mailosaur alternatives":
   the alternatives page owns it. Reader: QA leads and test automation engineers who test sign-up codes and lifecycle
   emails. Obsession's side: personas that wait days for the day-7 email, and codes by text, email and call.
   Mailosaur's facts: its home page, pricing page (annual billing, prices excluding VAT), SMS testing page, docs index and
   API reference, read live on 23 Nov 2026 and saved with their addresses in
   _research/seo/wave2-pull-23nov/research/obsession-vs-mailosaur.json. "Not on its pages" means its pages don't describe
   it (webhooks, a browser, phone calls). Left out: monthly-billing prices (its page shows annual figures only) and its
   review-site ratings. Obsession's prices, plans, the Free number's allowance and event log retention come from
   prices.ts. Links /use-cases/otp-testing (owns "otp testing"), /blueprints/sign-in-code-check (owns "test 2fa codes")
   and /blueprints/test-sign-up-and-agents. */

const MS = 'https://mailosaur.com/'
const MS_PRICING = 'https://mailosaur.com/pricing'
const MS_SMS = 'https://mailosaur.com/sms-testing'
const MS_API = 'https://mailosaur.com/docs/api'

/* The paid plans as the site names them: "$20, $99 or $499". */
const paid = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const planLine = `Free, then ${paid.slice(0, -1).join(', ')} or ${paid[paid.length - 1]} a month; usage per piece`
const freeInboxes = plans.find((p) => p.id === 'free')?.allowances.inbox ?? 0

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Mailosaur',
  company: 'Mailosaur',
  line: 'Mailosaur gives QA teams test inboxes and numbers for email and SMS tests. Obsession gives each test user its own inbox, number and browser, waiting days for the next email.',
  meta: {
    path: '/compare/obsession-vs-mailosaur',
    title: 'Obsession vs Mailosaur (2026): test inboxes or test users',
    description: `Obsession vs Mailosaur: both catch the emails and SMS codes your product sends. Obsession’s test users wait days for the day-7 email, from ${prices.inbox.amount} an inbox.`,
    answer: `Mailosaur and Obsession both give QA teams real inboxes and phone numbers that catch the emails and texts a product sends, sign-up and login codes included. Mailosaur adds email previews across clients, accessibility checks and authenticator code testing, from $20 a month billed annually. Obsession gives each test user its own inbox, number and browser under one identity, called a persona. It waits days at no cost for the day-7 email and wakes about 50 ms after it lands.`,
    ogImage: '/og/compare-obsession-vs-mailosaur.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Mailosaur', path: '/compare/obsession-vs-mailosaur' },
    ],
  },
  title: 'Obsession vs Mailosaur: test inboxes, or test users that wait for the day-7 email',
  dek: 'Mailosaur gives QA teams inboxes and phone numbers that catch every email and text a product sends, with previews built in. Obsession gives each test user its own inbox, number and browser, waiting days for the emails that come after sign-up.',
  primaryKeyword: 'obsession vs mailosaur',
  keywords: ['mailosaur vs obsession', 'mailosaur vs', 'mailosaur pricing'],
  checked: '2026-11-23',
  readingMinutes: 6,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'One sign-up test, start to day 7',
    period: 'From Mailosaur’s own pages, read 23 Nov 2026',
    cols: ['What the test needs', 'Mailosaur', 'Obsession'],
    rows: [
      { name: 'An inbox for sign-up emails', cells: ['1 on Personal, 5 or more on Core', `${prices.inbox.amount} an inbox a month, ${freeInboxes} free`], tone: 'info' },
      { name: 'A number for SMS codes', cells: ['Up to 15 on its team SMS plan: US, Canada, UK', `${prices.number.amount} a US or UK number a month`], tone: 'info' },
      { name: 'Messages kept', cells: ['3 days on Personal, 14 on Core', 'Every event, 30 days to a year'], tone: 'info' },
      { name: 'Arrival pushed to your app', cells: ['Not on its pages', 'email.received at your webhook'], tone: 'ok' },
      { name: 'A browser in the same test user', cells: ['Not on its pages', `${prices.browser.amount} a browser hour, logins kept`], tone: 'ok' },
      { name: 'Codes sent by phone call', cells: ['Not on its pages', `Calls at ${prices.voice.amount} a minute`], tone: 'ok' },
      { name: 'Waiting days for the next email', cells: ['Tests fetch each message by API', 'A persona waits free, wakes in 50 ms'], tone: 'ok' },
    ],
    notes: ['Not on its pages means Mailosaur’s pages don’t describe it. Mailosaur’s prices are for annual billing.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-mailosaur-does', text: 'What Mailosaur does well' },
    {
      kind: 'p',
      text: `As listed on 23 November 2026, [Mailosaur’s home page](${MS}) reads “Preview, test and trust every customer touchpoint”, and it tests email and SMS end to end with previews on real devices. Each inbox gets its own domain, so a test can make as many addresses as it needs with no set-up. A virtual SMTP server catches every email a staging app sends, and links and codes are read out of each message. It works with Playwright, Cypress, Selenium, Cucumber and Postman, with SDKs for Java, Ruby, .NET, Python and Node.js.`,
    },
    {
      kind: 'p',
      text: `Its page says customers have tested a third of a billion emails and 7 million SMS messages over 14 years, with logos from PayPal, Uber, Checkout.com and the UK Department for Education. [Its SMS testing](${MS_SMS}) gives dedicated test numbers that catch one-time passcodes (OTPs) and verification texts. Its SMS and authentication plan also tests time-based authenticator codes, the kind Google Authenticator and Auth0 generate. Email previews show how a message renders in Gmail, Outlook and on phones, and accessibility testing checks emails against the ADA and the European Accessibility Act.`,
    },
    {
      kind: 'p',
      text: `[Its pricing page](${MS_PRICING}) lists every plan billed annually, as of 23 November 2026. Personal is from $20 a month for 1 inbox and 15,000 inbound emails a month, with messages kept for 3 days and no SMS. Core is from $50 a month for 5 seats, 5 or more inboxes, 75,000 emails a month and messages kept for 14 days. SMS and authenticator testing adds from $37.50 a month, and previews add from $25. Its team SMS plan, from $87.50 a month, lists up to 15 standard-tier numbers, which are limited to the US, Canada and the UK. Enterprise is priced on request, with single sign-on and numbers in every country it serves. A 14-day trial opens every feature, and prices exclude VAT.`,
    },
    {
      kind: 'p',
      text: `[Its API reference](${MS_API}) recommends the client libraries’ Get method, which waits for a matching message to arrive, so a test fetches each email or text when it reaches that step. Its pages don’t describe a webhook when a message lands, a browser or phone calls.`,
    },

    { kind: 'h2', id: 'what-obsession-gives', text: 'What Obsession gives the same test' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: 'obsession.personas.create({ inbox: true, phone: "US", browser: true }) makes a test user with its own inbox, number and browser under one name. It signs up in its browser, the code arrives at its inbox or number and is read out, and the same browser enters it. Each code reaches your webhook as email.received or sms.received, timed from the moment the browser asked.',
    },
    {
      kind: 'p',
      text: `Then the persona waits, at no cost, for as long as the journey runs. When the day-7 email lands, it wakes about 50 ms later, opens the link in the same signed-in browser and logs what the page shows. Every email, text, call and page lands in one [event log](/personas), dated. Events are kept for ${eventLogKept}.`,
    },
    {
      kind: 'p',
      text: `An inbox is ${prices.inbox.amount} a month with ${freeInboxes} on the Free plan, and a US or UK number is ${prices.number.amount} a month. The Free plan’s number receives up to ${freeNumber.texts} texts and ${freeNumber.minutes} call minutes a month, enough to test a login code every night.`,
    },

    { kind: 'h2', id: 'side-by-side', text: 'Mailosaur and Obsession side by side', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `Mailosaur’s row is from its own pages and [its pricing page](${MS_PRICING}), as listed on 23 November 2026, billed annually and before VAT. Obsession’s row is from [pricing](/pricing).`,
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Mailosaur: Email Testing, SMS Testing, Email Previews, Authenticator',
          'Test inboxes and numbers for CI, staging capture, email previews, accessibility and authenticator codes',
          'Personal from $20 a month\nCore from $50 a month\nSMS and authenticator from $37.50 more\nEnterprise on request',
          'Messages kept 3 or 14 days\nNo browser or phone calls on its pages',
          'Email and SMS assertions inside automated test suites',
        ],
        [
          'Obsession (ours): Personas, Email, Phone, Browser, Messaging, Sandbox',
          'Test users with an inbox, number and browser that live a journey for days',
          planLine,
          'Stops at any identity check, and before payment unless given the customer’s own payment card',
          'Sign-up codes and the emails of the days after, on your live product',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use each' },
    {
      kind: 'list',
      items: [
        '**Use Mailosaur** when tests run in your CI pipeline and finish in minutes. Its virtual SMTP server also catches email from a staging server that should never send for real.',
        '**Use Mailosaur** for email previews across clients, accessibility checks and authenticator app codes, which its pages describe in detail.',
        '**Use Obsession** when the emails run for days after sign-up: a trial reminder, the day-7 email, a win-back offer. The persona acts on each one in a browser that stays signed in.',
        '**Use both.** Keep Mailosaur on staging and in CI, and run personas on the live product after each release.',
      ],
    },

    { kind: 'h2', id: 'every-code', text: 'Every code, then the days after it' },
    {
      kind: 'p',
      text: 'The [sign-in code check](/blueprints/sign-in-code-check) blueprint signs in to your product every night, asks for a code by text, by email and by phone call, and times each one against the code’s expiry. A code that comes late, or never comes, reaches Slack, a sheet, your CI or a webhook the same night. The [OTP testing](/use-cases/otp-testing) use case shows the same job for QA and engineering teams, with a persona per country you sell in.',
    },
    {
      kind: 'p',
      text: 'Teams who don’t write code pick the blueprint, and Obsession runs it. The blueprints that [test sign-up and AI agents](/blueprints/test-sign-up-and-agents) run on the same personas. They go through your sign-up, checkout and forms as a new customer after every release, and post what they find to Slack, a sheet or your CI.',
    },
    {
      kind: 'note',
      title: 'What every Obsession agent keeps to',
      text: 'It says it’s an AI when it talks to a person. It stops before payment unless given the customer’s own payment card, and never uses fake payment details. It never gets round a CAPTCHA or a bot block, stops at any identity check and never clicks paid ads at volume. The full lines are on [the page for companies an agent visits](/agents).',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'Is Obsession a Mailosaur alternative?',
          a: 'For catching sign-up and login codes by email and text, yes. Both give a test real inboxes and numbers. Mailosaur goes further on email previews, accessibility checks and authenticator codes. Obsession gives each test user a browser as well, and lets it wait days for the emails that follow.',
        },
        {
          q: 'How much does Mailosaur cost?',
          a: 'As listed on 23 November 2026 and billed annually, Personal is from $20 a month and Core from $50 a month. SMS and authenticator testing adds from $37.50 a month and email previews from $25. Enterprise is priced on request, and a 14-day trial opens every feature.',
        },
        {
          q: 'How long does Mailosaur keep messages?',
          a: 'Its pricing page lists 3 days on Personal, 14 days on Core and a custom period on Enterprise, after which each email or text is deleted automatically. Obsession keeps every event in the event log for 30 days on Free and Developer, 90 days on Startup and a year on Scale.',
        },
        {
          q: 'Can I test the day-7 email in a trial?',
          a: 'On Obsession, a persona signs up, waits at no cost and wakes about 50 ms after the day-7 email lands, then opens its link in the same signed-in browser. On Mailosaur, a test can fetch the email through its API while the message is kept, from a job you schedule for that day.',
          link: { label: 'Test sign-up and AI agents', to: '/blueprints/test-sign-up-and-agents' },
        },
        {
          q: 'Can I test login codes sent by phone call?',
          a: 'On Obsession, yes. Each persona’s number takes calls as well as texts, and the sign-in code check blueprint times codes by text, email and call every night. Mailosaur’s pages describe SMS and authenticator codes and don’t mention calls.',
          link: { label: 'See the sign-in code check', to: '/blueprints/sign-in-code-check' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Mailosaur: preview, test and trust every customer touchpoint', publisher: 'Mailosaur', url: MS },
    { title: 'SMS testing', publisher: 'Mailosaur', url: MS_SMS },
    { title: 'Pricing', publisher: 'Mailosaur', url: MS_PRICING },
    { title: 'API reference', publisher: 'Mailosaur', url: MS_API },
  ],
  related: [
    '/use-cases/otp-testing',
    'recipe:sign-in-code-check',
    '/blueprints/test-sign-up-and-agents',
    '/personas',
    '/email',
    '/phone',
    '/browser',
    '/compare/obsession-vs-agentmail',
    '/compare/obsession-vs-browserbase',
    'how-to-test-ai-agents',
    'long-running-ai-agents',
    '/agents',
  ],
}
