import type { BlogPost } from './types'

/* Wave 2, batch A, page 2 (_research/seo/wave2-pull-23nov/PLAN.md, 23 Nov 2026): the best browser for AI agents.
   Primary "best browser for ai agents"; also "best headless browser for ai agents" (Google suggestions, US and UK, 23 Nov
   2026, autocomplete_23nov.json). Never the bare "headless browser for ai agents", which /browser owns (and the plan's
   decision 2 may move here); "best browser automation ai agent" is already a secondary of
   /blog/browser-automation-tools-for-ai-agents, so this post leaves it there and links that guide.
   Reader: developers choosing a cloud browser for agents that sign in, fill forms and read pages. Serves /browser.
   Every other service is described only from its own pricing, product and docs pages, each listed on 23 Nov 2026, with
   prices in US dollars as listed that day; every fact and its address is in
   _research/seo/wave2-pull-23nov/research/best-browser-for-ai-agents.json. Cloudflare's product is now called Browser
   Run (formerly Browser Rendering), as its own docs say. Obsession's prices are typed from src/content/prices.ts as it
   stood on 23 Nov 2026 (browser hour $0.10, stealth $0.85, home connection included, inbox $0.50, US number $2; plans
   Free, $20, $99, $499); update them here if that file changes.
   The worked month uses example inputs (100 browser hours, 10 GB of residential traffic) and each vendor's listed plan.
   supplier.example and every row in its picture are invented. No dashes. */

const BB = 'https://www.browserbase.com/'
const BB_PRICING = 'https://www.browserbase.com/pricing'
const BB_CONTEXTS = 'https://docs.browserbase.com/features/contexts'
const BU = 'https://browser-use.com/'
const BU_PRICING = 'https://browser-use.com/pricing'
const BU_PROFILES = 'https://docs.browser-use.com/cloud/browser/profiles'
const STEEL_PRICING = 'https://steel.dev/pricing'
const STEEL_PROFILES = 'https://steel.dev/docs/logins/profiles'
const STEEL_GH = 'https://github.com/steel-dev/steel-browser'
const HB = 'https://www.hyperbrowser.ai/'
const HB_PRICING = 'https://www.hyperbrowser.ai/pricing'
const KERNEL = 'https://www.kernel.sh/'
const KERNEL_PRICING = 'https://www.kernel.sh/pricing'
const KERNEL_DOCS = 'https://www.kernel.sh/docs/info/pricing'
const CF = 'https://developers.cloudflare.com/browser-rendering/'
const CF_PRICING = 'https://developers.cloudflare.com/browser-rendering/pricing/'
const CF_LIMITS = 'https://developers.cloudflare.com/browser-rendering/limits/'
const NOTTE = 'https://www.notte.cc/'
const NOTTE_PRICING = 'https://www.notte.cc/pricing'
const NOTTE_PERSONAS = 'https://docs.notte.cc/concepts/personas'

export const post: BlogPost = {
  slug: 'best-browser-for-ai-agents',
  title: 'The best browser for AI agents: 7 cloud browsers compared on price and logins',
  dek: '7 cloud browsers compared on price per browser hour, price per GB of residential traffic, how long logins last and how long a session runs. Prices as listed on 23 November 2026.',
  metaTitle: 'Best browser for AI agents: 7 cloud browsers for developers',
  description:
    'The best browser for AI agents, compared: Browserbase, Browser Use, Steel, Hyperbrowser, Kernel, Cloudflare and Notte on price per hour, per GB and logins.',
  answer:
    'The best browser for AI agents depends on where the bill grows: Kernel and Browser Use list browser hours at about $0.06, while Browserbase, Steel and Hyperbrowser charge $6 to $12 a GB for residential traffic. Obsession gives an agent a browser that keeps its logins for weeks at $0.10 an hour, with the home connection included. The same agent gets its own inbox and number for every login code.',
  primaryKeyword: 'best browser for ai agents',
  keywords: ['best browser for ai agents', 'best headless browser for ai agents'],
  category: 'Work behind logins',
  order: 1,
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'Where an agent’s browser runs',
      rows: [
        {
          name: 'Cloud browser APIs',
          who: 'Browserbase, Steel, Hyperbrowser, Kernel',
          nodes: ['Your agent', 'Cloud browser', 'Any website'],
          links: ['drives', 'opens'],
        },
        {
          name: 'Browser agents',
          who: 'Browser Use, Notte',
          nodes: ['Your task', 'Agent and browser', 'Any website'],
          links: ['sent to', 'works on'],
        },
        {
          name: 'Browser on an edge network',
          who: 'Cloudflare Browser Run',
          nodes: ['Your Worker', 'Headless Chrome', 'Any website'],
          links: ['calls', 'renders'],
        },
        {
          name: 'Browser, inbox and number',
          who: 'Obsession',
          nodes: ['Your agent', 'One identity', 'Sites behind a login'],
          links: ['uses', 'signs in to'],
          lit: 1,
          ours: true,
        },
      ],
      foot: 'Cloud browsers open pages for an agent. Obsession gives the same agent an inbox and number for the login codes, under one identity.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A browser for AI agents is a real browser that runs in the cloud and takes its orders from code. The agent opens pages, clicks, types and fills in forms. It works on websites that have no API, such as a supplier portal, a carrier’s tracking page or a software trial. Developers choosing one compare the price per browser hour and per GB of residential traffic. They also check how long a login lasts between sessions and how long one session can run.',
    },
    { kind: 'p', text: 'These 7 services fall into 3 kinds:' },
    {
      kind: 'list',
      items: [
        '**Cloud browser APIs:** Browserbase, Steel, Hyperbrowser and Kernel, which start browsers your code drives with Playwright, Puppeteer or its own tools.',
        '**Browser agents with cloud browsers:** Browser Use and Notte, which run a model that works through a task in plain words, on their own browsers or yours.',
        '**A browser on an edge network:** Cloudflare Browser Run, formerly Browser Rendering, which runs headless Chrome, a browser with no window on screen, next to your Cloudflare Workers code.',
      ],
    },

    { kind: 'h2', id: 'checks', text: 'What to check before you choose' },
    {
      kind: 'list',
      items: [
        '**How the agent drives it.** Most connect over the Chrome DevTools Protocol (CDP), the interface Playwright and Puppeteer use to control Chrome, so existing scripts move with one changed URL.',
        '**Headless or full screen.** A headless browser runs without drawing a window, the cheapest way to run many sessions. Some sites behave differently in one, so several providers sell a full desktop browser at a higher rate.',
        '**Residential traffic.** A residential or home connection reaches websites from a home internet address. Sites that slow or block traffic from data centres load as they do for a person. Most providers bill it per GB, and a page heavy with images and scripts can weigh several MB.',
        '**Logins that last.** A profile or context saves the browser’s cookies and storage, so the next session starts signed in. Check how long a saved login is kept when no session uses it.',
        '**Session length and concurrency.** How long one session may run before it closes, and how many browsers can run at once on each plan.',
        '**Codes.** Sites send a one-time code by email or text at sign-up and at new-device logins. The browser opens the page, and something has to receive the code.',
      ],
    },
    {
      kind: 'p',
      text: 'Every service is described from its own pricing, product and documentation pages as listed on 23 November 2026, with prices in US dollars.',
    },

    { kind: 'h2', id: 'browser-apis', text: 'Cloud browser APIs' },

    { kind: 'h3', id: 'browserbase', text: 'Browserbase' },
    {
      kind: 'p',
      text: '[Browserbase’s home page](' +
        BB +
        ') reads “Give your agents access to the whole web.” It says it runs more than 35 million browser sessions a month across 10,000 customers, including Ramp, Microsoft and Lovable. [Contexts](' +
        BB_CONTEXTS +
        ') save cookies, local storage and IndexedDB between sessions, and its docs say a context lives until you delete it.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** the largest scale stated here, with saved contexts, stealth modes and CAPTCHA solving on paid plans.',
        '**Price as listed:** on [its pricing page](' +
          BB_PRICING +
          '), Free is $0 for 1 browser hour. Developer is $20 for 100 hours, then $0.12 an hour, with 1 GB of proxy traffic and $12 a GB after. Startup is $99 for 500 hours, then $0.10, with 5 GB and $10 a GB after.',
        '**Where it stops:** residential traffic past the included GB is $10 to $12 a GB, and Free sessions run for up to 15 minutes.',
        '**Best for:** teams running many sessions with scripts already written for Playwright or Puppeteer.',
      ],
    },

    { kind: 'h3', id: 'steel', text: 'Steel' },
    {
      kind: 'p',
      text: 'Steel publishes its browser server as [open source under Apache 2.0](' +
        STEEL_GH +
        '), so a team can run it on its own machines or use Steel’s cloud. Its [profiles](' +
        STEEL_PROFILES +
        ') save cookies, storage, extensions and settings, so a later session “stays signed in until the site ends the login”.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** the same browser open source and hosted, with CAPTCHA solves priced per 1,000.',
        '**Price as listed:** on [its pricing page](' +
          STEEL_PRICING +
          '), Launch is $0 plus usage with a one-time $30 credit: $0.10 a browser hour, $10 a GB of proxy traffic and $3 per 1,000 CAPTCHA solves. Scale is $250 a month plus usage with $100 of monthly credit: $0.08 an hour and $6 a GB.',
        '**Where it stops:** sessions run 15 minutes on Launch and 1 hour on Scale, and Steel deletes a profile no session has used for 30 days.',
        '**Best for:** teams that want to self-host, or start on the hosted version and move later.',
      ],
    },

    { kind: 'h3', id: 'hyperbrowser', text: 'Hyperbrowser' },
    {
      kind: 'p',
      text: '[Hyperbrowser’s home page](' +
        HB +
        ') reads “AI Agents Gateway to the Internet”. It reuses browser profiles with saved cookies and logins, starts a browser in under 500 milliseconds, and says more than 100 million sessions have run on it.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** fast starts, saved profiles and room to run its own agent, Browser Use or a computer-use model in the same browser.',
        '**Price as listed:** on [its pricing page](' +
          HB_PRICING +
          '), a browser hour is $0.10 and proxy traffic $10 a GB, paid in credits. Startup is $30 a month for 30,000 credits and 25 browsers at once, and Scale $100 for 100,000 credits and 100 at once.',
        '**Where it stops:** Free runs 1 browser at a time, and residential traffic is $10 a GB.',
        '**Best for:** agents that start many short sessions and need a browser ready fast.',
      ],
    },

    { kind: 'h3', id: 'kernel', text: 'Kernel' },
    {
      kind: 'p',
      text: '[Kernel’s home page](' +
        KERNEL +
        ') describes “browser infrastructure for web agents and automations”: hosted browsers with saved profiles, live view and session replays, ready in 794 milliseconds on average in a January 2026 benchmark run its page cites. Its managed auth signs a profile in once and keeps passwords and two-step codes out of the agent’s conversation. Kernel says more than 11,000 teams build agents on it, as of September 2026.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** the lowest headless rate here, with no charge for time a browser waits on standby or for proxy traffic.',
        '**Price as listed:** [its docs](' +
          KERNEL_DOCS +
          ') bill a headless browser at $0.0000166667 a second, about $0.06 an hour, and a full desktop browser at about $0.48 an hour. [Plans](' +
          KERNEL_PRICING +
          ') run from Free with $5 of monthly credit to Hobbyist at $30 and Start-up at $200.',
        '**Where it stops:** Free runs 5 browsers at once and keeps replays for 1 day.',
        '**Best for:** agents that hold sessions open for long stretches with little activity.',
      ],
    },

    { kind: 'h2', id: 'browser-agents', text: 'Browser agents with cloud browsers' },

    { kind: 'h3', id: 'browser-use', text: 'Browser Use' },
    {
      kind: 'p',
      text: '[Browser Use’s home page](' +
        BU +
        ') reads “Browser agents and cloud browsers.” Its open source agent has 122,000 stars on GitHub, which it calls the “#1 browser agent on GitHub”. Its cloud runs that agent on hosted browsers, and [profiles](' +
        BU_PROFILES +
        ') keep cookies, local storage and login state between browsers.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** a task written in plain words, run end to end, at a median of $0.006 a task.',
        '**Price as listed:** on [its pricing page](' +
          BU_PRICING +
          '), it is pay as you go with no subscription. A browser hour is $0.06, billed by the minute, and home-IP traffic $5 a GB, with CAPTCHA solving included.',
        '**Where it stops:** 10 browsers at once to start, rising to 1,000 as the total a team has paid grows.',
        '**Best for:** teams that want the agent and the browser from one provider.',
      ],
    },

    { kind: 'h3', id: 'notte', text: 'Notte' },
    {
      kind: 'p',
      text: '[Notte’s home page](' +
        NOTTE +
        ') calls it “a full-stack browser platform for AI agents”: browser sessions with residential proxies and CAPTCHA solving, vaults that keep passwords away from the model, and browser automations run as endpoints on a schedule. Each [persona](' +
        NOTTE_PERSONAS +
        ') has its own email address and an SMS-capable number for sign-up and two-step codes.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** an email address and a phone number on each browser identity, so sign-ups finish without a person forwarding a code.',
        '**Price as listed:** on [its pricing page](' +
          NOTTE_PRICING +
          '), browser sessions are $0.01 an hour and residential proxies $10 a GB. Developer is $20 a month with $20 of credit and 50 personas, and Startup $100 with 200 personas.',
        '**Where it stops:** sessions run up to 15 minutes on Free, 120 on Developer and 300 on Startup.',
        '**Best for:** browser automations that sign up to sites and take their own codes.',
      ],
    },

    { kind: 'h2', id: 'edge', text: 'A browser on an edge network' },

    { kind: 'h3', id: 'cloudflare', text: 'Cloudflare Browser Run' },
    {
      kind: 'p',
      text: '[Cloudflare’s docs](' +
        CF +
        ') describe headless Chrome on Cloudflare’s global network, formerly called Browser Rendering and now Browser Run. Quick Actions take a screenshot, a PDF or a page’s content in one HTTP request. Browser Sessions run Puppeteer, Playwright, Stagehand or direct CDP, and sessions can be kept and reused through Durable Objects.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** browsers beside code already running on Cloudflare Workers, billed by the browser hour.',
        '**Price as listed:** on [its pricing page](' +
          CF_PRICING +
          '), Workers Paid includes 10 browser hours a month, then $0.09 an hour, and 10 browsers at once, then $2.00 for each extra browser.',
        '**Where it stops:** [its limits](' +
          CF_LIMITS +
          ') close a browser after 60 seconds without activity by default, extendable to 20 minutes, and its price list shows no residential traffic.',
        '**Best for:** screenshots, PDFs and page reads from Workers code.',
      ],
    },

    { kind: 'h2', id: 'compared', text: 'Browsers for AI agents compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Browsers for AI agents. Prices in US dollars from each provider’s own pages, as listed on 23 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Your own Playwright on a server', 'Full control, no per-hour fee', 'Your servers and your team’s hours', 'Proxies, saved logins and scale are yours to run', 'A few scripts on sites that allow data centres'],
        [
          'Cloud browser APIs: Browserbase, Steel, Hyperbrowser, Kernel',
          'Browsers your scripts drive over CDP, with saved logins',
          'Browserbase: $20 for 100 hours\nSteel: $0.08 to $0.10 an hour\nHyperbrowser: $0.10 an hour\nKernel: about $0.06 an hour',
          'Browserbase: $10 to $12 a GB\nSteel: profiles deleted after 30 idle days\nHyperbrowser: $10 a GB\nKernel: 5 at once on Free',
          'Teams running scripts at volume',
        ],
        [
          'Browser agents: Browser Use, Notte',
          'A task in plain words, run on their browsers',
          'Browser Use: $0.06 an hour\nNotte: $0.01 an hour',
          'Browser Use: $5 a GB\nNotte: $10 a GB, sessions up to 300 minutes',
          'Teams that want the agent and browser together',
        ],
        [
          'Edge network: Cloudflare Browser Run',
          'Headless Chrome beside Workers code',
          '10 hours on Workers Paid, then $0.09 an hour',
          'Closes after 60 seconds idle, 20 at most; no residential traffic listed',
          'Screenshots, PDFs and page reads',
        ],
        [
          'Obsession (ours): [Browser](/browser), [Email](/email), [Phone](/phone), [Work behind logins](/blueprints/work-behind-logins)',
          'A browser that keeps its logins for weeks, home connection included, with its own inbox and number for codes',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Says it’s an AI to a person; stops at identity checks and CAPTCHAs',
          'Agents that sign in to portals and stay signed in',
        ],
      ],
    },

    { kind: 'h2', id: 'cost', text: 'What a month of browsing costs' },
    {
      kind: 'p',
      text: 'Residential traffic moves the bill more than browser hours do. Taking an example month of 100 browser hours and 10 GB of residential traffic, each priced on the plan its provider lists for it:',
    },
    {
      kind: 'table',
      caption: 'Example inputs: 100 browser hours and 10 GB of residential traffic. Each provider’s listed rates and plans, 23 November 2026, before taxes and one-time credits',
      cols: ['Provider', 'The month', 'How it adds up'],
      rows: [
        ['Browserbase', '$128', 'Developer $20 covers 100 hours and 1 GB; 9 GB more at $12'],
        ['Steel', '$110', 'Launch: $10 of browser hours, $100 of traffic'],
        ['Hyperbrowser', '$110', '$10 of browser hours, $100 of traffic, in credits'],
        ['Notte', '$101', '$1 of browser sessions, $100 of traffic'],
        ['Browser Use', '$56', '$6 of browser hours, $50 of traffic'],
        ['Obsession', '$20', 'Developer covers the $10 of browser hours; home connection included'],
        ['Cloudflare Browser Run', '$13.10', 'Workers Paid $5, 90 hours at $0.09; no residential traffic listed'],
        ['Kernel', '$6', 'Headless hours; no charge for proxy traffic'],
      ],
    },
    {
      kind: 'p',
      text: 'At fleet scale the price per GB decides the bill. A team moving 10,000 GB of residential traffic a month pays $50,000 to $120,000 at $5 to $12 a GB, before browser hours. Obsession and Kernel charge nothing per GB.',
    },

    { kind: 'h2', id: 'logins', text: 'Staying signed in for weeks' },
    {
      kind: 'p',
      text: 'An agent that checks a supplier portal every morning should sign in once. Saved profiles keep the cookies, but the first sign-in still sends a code to an email address or a phone, and many sites send another when they see a new device. The agent needs somewhere to receive those codes, under the same name the site knows.',
    },
    {
      kind: 'art',
      caption: 'Signed in once on 1 November, with the code caught in the agent’s own inbox, and still signed in on the 30th. The supplier portal is an invented example.',
      art: {
        kind: 'log',
        title: 'One login, kept for a month',
        who: 'Buyer agent at portal.supplier.example',
        rows: [
          { time: '1 Nov 07:00', text: 'Login page: code sent by email', detail: 'To the agent’s own inbox', tone: 'info' },
          { time: '1 Nov 07:00', text: 'Email received: Your code is 274019', detail: 'Code entered 4 s later', tone: 'ok' },
          { time: '1 Nov 07:01', text: 'Trade prices saved', detail: '1,240 items, screenshot kept', tone: 'ok' },
          { time: '15 Nov 07:00', text: 'Same session', detail: '38 prices changed since yesterday', tone: 'ok' },
          { time: '30 Nov 07:00', text: 'Still signed in', detail: 'No new code needed', tone: 'ok' },
        ],
        foot: 'The browser keeps the session; the inbox and number catch every code the portal sends.',
      },
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: phone numbers, inboxes, browsers and sandboxes on one API and one bill. Its [browser for AI agents](/browser) keeps its logins between sessions and connects through a home internet connection, with Playwright, Puppeteer or any CDP tool. A persona puts that browser, an inbox and a US or UK number under one identity, so every code reaches the agent the site expects. Every page, email and text lands in one event log, each page with a screenshot.',
    },
    {
      kind: 'p',
      text: 'Obsession’s browser runs under clear operating rules. It signs in only with logins its team provides, identifies itself as an AI when it talks to a person and never gets round a CAPTCHA or a bot block. At an identity check it stops, and the event log keeps what the check asked for.',
    },
    {
      kind: 'list',
      items: [
        '**obsession.browsers.create({ home: "US" })** starts a browser that keeps its logins, on a US home connection. Playwright connects with chromium.connectOverCDP(browser.cdpUrl).',
        '**obsession.personas.create({ inbox: true, phone: "US", browser: true })** puts the browser, an inbox and a number under one identity, free while it waits.',
        '**email.received** and **sms.received** reach your webhook, an address in your app that receives each code the moment it lands.',
      ],
    },
    {
      kind: 'p',
      text: 'A browser hour is $0.10 with the home connection included and no charge per GB, and a stealth browser with a full desktop screen is $0.85 an hour. An inbox is $0.50 a month and a US number $2. The Free plan includes 10 browser hours, 3 inboxes and 1 number ([every rate](/pricing/rates)). Teams who don’t write code can pick a blueprint from [Work behind logins](/blueprints/work-behind-logins), where portals are checked every morning and documents collected.',
    },
    {
      kind: 'cta',
      text: 'Give your agent a browser that stays signed in, plus its own inbox and number for every code, in one call. Free plan, no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which to choose, by job' },
    {
      kind: 'p',
      text: 'Use Obsession when your agent signs in to sites and must receive the codes they send, by email or text, under one identity. For the browser alone:',
    },
    {
      kind: 'list',
      items: [
        '**The lowest price per headless hour:** Kernel, at about $0.06 with no charge for proxy traffic, or Browser Use at $0.06 an hour.',
        '**The largest scale and saved contexts:** Browserbase.',
        '**Open source you can host:** Steel, under Apache 2.0.',
        '**Fast starts for many short sessions:** Hyperbrowser, under 500 milliseconds.',
        '**An agent that runs the task for you:** Browser Use, or Notte with an email and a number on each persona.',
        '**Screenshots and PDFs from Workers code:** Cloudflare Browser Run.',
      ],
    },
    {
      kind: 'p',
      text: '[Browser automation tools for AI agents](/blog/browser-automation-tools-for-ai-agents) compares the libraries that drive these browsers, from Playwright to Stagehand. [Can AI agents log in to websites](/blog/can-ai-agents-log-in-to-websites) sets out what works at a login and what’s allowed, and [the best email API for AI agents](/blog/best-email-api-for-ai-agents) compares inboxes for the codes. [Obsession vs Browserbase](/compare/obsession-vs-browserbase) sets the two browsers side by side.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about browsers for AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best browser for AI agents?',
          a: 'It depends on where the bill grows. Kernel and Browser Use list headless hours at about $0.06, and Browserbase offers the largest stated scale with saved contexts. Steel is open source, and Notte adds an email and a number to each persona. Obsession gives an agent a browser that keeps its logins for weeks, plus its own inbox and number for the codes, at $0.10 an hour with no charge per GB.',
        },
        {
          q: 'What is the best headless browser for AI agents?',
          a: 'A headless browser runs without drawing a window, the cheapest way to run many sessions. As listed on 23 November 2026, Kernel bills a headless browser at about $0.06 an hour, Browser Use $0.06, Steel $0.08 to $0.10, and Hyperbrowser and Obsession $0.10. Residential traffic changes the total most.',
          link: { label: 'A browser for AI agents that stays signed in', to: '/browser' },
        },
        {
          q: 'Which cloud browsers keep logins between sessions?',
          a: 'Browserbase saves contexts, and Steel, Hyperbrowser, Kernel and Browser Use save profiles of cookies and storage. Steel deletes a profile no session has used for 30 days. Obsession keeps each browser’s logins between sessions, with an inbox and number for the codes a site sends at sign-in.',
        },
        {
          q: 'Do AI agents need residential proxies?',
          a: 'Some sites slow or block traffic from data centres, so a browser on a home connection loads them as a person sees them. Most providers bill that traffic at $5 to $12 a GB. Kernel and Obsession include it with no charge per GB.',
        },
        {
          q: 'How much does a browser for AI agents cost?',
          a: 'Browser hours run from about $0.01 to $0.12 on these price lists, and residential traffic from $5 to $12 a GB where it is billed. For 100 browser hours and 10 GB of residential traffic, the example month here comes to $6 to $128.',
        },
        {
          q: 'Can a browser for AI agents solve CAPTCHAs?',
          a: 'Browserbase, Steel, Browser Use and Notte list CAPTCHA solving on their own pages. Obsession’s browser never gets round a CAPTCHA or a bot block, identifies itself as an AI when it talks to a person and stops at identity checks.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about another service comes from that service’s own pricing, product and documentation pages as listed on 23 November 2026, with prices in US dollars as shown that day. Speeds and session counts are each company’s own. We did not run the services. The monthly costs apply each provider’s listed rates to example inputs. The supplier portal and every row in its picture are invented.',
    },
  ],

  sources: [
    { title: 'Browserbase home page', publisher: 'Browserbase', url: BB },
    { title: 'Contexts', publisher: 'Browserbase documentation', url: BB_CONTEXTS },
    { title: 'Pricing', publisher: 'Browserbase', url: BB_PRICING },
    { title: 'steel-browser', publisher: 'GitHub', url: STEEL_GH },
    { title: 'Profiles', publisher: 'Steel documentation', url: STEEL_PROFILES },
    { title: 'Pricing', publisher: 'Steel', url: STEEL_PRICING },
    { title: 'Hyperbrowser home page', publisher: 'Hyperbrowser', url: HB },
    { title: 'Pricing', publisher: 'Hyperbrowser', url: HB_PRICING },
    { title: 'Kernel home page', publisher: 'Kernel', url: KERNEL },
    { title: 'Pricing', publisher: 'Kernel documentation', url: KERNEL_DOCS },
    { title: 'Pricing', publisher: 'Kernel', url: KERNEL_PRICING },
    { title: 'Browser Use home page', publisher: 'Browser Use', url: BU },
    { title: 'Profiles', publisher: 'Browser Use documentation', url: BU_PROFILES },
    { title: 'Pricing', publisher: 'Browser Use', url: BU_PRICING },
    { title: 'Notte home page', publisher: 'Notte', url: NOTTE },
    { title: 'Personas', publisher: 'Notte documentation', url: NOTTE_PERSONAS },
    { title: 'Pricing', publisher: 'Notte', url: NOTTE_PRICING },
    { title: 'Browser Run', publisher: 'Cloudflare documentation', url: CF },
    { title: 'Pricing', publisher: 'Cloudflare documentation', url: CF_PRICING },
    { title: 'Limits', publisher: 'Cloudflare documentation', url: CF_LIMITS },
  ],

  related: [
    '/browser',
    'browser-automation-tools-for-ai-agents',
    'can-ai-agents-log-in-to-websites',
    'best-email-api-for-ai-agents',
    'best-sandbox-for-ai-agents',
    '/compare/obsession-vs-browserbase',
    '/blueprints/work-behind-logins',
    '/developers',
  ],
}
