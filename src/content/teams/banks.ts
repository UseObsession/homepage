import { plans } from '../prices'
import type { TeamPage } from './types'

/* Banks and fintechs (/use-cases/journey-checks-for-banks-and-fintechs, 22 Nov 2026): the team page for banks, credit
   unions, lenders and fintechs, ranked by the job their agents do (Top 3 Buyers: fintech portals and sign-up, lenders'
   applicant calls, banks' agents and account opening). A persona applies up to the identity check and never past it
   (James, 11 Nov), and checks codes, chat answers and competitors' application rates. Kittiwake Bank is invented. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)
const enterpriseFrom = plans.find((p) => p.id === 'enterprise')?.from ?? 0

const path = '/use-cases/journey-checks-for-banks-and-fintechs'

const sub =
  'Obsession, the toolkit for AI agents, sends a persona, an AI agent with its own inbox, number and browser, to apply at your bank and your competitors. It stops at the identity check, and every step, rate, code and chat answer lands in one event log.'

export const team: TeamPage = {
  id: 'banks',
  name: 'Banks and fintechs',
  meta: {
    path,
    title: 'Banks and fintechs: test account opening up to the ID check',
    description:
      'AI agents apply at your bank and competitors up to the identity check. Every step, rate, login code and chat answer is kept, dated, with its screenshot.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Banks and fintechs', path },
    ],
  },

  hero: {
    pill: 'Banks and fintechs',
    headline: 'Banks and fintechs: test account opening, login codes and chat answers as a new applicant.',
    sub,
  },

  scene: {
    steps: [
      { icon: 'persona', label: 'A persona starts an application' },
      { icon: 'stop', label: 'It stops at the identity check' },
      { icon: 'chat', label: 'It asks chat about the rate' },
      { icon: 'record', label: 'Each answer checked against your terms' },
    ],
    who: 'A new saver persona at kittiwake.example',
    rows: [
      { at: 'Tue · 07:00', kind: 'page.visited', text: 'kittiwake.example/apply · 5 steps · screenshots saved' },
      { at: 'Tue · 07:01', kind: 'sms.received', text: 'Your Kittiwake code is 318540' },
      { at: 'Tue · 07:02', kind: 'page.visited', text: 'Stopped at the identity check: passport photo and selfie' },
      { at: 'Tue · 07:04', kind: 'message.received', text: 'Chat: “Yes, 4.6% is fixed for 12 months.”' },
      { at: 'Tue · 07:04', kind: 'blueprint.result', text: 'The rate page says variable', tone: 'fail' },
    ],
    caption: 'A chat answer that disagrees with the rate page, caught the morning it changed. Kittiwake Bank is an invented example.',
  },

  uses: {
    heading: 'Account opening, codes, chat and competitors’ rates.',
    line: 'Every piece sits on one account and one bill, so your applications, competitors’ rates and your support line share one event log.',
    items: [
      {
        kit: 'test',
        name: 'Account opening, step by step',
        line: 'A persona applies after every release, up to the identity check, with each step’s screenshot and time.',
        blueprint: 'website-audit',
        pieces: ['personas', 'browser', 'email'],
      },
      {
        kit: 'test',
        name: 'Login codes and alerts',
        line: 'Every code and alert by text, email or call, timed from each country you serve.',
        blueprint: 'delivery-monitoring',
        pieces: ['personas', 'phone', 'email'],
      },
      {
        kit: 'test',
        name: 'What chat tells applicants',
        line: 'Each morning a persona asks your bot about rates, notice periods and fees, and checks every answer against your terms.',
        blueprint: 'support-bot-check',
        pieces: ['browser', 'messaging'],
      },
      {
        kit: 'test',
        name: 'Your voice line, called daily',
        line: 'A persona calls your voice agent, keeps the transcript and waits for the text it promised.',
        blueprint: 'voice-agent-check',
        pieces: ['phone'],
      },
      {
        kit: 'watch',
        name: 'Competitors’ application rates',
        line: 'The rate and bonus each competitor’s application shows before the identity check, beside its public page.',
        blueprint: 'competitor-tracking',
        pieces: ['personas', 'browser', 'email'],
      },
      {
        kit: 'talk',
        name: 'An agent for applicants',
        line: 'Your agent answers applicants on its own number, chases documents by text and email, and keeps every call.',
        pieces: ['phone', 'messaging', 'email', 'personas'],
      },
      {
        kit: 'portals',
        name: 'Partner and vendor portals',
        line: 'An agent stays signed in to the portals your operations team uses, with every login code caught.',
        pieces: ['browser', 'email', 'phone'],
      },
    ],
  },

  blueprints: {
    heading: 'Checks that run every morning and after every release.',
    line: 'No code. Name your bank and competitors, and say where results go.',
    slugs: ['website-audit', 'delivery-monitoring', 'support-bot-check', 'voice-agent-check', 'ai-disclosure-check', 'competitor-tracking'],
  },

  prices: ['persona', 'inbox', 'number', 'sms', 'voice', 'browser'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Digital banking and journeys', gets: 'Every step of your application after each release, and the one applicants drop at.', watch: 'Application completion, drop-off, time to open' },
      { role: 'Customer experience', gets: 'What chat and your voice line told an applicant this morning, checked against your terms.', watch: 'NPS, complaints, resolution rate' },
      { role: 'Pricing and product', gets: 'Competitors’ application rates and bonuses beside their public ones, the day they change.', watch: 'Rate position, applications, margin' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/member-prices-for-price-intelligence'],
  },

  faq: {
    heading: 'Before a persona applies.',
    items: [
      {
        q: 'What happens at the identity check?',
        a: 'The persona stops there and never invents identity details. The event log keeps what the check asked for, and the agent says it’s an AI whenever it talks to a person.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'Does it help with Consumer Duty?',
        a: 'In the UK, the Consumer Duty asks firms to check that what they tell customers supports their understanding. Obsession gives you a dated history of what your channels said, answer by answer. It isn’t compliance advice, and what you report stays your call.',
      },
      {
        q: 'Who sees what our personas collect?',
        a: 'Your team. Every event lands in your own event log, and nobody else can read it.',
      },
      {
        q: 'What does it cost?',
        a: `Start on the Free plan, with no credit card. Paid plans are ${orList(fees)} a month, Enterprise starts from $${enterpriseFrom.toLocaleString('en-US')} a month, and each blueprint is billed on the pieces it uses.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Apply at your bank and every competitor, up to the identity check.',
    capture: { kind: 'waitlist', source: 'team-banks', button: 'Start free', interest: 'audit' },
  },
}
