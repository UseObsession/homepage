import { explorer as base } from '../explorer'
import { kitPathOf } from '../kitPaths'
import { piecePaths } from '../piecePaths'
import { personaCostLine, plans } from '../prices'
import { outputFormats } from '../sample'
import type { CardGrid, Explorer, Finding, Life, Page, RunReports, ViewerFormat } from '../types'

/* /use-cases/web-behind-the-login (21 Nov 2026): the old Home (9 Nov, "the web behind the login") turned into a use case.
   It is what you can build on Obsession's pieces: data from what companies show people only after they sign up. A
   persona signs up at each company you name, in its own browser, with its own inbox and number, and keeps every page,
   email, text and call back to the account's event log. It is a use case built from the pieces, not what Obsession is. The page reads,
   in order (pages/WebBehindTheLogin.tsx):
   1 the hero, with the explorer as its object > 2 #data: the 6 kinds of data behind the login >
   3 #found: the 1 real run (Brand G, stated exactly as content/sample.ts states it) > 4 #how: a sign up in minutes,
   then months of emails (components/v5/AgentLife) > 5 #pieces: the 6 pieces it is built from, each linked to its page >
   6 #formats: where the data goes (your AI agent, your code, Clay, a webhook) > 7 questions > 8 #join: the form.
   `page` holds what the registry and meta.ts read (meta, hero, questions, the form); the sections are `sections`, typed
   by their own components, so the page needs nothing Home owns on the Page contract.
   Words: "the event log" (1 per account; events are its entries), never "record"; "a persona you define", never a customer profile; never AI customers; no
   "Example" tags; never the index (22 Nov). Part of the Work behind logins kit. Every invented company is at a .example
   address. The only real numbers are Brand G's. Prices come from prices.ts. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const planWords = `the Free plan, then ${fees.slice(0, -1).join(', ')} or ${fees[fees.length - 1]} a month`

/* The explorer (content/explorer.ts), with this page's words where the shared ones say "record", "the index" or "an
   example", and its 2 US questions first (signed in prices, texts after STOP), then the 3 UK ones. */
const explorer: Explorer = {
  ...base,
  tabs: { ...base.tabs, record: 'Event log' },
  fromIndex: 'From your event log · 0.3 s',
  notCovered: 'No persona there yet',
  insight: {
    ...base.insight,
    inIndex: 'In your event log',
    notIn: 'No persona there yet',
    missing: (n: number, [one, many]: [string, string]) => (n === 1 ? `1 ${one} has no persona there yet.` : `${n} ${many} have no persona there yet.`),
    done: (n: number, c: number) => `${n} sources · ${c} from your event log`,
  },
  insights: [1, 3, 0, 2, 4]
    .map((i) => base.insights[i])
    .map((q) => ({
      ...q,
      plan: [q.plan[0], 'Read each one’s event log', q.plan[2]] as [string, string, string],
      answer: q.answer.replace(' in the index', ' with a persona there'),
    })),
  said: 'A console built on Obsession’s pieces. Ask one question across a group of companies, and it writes a report with a row for each company, from what each persona saw. Open a row to see the email or page behind it, as your event log stores it. A company with no persona yet has Watch it, which sends one to sign up.',
}

/* The code tile: a persona, the emails it wakes on, its events read back from the event log. Only the API names in the shared brief. */
const CODE = `import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// Who signs up: one identity with its own inbox, US number and browser
const persona = await obsession.personas.create({ inbox: true, phone: "US", browser: true })

// Each email the company sends wakes it, about 50 ms after it lands
persona.on("email.received", async (email) => {
  await db.emails.insert(email)
})

// Every page, email, text and call so far, dated, with screenshots
const events = await obsession.events.list({ persona: persona.id })`

/* 2 format tiles: Clay and a webhook. The Clay table keeps Brand G, the real run, as its first row; the other rows are
   invented companies at .example addresses. */
function formats(): ViewerFormat[] {
  const views: Partial<Record<ViewerFormat['id'], ViewerFormat['view']>> = {
    clay: {
      kind: 'clay',
      cols: ['Company', 'What arrived', 'Seen on', 'Screenshot'],
      added: ['What arrived', 'Seen on', 'Screenshot'],
      rows: [
        { cells: ['Brand G', 'No basket reminder', '24 Sep', 'link'], gap: true, example: false },
        { cells: ['larkfield.example', 'Dead welcome links', '3 Nov', 'link'], gap: true, example: true },
        { cells: ['kittiwake-bank.example', 'Chat: wrong rate', '4 Nov', 'link'], gap: true, example: true },
        { cells: ['quillon.example', '40% off, trial only', '5 Nov', 'link'], gap: false, example: true },
      ],
      note: 'Brand G is the real September run, its name hidden.',
    },
    webhook: {
      kind: 'webhook',
      request: 'POST https://your-app.example/hooks/obsession',
      body: `{
  "event": "email.received",
  "company": "larkfield.example",
  "from": "hello@larkfield.example",
  "subject": "Welcome to Larkfield",
  "received_at": "2026-11-03T09:04:00Z",
  "screenshot": "/v1/events/evt_l1_1103/screenshot"
}`,
    },
  }
  const lines: Partial<Record<ViewerFormat['id'], string>> = {
    clay: 'New columns on the rows you already have: what arrived, the day it was seen and its screenshot.',
    webhook: 'Each new email, text and call at your own endpoint, the moment it lands.',
  }
  return outputFormats
    .filter((f) => f.id === 'clay' || f.id === 'webhook')
    .map((f) => ({ ...f, line: lines[f.id] ?? f.line, view: views[f.id] ?? f.view }))
}

/* Every form on the page starts free. */
const access = {
  kind: 'waitlist',
  button: 'Start free',
  interest: 'any',
} as const

export const page: Page = {
  meta: {
    path: '/use-cases/web-behind-the-login',
    title: 'The web behind the login: emails, prices and offers as data',
    description:
      'Personas sign up at the companies you name and log every email, text, member price, trial limit and cancel offer that follows, dated, with screenshots.',
    /* The sentence AI assistants quote. Its first sentence opens the hero's sub (scripts/prerender.mjs checks). */
    answer:
      'The web behind the login is what companies show people only after they sign up: emails, texts, member prices, trial limits and offers. Obsession’s personas, AI agents with their own browser, inbox and number, sign up at the companies you name. Their browsers keep their logins and their inboxes and numbers catch every code, so every page, email, text and call lands in your event log, dated, with a screenshot.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'The web behind the login', path: '/use-cases/web-behind-the-login' },
    ],
  },

  hero: {
    pill: 'Work behind logins blueprints',
    pillTo: kitPathOf.portals,
    headline: 'Search engines stop at the login. Your personas don’t.',
    sub: 'The web behind the login is what companies show people only after they sign up: emails, texts, member prices, trial limits and offers. Personas sign up at the companies you name, with a browser that keeps its logins and an inbox and number that catch every code.',
    capture: { ...access, source: 'web-behind-the-login-hero' },
    secondary: { label: 'Browse blueprints', to: '/blueprints' },
    proof: [],
    consoleHeading: [],
  },

  faq: {
    kicker: 'Accounts, rules and price',
    heading: 'Real accounts, opened the way anyone opens one.',
    items: [
      {
        q: 'What is the web behind the login?',
        a: 'The web behind the login is what companies show people only after they sign up: emails, texts, member prices, trial limits and offers. No search engine reaches it, because you have to be signed up to see it.',
      },
      {
        q: 'What is it built from?',
        a: 'Personas, AI agents each with its own browser, inbox and phone number, on one API and one bill. A persona signs up at each company you name and keeps the account open, and every page, email, text and call lands in your event log. Add WhatsApp from Messaging, and a sandbox to run your own code on each event.',
        link: { label: 'See personas', to: piecePaths.personas },
      },
      {
        q: 'Do I have to write code?',
        a: 'No. Pick a blueprint, such as competitor tracking or price watch, and Obsession runs it on the same pieces at the same prices. Developers call the API, connect their own agent with MCP, or run their own job beside the pieces. Every result lands in your event log.',
        link: { label: 'Browse blueprints', to: '/blueprints' },
      },
      {
        q: 'Where does the data come from?',
        a: 'From real accounts. A persona you define signs up, starts a trial or asks for a quote the way any person can, from the country you pick, and keeps the account open for months. Every email is kept as it arrived, with its sender checked.',
      },
      {
        q: 'Is collecting it allowed?',
        a: 'A persona does only what any person can, on the pages and forms open to everyone. It says it’s an AI when it talks to a person, and stops before payment unless given your own card. It never signs in to an account that isn’t its own.',
        link: { label: 'The lines every agent keeps', to: '/agents' },
      },
      {
        q: 'Who can see what my personas collect?',
        a: 'Only you. Every event your personas bring back lands in your account’s event log, and nobody else can read it.',
      },
      {
        q: 'How long does a persona keep watching?',
        a: 'For as long as you keep it. It waits for free and wakes on each new email, text or call, so a renewal notice or an offer to stay months later still lands in your event log.',
      },
      {
        q: 'How is it priced?',
        a: `${personaCostLine} It costs nothing while it waits, and you pay only for the pieces it uses. Start on ${planWords}.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Send a persona to every company on your list.',
    sub: 'Start with one persona at one company, so you can see the coverage and accuracy before you add the rest.',
    capture: { ...access, source: 'web-behind-the-login-final' },
  },
}

export const sections: {
  explorer: Explorer
  data: CardGrid
  found: Finding
  how: Life
  pieces: CardGrid
  formats: RunReports
} = {
  /* The hero's object. */
  explorer,

  data: {
    kicker: 'Behind the login',
    heading: 'No search engine reaches these 6 kinds of data.',
    items: [
      { title: 'Emails, texts and flows', line: 'Every screen and message after a sign up, a basket or a trial, each one timed.', eg: 'Day 3 · “Invite your team”' },
      { title: 'Trial plans and limits', line: 'What the free plan includes, where it stops and when the upgrade prompt appears.', eg: '3 projects, 1 seat · prompt on day 7' },
      { title: 'Member prices', line: 'The price a customer sees once signed in, beside the public one.', eg: 'Pro $24 signed in · $29 public' },
      { title: 'Quotes behind forms', line: 'Finance, insurance and service quotes for a persona you define.', eg: '$289 a month over 36 months' },
      { title: 'Checkout and cancel offers', line: 'Codes at checkout, the offer to stay when someone cancels, and renewal notices.', eg: '50% off for 3 months to stay' },
      { title: 'Support answers', line: 'What chat and support tell a customer, and how long they take.', eg: 'Chat: fixed rate · page: variable' },
    ],
  },

  /* The 1 real run, exactly as content/sample.ts states it: 4 test customers, 1 inbox each, every inbox watched for 48
     hours; a £40 basket left at 02:57 and a £21 checkout left at 03:11 on Tuesday 22 September 2026, neither reminded;
     5 messages, all on welcome and browse; 15 screenshots. */
  found: {
    kicker: 'A real run, September 2026',
    value: '0',
    heading: 'reminders after a £40 basket and a £21 checkout were left at a real UK store.',
    also: [
      { value: '02:57', text: 'a Body Care Gift Set (£40) left in the basket at Brand G, a UK skincare store, on Tuesday 22 September 2026.' },
      { value: '48 h', text: 'each inbox was watched. 5 messages came, all on welcome and browse.' },
      { value: '15', text: 'screenshots kept, each beside its event.' },
    ],
    source: 'Source: our own run, September 2026: 4 test customers, 1 inbox each. The store’s name is hidden.',
    cta: { label: 'See the whole run', to: '/sample-output' },
  },

  /* How it works: a list fans out to every company at once, each persona signs up in minutes, then sleeps and wakes on
     what follows, for months. The 3 lanes are invented companies; the faded lane is the rest of the list. */
  how: {
    kicker: 'From sign-up to day 90',
    heading: 'A sign up in minutes, then months of emails, at every company you name.',
    line: 'Name the companies. A persona signs up at each one, then sleeps, and wakes on every email, text and offer that follows, for as long as you keep it.',
    list: 'companies.csv · 1,000 companies',
    axis: {
      start: 'Monday 09:00',
      ticks: [
        { day: 1, label: 'Day 1' },
        { day: 7, label: 'Day 7' },
        { day: 30, label: 'Day 30' },
      ],
      end: 'Day 90: every email, text and offer from all 1,000, in your event log',
    },
    lanes: [
      { name: 'An app', wakes: [{ day: 0.006, label: '09:09 · welcome email' }, { day: 12, label: 'Day 12 · 40% off, trial only' }] },
      { name: 'A bank', wakes: [{ day: 1, label: 'Day 1 · rate 4.6%' }, { day: 30, label: 'Day 30 · rate cut to 4.3%' }] },
      { name: 'A shop', wakes: [{ day: 2, label: 'Day 2 · 10% off' }, { day: 21, label: 'Day 21 · $24 to $19' }, { day: 47, label: 'Day 47 · 30% off' }] },
    ],
    more: {
      name: '+ 997 more',
      days: [0.004, 0.005, 0.007, 0.008, 0.01, 0.012, 0.3, 0.5, 0.8, 1, 1.2, 2, 2.5, 3, 4, 5, 6, 7, 9, 11, 13, 14, 16, 19, 22, 24, 27, 29, 31, 34, 38, 41, 44, 49, 53, 58, 61, 66, 70, 75, 79, 84, 88],
    },
    phases: [
      { title: 'Name the companies', lead: 'Any input:', line: 'a list, a row in Clay, an API call or a tool call from your own agent.' },
      { title: 'A persona signs up', line: 'It signs up, starts the trial or asks for the quote in its own browser, from the country you pick.' },
      { title: 'It stays open', line: 'Its inbox and number stay live, so new emails, texts, prices and offers keep arriving for months.' },
      { title: 'Into your event log', line: 'Each one dated, with its screenshot, ready to search by API, MCP or a table.' },
    ],
  },

  /* What it is built from: each piece, what it does in this job, its call, and its page. */
  pieces: {
    kicker: 'The 6 pieces',
    heading: 'Built from 6 pieces, on one API and one bill.',
    line: 'Use all 6, or only the ones this job needs. Each piece has its own page and its own price.',
    more: { text: 'The pieces and blueprints for portals, quotes and sign-ups sit together in one type of blueprint.', label: 'See the Work behind logins blueprints', to: kitPathOf.portals },
    items: [
      {
        title: 'Personas',
        line: 'Who signs up: one identity with its own inbox, number and browser, free while it waits, with every page, email, text and call in your event log.',
        eg: 'obsession.personas.create()',
        link: { label: 'See personas', to: piecePaths.personas },
      },
      {
        title: 'Browser',
        line: 'Signs up, starts trials and fills baskets from a home connection, and keeps its logins from one visit to the next.',
        eg: 'obsession.browsers.create({ home: "US" })',
        link: { label: 'See the browser', to: piecePaths.browser },
      },
      {
        title: 'Email',
        line: 'The inbox each company writes to: welcome emails, codes, reminders and offers, with threads and attachments.',
        eg: 'obsession.inboxes.create()',
        link: { label: 'See email', to: piecePaths.email },
      },
      {
        title: 'Phone',
        line: 'A number for verification codes, and the texts and calls that follow a sign up.',
        eg: 'obsession.numbers.create({ country: "US" })',
        link: { label: 'See phone', to: piecePaths.phone },
      },
      {
        title: 'Messaging',
        line: 'The WhatsApp updates a company sends after an order or a booking.',
        eg: 'obsession.messaging.connect({ channel: "whatsapp" })',
        link: { label: 'See messaging', to: piecePaths.messaging },
      },
      {
        title: 'Sandbox',
        line: 'Runs your own code on each new event, such as reading the prices off a receipt, and starts only when there’s one to read.',
        eg: 'obsession.sandboxes.create()',
        link: { label: 'See the sandbox', to: piecePaths.sandbox },
      },
    ],
  },

  /* Where the data goes: your AI agent first, then Clay, your code and a webhook. */
  formats: {
    kicker: 'Where it lands',
    heading: 'Use it where you already work.',
    node: { title: 'Your event log', line: 'Every company your personas watch' },
    label: 'Ways to use it',
    agent: {
      label: 'Asked in your AI agent',
      line: 'None of it is on the public web, so no search engine has it. Connect Obsession once, then ask in plain words.',
      where: 'Claude Code',
      connect: 'claude mcp add obsession',
      thread: [
        {
          q: 'Which of the banks we watch changed a savings rate this month, and what did their chat say?',
          a: ['quaystone.example raised its high yield savings rate to 4.75% on Thursday.', 'Its chat kept quoting 4.5% until Friday.'],
          receipts: 'Screenshots: 3 rate pages and 2 chat transcripts, linked',
        },
        {
          q: 'Brief me on quillon.example before Thursday’s call.',
          a: ['Trial users get 40% off the first year on day 12. Its pricing page shows no offer.', 'Its welcome email came in 3 minutes, but support took 31 hours to answer.'],
          receipts: 'Screenshots: 6 emails, 1 page and 1 support thread, linked',
        },
      ],
      from: { label: 'Ask from', items: ['Claude Code', 'Codex', 'Cursor', 'Your own code'] },
    },
    code: {
      label: 'Use from your code',
      line: 'Create a persona, wake on each email it gets, and read its events from your event log.',
      file: 'watch.ts',
      code: CODE,
    },
    formats: formats(),
  },
}
