import { askShared } from '../shared5'
import { consoleHeading } from '../console'
import type { Page } from '../types'

/* Agencies (/agencies), the 9 Nov rewrite to Home's story: growth, ecommerce, lifecycle and Clay agencies open a pitch
   with the prospect's own emails, and the ones that never came, cover every client and prospect, and report straight
   to the client. The page: the hero > the unpaid part of the job > 4 jobs (win, outbound, keep, report) > asked in
   plain words > Brand G, the 1 real run > questions > early access. Every use case screen is an example. */

/* The code example: each prospect's facts, then a new client's competitors added and pushed to a webhook. */
const CODE = `import os
from obsession import Obsession

ob = Obsession(api_key=os.environ["OBSESSION_API_KEY"])

# What did each prospect send its customers this month?
for prospect in ["fernhollow.example", "northfold.example"]:
    for fact in ob.facts(prospect, since="30d"):
        print(prospect, fact.seen_at, fact.sentence, fact.receipt_url)

# A new client's competitors: add them, and get each new email at your webhook
ob.index(["wrenfield.example", "larchwise.example"], how="newsletter")
ob.notify(on="fact.created", destination="https://example.com/hooks/obsession")`

const access = { kind: 'waitlist', button: 'Request early access', interest: 'any' } as const

export const page: Page = {
  meta: {
    path: '/agencies',
    title: 'Open every pitch with the prospect’s own emails · Obsession',
    description:
      'Open a pitch with the prospect’s own emails, and the ones that never came. Every client and prospect covered, each fact dated, sent straight to the client.',
    answer:
      'Obsession collects what every client and prospect sends its signed-up customers, from the welcome email to the reminder that never came, each dated with a screenshot. Open a pitch on it, and report it straight to the client.',
    ogImage: '/og/agencies.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Agencies', path: '/agencies' },
    ],
  },

  hero: {
    pill: 'Early access',
    pillTo: '#join',
    headline: 'Open every pitch with the prospect’s own emails.',
    sub: 'Obsession collects what every client and prospect sends its signed-up customers, from the welcome email to the reminder that never came, each dated with a screenshot. Open a pitch on it, and report it straight to the client.',
    capture: { ...access, source: 'agencies-hero' },
    secondary: { label: 'See sample data', to: '/sample-output' },
    proof: [],
    consoleHeading,
    /* The hero's object: 12 prospects from Clay, a pitch filling with its findings. */
    screens: [{ tab: 'Every prospect', screen: 'pack', recipe: 'prospect', line: '' }],
  },

  gapPair: {
    heading: 'Clients pay for what you find. Finding it is the unpaid part.',
    line: 'A weekend signing up to a prospect before each pitch, screenshots in a shared drive, a competitor report that takes a week. Obsession does the signing up for every client and prospect, and keeps every email, dated.',
    tools: {
      label: 'What you have today',
      items: [
        'A weekend audit before each pitch',
        'Screenshots in a folder per client',
        'A competitor swipe file nobody updates',
        'Ad dashboards that stop at the click',
      ],
    },
    customer: {
      label: 'What Obsession keeps',
      items: [
        'The prospect’s welcome email, codes and texts, before the pitch',
        'The reminder that never came, with the time the basket was left',
        'Every client’s competitors’ emails and offers, dated',
        'Member prices and checkout codes beside the public ones',
        'A screenshot behind every line, ready for the client',
      ],
    },
  },

  uses: {
    heading: 'Pitches won, clients kept, and a report you can bill for.',
    items: [
      {
        tab: 'Win the pitch',
        moment: 'Thursday’s pitch, and all you’ve seen is their homepage.',
        outcome: 'Open on their own emails, and the texts that never came.',
        line: 'Their welcome email, codes and texts, each dated, go into the pitch and the first line of your email.',
        whyOnly: 'A missing text shows only to someone who gave a number and waited.',
        recipe: 'prospect',
        screen: 'proofmail',
      },
      {
        tab: 'Outbound for clients',
        moment: 'Monday, 09:00. 50 prospects from Clay for a client’s outbound.',
        outcome: 'The prospects with a real gap rise to the top, each with a dated fact to open on.',
        line: 'Put in the domains. Each comes back with what its customers get, and an opener drafted for you to send.',
        whyOnly: 'Enrichment says who a company is. Its own emails say what it gets wrong.',
        recipe: 'prospect',
        screen: 'leads',
      },
      {
        tab: 'Keep every client',
        moment: 'A month before renewal, the client asks what the retainer buys.',
        outcome: 'A record of every gap in the client’s own emails, fixed and checked again.',
        line: 'What each client’s customers get is checked every week. A gap comes with its fix drafted, and the next check shows it worked.',
        whyOnly: 'Every step is dated, with its screenshot, so the client can check the work.',
        recipe: 'audit',
        screen: 'approve',
      },
      {
        tab: 'Report to every client',
        moment: 'A client asks what their competitors send. You’d charge for the answer if it didn’t take a week.',
        outcome: 'A monthly competitor report in your brand, sent straight to the client.',
        line: 'Every competitor of every client is covered, and the report goes out under your name.',
        whyOnly: 'Competitors save their best offers for subscribers, so the report shows what their customers get.',
        recipe: 'email-sms',
        screen: 'report',
      },
    ],
  },

  ask: {
    ...askShared,
    heading: 'Ask across every client and prospect at once.',
    line: 'Connect Obsession once to Claude Code or Codex, or call it from code. Every answer links the emails and pages behind it, ready to send to a client.',
    areas: ['Clients', 'Prospects', 'Their competitors'],
    examples: [
      {
        where: 'Claude Code',
        q: 'Show me every email our prospect’s 3 competitors sent since September, for Thursday’s pitch.',
        a: [
          '61 emails across the 3, 9 of them basket and browse reminders.',
          'Only Fern Hollow sends a welcome series. Your prospect sends none.',
          'Fern Hollow’s emails land in Primary. The other 2 land in Promotions.',
        ],
        receipts: 'Screenshots: 61 emails, linked',
      },
      {
        where: 'Codex',
        q: 'Which clients’ welcome emails landed in Promotions this month?',
        a: [
          '3 of 12: Northfold, Wrenfield and Larchwise.',
          'Wrenfield’s moved from Primary to Promotions after its new sender went live on 8 October.',
          'The other 9 landed in Primary, the same as last month.',
        ],
        receipts: 'Screenshots: 12 welcome emails, with their Gmail tabs',
      },
      { where: 'Code', q: 'Get every new email from each client’s competitors at our webhook.', file: 'clients.py', code: CODE },
    ],
  },

  /* The 1 real run: Brand G, the September store check. */
  proof: {
    heading: 'A £40 basket left at 02:57. No reminder in 48 hours.',
    line: 'Brand G, a real skincare store, on 22 Sep. Its whole record is the sample data: every email with the time it arrived, and every screenshot. Open your next pitch on a record like it.',
    cta: { label: 'See the sample data', to: '/sample-output' },
  },

  faq: {
    heading: 'Questions from agencies.',
    items: [
      {
        q: 'What does Obsession do for an agency?',
        a: 'Obsession collects what every client and prospect sends its signed-up customers, from the welcome email to the reminder that never came, each dated with a screenshot. You open pitches on it and report it straight to the client.',
      },
      {
        q: 'Can reports go out under our brand?',
        a: 'Yes. Reports and pitch packs carry your name and logo, and go out from your own address.',
      },
      {
        q: 'Does it work with Clay?',
        a: 'Yes. Send a list of domains from Clay and each company comes back with dated facts and screenshots, ready for the first line of an email.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real accounts. Obsession’s agents sign up, fill baskets and ask for quotes the way any customer can, from the customer profiles and countries you choose, and keep each account open for months.',
      },
      {
        q: 'Does a prospect know we looked it up?',
        a: 'No. Anyone can see that a company is covered, and since when, but never who asked.',
      },
      {
        q: 'What does early access include?',
        a: 'API and MCP access, lookups of every company already covered, and up to 5 companies added to the index for you. We’re onboarding a limited number of teams, and you set it up with the founders.',
      },
    ],
  },

  final: {
    heading: 'Which prospect are you pitching next?',
    capture: { ...access, source: 'agencies-final' },
  },
}
