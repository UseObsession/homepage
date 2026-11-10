import type { BlogPost } from './types'

/* Wave 2, batch 1, spec 12 (_research/seo/revamp-11nov/WAVE2_BRIEF.md and WAVE2_SLATE.md, 11 Nov 2026). It owns
   "bank competitor analysis" and bank competitor analysis template, banking competitive analysis, fintech competitor
   analysis and credit card offers comparison (Google autocomplete, US and UK, 11 Nov: autocomplete_11nov_gaps.json).
   Readers: strategy, product, pricing and journey teams at banks, card issuers and fintechs (S8). It serves
   /use-cases/journey-checks-for-banks-and-fintechs and recipe:competitor-tracking, whose "Guides for this job" had none.
   The case: the 10-column template, where each column's data comes from today (rate pages, regulators' data,
   comparison sites, panels, research firms, people by hand), what each source misses (the rate an applicant is offered,
   rates after sign-up and in the app, existing customer rates, messages after an application, chat answers), and how
   to fill it with dated evidence, up to the identity check and never past it.
   Read at the source on 11 Nov 2026: the FCA's cash savings update (18 Sep 2024, updated 4 Aug 2026); FCA CP26/15 (the
   PDF, 29 Apr 2026: the representative APR definition and the 51% background); the Bank of England's quoted and
   effective rate notes; Moneyfacts' about page and its closed-rate release (30 Jun 2025); Family Building Society's
   withdrawn accounts page; Bankrate's ratings method (18 Apr 2025); the FDIC national rates (19 Oct 2026); the CFPB's
   card agreement database, TCCP page, prescreened offers answer and chatbot report (6 Jun 2023); Chase UK's saver page;
   Comperemedia Direct, Competiscan and Corporate Insight home pages; 31 CFR 1020.220 (LII's text of the CFR, as eCFR
   showed a bot check) and UK SI 2017/692 reg 30 on legislation.gov.uk; Exa's and Firecrawl's home pages.
   Left out on purpose: Comperemedia and Competiscan prices (only a competitor's 2021 estimates exist, not their pages),
   Corporate Insight's panel method (only a podcast says it), Upwork fintech tester posts (403), the FCA Handbook pages
   (they render only in a browser). Obsession is described in the words of the banks use case page, the competitor
   tracking and support bot check recipes, site.ts and /compare. Lantern, Saltmarsh and Fennick are invented, at .example
   addresses, as are every rate, offer and answer in the pictures. No dashes. General information, never legal advice. */

const FCA_CASH = 'https://www.fca.org.uk/publications/multi-firm-reviews/fca-update-cash-savings-september-2024'
const BOE_QUOTED = 'https://www.bankofengland.co.uk/statistics/details/further-details-about-quoted-household-interest-rates-data'
const BOE_EFFECTIVE = 'https://www.bankofengland.co.uk/statistics/details/further-details-about-effective-interest-rates-data'
const CFPB_AGREEMENTS = 'https://www.consumerfinance.gov/credit-cards/agreements/'
const CFPB_TCCP = 'https://www.consumerfinance.gov/data-research/credit-card-data/terms-credit-card-plans-survey/'
const FDIC = 'https://www.fdic.gov/national-rates-and-rate-caps'
const MONEYFACTS = 'https://moneyfactscompare.co.uk/about-us/'
const BANKRATE = 'https://www.bankrate.com/banking/bank-product-ratings-methodology/'
const COMPEREMEDIA = 'https://welcome.comperemedia.com/solutions/comperemedia-direct/'
const COMPETISCAN = 'https://competiscan.com/'
const CORPINSIGHT = 'https://corporateinsight.com/'
const FCA_CP = 'https://www.fca.org.uk/publication/consultation/cp26-15.pdf'
const CFPB_PRESCREEN =
  'https://www.consumerfinance.gov/ask-cfpb/can-i-make-issuers-stop-sending-me-credit-card-offers-in-the-mail-en-1377/'
const CHASE = 'https://www.chase.co.uk/product/chase-saver-account'
const FAMILY_BS = 'https://familybuildingsociety.co.uk/savings/previous-interest-rates-and-withdrawn-accounts'
const MF_CLOSED = 'https://moneyfactsgroup.co.uk/media-centre/consumer/loyal-savers-endure-three-years-of-poorer-closed-rates/'
const CFPB_CHATBOTS =
  'https://www.consumerfinance.gov/data-research/research-reports/chatbots-in-consumer-finance/chatbots-in-consumer-finance/'
const US_CIP = 'https://www.law.cornell.edu/cfr/text/31/1020.220'
const UK_MLR = 'https://www.legislation.gov.uk/uksi/2017/692/regulation/30'
const EXA = 'https://exa.ai/'
const FIRECRAWL = 'https://www.firecrawl.dev/'

export const post: BlogPost = {
  slug: 'bank-competitor-analysis',
  title: 'Bank competitor analysis: a template built from competitors’ rates, offers and onboarding',
  dek: 'The 10 columns that strategy, product and journey teams at banks and fintechs track, where each one’s data comes from today, and what rate tables and panels miss. Each entry is backed by a dated screenshot, email or transcript.',
  metaTitle: 'Bank competitor analysis template: rates, offers, onboarding',
  description:
    'Bank competitor analysis template for product and journey teams: rates, offers, onboarding and chat answers, where each comes from and what it misses.',
  answer:
    'A bank competitor analysis compares competing banks’, card issuers’ and fintechs’ products, rates, fees, offers, onboarding steps, apps and service answers, each dated with its screenshot or email. Rate tables and regulators’ data cover advertised rates, while the rate an applicant is offered, offers after the application form and the emails that follow reach only someone who applies. Obsession keeps what each bank you name shows only to its customers, from those offers and emails to chat answers, dated, by API, MCP (the standard way AI agents call tools) or a table.',
  primaryKeyword: 'bank competitor analysis',
  keywords: [
    'bank competitor analysis template',
    'banking competitive analysis',
    'fintech competitor analysis',
    'credit card offers comparison',
    'credit card promotion comparison',
    'bank mystery shopping',
  ],
  category: 'Watch other companies',
  order: 3,
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 15,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'lantern.example · a new saver',
      who: 'A new saver profile in the UK, from Monday 2 November',
      rows: [
        { time: 'Mon 09:00', text: 'Rate page: easy access 4.10% AER', detail: 'Public, and the rate on comparison tables', tone: 'info' },
        { time: 'Mon 09:07', text: 'Form step 3: 4.60% with a bonus', detail: 'A 12-month bonus, shown after the form', tone: 'ok' },
        { time: 'Mon 09:10', text: 'Stopped at the identity check', detail: 'It asks for a passport photo and a selfie', tone: 'info' },
        { time: 'Mon 09:12', text: 'Email: finish opening your account', detail: 'Sent to the address given at step 1', tone: 'ok' },
        { time: 'Wed 09:12', text: 'Email: £100 if you open by Friday', detail: 'On no public page or comparison table', tone: 'info' },
        { time: 'Thu 10:30', text: 'Chat: “Yes, 4.60% is fixed”', detail: 'The terms say variable, plus a bonus', tone: 'fail' },
      ],
      foot: 'Invented bank, rates and offer. Rows 2, 4 and 5 appeared only once the application had started.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A bank competitor analysis compares what competing banks, card issuers and fintechs offer a customer: products, rates, fees, offers, onboarding steps, the app and the answers their service channels give. Rate tables and regulators’ data cover the advertised half well. The rate an applicant is offered, any offer shown after the application form and the emails that follow it reach only someone who applies.',
    },
    {
      kind: 'p',
      text: 'The analysis also has a second reader now. In its [September 2024 update on cash savings](' +
        FCA_CASH +
        '), the Financial Conduct Authority (FCA) found fair value assessments that didn’t compare rates at all. Others benchmarked only against a lower peer group, “avoiding comparison with market leaders”. Our guide to the [Consumer Duty fair value assessment](/blog/consumer-duty-fair-value-assessment) covers what the FCA expects that assessment to show.',
    },
    {
      kind: 'p',
      text: 'The benchmark a team picks moves real money in both directions. Each 0.10 percentage point on a savings rate is worth £10m a year on a £10bn book, £1m on a £1bn book and £100,000 on a £100m book (example balances). A rate set against the wrong competitor pays away margin when it is too high and loses deposits when it is too low.',
    },

    { kind: 'h2', id: 'what-it-covers', text: 'What a bank competitor analysis covers' },
    {
      kind: 'p',
      text: 'A bank competitor analysis is a dated comparison of what each competitor offers and how it treats a customer, product by product. Teams use it to set rates, design offers and fix the steps where applicants give up. Each entry carries the date seen, the customer profile and its proof: a screenshot of the page, the email as it arrived or a chat transcript. Rates and offers change weekly, and a pricing committee, a board or a regulator will ask where each number came from.',
    },
    {
      kind: 'p',
      text: 'Half the columns sit on public pages. The other half appear only after a sign-up, an application form or a login, in what search engines can’t reach: [the web behind the login](/blog/the-web-behind-the-login).',
    },

    { kind: 'h2', id: 'template', text: 'The bank competitor analysis template' },
    {
      kind: 'p',
      text: 'The template has 10 columns, with 1 row per competitor and product for each customer profile. Products and rates come first because customers compare them first; onboarding, messages and service follow because they decide whether an applicant finishes.',
    },
    {
      kind: 'table',
      caption: 'A bank competitor analysis template: 1 row per competitor and product, for each customer profile',
      cols: ['Column', 'What to record', 'How often'],
      rows: [
        ['Products and eligibility', 'Account types, who may apply, the credit check used', 'Monthly'],
        ['Advertised rate', 'AER, APY or APR, with the date seen', 'Weekly, daily in a rate move'],
        ['Rate after sign-up', 'The rate shown after the form or in the app', 'Weekly'],
        ['Existing customer rate', 'The rate after a bonus ends, or on closed accounts', 'Monthly'],
        ['Fees and terms', 'Fees, notice periods, bonus conditions', 'Monthly'],
        ['Offers', 'Switching bonuses, boosted rates, card welcome offers', 'Weekly'],
        ['Onboarding steps', 'Steps, fields, time taken, what the identity check asks for', 'Monthly, and after an app update'],
        ['Messages after applying', 'Every email, text and push, with its time', 'As they arrive'],
        ['The app', 'Store rating, the screens before and after sign-in', 'Quarterly'],
        ['Service answers', 'Chat and phone answers to set questions, word for word', 'Weekly, and after a bot update'],
      ],
    },
    {
      kind: 'p',
      text: 'AER (annual equivalent rate) is the UK’s standard quote for a savings rate, APY (annual percentage yield) the US one, and APR (annual percentage rate) the yearly cost of borrowing. Record each with its date, the profile it was seen as (a new saver, a switcher, an existing customer) and a link to its screenshot or email.',
    },
    {
      kind: 'art',
      caption: 'The template filled for 3 invented banks in 1 week, as a new saver. The rate after sign-up and the emailed offer came from behind the application form.',
      art: {
        kind: 'report',
        title: 'Easy access savers, week of 2 November',
        period: 'New saver profile, UK · 3 invented banks',
        cols: ['Bank', 'Public rate', 'After sign-up', 'Offer by email', 'Chat answer'],
        rows: [
          { name: 'lantern.example', cells: ['4.10%', '4.60% with a bonus', '£100 by Friday', 'Wrong: said fixed'], tone: 'fail' },
          { name: 'saltmarsh.example', cells: ['4.35%', '4.35%', 'None in 7 days', 'Matched the terms'], tone: 'ok' },
          { name: 'fennick.example', cells: ['3.90%', '4.25% in the app', 'Finish your switch', 'Matched the terms'], tone: 'info' },
        ],
        notes: ['Each cell links to its screenshot, email or transcript.', 'The banks, rates and offers are invented.'],
      },
    },

    { kind: 'h2', id: 'sources', text: 'Where each column’s data comes from' },
    {
      kind: 'p',
      text: 'Most columns already have a source, and each source is good at its own part of the job.',
    },
    { kind: 'h3', id: 'public-data', text: 'Rate pages and regulators’ data' },
    {
      kind: 'list',
      items: [
        '**Banks’ own pages** are the primary record of the advertised rate and its terms. In the US, card issuers generally have to post the agreements they offer the public. The Consumer Financial Protection Bureau (CFPB) keeps a [card agreement database](' +
          CFPB_AGREEMENTS +
          ') with agreements from hundreds of issuers, collected each quarter, and issuers with fewer than 10,000 accounts don’t have to submit.',
        '**The [CFPB’s Terms of Credit Card Plans survey](' +
          CFPB_TCCP +
          ')** collects card data from over 150 issuers every 6 months. Its newest dataset covers July to December 2025.',
        '**The Federal Deposit Insurance Corporation (FDIC)** publishes [national rates](' +
          FDIC +
          ') that average what every insured bank and credit union pays, weighted by each one’s share of deposits. They come out on the third Monday of each month. On 19 October 2026 the national savings rate was 0.38% and the 12-month certificate of deposit (CD) rate 1.76%.',
        '**The Bank of England’s quoted rates** are [headline rates advertised by banks and building societies](' +
          BOE_QUOTED +
          '), taken from Moneyfacts. Its [effective rates](' +
          BOE_EFFECTIVE +
          '), the average paid on balances, come from 25 reporting institutions and are published only in aggregate, so no single bank’s figure can be identified.',
      ],
    },
    {
      kind: 'p',
      text: 'The gap between those 2 Bank of England series is the market’s existing customer gap, measured across all banks at once. It tells a pricing team how far the market as a whole pays existing balances under its advertised rates, and nothing about a named competitor.',
    },
    { kind: 'h3', id: 'comparison-sites', text: 'Comparison sites and rate data' },
    {
      kind: 'p',
      text: '[Moneyfacts](' +
        MONEYFACTS +
        ') collects rates directly from UK banks, building societies and providers, handling about 1,300 updates each working day in 2025. Almost every UK bank and building society, the Bank of England and the FCA use its data. In the US, [Bankrate](' +
        BANKRATE +
        ') researches over 100 banks and credit unions and surveys their websites at least twice a month. Both are the fastest way to fill the advertised rate and offers columns across a whole market.',
    },
    { kind: 'h3', id: 'panels', text: 'Panels and research firms' },
    {
      kind: 'p',
      text: 'Consumer panels are groups of real people who pass on the marketing they receive. [Comperemedia](' +
        COMPEREMEDIA +
        ') tracks acquisition strategies, pricing, targeted offers and product launches through consumer panels across 5 channels in the US and Canada, for banking, cards, fintech, insurance and other sectors. [Competiscan](' +
        COMPETISCAN +
        ') runs panels across direct mail, email, digital, social media and print, in 10 sectors including banking, payment cards, insurance, and mortgages and loans. [Corporate Insight](' +
        CORPINSIGHT +
        ') says its analysts work through competitors’ websites and apps as real customers, examining 750,000 digital journeys a year for banking, insurance, investing, retirement and healthcare firms.',
    },
    { kind: 'h3', id: 'by-hand', text: 'Bank mystery shopping and your own team' },
    {
      kind: 'p',
      text: 'Bank mystery shopping sends a person to open an account, visit a branch or call as a customer, and reports what happened, priced per visit. Many strategy and journey teams do the same in-house: an analyst opens accounts, keeps the emails and fills a sheet. Both see what a real customer sees, a few competitors at a time.',
    },

    { kind: 'h2', id: 'what-they-miss', text: 'What public sources miss' },
    {
      kind: 'p',
      text: 'Rate pages, comparison sites and regulators’ data record what a bank publishes, and panels record what their members receive. Of the 10 columns, 5 depend on what a bank shows one customer after a sign-up, and most analyses go thin there.',
    },
    { kind: 'h3', id: 'applicant-rate', text: 'Credit card offers: the rate after an application' },
    {
      kind: 'p',
      text: 'A UK credit advert’s representative APR is a rate the lender expects at least 51% of agreements from that promotion to get or better. Up to 49% can be offered more. In [its April 2026 consultation](' +
        FCA_CP +
        '), the FCA asked whether that threshold remains appropriate, noting that a large number of people could apply on the headline rate and be offered a higher one. In the US, preapproved card offers are built from lists that [the credit reporting companies supply](' +
        CFPB_PRESCREEN +
        '), so each one is priced for the person it was sent to.',
    },
    {
      kind: 'stat',
      value: '51%',
      label: 'of agreements from a UK credit advert must be expected at its representative APR or better',
      source: 'FCA CP26/15, April 2026',
      href: FCA_CP,
    },
    {
      kind: 'p',
      text: 'A credit card offers comparison built from adverts compares headline rates. The rate a given profile is offered appears only after an application and a credit check.',
    },
    { kind: 'h3', id: 'after-sign-up', text: 'Fintech competitor analysis: rates in the app' },
    {
      kind: 'p',
      text: 'Many products open only inside an app, after a first account. As of 11 November 2026, [Chase UK’s saver](' +
        CHASE +
        ') pays 2.25% AER variable as standard. New customers who open one in their first 31 days get 4.5% AER in total, with the extra 2.25% fixed for 12 months. Every step of opening it runs in the Chase app, after a Chase current account. The same account pays one customer 4.5% and another 2.25%, depending on when they joined.',
    },
    {
      kind: 'p',
      text: 'Comparison sites are built around published rates. Bankrate counts only rates published online and leaves out institutions that confirm rates by phone. A rate quoted in an app, on a call or after a form sits outside its tables by design.',
    },
    { kind: 'h3', id: 'existing-customers', text: 'Existing customer rates' },
    {
      kind: 'p',
      text: 'In its [September 2024 update](' +
        FCA_CASH +
        '), the FCA flagged the risk in paying new customers more than existing customers of the same product. It expects any gap between open and closed products to have a clear rationale. Some banks and building societies publish rates for accounts closed to new customers, such as [Family Building Society’s withdrawn accounts page](' +
        FAMILY_BS +
        '). [Moneyfacts tracks closed account rates](' +
        MF_CLOSED +
        ') across the market. On easy access accounts, closed products paid 0.66 percentage points less than open ones at the peak, in October 2023 (2.52% against 3.18%), and 0.05 points less by June 2025. The rate on an open product once its bonus ends sits inside each customer’s account.',
    },
    { kind: 'h3', id: 'messages', text: 'Offers and emails after an application' },
    {
      kind: 'p',
      text: 'Panels record what their members receive, in the sectors and countries they cover. Competiscan also lists “behind-the-login insights” among its capabilities, and its home page doesn’t describe how those are gathered. The reminders and offers that follow an unfinished application go to the address that started it, so a team that wants them from a named competitor starts that application itself.',
    },
    { kind: 'h3', id: 'service', text: 'Service answers' },
    {
      kind: 'p',
      text: 'In June 2023 the [CFPB](' +
        CFPB_CHATBOTS +
        ') found that each of the 10 largest US commercial banks had deployed a chatbot. Chatbots built on large language models, the type of AI model behind ChatGPT, sometimes struggle to give accurate and reliable answers, the report found. An answer counts as evidence once it is saved with its date, and it can change after any update to the bot.',
    },
    {
      kind: 'stat',
      value: '98 million',
      label: 'people in the US used a bank’s chatbot in 2022, about 37% of the population',
      source: 'CFPB, June 2023',
      href: CFPB_CHATBOTS,
    },

    { kind: 'h2', id: 'method', text: 'How to fill the template with dated evidence' },
    {
      kind: 'p',
      text: 'A durable programme records the public pages every week, walks each competitor’s application as a new customer every month, and keeps every message that follows, each with its screenshot, email or transcript. It can start this week.',
    },
    { kind: 'h3', id: 'competitors-and-profiles', text: '1. Choose the competitors and the customer profiles' },
    {
      kind: 'p',
      text: 'List 5 to 20 competitors for each product line, including the fintechs your customers move money to. Pick 2 or 3 new customer profiles, such as a new saver, a switcher and a card applicant, and fill the existing customer column from banks’ closed account pages, Moneyfacts and panels. Record the country and the device with every entry, because a bank’s app and website can show different rates.',
    },
    { kind: 'h3', id: 'public-pages', text: '2. Record the public pages every week' },
    {
      kind: 'p',
      text: 'Take a dated screenshot of each competitor’s rate and offer pages, and read the market from Moneyfacts or Bankrate. Set the FDIC national rate or the Bank of England series as the benchmark, and save the CFPB agreement for each card. A pass is a row per product with a date and a screenshot link.',
    },
    { kind: 'h3', id: 'walk-application', text: '3. Walk each application, up to the identity check' },
    {
      kind: 'p',
      text: 'Give each competitor its own email address and phone number. Screenshot every step and record the time it takes, the fields asked for, any rate or offer shown after the form and what the identity check asks for. Then stop. In the US, the [customer identification rule](' +
        US_CIP +
        ') requires a bank to collect a name, date of birth, address and identification number before opening an account. In the UK, [the Money Laundering Regulations 2017](' +
        UK_MLR +
        ') require identity checks before a business relationship begins. A bank may open an account first only if no transactions happen until the check is done. Never enter details that aren’t true. The guide [is it legal to mystery shop competitors](/blog/is-it-legal-to-mystery-shop-competitors) sets out what decides whether a method is allowed; none of this is legal advice.',
    },
    { kind: 'h3', id: 'keep-messages', text: '4. Keep every message that follows' },
    {
      kind: 'p',
      text: 'Leave each inbox and phone running. Log every reminder, offer and rate notice with its arrival time, and keep the original email with its full header, which shows the domain that sent it and when it arrived. The guide to [competitor email tracking tools](/blog/competitor-email-tracking-tools) compares the archives that collect emails for you.',
    },
    { kind: 'h3', id: 'ask-service', text: '5. Ask the same service questions every week' },
    {
      kind: 'p',
      text: 'Put 5 set questions to each competitor’s chat, such as whether a rate is fixed, when a bonus ends and how to close an account. Keep each answer word for word beside the terms it should match, and ask again after any visible change to the bot.',
    },
    { kind: 'h3', id: 'log-report', text: '6. Log, date and report each change' },
    {
      kind: 'p',
      text: 'Keep 1 row per item: competitor, product, profile, column, date seen, what was seen and the evidence link. Send the pricing committee 1 page a week of what changed, with every figure linked to its screenshot, email or transcript.',
    },
    { kind: 'h3', id: 'cost', text: '7. Work out the cost by hand' },
    {
      kind: 'p',
      text: 'Use your own numbers: competitors × profiles × minutes a week ÷ 60 gives hours a week, multiplied by your team’s cost an hour and by 52. At 45 minutes a week per competitor and profile, 20 competitors and 3 profiles take 45 hours a week, more than 1 full-time analyst. The 45 minutes cover the rate check, a share of the monthly walk, the inbox log and the chat questions.',
    },
    {
      kind: 'art',
      caption: 'The sum for the largest programme, with example figures. Replace each line with your own.',
      art: {
        kind: 'price',
        title: 'A by hand programme, example figures',
        rows: [
          { label: 'Competitors watched', value: '20' },
          { label: 'Customer profiles for each', value: '3', note: 'New saver, switcher, card applicant' },
          { label: 'Minutes a week per profile', value: '45' },
          { label: 'Hours a week', value: '45', note: '20 × 3 × 45 ÷ 60' },
          { label: 'Your team’s cost an hour', value: '£50' },
        ],
        total: { label: 'Cost a year', value: '£117,000', note: '45 hours × £50 × 52 weeks' },
      },
    },
    {
      kind: 'p',
      text: 'The same sum gives £39,000 a year for 10 competitors and 2 profiles, and £9,750 for 5 competitors and 1 profile. By hand, the programme holds for 3 to 5 competitors; past that, it needs an inbox and phone number per competitor, kept for months, with every original saved.',
    },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. For [journey checks at banks and fintechs](/use-cases/journey-checks-for-banks-and-fintechs), it keeps each competitor’s offers after the form, every email and text that follows, account opening up to the identity check and chat answers, word for word. [Exa](' +
        EXA +
        ') and [Firecrawl](' +
        FIRECRAWL +
        ') give AI agents the public web, rate pages included. Obsession gives them what a bank shows only to its customers, kept for as long as anyone follows the bank, and an agent can call both.',
    },
    {
      kind: 'cta',
      text: 'Every step of account opening up to the identity check, each email and text after it and every chat answer, at your bank and your competitors. Each one is dated with its screenshot or transcript.',
      to: '/use-cases/journey-checks-for-banks-and-fintechs',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'tools', text: 'Banking competitive analysis tools compared', compare: true },
    {
      kind: 'p',
      text: 'Each option reads a different part of the market. We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026. Our page on [how Obsession compares with search engines, email archives and panels](/compare) covers the wider market.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Banking competitive analysis tools, by where their data comes from. From each provider’s own pages, 11 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Doing nothing',
          'Costs no time',
          'Free',
          'Competitor moves show up first in your own deposit flows',
          'Products that rarely reprice',
        ],
        [
          'By hand: an analyst, plus an inbox and phone per competitor',
          'Sees what a new customer sees, up to the identity check',
          'Free, plus about 45 minutes a week per competitor and profile',
          'Hours grow with every competitor, and history starts the day you begin',
          '3 to 5 competitors',
        ],
        [
          'Regulators’ data: [FDIC national rates](' + FDIC + '), [CFPB card agreements](' + CFPB_AGREEMENTS + '), [Bank of England rate series](' + BOE_QUOTED + ')',
          'Official benchmarks and published card terms',
          'Free',
          'Market averages and published terms, with nothing sent after a sign-up',
          'Benchmarks and card terms',
        ],
        [
          'Rate data: [Moneyfacts](' + MONEYFACTS + '), [Bankrate](' + BANKRATE + ')',
          'Advertised rates across most of the market, updated hourly in the working day at Moneyfacts',
          'Free to read online',
          'Rates published online, and Bankrate leaves out rates confirmed by phone',
          'Headline rates and best buys',
        ],
        [
          'Marketing panels: [Comperemedia](' + COMPEREMEDIA + '), [Competiscan](' + COMPETISCAN + ')',
          'Mail, email and targeted offers sent to consumer panels, across banking, cards and insurance',
          'On request at both',
          'What their panellists receive, in the sectors and countries they cover',
          'Acquisition mail and prescreened card offers',
        ],
        [
          'Digital research: [Corporate Insight](' + CORPINSIGHT + ')',
          'Analysts work through competitors’ websites and apps as real customers, 750,000 journeys a year',
          'On request, with no seat licences',
          'Its pages describe research services and don’t describe an API',
          'Banking, investing and insurance benchmarks',
        ],
        [
          'Obsession (ours): [Competitor tracking](/recipes/competitor-tracking), [Support bot check](/recipes/support-bot-check)',
          'Keeps what each bank and fintech you name shows only to its customers: offers after the form, every email and text, account opening up to the identity check, chat answers',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'A bank not yet covered starts its history the day it is added\nOffers priced from a credit file stay with panels',
          'What a new customer gets from each competitor, on every channel, for as long as you follow it',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For what each competitor shows only to its customers, use Obsession, which keeps it dated for every bank and fintech you name, for as long as you follow them. That covers the offer after the application form, every email after it, each step of account opening up to the identity check and chat answers. Moneyfacts and Bankrate answer advertised rate questions directly, and the FDIC, the CFPB and the Bank of England give official benchmarks and card terms for free. Comperemedia and Competiscan cover the mail and prescreened offers their panels receive, and Corporate Insight benchmarks competitors’ websites and apps through its analysts.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'list',
      items: [
        '**Credit-file pricing and established accounts sit past the identity check.** The rate an applicant is finally offered and what a long-standing customer sees once signed in stay with panels of real customers and with your own customer research.',
        '**1 profile sees 1 customer’s view.** A new saver sees what competitors show new savers. Record the profile, the country and the device with every entry.',
        '**The template is general information,** not regulatory or compliance advice. What goes into a fair value assessment or a board report stays your firm’s call.',
      ],
    },
    {
      kind: 'p',
      text: 'Member and loyalty rates work the same way in retail and travel, and the guide to [member-only pricing](/blog/member-only-pricing) covers how to track a competitor’s signed-in price beside its public one. Start with the 3 competitors your customers mention most, and fill the existing customer column before the next rate decision.',
    },
    {
      kind: 'cta',
      text: 'Sample data from a real UK store in September 2026: 4 test customers, every inbox watched for 48 hours, and the record in every format it comes in.',
      to: '/sample-output',
      label: 'See sample data',
    },

    { kind: 'h2', id: 'questions', text: 'Frequently asked questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is a bank competitor analysis?',
          a: 'It is a dated comparison of what competing banks, card issuers and fintechs offer and how they treat a customer. It covers products, rates, fees, offers, onboarding steps, the app and service answers, each entry with the date seen, the customer profile and its screenshot, email or transcript.',
        },
        {
          q: 'What should a bank competitor analysis template include?',
          a: '10 columns: products and eligibility, the advertised rate, the rate after sign-up, the existing customer rate, fees and terms, offers, onboarding steps, messages after applying, the app and service answers. Each entry records the date seen, the customer profile and a link to its screenshot, email or transcript.',
        },
        {
          q: 'Where can I compare credit card offers?',
          a: 'Issuers’ own pages and comparison sites list welcome offers, rates and fees, and in the US the CFPB’s database holds each issuer’s card agreement. Preapproved offers are built from credit files and reach only the people they were sent to, and panels such as Comperemedia and Competiscan collect them from their panellists. The rate an applicant is finally offered appears only after an application.',
        },
        {
          q: 'How is a fintech competitor analysis different from a bank one?',
          a: 'The columns are the same, with more weight on the app and onboarding, because many fintech products are opened and priced inside the app after a first account. A rate table shows the advertised rate, and a walk through the sign-up shows the rate and offer a new customer gets.',
        },
        {
          q: 'Can you see a competitor bank’s rates for existing customers?',
          a: 'Partly. Some banks publish rates for accounts closed to new customers, and Moneyfacts tracks closed account rates across the UK market. The Bank of England publishes the average rate paid on balances, in aggregate only. The rate a named competitor pays once a bonus ends sits inside its customers’ accounts, where panels of real customers are the source.',
        },
        {
          q: 'Is it legal to open an account at a competitor bank to research it?',
          a: 'It depends on the bank’s terms and the law where you are, and this is general information, not legal advice. Never enter details that aren’t true, and stop at the identity check unless you are opening a real account in your own name.',
          link: { label: 'Is it legal to mystery shop competitors?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
        },
        {
          q: 'How often should a bank update its competitor analysis?',
          a: 'Check advertised rates and offers weekly, and daily during a rate move such as a central bank decision. Log emails and texts as they arrive, walk applications monthly and after a competitor’s app update, and check app ratings quarterly.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About this template',
      text: 'General information, not legal, regulatory or compliance advice. Rules, rates and offers are quoted from each regulator’s, bank’s or provider’s own pages as they stood on 11 November 2026, and we tested none of the tools. Lantern, Saltmarsh and Fennick are invented banks, and every rate, offer and figure in the illustrations and the cost example is an example.',
    },
  ],

  sources: [
    { title: 'FCA update on cash savings: September 2024', publisher: 'Financial Conduct Authority', url: FCA_CASH, date: '2024-09-18' },
    { title: 'Credit card agreement database', publisher: 'Consumer Financial Protection Bureau', url: CFPB_AGREEMENTS },
    { title: 'Terms of Credit Card Plans (TCCP) survey', publisher: 'Consumer Financial Protection Bureau', url: CFPB_TCCP, date: '2026-06-09' },
    { title: 'National rates and rate caps', publisher: 'Federal Deposit Insurance Corporation', url: FDIC, date: '2026-10-19' },
    { title: 'Further details about quoted household interest rates data', publisher: 'Bank of England', url: BOE_QUOTED, date: '2023-01-31' },
    { title: 'Further details about effective interest rates data', publisher: 'Bank of England', url: BOE_EFFECTIVE, date: '2025-05-14' },
    { title: 'About us', publisher: 'Moneyfacts', url: MONEYFACTS },
    { title: 'How Bankrate selects the best banking products', publisher: 'Bankrate', url: BANKRATE, date: '2025-04-18' },
    { title: 'Comperemedia Direct: direct market intelligence', publisher: 'Mintel Comperemedia', url: COMPEREMEDIA },
    { title: 'Competiscan', publisher: 'Competiscan', url: COMPETISCAN },
    { title: 'Competitive and UX research services', publisher: 'Corporate Insight', url: CORPINSIGHT },
    { title: 'CP26/15: Reviewing the financial promotions rules for consumer credit', publisher: 'Financial Conduct Authority', url: FCA_CP, date: '2026-04-29' },
    { title: 'Can I make issuers stop sending me credit card offers in the mail?', publisher: 'Consumer Financial Protection Bureau', url: CFPB_PRESCREEN, date: '2024-01-22' },
    { title: 'Chase saver account', publisher: 'Chase UK', url: CHASE },
    { title: 'Withdrawn savings accounts', publisher: 'Family Building Society', url: FAMILY_BS },
    { title: 'Loyal savers endure three years of poorer closed rates', publisher: 'Moneyfacts Group', url: MF_CLOSED, date: '2025-06-30' },
    { title: 'Chatbots in consumer finance', publisher: 'Consumer Financial Protection Bureau', url: CFPB_CHATBOTS, date: '2023-06-06' },
    { title: '31 CFR 1020.220: Customer identification programs for banks', publisher: 'Legal Information Institute, Cornell Law School', url: US_CIP },
    { title: 'The Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017, regulation 30', publisher: 'legislation.gov.uk', url: UK_MLR, date: '2017' },
    { title: 'Exa', publisher: 'Exa', url: EXA },
    { title: 'Firecrawl', publisher: 'Firecrawl', url: FIRECRAWL },
  ],

  related: [
    'consumer-duty-fair-value-assessment',
    'member-only-pricing',
    'the-web-behind-the-login',
    'recipe:competitor-tracking',
    'recipe:support-bot-check',
    '/use-cases/journey-checks-for-banks-and-fintechs',
  ],
}
