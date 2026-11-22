import type { BlogPost } from './types'

/* Guide 1 of the store lookup set (plan and brief: Obsession folder, _research/seo/lookup-articles-14nov/, approved by
   Seun on 14 Nov 2026). Readers: the team at an ecommerce brand that runs its own email flows (founder, head of
   ecommerce, CRM or retention lead) and the agencies that do email, retention or conversion work for brands. Owns
   "abandoned cart email sequence" and its timing and count phrases (autocomplete US and UK, 14 Nov 2026); "abandoned
   cart email" as a definition stays with /glossary/abandoned-cart-email and "abandoned cart flow not triggering" with
   /blog/welcome-basket-email-not-sending, both linked in those words.
   What makes it ours: the index's timing, from the live /lookup page's totals (content/lookupSample sampleTotals, 13 Nov
   2026), printed as patterns only: after a basket 48% of stores sent no reminder, after a checkout 50%, and half the
   reminders that came arrived within about an hour (median 65 minutes after a basket, 61 after a checkout). Recounted
   on 16 Nov without the welcome series, which had put them at 45% and 49%. Never the counts behind them.
   Every platform figure was read on its own page on 14 Nov 2026: Klaviyo's abandoned cart flow guide (updated 24 Oct
   2026: 4 hour pre-built delay, 2 to 4 hours then 20 to 48 hours, 2 to 3 messages, no coupon in the first email, at
   least 1 h 15 min on slower integrations, both flows with the Started Checkout filter), Klaviyo's 2026 abandoned cart
   benchmarks (2 Oct 2026, 110,000+ customers: $6.77 and $13.70 revenue per email recipient, a common 3 message
   sequence, incentives on high-value baskets), Klaviyo's Added to Cart guide (updated 29 Oct 2026: identified shoppers),
   Shopify Help (10 minute rule, the abandoned checkouts email report, a new abandoned checkout automation's 10 hour
   wait, subscribed customers by default, separate cart and checkout automations), Shopify's own 2022 post on the
   automation (one email with a ten hour wait), Omnisend's help page (7 Jun 2026: checkout presets of 3 emails) and
   guide (19 Feb 2026: 30 to 60 minutes, 24 hours, 72 hours), Mailchimp Help (classic series of 3 at 1 hour, 1 day and 3
   days) and Baymard (updated 28 Oct 2026: 70.22% across 50 studies; reasons outside "just browsing"). The money ladder
   is labelled example inputs at one rate across three revenue bands (perception skill). Not used: the 2023 Klaviyo cart
   figures in circulation (the 2 Oct 2026 report replaces them), any claim about which timing converts best, and the
   site's 93% or any PilotX figure. British English, numerals, no dashes.
   22 Nov 2026: moved to the toolkit position. The index figures and the store lookup are out (the only run of ours shown
   is the September sample); the mystery shopping blueprint runs the test. */

const KLAVIYO_REPORT = 'https://www.klaviyo.com/blog/abandoned-cart-benchmarks'
const BAYMARD = 'https://baymard.com/lists/cart-abandonment-rate'
const KLAVIYO_CART = 'https://help.klaviyo.com/hc/en-us/articles/115002779411'
const OMNISEND_GUIDE = 'https://www.omnisend.com/blog/abandoned-cart-email/'
const MAILCHIMP_SERIES = 'https://mailchimp.com/help/create-a-classic-abandoned-cart-series/'
const SH_MIGRATE = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/migrate-abandoned-checkout'
const SH_BLOG = 'https://www.shopify.com/blog/reengagement-automations'
const OMNISEND_PRESETS = 'https://support.omnisend.com/en/articles/6659889-abandoned-cart-and-abandoned-checkout-automations'
const ATC_FLOW = 'https://help.klaviyo.com/hc/en-us/articles/35510464880027'
const SH_ABANDONED = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts'
const SH_AUTO_CREATE = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/marketing-automations/create'
const SAMPLE = 'https://useobsession.com/sample-output'

export const post: BlogPost = {
  slug: 'abandoned-cart-email-sequence',
  title: 'Abandoned cart email sequence: when online stores send each email, and how many',
  dek: 'When each abandoned cart email should go, how many to send and what each one says, from the platforms’ own help pages. Beside them, how to test your own sequence as a new customer, from the first reminder to the 48 hour mark.',
  metaTitle: 'Abandoned cart email sequence: when stores send each email',
  description:
    'Abandoned cart email sequence for online stores: when to send each reminder, how many to send, what each says, and how to test your own as a customer.',
  answer:
    'An abandoned cart email sequence is 2 or 3 reminders, sent 1 to 4 hours after the basket and again a day later, each with the item, price and a link back. Test it as a new customer at 4, 8, 12, 24 and 48 hours, because a flow can stop sending without an error. On Obsession the mystery shopping blueprint fills a basket at your store and your competitors’ every week, and keeps each reminder with the minute it arrived.',
  primaryKeyword: 'abandoned cart email sequence',
  keywords: [
    'abandoned cart email sequence',
    'when to send abandoned cart emails',
    'abandoned cart email timing',
    'how many abandoned cart emails should i send',
    'how many emails should be in an abandoned cart flow',
    'abandoned cart email series',
    'do abandoned cart emails work',
  ],
  category: 'Test sign-up and agents',
  published: '2026-11-14',
  updated: '2026-11-22',
  readingMinutes: 11,
  order: 1,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'larchwood.example · 1 basket, 48 hours',
      who: 'A new customer leaves a basket at 21:14',
      rows: [
        { time: 'Tue 21:14', text: 'Basket left: linen throw', detail: '£68, a signed-up shopper', tone: 'info' },
        { time: 'Tue 22:14', text: 'Reminder 1 arrives', detail: '1 h after: item, price, link', tone: 'ok' },
        { time: 'Wed 09:14', text: 'Read at 4, 8 and 12 h', detail: 'Nothing new since reminder 1', tone: 'info' },
        { time: 'Wed 20:14', text: 'Reminder 2 arrives', detail: '23 h after: same item, no code', tone: 'ok' },
        { time: 'Wed 21:14', text: 'Read at 24 h', detail: 'Both reminders kept as they came', tone: 'info' },
        { time: 'Thu 21:14', text: 'Window closes at 48 h', detail: '2 reminders, nothing missing', tone: 'ok' },
      ],
      foot: 'Reminders at 1 hour and 23 hours, and nothing missing at 48 hours. Larchwood is an example store.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An [abandoned cart email](/glossary/abandoned-cart-email) sequence is the 2 or 3 reminders an online store sends a shopper who left items in the basket or at checkout. Send the first 1 to 4 hours after the basket is left, with the item, its price and a link back to that basket. Send a second about a day later, and keep any discount code for the last.',
    },
    {
      kind: 'p',
      text: 'Founders, heads of ecommerce and CRM leads at ecommerce brands make 3 choices in these flows, and so do the agencies doing email, retention or conversion work for brands. The choices are when the first email goes, how many follow and when a code appears. They reach most shoppers who fill a basket, since [Baymard’s average of 50 studies](' +
        BAYMARD +
        ') puts the cart abandonment rate at 70.22% (updated 28 October 2026).',
    },
    {
      kind: 'p',
      text: 'The reminders pay for the work. [Klaviyo’s 2026 abandoned cart benchmarks](' +
        KLAVIYO_REPORT +
        ') cover more than 110,000 of its customers (2 October 2026). Abandoned cart emails earned $6.77 of revenue per recipient on average, more than any other Klaviyo flow, and $13.70 for the top 10% of brands.',
    },
    {
      kind: 'stat',
      value: '$6.77',
      label: 'average revenue per recipient from abandoned cart emails, the highest of any Klaviyo flow ($13.70 for the top 10%)',
      source: 'Klaviyo, 110,000+ customers, 2 October 2026',
      href: KLAVIYO_REPORT,
    },
    {
      kind: 'p',
      text: 'A flow can also stop without anyone noticing. In the [September sample](' +
        SAMPLE +
        '), a £40 basket left at a UK skincare store at 02:57 on 22 September 2026 got no reminder in 48 hours.',
    },

    { kind: 'h2', id: 'when-to-send', text: 'When to send abandoned cart emails' },
    {
      kind: 'p',
      text: 'Send the first abandoned cart email 1 to 4 hours after the basket is left. That window covers Klaviyo’s advice and overlaps Omnisend’s.',
    },
    {
      kind: 'p',
      text: 'Each platform starts from its own default. [Klaviyo’s guide](' +
        KLAVIYO_CART +
        ') builds its pre-made flow with a 4 hour wait and recommends the first email 2 to 4 hours after a checkout starts. [Omnisend’s guide](' +
        OMNISEND_GUIDE +
        ') says 30 to 60 minutes (19 February 2026). [Mailchimp’s classic series](' +
        MAILCHIMP_SERIES +
        ') sends its first email 1 hour after the cart is left. Shopify Messaging gives [a second abandoned checkout automation](' +
        SH_MIGRATE +
        ') a 10 hour wait, which you change in Shopify Flow.',
    },
    {
      kind: 'art',
      real: true,
      art: {
        kind: 'log',
        title: 'When the first reminder arrives',
        who: 'Time after a basket or checkout is left',
        rows: [
          { time: '30 min', text: 'Omnisend’s guide', detail: 'Its advice: 30 to 60 minutes', tone: 'info' },
          { time: '1 h', text: 'Mailchimp’s classic series', detail: 'Email 1 of its 3', tone: 'info' },
          { time: '4 h', text: 'Klaviyo’s pre-built flow', detail: 'It advises 2 to 4 hours', tone: 'info' },
          { time: '10 h', text: 'Shopify’s second automation', detail: 'Changed in Shopify Flow', tone: 'info' },
          { time: '48 h', text: 'A missing reminder counts', detail: 'Read at 4, 8, 12, 24 and 48 h', tone: 'fail' },
        ],
        foot: 'Each platform’s first reminder, from its own help page.',
      },
      caption: 'The first reminder starts anywhere from 30 minutes to 10 hours, by platform default, so wait 48 hours before calling one missing.',
    },
    {
      kind: 'p',
      text: 'Wait longer for considered purchases. Klaviyo’s guide names a mattress as a purchase that needs more thinking time than a pair of shoes. On integrations other than Shopify or BigCommerce, Klaviyo advises at least 1 hour 15 minutes if you need a short delay. Some of those integrations sync once an hour, so a shorter wait can send before the checkout reaches Klaviyo.',
    },

    { kind: 'h2', id: 'how-long-to-wait', text: 'How long to wait before a reminder counts as missing' },
    {
      kind: 'p',
      text: 'Wait 48 hours before you call an abandoned cart email missing. Check the inbox 5 times on the way: at 4, 8, 12, 24 and 48 hours. Every store runs its reminders on its own clock. A single check at 1 hour would call a store on Klaviyo’s 4 hour default silent, when its first reminder was set for 4 hours.',
    },
    {
      kind: 'p',
      text: 'The 4 hour check catches Klaviyo’s pre-built flow, and the 12 hour check catches Shopify’s 10 hour wait. The 24 and 48 hour checks catch the second email, which Mailchimp sends at 1 day and Klaviyo recommends 20 to 48 hours after the first. The [mystery shopping](/blueprints/mystery-shopper) blueprint reads its inbox at the same 5 points, keeps each email with the minute it arrived, and calls a reminder missing only after 48 hours.',
    },

    { kind: 'h2', id: 'how-many', text: 'How many abandoned cart emails should you send?' },
    {
      kind: 'p',
      text: 'Send 2 or 3. Klaviyo’s guide says 2 to 3 abandoned cart messages perform best, from research across thousands of its ecommerce customers. [Omnisend’s abandoned checkout presets](' +
        OMNISEND_PRESETS +
        ') hold 3 emails (7 June 2026), and Mailchimp’s classic series holds 3. [Shopify’s 2022 announcement](' +
        SH_BLOG +
        ') describes its abandoned checkout automation as 1 email with a 10 hour wait.',
    },
    {
      kind: 'table',
      caption: 'How many abandoned cart emails each platform starts with, and when each one goes',
      cols: ['Platform', 'Emails', 'First email', 'Later emails'],
      rows: [
        ['Klaviyo', '2 to 3 recommended', '2 to 4 h (pre-built: 4 h)', 'Second 20 to 48 h after the first'],
        ['Omnisend', '3 in its checkout presets', '30 to 60 min (its guide)', '24 h and 72 h (its guide)'],
        ['Mailchimp', '3 in its classic series', '1 h', '1 day and 3 days'],
        ['Shopify Messaging', '1 email', '10 h for a second automation', 'Workflow edited in Shopify Flow'],
      ],
    },
    {
      kind: 'p',
      text: 'The advice runs from 30 minutes to 10 hours for the first email. The bigger risk is a flow that sends nothing at all, after a basket or after a checkout, because a flow that never starts leaves no row in its report.',
    },
    {
      kind: 'p',
      text: 'A third email earns its place on considered purchases and bigger baskets. Klaviyo’s 2026 report describes a common 3 message sequence. It opens with an email at 2 to 4 hours, then a text with a discount at 24 hours. A final message at 48 hours shows other products or asks for feedback.',
    },

    { kind: 'h2', id: 'what-to-say', text: 'What should each abandoned cart email say?' },
    {
      kind: 'p',
      text: 'Each reminder names the item left behind, shows its photo and price, and links straight back to that basket, with nothing else competing for the click. Klaviyo builds this into its pre-made flow as a block with each product’s image, title, quantity and price, followed by a Return to Cart button. Its guide advises against showing any other products in the email.',
    },
    {
      kind: 'table',
      caption: 'A 3 email sequence after a basket or a checkout, and what each email says',
      cols: ['Email', 'When', 'What it says', 'Code'],
      rows: [
        ['Reminder 1', '1 to 4 h after', 'The item, its photo, its price and a link back', 'None'],
        ['Reminder 2', 'About 24 h after', 'The item, delivery cost, delivery date and returns', 'None for most baskets'],
        ['Reminder 3', '48 to 72 h after', 'A last reminder, or similar products', 'Only where the margin allows'],
      ],
    },
    {
      kind: 'p',
      text: 'Reminder 2 answers the reasons shoppers give for leaving. Leaving aside shoppers who were browsing with no plan to buy, Baymard found 40% of US online shoppers had left a cart over extra costs such as shipping, tax and fees. Slow delivery was named by 20%, and the returns policy by 13%. So reminder 2 states the delivery cost, the delivery date and the returns window for that basket.',
    },

    { kind: 'h2', id: 'discount-code', text: 'Should an abandoned cart email include a discount code?' },
    {
      kind: 'p',
      text: 'Leave the code out of reminder 1. Klaviyo’s guide says a coupon in the first email can train customers to abandon carts to get the discount. It advises holding any incentive until the final email, or offering it only to people who have never bought. Klaviyo’s 2026 report suggests keeping incentives for the biggest baskets. Set that line yourself, for example baskets over £150.',
    },
    {
      kind: 'p',
      text: 'Work out the cost per order before you add one. On a £68 linen throw, a 10% code gives away £6.80 on every order it touches, including the orders that would have come back after reminder 1 without it.',
    },
    {
      kind: 'p',
      text: 'If you add a code, apply it at checkout the way a new customer would, with the welcome code from the sign-up already in the basket, to see whether the two combine. Before matching a competitor’s offer, see [what a competitor’s first order costs after its welcome code](/blog/competitor-price-after-welcome-code).',
    },

    { kind: 'h2', id: 'basket-and-checkout', text: 'Do you need a basket reminder and a checkout reminder?' },
    {
      kind: 'p',
      text: 'Run both, as two separate flows. A basket reminder follows a shopper who added an item and left before checkout. It reaches only a shopper the store already knows, such as a subscriber who arrived from an email link. Klaviyo calls these identified shoppers, and its [Added to Cart flow](' +
        ATC_FLOW +
        ') relies on their events (updated 29 October 2026).',
    },
    {
      kind: 'p',
      text: 'A checkout reminder follows a shopper who typed an email into the checkout form and left. [Shopify counts that checkout as abandoned](' +
        SH_ABANDONED +
        ') once it has stayed incomplete for more than 10 minutes after the email was given.',
    },
    {
      kind: 'p',
      text: 'Klaviyo recommends running both flows. On the basket flow, its filter “Started Checkout zero times since starting this flow” removes a shopper who goes on to checkout, and that shopper gets the checkout reminders instead. [Shopify Messaging](' +
        SH_AUTO_CREATE +
        ') lists the two as Recover abandoned cart and Recover abandoned checkout, and both send only to customers subscribed to marketing by default.',
    },
    {
      kind: 'p',
      text: 'A store can run one of the two flows and miss the other, so test each one.',
    },

    { kind: 'h2', id: 'test-tonight', text: 'How to test your abandoned cart emails tonight' },
    {
      kind: 'p',
      text: 'Test as a new customer, with email addresses your store has never seen. Your own login won’t work, because your store already knows you.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Address A, the basket.** Sign up through your pop-up or footer form, open the store from the welcome email’s link so it knows who you are, add a product and close the tab. Write down the minute, for example 21:14 on a Tuesday.',
        '**Address B, the checkout.** Add a product, start checkout, type address B, tick the box to get marketing emails and leave before paying. Shopify’s automations send only to subscribers by default, so an unticked box can hide a working flow.',
        '**Check both inboxes at 4, 8, 12, 24 and 48 hours.** Note when each email arrived and which Gmail tab it landed in. Check that the item, its price and the link back are right.',
        '**Apply any code at checkout,** then stop before paying.',
        '**After 48 hours, mark what never came.** If nothing arrived, work through the causes of an [abandoned cart flow not triggering](/blog/welcome-basket-email-not-sending), setting by setting, in Klaviyo and Shopify Email.',
      ],
    },
    {
      kind: 'p',
      text: 'The [September store check](' +
        SAMPLE +
        ') logged one such silence: a £40 gift set left in a basket at 02:57 on Tuesday 22 September 2026, and no reminder in 48 hours. Run the test again after every change to your theme, apps or flows, and before Black Friday on Friday 27 November 2026, ahead of your code freeze. The [Black Friday checklist](/blog/black-friday-checklist-new-customer) adds 10 more tests, from the welcome code at checkout to the password reset.',
    },
    {
      kind: 'p',
      text: 'To run it every week without the evenings, the [mystery shopping](/blueprints/mystery-shopper) blueprint does the same test as a new customer. A persona, an AI agent with its own inbox, number and browser under one name, fills the basket, starts the checkout and reads its inbox at 4, 8, 12, 24 and 48 hours.',
    },
    {
      kind: 'p',
      text: 'Agencies that do email, retention or conversion work run it across every client they keep and every brand they pitch, with each brand’s OK for its own store.',
    },

    { kind: 'h2', id: 'cost', text: 'What does a silent abandoned cart flow cost?' },
    {
      kind: 'p',
      text: 'Multiply 3 numbers from one month at your own store. Take the abandoned checkouts with an email, from Orders and then Abandoned checkouts in Shopify. Take the share of reminded shoppers who ordered, from your flow report’s Placed Order rate or [Shopify’s abandoned checkouts email report](' +
        SH_ABANDONED +
        '). Take your average order value. Then halve the result, because some of those shoppers would have come back without a reminder.',
    },
    {
      kind: 'table',
      caption: 'Example inputs: what the reminders bring back in a month at the same 3% rate. Your own numbers replace them',
      cols: ['Revenue band', 'Abandoned checkouts a month', 'Average order', 'Orders back at 3%', 'Revenue a month'],
      rows: [
        ['£100M+ brand', '100,000', '£80', '3,000', '£240,000'],
        ['£20M+ brand', '25,000', '£70', '750', '£52,500'],
        ['£2M+ store', '3,000', '£60', '90', '£5,400'],
      ],
    },
    {
      kind: 'p',
      text: 'Halved, a silent month costs £120,000 at the £100M+ brand, £26,250 at the £20M+ brand and £2,700 at the £2M+ store. Run the same sum for Black Friday week, with last year’s abandoned checkouts from 27 to 30 November.',
    },

    { kind: 'h2', id: 'by-hand', text: 'Where testing by hand stops' },
    {
      kind: 'list',
      items: [
        '**Each test covers one evening.** A pass on Tuesday doesn’t cover the theme published on Thursday.',
        '**A test has no history.** Shoppers who left baskets during a silent week got nothing, and a test run now can’t show it.',
        '**A test has no comparison.** It can’t show whether a 4 hour first reminder is slow beside the stores you compete with.',
        '**The time grows with each store.** One store takes 2 evenings and a 48 hour wait. At 20 client stores, it becomes a weekly job for someone on the team.',
      ],
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, through one API and one bill. Its blueprints are ready jobs that Obsession runs for any team. For an online store, the persona keeps each email after a sign-up, a basket or a checkout with the minute it arrived, in one event log. It stays subscribed, and a fresh sign-up can run [every step again each week](/use-cases/leak-checks-for-ecommerce-stores).',
    },
    {
      kind: 'cta',
      text: 'Every email your store sends after a basket and a checkout, the minute each one arrived, read at 4, 8, 12, 24 and 48 hours, every week and beside the stores you compete with.',
      to: '/blueprints/mystery-shopper',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'stores-and-clients', text: 'How do you check this for your store, the leaders in your category and your clients?' },
    {
      kind: 'p',
      text: 'For your own online store, the mystery shopping blueprint shows when your first basket and checkout reminders arrived, what each one said and where nothing came. Pointed at the biggest stores in your category, it reads them the same way, so you see how fast their first reminder goes out, how many they send and whether they add a code.',
    },
    {
      kind: 'list',
      items: [
        '**Win the pitch:** an agency opens with the brand’s own checkout reminder that never came, dated, before the first call.',
        '**Keep the client:** a fresh sign-up every week shows the reminder still arriving, and the week it stops after a theme or app change.',
        '**Grow the account:** a checkout reminder the brand doesn’t send yet, or a second basket email the leaders send, becomes the next piece of work, with the email or screenshot behind it.',
      ],
    },
    {
      kind: 'screen',
      screen: 'brandwatch',
      workspace: 'agency',
      caption: 'One brand from a list of 300, watched for 48 hours after a sign-up: the welcome landed in 38 seconds, and the text that never came was called as a gap.',
    },
    {
      kind: 'p',
      text: 'It keeps going on its own. Each persona stays subscribed, free while it waits, and a fresh sign-up runs every step again each week. It works the same for one store or a list of 3,000. The [retention agency use case](/use-cases/leak-checks-for-retention-agencies) shows how agencies run it across every client, from the first pitch to the monthly report.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'When should you send abandoned cart emails?',
          a: 'Send the first abandoned cart email 1 to 4 hours after the basket is left, a second about 24 hours later, and an optional third at 48 to 72 hours. Klaviyo recommends 2 to 4 hours for the first.',
          link: { label: 'See the blueprint', to: '/blueprints/mystery-shopper' },
        },
        {
          q: 'What is the usual abandoned cart email timing?',
          a: 'Abandoned cart email timing starts between 30 minutes and 10 hours, depending on the platform default. Omnisend’s guide says 30 to 60 minutes, Mailchimp’s classic series sends at 1 hour, Klaviyo’s pre-built flow waits 4 hours and a second Shopify Messaging abandoned checkout automation waits 10 hours by default. Allow longer for considered purchases, and read your flow report to see which delay brings more orders back.',
        },
        {
          q: 'How many abandoned cart emails should I send?',
          a: 'Send 2 or 3. Klaviyo says 2 to 3 abandoned cart messages perform best across thousands of its ecommerce customers. Omnisend’s abandoned checkout presets and Mailchimp’s classic series hold 3 emails each.',
        },
        {
          q: 'How many emails should be in an abandoned cart flow?',
          a: 'An abandoned cart flow should hold 2 or 3 emails, and a store running both flows has 2 or 3 in each: one sequence after a basket and one after a checkout. A shopper who starts checkout should leave the basket flow, which Klaviyo handles with the filter Started Checkout zero times since starting this flow.',
        },
        {
          q: 'Do abandoned cart emails work?',
          a: 'Yes. Klaviyo’s 2026 benchmarks across more than 110,000 customers put abandoned cart emails at $6.77 of revenue per recipient, more than any other flow. The top 10% of brands reach $13.70. A flow can still stop without an error, so test it as a new customer after every change.',
        },
        {
          q: 'What is an abandoned cart email series?',
          a: 'An abandoned cart email series is another name for the sequence: 2 or 3 automated reminders after a shopper leaves a basket or a checkout. Each one names the item, its price and a link back, with any discount code kept for the last.',
        },
        {
          q: 'Should the first abandoned cart email include a discount?',
          a: 'No. Klaviyo advises against a code in the first email, because it can train shoppers to leave baskets to get one. Keep any code for the final email, for first-time buyers or for the biggest baskets.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'The platform figures come from Klaviyo’s, Shopify’s, Omnisend’s and Mailchimp’s own help pages and guides, checked on 14 November 2026. The September sample is a real run of our own, and Larchwood is an example store. Which delay brings back the most orders is a separate question, and your own flow report answers it for your store. Help pages change, so check the page before you act.',
    },
  ],

  sources: [
    { title: 'Cart abandonment rate: 50 statistics and why people abandon (2026)', publisher: 'Baymard Institute', url: BAYMARD, date: '2026-10-28' },
    { title: 'The abandoned cart benchmarks report: 2026 data to inform your strategy', publisher: 'Klaviyo', url: KLAVIYO_REPORT, date: '2026-10-02' },
    { title: 'How to create an abandoned cart flow', publisher: 'Klaviyo Help Center', url: KLAVIYO_CART, date: '2026-10-24' },
    { title: 'Abandoned cart email examples, templates and tips that work', publisher: 'Omnisend', url: OMNISEND_GUIDE, date: '2026-02-19' },
    { title: 'Create a classic abandoned cart series', publisher: 'Mailchimp Help', url: MAILCHIMP_SERIES },
    { title: 'Opt in to the new abandoned checkout automation', publisher: 'Shopify Help Center', url: SH_MIGRATE },
    { title: 'Abandoned Cart and Abandoned Checkout automations', publisher: 'Omnisend Help Center', url: OMNISEND_PRESETS, date: '2026-06-07' },
    { title: 'Capture more sales with Shopify’s reengagement automations', publisher: 'Shopify', url: SH_BLOG, date: '2022-10-17' },
    { title: 'How to create an abandoned “Added to Cart” flow for Shopify', publisher: 'Klaviyo Help Center', url: ATC_FLOW, date: '2026-10-29' },
    { title: 'Recovering abandoned checkouts', publisher: 'Shopify Help Center', url: SH_ABANDONED },
    { title: 'Creating and managing marketing automations in Shopify Messaging', publisher: 'Shopify Help Center', url: SH_AUTO_CREATE },
    { title: 'Sample output: the September store check', publisher: 'Obsession', url: SAMPLE, date: '2026-09' },
  ],

  related: [
    'welcome-basket-email-not-sending',
    'ecommerce-email-marketing-benchmarks',
    'black-friday-checklist-new-customer',
    '/glossary/abandoned-cart-email',
    'recipe:mystery-shopper',
    '/use-cases/leak-checks-for-ecommerce-stores',
  ],
}
