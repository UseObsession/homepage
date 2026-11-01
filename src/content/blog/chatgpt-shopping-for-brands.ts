import type { BlogPost } from './types'
import { AI_CUSTOMER } from '../glossary'

/* Guide 4 in _research/seo/plan/week-2nov/SLATE.md (Seun's go, 1 Nov 2026: "Start them"), written to WRITER_BRIEF.md in
   the same folder. It owns "chatgpt shopping" and its neighbours (Google autocomplete, US and UK, 31 Oct 2026:
   autocomplete_slate_31oct.json beside the plan): chatgpt shopping research, agent, assistant, feed, ads and mode, and
   how to get your product recommended by chatgpt. "What does chatgpt say about my brand" stays with
   what-chatgpt-says-about-your-store (linked, its scoring method not repeated), agentic commerce with
   agentic-commerce-for-merchants and agent ready website with its guide, each linked with its phrase as the anchor.
   Readers: ecommerce founders, heads of ecommerce, SEO leads and the agencies advising them.
   Read at source on 1 Nov 2026, in the built-in browser where a direct fetch returned 403: OpenAI's shopping help page
   (updated 30 Oct 2026; it no longer mentions Instant Checkout, which it did on 24 Oct), the merchant page at
   chatgpt.com/merchants ("moving away from a standalone Instant Checkout experience"), the ChatGPT release notes
   (Instant Checkout 29 Sep 2025, shopping research 24 Nov 2025, ads from 9 Feb 2026, shopping updates 24 Mar 2026,
   try-on 1 Oct 2026), OpenAI's product discovery post of 24 Mar 2026, the shopping research launch post, the ads and
   Ads Manager availability pages, the cloud browser page, the product feed guides, the crawler page, Shopify's Selling
   on ChatGPT and Catalog pages, the Agentic Commerce Protocol (ACP) site, Profound's shopping and pricing pages and
   Peec AI's pricing page. Help page dates are each page's own updatedAt.
   The shopping research help article (12911370) redirects to the general shopping page on 1 Nov 2026 and the release
   notes record no end date, so the guide reports the redirect and no more.
   Reused and rechecked the same day: SparkToro and Gumshoe.ai via Search Engine Journal, Product.ai via DNYUZ's
   republication of Business Insider, and Adobe's forecast of 28 Sep 2026.
   Left out on purpose: Walmart's Instant Checkout conversion figure (second hand, and Wired can't be reached), the
   allowlisting link in the shopping research post (it points to a retired help page), any PilotX figure, the 93%.
   Thistlebrook, Oatfell and Brackenby are invented stores. No dashes. */

const ADOBE = 'https://news.adobe.com/news/2026/09/adobe-us-holiday-shopping-season-to-hit-record'
const MERCHANTS = 'https://chatgpt.com/merchants/'
const SHOPPING_HELP = 'https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search'
const RELEASE = 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes'
const RESEARCH_POST = 'https://openai.com/index/chatgpt-shopping-research/'
const RESEARCH_HELP = 'https://help.openai.com/en/articles/12911370-using-shopping-research-in-chatgpt'
const DISCOVERY_POST = 'https://openai.com/index/powering-product-discovery-in-chatgpt/'
const SHOPIFY_CHATGPT = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/chatgpt'
const ADS = 'https://help.openai.com/en/articles/20001047-ads-in-chatgpt'
const ADS_AVAIL = 'https://help.openai.com/en/articles/20001245-ads-manager-availability'
const ACP = 'https://www.agenticcommerce.dev/'
const FEED_START = 'https://developers.openai.com/commerce/guides/get-started'
const SHOPIFY_CATALOG = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/products'
const FEED_BEST = 'https://developers.openai.com/commerce/guides/best-practices'
const OPENAI_BOTS = 'https://developers.openai.com/api/docs/bots'
const SPARKTORO = 'https://www.searchenginejournal.com/ai-recommendations-change-with-nearly-every-query-sparktoro/566242'
const PRODUCT_AI = 'https://dnyuz.com/2026/09/25/ai-cant-take-over-your-holiday-shopping-quite-yet-a-new-study-suggests/'
const PROFOUND_SHOPPING = 'https://www.tryprofound.com/features/shopping'
const PEEC = 'https://peec.ai/pricing'
const PROFOUND_PRICING = 'https://www.tryprofound.com/pricing'
const CLOUD = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'

export const post: BlogPost = {
  slug: 'chatgpt-shopping-for-brands',
  title: 'ChatGPT shopping: how it picks products, and how brands check what it says about theirs',
  dek: 'ChatGPT now answers “what should I buy” with products, prices and reasons, and links each one to the stores that sell it. It picks from product data, web pages and reviews, and a brand can keep most of that data right. A weekly check shows what it tells shoppers about your products.',
  metaTitle: 'ChatGPT shopping for brands: how it picks products to show',
  description:
    'ChatGPT shopping for brands: how ChatGPT picks products from feeds, pages and reviews, and how to check what it tells shoppers about your products.',
  answer:
    'ChatGPT shopping is ChatGPT answering “what should I buy” with products, prices and reasons, which it picks using product data, pages on the web and what the shopper asked. Answers change from one run to the next, so a brand checks what ChatGPT says about its products repeatedly, logged out and against its live store. To track what ChatGPT tells shoppers about your products, use Obsession: its AI customers ask the same shopping questions every week and keep each answer, dated, with the page it cites.',
  primaryKeyword: 'chatgpt shopping',
  keywords: [
    'chatgpt shopping research',
    'chatgpt shopping agent',
    'chatgpt shopping assistant',
    'chatgpt shopping feed',
    'chatgpt shopping ads',
    'chatgpt shopping mode',
    'how to get your product recommended by chatgpt',
  ],
  category: 'Check your AI agents',
  published: '2026-11-01',
  updated: '2026-11-01',
  readingMinutes: 13,
  order: 1,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'chat',
      title: 'thistlebrook.example · what ChatGPT said',
      turns: [
        { from: 'customer', text: 'Best linen duvet cover under £150 for someone who sleeps hot?' },
        { from: 'bot', name: 'ChatGPT', text: 'Thistlebrook, £129. Reviewers say it stays cool.' },
        { from: 'bot', name: 'ChatGPT', text: 'Oatfell, £118. The lowest price of the three.' },
        { from: 'bot', name: 'ChatGPT', text: 'Brackenby, £146. 100 nights to return it.' },
      ],
      check: {
        tone: 'fail',
        label: 'Against Thistlebrook’s live store',
        text: 'The reviews match. The price is £139 today, so the answer is out of date',
      },
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'ChatGPT shopping is ChatGPT working as a shopping assistant. When a question suggests the person wants to buy, ChatGPT shows products with images, prices and review summaries. Each one links to the stores that sell it.',
    },
    {
      kind: 'p',
      text: 'For an ecommerce brand, those answers decide which products a shopper sees before reaching any store, and much of what ChatGPT reads is the brand’s own product data. [Adobe forecasts](' +
        ADOBE +
        ') that traffic from AI services to US retail sites, counted as shoppers clicking a link, will rise 130% year on year over the 2026 holiday season.',
    },

    { kind: 'h2', id: 'today', text: 'What ChatGPT shopping does today' },
    {
      kind: 'p',
      text: '[OpenAI’s merchant page](' +
        MERCHANTS +
        ') says shopping is live for ChatGPT users in the US and will reach more regions over time. OpenAI’s [shopping help page](' +
        SHOPPING_HELP +
        '), last updated on 30 October 2026, and [ChatGPT’s release notes](' +
        RELEASE +
        ') give each feature and the date it arrived.',
    },
    {
      kind: 'table',
      caption: 'ChatGPT’s shopping features on 1 November 2026, from OpenAI’s help pages, release notes and merchant page',
      cols: ['Feature', 'What a shopper gets', 'Status on 1 Nov 2026'],
      rows: [
        ['Product results', 'Products with images, prices, reviews and links', 'Live for US users'],
        ['Compare and refine', 'Price, reviews and features side by side', 'Added 24 March 2026'],
        ['Search by photo', 'Similar items from an uploaded image', 'Added 24 March 2026'],
        ['Try on and save', 'A try-on image from a selfie, and saved products', 'Added 1 October 2026'],
        ['Shopping research', 'A buyer’s guide after clarifying questions', 'Its help article redirects'],
        ['Instant Checkout', 'Payment inside the chat', 'OpenAI is moving away from it'],
        ['Ads', 'One labelled ad unit under an answer', 'Free and Go plans, in some countries'],
        ['[Cloud browser](' + CLOUD + ')', 'Steps on websites, with a check before paying', 'Paid plans other than Go'],
      ],
    },
    { kind: 'h3', id: 'shopping-research', text: 'ChatGPT shopping research' },
    {
      kind: 'p',
      text: 'OpenAI launched [shopping research](' +
        RESEARCH_POST +
        ') on 24 November 2025. ChatGPT asked a few clarifying questions, read retail sites and returned a buyer’s guide after a few minutes, with links to buy. OpenAI said the results were organic and based on publicly available retail sites, read from the product pages themselves.',
    },
    {
      kind: 'p',
      text: 'On 1 November 2026, OpenAI’s help article [Using shopping research in ChatGPT](' +
        RESEARCH_HELP +
        ') redirects to its general shopping page, which doesn’t mention the feature. The release notes record its launch and no end date. Comparing products side by side and refining a list in conversation, which OpenAI began rolling out on 24 March 2026, now happen in an ordinary chat.',
    },
    { kind: 'h3', id: 'instant-checkout', text: 'Instant Checkout, and where shoppers pay' },
    {
      kind: 'p',
      text: 'Instant Checkout let US shoppers pay inside ChatGPT, first at US Etsy sellers from 29 September 2025, then at Shopify merchants from 20 November 2025. On 24 March 2026, OpenAI wrote that [the initial version of Instant Checkout](' +
        DISCOVERY_POST +
        ') “did not offer the level of flexibility that we aspire to provide”. It let merchants use their own checkout instead. Its merchant page now says OpenAI is “moving away from a standalone Instant Checkout experience”, and that purchases are completed on merchant-owned websites or apps.',
    },
    {
      kind: 'p',
      text: 'On Shopify, [ChatGPT is a discovery channel](' +
        SHOPIFY_CHATGPT +
        '). Shoppers finish on the store’s own checkout, in ChatGPT’s in-app browser or a new tab, with the store’s branding and payment methods. Shopify says selling on ChatGPT carries no fee beyond standard payment processing. Larger merchants can build a ChatGPT app for more control. For the AI channels with their own checkout, such as Google AI Mode and Gemini, Microsoft Copilot and Meta, see [agentic commerce](/blog/agentic-commerce-for-merchants).',
    },
    { kind: 'h3', id: 'ads', text: 'ChatGPT shopping ads' },
    {
      kind: 'p',
      text: '[OpenAI began testing ads](' +
        RELEASE +
        ') in ChatGPT in the US on 9 February 2026, then added Australia, New Zealand and Canada on 16 April and the UK on 4 June. Its [ads help page](' +
        ADS +
        ') says ads may appear for users on the Free and Go plans, as one labelled ad unit under a response. Plus, Pro, Business, Enterprise and Edu accounts have no ads.',
    },
    {
      kind: 'p',
      text: 'OpenAI ranks ads by relevance and advertiser bids, on systems separate from the chat model, and says advertisers can’t shape or rank ChatGPT’s answers. Its shopping page says product results are “not ads, nor influenced by any OpenAI partnerships”. A brand based in the US, the UK or [many other countries](' +
        ADS_AVAIL +
        ') can buy an ad through OpenAI’s Ads Manager, and the ad sits apart from the products ChatGPT picks.',
    },

    { kind: 'h2', id: 'how-it-picks', text: 'How ChatGPT picks products' },
    {
      kind: 'p',
      text: 'OpenAI says a product appears in ChatGPT’s carousel, the row of product results, “when ChatGPT perceives it to be relevant to your intent”. Its shopping help page says ChatGPT considers:',
    },
    {
      kind: 'list',
      items: [
        '**The shopper’s question and context,** including Memory and Custom instructions: what ChatGPT remembers about the person, and the standing instructions they’ve set.',
        '**Product data** from merchants and other providers, such as price and description, and other content on the web.',
        '**What the model already knows,** from the answer it writes before it reads new search results.',
        '**OpenAI’s safety standards and product policies.**',
      ],
    },
    {
      kind: 'p',
      text: 'In OpenAI’s own example, a question about dog costumes, ChatGPT may weigh the options available, price, reviews and ease of use. It ranks the merchants that sell a product on availability, price, quality and whether the merchant makes the item or is its main seller.',
    },
    {
      kind: 'p',
      text: 'ChatGPT also writes some of what the shopper reads. It may simplify product titles and descriptions, add labels such as “Budget-friendly” or “Most popular”, and summarise reviews from public websites, which OpenAI doesn’t verify. Prices come from third-party providers, and the price in the first answer is usually the first merchant’s. OpenAI says a merchant’s price or shipping change can take time to reach ChatGPT.',
    },
    {
      kind: 'table',
      caption: 'What ChatGPT uses to pick products and merchants, from OpenAI’s and Shopify’s own pages, and what a brand can change',
      cols: ['What ChatGPT uses', 'Where it comes from', 'What a brand can change'],
      rows: [
        ['Product data', 'Shopify Catalog, merchant feeds and other providers', 'Titles, descriptions, variants, price and stock'],
        ['Pages on the web', 'What OpenAI’s search crawler can read', 'Its own pages, and the crawler’s access'],
        ['Reviews', 'Public websites, summarised by ChatGPT', 'The reviews it earns'],
        ['Labels and short titles', 'Written by ChatGPT', 'The product data behind them'],
        ['Merchant order', 'Availability, price, quality, maker or main seller', 'Stock, price and selling direct'],
        ['The shopper’s context', 'The question, Memory and Custom instructions', 'Nothing'],
        ['Ads', 'A separate system, under the answer', 'An ad, kept apart from the products'],
      ],
    },

    { kind: 'h2', id: 'get-recommended', text: 'How to get your product recommended by ChatGPT' },
    {
      kind: 'p',
      text: 'No one can promise a recommendation, and product results can’t be bought. OpenAI’s and Shopify’s own pages describe what a brand can do.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Get the catalogue in.** OpenAI’s merchant page says stores on Shopify or Etsy are already integrated, with no setup or application. On Shopify that runs through Shopify Catalog, Shopify’s feed of its merchants’ products to AI channels. Other merchants apply on the same page to share a product feed: a file of every product with its price and stock, sometimes called a ChatGPT shopping feed.',
        '**Know how a feed reaches ChatGPT.** Feeds arrive through the [Agentic Commerce Protocol](' +
          ACP +
          ') (ACP), an open standard Stripe and OpenAI developed for selling between shoppers, AI agents and businesses. OpenAI [opens feed access to approved partners](' +
          FEED_START +
          ') while it builds a self-service merchant portal.',
        '**On Shopify, check the store is eligible.** Shopify’s ChatGPT page asks for a store that sells to US customers, wherever it is based, with products eligible for Shopify Catalog. Its terms of service, privacy policy and return and refund policy must be completed under Settings, then Policies, and the store must accept Shopify’s Supplemental Terms of Service. In the admin, the Agentic page under Sales channels shows how many products are in Shopify Catalog. A store that isn’t eligible sees an Ineligible warning with the reason, as [Shopify’s Catalog page](' +
          SHOPIFY_CATALOG +
          ') explains.',
        '**Make every product’s data complete.** Shopify Catalog sends each product’s title, description, options, images, price and availability. OpenAI’s [feed guidance](' +
          FEED_BEST +
          ') asks for concise, factual descriptions, with a price, availability and images for each size or colour where they differ. Where titles or descriptions sit in custom fields, Shopify’s Channel mapping page points the Catalog at the right ones.',
        '**Keep price and stock current.** Shopify Catalog updates continuously, and OpenAI recommends uploading a direct feed as a full snapshot at least once a day. In Shopify, choose whether the Catalog sends the price or the compare-at price as the list price, because AI channels can use the list price to advertise strikethrough pricing for products on sale.',
        '**Let OpenAI’s search crawler read your pages.** OpenAI says sites that block [OAI-SearchBot](' +
          OPENAI_BOTS +
          '), the crawler that reads pages for ChatGPT search, won’t be shown in ChatGPT search answers. A change to robots.txt, the file that tells crawlers what they may read, takes about 24 hours to apply. On Shopify, blocking crawlers affects the open web, and Shopify Catalog still sends your products.',
        '**Put policies and disclosures in plain text.** Keep returns, delivery and any legal disclosures on your own pages in plain words. Shopify asks for legal disclosures within the first 6,000 characters of a product description.',
        '**Name the seller shoppers should see.** ChatGPT weighs whether a merchant makes an item or is its main seller. OpenAI’s feed guidance asks merchants to set the seller name shoppers see in each listing.',
        '**Earn reviews on public websites.** ChatGPT builds its review summaries from public websites.',
        '**Know what never shows.** OpenAI keeps out products such as alcohol, nicotine, gambling, weapons and prescription-only medicines. Shopify leaves products sold only to business or wholesale customers out of AI channels when it can identify them.',
      ],
    },
    {
      kind: 'p',
      text: 'Shopify’s advice for AI channels comes down to complete, well-structured product information and SEO best practice. OpenAI’s merchant page says richer data helps products surface with more accurate information when shoppers compare options.',
    },

    { kind: 'h2', id: 'check', text: 'How to check what ChatGPT says about your products' },
    {
      kind: 'p',
      text: 'A brand finds out what ChatGPT tells shoppers by asking what they ask, the same way each time, and checking every answer against its live store.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Write 10 to 20 questions in shoppers’ words.** Include questions that don’t name your brand, such as “best linen duvet cover under £150 for hot sleepers”. Add comparisons with a competitor, and questions on price, sizes, stock, delivery and returns.',
        '**Ask logged out, or in a temporary chat.** OpenAI says product results take account of Memory and Custom instructions, so a team member’s own history can change the answer. Log any ad under the answer apart from the products.',
        '**Ask each question at least 3 times, in new chats.** SparkToro and Gumshoe.ai, which sells AI tracking tools, asked 12 brand recommendation questions 60 to 100 times each on ChatGPT and on Google’s AI. The same list of brands came back less than 1% of the time, [Search Engine Journal reported](' +
          SPARKTORO +
          ') on 30 January 2026.',
        '**Log every answer.** Record the date, the question and the run. Note whether your product was named and where it sat, then the price and claims shown, the merchant listed first and the pages it cites.',
        '**Score it against your live store.** Check each price, size, stock level, delivery promise and returns claim against that day’s product and policy pages. Count how often your product is named across the runs, and how many of its claims are right.',
        '**Ask again every week,** and within a day of a price change, a launch or a sale.',
      ],
    },
    {
      kind: 'art',
      art: {
        kind: 'runs',
        title: 'thistlebrook.example · 3 new chats',
        prompt: 'Best linen duvet cover under £150 for someone who sleeps hot?',
        runs: [
          { label: 'Run 1 · logged out', answer: 'Thistlebrook first, at £129, sold by Thistlebrook.', verdict: { tone: 'fail', text: 'Old price' } },
          { label: 'Run 2 · logged out', answer: 'Oatfell and Brackenby. Thistlebrook isn’t named.', verdict: { tone: 'fail', text: 'Not named' } },
          { label: 'Run 3 · logged out', answer: 'Thistlebrook at £139, sold by a marketplace.', verdict: { tone: 'info', text: 'Right price, other seller' } },
        ],
        foot: 'Named twice, at the live price once. Fix the old price at its source, then ask again until every run is right.',
      },
      caption: 'The same shopping question asked in 3 new chats, logged out. One answer alone would show Thistlebrook first, or missing. Across 3 runs, the brand sees how often it is named and which price to fix. Thistlebrook, Oatfell and Brackenby are invented stores.',
    },
    {
      kind: 'p',
      text: 'How often a store is named, and how many of the claims are right, hold steadier than any single answer. The guide to [what ChatGPT says about your store](/blog/what-chatgpt-says-about-your-store) sets out both scores and the full method.',
    },

    { kind: 'h2', id: 'wrong', text: 'When ChatGPT gets your product wrong' },
    {
      kind: 'p',
      text: 'OpenAI’s shopping page says a merchant’s price or shipping change can take time to reach ChatGPT, and it asks shoppers to report errors. In a study of ChatGPT, Claude, Gemini and Perplexity by Product.ai, which Business Insider reported and [DNYUZ republished](' +
        PRODUCT_AI +
        ') on 25 September 2026, 85% of the 913 price answers it could verify matched the current or listed price. The wrong ones were off by a median of $300.',
    },
    {
      kind: 'table',
      caption: 'Where the fix usually starts when ChatGPT shows a product wrongly, from OpenAI’s and Shopify’s own pages',
      cols: ['What ChatGPT shows', 'Where the fix usually starts'],
      rows: [
        ['An old price', 'The price in Shopify or your feed, then the page it cites'],
        ['In stock when it isn’t', 'Inventory in Shopify or your feed'],
        ['The wrong size or colour', 'Variant data, and Shopify’s Channel mapping'],
        ['A sale price you never set', 'The list price setting in Shopify Catalog'],
        ['A wrong returns or delivery claim', 'Your policy pages, in plain text'],
        ['Another seller listed first', 'Stock, price and your seller name'],
        ['Your product missing', 'Shopify Catalog eligibility, crawler access, banned categories'],
      ],
    },
    {
      kind: 'p',
      text: 'Fix the source first. A price corrected in Shopify or your feed reaches ChatGPT through Shopify Catalog or your next upload. A page that isn’t yours needs its owner to change it.',
    },
    {
      kind: 'p',
      text: 'Then report the answer to OpenAI from the menu on the product, which its shopping page offers for incorrect information. Ask the same questions again after each fix, and close the problem when every run is right. For what a shopper’s own AI agent meets once it reaches your store, from checkout to the returns page, see the 10 checks for an [agent ready website](/blog/agent-ready-website).',
    },

    { kind: 'h2', id: 'ai-customers', text: 'How AI customers check ChatGPT every week' },
    {
      kind: 'p',
      text: 'A check by hand covers 1 person, 1 country and 1 afternoon, and the log holds only the weeks someone remembers to run it.',
    },
    {
      kind: 'p',
      text: '**' +
        AI_CUSTOMER.definition +
        '** [What AI customers are](/blog/ai-customers) explains the term in full. Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof.',
    },
    {
      kind: 'p',
      text: 'For ChatGPT shopping, Obsession’s AI customers ask ChatGPT and the other assistants your shoppers use the same questions every Monday, each the official way and from a clean history. They keep each answer with its date and the page it cites, trace a wrong price to that page and ask again until the answer changes. The same AI customers sign up to your store, use the welcome code and leave a basket, so the price and offer a shopper meets after the answer are checked too.',
    },
    {
      kind: 'p',
      text: 'The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026. Every AI customer says it’s an AI when it talks to a person and never gets round a CAPTCHA or a bot block, as the [agents page](/agents) sets out. The wider case for a brand is in [AI agents for ecommerce](/blog/ai-customers-for-ecommerce-brands).',
    },
    {
      kind: 'cta',
      text: 'Obsession’s Listings and AI answers asks ChatGPT and the other assistants your shoppers use the same questions every Monday. It traces each wrong answer to the page it cites and asks again until the answer changes.',
      to: '/recipes/listings-ai-answers',
      label: 'See Listings and AI answers',
    },

    { kind: 'h2', id: 'compared', text: 'Ways to check what ChatGPT tells shoppers, compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 1 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways a brand can check what ChatGPT tells shoppers about its products, from each provider’s own pages on 1 November 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing: Shopify Catalog or your feed', 'Product data reaches ChatGPT with no extra work', 'Free', 'No record of what shoppers are told', 'Months with no price change or launch'],
        ['By hand: a logged-out chat and a sheet', 'Your own judgement on every answer', 'Free, plus staff hours', 'Hours grow with every question and run', 'A first look at 10 to 20 questions'],
        [
          'AI visibility trackers: [Profound](' + PROFOUND_SHOPPING + '), [Peec AI](' + PEEC + ')',
          'Profound: product visibility in ChatGPT Shopping answers\nPeec AI: product visibility, position and win rate, product by product',
          'Profound: [Enterprise](' + PROFOUND_PRICING + '), custom price\nPeec AI: $95 to $495 a month',
          'Profound: ChatGPT Shopping on Enterprise plans\nPeec AI: 3 assistants on each priced plan',
          'A daily count across many prompts and products',
        ],
        [
          'Obsession (ours): [Listings and AI answers](/recipes/listings-ai-answers), [store leak checks](/use-cases/leak-checks-for-ecommerce-stores)',
          'AI customers ask ChatGPT every week, keep each answer, then shop your store',
          'Running now: Check my store free\nCredit-based plans, like Claude’s',
          'OpenAI decides what ChatGPT shows',
          'What shoppers are told, and what your store then gives them',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If your brand needs to know what ChatGPT tells shoppers about your products every week, and whether your store then gives them the same price and offer, use Obsession. Profound and Peec AI suit a daily count of how often products appear across hundreds of questions, which they call prompts. A check by hand suits a first look at 10 to 20 questions.',
    },

    { kind: 'h2', id: 'start', text: 'Start this week' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'In your Shopify admin, open Sales channels, then Agentic. Note the number of products in Shopify Catalog, or the reason it says Ineligible.',
        'Write 10 to 20 shoppers’ questions and ask each one 3 times, logged out, in new chats.',
        'Mark every price, stock level and policy claim against your live store, and fix the source of each wrong one.',
        'Choose how often to ask again: every week, after every price change, or before a sale.',
      ],
    },
    {
      kind: 'cta',
      text: 'OpenAI says ChatGPT purchases are completed on merchants’ own websites or apps, so start with what shoppers meet on yours. Check your store free: 4 AI customers sign up, browse, leave a basket and stop at checkout, and every inbox is watched for 48 hours. What happened arrives within 4 days, with proof and the fix for each leak.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check my store free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about ChatGPT shopping' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is ChatGPT shopping research gone?',
          a: 'OpenAI launched shopping research on 24 November 2025. On 1 November 2026 its help article on the feature redirects to OpenAI’s general shopping page, which doesn’t mention it, and ChatGPT’s release notes record no end date. Side-by-side comparisons and results refined in conversation have been part of ordinary ChatGPT shopping since 24 March 2026.',
        },
        {
          q: 'Are ChatGPT shopping results ads?',
          a: 'No. OpenAI says product results are selected independently and aren’t influenced by its partnerships. Ads are separate. On the Free and Go plans, in the countries where OpenAI shows them, one labelled ad unit can appear under an answer. OpenAI says advertisers can’t shape ChatGPT’s answers.',
        },
        {
          q: 'Can shoppers buy inside ChatGPT?',
          a: 'OpenAI says it is moving away from a standalone Instant Checkout, and that purchases are completed on merchants’ own websites or apps. Shoppers at Shopify stores pay on the store’s own checkout, opened in ChatGPT’s in-app browser or a new tab. Some larger merchants run their own ChatGPT app.',
        },
        {
          q: 'How do I get my products into ChatGPT shopping?',
          a: 'If your store runs on Shopify or Etsy, its catalogue is already integrated. On Shopify, check Sales channels, then Agentic, for the number of products in Shopify Catalog. Other merchants apply on OpenAI’s merchant page to share a product feed, which OpenAI opens to approved partners.',
        },
        {
          q: 'Does ChatGPT have a shopping agent?',
          a: 'The nearest is the cloud browser in ChatGPT Work, on paid plans other than Go. It can compare product availability and local stock on websites, and it asks for confirmation before a payment. OpenAI says it can’t finish every transaction.',
          link: { label: 'The 10 checks for an agent ready website', to: '/blog/agent-ready-website' },
        },
        {
          q: 'Is there a ChatGPT shopping mode?',
          a: 'OpenAI’s pages describe no separate mode. ChatGPT shows product results when a question suggests the person wants to buy, and otherwise answers in text. Profound, a tool that tracks how brands appear in AI answers, measures how often the questions in a category bring up those product results.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the sources',
      text: 'OpenAI changes ChatGPT’s shopping features often. Each one here is as OpenAI’s and Shopify’s own pages described it on 1 November 2026. Thistlebrook, Oatfell and Brackenby are invented stores.',
    },
  ],

  sources: [
    { title: 'Adobe: U.S. Holiday Shopping Season to Hit Record $275.1 Billion Online, Rising 6.7% YoY', publisher: 'Adobe', url: ADOBE, date: '2026-09-28' },
    { title: 'Power product discovery in ChatGPT', publisher: 'OpenAI', url: MERCHANTS },
    { title: 'Shopping with ChatGPT Search', publisher: 'OpenAI Help Center', url: SHOPPING_HELP, date: '2026-10-30' },
    { title: 'ChatGPT release notes', publisher: 'OpenAI Help Center', url: RELEASE, date: '2026-10-30' },
    { title: 'Introducing shopping research in ChatGPT', publisher: 'OpenAI', url: RESEARCH_POST, date: '2025-11-24' },
    { title: 'Using shopping research in ChatGPT', publisher: 'OpenAI Help Center', url: RESEARCH_HELP },
    { title: 'Powering Product Discovery in ChatGPT', publisher: 'OpenAI', url: DISCOVERY_POST, date: '2026-03-24' },
    { title: 'Selling on ChatGPT', publisher: 'Shopify Help Center', url: SHOPIFY_CHATGPT },
    { title: 'Ads in ChatGPT', publisher: 'OpenAI Help Center', url: ADS, date: '2026-10-28' },
    { title: 'Ads Manager Availability', publisher: 'OpenAI Help Center', url: ADS_AVAIL, date: '2026-10-27' },
    { title: 'Agentic Commerce Protocol', publisher: 'OpenAI and Stripe', url: ACP },
    { title: 'Agentic Commerce: Get Started', publisher: 'OpenAI Developers', url: FEED_START },
    { title: 'Shopify Catalog and product discovery for agentic storefronts', publisher: 'Shopify Help Center', url: SHOPIFY_CATALOG },
    { title: 'Agentic Commerce: Best practices', publisher: 'OpenAI Developers', url: FEED_BEST },
    { title: 'Overview of OpenAI Crawlers', publisher: 'OpenAI Developers', url: OPENAI_BOTS },
    { title: 'AI recommendations change with nearly every query: SparkToro', publisher: 'Search Engine Journal', url: SPARKTORO, date: '2026-01-30' },
    {
      title: 'AI can’t take over your holiday shopping quite yet, a new study suggests (Product.ai study)',
      publisher: 'Business Insider, republished by DNYUZ',
      url: PRODUCT_AI,
      date: '2026-09-25',
    },
    { title: 'Shopping', publisher: 'Profound', url: PROFOUND_SHOPPING },
    { title: 'Pricing', publisher: 'Peec AI', url: PEEC },
    { title: 'Pricing', publisher: 'Profound', url: PROFOUND_PRICING },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: CLOUD, date: '2026-10-28' },
  ],

  related: ['recipe:listings-ai-answers', 'what-chatgpt-says-about-your-store', 'agentic-commerce-for-merchants', 'agent-ready-website'],
}
