import { askShared } from '../shared5'
import { consoleHeading } from '../console'
import type { Page } from '../types'

/* Sales (/sales), the 9 Nov rewrite to Home's story: sales teams, RevOps and GTM engineers get what each account and
   competitor sends its own customers, ready before the call, with a domain as the only input. Their words: battlecards,
   competitor intel, evidence. The page: the hero > stale battlecards > 4 jobs from first call to win back > asked in
   plain words > Brand G, the 1 real run > questions > early access. Every use case screen is an example. */

/* The code example: an account's facts before the call, then a competitor not covered yet added. */
const CODE = `import os
from obsession import Obsession

ob = Obsession(api_key=os.environ["OBSESSION_API_KEY"])

# What did Wrenfield send its customers this month?
for fact in ob.facts("wrenfield.example", since="30d"):
    print(fact.seen_at, fact.kind, fact.sentence, fact.receipt_url)

# A competitor not covered yet? Add it, and get each new fact at your webhook
ob.index(["larchwise.example"], how="account")
ob.notify(on="fact.created", destination="https://example.com/hooks/obsession")`

const access = { kind: 'waitlist', button: 'Request early access', interest: 'prospect' } as const

export const page: Page = {
  meta: {
    path: '/sales',
    title: 'Competitor intel for battlecards and briefs · Obsession',
    description:
      'What each account and competitor sends its own customers, ready before the call: trial emails, discounts, signed-in prices and support answers, each dated.',
    answer:
      'Obsession shows what each account and competitor sends its own customers, ready before the call, with every fact dated and its screenshot linked. A domain is the only input, from Clay, your CRM or your own agent.',
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
    sub: 'Obsession shows what each account and competitor sends its own customers, ready before the call, with every fact dated and its screenshot linked. A domain is the only input, from Clay, your CRM or your own agent.',
    capture: { ...access, source: 'sales-hero' },
    secondary: { label: 'See how it compares', to: '/compare' },
    proof: [],
    consoleHeading,
    /* The hero's object: domains in a Clay table, facts landing row by row. */
    screens: [{ tab: 'Clay', screen: 'claycols', recipe: 'prospect', line: '' }],
  },

  gapPair: {
    heading: 'Battlecards go stale the week they’re written.',
    line: 'Someone signs up to a competitor once, screenshots the pricing page, and the card is out of date by the next price change. Obsession keeps each competitor’s emails, prices and offers as they arrive.',
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
    line: 'Connect Obsession once to Claude Code or Codex, or call it from code with a domain. Every answer links the emails and pages behind it.',
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
      { where: 'Code', q: 'Pull an account’s facts by domain before the call.', file: 'accounts.py', code: CODE },
    ],
  },

  /* The 1 real run: Brand G, the September store check. */
  proof: {
    heading: 'A £40 basket left at 02:57. No reminder in 48 hours.',
    line: 'Brand G, a real skincare store, on 22 Sep. Its whole record is the sample data: every email with the time it arrived, and every screenshot. Every line on a brief or battlecard links to a record like it.',
    cta: { label: 'See the sample data', to: '/sample-output' },
  },

  faq: {
    heading: 'Questions from sales teams.',
    items: [
      {
        q: 'What does Obsession do for a sales team?',
        a: 'Obsession shows what each account and competitor sends its own customers, ready before the call, with every fact dated and its screenshot linked. Briefs and battlecards stay current as new emails, prices and offers arrive.',
      },
      {
        q: 'How is this different from Klue or Crayon?',
        a: 'They keep what competitors publish: pages, news and reviews. Obsession keeps what competitors send their signed-up customers: trial emails, signed-in prices, discounts and support answers.',
      },
      {
        q: 'Does it work with Clay and our CRM?',
        a: 'Yes. A domain is the only input. Send a list from Clay or your CRM, and each fact comes back to the same row, with its screenshot linked.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real accounts. Obsession’s agents sign up, start trials and ask for quotes the way any customer can, from the customer profiles and countries you choose, and keep each account open for months.',
      },
      {
        q: 'Does an account know we looked it up?',
        a: 'No. Anyone can see that a company is covered, and since when, but never who asked.',
      },
      {
        q: 'What does early access include?',
        a: 'API and MCP access, lookups of every company already covered, and up to 5 accounts added to the index for you. We’re onboarding a limited number of teams, and you set it up with the founders.',
      },
    ],
  },

  final: {
    heading: 'Which account is your next call with?',
    capture: { ...access, source: 'sales-final' },
  },
}
