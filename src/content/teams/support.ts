import type { TeamPage } from './types'

/* Support and AI operations (/verify): check your own AI agents as a customer. A persona chats with the support bot,
   calls the voice line and emails the sales agent, and keeps each answer word for word beside the page it should match
   (the 7 check blueprints), and the agent itself gets its own number and inbox. Product Marketing book, jobs 1 and 2;
   Top 3 Buyers ranking (insurers, freight, dealer groups, admissions and contact centres whose AI answers customers);
   Commercial View personas `cx` and `voice` (22 Nov 2026). Every company is invented, at a .example address. */

const sub =
  'Obsession gives every AI agent its own inbox, phone number and browser, on one API and one bill. A persona, an AI agent with all three under one name, chats with your support bot, calls your voice line and emails your sales agent as a customer would. It keeps every answer word for word.'

export const team: TeamPage = {
  id: 'support',
  name: 'Support and AI operations',
  meta: {
    path: '/verify',
    title: 'Check your AI agents as a customer: chat, voice and email',
    description:
      'Check your support bot, voice agent and sales agent as a customer would, on chat, phone and email. Every answer is kept word for word. Start free.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Support and AI operations', path: '/verify' },
    ],
  },

  hero: { pill: 'Support and AI operations', headline: 'Check your AI agents as a customer: every chat, call and email answer, word for word.', sub },

  scene: {
    steps: [
      { icon: 'persona', label: 'A persona asks your chat agent' },
      { icon: 'phone', label: 'It calls your voice line' },
      { icon: 'check', label: 'Each answer beside your returns policy' },
      { icon: 'record', label: 'A wrong answer reaches Slack' },
    ],
    who: 'A test shopper at haldenhome.example',
    note: 'The bot counts 30 days from the order',
    fleet: 'Checked daily on chat, email and phone',
    rows: [
      { at: '09:18', kind: 'page.visited', text: 'Returns policy: 30 days from delivery · screenshot saved' },
      { at: '09:20', kind: 'page.visited', text: 'Help chat: “Returns close 30 days after your order date.”' },
      { at: '10:02', kind: 'call.ended', text: 'Phone line · 4 min 50 s · “30 days from delivery” · transcript kept' },
      { at: '10:03', kind: 'blueprint.result', text: 'Chat counts from the order. The policy and the phone count from delivery.', tone: 'fail' },
      { at: '10:03', kind: 'webhook', text: 'Sent to #support with both answers' },
    ],
    caption: 'A chat agent that closes returns early, caught before a customer is turned away. Halden Home is an invented example.',
  },

  uses: {
    heading: 'What your agents tell customers, before a complaint does.',
    line: 'For insurers, freight brokers, dealer groups, admissions teams and contact centres whose AI answers the phone or the chat.',
    items: [
      {
        kit: 'test',
        name: 'Support bot check',
        line: 'A persona asks your support bot what your team hears most and keeps every answer beside your policy.',
        blueprint: 'support-bot-check',
        pieces: ['personas', 'browser', 'email'],
      },
      {
        kit: 'test',
        name: 'Voice agent check',
        line: 'Personas call your voice agent, then wait days for the text, email and callback it promised.',
        blueprint: 'voice-agent-check',
        pieces: ['personas', 'phone', 'email'],
      },
      {
        kit: 'test',
        name: 'Sales agent check',
        line: 'A persona shops with your AI sales agent and follows every answer up to payment.',
        blueprint: 'sales-agent-check',
        pieces: ['personas', 'browser'],
      },
      {
        kit: 'test',
        name: 'Resolution check',
        line: 'Every resolution your AI vendor bills, matched to what followed: the refund, the changed order or the repeat contact.',
        blueprint: 'resolution-check',
        pieces: ['personas', 'browser'],
      },
      {
        kit: 'test',
        name: 'AI disclosure check',
        line: 'A persona asks your agents on chat, phone, email and text whether they’re an AI, every day.',
        blueprint: 'ai-disclosure-check',
        pieces: ['personas', 'phone', 'email'],
      },
      {
        kit: 'test',
        name: 'Drift watch',
        line: 'Your hardest cases asked daily and after every update, with what changed since yesterday.',
        blueprint: 'drift-watch',
        pieces: ['personas', 'browser'],
      },
      {
        kit: 'test',
        name: 'Vendor agent check',
        line: 'Your cases run on every shortlisted vendor’s agent before you sign, with each vendor’s agreement.',
        blueprint: 'vendor-agent-check',
        pieces: ['personas', 'phone', 'browser'],
      },
      {
        kit: 'talk',
        name: 'Your agent’s own number and inbox',
        line: 'Give the agent that answers customers a number, an inbox and WhatsApp, with every reply in one event log.',
        pieces: ['phone', 'email', 'messaging'],
      },
    ],
  },

  blueprints: {
    heading: 'Checks that run every day and after every update.',
    line: 'Each posts what changed to Slack, a sheet or your helpdesk.',
    slugs: ['support-bot-check', 'voice-agent-check', 'sales-agent-check', 'resolution-check', 'ai-disclosure-check', 'drift-watch', 'vendor-agent-check'],
  },

  prices: ['persona', 'number', 'voice', 'sms', 'inbox', 'browser'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Voice and AI operations', gets: 'Every call to your voice agent recorded, with what it booked and whether the text and callback came.', watch: 'Booking accuracy, policy errors, time to detect a change' },
      { role: 'Support and CX leads', gets: 'What your support bot told a customer this morning, word for word, beside your policy.', watch: 'Resolution rate, escalations, CSAT' },
      { role: 'Contact centre leads', gets: 'The same checks on every bot and voice line you run, in one event log.', watch: 'Containment, complaints, CSAT' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/journey-checks-for-banks-and-fintechs', '/use-cases/opt-out-and-cancel-checks-for-compliance-teams'],
  },

  faq: {
    heading: 'Before the first check.',
    items: [
      {
        q: 'How is this different from our vendor’s own tests?',
        a: 'Your vendor tests from inside its own tools. A persona checks from outside, on your real chat, phone line and inbox. It keeps what came after, such as the refund, the email or the booking.',
      },
      {
        q: 'Do you need our logins or code?',
        a: 'No. A persona uses the chat page, phone number and inbox any customer can use. It signs in to your portal only with a test account you give it.',
      },
      {
        q: 'What does it cost?',
        a: 'Start on the Free plan, with no credit card. A blueprint is billed on the pieces it uses, such as the calls, texts and browser hours each check takes.',
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does it say it’s an AI?',
        a: 'Yes, whenever it talks to a person, on chat, phone, email or text. It stops before payment, and signs in only with the logins you give it.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
    ],
  },

  final: {
    heading: 'See what your AI agents told customers this morning.',
    capture: { kind: 'waitlist', source: 'team-support', button: 'Start free', interest: 'support-bot' },
  },
}
