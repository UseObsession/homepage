import type { BlogPost } from './types'

/* Retitled 22 Nov 2026 in place (same address): the case for giving AI agents their own pieces. Codes, replies and
   logins reach the agent itself, under one identity, on one bill. Readers: developers building agents and teams handing
   jobs to agents. Sources reused from the earlier version (Joy Joya's 362 brand test, the CMA's 9 March 2026 guidance,
   McKinsey, Adobe, Clay's 6,346 forms). Prices from prices.ts on 22 Nov. The supplier and agent are invented. No dashes. */

const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const MCKINSEY = 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants'
const ADOBE = 'https://news.adobe.com/news/2026/01/adobe-holiday-shopping-season'
const CLAY = 'https://www.clay.com/blog/claygent-experiment-speed-to-lead'

export const post: BlogPost = {
  slug: 'why-ai-customers-matter',
  title: 'Why AI agents need their own inbox, phone number and browser',
  dek: 'Sign-ups send codes, suppliers reply days later and portals expect the same user back next week. An agent with its own inbox, number and browser gets all of it itself, under one name, on one bill.',
  metaTitle: 'Why AI agents need their own inbox, phone number and browser',
  description:
    'Why AI agents need their own inbox, phone number and browser: login codes, replies and sessions reach the agent itself, under one identity, on one bill.',
  answer:
    'AI agents need their own inbox, phone number and browser because their work sends codes, replies and logins back to an address. If those land in a person’s inbox or phone, a person stays in the loop and the job waits. With its own pieces under one identity, the agent gets every code, reply and session itself, and each one lands in an event log.',
  primaryKeyword: 'why ai agents need their own inbox',
  keywords: [
    'do ai agents need email',
    'why ai agents need a phone number',
    'ai agent verification codes',
    'one identity for ai agents',
    'browser that stays signed in for ai agents',
  ],
  category: 'Behind the login',
  published: '2026-10-24',
  updated: '2026-11-22',
  readingMinutes: 7,
  order: 4,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'One agent, one identity, one week',
      who: 'ava@agents.northwind.example',
      rows: [
        { time: 'Mon 09:02', text: 'Signs up to a supplier portal', detail: 'In its own browser, as Ava', tone: 'info' },
        { time: 'Mon 09:02', text: 'Login code arrives by email', detail: 'Read within a second', tone: 'ok' },
        { time: 'Mon 09:03', text: 'Portal sends a text code', detail: 'To Ava’s own US number', tone: 'ok' },
        { time: 'Wed 14:40', text: 'Supplier replies to the quote', detail: 'Same thread Ava started', tone: 'ok' },
        { time: 'Fri 08:15', text: 'Returns to the portal', detail: 'Still signed in', tone: 'ok' },
        { time: 'Fri 08:16', text: 'Portal asks for a passport', detail: 'Stops, and logs what it asked', tone: 'late' },
      ],
      foot: 'An example: the supplier and the agent are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI agent that works with other companies gets answers back. A sign-up sends a login code by email. A phone check sends a text. A supplier replies to a quote 3 days later. A portal expects the same user to return signed in next week.',
    },
    {
      kind: 'p',
      text: 'Each of those arrives at an address. Give the agent its own inbox, phone number and browser, and they arrive at the agent. It reads the code, answers the reply and returns to the portal with nobody forwarding anything.',
    },
    {
      kind: 'p',
      text: 'Testing a sign-up needs addresses that have never been used. [Joy Joya signed up to 362 ecommerce brands](' +
        JOYJOYA +
        ') with new email addresses and phone numbers, and found that 158 sent no welcome email.',
    },
    {
      kind: 'stat',
      value: '158 of 362',
      label: 'ecommerce brands sent no welcome email to a new subscriber in Joy Joya’s test',
      source: 'Joy Joya, July 2026',
      href: JOYJOYA,
    },

    { kind: 'h2', id: 'codes-replies-logins', text: 'Codes, replies and logins' },
    {
      kind: 'p',
      text: 'Most of what an agent waits for falls into four kinds. Each needs a place of its own to land.',
    },
    {
      kind: 'list',
      items: [
        '**Codes.** Login codes, magic links and verification texts expire within minutes. The agent has to read each one as it arrives.',
        '**Replies.** A supplier, a lead or a support desk answers hours or days later. The reply has to reach the thread the agent started.',
        '**Logins.** A portal, a dashboard or a supplier account keeps a session. The agent’s browser has to keep it too, for weeks.',
        '**Texts and calls.** A delivery text or a callback goes to a phone number. The agent needs a number that answers.',
      ],
    },

    { kind: 'h2', id: 'shared-inbox', text: 'Where a shared inbox breaks' },
    {
      kind: 'p',
      text: 'Many teams start by pointing an agent at a person’s inbox, or at one shared by every agent. That works for one agent reading one person’s mail.',
    },
    {
      kind: 'p',
      text: 'It stops working as the agent does more. A code sent to a person waits until that person forwards it. Replies to 10 agents land in one inbox, and each agent has to sort out which are its own. A login tied to a person’s account breaks when they change the password or leave.',
    },
    {
      kind: 'p',
      text: 'One inbox, one number and one browser per agent keep each thread, code and session with the agent that started it.',
    },

    { kind: 'h2', id: 'one-identity', text: 'One identity across every piece' },
    {
      kind: 'p',
      text: 'The pieces work best under one name. A persona is an AI agent with its own inbox, number and browser under one identity. A supplier sees the same name on the email, the text and the portal login.',
    },
    {
      kind: 'p',
      text: 'For developers it is one call, obsession.personas.create({ inbox: true, phone: "US", browser: true }). A new email reaches your webhook, the address your code listens on, as email.received. A text arrives as sms.received. The persona is free while it waits and wakes in 50 ms when a message lands.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page the agent handles lands in one event log, dated and in order. A team reads what each agent received and when, across a fleet of agents at once. More on each piece is on the [persona page](/personas).',
    },

    { kind: 'h2', id: 'why-now', text: 'Why agents need it now' },
    {
      kind: 'p',
      text: '[McKinsey](' +
        MCKINSEY +
        ') forecasts that by 2030 AI agents could orchestrate $900 billion to $1 trillion of US retail revenue, and $3 trillion to $5 trillion worldwide. Traffic from AI tools to US retail sites rose 693.4% in the 2025 holiday season, from a small base, [Adobe reported](' +
        ADOBE +
        ').',
    },
    {
      kind: 'p',
      text: 'Agents that buy, book and ask for people deal with companies built for people. Those companies send codes, confirmations and replies to an email address and a phone number.',
    },
    {
      kind: 'p',
      text: 'Measuring how companies answer takes the same pieces. When [Clay’s agents submitted 6,346 demo and contact forms](' +
        CLAY +
        '), two thirds of the companies never replied. Counting that needs an address and a number for every reply, kept for weeks.',
    },
    {
      kind: 'p',
      text: 'A company also answers for what its agent does. In the UK, a business is responsible for its AI agent as it is for an employee. The Competition and Markets Authority tells businesses to [regularly check how well an AI agent is performing](' +
        CMA +
        '). An agent with its own identity, and every message it sent and received in one log, gives that check something to read.',
    },

    { kind: 'h2', id: 'cost', text: 'What it costs per agent' },
    {
      kind: 'table',
      caption: 'Obsession’s list rates on 22 November 2026, the same on every plan',
      cols: ['Piece', 'Price'],
      rows: [
        ['Inbox', '$0.50 a month'],
        ['Emails', '$0.40 per 1,000, sent or received'],
        ['US or UK number', '$2 a month'],
        ['Texts', '$0.015 each, sent or received'],
        ['Calls', '$0.012 a minute, in or out'],
        ['Browser', '$0.10 an hour, no charge per GB'],
        ['Persona', 'Free while it waits'],
        ['Event log', '$5 per million events'],
      ],
    },
    {
      kind: 'p',
      text: 'An agent with its own inbox and US number costs $2.50 a month before usage, whether a team runs 1 or 10,000. Waiting between messages costs nothing.',
    },
    {
      kind: 'p',
      text: 'The Free plan includes 3 inboxes, 3,000 emails, 1 number that receives texts and calls, 10 browser hours and 100,000 events, with no credit card. Paid plans are $20, $99 or $499 a month, and each fee covers at least that much usage at these rates.',
    },

    { kind: 'h2', id: 'when-shared-is-enough', text: 'When a shared inbox is enough' },
    {
      kind: 'list',
      items: [
        'An agent that only reads and drafts replies to one person’s own mail can use that person’s inbox.',
        'An agent that only reads public pages needs a search API, with no inbox or number. The options are compared in [the best web search APIs for AI agents](/blog/best-web-search-api-for-ai-agents).',
        'A sign-up checked by hand once a month needs one spare address, used by a person.',
      ],
    },

    { kind: 'h2', id: 'who', text: 'Who gives agents their own pieces' },
    {
      kind: 'list',
      items: [
        '**Developers building agent products** give each user’s agent an inbox and a number in one call, through [the API, or MCP, the standard way AI agents call tools](/developers). See [building AI agent products](/kits/build-agent-products).',
        '**QA and growth engineers** give each test journey its own persona, which waits days for the day-7 email. See [testing your sign-up and AI agents](/kits/test-sign-up-and-agents).',
        '**Teams working behind logins** give an agent a [browser that stays signed in](/browser), with an inbox and number for every login code. See [work behind logins](/kits/work-behind-logins).',
        '**Teams that talk to customers** give a voice or text agent its own [phone number](/phone). See [talking to customers](/kits/talk-to-customers).',
        '**Teams without developers** pick a [blueprint](/blueprints), a ready job Obsession runs on these pieces, with the results sent to Slack, a sheet or the CRM.',
      ],
    },
    {
      kind: 'p',
      text: 'How agents sign in to websites is in [can AI agents log in to websites](/blog/can-ai-agents-log-in-to-websites). How they make and take calls is in [can AI make phone calls](/blog/can-ai-make-phone-calls). How they stay on one job for weeks is in [long-running AI agents](/blog/long-running-ai-agents).',
    },

    { kind: 'h2', id: 'start', text: 'How teams start' },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, through one API and one bill. Its pieces are email inboxes, phone numbers and texts, iMessage, WhatsApp, Slack and Telegram, a cloud browser and a sandbox to run code. A persona puts the pieces under one identity, free while it waits. Teams with no engineers pick a blueprint, and Obsession runs the job and sends them the results. Every event and result lands in one event log developers subscribe to.',
    },
    {
      kind: 'cta',
      text: 'Give your agent its own inbox, number and browser in one call. The Free plan includes 3 inboxes, 1 number and 10 browser hours, with no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },
    {
      kind: 'cta',
      text: 'Not building agents? Pick a blueprint, and Obsession runs it.',
      to: '/blueprints',
      label: 'Browse blueprints',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about an AI agent’s own inbox, number and browser' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Why does an AI agent need its own email address?',
          a: 'Sign-ups, suppliers and leads send codes and replies by email. With its own address, the agent reads each one as it arrives, in its own threads, with nobody forwarding it.',
        },
        {
          q: 'Can’t my agent use my Gmail?',
          a: 'For one agent reading your own mail, yes. Once it signs up to sites, waits for replies or works beside other agents, codes wait on you and threads mix. Its own inbox keeps them apart.',
        },
        {
          q: 'Does an agent need a phone number if it has email?',
          a: 'Often. Many sites send a verification text, and many people reply by text or call back. A number lets the agent receive both.',
        },
        {
          q: 'What is a persona?',
          a: 'An AI agent with its own inbox, phone number and browser under one name. On Obsession a persona is free while it waits and wakes in 50 ms when a message lands.',
          link: { label: 'Personas', to: '/personas' },
        },
        {
          q: 'What does it cost?',
          a: 'An inbox is $0.50 a month and a US or UK number $2 a month, with emails, texts, calls and browser hours billed as used. The Free plan includes 3 inboxes, 1 number and 10 browser hours.',
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'What does the agent do at a CAPTCHA or an identity check?',
          a: 'It stops. An agent on Obsession says it’s an AI when it talks to a person, never gets round a CAPTCHA or a bot block, and stops at any identity check. It stops before payment unless given the customer’s own payment card.',
          link: { label: 'How our agents behave', to: '/agents' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'Prices and examples',
      text: 'Prices are Obsession’s list rates on 22 November 2026, from its pricing page. The supplier and the agent in the examples are invented.',
    },
  ],

  sources: [
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'Agentic commerce: how agents are ushering in a new era', publisher: 'McKinsey & Company', url: MCKINSEY, date: '2025-10-17' },
    { title: 'Holiday shopping season drove a record $257.8 billion online with consumers embracing generative AI tools', publisher: 'Adobe', url: ADOBE, date: '2026-01-07' },
    { title: 'We asked 6,346 companies for a demo. Most never wrote back.', publisher: 'Clay', url: CLAY, date: '2026-09-22' },
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-03-09' },
  ],
  related: ['/email', '/phone', '/browser', '/personas', 'ai-customers-for-developers', 'can-ai-agents-log-in-to-websites', 'long-running-ai-agents', '/blueprints'],
}
