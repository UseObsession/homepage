import { capture as form } from '../capture'
import type { Recipe } from '../types'

/* WRITER: fill. Base: _research/verify/VERIFY.md 6.6. Screen: resolution (Your company; Vendor A, billed in Sep; 19 of 100 billed resolutions not real, $18.81 of $99; cases H-4471 refund billed $0.99 with no refund in payments, H-4480 cancel plan cancelled, H-4502 order edit came back, H-4519 order status delivered; the bot said “Done. $24 is on its way.” on 24 Sep 10:03, and no refund was issued by 1 Oct; rule: billed only if solved, Vendor A terms 4.2; Test customer 2, same ask, $40 test budget: no refund; with the reader’s and Vendor A’s OK, tests never billed; dispute pack sent, signed, at 10:12). Outcome: up to $22,572 a year to challenge (10,000 billed a month x $0.99 x 19 in 100 x 12), the same model /verify states. “Challenge”, never “recover”. Agree test tags with the vendor first.
   This file is a complete-shaped stub so the build passes: the id, slug, name, group, screen and meta path are
   final; every word below is a first pass to rewrite to the standard of support-bot-check.ts, ai-checkout-test.ts
   and mystery-shopper.ts (docs/REBUILD.md, VERIFY.md section 6 and 11). Match the screen's run, numbers and names
   exactly. No real AI agent check has run yet: the run is an example and says so. */

const roles = form.agent.roles

export const recipe: Recipe = {
  id: 'resolution',
  slug: 'resolution-check',
  name: 'Resolution check',
  group: 'Check your AI agents',
  line: 'Checks every resolution your AI support vendor bills against what the customer actually got.',
  gets: 'Every billed resolution checked against the real outcome, and a signed dispute pack for the ones that weren’t.',
  kit: [
    'Declared AI test customers, named for your company',
    'Their own inboxes and test accounts',
    'Your payments and helpdesk, connected by you',
    'Your vendor’s billing terms',
    'Every test tagged, agreed with your vendor',
    'Every case signed and dated',
  ],

  meta: {
    path: '/recipes/resolution-check',
    title: 'Resolution check: verify billed AI resolutions · Obsession',
    description: 'Test customers raise real shaped cases, with your vendor’s OK, and check each resolution your AI support vendor bills against what the customer got.',
    answer: 'Resolution check is an Obsession recipe. With the company’s OK and its vendor’s agreement, declared AI test customers raise real shaped support cases on the live channel, and Obsession checks each resolution the vendor bills against what actually happened, using the payment and helpdesk tools the company connects. It signs a dispute pack for every resolution that wasn’t real.',
    ogImage: '/og/resolution-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Resolution check', path: '/recipes/resolution-check' },
    ],
  },

  hero: {
    headline: 'AI agents that check every resolution your AI vendor bills you for.',
    sub: 'Test customers raise refunds, cancellations and order changes on your live channels, with your vendor’s OK, then check what really happened. You see which billed resolutions weren’t real, with the proof.',
    screen: 'resolution',
    capture: {
      kind: 'verify',
      source: 'recipe-resolution-hero',
      button: 'Check my AI agent free',
      micro: form.agent.micro,
      roles,
      interest: 'resolution',
    },
  },

  run: {
    tab: 'Example: last month’s billed resolutions',
    recipe: 'resolution',
    task: 'Check last month’s resolutions from our AI support vendor against what our customers actually got, and raise test cases on the live channel to compare.',
    targets: 'Vendor A’s billed resolutions, with their OK',
    journey: ['Sample billed resolutions', 'Check payments and the helpdesk', 'Raise the same ask as a test', 'Build the dispute pack'],
    schedule: 'Monthly, before you pay the bill',
    report: 'A signed dispute pack',
    kit: ['Agent ID, declared as AI', 'A test account', 'Payments, connected by you', 'Tagged as tests, never billed'],
    events: [
      { time: '24 Sep, 10:03', text: 'The bot tells a customer: “Done. $24 is on its way.” Vendor A bills it as resolved, $0.99.' },
      { time: '1 Oct', text: 'Your payments show no refund was issued.' },
      { time: '2 Oct', text: 'Test customer 2 asks the same, on a $40 test budget. No refund arrives.' },
      { time: '3 Oct', text: '19 of 100 billed resolutions weren’t real: $18.81 of $99.' },
      { time: '3 Oct, 10:12', text: 'The dispute pack, signed, sent to Vendor A after your OK.' },
    ],
    finding: '19 of 100 resolutions Vendor A billed in September weren’t real: $18.81 of $99.',
    fix: 'A signed dispute pack under Vendor A’s terms, sent after your OK.',
    ledger: 'Example run. 100 billed resolutions checked, every case signed and dated.',
  },

  steps: [
    { title: 'Point it at your AI agent', line: 'The chat page, phone number, inbox or portal it answers on: yours, or a client’s with their OK. Add your policies and prices.' },
    { title: 'Approve the checks', line: 'Obsession writes them from your policies and the rules where you sell. Change any check, then approve.' },
    { title: 'Declared test customers use it', line: 'Each says it’s AI and who it works for, with its own inbox, number and account. Every day, and after every update.' },
    { title: 'You get a verdict and the fix', line: 'Each check passes or fails, with the proof and what happened next. The fix comes drafted, live after your OK.' },
  ],

  checks: [
    {
      group: 'Every billed resolution',
      items: [
        { title: 'The real outcome', line: 'The refund, cancellation or change, in the tools you connect.' },
        { title: 'Silence counted as solved', line: 'A customer who went quiet, billed as resolved.' },
        { title: 'Handoffs counted as solved', line: 'A case a person finished, billed to the bot.' },
        { title: 'Customers who came back', line: 'Within 7 days of a resolution.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every billed resolution comes back checked, with the proof to challenge it.',
    items: [
      { format: 'A verdict per case', line: 'Real or not, with the evidence beside it.' },
      { format: 'The dispute pack', line: 'Signed, under your vendor’s own terms.' },
      { format: 'What it’s worth', line: 'The billed amount you can challenge, each month.' },
    ],
  },

  forWho: [
    { audience: 'founders', line: 'Pay your AI support vendor for what it solved, not what it counted.' },
    { audience: 'agencies', line: 'Check what each client’s bot bills them, with their OK.' },
  ],

  faq: {
    heading: 'Every test is tagged and agreed with your vendor first.',
    items: [
      { q: 'Does it say it’s AI?', a: 'Yes. Every test customer says it’s an AI test customer and who it works for, so your team can see it’s a test.' },
      { q: 'Will it try to trick your agent?', a: 'No. It asks what an ordinary customer asks. No jailbreaks, prompt tricks or flattery.' },
      { q: 'Is a passed check a guarantee?', a: 'No. It’s dated evidence of what happened on each check.' },
    ],
  },

  final: {
    heading: 'Check what your AI vendor bills before you pay it.',
    sub: 'Your first check is free: 3 test customers on 1 channel, with your vendor’s OK, and your report within 4 days.',
    capture: {
      kind: 'verify',
      source: 'recipe-resolution-final',
      button: 'Check my AI agent free',
      micro: 'Leave it blank to join the waitlist instead. We keep your email and your AI agent’s address to run the check and tell you about Obsession.',
      orWaitlist: true,
      roles,
      interest: 'resolution',
    },
  },
}
