import type { Page } from '../types'

/* Home (/). Generalised and industry agnostic: an agency, a founder, a salesperson, a marketer and a developer each
   see in 5 seconds that it's for them, across B2B SaaS, stores, services and any business.
   The story: what Obsession is > how it works (1 flow, 4 steps) > the gap (today vs with Obsession) > the 4 jobs >
   who it's for > recipes > the real September store check, in every output > developers > questions > the waitlist.
   Every console run is an example and says so in its ledger line. The only real run is the September store check
   (outputs and the third proof fact): 4 test customers, 48 hours watched, 2 full baskets, 0 reminders.
   Screens, each once: how (agencytask, templates, kit, run: all in the agency workspace), the 4th job, a typed task
   (compose), who it's for (board, leads, brief, inbox, dev), developers (qa). */

export const page: Page = {
  meta: {
    path: '/',
    title: 'Obsession · Intelligence infrastructure for commercial teams',
    description:
      'Declared AI agents with their own inbox, phone number and browser sign up, shop, ask the bot and check at every company on your list. You get signed proof.',
    answer:
      'Obsession is the intelligence infrastructure for commercial teams: declared AI agents, each with its own identity, inbox, phone number and browser, that do business with other companies for you. They sign up, shop, ask the bot, chase and check at every company on your list, continuously, sign every step and send you the proof and your next move.',
    ogImage: '/og/home.png',
  },

  hero: {
    pill: 'Declared AI agents, every step signed',
    headline: 'The intelligence infrastructure for commercial teams',
    typed: [
      'Shop our client’s store as 4 customers, with their OK',
      'Find which prospects never send a welcome email',
      'Log every offer our 3 rivals send',
      'Brief me before Thursday’s call',
      'Test our onboarding after every release',
      'Time how fast our clinics answer a new lead',
      'Chase every invoice over 30 days',
    ],
    sub: 'AI agents with their own inbox, phone number and browser sign up, shop, ask the bot and chase at every company on your list, continuously. You get the proof and your next move.',
    capture: {
      kind: 'waitlist',
      source: 'home-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to tell you about Obsession, and nothing else.',
      roles: {
        question: 'What should we set up first for you?',
        options: ['Agency', 'Founder', 'Sales', 'Marketing', 'Developer', 'Something else'],
      },
      interest: 'any',
    },
    proof: [
      { value: 'Every company', label: 'on your list, at once' },
      { value: 'Continuously', label: 'and again after every fix' },
      { value: '0 basket reminders', label: 'in 48 hours, found on a real store' },
    ],
    consoleLabel: 'Example runs',
    demos: [
      {
        tab: 'Track rivals',
        recipe: 'competitor',
        task: 'Join the emails and texts of our client’s 3 rivals. Log every offer, price change and public ad, continuously.',
        targets: 'Rival A, B and C, coffee subscriptions',
        journey: ['Sign up, box ticked', 'Opt in to texts', 'Read the ads they run in public', 'Check prices daily'],
        schedule: 'Daily at 07:00',
        report: 'Weekly digest, Slack when anything changes',
        kit: ['Agent ID, declared as AI', '3 inboxes', '3 phone numbers', 'Browser set to the UK'],
        events: [
          { time: 'Mon 07:02', text: 'Signs up at Rival A, B and C, declared as AI.' },
          { time: 'Mon 07:04', text: 'Rival B welcome email: 15% off your first bag.' },
          { time: 'Tue 19:30', text: 'Rival A text: a free grinder with every 6 month plan.' },
          { time: 'Thu 08:15', text: 'Rival C: free delivery now from £20, down from £30.' },
          { time: 'Fri 11:40', text: 'Rival A starts 9 new public ads, 6 leading with the grinder.' },
        ],
        finding: 'Rival A leads with a free grinder on 6 month plans, by text and in 6 of its 9 new ads.',
        fix: 'A counter offer drafted for your client’s Friday email. Sent after your OK.',
        ledger: 'Example run. Every email, text and ad signed and dated.',
      },
      {
        tab: 'Start a rival’s trial',
        recipe: 'trial',
        task: 'Start Rival A’s free trial with no card. Show me every email and offer it sends, and where it goes quiet.',
        targets: 'Rival A, a payroll SaaS',
        journey: ['Sign up, no card', 'Ask the bot, never staff', 'Log every email and offer', 'Close if a rep writes or calls'],
        schedule: 'Daily, until the trial ends',
        report: 'Talking points in your CRM, PDF timeline',
        kit: ['Agent ID, declared as AI', 'Own inbox', 'Own browser', 'Watched until the trial ends'],
        events: [
          { time: 'Day 1, 10:00', text: 'Signs up as a declared AI agent. No card asked.' },
          { time: 'Day 1, 10:02', text: 'Welcome email, then a setup checklist with 6 steps.' },
          { time: 'Day 1, 10:15', text: 'Asks the bot about pricing. It says: ask sales.' },
          { time: 'Day 3, 09:00', text: 'Email 2. Then nothing for 3 days.' },
          { time: 'Day 6, 14:12', text: 'A rep writes. The trial closes with no reply sent. That email is the last record.' },
        ],
        finding: 'Rival A’s bot can’t answer pricing, and its trial emails stop after day 3.',
        fix: '3 talking points drafted for your reps, each linked to its screenshot.',
        ledger: 'Example run. It never replied, and every step is signed.',
      },
      {
        tab: 'Qualify prospects',
        recipe: 'prospect',
        task: 'Join the emails and texts of the 60 gyms on our list. Keep the ones that never follow up, with proof.',
        targets: '60 gyms, from Clay',
        journey: ['Join emails and texts', 'Ask the bot, never staff', 'Wait 7 days', 'Check again on day 30'],
        schedule: 'Day 1, then days 7 and 30',
        report: 'Clay columns, a proof link each',
        kit: ['Agent ID, declared as AI', '60 inboxes', '60 phone numbers', 'Watched for 30 days'],
        events: [
          { time: 'Day 1, 09:00', text: 'Joins the emails and texts of 60 gyms, declared as AI.' },
          { time: 'Day 1, 09:20', text: 'Asks each chat bot about a first class. 6 hand over to a person, so the step ends.' },
          { time: 'Day 3', text: '38 welcome emails arrive. 22 gyms send nothing.' },
          { time: 'Day 7', text: 'Checked again: 4 sent late. 18 still silent.' },
          { time: 'Day 30', text: 'Checked again: 3 fixed it, so they drop off your list.' },
        ],
        finding: '15 of 60 gyms never sent a welcome email in 30 days.',
        fix: '15 proof links and openers drafted in Clay. You send each one yourself.',
        ledger: 'Example run. Each gym can open its own dated, signed proof.',
      },
      {
        tab: 'Keep accounts',
        recipe: 'account-watch',
        task: 'With their OK, watch our 20 biggest accounts as their customer. Flag any that look ready to leave or grow.',
        targets: '20 accounts, from your CRM',
        journey: ['Join each account’s emails, with its OK', 'Read its public pages', 'Read usage you connect', 'Flag risk and growth'],
        schedule: 'Every morning, continuously',
        report: 'Slack alert, note in your CRM',
        kit: ['Agent ID, declared as AI', '20 inboxes', 'Own browser', 'Your CRM, connected by you'],
        events: [
          { time: 'Mon 08:00', text: 'Joins the emails of your 20 biggest accounts, with their OK, declared as AI.' },
          { time: 'Tue 09:10', text: 'The pet food account’s emails now come from Rival B’s platform.' },
          { time: 'Wed 08:00', text: 'Its usage is down 38% in the CRM you connected.' },
          { time: 'Thu 08:00', text: 'The outdoor gear account opens 2 new countries on its site.' },
          { time: 'Thu 08:05', text: 'A save plan and an upgrade note drafted for each owner.' },
        ],
        finding: 'The pet food account now sends from Rival B’s platform. The outdoor gear account is ready to grow.',
        fix: 'A save call and an upgrade offer drafted in your CRM. You send them.',
        ledger: 'Example run. Every signal linked to its screenshot and date.',
      },
      {
        tab: 'Check a release',
        recipe: 'delivery',
        task: 'After every release, sign up to our app as a new customer and live its first 14 days. Tell me what breaks.',
        targets: 'Your app, UK and US',
        journey: ['Sign up by text code', 'Onboard, reset password', 'Reach the end of the trial', 'Stop before payment'],
        schedule: 'Every release, and Mondays',
        report: 'Slack alert, ticket drafted',
        kit: ['Agent ID, declared as AI', 'Fresh inbox', 'UK and US numbers', 'Phone and desktop'],
        events: [
          { time: 'Day 1, 09:00', text: 'Release 3.6 ships. Test customer 6 signs up. Code by text in 8 seconds.' },
          { time: 'Day 1, 09:03', text: 'Welcome email in 3 minutes. Setup link opens on phone and desktop.' },
          { time: 'Day 6, 10:20', text: 'Password reset email in 40 seconds. Link works on phone.' },
          { time: 'Day 13, 18:00', text: 'Trial end reminder due. Nothing by email or text.' },
          { time: 'Day 13, 18:02', text: 'Slack alert with the day, the screenshot and a drafted ticket.' },
        ],
        finding: 'After release 3.6, the trial end email stopped. Customer 5 got it. Customer 6 didn’t.',
        fix: 'Fix ticket drafted for your tracker. Customer 7 checks it on its day 13.',
        ledger: 'Example run. Every email, text and code timed and signed.',
      },
      {
        tab: 'Get paid',
        recipe: 'get-paid',
        task: 'Chase every invoice over 30 days until it’s paid. Email first, then call on day 7.',
        targets: '14 invoices, from your accounts tool',
        journey: ['Email a reminder', 'Call on day 7', 'Answer what it can', 'Log every promise'],
        schedule: 'Every weekday until paid',
        report: 'Daily email, a sheet of promises',
        kit: ['Agent ID, names your firm', 'Billing inbox', 'Phone number', 'Accounts tool, connected by you'],
        events: [
          { time: 'Day 1, 09:00', text: '14 reminders sent by a declared AI agent for your firm.' },
          { time: 'Day 2, 11:20', text: '5 customers reply. 3 give a date to pay.' },
          { time: 'Day 7, 10:00', text: '6 calls made. 1 customer says a March visit was cancelled. Flagged for you.' },
          { time: 'Day 8, 09:30', text: 'Your reply sent after your OK, with the visit log attached.' },
          { time: 'Day 12, 16:00', text: '9 of 14 paid. 3 more have a date.' },
        ],
        finding: '9 of 14 overdue invoices paid in 12 days. 3 more promised by Friday.',
        fix: 'The last 2 come to you with every email and call attached.',
        ledger: 'Example run. Every email, call and promise signed and dated.',
      },
      {
        tab: 'Type any task',
        recipe: 'task',
        task: 'Find the stockists still showing our old ingredients list. Send each the new product pack, and check until every page is right.',
        targets: '40 stockists, from a CSV',
        journey: ['Check each stockist’s pages', 'Send the new product pack', 'Chase after 3 days', 'Check the pages again'],
        schedule: 'Daily, until every page is right',
        report: 'Email digest, a sheet of every page',
        kit: ['Agent ID, names your brand', 'Own inbox for replies', 'Own browser', 'Your OK before it writes'],
        events: [
          { time: 'Day 1, 09:00', text: 'Checks the pages of 40 stockists. 11 still show the old ingredients list.' },
          { time: 'Day 1, 10:30', text: 'You OK the email. The product pack goes to all 11 from the agent’s own inbox, for your brand.' },
          { time: 'Day 3, 14:00', text: '6 pages updated. The other 5 get a reminder.' },
          { time: 'Day 6, 09:00', text: 'Pages checked again: 10 of 11 right. 1 says its site changes in November.' },
          { time: 'Day 6, 09:05', text: 'November logged. The agent checks that page again then.' },
        ],
        finding: '10 of 11 stockists now show your new ingredients list, each page captured.',
        fix: 'The last one is booked for a fresh check in November.',
        ledger: 'Example run. Every page, email and reply signed and dated.',
      },
    ],
  },

  how: {
    heading: 'Pick the job and the companies. Agents bring back the proof.',
    sub: 'A recipe comes with its agents, inboxes and schedule already set up. Type a task and Obsession sets them up for you.',
    steps: [
      {
        title: 'Pick a recipe, type a task, or build your own',
        line: 'Recipes cover the jobs teams repeat. For anything else, type it in plain words or use the API.',
        screen: 'agencytask',
      },
      {
        title: 'Add the companies',
        line: 'Rivals, prospects, accounts, suppliers, even your own business. Every company on your list, from wherever it lives.',
        screen: 'templates',
        chips: ['Paste a list', 'Upload a CSV', 'Connect Clay', 'API'],
      },
      {
        title: 'Declared AI agents run it',
        line: 'Each gets its own ID, inbox, phone number and browser, says it’s AI, and keeps at it continuously.',
        screen: 'kit',
      },
      {
        title: 'You get the proof and your next move',
        line: 'Every step signed and dated, by email, PDF, Slack, a sheet, Clay, your CRM or a webhook.',
        screen: 'run',
      },
    ],
  },

  gap: {
    heading: 'Most tools read what a company publishes. Obsession goes through it as a customer.',
    sub: 'It signs up, asks the bot, waits days for the follow up and keeps every receipt.',
    rows: [
      { today: 'Lead lists sell everyone the same names', obsession: 'Each company comes with proof of what it actually does' },
      {
        today: 'AI assistants act as you, from your own inbox and logins',
        obsession: 'Agents have their own ID, inbox and number, and say they’re AI',
      },
      { today: '1 company at a time, while you watch', obsession: 'Every company on your list at once' },
      { today: 'A single check, stale by next week', obsession: 'Checked continuously, and again after every fix' },
      { today: 'Screenshots in a folder, easy to doubt', obsession: 'Every step signed and dated, so anyone can check it' },
    ],
  },

  /* Home has no use case tabs: the 4 jobs below carry that beat. */
  uses: { heading: '', items: [] },

  jobs: {
    heading: 'Know any company the way its customers do, your own included.',
    items: [
      {
        title: 'Your competitors’ playbook',
        line: 'Every email, text and offer a rival sends a new customer, with its price changes and the ads it runs in public, on 1 timeline.',
        example: 'Rival B: free delivery now from £35, down from £50',
      },
      {
        title: 'Where prospects lose money',
        line: 'Welcome emails that never come, texts that never follow, chat bots that can’t answer. A reason to get in touch they can check in a minute.',
        example: 'Gym prospect: no welcome email in 7 days',
      },
      {
        title: 'Where your own journeys break',
        line: 'Your sign ups, baskets and bookings, or a client’s with their OK, run again after every release. You hear the moment one stops.',
        example: 'Welcome code rejected at checkout. Launch email held.',
      },
      {
        title: 'Anything else you can describe',
        line: 'Type it in plain words. Obsession sets up the agents, asks what it needs and runs it after your OK.',
        example: 'Get our supplier to credit the 40 faulty units, and chase until the credit note lands',
        screen: 'compose',
      },
    ],
  },

  audiences: {
    heading: 'Agents do the legwork behind every pitch, launch, release and renewal.',
    items: [
      {
        audience: 'agencies',
        name: 'Agencies',
        line: 'Check every client, prove every pitch, and sell it as a research service under your name.',
        screen: 'board',
        to: '/agencies',
      },
      {
        audience: 'founders',
        name: 'Founders',
        line: 'Leads with a proven gap, and a fresh test customer after every release.',
        screen: 'leads',
        to: '/founders',
      },
      {
        audience: 'sales',
        name: 'Sales',
        line: 'See what each account’s customers get, before every call and renewal.',
        screen: 'brief',
        to: '/sales',
      },
      {
        audience: 'marketing',
        name: 'Marketing',
        line: 'See every rival offer the day it lands, and check your own launches as a new customer.',
        screen: 'inbox',
        to: '/marketing',
      },
      {
        audience: 'developers',
        name: 'Developers',
        line: 'The same agents, inboxes, numbers and browsers, from your own code.',
        screen: 'dev',
        to: '/developers',
      },
    ],
  },

  recipes: {
    heading: 'Every recipe comes ready to run, and you can change any step.',
    ids: [
      'mystery',
      'competitor',
      'prospect',
      'account-watch',
      'trial',
      'prices',
      'ads',
      'email-sms',
      'speed',
      'audit',
      'delivery',
      'listings',
      'business-case',
      'get-paid',
      'supplier-quotes',
    ],
  },

  outputs: {
    heading: '2 shoppers left full baskets. 0 reminders came in 48 hours.',
    line: 'A real September check of a skincare store, name hidden: 4 test customers, watched for 48 hours. Open the same run as a PDF, an email, a Slack message, a sheet or Clay, a webhook or a workflow.',
    formats: [
      { format: 'PDF report', line: 'A report to forward to anyone: the verdicts first, then the proof behind each one.' },
      { format: 'Email', line: 'An alert the moment a verdict lands, or 1 digest on the schedule you set.' },
      { format: 'Slack', line: 'A message in the channel you choose, with the verdict and a link to the proof.' },
      { format: 'Sheet or Clay', line: 'New columns on the rows you already have: the gap, the day it was seen and a proof link.' },
      { format: 'Webhook', line: 'Every verdict as JSON, posted to your endpoint, with a link to the evidence.' },
      { format: 'Workflow', line: 'A verdict can start anything: the steps you set, then whatever you build next.' },
    ],
    cta: { label: 'Try your first shop free', to: '/sample-output#get-one' },
  },

  developers: {
    heading: '1 call starts a declared agent with its own inbox, number and browser.',
    line: 'We keep every inbox, number and browser working, wait as long as the journey takes, and post each signed step to your webhook.',
    code: `import { Obsession } from '@useobsession/sdk'

const obs = new Obsession({ apiKey: process.env.OBSESSION_KEY })

// Run a recipe at every company on your list
await obs.missions.create({
  recipe: 'competitor_tracking',
  targets: ['rival-a.example', 'rival-b.example'],
  schedule: 'daily',
  webhook: 'https://your-app.example/hooks/obsession',
})

// Or type the task, and run it after every deploy
await obs.missions.create({
  task: 'Sign up as a new user and tell me if a login code or email stops arriving',
  targets: ['your-app.example'],
  schedule: 'every_deploy',
})`,
    screen: 'qa',
    cta: { label: 'Get API access', to: '/developers' },
  },

  faq: {
    heading: 'Every agent says it’s AI. Nothing runs until you approve it.',
    items: [
      {
        q: 'What is Obsession?',
        a: 'The intelligence infrastructure for commercial teams. Declared AI agents, each with its own ID, inbox, phone number and browser, do business with other companies for you: they sign up, shop, ask the bot, chase and check at every company on your list, continuously. You get signed proof and your next move.',
      },
      {
        q: 'How is it different from an AI assistant or a data tool?',
        a: 'An assistant acts as you, from your own inbox and logins, 1 company at a time. A data tool reads what a company publishes. Obsession’s agents have their own declared identity, go through every company on your list as a customer, and come back after every fix.',
      },
      {
        q: 'Do companies know it’s an AI agent?',
        a: 'Yes. Every agent says it’s an AI agent. On your own journeys, or a client’s or account’s with their OK, it also says who it works for. At rivals and prospects it uses only what any customer can: sign ups, newsletters, text opt ins, public pages and the site’s chat bot. There it links to useobsession.com/agents and never names you.',
      },
      {
        q: 'What will the agents never do?',
        a: 'Pretend to be a person, or send cold spam. Contact a person at a prospect or rival: no forms, no emails, and if a person picks up the chat, the step ends. Start a rival’s trial that asks for a card, reply in one, or stay once a rep writes or calls. Pay on anyone else’s store, or go behind a login it wasn’t given.',
      },
      {
        q: 'What do I get back?',
        a: 'What happened, the proof and your next move. Every step is signed and dated, with the screenshots and the messages themselves, by email, PDF, Slack, a sheet, Clay, your CRM or a webhook. Next moves come drafted, and nothing goes out without your OK.',
      },
      {
        q: 'How many companies can it cover?',
        a: 'As many as you add. Every company on your list runs at once, continuously, from a pasted list, a CSV, Clay or the API.',
      },
      {
        q: 'Do I need to write code?',
        a: 'No. Pick a recipe or type the task in plain words. The API is there for developers who want to build on it.',
      },
      {
        q: 'How do I start?',
        a: 'Join the waitlist and tell us what to set up first. If you run a store, or have a client’s OK, your first mystery shop is free, with the report within 4 days.',
      },
    ],
  },

  final: {
    heading: 'Hand the legwork to declared AI agents.',
    sub: 'Tell us what to set up first: a recipe, a task in plain words, or the API.',
    capture: {
      kind: 'waitlist',
      source: 'home-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to tell you about Obsession, and nothing else.',
      roles: {
        question: 'What should we set up first for you?',
        options: ['Agency', 'Founder', 'Sales', 'Marketing', 'Developer', 'Something else'],
      },
      interest: 'any',
    },
  },
}
