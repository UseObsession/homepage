import { kitPathOf } from '../../kitPaths'
import { prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI SDR agent (/use-cases/ai-sdr, 22 Nov 2026): one job in one industry. A startup that sells an AI SDR gives every rep
   its customers add its own inbox, number and browser in one call, and every reply reaches one webhook. Modelled on the
   build pattern in the Product Marketing book, job 3 (AI sales reps sending at volume from their own inboxes, research
   in the browser) and Commercial View research A and B. Persona: founders and engineers building AI SDRs, and SDR
   leaders running AI reps, measured on meetings booked, reply rates and cost per rep. Never implies a way round spam
   rules; US texts need registration (prices.ts). Pipewell and Harbourline are invented, at .example addresses. */

const path = '/use-cases/ai-sdr'

/* What 1 rep's inbox and US number cost a month, from prices.ts. */
const perRep = `$${(prices.inbox.value + prices.number.value).toFixed(2)}`

const sub =
  'Obsession, the toolkit for AI agents, gives each AI SDR agent its own inbox, phone number and browser on one API and one bill. Your reps research in the browser, send from their own address and number, and every reply reaches one webhook.'

export const useCase: TeamPage = {
  id: 'ai-sdr',
  kind: 'case',
  name: 'AI SDR agent',
  meta: {
    path,
    title: 'AI SDR agent: its own inbox, phone number and replies',
    description:
      'Give each AI SDR agent its own inbox, phone number and browser on one key. Replies, calls and texts reach one webhook, and a check reads each message sent.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI SDR agent', path },
    ],
  },

  hero: { pill: 'AI sales agents', headline: 'AI SDR agent: its own inbox, phone number and browser, for every rep you ship.', sub },

  scene: {
    steps: [
      { icon: 'users', label: 'A customer adds a new rep' },
      { icon: 'code', label: 'One call gives it an inbox and number' },
      { icon: 'browser', label: 'It reads the account’s site' },
      { icon: 'webhook', label: 'The reply reaches your app' },
    ],
    who: 'Rep 214, an AI SDR at pipewell.example',
    note: 'A reply from the account, a meeting booked',
    fleet: '500 reps · each with its own inbox',
    rows: [
      { at: '09:00', kind: 'page.visited', text: 'harbourline.example/pricing · new Enterprise plan · screenshot saved' },
      { at: '09:02', kind: 'email.sent', text: 'First email to the head of RevOps at Harbourline' },
      { at: '11:47', kind: 'email.received', text: '“Worth a look. Is Thursday free?”', tone: 'ok' },
      { at: '11:48', kind: 'email.sent', text: 'Thursday 15:00 booked, invite sent' },
    ],
    caption: 'One rep read an account’s pricing, wrote from its own inbox and booked a meeting from the reply. Pipewell and Harbourline are invented examples.',
  },

  uses: {
    heading: 'Every rep reachable, every reply caught.',
    line: 'For founders and engineers building AI SDRs, and sales teams giving their own AI reps an identity.',
    items: [
      {
        kit: 'build',
        name: 'An inbox per rep',
        line: 'Each AI rep sends and receives from its own address on your domain, with threads and attachments.',
        pieces: ['email', 'personas'],
      },
      {
        kit: 'build',
        name: 'A number for calls and texts',
        line: 'Reps call and text from their own number. US business texts need registration, which Obsession files for you.',
        pieces: ['phone'],
      },
      {
        kit: 'build',
        name: 'Research in a browser',
        line: 'A cloud browser reads each account’s site and pricing before the first line, with a screenshot of each page.',
        pieces: ['browser'],
      },
      {
        kit: 'build',
        name: 'Every reply at one webhook',
        line: 'Replies, calls and texts reach your app as events, so a rep stops its sequence the moment someone says no.',
        pieces: ['email', 'phone', 'personas'],
      },
      {
        kit: 'test',
        name: 'What your AI SDR sends, read as a prospect',
        line: 'Personas, test prospects with their own inboxes and numbers, join your rep’s lists and keep every message it sends, with any that break your rules flagged.',
        blueprint: 'outbound-agent-check',
        pieces: ['personas', 'email', 'phone'],
      },
      {
        kit: 'watch',
        name: 'A dated fact for every first line',
        line: 'A persona signs up at each account on the list and brings back what it sends its customers, for the opening line.',
        blueprint: 'prospect-intelligence',
        pieces: ['personas', 'email', 'browser'],
      },
    ],
  },

  blueprints: {
    heading: 'Blueprints for teams running AI reps.',
    line: 'No code. Results land in Slack, a sheet or your CRM.',
    slugs: ['outbound-agent-check', 'prospect-intelligence', 'lead-leaks', 'sales-agent-check'],
  },

  prices: ['inbox', 'email', 'number', 'sms', 'register', 'browser'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Founders building AI SDRs', gets: 'An inbox, a number and a browser for every rep your customers add, from 1 rep to thousands, on one bill.', watch: 'Meetings booked per rep, reply rates, cost per rep' },
      { role: 'Engineers on the agent', gets: 'One call per rep, and one signed webhook for every reply, call and text.', watch: 'Latency, accuracy, cost per call' },
      { role: 'SDR leaders running AI reps', gets: 'Every message your AI reps send, read from a prospect’s inbox, with the ones that break your rules flagged.', watch: 'Reply rates, meetings booked, opportunities' },
    ],
  },

  examples: { heading: 'Worked examples', paths: ['/use-cases/prospect-intelligence-with-clay', '/use-cases/sales-intelligence-behind-the-login'] },

  faq: {
    heading: 'Before your next rep sends its first email.',
    items: [
      {
        q: 'How does an AI SDR agent get its own inbox and number?',
        a: 'In one call: obsession.personas.create({ inbox: true, phone: "US", browser: true }). Replies reach your webhook as email.received and sms.received events, and your own agent can do the same over MCP.',
        link: { label: 'Build agent products', to: kitPathOf.build },
      },
      {
        q: 'Will it help our reps get past spam filters?',
        a: 'No. Each rep sends from its own inbox on your own domain, within each mailbox provider’s rules. Every reply lands in the event log, so a rep stops the moment someone says no.',
      },
      {
        q: 'Does the rep say it’s an AI?',
        a: 'Yes, whenever it talks to a person, on a call, by text or by email. It stops before payment, and works within a monthly spend limit you set on its key.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'What does it cost per rep?',
        a: `Start on the Free plan, with no credit card. A rep with an inbox and a US number costs ${perRep} a month, before emails and texts. US business texts need registration: ${registration.once} once per campaign, then ${registration.monthly} a month while it’s active.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Give your next AI rep its own inbox today.',
    capture: { kind: 'waitlist', source: 'case-ai-sdr', button: 'Start free', interest: 'outbound-agent' },
  },
}
