import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /alternatives/competiscan. Every tool fact is from the tool's own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/ci_panels.json; Competiscan, Mintel Comperemedia, Corporate Insight,
   Panoramata and MailCharts re-read the same day). For banks, card issuers, insurers and telecoms. Obsession's side
   (22 Nov): a persona starts applications and opens no account (James, 11 Nov). */

const COMPETISCAN = 'https://www.competiscan.com/'
const COMPEREMEDIA = 'https://www.mintel.com/mintel-comperemedia/'
const CORPORATE_INSIGHT = 'https://www.corporateinsight.com/'
const PANO = 'https://www.panoramata.co/'
const MC = 'https://www.mailcharts.com/'

export const ref: ReferencePage = {
  kind: 'alternatives',
  name: 'Competiscan alternatives',
  company: 'Competiscan',
  line: 'Consumer panels, analyst journey research, email archives and a persona that starts applications, by job.',
  meta: {
    path: '/alternatives/competiscan',
    title: 'Competiscan alternatives (2026): 5 options for banks',
    description:
      'Competiscan alternatives by job: consumer panels, journey research, email archives, and a persona that applies at the banks you name.',
    answer:
      'The best Competiscan alternative depends on the job: Mintel Comperemedia for another panel of competitors’ marketing with expert analysis, Corporate Insight for analyst research on digital customer journeys in banking, insurance and investing, and Panoramata or MailCharts for competitors’ emails. For what a bank, card issuer, insurer or telecom shows an applicant, Obsession’s Competitor tracking blueprint sends a persona through each application’s forms. It keeps every step, rate, quote, email and text, dated.',
    ogImage: '/og/alternatives-competiscan.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Alternatives', path: '/alternatives' },
      { name: 'Competiscan', path: '/alternatives/competiscan' },
    ],
  },
  title: 'Competiscan alternatives: every option by job, for banks and insurers',
  dek: 'Competiscan’s panels show what members of the public are sent. These tools cover parts of that job differently, and one starts applications as a customer.',
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
        who: 'Competitor tracking blueprint',
        nodes: ['Banks you name', 'Each application step', 'Your event log'],
        links: ['a persona applies', 'kept in'],
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
      text: `[Competiscan](${COMPETISCAN}) calls itself “Your Single Source for Market and Competitive Insights”. It draws on what it calls “the largest longitudinal, omni-channel panels of consumers, business owners” and others, with “200M+ omnichannel competitor communications” across direct mail, email, digital, social media and print, for sectors including banking, insurance, cards, mortgages, investments and telecom. Its own pages, read on 11 November 2026, show where teams look elsewhere:`,
    },
    {
      kind: 'list',
      items: [
        '**No published price.** Its pages ask visitors to see it in action and list no plans.',
        '**The panel’s coverage.** What it holds follows its panels and the sectors they cover. Its pages don’t describe adding a company you name or the countries outside its panels.',
        '**What members are sent.** Its pages don’t describe the steps of an application, the rates an application shows or quotes for a chosen customer profile.',
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
          'MailCharts: email and SMS campaigns',
          'Ecommerce email campaigns to browse',
          'Not listed\nContact us to get started',
          'Ecommerce brands on its index',
          'Retail email benchmarks',
        ],
        [
          'Obsession (ours): Competitor tracking and Email and SMS tracking blueprints',
          'Application steps, rates, quotes, offer emails and texts',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment unless given your card',
          'Any bank or insurer you name, by profile',
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
      text: `[Panoramata](${PANO}) tracks newsletters, flows, ads, landing pages and SMS for the competitors on your plan, and [MailCharts](${MC}) keeps ecommerce email campaigns. Both centre on marketing campaigns. Neither describes the steps of an application for a financial product.`,
    },
    { kind: 'h3', id: 'personas', text: 'For what banks and insurers show an applicant' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: 'For a bank, card issuer, insurer or telecom, teams pick the [Competitor tracking blueprint](/blueprints/competitor-tracking). A persona, an AI agent with its own inbox and number under one name, starts each application as the customer profile you pick. It keeps every step and question, the rates and quotes the forms show, and the emails and texts that follow, each dated with its screenshot.',
    },
    {
      kind: 'p',
      text: 'The worked example is on [the banks and fintechs use case](/use-cases/journey-checks-for-banks-and-fintechs), and the practice it replaces is explained in [customer journey benchmarking](/glossary/customer-journey-benchmarking).',
    },
    {
      kind: 'cta',
      text: 'A persona through each competitor’s application, every step dated.',
      to: '/use-cases/journey-checks-for-banks-and-fintechs',
      label: 'See how it works',
    },

    { kind: 'h2', id: 'choose', text: 'Which Competiscan alternative to choose' },
    {
      kind: 'list',
      items: [
        '**You want another panel of competitors’ marketing, with analysts:** Mintel Comperemedia.',
        '**You want benchmarks of competitors’ digital journeys, written up by analysts:** Corporate Insight.',
        '**You want competitors’ email and SMS campaigns:** Panoramata, or MailCharts for retail.',
        '**You need what any bank or insurer shows an applicant, by profile and country, in your own tools:** Obsession.',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best Competiscan alternative?',
          a: 'It depends on the job: Mintel Comperemedia for a panel with expert analysis, Corporate Insight for digital journey research, Panoramata or MailCharts for email campaigns, and Obsession for what a company shows a persona that applies.',
        },
        {
          q: 'How much does Competiscan cost?',
          a: 'Competiscan publishes no price; its pages invite visitors to see it in action, read on 11 November 2026. Comperemedia and Corporate Insight list no price either.',
        },
        {
          q: 'How is Obsession different from a consumer panel?',
          a: 'A panel collects what its members are sent, for the sectors it covers. Obsession signs a persona up at any company you name, as the customer profile and country you pick. It keeps what that company sends and shows, each event dated.',
        },
        {
          q: 'Does Obsession cover banks and insurers?',
          a: 'Yes. A persona applies as the profile you pick and keeps every step, the rates and quotes the forms show, and the offer emails and texts that follow, each dated with its screenshot or the original email.',
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
    '/alternatives/panoramata',
    '/alternatives/mailcharts',
    'bank-competitor-analysis',
    'digital-account-opening-journey',
    'consumer-duty-fair-value-assessment',
    'recipe:competitor-tracking',
    'recipe:email-sms-tracking',
    '/personas',
    '/sales',
  ],
}
