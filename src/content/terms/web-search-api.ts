import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/web-search-api: for an engineer choosing a search API for an agent. "best web search api" stays with its
   owner (docs/SEARCH.md §2); this page owns the definition. Each API is described from its own docs, read 11 Nov 2026.
   Exa's home page says it searches "public web and private information" without defining the second, so this page
   doesn't characterise what Exa's index holds. */
const DEFINITION =
  'A web search API is a service that takes a query from a program and returns matching web pages, each with its address, title and text.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Web search API',
  line: 'A service a program calls with a query to get back web pages, each with its address, title and text.',
  meta: {
    path: '/glossary/web-search-api',
    title: 'What is a web search API? What it returns to an AI agent',
    description:
      'A web search API returns pages for a query, each with a URL, title and text for code or a model to read. What Exa, Tavily and Parallel each return.',
    answer: `${DEFINITION} Search APIs built for AI agents, such as Exa, Tavily and Parallel, add page text or excerpts that a language model can read and cite.`,
    ogImage: '/og/glossary-web-search-api.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Web search API', path: '/glossary/web-search-api' },
    ],
  },
  title: 'Web search API: a search engine your code or AI agent can call',
  dek: 'A person reads a page of results. An agent needs the same results as data, with the text of each page attached, so it can answer from them.',
  primaryKeyword: 'web search api',
  keywords: ['what is a web search api', 'web search api meaning', 'search api for ai agents', 'search api for llm'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'developers',
  term: {
    name: 'web search API',
    alternateName: ['search API', 'search API for AI agents'],
    definition: DEFINITION,
  },
  blocks: [
    { kind: 'h2', id: 'what-it-returns', text: 'What a web search API returns' },
    {
      kind: 'p',
      text: 'A program sends a query and gets back a ranked list of results. What comes with each result is what sets one API apart from another. Three built for AI agents describe their results this way in their own docs, read on 11 November 2026:',
    },
    {
      kind: 'list',
      items: [
        '**[Exa](https://docs.exa.ai/reference/search):** each result’s title, URL, an estimated published date, the full page text, highlights from it and a summary.',
        '**[Tavily](https://docs.tavily.com/documentation/api-reference/endpoint/search):** each result’s title, URL, a short description and a relevance score. The parsed page text and a generated answer come on request.',
        '**[Parallel](https://docs.parallel.ai/search/search-quickstart):** takes an objective in plain words and returns each page’s URL, title, publish date and excerpts written for a language model.',
      ],
    },
    {
      kind: 'p',
      text: 'Each is set beside Obsession on its own page: [Obsession vs Exa](/compare/obsession-vs-exa), [Obsession vs Tavily](/compare/obsession-vs-tavily) and [Obsession vs Parallel](/compare/obsession-vs-parallel).',
    },
    { kind: 'h2', id: 'why-agents-use-one', text: 'Why an agent needs a web search API' },
    {
      kind: 'p',
      text: 'A language model answers from what it learned in training, which stops at a date. A search API hands it pages as they stand today, so an agent can answer a question about last week’s price change and cite the page it read. Handing a model sources to answer from is called [LLM grounding](/glossary/llm-grounding).',
    },
    {
      kind: 'p',
      text: 'A support agent checks a supplier’s returns policy before it replies. A research agent reads 30 pages on a market before it writes a brief. Both call search first, then read in full the pages that matter.',
    },
    { kind: 'h2', id: 'what-search-cant-return', text: 'What a public crawler never sees' },
    {
      kind: 'p',
      text: 'A search index holds what its crawler could fetch, and a public crawler doesn’t create accounts or wait for the next email. Behind that [login wall](/glossary/login-wall) sit the welcome email a company sends a new subscriber, its signed-in price and the limits inside its free trial. The offer in its cancel flow is there too, and none of it appears on a page a crawler can open.',
    },
    {
      kind: 'p',
      text: `${ENTITY} An agent calls it beside a search API, to set what a company shows the customers who signed up next to what it publishes.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the difference between a search API and a scraping API?',
          a: 'A search API finds pages for a query. A scraping API fetches a page whose address you already have and returns its content. Many agents use both: search to find the pages, then scrape to read them in full.',
          link: { label: 'Web scraping, defined', to: '/glossary/web-scraping' },
        },
        {
          q: 'How does an agent cite a search result?',
          a: 'It quotes the URL the API returned with the result. Many search APIs also return the passage that matched, so the answer can point at the exact text it relied on.',
        },
        {
          q: 'Which web search API should an agent use?',
          a: 'It depends on what the agent needs back: full page text, short excerpts, a ready-made answer or a relevance score. Our comparisons set each one’s results side by side, from its own docs.',
          link: { label: 'Every comparison', to: '/compare' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Search', publisher: 'Exa docs', url: 'https://docs.exa.ai/reference/search' },
    { title: 'Tavily Search', publisher: 'Tavily docs', url: 'https://docs.tavily.com/documentation/api-reference/endpoint/search' },
    { title: 'Search API quickstart', publisher: 'Parallel docs', url: 'https://docs.parallel.ai/search/search-quickstart' },
  ],
  related: [
    '/glossary/llm-grounding',
    '/glossary/web-scraping',
    '/glossary/model-context-protocol',
    '/compare/obsession-vs-exa',
    '/compare/obsession-vs-tavily',
    '/compare/obsession-vs-parallel',
    'best-web-search-api-for-ai-agents',
    'exa-vs-tavily-vs-firecrawl',
    'exa-alternatives',
  ],
}
