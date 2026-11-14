import type { BlogPost } from './types'

/* Guide 2 of the store lookup set (plan and brief: Obsession/_research/seo/lookup-articles-14nov/, approved by Seun on 14 Nov
   2026). Primary phrase "ecommerce email marketing benchmarks" (Google autocomplete US and UK, 14 Nov). Readers: founders,
   heads of ecommerce and CRM or retention leads at ecommerce brands that run their own flows, and the agencies that do
   their email, retention or conversion work. It is the page others cite, so every figure carries its date and source.
   Obsession's figures are the index's totals on 13 Nov 2026 as the live /lookup page shows them (content/lookupSample
   sampleTotals, rounded the way pages/Lookup.tsx rounds them): sent an email after a sign-up 89% (11% nothing), after a
   product view 51% (49%), after a basket 55% (45%), after a checkout 51% (49%); half the welcome emails within a minute,
   half the basket and checkout reminders within about an hour. Printed as percentages, never as tallies. The product view
   step's median time is left out on purpose: its runs start from a signed-up account, so the first email after the view
   may be part of the welcome series, and the brief prints only its share.
   Outside figures, each read on its own page on 14 Nov 2026: Klaviyo's 2026 benchmarks page (183,000+ customers), Klaviyo's
   abandoned cart report of 2 Oct 2026 (110,000+ customers; it replaced the 2023 figures at the same address), the 2023
   cart figures as Enrich Labs reports them (labelled 2023), Omnisend's 2026 report (2025 sends), Baymard's cart
   abandonment list (updated 28 Oct 2026), Joy Joya's July 2026 test, and 3 help pages (Klaviyo abandoned cart flow,
   updated 24 Oct 2026; Klaviyo contacts in a flow, updated 25 Oct 2026; Shopify abandoned checkouts). What Obsession does
   stays inside the live site's words (/lookup, the ecommerce leak checks use case). No dashes; British English. */

const SAMPLE = 'https://useobsession.com/sample-output'
const BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const CART26 = 'https://www.klaviyo.com/blog/abandoned-cart-benchmarks'
const CART_FLOW = 'https://help.klaviyo.com/hc/en-us/articles/115002779411'
const CONTACTS = 'https://help.klaviyo.com/hc/en-us/articles/360017706091'
const ENRICH = 'https://www.enrichlabs.ai/blog/abandoned-cart-email-complete-guide-2026'
const OMNI = 'https://www.omnisend.com/resources/reports/2026-ecommerce-marketing-report/'
const BAYMARD = 'https://baymard.com/lists/cart-abandonment-rate'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const SH_ABANDONED = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts'

export const post: BlogPost = {
  slug: 'ecommerce-email-marketing-benchmarks',
  title: 'Ecommerce email marketing benchmarks: what stores send a new customer, and how fast',
  dek: 'On 13 November 2026, 89% of the online stores in Obsession’s index emailed a new subscriber after a sign-up, and nearly 1 in 2 sent nothing after an abandoned basket or checkout. The table by step, with timings, sits beside Klaviyo’s and Omnisend’s 2026 benchmarks from inside email accounts.',
  metaTitle: 'Ecommerce email marketing benchmarks: what stores send, 2026',
  description:
    'Ecommerce email marketing benchmarks for online stores, 13 Nov 2026: who emails after a sign-up, a product view, a basket and a checkout, and how fast.',
  answer:
    'Ecommerce email marketing benchmarks from the customer’s side, 13 November 2026: 89% of stores send a welcome email, but nearly 1 in 2 send nothing after an abandoned basket or checkout. Half the welcome emails arrive within a minute, and half the basket and checkout reminders that come arrive within about an hour. Obsession keeps what each store sends a new customer after each step, dated, and the store lookup shows your store’s entry beside every other store.',
  primaryKeyword: 'ecommerce email marketing benchmarks',
  keywords: ['ecommerce email marketing benchmarks'],
  category: 'Check your own journeys',
  published: '2026-11-14',
  updated: '2026-11-14',
  readingMinutes: 13,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'brackenhall.example against the index',
      period: 'A new customer at each step, week of 9 Nov 2026',
      cols: ['Step', 'Brackenhall', 'Index'],
      rows: [
        { name: 'Sign-up', cells: ['Welcome, 1 min', '89% send'], tone: 'ok' },
        { name: 'Product view', cells: ['Reminder, 2 h', '51% send'], tone: 'ok' },
        { name: 'Basket left', cells: ['None in 48 h', '55% send'], tone: 'fail' },
        { name: 'Checkout left', cells: ['None in 48 h', '51% send'], tone: 'fail' },
      ],
      notes: [
        'Brackenhall goes quiet after a basket and a checkout, where about half the stores in the index send a reminder, half of those within about an hour.',
        'Example: Brackenhall and its times are invented. Index: the share of stores in Obsession’s index that email after each step, 13 November 2026.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'These benchmarks are for founders, heads of ecommerce and CRM leads at ecommerce brands, and for the agencies that run their email, retention or conversion work. They show what online stores sent a new customer after a sign-up, a product view, a basket and a checkout, counted from the customer’s inbox on 13 November 2026.',
    },
    {
      kind: 'p',
      text: 'Of the stores in Obsession’s index, 89% sent a welcome email after a sign-up, and half of those arrived within a minute. After an abandoned basket, 45% sent nothing in 48 hours. After an abandoned checkout, 49% sent nothing. Of the basket and checkout reminders that came, half arrived within about an hour.',
    },
    {
      kind: 'stat',
      value: '89%',
      label: 'of online stores sent a welcome email after a sign-up, half of them within a minute',
      source: 'Obsession’s index, 13 November 2026',
      href: '/lookup',
    },
    {
      kind: 'stat',
      value: '49%',
      label: 'of online stores sent nothing within 48 hours of an abandoned checkout',
      source: 'Obsession’s index, 13 November 2026',
      href: '/lookup',
    },
    {
      kind: 'p',
      text: 'Klaviyo’s and Omnisend’s 2026 benchmarks count from inside email accounts: opens, clicks and revenue for the emails that went out. A store whose basket reminder never sends adds nothing to those averages, so the two counts answer different questions, and a store team needs both.',
    },

    { kind: 'h2', id: 'by-step', text: 'What do online stores send a new customer after each step?' },
    {
      kind: 'p',
      text: 'Nearly every online store sends a welcome email, and about half send a reminder after a product view. Nearly half send nothing after an abandoned basket or checkout, in Obsession’s index on 13 November 2026. A step counts as sent when at least one email arrived within 48 hours of it.',
    },
    {
      kind: 'art',
      real: true,
      art: {
        kind: 'report',
        title: 'What stores send a new customer',
        period: 'Obsession’s index, 13 Nov 2026 · 48 hours per step',
        cols: ['Step', 'Email sent', 'No email'],
        rows: [
          { name: 'Sign-up', cells: ['89%', '11%'], tone: 'ok' },
          { name: 'Product view', cells: ['51%', '49%'], tone: 'info' },
          { name: 'Basket left', cells: ['55%', '45%'], tone: 'fail' },
          { name: 'Checkout left', cells: ['51%', '49%'], tone: 'fail' },
        ],
        notes: [
          'Half the welcome emails arrive within a minute of the sign-up.',
          'Half the basket and checkout reminders that come arrive within about an hour.',
          'A step with no email after 48 hours counts as sending nothing.',
        ],
      },
      caption:
        'On 13 November 2026, 89% of the online stores in Obsession’s index sent a new subscriber a welcome email, while nearly 1 in 2 sent nothing after an abandoned basket or checkout.',
    },
    { kind: 'h3', id: 'welcome', text: 'How many stores send a welcome email?' },
    {
      kind: 'p',
      text: 'Of the stores in the index, 89% sent a welcome email after a sign-up through the store’s own form, and 11% sent nothing in 48 hours. Half the welcome emails arrived within a minute. What a store sends after that first email, and the code each email carries, is in the [welcome email series guide](/blog/welcome-email-series-best-practices).',
    },
    { kind: 'h3', id: 'browse', text: 'How many stores send a reminder after a product view?' },
    {
      kind: 'p',
      text: 'Of the stores in the index, 51% sent an email after a product view, and 49% sent nothing in 48 hours. This product view reminder, usually called a browse abandonment email, can only go to a visitor the store already knows, for example someone who opened the store from one of its emails. [Browse abandonment emails](/blog/browse-abandonment-email) covers what a good one says, and when leaving it out is a fair choice.',
    },
    { kind: 'h3', id: 'basket', text: 'How many stores send an abandoned cart email?' },
    {
      kind: 'p',
      text: 'Of the stores in the index, 55% sent an email after an abandoned basket, where the shopper added an item and left without starting checkout, and 45% sent nothing in 48 hours. Klaviyo uses [abandoned cart email](/glossary/abandoned-cart-email) for both this basket reminder and the checkout reminder, and its help pages [recommend a separate flow for each](' +
        CART_FLOW +
        '). Timing and the number of reminders are in the [abandoned cart email sequence](/blog/abandoned-cart-email-sequence) guide.',
    },
    { kind: 'h3', id: 'checkout', text: 'How many stores send an abandoned checkout email?' },
    {
      kind: 'p',
      text: 'An abandoned checkout is a shopper who typed an email address at checkout and left before paying. Of the stores in the index, 51% sent an email after one, and 49% sent nothing in 48 hours. [Shopify counts a checkout as abandoned](' +
        SH_ABANDONED +
        ') once it stays incomplete for more than 10 minutes after the shopper gives an email. So a Shopify store holds the address for every abandoned checkout it counts.',
    },

    { kind: 'h2', id: 'how-fast', text: 'How fast do online stores send the first email?' },
    {
      kind: 'p',
      text: 'Half the welcome emails in the index arrived within a minute of the sign-up, and half the basket and checkout reminders that came arrived within about an hour of the step. That is earlier than the common sequence in [Klaviyo’s abandoned cart report of 2 October 2026](' +
        CART26 +
        '), which starts with an email after 2 to 4 hours. Its next steps are a text with a discount at 24 hours and a last message at 48 hours.',
    },
    {
      kind: 'p',
      text: '[Klaviyo’s abandoned cart guide](' +
        CART_FLOW +
        ') advises, if you need a short delay, at least 1 hour and 15 minutes where checkout data may reach Klaviyo only once an hour. That can happen with integrations other than Shopify and BigCommerce. Before you compare, write down the delay each of your flows is set to: a first basket reminder set to 4 hours that arrives at 4 hours is working as built.',
    },

    { kind: 'h2', id: 'method', text: 'How does Obsession’s index count what a store sends?' },
    {
      kind: 'p',
      text: 'A new account takes one step at each store. Every email that follows is dated from that step and read at 4, 8, 12, 24 and 48 hours, the same way at every store. Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP (the standard way AI agents call tools), and a company not yet covered is added on request.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**A new account for each step.** Each sign-up, product view, basket and checkout starts from an email address the store has never seen.',
        '**Read at 4, 8, 12, 24 and 48 hours.** Every store runs its reminders on its own clock, so an email counts as missing only once its 48 hours have passed.',
        '**Stops before payment.** The accounts never place an order, and every email counted went to one of the index’s own accounts, never to a store’s customers.',
        '**Kept as it arrived.** Each email is kept with the minute it arrived and its subject, with links, tracking images and the account’s name and address taken out.',
        '**Blocked steps are named.** The accounts never get round a CAPTCHA or a bot check, and the store’s entry, the page the index keeps for it, names the step they couldn’t reach.',
        '**Still subscribed after 48 hours.** The accounts stay on each store’s list, and a fresh sign-up can run [every step again each week](/use-cases/leak-checks-for-ecommerce-stores), so a flow that stops sending shows up that week.',
      ],
    },
    {
      kind: 'p',
      text: 'On 13 November 2026 the index held 1,500 sign-ups, baskets and checkouts run at real companies, and counting. It held 4,196 emails kept as they arrived, and it is built for millions of companies. Each percentage here is the share of stores where the step was taken that sent at least one email within 48 hours.',
    },

    { kind: 'h2', id: 'inside-benchmarks', text: 'What do Klaviyo’s and Omnisend’s email benchmarks count?' },
    {
      kind: 'p',
      text: 'They count how the emails a store sent went on to perform: opens, clicks, orders and revenue per recipient, added up across Klaviyo’s or Omnisend’s customers. The table sets each published figure beside what it counts and when its data is from.',
    },
    {
      kind: 'table',
      caption: 'Published ecommerce email benchmarks, what each one counts, and its date',
      cols: ['Benchmark', 'Counted from', 'Headline figure', 'Date'],
      rows: [
        ['Klaviyo email benchmarks', '183,000+ Klaviyo accounts', 'Flows: 5.3% of sends, nearly 41% of revenue', '2026 report'],
        ['Klaviyo abandoned cart report', '110,000+ Klaviyo accounts', 'Cart email: $6.77 per recipient, 6% click rate', 'Published 2 Oct 2026'],
        ['Klaviyo cart figures, still quoted', '143,000+ abandoned cart flows', '50.5% open rate, 3.33% placed order rate', '2023 data'],
        ['Omnisend ecommerce report', '150,000 brands, 27 billion emails', 'Automated emails: 2% of sends, 30% of revenue', '2025 sends'],
        ['Baymard cart abandonment', '50 studies, 2006 to 2025', '70.22% of carts abandoned', 'Updated 28 Oct 2026'],
        ['Joy Joya welcome test', 'One tester’s inbox, 362 brands', '43.6% sent no welcome email', 'Updated 27 Jul 2026'],
        ['Obsession’s index', 'A new customer’s inbox, each step', '49% sent nothing after a checkout', '13 Nov 2026'],
      ],
    },
    {
      kind: 'p',
      text: '[Klaviyo’s 2026 benchmarks](' +
        BENCH +
        ') cover more than 183,000 Klaviyo customers. They put flows at 5.3% of email sends and nearly 41% of email revenue, with a 5.58% click rate against 1.69% for campaigns. Nearly 48% of flow revenue came from new buyers, which Klaviyo ties to welcome, browse and abandonment flows.',
    },
    {
      kind: 'p',
      text: '[Klaviyo’s abandoned cart report of 2 October 2026](' +
        CART26 +
        ') covers more than 110,000 customers. It puts the abandoned cart email at $6.77 revenue per recipient and a 6% click rate, against a 6.5% click rate for the welcome series. Guides published in 2026 still quote Klaviyo’s 2023 cart figures, from more than 143,000 flows. [Enrich Labs reports them](' +
        ENRICH +
        ') as a 50.5% open rate, a 6.25% click rate, a 3.33% placed order rate and $3.65 per recipient, so label them as 2023 data when you use them.',
    },
    {
      kind: 'p',
      text: '[Omnisend’s 2026 ecommerce marketing report](' +
        OMNI +
        '), from 150,000 brands and 27 billion emails sent in 2025, found automated emails were 2% of sends and 30% of email revenue. Abandoned cart and welcome messages drove 76% of all orders from automations.',
    },
    {
      kind: 'p',
      text: '[Baymard Institute’s list](' +
        BAYMARD +
        '), updated 28 October 2026, puts the average cart abandonment rate at 70.22%, from 50 studies published between 2006 and 2025. Another count from the customer’s side, [a test of 362 ecommerce brands, updated 27 July 2026](' +
        JOYJOYA +
        ') by one tester, found 158 (43.6%) never sent a welcome email.',
    },

    { kind: 'h2', id: 'why-differ', text: 'Why do inside and customer-side benchmarks differ?' },
    {
      kind: 'p',
      text: 'An inside benchmark averages the emails that went out, so a reminder that never sends adds nothing to it. The customer’s side starts from the step a shopper took, so a silent store counts as a store that sent nothing.',
    },
    {
      kind: 'list',
      items: [
        '**A different starting count.** Klaviyo’s rates are counted inside the accounts whose flows send, so a store with no flow running isn’t in them. The index divides the stores that sent an email by the stores where the step was taken.',
        '**Silence leaves no row.** In Klaviyo, a message switched to draft schedules nobody and [doesn’t show in that message’s analytics](' +
          CONTACTS +
          '), so a flow report can look normal while new customers get nothing.',
        '**One flow or two.** Klaviyo uses abandoned cart for both the basket and the checkout reminder, and [most of its pre-built abandoned cart flows start from Started Checkout](' +
          CART_FLOW +
          '). The index reports the basket and the checkout apart.',
        '**One email tool or any.** Klaviyo and Omnisend count their own customers. The index counts whatever reaches the inbox, from Klaviyo, Shopify Email, Omnisend, Mailchimp or another tool.',
        '**Revenue or arrival.** Inside benchmarks report what each email earned, which answers how well a flow sells. The customer’s side reports whether and when the email came, which answers whether the flow sends at all.',
      ],
    },
    {
      kind: 'p',
      text: 'Picture a basket reminder switched to draft on Monday 2 November during a theme change. Last month’s flow report still shows a healthy click rate, because it counts October’s sends. A shopper who leaves a £68 linen throw in the basket at 21:14 on Tuesday 10 November gets no email, and only a count from the customer’s side shows it.',
    },

    { kind: 'h2', id: 'what-to-do', text: 'What should a store team do with the gap?' },
    {
      kind: 'p',
      text: 'Make sure each of the 4 steps sends an email within 48 hours first, then choose the timing, then compare each flow’s click rate and revenue per recipient with the inside benchmarks.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Close the silent steps.** A basket or checkout reminder that never sends earns nothing, whatever its subject line says. [Klaviyo flow not sending](/blog/welcome-basket-email-not-sending) lists the causes to check, from a message left on draft to a code that can’t be made.',
        '**Choose the first delay on purpose.** Half the reminders in the index arrive within about an hour, and Klaviyo’s common sequence starts at 2 to 4 hours. Pick the delay for your products and check that the one in your flow is the one you meant.',
        '**Then compare each flow’s numbers.** A [triggered flow](/glossary/triggered-flow) is an automated series of emails that starts when a customer acts. Set each one against Klaviyo’s 2026 figures: a 6% click rate and $6.77 per recipient for the abandoned cart email, and 6.5% for the welcome series.',
        '**Put a price on each silent step.** Multiply your abandoned checkouts in a month, from Shopify’s Abandoned checkouts report, by your flow’s revenue per recipient or Klaviyo’s 2026 average of $6.77.',
      ],
    },
    {
      kind: 'p',
      text: 'At $6.77 per recipient, if all 100,000 abandoned checkouts in a month were reminded, a checkout reminder that stays silent gives up about $677,000 of attributed revenue. At 20,000 it is $135,400, and at 2,000 it is $13,540, using these example inputs. Halve each figure for the low end, because attributed revenue includes shoppers who would have bought without the email.',
    },

    { kind: 'h2', id: 'your-store', text: 'Where does your store sit against the benchmarks?' },
    {
      kind: 'p',
      text: 'Run the 4 steps on your own store with a new email address, note when each email arrives and set the result against the table. Or look up your store’s entry in the index.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Sign up** through your own pop-up or footer form with an address your store has never seen. Note the minute the welcome email arrives.',
        '**View a product** after opening the store from the welcome email’s link, so the store knows who you are. Wait 48 hours.',
        '**Leave a basket**: add the product, close the tab and wait 48 hours.',
        '**Start a checkout and leave** before paying, with the same address typed at checkout. Wait 48 hours.',
      ],
    },
    {
      kind: 'p',
      text: 'For each email, write down the minute it came and whether your first name and any code work, and list each step that got no email. That test covers one week at one store. The index runs every step the same way at every store, every week, so each step of yours sits beside the share of stores that send one.',
    },
    {
      kind: 'p',
      text: 'If your online store is already in Obsession’s index, the [store lookup](/lookup) sends its entry to an email at your store’s own address. The entry holds every email after a sign-up, a product view, a basket and a checkout. Each one is dated, read at 4, 8, 12, 24 and 48 hours and set against every other store in the index. To see a whole entry first, [See sample data](' +
        SAMPLE +
        ') from a UK skincare store in September 2026. There, a £40 gift set left in the basket at 02:57 got no reminder in 48 hours.',
    },
    {
      kind: 'p',
      text: 'An entry goes only to an address at the store itself, so agencies that do email, retention or conversion work start from [early access for agencies](/lookup#agencies). It looks up every store already in the index and adds up to 5 stores you run or pitch, with the brand’s OK. We check each agency before we set up access.',
    },
    {
      kind: 'cta',
      text: 'See every email your store sent a new customer after each of the 4 steps, dated and set beside every other store in the index.',
      to: '/lookup',
      label: 'Look up your store',
    },

    { kind: 'h2', id: 'stores-and-clients', text: 'How do you compare your store with the leaders in your category, and with your clients?' },
    {
      kind: 'p',
      text: 'These figures cover the whole index. For your own online store, the [store lookup](/lookup) shows each step’s result beside them. With Obsession, the same comparison narrows to the biggest stores in your category, read the same way as yours. You see their welcome speed, their first basket reminder and how often they email.',
    },
    {
      kind: 'list',
      items: [
        '**Win the pitch:** an agency shows a prospect where its store sits against these benchmarks, step by step.',
        '**Keep the client:** each month’s report sets the client’s steps beside the index, and a fresh sign-up every week shows any step that slips.',
        '**Grow the account:** the steps where a client falls below the leaders, such as a missing checkout reminder, become the next proposal, each with the email behind it.',
      ],
    },
    {
      kind: 'screen',
      screen: 'inbox',
      caption: 'Three competitors’ emails and texts over 30 days, side by side: when one changes its offer, the new message opens beside the old one.',
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
          q: 'What are the ecommerce email marketing benchmarks for 2026?',
          a: 'From the customer’s side, 89% of online stores sent a welcome email in Obsession’s index on 13 November 2026. After a product view 51% sent an email, after an abandoned basket 55% and after an abandoned checkout 51%. From inside accounts, Klaviyo’s 2026 benchmarks put flows at 5.3% of email sends and nearly 41% of email revenue, with a 5.58% flow click rate.',
        },
        {
          q: 'What share of online stores send an abandoned cart email?',
          a: 'In Obsession’s index on 13 November 2026, 55% of online stores sent an email within 48 hours of an abandoned basket, and 51% after an abandoned checkout. The rest sent nothing in those 48 hours.',
          link: { label: 'Abandoned cart email sequence', to: '/blog/abandoned-cart-email-sequence' },
        },
        {
          q: 'How fast do stores send the first abandoned cart email?',
          a: 'Half the basket and checkout reminders in Obsession’s index arrived within about an hour of the step, on 13 November 2026. Klaviyo’s abandoned cart report of 2 October 2026 gives 2 to 4 hours as a common first delay.',
        },
        {
          q: 'Do most online stores send a welcome email?',
          a: 'Yes. In Obsession’s index on 13 November 2026, 89% of online stores sent a welcome email after a sign-up, and half of those arrived within a minute. A test of 362 brands by one tester, updated in July 2026, found 43.6% sent none, from a different set of stores.',
          link: { label: 'The welcome email series, day by day', to: '/blog/welcome-email-series-best-practices' },
        },
        {
          q: 'What is a good abandoned cart email click rate?',
          a: 'Klaviyo’s abandoned cart report of 2 October 2026 puts the average abandoned cart email click rate at 6%, and 11.3% for the top 10% of brands. Its 2023 figures, still quoted, gave a 50.5% open rate and a 3.33% placed order rate.',
        },
        {
          q: 'How much email revenue comes from flows?',
          a: 'Nearly 41% of email revenue comes from flows, on 5.3% of sends, across more than 183,000 Klaviyo customers in its 2026 benchmarks. Omnisend’s 2026 report puts automated emails at 30% of email revenue on 2% of sends in 2025.',
        },
        {
          q: 'How can I compare my store with these benchmarks?',
          a: 'Run a sign-up, a product view, a basket and a checkout on your own store with a new email address, and note what arrives within 48 hours of each. If your store is in Obsession’s index, the store lookup sends its entry, every email after each step and dated, to an email at your store’s own address.',
          link: { label: 'Look up your store', to: '/lookup' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How these benchmarks were counted',
      text: 'Obsession’s figures are the index’s totals on 13 November 2026, as the store lookup shows them. Each is the share of stores where a step was taken that sent at least one email within 48 hours, or the time by which half the first emails arrived. Every other figure is its publisher’s own, with the date that publisher gives. Klaviyo and Omnisend report revenue the way their dashboards attribute it, which includes orders an email didn’t cause.',
    },
  ],

  sources: [
    { title: 'How to create an abandoned cart flow', publisher: 'Klaviyo Help Center', url: CART_FLOW, date: '2026-10-24' },
    { title: 'Abandoned checkouts', publisher: 'Shopify Help Center', url: SH_ABANDONED },
    { title: 'The abandoned cart benchmarks report: 2026 data to inform your strategy', publisher: 'Klaviyo (Tiff Regaudie)', url: CART26, date: '2026-10-02' },
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: BENCH, date: '2026' },
    { title: 'Abandoned cart email: complete guide 2026', publisher: 'Enrich Labs', url: ENRICH, date: '2026' },
    { title: 'Omnisend’s 2026 ecommerce marketing report', publisher: 'Omnisend', url: OMNI, date: '2026' },
    { title: 'Cart abandonment rate: 50 statistics and why people abandon', publisher: 'Baymard Institute', url: BAYMARD, date: '2026-10-28' },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'Understanding how contacts move through a flow', publisher: 'Klaviyo Help Center', url: CONTACTS, date: '2026-10-25' },
    { title: 'Sample output: the September store check', publisher: 'Obsession', url: SAMPLE, date: '2026-09' },
  ],

  related: [
    'abandoned-cart-email-sequence',
    'browse-abandonment-email',
    'welcome-email-series-best-practices',
    'welcome-basket-email-not-sending',
    '/lookup',
    '/sample-output',
    '/glossary/triggered-flow',
  ],
}
