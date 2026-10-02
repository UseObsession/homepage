import { capture as form } from '../capture'
import type { Recipe } from '../types'

/* WRITER: fill. Base: _research/verify/VERIFY.md 6.3. Screen: outcheck (Your company; Email, Text, Calls; Test prospects 1 and 2, added with the reader’s OK, only receive; 40 messages, 37 passed and 3 flagged: a claimed customer the company doesn’t have, a text at 03:12 inside quiet hours 21:00 to 08:00, 30% off over a 15% limit; STOP honoured within 1 message; the AI SDR paused by the reader’s rule). The screen names a customer; keep any name in copy invented. Outcome per VERIFY.md: up to 1,040 hours a year (20 hours a week x 52); recompute and state its model. Obsession only receives: it never calls anyone else’s mobile.
   This file is a complete-shaped stub so the build passes: the id, slug, name, group, screen and meta path are
   final; every word below is a first pass to rewrite to the standard of support-bot-check.ts, ai-checkout-test.ts
   and mystery-shopper.ts (docs/REBUILD.md, VERIFY.md section 6 and 11). Match the screen's run, numbers and names
   exactly. No real AI agent check has run yet: the run is an example and says so. */

const roles = form.agent.roles

export const recipe: Recipe = {
  id: 'outbound-agent',
  slug: 'outbound-agent-check',
  name: 'Outbound agent check',
  group: 'Check your AI agents',
  line: 'Puts declared test prospects on your AI SDR’s lists, with your OK, and checks every email, text and call it sends them.',
  gets: 'Every message your AI SDR sends, checked against your rules, and the ones that broke them flagged.',
  kit: [
    'Declared AI test prospects, added with your OK',
    'Their own inboxes and phone numbers',
    'Your approved claims, prices and limits',
    'Your quiet hours and contact limits',
    'Only receives, never calls out',
    'Every message signed and dated',
  ],

  meta: {
    path: '/recipes/outbound-agent-check',
    title: 'Outbound agent check: what your AI SDR sends · Obsession',
    description: 'Declared test prospects on your AI SDR’s lists, added with your OK, read every email, text and call it sends and check each one against your own rules.',
    answer: 'Outbound agent check is an Obsession recipe. With the sender’s OK, declared AI test prospects with their own inboxes and phone numbers are added to an AI SDR’s lists. They receive what real prospects receive, reply as prospects do, and check every claim, offer, send time and opt out against the company’s rules, signing every message.',
    ogImage: '/og/outbound-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Outbound agent check', path: '/recipes/outbound-agent-check' },
    ],
  },

  hero: {
    headline: 'AI agents that read every message your AI SDR sends.',
    sub: 'Declared test prospects, added to its lists with your OK, receive every email, text and call, reply no and time how fast it stops. You see each claim, discount and send time that broke your rules.',
    screen: 'outcheck',
    capture: {
      kind: 'verify',
      source: 'recipe-outbound-agent-hero',
      button: 'Check my AI agent free',
      micro: form.agent.micro,
      roles,
      interest: 'outbound-agent',
    },
  },

  run: {
    tab: 'Example: your AI SDR, continuously',
    recipe: 'outbound-agent',
    task: 'Add 2 test prospects to our AI SDR’s lists. Read every email, text and call it sends them, and check each one against our rules.',
    targets: 'Your AI SDR: email, text and calls',
    journey: ['Join its lists, with your OK', 'Read every message', 'Reply no, then STOP', 'Check against your rules'],
    schedule: 'Every message, continuously',
    report: 'A Slack flag, and a weekly signed record',
    kit: ['2 test prospects, declared as AI', '2 inboxes', '2 phone numbers', 'Only receives, never calls out'],
    events: [
      { time: 'Mon 08:31', text: 'Test prospects 1 and 2, added with your OK, get the first email. Its claims match your list.' },
      { time: 'Tue 11:26', text: 'Email: “30% off if you sign today.” Your rule allows up to 15%.' },
      { time: 'Wed 03:12', text: 'A text at 03:12. Your quiet hours run from 21:00 to 08:00.' },
      { time: 'Wed 09:14', text: 'Email: it names a customer you don’t have.' },
      { time: 'Wed 10:02', text: 'Test prospect 2 replies STOP. “You’re unsubscribed.” Nothing follows.' },
    ],
    finding: '3 of 40 messages broke your rules: a discount over its limit, a text at 03:12 and a customer you don’t have.',
    fix: 'Your AI SDR paused by your rule, and 3 rule changes drafted for its settings. Live after your OK.',
    ledger: 'Example run. 40 messages read, every one signed and dated.',
  },

  steps: [
    { title: 'Point it at your AI agent', line: 'The chat page, phone number, inbox or portal it answers on: yours, or a client’s with their OK. Add your policies and prices.' },
    { title: 'Approve the checks', line: 'Obsession writes them from your policies and the rules where you sell. Change any check, then approve.' },
    { title: 'Declared test customers use it', line: 'Each says it’s AI and who it works for, with its own inbox, number and account. Every day, and after every update.' },
    { title: 'You get a verdict and the fix', line: 'Each check passes or fails, with the proof and what happened next. The fix comes drafted, live after your OK.' },
  ],

  checks: [
    {
      group: 'What it says',
      items: [
        { title: 'Says it’s AI', line: 'And names the company it works for.' },
        { title: 'True claims', line: 'Customers, results and prices against your approved list.' },
        { title: 'Offers within its limit', line: 'Every discount against the limit you set.' },
      ],
    },
    {
      group: 'When it stops',
      items: [
        { title: 'Stops on no and STOP', line: 'And how fast.' },
        { title: 'Quiet hours and limits', line: 'Every send time and how often it writes.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every message comes back checked, and every broken rule flagged.',
    items: [
      { format: 'A verdict per message', line: 'Passed or flagged, with the rule that decided it.' },
      { format: 'The messages', line: 'Every email, text and call as a prospect received it.' },
      { format: 'The fix, drafted', line: 'The rule change for your AI SDR, live after your OK.' },
    ],
  },

  forWho: [
    { audience: 'sales', line: 'Know every claim and discount your AI SDR makes before a prospect quotes it back.' },
    { audience: 'agencies', line: 'Check the outbound you run for clients, with their OK, and show them the record.' },
  ],

  faq: {
    heading: 'Every test prospect says it’s AI. It only receives.',
    items: [
      { q: 'Does it say it’s AI?', a: 'Yes. Every test customer says it’s an AI test customer and who it works for, so your team can see it’s a test.' },
      { q: 'Will it try to trick your agent?', a: 'No. It asks what an ordinary customer asks. No jailbreaks, prompt tricks or flattery.' },
      { q: 'Is a passed check a guarantee?', a: 'No. It’s dated evidence of what happened on each check.' },
    ],
  },

  final: {
    heading: 'See what your AI SDR sends, as a prospect does.',
    sub: 'Your first check is free: 2 test prospects on 1 channel, and your report within 4 days. Your AI SDR, or a client’s with their OK.',
    capture: {
      kind: 'verify',
      source: 'recipe-outbound-agent-final',
      button: 'Check my AI agent free',
      micro: 'Leave it blank to join the waitlist instead. We keep your email and your AI agent’s address to run the check and tell you about Obsession.',
      orWaitlist: true,
      roles,
      interest: 'outbound-agent',
    },
  },
}
