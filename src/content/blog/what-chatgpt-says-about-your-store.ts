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

export const post: BlogPost = {
  slug: 'what-chatgpt-says-about-your-store',
  title: 'What ChatGPT, Perplexity and Google say about your store: a check you can repeat',
  dek: 'AI answers change from run to run, so a single screenshot shows 1 answer of many. Ask your customers’ questions 3 times on each assistant, log the date and country, and score how often your store is named and how many claims in the answers are right.',
  metaTitle: 'What does ChatGPT say about my brand? A repeatable check',
  description:
    'See what ChatGPT says about your brand: ask 15 customer questions 3 times on ChatGPT, Perplexity and Google, log each run, score appearance and accuracy.',
  answer:
    'To check what ChatGPT says about your store, ask 10 to 20 questions in your customers’ words, 3 times on each assistant, and log the date and country. Then score 2 numbers: how often your store is named, and how many of the claims in the answers match your own pages.',
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
      foot: 'Named in 2 of 3 answers. Price right in 1 of 2. Run it 3 times or more to see a rate.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Shopify and DTC stores, and the agencies that report AI visibility to them, can measure what ChatGPT, Perplexity and Google’s AI features say about a store by hand, free, in an afternoon. The method gives 2 rates for each assistant: the **appearance rate**, how often the store is named, and **accuracy**, how many claims in the answers match the store’s own pages. Both rates hold steadier across runs than any single answer.',
    },
    {
      kind: 'p',
      text: '[Adobe forecast in September 2026](' +
        ADOBE +
        ') that AI driven traffic to US retail sites would rise 130% year on year over the 2026 holiday season. It is a vendor forecast built on Adobe Analytics and covers US retail as a whole. Your own figure comes from your analytics.',
    },
    {
      kind: 'note',
      title: 'Your own figure',
      text: 'Open your analytics’ referral report and take last month’s sessions from AI assistants. Multiply them by half your conversion rate, to stay on the low side, and by your average order. The result is the monthly revenue that reaches you through AI answers you haven’t read.',
    },

    { kind: 'h2', id: 'answers-vary-but-are-not-mostly-wrong', text: 'How much AI answers vary, and how often they are wrong' },
    {
      kind: 'p',
      text: 'AI assistants rarely return the same list of brands twice. In November and December 2025, SparkToro and Gumshoe.ai asked ChatGPT and Google’s AI each of 12 brand recommendation questions, 60 to 100 times per platform, and the same list of brands came back fewer than 1 time in 100, [Search Engine Journal reported on 30 January 2026](' +
        SPARKTORO +
        '). A screenshot of what ChatGPT said about your store is 1 answer from that spread, and you can’t tell whether it was typical.',
    },
    {
      kind: 'p',
      text: 'How often a brand appears holds steadier than where it comes in the list. In SparkToro’s headphone test, 142 people each wrote their own question for the same need. The questions shared little wording, and each of Bose, Sony, Sennheiser and Apple still appeared in 55% to 77% of the 994 answers.',
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
      text: 'Answers also change with the person asking. [PPC Land reported](' +
        LILY_RAY +
        ') that in November 2025 Lily Ray, VP of SEO Strategy and Research at Amsive, spot checked the questions tracking tools use against her own ChatGPT, which rewrote a generic electronics question into a New York City search for her. On 3 November 2025 she said the answers almost never matched.',
    },
    {
      kind: 'p',
      text: 'Prices are the claims shoppers act on. Product.ai put 220 shopping questions to the free and paid versions of ChatGPT, Claude, Gemini and Perplexity, 5 times each, and collected 8,794 answers, as [Business Insider reported on 25 September 2026, in a story republished by DNYUZ](' +
        PRODUCT_AI +
        ').',
    },
    {
      kind: 'stat',
      value: '85%',
      label: 'of 913 verifiable price answers matched the current or listed price, and when one was wrong, the median gap was $300',
      source: 'Product.ai, reported by Business Insider, 25 Sep 2026 (a vendor study)',
      href: PRODUCT_AI,
    },
    {
      kind: 'p',
      text: 'The study’s headline figure, 86%, is the share of questions that produced a repeatable factual conflict: a checkable disagreement, such as a different price or specification, that appeared in more than 1 answer. It measures disagreement between the assistants and doesn’t identify which answer was wrong. Product.ai is a startup that checks product claims against evidence, and the report doesn’t say whether the study was peer reviewed. The study found large gaps between the assistants, and between the free and paid versions of the same assistant.',
    },
    {
      kind: 'p',
      text: 'A shopper who is quoted a price you stopped charging doesn’t email you to say so. A store owner on r/shopify described one such shopper in August 2026:',
    },
    {
      kind: 'quote',
      text: 'She got annoyed and left without buying.',
      cite: 'A store owner on r/shopify, August 2026, on a shopper ChatGPT quoted an old price',
      href: R_PRICE,
    },

    { kind: 'h2', id: 'the-check', text: 'How to run the check by hand' },
    {
      kind: 'p',
      text: 'The check takes an afternoon, 3 assistants, a log for the answers and a reference sheet for what is true, and costs nothing.',
    },
    { kind: 'h3', id: 'questions', text: '1. Write the questions in your customers’ words' },
    {
      kind: 'p',
      text: 'Take 10 to 20 questions from where customers already ask them: the queries in your Search Console, your support inbox and the wording in your reviews. Cover each of these types:',
    },
    {
      kind: 'table',
      caption: 'Question types to cover, shown for an invented store, Tern Coffee (terncoffee.example)',
      cols: ['Question type', 'Ask it like this', 'Score it on'],
      rows: [
        ['Discovery', 'best coffee subscription UK for filter coffee', 'Named or not, and who is named instead'],
        ['Worth it', 'is Tern Coffee worth it', 'Claims about quality, reviews and roast dates'],
        ['Against a competitor', 'Tern Coffee vs [your closest competitor]', 'Who is recommended, and the reasons given'],
        ['Policy', 'what is Tern Coffee’s returns policy', 'Window and conditions against your policy page'],
        ['Delivery', 'does Tern Coffee deliver to Ireland and what does it cost', 'Countries, cost and time against your delivery page'],
        ['Price', 'how much is Tern Coffee’s Ethiopia 250g', 'Price, pack size and stock against the product page today'],
        ['Offer', 'is there a Tern Coffee discount code', 'Any code it names, against the codes that work'],
      ],
    },
    {
      kind: 'p',
      text: 'Discovery questions are the only type that tests whether you are named, because every other type contains your name. Score the other types on accuracy.',
    },
    { kind: 'h3', id: 'reference-sheet', text: '2. Write down what is true today' },
    {
      kind: 'p',
      text: 'Before you ask anything, copy the claims from your live pages into a reference sheet, with the date: price and pack size of your top sellers, delivery countries, costs and cutoffs, the returns window and its conditions, and any live offer. Mark every answer against this sheet.',
    },
    { kind: 'h3', id: 'runs', text: '3. Run each question 3 times on each assistant' },
    {
      kind: 'p',
      text: 'Keep the conditions the same for every run, and record them:',
    },
    {
      kind: 'list',
      items: [
        '**Assistants:** ChatGPT, Perplexity, and Google’s AI Overviews and AI Mode where they show. Add Gemini and Claude if your customers use them.',
        '**A new chat for every run,** with the same wording each time, in a private window and signed out where the assistant allows it. Note which you did.',
        '**Country:** record where you ran it from. If you sell abroad, ask someone there to run the same questions.',
        '**Plan:** free or paid. In Product.ai’s data the same assistant differed between its free and paid versions.',
        '**Links:** record every link the answer cites or shows. These become your fix list.',
      ],
    },
    {
      kind: 'p',
      text: 'At 15 questions, 3 runs and 3 assistants, the log holds 135 answers. For each answer, log the date, country, assistant and plan, the question and run number, whether you were named, each claim marked right, wrong or can’t check, the links, and a screenshot.',
    },
    { kind: 'h3', id: 'score', text: '4. Score appearance rate and accuracy' },
    {
      kind: 'p',
      text: '**Appearance rate** is the answers that name your store divided by all answers to your discovery questions, for each assistant. **Accuracy** is the claims that match your reference sheet divided by the claims you can check. Count your competitors the same way: the brands named most often in your discovery answers are your competition inside that assistant. Leave rank out, because in SparkToro’s data how often a brand appeared was steadier than its position.',
    },

    { kind: 'h2', id: 'what-the-count-shows', text: 'What 45 answers per assistant can tell you' },
    {
      kind: 'p',
      text: 'At 45 answers per assistant, a 50% appearance rate has a margin of error close to 15 points either side, by our arithmetic. The real margin is wider, because 3 runs of 1 question are not independent.',
    },
    {
      kind: 'p',
      text: '[A 2026 preprint by Ronald Sielinski](' +
        SIELINSKI +
        ') repeated questions on 3 consumer product topics and found that visibility numbers from a single run give a “misleadingly precise” picture. For an interval 5 points wide on how often a domain was cited, it needed roughly 30 to 50 distinct questions per topic on Gemini, 90 to 100 on Perplexity and 150 or more on OpenAI’s SearchGPT. It counted domain citations, which differ from brand mentions, and it has 1 author. Your 15 questions are fewer than that on every assistant, so act on 3 kinds of result:',
    },
    {
      kind: 'list',
      items: [
        'A gap too wide for that margin, such as being named in 5 of 45 answers on 1 assistant and 30 of 45 on another.',
        'A competitor named far more often than you.',
        'Any wrong claim that comes back in 2 or 3 of 3 runs.',
      ],
    },
    {
      kind: 'p',
      text: 'A move from 12 of 45 to 15 of 45 is within the margin. Fix a wrong price whatever the sample size, because checking 1 page takes minutes.',
    },

    { kind: 'h2', id: 'fix-the-page-it-read', text: 'How to fix a wrong or missing answer' },
    {
      kind: 'p',
      text: 'For each wrong claim or missing mention, open the links the assistant cited. A wrong answer comes from 1 of 3 places: your product data, your own pages, or pages that aren’t yours.',
    },
    { kind: 'h3', id: 'product-data', text: 'Your product data' },
    {
      kind: 'p',
      text: 'Check the price, title and variant names in your Shopify admin first: [Shopify’s developer docs say agents act on search results that include product titles, images and variant details](' +
        SHOPIFY_DEV +
        '). On Shopify, [agentic storefronts are active by default for eligible stores](' +
        SHOPIFY_HELP +
        '), and your products reach AI channels through Shopify Catalog. ChatGPT is discovery focused, and buyers check out on your own store. Google AI Mode and Gemini can also receive products through the Google & YouTube channel or Google Merchant Center. You choose which AI channels you sell on under Sales channels, then Agentic.',
    },
    { kind: 'h3', id: 'policy-pages', text: 'Your policy and delivery pages' },
    {
      kind: 'p',
      text: 'Put the returns window, delivery countries, costs and cutoff dates in plain text on 1 page each, with the date of the last update. Then check the assistants can read them. OpenAI says to [allow OAI-SearchBot in robots.txt](' +
        OPENAI_BOTS +
        ') to appear in ChatGPT search, and [Perplexity says the same of PerplexityBot](' +
        PERPLEXITY_BOTS +
        '). Each says a change can take up to 24 hours to apply. For Google’s AI features, Google says [there are no extra requirements or special files](' +
        GOOGLE_FEATURES +
        '): a page has to be indexed and eligible for a snippet. Its guide sums the work up as [“still SEO”](' +
        GOOGLE_GUIDE +
        ').',
    },
    { kind: 'h3', id: 'other-pages', text: 'Pages that aren’t yours' },
    {
      kind: 'p',
      text: 'If the cited page belongs to a retailer, marketplace, review roundup or comparison site, send its owner the correct detail with a link to your own page, and note the date you asked. Search your old price in quotes with the product name, because any page that still shows it may be where the assistant found it.',
    },
    { kind: 'h3', id: 'being-named', text: 'When your store isn’t named' },
    {
      kind: 'p',
      text: 'If you are missing from discovery answers, the fix takes longer, because the pages that mention you belong to other people: reviews, press, retailers that stock you and comparison pages. Google’s guide says chasing inauthentic mentions [isn’t as helpful as it seems](' +
        GOOGLE_GUIDE +
        '). Earn real mentions where your customers read, and keep your own pages clear on what you sell, for whom and at what price.',
    },
    {
      kind: 'p',
      text: 'Run the same questions again after every change and on a fixed day each month. Close a claim when the answer is right in 3 of 3 runs.',
    },

    { kind: 'h2', id: 'where-by-hand-stops', text: 'Limits of a check by hand, and what AI visibility tools offer', compare: true },
    {
      kind: 'p',
      text: 'A check by hand covers 1 person, 1 country and 1 day. The log can’t show what an assistant tells someone in Dublin on a Tuesday when you ran it from Leeds on a Friday, and it holds only the history you keep. AI visibility tools run your questions, which they call prompts, on a schedule and keep the history.',
    },
    {
      kind: 'p',
      text: 'We make Obsession, which does some of this, so every line about another tool is taken from that tool’s own pages, checked on 23 October 2026. Prices change, so confirm them on each page.',
    },
    {
      kind: 'list',
      items: [
        '**[Ahrefs Brand Radar](' +
          AHREFS +
          ')** covers AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini and Copilot. Custom Prompts (your own questions) start at $50 a month, free in paid Ahrefs plans from Lite up, and are checked daily. Its AI Visibility Index, a prebuilt database of prompts modelled on real searches, starts at $199 a month.',
        '**[Otterly.AI](' +
          OTTERLY +
          ')** covers ChatGPT, Google AI Overviews, Perplexity and Copilot on every plan, with Claude, AI Mode and Gemini as paid extras. Plans run from $29 for 15 search prompts to $489 for 400, with daily tracking and unlimited countries. Its page lists 2 unlabelled sets of prices, and these are the higher ones.',
        '**[Peec AI](' +
          PEEC +
          ')** tracks ChatGPT, Perplexity and Gemini, with a separate AI Mode tracker, across countries, and offers CSV export, a Looker Studio connector and an API. Its pricing page lists Starter, Pro and Advanced monthly plans and a custom Enterprise plan, with no prices shown. [Its docs](' +
          PEEC_DOCS +
          ') say it collects answers by UI scraping, from a logged out user’s view.',
        '**[Profound](' +
          PROFOUND +
          ')** has a free trial of 50 prompts run daily for 7 days on ChatGPT, Gemini and Google AI Overviews, for 1 region and 1 language. Its custom priced Enterprise plan tracks up to 9 assistants, ChatGPT Shopping included, and a self serve Agency Growth plan gives 400 credits a month per client workspace, with no price shown. Its pages don’t say how it collects answers.',
      ],
    },
    {
      kind: 'p',
      text: 'Every tool shares 2 limits, because they come from the assistants. Answers change from run to run and with the person asking. Google’s guide also says [no third party tool has access to its internal ranking or AI systems](' +
        GOOGLE_GUIDE +
        '), so a tool reports what an assistant answered without access to the reasons. Rand Fishkin’s test for any provider is whether it [“shows their math”](' +
        SPARKTORO +
        ').',
    },
    {
      kind: 'cta',
      text: 'Obsession’s Listings and AI answers recipe runs this check every Monday: its AI agents ask the assistants your customers use, trace each wrong answer to the page it cites, and ask again until the answer changes.',
      to: '/recipes/listings-ai-answers',
      label: 'See Listings and AI answers',
    },

    { kind: 'h2', id: 'no-tool-yet', text: 'Before you add an AI visibility tool' },
    {
      kind: 'p',
      text: 'Fix the wrong claims your first check finds before you add a tool, because a daily tracker would report the same wrong price every day until the page changes. If the first check finds no wrong claim and your store is named in most discovery answers, repeat the check monthly and after any change to a price, a policy or your product data.',
    },

    { kind: 'h2', id: 'for-agencies', text: 'For agencies: what to put in an AI visibility report' },
    {
      kind: 'p',
      text: 'In a vendor survey of 494 agency professionals run by AgencyAnalytics between February and April 2026, [66% reported increased demand for AEO and SEO for AI driven search](' +
        AGENCY_ANALYTICS +
        '), the top new service clients requested in 2026. Clients will ask what changed, and January is when they decide which agencies to keep. A report that answers that question includes:',
    },
    {
      kind: 'list',
      items: [
        'The questions, runs, dates and country.',
        'Appearance rate and accuracy for each assistant, with the number of answers behind each figure.',
        'Each wrong claim, with the page it came from, who fixed it and when.',
        'The results of the second run.',
      ],
    },
    {
      kind: 'p',
      text: 'Google’s guide tells site owners to be wary of tools that promise ranking success. Promise clients the fixes and a second run, and report what the next month’s check shows.',
    },
    {
      kind: 'cta',
      text: 'Obsession checks your store free. Its AI agents shop it as new customers, from the ad to the sign up, the welcome code and the basket, and report each problem with proof and the fix.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'questions-asked', text: 'Frequently asked questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What does ChatGPT say about my brand?',
          a: 'Its answers change with the question, the run and the person asking. Ask 10 to 20 of your customers’ questions 3 times each on ChatGPT, Perplexity and Google, log the date and country, and count how often your store is named and how many claims match your own pages.',
        },
        {
          q: 'How do I get my Shopify store recommended by ChatGPT?',
          a: 'No one can promise a recommendation. Shopify sends your product data to AI channels through Shopify Catalog, so keep it accurate, and choose those channels under Sales channels, then Agentic. Put policy and delivery pages in plain text, allow OAI-SearchBot in robots.txt, earn real mentions on pages your customers read, and check the effect with the same questions each month.',
        },
        {
          q: 'Why does ChatGPT give a different answer each time?',
          a: 'Answers vary from run to run, and with the person asking and their location. SparkToro and Gumshoe.ai found ChatGPT and Google’s AI returned the same list of brands fewer than 1 time in 100, so count a rate over repeated runs instead of reading 1 answer.',
        },
        {
          q: 'How many times should I run each question?',
          a: '3 runs is a practical minimum for a check by hand. Tight rates need far more: one preprint needed 30 to 150 or more distinct questions per topic on each assistant for an interval 5 points wide. Use 3 runs to see direction and wrong claims that repeat, and run your top 5 questions more often.',
        },
        {
          q: 'Are AI shopping assistants wrong 86% of the time?',
          a: 'No. In Product.ai’s study, reported by Business Insider on 25 September 2026, 86% of 220 questions produced a repeatable factual conflict, meaning answers disagreed on something checkable. Of 913 verifiable price answers, 85% matched the current or listed price.',
        },
        {
          q: 'Do I need an AI visibility tool?',
          a: 'Not while your own check still shows wrong claims you haven’t fixed. Ahrefs Brand Radar, Otterly.AI, Peec AI and Profound track your questions over time, and a log filled in by hand covers the first check with no software.',
        },
        {
          q: 'Can I see AI Overviews and AI Mode in Search Console?',
          a: 'Yes. Google says AI features are reported in the Performance report under the Web search type, and that a Generative AI performance report shows how your content performs in them. Neither report shows what an answer said about your store.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Business Insider’s story on Product.ai is cited through DNYUZ’s republication, because Business Insider wasn’t reachable. Tool prices are as listed on 23 October 2026. The r/shopify quote was checked at its source by hand on 23 October 2026. We haven’t run this check on any named store, so no store’s results appear here. We left out Shopify’s shopper agent launch of 13 October 2026, which we could confirm only on shop.md and 1 secondary report.',
    },
  ],

  sources: [
    { title: 'AI recommendations change with nearly every query: SparkToro', publisher: 'Search Engine Journal', url: SPARKTORO, date: '2026-01-30' },
    { title: 'LLM tracking tools face accuracy crisis from personalization features', publisher: 'PPC Land', url: LILY_RAY, date: '2025-11-09' },
    { title: 'AI can’t take over your holiday shopping quite yet, a new study suggests (Product.ai study)', publisher: 'Business Insider, republished by DNYUZ', url: PRODUCT_AI, date: '2026-09-25' },
    { title: 'Adobe forecasts U.S. holiday shopping season to hit a record $275.1 billion online', publisher: 'Adobe', url: ADOBE, date: '2026-09-28' },
    { title: 'Quantifying Uncertainty in AI Visibility: A Statistical Framework for Generative Search Measurement', publisher: 'Ronald Sielinski, arXiv 2603.08924 (v3)', url: SIELINSKI, date: '2026-03-09' },
    { title: 'Optimizing your website for generative AI features on Google Search', publisher: 'Google Search Central', url: GOOGLE_GUIDE, date: '2026-07-10' },
    { title: 'AI features and your website', publisher: 'Google Search Central', url: GOOGLE_FEATURES, date: '2025-12-10' },
    { title: 'Agentic storefronts', publisher: 'Shopify Help Center', url: SHOPIFY_HELP },
    { title: 'Agentic commerce', publisher: 'Shopify developer docs', url: SHOPIFY_DEV },
    { title: 'Overview of OpenAI crawlers', publisher: 'OpenAI developers', url: OPENAI_BOTS },
    { title: 'Perplexity crawlers', publisher: 'Perplexity docs', url: PERPLEXITY_BOTS },
    { title: '2026 Marketing Agency Benchmarks Report', publisher: 'AgencyAnalytics', url: AGENCY_ANALYTICS, date: '2026' },
    { title: 'Brand Radar', publisher: 'Ahrefs', url: AHREFS },
    { title: 'Pricing', publisher: 'Otterly.AI', url: OTTERLY },
    { title: 'Pricing', publisher: 'Peec AI', url: PEEC },
    { title: 'Welcome to Peec AI (docs)', publisher: 'Peec AI', url: PEEC_DOCS },
    { title: 'Pricing', publisher: 'Profound', url: PROFOUND },
    { title: 'Anyone know why ChatGPT would quote us a price we have not charged since we first opened', publisher: 'r/shopify', url: R_PRICE, date: '2026-08-26' },
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
