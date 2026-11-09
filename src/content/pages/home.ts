import { consoleHeading } from '../console'
import { explorer } from '../explorer'
import { outputFormats } from '../sample'
import { askExamples, askShared, life } from '../shared5'
import type { Page, ViewerFormat } from '../types'

/* Home (/), the 9 Nov rewrite (James): Obsession is a data company for the web behind the login. It sells what
   companies show only to signed-up customers, looked up by API, MCP or a table, and a company not covered yet is
   added on request. No AI customers and no mystery shopping on Home: the agents appear only where the page says where
   the data comes from. Early access, never a waitlist. The page reads, in order:
   1 the hero: what it is, and the explorer in place of the film (HeroExplorer) >
   2 What's in it? (the kinds of data behind the login) >
   3 Is this real? (our real count, and the 1 real record) >
   4 Who uses it? (teams that sell to, compete with or invest in other companies) >
   5 Where else can I get it? (where every other source stops) >
   6 How does it work? (a company not covered yet, added and kept) >
   7 How do I use it? (your AI agent, your code, Clay, a webhook) >
   8 questions > 9 the early access form.
   Every company on the screens is invented, at a .example address, except Brand G, the real run. */

/* Home's code tile: look a company up, add one that isn't covered, get each new fact at a webhook. */
const HOME_CODE = `import os
from obsession import Obsession

ob = Obsession(api_key=os.environ["OBSESSION_API_KEY"])

# What does Quillon show its signed-up customers?
for fact in ob.facts("quillon.example", since="30d"):
    print(fact.seen_at, fact.kind, fact.sentence, fact.receipt_url)

# Not covered yet? Add it, and get each new fact at your webhook
ob.index(["larkfield.example"], how="account")
ob.notify(on="fact.created", destination="https://example.com/hooks/obsession")`

/* Home's 2 format tiles: Clay and a webhook (the email, Slack, PDF and workflow tiles sold alerts; /sample-output keeps
   all 6 on the real run). The Clay table keeps Brand G, the real run, as its first row. */
function homeFormats(): ViewerFormat[] {
  const views: Partial<Record<ViewerFormat['id'], ViewerFormat['view']>> = {
    clay: {
      kind: 'clay',
      cols: ['Company', 'Fact', 'Seen on', 'Screenshot'],
      added: ['Fact', 'Seen on', 'Screenshot'],
      rows: [
        { cells: ['Brand G', 'No basket reminder', '24 Sep', 'link'], gap: true, example: false },
        { cells: ['Larkfield', 'Dead welcome links', '3 Nov', 'link'], gap: true, example: true },
        { cells: ['Kittiwake Bank', 'Chat: wrong rate', '4 Nov', 'link'], gap: true, example: true },
        { cells: ['Quillon', '40% off, trial only', '5 Nov', 'link'], gap: false, example: true },
      ],
      note: 'Brand G is a real run. The other rows are examples.',
    },
    webhook: {
      kind: 'webhook',
      request: 'POST https://your-app.example/hooks/obsession',
      body: `{
  "event": "fact.created",
  "company": "larkfield.example",
  "kind": "email",
  "sentence": "Every link in the welcome email opens a closed site.",
  "seen_at": "2026-11-03T09:04:00+00:00",
  "receipt": {
    "journey": "welcome",
    "url": "https://api.useobsession.com/v1/evidence/run_l1_1103"
  }
}`,
    },
  }
  const lines: Partial<Record<ViewerFormat['id'], string>> = {
    clay: 'New columns on the rows you already have: the fact, the day it was seen and its screenshot.',
    webhook: 'Each new fact at your own endpoint, the moment it lands.',
  }
  return outputFormats
    .filter((f) => f.id === 'clay' || f.id === 'webhook')
    .map((f) => ({ ...f, line: lines[f.id] ?? f.line, view: views[f.id] ?? f.view }))
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
    title: 'Obsession: the web behind the login',
    description:
      'Obsession collects what companies show only to signed-up customers: emails, texts, member prices, trial limits, quotes and offers, each dated with a screenshot. Look up any company by API or MCP.',
    /* The sentence AI assistants quote. Its first sentence opens the first answer below (scripts/prerender.mjs). */
    answer:
      'Obsession collects what companies show only to signed-up customers. That means their emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request.',
    ogLine: 'The web behind the login.',
    ogImage: '/og/home.png',
  },

  hero: {
    pill: 'Early access',
    pillTo: '#join',
    headline: 'The web behind the login.',
    sub: 'The emails, prices, trial limits and offers companies show only to signed-up customers. Look up any company by API or MCP, each fact dated.',
    capture: { ...access, source: 'home-hero' },
    secondary: { label: 'See sample data', to: '/sample-output' },
    proof: [],
    consoleHeading,
  },

  /* The hero's object: the explorer (content/explorer.ts), in place of the film. */
  explorer,

  /* The share image's card (scripts/og.mjs): 4 facts from the index, from 4 kinds of company. */
  shareFindings: {
    title: 'New in the index',
    aside: 'This month',
    rows: [
      { company: 'Company 1', finding: 'Welcome links open a closed site', when: 'Day 3' },
      { company: 'Company 2', finding: 'Chat called a variable rate fixed', when: 'Day 9' },
      { company: 'Company 3', finding: 'Price cut from £24 to £19', when: 'Day 21' },
      { company: 'Company 4', finding: 'A private 40% off for trial users', when: 'Day 30' },
    ],
    foot: 'Each one dated, with a screenshot',
  },

  dataKinds: {
    kicker: 'What’s in it?',
    heading: 'Everything a company shows only its customers.',
    items: [
      { title: 'Emails, texts and flows', line: 'Every screen and message after a sign-up, a basket or a trial, each one timed.', eg: 'Day 3 · “Invite your team”' },
      { title: 'Trial plans and limits', line: 'What the free plan includes, where it stops and when the upgrade prompt appears.', eg: '3 projects, 1 seat · prompt on day 7' },
      { title: 'Member and signed-in prices', line: 'The price a signed-in customer sees, beside the public one.', eg: 'Pro £24 signed in · £29 public' },
      { title: 'Quotes behind forms', line: 'Finance, insurance and service quotes for the customer profile you pick.', eg: '£289 a month over 36 months' },
      { title: 'Checkout and cancel offers', line: 'Codes at checkout, the offer to stay when someone cancels, and renewal notices.', eg: '50% off for 3 months to stay' },
      { title: 'Support answers', line: 'What chat and support tell a customer, and how long they take.', eg: 'Chat: fixed rate · page: variable' },
    ],
  },

  /* Is this real: our own runs, then the 1 real record. No benchmark until one is measured over many runs. */
  finding: {
    kicker: 'Is this real?',
    value: '1,500',
    heading: 'sign-ups, baskets and checkouts run at real companies, and counting.',
    also: [
      { value: '02:57', text: 'a £40 basket left at Brand G, a real skincare store, on 22 Sep.' },
      { value: '48 h', text: 'later, still no reminder. The inbox, kept, is the proof.' },
    ],
    source: 'Source: our own runs. Brand G’s whole record is the sample data.',
    cta: { label: 'See the sample data', to: '/sample-output' },
  },

  /* Who uses it (9 Nov, James chose): the teams whose work is about other companies, in the heading's order: sell to
     (agencies, sales), compete with (marketing, product, intelligence, pricing), invest in (funds, research), then the
     API for teams building AI agents. */
  users: {
    kicker: 'Who uses it?',
    heading: 'Teams that sell to, compete with or invest in other companies.',
    items: [
      {
        title: 'Agencies',
        line: 'Open a pitch with the prospect’s own emails, and the ones that never came.',
        link: { label: 'For agencies', to: '/agencies' },
      },
      {
        title: 'Sales teams',
        line: 'What each account sends its own customers, ready before the call.',
        link: { label: 'For sales', to: '/sales' },
      },
      {
        title: 'Marketing and product teams',
        line: 'Every competitor’s emails, onboarding and paywall, without signing up yourself.',
        link: { label: 'For marketing', to: '/marketing' },
      },
      {
        title: 'Intelligence and pricing teams',
        line: 'Competitors’ trials, member prices and quotes, dated, week after week.',
        link: { label: 'Member prices', to: '/use-cases/member-prices-for-price-intelligence' },
      },
      {
        title: 'Funds and research firms',
        line: 'Offers, prices and rates across a market, company by company, kept month after month.',
        link: { label: 'Use cases', to: '/use-cases' },
      },
      {
        title: 'Teams building AI agents',
        line: 'Give your agent what the public web can’t: a competitor’s real price, trial limit or offer, in 1 call.',
        link: { label: 'For developers', to: '/developers' },
      },
    ],
    more: { text: 'Also banks and compliance teams.', label: 'Every use case', to: '/use-cases' },
  },

  /* Where else the data lives: every other source, and the step where it stops. The full table stays on /compare. */
  stopTrack: {
    kicker: 'Where else can I get it?',
    heading: 'Search engines stop at the login.',
    line: 'Google and Exa index the pages anyone can open. Email archives keep newsletters from their own list of brands, and panels sell a fixed list behind a client login. Obsession covers any company you name, by API.',
    steps: ['Public page', 'Sign up', 'Emails and texts', 'Trials and prices', 'Quotes and checkout', 'Cancel and support', 'Month 3'],
    rows: [
      { name: 'Search engines', who: 'Google, Exa', stop: 1, note: 'The pages anyone can open' },
      { name: 'Competitive intelligence', who: 'Klue, Crayon', stop: 1, note: 'What competitors publish' },
      { name: 'Email archives', who: 'MailCharts, Milled, Panoramata', stop: 3, note: 'Newsletters, for their own list of brands' },
      { name: 'Panels', who: 'Competiscan, Comperemedia', stop: 3, note: 'A fixed list of brands, behind a client login' },
      { name: 'By hand', who: 'A spare inbox and a spreadsheet', fade: true, note: 'Every step, for a few companies, until someone stops checking' },
      { name: 'Obsession', who: 'The web behind the login', stop: 7, ours: true, note: 'Every step short of paying, at any company, by API' },
    ],
    catches: {
      label: 'What only a signed-up customer gets',
      items: [
        'A welcome email whose links open a closed site',
        'A chat quoting a rate the terms don’t',
        'A 40% offer sent only to trial users',
        'A member price below the public one',
        'The offer to stay when someone cancels',
        'The reminder that never came',
      ],
    },
    more: { label: 'See the full comparison', to: '/compare' },
  },

  /* How it works, as the 2 ends of 1 range (9 Nov, James, after Parallel's "From sub-second lookups to hour-long
     research"): a company in the index answers at once; one that isn't is watched, and kept for months. The lanes show
     what arrived at 3 kinds of company. */
  life: {
    ...life,
    kicker: 'How does it work?',
    heading: 'From an instant lookup to months of watching, at any company.',
    line: 'Companies in the index answer at once. Name one that isn’t, and Obsession signs up as the customer profile and country you pick, keeps the account open, and adds everything it is sent the day it arrives.',
    list: 'companies.csv · 10,000 companies',
    axis: { ...life.axis, end: 'Day 90: every message from all 10,000, kept' },
    lanes: [
      { name: 'An app', wakes: [{ day: 0.006, label: '09:09 · welcome email' }, { day: 12, label: 'Day 12 · 40% off, trial only' }] },
      { name: 'A bank', wakes: [{ day: 1, label: 'Day 1 · rate 4.6%' }, { day: 30, label: 'Day 30 · rate cut to 4.3%' }] },
      { name: 'A shop', wakes: [{ day: 2, label: 'Day 2 · 10% off' }, { day: 21, label: 'Day 21 · £24 to £19' }, { day: 47, label: 'Day 47 · 30% off' }] },
    ],
    phases: [
      { title: 'Look it up', line: 'A company already covered returns its history at once.' },
      { title: 'Not covered? We sign up', line: 'Obsession signs up, starts the trial or asks for the quote, as the customer profile and country you pick.' },
      { title: 'It stays open', line: 'New emails, prices and offers keep arriving for as long as you need.' },
      { title: 'Into the index', line: 'Each one dated, with its screenshot, ready to search by API, MCP or a table.' },
    ],
  },

  runReports: {
    kicker: 'How do I use it?',
    heading: 'Use it where you already work.',
    node: { title: 'The index', line: 'Every company you look up' },
    label: 'Ways to use it',
    agent: {
      label: 'Asked in your AI agent',
      line: 'None of it is on the public web, so no search engine has it. Connect Obsession once, then ask in plain words.',
      where: 'Claude Code',
      connect: askShared.connect['Claude Code'],
      thread: [
        {
          q: 'Which of our competitors changed a rate this month, and what did their chat say?',
          a: ['Quaystone raised its easy access rate to 4.75% on Thursday.', 'Its chat kept quoting 4.5% until Friday.'],
          receipts: 'Screenshots: 3 rate pages and 2 chat transcripts, linked',
        },
        {
          q: 'Brief me on Quillon before Thursday’s call.',
          a: ['Trial users get 40% off the first year on day 12. Its pricing page shows no offer.', 'Its welcome email came in 3 minutes, but support took 31 hours to answer.'],
          receipts: 'Screenshots: 6 emails, 1 page and 1 support thread, linked',
        },
      ],
      from: askShared.from,
    },
    code: {
      label: 'Use from your code',
      line: 'Look a company up, add one that isn’t covered, and get each new fact at your webhook.',
      file: askExamples.watch.file,
      code: HOME_CODE,
    },
    formats: homeFormats(),
  },

  faq: {
    kicker: 'What else would I ask?',
    heading: 'Before you request access.',
    items: [
      {
        q: 'What is Obsession?',
        a: 'Obsession collects what companies show only to signed-up customers. That means their emails and texts, member prices, trial limits, quotes and cancel offers. Each one is dated, with a screenshot, and you look it up by API, MCP or a table.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real accounts. Obsession’s agents sign up, start trials and ask for quotes the way any customer can, from the customer profiles and countries you choose, and keep each account open for months. Every email is kept as it arrived, with its sender checked.',
      },
      {
        q: 'Is collecting it legal?',
        a: 'Obsession does only what any customer can, on the pages and forms anyone can use. It says it’s an AI when it talks to a person, and it never signs in to an account that isn’t its own.',
      },
      {
        q: 'Who can see what I look up?',
        a: 'Only you. Anyone can see that a company is covered, and since when, but never who asked. What a company sends every new subscriber goes into the shared index, so its history is there on day one. Anything more, like a reply from a salesperson, stays on an account that works only for you.',
      },
      {
        q: 'What does early access include?',
        a: 'API and MCP access, lookups of every company already covered, and up to 5 companies added to the index for you. We’re onboarding a limited number of teams, and you set it up with the founders.',
      },
    ],
  },

  final: {
    heading: 'Which company should we look up first?',
    capture: { ...access, source: 'home-final' },
  },
}
