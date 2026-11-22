import type { BlogPost } from './types'

/* Kit articles (_research/seo/revamp-22nov/PLAN_articles.md, Build agent products row; Seun's "write them", 22 Nov 2026).
   Primary "how to build an ai agent from scratch" (Google suggestions, US and UK, 22 Nov 2026,
   autocomplete_articles_22nov.json); secondaries from the same run: how to build an ai agent, ... with python, ... with
   claude, plus "ai agent loop". Readers: developers building their first agent. Spine: the how-to guide, six steps in
   build order with a pass for each, then testing, frameworks, limits, FAQ, note and sources.
   Read on 22 Nov 2026, each on its own page: Anthropic's Building effective agents (19 Dec 2024) and Effective context
   engineering for AI agents (29 Sep 2025); Claude's tool use overview (fields, stop_reason, tool runner, 286 tool use
   system prompt tokens on Claude Opus 5.5); OpenAI's function calling guide (5 steps, strict mode, fewer than 20
   functions); the OpenAI Agents SDK docs (agents, handoffs, guardrails, sessions, tracing); the MCP introduction;
   LangGraph's persistence docs (checkpointer, thread_id, store); OWASP LLM06:2025 Excessive Agency and LLM01:2025
   Prompt Injection. No competitor is named; the sources are model providers, frameworks and standards bodies. Obsession appears in
   3 body sentences (step 6), 1 FAQ answer and the call to action, in the words of the build kit and /personas.
   fernbrook.example, supplier.example and every turn in the picture are invented. British English, no dashes. */

const ANTHROPIC_AGENTS = 'https://www.anthropic.com/engineering/building-effective-agents'
const CLAUDE_TOOLS = 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview'
const OPENAI_FC = 'https://developers.openai.com/api/docs/guides/function-calling'
const MCP_INTRO = 'https://modelcontextprotocol.io/docs/getting-started/intro'
const LANGGRAPH = 'https://docs.langchain.com/oss/python/langgraph/persistence'
const OPENAI_SDK = 'https://openai.github.io/openai-agents-python/'
const CONTEXT = 'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents'
const OWASP_AGENCY = 'https://genai.owasp.org/llmrisk/llm062025-excessive-agency/'
const OWASP_INJECTION = 'https://genai.owasp.org/llmrisk/llm01-prompt-injection/'

export const post: BlogPost = {
  slug: 'how-to-build-an-ai-agent-from-scratch',
  title: 'How to build an AI agent from scratch: steps for developers, from the model to real-world access',
  dek: 'Six steps in the order you build them: the model, the loop, tools, memory, guardrails and real-world access. Each says what a pass looks like, from the providers’ own docs as read on 22 November 2026.',
  metaTitle: 'How to build an AI agent from scratch: steps for developers',
  description:
    'How to build an AI agent from scratch: the model, the agent loop, tools, memory and guardrails, then an inbox, a phone number and a browser of its own.',
  answer:
    'To build an AI agent from scratch, give a model tools and run it in a loop that sends each tool’s result back until the task is done. Add memory so it carries what it learned between sessions, and guardrails so it asks a person before anything it can’t undo. To act outside your code, it then needs an inbox, a phone number, a browser and a sandbox of its own.',
  primaryKeyword: 'how to build an ai agent from scratch',
  keywords: ['how to build an ai agent', 'how to build an ai agent with python', 'how to build an ai agent with claude', 'ai agent loop'],
  category: 'Build agent products',
  published: '2026-11-22',
  updated: '2026-11-22',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'One task, six turns of the loop',
      who: 'Pip, the buying agent at fernbrook.example',
      rows: [
        { time: 'Turn 1', text: 'Calls open_page', detail: 'supplier.example/signup, form filled', tone: 'info' },
        { time: 'Turn 2', text: 'Calls wait_for_text', detail: 'sms.received: “Your code is 604118”', tone: 'ok' },
        { time: 'Turn 3', text: 'Calls open_page', detail: 'Signed in, this month’s price list found', tone: 'ok' },
        { time: 'Turn 4', text: 'Calls run_code', detail: '312 prices read from the PDF', tone: 'ok' },
        { time: 'Turn 5', text: 'Calls send_email', detail: 'Summary sent to the buying team', tone: 'ok' },
        { time: 'Turn 6', text: 'Stops with the task done', detail: 'stop_reason: end_turn', tone: 'info' },
      ],
      foot: 'Example: each turn, the model picks a tool and your code runs it. fernbrook.example and supplier.example are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Developers building their first AI agent need six parts: a model, a loop, tools, memory, guardrails and real-world access. Build them in that order, and move on when each step passes its test. The sixth decides whether the agent can work outside your code, such as receiving a login code, replying from its own address or staying signed in to a supplier’s portal.',
    },

    { kind: 'h2', id: 'what-it-is', text: 'What is an AI agent, in code?' },
    {
      kind: 'p',
      text:
        'An AI agent is a model that decides its own next step. [Anthropic’s engineering team](' +
        ANTHROPIC_AGENTS +
        ') draws the line this way: workflows are systems where models and tools follow “predefined code paths”, while agents “dynamically direct their own processes and tool usage”. The building block under both is what Anthropic calls the augmented LLM, a model given retrieval, tools and memory.',
    },
    {
      kind: 'p',
      text: 'The same post advises finding the simplest solution and adding complexity only when it is needed. If the steps never change, such as reading an invoice and filing it in the same three fields, write a workflow, which is cheaper to run and easier to test. Build an agent when the number of steps can’t be known in advance, such as answering a supplier who might reply with a question, a document or a number to call.',
    },

    { kind: 'h2', id: 'model', text: 'Step 1: choose the model' },
    {
      kind: 'p',
      text: 'The model reads the task, picks a tool and writes the arguments for it. Test each candidate model on your own tasks and compare:',
    },
    {
      kind: 'list',
      items: [
        '**Tool calling:** how often it picks the right tool and fills in valid arguments.',
        '**Context window:** how much of the task, the tool results and the history fits before it has to drop or summarise them.',
        '**Cost per task:** the tokens in and out across every turn, tool definitions included.',
        '**Latency:** the seconds per turn, multiplied by the turns a task takes.',
      ],
    },
    {
      kind: 'p',
      text:
        'Tools cost tokens before the model calls any of them. [Claude’s tool use docs](' +
        CLAUDE_TOOLS +
        ') count every tool name, description and schema as input tokens on each request. The API also adds a system prompt for tool use, 286 tokens on Claude Opus 5.5. Start with the strongest model you can afford, so any failure points at your tools and prompts. Once 20 or more real tasks pass, run the same tasks on a cheaper model and keep it if the pass rate holds.',
    },

    { kind: 'h2', id: 'loop', text: 'Step 2: write the agent loop' },
    {
      kind: 'p',
      text:
        'The loop is what makes a model an agent. [OpenAI’s function calling guide](' +
        OPENAI_FC +
        ') sets out the round trip in five steps, and Anthropic’s API follows the same pattern:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Send the task to the model with the tools it may call.',
        'Receive a tool call: the tool’s name and its arguments.',
        'Run the tool in your own code with those arguments.',
        'Send the result back to the model in a second request.',
        'Receive the final answer, or more tool calls, and go round again.',
      ],
    },
    {
      kind: 'p',
      text: 'On Claude’s API, a response that wants a tool ends with stop_reason set to tool_use and carries one or more tool_use blocks. Your code runs each one and replies with a tool_result block that carries the same tool_use_id, so the model can match every result to its call.',
    },
    {
      kind: 'p',
      text: 'Three limits keep the loop under control. Cap the turns, which Anthropic’s post calls a stopping condition, such as a maximum number of iterations. Cap the tokens a task may spend. Set a timeout on every tool, so one slow call can’t hold the whole task. The loop passes when, on 20 real tasks, it ends on its own with an answer, no task hits the turn cap and every tool call in the trace has valid arguments.',
    },

    { kind: 'h2', id: 'tools', text: 'Step 3: give it tools' },
    {
      kind: 'p',
      text: 'A tool is a function the model can ask your code to run, such as sending an email, looking up an order or opening a page. Both main APIs describe a tool in the same three parts.',
    },
    {
      kind: 'table',
      caption: 'How a tool is described on each API, from each provider’s docs, as read on 22 November 2026',
      cols: ['Part', 'Claude API', 'OpenAI API'],
      rows: [
        ['Its name', 'name', 'name'],
        ['When to use it', 'description', 'description'],
        ['Its inputs', 'input_schema, a JSON schema', 'parameters, a JSON schema'],
        ['An exact schema match', 'strict: true', 'strict, every field required'],
        ['The call arrives as', 'A tool_use block', 'A tool call in the response'],
      ],
    },
    {
      kind: 'p',
      text:
        'Strict mode makes the model’s arguments match your schema every time. [OpenAI’s guide](' +
        OPENAI_FC +
        ') says it needs additionalProperties set to false on every object and every field listed as required, with null as a type for a field that is optional. It also suggests keeping fewer than 20 functions available at the start of a turn.',
    },
    {
      kind: 'p',
      text: 'Write tools for the model the way you would design an interface for a person. Anthropic’s team calls this the agent-computer interface: put yourself in the model’s shoes, test how it uses each tool, and change the tool so mistakes are harder to make. In its coding agent for the SWE-bench benchmark, requiring absolute file paths removed a whole class of errors.',
    },
    {
      kind: 'p',
      text:
        'To share tools between agents and apps, publish them through [MCP](/glossary/model-context-protocol), the Model Context Protocol. [Its own docs](' +
        MCP_INTRO +
        ') call it an open standard for connecting AI applications to tools and data, and compare it to a USB-C port. Claude, ChatGPT, Cursor and Visual Studio Code all connect to MCP servers, so a tool written once reaches each of them. Tools pass when the model picks the right one on each test task and no call fails schema validation.',
    },

    { kind: 'h2', id: 'memory', text: 'Step 4: add memory' },
    {
      kind: 'p',
      text: 'An agent keeps three kinds of memory. The conversation so far sits in the model’s context window. The state of one task, so it can pause and resume, sits in storage your code controls. Facts that outlast the task, such as a customer’s preferences, sit in long-term storage the agent reads when it needs them.',
    },
    {
      kind: 'p',
      text:
        '[LangGraph’s persistence docs](' +
        LANGGRAPH +
        ') make the same split. A checkpointer saves a snapshot of each thread’s state, keyed by a thread_id. With it, the agent remembers within a conversation, pauses for a person’s input and resumes, and recovers after a failure. A separate store holds data across threads. The [OpenAI Agents SDK](' +
        OPENAI_SDK +
        ') builds in sessions, which store the conversation history so the agent keeps its working context within its loop.',
    },
    {
      kind: 'p',
      text:
        'More context isn’t always better. [Anthropic’s guide to context engineering](' +
        CONTEXT +
        ') describes a pattern it calls context rot, in which the model recalls what is in its window less accurately as the window fills. It suggests four fixes. Compaction summarises a long run and restarts from the summary. Notes go to a file outside the window, and the agent reads them back later. Files load only when a tool needs them, and sub-agents each work in a clean window and return a summary that is often 1,000 to 2,000 tokens. Memory passes when you can stop the process mid-task, restart it, and the agent carries on from its last saved step.',
    },

    { kind: 'h2', id: 'guardrails', text: 'Step 5: add guardrails' },
    {
      kind: 'p',
      text:
        'Guardrails decide what the agent may do on its own. The [OWASP Top 10 for LLM applications](' +
        OWASP_AGENCY +
        ') names the risk excessive agency and traces it to three causes: too many functions, too many permissions and too much autonomy. Its fixes become rules you can write in code:',
    },
    {
      kind: 'list',
      items: [
        '**Give each tool the least it needs.** A tool that reads orders shouldn’t also refund them, and a read-only key is safer than a full one.',
        '**Ask a person before anything that can’t be undone.** Sending money, deleting data and emailing a customer for the first time wait for an approval.',
        '**Check permissions in your own systems.** The API a tool calls decides what is allowed, whatever the model asked for.',
        '**Validate every output in code.** A refund over your limit or an email to an unknown domain stops before it leaves.',
      ],
    },
    {
      kind: 'p',
      text:
        'An agent with an inbox or a browser reads text that strangers wrote. OWASP calls the risk [indirect prompt injection](' +
        OWASP_INJECTION +
        '), when instructions hidden in a website, a file or an email reach the model as if they came from you. Mark everything that arrives from outside as untrusted, keep it apart from your own instructions, and never let it reach a tool that pays, deletes or sends without a check.',
    },
    {
      kind: 'p',
      text: 'Anthropic’s post recommends extensive testing in sandboxed environments before an agent acts for real, so run every new tool against test accounts first. Guardrails pass when a test email telling the agent to forward your customer list is logged and ignored.',
    },

    { kind: 'h2', id: 'real-world-access', text: 'Step 6: give it real-world access' },
    {
      kind: 'p',
      text: 'Work happens in inboxes, on phones and behind logins. A supplier sends the price list by email, a portal texts a sign-in code, a lead calls back and a form needs a browser that stays signed in. To do that work, an agent needs four pieces of its own:',
    },
    {
      kind: 'list',
      items: [
        '**An inbox** with its own address, so replies, codes and attachments reach the agent directly.',
        '**A phone number** that sends and receives texts and calls, for sign-in codes and people who would rather ring.',
        '**A browser** that keeps its logins between runs, so the agent signs in once and returns for weeks. A [headless browser](/glossary/headless-browser), which has no screen, runs it on a server, and [Can AI agents log in to websites?](/blog/can-ai-agents-log-in-to-websites) sets out what each site allows.',
        '**A sandbox**, a separate computer that runs the code the agent writes, away from your own servers.',
      ],
    },
    {
      kind: 'p',
      text: 'Built from separate providers, those pieces mean three to five accounts, each with its own keys, webhooks and bill. A webhook is the address in your app where a provider posts each new email or text. The harder part is time. A reply can take days, so the loop has to sleep and wake when an event arrives, without a server held open for it. [Long running AI agents](/blog/long-running-ai-agents) works through the waiting, and [why AI agents need their own inbox, phone number and browser](/blog/why-ai-customers-matter) sets out what each piece is for.',
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, through one API and one bill, and its [kit for building agent products](/kits/build-agent-products) gives every agent you ship an inbox, a number, a browser and a sandbox. The call obsession.personas.create({ inbox: true, phone: "US", browser: true }) puts the first three under one identity, a [persona](/personas), free while it waits. Each email, text and page then reaches your webhook as email.received, sms.received or page.visited, and your agent can make the same calls itself over MCP with claude mcp add obsession.',
    },
    {
      kind: 'cta',
      text: 'Every agent you build, with its own inbox, number, browser and sandbox on one key and one bill. The Free plan includes 3 inboxes, a number, 10 browser hours and 10 sandbox hours, with no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'test', text: 'Test the agent before it acts for real' },
    {
      kind: 'p',
      text:
        'Keep a set of 20 to 50 real tasks, each with the result you expect, and run it after every change to the prompt, the tools or the model. Track five numbers per run: task success, valid tool calls, turns per task, cost per task and latency. Trace every turn, which the [OpenAI Agents SDK](' +
        OPENAI_SDK +
        ') builds in, so a failed task shows the tool call that went wrong. A separate guide compares [the tools that keep those traces](/blog/ai-agent-observability).',
    },
    {
      kind: 'p',
      text: 'Then test the agent from the outside, the way a customer meets it. An agent that answers support email or takes calls should get real emails and calls from a test sender on a schedule. Keep every answer word for word, so a prompt change that breaks a policy shows up the same day.',
    },

    { kind: 'h2', id: 'frameworks', text: 'Your own loop or a framework' },
    {
      kind: 'p',
      text: 'Writing the loop yourself teaches you every part, and a few dozen lines are enough to start. Frameworks add the parts you would build next.',
    },
    {
      kind: 'table',
      caption: 'Ways to run the agent loop, from each provider’s own docs, as read on 22 November 2026',
      cols: ['Option', 'What it gives you', 'Choose it when'],
      rows: [
        ['Your own loop on the model’s API', 'Control of every turn, tool and retry', 'You are learning, or the agent has a few tools'],
        ['Claude’s tool runner', 'The SDK runs your tools and sends the results back', 'You build on Claude and want less glue code'],
        ['OpenAI Agents SDK', 'Agents, handoffs, guardrails, sessions and tracing', 'Several agents hand work to each other'],
        ['LangGraph', 'A checkpoint per thread, a store across threads, pauses for people', 'Long tasks that pause, resume and recover'],
        ['MCP servers', 'Tools written once, used from any MCP client', 'Many agents or apps share the same tools'],
      ],
    },

    { kind: 'h2', id: 'limits', text: 'Where an agent built from scratch still stops' },
    {
      kind: 'list',
      items: [
        '**It can be wrong with confidence.** Every tool result that matters needs a check in code or a person.',
        '**It should keep to checks built for people.** A well-built agent says it’s an AI when it talks to a person, stops at an identity check and treats a CAPTCHA or a bot block as a hard stop.',
        '**It stops before payment.** It stops before payment unless it is given the customer’s own card, and never uses made-up payment details.',
        '**Long tasks drift.** As the window fills, accuracy falls, so split long tasks, save notes and compact.',
        '**Fixed steps suit a workflow better.** If the steps never change, a workflow costs less and is easier to test.',
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about building an AI agent from scratch' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How long does it take to build an AI agent from scratch?',
          a: 'A first loop with one tool is a few dozen lines on either Anthropic’s or OpenAI’s API, and both publish a working example in their docs. Most of the time goes into what follows. That means tools the model uses correctly, memory that survives a restart, guardrails, 20 to 50 test tasks, and access to email, phones and the web.',
        },
        {
          q: 'Do I need a framework to build an AI agent?',
          a: 'No. A loop on the model’s own API is enough to start, and it shows you every part. Reach for a framework when you need what it adds. The OpenAI Agents SDK adds handoffs between agents and tracing, and LangGraph adds checkpoints that let a long task pause and resume.',
        },
        {
          q: 'How do I build an AI agent with Python?',
          a: 'Install your model provider’s Python SDK and describe each tool with a JSON schema. Then write a loop that sends the task, runs each tool the model asks for and sends back the result until it stops. Anthropic and OpenAI both publish Python SDKs, and the OpenAI Agents SDK and LangGraph are Python frameworks that add sessions, handoffs and checkpoints.',
        },
        {
          q: 'How do I build an AI agent with Claude?',
          a: 'Pass your tools to Claude’s Messages API, each with a name, a description and an input_schema. When a response ends with stop_reason tool_use, run the tool_use blocks and send back tool_result blocks until Claude answers. Claude’s tool runner can run that loop for you, and server tools such as web search run on Anthropic’s side.',
        },
        {
          q: 'What is the difference between an AI agent and a workflow?',
          a: 'A workflow runs steps your code fixes in advance. An agent lets the model choose its next step and tool each turn, which suits tasks where the number of steps can’t be known in advance. Anthropic’s advice is to use the simplest one that does the job.',
        },
        {
          q: 'How do I give an AI agent its own email address and phone number?',
          a: 'Give it its own inbox and phone number, and point both at your webhook so each email and text reaches the loop as an event. On Obsession, one call gives an agent an inbox, a US number and a browser under one identity, and the Free plan includes 3 inboxes and a number to start.',
          link: { label: 'Personas', to: '/personas' },
        },
        {
          q: 'Is it safe to let an AI agent read email?',
          a: 'Yes, with guardrails. Treat every email as untrusted text that may carry hidden instructions, and keep it apart from your own prompt. Give the agent only the tools the job needs, and ask a person before it sends money, deletes data or writes to someone new.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the sources',
      text: 'Every step follows the pages of Anthropic, OpenAI, LangChain, the Model Context Protocol and OWASP as they stood on 22 November 2026. Model names, tool fields and token counts change with new releases, so check the provider’s page before you build. fernbrook.example and supplier.example in the illustration are invented.',
    },
  ],

  sources: [
    { title: 'Building effective agents', publisher: 'Anthropic', url: ANTHROPIC_AGENTS, date: '2024-12-19' },
    { title: 'Tool use with Claude', publisher: 'Anthropic', url: CLAUDE_TOOLS },
    { title: 'Function calling', publisher: 'OpenAI', url: OPENAI_FC },
    { title: 'What is the Model Context Protocol (MCP)?', publisher: 'Model Context Protocol', url: MCP_INTRO },
    { title: 'Persistence', publisher: 'LangChain (LangGraph docs)', url: LANGGRAPH },
    { title: 'OpenAI Agents SDK', publisher: 'OpenAI', url: OPENAI_SDK },
    { title: 'Effective context engineering for AI agents', publisher: 'Anthropic', url: CONTEXT, date: '2025-09-29' },
    { title: 'LLM06:2025 Excessive Agency', publisher: 'OWASP Gen AI Security Project', url: OWASP_AGENCY, date: '2025' },
    { title: 'LLM01:2025 Prompt Injection', publisher: 'OWASP Gen AI Security Project', url: OWASP_INJECTION, date: '2025' },
  ],

  related: ['/use-cases/imessage-ai-assistant', '/use-cases/ai-recruiter', '/kits/build-agent-products', 'recipe:support-bot-check', 'recipe:voice-agent-check', 'long-running-ai-agents', 'why-ai-customers-matter'],
}
