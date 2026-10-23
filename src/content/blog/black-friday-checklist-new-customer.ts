import type { BlogPost } from './types'

/* Post 6 (Content and Search Plan, 23 Oct 2026): the Black Friday checklist, run as a new customer. Readers: Shopify
   and DTC store owners and growth leads, and the retention and CRO agencies that check client stores before the freeze.
   Picked first because it ranked top in both research libraries (_research/seo/library/ads_pages_journeys.json and
   email_sms_lens.json: demand 4, pain 5, urgency 5, fit 5) and needs no data we don't have yet.
   Thought leadership, not a review: the full method is given free, so a reader can run every test by hand; the product
   appears only where the by-hand method stops, and in the 2 quiet links. Every rule was read at its source on 23 Oct
   2026 (Shopify Help and changelog, Klaviyo Help, Google Ads Help, Google's sender FAQ, the OpenAI and Claude help pages,
   the European Commission's AI Act service desk). Store owners' words are short quotes from public threads, linked.
   The only Obsession result cited is the September store check on /sample-output, as the site states it. Not used, on
   purpose: the 93% and 128 stores (base to confirm with James), any PilotX audit figure, and the illustrative $410 lamp.
   Buyer words (sign up, welcome email, basket, pop up, Promotions tab); no dashes. */

const LEBESGUE = 'https://lebesgue.io/?p=15192'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const KLAVIYO_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const SMART_SENDING = 'https://help.klaviyo.com/hc/en-us/articles/115002779311'
const SCRIPTS = 'https://shopify.dev/changelog/posts/shopify-scripts-will-be-deprecated-on-june-30-2026'
const TEST_ORDERS = 'https://help.shopify.com/en/manual/checkout-settings/test-orders'
const FINAL_URL = 'https://support.google.com/google-ads/answer/16230205'
const GMAIL_SENDERS = 'https://support.google.com/a/answer/14229414'
const AI_ACT_50 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50'
const CHATGPT_AGENT = 'https://help.openai.com/en/articles/11752874-chatgpt-agent'
const CHATGPT_TASKS = 'https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt'
const CLAUDE_GMAIL = 'https://claude.com/docs/connectors/google/gmail'
const IWD = 'https://www.iwdagency.com/blogs/news/ecommerce-migration-checklist/'
const R_KLAVIYO = 'https://www.reddit.com/r/Klaviyo/comments/1lcn30l/whats_an_email_mistake_you_made_early_on_that/'
const K_THEME = 'https://community.klaviyo.com/marketing-30/all-my-flows-have-stopped-working-2-weeks-11305'
const R_AGENCY = 'https://www.reddit.com/r/agency/comments/1s4iwpc/i_kept_losing_clients_who_couldnt_see_what_they/'
const SAMPLE = 'https://useobsession.com/sample-output'

export const post: BlogPost = {
  slug: 'black-friday-checklist-new-customer',
  title: 'The Black Friday checklist that starts as a new customer',
  dek: 'Your dashboards show what you sent. A new customer shows you what arrived. 12 tests to run from a fresh inbox and phone before Friday 27 November, in the order a shopper meets them, with what each one can’t tell you.',
  metaTitle: 'Black Friday checklist: 12 tests to run as a new customer',
  description:
    'Test your store the way a new customer meets it before Black Friday: the pop up, welcome code, texts, basket and checkout reminders, ads, chat and orders.',
  answer:
    'To check a store before Black Friday, test it as a brand new customer: from an email address and phone number that have never bought from you, sign up through the pop up, check the welcome email and its code arrive and the code works at checkout, opt in to texts, leave a basket and a checkout, and wait for each reminder. Run the 12 tests before your code freeze, again after any theme, app or flow change, and on the morning the sale goes live.',
  primaryKeyword: 'black friday checklist',
  keywords: [
    'shopify black friday checklist',
    'bfcm checklist',
    'klaviyo bfcm checklist',
    'black friday email checklist',
    'test welcome flow before black friday',
    'abandoned cart email not sending',
    'test discount code shopify',
    'how to test abandoned cart flow',
    'when is black friday 2026',
  ],
  category: 'Check your own journeys',
  published: '2026-10-23',
  updated: '2026-10-23',
  readingMinutes: 9,
  order: 0,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'ship',
    workspace: 'company',
    image: {
      src: '/blog/black-friday-checklist-new-customer/hero-1760.webp',
      thumb: '/blog/black-friday-checklist-new-customer/thumb-640.webp',
      alt: 'Hands smoothing tissue paper into an open order box',
      width: 1760,
      height: 990,
      credit: { name: 'Ron Lach', url: 'https://www.pexels.com/@ron-lach' },
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'On Tuesday 22 September a test shopper put a £40 gift set in a UK skincare store’s basket and left. A second started checkout with a £21 deodorant and left before paying. 48 hours later, neither had heard a thing ([the September store check](' +
        SAMPLE +
        ')). Nothing in a dashboard shows that. A dashboard shows what you set up and what you sent; only a customer sees what arrived.',
    },
    {
      kind: 'p',
      text: 'Black Friday is Friday 27 November and Cyber Monday is Monday 30 November. Most checklists for the week start inside your dashboards: flows switched on, segments built, templates approved. This one starts where your customer does, with a new email address, a phone and a basket.',
    },
    {
      kind: 'stat',
      value: '+59%',
      label: 'median Meta CPM in Black Friday week 2025 against September, across $22.6M of ad spend',
      source: 'Lebesgue (vendor data), October 2026',
      href: LEBESGUE,
    },
    {
      kind: 'p',
      text: 'Every click costs more that week, so every break in the path costs more too. And the breaks that cost most are quiet. A welcome email that never sends doesn’t raise an error. It sends nothing, and the flow report shows a zero that nobody opens until the month is over.',
    },
    {
      kind: 'quote',
      text: 'It sort of killed revenue quietly for weeks.',
      cite: 'A store owner on r/Klaviyo, June 2025, on a setting that held back basket reminders',
      href: R_KLAVIYO,
    },
    {
      kind: 'p',
      text: 'It isn’t rare. When [Joy Joya signed up to 362 ecommerce brands](' +
        JOYJOYA +
        ') with fresh email addresses and phone numbers in July 2026, 158 never sent a welcome email, 53 never sent the text they promised, and 20 sent an offer that didn’t match the pop up. And these are the emails that earn: automated flows were 5.3% of email sends in [Klaviyo’s 2026 benchmarks](' +
        KLAVIYO_BENCH +
        ') and nearly 41% of email revenue.',
    },
    {
      kind: 'stat',
      value: '43.6%',
      label: 'of 362 ecommerce brands never sent a new subscriber a welcome email',
      source: 'Joy Joya, July 2026',
      href: JOYJOYA,
    },
    {
      kind: 'p',
      text: 'The way to find these breaks is old and cheap: become a customer your store has never met, and walk it the way they will. Below are the 12 tests in the order a shopper meets them, what a pass looks like, and where to look when one fails. Each takes minutes. The waiting is the long part, so start them together.',
    },

    { kind: 'h2', id: 'before-you-start', text: 'Before you start: be a customer your store has never seen' },
    {
      kind: 'p',
      text: 'Your own login is the worst test account you have. Your store knows you, your email platform already has a profile for you, and your discounts and flows treat you as staff or as a past buyer. Set up a stranger instead.',
    },
    {
      kind: 'list',
      items: [
        '**A new email address** that has never subscribed, ordered or been used by your team. Use a Gmail address, so you also see which tab each email lands in.',
        '**A phone number that can receive texts** and has never opted in to yours.',
        '**A private browser window on your phone,** not logged in to your store or its admin. Test on the phone first, then on a laptop.',
        '**A sheet with 4 columns:** the step, the time you did it, what arrived and when, and a screenshot.',
        '**A note to whoever reports your numbers,** with the address, so your tests stay out of them.',
      ],
    },
    {
      kind: 'note',
      title: 'Use a new address for every run',
      text: 'Klaviyo’s Smart Sending skips a flow email when the same person received another email within the window, 16 hours by default, and a skipped email isn’t sent later ([Klaviyo Help](' +
        SMART_SENDING +
        ')). An address that got yesterday’s campaign can make a working basket reminder look broken. Other platforms have similar rules, so start each run clean.',
    },

    { kind: 'h2', id: 'the-tests', text: 'Every test, in the order a shopper meets it' },
    {
      kind: 'table',
      caption: 'The 12 tests at a glance',
      cols: ['#', 'Test', 'A pass looks like', 'Wait for'],
      rows: [
        ['1', 'Sign up through the pop up', 'The form submits on your phone and shows its offer', 'Seconds'],
        ['2', 'The welcome email', 'It arrives with the exact code the pop up promised', 'Minutes'],
        ['3', 'The code at checkout', 'It applies to sale prices the way you planned', 'Seconds'],
        ['4', 'Text opt in and STOP', 'A confirmation text arrives, and STOP ends the texts', 'Minutes'],
        ['5', 'Browse and leave', 'The browse email names what you viewed', 'Your flow’s delay'],
        ['6', 'Leave a basket', 'A reminder with the product, its photo and its price', 'Your flow’s delay'],
        ['7', 'Leave checkout', '1 checkout reminder, not 2 and not none', 'Your flow’s delay'],
        ['8', 'The price, ad to checkout', 'The same price and offer on every page', 'Minutes'],
        ['9', 'Every live ad’s page', 'In stock, the right product, the right offer', 'Minutes an ad'],
        ['10', 'A test order', 'The confirmation and shipping emails arrive', 'Minutes'],
        ['11', 'What customers ask your chat', 'Every answer matches this season’s policies', 'Minutes'],
        ['12', 'Account and password reset', 'Both emails arrive and both links work', 'Minutes'],
      ],
    },
    {
      kind: 'art',
      caption: 'A morning’s test run on an invented store, logged the way your sheet should read: what you did, when, and what came back.',
      art: {
        kind: 'log',
        title: 'fernwood.example · test customer, new Gmail address and phone',
        who: 'Tuesday 3 November, on a phone, logged out',
        status: { tone: 'fail', text: '2 leaks' },
        rows: [
          { time: '09:00', text: 'Signed up through the pop up', detail: 'It promised 15% off the first order', tone: 'ok' },
          { time: '09:04', text: 'Welcome email arrived with code FERN15', detail: 'Promotions tab, 4 minutes after sign up', tone: 'ok' },
          { time: '09:06', text: 'FERN15 refused on a sale candle', detail: 'The pop up said nothing about sale items', tone: 'fail' },
          { time: '09:09', text: 'Text opt in confirmed', detail: 'STOP removed the number at 09:11', tone: 'ok' },
          { time: '09:15', text: 'Basket left: Fig & Cedar, £34', detail: 'No reminder by Thursday 09:15', tone: 'fail' },
          { time: '09:20', text: 'Checkout left, reminder at 10:20', detail: '1 reminder, from the email platform only', tone: 'ok' },
        ],
        foot: 'The 2 fails go to whoever owns them: the code’s terms to the promotions lead, the basket flow to the email platform’s owner.',
      },
    },

    { kind: 'h3', id: 'pop-up', text: '1. Sign up through the pop up, on your phone' },
    {
      kind: 'p',
      text: 'Wait for the pop up the way a visitor would, enter the new address and submit. **A pass:** the form submits, the thank you message shows the offer it promised, and if you use double opt in, the confirmation email arrives and its link works. **If it fails,** check the form still feeds the right list, how it looks on a small screen, and what changed on the site since it last worked.',
    },

    { kind: 'h3', id: 'welcome-email', text: '2. The welcome email arrives, with the code it promised' },
    {
      kind: 'p',
      text: 'Write down the minutes from submit to inbox, and compare the code and its terms with what the pop up showed. Note the tab too. Promotions is a tab in the inbox, not spam, and 1 new address shows 1 inbox’s view, so record what you saw rather than a verdict. **If nothing arrives,** check the flow starts from the list the form feeds, whether double opt in is holding the new profile back, and whether the address already existed as a profile, which can keep it out of a welcome flow.',
    },

    { kind: 'h3', id: 'code-at-checkout', text: '3. The welcome code works at checkout, on Black Friday prices' },
    {
      kind: 'p',
      text: 'Put a sale item in the basket and add the welcome code, on your phone. **A pass:** the code applies, and it either stacks with the sale or is refused, exactly as you planned, in every market and currency you sell to. Check it hasn’t reached a usage limit or an end date set months ago. If your discounts ran on Shopify Scripts, those [stopped running on 30 June 2026](' +
        SCRIPTS +
        ') and now need Shopify Functions or an app, so test every custom discount again.',
    },

    { kind: 'h3', id: 'texts', text: '4. The text opt in sends a confirmation, and STOP works' },
    {
      kind: 'p',
      text: 'Opt in with the new number. **A pass:** a confirmation text arrives and names your store, and replying STOP removes the number with no texts after it. Note when each text lands in the shopper’s time zone. The rules on consent and quiet hours differ by country and by US state, so check yours with your text platform or a lawyer. This checklist isn’t legal advice.',
    },

    { kind: 'h3', id: 'browse', text: '5. Browse and leave, if you run a browse email' },
    {
      kind: 'p',
      text: 'View 2 products and leave without adding either. **A pass:** the browse email arrives after the delay you set and names what you looked at. Then check the flows talk to each other: a shopper who has left a basket should get the basket email, not a browse email that asks if they were just looking.',
    },

    { kind: 'h3', id: 'basket', text: '6. Leave a basket' },
    {
      kind: 'p',
      text: 'Add 1 product and leave. **A pass:** the reminder arrives after your flow’s delay, with the product’s name, photo and price filled in, and its link brings the basket back. Watch for blanks: an empty product table reads as a broken store. **If nothing arrives,** check the event that starts the flow is still being recorded, the flow’s filters and Smart Sending. Theme changes are a common cause.',
    },
    {
      kind: 'quote',
      text: 'All my flows have stopped working. We upgraded our shopify theme.',
      cite: 'A store owner on the Klaviyo Community, March 2024',
      href: K_THEME,
    },

    { kind: 'h3', id: 'checkout', text: '7. Start checkout, and stop before paying' },
    {
      kind: 'p',
      text: 'Enter the new address at checkout, tick the marketing box if you show one, and leave before payment. **A pass:** 1 checkout reminder arrives. Check which tool sends it, Shopify’s own abandoned checkout email if it’s on or your email platform’s flow, so a shopper gets 1 reminder, not 2. Then decide on purpose what happens in Black Friday week: a shopper who opened your morning campaign can have the afternoon reminder skipped by Smart Sending, unless you switch it off on that email.',
    },

    {
      kind: 'note',
      title: 'What a silent reminder would cost you',
      text: 'Take last year’s baskets left in Black Friday week, times the share your basket reminder recovered (your flow report has it), times your average order. Then halve the recovery rate, to stay on the low side. That is what one silent reminder would cost you in a single week, before the ad spend that brought those shoppers in.',
    },

    { kind: 'h3', id: 'price-match', text: '8. The Black Friday price is the same from the ad to checkout' },
    {
      kind: 'p',
      text: 'Open your Black Friday ad and follow it to the landing page, the product page, the basket and checkout. **A pass:** the same price, offer and dates at every step, on your phone, with the sale price shown against the old one wherever you meant it to be. A banner that promises 30% and a checkout that takes 20% costs the sale and the shopper’s trust.',
    },

    { kind: 'h3', id: 'ad-pages', text: '9. Every live ad lands on a page that works' },
    {
      kind: 'p',
      text: 'Open the link of every live ad on your phone, not a sample. **A pass:** the page loads, the product is in stock and the offer matches the ad. Ads can keep running after a product sells out until your feed or catalogue catches up. If you run Google’s AI Max, [Final URL expansion is on by default](' +
        FINAL_URL +
        ') and can send clicks to other pages on your site. The landing pages report shows which ones Google chose, and URL exclusions narrow them. An [ad landing check](/recipes/ad-landing-check) does this every morning.',
    },

    { kind: 'h3', id: 'test-order', text: '10. Place a test order' },
    {
      kind: 'p',
      text: 'Shopify gives [3 ways to place one](' +
        TEST_ORDERS +
        '): its test payment gateway, Shopify Payments test mode, or a real order you cancel and refund straight away, which also tests your live payment provider and may cost a fee. **A pass:** the order confirmation arrives, the thank you page loads with the right order, and the shipping email arrives when you mark it fulfilled. Turn test mode off afterwards. While it’s on, customers can’t place real orders.',
    },

    { kind: 'h3', id: 'chat', text: '11. Ask your chat what customers will ask this month' },
    {
      kind: 'p',
      text: 'Ask: what’s the last day to order for delivery before Christmas, how long do I have to return a sale item, and does my welcome code work on sale prices? **A pass:** every answer matches this season’s policy pages. A bot set up last year can still be quoting last year’s dates. If your chat is an AI, it should say so: the EU AI Act’s [transparency duties for chatbots](' +
        AI_ACT_50 +
        ') have applied since 2 August 2026. A [support bot check](/recipes/support-bot-check) asks these questions every day.',
    },

    { kind: 'h3', id: 'account', text: '12. Create an account, then reset the password' },
    {
      kind: 'p',
      text: 'Make an account with the new address, log out and ask for a password reset. **A pass:** both emails arrive within minutes and both links work. These are the emails that break quietly after a migration or a checkout change, and [they tend to surface weeks later](' +
        IWD +
        '), as complaints rather than on launch day.',
    },

    { kind: 'h2', id: 'when-to-run', text: 'When to run them' },
    {
      kind: 'list',
      items: [
        '**Now, before your freeze.** Pick a freeze date for code, apps and flows, and run all 12 before it.',
        '**After every change.** A new theme, app, discount or flow edit is when emails stop, so run the tests again the same day.',
        '**The evening the sale goes live, and Black Friday morning.** Codes, banners and prices change at the last minute.',
        '**Cyber Monday morning,** if your offer changes for the day.',
      ],
    },
    {
      kind: 'p',
      text: 'If you freeze everything this week and change nothing until December, you don’t need a weekly routine: 1 full run now and 1 on Black Friday morning is enough.',
    },
    {
      kind: 'p',
      text: 'If you send a lot of mail that week, check your sending too. Google’s [sender guidelines](' +
        GMAIL_SENDERS +
        ') say Gmail has been ramping up enforcement on senders who don’t meet them since November 2025.',
    },

    { kind: 'h2', id: 'what-it-cant-tell-you', text: 'What a test by hand can’t tell you' },
    {
      kind: 'p',
      text: 'Running these by hand is the right start, and for 1 store it may be all you need. It has 4 limits worth knowing before you report a result to anyone.',
    },
    {
      kind: 'list',
      items: [
        '**1 inbox, 1 moment.** A pass on Tuesday says nothing about Friday.',
        '**Silence needs a control.** If no welcome came, check that a second new address got your newsletter. If it did, your sending works and the flow is the fault. If neither got anything, look at the form or your sending first.',
        '**1 inbox shows 1 view.** A new subscriber’s Gmail tab can differ from a loyal customer’s.',
        '**Screenshots are weak proof.** The email itself, with the time it arrived and its sender check, settles an argument. A screenshot starts one.',
      ],
    },
    {
      kind: 'p',
      text: 'AI assistants can take some of the clicking. [ChatGPT’s agent](' +
        CHATGPT_AGENT +
        ') can fill in a form and pauses for you at a login, and [Claude can read your inbox](' +
        CLAUDE_GMAIL +
        ') through its Gmail connector. Both run as you, in your browser and your inbox, and their recurring work has caps: ChatGPT allows [3 to 15 active scheduled tasks](' +
        CHATGPT_TASKS +
        '), run at most hourly. None of the help pages we read covers keeping each store’s emails as evidence. For 1 store, a new inbox and an assistant to summarise what arrived is a sound method. For 20 client stores every week, it isn’t.',
    },
    {
      kind: 'cta',
      text: 'Want all 12 run for you, every week and after every change? Obsession’s AI test customers do them as new customers and keep every email as it arrived.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'for-agencies', text: 'For agencies: run it on every client, and on the stores you pitch' },
    {
      kind: 'p',
      text: 'Run it on a client’s store with the client’s OK, and on a prospect only through the public sign up any customer can use. The result that lands best is the email itself, or the 48 hours in which nothing came, with the time on it. It answers the question agency owners say costs them clients.',
    },
    {
      kind: 'quote',
      text: 'I kept losing clients who couldn’t see what they were paying for',
      cite: 'An agency owner on r/agency, 2026',
      href: R_AGENCY,
    },
    {
      kind: 'p',
      text: 'A weekly run of these 12 tests on every client store is a report a client can check without taking your word for it. Before a pitch, the same tests on a prospect’s public sign up give you a first line they can check too.',
    },
    {
      kind: 'cta',
      text: 'Our AI test customers sign up, leave a basket and stop at checkout at each store, then watch every inbox for 48 hours and bring back what arrived and what never did.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'When is Black Friday 2026?',
          a: 'Black Friday is Friday 27 November 2026 and Cyber Monday is Monday 30 November 2026.',
        },
        {
          q: 'Should I place a real order to test checkout?',
          a: 'Shopify’s test payment gateway checks checkout, inventory, shipping, email notifications and taxes without charging anyone. A real order that you cancel and refund at once also tests your live payment provider, which may charge a fee.',
        },
        {
          q: 'Will test sign ups skew my Black Friday numbers?',
          a: 'A handful won’t move them. Tell whoever reports your numbers which addresses you used so they can leave them out, and delete the test profiles afterwards.',
        },
        {
          q: 'Is landing in the Promotions tab a problem?',
          a: 'Promotions is a tab in the Gmail inbox, not the spam folder. Record what your new address saw: 1 inbox is 1 view, and a long time customer’s inbox may sort the same email differently.',
        },
        {
          q: 'How long should I wait for each reminder?',
          a: 'Your flow’s own delay, plus an hour or two for sending. Give every test a deadline, such as 48 hours, and count the email as missing once the deadline passes.',
        },
        {
          q: 'Can ChatGPT or Claude run these tests for me?',
          a: 'Partly. An assistant can fill in forms and summarise the emails that reach an inbox you connect. It runs in your browser and your inbox, within its plan’s caps, and doesn’t keep each store’s emails as evidence, so it suits 1 store better than a list of clients.',
        },
        {
          q: 'Do these tests work if I’m not on Shopify or Klaviyo?',
          a: 'Yes. Every test is something a customer does, so it works on any store and any email platform. Only the place you look when a test fails changes.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this list',
      text: 'Every rule here was read at its source on 23 October 2026: Shopify’s test order help and changelog, Klaviyo’s Smart Sending help, Google Ads Help on Final URL expansion, Google’s sender guidelines, the European Commission’s AI Act service desk and the OpenAI and Claude help pages. Store owners’ words come from public threads, linked. The 1 result of our own is the September store check, shown in full on our sample output page.',
    },
  ],

  sources: [
    { title: 'Are Meta Ads Worth It on Black Friday? CPM and ROAS data', publisher: 'Lebesgue', url: LEBESGUE, date: 'October 2026' },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: KLAVIYO_BENCH, date: '2026' },
    { title: 'Understanding Smart Sending in Klaviyo', publisher: 'Klaviyo Help Center', url: SMART_SENDING, date: 'Checked 23 Oct 2026' },
    { title: 'Shopify Scripts will be deprecated on June 30, 2026', publisher: 'Shopify developer changelog', url: SCRIPTS, date: 'Checked 23 Oct 2026' },
    { title: 'Placing test orders', publisher: 'Shopify Help Center', url: TEST_ORDERS, date: 'Checked 23 Oct 2026' },
    { title: 'About Final URL expansion in Search', publisher: 'Google Ads Help', url: FINAL_URL, date: 'Checked 23 Oct 2026' },
    { title: 'Email sender guidelines FAQ', publisher: 'Google Workspace Admin Help', url: GMAIL_SENDERS, date: 'Checked 23 Oct 2026' },
    { title: 'Article 50: transparency obligations', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_50, date: 'Checked 23 Oct 2026' },
    { title: 'ChatGPT agent', publisher: 'OpenAI Help Center', url: CHATGPT_AGENT, date: 'Checked 23 Oct 2026' },
    { title: 'Scheduled tasks in ChatGPT', publisher: 'OpenAI Help Center', url: CHATGPT_TASKS, date: 'Checked 23 Oct 2026' },
    { title: 'Gmail connector', publisher: 'Claude docs', url: CLAUDE_GMAIL, date: 'Checked 23 Oct 2026' },
    { title: 'Ecommerce migration checklist', publisher: 'IWD Agency', url: IWD },
    { title: 'What’s an email mistake you made early on?', publisher: 'r/Klaviyo', url: R_KLAVIYO, date: '2025-06-16' },
    { title: 'All my flows have stopped working', publisher: 'Klaviyo Community', url: K_THEME, date: '2024-03-29' },
    { title: 'I kept losing clients who couldn’t see what they were paying for', publisher: 'r/agency', url: R_AGENCY, date: '2026' },
    { title: 'Sample output: the September store check', publisher: 'Obsession', url: SAMPLE, date: 'Run 22 to 24 Sep 2026' },
  ],

  featured: true,
  related: [
    'recipe:mystery-shopper',
    'recipe:website-audit',
    'recipe:ad-landing-check',
    'recipe:delivery-monitoring',
    '/use-cases/leak-checks-for-ecommerce-stores',
    '/use-cases/leak-checks-for-retention-agencies',
    '/sample-output',
  ],
}
