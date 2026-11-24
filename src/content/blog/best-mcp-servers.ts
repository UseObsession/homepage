import type { BlogPost } from './types'

/* Wave 2 best-of guide (_research/seo/agent-business-24nov/PLAN.md, 24 Nov 2026): the best MCP servers.
   Primary "best mcp servers"; also "best mcp servers for claude code" and "best mcp servers for developers" (Google
   suggestions, US, 24 Nov 2026, autocomplete_best_24nov.json). /blog/mcp-server-email keeps the email MCP terms,
   /blog/ai-agent-tools-vs-mcp the tools-versus-MCP terms and /glossary/model-context-protocol the definition.
   Readers: developers choosing MCP servers for Claude Code, Cursor and other clients.
   Every other server is described only from its own repository or docs page, read on 24 Nov 2026: the reference servers
   repository (7 active, 13 archived, MIT and Apache-2.0), GitHub's server (MIT, hosted and local, toolsets, read-only),
   Playwright MCP (Apache-2.0, accessibility snapshots, "not a security boundary"), Brave Search's server (MIT, API key),
   Supabase's server (Apache-2.0, read_only and project_ref), DBHub (MIT, 7 databases, readonly in a TOML file), Twilio
   Labs' server (the page names both MIT and ISC), the memory server (memory.jsonl, local) and AgentPhone's home page
   (MCP server via npx). The official registry page loaded with no servers listed, so no server count is stated.
   Claude Code's and Cursor's docs give the add commands. Obsession's tools are the site's own (pages/developers.ts); its
   MCP address is hidden on the site, so the post says it comes with API access. Prices: free servers have no price of
   their own; the API behind a server may. Obsession's figures are typed from src/content/prices.ts as of 24 Nov 2026
   (plans Free, $20, $99, $499; browser hour $0.10, inbox $0.50, US number $2). supplier.example is invented.
   British English, no dashes. */

const SERVERS = 'https://github.com/modelcontextprotocol/servers'
const REGISTRY = 'https://registry.modelcontextprotocol.io/'
const CLAUDE_MCP = 'https://code.claude.com/docs/en/mcp'
const CURSOR_MCP = 'https://cursor.com/docs/context/mcp'
const GITHUB_MCP = 'https://github.com/github/github-mcp-server'
const PLAYWRIGHT_MCP = 'https://github.com/microsoft/playwright-mcp'
const BRAVE_MCP = 'https://github.com/brave/brave-search-mcp-server'
const SUPABASE_MCP = 'https://github.com/supabase-community/supabase-mcp'
const DBHUB = 'https://github.com/bytebase/dbhub'
const TWILIO_MCP = 'https://github.com/twilio-labs/mcp'
const MEMORY_MCP = 'https://github.com/modelcontextprotocol/servers/tree/main/src/memory'
const AGENTPHONE = 'https://agentphone.ai/'

export const post: BlogPost = {
  slug: 'best-mcp-servers',
  title: 'The best MCP servers for developers, by job, and what to check first',
  dek: 'The best-known MCP server for files, GitHub, databases, search, browsing, email, phone and memory, each described from its own repository, with the commands to add one to Claude Code and Cursor. Read on 24 November 2026.',
  metaTitle: 'Best MCP servers for developers: Claude Code and Cursor',
  description:
    'The best MCP servers by job: files, GitHub, databases, web search, browser, email, phone and memory, with how to add one to Claude Code and Cursor.',
  answer:
    'The best MCP servers depend on the job: GitHub’s own server for code and issues, Playwright MCP for a browser, DBHub or Supabase’s server for databases, Brave Search for the web, and the memory server for notes between chats. Add one with claude mcp add in Claude Code or an mcp.json file in Cursor, and check its scopes, its maintainer and its secrets first. Obsession’s one MCP server gives an agent an inbox, a number, messaging and a browser under one identity.',
  primaryKeyword: 'best mcp servers',
  keywords: ['best mcp servers for claude code', 'best mcp servers for developers'],
  category: 'Build agent products',
  order: 1,
  published: '2026-11-24',
  updated: '2026-11-24',
  readingMinutes: 11,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'What an MCP server gives an agent',
      rows: [
        {
          name: 'Your code and data',
          who: 'Files, GitHub, databases',
          nodes: ['Your agent', 'MCP server', 'Repo or database'],
          links: ['calls', 'reads and writes'],
        },
        {
          name: 'The public web',
          who: 'Search, a browser',
          nodes: ['Your agent', 'MCP server', 'Websites'],
          links: ['asks', 'searches and opens'],
        },
        {
          name: 'Talking to people',
          who: 'Email, phone, messaging',
          nodes: ['Your agent', 'MCP server', 'A person'],
          links: ['uses', 'emails and texts'],
        },
        {
          name: 'One server, one identity',
          who: 'Obsession',
          nodes: ['Your agent', 'One persona', 'Inbox, number, browser'],
          links: ['uses', 'holds'],
          lit: 1,
          ours: true,
        },
      ],
      foot: 'Most servers do one job. Obsession’s gives an agent an inbox, a number, messaging and a browser under one identity.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An MCP server is a small program that gives an AI agent a set of tools, such as reading a repository or running a database query. MCP, the Model Context Protocol, is the open standard that lets Claude Code, Cursor and other AI applications call those tools in the same way. [The definition](/glossary/model-context-protocol) is on its own page, and [AI agent tools vs MCP](/blog/ai-agent-tools-vs-mcp) explains how it differs from a plain tool call.',
    },
    {
      kind: 'p',
      text: 'Developers searching for the best MCP servers want to know which one to install for which job. Each server here is the official or best-known choice for one job, described from its own repository or documentation page as read on 24 November 2026.',
    },
    {
      kind: 'p',
      text: 'The [official MCP Registry](' +
        REGISTRY +
        ') is the place to discover more. It is where the servers others publish are listed.',
    },

    { kind: 'h2', id: 'add', text: 'How to add an MCP server' },
    {
      kind: 'p',
      text: 'In Claude Code, [its MCP docs](' +
        CLAUDE_MCP +
        ') use one command. A remote server takes a transport and a web address, and a local server takes the command that launches it:',
    },
    {
      kind: 'list',
      items: [
        '**A remote server:** `claude mcp add --transport http github` followed by the server’s remote address from its README, with an Authorization header that carries your token',
        '**A local server:** claude mcp add --env AIRTABLE_API_KEY=YOUR_KEY --transport stdio airtable -- npx -y airtable-mcp-server. The two dashes separate Claude’s options from the command that starts the server.',
        '**Where it is stored:** local is the default and applies to the current project only. Project scope writes a .mcp.json file your team shares, and user scope loads it in every project. claude mcp list shows what is installed.',
      ],
    },
    {
      kind: 'p',
      text: 'In Cursor, [its MCP docs](' +
        CURSOR_MCP +
        ') offer a one-click install from the marketplace, or you edit an mcp.json file: .cursor/mcp.json for one project or ~/.cursor/mcp.json for all of them. Servers sit under an mcpServers object, a local one with a command and args and a remote one with a url. Cursor supports OAuth for remote servers, and config values can read environment variables, so a key never has to sit in the file.',
    },

    { kind: 'h2', id: 'check', text: 'What to check before you install a server' },
    {
      kind: 'p',
      text: 'A server can reach external services and run code for your agent. Claude Code’s docs say to verify you trust each server before connecting it, and that servers fetching outside content can expose you to prompt injection, where text on a page tries to give the agent new orders. Cursor’s docs say the same about only installing servers from trusted sources.',
    },
    {
      kind: 'list',
      items: [
        '**Scopes.** Give the token only what the job needs. GitHub’s server page lists repo, read:packages and read:org as the scopes it needs, and says to use a separate token for each project.',
        '**Who runs it.** A server GitHub, Microsoft or the database vendor publishes has a named maintainer. A server by a stranger runs your agent’s tools with your keys, so read its source and its last commit date first.',
        '**Read-only first.** GitHub’s server has a --read-only flag, Supabase’s takes read_only=true in its address, and DBHub’s own docs call its read-only mode “a guardrail, not a permission boundary”, so connect with a read-only database user as well.',
        '**Secrets.** Keep keys in environment variables, never in a file you commit. Cursor’s config reads ${env:NAME}, and GitHub’s page suggests restricting files that hold tokens.',
        '**Not a security boundary.** Playwright MCP’s page says it is not one, and that its origin lists are conveniences. Run it where a mistake costs little.',
      ],
    },

    { kind: 'h2', id: 'servers', text: 'The best MCP server for each job' },

    { kind: 'h3', id: 'files', text: 'Files, fetching pages and Git' },
    {
      kind: 'p',
      text: 'The [reference servers repository](' +
        SERVERS +
        ') keeps 7 active servers: Filesystem for file operations with configurable access, Fetch for turning web pages into text, Git for reading and changing repositories, Memory, Time, Sequential Thinking and a test server called Everything. Its README says they are reference implementations that demonstrate MCP, intended as examples, so you apply your own safeguards. The code is MIT with new contributions under Apache-2.0.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** the simplest way to learn how servers work, and a safe local start for files and Git.',
        '**Price as listed:** free and open source.',
        '**Where it stops:** 13 of the older reference servers, including the GitHub, Slack, PostgreSQL and Puppeteer ones, are archived, so look to each vendor’s own server for those jobs.',
        '**Best for:** local file and Git work, and a first server to try.',
      ],
    },

    { kind: 'h3', id: 'github', text: 'GitHub' },
    {
      kind: 'p',
      text: '[GitHub’s own MCP server](' +
        GITHUB_MCP +
        ') reads repositories, manages issues and pull requests, and analyses code. It is MIT licensed. GitHub hosts a remote version at api.githubcopilot.com that signs in with OAuth or a personal access token, and you can run it locally in Docker. Toolsets switch groups of tools on and off, such as repos, issues, pull requests, actions and code security.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** a hosted server with a named maintainer, toolsets so the agent sees only the tools it needs, and a read-only mode.',
        '**Price as listed:** the server is free; GitHub’s own plans apply to the account behind it.',
        '**Where it stops:** it works on GitHub only, and its default toolsets cover context, repos, issues, pull requests and users.',
        '**Best for:** agents that triage issues, review pull requests or read a codebase.',
      ],
    },

    { kind: 'h3', id: 'databases', text: 'Databases' },
    {
      kind: 'p',
      text: '[DBHub](' +
        DBHUB +
        ') is an MIT-licensed server for PostgreSQL, MySQL, MariaDB, SQL Server, Oracle, ClickHouse and SQLite. Its default tools are execute_sql and search_objects. [Supabase’s server](' +
        SUPABASE_MCP +
        ') is Apache-2.0 and hosted at mcp.supabase.com. It manages tables, reads configuration and runs queries, and adding read_only=true or a project_ref to the address limits what it can do.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** DBHub covers many databases with 2 tools; Supabase’s server scopes access to one project.',
        '**Price as listed:** both servers are free; your database plan applies.',
        '**Where it stops:** DBHub’s default setup lets execute_sql write, and read-only mode needs a config file. Supabase’s page points to its own security guide for the risks of connecting a model to your data.',
        '**Best for:** an agent that explores a schema and answers questions from a read-only copy of your data.',
      ],
    },

    { kind: 'h3', id: 'search', text: 'Web search and fetch' },
    {
      kind: 'p',
      text: '[Brave’s server](' +
        BRAVE_MCP +
        ') is MIT licensed and connects to the Brave Search API. Its tools cover web, local, video, image and news search, plus an LLM context tool that returns page content pre-extracted for agents. It needs a BRAVE_API_KEY. The reference Fetch server turns a page you already have the address of into text.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** many kinds of search from one server, run on Brave’s own index.',
        '**Price as listed:** the server is free. Its page names Search and Answers plans and lists no price or free tier.',
        '**Where it stops:** public pages only. A page behind a login needs a browser that can sign in.',
        '**Best for:** research agents that need current public information.',
      ],
    },

    { kind: 'h3', id: 'browser', text: 'A browser' },
    {
      kind: 'p',
      text: '[Playwright MCP](' +
        PLAYWRIGHT_MCP +
        ') is Microsoft’s Apache-2.0 server for browser automation. It works from the page’s accessibility tree, a text outline of what is on screen, instead of pixels, so it needs no vision model. In Claude Code it installs with claude mcp add playwright npx @playwright/mcp@latest, and the browser opens with a window unless you pass --headless, which runs it with no window on screen.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** fast, text-based page control from a maintained server, free.',
        '**Price as listed:** free and open source; you supply the machine and any proxies.',
        '**Where it stops:** its page says it is not a security boundary, and one tool runs arbitrary JavaScript and is “RCE-equivalent”, meaning it can run any code on the server. By default it keeps a browser profile, so logins persist on that machine, and it receives no sign-in codes by itself.',
        '**Best for:** testing and scraping from your own machine. [Best browser for AI agents](/blog/best-browser-for-ai-agents) compares cloud browsers.',
      ],
    },

    { kind: 'h3', id: 'email', text: 'Email' },
    {
      kind: 'p',
      text: 'Email servers split into mailbox servers that read Gmail, Outlook or IMAP, and sending servers published by delivery services. [MCP server email](/blog/mcp-server-email) compares them, each from its own repository, and [the best email API for AI agents](/blog/best-email-api-for-ai-agents) covers inboxes an agent owns.',
    },

    { kind: 'h3', id: 'phone', text: 'Phone and messaging' },
    {
      kind: 'p',
      text: '[Twilio Labs’ server](' +
        TWILIO_MCP +
        ') exposes Twilio’s public API as MCP tools, with --services and --tags flags to load only the parts you need. Its page names both the MIT and the ISC licence, so check the licence file. It runs with an API key and secret, and Twilio’s team advises against running community servers beside the official ones. [AgentPhone’s home page](' +
        AGENTPHONE +
        ') says its server lets Claude Code, Cursor and other clients buy numbers, send messages and handle calls, with US and Canadian numbers from $3 a month.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** Twilio’s server reaches the whole Twilio API; AgentPhone’s is built around numbers, texts and calls.',
        '**Price as listed:** the Twilio server is free and the API behind it bills as Twilio’s pricing page says; AgentPhone lists numbers from $3 a month.',
        '**Where it stops:** neither pairs the number with an inbox or a browser. Loading all of Twilio’s API can exceed a model’s context limit, so load only the services you need.',
        '**Best for:** agents that text and call. [The best SMS API](/blog/best-sms-api) compares providers on price.',
      ],
    },

    { kind: 'h3', id: 'memory', text: 'Memory' },
    {
      kind: 'p',
      text: 'The reference [memory server](' +
        MEMORY_MCP +
        ') keeps a knowledge graph of entities, relations and observations in a local file, memory.jsonl by default, so an agent remembers facts between chats. Set MEMORY_FILE_PATH to a location you control, because files inside node_modules can be deleted when a package is reinstalled.',
    },

    { kind: 'h2', id: 'compared', text: 'MCP servers compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other server is described from its own repository or docs as of 24 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'MCP servers by job. Prices from each project’s own pages, as read on 24 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Reference servers: Filesystem, Fetch, Git, Memory', 'Simple, local, MIT or Apache-2.0', 'Free', 'Examples, not production-ready by their own README', 'Files, Git and a first try'],
        ['GitHub MCP server', 'Hosted, toolsets, read-only mode', 'Free; GitHub plans apply', 'GitHub only', 'Issues, pull requests and code'],
        ['DBHub and Supabase MCP', 'Many databases; one scoped project', 'Free; your database plan applies', 'DBHub writes by default without a config file', 'Querying a read-only copy'],
        ['Brave Search MCP', 'Web, news, image and LLM context search', 'Server free; Brave plans apply', 'Public pages only', 'Research agents'],
        ['Playwright MCP', 'Text-based browser control', 'Free', 'Not a security boundary; no codes on its own', 'Testing and scraping'],
        ['Twilio Labs MCP and AgentPhone MCP', 'Texts, calls and numbers as tools', 'Twilio API pricing; AgentPhone numbers from $3 a month', 'No inbox or browser under the same identity', 'Agents that text and call'],
        [
          'Obsession (ours): [Email](/email), [Phone](/phone), [Messaging](/messaging), [Browser](/browser)',
          'One server for an inbox, a number, messaging and a browser under one identity, every event in one log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Does not read your repositories or databases; says it is an AI to a person',
          'Agents that act with the outside world',
        ],
      ],
    },

    { kind: 'h2', id: 'obsession', text: 'One identity for the agent that talks to the outside world' },
    {
      kind: 'p',
      text: 'The servers above mostly give an agent something to read: a file, an issue, a row or a page. An agent that does a job in the world also needs to receive and send. A supplier replies by email, a sign-in page texts a 6-digit code, and a portal has to be opened and kept signed in. Obsession is the toolkit for AI agents: phone numbers, inboxes, browsers and sandboxes on one API and one bill, and its MCP server hands an agent those pieces as tools.',
    },
    {
      kind: 'list',
      items: [
        '**An inbox:** a real address the agent owns. It sends and receives, keeps each thread and calls your webhook, an address in your app, on every new email.',
        '**A phone number:** a US or UK number the agent texts and calls from, and where sign-in codes arrive.',
        '**Messaging:** iMessage, WhatsApp, Slack and Telegram from the same identity.',
        '**A browser:** a cloud browser whose sessions keep their logins between runs.',
      ],
    },
    {
      kind: 'p',
      text: 'A persona puts them under one identity, so the code that arrives by text reaches the same agent whose browser is waiting at the login page, and a persona costs nothing while it waits. The server’s tools include inboxes.create, number.sms, messaging.connect, browsers.create, sandbox.run, events.list and events.subscribe, and every email, text and page lands in one event log. The usual alternative is one server per vendor, each with its own key, bill and log, and the seams between them are where a job breaks. For a job that needs one piece only, a single specialist server can be enough. [The side-by-side](/compare/agentmail-twilio-browserbase-e2b) sets the options out.',
    },
    {
      kind: 'p',
      text: 'In Claude Code, claude mcp add obsession adds it, and Cursor, Codex and any other MCP client take the same server in their settings. The server’s address comes with API access, and the Free plan includes API and MCP keys with no credit card ([every rate](/pricing/rates)). An inbox is $0.50 a month, a US number $2 and a browser hour $0.10, with the home connection included. Teams who don’t write code can run a [blueprint](/blueprints) instead.',
    },
    {
      kind: 'p',
      text: 'Once an agent has that identity, 3 jobs open up: a buyer agent that signs in to a supplier portal each morning and emails the price changes to the team, a support agent that answers a customer’s email and texts the booking confirmation, and an agent that runs one account across ten thousand sign-ups, each with its own inbox and number.',
    },
    {
      kind: 'cta',
      text: 'Give your agent an inbox, a number, messaging and a browser through one MCP server, with every event in one log. Free plan, no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which to choose, by job' },
    {
      kind: 'list',
      items: [
        '**Code and issues:** GitHub’s own server, read-only first.',
        '**A database:** DBHub for many engines, or Supabase’s server scoped to one project, both with a read-only user.',
        '**Public web research:** Brave Search’s server.',
        '**A browser on your machine:** Playwright MCP, in a place where a mistake is cheap.',
        '**Email, texts, calls and sign-in codes under one identity:** Obsession.',
        '**Memory between chats:** the reference memory server, with a file path you control.',
      ],
    },
    {
      kind: 'p',
      text: '[AI agent tools vs MCP](/blog/ai-agent-tools-vs-mcp) explains when a plain tool is enough, and [the API for AI agents](/developers) lists the calls Obsession’s server exposes. [MCP server email](/blog/mcp-server-email) goes deeper on the inbox job.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about MCP servers' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are the best MCP servers?',
          a: 'It depends on the job. GitHub’s own server suits code and issues, DBHub and Supabase’s server suit databases, Brave Search’s server suits the public web and Playwright MCP suits a browser. Obsession’s server gives an agent an inbox, a number, messaging and a browser under one identity.',
        },
        {
          q: 'What are the best MCP servers for Claude Code?',
          a: 'Any server that works over HTTP or stdio works in Claude Code. Start with GitHub’s server for repositories and a database server for data. Add one with claude mcp add, and choose local, project or user scope.',
          link: { label: 'AI agent tools vs MCP', to: '/blog/ai-agent-tools-vs-mcp' },
        },
        {
          q: 'How do I add an MCP server to Cursor?',
          a: 'Use the one-click install from the marketplace, or add the server to .cursor/mcp.json for one project or ~/.cursor/mcp.json for all of them. Cursor reads keys from environment variables and supports OAuth for remote servers.',
        },
        {
          q: 'Are MCP servers safe?',
          a: 'A server runs tools with your keys, so install only ones you trust, give each token the fewest scopes, start read-only and keep secrets in environment variables. Claude Code’s docs warn that servers fetching outside content can expose you to prompt injection.',
          link: { label: 'The definition of MCP', to: '/glossary/model-context-protocol' },
        },
        {
          q: 'Is there an MCP server for email, texts and a browser?',
          a: 'Obsession’s MCP server gives an agent an inbox, a phone number, messaging and a browser as tools, with every event in one log. It comes with API access, and the Free plan includes API and MCP keys.',
          link: { label: 'API and MCP for AI agents', to: '/developers' },
        },
        {
          q: 'Where can I find more MCP servers?',
          a: 'The official MCP Registry lists servers that others have published. Read each server’s repository before you install it.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about another server comes from its own repository or documentation page as read on 24 November 2026. We did not run the servers. The official registry page showed no server list when we read it, so we state no count. Prices are those each project’s pages list, and a free server may sit in front of a paid service.',
    },
  ],

  sources: [
    { title: 'Reference servers repository', publisher: 'Model Context Protocol on GitHub', url: SERVERS },
    { title: 'Official MCP Registry', publisher: 'Model Context Protocol', url: REGISTRY },
    { title: 'Connect Claude Code to tools via MCP', publisher: 'Claude Code documentation', url: CLAUDE_MCP },
    { title: 'Model Context Protocol in Cursor', publisher: 'Cursor documentation', url: CURSOR_MCP },
    { title: 'github-mcp-server', publisher: 'GitHub', url: GITHUB_MCP },
    { title: 'playwright-mcp', publisher: 'Microsoft on GitHub', url: PLAYWRIGHT_MCP },
    { title: 'brave-search-mcp-server', publisher: 'Brave on GitHub', url: BRAVE_MCP },
    { title: 'supabase-mcp', publisher: 'Supabase community on GitHub', url: SUPABASE_MCP },
    { title: 'dbhub', publisher: 'Bytebase on GitHub', url: DBHUB },
    { title: 'Twilio Labs MCP', publisher: 'Twilio Labs on GitHub', url: TWILIO_MCP },
    { title: 'Knowledge graph memory server', publisher: 'Model Context Protocol on GitHub', url: MEMORY_MCP },
    { title: 'AgentPhone home page', publisher: 'AgentPhone', url: AGENTPHONE },
  ],

  related: [
    'mcp-server-email',
    'ai-agent-tools-vs-mcp',
    '/glossary/model-context-protocol',
    '/developers',
    'best-email-api-for-ai-agents',
    'best-browser-for-ai-agents',
    '/blueprints',
  ],
}
