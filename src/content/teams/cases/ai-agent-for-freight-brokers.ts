import { personaCostLine, plans, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI agent for freight brokers (/use-cases/ai-agent-for-freight-brokers, 22 Nov 2026, _research/seo/revamp-22nov/
   PLAN_usecases.md): work behind logins, for brokerage operations and the freight tech teams that build their agents.
   Modelled on the dispatcher pattern in the competitor research (carrier calls, rate confirmations by email, load boards
   and carrier portals signed in); no competitor or customer is named and no figure is borrowed. Owns "ai agent for
   freight broker" and "ai agents for trucking" (Google suggestions, 22 Nov). Ridgeline and its load are invented. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const path = '/use-cases/ai-agent-for-freight-brokers'

const sub =
  'Obsession, the toolkit for AI agents, gives each AI agent for freight brokers a number for carrier calls, an inbox for rate confirmations and a browser signed in to load boards. Every call, email and posting lands in one event log, load by load.'

export const useCase: TeamPage = {
  id: 'ai-agent-for-freight-brokers',
  kind: 'case',
  name: 'AI agent for freight brokers',
  meta: {
    path,
    title: 'AI agent for freight brokers: carrier calls and load boards',
    description:
      'An AI agent for freight brokers with its own number for carrier calls and texts, an inbox for rate confirmations and a browser signed in to load boards.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agent for freight brokers', path },
    ],
  },

  hero: {
    pill: 'Freight brokerages',
    headline: 'AI agent for freight brokers: cover loads by phone, email and load board.',
    sub,
  },

  scene: {
    steps: [
      { icon: 'phone', label: 'The agent calls carriers on the lane' },
      { icon: 'mail', label: 'It sends the rate confirmation' },
      { icon: 'sandbox', label: 'The signed copy is checked' },
      { icon: 'record', label: 'The load is covered, in the log' },
    ],
    who: 'Coverage agent 6 at ridgeline.example',
    note: 'Load covered 18 minutes after the call',
    fleet: '20 agents · 900 loads a week',
    rows: [
      { at: 'Tue · 14:02', kind: 'call.ended', text: 'Dallas to Atlanta, dry van · $2.45 a mile agreed · transcript kept' },
      { at: 'Tue · 14:04', kind: 'email.sent', text: 'Rate confirmation, load 58213 · $2.45 a mile' },
      { at: 'Tue · 14:19', kind: 'email.received', text: 'Signed rate confirmation, load 58213' },
      { at: 'Tue · 14:19', kind: 'sandbox.finished', text: 'Signed copy matches: $2.45 a mile, pickup Thu 08:00' },
      { at: 'Tue · 14:20', kind: 'webhook', text: 'Load 58213 marked covered', tone: 'ok' },
    ],
    caption: 'A load covered in 18 minutes: the call, the rate confirmation and the signed copy in one log. Ridgeline is an invented brokerage.',
  },

  uses: {
    heading: 'Every load, from the first carrier call to the signed rate confirmation.',
    line: 'Every piece runs on one API and one bill, so the number, the inbox, the browser and the sandbox share one key and one event log.',
    items: [
      {
        kit: 'talk',
        name: 'Carrier calls',
        line: 'The agent calls carriers on a lane from its own number, says it’s an AI and keeps every word.',
        pieces: ['phone'],
      },
      {
        kit: 'talk',
        name: 'Check calls by text',
        line: 'Pickup times and ETAs by text from the same number, with every driver’s reply dated.',
        pieces: ['phone'],
      },
      {
        kit: 'portals',
        name: 'Load boards, signed in',
        line: 'A browser stays signed in to each load board for weeks, posts your loads and searches for trucks.',
        pieces: ['browser', 'personas'],
      },
      {
        kit: 'portals',
        name: 'Rate confirmations by email',
        line: 'Rate confirmations go out and come back through the agent’s inbox, and a sandbox checks each against the agreed rate.',
        pieces: ['email', 'sandbox'],
      },
      {
        kit: 'portals',
        name: 'Carrier checks',
        line: 'Before it offers a load, the agent reads the carrier’s authority and insurance on file in the US government’s public lookup.',
        pieces: ['browser'],
      },
      {
        kit: 'test',
        name: 'Shipper quote requests, timed',
        line: 'A persona asks for a quote on your site as a new shipper and times the first email, text and call back.',
        blueprint: 'lead-leaks',
        pieces: ['email', 'phone'],
      },
    ],
  },

  blueprints: {
    heading: 'Track every load in carrier portals, and check your sales line and agents.',
    line: 'Each runs without code and posts what it found to Slack, a sheet or your webhook.',
    slugs: ['load-tracking', 'lead-leaks', 'voice-agent-check', 'vendor-agent-check'],
  },

  prices: ['voice', 'number', 'sms', 'inbox', 'browser', 'sandbox'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Brokerage operations lead', gets: 'Loads covered by call, email and load board, each step dated in one log.', watch: 'Loads covered per rep, time to cover, margin per load' },
      { role: 'Carrier sales and dispatch', gets: 'Check calls and ETAs by text, with every carrier and driver reply kept.', watch: 'On-time pickup, check calls completed, fall-offs' },
      { role: 'Engineers at a freight tech company', gets: 'A number, an inbox and a signed-in browser for each agent, on one key.', watch: 'Task success rate, cost per load' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/prior-authorization-ai-agent', '/use-cases/ai-sdr', '/use-cases/prospect-intelligence-with-clay'],
  },

  faq: {
    heading: 'Before your agent covers its first load.',
    items: [
      {
        q: 'What does an AI agent for freight brokers cost?',
        a: `${personaCostLine} It costs nothing while it waits. ${registration.line} Start on the Free plan, with no credit card, then ${orList(fees)} a month.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Will carriers know they’re talking to an AI?',
        a: 'Yes. The agent says it’s an AI when it talks to a person, on every call and text. It stops before payment unless given your own payment card, and never gets round a CAPTCHA or a bot block.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How do AI agents for trucking stay signed in to load boards?',
        a: 'Create a browser with obsession.browsers.create({ home: "US" }) and drive it with Playwright over CDP. It keeps its session for weeks, and each login code reaches your code as email.received or sms.received.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'What if a signed rate confirmation shows the wrong rate?',
        a: 'Your agent reads each signed copy in its sandbox and checks it against the rate agreed on the call. A mismatch reaches your team by webhook before pickup, with the call transcript beside it.',
      },
    ],
  },

  final: {
    heading: 'Cover your next load by call, email and load board.',
    capture: { kind: 'waitlist', source: 'case-ai-agent-for-freight-brokers', button: 'Start free', interest: 'any' },
  },
}
