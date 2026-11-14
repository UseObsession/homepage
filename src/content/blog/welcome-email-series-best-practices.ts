import type { BlogPost } from './types'

/* Guide 5 of the store lookup set (plan and brief: Obsession folder, _research/seo/lookup-articles-14nov/; Seun's go,
   14 Nov 2026: "Yes, build all 5"). Owns "welcome email series best practices" and its 4 secondaries (Google
   autocomplete US and UK, 14 Nov). "Welcome series" as a definition stays with /glossary/welcome-series, linked once.
   Readers: an ecommerce brand's founder, head of ecommerce or CRM lead, and the agencies that do email and retention
   work for brands. The angle: the index shows the welcome is the step stores get right most often (9 in 10 send one,
   most within a minute), so the work sits in the week after it: emails 2 and 3, the code each carries, a follow-up
   code, and a welcome code that stacks with the basket reminder's code.
   Every platform rule was read at its source on 14 Nov 2026: Klaviyo Help (welcome series, updated 24 Oct 2026; unique
   Shopify codes, updated 26 Oct 2026) and Shopify Help (Messaging automations, the Customer subscribed trigger and its
   templates, combining discounts; undated). Joy Joya's 362 brand test (27 Jul 2026) and Omnisend's 2026 report (2025
   sends) were opened the same day. Our figures are the index's totals on 13 Nov 2026 as the live /lookup page shows
   them (content/lookupSample sampleTotals), printed as patterns, never tallies. What Obsession does is said in the live
   /lookup page's words. Every store in the 2 pictures and the examples is invented, at a .example address.
   Not used, on purpose: any figure for second or third welcome emails from the index (it doesn't publish one), any
   ranking of what converts best (no study on disk measures it), any PilotX figure. British English; no dashes. */

const OMNISEND = 'https://www.omnisend.com/resources/reports/2026-ecommerce-marketing-report/'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const KLAVIYO_WELCOME = 'https://help.klaviyo.com/hc/en-us/articles/115002775172'
const SH_AUTOMATIONS = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/marketing-automations/create'
const SH_TEMPLATES = 'https://help.shopify.com/en/manual/shopify-flow/reference/triggers/customer-subscribed'
const KLAVIYO_COUPON = 'https://help.klaviyo.com/hc/en-us/articles/115006155388'
const SH_COMBINE = 'https://help.shopify.com/en/manual/discounts/discount-combinations'

export const post: BlogPost = {
  slug: 'welcome-email-series-best-practices',
  title: 'Welcome email series best practices for ecommerce: what stores send after the first email',
  dek: '9 in 10 online stores in Obsession’s index send a welcome email after a sign-up, most within a minute. For an ecommerce brand, the questions sit in the 7 days after it: emails 2 and 3, and the code each one carries.',
  metaTitle: 'Welcome email series best practices for ecommerce brands',
  description:
    'Welcome email series best practices for ecommerce brands: what to send on days 0, 3, 5 and 7, the code each email carries, and how to test the week.',
  answer:
    'Welcome email series best practices cover an online store’s first 7 days with a new subscriber, starting with a welcome and its code within minutes. Send emails on days 3 and 7, remind subscribers who haven’t ordered before the code ends, and check at checkout whether it stacks with your basket reminder’s code. Obsession keeps what each store sends a new customer after a sign-up, a basket and a checkout, dated, and the store lookup shows your own store’s entry.',
  primaryKeyword: 'welcome email series best practices',
  keywords: [
    'welcome email series best practices',
    'welcome email examples ecommerce',
    'welcome series email flow examples',
    'welcome email series for new subscribers',
    'welcome series email template',
  ],
  category: 'Check your own journeys',
  published: '2026-11-14',
  updated: '2026-11-14',
  readingMinutes: 11,
  order: 5,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'fernlow.example',
      who: 'New subscriber, signed up Mon 2 Nov at 21:14',
      status: { tone: 'fail', text: 'Quiet after day 3' },
      rows: [
        { time: 'Mon 21:14', text: 'Signed up through the pop-up', detail: 'The pop-up promised 10% off the first order', tone: 'info' },
        { time: 'Mon 21:15', text: 'Welcome, code WELCOME10', detail: '1 minute after the sign-up, Primary tab', tone: 'ok' },
        { time: 'Thu 09:00', text: 'Day 3: why we started', detail: 'The founder’s story, no code', tone: 'ok' },
        { time: 'Sat 09:00', text: 'Day 5: no email', detail: 'No best sellers, no code reminder', tone: 'fail' },
        { time: 'Sun 23:59', text: 'WELCOME10 ended, unused', detail: 'No reminder came before it ended', tone: 'fail' },
      ],
      foot: 'The welcome came in a minute, then the series stopped after day 3 and the 10% code ran out with no reminder. fernlow.example is an invented store.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A welcome email series is the set of emails an online store sends a new subscriber in the days after they sign up through a pop-up or a footer form. It is run by an ecommerce brand’s founder, head of ecommerce or CRM lead, or by an agency that does email and retention work for brands. Plan it as 7 days. Send a welcome within minutes with the code the sign-up form promised, a second email around day 3 and a third around day 7. Then send a code reminder to subscribers who haven’t ordered.',
    },
    {
      kind: 'p',
      text: 'The week matters because of where automated orders come from. [Omnisend’s 2026 ecommerce marketing report](' +
        OMNISEND +
        '), built from 150,000 brands’ sends in 2025, found that welcome and abandoned cart messages drove 76% of all orders from automated messages.',
    },
    {
      kind: 'stat',
      value: '76%',
      label: 'of orders from automated messages came from welcome and abandoned cart messages, across 150,000 brands in 2025',
      source: 'Omnisend, 2026 ecommerce marketing report',
      href: OMNISEND,
    },

    { kind: 'h2', id: 'what-stores-send', text: 'What do online stores send a new subscriber?' },
    {
      kind: 'p',
      text: 'Most online stores send the first email fast, and far fewer send anything after a basket or a checkout. In Obsession’s index of what stores send new customers, 9 in 10 stores sent a welcome email after a sign-up as of 13 November 2026, most within a minute. After a basket or a checkout, nearly 1 in 2 stores sent nothing in the 48 hours after.',
    },
    {
      kind: 'p',
      text: '[A test Joy Joya published in July 2026](' +
        JOYJOYA +
        ') found more silence at the first step. Laryssa Wirstiuk subscribed to 362 ecommerce brands that sell jewellery, fashion, beauty, home, wellness and accessories. She used fresh email addresses and phone numbers, with no access to any brand’s dashboard. Of the 362, 158 (43.6%) never sent a welcome email and 53 (14.6%) never sent the text they promised. At 20 brands, the offer didn’t match the pop-up, such as 15% off on the pop-up and 10% in the email.',
    },
    {
      kind: 'stat',
      value: '43.6%',
      label: 'of 362 ecommerce brands never sent a new subscriber a welcome email',
      source: 'Joy Joya, July 2026: one tester, fresh addresses and phone numbers, no dashboard access',
      href: JOYJOYA,
    },
    {
      kind: 'p',
      text: 'The two counts cover different stores, months and methods, so read each with its own sample. For a store that does send a welcome, the questions left sit in the days after it. They are what emails 2 and 3 say, whether the code works the same way in each, and whether it stacks with the basket reminder’s code.',
    },

    { kind: 'h2', id: 'how-many', text: 'How many emails should a welcome series have?' },
    {
      kind: 'p',
      text: 'Klaviyo’s default series has 3 emails over a week, and Shopify’s discount series has 4. A [welcome series](/glossary/welcome-series) is a [triggered flow](/glossary/triggered-flow), a set of emails that starts when someone joins the list, with nobody pressing send.',
    },
    {
      kind: 'p',
      text: '[Klaviyo’s welcome series guide](' +
        KLAVIYO_WELCOME +
        '), updated 24 October 2026, recommends 3 emails over a week: the first sent immediately, the second 3 days later and the third 4 days after that. Klaviyo’s pre-built series uses the same timing.',
    },
    {
      kind: 'p',
      text: 'The [Shopify Messaging app](' +
        SH_AUTOMATIONS +
        ') offers a discount series of 4 emails: a welcome with a discount, 2 brand-building emails, then a discount reminder sent if no purchase follows. [Shopify’s welcome templates](' +
        SH_TEMPLATES +
        ') leave out customers who subscribed at checkout, so a buyer doesn’t get a first-order code minutes after paying.',
    },
    {
      kind: 'p',
      text: 'A brand that leads with its story can run longer. Klaviyo’s guide calls a longer series the right choice for a story-focused welcome, with personal anecdotes from the founder. It also advises running the email and text welcomes as separate flows, because a subscriber can sign up for each at a different time and enters a welcome flow once.',
    },

    { kind: 'h2', id: 'template', text: 'Welcome series email template: what each email says, day by day' },
    {
      kind: 'p',
      text: 'The template keeps Klaviyo’s day 0, day 3 and day 7, and adds a day 5 email with best sellers. Day 7 splits the way Shopify’s discount series does, with the code reminder going to subscribers who haven’t ordered.',
    },
    {
      kind: 'table',
      caption: 'A 4-email welcome series for an online store, with a separate day 7 email for subscribers who ordered',
      cols: ['Day', 'Purpose', 'What it says'],
      rows: [
        ['Day 0, within minutes', 'Deliver what the pop-up promised', 'The code word for word, its end date, 3 best sellers'],
        ['Day 3', 'Say who you are', 'Why the brand exists, reviews, no new code'],
        ['Day 5', 'Show what new customers buy first', 'Best sellers, the same code, its end date'],
        ['Day 7, no order yet', 'Bring the code back before it ends', 'The same code, the hour it ends, 1 product'],
        ['Day 7, ordered', 'Stop the code emails', 'Delivery dates, how to reach you, no code'],
      ],
    },
    {
      kind: 'p',
      text: 'Split day 7 on whether the subscriber has ordered since signing up. In Klaviyo that is a conditional split, a branch that sends each subscriber down one of 2 paths, set to “Has Placed Order at least once since starting this flow”. In Shopify’s discount series, the reminder already goes to subscribers with no purchase.',
    },

    { kind: 'h2', id: 'welcome-code', text: 'What should the welcome code do after the first email?' },
    {
      kind: 'p',
      text: 'The welcome code should match the pop-up word for word and read the same in every email. It should end when the emails say it ends, and stack with other codes only where you decided it should.',
    },
    {
      kind: 'p',
      text: 'Use one code across the series. In Klaviyo, the same coupon tag in several flow emails gives the subscriber the same code while it is unexpired, according to [Klaviyo’s guide to unique Shopify codes](' +
        KLAVIYO_COUPON +
        '), updated 26 October 2026. Each unique code can be redeemed once.',
    },
    {
      kind: 'p',
      text: 'Make the end date true. Klaviyo adds a 24-hour grace period to a flow code set to expire a fixed time after it is sent, so a code set to last 4 hours works for 28. If the day 7 email says the code ends at midnight and the code was set to last 7 days, it still works the next morning. Set a fixed end date, or word the reminder to match the window.',
    },
    {
      kind: 'p',
      text: 'Check whether the welcome code stacks with the code in your basket reminder. [Shopify’s rules for combining discounts](' +
        SH_COMBINE +
        ') apply 2 codes together when each one’s setting allows it, and work out 2 percentage order discounts on the same original subtotal. Shopify’s own example takes $30 off a $100 order with WELCOME10 and INFLUENCER20. A new subscriber holding WELCOME10 who leaves a basket and gets BACK10 can take 20% off, if both codes are set to combine with order discounts.',
    },
    {
      kind: 'art',
      art: {
        kind: 'report',
        title: 'ashcombe.example · codes in week 1',
        period: 'One new subscriber, Mon 2 to Mon 9 Nov 2026',
        cols: ['Email', 'Code', 'At checkout'],
        rows: [
          { name: 'Day 0: welcome', cells: ['WELCOME10', '10% off'], tone: 'ok' },
          { name: 'Day 3: story', cells: ['No code', 'Nothing'], tone: 'info' },
          { name: 'Day 5: products', cells: ['WELCOME10', 'Same 10%'], tone: 'ok' },
          { name: 'Day 7: reminder', cells: ['WELCOME10', 'Ends 23:59'], tone: 'ok' },
          { name: 'Basket reminder', cells: ['BACK10', '20% in total'], tone: 'fail' },
        ],
        notes: [
          'ashcombe.example is an invented store, and its codes are examples.',
          'WELCOME10 and BACK10 were both set to combine with order discounts, so a £60 basket took £12 off.',
        ],
      },
      caption: 'Every email in the first week carried the same WELCOME10 code, and the basket reminder’s BACK10 stacked on top of it for 20% off.',
    },
    {
      kind: 'p',
      text: 'Decide whether a first order should get both codes, then test it at checkout and copy any refusal word for word. Where 2 codes can’t combine, Shopify’s checkout shows “Discount couldn’t be used with your existing discounts”. The timing of the basket reminder itself is set out in the [abandoned cart email sequence](/blog/abandoned-cart-email-sequence) guide, and the same check on a competitor’s store shows [the price after the welcome code](/blog/competitor-price-after-welcome-code).',
    },

    { kind: 'h2', id: 'follow-up-code', text: 'Should you send a follow-up code if the welcome code goes unused?' },
    {
      kind: 'p',
      text: 'Send a follow-up code if your margin on a first order can pay for a second discount, and send it to subscribers who haven’t ordered. Otherwise, repeat the first code before it ends.',
    },
    {
      kind: 'p',
      text: '[Klaviyo’s welcome series guide](' +
        KLAVIYO_WELCOME +
        ') describes both ways round. One gives the code in the first email to people who have never ordered, with a split on “Has Placed Order at least once over all time”. The other holds the code back until later in the series, then sends it to subscribers with no order since they started the flow. Klaviyo says this helps avoid giving out discounts unnecessarily. The brand story template in Shopify Flow works the same way, with a discount in its fourth email if no order has been placed.',
    },
    {
      kind: 'p',
      text: 'Work it out from 3 numbers in your own reports. The first is the share of welcome subscribers who order with the first code by day 7. The others are your margin on a first order and what the code takes off each order that uses it. A second code deeper than the first rewards the subscribers who waited, so choose between repeating the first code before it ends and sending a new one after it.',
    },

    { kind: 'h2', id: 'examples', text: 'Welcome series email flow examples for new subscribers' },
    {
      kind: 'p',
      text: 'The template changes with the size of a first order. The 3 stores and their subject lines are invented, at .example addresses.',
    },
    {
      kind: 'list',
      items: [
        '**A skincare brand with £35 first orders (lunemere.example).** Day 0: “Your 10% is inside: LUNE10”. Day 3: “How we test every formula”. Day 5: “The 3 products new customers start with”. Day 7, to subscribers with no order: “LUNE10 ends at midnight”.',
        '**A furniture brand with £900 sofas (oakhollow.example).** The pop-up offers free fabric swatches, so the series carries no code. Day 0: “Your swatches ship tomorrow”. Day 3: “How a sofa is built in our workshop”. Day 7: “Delivery in 4 weeks, and how to measure your doorway”.',
        '**A coffee subscription (brewfield.example).** Day 0: “Your first bag is half price: BREW50”. Day 2: “Which roast to pick first”. Day 5: “Pause or skip any month”. Day 7, to subscribers with no order: “Half price on your first bag until Sunday”.',
      ],
    },
    {
      kind: 'p',
      text: 'Each one keeps the sign-up form’s promise all week. The 2 with a code send the last reminder to subscribers who haven’t ordered, and the furniture brand answers delivery and sizing questions before it asks for a £900 order.',
    },

    { kind: 'h2', id: 'test', text: 'How to test your welcome series' },
    {
      kind: 'p',
      text: 'Test it as a new subscriber, with addresses your store has never seen, because [Klaviyo sends a list-triggered flow to each address once](' +
        KLAVIYO_WELCOME +
        '), even if the person unsubscribes and signs up again.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Sign up through the pop-up with a new address and note the time, for example 21:14 on a Monday. Sign up a second new address through the footer form. Klaviyo notes that Shopify themes can ship their own footer form, which has to feed the same list as the pop-up.',
        'Within 15 minutes, check that the welcome came, which Gmail tab it landed in, and that its code matches the pop-up word for word.',
        'On days 3, 5 and 7, note each email’s time, subject and code. Note too each day an email was due and nothing came.',
        'Take the code to checkout on a full-price item and on a sale item, then leave a basket and apply the basket reminder’s code on top, if it carries one. Note each total and leave before paying.',
        'The day after the code’s stated end date, try it once more, so you know whether “ends tonight” was true.',
      ],
    },
    {
      kind: 'p',
      text: 'If the welcome or a later email never arrives, [welcome email not sending](/blog/welcome-basket-email-not-sending) lists the settings to check in Klaviyo and Shopify Email. Black Friday is Friday 27 November 2026, so run the test before your code freeze and check the welcome code beside your sale codes.',
    },
    {
      kind: 'p',
      text: 'A test by hand covers one week from one moment, and every run needs new addresses. It can’t show what the series sent last month, or how your welcome week compares with other stores’.',
    },
    {
      kind: 'p',
      text: 'If your online store is already in Obsession’s index, the [store lookup](/lookup) sends its entry to an email at your store’s own address. The entry holds every email after a sign-up, a product view, a basket and a checkout, dated and set against every other store in the index. Each step is read at 4, 8, 12, 24 and 48 hours. The account then stays subscribed, so the entry keeps filling with your second and third emails and their codes. A fresh sign-up can run [every step again each week](/use-cases/leak-checks-for-ecommerce-stores), and the index is built for millions of companies.',
    },
    {
      kind: 'p',
      text: 'Agencies that run email or retention for ecommerce brands can start in [early access](/lookup#agencies). It looks up every store already in the index and adds up to 5 stores you run or pitch, with the brand’s OK. We check each agency before we set up access.',
    },
    {
      kind: 'cta',
      text: 'See every email your store sends a new subscriber, each one dated with the code it carried, next to every other store in the index.',
      to: '/lookup',
      label: 'Look up your store',
    },

    { kind: 'h2', id: 'stores-and-clients', text: 'How do you check your welcome series against the leaders, and for your clients?' },
    {
      kind: 'p',
      text: 'For your own online store, the [store lookup](/lookup) shows every email your welcome series sent a new subscriber, with the code each one carried, beside every other store in the index. With Obsession, you can set your series beside the biggest stores in your category. You see how many emails they send in the first week, what each one says and which codes stack.',
    },
    {
      kind: 'list',
      items: [
        '**Win the pitch:** an agency opens with what a prospect’s series sent after day 3, or the day it went quiet.',
        '**Keep the client:** a fresh sign-up every week shows the series and its codes still working, and the week a code stops at checkout.',
        '**Grow the account:** the second and third emails a client doesn’t send yet, or a code that stacks with the basket code, become the next proposal, each with its email.',
      ],
    },
    {
      kind: 'screen',
      screen: 'upsells',
      workspace: 'agency',
      caption: 'An agency’s next service for each client, each with proof from its own checks: here, an SMS welcome series proposal, sent only after the agency’s OK.',
    },
    {
      kind: 'p',
      text: 'It keeps going on its own. The accounts stay subscribed, and a fresh sign-up runs every step again each week. It works the same for one store or a list of 3,000, on an index built for millions of companies. The [retention agency use case](/use-cases/leak-checks-for-retention-agencies) shows how agencies run it across every client, from the first pitch to the monthly report.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are welcome email series best practices for ecommerce?',
          a: 'Send the welcome within minutes with the code the sign-up form promised, then a second email around day 3 and a third around day 7. Keep one code that reads the same in every email, and send the code reminder to subscribers who haven’t ordered. Test the whole week with a new address, including whether the welcome code stacks with your basket reminder’s code.',
        },
        {
          q: 'How many emails should a welcome series have?',
          a: 'Klaviyo recommends 3 emails over a week: one immediately, one after 3 days and one about 7 days after the sign-up. Shopify’s discount series sends 4: a welcome with a discount, 2 brand-building emails and a discount reminder if no purchase follows.',
        },
        {
          q: 'What should a welcome email say for an ecommerce store?',
          a: 'It should deliver what the sign-up form promised, word for word. Give the code, what it takes off, when it ends and what it applies to, with 3 best sellers to use it on. Joy Joya’s July 2026 test of 362 ecommerce brands found 20 whose welcome offer didn’t match the pop-up.',
        },
        {
          q: 'What does a welcome series email flow look like?',
          a: 'The flow starts when someone joins the list. Email 1 goes straight away with the code, email 2 on day 3 tells the brand’s story and email 3 on day 5 shows best sellers. On day 7, a split sends the code reminder to subscribers who haven’t ordered and a thank you to those who have.',
          link: { label: 'What a welcome series is', to: '/glossary/welcome-series' },
        },
        {
          q: 'When should a welcome email series for new subscribers start?',
          a: 'Within minutes of the sign-up. In Obsession’s index on 13 November 2026, most stores that sent a welcome sent it within a minute, and Klaviyo’s default series sends its first email immediately.',
        },
        {
          q: 'Is there a welcome series email template I can copy?',
          a: 'Yes. Day 0 delivers the code the pop-up promised, day 3 says who you are and day 5 shows the products new customers buy first. Day 7 brings the code back to subscribers who haven’t ordered and thanks those who have.',
        },
        {
          q: 'Should the welcome code stack with a basket reminder code?',
          a: 'Only if you decide it should. On Shopify, 2 codes combine when each one’s setting allows it, and 2 percentage order codes are both worked out on the original subtotal, so 10% and 10% take 20% off.',
          link: { label: 'Competitor price after the welcome code', to: '/blog/competitor-price-after-welcome-code' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'The index figures are Obsession’s totals on 13 November 2026, for every sign-up, basket and checkout in the index. The Klaviyo help pages cited were updated on 24 and 26 October 2026, and Shopify’s help pages carry no date. Help pages change, so check the page before you act.',
    },
  ],

  sources: [
    { title: 'The 2026 ecommerce marketing report', publisher: 'Omnisend', url: OMNISEND, date: '2026' },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'How to create an email welcome series', publisher: 'Klaviyo Help Center', url: KLAVIYO_WELCOME, date: '2026-10-24' },
    { title: 'Creating and managing marketing automations in Shopify Messaging', publisher: 'Shopify Help Center', url: SH_AUTOMATIONS },
    { title: 'Customer subscribed to email marketing', publisher: 'Shopify Help Center', url: SH_TEMPLATES },
    { title: 'How to create unique coupon codes for Shopify', publisher: 'Klaviyo Help Center', url: KLAVIYO_COUPON, date: '2026-10-26' },
    { title: 'Combining discounts', publisher: 'Shopify Help Center', url: SH_COMBINE },
  ],

  related: [
    'abandoned-cart-email-sequence',
    'browse-abandonment-email',
    'welcome-basket-email-not-sending',
    'competitor-price-after-welcome-code',
    '/glossary/welcome-series',
    '/lookup',
    '/use-cases/leak-checks-for-ecommerce-stores',
  ],
}
