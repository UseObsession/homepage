import { channels, downLine } from '../delivery'
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
   4 1 claim in the form "X, not Y": wakes in milliseconds, not minutes >
   5 #how: how it works, 1 section in place of the fleet timeline and the delivery plates (James, 21 Nov): set up
   once, then the loop through your event log as 1 picture, then the 6 channels in their order (#delivery,
   content/delivery.ts) and the line on a server that's down (components/persona/HomeHowItWorks) >
   6 #recipes: blueprints, ours or your own job, beside the pieces, with the web behind the login as 1 tile to its use
   case page (James, 21 Nov: it took Price watch's tile and its own section went) > 7 #build: the code >
   8 #questions: 7 for a first-time reader (James, 21 Nov; the developer ones live on /developers) >
   9 #join: the early access form.
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
    line: 'Inboxes your agents send and receive from, with threads, attachments and webhooks.',
    call: 'obsession.inboxes.create()',
  },
  phone: {
    icon: 'phone',
    name: 'Phone',
    line: 'Numbers that send and receive texts and take calls, with your own voice agent or one we run.',
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
    line: 'A cloud browser on a home connection, with sessions that keep their logins.',
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
    line: 'Every piece under one identity, free while it waits, with all it saw in your event log.',
    call: 'obsession.personas.create({ inbox: true, phone: "US" })',
  },
}

const pieces: HomePieces = {
  heading: 'One API, not five vendors.',
  line: 'Every piece, from inboxes and phone numbers to browsers and sandboxes, comes through one key, one webhook and one bill.',
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
    line: 'Its inbox, number, channels, browser and sandbox share one name. It lives on our runtime: free while it waits, and your code runs 50 ms after a message lands, with no machine to start.',
    parts: [
      { name: 'One identity', line: 'A name every piece shares, so each email, text and page belongs to the same agent.', eg: 'Juno, bookings at Larkfield' },
      { name: 'An inbox and/or a phone number', line: 'Its own email address and number, to send and receive email, texts and calls.', eg: 'juno@larkfield.example · +1 415 555 0142' },
      { name: 'Messaging', line: 'iMessage, WhatsApp, Slack and Telegram, on the same identity.', eg: 'iMessage · WhatsApp · Slack' },
      { name: 'A browser and/or a sandbox', line: 'A browser on a home connection that keeps its logins, and a computer to run code when a task needs one.', eg: 'US home connection, signed in · python report.py' },
      { name: 'Its events in your event log', line: 'Every page, email, text and call it saw, dated, with screenshots.', eg: '14 pages · 4 emails · 2 texts · 1 call' },
    ],
  },

  /* "X, not Y" (rivet.dev's pattern): 1 claim, 1 big true number, a card on the other side. The wake is Juno's. "One
     API, not five vendors." had its own section here until James moved it to #pieces (22 Nov). */
  personaContrasts: [
    {
      heading: 'Wakes in milliseconds, not minutes.',
      line: 'When an email, text or call reaches a persona, your code runs on our runtime 50 ms later. No machine starts: its inbox, logins and browser state are already there.',
      value: '50',
      unit: 'ms',
      label: 'from a new email, text or call to your code running.',
      art: {
        kind: 'timeline',
        title: 'Juno, Tuesday',
        rows: [
          { at: '18:39:59.000', text: 'Waiting. Its inbox, logins and browser state are kept.', state: 'sleep' },
          { at: '18:40:00.000', text: 'A text lands: “Can I move my booking to 8?”', state: 'wake' },
          { at: '18:40:00.050', text: 'Your code is running, reading the text as Juno', state: 'act' },
          { at: '18:40:01.900', text: 'Opens the booking page, still signed in', state: 'act' },
          { at: '18:40:04.000', text: 'Replies by text, logs it and goes back to waiting', state: 'done' },
        ],
      },
    },
  ],

  /* How it works (James, 21 Nov: variation B's loop with variation A's words, in place of the fleet timeline and the
     delivery plates; components/persona/HomeHowItWorks). Set up once, then a loop either side can start: a message, a
     webhook from another tool or a new spreadsheet or CSV row comes in (James, 22 Nov: never only "a message"), or the
     agent acts, it's saved in the event log, then reaches the agent, on our runtime or the developer's
     own servers, or a person. What the agent does next is a new event. Live call audio doesn't take the loop: it streams
     straight to the voice agent, and the log keeps the call's events. `loop` is the picture's words; `label` says the
     whole picture for screen readers and llms-full.txt. Under it, the channels and the line on a server that's down
     come from content/delivery.ts, the same words as the piece, recipe and developer pages. */
  homeHow: {
    heading: 'From the first call to months of messages, every event reaches your agent.',
    line: 'Set it up once, and each persona waits for free. Every email, text, call, webhook or new spreadsheet row is saved in your event log, then reaches your agent. Its reply is the next event.',
    loop: {
      label:
        'Set up once, by picking pieces, a persona or a blueprint and saying where your agent runs. Then a loop of 3 stops. Something happens: a message, a webhook from another tool or a new row in a spreadsheet or CSV comes in, or your agent acts. It is saved in your event log, which keeps every event in order. Then it reaches your agent, on our runtime as a handler in about 50 ms or on your servers through a webhook, the API or MCP, or it reaches a person in Slack, Zapier, Make or n8n. Whatever your agent does next is a new event, so the loop goes round again. Live call audio crosses the loop straight to your voice agent without touching the log, and the log keeps each call’s start, end and transcript.',
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
    waysHeading: '6 ways an event reaches your agent, or you',
    channels: channels.map(({ name, line, eg }) => ({ name, line, eg })),
    down: downLine,
    link: { label: 'See the code for each channel', to: '/developers#delivery' },
  },

  /* A blueprint is a job that runs on Obsession beside the pieces and writes its results to the event log: one of ours,
     ready to run, or your own. Mystery shopping is the big tile; every tile links to its blueprint page (content/recipes),
     except the web behind the login, which links to its use case page. `status` says who it fits, and each tile's hue is
     that reader (styles/accents.css). The heading is James's (21 Nov), its comma included: it speaks to the reader. */
  personaRecipes: {
    /* James, 21 Nov: the heading speaks to teams with no engineers; the line says where the results arrive. */
    /* James, 22 Nov. The part before the colon shows as a quiet first line (components/persona/PersonaRecipes). */
    heading: 'For teams without engineers: Pick a blueprint, we run the job, you get the report.',
    line: 'Every result arrives where you already work: in your spreadsheet, in Clay, through your own Claude agent or on our dashboard. Developers can bring their own job to run the same way.',
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
        name: 'QA on your own flows',
        line: 'Sign up to your own product as a new user, and find the step that breaks.',
        status: 'For product teams',
        reader: 'developers',
        link: { label: 'See the blueprint', to: '/blueprints/website-audit' },
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
        name: 'AI agent checks',
        line: 'Chat with a support bot or call a voice line, and keep every answer word for word.',
        status: 'For teams running AI agents',
        reader: 'developers',
        link: { label: 'See the blueprint', to: '/blueprints/support-bot-check' },
      },
      {
        name: 'The web behind the login, as data',
        line: 'Prices, emails and offers that companies show people only after they sign up. Personas sign up, wait, and bring every page, email and text back as data.',
        status: 'For data teams',
        reader: 'developers',
        link: { label: 'See the use case', to: '/use-cases/web-behind-the-login' },
      },
      {
        name: 'Your own job',
        line: 'A task or a computation of your own, run on our runtime beside the inbox, browser and sandbox, with nothing to host.',
        status: 'For any job',
        reader: 'founders',
        link: { label: 'Browse every blueprint', to: '/blueprints' },
      },
    ],
  },


  personaBuild: {
    heading: 'One key, from the first inbox to a fleet of personas.',
    line: 'Create an inbox, a number or a whole persona from your code, or let your own agent do it through MCP. Then subscribe once to hear back from all of them.',
    cta: { label: 'For developers', to: '/developers' },
    codeLabel: 'agent.ts',
    code: BUILD_CODE,
  },

  /* 7 questions for a first-time reader (James, 21 Nov). The channels and voice agent questions moved to /developers;
     the browser one was already there, and checkout is the mystery shopping blueprint's "Does it place real orders?". */
  faq: {
    heading: 'Before your agent sends its first email.',
    items: [
      {
        q: 'What is Obsession?',
        a: 'Obsession is the toolkit for AI agents: an inbox, a phone number and a browser for every agent, through one API and one bill. Use one piece, like email, or all of them under one identity, with messaging and a sandbox when a job needs them. Every email, text, call and page lands in your event log.',
      },
      {
        q: 'Can I use just one piece, like email?',
        a: 'Yes. Every piece works on its own. Start with inboxes for your agent and add a number, a browser or a sandbox later, on the same key and the same bill.',
        link: { label: 'Email for AI agents', to: '/email' },
      },
      {
        q: 'What is a persona?',
        a: 'Every piece under one identity: an inbox, a number, its messaging channels, a browser profile and a sandbox when a task needs one. It lives on our runtime, free while it waits, and your code runs 50 ms after a message lands. Every page, email, text and call it handles lands in your event log, dated, with screenshots.',
      },
      {
        q: 'What is the event log?',
        a: 'One place per account where every event lands, from every piece, persona and blueprint: in order, each dated, with its proof, such as the email as it arrived or a screenshot of the page. Nothing in it is changed or deleted. Subscribe once, and your endpoint gets all of it.',
      },
      {
        q: 'How do events reach my app?',
        a: 'Each event is saved in your event log, then sent to one signed webhook that you subscribe once, for every piece and blueprint. If your server is down, each event is retried for 27 hours and can be replayed. You can also read the event log by cursor, or let your own agent subscribe over MCP. Or run a handler on our runtime, stream events to your laptop, or use Zapier, Make and n8n.',
      },
      {
        q: 'Do I need to write code?',
        a: 'No. Run one of our blueprints, such as agentic mystery shopping: say where it goes, and its results land in your event log. Developers can also write their own job, which runs on our runtime beside the pieces.',
      },
      {
        q: 'Does a persona say it’s an AI?',
        a: 'Yes, whenever it talks to a person. It signs up the way anyone can, on the pages and forms open to everyone, and you choose where it goes and what it does.',
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
