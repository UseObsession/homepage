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
const CHATGPT_CLOUD = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'
const CHATGPT_TASKS = 'https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt'
const CLAUDE_GMAIL = 'https://claude.com/docs/connectors/google/gmail'
const IWD = 'https://www.iwdagency.com/blogs/news/ecommerce-migration-checklist/'
const K_THEME = 'https://community.klaviyo.com/marketing-30/all-my-flows-have-stopped-working-2-weeks-11305'
const R_AGENCY = 'https://www.reddit.com/r/agency/comments/1s4iwpc/i_kept_losing_clients_who_couldnt_see_what_they/'
const SAMPLE = 'https://useobsession.com/sample-output'

export const post: BlogPost = {
  slug: 'black-friday-checklist-new-customer',
  title: 'The Black Friday checklist: 12 tests to run as a new customer',
  dek: '12 tests to run from a new email address and phone before Friday 27 November, in the order a shopper meets each step, with what a pass looks like, where to look when a test fails and the limits of testing by hand.',
  metaTitle: 'Black Friday checklist: 12 tests to run as a new customer',
  description:
    'Test your store the way a new customer meets it before Black Friday: the pop up, welcome code, texts, basket and checkout reminders, ads, chat and orders.',
  answer:
    'To check a store before Black Friday, test it as a new customer: from an email address and phone number your store has never seen, sign up through the pop up, check that the welcome email and its code arrive and that the code works at checkout, opt in to texts, leave a basket and a checkout, and wait for each reminder. Run the 12 tests before your code freeze, again after any theme, app or flow change, and on the morning the sale goes live. Obsession’s AI customers run these tests as real new customers of your store every week and after every change, and keep every email, code and page as proof.',
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
  updated: '2026-10-28',
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
      text: 'Store owners, growth leads and the retention and CRO agencies that check client stores can use these 12 tests to see what a new customer receives before Black Friday, on Friday 27 November 2026, and Cyber Monday, on Monday 30 November.',
    },
    {
      kind: 'p',
      text: 'Run the tests in the order a shopper meets each step. Each test takes minutes to start. Most of the time goes on waiting for emails and texts, so start them together.',
    },
    {
      kind: 'p',
      text: '[A check of a UK skincare store](' +
        SAMPLE +
        ') begun on 22 September 2026 found no reminder within 48 hours for either a £40 gift set left in the basket or a £21 deodorant left at checkout. A dashboard reports the flows you set up and the emails you sent, so it would show neither gap. [Customer journey testing](/blog/ai-customers-find-revenue-leaks) looks for gaps like these.',
    },
    {
      kind: 'stat',
      value: '+59%',
      label: 'median Meta CPM in Black Friday week 2025 against September, across $22.6M of ad spend',
      source: 'Lebesgue, October 2026',
      href: LEBESGUE,
    },
    {
      kind: 'p',
      text: 'Higher click prices make every broken step in the path more expensive. [A welcome email that fails to send](/blog/welcome-basket-email-not-sending) raises no error. The flow report shows a zero, which is easy to miss until the month’s numbers come in.',
    },
    {
      kind: 'p',
      text: '[A July 2026 test of 362 ecommerce brands](' +
        JOYJOYA +
        ') by Joy Joya, using new email addresses and phone numbers, found that 158 sent no welcome email, 53 never sent the text they promised and 20 sent an offer that didn’t match the pop up. Automated flows were 5.3% of email sends and nearly 41% of email revenue in [Klaviyo’s 2026 benchmarks](' +
        KLAVIYO_BENCH +
        ').',
    },
    {
      kind: 'stat',
      value: '43.6%',
      label: 'of 362 ecommerce brands never sent a new subscriber a welcome email',
      source: 'Joy Joya, July 2026',
      href: JOYJOYA,
    },

    { kind: 'h2', id: 'before-you-start', text: 'Set up a new test customer' },
    {
      kind: 'p',
      text: 'Test with an identity your store has never seen. Your own login won’t work as a test account, because your store knows you, your email platform already has a profile for you, and your discounts and flows treat you as staff or as a past buyer. Set up these 5 things first.',
    },
    {
      kind: 'list',
      items: [
        '**A new email address** that has never subscribed, ordered or been used by your team. Use a Gmail address so that you can also see which tab each email lands in.',
        '**A phone number that can receive texts** and has never opted in to your texts.',
        '**A private browser window on your phone,** logged out of your store and its admin. Test on the phone first, then on a laptop.',
        '**A sheet with 4 columns:** the step, the time you did it, what arrived and when, and a screenshot.',
        '**A note to whoever reports your numbers,** giving the test address so that it stays out of them.',
      ],
    },
    {
      kind: 'note',
      title: 'Use a new address for every run',
      text: '[Klaviyo’s help centre](' +
        SMART_SENDING +
        ') says Smart Sending skips a flow email when the same person received another email within its window, 16 hours by default, and that the skipped email is not sent later. An address that received yesterday’s campaign can therefore make a working basket reminder look broken. Other platforms have similar rules, so start each run with a new address.',
    },

    { kind: 'h2', id: 'the-tests', text: 'The 12 tests, in the order a shopper meets them' },
    {
      kind: 'table',
      caption: 'The 12 tests',
      cols: ['#', 'Test', 'A pass looks like', 'Wait for'],
      rows: [
        ['1', 'Sign up through the pop up', 'The form submits on your phone and shows its offer', 'Seconds'],
        ['2', 'The welcome email', 'It arrives with the exact code the pop up promised', 'Minutes'],
        ['3', 'The code at checkout', 'It applies to sale prices the way you planned', 'Seconds'],
        ['4', 'Text opt in and STOP', 'A confirmation text arrives, and STOP ends the texts', 'Minutes'],
        ['5', 'Browse and leave', 'The browse email names what you viewed', 'Your flow’s delay'],
        ['6', 'Leave a basket', 'A basket reminder with the product, its photo and its price', 'Your flow’s delay'],
        ['7', 'Leave checkout', 'Exactly 1 checkout reminder', 'Your flow’s delay'],
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
        status: { tone: 'fail', text: '2 fails' },
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
      text: 'Wait for the pop up as a visitor would, enter the new address and submit the form. **A pass:** the form submits, the thank you message shows the offer the pop up promised and, if you use double opt in, the confirmation email arrives and its link works. **If it fails,** check that the form still feeds the right list, how the form displays on a small screen, and what has changed on the site since it last worked.',
    },

    { kind: 'h3', id: 'welcome-email', text: '2. The welcome email arrives with the promised code' },
    {
      kind: 'p',
      text: 'Record the minutes from submitting the form to the email arriving, and compare the code and its terms with what the pop up showed. Note the Gmail tab as well. Promotions is a tab inside the inbox, and spam is a separate folder. A new address shows how 1 inbox sorted the email, so record the tab as an observation about that inbox. **If nothing arrives,** check that the flow starts from the list the form feeds, whether double opt in is holding the new profile back, and whether the address already existed as a profile, which can keep it out of a welcome flow.',
    },

    { kind: 'h3', id: 'code-at-checkout', text: '3. The welcome code works at checkout on Black Friday prices' },
    {
      kind: 'p',
      text: 'On your phone, put a sale item in the basket and enter the welcome code. **A pass:** the code applies, and it either stacks with the sale price or is refused, as you planned, in every market and currency you sell to. Check that the code hasn’t reached a usage limit or an end date set months ago. If your discounts ran on Shopify Scripts, those [stopped running on 30 June 2026](' +
        SCRIPTS +
        ') and now need Shopify Functions or an app, so test every custom discount again.',
    },

    { kind: 'h3', id: 'texts', text: '4. The text opt in sends a confirmation, and STOP works' },
    {
      kind: 'p',
      text: 'Opt in with the new phone number. **A pass:** a confirmation text arrives and names your store, and replying STOP removes the number with no further texts. Note when each text arrives in the shopper’s time zone. Rules on consent and quiet hours differ by country and by US state, so check yours with your text platform or a lawyer. This checklist is not legal advice.',
    },

    { kind: 'h3', id: 'browse', text: '5. Browse and leave, if you run a browse email' },
    {
      kind: 'p',
      text: 'View 2 products and leave without adding either to the basket. **A pass:** the browse email arrives after the delay you set and names the products you viewed. Then check how the flows interact: a shopper who has left a basket should receive the basket reminder and no browse email.',
    },

    { kind: 'h3', id: 'basket', text: '6. Leave a basket' },
    {
      kind: 'p',
      text: 'Add 1 product to the basket and leave. **A pass:** the basket reminder arrives after your flow’s delay with the product’s name, photo and price filled in, and its link restores the basket. Look for blank fields, because an empty product table makes the store look broken. **If nothing arrives,** check that the event that starts the flow is still being recorded, then the flow’s filters and Smart Sending. Theme changes are a common cause.',
    },
    {
      kind: 'quote',
      text: 'All my flows have stopped working. We upgraded our shopify theme.',
      cite: 'A store owner on the Klaviyo Community, March 2024',
      href: K_THEME,
    },

    { kind: 'h3', id: 'checkout', text: '7. Start checkout and stop before paying' },
    {
      kind: 'p',
      text: 'Enter the new address at checkout, tick the marketing box if you show one, and leave before payment. **A pass:** exactly 1 checkout reminder arrives. Check which tool sends it, Shopify’s own abandoned checkout email or your email platform’s flow, because if both are switched on the shopper receives 2. Then set how Smart Sending treats this email in Black Friday week: it can skip the afternoon reminder for a shopper who received your morning campaign, unless you switch it off on that email.',
    },

    {
      kind: 'note',
      title: 'Estimating the cost of a missing basket reminder',
      text: 'Multiply last year’s baskets left in Black Friday week by the share your basket reminder recovered (your flow report shows it) and by your average order value. Halve the recovery share first to keep the estimate conservative. The result is the revenue a missing basket reminder would lose in that week, before counting the ad spend that brought those shoppers in.',
    },

    { kind: 'h3', id: 'price-match', text: '8. The Black Friday price matches from the ad to checkout' },
    {
      kind: 'p',
      text: 'Follow your Black Friday ad to the landing page, the product page, the basket and checkout. **A pass:** the same price, offer and dates appear at every step on your phone, with the sale price shown against the old price wherever you intended. A banner that promises 30% off and a checkout that applies 20% is the kind of mismatch to look for.',
    },

    { kind: 'h3', id: 'ad-pages', text: '9. Every live ad lands on a working page' },
    {
      kind: 'p',
      text: 'On your phone, open the link of each live ad in turn. **A pass:** the page loads, the product is in stock and the offer matches the ad. Ads can keep running after a product sells out, until your feed or catalogue catches up. If you run Google’s AI Max, [Final URL expansion is on by default](' +
        FINAL_URL +
        ') and can send clicks to other pages on your site. [The landing pages report shows which pages Google chose](/blog/where-your-ads-land-morning-check), and URL exclusions limit them. An [ad landing check](/recipes/ad-landing-check) runs this test every morning.',
    },

    { kind: 'h3', id: 'test-order', text: '10. Place a test order' },
    {
      kind: 'p',
      text: 'Shopify offers [3 ways to place one](' +
        TEST_ORDERS +
        '): its test payment gateway, Shopify Payments test mode, or a real order that you cancel and refund straight away, which also tests your live payment provider and may cost a fee. **A pass:** the order confirmation email arrives, the thank you page shows the right order, and the shipping email arrives when you mark the order fulfilled. Turn test mode off afterwards, because customers can’t place real orders while it is on.',
    },

    { kind: 'h3', id: 'chat', text: '11. Ask your chat what customers will ask this month' },
    {
      kind: 'p',
      text: 'Ask it 3 questions: the last day to order for delivery before Christmas, how long a customer has to return a sale item, and whether the welcome code works on sale prices. **A pass:** every answer matches this season’s policy pages. [A bot set up last year can still quote last year’s dates](/blog/test-store-chatbot-returns-policy). If your chat is an AI, it should say so: the EU AI Act’s [transparency duties for chatbots](' +
        AI_ACT_50 +
        ') have applied since 2 August 2026. A [support bot check](/recipes/support-bot-check) asks these questions every day.',
    },

    { kind: 'h3', id: 'account', text: '12. Create an account and reset the password' },
    {
      kind: 'p',
      text: 'Create an account with the new address, log out and request a password reset. **A pass:** both emails arrive within minutes and both links work. These emails can break after a migration or a checkout change, and [the failures tend to surface weeks later](' +
        IWD +
        ') as customer complaints.',
    },

    { kind: 'h2', id: 'when-to-run', text: 'When to run the tests' },
    {
      kind: 'list',
      items: [
        '**Before your freeze.** Set a freeze date for code, apps and flows, and run all 12 tests before it.',
        '**After every change.** A new theme, app, discount or flow edit can stop emails, so run the tests again the same day.',
        '**The evening the sale goes live, and on Black Friday morning.** Codes, banners and prices change at the last minute.',
        '**On Cyber Monday morning,** if your offer changes for the day.',
      ],
    },
    {
      kind: 'p',
      text: 'If you freeze everything this week and change nothing until December, 1 full run now and 1 on Black Friday morning are enough.',
    },
    {
      kind: 'p',
      text: 'If you send a high volume of email that week, check your sending setup as well. Google’s [sender guidelines](' +
        GMAIL_SENDERS +
        ') say Gmail has been ramping up enforcement against senders who don’t meet them since November 2025.',
    },

    { kind: 'h2', id: 'what-it-cant-tell-you', text: 'Limits of testing by hand' },
    {
      kind: 'p',
      text: 'Testing by hand may be all 1 store needs. Before you report a result, allow for these 4 points.',
    },
    {
      kind: 'list',
      items: [
        '**A result covers 1 inbox at 1 moment.** A pass on Tuesday shows the flow worked on Tuesday, so test again on Black Friday morning.',
        '**A missing email needs a second address to diagnose.** If no welcome email arrived, check whether a second new address received your newsletter. If it did, your sending works and the fault is in the flow. If neither address received anything, check the form or your sending first.',
        '**A Gmail tab is 1 inbox’s view.** Gmail can sort the same email into a different tab for a new subscriber and for a long time customer.',
        '**The original email is stronger proof than a screenshot.** Save the email itself, which carries its arrival time and sender check, as well as the screenshot.',
      ],
    },
    {
      kind: 'p',
      text: 'AI assistants can do some of the clicking. [ChatGPT’s cloud browser](' +
        CHATGPT_CLOUD +
        ') can fill in a form and pauses for you at a sign in, and [Claude can read your inbox](' +
        CLAUDE_GMAIL +
        ') through its Gmail connector. Both run as you, in your browser and your inbox, and their recurring work has caps: ChatGPT allows [3 to 15 active scheduled tasks](' +
        CHATGPT_TASKS +
        '), run at most hourly. None of the help pages we read covers keeping each store’s emails as evidence.',
    },
    {
      kind: 'p',
      text: 'For 1 store, a new inbox and an assistant that summarises what arrived cover the tests. For 20 client stores every week, the task caps and the lack of stored emails limit the method. We make Obsession, so every line about another tool is taken from that tool’s own pages, checked on 23 October 2026. Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your rivals and prospect with proof. To run the 12 tests on many stores every week, use Obsession.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s AI customers run all 12 tests as new customers every week and after every change, and keep every email as it arrived. Your first store check is free.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'for-agencies', text: 'Running the tests on client and prospect stores' },
    {
      kind: 'p',
      text: 'Run the tests on a client’s store with the client’s OK, and on a prospect’s store only through the public sign up any customer can use. Report the email itself, or the 48 hours in which nothing arrived, with the times recorded.',
    },
    {
      kind: 'p',
      text: 'A weekly run of the 12 tests on every client store gives each client a report they can check for themselves. It answers a problem [an agency owner on r/agency](' +
        R_AGENCY +
        ') described: losing clients who couldn’t see what they were paying for. Before a pitch, the same tests on a prospect’s public sign up give you an opening line the prospect can check.',
    },
    {
      kind: 'cta',
      text: 'Obsession checks 5 client stores free: its AI customers sign up, leave a basket and stop at checkout at each store, then watch every inbox for 48 hours and report what arrived and what did not.',
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
          a: 'You can test checkout without one. Shopify’s test payment gateway checks checkout, inventory, shipping, email notifications and taxes without charging anyone. A real order that you cancel and refund at once also tests your live payment provider, which may charge a fee.',
        },
        {
          q: 'Will test sign ups skew my Black Friday numbers?',
          a: 'A handful of test sign ups won’t move them. Tell whoever reports your numbers which addresses you used so that they can leave them out, and delete the test profiles afterwards.',
        },
        {
          q: 'Is landing in the Promotions tab a problem?',
          a: 'Promotions is a tab inside the Gmail inbox, so an email there has reached the inbox, and spam is a separate folder. Record the tab your new address saw, because a long time customer’s inbox may sort the same email differently.',
        },
        {
          q: 'How long should I wait for each reminder?',
          a: 'Wait for your flow’s own delay plus an hour or two for sending. Give every test a deadline, such as 48 hours, and record the email as missing once the deadline passes.',
        },
        {
          q: 'Can ChatGPT or Claude run these tests for me?',
          a: 'An assistant can do part of the work: it can fill in forms and summarise the emails that reach an inbox you connect. It runs in your browser and your inbox within its plan’s caps and doesn’t keep each store’s emails as evidence, so it suits 1 store better than a list of clients.',
        },
        {
          q: 'Do these tests work if I’m not on Shopify or Klaviyo?',
          a: 'Yes. Every test is something a customer does, so it works on any store and any email platform. When a test fails, look for the cause in your own platform’s settings.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'The store owner’s and agency owner’s words come from public threads, linked where they appear. The only result of our own is the September store check, shown in full on our sample output page.',
    },
  ],

  sources: [
    { title: 'Are Meta Ads Worth It on Black Friday? CPM and ROAS data', publisher: 'Lebesgue', url: LEBESGUE, date: '2026-10' },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: KLAVIYO_BENCH, date: '2026' },
    { title: 'Understanding Smart Sending in Klaviyo', publisher: 'Klaviyo Help Center', url: SMART_SENDING },
    { title: 'Shopify Scripts will be deprecated on June 30, 2026', publisher: 'Shopify developer changelog', url: SCRIPTS },
    { title: 'Placing test orders', publisher: 'Shopify Help Center', url: TEST_ORDERS },
    { title: 'About Final URL expansion in Search', publisher: 'Google Ads Help', url: FINAL_URL },
    { title: 'Email sender guidelines FAQ', publisher: 'Google Workspace Admin Help', url: GMAIL_SENDERS },
    { title: 'Article 50: transparency obligations', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_50 },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: CHATGPT_CLOUD },
    { title: 'Scheduled tasks in ChatGPT', publisher: 'OpenAI Help Center', url: CHATGPT_TASKS },
    { title: 'Gmail connector', publisher: 'Claude docs', url: CLAUDE_GMAIL },
    { title: 'Ecommerce migration checklist', publisher: 'IWD Agency', url: IWD },
    { title: 'All my flows have stopped working', publisher: 'Klaviyo Community', url: K_THEME, date: '2024-03-29' },
    { title: 'I kept losing clients who couldn’t see what they were paying for', publisher: 'r/agency', url: R_AGENCY, date: '2026' },
    { title: 'Sample output: the September store check', publisher: 'Obsession', url: SAMPLE, date: '2026-09' },
  ],

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
