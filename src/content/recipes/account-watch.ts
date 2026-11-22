import type { Recipe } from '../types'

/* Account watch (/recipes/account-watch). Watch other companies. Screen: acctwatch.
   The persona version (20 Nov 2026): a persona the reader defines signs up at each company they sell to and keeps the
   account open for as long as they hold it. What each company sends it (emails that stop, links that break, offers
   that change, a journey or a site that fails) comes back dated and lands on the account's record in the reader's
   CRM. Public news and job posts sit beside them as a supplement, never the product. No tracking of individual staff
   (the old "your champion leaves" check is gone), no reading of the reader's usage, tickets or calls. Not offered to
   agencies. Sold as designed: no index, no caps. The run is an example and says so; the `acctwatch` screen keeps its
   own words. */

export const recipe: Recipe = {
  id: 'account-watch',
  slug: 'account-watch',
  name: 'Account watch',
  group: 'Watch other companies',
  line: 'A persona signs up at each company you sell to and dates changes in your CRM.',
  gets: 'Every morning: the accounts whose emails stopped, links broke or offers changed, from your event log.',
  kit: [
    'A persona signed up at each company you sell to',
    'Its own inbox and number at each',
    'Every email kept with its arrival time',
    'Their sign up, basket or booking, walked daily',
    'Their public news and job posts too',
    'Your CRM, to put each change on the account',
  ],

  meta: {
    path: '/blueprints/account-watch',
    title: 'Watch accounts: what each sends its customers, in your CRM',
    description:
      'A persona signs up at each company you sell to and dates what it sends: emails, offers and journeys, with news beside them, on each account in your CRM.',
    answer:
      'Account watch signs up at each company you sell to as a persona you define and keeps the account open. Every change lands dated on the account’s record in your CRM, beside public news and job posts.',
    ogImage: '/og/account-watch.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Account watch', path: '/blueprints/account-watch' },
    ],
  },

  hero: {
    headline: 'A persona at every account you sell to, so you see what changes first.',
    sub: 'Account watch signs up at each company you sell to as a persona you define and keeps the account open. Every change lands dated on the account’s record in your CRM, beside public news and job posts.',
    screen: 'acctwatch',
    capture: {
      kind: 'waitlist',
      source: 'recipe-account-watch-hero',
      button: 'Request early access',
      interest: 'account-watch',
    },
  },

  unit: 'account check',
  per: 'account',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['A persona signs up with its own inbox and number', 'Every email and text, with the time it arrived', 'Their sign up, basket or booking walked each morning'] },
    { name: 'Starter', includes: ['News and job posts read twice a week', 'A 07:00 Slack post when something changes'] },
    { name: 'Team', includes: ['Each change on the account’s record in your CRM', 'A table of every account and change, day by day'] },
    { name: 'Scale', includes: ['Each account’s history of changes', 'Ask your AI agent what changed before a call'] },
  ],

  run: {
    tab: 'Renewals this quarter',
    recipe: 'account-watch',
    task: 'Every morning, check what the 38 accounts renewing this quarter send a new subscriber, and their news. Put each change on the account in our CRM.',
    targets: '38 accounts, from your CRM',
    journey: ['Sign up as a new subscriber', 'Keep every email', 'Walk their sign up and checkout', 'Read public news and job posts'],
    schedule: 'Every morning at 07:00',
    report: 'Slack, and each change on the account in your CRM',
    kit: ['Persona: new subscriber', 'An inbox per account', 'Its own number', 'Your CRM'],
    events: [
      { time: 'Mon 07:00', text: '38 accounts read from your CRM.' },
      { time: 'Mon 07:04', text: 'A persona signs up to each account’s emails and texts.' },
      { time: 'Tue 07:00', text: 'Payroll SaaS posts 12 sales roles.' },
      { time: 'Wed 07:00', text: 'Snack brand’s welcome emails stop. The last arrived on Monday.' },
      { time: 'Thu 07:05', text: 'Snack brand’s site fails to load for the persona, the 2nd time this week.' },
    ],
    finding: 'Snack brand’s emails stopped and its site went down twice. Payroll SaaS is hiring 12 sales roles.',
    fix: 'Both on the account records in your CRM, each with its screenshots, and in #accounts in Slack.',
    ledger: 'Every change dated, with screenshots.',
  },

  steps: [
    { title: 'Add the accounts', line: 'Every account on your book, from your CRM, a CSV, Clay or the API.' },
    {
      title: 'A persona signs up at each',
      line: 'It joins their emails and texts and walks their sign up, basket or booking.',
    },
    {
      title: 'Every change is dated',
      line: 'Emails that stop, links that break, a new offer, a site that goes down.',
    },
    { title: 'Changes land on the account', line: 'On its record in your CRM, in Slack each morning, or from the API.' },
  ],

  checks: [
    {
      group: 'From the persona’s inbox and browser',
      items: [
        { title: 'Their emails and texts', line: 'The day they stop, their links break or the offer changes.' },
        { title: 'Their journeys', line: 'The sign up, basket or booking anyone can use, walked as far as you choose.' },
        { title: 'Their site', line: 'Whether it loads each morning, from a home connection in their country.' },
      ],
    },
    {
      group: 'In public, beside it',
      items: [
        { title: 'News', line: 'Funding, cuts and takeovers.' },
        { title: 'Job posts', line: 'The roles each account posts, and the teams that grow.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'People', line: 'No tracking of individual staff, and no contact details.' },
        { title: 'Payment', line: 'Every journey stops before payment.' },
      ],
    },
  ],

  outputs: {
    heading: 'Each account’s changes, in the tools your team already opens.',
    items: [
      { format: 'Your CRM', line: 'Each change on the account’s record, with its screenshots.' },
      { format: 'Slack', line: 'A 07:00 post: the accounts where something changed.' },
      { format: 'A table', line: 'Every account and every change, day by day.' },
      { format: 'Webhook', line: 'Each change as it lands, from your event log.' },
      { format: 'API and MCP', line: 'Ask your AI agent what changed at an account before a call.' },
    ],
  },

  settings: [
    { k: 'Accounts', v: 'Every account on your book, or the ones renewing soonest' },
    { k: 'Persona', v: 'Who signs up at each account, and from where' },
    { k: 'Journeys', v: 'Emails, texts, sign up, basket or booking' },
    { k: 'Public signals', v: 'News and job posts, or none' },
    { k: 'How often', v: 'Every morning at 07:00, or when you choose' },
    { k: 'Where it lands', v: 'Your CRM, Slack, a table or a webhook' },
  ],

  forWho: [
    { audience: 'sales', line: 'Account managers see what changed at each account before the renewal call.' },
    { audience: 'founders', line: 'Know which accounts are changing while there’s time to call.' },
    { audience: 'developers', line: 'Each account’s changes, from your event log, in your CRM or app through the API.' },
  ],

  table: {
    heading: 'Everything comes from a persona’s own sign up or the public web.',
    cols: ['Where it comes from', 'Whose OK'],
    rows: [
      { label: 'Their emails and texts', values: ['A persona signed up the way anyone can', 'None: the sign up anyone can use'] },
      { label: 'Their sign up, basket or booking', values: ['Walked by the persona, as far as you choose', 'Yours, in your settings'] },
      { label: 'News and job posts', values: ['Public pages anyone can read', 'None needed'] },
      { label: 'Your list of accounts', values: ['Your CRM, connected by you', 'Yours'] },
    ],
  },

  faq: {
    heading: 'Only what anyone who signs up sees. Who asked is never shown.',
    items: [
      {
        q: 'How do I know an account’s business is changing before they tell us?',
        a: 'Account watch signs up at each account as a persona and dates every change in what it’s sent: emails that stop, links that break, new offers. Each lands on the account in your CRM that morning.',
      },
      {
        q: 'Where do the changes come from?',
        a: 'From real accounts. The persona signs up the way anyone can and keeps each account open for months, as the same person. News and job posts come from public pages.',
      },
      {
        q: 'Does it read our accounts’ data?',
        a: 'No. The persona sees only what anyone who signs up sees, and Account watch reads your CRM only to know which accounts to watch.',
      },
      { q: 'Will our accounts know?', a: 'Who asked is never shown. When the persona talks to a person, it says it’s an AI.' },
      {
        q: 'Does it fit what we sell?',
        a: 'It sees the most when your product touches what your accounts send: their emails, texts, checkout or booking.',
      },
      { q: 'How many accounts can it cover?', a: 'As many as you add, every morning. Run one, or a fleet of thousands.' },
    ],
  },

  final: {
    heading: 'Know what changed at every account before the call.',
    sub: 'Tell us which accounts to watch. We’ll set up the first personas with you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-account-watch-final',
      button: 'Request early access',
      interest: 'account-watch',
    },
  },
}
