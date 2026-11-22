import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-panoramata. Every Panoramata fact is from its own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/email_intel.json; the home page and pricing re-read the same day; pricing
   re-read 22 Nov 2026, unchanged). Obsession's side (22 Nov): the toolkit, then the Competitor tracking blueprint. */

const PANO = 'https://www.panoramata.co/'
const PANO_PRICING = 'https://www.panoramata.co/pricing'
const PANO_FLOWS = 'https://www.panoramata.co/track/flows-journeys-automations'
const PANO_SMS = 'https://www.panoramata.co/track/sms'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Panoramata',
  company: 'Panoramata',
  line: 'Panoramata tracks competitors’ campaigns across channels. Obsession puts a persona at each one and keeps what it’s sent.',
  meta: {
    path: '/compare/obsession-vs-panoramata',
    title: 'Obsession vs Panoramata (2026): a library or your own list',
    description:
      'Obsession vs Panoramata: Panoramata tracks competitors’ emails, flows, ads and SMS from $99 a month. Obsession’s personas sign up and keep what they get.',
    answer:
      'Panoramata tracks competitors’ newsletters, flows, ads, landing pages, SMS and socials, from $99 a month for 20 competitors. Obsession is the toolkit for AI agents, and its Competitor tracking blueprint puts a persona at each competitor you name. Panoramata suits a marketing team watching campaigns on one screen. Obsession suits teams that want every email, text, offer and member price dated in their own tools.',
    ogImage: '/og/compare-obsession-vs-panoramata.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Panoramata', path: '/compare/obsession-vs-panoramata' },
    ],
  },
  title: 'Obsession vs Panoramata: competitors’ campaigns, or a persona at each competitor',
  dek: 'Panoramata puts competitors’ campaigns across channels in one place. Obsession signs a persona up at each competitor and keeps the emails, offers and prices it’s shown.',
  primaryKeyword: 'obsession vs panoramata',
  keywords: ['panoramata vs obsession', 'panoramata pricing', 'competitor email tracking', 'competitor sms tracking'],
  checked: '2026-11-11',
  readingMinutes: 5,
  reader: 'marketing',
  art: {
    kind: 'report',
    title: 'northwind.example',
    period: 'Example: Northwind is an invented store',
    cols: ['The job', 'Panoramata', 'Obsession'],
    rows: [
      { name: 'Newsletters and flows', cells: ['Tracked for you', 'Every email, dated'], tone: 'info' },
      { name: 'Ads on 6 platforms', cells: ['Meta, TikTok, YouTube…', 'Ad to landing page'], tone: 'info' },
      { name: 'Signed-in price', cells: ['Not described', '£24 member, £29 public'], tone: 'ok' },
      { name: 'Free trial’s limits', cells: ['Not described', '3 projects, day 7 prompt'], tone: 'ok' },
      { name: 'Offer in the cancel flow', cells: ['Not described', '50% off for 3 months'], tone: 'ok' },
    ],
    notes: ['Panoramata’s column follows its own pages, read 11 November 2026. Not described means its pages don’t say.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-each-is', text: 'What Panoramata and Obsession are' },
    { kind: 'h3', id: 'panoramata', text: 'Panoramata: competitors’ campaigns in one place' },
    {
      kind: 'p',
      text: `As of 11 November 2026, [Panoramata’s home page](${PANO}) reads “The best way to track your competitors” and offers to “Track all their campaigns: newsletters, flows, ads, landing pages, SMS, socials, website changes, and much more”, with ads from Meta, Display, Pinterest, TikTok, LinkedIn and YouTube. Its [flows page](${PANO_FLOWS}) says it tracks companies “across 300 industries and 150 countries”, and its [SMS page](${PANO_SMS}) says texts are tracked for you, without subscribing yourself.`,
    },
    {
      kind: 'p',
      text: `[Its pricing page](${PANO_PRICING}) lists Startup at $99 a month for 20 competitors, 6 months of history and email and ad libraries; Professional at $179 a month with unlimited competitors and history and SMS, landing page and flow libraries; Advanced at $399 a month; and Enterprise priced individually. It says “Panoramata MCP is included in all plans”. Its pages don’t describe member or signed-in prices, trial limits, quotes behind forms or cancel flows.`,
    },
    { kind: 'h3', id: 'obsession', text: 'Obsession: a persona at each competitor' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: 'For this job, teams pick the [Competitor tracking blueprint](/blueprints/competitor-tracking). A persona, an AI agent with its own inbox and number under one name, signs up at each competitor you name and keeps the account open. Every email, text, offer and price it’s sent lands in your event log, dated, with a screenshot. The [Ad tracking blueprint](/blueprints/ad-tracking) follows each public ad to its page, price and code.',
    },

    { kind: 'h2', id: 'at-a-glance', text: 'Panoramata and Obsession at a glance', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'Panoramata’s row is from its own pages, read 11 November 2026. Obsession’s row is from [the blueprint page](/blueprints/competitor-tracking) and [pricing](/pricing).',
      cols: ['Option', 'What it holds', 'How it’s read', 'Freshness and history', 'Price as listed', 'Best for'],
      rows: [
        [
          'Panoramata: emails, flows, ads, landing pages, SMS, socials',
          'Competitors’ campaigns across channels',
          'Web app, alerts, reports and MCP',
          '6 months on Startup\nUnlimited from Professional',
          'Startup $99 a month\nProfessional $179 a month\nAdvanced $399 a month',
          'Marketing teams watching campaigns',
        ],
        [
          'Obsession (ours): Competitor tracking, Email and SMS tracking and Ad tracking blueprints',
          'Emails, texts, offers and member prices a persona is sent',
          'Slack, a sheet, your CRM, or the API and MCP',
          'Each event as it lands\nDated in your event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'The whole customer side, in your tools',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use Panoramata, and when to use Obsession' },
    {
      kind: 'list',
      items: [
        '**Use Panoramata** for a marketing team that wants competitors’ campaigns on one screen: what they emailed, texted, advertised and launched this week, with alerts and a swipe file of examples.',
        '**Use Obsession** when the question goes past the campaign: the signed-in [member price](/glossary/member-price), where a free plan stops and the [upgrade prompt](/glossary/upgrade-prompt) appears, and the [save offer](/glossary/save-offer) in the cancel flow. A persona sees each one behind the [login wall](/glossary/login-wall), next to the emails.',
        '**Use Obsession when an agent or a table needs the facts.** Each event reaches your agent over MCP, a webhook or a sheet, with its screenshot or the original email.',
      ],
    },
    {
      kind: 'cta',
      text: 'A persona at each competitor, every email, offer and price dated.',
      to: '/blueprints/competitor-tracking',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'together', text: 'Using Panoramata and Obsession together' },
    {
      kind: 'p',
      text: 'A marketing team can keep Panoramata for the weekly campaign view and add Obsession for what its dashboard doesn’t show. That means what a competitor charges members, what its trial allows and what it offers a customer who cancels. An agency can use both on a pitch, with the campaigns from one and the prospect’s own emails and checkout offers from the other, each dated.',
    },
    {
      kind: 'p',
      text: 'For every option in the same lane, see [Panoramata alternatives by job](/alternatives/panoramata) and [Obsession vs MailCharts](/compare/obsession-vs-mailcharts). For ad tools side by side, see [competitor ad tracking](/blog/competitor-ad-tracking-tools) tools compared by job. A real run at a UK skincare store, every event dated, is in [the sample data](/sample-output).',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'How much does Panoramata cost?',
          a: 'Panoramata lists Startup at $99 a month for 20 competitors and 6 months of history, Professional at $179 a month with unlimited competitors and history, Advanced at $399 a month and Enterprise priced individually, read on 11 November 2026.',
        },
        {
          q: 'Does Panoramata have an MCP server?',
          a: 'Yes. Its pricing page says Panoramata MCP is included in all plans. Obsession connects to your agent over MCP too, with one API for every piece and blueprint, and sends results to Slack, Google Sheets or a webhook.',
        },
        {
          q: 'Does Panoramata show member prices or trial limits?',
          a: 'Its pages don’t describe them. Obsession’s Competitor tracking blueprint keeps the price a signed-in persona sees beside the public one, and the Trial teardown blueprint keeps a free plan’s limits and when the upgrade prompt appears, each dated with a screenshot.',
        },
        {
          q: 'Which is better for an agency?',
          a: 'Panoramata’s Advanced plan is aimed at agencies and companies with 10 or more markets to monitor. Obsession suits agencies that open pitches with a prospect’s own emails and checkout offers. They pick a blueprint, name the brands, and results land in their own tools.',
          link: { label: 'Obsession for agencies', to: '/agencies' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Panoramata: the best way to track your competitors', publisher: 'Panoramata', url: PANO },
    { title: 'Track your competitors’ flows', publisher: 'Panoramata', url: PANO_FLOWS },
    { title: 'Track your competitors’ SMS', publisher: 'Panoramata', url: PANO_SMS },
    { title: 'Pricing', publisher: 'Panoramata', url: PANO_PRICING },
  ],
  related: [
    '/alternatives/panoramata',
    '/compare/obsession-vs-mailcharts',
    '/alternatives/mailcharts',
    '/glossary/member-price',
    '/glossary/upgrade-prompt',
    '/glossary/save-offer',
    '/glossary/sms-stop',
    'competitor-email-tracking-tools',
    'ecommerce-competitive-intelligence',
    'how-to-see-competitor-ads',
    'competitor-ad-tracking-tools',
    'recipe:competitor-tracking',
    'recipe:email-sms-tracking',
    'recipe:ad-tracking',
    '/personas',
    '/agencies',
    '/sample-output',
  ],
}
