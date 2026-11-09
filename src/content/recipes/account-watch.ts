import type { Recipe } from '../types'

/* Account watch (/recipes/account-watch). A ready-made collection (9 Nov): a customer account open at each company the
   reader sells to, and what each one sends its own customers (emails that stop, links that break, offers that change,
   a journey or a site that fails), dated and landed on the account's record in the reader's CRM. Public news and job
   posts sit beside them as a supplement, never the product. No tracking of individual staff (the old "your champion
   leaves" check is gone), no reading of the reader's usage, tickets or calls. Not offered to agencies. The run is an
   example and says so; the `acctwatch` screen keeps its own words. */

export const recipe: Recipe = {
  id: 'account-watch',
  slug: 'account-watch',
  name: 'Account watch',
  group: 'Watch other companies',
  line: 'What each company you sell to shows its own customers, dated, on the account’s record in your CRM.',
  gets: 'Every morning: the accounts whose emails stopped, links broke or offers changed, each with its receipt.',
  kit: [
    'A customer account at each company you sell to',
    'An inbox and number for each',
    'Every email kept with its arrival time',
    'Their sign-up, basket or booking, walked daily',
    'Their news and job posts, as a supplement',
    'Your CRM, to put each fact on the account',
  ],

  meta: {
    path: '/recipes/account-watch',
    title: 'Account watch: what your accounts send their customers',
    description:
      'What each company you sell to sends its own customers: emails, offers and journeys, dated, with public news beside them, on each account in your CRM.',
    answer:
      'Account watch keeps a customer account open at each company you sell to and records what it sends its own customers. Each fact lands dated on the account’s record in your CRM, with public news and job posts beside it.',
    ogImage: '/og/account-watch.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Account watch', path: '/recipes/account-watch' },
    ],
  },

  hero: {
    headline: 'What every company you sell to shows its own customers.',
    sub: 'Account watch keeps a customer account open at each company you sell to and records what it sends its own customers. Each fact lands dated on the account’s record in your CRM, with public news and job posts beside it.',
    screen: 'acctwatch',
    capture: {
      kind: 'waitlist',
      source: 'recipe-account-watch-hero',
      button: 'Request early access',
      interest: 'account-watch',
    },
  },

  run: {
    tab: 'Example: renewals this quarter',
    recipe: 'account-watch',
    task: 'Every morning, check what the 38 accounts renewing this quarter send their own customers, and their news. Put each change on the account in our CRM.',
    targets: '38 accounts, from your CRM',
    journey: ['Sign up as their customer', 'Keep every email', 'Walk their sign-up and checkout', 'Read public news and job posts'],
    schedule: 'Every morning at 07:00',
    report: 'Slack, and each fact on the account in your CRM',
    kit: ['Profile: new customer', 'An inbox per account', 'Its own number', 'Your CRM'],
    events: [
      { time: 'Mon 07:00', text: '38 accounts read from your CRM.' },
      { time: 'Mon 07:04', text: 'Obsession signs up to each account’s emails and texts, the way its customers do.' },
      { time: 'Tue 07:00', text: 'Payroll SaaS posts 12 sales roles.' },
      { time: 'Wed 07:00', text: 'Snack brand’s welcome emails stop. The last arrived on Monday.' },
      { time: 'Thu 07:05', text: 'Snack brand’s site goes down for the 2nd time this week, seen the way its own customers see it.' },
    ],
    finding: 'Snack brand’s emails stopped and its site went down twice. Payroll SaaS is hiring 12 sales roles.',
    fix: 'Both on the account records in your CRM, each with its receipt, and in #accounts in Slack.',
    ledger: 'Example run. Every fact dated and linked to its receipt.',
  },

  steps: [
    { title: 'Add the accounts', line: 'Every account on your book, from your CRM, a CSV, Clay or the API.' },
    {
      title: 'Obsession becomes their customer',
      line: 'It signs up to each account’s emails and texts, and walks its sign-up, basket or booking as far as you choose.',
    },
    {
      title: 'Every change is dated',
      line: 'Emails that stop, links that break, a new offer, a site that goes down. Public news and job posts sit beside them.',
    },
    { title: 'Facts land on the account', line: 'On its record in your CRM, in Slack each morning, or from the API.' },
  ],

  checks: [
    {
      group: 'As their customer',
      items: [
        { title: 'Their emails and texts', line: 'The day they stop, their links break or the offer changes.' },
        { title: 'Their journeys', line: 'The sign-up, basket or booking their customers use, walked as far as you choose.' },
        { title: 'Their site', line: 'Whether it loads for a customer, each morning.' },
      ],
    },
    {
      group: 'In public, as a supplement',
      items: [
        { title: 'News', line: 'Funding, cuts and takeovers.' },
        { title: 'Job posts', line: 'The roles each account posts, and the teams that grow.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'People', line: 'No tracking of individual staff, and no contact details.' },
        { title: 'Payment', line: 'Every journey stops short of paying.' },
      ],
    },
  ],

  outputs: {
    heading: 'Each account’s changes, in the tools your team already opens.',
    items: [
      { format: 'Your CRM', line: 'Each fact on the account’s record, with its receipt.' },
      { format: 'Slack', line: 'A 07:00 post: the accounts whose customers saw something change.' },
      { format: 'A table', line: 'Every account and every fact, day by day.' },
      { format: 'Webhook', line: 'Each fact as it lands, with its receipt.' },
      { format: 'API and MCP', line: 'Ask your AI agent what changed at an account before a call.' },
    ],
  },

  settings: [
    { k: 'Accounts', v: 'Every account on your book, or the ones renewing soonest' },
    { k: 'Profile', v: 'Who signs up to each account, and from where' },
    { k: 'Journeys', v: 'Emails, texts, sign-up, basket or booking' },
    { k: 'Public signals', v: 'News and job posts, or none' },
    { k: 'How often', v: 'Every morning at 07:00, or when you choose' },
    { k: 'Where it lands', v: 'Your CRM, Slack, a table or a webhook' },
  ],

  forWho: [
    { audience: 'sales', line: 'Account managers see what changed at each account before the renewal call.' },
    { audience: 'founders', line: 'Know which customers’ own businesses are changing while there’s time to call.' },
    { audience: 'developers', line: 'Each account’s facts, with receipts, in your own CRM or app through the API.' },
  ],

  table: {
    heading: 'Everything comes from the customer side or the public web.',
    cols: ['Where it comes from', 'Whose OK'],
    rows: [
      { label: 'Their emails and texts', values: ['An account signed up like any customer’s', 'None: the sign-up any customer uses'] },
      { label: 'Their sign-up, basket or booking', values: ['Walked as their customer, as far as you choose', 'Yours, in your settings'] },
      { label: 'News and job posts', values: ['Public pages anyone can read', 'None needed'] },
      { label: 'Your list of accounts', values: ['Your CRM, connected by you', 'Yours'] },
    ],
  },

  faq: {
    heading: 'Only what their customers see. Who asked is never shown.',
    items: [
      {
        q: 'How do I know an account’s business is changing before they tell us?',
        a: 'Account watch signs up to each account as a customer and dates every change in what it sends: emails that stop, links that break, new offers. Each change lands on the account in your CRM the morning it happens.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real accounts. Obsession’s agents sign up the way any customer can and keep each account open for months. News and job posts come from public pages.',
      },
      {
        q: 'Does it read our customers’ data?',
        a: 'No. It sees only what any of their customers sees, and reads your CRM only to know which accounts to watch.',
      },
      { q: 'Will our accounts know?', a: 'Who asked is never shown. When Obsession talks to a person, it says it’s an AI.' },
      {
        q: 'Does it fit what we sell?',
        a: 'It sees the most when your product touches your accounts’ customers: their emails, texts, checkout or booking.',
      },
      { q: 'How many accounts can it cover?', a: 'As many as you add, every morning.' },
    ],
  },

  final: {
    heading: 'Know what changed at every account before the call.',
    sub: 'Early access includes up to 5 companies added for you, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-account-watch-final',
      button: 'Request early access',
      interest: 'account-watch',
    },
  },
}
