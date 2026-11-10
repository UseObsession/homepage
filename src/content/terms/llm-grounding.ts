import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/llm-grounding: for an engineer building an agent that answers about named companies. The definition and
   the grounding sources are Google Cloud's own (Vertex AI docs), read 11 Nov 2026. */
const DEFINITION =
  'LLM grounding is tying a language model’s answer to sources given with the question, such as search results, so each claim can be checked against them.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'LLM grounding',
  line: 'Tying a language model’s answer to sources it was handed at question time, so each claim can be checked.',
  meta: {
    path: '/glossary/llm-grounding',
    title: 'What is LLM grounding? Answers tied to sources you can check',
    description:
      'LLM grounding connects a model’s answer to sources it was given, such as search results or your own documents, so each claim can be checked. How it works.',
    answer: `${DEFINITION} Grounding cuts down answers a model makes up, and each answer is as current and complete as the sources the model was handed.`,
    ogImage: '/og/glossary-llm-grounding.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'LLM grounding', path: '/glossary/llm-grounding' },
    ],
  },
  title: 'LLM grounding: tying an AI model’s answer to sources you can check',
  dek: 'On its own, a model answers from what it learned in training. Grounded, it answers from documents placed in front of it, and can point to each one.',
  primaryKeyword: 'llm grounding',
  keywords: ['what is grounding in ai', 'grounding llm meaning', 'ai grounding', 'grounded generation', 'grounding with search'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'developers',
  term: {
    name: 'LLM grounding',
    alternateName: ['grounding', 'AI grounding', 'grounded generation'],
    definition: DEFINITION,
  },
  blocks: [
    { kind: 'h2', id: 'what-grounding-means', text: 'What grounding means for a language model' },
    {
      kind: 'p',
      text: '[Google Cloud’s documentation](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview) defines grounding as the ability to connect model output to verifiable sources of information. It says grounding reduces hallucinations, the answers a model writes that aren’t factual, and gives each answer links to its sources so it can be audited.',
    },
    {
      kind: 'p',
      text: 'In practice the application fetches sources first, places them in the model’s prompt and asks it to answer from them and cite them. Say a user asks which plan a competitor’s free trial moves them to. Ungrounded, the model guesses from what it learned months ago. Grounded in a search result, it quotes the competitor’s pricing page as it stands today, with the link.',
    },
    { kind: 'h2', id: 'grounding-sources', text: 'Where grounding sources come from' },
    {
      kind: 'p',
      text: 'The sources decide the answer. Google’s own list of grounding options includes Google Search, Google Maps, retrieval from your own data and outside search APIs, Parallel’s among them. Two kinds of source cover most agents:',
    },
    {
      kind: 'list',
      items: [
        '**Public pages,** from a [web search API](/glossary/web-search-api) that returns each page’s address and text.',
        '**Your own documents,** through retrieval-augmented generation (RAG): fetching the passages that match a question from a document store and adding them to the prompt.',
      ],
    },
    { kind: 'h2', id: 'grounding-company-answers', text: 'Grounding answers about what a company sends its customers' },
    {
      kind: 'p',
      text: 'Many questions about a named company turn on what it shows people who sign up. The offer in its welcome email, the price once logged in and the discount in its cancel flow are examples. Public pages can’t ground those answers, because the company never published them.',
    },
    {
      kind: 'p',
      text: `${ENTITY} An agent grounds an answer in those facts with one call over the [API or MCP](/developers), and cites the dated email or screenshot itself.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is grounding the same as RAG?',
          a: 'RAG, retrieval-augmented generation, is one way to ground a model: the application retrieves passages from a document store and adds them to the prompt. Grounding is the wider goal of tying an answer to sources, whether they come from documents, a search API or a data provider.',
        },
        {
          q: 'Does grounding stop hallucinations completely?',
          a: 'No. Google’s documentation says it reduces them. A model can still misread a source or answer beyond it, which is why a grounded answer keeps its citations, so a person can check each one.',
        },
        {
          q: 'What makes a good grounding source?',
          a: 'One that is current, dated and checkable: each fact with the date it was true and a link to the page, email or record it came from. An undated fact can’t tell a model whether it still holds.',
          link: { label: 'Point-in-time data, defined', to: '/glossary/point-in-time-data' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Grounding overview',
      publisher: 'Google Cloud documentation',
      url: 'https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview',
    },
  ],
  related: [
    '/glossary/web-search-api',
    '/glossary/model-context-protocol',
    '/glossary/point-in-time-data',
    '/compare/obsession-vs-exa',
    '/compare/obsession-vs-parallel',
    '/compare/obsession-vs-tavily',
    'what-chatgpt-says-about-your-store',
    'ai-customers-for-developers',
    'best-web-search-api-for-ai-agents',
  ],
}
