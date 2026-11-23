import type { BlogPost } from './types'

/* AI visibility wave (_research/seo/ai-visibility-23nov/PLAN.md, 23 Nov 2026): tools in the OpenAI Agents SDK.
   Primary "openai agents sdk tools"; also "openai agents sdk tool calling". Reader: developers giving an agent real-world
   tools. OpenAI's SDK is described only from its own documentation (Python and JavaScript sites), read on 23 Nov 2026.
   The code sketch uses the JavaScript SDK's documented pieces (Agent, run, tool with a Zod schema, name, description,
   parameters, execute) and Obsession's calls exactly as src/content/pages/developers.ts and pieces/email.ts write them.
   larkfield.example is invented. Prices typed from src/content/prices.ts on 23 Nov 2026 (inbox $0.50, US number $2, text
   $0.015 each). No dashes. */

const PY_TOOLS = 'https://openai.github.io/openai-agents-python/tools/'
const PY_MCP = 'https://openai.github.io/openai-agents-python/mcp/'
const JS_TOOLS = 'https://openai.github.io/openai-agents-js/guides/tools/'

export const post: BlogPost = {
  slug: 'openai-agents-sdk-tools',
  title: 'OpenAI Agents SDK tools: function tools, hosted tools and MCP, with a working sketch',
  dek: 'The OpenAI Agents SDK gives an agent 3 main kinds of tool. Here is how each works, and how to hand the agent an inbox, a phone number and a browser it can use for real.',
  metaTitle: 'OpenAI Agents SDK tools: function, hosted tools and MCP',
  description:
    'How tool calling works in the OpenAI Agents SDK: function tools, hosted tools and MCP servers, plus a sketch that gives an agent an inbox of its own.',
  answer:
    'The OpenAI Agents SDK gives an agent tools in 3 main ways: function tools that wrap your own code, hosted tools that run on OpenAI’s servers, and MCP servers that expose another service’s tools. To give an agent real-world tools such as an inbox or a phone number, wrap each call in a function tool, or connect a server that offers them.',
  primaryKeyword: 'openai agents sdk tools',
  keywords: ['openai agents sdk tools', 'openai agents sdk tool calling'],
  category: 'Build agent products',
  order: 6,
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
      title: 'Where each OpenAI Agents SDK tool runs',
      rows: [
        {
          name: 'Function tools',
          who: 'Your own code',
          nodes: ['The agent', 'Your function', 'Any API'],
          links: ['calls', 'runs'],
        },
        {
          name: 'Hosted tools',
          who: 'OpenAI’s servers',
          nodes: ['The agent', 'OpenAI hosts it', 'Web, files, code'],
          links: ['calls', 'runs on'],
        },
        {
          name: 'MCP servers',
          who: 'Another service',
          nodes: ['The agent', 'MCP server', 'Its tools'],
          links: ['connects to', 'lists'],
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
      foot: 'The SDK decides how the agent calls a tool. What the tool reaches in the world is up to you.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A tool is something an agent can do besides write text. The OpenAI Agents SDK, in Python and JavaScript, runs a loop: the model reads the task, may call a tool, reads what the tool returned, and repeats until it has an answer. Tool calling is that loop. Most of the work in a useful agent is choosing its tools, and that choice decides what the agent can touch outside the conversation.',
    },
    {
      kind: 'p',
      text: 'The tools are described here from OpenAI’s own documentation, read on 23 November 2026. The SDK moves fast, so check the linked pages for the version you install.',
    },

    { kind: 'h2', id: 'kinds', text: 'The kinds of tool in the SDK' },
    {
      kind: 'p',
      text: '[The Python tools guide](' +
        PY_TOOLS +
        ') and [the JavaScript tools guide](' +
        JS_TOOLS +
        ') group tools into categories. The 3 that matter first are these:',
    },
    {
      kind: 'list',
      items: [
        '**Function tools.** You wrap a function of your own. In Python the SDK reads the name, description and input shape from the function, its type annotations and its docstring. In JavaScript you give the tool a name, a description, a parameters schema (a Zod schema, which also checks the model’s arguments) and an execute function.',
        '**Hosted tools.** These run on OpenAI’s servers beside the model, and the Python page lists web search, file search, code interpreter, image generation and hosted MCP among them. They need the Responses model, and you configure them without writing the tool.',
        '**MCP servers.** The Model Context Protocol (MCP) is the standard way an agent connects to another service’s tools. The SDK can attach a server you run or reach, and a hosted option lets OpenAI call a publicly reachable server for you.',
      ],
    },
    {
      kind: 'p',
      text: 'There are others: agents exposed as tools, so one agent can call another without handing the conversation over, and tools that run in your own environment, such as shell and computer use. The 3 above cover most agents that act on other companies and people.',
    },

    { kind: 'h2', id: 'function-tools', text: 'Function tools: wrap your own code' },
    {
      kind: 'p',
      text: 'A function tool is the most flexible kind, because anything you can call from code becomes something the agent can do. Describe it clearly: the model picks a tool by its name and description, so a vague description produces wrong calls. Keep each tool small, returning a short result the model can read.',
    },
    {
      kind: 'p',
      text: 'The JavaScript SDK’s pattern, as its documentation describes the options, is:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Define the tool.** Call **tool()** from the @openai/agents package with a name (“lookup_order”), a description (“Find an order by its number and return its status.”), a parameters schema written in Zod, here a single orderNumber string, and an execute function that returns the answer as text.',
        '**Hand it to an agent.** Create an **Agent** with a name, instructions (“Answer order questions with the tools you have.”) and the tool in its tools list.',
        '**Run it.** Call **run(agent, "Where is order 4471?")**. The model calls lookup_order with the number, reads what it returns, and writes the answer in finalOutput.',
      ],
    },
    {
      kind: 'p',
      text: 'Check the import names against the version you install, as [the JavaScript guide](' + JS_TOOLS + ') is the reference. Two habits help. Validate inputs, because a model can pass the wrong shape. And return a plain sentence or a small object on failure, so the agent can decide what to try next.',
    },

    { kind: 'h2', id: 'hosted-and-mcp', text: 'Hosted tools and MCP servers' },
    {
      kind: 'p',
      text: 'Hosted tools save you writing a tool for common jobs. Web search and code execution run on OpenAI’s side, so there is no server of yours in the path. The trade is that you choose from what OpenAI offers, on the model the page says each needs.',
    },
    {
      kind: 'p',
      text: '[The Python MCP guide](' +
        PY_MCP +
        ') sets out the options. A hosted MCP tool is added to the agent’s tools, and OpenAI’s Responses API calls a publicly reachable server for you. Streamable HTTP servers, and local servers over standard input and output, are passed to the agent as MCP servers, and the SDK connects while your code runs. The page advises keeping access tokens in the authorisation header, not the address, and connecting only to servers you trust.',
    },
    {
      kind: 'p',
      text: 'The choice between a function tool and an MCP server is mostly about who maintains the tool. With a function tool you write and own it. With MCP, the service publishes its tools and you connect. [AI agent tools versus MCP](/blog/ai-agent-tools-vs-mcp) goes through the trade.',
    },

    { kind: 'h2', id: 'real-world', text: 'Giving the agent real-world tools' },
    {
      kind: 'p',
      text: 'The tools above reach the web and your own systems. An agent that acts as a customer, a buyer or a support rep needs more: an email address that receives the confirmation link, a phone number that receives the 6-digit code, and a browser that stays signed in. These are the pieces most agents lack, and each is one more vendor if you buy them separately.',
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: phone numbers, inboxes, browsers and sandboxes on one API and one bill. [Its developers page](/developers) shows each as one call, and the sketch below wraps one as a function tool, using the call names the page gives:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Create the client and the inbox.** Build **new Obsession({ apiKey: process.env.OBSESSION_API_KEY })**, then call **obsession.inboxes.create()** once. The inbox has its own address, inbox.address.',
        '**Wrap sending as a function tool.** Make a tool named “send_email” with a Zod schema for to, subject and text. Its execute function calls **inbox.send({ to, subject, text })** and returns “Sent from” the inbox address.',
        '**Give it to the agent.** An Agent named “Booking agent”, with the instruction “Book tables by email from your own address.” and send_email in its tools list.',
        '**Run it.** **run(agent, "Ask bookings@larkfield.example for 2 at 19:30 on Friday.")** sends the email from the agent’s own address.',
      ],
    },
    {
      kind: 'p',
      text: 'The reply does not come back through the tool. Each new email reaches your webhook as email.received, so your code passes it to the agent as the next turn. A number works the same way: obsession.numbers.create({ country: "US" }) gives the agent a number, number.sms sends a text, and each text back arrives as sms.received.',
    },

    { kind: 'h2', id: 'one-identity', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Wrapping 3 vendors as 3 sets of function tools works. The cost shows up at the seams: the code arrives by text at one vendor while the browser waits at another, and the email thread and the call log live in different places. Obsession puts the pieces under one persona: obsession.personas.create({ inbox: true, phone: "US", browser: true }) gives the agent an inbox, a number and a browser as one identity, free while it waits.',
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
      text: 'If your agent needs one piece, one specialist is enough, and [the best email API for AI agents](/blog/best-email-api-for-ai-agents) compares 7. [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) sets 4 vendors beside one. Obsession’s MCP server gives the same calls as tools to any MCP client, and [the infrastructure stack](/blog/ai-agent-infrastructure-stack) shows where each piece sits. Teams who don’t code can run a blueprint such as the [Inbox agent](/blueprints/inbox-agent) instead. With its own number and browser, the same agent can also confirm appointments by text, chase a supplier’s quote or check a competitor’s sign-up, from one agent to ten thousand.',
    },
    {
      kind: 'cta',
      text: 'Give your OpenAI agent an inbox, a number and a browser in one call each. Free plan, no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about OpenAI Agents SDK tools' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What tools does the OpenAI Agents SDK support?',
          a: 'Function tools that wrap your own code, hosted tools such as web search, file search and code interpreter that run on OpenAI’s servers, MCP servers, agents exposed as tools, and tools that run in your own environment such as shell and computer use.',
        },
        {
          q: 'How does tool calling work in the OpenAI Agents SDK?',
          a: 'The model reads the task and may ask to call a tool by name with arguments. The SDK runs it, passes the result back to the model, and repeats until the model gives a final answer. Clear names and descriptions decide whether it picks the right tool.',
        },
        {
          q: 'How do I add a function tool to an agent?',
          a: 'In Python, wrap a function and the SDK reads its name, description and inputs from the function and its annotations. In JavaScript, call tool() with a name, a description, a Zod parameters schema and an execute function, then list it in the agent’s tools.',
        },
        {
          q: 'Can the OpenAI Agents SDK use MCP servers?',
          a: 'Yes. A hosted MCP tool lets OpenAI’s Responses API call a publicly reachable server, and the SDK can also connect to a Streamable HTTP server or a local one and pass it to the agent. Keep access tokens in the header and connect only to servers you trust.',
          link: { label: 'AI agent tools versus MCP', to: '/blog/ai-agent-tools-vs-mcp' },
        },
        {
          q: 'How do I give an OpenAI agent an email address or phone number?',
          a: 'Wrap a call that creates an inbox or number as a function tool, or connect a server that offers them. With Obsession, obsession.inboxes.create() gives the agent an address and obsession.numbers.create gives it a number, and replies reach your webhook as events.',
          link: { label: 'See the API and MCP', to: '/developers' },
        },
        {
          q: 'Do hosted tools work on every model?',
          a: 'No. The Python documentation says hosted tools need the OpenAI Responses model. Function tools work with any model the SDK supports.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about the OpenAI Agents SDK comes from OpenAI’s own Python and JavaScript documentation, read on 23 November 2026. The code sketches follow its documented tool patterns and Obsession’s documented calls, and we did not run them against a live account. Larkfield is invented.',
    },
  ],

  sources: [
    { title: 'Tools', publisher: 'OpenAI Agents SDK for Python', url: PY_TOOLS },
    { title: 'Model context protocol (MCP)', publisher: 'OpenAI Agents SDK for Python', url: PY_MCP },
    { title: 'Tools', publisher: 'OpenAI Agents SDK for JavaScript', url: JS_TOOLS },
  ],

  related: [
    '/developers',
    'ai-agent-tools-vs-mcp',
    'mcp-server-email',
    'best-email-api-for-ai-agents',
    'how-to-build-an-ai-agent-from-scratch',
    '/email',
  ],
}
