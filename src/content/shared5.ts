/* The October rewrite's blocks that more than 1 page shows (COPY.md, "Shared blocks"), written once: how it works as an
   agent's life, the ways in, the comparison and open source. A page imports the ones it shows; its own words live in
   its own file. Copy rules: COPY.md, "Voice". */
import type { Compare, Life, OpenSource, Ways } from './types'

/* How it works, as breadth first (COPY.md, "Home > How it works"; the 3 reviews of 19 Oct): a customer of a whole list
   by lunch on Monday, the first emails within minutes, then every move after, for months. The 3 named lanes are the hero
   stage's companies, so the 2 pictures tell 1 story. Larchwise's quiet lane is a finding too. */
export const life: Life = {
  heading: 'A customer of 1,000 companies by lunch.',
  line: 'No spare inbox, no VA, no spreadsheet. Name 5 companies or 5,000: an agent signs up to each, the first welcome emails land within minutes, and it stays on as their customer, so the basket reminder, the price cut and the win back arrive the day they’re sent.',
  list: 'brands.csv · 1,000 companies',
  axis: {
    start: 'Monday 09:00',
    ticks: [
      { day: 1, label: 'Day 1' },
      { day: 7, label: 'Day 7' },
      { day: 30, label: 'Day 30' },
    ],
    end: 'Day 90: still a customer of all 1,000',
  },
  lanes: [
    { name: 'Fern Hollow', wakes: [{ day: 0.006, label: '09:09 · welcome' }, { day: 30, label: 'Day 30 · sale' }] },
    { name: 'Larchwise', wakes: [{ day: 1, label: 'Day 1 · trial' }, { day: 3, label: 'Day 3 · then silence' }] },
    { name: 'Northfold', wakes: [{ day: 2, label: 'Day 2 · basket' }, { day: 21, label: 'Day 21 · £19' }, { day: 47, label: 'Day 47 · 30% off' }] },
  ],
  more: {
    name: '+ 997 more',
    days: [0.004, 0.005, 0.007, 0.008, 0.01, 0.012, 0.3, 0.5, 0.8, 1, 1.2, 2, 2.5, 3, 4, 5, 6, 7, 9, 11, 13, 14, 16, 19, 22, 24, 27, 29, 31, 34, 38, 41, 44, 49, 53, 58, 61, 66, 70, 75, 79, 84, 88],
  },
  phases: [
    { title: 'Name them', lead: 'Any input:', line: 'paste a list, connect Clay or your CRM, or just ask from your own agent.' },
    { title: 'Each one, a customer', line: 'An agent per company signs up, follows the ad, starts the trial or fills the basket, as you choose.' },
    { title: 'It stays a customer', line: 'Nothing for you to check. Each agent sleeps until its company does something.' },
    { title: 'It files the receipt', line: 'The email, page or price, kept as it arrived, with its time and its signature checked.' },
  ],
}

export const ways: Ways = {
  heading: 'Your AI agent can think. It can’t be a customer for thirty days.',
  line: 'Exa searches the web. Browserbase drives a browser. Obsession is the customer. Use it from your own agent, a workflow file, code or our website: the same agents and the same record every way.',
  ways: [
    {
      kind: 'chat',
      tab: 'In your agent',
      title: 'Ask your own agent',
      line: 'Connect Obsession once to Claude, ChatGPT, Codex or Cursor. Your agent does the thinking, and calls Obsession for what only a customer sees.',
      who: 'For anyone who already works with an AI agent.',
      setup: 'claude mcp add obsession https://mcp.useobsession.com',
      you: 'Compare our Black Friday emails with our five closest rivals.',
      calls: ['obsession.lookup(6 companies)', 'obsession.facts(since 1 Nov)', 'obsession.evidence(3 emails)'],
      reply: [
        'Two rivals emailed before you did, on 20 and 21 November.',
        'Your launch email landed in Promotions. Fern Hollow’s landed in Primary.',
        'The deepest offer was 40% off, and Fern Hollow’s page and email both held it.',
      ],
      proof: 'Receipts: 14 emails and 3 pages, linked',
    },
    {
      kind: 'platform',
      tab: 'On our website',
      title: 'Type what you want to know',
      line: 'Or start from a recipe. Our agent plans the watch, you approve it, and the facts arrive with their receipts.',
      who: 'For anyone without an agent of their own.',
      ask: 'Start a free trial with our five closest rivals and tell me every offer they send until it ends.',
      recipes: ['Trial teardown', 'Competitor tracking', 'Ad landing check', 'Price watch'],
      plan: [
        { k: 'Agents', v: '5, one customer of each rival' },
        { k: 'Runs', v: 'Until each trial ends, pages checked every Monday' },
        { k: 'Facts to', v: '#rivals in Slack, and a battlecard' },
      ],
    },
    {
      kind: 'code',
      tab: 'In a workflow file',
      title: 'Write the playbook once',
      line: 'A plain file your agent or scheduler runs every week. The file is the playbook; Obsession is the part your agent can’t do on its own.',
      who: 'For RevOps, GTM engineers and marketing ops.',
      file: 'playbooks/rival-trials.md',
      code: `# Rival trial watch
# Runs every Monday at 08:00

1. obsession.become_customer(
     ["rival-a.example", "rival-b.example", "rival-c.example"],
     how="trial", shared=True)

2. For each rival: obsession.facts(since="last Monday")

3. Update battlecard.md with new offers, onboarding
   changes and price moves. Link every claim to its receipt.

4. Post what changed to #rivals.`,
    },
    {
      kind: 'code',
      tab: 'From code',
      title: 'Call it like Exa',
      line: 'Five verbs over HTTP, with SDKs and webhooks. Every key has a spending cap you set.',
      who: 'For developers and agent builders.',
      file: 'watch.py',
      code: `import os
from obsession import Obsession

ob = Obsession(api_key=os.environ["OBSESSION_API_KEY"])

# Become a customer of every brand on the list
ob.become_customer(["fernhollow.example", "northfold.example"],
                   how="newsletter", shared=True)

# Push each new fact to your webhook as it lands
ob.notify(on="fact.created", destination="https://example.com/hooks/obsession")

for fact in ob.facts("fernhollow.example", since="30d"):
    print(fact.seen_at, fact.sentence, fact.receipt_url)`,
    },
  ],
  verbs: {
    heading: 'Five verbs, every way in',
    items: [
      { name: 'lookup', line: 'Which companies the shared record already covers, and since when.' },
      { name: 'facts', line: 'What a company did, as facts, each with its receipt.' },
      { name: 'evidence', line: 'The raw email, page or transcript behind a fact.' },
      { name: 'become_customer', line: 'Start customer agents, or join ones already there.' },
      { name: 'notify', line: 'New facts pushed to your webhook, Slack or CRM as they land.' },
    ],
  },
}

/* The comparison, by what each kind of tool sees (competitor research, 18 Oct 2026: each tool's own pages). Home shows
   it with a link to /compare, which shows it in full with the data behind each tool. */
export const compare: Compare = {
  heading: 'Other tools read the outside. Obsession is the customer.',
  line: 'What each kind of tool can see, from their own pages in October 2026. They hold the archives; Obsession goes past the page.',
  cols: [
    { name: 'Obsession', who: 'A customer of every company' },
    { name: 'Ad libraries', who: 'Foreplay, Meta Ad Library' },
    { name: 'Email archives', who: 'Panoramata, MailCharts, Milled' },
    { name: 'Page monitors', who: 'Visualping' },
    { name: 'Competitive intelligence', who: 'Klue, Crayon' },
    { name: 'By hand', who: 'A spare inbox and a spreadsheet' },
  ],
  rows: [
    { label: 'Any company, the day you name it', cells: ['yes', 'yes', 'part', 'yes', 'part', 'yes'] },
    { label: 'Signs up and takes part as a customer', cells: ['yes', 'no', 'part', 'no', 'no', 'yes'] },
    { label: 'Follows the ad to its page, then past it', cells: ['yes', 'part', 'no', 'no', 'no', 'yes'] },
    { label: 'Emails and texts, with the Gmail tab', cells: ['yes', 'no', 'part', 'no', 'no', 'part'] },
    { label: 'Trials, baskets and support bots', cells: ['yes', 'no', 'part', 'no', 'no', 'yes'] },
    { label: 'Proof anyone can check', cells: ['yes', 'part', 'part', 'part', 'no', 'part'] },
    { label: 'Runs without you', cells: ['yes', 'yes', 'yes', 'yes', 'part', 'no'] },
  ],
  legend: { yes: 'Yes', part: 'Partly', no: 'No' },
  foot: 'Partly means some of it: a screenshot of the landing page but nothing after it, sign ups to the tool’s own list of brands rather than the company you name, emails without the Gmail tab, or screenshots you keep yourself.',
  more: { label: 'See the full comparison', to: '/compare' },
}

/* The runtime is open source (system.md, "Open source core, Obsession Cloud"): a runtime for 1 kind of agent, the long
   lived customer, not a general harness. Every capability below is system.md's own, named without the vendors
   underneath it. The cloud is what code can't give you: months of history and the presences
   run for you. */
export const openSource: OpenSource = {
  heading: 'An open source runtime for customer agents, built to run 100,000 at once.',
  line: 'The runtime behind every Obsession agent is open: it fans out to 100,000 companies, sleeps them for free, learns each job once and runs it as code, and keeps a record that proves itself. Run it yourself, or use Obsession Cloud, where agents have been customers for months.',
  core: {
    title: 'Open source: the runtime',
    items: [
      { name: 'Fan out to 100,000 at once', line: 'One call starts an agent for every company on a list, in parallel, each with its own inbox, number and browser.' },
      { name: 'Durable agents that sleep for free', line: 'Each agent hibernates between events and wakes on mail, a reply or a clock. Months of waiting run no process.' },
      { name: 'Learns once, then runs as code', line: 'The first run on a platform is an agent’s. Its trace compiles into a program of code, typed questions and small agents.' },
      { name: 'Better with every run', line: 'A case a program can’t settle goes to a stronger agent, then becomes the program’s next version. Cost falls with each one.' },
      { name: 'Tested before it ships', line: 'Every program version replays on frozen evidence before it goes live, and changed rules re-derive facts without visiting again.' },
      { name: 'A record that proves itself', line: 'Raw evidence stored by content hash, DKIM checked on arrival with the key kept, every fact linked to its receipt.' },
      { name: 'Any model, per job', line: 'A small model for typed questions, a frontier one to learn and to catch the odd case. Swap either without touching a recipe.' },
      { name: 'Built for agents to call', line: 'Five verbs over MCP and an API, with typed schemas, webhooks instead of polling, idempotency keys and spending caps.' },
    ],
  },
  cloud: {
    title: 'Obsession Cloud: the history',
    items: [
      'Inboxes, phone numbers and browsers in many countries, run for you',
      'Customer agents that have been watching for months',
      'A shared record your agent can look up on day one',
      'About 250 integrations, connected and kept working',
      'Our website, and the agent that plans each watch',
    ],
  },
  cta: { label: 'Star it on GitHub', to: 'https://github.com/UseObsession' },
  secondary: { label: 'Read the developer guide', to: '/developers' },
}
