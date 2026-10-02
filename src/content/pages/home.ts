import { consoleHeading } from '../console'
import type { Page } from '../types'

/* Home (/). Generalised and industry agnostic: an agency, a founder, a salesperson, a marketer and a developer each
   see in 5 seconds that it's for them, across B2B SaaS, stores, services and any business.
   The story: what Obsession is > who it's for (the reader picker, right under the console, for readers who know who
   they are) > how it works (1 flow, 4 steps) > the gap (today vs with Obsession) > the 4 jobs > recipes > the real
   September store check, in every output > developers > questions > the waitlist.
   Every hero screen is an example and says so (its Example tag). The only real run is the September store check
   (outputs and the third proof fact): 4 test customers, 48 hours watched, 1 shopper left a basket and 1 stopped at
   checkout, 0 reminders.
   Screens, each once: the hero tabs (pack, shop, rivals, inbound, checkout), how (templates, agencytask, kit, run: all
   in the agency workspace), the 4th job, a typed task (compose), developers (qa). The picker has no screens: each
   reader's own page shows theirs. */

export const page: Page = {
  meta: {
    path: '/',
    title: 'Obsession · Intelligence infrastructure for commercial teams',
    description:
      'Send declared AI agents with their own ID, inbox, phone, card and browser to research prospects, test journeys, track rivals, chase and negotiate for you.',
    answer:
      'Obsession is the intelligence infrastructure for commercial teams: declared AI agents, each with its own identity, inbox, phone number, card and browser, that work with other companies for you. They research prospects as their customer, test any journey, track rivals, answer and chase, buy and negotiate within the limits you set, and check the AI agents you run, at every company on your list, continuously, with every step signed.',
    ogImage: '/og/home.png',
  },

  hero: {
    pill: 'Early access',
    headline: 'The intelligence infrastructure for commercial teams',
    sub: 'Send declared AI agents, with their own ID, inbox, phone, card and browser, to research prospects as their customer, test any journey, track rivals, chase, buy and negotiate within your limits, and check the AI agents you run. Every step signed.',
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
    consoleHeading,
    /* Category tabs, each a full app screen that plays its story when chosen. AI checkout test lands with its screen
       (src/screens/html/checkout.html); until then its tab is left out. Room for a 6th: the AI agent checks. */
    screens: [
      {
        tab: 'Prospect intelligence',
        screen: 'pack',
        recipe: 'prospect',
        line: 'Becomes each prospect’s customer and proves the gap you fix.',
      },
      {
        tab: 'Mystery shopper',
        screen: 'shop',
        recipe: 'mystery',
        line: 'Any trial, store, app or booking, walked as a customer with the owner’s OK.',
      },
      {
        tab: 'Competitor tracking',
        screen: 'rivals',
        recipe: 'competitor',
        line: 'Signs up to every rival and logs each email, text, price and ad.',
      },
      {
        tab: 'Lead leaks',
        screen: 'inbound',
        recipe: 'speed',
        line: 'A labelled test lead times your speed to lead on form, chat and phone.',
      },
      {
        tab: 'AI checkout test',
        screen: 'checkout',
        recipe: 'checkout',
        line: 'A real order through every AI checkout into your store, refunded each month.',
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
        screen: 'templates',
      },
      {
        title: 'Add the companies',
        line: 'Rivals, prospects, accounts, suppliers, even your own business. Every company on your list, from wherever it lives.',
        screen: 'agencytask',
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
        example: 'Get quotes from 40 packaging suppliers for 10,000 mailer boxes, and compare',
        screen: 'compose',
      },
    ],
  },

  /* The reader picker. Each line is 70 characters at most, so all 5 sit on 3 lines in the band. The picks differ on
     every panel: recipes whose own page names that reader in its audiences (content/recipes/*.ts), echoing the line,
     and for developers the ways in from code. For the narrative edit: this heading and How's after it both put
     "Agents" up front. */
  audiences: {
    heading: 'Agents do the legwork behind every pitch, launch, release and renewal.',
    items: [
      {
        audience: 'agencies',
        name: 'Agencies',
        line: 'Check every client and prove every pitch, sold as your own research.',
        picks: ['Mystery shopper', 'Competitor tracking'],
        to: '/agencies',
      },
      {
        audience: 'founders',
        name: 'Founders',
        line: 'Leads with a proven gap, and a test customer after every release.',
        picks: ['Prospect intelligence', 'Website audit'],
        to: '/founders',
      },
      {
        audience: 'sales',
        name: 'Sales',
        line: 'See what each account’s customers get, before every call and renewal.',
        picks: ['Account watch', 'Trial teardown'],
        to: '/sales',
      },
      {
        audience: 'marketing',
        name: 'Marketing',
        line: 'See every rival offer the day it lands, and check your own launches.',
        picks: ['Email and SMS tracking', 'Delivery monitoring'],
        to: '/marketing',
      },
      {
        audience: 'developers',
        name: 'Developers',
        line: 'The same agents, inboxes, numbers and browsers, from your own code.',
        picks: ['API and webhooks', 'Release tests in CI'],
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
    heading: '1 real run. The output, however you work.',
    line: '4 test customers shopped a UK store in September, name hidden. 2 left a basket or stopped at checkout, and in 48 hours nobody wrote to them. Here’s that run as a report, an email, a Slack message, Clay columns, a webhook or a workflow.',
    facts: [
      { value: '4', label: 'journeys run' },
      { value: '2', label: 'silent' },
      { value: '15', label: 'screenshots' },
      { value: '48h', label: 'watched' },
    ],
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
    heading: '1 API call starts a declared agent with its own inbox, number and browser.',
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

  /* The trust beat (James's "Built to behave.", docs/REBUILD.md 1d), before the questions. Each rule agrees with the
     /agents page and the questions below: declared, the bot never staff, public journeys only, stop before payment,
     nothing sent, signed or spent without your OK, every step signed. Never "it follows robots.txt". */
  rules: {
    heading: 'Built to behave.',
    line: 'Any company an agent meets can ask us what it did, and keep our agents off its site with 1 email.',
    items: [
      {
        title: 'Every agent says it’s AI, and who it works for.',
        line: 'On your own journeys, quotes and renewals it names you. At rivals and prospects it says it’s from Obsession and keeps your name out.',
      },
      {
        title: 'It asks the site’s bot, never staff.',
        line: 'At prospects and rivals it only asks the chat bot. If a person picks up, the step ends, and it never writes to their staff.',
      },
      {
        title: 'Public journeys only.',
        line: 'Nothing behind a login it wasn’t given. At a rival it only starts a trial that needs no card, and closes it the moment a rep writes or calls.',
      },
      {
        title: 'It stops before payment, unless you set a budget.',
        line: 'On anyone else’s store every checkout ends before payment. On your own, it pays only with a card capped at the budget you set.',
      },
      {
        title: 'Nothing is sent, signed or spent without your OK.',
        line: 'Every run starts with your OK. Replies and quotes come only from answers and prices you’ve approved, and anything new comes to you as a draft.',
      },
      {
        title: 'Every step is signed.',
        line: 'Each one is dated and kept with its screenshot or message, so anyone can check what happened without taking our word for it.',
      },
    ],
    link: { label: 'The page our agents link to', to: '/agents' },
  },

  /* The questions under James's claim: what a reader wants to know before naming the first company. */
  faq: {
    heading: 'Before you name a company.',
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
