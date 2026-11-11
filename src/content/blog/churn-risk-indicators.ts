import type { BlogPost } from './types'

/* Revenue team guides, spec 3 (_research/seo/revenue-teams-11nov/WRITER_BRIEF.md and PLAN.md, 11 Nov 2026). It owns
   "churn risk indicators" and churn risk signals, early warning signs of churn, customer health score indicators and
   signs a customer will churn (Google autocomplete, US and UK, 11 Nov: demand.json). "Churn signals" belongs to
   /recipes/account-watch, linked with that phrase as the anchor; "customer health score" is a supporting phrase only
   (Gainsight, ChurnZero and Vitally hold it). Reader: customer success and account management at B2B software vendors
   whose product reaches their customers' own customers (email and SMS, loyalty and reviews, help desk and AI support,
   checkout and payments, messaging, identity and onboarding); persona key cs.
   The case: credit the inside indicators (usage, setup, support, sentiment, relationship, commercial, silence) and the
   health score tools from their own pages, then add the outside indicator: what each account's own customers stop
   receiving, and the platform behind each email, which tells a broken flow from a move to a competitor. Then a health
   score with it as its own group, the rules, the weekly routine, the check by hand and its cost.
   Read at the source on 11 Nov 2026: Gainsight's health score article (16 Mar 2022) and pricing page; ChurnZero's
   Churnopedia health score page and home page (no pricing page: /pricing/ returned 404); Vitally's four-metric article
   (8 May 2025) and pricing page; HubSpot's knowledge base article on the customer success workspace health score
   (updated 15 Jun 2026); CustomerGauge's churn risk post (30 Oct 2026); Common Room's churn risk post (6 Nov 2026) and
   pricing page; Gmail Help's full header page; Exa's home page and its GTM use case page.
   Obsession is described in the words of /recipes/account-watch (a customer account at each company you sell to,
   facts on the account's record in your CRM, journeys stop short of paying, no tracking of individual staff), /sales
   ("Its emails have come from a new platform since 2 October"), site.ts and /compare/obsession-vs-exa. Larkfield,
   Marrowby, Copperleaf, Tallowfield, Brackenhall, Wexmoor, Pellow and Stoneacre are invented, at .example addresses, as is every figure in the pictures and the
   cost example. No dashes. */

const GAINSIGHT = 'https://www.gainsight.com/blog/customer-health-scores/'
const CHURNZERO = 'https://churnzero.com/churnopedia/health-score/'
const VITALLY = 'https://www.vitally.io/post/how-to-create-a-customer-health-score-with-four-metrics'
const CUSTOMERGAUGE = 'https://customergauge.com/blog/customer-churn-risk'
const COMMONROOM = 'https://www.commonroom.io/blog/how-to-spot-expansion-and-churn-risk-in-saas-accounts/'
const HUBSPOT = 'https://knowledge.hubspot.com/help-desk/customize-a-health-score-in-the-customer-success-workspace'
const GMAIL = 'https://support.google.com/mail/answer/29436'
const EXA = 'https://exa.ai/'
const EXA_GTM = 'https://exa.ai/use-cases/gtm'
const GAINSIGHT_PRICING = 'https://www.gainsight.com/pricing/'
const CHURNZERO_HOME = 'https://churnzero.com/'
const VITALLY_PRICING = 'https://www.vitally.io/pricing'
const COMMONROOM_PRICING = 'https://www.commonroom.io/pricing/'

export const post: BlogPost = {
  slug: 'churn-risk-indicators',
  title: 'Churn risk indicators for customer success: the signal outside your product, before the renewal',
  dek: 'The indicators customer success teams already score, from product usage to a sponsor who leaves, and the one that sits outside your product: what each account’s own customers stop receiving. With a health score model, a weekly routine and the check by hand.',
  metaTitle: 'Churn risk indicators for customer success, before renewal',
  description:
    'Churn risk indicators for customer success teams: usage, NPS, tickets and sponsors, plus the outside signal of what each account’s customers receive.',
  answer:
    'Churn risk indicators are the signs that a customer may not renew: falling product usage, a low Net Promoter Score, rising support tickets, a sponsor who leaves and late payments. Software that reaches the customer’s own customers, such as an email, help desk or payments platform, has one more outside the product: a welcome email that stops arriving, or emails that start coming from another email platform. Obsession keeps what each account sends its own customers, dated with the email or screenshot, by API, MCP or a table, so that indicator reaches the health score before the renewal call.',
  primaryKeyword: 'churn risk indicators',
  keywords: [
    'churn risk signals',
    'early warning signs of churn',
    'customer health score indicators',
    'signs a customer will churn',
    'churn risk factors',
    'customer health score',
  ],
  category: 'Watch other companies',
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 13,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'larkfield.example · renews 14 December',
      who: 'An invented account of an email and SMS platform, seen as its new subscribers',
      rows: [
        { time: 'Mon 2 Nov', text: 'Welcome email in 3 minutes', detail: 'Sent through your platform, sender checked', tone: 'ok' },
        { time: 'Wed 4 Nov', text: 'Browse reminder arrived', detail: 'Sent through your platform', tone: 'ok' },
        { time: 'Fri 6 Nov', text: 'Basket left, reminder in 1 hour', detail: 'Sent through your platform', tone: 'ok' },
        { time: 'Mon 9 Nov', text: 'New sign-up: welcome took 26 hours', detail: 'Past the 24-hour window the team set', tone: 'late' },
        { time: 'Tue 10 Nov', text: 'Welcome came from another platform', detail: 'Sent from a new platform', tone: 'fail' },
        { time: 'Tue 10 Nov', text: 'Usage in your product: steady', detail: 'Campaigns still send through you', tone: 'info' },
      ],
      foot: 'Invented account and times. Usage held steady while the welcome flow moved to another platform.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Churn risk indicators are the signs that a customer may not renew. The usual ones are product usage falling, a low Net Promoter Score (NPS, the 0 to 10 survey of whether a customer would recommend you), support tickets piling up, a sponsor leaving and invoices paid late. Customer success teams combine them in a customer health score and work the accounts that turn red before the renewal.',
    },
    {
      kind: 'p',
      text: 'Some software reaches the customer’s own customers: email and SMS platforms, loyalty and reviews apps, help desks and AI support, checkout and payments, messaging, identity and onboarding. For these vendors there is one more indicator, and it sits outside the product. It is what the account’s customers stop receiving, such as a welcome email that no longer arrives, texts that go quiet or emails that start coming from a new email platform.',
    },
    {
      kind: 'p',
      text: 'Gross revenue retention is the share of last year’s recurring revenue a team keeps before any expansion. Each point of it is worth $500,000 a year on a $50m book, $100,000 on a $10m book and $20,000 on a $2m book (example books). An outside indicator can show weeks before the renewal call, which is the time a customer success manager needs to save the account.',
    },

    { kind: 'h2', id: 'indicators-today', text: 'The churn risk indicators customer success teams track today' },
    {
      kind: 'p',
      text: 'Most customer success teams score the same families of indicators, and the platforms that build health scores describe them in close agreement.',
    },
    {
      kind: 'table',
      caption: 'Churn risk indicators by source, as customer success platforms describe them on 11 November 2026',
      cols: ['Indicator', 'What it shows', 'Where it comes from'],
      rows: [
        ['Product usage', 'Logins, feature adoption, seats in use', 'Your product'],
        ['Setup', 'Whether the account finished onboarding', 'Your product'],
        ['Support', 'Ticket volume, escalations, time to resolve', 'Your help desk'],
        ['Sentiment', 'NPS, survey scores, the manager’s own read', 'Surveys and your team'],
        ['Relationship', 'Sponsor changes, executive contact', 'Your CRM and public profiles'],
        ['Commercial', 'Late invoices, downgrades, renewal terms', 'Billing and contracts'],
        ['Silence', 'An account that stops engaging at all', 'Every source at once'],
      ],
    },
    {
      kind: 'p',
      text: '[Gainsight’s guide to health scores](' +
        GAINSIGHT +
        ') calls a health score “a predictive metric” of the likelihood of renewal, built from usage, support, sentiment and engagement data. [ChurnZero’s definition](' +
        CHURNZERO +
        ') splits the inputs into quantitative factors, such as product usage and support history, and qualitative ones, among them relationship quality and competitor risk. [Vitally](' +
        VITALLY +
        ') suggests 4 metrics: product setup, product usage rate, NPS and the CSM pulse, a customer success manager’s own rating of the account.',
    },
    {
      kind: 'p',
      text: '[CustomerGauge](' +
        CUSTOMERGAUGE +
        ') adds a quieter sign it calls the absence of signal: an account, often a passive one, that stops engaging altogether and churns without warning. [Common Room’s guide](' +
        COMMONROOM +
        ') adds signals from outside a team’s own tools, such as a champion joining a new employer and an account hiring to grow.',
    },
    {
      kind: 'stat',
      value: '23%',
      label: 'average annual churn reported by B2B companies in CustomerGauge’s benchmarks',
      source: 'CustomerGauge, October 2026',
      href: CUSTOMERGAUGE,
    },

    { kind: 'h2', id: 'health-score-tools', text: 'Customer health score indicators, and how the tools weigh them' },
    {
      kind: 'p',
      text: 'A customer health score turns those indicators into one number or colour per account. As of 11 November 2026, each platform’s own pages describe the weighting this way.',
    },
    {
      kind: 'list',
      items: [
        '**Gainsight** gives example weights of usage 40%, support 25%, sentiment 20% and executive engagement 15%. Its 0 to 100 scale reads 71 to 100 as healthy, 31 to 70 as at risk and 0 to 30 as critical, and it recommends 4 to 6 signals.',
        '**ChurnZero** suggests 5 to 7 factors on a 100-point scale, each worth at least 10 and at most 20 points.',
        '**Vitally**’s example is product setup 20%, product usage rate 40%, NPS 20% and CSM pulse 20%, with weights set by “which metrics best predict the outcomes you care about”.',
        '**HubSpot’s [customer success workspace](' +
          HUBSPOT +
          ')** builds a score from groups of events or properties, each adding or subtracting points, with score decay that lowers a score as the event behind it ages. It needs Service Hub Professional or Enterprise and a Service Seat.',
      ],
    },
    {
      kind: 'p',
      text: 'Every one of these inputs comes from your own product, your help desk, your surveys or the account’s people. Usage shows what your product did for the account. It can’t show what the account’s customers received from anyone else, and a move to a competitor can show there first.',
    },

    { kind: 'h2', id: 'outside-indicator', text: 'Churn risk signals outside your product: what the account’s customers receive' },
    {
      kind: 'p',
      text: 'The outside indicator is what an account’s own customers receive from it, seen the way one of those customers sees it. Sign up, leave a basket, opt in to texts, ask the chat a question, and keep every message with the time it arrived. It sits behind the account’s sign-up, in what search engines can’t reach: [the web behind the login](/blog/the-web-behind-the-login). When your product sends those messages or runs that page, a change there is a change in how the account uses you.',
    },
    {
      kind: 'p',
      text: 'A stopped message has 2 readings, and the difference decides the call. If the emails stopped and nothing replaced them, the account has broken something, and the customer success manager who brings the screenshot and the fix strengthens the renewal. If they start arriving again from another email platform, the account has moved that work to a competitor, weeks before anyone says so. An email’s headers, the lines of technical information at the top of every email, name the platform that sent it and tell the 2 readings apart.',
    },
    { kind: 'h3', id: 'email-sms', text: 'Email and SMS platforms' },
    {
      kind: 'p',
      text: 'The account’s [welcome series](/glossary/welcome-series), browse and basket reminders and texts are your product’s output. Watch for a [triggered flow](/glossary/triggered-flow) that stops, such as an [abandoned cart email](/glossary/abandoned-cart-email) that no longer follows a basket, and for texts that go quiet after an opt-in. Watch hardest for emails whose headers name a different sending platform. That change can sit beside steady usage, because an account can keep its campaigns on one platform while it moves its flows to another.',
    },
    { kind: 'h3', id: 'loyalty-reviews', text: 'Loyalty and reviews apps' },
    {
      kind: 'p',
      text: 'The loyalty programme’s emails after sign-up and the reviews on product pages are what the account’s customers see of you. A points email that stops after sign-up, or product pages whose reviews disappear or reappear in another app’s widget, both show on a screenshot taken as a shopper.',
    },
    { kind: 'h3', id: 'help-desk', text: 'Help desks and AI support' },
    {
      kind: 'p',
      text: 'The account’s chat and support email answer its customers through your product. Ask the same question each week and time the reply against the account’s own help page. A reply that takes 31 hours when the page promises 24, or a chat that stops answering, is a change in how the account runs support.',
    },
    { kind: 'h3', id: 'checkout-payments', text: 'Checkout and payments' },
    {
      kind: 'p',
      text: 'Walk the account’s checkout up to the payment step and screenshot it each week. When your payment option leaves the page, your volume report shows the drop, and the screenshot shows what replaced it.',
    },
    { kind: 'h3', id: 'identity-messaging', text: 'Messaging, identity and onboarding' },
    {
      kind: 'p',
      text: 'The account’s sign-up sends a verification email or a login code by text. A code that arrives late, stops arriving or comes from another provider shows on a new sign-up, logged with its arrival time.',
    },
    {
      kind: 'table',
      caption: 'One worked example for each type of vendor, on invented accounts: what the account’s customers saw, what it most likely means and the first move',
      cols: ['Vendor type', 'Account', 'What its customers saw', 'Likely reading', 'First move'],
      rows: [
        ['Email and SMS', 'larkfield.example', 'Welcome from a new platform', 'Flows moved to a competitor', 'Call this week'],
        ['Loyalty and reviews', 'brackenhall.example', 'Points email stopped 3 Nov', 'Broken in a relaunch', 'Send the fix'],
        ['Help desk and AI support', 'wexmoor.example', 'Chat reply in 31 hours', 'Support under strain', 'Raise it at the QBR'],
        ['Checkout and payments', 'pellow.example', 'A new wallet beside yours', 'Testing a competitor', 'Ask before the renewal'],
        ['Identity and messaging', 'stoneacre.example', 'Login code took 9 minutes', 'Delivery set-up broken', 'Fix it with their team'],
      ],
    },

    { kind: 'h2', id: 'health-score', text: 'How to add the outside indicator to a customer health score' },
    {
      kind: 'p',
      text: 'Add it as its own group, beside usage, support, sentiment, relationship and commercial. Weight it by how much of your product the account’s customers see. For an email and SMS platform that is most of it; for a payments provider, it is the checkout page.',
    },
    {
      kind: 'table',
      caption: 'A health score with the outside indicator as its own group. Example weights for an email and SMS platform, out of 100',
      cols: ['Group', 'Weight', 'Green', 'Amber', 'Red'],
      rows: [
        ['Product usage', '30', 'Steady or rising', 'Down 10% to 25%', 'Down more than 25%'],
        ['Support', '15', 'Normal volume', 'An escalation open', 'Repeated escalations'],
        ['Sentiment', '15', 'Positive survey and read', 'Mixed', 'Negative'],
        ['Relationship', '10', 'Sponsor in place', 'Sponsor quiet', 'Sponsor gone'],
        ['Commercial', '10', 'Paid on time', 'Paid late once', 'Downgrade asked'],
        ['What its customers receive', '20', 'Every message on time, from you', 'A message past its window', 'A flow stopped, or a new email platform'],
      ],
    },
    {
      kind: 'p',
      text: 'Set the group’s rules before the first score.',
    },
    {
      kind: 'list',
      items: [
        '**A change of email platform overrides the total.** Set the account red whatever its other scores, because a steady usage figure can hide a flow that has moved.',
        '**A message is missing only once its window closes.** Choose the window per message, such as 1 hour for a basket reminder or 24 hours for a welcome email, and score it late or missing after that.',
        '**Findings fade once fixed.** Score decay of the kind HubSpot’s workspace applies to ageing events fits here: once the new email confirms a fix, the finding’s weight fades over the weeks after it.',
        '**Keep the screenshots in your CRM.** Every finding carries its date and its screenshot or email on the account’s record in your CRM, so the renewal conversation starts from the same page. The guide to [CRM data enrichment fields](/blog/crm-data-enrichment-fields) sets out a field for each.',
      ],
    },
    {
      kind: 'art',
      caption: 'The health score for 4 invented accounts of an email and SMS platform. Larkfield’s usage and survey read steady, and the outside indicator turned it red.',
      art: {
        kind: 'report',
        title: 'Renewals in the next 90 days',
        period: 'An email and SMS platform’s book · 4 invented accounts',
        cols: ['Account', 'Usage', 'NPS', 'Its customers got', 'Status'],
        rows: [
          { name: 'larkfield.example', cells: ['Steady', '42', 'Welcome from a new platform', 'Red'], tone: 'fail' },
          { name: 'marrowby.example', cells: ['Steady', '51', 'Cart reminder stopped 6 Nov', 'Amber'], tone: 'late' },
          { name: 'copperleaf.example', cells: ['Down 18%', '30', 'Every email arrived', 'Amber'], tone: 'late' },
          { name: 'tallowfield.example', cells: ['Up 6%', '61', 'Every email arrived', 'Green'], tone: 'ok' },
        ],
        notes: [
          'Usage and NPS come from the vendor’s own tools; the fourth column from new subscribers’ inboxes.',
          'The accounts and figures are invented.',
        ],
      },
    },

    { kind: 'h2', id: 'weekly-routine', text: 'A weekly churn risk routine for customer success' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Pull the renewals.** Every account renewing in the next 120 days, largest annual recurring revenue (ARR) first.',
        '**Read what each account’s customers got this week.** New emails and texts, anything past its window, the platform behind each email, and the checkout and chat where your product sits.',
        '**Score the group.** Green, amber or red by the rules, with a change of email platform overriding the total.',
        '**Call the reds within 2 working days.** Open with the screenshot and the date. Where the account broke something, offer the fix; where it moved work to a competitor, ask what drove the move while there is time to answer it.',
        '**Hold the ambers to the next touchpoint.** Check again once the window closes, and bring the screenshots to the next quarterly business review; the [QBR template](/blog/qbr-template) has a slide for it.',
        '**Report on Friday.** The accounts that changed colour, the renewal ARR now red, and what each call found.',
      ],
    },
    {
      kind: 'p',
      text: 'The same reading finds expansion. An account that never set up texts, or sends no browse reminder, has a gap your product fills, and the screenshot shows its team what their customers are missing.',
    },

    { kind: 'h2', id: 'by-hand', text: 'How to check what an account’s customers receive, by hand' },
    {
      kind: 'p',
      text: 'A customer success team can start this week with a spare inbox and phone number per account.',
    },
    { kind: 'h3', id: 'pick-accounts', text: '1. Pick the accounts' },
    {
      kind: 'p',
      text: 'Start with renewals in the next 120 days and the accounts with the most ARR. For each, write down which of its customer-facing steps your product runs: the welcome email, the basket reminder, texts, the chat or the checkout.',
    },
    { kind: 'h3', id: 'own-inbox', text: '2. Give each account its own inbox and number' },
    {
      kind: 'p',
      text: 'Use an address your company owns, kept for that account and nothing else, so every message traces back to it. Add a phone number for texts where the account sends them.',
    },
    { kind: 'h3', id: 'sign-up', text: '3. Sign up the way any customer does' },
    {
      kind: 'p',
      text: 'Join the newsletter, create an account, leave a basket and stop before payment, and opt in to texts. Never enter details that aren’t true.',
    },
    { kind: 'h3', id: 'log', text: '4. Log every message with its time' },
    {
      kind: 'p',
      text: 'Record each email and text with its arrival time and subject in one sheet per account, and set the window for each. **A pass:** every expected message logged inside its window.',
    },
    { kind: 'h3', id: 'headers', text: '5. Read the sending platform from the headers' },
    {
      kind: 'p',
      text: 'In Gmail, [More, then Show original](' +
        GMAIL +
        ') opens the full header, which shows where an email came from. Note the servers in its Received lines and the domain in its [DKIM](/glossary/dkim) signature, a signature the sending domain adds to each email. A change from one month to the next marks the week the account’s emails started coming from a different platform.',
    },
    { kind: 'h3', id: 'repeat', text: '6. Repeat every week, and after any change' },
    {
      kind: 'p',
      text: 'Sign up again each month to see the welcome series from the start, and again the week after any relaunch or migration you hear about.',
    },
    {
      kind: 'p',
      text: 'By hand, the check takes about 15 minutes a week per account, covering the inbox log, a share of the monthly sign-up and the header check. Multiply your accounts by 15 and divide by 60 for hours a week, then multiply by your team’s cost an hour and by 52.',
    },
    {
      kind: 'art',
      caption: 'The sum for a whole book, with example figures. Replace each line with your own.',
      art: {
        kind: 'price',
        title: 'Checking 400 accounts by hand, example',
        rows: [
          { label: 'Accounts renewing in 120 days', value: '400' },
          { label: 'Minutes a week per account', value: '15' },
          { label: 'Hours a week', value: '100', note: '400 × 15 ÷ 60' },
          { label: 'Your team’s cost an hour', value: '$60' },
        ],
        total: { label: 'Cost a year', value: '$312,000', note: '100 hours × $60 × 52 weeks' },
      },
    },
    {
      kind: 'p',
      text: 'The same sum gives $78,000 a year for 100 accounts and $15,600 for 20. By hand, the check holds for the 10 to 20 largest renewals; a whole book needs an inbox and number per account, kept open for months, with every original email saved.',
    },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. For customer success, it collects the [churn signals](/recipes/account-watch) outside your product for every account on your book. That covers each email and text an account sends its customers, its sign-up and basket walked daily, and the sending platform behind each email with the week it changes. Each fact lands dated on the account’s record in your CRM, so you can see what it does to your renewals, retention and net revenue retention.',
    },
    {
      kind: 'p',
      text: 'Most customer success and sales teams already use similar data about their accounts, from contact databases and intent tools to [Exa](' +
        EXA +
        '), which calls itself “The world’s data for AI agents”. Its [page for GTM teams](' +
        EXA_GTM +
        ') offers company and people data with cited sources, such as hiring, funding, job changes and product launches, in seconds. Exa’s pages don’t describe keeping what a company sends the people who sign up. An agent can call both, and [the comparison with Exa](/compare/obsession-vs-exa) sets out which questions each one answers.',
    },
    {
      kind: 'cta',
      text: 'What every account on your book sends its own customers, dated, with the platform behind each email, on the account’s record in your CRM.',
      to: '/#join',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'tools', text: 'Churn risk tools compared', compare: true },
    {
      kind: 'p',
      text: 'Each option reads a different source of churn risk. We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026. The [sales page](/sales) shows how the same facts serve account briefs and battlecards.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Churn risk tools, by where their indicators come from. From each provider’s own pages, 11 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'The renewal call is the first warning', 'Books with very low churn'],
        [
          'By hand: a spare inbox and number per account',
          'Sees what the account’s customers receive',
          'Free, plus about 15 minutes a week per account',
          'Hours grow with every account, and history starts the day you begin',
          'The 10 to 20 largest renewals',
        ],
        [
          'Customer success platforms: [Gainsight](' + GAINSIGHT_PRICING + '), [ChurnZero](' + CHURNZERO_HOME + '), [Vitally](' + VITALLY_PRICING + ')',
          'Health scores, playbooks and renewal workflows on your own data',
          'Gainsight: on request\nChurnZero: no price on its pages\nVitally: on request',
          'Scores the data you feed it: product, CRM, help desk, surveys',
          'Running customer success at scale',
        ],
        [
          'HubSpot: [customer success workspace](' + HUBSPOT + ')',
          'Health scores from events and properties, with score decay',
          'Service Hub Professional or Enterprise, with a Service Seat',
          'Scores the data held in HubSpot',
          'Teams already on HubSpot',
        ],
        [
          'Signal tools: [Common Room](' + COMMONROOM_PRICING + ')',
          'Signals about an account’s people and company, such as job changes',
          'Essential: $2,500 a month, billed annually\nAdvanced, Enterprise: custom',
          'Its pages don’t describe what an account’s customers receive',
          'Champion moves and hiring',
        ],
        [
          'Obsession (ours): [Account watch](/recipes/account-watch), [Email and SMS tracking](/recipes/email-sms-tracking)',
          'Keeps what each account sends its own customers: emails, texts, sign-up, basket and the platform behind each email',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'An account not yet covered starts its history the day it is added\nEvery check stops short of paying',
          'The indicator outside your product, for every account on your book',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For the indicator outside your product, use Obsession. It keeps what every account on your book sends its own customers, dated, with the sending platform behind each email, for as long as you follow the account. Gainsight, ChurnZero, Vitally and HubSpot turn your product, support and survey data into a health score and its playbooks. Common Room adds job changes and hiring at the account’s company. The outside indicator becomes one more group in whichever health score you run.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'list',
      items: [
        '**It fits products the account’s customers touch.** The outside indicator says the most where your product sends the account’s emails and texts or runs its checkout, chat or sign-up. Back-office software, such as payroll or accounting, leaves little for a customer to see.',
        '**Every check stops before payment.** Order confirmations and shipping texts sit with the account’s own data and yours.',
        '**It shows what changed, and the account knows why.** A stopped flow or a new platform opens the conversation; the reason comes from the call.',
        '**People stay with your CRM.** Sponsor changes come from your own records and public profiles, and Account watch tracks no individual staff.',
      ],
    },
    {
      kind: 'p',
      text: 'The same changes tell sales which prospects are changing platform, which the guide to [buying signals examples](/blog/buying-signals-examples) covers for sales development teams. Start with the 10 largest renewals in the next quarter, sign up to each this week, and read the headers before the next forecast call.',
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
          q: 'What are churn risk indicators?',
          a: 'They are the signs that a customer may not renew. The common ones are falling product usage, a low NPS, rising support tickets, a sponsor who leaves and late payments. For software that reaches the customer’s own customers, what those customers stop receiving is one more.',
        },
        {
          q: 'What are the early warning signs of churn?',
          a: 'Inside your product: logins and feature use falling, survey replies stopping, a champion going quiet and an account that stops engaging at all. Outside it: a welcome or basket email that stops arriving, texts that go quiet, or emails that start coming from another platform, which can show weeks before the renewal.',
        },
        {
          q: 'Which customer health score indicators matter most?',
          a: 'Product usage carries the most weight in the examples Gainsight and Vitally publish, at 40%, followed by support, sentiment and relationship. Set your own weights from last year’s churned and renewed accounts, and keep the indicators that told the 2 groups apart.',
        },
        {
          q: 'What are the signs a customer will churn to a competitor?',
          a: 'Inside your product, usage falls and the sponsor goes quiet. Outside it, the account’s emails start coming from another sending platform, its checkout shows another provider, or its reviews move to another app. An email’s full header names the servers and the signing domain behind it.',
        },
        {
          q: 'What are churn risk factors?',
          a: 'Churn risk factors are the conditions that make churn more likely, such as a poor fit, an onboarding that never finished or a single sponsor. Churn risk indicators are the signs that it is happening, such as falling usage or a flow that stopped. A health score tracks both.',
        },
        {
          q: 'How often should customer success check churn risk indicators?',
          a: 'Read usage and support weekly, sentiment after each survey, and what each account’s customers receive every week, with a fresh sign-up each month. Review every account renewing in the next 120 days each Monday.',
        },
        {
          q: 'Can the outside indicator be checked automatically?',
          a: 'Yes. Obsession’s Account watch keeps a customer account open at each company you sell to and lands each change, dated with its email or screenshot, on the account’s record in your CRM.',
          link: { label: 'Account watch', to: '/recipes/account-watch' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'Facts checked 11 November 2026',
      text: 'General information about customer success practice. Each tool is quoted from its provider’s own pages as they stood on 11 November 2026, and we tested none of them. Larkfield, Marrowby, Copperleaf, Tallowfield, Brackenhall, Wexmoor, Pellow and Stoneacre are invented accounts, and every figure in the illustrations, the weights and the cost example is an example.',
    },
  ],

  sources: [
    { title: 'Customer health score explained: metrics, models and tools', publisher: 'Gainsight', url: GAINSIGHT, date: '2022-03-16' },
    { title: 'What is a customer health score in SaaS', publisher: 'ChurnZero', url: CHURNZERO },
    { title: 'Simplifying your customer health scores with four key metrics', publisher: 'Vitally', url: VITALLY, date: '2025-05-08' },
    { title: '4 signs of customer churn risk to help you detect churn', publisher: 'CustomerGauge', url: CUSTOMERGAUGE, date: '2026-10-30' },
    { title: 'How to spot expansion and churn risk in SaaS accounts', publisher: 'Common Room', url: COMMONROOM, date: '2026-11-06' },
    { title: 'Create a health score in the customer success workspace', publisher: 'HubSpot', url: HUBSPOT, date: '2026-06-15' },
    { title: 'Trace an email with its full header', publisher: 'Gmail Help', url: GMAIL },
    { title: 'Exa', publisher: 'Exa', url: EXA },
    { title: 'Company data API and CRM enrichment for GTM teams', publisher: 'Exa', url: EXA_GTM },
    { title: 'Pricing', publisher: 'Gainsight', url: GAINSIGHT_PRICING },
    { title: 'ChurnZero', publisher: 'ChurnZero', url: CHURNZERO_HOME },
    { title: 'Pricing', publisher: 'Vitally', url: VITALLY_PRICING },
    { title: 'Pricing', publisher: 'Common Room', url: COMMONROOM_PRICING },
  ],

  related: [
    'qbr-template',
    'crm-data-enrichment-fields',
    'buying-signals-examples',
    'recipe:account-watch',
    'recipe:email-sms-tracking',
    '/sales',
  ],
}
