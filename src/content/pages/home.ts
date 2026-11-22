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
  line: 'Every piece comes through one key, one webhook and one bill.',
  items: pieceOrder.map((id) => ({ ...PIECES[id], to: piecePaths[id], whole: id === 'personas' })),
}

/* Every form on Home is the early access form. Its line ("Onboarding a limited number of teams.") is content/join.ts. */
const access = {
  kind: 'waitlist',
  button: 'Request early access',
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
    sub: 'An inbox, a phone number and a browser for every agent, used alone or together. Every email, text, call and page lands in your event log.',
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

  personaAnatomy: {
    heading: 'A persona is every piece under one identity.',
    line: 'Its inbox, number, channels, browser and sandbox share one name, and it waits on our runtime for free.',
    parts: [
      { name: 'One identity', line: 'Each email, text and page belongs to the same agent.', eg: 'Juno, bookings at Larkfield' },
      { name: 'An inbox and/or a phone number', line: 'Its own address and number, for email, texts and calls.', eg: 'juno@larkfield.example · +1 415 555 0142' },
      { name: 'Messaging', line: 'iMessage, WhatsApp, Slack and Telegram, on the same identity.', eg: 'iMessage · WhatsApp · Slack' },
      { name: 'A browser and/or a sandbox', line: 'A browser that stays signed in, and a computer for code when a task needs one.', eg: 'US home connection, signed in · python report.py' },
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
    heading: 'From the first call to months of messages, every event reaches your agent.',
    line: 'Every email, text, call, webhook or new spreadsheet row is saved in your event log, then reaches your agent. Its reply is the next event.',
    loop: {
      label:
        'Set up once: pick pieces, a persona or a blueprint, and say where your agent runs. Then a loop of 3 stops. Something happens: a message, a webhook or a new spreadsheet or CSV row comes in, or your agent acts. It is saved in your event log, in order. Then it reaches your agent, on our runtime as a handler in about 50 ms or on your servers through a webhook, the API or MCP, or a person in Slack, Zapier, Make or n8n. What your agent does next is a new event. Live call audio goes straight to your voice agent, and the log keeps each call’s start, end and transcript.',
      setup: { name: 'Set up once', line: 'Pick pieces, a persona or a blueprint, and say where your agent runs.' },
      then: 'then',
      happens: { name: 'Something happens', line: 'A message, a webhook or a new spreadsheet row comes in, or your agent acts.' },
      saved: 'is saved in',
      log: { name: 'Your event log', line: 'saves every event, in order' },
      reaches: 'reaches',
      agent: { name: 'Your agent', line: 'or a person' },
      places: [
        { name: 'Runs on our runtime', line: 'a handler, in about 50 ms', short: 'On our runtime: a handler' },
        { name: 'Runs on your servers', line: 'a webhook, the API or MCP', short: 'On your servers: webhook, API, MCP' },
        { name: 'Or reaches a person', line: 'Slack, Zapier, Make, n8n', short: 'A person: Slack, Zapier, Make, n8n' },
      ],
      acts: { name: 'acts', line: 'whatever your agent does next is a new event' },
      audio: {
        name: 'Live call audio streams',
        line: 'straight to your voice agent',
        note: 'Live call audio streams straight to your voice agent and skips the log.',
        log: 'The log keeps each call’s start, end and transcript.',
      },
    },
    link: { label: 'See the code for each channel', to: '/developers#delivery' },
  },

  /* A blueprint is a job that runs on Obsession beside the pieces and writes its results to the event log: one of ours,
     ready to run, or your own. Mystery shopping is the big tile and 4 sit beside it, so the 3 column grid closes
     (James, 22 Nov: 5 tiles, not 8); every tile links to its blueprint page (content/recipes), except the web behind the login, which links to its use
     case page. `status` says who it fits, and each tile's hue is
     that reader (styles/accents.css). The heading is James's (21 Nov), its comma included: it speaks to the reader. */
  personaRecipes: {
    /* James, 21 Nov: the heading speaks to teams with no engineers; the line says where the results arrive. */
    /* James, 22 Nov. The part before the colon shows as a quiet first line (components/persona/PersonaRecipes). */
    heading: 'For teams without engineers: Pick a blueprint, we run the job, you get the report.',
    line: 'Results arrive where you already work: your spreadsheet, Clay, your own Claude agent or our dashboard.',
    items: [
      {
        name: 'Mystery shopping',
        line: 'Personas shop a store and bring back every email, text and reminder that followed, or the silence.',
        status: 'For online stores',
        live: true,
        reader: 'founders',
        link: { label: 'See the blueprint', to: '/blueprints/mystery-shopper' },
      },
      {
        name: 'Competitor trials',
        line: 'Start a competitor’s trial and keep every email it sends until the trial ends.',
        status: 'For marketing',
        reader: 'marketing',
        link: { label: 'See the blueprint', to: '/blueprints/trial-teardown' },
      },
      {
        name: 'Agency prospect audits',
        line: 'Shop a prospect’s store before the pitch, and open with what a new shopper gets.',
        status: 'For agencies',
        reader: 'agencies',
        link: { label: 'See the blueprint', to: '/blueprints/prospect-intelligence' },
      },
      {
        name: 'Lead response checks',
        line: 'Fill in a contact form as a new lead, and time the first reply by email, text or call.',
        status: 'For sales',
        reader: 'sales',
        link: { label: 'See the blueprint', to: '/blueprints/lead-leaks' },
      },
      {
        name: 'The web behind the login, as data',
        line: 'Personas sign up and bring back the prices, emails and offers shown only after sign up.',
        status: 'For data teams',
        reader: 'developers',
        link: { label: 'See the use case', to: '/use-cases/web-behind-the-login' },
      },
    ],
  },


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
    heading: 'What will your agent need first?',
    sub: 'Tell us which pieces, or which blueprint, and we’ll set you up.',
    /* James's line (21 Nov), on this closing button only; the hero's main button still says what it does. */
    capture: { ...access, button: 'Kit up your agent', source: 'home-final' },
  },
}
