import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-mailcharts. Every MailCharts fact is from its own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/email_intel.json; the home page and the agencies page re-read the same day).
   Its pricing address answers with a redirect to Litmus (a Validity product), which lists no MailCharts plan. */

const MC = 'https://www.mailcharts.com/'
const MC_AGENCIES = 'https://mailcharts.com/built-for/agencies'
const MC_PRICING = 'https://www.mailcharts.com/pricing'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs MailCharts',
  company: 'MailCharts',
  line: 'MailCharts keeps ecommerce email and SMS campaigns to browse. Obsession keeps what any company you name shows customers.',
  meta: {
    path: '/compare/obsession-vs-mailcharts',
    title: 'Obsession vs MailCharts: campaign library or any company',
    description:
      'Obsession vs MailCharts: MailCharts collects ecommerce email and SMS journeys to browse; Obsession keeps what any company you name shows customers, by API.',
    answer:
      'In Obsession vs MailCharts, MailCharts keeps a library of ecommerce email and SMS campaigns and Obsession keeps what any company you name shows only to signed-up customers. MailCharts signs up to and classifies email journeys for its own index, for browsing and client reports; Obsession keeps every email and text beside member prices, trial limits and cancel offers, each dated with a screenshot and looked up by API, MCP or a table. MailCharts suits inspiration across ecommerce; Obsession suits the competitors and prospects you track.',
    ogImage: '/og/compare-obsession-vs-mailcharts.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs MailCharts', path: '/compare/obsession-vs-mailcharts' },
    ],
  },
  title: 'Obsession vs MailCharts: a campaign library beside what any company shows its customers',
  dek: 'MailCharts is a library of ecommerce campaigns to browse and benchmark. Obsession keeps the customer side of any company you name, emails to cancel offers, by API.',
  primaryKeyword: 'obsession vs mailcharts',
  keywords: ['mailcharts vs obsession', 'mailcharts pricing', 'mailcharts validity', 'competitor email tracking'],
  checked: '2026-11-11',
  readingMinutes: 6,
  reader: 'marketing',
  art: {
    kind: 'report',
    title: 'northwind.example',
    period: 'Example: Northwind is an invented store',
    cols: ['The job', 'MailCharts', 'Obsession'],
    rows: [
      { name: 'Campaigns to browse', cells: ['Search, compare, reports', 'By API, MCP or a table'], tone: 'info' },
      { name: 'A brand on its index', cells: ['Emails and journeys', 'Every email, dated'], tone: 'info' },
      { name: 'A company you name', cells: ['Not described', 'Added on request'], tone: 'ok' },
      { name: 'Signed-in price', cells: ['Not described', '£24 member, £29 public'], tone: 'ok' },
      { name: 'Sender checked', cells: ['Not described', 'DKIM result kept'], tone: 'ok' },
    ],
    notes: ['MailCharts’ column follows its own pages, read 11 November 2026. Not described means its pages don’t say.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-each-is', text: 'What MailCharts and Obsession are' },
    { kind: 'h3', id: 'mailcharts', text: 'MailCharts: email and SMS campaign intelligence' },
    {
      kind: 'p',
      text: `As of 11 November 2026, [MailCharts’ home page](${MC}) is headed “Email and SMS Campaign Intelligence” and presents it as MailCharts from Validity, offering “competitive intelligence, industry insights, and inspiration for email and SMS”. It describes its method plainly: “We signup, trigger, collect, and classify thousands of ecommerce email journeys.” Its tools include email and brand search, comparisons, journeys, lists, reports and exports, and it says over 10,000 brands and agencies use it.`,
    },
    {
      kind: 'p',
      text: `Its [agencies page](${MC_AGENCIES}) says “We’re already tracking 30,000+ companies so you can go in and find the examples you need from Day 1”, and pitches visualisations, campaign examples and benchmark reports for client presentations. Its pages publish no price: the home page says “Contact us to get started”, and [its pricing address](${MC_PRICING}) redirects to a Validity page that lists no MailCharts plan. Its pages don’t describe adding a company you name, member prices, trial limits, cancel flows or an API.`,
    },
    { kind: 'h3', id: 'obsession', text: 'Obsession: any company you name, past the sign-up' },
    {
      kind: 'p',
      text: `${ENTITY} The emails sit beside everything else the company shows a customer, so a welcome code, the price after it and the offer to stay are in one record, kept for as long as you follow the company.`,
    },

    { kind: 'h2', id: 'at-a-glance', text: 'MailCharts and Obsession at a glance', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'MailCharts’ row is from its own pages, read 11 November 2026. Obsession’s row is from [Home](/) and [the developer page](/developers).',
      cols: ['Option', 'What it holds', 'How it’s read', 'Freshness and history', 'Price as listed', 'Best for'],
      rows: [
        [
          'MailCharts: email search, journeys, compare, reports',
          'Ecommerce email and SMS journeys on its index',
          'Web app, exports and reports',
          'Not described on its pages',
          'Not listed\nContact us to get started',
          'Campaign ideas and client benchmarks',
        ],
        [
          'Obsession (ours): Search, Insights, Watch, API and MCP',
          'Emails, texts, member prices, trial limits, cancel offers',
          '5 verbs over MCP, the API and SDKs, or a table',
          'Kept from the first sign-up\nEach fact dated with its screenshot',
          'Early access, onboarding teams now\nPriced per call or per company watched',
          'The competitors and prospects you track',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use MailCharts, and when to use Obsession' },
    {
      kind: 'list',
      items: [
        '**Use MailCharts** to plan campaigns from a wide library: Black Friday examples across ecommerce, how a category’s welcome emails look, or a benchmark slide for a client.',
        '**Use Obsession** for the companies you name, whether or not any library covers them: your 10 closest competitors, the brands an agency is pitching, a software company’s trial. It keeps every email and text they send a new customer, plus the [member price](/glossary/member-price), the [trial limit](/glossary/trial-limit) and the [save offer](/glossary/save-offer), each dated.',
        '**Use Obsession in your own tools.** Each fact reaches your agent over MCP, a webhook or a Clay column, with the raw email and its [DKIM](/glossary/dkim) result, so a report or an alert is built on evidence a client can check.',
      ],
    },

    { kind: 'h2', id: 'together', text: 'Using MailCharts and Obsession together' },
    {
      kind: 'p',
      text: 'A CRM or retention team can keep MailCharts for ideas and add Obsession for the competitors that matter to its numbers. An agency can use MailCharts examples in a strategy deck and open each pitch with the prospect’s own emails from Obsession, dated, including the reminder that never came.',
    },
    {
      kind: 'p',
      text: 'For more options in the same lane, see [MailCharts alternatives by job](/alternatives/mailcharts), and the wider comparison on [the compare page](/compare). One store’s whole record, every inbox watched for 48 hours, is in [the sample data](/sample-output).',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'How much does MailCharts cost?',
          a: 'MailCharts publishes no price. Its home page says contact us to get started, and its pricing address redirects to a Validity page that lists no MailCharts plan, read on 11 November 2026.',
        },
        {
          q: 'Does MailCharts track any company I name?',
          a: 'Its pages describe its own index of ecommerce brands, which its agencies page puts at 30,000+ companies tracked, and don’t describe adding a company on request. Obsession covers any company you name and adds one not yet covered.',
        },
        {
          q: 'Does Obsession only track emails?',
          a: 'No. Obsession keeps the emails and texts a company sends, its member and signed-in prices, trial plans and limits, quotes behind forms, checkout and cancel offers, and what its support tells a customer, each dated.',
        },
        {
          q: 'Is MailCharts part of Validity?',
          a: 'Yes. Its home page presents it as MailCharts from Validity, and its pricing address redirects to a Validity page.',
        },
      ],
    },
  ],
  sources: [
    { title: 'MailCharts: email and SMS campaign intelligence', publisher: 'MailCharts (Validity)', url: MC },
    { title: 'Built for agencies', publisher: 'MailCharts (Validity)', url: MC_AGENCIES },
    { title: 'Pricing', publisher: 'MailCharts (Validity)', url: MC_PRICING },
  ],
  related: [
    '/alternatives/mailcharts',
    '/compare/obsession-vs-panoramata',
    '/alternatives/panoramata',
    '/glossary/welcome-series',
    '/glossary/abandoned-cart-email',
    '/glossary/triggered-flow',
    '/glossary/dkim',
    'competitor-email-tracking-tools',
    'black-friday-competitor-email-report-template',
    'recipe:email-sms-tracking',
    'recipe:competitor-tracking',
    '/marketing',
    '/sample-output',
  ],
}
