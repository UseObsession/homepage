import type { KitReader } from './kitPaths'
import type { Cta, Faq, Final, Meta, PersonaIcon } from './types'

/* /no-code: the page for teams that don't write code (pages/NoCode.tsx). Two ways in, side by side from the hero: hire
   the job done (pick a blueprint, and Obsession runs it), or make the AI the team already uses capable (connect
   Obsession to Claude, ChatGPT, Zapier, Make or n8n). Then what AI can't do on its own, the jobs by team, connecting
   your own AI, every size, the rules and the cost, questions, the form. It owns "ai agents without coding", "no code ai
   agents" and "ai agents for business teams". Every company, person and number in a picture is an example; prices and
   typical months come from content/prices.ts and the catalog, never typed here. */

export type NoCodeFormat = 'slack' | 'email' | 'crm' | 'sheet' | 'pdf' | 'assistant' | 'any'

type Door = { id: 'job' | 'ai'; kicker: string; title: string; line: string; cta: Cta }

export type NoCodePage = {
  meta: Meta
  hero: { pill: string; headline: string; sub: string; note: string }
  /* The two ways in, each with its picture: a blueprint running, and a team's AI using Obsession's phone. */
  doors: {
    items: [Door, Door]
    blueprint: { name: string; company: string; status: string; rows: { at: string; text: string; icon: PersonaIcon }[]; result: { format: NoCodeFormat; text: string } }
    chat: { app: string; ask: string; tool: string; steps: { at: string; text: string }[]; answer: string }
    caption: string
  }
  gap: {
    heading: string
    line: string
    cols: { task: string; alone: string; with: string }
    rows: { icon: PersonaIcon; task: string; alone: string; with: string }[]
  }
  jobs: {
    heading: string
    line: string
    typical: string
    teams: { id: string; name: string; reader: KitReader; icon: PersonaIcon; jobs: { slug: string; line: string }[]; moves: string[] }[]
    moves: string
    formats: { label: string; items: { id: NoCodeFormat; name: string }[]; note: string }
    all: (n: number) => Cta
  }
  connect: {
    heading: string
    line: string
    tools: { name: string; how: string; icon: PersonaIcon }[]
    steps: { title: string; line: string }[]
    note: string
  }
  scale: {
    heading: string
    line: string
    rows: { name: string; size: string; agents: number; job: string; slug: string }[]
    caption: string
  }
  rules: { heading: string; items: { icon: PersonaIcon; text: string }[] }
  cost: { heading: string; line: string; link: Cta }
  dev: { heading: string; line: string; link: Cta }
  faq: Faq
  final: Final
}

const headline = 'Hand off the job, or give your team’s AI what it needs to do it.'
const sub =
  'Not building agents? Pick a blueprint, and Obsession runs the job every day. Already using Claude, ChatGPT, Zapier or n8n? Give those agents a phone number, an inbox and a browser, without code.'

export const noCodePage: NoCodePage = {
  meta: {
    path: '/no-code',
    title: 'AI agents without coding: ready-made jobs, or equip your own AI',
    description:
      'AI agents without coding: pick a blueprint and Obsession runs the job, or give Claude, ChatGPT, Zapier or n8n a phone number, inbox and browser.',
    answer: `${headline} ${sub}`,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'No code', path: '/no-code' },
    ],
  },

  hero: {
    pill: 'For teams that don’t code',
    headline,
    sub,
    note: 'Free plan, no credit card. Results arrive in Slack, email, your CRM or a sheet.',
  },

  doors: {
    items: [
      {
        id: 'job',
        kicker: 'Hire the job done',
        title: 'Pick a blueprint. Obsession runs it.',
        line: 'A finished job, running every day: missed calls returned, invoices pulled from vendor portals, competitors’ offers kept. You choose what counts and where results go.',
        cta: { label: 'Browse blueprints', to: '/blueprints' },
      },
      {
        id: 'ai',
        kicker: 'Make your AI capable',
        title: 'Give the AI you already use a phone, an inbox and a browser.',
        line: 'Connect Obsession to Claude, ChatGPT, Zapier, Make or n8n. Your agents can then take calls, receive sign-in codes and work inside portals.',
        cta: { label: 'Connect your AI', to: '#connect' },
      },
    ],
    blueprint: {
      name: 'Missed call text back',
      company: 'Brightwell Dental · 12 clinics',
      status: 'Running',
      rows: [
        { at: '21:04', text: 'Missed call from a new patient', icon: 'phone' },
        { at: '21:04', text: 'Texted back: Thursday at 10:00 or 14:30?', icon: 'chat' },
        { at: '21:07', text: 'Reply: Thursday at 10 works', icon: 'chat' },
        { at: '21:07', text: 'Booked Thursday 10:00', icon: 'check' },
      ],
      result: { format: 'slack', text: 'Posted to #front-desk' },
    },
    chat: {
      app: 'Claude',
      ask: 'Call Harlow Freight and confirm Friday’s delivery window. Email me the answer.',
      tool: 'Obsession · phone and email',
      steps: [
        { at: '10:12', text: 'Called Harlow Freight from the ops number' },
        { at: '10:14', text: 'Confirmed Friday, 08:00 to 10:00' },
        { at: '10:14', text: 'Emailed ops@northgate.example' },
      ],
      answer: 'Done. Harlow confirmed Friday between 08:00 and 10:00, and the call is in your event log.',
    },
    caption: 'Two example teams: one runs a blueprint, the other asks its own AI to make the call.',
  },

  gap: {
    heading: 'AI can write the message. On its own, it can’t make the call.',
    line: 'The jobs that cost a team hours need a phone number, an inbox, a browser that stays signed in, and days of follow-up. Obsession gives an agent all four.',
    cols: { task: 'The job', alone: 'AI on its own', with: 'With Obsession' },
    rows: [
      { icon: 'phone', task: 'Return a missed call at 9pm', alone: 'Drafts a reply for someone to send', with: 'Calls back from its own number and books the slot' },
      { icon: 'key', task: 'Sign in to a supplier portal', alone: 'Can’t receive the sign-in code', with: 'Receives the code in its inbox and signs in' },
      { icon: 'clock', task: 'Chase a missing document', alone: 'Stops when the chat ends', with: 'Follows up on day 2 and day 4 until the file arrives' },
      { icon: 'record', task: 'Keep 40 competitors’ offers', alone: 'Sees only their public pages', with: 'Subscribes to each one and keeps every email and price' },
    ],
  },

  jobs: {
    heading: 'Pick a job. Obsession runs it on your schedule.',
    line: 'Each blueprint is a finished job. Choose one, say what counts and where results go, and it keeps running until you change it.',
    typical: 'Typical month',
    moves: 'Moves',
    teams: [
      {
        id: 'front-desk',
        name: 'Front desk',
        reader: 'sales',
        icon: 'phone',
        jobs: [
          { slug: 'missed-call-text-back', line: 'Text back every missed call within a minute, then book it' },
          { slug: 'appointment-reminders', line: 'Confirm, remind and rebook every appointment' },
          { slug: 'voice-agent-check', line: 'Test your AI receptionist’s answers every morning' },
        ],
        moves: ['Bookings', 'No-shows', 'Missed calls'],
      },
      {
        id: 'sales',
        name: 'Sales',
        reader: 'sales',
        icon: 'users',
        jobs: [
          { slug: 'speed-to-lead-callback', line: 'Call and text every new lead within a minute' },
          { slug: 'lead-leaks', line: 'Time how fast your team answers a new enquiry' },
          { slug: 'prospect-intelligence', line: 'See what each prospect sends its own customers' },
        ],
        moves: ['Speed to lead', 'Meetings booked', 'Pipeline'],
      },
      {
        id: 'support',
        name: 'Support',
        reader: 'developers',
        icon: 'chat',
        jobs: [
          { slug: 'support-bot-check', line: 'Ask your support bot what customers ask most' },
          { slug: 'drift-watch', line: 'Catch the day your AI agent’s answers change' },
          { slug: 'resolution-check', line: 'Test every resolution your AI vendor bills for' },
        ],
        moves: ['Resolution rate', 'Complaints', 'CSAT'],
      },
      {
        id: 'marketing',
        name: 'Marketing',
        reader: 'marketing',
        icon: 'record',
        jobs: [
          { slug: 'competitor-tracking', line: 'Keep every email, text and price from each competitor' },
          { slug: 'email-sms-tracking', line: 'See which brands discount first, and by how much' },
          { slug: 'ad-tracking', line: 'Follow competitors’ ads to their page, price and code' },
        ],
        moves: ['Offers matched', 'Campaign revenue'],
      },
      {
        id: 'ecommerce',
        name: 'Ecommerce',
        reader: 'agencies',
        icon: 'cart',
        jobs: [
          { slug: 'ad-landing-check', line: 'Check every live ad’s landing page each morning' },
          { slug: 'mystery-shopper', line: 'Shop your own store as a new customer' },
          { slug: 'agent-checkout-test', line: 'Test your checkout the way shoppers’ AI agents meet it' },
        ],
        moves: ['Conversion rate', 'Wasted ad spend'],
      },
      {
        id: 'operations',
        name: 'Operations',
        reader: 'founders',
        icon: 'key',
        jobs: [
          { slug: 'load-tracking', line: 'Track every load across carrier portals' },
          { slug: 'prior-authorization-status', line: 'Check prior authorisations in every payer portal' },
          { slug: 'supplier-reorder-agent', line: 'Reorder supplies when stock runs low' },
        ],
        moves: ['Hours back', 'Stockouts', 'On-time delivery'],
      },
      {
        id: 'finance',
        name: 'Finance',
        reader: 'founders',
        icon: 'check',
        jobs: [
          { slug: 'invoice-collector', line: 'Download every invoice from vendor portals' },
          { slug: 'order-receipt-ledger', line: 'Match every receipt to the order behind it' },
          { slug: 'document-chaser', line: 'Chase missing documents until they arrive' },
        ],
        moves: ['Receipts matched', 'Days to close'],
      },
      {
        id: 'agencies',
        name: 'Agencies',
        reader: 'agencies',
        icon: 'users',
        jobs: [
          { slug: 'mystery-shopper', line: 'Shop every client store each week, with the owner’s OK' },
          { slug: 'partner-checks', line: 'Check every partner’s page, link and code each Monday' },
          { slug: 'competitor-tracking', line: 'Watch each client’s competitors on their behalf' },
        ],
        moves: ['Clients kept', 'Revenue per client'],
      },
    ],
    formats: {
      label: 'Results arrive in',
      items: [
        { id: 'slack', name: 'Slack' },
        { id: 'email', name: 'Email' },
        { id: 'crm', name: 'Your CRM' },
        { id: 'sheet', name: 'Google Sheets' },
        { id: 'pdf', name: 'A PDF report' },
        { id: 'assistant', name: 'Your AI assistant' },
        { id: 'any', name: 'Any other tool' },
      ],
      note: 'Clay, webhooks, Zapier, Make and n8n too. For any other tool, we build the integration.',
    },
    all: (n) => ({ label: `Browse all ${n} blueprints`, to: '/blueprints' }),
  },

  connect: {
    heading: 'Claude, ChatGPT and Zapier, now with a phone, an inbox and a browser.',
    line: 'Already using them? Connect Obsession once, then ask in plain words. Your AI makes the call, receives the code or signs in to the portal, and every step lands in your event log.',
    tools: [
      { name: 'Claude', icon: 'chat', how: 'Add Obsession as a connector, then ask Claude to call, email or sign in.' },
      { name: 'ChatGPT', icon: 'chat', how: 'Connect Obsession, then give ChatGPT jobs that need a phone or an inbox.' },
      { name: 'Zapier', icon: 'webhook', how: 'Start a Zap from every call, text, email or code your agent receives.' },
      { name: 'Make', icon: 'webhook', how: 'Run a scenario the moment a reply, a code or a page change arrives.' },
      { name: 'n8n', icon: 'webhook', how: 'Trigger a workflow from any event in your event log.' },
      { name: 'Clay', icon: 'record', how: 'Send every result to a Clay table, one row per company.' },
    ],
    steps: [
      { title: 'Connect', line: 'Add Obsession to the AI tool your team already uses. No code.' },
      { title: 'Ask', line: 'Say the job in plain words: call this supplier, sign in to that portal, follow up on Friday.' },
      { title: 'Receive', line: 'The answer comes back in the same chat or flow, and every step is kept in your event log.' },
    ],
    note: 'Using a tool that isn’t here? We build the integration.',
  },

  scale: {
    heading: 'From 2 agents for a founder to 1,200 across an enterprise.',
    line: 'The same blueprints run for one location or hundreds, and each blueprint page prices the month at your volume.',
    rows: [
      { name: 'Enterprises', size: '5,000+ people', agents: 1200, job: 'Reorder supplies for 400 sites from 60 suppliers', slug: 'supplier-reorder-agent' },
      { name: 'Mid-market companies', size: '200 to 5,000 people', agents: 150, job: 'Call every inbound lead within a minute, across 3 brands', slug: 'speed-to-lead-callback' },
      { name: 'Agencies', size: '10 to 500 clients', agents: 45, job: 'Shop 45 client stores every week, with each owner’s OK', slug: 'mystery-shopper' },
      { name: 'Multi-location businesses', size: '10 to 200 people', agents: 40, job: 'Text back missed calls at 40 clinics', slug: 'missed-call-text-back' },
      { name: 'Founders and consultants', size: 'A team of one', agents: 2, job: 'Answer every new enquiry within a minute', slug: 'speed-to-lead-callback' },
    ],
    caption: 'Example deployments by company size.',
  },

  rules: {
    heading: 'Every agent works inside your rules.',
    items: [
      { icon: 'person', text: 'It says it’s an AI to anyone it speaks to.' },
      { icon: 'phone', text: 'It texts and calls only people who gave your business their number.' },
      { icon: 'key', text: 'It signs in only with logins you provide.' },
      { icon: 'stop', text: 'It stops at any identity check, and before payment unless you give it your card.' },
      { icon: 'domain', text: 'It never gets round a CAPTCHA or a bot block.' },
      { icon: 'record', text: 'It keeps every step in your event log, with the email, screenshot or recording behind it.' },
    ],
  },

  cost: {
    heading: 'Start free. Pay for what each job uses.',
    line: 'Free plan, no credit card. Each blueprint page shows what a typical month costs at your volume.',
    link: { label: 'See pricing', to: '/pricing' },
  },

  dev: {
    heading: 'Your developers build on the same pieces.',
    line: 'An inbox, a phone number and a browser for each agent, through one API and MCP. Your team’s blueprints keep running beside it.',
    link: { label: 'Build with the API', to: '/developers' },
  },

  faq: {
    heading: 'Questions teams ask first.',
    items: [
      {
        q: 'Do I need to know how to code?',
        a: 'No. Pick a blueprint and say where results go, or connect Obsession to Claude, ChatGPT, Zapier, Make or n8n and ask in plain words.',
      },
      {
        q: 'What’s the difference between a blueprint and connecting my own AI?',
        a: 'A blueprint is a finished job that Obsession runs for you on a schedule. Connecting your own AI gives the agents you already use a phone number, an inbox and a browser, so they can do jobs you describe in the moment. Many teams do both.',
      },
      {
        q: 'Can I use Obsession with ChatGPT or Claude?',
        a: 'Yes. Add Obsession as a connector and ask in plain words: call a supplier, sign in to a portal, follow up next week. The answer comes back in the chat, and every step is kept in your event log.',
      },
      {
        q: 'What can an AI agent do for a small business?',
        a: 'Text back missed calls, confirm appointments, call new leads within a minute, chase missing documents, track competitors’ prices and download invoices from supplier portals. Each runs on its own schedule.',
        link: { label: 'Browse blueprints', to: '/blueprints' },
      },
      {
        q: 'How is this different from automation tools?',
        a: 'Automation tools move data between apps you already use. Obsession gives an agent its own phone number, inbox and browser, so it can take a call, receive a sign-in code or work inside a portal. Its results still flow into those tools.',
      },
      {
        q: 'What does it cost?',
        a: 'Start on the Free plan, with no credit card. Each blueprint page shows what a typical month costs at your volume.',
        link: { label: 'Pricing', to: '/pricing' },
      },
      {
        q: 'Is it safe to let an agent contact people for us?',
        a: 'Every agent says it’s an AI, contacts only people who gave your business their number, uses only the logins you provide and stops at any identity check. Every step is kept in your event log with its evidence.',
        link: { label: 'How Obsession agents behave', to: '/agents' },
      },
    ],
  },

  final: {
    heading: 'Give your team’s first job to an agent, free.',
    capture: { kind: 'waitlist', source: 'no-code', button: 'Start free', interest: 'any' },
  },
}
