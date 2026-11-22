import { eventLogKept, plans } from '../prices'
import type { TeamPage } from './types'

/* Compliance (/use-cases/opt-out-and-cancel-checks-for-compliance-teams, 22 Nov 2026): the team page for compliance and
   legal leads at subscription companies, banks, insurers and telecoms (Product Marketing book, the regulators fold). A
   persona cancels, unsubscribes and texts STOP, and keeps every step and every message after it. The laws and dates are
   the 12 Nov reading kept word for word (_research/seo/usecases-compliance-funds-12nov/): general information, never
   legal advice. Fernhill is invented. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const path = '/use-cases/opt-out-and-cancel-checks-for-compliance-teams'

const sub =
  'Opt-out compliance means proving that cancel, unsubscribe and STOP work the way the law and your terms say. Obsession, the toolkit for AI agents, sends a persona, an AI agent with its own inbox, number and browser, to do each one. It keeps every step, and every message sent after it, in one event log, dated.'

export const team: TeamPage = {
  id: 'compliance',
  name: 'Compliance',
  meta: {
    path,
    title: 'Opt-out compliance: proof cancel, unsubscribe and STOP work',
    description:
      'AI agents cancel, unsubscribe and text STOP at your company and its competitors. Each step’s screenshot and every message sent after it are kept, dated.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Compliance', path },
    ],
  },

  hero: {
    pill: 'Compliance',
    headline: 'Opt-out compliance: proof that every cancel, unsubscribe and STOP works, kept for months.',
    sub,
  },

  scene: {
    steps: [
      { icon: 'persona', label: 'A persona joins as a member' },
      { icon: 'stop', label: 'It cancels, unsubscribes and texts STOP' },
      { icon: 'clock', label: 'It keeps its inbox and number for months' },
      { icon: 'record', label: 'Every message after, dated' },
    ],
    who: 'A member persona at fernhill.example, a gym membership app',
    rows: [
      { at: '1 Nov · 09:10', kind: 'page.visited', text: 'Cancel flow · 4 steps · save offer on step 2' },
      { at: '1 Nov · 09:14', kind: 'page.visited', text: 'Unsubscribe link · confirmed' },
      { at: '1 Nov · 09:20', kind: 'sms.received', text: 'STOP confirmed. Nothing since.' },
      { at: '10 Nov · 08:02', kind: 'email.received', text: '“Last chance: 30% off annual” · signed by Fernhill', tone: 'fail' },
      { at: '10 Nov · 08:03', kind: 'webhook', text: 'Sent to the compliance team' },
    ],
    caption: 'An email 9 days after an unsubscribe, signed by the company that sent it. Fernhill is an invented example.',
  },

  uses: {
    heading: 'Proof for every way a customer leaves.',
    line: 'Every piece sits on one account and one bill, so cancel flows, opt-outs and your own AI agents share one event log.',
    items: [
      {
        kit: 'test',
        name: 'Cancel flow, step by step',
        line: 'Every screen from the account page to the confirmation, after every release, each with its screenshot and time.',
        blueprint: 'website-audit',
        pieces: ['personas', 'browser'],
      },
      {
        kit: 'test',
        name: 'Unsubscribes honoured',
        line: 'Every email after an unsubscribe, kept as it arrived with its DKIM check, which shows who signed it.',
        blueprint: 'delivery-monitoring',
        pieces: ['personas', 'email'],
      },
      {
        kit: 'test',
        name: 'Texts after STOP',
        line: 'The confirmation, and anything sent after it, each with its time.',
        blueprint: 'delivery-monitoring',
        pieces: ['personas', 'phone'],
      },
      {
        kit: 'test',
        name: 'AI disclosure on every channel',
        line: 'Your agents asked every day, on chat, phone and email, whether they’re an AI.',
        blueprint: 'ai-disclosure-check',
        pieces: ['phone', 'email', 'browser'],
      },
      {
        kit: 'test',
        name: 'Required disclosures on calls',
        line: 'A persona calls your voice line and keeps the transcript, so you can show each disclosure was read.',
        blueprint: 'voice-agent-check',
        pieces: ['phone'],
      },
      {
        kit: 'watch',
        name: 'Competitors’ cancel flows',
        line: 'How many steps each competitor takes to cancel, and what it offers to stay.',
        blueprint: 'competitor-tracking',
        pieces: ['personas', 'browser', 'email'],
      },
      {
        kit: 'test',
        name: 'An evidence file per company',
        line: 'Each check’s screenshots, messages and times in one export from your event log.',
        pieces: ['personas'],
      },
    ],
  },

  blueprints: {
    heading: 'Checks that run on a schedule, with the evidence kept.',
    line: 'No code. Name the companies, the plan and the country, and say where results go.',
    slugs: ['delivery-monitoring', 'website-audit', 'ai-disclosure-check', 'voice-agent-check', 'email-sms-tracking', 'competitor-tracking'],
  },

  prices: ['persona', 'inbox', 'number', 'sms', 'browser', 'log'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Compliance and legal', gets: 'Dated evidence that every cancel, unsubscribe and STOP worked, ready before a regulator asks.', watch: 'Findings, audit readiness, complaints' },
      { role: 'Product and lifecycle', gets: 'The release that added a save offer or broke an unsubscribe link, the day it shipped.', watch: 'Retention, complaints, release defects' },
      { role: 'Customer experience and AI operations', gets: 'Every disclosure your agents gave on calls and chat, word for word.', watch: 'Complaints, resolution accuracy, CSAT' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/consumer-promotions-data-for-funds'],
  },

  faq: {
    heading: 'Before the first opt-out check.',
    items: [
      {
        q: 'Which rules does it help you evidence?',
        a: 'In the EU, a withdrawal button is required from 19 June 2026, for contracts made online that carry a right to withdraw (Directive (EU) 2023/2673). In the UK, the government says the Digital Markets, Competition and Consumers Act’s subscription rules come into force in January 2027. Gmail and Yahoo require one-click unsubscribe from bulk senders, and in the US, CAN-SPAM allows 10 business days. This is general information, not legal advice.',
      },
      {
        q: 'What about texts and the FTC’s click-to-cancel rule?',
        a: 'In the US, a STOP reply revokes consent to marketing texts, and the FCC’s rule gives 10 business days to honour it. A US federal appeals court vacated the FTC’s click-to-cancel rule on procedural grounds in July 2025. Federal law on online subscriptions and state laws still apply. California, for one, requires online cancellation for anyone who signed up online, on contracts made or renewed from 1 July 2025.',
        link: { label: 'What is click-to-cancel?', to: '/glossary/click-to-cancel' },
      },
      {
        q: 'Where does the evidence come from?',
        a: 'From real subscriptions. A persona signs up, cancels, unsubscribes and texts STOP the way any customer can, and keeps each step’s screenshot and every message exactly as it arrived. It says it’s an AI when it talks to a person, never invents identity details and stops at any identity check.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'What does it cost?',
        a: `Start on the Free plan, with no credit card. Paid plans are ${orList(fees)} a month, and each blueprint is billed on the pieces it uses. The event log keeps every event for ${eventLogKept}, and longer on Enterprise.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Keep proof that every cancel, unsubscribe and STOP works.',
    capture: { kind: 'waitlist', source: 'team-compliance', button: 'Start free', interest: 'delivery' },
  },
}
