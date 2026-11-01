import type { BlogPost } from './types'

/* Guide 2 of the 29 Oct 2026 pair (_research/seo/plan/ai-customers-search-29oct/PLAN.md and BRIEF.md, approved by Seun
   on 29 Oct, "Both"). The evergreen owner pillar. Owns "how do i test my shopify store" and its family: test my shopify
   store, how to test shopify checkout, how to make a test purchase / place a test order on shopify, how to view shopify
   store as customer, shopify store checker, how to test klaviyo flows, shopify checkout not working. Leaves "shopify
   store audit" to shopify-store-audit-checklist, "traffic but no sales" to traffic-but-no-sales, "Shopify QA testing"
   and launch checklists to ai-customers-for-shopify-plus-agencies and SimGym to
   shopify-simgym-review-ai-shoppers-vs-ai-customers, linking each with its own phrase. Readers: Shopify founders and
   operators before a launch, after a theme or app change, or when sales look wrong, and the freelancers and agencies
   they ask.
   Evidence, each opened at its source on 29 Oct 2026: Shopify Help Center (Placing a test order; Activating a payment
   gateway in test mode, for the steps and test card details; Processing a test order; Testing Shopify Payments;
   Setting up your online store, for the store preview; Adding, previewing, and buying themes, for theme previews;
   SimGym), Klaviyo Help Center (How to test and preview flow messages, updated 7 Oct 2026), and the SimGym and
   Shoptest Shopify App Store listings. Shopify's pages now call the Bogus Gateway the "Test payment gateway"; the old
   name is kept once because people still search it. 1 builder comment from r/shopify (28 Sep 2026), copied word for
   word from _research/signals/raw/reddit_search/shopify.jsonl (id rs_pcj1buj). Obsession facts from BRIEF.md only: the
   line with the uses, the definition word for word, the 1,500 line word for word, the pilot of 21 to 24 Oct 2026 as
   patterns (no tallies), the 26 Oct walk as examples (no counts, no cart prices), flexible reading times, the CAPTCHA
   line, 300, 1,000 or 5,000 a month and built for millions, credit-based plans like Claude's, the store offer in the
   site's words; the within-the-hour rerun is in the live words of use-cases/leak-checks-for-ecommerce-stores.
   larkfield.example and everything in both pictures is invented. No store, brand, agency or person we worked with is
   named. No Gartner, PilotX figure, 93% or 128 stores. No dashes. */

const TEST_ORDERS = 'https://help.shopify.com/en/manual/checkout-settings/test-orders'
const R_SHOPIFY = 'https://www.reddit.com/r/shopify/comments/1wr2w4c/18_checkouts_2_purchases/pcj1buj/'
const PROCESSING = 'https://help.shopify.com/en/manual/checkout-settings/test-orders/processing-test-order'
const SETTING_UP = 'https://help.shopify.com/en/manual/online-store/setting-up'
const THEMES = 'https://help.shopify.com/en/manual/online-store/themes/adding-themes'
const TESTING_SP = 'https://help.shopify.com/en/manual/payments/shopify-payments/testing-shopify-payments'
const TEST_MODE = 'https://help.shopify.com/en/manual/checkout-settings/test-orders/payments-test-mode'
const KLAVIYO_TEST = 'https://help.klaviyo.com/hc/en-us/articles/115002774972'
const SIMGYM_HELP = 'https://help.shopify.com/en/manual/online-store/simgym'
const SIMGYM_APP = 'https://apps.shopify.com/simgym'
const SHOPTEST_APP = 'https://apps.shopify.com/shoptest'
const SIMGYM_REVIEW = '/blog/shopify-simgym-review-ai-shoppers-vs-ai-customers'
const LEAKS = '/use-cases/leak-checks-for-ecommerce-stores'

export const post: BlogPost = {
  slug: 'how-to-test-your-shopify-store-as-a-customer',
  title: 'How to test your Shopify store as a customer: the test order, the checks, and AI customers that keep checking',
  dek: 'Place a free test order in Shopify’s test mode, then shop the store on a phone as a new customer. Run 10 checks, from the ad’s link to the reminder emails 48 hours later, each with what a pass looks like.',
  metaTitle: 'How do I test my Shopify store? As a customer, step by step',
  description:
    'How do I test my Shopify store? Place a free test order in test mode, then run 10 checks on a phone as a new customer, from the ad to the reminder emails.',
  answer:
    'To test your Shopify store, place a free test order with test card numbers in Shopify’s test mode, then shop the store on a phone as a new customer. Check each step against a pass mark, from the buttons and codes to the welcome and reminder emails over the next 48 hours. To check the sign-up, basket and checkout every week and after every change, use Obsession: its AI customers shop your store and your competitors’ as real customers and keep every email, code and page.',
  primaryKeyword: 'how do i test my shopify store',
  keywords: [
    'test my shopify store',
    'how to test shopify checkout',
    'how to make a test purchase on shopify',
    'how to place a test order on shopify',
    'how to view shopify store as customer',
    'shopify store checker',
    'how to test klaviyo flows',
    'shopify checkout not working',
  ],
  category: 'Check your own journeys',
  published: '2026-10-29',
  updated: '2026-10-29',
  readingMinutes: 17,
  order: 1,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'larkfield.example',
      who: 'A new customer on an iPhone, in a private window',
      status: { tone: 'fail', text: '2 fails, 1 late' },
      rows: [
        { time: 'Tue 19:00', text: 'Signs up through the pop up', detail: 'An address the store has never seen', tone: 'info' },
        { time: 'Tue 19:02', text: 'Welcome email with WELCOME10', detail: 'The 10% off the pop up promised', tone: 'ok' },
        { time: 'Tue 19:05', text: 'Leaves a shirt in the basket', detail: 'No checkout started', tone: 'info' },
        { time: 'Wed 05:10', text: 'Basket reminder arrives', detail: '10 hours after the basket', tone: 'late' },
        { time: 'Wed 08:30', text: 'WELCOME10 refused at checkout', detail: 'Back from the reminder’s link', tone: 'fail' },
        { time: 'Wed 08:31', text: 'Leaves the checkout', detail: 'Email typed in, no payment', tone: 'info' },
        { time: 'Fri 08:31', text: 'No checkout reminder', detail: '48 hours, spam folder checked', tone: 'fail' },
      ],
      foot: 'Invented store. Shopify’s reports would show one basket and one checkout that wasn’t finished.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Shopify founders and operators can run this test before a launch, after a theme or app change, or when sales look wrong. So can the freelancers and agencies they ask for help. It takes one evening: a free test order, then 10 checks on a phone in the order a shopper meets them, each with its pass mark.',
    },

    { kind: 'h2', id: 'why', text: 'Why test your store as a customer' },
    {
      kind: 'p',
      text: 'Shopify’s reports count sessions, carts and checkouts. They leave out what the shopper read on the way: a free shipping banner the cart ignored, a code refused at checkout, a reminder that never came. In the reports, each of those is a checkout that wasn’t finished. [Shopify’s help centre](' +
        TEST_ORDERS +
        ') asks for at least one test order during store setup and whenever payment settings change.',
    },
    {
      kind: 'quote',
      text: 'place a real test order on your phone by tapping one of your own ads, not from desktop. I build Shopify stores for a living and that one test catches more than most audits.',
      cite: 'A Shopify store builder in r/shopify, September 2026',
      href: R_SHOPIFY,
    },
    {
      kind: 'p',
      text: 'Paste the ad’s link into the phone’s browser rather than tapping the live ad, which can be billed as a click.',
    },

    { kind: 'h2', id: 'before', text: 'Before you start' },
    {
      kind: 'list',
      items: [
        '**A private window,** signed out of the Shopify admin and any customer account, so the store treats the visit as a first one.',
        '**Three new email addresses** the store has never seen, one each for the sign-up, the basket and the checkout, so one reminder can’t hide another. [Shopify suggests](' +
          PROCESSING +
          ') addresses ending in @example.com for test orders where you don’t need to read the email, and fewer than 100 test orders at a time to your own inbox.',
        '**Your phone,** plus a phone with the other operating system if possible. Apple Pay and Google Pay buttons depend on the device.',
        '**Your main market first,** with a real delivery address, then each other country you sell to. Shipping and tax change with the address.',
        '**Screenshots with the time showing,** and one line per check for pass or fail.',
      ],
    },

    { kind: 'h3', id: 'view-as-customer', text: 'How to view your Shopify store as a customer' },
    {
      kind: 'p',
      text: 'Open the store’s web address in the private window. That is what a new customer gets today. From the admin, [Shopify’s store preview](' +
        SETTING_UP +
        ') shows “your store as it would be displayed to a customer”: under Sales channels, hover over Online Store and click the eye icon. The private window is still the truer first visit, because the preview is seen signed in as an admin.',
    },
    {
      kind: 'p',
      text: 'To check a draft theme before it goes live, go to Online Store, open the actions menu beside the theme and click Preview. [The preview bar](' +
        THEMES +
        ') can switch the store to another country or language. A shared visitor preview works for anyone for 2 days. The merchant preview reaches checkout for 30 days and needs an admin sign-in.',
    },

    { kind: 'h2', id: 'test-order', text: 'How to place a test order on Shopify' },
    {
      kind: 'p',
      text: 'A test order runs a whole purchase through the store’s real checkout without charging a card. It checks payment, tax, shipping and the order email at once. Shopify names 2 main ways to place one: a payment provider in test mode, either Shopify Payments or the Test payment gateway, and a real order you cancel and refund. Testing a payment gateway needs a paid plan, and a test purchase must come to more than the equivalent of $1.',
    },

    { kind: 'h3', id: 'test-mode', text: 'Shopify Payments test mode' },
    {
      kind: 'p',
      text: 'Test mode is a Shopify Payments setting that makes checkout accept test card numbers instead of real cards. Once Shopify Payments is set up, [Shopify’s steps](' +
        TESTING_SP +
        ') are these:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'From the Shopify admin, go to **Settings**, then **Payments**.',
        'In the Shopify Payments section, click **Manage**.',
        'In the Test mode section, select **Enable test mode**.',
        'Click **Save**.',
      ],
    },
    {
      kind: 'p',
      text: 'At checkout, use the Visa test number 4242424242424242, any future expiry date, any 3 digit security code and a name of at least 2 words. The number 4000000000000002 shows the message for a declined card. To test Shop Pay, add a test card there with test_card at the start of its nickname. Subscription products need test mode, because the Test payment gateway doesn’t support them.',
    },

    { kind: 'h3', id: 'test-gateway', text: 'Shopify’s Test payment gateway (the Bogus Gateway)' },
    {
      kind: 'p',
      text: 'The Test payment gateway is a pretend card provider that any store can switch on, with or without Shopify Payments. Many older guides call it the Bogus Gateway. While it is on, every order is a test order. [Shopify’s steps](' +
        TEST_MODE +
        ') are these:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'From the Shopify admin, go to **Settings**, then **Payments**.',
        'Switch off the current card provider. For Shopify Payments, click **Manage**, then **Manage payment methods**, then **Switch to a third-party provider**, and confirm. For another provider, click **Manage**, then **Deactivate**.',
        'Open the list of providers with **See all other providers**, or **Choose a provider** where Shopify Payments isn’t offered.',
        'Select **Test payment gateway**, activate it and click **Save**.',
      ],
    },
    {
      kind: 'p',
      text: 'At checkout, enter Test payment gateway as the name on the card. Enter 1 as the card number for an approved payment, 2 for a declined one or 3 for a gateway failure. Any 3 digit security code and any future expiry date work. The gateway doesn’t support subscriptions or Shopify POS, Shopify’s in-person till.',
    },

    { kind: 'h3', id: 'real-order', text: 'A real order, cancelled and refunded' },
    {
      kind: 'p',
      text: 'Pay with a real card, then cancel and refund the order straight away. It is the one method that tests the live payment provider, and the one way to test cash on delivery or bank transfer. [Shopify warns](' +
        PROCESSING +
        ') that some provider fees aren’t refunded.',
    },

    { kind: 'h3', id: 'place', text: 'Place the order, then turn test mode off' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Build a cart as a customer would, then go to checkout.',
        'Pay with the test details for the method that’s on.',
        'Open the order in the admin and check the items, discount, shipping, tax and total.',
        'Read the order confirmation email in the new inbox.',
        'Turn test mode off, or switch the Test payment gateway off and the real provider back on.',
      ],
    },
    {
      kind: 'p',
      text: 'While a provider is in test mode, [Shopify says](' +
        TEST_MODE +
        ') customers can’t place live orders with a credit card. In Shopify Payments test mode, Apple Pay and Google Pay may still complete a checkout with no real charge. Turn test mode off as soon as the test is done. On a store already taking orders, Shopify advises that “you shouldn’t activate test mode on a store that’s in production”. There, a real order, cancelled and refunded, tests payment without pausing live card orders. Don’t fulfil a test order, because Shopify charges for any shipping label bought for it.',
    },
    {
      kind: 'p',
      text: '**A pass:** the order completes, appears in the admin with the right total, and its confirmation email arrives. Test mode is off again before the next customer arrives. Shopify also suggests repeating the order with a discount code, signed in and signed out, on a phone and a computer, and with a card that fails.',
    },

    { kind: 'h2', id: 'checks', text: 'The 10 customer checks, in the order a shopper meets them' },
    {
      kind: 'p',
      text: 'The test order proves payment works. The 10 checks cover what the shopper meets around it. The examples come from 26 October 2026, when an AI agent working for Obsession walked the client stores that Shopify agencies and freelance experts chose to show on their own websites.',
    },

    { kind: 'h3', id: 'ad-link', text: '1. The ad’s link lands on a live product' },
    {
      kind: 'p',
      text: 'Paste the link from the ad with the most spend into the phone’s browser. Then try a Google result and a link from the latest email. **A pass:** each page loads in seconds and shows the ad’s product and price, in stock in the size and colour the ad showed.',
    },

    { kind: 'h3', id: 'buttons', text: '2. On a phone, nothing covers Add to cart or Checkout' },
    {
      kind: 'p',
      text: 'Add a product and open the cart. Wait a few seconds on each page, because chat buttons and pop ups can load late. **A pass:** Add to cart and Checkout can be tapped with nothing on top, on an iPhone and an Android phone. In the walk, a help button sat over Check out on a phone.',
    },

    { kind: 'h3', id: 'promises', text: '3. The cart keeps every promise the page made' },
    {
      kind: 'p',
      text: 'Note every promise on the way in, from the banner, the pop up and the product page. Find each one in the cart and again at checkout. **A pass:** free shipping, a free gift or a subscription price on the page is still there at checkout. In the walk, one banner promised free shipping while the cart asked for a minimum spend. A subscription price fell away in the cart, and a promised free gift never appeared.',
    },

    { kind: 'h3', id: 'codes', text: '4. Every code works, and no expired offer still shows' },
    {
      kind: 'p',
      text: 'Try every code on the banner, the pop up and the announcement bar, on a full-price item and a sale item. Add the welcome code once it arrives. **A pass:** checkout accepts each code on the items it covers, and no banner shows a sale that has ended. In the walk, one store still showed a sale banner the day after the sale ended.',
    },

    { kind: 'h3', id: 'total', text: '5. Shipping, tax and the total hold no surprise' },
    {
      kind: 'p',
      text: 'Enter a real address in each country the store sells to, and read the summary before the payment step. **A pass:** shipping matches the banner and the shipping page, and any tax or duty is shown. Every line is something the shopper chose. In the walk, one store added a protection charge the shopper hadn’t chosen.',
    },

    { kind: 'h3', id: 'payment', text: '6. Every payment option shows, on both phones' },
    {
      kind: 'p',
      text: 'Go as far as the payment page on both phones. **A pass:** every method the store offers appears, wallet buttons included. [Shopify notes](' +
        TESTING_SP +
        ') that PayPal Wallet is hidden in Shopify Payments test mode, so check the list again with test mode off, stopping before payment.',
    },

    { kind: 'h3', id: 'confirmation', text: '7. The order confirmation email arrives' },
    {
      kind: 'p',
      text: '**A pass:** the confirmation reaches the new inbox within minutes, with the right items, total and address. Its link to the order’s status page opens. If it never comes, Shopify suggests checking the Order confirmation template under Notifications and reverting a customised one to the default. Check the spam folder too.',
    },

    { kind: 'h3', id: 'welcome', text: '8. The sign-up works and the welcome email arrives' },
    {
      kind: 'p',
      text: 'Sign up through the pop up with the first new address. **A pass:** the welcome email arrives within minutes, and its code matches the pop up’s offer and works at checkout. If the store also has a footer form, test it with another address, because each form can feed a different list.',
    },

    { kind: 'h3', id: 'reminders', text: '9. Basket and checkout reminders arrive within 48 hours' },
    {
      kind: 'p',
      text: 'With the second address, leave a product in the basket. With the third, start a checkout, type the email and leave before paying. Watch both inboxes, spam folders included, for 48 hours. **A pass:** a reminder for each, with the item, its price and a link back. An email counts as missing once the 48 hours have passed.',
    },
    {
      kind: 'p',
      text: 'In October 2026 Obsession ran a pilot for 4 agencies on the stores they pitch and serve. Between 21 and 24 October 2026, its AI customers signed up, browsed, left a basket and started a checkout at each store. Each of these journeys had its own inbox, watched for 48 hours. Every store in the pilot had at least one gap. Nearly half sent nothing in the 48 hours after a shopper left a checkout with their email typed in. Most first reminders came within 4 hours, the fastest after 30 minutes, and some about 10 hours later.',
    },

    { kind: 'h3', id: 'chat', text: '10. The store’s chat gives the right answer' },
    {
      kind: 'p',
      text: 'Ask the chat what a shopper asks before buying, such as how long delivery takes. **A pass:** the answer matches the delivery and returns pages, and a person takes over when the chat has no answer. [How to test a chatbot on your store](/blog/test-store-chatbot-returns-policy) covers returns, codes and handoffs.',
    },
    {
      kind: 'art',
      caption: 'The sheet after one evening on an invented store. Payment works and the confirmation arrives. The cart’s free shipping, the welcome code and the checkout reminder fail, and Shopify’s reports would show only a checkout that wasn’t finished.',
      art: {
        kind: 'report',
        title: 'larkfield.example',
        period: 'iPhone, private window, test mode on',
        cols: ['Check', 'What the phone showed', 'Result'],
        rows: [
          { name: 'Ad link', cells: ['Product page, in stock', 'Pass'], tone: 'ok' },
          { name: 'Buttons', cells: ['Nothing over Checkout', 'Pass'], tone: 'ok' },
          { name: 'Cart promise', cells: ['Free shipping dropped', 'Fail'], tone: 'fail' },
          { name: 'Codes', cells: ['WELCOME10 refused', 'Fail'], tone: 'fail' },
          { name: 'Test order', cells: ['Approved, in the admin', 'Pass'], tone: 'ok' },
          { name: 'Confirmation', cells: ['Arrived in 1 minute', 'Pass'], tone: 'ok' },
          { name: 'Reminders', cells: ['None after checkout', 'Fail'], tone: 'fail' },
        ],
        notes: ['Test mode turned off at 20:15, so live card orders go through again.'],
      },
    },

    { kind: 'h2', id: 'klaviyo', text: 'How to test Klaviyo flows as a customer' },
    {
      kind: 'p',
      text: 'Klaviyo, the email and text platform many Shopify stores use, sends flows: automated series such as the welcome emails and abandoned cart reminders. [Klaviyo’s help page](' +
        KLAVIYO_TEST +
        '), updated 7 October 2026, describes three tools inside the account:',
    },
    {
      kind: 'list',
      items: [
        '**Preview & test** shows a flow email filled in with a real event and profile, and **Send test** sends a copy to your inbox.',
        '**Flow trigger preview** checks whether example profiles would enter the flow. It doesn’t test splits or filters on single messages.',
        '**Manual mode** holds a flow message for review, so the team sees who reaches it before it sends.',
      ],
    },
    {
      kind: 'p',
      text: 'All three test the email and its rules inside Klaviyo. The customer test checks that the live trigger fires. Sign up through the real pop up, leave a basket and start a checkout with new addresses, and watch each inbox for 48 hours. **A pass:** each email arrives within the flow’s delay, with the right item, price and code. When one never comes, [why a Klaviyo flow is not sending](/blog/welcome-basket-email-not-sending) works through the causes.',
    },

    { kind: 'h2', id: 'when', text: 'When to test your Shopify store' },
    {
      kind: 'list',
      items: [
        '**Before launch,** with the test order and all 10 checks.',
        '**On the day of every theme, app or payment change.** Shopify asks for a test order whenever payment settings change, and a theme or app update can break a step that passed the day before.',
        '**Every week,** with the 10 checks, stopping before payment, because codes expire, products sell out and flows get edited.',
        '**Every day of a sale,** from the day the sale email goes out to the last day. Black Friday is 27 November 2026 and Cyber Monday is 30 November. The [Black Friday checklist](/blog/black-friday-checklist-new-customer) adds 12 tests for that week.',
      ],
    },
    {
      kind: 'p',
      text: 'When orders fall while visits hold, start with [traffic but no sales](/blog/traffic-but-no-sales), which rules out tracking and the season first. For the data, speed and search, use the [Shopify store audit checklist](/blog/shopify-store-audit-checklist). Agencies that build and launch stores will find [Shopify QA testing and the launch checklist](/blog/ai-customers-for-shopify-plus-agencies) in the guide for Plus agencies.',
    },

    { kind: 'h2', id: 'misses', text: 'What one test by hand misses' },
    {
      kind: 'p',
      text: 'A test by hand covers 1 phone, 1 set of inboxes and 1 moment. A code edited on Wednesday or an app updated on Thursday stays unseen until the next test. It also shows nothing of what competitors send their new customers: the welcome offer, the reminder timing, the Black Friday code.',
    },
    {
      kind: 'p',
      text: 'For a theme change, Shopify offers [SimGym](' +
        SIMGYM_HELP +
        '), which [its App Store listing](' +
        SIMGYM_APP +
        ') places in AI Research Preview. It sends AI shoppers, AI agents the listing says are given human-like personas (profiles of a type of shopper), through a store’s theme before it’s published. They browse, view products, add to cart and describe what they found. A theme comparison shows which version they added to cart on more often. SimGym needs a Liquid storefront and Shopify Network Intelligence turned on. Liquid is Shopify’s theme language, and stores built on Hydrogen or another custom front end aren’t supported. Shopify notes results might differ from real customers. Shopify’s pages describe browsing, carts and feedback. They don’t describe sign-ups, emails or codes. The [Shopify SimGym review](' +
        SIMGYM_REVIEW +
        ') covers what it tests, what it costs and how far to trust it.',
    },

    { kind: 'h2', id: 'ai-customers', text: 'AI customers that keep checking' },
    {
      kind: 'p',
      text: 'Obsession makes [AI customers](/blog/ai-customers) that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof. An AI customer is an AI agent that becomes a real customer of a company, with its own inbox, phone number and browser, and keeps what the company sends and shows it as evidence.',
    },
    {
      kind: 'p',
      text: 'On a Shopify store, each journey, such as a sign-up, a basket or a checkout, gets its own AI customer. It opens the page behind your ads from their links, signs up, takes the welcome code to checkout, and leaves a basket or a checkout. Every email, code and page is kept as it arrived, with its time. Your team chooses when to read the results, at 4, 12, 24 or 48 hours, or keeps the AI customers watching for as long as it wants. An email counts as missing once its window closes, 48 hours for most flows. A new AI customer runs every journey each week, and a theme publish or a flow edit reruns the journeys it touches within the hour.',
    },
    {
      kind: 'p',
      text: 'The same AI customers shop competitors’ stores, so your team sees every welcome offer, price and reminder a competitor sends its new customers. They cover email, the pages behind ads, prices and offers, journeys from basket to delivery and support, and what AI assistants say about a store. The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026. Obsession runs these checks at 300, 1,000 or 5,000 brands a month, and it’s built for millions.',
    },
    {
      kind: 'p',
      text: 'A CAPTCHA is the puzzle a site shows to stop automated visitors. Most stores in the pilot put a CAPTCHA or bot check in front of at least one step. Where a store puts a CAPTCHA in front of a step, the report names the step it couldn’t test. Some visits now come from AI agents shopping for a person, and [is your website ready for AI agents](/blog/agent-ready-website) gives 10 checks for them.',
    },

    { kind: 'h2', id: 'compared', text: 'Ways to test your Shopify store, compared', compare: true },
    {
      kind: 'p',
      text: 'A Shopify store checker can mean Shopify’s own test tools, an app that runs set journeys on a schedule, AI shoppers that try a theme, or AI customers. Obsession makes AI customers, so every other option is described from its provider’s own pages as of 29 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to test a Shopify store as a customer, from each provider’s own pages on 29 October 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'Customers meet the broken step first', 'Steady orders and no change or sale ahead'],
        [
          'By hand: the 10 checks on a phone',
          'Sees what a new customer sees, from the ad to the emails',
          'Free, plus staff time',
          '1 phone, 1 set of inboxes, 1 moment',
          'One store, before a launch or after a change',
        ],
        [
          'Shopify: [test orders](' + TEST_ORDERS + '), [store preview](' + THEMES + ')',
          'Tests payment, tax, shipping and the order email with no charge',
          'Test orders: free on a paid plan\nReal orders: provider fees',
          'Live card orders pause while test mode is on',
          'Before launch and after any payment change',
        ],
        [
          'AI shoppers: [Shopify SimGym](' + SIMGYM_APP + ')',
          'Compares a draft theme with the live one by how often AI shoppers add to cart, with written feedback',
          'Free to install, with a monthly allowance\nThen $0.75 a single-theme simulation, $1.50 a theme comparison',
          'Pages describe browsing, carts and feedback\nSign-ups, emails and codes not described',
          'Choosing between 2 themes before one goes live',
        ],
        [
          'QA monitor: [Shoptest](' + SHOPTEST_APP + ')',
          'Runs set shopper journeys on a schedule and alerts when checkout breaks or orders stop',
          '$99 to $499 a month\n30 days free',
          'Tests stop before payment, on the journeys set up\nSign-ups and emails not described',
          'An alert within hours when checkout breaks',
        ],
        [
          'Obsession (ours): [Store leak checks](' + LEAKS + '), [Mystery shopper](/recipes/mystery-shopper), [Website audit](/recipes/website-audit)',
          'AI customers sign up, use the codes and leave baskets and checkouts at the store and its competitors, keeping every email, code and page with its time',
          'Running now: first store check free\nCredit-based plans, like Claude’s',
          'Leaves the payment step to Shopify’s test mode',
          'Sign-up to checkout, every week and after every change, at the store and its competitors',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If your store needs the sign-up, basket and checkout checked every week and after every change, at your store and your competitors’, with every email, code and page kept as it arrived, use Obsession. Keep placing a test order in test mode before launch and after payment changes, because it tests the payment step itself. SimGym fits a choice between two themes. Shoptest fits an alert within hours when a set checkout path breaks. A store with steady orders and few changes can run the 10 checks by hand each week.',
    },

    { kind: 'h2', id: 'when-not', text: 'When a test by hand is enough' },
    {
      kind: 'list',
      items: [
        '**One store that rarely changes,** with steady orders, where the 10 checks pass by hand each week.',
        '**A store before its first order,** where the test order and one evening of checks cover the launch.',
        '**Orders held in Shopify** while analytics or the ad platforms show fewer. The fault is tracking, which [traffic but no sales](/blog/traffic-but-no-sales) covers.',
        '**A choice between two draft themes.** SimGym is built for that question.',
      ],
    },

    { kind: 'h2', id: 'start', text: 'Start tonight' },
    {
      kind: 'p',
      text: 'Place the test order, run the 10 checks and write pass or fail beside each, then turn test mode off. For the same checks every week, at the store and its competitors, start with the free store check.',
    },
    {
      kind: 'cta',
      text: 'Check your store free: 4 AI customers sign up, browse, leave a basket and stop at checkout, and every inbox is watched for 48 hours. What happened arrives within 4 days, with proof and the fix for each leak.',
      to: LEAKS,
      label: 'Check my store free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about testing a Shopify store' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do I place a test order on Shopify?',
          a: 'Turn on Shopify Payments test mode in Settings, then Payments, then Manage, or switch on Shopify’s Test payment gateway. Build a cart as a customer would, pay with Shopify’s test details, such as the Visa number 4242424242424242, and check the order in the admin. Then turn test mode off, because live card orders can’t go through while it’s on. On a store already taking orders, Shopify advises against test mode, so place a real order and refund it.',
        },
        {
          q: 'How do I view my Shopify store as a customer?',
          a: 'Open the store’s web address in a private window, signed out of the admin. That shows what a new customer gets today. From the admin, hover over Online Store under Sales channels and click the eye icon, or open a draft theme’s Preview to see it before it goes live.',
        },
        {
          q: 'How do I test Shopify checkout without paying?',
          a: 'Use Shopify Payments test mode or the Test payment gateway, which accept test card numbers and charge nothing. To test the cart, codes, shipping and tax with no order at all, go as far as the payment page and stop.',
        },
        {
          q: 'How do I test Klaviyo flows?',
          a: 'Inside Klaviyo, use Preview & test and Send test in each flow email’s editor, the flow trigger preview to see which profiles would enter, and Manual mode to see who reaches a message. Then test the live trigger as a customer. Sign up, leave a basket and start a checkout with new email addresses, and watch each inbox for 48 hours.',
        },
        {
          q: 'Why is my Shopify checkout not working?',
          a: 'First check that no payment provider was left in test mode, because live card orders can’t go through while it’s on. Then open checkout on an iPhone and an Android phone. Look for a chat button over Checkout, a code the checkout refuses or a missing payment method. If it started after a theme or app change, test the store with that change undone.',
        },
        {
          q: 'How often should I test my store?',
          a: 'Place a test order before launch and whenever payment settings change, as Shopify recommends. Run the 10 customer checks every week, on the day of any theme, app, discount or shipping change, and every day of a sale such as Black Friday.',
        },
        {
          q: 'Is there a free Shopify store checker?',
          a: 'Shopify’s test order is free on a paid plan, its store preview is in the admin, and the 10 checks need only a phone. Obsession’s store check is free as well: 4 AI customers sign up, browse, leave a basket and stop at checkout, and every inbox is watched for 48 hours. What happened arrives within 4 days.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the store examples',
      text: 'On 26 October 2026, an AI agent working for Obsession walked the client stores that Shopify agencies and freelance experts show on their own websites, on a phone as a signed-out new customer, as far as the first checkout page. Obsession’s pilot for 4 agencies ran between 21 and 24 October 2026 on the stores each agency sent in. No store or agency is named. Larkfield and everything in both pictures is invented.',
    },
  ],

  sources: [
    { title: 'Placing a test order', publisher: 'Shopify Help Center', url: TEST_ORDERS },
    { title: 'A Shopify store builder’s comment', publisher: 'r/shopify', url: R_SHOPIFY, date: '2026-09-28' },
    { title: 'Processing a test order', publisher: 'Shopify Help Center', url: PROCESSING },
    { title: 'Setting up your online store', publisher: 'Shopify Help Center', url: SETTING_UP },
    { title: 'Adding, previewing, and buying themes', publisher: 'Shopify Help Center', url: THEMES },
    { title: 'Testing Shopify Payments', publisher: 'Shopify Help Center', url: TESTING_SP },
    { title: 'Activating a payment gateway in test mode', publisher: 'Shopify Help Center', url: TEST_MODE },
    { title: 'How to test and preview flow messages', publisher: 'Klaviyo Help Center', url: KLAVIYO_TEST, date: '2026-10-07' },
    { title: 'SimGym', publisher: 'Shopify Help Center', url: SIMGYM_HELP },
    { title: 'Shopify SimGym', publisher: 'Shopify App Store', url: SIMGYM_APP },
    { title: 'Shoptest: Monitoring & Alerts', publisher: 'Shopify App Store', url: SHOPTEST_APP },
  ],

  related: ['shopify-simgym-review-ai-shoppers-vs-ai-customers', 'shopify-store-audit-checklist', 'traffic-but-no-sales', 'welcome-basket-email-not-sending', 'recipe:mystery-shopper'],
}
