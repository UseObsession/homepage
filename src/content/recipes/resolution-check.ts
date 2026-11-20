import type { Recipe } from '../types'

/* Resolution check (/recipes/resolution-check). Check your AI agents. Screen: resolution (Vendor A, billed in Sep; 19 of
   100 billed resolutions not real, $18.81 of $99 at $0.99 each; case H-4471, "Done. $24 is on its way.", no refund in
   payments; the dispute pack under Vendor A terms 4.2).
   The persona version (20 Nov 2026): each resolution the reader's AI vendor bills is matched against the payments and
   helpdesk they connect, and a persona you define places test orders on the reader's store with their own payment
   card, inside a budget they set, then makes the same asks on their live channels and records what follows; a
   competitor's bot is read for promises anyone can test. Tests are tagged, agreed with the vendor, so none is billed.
   "Challenge", not "recover": a credit is up to the contract. With the bot, the page says what the event log shows. The
   run is an example. No vendor or product names: Vendor A. */

export const recipe: Recipe = {
  id: 'resolution',
  slug: 'resolution-check',
  name: 'Resolution check',
  group: 'Check your AI agents',
  line: 'Every resolution your AI vendor bills, matched to what followed, with a persona making the same asks on your live channels.',
  gets: 'Every billed resolution beside what the customer got, and a dispute pack for the ones that weren’t real.',
  kit: [
    'A persona with its own inbox and an account on your store',
    'A test budget you set, on your own payment card',
    'Your helpdesk and payments, connected by you',
    'Your vendor’s billing terms, rule by rule',
    'Every test tagged, agreed with your vendor',
    'Every case dated, with its receipt',
  ],

  meta: {
    path: '/recipes/resolution-check',
    title: 'Resolution check: verify billed AI resolutions · Obsession',
    description:
      'Each resolution your AI support vendor bills, matched to the refund, cancellation or order change that followed, and a persona makes the same asks itself.',
    answer:
      'Resolution check matches every resolution your AI vendor bills against your payments and helpdesk, so you see the refunds promised and never made. A persona makes the same asks on your live channels and records what follows.',
    ogImage: '/og/resolution-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Resolution check', path: '/recipes/resolution-check' },
    ],
  },

  hero: {
    headline: 'What your support bot promised, and what followed.',
    sub: 'Resolution check matches every resolution your AI vendor bills against your payments and helpdesk, so you see the refunds promised and never made. A persona makes the same asks on your live channels and records what follows.',
    screen: 'resolution',
    capture: {
      kind: 'waitlist',
      source: 'recipe-resolution-hero',
      button: 'Request early access',
      interest: 'resolution',
    },
  },

  run: {
    tab: 'September’s bill, before you pay',
    recipe: 'resolution',
    task: 'Before we pay Vendor A for September, match every resolution it billed against what actually happened, and send a persona to make the same asks as a test.',
    targets: 'Vendor A’s September bill',
    journey: ['Take the billed resolutions', 'Read payments and the helpdesk', 'A persona makes the same ask', 'Build the challenge'],
    schedule: 'Monthly, before you pay the bill',
    report: 'A dispute pack, sent after your OK',
    kit: ['Persona · US buyer', 'A $40 test budget', 'Payments, connected by you', 'Tagged as tests'],
    events: [
      { time: '1 Oct 09:00', text: '100 of the resolutions Vendor A billed in September, $0.99 each, taken from the helpdesk export you connected.' },
      { time: '1 Oct 09:06', text: 'H-4471, a broken mug. On 24 Sep at 10:03 the bot told the customer: “Done. $24 is on its way.” Vendor A billed it as resolved.' },
      { time: '1 Oct 09:07', text: 'Your payments, connected with consent: 7 days on, no refund has been issued.' },
      {
        time: '2 Oct 10:00',
        text: 'The persona places a test order on your store from the $40 test budget, then asks the bot for the same refund. “Done.” 24 hours on, no refund.',
      },
      { time: '3 Oct 10:10', text: '19 of the 100 weren’t real: refunds never made and problems that came back. $18.81 of the $99 billed.' },
    ],
    finding: '19 of the 100 resolutions Vendor A billed in September weren’t real: $18.81 of $99, where its own terms bill only what’s solved.',
    fix: 'A dispute pack for all 19 under Vendor A’s terms 4.2, every case with its receipt. Sent to Vendor A after your OK.',
    ledger: '100 billed resolutions read, every case dated.',
  },

  steps: [
    {
      title: 'Connect what shows the outcome',
      line: 'Your helpdesk export and payments tool, with your consent, and your vendor’s billing terms. Your vendor agrees the test tags first.',
    },
    {
      title: 'Every billed resolution, matched',
      line: 'Each one against what happened: the refund in your payments, the cancelled plan, the changed order, or the same problem back again.',
    },
    {
      title: 'The same asks, from a persona',
      line: 'A persona places test orders inside a budget you set, asks for refunds, cancellations and order changes on your live channels, and waits to see what follows.',
    },
    {
      title: 'Challenge with the event log',
      line: 'Every resolution that wasn’t real goes into a dispute pack under your vendor’s own terms. You decide when it goes.',
    },
  ],

  checks: [
    {
      group: 'Every billed resolution',
      items: [
        { title: 'What happened', line: 'The refund, cancellation or order change, found in the tools you connect.' },
        { title: 'Silence counted as solved', line: 'A conversation that went quiet, billed as resolved.' },
        { title: 'Handoffs counted as solved', line: 'A case a person on your team finished, billed to the bot.' },
        { title: 'Back within 7 days', line: 'The same person, back about the same problem within a week.' },
      ],
    },
    {
      group: 'What the bot promised',
      items: [
        { title: '“Done” that wasn’t', line: 'A refund or cancellation the bot confirmed and nobody carried out.' },
        { title: 'The same ask, from a persona', line: 'Made on your live channel on a test order, and what followed.' },
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
    heading: 'Every resolution that wasn’t real comes back with its event log to challenge it.',
    items: [
      { format: 'A line per resolution', line: 'Real or not, beside the payment, the ticket or the order.' },
      { format: 'The bot’s own words', line: 'What it promised, word for word and timed, beside what happened.' },
      { format: 'The test result', line: 'The persona’s same ask on your live channel, and what came of it.' },
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
    { k: 'Test budget', v: 'A monthly cap you set, on your own payment card' },
    { k: 'How often', v: 'Monthly, before you pay the bill' },
    { k: 'Where it lands', v: 'A sheet, Slack, a webhook or the API' },
  ],

  forWho: [
    { audience: 'founders', line: 'Pay your AI support vendor for what it solved, not for what it counted.' },
    { audience: 'agencies', line: 'What each client’s support bot is billed for, with every case and its receipt.' },
    { audience: 'developers', line: 'Every verdict in your own finance and helpdesk tools after each bill, by API or webhook.' },
  ],

  table: {
    heading: 'A resolution counts when what the bot promised happens.',
    cols: ['Without it', 'With Resolution check'],
    rows: [
      { label: 'What gets billed', values: ['Your vendor’s own count', 'Each resolution matched to what happened'] },
      { label: 'A promised refund', values: ['Assumed done', 'Found in your payments, or found missing'] },
      { label: 'A conversation goes quiet', values: ['Counted as solved', 'Flagged, with the conversation'] },
      { label: 'The same problem comes back', values: ['Billed again', 'Matched to the first resolution'] },
      { label: 'Disputing the bill', values: ['Your word against theirs', 'A pack under their own terms'] },
    ],
  },

  faq: {
    heading: 'Every test is tagged, so none is billed.',
    items: [
      {
        q: 'Our deflection numbers look great. Are the resolutions real?',
        a: 'Resolution check finds out. It matches each resolution your AI vendor bills against your payments and helpdesk, and every one that wasn’t real goes into a dispute pack.',
      },
      {
        q: 'What counts as not real?',
        a: 'Resolution check counts a refund the bot promised that was never made, a cancellation that never happened, a conversation that went quiet, the same problem back within 7 days, or a case a person finished. Your vendor’s own terms decide what it may bill.',
      },
      {
        q: 'Will our vendor bill us for the tests?',
        a: 'No. Every Resolution check test is tagged, and we agree the tags with your vendor before the first one runs.',
      },
      {
        q: 'Does Resolution check spend our money?',
        a: 'Only inside the test budget you set, on your own payment card, so the persona can ask for a refund on a real order on your store.',
      },
      {
        q: 'Will our vendor credit what we challenge?',
        a: 'Resolution check gives you the event log and a dispute pack under your vendor’s own terms, and you decide whether to send it. Whether your vendor credits it is up to your contract.',
      },
      {
        q: 'Can Resolution check read a competitor’s bot?',
        a: 'Yes, for promises anyone can test: a cancelled trial, a promised email or a callback. A persona keeps the bot’s words and waits for what follows, 48 hours by default or as long as you set.',
      },
    ],
  },

  final: {
    heading: 'Check what your AI vendor billed before you pay for it.',
    sub: 'Tell us your vendor and when the next bill lands. We’ll set up the first check and the persona with you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-resolution-final',
      button: 'Request early access',
      interest: 'resolution',
    },
  },
}
