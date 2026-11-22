import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-mailcharts. Every MailCharts fact is from its own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/email_intel.json; the home page and the agencies page re-read the same day).
   Its pricing address answers with a redirect to Litmus (a Validity product), which lists no MailCharts plan.
   Obsession's side (22 Nov): the toolkit, then the Email and SMS tracking and Competitor tracking blueprints. */

const MC = 'https://www.mailcharts.com/'
const MC_AGENCIES = 'https://mailcharts.com/built-for/agencies'
const MC_PRICING = 'https://www.mailcharts.com/pricing'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs MailCharts',
  company: 'MailCharts',
  line: 'MailCharts keeps ecommerce campaigns to browse. Obsession puts a persona on each competitor’s list and keeps what it’s sent.',
  meta: {
    path: '/compare/obsession-vs-mailcharts',
    title: 'Obsession vs MailCharts (2026): a library or your own list',
    description:
      'Obsession vs MailCharts: MailCharts keeps ecommerce email and SMS campaigns to browse. Obsession’s blueprints keep every email your own competitors send.',
    answer:
      'MailCharts keeps a library of ecommerce email and SMS campaigns to browse and benchmark. Obsession is the toolkit for AI agents, and its Email and SMS tracking blueprint puts a persona on the list of each competitor you name. MailCharts suits campaign ideas across ecommerce. Obsession suits your own competitors, with every email and text dated in your event log and sent to Slack, a sheet or your agent.',
    ogImage: '/og/compare-obsession-vs-mailcharts.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs MailCharts', path: '/compare/obsession-vs-mailcharts' },
    ],
  },
  title: 'Obsession vs MailCharts: a campaign library, or every email your own competitors send',
  dek: 'MailCharts is a library of ecommerce campaigns to browse and benchmark. Obsession puts a persona on each competitor you name and keeps every email and text it’s sent.',
  primaryKeyword: 'obsession vs mailcharts',
  keywords: ['mailcharts vs obsession', 'mailcharts pricing', 'mailcharts validity', 'competitor email tracking'],
  checked: '2026-11-11',
  readingMinutes: 5,
  reader: 'marketing',
  art: {
    kind: 'report',
    title: 'northwind.example',
    period: 'Example: Northwind is an invented store',
    cols: ['The job', 'MailCharts', 'Obsession'],
    rows: [
      { name: 'Campaigns to browse', cells: ['Search, compare, reports', 'Slack, a sheet or the API'], tone: 'info' },
      { name: 'A brand on its index', cells: ['Emails and journeys', 'Every email, dated'], tone: 'info' },
      { name: 'A competitor you name', cells: ['Not described', 'A persona joins its list'], tone: 'ok' },
      { name: 'Texts after sign-up', cells: ['SMS journeys', 'Its own number gets them'], tone: 'info' },
      { name: 'Member price', cells: ['Not described', '£24 member, £29 public'], tone: 'ok' },
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
    { kind: 'h3', id: 'obsession', text: 'Obsession: a persona on each competitor’s list' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: 'For this job, teams pick the [Email and SMS tracking blueprint](/blueprints/email-sms-tracking). A persona, an AI agent with its own inbox and number under one name, joins each competitor’s list. Every email and text it’s sent lands in your event log with its arrival time, a screenshot and the original email. The [Competitor tracking blueprint](/blueprints/competitor-tracking) adds offers, member prices and the ads each competitor runs in public.',
    },

    { kind: 'h2', id: 'at-a-glance', text: 'MailCharts and Obsession at a glance', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'MailCharts’ row is from its own pages, read 11 November 2026. Obsession’s row is from [the blueprint page](/blueprints/email-sms-tracking) and [pricing](/pricing).',
      cols: ['Option', 'What it holds', 'How it’s read', 'Freshness and history', 'Price as listed', 'Best for'],
      rows: [
        [
          'MailCharts: email search, compare, reports',
          'Ecommerce email and SMS campaigns on its index',
          'Web app, exports and reports',
          'Not described on its pages',
          'Not listed\nContact us to get started',
          'Campaign ideas and client benchmarks',
        ],
        [
          'Obsession (ours): Email and SMS tracking and Competitor tracking blueprints',
          'Every email and text your competitors send a persona',
          'Slack, a sheet, your CRM, or the API and MCP',
          'Each email as it lands\nEach event dated in your event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'The competitors on your own list',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use MailCharts, and when to use Obsession' },
    {
      kind: 'list',
      items: [
        '**Use MailCharts** to plan campaigns from a wide library: Black Friday examples across ecommerce, how a category’s welcome emails look, or a benchmark slide for a client.',
        '**Use Obsession** for the competitors you name, whether or not a library covers them. That might be your 10 closest competitors, the brands an agency is pitching, or a software company’s trial. A persona keeps every email and text they send a new customer, beside the welcome code and the [member price](/glossary/member-price), each dated.',
        '**Use Obsession in your own tools.** Results land in Slack, a sheet or your CRM. Developers get each email as an email.received event at one webhook, or connect their agent over MCP.',
      ],
    },
    {
      kind: 'cta',
      text: 'A persona on every competitor’s list, every email and text dated.',
      to: '/blueprints/email-sms-tracking',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'together', text: 'Using MailCharts and Obsession together' },
    {
      kind: 'p',
      text: 'A CRM or retention team can keep MailCharts for ideas and add Obsession for the competitors that move its own numbers. An agency can use MailCharts examples in a strategy deck, then open each pitch with the prospect’s own emails, dated, including the reminder that never came.',
    },
    {
      kind: 'p',
      text: 'For more options in the same lane, see [MailCharts alternatives by job](/alternatives/mailcharts) and [the compare page](/compare). A real run at a UK skincare store, every sign-up, basket and email dated, is in [the sample data](/sample-output).',
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
          a: 'Its pages describe its own index of ecommerce brands, which its agencies page puts at 30,000+ companies tracked, and don’t describe adding a company on request. With Obsession you name the competitors, and a persona signs up at each one.',
        },
        {
          q: 'Does Obsession only track emails?',
          a: 'No. The Competitor tracking blueprint keeps the emails, texts, offers and member prices a competitor shows a persona, and the ads it runs in public, each dated. Developers can also use the pieces directly: inboxes, phone numbers, a cloud browser and a sandbox, on one API and one bill.',
        },
        {
          q: 'How much does Obsession cost?',
          a: 'The Free plan costs nothing and needs no credit card. Paid plans are $20, $99 or $499 a month, each covering at least that much usage at list rates, and a blueprint is billed on the pieces it uses.',
          link: { label: 'See pricing', to: '/pricing' },
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
    '/glossary/member-price',
    'competitor-email-tracking-tools',
    'black-friday-competitor-email-report-template',
    'recipe:email-sms-tracking',
    'recipe:competitor-tracking',
    '/email',
    '/personas',
    '/marketing',
    '/sample-output',
  ],
}
