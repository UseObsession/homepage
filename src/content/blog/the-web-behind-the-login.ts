import type { BlogPost } from './types'

/* Wave 2, batch 1, spec 6 (11 Nov 2026): the category definition and the lead of the "Behind the login" hub (order 1).
   Readers: anyone who meets the term, and the assistants that quote a definition. It defines the web behind the login in
   the live site's words, lists what sits behind each step (System §1's table, in public words), gives the research on
   how much of the web search engines can't see (Bergman 2001 in the Journal of Electronic Publishing; Madhavan et al.
   2008, Google's deep web crawl, which filtered out login forms by design), explains why crawlers stop at the login
   (Google's own Search Console help, RFC 6265, RFC 9309), why AI agents need it now (Exa, Tavily, Parallel, Firecrawl
   and Anthropic's computer use docs, each in its own words), who uses it (Home's readers), how it is collected, and
   where every other source stops, with Obsession last. Every source was read on its own page on 11 Nov 2026. He et al.
   (CACM 2007) was behind a paywall that day, so it isn't cited. Exa's "private information" is described only as its
   search page names it (proprietary data such as contact data, job postings, earnings call transcripts and investor
   portfolios). Quillon is the invented company Home uses. No dashes. */

const KLAVIYO_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const BERGMAN = 'https://doi.org/10.3998/3336451.0007.104'
const MADHAVAN = 'https://www.vldb.org/pvldb/vol1/1454163.pdf'
const GOOGLE_INDEX = 'https://www.google.com/search/howsearchworks/how-search-works/organizing-information/'
const GOOGLE_401 = 'https://support.google.com/webmasters/answer/7440203?hl=en'
const RFC_COOKIES = 'https://www.rfc-editor.org/rfc/rfc6265'
const RFC_ROBOTS = 'https://www.rfc-editor.org/rfc/rfc9309'
const EXA = 'https://exa.ai/'
const EXA_SEARCH = 'https://exa.ai/products/search'
const TAVILY = 'https://www.tavily.com/'
const PARALLEL = 'https://parallel.ai/'
const FIRECRAWL = 'https://www.firecrawl.dev/'
const FIRECRAWL_INTERACT = 'https://docs.firecrawl.dev/features/scrape'
const COMPUTER_USE = 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool'
const FTC_SWEEP =
  'https://www.ftc.gov/news-events/news/press-releases/2024/07/ftc-icpen-gpen-announce-results-review-use-dark-patterns-affecting-subscription-services-privacy'
const EXA_PRICING = 'https://exa.ai/pricing'
const TAVILY_PRICING = 'https://www.tavily.com/pricing'
const PARALLEL_PRICING = 'https://parallel.ai/pricing'
const FIRECRAWL_PRICING = 'https://www.firecrawl.dev/pricing'
const PANORAMATA_PRICING = 'https://www.panoramata.co/pricing'
const MAILCHARTS = 'https://www.mailcharts.com/'
const COMPETISCAN = 'https://www.competiscan.com/'
const KLUE = 'https://klue.com/'

export const post: BlogPost = {
  slug: 'the-web-behind-the-login',
  title: 'The web behind the login: what search engines can’t see, and why AI agents need it',
  dek: 'What companies show only to their customers: the emails and texts after a sign-up, member prices, trial limits, quotes, checkout fees and the offer made to someone who cancels. Crawlers stop in front of it by design, and AI agents that act for people inherit the gap.',
  metaTitle: 'The web behind the login: what search engines can’t index',
  description:
    'The web behind the login: what companies show only to customers, from emails to member prices and cancel offers, and why search engines can’t reach it.',
  answer:
    'The web behind the login is what companies show only to people who sign up, log in, fill a form, check out or try to cancel: the emails and texts that follow, member prices, trial limits, quotes and the offer made to stay. Search engines can’t index it because their crawlers never sign in, so AI agents that rely on search can’t see it either. Obsession collects it at any company, each fact dated with its screenshot, and teams and AI agents look it up through the API or over MCP, the standard way AI agents call tools.',
  primaryKeyword: 'web behind the login',
  keywords: [
    'what search engines can’t index',
    'deep web vs surface web',
    'data behind login',
    'behind the login',
    'deep web',
    'surface web',
    'hidden web',
  ],
  category: 'Behind the login',
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 14,
  order: 1,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'quillon.example · public vs signed in',
      period: 'Its public pricing page beside 30 days as a customer',
      cols: ['What', 'Public page', 'Signed-up customer'],
      rows: [
        { name: 'Pro plan', cells: ['£29 a month', '£24 a month signed in'], tone: 'info' },
        { name: 'Free plan', cells: ['“Start free”', '3 projects, 1 seat'], tone: 'info' },
        { name: 'Emails', cells: ['None', '9 in 30 days, each timed'], tone: 'ok' },
        { name: 'Offers', cells: ['None shown', '40% off on day 12, trial only'], tone: 'ok' },
        { name: 'Cancel', cells: ['A help article', '50% off for 3 months to stay'], tone: 'ok' },
        { name: 'Support', cells: ['A contact form', 'Reply after 31 hours'], tone: 'late' },
      ],
      notes: [
        'A search engine can index the middle column. Everything on the right needs an account and time.',
        'Quillon is an invented company.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Most of what a company does to its customers never appears on a page a search engine can open. The welcome email and its code, the member price and the limits of a free trial all sit behind a step that asks the visitor who they are. So do the quote a form returns, the delivery fee shown at the last step and the offer made to someone who tries to cancel.',
    },
    {
      kind: 'p',
      text: 'A large share of revenue travels through that private channel. Klaviyo’s own [2026 benchmarks](' +
        KLAVIYO_BENCH +
        ') show that automated flows, such as welcome and basket reminder emails, generate nearly 41% of email revenue from 5.3% of sends. Only people who signed up or left a basket ever receive them.',
    },
    {
      kind: 'stat',
      value: '41%',
      label: 'of email revenue comes from automated flows that only subscribers and shoppers receive, from 5.3% of sends',
      source: 'Klaviyo benchmarks, 2026',
      href: KLAVIYO_BENCH,
    },

    { kind: 'h2', id: 'definition', text: 'What the web behind the login is' },
    {
      kind: 'p',
      text: '**The web behind the login is everything a website shows only to people who have signed up, logged in, filled in a form, started a checkout or tried to cancel, together with everything it sends them afterwards by email, text or chat.**',
    },
    {
      kind: 'p',
      text: '“The login” is shorthand. The same line falls wherever a website asks for an email address, an account, details for a quote or a payment page before it shows the next screen. On the near side is the public web: the pages anyone can open, which search engines crawl and AI search tools retrieve. On the far side, what a person sees depends on who they are, when they joined and what they did.',
    },
    {
      kind: 'p',
      text: 'Three properties set it apart from a public page. It needs an identity, such as an email address, a phone number or an account. It unfolds over time: an offer sent on day 12 of a free trial exists only for accounts that were there on day 12. It also differs by person, so a member, a new subscriber and a visitor from another country can each see a different price for the same product.',
    },

    { kind: 'h2', id: 'what-sits-behind', text: 'What sits behind each step' },
    {
      kind: 'p',
      text: 'Each step a website puts in front of its customers hides different information, and competitors, prospects, investors and regulators each want a different part of it.',
    },
    {
      kind: 'table',
      caption: 'The steps between a visitor and what a company shows its customers, and what sits behind each',
      cols: ['Step', 'What sits behind it', 'An example'],
      rows: [
        ['Sign-up', 'Marketing emails and texts: offers, discount depth, frequency, the flows each action triggers', 'Day 3: “Invite your team”'],
        ['Login', 'Member and app prices, trial plans and limits, onboarding screens, paywalls, loyalty prices', 'Pro £24 signed in, £29 public'],
        ['Form', 'Quotes from forms and quote engines, and how fast an enquiry is answered', '£289 a month over 36 months'],
        ['Checkout', 'Fees, delivery promises, stock limits, payment options, order and returns emails', 'Delivery £4.95 at the last step'],
        ['Cancel', 'Cancel flows, the offer to stay, renewal and price rise notices, what arrives after an unsubscribe', '50% off for 3 months to stay'],
        ['Chat', 'What a support bot or chatbot tells a customer, word for word, and how long it takes', 'Chat says fixed, terms say variable'],
        ['A person or an identity check', 'Sales calls and demos, credit checks, identity documents, insurance details', 'Automated collection stops here'],
      ],
    },
    {
      kind: 'p',
      text: 'A silence counts too. The reminder that never came after a basket was left says as much about a company as the one that did. Only an account that was there, waiting, when it should have arrived can show it.',
    },

    { kind: 'h2', id: 'how-big', text: 'How much of the web search engines can’t see' },
    {
      kind: 'p',
      text: 'In August 2001 the Journal of Electronic Publishing published Michael K. Bergman’s white paper [The Deep Web: Surfacing Hidden Value](' +
        BERGMAN +
        '), from data collected in March 2000. Bergman wrote that search engines build their indices by crawling pages that are static and linked. Deep web pages, he wrote, ‘do not exist until they are created dynamically as the result of a specific search’.',
    },
    {
      kind: 'p',
      text: 'He estimated that public information on the deep web was 400 to 550 times larger than the surface web, at about 7,500 terabytes against 19. He counted nearly 550 billion documents against 1 billion, across more than 200,000 deep web sites.',
    },
    {
      kind: 'stat',
      value: '400 to 550x',
      label: 'how much larger Bergman estimated the deep web was than the surface web in 2000, at 7,500 terabytes against 19',
      source: 'Bergman, Journal of Electronic Publishing, August 2001',
      href: BERGMAN,
    },
    {
      kind: 'p',
      text: 'The most telling later work came from inside Google. In [Google’s Deep-Web Crawl](' +
        MADHAVAN +
        '), presented at the VLDB conference in Auckland in August 2008, Jayant Madhavan, Alon Halevy and four colleagues described how Google surfaced the deep web. It pre-computed submissions for HTML forms and added the result pages to its index. They put the number of high-quality HTML forms on the order of 10 million, and their surfaced content appeared in the first 10 results on Google.com for over 1,000 queries a second.',
    },
    {
      kind: 'p',
      text: 'The same paper drew the line that still holds. Google filtered out ‘forms with password inputs and any keywords typically associated with personal information, e.g., username, login’. It also left aside forms that submit changes, which under the HTML specification are meant for actions the paper lists as ‘shopping carts, travel reservations, and logins’. The system Google built to index the hidden web excluded logins and shopping baskets by design.',
    },
    {
      kind: 'p',
      text: 'Most of what Bergman measured was public. He found that 95% of the deep web was publicly accessible, ‘not subject to fees or subscriptions’, and that more than half of it sat in topic-specific databases. Neither study measured what companies show and send their own customers after a sign-up. That can’t be measured from outside, because it differs for every account and arrives over time.',
    },
    {
      kind: 'p',
      text: 'The two problems need different machines. Bergman’s deep web is a retrieval problem: send the right query and the page appears, which is why Google could surface millions of forms automatically. The web behind the login is a problem of identity and time. Someone has to become a customer, stay one and keep what arrives, dated, because none of it can be fetched again later.',
    },
    {
      kind: 'p',
      text: 'None of this is the dark web. The dark web means sites reachable only through anonymity networks such as Tor. The web behind the login is ordinary commerce: a bank’s rates for existing customers, a shop’s member prices, the emails a software company sends during a trial.',
    },

    { kind: 'h2', id: 'why-search-stops', text: 'Why search engines stop at the login' },
    {
      kind: 'p',
      text: 'A search engine builds its index by crawling: a program called a crawler fetches a page, follows its links and stores what it finds. Google says its crawlers ‘automatically visit publicly accessible webpages’, and that [its index](' +
        GOOGLE_INDEX +
        ') covers hundreds of billions of webpages and is well over 100,000,000 gigabytes in size. Five gaps keep content out of that index.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**No account.** Google’s [Search Console help](' +
          GOOGLE_401 +
          ') says that ‘Googlebot never provides credentials’. A page that asks for a login is reported as blocked due to an unauthorized request, and Google can’t reach a page that ‘requires a login’.',
        '**No session.** A login lasts because the website stores a small token in the browser. That token is a cookie, which [RFC 6265](' +
          RFC_COOKIES +
          ') describes as the way servers ‘maintain a stateful session over the mostly stateless HTTP protocol’. Without an account there is no session to keep, so every page is served as it would be to a stranger.',
        '**No address.** An email or a text message lives in one person’s inbox, never at a web address a crawler can fetch. The welcome series, the basket reminder and the renewal notice are delivered to each customer separately.',
        '**No single version.** A signed-in price or a trial screen changes with the account viewing it, so there is no one page to store.',
        '**No past.** An index stores a page as it was when crawled. The offer sent on day 12 of a trial, or the price rise notice before a renewal, exists only for accounts that were there when it went out.',
      ],
    },
    {
      kind: 'art',
      art: {
        kind: 'log',
        title: 'quillon.example · 30 days signed up',
        who: 'A new trial account in the UK, with its own inbox',
        rows: [
          { time: 'Day 0 09:00', text: 'Signed up for the free trial', detail: 'The pricing page shows Pro at £29', tone: 'info' },
          { time: 'Day 0 09:03', text: 'Welcome email', detail: 'Kept as it arrived, sender checked', tone: 'ok' },
          { time: 'Day 3', text: '“Invite your team” email', detail: 'Free plan: 3 projects, 1 seat', tone: 'ok' },
          { time: 'Day 7', text: 'Upgrade prompt at the 3rd project', detail: 'Pro offered at £24 signed in', tone: 'info' },
          { time: 'Day 12', text: '40% off the first year', detail: 'Trial users only, absent from the pricing page', tone: 'ok' },
          { time: 'Day 15', text: 'Asked support about seats', detail: 'Reply after 31 hours', tone: 'late' },
          { time: 'Day 30', text: 'Started to cancel', detail: 'Offered 50% off for 3 months to stay', tone: 'ok' },
        ],
        foot: 'An invented company. Each row exists only for an account that was signed up on that day.',
      },
      caption: 'What no crawler can store: 30 days of an invented company’s trial, each moment seen only by an account that was there when it happened.',
    },
    {
      kind: 'p',
      text: 'Pages a site asks crawlers to skip are a separate case. The robots.txt standard, [RFC 9309](' +
        RFC_ROBOTS +
        ') from September 2022, lets a site list the addresses crawlers should leave alone, and it says that ‘these rules are not a form of access authorization’. Anyone can still open a page listed in robots.txt; nobody can open a page behind a login without an account.',
    },

    { kind: 'h2', id: 'ai-agents', text: 'Why AI agents need it now' },
    {
      kind: 'p',
      text: 'AI agents now answer questions and take actions for people: comparing plans, booking, buying and cancelling. Many of them reach the web through search APIs built for them. Exa calls itself [‘The world’s data for AI agents’](' +
        EXA +
        ') and says it searches ‘the largest index of public web and private information’. [Its search page](' +
        EXA_SEARCH +
        ') describes its own index of 100 billion documents and names the proprietary data beside it, such as contact data, job postings, earnings call transcripts and investor portfolios.',
    },
    {
      kind: 'p',
      text: '[Tavily](' +
        TAVILY +
        ') offers ‘one secure API for real-time web access’. [Parallel](' +
        PARALLEL +
        ') describes ‘web infrastructure for AI to search, extract, monitor, and reason over the world’s information’. [Firecrawl](' +
        FIRECRAWL +
        ') calls itself an open-source web data API for AI agents and apps built on large language models. Its [Interact feature](' +
        FIRECRAWL_INTERACT +
        ') runs ‘a stateful browser session that stays alive across calls’, with profiles, for pages that need a login. How the four compare on index, freshness, extraction and price is in [Exa vs Tavily vs Firecrawl vs Parallel](/blog/exa-vs-tavily-vs-firecrawl).',
    },
    {
      kind: 'p',
      text: 'Each is strong at its job, and each answers from what a page shows when the agent asks. None of their pages describes an account kept at a company for weeks, an inbox that receives what the company sends, or a dated history of it. That history can’t be fetched after the fact: an email sent last month to new subscribers exists only in the inboxes of people who had subscribed before it went out.',
    },
    {
      kind: 'p',
      text: 'Agents that drive a browser can sign in to a person’s own account for one task. Anthropic’s [computer use tool](' +
        COMPUTER_USE +
        ') gives Claude ‘screenshot capabilities and mouse/keyboard control’. Its documentation advises against giving the model ‘access to sensitive data, such as account login information’. It also warns that using the tool inside applications that require a login raises the risk of prompt injection, where instructions hidden in a page take over the agent. An agent in a session can read what one account shows today. It can’t have been a subscriber for the last 30 days.',
    },
    {
      kind: 'p',
      text: 'Many of the questions people ask agents about companies sit on the far side of the login. They ask about a company’s offer to new subscribers this month, where its free plan stops and its offer to someone who cancels. An agent grounded only in the public web answers those from the marketing page, or not at all. [Can AI agents log in to websites](/blog/can-ai-agents-log-in-to-websites) covers sessions, one-time codes and the law, and [how to scrape data behind a login](/blog/scrape-data-behind-login) covers doing it in your own account.',
    },

    { kind: 'h2', id: 'who-uses', text: 'Who uses the web behind the login' },
    {
      kind: 'p',
      text: 'Any team whose decisions depend on what other companies do to their customers: the teams that sell to other companies, compete with them or invest in them.',
    },
    {
      kind: 'list',
      items: [
        '**Agencies** open a pitch with the prospect’s own emails, and the ones that never came.',
        '**Sales teams** see what each account sends its own customers before the call.',
        '**Marketing and product teams** follow every competitor’s emails, onboarding and paywall without signing up themselves.',
        '**Pricing teams** compare competitors’ member prices with their public ones, date by date ([member-only pricing](/blog/member-only-pricing)).',
        '**Banks, fintechs and their conduct teams** keep dated screenshots and emails of what customers are shown and sent, their own and competitors’ ([Consumer Duty fair value assessment](/blog/consumer-duty-fair-value-assessment)).',
        '**Compliance teams at subscription companies** test that cancel, unsubscribe and STOP work. The US Federal Trade Commission and two international enforcement networks, ICPEN and GPEN, [reviewed 642 subscription websites and apps](' +
          FTC_SWEEP +
          ') with officials from 27 authorities in 26 countries. Nearly 76% used at least one possible dark pattern.',
        '**Funds and research firms** read offers, prices and rates across a market, month after month, because that history can’t be collected later.',
        '**Teams building AI agents** give their agent a competitor’s real price, trial limit or offer in one call ([the API and MCP](/developers)).',
      ],
    },

    { kind: 'h2', id: 'how-it-fills', text: 'How the web behind the login is collected' },
    {
      kind: 'p',
      text: 'Collecting it means doing what any customer does and staying long enough to see what follows. That means signing up with a real inbox and phone number, starting the trial, asking for the quote, leaving the basket, opening the chat and starting to cancel. Every email, text and screen is then kept exactly as it arrived, with the time.',
    },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request.',
    },
    {
      kind: 'p',
      text: 'An Obsession agent signs up the way any customer can, with its own inbox, phone number and browser, and says it’s an AI when it talks to a person. It never gets round a CAPTCHA or a bot block, and it never invents identity details ([who visits a site, and the lines every agent keeps](/agents)). Each new email, price and offer is added on the day it arrives, so a company’s history builds from the first day it is followed. One question can be asked across many companies at once, a row each. Obsession’s agents have run 1,500 sign-ups, baskets and checkouts at real companies, and counting.',
    },
    {
      kind: 'cta',
      text: 'See the web behind the login for a real UK skincare store, September 2026. Every email and screenshot is kept in every format it comes in, and a £40 basket left at 02:57 got no reminder in 48 hours.',
      to: '/sample-output',
      label: 'See sample data',
    },

    { kind: 'h2', id: 'other-sources', text: 'Where every other source stops', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Sources of information about other companies, and how far past the public page each reaches. Prices from each provider’s own pages, 11 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Search engines: Google', 'Hundreds of billions of public pages, ranked for any question', 'Free to search', 'Googlebot never provides credentials', 'What a company publishes'],
        [
          'Web search APIs: Exa\nTavily\nParallel',
          'Search, page contents, research and monitoring over the public web, built for agents',
          'Exa: from $4 per 1,000 searches\nTavily: 1,000 free credits a month, then $0.008 a credit\nParallel: from $1 per 1,000 requests',
          'Public pages, plus Exa’s proprietary data',
          'Grounding an agent in the public web',
        ],
        [
          'Crawlers and scrapers: Firecrawl',
          'Any page into clean markdown or JSON, with browser sessions that stay signed in across calls',
          'Free: 1,000 pages a month\nStandard: $99 a month for 100,000',
          'What a page shows when it is fetched',
          'Reading pages, including your own account',
        ],
        [
          'Email and SMS archives: Panoramata\nMailCharts',
          'Competitors’ emails, flows and SMS from sign-ups each runs, sorted and searchable',
          'Panoramata: $99 a month for 20 competitors\nMailCharts: on request',
          'The brands on their index or your plan',
          'Email and SMS campaign planning',
        ],
        [
          'Panels: Competiscan',
          'Mail, email, digital, social and print sent to large consumer panels, by industry',
          'No public price',
          'The sectors its panels see',
          'Bank, credit card, insurance and telecom marketing',
        ],
        [
          'Competitive intelligence: Klue',
          'Collects and shares competitive intel, battlecards and win-loss from CRM data and calls',
          'No public price',
          'Its pages don’t describe sign-ups at competitors',
          'Sales battlecards',
        ],
        [
          'By hand: a spare inbox and a spreadsheet',
          'Every step, at any company, by a person who knows what to look for',
          'Free, plus staff hours',
          'A handful of companies, until someone stops checking',
          'A one-off look at a few companies',
        ],
        [
          'Obsession (ours): lookup, facts, evidence, index and notify; recipes (ready-made collections) for competitor tracking, price watch and trial teardown',
          'What any company shows only to customers, from sign-up to cancel, each fact dated with its screenshot',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Every step short of paying',
          'Any company you name, for as long as you follow it',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Each source is good at its own job, and the sources differ in how far past the public page they reach and for which companies. [Exa’s pricing](' +
        EXA_PRICING +
        '), [Tavily’s](' +
        TAVILY_PRICING +
        '), [Parallel’s](' +
        PARALLEL_PRICING +
        ') and [Firecrawl’s](' +
        FIRECRAWL_PRICING +
        ') are priced per call, per credit or per page. [Panoramata](' +
        PANORAMATA_PRICING +
        ') follows the competitors on a plan across emails, flows, SMS, ads and landing pages. [MailCharts](' +
        MAILCHARTS +
        ') says it signs up to, triggers and classifies thousands of ecommerce email journeys. [Competiscan](' +
        COMPETISCAN +
        ') draws on long-running consumer panels, and [Klue](' +
        KLUE +
        ') turns what a sales team collects into battlecards and win-loss stories. The full comparison, step by step, is on [the comparison page](/compare).',
    },
    {
      kind: 'p',
      text: 'Search engines index what websites publish. Obsession indexes what they show only past the login.',
    },
    {
      kind: 'p',
      text: 'For what a company shows and sends its customers after the login, at any company you name, dated and kept for as long as you follow it, use Obsession. For what a company publishes, use a search engine or a web search API. Use a crawler to read pages you can open, an archive or panel for the brands it already follows, and a competitive intelligence tool to share what a sales team learns. They work together: an agent can call a search API for the public page and Obsession for what sits behind it.',
    },

    { kind: 'h2', id: 'when-not', text: 'When the public web is enough' },
    {
      kind: 'p',
      text: 'When the question is about what a company publishes, the public web answers it: a press release, a pricing page, documentation, job posts, reviews. A team that follows two or three competitors whose offers rarely change can sign up by hand once a month and keep screenshots in a shared folder. The web behind the login matters when the answer changes with who is asking, arrives after the first visit, or has to be shown later with its date.',
    },
    {
      kind: 'cta',
      text: 'Name the first company to look up. Its emails and texts, member prices, trial limits, quotes and cancel offers come back dated with screenshots, and each new one is added the day it arrives. Onboarding teams now.',
      to: '/compare',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about the web behind the login' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the web behind the login?',
          a: 'Everything a website shows only to people who have signed up, logged in, filled in a form, started a checkout or tried to cancel, and what it sends them afterwards. That covers welcome emails and texts, member prices, trial limits, quotes, checkout fees and the offer made to stay.',
        },
        {
          q: 'What can’t search engines index?',
          a: 'Search engines can’t index pages that need an account, or results that appear only after a form is submitted. They also miss messages sent by email or text, pages that differ for each signed-in person, and anything that happened before the crawler arrived. Google’s own help says Googlebot never provides credentials, so a page that asks for a login stays out of its index.',
        },
        {
          q: 'What is the difference between the deep web and the surface web?',
          a: 'The surface web is every page a search engine can reach by following links. The deep web is everything it can’t, which Michael K. Bergman estimated in 2001 at 400 to 550 times the size of the surface web. The web behind the login is the part of the deep web that needs an account or a customer’s details.',
        },
        {
          q: 'Is the deep web the same as the dark web?',
          a: 'No. The dark web is a set of sites reachable only through anonymity networks such as Tor. The deep web is ordinary content that search engines can’t reach, such as a bank’s pages for signed-in customers or a shop’s member prices. The web behind the login is part of it.',
        },
        {
          q: 'Can AI agents see content behind a login?',
          a: 'An agent that drives a browser can read what one account shows during a session, if someone gives it the login, though its makers advise care with credentials. It can’t see what that account was sent before the session, or what other kinds of customer see. Agents get that from a source that has kept accounts open and dated what arrived.',
          link: { label: 'Can AI agents log in to websites?', to: '/blog/can-ai-agents-log-in-to-websites' },
        },
        {
          q: 'Is it legal to collect data behind a login?',
          a: 'Collection stays on the customer’s side of the line when it signs up through public forms as any customer can. It should also say it’s an AI when it talks to a person, use no fake details and never get round a CAPTCHA. Signing in to someone else’s account, or getting past an identity check, crosses it. Laws differ by country and use, so take legal advice for your own case.',
        },
        {
          q: 'How big is the deep web?',
          a: 'Bergman’s 2001 study used data collected in March 2000. It estimated about 7,500 terabytes and nearly 550 billion documents in the deep web, against 19 terabytes and 1 billion documents on the surface web. Neither that study nor Google’s 2008 deep web crawl measured what companies send their customers after a sign-up, and Google’s crawl filtered out login forms on purpose.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every figure links to its source on the page where it appears, with that source’s own date. Quillon and every detail in the 2 illustrations are invented. The legal points are general information, never legal advice.',
    },
  ],

  sources: [
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: KLAVIYO_BENCH, date: '2026' },
    { title: 'White Paper: The Deep Web: Surfacing Hidden Value', publisher: 'Journal of Electronic Publishing, vol. 7, no. 1 (Michael K. Bergman)', url: BERGMAN, date: '2001-08-01' },
    { title: 'Google’s Deep-Web Crawl', publisher: 'Proceedings of the VLDB Endowment, vol. 1 (Madhavan, Ko, Kot, Ganapathy, Rasmussen and Halevy)', url: MADHAVAN, date: '2008-08' },
    { title: 'Organizing information: how Google Search works', publisher: 'Google', url: GOOGLE_INDEX },
    { title: 'Page indexing report', publisher: 'Google Search Console Help', url: GOOGLE_401 },
    { title: 'RFC 6265: HTTP State Management Mechanism', publisher: 'IETF', url: RFC_COOKIES, date: '2011-04' },
    { title: 'RFC 9309: Robots Exclusion Protocol', publisher: 'IETF', url: RFC_ROBOTS, date: '2022-09' },
    { title: 'The world’s data for AI agents', publisher: 'Exa', url: EXA },
    { title: 'Search API', publisher: 'Exa', url: EXA_SEARCH },
    { title: 'Connect your AI agents to the web', publisher: 'Tavily', url: TAVILY },
    { title: 'Where agents find answers', publisher: 'Parallel', url: PARALLEL },
    { title: 'Firecrawl', publisher: 'Firecrawl', url: FIRECRAWL },
    { title: 'Scrape: actions and Interact', publisher: 'Firecrawl Docs', url: FIRECRAWL_INTERACT },
    { title: 'Computer use tool', publisher: 'Claude Docs (Anthropic)', url: COMPUTER_USE },
    { title: 'FTC, ICPEN, GPEN announce results of review of use of dark patterns affecting subscription services, privacy', publisher: 'US Federal Trade Commission', url: FTC_SWEEP, date: '2024-07-10' },
    { title: 'Pricing', publisher: 'Exa', url: EXA_PRICING },
    { title: 'Pricing', publisher: 'Tavily', url: TAVILY_PRICING },
    { title: 'Pricing', publisher: 'Parallel', url: PARALLEL_PRICING },
    { title: 'Pricing', publisher: 'Firecrawl', url: FIRECRAWL_PRICING },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA_PRICING },
    { title: 'MailCharts', publisher: 'MailCharts from Validity', url: MAILCHARTS },
    { title: 'Competiscan', publisher: 'Competiscan', url: COMPETISCAN },
    { title: 'The AI platform for competitive intelligence and win-loss', publisher: 'Klue', url: KLUE },
  ],
  related: [
    'exa-vs-tavily-vs-firecrawl',
    'scrape-data-behind-login',
    'can-ai-agents-log-in-to-websites',
    'member-only-pricing',
    'consumer-duty-fair-value-assessment',
    '/compare',
    '/',
  ],
}
