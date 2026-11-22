import { kitPathOf } from '../../kitPaths'
import { prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI recruiter (/use-cases/ai-recruiter, 22 Nov 2026): one job in one industry. A staffing agency's AI recruiter calls
   each applicant from its own number, texts shift offers and emails interview times, with every call and reply in one
   event log. Modelled on the staffing pattern in the Product Marketing book, job 1 (screening calls at volume, shift
   offers by text) and Commercial View research A (recruiting by text). Persona: recruiters and staffing operations
   leads, measured on time to fill, fill rate and no-shows. Brightshift Staffing is invented, at a .example address. */

const path = '/use-cases/ai-recruiter'

const sub =
  'Obsession, the toolkit for AI agents, gives your AI recruiter its own phone number, inbox and browser on one API and one bill. It calls each applicant, texts shift offers and emails interview times, and every call and reply lands in one event log.'

export const useCase: TeamPage = {
  id: 'ai-recruiter',
  kind: 'case',
  name: 'AI recruiter',
  meta: {
    path,
    title: 'AI recruiter: screening calls, texts and interview emails',
    description:
      'Give your AI recruiter its own phone number and inbox. It calls applicants within minutes, texts shift offers, emails interview times and logs each reply.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI recruiter', path },
    ],
  },

  hero: { pill: 'Staffing and recruiting', headline: 'AI recruiter: every applicant screened by phone and booked by text, from one number.', sub },

  scene: {
    steps: [
      { icon: 'person', label: 'A candidate applies at 22:10' },
      { icon: 'phone', label: 'The recruiter calls within minutes' },
      { icon: 'chat', label: 'It texts the interview slot' },
      { icon: 'record', label: 'The booking reaches your ATS' },
    ],
    who: 'Jordan, the screening agent at Brightshift Staffing',
    rows: [
      { at: 'Mon 22:10', kind: 'email.received', text: 'New applicant: warehouse nights, Columbus' },
      { at: 'Mon 22:13', kind: 'call.ended', text: '4 min 05 s · forklift licence, nights, starts Monday · transcript kept' },
      { at: 'Mon 22:14', kind: 'sms.received', text: '“Thursday 10:00 works for me”' },
      { at: 'Mon 22:14', kind: 'email.sent', text: 'Interview booked for Thursday 10:00, 4 min after applying', tone: 'ok' },
    ],
    caption: 'An application sent at 22:10 was screened and booked by 22:14, with the desk closed. Brightshift Staffing is an invented example.',
  },

  uses: {
    heading: 'Every applicant called, texted and emailed from one identity.',
    line: 'For staffing agencies, high-volume hiring teams and recruiting platforms that place warehouse, care, retail and hospitality workers.',
    items: [
      {
        kit: 'talk',
        name: 'Screening calls in minutes',
        line: 'Your AI recruiter calls each applicant from its own number, asks your screening questions and keeps the transcript.',
        pieces: ['phone', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Shift offers by text',
        line: 'It texts open shifts to the workers on your books and books the first yes, with every reply in the event log.',
        pieces: ['phone', 'messaging'],
      },
      {
        kit: 'talk',
        name: 'Interview emails and reminders',
        line: 'Confirmations, addresses and day-before reminders go from the recruiter’s own inbox, and replies come back to it.',
        pieces: ['email', 'personas'],
      },
      {
        kit: 'portals',
        name: 'Job boards and your ATS',
        line: 'A browser stays signed in to your job boards and applicant tracking system (ATS), updates each candidate’s stage and screenshots every page.',
        pieces: ['browser', 'email'],
      },
      {
        kit: 'test',
        name: 'Your recruiter, called as a candidate',
        line: 'A persona, a test candidate with its own number and inbox, calls your AI recruiter daily and keeps what it asked and promised.',
        blueprint: 'voice-agent-check',
        pieces: ['personas', 'phone', 'email'],
      },
      {
        kit: 'test',
        name: 'It says it’s an AI, every time',
        line: 'A persona asks your recruiter on a call, by text and by email whether it’s an AI, and logs each answer.',
        blueprint: 'ai-disclosure-check',
        pieces: ['personas', 'phone', 'email'],
      },
    ],
  },

  blueprints: {
    heading: 'Blueprints recruiting teams start with.',
    line: 'No code. Name the line or the job ad, and results land in Slack, a sheet or your ATS.',
    slugs: ['voice-agent-check', 'ai-disclosure-check', 'drift-watch'],
  },

  prices: ['number', 'voice', 'sms', 'register', 'inbox', 'persona'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Recruiters and recruiting managers', gets: 'Every applicant screened by phone within minutes, with the transcript and answers in your ATS.', watch: 'Time to fill, interviews scheduled, candidate response rate' },
      { role: 'Staffing operations leads', gets: 'Open shifts texted to your workers and the first yes booked, at night and at weekends too.', watch: 'Fill rate, shifts filled, no-show rate' },
      { role: 'Founders building AI recruiters', gets: 'A number, an inbox and a browser for 1 recruiter agent or thousands, on one key.', watch: 'Candidates reached per agent, cost per agent, accuracy' },
    ],
  },

  examples: { heading: 'Worked examples', paths: ['/use-cases/ai-receptionist', '/use-cases/ai-agent-for-customer-support'] },

  faq: {
    heading: 'Before your AI recruiter makes its first call.',
    items: [
      {
        q: 'Can an AI recruiter make phone calls?',
        a: 'Yes. Give it a US or UK number, and it calls applicants with your own voice agent or one Obsession connects. Each call’s start, end and transcript reach your ATS through one signed webhook.',
        link: { label: 'Talk to customers', to: kitPathOf.talk },
      },
      {
        q: 'Do we need candidates’ consent for AI calls and texts?',
        a: 'In the US, yes. The Telephone Consumer Protection Act (TCPA) covers calls made with AI voices, so ask applicants to agree to calls and texts on your application form.',
        link: { label: 'Can AI make phone calls?', to: '/blog/can-ai-make-phone-calls' },
      },
      {
        q: 'Does it tell candidates it’s an AI?',
        a: 'Yes, on every call, text and email. It stops at any identity check, and the event log keeps what the check asked for.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'What does it cost?',
        a: `Start on the Free plan, with no credit card. Then a number is ${prices.number.amount} a month, a call ${prices.voice.amount} a minute and a text ${prices.sms.amount}. US business texts also need registration: ${registration.once} once per campaign, then ${registration.monthly} a month while it’s active.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Give your AI recruiter its own number today.',
    capture: { kind: 'waitlist', source: 'case-ai-recruiter', button: 'Start free', interest: 'voice-agent' },
  },
}
