import type { BlogPost } from './types'

/* Article (Content and Search Plan, 23 Oct 2026): why a welcome or basket email never arrives. Readers: a brand's retention
   or CRM lead whose flow numbers look fine but whose sales feel quiet, and an agency strategist inheriting a client's
   account. Picked from the email and SMS library (_research/seo/library/email_sms_lens.json, idea "Silent flows"): the
   SERP is single Klaviyo Community threads, one account at a time, and nobody sorts the leaks by what the shopper sees.
   Thought leadership, not a review: the full by-hand method is free and complete, and the product appears once in the
   body, where the by-hand method stops, plus the 2 quiet links. Causes are named by mechanism, with Klaviyo and Shopify
   Email side by side, and each is a cause to check, not a finding: a receipt shows silence, never why.
   Every platform rule was read at its source on 23 Oct 2026 (Klaviyo Help: Smart Sending, skipped reasons, flow
   statuses, contacts in a flow, list and metric triggered flow troubleshooting, double opt in, welcome series, abandoned
   cart and Added to Cart flows, Shopify data reference, onsite tracking, event data, dynamic blocks, browse
   abandonment, flow analytics; Shopify Help: abandoned checkouts, marketing automations, discounts). The r/Klaviyo
   quote was checked on 3 Oct 2026 (Reddit could not be reopened on 23 Oct); the Klaviyo Community threads and the Joy Joya
   test were opened on 23 Oct. The only Obsession result cited is the September store check on /sample-output, worded as
   that page states it (a £40 basket left at 02:57 on Tuesday 22 September 2026, no reminder in 48 hours).
   Not used, on purpose: the site's 93% and 77% and 128 stores (base to confirm with James), any PilotX audit figure,
   any ranking of causes by how often they happen (nobody has measured it), and the r/Emailmarketing code limit post
   (its poster may be a vendor). Buyer words (sign up, welcome email, basket, pop up); no dashes. */

const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const SMART = 'https://help.klaviyo.com/hc/en-us/articles/115002779311'
const SKIPPED = 'https://help.klaviyo.com/hc/en-us/articles/1260805003210'
const FLOWS = 'https://help.klaviyo.com/hc/en-us/articles/115002774932'
const CONTACTS = 'https://help.klaviyo.com/hc/en-us/articles/360017706091'
const LIST_TROUBLE = 'https://help.klaviyo.com/hc/en-us/articles/12414318812827'
const METRIC_TROUBLE = 'https://help.klaviyo.com/hc/en-us/articles/12278373016603'
const DOUBLE_OPT = 'https://help.klaviyo.com/hc/en-us/articles/115005251108'
const WELCOME = 'https://help.klaviyo.com/hc/en-us/articles/115002775172'
const CART_FLOW = 'https://help.klaviyo.com/hc/en-us/articles/115002779411'
const ATC_FLOW = 'https://help.klaviyo.com/hc/en-us/articles/35510464880027'
const SHOPIFY_DATA = 'https://help.klaviyo.com/hc/en-us/articles/115005080447'
const ONSITE = 'https://help.klaviyo.com/hc/en-us/articles/115001396711'
const DYNAMIC = 'https://help.klaviyo.com/hc/en-us/articles/4408802597659'
const EVENT_DATA = 'https://help.klaviyo.com/hc/en-us/articles/115002779071'
const BROWSE = 'https://help.klaviyo.com/hc/en-us/articles/115002775252'
const ANALYTICS = 'https://help.klaviyo.com/hc/en-us/articles/115002779351'
const SH_ABANDONED = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts'
const SH_MIGRATE = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/migrate-abandoned-checkout'
const SH_AUTO_CREATE = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/marketing-automations/create'
const SH_DISCOUNT = 'https://help.shopify.com/en/manual/discounts/discount-types/percentage-fixed-amount'
const SH_FAQ = 'https://help.shopify.com/en/manual/discounts/discounts-faq'
const SAMPLE = 'https://useobsession.com/sample-output'
const LEAKS = '/use-cases/leak-checks-for-ecommerce-stores'
const DELIVERY = '/recipes/delivery-monitoring'

export const post: BlogPost = {
  slug: 'welcome-basket-email-not-sending',
  title: 'Klaviyo flow not sending: why a welcome or basket email never arrives',
  dek: 'A flow report can look normal while a welcome or basket email never reaches the shopper. Sort the failure as silent, late, broken or wrong, check its likely causes in Klaviyo or Shopify Email, and estimate what one month of it costs.',
  metaTitle: 'Klaviyo flow not sending: why welcome emails never arrive',
  description:
    'Klaviyo flow not sending a welcome or basket email: sort the failure as silent, late, broken or wrong, check the cause, and cost one month of it.',
  answer:
    'A welcome or basket email that never arrives has a cause in one of 4 places: the list or event never starts the flow, the flow skips the shopper, the message isn’t live, or a code or link fails. Test as a new customer with a control address, wait 48 hours, then read the message’s Skipped reasons to see which.',
  primaryKeyword: 'klaviyo flow not sending',
  keywords: [
    'klaviyo flow not sending',
    'abandoned cart flow not triggering',
    'welcome email not sending',
    'abandoned cart email not sending shopify',
    'klaviyo welcome series not sending',
    'abandoned cart flow klaviyo not working',
    'welcome email not sending klaviyo',
    'welcome flow klaviyo',
  ],
  category: 'Check your own journeys',
  published: '2026-10-23',
  updated: '2026-10-23',
  readingMinutes: 9,
  order: 2,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'approve',
    workspace: 'company',
    art: {
      kind: 'log',
      title: 'marrowleaf.example · new customer test with a control address',
      who: 'Address A signs up through the pop up; address B through the footer form',
      status: { tone: 'fail', text: '1 flow not sending' },
      rows: [
        { time: 'Tue 09:00', text: 'A and B sign up, 1 minute apart', detail: 'Both new Gmail addresses, both with the marketing box ticked', tone: 'info' },
        { time: 'Tue 09:03', text: 'B: welcome email with 10% off', detail: 'Primary tab, 2 minutes after sign up', tone: 'ok' },
        { time: 'Thu 09:01', text: 'A: no welcome email in 48 hours', detail: 'The pop up feeds a list the welcome flow doesn’t start from', tone: 'fail' },
        { time: 'Thu 09:06', text: 'Control: a plain campaign reaches A', detail: 'Sending works, so the fault sits in the flow', tone: 'ok' },
      ],
      foot: 'A received a plain campaign, so the address works and the fault is in the welcome flow.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'If you run retention for a store, or have taken over a client’s account, a welcome or basket flow can stop reaching shoppers while its report looks normal. A flow can work for shoppers who arrive through one form and miss those who arrive through another, and the report averages the two. A message left on draft [leaves no row in its analytics](' +
        CONTACTS +
        '), and a shopper the trigger never reached doesn’t appear in the report at all.',
    },
    {
      kind: 'p',
      text: '[A July 2026 test of 362 ecommerce brands](' +
        JOYJOYA +
        '), made with new email addresses and phone numbers, found that 158 never sent a welcome email. One tester ran it from the customer’s side with no access to any brand’s dashboard, so it records what arrived and can’t show the cause.',
    },
    {
      kind: 'stat',
      value: '158 of 362',
      label: 'ecommerce brands (43.6%) never sent a new subscriber a welcome email',
      source: 'Joy Joya, July 2026 (one tester, customer side only)',
      href: JOYJOYA,
    },
    {
      kind: 'p',
      text: '[Klaviyo’s 2026 benchmarks](' +
        BENCH +
        ') put flows at 5.3% of email sends and nearly 41% of email revenue across Klaviyo customers. Your own flow report shows the share for your store.',
    },
    {
      kind: 'stat',
      value: '41%',
      label: 'of email revenue comes from flows, on 5.3% of sends',
      source: 'Klaviyo benchmarks across 183,000+ customers, 2026',
      href: BENCH,
    },

    { kind: 'h2', id: 'leak-types', text: 'The 4 kinds of flow failure: silent, late, broken and wrong' },
    {
      kind: 'p',
      text: 'Each kind of failure is defined by what the shopper received. Treat each cause in the table as a guess until a setting in your account or a help page confirms it.',
    },
    {
      kind: 'table',
      caption: 'What the shopper saw, and the causes to check first',
      cols: ['Failure', 'What the shopper saw', 'Check first'],
      rows: [
        ['Silent', 'No email from the flow after the action and the wait', 'The list or event, double opt in, entry rules, consent, filters, status, Smart Sending, a code'],
        ['Late', 'It came well after the delay you set', 'Manual status, the wait you set, a slow sync'],
        ['Broken', 'A blank product, a dead link or a refused code', 'The product block, the link, the code’s cap and dates'],
        ['Wrong', 'An email for something they didn’t do, or the same email twice', 'Overlapping flows, a missing filter, a second tool'],
      ],
    },

    { kind: 'h2', id: 'stranger-test', text: 'How to test a flow as a new customer' },
    {
      kind: 'p',
      text: 'Test with 2 new addresses that have never subscribed or bought: a test address and a control address. Your own login won’t work, because your store already knows you. The test address goes through the journey: it signs up through the pop up, or leaves a basket with the marketing box ticked and stops before paying. The control address signs up the same way. The [Black Friday checklist](/blog/black-friday-checklist-new-customer) lists the other journeys to test.',
    },
    {
      kind: 'p',
      text: 'Write down the time of each action. After 48 hours, record what arrived, when, and in which Gmail tab. The [September store check](' +
        SAMPLE +
        ') logged one such result: a £40 gift set left in a basket at 02:57 on Tuesday 22 September 2026, and no reminder in 48 hours.',
    },
    {
      kind: 'p',
      text: 'When the 48 hours are over, send the control address one plain campaign email. If the control address gets it and the test address got nothing from the flow, the fault is in the flow. If neither gets anything, check consent, the form and your sending first.',
    },
    {
      kind: 'p',
      text: 'Send the campaign last, because Smart Sending skips a flow message for a profile that recently got another message. Use new addresses for every run, since [list triggered flows default to No reentry](' +
        LIST_TROUBLE +
        '). A preview uses [sample event data](' +
        DYNAMIC +
        '), so it checks the template only. Testing the trigger takes a real sign up or basket.',
    },

    { kind: 'h2', id: 'silent', text: 'Causes of a silent flow' },
    { kind: 'h3', id: 'trigger', text: '1. The list or the event never reaches the flow' },
    {
      kind: 'p',
      text: 'A welcome flow starts when a profile joins its list. [Klaviyo’s welcome series guide](' +
        WELCOME +
        ') says to choose the list new subscribers are added to, and notes that Shopify themes often ship a default newsletter box that isn’t a Klaviyo form. [Klaviyo’s troubleshooting page for list triggered flows](' +
        LIST_TROUBLE +
        ') gives 3 more ways the list can stay empty: a sign up form on draft, a form linked to another list, or a Shopify sync list that isn’t selected.',
    },
    {
      kind: 'p',
      text: 'A basket flow starts from an event. To check the event, [open the metric](' +
        METRIC_TROUBLE +
        ') and look for Checkout Started on your test profile’s timeline. [Klaviyo records Checkout Started](' +
        SHOPIFY_DATA +
        ') once Shopify sends checkout information with a valid email address or phone number, so a shopper who leaves before that point never starts the flow. Added to Cart [works only for identified shoppers](' +
        ATC_FLOW +
        ') and needs the app embed plus the **Track behavioral events** setting. After a theme change, the [app embed has to be turned on again](' +
        ONSITE +
        ').',
    },

    { kind: 'h3', id: 'opt-in', text: '2. Double opt in holds the shopper off the list' },
    {
      kind: 'p',
      text: 'With double opt in, only subscribers who confirm are added to the list and queued for the welcome series. A profile can exist before that point, but [a profile on its own doesn’t mean the person joined the list](' +
        DOUBLE_OPT +
        '). Submit your test and look for the address in the list. If it isn’t there, the shopper stopped at the confirmation step and the flow may be working.',
    },

    { kind: 'h3', id: 'entry', text: '3. The shopper is already in the flow, or isn’t allowed in' },
    {
      kind: 'p',
      text: '[List triggered flows default to No reentry](' +
        LIST_TROUBLE +
        '), so a profile that entered once doesn’t enter again. Profiles that joined before the flow went live have to be added as past profiles.',
    },
    {
      kind: 'p',
      text: 'Consent also decides who enters. Klaviyo flows can’t email unsubscribed profiles unless the message is marked transactional, and [Shopify’s marketing automations](' +
        SH_AUTO_CREATE +
        ') send only to customers subscribed to email marketing by default. A shopper who left the marketing box unticked gets nothing from a flow that sends to subscribers only. Shopify lets you [edit an abandoned checkout automation’s To field](' +
        SH_MIGRATE +
        ') to include all customers. Whether you may do that depends on your market’s consent rules, and none of this is legal advice.',
    },

    { kind: 'h3', id: 'filters', text: '4. A flow filter or a draft message drops the shopper' },
    {
      kind: 'p',
      text: '[Klaviyo rechecks profile filters](' +
        FLOWS +
        ') before each step and again at send time, and skips anyone who fails them. It schedules nobody for a draft message, and it skips a message switched to draft inside a live flow. A high Fails Flow Filters count is normal in a basket flow, because shoppers who ordered are filtered out. Contradictory conditions, or an OR where an AND was meant, point to a fault. The trigger’s [Preview](' +
        METRIC_TROUBLE +
        ') shows which filters a profile passes.',
    },

    { kind: 'h3', id: 'smart-sending', text: '5. Smart Sending skips the message' },
    {
      kind: 'p',
      text: '[Smart Sending](' +
        SMART +
        ') skips a flow message when the profile recently got a message on the same channel. The default window is 16 hours for email and 24 hours for SMS. A skipped flow message isn’t rescheduled, and you can turn Smart Sending off for a single message. In sale week, a shopper who got the morning’s campaign can have the afternoon basket reminder skipped. The setting is working as designed in that case, so decide whether you want it on that message. The Skipped reason in [Recipient activity](' +
        ANALYTICS +
        ') shows when Smart Sending was the cause.',
    },

    { kind: 'h3', id: 'coupon', text: '6. The code can’t be made, so the whole email is skipped' },
    {
      kind: 'p',
      text: 'When a flow email carries a code and Klaviyo can’t produce one, the email is skipped. The [skipped reasons](' +
        SKIPPED +
        ') include Unable to Create Coupon (an error in the coupon, or too many coupons sent in a short time), No More Uploaded Coupons Remain, and Error Retrieving External Data for a Shopify code. To the shopper, it looks as if the welcome email never came.',
    },

    { kind: 'h3', id: 'shopify-email', text: '7. Shopify Email has its own reasons not to send' },
    {
      kind: 'p',
      text: '[Shopify counts a checkout as abandoned](' +
        SH_ABANDONED +
        ') once it has stayed incomplete for more than 10 minutes after the shopper gave an email. It sends no recovery email if the shopper completes a sale first, a payment error occurred, you don’t ship to the address, they entered a phone number instead of an email, or no product is available. Recovery covers only the Online Store and Buy Button channels, according to [Shopify’s guide to marketing automations](' +
        SH_AUTO_CREATE +
        '), which also says that turning an automation off cancels anything waiting in it.',
    },

    { kind: 'h2', id: 'late', text: 'Causes of a late email' },
    {
      kind: 'list',
      items: [
        '**A Manual message.** Shoppers queue in Needs Review and nothing sends until someone approves. [Switching the message to Live](' +
          FLOWS +
          ') doesn’t send the ones already waiting.',
        '**The wait you set.** Shopify’s recovery email goes out after the [Send after time](' +
          SH_ABANDONED +
          ') you chose, and a Klaviyo flow starts with its time delay. Check the delay before you record a reminder as late.',
        '**A slow sync.** An event that reaches Klaviyo 6 hours or more after it happened [doesn’t trigger a metric triggered flow](' +
          METRIC_TROUBLE +
          '), so a sync delay that keeps growing can turn a late email into a missing one.',
      ],
    },

    { kind: 'h2', id: 'broken', text: 'Causes of a broken email' },
    {
      kind: 'p',
      text: 'Open every email that arrives on a phone and click everything in it. When an email arrives broken, the flow has sent it and the fault is in the content.',
    },
    {
      kind: 'list',
      items: [
        '**A blank product.** A basket email reads its items from the event that started the flow. [Klaviyo’s guide to event data](' +
          EVENT_DATA +
          ') says event variables work only in metric triggered flows. A list triggered flow has none to pull from and a campaign can’t use them, so a basket email copied into either has no products to show.',
        '**A dead link.** Product and checkout links come from variables that differ by integration, and [a link can break if you use the wrong one for your platform](' +
          DYNAMIC +
          '). Click every button and product link.',
        '**A refused code.** Shopify lets you [cap a code’s total uses and set an end date](' +
          SH_DISCOUNT +
          ') in your admin’s timezone. Its help pages don’t say what a shopper sees at the cap, so apply the code at checkout and read the message. A code can also be [refused as already used](' +
          SH_FAQ +
          ') while an unfinished checkout holds it.',
      ],
    },

    { kind: 'h2', id: 'wrong', text: 'Causes of a wrong email' },
    {
      kind: 'list',
      items: [
        '**A browse email after a basket.** Klaviyo’s [browse abandonment flow](' +
          BROWSE +
          ') keeps browse emails away from checkout shoppers with the filter “Started Checkout zero times since starting this flow”. A flow built without it can send a browse email to someone who left a basket.',
        '**Two flows for one shopper.** Klaviyo’s [Added to Cart flow](' +
          ATC_FLOW +
          ') targets shoppers who haven’t started checkout, and its filters stop a shopper who then starts checkout or orders from carrying on in it. If you run it alongside a checkout flow, check that the two don’t overlap.',
        '**Two tools sending the same reminder.** [Klaviyo’s abandoned cart guide](' +
          CART_FLOW +
          ') says to turn off your platform’s default abandoned cart messages to prevent duplicates. On Shopify, look in the Messaging app’s automations and under Settings, Checkout.',
        '**A welcome code for a past buyer.** [Klaviyo’s welcome series guide](' +
          WELCOME +
          ') doesn’t exclude existing customers. To send them down another path, build a conditional split.',
      ],
    },
    {
      kind: 'p',
      text: 'On any platform, the checks cover 4 things: whether the list or event fired, whether the shopper was allowed in, whether the message was live and unfiltered, and whether the content held.',
    },

    { kind: 'h2', id: 'cost', text: 'How to estimate what one silent flow costs in a month' },
    {
      kind: 'p',
      text: 'Pick a month when the flow worked, open its analytics and note 3 numbers.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Delivered:** the messages the flow delivered in those 30 days.',
        '**Placed Order rate:** the conversion rate on the same snapshot, which [Klaviyo sets to Placed Order rate by default](' +
          ANALYTICS +
          ').',
        '**Your average order,** from your store’s reports.',
      ],
    },
    {
      kind: 'p',
      text: 'Multiply the 3 together. The result should land near the revenue the same snapshot attributes to the flow. Multiply it by 0.5 for the low end of what one silent month costs.',
    },
    {
      kind: 'p',
      text: 'Attributed revenue includes shoppers who would have bought without the email, so plan on half. Work out welcome, basket and checkout separately.',
    },

    { kind: 'h2', id: 'inheriting', text: 'Checks when you take over a client’s account' },
    {
      kind: 'p',
      text: 'When you take over a client’s flows, start with [Klaviyo’s flow history](' +
        LIST_TROUBLE +
        '), which shows what changed, who changed it and when. Set those dates beside the month sales went quiet, then work through the flows in this order.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Check every message’s status: Live, Manual or Draft.',
        'Open Recipient activity on each message and read the Skipped reasons.',
        'Run the new customer test on 3 journeys (sign up, basket and checkout) with a control address.',
        '[Send the client the emails as they arrived, with their times](/blog/show-clients-every-flow-fired), and list the journeys where nothing came.',
      ],
    },
    {
      kind: 'p',
      text: 'Run the test on a client’s store with the client’s OK, and on [a prospect’s store only through the public sign up any customer can use](/blog/audit-prospect-email-without-klaviyo-login).',
    },
    {
      kind: 'cta',
      text: 'Obsession’s AI customers shop each client’s store with the client’s OK and report what arrived and what never did, with screenshots, within 4 days. 5 client stores are checked free.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'by-hand', text: 'Limits of testing by hand' },
    {
      kind: 'p',
      text: 'For one store that changes rarely, a tool isn’t needed. Run the test once now, then again after each change to a theme, form, flow, app or discount.',
    },
    {
      kind: 'list',
      items: [
        '**Each test covers one moment.** A pass on Tuesday doesn’t cover the theme published on Thursday.',
        '**A test has no history.** A shopper who signed up during a silent week got nothing, and a test run now can’t show it.',
        '**Proof depends on what you keep.** Keep each email as it arrived, with its arrival time. A screenshot is easier to dispute.',
        '**The time grows with each store.** One store takes an afternoon, with a 48 hour wait in the middle. At 20 client stores a week, it becomes a regular task for someone on the team.',
      ],
    },
    {
      kind: 'p',
      text: 'Obsession’s AI agents [shop your store as new customers](' +
        LEAKS +
        ') every week and after every change, and its [delivery monitoring](' +
        DELIVERY +
        ') checks that every email, text and login code arrives. A silent flow is one of the failures that [customer journey testing](/blog/ai-customers-find-revenue-leaks) looks for.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s AI agents run the new customer test on your store every week and after every change, and report each failure with proof and the fix. You can start with a free check of your store.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'before-the-freeze', text: 'When to test before Black Friday' },
    {
      kind: 'p',
      text: 'Black Friday is Friday 27 November 2026 and Cyber Monday is Monday 30 November. Code freezes start about 20 November. Run the 3 journeys before your freeze, and again the evening before the sale goes live.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Why is my Klaviyo flow not sending?',
          a: 'The list or event never starts the flow, the shopper is filtered out or already in it, the message is on Draft or Manual, Smart Sending skips it, or a code can’t be made. The Skipped reason in the message’s Recipient activity shows which.',
        },
        {
          q: 'Why is my abandoned cart flow not triggering?',
          a: 'Check that the trigger event reaches Klaviyo by opening the metric and your test profile’s timeline. Checkout Started needs a valid email or phone from Shopify. Added to Cart needs an identified shopper, the app embed and Track behavioral events.',
        },
        {
          q: 'Why is my welcome email not sending to new subscribers?',
          a: 'Check that the form feeds the list the flow triggers from, that double opt in isn’t holding the shopper until they confirm, and that the profile hasn’t already entered the flow, since list triggered flows default to No reentry.',
        },
        {
          q: 'Why is my abandoned cart email not sending on Shopify?',
          a: 'Shopify’s automations send only to customers subscribed to email marketing by default, and send no recovery email if the shopper completes a sale first, a payment error occurred, you don’t ship to the address, or no product is available. If Klaviyo runs the flow too, turn off Shopify’s own to avoid duplicates.',
        },
        {
          q: 'Does Smart Sending reschedule a skipped flow email?',
          a: 'No. Klaviyo doesn’t reschedule flow messages skipped by Smart Sending, and you can turn it off for a single flow message.',
        },
        {
          q: 'How do I test a Klaviyo welcome or basket flow?',
          a: 'Use a new address for every run, sign up or leave a basket, and record the time. After 48 hours, log what arrived and when, then send one plain campaign email to a second new address as a control. If the campaign arrives and the flow email never did, the fault is in the flow.',
        },
        {
          q: 'Do the same checks work on other platforms?',
          a: 'Yes. The test is something a customer does, so it works on any store and any platform. Your platform’s help pages give the name of each setting.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'The Klaviyo help pages cited were dated 22 October 2026 or earlier. We tested none of these causes on a live store. The causes are not ranked by how often each happens, because we found no measurement of that. Help pages change, so check the page before you act.',
    },
  ],

  sources: [
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: BENCH, date: '2026' },
    { title: 'Understanding Smart Sending in Klaviyo', publisher: 'Klaviyo Help Center', url: SMART, date: '2026-10-22' },
    { title: 'Troubleshooting why a flow message skipped a profile', publisher: 'Klaviyo Help Center', url: SKIPPED, date: '2026-10-07' },
    { title: 'Getting started with flows', publisher: 'Klaviyo Help Center', url: FLOWS, date: '2026-10-07' },
    { title: 'Understanding how contacts move through a flow', publisher: 'Klaviyo Help Center', url: CONTACTS, date: '2026-10-08' },
    { title: 'Troubleshooting a list- or segment-triggered flow', publisher: 'Klaviyo Help Center', url: LIST_TROUBLE, date: '2026-10-07' },
    { title: 'Troubleshooting a metric-triggered flow', publisher: 'Klaviyo Help Center', url: METRIC_TROUBLE, date: '2026-10-07' },
    { title: 'Understanding the double opt-in process', publisher: 'Klaviyo Help Center', url: DOUBLE_OPT, date: '2026-03-30' },
    { title: 'How to create an email welcome series', publisher: 'Klaviyo Help Center', url: WELCOME, date: '2026-10-07' },
    { title: 'How to create an abandoned cart flow', publisher: 'Klaviyo Help Center', url: CART_FLOW, date: '2026-10-07' },
    { title: 'How to create an abandoned “Added to Cart” flow for Shopify', publisher: 'Klaviyo Help Center', url: ATC_FLOW, date: '2026-03-25' },
    { title: 'Shopify data reference', publisher: 'Klaviyo Help Center', url: SHOPIFY_DATA, date: '2025-11-18' },
    { title: 'How to enable onsite tracking for Shopify', publisher: 'Klaviyo Help Center', url: ONSITE, date: '2026-03-25' },
    { title: 'How to build dynamic blocks in a flow email', publisher: 'Klaviyo Help Center', url: DYNAMIC, date: '2026-03-30' },
    { title: 'How to use event data to personalize email and SMS flows', publisher: 'Klaviyo Help Center', url: EVENT_DATA, date: '2026-10-07' },
    { title: 'How to create a browse abandonment flow', publisher: 'Klaviyo Help Center', url: BROWSE, date: '2026-10-07' },
    { title: 'Understanding flow analytics', publisher: 'Klaviyo Help Center', url: ANALYTICS, date: '2026-10-07' },
    { title: 'Abandoned checkouts', publisher: 'Shopify Help Center', url: SH_ABANDONED },
    { title: 'Migrate to the abandoned checkout automation', publisher: 'Shopify Help Center', url: SH_MIGRATE },
    { title: 'Create a marketing automation', publisher: 'Shopify Help Center', url: SH_AUTO_CREATE },
    { title: 'Amount off products discounts', publisher: 'Shopify Help Center', url: SH_DISCOUNT },
    { title: 'Discounts FAQ', publisher: 'Shopify Help Center', url: SH_FAQ },
    { title: 'Sample output: the September store check', publisher: 'Obsession', url: SAMPLE, date: '2026-09' },
  ],

  related: [
    'black-friday-checklist-new-customer',
    'recipe:delivery-monitoring',
    'recipe:mystery-shopper',
    '/use-cases/leak-checks-for-ecommerce-stores',
    '/use-cases/leak-checks-for-retention-agencies',
    '/sample-output',
    '/agencies',
  ],
}
