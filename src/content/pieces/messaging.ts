import { piecePaths } from '../piecePaths'
import { prices } from '../prices'
import type { PiecePage } from './types'

/* Messaging (/messaging), 21 Nov 2026: iMessage lines, WhatsApp, Slack and Telegram for AI agents, each connected in one
   call, every message reaching one webhook in one shape. WhatsApp's own rules are stated as fact where they shape the
   piece: it is for support, sales, bookings and notifications, a business replies within 24 hours of a person's last
   message, and it opens a conversation with a template WhatsApp approves. The webhook event for a message
   on any of these apps is "message.received". Prices are read from prices.ts, never retyped. */

const sub =
  'Obsession connects your AI agents to iMessage, WhatsApp, Slack and Telegram through one API and one webhook. Your agent gets an iMessage line of its own, and WhatsApp for support, sales, bookings and notifications.'

const code = `import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// Connect each app once
await obsession.messaging.connect({ channel: "imessage" })
await obsession.messaging.connect({ channel: "whatsapp" })
await obsession.messaging.connect({ channel: "slack" })
await obsession.messaging.connect({ channel: "telegram" })

// Every message, from every app, reaches one webhook
await obsession.events.subscribe({
  url: "https://your-app.example/hooks/messages",
  events: ["message.received"],
})`

export const messaging: PiecePage = {
  id: 'messaging',
  name: 'Messaging',
  meta: {
    path: piecePaths.messaging,
    title: 'WhatsApp API for AI agents, plus iMessage lines · Obsession',
    description:
      'A WhatsApp API for AI agents, plus iMessage, Slack and Telegram, through one call each. Every message from every app reaches one webhook, in one shape.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Messaging', path: piecePaths.messaging },
    ],
  },

  hero: {
    headline: 'iMessage and WhatsApp for AI agents: answer where people already message',
    sub,
    code,
  },

  scene: {
    heading: 'One agent on WhatsApp, iMessage, Slack and Telegram.',
    line: 'Customers write where they already are, and your team works in Slack. The same agent answers each, under one name, with one history.',
    steps: [
      { icon: 'chat', label: 'A guest writes on WhatsApp' },
      { icon: 'chat', label: 'Another writes on iMessage' },
      { icon: 'users', label: 'Your team asks in Slack' },
      { icon: 'record', label: 'One agent, one history' },
    ],
    who: 'Noor, the concierge agent at saltmarsh.example',
    note: 'WhatsApp, iMessage and Slack, one agent',
    fleet: '80 agents · 4 apps each',
    rows: [
      { at: '08:02', kind: 'message.received', text: 'WhatsApp: “Is late checkout still free on Sunday?”' },
      { at: '08:02', kind: 'message.received', text: 'iMessage: “Can you book us a taxi for 6am?”' },
      { at: '08:03', kind: 'page.visited', text: 'taxi.example/book · 06:00 pickup · screenshot saved' },
      { at: '08:05', kind: 'message.received', text: 'Slack, #front-desk: “Who asked for the 6am taxi?”' },
      { at: '08:05', kind: 'blueprint.result', text: 'All three answered in 3 min, each in its own app', tone: 'ok' },
    ],
    caption: 'A guest on WhatsApp, another on iMessage and the team in Slack, answered by one agent. Saltmarsh is an invented example.',
  },
  can: {
    heading: 'Your agent answers on the apps people open first.',
    line: 'Each app connects in one call, and your code handles them all alike.',
    items: [
      { title: 'An iMessage line', line: 'Your agent texts from its own line, with blue bubbles, read receipts and typing dots.' },
      { title: 'WhatsApp for business', line: 'Answer support questions, follow up on leads, confirm bookings and send order and delivery updates.' },
      { title: 'Slack', line: 'Your agent joins channels and direct messages, answers when mentioned and posts when work is done.' },
      { title: 'Telegram', line: 'A Telegram bot for your agent, for groups and for 1 to 1 chats.' },
      { title: 'One webhook for every app', line: 'Every message arrives in the same shape, so your code is written once.' },
      { title: 'Photos, voice notes and files', line: 'Media goes both ways on every app, ready for your agent to read.' },
    ],
  },

  events: ['message.received'],

  price: {
    heading: 'Each app is priced the way it charges, on one bill.',
    line: 'An iMessage line is billed by the month, WhatsApp by the message, and Slack and Telegram come with every plan.',
  },

  together: {
    heading: 'Messaging carries the conversation the other pieces start.',
    line: 'One API key and one bill cover every piece.',
    items: [
      { piece: 'email', line: 'Keep email for receipts and long replies, beside the chat.' },
      { piece: 'phone', line: 'A phone number for plain texts, for people on neither iMessage nor WhatsApp.' },
      { piece: 'browser', line: 'Look up an order or a booking in the browser while the person waits in the chat.' },
      { piece: 'sandbox', line: 'Run code on a file someone sends, such as a spreadsheet, and reply with the result.' },
      { piece: 'personas', line: 'One name across iMessage, WhatsApp, email and phone.' },
    ],
  },

  faq: {
    heading: 'Your agent answers where people already are.',
    items: [
      {
        q: 'Is there an iMessage API for AI agents?',
        a: 'Yes. Your agent sends and receives on its own iMessage line through the API. People see an ordinary iMessage conversation, blue bubbles included.',
      },
      {
        q: 'What can an AI agent do with the WhatsApp API?',
        a: 'Support, sales, bookings and notifications, the uses WhatsApp sets for businesses. Your agent replies any time within 24 hours of a person’s last message, and opens a new conversation with a template WhatsApp has approved.',
      },
      {
        q: 'Do I need a separate integration for each app?',
        a: 'No. Each app connects with one call, every message reaches the same webhook in the same shape, and your agent replies through the same API.',
      },
      {
        q: 'What does messaging cost?',
        a: `${prices.imessage.name}: ${prices.imessage.amount} ${prices.imessage.unit}. ${prices.whatsapp.name}: ${prices.whatsapp.amount} ${prices.whatsapp.unit}. ${prices.chat.name}: ${prices.chat.amount} ${prices.chat.unit}.`,
      },
    ],
  },

  final: {
    heading: 'Put your agent where people already message.',
    capture: { kind: 'waitlist', button: 'Start free', interest: 'any', source: 'piece-messaging' },
  },
}
