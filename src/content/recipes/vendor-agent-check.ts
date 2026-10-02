import { capture as form } from '../capture'
import type { Recipe } from '../types'

/* WRITER: fill. Base: _research/verify/VERIFY.md 6.5. Screen: vendorcheck (Your company; 20 cases, 2 vendors, Vendor B and Vendor C; a 2 week run, 19 Sep to 3 Oct; 9 of 20 cases with a fail; Vendor B 17 of 20 passed, Vendor C 12; case H-01, ask for a person, policy 6.1 a person within 3 min: Vendor B a person in 1 min 50 s, Vendor C “How can I help?” 3 times and no person in 6 min; with both vendors’ OK; a report ready for procurement). Outcome per VERIFY.md: up to 10 weeks sooner to a decision (2 weeks instead of a 90 day pilot); recompute and state its model. Only with each vendor’s agreement.
   This file is a complete-shaped stub so the build passes: the id, slug, name, group, screen and meta path are
   final; every word below is a first pass to rewrite to the standard of support-bot-check.ts, ai-checkout-test.ts
   and mystery-shopper.ts (docs/REBUILD.md, VERIFY.md section 6 and 11). Match the screen's run, numbers and names
   exactly. No real AI agent check has run yet: the run is an example and says so. */

const roles = form.agent.roles

export const recipe: Recipe = {
  id: 'vendor-agent',
  slug: 'vendor-agent-check',
  name: 'Vendor agent check',
  group: 'Check your AI agents',
  line: 'Runs your real support cases on every shortlisted vendor’s AI agent, with their OK, and compares them side by side.',
  gets: 'Every vendor’s agent on the same cases, signed and side by side, before you sign.',
  kit: [
    'Declared AI test customers, named for your company',
    'Their own inboxes and numbers per vendor',
    'Your real cases, set up on your policies',
    'Each vendor’s agreement, on file',
    'Every test tagged on every vendor',
    'Every answer signed and dated',
  ],

  meta: {
    path: '/recipes/vendor-agent-check',
    title: 'Vendor agent check: compare AI vendors first · Obsession',
    description: 'With each vendor’s OK, declared test customers run your real support cases on every shortlisted AI agent and compare the answers side by side, signed.',
    answer: 'Vendor agent check is an Obsession recipe. Before a company signs, and with each vendor’s agreement, declared AI test customers run the same real support cases on every shortlisted vendor’s AI agent, set up on the company’s policies, on the real channels. They score every answer, time every handoff and sign a side by side report.',
    ogImage: '/og/vendor-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Vendor agent check', path: '/recipes/vendor-agent-check' },
    ],
  },

  hero: {
    headline: 'AI agents that test every AI vendor on your own cases before you sign.',
    sub: 'With each vendor’s OK, declared test customers run your hardest real cases on every shortlisted agent and time every handoff. You choose on signed evidence, not a demo.',
    screen: 'vendorcheck',
    capture: {
      kind: 'verify',
      source: 'recipe-vendor-agent-hero',
      button: 'Check my AI agent free',
      micro: form.agent.micro,
      roles,
      interest: 'vendor-agent',
    },
  },

  run: {
    tab: 'Example: 2 vendors, 2 weeks',
    recipe: 'vendor-agent',
    task: 'With both vendors’ OK, run our 20 hardest tickets on each shortlisted vendor’s agent, set up on our policies, and compare them side by side.',
    targets: 'Vendor B and Vendor C, with their OK',
    journey: ['Set up the same 20 cases', 'Ask as declared test customers', 'Time every handoff', 'Score against your policy'],
    schedule: '2 weeks, then monthly once you go live',
    report: 'A signed report for procurement',
    kit: ['Agent ID, declared as AI', 'An inbox and number per vendor', 'Your 20 real cases', 'Tagged as tests on both'],
    events: [
      { time: '19 Sep', text: 'Both vendors agree to the test. The same 20 cases go to each agent.' },
      { time: '22 Sep', text: 'Asks for a person. Vendor B connects one in 1 minute 50 seconds.' },
      { time: '22 Sep', text: 'Vendor C says “How can I help?” 3 times. No person in 6 minutes, where your policy says 3.' },
      { time: '29 Sep', text: 'A refund on day 35, an address change, an expired code: every case run on both.' },
      { time: '3 Oct', text: 'Vendor B passes 17 of 20 cases. Vendor C passes 12.' },
    ],
    finding: 'Vendor B passed 17 of 20 cases and Vendor C 12. Vendor C never reached a person.',
    fix: 'A side by side report for procurement, every case signed. The choice stays yours.',
    ledger: 'Example run. 40 runs over 2 weeks, every answer signed and dated.',
  },

  steps: [
    { title: 'Point it at your AI agent', line: 'The chat page, phone number, inbox or portal it answers on: yours, or a client’s with their OK. Add your policies and prices.' },
    { title: 'Approve the checks', line: 'Obsession writes them from your policies and the rules where you sell. Change any check, then approve.' },
    { title: 'Declared test customers use it', line: 'Each says it’s AI and who it works for, with its own inbox, number and account. Every day, and after every update.' },
    { title: 'You get a verdict and the fix', line: 'Each check passes or fails, with the proof and what happened next. The fix comes drafted, live after your OK.' },
  ],

  checks: [
    {
      group: 'Every case',
      items: [
        { title: 'Right answers', line: 'Every answer against your policies.' },
        { title: 'A person when asked', line: 'Whether one is offered, and how long it takes.' },
        { title: 'The same answer every time', line: 'The same request, asked again.' },
      ],
    },
    {
      group: 'Before you sign',
      items: [
        { title: 'The deck against the agent', line: 'What the sales deck claims, against what the agent does.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every vendor on the same cases, signed and side by side.',
    items: [
      { format: 'A verdict per case', line: 'Passed or failed for each vendor, with the policy that decided it.' },
      { format: 'The transcripts', line: 'Every answer from every vendor, timed.' },
      { format: 'A report for procurement', line: 'Side by side, every step signed.' },
    ],
  },

  forWho: [
    { audience: 'founders', line: 'Choose your support AI on your own cases, not a demo.' },
    { audience: 'agencies', line: 'Pick the voice or chat platform you sell on signed evidence.' },
  ],

  faq: {
    heading: 'Every test customer says it’s AI. Every vendor agrees first.',
    items: [
      { q: 'Does it say it’s AI?', a: 'Yes. Every test customer says it’s an AI test customer and who it works for, so your team can see it’s a test.' },
      { q: 'Will it try to trick your agent?', a: 'No. It asks what an ordinary customer asks. No jailbreaks, prompt tricks or flattery.' },
      { q: 'Is a passed check a guarantee?', a: 'No. It’s dated evidence of what happened on each check.' },
    ],
  },

  final: {
    heading: 'Test every AI vendor on your own cases before you sign.',
    sub: 'Your first check is free: 3 test customers on 1 vendor’s agent, with their OK, and your report within 4 days.',
    capture: {
      kind: 'verify',
      source: 'recipe-vendor-agent-final',
      button: 'Check my AI agent free',
      micro: 'Leave it blank to join the waitlist instead. We keep your email and your AI agent’s address to run the check and tell you about Obsession.',
      orWaitlist: true,
      roles,
      interest: 'vendor-agent',
    },
  },
}
