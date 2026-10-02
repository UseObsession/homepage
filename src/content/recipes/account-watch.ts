import type { Capture, Recipe } from '../types'

/* Account watch (/recipes/account-watch). Keep customers. Screen: acctwatch (38 accounts; Inside, Outside, Lived;
   Snack brand at risk: usage down 38% in 14 days, 3 urgent tickets, its checkout broke twice; Payroll SaaS hiring 12
   sales roles; the save plan approved).
   Base: site_sales.json "Account watch" (approved copy and demo) and its cofounder flags: news and hiring are the
   commodity half, so the page builds to what only a live, declared customer sees (a journey that breaks, emails that
   stop, links that break), and the fit is sellers whose product their accounts' customers touch. The "moved to a
   rival's platform" signal is held back until 1 real account has said yes (site_home.json). Not offered to agencies
   (James: account intelligence isn't for them).
   Red lines held: inside data only through tools the customer connects, with consent; news, hiring and team pages in
   public; at each account the agent joins the public emails and texts as a declared AI agent working for you; any
   deeper journey (sign up flow, basket, booking) only with the account's OK, stopping before payment; the agent never
   writes to an account: every play is drafted for your team to send. The run is an example and says so. */

const roles: Capture['roles'] = {
  question: 'What’s your role?',
  options: ['Customer success', 'Account management', 'Sales', 'Founder', 'Something else'],
}

const micro = 'We’ll only use your email to tell you about Obsession.'

export const recipe: Recipe = {
  id: 'account-watch',
  slug: 'account-watch',
  name: 'Account watch',
  group: 'Keep customers',
  line: 'Stays a declared customer of every account, reads the tools you connect, and flags churn and upsell with the play drafted.',
  gets: 'Every morning: who’s at risk, who’s ready to grow, and the play for each.',
  kit: [
    'An agent ID, declared as AI',
    'An inbox per account, and its own number',
    'Your CRM, help desk and calls, read only',
    'Each account’s news and hiring, read daily',
    'A check at 07:00, every day',
    'Every signal signed and dated',
  ],

  meta: {
    path: '/recipes/account-watch',
    title: 'Account watch: churn and upsell in every account · Obsession',
    description:
      'With consent, AI agents read the CRM, tickets and calls you connect, track each account’s news and stay its declared customer, then flag churn and upsell.',
    answer:
      'Account watch is an Obsession recipe. With consent, declared AI agents read the CRM, tickets and calls you connect, track each account’s public news and stay a declared customer of it, continuously. Every morning they flag the accounts at risk or ready to grow, with the next move drafted.',
    ogImage: '/og/account-watch.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Account watch', path: '/recipes/account-watch' },
    ],
  },

  hero: {
    headline: 'AI agents that spot churn and upsell in every account.',
    sub: 'With consent, they read the CRM, tickets and calls you connect, track each account’s news and join its emails and texts as a declared customer. Every morning: who’s at risk, who’s ready to grow, and the play.',
    screen: 'acctwatch',
    capture: {
      kind: 'waitlist',
      source: 'recipe-account-watch-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'account-watch',
    },
  },

  run: {
    tab: 'Renewals this quarter',
    recipe: 'account-watch',
    task: 'Every morning, check the 38 accounts renewing this quarter: the usage, tickets and calls we connect, their news, and what their customers get. Flag churn or upsell.',
    targets: '38 accounts, from your CRM',
    journey: ['Read the tools you connect', 'Track news and hiring', 'Stay a declared customer', 'Flag risk and growth'],
    schedule: 'Every morning at 07:00',
    report: 'A Slack alert, the play in your CRM',
    kit: ['Agent ID, declared as AI', 'An inbox per account', 'Its own number', 'Tools you connect'],
    events: [
      { time: 'Mon 07:00', text: '38 accounts read from your CRM, help desk and call notes, with consent.' },
      { time: 'Mon 07:04', text: 'A declared AI agent joins each account’s emails and texts, the way its customers do.' },
      { time: 'Tue 07:00', text: 'Payroll SaaS posts 12 sales roles. Its seats are 92% used.' },
      { time: 'Thu 07:00', text: 'Snack brand: usage down 38% in 14 days, and 3 urgent tickets in 5.' },
      { time: 'Thu 07:05', text: 'With Snack brand’s OK, its declared test customer hits a broken checkout for the 2nd time this week.' },
    ],
    finding: 'Snack brand is at risk, for 3 reasons. Payroll SaaS is ready to grow.',
    fix: 'A save plan and an expansion note, drafted in your CRM for your team to send.',
    ledger: 'Example run. Every signal linked to its source, dated and signed.',
  },

  steps: [
    { title: 'Connect your tools', line: 'Your CRM, help desk and call notes, read only, with consent.' },
    { title: 'Add the accounts', line: 'Every account on your book, from your CRM, a CSV, Clay or the API.' },
    {
      title: 'Agents watch each one',
      line: 'In your tools, in the account’s public news and hiring, and on its own emails and texts, as its declared customer.',
    },
    {
      title: 'You get the play',
      line: 'Every morning: the accounts that need you, each reason with its source, and the next move drafted for your OK.',
    },
  ],

  checks: [
    {
      group: 'Inside, from the tools you connect',
      items: [
        { title: 'Usage', line: 'Logins, seats and the features an account stops using, week on week.' },
        { title: 'Tickets', line: 'Urgent and repeat tickets, and how long they stay open.' },
        { title: 'Calls', line: 'Notes that name a rival, a budget cut or a new boss.' },
      ],
    },
    {
      group: 'Outside, in public',
      items: [
        { title: 'News', line: 'Funding, cuts, takeovers and new leaders.' },
        { title: 'Hiring', line: 'The roles each account posts, and the teams that grow.' },
        { title: 'Your champion', line: 'The day the person who bought from you moves on, from the account’s public pages.' },
      ],
    },
    {
      group: 'Lived, as their customer',
      items: [
        {
          title: 'Their emails and texts',
          line: 'A declared AI agent on each account’s list sees the day its emails stop, its links break or its texts go quiet.',
        },
        {
          title: 'Their journeys',
          line: 'With the account’s OK, the sign up, basket or booking its customers use, stopped before payment.',
        },
      ],
    },
  ],

  outputs: {
    heading: 'The accounts that need you, in the tools your team already opens.',
    items: [
      { format: 'Slack', line: 'An alert the morning an account turns risky or ready to grow, with its reasons.' },
      { format: 'Your CRM', line: 'The risk, the reasons and the drafted play on each account’s record.' },
      { format: 'Email', line: 'A 07:00 note: who’s at risk, who’s ready, and what to do today.' },
      { format: 'Sheet', line: 'Every account and every signal, day by day.' },
      { format: 'Webhook', line: 'Each signal as it lands, with its source and signature.' },
    ],
  },

  settings: [
    { k: 'Accounts', v: 'Every account on your book, or the ones renewing soonest' },
    { k: 'Inside data', v: 'Only the tools you connect, read only' },
    { k: 'Signals', v: 'Usage, tickets, calls, news, hiring and what their customers get' },
    { k: 'How often', v: 'Every morning at 07:00, or when you choose' },
    { k: 'Alerts', v: 'Risk and growth, in Slack, email or your CRM' },
    { k: 'The play', v: 'Save plans, expansion notes and intros, drafted for your team to send' },
  ],

  forWho: [
    { audience: 'sales', line: 'Account managers see churn coming before the renewal call, with the save plan drafted.' },
    { audience: 'founders', line: 'Know which customers are drifting while there’s still time to call them.' },
    { audience: 'developers', line: 'Send every signal, with its source, into your own CRM or app through the API.' },
  ],

  table: {
    heading: 'Inside data only through tools you connect. Everything else in public, or with the account’s OK.',
    cols: ['Where it comes from', 'Whose OK'],
    rows: [
      { label: 'Usage, tickets and calls', values: ['The tools you connect, read only', 'Yours, with consent'] },
      { label: 'News, hiring and their site', values: ['Public pages anyone can read', 'None needed'] },
      { label: 'Their emails and texts', values: ['A declared AI agent joins their list', 'None: the public sign up, declared as your AI agent'] },
      {
        label: 'Their sign up, basket or booking',
        values: ['A declared test customer, stopping before payment', 'The account’s, before it starts'],
      },
    ],
  },

  faq: {
    heading: 'Your tools read with consent. Every agent declared. Nothing sent without your OK.',
    items: [
      {
        q: 'Does it read our customers’ data?',
        a: 'Only what sits in the tools you connect, read only, with consent. It never signs in to an account’s own systems without their OK.',
      },
      {
        q: 'Will our accounts know?',
        a: 'Yes, if they look. The agent on their list says it’s an AI agent working for you. Anything deeper, like walking their checkout, starts only with their OK.',
      },
      {
        q: 'How is this different from a health score?',
        a: 'A health score reads your own data. Agents also live as each account’s customer, so they see what breaks for them before usage drops.',
      },
      {
        q: 'Does it fit what we sell?',
        a: 'It sees the most when your product touches your accounts’ customers: their emails, texts, chat, checkout or booking. The signals from your tools and the news fit any account.',
      },
      {
        q: 'Does it write to the account?',
        a: 'Never. It only joins their emails and texts, as any customer can. The save plan, expansion note or intro is drafted for your team to send.',
      },
      { q: 'How many accounts can it watch?', a: 'As many as you add. Every one is checked every morning.' },
      {
        q: 'Where do the signals land?',
        a: 'In Slack, your CRM, an email, a sheet or a webhook, each with its reasons and the source behind every one.',
      },
    ],
  },

  final: {
    heading: 'See every renewal coming, with the play already drafted.',
    sub: 'Join the waitlist. Account watch comes ready to run on the accounts in your CRM.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-account-watch-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'account-watch',
    },
  },
}
