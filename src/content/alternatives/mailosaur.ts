import { freeNumber, plans, prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /alternatives/mailosaur (wave 2, 23 Nov 2026: _research/seo/wave2-pull-23nov/PLAN.md, page 7). For QA leads and test
   engineers. Every tool fact is from the tool's own pricing or home page, read 23 Nov 2026; Mailpit from its site and
   GitHub page the same day (_research/seo/wave2-pull-23nov/research/alternatives-mailosaur.json). The searches for
   login-code testing stay with /use-cases/otp-testing and /blueprints/sign-in-code-check, linked here, never targeted.
   Obsession's side: personas that sign up through the real product and wait days for the day-7 email, with codes by
   text, email and call, through the Delivery monitoring and Sign-in code check blueprints. Prices are read from
   prices.ts, never retyped. */

const MAILOSAUR = 'https://mailosaur.com/pricing'
const MAILSLURP = 'https://app.mailslurp.com/pricing/'
const TESTMAIL = 'https://testmail.app/pricing'
const MAILINATOR = 'https://www.mailinator.com/pricing/'
const MAILTRAP = 'https://mailtrap.io/pricing/'
const ETHEREAL = 'https://ethereal.email/'
const MAILPIT = 'https://mailpit.axllent.org/'
const MAILPIT_GH = 'https://github.com/axllent/mailpit'

const paid = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const PAID = `${paid.slice(0, -1).join(', ')} or ${paid[paid.length - 1]} a month`
const freePlan = plans.find((p) => p.id === 'free') ?? plans[0]
const freeInboxes = freePlan.allowances.inbox ?? 0
const freeNumbers = freePlan.allowances.number ?? 0

export const ref: ReferencePage = {
  kind: 'alternatives',
  name: 'Mailosaur alternatives',
  company: 'Mailosaur',
  line: 'Email and SMS testing tools by job, free and open-source options, and test users that wait days for every code and email.',
  meta: {
    path: '/alternatives/mailosaur',
    title: 'Mailosaur alternatives (2026): 7 email and SMS testing tools',
    description:
      'Mailosaur alternatives for QA teams: email and SMS testing tools, free and open-source options, and test users that wait days for every code and email.',
    answer: `The main Mailosaur alternatives are MailSlurp for test inboxes and phone numbers by API, and Mailtrap, testmail.app and Mailinator for catching test emails, each with a free plan. Mailpit and Ethereal catch email at no charge without delivering it. For sign-up tests that take days, such as a code by text or the day-7 email, Obsession gives each test user its own inbox and phone number. The test user waits as long as the test runs.`,
    ogImage: '/og/alternatives-mailosaur.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Alternatives', path: '/alternatives' },
      { name: 'Mailosaur', path: '/alternatives/mailosaur' },
    ],
  },
  title: 'Mailosaur alternatives: email and SMS testing for QA teams, by job',
  dek: 'QA teams look past Mailosaur for a free plan, an inbox on their own machine, or SMS without a higher plan. Others want a test user who waits days for the day-7 email. Each option is sorted by the job it does, with its price as listed.',
  primaryKeyword: 'mailosaur alternatives',
  keywords: ['mailosaur alternative', 'mailosaur free alternative', 'mailosaur open source alternative'],
  checked: '2026-11-23',
  readingMinutes: 7,
  reader: 'developers',
  art: {
    kind: 'sides',
    title: 'Who waits for the email in a test',
    rows: [
      {
        name: 'Test inboxes by API',
        who: 'Mailosaur, MailSlurp, testmail.app, Mailinator',
        nodes: ['Your app', 'A test address', 'Your test reads it'],
        links: ['sends to', 'by API'],
      },
      {
        name: 'Staging sandboxes',
        who: 'Mailtrap',
        nodes: ['Your staging app', 'A shared sandbox'],
        links: ['sends to'],
      },
      {
        name: 'Local and free',
        who: 'Mailpit, Ethereal',
        nodes: ['Your app', 'A fake SMTP server'],
        links: ['sends to'],
      },
      {
        name: 'Obsession',
        who: 'Personas, Email, Phone, Browser',
        nodes: ['A test user', 'Your real sign-up', 'Every code and email, timed'],
        links: ['goes through', 'waits for'],
        lit: 2,
        ours: true,
      },
    ],
    foot: 'Each row follows the tools’ own pages, checked 23 November 2026.',
  },
  blocks: [
    { kind: 'h2', id: 'why', text: 'Why QA teams look for a Mailosaur alternative' },
    {
      kind: 'p',
      text: `Mailosaur tests email and SMS, with inboxes that accept unlimited addresses, SMS numbers and email previews. [Its pricing page](${MAILOSAUR}), checked on 23 November 2026, shows where teams look elsewhere:`,
    },
    {
      kind: 'list',
      items: [
        '**No free plan listed.** Personal starts from $20 a month, billed annually, after a 14-day trial.',
        '**SMS on a higher plan.** Personal has no SMS. Core with SMS testing starts from $87.50 a month, billed annually, with up to 15 numbers and from 250 texts a month.',
        '**Short retention.** Messages are kept 3 days on Personal and 14 days on Core.',
        '**Your tests do the waiting.** It receives what your app sends to its addresses. A check on a day-7 email or a nightly login code is a test your team writes, schedules and keeps running.',
      ],
    },

    { kind: 'h2', id: 'by-job', text: 'Mailosaur alternatives by job', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'From each tool’s own pages, checked 23 November 2026, with the price each lists. Not described means its pages don’t say.',
      cols: ['Option', 'What it does well', 'Price as listed', 'Where it stops', 'Best for'],
      rows: [
        [
          'MailSlurp: test inboxes by API',
          'Creates an inbox per test run, with SDKs and webhooks',
          'Free: 100 inboxes created, 250 emails a month\nStarter $19.99 a month\nPro $69 a month',
          'Free inboxes are temporary; phone numbers paid separately',
          'Suites that create an inbox for every run',
        ],
        [
          'testmail.app: addresses on a namespace',
          'Unlimited addresses and users on every paid plan, read by API',
          'Free: 100 emails a month\nEssential $12 a month, or $9 yearly\nPro $39 a month, or $29 yearly',
          'Free keeps mail for 1 day; SMS not described',
          'High email volume at a low price',
        ],
        [
          'Mailinator: public and private inboxes',
          'Public inboxes with no sign-up, private domains on paid plans',
          'Public: free\nVerified Pro: $0 with verification\nBusiness $79 a month, billed yearly',
          'SMS numbers by request, at an extra charge',
          'Quick manual checks and private test domains',
        ],
        [
          'Mailtrap: Email Sandbox',
          'Catches every email a staging app sends, in shared sandboxes',
          'Free: 50 test emails a month\nBasic $17 a month\nTeam $42 a month',
          'Catches what your app sends; SMS not described',
          'A team checking staging email',
        ],
        [
          'Mailpit: open source',
          'A local SMTP server with a web inbox and a REST API, under MIT',
          'Free to run',
          'Catches mail on your own machine; no SMS',
          'Local and CI email checks',
        ],
        [
          'Ethereal: fake SMTP',
          'Test accounts from one Nodemailer call, no sign-up',
          'Free',
          'No email reaches a real inbox',
          'Node.js tests that send email',
        ],
        [
          'Obsession (ours): Personas, Email, Phone, Browser',
          'Test users with their own inbox and number that sign up and wait for every code and the day-7 email',
          `Free: ${freeInboxes} inboxes and ${freeNumbers} number\nInbox ${prices.inbox.amount}, number ${prices.number.amount} a month\nPlans ${PAID}`,
          'Stops before payment unless given your card',
          'Sign-up and login tests that run for days',
        ],
      ],
    },
    { kind: 'h3', id: 'by-api', text: 'For test inboxes your suite reads by API' },
    {
      kind: 'p',
      text: `[MailSlurp](${MAILSLURP}) creates inboxes by API inside a test, with SDKs and webhooks. Free creates 100 inboxes and receives 250 emails a month, each inbox temporary. Starter is $19.99 a month for personal use. Pro is $69 a month for commercial use, with phone numbers paid separately. [testmail.app](${TESTMAIL}) gives unlimited addresses, mailboxes and users on every paid plan, from Essential at $12 a month for 10,000 emails, or $9 billed yearly. [Mailinator](${MAILINATOR}) keeps public inboxes free with no sign-up, adds a private domain on Verified Pro at $0 once verified, and procures SMS numbers “by request” at an extra charge.`,
    },
    { kind: 'h3', id: 'staging', text: 'For catching every email from staging' },
    {
      kind: 'p',
      text: `[Mailtrap’s Email Sandbox](${MAILTRAP}) catches the email a staging app sends, so nothing reaches a real customer. Free holds 1 sandbox and 50 test emails a month, Basic is $17 a month for 500, and Team is $42 a month for 5 sandboxes and 5,000 emails.`,
    },
    { kind: 'h3', id: 'free', text: 'Free Mailosaur alternatives' },
    {
      kind: 'p',
      text: `Mailinator’s public inboxes are free with no sign-up. Mailtrap’s free plan catches 50 test emails a month, testmail.app’s 100 and MailSlurp’s 250. [Ethereal](${ETHEREAL}) is “a completely free anti-transactional email service”: nodemailer.createTestAccount() returns an account, and “no emails are actually delivered”. Obsession’s Free plan includes ${freeInboxes} inboxes and ${freeNumbers} number, which receives up to ${freeNumber.texts} texts and ${freeNumber.minutes} call minutes a month, with no credit card.`,
    },
    { kind: 'h3', id: 'open-source', text: 'Open-source Mailosaur alternatives' },
    {
      kind: 'p',
      text: `[Mailpit](${MAILPIT}) is an email testing tool with an API. It runs an SMTP server on your machine or in CI, shows every captured email in a web inbox, and has a REST API for integration tests. It is MIT-licensed on [GitHub](${MAILPIT_GH}), and its README says it was inspired by MailHog, which is no longer maintained. It catches what your app sends locally and has no SMS, so text codes still need a real number from a hosted service.`,
    },
    { kind: 'h3', id: 'obsession', text: 'For test users that wait days for every code and email' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `A [persona](/personas) is a test user with its own [inbox](/email), US or UK [phone number](/phone) and [browser](/browser). After each release it signs up through your real sign-up page and receives the login code by text, email or call. Then it keeps waiting: for the welcome on day 1, the email on day 7 and the reminder on day 14. It is free while it waits and wakes in 50 ms when a message lands. Every message is timed against when it was due, and one that comes late or never comes is flagged that day in Slack, your on-call tool or your CI.`,
    },
    {
      kind: 'p',
      text: `Two blueprints in [Test sign-up and agents](/blueprints/test-sign-up-and-agents) run it. [Delivery monitoring](/blueprints/delivery-monitoring) lives a new user’s first 14 days after every release, in each country you sell in. [Sign-in code check](/blueprints/sign-in-code-check) signs in every night and times each code by text, email and call against its expiry. A fintech’s QA team running [one-time login codes on real numbers](/use-cases/otp-testing) shows the whole run. A number is ${prices.number.amount} a month and texts ${prices.sms.amount} each; an inbox is ${prices.inbox.amount} a month.`,
    },
    {
      kind: 'cta',
      text: 'Test users in each country you sell in, waiting for every login code and the day-7 email.',
      to: '/blueprints/test-sign-up-and-agents',
      label: 'See the blueprints',
    },

    { kind: 'h2', id: 'choose', text: 'Which Mailosaur alternative to choose' },
    {
      kind: 'list',
      items: [
        '**Your suite creates an inbox for every run:** MailSlurp.',
        '**You send a lot of test email and want a low price:** testmail.app.',
        '**You check staging email by hand as a team:** Mailtrap, or Mailinator’s public inboxes.',
        '**You want it free on your own machine:** Mailpit, or Ethereal for Node.js.',
        '**You need SMS codes and journeys that run for days, tested without writing the waiting yourself:** Obsession, with a test user’s inbox, number and browser on one key.',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best Mailosaur alternative?',
          a: 'It depends on the job. MailSlurp suits test inboxes and numbers by API, testmail.app low-cost email volume, Mailtrap staging email, and Mailpit your own machine. Obsession fits test users that sign up and wait days for every code and email.',
        },
        {
          q: 'Is there a free Mailosaur alternative?',
          a: `Yes. Mailinator’s public inboxes and Ethereal are free, and Mailpit is free to run. Mailtrap, testmail.app and MailSlurp have free plans of 50, 100 and 250 emails a month, checked on 23 November 2026. Obsession’s Free plan includes ${freeInboxes} inboxes and a number that receives up to ${freeNumber.texts} texts a month.`,
        },
        {
          q: 'Is there an open-source Mailosaur alternative?',
          a: 'Mailpit is open source under MIT. It runs an SMTP server with a web inbox and a REST API on your own machine or in CI. It has no SMS, so text codes need a real number from a hosted service.',
        },
        {
          q: 'Which alternatives test SMS as well as email?',
          a: `As listed on 23 November 2026, Mailosaur adds SMS on Core from $87.50 a month, billed annually. MailSlurp charges separately for numbers from Pro, and Mailinator procures numbers by request at an extra charge. On Obsession a US or UK number is ${prices.number.amount} a month, and every text it receives reaches your webhook as sms.received.`,
          link: { label: 'See the phone piece', to: '/phone' },
        },
        {
          q: 'How do I test an email that arrives 7 days after sign-up?',
          a: 'Give the journey a test user that waits. An Obsession persona signs up after the release, keeps its inbox and number, and records the day-7 email when it lands, timed against when it was due. If it never comes, the miss is flagged that day.',
          link: { label: 'Delivery monitoring', to: '/blueprints/delivery-monitoring' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Pricing', publisher: 'Mailosaur', url: MAILOSAUR },
    { title: 'Pricing', publisher: 'MailSlurp', url: MAILSLURP },
    { title: 'Pricing', publisher: 'testmail.app', url: TESTMAIL },
    { title: 'Pricing', publisher: 'Mailinator', url: MAILINATOR },
    { title: 'Pricing', publisher: 'Mailtrap', url: MAILTRAP },
    { title: 'Ethereal: fake SMTP service', publisher: 'Ethereal', url: ETHEREAL },
    { title: 'Mailpit: email and SMTP testing tool with API for developers', publisher: 'Mailpit', url: MAILPIT },
    { title: 'axllent/mailpit', publisher: 'GitHub', url: MAILPIT_GH },
  ],
  related: [
    '/use-cases/otp-testing',
    '/compare/obsession-vs-mailosaur',
    '/alternatives/agentmail',
    '/compare/agentmail-twilio-browserbase-e2b',
    'recipe:sign-in-code-check',
    'recipe:delivery-monitoring',
    '/blueprints/test-sign-up-and-agents',
    '/personas',
    '/phone',
    '/email',
    '/agents',
  ],
}
