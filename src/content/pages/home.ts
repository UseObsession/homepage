import { pieceOrder, piecePaths } from '../piecePaths'
import type { PieceId } from '../prices'
import type { HomePieces, Page, PersonaIcon } from '../types'

/* Home (/), the pieces rewrite (21 Nov 2026, James): Obsession sells the pieces an AI agent needs (email, phone,
   messaging, browser, sandbox) through one API and one bill, and the persona that puts them under one identity. Two
   readers: developers who take one piece or many (nothing stops a company using only the email), and teams who pick a
   recipe and we run it. A recipe is a job that runs on Obsession beside the pieces, one of ours or a developer's own,
   and writes its results to the event log: 1 per account, where every event from every piece, persona and recipe lands
   (James, 21 Nov). The persona is the bundle, not the headline. The page reads, in order
   (pages/Home.tsx): 1 the hero: what we sell, "One API, one bill.", the 2 buttons, the copyable call and 3 facts >
   2 #pieces: "One API, not five vendors.", the 6 pieces as 1 sheet, each linking to its page (content/piecePaths.ts)
   with the call that starts it (James, 22 Nov: the claim moved here and its own section went) >
   3 #personas: the pieces under one identity, as a stacked slab diagram of 5 parts (James, 22 Nov: inbox and number,
   browser and sandbox, each 1 slab) >
   4 #how: how it works, 1 section in place of the fleet timeline and the delivery plates (James, 21 Nov): set up
   once, then the loop through your event log as 1 picture, then the link to every channel's code on /developers
   (components/persona/HomeHowItWorks) > 5 #recipes: blueprints beside the pieces, 5 tiles, the web behind the login
   as 1 of them, to its use case page >
   6 #build: the code > 7 #questions: 5 for a first-time reader (the developer ones live on /developers) >
   8 #join: the early access form. James, 22 Nov: the shorter Home; "Wakes in milliseconds, not minutes" (its 50 ms is
   in the loop picture), the channel cards (the questions and /developers list them), 3 tiles and 2 questions left.
   Home shows no prices and no pricing link (James, 20 Nov): prices live in content/prices.ts, on /pricing and the piece
   pages. Nothing here bills by the minute. The product is described as designed (50 ms, free while a persona waits),
   never with build-state caveats; country is a feature, never the pitch. People and companies are invented, at .example
   addresses, with US numbers in the 555-01XX range kept for fiction, and carry no "Example" tag. Never name a
   competitor, never "AI customers"; a persona is never defined as a customer. */

/* The 6 pieces, in the nav's order (pieceOrder); each cell links to its page (piecePaths). */
const PIECES: Record<PieceId, { icon: PersonaIcon; name: string; line: string; call: string }> = {
  email: {
    icon: 'mail',
    name: 'Email',
    line: 'Inboxes your agents send and receive from, with threads and attachments.',
    call: 'obsession.inboxes.create()',
  },
  phone: {
    icon: 'phone',
    name: 'Phone',
    line: 'Numbers that send and receive texts and calls, with your own voice agent or ours.',
    call: 'obsession.numbers.create({ country: "US" })',
  },
  messaging: {
    icon: 'chat',
    name: 'Messaging',
    line: 'iMessage lines, Slack and Telegram, and WhatsApp for support, sales, bookings and notifications.',
    call: 'obsession.messaging.connect({ channel: "imessage" })',
  },
  browser: {
    icon: 'browser',
    name: 'Browser',
    line: 'A cloud browser on a home connection that stays signed in.',
    call: 'obsession.browsers.create({ home: "US" })',
  },
  sandbox: {
    icon: 'sandbox',
    name: 'Sandbox',
    line: 'A computer to run code in, started only when a task needs it.',
    call: 'obsession.sandboxes.create()',
  },
  personas: {
    icon: 'persona',
    name: 'Personas',
    line: 'Every piece under one identity, free while it waits.',
    call: 'obsession.personas.create({ inbox: true, phone: "US" })',
  },
}

const pieces: HomePieces = {
  heading: 'One API, not five vendors.',
  line: 'An inbox, a number, messaging, a browser and a computer to run code, on one key, one webhook and one bill.',
  items: pieceOrder.map((id) => ({ ...PIECES[id], to: piecePaths[id], whole: id === 'personas' })),
}

/* Every form on Home is the early access form. Its line ("Free plan, no credit card.") is content/join.ts. */
const access = {
  kind: 'waitlist',
  button: 'Start free',
  interest: 'any',
} as const

export const page: Page = {
  meta: {
    path: '/',
    title: 'Obsession: inboxes, phone numbers and browsers for AI agents',
    description:
      'An inbox, a phone number and a browser for every AI agent, on one API and one bill, with every action in one event log. Build on it, or pick a blueprint.',
    /* The sentence AI assistants quote. Its first sentence opens the first answer below (scripts/prerender.mjs). */
    /* Its first sentence must be on the page (scripts/prerender.mjs): since Home's questions went (23 Nov 2026), it opens
       with the headline's first line. */
    answer:
      'The toolkit for AI agents. Obsession gives every AI agent its own inbox, phone number and browser, so no agent runs on a person’s borrowed login, through one API and one bill. Use one piece, like email, or all of them under one identity, with messaging and a sandbox when a job needs them. Every email, text, call and page lands in your event log.',
    ogLine: 'An inbox, a phone number and a browser for every agent.',
    ogImage: '/og/home.png',
  },

  hero: {
    /* 26 Nov 2026 (the copy plan; both founders' yes needed): the toolkit moves to the label, the headline names the problem
       every buyer already has, and the line under it names the pieces and the record. Ten cold B2B readers: best for 5,
       worst for none, highest trust. James's 21 Nov headline was "The toolkit for AI agents. One API, one bill." */
    pill: 'The toolkit for AI agents',
    pillTo: '#pieces',
    headline: 'Stop running AI agents on borrowed logins.',
    /* 23 Nov 2026 (Seun, version 1 of the hero copy): the whole toolkit in one sentence (every piece, under one identity),
       then both ways in, so a developer and a team that doesn't code each see their door on the first screen. */
    sub: 'Give every AI agent its own phone number, inbox and browser under one identity, on one API and one bill. Every email, text, call and page lands in one event log your security team can audit.',
    /* The hero's main action (23 Nov 2026): the email form, then the sign-up card asks which way in. */
    capture: { ...access, source: 'home-hero' },
    /* The scale and the proof, under the form. */
    /* 26 Nov 2026 (Seun): scale is shown to 100 million, never a lower top. */
    note: 'From one agent to 100 million, each under its own name.',
    secondary: { label: 'Browse blueprints', to: '/blueprints' },
    /* 3 facts, true by design: no prices, no country. 50 ms is James's figure (20 Nov). */
    proof: [
      { value: '1 API', label: 'for every piece, on one bill' },
      { value: '50 ms', label: 'to act on a new message' },
      { value: 'Free', label: 'while a persona waits' },
    ],
    consoleHeading: [],
  },

  personaStart: {
    primary: { label: 'Start free', to: '#join' },
    chip: { code: 'obsession.personas.create({ inbox: true, phone: "US", browser: true })', copy: 'Copy the code', copied: 'Copied' },
    doors: {
      dev: { label: 'For developers', cta: { label: 'See the API and MCP', to: '/developers' } },
      noCode: {
        label: 'For anyone who doesn’t code',
        line: 'Choose a ready-made job, set it up in plain language, and get results in the tools you already use.',
        cta: { label: 'Browse blueprints', to: '/blueprints' },
      },
    },
    form: true,
  },

  /* The share image's card (scripts/og.mjs): 1 persona's events in the event log, Juno of the slab diagram, through 3 pieces. */
  shareFindings: {
    title: 'Juno, Larkfield bookings',
    aside: 'Event log',
    rows: [
      { company: 'Email', finding: '“Can we move to Friday?”', when: '09:04' },
      { company: 'WhatsApp', finding: 'A table for 4 at 7', when: '12:30' },
      { company: 'Call', finding: 'A booking question, 2 min', when: '18:40' },
    ],
    foot: 'Every email, text and call, dated',
  },

  homePieces: pieces,

  /* The blueprints (#blueprints, 22 Nov 2026): one section, after the persona. On the 22 Nov call the kits became six
     types of blueprints and the two Home sections became this one (components/persona/HomeBlueprints). The heading keeps
     James's words from 22 Nov; blueprints serve developers too, so it no longer opens "For teams without engineers". */
  homeBlueprints: {
    /* 26 Nov 2026: the problem section already says "Not building agents? Pick a blueprint.", so this one names the seven. */
    heading: 'Seven types of blueprints, one for each job AI agents do.',
    line: 'We run each one. Results arrive in any format: Slack, email, your CRM, Clay, Google Sheets, a PDF or your own Claude agent.',
    unit: { one: 'blueprint', many: 'blueprints' },
    more: 'more',
    all: { label: 'Browse blueprints', to: '/blueprints' },
  },

  /* For teams that don't write code (#teams, 23 Nov 2026, components/persona/HomeTeams). Seun: will non-technical teams
     understand they can use blueprints to achieve amazing things; a clear-to-anyone section that gives them the full
     view. Five teams, each one blueprint that lives on the site today, its job as a sentence with blanks, what lands
     and the KPIs it moves. Every company, number and message is an example. */
  homeTeams: {
    heading: 'Your team defines the job. Obsession runs it, every day.',
    line: 'Each blueprint is a finished job you configure in plain language: what to watch or answer, how often, and where results go. Obsession runs it on an agent with its own phone number, inbox and browser, across one company or thousands. Or describe a job of your own, and we spin up an agent to run it.',
    own: { name: 'Your own job', sub: 'Described in your words', crumb: 'New blueprint' },
    teamsLabel: 'Your team',
    steps: { pick: 'Choose a blueprint', fill: 'Set it up in plain language', get: 'Receive results where you work' },
    open: 'See the blueprint',
    formats: { label: 'Also delivered to', items: ['Email', 'Your CRM', 'Clay', 'Google Sheets', 'A PDF report', 'Your AI assistant', 'Any tool you use'] },
    kpisLabel: 'Measured in',
    exampleTag: 'Example',
    teams: [
      {
        id: 'marketing',
        name: 'Marketing and CRM',
        reader: 'marketing',
        slug: 'competitor-tracking',
        sentence: ['Sign up to ', { v: '40 competitors' }, ' as ', { v: 'a new UK subscriber' }, ', keep ', { v: 'every email, text and price' }, ', and post ', { v: 'a Monday summary' }, ' in ', { v: '#marketing' }, '.'],
        result: {
          where: '#marketing',
          app: 'Slack',
          at: 'Mon 08:00',
          title: 'Monday summary · 40 competitors',
          lines: [
            { tone: 'ok', text: '312 emails, 41 texts and 18 price changes since last Monday' },
            { tone: 'info', text: 'Competitor 12 started 25% off everything, ending Sunday' },
            { tone: 'info', text: 'Competitor 7 raised its welcome code to 15%' },
          ],
        },
        kpis: ['Offers matched', 'Campaign revenue'],
      },
      {
        id: 'sales',
        name: 'Sales and RevOps',
        reader: 'sales',
        slug: 'lead-leaks',
        sentence: ['Submit ', { v: 'our 3 demo forms' }, ' as ', { v: 'a new lead' }, ' ', { v: 'every morning' }, ', time ', { v: 'the first email and call' }, ', and flag ', { v: 'anything over 5 minutes' }, ' in ', { v: '#sales' }, '.'],
        result: {
          where: '#sales',
          app: 'Slack',
          at: 'Tue 09:30',
          title: 'Lead response · 3 forms',
          lines: [
            { tone: 'ok', text: 'US demo form: email in 2 min, call in 4 min' },
            { tone: 'fail', text: 'UK demo form: email in 3 min, no call after 2 hours' },
            { tone: 'warn', text: 'Pricing form: no reply yet, 1 hour in' },
          ],
        },
        kpis: ['Speed to lead', 'Meetings booked', 'Pipeline'],
      },
      {
        id: 'support',
        name: 'Support and CX',
        reader: 'developers',
        slug: 'voice-agent-check',
        sentence: ['Call ', { v: 'our AI receptionist' }, ' as ', { v: '3 new patients' }, ' ', { v: 'every morning' }, ', wait ', { v: '48 hours' }, ' for what it promised, and report ', { v: 'every wrong answer' }, ' in ', { v: '#support' }, '.'],
        result: {
          where: '#support',
          app: 'Slack',
          at: 'Wed 09:00',
          title: 'Morning check · 3 calls',
          lines: [
            { tone: 'ok', text: 'Call 1: booked Thursday 10:00, confirmation text arrived' },
            { tone: 'fail', text: 'Call 2: quoted the consult as free; your price list says £50' },
            { tone: 'warn', text: 'Call 3, from Monday: callback promised, none after 48 hours' },
          ],
        },
        kpis: ['Bookings', 'Complaints', 'First-contact resolution'],
      },
      {
        id: 'ecommerce',
        name: 'Ecommerce and growth',
        reader: 'founders',
        slug: 'ad-landing-check',
        sentence: ['Open ', { v: 'every live ad' }, ' as ', { v: 'a shopper in the UK' }, ' ', { v: 'every morning' }, ', and flag ', { v: 'a broken page, a wrong price or a sold-out item' }, ' in ', { v: '#growth' }, '.'],
        result: {
          where: '#growth',
          app: 'Slack',
          at: 'Thu 07:15',
          title: 'Ad landing check · 86 live ads',
          lines: [
            { tone: 'ok', text: '84 pages load with the right offer and price' },
            { tone: 'fail', text: 'Ad 31 sends shoppers to a sold-out jacket' },
            { tone: 'warn', text: 'Ad 52 promises 20% off; the page shows 10%' },
          ],
        },
        kpis: ['Wasted ad spend', 'Conversion rate', 'Return on ad spend'],
      },
      {
        id: 'agencies',
        name: 'Agencies',
        reader: 'agencies',
        slug: 'mystery-shopper',
        sentence: ['Shop ', { v: 'all 45 client stores' }, ' as ', { v: 'a first-time shopper' }, ' ', { v: 'every week' }, ', and send ', { v: 'each missing email, with its screenshot' }, ' to ', { v: 'a report per client' }, '.'],
        note: 'With each store owner’s OK.',
        result: {
          where: 'Report per client',
          app: 'PDF',
          at: 'Fri 16:00',
          title: 'Client stores · 45 shopped this week',
          lines: [
            { tone: 'ok', text: '43 sent their welcome email within 5 minutes' },
            { tone: 'fail', text: 'Client 12: no basket reminder in 48 hours' },
            { tone: 'warn', text: 'Client 30: the welcome code is refused at checkout' },
          ],
        },
        kpis: ['Clients kept', 'Revenue per client'],
      },
    ],
    includes: {
      heading: 'Included with every blueprint',
      items: [
        { icon: 'persona', name: 'Its own phone number, inbox and browser', line: 'One identity, so every reply, call and sign-in code comes back to the agent.' },
        { icon: 'record', name: 'Evidence behind every result', line: 'The original email, screenshot or call recording, timestamped.' },
        { icon: 'webhook', name: 'Delivered in any format', line: 'Slack, email, your CRM, Clay, Google Sheets, a PDF report or your AI assistant. For any other tool, we build the integration.' },
        { icon: 'stop', name: 'Clear operating rules', line: 'It identifies itself as an AI, uses only the logins you provide and works within a monthly spend limit you set on its key.' },
      ],
    },
    primary: { label: 'Browse blueprints', to: '/blueprints' },
    secondary: { label: 'Start free', to: '#join' },
    free: 'Free plan, no credit card.',
  },

  /* The problem and the answer (#act, 22 Nov 2026, components/persona/HomeProblem), right after the hero. Seun: agents can
     think, the problem is equipping them, the new-hire angle, what they're able to do, and blueprints too (never one API
     and one bill as the problem; that is the pieces section's line). Juno at Larkfield is the persona section's example,
     invented. */
  homeProblem: {
    /* 26 Nov 2026 (the copy plan, Seun's yes): the problem is the borrowed login. A new hire gets their own address,
       number and logins on day one; most agents borrow a person's, so nobody can tell who did what. */
    heading: 'Your AI agent can think. Obsession equips it to act as itself.',
    line: 'A new hire gets an email address, a phone number and logins of their own on day one. Most AI agents borrow a person’s, so every email and sign-in looks like theirs and nobody can tell who did what. Obsession gives each agent its own, under one identity, with every action in one event log.',
    states: { alone: 'On a borrowed login', equipped: 'Equipped by Obsession', label: 'Show the agent' },
    card: {
      name: 'Juno',
      role: 'AI agent, bookings at Larkfield',
      think: { label: 'Can think', items: ['Plan the steps', 'Write the reply', 'Decide what’s next'] },
      act: {
        label: 'Can act',
        locked: 'Not as itself',
        with: 'with',
        items: [
          { ability: 'Get a login code', piece: 'email', name: 'Email', to: '/email' },
          { ability: 'Take a customer’s call', piece: 'phone', name: 'Phone', to: '/phone' },
          { ability: 'Reply on WhatsApp or iMessage', piece: 'messaging', name: 'Messaging', to: '/messaging' },
          { ability: 'Stay signed in to a portal', piece: 'browser', name: 'Browser', to: '/browser' },
          { ability: 'Run the code it wrote', piece: 'sandbox', name: 'Sandbox', to: '/sandbox' },
          { ability: 'Show you what it did', piece: 'personas', name: 'Event log', to: '/personas' },
        ],
      },
      ids: [
        { label: 'Email', none: 'maya@larkfield.example', value: 'juno@larkfield.example', borrowed: true },
        { label: 'Phone', none: 'None', value: '+1 415 555 0142' },
        { label: 'Logins', none: 'Maya’s password', value: 'Only the ones you give it', borrowed: true },
      ],
      online: 'Ready for work',
      offline: 'On Maya’s login',
      event: {
        label: 'Latest event',
        none: 'No events yet',
        at: '09:41:07',
        name: 'booking.changed',
        text: 'By juno@larkfield.example, with the original',
        borrowed: { at: '09:41:07', name: 'booking.changed', text: 'By maya@larkfield.example. Maya, or the agent?' },
      },
    },
    blueprints: {
      title: 'Not building agents? Pick a blueprint.',
      line: 'Obsession runs the job on the same pieces and sends you the results.',
      slugs: ['document-chaser', 'voice-agent-check', 'mystery-shopper'],
      runs: 'Runs on',
      out: 'Results land in Slack, a sheet, your CRM or our dashboard.',
      link: { label: 'Browse blueprints', to: '/blueprints' },
    },
    caption: 'One example AI agent on a person’s login, then equipped by Obsession. Larkfield and Maya are invented.',
    link: { label: 'See every piece', to: '#pieces' },
  },

  /* 26 Nov 2026: the persona section ("A persona is one AI agent with its own inbox, number and browser.") left the home
     page, so each idea is told once: Juno's card and the Personas piece carry the persona (Vega, Drew, Miles). */

  /* A blueprint is a job that runs on Obsession beside the pieces and writes its results to the event log: one of ours,
     ready to run, or your own. Mystery shopping is the big tile and 4 sit beside it, so the 3 column grid closes
     (James, 22 Nov: 5 tiles, not 8); every tile links to its blueprint page (content/recipes), except the web behind the login, which links to its use
     case page. `status` says who it fits, and each tile's hue is
     that reader (styles/accents.css). The heading is James's (21 Nov), its comma included: it speaks to the reader. */



  /* The two ways in (#start, 23 Nov 2026), the last section before the sign-up. Seun: funnel developers and teams that
     don't develop to their own page, and make it clear Obsession works for both; premium, concise, clear to anyone, a
     picture they can see themselves in. Each card is one link: developers to /developers, teams to /no-code. */
  homeDoors: {
    /* 26 Nov 2026 (the copy plan): four ways in, Build, Run, Companies and Resell, on the same pieces and identity. */
    heading: 'Build on it, hand it the job, roll it out across teams, or resell it.',
    scale: {
      heading: 'One agent or 100 million, each with its own number, inbox and browser.',
      line: 'Add agents as the work grows. Each one gets its own identity, and you pay for what each one uses.',
      label: 'Agents',
      steps: [
        { n: 1, short: '1', case: 'A freelancer’s agent answers every new enquiry within a minute.' },
        { n: 10, short: '10', case: 'A founder runs an agent for each product line, each with its own number.' },
        { n: 1000, short: '1,000', case: 'A clinic group gives every front desk an agent that texts back each missed call.' },
        { n: 10000, short: '10,000', case: 'An agency shops 10,000 client and prospect stores every week.' },
        { n: 100000, short: '100,000', case: 'An enterprise runs an agent for each supplier account across 4,000 sites.' },
        { n: 100000000, short: '100M', case: 'A platform gives every user’s assistant its own number and inbox.' },
      ],
    },
    line: 'Every way in runs on the same pieces, the same identity and the same event log.',
    doors: [
      {
        id: 'dev',
        reader: 'developers',
        icon: 'code',
        label: 'For developers',
        title: 'Every piece your agent needs, in one call.',
        line: 'Inboxes, numbers, messaging, browsers and sandboxes through the API, the SDK or MCP. One webhook carries every event, from one agent to a fleet.',
        cta: { label: 'Start building', to: '/developers' },
        demo: {
          kind: 'code',
          tabsLabel: 'Build with',
          tabs: [
            { label: 'SDK', code: 'await obsession.personas.create({ inbox: true, phone: "US", browser: true })' },
            { label: 'Webhook', code: 'await obsession.events.subscribe({ url: "https://api.larkfield.example/hooks", events: ["*"] })' },
            { label: 'MCP', code: 'claude mcp add obsession' },
          ],
          events: [
            { at: '09:41:07', event: 'email.received', text: 'Sign-in code 482 913' },
            { at: '09:41:12', event: 'page.visited', text: 'Supplier portal, signed in' },
            { at: '09:42:30', event: 'sms.received', text: '“Running 10 minutes late”' },
            { at: '09:44:05', event: 'call.ended', text: '2 min 17 s, transcript saved' },
            { at: '09:45:51', event: 'sandbox.finished', text: 'report.py done in 2.4 s' },
          ],
          ms: '50 ms',
        },
      },
      {
        id: 'team',
        reader: 'marketing',
        icon: 'check',
        label: 'For anyone who doesn’t code',
        title: 'Pick the job. Get the results where you work.',
        line: 'Teams, founders and freelancers pick a blueprint or describe their own job. Obsession spins up an agent to run it every day, across one company or thousands.',
        cta: { label: 'See how it works', to: '/no-code' },
        /* One job a team or a person would hand over, from a blueprint on the site: competitor tracking, lead response
           checks, the voice agent check, the invoice collector, load tracking and the speed-to-lead callback. */
        demo: {
          kind: 'job',
          tabsLabel: 'See a job for',
          jobs: [
            { team: 'Sales', sentence: ['Test ', { v: 'our 3 demo forms' }, ' every ', { v: 'morning' }, ' and flag ', { v: 'any reply over 5 minutes' }], where: 'Slack · #sales', at: 'Tue 09:30', result: 'UK form: no call after 2 hours' },
            { team: 'Support', sentence: ['Call ', { v: 'our AI receptionist' }, ' as ', { v: '3 new patients' }, ' every ', { v: 'morning' }], where: 'Slack · #support', at: 'Wed 09:00', result: 'Call 2 quoted the wrong price' },
            { team: 'Finance', sentence: ['Download ', { v: 'every invoice' }, ' from ', { v: '12 vendor portals' }, ' every ', { v: 'Friday' }], where: 'Google Sheets · Invoices', at: 'Fri 17:00', result: '12 invoices filed, none missed' },
            { team: 'Marketing', sentence: ['Track ', { v: '40 competitors' }, ' every ', { v: 'Monday' }, ' and post to ', { v: '#marketing' }], where: 'Slack · #marketing', at: 'Mon 08:00', result: 'Competitor 12 started 25% off' },
            { team: 'Operations', sentence: ['Read ', { v: 'every load' }, ' in ', { v: 'our carrier portals' }, ' ', { v: '4 times a day' }], where: 'Google Sheets · Loads', at: 'Thu 14:00', result: 'Load 4471 delayed, now Friday 06:00' },
            { team: 'Founders', sentence: ['Call ', { v: 'every new lead' }, ' within ', { v: 'a minute' }, ', ', { v: 'day and night' }], where: 'Your CRM', at: 'Sat 23:40', result: 'New lead called in 38 s, demo booked' },
          ],
        },
      },
      /* 26 Nov 2026: the company door. Its picture is a directory with agents beside people, each agent with its own address
         and number, the logins it was given and its spend limit (the live controls line; nothing about owners or approvals). */
      {
        id: 'companies',
        reader: 'sales',
        icon: 'users',
        label: 'For companies running agents across teams',
        title: 'Hand AI agents the work that touches customers and suppliers.',
        line: 'Each agent works under its own name, signs in only with the logins you give it and stays within a monthly spend limit you set. Every step lands in one event log, and Enterprise adds an account per team and SSO.',
        cta: { label: 'See AI agents for enterprise', to: '/use-cases/ai-agents-for-enterprise' },
        demo: {
          kind: 'roster',
          head: 'Kestrel Group · Directory · Example',
          sub: '4,000 people · 1,200 agents · 14 teams',
          rows: [
            { name: 'Priya Shah', id: 'priya@kestrel.example', meta: 'Finance lead' },
            { name: 'Otto, accounts agent', id: 'otto@kestrel.example', meta: '+1 312 555 0148 · Finance · 2 logins · $300 a month limit', lit: true },
            { name: 'Supplier desk agent', id: 'suppliers@kestrel.example', meta: 'Operations · every call and email in the event log', lit: true },
          ],
        },
      },
      /* 26 Nov 2026: the resell door. Its picture is an agency's client stores under the agency's brand, each with what a
         new customer got this week (invented stores), the job /agencies leads with. */
      {
        id: 'resell',
        reader: 'agencies',
        icon: 'home',
        label: 'For platforms and agencies with many clients',
        title: 'Run it for every client, under your brand.',
        line: 'Give every client’s AI agent its own number, inbox and browser, with an account per client and wholesale rates that drop as your volume grows.',
        cta: { label: 'See white label for agencies', to: '/agencies' },
        demo: {
          kind: 'roster',
          head: 'Harbour & Co · Client stores · Example',
          sub: 'Your brand on every report',
          rows: [
            { name: 'Fernway Home', id: 'fernway.example', meta: 'This week: welcome email in 2 minutes, no basket reminder', lit: true },
            { name: 'Lumen Skincare', id: 'lumenskin.example', meta: 'This week: welcome code worked, basket reminder at 4 hours', lit: true },
            { name: 'Oak & Ember', id: 'oakandember.example', meta: 'This week: no welcome email in 48 hours', lit: true },
          ],
        },
      },
    ],
  },

  /* 5 questions for a first-time reader (James, 21 and 22 Nov). The channels and voice agent questions moved to
     /developers; the browser one was already there, and checkout is the mystery shopping blueprint's "Does it place real
     orders?". What a persona is, the persona section says; that no code is needed, the blueprint tiles' heading says. */
  /* Home shows no questions since 23 Nov 2026 (Seun). The type needs the field; no items means no FAQPage data either
     (lib/jsonld.ts). */
  faq: { heading: '', items: [] },

  final: {
    heading: 'Start with the piece your agent needs first.',
    sub: 'Tell us which pieces, or which blueprint, and we’ll set you up on the Free plan.',
    /* James's line (21 Nov), on this closing button only; the hero's main button still says what it does. */
    /* Seun, 23 Nov 2026: the closing button says the campaign line. */
    capture: { ...access, button: 'Kit up your agent', source: 'home-final' },
  },
}
