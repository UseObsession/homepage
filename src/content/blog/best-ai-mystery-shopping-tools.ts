import type { BlogPost } from './types'

/* Best X guide 1 (_research/seo/recommend/best-x/PLAN.md, row 1; agreed by Seun 28 Oct 2026): the best AI mystery
   shopping tools, sorted by what they test. Primary "ai mystery shopping tools"; secondaries from Google autocomplete
   (US and UK, 28 Oct): ai mystery shopping, mystery shopping software, ai secret shopper. /recipes/mystery-shopper keeps
   "ai mystery shopper" and is linked with that anchor. Readers: store founders, CX leads and agencies choosing a tool.
   Every fact about another tool comes from research_mystery_shopping.json (each tool read on its own pages on
   28 Oct 2026). 20 tools in 4 groups, alphabetical inside each, no stars, ranking or Review markup. Left out: Mystery
   Agent (a published study, not a product), mocktomer (site down on 28 Oct), DeepCall (empty page), SignalSprint
   (domain for sale), Maskerade (no readable page), IntelliShop (human evaluators; its self-serve arm CustomerOptix is
   kept), and 1 direct competitor of Obsession's, left out by name, link and row at Seun's word (28 Oct 2026). FireCoach
   and Evalyn are named once as tools that don't send a customer to a business. Unverified claims from
   the 3 Oct draft are dropped: the IBISWorld $209 benchmark, PressTwo's voices and consent lines, LivePerson's Live Agent
   Audit and Genesys support, Implement AI's insurance campaign, Gartner, Checker, the market size estimates and the
   EU AI Act section.
   Obsession follows _research/seo/recommend/STANDARD.md: named in the answer, the 1,500 stores line word for word, the
   line with the uses once, "Use Obsession when" once, last in the comparison with its price cell "Running now". Its
   first-hand section prints only the public_wording sentences and finding counts in firsthand_28oct.json (run 1:
   14 online stores for 4 agencies, visits 21 to 24 Oct 2026, reports 27 Oct; run 2: the 26 Oct walk of client stores
   for 30 Shopify agencies and freelance experts, by an AI agent working for Obsession, never called AI customers), with
   no store, brand, agency or person named. The September store check and its "Brand G" are left out, as are "signed"
   claims and the 93%. kestrelhome.example and every result in the hero are invented. Buyer words; no dashes. */

const ADSTACK = 'https://www.adstack.com/ai-secret-shopping'
const DDD = 'https://dealerdrivendata.com/'
const IMPLEMENT = 'https://implementai.io/uk-gym-phone-performance-benchmark-2026/'
const LOCALSPY = 'https://www.localspyai.com/'
const PRESSTWO = 'https://presstwo.ai/solutions/spotcheck'
const QUALIFIED = 'https://www.qualified.com/resources/test-my-response-time'
const CRESTA = 'https://cresta.com/blog/introducing-synthetic-customers-a-living-model-of-your-customer-base'
const SYNTRIX = 'https://liveperson.com/syntrix'
const SYNTRIX_LAUNCH =
  'https://pr.liveperson.com/2026-03-03-Syntrix-Launches-as-the-First-AI-Agent-Evaluation-and-Live-Agent-Training-Platform-for-Enterprise-CX'
const MERCHANTGUARD = 'https://www.merchantguard.ai/mystery-shopper'
const TOKENSURF = 'https://tokensurf.io/'
const UNDERCOVER = 'https://undercoveragent.ai/'
const AISTORESHOPPER = 'https://aistoreshopper.com/'
const CHECKOUT_UX = 'https://apps.shopify.com/checkout-tester'
const CONVERTICA = 'https://convertica.org/ai-agent-checkout-test/'
const GENQA = 'https://www.gen.qa/'
const SPRO = 'https://s-pro.io/mystery-shopper-ai-suite'
const SHOPTEST = 'https://shoptest.ai/'
const SHOPTEST_APP = 'https://apps.shopify.com/shoptest'
const CUSTOMEROPTIX = 'https://www.customeroptix.com/services/mystery-shopping'
const INTOUCH = 'https://www.intouchinsight.com/blog/online-mystery-shopping'
const TROC = 'https://trocglobal.com/mystery-shopping-services/'
const FIRECOACH = 'https://firecoach.ai/tools/ai-mystery-shopper'
const EVALYN = 'https://www.evalyn.ai/'

export const post: BlogPost = {
  slug: 'best-ai-mystery-shopping-tools',
  title: 'The best AI mystery shopping tools in 2026, by what they test',
  dek: '20 tools grouped by what they test: phone staff, AI agents and chatbots, or a website and store, with human shopper panels beside them. Every price is as each company listed it on 28 October 2026, next to what a new customer got in Obsession’s October pilot for 4 agencies.',
  metaTitle: 'Best AI mystery shopping tools in 2026, by what they test',
  description:
    'AI mystery shopping tools compared by what they test: phone staff, AI agents, stores and inboxes. Prices as listed on 28 Oct 2026, beside a real store run.',
  answer:
    'AI mystery shopping tools send software to act as a customer of a business and report what it got. By job, the picks are PressTwo SpotCheck or AdStack for phone staff, Cresta or UndercoverAgent for your own AI agents, AI Store Shopper or Shoptest for a store’s path to checkout, and T-ROC for the shop floor. Obsession’s AI customers become real customers of any company you name and keep every email, offer, price and page they get as proof.',
  primaryKeyword: 'ai mystery shopping tools',
  keywords: [
    'ai mystery shopping',
    'mystery shopping software',
    'ai secret shopper',
    'best ai mystery shopping tools',
    'ai mystery shopping software',
    'mystery shopping tools',
  ],
  category: 'Check your own journeys',
  published: '2026-10-28',
  updated: '2026-10-28',
  readingMinutes: 19,
  order: 1,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'kestrelhome.example · 1 store, 4 kinds of AI mystery shop',
      period: 'What each kind of tool recorded at the same store',
      cols: ['Kind of tool', 'What it did', 'What it saw', 'After 48 hours'],
      rows: [
        { name: 'Calls your staff', cells: ['Rang the shop line', 'Call answered well', 'Not watched'], tone: 'info' },
        { name: 'Tests your own bot', cells: ['Asked the help bot', 'Returns answer right', 'Not watched'], tone: 'info' },
        { name: 'Walks your website', cells: ['Reached checkout', 'Checkout loads', 'Not watched'], tone: 'info' },
        { name: 'AI customer', cells: ['Signed up, left a basket', 'Welcome email in 4 min', 'No basket email'], tone: 'fail' },
      ],
      notes: [
        'Only the AI customer had an inbox and waited, so only it saw the basket email that never came.',
        'Kestrel Home and every result here are invented.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Store founders, CX leads and agencies use AI mystery shopping tools to see what a customer gets from a business, without hiring a person for every visit. The tools differ most in what they test, so the 20 here are grouped that way, with human shopper panels for comparison.',
    },

    { kind: 'h2', id: 'what-they-test', text: 'What AI mystery shopping tools test' },
    {
      kind: 'p',
      text: 'AI mystery shopping is a test in which software plays a customer of a business and reports what happened. It might ring a front desk, chat with a support bot, walk a website to checkout, or sign up and wait for the emails that follow. It then scores the result against rules the business sets.',
    },
    {
      kind: 'p',
      text: 'The tools on sale in October 2026 test 3 parts of a business:',
    },
    {
      kind: 'list',
      items: [
        '**Staff, your own or a competitor’s.** An AI voice agent calls or messages as a customer and scores the reply.',
        '**Your own AI agents and chatbots.** Synthetic customers, software personas built to act like real ones, put the bot through many test conversations, mostly before real customers reach it.',
        '**Your website or store.** A browser agent walks from the home page towards checkout and reports where it got stuck.',
      ],
    },
    {
      kind: 'p',
      text: 'A fourth kind is the AI customer. An AI customer is an AI agent that becomes a real customer of a company, with its own inbox, phone number and browser, and keeps what the company sends and shows it as evidence ([what AI customers are](/blog/ai-customers)). It sees what arrives after the visit: the welcome email, the reminder after a left basket and the price printed in that reminder.',
    },

    { kind: 'h2', id: 'how-compared', text: 'How the tools were compared' },
    {
      kind: 'p',
      text: 'Every fact about a tool comes from its own pages as they stood on 28 October 2026, and every price is as listed that day, in US dollars. Each tool was compared on 5 points:',
    },
    {
      kind: 'list',
      items: [
        '**What it tests:** staff, an AI agent, a website, or what arrives afterwards, at your own business or a competitor’s.',
        '**Live or simulated:** whether it contacts a real phone line, chatbot or store, or runs inside a test environment.',
        '**Whether it says it’s AI,** as its pages state.',
        '**What it hands over:** recordings, transcripts, screenshots or scores.',
        '**Price as listed,** with any free plan or trial.',
      ],
    },
    {
      kind: 'p',
      text: 'Tools are grouped by what they test and listed alphabetically in each group, with no stars or ranking. Two tools that come up for the same searches are left out. [FireCoach’s AI mystery shopper](' +
        FIRECOACH +
        ') runs an AI buyer against a sales script you paste in, so it never contacts a business. [Evalyn’s](' +
        EVALYN +
        ') AI scores recorded calls, and its pages don’t say that AI places its mystery shopping calls.',
    },

    { kind: 'h2', id: 'call-staff', text: 'Tools that call or message staff as a customer' },
    {
      kind: 'p',
      text: 'These are closest to a classic mystery shop. An AI voice agent calls or messages a sales line or front desk with a scenario, then scores what the person on the other end did. AdStack, PressTwo and Qualified test your own team. Dealer Driven Data and LocalSpy AI contact competitors’ staff as a buyer.',
    },

    { kind: 'h3', id: 'adstack', text: 'AdStack AI Secret Shopping' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [AdStack](' +
          ADSTACK +
          ') runs the programme for you. AI voice agents place scripted calls about prices, availability or support. Each call is recorded, transcribed and scored, and the report ends in a prioritised list of fixes.',
        '**Price as listed:** not listed.',
        '**Where it stops:** it tests conversations. Its page names forms and chat without saying how they are tested.',
        '**Best for:** owners who want phone mystery shops run for them.',
      ],
    },

    { kind: 'h3', id: 'dealer-driven-data', text: 'Dealer Driven Data' },
    {
      kind: 'list',
      items: [
        '**What it does well:** built for car dealers. [Its AI](' +
          DDD +
          ') shops competitor dealerships by text, email and phone, keeps every reply on a timeline and logs the prices they quote. Weekly price reports and price sheets set those prices against the dealer’s own.',
        '**Price as listed:** $499 a month, month to month, with a free 7 day mystery shop.',
        '**Where it stops:** car dealers only. Its page doesn’t say whether competitor staff are told the buyer is AI.',
        '**Best for:** car dealers watching what competitor dealers reply and quote.',
      ],
    },

    { kind: 'h3', id: 'implement-ai', text: 'Implement AI' },
    {
      kind: 'list',
      items: [
        '**What it does well:** its AI calls a business’s locations as a prospect and scores each call. [Its benchmark of 25 May 2026](' +
          IMPLEMENT +
          ') describes 740 such calls to 8 of the UK’s largest gym chains, about 870 clubs, in March and April 2026.',
        '**Price as listed:** a free diagnostic for multi-site gym operators, with an estimate of the revenue missed at each site. Other prices aren’t listed.',
        '**Where it stops:** its pages describe the gym diagnostic as the offer today.',
        '**Best for:** multi-site gym operators checking how enquiry calls are handled.',
      ],
    },

    { kind: 'h3', id: 'localspy-ai', text: 'LocalSpy AI' },
    {
      kind: 'list',
      items: [
        '**What it does well:** research on local competitors. [LocalSpy AI](' +
          LOCALSPY +
          ') finds nearby competitors through Google Maps and scans their ads, reviews and prices. Its AI Phone Caller rings a competitor as a potential customer, records the call and grades it.',
        '**Price as listed:** Starter is free, with no calls. Pro is $29 a month and Agency $79. A call costs 2 credits and a mystery shopper report 3, with packs from $29 for 8 credits.',
        '**Where it stops:** its pages don’t say how many calls each plan includes. It tests competitors and leaves your own channels untested.',
        '**Best for:** local businesses sizing up nearby competitors by phone.',
      ],
    },

    { kind: 'h3', id: 'presstwo', text: 'PressTwo SpotCheck' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [PressTwo SpotCheck](' +
          PRESSTWO +
          '), formerly AI Shadow Caller, places AI test calls to your phone reps. It scores each call on your own checklist and writes a coaching note for each rep, with trends by rep and location.',
        '**Price as listed:** $149 a month for 100 test calls, or $1,490 a year, with 3 days free.',
        '**Where it stops:** phone calls only.',
        '**Best for:** phone teams that want a listed monthly price for scored test calls.',
      ],
    },

    { kind: 'h3', id: 'qualified', text: 'Qualified Test My Response Time' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Qualified](' + QUALIFIED + ') runs a free test of how fast your sales team responds to a new inbound enquiry.',
        '**Price as listed:** free.',
        '**Where it stops:** its page doesn’t say how the test lead is sent or what the report shows.',
        '**Best for:** a single number, how fast reps answer a new lead.',
      ],
    },
    {
      kind: 'p',
      text: 'These tools test how people answer. None of them is described as walking a website or leaving a basket, so the emails a store sends after a sign-up or a basket sit outside what they test.',
    },

    { kind: 'h2', id: 'test-ai-agents', text: 'Tools that test your own AI agents and chatbots' },
    {
      kind: 'p',
      text: 'If a chatbot or AI agent answers your customers, these tools put it through synthetic customers that act confused, angry or out of the ordinary. They test your own agent, or one your company is about to trust with work. For a store’s own chatbot, [how to test a chatbot on your store](/blog/test-store-chatbot-returns-policy) gives the questions to ask by hand.',
    },

    { kind: 'h3', id: 'cresta', text: 'Cresta Synthetic Customers' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [launched on 28 May 2026](' +
          CRESTA +
          '), it builds personas from your own conversation history and ranks them by the share of real traffic each represents. In Cresta’s example, 12 personas cover about 82% of conversations. The personas then test your AI agent inside Cresta.',
        '**Price as listed:** not listed.',
        '**Where it stops:** it starts from conversation data on Cresta’s platform.',
        '**Best for:** Cresta customers with a large history of real conversations.',
      ],
    },

    { kind: 'h3', id: 'liveperson-syntrix', text: 'LivePerson Syntrix' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Syntrix](' +
          SYNTRIX +
          '), [launched on 3 March 2026](' +
          SYNTRIX_LAUNCH +
          '), tests AI agents with synthetic customers such as Frustrated Payer and Skeptical Shopper. It checks understanding, tone, safety limits and compliance before real customers arrive, and the same personas train live agents.',
        '**Price as listed:** not listed, with a demo on request.',
        '**Where it stops:** it runs in a test environment before launch. Its launch release calls this first phase simulation and evaluation.',
        '**Best for:** enterprise contact centres testing AI agents and training live agents.',
      ],
    },

    { kind: 'h3', id: 'merchantguard', text: 'MerchantGuard Mystery Shopper' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [MerchantGuard](' +
          MERCHANTGUARD +
          ') runs 10 automated probes on an AI agent you name, such as error handling, personal data handling and a double charge test. It returns a trust score from 0 to 100.',
        '**Price as listed:** free, and Pro is $99 a month for monthly re-tests. Its page states the free allowance as both 3 probes a month and unlimited.',
        '**Where it stops:** it checks whether an AI agent is safe to hand work to. A company’s customer journeys sit outside it.',
        '**Best for:** deciding whether to trust another company’s AI agent with work.',
      ],
    },

    { kind: 'h3', id: 'tokensurf', text: 'TokenSurf' },
    {
      kind: 'list',
      items: [
        '**What it does well:** a founder-run service. [TokenSurf](' +
          TOKENSURF +
          ') writes test scenarios for your public chatbot, such as a refund request or a vulnerable customer, and runs them. The founder reviews every important finding, and no production integration is needed.',
        '**Price as listed:** $1,500 for 1 audit (a founding offer), or $1,500 a month for weekly monitoring. Hardening starts at $4,000 and a security review at $6,000.',
        '**Where it stops:** chatbots only.',
        '**Best for:** teams with a public chatbot that want a done-for-you review.',
      ],
    },

    { kind: 'h3', id: 'undercoveragent', text: 'UndercoverAgent' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [UndercoverAgent](' +
          UNDERCOVER +
          ') runs 200+ scenarios of confused, angry and adversarial customers against a chatbot or voice agent. It adds checks on health, payment and privacy disclosures, and sends a weekly written brief with example transcripts.',
        '**Price as listed:** $500 a week, including 1 live agent, cancel any time.',
        '**Where it stops:** 1 live agent per retainer. Its page says its findings are test evidence and carry no certification.',
        '**Best for:** teams that want a weekly written brief on 1 live bot.',
      ],
    },

    { kind: 'h2', id: 'walk-website', text: 'Tools that walk your website or store as a shopper' },
    {
      kind: 'p',
      text: 'These agents open a browser and walk a store the way a shopper would, usually from the home page to checkout, and report where they got stuck. AI shopping agents now find products and build baskets on Shopify, Google and ChatGPT, and check out for some eligible products. So several tools here test whether such an agent can reach checkout at all. The 10 checks in [is your website ready for AI agents](/blog/agent-ready-website) can be run by hand.',
    },

    { kind: 'h3', id: 'ai-store-shopper', text: 'AI Store Shopper' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [AI Store Shopper](' +
          AISTORESHOPPER +
          ') checks whether an AI shopping agent can find, read and buy from your store. Its agent walks from the home page to checkout, stops before paying and grades 4 areas: bot access, findable, readable and buyable. It identifies itself to the store by a published name.',
        '**Price as listed:** a free scan, $149 for a full check, then $29.99 a month for a weekly re-walk after the first month.',
        '**Where it stops:** US merchants only, and stores behind Cloudflare’s bot protection can’t be checked. It never signs up or pays, so emails sit outside it.',
        '**Best for:** US store owners checking whether AI shopping agents can reach their checkout.',
      ],
    },

    { kind: 'h3', id: 'checkout-ux-analyst', text: 'Checkout UX Analyst (StoreSpark)' },
    {
      kind: 'list',
      items: [
        '**What it does well:** in this [Shopify app](' +
          CHECKOUT_UX +
          '), an AI shopper acts as a first-time customer and goes through checkout. It scores the experience, with a screenshot and an explanation for each issue. The Advanced plan adds a nightly checkout test with an email alert.',
        '**Price as listed:** $5 a month for 1 analysis, or $15 a month for 10 and the nightly test, with a 3 day free trial on the $5 plan.',
        '**Where it stops:** Shopify checkout only. Its page doesn’t mention emails after an order.',
        '**Best for:** small Shopify stores that want a low-cost checkout check.',
      ],
    },

    { kind: 'h3', id: 'convertica', text: 'Convertica AI Agent Checkout Test' },
    {
      kind: 'list',
      items: [
        '**What it does well:** a [free tool](' +
          CONVERTICA +
          '). Enter a website and watch an AI shopping agent try to buy in a real browser, step by step, with a screenshot of each problem. It never pays or orders, and it identifies itself as Convertica’s audit.',
        '**Price as listed:** free, up to 3 runs a day.',
        '**Where it stops:** a run ends at checkout, after 25 steps or 4 minutes, or at a login page or a CAPTCHA, a puzzle that blocks automated visitors. It doesn’t test payments or order emails.',
        '**Best for:** a quick free look at where an AI shopper gets stuck.',
      ],
    },

    { kind: 'h3', id: 'gen-qa', text: 'Gen.QA' },
    {
      kind: 'list',
      items: [
        '**What it does well:** paste a web address and [Gen.QA](' +
          GENQA +
          ') creates personas, such as a new user or a mobile user, and runs them through the site in a browser. Each finding comes with a severity, the exact step, a screenshot and a fix. It also scores a product’s AI chat.',
        '**Price as listed:** a free plan covers 1 project and 1 full run a month. Paid prices aren’t listed.',
        '**Where it stops:** its pages say nothing about inboxes or what arrives after a sign-up.',
        '**Best for:** product teams checking their own site or app before a release.',
      ],
    },

    { kind: 'h3', id: 's-pro', text: 'S-PRO Mystery Shopper AI Suite' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [S-PRO’s suite](' +
          SPRO +
          ') sends persona agents across many channels, from search and reviews to the website, email, chat, phone and adviser booking. It returns transcripts, screenshots and timestamps, sets competitors as benchmarks, and repeats runs on a schedule and after each release.',
        '**Price as listed:** not listed. Buyers book a walkthrough.',
        '**Where it stops:** its first phase covers public surfaces. Onboarding and loyalty tests need connected internal systems.',
        '**Best for:** large CX programmes in banking, insurance or retail.',
      ],
    },

    { kind: 'h3', id: 'shoptest', text: 'Shoptest' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Shoptest](' +
          SHOPTEST +
          ') is a Shopify monitoring app. It runs scheduled shopper journeys through cart, checkout and search, watches orders and payment failures, and sends an email or Slack alert when something breaks.',
        '**Price as listed:** $99, $249 or $499 a month on the [Shopify App Store](' +
          SHOPTEST_APP +
          '), with a 30 day free trial. The plans run from 3 journeys every 3 hours to 20 every 15 minutes.',
        '**Where it stops:** Shopify only, and tests stop before payment. Its pages don’t say it checks the emails a customer receives.',
        '**Best for:** Shopify stores that want an alert when cart or checkout breaks.',
      ],
    },
    {
      kind: 'p',
      text: 'Apart from S-PRO, which lists email among its channels, none of these tools’ pages says it checks the emails a store sends. Those emails, from the welcome email to the reminder after a left basket, need a customer with an inbox who waits.',
    },

    { kind: 'h2', id: 'human-panels', text: 'Human mystery shopping panels, for comparison' },
    {
      kind: 'p',
      text: 'No AI tool here walks into a building. A shop floor, a check at the counter and a real order on another company’s store still need a person. [AI customers vs mystery shoppers](/blog/hire-ai-customers) sets the two side by side.',
    },

    { kind: 'h3', id: 'customeroptix', text: 'CustomerOptix (IntelliShop)' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [self-serve human mystery shopping](' +
          CUSTOMEROPTIX +
          ') from IntelliShop. Trained shoppers visit locations, call or check websites as real customers, and a person reviews every report.',
        '**Price as listed:** from $45.',
        '**Where it stops:** it covers North America, with reports in 48 hours to about 2 weeks.',
        '**Best for:** a low-priced human shop of a store, phone line or website.',
      ],
    },

    { kind: 'h3', id: 'intouch-insight', text: 'Intouch Insight' },
    {
      kind: 'list',
      items: [
        '**What it does well:** in [its guide of 17 November 2025](' +
          INTOUCH +
          '), human shoppers act as real customers across websites and apps, returns and support included. They record prices shown only to members, with screenshots.',
        '**Price as listed:** quoted for each programme.',
        '**Where it stops:** each programme is tailored, with no prices published for online shops.',
        '**Best for:** online shops that need a real purchase or prices shown only to members.',
      ],
    },

    { kind: 'h3', id: 't-roc', text: 'T-ROC' },
    {
      kind: 'list',
      items: [
        '**What it does well:** trained, anonymous shoppers for store visits, phone, chat and messaging apps, with dashboards in 24 to 48 hours and photo and video records. Programmes include compliance checks and competitor benchmarks.',
        '**Price as listed:** [its guide of 4 May 2026](' +
          TROC +
          ') lists $40 to $150 a store visit, and $3,000 to $15,000 a month for a regional retainer.',
        '**Where it stops:** it recommends 4 to 6 visits per store per quarter, and puts a year’s budget for 200 to 300 locations at $200,000 to $700,000.',
        '**Best for:** multi-location retail that needs in-person visits and compliance checks.',
      ],
    },

    { kind: 'h2', id: 'what-a-customer-got', text: 'What a customer actually got' },
    {
      kind: 'p',
      text: 'The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026. Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof. Two of its October runs show what a customer got, and which group of tools can see each result.',
    },

    { kind: 'h3', id: 'october-pilot', text: 'A pilot for 4 agencies, every inbox watched for 48 hours' },
    {
      kind: 'p',
      text: 'Between 21 and 24 October 2026, Obsession ran a pilot for 4 agencies on the stores they pitch and serve. Each journey used a new customer with its own inbox. It signed up, browsed, left an item in the cart or left a checkout, and never paid. Every inbox was then watched for 48 hours, and the reports were issued on 27 October 2026. The first agency is moving to 300 brands a month.',
    },
    {
      kind: 'table',
      caption:
        'What arrived within 48 hours, by journey, in Obsession’s October pilot for 4 agencies, 21 to 24 October 2026. A journey stopped by a CAPTCHA, at a store with no sign-up form, or spoiled by our own test is left out',
      cols: ['Journey', 'Within 48 hours'],
      rows: [
        ['Sign up for emails', 'Almost every store sent a welcome email'],
        ['Browse and leave', 'Most sent nothing'],
        ['Leave an item in the cart', 'Nearly half sent nothing'],
        ['Leave a checkout before paying', 'Nearly half sent nothing'],
      ],
    },
    {
      kind: 'p',
      text: 'Each journey was scored against Obsession’s written criteria. They include a first reminder within 4 hours, the item and its price shown, a link back to the checkout and a second reminder inside 48 hours.',
    },
    {
      kind: 'list',
      items: [
        'Every store in the pilot had at least one gap. Nearly half sent no email in the 48 hours after the shopper left a checkout, with an email address already typed.',
        'Some stores sent a welcome series that met all four of Obsession’s written criteria. Each sent a first email within 15 minutes, the code the form promised, a second email inside 48 hours and a sender the shopper recognised. Each of those stores then sent nothing in the 48 hours after a checkout was left.',
        'Most first checkout reminders came within 4 hours, the fastest after 30 minutes and the slowest after about 10 hours. Fewer than half of the stores that sent one followed it with a second reminder inside 48 hours.',
        'Fewer than half of the cart and checkout reminders showed the item at the price the store showed. About a third showed no price, and one in five showed a different one, such as a pound price printed in dollars.',
        'Most stores put a CAPTCHA or bot check, a puzzle that blocks automated visitors, in front of at least one step. The report names each step a CAPTCHA kept the AI customer from testing.',
      ],
    },
    {
      kind: 'p',
      text: 'Each of these email results could only be seen after the shopper signed up or left. A tool that ends its run at the checkout page records the checkout and nothing that follows.',
    },

    { kind: 'h3', id: 'client-stores', text: 'Stores agencies show as clients, walked on a phone' },
    {
      kind: 'p',
      text: 'On 26 October 2026, an AI agent working for Obsession walked the client stores that Shopify agencies and freelance experts chose to show on their own websites. It shopped on a phone as a signed-out new customer, added an item to the cart and stopped at the first checkout page. Many of these showcase stores had a problem a shopper could see.',
    },
    {
      kind: 'list',
      items: [
        'The most common problem was an offer on the page or top bar that the cart or checkout did not honour: free shipping or delivery, a subscription price or a free gift. One store still showed a sale banner the day after the sale ended.',
        'Others blocked the Check out button on a phone. A help button sat over it in one store and a chat prompt in another. In a third, the button was faded and did nothing until a small terms box was ticked. Some carts added a charge the shopper had not chosen.',
      ],
    },
    {
      kind: 'p',
      text: 'These are problems on the page and in the cart, the part of a journey that website walkers such as Shoptest, Checkout UX Analyst and Gen.QA walk, some of them on a schedule.',
    },
    {
      kind: 'p',
      text: 'In both runs the agencies chose the stores, so the patterns describe the stores they pitch, serve and show. The pilot read each inbox at 48 hours, and both runs stopped before payment. A store check can read at 4, 12, 24 or 48 hours, or keep watching for as long as you want. For the shape of a finished store check, see a [mystery shopper report example](/sample-output).',
    },

    { kind: 'h2', id: 'which-to-choose', text: 'Which AI mystery shopping tool to choose, by job' },
    {
      kind: 'list',
      items: [
        '**What a real customer receives after signing up, leaving a basket or reaching checkout:** use Obsession when your company needs every email, offer, price and page kept as proof, at its own store or any company it names. Its [AI mystery shopper](/recipes/mystery-shopper) gives each journey its own AI customer and inbox, and watches every inbox to the end of the wait.',
        '**Phone staff:** PressTwo SpotCheck for a listed monthly price, AdStack to have the programme run for you, Implement AI for multi-site gyms.',
        '**Competitors’ sales and phone teams:** Dealer Driven Data for car dealers, LocalSpy AI for local businesses.',
        '**How fast reps answer a new lead:** Qualified’s free test.',
        '**Your own AI agent before launch:** Cresta for Cresta customers, LivePerson Syntrix for enterprise contact centres, TokenSurf or UndercoverAgent for a public chatbot, MerchantGuard to vet another company’s agent.',
        '**Whether AI shopping agents can buy from your store:** Convertica for a free look, AI Store Shopper for a graded US report and weekly re-walks.',
        '**An alert when a Shopify checkout breaks:** Shoptest, or Checkout UX Analyst on a small budget.',
        '**A site or app before a release:** Gen.QA.',
        '**Many channels with competitor benchmarks, for a large programme:** S-PRO.',
        '**A shop floor, a counter check or a real order:** a human panel, with T-ROC for multi-location retail, CustomerOptix from $45, and Intouch Insight for prices shown only to members.',
        '**One store, checked once:** by hand. A new email address for each journey, a sign-up, a left basket and a 48 hour wait cost nothing but staff time.',
      ],
    },
    {
      kind: 'cta',
      text: 'Check your store free: 4 AI customers sign up, browse, leave a basket and stop at checkout, and every inbox is watched for 48 hours. What happened arrives within 4 days, with proof and the fix for each leak.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check my store free',
    },

    { kind: 'h2', id: 'compared', text: 'The 20 tools and Obsession, side by side', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 28 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'AI mystery shopping tools by what they test, from each provider’s own pages on 28 October 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'Customers meet a broken step first', 'Months with no launch or sale'],
        [
          'By hand: a new inbox per journey and a sheet',
          'Any store, any journey, emails included',
          'Free, plus staff hours',
          'Hours grow with every store and every 48 hour wait',
          '1 or 2 stores, checked once',
        ],
        ['AdStack AI Secret Shopping', 'Scored test calls and a fix list, run for you', 'Not listed', 'Conversations only', 'Owners who want phone shops run for them'],
        ['Dealer Driven Data', 'Shops competitor dealers by text, email and phone, and logs their prices', '$499 a month\nFree 7 day shop', 'Car dealers only', 'Car dealers watching competitors’ quotes'],
        ['Implement AI', 'Scored enquiry calls to each location', 'Free diagnostic for gym operators\nFull report: not listed', 'Its pages describe gyms only', 'Multi-site gym operators'],
        ['LocalSpy AI', 'Calls local competitors as a customer and grades the call', 'Starter: free, no calls\nPro: $29 a month\nAgency: $79 a month', 'Calls per plan not stated', 'Local businesses sizing up nearby competitors'],
        ['PressTwo SpotCheck', 'Scored test calls with a coaching note per rep', '$149 a month for 100 calls\n3 days free', 'Phone calls only', 'Phone teams wanting a listed monthly price'],
        ['Qualified Test My Response Time', 'Times how fast reps answer a new lead', 'Free', 'Method and report not stated', 'Lead response time'],
        ['Cresta Synthetic Customers', 'Personas from your own conversations, ranked by traffic', 'Not listed', 'Starts from your conversation history on Cresta', 'Cresta customers testing AI agents'],
        ['LivePerson Syntrix', 'Synthetic customers test AI agents and train live agents', 'Not listed, demo on request', 'Runs before launch, in a test environment', 'Enterprise contact centres'],
        ['MerchantGuard Mystery Shopper', '10 automated probes and a trust score', 'Free\nPro: $99 a month', 'Checks an AI agent, with no customer journey', 'Vetting another company’s AI agent'],
        ['TokenSurf', 'Scenarios for your public chatbot, reviewed by its founder', '$1,500 an audit\n$1,500 a month for weekly checks', 'Chatbots only', 'A done-for-you chatbot review'],
        ['UndercoverAgent', '200+ hard customer scenarios and a weekly brief', '$500 a week for 1 live agent', '1 live agent per retainer', 'A weekly brief on 1 live bot'],
        ['AI Store Shopper', 'Grades whether an AI shopping agent can find, read and buy', 'Free scan\n$149 full check\n$29.99 a month weekly', 'US merchants, no sign-up or order', 'US stores checking AI shopper access'],
        ['Checkout UX Analyst (StoreSpark)', 'An AI first-time shopper scores checkout, with screenshots', '$5 or $15 a month', 'Shopify checkout, 1 or 10 analyses a month', 'Small Shopify stores'],
        ['Convertica AI Agent Checkout Test', 'Watch an AI agent try to buy, step by step', 'Free, 3 runs a day', 'Ends at checkout, a login page or a CAPTCHA', 'A quick free look'],
        ['Gen.QA', 'Generated personas test a site or app, with a fix per finding', 'Free plan\nPaid: not listed', 'Nothing on inboxes', 'Product teams before a release'],
        ['S-PRO Mystery Shopper AI Suite', 'Persona agents across many channels, with competitor benchmarks', 'Not listed', 'First phase covers public surfaces', 'Large banking, insurance and retail programmes'],
        ['Shoptest', 'Scheduled cart and checkout journeys, with alerts', '$99, $249 or $499 a month\n30 days free', 'Shopify only, stops before payment', 'Alerts when a Shopify checkout breaks'],
        ['CustomerOptix (IntelliShop)', 'Human shoppers visit, call or check a website', 'From $45', 'North America', 'A low-priced human shop'],
        ['Intouch Insight', 'Human shoppers across websites and apps', 'Quoted for each programme', 'No published prices for online shops', 'Real purchases and members’ prices'],
        ['T-ROC', 'In-person visits, compliance checks and fast dashboards', '$40 to $150 a store visit', '4 to 6 visits per store per quarter suggested', 'Multi-location retail'],
        [
          'Obsession (ours): [AI mystery shopper](/recipes/mystery-shopper), [store leak checks](/use-cases/leak-checks-for-ecommerce-stores)',
          'AI customers sign up, shop and wait at any company you name, and keep what arrives',
          'Running now: first store check free\nCredit-based plans, like Claude’s',
          'Online journeys and inboxes, with a person for the shop floor',
          'What a real customer gets, across email, offers, prices and pages, kept as proof',
        ],
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about AI mystery shopping tools' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is AI mystery shopping?',
          a: 'AI mystery shopping is a test in which software plays a customer of a business and reports what happened. A voice agent calls a front desk, synthetic customers chat with a bot, a browser agent walks a store to checkout, or an AI customer signs up and keeps the emails. Each result is scored against rules the business sets.',
        },
        {
          q: 'Is an AI secret shopper the same as an AI mystery shopper?',
          a: 'Yes. “AI secret shopper”, “AI mystery shopper” and “mystery shopping software” name the same practice: software that plays a customer and reports what it got. AdStack calls its service AI Secret Shopping, and UndercoverAgent describes itself as a secret shopper for AI agents.',
        },
        {
          q: 'How much do AI mystery shopping tools cost?',
          a: 'On 28 October 2026, Qualified’s response test and Convertica were free, and LocalSpy AI, MerchantGuard, Gen.QA and AI Store Shopper had free plans or scans. UndercoverAgent listed $500 a week and TokenSurf $1,500 a month for weekly monitoring, and several tools list no price. Human shops cost $40 to $150 a store visit at T-ROC and start from $45 at CustomerOptix. [AI customers at scale](/blog/ai-customers-at-scale) works out the cost of each AI customer.',
        },
        {
          q: 'Can an AI mystery shopper replace a human one?',
          a: 'For websites, phone lines, chat and inboxes, AI tools can be run on a schedule: PressTwo lists 100 test calls for $149 a month, which is $1.49 a call if all are used, and T-ROC lists $40 to $150 for a store visit. A person is still needed for a shop floor, a check at the counter and a real order on someone else’s store.',
        },
        {
          q: 'Do AI mystery shopping tools say they are AI?',
          a: 'Some do. AI Store Shopper publishes the name its agent uses when it visits a store, and Convertica’s browser identifies itself as Convertica’s audit. AdStack leaves it to the buyer whether staff are told, and the other AI tools’ pages don’t say. Where a test reaches a competitor’s staff, as Dealer Driven Data’s and LocalSpy AI’s calls do, take advice on disclosure where your company operates.',
        },
        {
          q: 'Can AI mystery shopping tools test the emails a store sends?',
          a: 'Only a tool with its own inbox that waits can. AI Store Shopper and Convertica never sign up or order, and Shoptest’s pages don’t say it checks emails. S-PRO lists email among its channels. Obsession’s AI customers each keep their own inbox and watch it to the end of the wait. In Obsession’s October pilot for 4 agencies, nearly half the stores sent nothing within 48 hours of a shopper leaving a checkout.',
        },
        {
          q: 'Can an AI mystery shopper get past a CAPTCHA?',
          a: 'None of these tools’ pages says it solves one. Convertica’s runs end at a CAPTCHA, and AI Store Shopper can’t check stores behind Cloudflare’s bot protection. In Obsession’s October pilot, most stores put a CAPTCHA or bot check in front of at least one step, and each report named the step it couldn’t test.',
        },
      ],
    },
  ],

  sources: [
    { title: 'AI Mystery Shopper for Sales Calls', publisher: 'FireCoach', url: FIRECOACH },
    { title: 'AI Customer Experience Analytics and Training', publisher: 'Evalyn', url: EVALYN },
    { title: 'AI Secret Shopping', publisher: 'AdStack', url: ADSTACK },
    { title: 'AI Mystery Shopping and Vehicle Comments for Car Dealers', publisher: 'Dealer Driven Data', url: DDD },
    { title: 'UK gym phone performance benchmark 2026', publisher: 'Implement AI', url: IMPLEMENT, date: '2026-05-25' },
    { title: 'LocalSpy AI: competitor intelligence for local businesses', publisher: 'LocalSpy AI', url: LOCALSPY },
    { title: 'SpotCheck', publisher: 'PressTwo', url: PRESSTWO },
    { title: 'Test My Response Time', publisher: 'Qualified', url: QUALIFIED },
    { title: 'Introducing Synthetic Customers: a living model of your customer base', publisher: 'Cresta', url: CRESTA, date: '2026-05-28' },
    {
      title: 'Syntrix launches as the first AI agent evaluation and live agent training platform for enterprise CX',
      publisher: 'LivePerson',
      url: SYNTRIX_LAUNCH,
      date: '2026-03-03',
    },
    { title: 'Syntrix', publisher: 'LivePerson', url: SYNTRIX },
    { title: 'Mystery Shopper', publisher: 'MerchantGuard', url: MERCHANTGUARD },
    { title: 'AI Mystery Shopper Agent', publisher: 'TokenSurf', url: TOKENSURF },
    { title: 'Secret Shopper for AI Agents', publisher: 'UndercoverAgent', url: UNDERCOVER },
    { title: 'AI Store Shopper: can an AI buy from your store?', publisher: 'AI Store Shopper', url: AISTORESHOPPER },
    { title: 'Checkout UX Analyst', publisher: 'StoreSpark, Shopify App Store', url: CHECKOUT_UX },
    { title: 'AI Agent Checkout Test', publisher: 'Convertica', url: CONVERTICA },
    { title: 'Gen.QA', publisher: 'Gen.QA', url: GENQA },
    { title: 'Mystery Shopper AI Suite', publisher: 'S-PRO', url: SPRO },
    { title: 'Shoptest', publisher: 'Shoptest', url: SHOPTEST },
    { title: 'Shoptest', publisher: 'Shopify App Store', url: SHOPTEST_APP },
    { title: 'How it works: mystery shopping', publisher: 'CustomerOptix (IntelliShop)', url: CUSTOMEROPTIX },
    { title: 'What online mystery shopping reveals about your digital CX', publisher: 'Intouch Insight', url: INTOUCH, date: '2025-11-17' },
    { title: 'Mystery shopping services: complete guide and pricing (2026)', publisher: 'T-ROC', url: TROC, date: '2026-05-04' },
  ],

  related: [
    'hire-ai-customers',
    'test-store-chatbot-returns-policy',
    'agent-ready-website',
    'recipe:mystery-shopper',
    '/use-cases/leak-checks-for-ecommerce-stores',
    '/sample-output',
  ],
}
