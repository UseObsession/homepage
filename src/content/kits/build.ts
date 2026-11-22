import { kitPathOf, kitsPath } from '../kitPaths'
import type { KitPage } from './types'

/* Build agent products (/blueprints/build-agent-products): developers give every agent they ship, and every user of their
   platform, its own inbox, number, browser and sandbox on one key. Product Marketing book, job 3. */

const sub =
  'Give each agent you ship its own inbox, number, browser and sandbox in one call. Every event reaches one signed webhook, and the bill is one line.'

const code = `import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// One identity: an inbox, a US number and a browser
const agent = await obsession.personas.create({
  inbox: true,
  phone: "US",
  browser: true,
})

// One webhook for every piece
await obsession.events.subscribe({
  url: "https://your-app.example/hooks/obsession",
  events: ["email.received", "sms.received", "page.visited"],
})`

export const build: KitPage = {
  id: 'build',
  name: 'Build agent products',
  meta: {
    path: kitPathOf.build,
    title: 'Build AI agent products: an inbox, number and browser each',
    description:
      'Give every agent you ship, and every user of your platform, its own inbox, number, browser and sandbox, on one API key, one webhook and one bill.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: kitsPath },
      { name: 'Build agent products', path: kitPathOf.build },
    ],
  },

  hero: { headline: 'Build agent products: every piece for every agent, on one key.', sub },

  scene: {
    steps: [
      { icon: 'users', label: 'Three to five vendors today' },
      { icon: 'code', label: 'One key and one bill' },
      { icon: 'persona', label: 'A persona per agent' },
      { icon: 'webhook', label: 'One webhook for every event' },
    ],
    who: 'Junior, the accounts agent at acme.example',
    rows: [
      { at: '10:14', kind: 'email.received', text: 'Invoice INV-2207 from supplier.example' },
      { at: '10:14', kind: 'sandbox.finished', text: '3 line items read in 1.8 s' },
      { at: '10:15', kind: 'email.sent', text: 'Approved, paying on the 30th' },
      { at: '10:22', kind: 'message.received', text: 'Slack: “Did the Acme invoice go through?”' },
      { at: '10:22', kind: 'webhook', text: 'Your agent replied in the thread', tone: 'ok' },
    ],
    caption: 'One agent with an inbox, a sandbox and Slack: four events, one log, one webhook. acme.example is an invented example.',
  },

  pieces: {
    heading: 'One key in place of three to five vendors.',
    line: 'Take one piece or all six, with one webhook and one invoice.',
    items: [
      { piece: 'email', line: 'Inboxes that send and receive, with threads and attachments.' },
      { piece: 'phone', line: 'Numbers that text and take calls.' },
      { piece: 'messaging', line: 'iMessage, WhatsApp, Slack and Telegram.' },
      { piece: 'browser', line: 'A cloud browser that keeps its logins.' },
      { piece: 'sandbox', line: 'A computer to run code, billed only while the CPU works.' },
      { piece: 'personas', line: 'Every piece under one identity, free while it waits.' },
    ],
    prices: ['inbox', 'email', 'number', 'browser', 'sandbox', 'log'],
  },

  blueprints: {
    heading: 'Start an agent product, then check it as a customer would.',
    line: 'Starters for an inbox agent and an iMessage assistant, and checks that join your AI SDR’s lists and shop with your sales agent, keeping every message it sends.',
    slugs: ['inbox-agent', 'imessage-assistant', 'outbound-agent-check', 'sales-agent-check'],
  },

  code: {
    heading: 'One call gives an agent its identity.',
    line: 'Create a persona with the pieces it needs, then subscribe once. Your own agent can do the same over MCP.',
    label: 'agent.ts',
    code,
  },

  who: {
    heading: 'Who builds with it, and what they watch.',
    items: [
      { role: 'Founding engineers', gets: 'An inbox, number, browser and sandbox per agent, on one key.', watch: 'Time to ship, latency, cost per agent' },
      { role: 'Agent platforms', gets: 'An identity for each of your users, under your brand, on one contract.', watch: 'Activation, retention, margin per user' },
      { role: 'Developers adding a piece', gets: 'A number or a browser on the same persona, with no new vendor.', watch: 'Coverage, accuracy, cost per call' },
    ],
  },

  examples: { heading: 'Worked examples', paths: ['/use-cases/prospect-intelligence-with-clay'] },

  faq: {
    heading: 'Before your agent’s first call.',
    items: [
      {
        q: 'Can I start with one piece?',
        a: 'Yes. Start with inboxes, and add a number, a browser or a sandbox later, on the same key and bill.',
        link: { label: 'Email for AI agents', to: '/email' },
      },
      {
        q: 'How do events reach my code?',
        a: 'Through one signed webhook you subscribe to once. If your server is down, events retry for 27 hours and can be replayed. MCP, a handler on our runtime, Zapier, Make and n8n work too.',
      },
      {
        q: 'Can my own agent use it?',
        a: 'Yes. Add it with claude mcp add obsession, and your agent can create inboxes, numbers and browsers itself.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Can each of my users get their own identity?',
        a: 'Yes, on Enterprise: an inbox and a number for each of your users, under your brand, on one contract.',
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Ship your agent with its own inbox today.',
    capture: { kind: 'waitlist', source: 'kit-build', button: 'Start free', interest: 'any' },
  },
}
