import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /alternatives/mailcharts. Every tool fact is from the tool's own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/email_intel.json; MailCharts, Panoramata, SendView, Owletter, Competitor
   Inbox and Reyo re-read the same day). Milled refused automated reads, so it carries no facts here. "competitor email
   tracking tools" stays with its guide (docs/SEARCH.md §2). */

const MC = 'https://www.mailcharts.com/'
const MC_AGENCIES = 'https://mailcharts.com/built-for/agencies'
const MC_PRICING = 'https://www.mailcharts.com/pricing'
const PANO_PRICING = 'https://www.panoramata.co/pricing'
const PANO = 'https://www.panoramata.co/'
const REYO = 'https://reyo.ai/'
const SENDVIEW = 'https://sendview.io/'
const OWLETTER = 'https://owletter.com/pricing'
const COMP_INBOX = 'https://competitorinbox.com/pricing'

export const ref: ReferencePage = {
  kind: 'alternatives',
  name: 'MailCharts alternatives',
  company: 'MailCharts',
  line: 'Campaign libraries, inboxes that follow the competitors you name, and the web behind the login, each with its price.',
  meta: {
    path: '/alternatives/mailcharts',
    title: 'MailCharts alternatives for tracking competitors’ emails',
    description:
      'MailCharts alternatives by job: campaign libraries, inboxes for the competitors you name, and what competitors show only to customers, each with its price.',
    answer:
      'The best MailCharts alternative depends on the job: Panoramata or Reyo to browse competitors’ campaigns across channels, SendView, Owletter or Competitor Inbox to keep every email from the competitors you name, and a spare inbox for 1 to 3 competitors. For what any company shows only to signed-up customers, from its emails and texts to member prices, trial limits and cancel offers, Obsession keeps it dated and looked up by API, MCP or a table.',
    ogImage: '/og/alternatives-mailcharts.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Alternatives', path: '/alternatives' },
      { name: 'MailCharts', path: '/alternatives/mailcharts' },
    ],
  },
  title: 'MailCharts alternatives: by job, including what competitors show only to customers',
  dek: 'Teams leave MailCharts for a published price, the competitors they name, or more than email. Here is each option by the job it does, with its price as listed.',
  primaryKeyword: 'mailcharts alternatives',
  keywords: ['mailcharts alternative', 'alternatives to mailcharts', 'mailcharts competitors', 'mailcharts pricing'],
  checked: '2026-11-11',
  readingMinutes: 7,
  reader: 'marketing',
  art: {
    kind: 'sides',
    title: 'Who keeps the emails',
    rows: [
      {
        name: 'Campaign libraries',
        who: 'MailCharts, Panoramata, Reyo',
        nodes: ['Brands they track', 'Campaigns', 'Search and reports'],
        links: ['collect', 'browsed in'],
      },
      {
        name: 'Capture inboxes',
        who: 'SendView, Owletter, Competitor Inbox',
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
    { kind: 'h2', id: 'why', text: 'Why teams look for a MailCharts alternative' },
    {
      kind: 'p',
      text: `[MailCharts](${MC}) calls itself “Email and SMS Campaign Intelligence” and says “We signup, trigger, collect, and classify thousands of ecommerce email journeys.” Its [agencies page](${MC_AGENCIES}) says it already tracks “30,000+ companies”. Those strengths explain the reasons teams look elsewhere, all from its own pages on 11 November 2026:`,
    },
    {
      kind: 'list',
      items: [
        `**No published price.** The home page says “Contact us to get started”, and [its pricing address](${MC_PRICING}) redirects to a Validity page that lists no MailCharts plan.`,
        '**Its index, not your list.** Its pages describe the ecommerce brands it chooses to track and don’t describe adding a competitor you name, such as a software company or a brand outside ecommerce.',
        '**Email and SMS only.** Its pages don’t describe member prices, trial limits, quotes behind forms or the offer in a cancel flow.',
        '**A web app.** Its home page mentions no API or integrations, so the data doesn’t reach an AI agent or a table on its own.',
      ],
    },

    { kind: 'h2', id: 'by-job', text: 'MailCharts alternatives by job', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'From each tool’s own pages, read 11 November 2026, with the price each lists. Not described means its pages don’t say.',
      cols: ['Option', 'What it does well', 'Price as listed', 'Where it stops', 'Best for'],
      rows: [
        [
          'Panoramata: newsletters, flows, ads, landing pages, SMS',
          'Campaigns across channels, tracked for you',
          'Startup $99 a month, 20 competitors\nProfessional $179 a month',
          '6 months of history on Startup\nMember prices not described',
          'Campaigns across channels',
        ],
        [
          'Reyo: newsletters, push, Meta ads, websites',
          'Ecommerce campaigns, with an MCP server',
          'From €69 a month\nBusiness €399 a month',
          'Signed-in prices not described',
          'Ecommerce teams watching campaigns',
        ],
        [
          'SendView: emails from companies you choose',
          'Any company’s email tactics',
          'Standard $69 a month, 10 companies\nUltimate $169 a month, 50',
          'Email only',
          'Following a set list',
        ],
        [
          'Owletter: emails from sites you monitor',
          'Every email a site sends its list',
          'Starter $29 a month, 10 sites\nUnlimited $99 a month',
          'Email only',
          'A tight budget',
        ],
        [
          'Competitor Inbox: emails from competitors you add',
          'An archive per competitor',
          'Starter $25 a month, 1 competitor\nBusiness $249 a month, 25',
          'Email only\nCompetitors capped by plan',
          'A few competitors',
        ],
        ['By hand: a spare inbox per competitor', 'Full control, no tool', 'Free, plus the hours', 'Breaks as the list grows', '1 to 3 competitors'],
        [
          'Obsession (ours): Search, Insights, Watch, API and MCP',
          'Any company you name, emails to cancel offers',
          'Early access, onboarding teams now\nPriced per call or per company watched',
          'Stops before payment and any identity check',
          'The whole customer side, in your tools',
        ],
      ],
    },
    { kind: 'h3', id: 'browse', text: 'To browse competitors’ campaigns across channels' },
    {
      kind: 'p',
      text: `[Panoramata](${PANO}) tracks “newsletters, flows, ads, landing pages, SMS, socials, website changes, and much more”, and [its pricing page](${PANO_PRICING}) lists Startup at $99 a month for 20 competitors and 6 months of history, Professional at $179 with unlimited competitors and history, and an MCP server on every plan. [Reyo](${REYO}) covers “newsletters, push notifications, Meta ads and websites” for ecommerce teams, says it tracks more than 300 brands, and starts at €69 a month. Milled, the newsletter search engine on [our compare page](/compare), refused automated reads on 11 November 2026, so its plans aren’t listed here.`,
    },
    { kind: 'h3', id: 'follow', text: 'To keep every email from the competitors you name' },
    {
      kind: 'p',
      text: `[SendView](${SENDVIEW}) promises to “Track any company’s email marketing tactics”, from $69 a month for 10 companies to $169 for 50. [Owletter](${OWLETTER}) monitors 10 websites for $29 a month and unlimited sites for $99, with a 14-day trial. [Competitor Inbox](${COMP_INBOX}) starts at $25 a month for 1 competitor and reaches $249 for 25. All three keep emails only. For 1 to 3 competitors, a spare inbox per competitor and a weekly look is enough, until the list grows or someone forgets to check.`,
    },
    { kind: 'h3', id: 'behind-the-login', text: 'For what competitors show only to signed-up customers' },
    {
      kind: 'p',
      text: `${ENTITY} The emails and texts sit in one record with the [member price](/glossary/member-price), the [welcome series](/glossary/welcome-series), the [abandoned cart email](/glossary/abandoned-cart-email) and the [save offer](/glossary/save-offer), each kept for as long as you follow the company. Every email is kept as it arrived, with its sender checked ([DKIM](/glossary/dkim)), and lands in your agent, Clay, Google Sheets or a webhook. Obsession and MailCharts are compared side by side on [Obsession vs MailCharts](/compare/obsession-vs-mailcharts).`,
    },

    { kind: 'h2', id: 'choose', text: 'Which MailCharts alternative to choose' },
    {
      kind: 'list',
      items: [
        '**You want campaign ideas across a category:** Panoramata or Reyo.',
        '**You name the competitors and want every email they send:** SendView, Owletter or Competitor Inbox, by how many companies you follow.',
        '**You follow 1 to 3 competitors and have the time:** a spare inbox per competitor.',
        '**You need prices, trials and cancel offers beside the emails, for any company, in your own tools or your AI agent:** Obsession.',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best MailCharts alternative?',
          a: 'It depends on the job. Panoramata or Reyo for campaigns across channels, SendView, Owletter or Competitor Inbox for the competitors you name, and Obsession for what any company shows only to signed-up customers, emails to cancel offers, by API, MCP or a table.',
        },
        {
          q: 'Is there a cheaper alternative to MailCharts?',
          a: 'MailCharts publishes no price, so a direct comparison isn’t possible. Competitor Inbox starts at $25 a month and Owletter at $29 a month, each read on 11 November 2026.',
        },
        {
          q: 'Which alternative tracks SMS as well as email?',
          a: 'Panoramata tracks SMS from its Professional plan, and Obsession keeps the texts a company sends after a sign-up beside its emails, each dated.',
        },
        {
          q: 'Which alternative works with an AI agent?',
          a: 'Panoramata and Reyo list MCP servers. Obsession runs 5 verbs over MCP, the API and SDKs, and every fact links its receipt.',
          link: { label: 'See the API and MCP', to: '/developers' },
        },
      ],
    },
  ],
  sources: [
    { title: 'MailCharts: email and SMS campaign intelligence', publisher: 'MailCharts (Validity)', url: MC },
    { title: 'Built for agencies', publisher: 'MailCharts (Validity)', url: MC_AGENCIES },
    { title: 'Pricing', publisher: 'MailCharts (Validity)', url: MC_PRICING },
    { title: 'Panoramata: the best way to track your competitors', publisher: 'Panoramata', url: PANO },
    { title: 'Pricing', publisher: 'Panoramata', url: PANO_PRICING },
    { title: 'Reyo: competitor monitoring for ecommerce teams', publisher: 'Reyo', url: REYO },
    { title: 'SendView: track any company’s email marketing', publisher: 'SendView', url: SENDVIEW },
    { title: 'Pricing', publisher: 'Owletter', url: OWLETTER },
    { title: 'Pricing', publisher: 'Competitor Inbox', url: COMP_INBOX },
  ],
  related: [
    '/compare/obsession-vs-mailcharts',
    '/alternatives/panoramata',
    '/compare/obsession-vs-panoramata',
    '/glossary/welcome-series',
    '/glossary/abandoned-cart-email',
    '/glossary/dkim',
    'competitor-email-tracking-tools',
    'can-chatgpt-track-competitor-emails',
    'recipe:email-sms-tracking',
    'recipe:competitor-tracking',
    '/marketing',
    '/sample-output',
  ],
}
