import { askShared } from '../shared5'
import { consoleHeading } from '../console'
import type { Page, PricingTabs } from '../types'

/* Sales (/sales), blueprint first (22 Nov 2026 revamp): speed to lead and account research. Lead response checks time
   every reply to a new lead; the prospect blueprint briefs each account on a list; account watch dates every change
   at the accounts a team sells to. A persona does the work, and every reply, email and price lands in the event log,
   dated, with a screenshot. Their words: speed to lead, meetings booked, pipeline, win rate. The page: the hero > the
   slow reply nobody sees > 1 tab per job > asked in plain words > Brand G, the 1 real run > a typical month per
   blueprint > questions > Start free. Every screen is an example. Never name a competitor of ours. */

/* The code example, in the API's own names (pages/developers.ts): the blueprint signs up at each account on the list,
   and every finding reaches a webhook before the call. */
const CODE = `import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// A persona signs up at each account, starts the trial and asks support
await obsession.blueprints.run("prospect-intelligence", {
  domains: ["wrenfield.example", "larchwise.example"],
})

// Every finding, at your webhook before the call, with its screenshots
await obsession.events.subscribe({
  url: "https://example.com/hooks/obsession",
  events: ["blueprint.result"],
})`

const access = { kind: 'waitlist', button: 'Start free', interest: 'speed' } as const

const SUB =
  'Pick a blueprint, and Obsession runs it. A persona, an AI agent with its own inbox, number and browser, fills in your forms as a new lead and times every reply. It also signs up at the accounts you sell to and keeps what they send their customers, dated.'

export const page: Page = {
  meta: {
    path: '/sales',
    title: 'AI agents for sales: speed to lead and account research',
    description:
      'AI agents time your speed to lead on every form, chat and sales line. They also sign up at each account you sell to and keep what it sends. Start free.',
    answer: SUB,
    ogImage: '/og/sales.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Sales', path: '/sales' },
    ],
  },

  hero: {
    pill: 'Free plan, no credit card',
    pillTo: '#join',
    headline: 'Time every reply to a new lead. Know every account before the call.',
    sub: SUB,
    capture: { ...access, source: 'sales-hero' },
    secondary: { label: 'See the blueprint', to: '/blueprints/lead-leaks' },
    proof: [],
    consoleHeading,
    /* The hero's object: domains in a Clay table, findings landing row by row. */
    screens: [{ tab: 'Clay', screen: 'claycols', recipe: 'prospect', line: '' }],
  },

  gapPair: {
    heading: 'A slow reply to a new lead shows up weeks later, as a lost deal.',
    line: 'A persona tests every form and account each week, so a gap shows the day it opens.',
    tools: {
      label: 'What you have today',
      items: [
        'A rep filling in the demo form once a quarter',
        'Their website and LinkedIn',
        'Intent data and firmographics',
        'A battlecard written last quarter',
      ],
    },
    customer: {
      label: 'What Obsession adds',
      items: [
        'Every form, chat and sales line timed as a new lead',
        'The leads nobody answered, by form',
        'Each account’s emails, texts and offers, dated',
        'Signed-in prices beside the public page',
        'A screenshot behind every line',
      ],
    },
  },

  uses: {
    heading: 'From the first reply to the renewal, every line has its screenshot.',
    items: [
      {
        tab: 'Speed to lead',
        moment: 'Tuesday, 21:40. A lead fills in your demo form. The first reply arrives at 09:12 the next morning.',
        outcome: 'Your speed to lead on every form, chat and sales line, every week.',
        line: 'A persona fills in each form as a new lead and times the first email, text and call.',
        whyOnly: 'Your CRM logs the leads it answered. The ones nobody answered need someone waiting on the other side.',
        recipe: 'speed',
        screen: 'inbound',
      },
      {
        tab: 'Outbound',
        moment: 'Monday, 09:00. 50 target accounts from Clay, and 1 opener for all of them.',
        outcome: 'The accounts with a real gap rise to the top, each with a dated fact to open on.',
        line: 'Put in the domains. Each comes back with what its customers get, and an opener drafted for you to send.',
        whyOnly: 'Intent data says an account might buy. Its own emails say why.',
        recipe: 'prospect',
        screen: 'leads',
      },
      {
        tab: 'Account brief',
        moment: 'Friday, 16:00. A first call with Larchwise books for next Friday, and all you’ve seen is their homepage.',
        outcome: 'A brief on what the account sends its own customers, ready the morning of the call.',
        line: 'Their trial emails, prices and support answers, each dated, with talking points saved to the CRM.',
        whyOnly: 'A trial that goes quiet on day 2 shows only to someone in the trial.',
        recipe: 'prospect',
        screen: 'brief',
      },
      {
        tab: 'Account watch',
        moment: 'Thursday, 14:00. An account’s welcome email stops the week it moves to a new platform.',
        outcome: 'Every account you sell to, with the day its emails, links or offers change.',
        line: 'A persona stays signed up at each account, and every change lands dated on the account in your CRM.',
        whyOnly: 'News and job posts say a company is changing. Its own emails show the week it happened.',
        recipe: 'account-watch',
        screen: 'acctwatch',
      },
    ],
  },

  ask: {
    ...askShared,
    heading: 'Ask about any account before the call.',
    line: 'Add Obsession to Claude Code or Codex once, then ask across your event log or call it from code with a domain. Every answer links the emails and pages behind it.',
    from: { label: 'Ask from', items: ['Claude Code', 'Codex', 'Cursor', 'Your own code'] },
    areas: ['Your lead forms', 'Accounts', 'Prospects'],
    examples: [
      {
        where: 'Claude Code',
        q: 'Brief me on Wrenfield before Thursday’s call.',
        a: [
          'A new customer gets a welcome email in 4 minutes, but the basket reminder took 26 hours.',
          'Support took 31 hours to answer a delivery question. Their help page promises 24.',
          'Their emails have come from a new platform since 2 October.',
        ],
        receipts: 'Screenshots: 7 emails and 1 support thread, linked',
      },
      {
        where: 'Codex',
        q: 'Which of our forms answered a new lead slowest last week?',
        a: [
          'The pricing page form took 14 hours. Its first reply was a text.',
          'The demo form replied by email in 6 minutes and called in 22.',
          'Site chat handed the lead to a person after 4 minutes.',
        ],
        receipts: 'Screenshots: 3 forms, 5 emails and 2 calls, linked',
      },
      { where: 'Code', q: 'Brief every account on our call list, by domain.', file: 'accounts.ts', code: CODE },
    ],
  },

  /* The 1 real run: Brand G, the September store check. */
  proof: {
    heading: 'A £40 basket left at 02:57. No reminder in 48 hours.',
    line: 'Brand G, a real skincare store, on 22 Sep. Every email is kept with the time it arrived, beside its screenshot. Every line on a brief links to an event like it.',
    cta: { label: 'See sample data', to: '/sample-output' },
  },

  faq: {
    heading: 'Questions from sales teams.',
    items: [
      {
        q: 'What does Obsession do for a sales team?',
        a: 'Its AI agents time how fast you answer a new lead on every form, chat and sales line. They sign up at the accounts you sell to and keep what each sends its customers, so every brief starts from a dated fact.',
        link: { label: 'Sales intelligence, role by role', to: '/use-cases/sales-intelligence-behind-the-login' },
      },
      {
        q: 'Which blueprints does a sales team use?',
        a: 'Lead response checks time your speed to lead. Prospect intelligence briefs each account on your list. Account watch dates every change at the accounts you already sell to.',
        link: { label: 'Every blueprint that watches the market', to: '/blueprints/watch-the-market' },
      },
      {
        q: 'Does it work with Clay and our CRM?',
        a: 'Yes. A domain is the only input. Send a list from Clay or your CRM, and each finding comes back to the same row, with its screenshot linked.',
      },
      {
        q: 'Will an account know who asked?',
        a: 'No. Each persona has its own name, inbox and number, and who asked is never shown. When it talks to a person, it says it’s an AI. It stops before payment and at any identity check.',
      },
      {
        q: 'What does it cost?',
        a: 'Start on the Free plan, with no credit card. A blueprint is billed on the pieces it uses, and the tabs above show a typical month for each.',
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Which lead form should we time first?',
    sub: 'Start with your demo form and your next 10 accounts. Watch what it does to meetings booked, pipeline and win rate.',
    capture: { ...access, source: 'sales-final' },
    link: { label: 'Browse blueprints', to: '/blueprints' },
  },
}

/* #pricing: 1 tab per blueprint on this page, each opening that blueprint's own pricing table
   (components/BlueprintPricingTabs, from content/catalog). */
export const pricing: PricingTabs = {
  heading: 'What a typical month of each blueprint costs.',
  line: 'Prices are worked out from what each run uses, at list rates.',
  label: 'Blueprints for sales teams',
  recipes: ['speed', 'prospect', 'account-watch'],
}
