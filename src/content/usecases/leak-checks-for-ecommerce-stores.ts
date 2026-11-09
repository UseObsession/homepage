import type { UseCaseStudy } from '../types'

/* Leak checks for ecommerce stores (/use-cases/leak-checks-for-ecommerce-stores), rewritten 9 Nov 2026 to Home's story:
   a store's own ecommerce or retention team sees every email and text its store and its competitors send after a
   sign-up, a basket and a checkout, each dated with the email itself, and the reminders that never came. 1 invented
   store carries the page (Halden Home, haldenhome.example, with Kilnworth, its agency, and 3 invented competitors);
   the only real record is Brand G, the September store check (`found`). Drawn by src/pages/EcommerceStores.tsx, 11
   steps in 3 phases, each beside its app window. */

export const study: UseCaseStudy = {
  name: 'Leak checks for ecommerce stores',
  line: 'Every email your store and your competitors send after a sign-up, a basket and a checkout, dated.',

  meta: {
    path: '/use-cases/leak-checks-for-ecommerce-stores',
    title: 'Leak checks for ecommerce stores: every email after a basket',
    description:
      'Every email and text your store and your competitors send after a sign-up, a basket and a checkout, each dated, and every reminder that never came.',
    answer:
      'Obsession keeps every email and text a store sends after a sign-up, a basket and a checkout, for your own store and your competitors, each with the time it arrived. A reminder that never came shows as missing, with the inbox that waited for it. Look up any store by API or MCP, in Clay or Google Sheets, or get each new fact at a webhook.',
    ogImage: '/og/leak-checks-for-ecommerce-stores.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Leak checks for ecommerce stores', path: '/use-cases/leak-checks-for-ecommerce-stores' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'Every email a new customer gets from your store, and the ones that never come.',
    sub: 'The emails and texts your store and your competitors send after a sign-up, a basket and a checkout, each with the time it arrived. A broken code, a silent basket or a competitor’s new offer shows up the day it happens, not when sales dip.',
    video: { youtube: 'ixCcU3W-a2M', label: 'Watch how it works', title: 'Leak checks for ecommerce stores: every email after a basket' },
    example: { chips: [] },
    flow: [
      {
        label: 'You name',
        title: 'Halden Home and 3 competitors',
        items: ['Signs up through the pop up', 'Opts in to texts', 'Leaves a basket', 'Leaves at checkout'],
        foot: '1 account at each store, kept open',
      },
      {
        label: 'Obsession',
        title: 'A customer account at each store',
        items: ['New customer · UK', 'Its own inbox and UK mobile number', 'Its own browser, on a phone and a laptop', 'Kept open for months'],
        foot: 'Every email and text kept as it arrives',
      },
      {
        label: 'Back to you',
        title: 'Each fact, dated, with the email itself',
        items: ['Welcome code: Rejected', 'Basket: No reminder', 'Checkout button: Empty basket', 'Texts: Worked'],
        foot: 'Search · Insights · Clay · Webhook',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-store-leaks-hero',
      button: 'Request early access',
      interest: 'mystery',
    },
  },

  /* The 11 steps, in the 3 phases the page draws them in (4, 2 and 5). Each step's app window is in the page. */
  how: {
    heading: 'From the first sign-up to every week after.',
    sub: 'How Halden Home, a homewares store in this example, finds its leaks, catches the next break the hour it starts and sees what its competitors send.',
    steps: [
      {
        title: 'The first check',
        line: 'Steps 1 to 4',
        steps: [
          {
            title: 'Name your store and your competitors',
            line: 'Type each web address and pick the customer profile and country. A store already in the index returns its history at once; one that isn’t, you Watch.',
            example: 'Halden Home names its own store and 3 competitors, as a new customer in the UK.',
          },
          {
            title: 'Say what should arrive, and by when',
            line: 'Each step gets its own deadline, so a missing email counts as a leak once its time is up.',
            example: 'A welcome within 1 hour, a text within 1 hour of opting in, a basket reminder within 24 hours. Watched for 48 hours, on a phone and a laptop.',
          },
          {
            title: 'Its own account at your store',
            line: 'A real inbox, a UK mobile number and its own browser, used for your store only. Every step gets a screenshot, and every email is kept as it arrived.',
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
        title: 'The evidence',
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
            line: 'Every Monday, a fresh sign-up runs every step again, since a welcome only comes once. The first check stays on record, so the before is there from day 1.',
            example: 'Monday 9 Nov, after the fixes: the code works, the basket reminder comes in 1 hour and the checkout button brings the basket back.',
          },
          {
            title: 'A break caught the hour it starts',
            line: 'Connect Shopify, read only, and a theme publish runs the steps it touches again within the hour. For a new app, tell it. Each new fact reaches your webhook, or Slack through one, minutes after a break starts.',
            example: 'Thursday 12 Nov, 10:00: the new theme goes live. At 10:20, Add to basket does nothing on a phone. Fixed before lunch.',
          },
          {
            title: 'Your competitors, the same way',
            line: 'Each competitor you name gets its own account too: every welcome offer, code, text and basket reminder it sends, dated, including the ones never on its website.',
            example: 'Tuesday 17 Nov, 07:04: Brackwater Home sends new subscribers 20% off, twice the 10% on its website. Copperleaf Living still sends no basket reminder.',
          },
          {
            title: 'The morning the sale goes live',
            line: 'Tell it when a sale goes live, and every step runs on it: the sale code at checkout, the sale prices in the basket, the early access email.',
            example: 'Black Friday, 08:00: the sale goes live. At 08:05, BF25 is rejected at checkout; it was set to start on Saturday. Fixed by 08:25.',
          },
          {
            title: 'Search one store, or ask across all of them',
            line: 'Search shows one store’s facts, the evidence and the record. Insights answers one question across your store and your competitors, as a report with a row per store. Or get each new fact in Clay, a Google Sheet or at a webhook.',
            example: 'Monday 30 Nov, in Insights: “What did each of us send in Black Friday week?” 4 rows, every line linked to its email.',
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
        line: 'A new theme, a new app or an edited flow can stop an email overnight, and nobody notices until sales dip.',
      },
      {
        title: 'Checking by hand doesn’t happen',
        line: 'Signing up, leaving a basket and waiting 48 hours, at your store and 3 competitors, after every change, is somebody’s whole week. So it’s done once, with a spare inbox and a spreadsheet.',
      },
    ],
    answer:
      'Obsession keeps a customer account open at your store and at each competitor, so you see every email, and every one that never came, the day it happens.',
  },

  fit: {
    heading: 'It reads from the outside. Your tools still run the inside.',
    line: 'Nothing changes in how you run the store. Obsession shows what a customer gets; you, your developer or your agency make the fix.',
    items: [
      { title: 'Your store and your competitors', line: 'Type each address, or paste a list. A store already in the index returns its history at once.' },
      { title: 'Each fact', line: 'Dated, with the email itself and its screenshots, in Search or Insights.' },
      { title: 'Where you work', line: 'Clay, Google Sheets, a webhook, or your AI agent over MCP.' },
    ],
  },

  outputs: {
    heading: 'Every fact reaches the person who acts on it.',
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

  /* The 1 real record, right after the invented first check: Brand G, the September store check, and our own count.
     The 4 lines are its facts, exact (content/sample.ts). Each line's `shop` is unused on this page. */
  found: {
    heading: '1,500 sign-ups, baskets and checkouts run at real companies, and counting.',
    line: 'One of them, in full: Brand G, a real skincare store. A £40 basket left at 02:57 on 22 Sep got no reminder in 48 hours. Its whole record is the sample data.',
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
        label: 'Brand G · The record',
        verdict: 'Kept',
        finding: '4 customer profiles, each with its own inbox, every inbox watched for 48 hours, and 15 screenshots kept.',
        shop: 'quinnet',
      },
    ],
    cta: { label: 'See the sample data', to: '/sample-output' },
  },

  /* The 3 recipes the page runs (your store, your competitors, after every change), and the 1 real run. */
  more: {
    recipe: {
      label: 'Your store',
      title: 'Store sign-up and checkout',
      line: 'What a store sends a new customer after a sign-up, a basket and a checkout, every email timed.',
      cta: { label: 'Learn more', to: '/recipes/mystery-shopper' },
    },
    second: {
      label: 'Your competitors',
      title: 'Email and SMS tracking',
      line: 'Every store on your list, its emails and texts side by side: who sends most, and who discounts first.',
      cta: { label: 'Learn more', to: '/recipes/email-sms-tracking' },
    },
    third: {
      label: 'After every change',
      title: 'Website audit',
      line: 'Every step again after each release, with any break dated.',
      cta: { label: 'Learn more', to: '/recipes/website-audit' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample data',
      line: 'Brand G, a real skincare store: a £40 basket left at 02:57 on 22 Sep, still no reminder 48 hours later.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'Halden Home and haldenhome.example, Kilnworth, the competitors, the people, the phone number and every figure on their screens are made up. The 1,500 runs are our own, and Brand G is a real store, its name hidden. Shopify and Slack are trademarks of their owners, named to show where a store runs and where results go.',

  faq: {
    heading: 'What ecommerce teams ask.',
    items: [
      {
        q: 'What does Obsession do for an ecommerce store?',
        a: 'Obsession keeps every email and text a store sends after a sign-up, a basket and a checkout, for your own store and your competitors, each with the time it arrived. A reminder that never came shows as missing, with the inbox that waited for it. Look up any store by API or MCP, in Clay or Google Sheets, or get each new fact at a webhook.',
      },
      {
        q: 'What counts as a leak?',
        a: 'Anything a customer should get and doesn’t, by a deadline you set: a welcome email that never comes, a code rejected at checkout, a basket or checkout with no reminder, a button that opens an empty basket, a link to a closed store.',
      },
      {
        q: 'What if we meant it?',
        a: 'Mark it as intended, and it stops counting as a leak.',
      },
      {
        q: 'Can we see our competitors’ emails too?',
        a: 'Yes. Name any store a customer can reach. One already in the index returns its history at once. One that isn’t, you Watch, and an account opens there as the customer profile and country you pick.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real accounts. Obsession’s agents sign up, leave baskets and stop at checkout the way any customer can, from the customer profiles and countries you choose, and keep each account open for months. Every email is kept as it arrived, with its sender checked.',
      },
      {
        q: 'How does it know our store changed?',
        a: 'Connect Shopify, read only, and a theme publish runs the steps it touches again within the hour. For a new app or a sale, tell it. To check a theme before it’s live, give it the preview link.',
      },
      {
        q: 'Will the accounts clutter our numbers?',
        a: 'No. Every account is labelled, so you can filter it out of your lists and reports.',
      },
      {
        q: 'Is it legal to sign up to a competitor’s store?',
        a: 'Obsession does only what any customer can, on the pages and forms anyone can use. It says it’s an AI when it talks to a person, and it never signs in to an account that isn’t its own.',
        link: { label: 'Is it legal to sign up to a competitor?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
      },
      {
        q: 'Who sees what we look up?',
        a: 'Only you. Anyone can see that a store is covered, and since when, but never who asked.',
      },
      {
        q: 'What if a CAPTCHA or a bot wall stops it?',
        a: 'It stops too, and the check names the step it couldn’t reach. It never gets round one.',
      },
      {
        q: 'Do we have to be on Shopify?',
        a: 'No. It works on any store a customer can reach. On Shopify, connecting it lets a theme publish start a check by itself.',
      },
    ],
  },

  final: {
    heading: 'Which store should we look up first?',
    sub: 'Early access includes API and MCP access, lookups of every company already covered, and up to 5 companies added for you, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-store-leaks-final',
      button: 'Request early access',
      interest: 'mystery',
    },
    link: { label: 'See what marketing teams look up', to: '/marketing' },
  },
}
