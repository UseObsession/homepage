import type { BlogPost } from './types'

/* Wave 2 best-of guide (_research/seo/agent-business-24nov/PLAN.md, 24 Nov 2026): the best AI browser agents.
   Primary "best ai browser agents"; also "top ai agent browser" and "best ai agents for browser automation" (Google
   suggestions, US, 24 Nov 2026, autocomplete_best_24nov.json). /blog/best-browser-for-ai-agents keeps the cloud browser
   terms and /blog/browser-automation-tools-for-ai-agents the libraries; this guide is about agents that act on websites.
   Readers: developers and teams choosing a browser agent for work on sites with no API.
   Every other product is described only from its own pages, read on 24 Nov 2026: Browser Use's pricing page ($0.06 a
   browser hour, $5 a GB home-IP traffic, bu-ultrafast $0.006 a task median, MIT harness), Skyvern's home and pricing pages
   (Hobby $29 with 30,000 credits, Pro $149 with 150,000, 14-day trial, logins, 2FA and CAPTCHAs, no licence named),
   Stagehand's home page (Browserbase's SDK, TypeScript, Python, Go, act, observe, extract; no licence or price stated),
   OpenAI's help pages (the cloud browser page: paid plans except Free and Go, sign-in through a secure form, cookies persist),
   Anthropic's Claude in Chrome help page (paid plans Pro, Max, Ultra, Team and Enterprise, Chrome only), Perplexity's
   Comet page (no price stated) and Notte's pricing page (Free $0 with $10 one-time credit and 5 personas, Developer $20
   with 50, Startup $100 with 200; sessions $0.01 an hour; the page does not say whether personas include an email or a
   number, its docs did on 23 Nov). Browserbase's plans are as read on 24 Nov (Developer $20 for 100 hours). Obsession's
   figures are typed from src/content/prices.ts as of 24 Nov 2026 (browser hour $0.10, stealth $0.85, inbox $0.50, US
   number $2; plans Free, $20, $99, $499). supplier.example is invented. British English, no dashes. */

const BU = 'https://browser-use.com/'
const BU_PRICING = 'https://browser-use.com/pricing'
const SKYVERN = 'https://www.skyvern.com/'
const SKYVERN_PRICING = 'https://www.skyvern.com/pricing'
const STAGEHAND = 'https://www.stagehand.dev/'
const BB_PRICING = 'https://www.browserbase.com/pricing'
const OPENAI_CLOUD = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'
const CLAUDE_CHROME = 'https://support.claude.com/en/articles/12012173-getting-started-with-claude-in-chrome'
const COMET = 'https://www.perplexity.ai/comet'
const NOTTE = 'https://www.notte.cc/'
const NOTTE_PRICING = 'https://www.notte.cc/pricing'

export const post: BlogPost = {
  slug: 'best-ai-browser-agents',
  title: 'The best AI browser agents, priced, and what they still need to finish',
  dek: 'Browser Use, Skyvern, Stagehand, ChatGPT’s cloud browser, Claude in Chrome, Perplexity Comet and Notte compared on what they do, what they cost and how they handle logins, as listed on 24 November 2026.',
  metaTitle: 'Best AI browser agents: 8 compared on price and logins 2026',
  description:
    'The best AI browser agents compared: Browser Use, Skyvern, Stagehand, ChatGPT, Claude in Chrome, Comet and Notte on price, logins, codes and limits.',
  answer:
    'The best AI browser agent depends on who runs it: Browser Use and Skyvern for developers who automate at volume, Stagehand for a coded browser with plain-word steps, and ChatGPT, Claude in Chrome and Comet for one person working in their own account. Prices run from $0.006 a task to $149 a month. Any agent still needs a browser that stays signed in, an inbox and a number for login codes, and a record of what it did, which is what Obsession gives it.',
  primaryKeyword: 'best ai browser agents',
  keywords: ['top ai agent browser', 'best ai agents for browser automation'],
  category: 'Work behind logins',
  order: 2,
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
      title: 'Who runs a browser agent',
      rows: [
        {
          name: 'Open source and cloud agents',
          who: 'Browser Use, Skyvern, Notte',
          nodes: ['Your task', 'Agent and cloud browser', 'Any website'],
          links: ['sent to', 'works on'],
        },
        {
          name: 'An SDK for your own code',
          who: 'Stagehand',
          nodes: ['Your script', 'Plain-word steps', 'Any website'],
          links: ['calls', 'acts on'],
        },
        {
          name: 'An assistant for one person',
          who: 'ChatGPT, Claude in Chrome, Comet',
          nodes: ['You', 'Assistant', 'Your accounts'],
          links: ['ask', 'works in'],
        },
        {
          name: 'What runs under any agent',
          who: 'Obsession',
          nodes: ['Your agent', 'Browser, inbox, number', 'Sites behind a login'],
          links: ['uses', 'signs in to'],
          lit: 1,
          ours: true,
        },
      ],
      foot: 'The agent decides what to click. What runs under it keeps the login, catches the code and records what happened.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A browser agent is an AI that uses a website the way a person does. It reads the page, clicks, types and fills in forms, to finish a task you describe in plain words. It works on sites that have no API, such as a supplier portal, a carrier’s tracking page or a government form.',
    },
    { kind: 'p', text: 'These 8 options fall into 3 kinds:' },
    {
      kind: 'list',
      items: [
        '**Agents and platforms for developers:** Browser Use, Skyvern and Notte, which run an agent on a cloud browser through an API.',
        '**An SDK:** Stagehand, a library from Browserbase that adds plain-word steps to a script you write.',
        '**Assistants for one person:** ChatGPT’s cloud browser, Claude in Chrome and Perplexity Comet, which work in or beside your own accounts.',
      ],
    },
    {
      kind: 'p',
      text: 'Every product is described from its own pages as read on 24 November 2026, with prices in US dollars where its page gives them. [Best browser for AI agents](/blog/best-browser-for-ai-agents) compares the cloud browsers they run on, and [browser automation tools for AI agents](/blog/browser-automation-tools-for-ai-agents) compares the libraries.',
    },

    { kind: 'h2', id: 'checks', text: 'What to check before you choose' },
    {
      kind: 'list',
      items: [
        '**Whose account it uses.** A personal assistant works in your own logged-in browser or its own cloud browser. A developer agent works with logins you give it, for many accounts.',
        '**Logins that last.** Check whether a login survives to the next task, and how long.',
        '**Codes.** Sites send a [one-time code](/glossary/one-time-password) by email or text at sign-up and at a new device. Something has to receive it.',
        '**Cost at your size.** Some bill per task, some by browser hour, some a monthly plan with credits.',
        '**Record.** Look for a log of every page the agent opened, so you can show what it did.',
      ],
    },

    { kind: 'h2', id: 'developers', text: 'Agents and platforms for developers' },

    { kind: 'h3', id: 'browser-use', text: 'Browser Use' },
    {
      kind: 'p',
      text: '[Browser Use](' +
        BU +
        ') pairs an open source agent with hosted browsers. [Its pricing page](' +
        BU_PRICING +
        ') is pay as you go with no subscription: a browser hour is $0.06, billed by the minute, with CAPTCHA solving included, and traffic through home-IP proxies is $5 a GB. Its fast agent, bu-ultrafast, costs $0.006 a task at the median, and the page puts typical runs for scraping, forms, logins or checkout at about $0.03 to $0.05.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** the lowest price per task here and a free, open source harness you can run yourself.',
        '**Price as listed:** $0.06 a browser hour, $5 a GB of home-IP traffic, from $5 of credit.',
        '**Where it stops:** 10 browsers at once to start, rising to 1,000 as the total you have paid grows.',
        '**Best for:** teams that want the agent and the browser from one provider, at volume.',
      ],
    },

    { kind: 'h3', id: 'skyvern', text: 'Skyvern' },
    {
      kind: 'p',
      text: '[Skyvern](' +
        SKYVERN +
        ') calls itself an AI agent platform for browser-based workflows. Its page says it logs in to portals that need credentials, handles two-factor codes, including time-based ones, and solves CAPTCHAs itself, and that it keeps credentials in an encrypted vault. It reports more than 10 million workflows run, SOC 2 Type II and HIPAA compliance, and a self-hosted open source version. [Its pricing page](' +
        SKYVERN_PRICING +
        ') lists Hobby at $29 a month for 30,000 credits and Pro at $149 for 150,000, each with a 14-day trial, and a dedicated agent phone number at $10 a month.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** workflows built around logins, with a vault, two-factor codes and a compliance record.',
        '**Price as listed:** $29 or $149 a month; a per-step rate is not listed.',
        '**Where it stops:** its repository is AGPL-3.0, and its page does not mention an email inbox.',
        '**Best for:** teams automating portals with stored credentials.',
      ],
    },

    { kind: 'h3', id: 'notte', text: 'Notte' },
    {
      kind: 'p',
      text: '[Notte](' +
        NOTTE +
        ') describes a full-stack browser platform for AI agents, with sessions, vaults and automations run on a schedule. [Its pricing page](' +
        NOTTE_PRICING +
        ') lists Free at $0 with a one-time $10 credit and 5 personas, Developer at $20 a month with 50, and Startup at $100 with 200. A browser session is $0.01 an hour and residential proxies are $10 a GB. Its home page says a persona carries an email address and a phone number.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** personas as a unit, with the lowest browser hour here.',
        '**Price as listed:** $0.01 a session hour, $10 a GB of residential traffic, plans from $0.',
        '**Where it stops:** sessions run up to 15 minutes on Free, 120 on Developer and 300 on Startup.',
        '**Best for:** scheduled browser automations.',
      ],
    },

    { kind: 'h2', id: 'sdk', text: 'An SDK for your own code' },

    { kind: 'h3', id: 'stagehand', text: 'Stagehand' },
    {
      kind: 'p',
      text: '[Stagehand](' +
        STAGEHAND +
        ') is a browser SDK made by Browserbase, for TypeScript, Python and Go. Its calls are act, observe and extract: you write an instruction in plain words, such as upvoting the top story, and it carries it out, inspects the page or pulls out data to a schema. Its page claims it heals itself when a site changes, runs about 2 times faster than Playwright and is “80% more token efficient”, in its own words. Its repository is MIT licensed, and the page states no price. The browsers it runs on are billed separately: [Browserbase’s page](' +
        BB_PRICING +
        ') lists Developer at $20 for 100 browser hours.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** keeps your script in code, with a model handling the parts that change.',
        '**Price as listed:** no price on its page; browser hours bill by the provider you pick.',
        '**Where it stops:** you build and run the whole task yourself.',
        '**Best for:** developers who want control with fewer brittle selectors.',
      ],
    },

    { kind: 'h2', id: 'assistants', text: 'Assistants for one person' },

    { kind: 'h3', id: 'chatgpt', text: 'ChatGPT’s cloud browser' },
    {
      kind: 'p',
      text: '[OpenAI’s cloud browser page](' +
        OPENAI_CLOUD +
        ') says it gives ChatGPT Work its own remote browser to read pages, click and fill in forms on public and signed-in sites, on paid plans except Free and Go. At a sign-in page ChatGPT pauses and asks you to sign in through a secure form, and it does not store the credentials. The login persists for future tasks until it expires.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** a person asks in plain words and signs in once.',
        '**Price as listed:** included in paid ChatGPT plans, which the page does not price.',
        '**Where it stops:** it asks you to take over when it gets stuck, asks for confirmation before payments, and some sites block it.',
        '**Best for:** one person’s errands and research.',
      ],
    },

    { kind: 'h3', id: 'claude-chrome', text: 'Claude in Chrome' },
    {
      kind: 'p',
      text: '[Claude in Chrome](' +
        CLAUDE_CHROME +
        ') is a Chrome extension that lets Claude read, click and navigate websites with you. It is available on the Pro, Max, Ultra, Team and Enterprise plans. Its help page describes signing in through 1Password, where the password manager fills the credential directly, so Claude never sees the password or the one-time code. It works only in Chrome, and background workflows continue only while Chrome is open. The page calls the feature still risky and points to its safety guidance.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** works in the browser you already use, signed in to your accounts.',
        '**Price as listed:** included in paid Claude plans.',
        '**Where it stops:** Chrome only, and your machine has to stay on.',
        '**Best for:** an individual or a team’s own daily web work.',
      ],
    },

    { kind: 'h3', id: 'comet', text: 'Perplexity Comet' },
    {
      kind: 'p',
      text: '[Comet](' +
        COMET +
        ') is Perplexity’s AI browser, described as “the browser that works for you”. Its page lists comparing news coverage, researching, drafting email replies and finding and buying a product, and offers it on Mac, Windows, iOS and Android. The page states no price.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** an assistant built into the browser on every device.',
        '**Price as listed:** not stated on its page.',
        '**Where it stops:** it works for the person at the keyboard, not for a fleet of accounts.',
        '**Best for:** personal browsing and research.',
      ],
    },

    { kind: 'h2', id: 'compared', text: 'AI browser agents compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its own pages as of 24 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'AI browser agents. Prices from each product’s own pages, as listed on 24 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Browser Use', 'Low price per task, open source harness', '$0.06 a browser hour; $5 a GB; $0.006 a fast task', '10 browsers at once to start', 'Agents at volume'],
        ['Skyvern', 'Logins, two-factor codes, a vault', '$29 or $149 a month', 'No inbox mentioned; licence not named', 'Portals with stored credentials'],
        ['Notte', 'Personas, cheap sessions', '$0.01 a session hour; plans from $0 to $100', 'Sessions up to 300 minutes', 'Scheduled automations'],
        ['Stagehand', 'Plain-word steps inside your code', 'No price listed; browser hours bill separately', 'You build and run the task', 'Developers who want control'],
        ['ChatGPT cloud browser', 'Plain-word tasks, one sign-in', 'Included in paid plans', 'Takeover when stuck; some sites block it', 'One person’s errands'],
        ['Claude in Chrome', 'Works in your own Chrome', 'Included in paid plans', 'Chrome only; machine stays on', 'An individual’s daily work'],
        ['Perplexity Comet', 'An AI browser on every device', 'Not stated', 'Works for one person', 'Personal research'],
        [
          'Obsession (ours): [Browser](/browser), [Email](/email), [Phone](/phone), [Work behind logins](/blueprints/work-behind-logins)',
          'A browser that keeps its logins, an inbox and a number for codes, a record of every page',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Says it’s an AI to a person; stops at identity checks and CAPTCHAs',
          'Agents that sign in to portals and stay signed in',
        ],
      ],
    },

    { kind: 'h2', id: 'finish', text: 'What an agent still needs to finish the job' },
    {
      kind: 'p',
      text: 'An agent that reads a page is half of a task. A supplier portal asks it to sign in, sends a code to an email address, texts another to a phone, then expects the same browser to return tomorrow. 3 needs decide whether the job finishes.',
    },
    {
      kind: 'list',
      items: [
        '**A browser that stays signed in.** Saved sessions keep cookies, so the agent signs in once and the next run starts inside.',
        '**An inbox and a number for the codes.** The code goes to an address and a phone the agent owns, under the name the site knows.',
        '**A record of what it did.** Every page, email and text, dated, with the screenshot behind it, so someone can check the work.',
      ],
    },
    {
      kind: 'art',
      caption: 'One agent signs in to a supplier portal, catches the code and is still signed in a week later. The portal is an invented example.',
      art: {
        kind: 'log',
        title: 'One login, kept for a week',
        who: 'Buyer agent at portal.supplier.example',
        rows: [
          { time: 'Mon 07:00', text: 'Sign-in page: code sent by email', detail: 'To the agent’s own inbox', tone: 'info' },
          { time: 'Mon 07:00', text: 'Email received: Your code is 274019', detail: 'Code entered 4 s later', tone: 'ok' },
          { time: 'Mon 07:01', text: 'Trade prices saved', detail: '1,240 items, screenshot kept', tone: 'ok' },
          { time: 'Mon 07:02', text: 'Text received: new-device code 551204', detail: 'To the agent’s own number', tone: 'ok' },
          { time: 'Fri 07:00', text: 'Same session', detail: '38 prices changed, no new code needed', tone: 'ok' },
        ],
        foot: 'The browser keeps the session. The inbox and the number catch every code, and the log keeps the proof.',
      },
    },

    { kind: 'h2', id: 'obsession', text: 'A browser, an inbox and a number for any agent' },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: phone numbers, inboxes, browsers and sandboxes on one API and one bill. It works with the agents named here: Browser Use, Skyvern, Stagehand or your own model can drive a browser that Obsession provides, and its [browser for AI agents](/browser) keeps its logins between sessions and connects through a home internet connection, with Playwright, Puppeteer or any CDP tool, the interface those use to control Chrome.',
    },
    {
      kind: 'list',
      items: [
        '**A browser:** a cloud browser whose sessions keep their logins. A browser hour is $0.10 with the home connection included.',
        '**An inbox:** a real address the agent owns, which calls your webhook, an address in your app, on every new email. An inbox is $0.50 a month.',
        '**A phone number:** a US or UK number for texts, calls and codes, $2 a month.',
        '**One event log:** every page, email and text, dated, each page with a screenshot.',
      ],
    },
    {
      kind: 'p',
      text: 'A persona puts them under one identity, free while it waits, so the code that arrives by text reaches the same agent whose browser is at the login page. Obsession signs in only with logins its team provides, identifies itself as an AI when it talks to a person and never gets round a CAPTCHA or a bot block. At an identity check it stops, and the event log keeps what the check asked for. The usual alternative is one vendor for the browser, another for email and a third for numbers, and the seams between them are where a login breaks. For a job on one public site, a plain browser agent can be enough. [The side-by-side](/compare/agentmail-twilio-browserbase-e2b) sets out the options.',
    },
    {
      kind: 'list',
      items: [
        '**obsession.browsers.create({ home: "US" })** starts a browser that keeps its logins. Playwright connects with chromium.connectOverCDP(browser.cdpUrl).',
        '**obsession.personas.create({ inbox: true, phone: "US", browser: true })** puts the three pieces under one identity.',
        '**email.received** and **sms.received** reach your webhook the moment each code lands.',
      ],
    },
    {
      kind: 'p',
      text: 'Teams who don’t write code can pick a blueprint from [Work behind logins](/blueprints/work-behind-logins), where portals are checked every morning and documents collected. The Free plan includes 10 browser hours, 3 inboxes and 1 number with no credit card ([every rate](/pricing/rates)). The same persona could also check a supplier’s prices every week, collect invoices from several portals or confirm a booking by email and text.',
    },
    {
      kind: 'cta',
      text: 'Give your browser agent a browser that stays signed in, plus its own inbox and number for every code. Free plan, no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which to choose, by job' },
    {
      kind: 'list',
      items: [
        '**Automation at volume with a cloud agent:** Browser Use, for the price per task.',
        '**Portals with stored credentials and two-factor codes:** Skyvern.',
        '**A script you control, with plain-word steps:** Stagehand.',
        '**Your own errands and research:** ChatGPT’s cloud browser, Claude in Chrome or Comet.',
        '**Any of these agents, signed in for weeks, with an inbox and number for codes:** run it on Obsession’s browser.',
      ],
    },
    {
      kind: 'p',
      text: '[Can AI agents log in to websites](/blog/can-ai-agents-log-in-to-websites) sets out what works at a login and what is allowed.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI browser agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are the best AI browser agents?',
          a: 'It depends on who runs it. Browser Use and Skyvern suit developers automating at volume, Stagehand suits a coded browser, and ChatGPT’s cloud browser, Claude in Chrome and Comet suit one person. Obsession gives any agent a browser that stays signed in with an inbox and a number for its codes.',
        },
        {
          q: 'What is the top AI agent browser?',
          a: 'For one person, Perplexity Comet and Claude in Chrome put an assistant inside a browser. For automation, Browser Use and Skyvern run an agent on a cloud browser. Prices on their pages run from $0.006 a task to $149 a month.',
          link: { label: 'Best browser for AI agents', to: '/blog/best-browser-for-ai-agents' },
        },
        {
          q: 'What are the best AI agents for browser automation?',
          a: 'Browser Use, Skyvern and Notte run agents on cloud browsers through an API, and Stagehand adds plain-word steps to your own code. Check how each handles logins, codes and CAPTCHAs.',
          link: { label: 'Browser automation tools', to: '/blog/browser-automation-tools-for-ai-agents' },
        },
        {
          q: 'Can a browser agent log in to a website?',
          a: 'Yes, with a login you give it. ChatGPT’s cloud browser asks you to sign in through a secure form, and Skyvern stores credentials in a vault. Sites often send a code, so the agent needs an inbox and a number to receive it.',
          link: { label: 'Can AI agents log in to websites', to: '/blog/can-ai-agents-log-in-to-websites' },
        },
        {
          q: 'How do browser agents get login codes?',
          a: 'A site texts or emails a one-time code. Obsession gives the agent an inbox and a number, so each code reaches the same identity whose browser is waiting at the login page.',
          link: { label: 'One-time password', to: '/glossary/one-time-password' },
        },
        {
          q: 'How much does an AI browser agent cost?',
          a: 'Browser Use lists $0.06 a browser hour and $0.006 for a fast task, Skyvern $29 to $149 a month, and Notte $0.01 a session hour. Obsession charges $0.10 a browser hour with the home connection included.',
          link: { label: 'Every rate', to: '/pricing/rates' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about another product comes from its own pricing, product and help pages as read on 24 November 2026, with prices in US dollars where its page gives them. We did not run the agents. Speeds and counts are each company’s own. The supplier portal and every row in its picture are invented.',
    },
  ],

  sources: [
    { title: 'Browser Use home page', publisher: 'Browser Use', url: BU },
    { title: 'Pricing', publisher: 'Browser Use', url: BU_PRICING },
    { title: 'Skyvern home page', publisher: 'Skyvern', url: SKYVERN },
    { title: 'Pricing', publisher: 'Skyvern', url: SKYVERN_PRICING },
    { title: 'Notte home page', publisher: 'Notte', url: NOTTE },
    { title: 'Pricing', publisher: 'Notte', url: NOTTE_PRICING },
    { title: 'Stagehand home page', publisher: 'Browserbase', url: STAGEHAND },
    { title: 'Pricing', publisher: 'Browserbase', url: BB_PRICING },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: OPENAI_CLOUD },
    { title: 'Getting started with Claude in Chrome', publisher: 'Claude Help Center', url: CLAUDE_CHROME },
    { title: 'Comet', publisher: 'Perplexity', url: COMET },
  ],

  related: [
    'best-browser-for-ai-agents',
    'browser-automation-tools-for-ai-agents',
    'can-ai-agents-log-in-to-websites',
    '/browser',
    '/glossary/one-time-password',
    'best-email-api-for-ai-agents',
    '/blueprints/work-behind-logins',
    '/developers',
  ],
}
