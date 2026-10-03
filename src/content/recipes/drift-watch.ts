import { capture as form } from '../capture'
import type { Recipe } from '../types'

/* Drift watch (/recipes/drift-watch). Check your AI agents. Screen: drift (Your company's support bot, 40 cases, daily;
   Test customer 2, AI, for Your company, replays them every morning at 07:00 and again after every update; the pass
   rate holds inside the 90 to 100% baseline from 20 Sep, 92.5% (37 of 40) before; Vendor A's update on 2 Oct at
   23:20; the run again after the update at 00:10, 70% (28 of 40); 9 cases newly failing since the update, each with
   the bot's new answer: address change A-01 "Done, it's updated."; refunds 14 days R-07 "Yes, up to 30 days.";
   person on request H-02 "I can help instead."; live codes only C-04 "AUTUMN10 works."; delivery £4.95 D-03
   "Delivery is free."; cancel online X-05 "Call us to cancel."; warranty 2 years W-09 "Warranty is 1 year."; no price
   match P-06 "We'll match that."; stops after "No" N-02 "Anything else?" 3 times. A note to Vendor A, drafted: "Since
   your 2 Oct update, 9 of our 40 cases fail. Before and after, signed.", sent after the reader's OK. "With your OK and
   Vendor A's · tests tagged").
   Base: _research/verify/VERIFY.md 6.8 (the golden set, the run after every change, the checks, the outcome) and 11
   (the red lines). No real AI agent check has run yet, so the run is an example and says so, and no Verify claim sits
   in proof.
   Red lines held: only the reader's own agent, or a client's with their written OK, and the vendor's agreement to the
   test tags; every test customer says it's AI and who it works for; it asks what an ordinary customer asks, never a
   jailbreak or a prompt trick; the volume of 1 customer; every replay tagged so none is billed; the note goes to the
   vendor only after the reader's OK. No vendor or product names: Vendor A.
   Up-to-50 rule: the 1 modelled figure (up to 10 days sooner) carries its model in the same line: 1 team found a drop
   in its agent 11 days after the change that caused it; a replay every morning finds it within 1 day, 11 - 1 = 10.
   Flat facts from the example: 37, then 28, of 40 (92.5%, then 70%), 9 newly failing, found 50 minutes after the
   update (23:20 to 00:10), 80 replays (40 at 07:00 and 40 at 00:10). */

const roles = form.agent.roles

export const recipe: Recipe = {
  id: 'drift',
  slug: 'drift-watch',
  name: 'Drift watch',
  group: 'Check your AI agents',
  line: 'Replays your hardest cases on your AI agent every morning and after every update, and flags every answer that changed.',
  gets: 'Every answer that changed, found the day it changed, with the before and after signed.',
  kit: [
    'A declared AI test customer, working for your company',
    'Its own inbox and test account',
    'Your hardest cases, each with its rule',
    'Your vendor’s updates, watched',
    'Every replay tagged, agreed with your vendor',
    'Every answer signed and dated',
  ],

  meta: {
    path: '/recipes/drift-watch',
    title: 'Drift watch: catch the answers an update breaks · Obsession',
    description:
      'A declared test customer replays your hardest cases on your AI agent every morning and within the hour of any update, and flags every answer that changed.',
    answer:
      'Drift watch is an Obsession recipe. With the owner’s OK, a declared AI test customer replays a company’s hardest support cases on its live AI agent every morning, and again within the hour of any vendor release, model update or prompt change. Each run is compared with the baseline, and every answer that changed is flagged with its before and after, signed.',
    ogImage: '/og/drift-watch.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Drift watch', path: '/recipes/drift-watch' },
    ],
  },

  hero: {
    headline: 'AI agents that catch what each update breaks in your AI agent.',
    sub: 'A declared test customer replays your hardest cases every morning, and again within the hour of any update, and compares every answer with your baseline. You see which answers broke, before and after, signed.',
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
    tab: 'Example: the night of a vendor update',
    recipe: 'drift',
    task: 'Replay our 40 hardest support cases every morning, and again within the hour of any update. Tell me which answers changed.',
    targets: 'Your support bot, with Vendor A’s OK',
    journey: ['Replay your 40 cases', 'Compare with the baseline', 'Run again after any update', 'Flag every new failure'],
    schedule: 'Daily at 07:00, and within the hour of any update',
    report: 'A Slack alert, and a note for your vendor',
    kit: ['Agent ID, declared as AI', '1 inbox', 'Your 40 cases', 'Tagged as tests, never billed'],
    events: [
      { time: '2 Oct 07:00', text: 'The morning replay: 37 of 40 cases pass, 92.5%, inside your baseline of 90 to 100%.' },
      { time: '2 Oct 23:20', text: 'Vendor A ships an update to your bot.' },
      { time: '3 Oct 00:10', text: 'The replay runs again, 50 minutes later. 28 of 40 pass: 70%.' },
      { time: '3 Oct 00:12', text: '9 cases that passed that morning now fail. Asked about refunds: “Yes, up to 30 days.” Your rule is 14.' },
      { time: '3 Oct 00:14', text: 'Delivery “is free” where you charge £4.95, the warranty is “1 year” where yours is 2, and “Anything else?” comes 3 times after “No”.' },
    ],
    finding: 'Since Vendor A’s update, 9 of your 40 cases fail. Your bot now offers 30 day refunds, free delivery and price matches you don’t give.',
    fix: 'A note to Vendor A with every answer before and after, signed. Sent after your OK.',
    ledger: 'Example run. 80 replays, every answer signed and dated.',
  },

  steps: [
    {
      title: 'Pick your hardest cases',
      line: 'The questions your bot must always get right: refunds, delivery, codes, a person on request. Each comes with the rule that decides it.',
    },
    {
      title: 'Approve the baseline',
      line: 'The first replays set the pass rate your bot normally holds, case by case. You approve it, and change any rule.',
    },
    {
      title: 'It replays every morning, and after any update',
      line: 'A declared test customer asks every case at 07:00, and again within the hour of a vendor release, a model change or a prompt edit.',
    },
    {
      title: 'You see what changed',
      line: 'Every case that newly fails, with the answer before and after, and a note to your vendor drafted. It goes only after your OK.',
    },
  ],

  checks: [
    {
      group: 'Every replay',
      items: [
        { title: 'Pass rate against the baseline', line: 'Case by case, against the rate your bot normally holds.' },
        { title: 'New failures', line: 'Every case that passed before and fails now, with the rule it broke.' },
        { title: 'Changed answers', line: 'The same question with a different answer, even when both pass.' },
        { title: 'Time to answer', line: 'How long each answer takes, against last week.' },
      ],
    },
    {
      group: 'Every change',
      items: [
        { title: 'Vendor releases', line: 'Picked up from your vendor’s release notes or a webhook, and replayed within the hour.' },
        { title: 'Model updates', line: 'A new model under your bot, replayed the same way.' },
        { title: 'Your own edits', line: 'Prompt and knowledge base changes from your team, replayed before customers meet them.' },
        { title: 'Handoffs', line: 'How often it gets a person when asked, before and after.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Your bot only', line: 'Your own, or a client’s with their written OK, and with your vendor’s agreement.' },
        { title: 'No tricks', line: 'The questions an ordinary customer asks. No jailbreaks or prompt tricks.' },
        { title: 'Your bill', line: 'Every replay is tagged, and agreed with your vendor, so none is billed as a resolution.' },
        { title: 'Your vendor', line: 'The note goes to your vendor only after your OK.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every change comes back with its before and after.',
    items: [
      { format: 'A verdict per case', line: 'Passed, or newly failing, against your baseline.' },
      { format: 'Before and after', line: 'Every changed answer side by side, with the rule it broke.' },
      { format: 'The pass rate over time', line: 'Every morning’s replay on 1 line, with each update marked.' },
      { format: 'A note for your vendor', line: 'Drafted with the evidence and signed. Sent only after your OK.' },
      { format: 'An alert where you look', line: 'Slack, email or a webhook, the moment a replay drops below your baseline.' },
      {
        format: 'A dated record',
        line: 'Every replay signed and dated, as a page and a PDF for your vendor, your client or your insurer.',
      },
    ],
  },

  settings: [
    { k: 'Agent', v: 'Yours, or a client’s with their written OK' },
    { k: 'Cases', v: 'For example: your 40 hardest, each with the rule that decides it' },
    { k: 'Baseline', v: 'For example: 90 to 100% of cases passing' },
    { k: 'Channels', v: 'Chat, email, phone or your portal' },
    { k: 'Changes watched', v: 'Vendor releases, model updates, and prompt and knowledge base edits' },
    { k: 'Tagging', v: 'Every replay tagged, agreed with your vendor first' },
    { k: 'How often', v: 'Daily at 07:00, and within the hour of any change' },
    { k: 'Alerts', v: 'Slack, email or a webhook when the pass rate drops below your baseline' },
  ],

  forWho: [
    {
      audience: 'founders',
      line: 'Hear the night a vendor update changes what your bot tells customers, not days later from a complaint.',
    },
    {
      audience: 'agencies',
      line: 'Watch every agent you run for clients, with their OK, and catch a vendor update before your client does.',
    },
    { audience: 'marketing', line: 'Catch the morning your bot starts handing out a code that has expired.' },
    {
      audience: 'developers',
      line: 'Replay the cases from your code before every prompt change ships, and after every model update.',
    },
  ],

  table: {
    heading: 'Find the drop the night it happens, not 11 days later.',
    line: 'Up to 10 days sooner: 1 team found a drop in its agent 11 days after the change that caused it. A replay every morning finds it within 1 day, and a replay after every update within the hour.',
    cols: ['Today', 'With drift watch'],
    rows: [
      { label: 'A vendor update', values: ['You read the release notes, if there are any', 'Your cases replayed within the hour'] },
      { label: 'A drop in quality', values: ['Noticed days later, from complaints', 'Flagged the night it happens'] },
      { label: 'What changed', values: ['Transcripts, read by hand', 'Every answer before and after, side by side'] },
      { label: 'Your hardest cases', values: ['Tested once, at launch', 'Replayed every morning'] },
      { label: 'Telling your vendor', values: ['“It feels worse lately”', '9 cases, before and after, signed'] },
      { label: 'Proof over time', values: ['None', 'A signed pass rate for every day'] },
    ],
  },

  faq: {
    heading: 'Every test customer says it’s AI. Every replay is tagged and agreed with your vendor.',
    items: [
      {
        q: 'What is drift in an AI agent?',
        a: 'Your AI agent answering the same question differently from day to day, most often after a vendor release, a model update or a prompt change.',
      },
      {
        q: 'How does it know about an update?',
        a: 'From your vendor’s release notes or a webhook, or from your own team’s prompt and knowledge base changes. It replays your cases within the hour.',
      },
      {
        q: 'Which cases should we use?',
        a: 'The questions your bot must always get right, often the ones that already went wrong once. Each gets the rule that decides it.',
      },
      {
        q: 'Does it say it’s AI?',
        a: 'Yes. Every test customer says it’s an AI test customer working for your company, so your team can see it’s a test.',
      },
      {
        q: 'Will our vendor bill us for the replays?',
        a: 'Every replay is tagged as a test, and we agree that with your vendor before the first one runs.',
      },
      {
        q: 'Will it try to trick our bot?',
        a: 'No. It asks what an ordinary customer asks. No jailbreaks or prompt tricks.',
      },
      {
        q: 'Can it watch a client’s agents?',
        a: 'Yes, with the client’s written OK and their vendor’s agreement. The record carries your agency’s name.',
      },
      {
        q: 'What’s it worth?',
        a: 'Up to 10 days sooner: 1 team found a drop in its agent 11 days after the change that caused it, and a replay every morning finds it within 1. A replay after every update finds it within the hour.',
      },
      {
        q: 'Is a passed replay a guarantee?',
        a: 'No. It’s dated evidence of what your agent said on each case that day.',
      },
      {
        q: 'What’s in the free check?',
        a: '3 test customers use your AI agent on 1 channel, and your report lands within 4 days. It’s the first point on your baseline.',
      },
    ],
  },

  final: {
    heading: 'Know which answers an update changed within the hour.',
    sub: 'Your first check is free: 3 test customers use your AI agent on 1 channel, and your report lands within 4 days. Your agent, or a client’s with their OK.',
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
