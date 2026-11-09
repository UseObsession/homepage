import type { Recipe } from '../types'

/* Vendor agent check (/recipes/vendor-agent-check). Check your AI agents. Screen: vendorcheck (choosing between Vendor
   B and Vendor C; 20 cases from your tickets over 2 weeks, 19 Sep to 3 Oct; B passes 17 of 20, C 12; case H-01, a
   person within 3 min: B in 1 min 50 s, C none in 6 min).
   The 9 Nov story: the record of what each shortlisted vendor's AI agent tells customers on the reader's own cases, side
   by side, before they sign, and the same questions where each agent is live today at other companies. Each vendor
   agrees to the test and sets its agent up on the reader's policies; every test is tagged. Cases are asked as the
   persona's own, so no real customer's details reach a vendor. No real AI agent check has run yet, so the run is an
   example. No vendor or product names: Vendor A, B and C. */

export const recipe: Recipe = {
  id: 'vendor-agent',
  slug: 'vendor-agent-check',
  name: 'Vendor agent check',
  group: 'Check your AI agents',
  line: 'What each shortlisted vendor’s AI agent tells customers on your own cases, side by side, before you sign.',
  gets: 'Every shortlisted agent on your cases, side by side, every answer and handoff dated.',
  kit: [
    'A customer profile with its own inbox and number on every agent',
    'Your hardest cases, each with its policy',
    'Each vendor’s agent, set up on your policies',
    'The same questions where each agent is live today',
    'Every answer and handoff kept with its time',
    'A side by side report, a sheet or the API',
  ],

  meta: {
    path: '/recipes/vendor-agent-check',
    title: 'Vendor agent check: compare AI agents on your own cases',
    description:
      'Before you sign, Vendor agent check runs your real cases on every shortlisted vendor’s AI agent and keeps each answer and handoff side by side, dated.',
    answer:
      'Vendor agent check is the record of what each shortlisted AI agent tells customers on your own cases, side by side, before you sign. Obsession runs your hardest cases on every agent, times every handoff and keeps each answer as it arrived.',
    ogImage: '/og/vendor-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Vendor agent check', path: '/recipes/vendor-agent-check' },
    ],
  },

  hero: {
    headline: 'Every AI vendor on your own cases, before you sign.',
    sub: 'Vendor agent check is the record of what each shortlisted AI agent tells customers on your own cases, side by side, before you sign. Obsession runs your hardest cases on every agent, times every handoff and keeps each answer as it arrived.',
    screen: 'vendorcheck',
    capture: {
      kind: 'waitlist',
      source: 'recipe-vendor-agent-hero',
      button: 'Request early access',
      interest: 'vendor-agent',
    },
  },

  run: {
    tab: 'Example: 2 vendors, your 20 cases',
    recipe: 'vendor-agent',
    task: 'Run 20 cases from our tickets on Vendor B’s and Vendor C’s agents, set up on our policies, and keep every answer side by side.',
    targets: 'Vendor B and Vendor C',
    journey: ['Set up the same 20 cases', 'Say it’s an AI, then ask', 'Time every handoff', 'Read against your policy'],
    schedule: '2 weeks before you sign, then monthly',
    report: 'A side by side report for procurement',
    kit: ['Customer · UK', 'An inbox and number per vendor', '20 cases from your tickets', 'Tagged as tests on both'],
    events: [
      { time: '19 Sep', text: 'Vendor B and Vendor C agree to the test. Both agents are set up on your policies, and the same 20 cases go to each.' },
      { time: '22 Sep 10:40', text: 'Case H-01. Obsession says it’s an AI and asks Vendor B for a person. “Connecting you.” A person answers in 1 minute 50 seconds.' },
      { time: '22 Sep 10:52', text: 'The same case on Vendor C: “How can I help?” 3 times, and no person in 6 minutes. Your policy says 3.' },
      { time: '29 Sep', text: 'Both fail a refund on day 35 and an expired code. Vendor B also fails an order edit. Vendor C fails 6 more, from an address change to a data deletion request.' },
      { time: '3 Oct', text: 'Every case run on both. Vendor B passes 17 of 20, Vendor C 12.' },
    ],
    finding: 'Vendor B passed 17 of your 20 cases and Vendor C 12. Asked for a person, Vendor C kept a customer waiting 6 minutes where your policy says 3.',
    fix: 'A side by side report for procurement, with both transcripts on every case. The choice stays yours.',
    ledger: 'Example run. 20 cases on 2 vendors, 40 runs in 2 weeks, every answer dated.',
  },

  steps: [
    {
      title: 'Pick the cases that matter',
      line: 'From your own tickets: a late refund, an address change, an expired code, a customer who wants a person. Each gets the policy that decides it.',
    },
    {
      title: 'Every vendor agrees, then sets up',
      line: 'Each vendor on your shortlist agrees to the test and sets its agent up on your policies, on the channels you’ll run.',
    },
    {
      title: 'Every case on every agent',
      line: 'Obsession says it’s an AI, asks the same way on every agent, and times every answer and handoff. Every test is tagged.',
    },
    {
      title: 'A side by side report',
      line: 'Every case for each vendor, with both transcripts and the policy that decided it. Once you go live, the same cases run monthly.',
    },
  ],

  checks: [
    {
      group: 'Every case, on every agent',
      items: [
        { title: 'Right answers', line: 'Refunds, returns, order changes and cancellations, beside your policy.' },
        { title: 'A person when asked', line: 'Whether a person is offered, how long it takes, and whether the handoff lands in your helpdesk.' },
        { title: 'Says it’s an AI', line: 'In its first message, and truthfully when a customer asks “Am I talking to a person?”' },
        { title: 'The same answer every time', line: 'The same case asked again on another day.' },
      ],
    },
    {
      group: 'Before you sign',
      items: [
        { title: 'The deck beside the agent', line: 'The resolution rate, handoff time and languages in the sales deck, beside what the agent did on your cases.' },
        { title: 'Your hardest cases', line: 'A refund on day 35, an expired code, a request to delete data: the cases a demo skips.' },
        { title: 'Where it’s live today', line: 'The same questions to each vendor’s agent at companies already running it.' },
        { title: 'Your current agent', line: 'The agent you run today, or your own build, on the same cases, so every vendor has a bar to clear.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Your customers’ details', line: 'Each case is asked as the persona’s own question, so no real customer’s details reach a vendor.' },
        { title: 'The results', line: 'Yours, and private unless you choose to share them.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every vendor on the same cases, side by side, before you sign.',
    items: [
      { format: 'A line per case', line: 'Passed or failed for each vendor, with the policy that decided it.' },
      { format: 'Both transcripts', line: 'Every answer from every vendor on the same case, timed.' },
      { format: 'Every handoff, timed', line: 'How long each agent took to reach a person, and whether the case arrived in your helpdesk.' },
      { format: 'The deck, read against the agent', line: 'Each vendor’s claims beside what its agent did on your cases.' },
      { format: 'A report for procurement', line: 'Side by side, as a page and a PDF, or a sheet or the API.' },
      { format: 'A monthly read', line: 'Once you go live, the same cases every month on the agent you chose.' },
    ],
  },

  settings: [
    { k: 'Vendors', v: 'Every vendor on your shortlist' },
    { k: 'Cases', v: 'For example: 20 from your own tickets, your hardest included' },
    { k: 'Policies', v: 'Your refund, returns, cancellation and data pages, set up on every agent' },
    { k: 'Channels', v: 'The ones you’ll run: chat, email, phone or your portal' },
    { k: 'What counts', v: 'For example: a person within 3 minutes, the right refund window' },
    { k: 'Your bar', v: 'The agent you run today, or your own build, on the same cases' },
    { k: 'How long', v: '2 weeks before you sign, then monthly once you go live' },
  ],

  forWho: [
    { audience: 'founders', line: 'Choose the AI agent your customers will meet on your own cases, not a demo.' },
    { audience: 'agencies', line: 'Pick the chat or voice platform you build client agents on, with the record to show each client why.' },
    { audience: 'sales', line: 'Run your real buyer questions on every AI agent you’re weighing for inbound.' },
    { audience: 'developers', line: 'Run the same cases on your own build and every vendor’s, from your code.' },
  ],

  table: {
    heading: 'Decide in 2 weeks, before a customer meets an agent you’d turn down.',
    cols: ['A pilot', 'With Vendor agent check'],
    rows: [
      { label: 'Evidence', values: ['A demo, a deck and a live pilot', 'Your own cases, run on every agent'] },
      { label: 'Time to decide', values: ['A 90 day pilot', '2 weeks'] },
      { label: 'Who it’s tried on', values: ['Your customers, during the pilot', 'Your cases, asked by Obsession'] },
      { label: 'A fair comparison', values: ['Each vendor on different weeks and customers', 'The same cases and channels on each'] },
      { label: 'A person when asked', values: ['Found when a customer complains', 'Timed on every case'] },
    ],
  },

  faq: {
    heading: 'Every vendor gets the same cases.',
    items: [
      {
        q: 'How do we evaluate an AI agent for customer service before we sign?',
        a: 'Run your own cases on it. Vendor agent check puts your hardest real cases to every shortlisted agent, set up on your policies, and keeps every answer side by side.',
      },
      {
        q: 'Where do the cases come from?',
        a: 'Vendor agent check takes them from your own tickets, your hardest included, each with the policy that decides it. Each case is asked as the persona’s own question, so no real customer’s details reach a vendor.',
      },
      {
        q: 'Will a vendor bill us for the tests?',
        a: 'No. Every Vendor agent check test is tagged on every vendor, agreed with each before the first case runs.',
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
        a: 'Vendor agent check runs the same cases monthly on the agent you chose, and you see which answers changed.',
      },
    ],
  },

  final: {
    heading: 'Choose your AI agent on your own cases, before you sign.',
    sub: 'Early access includes Vendor agent check on your shortlist, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-vendor-agent-final',
      button: 'Request early access',
      interest: 'vendor-agent',
    },
  },
}
