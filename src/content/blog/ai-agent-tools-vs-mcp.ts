import type { BlogPost } from './types'

/* AI agent tools vs MCP (_research/seo/revamp-22nov/PLAN_articles.md, row 3; Seun's "write them", 22 Nov 2026).
   Primary "ai agent tools vs mcp"; secondaries from Google suggestions (US and UK, 22 Nov:
   autocomplete_articles_22nov.json and autocomplete_stack_mcp_22nov.json): mcp vs function calling, tool calling vs
   mcp, agent skills vs mcp, ai agent tools vs skills, mcp vs api. /glossary/model-context-protocol keeps the
   definition queries (what is mcp, mcp server, mcp meaning) and is linked; /developers keeps "api for ai agents mcp".
   Reader: developers and technical founders building agents. Every definition is read on 22 Nov 2026 from its own
   page: the MCP specification 2026-07-28 (overview and server tools), Anthropic's tool use, Agent Skills and pricing
   pages, OpenAI's function calling guide, Claude Code's MCP guide, the Agent Skills format site, the official MCP
   Registry and Composio. AgentMail's plan facts are as the bundle page /compare/agentmail-twilio-browserbase-e2b read
   them the same day. Obsession's MCP tools and events are as /developers prints them; prices from
   _research/seo/revamp-22nov/BRIEF.md (prices.ts). ferndale.example is invented. British English, no dashes. */

const MCP_SPEC = 'https://modelcontextprotocol.io/specification/2026-07-28'
const MCP_TOOLS = 'https://modelcontextprotocol.io/specification/2026-07-28/server/tools'
const TOOL_USE = 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview'
const OPENAI_FC = 'https://developers.openai.com/api/docs/guides/function-calling'
const ANTHROPIC_PRICING = 'https://platform.claude.com/docs/en/about-claude/pricing'
const CLAUDE_CODE_MCP = 'https://code.claude.com/docs/en/mcp'
const MCP_REGISTRY = 'https://registry.modelcontextprotocol.io/'
const COMPOSIO = 'https://composio.dev/'
const AGENTSKILLS = 'https://agentskills.io/home'
const SKILLS = 'https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview'
const AGENTMAIL = 'https://www.agentmail.to/pricing'

export const post: BlogPost = {
  slug: 'ai-agent-tools-vs-mcp',
  title: 'AI agent tools vs MCP vs skills: what your agent can use, explained for developers',
  dek: 'A tool is the function, MCP is how any AI application finds and calls it, and a skill is the know-how an agent loads to use tools well. Each is defined from its own specification, with how an agent gets an inbox, a phone number and a browser through each.',
  metaTitle: 'AI agent tools vs MCP: what your agent can actually use',
  description:
    'AI agent tools vs MCP vs skills for developers: what each one is, who runs the code, what it costs in tokens, and how an agent gets an inbox through each.',
  answer:
    'AI agent tools vs MCP is a question of layers: a tool is one function a model can ask to run, and MCP (the Model Context Protocol) is the open standard that lets any AI application find and call a server’s tools. Skills sit on top, as folders of instructions and scripts an agent loads only when a task needs them. An agent can use all 3 at once, with tools for actions, MCP to connect them and skills for the procedure.',
  primaryKeyword: 'ai agent tools vs mcp',
  keywords: ['mcp vs function calling', 'tool calling vs mcp', 'agent skills vs mcp', 'ai agent tools vs skills', 'mcp vs api'],
  category: 'Build agent products',
  published: '2026-11-22',
  updated: '2026-11-22',
  readingMinutes: 10,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'flow',
      title: 'One portal sign-up, 3 layers',
      steps: [
        { label: 'Skill', detail: 'portal-signup/SKILL.md loads: the steps, and where to stop', tone: 'info' },
        { label: 'MCP', detail: 'tools/list returns create_inbox and open_browser', tone: 'info' },
        { label: 'Tool call', detail: 'create_inbox gives buyer@ferndale.example', tone: 'ok' },
        { label: 'Event', detail: 'The portal’s login code lands 41 seconds later', tone: 'ok' },
      ],
      foot: 'Example: Ferndale, its portal and the tool names are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Developers building agents, and teams choosing what to connect to Claude, ChatGPT or Cursor, meet 3 words for adding abilities to a model: tools, MCP servers and skills. They sit at different layers of the same agent, which is why they get mixed up. The difference matters most when the agent needs something outside your code, such as an inbox, a phone number or a browser of its own.',
    },

    { kind: 'h2', id: 'what-is-a-tool', text: 'What is a tool for an AI agent?' },
    {
      kind: 'p',
      text: `A tool is a function the model can ask your application to run. [Anthropic’s tool use guide](${TOOL_USE}) calls it tool use, also called function calling. Claude decides when to call a tool from the user’s request and the tool’s description, then returns a structured call that your application runs. [OpenAI’s function calling guide](${OPENAI_FC}) describes the same flow in 5 steps. Your application sends the request with the tools, receives a tool call, runs the code, sends the result back, and gets the final answer or more tool calls.`,
    },
    { kind: 'p', text: 'Each tool is defined by 3 parts:' },
    {
      kind: 'list',
      items: [
        '**Name:** a short identifier, such as get_weather.',
        '**Description:** what the tool does and when to use it. The model reads it to decide whether to call the tool.',
        '**Input schema:** a JSON Schema that lists the arguments, such as a location written as text.',
      ],
    },
    {
      kind: 'p',
      text: 'The model never runs anything itself. In Anthropic’s format, Claude replies with a tool_use block naming the tool and its arguments, your code runs the lookup, and a tool_result block carries the answer back. Tools that run in your application are client tools. Server tools, such as Anthropic’s web search and code execution, run on the provider’s own servers, with no handler code on your side.',
    },
    {
      kind: 'p',
      text: `Every tool costs tokens. Each tool’s name, description and schema count as input tokens on every request, and Anthropic adds a tool use system prompt of 286 tokens on Claude Opus 5.5 when tools are present. Server tools can add fees on top: [Anthropic’s pricing page](${ANTHROPIC_PRICING}) listed web search at $10 per 1,000 searches on 22 November 2026.`,
    },

    { kind: 'h2', id: 'what-is-mcp', text: 'What is MCP?' },
    {
      kind: 'p',
      text: `MCP, the Model Context Protocol, is an open standard for connecting AI applications to outside tools and data through one interface. [The specification](${MCP_SPEC}), version 2026-07-28, names 3 roles that exchange JSON-RPC 2.0 messages, a plain request and response format:`,
    },
    {
      kind: 'list',
      items: [
        '**Host:** the AI application that starts the connection, such as Claude Code or a chat app.',
        '**Client:** the connector inside the host application.',
        '**Server:** the service that provides tools and data, such as an email provider or a company database.',
      ],
    },
    {
      kind: 'p',
      text: `A server can offer 3 kinds of feature: tools (functions for the model to run), resources (data for the person or the model) and prompts (templated messages and workflows). [The tools section of the specification](${MCP_TOOLS}) defines 2 calls. A client sends tools/list to discover a server’s tools, each with a name, a description and an inputSchema in JSON Schema, and tools/call to run one with arguments. The result comes back as content, such as text, with an isError flag.`,
    },
    {
      kind: 'p',
      text: 'MCP sits underneath tool calling and leaves it unchanged. The model still picks a tool and returns its arguments; the host then sends tools/call to the server that owns it. A server written once works in every host that speaks the protocol, so nobody writes a connector per app.',
    },
    {
      kind: 'p',
      text: `Servers run in 2 ways. A local server runs as a program on your machine and talks over standard input and output, which [Claude Code’s MCP guide](${CLAUDE_CODE_MCP}) calls a stdio server. A remote server answers over HTTP, which the same guide recommends for cloud services: claude mcp add --transport http, followed by a name and the server’s address. A server added this way is private to one project by default. The flag --scope project shares it with the team through a .mcp.json file, and --scope user makes it available across all your projects.`,
    },
    {
      kind: 'p',
      text: `[The official MCP Registry](${MCP_REGISTRY}) is the public directory of MCP servers. Managed services such as [Composio](${COMPOSIO}) wrap more than 1,700 apps as tools behind one MCP server and handle each app’s sign-in. Web search is one of the most common tools to add, and [the best web search APIs for AI agents](/blog/best-web-search-api-for-ai-agents) compares the providers. [The glossary](/glossary/model-context-protocol) defines hosts, clients and servers in more depth.`,
    },

    { kind: 'h2', id: 'what-are-skills', text: 'What are agent skills?' },
    {
      kind: 'p',
      text: `A skill is a folder of instructions, scripts and reference files that teaches an agent how to do one job. [The Agent Skills format](${AGENTSKILLS}) defines it as a folder containing a SKILL.md file with a name and a description at minimum, plus optional scripts, references and assets. [Anthropic’s Agent Skills guide](${SKILLS}) loads a skill in 3 stages, which it calls progressive disclosure:`,
    },
    {
      kind: 'list',
      items: [
        '**At startup:** only each skill’s name and description, about 100 tokens per skill.',
        '**When a task matches the description:** the body of SKILL.md, under 5,000 tokens.',
        '**As needed:** reference files when the agent reads them, and scripts, whose output enters the context while their code does not.',
      ],
    },
    {
      kind: 'p',
      text: 'A skill holds know-how and doesn’t act on its own. It tells the agent which tools to call, in what order and what to check, and the agent then calls those tools directly or through MCP. The Agent Skills site says a large number of AI tools and agent clients support the format, and Claude Code loads skills from SKILL.md folders. The MCP specification also lists Skills over MCP as an extension, for finding skills through a server.',
    },

    { kind: 'h2', id: 'compared', text: 'AI agent tools vs MCP vs skills, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 22 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to give an AI agent abilities, from each specification and provider’s own pages, as listed on 22 November 2026. Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['No tools: the model alone', 'Writes and reasons with no setup', 'Model tokens only', 'Can’t look anything up or act', 'Drafting and analysis'],
        ['Your own tools, through function calling', 'Any function your code can run, in one request', 'Input tokens for every definition and call', 'Defined per app; formats differ by provider', 'One app calling your own APIs'],
        ['Provider server tools: web search, code execution', 'Run on the provider’s side, with no handler code', 'Tokens, plus fees such as $10 per 1,000 web searches', 'Only the tools that provider offers', 'Search and code runs inside one model’s API'],
        ['An MCP server', 'One server works in Claude Code, Cursor and every other MCP host', 'The standard is free; each server is priced by its maker', 'Annotations untrusted unless the server is trusted', 'A capability used in several apps or by other teams'],
        ['A skill: SKILL.md and scripts', 'Know-how loaded only when a task needs it', 'About 100 tokens per skill until used', 'Calls tools, and holds no inbox or number', 'Procedures the agent keeps getting wrong'],
        ['Composio: managed app connections', '1,700+ apps with sign-in handled, over MCP or SDK', 'Hobby: 100,000 tool calls a month free', 'Works through accounts people already hold', 'Agents acting in a user’s own apps'],
        ['AgentMail: inboxes over API and MCP', 'Email inboxes with webhooks, websockets and an MCP server', 'Free: 3 inboxes\nDeveloper $20 a month', 'Email only', 'An agent that needs an inbox'],
        [
          'Obsession (ours): [Email](/email), [Phone](/phone), [Browser](/browser) and [Sandbox](/sandbox) over API, SDK and MCP',
          'An inbox, a number, a browser and a sandbox as tools, under one identity',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment and at any identity check',
          'Agents that must receive email, texts and calls',
        ],
      ],
    },

    { kind: 'h2', id: 'inbox-number-browser', text: 'How an agent gets an inbox, a phone number or a browser' },
    {
      kind: 'p',
      text: 'A model can’t hold an address. A service outside it has to create the inbox, the number or the browser, keep it running and hand back what arrives. Tools, MCP and skills each cover a different part of that job.',
    },
    { kind: 'h3', id: 'as-a-tool', text: 'As a tool in your own code' },
    {
      kind: 'p',
      text: 'You write a function such as create_inbox that calls an email provider’s API, and describe it to the model with a name, a description and a schema. Sending is the easy half. When a reply or a login code arrives, the provider sends it to a [webhook](/glossary/webhook), an address in your code that receives each event. Your code then wakes the agent and passes the email in as a new message. Texts and calls on a number work the same way, and a browser session has to stay signed in between turns. [Give an AI agent an inbox that signs up and waits](/blog/ai-customers-for-developers) covers the parts in detail, and [long running AI agents](/blog/long-running-ai-agents) covers agents that wait weeks for a reply.',
    },
    { kind: 'h3', id: 'as-mcp', text: 'As an MCP server' },
    {
      kind: 'p',
      text: `A provider with an MCP server lists its tools once, such as creating an inbox, sending an email or opening a browser, and every MCP host can call them. As listed on 22 November 2026, [AgentMail’s pricing page](${AGENTMAIL}) included an MCP server on every plan, beside webhooks and websockets. A server answers when it is called, so new mail still reaches the agent through events: a tool that lists what arrived, or a webhook your code passes on.`,
    },
    { kind: 'h3', id: 'as-a-skill', text: 'As a skill' },
    {
      kind: 'p',
      text: 'A skill holds the procedure: create an inbox, open the portal in a browser, wait for the login code, enter it, and stop at any identity check. It calls those tools and owns none of the pieces itself. That makes it the right place for your rules and the wrong place to keep an inbox.',
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, and its [Build agent products blueprints](/blueprints/build-agent-products) puts email inboxes, phone numbers, a cloud browser and a sandbox on one API and one bill, under one identity. Its MCP server, added with claude mcp add obsession, gives an agent tools to create inboxes, numbers and browsers itself, and the events API shows each email, text and page as it lands, dated. Teams without engineers pick a blueprint such as [Support bot check](/blueprints/support-bot-check), and Obsession runs it and sends them every answer.',
    },
    {
      kind: 'cta',
      text: 'Add the MCP server with one command and give your agent an inbox, a phone number and a browser as tools. The Free plan needs no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'which-to-use', text: 'Which one should you use?' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**A few functions in one app: write tools.** Use function calling when the capability lives in your own code and one application uses it. A pass: the model calls the tool with valid arguments, and your code returns a result it uses.',
        '**The same capability in several apps: use or build an MCP server.** When Claude Code, Cursor and your own agent all need it, or another team will, one server saves writing it again for each. A pass: tools/list shows it in each host, and tools/call runs it.',
        '**A procedure the agent keeps getting wrong: write a skill.** Put the steps, the checks and the stop rules in SKILL.md, with scripts for anything that must be exact. A pass: the description triggers it on the right tasks, and the body stays under about 5,000 tokens.',
        '**Anything the agent must receive or wait for: add a service.** Email, texts, calls and a browser that stays signed in need a provider that holds them and sends events back. A pass: an email sent to the agent reaches your handler, and the agent acts on it.',
      ],
    },
    {
      kind: 'p',
      text: 'Measure the choice in task success, latency from an event landing to the agent acting on it, and cost per call, since every tool definition adds input tokens. [The AI agent infrastructure stack](/blog/ai-agent-infrastructure-stack) maps the 10 layers these choices sit in, and [how to build an AI agent from scratch](/blog/how-to-build-an-ai-agent-from-scratch) wires them into a working loop.',
    },

    { kind: 'h2', id: 'safety', text: 'Limits and safety' },
    {
      kind: 'list',
      items: [
        '**Tools run code.** The MCP specification says tools represent arbitrary code execution, and that descriptions of tool behaviour, such as annotations, are untrusted unless they come from a trusted server.',
        '**People approve.** The specification says hosts must get the user’s explicit consent before invoking any tool, and that a person should be able to deny a call.',
        '**Servers can carry injected instructions.** Claude Code’s guide says to verify you trust each server, because servers that fetch outside content can expose you to prompt injection, text that tries to give the model new orders.',
        '**Skills are software.** Anthropic’s guide says to use skills only from trusted sources and to audit every file, since a skill can direct the agent to call tools or run code.',
        '**More tools cost more.** Every definition is input tokens on every request. Anthropic and OpenAI both offer tool search, which loads rarely used tools only when the model needs them.',
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about AI agent tools vs MCP' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is MCP the same as function calling?',
          a: 'No. Function calling, also called tool calling, is how a model asks to run a tool: it returns the tool’s name and arguments, and an application runs it. MCP is a standard for where tools come from: a server lists them with tools/list and runs them with tools/call, so any MCP host can offer them to its model.',
        },
        {
          q: 'What is the difference between MCP and an API?',
          a: 'An API is a service’s own interface, which a developer writes code against. An MCP server describes some of that service’s actions as tools in one standard format, so an AI application can find and call them with no code written for that service. Many services offer both.',
          link: { label: 'See the API and MCP', to: '/developers' },
        },
        {
          q: 'Agent skills vs MCP: which should I use?',
          a: 'Both, for different jobs. An MCP server gives an agent actions, such as creating an inbox or querying a database. A skill gives it a procedure for using those actions well, and loads only when a task matches its description, so many skills cost little context until they are used.',
        },
        {
          q: 'Do I need an MCP server to give my agent tools?',
          a: 'No. Function calling works with tools defined in your own code. An MCP server helps when the same tools must work in several applications, or when a provider already offers one.',
        },
        {
          q: 'How does an AI agent get an email inbox?',
          a: 'From an email provider built for agents, through its API, its SDK or its MCP server. The provider creates the inbox, and each email that arrives reaches your code as a webhook event or through a tool the agent calls. AgentMail listed 3 free inboxes on 22 November 2026, and agent toolkits add a phone number and a browser on the same identity.',
          link: { label: 'Email for AI agents', to: '/email' },
        },
        {
          q: 'Do MCP tools cost tokens?',
          a: 'Yes. A tool from an MCP server reaches the model as a tool definition, so its name, description and schema count as input tokens like any other tool. Tool search, offered by Anthropic and OpenAI, loads rarely used tools only when the model needs them.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'Sources and dates',
      text: 'Every definition comes from the specification or the provider’s own documentation, checked on 22 November 2026. The MCP specification quoted is version 2026-07-28. Ferndale, the company in the illustration, is invented.',
    },
  ],

  sources: [
    { title: 'Tool use with Claude', publisher: 'Anthropic', url: TOOL_USE },
    { title: 'Function calling', publisher: 'OpenAI', url: OPENAI_FC },
    { title: 'Pricing', publisher: 'Anthropic', url: ANTHROPIC_PRICING },
    { title: 'Specification, version 2026-07-28', publisher: 'Model Context Protocol', url: MCP_SPEC, date: '2026-07-28' },
    { title: 'Tools', publisher: 'Model Context Protocol', url: MCP_TOOLS, date: '2026-07-28' },
    { title: 'Connect Claude Code to tools via MCP', publisher: 'Anthropic', url: CLAUDE_CODE_MCP },
    { title: 'Official MCP Registry', publisher: 'Model Context Protocol', url: MCP_REGISTRY },
    { title: 'Composio', publisher: 'Composio', url: COMPOSIO },
    { title: 'Agent Skills overview', publisher: 'Agent Skills', url: AGENTSKILLS },
    { title: 'Agent Skills', publisher: 'Anthropic', url: SKILLS },
    { title: 'Pricing', publisher: 'AgentMail', url: AGENTMAIL },
  ],

  related: [
    '/blueprints/build-agent-products',
    'recipe:support-bot-check',
    'ai-customers-for-developers',
    'best-web-search-api-for-ai-agents',
    '/glossary/model-context-protocol',
  ],
}
