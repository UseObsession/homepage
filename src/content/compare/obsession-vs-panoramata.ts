import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-panoramata. Every Panoramata fact is from its own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/email_intel.json; the home page and pricing re-read the same day). */

const PANO = 'https://www.panoramata.co/'
const PANO_PRICING = 'https://www.panoramata.co/pricing'
const PANO_FLOWS = 'https://www.panoramata.co/track/flows-journeys-automations'
const PANO_SMS = 'https://www.panoramata.co/track/sms'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Panoramata',
  company: 'Panoramata',
  line: 'Panoramata tracks competitors’ campaigns across channels. Obsession keeps what any company shows signed-up customers.',
  meta: {
    path: '/compare/obsession-vs-panoramata',
    title: 'Obsession vs Panoramata: competitor campaigns and beyond',
    description:
      'Obsession vs Panoramata: Panoramata tracks competitors’ newsletters, flows, ads and SMS; Obsession keeps what any company shows its customers, by API.',
    answer:
      'In Obsession vs Panoramata, Panoramata tracks competitors’ campaigns across channels and Obsession keeps what any company you name shows only to signed-up customers. Panoramata covers newsletters, flows, ads, landing pages, SMS and socials, from $99 a month for 20 competitors; Obsession keeps every email and text beside member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Panoramata suits a marketing team watching campaigns; Obsession suits teams and AI agents that need the whole customer side in their own tools.',
    ogImage: '/og/compare-obsession-vs-panoramata.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Panoramata', path: '/compare/obsession-vs-panoramata' },
    ],
  },
  title: 'Obsession vs Panoramata: competitor campaigns beside what companies show only to customers',
  dek: 'Panoramata puts competitors’ campaigns across channels in one place. Obsession goes past the campaign to the prices, limits and offers a company shows signed-up customers.',
  primaryKeyword: 'obsession vs panoramata',
  keywords: ['panoramata vs obsession', 'panoramata pricing', 'competitor email tracking', 'competitor sms tracking'],
  checked: '2026-11-11',
  readingMinutes: 6,
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
    { kind: 'h3', id: 'obsession', text: 'Obsession: the whole customer side of any company' },
    {
      kind: 'p',
      text: `${ENTITY} The campaign is one part of it: the same record holds the price a signed-in customer pays, what the free plan allows and the offer someone gets when they try to leave, kept for as long as you follow the company.`,
    },

    { kind: 'h2', id: 'at-a-glance', text: 'Panoramata and Obsession at a glance', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'Panoramata’s row is from its own pages, read 11 November 2026. Obsession’s row is from [Home](/) and [the developer page](/developers).',
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
          'Obsession (ours): Search, Insights, Watch, API and MCP',
          'Emails, texts, member prices, trial limits, cancel offers',
          '5 verbs over MCP, the API and SDKs, or a table',
          'Kept from the first sign-up\nEach fact dated with its screenshot',
          'Early access, onboarding teams now\nPriced per call or per company watched',
          'The whole customer side, in your tools',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use Panoramata, and when to use Obsession' },
    {
      kind: 'list',
      items: [
        '**Use Panoramata** for a marketing team that wants competitors’ campaigns on one screen: what they emailed, texted, advertised and launched this week, with alerts and a swipe file of examples.',
        '**Use Obsession** when the question goes past the campaign: what a signed-in [member price](/glossary/member-price) is, where a free plan stops and the [upgrade prompt](/glossary/upgrade-prompt) appears, what a quote form gives one customer profile, and the [save offer](/glossary/save-offer) in the cancel flow. Those sit behind the [login wall](/glossary/login-wall), next to the emails.',
        '**Use Obsession when an agent or a table needs the facts.** Each fact arrives over the API, MCP, a webhook or a Clay column, with its receipt: the raw email with its sender checked, or the page as captured.',
      ],
    },

    { kind: 'h2', id: 'together', text: 'Using Panoramata and Obsession together' },
    {
      kind: 'p',
      text: 'A marketing team can keep Panoramata for the weekly campaign view and add Obsession for the questions its dashboard doesn’t answer: what a competitor charges members, what its trial allows and what it offers a cancelling customer. An agency can use both on a pitch: the campaigns from one, the prospect’s own emails and checkout offers from the other, each dated.',
    },
    {
      kind: 'p',
      text: 'For every option in the same lane, see [Panoramata alternatives by job](/alternatives/panoramata) and [Obsession vs MailCharts](/compare/obsession-vs-mailcharts). For ad tools side by side, see [competitor ad tracking](/blog/competitor-ad-tracking-tools) tools compared by job. One store’s whole record is in [the sample data](/sample-output).',
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
          a: 'Yes. Its pricing page says Panoramata MCP is included in all plans. Obsession runs its 5 verbs over MCP, the API and SDKs, and also lands facts in Clay, Google Sheets or a webhook.',
        },
        {
          q: 'Does Panoramata show member prices or trial limits?',
          a: 'Its pages don’t describe them. Obsession keeps the price a signed-in customer sees beside the public one, a free plan’s limits and when the upgrade prompt appears, each dated with a screenshot.',
        },
        {
          q: 'Which is better for an agency?',
          a: 'Panoramata’s Advanced plan is aimed at agencies and companies with 10 or more markets to monitor. Obsession suits agencies that open pitches with a prospect’s own emails and checkout offers, for any brand they name, delivered into their own tools.',
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
    'recipe:email-sms-tracking',
    'recipe:ad-tracking',
    '/agencies',
    '/sample-output',
  ],
}
