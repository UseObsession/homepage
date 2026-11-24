import { kitPathOf } from '../../kitPaths'
import { prices } from '../../prices'
import type { TeamPage } from '../types'

/* AI agent for customer support (/use-cases/ai-agent-for-customer-support, 22 Nov 2026): one job in one industry. A
   consumer brand's support agent answers on its own number, carries on by WhatsApp and emails from its own inbox, and a
   daily check call keeps every answer beside the policy page. Modelled on the support pattern in the Product Marketing
   book, jobs 1 and 2 (support lines in many languages, numbers per region, checked daily from outside) and Commercial
   View research A (a support agent's own inbox that routes sensitive mail to a person). Persona: support, CX and AI
   operations leads, measured on first-contact resolution, CSAT and response time. Fernhill Home is invented, at a
   .example address. */

const path = '/use-cases/ai-agent-for-customer-support'

const sub =
  'Obsession, the toolkit for AI agents, gives an AI agent for customer support its own phone number, inbox and WhatsApp on one API and one bill. Every call, message and email lands on one timeline per customer, and a daily check call keeps each answer word for word.'

export const useCase: TeamPage = {
  id: 'ai-agent-for-customer-support',
  kind: 'case',
  name: 'AI agent for customer support',
  meta: {
    path,
    title: 'AI agent for customer support: a number, inbox and WhatsApp',
    description:
      'Give your AI agent for customer support its own phone number, inbox and WhatsApp, with every call and reply on one timeline and each answer checked daily.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agent for customer support', path },
    ],
  },

  hero: { pill: 'Customer support', headline: 'AI agent for customer support: phone, WhatsApp and email from one identity, checked every day.', sub },

  scene: {
    steps: [
      { icon: 'phone', label: 'A customer calls the support line' },
      { icon: 'chat', label: 'They send a photo on WhatsApp' },
      { icon: 'mail', label: 'The agent emails the return label' },
      { icon: 'record', label: 'The ticket closes with every channel' },
    ],
    who: 'Mia, the support agent at Fernhill Home',
    note: 'One thread across phone, WhatsApp and email',
    fleet: '30 agents · 5,000 tickets a week',
    rows: [
      { at: 'Mon 08:14', kind: 'call.ended', text: '6 min 40 s · Spanish · thermostat offline after the update · transcript kept' },
      { at: 'Mon 08:15', kind: 'message.received', text: 'WhatsApp: a photo of the wiring' },
      { at: 'Mon 08:17', kind: 'email.sent', text: 'Replacement and return label for order 55120', tone: 'ok' },
      { at: 'Mon 08:17', kind: 'webhook', text: 'Ticket closed in your help desk, with the call, the photo and the email' },
    ],
    caption: 'One agent answers by phone, WhatsApp and email in one thread, and the replacement leaves 3 minutes after the call. Fernhill Home is an invented example.',
  },

  uses: {
    heading: 'Every channel answered, every answer kept.',
    line: 'For support and CX teams at consumer brands, subscription apps, utilities and marketplaces whose AI answers the phone, WhatsApp or email.',
    items: [
      {
        kit: 'talk',
        name: 'A support line on its own number',
        line: 'Your voice agent answers on its own US or UK number, with every call’s transcript in the event log.',
        pieces: ['phone', 'personas'],
      },
      {
        kit: 'talk',
        name: 'WhatsApp and texts from the same agent',
        line: 'Customers continue on WhatsApp or by text with the agent they spoke to, under one name.',
        pieces: ['messaging', 'phone'],
      },
      {
        kit: 'talk',
        name: 'An inbox for tickets and replies',
        line: 'The agent answers from its own address, attaches labels and photos, and routes refunds and complaints to your team.',
        pieces: ['email', 'personas'],
      },
      {
        kit: 'test',
        name: 'Every answer checked each morning',
        line: 'A persona, a test customer with its own number and inbox, calls your support line and keeps each answer beside your policy page.',
        blueprint: 'voice-agent-check',
        pieces: ['personas', 'phone'],
      },
      {
        kit: 'test',
        name: 'Your chat bot, asked as a customer',
        line: 'A persona asks your support bot what your team hears most and flags any answer your policy doesn’t back.',
        blueprint: 'support-bot-check',
        pieces: ['personas', 'browser'],
      },
      {
        kit: 'test',
        name: 'What followed each resolution',
        line: 'Each resolution your AI vendor bills, matched to the refund, replacement or repeat contact that followed.',
        blueprint: 'resolution-check',
        pieces: ['personas', 'browser'],
      },
    ],
  },

  blueprints: {
    heading: 'Checks support teams run every day.',
    line: 'Each posts what changed to Slack, a sheet or your helpdesk.',
    slugs: ['voice-agent-check', 'support-bot-check', 'resolution-check', 'drift-watch'],
  },

  prices: ['number', 'voice', 'whatsapp', 'sms', 'inbox', 'persona'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Support and CX leads', gets: 'Every call, WhatsApp message and email with a customer on one timeline, word for word.', watch: 'First-contact resolution, CSAT, response time' },
      { role: 'AI operations leads', gets: 'What the agent told a caller this morning, beside your policy page, with every change flagged.', watch: 'Resolution rate, policy errors, escalations' },
      { role: 'Engineers building the agent', gets: 'A number, an inbox and WhatsApp for 1 agent or one per region, with every event at one webhook.', watch: 'Latency, coverage, cost per conversation' },
    ],
  },

  examples: { heading: 'Worked examples', paths: ['/use-cases/journey-checks-for-banks-and-fintechs', '/use-cases/leak-checks-for-ecommerce-stores'] },

  faq: {
    heading: 'Before your support agent takes its first call.',
    items: [
      {
        q: 'What does an AI agent for customer support need from Obsession?',
        a: 'A number for calls and texts, an inbox for tickets and WhatsApp, under one name. Your own voice agent and helpdesk connect through one signed webhook, so every event reaches them.',
        link: { label: 'Talk to customers', to: kitPathOf.talk },
      },
      {
        q: 'What happens when the agent gets an answer wrong?',
        a: 'The daily check calls and chats with it as a customer and keeps each answer beside your policy page. A wrong warranty or refund answer reaches Slack the same morning.',
        link: { label: 'See the blueprint', to: '/blueprints/voice-agent-check' },
      },
      {
        q: 'Does it tell customers it’s an AI?',
        a: 'Yes, whenever it talks to a person. It uses WhatsApp only for support, sales, bookings and notifications, and stops before payment unless given the customer’s own card.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'What does it cost?',
        a: `Start on the Free plan, with no credit card. Then a number is ${prices.number.amount} a month, a call ${prices.voice.amount} a minute, and WhatsApp is ${prices.whatsapp.amount} a message.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Give your support agent its own number and inbox today.',
    capture: { kind: 'waitlist', source: 'case-ai-agent-for-customer-support', button: 'Start free', interest: 'voice-agent' },
  },
}
