import { consoleHeading } from '../console'
import { life, openSource, ways } from '../shared5'
import type { Page } from '../types'

/* Developers (/developers), the October rewrite (COPY.md, "Copy deck > Developers"). Developers, agent builders and
   GTM engineers. The frame: Exa searches the web, Browserbase drives a browser, Obsession is the customer. The 5 verbs
   are the whole surface (lookup, facts, evidence, become_customer, notify), the same as an API, an MCP server and an
   SDK. The runtime is open source; Obsession Cloud runs it, with the history.
   The story: what it is for you (a customer at every company, for your agents) > what you'd build yourself (James's
   "Signing up once is easy") > how a customer agent lives > the 4 ways in and the 5 verbs > the code and the webhook >
   what developers build on it > open source > questions > API access. Every example domain ends in .example. */

export const page: Page = {
  meta: {
    path: '/developers',
    title: 'Obsession API and MCP: give your agents a customer anywhere',
    description:
      'Give your AI agents a customer at every company: 5 verbs over MCP, an API and an SDK, with every email and page kept as proof. The runtime is open source.',
    answer:
      'Obsession gives your AI agents a customer at every company: long lived agents with their own inbox, phone number and browser, behind 5 verbs over MCP, an API and an SDK. The runtime is open source.',
    ogImage: '/og/developers.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Developers', path: '/developers' },
    ],
  },

  hero: {
    pill: '',
    headline: 'Give your agents a customer at every company.',
    sub: 'Obsession gives your AI agents a customer at every company: long lived agents with their own inbox, phone number and browser, behind 5 verbs over MCP, an API and an SDK. The runtime is open source.',
    capture: {
      kind: 'waitlist',
      source: 'developers-hero',
      button: 'Get API access',
      interest: 'any',
    },
    secondary: { label: 'Star it on GitHub', to: 'https://github.com/UseObsession' },
    proof: [],
    consoleHeading,
    screens: [{ tab: 'Record', screen: 'run', recipe: 'mystery', line: '' }],
  },

  gapPair: {
    heading: 'Signing up once is easy. Staying a customer of 10,000 companies is not.',
    line: 'Your agent can reason about a company, but it can’t receive a login code, wait 3 weeks for a price drop or prove an email is real. That is the part Obsession runs.',
    tools: {
      label: 'What you’d build yourself',
      items: [
        'Inboxes, numbers and browsers that keep working',
        'A process that waits weeks without burning tokens',
        'Telling a welcome from a reminder from a price change',
        'Proof each email is real, and when it arrived',
        'Fixing every sign up when a site changes',
      ],
    },
    customer: {
      label: 'What Obsession runs for you',
      items: [
        'An inbox, number and browser for each agent, in many countries',
        'Agents that sleep for free and wake when the company acts',
        'Every message turned into 1 sentence, a fact',
        'DKIM checked and timestamped, every time',
        'Per site programs, rewritten when a page changes',
      ],
    },
  },

  life,
  ways,

  developers: {
    heading: 'Become a customer in 1 call. Facts arrive on your webhook.',
    line: 'TypeScript and Python SDKs on a plain HTTP API. Each fact comes with its receipt: the raw email or page, when it arrived, and its signature checked.',
    code: `import { Obsession } from '@useobsession/sdk'

const ob = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// What the shared record already covers, and since when
const known = await ob.lookup(['rival-a.example', 'rival-b.example'])

// Become a customer of the rest, or join agents already there
await ob.becomeCustomer(['rival-c.example'], { how: 'trial', shared: true })

// Every new fact, pushed as it lands
await ob.notify({ on: 'fact.created', destination: 'https://your-app.example/hooks/obsession' })

// Example: POST https://your-app.example/hooks/obsession
{
  "event": "fact.created",
  "company": "rival-c.example",
  "sentence": "Rival C cut its Pro plan from $49 to $39 a month.",
  "seen_at": "2026-10-14T09:12:31+01:00",
  "receipt": {
    "kind": "email",
    "dkim": "pass",
    "gmail_tab": "Promotions",
    "url": "https://api.useobsession.com/v1/evidence/ev_77d0"
  }
}`,
    screen: 'dev',
    cta: { label: 'Get API access', to: '#join' },
  },

  uses: {
    heading: 'What developers build on it.',
    items: [
      {
        tab: 'Rival tracking as a feature',
        moment: 'Friday 15:00. A customer asks why your app missed a rival’s price rise.',
        outcome: 'Ship rival tracking in your own product, with every change dated and its proof attached.',
        line: 'Agents become a customer of every rival your users name, keep every email and text, and check their pricing pages daily. Each change posts to your app as JSON.',
        whyOnly: 'One customer agent per company, shared across every user who watches it, so the history is there on day one.',
        recipe: 'competitor',
        screen: 'rivals',
      },
      {
        tab: 'Prospect intelligence',
        moment: 'Monday 09:00. Your users import 50 accounts, and every one looks the same.',
        outcome: 'Show each user which accounts have the gap their product fixes, with proof.',
        line: 'For each account your users add, an agent joins the newsletter or starts a trial and keeps what arrives. The gap lands on the account record.',
        whyOnly: 'Contact data says who to email. Agents show what each company actually sends its customers.',
        recipe: 'prospect',
        screen: 'leads',
      },
      {
        tab: 'Every deploy',
        moment: 'Thursday 06:02. Release 2.15 is green. The launch email goes at 08:00.',
        outcome: 'Hold the launch email when a real sign up breaks, before customers find it.',
        line: 'Your deploy calls 1 endpoint. A fresh test user signs up, enters the login code from a real text and opens every email. The verdict reaches your webhook before the 08:00 send.',
        whyOnly: 'A fresh inbox and a real number every run, so your app sees a stranger, not your team’s test account.',
        recipe: 'audit',
        screen: 'ship',
      },
      {
        tab: 'Merchant checks',
        moment: 'Sunday 22:00. A merchant says your basket emails stopped. Your logs say sent.',
        outcome: 'Prove your app works on every merchant’s store, every week.',
        line: 'Each merchant who opts in gets shopped every Monday by an agent working for your app. It leaves a basket and watches its inbox for 48 hours.',
        whyOnly: 'What a real customer gets at every store at once, not what your logs say, with the proof attached.',
        recipe: 'mystery',
        screen: 'shop',
      },
    ],
  },

  openSource,

  faq: {
    heading: 'Questions from developers.',
    items: [
      {
        q: 'What does Obsession give my agent?',
        a: 'Obsession gives your AI agents a customer at every company: long lived agents with their own inbox, phone number and browser, behind 5 verbs over MCP, an API and an SDK. The runtime is open source.',
      },
      {
        q: 'How is it different from Exa, Browserbase or a scraper?',
        a: 'Exa searches the web and Browserbase drives a browser, for as long as your code runs. Obsession is a customer that stays: it signs up, waits weeks or months, and keeps every email and page it gets, with proof.',
      },
      {
        q: 'How do I connect it to Claude or Cursor?',
        a: 'Add the MCP server once, with claude mcp add obsession https://mcp.useobsession.com or your client’s settings, and your agent can call all 5 verbs.',
      },
      {
        q: 'What is open source, and what is Obsession Cloud?',
        a: 'The runtime is open source: the customer agents, how they fan out, sleep and learn, the record, recipes, integrations and the 5 verbs. Obsession Cloud runs it for you, with inboxes and numbers in many countries and months of shared history.',
      },
      {
        q: 'How do I check a fact is real?',
        a: 'Every fact links its receipt: the raw email with its DKIM result, or the page as captured, with the time it arrived. Your users can check it without trusting us.',
      },
      {
        q: 'Which languages can I use?',
        a: 'TypeScript and Python SDKs, on a plain HTTP API, so any language can call it. Webhooks push each new fact as it lands.',
      },
      {
        q: 'What does it cost?',
        a: 'Priced per call or per company watched, never per token. Every key has a spending cap you set.',
      },
    ],
  },

  final: {
    heading: 'Give your agent its first customer.',
    sub: 'Keys open from the waitlist, a team at a time. Tell us what you’ll build and we send yours.',
    capture: {
      kind: 'waitlist',
      source: 'developers-final',
      button: 'Get API access',
      interest: 'any',
    },
  },
}
