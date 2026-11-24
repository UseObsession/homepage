import { plans, prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI agent for insurance (/use-cases/ai-agent-for-insurance, 22 Nov 2026): one job in one industry, quote calls at an
   insurance agency. Modelled on the insurance patterns in the Product Marketing book, job 1 (inbound voice agents that
   quote, outbound lead qualification, a licensed agent taking the warm lead, documents chased by text and email). No
   competitor or competitor customer is named and no figure is borrowed. Larkspur Insurance is invented, at a .example
   address. */

const path = '/use-cases/ai-agent-for-insurance'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives your AI agent for insurance quotes its own phone number, inbox and browser, on one API and one bill. A persona holds all three under one name, so a caller gets the quote by text and the policy documents by email.'

export const useCase: TeamPage = {
  id: 'ai-agent-for-insurance',
  kind: 'case',
  name: 'AI agent for insurance',
  meta: {
    path,
    title: 'AI agent for insurance agencies: quotes by call, text, email',
    description:
      'An AI agent for insurance agencies on its own number: it answers quote calls, texts the quote, emails the documents and keeps every word. Start free.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agent for insurance', path },
    ],
  },

  hero: { pill: 'Insurance agencies', headline: 'AI agent for insurance agencies: every quote call answered, then texted and emailed.', sub },

  scene: {
    steps: [
      { icon: 'phone', label: 'A driver calls for a quote' },
      { icon: 'chat', label: 'The agent asks what the quote needs' },
      { icon: 'mail', label: 'It texts the quote, emails the documents' },
      { icon: 'users', label: 'A licensed agent takes it from there' },
    ],
    who: 'Quinn, the quotes agent at Larkspur Insurance',
    note: 'Handed to a licensed agent, every word kept',
    fleet: '25 agents · 3,000 quote calls a month',
    rows: [
      { at: '10:14', kind: 'call.received', text: '+1 614 555 0123 · 6 min 40 s · transcript kept' },
      { at: '10:20', kind: 'call.ended', text: 'Car insurance quote: $118 a month · quote texted' },
      { at: '10:21', kind: 'email.sent', text: 'Your quote and policy documents · quotes@larkspur-insurance.example' },
      { at: '11:02', kind: 'sms.received', text: '“Can you add my daughter as a driver?”' },
      { at: '11:02', kind: 'webhook', text: 'Lead, transcript and reply sent to your CRM for a licensed agent', tone: 'ok' },
    ],
    caption: 'A quote call, the text and the email on one identity, handed to a licensed agent with every word. Larkspur Insurance is an invented example.',
  },

  uses: {
    heading: 'Every quote call answered, every lead followed up.',
    line: 'For independent agencies, brokers and carriers running an AI voice agent for insurance quotes, renewals and service calls.',
    items: [
      {
        kit: 'talk',
        name: 'Quote calls answered',
        line: 'Your agent answers on its own number, asks the questions a quote needs and keeps a transcript of every call.',
        pieces: ['phone', 'personas'],
      },
      {
        kit: 'talk',
        name: 'The quote by text, the documents by email',
        line: 'It texts the quote from the same number and emails the documents from its own inbox, under one name.',
        pieces: ['phone', 'email', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Every new lead followed up',
        line: 'Leads from your website and comparison sites get a call, a text and an email in minutes, from one identity.',
        pieces: ['phone', 'messaging', 'email'],
      },
      {
        kit: 'talk',
        name: 'Renewals and missing documents',
        line: 'It texts and emails customers before renewal, chases a missing signature or photo, and keeps every reply.',
        pieces: ['phone', 'messaging', 'email'],
      },
      {
        kit: 'test',
        name: 'Your quote line, called every morning',
        line: 'Personas call as new drivers and homeowners, then wait days for the text, email and callback your agent promised.',
        blueprint: 'voice-agent-check',
        pieces: ['personas', 'phone', 'email'],
      },
      {
        kit: 'test',
        name: 'Speed to lead',
        line: 'A persona fills in your quote form as a new lead and times the first call, text and email.',
        blueprint: 'lead-leaks',
        pieces: ['personas', 'browser', 'phone', 'email'],
      },
    ],
  },

  blueprints: {
    heading: 'Chase every missing document, call every new lead, and check what your agent quotes.',
    line: 'No code. Name the number or the form, and every answer lands in Slack, a sheet or your CRM.',
    slugs: ['document-chaser', 'speed-to-lead-callback', 'voice-agent-check', 'lead-leaks', 'ai-disclosure-check', 'support-bot-check'],
  },

  prices: ['number', 'voice', 'sms', 'register', 'inbox', 'persona'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Agency principals and owners', gets: 'Every quote call answered, with the quote, the documents and the reply in one timeline.', watch: 'Quotes issued, quote-to-bind rate, policies written' },
      { role: 'Sales and service managers', gets: 'Each new lead called, texted and emailed in minutes, and the leads nobody reached.', watch: 'Speed to lead, contact rate, conversion' },
      { role: 'Developers building insurance agents', gets: 'A number, an inbox and texting registration for each agent or campaign, on one key.', watch: 'Calls handled, cost per call, latency' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/sales', '/verify', '/use-cases/ai-receptionist'],
  },

  faq: {
    heading: 'Before your agent quotes its first caller.',
    items: [
      {
        q: 'What does an AI agent for insurance cost?',
        a: `Start on the Free plan, with no credit card: it includes a number that receives calls and texts. To text quotes and call leads, paid plans are ${orList(fees)} a month, and usage is billed at list rates. A number is ${prices.number.amount} a month, calls ${prices.voice.amount} a minute and texts ${prices.sms.amount} each. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does the agent say it’s an AI?',
        a: 'Yes, whenever it talks to a person, by phone, text or email. It stops before payment unless it’s given the customer’s own payment card.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'Can we keep our own voice agent and CRM?',
        a: 'Yes. Point the number at your voice agent, or let Obsession connect one. Every call, text and email reaches your CRM through one signed webhook, as call.ended, sms.received and email.received.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Can we show what the agent told each caller?',
        a: 'Yes. Every call comes back as a transcript, with each text and email after it in one event log, dated and in order. AI disclosure check calls your line every day and keeps how the agent introduces itself.',
        link: { label: 'See the blueprint', to: '/blueprints/ai-disclosure-check' },
      },
    ],
  },

  final: {
    heading: 'Give your quotes agent its own number.',
    capture: { kind: 'waitlist', source: 'case-ai-agent-for-insurance', button: 'Start free', interest: 'voice-agent' },
  },
}
