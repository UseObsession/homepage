import type { Recipe } from '../types'

/* Resolution check (/recipes/resolution-check). Check your AI agents. Screen: resolution (Vendor A, billed in Sep; 19 of
   100 billed resolutions not real, $18.81 of $99 at $0.99 each; case H-4471, "Done. $24 is on its way.", no refund in
   payments; the dispute pack under Vendor A terms 4.2).
   The 9 Nov story: the record of what a support bot promised, and what followed. Each resolution the reader's AI vendor
   bills is matched against the payments and helpdesk they connect, and Obsession makes the same asks on their live
   channels on a test budget they set; a competitor's bot is read for promises any customer can test. Tests are
   tagged, agreed with the vendor, so none is billed. "Challenge", not "recover": a credit is up to the contract. No
   real AI agent check has run yet, so the run is an example. No vendor or product names: Vendor A. */

export const recipe: Recipe = {
  id: 'resolution',
  slug: 'resolution-check',
  name: 'Resolution check',
  group: 'Check your AI agents',
  line: 'What a support bot promised, and what followed, matched to every resolution your AI vendor bills.',
  gets: 'Every billed resolution beside what the customer got, and a dispute pack for the ones that weren’t real.',
  kit: [
    'A customer profile with its own inbox and test account',
    'A test budget you set, for test orders on your store',
    'Your helpdesk and payments, connected by you',
    'Your vendor’s billing terms, rule by rule',
    'Every test tagged, agreed with your vendor',
    'Every case kept with its time and receipt',
  ],

  meta: {
    path: '/recipes/resolution-check',
    title: 'Resolution check: verify billed AI resolutions · Obsession',
    description:
      'Resolution check sets each resolution your AI support vendor bills beside what the customer got: the refund, the cancellation or the order change.',
    answer:
      'Resolution check is the record of what a support bot promised, and what followed. Each resolution your AI vendor bills is matched against your payments and helpdesk, and Obsession makes the same asks on your live channels, so you see the refunds promised and never made.',
    ogImage: '/og/resolution-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Resolution check', path: '/recipes/resolution-check' },
    ],
  },

  hero: {
    headline: 'What your support bot promised, and what followed.',
    sub: 'Resolution check is the record of what a support bot promised, and what followed. Each resolution your AI vendor bills is matched against your payments and helpdesk, and Obsession makes the same asks on your live channels, so you see the refunds promised and never made.',
    screen: 'resolution',
    capture: {
      kind: 'waitlist',
      source: 'recipe-resolution-hero',
      button: 'Request early access',
      interest: 'resolution',
    },
  },

  run: {
    tab: 'Example: September’s bill, before you pay',
    recipe: 'resolution',
    task: 'Before we pay Vendor A for September, match every resolution it billed against what the customer got, and make the same asks ourselves as a test.',
    targets: 'Vendor A’s September bill',
    journey: ['Take the billed resolutions', 'Read payments and the helpdesk', 'Make the same ask as a test', 'Build the challenge'],
    schedule: 'Monthly, before you pay the bill',
    report: 'A dispute pack, sent after your OK',
    kit: ['Customer · US', 'A $40 test budget', 'Payments, connected by you', 'Tagged as tests'],
    events: [
      { time: '1 Oct 09:00', text: '100 of the resolutions Vendor A billed in September, $0.99 each, taken from the helpdesk export you connected.' },
      { time: '1 Oct 09:06', text: 'H-4471, a broken mug. On 24 Sep at 10:03 the bot told the customer: “Done. $24 is on its way.” Vendor A billed it as resolved.' },
      { time: '1 Oct 09:07', text: 'Your payments, connected with consent: 7 days on, no refund has been issued.' },
      { time: '2 Oct 10:00', text: 'Obsession says it’s an AI and asks for the same refund on a test order, paid from a $40 test budget on your store. 24 hours on, no refund.' },
      { time: '3 Oct 10:10', text: '19 of the 100 weren’t real: refunds never made and customers who came back. $18.81 of the $99 billed.' },
    ],
    finding: '19 of the 100 resolutions Vendor A billed in September weren’t real: $18.81 of $99, where its own terms bill only what’s solved.',
    fix: 'A dispute pack for all 19 under Vendor A’s terms 4.2, every case with its receipt. Sent to Vendor A after your OK.',
    ledger: 'Example run. 100 billed resolutions read, every case dated.',
  },

  steps: [
    {
      title: 'Connect what shows the outcome',
      line: 'Your helpdesk export and payments tool, with your consent, and your vendor’s billing terms. Your vendor agrees the test tags first.',
    },
    {
      title: 'Every billed resolution, matched',
      line: 'Each one against what happened: the refund in your payments, the cancelled plan, the changed order, or the customer who came back.',
    },
    {
      title: 'The same asks, on your live channels',
      line: 'Obsession says it’s an AI and asks for refunds, cancellations and order changes, on a test budget you set, then records what follows.',
    },
    {
      title: 'Challenge with the record',
      line: 'Every resolution that wasn’t real goes into a dispute pack under your vendor’s own terms. You decide when it goes.',
    },
  ],

  checks: [
    {
      group: 'Every billed resolution',
      items: [
        { title: 'What happened', line: 'The refund, cancellation or order change, found in the tools you connect.' },
        { title: 'Silence counted as solved', line: 'A customer who stopped replying, billed as resolved.' },
        { title: 'Handoffs counted as solved', line: 'A case a person on your team finished, billed to the bot.' },
        { title: 'Customers who came back', line: 'The same customer, back about the same problem within 7 days.' },
      ],
    },
    {
      group: 'What the bot promised',
      items: [
        { title: '“Done” that wasn’t', line: 'A refund or cancellation the bot confirmed and nobody carried out.' },
        { title: 'The same ask, as a test', line: 'Made on your live channel, and what followed.' },
        { title: 'Against the contract', line: 'Each resolution beside your vendor’s own rule for what it may bill.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Your bill', line: 'Every test is tagged, agreed with your vendor first, so no test is billed.' },
        { title: 'Your vendor', line: 'A challenge goes when you send it. Whether your vendor credits you is up to your contract.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every resolution that wasn’t real comes back with the record to challenge it.',
    items: [
      { format: 'A line per resolution', line: 'Real or not, beside the payment, the ticket or the order.' },
      { format: 'The bot’s own words', line: 'What it told the customer, timed, beside what happened.' },
      { format: 'The test result', line: 'The same ask, made on your live channel, and what came of it.' },
      { format: 'The monthly count', line: 'How many billed resolutions weren’t real, by reason.' },
      { format: 'The dispute pack', line: 'Every case under your vendor’s own terms. Sent when you approve it.' },
      { format: 'Sheet, Slack or API', line: 'Every verdict as a row, a message or JSON, for finance.' },
    ],
  },

  settings: [
    { k: 'Vendor', v: 'Your AI support vendor, which agrees the test tags first' },
    { k: 'Bot', v: 'Yours, or one you run for a client' },
    { k: 'Sample', v: 'For example: 100 billed resolutions a month, or every one' },
    { k: 'Evidence', v: 'Your helpdesk export and payments tool, connected by you' },
    { k: 'Test asks', v: 'Refunds, cancellations, address changes and order edits' },
    { k: 'Test budget', v: 'A monthly cap you set' },
    { k: 'How often', v: 'Monthly, before you pay the bill' },
    { k: 'Where it lands', v: 'A sheet, Slack, a webhook or the API' },
  ],

  forWho: [
    { audience: 'founders', line: 'Pay your AI support vendor for what it solved, not for what it counted.' },
    { audience: 'agencies', line: 'What each client’s support bot is billed for, with every case and its receipt.' },
    { audience: 'developers', line: 'Every verdict in your own finance and helpdesk tools, after each bill.' },
  ],

  table: {
    heading: 'A resolution counts when the customer gets what the bot promised.',
    cols: ['Today', 'With Resolution check'],
    rows: [
      { label: 'What gets billed', values: ['Your vendor’s own count', 'Each resolution matched to what happened'] },
      { label: 'A promised refund', values: ['Assumed done', 'Found in your payments, or found missing'] },
      { label: 'A customer goes quiet', values: ['Counted as solved', 'Flagged, with the conversation'] },
      { label: 'A customer comes back', values: ['Billed again', 'Matched to the first resolution'] },
      { label: 'Disputing the bill', values: ['Your word against theirs', 'A pack under their own terms'] },
    ],
  },

  faq: {
    heading: 'It says it’s an AI, and no test is billed.',
    items: [
      {
        q: 'Our deflection numbers look great. Are the resolutions real?',
        a: 'Resolution check finds out. It matches each resolution your AI vendor bills against your payments and helpdesk, and every one that wasn’t real goes into a dispute pack.',
      },
      {
        q: 'What counts as not real?',
        a: 'Resolution check counts a refund the bot promised that was never made, a cancellation that never happened, a customer who went quiet or came back within 7 days, or a case a person finished. Your vendor’s own terms decide what it may bill.',
      },
      {
        q: 'Will our vendor bill us for the tests?',
        a: 'No. Every Resolution check test is tagged, and we agree the tags with your vendor before the first one runs.',
      },
      {
        q: 'Does Resolution check spend our money?',
        a: 'Only inside the test budget you set, on test orders on your own store, so Resolution check can ask for a refund on a real order.',
      },
      {
        q: 'Will our vendor credit what we challenge?',
        a: 'Resolution check gives you the record and a dispute pack under your vendor’s own terms, and you decide whether to send it. Whether your vendor credits it is up to your contract.',
      },
      {
        q: 'Can Resolution check read a competitor’s bot?',
        a: 'Yes, for promises any customer can test: a cancelled trial, a promised email or a callback. Resolution check keeps the bot’s words and records what followed.',
      },
    ],
  },

  final: {
    heading: 'Check what your AI vendor billed before you pay for it.',
    sub: 'Early access includes Resolution check on your next bill, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-resolution-final',
      button: 'Request early access',
      interest: 'resolution',
    },
  },
}
