import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /alternatives/competiscan. Every tool fact is from the tool's own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/ci_panels.json; Competiscan, Mintel Comperemedia, Corporate Insight,
   Panoramata and MailCharts re-read the same day). For banks, card issuers, insurers and telecoms (S8). */

const COMPETISCAN = 'https://www.competiscan.com/'
const COMPEREMEDIA = 'https://www.mintel.com/mintel-comperemedia/'
const CORPORATE_INSIGHT = 'https://www.corporateinsight.com/'
const PANO = 'https://www.panoramata.co/'
const MC = 'https://www.mailcharts.com/'

export const ref: ReferencePage = {
  kind: 'alternatives',
  name: 'Competiscan alternatives',
  company: 'Competiscan',
  line: 'Consumer panels, analyst journey research, email archives and what companies show signed-up customers, by job.',
  meta: {
    path: '/alternatives/competiscan',
    title: 'Competiscan alternatives for bank and insurer intelligence',
    description:
      'Competiscan alternatives by job: consumer panels, analyst journey research, email archives, and what banks and insurers show only to signed-up customers.',
    answer:
      'The best Competiscan alternative depends on the job: Mintel Comperemedia for another panel of competitors’ marketing with expert analysis, Corporate Insight for analyst research on digital customer journeys in banking, insurance and investing, and Panoramata or MailCharts for competitors’ emails. For what any bank, card issuer, insurer or telecom shows only to signed-up customers, such as offer emails and texts, signed-in rates, quotes and retention offers, Obsession keeps it dated and looked up by API, MCP or a table.',
    ogImage: '/og/alternatives-competiscan.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Alternatives', path: '/alternatives' },
      { name: 'Competiscan', path: '/alternatives/competiscan' },
    ],
  },
  title: 'Competiscan alternatives: by job, including what companies show only to customers',
  dek: 'Competiscan’s panels show what members of the public are sent. These tools cover parts of that job differently, and one keeps what a company shows the people who sign up.',
  primaryKeyword: 'competiscan alternatives',
  keywords: ['competiscan alternative', 'competiscan competitors', 'comperemedia alternative', 'financial services competitive intelligence'],
  checked: '2026-11-11',
  readingMinutes: 7,
  reader: 'sales',
  art: {
    kind: 'sides',
    title: 'Where the evidence comes from',
    rows: [
      {
        name: 'Consumer panels',
        who: 'Competiscan, Comperemedia',
        nodes: ['Panel members', 'Mail, email, digital', 'An archive by sector'],
        links: ['are sent', 'filed in'],
      },
      {
        name: 'Analyst research',
        who: 'Corporate Insight',
        nodes: ['Analysts as customers', 'Digital journeys', 'Research reports'],
        links: ['examine', 'written up in'],
      },
      {
        name: 'Email archives',
        who: 'Panoramata, MailCharts',
        nodes: ['Brands they track', 'Emails and texts'],
        links: ['collect'],
      },
      {
        name: 'Obsession',
        who: 'Behind the login',
        nodes: ['Any company you name', 'Offers, rates, quotes, emails', 'API, MCP or a table'],
        links: ['keeps, dated', 'looked up by'],
        lit: 1,
        ours: true,
      },
    ],
    foot: 'Each row follows the tools’ own pages, read 11 November 2026.',
  },
  blocks: [
    { kind: 'h2', id: 'why', text: 'Why teams look for a Competiscan alternative' },
    {
      kind: 'p',
      text: `[Competiscan](${COMPETISCAN}) calls itself “Your Single Source for Market and Competitive Insights”. It draws on what it calls “the largest longitudinal, omni-channel panels of consumers, business owners” and others, with “200M+ omnichannel competitor communications” across direct mail, email, digital, social media and print, for banking, insurance, cards, mortgages, investments, telecom and more. Its own pages, read on 11 November 2026, show where teams look elsewhere:`,
    },
    {
      kind: 'list',
      items: [
        '**No published price.** Its pages ask visitors to see it in action and list no plans.',
        '**The panel’s coverage.** What it holds follows its panels and the sectors they cover. Its pages don’t describe adding a company you name or the countries outside its panels.',
        '**What members are sent.** Its pages don’t describe signed-in experiences: rates shown after login, application steps, quotes for a chosen profile or the offer to stay when a customer cancels.',
      ],
    },

    { kind: 'h2', id: 'by-job', text: 'Competiscan alternatives by job', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'From each tool’s own pages, read 11 November 2026, with the price each lists. Not described means its pages don’t say.',
      cols: ['Option', 'What it does well', 'Price as listed', 'Where it stops', 'Best for'],
      rows: [
        [
          'Mintel Comperemedia: Comperemedia Omni',
          'Marketing data with expert analysis, trended over time',
          'Not listed\nGet in touch',
          'Channels and countries not named on its page',
          'Marketing teams wanting analysts’ reads',
        ],
        [
          'Corporate Insight: customer journey research',
          '750,000 digital journeys a year, 200+ institutions',
          'Not listed\nNo seat licences',
          'Banking, healthcare, insurance, investing, retirement',
          'Digital experience benchmarks',
        ],
        [
          'Panoramata: emails, SMS, flows, ads',
          'Competitors’ campaigns across channels',
          'Startup $99 a month\nProfessional $179 a month',
          'Signed-in experiences not described',
          'Marketing campaigns',
        ],
        [
          'MailCharts: email and SMS journeys',
          'Ecommerce email journeys to browse',
          'Not listed\nContact us to get started',
          'Ecommerce brands on its index',
          'Retail email benchmarks',
        ],
        [
          'Obsession (ours): Search, Insights, Watch, API and MCP',
          'Offer emails and texts, signed-in rates, quotes, retention offers',
          'Early access, onboarding teams now\nPriced per call or per company watched',
          'Stops before payment and any identity check',
          'Any company you name, by profile',
        ],
      ],
    },
    { kind: 'h3', id: 'panels', text: 'For another panel of competitors’ marketing' },
    {
      kind: 'p',
      text: `[Mintel Comperemedia](${COMPEREMEDIA}) describes Comperemedia Omni as “Marketing data paired with expert analysis to drive your business”, with competitor data trended over time; its page names no channels or countries and asks visitors to get in touch.`,
    },
    { kind: 'h3', id: 'journeys', text: 'For research on competitors’ digital journeys' },
    {
      kind: 'p',
      text: `[Corporate Insight](${CORPORATE_INSIGHT}) says “Our analysts interact with competitor platforms as real customers”, with 750,000 digital journeys examined each year across 200+ institutions in banking, healthcare, insurance, investing and retirement, and research that “has no seat licenses”.`,
    },
    { kind: 'h3', id: 'emails', text: 'For competitors’ emails and texts' },
    {
      kind: 'p',
      text: `[Panoramata](${PANO}) tracks newsletters, flows, ads, landing pages and SMS for the competitors on your plan, and [MailCharts](${MC}) keeps ecommerce email journeys. Both centre on marketing campaigns rather than the signed-in side of a financial product.`,
    },
    { kind: 'h3', id: 'behind-the-login', text: 'For what companies show only to signed-up customers' },
    {
      kind: 'p',
      text: `${ENTITY} For a bank, card issuer, insurer or telecom that means the offer emails and texts by customer profile, the rate a signed-in customer sees, the quote a form gives one profile and the retention deal in the [cancel flow](/glossary/cancel-flow), each kept up to any identity check. The worked example is on [the banks and fintechs use case](/use-cases/journey-checks-for-banks-and-fintechs), and the practice it replaces is explained in [customer journey benchmarking](/glossary/customer-journey-benchmarking).`,
    },

    { kind: 'h2', id: 'choose', text: 'Which Competiscan alternative to choose' },
    {
      kind: 'list',
      items: [
        '**You want another panel of competitors’ marketing, with analysts:** Mintel Comperemedia.',
        '**You want benchmarks of competitors’ digital journeys, written up by analysts:** Corporate Insight.',
        '**You want competitors’ email and SMS campaigns:** Panoramata, or MailCharts for retail.',
        '**You need what any company shows a signed-up customer, by profile and country, in your own tools:** Obsession.',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best Competiscan alternative?',
          a: 'It depends on the job: Mintel Comperemedia for a panel with expert analysis, Corporate Insight for digital journey research, Panoramata or MailCharts for email campaigns, and Obsession for what any company shows only to signed-up customers.',
        },
        {
          q: 'How much does Competiscan cost?',
          a: 'Competiscan publishes no price; its pages invite visitors to see it in action, read on 11 November 2026. Comperemedia and Corporate Insight list no price either.',
        },
        {
          q: 'How is Obsession different from a consumer panel?',
          a: 'A panel collects what its members are sent, for the sectors it covers. Obsession signs up to any company you name as the customer profile and country you pick, and keeps what it sends and shows, up to any identity check, each fact dated.',
        },
        {
          q: 'Does Obsession cover banks and insurers?',
          a: 'Yes. It keeps offer emails and texts, signed-in rates, quotes behind forms and retention offers for any company you name, each dated with its screenshot or the raw email.',
          link: { label: 'Banks and fintechs use case', to: '/use-cases/journey-checks-for-banks-and-fintechs' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Competiscan: market and competitive insights', publisher: 'Competiscan', url: COMPETISCAN },
    { title: 'Mintel Comperemedia', publisher: 'Mintel', url: COMPEREMEDIA },
    { title: 'Corporate Insight', publisher: 'Corporate Insight', url: CORPORATE_INSIGHT },
    { title: 'Panoramata: the best way to track your competitors', publisher: 'Panoramata', url: PANO },
    { title: 'MailCharts: email and SMS campaign intelligence', publisher: 'MailCharts (Validity)', url: MC },
  ],
  related: [
    '/use-cases/journey-checks-for-banks-and-fintechs',
    '/glossary/customer-journey-benchmarking',
    '/glossary/mystery-shopping',
    '/glossary/cancel-flow',
    '/alternatives/panoramata',
    '/alternatives/mailcharts',
    'bank-competitor-analysis',
    'digital-account-opening-journey',
    'consumer-duty-fair-value-assessment',
    'recipe:competitor-tracking',
    'recipe:email-sms-tracking',
    '/sales',
  ],
}
