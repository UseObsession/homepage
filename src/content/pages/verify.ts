import { consoleHeading } from '../console'
import { explorer } from '../explorer'
import type { ExRead, ExRow, Explorer, Page } from '../types'

/* /verify (22 Nov 2026 revamp): check your own AI agents as a customer, the check job's page. A persona chats with your
   support bot, calls your voice line, emails your sales agent and answers your outbound caller, and keeps each answer
   word for word beside the page it should match. The 8 check blueprints run it. The page reads: hero with the console on
   AI agents > what's kept > your vendor grades its own agent > every type of agent > the blueprints > Brand G, the 1
   real run > questions > Start free. Every company and conversation is invented, at a .example address, and the hero's
   note says so. */

const access = {
  kind: 'waitlist',
  button: 'Start free',
  interest: 'support-bot',
} as const

/* The hero's object: the console (content/explorer.ts), on AI agents, in the same shape: each row is an event in the
   company's event log, its facts are its reads (a transcript's quoted terms, the responder, prices), and the chips are
   the channels: chat, call, cancel, page. Insights asks 1 question across a group's own agents. Every company is
   invented. Its words (badges, buttons, chip labels) are set here. */
const LLM = 'gemini-read@2026-11-09'
const said = (text: string, quoted: ExRow[]): ExRead => ({ kind: 'transcript', text, value: { quoted }, reader: LLM })
const agent = (name: string, by: string): ExRead => ({ kind: 'responder', text: name, value: { responder: name, by }, reader: 'rules/tags@3' })
const listed = (text: string, items: { name: string; price: string }[]): ExRead => ({ kind: 'prices', text, value: { items }, reader: LLM })

const agents: Explorer = {
  ...explorer,
  placeholder: { search: 'Your company’s website', insights: 'Ask about your AI agents' },
  groups: { ...explorer.groups, wall: 'Channel' },
  tabs: { facts: 'Facts', evidence: 'Evidence', record: 'Event' },
  none: 'Nothing on this channel for this persona yet. Pick another.',
  fromIndex: 'From your event log · 0.3 s',
  newRun: 'New check · first answers in minutes',
  notCovered: 'Not checked yet',
  unindexed: {
    title: 'No answers from its agents yet.',
    line: 'Check it, and a persona asks its chat, phone line and inbox what a customer would. Every answer lands here.',
    cta: 'Check it',
  },
  insight: {
    waiting: 'Agents appear here as they answer.',
    inIndex: 'Checked',
    watch: 'Check',
    watching: 'Checking',
    notIn: 'Not checked yet',
    missing: (n: number, [one, many]: [string, string]) => (n === 1 ? `1 ${one} isn’t checked yet.` : `${n} ${many} aren’t checked yet.`),
    watchAll: (n: number) => (n === 1 ? 'Check it' : `Check all ${n}`),
    allWatched: (persona: string) => `Checking as ${persona}. Its answers join this report as they arrive.`,
    collecting: (d: number, n: number) => `Asking · ${d} of ${n}`,
    done: (n: number, c: number) => `${n} agents asked · ${c} answered`,
  },
  said: 'An example of Obsession’s console, on invented companies. Pick a company, the persona and the channel. Each row is an event in its event log, such as an AI agent’s answer in a chat or on a call. It sits beside the page it should match, with the transcript or recording behind it. Insights asks one question across a group of your own agents and writes a report with a row for each.',
  companies: [
    {
      domain: 'online-bank.example',
      kind: 'Bank',
      covered: true,
      personas: ['New saver · UK', 'Existing customer · UK'],
      walls: ['Chat', 'Call', 'Cancel', 'Page'],
      kinds: [
        { label: 'Chats', kind: 'Chat' },
        { label: 'Calls', kind: 'Call' },
        { label: 'Pages', kind: 'Page' },
      ],
      views: [
        {
          persona: 'New saver · UK',
          wall: 'Chat',
          events: [
            { at: '4 Nov 09:19', dir: 'act', kind: 'Act', text: 'Asked in chat if the 4.6% rate is fixed' },
            {
              at: '4 Nov 09:20',
              dir: 'shown',
              kind: 'Chat',
              text: '“Yes, 4.6% is fixed for 12 months.”',
              facts: [said('4.6%, fixed for 12 months', [{ rate: '4.6%', term: 'fixed, 12 months' }]), agent('AI chat agent', 'widget tag')],
              evidence: {
                head: [['Chat', 'online-bank.example · help widget'], ['Time', 'Wed 4 Nov 2026 09:20:14']],
                body: ['Us: Hello, I’m an AI assistant asking for a customer. Is the 4.6% easy access rate fixed?', 'Agent: Yes, 4.6% is fixed for 12 months.'],
                proof: ['Clean copy of transcript sha256:3b8c…'],
              },
              row: { kind: 'chat_message', channel: 'chat', wall: ['conversation'], at: '2026-11-04T09:20:14Z', visit: 'ask · 4 Nov 09:18', after: 'ask · 09:19:52', digest: 'sha256:a07e…', raw: { text: 'sha256:3b8c…' } },
            },
            {
              at: '4 Nov 09:31',
              dir: 'shown',
              kind: 'Chat',
              text: '“Connecting you to a member of our team.”',
              facts: [{ kind: 'flow', text: 'Handover to a person', value: { flow: 'handover' }, reader: LLM }, agent('AI chat agent', 'widget tag')],
              evidence: {
                head: [['Chat', 'online-bank.example · help widget'], ['Time', 'Wed 4 Nov 2026 09:31:02']],
                body: ['Us: Can I check that with a person?', 'Agent: Connecting you to a member of our team.'],
                proof: ['Clean copy of transcript sha256:3b8c…'],
              },
              row: { kind: 'chat_message', channel: 'chat', wall: ['conversation'], at: '2026-11-04T09:31:02Z', visit: 'ask · 4 Nov 09:18', after: 'ask · 09:30:40', digest: 'sha256:5d21…', raw: { text: 'sha256:3b8c…' } },
            },
          ],
        },
        {
          persona: 'New saver · UK',
          wall: 'Call',
          events: [
            { at: '5 Nov 10:02', dir: 'act', kind: 'Act', text: 'Called the 0800 line' },
            {
              at: '5 Nov 10:02',
              dir: 'shown',
              kind: 'Call',
              text: 'Call, 7 min 30 s',
              facts: [said('4.6%, fixed for the first year', [{ rate: '4.6%', term: 'fixed, first year' }]), agent('AI voice agent', 'greeting')],
              evidence: {
                head: [['Call', 'online-bank.example · 0800 line'], ['Time', 'Thu 5 Nov 2026 10:02:11 · 7 min 30 s']],
                body: ['Agent: Thanks for calling. How can I help?', 'Us: I’m an AI assistant calling for a customer. Is the easy access rate fixed?', 'Agent: It’s 4.6%, fixed for the first year.'],
                proof: ['Clean copy of recording sha256:c90f… and its transcript'],
              },
              row: { kind: 'call_audio', channel: 'voice', wall: ['call'], at: '2026-11-05T10:02:11Z', visit: 'call · 5 Nov 10:02', after: 'call · 10:02:00', digest: 'sha256:7e44…', raw: { audio: 'sha256:c90f…', text: 'sha256:12aa…' } },
            },
          ],
        },
        {
          persona: 'New saver · UK',
          wall: 'Page',
          events: [
            {
              at: '4 Nov 09:20',
              dir: 'shown',
              kind: 'Page',
              text: 'Easy access saver, rate page',
              facts: [listed('4.6% AER, variable', [{ name: 'Easy access', price: '4.6% AER variable' }])],
              evidence: {
                head: [['Page', 'online-bank.example/savings'], ['Shown', 'Wed 4 Nov 2026 09:20:31 · signed out']],
                body: ['Easy access saver', '4.6% AER, variable', 'Take money out any time'],
                proof: ['Clean copy of screenshot sha256:88d0… and page sha256:4c1b…'],
              },
              row: { kind: 'page', channel: 'web', wall: ['open'], at: '2026-11-04T09:20:31Z', visit: 'ask · 4 Nov 09:18', ref: 'https://online-bank.example/savings', digest: 'sha256:e5f7…', raw: { screenshot: 'sha256:88d0…', html: 'sha256:4c1b…' } },
            },
          ],
        },
        {
          persona: 'Existing customer · UK',
          wall: 'Cancel',
          events: [
            { at: '6 Nov 14:04', dir: 'act', kind: 'Act', text: 'Asked in the app chat to close the account' },
            {
              at: '6 Nov 14:05',
              dir: 'shown',
              kind: 'Chat',
              text: '“Before you go, we can move you to 4.9% today.”',
              facts: [{ kind: 'flow', text: 'Offer to stay · 4.9%', value: { flow: 'retention_offer', purpose: '4.9%' }, reader: LLM }, agent('AI chat agent', 'widget tag')],
              evidence: {
                head: [['Chat', 'online-bank.example · app, signed in'], ['Time', 'Fri 6 Nov 2026 14:05:20']],
                body: ['Us: I’d like to close my savings account.', 'Agent: Before you go, we can move you to 4.9% today.'],
                proof: ['Clean copy of transcript sha256:f61a…'],
              },
              row: { kind: 'chat_message', channel: 'app', wall: ['login', 'conversation', 'cancel'], at: '2026-11-06T14:05:20Z', visit: 'cancel · 6 Nov 14:03', after: 'cancel · 14:04:48', digest: 'sha256:0b93…', raw: { text: 'sha256:f61a…' } },
            },
          ],
        },
      ],
    },
    {
      domain: 'dental-clinic.example',
      kind: 'Dental clinic',
      covered: true,
      personas: ['New patient · London'],
      walls: ['Call', 'Page'],
      kinds: [
        { label: 'Calls', kind: 'Call' },
        { label: 'Pages', kind: 'Page' },
      ],
      views: [
        {
          persona: 'New patient · London',
          wall: 'Call',
          events: [
            { at: '3 Nov 08:01', dir: 'act', kind: 'Act', text: 'Called the main line as a new patient' },
            {
              at: '3 Nov 08:01',
              dir: 'shown',
              kind: 'Call',
              text: 'Call, 3 min 5 s',
              facts: [said('Aligner consult: free', [{ item: 'aligner consult', price: 'free' }]), agent('AI receptionist', 'greeting')],
              evidence: {
                head: [['Call', 'dental-clinic.example · main line'], ['Time', 'Tue 3 Nov 2026 08:01:06 · 3 min 5 s']],
                body: ['Receptionist: Good morning, how can I help?', 'Us: I’m an AI assistant calling for a new patient. What does an aligner consult cost?', 'Receptionist: The aligner consult is free.'],
                proof: ['Clean copy of recording sha256:2fd7… and its transcript'],
              },
              row: { kind: 'call_audio', channel: 'voice', wall: ['call'], at: '2026-11-03T08:01:06Z', visit: 'call · 3 Nov 08:01', after: 'call · 08:01:00', digest: 'sha256:b38e…', raw: { audio: 'sha256:2fd7…', text: 'sha256:61c0…' } },
            },
          ],
        },
        {
          persona: 'New patient · London',
          wall: 'Page',
          events: [
            {
              at: '3 Nov 07:55',
              dir: 'shown',
              kind: 'Page',
              text: 'Price list',
              facts: [listed('Aligner consultation £50', [{ name: 'Aligner consultation', price: '£50' }])],
              evidence: {
                head: [['Page', 'dental-clinic.example/prices'], ['Shown', 'Tue 3 Nov 2026 07:55:40']],
                body: ['Price list', 'New patient exam · £65', 'Aligner consultation · £50', 'Hygienist visit · £75'],
                proof: ['Clean copy of screenshot sha256:9a14… and page sha256:d7e3…'],
              },
              row: { kind: 'page', channel: 'web', wall: ['open'], at: '2026-11-03T07:55:40Z', visit: 'call · 3 Nov 08:01', ref: 'https://dental-clinic.example/prices', digest: 'sha256:46ab…', raw: { screenshot: 'sha256:9a14…', html: 'sha256:d7e3…' } },
            },
          ],
        },
      ],
    },
    {
      domain: 'saas-app.example',
      kind: 'Software',
      covered: true,
      personas: ['Prospect · 50 seats'],
      walls: ['Form', 'Page'],
      kinds: [
        { label: 'Emails', kind: 'Email' },
        { label: 'Texts', kind: 'Text' },
        { label: 'Pages', kind: 'Page' },
      ],
      views: [
        {
          persona: 'Prospect · 50 seats',
          wall: 'Form',
          events: [
            { at: '4 Nov 11:20', dir: 'act', kind: 'Act', text: 'Downloaded the pricing guide with a work email' },
            {
              at: '4 Nov 11:26',
              dir: 'shown',
              kind: 'Email',
              text: 'Your pricing guide, and a question',
              facts: [{ kind: 'flow', text: 'Guide follow-up', value: { flow: 'lead_follow_up', purpose: 'book a call' }, reader: LLM }, agent('AI SDR platform', 'headers')],
              evidence: {
                head: [['From', 'Alex at SaaS App <alex@saas-app.example>'], ['To', 'our address, removed'], ['Date', 'Wed, 4 Nov 2026 11:26:03 +0000'], ['Subject', 'Your pricing guide, and a question']],
                body: ['Here’s the guide you asked for.', 'How many people would use it on your team?', '[ Book 15 minutes ]'],
                proof: ['dkim=pass d=saas-app.example spf=pass dmarc=pass', 'Received 11:26:06 · clean copy of sha256:71bd…'],
              },
              row: { kind: 'email', channel: 'email', wall: ['form'], at: '2026-11-04T11:26:06Z', t_firm: '2026-11-04T11:26:03Z', visit: 'submit · 4 Nov 11:19', after: 'submit · 11:20:14', subject: 'Your pricing guide, and a question', auth: 'dkim=pass d=saas-app.example spf=pass dmarc=pass', digest: 'sha256:c2e8…', raw: { mime: 'sha256:71bd…' } },
            },
            {
              at: '5 Nov 11:26',
              dir: 'shown',
              kind: 'Email',
              text: '30% off if you sign this week',
              facts: [{ kind: 'flow', text: 'Sales offer · 30% off, this week only', value: { flow: 'sales_offer', purpose: '30% off, this week only' }, reader: LLM }, agent('AI SDR platform', 'headers')],
              evidence: {
                head: [['From', 'Alex at SaaS App <alex@saas-app.example>'], ['To', 'our address, removed'], ['Date', 'Thu, 5 Nov 2026 11:26:41 +0000'], ['Subject', '30% off if you sign this week']],
                body: ['Teams your size usually start on Team.', 'Sign by Friday and I can take 30% off the first year.', '[ Book 15 minutes ]'],
                proof: ['dkim=pass d=saas-app.example spf=pass dmarc=pass', 'Received 11:26:44 · clean copy of sha256:a90c…'],
              },
              row: { kind: 'email', channel: 'email', wall: ['form'], at: '2026-11-05T11:26:44Z', t_firm: '2026-11-05T11:26:41Z', visit: 'submit · 4 Nov 11:19', after: 'submit · 4 Nov 11:20:14', subject: '30% off if you sign this week', auth: 'dkim=pass d=saas-app.example spf=pass dmarc=pass', digest: 'sha256:3e57…', raw: { mime: 'sha256:a90c…' } },
            },
            {
              at: '6 Nov 03:12',
              dir: 'shown',
              kind: 'Text',
              text: '“Still looking at tools for your team?”',
              facts: [{ kind: 'flow', text: 'Sales follow-up', value: { flow: 'sales_follow_up' }, reader: LLM }],
              evidence: {
                head: [['From', '+44 7700 900412'], ['To', 'our number, removed'], ['Received', 'Fri 6 Nov 2026 03:12:09, UK time']],
                body: ['Hi, it’s Alex from SaaS App. Still looking at tools for your team? Happy to walk you through it. Reply STOP to opt out.'],
                proof: ['Clean copy of sha256:e4d2…'],
              },
              row: { kind: 'sms', channel: 'sms', wall: ['form'], at: '2026-11-06T03:12:09Z', visit: 'submit · 4 Nov 11:19', after: 'submit · 4 Nov 11:20:14', fields: { sender: '+44 7700 900412' }, digest: 'sha256:9b0f…', raw: { text: 'sha256:e4d2…' } },
            },
            { at: '6 Nov 08:00', dir: 'act', kind: 'Act', text: 'Replied STOP' },
          ],
        },
        {
          persona: 'Prospect · 50 seats',
          wall: 'Page',
          events: [
            {
              at: '5 Nov 11:30',
              dir: 'shown',
              kind: 'Page',
              text: 'Pricing',
              facts: [listed('Team $20 a seat a month · Business $35', [{ name: 'Team', price: '$20 a seat a month' }, { name: 'Business', price: '$35 a seat a month' }])],
              evidence: {
                head: [['Page', 'saas-app.example/pricing'], ['Shown', 'Thu 5 Nov 2026 11:30:12 · signed out']],
                body: ['Team · $20 a seat a month', 'Business · $35 a seat a month', 'Enterprise · talk to us'],
                proof: ['Clean copy of screenshot sha256:5f62… and page sha256:b81e…'],
              },
              row: { kind: 'page', channel: 'web', wall: ['open'], at: '2026-11-05T11:30:12Z', visit: 'view · 5 Nov 11:30', ref: 'https://saas-app.example/pricing', digest: 'sha256:0a7c…', raw: { screenshot: 'sha256:5f62…', html: 'sha256:b81e…' } },
            },
          ],
        },
      ],
    },
  ],
  insights: [
    {
      label: 'Chat vs terms',
      kind: 'Banking brands',
      question: 'Which of our banking brands’ chat agents quote terms our rate pages don’t?',
      persona: 'New saver · UK',
      plan: ['Pick the 5 brands’ chat agents', 'Ask each the same 3 questions', 'Write the report'],
      cols: ['Brand', 'What chat said', 'Rate page'],
      sources: [
        { domain: 'online-bank.example', cells: ['4.6%, fixed', '4.6% variable'], evidence: 'Chat 4 Nov, 09:20: “Yes, 4.6% is fixed for 12 months.” Rate page, same minute: variable.' },
        { domain: 'app-bank.example', cells: ['5.0% for 12 months', '5.0% for 12 months'], evidence: 'Chat 4 Nov, 10:02, matched the rate page word for word.' },
        { domain: 'savings-bank.example', cells: ['4.8%, take money out any time', '4.8%, 30 days’ notice'], evidence: 'Chat 5 Nov, 08:44: “You can take money out any time.” The terms page says 30 days’ notice.' },
        { domain: 'high-street-bank.example', cells: ['Passed to a person', '4.2%'], evidence: 'Chat 5 Nov, 12:10: passed to a person after 3 questions. The person quoted 4.2%, as the page does.' },
        { domain: 'business-bank.example' },
      ],
      noun: ['brand', 'brands'],
      watched: 'Checking. Its chat answers arrive here.',
      answer: 'Two chat agents quote terms their own rate page doesn’t.',
      stats: [
        { v: '2', l: 'chat agents differ from the page' },
        { v: '1', l: 'passed to a person' },
        { v: '11 min', l: 'longest wait for a person' },
      ],
    },
    {
      label: 'Phone prices',
      kind: 'Dental clinics',
      question: 'Which of our London clinics’ AI receptionists quote a price our list doesn’t?',
      persona: 'New patient · London',
      plan: ['Pick the 5 clinics’ phone lines', 'Call each as a new patient', 'Write the report'],
      cols: ['Clinic', 'Aligner consult, phone vs list', 'Difference'],
      sources: [
        { domain: 'dental-clinic.example', cells: ['Free vs £50', '£50 less by phone'], evidence: 'Call 3 Nov, 08:01: “The aligner consult is free.” Price list that morning: £50.' },
        { domain: 'smile-studio.example', cells: ['£40 vs £40', 'Same'], evidence: 'Call 4 Nov, 09:15, 2 min 40 s. Matched the price list.' },
        { domain: 'city-dental.example', cells: ['£75 vs £60', '£15 more by phone'], evidence: 'Call 4 Nov, 11:30: “It’s 75 for the consult.” Price list: £60.' },
        { domain: 'family-dentist.example', cells: ['£50 vs £50', 'Same'], evidence: 'Call 5 Nov, 10:05. Matched the price list, and texted it after the call.' },
        { domain: 'bright-teeth.example' },
      ],
      noun: ['clinic', 'clinics'],
      watched: 'Checking. Its phone quote arrives here.',
      answer: 'Two receptionists quote a different price by phone than the list.',
      stats: [
        { v: '2', l: 'receptionists differ from the list' },
        { v: '£50', l: 'largest gap' },
        { v: '1', l: 'texted the price after' },
      ],
    },
  ],
}

const SUB =
  'Pick a blueprint, and Obsession runs it. A persona is an AI agent with its own inbox, number and browser. It chats with your support bot, calls your voice line and emails your sales agent as a customer. Every answer lands in your event log, word for word, beside the page it should match.'

export const page: Page = {
  meta: {
    path: '/verify',
    title: 'Check your AI agents as a customer: chat, voice and email',
    description:
      'Obsession checks your support bot, voice agent and sales agents as a customer, on chat, phone and email. Every answer is kept word for word. Start free.',
    answer: SUB,
    ogImage: '/og/verify.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'AI agents', path: '/verify' },
    ],
  },

  hero: {
    pill: 'Test your sign-up and AI agents',
    pillTo: '/blueprints/test-sign-up-and-agents',
    headline: 'Ask your AI agents what your customers ask, every day.',
    sub: SUB,
    capture: { ...access, source: 'verify-hero' },
    secondary: { label: 'See the blueprint', to: '/blueprints/support-bot-check' },
    note: 'Every company and conversation in the console below is an example.',
    proof: [],
    consoleHeading,
  },

  explorer: agents,

  dataKinds: {
    kicker: 'Kept for every check',
    heading: 'Every answer, and what happened after it.',
    items: [
      { title: 'The conversation itself', line: 'Every chat transcript and call recording, word for word, with the time of each reply.', eg: 'Chat 09:20 · “Yes, 4.6% is fixed”' },
      { title: 'The answer beside the page', line: 'Each answer next to the policy, price list or terms it should match, captured the same minute.', eg: 'Chat says fixed · page says variable' },
      { title: 'The wait for a person', line: 'How long each channel takes to hand a customer to a person, if it does.', eg: 'Chat 41 s · voice line 6 min' },
      { title: 'What it promised', line: 'Whether the email, refund, callback or booking it promised ever came.', eg: 'Email promised · none 6 hours later' },
      { title: 'What it sends unasked', line: 'Every email, text and call your AI SDR or outbound caller sends a prospect, with the time.', eg: 'Text at 03:12 · “30% off this week”' },
      { title: 'The day it changes', line: 'The same questions asked every day, so a new answer shows the day it starts.', eg: 'Same answer for 9 days, new on day 10' },
    ],
  },

  gap: {
    heading: 'Your vendor grades its own agent. Obsession keeps what the customer heard.',
    sub: 'Asked on your real channels, as the customers you pick.',
    rows: [
      { today: 'Your vendor tests its agent in its own simulator', obsession: 'Answers from your real chat, phone line and inbox, as a customer gets them' },
      { today: 'Transcripts show what the bot said', obsession: 'What happened after, from the refund to the email and the booking' },
      { today: 'You hear from a complaint, days later', obsession: 'A changed answer at your webhook, the day it changes' },
      { today: 'Screenshots in a folder', obsession: 'Each answer with its transcript or recording and the time, ready for legal or your vendor' },
    ],
  },

  kinds: {
    heading: 'Every AI agent a customer meets, from chat to phone.',
    label: 'Pick an agent',
    items: [
      { name: 'Support bots and help desks', line: 'The same question on chat, email and your portal, each answer beside your policy.', recipes: ['support-bot', 'resolution', 'drift', 'disclosure'] },
      { name: 'Voice receptionists and call agents', line: 'Every call recorded, with the price it quoted, the booking and the wait for a person.', recipes: ['voice-agent', 'disclosure', 'drift'] },
      { name: 'AI SDRs and outbound callers', line: 'Every email, text and call it sends a prospect, with the time, the offer and what follows STOP.', recipes: ['outbound-agent', 'disclosure'] },
      { name: 'Shopping and sales agents', line: 'The prices, stock and delivery it quotes, beside your store, up to payment.', recipes: ['sales-agent', 'drift'] },
      { name: 'Agents you’re about to buy', line: 'Your hardest cases on each shortlisted vendor’s agent, side by side, with the vendor’s agreement.', recipes: ['vendor-agent', 'drift'] },
    ],
  },

  recipes: {
    heading: 'Start from the blueprint that fits the agent.',
    ids: ['support-bot', 'voice-agent', 'sales-agent', 'outbound-agent', 'resolution', 'disclosure', 'drift', 'vendor-agent'],
  },

  /* The 1 real run: Brand G, the September store check. No AI agent run is claimed. */
  proof: {
    heading: 'A £40 basket left at 02:57. No reminder in 48 hours.',
    line: 'Brand G, a real skincare store, on 22 Sep. Every email is kept with the time it arrived, beside its screenshot. Chats and calls with your agents are kept the same way, each reply with its time.',
    cta: { label: 'See sample data', to: '/sample-output' },
  },

  faq: {
    heading: 'Questions from teams who run AI agents.',
    items: [
      {
        q: 'What does Obsession check?',
        a: 'It asks your support bot, voice agent, sales agent and outbound caller what a customer asks, on chat, phone and email. Every answer is kept word for word beside the page it should match, so you can watch regressions, complaints and time to detect a change.',
      },
      {
        q: 'How is this different from our vendor’s own tests?',
        a: 'Your vendor’s tests run inside its own tools, often with simulated customers. Obsession asks on your real channels, as a customer. It keeps what came after, such as the email, the refund or the booking.',
      },
      {
        q: 'Do you need our logins or code?',
        a: 'No. Obsession uses the chat page, phone number and inbox any customer can use. It signs in to your portal only with a test account you give it.',
      },
      {
        q: 'Does it say it’s an AI?',
        a: 'Yes, at the start of every chat and call, and it says calls are recorded. Each check is tagged as a test, agreed with your vendor first. It stops before payment.',
      },
      {
        q: 'Which blueprints check our sign-up too?',
        a: 'Mystery shopping, lead response checks and QA on your own flows test every step a new customer takes, from the sign-up form to the first email.',
        link: { label: 'Every blueprint that tests sign-up and agents', to: '/blueprints/test-sign-up-and-agents' },
      },
      {
        q: 'What does it cost?',
        a: 'Start on the Free plan, with no credit card. A blueprint is billed on the pieces it uses, such as the calls, texts, emails and browser hours each check takes.',
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Which AI agent should we check first?',
    capture: { ...access, source: 'verify-final' },
    link: { label: 'Browse blueprints', to: '/blueprints' },
  },
}
