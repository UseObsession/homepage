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

  /* The blueprints (#blueprints, 22 Nov 2026): one section, after the persona. On the 22 Nov call the kits became six
     types of blueprints and the two Home sections became this one (components/persona/HomeBlueprints). The heading keeps
     James's words from 22 Nov; blueprints serve developers too, so it no longer opens "For teams without engineers". */
  homeBlueprints: {
    heading: 'Pick a blueprint. We run the job, you get the report.',
    line: 'Six types of blueprints, one for each job AI agents do. Results arrive where you already work: your spreadsheet, Clay, your own Claude agent or our dashboard.',
    unit: { one: 'blueprint', many: 'blueprints' },
    more: 'more',
    all: { label: 'See every blueprint', to: '/blueprints' },
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
    heading: 'Every email, text and call reaches your agent, or your team.',
    line: 'Each event is saved in your event log, then sent to your agent, your servers or Slack. Its reply is the next event.',
    loop: {
      label:
        'Set up once: pick pieces, a persona or a blueprint, and say where results go. Then a loop of three stops. Something happens: a message, a webhook or a new row comes in, or your agent acts. It is saved in your event log, in order, with its proof. Then it reaches your agent, on our runtime in about 50 ms or on your servers through a webhook, the API or MCP, or a person in Slack, Zapier, Make or n8n. What your agent does next is a new event. Live call audio streams straight to your voice agent, and the log keeps each call’s start, end and transcript.',
      setup: { name: 'Set up once', line: 'Pick pieces, a persona or a blueprint, and say where results go.' },
      happens: { name: 'Something happens', line: 'A message, a webhook or a new row comes in, or your agent acts.' },
      log: {
        name: 'Your event log',
        line: 'Every event, in order, with its proof.',
        rows: [
          { at: '09:40:12', kind: 'call.ended', text: '2 min 14 s, transcript saved' },
          { at: '09:40:55', kind: 'page.visited', text: 'Supplier portal, screenshot saved' },
        ],
      },
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
      pause: 'Pause',
      play: 'Play',
      examples: [
        {
          who: 'Support and sales',
          reader: 'sales',
          from: 'A customer messages on WhatsApp',
          in: { at: '09:41:07', kind: 'message.received', text: '“Can I move my table to Friday?”' },
          place: 'runtime',
          does: 'Your agent moves the booking and confirms it',
          out: { at: '09:41:08', kind: 'email.sent', text: 'Booking moved to Friday at 7' },
        },
        {
          who: 'QA and product',
          reader: 'agencies',
          from: 'Your app emails a new user',
          in: { at: '09:41:07', kind: 'email.received', text: 'Your 6-digit sign-in code' },
          place: 'servers',
          does: 'Your test enters the code and goes on',
          out: { at: '09:41:09', kind: 'page.visited', text: 'Signed in, screenshot saved' },
        },
        {
          who: 'Teams without engineers',
          reader: 'marketing',
          from: 'A blueprint finds a change',
          in: { at: '09:41:07', kind: 'blueprint.result', text: 'A competitor cut its price by 15%' },
          place: 'person',
          does: 'Posted to #pricing in Slack, for your team to act on',
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
