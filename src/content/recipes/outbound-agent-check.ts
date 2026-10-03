import { capture as form } from '../capture'
import type { Recipe } from '../types'

/* Outbound agent check (/recipes/outbound-agent-check). Check your AI agents. Screen: outcheck (Your company; "Email ·
   Text · Calls"; Flagged 3, Passed 37, so 40 messages read; "Your AI SDR: Paused by your rule"; to "Test prospects 1
   and 2 · AI · for Your company", "Ordinary replies only · no tricks"; the messages, oldest first: Mon 08:31 email
   "Used by 2,000 teams." matches the approved list; Mon 10:15 call stops on "not now" ("No problem, bye for now.");
   Mon 12:10 text, 1 text a week kept; Mon 16:30 email "Plans start at $49 a seat." matches the price list of 1 Oct;
   Tue 09:02 email names who it acts for; Tue 11:26 email "30% off if you sign today." over the 15% limit (flagged);
   Tue 15:40 call says it's AI at 00:04; Wed 03:12 text "Free for a quick demo today?" inside quiet hours 21:00 to
   08:00 (flagged); Wed 09:14 email claims a customer you don't have (flagged); Wed 10:02 STOP honoured within 1
   message; "Added with your OK · only receives"; the toast "3 flagged · AI SDR paused by your rule").
   The screen quotes the claimed customer by name; the copy never names it.
   Base: _research/verify/VERIFY.md 6.3 (who buys, how it works, the checks, the outcome) and 11 (the red lines). No
   real AI agent check has run yet, so the run is an example and says so, and no Verify claim sits in proof.
   Red lines held: test prospects are added to the lists by the sender (the reader, or a client with their written
   OK); each is named as an AI test prospect working for the reader; they only receive and reply as ordinary prospects
   do (yes, not now, no, STOP), never write first and never call anyone; no jailbreaks or bait; each is marked as a test
   in the reader's list; the AI SDR pauses only by a rule the reader switched on, and nothing else changes without the
   reader's OK. No vendor or product names: "your AI SDR".
   Up-to-50 rule: the 1 modelled figure (up to 1,040 hours a year) carries its model in the same line: 1 person
   reading what the AI SDR sends 20 hours a week x 52 weeks = 1,040, turned into the flagged messages only. */

const roles = form.agent.roles

export const recipe: Recipe = {
  id: 'outbound-agent',
  slug: 'outbound-agent-check',
  name: 'Outbound agent check',
  group: 'Check your AI agents',
  line: 'Puts declared test prospects on your AI SDR’s lists, with your OK, and checks every email, text and call it sends them.',
  gets: 'Every message your AI SDR sends your test prospects, checked against your rules, with the ones that broke them flagged.',
  kit: [
    'Declared AI test prospects, added by you',
    'Their own inboxes and phone numbers',
    'Your approved claims, prices and discount limit',
    'Your quiet hours and contact limits',
    'Only receives, never calls anyone',
    'Every message signed and dated',
  ],

  meta: {
    path: '/recipes/outbound-agent-check',
    title: 'Outbound agent check: see what your AI SDR sends · Obsession',
    description:
      'Declared test prospects join your AI SDR’s lists with your OK, read every email, text and call sent to them, and check each against your claims and limits.',
    answer:
      'Outbound agent check is an Obsession recipe. With the sender’s OK, declared AI test prospects with their own inboxes and phone numbers join an AI SDR’s lists. They receive what real prospects receive, reply as prospects do, and check every claim, price, discount, send time and opt out against the company’s own rules, signing every message.',
    ogImage: '/og/outbound-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Outbound agent check', path: '/recipes/outbound-agent-check' },
    ],
  },

  hero: {
    headline: 'AI agents that check what your AI SDR sends prospects.',
    sub: 'Declared test prospects join its lists with your OK, receive what your prospects receive and reply as they do. You see every claim, discount and send time that broke your rules, with the message as proof.',
    screen: 'outcheck',
    capture: {
      kind: 'verify',
      source: 'recipe-outbound-agent-hero',
      button: 'Check my AI SDR free',
      placeholder: 'Your company’s website',
      label: 'Your company’s website',
      micro: form.agent.micro,
      roles,
      interest: 'outbound-agent',
    },
  },

  run: {
    tab: 'Example: your AI SDR, continuously',
    recipe: 'outbound-agent',
    task: 'Add 2 test prospects to our AI SDR’s lists. Read every email, text and call it sends them, reply as prospects do, and check each message against our rules.',
    targets: 'Your AI SDR: email, text and calls',
    journey: ['Join its lists, with your OK', 'Read every message', 'Reply “not now”, then STOP', 'Check against your rules'],
    schedule: 'Every message, as it lands',
    report: 'A Slack flag, and a weekly signed record',
    kit: ['2 test prospects, declared as AI', '2 inboxes', '2 phone numbers', 'Only receives, never calls out'],
    events: [
      { time: 'Mon 08:31', text: 'The first email to test prospects 1 and 2: “Used by 2,000 teams.” It matches your approved list.' },
      { time: 'Tue 11:26', text: 'Email: “30% off if you sign today.” Your limit is 15%.' },
      { time: 'Wed 03:12', text: 'A text: “Free for a quick demo today?” Your quiet hours run from 21:00 to 08:00.' },
      { time: 'Wed 09:14', text: 'Email: it claims a customer you don’t have.' },
      { time: 'Wed 10:02', text: 'Test prospect 2 texts STOP. “You’re unsubscribed.” Nothing follows.' },
    ],
    finding: '3 of 40 messages broke your rules: 30% off where your limit is 15%, a text at 03:12 and a customer you don’t have.',
    fix: 'Your AI SDR paused by the rule you set, and 3 changes drafted for its settings: the discount cap, the send window and the customer list. Live after your OK.',
    ledger: 'Example run. 40 messages read, 37 passed, each signed and dated.',
  },

  steps: [
    {
      title: 'Add test prospects to its lists',
      line: 'Your AI SDR, or a client’s with their OK. You add declared test prospects to the lists it sends to, and give Obsession your approved claims, prices and limits.',
    },
    {
      title: 'Approve the checks',
      line: 'Obsession writes them from your rules and the law where you sell: it says it’s AI and who it’s for, claims only real customers, keeps to your discount limit and quiet hours, and stops on STOP. Change any check, then approve.',
    },
    {
      title: 'Test prospects receive, and reply',
      line: 'Each reads every email, text and call as a prospect would, and replies as prospects do: yes, not now, no or STOP. It never writes first and never calls anyone.',
    },
    {
      title: 'You get a flag and the fix',
      line: 'Each message passes or is flagged, with the quote, the time and the rule it broke. The change comes drafted for your OK, and your AI SDR pauses only if you’ve set that rule.',
    },
  ],

  checks: [
    {
      group: 'What it says',
      items: [
        { title: 'Says it’s AI', line: 'At the start of every call, and in every email and text, with who it acts for.' },
        { title: 'Only true claims', line: 'Every customer, result and figure it cites, against your approved list.' },
        { title: 'The right price', line: 'Every price it quotes, against your price list as it read that day.' },
        { title: 'Offers within its limit', line: 'Every discount against the limit you set, so 30% never goes out where 15% is the cap.' },
      ],
    },
    {
      group: 'When it writes',
      items: [
        { title: 'Quiet hours', line: 'Every send time in the prospect’s own time zone, against your quiet hours and the law.' },
        { title: 'How often', line: 'Every email, text and call counted against your contact limits.' },
        { title: 'Stops on no and STOP', line: 'And how fast: the next message after “not now”, “no” or STOP is timed.' },
        { title: 'No mixed messages', line: 'Sequences that contradict each other, or send the same thing twice.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Only receives', line: 'Test prospects never write first and never call anyone. Your AI SDR does all the sending.' },
        { title: 'Added by you', line: 'Only your AI SDR, or a client’s with their written OK, on lists you added the test prospects to.' },
        { title: 'No tricks', line: 'Ordinary replies only. No jailbreaks, prompt tricks or bait to draw out a discount.' },
        { title: 'Your numbers', line: 'Every test prospect is marked as a test in your list, so it stays out of your reply rates.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every message comes back checked, and every broken rule flagged.',
    items: [
      { format: 'A verdict per message', line: 'Passed or flagged, with the policy or the law that decided it.' },
      { format: 'The message as received', line: 'Every email, text and call recording, with the time it landed in the prospect’s own time zone.' },
      { format: 'Stop times', line: 'How long your AI SDR took to stop after “not now”, “no” and STOP.' },
      { format: 'The fix, drafted', line: 'The claim, limit or send window to change in your AI SDR’s settings. Live only after your OK.' },
      { format: 'A pause, on your rule', line: 'Your AI SDR paused the moment a message breaks a rule you choose. Only if you switch it on.' },
      {
        format: 'A record to share',
        line: 'A weekly page and PDF for your sales lead, your compliance team or your client, or Slack, a sheet or a webhook. Every message signed.',
      },
    ],
  },

  settings: [
    { k: 'AI SDR', v: 'Yours, or a client’s with their written OK' },
    { k: 'Channels', v: 'Email, text and calls' },
    { k: 'Test prospects', v: '2 or more, declared as AI, added to its lists by you' },
    { k: 'Claims', v: 'Your approved customers, results and figures' },
    { k: 'Prices and offers', v: 'Your price list, and a discount limit such as 15%' },
    { k: 'Quiet hours', v: 'For example 21:00 to 08:00, in the prospect’s own time zone' },
    { k: 'Contact limits', v: 'For example 1 text a week' },
    { k: 'Pause rule', v: 'Pause your AI SDR on a flag, only if you switch it on' },
  ],

  forWho: [
    { audience: 'sales', line: 'Know every claim and discount your AI SDR makes before a prospect quotes it back to you.' },
    {
      audience: 'agencies',
      line: 'Check the outbound you run for each client, with their OK, and show them every message kept to their rules.',
    },
    { audience: 'founders', line: 'Let an AI SDR write for you without reading every email it sends.' },
    {
      audience: 'developers',
      line: 'Run the checks from your code after every prompt or sequence change, before a real prospect gets it.',
    },
  ],

  table: {
    heading: 'Your AI SDR sends more than anyone can read. Test prospects read every message it sends them.',
    line: 'Up to 1,040 hours a year back for 1 person who reads what your AI SDR sends 20 hours a week: you read only the flagged messages.',
    cols: ['Today', 'With test prospects'],
    rows: [
      { label: 'Claims', values: ['Spotted when a prospect objects', 'Checked against your approved list, every message'] },
      { label: 'Discounts', values: ['Found when a deal arrives at 30% off', 'Flagged the moment it goes over your limit'] },
      { label: 'Send times', values: ['Nobody sees the text sent at 03:12', 'Every send time checked against your quiet hours'] },
      { label: 'STOP', values: ['You trust the unsubscribe list', 'STOP sent, and the next message timed'] },
      { label: 'Reading', values: ['20 hours a week, sampled by hand', 'Only the flagged messages'] },
      { label: 'Evidence', values: ['Exports from your sending tool', 'Every message signed and dated'] },
    ],
  },

  faq: {
    heading: 'Every test prospect says it’s AI. It only receives.',
    items: [
      {
        q: 'Does it contact anyone?',
        a: 'No. Test prospects only receive what your AI SDR sends them, and reply. They never write first and never call anyone.',
      },
      {
        q: 'How do test prospects get on our lists?',
        a: 'You add them, or your client does with their OK. Each has its own inbox and number.',
      },
      {
        q: 'Does it say it’s AI?',
        a: 'Yes. Every test prospect is named as an AI test prospect working for your company, so your team can see it’s a test.',
      },
      {
        q: 'Will it try to trick our AI SDR?',
        a: 'No. It replies as an ordinary prospect does: yes, not now, no or STOP. No jailbreaks, prompt tricks or bait for a discount.',
      },
      {
        q: 'What does it check against?',
        a: 'Your approved claims, your price list and discount limit, your quiet hours and contact limits, and the rules where you sell: that it says it’s AI and who it acts for, and stops on STOP.',
      },
      {
        q: 'Will test prospects skew our numbers?',
        a: 'No. Each is marked as a test in your list, so it stays out of your reply rates and your pipeline.',
      },
      {
        q: 'Can it pause our AI SDR?',
        a: 'Only if you set that rule. Then a flagged message pauses it until you’ve looked. Nothing else changes without your OK.',
      },
      {
        q: 'Which AI SDRs can it check?',
        a: 'Any that sends email, texts or calls, from a vendor or built in house.',
      },
      {
        q: 'What’s it worth?',
        a: 'Up to 1,040 hours a year back for 1 person who reads what your AI SDR sends 20 hours a week. You read only what was flagged, with the message and the fix beside it.',
      },
      {
        q: 'Is a passed check a guarantee?',
        a: 'No. It’s dated evidence of what your AI SDR sent to each test prospect.',
      },
      {
        q: 'What’s in the free check?',
        a: 'Name an AI SDR you run, or a client’s with their OK. 3 test prospects join its list on 1 channel, and your report lands within 4 days.',
      },
    ],
  },

  final: {
    heading: 'Read what your AI SDR sends, the way your prospects read it.',
    sub: 'Your first check is free: 3 test prospects join its list on 1 channel, and your report lands within 4 days. Your AI SDR, or a client’s with their OK.',
    capture: {
      kind: 'verify',
      source: 'recipe-outbound-agent-final',
      button: 'Check my AI SDR free',
      placeholder: 'Your company’s website',
      label: 'Your company’s website',
      micro: 'Leave it blank to join the waitlist instead. We keep your email and your website to run the check and tell you about Obsession.',
      orWaitlist: true,
      roles,
      interest: 'outbound-agent',
    },
  },
}
