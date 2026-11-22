import { kitPathOf } from '../kitPaths'
import { personaCostLine, plans } from '../prices'
import type { UseCaseStudy } from '../types'

/* Sales intelligence for B2B revenue teams (/use-cases/sales-intelligence-behind-the-login, the address kept), 22 Nov 2026
   rewrite for the toolkit position: a persona (its own inbox, number and browser) signs up at every prospect, customer
   and competitor a revenue team names, and every email, text, chat reply and broken step lands in their CRM, Clay, Slack
   or their own AI agent. Account watch runs it, Prospect intelligence before a first call, Lead response checks on the
   team's own forms. Part of the Watch the market kit. The hub for the 12 revenue team guides: each role's card links its
   guide. Not ecommerce (Seun, 12 Nov): the example vendor sells to banks, airlines, apps, insurers and telecoms, and "By
   what you sell" covers 9 groups of B2B software. No competitor names outside comparisons (22 Nov brief). Tessaly,
   its accounts, its competitors and every figure are invented, and `fine` says so. Prices come from prices.ts. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const planWords = `the Free plan, then ${fees.slice(0, -1).join(', ')} or ${fees[fees.length - 1]} a month`

export const study: UseCaseStudy = {
  name: 'Sales intelligence for revenue teams',
  line: 'What every prospect, customer and competitor sends the people who sign up, in your CRM, Clay or Slack.',

  meta: {
    path: '/use-cases/sales-intelligence-behind-the-login',
    title: 'Sales intelligence for B2B revenue teams, from AI agents',
    description:
      'AI agents sign up at every prospect, customer and competitor and keep each email, text, platform switch and broken step, dated, in your CRM, Clay or Slack.',
    answer:
      'Obsession gives B2B revenue teams AI agents that sign up at every prospect, customer and competitor you name. Each is a persona with its own inbox, number and browser. Every email and text and the platform that sent it, every chat reply and every broken step lands dated in your CRM, Clay, Slack or your own AI agent.',
    ogImage: '/og/sales-intelligence-behind-the-login.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Sales intelligence for revenue teams', path: '/use-cases/sales-intelligence-behind-the-login' },
    ],
  },

  hero: {
    pill: 'Watch the market kit',
    headline: 'Sales intelligence from AI agents signed up at every account.',
    sub: 'Obsession gives B2B revenue teams AI agents that sign up at every prospect, customer and competitor you name. Every email and text and the platform that sent it, every chat reply and every broken step lands dated in your CRM, Clay or Slack.',
    example: { chips: ['Tessaly, a customer messaging platform', '412 target accounts', '60 renewals', '3 competitors'] },
    flow: [
      {
        label: 'What you name',
        title: 'Accounts and competitors',
        items: ['412 target accounts from the CRM', '60 customers renewing', '3 competitors', 'Who signs up: a new customer'],
        foot: 'Any company, in any industry',
      },
      {
        label: 'Obsession',
        title: 'A persona at each company',
        items: ['Its own inbox and number', 'A browser that keeps its logins', 'Account watch runs it', 'Says it’s an AI'],
        foot: 'Free while it waits',
      },
      {
        label: 'Where it lands',
        title: 'Where your team works',
        items: ['Fields in your CRM', 'A Clay column', 'A Slack digest or a webhook', 'Your AI SDR, by API or MCP'],
        foot: 'Each fact dated, with its email or screenshot',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-revenue-hero',
      button: 'Start free',
      interest: 'account-watch',
    },
    secondary: { label: 'See the blueprint', to: '/blueprints/account-watch' },
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
            title: 'Define who signs up',
            line: 'Each persona is a customer you define, by profile and country. A new subscriber and a trial user are sent different emails and offers.',
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
        title: 'Account watch signs up and keeps watching',
        line: 'A persona joins through each company’s public sign-up page, like any new subscriber, and stays signed up for months.',
        screen: 'switch',
        chips: ['Its own inbox', 'Its own number', 'Says it’s an AI', 'Stops before payment'],
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
    sub: 'AI tools read an account’s website, news, filings and job posts for every seller in your market. None of it shows what the account sends the people who sign up. These signals do.',
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
    heading: 'Whatever you sell, a persona can follow your competitors.',
    line: 'If your product touches what your prospects’ customers see, it can follow your accounts and your own customers too.',
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
            line: 'Sending platform, welcome delay, reply time and broken steps arrive as CRM fields, so you can see them in conversion rates. Your AI SDR reads the same facts over MCP, the protocol AI agents use to call tools.',
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
      label: 'The blueprint',
      title: 'Account watch',
      line: 'A persona at every account you sell to, and each change dated on the account in your CRM.',
      cta: { label: 'See the blueprint', to: '/blueprints/account-watch' },
    },
    sample: {
      label: 'Before the first call',
      title: 'Prospect intelligence',
      line: 'What each account on your list sends its customers, dated, back in Clay, your CRM or a sheet.',
      cta: { label: 'See the blueprint', to: '/blueprints/prospect-intelligence' },
    },
  },

  fine: 'Tessaly, Wrenfield, Larchwise, Halden Air, Kittiwake Bank, Marrowby, Pellcast, Quorley and every figure here are made up.',

  faq: {
    heading: 'What revenue teams ask.',
    items: [
      {
        q: 'Where does the data come from, and is it legal?',
        a: 'From real sign-ups. A persona joins through each company’s public sign-up page, like any new subscriber, and keeps the account open for months. It does only what any customer can, says it’s an AI when it talks to a person, stops before payment and stops at any identity check.',
        link: { label: 'The rules every agent keeps', to: '/agents' },
      },
      {
        q: 'How is it different from the sales tools we already have?',
        a: 'Search tools read the public web for your team and its agents. Company databases hold company data, contacts and intent. Technology profilers list the tools a website has installed. Battlecard tools keep what competitors publish. Obsession keeps what a company sends the people who sign up, each fact dated with its email or screenshot, so most teams use it beside them.',
        link: { label: 'How Obsession compares', to: '/compare' },
      },
      {
        q: 'Does it cover mobile apps, texts and chat?',
        a: 'Yes. It signs up on the web, iOS or Android. Texts are kept beside emails, and chat and support answers are kept word for word, each dated.',
      },
      {
        q: 'Does an account know we’re watching?',
        a: 'It sees a new subscriber, which says it’s an AI if a person asks. Which accounts you follow, and why, stays in your own event log, and nobody else can read it.',
      },
      {
        q: 'Can it time our own speed to lead?',
        a: 'Yes. Lead response checks fill in your own forms as a new lead and time the first email, text and call back, so you can see it in meetings booked and pipeline.',
        link: { label: 'See the blueprint', to: '/blueprints/lead-leaks' },
      },
      {
        q: 'How is it priced?',
        a: `${personaCostLine} It costs nothing while it waits, and each blueprint is billed on the pieces it uses. Start on ${planWords}.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Put a persona at every account you sell to.',
    sub: 'Start with the accounts renewing soonest, so you can see what it does to opportunities, pipeline and win rate.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-revenue-final',
      button: 'Start free',
      interest: 'account-watch',
    },
    link: { label: 'See the Watch the market kit', to: kitPathOf.watch },
  },
}
