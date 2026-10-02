import type { Page } from '../types'

/* Developers (/developers). Developers, and the technical founders who build on the same infrastructure as the recipes.
   The story: what Obsession is for a developer (1 API call, declared agents with their own ID, inbox, number and browser,
   signed steps to your webhook) > how it works (the 4 step flow, from code) > the code (the `developers` beat: the SDK
   call and what the webhook receives, beside the `dev` screen; render it straight after How, as James had the code at
   the top) > the gap (James's "The hard parts, run for you") > use cases a developer builds (release tests in CI,
   prospect intelligence in a product, rival monitoring as a feature, merchant checks, lead leaks for customers,
   quotes with proof) > outcomes > every kind of product > recipes > the real September store check > questions >
   "Get API access".
   1 thread runs through the page: the first console run (a typed task on every deploy), the second call in the code
   and the webhook payload are the same story: a deploy stops UK login codes, the verdict posts as Silent, CI holds the
   release, the fix passes. How step 4's `qa` screen shows the same UK login code bug caught in a release's first
   14 days, so the console run names no release number.
   Kept from James: the SDK call and the webhook payload, "The hard parts, run for you", his lede ("Signing up once is
   easy..."), the identities, browsers, waits, captures, schedules and webhooks blocks (now the gap rows), his developer
   questions ("Which languages?", a job without a recipe, what stops a run) and "Most tools read what a company
   publishes. Obsession goes through it as a customer." Kept from ours: "1 API call starts a declared agent with its own
   inbox, number and browser" ("API call", so it never reads as a phone call), "We keep every inbox, number and browser
   working", "Give each customer its own agents" (FAQ), quotes with proof and merchant checks. Removed: "The API opens
   to early access teams first", the pricing answer, the scale cap ("a thousand companies") and the real domains
   (every example domain ends in .example).
   Vocabulary: the API object is a mission (`obs.missions.create`, `mission.verdict`), as on Home and in the screens;
   the jobs are recipes.
   Every console run is an example (consoleLabel and each ledger say so). The only real run is the September store
   check (proof), never shown as signed, so the `run` screen (a signed receipt on that run) is not used here.
   Screens, each once: How (compose, templates, kit, qa), the code (dev), use cases (ship, leads, rivals, shop, inbound,
   suppliers). */

export const page: Page = {
  meta: {
    path: '/developers',
    title: 'Obsession API: AI agents with their own inbox and number',
    description:
      '1 API call starts declared AI agents with their own inbox, phone number and browser. They sign up and shop at every company you pass in and sign each step.',
    answer:
      'Obsession is the intelligence infrastructure for commercial teams. Its API gives developers declared AI agents from 1 API call, each with its own ID, inbox, phone number and browser. They sign up, shop, ask the chat bot and wait at every company the code passes in, continuously, and post each signed step to a webhook.',
    ogImage: '/og/developers.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Developers', path: '/developers' },
    ],
  },

  hero: {
    pill: 'For developers',
    headline: 'AI agents that help your product win and keep users.',
    typed: [
      'Test our sign up after every deploy',
      'Fail the build if a login code never arrives',
      'Time each customer’s reply to a test lead, with their OK',
      'Post every rival price change to our webhook',
      'Tell our users which prospects never send a welcome email',
      'Shop each merchant who opts in, every Monday',
      'Get 3 signed quotes for every order over £5,000',
    ],
    sub: 'Your code passes in the companies. Declared AI agents sign up, shop and ask the chat bot at each one, and post what they find to your webhook.',
    capture: {
      kind: 'waitlist',
      source: 'developers-hero',
      button: 'Get API access',
      placeholder: 'Your work email',
      micro: 'We keep your email to set up your API access, and nothing else.',
      roles: {
        question: 'What will you build first?',
        options: ['Release tests in CI', 'Prospect intelligence', 'Rival monitoring', 'Merchant checks', 'Something else'],
      },
      interest: 'any',
    },
    secondary: { label: 'See a real run', to: '/sample-output' },
    proof: [
      { value: '1 API call', label: 'starts an agent with its own ID, inbox, number and browser' },
      { value: 'Every company', label: 'you pass in, at once and continuously' },
      { value: 'Every step', label: 'signed, so anyone can verify it' },
    ],
    consoleLabel: 'Example runs',
    demos: [
      {
        tab: 'Every deploy',
        recipe: 'task',
        task: 'On every deploy, sign up as a new user on a UK and a US number, enter the login code and open every email link. Fail the check if a step breaks.',
        targets: 'Your own app, on every deploy',
        journey: ['Sign up with a fresh inbox', 'Enter the login code by text', 'Open every email link', 'Stop before payment'],
        schedule: 'Every deploy',
        report: 'A webhook your CI reads',
        kit: ['Agent ID, declared as AI', 'Fresh inbox each run', 'UK and US numbers', 'Deploy hook'],
        events: [
          { time: '14:02:10', text: 'A deploy calls the API. 2 fresh test users sign up.' },
          { time: '14:02:31', text: 'US login code arrives by text in 6 seconds.' },
          { time: '14:12:31', text: 'UK login code: nothing in 10 minutes. Verdict: Silent.' },
          { time: '14:12:32', text: 'Webhook posts the verdict, the SMS log and the screenshot. CI holds the release.' },
          { time: '14:40:05', text: 'Fix deployed. A fresh UK user gets the code in 7 seconds. Check passes.' },
        ],
        finding: 'The deploy stopped login codes reaching UK numbers. US codes still arrived.',
        fix: 'CI held the release. The fix passed a fresh UK sign up at 14:40.',
        ledger: 'Example run. Every text, screenshot and verdict signed.',
      },
      {
        tab: 'Prospect intelligence',
        recipe: 'prospect',
        task: 'For every account our users add, start a free trial with no card as a declared AI agent. Never reply, close it if a rep writes or calls, and add the gap to the account’s record.',
        targets: '240 accounts, from your users’ CRMs',
        journey: ['Start a trial with no card', 'Say it’s an AI agent', 'Never reply', 'Close if a rep writes or calls'],
        schedule: 'Each trial, start to end',
        report: 'A webhook per account',
        kit: ['Agent ID, declared as AI', 'Inbox per account', 'Own browser', 'Watched to trial end'],
        events: [
          { time: 'Day 1, 09:00', text: '240 accounts arrive by API. Each gets its own declared agent.' },
          { time: 'Day 1, 09:20', text: '31 skipped: their trial needs a card or a sales call.' },
          { time: 'Day 4', text: 'A rep writes at 1 account. Trial closed, no reply sent.' },
          { time: 'Day 7', text: '44 accounts silent since the welcome email.' },
          { time: 'Day 14', text: 'Trials end. 52 went quiet. Each gap posted with its receipt.' },
        ],
        finding: '52 of 208 trials sent nothing after the welcome email.',
        fix: 'Each gap lands on its account with the proof. Your users write the opener themselves.',
        ledger: 'Example run. It never replied, and every email is kept raw and signed.',
      },
      {
        tab: 'Rival monitoring',
        recipe: 'competitor',
        task: 'Sign up to every rival our customers name, read their public pricing pages daily, and post every change to our app.',
        targets: '3 rivals per customer, by API',
        journey: ['Join the newsletter', 'Opt in to texts', 'Read public pricing pages', 'Never reply'],
        schedule: 'Pages daily, inboxes continuously',
        report: 'JSON to your webhook',
        kit: ['Agent ID, declared as AI', 'Inbox per rival', 'Number per rival', 'Daily page check'],
        events: [
          { time: '07:00', text: 'Pricing pages read at 3 rivals.' },
          { time: '07:03', text: 'Rival B and Rival C: no change. Both pages saved and dated.' },
          { time: '07:04', text: 'Rival A: Pro from $49 to $59, US only. Before and after saved.' },
          { time: '07:05', text: 'Webhook posts the change. Your app alerts every customer tracking Rival A.' },
          { time: '09:12', text: 'Rival A emails its US list about the new price. Kept raw, with its headers.' },
        ],
        finding: 'Rival A raised Pro from $49 to $59 in the US. The UK price held.',
        fix: 'Your customers see the change in their feed, with the signed before and after.',
        ledger: 'Example run. Every page, email and text signed and dated.',
      },
      {
        tab: 'Merchant checks',
        recipe: 'mystery',
        task: 'Every Monday, shop each merchant who opted in, as an AI agent working for our app. Leave a basket, stop before payment, and check our basket email arrives.',
        targets: '1,200 merchants who opted in',
        journey: ['Browse the store', 'Leave a basket', 'Stop before payment', 'Watch the inbox for 48 hours'],
        schedule: 'Every Monday',
        report: 'A webhook per merchant',
        kit: ['Agent ID, declared as AI', 'Inbox per merchant', 'Own browser', '48 hour watch'],
        events: [
          { time: 'Mon 08:00', text: '1,200 stores shopped at once, each by a declared agent for your app.' },
          { time: 'Mon 08:45', text: 'Baskets left at all 1,200 stores. Nothing bought.' },
          { time: 'Mon 09:45', text: 'Basket emails start to arrive. Each one timed and kept raw.' },
          { time: 'Wed 08:45', text: '48 hours up. 37 stores sent no basket email.' },
          { time: 'Wed 08:46', text: '37 verdicts posted. Your app flags each merchant with the proof.' },
        ],
        finding: '37 of 1,200 stores sent no basket email in 48 hours.',
        fix: 'Each of the 37 merchants sees the proof in your app, with the step to fix it.',
        ledger: 'Example run. Every basket and inbox check signed.',
      },
    ],
  },

  how: {
    heading: 'Your code picks the job and the companies. Declared agents do the rest.',
    sub: 'A recipe comes with its agents, inboxes and numbers already set up. Type a task and the system sets them up for you, or build your own from the same parts.',
    steps: [
      {
        title: 'Pick a recipe, type a task, or build your own',
        line: 'The same call takes a recipe name, a task in plain words, or your own steps.',
        screen: 'compose',
        chips: ['Pick a recipe', 'Type a task', 'Build your own'],
      },
      {
        title: 'Pass in the companies',
        line: 'An array in the call, a CSV, a Clay table or a pasted list. Every company gets its own agent.',
        screen: 'templates',
        chips: ['API', 'Upload a CSV', 'Connect Clay', 'Paste a list'],
      },
      {
        title: 'Declared AI agents run it',
        line: 'Each gets its own ID, inbox, phone number and browser, says it’s AI, and waits as long as the journey takes.',
        screen: 'kit',
      },
      {
        title: 'You get the proof and your next move',
        line: 'Each step comes back signed, with its screenshot and raw message, and the fix drafted for your tracker. By webhook, email, PDF, Slack, a sheet, Clay or your CRM.',
        screen: 'qa',
      },
    ],
  },

  developers: {
    heading: '1 API call starts the agents. Every signed step posts to your webhook.',
    line: 'We keep every inbox, number and browser working. Your code reads the verdict and its proof.',
    code: `import { Obsession } from '@useobsession/sdk'

const obs = new Obsession({ apiKey: process.env.OBSESSION_KEY })

// Run a recipe at every company on your list
await obs.missions.create({
  recipe: 'competitor_tracking',
  targets: ['rival-a.example', 'rival-b.example', 'rival-c.example'],
  schedule: 'daily',
  webhook: 'https://your-app.example/hooks/obsession',
})

// Or type the task, and run it after every deploy
await obs.missions.create({
  task: 'Sign up as a new user and tell me if a login code or email stops arriving',
  targets: ['your-app.example'],
  schedule: 'every_deploy',
  webhook: 'https://your-app.example/hooks/obsession',
})

// Example: POST https://your-app.example/hooks/obsession
{
  "event": "mission.verdict",
  "mission": "msn_4c1e",
  "target": "your-app.example",
  "step": "login_code_sms",
  "verdict": "silent",
  "finding": "No login code in 10 minutes on a UK number",
  "at": "2026-10-01T14:12:31+01:00",
  "agent": { "id": "agt_21c9", "declared": true },
  "evidence": {
    "screenshot": "https://api.useobsession.com/v1/evidence/img_77d0",
    "sms_log": "https://api.useobsession.com/v1/evidence/sms_41a9"
  },
  "receipt": {
    "signature": "ed25519:7f3a…c91e",
    "verify": "https://useobsession.com/r/7f3a"
  }
}`,
    screen: 'dev',
    cta: { label: 'Get API access', to: '#join' },
  },

  gap: {
    heading: 'The hard parts, run for you.',
    sub: 'Signing up once is easy. Doing it at every company on your list, waiting for every reply and proving what arrived is the part nobody wants to build.',
    rows: [
      {
        today: 'A headless browser, an inbox API and a rented number, wired together by hand',
        obsession: 'Each agent gets its own declared ID, inbox, phone number and browser from 1 API call',
      },
      {
        today: 'Scrapers read what a company publishes',
        obsession: 'Agents go through it as a customer and keep everything that arrives',
      },
      {
        today: 'A script holds a browser open while it waits days for a reply',
        obsession: 'Agents keep their place as long as the journey takes, with no browser held open',
      },
      {
        today: 'Screenshots in a bucket that nobody else can check',
        obsession: 'Every step signed, with the raw message and its headers, so your users can verify it',
      },
      {
        today: 'Consent rules and spend limits coded into every script',
        obsession: 'Built into the engine: agents say they’re AI, never message staff at a rival or prospect, and never pay on anyone else’s store',
      },
      {
        today: '1 company at a time, in a loop you babysit',
        obsession: 'Every company you pass in at once, and again after every fix',
      },
    ],
  },

  uses: {
    heading: 'Give your CI and every customer in your product their own agents.',
    items: [
      {
        tab: 'Every deploy',
        moment: 'Thursday 06:02. Release 2.15 is green. The launch email goes at 08:00.',
        outcome: 'Hold the launch email when a real sign up breaks, before customers find it.',
        line: 'Your deploy calls 1 endpoint. A fresh test user signs up, enters the login code from a real text, opens every email and tries the launch code, then stops before payment. The verdict reaches your webhook before the 08:00 send.',
        whyOnly: 'A fresh inbox and a real number every run, so your app sees a stranger, not your team’s test account.',
        recipe: 'audit',
        screen: 'ship',
      },
      {
        tab: 'Prospect intelligence',
        moment: 'Monday 09:00. Your users import 50 accounts, and every one looks the same.',
        outcome: 'Show each user which accounts have the gap their product fixes, with proof.',
        line: 'For each account your users add, an agent joins the newsletter or starts a free trial with no card, logs what arrives, never replies and closes the trial if a rep writes or calls. The gap lands on the account record.',
        whyOnly: 'Contact data says who to email. Agents show what each company actually sends its customers, with signed proof your users can check.',
        recipe: 'prospect',
        screen: 'leads',
      },
      {
        tab: 'Rival monitoring',
        moment: 'Friday 15:00. A customer asks why your app missed a rival’s price rise.',
        outcome: 'Ship rival tracking as a feature, with every change signed and dated.',
        line: 'Agents sign up to every rival your customers name, read their public pricing pages daily and keep every email and text. Each change posts to your app as JSON.',
        whyOnly: 'Signed up to every rival at once, continuously, as a declared AI agent that never replies.',
        recipe: 'competitor',
        screen: 'rivals',
      },
      {
        tab: 'Merchant checks',
        moment: 'Sunday 22:00. A merchant says your basket emails stopped. Your logs say sent.',
        outcome: 'Prove your app works on every merchant’s store, every week.',
        line: 'Each merchant who opts in gets shopped every Monday by a declared AI agent working for your app. It leaves a basket, stops before payment and watches its inbox for 48 hours.',
        whyOnly: 'What a real customer gets at every store at once, not what your logs say, with the proof attached.',
        recipe: 'mystery',
        screen: 'shop',
      },
      {
        tab: 'Lead leaks',
        moment: 'Tuesday 13:00. A customer’s demo form has sent leads to nobody since Friday.',
        outcome: 'Show each customer how fast their own team really replies.',
        line: 'With each customer’s OK, a labelled test lead fills in their form, opens their chat and calls their sales line daily, then times every reply and who owned it in the CRM.',
        whyOnly: 'Its own inbox and number on every channel, so it times the reply a real lead gets.',
        recipe: 'speed',
        screen: 'inbound',
      },
      {
        tab: 'Quotes with proof',
        moment: 'Monday 08:30. A supplier wants 18% more from 1 Nov, and finance wants 3 quotes on file.',
        outcome: 'Attach 3 signed quotes to every order over the limit, ready for audit.',
        line: 'When an order passes the limit your users set, a declared agent asks other suppliers to quote, chases until each price is in writing and returns them to your app. It never pays.',
        whyOnly: 'Its own buying inbox and number, and every quote dated and signed, so an auditor can check it.',
        recipe: 'supplier-quotes',
        screen: 'suppliers',
      },
    ],
  },

  outcomes: {
    heading: 'Ship the feature, not the infrastructure under it.',
    items: [
      {
        value: 'Up to 12 weeks',
        label: 'of build skipped: identities, inboxes, numbers, browsers, waits and signed receipts, at 2 weeks each',
      },
      { value: '0', label: 'inboxes, numbers or browsers for your team to keep alive' },
      { value: 'Every deploy', label: 'tested by a fresh sign up before a customer finds the break' },
      { value: 'Every customer', label: 'in your product gets its own agents, with nothing more to build' },
    ],
  },

  kinds: {
    heading: 'Wherever your users deal with other companies, agents can do the legwork.',
    label: 'Pick your product',
    items: [
      {
        name: 'SaaS products',
        line: 'Every deploy tested as a new user, and the first 14 days of emails and texts timed.',
        recipes: ['audit', 'delivery'],
      },
      {
        name: 'Sales and CRM tools',
        line: 'Each account your users add, checked as a customer, with the gap on its record.',
        recipes: ['prospect', 'account-watch', 'speed'],
      },
      {
        name: 'Competitive intelligence',
        line: 'Every rival your users name, signed up to, priced and logged as JSON.',
        recipes: ['competitor', 'prices', 'ads', 'email-sms'],
      },
      {
        name: 'Ecommerce apps and platforms',
        line: 'Each merchant who opts in, shopped weekly to prove your app works.',
        recipes: ['mystery', 'delivery', 'audit'],
      },
      {
        name: 'Procurement and finance tools',
        line: '3 signed quotes on every order over the limit, and every overdue invoice chased.',
        recipes: ['supplier-quotes', 'get-paid'],
      },
      {
        name: 'Marketplaces',
        line: 'Both sides of your own marketplace tested as a buyer and a seller after every release.',
        recipes: ['audit', 'delivery', 'listings'],
      },
      {
        name: 'Booking and local platforms',
        line: 'Every venue’s hours, listings and booking link checked, with each venue’s OK.',
        recipes: ['listings', 'audit', 'speed'],
      },
      {
        name: 'Agencies with a developer',
        line: 'Your own recipes for every client, with their OK, and the results in your own dashboard.',
        recipes: ['mystery', 'competitor', 'ads', 'audit'],
      },
      {
        name: 'Anything else',
        line: 'If a customer can do it in a browser, an inbox or by text, your code can send an agent to do it.',
        recipes: [],
      },
    ],
  },

  recipes: {
    heading: 'Every recipe runs from 1 API call, at every company you pass in.',
    ids: ['audit', 'delivery', 'prospect', 'competitor', 'prices', 'mystery', 'speed', 'email-sms', 'supplier-quotes'],
  },

  proof: {
    heading: '2 test customers left full baskets on a real store. 0 reminders came in 48 hours.',
    line: 'In September, 4 test customers shopped a skincare store, name hidden, and agents watched every inbox for 48 hours. The shoppers who left a £40 gift set at 02:57 and £21 of deodorant at 03:11 got no reminder.',
    cta: { label: 'Open the real run', to: '/sample-output' },
  },

  faq: {
    heading: 'Every agent says it’s AI. Every step comes back signed.',
    items: [
      {
        q: 'What is the Obsession API?',
        a: 'The infrastructure behind every recipe, from your own code. 1 API call starts declared AI agents, each with its own ID, inbox, phone number and browser. They sign up, shop, ask the chat bot, chase, check and wait at every company you pass in, continuously, and post each signed step to your webhook.',
      },
      {
        q: 'Which languages can I use?',
        a: 'A TypeScript SDK, @useobsession/sdk, on a plain HTTP API, so any language can call it.',
      },
      {
        q: 'How is it different from a scraper or a browser agent?',
        a: 'Most tools read what a company publishes. Obsession goes through it as a customer. A browser agent acts as you, from your own accounts. Obsession’s agents have their own declared ID, inbox and number, go through every company you pass in at once, and keep every message raw, with its headers, a screenshot and a signature.',
      },
      {
        q: 'Can I run a job that isn’t a recipe?',
        a: 'Yes. Type it as a task and the system sets up the agents it needs, or set every step yourself. A recipe is a job with its infrastructure already set up.',
      },
      {
        q: 'How do my users check a result?',
        a: 'Every step comes with a receipt: the screenshot, the raw message, the time and a signature anyone can verify against our public key.',
      },
      {
        q: 'Do companies know it’s an AI agent?',
        a: 'Yes. Every agent says it’s AI. On your own journeys, or a customer’s with their OK, it says who it works for. At rivals and prospects it uses only public sign ups, pages and the site’s chat bot, links to useobsession.com/agents, and never names you or your customer.',
      },
      {
        q: 'What stops an agent doing something it shouldn’t?',
        a: 'The rules are in the engine, not a setting. An agent never pretends to be a person, sends cold spam or asks staff at a prospect or rival anything: if a person picks up the chat, the step ends. It starts only trials that need no card, never replies in them, and closes them the moment a rep writes or calls. It never pays on anyone else’s store, goes behind a login it wasn’t given or gets round a CAPTCHA.',
      },
      {
        q: 'Can my customers use it inside my product?',
        a: 'Yes. Give each customer its own agents and show every result in your own product. Agents touch a customer’s own store, forms or logins only with that customer’s OK.',
      },
      {
        q: 'How do I get started?',
        a: 'Ask for API access and tell us what you’ll build. We set up your keys and your first mission with you.',
      },
    ],
  },

  final: {
    heading: 'Send your first agent from code.',
    sub: 'Tell us what you’d build, and we’ll set up your API access with you. Every agent declared, every step signed.',
    capture: {
      kind: 'waitlist',
      source: 'developers-final',
      button: 'Get API access',
      placeholder: 'Your work email',
      micro: 'We keep your email to set up your API access, and nothing else.',
      roles: {
        question: 'What will you build first?',
        options: ['Release tests in CI', 'Prospect intelligence', 'Rival monitoring', 'Merchant checks', 'Something else'],
      },
      interest: 'any',
    },
  },
}
