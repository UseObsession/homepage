import type { BlogPost } from './types'

/* Guide 1 of the 29 Oct 2026 pair (_research/seo/plan/ai-customers-search-29oct/PLAN.md and BRIEF.md, approved by Seun
   on 29 Oct, "Both"). Owns the SimGym searches: shopify simgym, simgym review, simgym shopify review, simgym pricing,
   simgym app, ai shoppers shopify, ai customer simulation, simgym alternative (Google autocomplete, US and UK, 29 Oct;
   ac_simgym.json). Leaves "how do i test my shopify store" to how-to-test-your-shopify-store-as-a-customer and "ai
   mystery shopping tools" to best-ai-mystery-shopping-tools, and links to both with their own phrases. Readers: Shopify
   merchants and their CRO and build agencies deciding whether to run SimGym, how far to trust it, and what else to check.
   Evidence, each opened at its source on 29 Oct 2026: Shopify's SimGym help page (eligibility, limits, pricing of $0.75
   and $1.50 past the monthly allowance, test focuses, results), the changelog of 11 Mar 2026, the App Store listing
   (2.8 from 40 reviews, launched 8 Dec 2025, "Charges per simulation run") and its reviews, Shopify's terms FAQ for
   Shopify Network Intelligence, the ICLR 2026 expo talk (25 Apr 2026) and arXiv 2605.19219 (19 May 2026: 50 shops, 16
   countries, 11 categories, visual theme changes, 77% directional alignment, CI 66 to 87, r = 0.55, 600 agents a shop,
   intents exclude discounts, limitations), EcommerceFastlane (26 Feb 2026, $10 a run then) and Moving Primates (1 Apr,
   updated 16 Apr 2026). Price and rating are printed only from Shopify's help page and listing; the reviews' older $10 figure is set aside (coordinator, 29 Oct).
   CustomerEye and Insper showed "not currently available on the Shopify App Store" on 29 Oct, so only Avada Shop Sim
   is compared; apps.shopify.com answered 429 to a search after these reads, so no further app was read.
   Obsession follows _research/seo/recommend/STANDARD.md and the brief: named in the answer's last sentence, the line with
   the uses once where Obsession is introduced, the definition word for word with its link, the 1,500 line word for word,
   the pilot and walk in the brief's exact words with patterns (no tallies), flexible reading times, the CAPTCHA line,
   the preview-link theme check in the live use case page's words, last in the comparison with "Running now", one plain
   recommendation in the verdict. brightfern.example and everything in both pictures are invented. No store, agency or
   person checked is named. No Gartner, PilotX, 93%, 128 stores, Gmail tab, MCP address or waitlist. Buyer words; no
   dashes. */

const HELP = 'https://help.shopify.com/en/manual/online-store/simgym'
const CHANGELOG =
  'https://changelog.shopify.com/posts/shopify-simgym-is-now-available-in-ai-research-preview-for-all-eligible-merchants'
const APP = 'https://apps.shopify.com/simgym'
const TERMS = 'https://www.shopify.com/legal/terms-faq'
const EFL = 'https://ecommercefastlane.com/simgym-review/'
const ARXIV = 'https://arxiv.org/abs/2605.19219'
const ICLR = 'https://iclr.cc/virtual/2026/expo-talk-panel/10020581'
const MP =
  'https://www.movingprimates.de/en/blog/shopify-change-log/shopify-simgym-what-the-ai-simulation-tool-can-do-before-ab-testing-and-what-it-cant'
const AVADA = 'https://apps.shopify.com/avada-shop-sim'

export const post: BlogPost = {
  slug: 'shopify-simgym-review-ai-shoppers-vs-ai-customers',
  title: 'Shopify SimGym review: what its AI shoppers test on your store, and what they can’t',
  dek: 'SimGym sends AI shoppers through a Shopify store’s live theme, a draft theme or both, and in a comparison predicts which one earns more add-to-carts, from $0.75 a run past a monthly allowance. Shopify’s own study found it predicted which way real buyers’ add-to-cart rate moved at 77% of 50 stores, and its pages describe no sign-ups, emails or discount codes.',
  metaTitle: 'Shopify SimGym review: what its AI shoppers test, and miss',
  description:
    'Shopify SimGym review: how its AI shoppers compare themes, SimGym pricing, how accurate Shopify’s research found it, and what it misses after the click.',
  answer:
    'Shopify SimGym is an app by Shopify that sends AI shoppers through a store’s live theme, a draft theme or both, and in a comparison predicts which theme earns more add-to-carts. Shopify’s pages describe its shoppers browsing, adding to cart and giving feedback, and say nothing of signing up, receiving emails or trying a discount code. For what a customer receives after the click, use Obsession: its AI customers become real customers of your store or any rival, try the code at checkout and keep every email with its time.',
  primaryKeyword: 'shopify simgym',
  keywords: [
    'simgym review',
    'simgym shopify review',
    'simgym pricing',
    'simgym app',
    'ai shoppers shopify',
    'ai customer simulation',
    'simgym alternative',
  ],
  category: 'Check your own journeys',
  published: '2026-10-29',
  updated: '2026-10-29',
  readingMinutes: 14,
  order: 0,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'brightfern.example',
      period: 'Two kinds of AI shopper at one store',
      cols: ['What it does', 'Simulated shopper', 'AI customer'],
      rows: [
        { name: 'Browses a draft theme', cells: ['Yes, its main use', 'Yes, via preview link'] },
        { name: 'Adds to cart', cells: ['Yes, its measure', 'Yes'] },
        { name: 'Signs up with an inbox', cells: ['Not described', 'Yes, its own'] },
        { name: 'Gets the welcome email', cells: ['Not described', 'Yes, kept as proof'] },
        { name: 'Tries the code at checkout', cells: ['Not described', 'Yes'] },
        { name: 'Waits 48 hours for reminders', cells: ['Not described', 'Yes, or for weeks'] },
        { name: 'Shops rival stores', cells: ['Your own store', 'Any store you name'] },
      ],
      notes: [
        'A simulated shopper predicts how a crowd would browse a theme. An AI customer keeps what a real new customer receives.',
        'Brightfern is an invented store.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Shopify merchants and the agencies that build and optimise their themes need 3 answers before relying on SimGym: what it tests, how far to trust it, and what it leaves unchecked. Every price, rating and feature here is as Shopify listed it on 29 October 2026.',
    },

    { kind: 'h2', id: 'what-is-simgym', text: 'What Shopify SimGym is and how it works' },
    {
      kind: 'p',
      text: 'SimGym went on the [Shopify App Store](' +
        APP +
        ') on 8 December 2025, and [Shopify opened it to every eligible merchant](' +
        CHANGELOG +
        '), with no waitlist, on 11 March 2026. Shopify labels it an AI Research Preview. Its AI shoppers are software agents that open the store in a real browser and choose what to click from what they see on the page, the way a person would.',
    },
    {
      kind: 'p',
      text: 'Each AI shopper is given a persona, a profile that sets how price-sensitive it is, how far it browses and what it values. In Shopify’s research, the personas are built from each store’s own records of how real shoppers moved through it. In [Shopify’s help centre](' +
        HELP +
        '), the shoppers browse collections, view products, add items to the cart and describe what they found.',
    },
    {
      kind: 'p',
      text: 'A simulation runs on the published theme, on a draft theme (an unpublished copy in the store’s theme library), or on both at once. With both, SimGym compares their add-to-cart rate, the share of shoppers who put at least one product in the cart, and reports whether one theme did better or both did the same. A simulation usually takes 1 to 5 minutes, with a choice of 4 test focuses:',
    },
    {
      kind: 'list',
      items: [
        '**Entire shopping journey:** the store from start to finish, to find the biggest points of friction.',
        '**Product discovery:** whether the home page and collections lead a shopper to a relevant product.',
        '**Add-to-cart confidence:** whether the product pages give a shopper the confidence to buy.',
        '**Theme comparison:** the same AI shoppers on the live theme and a draft.',
      ],
    },
    {
      kind: 'p',
      text: 'The results open on a key finding, then storefront screenshots with numbered markers and recommendations written by Sidekick, Shopify’s AI assistant, from the shoppers’ feedback. Behind each recommendation, View findings lists the shoppers who met the issue, with a replay of each session and a timestamp on each of their thoughts.',
    },
    { kind: 'h3', id: 'run-a-simulation', text: 'How to run a simulation in the SimGym app' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Install the SimGym app from the Shopify App Store.',
        'In the Shopify admin, go to **Apps > SimGym** and click **Create simulation**.',
        'Choose a test focus, then the theme to test. For a comparison, the second theme must be a draft.',
        'Click **Run simulation**, then open the result from the notification in the admin when it completes.',
      ],
    },

    { kind: 'h2', id: 'eligibility-pricing', text: 'Who can use SimGym, and SimGym pricing' },
    { kind: 'p', text: 'Shopify’s help centre sets 5 conditions:' },
    {
      kind: 'list',
      items: [
        '**A Liquid storefront.** The store runs on a standard Shopify theme, written in Shopify’s template language, Liquid. Hydrogen and other headless storefronts (a custom front end built on top of Shopify) aren’t supported.',
        '**Shopify Network Intelligence turned on.** It is a setting in Settings > Customer Privacy that lets Shopify combine a store’s customer data with other merchants’ data to power some of its apps. [Shopify’s terms FAQ](' +
          TERMS +
          ') says the data isn’t shared with any other merchant.',
        '**No permanent password page,** as some development stores have. A store in private mode, including one on a free trial, can still run simulations.',
        '**An active Shopify plan.**',
        '**At least 1 product** published to the Online Store, with a price over zero, that isn’t a gift card.',
      ],
    },
    {
      kind: 'p',
      text: 'The SimGym app is free to install. Each month includes an allowance of simulations that renews on the 1st and doesn’t carry over, and a theme comparison normally uses twice as much of it as a single-theme run. Past the allowance, the help centre lists $0.75 for a single-theme simulation and $1.50 for a theme comparison. SimGym shows the price before a paid run starts, and bills it only when the run completes successfully.',
    },
    {
      kind: 'p',
      text: 'Neither the help centre nor the App Store listing, which says “Charges per simulation run”, states how many simulations the allowance holds.',
    },

    { kind: 'h2', id: 'strengths', text: 'What SimGym does well, and when to use it' },
    {
      kind: 'p',
      text: 'A live A/B test splits real visitors between 2 versions of a store and measures what each group does. Shopify’s researchers note it can take weeks to reach a clear result, and some real shoppers see the weaker version while it runs. SimGym’s strengths sit on both sides of that trade:',
    },
    {
      kind: 'list',
      items: [
        '**A draft tested before launch.** No real shopper meets the new theme until it is published.',
        '**A result in minutes.** A run usually takes 1 to 5 minutes.',
        '**Shoppers modelled on the store’s own visitors.** In Shopify’s research, its predictions got much worse when the shoppers lost those store-specific profiles.',
        '**Its working shown.** Each recommendation links to the shoppers behind it and a replay of their sessions.',
      ],
    },
    {
      kind: 'p',
      text: 'Shopify names theme changes as SimGym’s primary use. It also fits holiday or campaign layouts, a new menu or collection structure, and a check before and after a single edit. Shopify’s own tip is to test one change at a time, so that any difference in the result has one cause.',
    },

    { kind: 'h2', id: 'accuracy', text: 'How accurate is SimGym' },
    {
      kind: 'p',
      text: 'Shopify’s researchers tested SimGym on 50 real stores in 16 countries and 11 product categories. Each store had already run a live A/B test of a visual theme change, so the researchers knew how real buyers’ add-to-cart rate had moved. Their paper was [published on arXiv on 19 May 2026](' +
        ARXIV +
        '). It reports that SimGym predicted the right direction, up or down, at 77% of the stores, with a 95% range of 66% to 87%. The figures are for the shoppers the paper calls skimmers, the largest group that didn’t leave at once, almost two thirds of engaged visits.',
    },
    {
      kind: 'stat',
      value: '77%',
      label: 'of 50 stores where SimGym predicted the same direction of add-to-cart change as real buyers, after a visual theme change',
      source: 'Shopify researchers on arXiv, 19 May 2026',
      href: ARXIV,
    },
    {
      kind: 'p',
      text: 'For the size of the change, the correlation was 0.55 (95% range 0.32 to 0.72), where 1 would be perfect. In [its talk at ICLR 2026 on 25 April](' +
        ICLR +
        '), Shopify’s team presented SimGym as a way to screen changes in under an hour instead of weeks, without exposing real buyers. The paper sets out the scope of that result:',
    },
    {
      kind: 'list',
      items: [
        '**One measure.** It predicts add-to-cart. The authors list other shopper behaviour as future work.',
        '**Visual theme changes.** Tests swayed by promotions, pricing or changes to the range were left out.',
        '**One platform.** The authors say results beyond it remain to be tested.',
        '**A crowd of 600.** The study ran 600 AI shoppers per store, in about 5 minutes. The help centre doesn’t say how many the app sends.',
        '**Goals without offers.** The product each shopper hunts is described without bundles, sizes or discounts.',
      ],
    },
    {
      kind: 'p',
      text: 'The help centre adds that results might differ from how a store’s actual customers behave. On 29 October 2026 the App Store listing showed a rating of 2.8 from 40 reviews, with as many 1-star reviews as 5-star. Merchants who rated it well found its recommendations useful. Others reported problems it flagged that weren’t there, such as a Checkout button that worked or an available variant read as sold out. Some found the advice generic or saw runs stuck on “scheduled”. Shopify’s replies say it is working to reduce false findings.',
    },
    {
      kind: 'p',
      text: 'Independent reviewers reach the same view. [EcommerceFastlane’s review of 26 February 2026](' +
        EFL +
        ') advises treating SimGym as a hypothesis generator, a source of ideas to test with real shoppers. [Moving Primates’ guide of 1 April 2026, updated 16 April](' +
        MP +
        ') calls its results a first indication to confirm with real traffic. It names mega menus and drawer carts as layouts the shoppers may misread, and says SimGym doesn’t suit new products without data or stores with very little traffic.',
    },

    { kind: 'h2', id: 'what-it-misses', text: 'What SimGym’s AI shoppers don’t test' },
    {
      kind: 'p',
      text: 'Shopify’s pages describe browsing, adding to cart and feedback, and don’t describe sign-ups, emails or discount codes. Its research measures add-to-cart, and its paper shows an example shopper going on to checkout within set limits on which cart and checkout steps it may take. Moving Primates puts checkout, prices, discounts and campaigns outside SimGym’s scope. EcommerceFastlane says SimGym’s feedback covers the checkout experience, and that it doesn’t test the checkout flow beyond the add-to-cart. Each step that follows comes after the add-to-cart, and each can lose a sale the theme has already won.',
    },
    {
      kind: 'p',
      text: 'Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your rivals and prospect with proof. An AI customer is an AI agent that becomes a real customer of a company, with its own inbox, phone number and browser, and keeps what the company sends and shows it as evidence ([what AI customers are](/blog/ai-customers)). In October 2026 Obsession ran a pilot for 4 agencies on the stores they pitch and serve. Between 21 and 24 October 2026, its AI customers signed up, browsed, left a basket and started a checkout at each store. Each of these journeys had its own inbox, watched for 48 hours. Every store in the pilot had at least one gap. On 26 October 2026, an AI agent working for Obsession walked the client stores that Shopify agencies and freelance experts chose to show on their own websites.',
    },
    {
      kind: 'list',
      items: [
        '**A sign-up with a real inbox.** Neither Shopify’s help centre nor its research describes a shopper typing in an email address, and every email a store sends a new customer starts there.',
        '**The welcome email and its code.** Whether it arrives within minutes, from a sender the shopper recognises, with the code the pop up promised. If it never comes, [why a welcome or basket email never arrives](/blog/welcome-basket-email-not-sending) works through the causes.',
        '**Codes and offers at checkout.** In Shopify’s study, the product each shopper hunted was described without discounts. The 26 October walk found offers that broke between the page and the cart. A banner promised free shipping while the cart set a spend threshold. Carts dropped a subscription price, never added a promised free gift, or added a protection charge the shopper hadn’t chosen.',
        '**The checkout reminder.** In the pilot, nearly half sent nothing in the 48 hours after a shopper left a checkout with their email typed in.',
        '**What arrives over 48 hours and weeks.** A simulation lasts minutes. In the pilot, most first reminders came within 4 hours, the fastest after 30 minutes, and some about 10 hours later. Over weeks, offers go stale: the walk found a sale banner still up the day after the sale ended.',
        '**Rivals’ stores.** Shopify’s pages describe tests of the store that installed it. A rival’s welcome offer, prices and reminders need a customer at the rival.',
        '**The page behind an ad.** Shopify’s pages describe shoppers who browse the storefront, and don’t describe starting from an ad’s link. A shopper from an ad lands on the page the ad links to, expecting the price or offer the ad showed.',
      ],
    },
    {
      kind: 'p',
      text: 'Both kinds of AI shopper meet bot checks. The help centre says bot protection or traffic limits can block SimGym’s shoppers and leave their visits unfinished. In Obsession’s pilot, most stores put a CAPTCHA or bot check in front of at least one step. A CAPTCHA is a puzzle that blocks automated visitors. Each Obsession store check ends in a report on every journey. Where a store puts a CAPTCHA in front of a step, the report names the step it couldn’t test.',
    },

    { kind: 'h2', id: 'side-by-side', text: 'Simulated shoppers and AI customers, side by side' },
    {
      kind: 'p',
      text: 'The two answer different questions. SimGym asks how a crowd of the store’s shoppers would browse this theme. An AI customer asks what a customer receives. That second question is where sales are lost after the click, through a refused code, a reminder that never came or a free shipping promise the cart dropped.',
    },
    {
      kind: 'p',
      text: 'On a Shopify store, Obsession’s AI customers open the page behind your ads from their links and sign up through the pop up. They take the welcome code to checkout, leave a basket or a checkout, and keep every email and page with the time it arrived. Before a launch, they take a draft theme’s preview link and run every journey on the new theme first. The store’s team chooses when to read the results, at 4, 12, 24 or 48 hours, or keeps the AI customers watching for as long as it wants. The same platform checks every rival’s prices, offers and delivery each morning, and asks AI assistants what they tell buyers about the store. The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026. Obsession runs these checks at 300, 1,000 or 5,000 brands a month, and it’s built for millions.',
    },
    {
      kind: 'art',
      caption:
        'A new theme can win its add-to-cart comparison while an AI customer still finds a refused welcome code and no checkout reminder within 48 hours. Both failures come after the click.',
      art: {
        kind: 'log',
        title: 'brightfern.example',
        who: 'An AI customer on the new theme',
        status: { tone: 'fail', text: '2 gaps' },
        rows: [
          { time: '0 min', text: 'Opened the ad’s page', detail: 'New theme, in stock', tone: 'ok' },
          { time: '1 min', text: 'Signed up in the pop up', detail: 'Promised 10% off', tone: 'ok' },
          { time: '3 min', text: 'Welcome email arrived', detail: 'Code WELCOME10', tone: 'ok' },
          { time: '8 min', text: 'Code refused at checkout', detail: '“Not valid for this item”', tone: 'fail' },
          { time: '9 min', text: 'Left the checkout', detail: 'Email typed in', tone: 'info' },
          { time: '48 h', text: 'No checkout reminder', detail: 'Window closed', tone: 'fail' },
        ],
        foot: 'Brightfern and every time here are invented.',
      },
    },
    {
      kind: 'table',
      caption:
        'SimGym predicts a crowd’s choice between 2 themes in minutes, and an AI customer keeps what 1 real customer receives over hours or weeks. From Shopify’s and Obsession’s pages, 29 October 2026',
      cols: ['', 'SimGym’s AI shoppers', 'An AI customer'],
      rows: [
        ['The question', 'Which theme a crowd prefers', 'What a customer receives'],
        ['Where it runs', 'Your store’s live and draft themes', 'Any store you name, rivals included'],
        ['Who it is', 'A persona from your store’s data', 'A customer with its own inbox'],
        ['How long', '1 to 5 minutes', '4 hours to weeks, as chosen'],
        ['What comes back', 'Add-to-cart comparison, feedback, replays', 'Every email and page, with its time'],
      ],
    },

    { kind: 'h2', id: 'compared', text: 'SimGym alternatives compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 29 October 2026. CustomerEye and Insper, 2 other AI shopper apps for Shopify, showed as not currently available on the Shopify App Store that day.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to test a Shopify store with AI shoppers or real customers, from each provider’s own pages on 29 October 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'Real shoppers meet a weaker theme or a refused code first', 'A small change in a quiet month'],
        [
          'By hand: a private window, a new email address and a phone',
          'Sees what a new customer sees, emails included',
          'Free, plus staff time',
          '1 phone, 1 inbox and 1 moment',
          'One change, checked once',
        ],
        [
          'A live A/B test with real traffic',
          'Measures what real buyers do',
          'The testing app’s price, plus weeks of traffic',
          'Needs enough traffic, and some real shoppers see the weaker version',
          'Confirming a big redesign on a busy store',
        ],
        [
          'Shopify SimGym',
          'AI shoppers modelled on your store’s visitors compare 2 themes in minutes, with feedback and replays',
          'Free to install\nPast the monthly allowance: $0.75 a single-theme run, $1.50 a comparison',
          'Your own Liquid store\nPages describe browsing and add to cart\nResults may differ from real buyers',
          'A theme or navigation decision before launch',
        ],
        [
          '[Avada Shop Sim](' + AVADA + ')',
          'Up to 20 AI shoppers a run, a store health report with ranked fixes, and a replay of each session',
          'Free',
          'Its page says its shoppers never order, and every visit carries a bot tag',
          'A free second view of a theme, with replays',
        ],
        [
          'Obsession (ours): [Store leak checks](/use-cases/leak-checks-for-ecommerce-stores), [Mystery shopper](/recipes/mystery-shopper), [Competitor tracking](/recipes/competitor-tracking)',
          'AI customers sign up at any store you name, try the code at checkout and keep every email and page, with its time',
          'Running now: first store check free\nCredit-based plans, like Claude’s',
          'Leaves the theme A/B decision to SimGym or a live A/B test, and payment to a test order',
          'What customers receive after the click, at your store and rivals’, every week',
        ],
      ],
    },

    { kind: 'h2', id: 'which-to-use', text: 'SimGym, an A/B test or AI customers: which to use when' },
    {
      kind: 'list',
      items: [
        '**Everything after the click, every week:** use Obsession. Its AI customers sign up, take the welcome code to checkout, wait for the reminders and keep every email and page, at your own store and at the rivals you name. Before a launch, the same AI customers run every journey on the draft theme from its preview link.',
        '**A theme, layout or menu decision before launch:** SimGym. Test one change at a time, as Shopify advises, and read the result as a prediction.',
        '**A big redesign on a store with steady traffic:** confirm it with a live A/B test once SimGym has narrowed the options.',
        '**A free second simulation with session replays:** Avada Shop Sim.',
        '**One small change on one store:** check it by hand with a test order, as set out in [how to test your Shopify store as a customer](/blog/how-to-test-your-shopify-store-as-a-customer).',
      ],
    },
    {
      kind: 'p',
      text: 'For tools that call staff, test chatbots or walk a store, the [AI mystery shopping tools](/blog/best-ai-mystery-shopping-tools) guide sorts 20 of them by what they test.',
    },
    {
      kind: 'cta',
      text: 'Your first store check is free: 4 AI customers sign up, use the welcome code, leave a basket and wait 48 hours, and your report arrives within 4 days.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check my store free',
    },
    {
      kind: 'p',
      text: 'Agencies that redesign themes for clients can run the same checks on the brands they pitch.',
    },
    {
      kind: 'cta',
      text: 'Name 3 brands your agency is about to pitch and 2 of its clients, with their OK. Obsession follows each one’s live ad as a new customer and sends what happened after the sign up within 4 days, with proof, free.',
      to: '/use-cases/funnel-qa-for-cro-agencies',
      label: 'Check 5 brands free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about Shopify SimGym' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is SimGym free?',
          a: 'SimGym is free to install, and each month includes an allowance of simulations that renews on the 1st and doesn’t carry over. Past the allowance, Shopify’s help centre lists $0.75 for a single-theme simulation and $1.50 for a theme comparison, shown before the run starts and billed only when it completes successfully. Shopify doesn’t state how many simulations the allowance holds.',
        },
        {
          q: 'How accurate is SimGym?',
          a: 'Shopify’s study of 50 stores, published in May 2026, tested it on visual theme changes. SimGym predicted the right direction of real buyers’ add-to-cart change at 77% of them, and the size of the change with a correlation of 0.55. Shopify’s help centre adds that results might differ from how a store’s actual customers behave. Reviewers on its App Store listing report useful recommendations alongside problems flagged that weren’t there, such as a Checkout button that worked.',
        },
        {
          q: 'Can SimGym test my checkout?',
          a: 'Shopify’s pages describe AI shoppers that browse, add to cart and describe what they found, and its research measures add-to-cart. Its paper shows an example shopper going on to checkout, within set limits on which cart and checkout steps it may take. Shopify’s pages don’t describe paying, giving an email address, receiving emails or trying a discount code. EcommerceFastlane’s review says SimGym’s feedback covers the checkout experience, and that it doesn’t test the checkout flow beyond the add-to-cart. Codes, totals and the emails after a checkout need a test order by hand, or AI customers that start a real checkout and watch the inbox.',
        },
        {
          q: 'What is an AI shopper?',
          a: 'An AI shopper is software that browses a store the way a person would, choosing what to click from what it sees on the page. In SimGym, each one is given a persona built from the store’s own visitors, such as how price-sensitive it is and how far it browses. An AI customer goes further: it becomes a real customer with its own inbox and keeps what the store sends.',
        },
        {
          q: 'SimGym vs A/B testing: what’s the difference?',
          a: 'An A/B test splits real visitors between 2 versions of a store and measures what they do, which Shopify’s researchers call the gold standard. It needs enough traffic, often takes weeks and shows some shoppers the weaker version. SimGym predicts the direction of the result in minutes without real shoppers, so use it to narrow the options and a live A/B test to confirm a big change.',
        },
        {
          q: 'What’s an alternative to SimGym?',
          a: 'For another AI shopper simulation, Avada Shop Sim is free and sends up to 20 AI shoppers a run with a replay of each session. For real buyers’ behaviour, run a live A/B test. For what a customer receives after the click, use Obsession. Its AI customers sign up at your store or any rival, try the welcome code at checkout and keep every email and page.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the store examples',
      text: 'In Obsession’s pilot for 4 agencies, each store had up to 4 journeys: sign up, browse, leave a basket, or start a checkout with the email typed in and leave. Each journey had its own inbox, watched for 48 hours. The 26 October walk shopped each store on a phone as a signed-out new customer and stopped at the first checkout page. No store or agency is named, and Brightfern is invented.',
    },
  ],

  sources: [
    { title: 'Shopify SimGym', publisher: 'Shopify App Store', url: APP },
    { title: 'Shopify SimGym is now available in AI Research Preview for all eligible merchants', publisher: 'Shopify Changelog', url: CHANGELOG, date: '2026-03-11' },
    { title: 'SimGym', publisher: 'Shopify Help Center', url: HELP },
    { title: 'Shopify Terms of Service Update effective July 25, 2025: Frequently Asked Questions', publisher: 'Shopify', url: TERMS },
    { title: 'Shopify SimGym review 2026', publisher: 'EcommerceFastlane', url: EFL, date: '2026-02-26' },
    {
      title: 'SimGym: a framework for A/B test simulation in e-commerce with traffic-grounded VLM agents',
      publisher: 'arXiv',
      url: ARXIV,
      date: '2026-05-19',
    },
    { title: 'SimGym: traffic-calibrated AI shoppers for offline A/B testing at Shopify', publisher: 'ICLR 2026', url: ICLR, date: '2026-04-25' },
    {
      title: 'Shopify SimGym: what the AI simulation tool can do before A/B testing, and what it can’t',
      publisher: 'Moving Primates',
      url: MP,
      date: '2026-04-01',
    },
    { title: 'Avada Shop Sim', publisher: 'Shopify App Store', url: AVADA },
  ],

  related: [
    'how-to-test-your-shopify-store-as-a-customer',
    'best-ai-mystery-shopping-tools',
    'ai-customers',
    'recipe:mystery-shopper',
    '/use-cases/leak-checks-for-ecommerce-stores',
  ],
}
