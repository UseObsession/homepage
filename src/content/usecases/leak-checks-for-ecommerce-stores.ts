import { plans } from '../prices'
import type { UseCaseStudy } from '../types'

/* Ecommerce stores (/use-cases/leak-checks-for-ecommerce-stores), rewritten 22 Nov 2026 for the toolkit position: a
   persona at the store and at each competitor signs up, leaves a basket and logs every email and text, and every one
   that never came. It runs on email, phone and the browser, through the Mystery shopping, Email and SMS tracking and QA
   on your own flows blueprints. 1 invented store carries the page (Halden Home, haldenhome.example, with Kilnworth, its
   agency, and 3 invented competitors); the only real run is Brand G (`found`). Drawn by src/pages/EcommerceStores.tsx,
   11 steps in 3 phases (4, 2 and 5), each beside its app window, so the step count stays. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession, the toolkit for AI agents, puts a persona at your store and at each competitor. A persona is an AI agent with its own inbox, UK number and browser under one name. It signs up, leaves a basket and logs every email and text as it arrives, and every reminder that never comes.'

const answer = `${sub} The Mystery shopping blueprint runs it every week and after every change, and each result lands in Slack, a Google Sheet or your webhook.`

export const study: UseCaseStudy = {
  name: 'Email testing for ecommerce stores',
  line: 'Every email your store and your competitors send after a sign-up, a basket and a checkout, dated.',

  meta: {
    path: '/use-cases/leak-checks-for-ecommerce-stores',
    title: 'Ecommerce stores: test every email after sign-up and basket',
    description:
      'A persona signs up and leaves a basket at your store and each competitor, then logs every email and text with its time, and every reminder that never came.',
    answer,
    ogImage: '/og/leak-checks-for-ecommerce-stores.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Ecommerce stores', path: '/use-cases/leak-checks-for-ecommerce-stores' },
    ],
  },

  hero: {
    headline: 'Every email a new customer gets from your store, and the ones that never come.',
    sub,
    video: { youtube: 'ixCcU3W-a2M', label: 'Watch how it works', title: 'Ecommerce stores: test every email after sign-up and basket' },
    example: { chips: [] },
    flow: [
      {
        label: 'You name',
        title: 'Halden Home and 3 competitors',
        items: ['Signs up through the pop up', 'Opts in to texts', 'Leaves a basket', 'Leaves at checkout'],
        foot: '1 persona at each store, kept for months',
      },
      {
        label: 'Obsession',
        title: 'A persona at each store',
        items: ['New customer · UK', 'Its own inbox and UK number', 'Its own browser, on a phone and a laptop', 'Free while it waits'],
        foot: 'Every email and text in the event log',
      },
      {
        label: 'Back to you',
        title: 'Each step, dated, with the email itself',
        items: ['Welcome code: Rejected', 'Basket: No reminder', 'Checkout button: Empty basket', 'Texts: Worked'],
        foot: 'Slack · Google Sheets · Clay · Webhook',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-store-leaks-hero',
      button: 'Start free',
      interest: 'mystery',
    },
    secondary: { label: 'See the blueprint', to: '/blueprints/mystery-shopper' },
  },

  /* The 11 steps, in the 3 phases the page draws them in (4, 2 and 5). Each step's app window is in the page. */
  how: {
    heading: 'From the first sign-up to every week after.',
    sub: 'How Halden Home, an invented homewares store, finds its leaks and catches the next break within the hour.',
    steps: [
      {
        title: 'The first check',
        line: 'Steps 1 to 4',
        steps: [
          {
            title: 'Name your store and your competitors',
            line: 'Type each web address and pick the customer profile and country. Each store gets its own persona.',
            example: 'Halden Home names its own store and 3 competitors, as a new customer in the UK.',
          },
          {
            title: 'Say what should arrive, and by when',
            line: 'Each step gets its own deadline, so a missing email counts as a leak once its time is up.',
            example: 'A welcome within 1 hour, a text within 1 hour of opting in, a basket reminder within 24 hours. Watched for 48 hours, on a phone and a laptop.',
          },
          {
            title: 'A persona signs up at your store',
            line: 'Its own inbox, UK mobile number and browser, used for your store only. Every step gets a screenshot, and every email is kept as it arrived.',
            example: 'Halden Home, 09:02 on Tuesday 3 Nov: signed up through the “10% off your first order” pop up, then took WELCOME10 to checkout.',
          },
          {
            title: 'Every step, with a verdict',
            line: 'A rejected code shows at once, a missing email when its deadline passes. A button that leads nowhere counts too.',
            example: '8 journeys on a phone and a laptop. 5 worked. 3 leaks: the welcome code, the basket and the checkout reminder’s button.',
          },
        ],
      },
      {
        title: 'What came, and what didn’t',
        line: 'Steps 5 and 6',
        steps: [
          {
            title: 'Every leak, with the inbox behind it',
            line: 'The timeline, the screenshots and the emails themselves, on 1 link anyone can open: you, your developer or your agency.',
            example: 'A Linen Throw (£68) left in the basket at 09:40 on 3 Nov, with the marketing box ticked. No reminder by the 24 hour deadline, and none by 48 hours.',
          },
          {
            title: 'Each leak, to whoever fixes it',
            line: 'Each leak says what a customer got, what to change and who owns it. Nothing changes in your store without your OK.',
            example: 'The pop up still offers WELCOME10, which checkout rejects: put a live code in the pop up. The basket reminder never came: turn the flow back on.',
          },
        ],
      },
      {
        title: 'Every week after',
        line: 'Steps 7 to 11',
        steps: [
          {
            title: 'A fresh sign-up every Monday',
            line: 'A new persona runs every step again each Monday, since a welcome only comes once. The first check stays in the event log, so the before is there from day 1.',
            example: 'Monday 9 Nov, after the fixes: the code works, the basket reminder comes in 1 hour and the checkout button brings the basket back.',
          },
          {
            title: 'A break caught the hour it starts',
            line: 'Connect Shopify, read only, and a theme publish runs the steps it touches again within the hour. For a new app, tell it. Each result reaches your webhook or Slack minutes after a break starts.',
            example: 'Thursday 12 Nov, 10:00: the new theme goes live. At 10:20, Add to basket does nothing on a phone. Fixed before lunch.',
          },
          {
            title: 'Your competitors, the same way',
            line: 'Each competitor gets its own persona too. Every welcome offer, code, text and basket reminder it sends is dated, including offers never on its website.',
            example: 'Tuesday 17 Nov, 07:04: Brackwater Home sends new subscribers 20% off, twice the 10% on its website. Copperleaf Living still sends no basket reminder.',
          },
          {
            title: 'The morning the sale goes live',
            line: 'Tell it when a sale goes live, and every step runs again on the sale code, the sale prices and the sale’s first email.',
            example: 'Black Friday, 08:00: the sale goes live. At 08:05, BF25 is rejected at checkout; it was set to start on Saturday. Fixed by 08:25.',
          },
          {
            title: 'One report across every store',
            line: 'Each week comes as a report with a row per store, in Slack, a Google Sheet or at your webhook. Every row links to its email in the event log.',
            example: 'Monday 30 Nov: what each of the 4 stores sent in Black Friday week, every line linked to its email.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'Your dashboards count clicks, sends and opens, not what a customer got.',
    items: [
      {
        title: 'Silence doesn’t show up',
        line: 'No report lists the email that never went. A basket flow that stopped in October looks like a quiet month.',
      },
      {
        title: 'Every change can stop an email',
        line: 'A new theme, app or edited flow can stop an email overnight. Nobody notices until conversion dips.',
      },
      {
        title: 'Checking by hand doesn’t happen',
        line: 'Signing up, leaving a basket and waiting 48 hours at 4 stores, after every change, is somebody’s whole week.',
      },
    ],
    answer:
      'Obsession keeps a persona at your store and each competitor, so every email, and every missing one, shows the day it happens.',
  },

  fit: {
    heading: 'It reads from the outside. Your tools still run the inside.',
    line: 'Nothing changes in how you run the store. A persona shows what a customer gets; you, your developer or your agency make the fix.',
    items: [
      { title: 'Your store and your competitors', line: 'Type each address, or paste a list. Each store gets its own persona.' },
      { title: 'Each step', line: 'Dated, with the email itself and its screenshots, in your event log.' },
      { title: 'Where you work', line: 'Slack, Google Sheets, Clay or a webhook.' },
    ],
  },

  outputs: {
    heading: 'Every result reaches the person who fixes it.',
    groups: [
      {
        items: [
          {
            label: 'Changes',
            title: 'Ship a change, then see it checked',
            line: 'A theme publish or an app change, checked within the hour.',
            example: 'Halden’s new theme: a phone basket break, found in 20 minutes.',
          },
          {
            label: 'Before launch',
            title: 'Check a theme before it’s live',
            line: 'Give it the preview link, and every step runs on the new theme first.',
            example: 'Halden’s Black Friday theme, checked the night before.',
          },
          {
            label: 'Competitors',
            title: 'Match a competitor’s offer, or don’t',
            line: 'Every welcome offer, code and reminder they send, by day.',
            example: 'Brackwater: 20% off for new subscribers, twice its website’s 10%.',
          },
          {
            label: 'Your agency',
            title: 'Check what your agency built',
            line: 'Every flow they run, as a customer gets it, with the emails to send them.',
            example: 'The basket reminder, back on after the first check, still arriving on 30 Nov.',
          },
        ],
      },
    ],
  },

  /* The 1 real run, right after the invented first check: Brand G, the September store check. The 4 lines are its facts,
     exact (content/sample.ts). Each line's `shop` is unused on this page. */
  found: {
    heading: 'A real store, checked the same way in September.',
    line: 'Brand G, a UK skincare store, with 4 sign-ups and baskets. A £40 basket left at 02:57 on 22 Sep got no reminder in 48 hours. Every step is in the sample data.',
    items: [
      {
        label: 'Brand G · Basket left',
        verdict: 'Silent',
        finding: 'A Body Care Gift Set (£40) left in the basket at 02:57 on 22 Sep. No reminder in 48 hours.',
        shop: 'ferula',
      },
      {
        label: 'Brand G · Checkout left',
        verdict: 'No reminder',
        finding: 'A £21 checkout left before paying at 03:11. No reminder in 48 hours.',
        shop: 'celandre',
      },
      {
        label: 'Brand G · Sign-up and browse',
        verdict: 'Arrived',
        finding: '5 messages in 48 hours, all on welcome and browse.',
        shop: 'pellam',
      },
      {
        label: 'Brand G · The event log',
        verdict: 'Kept',
        finding: '4 customer profiles, each with its own inbox, every inbox watched for 48 hours, and 15 screenshots kept.',
        shop: 'quinnet',
      },
    ],
    cta: { label: 'See sample data', to: '/sample-output' },
  },

  /* The 3 blueprints the page runs (your store, your competitors, after every change), and the 1 real run. */
  more: {
    recipe: {
      label: 'Your store',
      title: 'Mystery shopping',
      line: 'A persona signs up, fills a basket and stops before payment, then logs every email and text.',
      cta: { label: 'See the blueprint', to: '/blueprints/mystery-shopper' },
    },
    second: {
      label: 'Your competitors',
      title: 'Email and SMS tracking',
      line: 'A persona on each competitor’s list: every email and text side by side, and who discounts first.',
      cta: { label: 'See the blueprint', to: '/blueprints/email-sms-tracking' },
    },
    third: {
      label: 'After every change',
      title: 'QA on your own flows',
      line: 'A new persona runs every step after each release, with any break dated.',
      cta: { label: 'See the blueprint', to: '/blueprints/website-audit' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample data',
      line: 'Brand G, a real skincare store: a £40 basket left at 02:57 on 22 Sep, still no reminder 48 hours later.',
      cta: { label: 'See sample data', to: '/sample-output' },
    },
  },

  fine: 'Halden Home and haldenhome.example, Kilnworth, the competitors, the people, the phone number and every figure on their screens are made up. Brand G is a real store, its name hidden. Shopify and Slack are trademarks of their owners, named to show where a store runs and where results go.',

  faq: {
    heading: 'What ecommerce teams ask.',
    items: [
      {
        q: 'What does Obsession do for an ecommerce store?',
        a: answer,
        link: { label: 'See the blueprint', to: '/blueprints/mystery-shopper' },
      },
      {
        q: 'What counts as a leak?',
        a: 'Anything a customer should get and doesn’t, by a deadline you set. A welcome email that never comes, a code rejected at checkout, a basket with no reminder, a button that opens an empty basket. Mark one as intended, and it stops counting.',
      },
      {
        q: 'Which pieces does it use?',
        a: 'Email, phone and the browser, under 1 persona per store. Mystery shopping runs your store and Email and SMS tracking runs your competitors, on the same key and bill.',
        link: { label: 'Check your own sign-up and AI agents', to: '/blueprints/test-sign-up-and-agents' },
      },
      {
        q: 'Can we see our competitors’ emails too?',
        a: 'Yes. Name any store a customer can reach, and a persona signs up there as the customer profile and country you pick. It stays on the list for months and keeps every email and text.',
      },
      {
        q: 'How does it know our store changed?',
        a: 'Connect Shopify, read only, and a theme publish runs the steps it touches again within the hour. For a new app or a sale, tell it. To check a theme before it’s live, give it the preview link.',
      },
      {
        q: 'Do we have to be on Shopify?',
        a: 'No. It works on any store a customer can reach. On Shopify, connecting it lets a theme publish start a check by itself.',
      },
      {
        q: 'Will the accounts clutter our numbers?',
        a: 'No. Every account is labelled, so you can filter it out of your lists and reports.',
      },
      {
        q: 'What does it cost?',
        a: `Start on the Free plan, with no credit card. Paid plans are ${orList(fees)} a month, and a blueprint is billed on the pieces it uses.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Is it legal to sign up to a competitor’s store?',
        a: 'A persona does only what any customer can, on the pages and forms anyone can use. It says it’s an AI when it talks to a person and stops before payment unless given your own card. It never uses fake payment details and never clicks paid ads at volume.',
        link: { label: 'Is it legal to sign up to a competitor?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
      },
    ],
  },

  final: {
    heading: 'Sign up to your own store every week, as a new customer.',
    sub: 'Mystery shopping runs it on email, phone and the browser, so you can see what each fix does to conversion and repeat purchase.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-store-leaks-final',
      button: 'Start free',
      interest: 'mystery',
    },
    link: { label: 'See the blueprints', to: '/blueprints/test-sign-up-and-agents' },
  },
}
