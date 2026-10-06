import type { Capture, Recipe } from '../types'

/* Client upsells (/recipes/client-upsells). Keep and grow customers. For agencies.
   Screen: upsells, drawn for an agency (Your agency / Missions / Client upsells: 5 clients, from your checks. Homeware
   has no text welcome flow: its test phone opted in on 24 Sep, ticking "Text me offers", and by 1 Oct had 0 texts in
   7 days, so the next service is an SMS welcome series at £1,200 a month from 1 Nov. Coffee roaster: AI assistants
   quote last year's price, so an AI answers retainer at £900 a month. Candles: checkout fails for AI shoppers, so AI
   checkout fixes at £2,400 once. Outdoor gear and Dental group: no gap found, nothing proposed. Homeware's proposal,
   in the agency's brand and dated Oct 2026, carries its signed proof, waits for Approve, then goes in your thread at
   10:24; the other 2 wait for the OK. "Sends after your OK"). On the page the approver is always "you", as in the
   steps and the questions.
   The job (Seun, 3 Oct): each month find the next service each client needs, with proof from the agency's own checks
   of that client, draft the proposal with its price and evidence, send it after the agency's OK, and follow up.
   Red lines held: only the agency's own clients, and only checks each client agreed to; no gap, no proposal; the agent
   never writes to a client as itself or as a person: every proposal and every follow up is drafted in the agency's
   own thread and goes only after the agency approves the words; prices come from the agency's service list, and
   anything off it waits for a person; no guaranteed results in any proposal; people sign; a "no" or a "not now" stops
   it for that client until a new gap and the agency's OK.
   Up-to-50 rule (no money promises, 3 Oct): the 1 modelled figure is hours back, with its sum in the same line: up to
   132 hours a year if every month is like October in the example (1 hour to read each of 5 clients' checks = 5 hours,
   2 hours to draft each of 3 proposals with its proof = 6 hours, so 11 hours a month; 11 × 12 = 132). The proposal
   prices in the run stay as facts of the example. No sources, prices of Obsession or real names on the page. The run
   is an example and says so. */

const roles: Capture['roles'] = {
  question: 'What’s your role?',
  options: ['Agency owner', 'Account director', 'Client services', 'Something else'],
}

const micro = 'We keep your email to set up your first run and tell you about Obsession.'

export const recipe: Recipe = {
  id: 'upsells',
  slug: 'client-upsells',
  name: 'Client upsells',
  group: 'Keep and grow customers',
  line: 'Finds the next service each client needs in your own checks, and drafts the proposal with its price and proof.',
  gets: 'Each month, the next service every client needs, with the proof and a proposal waiting for your OK.',
  kit: [
    'An agent ID, declared as AI',
    'Your checks of every client, with their OK',
    'Your service list and prices, which it can’t change',
    'Proposals in your brand, proof attached',
    'Drafts in your own thread',
    'Every check, proposal and OK signed and dated',
  ],

  meta: {
    path: '/recipes/client-upsells',
    title: 'Client upsells: the next service for each client · Obsession',
    description:
      'Each month a declared AI agent finds the next service each client needs in your own checks, and drafts the proposal with its price and proof for your OK.',
    answer:
      'Client upsells finds the next service each agency client needs: each month a declared AI agent reads the checks you run on every client with their OK, finds what each one is missing, and drafts the proposal with your price and the signed proof for your OK.',
    ogImage: '/og/client-upsells.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Client upsells', path: '/recipes/client-upsells' },
    ],
  },

  hero: {
    headline: 'AI agents that find the next service every client needs.',
    sub: 'Client upsells finds the next service each agency client needs: each month a declared AI agent reads the checks you run on every client with their OK, finds what each one is missing, and drafts the proposal with your price and the signed proof for your OK.',
    screen: 'upsells',
    capture: {
      kind: 'waitlist',
      source: 'recipe-upsells-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'upsells',
    },
  },

  run: {
    tab: 'Example: 5 clients, October',
    recipe: 'upsells',
    task: 'On the 1st of each month, read our checks of every client and find the next service each one needs. Draft the proposal with its price and proof for my OK, then follow up.',
    targets: 'Your 5 clients: Homeware, Coffee roaster, Candles, Outdoor gear and Dental group',
    journey: ['Read your checks of every client', 'Match each gap to a service you sell', 'Draft the proposal with its proof', 'Send from your thread after your OK'],
    schedule: 'The 1st of every month',
    report: 'Proposals waiting for your OK, each with its proof',
    kit: ['Agent ID, declared as AI', 'Your client checks', 'Your service list', 'Your own thread'],
    events: [
      { time: '24 Sep, 10:12', text: 'Your check of Homeware, with its OK: a test phone opts in to its texts, ticking “Text me offers”.' },
      { time: '1 Oct, 09:00', text: '5 clients read from your checks. Homeware: 0 texts in the 7 days since that phone opted in.' },
      { time: '1 Oct, 09:06', text: 'Coffee roaster: AI assistants quote last year’s price. Candles: checkout fails for AI shoppers. Outdoor gear and Dental group: no gap, so nothing to propose.' },
      { time: '1 Oct, 09:20', text: '3 proposals drafted from your service list, each with its signed proof: £1,200 a month, £900 a month and £2,400 once.' },
      { time: '1 Oct, 10:24', text: 'You approve Homeware’s proposal. The SMS welcome series, £1,200 a month from 1 Nov, goes from your own thread.' },
      { time: '8 Oct, 09:00', text: 'No reply yet. A follow up drafted in the same thread waits for your OK.' },
    ],
    finding: '3 of your 5 clients have a gap you can fix. Homeware’s new text subscribers get 0 texts in their first 7 days.',
    fix: 'Homeware’s proposal went from your thread after your OK. The other 2 wait for you, each with its proof.',
    ledger: 'Example run. Every check, proposal and OK signed and dated.',
  },

  steps: [
    {
      title: 'Read your checks of every client',
      line: 'On the 1st of each month it reads every check you run for each client, with their OK: mystery shops, AI checkout tests, AI answer checks and your own audits.',
    },
    {
      title: 'Match each gap to a service you sell',
      line: 'A welcome text that never comes, an old price in AI answers, a checkout AI shoppers can’t finish. Each gap meets the service on your list that fixes it. No gap, no proposal.',
    },
    {
      title: 'Draft the proposal with its proof',
      line: 'In your brand, at your price, with the signed screenshots that show the gap. Anything not on your service list waits for you.',
    },
    {
      title: 'You send it. The agent follows up.',
      line: 'It goes from your own thread only after you approve the words, and every follow up waits for your OK too. A “no” stops it for that client.',
    },
  ],

  checks: [
    {
      group: 'What counts as a gap',
      items: [
        { title: 'A journey that breaks', line: 'A text, an email or a checkout step your check proved missing, with the screenshots and the times.' },
        { title: 'A wrong answer', line: 'AI assistants or listings quoting an old price or a wrong fact about your client.' },
        { title: 'A checkout AI can’t finish', line: 'A path that fails for AI shoppers, from your AI checkout test.' },
        { title: 'Nothing wrong', line: 'A client with nothing to fix gets no proposal that month.' },
      ],
    },
    {
      group: 'Every proposal',
      items: [
        { title: 'The proof', line: 'Signed, dated screenshots from your own check, so the client sees the gap for themselves.' },
        { title: 'The price', line: 'From your service list. It can’t invent a price or a discount.' },
        { title: 'The brand', line: 'Your agency’s name and look on every page.' },
        { title: 'Who it goes to', line: 'Your contact at the client, in the thread you already have. Never anyone new.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Before anything sends', line: 'Every proposal and every follow up waits for your OK.' },
        { title: 'At a no', line: 'A “no” or a “not now” stops it for that client until a new gap and your OK.' },
        { title: 'No guarantees', line: 'A proposal shows the gap and the service that fixes it, never a promised result.' },
        { title: 'Outside your clients', line: 'Never. Only your own clients, and only the checks each one agreed to.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every client with a gap gets a proposal, with the proof behind it.',
    items: [
      { format: 'This month’s list', line: 'Every client, the gap your checks found and the service that fixes it, in 1 view.' },
      { format: 'Proposals, drafted', line: 'In your brand, with the price and the signed proof, waiting for your OK.' },
      { format: 'The proof pack', line: 'The screenshots and times behind each gap, as a page and a PDF the client can check.' },
      { format: 'Follow ups', line: 'Drafted in the same thread, each waiting for your OK.' },
      { format: 'Your CRM, kept current', line: 'A deal for each proposal, with the service, price, stage and next step.' },
      { format: 'A monthly note', line: 'Gaps found, proposals sent, each yes and no, and anything waiting on you.' },
    ],
  },

  settings: [
    { k: 'Clients', v: 'Every client, or the ones you pick' },
    { k: 'When', v: 'The 1st of each month, or after every check' },
    { k: 'Proof', v: 'The checks you run for each client, with their OK' },
    { k: 'Services', v: 'Your service list and prices, which it can’t change' },
    { k: 'Sends from', v: 'Your own thread with each client' },
    { k: 'Needs your OK', v: 'Every proposal and every follow up' },
    { k: 'Follow ups', v: '2 at most, a week apart, or your own rule' },
    { k: 'Stops', v: 'At a no, a not now, or a reply that needs you' },
  ],

  forWho: [
    {
      audience: 'agencies',
      line: 'Account directors start each month with a proposal for every client that needs more, and the proof to back it.',
    },
    { audience: 'founders', line: 'Run a studio or a consultancy? Every client gets the next service it needs, and you approve each proposal.' },
    { audience: 'developers', line: 'Send your own client checks through the API, and get each gap and its drafted proposal back by webhook.' },
  ],

  table: {
    heading: 'The agent drafts. You approve. Your client decides.',
    line: 'Up to 132 hours a year back, if every month is like October in the example: 1 hour to read each of 5 clients’ checks and 2 hours to draft each of 3 proposals with its proof, so 11 hours a month.',
    cols: ['The agent', 'You'],
    rows: [
      { label: 'Your checks of each client', values: ['Reads every one, each month', 'Agree them with the client'] },
      { label: 'A gap', values: ['Finds it and keeps the signed proof', 'See it the same day'] },
      { label: 'The service and its price', values: ['Picks them from your service list', 'Set the list once'] },
      { label: 'The proposal', values: ['Drafts it in your brand', 'Approve the words, then it sends from your thread'] },
      { label: 'Anything off your list', values: ['Never on its own', 'Decide'] },
      { label: 'Each follow up', values: ['Drafts it in the same thread', 'Approve it'] },
      { label: 'The yes', values: ['Logs it in your CRM', 'Agree the start date and sign with your client'] },
    ],
  },

  faq: {
    heading: 'Your clients only. Nothing goes out without your OK.',
    items: [
      {
        q: 'How do I find upsells for my agency clients without manual audits?',
        a: 'Obsession’s Client upsells reads the checks you already run on each client with their OK, matches every gap to a service you sell, and drafts the proposal with your price and the signed proof for your OK.',
      },
      {
        q: 'Which clients does Client upsells look at?',
        a: 'Client upsells looks only at your own clients, and only through the checks each one agreed to. It never contacts anyone at a client to find a gap.',
      },
      {
        q: 'Where does the proof come from?',
        a: 'Client upsells takes it from the checks you already run for each client: mystery shops, AI checkout tests, AI answer checks and your own audits. Every screenshot is signed and dated, so the client can check it.',
      },
      {
        q: 'Does the agent write to my clients?',
        a: 'Never as itself or as you: the Client upsells agent drafts the proposal in your own thread, and it goes only after you approve the words. Every follow up waits for your OK too.',
      },
      {
        q: 'Can Client upsells change our prices?',
        a: 'No. Client upsells uses your service list and your prices. Anything else waits for you.',
      },
      {
        q: 'Does a proposal promise results?',
        a: 'No. A Client upsells proposal shows the gap, the proof and the service that fixes it. Never a guarantee.',
      },
      {
        q: 'What if a client says no?',
        a: 'Client upsells stops for that client and logs why. Nothing more until a new gap and your OK.',
      },
      {
        q: 'What if nothing is wrong?',
        a: 'Then Client upsells sends no proposal. In the example, 2 of the 5 clients had no gap and got nothing that month.',
      },
      {
        q: 'What’s it worth?',
        a: 'Client upsells gives up to 132 hours a year back, if every month is like October in the example: 1 hour to read each of 5 clients’ checks and 2 hours to draft each of 3 proposals with its proof, so 11 hours a month.',
      },
      {
        q: 'How is Client upsells different from Mystery shopper?',
        a: 'Client upsells turns what your checks find into the next service, with the proposal ready for your OK. Mystery shopper goes through a client’s business as a customer does and shows what breaks.',
      },
    ],
  },

  final: {
    heading: 'Bring every client the next service they need.',
    sub: 'Join the waitlist. Client upsells comes ready to read your client checks and draft each proposal in your own thread.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-upsells-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'upsells',
    },
  },
}
