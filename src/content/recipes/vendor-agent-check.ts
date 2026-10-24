import type { Recipe } from '../types'

/* Vendor agent check (/recipes/vendor-agent-check). Check your AI agents. Screen: vendorcheck (Your company, choosing
   between Vendor B and Vendor C to replace Vendor A; 20 cases from your tickets on 2 vendors' AI agents; a 2 week run,
   19 Sep to 3 Oct; 9 of 20 cases with a fail, 11 more passed on both; Vendor B 17 of 20 passed, Vendor C 12.
   Fails, B: R-02 refund on day 35, O-03 edit an order, C-01 expired code. Fails, C: R-02, O-01 change address, P-01
   cancel plan, H-01 ask for a person, H-02 escalate, D-02 person or bot?, C-01, A-02 delete my data. Case H-01 open:
   policy 6.1, a person within 3 min; Test customer 2 asks "Can I speak to a person, please?"; Vendor B at 10:40
   "Connecting you.", a person in 1 min 50 s; Vendor C at 10:52 "How can I help?" 3 times, no person in 6 min; signed;
   "With both vendors' OK · no jailbreaks"; the report ready for procurement).
   Base: _research/verify/VERIFY.md 6.5 (the cases, the checks, the outcome) and 11 (the red lines). No real AI agent
   check has run yet, so the run is an example and says so, and no Verify claim sits in proof.
   The three lines hold (system.md), and nothing else is written as a rule: every answer and handoff kept exactly as it
   arrived; the reader private unless they choose to be named, so the report is theirs to share or keep; the law
   (every test customer says it's AI when it talks to a person). Each vendor agrees to the test and sets its agent up
   on the reader's policies (said once, in the steps), and every test is tagged on every vendor. The cases are asked
   as the test customer's own, so no real customer's details reach a vendor. Hard or adversarial cases are the
   reader's setting. No vendor or product names: Vendor A, B and C.
   Up-to-50 rule: the 1 modelled figure (up to 76 days sooner to a decision) carries its model in the same line:
   2 weeks of side by side checks (14 days) in place of a 90 day pilot on live customers, 90 - 14 = 76. VERIFY.md
   rounds this to "10 weeks"; 90 days is 12.9 weeks, so 76 days is the exact ceiling. */

export const recipe: Recipe = {
  id: 'vendor-agent',
  slug: 'vendor-agent-check',
  name: 'Vendor agent check',
  group: 'Check your AI agents',
  line: 'Runs the same real cases on every shortlisted vendor’s AI agent and compares them side by side before you sign.',
  gets: 'Every shortlisted agent on your own cases, side by side, with every answer and handoff kept as proof.',
  kit: [
    'AI customers, working for your company',
    'Their own inboxes and numbers on every agent',
    'Your hardest cases, each with its policy',
    'Each vendor’s agent, set up on your policies',
    'Every test tagged on every vendor',
    'Every answer and handoff kept with its receipt',
  ],

  meta: {
    path: '/recipes/vendor-agent-check',
    title: 'Vendor agent check: compare AI agents on your own cases',
    description:
      'Before you sign, AI customers run your real cases on each shortlisted vendor’s AI agent and compare every answer side by side, each with its receipt.',
    answer:
      'Vendor agent check compares AI agents on your own cases before you sign: AI customers run your hardest real cases on every shortlisted agent and time every handoff, so you choose with proof, not a demo.',
    ogImage: '/og/vendor-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Vendor agent check', path: '/recipes/vendor-agent-check' },
    ],
  },

  hero: {
    headline: 'AI agents that test AI vendors on your cases before you sign.',
    sub: 'Vendor agent check compares AI agents on your own cases before you sign: AI customers run your hardest real cases on every shortlisted agent and time every handoff, so you choose with proof, not a demo.',
    screen: 'vendorcheck',
    capture: {
      kind: 'verify',
      source: 'recipe-vendor-agent-hero',
      button: 'Check my AI agent free',
      interest: 'vendor-agent',
    },
  },

  run: {
    tab: 'Example: 2 vendors, your 20 cases',
    recipe: 'vendor-agent',
    task: 'Run 20 cases from our tickets on Vendor B’s and Vendor C’s agents, set up on our policies, and compare them side by side.',
    targets: 'Vendor B and Vendor C',
    journey: ['Set up the same 20 cases', 'Say it’s AI, then ask', 'Time every handoff', 'Score against your policy'],
    schedule: '2 weeks before you sign, then monthly',
    report: 'A signed report for procurement',
    kit: ['Agent ID, declared as AI', 'An inbox and number per vendor', '20 cases from your tickets', 'Tagged as tests on both'],
    events: [
      { time: '19 Sep', text: 'Vendor B and Vendor C agree to the test. Both agents are set up on your policies, and the same 20 cases go to each.' },
      { time: '22 Sep 10:40', text: 'Case H-01. AI customer 2 says it’s AI and asks Vendor B for a person. “Connecting you.” A person answers in 1 minute 50 seconds.' },
      { time: '22 Sep 10:52', text: 'The same case on Vendor C: “How can I help?” 3 times, and no person in 6 minutes. Your policy says 3.' },
      { time: '29 Sep', text: 'Both fail a refund on day 35 and an expired code. Vendor B also fails an order edit. Vendor C fails 6 more, from an address change to a data deletion request.' },
      { time: '3 Oct', text: 'Every case run on both. Vendor B passes 17 of 20, Vendor C 12.' },
    ],
    finding: 'Vendor B passed 17 of your 20 cases and Vendor C 12. Asked for a person, Vendor C kept a customer waiting 6 minutes where your policy says 3.',
    fix: 'A side by side report for procurement, with both transcripts on every case, signed. The choice stays yours.',
    ledger: 'Example run. 20 cases on 2 vendors, 40 runs in 2 weeks, every answer signed and dated.',
  },

  steps: [
    {
      title: 'Pick the cases that matter',
      line: 'Take them from your own tickets: a late refund, an address change, an expired code, a customer who wants a person. Each gets the policy that decides it.',
    },
    {
      title: 'Every vendor agrees, then sets up',
      line: 'Each vendor on your shortlist agrees to the test and sets its agent up on your policies, on the channels you’ll run.',
    },
    {
      title: 'AI customers run every case on every agent',
      line: 'Each says it’s AI and who it works for, asks the same way on every agent, and times every answer and handoff. Every test is tagged.',
    },
    {
      title: 'You get a side by side report',
      line: 'Every case passed or failed for each vendor, with both transcripts and the policy that decided it, for procurement. Once you go live, the same cases run monthly.',
    },
  ],

  checks: [
    {
      group: 'Every case, on every agent',
      items: [
        { title: 'Right answers', line: 'Refunds, returns, order changes and cancellations, against your policy.' },
        { title: 'A person when asked', line: 'Whether a person is offered, how long it takes, and whether the handoff lands in your helpdesk.' },
        { title: 'Says it’s AI', line: 'In its first message, and truthfully when a customer asks “Am I talking to a person?”' },
        { title: 'The same answer every time', line: 'The same case asked again on another day, compared.' },
      ],
    },
    {
      group: 'Before you sign',
      items: [
        { title: 'The deck against the agent', line: 'The resolution rate, handoff time and languages in the sales deck, against what the agent did on your cases.' },
        { title: 'Your hardest cases', line: 'A refund on day 35, an expired code, a customer asking you to delete their data: the cases a demo skips.' },
        { title: 'The channels you’ll run', line: 'Chat, email, phone or your portal, wherever the agent will meet your customers.' },
        { title: 'Your current agent', line: 'The agent you run today, or one you build in house, on the same cases, so every vendor has a bar to clear.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Hard questions', line: 'What an ordinary customer asks, and hard or adversarial cases if you want them.' },
        { title: 'The record', line: 'Every answer and handoff kept exactly as it arrived.' },
        { title: 'Your customers’ details', line: 'Each AI customer asks a case as its own question, so no real customer’s details reach a vendor.' },
        { title: 'The results', line: 'Yours, and private unless you choose to share them.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every vendor runs the same cases, side by side, before you sign.',
    items: [
      { format: 'A verdict per case', line: 'Passed or failed for each vendor, with the policy that decided it.' },
      { format: 'Both transcripts', line: 'Every answer from every vendor on the same case, timed, beside your policy.' },
      { format: 'Every handoff, timed', line: 'How long each agent took to reach a person, and whether the case arrived in your helpdesk.' },
      { format: 'The deck, checked', line: 'Each vendor’s claims beside what its agent did on your cases.' },
      {
        format: 'A report for procurement',
        line: 'Side by side, with every receipt, for your team, legal and finance, as a page and a PDF, or an email, Slack, a sheet or a webhook.',
      },
      { format: 'A monthly check', line: 'Once you go live, the same cases every month on the agent you chose, with what broke or recovered.' },
    ],
  },

  settings: [
    { k: 'Vendors', v: 'Every vendor on your shortlist' },
    { k: 'Cases', v: 'For example: 20 from your own tickets, your hardest included' },
    { k: 'Policies', v: 'Your refund, returns, cancellation and data pages, set up on every agent' },
    { k: 'Channels', v: 'The ones you’ll run: chat, email, phone or your portal' },
    { k: 'What counts', v: 'For example: a person within 3 minutes, the right refund window' },
    { k: 'Your bar', v: 'The agent you run today, or your own build, on the same cases' },
    { k: 'Tagging', v: 'Every test tagged on every vendor, agreed with each first' },
    { k: 'How long', v: '2 weeks before you sign, then monthly once you go live' },
  ],

  forWho: [
    {
      audience: 'founders',
      line: 'Choose the AI agent your customers will meet on your own cases, not a demo, and keep checking it once it’s live.',
    },
    {
      audience: 'agencies',
      line: 'Pick the chat or voice platform you build client agents on, with the proof to show each client why.',
    },
    { audience: 'sales', line: 'Before an AI agent answers your inbound buyers, run your real buyer questions on every one you’re weighing.' },
    {
      audience: 'developers',
      line: 'Run the same cases on your own build and every vendor’s, from your code, and decide on the results.',
    },
  ],

  table: {
    heading: 'Decide in 2 weeks, before a customer meets an agent you’d turn down.',
    line: 'Up to 76 days sooner to a decision: 2 weeks of side by side checks on your own cases, in place of a 90 day pilot on live customers.',
    cols: ['Today', 'With a vendor agent check'],
    rows: [
      { label: 'Evidence', values: ['A demo, a deck and a live pilot', 'Your own cases, run on every agent'] },
      { label: 'Time to decide', values: ['A 90 day pilot', '2 weeks'] },
      { label: 'Who it’s tested on', values: ['Your customers, during the pilot', 'AI customers'] },
      { label: 'A fair comparison', values: ['Each vendor on different weeks and customers', 'The same cases, customers and channels on each'] },
      { label: 'A person when asked', values: ['Found when a customer complains', 'Timed on every case'] },
      { label: 'Proof for procurement', values: ['Notes and screenshots', 'Every answer and handoff kept with its receipt'] },
    ],
  },

  faq: {
    heading: 'Every AI customer says it’s AI. Every vendor gets the same cases.',
    items: [
      {
        q: 'How do we evaluate an AI customer service agent before we sign?',
        a: 'Run your own cases on it: Obsession’s Vendor agent check puts your hardest real cases to every shortlisted agent, set up on your policies, and scores every answer side by side.',
      },
      {
        q: 'Where do the cases come from?',
        a: 'Vendor agent check takes them from your own tickets: the questions your customers really ask, your hardest included, each with the policy that decides it. Each AI customer asks a case as its own question, so no real customer’s details reach a vendor.',
      },
      {
        q: 'Does Vendor agent check say it’s AI?',
        a: 'Yes. Every Vendor agent check AI customer says it’s an AI working for your company, so every vendor can see it’s a test.',
      },
      {
        q: 'Will Vendor agent check try to trick the agents?',
        a: 'Only if you want it to. Vendor agent check asks what an ordinary customer asks, and you can add hard or adversarial cases to see which agent holds.',
      },
      {
        q: 'Will a vendor bill us for the tests?',
        a: 'Every Vendor agent check test is tagged on every vendor, and we agree that with each one before the first case runs.',
      },
      {
        q: 'Will a vendor see how the others did?',
        a: 'Not unless you share it. The Vendor agent check report is yours, and stays private unless you choose otherwise.',
      },
      {
        q: 'Can we include the agent we run today?',
        a: 'Yes. In Vendor agent check, the agent you run today, or one you build in house, runs the same cases, so every vendor has a bar to clear.',
      },
      {
        q: 'What happens after we sign?',
        a: 'Vendor agent check runs the same cases monthly on the agent you chose, and you hear which ones broke or recovered.',
      },
      {
        q: 'What’s it worth?',
        a: 'Vendor agent check gets you to a decision up to 76 days sooner: 2 weeks of side by side checks on your own cases, in place of a 90 day pilot on live customers. And none of your customers meets an agent you then turn down.',
      },
      {
        q: 'Is a passed check a guarantee?',
        a: 'No. A passed Vendor agent check is dated evidence of what each agent did on each case.',
      },
      {
        q: 'What’s in the free check?',
        a: 'The free check is a Vendor agent check on the AI agent you run today, or a vendor’s you’re trialling: 3 AI customers use it on 1 channel, and your report lands within 4 days.',
      },
    ],
  },

  final: {
    heading: 'Choose your AI agent on your own cases, before you sign.',
    sub: 'Your first check is free: 3 AI customers use the AI agent you run today on 1 channel, and your report lands within 4 days. It sets the bar every vendor on your shortlist has to clear.',
    capture: {
      kind: 'verify',
      source: 'recipe-vendor-agent-final',
      button: 'Check my AI agent free',
      interest: 'vendor-agent',
    },
  },
}
