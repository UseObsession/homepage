import type { BlogPost } from './types'

/* AI visibility wave (_research/seo/ai-visibility-23nov/PLAN.md, 23 Nov 2026): tools in the Vercel AI SDK.
   Primary "vercel ai sdk tools"; also "vercel ai sdk tool calling", "vercel ai sdk agents". Reader: developers giving an agent
   real-world tools. The AI SDK is described only from its own documentation (ai-sdk.dev), read on 23 Nov 2026. Code is
   described step by step because blog posts have no code block; names are the ones the docs show (tool, inputSchema, execute,
   generateText, stopWhen, ToolLoopAgent, createMCPClient). Obsession's calls exactly as pages/developers.ts and pieces/email.ts
   write them. larkfield.example is invented. Prices typed from src/content/prices.ts on 23 Nov 2026 (inbox $0.50, US number
   $2, text $0.015). No dashes. */

const SDK_TOOLS = 'https://ai-sdk.dev/docs/foundations/tools'
const SDK_AGENTS = 'https://ai-sdk.dev/docs/agents/building-agents'
const SDK_MCP = 'https://ai-sdk.dev/docs/ai-sdk-core/mcp-tools'

export const post: BlogPost = {
  slug: 'vercel-ai-sdk-tools',
  title: 'Vercel AI SDK tools: tool calling and agents, with an inbox and number for the agent',
  dek: 'How tools, tool calling and agents work in the Vercel AI SDK, from its own documentation, and how to give an agent an inbox, a phone number and a browser it can use for real.',
  metaTitle: 'Vercel AI SDK tools: tool calling and agents, explained',
  description:
    'How tool calling and agents work in the Vercel AI SDK: tool(), stopWhen, ToolLoopAgent and MCP, plus how to give an agent a real inbox and phone number.',
  answer:
    'In the Vercel AI SDK a tool is made with tool(): a description, an input schema and an execute function. Pass tools to generateText with a stopWhen limit so the model can call them in steps, or put them in a ToolLoopAgent. To give the agent real-world tools such as an inbox or a phone number, wrap each call as a tool or load a server’s tools over MCP.',
  primaryKeyword: 'vercel ai sdk tools',
  keywords: ['vercel ai sdk tools', 'vercel ai sdk tool calling', 'vercel ai sdk agents'],
  category: 'Build agent products',
  order: 7,
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 9,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'Where each Vercel AI SDK tool runs',
      rows: [
        {
          name: 'Function tools',
          who: 'Your own code',
          nodes: ['The model', 'Your execute', 'Any API'],
          links: ['calls', 'runs'],
        },
        {
          name: 'Provider-executed tools',
          who: 'The model provider',
          nodes: ['The model', 'Provider runs it', 'Web search'],
          links: ['calls', 'runs on'],
        },
        {
          name: 'MCP tools',
          who: 'Another service',
          nodes: ['The model', 'MCP server', 'Its tools'],
          links: ['loads', 'lists'],
        },
        {
          name: 'Real-world tools',
          who: 'Obsession',
          nodes: ['The agent', 'Inbox, number, browser', 'Any company'],
          links: ['calls', 'reaches'],
          lit: 1,
          ours: true,
        },
      ],
      foot: 'The SDK runs the loop. What a tool reaches in the world is up to you.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A tool lets a language model do something besides write text. The Vercel AI SDK, a TypeScript toolkit for building with models, runs a loop: the model reads the prompt, may call a tool, gets the result and carries on, so the answer can rest on real data and real actions. That loop is tool calling, and an agent is a model that keeps going through it until the task is done.',
    },
    {
      kind: 'p',
      text: 'Everything here about the SDK comes from its own documentation, read on 23 November 2026. The SDK changes between versions, so confirm names against the pages linked for the version you install.',
    },

    { kind: 'h2', id: 'types', text: 'The kinds of tool in the AI SDK' },
    {
      kind: 'p',
      text: '[The AI SDK’s tools page](' + SDK_TOOLS + ') describes 4 kinds:',
    },
    {
      kind: 'list',
      items: [
        '**Function tools.** You give a description, an input schema and an optional execute function. They work with any provider and give you full control.',
        '**Dynamic tools.** Function-style tools whose input and output types are not known when you write the code, such as tools loaded from an MCP server or a database.',
        '**Provider-defined tools.** The provider sets the schema and description, and you supply the execute function. Anthropic’s bash tool is the docs’ example.',
        '**Provider-executed tools.** The provider runs them on its own servers, so you only configure them. OpenAI’s web search is the docs’ example.',
      ],
    },
    {
      kind: 'p',
      text: 'The Model Context Protocol (MCP) is the standard way an agent connects to another service’s tools, and the AI SDK loads those as dynamic tools. Most builders start with function tools, because anything you can call from code becomes a tool.',
    },

    { kind: 'h2', id: 'function-tool', text: 'Making a tool and using it' },
    {
      kind: 'p',
      text: 'The docs show a tool with 3 parts, using the tool helper from the ai package and Zod, a library that describes and checks the shape of data:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**A description,** such as “Get the weather in a location”. The model reads it to decide when to call the tool, so write it for the model.',
        '**An inputSchema,** a Zod object such as one location string with its own description. It tells the model what arguments the tool takes.',
        '**An execute function,** which receives the arguments and returns the result. In the docs’ example it returns a temperature and conditions.',
      ],
    },
    {
      kind: 'p',
      text: 'You pass tools to generateText in a tools object, keyed by name, with a prompt and a model. A tool with an execute function runs automatically when the model calls it. Setting **stopWhen: isStepCount(10)**, as the docs’ example does, lets multi-step calls continue for up to 10 steps, so tool results go back to the model before the SDK stops it.',
    },

    { kind: 'h2', id: 'agents', text: 'Agents: the same loop, packaged' },
    {
      kind: 'p',
      text: '[The AI SDK’s agents page](' +
        SDK_AGENTS +
        ') documents the **ToolLoopAgent** class. You create it with a model, instructions and tools, plus a stopWhen condition. The page gives the default as 20 steps, where each step is one model generation producing text or a tool call, and says you can pass an array of conditions. You call **agent.generate({ prompt })** to get a result with text, or stream for a text stream.',
    },
    {
      kind: 'p',
      text: 'Two habits keep an agent safe. Set a step limit you can afford, because a loop that keeps calling tools keeps costing money. And give each tool a narrow job with a clear description, so a mistake in one call has a small effect.',
    },

    { kind: 'h2', id: 'mcp', text: 'Loading tools from an MCP server' },
    {
      kind: 'p',
      text: '[The AI SDK’s MCP page](' +
        SDK_MCP +
        ') shows a client made with **createMCPClient**, imported from @ai-sdk/mcp. You give it an HTTP transport with the server’s address and optional headers such as an Authorization bearer token, call **mcpClient.tools()** to get the server’s tools, pass them to generateText or streamText, and close the client when you finish, in a finally block for requests that don’t stream. The page also recommends rejecting redirects, and passing a guarded fetch if the server address comes from users.',
    },
    {
      kind: 'p',
      text: 'The trade against a function tool is who maintains it. With MCP the service publishes its tools and you connect. With a function tool you write and own the call. [AI agent tools versus MCP](/blog/ai-agent-tools-vs-mcp) goes through it.',
    },

    { kind: 'h2', id: 'real-world', text: 'Giving the agent real-world tools' },
    {
      kind: 'p',
      text: 'Weather and web search reach public information. An agent that acts as a buyer, a booker or a support rep also needs an address of its own to receive a confirmation link, a phone number to receive the 6-digit code, and a browser that stays signed in. Bought one by one, each is another vendor, key and bill.',
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: phone numbers, inboxes, browsers and sandboxes on one API and one bill. [Its developers page](/developers) shows each piece as one call. Here is the AI SDK pattern with 1 of them, using the call names the page gives:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Create the client and the inbox.** Build **new Obsession({ apiKey: process.env.OBSESSION_API_KEY })**, then call **obsession.inboxes.create()** once. The inbox has its own address, inbox.address.',
        '**Make a sendEmail tool.** Use tool() with a description (“Send an email from the agent’s own inbox”), an inputSchema of to, subject and text strings, and an execute function that calls **inbox.send({ to, subject, text })**.',
        '**Run the agent.** Create a ToolLoopAgent with your model, the instruction “Book tables by email from your own address.” and the sendEmail tool, then call generate with “Ask bookings@larkfield.example for 2 at 19:30 on Friday.”',
        '**Receive the reply.** Each new email reaches your webhook as email.received, so your code passes it to the agent as the next prompt.',
      ],
    },
    {
      kind: 'p',
      text: 'A number follows the same pattern. obsession.numbers.create({ country: "US" }) gives the agent a number, number.sms sends a text, and each text back arrives as sms.received.',
    },

    { kind: 'h2', id: 'one-identity', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Wrapping 3 vendors as 3 sets of tools works. It breaks at the seams: the code arrives by text at one vendor while the browser waits at another, and the email thread and the call log live in separate places. Obsession puts the pieces under one persona: obsession.personas.create({ inbox: true, phone: "US", browser: true }) gives the agent an inbox, a number and a browser as one identity, free while it waits.',
    },
    {
      kind: 'list',
      items: [
        '**The inbox:** [email for agents](/email) sends and receives, keeps threads and attachments, and reads codes and links out of each email. An inbox is $0.50 a month.',
        '**The number:** [a phone number](/phone) sends and receives texts and takes calls, through the voice agent you bring or connect. A US number is $2 a month and a text $0.015.',
        '**The browser:** [a cloud browser](/browser) keeps its logins between runs, so the agent signs in once and stays signed in.',
        '**The event log:** every email, text and page lands in one log, dated, so you can see why the agent did what it did.',
      ],
    },
    {
      kind: 'p',
      text: 'If your agent needs only one piece, one specialist is enough, and [the best email API for AI agents](/blog/best-email-api-for-ai-agents) compares 7. [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) sets 4 vendors beside one. Obsession’s MCP server gives the same calls as tools to any MCP client, and its address comes with your API access. See [the email MCP server guide](/blog/mcp-server-email) for how email tools work. Teams who don’t code can run a blueprint such as the [Inbox agent](/blueprints/inbox-agent). With its own number and browser, the same agent can also confirm appointments by text, chase a supplier’s quote or watch a competitor’s sign-up, whether you run one agent or ten thousand.',
    },
    {
      kind: 'cta',
      text: 'Give your AI SDK agent an inbox, a number and a browser in one call each. Free plan, no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about Vercel AI SDK tools' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do tools work in the Vercel AI SDK?',
          a: 'You define a tool with a description, an input schema and an execute function, and pass it to generateText or an agent. The model decides when to call it, the SDK runs execute with the arguments and returns the result to the model, and the loop continues until the step limit or a final answer.',
        },
        {
          q: 'How does Vercel AI SDK tool calling handle many steps?',
          a: 'Through stopWhen. Setting it to isStepCount(10) lets multi-step calls continue for up to 10 steps, so tool results go back to the model.',
        },
        {
          q: 'What is a ToolLoopAgent in the Vercel AI SDK?',
          a: 'It is the SDK’s agent class. You give it a model, instructions, tools and a stopWhen condition, and call generate with a prompt. It repeats model calls and tool calls until it stops, with a default of 20 steps.',
        },
        {
          q: 'Can the Vercel AI SDK use MCP tools?',
          a: 'Yes. createMCPClient from @ai-sdk/mcp connects to a server over HTTP, mcpClient.tools() returns its tools, and you pass them to generateText or streamText. Close the client when you finish.',
          link: { label: 'AI agent tools versus MCP', to: '/blog/ai-agent-tools-vs-mcp' },
        },
        {
          q: 'How do I give a Vercel AI SDK agent an email address or phone number?',
          a: 'Wrap a call that creates an inbox or number as a tool, or load a server’s tools over MCP. With Obsession, obsession.inboxes.create() gives the agent an address and obsession.numbers.create gives it a number, and replies reach your webhook as events.',
          link: { label: 'See the API and MCP', to: '/developers' },
        },
        {
          q: 'What is the difference between provider-defined and provider-executed tools?',
          a: 'With a provider-defined tool the provider sets the schema and you supply the execute function. A provider-executed tool runs on the provider’s own servers, so you only configure it.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about the Vercel AI SDK comes from its own documentation on tools, agents and MCP, read on 23 November 2026. The patterns follow its documented names and Obsession’s documented calls, and we did not run them against a live account. Larkfield is invented.',
    },
  ],

  sources: [
    { title: 'Tools', publisher: 'AI SDK documentation', url: SDK_TOOLS },
    { title: 'Building agents', publisher: 'AI SDK documentation', url: SDK_AGENTS },
    { title: 'MCP tools', publisher: 'AI SDK documentation', url: SDK_MCP },
  ],

  related: [
    '/developers',
    'ai-agent-tools-vs-mcp',
    'mcp-server-email',
    'openai-agents-sdk-tools',
    'best-email-api-for-ai-agents',
    '/email',
  ],
}
