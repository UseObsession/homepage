import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /alternatives/klue. Every tool fact is from the tool's own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/ci_panels.json; Klue, Crayon, Kompyte, Contify, AlphaSense and Visualping
   re-read the same day). "competitive intelligence tools" is left to the incumbents (docs/SEARCH.md §2). */

const KLUE = 'https://klue.com/'
const KLUE_PRICING = 'https://klue.com/pricing'
const CRAYON = 'https://www.crayon.co/'
const CRAYON_PRICING = 'https://www.crayon.co/pricing'
const KOMPYTE = 'https://www.kompyte.com/'
const CONTIFY = 'https://www.contify.com/'
const ALPHASENSE = 'https://www.alpha-sense.com/solutions/competitive-intelligence/'
const VISUALPING = 'https://visualping.io/pricing'

export const ref: ReferencePage = {
  kind: 'alternatives',
  name: 'Klue alternatives',
  company: 'Klue',
  line: 'Battlecard platforms, market intelligence, page monitors and what competitors show customers, each by the job it does.',
  meta: {
    path: '/alternatives/klue',
    title: 'Klue alternatives for competitive intelligence teams, by job',
    description:
      'Klue alternatives by job: battlecard platforms, market intelligence, page monitors, and what competitors show only to customers, from each tool’s pages.',
    answer:
      'The best Klue alternative depends on the job: Crayon or Kompyte for battlecards fed by automated competitor monitoring, Contify or AlphaSense for market intelligence from news, filings and expert calls, and Visualping to watch chosen pages for changes. For what competitors show only to signed-up customers, such as trial limits, upgrade prompts, onboarding emails and cancel offers, Obsession keeps it dated and looked up by API, MCP or a table.',
    ogImage: '/og/alternatives-klue.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Alternatives', path: '/alternatives' },
      { name: 'Klue', path: '/alternatives/klue' },
    ],
  },
  title: 'Klue alternatives: by job, including what competitors show only to customers',
  dek: 'Teams look past Klue for a published price, a lighter tool, or evidence no interview can give. Each option by the job it does, from its own pages.',
  primaryKeyword: 'klue alternatives',
  keywords: ['klue alternative', 'alternatives to klue', 'klue competitors', 'competitive intelligence saas'],
  checked: '2026-11-11',
  readingMinutes: 7,
  reader: 'marketing',
  art: {
    kind: 'sides',
    title: 'Where the intel comes from',
    rows: [
      {
        name: 'Battlecard platforms',
        who: 'Klue, Crayon, Kompyte',
        nodes: ['Public sources, your team', 'Intel', 'Battlecards'],
        links: ['monitored as', 'written into'],
      },
      {
        name: 'Market intelligence',
        who: 'Contify, AlphaSense',
        nodes: ['News, filings, calls', 'Search and feeds'],
        links: ['indexed in'],
      },
      {
        name: 'Page monitors',
        who: 'Visualping',
        nodes: ['Pages you choose', 'Change alerts'],
        links: ['checked for'],
      },
      {
        name: 'Obsession',
        who: 'Behind the login',
        nodes: ['Any competitor you name', 'Trials, emails, prices, offers', 'API, MCP or a table'],
        links: ['keeps, dated', 'looked up by'],
        lit: 1,
        ours: true,
      },
    ],
    foot: 'Each row follows the tools’ own pages, read 11 November 2026.',
  },
  blocks: [
    { kind: 'h2', id: 'why', text: 'Why teams look for a Klue alternative' },
    {
      kind: 'p',
      text: `[Klue](${KLUE}) is “The AI platform for Competitive Intelligence & Win-Loss”, with a Compete Agent, battlecards, buyer interviews and cited answers for sellers in Salesforce, Slack and Highspot. Its own pages, read on 11 November 2026, show where teams look elsewhere:`,
    },
    {
      kind: 'list',
      items: [
        `**No published price.** [Its pricing page](${KLUE_PRICING}) shows no plans or prices, only “GET A DEMO”.`,
        '**A whole programme.** Klue runs CI and win-loss together. A team that wants only competitor monitoring, or only market news, may want a lighter tool.',
        '**Public sources and interviews.** Its pages don’t describe signing up to a competitor’s product, its onboarding emails or where its free plan stops.',
      ],
    },

    { kind: 'h2', id: 'by-job', text: 'Klue alternatives by job', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'From each tool’s own pages, read 11 November 2026, with the price each lists. Not described means its pages don’t say.',
      cols: ['Option', 'What it does well', 'Price as listed', 'Where it stops', 'Best for'],
      rows: [
        [
          'Crayon: monitoring, battlecards, AI summaries',
          'Monitors competitors and alerts your team',
          'Not listed\nRequest an estimate',
          'Trials and onboarding not described',
          'Sales-led CI with automated alerts',
        ],
        [
          'Kompyte: tracking across hundreds of sources',
          'Websites, reviews, social, ads and jobs',
          'Not listed on its home page',
          'Trials and onboarding not described',
          'Teams already on Semrush',
        ],
        [
          'Contify: market and competitive intelligence',
          'Over 1 million news, web and filing sources',
          'Not listed\n7-day free trial',
          'Public sources',
          'Market and industry news',
        ],
        [
          'AlphaSense: research search',
          '500M+ documents and 300,000+ expert calls',
          'Not listed\nGet started for free',
          'Public and licensed content',
          'Strategy and research teams',
        ],
        [
          'Visualping: page change monitoring',
          'Alerts when chosen pages change, API and MCP',
          'Free: 150 checks a month\n$14 to $350 a month',
          'Pages you can open',
          'Watching public pricing pages',
        ],
        [
          'Obsession (ours): Search, Insights, Watch, API and MCP',
          'Trials, onboarding emails, member prices, cancel offers',
          'Early access, onboarding teams now\nPriced per call or per company watched',
          'Stops before payment and any identity check',
          'Evidence of what competitors show customers',
        ],
      ],
    },
    { kind: 'h3', id: 'battlecards', text: 'For battlecards fed by competitor monitoring' },
    {
      kind: 'p',
      text: `[Crayon](${CRAYON}) “monitors your competitors and alerts you to relevant intel” and puts battlecards in Salesforce, Slack, Highspot and Teams; [its pricing page](${CRAYON_PRICING}) asks for an estimate request. [Kompyte](${KOMPYTE}), a Semrush product, “automatically tracks your competitors’ updates across hundreds of sources”, including websites, reviews, social, ads and job postings, and lists no price on its home page.`,
    },
    { kind: 'h3', id: 'market', text: 'For market intelligence from news, filings and experts' },
    {
      kind: 'p',
      text: `[Contify](${CONTIFY}) calls itself “an AI-native market and competitive intelligence (M&CI) platform” drawing on “over 1 Mn+ vetted sources”, with a 7-day free trial. [AlphaSense](${ALPHASENSE}) searches “500M+ premium documents” and “300,000+ transcripts of one-on-one calls with industry experts”.`,
    },
    { kind: 'h3', id: 'pages', text: 'To know when a competitor’s public page changes' },
    {
      kind: 'p',
      text: `[Visualping](${VISUALPING}) starts free at 150 checks a month across 5 pages, runs from $14 to $350 a month on paid plans, and says “REST API and MCP server access come with every plan, including the free one.”`,
    },
    { kind: 'h3', id: 'behind-the-login', text: 'For what competitors show only to signed-up customers' },
    {
      kind: 'p',
      text: `${ENTITY} For a software competitor that is its [trial limit](/glossary/trial-limit), the day its [upgrade prompt](/glossary/upgrade-prompt) appears, every onboarding email and the [save offer](/glossary/save-offer) in its cancel flow, each with the screen or the email behind it, ready for a [battlecard](/glossary/battlecard). Klue and Obsession are compared side by side on [Obsession vs Klue](/compare/obsession-vs-klue).`,
    },

    { kind: 'h2', id: 'choose', text: 'Which Klue alternative to choose' },
    {
      kind: 'list',
      items: [
        '**You want battlecards with automated monitoring:** Crayon, or Kompyte if your team works in Semrush.',
        '**You want market and industry news, filings and expert views:** Contify or AlphaSense.',
        '**You only need to know when a public page changes:** Visualping.',
        '**You need proof of what competitors show their customers, inside your battlecards, tools or AI agent:** Obsession, beside whichever CI platform you run.',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best Klue alternative?',
          a: 'It depends on the job: Crayon or Kompyte for battlecards and monitoring, Contify or AlphaSense for market intelligence, Visualping for page changes, and Obsession for what competitors show only to signed-up customers.',
        },
        {
          q: 'How much does Klue cost?',
          a: 'Klue publishes no price; its pricing page asks visitors to get a demo, read on 11 November 2026. Crayon asks for an estimate request, and Visualping lists plans from free to $350 a month.',
        },
        {
          q: 'Which alternative shows a competitor’s free trial?',
          a: 'Of the tools here, Obsession is the one whose pages describe signing up the way any customer can and keeping a competitor’s plans, limits, upgrade prompts and onboarding emails, each dated.',
          link: { label: 'Software trials use case', to: '/use-cases/trial-checks-for-software-companies' },
        },
        {
          q: 'Can I use Obsession with Klue or Crayon?',
          a: 'Yes. Obsession’s facts reach your tools over the API, MCP or a webhook, each linked to its receipt, so a CI team can put them on the battlecards it already keeps.',
        },
      ],
    },
  ],
  sources: [
    { title: 'Klue: the AI platform for competitive intelligence and win-loss', publisher: 'Klue', url: KLUE },
    { title: 'Pricing', publisher: 'Klue', url: KLUE_PRICING },
    { title: 'Crayon: drive more competitive wins with automated insights', publisher: 'Crayon', url: CRAYON },
    { title: 'Pricing', publisher: 'Crayon', url: CRAYON_PRICING },
    { title: 'Kompyte: win more deals with competitive intelligence', publisher: 'Kompyte (Semrush)', url: KOMPYTE },
    { title: 'Contify: market and competitive intelligence', publisher: 'Contify', url: CONTIFY },
    { title: 'Competitive intelligence for leading corporations', publisher: 'AlphaSense', url: ALPHASENSE },
    { title: 'Pricing', publisher: 'Visualping', url: VISUALPING },
  ],
  related: [
    '/compare/obsession-vs-klue',
    '/alternatives/crayon',
    '/glossary/battlecard',
    '/glossary/competitive-intelligence',
    '/glossary/trial-limit',
    '/glossary/upgrade-prompt',
    'battlecard-template',
    'saas-pricing-page-examples',
    'recipe:trial-teardown',
    'recipe:competitor-tracking',
    '/use-cases/trial-checks-for-software-companies',
    '/sales',
  ],
}
