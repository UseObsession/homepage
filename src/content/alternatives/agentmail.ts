import { plans, prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /alternatives/agentmail (wave 2, 23 Nov 2026: _research/seo/wave2-pull-23nov/PLAN.md, page 4). Every tool fact is from
   the tool's own pricing, product or docs page, read 23 Nov 2026; the open-source projects from their GitHub pages the
   same day (_research/seo/wave2-pull-23nov/research/alternatives-agentmail.json). "agentmail vs" stays with
   /compare/obsession-vs-agentmail. Obsession's side: the email piece beside the number, browser and sandbox, and the
   Inbox agent blueprint. Prices are read from prices.ts, never retyped. */

const AM = 'https://www.agentmail.to/'
const AM_PRICING = 'https://www.agentmail.to/pricing'
const NYLAS = 'https://www.nylas.com/products/agent-accounts/'
const NYLAS_PRICING = 'https://www.nylas.com/pricing/'
const RESEND = 'https://resend.com/pricing'
const RESEND_INBOUND = 'https://resend.com/docs/dashboard/receiving/introduction'
const MAILGUN = 'https://www.mailgun.com/pricing/'
const POSTMARK = 'https://postmarkapp.com/pricing'
const MAILSLURP = 'https://app.mailslurp.com/pricing/'
const NORNWEAVE = 'https://github.com/DataCovey/nornweave'
const DEARAGENT = 'https://github.com/panda-sandeep/dearagent'
const STALWART = 'https://stalw.art/'
const STALWART_GH = 'https://github.com/stalwartlabs/stalwart'

/* Obsession's plans, as the site writes them: "Free, then $20, $99 or $499 a month; usage per piece". */
const paid = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const PLANS = `Free, then ${paid.slice(0, -1).join(', ')} or ${paid[paid.length - 1]} a month; usage per piece`
const freePlan = plans.find((p) => p.id === 'free') ?? plans[0]
const freeInboxes = freePlan.allowances.inbox ?? 0
const freeEmails = (freePlan.allowances.email ?? 0).toLocaleString('en-GB')

export const ref: ReferencePage = {
  kind: 'alternatives',
  name: 'AgentMail alternatives',
  company: 'AgentMail',
  line: 'Agent inbox APIs, email APIs that receive, test inboxes, open-source projects, and an inbox beside a number and a browser.',
  meta: {
    path: '/alternatives/agentmail',
    title: 'AgentMail alternatives (2026): 9 options for agent inboxes',
    description: `AgentMail alternatives by job: agent inbox APIs, email APIs that receive, test inboxes and open-source code, with Obsession’s inbox at ${prices.inbox.amount} a month.`,
    answer: `The main AgentMail alternatives are Nylas Agent Accounts for hosted agent inboxes with a calendar, and Resend, Mailgun or Postmark for application email with inbound webhooks. MailSlurp makes test inboxes, and NornWeave, DearAgent and Stalwart are open source to host yourself. For an agent that also needs a phone number, a browser and a sandbox, Obsession puts its inbox beside them on one API and one bill, at ${prices.inbox.amount} an inbox a month.`,
    ogImage: '/og/alternatives-agentmail.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Alternatives', path: '/alternatives' },
      { name: 'AgentMail', path: '/alternatives/agentmail' },
    ],
  },
  title: 'AgentMail alternatives: every way to give an AI agent its own inbox',
  dek: 'Teams look past AgentMail for a lower price per inbox, a calendar beside the inbox, code they host themselves, or a phone number and browser on the same key. Each option is sorted by the job it does, with its price as listed.',
  primaryKeyword: 'agentmail alternatives',
  keywords: ['agentmail alternative', 'agentmail open source alternative', 'agentmail competitors'],
  checked: '2026-11-23',
  readingMinutes: 7,
  reader: 'developers',
  art: {
    kind: 'sides',
    title: 'Where an agent’s email comes from',
    rows: [
      {
        name: 'Agent inbox APIs',
        who: 'AgentMail, Nylas Agent Accounts',
        nodes: ['Your agent', 'An inbox by API', 'Webhook or MCP'],
        links: ['creates', 'reads through'],
      },
      {
        name: 'Email APIs that receive',
        who: 'Resend, Mailgun, Postmark',
        nodes: ['Your domain', 'Inbound webhook'],
        links: ['forwards to'],
      },
      {
        name: 'Test inboxes',
        who: 'MailSlurp',
        nodes: ['Your test run', 'A temporary inbox'],
        links: ['creates'],
      },
      {
        name: 'Open source',
        who: 'NornWeave, DearAgent, Stalwart',
        nodes: ['Your own servers', 'Inboxes you run'],
        links: ['host'],
      },
      {
        name: 'Obsession',
        who: 'Email, Phone, Browser, Sandbox',
        nodes: ['One persona', 'Inbox, number and browser', 'One event log'],
        links: ['holds', 'writes to'],
        lit: 1,
        ours: true,
      },
    ],
    foot: 'Each row follows the tools’ own pages, checked 23 November 2026.',
  },
  blocks: [
    { kind: 'h2', id: 'why', text: 'Why teams look for an AgentMail alternative' },
    {
      kind: 'p',
      text: `[AgentMail](${AM}) is an email inbox API for AI agents. Each inbox is created by API, with threads, custom domains, webhooks, websockets, IMAP and SMTP. It has an MCP server, the standard way AI agents call tools, and Pods that give each user of a software product its own inbox. For an agent that works only by email, it does that job well. [Its pricing page](${AM_PRICING}), checked on 23 November 2026, shows where teams look elsewhere:`,
    },
    {
      kind: 'list',
      items: [
        '**The price per inbox.** Free covers 3 inboxes and 3,000 emails a month. Developer is $20 a month for 10 inboxes, Startup is $200 a month for 150, and each inbox past those is $2 a month.',
        '**Email only.** Its pages describe inboxes, not phone numbers, texts, a browser or a sandbox. An agent that gets a code by text, or has to sign in to a website, needs a second and a third vendor.',
        '**Hosted only.** The pricing page doesn’t mention open source. Enterprise lists “BYO cloud deployment” for teams that need it in their own cloud.',
      ],
    },

    { kind: 'h2', id: 'by-job', text: 'AgentMail alternatives by job', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'From each tool’s own pages, checked 23 November 2026, with the price each lists. Not described means its pages don’t say.',
      cols: ['Option', 'What it does well', 'Price as listed', 'Where it stops', 'Best for'],
      rows: [
        [
          'Nylas: Agent Accounts',
          'An address and a calendar for each agent, on your own domain, with IMAP on paid plans and an MCP server',
          'Free: 3 accounts\nEssentials $15 a month, 10 accounts\nPro $49 a month, 50 accounts',
          'No phone number or browser described',
          'Agents that book meetings as well as answer email',
        ],
        [
          'Resend: sending and inbound email',
          'Sends and receives, with inbound webhooks and an MCP server',
          'Free: 3,000 emails a month, 100 a day\nPro from $20 a month',
          'Inbound mail arrives by webhook; agent inboxes and threads not described',
          'Apps that already send with Resend',
        ],
        [
          'Mailgun: sending and inbound routes',
          'Routes inbound mail to your code at high volume',
          'Free: 100 emails a day, 1 inbound route\nBasic from $15 a month, 5 routes',
          'Built for application email, not one inbox per agent',
          'High-volume sending with replies routed back',
        ],
        [
          'Postmark: transactional and inbound email',
          'Transactional email with inbound processing from its Pro plan',
          'Free: 100 emails a month\nPro $16.50 a month, with inbound',
          'Inbound starts on Pro',
          'Transactional email that needs replies read',
        ],
        [
          'MailSlurp: test inboxes by API',
          'Creates inboxes in tests, and can give an AI assistant its own inbox',
          'Free: 100 inboxes created, 250 emails a month\nPro $69 a month',
          'Free inboxes are temporary; phone numbers paid separately',
          'Email checks inside a test suite',
        ],
        [
          'NornWeave and DearAgent: open source',
          'Inboxes, threads and an MCP server you host, over Mailgun, SES, SendGrid or Resend, or on Cloudflare',
          'Free to run\nApache-2.0 and AGPL-3.0',
          'Young projects; DearAgent calls itself experimental',
          'Teams that want the code in their own cloud',
        ],
        [
          'Stalwart: open source',
          'A full mail server with IMAP, JMAP and SMTP',
          'Community edition under AGPL-3.0\nEnterprise edition paid',
          'You run delivery, DNS and spam filtering yourself',
          'Teams that want their own mail server',
        ],
        [
          'Obsession (ours): Email, Phone, Messaging, Browser, Sandbox, Personas',
          'An inbox, plus a number, messaging, a browser and a sandbox under one identity',
          PLANS,
          'Stops before payment unless given your own payment card',
          'Agents that email, text, browse and run code',
        ],
      ],
    },
    { kind: 'h3', id: 'agent-inboxes', text: 'For a hosted inbox built for agents' },
    {
      kind: 'p',
      text: `[Nylas Agent Accounts](${NYLAS}) promise “Email & Calendar for Your AI Agents”. Each account is an address and a calendar that belong to your software, on your own domain, and Nylas writes the domain’s mail records (MX, SPF, DKIM and DMARC) for you. On paid plans, any tool that speaks IMAP can connect, and it lists an MCP server for Claude Code, Cursor and other coding agents. [Its pricing page](${NYLAS_PRICING}) starts free with 3 accounts. Essentials is $15 a month for 10 and Pro $49 a month for 50, and on Pro each extra account is $0.40 a month, or $0.20 on a yearly plan.`,
    },
    { kind: 'h3', id: 'inbound', text: 'For email your app already sends and receives' },
    {
      kind: 'p',
      text: `[Resend](${RESEND}) includes inbound email. It receives mail at a Resend address or your own domain and posts it to your webhook, with attachments by download link, as [its receiving docs](${RESEND_INBOUND}) describe. Free sends 3,000 emails a month, and Pro starts at $20. [Mailgun](${MAILGUN}) routes inbound mail to your code, with 1 route on Free and 5 on Basic from $15 a month. [Postmark](${POSTMARK}) adds inbound email processing on its Pro plan at $16.50 a month. All three are built for an application’s own email, so threads and an inbox for each agent are yours to build.`,
    },
    { kind: 'h3', id: 'testing', text: 'For inboxes that exist only for a test' },
    {
      kind: 'p',
      text: `[MailSlurp](${MAILSLURP}) creates inboxes by API inside a test, with SDKs and webhooks. Free creates 100 inboxes and receives 250 emails a month, each inbox temporary. Pro is $69 a month for commercial use, with phone numbers paid separately. Its FAQ also offers to “give an AI assistant its own inbox with scoped permissions”.`,
    },
    { kind: 'h3', id: 'open-source', text: 'Open-source AgentMail alternatives' },
    {
      kind: 'p',
      text: `[NornWeave](${NORNWEAVE}), under Apache-2.0, is a self-hosted inbox API for agents. It sits on top of Mailgun, SES, SendGrid or Resend and adds inboxes, threads, history and an MCP server. [DearAgent](${DEARAGENT}), under AGPL-3.0, calls itself “the open-source, self-hosted alternative to AgentMail” and runs on your own Cloudflare account; its README says it is experimental. [Stalwart](${STALWART}) is a full mail server with IMAP, JMAP and SMTP, licensed AGPL-3.0 on [GitHub](${STALWART_GH}), with a paid Enterprise edition. Each is free to run, and your team keeps delivery, DNS, spam filtering and uptime.`,
    },
    { kind: 'h3', id: 'obsession', text: 'For an inbox beside a number, a browser and a sandbox' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `The [email piece](/email) does AgentMail’s job. obsession.inboxes.create() returns an address that sends and receives, keeps threads and attachments, and can send from your own domain. Codes and confirm links are read out of each email, and every new message reaches your webhook as email.received. An inbox is ${prices.inbox.amount} a month on every plan, and emails are ${prices.email.amount} ${prices.email.unit}. Free includes ${freeInboxes} inboxes and ${freeEmails} emails.`,
    },
    {
      kind: 'p',
      text: `The difference is what sits beside the inbox. A [persona](/personas) is one agent with its own inbox, [phone number](/phone), [browser](/browser) and [sandbox](/sandbox) under one name, so a code sent by text or email reaches the browser that asked for it. A persona is free while it waits and wakes in 50 ms when a message lands, and every email, text, call and page goes into one event log. The four vendors this replaces are priced side by side on [AgentMail, Twilio, Browserbase and E2B in one API](/compare/agentmail-twilio-browserbase-e2b). Teams who don’t write code pick the [Inbox agent blueprint](/blueprints/inbox-agent), and Obsession answers every email in its own thread.`,
    },
    {
      kind: 'cta',
      text: 'An inbox for your agent in one call, with a number, browser and sandbox on the same key. No credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which AgentMail alternative to choose' },
    {
      kind: 'list',
      items: [
        '**Your agent needs an inbox and a calendar:** Nylas Agent Accounts.',
        '**Your app already sends email and needs to read replies:** Resend, Mailgun or Postmark.',
        '**You need inboxes only inside tests:** MailSlurp.',
        '**You want the code on your own servers:** NornWeave or DearAgent for an inbox API, Stalwart for a full mail server.',
        '**Your agent also texts, signs in to websites or runs code:** Obsession, with every piece on one key, one webhook and one bill.',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best AgentMail alternative?',
          a: 'It depends on the job. Nylas Agent Accounts suits a hosted agent inbox with a calendar, and Resend, Mailgun or Postmark suit application email that receives replies. MailSlurp makes test inboxes, NornWeave, DearAgent and Stalwart run on your own servers, and Obsession fits when the agent needs a phone number, a browser and a sandbox beside its inbox.',
        },
        {
          q: 'Is there an open-source AgentMail alternative?',
          a: 'Yes. NornWeave (Apache-2.0) and DearAgent (AGPL-3.0) are self-hosted inbox APIs for agents with MCP servers, checked on their GitHub pages on 23 November 2026; DearAgent calls itself experimental. Stalwart (AGPL-3.0) is a full mail server. With each, your team runs delivery, DNS and spam filtering.',
        },
        {
          q: 'Who are AgentMail’s competitors?',
          a: 'For agent inboxes, Nylas Agent Accounts. For application email with inbound, Resend, Mailgun and Postmark. For test inboxes, MailSlurp. Obsession puts the inbox beside a phone number, messaging, a browser and a sandbox on one key.',
          link: { label: 'Obsession vs AgentMail', to: '/compare/obsession-vs-agentmail' },
        },
        {
          q: 'How much does AgentMail cost?',
          a: `AgentMail lists Free for 3 inboxes and 3,000 emails a month, checked on 23 November 2026. Developer is $20 a month for 10 inboxes, Startup $200 a month for 150, and each extra inbox $2 a month. Obsession’s inbox is ${prices.inbox.amount} a month on every plan, with ${freeInboxes} free.`,
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'Which alternative gives an agent a phone number as well as an inbox?',
          a: `Of the options here, Obsession. A US or UK number for texts and calls is ${prices.number.amount} a month, beside the inbox on the same key, and text codes reach your webhook as sms.received. The other tools’ pages describe email only.`,
          link: { label: 'See the phone piece', to: '/phone' },
        },
      ],
    },
  ],
  sources: [
    { title: 'AgentMail: email inboxes for AI agents', publisher: 'AgentMail', url: AM },
    { title: 'Pricing', publisher: 'AgentMail', url: AM_PRICING },
    { title: 'Agent Accounts: email and calendar for your AI agents', publisher: 'Nylas', url: NYLAS },
    { title: 'Pricing', publisher: 'Nylas', url: NYLAS_PRICING },
    { title: 'Pricing', publisher: 'Resend', url: RESEND },
    { title: 'Receiving emails', publisher: 'Resend', url: RESEND_INBOUND },
    { title: 'Pricing', publisher: 'Mailgun', url: MAILGUN },
    { title: 'Pricing', publisher: 'Postmark', url: POSTMARK },
    { title: 'Pricing', publisher: 'MailSlurp', url: MAILSLURP },
    { title: 'NornWeave: open-source inbox API for AI agents', publisher: 'GitHub', url: NORNWEAVE },
    { title: 'DearAgent: email inboxes for AI agents, self-hosted on Cloudflare', publisher: 'GitHub', url: DEARAGENT },
    { title: 'Stalwart: all-in-one mail and collaboration server', publisher: 'Stalwart Labs', url: STALWART },
    { title: 'stalwartlabs/stalwart', publisher: 'GitHub', url: STALWART_GH },
  ],
  related: [
    '/compare/obsession-vs-agentmail',
    '/compare/agentmail-twilio-browserbase-e2b',
    '/alternatives/browserbase',
    '/alternatives/e2b',
    '/glossary/model-context-protocol',
    '/glossary/dkim',
    'best-email-api-for-ai-agents',
    'ai-agent-infrastructure-stack',
    'long-running-ai-agents',
    'recipe:inbox-agent',
    '/email',
    '/phone',
    '/personas',
    '/blueprints/build-agent-products',
    '/developers',
    '/agents',
  ],
}
