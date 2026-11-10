import type { BlogPost } from './types'

/* Wave 2, batch 1, spec 1 (_research/seo/revamp-11nov/WAVE2_BRIEF.md and WAVE2_SLATE.md, 11 Nov 2026): Exa vs Tavily
   vs Firecrawl vs Parallel, the web search and extraction APIs for AI agents. Reader: developers and AI engineers
   choosing a web data API for an agent (S2). Primary "exa vs tavily"; also exa vs firecrawl, exa vs parallel, exa vs
   tavily vs firecrawl, firecrawl vs exa, tavily vs exa pricing (autocomplete_11nov_exa.json, US and UK). Page 1 today
   is Exa's and Tavily's own versus pages (serp_11nov.json), each arguing for itself; this one is the fair comparison,
   with a decision rule by job, a worked example (what does Company X offer new subscribers this month?) and the column
   none of the four fills.
   Every provider fact was read on the provider's own pages on 11 Nov 2026: exa.ai, exa.ai/products/search,
   exa.ai/pricing, exa.ai/mcp; tavily.com, tavily.com/pricing, docs.tavily.com (api-credits, the search reference,
   mcp); firecrawl.dev, firecrawl.dev/pricing, docs.firecrawl.dev (scrape, search, interact); parallel.ai,
   parallel.ai/pricing, parallel.ai/mcp, docs.parallel.ai (pricing, search modes, monitor quickstart); and Nebius's
   newsroom (10 Feb 2026) for the Tavily deal. Exa's words held exactly: "The world's data for AI agents" and "the
   largest index of public web and private information" (exa.ai); its search page pairs the public web with
   "proprietary data" (companies, people, places, papers, code, filings, Exa Connect partners), and no Exa page read
   describes signing up to a company, so the post says only that. Per 1,000 prices for Tavily and Firecrawl are worked
   out from their published credit prices and plans, and the note says so. Firecrawl's Interact quote about logins
   contains a dash, so it is paraphrased. Exa's Websets page redirected to its app and wasn't read, so Websets isn't
   described. The MCP command from /developers isn't printed: mcp.useobsession.com had no DNS record on 11 Nov, so the
   post links /developers instead. quillon.example and every offer in the 2 illustrations are invented. */

const EXA_HOME = 'https://exa.ai/'
const EXA_SEARCH = 'https://exa.ai/products/search'
const EXA_PRICING = 'https://exa.ai/pricing'
const EXA_MCP = 'https://exa.ai/mcp'
const TAVILY_HOME = 'https://www.tavily.com/'
const TAVILY_SEARCH = 'https://docs.tavily.com/documentation/api-reference/endpoint/search'
const TAVILY_CREDITS = 'https://docs.tavily.com/documentation/api-credits'
const TAVILY_PRICING = 'https://www.tavily.com/pricing'
const TAVILY_MCP = 'https://docs.tavily.com/documentation/mcp'
const NEBIUS =
  'https://nebius.com/newsroom/nebius-announces-agreement-to-acquire-tavily-to-add-agentic-search-to-its-ai-cloud-platform'
const TAVILY_NEBIUS = 'https://www.tavily.com/blog/tavily-is-joining-nebius'
const FC_HOME = 'https://www.firecrawl.dev/'
const FC_SEARCH = 'https://docs.firecrawl.dev/features/search'
const FC_SCRAPE = 'https://docs.firecrawl.dev/features/scrape'
const FC_INTERACT = 'https://docs.firecrawl.dev/features/interact'
const FC_PRICING = 'https://www.firecrawl.dev/pricing'
const FC_BENCH = 'https://www.firecrawl.dev/benchmarks'
const PAR_HOME = 'https://parallel.ai/'
const PAR_INDEX = 'https://parallel.ai/blog/introducing-index-by-parallel'
const PAR_MODES = 'https://docs.parallel.ai/search/modes'
const PAR_MONITOR = 'https://docs.parallel.ai/monitor-api/monitor-quickstart'
const PAR_DOCS_PRICING = 'https://docs.parallel.ai/getting-started/pricing'
const PAR_PRICING = 'https://parallel.ai/pricing'
const PAR_MCP = 'https://parallel.ai/mcp'

export const post: BlogPost = {
  slug: 'exa-vs-tavily-vs-firecrawl',
  title: 'Exa vs Tavily vs Firecrawl vs Parallel: the web search APIs for AI agents, compared',
  dek: 'Four APIs that give AI agents the public web, compared on index, freshness, speed and price per 1,000 from their own pages on 11 November 2026. Beside them, Obsession covers what a company sends and shows only its signed-up customers.',
  metaTitle: 'Exa vs Tavily vs Firecrawl vs Parallel for agent developers',
  description:
    'Exa vs Tavily vs Firecrawl vs Parallel for AI agents, compared on index, freshness, speed, price per 1,000 and MCP, plus the data behind the login.',
  answer:
    'Exa vs Tavily comes down to the job: Exa searches its own index of 100 billion documents by meaning, and Tavily pairs fast search with page extraction in one credit-priced API. Firecrawl turns any page or site into clean markdown, and Parallel adds deep research and monitors on its own index, all four reading the public web. Obsession gives agents what a company shows only its signed-up customers, such as the welcome email and member price, each dated with its screenshot, by API or MCP (the standard way agents call tools).',
  primaryKeyword: 'exa vs tavily',
  keywords: [
    'exa vs firecrawl',
    'exa vs parallel',
    'exa vs tavily vs firecrawl',
    'firecrawl vs exa',
    'tavily vs exa pricing',
    'exa vs firecrawl vs parallel',
  ],
  category: 'Behind the login',
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 16,
  order: 2,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'quillon.example · new subscriber offers',
      period: 'One question, asked of every source',
      cols: ['Source', 'What comes back', 'After the sign-up'],
      rows: [
        { name: 'Search APIs', cells: ['Home page: 10% off', 'Not reached'], tone: 'info' },
        { name: 'Scraper', cells: ['The pop-up as markdown', 'Not reached'], tone: 'info' },
        { name: 'Obsession', cells: ['Welcome email, 15% code', 'Delivery offer, £24 price'], tone: 'ok' },
      ],
      notes: [
        'Search APIs: Exa, Tavily, Parallel. Scraper: Firecrawl.',
        'The 15% code reached the inbox that signed up.',
        'Example: Quillon and every offer here are invented.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Exa, Tavily, Firecrawl and Parallel each give an AI agent the web in one API call, and each is strongest at a different job. Exa searches its own index by meaning, and Tavily pairs fast search with page extraction. Firecrawl turns any page or whole site into clean markdown, and Parallel adds deep research and scheduled monitors on its own index.',
    },
    {
      kind: 'p',
      text: 'For developers and AI engineers choosing one, six differences decide it. They are where results come from, how fresh they are, how much page text comes back, how fast a call returns, what 1,000 searches cost, and how an agent connects over MCP, the standard way AI agents call tools.',
    },
    {
      kind: 'p',
      text: 'All four share one boundary. They read the public web, the pages any visitor can open, plus the licensed and partner data some of them add. What a company sends and shows a customer after the sign-up, such as the welcome email, the code inside it and the signed-in price, sits past that boundary.',
    },

    { kind: 'h2', id: 'how-compared', text: 'How the four were compared' },
    {
      kind: 'p',
      text: 'Every fact about a provider comes from its own pricing, product and documentation pages as of 11 November 2026. Seven criteria separate them.',
    },
    {
      kind: 'list',
      items: [
        '**Index:** whether the API searches a copy of the web it crawled and stores itself, or passes the query to another search engine. An index is that stored, searchable copy, kept current by a crawler that fetches pages on a schedule.',
        '**Freshness:** how old a page can be when it reaches the agent, and the setting that forces a new fetch.',
        '**Page content:** links and snippets, the passages that answer the query, or the whole page as markdown or JSON.',
        '**Speed:** the time a call takes, as each provider states it. A p50 is the median call; a p95 means 95 calls in 100 finish faster.',
        '**Price per 1,000:** the list price of 1,000 searches of 10 results, worked out from credits where a provider prices in credits.',
        '**Free tier and MCP:** what each gives free every month, and whether an agent such as Claude or Cursor can connect with no code.',
        '**Behind the login:** whether its pages describe reaching what a site shows only after a sign-in, and keeping it over time.',
      ],
    },

    { kind: 'h2', id: 'exa', text: 'Exa: its own index, searched by meaning' },
    {
      kind: 'p',
      text: '[Exa](' +
        EXA_HOME +
        ') calls itself “The world’s data for AI agents” and says it searches “the largest index of public web and private information”. [Its search page](' +
        EXA_SEARCH +
        ') describes Exa’s own index of 100 billion documents, with 3.5 billion pages crawled every day. Exa searches it by meaning as well as by keywords, so it finds pages that never use the query’s exact words.',
    },
    {
      kind: 'p',
      text: 'The same page pairs the public web with “proprietary data”: dedicated data on 70M+ companies, 1B+ people and 211M+ places, plus research papers, code and financial filings. Partner data comes through Exa Connect, from providers such as Crunchbase, ZoomInfo and Similarweb.',
    },
    {
      kind: 'list',
      items: [
        '**Search types:** Lite in about 450 ms, Auto in about 1 second, and Deep in 4 to 15 seconds for multi-step research with structured outputs and citations.',
        '**Page content:** text and highlights come back in the search response at no extra cost. Exa says its highlights and structured outputs cut an agent’s input tokens by 95% on average.',
        '**Freshness:** set contents.maxAgeHours and Exa fetches a new copy of any page whose stored copy is older than that limit.',
        '**Beyond search:** Contents returns full pages, Answer returns an answer, and Agent handles long research runs, list building and enrichment. Monitors run a search on a schedule and post updates to a webhook, a message sent to your server when something new appears.',
        '**Price:** [its pricing page](' +
          EXA_PRICING +
          ') lists Lite at $4, Auto at $7 and Deep at $12 per 1,000 requests with up to 10 results. Contents costs $1 per 1,000 pages and an Agent run $0.012 to $1.00. The free plan gives $10 of credit every month plus a $10 onboarding bonus, with no payment method.',
        '**MCP:** a hosted server at mcp.exa.ai, free and with no API key, as [Exa’s MCP page](' + EXA_MCP + ') says.',
        '**Where it stops:** its pages describe searching the public web, plus dedicated and partner data. They don’t describe signing up to a company or keeping what a company sends its customers.',
      ],
    },

    { kind: 'h2', id: 'tavily', text: 'Tavily: search and extraction built for agents' },
    {
      kind: 'p',
      text: '[Tavily](' +
        TAVILY_HOME +
        ') describes itself as “One secure API for real-time web access”, with search, extract, crawl and research endpoints, and gives its median search time as 180 ms. A search returns ranked results with snippets, and can add each page’s cleaned content as markdown and an answer written by a language model in the same call.',
    },
    {
      kind: 'list',
      items: [
        '**Search depth:** ultra-fast, fast and basic each cost 1 credit, and advanced costs 2 for the highest relevance at more latency, as [its search reference](' +
          TAVILY_SEARCH +
          ') describes. A search returns at most 20 results.',
        '**Freshness:** results filter by publish date, as a time range or start and end dates, and a news topic. The same reference warns that “Continuously updated pages, such as weather forecasts and prices, keep old publish dates and get filtered out”, so a date filter can drop the pricing page an agent needs.',
        '**Extraction and crawling:** Extract costs 1 credit per 5 pages, or 2 at advanced depth, and Crawl adds the cost of mapping a site’s links, per [its credits page](' +
          TAVILY_CREDITS +
          '). A Research request costs 4 to 110 credits on mini and 15 to 250 on pro.',
        '**Price:** [its pricing page](' +
          TAVILY_PRICING +
          ') gives 1,000 free credits a month with no payment card, and $0.008 a credit pay as you go. Monthly plans run from $0.0075 a credit down to $0.005 on the $500 Growth plan.',
        '**MCP:** a remote server with search, extract, crawl, map and research tools, and keyless access to search and extract, per [its MCP docs](' +
          TAVILY_MCP +
          ').',
        '**Ownership:** [Nebius announced an agreement to acquire Tavily](' +
          NEBIUS +
          ') on 10 February 2026, and [Tavily’s own post](' +
          TAVILY_NEBIUS +
          ') says the API, its data policies and zero data retention stay the same.',
        '**Where it stops:** its pages describe the public web. They don’t describe signing in to a site or keeping what a company sends its customers.',
      ],
    },

    { kind: 'h2', id: 'firecrawl', text: 'Firecrawl: any page or whole site as clean markdown' },
    {
      kind: 'p',
      text: '[Firecrawl](' +
        FC_HOME +
        ') calls itself “The infrastructure layer that helps AI find, read, and act on the live web.” Its core job is extraction. Give it a URL and it returns the page as markdown, HTML, JSON in a schema you define, or a screenshot, and its crawl endpoint follows links across a whole site. The code is open source, and the hosted version adds Firecrawl’s own proxy and rendering engine.',
    },
    {
      kind: 'list',
      items: [
        '**Search:** results can come back with each page’s full content. [Its search docs](' +
          FC_SEARCH +
          ') refer to “our upstream search provider”, so its search draws on another provider’s results before Firecrawl scrapes them.',
        '**Freshness:** a scrape is served from cache when a copy under 2 days old exists. Setting maxAge to 0 forces a live fetch, which [its scrape docs](' +
          FC_SCRAPE +
          ') say takes longer and fails more often.',
        '**Speed:** a p95 of 3,387 ms on [its own benchmark](' +
          FC_BENCH +
          ') of 1,000 URLs, run on 13 January 2026.',
        '**Interact and logins:** Interact keeps a browser open across calls, driven by plain-language prompts or code. A login lives in a session cookie, a token the site sets at sign-in and checks on every request. A saved profile of cookies and local storage lets a later session start signed in. [Its Interact docs](' +
          FC_INTERACT +
          ') describe signing in once and then reading the pages that appear only after authentication. Sessions end after 10 minutes by default, or 5 minutes idle, and cost 2 credits a browser minute, or 7 when driven by a prompt.',
        '**Price:** [its pricing page](' +
          FC_PRICING +
          ') gives 1,000 free credits a month with no payment card. A scrape or crawl costs 1 credit a page and a search 2 credits per 10 results. Standard is $99 a month, or $83 billed yearly, for 100,000 credits, which Firecrawl counts as 50,000 searches or 100,000 pages.',
        '**MCP:** an official server for Cursor, Claude, Windsurf and other clients, to search, scrape and interact, per [its home page](' + FC_HOME + ').',
        '**Where it stops:** a session lasts minutes, on an account your team signs in to, and its pages don’t describe receiving the emails or texts a sign-up sets off. For your own accounts, [how to scrape data behind a login](/blog/scrape-data-behind-login) covers sessions, cookies and one-time codes.',
      ],
    },

    { kind: 'h2', id: 'parallel', text: 'Parallel: its own index, deep research and monitors' },
    {
      kind: 'p',
      text: '[Parallel](' +
        PAR_HOME +
        ') builds “Web infrastructure for AI to search, extract, monitor, and reason over the world’s information” and runs “our own web-scale index with billions of pages and millions more added and updated daily”. The index includes licensed content from paywalled publishers, premium newsletters and other sources through [its Index partnerships](' +
        PAR_INDEX +
        '), launched on 19 May 2026, and a live crawl can be forced for time-sensitive queries.',
    },
    {
      kind: 'list',
      items: [
        '**Search modes:** turbo in about 200 ms, fast in about 700 ms, basic in about 1 second, and advanced, the default, in about 3 seconds, per [its modes docs](' +
          PAR_MODES +
          ').',
        '**Beyond search:** Extract reads PDFs, pages built in JavaScript and government sites. Task runs deep research and enrichment in 10 seconds to 2 hours, and FindAll builds verified lists. Monitor watches the web hourly, daily or weekly and posts each change to a webhook, per [its Monitor docs](' +
          PAR_MONITOR +
          ').',
        '**Price:** [its pricing docs](' +
          PAR_DOCS_PRICING +
          ') list Search at $1 per 1,000 requests in turbo or fast mode and $5 in basic or advanced, with 10 results included. Extract is $1 per 1,000 URLs, Task $5 to $2,400 per 1,000 runs and Monitor $3 to $10 per 1,000 checks. [Its pricing page](' +
          PAR_PRICING +
          ') adds $5 free a month with a payment card on file, plus up to $80 at signup.',
        '**MCP:** a hosted server at mcp.parallel.ai, whose search and fetch tools are free at lower rate limits, per [its MCP page](' + PAR_MCP + ').',
        '**Where it stops:** its licensed sources are publishers who license their work. Its pages don’t describe signing up to a company to receive what it sends its customers.',
      ],
    },

    { kind: 'h2', id: 'side-by-side', text: 'Index, freshness and speed' },
    {
      kind: 'table',
      caption: 'From each provider’s own pages as of 11 November 2026. “Not described” means its pages don’t mention it',
      cols: ['API', 'Index', 'Freshness', 'Page content', 'Speed', 'MCP', 'Behind the login'],
      rows: [
        ['Exa', 'Own, 100 billion documents', '3.5 billion pages crawled daily', 'Text and highlights in results', 'Lite: 450 ms\nAuto: 1 s\nDeep: 4 to 15 s', 'Hosted, no key', 'Not described'],
        ['Tavily', 'Real-time search, cached and indexed', 'Publish-date filters', 'Snippets, markdown, Extract', '180 ms median', 'Remote, keyless search', 'Not described'],
        ['Firecrawl', 'Upstream search provider', '2-day cache, or live', 'Markdown, HTML, JSON, screenshots', '3.4 s p95 per scrape', 'Official server', 'Your own login, 10-minute sessions'],
        ['Parallel', 'Own, billions of pages', 'Millions added daily, live crawl', 'Excerpts or full markdown', 'Turbo: 200 ms\nAdvanced: 3 s', 'Hosted, free search', 'Licensed paywalled publishers'],
      ],
    },
    {
      kind: 'p',
      text: 'The freshness settings differ more than the headlines do. Exa refetches any page older than the maxAgeHours you set, Firecrawl serves a cached copy up to 2 days old unless maxAge is 0, and Parallel can force a live crawl. Tavily filters by publish date, which removes pages that change in place, such as prices. For a question about this month’s prices, fetch the page itself or force a refresh, and leave publish-date filters for news.',
    },

    { kind: 'h2', id: 'price', text: 'Price per 1,000 searches' },
    {
      kind: 'table',
      caption: 'List prices for 1,000 searches of 10 results, from each provider’s own pages as of 11 November 2026. Tavily and Firecrawl price in credits, so their figures are worked out from each plan’s price and credits',
      cols: ['API', 'Per 1,000 searches', 'Page text', 'Free every month'],
      rows: [
        ['Exa', 'Lite: $4\nAuto: $7\nDeep: $12', 'Text and highlights included', '$10 credit, plus $10 at onboarding'],
        ['Tavily', 'Basic: $8 pay as you go, $5 on Growth\nAdvanced: $16 pay as you go', 'Extract: $1.60 per 1,000 pages', '1,000 credits'],
        ['Firecrawl', 'About $2 on Standard\nAbout $7.60 on Hobby', 'Scrape: about $1 per 1,000 pages on Standard', '1,000 credits, or 500 searches'],
        ['Parallel', 'Turbo or fast: $1\nBasic or advanced: $5', 'Extract: $1 per 1,000 URLs', '$5 with a payment card, up to $80 at signup'],
      ],
    },
    {
      kind: 'p',
      text: 'Small gaps per 1,000 grow fast at agent volumes. Between $1 and $4 per 1,000 searches, the gap is $300,000 a month at 100 million searches, $30,000 at 10 million and $3,000 at 1 million. Those volumes are examples; put your agent’s own searches per month in their place.',
    },
    {
      kind: 'p',
      text: 'Price per search is half the sum. A provider whose results answer the question in 1 call costs less than a cheaper one that needs 3. A response that carries the page text also saves a second call to an extraction endpoint. Exa’s highlights, Tavily’s raw content, Firecrawl’s scrape options on search and Parallel’s excerpts all exist to save that second call.',
    },

    { kind: 'h2', id: 'benchmarks', text: 'Benchmarks, and how to run your own' },
    {
      kind: 'p',
      text: 'Each provider publishes a benchmark it leads. [Exa’s search page](' +
        EXA_SEARCH +
        ') says it ranks first for quality on the Artificial Analysis Search Index and charts Exa Lite ahead of Parallel, Brave and Perplexity. [Tavily’s home page](' +
        TAVILY_HOME +
        ') puts it first on SimpleQA and SealQA, and [Parallel’s](' +
        PAR_HOME +
        ') charts accuracy against cost on OpenAI’s BrowseComp. Your agent’s own questions are the fair test, and the four free tiers cover one.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Take 50 real queries from your agent’s logs, the hard ones included.',
        'Write the answer you expect for each, with the page that proves it.',
        'Run every query through each free tier, with the same number of results and the same model reading them.',
        'Score each answer right, partly right or wrong, and record the latency and cost of each call.',
        'Run the queries about prices and news again a week later, to see which provider kept up.',
      ],
    },
    {
      kind: 'p',
      text: 'Exa’s first month of free credit, with its onboarding bonus, covers about 5,000 Lite searches, Tavily’s 1,000 basic searches, Firecrawl’s 500 searches and Parallel’s up to 5,000 requests, so 50 queries fit every one.',
    },

    { kind: 'h2', id: 'worked-example', text: 'One question, worked through' },
    {
      kind: 'p',
      text: 'Say an agent is asked what Quillon, an invented online shop at quillon.example, offers new subscribers this month. Each API answers from what it can reach.',
    },
    {
      kind: 'list',
      items: [
        '**Exa, Tavily or Parallel:** Quillon’s home page, which promises 10% off for signing up, and perhaps a coupon site repeating it. The agent reports the promise.',
        '**Firecrawl:** the same promise as clean markdown or a screenshot, or a click through the sign-up form inside an Interact session that ends within minutes.',
        '**What a new subscriber got:** a welcome email with a 15% code 4 minutes after signing up, and a second email 3 days later offering free delivery over £30. After signing in, the price was £24, against £28 on the public page.',
      ],
    },
    {
      kind: 'art',
      caption: 'The same question has two answers: the 10% the public page promises, and the code, delivery offer and price a subscriber received. An example on an invented company.',
      art: {
        kind: 'log',
        title: 'quillon.example · a new subscriber',
        who: 'What arrived after the sign-up, beside what the public page said',
        rows: [
          { time: 'Mon 09:00', text: 'Pop-up promises 10% off', detail: 'Public page: search and scrapers see it', tone: 'info' },
          { time: 'Mon 09:04', text: 'Welcome email, 15% code', detail: 'Arrives in the inbox that signed up', tone: 'ok' },
          { time: 'Thu 09:00', text: 'Free delivery over £30', detail: 'Email 2, on no public page', tone: 'ok' },
          { time: 'Thu 18:00', text: 'Signed-in price: £24', detail: 'The public page still shows £28', tone: 'ok' },
        ],
        foot: 'Example: Quillon and every offer here are invented.',
      },
    },
    {
      kind: 'p',
      text: 'The welcome email went to an inbox, and the second arrived days after any browser session had ended. A search index stores pages and holds no inbox, and a scraper reads what a page shows at the moment it visits. Firecrawl could read the £24 price by signing in to a Quillon account your team holds, but the emails never reach a page. So the honest answer from the four APIs is the 10% the page promises, and the 15% code goes unseen.',
    },

    { kind: 'h2', id: 'behind-the-login', text: 'What a company shows only its customers' },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request.',
    },
    {
      kind: 'p',
      text: 'Exa, Tavily, Firecrawl and Parallel give agents the public web, what any visitor can read. Obsession gives them what a company shows only to its customers, behind the login, dated and kept for as long as anyone follows the company. Search for what a company publishes and look up Obsession for what it sends and shows its customers; an agent can call both in the same answer.',
    },
    {
      kind: 'p',
      text: 'In the Quillon example, a call to facts for quillon.example returns the welcome email with its 15% code, the delivery offer and the £24 signed-in price. Each comes with the time it arrived and the email or screenshot behind it. Obsession signs up the way any customer can and keeps each account open for months. Obsession’s agents have run 1,500 sign-ups, baskets and checkouts at real companies, and counting. [The sample data](/sample-output) shows one real store’s record, and [the web behind the login](/blog/the-web-behind-the-login) explains what sits behind each step.',
    },
    {
      kind: 'p',
      text: '[The API and MCP](/developers) expose it as 5 verbs: lookup, facts, evidence, index and notify. TypeScript and Python SDKs call the same verbs, and a webhook delivers each new fact. It is priced per call or per company watched, never per token, and every key has a spending cap you set.',
    },
    {
      kind: 'cta',
      text: '5 verbs for your agents and your code. Look up any company, get each fact with its email or screenshot, add a company not yet covered, and receive each new fact at your webhook.',
      to: '/developers',
      label: 'See the API and MCP',
    },

    { kind: 'h2', id: 'compared', text: 'Exa, Tavily, Firecrawl and Parallel compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Web data APIs for AI agents. Prices from each provider’s own pages as of 11 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'No search: the model’s training data',
          'No cost and no extra latency',
          'Free',
          'Ends at the model’s training cutoff',
          'Questions whose answers don’t change',
        ],
        [
          'By hand: a browser and a spare inbox',
          'Any page and any sign-up you make yourself',
          'Free, plus your hours',
          'No API, and hours grow with each company',
          'A one-off question about 1 company',
        ],
        [
          'Exa: Search, Contents, Answer, Agent, Monitors',
          'Search by meaning over its own index, plus company and people data',
          'Lite: $4 per 1,000\nAuto: $7\nDeep: $12\nFree: $10 a month',
          'Its pages describe the public web and partner data',
          'Semantic discovery and company research',
        ],
        [
          'Tavily: Search, Extract, Crawl, Map, Research',
          'Fast search plus page text in one API',
          '1 credit a search, 2 advanced\n$0.008 a credit pay as you go\nFree: 1,000 credits',
          'Date filters drop pages that change in place',
          'Grounding calls inside an agent loop',
        ],
        [
          'Firecrawl: Search, Scrape, Crawl, Map, Interact, Monitor',
          'Any URL or site as markdown or JSON, and sessions that click and sign in',
          '1 credit a page, 2 per 10 search results\nStandard: $99 a month\nFree: 1,000 credits',
          'Search from an upstream provider; 10-minute sessions',
          'Extraction, crawling and logins your team owns',
        ],
        [
          'Parallel: Search, Extract, Task, FindAll, Monitor',
          'Own index, search from about 200 ms, research and monitors',
          'Search: $1 to $5 per 1,000\nTask: $5 to $2,400 per 1,000 runs\nFree: $5 a month',
          'Its pages describe the open web and licensed publishers',
          'Deep research, enrichment and monitoring',
        ],
        [
          'Obsession (ours): lookup, facts, evidence, index, notify',
          'What a company shows only its customers: emails, texts, member prices, trial limits and cancel offers, each dated with its screenshot',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Every step short of paying, from the day a company is added',
          'What any company sends and shows its customers, kept for as long as you follow it',
        ],
      ],
    },

    { kind: 'h2', id: 'by-job', text: 'Which API fits which job' },
    {
      kind: 'p',
      text: 'Use Obsession when your agent needs what a company sends and shows only its customers, at any company you name. That covers the welcome series, member and signed-in prices, trial limits and cancel offers, each dated with the email or screenshot behind it and kept for as long as you follow the company. For the public web, pick by job.',
    },
    {
      kind: 'list',
      items: [
        '**What any company sends and shows its customers, dated, by API or MCP:** Obsession.',
        '**Search by meaning across the public web, plus company and people data:** Exa.',
        '**The fastest grounding call in an agent loop:** Parallel’s turbo mode at about 200 ms and $1 per 1,000, or Tavily at a 180 ms median.',
        '**Search and page text in one credit-priced API:** Tavily.',
        '**Clean markdown or JSON from any URL, a whole-site crawl, or a page behind a login your team owns:** Firecrawl.',
        '**Deep research reports, verified lists and scheduled monitors:** Parallel’s Task, FindAll and Monitor, or Exa’s Agent and Monitors.',
        '**A one-off question about 1 company:** a browser and a spare inbox, by hand.',
      ],
    },
    {
      kind: 'p',
      text: '[Exa alternatives](/blog/exa-alternatives) sorts more providers by job, from low-cost search result APIs to extraction tools. [The best web search APIs for AI agents](/blog/best-web-search-api-for-ai-agents) prices the wider field of grounding sources beside these four, and [the comparison page](/compare) sets out every other source, from email archives to panels.',
    },

    { kind: 'h2', id: 'before-you-commit', text: 'Before you commit' },
    {
      kind: 'list',
      items: [
        '**Zero data retention,** where the provider keeps no copy of your queries or results, matters when queries carry customer details. [Exa](' +
          EXA_PRICING +
          ') offers it on Enterprise with a $12,000 yearly commitment, and [Parallel](' +
          PAR_PRICING +
          ') includes hybrid zero data retention on its $1,000 a month Scale plan, by signed agreement. [Firecrawl](' +
          FC_SCRAPE +
          ') offers it on Enterprise for 1 extra credit a page, and [Tavily](' +
          TAVILY_NEBIUS +
          ') calls it core.',
        '**Rate limits:** Parallel allows 600 search requests a minute on Build, and [Firecrawl](' +
          FC_PRICING +
          ') 10 scrapes a minute free and 500 on Standard.',
        '**Plans change often.** Check each pricing page on the day you buy.',
      ],
    },
    {
      kind: 'cta',
      text: 'A real store’s record, in every format it comes in: each email and page dated, and the reminders that never came.',
      to: '/sample-output',
      label: 'See sample data',
    },

    { kind: 'h2', id: 'questions', text: 'Frequently asked questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the difference between Exa and Tavily?',
          a: 'Exa searches its own index of 100 billion documents by meaning and adds dedicated data on companies, people and places. Tavily is a search and extraction API for agents, priced in credits, with a 180 ms median search time. Both read the public web. Exa suits semantic discovery and company research, and Tavily suits fast search plus page text in one call.',
        },
        {
          q: 'Is Exa or Tavily cheaper?',
          a: 'At list price on 11 November 2026, Exa Lite costs $4 per 1,000 searches and Auto $7. Tavily charges 1 credit per basic search, which is $8 per 1,000 pay as you go and $5 on its $500 Growth plan, and 2 credits for advanced search. Exa gives $10 of free credit a month and Tavily 1,000 free credits.',
        },
        {
          q: 'Exa vs Firecrawl: which should I use?',
          a: 'Use Exa to find pages by meaning across its own index. Use Firecrawl to turn known URLs or whole sites into clean markdown or JSON, or to click through a page or a login your team owns. An agent can use both, Exa to find pages and Firecrawl to read them in full.',
        },
        {
          q: 'What is the difference between Exa and Parallel?',
          a: 'Both run their own index. Exa leads with search by meaning, company and people data, and Lite search in about 450 ms for $4 per 1,000. Parallel leads with turbo search in about 200 ms for $1 per 1,000, plus deep research Tasks, FindAll lists and Monitors that post changes to a webhook. Each publishes benchmarks it leads, so test both on your own queries.',
        },
        {
          q: 'Do Exa, Tavily, Firecrawl and Parallel have MCP servers?',
          a: 'Yes. Exa’s hosted server is free with no API key, and Tavily’s remote server offers keyless search and extract. Firecrawl has an official server, and Parallel’s hosted search and fetch tools are free at lower rate limits. MCP is the standard way AI agents such as Claude or Cursor call tools.',
        },
        {
          q: 'Did Nebius buy Tavily?',
          a: 'Nebius announced an agreement to acquire Tavily on 10 February 2026, and said Tavily would keep operating under its own brand. Tavily says its API, its data policies and zero data retention stay the same.',
        },
        {
          q: 'Can any of these APIs see what a company shows only to signed-up customers?',
          a: 'Their pages describe the public web, licensed publishers and partner data, and Firecrawl can sign in to an account your team owns for a session of minutes. None of their pages describes receiving a company’s emails after a sign-up or keeping them dated. Obsession collects what companies show only to customers, such as emails, member prices, trial limits and cancel offers, each dated with a screenshot, by API or MCP.',
          link: { label: 'See the API and MCP', to: '/developers' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the figures',
      text: 'Every provider fact comes from that provider’s own pricing, product and documentation pages as of 11 November 2026, and the Tavily deal from Nebius’s announcement of 10 February 2026. Per 1,000 prices for Tavily and Firecrawl are worked out from their published credit prices and plans. Quillon, quillon.example and every offer in the 2 illustrations are invented.',
    },
  ],

  sources: [
    { title: 'Exa: the world’s data for AI agents', publisher: 'Exa', url: EXA_HOME },
    { title: 'Exa Search API', publisher: 'Exa', url: EXA_SEARCH },
    { title: 'Exa API pricing', publisher: 'Exa', url: EXA_PRICING },
    { title: 'Exa MCP', publisher: 'Exa', url: EXA_MCP },
    { title: 'Tavily: connect your AI agents to the web', publisher: 'Tavily', url: TAVILY_HOME },
    { title: 'Tavily Search API reference', publisher: 'Tavily Docs', url: TAVILY_SEARCH },
    { title: 'API credits', publisher: 'Tavily Docs', url: TAVILY_CREDITS },
    { title: 'Tavily pricing', publisher: 'Tavily', url: TAVILY_PRICING },
    { title: 'Tavily MCP server', publisher: 'Tavily Docs', url: TAVILY_MCP },
    { title: 'Nebius announces agreement to acquire Tavily to add agentic search to its AI cloud platform', publisher: 'Nebius', url: NEBIUS, date: '2026-02-10' },
    { title: 'Tavily is joining Nebius', publisher: 'Tavily', url: TAVILY_NEBIUS },
    { title: 'Firecrawl: web data API for AI agents', publisher: 'Firecrawl', url: FC_HOME },
    { title: 'Search', publisher: 'Firecrawl Docs', url: FC_SEARCH },
    { title: 'Scrape', publisher: 'Firecrawl Docs', url: FC_SCRAPE },
    { title: 'Benchmarks: open retrieval evaluations', publisher: 'Firecrawl', url: FC_BENCH },
    { title: 'Interact', publisher: 'Firecrawl Docs', url: FC_INTERACT },
    { title: 'Pricing', publisher: 'Firecrawl', url: FC_PRICING },
    { title: 'Parallel: web infrastructure for AI agents', publisher: 'Parallel Web Systems', url: PAR_HOME },
    { title: 'Introducing Index by Parallel', publisher: 'Parallel Web Systems', url: PAR_INDEX, date: '2026-05-19' },
    { title: 'Search modes', publisher: 'Parallel Docs', url: PAR_MODES },
    { title: 'Monitor API quickstart', publisher: 'Parallel Docs', url: PAR_MONITOR },
    { title: 'Pricing', publisher: 'Parallel Docs', url: PAR_DOCS_PRICING },
    { title: 'Parallel pricing', publisher: 'Parallel Web Systems', url: PAR_PRICING },
    { title: 'Parallel MCP', publisher: 'Parallel Web Systems', url: PAR_MCP },
  ],

  related: [
    'exa-alternatives',
    'best-web-search-api-for-ai-agents',
    'the-web-behind-the-login',
    'scrape-data-behind-login',
    'recipe:competitor-tracking',
    'recipe:email-sms-tracking',
    '/developers',
  ],
}
