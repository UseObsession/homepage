import type { OpenSource, Page, Ways } from '../types'

/* Developers (/developers, "API and MCP" in the nav), the persona rewrite (20 Nov 2026, James): the persona API. A
   developer spawns a persona (who it is, the country it connects from), runs it (where it goes and the task), waits (it
   sleeps for free, and each new email, text, call or page reaches their webhook) and reads the record. The same over
   the API, MCP (their own agent, in any MCP client, spawns personas and reads records as tools) and the SDKs. The code
   matches Home's (pages/home.ts, BUILD_CODE): personas.create({ country, kind }), persona.run({ site, task, wait }),
   run.notify(url), run.record(). The calls Home doesn't show (a fleet, a schedule, a persona held for months) are
   examples, labelled Example. Unlike the buyer pages, this page talks in minutes: $0.10 an active minute, waiting is
   free, linked to /pricing. The story (pages/Developers.tsx): the hero, the persona at work > what you'd build yourself
   > the 4 ways in and the 4 calls > the integrations (the nav links #integrations, #baserow, #supabase, #webhooks) > the
   code and the webhook > what developers build on personas > open source, short > questions > API access. A persona is
   whoever the job needs (a new user, a caller, a lead, a trial user), never defined as a customer. Every example says
   Example and every address ends in .example. The ways in and open source are written here, not in shared5.ts: only
   this page shows them. */

const access = {
  kind: 'waitlist',
  button: 'Get API access',
  interest: 'any',
} as const

/* The code section: Home's 4 calls, then the webhook's JSON for the email Home's example persona wakes on (day 1, 10:02). */
const CODE = `// Example
import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// Spawn: who it is, and where it connects from
const persona = await obsession.personas.create({
  country: "UK",
  kind: "first-time buyer",
})

// Run: where it goes and the task. It stops before payment.
const run = await persona.run({
  site: "https://larkfield.example",
  task: "Sign up, fill a basket, go to checkout",
  wait: "48h",
})

// Wait: it sleeps for free. Each new email, text, call or page reaches your webhook
await run.notify("https://your-app.example/hooks/obsession")

// Record: everything that came back, dated, with screenshots
const record = await run.record()

// Example: POST https://your-app.example/hooks/obsession
{
  "event": "run.email",
  "persona": "Ruth Hallam, first-time buyer, UK",
  "site": "larkfield.example",
  "subject": "Still thinking it over?",
  "received_at": "2026-11-03T10:02:00+00:00",
  "screenshot": "/v1/runs/run_8f2c/screens/7"
}`

/* The ways in: the same persona and the same record from your own agent over MCP, our website, a workflow file or code.
   Each way shows 1 real object. */
const ways: Ways = {
  heading: 'Spawn personas from your agent, a file or your code.',
  line: 'The same persona and the same record every way in. Connect once over MCP, or call the API.',
  ways: [
    {
      kind: 'chat',
      tab: 'In your agent',
      title: 'Your own agent spawns personas as tools',
      line: 'Connect Obsession once over MCP to Claude, ChatGPT, Codex, Cursor or any MCP client. Your agent decides who to send and where, then spawns the personas and reads their records as tools.',
      who: 'For anyone who already works with an AI agent.',
      setup: 'claude mcp add obsession',
      you: 'Sign up to our app as a new user in Brazil, Germany and Japan. Where does onboarding break?',
      calls: ['obsession.personas.create(3 personas: BR, DE, JP)', 'persona.run(site: "app.your-company.example", wait: "48h")', 'run.record(3 runs)'],
      reply: [
        'Brazil: the text code never arrived, so sign up stopped at step 2.',
        'Germany: verified in 40 seconds, but the welcome email links to an English page.',
        'Japan: onboarding finished in 6 minutes, and the day 1 email arrived on time.',
      ],
      proof: 'Example record: 3 personas, 21 pages, 4 emails and 3 texts, each with a screenshot',
    },
    {
      kind: 'platform',
      tab: 'On our website',
      title: 'Pick a recipe, with no code',
      line: 'A recipe is a job personas already know how to do. Pick one, say where it goes, and the same record comes back.',
      who: 'For teammates who don’t write code.',
      ask: 'Shop 5 skincare stores as first-time buyers in the UK, and watch 48 hours for reminders.',
      recipes: ['Agentic mystery shopping', 'Your own task'],
      plan: [
        { k: 'Personas', v: '5 first-time buyers, UK home connections' },
        { k: 'Task', v: 'Sign up, fill a basket, stop before payment' },
        { k: 'Waits', v: '48 hours, waking on each email or text' },
      ],
    },
    {
      kind: 'code',
      tab: 'In a workflow file',
      title: 'Write the job once. The same persona goes back every week.',
      line: 'A plain file your agent or scheduler runs on a schedule. The persona keeps its name, inbox and number, so each site sees the same trial user, week after week.',
      who: 'For RevOps, GTM engineers and QA teams.',
      file: 'playbooks/competitor-trials.md',
      code: `# Example: competitor trials
# Runs every Monday at 08:00, with the same persona

1. persona = obsession.personas.get("trial-user-us")
   Held since September: the same name, inbox and number.

2. For each competitor:
   persona.run({ site, task: "Sign in. Note plan limits and new offers." })

3. Compare each run.record() with last week’s.

4. Update battlecard.md with what changed. Link every
   line to its screenshot.

5. Post what changed to #competitors.`,
    },
    {
      kind: 'code',
      tab: 'From code',
      title: 'Call it like any API',
      line: 'TypeScript and Python SDKs on a plain HTTP API, with webhooks. Every run has a token cap, and every key a monthly spend limit you set.',
      who: 'For developers and agent builders.',
      file: 'fleet.py',
      code: `# Example: 200 new users, every Monday
import os
from obsession import Obsession

obsession = Obsession(api_key=os.environ["OBSESSION_API_KEY"])

# Spawn a fleet: 50 personas in each country
fleet = obsession.personas.create(
    kind="new user", countries=["UK", "US", "DE", "BR"], count=200
)

# Each one signs up to your own app, every Monday
fleet.run(
    site="https://app.your-company.example",
    task="Sign up, verify by text, finish onboarding",
    wait="48h",
    schedule="every Monday 09:00",
)

# Each new email, text and page, at your webhook
fleet.notify("https://your-app.example/hooks/obsession")`,
    },
  ],
  verbs: {
    heading: 'Spawn, run, wait, read',
    items: [
      { name: 'personas.create', line: 'Spawn a persona: who it is, and the country it connects from.' },
      { name: 'persona.run', line: 'Send it to a site with a task, and say how long it waits.' },
      { name: 'run.notify', line: 'It sleeps for free. Each new email, text, call or page reaches your webhook.' },
      { name: 'run.record', line: 'Every page, email, text and call that came back, dated, with screenshots.' },
    ],
  },
}

/* Open source, kept short: the runtime that runs a persona is open; Obsession Cloud keeps fleets of them running. Names
   only, so the section reads in a glance. */
const openSource: OpenSource = {
  heading: 'The runtime is open source.',
  line: 'The code that runs a persona, sleeps it between visits and records everything that comes back is yours to read and run. Obsession Cloud keeps personas running, in any country and by the thousand.',
  core: {
    title: 'Open source: the runtime',
    items: [
      { name: 'Personas with their own inbox and browser' },
      { name: 'Sleep while waiting, and a wake on each email or text' },
      { name: 'Every page, email, text and call recorded, with screenshots' },
      { name: 'The same calls over MCP and the API' },
    ],
  },
  cloud: {
    title: 'Obsession Cloud: personas kept running',
    items: ['Home connections and phone numbers in any country', 'Fleets of thousands, held for months', 'Sign ups kept working as sites change'],
  },
  cta: { label: 'See the code on GitHub', to: 'https://github.com/UseObsession' },
}

export const page: Page = {
  meta: {
    path: '/developers',
    title: 'Obsession API and MCP: spawn personas for your AI agents',
    description:
      'Spawn a persona from code or MCP, with its own inbox, phone number and home connection. It sleeps free while it waits and sends each reply to your webhook.',
    answer:
      'Obsession’s API spawns personas for your agents, each with its own inbox, phone number and home connection in any country. Run one, or a fleet of thousands. Each persona signs up, sleeps for free while it waits and wakes on every email, text or call. It comes back with a dated record, over the API, MCP or SDKs.',
    ogImage: '/og/developers.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Developers', path: '/developers' },
    ],
  },

  hero: {
    pill: 'Early access',
    pillTo: '#join',
    headline: 'Spawn a persona in 1 call. We keep it running.',
    sub: 'Obsession’s API spawns personas for your agents, each with its own inbox, phone number and home connection in any country. Run one, or a fleet of thousands.',
    capture: { ...access, source: 'developers-hero' },
    secondary: { label: 'See pricing', to: '/pricing' },
    /* The small line under the form: the developer reader sees minutes. */
    note: '$0.10 an active minute, tokens included. Waiting is free.',
    proof: [],
    /* Not drawn on this page (Hero5 has no console); the Hero contract asks for one. */
    consoleHeading: [],
    /* The hero's screen: 3 personas at 3 businesses over 3 days, a trial, a first order and a booking enquiry. */
    screens: [{ tab: 'Personas', screen: 'shop', link: { label: 'See a real record', to: '/sample-output' }, line: '' }],
  },

  gapPair: {
    heading: 'A sandbox is gone in minutes. A persona lives as long as you hold it.',
    line: 'Your agent can load a page. It can’t get a login code by text, wait 2 days for a reminder or come back next month as the same person. A persona does all 3, and we keep it running.',
    tools: {
      label: 'What you’d build yourself',
      items: [
        'An inbox, a phone number and a home connection for every identity',
        'A browser that signs up, verifies and fills in forms',
        'A process that sleeps for days and wakes on each email or text',
        'A screenshot and a time for every page and message',
        'Thousands of identities kept alive for months',
      ],
    },
    customer: {
      label: 'What 1 call gives you',
      items: [
        'A persona with its own name, inbox, phone number and home connection, in any country',
        'Its own browser, verified by email, text or call',
        'Free sleep, and a wake on each new email, text or call',
        'A record: every page, email, text and call, dated, with screenshots',
        'One persona or a fleet of thousands, held for months',
      ],
    },
  },

  ways,

  /* Where personas start and where their records go: the nav's Integrations menu links to each card by its id. */
  integrations: {
    kicker: 'Integrations',
    heading: 'Every record lands in the tools you already use.',
    line: 'Send personas out from a row or a Zap, and each new email, text and page comes back the moment it lands.',
    items: [
      { id: 'clay', title: 'Clay', line: 'Each row sends a persona. What came back fills the next columns: what arrived, when, and its screenshot.', eg: 'Row → Persona · What arrived · Screenshot', link: { label: 'Prospect research with Clay', to: '/use-cases/prospect-intelligence-with-clay' } },
      { id: 'zapier', title: 'Zapier', line: 'Spawn a persona from any Zap, and pass each new email, text or page to the next step.', eg: 'New email → Slack, Sheets or your CRM' },
      { id: 'hubspot', title: 'HubSpot', line: 'What each persona got lands on the record you already have, dated, with its screenshot.', eg: 'Company → Timeline · Email received' },
      { id: 'baserow', title: 'Baserow', line: 'A new row sends a persona. Its record fills the next columns as each email, text and page arrives.', eg: 'Row added → Persona sent → 3 columns filled' },
      { id: 'supabase', title: 'Supabase', line: 'Every email, text, call and page lands as a row in your own table, with its screenshot, ready to query.', eg: 'records (persona, kind, site, received_at, screenshot)' },
      { id: 'webhooks', title: 'Webhooks', line: 'Each new email, text, call and page posted to your endpoint as JSON, the moment it lands.', eg: 'POST · run.email · run.text · run.page' },
    ],
  },

  developers: {
    heading: 'Each email, text and call reaches your webhook as it lands.',
    line: 'TypeScript and Python SDKs on a plain HTTP API. A persona costs $0.10 an active minute, tokens and browser included, and nothing while it sleeps.',
    code: CODE,
    screen: 'run',
    cta: { label: 'Get API access', to: '#join' },
  },

  /* A persona is whoever the job needs: a new user of your own product, a caller to your support bot, a lead on your
     form, a trial user at a competitor, held for months. */
  uses: {
    heading: 'A persona can be your new user, your caller, your lead or a competitor’s trial user.',
    items: [
      {
        tab: 'Your own sign up',
        moment: 'Thursday 17:00. Version 4.2 ships, and nobody on the team has a UK number.',
        outcome: 'Live your product’s first 14 days as a new user, in every country you sell in.',
        line: 'After each release, spawn new user personas with UK and US numbers. Each signs up, verifies by text and lives the first 14 days, and each email and text reaches your webhook.',
        whyOnly: 'A test account in staging has no real number or inbox. A persona has both, on a home connection in the country you choose.',
        recipe: 'audit',
        screen: 'qa',
      },
      {
        tab: 'Your AI agent',
        moment: 'Monday 07:00. Your support bot answered 3,000 chats over the weekend.',
        outcome: 'Hear what your support bot tells a stranger, word for word, every morning.',
        line: 'Personas ask your bot the same questions on chat, email and the portal every day, and keep every answer. Your code checks each one against your policy.',
        whyOnly: 'Evals test the model. A persona tests the bot people actually reach, on the channels they use, and says it’s an AI.',
        recipe: 'support-bot',
        screen: 'botcheck',
      },
      {
        tab: 'Speed to lead',
        moment: 'Wednesday 09:00. A lead fills in your demo form. The first reply comes at 13:12.',
        outcome: 'Time the first reply to every lead, by email, text or call.',
        line: 'A lead persona fills in your demo form, opens site chat and calls your sales line 3 times a day. Each first reply is timed, and the slow ones post to your app.',
        whyOnly: 'Your CRM logs the leads it received. A persona sees what a lead gets back, and how long it took.',
        recipe: 'speed',
        screen: 'inbound',
      },
      {
        tab: 'Competitor tracking',
        moment: 'Friday 15:00. A user asks why your app missed a competitor’s price rise.',
        outcome: 'Ship competitor tracking inside your product, every change dated, with its screenshot.',
        line: 'Hold a trial user persona at each competitor your users name. It signs in every morning, wakes on each email, and each change posts to your app as JSON.',
        whyOnly: 'A scraper sees the public page. A persona held for months signs in, and sees the plan limits and every email a trial user gets.',
        recipe: 'competitor',
        screen: 'rivals',
      },
    ],
  },

  openSource,

  faq: {
    heading: 'Questions from developers.',
    items: [
      {
        q: 'What does the Obsession API do?',
        a: 'Obsession’s API spawns personas for your agents, each with its own inbox, phone number and home connection in any country. You spawn a persona and run it on a site with a task. It sleeps while it waits, and you read its record over the API, MCP or the SDKs.',
      },
      {
        q: 'What is a persona?',
        a: 'An identity on the web with its own name, inbox, phone number, home connection and browser, acting as someone you define. It can be a first-time buyer, a lead, a job applicant, a new user of your own product or a caller to a voice line.',
      },
      {
        q: 'How do I connect it to Claude or Cursor?',
        a: 'Add the MCP server once, with claude mcp add obsession in Claude Code or in your client’s settings. Your agent can then spawn personas, start runs and read records as tools. Early access includes API and MCP keys.',
      },
      {
        q: 'What counts as an active minute?',
        a: 'Any minute a persona spends working: loading pages, filling in forms, reading a new email or text. It costs $0.10, tokens and browser time included. Waiting is free, and each wake counts as 1 minute at least.',
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'How long does a persona live?',
        a: 'For as long as you hold it. After each visit it waits 48 hours by default, or as long as you set, and wakes on each email, text or call. Hold it for months and it comes back as the same person, with the same name, inbox and number.',
      },
      {
        q: 'Can I run personas on a schedule, or thousands at once?',
        a: 'Give a run a schedule, every day, week or month, and it runs with no one there to start it. One call spawns 1 persona or a fleet of thousands, each with its own identity.',
      },
      {
        q: 'What happens at checkout or an ID check?',
        a: 'A persona stops before payment by default, so nothing is bought. Pass a payment card of your own in the run and it completes the order. When a site asks for ID, the persona hands that step to a person.',
      },
      {
        q: 'How is it different from Browserbase, an inbox API or a scraper?',
        a: 'Browserbase runs a browser while your code runs. An inbox API gives you an inbox. A scraper reads the pages anyone can open. A persona is all of it assembled, sleeping between visits and kept running for months. Your agent can call all of them.',
      },
      {
        q: 'What stops a run from running away?',
        a: 'Every run has a token cap, and every key a monthly spend limit you set. When a persona talks to a person, it says it’s an AI.',
      },
    ],
  },

  final: {
    heading: 'Who should your agent spawn first?',
    sub: 'Early access includes API and MCP keys, and the free plan comes with 30 active minutes a month. Tell us who your first persona is, and we’ll set it up with you.',
    capture: { ...access, source: 'developers-final' },
  },
}
