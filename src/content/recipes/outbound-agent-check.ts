import type { Recipe } from '../types'

/* Outbound agent check (/recipes/outbound-agent-check). Check your AI agents. Screen: outcheck (40 messages read, 3
   flagged: 30% off over the 15% limit, a text at 03:12 inside quiet hours, a customer you don't have; STOP honoured;
   "AI SDR paused by your rule"). The screen quotes the claimed customer by name; the copy never names it.
   The 9 Nov story: the record of what AI SDRs send prospects: every email, text and call, kept as it arrived. Prospect
   profiles join the reader's own AI SDR's lists (added by the reader) and reply as prospects do, and each message that
   breaks the reader's rules is flagged; a demo request at a competitor shows what its AI SDR sends. Each profile says
   it's an AI when it talks to a person. No real AI agent check has run yet, so the run is an example. */

export const recipe: Recipe = {
  id: 'outbound-agent',
  slug: 'outbound-agent-check',
  name: 'Outbound agent check',
  group: 'Check your AI agents',
  line: 'Every email, text and call an AI SDR sends a prospect, dated: yours, and your competitors’ after a demo request.',
  gets: 'Every message an AI SDR sends, kept as it arrived, with the ones that break your rules flagged.',
  kit: [
    'Prospect profiles with their own inboxes and numbers',
    'Added to your lists by you, or a demo request at a competitor',
    'Your approved claims, prices and discount limit',
    'Your quiet hours and contact limits',
    'Every message kept with the time it landed',
    'Flags in Slack, a sheet or the API',
  ],

  meta: {
    path: '/recipes/outbound-agent-check',
    title: 'Outbound agent check: every message your AI SDR sends buyers',
    description:
      'Outbound agent check keeps every email, text and call an AI SDR sends a prospect, yours or a competitor’s, and flags each one that breaks your rules.',
    answer:
      'Outbound agent check is the record of what AI SDRs send prospects: every email, text and call, kept as it arrived. Prospect profiles join your AI SDR’s lists and reply as prospects do, and every claim, discount and send time that breaks your rules is flagged.',
    ogImage: '/og/outbound-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Outbound agent check', path: '/recipes/outbound-agent-check' },
    ],
  },

  hero: {
    headline: 'What your AI SDR sends prospects, every message kept.',
    sub: 'Outbound agent check is the record of what AI SDRs send prospects: every email, text and call, kept as it arrived. Prospect profiles join your AI SDR’s lists and reply as prospects do, and every claim, discount and send time that breaks your rules is flagged.',
    screen: 'outcheck',
    capture: {
      kind: 'waitlist',
      source: 'recipe-outbound-agent-hero',
      button: 'Request early access',
      interest: 'outbound-agent',
    },
  },

  run: {
    tab: 'Example: your AI SDR, continuously',
    recipe: 'outbound-agent',
    task: 'Add 2 prospect profiles to our AI SDR’s lists. Keep every email, text and call it sends them, reply as prospects do, and flag what breaks our rules.',
    targets: 'Your AI SDR: email, text and calls',
    journey: ['Join its lists', 'Keep every message', 'Reply “not now”, then STOP', 'Read against your rules'],
    schedule: 'Every message, as it lands',
    report: 'Slack flags, and every message by API',
    kit: ['2 prospect profiles', '2 inboxes', '2 phone numbers', 'Replies as prospects do'],
    events: [
      { time: 'Mon 08:31', text: 'The first email to prospects 1 and 2: “Used by 2,000 teams.” It matches your approved list.' },
      { time: 'Tue 11:26', text: 'Email: “30% off if you sign today.” Your limit is 15%.' },
      { time: 'Wed 03:12', text: 'A text: “Free for a quick demo today?” Your quiet hours run from 21:00 to 08:00.' },
      { time: 'Wed 09:14', text: 'Email: it claims a customer you don’t have.' },
      { time: 'Wed 10:02', text: 'Prospect 2 texts STOP. “You’re unsubscribed.” Nothing follows.' },
    ],
    finding: '3 of 40 messages broke your rules: 30% off where your limit is 15%, a text at 03:12 and a customer you don’t have.',
    fix: 'Each flag in #sales-ops the minute it landed, and your AI SDR paused by the rule you set.',
    ledger: 'Example run. 40 messages kept, 37 within your rules, each dated.',
  },

  steps: [
    {
      title: 'Join the lists',
      line: 'You add prospect profiles to the lists your AI SDR sends to, or a client does. For a competitor, Obsession requests a demo as the prospect you pick.',
    },
    { title: 'Add your rules', line: 'Your approved claims, price list, discount limit, quiet hours and contact limits.' },
    {
      title: 'Every message kept',
      line: 'Each email, text and call, kept as it arrived. The profiles reply as prospects do, yes, not now, no or STOP, and say they’re an AI when they talk to a person.',
    },
    {
      title: 'Flags land where you work',
      line: 'Slack, a sheet or the API, with the quote, the time and the rule it broke. Your AI SDR pauses only if you set that rule.',
    },
  ],

  checks: [
    {
      group: 'What it says',
      items: [
        { title: 'Says it’s an AI', line: 'At the start of every call, and in every email and text, with who it acts for.' },
        { title: 'Only true claims', line: 'Every customer, result and figure it cites, beside your approved list.' },
        { title: 'The right price', line: 'Every price it quotes, beside your price list as it read that day.' },
        { title: 'Offers within its limit', line: 'Every discount beside the limit you set, so 30% never goes out where 15% is the cap.' },
      ],
    },
    {
      group: 'When it writes',
      items: [
        { title: 'Quiet hours', line: 'Every send time in the prospect’s own time zone, beside your quiet hours and the law.' },
        { title: 'How often', line: 'Every email, text and call counted against your contact limits.' },
        { title: 'Stops on no and STOP', line: 'And how fast: the next message after “not now”, “no” or STOP is timed.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Added by you', line: 'On the lists you choose, so the profiles get what your prospects get.' },
        { title: 'Your numbers', line: 'Each profile is marked as a test in your list, so it stays out of your reply rates.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every message comes back as it arrived, with broken rules flagged.',
    items: [
      { format: 'A line per message', line: 'Within your rules or flagged, with the rule that decided it.' },
      { format: 'The message itself', line: 'Every email, text and call recording, with the time it landed in the prospect’s time zone.' },
      { format: 'Stop times', line: 'How long the AI SDR took to stop after “not now”, “no” and STOP.' },
      { format: 'Competitors’ sequences', line: 'What their AI SDRs send after a demo request, message by message.' },
      { format: 'A pause, on your rule', line: 'Your AI SDR paused when a message breaks a rule you choose. Only if you switch it on.' },
      { format: 'Slack, sheet or API', line: 'Every message as a flag, a row or JSON.' },
    ],
  },

  settings: [
    { k: 'AI SDRs', v: 'Yours, a client’s, or a competitor’s after a demo request' },
    { k: 'Channels', v: 'Email, text and calls' },
    { k: 'Prospect profiles', v: '2 or more, added by you' },
    { k: 'Claims', v: 'Your approved customers, results and figures' },
    { k: 'Prices and offers', v: 'Your price list, and a discount limit such as 15%' },
    { k: 'Quiet hours', v: 'For example 21:00 to 08:00, in the prospect’s own time zone' },
    { k: 'Pause rule', v: 'Pause your AI SDR on a flag, only if you switch it on' },
    { k: 'Where it lands', v: 'Slack, a sheet, a webhook or the API' },
  ],

  forWho: [
    { audience: 'sales', line: 'Know every claim and discount your AI SDR makes before a prospect quotes it back to you.' },
    { audience: 'agencies', line: 'A record of the outbound you run for each client, every message kept.' },
    { audience: 'founders', line: 'Let an AI SDR write for you without reading every email it sends.' },
    { audience: 'developers', line: 'Read every message from your code after each prompt or sequence change.' },
  ],

  table: {
    heading: 'Your AI SDR sends more than anyone can read. Every message is kept.',
    cols: ['By hand', 'With Outbound agent check'],
    rows: [
      { label: 'Claims', values: ['Spotted when a prospect objects', 'Read against your approved list, every message'] },
      { label: 'Discounts', values: ['Found when a deal arrives at 30% off', 'Flagged the moment it goes over your limit'] },
      { label: 'Send times', values: ['Nobody sees the text sent at 03:12', 'Every send time read against your quiet hours'] },
      { label: 'STOP', values: ['You trust the unsubscribe list', 'STOP sent, and the next message timed'] },
      { label: 'Competitors', values: ['A colleague’s forwarded email', 'Every message after a demo request, dated'] },
    ],
  },

  faq: {
    heading: 'It says it’s an AI. You set the rest.',
    items: [
      {
        q: 'Are AI SDRs worth it, or do they just send more spam?',
        a: 'Outbound agent check shows you what yours sends: prospect profiles join its lists, every message is kept as it arrived, and each claim, discount and send time that breaks your rules is flagged.',
      },
      {
        q: 'How do prospect profiles get on our lists?',
        a: 'You add Outbound agent check’s profiles, or your client does. Each has its own inbox and number.',
      },
      {
        q: 'Can Outbound agent check read a competitor’s AI SDR?',
        a: 'Yes. Outbound agent check requests a demo or signs up as the prospect you pick, and keeps everything the competitor’s AI SDR sends. Who asked is never shown.',
      },
      {
        q: 'Does Outbound agent check say it’s an AI?',
        a: 'Yes, whenever it talks to a person. On your own lists, each Outbound agent check profile is named as an AI test prospect.',
      },
      {
        q: 'Will prospect profiles skew our numbers?',
        a: 'No. Each Outbound agent check profile is marked as a test in your list, so it stays out of your reply rates and pipeline.',
      },
      {
        q: 'Can Outbound agent check pause our AI SDR?',
        a: 'Only if you set that rule. Then a flagged message pauses it until you’ve looked.',
      },
    ],
  },

  final: {
    heading: 'Read what your AI SDR sends, the way your prospects read it.',
    sub: 'Early access includes Outbound agent check on your AI SDR and up to 5 companies added for you, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-outbound-agent-final',
      button: 'Request early access',
      interest: 'outbound-agent',
    },
  },
}
