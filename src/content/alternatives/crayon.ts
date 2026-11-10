import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /alternatives/crayon. Every tool fact is from the tool's own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/ci_panels.json; Crayon, Klue, Kompyte, Contify, Visualping and AlphaSense
   re-read the same day). */

const CRAYON = 'https://www.crayon.co/'
const CRAYON_PRICING = 'https://www.crayon.co/pricing'
const KLUE = 'https://klue.com/'
const KLUE_PRICING = 'https://klue.com/pricing'
const KOMPYTE = 'https://www.kompyte.com/'
const CONTIFY = 'https://www.contify.com/'
const ALPHASENSE = 'https://www.alpha-sense.com/solutions/competitive-intelligence/'
const VISUALPING = 'https://visualping.io/pricing'

export const ref: ReferencePage = {
  kind: 'alternatives',
  name: 'Crayon alternatives',
  company: 'Crayon',
  line: 'Win-loss and battlecard platforms, page monitors, market news and what competitors show customers, each by its job.',
  meta: {
    path: '/alternatives/crayon',
    title: 'Crayon alternatives for monitoring competitors, by the job',
    description:
      'Crayon alternatives by job: win-loss and battlecards, competitor tracking, page monitors, market news, and what competitors show only to customers, priced.',
    answer:
      'The best Crayon alternative depends on the job: Klue for battlecards run together with win-loss interviews, Kompyte for competitor tracking inside Semrush, Visualping for alerts when chosen pages change, and Contify or AlphaSense for market news and research. For what competitors show only to signed-up customers, such as trial limits, onboarding emails, member prices and cancel offers, Obsession keeps it dated and looked up by API, MCP or a table.',
    ogImage: '/og/alternatives-crayon.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Alternatives', path: '/alternatives' },
      { name: 'Crayon', path: '/alternatives/crayon' },
    ],
  },
  title: 'Crayon alternatives: by job, including what competitors show only to customers',
  dek: 'Crayon watches what competitors publish and alerts your team. These tools do parts of that job differently, and one sees what competitors show the people who sign up.',
  primaryKeyword: 'crayon alternatives',
  keywords: ['crayon alternative', 'alternatives to crayon', 'crayon competitive intelligence', 'crayon competitors'],
  checked: '2026-11-11',
  readingMinutes: 7,
  reader: 'marketing',
  art: {
    kind: 'sides',
    title: 'What each tool watches',
    rows: [
      {
        name: 'Competitor monitoring',
        who: 'Crayon, Kompyte',
        nodes: ['What competitors publish', 'Alerts', 'Battlecards'],
        links: ['tracked as', 'summed up in'],
      },
      {
        name: 'Win-loss and CI',
        who: 'Klue',
        nodes: ['Buyers and your team', 'Interviews and intel', 'Battlecards'],
        links: ['heard as', 'written into'],
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
    { kind: 'h2', id: 'why', text: 'Why teams look for a Crayon alternative' },
    {
      kind: 'p',
      text: `[Crayon](${CRAYON}) promises to “Drive More Competitive Wins with Automated Insights”: it “monitors your competitors and alerts you to relevant intel”, summarises and scores what it finds with AI, and puts battlecards in Salesforce, Slack, Highspot and Teams. Its own pages, read on 11 November 2026, show where teams look elsewhere:`,
    },
    {
      kind: 'list',
      items: [
        `**A quote, not a price.** [Its pricing page](${CRAYON_PRICING}) has a “Request an Estimate” form, priced as “tailored to the needs of your competitive intelligence program”.`,
        '**Win-loss as well as monitoring.** A team that also wants buyer interviews may look at a platform that runs both.',
        '**What competitors publish.** Its pages describe monitoring competitors and don’t describe signing up to their products, their onboarding emails or the limits on their free plans.',
      ],
    },

    { kind: 'h2', id: 'by-job', text: 'Crayon alternatives by job', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'From each tool’s own pages, read 11 November 2026, with the price each lists. Not described means its pages don’t say.',
      cols: ['Option', 'What it does well', 'Price as listed', 'Where it stops', 'Best for'],
      rows: [
        [
          'Klue: Compete Agent, battlecards, win-loss',
          'CI and win-loss interviews on one platform',
          'Not listed\nDemo only',
          'Trials and onboarding not described',
          'Teams adding win-loss',
        ],
        [
          'Kompyte: tracking across hundreds of sources',
          'Websites, reviews, social, ads and jobs',
          'Not listed on its home page',
          'Trials and onboarding not described',
          'Teams already on Semrush',
        ],
        [
          'Visualping: page change monitoring',
          'Alerts when chosen pages change, API and MCP',
          'Free: 150 checks a month\n$14 to $350 a month',
          'Pages you can open',
          'Watching public pricing pages',
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
          'Obsession (ours): Search, Insights, Watch, API and MCP',
          'Trials, onboarding emails, member prices, cancel offers',
          'Early access, onboarding teams now\nPriced per call or per company watched',
          'Stops before payment and any identity check',
          'Evidence of what competitors show customers',
        ],
      ],
    },
    { kind: 'h3', id: 'winloss', text: 'For battlecards with win-loss' },
    {
      kind: 'p',
      text: `[Klue](${KLUE}) is “The AI platform for Competitive Intelligence & Win-Loss”, with buyer interviews by an AI Interviewer and human experts beside its battlecards; [its pricing page](${KLUE_PRICING}) asks for a demo. Obsession and Klue are compared on [Obsession vs Klue](/compare/obsession-vs-klue).`,
    },
    { kind: 'h3', id: 'tracking', text: 'For competitor tracking and page changes' },
    {
      kind: 'p',
      text: `[Kompyte](${KOMPYTE}), a Semrush product, tracks competitors’ websites, reviews, content, social, ads and job postings “across hundreds of sources”. [Visualping](${VISUALPING}) watches the pages you choose, free for 150 checks a month and $14 to $350 a month on paid plans, with API and MCP access on every plan.`,
    },
    { kind: 'h3', id: 'market', text: 'For market news and research' },
    {
      kind: 'p',
      text: `[Contify](${CONTIFY}) draws on “over 1 Mn+ vetted sources, including news, company websites, SEC filings, social, and more”. [AlphaSense](${ALPHASENSE}) searches filings, earnings transcripts, news and “300,000+ transcripts of one-on-one calls with industry experts”.`,
    },
    { kind: 'h3', id: 'behind-the-login', text: 'For what competitors show only to signed-up customers' },
    {
      kind: 'p',
      text: `${ENTITY} Insights asks one question, such as what each competitor’s free plan includes or what it offers a cancelling customer, across your list of competitors and answers with a row per company, so a [battlecard](/glossary/battlecard) shows the [trial limit](/glossary/trial-limit) and the [save offer](/glossary/save-offer) with the screenshot behind each.`,
    },

    { kind: 'h2', id: 'choose', text: 'Which Crayon alternative to choose' },
    {
      kind: 'list',
      items: [
        '**You want win-loss interviews beside your battlecards:** Klue.',
        '**You want competitor tracking inside your SEO and marketing suite:** Kompyte.',
        '**You only need an alert when a public page changes:** Visualping.',
        '**You want market news, filings and expert calls:** Contify or AlphaSense.',
        '**You need what competitors show their customers, with proof, in your tools or AI agent:** Obsession, beside whichever CI tool you keep.',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best Crayon alternative?',
          a: 'It depends on the job: Klue for win-loss with battlecards, Kompyte for tracking inside Semrush, Visualping for page changes, Contify or AlphaSense for market news, and Obsession for what competitors show only to signed-up customers.',
        },
        {
          q: 'How much does Crayon cost?',
          a: 'Crayon publishes no price. Its pricing page asks for an estimate request, tailored to each competitive intelligence programme, read on 11 November 2026.',
        },
        {
          q: 'Does Crayon track competitors’ emails or trials?',
          a: 'Its pages describe monitoring competitors and alerting your team, and don’t describe signing up to a competitor’s product or keeping its emails. Obsession keeps both, each dated with its screenshot or the raw email.',
        },
        {
          q: 'Can I use Obsession with Crayon?',
          a: 'Yes. Obsession’s facts reach your tools over the API, MCP or a webhook, each linked to its receipt, so a CI team can add them to the battlecards it keeps in Crayon.',
          link: { label: 'See the API and MCP', to: '/developers' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Crayon: drive more competitive wins with automated insights', publisher: 'Crayon', url: CRAYON },
    { title: 'Pricing', publisher: 'Crayon', url: CRAYON_PRICING },
    { title: 'Klue: the AI platform for competitive intelligence and win-loss', publisher: 'Klue', url: KLUE },
    { title: 'Pricing', publisher: 'Klue', url: KLUE_PRICING },
    { title: 'Kompyte: win more deals with competitive intelligence', publisher: 'Kompyte (Semrush)', url: KOMPYTE },
    { title: 'Pricing', publisher: 'Visualping', url: VISUALPING },
    { title: 'Contify: market and competitive intelligence', publisher: 'Contify', url: CONTIFY },
    { title: 'Competitive intelligence for leading corporations', publisher: 'AlphaSense', url: ALPHASENSE },
  ],
  related: [
    '/alternatives/klue',
    '/compare/obsession-vs-klue',
    '/glossary/battlecard',
    '/glossary/competitive-intelligence',
    '/glossary/trial-limit',
    '/glossary/save-offer',
    'competitor-battlecard-template',
    'ecommerce-competitive-intelligence',
    'recipe:competitor-tracking',
    'recipe:trial-teardown',
    '/use-cases/trial-checks-for-software-companies',
    '/sales',
  ],
}
