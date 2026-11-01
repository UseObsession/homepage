import type { BlogPost } from './types'
import { AI_CUSTOMER } from '../glossary'

/* Guide 5 of the week from 1 Nov 2026 (_research/seo/plan/week-2nov/SLATE.md and WRITER_BRIEF.md, batch 2, branch
   blog/guides-5-8; Seun's go on 1 Nov, "Start them"). The spec is _research/seo/plan/next-31oct/PLAN.md section 1, with
   the address and primary phrase the brief sets. Owns "shopify checkout not working", which moves here from
   how-to-test-your-shopify-store-as-a-customer (that guide keeps the test purchase phrases), and its family from Google
   autocomplete, US and UK, 31 Oct: not working today, not loading, button not working, page not working, broken, issues
   today, paypal checkout not working. Leaves "how do i test my shopify store" and test orders to
   how-to-test-your-shopify-store-as-a-customer, "traffic but no sales" to traffic-but-no-sales, "shopify store audit" to
   shopify-store-audit-checklist and "black friday checklist" to black-friday-checklist-new-customer, linking each with its
   own phrase. Readers: store owners and heads of ecommerce at Shopify stores, and the developers, agencies and fixers
   they call when checkout breaks.
   The October incident (_research/signals/research/urgency_calendar.json, UC-044), each statement opened on its own page
   on 1 Nov 2026: HulkApps' reply on the Shopify Community thread (post 15, 15 Oct, unedited), Logbase's Selleasy incident
   page (last updated 28 Oct: the script added from 07:47 UTC, redirects stopped at 12:22, every store cleaned by 15:58),
   Swym's security update (16 Oct) and FAQ (20 Oct), Roman Zipp's investigation (10 Oct, last updated 22 Oct),
   Shopify's developer post (20 Oct) and its changelog entry on unexpected redirects (20 Oct, updated 23 Oct). Only the 3
   apps whose developers confirmed a checkout redirect are named, and no App Store listing or removal is mentioned. The
   status page's incident list (www.shopifystatus.com/api/v2/incidents.json, 1 Nov) shows none between 24 Jun 2025 and
   29 Oct 2026. Fraud: only Swym's guidance (report the page and the time, passwords and two-factor authentication, duties
   to notify checked with advisers) and Shopify's (the details to send support). Every check stops at the payment page,
   and no paid test is claimed.
   Shopify Help Center pages, each opened on 1 Nov 2026: Troubleshooting checkout payment issues; Accelerated checkout
   buttons; Change your primary domain; Shopify's Hydrogen migration guide; Discount codes FAQ; Troubleshooting and
   testing shipping rates; Testing Shopify Payments; Troubleshooting common PayPal Express Checkout issues; Reference
   Transactions; Customizing email notification templates; Setting up customer notifications; Placing a test order;
   Extend your theme with apps; Customizing your checkout and customer accounts with apps; Troubleshooting your online
   store theme; Editing theme code. Shoptest's App Store listing and Checkly's pricing page opened the same day.
   Obsession is described in the live pages' words: the line with the uses, the definition word for word, the Website audit recipe
   and the store leak checks page, the 1,500 line word for word, 300, 1,000 or 5,000 brands a month and built for
   millions, the /agents words, the CAPTCHA line, flexible reading times, credit-based plans like Claude's, and the store
   offer in the site's words. ashcombe.example and everything in both pictures are invented, and the cost table is worked
   from the floor of each revenue band. No store, brand, agency or person we've worked with is named. No Gartner, PilotX
   figure, 93% or 128 stores. No dashes. */

const STATUS = 'https://www.shopifystatus.com/'
const HULK = 'https://community.shopify.com/t/urgent-checkout-phishing-redirect-anyone-else-affected/698208/15'
const LOGBASE = 'https://www.logbase.io/selleasy/updates/incident-20261013'
const SWYM_SEC = 'https://www.getswym.com/resources/security-response'
const SWYM_FAQ = 'https://www.getswym.com/resources/wishlist-plus-incident-faq'
const ZIPP = 'https://romanzipp.com/blog/shopify-hit-with-phishing-attack'
const SHOPIFY_DEV = 'https://shopify.dev/changelog/blog/securing-your-app-together'
const REDIRECTS = 'https://changelog.shopify.com/posts/new-protection-against-unexpected-redirects'
const PAYMENTS_TROUBLE = 'https://help.shopify.com/en/manual/checkout-settings/troubleshooting-checkout-payments'
const THEME_TROUBLE = 'https://help.shopify.com/en/manual/online-store/themes/theme-support/troubleshooting'
const ACCELERATED = 'https://help.shopify.com/en/manual/online-store/dynamic-checkout'
const PRIMARY_DOMAIN = 'https://help.shopify.com/en/manual/domains/domain-type/change-primary-domain'
const HYDROGEN = 'https://shopify.dev/docs/storefronts/headless/hydrogen/migrate'
const DISCOUNTS_FAQ = 'https://help.shopify.com/en/manual/discounts/discounts-faq'
const SHIPPING_TROUBLE = 'https://help.shopify.com/en/manual/fulfillment/setup/shipping-rates/troubleshooting'
const TESTING_SP = 'https://help.shopify.com/en/manual/payments/shopify-payments/testing-shopify-payments'
const PAYPAL_ISSUES = 'https://help.shopify.com/en/manual/payments/paypal/common-issues'
const PAYPAL_REF = 'https://help.shopify.com/en/manual/payments/paypal/reference-transactions'
const CUSTOMER_NOTIFY = 'https://help.shopify.com/en/manual/fulfillment/setup/notifications/customer-notifications'
const NOTIFY_TEMPLATE = 'https://help.shopify.com/en/manual/fulfillment/setup/notifications/customizing-notification-template'
const TEST_ORDERS = 'https://help.shopify.com/en/manual/checkout-settings/test-orders'
const APP_EMBEDS = 'https://help.shopify.com/en/manual/online-store/themes/customizing-themes/apps'
const CHECKOUT_APPS = 'https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/checkout-apps'
const EDIT_CODE = 'https://help.shopify.com/en/manual/online-store/themes/customizing-themes/edit-code/edit-theme-code'
const SHOPTEST_APP = 'https://apps.shopify.com/shoptest'
const CHECKLY = 'https://www.checklyhq.com/pricing/'
const LEAKS = '/use-cases/leak-checks-for-ecommerce-stores'

export const post: BlogPost = {
  slug: 'shopify-checkout-not-working',
  title: 'Shopify checkout not working? How store owners find what broke it, as a customer',
  dek: 'Check Shopify’s status page first, then shop the store on a phone as a new customer and run 6 checks, each stopping before payment. In October 2026, code delivered through 3 apps sent some shoppers who pressed Checkout to a page on another website, and Shopify’s status page showed no incident.',
  metaTitle: 'Shopify checkout not working? Find what broke it as a buyer',
  description:
    'Shopify checkout not working? Check Shopify’s status page, then run 6 checks on a phone as a new customer, find what changed last and who fixes it.',
  answer:
    'When Shopify checkout is not working, check Shopify’s status page first, and if Checkout shows as operational, look at the store itself. Shop it on a phone as a new customer in a fresh private window, check that checkout stays on the store’s own web address, then look at what changed last. To have a new customer go through checkout after every change, use Obsession: its AI customers shop your store and your competitors’ and keep every page, code and email as it arrived.',
  primaryKeyword: 'shopify checkout not working',
  keywords: [
    'shopify checkout not working today',
    'shopify checkout not loading',
    'shopify checkout button not working',
    'shopify checkout page not working',
    'shopify checkout broken',
    'shopify checkout issues today',
    'shopify paypal checkout not working',
  ],
  category: 'Check your own journeys',
  published: '2026-11-01',
  updated: '2026-11-01',
  readingMinutes: 15,
  order: 1,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'flow',
      title: 'ashcombe.example · checkout on a phone',
      steps: [
        { label: 'Cart', detail: 'Code applied, delivery shown', tone: 'ok' },
        { label: 'Checkout', detail: 'Opens on pay-ashcombe.example', tone: 'fail' },
        { label: 'Payment', detail: 'Ends on the real checkout', tone: 'ok' },
        { label: 'Order email', detail: 'Arrives as normal', tone: 'ok' },
      ],
      foot: 'The order arrives and Shopify’s reports look normal, so only the shopper sees checkout open on another website first. Ashcombe and its web addresses are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Store owners and heads of ecommerce can run these checks the moment orders drop or a shopper reports a problem, and so can the Shopify developers and agencies they call. The first 5 checks are steps a shopper takes on a phone, and the 6th is a test email sent from the Shopify admin. Each comes with what a pass looks like, and none goes past the payment page.',
    },
    {
      kind: 'p',
      text: 'A Shopify checkout breaks in one of two ways. It can fail where shoppers see it: a button that does nothing, a refused code, no shipping rate or a missing payment method. Or it can look normal while it sends shoppers somewhere else, which is what code delivered through 3 Shopify apps did in October 2026.',
    },

    { kind: 'h2', id: 'october', text: 'What happened to Shopify checkouts in October 2026' },
    {
      kind: 'p',
      text: 'In October 2026, the developers of 3 Shopify apps confirmed that an attacker had added code to stores through their app. The code sent some shoppers who pressed Checkout to a page on another website. Each developer set out what happened on its own page.',
    },
    {
      kind: 'table',
      caption: 'The 3 apps whose developers confirmed checkout redirects in October 2026, each from its developer’s own statement. Times in UTC',
      cols: ['App', 'Statement', 'When', 'What shoppers met'],
      rows: [
        ['Hulk Product Options', '[HulkApps](' + HULK + '), 15 October', '10 October', 'Some checkouts sent to a fake checkout page'],
        ['Selleasy', '[Logbase](' + LOGBASE + '), updated 28 October', '13 October, 07:47 to 12:22', 'Some shoppers sent to an outside website at checkout'],
        ['Swym Wishlist Plus', '[Swym](' + SWYM_SEC + '), 16 October', '14 October, 10:06 to 16:32', 'A page made to look like checkout, to collect card details'],
      ],
    },
    {
      kind: 'p',
      text: 'HulkApps said Shopify turned off the app’s theme extension for a time, which stopped the redirects, and that it found no sign of any other HulkApps app sending checkouts anywhere. Logbase said merchants’ Shopify accounts and log-in details weren’t used in the attack, and that Selleasy is fully working again. Swym paused Wishlist Plus for every merchant as a precaution, and [its FAQ](' +
        SWYM_FAQ +
        ') of 20 October says access is coming back in phases.',
    },
    {
      kind: 'p',
      text: '[Roman Zipp](' +
        ZIPP +
        '), who met one of these pages while shopping on 10 October, published his investigation the same day. He found that the lookalike page passed the shopper on to the store’s real checkout once the card details were typed in. The code he examined ran once per browser session, so a second try in the same window would look normal.',
    },
    {
      kind: 'p',
      text: 'On 20 October, [Shopify asked every app developer](' +
        SHOPIFY_DEV +
        ') to act that week, saying attacks on apps are rising as AI gets better at finding weak spots. The same day, Shopify’s online stores began asking customers to confirm before sending them to another website. [Since 23 October](' +
        REDIRECTS +
        '), they block websites Shopify has identified as malicious and ask for confirmation only on suspicious ones.',
    },
    {
      kind: 'p',
      text: '[Shopify’s status page](' +
        STATUS +
        ') listed no incident between 10 and 20 October. The redirects came from app code on the stores, and they showed only to a shopper who pressed Checkout.',
    },
    { kind: 'h3', id: 'shopper-reports', text: 'If a shopper reports a strange checkout' },
    {
      kind: 'list',
      items: [
        '**Note the page and the time** the shopper saw, which Swym’s FAQ asks merchants to send with any report. Pass them to the developer of each app that runs on the storefront and to Shopify Support.',
        '**Passwords.** Swym’s FAQ calls changing passwords good practice and recommends turning on two-factor authentication.',
        '**Duties to tell people.** Swym’s security update reminds merchants that they may have to notify shoppers or regulators. It names breach notification laws, data protection laws such as GDPR and payment processor agreements, and asks merchants to check with their advisers.',
      ],
    },

    { kind: 'h2', id: 'status', text: 'Check whether Shopify checkout is down today' },
    {
      kind: 'p',
      text: 'Shopify checkout issues today show on [Shopify’s status page](' +
        STATUS +
        '), at status.shopify.com, which lists Checkout beside the admin, the storefront and point of sale. If Checkout shows an incident, the fault is Shopify’s, and the page posts updates until it is resolved.',
    },
    {
      kind: 'p',
      text: 'If Checkout shows Operational, look at the store itself. Shopify notes on the page that some issues affecting a small share of stores may not appear there, and it links to My Shopify Status, a log-in view of a single store. A store that takes PayPal or another provider should check that provider’s status too, as [Shopify’s page on checkout payment problems](' +
        PAYMENTS_TROUBLE +
        ') advises.',
    },

    { kind: 'h2', id: 'checks', text: 'The 6 checks, from the cart to the order email' },
    {
      kind: 'p',
      text: 'Use a phone, plus a second phone with the other operating system if possible, because wallet buttons such as Apple Pay depend on the device. Open a new private window for every run, signed out of the admin. A private window is also the first step on [Shopify’s theme troubleshooting page](' +
        THEME_TROUBLE +
        '). Use a real address in the store’s main market, screenshot each step with the time showing, and stop at the payment page.',
    },

    { kind: 'h3', id: 'opens', text: '1. Checkout opens from the cart and from Buy it now' },
    {
      kind: 'p',
      text: 'Add an in-stock product, open the cart and tap Checkout. Then go back to the product page and, where the store shows one, tap Buy it now, which [Shopify says](' +
        ACCELERATED +
        ') skips the cart and goes straight to checkout. **A pass:** both open checkout within seconds, and nothing such as a chat button or a pop-up sits over either button. Branded buttons such as Shop Pay or PayPal depend on the payment methods switched on and on the shopper’s device, browser and payment history. A missing one on a single phone can be normal.',
    },

    { kind: 'h3', id: 'address', text: '2. Checkout stays on the store’s own web address' },
    {
      kind: 'p',
      text: 'Read the address bar the moment checkout opens. A store’s [primary domain](' +
        PRIMARY_DOMAIN +
        ') is the web address Shopify shows in the address bar for its online store, and checkout runs on the same address. A store with a custom storefront built on Hydrogen, Shopify’s framework for building one, runs checkout on a subdomain such as checkout.example.com, as [Shopify’s Hydrogen guide](' +
        HYDROGEN +
        ') sets out.',
    },
    {
      kind: 'p',
      text: '**A pass:** the address bar shows the store’s own domain from the cart to the payment page, or the page of a payment provider the shopper picked, such as PayPal’s. A block or a confirmation message from Shopify after tapping Checkout means something on the page is sending shoppers off the store. Stop there and go to what changed last. Most outside websites open with no message at all, so the address bar is the check to rely on.',
    },

    { kind: 'h3', id: 'codes', text: '3. Every code applies' },
    {
      kind: 'p',
      text: 'Try each code on the banner, the pop-up and the latest email, on a full-price item and a sale item. **A pass:** each code applies to the items it covers. [Shopify’s discount codes FAQ](' +
        DISCOUNTS_FAQ +
        ') explains the messages a shopper meets. “Enter a valid discount code” means the code doesn’t exist or isn’t active. A message that the code isn’t valid for the items in the cart means it doesn’t cover those products. The same page notes that a third-party app that changes pricing or checkout can hide the code field.',
    },

    { kind: 'h3', id: 'shipping', text: '4. Shipping rates show for every market' },
    {
      kind: 'p',
      text: 'Enter a real address in each country the store sells to and read the delivery options. **A pass:** at least one rate shows for each address and matches the shipping page. When none matches, the shopper sees “Shipping not available” and a note that the order can’t be shipped to that address. [Shopify’s shipping troubleshooting page](' +
        SHIPPING_TROUBLE +
        ') traces this to shipping zones, product profiles, weights, the physical product setting and locations. It also warns that an abandoned checkout keeps the rates from when it was created, so test with a new one.',
    },

    { kind: 'h3', id: 'payment', text: '5. Every payment method loads, on both phones' },
    {
      kind: 'p',
      text: 'Go as far as the payment page and stop. **A pass:** every method switched on in Settings > Payments appears, with Apple Pay on the iPhone and Google Pay on the Android phone where the store offers them. When no one can pay, Shopify’s page on checkout payment problems starts in Settings > Payments: switch off a test mode left on, and check the provider’s account for restrictions. While test mode is on, [no real payments are captured](' +
        TESTING_SP +
        ').',
    },
    {
      kind: 'p',
      text: 'For a Shopify PayPal checkout not working, Shopify’s pages give 4 causes. PayPal Wallet doesn’t show at checkout while Shopify Payments test mode is on. [PayPal won’t activate](' +
        PAYPAL_ISSUES +
        ') unless the store’s country matches the PayPal account’s, and it needs a professional business account. [On an order with a subscription](' +
        PAYPAL_REF +
        '), Shopify hides PayPal unless PayPal has approved the store for repeat billing, which PayPal calls reference transactions.',
    },

    { kind: 'h3', id: 'email', text: '6. The order confirmation email still sends' },
    {
      kind: 'p',
      text: 'This check needs no order. In Settings > Notifications, click Customer notifications, open Order confirmation and click Edit code. [Shopify’s steps](' +
        NOTIFY_TEMPLATE +
        ') are Preview, then Send test email, which goes to the address used to log in to the admin. **A pass:** the test email arrives, with the store’s details and links as they should look. A customised template that fails can go back to Shopify’s version with Revert to, then Default, then Save.',
    },
    {
      kind: 'p',
      text: 'When customers say the email never came, [Shopify’s customer notifications page](' +
        CUSTOMER_NOTIFY +
        ') says to check the spam or junk folder, then try an address with another email provider. The payment step itself needs a test order with Shopify’s test card numbers, which [how do I test my Shopify store](/blog/how-to-test-your-shopify-store-as-a-customer) sets out step by step. [Shopify asks for one](' +
        TEST_ORDERS +
        ') during store setup and whenever payment settings change.',
    },
    {
      kind: 'art',
      caption: 'One run of the 6 checks on an invented store, the evening after an app update. The welcome code and PayPal fail, and both trace to settings the store’s own team can change.',
      art: {
        kind: 'report',
        title: 'ashcombe.example · after an app update',
        period: 'iPhone, a new private window, a UK address',
        cols: ['Check', 'What the phone showed', 'Result'],
        rows: [
          { name: 'Opens', cells: ['Cart and Buy it now open checkout', 'Pass'], tone: 'ok' },
          { name: 'Web address', cells: ['ashcombe.example throughout', 'Pass'], tone: 'ok' },
          { name: 'Codes', cells: ['WELCOME10 not valid on sale items', 'Fail'], tone: 'fail' },
          { name: 'Shipping', cells: ['2 UK rates shown', 'Pass'], tone: 'ok' },
          { name: 'Payment', cells: ['No PayPal: test mode left on', 'Fail'], tone: 'fail' },
          { name: 'Order email', cells: ['Test email arrived', 'Pass'], tone: 'ok' },
        ],
        notes: ['PayPal showed again once test mode was off in Settings > Payments.'],
      },
    },

    { kind: 'h2', id: 'what-changed', text: 'What changed last' },
    {
      kind: 'p',
      text: 'Note when the problem started, then list every change in the days before it. Switch off or undo each one, newest first, and test again in a new private window after each.',
    },
    {
      kind: 'list',
      items: [
        '**Apps.** [Shopify’s page on app embeds](' +
          APP_EMBEDS +
          ') notes that some embeds add code to a store without showing shoppers anything. Turn off the newest app’s embed in the theme editor’s App embeds panel, save and test again. Shopify’s theme troubleshooting page suggests uninstalling a newly installed or updated app for a while, and contacting its developer if the problem goes away.',
        '**Checkout apps.** In Settings > Checkout, the checkout editor’s Apps panel lists every app block in checkout. [An app allowed to block checkout](' +
          CHECKOUT_APPS +
          ') rejects an order when the shopper leaves its required field, such as a checkbox, incomplete.',
        '**The theme.** Add a free Shopify theme and preview the store with it, as Shopify’s theme troubleshooting page suggests. If the break disappears, it sits in the current theme. The [code editor’s Timeline](' +
          EDIT_CODE +
          ') restores an earlier version of a file, replacing the whole file, so copy its current contents first.',
        '**Theme files an app changed.** Swym’s FAQ asks merchants to look in the code editor for theme file edits made by its app. It also asks them to search the theme for the web addresses used in the October attacks, which it lists.',
        '**Discounts.** A code past its end date stops applying, and so does one that isn’t set to combine with another discount, as Shopify’s discount codes FAQ explains.',
        '**Markets.** Shopify’s page on checkout payment problems links wrong prices or currency to market settings. Check each market’s currency, and that the shopper’s country sits in the market expected.',
        '**Payments.** Any change in Settings > Payments, test mode included.',
      ],
    },

    { kind: 'h2', id: 'owners', text: 'Who owns each fix' },
    {
      kind: 'table',
      caption: 'Who fixes a broken Shopify checkout, by cause, and where each fix starts',
      cols: ['What broke', 'Who fixes it', 'Where to start'],
      rows: [
        ['Shopify’s checkout, for every store', 'Shopify', 'The status page’s updates'],
        ['Card payments through Shopify Payments', 'Shopify Support', 'Settings > Payments'],
        ['One provider, such as PayPal', 'That provider', 'Its status page or support'],
        ['An app’s embed or checkout block', 'The app’s developer', 'App embeds, or Settings > Checkout'],
        ['The theme or its code', 'The theme’s developer or agency', 'The code editor’s Timeline'],
        ['Codes, shipping, markets or emails', 'The store’s own team', 'Discounts, Shipping, Markets, Notifications'],
        ['Checkout sent to another website', 'The app’s developer and Shopify Support', 'App embeds and theme file edits'],
      ],
    },
    {
      kind: 'p',
      text: 'Send each owner the error, the time with its time zone, the browser and device, and a screenshot. Shopify’s page on checkout payment problems asks for the same details, with the steps already tried, before contacting support. When the fix is live, run the same check again, so the break and the fix sit side by side.',
    },

    { kind: 'h2', id: 'every-change', text: 'Check again after every change' },
    {
      kind: 'p',
      text: 'A single clean run doesn’t clear the checkout for good. HulkApps said the October redirect didn’t succeed on every visit and was blocked by some browsers, and Zipp found it ran once per browser session. Run the 6 checks again in a new private window after every change to the store’s apps, theme, discounts, shipping or payments. During a sale, run them every day. Black Friday falls on 27 November 2026 and Cyber Monday on 30 November.',
    },
    {
      kind: 'p',
      text: 'When checkout fails for everyone, every online order stops until it is fixed. Yearly online sales divided by 365 give an average day, and divided by 8,760 an average hour. The year’s busiest days carry far more than the average.',
    },
    {
      kind: 'table',
      caption: 'Online sales that pass through checkout in an average day and hour, worked from the floor of each band’s yearly online sales. Divide the store’s own yearly figure the same way',
      cols: ['Size', 'An average day', 'An average hour'],
      rows: [
        ['£100M+ brand', '£274,000', '£11,400'],
        ['£20M+ brand', '£55,000', '£2,300'],
        ['£2M+ store', '£5,500', '£230'],
      ],
    },
    {
      kind: 'p',
      text: 'For sale week, the [Black Friday checklist](/blog/black-friday-checklist-new-customer) adds 12 tests as a new customer, from the pop-up to the reminder emails.',
    },

    { kind: 'h2', id: 'ai-customers', text: 'AI customers that go through checkout after every change' },
    {
      kind: 'p',
      text: 'Obsession makes [AI customers](/blog/ai-customers) that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof. **' +
        AI_CUSTOMER.definition +
        '**',
    },
    {
      kind: 'p',
      text: 'On a Shopify store, [Website audit](/recipes/website-audit) runs after every release: a fresh AI customer goes through the store on a phone and a desktop. It signs up, opens every email and link, tries each code at checkout and stops before payment. Every break comes back with its screenshot and a drafted fix, then a fresh run once the fix ships. [Store leak checks](' +
        LEAKS +
        ') give every journey, such as a sign-up or a checkout, a new AI customer each week. With Shopify and the store’s email tool connected, read only, a theme publish or an edit to an email flow reruns the checks it touches within the hour.',
    },
    {
      kind: 'p',
      text: 'The same AI customers shop competitors’ stores, so the store’s team sees every welcome offer, price and reminder a competitor sends its new customers. The team reads the results at 4, 12, 24 or 48 hours, or keeps the AI customers watching for as long as it wants. A CAPTCHA is the puzzle a site shows to stop automated visitors. Where a store puts a CAPTCHA or a bot check in front of a step, the report names the step it couldn’t test.',
    },
    {
      kind: 'p',
      text: 'Every AI customer says it’s an AI when it talks to a person, never uses fake payment details and never gets round a CAPTCHA or a bot block. It keeps every email and page exactly as it arrived, as the [agents page](/agents) sets out. The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026. Obsession runs these checks at 300, 1,000 or 5,000 brands a month, and it’s built for millions.',
    },

    { kind: 'h2', id: 'compared', text: 'Ways to catch a broken Shopify checkout, compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 1 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to catch a broken Shopify checkout, from each provider’s own pages on 1 November 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'Customers meet the break first', 'A store with no change ahead'],
        [
          'By hand: the 6 checks on a phone',
          'Sees checkout as a shopper does, address bar included',
          'Free, plus staff time',
          '1 phone, 1 window, 1 moment',
          'One store after each change',
        ],
        [
          'Shopify: [status page](' + STATUS + '), [test orders](' + TEST_ORDERS + ')',
          'Rules out an outage, and tests the payment step',
          'Status page: free\nTest orders: no charge in test mode',
          'Status page: Shopify’s own systems\nTest mode: no real payments while on',
          'An outage, or a payment settings change',
        ],
        [
          'Scripted checkout monitors: [Shoptest](' + SHOPTEST_APP + '), [Checkly](' + CHECKLY + ')',
          'Set shopper paths on a schedule, with alerts',
          'Shoptest: $99, $249 or $499 a month, 30 days free\nCheckly: Hobby free, Starter $24 a month billed yearly',
          'Runs only the paths set up for it\nShoptest: stops before payment',
          'An alert within hours on a set path',
        ],
        [
          'Obsession (ours): [Website audit](/recipes/website-audit), [Mystery shopper](/recipes/mystery-shopper), [Store leak checks](' + LEAKS + ')',
          'A fresh AI customer signs up, tries each code at checkout and stops before payment, at the store and its competitors',
          'Running now: Check my store free\nCredit-based plans, like Claude’s',
          'Stops before payment, so the payment step needs a test order',
          'A new customer through checkout after every change, each step screenshotted',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If your store needs a new customer to go through checkout after every app, theme or discount change, with every step kept as a screenshot, use Obsession. Shopify’s status page settles whether an outage is Shopify’s, and a test order tests the payment step itself. Shoptest or Checkly fit an alert at any hour on a checkout path that rarely changes. A store with steady orders and few changes can run the 6 checks by hand after each change.',
    },

    { kind: 'h2', id: 'start', text: 'Start tonight' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Open Shopify’s status page and read the Checkout line.',
        'Run the 6 checks on a phone in a new private window, and write pass or fail beside each.',
        'List every change in the days before the problem began, then switch off or undo the newest first, testing after each.',
        'Send each break to its owner with the screenshot and the time, then run the same check once the fix is live.',
      ],
    },
    {
      kind: 'p',
      text: 'When orders fall while visits hold and checkout passes all 6 checks, [traffic but no sales](/blog/traffic-but-no-sales) works back from the ad to the payment page. For the data, speed and search behind a store, use the [Shopify store audit](/blog/shopify-store-audit-checklist) checklist.',
    },
    {
      kind: 'cta',
      text: 'Check your store free: 4 AI customers sign up, browse, leave a basket and stop at checkout, and every inbox is watched for 48 hours. What happened arrives within 4 days, with proof and the fix for each leak.',
      to: LEAKS,
      label: 'Check my store free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about Shopify checkout not working' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is Shopify checkout not working today, or is it my store?',
          a: 'Open Shopify’s status page, at status.shopify.com, and read the Checkout line. An incident there means the fault is Shopify’s, and the page posts updates until it is fixed. If Checkout shows Operational, run the 6 checks on a phone as a new customer, starting with whatever changed last on the store.',
        },
        {
          q: 'Why is my Shopify checkout button not working?',
          a: 'On a phone, check that nothing such as a chat button or a pop-up sits over the button, then test in a new private window. If the button still does nothing, turn off the most recently added or updated app embeds and test again, then preview a free Shopify theme. A break that disappears with an app’s embed off goes to that app’s developer, and one that disappears with another theme goes to the theme’s developer.',
        },
        {
          q: 'Why is my Shopify checkout not loading?',
          a: 'If it fails for one shopper, Shopify’s page on checkout payment problems suggests a private window with browser extensions turned off. Ad blockers and privacy extensions can send a shopper back to the payment page. If it fails for everyone, check the status page, then Settings > Payments for a test mode left on and any restriction on the provider’s account. When a Shopify checkout page is not working for anyone while Shopify shows as operational, look at the store’s own apps, theme and settings.',
        },
        {
          q: 'Why is Shopify PayPal checkout not working?',
          a: 'Shopify’s pages give 4 causes. PayPal Wallet doesn’t show at checkout while Shopify Payments test mode is on. PayPal won’t activate unless the store’s country matches the PayPal account’s, and it needs a professional business account. On orders with a subscription, Shopify hides PayPal unless PayPal has approved the store for repeat billing. If none applies, check the PayPal integration in Settings > Payments and contact PayPal.',
        },
        {
          q: 'Why does my Shopify checkout send customers to another website?',
          a: 'If it isn’t a payment provider the shopper picked, such as PayPal, something on the store is redirecting them. In October 2026, the developers of Hulk Product Options, Selleasy and Swym Wishlist Plus confirmed that code delivered through their apps sent some shoppers to another website at checkout. Turn off app embeds, check theme file edits in the code editor’s Timeline, and send the page and the time to the app’s developer and to Shopify Support.',
        },
        {
          q: 'Who do I contact when my Shopify checkout is broken?',
          a: 'Contact Shopify Support when the status page shows an incident or Shopify Payments has a problem, and the payment provider when only its method fails, such as PayPal. Contact an app’s developer when turning off its embed or checkout block clears the break, and the theme’s developer when another theme does. Send each one the error, the time, the device and a screenshot.',
        },
        {
          q: 'How often should I check my Shopify checkout?',
          a: 'Run the 6 checks in a new private window after every change to the store’s apps, theme, discounts, shipping or payments. Run them every day of a sale, from the day the sale email goes out to the last day. Shopify asks for a test order whenever payment settings change.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the October details',
      text: 'Each app’s window and what its shoppers met come from its developer’s own statement. HulkApps replied on the Shopify Community on 15 October 2026. Logbase’s incident page for Selleasy was last updated on 28 October 2026. Swym published its security update on 16 October 2026 and its FAQ on 20 October 2026. Roman Zipp’s findings are from his investigation, last updated on 22 October 2026. Ashcombe, its web addresses and everything in both pictures are invented, and the cost table is worked from yearly sales at the floor of each band.',
    },
  ],

  sources: [
    { title: 'Reply from HulkApps: URGENT: checkout phishing redirect', publisher: 'Shopify Community', url: HULK, date: '2026-10-15' },
    { title: 'Security incident update: 13 October 2026', publisher: 'Logbase', url: LOGBASE, date: '2026-10-28' },
    { title: 'Security incident update', publisher: 'Swym', url: SWYM_SEC, date: '2026-10-16' },
    { title: 'Wishlist Plus security precaution: frequently asked questions', publisher: 'Swym', url: SWYM_FAQ, date: '2026-10-20' },
    { title: 'Shopify shops hit with ongoing Checkout Hijack attack', publisher: 'Roman Zipp', url: ZIPP, date: '2026-10-10' },
    { title: 'Securing your app, together', publisher: 'Shopify developer changelog', url: SHOPIFY_DEV, date: '2026-10-20' },
    { title: 'New protection against unexpected redirects', publisher: 'Shopify Changelog', url: REDIRECTS, date: '2026-10-20' },
    { title: 'Shopify Status', publisher: 'Shopify', url: STATUS },
    { title: 'Troubleshooting checkout payment issues', publisher: 'Shopify Help Center', url: PAYMENTS_TROUBLE },
    { title: 'Troubleshooting your online store theme', publisher: 'Shopify Help Center', url: THEME_TROUBLE },
    { title: 'Accelerated checkout buttons', publisher: 'Shopify Help Center', url: ACCELERATED },
    { title: 'Change your primary domain', publisher: 'Shopify Help Center', url: PRIMARY_DOMAIN },
    { title: 'Migrate from the online store to Hydrogen', publisher: 'Shopify', url: HYDROGEN },
    { title: 'Discount codes FAQ', publisher: 'Shopify Help Center', url: DISCOUNTS_FAQ },
    { title: 'Troubleshooting and testing shipping rates', publisher: 'Shopify Help Center', url: SHIPPING_TROUBLE },
    { title: 'Testing Shopify Payments', publisher: 'Shopify Help Center', url: TESTING_SP },
    { title: 'Troubleshooting common PayPal Express Checkout issues on Shopify', publisher: 'Shopify Help Center', url: PAYPAL_ISSUES },
    { title: 'Understanding Reference Transactions for automatic billing with PayPal Express Checkout', publisher: 'Shopify Help Center', url: PAYPAL_REF },
    { title: 'Customizing email notification templates', publisher: 'Shopify Help Center', url: NOTIFY_TEMPLATE },
    { title: 'Setting up customer notifications', publisher: 'Shopify Help Center', url: CUSTOMER_NOTIFY },
    { title: 'Placing a test order', publisher: 'Shopify Help Center', url: TEST_ORDERS },
    { title: 'Extend your theme with apps', publisher: 'Shopify Help Center', url: APP_EMBEDS },
    { title: 'Customizing your checkout and customer accounts with apps', publisher: 'Shopify Help Center', url: CHECKOUT_APPS },
    { title: 'Editing theme code', publisher: 'Shopify Help Center', url: EDIT_CODE },
    { title: 'Shoptest: Monitoring & Alerts', publisher: 'Shopify App Store', url: SHOPTEST_APP, date: '2026-04-14' },
    { title: 'Pricing', publisher: 'Checkly', url: CHECKLY },
  ],

  related: [
    'how-to-test-your-shopify-store-as-a-customer',
    'traffic-but-no-sales',
    'shopify-store-audit-checklist',
    'black-friday-checklist-new-customer',
    LEAKS,
    'recipe:website-audit',
    'recipe:mystery-shopper',
  ],
}
