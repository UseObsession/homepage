import type { Recipe } from '../types'

/* Drift watch (/recipes/drift-watch). Check your AI agents. The persona version (20 Nov 2026): the same persona you
   define asks the reader's AI agent their hardest cases every morning and within the hour of any vendor release, model
   update or prompt edit; it lives as long as they hold it, so every replay comes from the same person and answers
   compare like for like. Every answer comes back word for word, and every one that changed is shown before and after.
   Every replay is tagged, agreed with the vendor, so none is billed. With the agent, the page says what the event log
   shows; when a person takes over, the persona tells them it's an AI. No vendor or product names: Vendor A. The run is
   an example (the `drift` screen: 37 of 40 before Vendor A's update at 23:20, 28 of 40 at 00:10, 9 newly failing). */

export const recipe: Recipe = {
  id: 'drift',
  slug: 'drift-watch',
  name: 'Drift watch',
  group: 'Check your AI agents',
  line: 'The same persona asks your AI agent your hardest cases every morning and after every update, and shows every changed answer.',
  gets: 'Every answer that changed, found the day it changed, with its before and after.',
  kit: [
    'A persona you define, the same one every replay',
    'Its own inbox, and an account on your portal',
    'Your hardest cases, each with its rule',
    'Your vendor’s updates, watched',
    'Every replay tagged, agreed with your vendor',
    'Every answer dated, with screenshots',
  ],

  meta: {
    path: '/recipes/drift-watch',
    title: 'Drift watch: catch the answers an update breaks · Obsession',
    description:
      'A persona asks your AI agent your hardest cases every morning and within the hour of any update. Every answer is kept, every change shown before and after.',
    answer:
      'Drift watch sends the same persona to ask your AI agent your hardest cases, every morning and within the hour of any update. Every answer is kept, and every one that changed is shown before and after.',
    ogImage: '/og/drift-watch.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Drift watch', path: '/recipes/drift-watch' },
    ],
  },

  hero: {
    headline: 'What each update changed in your AI agent’s answers.',
    sub: 'Drift watch sends the same persona to ask your AI agent your hardest cases, every morning and within the hour of any update. Every answer is kept, and every one that changed is shown before and after.',
    screen: 'drift',
    capture: {
      kind: 'waitlist',
      source: 'recipe-drift-hero',
      button: 'Request early access',
      interest: 'drift',
    },
  },

  run: {
    tab: 'Example: the night of a vendor update',
    recipe: 'drift',
    task: 'Every morning, have the same persona replay our 40 hardest support cases, and again within the hour of any update. Tell me which answers changed.',
    targets: 'Your support bot, run by Vendor A',
    journey: ['Replay your 40 cases', 'Compare with the baseline', 'Run again after any update', 'Flag every new failure'],
    schedule: 'Daily at 07:00, and within the hour of any update',
    report: 'Slack, and every answer in a table',
    kit: ['Persona · UK, the same each replay', '1 inbox', 'Your 40 cases', 'Tagged as tests, never billed'],
    events: [
      { time: '2 Oct 07:00', text: 'The morning replay: 37 of 40 cases pass, 92.5%, inside your baseline of 90 to 100%.' },
      { time: '2 Oct 23:20', text: 'Vendor A ships an update to your bot.' },
      { time: '3 Oct 00:10', text: 'The persona replays every case, 50 minutes later. 28 of 40 pass: 70%.' },
      { time: '3 Oct 00:12', text: '9 cases that passed that morning now fail. Asked about refunds: “Yes, up to 30 days.” Your rule is 14.' },
      { time: '3 Oct 00:14', text: 'Delivery “is free” where you charge £4.95, the warranty is “1 year” where yours is 2, and “Anything else?” comes 3 times after “No”.' },
    ],
    finding: 'Since Vendor A’s update, 9 of your 40 cases fail. Your bot now offers 30 day refunds, free delivery and price matches you don’t give.',
    fix: 'In Slack at 00:14, with every answer before and after, ready to send to Vendor A.',
    ledger: 'Example run. 80 replays, every answer dated.',
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
      title: 'Asked every morning, and after any update',
      line: 'The same persona asks every case at 07:00, and again within the hour of a vendor release, a model change or a prompt edit.',
    },
    {
      title: 'Every changed answer lands',
      line: 'Each case that newly fails, with the answer before and after, in Slack, a PDF or from the API.',
    },
  ],

  checks: [
    {
      group: 'Every replay',
      items: [
        { title: 'Pass rate against the baseline', line: 'Case by case, against the rate your bot normally holds.' },
        { title: 'New failures', line: 'Every case that passed before and fails now, with the rule it broke.' },
        { title: 'Changed answers', line: 'The same question from the same persona with a different answer, even when both pass.' },
        { title: 'Time to answer', line: 'How long each answer takes, against last week.' },
      ],
    },
    {
      group: 'Every change',
      items: [
        { title: 'Vendor releases', line: 'Picked up from your vendor’s release notes or a webhook, and replayed within the hour.' },
        { title: 'Model updates', line: 'A new model under your bot, replayed the same way.' },
        { title: 'Your own edits', line: 'Prompt and knowledge base changes from your team, replayed before they go live.' },
        { title: 'Handoffs', line: 'How often it gets a person when asked, before and after.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Hard questions', line: 'What an ordinary person asks by default, and hard cases when you add them.' },
        { title: 'The event log', line: 'Every answer kept exactly as it arrived, before and after.' },
        { title: 'Your bill', line: 'Every replay is tagged, and agreed with your vendor, so none is billed as a resolution.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every change comes back with its before and after.',
    items: [
      { format: 'A verdict per case', line: 'Passed, or newly failing, against your baseline.' },
      { format: 'Before and after', line: 'Every changed answer side by side, with the rule it broke.' },
      { format: 'The pass rate over time', line: 'Every morning’s replay on 1 line, with each update marked.' },
      { format: 'Slack, email or a webhook', line: 'The moment a replay drops below your baseline.' },
      { format: 'A dated event log', line: 'Every replay as a page and a PDF for your vendor, your client or your insurer.' },
    ],
  },

  settings: [
    { k: 'Agent', v: 'Yours, or one you run for a client' },
    { k: 'Persona', v: 'The same one every replay, so answers compare like for like' },
    { k: 'Cases', v: 'For example: your 40 hardest, each with the rule that decides it' },
    { k: 'Baseline', v: 'For example: 90 to 100% of cases passing' },
    { k: 'Channels', v: 'Chat, email, phone or your portal' },
    { k: 'Changes watched', v: 'Vendor releases, model updates, and prompt and knowledge base edits' },
    { k: 'How often', v: 'Daily at 07:00, and within the hour of any change' },
  ],

  forWho: [
    { audience: 'founders', line: 'Hear the night a vendor update changes what your bot says.' },
    { audience: 'agencies', line: 'Every agent you run for clients, replayed after each vendor update.' },
    { audience: 'marketing', line: 'Catch the morning your bot starts handing out a code that has expired.' },
    { audience: 'developers', line: 'Replay the cases from your code or agent before every prompt change ships.' },
  ],

  table: {
    heading: 'Find the drop the night it happens.',
    line: 'Example: Vendor A’s update, replayed 50 minutes later.',
    cols: ['By hand', 'With Drift watch'],
    rows: [
      { label: 'A vendor update', values: ['You read the release notes, if there are any', 'Your cases replayed within the hour'] },
      { label: 'A drop in quality', values: ['Noticed days later, from complaints', 'Flagged the night it happens'] },
      { label: 'What changed', values: ['Transcripts, read by hand', 'Every answer before and after, side by side'] },
      { label: 'Your hardest cases', values: ['Tested once, at launch', 'Replayed every morning'] },
      { label: 'Telling your vendor', values: ['“It feels worse lately”', '9 cases, before and after'] },
      { label: 'Over time', values: ['Nothing kept', 'A pass rate for every day'] },
    ],
  },

  faq: {
    heading: 'The same persona, the same cases, every answer kept.',
    items: [
      {
        q: 'What is drift in an AI agent?',
        a: 'Drift is your AI agent answering the same question differently from day to day, most often after a vendor release, a model update or a prompt change.',
      },
      {
        q: 'Why did our AI agent start giving wrong answers after an update?',
        a: 'A vendor release, a model update or a prompt change can change its answers with nothing else changed on your side. Drift watch replays your hardest cases within the hour of any update and shows every answer that changed.',
      },
      {
        q: 'How does Drift watch know about an update?',
        a: 'It reads your vendor’s release notes or a webhook, or your own team’s prompt and knowledge base changes, and replays your cases within the hour.',
      },
      {
        q: 'Which cases should we use?',
        a: 'The questions your bot must always get right, often the ones that already went wrong once. Each gets the rule that decides it.',
      },
      {
        q: 'Will our vendor bill us for the replays?',
        a: 'No. Every replay is tagged as a test, and we agree that with your vendor before the first one runs.',
      },
      {
        q: 'Does the persona say it’s an AI?',
        a: 'It tells a person it’s an AI when it talks to one. With your AI agent, the event log keeps both sides word for word, before and after.',
      },
      { q: 'Is a passed replay a guarantee?', a: 'No. It is a dated event log of what your agent said on each case that day.' },
    ],
  },

  final: {
    heading: 'Know which answers an update changed within the hour.',
    sub: 'Tell us which agent to watch and your hardest cases. We’ll set up the persona and the first replay with you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-drift-final',
      button: 'Request early access',
      interest: 'drift',
    },
  },
}
