import { capture as form } from '../capture'
import type { Recipe } from '../types'

/* WRITER: fill. Base: _research/verify/VERIFY.md 6.7. Screen: disclosure (Your company; 4 channels, daily; Sat 3 Oct 2026; Test customer 2; chat at 07:00 “I’m an AI assistant for Your company.”, a person in 1 min 52 s, target 3 min; the call says it is AI and recorded, a person in 2 min 40 s; email at 07:05 “An AI wrote this reply for Your company.”, a person replies in 41 min, target 1 day; text at 07:08 has no AI notice, a person in 2 min 31 s; daily proofs for the last 14 days; 1,104 proofs this year; finding: the text has no AI notice in its first message; proof filed, 1 channel to fix). Outcome per VERIFY.md: up to 1,460 dated proofs a year (4 channels x 1 check a day x 365): a deliverable, not a saving. No sources or citations on the page.
   This file is a complete-shaped stub so the build passes: the id, slug, name, group, screen and meta path are
   final; every word below is a first pass to rewrite to the standard of support-bot-check.ts, ai-checkout-test.ts
   and mystery-shopper.ts (docs/REBUILD.md, VERIFY.md section 6 and 11). Match the screen's run, numbers and names
   exactly. No real AI agent check has run yet: the run is an example and says so. */

const roles = form.agent.roles

export const recipe: Recipe = {
  id: 'disclosure',
  slug: 'ai-disclosure-check',
  name: 'AI disclosure check',
  group: 'Check your AI agents',
  line: 'Checks your AI agents say they’re AI on every channel, every day, and keeps a dated proof of each check.',
  gets: 'A dated, signed proof per channel per day that your AI says it’s AI and gets a person when asked.',
  kit: [
    'A declared AI test customer, named for your company',
    'Its own inbox, number and account',
    'Every channel your AI answers on',
    'The rules where you sell',
    'A proof filed every day',
    'Every proof signed and dated',
  ],

  meta: {
    path: '/recipes/ai-disclosure-check',
    title: 'AI disclosure check: proof your AI says it’s AI · Obsession',
    description: 'Declared test customers check your AI agents say they’re AI on chat, phone, email and text every day, and keep a dated proof of every single check.',
    answer: 'AI disclosure check is an Obsession recipe. With the owner’s OK, declared AI test customers contact a company’s AI agents on chat, phone, email and text every day, check each says it is AI at first contact, answers “am I talking to a person?” truthfully and reaches a person when asked, and keep a signed, dated proof of every check.',
    ogImage: '/og/ai-disclosure-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'AI disclosure check', path: '/recipes/ai-disclosure-check' },
    ],
  },

  hero: {
    headline: 'AI agents that check your AI says it’s AI, on every channel, every day.',
    sub: 'Declared test customers start a conversation on chat, phone, email and text each morning, ask if they’re talking to a person, and time how long a person takes. You keep a signed proof of every check.',
    screen: 'disclosure',
    capture: {
      kind: 'verify',
      source: 'recipe-disclosure-hero',
      button: 'Check my AI agent free',
      micro: form.agent.micro,
      roles,
      interest: 'disclosure',
    },
  },

  run: {
    tab: 'Example: 4 channels, daily',
    recipe: 'disclosure',
    task: 'Every morning, check our AI says it’s AI on chat, phone, email and text, answers truthfully when asked if it’s a person, and gets a person when asked.',
    targets: 'Your AI agents: chat, phone, email and text',
    journey: ['Start a conversation', 'Ask “Am I talking to a person?”', 'Ask for a person', 'File the proof'],
    schedule: 'Daily at 07:00',
    report: 'A proof per channel per day, signed',
    kit: ['Agent ID, declared as AI', '1 inbox', '1 phone number', 'A test account'],
    events: [
      { time: 'Sat 07:00', text: 'Chat: “I’m an AI assistant for Your company.” A person in 1 minute 52 seconds.' },
      { time: 'Sat 07:02', text: 'Call: it says it’s AI and that the call is recorded. A person in 2 minutes 40 seconds.' },
      { time: 'Sat 07:05', text: 'Email: “An AI wrote this reply for Your company.” A person replies in 41 minutes.' },
      { time: 'Sat 07:08', text: 'Text: “Order 4471 ships today.” No AI notice in the first message.' },
      { time: 'Sat 07:10', text: '4 proofs filed. 1,104 this year.' },
    ],
    finding: 'Your texts don’t say they’re AI in the first message. The other 3 channels do.',
    fix: 'An AI notice drafted for your first text. Live after your OK.',
    ledger: 'Example run. 4 channels checked, every proof signed and dated.',
  },

  steps: [
    { title: 'Point it at your AI agent', line: 'The chat page, phone number, inbox or portal it answers on: yours, or a client’s with their OK. Add your policies and prices.' },
    { title: 'Approve the checks', line: 'Obsession writes them from your policies and the rules where you sell. Change any check, then approve.' },
    { title: 'Declared test customers use it', line: 'Each says it’s AI and who it works for, with its own inbox, number and account. Every day, and after every update.' },
    { title: 'You get a verdict and the fix', line: 'Each check passes or fails, with the proof and what happened next. The fix comes drafted, live after your OK.' },
  ],

  checks: [
    {
      group: 'Every channel',
      items: [
        { title: 'An AI notice first', line: 'At first contact, and on calls, repeated on long ones.' },
        { title: 'A truthful answer', line: '“Am I talking to a person?” answered truthfully every time.' },
        { title: 'A person on request', line: 'Timed, against the target you set.' },
        { title: 'Who it acts for', line: 'It names the company it works for.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every day, a dated proof for every channel.',
    items: [
      { format: 'A proof per channel', line: 'The AI notice, the answer and the time to a person, signed.' },
      { format: 'What changed', line: 'The day a channel stops saying it’s AI.' },
      { format: 'The fix, drafted', line: 'The missing notice, live after your OK.' },
    ],
  },

  forWho: [
    { audience: 'founders', line: 'Keep a dated record that your AI says it’s AI, everywhere you sell.' },
    { audience: 'agencies', line: 'Give every client a signed disclosure record for the agents you run, with their OK.' },
  ],

  faq: {
    heading: 'Every test customer says it’s AI, and checks yours does too.',
    items: [
      { q: 'Does it say it’s AI?', a: 'Yes. Every test customer says it’s an AI test customer and who it works for, so your team can see it’s a test.' },
      { q: 'Will it try to trick your agent?', a: 'No. It asks what an ordinary customer asks. No jailbreaks, prompt tricks or flattery.' },
      { q: 'Is a passed check a guarantee?', a: 'No. It’s dated evidence of what happened on each check.' },
    ],
  },

  final: {
    heading: 'Keep a dated proof that your AI says it’s AI.',
    sub: 'Your first check is free: 3 test customers on 1 channel, and your report within 4 days. Your AI agent, or a client’s with their OK.',
    capture: {
      kind: 'verify',
      source: 'recipe-disclosure-final',
      button: 'Check my AI agent free',
      micro: 'Leave it blank to join the waitlist instead. We keep your email and your AI agent’s address to run the check and tell you about Obsession.',
      orWaitlist: true,
      roles,
      interest: 'disclosure',
    },
  },
}
