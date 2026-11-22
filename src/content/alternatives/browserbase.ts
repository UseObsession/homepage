import { plans, prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /alternatives/browserbase (wave 2, 23 Nov 2026: _research/seo/wave2-pull-23nov/PLAN.md, page 5). Every tool fact is
   from the tool's own pricing page, read 23 Nov 2026; the open-source projects from their GitHub pages the same day
   (_research/seo/wave2-pull-23nov/research/alternatives-browserbase.json). "headless browser for ai agents" stays with
   /browser and "browserbase pricing" with /compare/obsession-vs-browserbase. Open-source options are named honestly:
   Browser Use, Playwright, Steel, Lightpanda, Kernel's images, and Browserless under its own licence. Obsession's side:
   the browser piece, its logins kept and no charge per GB, with the agent's own inbox and number for every login code.
   Its product line on CAPTCHAs is stated as it is on /agents. Prices are read from prices.ts, never retyped. */

const BB_PRICING = 'https://www.browserbase.com/pricing'
const BROWSER_USE = 'https://browser-use.com/pricing'
const BROWSER_USE_GH = 'https://github.com/browser-use/browser-use'
const STEEL = 'https://steel.dev/pricing'
const STEEL_GH = 'https://github.com/steel-dev/steel-browser'
const HYPERBROWSER = 'https://www.hyperbrowser.ai/pricing'
const KERNEL = 'https://www.kernel.sh/pricing'
const KERNEL_GH = 'https://github.com/kernel/kernel-images'
const CLOUDFLARE = 'https://developers.cloudflare.com/browser-rendering/pricing/'
const BROWSERLESS = 'https://www.browserless.io/pricing'
const BROWSERLESS_GH = 'https://github.com/browserless/browserless'
const PLAYWRIGHT = 'https://github.com/microsoft/playwright'
const LIGHTPANDA = 'https://github.com/lightpanda-io/browser'

const paid = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const PAID = `${paid.slice(0, -1).join(', ')} or ${paid[paid.length - 1]} a month`
const freePlan = plans.find((p) => p.id === 'free') ?? plans[0]
const freeHours = freePlan.allowances.browser ?? 0

export const ref: ReferencePage = {
  kind: 'alternatives',
  name: 'Browserbase alternatives',
  company: 'Browserbase',
  line: 'Hosted cloud browsers, free and open-source options you run yourself, and a browser with its own inbox and number for every login code.',
  meta: {
    path: '/alternatives/browserbase',
    title: 'Browserbase alternatives (2026): 9 browser options compared',
    description:
      'Browserbase alternatives by job: hosted cloud browsers, free and open-source browsers you run yourself, and a browser with its own inbox and number.',
    answer: `The main Browserbase alternatives are Browser Use, Steel, Hyperbrowser and Kernel for hosted cloud browsers, and Cloudflare Browser Run for browsers on Workers. Playwright, Steel’s open-source browser API and Lightpanda run on your own servers at no charge. Obsession’s browser keeps its logins and sits beside the agent’s own inbox and phone number, so every login code reaches it. A browser hour is ${prices.browser.amount}, with no charge per GB.`,
    ogImage: '/og/alternatives-browserbase.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Alternatives', path: '/alternatives' },
      { name: 'Browserbase', path: '/alternatives/browserbase' },
    ],
  },
  title: 'Browserbase alternatives: hosted, open-source and free browsers for AI agents',
  dek: 'Teams look past Browserbase for a lower price per browser hour, proxy traffic without a bill per GB, code they can run themselves, or an inbox and number for every login code. Each option is sorted by the job it does, with its price as listed.',
  primaryKeyword: 'browserbase alternatives',
  keywords: ['browserbase alternative', 'browserbase alternative open source', 'browserbase free alternative'],
  checked: '2026-11-23',
  readingMinutes: 7,
  reader: 'developers',
  art: {
    kind: 'sides',
    title: 'Where an agent’s browser runs',
    rows: [
      {
        name: 'Hosted cloud browsers',
        who: 'Browserbase, Browser Use, Steel, Hyperbrowser, Kernel',
        nodes: ['Your agent', 'A browser in their cloud', 'Pages and sessions'],
        links: ['drives', 'returns'],
      },
      {
        name: 'Browsers on Workers',
        who: 'Cloudflare Browser Run',
        nodes: ['Your Worker', 'A browser beside it'],
        links: ['starts'],
      },
      {
        name: 'Open source',
        who: 'Playwright, Steel Browser, Lightpanda',
        nodes: ['Your own servers', 'Browsers you run'],
        links: ['host'],
      },
      {
        name: 'Obsession',
        who: 'Browser, Email, Phone',
        nodes: ['One persona', 'Browser, inbox and number', 'Still signed in next week'],
        links: ['holds', 'keeps it'],
        lit: 1,
        ours: true,
      },
    ],
    foot: 'Each row follows the tools’ own pages, checked 23 November 2026.',
  },
  blocks: [
    { kind: 'h2', id: 'why', text: 'Why teams look for a Browserbase alternative' },
    {
      kind: 'p',
      text: `Browserbase runs cloud browsers for agents at scale, and it makes Stagehand, its framework for browser agents. Its paid plans add stealth and CAPTCHA solving, and Scale adds Verified Agents. [Its pricing page](${BB_PRICING}), checked on 23 November 2026, shows where teams look elsewhere:`,
    },
    {
      kind: 'list',
      items: [
        '**Proxy traffic billed per GB.** Developer is $20 a month with 100 browser hours and 1 GB of proxies, then $0.12 an hour and $12 a GB. Startup is $99 a month with 500 hours and 5 GB, then $0.10 an hour and $10 a GB.',
        '**A small free plan.** Free covers 1 browser hour, 3 concurrent browsers and 15 minutes a session.',
        '**Hosted only.** The pricing page doesn’t mention open source, so teams that want to run browsers on their own machines look at the projects below.',
        '**A browser, not the rest of the agent.** Its pages don’t describe an inbox or a phone number, so a login code sent by email or text needs another vendor.',
      ],
    },

    { kind: 'h2', id: 'by-job', text: 'Browserbase alternatives by job', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'From each tool’s own pages, checked 23 November 2026, with the price each lists. Not described means its pages don’t say.',
      cols: ['Option', 'What it does well', 'Price as listed', 'Where it stops', 'Best for'],
      rows: [
        [
          'Browser Use: cloud browsers and the open-source library',
          'Browsers and an agent API, pay as you go; the library behind it is MIT',
          '$0.06 a browser hour, by the minute\nHome-IP proxy $5 a GB\n$1 sign-up credit',
          'Browsers at once grow with spend: 10 at $0',
          'Teams already building on the Browser Use library',
        ],
        [
          'Steel: cloud and open-source browser API',
          'Sessions that keep cookies and local storage; the browser API is Apache-2.0',
          'Launch: $0 plus usage, $30 credit once\n$0.10 a browser hour, $10 a GB\nScale $250 a month',
          'Sessions up to 15 minutes on Launch, 1 hour on Scale',
          'Teams that may run it themselves later',
        ],
        [
          'Hyperbrowser: cloud browsers on credits',
          'One credit balance across its four products',
          'Free: 5,000 credits\nStartup $30 a month\n$0.10 a browser hour, $10 a GB',
          '1 concurrent session on Free',
          'Small teams that want a monthly plan',
        ],
        [
          'Kernel: browsers by the second',
          'No charge for idle time or proxies, with session replays',
          'Free: $5 credit a month\nHobbyist $30 a month\nStart-up $200 a month',
          'Replays kept 1 to 30 days by plan',
          'Agents that wait between steps',
        ],
        [
          'Cloudflare: Browser Run',
          'Browsers that start beside your Workers code',
          'Workers Free: 10 minutes a day\nWorkers Paid: 10 hours a month, then $0.09 an hour',
          '3 concurrent browsers on Free',
          'Teams already on Cloudflare',
        ],
        [
          'Browserless: hosted or self-hosted',
          'A Docker image you can run, or its cloud',
          'Free: 1,000 units\nPrototyping $25 a month\nStarter $140 a month, billed yearly',
          'SSPL or a commercial licence; commercial self-hosting needs the licence',
          'One vendor for cloud and your own servers',
        ],
        [
          'Playwright and Lightpanda: open source',
          'Browser automation from Microsoft (Apache-2.0) and a headless browser built for agents (AGPL-3.0)',
          'Free to run',
          'You host, scale and keep sessions yourself',
          'Teams with their own infrastructure',
        ],
        [
          'Obsession (ours): Browser, Email, Phone, Personas',
          'A browser that keeps its logins, with the agent’s own inbox and number for every code',
          `Free: ${freeHours} browser hours\n${prices.browser.amount} a browser hour, no charge per GB\nPlans ${PAID}`,
          'Never gets round a CAPTCHA or a bot block; stops at any identity check',
          'Agents that sign in once and stay signed in for weeks',
        ],
      ],
    },
    { kind: 'h3', id: 'hosted', text: 'For hosted cloud browsers' },
    {
      kind: 'p',
      text: `[Browser Use](${BROWSER_USE}) is pay as you go: “No subscription. No concurrency fees.” Browsers are $0.06 an hour, billed by the minute, and home-IP proxy traffic is $5 a GB. The number of browsers you can run at once grows with what you have paid, from 10 at $0. [Steel](${STEEL}) starts at $0 plus usage with a one-time $30 credit, then $0.10 a browser hour and $10 a GB. Sessions run up to 15 minutes on Launch and 1 hour on Scale, at $250 a month. [Hyperbrowser](${HYPERBROWSER}) sells credits: 1,000 credits are $1, so a browser hour is $0.10 and a GB of proxy traffic is $10, with Startup at $30 a month. [Kernel](${KERNEL}) bills $0.0000166667 a second for a headless browser, with “no charges for idle time or proxies”, from a free plan with $5 of credit a month.`,
    },
    { kind: 'h3', id: 'free', text: 'Free Browserbase alternatives' },
    {
      kind: 'p',
      text: `Every hosted option above starts at $0. [Cloudflare Browser Run](${CLOUDFLARE}) gives 10 minutes a day on Workers Free, and Workers Paid includes 10 hours a month, then $0.09 an hour. Hyperbrowser’s free plan includes 5,000 credits, Kernel’s $5 of credit a month, Steel’s $30 once and Browser Use’s $1 once. Obsession’s Free plan includes ${freeHours} browser hours a month, with no credit card. The open-source projects below cost nothing to run beyond your own servers.`,
    },
    { kind: 'h3', id: 'open-source', text: 'Open-source Browserbase alternatives' },
    {
      kind: 'p',
      text: `[Playwright](${PLAYWRIGHT}), from Microsoft under Apache-2.0, drives Chromium, Firefox and WebKit with one API, and Browserbase, Steel and Obsession’s browser all accept its scripts. [The Browser Use library](${BROWSER_USE_GH}), under MIT, is the open-source Python library for AI browser agents behind Browser Use Cloud. [Steel Browser](${STEEL_GH}), under Apache-2.0, is “the open-source browser API for AI agents & apps”, still in public beta. [Lightpanda](${LIGHTPANDA}), under AGPL-3.0, is a headless browser written from scratch for agents rather than a fork of Chromium. Kernel publishes [its browser images](${KERNEL_GH}) under Apache-2.0. [Browserless](${BROWSERLESS_GH}) is source-available under SSPL or a commercial licence, so a closed-source product needs [its commercial licence](${BROWSERLESS}). With each, your team runs the machines, the proxies and the stored sessions.`,
    },
    { kind: 'h3', id: 'obsession', text: 'For a browser that stays signed in, with its own inbox and number' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `The [browser piece](/browser) keeps its logins between sessions and can connect through a home internet connection in the US or another country. Your agent drives it with Playwright, Puppeteer or any Chrome DevTools Protocol tool, so Playwright and Puppeteer scripts connect with one URL. A browser hour is ${prices.browser.amount}, home connection included, with no charge per GB.`,
    },
    {
      kind: 'p',
      text: `What sets it apart is what sits beside the browser. A [persona](/personas) holds the browser with its own [inbox](/email) and [phone number](/phone). When a site sends a login code by email or text, the code reaches the browser that asked for it, and the session is still signed in next week. Every page can be kept with a dated screenshot in the event log. Teams who don’t write code pick a blueprint from [Work behind logins](/blueprints/work-behind-logins), such as the [Price watch](/blueprints/price-watch), and Obsession runs it every morning. The browser, inbox, number and sandbox are priced against four vendors on [AgentMail, Twilio, Browserbase and E2B in one API](/compare/agentmail-twilio-browserbase-e2b).`,
    },
    {
      kind: 'cta',
      text: 'A browser that stays signed in, with an inbox and number for every login code. No credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which Browserbase alternative to choose' },
    {
      kind: 'list',
      items: [
        '**You want the lowest hosted browser hour:** Browser Use at $0.06, billed by the minute.',
        '**You may run browsers yourself later:** Steel, whose browser API is open source.',
        '**Your agent waits between steps:** Kernel, which doesn’t charge for idle time or proxies.',
        '**Your code already runs on Cloudflare:** Browser Run.',
        '**You run your own servers:** Playwright or Lightpanda, at no charge.',
        '**Your agent must stay signed in for weeks and receive its own login codes:** Obsession, with the browser, inbox and number on one key and one bill.',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best Browserbase alternative?',
          a: 'It depends on the job. Browser Use, Steel, Hyperbrowser and Kernel are hosted cloud browsers, Cloudflare Browser Run runs on Workers, and Playwright and Lightpanda run on your own servers. Obsession fits when the agent needs its own inbox and phone number for login codes, beside a browser that stays signed in.',
        },
        {
          q: 'Is there an open-source Browserbase alternative?',
          a: 'Yes. Playwright (Apache-2.0), the Browser Use library (MIT), Steel Browser (Apache-2.0) and Lightpanda (AGPL-3.0) are open source, checked on their GitHub pages on 23 November 2026. Browserless is source-available under SSPL or a commercial licence. With any of them, your team runs the servers and proxies.',
        },
        {
          q: 'What is the best free Browserbase alternative?',
          a: `To run yourself, Playwright costs nothing beyond your own servers. Among hosted options, Cloudflare Browser Run gives 10 minutes a day on Workers Free. Hyperbrowser’s free plan includes 5,000 credits, and Kernel’s $5 of credit a month. Obsession’s Free plan includes ${freeHours} browser hours a month, with no credit card.`,
        },
        {
          q: 'Which alternatives charge for proxy traffic?',
          a: `As listed on 23 November 2026, Browserbase charges $10 to $12 a GB past its included proxies, Steel $6 to $10, Hyperbrowser $10, and Browser Use $5 for home-IP traffic. Kernel includes proxies in its usage rate. Obsession includes the home connection in its ${prices.browser.amount} browser hour, with no charge per GB.`,
          link: { label: 'Obsession vs Browserbase', to: '/compare/obsession-vs-browserbase' },
        },
        {
          q: 'Does Obsession solve CAPTCHAs like Browserbase?',
          a: 'No. An Obsession agent never gets round a CAPTCHA or a bot block, and it stops at any identity check. It signs in with logins you provide, keeps the session, and receives each login code in its own inbox or on its own number.',
          link: { label: 'Every line an agent keeps', to: '/agents' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Pricing', publisher: 'Browserbase', url: BB_PRICING },
    { title: 'Pricing', publisher: 'Browser Use', url: BROWSER_USE },
    { title: 'Pricing', publisher: 'Steel', url: STEEL },
    { title: 'Pricing', publisher: 'Hyperbrowser', url: HYPERBROWSER },
    { title: 'Pricing', publisher: 'Kernel', url: KERNEL },
    { title: 'Browser Run pricing', publisher: 'Cloudflare', url: CLOUDFLARE },
    { title: 'microsoft/playwright', publisher: 'GitHub', url: PLAYWRIGHT },
    { title: 'browser-use/browser-use', publisher: 'GitHub', url: BROWSER_USE_GH },
    { title: 'steel-dev/steel-browser', publisher: 'GitHub', url: STEEL_GH },
    { title: 'lightpanda-io/browser', publisher: 'GitHub', url: LIGHTPANDA },
    { title: 'kernel/kernel-images', publisher: 'GitHub', url: KERNEL_GH },
    { title: 'browserless/browserless', publisher: 'GitHub', url: BROWSERLESS_GH },
    { title: 'Pricing', publisher: 'Browserless', url: BROWSERLESS },
  ],
  related: [
    '/compare/obsession-vs-browserbase',
    '/compare/agentmail-twilio-browserbase-e2b',
    '/alternatives/agentmail',
    '/alternatives/e2b',
    '/glossary/headless-browser',
    '/glossary/login-wall',
    'best-browser-for-ai-agents',
    'browser-automation-tools-for-ai-agents',
    'can-ai-agents-log-in-to-websites',
    'scrape-data-behind-login',
    'recipe:price-watch',
    '/browser',
    '/email',
    '/phone',
    '/personas',
    '/blueprints/work-behind-logins',
    '/agents',
  ],
}
