import type { BlogPost } from './types'

/* Draft for the Content and Search Plan (23 Oct 2026), research idea 1 in _research/seo/library/ai_agents_answers.json
   (idea 3, the stale price, folds into the "fix" section). Published 2027-01-26, category Check your AI agents.
   Readers: Shopify and DTC founders and heads of growth, and the retention, CRO and SEO agencies adding AI visibility
   to what they sell. Why now: stores and agencies are being asked "what does ChatGPT say about us" and most answers
   are one screenshot; the study evidence says one run is a draw. The piece gives the full method free (10 to 20
   questions in the customer's words, 3 runs on each assistant, a dated and country-tagged log, scored as appearance
   rate and accuracy against the store's own pages, never a rank), then what to fix, then the paid tools fairly.
   Obsession is named once in the body (the disclosure, where the by-hand method stops) plus the 2 cta blocks.
   Taken off the table on purpose: rank tracking, and an AI visibility tool for anyone whose own check still shows
   unfixed wrong claims.
   Read at the source on 23 Oct 2026: Search Engine Journal on SparkToro and Gumshoe.ai, PPC Land on Lily Ray, DNYUZ's
   republication of the Business Insider story on Product.ai (Business Insider itself not reachable), Adobe's 28 Sep
   release, the arXiv paper 2603.08924 (v3, HTML), Google's two Search Central pages, Shopify's agentic storefronts help
   page and developer docs, OpenAI's and Perplexity's crawler pages, AgencyAnalytics, and the pricing or product pages
   of Ahrefs Brand Radar, Otterly.AI, Peec AI (and its docs) and Profound.
   Not used, on purpose: the Shopify shopper agent launch of 13 Oct 2026 (only shop.md and one secondary report
   reached; no date or approval wording from Shopify), OpenAI's shopping help page (403), the "up to 62%" line on the
   recipe page (no source named there), the Tech.co and BrightEdge figures (not opened), any PilotX audit figure, the
   93% and 128 stores, and the $410 lamp.
   One quote (the r/shopify price thread) is carried from the research library; Reddit cannot be fetched, so it was
   not reopened. Say so in the note, and reopen it by hand before publishing if possible.
   Before publishing on 26 Jan 2027: check every tool price again and plan (Ahrefs, Otterly, Peec, Profound), the Shopify
   help page, Google's two pages, and replace Adobe's forecast with its reported result if published.
   Buyer words (sign up, basket, delivery); no dashes; "claims" instead of the banned word for statements of fact. */

const SPARKTORO = 'https://www.searchenginejournal.com/ai-recommendations-change-with-nearly-every-query-sparktoro/566242'
const LILY_RAY = 'https://ppc.land/llm-tracking-tools-face-accuracy-crisis-from-personalization-features/'
const PRODUCT_AI = 'https://dnyuz.com/2026/09/25/ai-cant-take-over-your-holiday-shopping-quite-yet-a-new-study-suggests/'
const ADOBE = 'https://news.adobe.com/news/2026/09/adobe-us-holiday-shopping-season-to-hit-record'
const SIELINSKI = 'https://arxiv.org/abs/2603.08924'
const GOOGLE_GUIDE = 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide'
const GOOGLE_FEATURES = 'https://developers.google.com/search/docs/appearance/ai-features'
const SHOPIFY_HELP = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts'
const SHOPIFY_DEV = 'https://shopify.dev/docs/agents'
const OPENAI_BOTS = 'https://developers.openai.com/api/docs/bots'
const PERPLEXITY_BOTS = 'https://docs.perplexity.ai/guides/bots'
const AGENCY_ANALYTICS = 'https://agencyanalytics.com/agency-benchmarks-2026'
const AHREFS = 'https://ahrefs.com/brand-radar'
const OTTERLY = 'https://otterly.ai/pricing'
const PEEC = 'https://peec.ai/pricing'
const PEEC_DOCS = 'https://docs.peec.ai'
const PROFOUND = 'https://www.tryprofound.com/pricing'
const R_PRICE = 'https://www.reddit.com/r/shopify/comments/1vz1smp/anyone_know_why_chatgpt_would_quote_us_a_price_we/'
const RECIPE = 'https://useobsession.com/recipes/listings-ai-answers'

export const post: BlogPost = {
  slug: 'what-chatgpt-says-about-your-store',
  title: 'What ChatGPT, Perplexity and Google say about your store: a check you can repeat',
  dek: 'One screenshot of what an AI assistant said about your store is one draw from many. Ask your customers’ questions 3 times on each assistant, log the date and the country, and score how often you appear and how often the claims are right.',
  metaTitle: 'What does ChatGPT say about my brand? A check to repeat',
  description:
    'What does ChatGPT say about my brand? Ask 15 customer questions 3 times on ChatGPT, Perplexity and Google, log each run, and score appearance and accuracy.',
  answer:
    'To check what ChatGPT says about your store, ask 10 to 20 questions in your customers’ words, 3 times on each assistant, and log the date and country. Score 2 numbers, not a rank: how often your store is named, and how many of the claims in the answers match your own pages.',
  primaryKeyword: 'what does chatgpt say about my brand',
  keywords: [
    'what does chatgpt say about my brand',
    'check brand in chatgpt',
    'how to check what chatgpt says about my store',
    'how to get my shopify store recommended by chatgpt',
    'how to get recommended by chatgpt',
    'chatgpt shopping',
    'ai visibility',
    'ai visibility tools',
    'ai search visibility',
    'track brand mentions in chatgpt',
  ],
  category: 'Check your AI agents',
  published: '2026-10-23',
  updated: '2026-10-23',
  readingMinutes: 10,
  order: 9,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'listings',
    workspace: 'company',
    art: {
      kind: 'runs',
      title: 'terncoffee.example · 1 question, asked 3 times on 1 assistant',
      prompt: 'What’s the best coffee subscription in the UK to give as a gift?',
      runs: [
        { label: 'Run 1 · new chat', answer: 'Names Tern Coffee among 4 brands, at £24 a month.', verdict: { tone: 'fail', text: 'Old price' } },
        { label: 'Run 2 · new chat', answer: 'Names 4 other brands. No Tern Coffee.', verdict: { tone: 'fail', text: 'Not named' } },
        { label: 'Run 3 · new chat', answer: 'Names Tern Coffee first, at £22 a month.', verdict: { tone: 'ok', text: 'Named, right price' } },
      ],
      foot: 'Named in 2 of 3. Price right in 1 of 2. One run is a screenshot; three begin a rate.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'In November and December 2025, SparkToro and Gumshoe.ai asked ChatGPT and Google’s AI each of 12 brand recommendation questions, 60 to 100 times per platform. The same list of brands came back fewer than 1 time in 100 ([Search Engine Journal, 30 January 2026](' +
        SPARKTORO +
        ')).',
    },
    {
      kind: 'p',
      text: 'The screenshot you took of what ChatGPT says about your store is 1 draw from that spread. It may come from the kind end or the harsh end, and you can’t tell which. A shopper who is quoted a price you stopped charging doesn’t email you to say so.',
    },
    {
      kind: 'quote',
      text: 'She got annoyed and left without buying.',
      cite: 'A store owner on r/shopify, August 2026, on a shopper ChatGPT quoted an old price',
      href: R_PRICE,
    },
    {
      kind: 'p',
      text: 'What holds still is a rate: how often your store is named across many answers, and how many of the claims in them match your own pages. Both can be counted by hand, free, in an afternoon.',
    },
    {
      kind: 'p',
      text: 'Adobe forecast in September 2026 that AI driven traffic to US retail sites would rise 130% year on year over the 2026 holiday season ([Adobe](' +
        ADOBE +
        '), a vendor forecast built on Adobe Analytics). That is the category figure, not yours.',
    },
    {
      kind: 'note',
      title: 'Your number first',
      text: 'Open your analytics’ referral report and take last month’s sessions from AI assistants. Multiply by your conversion rate and your average order. That is the monthly revenue that reaches you through answers you haven’t read. Halve the conversion rate, to stay on the low side.',
    },

    { kind: 'h2', id: 'answers-vary-but-are-not-mostly-wrong', text: 'Answers vary, but they are not mostly wrong' },
    {
      kind: 'p',
      text: 'The spread is real and it can be measured. In SparkToro’s headphone test, 142 people each wrote their own prompt for the same need. The prompts shared little wording, and each of Bose, Sony, Sennheiser and Apple still appeared in 55% to 77% of the 994 responses. How often a brand appeared held steadier than where it came in the list.',
    },
    {
      kind: 'stat',
      value: '55 to 77%',
      label: 'share of 994 answers to 142 differently worded headphone questions in which each of Bose, Sony, Sennheiser and Apple appeared',
      source: 'SparkToro and Gumshoe.ai, 30 Jan 2026 (run with an AI tracking company, not peer reviewed)',
      href: SPARKTORO,
    },
    {
      kind: 'p',
      text: 'The person asking changes the answer too. In November 2025, Lily Ray of Amsive spot checked prompts from tracking tools against her own ChatGPT. It rewrote a generic electronics prompt into a New York City search for her ([PPC Land](' +
        LILY_RAY +
        ')).',
    },
    {
      kind: 'quote',
      text: 'The answers almost never match up.',
      cite: 'Lily Ray, VP of SEO Strategy and Research at Amsive, 3 Nov 2025',
      href: LILY_RAY,
    },
    {
      kind: 'p',
      text: 'Prices are the claim shoppers act on, so the Product.ai study is worth reading closely. It put 220 shopping questions to the free and paid versions of ChatGPT, Claude, Gemini and Perplexity, 5 times each, and collected 8,794 responses ([Business Insider, via DNYUZ, 25 September 2026](' +
        PRODUCT_AI +
        ')).',
    },
    {
      kind: 'stat',
      value: '85%',
      label: 'of 913 verifiable price answers matched the current or listed price; when one was wrong, the median gap was $300',
      source: 'Product.ai, reported by Business Insider, 25 Sep 2026 (a vendor study)',
      href: PRODUCT_AI,
    },
    {
      kind: 'p',
      text: 'The figure that travelled, 86%, is the share of questions that produced a repeatable factual conflict: a checkable disagreement, such as a different price or specification, that appeared in more than 1 response. It shows assistants disagree with each other. It doesn’t show which one was wrong. Product.ai is a startup that checks product claims against evidence, and the report doesn’t say whether the study was peer reviewed. It did find large gaps between the assistants, and between the free and paid versions of the same one.',
    },

    { kind: 'h2', id: 'the-check', text: 'Ask your customers’ questions, 3 times each, and log every answer' },
    {
      kind: 'p',
      text: 'It takes an afternoon, a sheet and 3 assistants. Nothing to buy.',
    },
    { kind: 'h3', id: 'questions', text: 'Write the questions in your customers’ words' },
    {
      kind: 'p',
      text: 'Take 10 to 20 questions from where customers already put them: the queries in your Search Console, your support inbox and the wording in your reviews. Cover each type below.',
    },
    {
      kind: 'table',
      caption: 'The question types, with an invented store: Tern Coffee (terncoffee.example)',
      cols: ['Question type', 'Ask it like this', 'Score it on'],
      rows: [
        ['Discovery', 'best coffee subscription UK for filter coffee', 'Named or not, and who is named instead'],
        ['Worth it', 'is Tern Coffee worth it', 'Claims about quality, reviews and roast dates'],
        ['Against a rival', 'Tern Coffee vs [your closest rival]', 'Who is recommended, and the reasons given'],
        ['Policy', 'what is Tern Coffee’s returns policy', 'Window and conditions against your policy page'],
        ['Delivery', 'does Tern Coffee deliver to Ireland and what does it cost', 'Countries, cost and time against your delivery page'],
        ['Price', 'how much is Tern Coffee’s Ethiopia 250g', 'Price, pack size and stock against the product page today'],
        ['Offer', 'is there a Tern Coffee discount code', 'Any code it names, against the codes that work'],
      ],
    },
    {
      kind: 'p',
      text: 'Only the discovery questions test whether you are named, because every other type contains your name. Score those on accuracy.',
    },
    { kind: 'h3', id: 'reference-sheet', text: 'Write down what is true today' },
    {
      kind: 'p',
      text: 'Before you ask anything, copy the claims from your live pages into a reference sheet, with the date: price and pack size of your top sellers, delivery countries, costs and cutoffs, the returns window and its conditions, and any live offer. Every answer is marked against this sheet, not against memory.',
    },
    { kind: 'h3', id: 'runs', text: 'Run each question 3 times on each assistant' },
    {
      kind: 'list',
      items: [
        '**The assistants:** ChatGPT, Perplexity, and Google’s AI Overviews and AI Mode where they show. Add Gemini and Claude if your customers use them.',
        '**A new chat for every run,** the same wording each time, in a private window and signed out where the assistant allows it. Note which you did.',
        '**The country** you ran it from. If you sell abroad, ask someone there to run the same sheet.',
        '**The plan,** free or paid. In Product.ai’s data the same assistant differed between its free and paid versions.',
        '**Every link the answer cites or shows.** They become your fix list.',
      ],
    },
    {
      kind: 'p',
      text: '15 questions, 3 runs and 3 assistants make 135 answers. For each, log the date, country, assistant and plan, the question and run number, whether you were named, each claim with right, wrong or can’t check, the links, and a screenshot.',
    },
    { kind: 'h3', id: 'score', text: 'Score appearance and accuracy, not rank' },
    {
      kind: 'p',
      text: '**Appearance rate** is the answers that name your store divided by all answers to your discovery questions, for each assistant. **Accuracy** is the claims that match your reference sheet divided by the claims you can check. Count your rivals the same way: the brands named most often in your discovery answers are your competition inside that assistant. Leave rank out. In SparkToro’s data, how often a brand appeared was steadier than its position.',
    },

    { kind: 'h2', id: 'what-the-count-shows', text: '45 answers per assistant show direction, not a decimal' },
    {
      kind: 'p',
      text: 'A preprint by Ronald Sielinski ([arXiv, 2026](' +
        SIELINSKI +
        ')) repeated queries on 3 consumer product topics and found single run visibility numbers give a “misleadingly precise” picture. To get an interval 5 points wide on how often a domain was cited, it needed roughly 30 to 50 distinct queries per topic on Gemini, 90 to 100 on Perplexity and 150 or more on OpenAI’s SearchGPT. It measured citations of domains, not brand mentions, and it has one author.',
    },
    {
      kind: 'p',
      text: 'Your 15 questions sit below that on every engine. At 45 answers, a 50% rate carries a margin close to 15 points either side, by our arithmetic, and that flatters you, because 3 runs of 1 question are not independent. So act on 3 results: a gap too wide for that margin, such as named in 5 of 45 answers on 1 assistant and 30 of 45 on another; a rival named far more often than you; and any wrong claim that comes back in 2 or 3 of 3 runs. A move from 12 of 45 to 15 of 45 is noise. A wrong price is worth fixing at any sample size, because checking 1 page costs minutes.',
    },

    { kind: 'h2', id: 'fix-the-page-it-read', text: 'Fix the page the answer came from' },
    {
      kind: 'p',
      text: 'For each wrong claim or missing mention, open the links the assistant cited. A wrong answer is built from 1 of 3 places: your product data, your own pages, or someone else’s pages.',
    },
    { kind: 'h3', id: 'product-data', text: 'Your product data' },
    {
      kind: 'p',
      text: 'On Shopify, [agentic storefronts are active by default for eligible stores](' +
        SHOPIFY_HELP +
        '), and your products reach AI channels through Shopify Catalog. ChatGPT is discovery focused: buyers check out on your own store. Google AI Mode and Gemini can also receive products through the Google & YouTube channel or Google Merchant Center. Shopify’s developer docs say [agents act on search results that include product titles, images and variant details](' +
        SHOPIFY_DEV +
        '). So the price, title and variant names in your admin come first. You choose which AI channels you sell on under Sales channels, then Agentic.',
    },
    { kind: 'h3', id: 'policy-pages', text: 'Your policy and delivery pages' },
    {
      kind: 'p',
      text: 'Put the returns window, delivery countries, costs and cutoff dates in plain text on 1 page each, with the date of the last update. Then check the assistants can read them: OpenAI says to [allow OAI-SearchBot in robots.txt](' +
        OPENAI_BOTS +
        ') to appear in ChatGPT search, and [Perplexity says the same of PerplexityBot](' +
        PERPLEXITY_BOTS +
        '). Each says a change can take up to 24 hours to apply. For Google’s AI features, [there are no extra requirements or special files](' +
        GOOGLE_FEATURES +
        '): a page has to be indexed and eligible for a snippet, and [“still SEO”](' +
        GOOGLE_GUIDE +
        ') is Google’s own summary.',
    },
    { kind: 'h3', id: 'other-pages', text: 'Pages that aren’t yours' },
    {
      kind: 'p',
      text: 'If the cited page belongs to a retailer, marketplace, review roundup or comparison site, send its owner the correct detail with a link to your own page, and note the date you asked. Search your old price in quotes with the product name: any page that still shows it is a suspect.',
    },
    { kind: 'h3', id: 'being-named', text: 'Being named at all' },
    {
      kind: 'p',
      text: 'If you are missing from discovery answers, the fix is slower, because the pages that mention you are other people’s: reviews, press, retailers that stock you, comparison pages. Google’s guide says chasing inauthentic mentions [isn’t as helpful as it seems](' +
        GOOGLE_GUIDE +
        '). Earn real ones where your customers read, and keep your own pages clear on what you sell, for whom and at what price.',
    },
    {
      kind: 'p',
      text: 'Then ask again. Run the same sheet after every change and on a fixed day each month, and close a claim when the answer is right in 3 of 3 runs.',
    },

    { kind: 'h2', id: 'where-by-hand-stops', text: 'A check by hand stops at 1 person, 1 country and 1 day' },
    {
      kind: 'p',
      text: 'The sheet can’t see what an assistant tells someone in Dublin on a Tuesday when you ran it from Leeds on a Friday. It holds only the history you keep, and a screenshot is weak proof of what an answer said on a date. AI visibility tools exist for that gap, and 4 describe themselves this way on their own pages (checked 23 October 2026; confirm prices there).',
    },
    {
      kind: 'list',
      items: [
        '**[Ahrefs Brand Radar](' +
          AHREFS +
          ')** covers AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini and Copilot. Custom Prompts (your own questions) start at $50 a month, free in paid Ahrefs plans from Lite up, and are checked daily. Its AI Visibility Index, a prebuilt database of prompts modelled on real searches, starts at $199 a month.',
        '**[Otterly.AI](' +
          OTTERLY +
          ')** covers ChatGPT, Google AI Overviews, Perplexity and Copilot on every plan, with Claude, AI Mode and Gemini as paid extras. Plans run from $29 for 15 search prompts to $489 for 400, with daily tracking and unlimited countries. Its page lists 2 unlabelled sets of prices; these are the higher.',
        '**[Peec AI](' +
          PEEC +
          ')** tracks ChatGPT, Perplexity and Gemini, with a separate AI Mode tracker, across countries, and offers CSV export, a Looker Studio connector and an API. Its pricing page lists Starter, Pro and Advanced monthly plans and a custom Enterprise plan, with no prices shown. [Its docs](' +
          PEEC_DOCS +
          ') say it collects answers by UI scraping, from a logged out user’s view.',
        '**[Profound](' +
          PROFOUND +
          ')** has a free trial of 50 prompts run daily for 7 days on ChatGPT, Gemini and Google AI Overviews, for 1 region and 1 language. Its custom priced Enterprise plan tracks up to 9 answer engines, ChatGPT Shopping included, and a self serve Agency Growth plan gives 400 credits a month per client workspace, with no price shown. Its pages don’t say how it collects answers.',
      ],
    },
    {
      kind: 'p',
      text: 'Two limits apply to every tool, because they come from the assistants. Answers move from run to run and with the person asking, as the studies above show. And Google’s guide says [no third party tool has access to its internal ranking or AI systems](' +
        GOOGLE_GUIDE +
        '), so a tool reports what assistants answered, not why. Rand Fishkin’s test for any provider is that it [“shows their math”](' +
        SPARKTORO +
        ').',
    },
    {
      kind: 'p',
      text: 'We make Obsession, which has a recipe in this area. It isn’t one of the 4 above, and its own page says what it does.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s Listings and AI answers recipe does this on a schedule: every Monday its AI agents ask the assistants your buyers use, trace each wrong answer to the page it cites, and ask again until the answer changes.',
      to: '/recipes/listings-ai-answers',
      label: 'See Listings and AI answers',
    },

    { kind: 'h2', id: 'no-tool-yet', text: 'You don’t need an AI visibility tool while the sheet still shows fixes you haven’t made' },
    {
      kind: 'p',
      text: 'A daily tracker shows you the same wrong price every day. If your first run finds no wrong claim and your store is named in most discovery answers, repeat the sheet monthly and after any change to a price, a policy or your product data. If it finds wrong claims, fix those first.',
    },

    { kind: 'h2', id: 'for-agencies', text: 'For agencies: report the repeat, not the screenshot' },
    {
      kind: 'p',
      text: 'AgencyAnalytics surveyed 494 agency professionals between February and April 2026: [66% reported increased demand for AEO and SEO for AI driven search](' +
        AGENCY_ANALYTICS +
        '), the top new service clients requested in 2026 (a vendor survey). Clients will ask what changed, and January is when they decide who to keep. A report that survives the question names the questions, runs, dates and country; gives appearance rate and accuracy for each assistant with the number of answers behind them; lists each wrong claim with the page it came from, who fixed it and when; and shows the second run.',
    },
    {
      kind: 'p',
      text: 'Google’s guide tells site owners to be wary of tools that promise ranking success. Promise the fix and a second run, and let the next month’s sheet show what moved.',
    },
    {
      kind: 'cta',
      text: 'AI answers are one place a shopper meets your store. Obsession’s AI agents also shop it as new customers, from the ad to the sign up, the welcome code and the basket, and every leak comes back with proof and the fix.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'questions-asked', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What does ChatGPT say about my brand?',
          a: 'It depends on the question, the run and the person asking, so 1 answer isn’t a result. Ask 10 to 20 of your customers’ questions 3 times each on ChatGPT, Perplexity and Google, log the date and country, and count how often your store is named and how many claims match your own pages.',
        },
        {
          q: 'How do I get my Shopify store recommended by ChatGPT?',
          a: 'No one can promise a recommendation. You control accurate product data in Shopify, which sends products to AI channels through Shopify Catalog, policy and delivery pages in plain text, a robots.txt that allows OAI-SearchBot, and real mentions on pages your customers read. Under Sales channels, then Agentic, you choose which AI channels you sell on. Check the effect with the same questions each month.',
        },
        {
          q: 'Why does ChatGPT give a different answer each time?',
          a: 'The same question can get a different answer each time, and answers can change with the person asking and their location. SparkToro and Gumshoe.ai found ChatGPT and Google’s AI returned the same brand list fewer than 1 time in 100, so count a rate over repeated runs instead of reading 1 answer.',
        },
        {
          q: 'How many times should I run each question?',
          a: '3 is a practical floor for a check by hand. Tight rates need far more: one preprint needed 30 to 150 or more distinct queries per topic on each engine for an interval 5 points wide. Use 3 runs to spot direction and wrong claims that repeat, and run your top 5 questions more often.',
        },
        {
          q: 'Are AI shopping assistants wrong 86% of the time?',
          a: 'No. In Product.ai’s study, reported by Business Insider on 25 September 2026, 86% of 220 questions produced a repeatable factual conflict, meaning responses disagreed on something checkable. Of 913 verifiable price answers, 85% matched the current or listed price.',
        },
        {
          q: 'Do I need an AI visibility tool?',
          a: 'Not while your own check still shows wrong claims you haven’t fixed. Ahrefs Brand Radar, Otterly.AI, Peec AI and Profound run prompts daily and keep the history, and a sheet filled in by hand covers the first pass with no software.',
        },
        {
          q: 'Can I see AI Overviews and AI Mode in Search Console?',
          a: 'Google says AI features are reported in the Performance report under the Web search type, and that a Generative AI performance report shows how your content performs in them. It reports how your pages perform, not what an answer said about your store.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Each source was opened at its own page on 23 October 2026: Search Engine Journal on the SparkToro and Gumshoe.ai study, PPC Land on Lily Ray, DNYUZ’s republication of the Business Insider story on Product.ai (Business Insider itself wasn’t reachable), Adobe’s 28 September 2026 release, the arXiv paper, 2 Google Search Central pages, Shopify’s help page and developer docs, OpenAI’s and Perplexity’s crawler pages, AgencyAnalytics, and the pricing or product pages of the 4 tools. Tool prices are as listed that day. The r/shopify quote comes from our research notes: Reddit can’t be fetched automatically, so it wasn’t reopened. We ran this check on no named store, so no store’s results appear here. We left out Shopify’s shopper agent launch of 13 October 2026, which we could confirm only on shop.md and one secondary report.',
    },
  ],

  sources: [
    { title: 'AI recommendations change with nearly every query: SparkToro', publisher: 'Search Engine Journal', url: SPARKTORO, date: '2026-01-30' },
    { title: 'LLM tracking tools face accuracy crisis from personalization features', publisher: 'PPC Land', url: LILY_RAY, date: '2025-11-09' },
    { title: 'AI can’t take over your holiday shopping quite yet, a new study suggests (Product.ai study)', publisher: 'Business Insider, republished by DNYUZ', url: PRODUCT_AI, date: '2026-09-25' },
    { title: 'Adobe forecasts U.S. holiday shopping season to hit a record $275.1 billion online', publisher: 'Adobe', url: ADOBE, date: '2026-09-28' },
    { title: 'Quantifying Uncertainty in AI Visibility: A Statistical Framework for Generative Search Measurement', publisher: 'Ronald Sielinski, arXiv 2603.08924 (v3)', url: SIELINSKI, date: '2026-03-09' },
    { title: 'Optimizing your website for generative AI features on Google Search', publisher: 'Google Search Central', url: GOOGLE_GUIDE, date: 'Updated 2026-07-10; checked 23 Oct 2026' },
    { title: 'AI features and your website', publisher: 'Google Search Central', url: GOOGLE_FEATURES, date: 'Updated 2025-12-10; checked 23 Oct 2026' },
    { title: 'Agentic storefronts', publisher: 'Shopify Help Center', url: SHOPIFY_HELP, date: 'Checked 23 Oct 2026' },
    { title: 'Agentic commerce', publisher: 'Shopify developer docs', url: SHOPIFY_DEV, date: 'Checked 23 Oct 2026' },
    { title: 'Overview of OpenAI crawlers', publisher: 'OpenAI developers', url: OPENAI_BOTS, date: 'Checked 23 Oct 2026' },
    { title: 'Perplexity crawlers', publisher: 'Perplexity docs', url: PERPLEXITY_BOTS, date: 'Checked 23 Oct 2026' },
    { title: '2026 Marketing Agency Benchmarks Report', publisher: 'AgencyAnalytics', url: AGENCY_ANALYTICS, date: '2026 (survey Feb to Apr 2026)' },
    { title: 'Brand Radar', publisher: 'Ahrefs', url: AHREFS, date: 'Checked 23 Oct 2026' },
    { title: 'Pricing', publisher: 'Otterly.AI', url: OTTERLY, date: 'Checked 23 Oct 2026' },
    { title: 'Pricing', publisher: 'Peec AI', url: PEEC, date: 'Checked 23 Oct 2026' },
    { title: 'Welcome to Peec AI (docs)', publisher: 'Peec AI', url: PEEC_DOCS, date: 'Checked 23 Oct 2026' },
    { title: 'Pricing', publisher: 'Profound', url: PROFOUND, date: 'Checked 23 Oct 2026' },
    { title: 'Anyone know why ChatGPT would quote us a price we have not charged since we first opened', publisher: 'r/shopify', url: R_PRICE, date: '2026-08-26' },
    { title: 'Listings and AI answers', publisher: 'Obsession', url: RECIPE, date: 'Checked 23 Oct 2026' },
  ],

  related: [
    'recipe:listings-ai-answers',
    'recipe:support-bot-check',
    'recipe:website-audit',
    '/use-cases/leak-checks-for-ecommerce-stores',
    '/use-cases/leak-checks-for-retention-agencies',
    'black-friday-checklist-new-customer',
  ],
}
