import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /alternatives/panoramata. Every tool fact is from the tool's own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/email_intel.json; Panoramata, MailCharts, Reyo, SendView, Foreplay and
   Competitor Inbox re-read the same day). */

const PANO = 'https://www.panoramata.co/'
const PANO_PRICING = 'https://www.panoramata.co/pricing'
const MC = 'https://www.mailcharts.com/'
const REYO = 'https://reyo.ai/'
const FOREPLAY = 'https://www.foreplay.co/pricing'
const SENDVIEW = 'https://sendview.io/'
const COMP_INBOX = 'https://competitorinbox.com/pricing'

export const ref: ReferencePage = {
  kind: 'alternatives',
  name: 'Panoramata alternatives',
  company: 'Panoramata',
  line: 'Campaign libraries, ad libraries, inboxes for the competitors you name, and the web behind the login, each with its price.',
  meta: {
    path: '/alternatives/panoramata',
    title: 'Panoramata alternatives for tracking competitors’ marketing',
    description:
      'Panoramata alternatives by job: campaign and ad libraries, inboxes for competitors you name, and what competitors show only to customers, with each price.',
    answer:
      'The best Panoramata alternative depends on the job: MailCharts or Reyo for a library of ecommerce campaigns, Foreplay for an ad library, and SendView or Competitor Inbox to keep every email from the competitors you name. For what any company shows only to signed-up customers, from emails and texts to member prices, trial limits and cancel offers, Obsession keeps it dated and looked up by API, MCP or a table.',
    ogImage: '/og/alternatives-panoramata.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Alternatives', path: '/alternatives' },
      { name: 'Panoramata', path: '/alternatives/panoramata' },
    ],
  },
  title: 'Panoramata alternatives: by job, including what competitors show only to customers',
  dek: 'Teams leave Panoramata for one channel done deeply, a smaller bill, or the prices and offers behind the sign-up. Each option, by job, with its price as listed.',
  primaryKeyword: 'panoramata alternatives',
  keywords: ['panoramata alternative', 'alternatives to panoramata', 'panoramata competitors', 'panoramata pricing'],
  checked: '2026-11-11',
  readingMinutes: 7,
  reader: 'marketing',
  art: {
    kind: 'sides',
    title: 'How each tool watches',
    rows: [
      {
        name: 'Campaign libraries',
        who: 'Panoramata, MailCharts, Reyo',
        nodes: ['Brands they track', 'Emails, SMS, ads', 'Search and alerts'],
        links: ['collect', 'browsed in'],
      },
      {
        name: 'Ad libraries',
        who: 'Foreplay',
        nodes: ['Ads you save', 'Boards and reports'],
        links: ['organised in'],
      },
      {
        name: 'Capture inboxes',
        who: 'SendView, Competitor Inbox',
        nodes: ['Competitors you name', 'Every email they send', 'Your archive'],
        links: ['subscribed to', 'kept in'],
      },
      {
        name: 'Obsession',
        who: 'Behind the login',
        nodes: ['Any company you name', 'Emails, prices, trials, offers', 'API, MCP or a table'],
        links: ['keeps, dated', 'looked up by'],
        lit: 1,
        ours: true,
      },
    ],
    foot: 'Each row follows the tools’ own pages, read 11 November 2026.',
  },
  blocks: [
    { kind: 'h2', id: 'why', text: 'Why teams look for a Panoramata alternative' },
    {
      kind: 'p',
      text: `[Panoramata](${PANO}) is “The best way to track your competitors” for many teams: it tracks “newsletters, flows, ads, landing pages, SMS, socials, website changes, and much more” in one place. Teams look elsewhere for reasons its [pricing page](${PANO_PRICING}) and product pages show, read on 11 November 2026:`,
    },
    {
      kind: 'list',
      items: [
        '**The entry plan’s limits.** Startup, at $99 a month, covers 20 competitors and 6 months of history, with email and ad libraries; SMS, landing page and flow libraries start on Professional at $179 a month.',
        '**Breadth when one channel is the job.** A team that needs only competitors’ emails, or only ads, may want a tool built for that one channel.',
        '**The campaign, not the customer side.** Its pages don’t describe member or signed-in prices, trial limits, quotes behind forms or cancel flows.',
      ],
    },

    { kind: 'h2', id: 'by-job', text: 'Panoramata alternatives by job', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'From each tool’s own pages, read 11 November 2026, with the price each lists. Not described means its pages don’t say.',
      cols: ['Option', 'What it does well', 'Price as listed', 'Where it stops', 'Best for'],
      rows: [
        [
          'MailCharts: email search, journeys, reports',
          'Ecommerce email and SMS journeys to browse',
          'Not listed\nContact us to get started',
          'Its own index of brands',
          'Campaign ideas and benchmarks',
        ],
        [
          'Reyo: newsletters, push, Meta ads, websites',
          'Ecommerce campaigns, with an MCP server',
          'From €69 a month\nBusiness €399 a month',
          'Signed-in prices not described',
          'Ecommerce teams on a smaller bill',
        ],
        [
          'Foreplay: saved ads, boards, creative reports',
          'An ad library and reports on your own ads',
          'Basic $59 a month\nWorkflow $175 a month',
          'Ads, not emails',
          'Creative and performance teams',
        ],
        [
          'SendView: emails from companies you choose',
          'Any company’s email tactics',
          'Standard $69 a month, 10 companies\nUltimate $169 a month, 50',
          'Email only',
          'Following a set list',
        ],
        [
          'Competitor Inbox: emails from competitors you add',
          'An archive per competitor',
          'Starter $25 a month, 1 competitor\nBusiness $249 a month, 25',
          'Email only\nCompetitors capped by plan',
          'A few competitors',
        ],
        [
          'Obsession (ours): Search, Insights, Watch, API and MCP',
          'Any company you name, emails to cancel offers',
          'Early access, onboarding teams now\nPriced per call or per company watched',
          'Stops before payment and any identity check',
          'The whole customer side, in your tools',
        ],
      ],
    },
    { kind: 'h3', id: 'campaigns', text: 'For a library of competitors’ campaigns' },
    {
      kind: 'p',
      text: `[MailCharts](${MC}) says “We signup, trigger, collect, and classify thousands of ecommerce email journeys” and publishes no price. [Reyo](${REYO}) covers “newsletters, push notifications, Meta ads and websites” for ecommerce teams, from €69 a month, with an MCP server of 49 tools.`,
    },
    { kind: 'h3', id: 'ads', text: 'For competitors’ ads' },
    {
      kind: 'p',
      text: `[Foreplay](${FOREPLAY}) lists Basic at $59 a month to “Save and organize ad inspiration into shareable boards” and Workflow at $175 a month to “Analyze competitors and get creative analytics on your own ads”. Obsession’s [ad tracking recipe](/recipes/ad-tracking) follows a competitor’s ad past the click, to the landing page and the offer behind it.`,
    },
    { kind: 'h3', id: 'emails', text: 'For every email from the competitors you name' },
    {
      kind: 'p',
      text: `[SendView](${SENDVIEW}) tracks up to 10 companies for $69 a month and 50 for $169. [Competitor Inbox](${COMP_INBOX}) starts at $25 a month for 1 competitor and reaches $249 for 25. Both keep emails only.`,
    },
    { kind: 'h3', id: 'behind-the-login', text: 'For what competitors show only to signed-up customers' },
    {
      kind: 'p',
      text: `${ENTITY} Beside the emails and texts sit the [member price](/glossary/member-price), the [trial limit](/glossary/trial-limit), the [upgrade prompt](/glossary/upgrade-prompt) and the [save offer](/glossary/save-offer) in the cancel flow, each kept for as long as you follow the company. Panoramata and Obsession are compared side by side on [Obsession vs Panoramata](/compare/obsession-vs-panoramata).`,
    },

    { kind: 'h2', id: 'choose', text: 'Which Panoramata alternative to choose' },
    {
      kind: 'list',
      items: [
        '**You want ecommerce campaigns to browse, on a smaller bill:** Reyo, or MailCharts if a quote suits you.',
        '**Ads are the job:** Foreplay.',
        '**You name the competitors and want every email:** SendView or Competitor Inbox.',
        '**You need prices, trials and cancel offers beside the campaigns, for any company, in your own tools or an AI agent:** Obsession.',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best Panoramata alternative?',
          a: 'It depends on the job: Reyo or MailCharts for ecommerce campaigns, Foreplay for ads, SendView or Competitor Inbox for the competitors you name, and Obsession for what any company shows only to signed-up customers, emails to cancel offers.',
        },
        {
          q: 'How much does Panoramata cost?',
          a: 'Panoramata lists Startup at $99 a month for 20 competitors and 6 months of history, Professional at $179 a month, Advanced at $399 a month and Enterprise priced individually, read on 11 November 2026.',
        },
        {
          q: 'Is there a cheaper alternative to Panoramata?',
          a: 'For email only, Competitor Inbox starts at $25 a month for 1 competitor and SendView at $69 a month for 10 companies. Reyo starts at €69 a month for ecommerce campaigns.',
        },
        {
          q: 'Does any alternative show competitors’ member prices?',
          a: 'Obsession is the one tool here whose pages describe keeping the price a signed-in customer sees beside the public one, dated with a screenshot.',
          link: { label: 'What a member price is', to: '/glossary/member-price' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Panoramata: the best way to track your competitors', publisher: 'Panoramata', url: PANO },
    { title: 'Pricing', publisher: 'Panoramata', url: PANO_PRICING },
    { title: 'MailCharts: email and SMS campaign intelligence', publisher: 'MailCharts (Validity)', url: MC },
    { title: 'Reyo: competitor monitoring for ecommerce teams', publisher: 'Reyo', url: REYO },
    { title: 'Pricing', publisher: 'Foreplay', url: FOREPLAY },
    { title: 'SendView: track any company’s email marketing', publisher: 'SendView', url: SENDVIEW },
    { title: 'Pricing', publisher: 'Competitor Inbox', url: COMP_INBOX },
  ],
  related: [
    '/compare/obsession-vs-panoramata',
    '/alternatives/mailcharts',
    '/compare/obsession-vs-mailcharts',
    '/glossary/member-price',
    '/glossary/trial-limit',
    '/glossary/save-offer',
    'competitor-email-tracking-tools',
    'how-to-see-competitor-ads',
    'ecommerce-competitive-intelligence',
    'recipe:ad-tracking',
    'recipe:email-sms-tracking',
    '/marketing',
  ],
}
