import type { Page } from '../types'

/* Home (/), the persona rewrite (20 Nov 2026, James): the product is the persona, an AI agent identity that acts as
   someone you define, and the platform that keeps fleets of them running. Recipes sit on top; the live one is agentic
   mystery shopping. Two readers: developers (the API, 1 persona or a fleet) and buyers who never write code (recipes).
   Pricing lives on /pricing, linked from the nav and the footer, never as a button or a section here (James, 20 Nov).
   Everything a persona brings back is its event log (James, 20 Nov: "the record is terrible"). The page reads, in order
   (pages/Home.tsx):
   1 the hero: the contrast with Muse and Grok Bot, the button, the example line of code and 3 facts >
   2 #persona: what is in a persona, as a stacked slab diagram >
   3 2 claims in the form "X, not Y", each with 1 big true number and its card, flipping sides >
   4 #how: from a sign up in minutes to months of replies, the old Home's timeline (components/v5/AgentLife) >
   5 #recipes: mystery shopping as the big tile, 6 more recipes and your own task > 6 #fleet: everything else a fleet
   needs > 7 #build: the code, and where the event log goes > 8 questions > 9 #join: the form.
   Sell the whole vision (James, 20 Nov: "we need to sell the whole vision"): the page describes Obsession as designed,
   never as it runs today. No "on request", no country lists, no build-state caveats. What stays: numbers are the
   founders' (pricing) or true by design, never invented customers, counts, logos or timings; every persona and company
   on the cards is invented and labelled Example (.example addresses, the phone number in Ofcom's drama range).
   Never name Inkbox, AgentMail or AgentPhone; never "AI customers". */

/* The developer section's code: spawn, run, wait, read the event log. Labelled as an example on the page. */
const BUILD_CODE = `import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// Spawn: who it is, and where it connects from
const persona = await obsession.personas.create({
  country: "UK",
  kind: "first-time buyer",
})

// Run: where it goes. It stops before payment.
const run = await persona.run({
  site: "https://larkfield.example",
  task: "Sign up, fill a basket, go to checkout",
  wait: "48h",
})

// Wait: each new email, text and page reaches your webhook
await run.notify("https://your-app.example/hooks/obsession")

// Events: everything that came back, dated, with screenshots
const events = await run.events()`

/* Every form on Home is the early access form. Its line ("Onboarding a limited number of teams.") is content/join.ts. */
const access = {
  kind: 'waitlist',
  button: 'Request early access',
  interest: 'any',
} as const

export const page: Page = {
  meta: {
    path: '/',
    title: 'Obsession: a persona on the web for every agent you run',
    description:
      'Give AI agents a persona: its own name, inbox, phone number and home connection in any country. It signs up, waits days for replies and logs every event.',
    /* The sentence AI assistants quote. Its first sentence opens the first answer below (scripts/prerender.mjs). */
    answer:
      'Obsession gives your AI agents a persona: an identity with its own name, inbox, phone number and home connection, acting as someone you define. It signs up, gets verified, receives mail and texts, waits days for replies, and comes back with an event log of everything that followed.',
    ogLine: 'Run one, or a fleet of thousands.',
    ogImage: '/og/home.png',
  },

  hero: {
    pill: 'Early access',
    pillTo: '#join',
    headline: 'Muse and Grok Bot act as you, on your accounts. A persona acts as someone you define.',
    sub: 'A first-time buyer in Manchester. A lapsed subscriber. A job applicant in Toronto. We give your agents that persona, with its own name, inbox, phone number and home connection, and keep them running. It signs up, gets verified, receives mail and texts, waits days, and comes back with an event log of everything that followed.',
    /* Not drawn on Home (its hero has buttons, not a form); the Hero contract asks for one. */
    capture: { ...access, source: 'home-hero' },
    /* The small line under the buttons. */
    note: 'Run one, or a fleet of thousands.',
    /* 3 facts true by design. No timing figure until one is measured. */
    proof: [
      { value: '1 call', label: 'spawns a persona with every part' },
      { value: 'Free', label: 'while it waits for mail and texts' },
      { value: 'Any country', label: 'for its home connection and number' },
    ],
    consoleHeading: [],
  },

  personaStart: {
    primary: { label: 'Spawn a persona', to: '#join' },
    chip: { label: 'Example', code: 'obsession.personas.create({ country: "UK" })', copy: 'Copy the example', copied: 'Copied' },
  },

  /* The share image's card (scripts/og.mjs): 1 example persona's first 2 days, Ruth Hallam of the anatomy diagram. */
  shareFindings: {
    title: 'Ruth Hallam, Manchester',
    aside: 'Example',
    rows: [
      { company: 'Text', finding: 'A verification code', when: 'Day 0' },
      { company: 'Email', finding: '“Still thinking it over?”', when: 'Day 1' },
      { company: 'Text', finding: '10% off, today only', when: 'Day 1' },
    ],
    foot: 'Each one dated, with a screenshot',
  },

  personaAnatomy: {
    heading: 'We give your agents a persona on the web, and keep them running.',
    line: 'Each persona arrives with every part an agent needs on the web, assembled and running. You say who it is.',
    parts: [
      { name: 'Who it is', line: 'The person you define: a name, a country and a role, such as a buyer, a job applicant or a new user.', eg: 'Ruth Hallam, first-time buyer, Manchester' },
      { name: 'An inbox', line: 'Every persona includes its inbox, for welcome emails, codes and reminders.', eg: 'ruth.hallam@inbox.example' },
      { name: 'A phone number', line: 'A local number for verification codes, and the texts and calls that follow a visit.', eg: '+44 7700 900142' },
      { name: 'A home connection', line: 'It connects from a home in the country you choose, so a site sees someone local.', eg: 'Home connection, UK' },
      { name: 'Its own browser', line: 'It signs up, starts trials, fills baskets and fills in forms, the way a person does.', eg: 'Sign up · trial · basket · form' },
      { name: 'Its event log', line: 'Every page, email, text and call that came back, each an event, dated, with screenshots.', eg: '14 pages · 4 emails · 2 texts' },
    ],
  },

  /* "X, not Y" (rivet.dev's pattern): 1 claim each, 1 big true number, a card on the other side. The meter is 1
     example persona: 8 active minutes on day 0 and 2 wakes on day 1 make 10 minutes, $1.00. */
  personaContrasts: [
    {
      heading: 'The finished agent, not the parts.',
      line: 'Inbox APIs, phone number APIs and sandboxes give you parts: an inbox, a number, a computer. A persona arrives assembled, and we run it.',
      value: '1',
      unit: 'call',
      label: 'spawns a persona with every part.',
      art: {
        kind: 'parts',
        tag: 'Example',
        parts: { label: 'Parts', items: ['An inbox', 'A phone number', 'A computer'], note: 'You still build the agent, the waiting and the event log.' },
        whole: {
          label: 'A persona',
          items: ['Who it is', 'Its inbox', 'Its phone number', 'A home connection', 'Its own browser', 'Its event log'],
          note: 'Assembled, and kept running by us.',
        },
      },
    },
    {
      heading: 'Waiting is free.',
      line: 'A persona waiting days for replies uses no minutes. Each time it wakes to read a new email or text counts as active time, 1 minute at least.',
      value: '0',
      unit: 'minutes',
      label: 'billed while it waits.',
      art: {
        kind: 'meter',
        tag: 'Example',
        title: '2 days of 1 persona, billed',
        span: { start: 'Day 0, 09:12', end: 'Day 2, 09:20' },
        /* 09:12 on day 0, 10:02 and 18:40 on day 1, as shares of the span (2,888 minutes). */
        marks: [0, 0.516, 0.695],
        rows: [
          { label: 'Sign up and basket', value: '8 minutes' },
          { label: '2 wakes to read', value: '2 minutes' },
          { label: '48 hours waiting for replies', value: '0 minutes' },
        ],
        total: { label: '10 active minutes', value: '$1.00' },
      },
    },
  ],

  /* How it works, as the 2 ends of 1 range (the old Home's "From an instant lookup to months of watching, at any
     company", 9 Nov, brought back for personas on 20 Nov by James): a fleet fans out at once, each persona acts in
     minutes, then sleeps and wakes on what follows, for months. The 3 lanes are example personas, each wake a real kind
     of message; the faded lane is the rest of the fleet (components/v5/AgentLife). */
  life: {
    heading: 'From a sign up in minutes to months of replies, for every persona.',
    line: 'Spawn 1 persona or a fleet. Each one acts in minutes, then sleeps, and wakes on every email, text and call that follows, for as long as you hold it.',
    list: 'fleet.csv · 10,000 personas',
    axis: {
      start: 'Monday 09:00',
      ticks: [
        { day: 1, label: 'Day 1' },
        { day: 7, label: 'Day 7' },
        { day: 30, label: 'Day 30' },
      ],
      end: 'Day 90: every email, text and call to all 10,000, in their event logs',
    },
    lanes: [
      {
        name: 'A first-time buyer',
        wakes: [
          { day: 0.006, label: '09:09 · text code' },
          { day: 3, label: 'Day 3 · basket reminder' },
          { day: 21, label: 'Day 21 · £24 to £19' },
        ],
      },
      {
        name: 'A job applicant',
        wakes: [
          { day: 0.01, label: '09:14 · application received' },
          { day: 9, label: 'Day 9 · interview call' },
        ],
      },
      {
        name: 'A new lead',
        wakes: [
          { day: 0.02, label: '09:29 · sales call' },
          { day: 3, label: 'Day 3 · follow up email' },
          { day: 30, label: 'Day 30 · new offer' },
        ],
      },
    ],
    more: {
      name: '+ 9,997 more',
      days: [0.004, 0.005, 0.007, 0.008, 0.01, 0.012, 0.3, 0.5, 0.8, 1, 1.2, 2, 2.5, 3, 4, 5, 6, 7, 9, 11, 13, 14, 16, 19, 22, 24, 27, 29, 31, 34, 38, 41, 44, 49, 53, 58, 61, 66, 70, 75, 79, 84, 88],
    },
    phases: [
      { title: 'Spawn them', lead: 'Any input:', line: '1 API call, a list, a row in Clay or your CRM, or a tool call from your own agent.' },
      { title: 'Each one acts', line: 'It signs up, gets verified by email, text or call, and does the job: a basket, a trial, an application or a form.' },
      { title: 'It sleeps and wakes', line: 'It waits 48 hours by default, or as long as you set, and wakes on each new email, text or call.' },
      { title: 'Every event logged', line: 'Each page, email, text and call, dated, with its screenshot, at your webhook, in Clay, by API or through MCP.' },
    ],
  },

  /* Buyers never see minutes here: a recipe is a job. Mystery shopping is the big tile; every tile links to its recipe
     page (content/recipes). `status` says who it fits, and each tile's hue is that reader (styles/accents.css). */
  personaRecipes: {
    heading: 'Bring a task, or start from a recipe.',
    line: 'A recipe is a job personas already know how to do. Pick one, say where it goes, and get the event log, with no code.',
    items: [
      {
        name: 'Agentic mystery shopping',
        line: 'Personas shop a store and bring back every email, text and reminder that followed, or the silence.',
        status: 'For online stores',
        live: true,
        reader: 'founders',
        link: { label: 'See the recipe', to: '/recipes/mystery-shopper' },
      },
      {
        name: 'QA on your own flows',
        line: 'Sign up and onboard on your own product as a new user in any country, and find the step that breaks.',
        status: 'For product teams',
        reader: 'developers',
        link: { label: 'See the recipe', to: '/recipes/website-audit' },
      },
      {
        name: 'Competitor trials',
        line: 'Start a competitor’s trial as the persona you pick, and keep every email it sends until the trial ends.',
        status: 'For marketing',
        reader: 'marketing',
        link: { label: 'See the recipe', to: '/recipes/trial-teardown' },
      },
      {
        name: 'Agency prospect audits',
        line: 'Shop a prospect’s store before the pitch, and open with what a new shopper gets.',
        status: 'For agencies',
        reader: 'agencies',
        link: { label: 'See the recipe', to: '/recipes/prospect-intelligence' },
      },
      {
        name: 'Lead response checks',
        line: 'Fill in a contact form as a new lead, and time the first reply by email, text or call.',
        status: 'For sales',
        reader: 'sales',
        link: { label: 'See the recipe', to: '/recipes/lead-leaks' },
      },
      {
        name: 'AI agent checks',
        line: 'Chat with a support bot or call a voice line as the person you define, and keep every answer word for word.',
        status: 'For teams running AI agents',
        reader: 'developers',
        link: { label: 'See the recipe', to: '/recipes/support-bot-check' },
      },
      {
        name: 'Price watch',
        line: 'Sign in as a member and log the prices and offers only members see, every week.',
        status: 'For pricing teams',
        reader: 'marketing',
        link: { label: 'See the recipe', to: '/recipes/price-watch' },
      },
      {
        name: 'Your own task',
        line: 'Write the job in a sentence: who the persona is, where it goes and what it brings back.',
        status: 'For any job',
        reader: 'founders',
        link: { label: 'Browse every recipe', to: '/recipes' },
      },
    ],
  },

  personaFleet: {
    heading: 'Everything else a fleet needs, already built.',
    items: [
      { icon: 'sleep', title: 'Sleeps when idle', line: 'It uses no minutes while it waits, and each new email or text wakes it.' },
      { icon: 'home', title: 'A home in any country', line: 'A home connection and a local number, so a site sees someone local.' },
      { icon: 'retry', title: 'The same persona, months later', line: 'It keeps its name, inbox and number, so a site meets the same person again.' },
      { icon: 'clock', title: 'Runs on a schedule', line: 'Every day, week or month, with no one there to start it.' },
      { icon: 'person', title: 'A person at ID checks', line: 'When a site asks for ID, the persona hands the step to a person.' },
      { icon: 'stop', title: 'Pays only if you say so', line: 'It stops before payment by default. Give it your own payment card and it completes the order.' },
      { icon: 'cap', title: 'Caps on tokens and spend', line: 'A token cap on every run and a monthly limit, so no run eats your plan.' },
      { icon: 'record', title: 'Every event dated', line: 'Each page, email, text and call in its event log, with its time and a screenshot.' },
      { icon: 'webhook', title: 'Webhooks', line: 'Each new email, text and page at your endpoint as it lands.' },
      { icon: 'table', title: 'Clay, Zapier and HubSpot', line: 'What came back lands on the rows and contacts you already use.' },
      { icon: 'code', title: 'API and MCP', line: 'Your code, or your own agent, spawns personas and reads event logs as tools.' },
      { icon: 'fleet', title: 'One or thousands', line: 'Run one, or a fleet of thousands.' },
    ],
  },

  personaBuild: {
    heading: 'One call spawns a persona. Your code gets its event log.',
    line: 'Spawn, run and read from your own code or agent. Each new email, text and page reaches your webhook as it lands.',
    cta: { label: 'For developers', to: '/developers' },
    codeLabel: 'Example code',
    code: BUILD_CODE,
    outputs: [
      { title: 'API and MCP', line: 'Spawn personas, start runs and read event logs from your code, or as tools in your own agent.' },
      { title: 'Webhooks', line: 'Each new email, text and page at your endpoint, the moment it lands.' },
      { title: 'Clay, Zapier and HubSpot', line: 'What arrived, when, and its screenshot, on the rows and contacts you already have.' },
    ],
  },

  faq: {
    heading: 'Before you spawn your first persona.',
    items: [
      {
        q: 'What is a persona?',
        a: 'Obsession gives your AI agents a persona: an identity with its own name, inbox, phone number and home connection, acting as someone you define. It signs up, gets verified, receives mail and texts, waits days for replies, and comes back with an event log of everything that followed.',
      },
      {
        q: 'What can a persona do?',
        a: 'Whatever a person does on the web. It signs up, gets verified, starts a trial, fills a basket, applies for a job, books a demo or chats with support, then waits for what follows. Bring the task, or start from a recipe.',
      },
      {
        q: 'What counts as an active minute?',
        a: 'Any minute a persona spends working: loading pages, filling in forms, reading a new email or text. Tokens and browser time are included, at $0.10 a minute. Waiting is free, and each wake counts as 1 minute at least.',
      },
      {
        q: 'What happens at checkout?',
        a: 'By default a persona fills the basket, goes to checkout and stops before payment, so nothing is bought. Give it a payment card of your own and it completes the order, so you also see the confirmation and every email after it.',
      },
      {
        q: 'Which countries can a persona connect from?',
        a: 'Any country you choose. Each persona connects from a home connection there, with a local phone number, so a site sees someone local.',
      },
      {
        q: 'How long does a persona live?',
        a: 'For as long as you hold it. After each visit it waits 48 hours for replies by default, or as long as you set, and its event log is kept for as long as your plan keeps event logs.',
      },
      {
        q: 'Do I need my own AI agent?',
        a: 'No. Every persona comes with our agent, and we keep it running. If you have an agent of your own, it can spawn personas and read their event logs through the API. Buyers who don’t write code start from a recipe.',
      },
      {
        q: 'Is it allowed to sign up as a persona?',
        a: 'A persona signs up the way anyone can, on the pages and forms open to everyone. You choose where it goes and what it does, and when it talks to a person it says it’s an AI.',
      },
    ],
  },

  final: {
    heading: 'Who should your first persona be?',
    sub: 'Tell us who it is and where it should go. We’ll set it up with you.',
    capture: { ...access, source: 'home-final' },
  },
}
