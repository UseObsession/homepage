import { consoleHeading } from '../console'
import { explorer } from '../explorer'
import type { Explorer, Page } from '../types'

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

/* The hero's object: Home's explorer (content/explorer.ts), on AI agents. Search reads 1 company's agents by persona
   and channel; Insights asks 1 question across a group of companies' agents. Every company is invented. */
const agents: Explorer = {
  ...explorer,
  placeholder: { search: 'Any company’s website', insights: 'Ask about a group of AI agents' },
  said: 'An example of Obsession’s console, on invented companies. Search a company and choose who asks and on which channel: its AI agent’s answers come back as dated facts, with the transcript or recording behind them. Insights asks one question across a group of companies’ AI agents and writes a report with a row for each.',
  companies: [
    {
      domain: 'online-bank.example',
      kind: 'Bank',
      covered: true,
      personas: ['New saver · UK', 'Existing customer · UK'],
      steps: ['Chat', 'Voice line'],
      data: [{ label: 'Chats', kind: 'Chat' }, { label: 'Calls', kind: 'Call' }, { label: 'Offers', kind: 'Offer' }],
      views: [
        {
          persona: 'New saver · UK',
          step: 'Chat',
          facts: [
            { when: '4 Nov', kind: 'Chat', text: 'Asked if the 4.6% rate is fixed. Chat said yes; the rate page says variable.' },
            { when: '4 Nov', kind: 'Chat', text: 'Passed to a person after 11 minutes.' },
          ],
          evidence: { from: 'Chat transcript · online-bank.example', subject: 'Is the 4.6% rate fixed?', lines: ['09:20 Chat: “Yes, 4.6% is fixed for 12 months.”', '09:20 Rate page, same minute: “4.6% variable”', 'Our side said it is an AI at the start'] },
          record: { channel: 'chat', act: 'asked about a savings rate', wall: 'conversation', responder: 'AI support agent (vendor platform)' },
        },
        {
          persona: 'New saver · UK',
          step: 'Voice line',
          facts: [
            { when: '5 Nov', kind: 'Call', text: 'The voice agent also called 4.6% fixed for the first year.' },
            { when: '5 Nov', kind: 'Call', text: 'Asked for a person: 6 minutes on hold, then the call ended.' },
          ],
          evidence: { from: 'Call · online-bank.example, 0800 line', subject: 'Call about the easy access rate', lines: ['5 Nov, 10:02, 7 min 30 s', 'Voice agent: “It’s 4.6%, fixed for the first year.”', 'Our caller said it is an AI at the start'] },
          record: { channel: 'voice', act: 'called about a savings rate', wall: 'call', responder: 'AI voice agent (vendor platform)' },
        },
        {
          persona: 'Existing customer · UK',
          step: 'Chat',
          facts: [
            { when: '6 Nov', kind: 'Offer', text: 'Asked to close the account. Chat offered 4.9% to stay, shown nowhere else.' },
            { when: '6 Nov', kind: 'Chat', text: 'Said it is an AI only when asked.' },
          ],
          evidence: { from: 'Chat transcript · online-bank.example/app', subject: 'I’d like to close my savings account', lines: ['14:05 Chat: “Before you go, we can move you to 4.9% today.”', 'Not on the rate page or the signed-in offers page, 14:05', 'Signed in as the existing customer'] },
          record: { channel: 'chat', act: 'asked to close a savings account', wall: 'cancellation', responder: 'AI support agent (vendor platform)' },
        },
      ],
    },
    {
      domain: 'dental-clinic.example',
      kind: 'Dental clinic',
      covered: true,
      personas: ['New patient · London'],
      steps: ['Call'],
      data: [{ label: 'Calls', kind: 'Call' }, { label: 'Prices', kind: 'Price' }],
      views: [
        {
          persona: 'New patient · London',
          step: 'Call',
          facts: [
            { when: '3 Nov', kind: 'Price', text: 'The receptionist said the aligner consult is free. The price list says £50.' },
            { when: '3 Nov', kind: 'Call', text: 'Asked for a person: answered after 1 minute 12 seconds on hold.' },
          ],
          evidence: { from: 'Call · dental-clinic.example, main line', subject: 'New patient asking about aligners', lines: ['3 Nov, 08:01, 3 min 5 s', 'Receptionist: “The aligner consult is free.”', 'Price list, captured that morning: “Aligner consultation £50”', 'Our caller said it is an AI at the start'] },
          record: { channel: 'voice', act: 'called as a new patient', wall: 'call', responder: 'AI receptionist (voice platform)' },
        },
      ],
    },
    {
      domain: 'saas-app.example',
      kind: 'Software',
      covered: true,
      personas: ['Prospect · 50 seats'],
      steps: ['Outbound'],
      data: [{ label: 'Emails', kind: 'Email' }, { label: 'Texts', kind: 'Text' }, { label: 'Offers', kind: 'Offer' }],
      views: [
        {
          persona: 'Prospect · 50 seats',
          step: 'Outbound',
          facts: [
            { when: '4 Nov', kind: 'Email', text: 'Day 1: an email from its AI SDR, 6 minutes after the guide download.' },
            { when: '5 Nov', kind: 'Offer', text: 'Day 2: “30% off if you sign this week.” The pricing page shows no offer.' },
            { when: '6 Nov', kind: 'Text', text: 'Day 3: a text at 03:12, local time. Replied STOP; nothing followed.' },
          ],
          evidence: { from: 'Alex at SaaS App <alex@saas-app.example>', subject: '30% off if you sign this week', lines: ['Arrived day 2, 11:26', 'Sender checked: signature valid', 'Not on saas-app.example/pricing the same day'] },
          record: { channel: 'email', act: 'downloaded a guide as a prospect', wall: 'form', responder: 'AI SDR (outbound platform)' },
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
