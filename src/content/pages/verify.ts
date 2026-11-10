import { consoleHeading } from '../console'
import { explorer } from '../explorer'
import type { ExRead, ExRow, Explorer, Page } from '../types'

/* /verify (9 Nov rewrite): what AI agents tell customers, as data. Support chats, voice lines, sales agents and outbound
   callers, yours and your competitors', each answer kept as a dated transcript or call beside the page it should match:
   Home's "Support answers" wall. The page reads: hero with Home's explorer on AI agents > what's in it > your vendor
   grades its own agent > every kind of agent > the recipes > is this real (our count, Brand G) > questions > early access.
   No real AI agent run has happened yet: every company and conversation is invented, at a .example address, and the
   hero's note says so. */

const access = {
  kind: 'waitlist',
  button: 'Request early access',
  interest: 'support-bot',
} as const

/* The hero's object: Home's explorer (content/explorer.ts), on AI agents, in the same shape: each row is an event in
   the company's timeline, its facts are its reads (a transcript's quoted terms, the responder, prices), and the walls
   are the schema's: a conversation, a call, a cancel, the open web. Insights asks 1 question across a group of
   companies' agents. Every company is invented. */
const LLM = 'gemini-read@2026-11-09'
const said = (text: string, quoted: ExRow[]): ExRead => ({ kind: 'transcript', text, value: { quoted }, reader: LLM })
const agent = (name: string, by: string): ExRead => ({ kind: 'responder', text: name, value: { responder: name, by }, reader: 'rules/tags@3' })
const listed = (text: string, items: { name: string; price: string }[]): ExRead => ({ kind: 'prices', text, value: { items }, reader: LLM })

const agents: Explorer = {
  ...explorer,
  placeholder: { search: 'Any company’s website', insights: 'Ask about a group of AI agents' },
  said: 'An example of Obsession’s console, on invented companies. Search a company and choose the persona, the wall and the kind: each row is an event in its timeline, an AI agent’s answer in a chat or on a call beside the pages it should match, with the facts read from it and the transcript or recording behind it. Insights asks one question across a group of companies’ AI agents and writes a report with a row for each.',
  companies: [
    {
      domain: 'online-bank.example',
      kind: 'Bank',
      covered: true,
      personas: ['New saver · UK', 'Existing customer · UK'],
      walls: ['Conversation', 'Call', 'Cancel', 'Open'],
      kinds: [
        { label: 'Chats', kind: 'Chat' },
        { label: 'Calls', kind: 'Call' },
        { label: 'Pages', kind: 'Page' },
      ],
      views: [
        {
          persona: 'New saver · UK',
          wall: 'Conversation',
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
          wall: 'Open',
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
      walls: ['Call', 'Open'],
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
          wall: 'Open',
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
      walls: ['Form', 'Open'],
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
          wall: 'Open',
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
      kind: 'Banks',
      question: 'Which UK banks’ chat agents quote terms their own rate page doesn’t?',
      persona: 'New saver · UK',
      plan: ['Find 5 UK banks with a chat agent', 'Look each one up in the index', 'Write the report'],
      cols: ['Bank', 'What chat said', 'Rate page'],
      sources: [
        { domain: 'online-bank.example', cells: ['4.6%, fixed', '4.6% variable'], evidence: 'Chat 4 Nov, 09:20: “Yes, 4.6% is fixed for 12 months.” Rate page, same minute: variable.' },
        { domain: 'app-bank.example', cells: ['5.0% for 12 months', '5.0% for 12 months'], evidence: 'Chat 4 Nov, 10:02, matched the rate page word for word.' },
        { domain: 'savings-bank.example', cells: ['4.8%, take money out any time', '4.8%, 30 days’ notice'], evidence: 'Chat 5 Nov, 08:44: “You can take money out any time.” The terms page says 30 days’ notice.' },
        { domain: 'high-street-bank.example', cells: ['Passed to a person', '4.2%'], evidence: 'Chat 5 Nov, 12:10: passed to a person after 3 questions. The person quoted 4.2%, as the page does.' },
        { domain: 'credit-union.example' },
      ],
      noun: ['bank', 'banks'],
      watched: 'Watching. Its chat answers arrive here.',
      answer: '2 of the 4 banks in the index have a chat agent that quotes terms their rate page doesn’t.',
      stats: [
        { v: '2 of 4', l: 'chat differs from the page' },
        { v: '1 of 4', l: 'passed to a person' },
        { v: '11 min', l: 'longest wait for a person' },
      ],
    },
    {
      label: 'Phone prices',
      kind: 'Dental clinics',
      question: 'Which London dental clinics’ AI receptionists quote a price their list doesn’t?',
      persona: 'New patient · London',
      plan: ['Find 5 London clinics with an AI receptionist', 'Look each one up in the index', 'Write the report'],
      cols: ['Clinic', 'Aligner consult, phone vs list', 'Difference'],
      sources: [
        { domain: 'dental-clinic.example', cells: ['Free vs £50', '£50 less by phone'], evidence: 'Call 3 Nov, 08:01: “The aligner consult is free.” Price list that morning: £50.' },
        { domain: 'smile-studio.example', cells: ['£40 vs £40', 'Same'], evidence: 'Call 4 Nov, 09:15, 2 min 40 s. Matched the price list.' },
        { domain: 'city-dental.example', cells: ['£75 vs £60', '£15 more by phone'], evidence: 'Call 4 Nov, 11:30: “It’s 75 for the consult.” Price list: £60.' },
        { domain: 'family-dentist.example', cells: ['£50 vs £50', 'Same'], evidence: 'Call 5 Nov, 10:05. Matched the price list, and texted it after the call.' },
        { domain: 'bright-teeth.example' },
      ],
      noun: ['clinic', 'clinics'],
      watched: 'Watching. Its phone quote arrives here.',
      answer: '2 of the 4 clinics in the index quote a different price by phone than on their list.',
      stats: [
        { v: '2 of 4', l: 'differ from the list' },
        { v: '£50', l: 'largest gap' },
        { v: '1 of 4', l: 'texted the price after' },
      ],
    },
  ],
}

export const page: Page = {
  meta: {
    path: '/verify',
    title: 'What AI agents tell customers, word for word · Obsession',
    description:
      'Obsession records what AI agents tell customers: support chats, voice lines, sales agents and outbound callers, yours and competitors’, each answer dated.',
    answer:
      'Obsession records what AI agents tell customers, as dated transcripts and call recordings. It asks support chats, voice lines, sales agents and outbound callers what a customer asks, yours and your competitors’, and keeps each answer beside the page it should match.',
    ogImage: '/og/verify.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'AI agents', path: '/verify' },
    ],
  },

  hero: {
    pill: 'Early access',
    pillTo: '#join',
    headline: 'What AI agents tell customers, word for word.',
    sub: 'Support chats, voice lines, sales agents and outbound callers, yours and your competitors’. Every answer kept as a dated transcript or call, beside the page it should match.',
    capture: { ...access, source: 'verify-hero' },
    note: 'Every company and conversation in the console below is an example.',
    proof: [],
    consoleHeading,
  },

  explorer: agents,

  dataKinds: {
    kicker: 'What’s in it?',
    heading: 'Every answer, and what happened after it.',
    items: [
      { title: 'The conversation itself', line: 'Every chat transcript and call recording, word for word, with the time of each reply.', eg: 'Chat 09:20 · “Yes, 4.6% is fixed”' },
      { title: 'The answer beside the page', line: 'Each answer next to the policy, price list or terms it should match, captured the same minute.', eg: 'Chat: fixed rate · page: variable' },
      { title: 'The wait for a person', line: 'How long each channel takes to hand a customer to a person, if it does.', eg: 'Chat 41 s · voice line 6 min' },
      { title: 'What it promised', line: 'Whether the email, refund, callback or booking it promised ever came.', eg: 'Email promised · none 6 hours later' },
      { title: 'What it sends unasked', line: 'Every email, text and call an AI SDR or outbound caller sends a prospect, with the time.', eg: 'Text at 03:12 · “30% off this week”' },
      { title: 'The day it changes', line: 'The same questions asked every day, so a new answer shows the day it starts.', eg: '37 of 40 the same, then 28' },
    ],
  },

  gap: {
    heading: 'Your vendor grades its own agent. Obsession keeps what the customer heard.',
    sub: 'Asked on the real channels, yours and your competitors’, as the customer profiles you pick.',
    rows: [
      { today: 'Your vendor tests its agent in its own simulator', obsession: 'Answers from your real chat, phone line and inbox, as a customer gets them' },
      { today: 'Transcripts show what the bot said', obsession: 'What happened after: the refund, the email, the booking' },
      { today: 'You guess what a competitor’s agent says', obsession: 'Its answers on rates, prices and refunds, dated, beside yours' },
      { today: 'You hear from a complaint, days later', obsession: 'A changed answer at your webhook, the day it changes' },
      { today: 'Screenshots in a folder', obsession: 'Each answer with its transcript or recording and the time, ready for legal or your vendor' },
    ],
  },

  kinds: {
    heading: 'Every AI agent a customer meets, from chat to phone.',
    label: 'Pick an agent',
    items: [
      { name: 'Support bots and help desks', line: 'The same question on chat, email and your portal, each answer beside your policy.', recipes: ['support-bot', 'resolution', 'drift', 'disclosure'] },
      { name: 'Voice receptionists and call agents', line: 'Every call recorded: the price it quoted, the booking and the wait for a person.', recipes: ['voice-agent', 'disclosure', 'drift'] },
      { name: 'AI SDRs and outbound callers', line: 'Every email, text and call it sends a prospect, with the time, the offer and what follows STOP.', recipes: ['outbound-agent', 'disclosure'] },
      { name: 'Shopping and sales agents', line: 'The prices, stock and delivery it quotes, beside your store, through to checkout.', recipes: ['sales-agent', 'drift'] },
      { name: 'Competitors’ agents', line: 'What a competitor’s chat and phone line tell any customer, dated, beside your own.', recipes: ['competitor', 'support-bot'] },
      { name: 'Agents you’re about to buy', line: 'Your hardest cases on each shortlisted vendor’s agent, side by side, with the vendor’s agreement.', recipes: ['vendor-agent', 'drift'] },
    ],
  },

  recipes: {
    heading: 'Start from the recipe that fits the agent.',
    ids: ['support-bot', 'voice-agent', 'outbound-agent', 'sales-agent', 'vendor-agent', 'resolution', 'disclosure', 'drift'],
  },

  /* Is this real: our own runs and Brand G, the 1 real record, as Home has them. No AI agent run is claimed. */
  proof: {
    heading: '1,500 sign-ups, baskets and checkouts run at real companies, and counting.',
    line: 'Brand G, a real skincare store, is one: a £40 basket left at 02:57 on 22 Sep, and no reminder 48 hours later. Its whole record is the sample data. Chats and calls are kept the same way, each reply with its time.',
    cta: { label: 'See the sample data', to: '/sample-output' },
  },

  faq: {
    heading: 'Before you request access.',
    items: [
      {
        q: 'What does Obsession record from AI agents?',
        a: 'Obsession records what AI agents tell customers, as dated transcripts and call recordings. It asks support chats, voice lines, sales agents and outbound callers what a customer asks, yours and your competitors’, and keeps each answer beside the page it should match.',
      },
      {
        q: 'Can I see what a competitor’s AI agent says?',
        a: 'Yes, as its customer. Obsession asks a competitor’s chat or phone line what any customer can ask, and keeps every answer exactly as it arrived.',
      },
      {
        q: 'How is this different from our vendor’s own tests?',
        a: 'Your vendor’s tests run inside its own tools, often with simulated customers. Obsession asks on your real channels, as a customer, and keeps what came after: the email, the refund, the booking.',
      },
      {
        q: 'Do you need our logins or code?',
        a: 'No. Obsession uses the chat page, phone number and inbox any customer can. A test account on your portal only if you give one.',
      },
      {
        q: 'Does it say it’s an AI?',
        a: 'Yes, at the start of every chat and call, and it says calls are recorded. Every recording is kept exactly as made. Conversations with your own agents are tagged as tests, agreed with your vendor first.',
      },
      {
        q: 'What does early access include?',
        a: 'API and MCP access, lookups of every company already covered, and up to 5 companies added to the index for you. We’re onboarding a limited number of teams, and you set it up with the founders.',
      },
    ],
  },

  final: {
    heading: 'Which AI agent should we ask first?',
    capture: { ...access, source: 'verify-final' },
  },
}
