import type { BlogPost } from './types'

/* Wave 2, batch 1, spec 3 (_research/seo/revamp-11nov/WAVE2_BRIEF.md and WAVE2_SLATE.md, 11 Nov 2026): the best web
   search APIs for AI agents and LLMs. Primary "best web search api for ai agents"; also "web search api for llm",
   "cheapest web search api for llm", "free web search api for llm", "search api for ai agents", "google search api for
   ai agents" (Google autocomplete, US and UK, 11 Nov 2026, autocomplete_11nov_exa.json). Page 1 on 11 Nov: Firecrawl,
   Reddit, Browserbase, Parallel, Exa, Mastra, Tavily (serp_11nov.json).
   Reader: AI product and platform teams picking a grounding source (S2, developers). Serves /developers.
   Every other service is described only from its own pricing, product and docs pages, each read on 11 Nov 2026; prices
   in US dollars as listed that day. Microsoft's own lifecycle page dates the Bing Search API retirement (notice 15 May
   2025, retired 11 Aug 2025); Google's own page says the Custom Search JSON API is closed to new customers.
   Left out on purpose: Perplexity's Sonar request fees (its current pricing page bills Sonar by token in the Agent API
   and lists no request fee), Brave's "up to $20" headline beyond one mention (its plan cards say $5 a month), Exa's
   Websets (not on its pricing page), Tavily's acquisition (its pricing page shows only the "Tavily by Nebius" label),
   SerpApi's SLA figures (its page gives two different ones), Firecrawl (compared in the sibling post).
   Exa is held to its own words: "The world's data for AI agents", "the largest index of public web and private
   information" (undefined on its pages), its search page's data categories and partners.
   The volume and token costs are labelled example inputs. northgate.example and every offer in its picture are
   invented. No dashes. */

const MS_OVERVIEW = 'https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/web-overview'
const GOOGLE_GROUNDING = 'https://aistudio.google.com/docs/google-search'
const MS_BING_TOOLS = 'https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/bing-tools'
const MS_LIFECYCLE = 'https://learn.microsoft.com/en-us/lifecycle/announcements/bing-search-api-retirement'
const MS_PRICING = 'https://www.microsoft.com/en-us/bing/apis'
const GOOGLE_CSE = 'https://developers.google.com/custom-search/v1/overview'
const EXA = 'https://exa.ai/'
const EXA_SEARCH = 'https://exa.ai/products/search'
const EXA_PRICING = 'https://exa.ai/pricing'
const PARALLEL_SEARCH = 'https://parallel.ai/products/search'
const PARALLEL_QS = 'https://docs.parallel.ai/search/search-quickstart'
const PARALLEL_DOCS_PRICING = 'https://docs.parallel.ai/getting-started/pricing'
const PARALLEL_PRICING = 'https://parallel.ai/pricing'
const TAVILY_PRICING = 'https://www.tavily.com/pricing'
const TAVILY_SEARCH = 'https://docs.tavily.com/documentation/api-reference/endpoint/search'
const TAVILY_CREDITS = 'https://docs.tavily.com/documentation/api-credits'
const LINKUP = 'https://www.linkup.so/'
const LINKUP_PRICING = 'https://docs.linkup.so/pages/documentation/platform/pricing'
const PPLX_QS = 'https://docs.perplexity.ai/docs/search/quickstart'
const PPLX_PRICING = 'https://docs.perplexity.ai/docs/getting-started/pricing'
const PPLX_MODELS = 'https://docs.perplexity.ai/docs/agent-api/models'
const BRAVE = 'https://brave.com/search/api/'
const BRAVE_DOCS = 'https://api-dashboard.search.brave.com/documentation/services/web-search'
const YOU = 'https://you.com/product/web-search-api'
const YOU_PRICING = 'https://you.com/pricing'
const SERPAPI = 'https://serpapi.com/'
const SERPAPI_PRICING = 'https://serpapi.com/pricing'
const SERPER = 'https://serper.dev/'
const GOOGLE_PRICING = 'https://aistudio.google.com/docs/pricing'

export const post: BlogPost = {
  slug: 'best-web-search-api-for-ai-agents',
  title: 'The best web search APIs for AI agents: price, freshness and what each can’t see',
  dek: '11 web search APIs for AI agents and LLMs compared on price per 1,000 searches, freshness and what each returns, as listed on 11 November 2026. Each one searches the open web as its own pages describe it, and none of them describes going past a login.',
  metaTitle: 'Best web search API for AI agents: 11 priced for developers',
  description:
    'The best web search API for AI agents, compared: Exa, Tavily, Brave, Perplexity, Parallel, SerpApi, Serper and Google grounding on price and freshness.',
  answer:
    'The best web search API for AI agents depends on the job: Serper for Google’s results from $0.30 per 1,000 searches, Exa and Parallel for page text sized for a model, Tavily and Linkup for a cited answer in one call, and Brave or You.com for an independent index. Their pages describe search over the open web, and none describes keeping what a company sends its signed-up customers. For that, Obsession keeps what companies show only to customers, such as emails, member prices and cancel offers, each dated with a screenshot and looked up by API or MCP (the standard way AI agents call tools).',
  primaryKeyword: 'best web search api for ai agents',
  keywords: [
    'best web search api for ai agents',
    'web search api for llm',
    'cheapest web search api for llm',
    'free web search api for llm',
    'search api for ai agents',
    'google search api for ai agents',
  ],
  category: 'Behind the login',
  order: 6,
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 21,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'Where each web search API reads from',
      rows: [
        {
          name: 'Own index',
          who: 'Exa, Parallel, Brave, You.com',
          nodes: ['Your agent', 'Their index', 'Web pages'],
          links: ['queries', 'copied from'],
        },
        {
          name: 'Search with answers',
          who: 'Tavily, Linkup, Perplexity',
          nodes: ['Your agent', 'Search and answer', 'Web pages'],
          links: ['asks', 'reads'],
        },
        {
          name: 'Google’s results as data',
          who: 'SerpApi, Serper',
          nodes: ['Your code', 'Live Google search', 'Results page'],
          links: ['calls', 'returns'],
        },
        {
          name: 'Grounding in a model',
          who: 'Google, Microsoft',
          nodes: ['Your prompt', 'Gemini or Foundry', 'Google or Bing'],
          links: ['sent to', 'searches'],
        },
        {
          name: 'Behind the login',
          who: 'Obsession',
          nodes: ['Your agent', 'Obsession', 'Signed-up accounts'],
          links: ['looks up', 'kept from'],
          lit: 1,
          ours: true,
        },
      ],
      foot: 'Search APIs return what their indexes hold from the open web. Obsession keeps what companies send and show to signed-up customers, each dated with a screenshot.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A web search API is a service that an AI agent, or an app built on a large language model (LLM), calls with a query. It returns current web results as data: links, snippets, page text or a written answer with its sources. The best web search API for AI agents depends on 4 checks a team can run before it signs. They are the price per 1,000 searches, how fresh each copy of a page is, what comes back and whose index it reads.',
    },
    {
      kind: 'p',
      text: 'These 11 services fall into 5 kinds:',
    },
    {
      kind: 'list',
      items: [
        '**Their own index, built for agents:** Exa and Parallel, which return page text and excerpts sized for a model.',
        '**Search with answers in one call:** Tavily, Linkup and Perplexity.',
        '**Independent indexes:** Brave and You.com, each crawled and ranked by its own company.',
        '**Google’s results as data:** SerpApi and Serper, which run a Google search and return the results page in a structured format code can read.',
        '**Grounding inside a model:** Google’s grounding for Gemini and Microsoft’s Grounding with Bing Search, where the model runs the search and answers with citations.',
      ],
    },
    {
      kind: 'p',
      text: 'Their pages describe search over the open web and, for Exa, data from partners such as Crunchbase and ZoomInfo. None of them describes what a company shows only to signed-up customers, such as its welcome email, its member price or the offer in its cancel flow.',
    },

    { kind: 'h2', id: 'returns', text: 'What a web search API returns' },
    {
      kind: 'p',
      text: 'A web search API returns one of 4 shapes, and the shape decides the model’s token bill as much as the search price does.',
    },
    {
      kind: 'list',
      items: [
        '**Links and snippets:** a ranked list of titles, addresses and 1 or 2 lines from each page, as on a search results page. SerpApi, Serper and Brave’s Web Search endpoint return this by default.',
        '**Page text:** the text of each result, cleaned of menus and ads, so the model reads the page itself. Exa, Tavily on request, You.com’s Contents API and Perplexity’s Search API return it.',
        '**Excerpts:** the passages most relevant to the query, cut to fit the model’s context window, the amount of text it can read at once. Parallel, Exa’s highlights and Brave’s LLM Context endpoint work this way.',
        '**Answers:** a written answer with citations, produced by a model on top of the search. Tavily’s answer option, Linkup’s sourced answers, Brave’s Answers plan, Exa’s Answer endpoint, Perplexity’s Sonar and both grounding tools return this.',
      ],
    },
    {
      kind: 'p',
      text: 'The shape matters because a model bills by the token, a short piece of a word, for everything it reads. Take example inputs: 10 results of full page text at about 1,500 tokens each come to 15,000 input tokens per search. At an example model price of $3 per million input tokens, that is $0.045 a search. Over 1,000 searches it comes to $45, 9 times a $5 search fee. The same 10 results as excerpts of about 150 tokens each cost $4.50 per 1,000 in tokens. For an agent that searches on every turn, the size of what comes back can cost more than the search.',
    },

    { kind: 'h2', id: 'grounding', text: 'How grounding works' },
    {
      kind: 'p',
      text: 'Grounding means giving a model fresh, sourced text to answer from, so its answer rests on pages it can cite as well as on what it learned in training. Retrieval-augmented generation (RAG) is the general name for the pattern: retrieve text, add it to the prompt, then generate the answer. A grounded agent works in 4 steps:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**It decides whether it needs the web,** from the user’s question and its instructions.',
        '**It writes one or more search queries.**',
        '**The search API returns results:** links, snippets, page text or excerpts.',
        '**It puts the most relevant text into the prompt and answers,** citing the addresses it used.',
      ],
    },
    {
      kind: 'p',
      text: 'Microsoft’s [overview of web grounding](' +
        MS_OVERVIEW +
        ') names the same 4 steps: query formulation, search execution, information synthesis and source attribution.',
    },
    {
      kind: 'p',
      text: 'A team can wire it 2 ways. Calling a search API from its own code gives it the raw results, so it chooses the provider, what goes into the prompt and what to keep, within each provider’s terms. A grounding tool inside a model provider runs the search itself and returns the model’s answer with citations. Google [bills each search query Gemini decides to run](' +
        GOOGLE_GROUNDING +
        ') on Gemini 3 and newer models. Microsoft says that [developers and end users don’t have access to the raw content](' +
        MS_BING_TOOLS +
        ') its grounding tool returns.',
    },

    { kind: 'h2', id: 'changed', text: 'What changed at Bing and Google' },
    {
      kind: 'p',
      text: 'Microsoft [retired the Bing Search APIs on 11 August 2025](' +
        MS_LIFECYCLE +
        '), in a notice dated 15 May 2025. Existing instances were decommissioned and new sign-ups stopped. Microsoft points customers to Grounding with Bing Search in its agents service, which lets agents use “real-time public web data” and is [priced at $14 per 1,000 transactions](' +
        MS_PRICING +
        ').',
    },
    {
      kind: 'p',
      text: 'Google’s [Custom Search JSON API](' +
        GOOGLE_CSE +
        ') is closed to new customers, and existing customers have until 1 January 2027 to move. Its page points teams that search up to 50 domains to Vertex AI Search, and asks teams that need full web search to contact Google.',
    },
    {
      kind: 'p',
      text: 'Both large engines now sell web search mainly as grounding inside their own AI products, with the answer and its citations coming back through their model. Teams that want raw results to pass to any model have 3 other routes. Exa, Parallel, Brave and You.com run their own indexes. Tavily, Linkup and Perplexity sell search built for agents. SerpApi and Serper return Google’s results page as data.',
    },

    { kind: 'h2', id: 'criteria', text: 'How we compared them' },
    {
      kind: 'p',
      text: 'Every service is described from its own pricing, product and documentation pages as of 11 November 2026. Prices are in US dollars per 1,000 searches where the page gives one. They differ on 5 questions: what comes back, whose index it reads and how fresh, the price with its free tier, the speed it states, and where it stops. Parallel and You.com also run MCP servers (Model Context Protocol, the standard way AI agents call tools), so an assistant such as Claude can search through them without code.',
    },
    {
      kind: 'p',
      text: 'Freshness here means how recently the service fetched its copy of a page, which matters more than when the page was published. An index stores copies and refreshes them by crawling again, so a page that changed since the last crawl comes back out of date unless the service fetches it live. Exa and Tavily let a request set the maximum age of a copy, and SerpApi runs each request live in a full browser.',
    },

    { kind: 'h2', id: 'agent-indexes', text: 'Their own index, built for agents' },

    { kind: 'h3', id: 'exa', text: 'Exa' },
    {
      kind: 'p',
      text: '[Exa](' +
        EXA +
        ') calls itself “The world’s data for AI agents”, and [its search page](' +
        EXA_SEARCH +
        ') says it searches “Exa’s own index of 100 billion documents”.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** search types from Lite at about 450 milliseconds to Deep at 4 to 15 seconds, with each result’s content as highlights, full text or a summary. Its search page says it crawls more than 3.5 billion pages a day, and a request can ask for a fresh copy of pages that change often.',
        '**Price as listed:** [per 1,000 searches](' +
          EXA_PRICING +
          ') of up to 10 results, Lite is $4, Auto $7 and Deep $12. Page contents are $1 per 1,000 pages and the Answer endpoint $5 per 1,000. New accounts get $10 of credit, up to 2,500 Lite searches, and the free balance resets to $10 on the first of each month.',
        '**Where it stops:** each result beyond 10 costs $1 per 1,000 more. Its home page says it searches “the largest index of public web and private information” and doesn’t say what the private information covers. Its search page lists 70M+ businesses, 1B+ people records and job postings, with partners including Crunchbase, ZoomInfo and Similarweb.',
        '**Best for:** agents that need page text from a large index at low latency, and company and people data from the same service.',
      ],
    },

    { kind: 'h3', id: 'parallel', text: 'Parallel' },
    {
      kind: 'p',
      text: '[Parallel](' +
        PARALLEL_SEARCH +
        ') describes its index as “billions of pages covering the full depth and breadth of the public web”, with millions of pages added daily.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** ranked excerpts, with each address “distilled into the highest-value tokens” for a model’s context window. [Its quickstart](' +
          PARALLEL_QS +
          ') gives turbo a median of 200 milliseconds, fast around 700 milliseconds and advanced about 3 seconds. Beyond search it sells Extract for pages, Task for research, FindAll for building lists and Monitor for watching the web.',
        '**Price as listed:** [its documentation](' +
          PARALLEL_DOCS_PRICING +
          ') gives $1 per 1,000 searches on turbo and fast and $5 on basic and advanced, each with 10 results. Extract is $1 per 1,000 addresses, Task $5 to $2,400 per 1,000 runs by processor, and Monitor from $3 per 1,000 checks. [Its pricing page](' +
          PARALLEL_PRICING +
          ') lists a free tier with web search through its hosted MCP server and no account. Its Build plan adds $5 of free use a month with a payment card on file, plus up to $80 at sign-up.',
        '**Where it stops:** in its own words, its index covers the public web.',
        '**Best for:** agents that search many times per task and want short, dense excerpts from $1 per 1,000.',
      ],
    },

    { kind: 'h2', id: 'search-and-answers', text: 'Search with answers in one call' },

    { kind: 'h3', id: 'tavily', text: 'Tavily' },
    {
      kind: 'p',
      text: '[Tavily](' +
        TAVILY_PRICING +
        '), shown as “Tavily by Nebius” on its pricing page, sells search, extract, map, crawl and research endpoints for agents, paid in credits.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** ranked results with a snippet and a relevance score, plus the full page text and a written answer when a request asks for them, up to 20 results. [Its search documentation](' +
          TAVILY_SEARCH +
          ') offers 4 depths from ultra-fast to advanced, filters by day, week, month or year, and a maximum age for cached copies, where 0 always fetches the page live.',
        '**Price as listed:** a basic, fast or ultra-fast search costs 1 credit and an advanced search 2, per [its credits page](' +
          TAVILY_CREDITS +
          '). Credits are $0.008 each pay as you go, or $8 per 1,000 basic searches, falling to $0.005 on the $500 Growth plan of 100,000 credits a month. The free Researcher plan gives 1,000 credits every month without a payment card.',
        '**Where it stops:** on free plans, fetching a page live is best effort and can return an error, its documentation says. Extract bills 1 credit per 5 pages at basic depth.',
        '**Best for:** agent builders who want search, page text and an answer from one endpoint, with a monthly free allowance to prototype on.',
      ],
    },

    { kind: 'h3', id: 'linkup', text: 'Linkup' },
    {
      kind: 'p',
      text: '[Linkup](' +
        LINKUP +
        ') calls itself “The Web Search API for AI”, with sourced, cited answers and full-text snippets from across the web.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** search in fast, standard and deep modes, a fetch endpoint for single pages and asynchronous research. Its home page says teams can “tune the index, pick the sources, set the freshness”, and it sells a private index for a company’s own documents.',
        '**Price as listed:** [per call](' +
          LINKUP_PRICING +
          '), a standard search is $0.005 for results, $5 per 1,000, or $0.006 with a sourced answer. Deep search is $0.05, fetch $0.001 to $0.011 and research $0.25 to $2.50. New accounts with a professional email get $20 of credit, and eligible accounts are topped back up to $20 each month.',
        '**Where it stops:** its pages don’t say whose index the search runs on or how often pages are crawled again.',
        '**Best for:** teams that want cited answers or raw results at a flat $5 per 1,000, with a monthly credit to start on.',
      ],
    },

    { kind: 'h3', id: 'perplexity', text: 'Perplexity' },
    {
      kind: 'p',
      text: '[Perplexity’s Search API](' +
        PPLX_QS +
        ') “returns real-time, ranked web results as structured data”: each result’s title, address, page text, date and last update, with no generated answer.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** up to 5 related queries in one request, billed as one, up to 20 results, and filters by domain, language and country. Its Agent API also offers Sonar, which Perplexity calls its “grounded search model”, for a written answer.',
        '**Price as listed:** [$5 per 1,000 requests](' +
          PPLX_PRICING +
          '), or $1 per 1,000 with Fast Search, and failed or rate-limited requests aren’t billed. Sonar is [listed at $0.25 per million input tokens and $2.50 per million output tokens](' +
          PPLX_MODELS +
          ').',
        '**Where it stops:** its pricing page lists no free tier, and its search quickstart doesn’t state the size of the index or how often it is refreshed.',
        '**Best for:** teams that send several queries per question and want page text back, from $1 per 1,000 on the fast tier.',
      ],
    },

    { kind: 'h2', id: 'independent', text: 'Independent indexes' },

    { kind: 'h3', id: 'brave', text: 'Brave Search API' },
    {
      kind: 'p',
      text: '[Brave](' +
        BRAVE +
        ') says every result “comes from Brave’s own independent index, crawled and ranked by Brave”, with no fallback to another search engine.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** results with addresses, text, news and images, and up to 5 extra snippets per result. Its LLM Context endpoint returns “the best passages from the best pages”, and [its documentation](' +
          BRAVE_DOCS +
          ') filters results to the last day, week, month, year or a date range.',
        '**Price as listed:** Search is $5 per 1,000 requests at 50 queries per second. Answers, grounded answers with citations, is $4 per 1,000 plus $5 per million tokens, at 2 queries per second. Each plan includes $5 of free credit every month, and the page’s headline offers up to $20 a month in free calls.',
        '**Where it stops:** storing results or training models on them needs a plan that includes storage rights, its FAQ says.',
        '**Best for:** teams that want an independent index with clear terms on storage and training.',
      ],
    },

    { kind: 'h3', id: 'you', text: 'You.com' },
    {
      kind: 'p',
      text: '[You.com](' +
        YOU +
        ') says it “operates its own web crawler, web index, and news index”, and that its results are not resold from Google, Bing or another search engine.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** web and news results with the passages that match the query, in under 1,000 milliseconds. The full page comes back as clean text when an agent needs more, and research endpoints run from a quick pass to a deep one.',
        '**Price as listed:** [Web Search and Answer are $5 per 1,000 calls](' +
          YOU_PRICING +
          '), page contents $1 per 1,000 pages and research $12 to $1,200 per 1,000. New accounts get $10 of credit, about 2,000 searches, and its MCP server gives 100 free searches a day with no key.',
        '**Where it stops:** the full page is a separate call, at $1 per 1,000 pages.',
        '**Best for:** agents that need news beside web results from an independent index.',
      ],
    },

    { kind: 'h2', id: 'serp', text: 'Google’s results as data' },
    {
      kind: 'p',
      text: 'A SERP API (search engine results page API) runs a search on Google and returns the results page as structured data. That covers the links, the knowledge panel, the Maps and Shopping blocks and related questions. Its copy is as fresh as Google’s results at the moment of the call.',
    },

    { kind: 'h3', id: 'serpapi', text: 'SerpApi' },
    {
      kind: 'p',
      text: '[SerpApi](' +
        SERPAPI +
        ') scrapes “Google and other search engines”, among them Bing, Baidu, DuckDuckGo, Yahoo, Yandex and Naver, and returns the results in structured or plain text form.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** organic results plus Maps, Local, Shopping, direct answers and the Knowledge Graph, each request run in a full browser. Its U.S. Legal Shield covers the scraping and parsing of search engine data, with up to $2 million in coverage on the Production plan and higher.',
        '**Price as listed:** [monthly plans](' +
          SERPAPI_PRICING +
          ') run from free for 250 searches to Cloud plans of many millions. The $25 plan buys 1,000 searches, the $150 plan 15,000 and the $3,750 plan 1 million, or $3.75 per 1,000, each with an hourly limit.',
        '**Where it stops:** at small volumes it costs the most per search of any service here. Its page says the shield covers collecting the data, and how the data is used stays with the team using it.',
        '**Best for:** teams that need Google’s exact results page, its many blocks and other engines, with a legal shield.',
      ],
    },

    { kind: 'h3', id: 'serper', text: 'Serper' },
    {
      kind: 'p',
      text: '[Serper](' +
        SERPER +
        ') calls itself “The World’s Fastest & Cheapest Google Search API”, with results in 1 to 2 seconds.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** Google’s organic results, knowledge graph, “People also ask” and related searches, plus endpoints for images, news, maps, places, videos, shopping, Scholar, patents and autocomplete.',
        '**Price as listed:** prepaid packs from $50 for 50,000 queries, $1 per 1,000 at 50 queries per second, to $3,750 for 12.5 million, $0.30 per 1,000 at 300 per second. New accounts get 2,500 free queries without a payment card.',
        '**Where it stops:** credits are valid for 6 months, and the results come from Google alone.',
        '**Best for:** the cheapest Google results at volume.',
      ],
    },

    { kind: 'h2', id: 'model-grounding', text: 'Grounding inside a model' },

    { kind: 'h3', id: 'google-grounding', text: 'Grounding with Google Search' },
    {
      kind: 'p',
      text: 'Grounding with Google Search lets Gemini decide whether a search would improve its answer. If so, the model “automatically generates one or multiple search queries and executes them”, in the words of [Google’s documentation](' +
        GOOGLE_GROUNDING +
        '), then answers with citations to the pages it used.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** Google’s own results inside the model call, with no separate search account.',
        '**Price as listed:** on Gemini 3 and newer models, [5,000 search queries a month are free](' +
          GOOGLE_PRICING +
          '), shared across models, then $14 per 1,000 queries. Each query the model runs is billed, so a prompt that sets off 2 searches counts twice.',
        '**Where it stops:** results arrive inside Gemini’s answer, with a block of search suggestions the app renders under Google’s terms.',
        '**Best for:** teams already building on Gemini.',
      ],
    },

    { kind: 'h3', id: 'bing-grounding', text: 'Grounding with Bing Search' },
    {
      kind: 'p',
      text: 'Grounding with Bing Search took the Bing Search APIs’ place in Microsoft’s agents service. The agent decides to search, Bing returns relevant results to the model, and the model writes the answer with citations.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** Bing’s results inside Microsoft Foundry agents, filtered by freshness, market and language.',
        '**Price as listed:** $14 per 1,000 transactions at 150 per second, on [Microsoft’s pricing page](' + MS_PRICING + ').',
        '**Where it stops:** developers and end users don’t receive the raw results, [its documentation](' + MS_BING_TOOLS + ') says. The app must show the website citations and the Bing query link in the form Microsoft provides, and the queries leave the Azure compliance boundary.',
        '**Best for:** teams building agents on Microsoft Foundry who need answers and have no need to keep the raw results.',
      ],
    },

    { kind: 'h2', id: 'compared', text: 'Web search APIs compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Web search APIs for AI agents and LLMs. Prices in US dollars per 1,000 searches from each provider’s own pages, 11 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['No search: the model alone', 'No call to pay for', 'Tokens only', 'Knows nothing after its training data ends', 'Questions whose answers don’t change'],
        ['By hand: a person searches and pastes sources', 'Judgement on every source', 'Your team’s hours', 'Falls behind an agent’s volume', 'A few questions a week'],
        [
          'Own index for agents: Exa, Parallel',
          'Page text or excerpts sized for a model',
          'Exa: $4 to $12\nParallel: $1 to $5',
          'Exa: “private information” undefined\nParallel: “the public web”',
          'Agents that read page text at speed',
        ],
        [
          'Search with answers: Tavily, Linkup, Perplexity',
          'Results, page text and cited answers in one call',
          'Tavily: $5 to $8\nLinkup: $5\nPerplexity: $1 to $5',
          'Tavily: live fetch best effort when free\nLinkup: index not described\nPerplexity: no free tier listed',
          'One endpoint for search and an answer',
        ],
        [
          'Independent index: Brave, You.com',
          'Own crawl and ranking, no resold results',
          'Brave: $5\nYou.com: $5',
          'Brave: storage needs storage rights\nYou.com: full pages $1 extra',
          'An independent index, with news',
        ],
        [
          'Google’s results as data: SerpApi, Serper',
          'Google’s live results page, structured',
          'SerpApi: $25 at 1,000 a month, $3.75 at 1 million\nSerper: $0.30 to $1',
          'What Google shows any visitor',
          'Google’s exact results at volume',
        ],
        [
          'Grounding in a model: Google, Microsoft',
          'Search run by the model, answer with citations',
          'Google: $14 after 5,000 free a month, up to 1,500 a day\nMicrosoft: $14',
          'Google: inside Gemini\nMicrosoft: no raw results',
          'Teams on Gemini or Microsoft Foundry',
        ],
        [
          'Obsession (ours): lookup, facts, evidence, index, notify; [Competitor tracking](/recipes/competitor-tracking), [Price watch](/recipes/price-watch), [Trial teardown](/recipes/trial-teardown)',
          'What companies show only to customers, dated with a screenshot',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Every step short of paying, at any company your team names',
          'Emails, member prices, trial limits and cancel offers, kept over time',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Each provider publishes its own accuracy benchmark, run on its own setup. [Parallel’s product page](' +
        PARALLEL_SEARCH +
        ') reports 97% for its Basic and Advanced modes on a 100-question sample of SimpleQA Verified, a set of short factual questions with known answers, from a run on 9 September 2026. [You.com’s page](' +
        YOU +
        ') reports 92.1% on SimpleQA with full pages, at a median of 1,048 milliseconds, from its open source test harness. Before signing a volume plan, run 50 to 100 of your agent’s real questions through 2 or 3 services and score the answers yourself.',
    },

    { kind: 'h2', id: 'cost', text: 'What a month of searches costs' },
    {
      kind: 'p',
      text: 'List prices pull furthest apart at volume. At 3 list prices from the comparison, before free tiers and volume deals, a month of searches at example volumes costs:',
    },
    {
      kind: 'table',
      caption: 'Example volumes. $1: Parallel fast, Perplexity Fast Search, Serper’s smallest pack. $5: Brave, You.com, Linkup, Perplexity, Parallel advanced. $14: Google and Microsoft grounding',
      cols: ['Searches a month', 'At $1 per 1,000', 'At $5 per 1,000', 'At $14 per 1,000'],
      rows: [
        ['10 million', '$10,000', '$50,000', '$140,000'],
        ['1 million', '$1,000', '$5,000', '$14,000'],
        ['100,000', '$100', '$500', '$1,400'],
      ],
    },
    {
      kind: 'p',
      text: 'At 10 million searches a month, the gap between the $1 and $14 tiers is $130,000 a month, before tokens. Parallel’s and Perplexity’s $1 tiers are their fast modes, so test answer quality on the tier your team plans to pay for, and add the token cost of what each search returns.',
    },

    { kind: 'h2', id: 'example', text: 'One question, 2 kinds of source' },
    {
      kind: 'p',
      text: 'An agent is asked what Northgate, a software company, offers new subscribers this month. Any web search API finds Northgate’s pricing page, a blog post about an autumn sale and perhaps a review. Most of the offer a new subscriber receives was never published. It arrived as a 20% code in the welcome email at 09:04 and a reminder on day 3, with a lower price after sign-in and a discount offered in the cancel flow.',
    },
    {
      kind: 'art',
      caption: 'The search API answers correctly from what Northgate published. The offer a new subscriber gets sits in an inbox and on signed-in screens.',
      art: {
        kind: 'report',
        title: 'northgate.example · new subscriber offers',
        period: 'An agent’s question in October 2026: what does Northgate offer new subscribers this month',
        cols: ['What the agent needs', 'From a search API', 'Behind the login'],
        rows: [
          { name: 'Plan prices', cells: ['Pricing page: Pro £29', '£29 public, £24 signed in'], tone: 'info' },
          { name: 'Sale banner', cells: ['Blog post, 28 Oct', 'Same banner, dated'], tone: 'info' },
          { name: 'Welcome offer', cells: ['Not published', '20% code, emailed 09:04'], tone: 'ok' },
          { name: 'Day 3 reminder', cells: ['Not published', '“Your code ends Friday”'], tone: 'ok' },
          { name: 'Trial limit', cells: ['“Generous free plan”', '3 projects, 1 seat'], tone: 'ok' },
          { name: 'Cancel offer', cells: ['Not published', '50% off for 3 months to stay'], tone: 'ok' },
        ],
        notes: [
          'A search API answers from pages any visitor can open. The code, the reminder, the signed-in price and the save offer were shown or sent to a signed-up customer.',
          'Northgate is an invented company.',
        ],
      },
    },

    { kind: 'h2', id: 'behind-the-login', text: 'What no web search API can see' },
    {
      kind: 'p',
      text: 'A search index is built by a crawler, a program that requests public addresses, stores a copy of each page and follows its links. It holds what a website publishes to anyone, and 4 kinds of content stay out of it:',
    },
    {
      kind: 'list',
      items: [
        '**Signed-in pages.** After sign-in a site sets a session cookie, a token the browser sends with every request to prove which account it is. A crawler has no account, so it gets the login page, never the member price, the trial’s limits inside the app or the quote a form returns.',
        '**Messages.** Welcome emails, reminders, renewal notices and texts go to an inbox or a phone, which has no public address a crawler can request.',
        '**Offers that depend on who asks.** The price and the offer change with the country, the plan and the day of the trial, so one anonymous visit sees one version at best.',
        '**History.** An index keeps the latest copy of a page. The offer a company emailed new subscribers in October is on no page in November, so it has to be kept the day it arrives; it can’t be collected later.',
      ],
    },
    {
      kind: 'p',
      text: 'Agents that sign in for themselves meet one-time codes, two-step checks and bot defences, and [can AI agents log in to websites](/blog/can-ai-agents-log-in-to-websites) sets out what works and what’s allowed. [The web behind the login](/blog/the-web-behind-the-login) describes what sits behind each step, from the sign-up to the cancel flow.',
    },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. A web search API answers what a company publishes. Obsession answers what it sends and shows its customers, kept for as long as anyone follows the company, so an agent calls each for its own half of the question.',
    },
    {
      kind: 'p',
      text: '[Obsession’s API and MCP](/developers) give an agent 5 verbs, the same over MCP, the HTTP API and TypeScript and Python SDKs:',
    },
    {
      kind: 'list',
      items: [
        '**lookup:** is a company covered, and since when.',
        '**facts:** what it showed its customers, by kind, step and date.',
        '**evidence:** the raw email or page behind a fact.',
        '**index:** add a company not yet covered.',
        '**notify:** each new fact sent to a webhook, an address in your app that receives it the moment it lands.',
      ],
    },
    {
      kind: 'p',
      text: 'Obsession’s agents have run 1,500 sign-ups, baskets and checkouts at real companies, and counting. [The sample data](/sample-output) shows one real store’s record in every format it comes in.',
    },
    {
      kind: 'cta',
      text: 'What companies show only signed-up customers, as data for your agents. Emails, member prices, trial limits, quotes and offers, each dated with a screenshot, behind 5 verbs over MCP, the API and SDKs.',
      to: '/developers',
      label: 'See the API and MCP',
    },

    { kind: 'h2', id: 'choose', text: 'Which to choose, by job' },
    {
      kind: 'p',
      text: 'Use Obsession when your agent has to answer what a named company sends or shows its customers. That means the welcome offer, the member price, the trial’s limits and the save offer, each dated, for as long as anyone follows the company. Search APIs answer what companies publish, and an agent that needs both calls one of each. For the public web:',
    },
    {
      kind: 'list',
      items: [
        '**The cheapest Google results at volume:** Serper, from $0.30 per 1,000 on its largest pack. SerpApi suits teams that need many engines, the Maps and Shopping blocks and a legal shield.',
        '**Page text or excerpts for a model:** Exa for a large index with highlights, full text or summaries, and Parallel for dense excerpts from $1 per 1,000.',
        '**One endpoint for search, page text and an answer:** Tavily, or Linkup for a flat $5 per 1,000 with cited answers.',
        '**Several queries per question:** Perplexity’s Search API, with up to 5 queries billed as one request.',
        '**An independent index with storage terms:** Brave, or You.com for news and web results together.',
        '**Already on Gemini or Microsoft Foundry:** the provider’s own grounding, when the app doesn’t need the raw results.',
        '**Free to prototype:** Serper’s 2,500 queries, Tavily’s 1,000 credits a month and Exa’s $10 a month. Linkup gives eligible accounts $20 a month, You.com 100 searches a day through MCP and Google 5,000 grounded queries a month, up to 1,500 a day.',
      ],
    },
    {
      kind: 'p',
      text: '[Exa vs Tavily vs Firecrawl vs Parallel](/blog/exa-vs-tavily-vs-firecrawl) puts 4 of them head to head with a worked example, and [Exa alternatives](/blog/exa-alternatives) sorts every option by job. [How Obsession compares with search engines, email archives and panels](/compare) shows what each of them holds past the login.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about web search APIs for AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best web search API for AI agents?',
          a: 'It depends on the job. Serper is the cheapest way to get Google’s results, and Exa and Parallel return page text and excerpts sized for a model. Tavily and Linkup return search and a cited answer in one call, and Brave and You.com run independent indexes. For what a company shows only to signed-up customers, such as its emails, member prices and cancel offers, Obsession keeps each one dated with a screenshot, by API or MCP.',
        },
        {
          q: 'What is the cheapest web search API for an LLM?',
          a: 'Serper’s largest prepaid pack works out at $0.30 per 1,000 Google searches and its smallest at $1. Parallel’s turbo and fast modes and Perplexity’s Fast Search are $1 per 1,000. Count the tokens too: full page text for 10 results can cost the model more than the search itself.',
        },
        {
          q: 'Is there a free web search API for LLMs?',
          a: 'Several have free allowances. Serper gives 2,500 queries without a payment card, Tavily 1,000 credits a month and Exa $10 of credit a month. Linkup gives eligible accounts $20 a month. You.com’s MCP server allows 100 searches a day with no key, and Google’s grounding includes 5,000 search queries a month on Gemini 3 and newer models.',
        },
        {
          q: 'Is there a Google search API for AI agents?',
          a: 'Google’s Custom Search JSON API is closed to new customers, and existing customers have until 1 January 2027 to move. Google sells grounding with Google Search inside Gemini instead, with 5,000 search queries a month free, then $14 per 1,000. SerpApi and Serper return Google’s results page as structured data from $0.30 to $25 per 1,000.',
        },
        {
          q: 'What replaced the Bing Search API?',
          a: 'Microsoft retired the Bing Search APIs on 11 August 2025 and points customers to Grounding with Bing Search in its agents service, at $14 per 1,000 transactions. The model receives Bing’s results and writes the answer, and Microsoft says developers and end users don’t get the raw content.',
        },
        {
          q: 'What is the difference between a web search API and grounding?',
          a: 'A web search API returns results to your code, which decides what to pass to the model and what to keep. Grounding is the pattern of answering from fetched text, and a grounding tool inside a model provider runs the search for the model and returns its answer with citations.',
        },
        {
          q: 'Can a web search API see data behind a login?',
          a: 'Their pages describe search over the open web and, for Exa, partner data. A welcome email, a member price, a trial’s limits and a save offer reach only a signed-up customer, so none of them reaches a search index. Obsession collects them at any company a team names, each item dated with a screenshot.',
          link: { label: 'The web behind the login', to: '/blog/the-web-behind-the-login' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about another service comes from that service’s own pricing, product and documentation pages on 11 November 2026, with prices in US dollars as listed that day. Latency and benchmark figures are each company’s own. We did not run the services. The monthly and token costs are list prices applied to example volumes. Northgate and every offer in its picture are invented.',
    },
  ],

  sources: [
    { title: 'Overview of web grounding capabilities in Foundry', publisher: 'Microsoft Learn', url: MS_OVERVIEW, date: '2026-04-08' },
    { title: 'Grounding with Google Search', publisher: 'Google AI Studio documentation', url: GOOGLE_GROUNDING },
    { title: 'Use Grounding with Bing Search tools with the agents API', publisher: 'Microsoft Learn', url: MS_BING_TOOLS, date: '2026-10-12' },
    { title: 'Bing Search APIs retiring on August 11, 2025', publisher: 'Microsoft Lifecycle', url: MS_LIFECYCLE, date: '2025-05-15' },
    { title: 'Bing APIs and Grounding with Bing Search pricing', publisher: 'Microsoft', url: MS_PRICING },
    { title: 'Custom Search JSON API overview', publisher: 'Google for Developers', url: GOOGLE_CSE },
    { title: 'Exa home page', publisher: 'Exa', url: EXA },
    { title: 'Search API', publisher: 'Exa', url: EXA_SEARCH },
    { title: 'Pricing', publisher: 'Exa', url: EXA_PRICING },
    { title: 'Search', publisher: 'Parallel', url: PARALLEL_SEARCH },
    { title: 'Search quickstart', publisher: 'Parallel documentation', url: PARALLEL_QS },
    { title: 'Pricing', publisher: 'Parallel documentation', url: PARALLEL_DOCS_PRICING },
    { title: 'Pricing', publisher: 'Parallel', url: PARALLEL_PRICING },
    { title: 'Pricing', publisher: 'Tavily', url: TAVILY_PRICING },
    { title: 'Search endpoint', publisher: 'Tavily documentation', url: TAVILY_SEARCH },
    { title: 'API credits', publisher: 'Tavily documentation', url: TAVILY_CREDITS },
    { title: 'Linkup home page', publisher: 'Linkup', url: LINKUP },
    { title: 'Pricing', publisher: 'Linkup documentation', url: LINKUP_PRICING },
    { title: 'Search API quickstart', publisher: 'Perplexity documentation', url: PPLX_QS },
    { title: 'Pricing', publisher: 'Perplexity documentation', url: PPLX_PRICING },
    { title: 'Agent API models', publisher: 'Perplexity documentation', url: PPLX_MODELS },
    { title: 'Brave Search API', publisher: 'Brave', url: BRAVE },
    { title: 'Web search', publisher: 'Brave Search API documentation', url: BRAVE_DOCS },
    { title: 'Web Search API', publisher: 'You.com', url: YOU },
    { title: 'API pricing', publisher: 'You.com', url: YOU_PRICING },
    { title: 'SerpApi home page', publisher: 'SerpApi', url: SERPAPI },
    { title: 'Pricing', publisher: 'SerpApi', url: SERPAPI_PRICING },
    { title: 'Serper home page', publisher: 'Serper', url: SERPER },
    { title: 'Gemini API pricing', publisher: 'Google AI Studio documentation', url: GOOGLE_PRICING },
  ],

  related: [
    'exa-vs-tavily-vs-firecrawl',
    'exa-alternatives',
    'can-ai-agents-log-in-to-websites',
    'the-web-behind-the-login',
    'recipe:competitor-tracking',
    'recipe:price-watch',
    '/developers',
  ],
}
