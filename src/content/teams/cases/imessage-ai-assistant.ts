import { plans, prices } from '../../prices'
import type { TeamPage } from '../types'

/* iMessage AI assistant (/use-cases/imessage-ai-assistant, 22 Nov 2026, _research/seo/revamp-22nov/PLAN_usecases.md):
   build agent products, for founders of consumer AI assistants people text. Modelled on the consumer-assistant pattern
   in the Product Marketing book's build job (an assistant on iMessage, plus the inbox, browser and computer it acts
   with); no competitor or customer is named. Owns "imessage ai assistant" and "best imessage ai assistant" (Google
   suggestions, 22 Nov). Marlo and the bistro are invented. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const path = '/use-cases/imessage-ai-assistant'

const sub =
  'Obsession, the toolkit for AI agents, gives your iMessage AI assistant a persona, its own iMessage line, inbox, number and browser under one name. Users text it like a friend, and every message, booking and reply lands in one event log.'

export const useCase: TeamPage = {
  id: 'imessage-ai-assistant',
  kind: 'case',
  name: 'iMessage AI assistant',
  meta: {
    path,
    title: 'iMessage AI assistant: a line and identity for every agent',
    description:
      'Give your iMessage AI assistant its own line, plus an inbox, a number for Android users and a browser for bookings, on one API key and one bill.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'iMessage AI assistant', path },
    ],
  },

  hero: {
    pill: 'Consumer AI assistants',
    headline: 'iMessage AI assistant: a line of its own, plus an inbox, number and browser.',
    sub,
  },

  scene: {
    steps: [
      { icon: 'chat', label: 'A user texts the assistant’s line' },
      { icon: 'browser', label: 'It books on the restaurant’s site' },
      { icon: 'mail', label: 'The confirmation lands in its inbox' },
      { icon: 'record', label: 'It replies in the same thread' },
    ],
    who: 'Marlo, a personal assistant at marlo.example',
    rows: [
      { at: 'Fri · 18:02', kind: 'message.received', text: 'iMessage: “Table for 4 tonight, somewhere near Soho?”' },
      { at: 'Fri · 18:02', kind: 'page.visited', text: 'bistro.example/book · 4 people at 20:00 · screenshot saved' },
      { at: 'Fri · 18:03', kind: 'email.received', text: 'Your table for 4 at 20:00 is confirmed' },
      { at: 'Fri · 18:03', kind: 'webhook', text: 'Marlo replied in the iMessage thread, 61 s after the ask', tone: 'ok' },
    ],
    caption: 'One text in, one booking out: the line, the browser and the inbox under one identity. Marlo and the bistro are invented examples.',
  },

  uses: {
    heading: 'Everything the best iMessage AI assistant does, from one thread.',
    line: 'Every piece runs on one API and one bill, so the line, the inbox, the browser and the sandbox share one key and one event log.',
    items: [
      {
        kit: 'build',
        name: 'Its own iMessage line',
        line: 'Blue bubbles, read receipts and typing dots, from a line that belongs to your assistant.',
        pieces: ['messaging'],
      },
      {
        kit: 'build',
        name: 'Texts for people on Android',
        line: 'Its own number reaches people who aren’t on iMessage, by plain text.',
        pieces: ['phone'],
      },
      {
        kit: 'portals',
        name: 'Bookings and orders in a browser',
        line: 'It books the table or tracks the parcel in a browser that keeps its logins, and stops before payment unless given the user’s own card.',
        pieces: ['browser', 'personas'],
      },
      {
        kit: 'build',
        name: 'Confirmations in its own inbox',
        line: 'Booking confirmations and receipts land in the assistant’s inbox, ready to read back in the thread.',
        pieces: ['email'],
      },
      {
        kit: 'build',
        name: 'Photos and files, worked on',
        line: 'A user sends a spreadsheet or a photo of a bill, and a sandbox runs the code that answers.',
        pieces: ['messaging', 'sandbox'],
      },
      {
        kit: 'test',
        name: 'Answers checked after every model update',
        line: 'Your hardest questions asked again after each update, with every answer that changed.',
        blueprint: 'drift-watch',
        pieces: ['personas'],
      },
    ],
  },

  blueprints: {
    heading: 'Checks for an assistant people text every day.',
    line: 'Each runs on its own and posts what it found to Slack, a sheet or your webhook.',
    slugs: ['drift-watch', 'ai-disclosure-check'],
  },

  prices: ['imessage', 'number', 'sms', 'inbox', 'browser', 'persona'],

  who: {
    heading: 'Who builds it, and what they watch.',
    items: [
      { role: 'Founder or CEO', gets: 'An assistant people text like a friend, live without a messaging bridge to run.', watch: 'Activation, messages per user, retention' },
      { role: 'Founding engineer', gets: 'A line, an inbox, a number and a browser in one call, and one webhook for every message.', watch: 'Time to ship, latency, cost per user' },
      { role: 'Growth lead', gets: 'Every conversation, booking and reply in one log, by user and by day.', watch: 'Activation, retention, churn' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/ai-sdr', '/use-cases/ai-agent-for-customer-support', '/use-cases/trial-checks-for-software-companies'],
  },

  faq: {
    heading: 'Before your assistant’s first text.',
    items: [
      {
        q: 'What does an iMessage AI assistant cost?',
        a: `${prices.imessage.name}: ${prices.imessage.amount} ${prices.imessage.unit}. A persona costs nothing while it waits. Start on the Free plan, with no credit card, then ${orList(fees)} a month, with each piece billed at its list rate.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Will users know they’re texting an AI?',
        a: 'Yes. Your assistant says it’s an AI when it talks to a person. It also stops before payment unless given the user’s own card, and never gets round a CAPTCHA or a bot block.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How does my code send and receive iMessages?',
        a: 'Connect the line once with obsession.messaging.connect({ channel: "imessage" }). Every message reaches your webhook as message.received, and your assistant replies through the same API.',
        link: { label: 'The API and MCP', to: '/developers' },
      },
      {
        q: 'Do I need to run my own iMessage bridge?',
        a: 'No. The line runs on Obsession, and its messages reach your webhook in the same shape as WhatsApp, Slack, Telegram and plain texts.',
        link: { label: 'Messaging for AI agents', to: '/messaging' },
      },
    ],
  },

  final: {
    heading: 'Put your assistant on iMessage, with every piece it needs.',
    capture: { kind: 'waitlist', source: 'case-imessage-ai-assistant', button: 'Start free', interest: 'any' },
  },
}
