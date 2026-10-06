import { consoleHeading } from '../console'
import type { Page } from '../types'

/* Home (/). Generalised and industry agnostic: an agency, a founder, a salesperson, a marketer and a developer each
   see in 5 seconds that it's for them, across B2B SaaS, stores, services and any business.
   The story: what Obsession is > who it's for (the reader picker, right under the console, for readers who know who
   they are) > how it works (1 flow, 4 steps; step 1 names the 4 ways in, content/ways.ts) > the gap (today vs with
   Obsession) > the 4 jobs > the AI agent checks (the 4th way in, a short section of its own so the jobs grid holds and
   the pillar reads as a pillar; VERIFY.md 10) > recipes > the real September store check, in every output >
   developers > the rules every run follows (Built to behave., REBUILD 1d) > questions > the waitlist.
   Every hero screen is an example and says so (its Example tag). The only real run is the September store check
   (outputs and the third proof fact): 4 test customers, 48 hours watched, 1 shopper left a basket and 1 stopped at
   checkout, 0 reminders.
   No AI agent check has run yet: the botcheck tab and the callcheck section are examples under their Example tags.
   Screens, each once: the hero tabs (pack, shop, rivals, inbound, botcheck), how (templates, agencytask,
   kit, run: all in the agency workspace), the 4th job, a typed task (compose), the AI agent checks (callcheck, drawn
   for an agency and its client Dental group, as Home's workspace is; botcheck is in the hero, so it can't be here
   too), developers (qa). The picker has no screens: each reader's own page shows theirs.
   Narrative edit (3 Oct): the sub names the full range in 30 words (each agent's inbox, phone and card are in How step
   3 and the gap); each heading hands off to the next (the band's "legwork" > How's "signed proof" > the gap's "as a
   customer" > the jobs' "your own included" > the verify section's "your own AI agents"); the gap no longer repeats
   the hero's proof facts word for word; the real run reads 1 basket and 1 checkout, as on every other page. */

export const page: Page = {
  meta: {
    path: '/',
    title: 'Obsession · Intelligence infrastructure for commercial teams',
    description:
      'Obsession is the intelligence infrastructure for commercial teams: declared AI agents that do business with other companies for you, every step signed.',
    /* The sentence AI assistants quote: the 1 definition, word for word as in the visible "What is Obsession?" answer. */
    answer:
      'Obsession is the intelligence infrastructure for commercial teams: declared AI agents, each with its own identity, inbox, phone number and browser, that do business with other companies for you.',
    ogImage: '/og/home.png',
  },

  hero: {
    pill: 'Early access',
    headline: 'The intelligence infrastructure for commercial teams',
    sub: 'Deals stall, prices slip and customers leave for reasons hidden behind sign ups, inboxes and checkouts no tool can see. Obsession’s AI agents go through them as the customer at any company, yours included, with real inboxes, phone numbers and browsers. You get signed proof and your next move.',
    capture: {
      kind: 'waitlist',
      source: 'home-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to set up your first run and tell you about Obsession.',
      interest: 'any',
    },
    proof: [
      { value: 'Every company', label: 'on your list, at once' },
      { value: 'Every step signed', label: 'and dated, so anyone can check it' },
      { value: '0 basket reminders', label: 'in 48 hours, found on a real store' },
    ],
    consoleHeading,
    /* Category tabs, each a full app screen that plays its story when chosen (REBUILD 1c): Seun's 5, the 5th a whole way
       in, not 1 recipe: Check your AI agents, linking /verify, named as the nav, the footer and the breadcrumb name it.
       AI checkout test is a recipe (its page, the Recipes menu), not a Home tab. */
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
        tab: 'Check your AI agents',
        screen: 'botcheck',
        line: 'Declared test customers ask your support bot on every channel, and check each answer.',
        link: { label: 'See how it works', to: '/verify' },
      },
    ],
  },

  how: {
    heading: 'Pick the job, add the companies, and get back signed proof.',
    sub: 'A recipe comes with its agents, inboxes and schedule already set up. Type a task and Obsession sets them up for you.',
    steps: [
      {
        title: 'Pick a recipe, type a task, build your own, or check your AI agents',
        line: 'Recipes cover the jobs teams repeat. Type anything else in plain words, use the API, or point Obsession at your own AI agent.',
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
        line: 'Each gets its own ID, inbox, phone number, card and browser, says it’s AI, and keeps at it continuously.',
        screen: 'kit',
      },
      {
        title: 'You get the proof and your next move',
        line: 'What they found, with every screenshot and message behind it, by email, PDF, Slack, a sheet, Clay, your CRM or a webhook.',
        screen: 'run',
      },
    ],
  },

  gap: {
    heading: 'Most tools read what a company publishes. Obsession goes through it as a customer.',
    sub: 'It signs up, asks the bot, waits days for the follow up and keeps every receipt.',
    story: {
      label:
        'Example: most tools read hollin.example’s home page once, on Day 0, where it says “We reply within a day”, and log that the page changed. Obsession’s declared AI test customer signs up, gets the welcome email with a 10% code, and asks the site’s bot about a shirt size; the bot promises an email within a day. It checks the inbox each day: on Day 3 the follow up promised in chat has never come, and all 6 steps are signed.',
      site: 'hollin.example',
      outside: {
        name: 'Most tools',
        kind: 'page',
        day: 0,
        time: '09:14',
        title: 'Softer every wash.',
        line: 'We reply within a day',
        tag: 'Page changed',
        tally: '1 page read',
      },
      inside: {
        name: 'Obsession',
        agent: 'Test customer 1 · AI · for Your company',
        customer: 'Test customer 1 · AI',
        steps: [
          {
            kind: 'signup',
            day: 0,
            time: '09:14',
            title: 'Signed up',
            field: 'shopper1@test.useobsession.com',
            mailTitle: 'Welcome email',
            mail: 'Welcome to hollin. Here’s 10% off.',
            mailTime: '09:15',
          },
          {
            kind: 'chat',
            day: 0,
            time: '09:21',
            title: 'Asked the bot',
            ask: 'Can you help me pick a size in the Weekend Shirt?',
            reply: 'Of course. Our fit team will email you within a day.',
            promise: 'within a day',
          },
          { kind: 'wait', day: 1, time: '09:21', title: 'No email', since: '24 h' },
          { kind: 'wait', day: 2, time: '09:21', title: 'No email', since: '48 h' },
        ],
        finding: {
          day: 3,
          time: '09:21',
          title: 'The follow up promised in chat never came',
          short: 'No follow up',
          meta: '0 emails in 72 h',
        },
        tally: '6 of 6 signed',
        hash: '2b9e 04d7 … 5a10',
      },
    },
    rows: [
      { today: 'Lead lists sell everyone the same names', obsession: 'Each company comes with proof of what it actually does' },
      {
        today: 'AI assistants act as you, from your own inbox and logins',
        obsession: 'Agents have their own ID, inbox and number, and say they’re AI',
      },
      { today: '1 company at a time, while you watch', obsession: 'Your whole list at once, while you do other work' },
      { today: 'A single check, stale by next week', obsession: 'Run again on the schedule you set, with every change dated' },
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

  /* The 4th way in, after the 4 jobs (VERIFY.md 10): its own short section, linking /verify. */
  verify: {
    heading: 'Your own AI agents meet declared test customers every day.',
    line: 'Test customers call, chat and book with your AI receptionist, support bot or sales agent, check each answer against your prices and policies, and sign what they find.',
    screen: 'callcheck',
    cta: { label: 'See how it works', to: '/verify' },
  },

  /* The reader picker. Each line is 70 characters at most, so all 5 sit on 3 lines in the band. The picks differ on
     every panel and are the strongest recipe pair for that reader (3 Oct, after Client upsells, Expansion offers,
     Review requests, Ad landing check, Partner checks and the 8 AI agent checks landed): each is listed on the reader's
     own page (content/pages/*.ts recipes.ids) and in Home's recipe grid below, and its line, opening on what the reader
     does, says what the pair does for them.
     The AI agent checks are not picks: no reader page lists them, and Home gives them their own section (verify)
     linking /verify. Developers keep the ways in from code. How's heading after this one no longer opens on "Agents". */
  audiences: {
    heading: 'Agents do the legwork behind every pitch, launch, release and renewal.',
    items: [
      {
        audience: 'agencies',
        name: 'Agencies',
        line: 'Check every client as a customer, then propose its next service.',
        picks: ['Mystery shopper', 'Client upsells'],
        to: '/agencies',
      },
      {
        audience: 'founders',
        name: 'Founders',
        line: 'Find leads with a proven gap, and test every release as a customer.',
        picks: ['Prospect intelligence', 'Website audit'],
        to: '/founders',
      },
      {
        audience: 'sales',
        name: 'Sales',
        line: 'See what each account’s customers get, and spot when it needs more.',
        picks: ['Account watch', 'Expansion offers'],
        to: '/sales',
      },
      {
        audience: 'marketing',
        name: 'Marketing',
        line: 'Catch every broken ad page, and every rival offer the day it lands.',
        picks: ['Ad landing check', 'Competitor tracking'],
        to: '/marketing',
      },
      {
        audience: 'developers',
        name: 'Developers',
        line: 'Build on the same agents, inboxes, numbers and browsers in your code.',
        picks: ['API and webhooks', 'Release tests in CI'],
        to: '/developers',
      },
    ],
  },

  /* The strongest recipes of each of the 6 jobs, in pairs so every job's rows fill both columns (RecipeGrid groups them
     by job in the nav's order). Every reader pick in the band above and every hero tab's recipe is here, and the AI agent
     checks show the 2 Home already plays: the support bot (hero) and the voice agent (the verify section). */
  recipes: {
    heading: 'Every recipe comes ready to run, and you can change any step.',
    ids: [
      'prospect',
      'quotes',
      'account-watch',
      'expansion',
      'upsells',
      'reviews',
      'competitor',
      'trial',
      'prices',
      'ads',
      'mystery',
      'speed',
      'checkout',
      'adcheck',
      'audit',
      'delivery',
      'get-paid',
      'supplier-quotes',
      'support-bot',
      'voice-agent',
    ],
  },

  outputs: {
    heading: '1 real run. The output, however you work.',
    line: '4 test customers shopped a UK store in September, name hidden. 1 left a basket and 1 stopped at checkout, and in 48 hours nobody wrote to either. Here’s that run as a report, an email, a Slack message, Clay columns, a webhook or a workflow.',
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
     nothing sent, signed or spent without your OK, every step signed. Never "it follows robots.txt".
     The no-break space in "site’s bot" breaks that title after its comma. */
  rules: {
    heading: 'Built to behave.',
    line: 'Any company an agent meets can ask us what it did, and keep our agents off its site with 1 email.',
    items: [
      {
        title: 'Every agent says it’s AI, and who it works for.',
        line: 'On your own journeys, quotes and renewals it names you. At rivals and prospects it says it’s from Obsession and keeps your name out.',
      },
      {
        title: 'It asks the site’s\u00a0bot, never staff.',
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
    link: { label: 'What a declared AI agent does', to: '/agents' },
  },

  /* The questions under James's claim: what a reader wants to know before naming the first company. */
  faq: {
    heading: 'Before you name a company.',
    items: [
      {
        q: 'What is Obsession?',
        a: 'Obsession is the intelligence infrastructure for commercial teams: declared AI agents, each with its own identity, inbox, phone number and browser, that do business with other companies for you. They sign up, shop, ask the bot and chase at every company on your list, continuously, buy and negotiate within your limits, and check the AI agents you run, and you get signed proof and your next move.',
      },
      {
        q: 'Are there real examples of AI agents doing work?',
        a: 'Yes. In September 2026, Obsession’s agents shopped a UK store as 4 labelled test customers and watched every inbox for 48 hours: 1 left a basket and 1 stopped at checkout, and nobody wrote to either. The full report is in the sample output.',
      },
      {
        q: 'How is Obsession different from an AI assistant or a data tool?',
        a: 'Obsession’s agents have their own declared identity, go through every company on your list as a customer, and come back after every fix. An assistant acts as you, from your own inbox and logins, 1 company at a time, and a data tool reads what a company publishes.',
      },
      {
        q: 'Do companies know it’s an AI agent?',
        a: 'Yes. Every Obsession agent says it’s an AI agent. On your own journeys, or a client’s or account’s with their OK, it also says who it works for. At rivals and prospects it uses only what any customer can: sign ups, newsletters, text opt ins, public pages and the site’s chat bot. There it links to useobsession.com/agents and never names you.',
      },
      {
        q: 'What will Obsession’s agents never do?',
        a: 'An Obsession agent never pretends to be a person, uses a fake identity or sends cold spam. It never contacts a person at a prospect or rival: no forms, no emails, and if a person picks up the chat, the step ends. It never starts a rival’s trial that asks for a card, replies in one, or stays once a rep writes or calls, and it never pays on anyone else’s store or goes behind a login it wasn’t given.',
      },
      {
        q: 'What do I get back?',
        a: 'Obsession sends back what happened, the proof and your next move. Every step is signed and dated, with the screenshots and the messages themselves, by email, PDF, Slack, a sheet, Clay, your CRM or a webhook. Next moves come drafted, and nothing goes out without your OK.',
      },
      {
        q: 'Can Obsession check our own AI agents?',
        a: 'Yes. Give Obsession the chat page, phone number or inbox your AI agent answers on, or a client’s with their OK, and the policies it should follow. Obsession writes the checks, and once you approve them, declared test customers use it as your customers do, every day, and sign what they find.',
      },
      {
        q: 'How many companies can Obsession cover?',
        a: 'Obsession covers as many as you add. Every company on your list runs at once, continuously, from a pasted list, a CSV, Clay or the API.',
      },
      {
        q: 'Do I need to write code?',
        a: 'No. Pick an Obsession recipe or type the task in plain words. The API is there for developers who want to build on it.',
      },
      {
        q: 'How do I start?',
        a: 'Join the Obsession waitlist and tell us what to set up first. Your first mystery shop is free for a store you run, or a client’s with their OK, and so is your first check of an AI agent you run. Each report comes within 4 days.',
      },
    ],
  },

  final: {
    heading: 'Hand the legwork to declared AI agents.',
    sub: 'Tell us what to set up first: a recipe, a task in plain words, the API or a check on your own AI agent.',
    capture: {
      kind: 'waitlist',
      source: 'home-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to set up your first run and tell you about Obsession.',
      interest: 'any',
    },
  },
}
