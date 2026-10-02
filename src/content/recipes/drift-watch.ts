import { capture as form } from '../capture'
import type { Recipe } from '../types'

/* WRITER: fill. Base: _research/verify/VERIFY.md 6.8. Screen: drift (Your company; support bot, 40 cases, daily; baseline 90 to 100%; 92.5% before, 70% after: 37 then 28 of 40; Vendor A’s update on 2 Oct at 23:20; the re-run after the update at 00:10; 9 cases newly failing: address change, refunds 14 days, a person on request, live codes, delivery £4.95, cancel online, warranty 2 years, no price match, stops after “No”; a note to Vendor A drafted, sent after the reader’s OK; with the reader’s and Vendor A’s OK, tests tagged). Outcome per VERIFY.md: up to 10 days sooner (a drop found after 11 days, found within 1 by a daily replay); recompute and state its model.
   This file is a complete-shaped stub so the build passes: the id, slug, name, group, screen and meta path are
   final; every word below is a first pass to rewrite to the standard of support-bot-check.ts, ai-checkout-test.ts
   and mystery-shopper.ts (docs/REBUILD.md, VERIFY.md section 6 and 11). Match the screen's run, numbers and names
   exactly. No real AI agent check has run yet: the run is an example and says so. */

const roles = form.agent.roles

export const recipe: Recipe = {
  id: 'drift',
  slug: 'drift-watch',
  name: 'Drift watch',
  group: 'Check your AI agents',
  line: 'Replays your hardest cases on your AI agent every morning, and again after every update, and flags every answer that changed.',
  gets: 'Every change in your AI agent’s answers, found the day it happens, with the before and after signed.',
  kit: [
    'A declared AI test customer, named for your company',
    'Its own inbox and test account',
    'Your golden set of hard cases',
    'Your vendor’s updates, watched',
    'Every test tagged, agreed with your vendor',
    'Every replay signed and dated',
  ],

  meta: {
    path: '/recipes/drift-watch',
    title: 'Drift watch: know when your AI agent changes · Obsession',
    description: 'Test customers replay your hardest support cases every morning and within the hour of any update, and flag every answer that changed from your baseline.',
    answer: 'Drift watch is an Obsession recipe. With the owner’s OK, declared AI test customers replay a company’s golden set of hard support cases on its live AI agent every morning, and again within the hour of any vendor release, model update or prompt change. Each run is compared with the baseline, and every answer that changed is flagged with the before and after, signed.',
    ogImage: '/og/drift-watch.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Drift watch', path: '/recipes/drift-watch' },
    ],
  },

  hero: {
    headline: 'AI agents that notice the morning your AI agent changes.',
    sub: 'Test customers replay your hardest cases every morning and within the hour of any update, and compare every answer with last week’s. You hear which answers broke before a customer does.',
    screen: 'drift',
    capture: {
      kind: 'verify',
      source: 'recipe-drift-hero',
      button: 'Check my AI agent free',
      micro: form.agent.micro,
      roles,
      interest: 'drift',
    },
  },

  run: {
    tab: 'Example: after a vendor update',
    recipe: 'drift',
    task: 'Replay our 40 hardest support cases every morning, and again within the hour of any update. Tell me what changed.',
    targets: 'Your support bot, with Vendor A’s OK',
    journey: ['Replay your 40 cases', 'Compare with the baseline', 'Run again after every update', 'Flag every new failure'],
    schedule: 'Daily at 07:00, and within the hour of any update',
    report: 'A Slack alert, and a note for your vendor',
    kit: ['Agent ID, declared as AI', '1 inbox', 'Your 40 cases', 'Tagged as tests, never billed'],
    events: [
      { time: '2 Oct, 07:00', text: 'Morning replay: 37 of 40 cases pass, in line with the baseline.' },
      { time: '2 Oct, 23:20', text: 'Vendor A ships an update to your bot.' },
      { time: '3 Oct, 00:10', text: 'The replay runs again. 28 of 40 pass.' },
      { time: '3 Oct, 00:12', text: '9 cases fail that passed that morning: refunds, delivery fees, warranty, and stopping after “No”.' },
      { time: '3 Oct, 00:14', text: 'A note to Vendor A drafted, with every answer before and after.' },
    ],
    finding: 'Since Vendor A’s update, 9 of your 40 cases fail. Your bot now offers 30 day refunds and free delivery.',
    fix: 'The note to Vendor A, with every answer before and after, signed. Sent after your OK.',
    ledger: 'Example run. 80 replays, every answer signed and dated.',
  },

  steps: [
    { title: 'Point it at your AI agent', line: 'The chat page, phone number, inbox or portal it answers on: yours, or a client’s with their OK. Add your policies and prices.' },
    { title: 'Approve the checks', line: 'Obsession writes them from your policies and the rules where you sell. Change any check, then approve.' },
    { title: 'Declared test customers use it', line: 'Each says it’s AI and who it works for, with its own inbox, number and account. Every day, and after every update.' },
    { title: 'You get a verdict and the fix', line: 'Each check passes or fails, with the proof and what happened next. The fix comes drafted, live after your OK.' },
  ],

  checks: [
    {
      group: 'Every replay',
      items: [
        { title: 'Pass rate against the baseline', line: 'Case by case.' },
        { title: 'New failures', line: 'Every case that passed before and fails now.' },
        { title: 'Changed answers', line: 'The same question, a different answer.' },
        { title: 'Time to answer and handoffs', line: 'Against last week.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every change comes back with its before and after.',
    items: [
      { format: 'A verdict per case', line: 'Passed or newly failing, against the baseline.' },
      { format: 'Before and after', line: 'Every changed answer, side by side, signed.' },
      { format: 'A note for your vendor', line: 'Drafted with the evidence, sent after your OK.' },
    ],
  },

  forWho: [
    { audience: 'founders', line: 'Know the morning a vendor update changes what your bot tells customers.' },
    { audience: 'agencies', line: 'Watch every agent you run for clients, with their OK, after every update.' },
  ],

  faq: {
    heading: 'Every replay is declared, tagged and agreed with your vendor.',
    items: [
      { q: 'Does it say it’s AI?', a: 'Yes. Every test customer says it’s an AI test customer and who it works for, so your team can see it’s a test.' },
      { q: 'Will it try to trick your agent?', a: 'No. It asks what an ordinary customer asks. No jailbreaks, prompt tricks or flattery.' },
      { q: 'Is a passed check a guarantee?', a: 'No. It’s dated evidence of what happened on each check.' },
    ],
  },

  final: {
    heading: 'Know the morning your AI agent changes.',
    sub: 'Your first check is free: 3 test customers on 1 channel, and your report within 4 days. Your AI agent, or a client’s with their OK.',
    capture: {
      kind: 'verify',
      source: 'recipe-drift-final',
      button: 'Check my AI agent free',
      micro: 'Leave it blank to join the waitlist instead. We keep your email and your AI agent’s address to run the check and tell you about Obsession.',
      orWaitlist: true,
      roles,
      interest: 'drift',
    },
  },
}
