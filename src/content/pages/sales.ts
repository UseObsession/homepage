import { askShared } from '../shared5'
import { consoleHeading } from '../console'
import type { Page, PricingTabs } from '../types'

/* Sales (/sales), the toolkit rewrite (22 Nov 2026, James: "fix the marketing and sales positioning"): a persona the
   reader defines signs up at each account and competitor they name, starts the trial and asks what a buyer would, and
   every email, price and support answer it gets lands in their event log, dated, with a screenshot, ready before the
   call. A domain is the only input. The blueprints run it (prospect intelligence, trial teardown, account watch, lead
   response, email and SMS tracking). Their words: battlecards, competitor intel, evidence. Sold as designed, as on the
   blueprint pages: no index, no "already covered", no caps. The page: the hero > stale battlecards > 4 jobs from first
   call to win back > asked in plain words > Brand G, the 1 real run > questions > early access. Every use case screen
   is an example. Never name a competitor of ours. */

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

const access = { kind: 'waitlist', button: 'Request early access', interest: 'prospect' } as const

export const page: Page = {
  meta: {
    path: '/sales',
    title: 'Competitor intel for battlecards and briefs · Obsession',
    description:
      'A persona signs up at each account and competitor and brings back what they send: trial emails, discounts, signed-in prices and support answers, dated.',
    answer:
      'A persona you define signs up at each account and competitor you name and keeps every email, price and support answer it gets, dated, with a screenshot. A domain is the only input, from Clay, your CRM or your own agent.',
    ogImage: '/og/sales.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Sales', path: '/sales' },
    ],
  },

  hero: {
    pill: 'Early access',
    pillTo: '#join',
    headline: 'Know what every account sends its customers before you call.',
    sub: 'A persona you define signs up at each account and competitor you name and keeps every email, price and support answer it gets, dated, with a screenshot. A domain is the only input, from Clay, your CRM or your own agent.',
    capture: { ...access, source: 'sales-hero' },
    secondary: { label: 'See sample data', to: '/sample-output' },
    proof: [],
    consoleHeading,
    /* The hero's object: domains in a Clay table, facts landing row by row. */
    screens: [{ tab: 'Clay', screen: 'claycols', recipe: 'prospect', line: '' }],
  },

  gapPair: {
    heading: 'Battlecards go stale the week they’re written.',
    line: 'A persona at each competitor keeps its emails, prices and offers as they arrive.',
    tools: {
      label: 'What you have today',
      items: [
        'Their website and LinkedIn',
        'News and funding alerts',
        'Intent data and firmographics',
        'A battlecard written last quarter',
      ],
    },
    customer: {
      label: 'What Obsession adds',
      items: [
        'Their trial emails, and the day each arrived',
        'The discount sent before the trial ends',
        'Signed-in prices beside the public page',
        'What their support tells a customer, and how fast',
        'A date and a screenshot behind every line',
      ],
    },
  },

  uses: {
    heading: 'From the first call to the win back, every line comes with its evidence.',
    items: [
      {
        tab: 'Account brief',
        moment: 'Friday, 16:00. A first call with Larchwise books for next Friday, and all you’ve seen is their homepage.',
        outcome: 'A brief on what the account sends its own customers, ready the morning of the call.',
        line: 'Their trial emails, prices and support answers, each dated, with talking points drafted and saved to the CRM.',
        whyOnly: 'A trial that goes quiet on day 2 shows only to someone in the trial.',
        recipe: 'prospect',
        screen: 'brief',
      },
      {
        tab: 'Battlecards',
        moment: 'Wednesday, 15:00. A buyer says the competitor is cheaper.',
        outcome: 'Battlecards that stay current, with every competitor’s discount dated.',
        line: 'Each competitor’s trial emails, offers and seat prices fill in as they arrive, and the card updates in your CRM.',
        whyOnly: 'Competitor A’s 20% off reaches only trials still open on day 13. It’s on no pricing page.',
        recipe: 'trial',
        screen: 'battlecard',
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
        tab: 'Win back',
        moment: 'Thursday, 14:00. The lost deals list nobody reopens.',
        outcome: 'Reopen lost accounts the week their new setup breaks.',
        line: 'Each lost account’s emails and texts are kept, so you see the welcome email stop and the code expire after the move.',
        whyOnly: 'Only a subscriber on their list sees the emails stop.',
        recipe: 'email-sms',
        screen: 'winback',
      },
    ],
  },

  ask: {
    ...askShared,
    heading: 'Ask about any account before the call.',
    line: 'Connect Obsession once to Claude Code or Codex and ask across your event log, or call it from code with a domain. Every answer links the emails and pages behind it.',
    areas: ['Prospects', 'Accounts', 'Competitors'],
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
        q: 'Which of our competitors email a discount before the trial ends?',
        a: [
          'Northfold sends 40% off the first year on day 12. Its pricing page shows full price.',
          'Wrenfield offers 3 months at half price on day 13.',
          'Larchwise sends no offer, only “Your trial has ended”.',
        ],
        receipts: 'Screenshots: 9 emails and 3 pricing pages, linked',
      },
      { where: 'Code', q: 'Brief every account on our call list, by domain.', file: 'accounts.ts', code: CODE },
    ],
  },

  /* The 1 real run: Brand G, the September store check. */
  proof: {
    heading: 'A £40 basket left at 02:57. No reminder in 48 hours.',
    line: 'Brand G, a real skincare store, on 22 Sep: every email with the time it arrived, and every screenshot. Every line on a brief or battlecard links to a record like it.',
    cta: { label: 'See the sample data', to: '/sample-output' },
  },

  faq: {
    heading: 'Questions from sales teams.',
    items: [
      {
        q: 'What does Obsession do for a sales team?',
        a: 'A persona you define signs up at each account and competitor you name and keeps every email, price and support answer it gets, dated, with a screenshot. Briefs and battlecards stay current as new ones arrive.',
        link: { label: 'Sales intelligence, role by role', to: '/use-cases/sales-intelligence-behind-the-login' },
      },
      {
        q: 'How is this different from a competitive intelligence tool?',
        a: 'Competitive intelligence tools keep what competitors publish: pages, news and reviews. Obsession keeps what competitors send the people who sign up: trial emails, signed-in prices, discounts and support answers.',
      },
      {
        q: 'Does it work with Clay and our CRM?',
        a: 'Yes. A domain is the only input. Send a list from Clay or your CRM, and each finding comes back to the same row, with its screenshot linked.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real accounts. A persona you define signs up, starts the trial and asks for a quote the way anyone can, from the country you choose, and keeps each account open for months.',
      },
      {
        q: 'Will an account know who asked?',
        a: 'No. The persona has its own name, inbox and number, and who asked is never shown. When it talks to a person, it says it’s an AI.',
      },
      {
        q: 'What does early access include?',
        a: 'API and MCP keys, and a free first run of every blueprint. Tell us which accounts to start with, and we set it up with you.',
      },
    ],
  },

  final: {
    heading: 'Which account is your next call with?',
    capture: { ...access, source: 'sales-final' },
  },
}

/* #pricing (James, 21 Nov 2026): 1 tab per blueprint a sales team runs, from the page's own jobs (briefs, battlecards,
   outbound, win back) to the accounts it sells to and its own lead response (each opening that blueprint's own pricing
   table, components/BlueprintPricingTabs, from content/catalog). */
export const pricing: PricingTabs = {
  heading: 'What a typical month of each blueprint costs.',
  line: 'Prices are worked out from what each run uses, at list rates.',
  label: 'Blueprints for sales teams',
  recipes: ['prospect', 'trial', 'account-watch', 'speed', 'email-sms'],
}
