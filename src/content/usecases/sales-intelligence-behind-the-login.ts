import type { UseCaseStudy } from '../types'

/* Sales intelligence from behind the login (/use-cases/sales-intelligence-behind-the-login), 12 Nov 2026 (Task 4,
   James's brief, built by Seun): revenue teams at B2B software companies get what their prospects, customers and
   competitors show only to the people who sign up, in their CRM, Clay, Slack or their own AI agent. The hub for the 12
   revenue team guides: each role's card links its guide, and the rest list under Guides for this job. Not ecommerce
   (Seun, 12 Nov): the example vendor sells to banks, airlines, apps, insurers and telecoms, and "By what you sell"
   covers every kind of B2B software. The switch line keeps to the live site ("a new platform since 2 October", the
   sender checked). Tessaly, its accounts, its competitors and every figure are invented, and `fine` says so. */

export const study: UseCaseStudy = {
  name: 'Sales intelligence for revenue teams',
  line: 'What every prospect, customer and competitor sends the people who sign up, in your CRM, Clay or Slack.',

  meta: {
    path: '/use-cases/sales-intelligence-behind-the-login',
    title: 'Sales intelligence for B2B revenue teams: behind the login',
    description:
      'What prospects, customers and competitors show only to people who sign up: the platform behind each email, broken steps and price changes, each dated.',
    answer:
      'Sales intelligence from behind the login is what your prospects, customers and competitors show only to the people who sign up. That means every email and text and the platform that sent it, their checkout and chat replies, and the steps that break. Obsession keeps it for every account and competitor you name, each fact dated with its email or screenshot, in your CRM, Clay, Slack or your own AI agent.',
    ogImage: '/og/sales-intelligence-behind-the-login.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Sales intelligence for revenue teams', path: '/use-cases/sales-intelligence-behind-the-login' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'Sales intelligence from behind the login.',
    sub: 'Every email and text your accounts and competitors send new customers, with the platform that sent it, plus their checkout, chat replies and broken steps. Each dated with its screenshot, for revenue teams at B2B software companies.',
    example: { chips: ['Tessaly, a customer messaging platform', '412 target accounts', '60 renewals', '3 competitors'] },
    flow: [
      {
        label: 'What you name',
        title: 'Accounts and competitors',
        items: ['412 target accounts from the CRM', '60 customers renewing', '3 competitors', 'Who signs up: a new customer'],
        foot: 'Any company, in any industry',
      },
      {
        label: 'What comes back',
        title: 'Every fact, dated',
        items: ['Every email and text, and its platform', 'Checkout and chat replies', 'Silences and broken steps', 'Competitors’ prices, plans and offers'],
        foot: 'Each with its email or screenshot',
      },
      {
        label: 'Where it lands',
        title: 'Where your team works',
        items: ['Fields in your CRM', 'A Clay column', 'A Slack digest or a webhook', 'Your AI SDR, by API or MCP'],
        foot: 'Nothing to install',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-revenue-hero',
      button: 'Request early access',
      interest: 'prospect',
    },
  },

  how: {
    heading: 'Name your accounts and competitors. The sign-ups stay open.',
    sub: 'Tessaly, a customer messaging platform, follows its 412 target accounts, its customers and 3 competitors. Its accounts are banks, airlines, apps, insurers and telecoms.',
    steps: [
      {
        title: 'Set it up',
        line: 'Which companies, as which customer, and what counts as a signal.',
        chips: ['Accounts from your CRM or Clay', 'Your customers', 'Your competitors', 'New customer · US and UK'],
        steps: [
          {
            title: 'Name the companies',
            line: 'Your target accounts, the customers you serve and the competitors you meet in deals. A domain is the only input.',
            example: 'Tessaly sends 412 target accounts from its CRM, 60 customers renewing this quarter and 3 competitors: Marrowby, Pellcast and Quorley.',
          },
          {
            title: 'Pick who signs up',
            line: 'The customer profile and country to sign up as. A new subscriber and a trial user are sent different emails and offers.',
            example: 'A new subscriber in the US and the UK at each account, and a trial user at each competitor.',
          },
          {
            title: 'Say what counts as a signal',
            line: 'The changes your team acts on, and who hears about each one.',
            example: 'A new sending platform goes to the account’s owner in the CRM. A competitor’s price change goes to #competitors in Slack.',
          },
        ],
      },
      {
        title: 'Obsession signs up and keeps watching',
        line: 'Through each company’s public sign-up page, like any new subscriber, and the accounts stay open for months.',
        screen: 'switch',
        chips: ['Its own inbox', 'Its own phone number', 'Says it’s AI', 'Stops before payment'],
        steps: [
          {
            title: 'Every email and text, with its platform',
            line: 'Each message is kept as it arrived, with the time and the platform that sent it, checked from the email itself.',
            example: 'Mon 07:40: 30 of the 412 accounts changed email platform in the last 7 days, and a new subscriber joined each one within 24 hours.',
          },
          {
            title: 'Silences and broken steps',
            line: 'A welcome series that stops, a verify email that never comes, a sign-up step that fails after a release.',
            example: '6 of those 30 stopped sending their welcome series after the move.',
          },
          {
            title: 'A reason to call, ready to review',
            line: 'Each signal reaches the account’s owner with the email or screenshot behind it and an opener drafted from it.',
            example: '6 openers drafted for this week, each citing the day the welcome series stopped.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'Every rep now gets the same public research in seconds.',
    sub: 'AI tools read an account’s website, news, filings and job posts for every seller in your market, from ZoomInfo’s company data to Exa’s web search. None of it shows what the account sends the people who sign up. These signals do.',
    items: [
      { title: 'A new platform', line: 'An account’s emails or texts start coming from another provider, read from the message itself, not a script tag.' },
      { title: 'Silence', line: 'A welcome, onboarding or renewal email stops, or a support reply never comes.' },
      { title: 'A broken release', line: 'A step that worked last week fails: a sign-up button, a verify email, a payment page.' },
      { title: 'A new programme', line: 'An account launches texts, loyalty, an AI chat or a new market.' },
      { title: 'A competitor’s price change', line: 'A competitor emails its customers a price rise, a retired plan or a new limit.' },
      { title: 'A new step at the door', line: 'An account adds a CAPTCHA, an identity check or a longer form to its sign-up.' },
    ],
    answer: 'Each signal arrives dated, with the email or screenshot behind it. It covers every account on your list, every day, for as long as you sell to them.',
  },

  fit: {
    heading: 'Whatever you sell, your competitors are covered.',
    line: 'If your product touches what your prospects’ customers see, your accounts and your own customers are covered too.',
    items: [
      { title: 'Email, SMS and customer messaging', line: 'Every message an account sends, and the platform behind it. You hear the week its emails start coming from a new one.' },
      { title: 'Loyalty, reviews and referrals', line: 'Loyalty, review request and referral emails, and the app that sent them. You hear when review requests stop after a move.' },
      { title: 'Checkout, payments and subscriptions', line: 'Checkout up to payment, the payment options and the cancel flow. You hear when a new payment option appears.' },
      { title: 'Help desk, chat and AI support', line: 'What support and chat tell a new customer, how fast, and who answers. You hear when a bot starts answering where a person did.' },
      { title: 'QA, testing and monitoring', line: 'Broken steps in sign-up, verification and checkout, each with a screenshot. You hear when a release breaks a sign-up button.' },
      { title: 'Onboarding and product analytics', line: 'Every screen and email from sign-up to the first week. You hear when onboarding emails stop after day 2.' },
      { title: 'Messaging APIs and identity', line: 'Login codes, password resets and receipts, and how fast each arrives. You hear when a reset email starts taking 6 minutes.' },
      { title: 'Software for banks, insurers and telecoms', line: 'Account opening up to the identity check, offers after the form and quotes from forms. You hear when a new switching offer appears after the form.' },
      { title: 'Sales tech, developer tools, security, HR and finance', line: 'Every competitor’s trial, plans, limits, prices and offers to stay. You hear when a competitor emails its customers a price rise.' },
    ],
  },

  outputs: {
    heading: 'What every role on a revenue team does with it.',
    sub: 'One example for each role, each at a different software vendor: help desk, messaging, QA, payments, payroll, loyalty and identity.',
    groups: [
      {
        label: 'Prospects',
        line: 'Win new accounts.',
        items: [
          {
            label: 'SDRs and BDRs',
            title: 'A first line nobody else has',
            line: 'Open on what the account’s customers got this week, so you can see what it does to reply rates and meetings booked.',
            example: 'At a help desk vendor: Wrenfield took 31 hours to answer a support question. Its help page promises 24.',
            link: { label: 'Cold email first line examples', to: '/blog/cold-email-first-line-examples' },
          },
          {
            label: 'SDR managers and sales leaders',
            title: 'Accounts with a reason to talk now',
            line: 'A weekly list of accounts with a live signal, so you can see it in opportunities created and pipeline.',
            example: 'At a messaging platform: 30 of 412 target accounts changed email platform this week, and 6 stopped their welcome series.',
            link: { label: 'Buying signals examples', to: '/blog/buying-signals-examples' },
          },
          {
            label: 'Account executives',
            title: 'A business case on their own screenshot',
            line: 'Build the case on the prospect’s broken step, so you can see it in win rate and deal size.',
            example: 'At a QA vendor: Larchwise’s verify email hasn’t arrived since 6 Nov, so new sign-ups stop at step 2.',
            link: { label: 'Sales business case template', to: '/blog/sales-business-case-template' },
          },
        ],
      },
      {
        label: 'Competitors',
        line: 'Win the deals you’re in.',
        items: [
          {
            label: 'Enablement and competitive intelligence',
            title: 'Battlecards that change when theirs do',
            line: 'Fed by what each competitor sends its own customers, so you can see it in win rate against each one.',
            example: 'At a payments vendor: Competitor A emails trial users 20% off on day 13. It’s on no pricing page.',
            link: { label: 'Battlecard template', to: '/blog/battlecard-template' },
          },
          {
            label: 'Product marketing and marketing',
            title: 'Launches, prices and plans, as customers get them',
            line: 'Read each launch the day it reaches customers, so you can see it in competitive win-loss.',
            example: 'At a payroll vendor: a competitor emailed its customers a 12% price rise for January on 3 Nov.',
            link: { label: 'Competitive intelligence for product marketing', to: '/blog/competitive-intelligence-for-product-marketing' },
          },
        ],
      },
      {
        label: 'Customers',
        line: 'Keep and grow them.',
        items: [
          {
            label: 'Customer success and account managers',
            title: 'Hear about a move before the renewal call',
            line: 'Each customer’s own emails, watched from outside, so you can see it in renewals and net revenue retention.',
            example: 'At a loyalty vendor: since 4 Nov, Halden Air’s loyalty emails come from another platform. It renews in February.',
            link: { label: 'Churn risk indicators', to: '/blog/churn-risk-indicators' },
          },
          {
            label: 'RevOps and AI agents',
            title: 'Fields only a customer can fill',
            line: 'Sending platform, welcome delay, reply time and broken steps arrive as CRM fields, so you can see them in conversion rates. Your AI SDR looks up the same facts over MCP, the protocol AI agents use to call tools.',
            example: 'At an identity vendor: Kittiwake Bank, new sending platform since 2 Oct, login code email in 40 seconds, AI chat answers.',
            link: { label: 'CRM data enrichment fields', to: '/blog/crm-data-enrichment-fields' },
          },
        ],
      },
    ],
  },

  proof: {
    heading: 'Battlecards from what competitors send their own customers.',
    line: 'Each competitor’s trial emails, offers and seat prices fill in as they arrive, and the card updates in your CRM for every rep.',
    screen: 'battlecard',
    steps: [
      {
        title: 'Every competitor’s trial, day by day',
        line: 'Onboarding emails, the time to a first report and the offer before the trial ends.',
        example: 'Competitor A offers 20% off on day 13, to trials still open. It’s on no pricing page.',
      },
      {
        title: 'Seat prices beside the public page',
        line: 'The price a signed-up buyer is quoted for a team, at each competitor.',
        example: 'The yearly price for 40 seats at all 3 competitors, side by side, as each quotes it to a signed-up buyer.',
      },
      {
        title: 'A talk track, then your CRM',
        line: 'Three lines drafted from the facts, then pushed to the CRM for every rep.',
        example: 'Live for 14 reps, checked again every Monday.',
      },
    ],
  },

  more: {
    recipe: {
      label: 'The recipe',
      title: 'Prospect intelligence',
      line: 'What each account on your list sends its customers, dated, before the first call.',
      cta: { label: 'Learn more', to: '/recipes/prospect-intelligence' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample data',
      line: 'One real record: every email a company sent a new customer, with the time it arrived and its screenshot.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'Tessaly, Wrenfield, Larchwise, Halden Air, Kittiwake Bank, Marrowby, Pellcast, Quorley and every figure here are made up.',

  faq: {
    heading: 'What revenue teams ask.',
    items: [
      {
        q: 'What is sales intelligence from behind the login?',
        a: 'Sales intelligence from behind the login is what your prospects, customers and competitors show only to the people who sign up. That means every email and text and the platform that sent it, their checkout and chat replies, and the steps that break. Obsession keeps it for every account and competitor you name, each fact dated with its email or screenshot.',
      },
      {
        q: 'Where does the data come from, and is it legal?',
        a: 'From real sign-ups. Obsession signs up through each company’s public sign-up page, like any new subscriber, and keeps each account open for months. It does only what any customer can, says it’s an AI when it talks to a person, stops before payment and goes up to an identity check, never past it.',
        link: { label: 'The rules every agent keeps', to: '/agents' },
      },
      {
        q: 'How is it different from Exa, ZoomInfo, BuiltWith and Klue?',
        a: 'Exa searches the web for your team and its agents in seconds. ZoomInfo holds company data, contacts and intent. BuiltWith lists the tools a website has installed. Klue and Crayon keep what competitors publish. Obsession keeps what a company sends the people who sign up, each fact dated with its email or screenshot, so most teams use it beside them.',
        link: { label: 'How Obsession compares', to: '/compare' },
      },
      {
        q: 'Does it cover mobile apps, texts and chat?',
        a: 'Yes. It signs up on the web, iOS or Android. Texts are kept beside emails, and chat and support answers are kept word for word, each dated.',
      },
      {
        q: 'Does an account know we looked it up?',
        a: 'No. Anyone can see that a company is covered, and since when, but never who asked.',
      },
      {
        q: 'How is it priced?',
        a: 'Priced per call or per company watched, never per token, and every key has a spending cap you set. Early access includes API and MCP access, lookups of every company already covered, and up to 5 companies added for you, set up with the founders.',
      },
    ],
  },

  final: {
    heading: 'Which accounts should we look up first?',
    sub: 'Early access includes API and MCP access, lookups of every company already covered, and up to 5 companies added for you, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-revenue-final',
      button: 'Request early access',
      interest: 'prospect',
    },
  },
}
