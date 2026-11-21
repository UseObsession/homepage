import { channels, downLine, eventLines, type Channel, type EventName } from '../delivery'
import { piecePaths, pieceOrder } from '../piecePaths'
import { prices, type PieceId, type Price } from '../prices'
import type { Cta, OpenSource, Page } from '../types'

/* Developers (/developers, "API and MCP" in the nav), the pieces rewrite (21 Nov 2026, James): one API for every piece an
   AI agent needs, with one key and one bill. A developer takes one piece (only the email, the way people use an email
   API for agents) or many, and can put them under one persona. The story (pages/Developers.tsx): the hero with the
   quickstart beside it > #pieces: 1 short code block per piece (email, phone, messaging, browser, sandbox), each linking
   to its own page > #personas: the pieces under one identity, its handler running on our runtime about 50 ms after a
   message lands, free while it waits, its events read from the event log > #recipes: run one of ours, or create your
   own job on our runtime, its results landing in the event log > #delivery: how events reach you (James, 21 Nov):
   every event from every piece, persona and recipe is saved in the event log (1 per account), then delivered through 6
   channels in this order, each with its code: 1 signed webhook (#webhooks, the nav's Webhooks link, with every event
   name), the event log read by cursor, MCP, a handler on our runtime, a live stream for local work, and Zapier, Make
   and n8n; then the line on a server that's down. Names, lines and that line are content/delivery.ts, shared with Home,
   the piece pages and the recipe pages > #mcp: claude mcp add obsession, the same calls as tools > #integrations (the
   nav links #integrations, #baserow, #supabase and #webhooks; the rest are cards) > #prices: every price rendered from
   content/prices.ts, linked to /pricing > #open-source > questions > #join: API access. The code uses only the API
   names the founders gave (obsession.events.subscribe, obsession.events.list). Invented companies use .example
   addresses, with no "Example" tag. No competitor names, no "coming soon". The sections Page has no type for (pieces,
   personas, recipes, delivery, mcp, prices) are `api` below, typed here because only this page draws them. */

const access = {
  kind: 'waitlist',
  button: 'Get API access',
  interest: 'any',
} as const

/* What each piece is called on this page. */
const pieceNames: Record<PieceId, string> = {
  email: 'Email',
  phone: 'Phone',
  messaging: 'Messaging',
  browser: 'Browser',
  sandbox: 'Sandbox',
  personas: 'Personas',
}

export type ApiPiece = { id: PieceId; name: string; line: string; code: string; link: Cta }
export type ApiFact = { term: string; line: string }
export type ApiCall = { name: string; line: string }
export type ApiPriceGroup = { id: PieceId; name: string; to: string; rows: Price[] }
/* A section of short facts beside its code (#personas, #recipes). */
export type ApiFacts = { heading: string; line: string; code: string; facts: ApiFact[]; link: Cta }
/* 1 way events reach you (#delivery), its name and line from content/delivery.ts, its code here. `anchor` is the id a
   link lands on (#webhooks); `events` lists every event name under the webhook. */
export type ApiChannel = { id: Channel['id']; name: string; line: string; code: string; anchor?: string; events?: ApiCall[] }
export type ApiSections = {
  /* The hero's object: the quickstart, in the code window beside the words. */
  quickstart: { label: string; code: string }
  pieces: { heading: string; line: string; items: ApiPiece[] }
  personas: ApiFacts
  recipes: ApiFacts
  delivery: { heading: string; line: string; channels: ApiChannel[]; eventsLabel: string; down: string }
  mcp: { heading: string; line: string; setup: string; note: string; tools: ApiCall[] }
  prices: { heading: string; line: string; groups: ApiPriceGroup[]; cta: Cta }
}

const QUICKSTART = `// npm install obsession
import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

const inbox = await obsession.inboxes.create()
const number = await obsession.numbers.create({ country: "US" })
const browser = await obsession.browsers.create({ home: "US" })
const sandbox = await obsession.sandboxes.create()`

const pieces: ApiPiece[] = [
  {
    id: 'email',
    name: pieceNames.email,
    line: 'Inboxes your agents send and receive from, with threads, attachments and a webhook for every reply.',
    code: `const inbox = await obsession.inboxes.create()

await inbox.send({
  to: "bookings@larkfield.example",
  subject: "A table for 2 on Friday",
  text: "Could you fit 2 at 19:30 on Friday?",
})
// The reply reaches your webhook as email.received`,
    link: { label: 'Email API for AI agents', to: piecePaths.email },
  },
  {
    id: 'phone',
    name: pieceNames.phone,
    line: 'Phone numbers that send and receive texts and take calls. Bring your own voice agent, or connect one.',
    code: `const number = await obsession.numbers.create({ country: "US" })

await number.sms({ to: "+12025550143", text: "Your parcel arrives at 14:00." })
// Texts back reach your webhook as sms.received, calls as call.received`,
    link: { label: 'Phone numbers for AI agents', to: piecePaths.phone },
  },
  {
    id: 'messaging',
    name: pieceNames.messaging,
    line: 'iMessage lines, WhatsApp for support, sales, bookings and notifications, and Slack and Telegram.',
    code: `// "imessage" | "whatsapp" | "slack" | "telegram"
await obsession.messaging.connect({ channel: "imessage" })
await obsession.messaging.connect({ channel: "whatsapp" })`,
    link: { label: 'iMessage and WhatsApp for AI agents', to: piecePaths.messaging },
  },
  {
    id: 'browser',
    name: pieceNames.browser,
    line: 'A cloud browser on a home connection. Its sessions keep their logins, so your agent signs in once.',
    code: `import { chromium } from "playwright"

const browser = await obsession.browsers.create({ home: "US" })
const session = await chromium.connectOverCDP(browser.cdpUrl)
// Logins stay in the browser for the next session`,
    link: { label: 'Headless browser for AI agents', to: piecePaths.browser },
  },
  {
    id: 'sandbox',
    name: pieceNames.sandbox,
    line: 'A computer to run code in, started only when a task needs it.',
    code: `const sandbox = await obsession.sandboxes.create()

await sandbox.run("python report.py")`,
    link: { label: 'Code sandbox for AI agents', to: piecePaths.sandbox },
  },
]

const PERSONA = `const persona = await obsession.personas.create({
  inbox: true,
  phone: "US",
  browser: true,
})

persona.on("email.received", async (email) => {
  // Runs on our runtime, about 50 ms after it lands
})

// Its events in your event log: every page, email, text and call, dated, with screenshots
const { events } = await obsession.events.list({ persona: persona.id })`

const RECIPES = `// One of ours, ready to run
await obsession.recipes.run("mystery-shopper", { site: "https://larkfield.example" })

// Or your own job, on our runtime beside the pieces
await obsession.recipes.create({
  name: "price-check",
  run: async ({ browser, events }) => {
    // Your task or computation. Nothing to host
  },
})

// Either way, each result lands in your event log as recipe.result`

/* The code for each way events reach you (#delivery), in the order content/delivery.ts gives. */
const CHANNEL_CODE: Record<Channel['id'], string> = {
  webhook: `// Every event from every piece and recipe, at 1 URL
await obsession.events.subscribe({
  url: "https://your-app.example/hooks",
  events: ["*"],
})

// POST https://your-app.example/hooks, signed
{
  "id": "evt_7Hq2k9",
  "type": "email.received",
  "created_at": "2026-11-21T10:02:00Z",
  "data": {
    "inbox": "inb_4k9w2",
    "from": "bookings@larkfield.example",
    "subject": "Re: A table for 2 on Friday",
    "thread": "thr_81fa"
  }
}`,
  cursor: `// Everything after the last event you handled, in order
const { events, cursor } = await obsession.events.list({ after: lastCursor })

for (const event of events) {
  await handle(event)
}

// Keep the cursor, and start from it next time
lastCursor = cursor`,
  mcp: `claude mcp add obsession`,
  handler: `const persona = await obsession.personas.create({ inbox: true, phone: "US" })

persona.on("email.received", async (email) => {
  // Runs on our runtime about 50 ms after the email lands
})

persona.on("sms.received", async (sms) => {
  // The same for texts, calls and messages
})`,
  listen: `npx obsession listen --forward "http://localhost:3000/hooks"`,
  nocode: `Trigger: New Obsession event
Event: recipe.result
Action: Slack, post a message`,
}

/* The event names listed under the webhook, from content/delivery.ts. */
const EVENTS: EventName[] = [
  'email.received',
  'email.sent',
  'sms.received',
  'call.received',
  'call.ended',
  'message.received',
  'page.visited',
  'sandbox.finished',
  'recipe.result',
]

/* Every price, grouped by piece in the nav's order, straight from content/prices.ts. */
const priceGroups: ApiPriceGroup[] = pieceOrder.map((id) => ({
  id,
  name: pieceNames[id],
  to: piecePaths[id],
  rows: Object.values(prices).filter((p: Price) => p.piece === id),
}))

export const api: ApiSections = {
  quickstart: { label: 'Quickstart in TypeScript', code: QUICKSTART },

  pieces: {
    heading: 'Each piece is 1 call. Use one, or all of them.',
    line: 'Use only the email, the way you’d use any email API for AI agents. Add a number, a browser or a sandbox later, on the same key and the same bill.',
    items: pieces,
  },

  personas: {
    heading: 'Put the pieces under one identity, and your code runs when a message lands.',
    line: 'A persona holds an inbox, a number, its channels, a browser profile and a sandbox when a task needs one. It lives on our runtime, so it waits for free and answers without starting a machine.',
    code: PERSONA,
    facts: [
      { term: 'About 50 ms', line: 'From an email, text or call landing to your handler running. No machine starts.' },
      { term: `${prices.persona.amount} ${prices.persona.unit}`, line: prices.persona.note },
      { term: 'Its events in your event log', line: `Every page, email, text and call, dated, with screenshots. ${prices.log.amount} ${prices.log.unit}.` },
    ],
    link: { label: 'How personas work', to: piecePaths.personas },
  },

  recipes: {
    heading: 'Run a recipe beside the pieces, ours or your own, with nothing to host.',
    line: 'A recipe is a job that runs on Obsession beside the pieces and writes its results to your event log. Run one of ours, such as agentic mystery shopping, or create your own.',
    code: RECIPES,
    facts: [
      { term: 'Ours, ready to run', line: 'Mystery shopping, competitor trials, price watch and more. Name the site, and we run the job.' },
      { term: 'Your own job', line: 'A task or a computation that runs on our runtime next to the inbox, browser and sandbox.' },
      { term: 'One event log', line: 'Each result lands as a recipe.result event, beside the events from your pieces and personas, and reaches you the same way.' },
    ],
    link: { label: 'Browse recipes', to: '/recipes' },
  },

  delivery: {
    heading: 'Every event is saved in your event log, then reaches you where you listen.',
    line: 'Emails, texts, calls, pages, sandbox runs and recipe results all arrive the same way, in the same shape. Start with the webhook, and add a channel when you need one.',
    channels: channels.map((c) => ({
      id: c.id,
      name: c.name,
      line: c.line,
      code: CHANNEL_CODE[c.id],
      ...(c.id === 'webhook' ? { anchor: 'webhooks', events: EVENTS.map((name) => ({ name, line: eventLines[name] })) } : {}),
    })),
    eventsLabel: 'Every event name',
    down: downLine,
  },

  mcp: {
    heading: 'Your agent creates inboxes, numbers and browsers as tools.',
    line: 'Add the MCP server once to Claude Code, Cursor, Codex or any MCP client. Your agent gets the same calls as the API, and reads and subscribes to your event log as a tool.',
    setup: 'claude mcp add obsession',
    note: 'Claude Code takes 1 line. In Cursor, Codex or any other MCP client, add the same server in its settings.',
    tools: [
      { name: 'inboxes.create', line: 'Give your agent an inbox of its own.' },
      { name: 'inbox.send', line: 'Send an email from it.' },
      { name: 'numbers.create', line: 'Get a phone number in the US, or any country.' },
      { name: 'number.sms', line: 'Send a text.' },
      { name: 'messaging.connect', line: 'Connect iMessage, WhatsApp, Slack or Telegram.' },
      { name: 'browsers.create', line: 'Open a cloud browser that keeps its logins.' },
      { name: 'sandbox.run', line: 'Run code in a sandbox started for the task.' },
      { name: 'recipes.run', line: 'Run a recipe, one of ours or your own.' },
      { name: 'events.list', line: 'Read the events in your event log, for 1 persona or all of them.' },
      { name: 'events.subscribe', line: 'Hear about new events as they land, such as email.received.' },
    ],
  },

  prices: {
    heading: 'Each piece has its own price, all on one bill.',
    line: 'Pay only for the pieces your agents use. A persona costs nothing while it waits.',
    groups: priceGroups,
    cta: { label: 'See pricing', to: '/pricing' },
  },
}

/* Open source, kept short: the runtime personas live on is open; Obsession Cloud runs the pieces that need a carrier, a
   line or a home connection. Names only, so the section reads in a glance. */
const openSource: OpenSource = {
  heading: 'The runtime is open source.',
  line: 'The runtime personas live on, the handlers that run when a message lands and the event log are yours to read and run. Obsession Cloud adds the numbers, lines, home connections and browsers, and keeps them running.',
  core: {
    title: 'Open source: the runtime',
    items: [
      { name: 'Personas that wait for free' },
      { name: 'Handlers that run when an email, text or call lands' },
      { name: 'An event log of every page, email, text and call, with screenshots' },
      { name: 'The same calls over MCP and the API' },
    ],
  },
  cloud: {
    title: 'Obsession Cloud: the pieces, kept running',
    items: ['Inboxes, phone numbers and iMessage lines', 'Browsers on home connections, in any country', 'Sandboxes started only when a task needs one'],
  },
  cta: { label: 'See the code on GitHub', to: 'https://github.com/UseObsession' },
}

export const page: Page = {
  meta: {
    path: '/developers',
    title: 'The API for AI agents: inboxes, phone numbers and browsers',
    description:
      'One API for AI agents: email inboxes, phone numbers and texts, iMessage and WhatsApp, cloud browsers and code sandboxes, with one key and one bill.',
    answer:
      'Obsession’s API gives AI agents inboxes, phone numbers, messaging, browsers and sandboxes, with one key and one bill. Use one piece, such as the email, or put them all under one persona, with every event in your event log. Call it from code, or from your agent over MCP.',
    ogImage: '/og/developers.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Developers', path: '/developers' },
    ],
  },

  hero: {
    pill: 'Early access',
    pillTo: '#join',
    headline: 'The API for AI agents: inboxes, phone numbers and browsers.',
    sub: 'Obsession’s API gives AI agents inboxes, phone numbers, messaging, browsers and sandboxes, with one key and one bill.',
    capture: { ...access, source: 'developers-hero' },
    secondary: { label: 'See pricing', to: '/pricing' },
    /* The small line under the form, from content/prices.ts. */
    note: `${prices.inbox.note} Every piece has its own price, all on one bill.`,
    proof: [],
    /* Not drawn on this page (Hero5 has no console); the Hero contract asks for one. */
    consoleHeading: [],
  },

  /* Where tasks start and where events go: the nav's Integrations menu links to #baserow and #supabase by id (#webhooks
     is the webhook in the delivery section, pages/Developers.tsx). */
  integrations: {
    kicker: 'Integrations',
    heading: 'Every event lands in the tools you already use.',
    line: 'Start from a row or a Zap, and each email, text and call comes back the moment it lands.',
    items: [
      {
        id: 'clay',
        title: 'Clay',
        line: 'Each row gets its own inbox or number. Replies fill the next columns: what arrived, and when.',
        eg: 'Row → Inbox · Reply · Received at',
        link: { label: 'Prospect research with Clay', to: '/use-cases/prospect-intelligence-with-clay' },
      },
      { id: 'zapier', title: 'Zapier', line: 'Create an inbox or send a text from any Zap. Each new email or text starts the next step.', eg: 'email.received → Slack, Sheets or your CRM' },
      { id: 'make', title: 'Make and n8n', line: 'The same events start your Make scenarios and n8n workflows, through the webhook.', eg: 'sms.received → your workflow' },
      { id: 'hubspot', title: 'HubSpot', line: 'Each email, text and call lands on the HubSpot record you already have, dated.', eg: 'Contact → Timeline · Email received' },
      { id: 'baserow', title: 'Baserow', line: 'A new row creates an inbox, a number or a persona. Each reply fills the next columns as it arrives.', eg: 'Row added → Inbox created → 3 columns filled' },
      { id: 'supabase', title: 'Supabase', line: 'Every email, text, call and page lands as a row in your own table, ready to query.', eg: 'events (persona, kind, received_at, screenshot)' },
    ],
  },

  openSource,

  faq: {
    heading: 'Questions from developers.',
    items: [
      {
        q: 'What does the Obsession API do?',
        a: 'Obsession’s API gives AI agents inboxes, phone numbers, messaging, browsers and sandboxes, with one key and one bill. Use one piece on its own, or put them all under one persona that waits for free. Run our recipes or your own jobs beside them, and every event lands in your event log. Call it from TypeScript, Python or plain HTTP, or from your agent over MCP.',
      },
      {
        q: 'Can I use only the email?',
        a: 'Yes. Each piece works on its own. Create an inbox in 1 call, send and receive, and get each reply at your webhook. Add a number, a browser or a sandbox later, on the same key.',
        link: { label: 'Email API for AI agents', to: piecePaths.email },
      },
      {
        q: 'How do I connect it to Claude or Cursor?',
        a: 'Add the MCP server once, with claude mcp add obsession in Claude Code or in your client’s settings. Your agent can then create inboxes, numbers, browsers and sandboxes, and read and subscribe to your event log as a tool. Early access includes API and MCP keys.',
      },
      {
        q: 'What is a persona?',
        a: 'The pieces under one identity: an inbox, a phone number, its messaging channels, a browser profile and a sandbox when a task needs one. It lives on our runtime and waits for free. Your handler runs about 50 ms after a message lands, and every page, email, text and call it handles lands in your event log.',
        link: { label: 'How personas work', to: piecePaths.personas },
      },
      {
        q: 'Can I run my own job on Obsession?',
        a: 'Yes. Create it as a recipe with obsession.recipes.create, and it runs on our runtime beside the inbox, browser and sandbox, so there is nothing to host. Its results land in your event log as recipe.result events, and reach you like every other event.',
        link: { label: 'Browse recipes', to: '/recipes' },
      },
      {
        q: 'How do events reach my app, and what if my server is down?',
        a: `Every event is saved in your event log, then sent to one signed webhook you subscribe once, for every piece and recipe. ${downLine} You can also read the event log by cursor with obsession.events.list, or let your agent subscribe over MCP. Or run a handler on our runtime, and forward events to your laptop with npx obsession listen while you build.`,
      },
      {
        q: 'How is each piece priced?',
        a: `On its own, all on one bill. Inboxes: ${prices.inbox.amount} ${prices.inbox.unit}. Phone numbers: ${prices.number.amount} ${prices.number.unit}. Browsers: ${prices.browser.amount} ${prices.browser.unit}. A persona is ${prices.persona.amount.toLowerCase()} ${prices.persona.unit}.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Can my agent message anyone on WhatsApp?',
        a: 'WhatsApp is for support, sales, bookings and notifications. People who write to your number get answers at once, and messages your agent starts use templates Meta approves.',
      },
      {
        q: 'Does the browser stay signed in?',
        a: 'Yes. Each browser keeps its cookies and logins from one session to the next, so your agent signs in once. It connects from a home connection, and your code drives it with Playwright or Puppeteer.',
      },
      {
        q: 'What stops my agents from running up a bill?',
        a: 'Every key has a monthly spend limit you set. Sandboxes start only when a task needs one, and a persona costs nothing while it waits.',
      },
    ],
  },

  final: {
    heading: 'Give your agent an inbox in 1 call.',
    sub: 'Early access includes API and MCP keys. Tell us which piece you need first, and we’ll set it up with you.',
    capture: { ...access, source: 'developers-final' },
  },
}
