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

  /* The kits (#kits, 22 Nov 2026): the six jobs AI agents do, after the persona and before the blueprints. */
  homeKits: {
    heading: 'Pick the kit for your agent’s job.',
    line: 'Each kit is the pieces and blueprints one job needs, on the same key and bill. One agent can use more than one.',
    all: { label: 'See every kit', to: '/kits' },
  },

  /* Day one (#act, 22 Nov 2026, components/persona/HomeFit): what an agent can't do on its own, and the piece that does
     each, right after the hero, so any reader knows what Obsession is before the pieces sheet. */
  homeFit: {
    heading: 'Your agent can think. Obsession lets it act.',
    line: 'A new hire gets an email address, a phone and a laptop on day one. Obsession gives your AI agent the same, through one API and one bill.',
    agent: { name: 'Juno', role: 'bookings agent at Larkfield' },
    ui: {
      stuck: 'On its own',
      solved: 'With Obsession',
      open: 'Open',
      pause: 'Pause',
      play: 'Play',
      tabs: 'What an AI agent needs to do',
      log: 'Event log',
    },
    rows: [
      {
        need: 'Get a login code',
        without: 'Stuck at the sign-in screen',
        with: 'Its own inbox and number catch the code',
        piece: { label: 'Email', to: '/email' },
        scene: {
          kind: 'code',
          title: 'portal.harbourline.example · Sign in',
          words: {
            prompt: 'Enter the 6-digit code we sent to juno@larkfield.example',
            from: 'Harbourline',
            subject: 'Your sign-in code is 482913',
            code: '482913',
            nowhere: 'No inbox, so the code never arrives',
            done: 'Signed in',
          },
        },
        event: { at: '09:41:07', name: 'email.received', text: 'Harbourline · sign-in code' },
      },
      {
        need: 'Take a customer’s call',
        without: 'No number to ring',
        with: 'A US or UK number, with your voice agent',
        piece: { label: 'Phone', to: '/phone' },
        scene: {
          kind: 'call',
          title: 'Phone · +1 415 555 0142',
          words: {
            caller: 'A customer, +1 628 555 0199',
            ringing: 'Calling Larkfield',
            nowhere: 'No number, so the call never connects',
            connected: 'Connected · Juno answers',
            said: '“Can I move my table to Friday at 7?”',
            reply: '“Done. You’re booked for Friday at 7.”',
          },
        },
        event: { at: '09:52:30', name: 'call.ended', text: '2 min 14 s · transcript saved' },
      },
      {
        need: 'Reply on WhatsApp or iMessage',
        without: 'Can’t reach people where they message',
        with: 'Its own lines, under the same name',
        piece: { label: 'Messaging', to: '/messaging' },
        scene: {
          kind: 'chat',
          title: 'WhatsApp · Juno at Larkfield',
          words: {
            who: 'Sam',
            asked: 'Is the terrace open tonight?',
            nowhere: 'No line, so Sam waits',
            me: 'Juno · Larkfield',
            reply: 'Yes, from 6pm. Shall I hold a table for you?',
            apps: 'WhatsApp|iMessage|Slack|Telegram',
            same: 'The same name on WhatsApp, iMessage, Slack and Telegram',
          },
        },
        event: { at: '10:03:12', name: 'message.received', text: 'WhatsApp · Sam, about tonight' },
      },
      {
        need: 'Stay signed in to a portal',
        without: 'Signs in again every time',
        with: 'A browser that keeps its logins for weeks',
        piece: { label: 'Browser', to: '/browser' },
        scene: {
          kind: 'portal',
          title: 'bookings.citytables.example',
          words: {
            expired: 'Session expired. Sign in again',
            kept: 'Signed in · day 23 of this session',
            row1: 'Fri 7pm · table for 4 · confirmed',
            row2: 'Sat 8pm · table for 2 · confirmed',
            row3: 'Sun 1pm · table for 6 · waiting',
          },
        },
        event: { at: '10:15:44', name: 'page.visited', text: 'citytables · bookings, screenshot saved' },
      },
      {
        need: 'Run the code it wrote',
        without: 'Nowhere safe to run it',
        with: 'A sandbox, billed only while it runs',
        piece: { label: 'Sandbox', to: '/sandbox' },
        scene: {
          kind: 'sandbox',
          title: 'Sandbox · tonight.py',
          words: {
            cmd: 'python tonight.py',
            nowhere: 'No machine of its own to run it on',
            out1: 'Read 86 bookings for tonight',
            out2: 'Tables free at 8pm: 3',
            done: 'Finished in 1.8 s · billed for 1.8 s',
          },
        },
        event: { at: '10:21:03', name: 'sandbox.finished', text: 'tonight.py · exit 0' },
      },
      {
        need: 'Show what it did',
        without: 'Scattered across five vendors',
        with: 'Every email, text, call and page in one log',
        piece: { label: 'Event log', to: '/personas' },
        scene: {
          kind: 'log',
          title: 'Event log · Juno',
          words: {
            vendors: 'Inbox tool|Phone line|Chat app|Browser host|Code host',
            nowhere: 'Five vendors, five dashboards, five bills',
            summary: '5 events this morning · one log · one bill',
          },
        },
      },
    ],
    caption: 'One example agent’s morning: what it can’t do on its own, and the piece that does it. Larkfield and its customers are invented.',
    link: { label: 'See all six pieces', to: '#pieces' },
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
    heading: 'Every email, text and call reaches your agent, or your team.',
    line: 'Each event is saved in your event log, then sent to your agent, your servers or Slack. Its reply is the next event.',
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
    link: { label: 'Browse all 22 blueprints', to: '/blueprints' },
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
        name: 'Trial teardown',
        line: 'Start a competitor’s trial and keep every email it sends until the trial ends.',
        status: 'For marketing',
        reader: 'marketing',
        link: { label: 'See the blueprint', to: '/blueprints/trial-teardown' },
      },
      {
        name: 'Prospect intelligence',
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
        name: 'Price watch',
        line: 'Check competitors’ member prices and codes every morning, beside the public ones.',
        status: 'For pricing teams',
        reader: 'developers',
        link: { label: 'See the blueprint', to: '/blueprints/price-watch' },
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
