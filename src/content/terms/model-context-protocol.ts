import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/model-context-protocol: for an engineer building an agent. "best mcp servers" stays with its owner
   (docs/SEARCH.md §2); this page owns the definition. Facts from Anthropic's announcement and modelcontextprotocol.io,
   read 11 Nov 2026. The MCP command is quoted as /developers prints it. */
const DEFINITION =
  'Model Context Protocol (MCP) is an open-source standard that connects AI applications such as Claude or ChatGPT to outside data and tools through one common interface.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Model Context Protocol',
  line: 'An open standard that lets AI applications such as Claude call outside tools and read outside data the same way.',
  meta: {
    path: '/glossary/model-context-protocol',
    title: 'What is the Model Context Protocol (MCP)? A plain guide',
    description:
      'The Model Context Protocol (MCP) is an open standard that connects AI apps such as Claude to outside tools and data. Hosts, clients and servers, defined.',
    answer: `${DEFINITION} Anthropic released it in November 2024. A service with an MCP server can be called by any application that speaks the protocol, with no integration written for each one.`,
    ogImage: '/og/glossary-model-context-protocol.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Model Context Protocol', path: '/glossary/model-context-protocol' },
    ],
  },
  title: 'Model Context Protocol: one standard way for AI apps to use outside tools',
  dek: 'An agent is as useful as what it can reach. MCP gives every AI application the same way to reach a calendar, a database or a data provider, so a service is connected once and works everywhere.',
  primaryKeyword: 'model context protocol',
  keywords: ['what is model context protocol', 'what is mcp', 'mcp meaning', 'mcp server', 'mcp ai'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'developers',
  term: {
    name: 'Model Context Protocol',
    alternateName: ['MCP'],
    definition: DEFINITION,
  },
  blocks: [
    { kind: 'h2', id: 'what-mcp-connects', text: 'What MCP connects' },
    {
      kind: 'p',
      text: 'Anthropic [open-sourced MCP on 25 November 2024](https://www.anthropic.com/news/model-context-protocol) as one protocol in place of the separate integrations each assistant needed for each data source. The [official introduction](https://modelcontextprotocol.io/docs/getting-started/intro) compares it to a USB-C port, one shape of connection with many devices behind it. Claude, ChatGPT, Visual Studio Code and Cursor are among the applications it lists as supporting MCP.',
    },
    {
      kind: 'p',
      text: 'The [specification](https://modelcontextprotocol.io/specification/2026-07-28) is dated 28 July 2026 in its current version. It defines three roles, which exchange messages in JSON-RPC 2.0, a plain request and response format:',
    },
    {
      kind: 'list',
      items: [
        '**Host:** the AI application a person uses, which starts the connection, such as a chat app or a coding tool.',
        '**Client:** a connector inside the host application.',
        '**Server:** a service that provides data and actions, such as a company database or a data provider.',
      ],
    },
    {
      kind: 'p',
      text: 'A server offers tools (functions the model can run), resources (data for the person or the model) and prompts (templated messages and workflows). When someone asks a question, the model picks a tool and the host calls the server. The specification asks hosts to get the user’s explicit consent before any tool runs.',
    },
    { kind: 'h2', id: 'why-agent-builders-ship-it', text: 'Why agent builders use MCP servers' },
    {
      kind: 'p',
      text: 'For a team building an agent, MCP is how the agent reaches facts it can’t produce itself. A model can reason about a competitor, but it can’t have been signed up to that competitor for a month. With an MCP server for each source, the agent asks in plain words. The same server works in every client that supports the protocol, so nobody writes a connector per app.',
    },
    { kind: 'h2', id: 'company-data-over-mcp', text: 'How company data reaches an agent over MCP' },
    {
      kind: 'p',
      text: `${ENTITY} Its MCP server gives an agent the same 5 tools as its API.`,
    },
    {
      kind: 'list',
      items: [
        '**lookup:** is a company covered, and since when.',
        '**facts:** the company’s dated facts, each with its source.',
        '**evidence:** the raw email or page behind a fact.',
        '**index:** add a company that isn’t covered yet.',
        '**notify:** send each new fact to a webhook as it lands.',
      ],
    },
    {
      kind: 'p',
      text: 'Connecting takes one command in Claude Code, claude mcp add obsession, with the server address printed on [the developers page](/developers). From then on an agent can ask what any named competitor emailed new customers this week. Each answer comes back with its date and the email itself, for as long as the company is followed.',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is MCP only for Claude?',
          a: 'No. Anthropic started it and released it as open source. The official introduction lists ChatGPT, Visual Studio Code and Cursor among the applications that support it.',
        },
        {
          q: 'What is the difference between an MCP server and an API?',
          a: 'An API is a service’s own interface, which a developer writes code against. An MCP server describes the service’s tools in the protocol’s format, so any MCP host can find them and let a model call them without custom code.',
          link: { label: 'The API and MCP for developers', to: '/developers' },
        },
        {
          q: 'Does an MCP tool run without asking?',
          a: 'The specification says hosts must get the user’s explicit consent before invoking any tool, and should treat tool descriptions as untrusted unless they come from a trusted server.',
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Introducing the Model Context Protocol',
      publisher: 'Anthropic',
      url: 'https://www.anthropic.com/news/model-context-protocol',
      date: '2024-11-25',
    },
    {
      title: 'What is the Model Context Protocol (MCP)?',
      publisher: 'Model Context Protocol',
      url: 'https://modelcontextprotocol.io/docs/getting-started/intro',
    },
    {
      title: 'Specification, version 2026-07-28',
      publisher: 'Model Context Protocol',
      url: 'https://modelcontextprotocol.io/specification/2026-07-28',
      date: '2026-07-28',
    },
  ],
  related: [
    '/glossary/llm-grounding',
    '/glossary/web-search-api',
    '/glossary/headless-browser',
    '/developers',
    '/compare/obsession-vs-exa',
    'ai-customers-for-developers',
    'what-to-build-with-ai-customers',
    'long-running-ai-agents',
    'best-web-search-api-for-ai-agents',
  ],
}
