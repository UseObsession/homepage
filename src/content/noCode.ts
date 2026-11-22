import type { KitReader } from './kitPaths'
import type { Cta, Faq, Final, HomeTeams, Meta, PersonaIcon } from './types'
import { page as home } from './pages/home'

/* /no-code (23 Nov 2026; beside pricing.ts, since content/pages/ holds only Page words, _research/seo/no-code-23nov/PLAN.md): the front door for teams that don't write code, beside
   /developers, as the hero's two doors and the bar's two links. Seun: "a dedicated page for them, premium and clear to
   anyone ... value driven ... gives them the full picture of how they would leverage blueprints", then "professional
   copy, not dumbed down ... without vagueness". It owns "ai agents for non technical people", "ai agents without
   coding" and "ai agents for business teams" (Google suggestions, 23 Nov). Drawn by pages/NoCode.tsx in this order:
   the hero with a week of results; what an agent does for each team; how it works (Home's teams section); results in
   any format; what it costs; the rules; the handoff to developers; questions; the form. Every company, number and
   message is an example; prices come from content/prices.ts. */

export type NoCodeFormat = 'slack' | 'email' | 'crm' | 'sheet' | 'pdf' | 'assistant' | 'any'

export type NoCodePage = {
  meta: Meta
  /* `examples`: blueprints a reader recognises as work they've already tried to hand off, each linking its page. */
  hero: { pill: string; headline: string; sub: string; primary: Cta; secondary: Cta; note: string; examples: { label: string; items: { slug: string; label: string }[] } }
  /* The hero's picture: a working week at one invented company, each day's results from different teams, each in the
     format that team works in. */
  week: {
    label: string
    company: string
    caption: string
    days: { day: string; items: { team: string; reader: KitReader; format: NoCodeFormat; text: string }[] }[]
  }
  teams: {
    heading: string
    line: string
    kpisLabel: string
    items: { id: string; name: string; reader: KitReader; icon: PersonaIcon; jobs: { slug: string; line: string }[]; kpis: string[] }[]
    all: Cta
  }
  how: HomeTeams
  formats: {
    heading: string
    line: string
    result: { title: string; detail: string; at: string }
    items: { id: NoCodeFormat; name: string; place: string }[]
    note: string
  }
  cost: { heading: string; line: string; free: string; link: Cta }
  rules: { heading: string; line: string; items: { icon: PersonaIcon; text: string }[] }
  dev: { heading: string; line: string; link: Cta }
  faq: Faq
  final: Final
}

const headline = 'AI agents that make calls, answer email and work in websites, with no code.'
const sub =
  'The calls your team misses after hours, the documents it chases by email, the supplier portals someone checks each morning. Each becomes a blueprint, run end to end by an AI agent with its own phone number, inbox and browser, and the results land in the tools your team already uses.'

export const noCodePage: NoCodePage = {
  meta: {
    path: '/no-code',
    title: 'AI agents that make calls and use websites, without coding',
    description:
      'AI agents that make calls, answer email and work in websites for your team, without coding. Pick a blueprint and get results in the tools you use.',
    answer:
      'AI agents that make calls, answer email and work in websites, with no code. A blueprint hands each job, from missed calls to supplier portals, to an agent with its own phone number, inbox and browser, and delivers the results to the tools your team already uses.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'No code', path: '/no-code' },
    ],
  },

  hero: {
    pill: 'No code',
    headline,
    sub,
    primary: { label: 'Browse blueprints', to: '/blueprints' },
    secondary: { label: 'Start free', to: '#join' },
    note: 'Free plan, no credit card.',
    examples: {
      label: 'Teams start with',
      items: [
        { slug: 'missed-call-text-back', label: 'Text back every missed call' },
        { slug: 'speed-to-lead-callback', label: 'Call every new lead within a minute' },
        { slug: 'document-chaser', label: 'Chase missing documents' },
        { slug: 'invoice-collector', label: 'Download invoices from vendor portals' },
        { slug: 'competitor-tracking', label: 'Track competitors’ emails and prices' },
        { slug: 'agent-checkout-test', label: 'Test your checkout as an AI shopper' },
      ],
    },
  },

  week: {
    label:
      'A working week at Brightwell, an invented home services company with 30 branches. Monday: 412 weekend missed calls texted back, 96 of them booked, in Slack; a summary of 40 competitors’ emails and prices, by email. Tuesday: every web lead called within a minute, with one slow form flagged in the CRM; supplier prices read at 14 portals into a sheet. Wednesday: the AI receptionist checked, one wrong price found, in Slack; 212 receipts matched to their orders in a sheet. Thursday: 86 live ads checked, one sold-out landing page flagged, in Slack; 340 appointments confirmed for Friday by email. Friday: the week’s results as a PDF report, and the answers in the team’s AI assistant.',
    company: 'Brightwell · 30 branches',
    caption: 'One week at an invented company: each team’s results, in the format that team works in.',
    days: [
      {
        day: 'Mon',
        items: [
          { team: 'Front desk', reader: 'sales', format: 'slack', text: '412 weekend missed calls texted back, 96 booked' },
          { team: 'Marketing', reader: 'marketing', format: 'email', text: '40 competitors: 18 price changes, 3 new offers' },
        ],
      },
      {
        day: 'Tue',
        items: [
          { team: 'Sales', reader: 'sales', format: 'crm', text: 'Every web lead called within a minute; 1 form flagged' },
          { team: 'Operations', reader: 'founders', format: 'sheet', text: 'Supplier prices read at 14 portals, 6 changes' },
        ],
      },
      {
        day: 'Wed',
        items: [
          { team: 'Support', reader: 'developers', format: 'slack', text: 'AI receptionist checked: 1 wrong price quoted' },
          { team: 'Finance', reader: 'founders', format: 'sheet', text: '212 receipts matched to orders, 2 flagged' },
        ],
      },
      {
        day: 'Thu',
        items: [
          { team: 'Growth', reader: 'agencies', format: 'slack', text: '86 live ads checked; 1 sold-out landing page' },
          { team: 'Front desk', reader: 'sales', format: 'email', text: '340 of Friday’s appointments confirmed' },
        ],
      },
      {
        day: 'Fri',
        items: [
          { team: 'Leadership', reader: 'marketing', format: 'pdf', text: 'The week’s results in one report' },
          { team: 'Everyone', reader: 'developers', format: 'assistant', text: 'Ask the team’s AI assistant what changed' },
        ],
      },
    ],
  },

  teams: {
    heading: 'The work your team can now hand to an AI agent.',
    line: 'Each job below is a blueprint that runs today. Pick one, set it up for your business, and it keeps running on your schedule.',
    kpisLabel: 'Measured in',
    items: [
      {
        id: 'front-desk',
        name: 'Front desk and bookings',
        reader: 'sales',
        icon: 'phone',
        jobs: [
          { slug: 'missed-call-text-back', line: 'Text back every missed call within seconds, then book it' },
          { slug: 'appointment-reminders', line: 'Confirm, remind and rebook every appointment' },
          { slug: 'voice-agent-check', line: 'Test your AI receptionist’s answers every morning' },
        ],
        kpis: ['Bookings', 'No-shows', 'Missed calls'],
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
        kpis: ['Speed to lead', 'Meetings booked', 'Pipeline'],
      },
      {
        id: 'support',
        name: 'Support and customer experience',
        reader: 'developers',
        icon: 'chat',
        jobs: [
          { slug: 'support-bot-check', line: 'Ask your support bot what customers ask most' },
          { slug: 'drift-watch', line: 'Catch the day your AI agent’s answers change' },
          { slug: 'resolution-check', line: 'Test every resolution your AI vendor bills for' },
        ],
        kpis: ['Resolution rate', 'Complaints', 'CSAT'],
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
        kpis: ['Offers matched', 'Campaign revenue'],
      },
      {
        id: 'ecommerce',
        name: 'Ecommerce and growth',
        reader: 'agencies',
        icon: 'cart',
        jobs: [
          { slug: 'ad-landing-check', line: 'Check every live ad’s landing page each morning' },
          { slug: 'mystery-shopper', line: 'Shop your own store as a new customer' },
          { slug: 'agent-checkout-test', line: 'Test your checkout the way shoppers’ AI agents meet it' },
        ],
        kpis: ['Conversion rate', 'Wasted ad spend'],
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
        kpis: ['Hours back', 'Stockouts', 'On-time delivery'],
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
        kpis: ['Receipts matched', 'Days to close'],
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
        kpis: ['Clients kept', 'Revenue per client'],
      },
    ],
    all: { label: 'See every blueprint', to: '/blueprints' },
  },

  how: {
    ...home.homeTeams!,
    heading: 'Configured in plain language, running on your schedule.',
    line: 'Choose a blueprint, set what it watches or answers and how often, and decide where results go. It keeps running until you change it.',
  },

  formats: {
    heading: 'The same result, in whatever format your team works in.',
    line: 'Every blueprint delivers to the tools you already use. If yours is not on this list, we build the integration.',
    result: { title: 'Lead response · UK demo form', detail: 'No call 2 hours after the enquiry', at: 'Tue 09:30' },
    items: [
      { id: 'slack', name: 'Slack', place: '#sales' },
      { id: 'email', name: 'Email', place: 'A morning summary' },
      { id: 'crm', name: 'Your CRM', place: 'A field on the lead' },
      { id: 'sheet', name: 'Google Sheets', place: 'A new row' },
      { id: 'pdf', name: 'PDF report', place: 'Weekly, for the team' },
      { id: 'assistant', name: 'Your AI assistant', place: 'Ask it what changed' },
      { id: 'any', name: 'Any other tool', place: 'We build the integration' },
    ],
    note: 'Clay, webhooks, Zapier, Make and n8n work too.',
  },

  cost: {
    heading: 'Start free. Pay only for what each blueprint uses.',
    line: 'Every blueprint page shows what a typical month costs at your volume, priced from the same list as everything else.',
    free: 'Free plan, no credit card.',
    link: { label: 'See pricing', to: '/pricing' },
  },

  rules: {
    heading: 'Operating rules every agent follows.',
    line: 'They apply to every blueprint, on every plan.',
    items: [
      { icon: 'person', text: 'It identifies itself as an AI to anyone it speaks to.' },
      { icon: 'phone', text: 'It texts and calls only people who gave your business their number.' },
      { icon: 'key', text: 'It signs in only with logins you provide.' },
      { icon: 'stop', text: 'It stops at any identity check, and before payment unless you give it your card.' },
      { icon: 'record', text: 'Every step is recorded with its evidence: the email, screenshot or recording.' },
    ],
  },

  dev: {
    heading: 'When your team wants an agent of its own.',
    line: 'Developers build on the same pieces: an inbox, a phone number and a browser for each agent, through one API. Your blueprints keep running alongside it.',
    link: { label: 'For developers', to: '/developers' },
  },

  faq: {
    heading: 'Before your team starts.',
    items: [
      {
        q: 'Do I need to know how to code?',
        a: 'No. You choose a blueprint, set it up in plain language and decide where results go. If your team later wants its own agent, developers build on the same pieces.',
      },
      {
        q: 'What can an AI agent do for a small business?',
        a: 'Text back missed calls, confirm appointments, call new leads within a minute, chase missing documents, track competitors’ prices and download invoices from supplier portals. Each runs on its own schedule.',
        link: { label: 'Every blueprint', to: '/blueprints' },
      },
      {
        q: 'How is this different from automation tools?',
        a: 'Automation tools move data between apps you already use. A blueprint gives an AI agent its own phone number, inbox and browser. That lets it do the work that needs them: take a call, receive a sign-in code or work inside a portal. Its results can still flow into those tools.',
      },
      {
        q: 'Where do results go?',
        a: 'Wherever your team works: Slack, email, your CRM, Clay, Google Sheets, a PDF report or your AI assistant. For any other tool, we build the integration.',
      },
      {
        q: 'What does it cost?',
        a: 'Start on the Free plan, with no credit card. Each blueprint page shows what a typical month costs at your volume.',
        link: { label: 'Pricing', to: '/pricing' },
      },
      {
        q: 'Is it safe to let an agent contact people for us?',
        a: 'Every agent identifies itself as an AI, contacts only people who gave your business their number, uses only the logins you provide and stops at any identity check. Every step is recorded with its evidence.',
        link: { label: 'How Obsession agents behave', to: '/agents' },
      },
    ],
  },

  final: {
    heading: 'Hand Obsession your team’s first job, free.',
    capture: { kind: 'waitlist', source: 'no-code', button: 'Start free', interest: 'any' },
  },
}
