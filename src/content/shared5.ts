/* The blocks more than 1 page shows, written once (9 Nov rewrite, after Home): how a list of companies is added and
   kept, the ask section, the ways in for /developers, the comparison and open source. Obsession is the web behind the
   login: what companies show only signed-up customers, dated with its receipt. A page imports the ones it shows and
   overrides what it needs; Home overrides most of `life`. */
import type { Ask, AskExample, Compare, Life, OpenSource, Ways } from './types'

/* How it works, as breadth first: a list of companies added on Monday morning, the first emails within minutes, then
   every move after, for months. The 3 lanes are Company 1, 2 and 3. Home keeps `axis.start`, `axis.ticks` and `more`
   from here and writes the rest itself. */
export const life: Life = {
  heading: 'Name 5 companies or 10,000. What they send arrives for months.',
  line: 'No spare inbox, no spreadsheet. Obsession signs up at each company as the customer profile you pick and keeps the account open, so every email, price cut and new offer joins the index the day it arrives.',
  list: 'companies.csv · 10,000 companies',
  axis: {
    start: 'Monday 09:00',
    ticks: [
      { day: 1, label: 'Day 1' },
      { day: 7, label: 'Day 7' },
      { day: 30, label: 'Day 30' },
    ],
    end: 'Day 90: every message from all 10,000, kept',
  },
  lanes: [
    { name: 'Company 1', wakes: [{ day: 0.006, label: '09:09 · welcome' }, { day: 30, label: 'Day 30 · sale' }] },
    { name: 'Company 2', wakes: [{ day: 0.51, label: '21:14 · basket, 10% off' }, { day: 3, label: 'Day 3 · second reminder' }] },
    { name: 'Company 3', wakes: [{ day: 2, label: 'Day 2 · basket' }, { day: 21, label: 'Day 21 · £19' }, { day: 47, label: 'Day 47 · 30% off' }] },
  ],
  more: {
    name: '+ 9,997 more',
    days: [0.004, 0.005, 0.007, 0.008, 0.01, 0.012, 0.3, 0.5, 0.8, 1, 1.2, 2, 2.5, 3, 4, 5, 6, 7, 9, 11, 13, 14, 16, 19, 22, 24, 27, 29, 31, 34, 38, 41, 44, 49, 53, 58, 61, 66, 70, 75, 79, 84, 88],
  },
  phases: [
    { title: 'Name them', lead: 'Any input:', line: 'paste a list, connect Clay or your CRM, or ask from your own agent.' },
    { title: 'An account at each', line: 'Obsession signs up, starts the trial or fills the basket, as the customer profile and country you pick.' },
    { title: 'It stays open', line: 'New emails, prices and offers keep arriving, at 5 companies or 10,000.' },
    { title: 'Each one dated', line: 'The email, page or price, kept as it arrived, with its time and its sender checked.' },
  ],
}

/* The ask section: the index as something you ask, from the AI you already work in. Each page gives its own areas and
   3 examples; these parts are the same everywhere. The AI is named by product (Claude Code, Codex), never "your AI
   agent". A chat example shows the 1 line that connects Obsession to that tool (`connect`). Every company in an answer is
   invented. */
export const askShared: Pick<Ask, 'heading' | 'line' | 'from' | 'connect'> = {
  heading: 'Ask from the AI you already use.',
  line: 'None of it is on the public web, so no search engine has it. Connect Obsession once to Claude Code or Codex and ask in plain words, or ask on our website. Every answer links the emails and pages behind it.',
  from: { label: 'Ask from', items: ['Claude Code', 'Codex', 'Cursor', 'Grok', 'Muse', 'Your own code', 'Our website'] },
  connect: {
    'Claude Code': 'claude mcp add obsession https://mcp.useobsession.com',
    Codex: 'codex mcp add obsession --url https://mcp.useobsession.com',
  },
}

/* The examples the pages pick from: 1 question, the answer line by line, and what stands behind it. */
export const askExamples = {
  blackFriday: {
    where: 'Claude Code',
    q: 'Compare our Black Friday emails with our 5 closest competitors.',
    a: [
      'Fern Hollow and Northfold emailed before you did, on 20 and 21 November.',
      'Your launch email landed in Promotions. Fern Hollow’s landed in Primary.',
      'The deepest offer was 40% off, on Fern Hollow’s page and in its email.',
    ],
    receipts: 'Screenshots: 14 emails and 3 pages, linked',
  },
  prices: {
    where: 'Codex',
    q: 'Which competitors changed a price since September, and by how much?',
    a: [
      'Northfold cut its starter set from £24 to £19 on 21 October.',
      'Wrenfield kept its prices but added free delivery over £30 on 3 November.',
      'Fern Hollow raised 2 bundles by £5 and said nothing in its emails.',
    ],
    receipts: 'Screenshots: 9 pages, dated and linked',
  },
  brief: {
    where: 'Codex',
    q: 'Brief me on Wrenfield before Thursday’s call.',
    a: [
      'A new customer gets a welcome email in 4 minutes, but the basket reminder took 26 hours.',
      'Support took 31 hours to answer a delivery question. Its help page promises 24.',
      'Its emails have come from a new platform since 2 October.',
    ],
    receipts: 'Screenshots: 7 emails and 1 support thread, linked',
  },
  support: {
    where: 'Codex',
    q: 'Which of my 50 target accounts took more than a day to answer support this month?',
    a: [
      'Of the 50, 11 took more than a day, and 3 never replied.',
      'Northfold was slowest: 4 days, after promising a reply within 24 hours.',
      'All 11 are tagged in your CRM, each with its thread.',
    ],
    receipts: 'Screenshots: 50 support threads, timed and linked',
  },
  pitch: {
    where: 'Claude Code',
    q: 'Show me every email our prospect’s 3 competitors sent since September, for Thursday’s pitch.',
    a: [
      'The 3 sent 61 emails, 9 of them basket and browse reminders.',
      'Only Fern Hollow sends a welcome series. Your prospect sends none.',
      'Fern Hollow’s emails land in Primary. The other 2 land in Promotions.',
    ],
    receipts: 'Screenshots: 61 emails, linked',
  },
  promotions: {
    where: 'Codex',
    q: 'Which clients’ welcome emails landed in Promotions this month?',
    a: [
      '3 of 12: Northfold, Wrenfield and Larchwise.',
      'Wrenfield’s moved from Primary to Promotions after its new sender went live on 8 October.',
      'The other 9 landed in Primary, the same as last month.',
    ],
    receipts: 'Screenshots: 12 welcome emails, with their Gmail tabs',
  },
  /* The code way in, the same on every page: add a list, send each new fact to a webhook, read the last 30 days. Only
     the code shows. */
  watch: {
    where: 'Code',
    q: 'Add every brand on our list, and send each new email to our webhook.',
    file: 'watch.py',
    code: `import os
from obsession import Obsession

ob = Obsession(api_key=os.environ["OBSESSION_API_KEY"])

# Add the brands on the list that aren't covered yet
ob.index(["fernhollow.example", "northfold.example"], how="newsletter")

# Each new fact, at your webhook as it lands
ob.notify(on="fact.created", destination="https://example.com/hooks/obsession")

for fact in ob.facts("fernhollow.example", since="30d"):
    print(fact.seen_at, fact.kind, fact.sentence, fact.receipt_url)`,
  },
} satisfies Record<string, AskExample>

/* The ways in, on /developers: the same index and the same 5 verbs from your own agent, our website, a workflow file or
   code. Each way shows 1 real object. */
export const ways: Ways = {
  heading: 'Call it from your agent, a file or your code.',
  line: 'The same index and the same 5 verbs every way in. Connect once over MCP, or call the API.',
  ways: [
    {
      kind: 'chat',
      tab: 'In your agent',
      title: 'Ask your own agent',
      line: 'Connect Obsession once to Claude, ChatGPT, Codex or Cursor. Your agent does the reasoning and calls Obsession for what only a signed-up customer gets.',
      who: 'For anyone who already works with an AI agent.',
      setup: 'claude mcp add obsession https://mcp.useobsession.com',
      you: 'Which of our competitors changed a price or an offer this month?',
      calls: ['obsession.lookup(6 companies)', 'obsession.facts(kind="price", since="30d")', 'obsession.evidence(4 facts)'],
      reply: [
        'Tallyhop raised Pro from $49 to $59 on 2 Oct, in the US only.',
        'Pinecrate emails trial users 25% off a yearly plan on day 10. Its pricing page doesn’t.',
        'The other 4 kept their prices.',
      ],
      proof: 'Screenshots: 4 pages and 2 emails, linked',
    },
    {
      kind: 'platform',
      tab: 'On our website',
      title: 'Search one company, or ask across many',
      line: 'Search shows one company’s facts and the evidence behind each. Insights asks one question across a group and answers with a row per company.',
      who: 'For anyone without an agent of their own.',
      ask: 'Which skincare shops have sent a Black Friday offer yet?',
      recipes: ['Insights', 'Search'],
      plan: [
        { k: 'Companies', v: '8 UK skincare shops, 6 in the index' },
        { k: 'Asked as', v: 'Subscriber · UK' },
        { k: 'Answer', v: '5 of 6 have sent an offer, 20% to 40% off' },
      ],
    },
    {
      kind: 'code',
      tab: 'In a workflow file',
      title: 'Write the playbook once',
      line: 'A plain file your agent or scheduler runs every week. Obsession supplies the facts; the file says what to do with them.',
      who: 'For RevOps, GTM engineers and marketing ops.',
      file: 'playbooks/competitor-offers.md',
      code: `# Competitor offers
# Runs every Monday at 08:00

1. obsession.lookup(
     ["competitor-a.example", "competitor-b.example", "competitor-c.example"])

2. Any not covered: obsession.index(them, how="trial")

3. For each competitor: obsession.facts(since="last Monday")

4. Update battlecard.md with new offers, trial limits
   and price moves. Link every claim to its evidence.

5. Post what changed to #competitors.`,
    },
    {
      kind: 'code',
      tab: 'From code',
      title: 'Call it like any API',
      line: '5 verbs over HTTP, with SDKs and webhooks. Every key has a spending cap you set.',
      who: 'For developers and agent builders.',
      file: 'watch.py',
      code: askExamples.watch.code,
    },
  ],
  verbs: {
    heading: '5 verbs, every way in',
    items: [
      { name: 'lookup', line: 'Is a company covered, and since when.' },
      { name: 'facts', line: 'What a company showed its customers, by kind, persona, step and date.' },
      { name: 'evidence', line: 'The raw email, page or transcript behind a fact.' },
      { name: 'index', line: 'Add a company not covered yet, as the persona and country you pick.' },
      { name: 'notify', line: 'Each new fact at your webhook, the moment it lands.' },
    ],
  },
}

/* The comparison, by what each kind of source holds past the login (the same sources as Home's "Where else can I get
   it?"). Marketing shows it with a link to /compare, which shows it in full with each tool on its own line. */
export const compare: Compare = {
  heading: 'Every other source stops at the login.',
  line: 'Search engines index the pages anyone can open. Email archives and panels keep what their own list of brands sends. Obsession covers any company you name, every step short of paying.',
  cols: [
    { name: 'Obsession', who: 'The web behind the login' },
    { name: 'Search engines', who: 'Google, Exa' },
    { name: 'Email archives', who: 'MailCharts, Milled, Panoramata' },
    { name: 'Panels', who: 'Competiscan, Comperemedia' },
    { name: 'Competitive intelligence', who: 'Klue, Crayon' },
    { name: 'By hand', who: 'A spare inbox and a spreadsheet' },
  ],
  rows: [
    { label: 'Any company you name', cells: ['yes', 'yes', 'part', 'part', 'yes', 'yes'] },
    { label: 'Emails and texts after a sign-up', cells: ['yes', 'no', 'yes', 'part', 'part', 'yes'] },
    { label: 'Trial limits and signed-in prices', cells: ['yes', 'no', 'no', 'part', 'no', 'yes'] },
    { label: 'Checkout codes, quotes and cancel offers', cells: ['yes', 'no', 'part', 'part', 'no', 'yes'] },
    { label: 'What chat and support tell a customer', cells: ['yes', 'no', 'no', 'no', 'no', 'yes'] },
    { label: 'Each fact dated, with its receipt', cells: ['yes', 'no', 'part', 'part', 'part', 'part'] },
  ],
  legend: { yes: 'Yes', part: 'Partly', no: 'No' },
  foot: 'Partly means some of it: only the brands on the tool’s own list, only the sectors a panel covers, an email without its sender checked, or screenshots you keep yourself.',
  more: { label: 'See the full comparison', to: '/compare' },
}

/* Open source, on /developers only and kept short: the runtime that signs up, keeps accounts open and files each
   receipt is open; Obsession Cloud adds the index and its history. Names only, so the section reads in a glance. */
export const openSource: OpenSource = {
  heading: 'The runtime is open source.',
  line: 'The code that signs up, keeps each account open and files every receipt is yours to read and run. Obsession Cloud adds the index, with months of history at every company already covered.',
  core: {
    title: 'Open source: the runtime',
    items: [
      { name: 'Sign-ups at 10,000 companies at once' },
      { name: 'Accounts kept open for months' },
      { name: 'Every email and page stored with its receipt' },
      { name: 'The 5 verbs, over MCP and the API' },
    ],
  },
  cloud: {
    title: 'Obsession Cloud: the index',
    items: [
      'Months of history at every company covered',
      'Inboxes, phone numbers and browsers in many countries',
      'Every sign-up kept working as sites change',
    ],
  },
  cta: { label: 'See the code on GitHub', to: 'https://github.com/UseObsession' },
}
