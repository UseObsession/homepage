import { consoleHeading } from '../console'
import { openSource, ways } from '../shared5'
import type { Page } from '../types'

/* Developers (/developers), the 9 Nov rewrite after Home: the web behind the login, as an API for teams building AI
   agents, developers and GTM engineers. 5 verbs (lookup, facts, evidence, index, notify), the same over MCP, the API and
   SDKs. The story: what your agent gets > what you'd build yourself to get it > the ways in and the verbs > the code
   and the webhook > what developers build on it > open source, short > questions > API access. Every example domain
   ends in .example. */

const access = {
  kind: 'waitlist',
  button: 'Get API access',
  interest: 'any',
} as const

export const page: Page = {
  meta: {
    path: '/developers',
    title: 'Obsession API and MCP: the web behind the login, for agents',
    description:
      'Give your agents what companies show only signed-up customers: emails, member prices, trial limits, quotes and offers, all dated. 5 verbs over MCP and API.',
    answer:
      'Obsession gives AI agents what companies show only to signed-up customers. That means their emails and texts, member prices, trial limits, quotes and cancel offers, each dated with its receipt, behind 5 verbs over MCP, the API and SDKs.',
    ogImage: '/og/developers.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Developers', path: '/developers' },
    ],
  },

  hero: {
    pill: 'Early access',
    pillTo: '#join',
    headline: 'The web behind the login, as an API for your agents.',
    sub: 'What companies show only signed-up customers: emails, member prices, trial limits, quotes and offers, each dated with its receipt. 5 verbs over MCP, the API and SDKs.',
    capture: { ...access, source: 'developers-hero' },
    secondary: { label: 'See sample data', to: '/sample-output' },
    proof: [],
    consoleHeading,
    /* The hero's screen: competitors' emails and texts, each dated as it arrived. */
    screens: [{ tab: 'Inbox', screen: 'inbox', link: { label: 'See sample data', to: '/sample-output' }, line: '' }],
  },

  gapPair: {
    heading: 'Signing up once is easy. Keeping 10,000 accounts open for months is not.',
    line: 'Your agent can read a page. It can’t receive a login code, wait 3 weeks for a price change or prove when an email arrived. Obsession runs that part and hands you the facts.',
    tools: {
      label: 'What you’d build yourself',
      items: [
        'Inboxes, phone numbers and browsers that keep working',
        'Weeks of waiting for the next email, at every company',
        'Telling a welcome from a reminder from a price change',
        'A receipt for every email: sender checked, time it arrived',
        'Fixing each sign-up when a site changes',
      ],
    },
    customer: {
      label: 'What Obsession gives you',
      items: [
        'Accounts at any company, in the country and profile you pick',
        '10,000 companies at once, each kept open for months',
        'Every message turned into 1 dated fact',
        'The raw email with its DKIM result, or the page as captured',
        'Sign-ups kept working as sites change',
      ],
    },
  },

  ways,

  /* Where the facts come from and where they go: the nav's Integrations menu links to each card by its id. */
  integrations: {
    kicker: 'Integrations',
    heading: 'Facts land in the tools you already use.',
    line: 'Send companies in from a table, and each new fact back out, the moment it lands.',
    items: [
      { id: 'clay', title: 'Clay', line: 'A column of facts on the rows you already have. Add a domain, get its emails, prices and offers.', eg: 'Company → Fact · Seen on · Screenshot', link: { label: 'Prospect research with Clay', to: '/use-cases/prospect-intelligence-with-clay' } },
      { id: 'baserow', title: 'Baserow', line: 'A new row looks the company up, or watches it if it isn’t covered. Its facts fill the next columns.', eg: 'Row added → 3 columns filled' },
      { id: 'supabase', title: 'Supabase', line: 'Every new fact lands as a row in your own table, with its receipt link, ready to query.', eg: 'facts (company, kind, sentence, seen_at)' },
      { id: 'webhooks', title: 'Webhooks', line: 'Each new fact posted to your endpoint as JSON, the moment it lands.', eg: 'POST · fact.created' },
      { id: 'mcp', title: 'MCP', line: 'Claude, ChatGPT, Codex and Cursor call the same 5 verbs. Connect once, then ask in plain words.', eg: 'claude mcp add obsession' },
      { id: 'sheets', title: 'Google Sheets', line: 'A formula on any row returns that company’s latest facts, and refreshes as new ones arrive.', eg: '=OBSESSION.FACTS(A2, "offers")' },
    ],
  },

  developers: {
    heading: 'Look a company up in 1 call. Each new fact reaches your webhook.',
    line: 'TypeScript and Python SDKs on a plain HTTP API. Each fact comes with its receipt: the raw email or page, the time it arrived, and the sender checked.',
    code: `import { Obsession } from '@useobsession/sdk'

const ob = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// Is it covered, and since when?
const covered = await ob.lookup(['quillon.example', 'larkfield.example'])

// Every offer Quillon sent its customers in the last 30 days
const offers = await ob.facts('quillon.example', { kind: 'offer', since: '30d' })

// Not covered yet? Add it
await ob.index(['larkfield.example'], { how: 'account' })

// Each new fact, at your webhook
await ob.notify({ on: 'fact.created', destination: 'https://your-app.example/hooks/obsession' })

// Example: POST https://your-app.example/hooks/obsession
{
  "event": "fact.created",
  "company": "larkfield.example",
  "kind": "email",
  "sentence": "Every link in the welcome email opens a closed site.",
  "seen_at": "2026-11-03T09:04:00+00:00",
  "receipt": {
    "journey": "welcome",
    "dkim": "pass",
    "url": "https://api.useobsession.com/v1/evidence/run_l1_1103"
  }
}`,
    screen: 'memberfeed',
    cta: { label: 'Get API access', to: '#join' },
  },

  /* Uses that read data about other companies. QA of your own app (every deploy, merchant checks) left with the old
     story. */
  uses: {
    heading: 'What developers build on it.',
    items: [
      {
        tab: 'Competitor tracking as a feature',
        moment: 'Friday 15:00. A user asks why your app missed a competitor’s price rise.',
        outcome: 'Ship competitor tracking inside your product, every change dated, with its screenshot.',
        line: 'Call index for each competitor your users name. Their emails, trial limits and signed-in prices arrive as facts, and each change posts to your app as JSON.',
        whyOnly: 'A company is indexed once and shared, so a competitor already covered arrives with its history. Who asked is never shown.',
        recipe: 'competitor',
        screen: 'rivals',
      },
      {
        tab: 'Prospect research',
        moment: 'Monday 09:00. Your users import 50 accounts, and every one looks the same.',
        outcome: 'Brief each account from what it sends its own customers.',
        line: 'For each account, facts returns its trial limits, welcome emails, signed-in prices and support answers. Your app writes them onto the account record, each with its receipt.',
        whyOnly: 'Contact data says who to email. Obsession shows what each company sends a signed-up customer.',
        recipe: 'prospect',
        screen: 'brief',
      },
      {
        tab: 'Price and offer answers',
        moment: 'Saturday 10:00. A user asks your agent where coffee is cheapest with a loyalty card.',
        outcome: 'Answer price questions with the member price, not only the shelf price.',
        line: 'Your agent calls facts across a list of retailers, by kind and persona, and answers with member prices, coupons and offers, each linked to its screenshot.',
        whyOnly: 'Search engines see the shelf price. Only a signed-in member sees the member price and the coupon.',
        recipe: 'prices',
        screen: 'members',
      },
    ],
  },

  openSource,

  faq: {
    heading: 'Questions from developers.',
    items: [
      {
        q: 'What does Obsession give my agent?',
        a: 'Obsession gives AI agents what companies show only to signed-up customers. That means their emails and texts, member prices, trial limits, quotes and cancel offers, each dated with its receipt. Your agent reaches it with 5 verbs over MCP, the API or the SDKs.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real accounts. Obsession’s agents sign up, start trials and ask for quotes the way any customer can, from the customer profiles and countries you choose, and keep each account open for months. A company not covered yet is added when you call index.',
      },
      {
        q: 'How is it different from Exa, Browserbase or a scraper?',
        a: 'Exa searches the pages anyone can open, and Browserbase drives a browser for as long as your code runs. Obsession keeps accounts open at each company for months and returns what they were sent, dated. Your agent can call all 3.',
      },
      {
        q: 'How do I connect it to Claude or Cursor?',
        a: 'Add the MCP server once, with claude mcp add obsession https://mcp.useobsession.com or your client’s settings, and your agent can call all 5 verbs.',
      },
      {
        q: 'How do I check a fact is real?',
        a: 'Every fact links its receipt: the raw email with its DKIM result, or the page as captured, with the time it arrived. Your users can check it without trusting us.',
      },
      {
        q: 'Which languages can I use?',
        a: 'TypeScript and Python SDKs, on a plain HTTP API, so any language can call it. Webhooks send each new fact as it lands.',
      },
      {
        q: 'What does it cost?',
        a: 'Priced per call or per company watched, never per token. Every key has a spending cap you set.',
      },
    ],
  },

  final: {
    heading: 'Which company should your agent look up first?',
    sub: 'Early access includes API and MCP keys, lookups of every company already covered, and up to 5 companies added for you.',
    capture: { ...access, source: 'developers-final' },
  },
}
