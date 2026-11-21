import { channels, downLine } from '../delivery'
import { pieceOrder, piecePaths } from '../piecePaths'
import type { PieceId } from '../prices'
import type { HomePieces, Page, PersonaIcon } from '../types'

/* Home (/), the pieces rewrite (21 Nov 2026, James): Obsession sells the pieces an AI agent needs (email, phone,
   messaging, browser, sandbox) through one API and one bill, and the persona that puts them under one identity. Two
   readers: developers who take one piece or many (nothing stops a company using only the email), and teams who pick a
   recipe and we run it. A recipe is a job that runs on Obsession beside the pieces, one of ours or a developer's own,
   and writes its results to the event log: 1 per account, where every event from every piece, persona and recipe lands
   (James, 21 Nov). The persona is the bundle, not the headline. The page reads, in order
   (pages/Home.tsx): 1 the hero: what we sell, "One API, one bill.", the 2 buttons, the copyable call and 3 facts >
   2 #pieces: the 6 pieces as 1 sheet, each linking to its page (content/piecePaths.ts) with the call that starts it >
   3 #personas: the pieces under one identity, as a stacked slab diagram >
   4 2 claims in the form "X, not Y": 1 API, not 5 vendors; wakes in milliseconds, not minutes >
   5 #how: from the first call to months of messages, for a fleet (components/v5/AgentLife) >
   6 #recipes: ours or your own job, beside the pieces > 7 #fleet: what's built in > 8 #build: the code >
   9 #delivery: how events reach you, as 3 steps (it happens, it's saved in your event log, it reaches you), the 6
   channels in their order (content/delivery.ts) and the line on a server that's down >
   10 the web behind the login, 1 card to its use case page > 11 questions > 12 #join: the early access form.
   Home shows no prices and no pricing link (James, 20 Nov): prices live in content/prices.ts, on /pricing and the piece
   pages. Nothing here bills by the minute. The product is described as designed (50 ms, free while a persona waits),
   never with build-state caveats; country is a feature, never the pitch. People and companies are invented, at .example
   addresses, with US numbers in the 555-01XX range kept for fiction, and carry no "Example" tag. Never name a
   competitor, never "AI customers"; a persona is never defined as a customer. */

/* The developer section's code, in the API's own names (the shared brief, 21 Nov). */
const BUILD_CODE = `import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// One piece: an inbox your agent sends and receives from
const inbox = await obsession.inboxes.create()
await inbox.send({ to: "maya@larkfield.example", subject: "Your booking", text: "See you at 7." })

// Or every piece under one identity
const persona = await obsession.personas.create({ inbox: true, phone: "US", browser: true })

persona.on("email.received", async (email) => {
  // runs on our runtime, about 50 ms after it lands
})

// Every event lands in your event log. Subscribe once to get all of it
await obsession.events.subscribe({
  url: "https://api.larkfield.example/hooks/obsession",
  events: ["*"],
})

// Or read a persona's events: every page, email, text and call, dated
const { events } = await obsession.events.list({ persona: persona.id })`

/* The 6 pieces, in the nav's order (pieceOrder); each cell links to its page (piecePaths). */
const PIECES: Record<PieceId, { icon: PersonaIcon; name: string; line: string; call: string }> = {
  email: {
    icon: 'mail',
    name: 'Email',
    line: 'Inboxes your agents send and receive from, with threads, attachments and webhooks.',
    call: 'obsession.inboxes.create()',
  },
  phone: {
    icon: 'phone',
    name: 'Phone',
    line: 'Numbers that send and receive texts and take calls, with your own voice agent or one we run.',
    call: 'obsession.numbers.create({ country: "US" })',
  },
  messaging: {
    icon: 'chat',
    name: 'Messaging',
    line: 'iMessage lines, Slack and Telegram, and WhatsApp for support, sales, bookings and notifications.',
    call: 'obsession.messaging.connect({ channel: "imessage" })',
  },
  browser: {
    icon: 'browser',
    name: 'Browser',
    line: 'A cloud browser on a home connection, with sessions that keep their logins.',
    call: 'obsession.browsers.create({ home: "US" })',
  },
  sandbox: {
    icon: 'sandbox',
    name: 'Sandbox',
    line: 'A computer to run code in, started only when a task needs it.',
    call: 'obsession.sandboxes.create()',
  },
  personas: {
    icon: 'persona',
    name: 'Personas',
    line: 'Every piece under one identity, free while it waits, with all it saw in your event log.',
    call: 'obsession.personas.create({ inbox: true, phone: "US" })',
  },
}

const pieces: HomePieces = {
  heading: 'Every piece an agent needs is 1 call away.',
  line: 'Use one on its own, like email, or several together. They share one key, one bill and one event log.',
  items: pieceOrder.map((id) => ({ ...PIECES[id], to: piecePaths[id], whole: id === 'personas' })),
}

/* Every form on Home is the early access form. Its line ("Onboarding a limited number of teams.") is content/join.ts. */
const access = {
  kind: 'waitlist',
  button: 'Request early access',
  interest: 'any',
} as const

export const page: Page = {
  meta: {
    path: '/',
    title: 'Obsession: inboxes, phone numbers and browsers for AI agents',
    description:
      'Inboxes, phone numbers, messaging, browsers and sandboxes for AI agents, through one API and one bill. Use one piece, or put them together as a persona.',
    /* The sentence AI assistants quote. Its first sentence opens the first answer below (scripts/prerender.mjs). */
    answer:
      'Obsession gives AI agents inboxes, phone numbers, messaging, browsers and sandboxes through one API and one bill. Use one piece, like email, or put them together as a persona. Run one of our recipes or your own job beside them, and every result lands in your event log.',
    ogLine: 'Use one piece, or put them together as a persona.',
    ogImage: '/og/home.png',
  },

  hero: {
    pill: 'Early access',
    pillTo: '#join',
    headline: 'Inboxes, phone numbers, browsers and sandboxes for AI agents. One API, one bill.',
    sub: 'Use one piece, like email, or put them together as a persona. Run one of our recipes or your own job beside them, and every result lands in your event log.',
    /* Not drawn on Home (its hero has buttons, not a form); the Hero contract asks for one. */
    capture: { ...access, source: 'home-hero' },
    secondary: { label: 'Browse recipes', to: '/recipes' },
    /* 3 facts, true by design: no prices, no country. 50 ms is James's figure (20 Nov). */
    proof: [
      { value: '1 API', label: 'for every piece, on one bill' },
      { value: '50 ms', label: 'to act on a new message' },
      { value: 'Free', label: 'while a persona waits' },
    ],
    consoleHeading: [],
  },

  personaStart: {
    primary: { label: 'Start building', to: '#join' },
    chip: { code: 'obsession.personas.create({ inbox: true, phone: "US", browser: true })', copy: 'Copy the code', copied: 'Copied' },
  },

  /* The share image's card (scripts/og.mjs): 1 persona's events in the event log, Juno of the slab diagram, through 3 pieces. */
  shareFindings: {
    title: 'Juno, Larkfield bookings',
    aside: 'Event log',
    rows: [
      { company: 'Email', finding: '“Can we move to Friday?”', when: '09:04' },
      { company: 'WhatsApp', finding: 'A table for 4 at 7', when: '12:30' },
      { company: 'Call', finding: 'A booking question, 2 min', when: '18:40' },
    ],
    foot: 'Every email, text and call, dated',
  },

  homePieces: pieces,

  personaAnatomy: {
    heading: 'A persona is every piece under one identity.',
    line: 'Its inbox, number, channels, browser and sandbox share one name. It lives on our runtime: free while it waits, and your code runs 50 ms after a message lands, with no machine to start.',
    parts: [
      { name: 'One identity', line: 'A name every piece shares, so each email, text and page belongs to the same agent.', eg: 'Juno, bookings at Larkfield' },
      { name: 'An inbox', line: 'Its own address, to send and receive email, with threads and attachments.', eg: 'juno@larkfield.example' },
      { name: 'A phone number', line: 'Texts and calls, from sign up codes to people who’d rather ring.', eg: '+1 415 555 0142' },
      { name: 'Messaging', line: 'iMessage, WhatsApp, Slack and Telegram, on the same identity.', eg: 'iMessage · WhatsApp · Slack' },
      { name: 'A browser on a home connection', line: 'Its own browser profile, connecting from a home, that keeps its logins.', eg: 'Home connection, US · signed in' },
      { name: 'A sandbox', line: 'A computer to run code in, started only when a task needs it.', eg: 'python report.py' },
      { name: 'Its events in your event log', line: 'Every page, email, text and call it saw, dated, with screenshots.', eg: '14 pages · 4 emails · 2 texts · 1 call' },
    ],
  },

  /* "X, not Y" (rivet.dev's pattern): 1 claim each, 1 big true number, a card on the other side. The wake is Juno's. */
  personaContrasts: [
    {
      heading: 'One API, not five vendors.',
      line: 'An agent that emails, texts, browses and runs code needs a vendor for each: 5 accounts, 5 keys and 5 bills. Here each piece is 1 call on the same key.',
      value: '1',
      unit: 'key',
      label: 'for every piece, on one bill.',
      art: {
        kind: 'parts',
        parts: {
          label: '5 vendors',
          items: ['An email API', 'A phone API', 'A messaging API', 'A browser API', 'A sandbox API'],
          note: '5 keys, 5 bills, and the code that joins them is yours.',
        },
        whole: {
          label: 'Obsession',
          items: ['Email', 'Phone', 'Messaging', 'Browser', 'Sandbox', 'Personas'],
          note: 'One key, one bill, one set of webhooks.',
        },
      },
    },
    {
      heading: 'Wakes in milliseconds, not minutes.',
      line: 'When an email, text or call reaches a persona, your code runs on our runtime 50 ms later. No machine starts: its inbox, logins and browser state are already there.',
      value: '50',
      unit: 'ms',
      label: 'from a new email, text or call to your code running.',
      art: {
        kind: 'timeline',
        title: 'Juno, Tuesday',
        rows: [
          { at: '18:39:59.000', text: 'Waiting. Its inbox, logins and browser state are kept.', state: 'sleep' },
          { at: '18:40:00.000', text: 'A text lands: “Can I move my booking to 8?”', state: 'wake' },
          { at: '18:40:00.050', text: 'Your code is running, reading the text as Juno', state: 'act' },
          { at: '18:40:01.900', text: 'Opens the booking page, still signed in', state: 'act' },
          { at: '18:40:04.000', text: 'Replies by text, logs it and goes back to waiting', state: 'done' },
        ],
      },
    },
  ],

  /* How it works, as the 2 ends of 1 range: a fleet starts at once, each persona does its first job in minutes, then
     waits and wakes on what follows, for months. The 3 lanes are personas doing 3 kinds of job, each wake a real kind
     of message; the faded lane is the rest of the fleet (components/v5/AgentLife). */
  life: {
    heading: 'From the first call to months of messages, for every persona.',
    line: 'Create 1 persona or a fleet. Each one does its first job in minutes, then waits, and wakes on every email, text and call that follows.',
    list: 'agents.csv · 10,000 personas',
    axis: {
      start: 'Monday 09:00',
      ticks: [
        { day: 1, label: 'Day 1' },
        { day: 7, label: 'Day 7' },
        { day: 30, label: 'Day 30' },
      ],
      end: 'Day 90: every email, text and call to all 10,000, in your event log',
    },
    lanes: [
      {
        name: 'A support agent',
        wakes: [
          { day: 0.003, label: '09:04 · order email' },
          { day: 3, label: 'Day 3 · WhatsApp question' },
          { day: 21, label: 'Day 21 · returns call' },
        ],
      },
      {
        name: 'A bookings agent',
        wakes: [
          { day: 0.008, label: '09:12 · text: table for 4' },
          { day: 9, label: 'Day 9 · email: move to Friday' },
        ],
      },
      {
        name: 'A QA tester',
        wakes: [
          { day: 0.02, label: '09:29 · sign up code' },
          { day: 3, label: 'Day 3 · onboarding email' },
          { day: 30, label: 'Day 30 · renewal notice' },
        ],
      },
    ],
    more: {
      name: '+ 9,997 more',
      days: [0.004, 0.005, 0.007, 0.008, 0.01, 0.012, 0.3, 0.5, 0.8, 1, 1.2, 2, 2.5, 3, 4, 5, 6, 7, 9, 11, 13, 14, 16, 19, 22, 24, 27, 29, 31, 34, 38, 41, 44, 49, 53, 58, 61, 66, 70, 75, 79, 84, 88],
    },
    phases: [
      { title: 'Create them', lead: 'Any input:', line: '1 API call, a list, or a tool call from your own agent through MCP.' },
      { title: 'Each one acts', line: 'It signs up, gets verified by email, text or call, and does its first job.' },
      { title: 'It waits and wakes', line: 'It waits 48 hours by default, or as long as you set, and wakes on each new email, text or call.' },
      { title: 'Every event in your event log', line: 'Each page, email, text and call, dated, with screenshots, at your webhook, by API or through MCP.' },
    ],
  },

  /* A recipe is a job that runs on Obsession beside the pieces and writes its results to the event log: one of ours, ready
     to run, or your own. Mystery shopping is the big tile; every tile links to its recipe page (content/recipes).
     `status` says who it fits, and each tile's hue is that reader
     (styles/accents.css). */
  personaRecipes: {
    heading: 'Run one of our recipes, or bring your own job.',
    line: 'A recipe is a job that runs on Obsession beside the pieces and writes its results to your event log. Pick one of ours and say where it goes, or write your own.',
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
        line: 'Sign up to your own product as a new user, and find the step that breaks.',
        status: 'For product teams',
        reader: 'developers',
        link: { label: 'See the recipe', to: '/recipes/website-audit' },
      },
      {
        name: 'Competitor trials',
        line: 'Start a competitor’s trial and keep every email it sends until the trial ends.',
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
        line: 'Chat with a support bot or call a voice line, and keep every answer word for word.',
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
        name: 'Your own job',
        line: 'A task or a computation of your own, run on our runtime beside the inbox, browser and sandbox, with nothing to host.',
        status: 'For any job',
        reader: 'founders',
        link: { label: 'Browse every recipe', to: '/recipes' },
      },
    ],
  },

  personaFleet: {
    heading: 'Everything a fleet of agents needs, already built.',
    items: [
      { icon: 'domain', title: 'Your own domain', line: 'Add your domain once, and every inbox sends from it, signed so mail reaches the inbox.' },
      { icon: 'code', title: 'MCP', line: 'Run claude mcp add obsession, and your own agent uses every piece as a tool.' },
      { icon: 'cap', title: 'Spend caps', line: 'A cap on every key and a monthly limit, so no agent runs up a bill.' },
      { icon: 'users', title: 'Accounts for your users', line: 'Give each of your users their own inboxes, numbers and limits, all on your bill.' },
      { icon: 'clock', title: 'Schedules', line: 'A job every day, week or month, with no one there to start it.' },
      { icon: 'person', title: 'A person at ID checks', line: 'When a site asks for ID, the agent hands that step to a person.' },
      { icon: 'stop', title: 'Pays only if you say so', line: 'Agents stop before payment. Give one your own payment card and it completes the order.' },
      { icon: 'record', title: 'One event log', line: 'Every event from every piece, persona and recipe, in order, dated, with its proof.' },
    ],
  },

  personaBuild: {
    heading: 'One key, from the first inbox to a fleet of personas.',
    line: 'Create an inbox, a number or a whole persona from your code, or let your own agent do it through MCP. Then subscribe once to hear back from all of them.',
    cta: { label: 'For developers', to: '/developers' },
    codeLabel: 'agent.ts',
    code: BUILD_CODE,
  },

  /* How events reach you (James, 21 Nov: the site must say how traffic reaches the developer, from the pieces and from
     recipes). The 3 steps are the path every event takes; the plates' rows are the event names a developer subscribes
     to (content/delivery.ts), dated in the event log. The channels and the line on a server that's down are
     content/delivery.ts, the same words as the piece, recipe and developer pages. */
  homeDelivery: {
    heading: 'Every event is saved in your event log, then reaches you.',
    line: 'Every piece and every recipe sends its events the same way, so one subscription hears all of them.',
    steps: [
      {
        title: 'It happens',
        line: 'An email lands, a text or a call comes in, a page is visited, a sandbox finishes or a recipe brings back a result.',
        rows: ['email.received', 'call.ended', 'page.visited', 'recipe.result'],
      },
      {
        title: 'It’s saved in your event log',
        line: 'In order and dated, with its proof: the email as it arrived, the page as a screenshot. Nothing in it is changed or deleted.',
        rows: ['09:04:12 email.received', '09:04:13 page.visited', '09:05:40 call.ended', '09:07:02 recipe.result'],
      },
      {
        title: 'It reaches you',
        line: 'At your webhook, in your code, in your own agent, in a handler on our runtime, or in Zapier, Make and n8n.',
        rows: ['Webhook', 'API', 'MCP', 'Handler', 'CLI', 'No code'],
      },
    ],
    channels: channels.map(({ name, line, eg }) => ({ name, line, eg })),
    down: downLine,
    link: { label: 'See the code for each channel', to: '/developers#delivery' },
  },

  homeUseCase: {
    heading: 'The web behind the login, as data.',
    line: 'Prices, emails and offers that companies show people only after they sign up. Personas sign up, wait, and bring every page, email and text back as data.',
    link: { label: 'See the web behind the login', to: '/use-cases/web-behind-the-login' },
    before: 'The public page everyone sees',
    wall: 'Sign up',
    after: ['Member prices', 'Welcome emails and offers', 'Texts after a visit', 'Onboarding, step by step'],
  },

  faq: {
    heading: 'Before your agent sends its first email.',
    items: [
      {
        q: 'What is Obsession?',
        a: 'Obsession gives AI agents inboxes, phone numbers, messaging, browsers and sandboxes through one API and one bill. Use one piece, like email, or put them together as a persona. Run one of our recipes or your own job beside them, and every result lands in your event log.',
      },
      {
        q: 'Can I use just one piece, like email?',
        a: 'Yes. Every piece works on its own. Start with inboxes for your agent and add a number, a browser or a sandbox later, on the same key and the same bill.',
      },
      {
        q: 'What is a persona?',
        a: 'Every piece under one identity: an inbox, a number, its messaging channels, a browser profile and a sandbox when a task needs one. It lives on our runtime, free while it waits, and your code runs 50 ms after a message lands. Every page, email, text and call it handles lands in your event log, dated, with screenshots.',
      },
      {
        q: 'What is the event log?',
        a: 'One place per account where every event lands, from every piece, persona and recipe: in order, each dated, with its proof, such as the email as it arrived or a screenshot of the page. Nothing in it is changed or deleted. Subscribe once, and your endpoint gets all of it.',
      },
      {
        q: 'How do events reach my app?',
        a: 'Each event is saved in your event log, then sent to one signed webhook that you subscribe once, for every piece and recipe. If your server is down, each event is retried for 27 hours and can be replayed. You can also read the event log by cursor, or let your own agent subscribe over MCP. Or run a handler on our runtime, stream events to your laptop, or use Zapier, Make and n8n.',
      },
      {
        q: 'Do I need to write code?',
        a: 'No. Run one of our recipes, such as agentic mystery shopping: say where it goes, and its results land in your event log. Developers can also write their own job, which runs on our runtime beside the pieces.',
      },
      {
        q: 'Which messaging channels can an agent use?',
        a: 'iMessage, WhatsApp, Slack and Telegram, each on the same identity as its inbox and number. WhatsApp is for support, sales, bookings and notifications.',
      },
      {
        q: 'Can I bring my own voice agent?',
        a: 'Yes. Connect your own voice agent to a number, or connect one we run. Calls come in and go out on the same number your agent texts from.',
      },
      {
        q: 'Does the browser stay signed in?',
        a: 'Yes. A browser keeps its logins from one session to the next. It connects through a home connection, so a site sees a person at home, not a data centre.',
      },
      {
        q: 'What happens at checkout?',
        a: 'Agents stop before payment, so nothing is bought. Give one a payment card of your own and it completes the order, so you also see the confirmation and every email after it.',
      },
      {
        q: 'Does a persona say it’s an AI?',
        a: 'Yes, whenever it talks to a person. It signs up the way anyone can, on the pages and forms open to everyone, and you choose where it goes and what it does.',
      },
    ],
  },

  final: {
    heading: 'What will your agent need first?',
    sub: 'Tell us which pieces, or which recipe, and we’ll set you up.',
    capture: { ...access, source: 'home-final' },
  },
}
