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
const K_ZERO = 'https://community.klaviyo.com/marketing-30/flows-stopped-working-15053'
const K_THEME = 'https://community.klaviyo.com/marketing-30/all-my-flows-have-stopped-working-2-weeks-11305'
const R_DUMMY = 'https://www.reddit.com/r/Klaviyo/comments/1rawe00/klaviyo_not_sending_welcome_series_emails_from_flow/'
const SAMPLE = 'https://useobsession.com/sample-output'
const CHECKLIST = '/blog/black-friday-checklist-new-customer'
const LEAKS = '/use-cases/leak-checks-for-ecommerce-stores'
const DELIVERY = '/recipes/delivery-monitoring'

export const post: BlogPost = {
  slug: 'welcome-basket-email-not-sending',
  title: 'Klaviyo flow not sending: why a welcome or basket email never arrives',
  dek: 'Your flow report can look fine while a welcome or basket email never reaches the shopper. Sort the leak as silent, late, broken or wrong, check the cause that fits, and put a number on one month of it.',
  metaTitle: 'Klaviyo flow not sending? Why a welcome email never comes',
  description:
    'Klaviyo flow not sending? Sort the leak as silent, late, broken or wrong, then check the cause in Klaviyo or Shopify Email, and cost one month of it.',
  answer:
    'A welcome or basket email that never arrives has a cause in one of 4 places: the list or event never starts the flow, the flow skips the shopper, the message isn’t live, or a code or link fails. Test as a new customer with a control address, wait 48 hours, then read the message’s Skipped reasons to find which.',
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
      title: 'marrowleaf.example · stranger test with a control address',
      who: 'Address A signs up through the pop up; address B through the footer form',
      status: { tone: 'fail', text: '1 silent flow' },
      rows: [
        { time: 'Tue 09:00', text: 'A and B sign up, 1 minute apart', detail: 'Both new Gmail addresses, both with the marketing box ticked', tone: 'info' },
        { time: 'Tue 09:03', text: 'B: welcome email with 10% off', detail: 'Primary tab, 2 minutes after sign up', tone: 'ok' },
        { time: 'Thu 09:01', text: 'A: no welcome email in 48 hours', detail: 'The pop up feeds a list the welcome flow doesn’t start from', tone: 'fail' },
        { time: 'Thu 09:06', text: 'Control: a plain campaign reaches A', detail: 'Sending works, so the fault sits in the flow', tone: 'ok' },
      ],
      foot: 'The control settles it: the address can receive mail, so the silence belongs to the flow.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'In July 2026, Laryssa Wirstiuk signed up to 362 ecommerce brands with new email addresses and phone numbers. 158 of them never sent a welcome email ([Joy Joya](' +
        JOYJOYA +
        ')). It was one tester, working from the customer’s side with no access to any dashboard, so the count shows what arrived and says nothing about why.',
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
      text: 'If you run retention, or have just taken over a client’s account, your welcome and basket flows may be silent while the numbers look fine. A flow can work for shoppers who come in through one form and miss those who come in through another, and the report averages the two. A message left on draft [leaves no row in its analytics](' +
        CONTACTS +
        '), and a shopper the trigger never reached isn’t in the report at all.',
    },
    {
      kind: 'quote',
      text: 'If I go to view our analytics for the flow, everything is 0.',
      cite: 'A store owner on the Klaviyo Community, October 2024',
      href: K_ZERO,
    },
    {
      kind: 'p',
      text: 'A flow report counts the people a flow messaged. It can’t count the shopper the flow never reached.',
    },
    {
      kind: 'p',
      text: 'Flows are where the money is. [Klaviyo’s 2026 benchmarks](' +
        BENCH +
        ') put them at 5.3% of email sends and nearly 41% of email revenue. That is the category figure and not yours. Your own flow report holds your number.',
    },
    {
      kind: 'stat',
      value: '41%',
      label: 'of email revenue comes from flows, on 5.3% of sends',
      source: 'Klaviyo benchmarks (vendor data, 183,000+ customers), 2026',
      href: BENCH,
    },

    { kind: 'h2', id: 'leak-types', text: 'Sort the leak: silent, late, broken or wrong' },
    {
      kind: 'p',
      text: 'Start with what the shopper saw, in plain terms. The cause comes second, and it stays a guess until a setting or a help page confirms it.',
    },
    {
      kind: 'table',
      caption: 'What the shopper saw, and the causes to check first',
      cols: ['Leak', 'What the shopper saw', 'Check first'],
      rows: [
        ['Silent', 'No email from the flow after the action and the wait', 'The list or event, double opt in, entry rules, consent, filters, status, Smart Sending, a code'],
        ['Late', 'It came well after the delay you set', 'Manual status, the wait you set, a slow sync'],
        ['Broken', 'A blank product, a dead link or a refused code', 'The product block, the link, the code’s cap and dates'],
        ['Wrong', 'A real email, but not the one for what they did, or two of it', 'Overlapping flows, a missing filter, a second tool'],
      ],
    },

    { kind: 'h2', id: 'stranger-test', text: 'Run the test as a stranger, with a control address' },
    {
      kind: 'p',
      text: 'Your own login is the wrong test account, because your store already knows you. Set up 2 new addresses that have never subscribed or bought. Address A walks the journey: sign up through the pop up, or leave a basket with the marketing box ticked and stop before paying. Address B signs up the same way. The [Black Friday checklist](' +
        CHECKLIST +
        ') has the full set of journeys.',
    },
    {
      kind: 'p',
      text: 'Write down the time of each action. After 48 hours, record what arrived, in which Gmail tab and when. That log is the receipt. It shows what the shopper saw and nothing about why. The [September store check](' +
        SAMPLE +
        ') is one: a £40 gift set left in a basket at 02:57 on Tuesday 22 September 2026, and no reminder in 48 hours.',
    },
    {
      kind: 'quote',
      text: 'I’m not getting any automatic emails when I sign up with a dummy address.',
      cite: 'A store owner on r/Klaviyo, February 2026',
      href: R_DUMMY,
    },
    {
      kind: 'p',
      text: 'The control settles whether it is the flow or the address. When the 48 hours are over, send B one plain campaign email. If B gets it and A got nothing, the fault sits in the flow. If neither gets anything, look at consent, the form and your sending first.',
    },
    {
      kind: 'p',
      text: 'Send the control last, because Smart Sending skips a flow message for a profile that recently got another message. Use new addresses for every run too, since [list triggered flows default to No reentry](' +
        LIST_TROUBLE +
        '). A preview won’t stand in for the test: it uses [sample event data](' +
        DYNAMIC +
        '), so it proves the template and not the trigger.',
    },

    { kind: 'h2', id: 'silent', text: 'Silent: the flow never starts, or skips the shopper' },
    { kind: 'h3', id: 'trigger', text: '1. The list or the event never reaches the flow' },
    {
      kind: 'p',
      text: 'A welcome flow starts when a profile joins its list. Klaviyo says the list you choose should be the one new subscribers are added to, and that Shopify themes often ship a default newsletter box that isn’t a Klaviyo form ([Klaviyo Help](' +
        WELCOME +
        ')). A sign up form on draft, linked to another list, or a Shopify sync list that isn’t selected can each leave the list empty ([Klaviyo Help](' +
        LIST_TROUBLE +
        ')).',
    },
    {
      kind: 'p',
      text: 'A basket flow starts from an event. Open the metric and look for Checkout Started on your test profile’s timeline ([Klaviyo Help](' +
        METRIC_TROUBLE +
        ')). Klaviyo records it once Shopify sends checkout information with a valid email address or phone number ([Klaviyo Help](' +
        SHOPIFY_DATA +
        ')), so a shopper who leaves earlier never starts the flow. Added to Cart works only for identified shoppers and needs the app embed plus the **Track behavioral events** setting ([Klaviyo Help](' +
        ATC_FLOW +
        ')). A brand new theme means [turning the embed on again](' +
        ONSITE +
        ').',
    },
    {
      kind: 'quote',
      text: 'All my flows have stopped working. We upgraded our shopify theme.',
      cite: 'A store owner on the Klaviyo Community, March 2024. The poster later blamed code in the store’s back end; Klaviyo staff did not confirm it.',
      href: K_THEME,
    },

    { kind: 'h3', id: 'opt-in', text: '2. Double opt in holds the shopper off the list' },
    {
      kind: 'p',
      text: 'With double opt in, only subscribers who confirm are added to the list and queued for the welcome series. A profile can exist before that, but [having a profile doesn’t mean the person joined the list](' +
        DOUBLE_OPT +
        '). Submit your test and look for the address in the list. If it isn’t there, the flow may be fine and the confirmation step is where the shopper stopped.',
    },

    { kind: 'h3', id: 'entry', text: '3. The shopper is already in, or isn’t allowed in' },
    {
      kind: 'p',
      text: 'List triggered flows default to No reentry, so a profile that entered once doesn’t enter again, and profiles that joined before the flow went live need adding as past profiles ([Klaviyo Help](' +
        LIST_TROUBLE +
        ')). Consent decides too: Klaviyo flows can’t email unsubscribed profiles unless the message is marked transactional, and Shopify’s marketing automations send only to customers subscribed to email marketing by default ([Shopify Help](' +
        SH_AUTO_CREATE +
        ')). A shopper who left the marketing box unticked gets nothing from a flow that sends to subscribers only. Shopify lets you [edit an abandoned checkout automation’s To field](' +
        SH_MIGRATE +
        ') to include all customers. Whether you may depends on your market’s consent rules, and this article isn’t legal advice.',
    },

    { kind: 'h3', id: 'filters', text: '4. A flow filter or a draft message drops the shopper' },
    {
      kind: 'p',
      text: 'Klaviyo rechecks profile filters before each step and again at send time, and skips anyone who fails them. Nobody is scheduled for a draft message, and one switched to draft inside a live flow is skipped ([Klaviyo Help](' +
        FLOWS +
        ')). A high Fails Flow Filters count is normal in a basket flow, because shoppers who ordered are filtered out. Contradictory conditions, or an OR where an AND was meant, are not. The trigger’s Preview shows which filters a profile passes ([Klaviyo Help](' +
        METRIC_TROUBLE +
        ')).',
    },

    { kind: 'h3', id: 'smart-sending', text: '5. Smart Sending skips the message' },
    {
      kind: 'p',
      text: 'Smart Sending skips a flow message when the profile recently got a message on the same channel. The default window is 16 hours for email and 24 hours for SMS, a skipped flow message isn’t rescheduled, and you can turn it off for a single message ([Klaviyo Help](' +
        SMART +
        ')). In sale week, a shopper who got this morning’s campaign can have the afternoon basket reminder skipped. That is the setting working as designed; the decision is whether you want it on that message. The Skipped reason in Recipient activity names it ([Klaviyo Help](' +
        ANALYTICS +
        ')).',
    },

    { kind: 'h3', id: 'coupon', text: '6. The code can’t be made, so the whole email is skipped' },
    {
      kind: 'p',
      text: 'When a flow email carries a code and Klaviyo can’t produce one, the email is skipped. The skipped reasons include Unable to Create Coupon (an error in the coupon, or too many coupons sent in a short time), No More Uploaded Coupons Remain, and Error Retrieving External Data for a Shopify code ([Klaviyo Help](' +
        SKIPPED +
        ')). The shopper sees a missing welcome email, never a missing code.',
    },

    { kind: 'h3', id: 'shopify-email', text: '7. Shopify Email has its own reasons not to send' },
    {
      kind: 'p',
      text: 'Shopify counts a checkout as abandoned once it has stayed incomplete for more than 10 minutes after the shopper gave an email. It sends no recovery email if the shopper completes a sale first, a payment error occurred, you don’t ship to the address, they entered a phone number instead of an email, or no product is available ([Shopify Help](' +
        SH_ABANDONED +
        ')). It covers the Online Store and Buy Button channels only, and turning an automation off cancels anything waiting in it ([Shopify Help](' +
        SH_AUTO_CREATE +
        ')).',
    },

    { kind: 'h2', id: 'late', text: 'Late: the email waits for a person, a delay or a sync' },
    {
      kind: 'list',
      items: [
        '**A Manual message.** Shoppers queue in Needs Review and nothing sends until someone approves. Switching the message to Live doesn’t send the ones already waiting ([Klaviyo Help](' +
          FLOWS +
          ')).',
        '**The wait you set.** Shopify’s recovery email goes out after the Send after time you chose ([Shopify Help](' +
          SH_ABANDONED +
          ')), and a Klaviyo flow starts with its time delay. Read it before you call a reminder late.',
        '**A slow sync.** An event that reaches Klaviyo 6 hours or more after it happened doesn’t trigger a metric triggered flow at all ([Klaviyo Help](' +
          METRIC_TROUBLE +
          ')). Lateness that grows toward that limit turns into silence.',
      ],
    },

    { kind: 'h2', id: 'broken', text: 'Broken: a blank product, a dead link or a refused code' },
    {
      kind: 'p',
      text: 'Open every email on a phone and click everything. A broken email arrived, so the flow worked and the content didn’t.',
    },
    {
      kind: 'list',
      items: [
        '**A blank product.** A basket email reads its items from the event that started the flow. Klaviyo says event variables work only in metric triggered flows: a list triggered flow has none to pull from, and a campaign can’t use them ([Klaviyo Help](' +
          EVENT_DATA +
          ')). Copy a basket email into either and it has no products to show.',
        '**A dead link.** Product and checkout links come from variables that differ by integration, and [a link can break if you use the wrong one for your platform](' +
          DYNAMIC +
          '). Click every button and product link.',
        '**A refused code.** Shopify lets you cap a code’s total uses and set an end date in your admin’s timezone ([Shopify Help](' +
          SH_DISCOUNT +
          ')). Its help pages don’t say what a shopper sees at the cap, so apply the code at checkout and read the message. A code can also be [refused as already used](' +
          SH_FAQ +
          ') while an unfinished checkout holds it.',
      ],
    },

    { kind: 'h2', id: 'wrong', text: 'Wrong: a real email for something the shopper didn’t do' },
    {
      kind: 'list',
      items: [
        '**A browse email after a basket.** Klaviyo keeps browse emails away from checkout shoppers with the filter “Started Checkout zero times since starting this flow” ([Klaviyo Help](' +
          BROWSE +
          ')). A flow built without it can send a browse email to someone who left a basket.',
        '**Two flows for one shopper.** Klaviyo’s Added to Cart flow targets shoppers who haven’t started checkout, and its filters stop a shopper who then starts checkout or orders from carrying on in it ([Klaviyo Help](' +
          ATC_FLOW +
          ')). Check the two flows don’t overlap.',
        '**Two tools, one reminder.** Klaviyo says to turn off your platform’s default abandoned cart messages to prevent duplicating messages ([Klaviyo Help](' +
          CART_FLOW +
          ')). On Shopify, look in the Messaging app’s automations and under Settings, Checkout.',
        '**A welcome code for a past buyer.** Klaviyo’s welcome series page doesn’t exclude existing customers. Sending them elsewhere takes a conditional split you build ([Klaviyo Help](' +
          WELCOME +
          ')).',
      ],
    },
    {
      kind: 'p',
      text: 'Other platforms name these settings differently, and the checks stay the same. Each cause is a check on one of 4 things: whether the list or event fired, whether the shopper was allowed in, whether the message was live and unfiltered, and whether the content held.',
    },

    { kind: 'h2', id: 'cost', text: 'What one silent flow costs in a month' },
    {
      kind: 'p',
      text: 'Pick a month when the flow worked, open its analytics and note 3 numbers.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Delivered:** the messages the flow delivered in that 30 days.',
        '**Placed Order rate:** the conversion rate on the same snapshot, which [Klaviyo sets to Placed Order rate by default](' +
          ANALYTICS +
          ').',
        '**Your average order,** from your store’s reports.',
      ],
    },
    {
      kind: 'p',
      text: 'Multiply the 3 together, then multiply by 0.5. That is the low end of what one month of silence costs you. The same snapshot shows the revenue attributed to the flow, and the product should land near it.',
    },
    {
      kind: 'p',
      text: 'The 0.5 is deliberately low. Attributed revenue includes shoppers who would have bought without the email, so half is the figure to plan on. Welcome, basket and checkout each have their own sum.',
    },

    { kind: 'h2', id: 'by-hand', text: 'Where checking by hand stops' },
    {
      kind: 'p',
      text: 'For one store that changes rarely, you don’t need a tool. One clean run now, and one after each change to a theme, form, flow, app or discount, is the whole routine. Beyond that, the method has 4 limits.',
    },
    {
      kind: 'list',
      items: [
        '**One inbox, one moment.** A pass on Tuesday says nothing about the theme published on Thursday.',
        '**No history.** A shopper who signed up during a silent week got nothing, and a test run now can’t show it.',
        '**Screenshots are weak proof.** The email, with its arrival time, settles an argument. A screenshot starts one.',
        '**Scale.** One store is an afternoon with a wait in the middle. Twenty client stores every week is a job.',
      ],
    },
    {
      kind: 'p',
      text: 'Obsession’s AI test customers do this on your store. They [shop it as new customers](' +
        LEAKS +
        ') every week and after every change, and every leak comes back with proof and the fix. [Delivery monitoring](' +
        DELIVERY +
        ') proves every email, text and login code arrives.',
    },
    {
      kind: 'cta',
      text: 'Want the stranger test run for you every week and after every change? Obsession’s AI agents shop your store as new customers, and every leak comes back with proof and the fix.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'inheriting', text: 'Inheriting a client’s account: read the history, then run the test' },
    {
      kind: 'p',
      text: 'A strategist who takes over a flow stack inherits every change made to it. Klaviyo’s flow history shows what changed, who changed it and when ([Klaviyo Help](' +
        LIST_TROUBLE +
        ')). Set those dates beside the month sales went quiet, then work down the stack.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Check every message’s status: Live, Manual or Draft.',
        'Open Recipient activity on each message and read the Skipped reasons.',
        'Run the stranger test on 3 journeys: sign up, basket, checkout. Add the control address.',
        'Send the client the emails as they arrived, with their times, and the journeys where nothing came.',
      ],
    },
    {
      kind: 'p',
      text: 'Run it on a client’s store with the client’s OK, and on a prospect only through the public sign up any customer can use.',
    },
    {
      kind: 'cta',
      text: 'Test customers shop each client’s store with the client’s OK and bring back what arrived, what never did, and the screenshots. Each report lands within 4 days.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'before-the-freeze', text: 'Run it before the freeze, not on the morning of the sale' },
    {
      kind: 'p',
      text: 'Black Friday is Friday 27 November 2026 and Cyber Monday is Monday 30 November. Freezes close about 20 November. Run the 3 journeys before yours, and again the evening before the sale goes live. A silent flow found before the freeze costs you a fix. Found on the 27th, it costs you the sale.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Why is my Klaviyo flow not sending?',
          a: 'The list or event never starts the flow, the shopper is filtered out or already in it, the message is on Draft or Manual, Smart Sending skips it, or a code can’t be made. Read the Skipped reason in the message’s Recipient activity.',
        },
        {
          q: 'Why is my abandoned cart flow not triggering?',
          a: 'Check the trigger event reaches Klaviyo: open the metric and your test profile’s timeline. Checkout Started needs a valid email or phone from Shopify. Added to Cart needs an identified shopper, the app embed and Track behavioral events.',
        },
        {
          q: 'Why is my welcome email not sending to new subscribers?',
          a: 'Check the form feeds the list the flow triggers from, that double opt in isn’t holding the shopper until they confirm, and that the profile hasn’t already entered the flow, since list triggered flows default to No reentry.',
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
          q: 'How do I test a welcome or basket flow without fooling myself?',
          a: 'Use a new address for every run. Sign up or leave a basket, record the time, and after 48 hours log what arrived and when. Then send a second new address one plain campaign: if it arrives and the flow email never did, the fault is in the flow.',
        },
        {
          q: 'Do the same checks work on other platforms?',
          a: 'Yes. The test is something a customer does, so it works on any store and any platform. Use your platform’s own help for the names of each setting.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every platform rule here was read in the vendor’s own help pages on 23 October 2026: Klaviyo Help (page updates dated 22 October 2026 or earlier) and the Shopify Help Center. Joy Joya’s count and the Klaviyo Community threads were opened the same day. The r/Klaviyo post was checked on 3 October 2026, because Reddit could not be reopened on 23 October. We tested none of these causes on a live store, and the list is not ranked by how often each happens, because nobody has measured that. Help pages change, so check the page before you act.',
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
    { title: 'Abandoned checkouts', publisher: 'Shopify Help Center', url: SH_ABANDONED, date: 'Checked 23 Oct 2026' },
    { title: 'Migrate to the abandoned checkout automation', publisher: 'Shopify Help Center', url: SH_MIGRATE, date: 'Checked 23 Oct 2026' },
    { title: 'Create a marketing automation', publisher: 'Shopify Help Center', url: SH_AUTO_CREATE, date: 'Checked 23 Oct 2026' },
    { title: 'Amount off products discounts', publisher: 'Shopify Help Center', url: SH_DISCOUNT, date: 'Checked 23 Oct 2026' },
    { title: 'Discounts FAQ', publisher: 'Shopify Help Center', url: SH_FAQ, date: 'Checked 23 Oct 2026' },
    { title: 'Flows Stopped Working', publisher: 'Klaviyo Community', url: K_ZERO, date: '2024-10-01' },
    { title: 'All my flows have stopped working', publisher: 'Klaviyo Community', url: K_THEME, date: '2024-03-29' },
    { title: 'Klaviyo not sending welcome series emails from flow', publisher: 'r/Klaviyo', url: R_DUMMY, date: '2026-02-21' },
    { title: 'Sample output: the September store check', publisher: 'Obsession', url: SAMPLE, date: 'Run 22 to 24 Sep 2026' },
    { title: 'Leak checks for ecommerce stores', publisher: 'Obsession', url: 'https://useobsession.com/use-cases/leak-checks-for-ecommerce-stores', date: 'Checked 23 Oct 2026' },
    { title: 'Delivery monitoring', publisher: 'Obsession', url: 'https://useobsession.com/recipes/delivery-monitoring', date: 'Checked 23 Oct 2026' },
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
