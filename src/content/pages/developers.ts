import { piecePaths, pieceOrder } from '../piecePaths'
import { prices, type PieceId, type Price } from '../prices'
import type { Cta, OpenSource, Page } from '../types'

/* Developers (/developers, "API and MCP" in the nav), the pieces rewrite (21 Nov 2026, James): one API for every piece an
   AI agent needs, with one key and one bill. A developer takes one piece (only the email, the way people use an email
   API for agents) or many, and can put them under one persona. The story (pages/Developers.tsx): the hero with the
   quickstart beside it > #pieces: 1 short code block per piece (email, phone, messaging, browser, sandbox), each linking
   to its own page > #personas: the pieces under one identity, its handler running on our runtime about 50 ms after a
   message lands, free while it waits, persona.events() for the event log > #webhooks: 1 endpoint and the event names >
   #mcp: claude mcp add obsession, the same calls as tools > #integrations (the nav links #integrations, #baserow,
   #supabase and #webhooks; #webhooks is the webhook section, the rest are cards) > #prices: every price rendered from
   content/prices.ts, linked to /pricing > #open-source > questions > #join: API access. The code uses only the API names
   in the rebuild brief. Invented companies use .example addresses, with no "Example" tag. No competitor names, no
   "coming soon". The sections Page has no type for (pieces, personas, webhooks, mcp, prices) are `api` below, typed
   here because only this page draws them. */

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
export type ApiSections = {
  /* The hero's object: the quickstart, in the code window beside the words. */
  quickstart: { label: string; code: string }
  pieces: { heading: string; line: string; items: ApiPiece[] }
  personas: { heading: string; line: string; code: string; facts: ApiFact[]; link: Cta }
  webhooks: { heading: string; line: string; code: string; events: ApiCall[]; foot: string }
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

// The event log: every page, email, text and call, dated, with screenshots
const events = await persona.events()`

const WEBHOOK = `await obsession.webhooks.create({
  url: "https://your-app.example/hooks/obsession",
  events: ["email.received", "sms.received", "call.received"],
})

// POST https://your-app.example/hooks/obsession
{
  "event": "email.received",
  "inbox": "inb_4k9w2",
  "from": "bookings@larkfield.example",
  "subject": "Re: A table for 2 on Friday",
  "thread": "thr_81fa",
  "received_at": "2026-11-21T10:02:00Z"
}`

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
      { term: 'An event log', line: `Every page, email, text and call, dated, with screenshots. ${prices.log.amount} ${prices.log.unit}.` },
    ],
    link: { label: 'How personas work', to: piecePaths.personas },
  },

  webhooks: {
    heading: 'Every email, text and call reaches your webhook as it lands.',
    line: '1 endpoint for every piece. Each event arrives as JSON, with the inbox, number or persona it belongs to.',
    code: WEBHOOK,
    events: [
      { name: 'email.received', line: 'An email lands in one of your inboxes.' },
      { name: 'sms.received', line: 'A text reaches one of your numbers.' },
      { name: 'call.received', line: 'Someone calls one of your numbers.' },
    ],
    foot: 'Messages on iMessage, WhatsApp, Slack and Telegram reach the same endpoint.',
  },

  mcp: {
    heading: 'Your agent creates inboxes, numbers and browsers as tools.',
    line: 'Add the MCP server once to Claude Code, Cursor, Codex or any MCP client. Your agent gets the same calls as the API, and reads event logs as tools.',
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
      { name: 'persona.events', line: 'Read a persona’s event log.' },
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
      { name: 'Every page, email, text and call logged, with screenshots' },
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
      'Obsession’s API gives AI agents inboxes, phone numbers, messaging, browsers and sandboxes, with one key and one bill. Use one piece, such as the email, or put them all under one persona with an event log. Call it from code, or from your agent over MCP.',
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
     is the webhook section, pages/Developers.tsx). */
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
        a: 'Obsession’s API gives AI agents inboxes, phone numbers, messaging, browsers and sandboxes, with one key and one bill. Use one piece on its own, or put them all under one persona that waits for free and keeps an event log. Call it from TypeScript, Python or plain HTTP, or from your agent over MCP.',
      },
      {
        q: 'Can I use only the email?',
        a: 'Yes. Each piece works on its own. Create an inbox in 1 call, send and receive, and get each reply at your webhook. Add a number, a browser or a sandbox later, on the same key.',
        link: { label: 'Email API for AI agents', to: piecePaths.email },
      },
      {
        q: 'How do I connect it to Claude or Cursor?',
        a: 'Add the MCP server once, with claude mcp add obsession in Claude Code or in your client’s settings. Your agent can then create inboxes, numbers, browsers and sandboxes and read event logs as tools. Early access includes API and MCP keys.',
      },
      {
        q: 'What is a persona?',
        a: 'The pieces under one identity: an inbox, a phone number, its messaging channels, a browser profile and a sandbox when a task needs one. It lives on our runtime and waits for free. Your handler runs about 50 ms after a message lands, and its event log keeps every page, email, text and call.',
        link: { label: 'How personas work', to: piecePaths.personas },
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
