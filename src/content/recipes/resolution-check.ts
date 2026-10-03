import { capture as form } from '../capture'
import type { Recipe } from '../types'

/* Resolution check (/recipes/resolution-check). Check your AI agents. Screen: resolution (Your company; Vendor A,
   billed in Sep; 19 of 100 billed resolutions not real, $18.81 of $99, at $0.99 each; the cases: refund H-4471, billed
   resolved $0.99, no refund in payments; cancel plan H-4480, cancelled in payments; order edit H-4502, came back in the
   helpdesk; order status H-4519, delivered in the store. Case H-4471 open, "Refund, broken mug": Vendor A billed it
   resolved, $0.99, on 24 Sep; payments, with consent, show no refund issued by 1 Oct; the bot's chat on 24 Sep at
   10:03, "Done. $24 is on its way."; the rule "Billed only if solved", Vendor A terms 4.2; Test customer 2, AI, for
   Your company, the same ask on a $40 test budget: no refund; signed. "With your OK and Vendor A's · tests never
   billed". Challenge with evidence, then "Challenge sent 10:12" and "Dispute pack sent, signed").
   Base: _research/verify/VERIFY.md 6.6 (the checks, the outcome, the design rule) and 11 (the red lines). No real AI
   agent check has run yet, so the run is an example and says so, and no Verify claim sits in proof.
   Red lines held: the reader's own bot, or a client's with their written OK, and the vendor's agreement to the test
   tags before the first test, so no test is billed; inside data only through the helpdesk export and payments tool
   the reader connects, with consent; every test customer says it's AI and who it works for, and asks what an ordinary
   customer asks, never a jailbreak or a prompt trick; it spends only on the reader's own store, inside a test budget
   the reader sets; the dispute pack goes to the vendor only after the reader's OK. "Challenge", never "recover":
   whether a vendor credits a disputed resolution is up to its contract. No vendor or product names: Vendor A.
   Up-to-50 rule: the 1 modelled figure (up to $22,572 a year to challenge) carries its model in the same line:
   10,000 billed resolutions a month x $0.99 = $9,900, x 19 in 100 not real (the example's own rate, $18.81 of $99)
   = $1,881 a month, x 12 = $22,572. /verify states the same model. */

const roles = form.agent.roles

export const recipe: Recipe = {
  id: 'resolution',
  slug: 'resolution-check',
  name: 'Resolution check',
  group: 'Check your AI agents',
  line: 'Checks every resolution your AI support vendor bills you for against what the customer actually got.',
  gets: 'Every billed resolution checked against the real outcome, and a signed dispute pack for the ones that weren’t real.',
  kit: [
    'A declared AI test customer, working for your company',
    'Its own inbox, test account and test budget',
    'Your helpdesk and payments, connected by you',
    'Your vendor’s billing terms, rule by rule',
    'Every test tagged, agreed with your vendor',
    'Every case and challenge signed and dated',
  ],

  meta: {
    path: '/recipes/resolution-check',
    title: 'Resolution check: verify billed AI resolutions · Obsession',
    description:
      'Check each resolution your AI support vendor bills against what the customer really got: the refund, the cancellation, the order change. Then challenge it.',
    answer:
      'Resolution check is an Obsession recipe. With a company’s OK and its vendor’s agreement to the test tags, it checks each resolution an AI support vendor bills against what actually happened, in the helpdesk and payment tools the company connects, while declared AI test customers make the same asks on the live channels. Every resolution that wasn’t real goes into a signed dispute pack.',
    ogImage: '/og/resolution-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Resolution check', path: '/recipes/resolution-check' },
    ],
  },

  hero: {
    headline: 'AI agents that check every resolution your AI vendor bills.',
    sub: 'Each billed resolution is checked against your payments and helpdesk, and declared test customers make the same asks on your live channels. You see the refunds the bot promised and never made, with the proof to challenge the bill.',
    screen: 'resolution',
    capture: {
      kind: 'verify',
      source: 'recipe-resolution-hero',
      button: 'Check my resolutions free',
      placeholder: 'Your bot’s chat page',
      micro: form.agent.micro,
      roles,
      interest: 'resolution',
    },
  },

  run: {
    tab: 'Example: September’s bill, before you pay',
    recipe: 'resolution',
    task: 'Before we pay Vendor A for September, check every resolution it billed against what the customer really got, and make the same asks ourselves as a test.',
    targets: 'Vendor A’s September bill, with its OK',
    journey: ['Take the billed resolutions', 'Check payments and the helpdesk', 'Make the same ask as a test', 'Build the challenge'],
    schedule: 'Monthly, before you pay the bill',
    report: 'A signed dispute pack, sent after your OK',
    kit: ['Agent ID, declared as AI', 'A $40 test budget', 'Payments, connected by you', 'Tagged as tests, never billed'],
    events: [
      { time: '1 Oct 09:00', text: '100 of the resolutions Vendor A billed in September, $0.99 each, taken from the helpdesk export you connected.' },
      { time: '1 Oct 09:06', text: 'H-4471, a broken mug. On 24 Sep at 10:03 the bot told the customer: “Done. $24 is on its way.” Vendor A billed it as resolved.' },
      { time: '1 Oct 09:07', text: 'Your payments, connected with consent: 7 days on, no refund has been issued.' },
      { time: '2 Oct 10:00', text: 'Test customer 2 says it’s AI and asks for the same refund on a test order, paid from a $40 test budget on your store. 24 hours on, no refund.' },
      { time: '3 Oct 10:10', text: '19 of the 100 weren’t real: refunds never made and customers who came back. $18.81 of the $99 billed.' },
    ],
    finding: '19 of the 100 resolutions Vendor A billed in September weren’t real: $18.81 of $99, where its own terms bill only what’s solved.',
    fix: 'A dispute pack for all 19 under Vendor A’s terms 4.2, every case signed. Sent to Vendor A after your OK.',
    ledger: 'Example run. 100 billed resolutions checked, every case signed and dated.',
  },

  steps: [
    {
      title: 'Connect what proves the outcome',
      line: 'Your helpdesk export and your payments tool, with your consent, and your vendor’s billing terms. Your vendor agrees the test tags first.',
    },
    {
      title: 'Every billed resolution is checked',
      line: 'Each one against what really happened: the refund in your payments, the cancelled plan, the changed order, or the customer who came back.',
    },
    {
      title: 'Test customers make the same asks',
      line: 'Declared as AI, they ask for refunds, cancellations and order changes on your live channels, on a test budget you set, and see what really happens.',
    },
    {
      title: 'You challenge with evidence',
      line: 'Every resolution that wasn’t real goes into a signed dispute pack under your vendor’s own terms. It goes to your vendor only after your OK.',
    },
  ],

  checks: [
    {
      group: 'Every billed resolution',
      items: [
        { title: 'The real outcome', line: 'The refund, cancellation or order change, found in the tools you connect.' },
        { title: 'Silence counted as solved', line: 'A customer who simply stopped replying, billed as resolved.' },
        { title: 'Handoffs counted as solved', line: 'A case a person on your team finished, billed to the bot.' },
        { title: 'Customers who came back', line: 'The same customer, back about the same problem within 7 days.' },
      ],
    },
    {
      group: 'What the bot promised',
      items: [
        { title: '“Done” that wasn’t', line: 'A refund or cancellation the bot confirmed and nobody carried out.' },
        { title: 'The same ask, as a test', line: 'A declared test customer makes it on your live channel and sees what really happens.' },
        { title: 'Against the contract', line: 'Each resolution against your vendor’s own rule for what it may bill.' },
        { title: 'Month by month', line: 'How many billed resolutions weren’t real, and whether that’s rising or falling.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Inside your systems', line: 'Only through the helpdesk and payment tools you connect, with your consent.' },
        { title: 'Your bill', line: 'Every test is tagged, and agreed with your vendor first, so no test is billed.' },
        { title: 'Your money', line: 'Test orders only on your own store, inside a budget you set.' },
        { title: 'Your vendor', line: 'No challenge goes to your vendor without your OK. Whether it credits you is up to your contract.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every resolution that wasn’t real comes back with the proof to challenge it.',
    items: [
      { format: 'A verdict per resolution', line: 'Real or not, with the evidence beside it: the payment, the ticket or the order.' },
      { format: 'The bot’s own words', line: 'What it told the customer, timed, beside what really happened.' },
      { format: 'The test customer’s result', line: 'The same ask, made on your live channel, and what came of it.' },
      { format: 'What it’s worth', line: 'The amount billed each month for resolutions that weren’t real.' },
      { format: 'The dispute pack', line: 'Every case under your vendor’s own terms, signed. Sent only after your OK.' },
      {
        format: 'A record to share',
        line: 'A page and a PDF for finance, your vendor or your client, or an email, Slack, a sheet or a webhook.',
      },
    ],
  },

  settings: [
    { k: 'Vendor', v: 'Your AI support vendor, which agrees the test tags first' },
    { k: 'Bot', v: 'Yours, or a client’s with their written OK' },
    { k: 'Sample', v: 'For example: 100 billed resolutions a month, or every one' },
    { k: 'Evidence', v: 'Your helpdesk export and payments tool, connected by you' },
    { k: 'Rules', v: 'Your vendor’s billing terms, and your own refund and cancellation policy' },
    { k: 'Test asks', v: 'Refunds, cancellations, address changes and order edits' },
    { k: 'Test budget', v: 'A monthly cap you set, on your own store' },
    { k: 'How often', v: 'Monthly, before you pay the bill' },
  ],

  forWho: [
    { audience: 'founders', line: 'Pay your AI support vendor for what it solved, not for what it counted.' },
    {
      audience: 'agencies',
      line: 'Check what each client’s support bot is billed for, with their OK, and hand them the signed record.',
    },
    {
      audience: 'developers',
      line: 'Pull every verdict into your own finance and helpdesk tools, and run the check from your code after each bill.',
    },
  ],

  table: {
    heading: 'A resolution counts when the customer gets what the bot promised.',
    line: 'Up to $22,572 a year to challenge: 10,000 resolutions billed a month at $0.99 is $9,900, and if 19 in 100 aren’t real, as in this example, $1,881 of it each month.',
    cols: ['Today', 'With a resolution check'],
    rows: [
      { label: 'What gets billed', values: ['Your vendor’s own count', 'Each resolution checked against the real outcome'] },
      { label: 'A promised refund', values: ['Assumed done', 'Found in your payments, or found missing'] },
      { label: 'A customer goes quiet', values: ['Counted as solved', 'Flagged, with the conversation'] },
      { label: 'A customer comes back', values: ['Billed again', 'Matched to the first resolution'] },
      { label: 'Disputing the bill', values: ['Your word against theirs', 'A signed pack under their own terms'] },
      { label: 'Testing it yourself', values: ['Tests billed as resolutions', 'Tagged, agreed with your vendor, never billed'] },
    ],
  },

  faq: {
    heading: 'Every test customer says it’s AI. No test is billed, and nothing goes out without your OK.',
    items: [
      {
        q: 'What counts as not real?',
        a: 'A refund the bot promised that was never made, a cancellation that never happened, a customer who went quiet or came back within 7 days, or a case a person finished. Your vendor’s own terms decide what it may bill.',
      },
      {
        q: 'Do you need our logins?',
        a: 'No. Your helpdesk export and payments tool only if you connect them, with your consent. Test customers use your live channels the way your customers do.',
      },
      {
        q: 'Will our vendor bill us for the tests?',
        a: 'Every test is tagged, and we agree the tags with your vendor before the first one runs, so no test is billed as a resolution.',
      },
      {
        q: 'Does it say it’s AI?',
        a: 'Yes. Every test customer says it’s an AI test customer working for your company, so your team can see it’s a test.',
      },
      {
        q: 'Will it try to trick our bot?',
        a: 'No. It makes the asks an ordinary customer makes. No jailbreaks or prompt tricks.',
      },
      {
        q: 'Does it spend our money?',
        a: 'Only on your own store, inside a test budget you set, so a test customer can ask for a refund on a real order.',
      },
      {
        q: 'Will our vendor credit what we challenge?',
        a: 'That’s up to your contract. You get the signed evidence and a dispute pack under your vendor’s own terms, and you decide whether to send it.',
      },
      {
        q: 'Can it check a client’s bot?',
        a: 'Yes, with the client’s written OK and their vendor’s agreement to the test tags. The record carries your agency’s name.',
      },
      {
        q: 'What’s it worth?',
        a: 'Up to $22,572 a year to challenge on 10,000 billed resolutions a month at $0.99, if 19 in 100 aren’t real, as in this example. It moves with your volume, your price and your real rate.',
      },
      {
        q: 'Is a passed check a guarantee?',
        a: 'No. It’s dated evidence of what happened on each case.',
      },
      {
        q: 'What’s in the free check?',
        a: '3 test customers make the asks your bot most often marks as resolved, on 1 channel, tagged so none is billed, and see what really happens. Your report lands within 4 days.',
      },
    ],
  },

  final: {
    heading: 'Check what your AI vendor billed before you pay for it.',
    sub: 'Your first check is free: 3 test customers use your support bot on 1 channel, tagged so none is billed, and your report lands within 4 days. Your bot, or a client’s with their OK.',
    capture: {
      kind: 'verify',
      source: 'recipe-resolution-final',
      button: 'Check my resolutions free',
      placeholder: 'Your bot’s chat page',
      micro: 'Leave it blank to join the waitlist instead. We keep your email and your bot’s address to run the check and tell you about Obsession.',
      orWaitlist: true,
      roles,
      interest: 'resolution',
    },
  },
}
