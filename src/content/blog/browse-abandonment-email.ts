import type { BlogPost } from './types'

/* Guide 4 of the store lookup set (plan and brief: Obsession/_research/seo/lookup-articles-14nov/, approved by Seun on
   14 Nov 2026). Readers: a team at an ecommerce brand that runs its own email flows (founder, head of ecommerce, CRM or
   retention lead) and the agencies that do email, retention or conversion work for them. Owns "browse abandonment email"
   and its 6 secondaries from Google autocomplete (autocomplete_14nov.json); "klaviyo flow not sending" stays with
   welcome-basket-email-not-sending and "abandoned cart email" with the glossary.
   The point a reader leaves with: the email reaches only an identified visitor, and about half the stores in the index
   send one. Every platform rule was read at its source on 14 Nov 2026: Klaviyo Help (browse abandonment flow, updated
   24 Oct 2026; onsite tracking, 28 Oct; cookies, 26 Oct; onsite tracking for Shopify, 30 Oct), Klaviyo's 2026 benchmark
   blog (2 Oct 2026, 110,000+ customers), Shopify Help (Messaging automations, the Create page, requirements, the Flow
   trigger "Customer left online store without making a purchase"; none shows a date) and shopify.dev (the Abandonment
   object). Index figures are the lookup's totals of 13 Nov 2026 (content/lookupSample.ts sampleTotals: product view 51%
   send, sign-up 89%, basket 55%, checkout 51%), printed as percentages, never tallies. The plan's "most of those within
   minutes" is left out: the brief's list of printable figures doesn't carry it. Subject lines and the template are
   invented patterns on brackenmoor.example; no real brand's email is copied. Not used: a Shopify Community reply on
   identification (its author isn't marked as Shopify staff), third-party benchmark round-ups. British English, no dashes. */

const BROWSE = 'https://help.klaviyo.com/hc/en-us/articles/115002775252'
const ONSITE = 'https://help.klaviyo.com/hc/en-us/articles/115005076767'
const COOKIES = 'https://help.klaviyo.com/hc/en-us/articles/360034666712'
const ONSITE_SHOPIFY = 'https://help.klaviyo.com/hc/en-us/articles/115001396711'
const KL_BENCH = 'https://www.klaviyo.com/blog/abandoned-cart-benchmarks'
const SH_AUTOS = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/marketing-automations'
const SH_CREATE = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/marketing-automations/create'
const SH_REQ = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/marketing-automations/requirements-considerations'
const SH_FLOW = 'https://help.shopify.com/en/manual/shopify-flow/reference/triggers/customer-left-online-store'
const SH_ABANDON = 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment'

export const post: BlogPost = {
  slug: 'browse-abandonment-email',
  title: 'Browse abandonment emails: what stores send after a product view, and what to fix',
  dek: 'About half the stores in Obsession’s index send an email after a shopper looks at a product and leaves (13 November 2026). Who that email can reach, what a good one says, when to skip it and how to test yours with a new address.',
  metaTitle: 'Browse abandonment email: what stores send and what to fix',
  description:
    'Browse abandonment email for online stores: who it can reach, how many stores send one after a product view, what a good one says and how to test yours.',
  answer:
    'A browse abandonment email is the automated email an online store sends after a shopper views a product and leaves without adding it to the basket. It shows that product, its price and a link back, and it reaches only an identified visitor, a shopper the store can already match to an email address. Obsession keeps what each store sends a new customer after a sign-up, a product view, a basket and a checkout, dated, and the store lookup shows your own store’s entry.',
  primaryKeyword: 'browse abandonment email',
  keywords: [
    'browse abandonment email',
    'browse abandonment email examples',
    'browse abandonment email klaviyo',
    'browse abandonment email flow',
    'browse abandonment email best practices',
    'browse abandonment email subject lines',
    'browse abandonment email template',
  ],
  category: 'Check your own journeys',
  published: '2026-11-14',
  updated: '2026-11-14',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'flow',
      title: 'brackenmoor.example · after a product view',
      steps: [
        { label: 'Product view', detail: 'Linen throw, £68, viewed at 20:41', tone: 'info' },
        { label: 'No basket', detail: 'The shopper leaves without adding it', tone: 'info' },
        { label: 'Wait', detail: 'The flow holds the email for 2 hours', tone: 'info' },
        { label: 'Email arrives', detail: '22:41: the throw, £68 and a link back', tone: 'ok' },
      ],
      foot: 'About half the stores in Obsession’s index send an email after a product view (13 November 2026).',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A browse abandonment email is the automated email an online store sends after a shopper looks at a product and leaves without adding it to the basket. It shows that product, its price and a link straight back to it, at least an hour after the view. Ecommerce brands that run their own email flows set it up as a [triggered flow](/glossary/triggered-flow), a series of emails that starts when a customer does something. So do the agencies that do email, retention or conversion work for them.',
    },
    {
      kind: 'p',
      text: 'The email reaches only an identified visitor, a shopper whose browser the store has already matched to an email address. In Obsession’s index of what stores send new customers, 51% of stores sent an email after a product view and 49% sent nothing, as of 13 November 2026.',
    },

    { kind: 'h2', id: 'what-it-is', text: 'What is a browse abandonment email?' },
    {
      kind: 'p',
      text: 'A browse abandonment email follows a product view, the earliest of the 3 steps a shopper can leave at before buying. [Klaviyo’s guide to the browse abandonment flow](' +
        BROWSE +
        ') says a visitor doesn’t have to add anything to the basket to start it. Because a view shows less interest than a basket, Klaviyo advises a lighter touch than the basket reminder, the email a store sends after an abandoned basket.',
    },
    {
      kind: 'table',
      caption: 'The 3 emails a store can send after a shopper leaves, by the step they left at',
      cols: ['Email', 'Starts when the shopper', 'What the store holds by then'],
      rows: [
        ['Browse abandonment email', 'Views a product and leaves', 'An email address, if the visitor is identified'],
        ['Basket reminder', 'Adds to the basket and leaves', 'The items, and an email address if identified'],
        ['Checkout reminder', 'Types an email at checkout, leaves', 'The items and the email typed in'],
      ],
    },
    {
      kind: 'p',
      text: 'In Shopify Messaging, Shopify’s own email tool, the same email is the **Convert abandoned product browse** template. It [sends a message to customers who view at least one product](' +
        SH_CREATE +
        ') and leave without adding it to the basket or buying, by email, text or WhatsApp. [The abandoned cart email sequence](/blog/abandoned-cart-email-sequence) covers when each basket and checkout reminder should go out.',
    },

    { kind: 'h2', id: 'identified-visitor', text: 'Why does a browse abandonment email need an identified visitor?' },
    {
      kind: 'p',
      text: 'A store can email a shopper about a product only once it has the shopper’s email address, so the flow fires for an identified visitor and for nobody else. [Klaviyo’s onsite tracking guide](' +
        ONSITE +
        ') says a visit alone doesn’t make a browser known, and lists the ways a browser becomes known.',
    },
    {
      kind: 'list',
      items: [
        'The shopper clicked through a Klaviyo email or text to the store.',
        'The shopper subscribed, or typed an email address or phone number, in a Klaviyo sign-up form.',
        'The shopper logged in, where the store has added the custom tracking for logged-in shoppers that Klaviyo’s own ecommerce integrations leave out.',
        'On Shopify, the shopper typed their contact details at checkout, which [Klaviyo picks up from Shopify’s checkout events](' +
          COOKIES +
          ').',
      ],
    },
    {
      kind: 'art',
      art: {
        kind: 'log',
        title: 'brackenmoor.example · two views of a throw',
        who: 'One shopper on one laptop, not yet signed up',
        rows: [
          { time: '12:10', text: 'Views the £68 linen throw', detail: 'The store has no email address for this browser', tone: 'info' },
          { time: '14:10', text: 'No email', detail: 'There is nobody to send it to', tone: 'fail' },
          { time: '19:02', text: 'Signs up through the pop-up', detail: 'The sign-up ties this browser to an email address', tone: 'ok' },
          { time: '20:41', text: 'Views the throw again', detail: 'The view is recorded against the subscriber', tone: 'info' },
          { time: '22:41', text: 'Email arrives', detail: 'The throw, £68 and a link back to it', tone: 'ok' },
        ],
        foot: 'The second view got an email because the sign-up told the store who was looking.',
      },
      caption: 'The same shopper’s view got no email before the sign-up and an email 2 hours after it, because by then the store knew who was looking. Brackenmoor is an invented store.',
    },
    {
      kind: 'p',
      text: 'Identification belongs to one browser. A shopper who clicked your welcome email on their phone is still unknown on their laptop until they sign up or click through there too. [Klaviyo’s guide](' +
        ONSITE +
        ') says a browser has to be identified again if its identifying cookie expires or is deleted. That is why the link in the welcome email matters to every later flow. [What a welcome series sends after the first email](/blog/welcome-email-series-best-practices) starts with a welcome that brings the shopper back to the store.',
    },
    {
      kind: 'p',
      text: 'Consent decides it too. [Klaviyo notes](' +
        BROWSE +
        ') that it may not track visitors in the EU, the European Economic Area, the UK and Switzerland who haven’t given consent, depending on a Shopify store’s customer privacy settings. Those shoppers never enter the flow.',
    },
    {
      kind: 'p',
      text: 'Shopify works from a customer record in the same way. Its developer reference ties every [browse abandonment to a named customer](' +
        SH_ABANDON +
        '), and Shopify Messaging automations [go only to customers subscribed to marketing](' +
        SH_AUTOS +
        ') on that channel by default.',
    },

    { kind: 'h2', id: 'how-many-send', text: 'How many stores send a browse abandonment email?' },
    {
      kind: 'p',
      text: 'About half. The index reads every store the same way. A new account takes each step, and its inbox is read at 4, 8, 12, 24 and 48 hours after it. A slow email still counts as sent.',
    },
    {
      kind: 'table',
      caption: 'Share of stores that sent an email after each step, Obsession’s index, 13 November 2026',
      cols: ['Step', 'Sent an email', 'Sent nothing'],
      rows: [
        ['Sign-up', '89%', '11%'],
        ['Product view', '51%', '49%'],
        ['Basket', '55%', '45%'],
        ['Checkout', '51%', '49%'],
      ],
    },
    {
      kind: 'p',
      text: 'The checkout row is the surprise. A shopper who typed their email at checkout got an email from the same share of stores, 51%, as a shopper who only looked at a product. Check your basket and checkout reminders before you build a browse abandonment email, because those shoppers were closer to buying. [Ecommerce email marketing benchmarks](/blog/ecommerce-email-marketing-benchmarks) sets each step’s figures beside the ones counted inside email accounts.',
    },
    {
      kind: 'p',
      text: '[Klaviyo’s 2026 benchmark report](' +
        KL_BENCH +
        ') covers more than 110,000 Klaviyo customers and was published on 2 October 2026. It puts the average click rate of a browse abandonment email at 5.6% across verticals, and Klaviyo’s abandoned cart flows, its name for the reminders after a basket or a checkout, at $6.77 in revenue per recipient.',
    },
    {
      kind: 'stat',
      value: '5.6%',
      label: 'average click rate of a browse abandonment email across verticals',
      source: 'Klaviyo, 2026 benchmarks across 110,000+ customers, published 2 October 2026',
      href: KL_BENCH,
    },

    { kind: 'h2', id: 'cost', text: 'What does a missing browse abandonment email cost?' },
    {
      kind: 'p',
      text: 'Multiply the browse abandonment emails a working flow would deliver in a month by its revenue per recipient, then halve it. Before the flow exists, count the subscribed profiles who viewed a product in the last 30 days and didn’t add to the basket or order. For revenue per recipient, start from your basket reminder’s figure in its flow report and plan on well under it, because a product view is further from buying than a basket.',
    },
    {
      kind: 'table',
      caption: 'A month of browse abandonment emails at an example $2 per recipient, under a third of Klaviyo’s $6.77 for abandoned cart flows. Every input is an example: put in your own.',
      cols: ['Emails delivered a month', 'Attributed revenue a month', 'Planning figure, half'],
      rows: [
        ['50,000', 'About $100,000', 'About $50,000'],
        ['10,000', 'About $20,000', 'About $10,000'],
        ['1,000', 'About $2,000', 'About $1,000'],
      ],
    },
    {
      kind: 'p',
      text: 'Attributed revenue counts shoppers who would have bought without the email, so plan on half. Once the flow has run for a month, replace the example $2 with your own revenue per recipient from the flow’s report.',
    },

    { kind: 'h2', id: 'when-to-skip', text: 'When is skipping a browse abandonment email a fair choice?' },
    {
      kind: 'p',
      text: 'Skipping it is fair when another email matters more, when few shoppers would get it or gain from it, or when an email about a viewed product would feel intrusive or repetitive.',
    },
    {
      kind: 'list',
      items: [
        '**Your basket and checkout reminders don’t arrive yet.** Those shoppers went further, and Klaviyo’s 2026 figures put its abandoned cart flows at $6.77 in revenue per recipient. Fix the reminders first.',
        '**Your email list is new.** With a list of a few hundred subscribers and mostly first-time visitors, the flow has almost nobody it can identify. Grow the sign-up form first.',
        '**A product view is private.** For health, intimate or other sensitive products, an email naming the item a shopper viewed can feel intrusive. Send an email about the range, or none.',
        '**Shoppers rarely look before they buy.** A store that sells 1 product, or a low-priced repeat purchase, gains little from an email about an item the shopper already knows.',
        '**You already email every day.** A browse abandonment email on top of a daily campaign adds volume. Leave Klaviyo’s Smart Sending on, as its browse abandonment guide advises. [Shopify’s template leaves out anyone who got](' +
          SH_FLOW +
          ') an abandoned checkout, cart or product browse email in the last 14 days.',
      ],
    },

    { kind: 'h2', id: 'what-to-say', text: 'What should a browse abandonment email say?' },
    {
      kind: 'p',
      text: 'Show the one product the shopper viewed: its photo, name and price, and one button back to its page. Then answer one question a shopper might have before buying, such as fit, delivery or returns. Keep the tone lighter than the basket reminder, as Klaviyo advises, with no countdown on an item with plenty in stock.',
    },
    {
      kind: 'p',
      text: 'Keep any code for shoppers who have never ordered. Klaviyo’s guide suggests a code for that group as one option, and suggests leaving it out for repeat customers who come back to browse.',
    },
    {
      kind: 'table',
      caption: 'A browse abandonment email template, part by part, with invented example copy for Brackenmoor, a made-up homeware store',
      cols: ['Part', 'What it does', 'Example'],
      rows: [
        ['Subject line', 'Names the product viewed', 'The linen throw is still here'],
        ['First line', 'Says why it arrived', 'The throw again, in case you’re still deciding'],
        ['Product block', 'Photo, name, price, one button', 'Linen throw, oatmeal, £68. View the throw'],
        ['One answer', 'Removes one reason to wait', 'Free returns for 30 days'],
        ['Similar items', 'For a shopper still choosing', '3 other throws in the same size'],
        ['Sign-off', 'The brand or a named person', 'The Brackenmoor team'],
      ],
    },

    { kind: 'h2', id: 'subject-lines', text: 'What subject lines work for a browse abandonment email?' },
    {
      kind: 'p',
      text: 'Name the product in plain words and add one useful detail, such as the colour or the returns policy. Leave out stock warnings and countdowns the shopper has no reason to believe.',
    },
    {
      kind: 'table',
      caption: 'Browse abandonment email subject lines as patterns, each with an invented example',
      cols: ['Pattern', 'When it fits', 'Example'],
      rows: [
        ['[Product] is still here', 'Any viewed product', 'The linen throw is still here'],
        ['[Product], in [colour or size]', 'Colour or size matters', 'The linen throw, in oatmeal'],
        ['What people ask about [product]', 'Fit or care questions', 'What people ask about the linen throw'],
        ['[Product], with free returns', 'Returns hold shoppers back', 'The linen throw, with free returns'],
        ['[Product] and 3 like it', 'A large range', 'The linen throw and 3 like it'],
        ['[Product] for [season or use]', 'Seasonal ranges', 'The linen throw for colder evenings'],
      ],
    },
    {
      kind: 'p',
      text: 'Run 2 patterns against each other for a month before changing again, and judge them on placed orders. Klaviyo’s cookie guide warns that [Apple Mail Privacy Protection inflates open rates](' +
        COOKIES +
        '), so opens can’t pick the winner.',
    },

    { kind: 'h2', id: 'set-up', text: 'How do you set up a browse abandonment flow in Klaviyo and Shopify?' },
    {
      kind: 'p',
      text: 'In Klaviyo, start from the pre-built browse abandonment template where your integration has one, which Klaviyo recommends so the product name, image and price fill in correctly. Then check each setting in this order.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Check that the Viewed Product metric is arriving: Analytics, then Metrics, then search for Viewed Product. On Shopify it comes from Klaviyo’s app embed, which [has to be turned on again after a new theme](' +
          ONSITE_SHOPIFY +
          ').',
        'Trigger the flow on Viewed Product.',
        'Add Klaviyo’s profile filters: **Placed Order** and **Started Checkout** zero times since starting this flow, and **hasn’t been in this flow in the last 30 days**. If a separate flow runs on Added to Cart, add **Added to Cart** zero times too.',
        'Set a wait of at least 1 hour before the first email.',
        'Show the product with a Static block that reads the viewed item’s image, name, price and link. A copy of the basket reminder carries a Dynamic block, and switching the block type erases its tags.',
        'Leave Smart Sending on, and switch the email from Draft to Live, because draft emails don’t send.',
      ],
    },
    {
      kind: 'p',
      text: 'In the Shopify admin, open Apps, then Messaging, then Automations, and create an automation from the **Convert abandoned product browse** template. Shopify lists [the Basic plan or higher and, for full functionality, the Shopify Flow app](' +
        SH_REQ +
        ') as requirements, and warns that automations interact: 2 welcome automations send customers twice as many emails. Run the browse abandonment email from one tool per store.',
    },
    {
      kind: 'p',
      text: 'If a flow that should send never does, [Klaviyo flow not sending](/blog/welcome-basket-email-not-sending) works through each cause, from the trigger to Smart Sending.',
    },

    { kind: 'h2', id: 'test', text: 'How do you test your browse abandonment email?' },
    {
      kind: 'p',
      text: 'Test it as a new shopper: a private browser window your store has never seen, a new email address, and a note of the time at each step.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Sign up through your own pop-up or footer form with the new address.',
        'Open the welcome email and click its link back to the store. On a Klaviyo store, a developer can type klaviyo.isIdentified() into the browser console; Klaviyo’s cookie guide says it resolves to true once the browser is known.',
        'View one product for 10 seconds, then close the tab without adding it to the basket.',
        'Check the inbox at 4, 8, 12, 24 and 48 hours, in every Gmail tab, and write down when the email arrives.',
        'Open the email on a phone. It should show the product you viewed at today’s price, and its button should open that product’s page.',
        'Repeat with a second new address that adds the product to the basket. If your store sends a basket reminder, it should arrive with no browse abandonment email beside it.',
      ],
    },
    {
      kind: 'p',
      text: 'A pass is one email, after the wait you set, with the right product, the right price and a working link. For Shopify Messaging, [Shopify’s guide to the trigger](' +
        SH_FLOW +
        ') describes the same test: visit the store as a customer, click at least one product, then leave.',
    },
    {
      kind: 'p',
      text: 'If your online store is already in Obsession’s index, the [store lookup](/lookup) shows what it sent after a product view, without the wait. Type an email at your store’s own address, and its entry comes to that inbox. It shows every email after a sign-up, a product view, a basket and a checkout. Each one is dated, read at 4, 8, 12, 24 and 48 hours and set against every other store in the index.',
    },
    {
      kind: 'p',
      text: 'Agencies that do email, retention or conversion work can [look up the stores they run or pitch](/lookup#agencies). Early access looks up every store already in the index and adds up to 5 stores an agency runs or pitches, with the brand’s OK. We check each agency before we set up access.',
    },

    { kind: 'h2', id: 'every-week', text: 'How do you know your browse abandonment email still sends next month?' },
    {
      kind: 'p',
      text: 'Run the test again after every change to your theme, apps, consent banner or flows. A new theme needs Klaviyo’s app embed turned on again. A consent banner that blocks Klaviyo until a visitor opts in stops tracking for everyone who doesn’t, and an email switched to Draft stops sending.',
    },
    {
      kind: 'p',
      text: 'By hand, each test is one store, one browser and a 48 hour wait. The index reads every store the same way and its accounts stay subscribed, so each store’s entry keeps filling with the emails that follow. With a weekly check, a fresh sign-up runs [every step again each week](/use-cases/leak-checks-for-ecommerce-stores), so a browse abandonment email that stops shows up that week, beside the week it last arrived. The index is built for millions of companies.',
    },
    {
      kind: 'cta',
      text: 'See whether your store sends an email after a product view, how long it takes to arrive and how that compares with every other store in the index.',
      to: '/lookup',
      label: 'Look up your store',
    },

    { kind: 'h2', id: 'stores-and-clients', text: 'How do you check browse emails for your store, the leaders and your clients?' },

    {

      kind: 'p',

      text: 'For your own online store, the [store lookup](/lookup) shows whether a browse abandonment email arrived after a product view, and what it said, beside every other store in the index. With Obsession, you can set your store beside the biggest stores in your category. You see which of them send one, how long they wait and what the email shows.',

    },

    {

      kind: 'list',

      items: [

        '**Win the pitch:** an agency opens with the product view that got no email at a prospect’s store.',

        '**Keep the client:** a fresh sign-up every week shows the browse email still sending after a new theme, when Klaviyo’s app embed has to be turned on again.',

        '**Grow the account:** a browse email the client doesn’t send yet, where the leaders in its category do, becomes the next flow to build.',

      ],

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
          q: 'What is a browse abandonment email?',
          a: 'A browse abandonment email is the automated email a store sends after an identified shopper views a product and leaves without adding it to the basket. It shows that product, its price and a link back, at least an hour after the view.',
          link: { label: 'What is a triggered flow?', to: '/glossary/triggered-flow' },
        },
        {
          q: 'What are good browse abandonment email examples?',
          a: 'A good browse abandonment email example shows the one product viewed: its photo, name and price, and one button back to its page. It answers one question such as returns or fit, adds 2 or 3 similar products for a shopper still choosing, and reads lighter than a basket reminder, with no countdown.',
        },
        {
          q: 'How do I set up a browse abandonment email in Klaviyo?',
          a: 'In Klaviyo, a browse abandonment email runs from a flow triggered by the Viewed Product metric. Its filters drop anyone who adds to the basket, starts a checkout, orders or entered the flow in the last 30 days. It waits at least 1 hour and shows the product in a Static block. Klaviyo recommends its pre-built template where your integration has one.',
        },
        {
          q: 'How many emails should a browse abandonment email flow have?',
          a: 'Start a browse abandonment email flow with 1 email, sent at least an hour after the view. Add a second, a day or two later with similar products, once the first has a month of placed orders to compare against; Klaviyo’s guide leaves the number of emails to you.',
        },
        {
          q: 'What are browse abandonment email best practices?',
          a: 'Browse abandonment email best practices start with timing: wait at least an hour, and drop anyone who added to the basket, started a checkout or ordered. Show the exact product viewed with a working link, keep the tone lighter than the basket reminder, and keep any code for shoppers who have never ordered.',
        },
        {
          q: 'What makes good browse abandonment email subject lines?',
          a: 'Good browse abandonment email subject lines name the product viewed in plain words, such as “The linen throw is still here”. They add one useful detail, such as the colour or free returns. Leave out countdowns and stock warnings the shopper has no reason to believe.',
        },
        {
          q: 'Is there a browse abandonment email template?',
          a: 'Yes. Klaviyo ships a pre-built browse abandonment email template for Shopify and other integrations, and Shopify Messaging has the Convert abandoned product browse template. Check either one on a phone, with a real product view, before it goes live.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'The Klaviyo help pages cited were updated between 24 and 30 October 2026. Shopify’s help pages show no date, and the wording cited is as it stood on 14 November 2026. The store figures cover every product view, sign-up, basket and checkout in Obsession’s index as of 13 November 2026. The subject lines and the template are invented examples on a made-up store, and copy no real brand’s email. Help pages change, so check the page before you act.',
    },
  ],

  sources: [
    { title: 'How to create a browse abandonment flow', publisher: 'Klaviyo Help Center', url: BROWSE, date: '2026-10-24' },
    { title: 'Creating and managing marketing automations in Shopify Messaging', publisher: 'Shopify Help Center', url: SH_CREATE },
    { title: 'Getting started with Klaviyo onsite tracking', publisher: 'Klaviyo Help Center', url: ONSITE, date: '2026-10-28' },
    { title: 'Understanding cookies in Klaviyo', publisher: 'Klaviyo Help Center', url: COOKIES, date: '2026-10-26' },
    { title: 'Abandonment', publisher: 'Shopify Admin GraphQL API reference', url: SH_ABANDON },
    { title: 'Marketing automations in Shopify Messaging', publisher: 'Shopify Help Center', url: SH_AUTOS },
    { title: 'The abandoned cart benchmarks report: 2026 data to inform your strategy', publisher: 'Klaviyo', url: KL_BENCH, date: '2026-10-02' },
    { title: 'Customer left online store without making a purchase', publisher: 'Shopify Help Center', url: SH_FLOW },
    { title: 'How to enable onsite tracking for Shopify', publisher: 'Klaviyo Help Center', url: ONSITE_SHOPIFY, date: '2026-10-30' },
    { title: 'Requirements and considerations for creating marketing automations', publisher: 'Shopify Help Center', url: SH_REQ },
  ],

  related: [
    'abandoned-cart-email-sequence',
    'welcome-email-series-best-practices',
    'welcome-basket-email-not-sending',
    'ecommerce-email-marketing-benchmarks',
    '/glossary/triggered-flow',
    '/lookup',
    '/use-cases/leak-checks-for-ecommerce-stores',
  ],
}
