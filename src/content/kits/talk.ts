import { kitPathOf, kitsPath } from '../kitPaths'
import { registration } from '../prices'
import type { KitPage } from './types'

/* Talk to customers (/blueprints/talk-to-customers): the agent that answers the phone, texts the quote and emails the
   documents, on one number and one inbox under one identity. Product Marketing book, job 1 (22 Nov 2026). */

const sub =
  'Your agent answers on its own number, texts the quote and emails the documents. Every call, text and email lands in one event log, in order.'

export const talk: KitPage = {
  id: 'talk',
  name: 'Talk to customers',
  meta: {
    path: kitPathOf.talk,
    title: 'AI agents that talk to customers: calls, texts and email',
    description:
      'Give the AI agent that answers your customers a US or UK number, texts, WhatsApp and an inbox under one identity, with every call and reply in one log.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: kitsPath },
      { name: 'Talk to customers', path: kitPathOf.talk },
    ],
  },

  hero: { headline: 'AI agents that talk to customers: calls, texts and email from one identity.', sub },

  scene: {
    steps: [
      { icon: 'phone', label: 'A lead calls the agent’s number' },
      { icon: 'chat', label: 'It texts the quote back' },
      { icon: 'mail', label: 'It emails the documents' },
      { icon: 'record', label: 'Every word lands in the log' },
    ],
    who: 'Riley, the quotes agent at Sunnyside Insurance',
    rows: [
      { at: '09:02', kind: 'call.received', text: '+1 512 555 0142 · 3 min 12 s · transcript kept' },
      { at: '09:05', kind: 'call.ended', text: 'Quote requested: $142 a month' },
      { at: '09:06', kind: 'email.sent', text: 'Your quote and policy documents' },
      { at: '09:41', kind: 'sms.received', text: '“Can I start on Monday?”' },
      { at: '09:41', kind: 'webhook', text: 'Sent to your CRM in 180 ms', tone: 'ok' },
    ],
    caption: 'One agent, one identity: the call, the text and the email in one log. Sunnyside Insurance is an invented example.',
  },

  pieces: {
    heading: 'One number, one inbox, every channel.',
    line: 'They share one name, so a customer reaches the same agent however they get in touch.',
    items: [
      { piece: 'phone', line: 'A US or UK number for calls and texts, with your voice agent or one we connect.' },
      { piece: 'messaging', line: 'WhatsApp, iMessage, Slack and Telegram on the same identity.' },
      { piece: 'email', line: 'An inbox for quotes, documents and the replies.' },
      { piece: 'personas', line: 'All of them under one name, free while it waits.' },
    ],
    prices: ['number', 'sms', 'voice', 'inbox', 'whatsapp', 'register'],
  },

  blueprints: {
    heading: 'Answer every call, text and lead, and check what your agent says.',
    line: 'Ready-made jobs that call back, remind and chase on your behalf, and checks that call, text and chat with your own agent as a customer would.',
    slugs: ['missed-call-text-back', 'appointment-reminders', 'speed-to-lead-callback', 'document-chaser', 'voice-agent-check', 'support-bot-check', 'ai-disclosure-check'],
  },

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Voice and AI operations', gets: 'A number per agent, with every transcript and outcome in one place.', watch: 'Calls handled, appointments booked, callbacks kept' },
      { role: 'Customer experience', gets: 'Calls, texts and emails from one agent, on one timeline per customer.', watch: 'First-contact resolution, response time, CSAT' },
      { role: 'Sales and RevOps', gets: 'Every new lead hears back by call, text and email within minutes.', watch: 'Speed to lead, meetings booked, conversion' },
    ],
  },

  faq: {
    heading: 'Before your agent takes its first call.',
    items: [
      {
        q: 'Can I bring my own voice agent?',
        a: 'Yes. Point it at the number, or let Obsession connect one. The call’s start, end and transcript land in your event log either way.',
      },
      {
        q: 'Can the same agent text and email?',
        a: 'Yes. A persona holds the number, the inbox and the messaging channels under one name, so a reply on any of them reaches the same agent.',
      },
      {
        q: 'Do I need US texting registration?',
        a: `US carriers require it for business texts, and Obsession files it for you: ${registration.once} once per campaign, then ${registration.monthly} a month while it’s active.`,
      },
      {
        q: 'Does the agent say it’s an AI?',
        a: 'Yes, whenever it talks to a person, by phone, text or email.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
    ],
  },

  final: {
    heading: 'Give your agent its own number.',
    capture: { kind: 'waitlist', source: 'kit-talk', button: 'Start free', interest: 'voice-agent' },
  },
}
