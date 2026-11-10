import type { BlogPost } from './types'

/* Wave 2, batch 1, spec 2 (_research/seo/revamp-11nov/WAVE2_BRIEF.md and WAVE2_SLATE.md, 11 Nov 2026): Exa
   alternatives, sorted by job. Primary "exa alternatives"; secondaries from Google autocomplete (US and UK, 11 Nov,
   autocomplete_11nov_exa.json): exa ai alternatives, exa search alternatives, exa websets alternative, tavily
   alternatives (open source, self hosted). Page 1 today (serp_11nov.json) is Firecrawl's and Tavily's own lists; this
   one is sorted by job, with a section on when Exa is still the right answer. Reader: developers and data teams (S2).
   Every fact about another provider comes from its own pages, read on 11 Nov 2026: exa.ai (home, /products/search,
   /pricing, /products/agent), websets.exa.ai/websets, serper.dev, serpapi.com/pricing, tavily.com/pricing, Tavily's
   credits docs and its Nebius post, Nebius's release of 10 Feb 2026, linkup.so and its pricing, brave.com/search/api,
   firecrawl.dev/pricing, Firecrawl's advanced scraping guide and Interact docs, jina.ai/reader, docs.searxng.org,
   github.com/unclecode/crawl4ai, parallel.ai (/products/search, /pricing, /products/monitor, /products/findall).
   Exa's "private information" is reported only as its search page describes it (data on companies, places and people,
   and Exa Connect partners). Jina's pricing page shows no dollar figure in its readable text, so no price is printed.
   Brave's line on the Bing Search APIs is left out (not checked on Microsoft's own page). The 100,000-search table is
   list price times volume, worked from each pricing page. pinecrate.example and its offer are invented, as on
   /developers. No MCP command printed: mcp.useobsession.com had no DNS record on 11 Nov. British English, no dashes. */

const EXA_HOME = 'https://exa.ai/'
const EXA_SEARCH = 'https://exa.ai/products/search'
const EXA_PRICING = 'https://exa.ai/pricing'
const EXA_AGENT = 'https://exa.ai/products/agent'
const WEBSETS = 'https://websets.exa.ai/websets'
const TAVILY_PRICING = 'https://www.tavily.com/pricing'
const BRAVE = 'https://brave.com/search/api/'
const PARALLEL_SEARCH = 'https://parallel.ai/products/search'
const SERPER = 'https://serper.dev/'
const SERPAPI = 'https://serpapi.com/pricing'
const TAVILY_CREDITS = 'https://docs.tavily.com/documentation/api-credits'
const NEBIUS =
  'https://nebius.com/newsroom/nebius-announces-agreement-to-acquire-tavily-to-add-agentic-search-to-its-ai-cloud-platform'
const TAVILY_NEBIUS = 'https://www.tavily.com/blog/tavily-is-joining-nebius'
const LINKUP = 'https://www.linkup.so/'
const LINKUP_PRICING = 'https://www.linkup.so/pricing'
const FIRECRAWL_HOME = 'https://www.firecrawl.dev/'
const FIRECRAWL_PRICING = 'https://www.firecrawl.dev/pricing'
const FIRECRAWL_ACTIONS = 'https://docs.firecrawl.dev/advanced-scraping-guide'
const FIRECRAWL_INTERACT = 'https://docs.firecrawl.dev/features/interact'
const JINA_READER = 'https://jina.ai/reader/'
const SEARXNG = 'https://docs.searxng.org/'
const CRAWL4AI = 'https://github.com/unclecode/crawl4ai'
const PARALLEL_MONITOR = 'https://parallel.ai/products/monitor'
const PARALLEL_TASK = 'https://parallel.ai/products/task'
const PARALLEL_PRICING = 'https://parallel.ai/pricing'
const PARALLEL_FINDALL = 'https://parallel.ai/products/findall'

export const post: BlogPost = {
  slug: 'exa-alternatives',
  title: 'Exa alternatives for AI agents, by job: search, extraction, research, and data behind a login',
  dek: 'Every alternative to Exa sorted by the job it does best, from Google results to deep research, each priced from its own pages. Then when Exa is still the right answer, and where the data a company sends its customers comes from.',
  metaTitle: 'Exa alternatives for developers and AI agents, by the job',
  description:
    'Exa alternatives sorted by job and priced from each provider’s own pages: SERP APIs, agent search, extraction, research, lists and data behind a login.',
  answer:
    'The best Exa alternatives depend on the job: Serper for Google results, Tavily, Linkup or Brave for agent search, Firecrawl or Jina Reader for clean page text, and Parallel for research and monitoring. Exa stays a strong default for search by meaning over its own index of 100 billion documents. For what a company shows only to its customers, Obsession keeps each email, member price and cancel offer dated with a screenshot, looked up by API or MCP (the standard way AI agents call tools).',
  primaryKeyword: 'exa alternatives',
  keywords: [
    'exa ai alternatives',
    'exa search alternatives',
    'exa websets alternative',
    'tavily alternatives',
    'tavily alternatives open source',
    'tavily alternatives self hosted',
  ],
  category: 'Behind the login',
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 18,
  order: 4,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'runs',
      title: '1 question, 4 kinds of web data API',
      prompt: 'What does pinecrate.example offer trial users on day 10?',
      runs: [
        { label: 'Search API', answer: 'Its pricing page: Pro at $49 a month, with a 14 day trial.', verdict: { tone: 'info', text: 'Public page' } },
        { label: 'Page extraction', answer: 'The same pricing page, as clean markdown.', verdict: { tone: 'info', text: 'Public page' } },
        { label: 'Deep research', answer: 'A cited summary of the pricing page and 2 reviews.', verdict: { tone: 'info', text: 'Public pages' } },
        {
          label: 'Obsession',
          answer: 'The day 10 email, 9 Oct at 09:04: 25% off a yearly plan, with its screenshot.',
          verdict: { tone: 'ok', text: 'Sent to trial users' },
        },
      ],
      foot: 'Example: Pinecrate and its offer are invented. The offer reached only accounts 10 days into the trial.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Developers and data teams look for Exa alternatives when a search bill grows, a benchmark disappoints or a job needs data a search index doesn’t hold. The right replacement depends on the job. There are 6 jobs, from cheap Google results to the data a company shows only to signed-up customers, and each has its own best tool. Every option is described from its provider’s own pages, with its listed price per 1,000 calls where it publishes one. For the 4 best-known APIs head to head, read [Exa vs Tavily vs Firecrawl vs Parallel](/blog/exa-vs-tavily-vs-firecrawl).',
    },

    { kind: 'h2', id: 'what-exa-does', text: 'What Exa does, and why teams compare it' },
    {
      kind: 'p',
      text: 'Exa calls itself “The world’s data for AI agents” and says it searches “the largest index of public web and private information” ([exa.ai](' +
        EXA_HOME +
        ')). Its [search page](' +
        EXA_SEARCH +
        ') names what sits beside the public web: data on 70M+ companies, 211M+ places and 1B+ people. It adds partner data from providers such as Crunchbase, ZoomInfo and Similarweb through Exa Connect.',
    },
    {
      kind: 'p',
      text: 'A search index is a stored copy of web pages, organised so a query is answered without fetching the live web. Exa’s is built for search by meaning. It trains its own embedding models. These turn a query and each page into lists of numbers that sit close together when the ideas match, so a page can answer a question it never words the same way. Exa says it serves 100 billion documents from its own vector database, crawls 3.5 billion pages a day and returns each result’s text, highlights or summary in the same response.',
    },
    {
      kind: 'p',
      text: '[Exa’s pricing](' +
        EXA_PRICING +
        ') on 11 November 2026 puts Search at $4 per 1,000 requests at Lite, which answers in about 450 milliseconds. Auto costs $7 and takes about 1 second, and Deep costs $12 and takes 4 to 15 seconds, each with up to 10 results. Contents costs $1 per 1,000 pages, Answer $5 per 1,000 and Monitors $2 per 1,000. [Exa Agent](' +
        EXA_AGENT +
        ') runs research, list building and enrichment for $0.012 to $1.00 a request at a fixed effort level, and [Websets](' +
        WEBSETS +
        ') builds lists of companies and people from $49 a month. Every team starts with $10 of free credit a month plus a $10 onboarding bonus.',
    },
    {
      kind: 'p',
      text: 'Teams compare it with other providers for 4 reasons:',
    },
    {
      kind: 'list',
      items: [
        '**Cost at volume:** at millions of simple lookups a month, the price per 1,000 calls decides the bill, and it runs from $0.30 to $12 across the options here.',
        '**Google’s own results:** SEO, ads and shopping jobs often need what Google ranks, and Exa’s FAQ explains that it ranks its own index.',
        '**One page, read now:** an agent handed a URL needs that page as clean text, which extraction tools sell by the page.',
        '**Data on no public page:** the emails, member prices and trial limits a company shows only to signed-up customers sit behind a login. No index of published pages reaches them.',
      ],
    },

    { kind: 'h2', id: 'how-to-choose', text: 'How to choose: 4 questions before switching' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**What should 1 call return?** Links and snippets, a page’s full text, a written answer with citations, or a table of companies or people. SERP APIs return the first, extraction APIs the second, answer and research endpoints the third, and list builders the fourth.',
        '**Whose ranking?** Serper and SerpAPI return Google’s results page as data. Exa, Brave and Parallel say they search an index they built themselves. Firecrawl and Jina Reader fetch the page you name, live.',
        '**What does it cost at your volume?** Price a full month at the volume you expect. The table prices 100,000 searches a month at each provider’s list rate.',
        '**Is the answer on a public page at all?** If the agent needs what a company emails a new subscriber, or the offer on day 10 of a trial, no index of published pages holds it. It was sent to one account and never published, which makes it job 6.',
      ],
    },
    {
      kind: 'table',
      caption: 'Our sums: the cost of 100,000 searches a month at each provider’s list price on 11 November 2026, in US dollars, before free credit. Each call returns something different',
      cols: ['Option', 'What 1 call returns', 'Cost for 100,000 a month'],
      rows: [
        ['Serper', 'Google results as JSON', '$75 to $100'],
        ['Parallel Search', 'Ranked URLs and excerpts, 10 results', '$100, plus $1 per 1,000 pages read'],
        ['Exa Search, Lite', 'Up to 10 results with text and highlights', '$400'],
        ['Brave Search API', 'Results with text and context for a model', '$500'],
        ['Tavily, basic search', 'Search results, 1 credit each', '$500 on its Growth plan'],
        ['Linkup Search', 'Cited results with full-text snippets', '$500 to $600'],
        ['Exa Search, Auto', 'Up to 10 results with text and highlights', '$700'],
        ['SerpAPI', 'Structured results pages', 'No plan at 100,000: $275 covers 30,000, $3,750 covers 1 million'],
        ['Exa Search, Deep', 'Multi-step research with structured output', '$1,200'],
      ],
    },
    {
      kind: 'p',
      text: 'The cheapest call is rarely the cheapest answer. A results page of links and snippets needs a second call to read each page, and every long page sent to a model costs tokens. Exa says its highlights cut an agent’s input tokens by 95% on average, and Brave’s own page argues for measuring the total cost per correct answer.',
    },
    {
      kind: 'p',
      text: 'Every provider here also publishes a benchmark it leads. Exa says it ranks first for quality on the Artificial Analysis Search Index, and [Brave](' +
        BRAVE +
        ') says it ranked first in independent testing. [Parallel](' +
        PARALLEL_SEARCH +
        ') calls its search “the highest accuracy AI search API”, and [Tavily](' +
        TAVILY_PRICING +
        ') puts it first on SimpleQA and SealQA. The fair test is your own. Run 50 to 100 of your agent’s real queries through 2 or 3 options, and score the answers your agent gives with each.',
    },

    { kind: 'h2', id: 'google-results', text: 'Job 1: Google results as data' },
    {
      kind: 'p',
      text: 'A SERP API returns the search engine results page as JSON. That is the list Google shows for a query: titles, links and snippets, and for some APIs maps, shopping and news results. It suits agents and tools that need Google’s own ranking, such as an SEO check or a shopping comparison.',
    },
    { kind: 'h3', id: 'serper', text: 'Serper' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Serper](' +
          SERPER +
          ') returns Google results as JSON, usually in 1 to 2 seconds, for web search and other Google result types such as videos. It says it caches nothing, so each response reflects Google’s results at that moment. Each query can set its country and language.',
        '**Price as listed:** 2,500 free queries, with no payment details needed. Credits come in top-ups with no subscription, each valid for 6 months. $50 buys 50,000 ($1.00 per 1,000), $375 buys 500,000 ($0.75), $1,250 buys 2.5 million ($0.50) and $3,750 buys 12.5 million ($0.30).',
        '**Where it stops:** Google’s results page as data. Its sample responses show titles, links and snippets, so reading each page takes a second call.',
        '**Best for:** the lowest listed price per Google query at high volume.',
      ],
    },
    { kind: 'h3', id: 'serpapi', text: 'SerpAPI' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [SerpAPI](' +
          SERPAPI +
          ') turns results pages into “structured SERP data” for Google and a long list of other engines and sites. They include Bing, DuckDuckGo, Amazon, YouTube, Google Maps, and Google’s AI Overview and AI Mode. Only successful searches count toward a plan, and plans run month to month.',
        '**Price as listed:** free for 250 searches a month. Paid plans cost $25 a month for 1,000 searches, $75 for 5,000, $150 for 15,000 and $275 for 30,000, rising to $3,750 for 1 million and $106,050 a month for 54 million.',
        '**Where it stops:** priced by searches a month, from $25 per 1,000 on the smallest plan to $3.75 at 1 million.',
        '**Best for:** agents and SEO tools that need many engines, or Google’s AI Overview, through one API.',
      ],
    },

    { kind: 'h2', id: 'agent-search', text: 'Job 2: Search built for agents' },
    {
      kind: 'p',
      text: 'These APIs return ranked results with the page text or extracted passages in one call, sized for a model’s context. That is grounding: giving the model current sources to answer from, with the links to cite. [The best web search APIs for AI agents](/blog/best-web-search-api-for-ai-agents) prices every grounding source in one table.',
    },
    { kind: 'h3', id: 'tavily', text: 'Tavily' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Tavily](' +
          TAVILY_CREDITS +
          ') offers search, extract, map, crawl and research endpoints for agents, all behind one API key. [Nebius announced an agreement to acquire Tavily](' +
          NEBIUS +
          ') on 10 February 2026, and [Tavily’s own post](' +
          TAVILY_NEBIUS +
          ') says the API, its data policies and zero data retention stay the same.',
        '**Price as listed:** 1,000 free credits a month, with no payment details needed. A basic search costs 1 credit and an advanced search 2. Pay as you go costs $0.008 a credit. Monthly plans run from $30 for 4,000 credits to $500 for 100,000, so 1,000 basic searches cost $5 to $8.',
        '**Where it stops:** on the free plan, requests stop when the month’s credits run out, and a research request costs 4 to 250 credits.',
        '**Best for:** agents that want search, extraction and crawling from one provider.',
      ],
    },
    { kind: 'h3', id: 'linkup', text: 'Linkup' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Linkup](' +
          LINKUP +
          ') sells “Web search built for AI applications” that returns “sourced, cited answers with full-text snippets from across the web”. A team can tune the index, pick the sources and set the freshness, and its Research endpoint runs deep research in 1 to 10 minutes.',
        '**Price as listed:** [4,000 free queries](' +
          LINKUP_PRICING +
          '), then pay as you go: Search $0.005 to $0.006 a request, Fetch $0.001 to $0.006 and Research $0.25 to $2.50. SOC 2 Type II comes on every plan.',
        '**Where it stops:** zero data retention and personalised indexes come with the Enterprise plan.',
        '**Best for:** cited answers and research, priced by the request.',
      ],
    },
    { kind: 'h3', id: 'brave', text: 'Brave Search API' },
    {
      kind: 'list',
      items: [
        '**What it does well:** Brave Search API answers every query from Brave’s own index, with “Zero dependencies on Google or Bing”. Its endpoint for large language models (LLMs), called LLM Context, returns the best passages for a question, from 1,000 to about 33,000 tokens. Goggles rerank results or limit them to the sites you choose.',
        '**Price as listed:** Search costs $5 per 1,000 requests, with $5 of free credit every month and 50 queries a second. Answers costs $4 per 1,000 plus $5 per million tokens. Credits are prepaid, with no subscription.',
        '**Where it stops:** the Answers endpoint runs at 2 queries a second.',
        '**Best for:** teams that want an independent index and a monthly free credit.',
      ],
    },

    { kind: 'h2', id: 'extraction', text: 'Job 3: Turning pages into clean text' },
    {
      kind: 'p',
      text: 'Extraction APIs fetch the page you name, or crawl a whole site, and return clean markdown. They load each page in a headless browser, a browser run by code with no screen, so pages built with JavaScript render before they are read. Some can click, type and sign in first.',
    },
    { kind: 'h3', id: 'firecrawl', text: 'Firecrawl' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Firecrawl](' +
          FIRECRAWL_HOME +
          ') scrapes any page or crawls a whole site into clean markdown or JSON, and its search returns full page content. Before scraping it can [run up to 50 actions](' +
          FIRECRAWL_ACTIONS +
          '), such as wait, click, write, press, scroll and screenshot, with up to 60 seconds of waiting in all. Its docs call actions useful for “user-gated pages”. Its [Interact sessions](' +
          FIRECRAWL_INTERACT +
          ') sign in once and read the pages that appear only after authentication, saving cookies and local storage in a profile for the next scrape.',
        '**Price as listed:** [free for 1,000 credits a month](' +
          FIRECRAWL_PRICING +
          '), about 1,000 pages or 500 searches. Hobby costs $19 a month for 5,000 credits, Standard $99 for 100,000, Growth $399 for 500,000 and Scale $749 for 1 million. A scraped page costs 1 credit, and an Interact session 2 credits a browser minute, or 7 with a prompt.',
        '**Where it stops:** an Interact session ends after 10 minutes by default, or 5 minutes idle. Its pages describe reading pages, with no mention of receiving the emails or texts a company sends after a sign-up.',
        '**Best for:** agents that need any named page as markdown, including one behind a login your team holds.',
      ],
    },
    { kind: 'h3', id: 'jina-reader', text: 'Jina Reader' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Jina Reader](' +
          JINA_READER +
          ') turns a URL into “LLM-friendly input” when you put r.jina.ai in front of it, and s.jina.ai returns the top 5 search results with their contents. For pages that accept cookie sessions, it forwards the cookies you pass in a header.',
        '**Price as listed:** free without a key at 20 requests a minute. Each new key comes with 10 million free tokens, and use after that is billed by the tokens processed.',
        '**Where it stops:** its FAQ says it “replays credentials you already hold”, and that interactive logins, multi-factor codes and tokens a page fetches itself are out of scope.',
        '**Best for:** the fastest way to read one page, free for light use.',
      ],
    },
    { kind: 'h3', id: 'self-hosted', text: 'Free and self-hosted: SearXNG and Crawl4AI' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [SearXNG](' +
          SEARXNG +
          ') is “a free internet metasearch engine which aggregates results from up to 260 search services”, and its users “are neither tracked nor profiled”. [Crawl4AI](' +
          CRAWL4AI +
          ') is an Apache 2.0 crawler that returns clean markdown, keeps sessions across multi-step crawls and saves persistent browser profiles.',
        '**Price as listed:** free software, plus your own servers and upkeep. Crawl4AI also offers a hosted cloud version.',
        '**Where it stops:** your team runs, updates and scales both, and SearXNG’s results come from the engines it queries.',
        '**Best for:** teams looking for Tavily alternatives that are open source and self-hosted.',
      ],
    },

    { kind: 'h2', id: 'research-monitoring', text: 'Job 4: Deep research and monitoring' },
    {
      kind: 'p',
      text: 'Research endpoints run many searches and reads for one question and return a written answer or structured fields with citations. Monitors repeat a search on a schedule and post what is new to a webhook, a message sent to your server when something changes. Exa sells both as Agent and Monitors, Tavily and Linkup sell research, and Parallel builds its whole product around them.',
    },
    { kind: 'h3', id: 'parallel', text: 'Parallel' },
    {
      kind: 'list',
      items: [
        '**What it does well:** Parallel Search runs on “our own proprietary web scale index” and returns ranked URLs with compressed excerpts in 200 milliseconds to 3 seconds. [Monitor](' +
          PARALLEL_MONITOR +
          ') turns a query into “an ongoing stream of updates every time new related information appears on the web”, delivered by webhook with source URLs. Its [Task API](' +
          PARALLEL_TASK +
          ') combines AI inference with web search and live crawling for structured research, with citations on every output.',
        '**Price as listed:** [Search costs $1 per 1,000 requests](' +
          PARALLEL_PRICING +
          ') with 10 results, Extract costs $1 per 1,000 URLs, Task from $5 per 1,000 runs and Monitor from $3 per 1,000 checks. There is $5 free a month with a payment method on file, up to $80 at sign-up, and free web search through its MCP server with no account.',
        '**Where it stops:** Monitor watches what appears on the web. Its pages don’t describe watching what a signed-up account receives.',
        '**Best for:** long research and ongoing monitoring at a low price per call.',
      ],
    },

    { kind: 'h2', id: 'lists', text: 'Job 5: Lists of companies and people' },
    {
      kind: 'p',
      text: 'List builders turn a description such as “fintech companies in Europe hiring a head of compliance” into a table of matching companies or people, each with extra columns of facts. Exa sells this as Websets, and Parallel sells it as FindAll.',
    },
    { kind: 'h3', id: 'websets', text: 'Exa Websets' },
    {
      kind: 'list',
      items: [
        '**What it does well:** Websets turns a plain description of an ideal customer profile into a list of companies or people. It adds enrichment columns written as prompts and exports to CSV, Clay or a CRM. Exa says its agents verify every result against the criteria.',
        '**Price as listed:** Starter costs $49 a month for 8,000 credits and 100 results per Webset. Pro costs $449 for 100,000 credits and 1,000 results. Enterprise is custom, with up to 5,000 results.',
        '**Where it stops:** each plan caps the results per list.',
        '**Best for:** sales and research teams building lists in a browser.',
      ],
    },
    { kind: 'h3', id: 'findall', text: 'Parallel FindAll' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [FindAll](' +
          PARALLEL_FINDALL +
          ') “discovers and returns structured datasets of entities”. Each match comes with the sources used to verify it, enrichment fields, and “citations, source excerpts, and confidence scores”.',
        '**Price as listed:** a fixed cost per run plus a cost per match, both set by the generator a team picks.',
        '**Where it stops:** the price of a run depends on the generator, so size a run before a large job.',
        '**Best for:** a list builder built as an API, with a citation on every match.',
      ],
    },

    { kind: 'h2', id: 'behind-the-login', text: 'Job 6: What a company shows only to its customers' },
    {
      kind: 'p',
      text: 'Some answers were never published. The welcome email and the code inside it go to the inbox that signed up. A member price shows only to a signed-in account. A trial’s limits and the upgrade prompt on day 7 appear only inside the product. The offer to stay appears only in the cancel flow. A search crawler visits without an account, so none of it reaches the index. [The web behind the login](/blog/the-web-behind-the-login) sets out what sits behind each sign-up, login, form, checkout and cancel flow.',
    },
    {
      kind: 'p',
      text: 'Extraction tools reach part of it with a login your team already holds. Firecrawl’s Interact signs in once and reads the pages that appear after authentication, until the session ends. Jina Reader forwards the session cookies you supply. Neither provider’s pages describe receiving the emails and texts a company sends after a sign-up, or keeping an account open for weeks to see what changes. Email archives cover part of the inbox for the brands on their own lists, as [competitor email tracking tools](/blog/competitor-email-tracking-tools) compares.',
    },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request.',
    },
    {
      kind: 'p',
      text: 'Search APIs index what companies publish, and extraction APIs read a page on request. Obsession keeps accounts open at each company for months, competitors included. It files what each one sends and shows its customers, dated, for as long as anyone follows the company. Search for what a company publishes; Obsession for what it sends and shows its customers. Obsession’s agents have run 1,500 sign-ups, baskets and checkouts at real companies, and counting.',
    },
    {
      kind: 'p',
      text: 'Developers reach it through [5 verbs over the API and MCP](/developers), with TypeScript and Python SDKs:',
    },
    {
      kind: 'list',
      items: [
        '**lookup:** is a company covered, and since when.',
        '**facts:** what the company showed its customers, by kind and date.',
        '**evidence:** the raw email or page behind a fact.',
        '**index:** add a company not covered yet.',
        '**notify:** each new fact at your webhook, the moment it lands.',
      ],
    },
    {
      kind: 'p',
      text: 'An agent asked what pinecrate.example offers trial users on day 10 gets the [day 10 email itself](/recipes/trial-teardown), with the time it arrived and its screenshot. Teams without an agent read the same facts on the website, or as a table in Clay, Baserow or Google Sheets. The [sample data](/sample-output) shows a real store’s record in every format it comes in.',
    },

    { kind: 'h2', id: 'when-exa', text: 'When Exa is still the right answer' },
    {
      kind: 'p',
      text: 'Switching saves the most on high volumes of simple lookups. Exa stays a strong default in 5 cases:',
    },
    {
      kind: 'list',
      items: [
        '**The agent searches by meaning.** Exa’s own index and embedding models suit questions phrased in plain language. Its category filters cover news, companies, people, research papers, code and financial filings.',
        '**Text should come back in the same call.** Results include page text and highlights at no extra cost, by Exa’s own FAQ, so there is no second fetch.',
        '**Latency matters.** Lite answers in about 450 milliseconds for $4 per 1,000 requests.',
        '**Company and people data belong beside the web.** Exa’s search page lists data on 70M+ companies and 1B+ people, and Exa Connect brings in partners such as Crunchbase and ZoomInfo.',
        '**One provider for search, research, lists and monitors.** Exa sells all 4, and its free plan includes its MCP server.',
      ],
    },
    {
      kind: 'p',
      text: 'If the reason for leaving is price, check the 100,000-search table at your own volume first. If the reason is data Exa’s pages don’t describe, such as what a company emails its subscribers, add a source for that job and keep Exa for search.',
    },

    { kind: 'h2', id: 'compared', text: 'Exa and the alternatives, side by side', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Exa alternatives by job, from each provider’s own pages on 11 November 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Staying on Exa', 'Search by meaning over its own index, text in the same call', '$4 to $12 per 1,000 searches\n$10 free a month', 'Ranks its own index, so Google’s order needs a SERP API', 'Semantic search, research and lists from one provider'],
        ['By hand: a spare inbox and a spreadsheet', 'Any company, emails and member prices included', 'Free, plus staff hours', 'Hours grow with every company and every week', 'A few companies, checked now and then'],
        ['Serper', 'Google results as JSON in 1 to 2 seconds', '$0.30 to $1.00 per 1,000\n2,500 free queries', 'Google results only', 'Cheapest Google results at volume'],
        ['SerpAPI', 'Structured results from Google and many other engines', '$25 to $3,750 a month\n250 free searches a month', '$25 per 1,000 on the smallest plan', 'Many engines, AI Overview and AI Mode'],
        ['Tavily (Nebius)', 'Search, extract, map and crawl behind one key', '$5 to $8 per 1,000 basic searches\n1,000 free credits a month', 'Free requests stop when credits run out', 'Search and crawling from one provider'],
        ['Linkup', 'Cited answers with full-text snippets', '$5 to $6 per 1,000 searches\n4,000 free queries', 'Zero data retention on Enterprise', 'Cited answers and research by the request'],
        ['Brave Search API', 'Its own index, with no Google or Bing dependency', '$5 per 1,000\n$5 free a month', 'Answers endpoint at 2 queries a second', 'An independent index'],
        ['Firecrawl', 'Any page as markdown, with actions and logins', '$19 to $749 a month\n1,000 free credits a month', 'Interact sessions end after 10 minutes by default', 'Named pages, your own logins included'],
        ['Jina Reader', 'One URL to clean text with an r.jina.ai prefix', 'Free at 20 requests a minute\n10M free tokens per key', 'No interactive login or one-time codes', 'Quick reads of one page'],
        ['SearXNG and Crawl4AI', 'Open-source search across up to 260 engines, and crawling to markdown', 'Free software, your own servers', 'Your team runs and maintains it', 'Open-source, self-hosted stacks'],
        ['Parallel', 'Its own index, research tasks and monitors', 'Search $1 per 1,000\nMonitor from $3 per 1,000 checks', 'Monitors watch what appears on the web', 'Research and monitoring at a low price per call'],
        ['Exa Websets', 'Lists of companies and people with enrichment columns', '$49 or $449 a month', '100 or 1,000 results per list by plan', 'Sales lists for Clay or a CRM'],
        ['Parallel FindAll', 'Lists of entities with citations and confidence scores', 'A cost per run plus a cost per match', 'Price set by the generator picked', 'A list builder as an API'],
        [
          'Obsession (ours): [Competitor tracking](/recipes/competitor-tracking), [Trial teardown](/recipes/trial-teardown), 5 verbs over the [API and MCP](/developers)',
          'What any company shows only to customers: emails, texts, member prices, trial limits, cancel offers, each dated',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Public pages left to the search API it works beside',
          'Agents that answer about named companies with what customers are sent',
        ],
      ],
    },

    { kind: 'h2', id: 'which-to-choose', text: 'Which Exa alternative to choose' },
    {
      kind: 'p',
      text: 'Use Obsession when an agent or a team needs what companies show only to their customers. That means the emails and texts after a sign-up, the member price, the trial’s limits and the offer in the cancel flow, at any company you name. Each one is dated with its screenshot and kept for as long as you follow the company. For what the open web publishes, pick by job:',
    },
    {
      kind: 'list',
      items: [
        '**Data behind the login, at any company:** Obsession, beside any search API. [How Obsession compares with search engines, email archives and panels](/compare) sets out where each one stops.',
        '**Cheapest Google results:** Serper, from $0.30 per 1,000 at volume, or SerpAPI for many engines.',
        '**Search built for agents:** Tavily for search and crawling from one provider, Linkup for cited answers, or Brave for an independent index.',
        '**A named page as clean text:** Firecrawl, including pages behind your own login, or Jina Reader for quick reads.',
        '**Open source and self-hosted:** SearXNG for search and Crawl4AI for crawling.',
        '**Deep research and monitoring:** Parallel, or Exa’s own Agent and Monitors.',
        '**Lists of companies and people:** Exa Websets, or Parallel FindAll as an API.',
        '**Search by meaning with text in one call:** stay on Exa.',
      ],
    },
    {
      kind: 'cta',
      text: '5 verbs for your agents and your code: what any company shows only to its customers, as typed facts, each with the raw email or page behind it.',
      to: '/developers',
      label: 'See the API and MCP',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about Exa alternatives' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are the best Exa alternatives?',
          a: 'It depends on the job. On 11 November 2026, Serper listed Google results from $0.30 per 1,000 at volume. Tavily and Linkup sold search built for agents at about $5 to $8 per 1,000, and Brave Search API charged $5 per 1,000 from its own index. Firecrawl and Jina Reader turned pages into clean text, and Parallel sold search at $1 per 1,000 with research and monitoring. For what a company shows only to its customers, Obsession keeps each email, member price and trial limit dated with a screenshot.',
        },
        {
          q: 'What is a good Exa Websets alternative?',
          a: 'Parallel FindAll is the closest built as an API. It returns matching companies or people with citations, source excerpts and confidence scores, priced per run plus per match. Exa’s own Agent also builds and enriches lists, for $0.012 to $1.00 a request. Websets itself cost $49 or $449 a month on 11 November 2026.',
        },
        {
          q: 'What are the best Tavily alternatives?',
          a: 'Exa suits search by meaning over its own index, and Linkup sells cited answers at $5 to $6 per 1,000 searches. Brave Search API offers an independent index at $5 per 1,000, and Parallel charges $1 per 1,000. Nebius announced its agreement to acquire Tavily on 10 February 2026, and Tavily says nothing changes about how its API is used. For a free, self-hosted route, SearXNG and Crawl4AI cover search and crawling.',
        },
        {
          q: 'Is there a free or open-source alternative to Exa?',
          a: 'SearXNG is a free metasearch engine that aggregates results from up to 260 search services, and Crawl4AI is an Apache 2.0 crawler that returns clean markdown. Both run on your own servers. Among hosted APIs, Serper gives 2,500 free queries and Linkup 4,000. Tavily and Firecrawl give 1,000 credits a month, Brave $5 of credit a month and Exa $10 a month.',
        },
        {
          q: 'Which Exa alternative is cheapest?',
          a: 'For Google results, Serper at $0.30 to $1.00 per 1,000 queries. For search with excerpts from its own index, Parallel at $1 per 1,000 requests with 10 results. At 100,000 searches a month, list prices on 11 November 2026 ran from about $75 at Serper to $1,200 at Exa Deep. Count the tokens each result sends to your model as well.',
        },
        {
          q: 'Can Exa or Firecrawl see data behind a login?',
          a: 'Exa’s pages describe the public web plus data on companies, people and places, and partner data through Exa Connect. Firecrawl’s Interact signs in with credentials your team holds and reads the pages behind that login for the length of a session. Neither describes receiving the emails and texts a company sends after a sign-up. Obsession keeps those, with member prices, trial limits and cancel offers, at any company you name.',
          link: { label: 'See the API and MCP', to: '/developers' },
        },
        {
          q: 'How is Obsession different from Exa?',
          a: 'Exa searches its own index of the web and its company, people and place data. Obsession keeps accounts open at companies for months and returns what each one sent and showed its customers. That means emails, texts, member prices, trial limits and cancel offers, each dated with its screenshot or the raw email. An agent can call both, Exa for what a company publishes and Obsession for what it sends its customers.',
          link: { label: 'How Obsession compares', to: '/compare' },
        },
      ],
    },
  ],

  sources: [
    { title: 'Exa: the world’s data for AI agents', publisher: 'Exa', url: EXA_HOME },
    { title: 'Exa Search API', publisher: 'Exa', url: EXA_SEARCH },
    { title: 'Exa API pricing', publisher: 'Exa', url: EXA_PRICING },
    { title: 'Exa Agent API', publisher: 'Exa', url: EXA_AGENT },
    { title: 'Websets and Websets pricing', publisher: 'Exa', url: WEBSETS },
    { title: 'Brave Search API', publisher: 'Brave', url: BRAVE },
    { title: 'Parallel Search API', publisher: 'Parallel', url: PARALLEL_SEARCH },
    { title: 'Tavily pricing', publisher: 'Tavily', url: TAVILY_PRICING },
    { title: 'Serper: Google Search API', publisher: 'Serper', url: SERPER },
    { title: 'Plans and pricing', publisher: 'SerpApi', url: SERPAPI },
    { title: 'Credits and pricing', publisher: 'Tavily Docs', url: TAVILY_CREDITS },
    { title: 'Nebius announces agreement to acquire Tavily to add agentic search to its AI cloud platform', publisher: 'Nebius', url: NEBIUS, date: '2026-02-10' },
    { title: 'Tavily is joining Nebius', publisher: 'Tavily', url: TAVILY_NEBIUS },
    { title: 'Web search API for AI', publisher: 'Linkup', url: LINKUP },
    { title: 'Pricing', publisher: 'Linkup', url: LINKUP_PRICING },
    { title: 'Firecrawl', publisher: 'Firecrawl', url: FIRECRAWL_HOME },
    { title: 'Advanced scraping guide', publisher: 'Firecrawl Docs', url: FIRECRAWL_ACTIONS },
    { title: 'Interact', publisher: 'Firecrawl Docs', url: FIRECRAWL_INTERACT },
    { title: 'Pricing', publisher: 'Firecrawl', url: FIRECRAWL_PRICING },
    { title: 'Reader API', publisher: 'Jina AI', url: JINA_READER },
    { title: 'SearXNG documentation', publisher: 'SearXNG', url: SEARXNG },
    { title: 'Crawl4AI', publisher: 'GitHub', url: CRAWL4AI },
    { title: 'Monitor API', publisher: 'Parallel', url: PARALLEL_MONITOR },
    { title: 'Task API', publisher: 'Parallel', url: PARALLEL_TASK },
    { title: 'Pricing', publisher: 'Parallel', url: PARALLEL_PRICING },
    { title: 'FindAll API', publisher: 'Parallel', url: PARALLEL_FINDALL },
  ],

  related: [
    'exa-vs-tavily-vs-firecrawl',
    'best-web-search-api-for-ai-agents',
    'the-web-behind-the-login',
    'competitor-email-tracking-tools',
    'recipe:competitor-tracking',
    'recipe:trial-teardown',
    '/developers',
    '/compare',
  ],
}
