import { plans, prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /alternatives/mailslurp (24 Nov 2026, agent-business plan). Every tool fact is from the tool's own pricing or home
   page, read 24 Nov 2026 (AgentMail's from its pricing page as read 22 and 23 Nov). Obsession's side: an inbox and a
   phone number per test persona with every code in the event log. Prices are read from prices.ts. */

const MS = 'https://www.mailslurp.com/'
const MS_PRICING = 'https://app.mailslurp.com/pricing/'
const MO_PRICING = 'https://mailosaur.com/pricing'
const MT_PRICING = 'https://mailtrap.io/pricing/'
const LB = 'https://lumbox.co'
const LB_PRICING = 'https://lumbox.co/pricing'
const AM_PRICING = 'https://www.agentmail.to/pricing'
const TM_PRICING = 'https://testmail.app/pricing/'

const paid = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const PLANS = `Free, then ${paid.slice(0, -1).join(', ')} or ${paid[paid.length - 1]} a month; usage per piece`
const freePlan = plans.find((p) => p.id === 'free') ?? plans[0]
const freeInboxes = freePlan.allowances.inbox ?? 0

export const ref: ReferencePage = {
  kind: 'alternatives',
  name: 'MailSlurp alternatives',
  company: 'MailSlurp',
  line: 'Test inbox tools, agent inbox APIs, and an inbox and a phone number for each test persona.',
  meta: {
    path: '/alternatives/mailslurp',
    title: 'MailSlurp alternatives (2026): free and paid options',
    description: `MailSlurp alternatives by job: Mailosaur, Mailtrap, Testmail, Lumbox and AgentMail, each with its price as listed, and Obsession’s inbox at ${prices.inbox.amount} a month.`,
    answer: `The main MailSlurp alternatives are Mailosaur for email and SMS testing, Mailtrap and Testmail for test inboxes, and Lumbox or AgentMail for inboxes that AI agents use. MailSlurp's Free plan is $0 and Pro is $69 a month. Free choices are Mailtrap's Free plan and Testmail's free tier. For an inbox and a phone number for each test persona, with every code in one event log, Obsession's inbox is ${prices.inbox.amount} a month.`,
    ogImage: '/og/alternatives-mailslurp.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Alternatives', path: '/alternatives' },
      { name: 'MailSlurp', path: '/alternatives/mailslurp' },
    ],
  },
  title: 'MailSlurp alternatives: free and paid ways to test email and sign-up codes',
  dek: 'Teams look past MailSlurp for a lower price, a free plan with more room, a test tool with texts built in, or an inbox an AI agent can keep. Each option is sorted by the job it does, with its price as listed.',
  primaryKeyword: 'mailslurp alternatives',
  keywords: ['mailslurp alternatives free', 'mailslurp alternative', 'mailslurp competitors', 'mailslurp pricing'],
  checked: '2026-11-24',
  readingMinutes: 7,
  reader: 'developers',
  art: {
    kind: 'sides',
    title: 'Where a test or agent inbox comes from',
    rows: [
      {
        name: 'Email and SMS testing',
        who: 'MailSlurp, Mailosaur, Testmail',
        nodes: ['Your test run', 'A test inbox', 'The code, by API'],
        links: ['creates', 'reads'],
      },
      {
        name: 'Pre-production email sandbox',
        who: 'Mailtrap',
        nodes: ['Your app', 'A sandbox inbox'],
        links: ['sends to'],
      },
      {
        name: 'Agent inboxes',
        who: 'Lumbox, AgentMail',
        nodes: ['Your agent', 'An inbox by API', 'Webhook or MCP'],
        links: ['creates', 'reads through'],
      },
      {
        name: 'Obsession',
        who: 'Email, Phone, Browser, Personas',
        nodes: ['One persona', 'Inbox, number and browser', 'One event log'],
        links: ['holds', 'writes to'],
        lit: 1,
        ours: true,
      },
    ],
    foot: 'Each row follows the tools’ own pages, checked 24 November 2026.',
  },
  blocks: [
    { kind: 'h2', id: 'why', text: 'Why teams look for a MailSlurp alternative' },
    {
      kind: 'p',
      text: `[MailSlurp](${MS}) creates inboxes by API inside a test, with SDKs and webhooks, and offers email and SMS for AI agents. [Its pricing page](${MS_PRICING}), read on 24 November 2026, lists Free at $0 with 250 emails received and 100 inboxes created a month, all temporary. Starter is $19.99 a month, Pro $69 and Growth $199, and Enterprise is a custom quote. The page shows where teams look elsewhere:`,
    },
    {
      kind: 'list',
      items: [
        '**The price and the limits.** Pro covers 5,000 emails received and 1,000 inboxes created a month for one user. Growth adds a second user and 5,000 inboxes.',
        '**Phone numbers.** Pro and Growth list phone numbers, paid separately, and SMS rates vary by country.',
        '**Temporary inboxes on Free.** Free inboxes aren’t kept. Starter keeps 250, and Pro and Growth keep as many as you need.',
      ],
    },

    { kind: 'h2', id: 'by-job', text: 'MailSlurp alternatives by job', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'From each tool’s own pages, checked 24 November 2026, with the price each lists. Not described means its pages don’t say.',
      cols: ['Option', 'What it does well', 'Price as listed', 'Where it stops', 'Best for'],
      rows: [
        [
          'Mailosaur: email and SMS testing',
          'Email and SMS testing with inboxes, retention and, from its SMS plan, up to 15 phone numbers',
          'Personal from $20 a month\nCore from $50\nSMS and authentication from $87.50\n(billed annually)',
          'No free plan, a 14-day trial; SMS is a separate plan',
          'QA teams that test email and text codes',
        ],
        [
          'Mailtrap: Email Sandbox',
          'A sandbox that catches email from staging so it never reaches real people',
          'Free: 50 test emails a month\nBasic $17 a month\nTeam $42\nBusiness $123',
          'Built for inspecting your own app’s email, not for agents or SMS',
          'Developers checking email before launch',
        ],
        [
          'Testmail',
          'Test inboxes by API, with unlimited addresses and users',
          'Free: 100 emails a month\nEssential $12 a month\nPro $39\n($9 and $29 billed annually)',
          'Free keeps mail for 1 day; phone numbers not described',
          'Automated tests that read email',
        ],
        [
          'Lumbox: agent inboxes',
          'An inbox for an AI agent that returns codes and links as JSON, with a vault and MCP',
          'Free: 3 inboxes\nStarter $9 a month\nPro $29\nScale $99',
          'Phone numbers are early access; no browser of its own described',
          'Agents that sign in through a browser tool you already run',
        ],
        [
          'AgentMail: agent inboxes',
          'An inbox API for AI agents with SDKs, MCP and an inbox for each of a platform’s users',
          'Free: 3 inboxes\nDeveloper $20 a month\nStartup $200\nExtra inbox $2 a month',
          'Its pages describe email only',
          'Agents that work only by email',
        ],
        [
          'Obsession (ours): Email, Phone, Messaging, Browser, Sandbox, Personas',
          'An inbox and a phone number for each test persona, with every code in one event log',
          PLANS,
          'Stops before payment unless given your own payment card',
          'Tests and agents that email, text and sign in',
        ],
      ],
    },
    { kind: 'h3', id: 'testing', text: 'For testing email and text codes' },
    {
      kind: 'p',
      text: `[Mailosaur](${MO_PRICING}) is the closest to MailSlurp. Personal is from $20 a month for 15,000 inbound emails, Core from $50 for 75,000, and SMS and authentication is a separate plan from $87.50 a month with 250 messages and up to 15 phone numbers, all billed annually. [Testmail](${TM_PRICING}) lists Free at 100 emails a month with 1 day of retention, Essential at $12 a month ($9 billed annually) and Pro at $39 ($29 annually). Our [Mailosaur comparison](/compare/obsession-vs-mailosaur) and [Mailosaur alternatives](/alternatives/mailosaur) go further.`,
    },
    { kind: 'h3', id: 'sandbox', text: 'For catching your own app’s email before launch' },
    {
      kind: 'p',
      text: `[Mailtrap](${MT_PRICING}) calls its product Email Sandbox. Free gives 1 sandbox and 50 test emails a month. Basic is $17 a month for 500, Team $42 for 5,000 and 5 sandboxes, and Business $123 for 50,000 and 50 sandboxes. It suits checking what your app sends, not an agent that has to read a code.`,
    },
    { kind: 'h3', id: 'agent-inboxes', text: 'For an inbox an AI agent keeps' },
    {
      kind: 'p',
      text: `[Lumbox](${LB}) returns codes, magic links and verification links as JSON and keeps passwords and 2FA secrets in a vault. [Its pricing page](${LB_PRICING}) lists Free for 3 inboxes, then Starter at $9, Pro at $29 and Scale at $99 a month, and dedicated phone numbers are in early access. [AgentMail](${AM_PRICING}) lists Free for 3 inboxes, Developer at $20 a month, Startup at $200 and $2 for each extra inbox. Both are built for agents that keep an inbox, not for a test that throws one away.`,
    },
    { kind: 'h3', id: 'obsession', text: 'For an inbox and a number for each test persona' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `A sign-up test needs the email code and often the text code. The [email piece](/email) gives each test persona an address that sends and receives, and the [phone piece](/phone) gives it a number, at ${prices.number.amount} a month. Codes and confirm links are read out of each message, and every email, text, call and page goes into one event log, dated. An inbox is ${prices.inbox.amount} a month on every plan, and Free includes ${freeInboxes} inboxes. See [OTP testing](/use-cases/otp-testing), or run the [sign-in code check blueprint](/blueprints/sign-in-code-check) with no code.`,
    },
    {
      kind: 'cta',
      text: 'An inbox and a phone number for each test persona, with every code in one event log. No credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which MailSlurp alternative to choose' },
    {
      kind: 'list',
      items: [
        '**You test email and text codes in a QA suite:** Mailosaur.',
        '**You only need to catch your app’s email in staging:** Mailtrap.',
        '**You want a free tier for email tests:** Testmail, or Mailtrap’s Free plan.',
        '**An AI agent needs an inbox it keeps:** Lumbox or AgentMail.',
        '**Each test persona needs an inbox and a phone number, with every code in one log:** Obsession.',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best MailSlurp alternative?',
          a: 'It depends on the job. Mailosaur suits email and SMS testing, Mailtrap an email sandbox, and Testmail simple test inboxes. Lumbox and AgentMail suit agents that keep an inbox, and Obsession suits a test persona that needs an inbox and a phone number with every code in one event log.',
        },
        {
          q: 'Is there a free MailSlurp alternative?',
          a: 'Yes. Mailtrap lists a Free plan with 50 test emails a month, and Testmail lists Free at 100 emails a month with 1 day of retention, read on 24 November 2026. MailSlurp’s own Free plan is $0 with temporary inboxes. Lumbox and Obsession are free to start too.',
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'How much does MailSlurp cost?',
          a: `MailSlurp lists Free at $0, Starter at $19.99 a month, Pro at $69 and Growth at $199, read on 24 November 2026. Obsession is free to start, then $20, $99 or $499 a month. Its inbox is ${prices.inbox.amount} a month.`,
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'Which alternative gives each test a phone number as well as an inbox?',
          a: `Mailosaur’s SMS plan and Obsession both do. A US or UK number on Obsession is ${prices.number.amount} a month beside the inbox, and text codes reach your webhook as sms.received.`,
          link: { label: 'See the phone piece', to: '/phone' },
        },
      ],
    },
  ],
  sources: [
    { title: 'MailSlurp: email and SMS API for testing', publisher: 'MailSlurp', url: MS },
    { title: 'Pricing', publisher: 'MailSlurp', url: MS_PRICING },
    { title: 'Pricing', publisher: 'Mailosaur', url: MO_PRICING },
    { title: 'Pricing', publisher: 'Testmail', url: TM_PRICING },
    { title: 'Email Sandbox pricing', publisher: 'Mailtrap', url: MT_PRICING },
    { title: 'Lumbox: inboxes for AI agents', publisher: 'Lumbox', url: LB },
    { title: 'Pricing', publisher: 'Lumbox', url: LB_PRICING },
    { title: 'Pricing', publisher: 'AgentMail', url: AM_PRICING },
  ],
  related: [
    '/compare/obsession-vs-mailosaur',
    '/alternatives/mailosaur',
    '/alternatives/agentmail',
    '/compare/obsession-vs-lumbox',
    '/use-cases/otp-testing',
    '/blueprints/sign-in-code-check',
    '/email',
    '/phone',
    '/personas',
    '/developers',
    '/agents',
  ],
}
