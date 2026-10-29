import type { BlogPost } from './types'

/* Guide B of the 29 Oct 2026 pair (_research/seo/plan/next-29oct/PLAN.md and BRIEF.md, approved by Seun on 29 Oct with
   his changes in PLAN.md section 9). Owns "traffic but no sales" and its family: shopify traffic but no sales, website
   traffic but no sales, why am i getting traffic but no sales, shopify sessions but no sales, shopify add to cart but no
   purchase, high traffic low conversion, why is no one buying from my shopify store. Leaves "shopify store audit" to
   shopify-store-audit-checklist and "final url expansion" to where-your-ads-land-morning-check, and links to both
   instead of repeating them. Readers: Shopify founders and heads of ecommerce whose sessions hold while orders fall,
   and the freelancers and agencies they ask. Live by Wed 4 Nov, before Black Friday (Fri 27 Nov 2026).
   Evidence: Shopify Help (behaviour reports, analytics discrepancies, checkout upgrade), Baymard, Microsoft Clarity,
   Contentsquare pricing (Hotjar), Checkly and Pingdom pricing and Shoptest's Shopify App Store listing, each opened
   at its source on 29 Oct 2026; 3 owner posts from the signal library (r/PPC, r/ecommerce, r/FacebookAds), checked word for word
   against _research/signals/signals.jsonl; Obsession's own checks of 14 online stores for 4 agencies (21 to 26 Oct
   2026) and its phone walk of about 30 Shopify stores (26 Oct 2026), anonymised, from BRIEF.md and
   _research/seo/recommend/best-x/firsthand_28oct.json (the "9 of the 14" CAPTCHA count is from that file and is live
   on best-ai-mystery-shopping-tools). Obsession follows _research/seo/recommend/STANDARD.md: named in the answer, the
   line with the uses once, the 1,500 line word for word, the cadence Seun cleared on 29 Oct (first report at 4 hours,
   full report at 48 hours, then every week or every month; agencies run it for their brands), last in the comparison,
   recommended once in the verdict. larkmoor.example and every figure in the hero, the price art and the cost table are
   invented. No store, brand or agency checked is named. No Gartner, PilotX, 93% or 128 stores. Buyer words; no dashes. */

const R_PPC = 'https://www.reddit.com/r/PPC/comments/1t2hjzx/'
const DISCREPANCIES = 'https://help.shopify.com/en/manual/reports-and-analytics/discrepancies'
const CHECKOUT_UPGRADE = 'https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade'
const BEHAVIOUR = 'https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports'
const AGENTIC = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts'
const R_ECOM = 'https://www.reddit.com/r/ecommerce/comments/1s2ydeo/'
const BAYMARD = 'https://baymard.com/lists/cart-abandonment-rate'
const R_FBADS = 'https://www.reddit.com/r/FacebookAds/comments/1x3banr/'
const CLARITY = 'https://clarity.microsoft.com/'
const CONTENTSQUARE = 'https://contentsquare.com/pricing/'
const CHECKLY = 'https://www.checklyhq.com/pricing/'
const PINGDOM = 'https://www.pingdom.com/pricing/'
const SHOPTEST_APP = 'https://apps.shopify.com/shoptest'

export const post: BlogPost = {
  slug: 'traffic-but-no-sales',
  title: 'Getting traffic but no sales? Shop your store as a new customer to find the break',
  dek: 'When visits hold steady and orders fall, Shopify’s reports show where shoppers stop but leave out what they saw there. Shop the store on a phone as a new customer, from the ad to the payment page, and run 8 checks with real examples from October 2026.',
  metaTitle: 'Traffic but no sales? The checks to run as a new customer',
  description:
    'Traffic but no sales? Rule out tracking and the season, then shop your store on a phone as a new customer and run 8 checks from the ad to the payment page.',
  answer:
    'When a store gets traffic but no sales, the cause is usually a step only a new customer sees, such as a cart that drops the free shipping the banner promised. Rule out tracking, traffic mix and the season, then shop the store on a phone as a new customer from the ad to the payment page. To have that walk run every week and after every change, use Obsession: its AI customers shop the store as real new customers and keep every page, code and email.',
  primaryKeyword: 'traffic but no sales',
  keywords: [
    'shopify traffic but no sales',
    'website traffic but no sales',
    'why am i getting traffic but no sales',
    'shopify sessions but no sales',
    'shopify add to cart but no purchase',
    'high traffic low conversion',
    'why is no one buying from my shopify store',
  ],
  category: 'Check your own journeys',
  published: '2026-10-29',
  updated: '2026-10-29',
  readingMinutes: 15,
  order: 2,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'flow',
      title: 'larkmoor.example',
      status: { tone: 'fail', text: 'Sessions steady, orders down' },
      steps: [
        { label: 'Ad click', detail: 'Lands on the product, in stock', tone: 'ok' },
        { label: 'Cart', detail: '“$903 to free shipping” under a free shipping banner', tone: 'fail' },
        { label: 'Checkout', detail: 'Welcome code refused', tone: 'fail' },
        { label: 'Payment page', detail: 'Never reached', tone: 'fail' },
      ],
      foot: 'An invented example. The store’s reports count the visit and the cart, and none of what the shopper read.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Shopify founders and heads of ecommerce can run these checks when sessions look normal and orders drop, and so can the freelancers and agencies they ask for help. The same checks work for any online store with website traffic but no sales. Each one is something a shopper does on a phone, with what a pass looks like.',
    },
    {
      kind: 'p',
      text: 'Reports count the visits and the step where shoppers stop. The reason sits on the shopper’s screen: a banner promise the cart drops, a code refused at checkout, a chat button over Checkout. To see it, shop the store as a new customer. Black Friday falls on Friday 27 November 2026, so traffic is about to rise, and a broken step costs more on each of those days.',
    },
    {
      kind: 'quote',
      text: "people ARE clicking. They're landing on the site. They're just not buying. And I can't figure out where the disconnect is.",
      cite: 'An owner posting in r/PPC, May 2026',
      href: R_PPC,
    },

    { kind: 'h2', id: 'rule-out', text: 'Rule out tracking, traffic mix and the season first' },
    {
      kind: 'p',
      text: 'These causes show up in the store’s own reports, so rule them out before any customer test.',
    },
    {
      kind: 'list',
      items: [
        '**Tracking.** Compare orders in Shopify with purchases in Google Analytics and the ad accounts for the same days. If Shopify orders held while the other tools show fewer purchases, the sales happened and the tracking stopped counting them. [Shopify’s help centre](' +
          DISCREPANCIES +
          ') notes that Google counts only visitors with JavaScript and cookies turned on. Stores not on Shopify Plus also had to [upgrade their Thank you and Order status pages](' +
          CHECKOUT_UPGRADE +
          ') by 26 August 2026. Scripts on the old pages weren’t carried over, so tracking set up there has to be rebuilt.',
        '**The September session change.** [Shopify’s help centre](' +
          BEHAVIOUR +
          ') says its new way of measuring sessions rolled out from 21 to 23 September 2026. Afterwards, it says, sessions and conversion rate may look different with no change in traffic or orders. Across those dates, compare order counts rather than the rate.',
        '**Traffic mix.** Split sessions by source, landing page and device, and compare each with the weeks before. A new campaign, a press mention or a burst of bot visits adds sessions that were never likely to buy, which lowers the rate with nothing broken. Shopify’s reports can be filtered to human or bot traffic.',
        '**The season.** Compare the same weeks last year. A drop that matches last year’s comes from the calendar.',
      ],
    },
    {
      kind: 'p',
      text: 'If Shopify’s own order count fell against last month and last year, on traffic from the sources that used to sell, the break is in the store. The [Shopify store audit checklist](/blog/shopify-store-audit-checklist) reads the rest of the data in depth: GA4 funnels, session recordings, speed and search.',
    },

    { kind: 'h2', id: 'what-analytics-miss', text: 'What analytics can’t see' },
    {
      kind: 'p',
      text: 'In Shopify, open Analytics, then Reports, then **Conversion rate breakdown**. It counts sessions at 4 steps: all sessions, sessions with cart additions, sessions that reached checkout and sessions that completed checkout. [Shopify defines](' +
        BEHAVIOUR +
        ') a session that reached checkout as one with user input during checkout, such as a key press or a click. The step whose share fell is where to look.',
    },
    {
      kind: 'p',
      text: 'The report can’t say why the share fell. A fall at cart additions looks the same whether Add to cart sits under a chat button on iPhones or the size picker stopped loading. A fall at checkout looks the same whether a code was refused or the shipping cost appeared for the first time. Session recordings show where a visitor tapped. A person using the store as a customer reads what the banner promised, what the cart charged and what arrived by email afterwards.',
    },

    { kind: 'h2', id: 'checks', text: 'The 8 checks, in the order a shopper meets them' },
    {
      kind: 'p',
      text: 'Run the checks in this order, on a phone, as a new customer. The examples come from 26 October 2026, when an AI agent working for Obsession walked the client stores that Shopify agencies and freelance experts show on their own websites. It shopped each one on a phone as a signed-out new customer, page by page, as far as the first checkout page. These are the stores the agencies chose to show on their own websites, and a shopper could still see the problems below.',
    },

    { kind: 'h3', id: 'ad-lands', text: 'The ad lands on a live page with the product in stock' },
    {
      kind: 'p',
      text: 'Open the link from the ad with the most spend, a Google result and the latest email. Paste each ad’s link into the browser instead of tapping the live ad, which can be billed as a click. **A pass:** the page loads in seconds, it shows the product the ad showed, and the size and colour from the ad go into the basket. In the walk, the first product in one store’s “Popular products” row was sold out, so a shopper who tapped the first thing they saw met a dead end.',
    },

    { kind: 'h3', id: 'nothing-covers', text: 'On a phone, nothing covers Add to cart or Checkout' },
    {
      kind: 'p',
      text: 'Add a product and open the cart, then wait a few seconds on each page, because chat buttons, review badges and pop ups can load after the page does. Repeat on a second phone with the other operating system. **A pass:** Add to cart and Checkout can each be tapped, with nothing on top of them, on an iPhone and on an Android phone. In the walk, a help button or a chat window covered the Checkout button in the cart. A consultant posting in [r/ecommerce in March 2026](' +
        R_ECOM +
        ') found the same fault on a client’s store: “The live chat widget was parked directly on top of the buy now button. On iOS only. Not Android. Just iOS.”',
    },

    { kind: 'h3', id: 'banner-promise', text: 'The banner’s promise matches the cart and the checkout' },
    {
      kind: 'p',
      text: 'Read every promise on the way in, in the top banner, the pop up and the product page. Then check each one in the cart, and again on the checkout page. **A pass:** free shipping, a free gift or a subscription price shown on the page is still there at checkout, at the order value the banner names. In the walk, these promises broke between the page and the checkout:',
    },
    {
      kind: 'list',
      items: [
        '“Complimentary shipping on every US order” in the banner, and “You’re only $903.00 away from FREE shipping” in the cart.',
        '“Free local delivery” on the product page, and “Add $150.00 to get free local delivery” after Add to cart.',
        '“Enjoy FREE shipping” in the cart drawer, and “Spend $20.05 for free shipping” on the checkout page.',
        'A free gift promised with 3 items, which never appeared in the cart.',
        'A subscribe and save price chosen on the product page, which became the full one-time price in the cart.',
      ],
    },
    {
      kind: 'p',
      text: 'When a promise fails, check the shipping rates for that market and order value, the discount or app behind the gift, and the subscription app’s settings.',
    },

    { kind: 'h3', id: 'no-surprise-charge', text: 'No charge appears that the shopper didn’t choose' },
    {
      kind: 'p',
      text: 'Read every line of the cart and the checkout summary. **A pass:** each line is the product, shipping, tax or something the shopper ticked. In the walk, one store added shipping insurance at $2.80, switched on before the shopper arrived. Another showed a package protection line of $64.92 only after the shopper went to checkout and came back to the cart. When a line like this appears, find the app that adds it and check how it is set to appear.',
    },

    { kind: 'h3', id: 'codes', text: 'The welcome code works, and no expired offer still shows' },
    {
      kind: 'p',
      text: 'Sign up through the pop up with a new email address, wait for the welcome email, and take its code to checkout with a full-price item and a sale item. **A pass:** the welcome email arrives within minutes, its code matches the pop up’s offer, and checkout accepts it on the items the offer covers. Then try every code still on the banner, the pop up and the announcement bar. In the walk, one store still offered a code on its banner and pop up on Monday that had expired on Sunday. If the welcome email never arrives, [why a welcome or basket email never arrives](/blog/welcome-basket-email-not-sending) works through the causes.',
    },

    { kind: 'h3', id: 'total', text: 'Shipping, taxes and the total hold no surprise' },
    {
      kind: 'p',
      text: 'Enter a real delivery address for each country the store sells to, and read the total before the payment step. **A pass:** the shipping cost matches the banner, the product page and the shipping page. Any tax or duty is shown, and the total is what the product page led the shopper to expect. In [Baymard Institute’s survey of US online shoppers](' +
        BAYMARD +
        '), leaving out those only browsing, 12% of shoppers who abandoned an order said they couldn’t see or work out the total up front.',
    },
    {
      kind: 'stat',
      value: '40%',
      label: 'of US online shoppers who abandoned an order said extra costs such as shipping, tax and fees were too high, leaving out those only browsing',
      source: 'Baymard Institute, updated September 2025',
      href: BAYMARD,
    },
    {
      kind: 'art',
      caption: 'On an invented store, 3 promises that break between the product page and the payment page turn the $37.80 the shopper expected into $51.75. The store’s reports show only a checkout that wasn’t completed.',
      art: {
        kind: 'price',
        title: 'larkmoor.example · checkout total',
        rows: [
          { label: 'Linen shirt', value: '$42.00', note: 'The banner promised free shipping' },
          { label: 'Shipping', value: '$6.95', note: 'The cart: $903.00 away from free shipping' },
          { label: 'Shipping protection', value: '$2.80', note: 'Ticked before the shopper arrived' },
          { label: 'Welcome code, 10% off', value: '$0.00', note: 'Refused at checkout' },
        ],
        total: { label: 'Total at the payment page', value: '$51.75', note: 'The pop up and banner led the shopper to expect $37.80' },
      },
    },

    { kind: 'h3', id: 'checkout-loads', text: 'Checkout loads and the payment options show' },
    {
      kind: 'p',
      text: 'Tap Checkout, fill in the address and go as far as the payment page, then stop without paying. Do it on an iPhone and on an Android phone, because wallet buttons such as Apple Pay and Google Pay depend on the device. **A pass:** checkout opens in seconds, nothing has to be found before the button works, and every payment method the store offers appears. In the walk, one store’s Checkout button stayed greyed out until the shopper found a small “I agree to the Terms of Service” box.',
    },

    { kind: 'h3', id: 'after-a-change', text: 'Nothing changed after a theme or app update' },
    {
      kind: 'p',
      text: 'Write down the day orders started to fall. Then list every change in the week before it, from theme publishes and app updates to edits in discounts, prices, shipping and payments. **A pass:** the walk gives the same result before and after each change. Run the walk again on the day of every change, because a theme or an app can break a step that passed the day before.',
    },

    { kind: 'h2', id: 'tonight', text: 'How to run the checks tonight' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Use a phone and a private window,** signed out of the store’s admin. Signed in, the store can treat its owner as staff or a past customer.',
        '**Use a new email address** the store has never seen, so the pop up, the welcome email and the reminders treat it as a first visit.',
        '**Start from the ad’s link,** pasted into the browser, then a Google result and a link from the latest email.',
        '**Sign up through the pop up,** add a full-price item and a sale item, and take the welcome code to checkout.',
        '**Enter a real address,** read the total and stop at the payment page without paying.',
        '**Screenshot each step with the time showing,** and write pass or fail beside each of the 8 checks.',
        '**Leave the checkout with the email typed in,** and watch that inbox for 48 hours, spam folder included.',
        '**Repeat on a second phone** with the other operating system.',
      ],
    },
    {
      kind: 'art',
      caption: 'The sheet after one evening on an invented store. 4 of the first 7 checks fail, all between the cart and the payment page, where the store’s reports show only a checkout that wasn’t finished. Check 8 runs again after the next theme or app change.',
      art: {
        kind: 'report',
        title: 'larkmoor.example · one evening',
        period: 'iPhone, private window, a new email address, from the ad’s link',
        cols: ['Check', 'What the phone showed', 'Result'],
        rows: [
          { name: 'The ad lands', cells: ['Product page, in stock', 'Pass'], tone: 'ok' },
          { name: 'Buttons clear', cells: ['Nothing over Checkout', 'Pass'], tone: 'ok' },
          { name: 'Banner promise', cells: ['“$903 to free shipping”', 'Fail'], tone: 'fail' },
          { name: 'Added charges', cells: ['Protection ticked, $2.80', 'Fail'], tone: 'fail' },
          { name: 'Welcome code', cells: ['Refused at checkout', 'Fail'], tone: 'fail' },
          { name: 'The total', cells: ['$51.75, not $37.80', 'Fail'], tone: 'fail' },
          { name: 'Checkout loads', cells: ['Cards and Shop Pay show', 'Pass'], tone: 'ok' },
        ],
        notes: ['Every screenshot keeps its time, so the fix can be checked against it the next evening.'],
      },
    },
    {
      kind: 'p',
      text: 'Wait the full 48 hours before calling an email missing. This month Obsession ran a pilot for 4 agencies on the stores they pitch and serve. Between 21 and 24 October 2026, its AI customers signed up, browsed, left a basket and started a checkout at each store, each with its own inbox, and watched every inbox for 48 hours. Every store in the pilot had at least one gap. Nearly half sent nothing in the 48 hours after a shopper left a checkout with their email typed in. Most first reminders came within 4 hours, the fastest after 30 minutes, and some came about 10 hours later.',
    },

    { kind: 'h2', id: 'ads', text: 'When the ads are the cause' },
    {
      kind: 'p',
      text: 'If one campaign brings most of the new sessions and its visitors rarely add to cart, look at the ad before the store. An owner posting in [r/FacebookAds in October 2026](' +
        R_FBADS +
        ') wrote: “I’m averaging 500 viewers a day or more on the site but again nothing is converting and I only have 10 initiated checkouts.”',
    },
    { kind: 'p', text: 'Three ad faults look like a store fault in the reports:' },
    {
      kind: 'list',
      items: [
        '**The offer.** The ad promises a price, a code or free shipping that the page doesn’t show.',
        '**The product.** The ad keeps sending clicks to a product that has sold out.',
        '**The landing page.** Final URL expansion, a Google Ads setting, can send clicks to pages nobody put in the ad.',
      ],
    },
    {
      kind: 'p',
      text: 'The [morning check of where your ads land](/blog/where-your-ads-land-morning-check) lists every live ad with its link and opens each one on a phone in about 10 minutes.',
    },

    { kind: 'h2', id: 'ai-agents', text: 'AI agents that shop for people' },
    {
      kind: 'p',
      text: 'Some visits now come from AI agents shopping on a person’s behalf. [Shopify says its agentic storefronts](' + AGENTIC + ') let customers discover and buy a store’s products in AI channels such as ChatGPT, Google AI Mode and Gemini, Microsoft Copilot and Meta, and they are on by default for eligible stores. A CAPTCHA, the puzzle that blocks automated visitors, or another bot check can turn such an agent away before it reaches the cart. In Obsession’s October pilot, most stores put a CAPTCHA or bot check in front of at least one step. [Is your website ready for AI agents](/blog/agent-ready-website) gives 10 checks for what such an agent gets on a store, and when to block or allow one.',
    },

    { kind: 'h2', id: 'cost', text: 'What a broken step costs in a week' },
    {
      kind: 'p',
      text: 'Put a figure on the break with the store’s own numbers before deciding how fast to fix it.',
    },
    {
      kind: 'p',
      text: '**Sales lost in a week = sessions a day × (conversion rate before the drop minus conversion rate now) × average order value × 7**',
    },
    {
      kind: 'p',
      text: 'Take both conversion rates and the average order value from Shopify’s reports, for a normal week before the drop and for the week since. The figures in the table are invented to show a low and a high case. Replace each one with the store’s own.',
    },
    {
      kind: 'table',
      caption: 'A week of a broken step, worked with invented figures. Put the store’s own figures in each row',
      cols: ['', 'A smaller store', 'A larger store'],
      rows: [
        ['Sessions a day', '400', '3,000'],
        ['Conversion rate before the drop', '2.0%', '2.5%'],
        ['Conversion rate now', '1.2%', '1.5%'],
        ['Average order value', '$40', '$90'],
        ['Sales lost in a week', '$896', '$18,900'],
      ],
    },
    {
      kind: 'p',
      text: 'The smaller store loses 400 × 0.8% × $40 × 7 = $896 a week, and the larger one 3,000 × 1% × $90 × 7 = $18,900. Over Black Friday weekend the same break costs more each day, because sessions rise while the step stays broken. For those days, use the sessions from last year’s Black Friday in the store’s own reports.',
    },

    { kind: 'h2', id: 'keep-checked', text: 'Keeping the store checked every week' },
    {
      kind: 'p',
      text: 'A walk by hand covers 1 phone, 1 inbox and 1 moment. A theme publish, an app update or a discount edit can break a step the day after it passed. Run the 8 checks every week, on the day of every change, and every day from the start of a Black Friday sale to Cyber Monday, 30 November. The [Black Friday checklist](/blog/black-friday-checklist-new-customer) adds the sale week tests for codes, texts and reminders.',
    },
    {
      kind: 'p',
      text: 'Obsession makes [AI customers](/blog/ai-customers) that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your rivals and prospect with proof. On a store’s own site, its AI customers open the pages behind the live ads, sign up, take the welcome code to checkout and leave a basket. The store’s team reads the results at the hours it chooses, 4, 12, 24 or 48, or keeps the AI customers watching for as long as it wants. They then check again every week or every month and after every change, and agencies run the same checks for the brands they serve. The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026. This month it ran a pilot for 4 agencies, and the first is moving to 300 brands a month. Obsession runs the same checks at 1,000 or 5,000 a month, and it’s built for millions. [Why ecommerce brands need AI customers](/blog/ai-customers-for-ecommerce-brands) sets out the weekly routine for a brand’s own store, its rivals and the AI assistants that answer about it.',
    },
    {
      kind: 'cta',
      text: 'Your first store check is free: 4 AI customers sign up, use the welcome code, leave a basket and wait 48 hours, and your report arrives within 4 days.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check my store free',
    },

    { kind: 'h2', id: 'compared', text: 'Ways to find the break, compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 29 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to find why visitors don’t buy, from each provider’s own pages on 29 October 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'The month’s orders find the break, after the sales are gone', 'Steady orders and no launch or sale ahead'],
        [
          'By hand: the 8 checks each week',
          'Sees what a new customer sees, on a real phone',
          'Free, plus staff time',
          '1 phone, 1 inbox and 1 moment each week',
          'One store that changes rarely',
        ],
        [
          'Session recordings and heatmaps: [Microsoft Clarity](' + CLARITY + '), [Contentsquare](' + CONTENTSQUARE + '), which now includes Hotjar',
          'Replays real visitors’ taps and scrolls at the step they leave',
          'Clarity: free, no traffic limit\nContentsquare: free to 200,000 sessions a month',
          'Ends when the visitor leaves, so emails after are out of view',
          'Finding the cause at a step you already know',
        ],
        [
          'Uptime and scripted checks: [Checkly](' + CHECKLY + '), [Pingdom](' + PINGDOM + '), [Shoptest](' + SHOPTEST_APP + ')',
          'An alert at any hour when a page or a set path fails',
          'Checkly: Hobby free, Starter $24 a month billed yearly\nPingdom: priced by checks, free trial\nShoptest: $99 to $499 a month, 30 days free',
          'Runs only the paths set up for it\nShoptest: stops before payment',
          'An alert the hour cart or checkout breaks',
        ],
        [
          'Obsession (ours): [Mystery shopper](/recipes/mystery-shopper), [Website audit](/recipes/website-audit), [Store leak checks](/use-cases/leak-checks-for-ecommerce-stores)',
          'AI customers open the pages behind the ads, sign up, use the code, leave a basket and keep every page and email. A person on the team completes any CAPTCHA',
          'Running now: first store check free\nCredit-based plans, like Claude’s',
          'Stops before payment, so the payment step needs a test order',
          'What a new customer meets and receives, every week and after every change',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If the store needs every step a new customer meets checked every week and after every change, from the ad to the payment page and the emails after it, use Obsession. Session recordings fit once the step is known and the team wants to watch real visitors at it. Checkly, Pingdom or Shoptest fit an alert at any hour on a cart and checkout path that rarely changes. A store with steady orders and few changes can run the 8 checks by hand each week.',
    },

    { kind: 'h2', id: 'when-not', text: 'When a customer test won’t find it' },
    {
      kind: 'list',
      items: [
        '**Shopify orders held** and only Google Analytics or ad purchases fell. Fix the tracking first.',
        '**Sessions fell along with orders.** The cause sits upstream, in ads, email sends or search.',
        '**The drop matches the same weeks last year.** The calendar explains it.',
        '**The store rarely changes and runs little paid traffic,** and the 8 checks pass by hand each week. A paid tool adds little there.',
      ],
    },

    { kind: 'h2', id: 'questions', text: 'Questions about traffic but no sales' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Why am I getting traffic but no sales?',
          a: 'Rule out 3 causes in the store’s reports first: tracking that stopped counting orders, a shift in where visitors come from, and the season. If Shopify’s own order count fell while sessions held, shop the store on a phone as a new customer, from the ad to the payment page. Look for a step a shopper meets that reports don’t show, such as a code refused at checkout or a free shipping promise the cart drops.',
        },
        {
          q: 'Why is no one buying from my Shopify store?',
          a: 'If no orders arrive at all, check as a customer that the password page is off and payments are set up. Then check that each product is on the Online Store sales channel and available in each market. If orders arrive but fewer than before, find the step whose share fell in Shopify’s Conversion rate breakdown report, then test that step on a phone.',
        },
        {
          q: 'Why do shoppers add to cart but not purchase on Shopify?',
          a: 'Check the cart on a phone first: nothing covering Checkout, no charge the shopper didn’t choose, and the banner’s free shipping or gift still applied. Then go to the payment page with a real address and read the total. When an AI agent working for Obsession walked the client stores that Shopify agencies show on their own websites on 26 October 2026, the cart problems included promises the cart dropped, a covered Checkout button and charges the shopper hadn’t chosen.',
        },
        {
          q: 'Why do my Shopify sessions look normal when sales have dropped?',
          a: 'Shopify changed how it measures sessions from 21 to 23 September 2026, and says sessions and conversion rate may look different with no change in traffic or orders. Compare order counts across those dates. If orders fell and sessions didn’t, visitors are arriving and a step between the landing page and the payment page is stopping them.',
        },
        {
          q: 'Is high traffic with low conversion an ads problem or a store problem?',
          a: 'Split conversion by traffic source. If one campaign’s visitors rarely add to cart while other sources convert as before, look at that ad: its offer, its landing page and whether the product is in stock. If every source fell together, the break is in the store.',
        },
        {
          q: 'How often should I shop my own store as a customer?',
          a: 'Every week, and on the day of any change to the theme, apps, discounts or shipping. During a sale such as Black Friday, check every day until it ends.',
        },
        {
          q: 'Can I test checkout without placing an order?',
          a: 'Yes. Go as far as the payment page and stop. That covers the cart, the address, shipping, tax, codes and the payment methods on offer. The payment step itself needs a test order, which the [Shopify store audit checklist](/blog/shopify-store-audit-checklist) sets out.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the store examples',
      text: 'Obsession’s pilot for 4 agencies ran between 21 and 24 October 2026 on the stores each agency sent in. Each store had up to 4 journeys: sign up, browse, leave a basket, or start a checkout with the email typed in and leave, with every inbox watched for 48 hours. On 26 October 2026, an AI agent working for Obsession walked the client stores that Shopify agencies and freelance experts show on their own websites, on a phone as a signed-out new customer, stopping at the first checkout page. No store or agency is named. Larkmoor and the figures in the cost table are invented.',
    },
  ],

  sources: [
    { title: 'A store owner’s post', publisher: 'r/PPC', url: R_PPC, date: '2026-05-03' },
    { title: 'Analytics discrepancies', publisher: 'Shopify Help Center', url: DISCREPANCIES },
    { title: 'Upgrading and replacing your Thank you and Order status pages', publisher: 'Shopify Help Center', url: CHECKOUT_UPGRADE },
    { title: 'Behavior reports', publisher: 'Shopify Help Center', url: BEHAVIOUR },
    { title: 'A consultant’s post', publisher: 'r/ecommerce', url: R_ECOM, date: '2026-03-25' },
    { title: '50 cart abandonment rate statistics 2026', publisher: 'Baymard Institute', url: BAYMARD, date: '2025-09-22' },
    { title: 'A store owner’s post', publisher: 'r/FacebookAds', url: R_FBADS, date: '2026-10-11' },
    { title: 'Shopify agentic storefronts', publisher: 'Shopify Help Center', url: AGENTIC },
    { title: 'Microsoft Clarity', publisher: 'Microsoft', url: CLARITY },
    { title: 'Pricing', publisher: 'Contentsquare', url: CONTENTSQUARE },
    { title: 'Pricing', publisher: 'Checkly', url: CHECKLY },
    { title: 'Pricing', publisher: 'Pingdom', url: PINGDOM },
    { title: 'Shoptest', publisher: 'Shopify App Store', url: SHOPTEST_APP, date: '2026-04-14' },
  ],

  related: ['shopify-store-audit-checklist', 'where-your-ads-land-morning-check', 'black-friday-checklist-new-customer', 'recipe:mystery-shopper'],
}
