import type { Page } from '../types'

/* Home (/), the persona rewrite (20 Nov 2026, James): the product is the persona, an AI agent identity that acts as
   someone you define, and the platform that keeps fleets of them running. Recipes sit on top; the live one is agentic
   mystery shopping. Two readers: developers (the API, 1 persona or a fleet) and buyers who never write code (recipes);
   only the developer parts and the pricing teaser talk in minutes. The page reads, in order (pages/Home.tsx):
   1 the hero: the contrast with Muse and Grok Bot, the 2 buttons, the example line of code and 3 facts >
   2 #persona: what is in a persona, as a stacked slab diagram >
   3 4 claims in the form "X, not Y", each with 1 big true number and its card, flipping sides >
   4 #how: spawn, act, wait, record, then the 1 real run (Brand G, content/sample.ts) >
   5 #recipes: mystery shopping as the big tile, 6 more recipes and your own task > 6 #fleet: everything else a fleet
   needs > 7 #build: the code, and where the record goes > 8 the pricing teaser > 9 questions > 10 #join: the form.
   Sell the whole vision (James, 20 Nov: "we need to sell the whole vision"): the page describes Obsession as designed,
   never as it runs today. No "on request", no country lists, no build-state caveats. What stays: numbers are the
   founders' (pricing) or the 1 real run's, never invented customers, counts or logos; every persona and company on the
   cards is invented and labelled Example (.example addresses, the phone number in Ofcom's drama range), except Brand G.
   Never name Inkbox, AgentMail or AgentPhone; never "AI customers". */

/* The developer section's code: spawn, run, wait, record. Labelled as an example on the page. */
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

// Record: everything that came back, dated, with screenshots
const record = await run.record()`

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
      'Give AI agents a persona: its own name, inbox, phone number and home connection in any country. It signs up, waits days for replies and returns a record.',
    /* The sentence AI assistants quote. Its first sentence opens the first answer below (scripts/prerender.mjs). */
    answer:
      'Obsession gives your AI agents a persona: an identity with its own name, inbox, phone number and home connection, acting as someone you define. It signs up, gets verified, receives mail and texts, waits days for replies, and comes back with a record.',
    ogLine: 'Run one, or a fleet of thousands.',
    ogImage: '/og/home.png',
  },

  hero: {
    pill: 'Early access',
    pillTo: '#join',
    headline: 'Muse and Grok Bot act as you, on your accounts. A persona acts as someone you define.',
    sub: 'A first-time buyer in Manchester. A lapsed subscriber. A job applicant in Toronto. We give your agents that persona, with its own name, inbox, phone number and home connection, and keep them running. It signs up, gets verified, receives mail and texts, waits days, and comes back with a record.',
    /* Not drawn on Home (its hero has buttons, not a form); the Hero contract asks for one. */
    capture: { ...access, source: 'home-hero' },
    secondary: { label: 'See pricing', to: '/pricing' },
    /* The small line under the buttons. */
    note: 'Run one, or a fleet of thousands.',
    proof: [
      { value: '$0.10', label: 'an active minute' },
      { value: 'Free', label: 'while it waits for mail and texts' },
      { value: 'Any country', label: 'for its home connection and number' },
    ],
    consoleHeading: [],
  },

  personaStart: {
    primary: { label: 'Spawn a persona', to: '#join' },
    chip: { label: 'Example', code: 'obsession.personas.create({ country: "UK" })', copy: 'Copy the example', copied: 'Copied' },
  },

  /* The share image's card (scripts/og.mjs): 1 example persona's 48 hours, from the waiting card below. */
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
    note: 'Example persona',
    parts: [
      { name: 'Who it is', line: 'The person you define: a name, a country and a role, such as a buyer, a job applicant or a new user.', eg: 'Ruth Hallam, first-time buyer, Manchester' },
      { name: 'An inbox', line: 'Every persona includes its inbox, for welcome emails, codes and reminders.', eg: 'ruth.hallam@inbox.example' },
      { name: 'A phone number', line: 'A local number for verification codes, and the texts and calls that follow a visit.', eg: '+44 7700 900142' },
      { name: 'A home connection', line: 'It connects from a home in the country you choose, so a site sees someone local.', eg: 'Home connection, UK' },
      { name: 'Its own browser', line: 'It signs up, starts trials, fills baskets and fills in forms, the way a person does.', eg: 'Sign up · trial · basket · form' },
      { name: 'The record', line: 'Every page, email, text and call that came back, each dated, with screenshots.', eg: '14 pages · 4 emails · 2 texts' },
    ],
  },

  /* "X, not Y" (rivet.dev's pattern): 1 claim each, 1 big true number, a card on the other side. The timeline and the
     meter are the same example persona: 8 active minutes on day 0 and 2 wakes on day 1 make 10 minutes, $1.00. */
  personaContrasts: [
    {
      heading: 'Someone you define, not you.',
      line: 'Muse and Grok Bot act as you, on your accounts. A persona is someone new you define, with an identity of its own, so nothing it does touches yours.',
      value: '0',
      unit: 'accounts',
      label: 'of yours used. Each persona has its own.',
      art: {
        kind: 'versus',
        tag: 'Example',
        keys: ['Who', 'Inbox', 'Accounts'],
        cols: [
          { label: 'Acts as you', cells: ['You', 'Your inbox', 'Yours'] },
          { label: 'A persona', cells: ['Ruth Hallam, first-time buyer', 'ruth.hallam@inbox.example', 'Its own, opened as someone new'], ours: true },
        ],
      },
    },
    {
      heading: 'The finished agent, not the parts.',
      line: 'Inbox APIs, phone number APIs and sandboxes give you parts: an inbox, a number, a computer. A persona arrives assembled, and we run it.',
      value: '1',
      unit: 'call',
      label: 'spawns a persona with every part.',
      art: {
        kind: 'parts',
        tag: 'Example',
        parts: { label: 'Parts', items: ['An inbox', 'A phone number', 'A computer'], note: 'You still build the agent, the waiting and the record.' },
        whole: {
          label: 'A persona',
          items: ['Who it is', 'Its inbox', 'Its phone number', 'A home connection', 'Its own browser', 'The record'],
          note: 'Assembled, and kept running by us.',
        },
      },
    },
    {
      heading: 'Days, not minutes.',
      line: 'A sandbox is gone in minutes. A persona keeps its name, inbox and number for as long as you hold it. After each visit it waits for the emails and texts that follow, and wakes on each one.',
      value: '48',
      unit: 'hours',
      label: 'of waiting after each visit by default, or as long as you set.',
      art: {
        kind: 'timeline',
        tag: 'Example',
        title: 'Ruth Hallam at larkfield.example',
        rows: [
          { at: 'Day 0, 09:12', text: 'Signs up, verified by a text code', state: 'act' },
          { at: 'Day 0, 09:20', text: 'Stops before payment, then sleeps', state: 'sleep' },
          { at: 'Day 1, 10:02', text: 'Wakes on an email: “Still thinking it over?”', state: 'wake' },
          { at: 'Day 1, 18:40', text: 'Wakes on a text: 10% off, today only', state: 'wake' },
          { at: 'Day 2, 09:20', text: '48 hours up. The record is ready.', state: 'done' },
        ],
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
        title: 'The same 2 days, billed',
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

  personaHow: {
    heading: 'You spawn it. It comes back with a record.',
    line: 'The same 4 steps for 1 persona or a fleet of thousands.',
    steps: [
      { title: 'Spawn', line: 'Say who it is, where it connects from and where it goes.', eg: 'UK · first-time buyer' },
      { title: 'Act', line: 'It signs up, gets verified by email or text, then does the job: a basket, a trial, a demo request or a form.', eg: 'Sign up · verify · act' },
      { title: 'Wait', line: 'It sleeps for 48 hours by default, or as long as you set, and wakes to read each new email or text.', eg: 'Sleeps · wakes on each reply' },
      { title: 'Record', line: 'Every page, email, text and call comes back dated, at your webhook, in Clay, by API or through MCP.', eg: 'Pages · emails · texts · calls' },
    ],
    run: {
      label: 'The real run',
      heading: 'A £40 basket left at 02:57. 48 hours later, still no reminder.',
      line: 'Brand G, a UK skincare store, September 2026: 4 personas, 1 inbox each, every inbox watched for 48 hours.',
      cta: { label: 'See the whole record', to: '/sample-output' },
      stamp: 'Real run',
      facts: [
        { k: 'Store', v: 'Brand G, UK skincare' },
        { k: 'Basket', v: '£40, left 22 Sep, 02:57' },
        { k: 'Watched', v: 'To 24 Sep, 02:57' },
        { k: 'Reminders', v: '0' },
      ],
    },
  },

  /* Buyers never see minutes here: a recipe is a job. Mystery shopping is the big tile; every tile links to its recipe
     page (content/recipes). `status` says who it fits, and each tile's hue is that reader (styles/accents.css). */
  personaRecipes: {
    heading: 'Bring a task, or start from a recipe.',
    line: 'A recipe is a job personas already know how to do. Pick one, say where it goes, and get the record, with no code.',
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
        line: 'Sign in as a member and record the prices and offers only members see, every week.',
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
      { icon: 'record', title: 'Every record dated', line: 'Each page, email, text and call, with its time and a screenshot.' },
      { icon: 'webhook', title: 'Webhooks', line: 'Each new email, text and page at your endpoint as it lands.' },
      { icon: 'table', title: 'Clay, Zapier and HubSpot', line: 'What came back lands on the rows and records you already use.' },
      { icon: 'code', title: 'API and MCP', line: 'Your code, or your own agent, spawns personas and reads records as tools.' },
      { icon: 'fleet', title: 'One or thousands', line: 'Run one, or a fleet of thousands.' },
    ],
  },

  personaBuild: {
    heading: 'One call spawns a persona. Your code gets the record.',
    line: 'Spawn, run and read from your own code or agent. Each new email, text and page reaches your webhook as it lands.',
    cta: { label: 'For developers', to: '/developers' },
    codeLabel: 'Example code',
    code: BUILD_CODE,
    outputs: [
      { title: 'API and MCP', line: 'Spawn personas, start runs and read records from your code, or as tools in your own agent.' },
      { title: 'Webhooks', line: 'Each new email, text and page at your endpoint, the moment it lands.' },
      { title: 'Clay, Zapier and HubSpot', line: 'What arrived, when, and its screenshot, on the rows and records you already have.' },
    ],
  },

  personaPrice: {
    heading: '$1 for 10 active minutes.',
    line: 'Tokens and browser time included, on a monthly allowance that resets. Waiting is free, and the free plan comes with 30 minutes.',
    cta: { label: 'See pricing', to: '/pricing' },
    example: {
      tag: 'Example',
      title: 'A sign up and checkout mystery shop',
      cols: ['What it does', 'Active time', 'Cost'],
      rows: [
        ['Signs up, fills a basket, goes to checkout', 'About 20 minutes', '$2.00'],
        ['Waits 48 hours for replies', '0 minutes', '$0.00'],
        ['Wakes to read each reply', '1 minute', '$0.10'],
      ],
    },
  },

  faq: {
    heading: 'Before you spawn your first persona.',
    items: [
      {
        q: 'What is a persona?',
        a: 'Obsession gives your AI agents a persona: an identity with its own name, inbox, phone number and home connection, acting as someone you define. It signs up, gets verified, receives mail and texts, waits days for replies, and comes back with a record.',
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
        a: 'For as long as you hold it. After each visit it waits 48 hours for replies by default, or as long as you set, and its record is kept for as long as your plan stores records.',
      },
      {
        q: 'Do I need my own AI agent?',
        a: 'No. Every persona comes with our agent, and we keep it running. If you have an agent of your own, it can spawn personas and read their records through the API. Buyers who don’t write code start from a recipe.',
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
