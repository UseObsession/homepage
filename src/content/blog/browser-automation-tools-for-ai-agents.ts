import type { BlogPost } from './types'

/* Kit article, Work behind logins (_research/seo/revamp-22nov/PLAN_articles.md and ARTICLE_BRIEF.md; Seun's "write
   them", 22 Nov 2026). Owns "browser automation tools for ai agents"; secondaries from Google suggestions, US and UK,
   22 Nov 2026 (autocomplete_articles_22nov.json): browser automation ai agent, best browser automation ai agent, ai
   agent browser automation open source, browser automation cli for ai agents, web automation ai agent.
   /blog/can-ai-agents-log-in-to-websites keeps the login phrases and the law, /blog/scrape-data-behind-login keeps the
   scraping phrases, /browser keeps "browser for ai agents" and "headless browser for ai agents", and
   /glossary/headless-browser keeps "headless browser"; each is linked, never retargeted.
   Readers: developers building agents that work in portals, dashboards and their own product's sign-up.
   Every fact about another tool read on its own page on 22 Nov 2026 (10 fetches): Playwright's authentication guide;
   the Playwright MCP README (Apache-2.0, accessibility tree, persistent profile, --storage-state, MCP vs CLI);
   pptr.dev; Selenium's WebDriver page (last modified 16 Sep 2026); Browser Use's pricing (harness MIT, $0.06 a browser
   hour, $5 a GB home IP, CAPTCHA solving included, up to 1,000 browsers, credits from $5, $0.006 a task); Stagehand's
   home page (v4.0.0, act, observe, extract, TypeScript, Python and Go, made by Browserbase, no price or licence stated);
   Claude's computer use docs (screenshots, sandbox, 1,000 to 1,800 tokens a screenshot, the security advice);
   Browserbase's pricing (Free 1 hour and 15 minute sessions, Developer $20 and Startup $99, overage, proxies, CAPTCHA
   solving from Developer); Steel's pricing (Launch, Scale $250, Enterprise up to 24 hours, solves per 1,000; its page
   doesn't say open source, so this page doesn't either); Cloudflare's Browser Rendering pricing (dateModified 20 Nov
   2026). Browser Use's model line on its pricing page is left out. Obsession is described in the words of /browser,
   /kits/work-behind-logins and /agents, with prices from prices.ts. Harrow and its portal are invented. No dashes. */

const PW_AUTH = 'https://playwright.dev/docs/auth'
const PW_MCP = 'https://github.com/microsoft/playwright-mcp'
const PPTR = 'https://pptr.dev/'
const SELENIUM = 'https://www.selenium.dev/documentation/webdriver/'
const BU_PRICING = 'https://browser-use.com/pricing'
const STAGEHAND = 'https://www.stagehand.dev/'
const CLAUDE_CU = 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool'
const BB_PRICING = 'https://www.browserbase.com/pricing'
const STEEL_PRICING = 'https://steel.dev/pricing'
const CF_PRICING = 'https://developers.cloudflare.com/browser-rendering/pricing/'

export const post: BlogPost = {
  slug: 'browser-automation-tools-for-ai-agents',
  title: 'Browser automation tools for AI agents: what developers use for logins, codes and scale',
  dek: 'Libraries that drive a browser, agent frameworks that decide what to click, and cloud browsers that host the sessions, each from its own pages as listed on 22 November 2026. Pick by how long a login must last, where the login code lands and how many browsers run at once.',
  metaTitle: 'Browser automation tools for AI agents: picks for developers',
  description:
    'Browser automation tools for AI agents compared: Playwright, Puppeteer, Browser Use, Stagehand and cloud browsers, by login, session length and price.',
  answer:
    'Browser automation tools for AI agents come in three layers: libraries that drive the browser, agent frameworks that turn an instruction into clicks, and cloud browsers that host the sessions. Playwright, Puppeteer and Selenium drive the browser, Browser Use and Stagehand decide what to click, and Browserbase, Steel and Cloudflare host the sessions. Obsession gives an agent a cloud browser that keeps its logins for weeks, plus its own inbox and number for login codes, at $0.10 a browser hour.',
  primaryKeyword: 'browser automation tools for ai agents',
  keywords: [
    'browser automation ai agent',
    'best browser automation ai agent',
    'ai agent browser automation open source',
    'browser automation cli for ai agents',
    'web automation ai agent',
  ],
  category: 'Work behind logins',
  published: '2026-11-22',
  updated: '2026-11-22',
  readingMinutes: 16,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'One supplier portal, signed in all week',
      who: 'Orders agent at harrow.example',
      rows: [
        { time: 'Mon 07:00', text: 'Opens portal.supplier.example and signs in', tone: 'info' },
        { time: 'Mon 07:00', text: 'Login code reaches its own inbox', detail: 'email.received, 9 seconds after sign-in', tone: 'ok' },
        { time: 'Mon 07:02', text: '214 open orders read', detail: 'page.visited, a screenshot of each page', tone: 'ok' },
        { time: 'Wed 07:00', text: 'Same browser, still signed in, no code asked', tone: 'ok' },
        { time: 'Fri 07:00', text: '2 order prices changed overnight', detail: 'Flagged to the buyer, with both pages kept', tone: 'late' },
      ],
      foot: 'Example: Harrow, its supplier portal and the orders are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Browser automation tools for AI agents let an agent open pages, sign in, click and type on sites that offer no API, the interface a company builds for other software. Developers use them for agents that work in supplier, carrier and payer portals, in SaaS dashboards and in their own product’s sign-up. The choice comes in three layers: the library that drives the browser, the framework that decides what to click, and the place the browser runs. Each tool is described from its own pages as listed on 22 November 2026, with its price, where it stops and who it suits.',
    },

    { kind: 'h2', id: 'layers', text: 'What does a browser automation tool do for an AI agent?' },
    {
      kind: 'p',
      text: 'A browser automation tool controls a real web browser from code. For an AI agent it does three jobs, and most teams combine two or three tools to cover them:',
    },
    {
      kind: 'list',
      items: [
        '**Drive the browser.** A library such as Playwright, Puppeteer or Selenium opens pages, clicks, types and reads the result. Playwright and Puppeteer can control Chrome through CDP, the Chrome DevTools Protocol, which Chrome exposes so code can control it. Selenium uses WebDriver, a W3C standard for the same job.',
        '**Decide what to do next.** An agent framework turns an instruction such as “download last month’s invoices” into clicks and typing. It reads the page as an accessibility tree, the list of buttons, links and fields a browser builds for screen readers, or as screenshots.',
        '**Run the browser somewhere.** That can be a laptop, your own servers or a cloud browser service that hosts many sessions at once, keeps their logins and records what each one saw.',
      ],
    },
    {
      kind: 'p',
      text: 'Most of these browsers run headless, meaning with no visible window. A [headless browser](/glossary/headless-browser) loads the same pages a person’s browser loads, and it is the cheapest way to run many sessions side by side.',
    },

    { kind: 'h2', id: 'see', text: 'Does the agent read the page or look at it?' },
    {
      kind: 'p',
      text: 'An agent sees a page in one of two ways, and the choice sets its cost per step and the screens it can handle.',
    },
    {
      kind: 'list',
      items: [
        '**The accessibility tree.** [Playwright MCP](' +
          PW_MCP +
          ') gives an agent a browser through MCP, the Model Context Protocol, the standard way AI agents call tools. Its README says it uses Playwright’s accessibility tree, “not pixel-based input”, so it needs no vision model. Text on standard web pages comes back exact and costs few tokens to read.',
        '**Screenshots.** [Claude’s computer use](' +
          CLAUDE_CU +
          ') sends the model screenshots and carries out the mouse and keyboard actions it returns, so it can control a desktop in a sandbox, desktop apps included. Its documentation says long agent loops pile up screenshots at roughly 1,000 to 1,800 input tokens each.',
      ],
    },
    {
      kind: 'p',
      text: 'Many agent frameworks mix both. They use the tree where a page is built from standard elements, and a screenshot where the page is drawn on a canvas or the tree is too large to send. For a coding agent, the Playwright MCP README recommends the Playwright command-line tool with skills, the instruction files an agent loads when it needs them. Its reason is tokens: CLI commands avoid loading tool schemas and accessibility trees into the model’s context.',
    },

    { kind: 'h2', id: 'logins', text: 'How does a browser agent stay signed in?' },
    {
      kind: 'p',
      text: 'A website keeps a person signed in with cookies and other values the browser stores once the password and any code are accepted. An agent stays signed in the same way, as long as its browser keeps those values between runs. [Can AI agents log in to websites?](/blog/can-ai-agents-log-in-to-websites) sets out cookies, tokens and codes in full. [How to scrape data behind a login](/blog/scrape-data-behind-login) shows the code that signs in and saves the session.',
    },
    {
      kind: 'p',
      text: '[Playwright’s authentication guide](' +
        PW_AUTH +
        ') shows the common pattern: sign in once, save the browser’s state to a file, and load it at the start of every later run. The saved state covers cookies, local storage and, when asked, IndexedDB. Playwright says it doesn’t provide an API to persist session storage, and that “you need to delete the stored state when it expires”. It also warns that the file “may contain sensitive cookies and headers that could be used to impersonate you or your test account”, so keep it out of every code repository.',
    },
    {
      kind: 'p',
      text: 'Playwright MCP keeps a persistent profile by default, stored per workspace, and its README notes that one profile serves one browser at a time. Parallel agents need a profile each, or its isolated mode. Hosted browsers set their own limits. On 22 November 2026, Browserbase’s Free plan capped each session at 15 minutes. Steel listed a longest session of 15 minutes on Launch, 1 hour on Scale and up to 24 hours on Enterprise. An agent that checks a portal every morning needs its login kept for days or weeks, so saved state between sessions matters more than the length of any one session. [Long running AI agents](/blog/long-running-ai-agents) covers keeping the rest of an agent’s work alive across those days.',
    },

    { kind: 'h2', id: 'codes', text: 'Where do login codes go?' },
    {
      kind: 'p',
      text: 'Many portals send a one-time code by email or text at sign-in, from a new device or after a few days away. A browser can’t read that code. The agent needs an address or number it controls, and code that types the code in before it expires. That code usually hears about each message through a webhook, a message sent to your own system the moment an email or text arrives.',
    },
    {
      kind: 'p',
      text: 'Some teams forward codes from a shared team inbox to the agent, which works until two agents sign in at once and one reads the other’s code. Others register a test mailbox service on the account. The cleanest set-up is an inbox and number registered to the agent itself, so every code it receives belongs to its own login. Where a portal sends codes to a named employee’s phone, a person stays in the loop for every sign-in.',
    },

    { kind: 'h2', id: 'stops', text: 'Where should a browser agent stop?' },
    {
      kind: 'p',
      text: 'Some steps make a commitment, and a browser agent should hand them back. Claude’s computer use documentation advises a dedicated virtual machine or container, with account login details kept away from the model. It also advises asking a person to confirm steps with real-world consequences, “such as accepting cookies, completing financial transactions, or agreeing to terms of service”. And it warns that instructions on a web page can override yours, a risk known as prompt injection.',
    },
    {
      kind: 'p',
      text: 'What an agent may do on another company’s site turns on that site’s terms and, in some places, on computer misuse law. [Can AI agents log in to websites?](/blog/can-ai-agents-log-in-to-websites) sets out that law for the US and the UK. Payment needs the customer’s own payment method and their say-so. Nothing here is legal advice.',
    },

    { kind: 'h2', id: 'libraries', text: 'Libraries that drive the browser' },
    {
      kind: 'p',
      text: 'These cost nothing to use and run wherever your code runs. They suit a team that writes its own agent loop or test suite and hosts its own browsers.',
    },

    { kind: 'h3', id: 'playwright', text: 'Playwright' },
    {
      kind: 'list',
      items: [
        '**What it does well:** Microsoft’s Playwright runs each script in an isolated browser context. It can save a signed-in state, passkey logins and IndexedDB included, to reuse in later runs, as its [authentication guide](' +
          PW_AUTH +
          ') shows. Its MCP server gives agents the same browser.',
        '**Price as listed:** free.',
        '**Where it stops:** session storage isn’t saved, saved state must be renewed when it expires, and hosting, scaling and login codes are yours to build.',
        '**Best for:** teams writing their own agent or test suite who want control of every step.',
      ],
    },

    { kind: 'h3', id: 'puppeteer', text: 'Puppeteer' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Puppeteer](' +
          PPTR +
          ') is a JavaScript library from Google that controls Chrome or Firefox over the DevTools Protocol and WebDriver BiDi. It runs headless by default.',
        '**Price as listed:** free.',
        '**Where it stops:** a JavaScript library with no planning layer, saved-login handling or code handling of its own.',
        '**Best for:** Node.js teams building on Chrome.',
      ],
    },

    { kind: 'h3', id: 'selenium', text: 'Selenium' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Selenium WebDriver](' +
          SELENIUM +
          ') “drives a browser natively, as a user would”, on your machine or a remote one, and WebDriver is a W3C Recommendation. Its documentation, last modified on 16 September 2026, gives code examples in Java, Python, C#, Ruby, JavaScript and Kotlin.',
        '**Price as listed:** free.',
        '**Where it stops:** built for test automation, with no model or planning layer; an agent framework sits on top.',
        '**Best for:** teams with Selenium suites and grids already running, in any of its six languages.',
      ],
    },

    { kind: 'h2', id: 'frameworks', text: 'Agent frameworks that decide what to click' },
    {
      kind: 'p',
      text: 'These add a model that reads the page and picks the next action from an instruction. They save writing a script for every site, and each step costs a model call.',
    },

    { kind: 'h3', id: 'browser-use', text: 'Browser Use' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Browser Use](' +
          BU_PRICING +
          ') runs agents that complete tasks in a browser, with an open source harness under the MIT licence and cloud browsers billed by the hour. Its pricing page lists up to 1,000 browsers at once on pay as you go.',
        '**Price as listed:** $0 a month, pay as you go, with credits from $5. Browsers $0.06 an hour, home IP proxy traffic $5 a GB, and its bu-ultrafast agent about $0.006 for a median task.',
        '**Where it stops:** its pricing page doesn’t describe keeping logins between sessions or handling login codes, and proxy traffic is billed per GB.',
        '**Best for:** many short browser tasks at a low hourly rate.',
      ],
    },

    { kind: 'h3', id: 'stagehand', text: 'Stagehand' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Stagehand](' +
          STAGEHAND +
          ') calls itself “the SDK for browser agents”, a software development kit in TypeScript, Python and Go. It adds three commands written in plain language, act, observe and extract, to familiar browser commands. Its page says it refreshes how an action runs when a site changes. Browserbase makes it, version 4.0.0 is current, and its code is on GitHub.',
        '**Price as listed:** not listed on its page.',
        '**Where it stops:** it decides and acts; hosting, saved logins and login codes come from the browser it runs beside.',
        '**Best for:** developers who want plain-language steps beside code they control.',
      ],
    },

    { kind: 'h3', id: 'playwright-mcp', text: 'Playwright MCP' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Playwright MCP](' +
          PW_MCP +
          ') is an MCP server that gives any MCP client a Playwright browser. It reads pages through the accessibility tree with no vision model, keeps a persistent profile by default and can load saved state from a file. Its licence is Apache 2.0.',
        '**Price as listed:** free.',
        '**Where it stops:** one profile serves one browser at a time, and its README points coding agents to the command-line tool to save tokens.',
        '**Best for:** an assistant that already connects to MCP servers and needs a browser.',
      ],
    },

    { kind: 'h3', id: 'computer-use', text: 'Claude’s computer use' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Claude’s computer use](' +
          CLAUDE_CU +
          ') gives the model screenshots with mouse and keyboard control, so it can use any screen a person can, desktop apps included. Anthropic says classifiers scan what the tool returns for possible prompt injections.',
        '**Price as listed:** Claude API token rates, with each screenshot roughly 1,000 to 1,800 input tokens.',
        '**Where it stops:** it runs in a sandboxed computer you set up and control, and Anthropic advises keeping login details from the model and a person confirming consequential steps.',
        '**Best for:** screens with no accessibility tree, such as desktop apps and canvas pages.',
      ],
    },

    { kind: 'h2', id: 'cloud', text: 'Cloud browsers that host the sessions' },
    {
      kind: 'p',
      text: 'These host the browser, so your code or agent connects to it over the network instead of running Chrome itself. They differ on the hourly rate, proxy charges, session length and how many browsers run at once.',
    },

    { kind: 'h3', id: 'browserbase', text: 'Browserbase' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Browserbase](' +
          BB_PRICING +
          ') hosts browsers for agents, with basic stealth from its Developer plan, 25 browsers at once on Developer and 100 on Startup. [Obsession vs Browserbase](/compare/obsession-vs-browserbase) sets the two side by side.',
        '**Price as listed:** Free with 1 browser hour. Developer $20 a month with 100 hours, then $0.12 an hour and $12 a GB past 1 GB of proxies. Startup $99 with 500 hours, then $0.10 an hour and $10 a GB past 5 GB. Scale is custom.',
        '**Where it stops:** Free sessions last 15 minutes with 7 days of data kept, and proxy traffic is billed per GB past each plan’s allowance.',
        '**Best for:** teams running many sessions in parallel with Stagehand or Playwright.',
      ],
    },

    { kind: 'h3', id: 'steel', text: 'Steel' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Steel](' +
          STEEL_PRICING +
          ') hosts browser sessions at $0.10 an hour on Launch and $0.08 on Scale. Its Enterprise plan runs 1,000 or more sessions at once, each up to 24 hours.',
        '**Price as listed:** Launch $0 plus usage, with $30 of credits once. Scale $250 a month plus usage, with $100 of credits a month. Enterprise is custom. Proxies $10 or $6 a GB.',
        '**Where it stops:** sessions end at 15 minutes on Launch and 1 hour on Scale, and its pricing page doesn’t mention saved logins.',
        '**Best for:** long sessions at volume on a plan priced by the hour.',
      ],
    },

    { kind: 'h3', id: 'cloudflare', text: 'Cloudflare Browser Rendering' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Cloudflare Browser Rendering](' +
          CF_PRICING +
          ') runs browsers on Cloudflare’s network for Puppeteer, Playwright, CDP and custom scripts, beside quick actions billed by the browser hour alone.',
        '**Price as listed:** Workers Free includes 10 minutes a day and 3 browsers at once. Workers Paid includes 10 hours a month, then $0.09 an hour, and 10 browsers averaged over the month, then $2 for each extra browser.',
        '**Where it stops:** its pricing page says nothing about saved logins or login codes.',
        '**Best for:** teams already building on Cloudflare Workers.',
      ],
    },

    { kind: 'h2', id: 'choose', text: 'How do you choose a browser automation tool for an AI agent?' },
    {
      kind: 'p',
      text: 'Answer these in order. Each answer narrows the list, and for portal work the first three rule out most set-ups.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Whose site is it?** On your own product, any tool works and the test accounts are yours. On another company’s portal, read its terms, use an account the company gave you and keep a record of what the agent did.',
        '**How long must the login last?** Minutes suit a one-off task in any cloud browser. Days or weeks need saved state that survives between sessions and is renewed when it expires.',
        '**Where does the login code land?** A pass is an inbox or number registered to the agent and read by code. A code that goes to an employee’s phone on every sign-in keeps a person in the loop.',
        '**Tree or screenshots?** The accessibility tree suits standard web pages at a lower token cost. Screenshots suit canvas pages and desktop apps.',
        '**How many browsers at once, and the bill?** Multiply browser hours by the hourly rate, then add proxy traffic per GB where the plan charges for it. At $0.10 an hour, an agent working 2 hours a day uses about $6 of browser time a month, so 10 agents cost about $60 and 10,000 about $60,000. Watch cost per task beside task success rate, since a cheap browser that loses its login every night pays for it in failed runs.',
        '**Can your team check what the agent saw?** A screenshot or saved page for each step shows what was on screen, and when.',
        '**Where does it stop?** Decide before launch which steps hand back to a person: payments, approvals and anything that accepts terms.',
      ],
    },

    { kind: 'h2', id: 'compared', text: 'Browser automation tools for AI agents, side by side', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 22 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Browser automation tools for AI agents, from each provider’s own pages, as listed on 22 November 2026. Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['By hand: a person in the portal', 'Reads any screen and makes any decision', 'Staff hours', 'Hours grow with every portal and login', '1 or 2 portals, checked weekly'],
        ['Playwright', 'Isolated contexts, saved sign-in state', 'Free', 'Hosting, codes and renewals are yours', 'Your own agent or test suite'],
        ['Puppeteer', 'Chrome or Firefox over the DevTools Protocol', 'Free', 'No planning layer', 'Node.js teams on Chrome'],
        ['Selenium', 'W3C WebDriver in six languages', 'Free', 'Built for testing, no agent layer', 'Teams with Selenium suites'],
        ['Browser Use', 'Agent tasks, open source harness, up to 1,000 browsers', '$0.06 a browser hour\n$5 a GB home IP\n$0.006 a task', 'Saved logins not on its pricing page', 'Many short tasks'],
        ['Stagehand', 'Act, observe and extract in plain language', 'Not listed', 'Hosting comes from its browser', 'Plain-language steps beside code'],
        ['Playwright MCP', 'Accessibility tree, persistent profile', 'Free', 'One browser per profile', 'MCP clients that need a browser'],
        ['Claude’s computer use', 'Desktop control by screenshot', 'Token rates\n1,000 to 1,800 tokens a screenshot', 'Your sandbox, a person on key steps', 'Desktop apps and canvas pages'],
        ['Browserbase', 'Hosted sessions, basic stealth from Developer', 'Free, 1 hour\n$20 or $99 a month\nCustom', '15 minute sessions on Free', 'Many parallel sessions'],
        ['Steel', 'Hosted sessions up to 24 hours on Enterprise', '$0 or $250 a month plus usage\n$0.08 to $0.10 an hour', '15 minutes on Launch, 1 hour on Scale', 'Long sessions at volume'],
        ['Cloudflare Browser Rendering', 'Browsers on Cloudflare’s network', 'Free, 10 minutes a day\n$0.09 an hour past 10', 'Saved logins not on its pricing page', 'Teams on Cloudflare Workers'],
        [
          'Obsession (ours): [Browser](/browser), [Email](/email), [Phone](/phone), [Personas](/personas)',
          'A browser that keeps its logins for weeks, with the agent’s own inbox and number for every code',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Pays only with the customer’s own card',
          'Agents that work in portals for weeks',
        ],
      ],
    },

    { kind: 'h2', id: 'own-identity', text: 'An agent with its own browser, inbox and number' },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: an inbox, a phone number and a browser for every agent, on one API and one bill. For portal work, the [Work behind logins blueprints](/blueprints/work-behind-logins) pairs a [browser](/browser) that keeps its logins at $0.10 a browser hour with the agent’s own [inbox](/email) and [number](/phone) for codes. Your Playwright or Puppeteer code drives the browser after one call, obsession.browsers.create({ home: "US" }), and each login code reaches your webhook as email.received or sms.received.',
    },
    {
      kind: 'cta',
      text: 'Give your agent a browser that stays signed in, with its own inbox and number for every login code, on one key and one bill.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'enough', text: 'When a library on your own machine is enough' },
    {
      kind: 'p',
      text: 'For tests of your own product, a handful of sites or tasks that finish in one sitting, Playwright or Puppeteer on your own machine costs nothing beyond your time. Add an agent framework when sites change too often to keep scripts current, and a hosted browser when you need many sessions at once or logins kept for weeks. Where the page is public, a search API reads it faster than any browser: [the best web search APIs for AI agents](/blog/best-web-search-api-for-ai-agents) compares them.',
    },
    {
      kind: 'cta',
      text: 'Not building agents? QA on your own flows sends a new persona, an AI agent with its own inbox and number, through your sign-up after every release. It enters each login code and reports the step that broke.',
      to: '/blueprints/website-audit',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about browser automation for AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are the best browser automation tools for AI agents?',
          a: 'It depends on the layer. On 22 November 2026, Playwright, Puppeteer and Selenium were the free libraries for driving a browser. Browser Use, Stagehand, Playwright MCP and Claude’s computer use turned instructions into clicks. Browserbase, Steel and Cloudflare Browser Rendering hosted the sessions. For agents that work in portals for weeks, Obsession’s browser keeps its logins, with the agent’s own inbox and number for every code.',
        },
        {
          q: 'Which AI agent browser automation tools are open source?',
          a: 'Playwright MCP is published under the Apache 2.0 licence, and Browser Use publishes its harness under the MIT licence. Stagehand’s code is on GitHub, and Selenium, Playwright and Puppeteer are free libraries anyone can run. With any of them, hosting, saved logins and login codes are yours to build.',
        },
        {
          q: 'Should a coding agent use Playwright MCP or a browser automation CLI?',
          a: 'The Playwright MCP README recommends the Playwright command-line tool with skills for coding agents, because CLI commands use fewer tokens than loading tool schemas and accessibility trees. It suggests MCP for agent loops that need persistent state and rich page detail, such as exploratory automation or self-healing tests.',
        },
        {
          q: 'What is a headless browser?',
          a: 'A headless browser is a web browser with no visible window, driven by code that loads pages, clicks, types and reads the result. Puppeteer runs headless by default, and most cloud browsers for agents run headless because it is the cheapest way to run many sessions.',
          link: { label: 'Headless browser', to: '/glossary/headless-browser' },
        },
        {
          q: 'How does a browser agent stay logged in between runs?',
          a: 'It reuses the cookies and storage the site set at sign-in. Playwright saves them to a file that each run loads, and the file is renewed when the login expires. A cloud browser that keeps its profile between sessions does the same with no file to manage.',
          link: { label: 'Can AI agents log in to websites?', to: '/blog/can-ai-agents-log-in-to-websites' },
        },
        {
          q: 'Can a browser agent solve CAPTCHAs?',
          a: 'Some cloud browsers list it: on 22 November 2026, Browserbase from its Developer plan, Browser Use as included and Steel per 1,000 solves. Read the site’s terms first. Obsession’s browser signs in with the logins you give it and stays signed in for weeks, and each login code reaches the agent’s own inbox or number.',
          link: { label: 'What every agent keeps to', to: '/agents' },
        },
        {
          q: 'How does Obsession’s browser work with Playwright?',
          a: 'Create a browser with obsession.browsers.create({ home: "US" }), then connect Playwright or Puppeteer to it over CDP. It keeps its logins between sessions and costs $0.10 a browser hour, with a home connection, an internet connection from a home rather than a data centre, included. Each login code reaches your code as email.received or sms.received. Start on the Free plan, then $20, $99 or $499 a month.',
          link: { label: 'Browser', to: '/browser' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How the tools were compared',
      text: 'Each tool is described from its own pages as they stood on 22 November 2026, and every price is as listed that day, in US dollars. Plans change often, so check each page before you buy. Nothing here is legal advice: read each site’s terms, and take advice where your company works, before an agent signs in to another company’s site. Harrow and its supplier portal are invented examples.',
    },
  ],

  sources: [
    { title: 'Playwright MCP', publisher: 'Microsoft (GitHub)', url: PW_MCP },
    { title: 'Computer use tool', publisher: 'Claude Platform Docs', url: CLAUDE_CU },
    { title: 'Authentication', publisher: 'Playwright', url: PW_AUTH },
    { title: 'Puppeteer', publisher: 'Google', url: PPTR },
    { title: 'WebDriver', publisher: 'Selenium', url: SELENIUM, date: '2026-09-16' },
    { title: 'Pricing', publisher: 'Browser Use', url: BU_PRICING },
    { title: 'Stagehand: the SDK for browser agents', publisher: 'Browserbase', url: STAGEHAND },
    { title: 'Pricing', publisher: 'Browserbase', url: BB_PRICING },
    { title: 'Pricing', publisher: 'Steel', url: STEEL_PRICING },
    { title: 'Browser Rendering pricing', publisher: 'Cloudflare Docs', url: CF_PRICING, date: '2026-11-20' },
  ],
  related: [
    '/blueprints/work-behind-logins',
    'recipe:website-audit',
    'recipe:delivery-monitoring',
    'can-ai-agents-log-in-to-websites',
    'scrape-data-behind-login',
    'recipe:invoice-collector',
    'recipe:travel-booking-agent',
  ],
}
