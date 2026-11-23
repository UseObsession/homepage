import { plans, prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI agent for contact centers (/use-cases/ai-agent-for-contact-centers, 23 Nov 2026): the range of work a contact
   centre's AI agents do and are tested on, from voice agents at volume to a BPO running agents for many clients. It
   owns ai agent for call center, ai agent for contact center, best ai agent for call center and ai voice agent for call
   center; /use-cases/ai-agent-for-customer-support keeps the support phrases and is linked, not competed with. No
   competitor or competitor customer is named and no figure is borrowed. Larkfield Care is invented, at a .example
   address. */

const path = '/use-cases/ai-agent-for-contact-centers'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives every AI agent in your contact center its own phone number, inbox and browser, on one API and one bill. A persona holds all three under one identity, so it takes the call, texts the follow-up and chases the document. Personas also call your own line every night as customers.'

export const useCase: TeamPage = {
  id: 'ai-agent-for-contact-centers',
  kind: 'case',
  name: 'AI agent for contact centers',
  meta: {
    path,
    title: 'AI agent for contact centers: calls, texts and testing',
    description:
      'An AI agent for call centers and contact centers on its own number: it calls back, texts and emails follow-ups, and is tested every night. Start free.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agent for contact centers', path },
    ],
  },

  hero: { pill: 'Contact centers', headline: 'AI agent for contact centers: every call answered, every follow-up sent, every night tested.', sub },

  scene: {
    steps: [
      { icon: 'phone', label: 'A persona calls your line at 02:00' },
      { icon: 'chat', label: 'It asks to cancel, as a customer would' },
      { icon: 'check', label: 'The answer is checked against your policy' },
      { icon: 'record', label: 'The result lands in Slack by morning' },
    ],
    who: 'Quill, a test persona calling the voice agent at Larkfield Care',
    note: 'Callback promised, never sent',
    fleet: '10,000 agent sessions a day · one identity each',
    rows: [
      { at: '02:00', kind: 'call.ended', text: 'Called as a customer: cancel the plan · 4 min 10 s, agent said it was an AI' },
      { at: '02:06', kind: 'sms.received', text: '“Your cancellation is confirmed.” · sent within a minute' },
      { at: '08:00', kind: 'email.received', text: 'The promised written confirmation has not arrived · 6 hours' },
      { at: '08:01', kind: 'blueprint.result', text: 'Callback and email promised, one missing · sent to #contact-ops', tone: 'fail' },
    ],
    caption: 'A voice agent promised a confirmation email that never came, found overnight. Larkfield Care is an invented example.',
  },

  uses: {
    heading: 'Voice, texts, documents and nightly tests, from one identity.',
    line: 'For contact centers, BPOs and telecoms running an AI voice agent for call center work, and the developers who build it.',
    items: [
      {
        kit: 'talk',
        name: 'Voice agents at volume',
        line: 'Each agent answers and calls on its own number, so a team of 50 or a fleet of thousands never shares a line.',
        pieces: ['phone', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Missed callers texted back',
        line: 'Every caller who hangs up before an agent answers gets a text within seconds, and each reply lands in the event log.',
        blueprint: 'missed-call-text-back',
        pieces: ['phone', 'messaging', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Written confirmations',
        line: 'The agent emails the confirmation from its own inbox, and the customer’s reply comes back to the same thread.',
        pieces: ['email', 'personas'],
      },
      {
        kit: 'talk',
        name: 'After-call documents chased',
        line: 'It asks for the ID copy, the invoice or the signed form by email and text, until each one arrives.',
        blueprint: 'document-chaser',
        pieces: ['email', 'messaging', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Your IVR and voice agents, called every night',
        line: 'Personas call as customers, ask the questions that matter and keep each answer beside your policy.',
        blueprint: 'voice-agent-check',
        pieces: ['personas', 'phone', 'email'],
      },
      {
        kit: 'talk',
        name: 'Resolution and disclosure checks',
        line: 'Each persona checks the issue was resolved, the promise kept and the agent said it was an AI.',
        blueprint: 'ai-disclosure-check',
        pieces: ['personas', 'phone', 'messaging'],
      },
      {
        kit: 'train',
        name: 'Regression tests after every model update',
        line: 'A set of scripted calls runs after each change, and any answer that moved reaches your team before customers hear it.',
        blueprint: 'nightly-agent-evaluation',
        pieces: ['sandbox', 'personas', 'phone'],
      },
      {
        kit: 'watch',
        name: 'Competitor support lines, benchmarked',
        line: 'Personas call and message other companies’ support as customers, and log wait, answer and follow-up side by side.',
        pieces: ['phone', 'email', 'browser', 'personas'],
      },
      {
        kit: 'build',
        name: 'A BPO or developer running agents for many clients',
        line: 'Every client gets its own number, inbox and browser from one API, and each one’s results stay in its own log.',
        pieces: ['phone', 'email', 'browser', 'sandbox', 'personas'],
      },
    ],
  },

  sizes: {
    heading: 'The same work at three sizes.',
    line: 'Each agent keeps its own identity from a team of 50 to a network of thousands.',
    items: [
      {
        label: 'A 50-seat team',
        agents: '10 agents · 10 numbers · one event log',
        jobs: ['Overflow and after-hours calls', 'Follow-up texts and emails', 'A nightly check of the line'],
        usage: { number: 10, voice: 6000, personaVoice: 600, sms: 4000, inbox: 10, email: 6000 },
      },
      {
        label: 'A BPO serving 30 clients',
        agents: '30 clients · a number, inbox and browser each',
        jobs: ['Each client’s agents under its own identity', 'Texting registered once per client', 'Nightly tests per client, results in their Slack'],
        usage: { number: 90, voice: 60000, personaVoice: 3000, sms: 40000, inbox: 60, email: 40000, browser: 300, register: 30 },
      },
      {
        label: 'A telecom running 10,000 agent sessions a day',
        agents: '10,000 sessions a day · one identity each',
        jobs: ['Voice agents on a pool of numbers', 'Regression tests after every model update', 'Competitor support lines benchmarked weekly'],
        usage: { number: 400, voice: 1500000, personaVoice: 60000, sms: 800000, inbox: 400, email: 600000, browser: 2000, sandbox: 5000, register: 4 },
      },
    ],
  },

  blueprints: {
    heading: 'Test your line tonight, text every caller back and chase every document.',
    line: 'No code. Name your number or your agent, and every answer lands in Slack, a sheet or your inbox.',
    slugs: ['voice-agent-check', 'ai-disclosure-check', 'missed-call-text-back', 'document-chaser', 'nightly-agent-evaluation', 'support-bot-check'],
  },

  prices: ['number', 'voice', 'personaVoice', 'sms', 'register', 'inbox'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Contact center and operations leaders', gets: 'Every call, text and email an agent handled in one timeline, with the failures sent to you each morning.', watch: 'First contact resolution, average handle time, abandon rate' },
      { role: 'Quality and compliance leads', gets: 'A nightly call to your line as a customer, with the disclosure and resolution checks kept beside your policy.', watch: 'Quality score, disclosure rate, repeat contacts' },
      { role: 'BPO account and delivery leads', gets: 'A separate identity, number and log for each client, so one client’s results never mix with another’s.', watch: 'Clients live, service levels met, cost per client' },
      { role: 'Developers building voice agents', gets: 'A number, an inbox, a browser and a sandbox per agent from one API, with the event log and a regression run after each model update.', watch: 'Agents live, call minutes, regressions caught' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/ai-agent-for-customer-support', '/use-cases/ai-agent-evaluation', '/verify'],
  },

  faq: {
    heading: 'Before your agent takes its first call.',
    items: [
      {
        q: 'What does an AI agent for a call center cost?',
        a: `Start on the Free plan, with no credit card: it includes a number that receives calls and texts. To call out and text customers, paid plans are ${orList(fees)} a month, and usage is billed at list rates. A number is ${prices.number.amount} a month, calls ${prices.voice.amount} a minute and texts ${prices.sms.amount} each. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does the agent tell customers it’s an AI?',
        a: 'Yes, whenever it talks to a person, by phone, text or email. It calls and texts only people who gave the business their number, it uses only the logins it is given and it stops at any identity check. It never gets round a CAPTCHA.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How do results reach our tools?',
        a: 'Subscribe once to call.ended, sms.received and email.received. Each call, text and nightly test result reaches your CRM, a sheet or Slack through one signed webhook, with the call’s transcript.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Can we run it for many clients or locations?',
        a: 'Yes. Every client or site gets its own number, inbox, browser and event log under its own persona, from one API and one bill. Enterprise adds your brand and longer log retention.',
        link: { label: 'See the plans', to: '/pricing' },
      },
      {
        q: 'How is this different from an AI agent for customer support?',
        a: 'The customer support page covers the chat and inbox side. This one covers the phone at volume, the follow-up after the call and the nightly tests of your own agents.',
        link: { label: 'AI agent for customer support', to: '/use-cases/ai-agent-for-customer-support' },
      },
    ],
  },

  final: {
    heading: 'Give every agent in your contact center its own number.',
    capture: { kind: 'waitlist', source: 'case-ai-agent-for-contact-centers', button: 'Start free', interest: 'voice-agent' },
  },
}
