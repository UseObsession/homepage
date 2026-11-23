import { plans, prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI agents for financial services (/use-cases/ai-agents-for-financial-services, 23 Nov 2026): the range of jobs an
   agent does for banks, credit unions, fintechs, lenders, brokers, insurers and wealth managers. The banks page covers
   account-opening tests; this page shows the whole range. No competitor or competitor customer is named and no figure
   is borrowed. Harbour Mutual Credit Union is invented, at a .example address. */

const path = '/use-cases/ai-agents-for-financial-services'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives every AI agent at your bank, lender, brokerage or fintech its own phone number, inbox and browser, on one API and one bill. A persona holds all three under one identity, so one agent calls back applicants, chases documents and tests your own journey.'

export const useCase: TeamPage = {
  id: 'ai-agents-for-financial-services',
  kind: 'case',
  name: 'AI agents for financial services',
  card: 'Applications called back, documents chased and competitors’ rates read.',
  meta: {
    path,
    title: 'AI agents for financial services: calls, documents, checks',
    description:
      'AI agents for financial services with their own number, inbox and browser: call back enquiries, chase documents, test your journey, watch rates.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agents for financial services', path },
    ],
  },

  hero: {
    pill: 'Financial services',
    headline: 'AI agents for financial services: every enquiry called back, every file chased.',
    sub,
  },

  scene: {
    steps: [
      { icon: 'browser', label: 'A loan enquiry arrives' },
      { icon: 'phone', label: 'The agent calls back' },
      { icon: 'chat', label: 'It texts the document list' },
      { icon: 'record', label: 'Your loan system updates itself' },
    ],
    who: 'Ada, the lending agent at Harbour Mutual Credit Union',
    note: 'Called back in 48 seconds, file started',
    fleet: '40 branches · 120 agents · 9,400 enquiries a month',
    rows: [
      { at: 'Tue 10:14', kind: 'webhook', text: 'Loan enquiry from the website · £12,000 · member since 2019' },
      { at: 'Tue 10:15', kind: 'call.ended', text: 'Called back in 48 seconds · 3 minutes · transcript saved' },
      { at: 'Tue 10:19', kind: 'email.received', text: 'Two payslips and a bank statement, replied to the same thread' },
      { at: 'Tue 10:20', kind: 'blueprint.result', text: 'File complete · passed to a loan officer', tone: 'ok' },
    ],
    caption: 'An enquiry called back in under a minute, with its documents in by lunch. Harbour Mutual Credit Union is an invented example.',
  },

  uses: {
    heading: 'Enquiries, documents, reminders and your own journey, tested.',
    line: 'For banks, credit unions, fintechs, lenders, brokers, insurers and wealth managers running AI agents in banking, and the developers who build them.',
    items: [
      {
        kit: 'talk',
        name: 'Applications called back in a minute',
        line: 'Every loan or account enquiry gets a call within a minute, at any hour, with the call’s transcript kept.',
        blueprint: 'speed-to-lead-callback',
        pieces: ['phone', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Documents chased until the file is complete',
        line: 'Payslips and statements are asked for by email and text until the last one arrives, and every reply lands on the file.',
        blueprint: 'document-chaser',
        pieces: ['email', 'phone', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Payment and renewal reminders',
        line: 'Customers who gave you their number get a text, and a call if they prefer, before a payment or renewal falls due.',
        pieces: ['phone', 'messaging'],
      },
      {
        kit: 'test',
        name: 'Your application, tried as a new applicant',
        line: 'A persona applies after every release, up to the identity check and never past it, with a screenshot of each step.',
        blueprint: 'website-audit',
        pieces: ['personas', 'browser', 'email'],
      },
      {
        kit: 'talk',
        name: 'Your voice agent and chat, checked daily',
        line: 'Each morning a persona asks what your agent promises, whether it says it’s an AI and whether the problem got solved.',
        blueprint: 'voice-agent-check',
        pieces: ['phone', 'messaging', 'personas'],
      },
      {
        kit: 'watch',
        name: 'Competitors’ rates and offers',
        line: 'The rate and bonus each competitor shows an applicant, read every morning beside its public page.',
        blueprint: 'competitor-tracking',
        pieces: ['browser', 'email', 'personas'],
      },
      {
        kit: 'portals',
        name: 'Lender and partner portals',
        line: 'An agent signs in with the logins you give it, catches each code and pulls the status you check by hand today.',
        pieces: ['browser', 'email', 'phone'],
      },
      {
        kit: 'build',
        name: 'An inbox and number for every customer’s agent',
        line: 'Fintech developers give each customer’s agent its own identity through one API, with every event in one log.',
        pieces: ['email', 'phone', 'browser', 'personas'],
      },
    ],
  },

  sizes: {
    heading: 'One adviser, a credit union or a national bank.',
    line: 'The same agents at three sizes. Each agent keeps its own number and inbox, and every result lands in one event log.',
    items: [
      {
        label: 'One mortgage broker',
        agents: '1 agent · 1 number · 1 event log',
        jobs: ['Enquiries called back in a minute', 'Payslips and statements chased', 'Renewal reminders by text'],
        usage: { number: 1, inbox: 1, voice: 200, personaVoice: 200, sms: 300, email: 600, register: 1 },
      },
      {
        label: 'A 40-branch credit union',
        agents: '40 agents · 40 numbers · one event log',
        jobs: ['Loan enquiries called back at every branch', 'Your application tested every morning', 'Competitors’ rates watched'],
        usage: { number: 40, inbox: 40, voice: 9000, personaVoice: 9000, sms: 15000, email: 20000, browser: 150, register: 1 },
      },
      {
        label: 'A national bank with thousands of agents',
        agents: '3,000 agents · 3,000 numbers · one event log',
        jobs: ['Voice and chat agents checked daily', 'Partner and lender portals worked', 'An agent identity for every customer team'],
        usage: { number: 3000, inbox: 3000, voice: 400000, personaVoice: 400000, sms: 900000, email: 1200000, browser: 6000, register: 1 },
      },
    ],
  },

  blueprints: {
    heading: 'Call back every enquiry, chase every document and hear what your agent tells customers.',
    line: 'No code. Name your number, application or competitors, and every answer lands in Slack, a sheet or your inbox.',
    slugs: ['speed-to-lead-callback', 'document-chaser', 'website-audit', 'voice-agent-check', 'ai-disclosure-check', 'competitor-tracking'],
  },

  prices: ['persona', 'number', 'voice', 'sms', 'register', 'inbox', 'browser'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Heads of lending and operations', gets: 'Every enquiry called back and every file chased, with the day’s calls, texts and documents in one timeline.', watch: 'Speed to first call, applications completed, files stuck for documents' },
      { role: 'CX and digital leads', gets: 'Your application, voice agent and chat tried every morning as a new applicant, with a screenshot of each step.', watch: 'Application completion, drop-off by step, complaints about agents' },
      { role: 'Compliance teams', gets: 'A dated record of what each agent said, including that it’s an AI, kept beside the rule it followed.', watch: 'Disclosure rate, wrong answers caught, time to evidence' },
      { role: 'Developers building for financial services', gets: 'A number, an inbox and a browser for each customer’s agent through one API, under your brand on Enterprise.', watch: 'Agents live, call minutes, cost per customer' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/journey-checks-for-banks-and-fintechs', '/use-cases/ai-agent-for-insurance', '/verify'],
  },

  faq: {
    heading: 'Before your agent makes its first call.',
    items: [
      {
        q: 'What do AI agents for financial services cost?',
        a: `Start on the Free plan, with no credit card: it includes a number that receives calls and texts. To call and text customers, paid plans are ${orList(fees)} a month, and usage is billed at list rates. A number is ${prices.number.amount} a month, calls ${prices.voice.amount} a minute and texts ${prices.sms.amount} each. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does the agent tell customers it’s an AI, and where does it stop?',
        a: 'Yes, whenever it talks to a person, by phone, text or email. It calls and texts only people who gave you their number, stops at any identity check and never passes one, and stops before payment unless it’s given the customer’s own card.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How do results reach our loan system and our team?',
        a: 'Subscribe once to call.ended, sms.received and email.received. Each call, reply and document reaches your loan system through one signed webhook, and the same events can go to Slack, a sheet or your CRM.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Can we run it across every branch or team?',
        a: 'Yes. Each branch or team gets its own persona, number and inbox, and all of them write to one event log. You can start with one agent and add more without changing how results reach your tools.',
        link: { label: 'See the blueprints', to: '/blueprints' },
      },
    ],
  },

  final: {
    heading: 'Give your first financial services agent its own number.',
    capture: { kind: 'waitlist', source: 'case-ai-agents-for-financial-services', button: 'Start free', interest: 'voice-agent' },
  },
}
