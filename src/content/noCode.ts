import type { KitReader } from './kitPaths'
import { ENTITY } from './site'
import type { Cta, Faq, Final, Meta, PersonaIcon } from './types'

/* /no-code: the page for teams that don't write code (pages/NoCode.tsx). Two ways in: hire the job done (pick a
   blueprint, and Obsession runs it) or make the AI the team already uses capable (Claude, ChatGPT, Zapier, Make, n8n).
   The story: a company's teams with their blueprints running (the hero's console, which the reader can drive); what an
   agent can do once it's equipped; the reader's own team's first job; every size, from 2 agents to millions; the two ways
   to start; the rules and the cost; questions; the form. It owns "ai agents without coding", "no code ai agents" and
   "ai agents for business teams". Every company, person and number in a picture is an example; prices, typical months
   and volumes come from content/prices.ts and the catalog, never typed here. */

export type NoCodeFormat = 'slack' | 'email' | 'crm' | 'sheet' | 'pdf' | 'assistant' | 'any'

/* A row in a console: its time, what happened (icon and words), and its tone. */
export type ConsoleRow = { at: string; icon: PersonaIcon; text: string; tone?: 'ok' | 'flag' }

export type NoCodePage = {
  meta: Meta
  hero: { pill: string; headline: string; sub: string; primary: Cta; secondary: Cta; note: string }
  /* The hero's picture: one example company's teams, each with its blueprint running. It cycles team by team until the
     reader picks one; each team's beat ends on its finding (`note`), drawn as a hairline and a label. */
  console: {
    org: string
    page: string
    search: string
    pick: string
    running: string
    teams: { id: string; name: string; reader: KitReader; icon: PersonaIcon; blueprint: string; count: string; format: NoCodeFormat; rows: ConsoleRow[]; note: string }[]
    status: (n: number) => string
    caption: string
  }
  equip: {
    heading: string
    line: string
    agent: { name: string; can: string; think: string[]; act: string }
    states: { alone: string; equipped: string; label: string }
    rows: { piece: string; icon: PersonaIcon; ability: string; alone: string; job: string; slug: string }[]
    note: string
    caption: string
  }
  jobs: {
    heading: string
    line: string
    typical: string
    moves: string
    teams: { id: string; name: string; reader: KitReader; icon: PersonaIcon; jobs: { slug: string; line: string }[]; moves: string[] }[]
    formats: { label: string; items: { id: NoCodeFormat; name: string }[]; note: string }
    all: (n: number) => Cta
  }
  scale: {
    heading: string
    line: string
    legend: string
    axis: string[]
    rows: { name: string; size: string; agents: number; plus?: boolean; job: string; slug: string }[]
    volume: { label: string; slugs: string[]; per: string }
    caption: string
  }
  ways: {
    heading: string
    line: string
    job: { kicker: string; title: string; line: string; cta: Cta }
    ai: { kicker: string; title: string; line: string; cta: Cta }
    /* Each picture tours its `examples` (23 Nov 2026, Seun: "more interactive and motion ... subtle cue for interactive,
       bring it to life"): a team's blueprint filled in, approved and running, with the day's result; a team's own AI
       asked in plain words, each step it takes and the answer. Every example is a blueprint or a job on the site. */
    sheet: {
      crumb: string
      button: string
      note: string
      tabsLabel: string
      examples: { tab: string; name: string; fields: [string, string][]; running: string; pips: number; result: string }[]
    }
    chat: {
      note: string
      tabsLabel: string
      chat: string
      examples: { app: string; ask: string; tool: string; steps: { at: string; text: string }[]; answer: string }[]
    }
    tools: string[]
    toolsNote: string
    caption: string
  }
  rules: { heading: string; items: { icon: PersonaIcon; text: string }[] }
  cost: { heading: string; line: string; link: Cta }
  dev: { heading: string; line: string; link: Cta }
  faq: Faq
  final: Final
}

/* Seun, 23 Nov 2026: not just AI agents, AI agents equipped to act ("kitted up ... empower ... equip"), for one person
   as well as a team ("a freelancer ... or a founder"). The headline says it and keeps the page's searched words ("ai
   agents ... without coding"); the sub makes "equipped" concrete at once and shows the scale. */
const headline = 'AI agents equipped to work for you and your team every day, without coding.'
const sub =
  'Each one has its own phone number, inbox and browser, so it can call, text, email and sign in. The same job runs at one location or 20,000. Front desks return every missed call, finance teams pull every invoice from their vendor portals, and a founder or freelancer answers every new enquiry within a minute.'

export const noCodePage: NoCodePage = {
  meta: {
    path: '/no-code',
    title: 'AI agents without coding: ready-made jobs for every team',
    description:
      'AI agents without coding for front desk, sales, finance and operations teams: ready-made jobs Obsession runs, or your own AI with a phone and inbox.',
    /* The search answer: the page's own claim, then the whole toolkit in the entity's first sentence (content/site.ts), so
       an assistant that quotes it names Obsession whole. */
    answer: `${headline} ${sub} ${ENTITY.split('. ')[0]}.`,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'For teams', path: '/no-code' },
    ],
  },

  hero: {
    pill: 'For anyone who doesn’t code',
    headline,
    sub,
    primary: { label: 'Browse blueprints', to: '/blueprints' },
    secondary: { label: 'Start free', to: '#join' },
    note: 'Free plan, no credit card.',
  },

  console: {
    org: 'Brightwell Group',
    page: 'Blueprints running',
    search: 'Search jobs and results',
    pick: 'Teams',
    running: 'Running',
    teams: [
      {
        id: 'front-desk',
        name: 'Front desk',
        reader: 'sales',
        icon: 'phone',
        blueprint: 'Missed call text back',
        count: '412 calls',
        format: 'slack',
        rows: [
          { at: '21:04', icon: 'phone', text: 'Missed call at the Leeds clinic' },
          { at: '21:04', icon: 'chat', text: 'Texted back: Thursday at 10:00 or 14:30?' },
          { at: '21:07', icon: 'chat', text: 'Reply: Thursday at 10 works' },
          { at: '21:07', icon: 'check', text: 'Booked Thursday 10:00, Leeds', tone: 'ok' },
        ],
        note: '96 booked overnight, posted to #front-desk',
      },
      {
        id: 'sales',
        name: 'Sales',
        reader: 'sales',
        icon: 'users',
        blueprint: 'Speed-to-lead callback',
        count: '310 leads',
        format: 'crm',
        rows: [
          { at: '09:12', icon: 'mail', text: 'New enquiry: kitchen refit, Bristol' },
          { at: '09:12', icon: 'phone', text: 'Called back in 41 seconds' },
          { at: '09:15', icon: 'check', text: 'Survey booked for Tuesday', tone: 'ok' },
          { at: '09:15', icon: 'record', text: 'Lead updated in the CRM' },
        ],
        note: 'Every lead called within a minute',
      },
      {
        id: 'finance',
        name: 'Finance',
        reader: 'founders',
        icon: 'check',
        blueprint: 'Invoice collector',
        count: '62 invoices',
        format: 'sheet',
        rows: [
          { at: '07:00', icon: 'key', text: 'Signed in to 60 vendor portals' },
          { at: '07:02', icon: 'mail', text: 'Sign-in code received and entered' },
          { at: '07:18', icon: 'check', text: '41 new invoices downloaded', tone: 'ok' },
          { at: '07:19', icon: 'stop', text: '2 portals asked for a new password', tone: 'flag' },
        ],
        note: 'Filed to the AP sheet before 07:30',
      },
      {
        id: 'marketing',
        name: 'Marketing',
        reader: 'marketing',
        icon: 'record',
        blueprint: 'Competitor tracking',
        count: '37 emails',
        format: 'email',
        rows: [
          { at: '08:00', icon: 'mail', text: 'Northfield: 30% off kitchens, ends Sunday' },
          { at: '08:00', icon: 'record', text: 'Halden cut 18 prices overnight', tone: 'flag' },
          { at: '08:01', icon: 'browser', text: 'Each offer page kept with its screenshot' },
          { at: '08:05', icon: 'mail', text: 'Summary sent to marketing', tone: 'ok' },
        ],
        note: '3 new offers before the team logs on',
      },
      {
        id: 'operations',
        name: 'Operations',
        reader: 'founders',
        icon: 'key',
        blueprint: 'Load tracking',
        count: '312 loads',
        format: 'slack',
        rows: [
          { at: '06:00', icon: 'key', text: 'Signed in to 8 carrier portals' },
          { at: '06:04', icon: 'browser', text: '312 loads read, every page kept' },
          { at: '06:05', icon: 'stop', text: '2 loads running late', tone: 'flag' },
          { at: '06:05', icon: 'chat', text: 'Posted to #ops with new arrival times', tone: 'ok' },
        ],
        note: 'Late loads flagged before customers ask',
      },
    ],
    status: (n) => `${n} blueprints running · results in Slack, a CRM, a sheet and email`,
    caption: 'One example company: every team’s job running on its own schedule, each result where that team works.',
  },

  equip: {
    heading: 'AI can already think. Equipped by Obsession, it can finish the job.',
    line: 'A chat assistant drafts the reply. An agent with its own phone number, inbox and browser makes the call, receives the code, signs in to the portal and follows up for days.',
    agent: { name: 'An AI agent', can: 'Can think', think: ['Plan the steps', 'Write the reply', 'Decide what’s next'], act: 'Can act' },
    states: { alone: 'On its own', equipped: 'Equipped by Obsession', label: 'Show the agent' },
    rows: [
      { piece: 'Phone', icon: 'phone', ability: 'Take and return calls', alone: 'No number to call from', job: 'Missed calls returned within a minute', slug: 'missed-call-text-back' },
      { piece: 'Inbox', icon: 'mail', ability: 'Receive sign-in codes and replies', alone: 'No address to receive a code', job: 'Invoices pulled from 300 vendor portals', slug: 'invoice-collector' },
      { piece: 'Browser', icon: 'browser', ability: 'Stay signed in to portals', alone: 'Can’t keep a session open', job: 'Loads read across 25 carrier portals', slug: 'load-tracking' },
      { piece: 'Persona', icon: 'persona', ability: 'Follow up for days', alone: 'Stops when the chat ends', job: 'Missing documents chased until they arrive', slug: 'document-chaser' },
    ],
    note: 'Each ability opens a job your team runs today',
    caption: 'The same agent on its own and equipped by Obsession. Each ability links to the blueprint it makes possible.',
  },

  jobs: {
    heading: 'Find your team’s first job.',
    line: 'Each blueprint is a finished job, with its typical month at your volume. Pick one, say what counts and where results go, and it keeps running until you change it.',
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

  scale: {
    heading: 'From 2 agents for a founder to millions on one platform.',
    line: 'The same blueprints run for one location or 20,000. A platform gives every user’s assistant its own number; a founder answers every enquiry within a minute. Obsession is built for millions of agents, and each blueprint page prices the month at your volume.',
    legend: 'Each step is ten times the last',
    axis: ['1', '10', '100', '1K', '10K', '100K', '1M'],
    rows: [
      { name: 'Apps and platforms', size: 'Millions of users', agents: 1000000, plus: true, job: 'Give every user’s assistant its own iMessage line and number', slug: 'imessage-assistant' },
      { name: 'Enterprises', size: '10,000+ people', agents: 120000, job: 'Reorder for 4,000 sites from 30 suppliers, one agent per account', slug: 'supplier-reorder-agent' },
      { name: 'Franchise networks', size: '1,000+ locations', agents: 20000, job: 'Text back every missed call at 20,000 locations', slug: 'missed-call-text-back' },
      { name: 'Agencies', size: '10 to 500 clients', agents: 3000, job: 'Shop 3,000 client and prospect stores every week', slug: 'mystery-shopper' },
      { name: 'Mid-market companies', size: '200 to 5,000 people', agents: 150, job: 'Call every inbound lead within a minute, across 3 brands', slug: 'speed-to-lead-callback' },
      { name: 'Founders and consultants', size: 'A team of one', agents: 2, job: 'Answer every new enquiry within a minute', slug: 'speed-to-lead-callback' },
    ],
    volume: { label: 'At volume, priced on each blueprint’s page', slugs: ['load-tracking', 'imessage-assistant', 'invoice-collector', 'missed-call-text-back'], per: 'a month' },
    caption: 'Example deployments by company size, on a scale where each step is ten times the last, and the largest typical month on four blueprint pages.',
  },

  ways: {
    heading: 'Start with a ready-made job, or with the AI tools you already use.',
    line: 'Hand Obsession a finished job, or give the AI your team already uses the phone, inbox and browser it was missing. Neither needs code, and many teams do both.',
    job: {
      kicker: 'Ready-made jobs',
      title: 'Pick a blueprint, and Obsession runs the job every day.',
      line: 'Say what counts and where results go, in plain words. Obsession runs it every day, for one location or thousands, until you change it.',
      cta: { label: 'Browse blueprints', to: '/blueprints' },
    },
    ai: {
      kicker: 'Your own AI tools',
      title: 'Give ChatGPT, Claude or Zapier a phone, an inbox and a browser.',
      line: 'Connect Obsession once, then ask in plain words. Your AI makes the call, receives the code or signs in, and every step is saved in your event log with the recording or screenshot behind it.',
      cta: { label: 'Start free', to: '#join' },
    },
    sheet: {
      crumb: 'Blueprints',
      button: 'Approve and run',
      note: 'Set up in plain words, running today',
      tabsLabel: 'See it for',
      examples: [
        {
          tab: 'Front desk',
          name: 'Missed call text back',
          fields: [
            ['When', 'A call goes unanswered'],
            ['Do', 'Text back within a minute, offer the next free slot'],
            ['Where', '240 clinics'],
            ['Results to', '#front-desk in Slack'],
          ],
          running: 'Running at 240 clinics',
          pips: 24,
          result: 'Today: 812 missed calls texted back, 356 rebooked',
        },
        {
          tab: 'Finance',
          name: 'Invoice collector',
          fields: [
            ['When', 'Every Friday'],
            ['Do', 'Download every new invoice and receipt'],
            ['Where', '120 vendor portals'],
            ['Results to', 'A Google Sheet, filed by vendor'],
          ],
          running: 'Running across 120 portals',
          pips: 24,
          result: 'This week: 1,460 invoices filed, none missed',
        },
        {
          tab: 'Marketing',
          name: 'Competitor tracking',
          fields: [
            ['When', 'Every Monday'],
            ['Do', 'Keep every email, text and price each competitor sends'],
            ['Where', '120 competitors'],
            ['Results to', '#marketing in Slack'],
          ],
          running: 'Watching 120 competitors',
          pips: 24,
          result: 'This week: 2,880 emails and 96 price changes',
        },
        {
          tab: 'Operations',
          name: 'Load tracking',
          fields: [
            ['When', '4 times a day'],
            ['Do', 'Read every load’s status, ETA and proof of delivery'],
            ['Where', '60 carrier portals'],
            ['Results to', 'One Google Sheet'],
          ],
          running: 'Reading 60 carrier portals',
          pips: 24,
          result: 'Today: 1,800 checks, 3 loads delayed',
        },
        {
          tab: 'Freelancer',
          name: 'Mystery shopping',
          fields: [
            ['When', 'Every week'],
            ['Do', 'Shop each client’s store as a new customer'],
            ['Where', '8 client stores'],
            ['Results to', 'A report per client'],
          ],
          running: 'Shopping 8 client stores',
          pips: 8,
          result: 'This week: 2 missing reminders, each with its screenshot',
        },
      ],
    },
    chat: {
      note: 'Your own AI, now able to call',
      tabsLabel: 'Ask from',
      chat: 'New chat',
      examples: [
        {
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
        {
          app: 'ChatGPT',
          ask: 'Sign in to the Corbel Supply portal and download October’s invoice.',
          tool: 'Obsession · browser and inbox',
          steps: [
            { at: '10:31', text: 'Signed in to the Corbel Supply portal' },
            { at: '10:31', text: 'Entered the sign-in code from the ops inbox' },
            { at: '10:32', text: 'Downloaded invoice INV-20931' },
          ],
          answer: 'Done. October’s invoice is saved, and every page it opened is in your event log.',
        },
        {
          app: 'Zapier',
          ask: 'When a lead fills in our pricing form, text them within a minute and offer a call.',
          tool: 'Obsession · phone',
          steps: [
            { at: '09:02', text: 'New form entry from the pricing page' },
            { at: '09:02', text: 'Texted the lead from the sales number' },
            { at: '09:05', text: 'The lead booked Thursday at 14:00' },
          ],
          answer: 'Booked. The text, the reply and the booking are in your event log.',
        },
      ],
    },
    tools: ['Claude', 'ChatGPT', 'Zapier', 'Make', 'n8n', 'Clay'],
    toolsNote: 'Using a tool that isn’t here? We build the integration.',
    caption: 'Two example teams: one approves a blueprint, the other asks its own AI to make the call.',
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
    link: { label: 'See the API and MCP', to: '/developers' },
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
        link: { label: 'See pricing', to: '/pricing' },
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
