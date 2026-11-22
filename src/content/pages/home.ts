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

/* The developer section's code, in the API's own names (the shared brief, 21 Nov). */
const BUILD_CODE = `import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// One piece: an inbox your agent sends and receives from
const inbox = await obsession.inboxes.create()
await inbox.send({ to: "maya@larkfield.example", subject: "Your booking", text: "See you at 7." })

// Or every piece under one identity
const persona = await obsession.personas.create({ inbox: true, phone: "US", browser: true })

persona.on("email.received", async (email) => {
  // runs on our runtime, about 50 ms after it lands
})

// Every event lands in your event log. Subscribe once to get all of it
await obsession.events.subscribe({
  url: "https://api.larkfield.example/hooks/obsession",
  events: ["*"],
})

// Or read a persona's events: every page, email, text and call, dated
const { events } = await obsession.events.list({ persona: persona.id })`

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
      'Tools for AI agents, through one API and one bill: an inbox, a phone number, a browser and a sandbox for every agent. Use one piece or all of them.',
    /* The sentence AI assistants quote. Its first sentence opens the first answer below (scripts/prerender.mjs). */
    answer:
      'Obsession is the toolkit for AI agents: an inbox, a phone number and a browser for every agent, through one API and one bill. Use one piece, like email, or all of them under one identity, with messaging and a sandbox when a job needs them. Every email, text, call and page lands in your event log.',
    ogLine: 'An inbox, a phone number and a browser for every agent.',
    ogImage: '/og/home.png',
  },

  hero: {
    pill: 'Early access',
    pillTo: '#join',
    /* Locked by James, 21 Nov: "toolkit" leads, the sub names what is in the kit at once. */
    headline: 'The toolkit for AI agents. One API, one bill.',
    /* 23 Nov 2026 (Seun): the sub names both ways in, so a team that doesn't code knows from the first screen that
       Obsession is for them too; the doors under it say how each starts. */
    sub: 'An inbox, a phone number and a browser for every agent, used alone or together. Build on them with code, or pick a blueprint and Obsession runs the whole job.',
    /* Not drawn on Home (its hero has buttons, not a form); the Hero contract asks for one. */
    capture: { ...access, source: 'home-hero' },
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
    primary: { label: 'Start building', to: '#join' },
    chip: { code: 'obsession.personas.create({ inbox: true, phone: "US", browser: true })', copy: 'Copy the code', copied: 'Copied' },
    doors: {
      dev: { label: 'For developers' },
      noCode: { label: 'For teams that don’t code', line: 'Pick a job, fill in the blanks, and get results in the tools your team already uses.' },
    },
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
    heading: 'Pick a blueprint. We run the job, you get the report.',
    line: 'Six types of blueprints, one for each job AI agents do. Results arrive in any format, where you already work: Slack, email, your CRM, Clay, a sheet, a PDF or your own Claude agent.',
    unit: { one: 'blueprint', many: 'blueprints' },
    more: 'more',
    all: { label: 'See every blueprint', to: '/blueprints' },
  },

  /* For teams that don't write code (#teams, 23 Nov 2026, components/persona/HomeTeams). Seun: will non-technical teams
     understand they can use blueprints to achieve amazing things; a clear-to-anyone section that gives them the full
     view. Five teams, each one blueprint that lives on the site today, its job as a sentence with blanks, what lands
     and the KPIs it moves. Every company, number and message is an example. */
  homeTeams: {
    heading: 'No code needed. Fill in the job, and an AI agent does it every day.',
    line: 'Each blueprint is a finished job with blanks to fill: what to answer or watch, how often, and where results go. Obsession gives the agent its own phone number, inbox and browser, and runs the job for one company or thousands.',
    teamsLabel: 'Your team',
    steps: { pick: 'Pick a blueprint', fill: 'Fill in the blanks', get: 'Results where you work' },
    open: 'See the blueprint',
    formats: { label: 'Or as', items: ['Email', 'Your CRM', 'Clay', 'Google Sheets', 'A PDF report', 'Your AI assistant', 'Any tool you use'] },
    kpisLabel: 'See it in',
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
        sentence: ['Fill in ', { v: 'our 3 demo forms' }, ' as ', { v: 'a new lead' }, ' ', { v: 'every morning' }, ', time ', { v: 'the first email and call' }, ', and flag ', { v: 'anything over 5 minutes' }, ' in ', { v: '#sales' }, '.'],
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
      heading: 'Every blueprint comes with',
      items: [
        { icon: 'persona', name: 'Its own phone number, inbox and browser', line: 'Under one name, so every reply and code comes back to it.' },
        { icon: 'record', name: 'Proof behind every line', line: 'The email, the screenshot or the call recording, each dated.' },
        { icon: 'webhook', name: 'Results in any format', line: 'Slack, email, your CRM, Clay, a sheet, a PDF or your AI assistant. Use another tool, and we build the connection.' },
        { icon: 'stop', name: 'Rules it always keeps', line: 'It says it’s an AI to a person, uses only logins you give it and stops at any identity check.' },
      ],
    },
    primary: { label: 'Browse every blueprint', to: '/blueprints' },
    secondary: { label: 'Start free', to: '#join' },
    free: 'Free plan, no credit card.',
  },

  /* The problem and the answer (#act, 22 Nov 2026, components/persona/HomeProblem), right after the hero. Seun: agents can
     think, the problem is equipping them, the new-hire angle, what they're able to do, and blueprints too (never one API
     and one bill as the problem; that is the pieces section's line). Juno at Larkfield is the persona section's example,
     invented. */
  homeProblem: {
    heading: 'Your AI agent can think. Obsession equips it to act.',
    line: 'An AI agent can plan and write, but without its own inbox, phone number and browser it can’t receive a login code, take a call or stay signed in to a portal. Obsession gives it all three under one name, or runs the whole job for you as a blueprint.',
    states: { alone: 'On its own', equipped: 'Equipped by Obsession', label: 'Show the agent' },
    card: {
      name: 'Juno',
      role: 'AI agent, bookings at Larkfield',
      think: { label: 'Can think', items: ['Plan the steps', 'Write the reply', 'Decide what’s next'] },
      act: {
        label: 'Can act',
        locked: 'Can’t yet',
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
        { label: 'Email', none: 'None', value: 'juno@larkfield.example' },
        { label: 'Phone', none: 'None', value: '+1 415 555 0142' },
      ],
      online: 'Ready for work',
      offline: 'Not set up',
      event: { label: 'Latest event', none: 'No events yet', at: '09:41:07', name: 'email.received', text: 'Login code from a supplier portal' },
    },
    blueprints: {
      title: 'Not building agents? Pick a blueprint.',
      line: 'Obsession runs the job on the same pieces and sends you the results.',
      slugs: ['mystery-shopper', 'voice-agent-check', 'competitor-tracking'],
      runs: 'Runs on',
      out: 'Results land in Slack, a sheet, your CRM or our dashboard.',
      link: { label: 'See every blueprint', to: '/blueprints' },
    },
    caption: 'One example AI agent before and after Obsession equips it. Larkfield is invented.',
    link: { label: 'See every piece', to: '#pieces' },
  },

  personaAnatomy: {
    heading: 'A persona is one AI agent with its own inbox, number and browser.',
    line: 'Every piece shares one name, and the persona waits on our runtime for free until something arrives.',
    link: { label: 'See how personas work', to: '/personas' },
    parts: [
      { name: 'One identity', line: 'Each email, text and page belongs to the same agent.', eg: 'Juno, bookings at Larkfield' },
      { name: 'An inbox and a phone number', line: 'Its own address and number, for email, texts and calls.', eg: 'juno@larkfield.example · +1 415 555 0142' },
      { name: 'Messaging', line: 'iMessage, WhatsApp, Slack and Telegram, on the same identity.', eg: 'iMessage · WhatsApp · Slack' },
      { name: 'A browser and a sandbox', line: 'A browser that stays signed in, and a computer for code when a task needs one.', eg: 'US home connection, signed in · python report.py' },
      { name: 'Its events in your event log', line: 'Every page, email, text and call it saw, dated, with screenshots.', eg: '14 pages · 4 emails · 2 texts · 1 call' },
    ],
  },

  /* How it works (James, 21 Nov: variation B's loop with variation A's words, in place of the fleet timeline and the
     delivery plates; components/persona/HomeHowItWorks). Set up once, then a loop either side can start: a message, a
     webhook from another tool or a new spreadsheet or CSV row comes in (James, 22 Nov: never only "a message"), or the
     agent acts, it's saved in the event log, then reaches the agent, on our runtime or the developer's
     own servers, or a person. What the agent does next is a new event. Live call audio doesn't take the loop: it streams
     straight to the voice agent, and the log keeps the call's events. `loop` is the picture's words; `label` says the
     whole picture for screen readers and llms-full.txt. Under it, the link to every channel's code on /developers. */
  homeHow: {
    heading: 'From one inbox to thousands of calls a day, every event reaches your agent or your team.',
    line: 'Each call, email, text and page change is saved in your event log with the recording, email or screenshot behind it. Then it goes to your agent, your servers or your team in Slack, and whatever the agent does next is saved too.',
    loop: {
      label:
        'Set up once: pick pieces, a persona or a blueprint, and say where results go. Then a loop of three stops. Something happens: a call, an email, a text or a page change comes in, or your agent acts. It is saved in your event log, in order, with the email, screenshot or recording behind it. Then it reaches your agent on our runtime in about 50 ms, your agent on your servers, or a person in Slack. What your agent does next is a new event. Six examples play through it, one for each type of blueprint, each at the volume a real team runs. A dental group answers 1,200 calls a day across 40 clinics. A delivery app tests 24 sign-ups every night. An AI sales startup runs 500 inboxes. A freight broker checks 60 carrier portals. A retailer reads 12,000 competitor prices every morning. An AI lab runs 2,000 training tasks a night. Live call audio streams straight to your voice agent, and the log keeps each call’s start, end and transcript.',
      setup: { name: 'Set up once', line: 'Pick pieces, a persona or a blueprint, and say where results go.' },
      happens: { name: 'Something happens', line: 'A call, an email, a text or a page change, all day.' },
      log: { name: 'Your event log', line: 'Every event in order, with its email, screenshot or recording.' },
      reach: { name: 'Reaches your agent, or your team', line: 'Wherever you said it runs.' },
      saved: 'saved',
      sent: 'sent on',
      places: [
        { id: 'runtime', name: 'Your agent, on our runtime', line: 'Its handler runs in about 50 ms' },
        { id: 'servers', name: 'Your agent, on your servers', line: 'A webhook, the API or MCP' },
        { id: 'person', name: 'A person on your team', line: 'Slack, Zapier, Make or n8n' },
      ],
      next: 'What it does next is a new event',
      audio: 'Live call audio streams straight to your voice agent; the log keeps each call’s start, end and transcript.',
      examplesLabel: 'See it for',
      exampleTag: 'Example',
      pause: 'Pause',
      play: 'Play',
      examples: [
        {
          who: 'Front desks',
          kit: 'talk',
          reader: 'sales',
          org: 'A dental group with 40 clinics',
          scale: '1,200 calls a day',
          from: 'A new patient calls after hours',
          before: [
            { at: '21:13:41', kind: 'call.ended', text: 'Clinic 4 · booked Thursday at 9:00' },
            { at: '21:13:56', kind: 'call.received', text: 'Clinic 22 · asking about opening hours' },
          ],
          in: { at: '21:14:03', kind: 'call.received', text: 'Clinic 17 · new patient asking for a cleaning' },
          place: 'runtime',
          does: 'Your voice agent answers, books Tuesday at 8:30 and texts the confirmation',
          out: { at: '21:16:20', kind: 'call.ended', text: '2 min 17 s · booked, transcript saved' },
          tally: 'This week: 8,400 calls answered across 40 clinics, evenings and weekends included',
        },
        {
          who: 'Product and QA',
          kit: 'test',
          reader: 'agencies',
          org: 'A delivery app, tested every night',
          scale: '24 test sign-ups a night',
          from: 'Your app texts a test user',
          before: [
            { at: '02:00:18', kind: 'email.received', text: 'Test user 3 · welcome email, 2 s' },
            { at: '02:00:33', kind: 'page.visited', text: 'Test user 5 · Android sign-up, screenshot saved' },
          ],
          in: { at: '02:00:41', kind: 'sms.received', text: 'Sign-in code 482 913, 4 s after the request' },
          place: 'servers',
          does: 'Your test enters the code and checks every screen after it',
          out: { at: '02:00:44', kind: 'page.visited', text: 'Signed in, screenshot saved' },
          tally: 'Last night: 24 sign-ups by email and phone. 1 code took 41 s on Android, flagged before the morning stand-up',
        },
        {
          who: 'AI startups',
          kit: 'build',
          reader: 'developers',
          org: 'An AI sales startup',
          scale: '500 inboxes, one per customer',
          from: 'A prospect replies to your agent',
          before: [
            { at: '10:02:03', kind: 'email.sent', text: 'Inbox 212 · follow-up sent' },
            { at: '10:02:09', kind: 'email.received', text: 'Inbox 87 · out of office until Monday' },
          ],
          in: { at: '10:02:15', kind: 'email.received', text: '“Thursday works. Can you send the deck?”' },
          place: 'servers',
          does: 'Your agent books Thursday and replies with the deck',
          out: { at: '10:02:19', kind: 'email.sent', text: 'Invite and deck sent' },
          tally: 'Today: 12,000 emails across 500 inboxes, on one API key',
        },
        {
          who: 'Operations',
          kit: 'portals',
          reader: 'founders',
          org: 'A freight broker moving 300 loads a day',
          scale: '60 carrier portals, every hour',
          from: 'A carrier portal updates a load',
          before: [
            { at: '14:00:09', kind: 'page.visited', text: 'Load 4468 · delivered, proof of delivery saved' },
            { at: '14:00:15', kind: 'email.received', text: 'Carrier portal sign-in code, entered' },
          ],
          in: { at: '14:00:22', kind: 'page.visited', text: 'Load 4471 · delayed, new arrival Friday 06:00' },
          place: 'person',
          does: 'Posted to #dispatch in Slack, and the new arrival time added to your sheet',
          tally: 'Today: 1,800 portal checks with your own logins, none of them by hand',
        },
        {
          who: 'Pricing teams',
          kit: 'watch',
          reader: 'marketing',
          org: 'A retailer watching 30 competitors',
          scale: '12,000 prices every morning',
          from: 'A competitor cuts a member price',
          before: [
            { at: '07:00:12', kind: 'page.visited', text: 'Competitor 4 · no change since yesterday' },
            { at: '07:00:20', kind: 'email.received', text: 'Competitor 22 · new subscriber code' },
          ],
          in: { at: '07:00:31', kind: 'page.visited', text: 'Competitor 9 · member price down 15% on 140 items' },
          place: 'person',
          does: 'Posted to #pricing in Slack, with every changed price in your sheet',
          tally: 'This morning: 12,000 prices read at 30 competitors, 140 changes worth a look',
        },
        {
          who: 'AI labs',
          kit: 'train',
          reader: 'developers',
          org: 'An AI lab training a browsing agent',
          scale: '2,000 tasks a night',
          from: 'A training task finishes',
          before: [
            { at: '03:12:40', kind: 'email.received', text: 'Task 1,206 · confirmation link arrived' },
            { at: '03:12:42', kind: 'sandbox.finished', text: 'Task 1,204 · stuck at step 3, transcript saved' },
          ],
          in: { at: '03:12:44', kind: 'sandbox.finished', text: 'Task 1,207 · signed up and confirmed the email in 38 s' },
          place: 'servers',
          does: 'Your grader scores the run and starts the next task',
          out: { at: '03:12:46', kind: 'page.visited', text: 'Task 1,208 · sign-up page opened' },
          tally: 'Last night: 2,000 runs, each with its own inbox, phone number and browser',
        },
      ],
    },
    link: { label: 'See the code for each channel', to: '/developers#delivery' },
  },

  /* A blueprint is a job that runs on Obsession beside the pieces and writes its results to the event log: one of ours,
     ready to run, or your own. Mystery shopping is the big tile and 4 sit beside it, so the 3 column grid closes
     (James, 22 Nov: 5 tiles, not 8); every tile links to its blueprint page (content/recipes), except the web behind the login, which links to its use
     case page. `status` says who it fits, and each tile's hue is
     that reader (styles/accents.css). The heading is James's (21 Nov), its comma included: it speaks to the reader. */


  personaBuild: {
    heading: 'One key, from the first inbox to a fleet of personas.',
    line: 'Create an inbox, a number or a whole persona from code, or let your agent do it over MCP. Subscribe once to hear from all of them.',
    cta: { label: 'For developers', to: '/developers' },
    codeLabel: 'agent.ts',
    code: BUILD_CODE,
  },

  /* 5 questions for a first-time reader (James, 21 and 22 Nov). The channels and voice agent questions moved to
     /developers; the browser one was already there, and checkout is the mystery shopping blueprint's "Does it place real
     orders?". What a persona is, the persona section says; that no code is needed, the blueprint tiles' heading says. */
  faq: {
    heading: 'Before your agent sends its first email.',
    items: [
      {
        q: 'What is Obsession?',
        a: 'Obsession is the toolkit for AI agents: an inbox, a phone number and a browser for every agent, through one API and one bill. Use one piece, like email, or all of them under one identity, with messaging and a sandbox when a job needs them. Every email, text, call and page lands in your event log.',
      },
      {
        q: 'Do I need to write code?',
        a: 'No. Pick a blueprint, say where results go, and Obsession runs it. Developers use the API, SDKs or MCP.',
        link: { label: 'Browse blueprints', to: '/blueprints' },
      },
      {
        q: 'Can I use just one piece, like email?',
        a: 'Yes. Start with inboxes, and add a number, a browser or a sandbox later, on the same key and bill.',
        link: { label: 'Email for AI agents', to: '/email' },
      },
      {
        q: 'What is the event log?',
        a: 'One place per account where every event from every piece, persona and blueprint lands, in order and dated, with its proof: the email as it arrived, or a screenshot of the page. Nothing in it is changed or deleted.',
      },
      {
        q: 'How do events reach my app?',
        a: 'Through one signed webhook you subscribe once. If your server is down, events retry for 27 hours and can be replayed. You can also read the log by cursor, use MCP, run a handler on our runtime, or connect Zapier, Make or n8n.',
      },
      {
        q: 'Does a persona say it’s an AI?',
        a: 'Yes, whenever it talks to a person. It signs up the way anyone can, on pages open to everyone, and you choose where it goes.',
      },
    ],
  },

  final: {
    heading: 'Start with the piece your agent needs first.',
    sub: 'Tell us which pieces, or which blueprint, and we’ll set you up on the Free plan.',
    /* James's line (21 Nov), on this closing button only; the hero's main button still says what it does. */
    capture: { ...access, button: 'Kit up your agent', source: 'home-final' },
  },
}
