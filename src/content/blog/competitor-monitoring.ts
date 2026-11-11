import type { BlogPost } from './types'

/* Revenue team guides, spec 9 (_research/seo/revenue-teams-11nov/WRITER_BRIEF.md and PLAN.md, 11 Nov 2026):
   competitor monitoring for competitive intelligence teams at software companies (persona key ci). Primary
   "competitor monitoring"; secondaries from Google autocomplete (US and UK, 11 Nov, demand.json): competitor monitoring
   software, competitor monitoring tools, competitor monitoring ai, competitor monitoring dashboard, track competitor
   changes, saas competitor analysis (and its template). Page 1 today is vendor listicles and price monitors, all built
   on public pages, news and social; this guide adds what a competitor shows only to the people who sign up, with a
   copyable tracking sheet, a SaaS competitor analysis template, a worked example per kind of vendor and a fair
   comparison. "Competitor tracking" stays with /recipes/competitor-tracking and is linked with that anchor.
   Every fact about another tool comes from its own pages, read on 11 Nov 2026: visualping.io/pricing (plans, history,
   Actions behind a login), crayon.co and /pricing, klue.com, /compete-agent (its meta description) and /pricing,
   kompyte.com (no pricing page: /pricing returned 404, so "not listed on its home page"), Google's Alerts help page,
   exa.ai and exa.ai/pricing (Monitors). Salesforce's MSA (last updated 15 Oct 2026) re-read the same day for the trial
   terms point. The 150+ competitors line is a customer figure on Klue's home page. The hours table is our sums from
   labelled example inputs. Larkpost, Sendwell and the other .example companies are invented. Obsession lines follow
   site.ts (ENTITY), /sales, /agents, /developers and the competitor tracking, trial teardown and email and SMS tracking
   recipes; the platform behind each email follows /sales ("Their emails have come from a new platform since 2
   October"). No MCP command printed: mcp.useobsession.com had no DNS record on 11 Nov. British English, no dashes. */

const VISUALPING = 'https://visualping.io/pricing'
const CRAYON = 'https://www.crayon.co/'
const CRAYON_PRICING = 'https://www.crayon.co/pricing'
const KLUE = 'https://klue.com/'
const KLUE_AGENT = 'https://klue.com/compete-agent'
const KLUE_PRICING = 'https://klue.com/pricing'
const KOMPYTE = 'https://www.kompyte.com/'
const GOOGLE_ALERTS = 'https://support.google.com/websearch/answer/4815696?hl=en'
const EXA_HOME = 'https://exa.ai/'
const EXA_PRICING = 'https://exa.ai/pricing'
const SALESFORCE = 'https://www.salesforce.com/company/msa.jsp'

export const post: BlogPost = {
  slug: 'competitor-monitoring',
  title: 'Competitor monitoring for software companies: their emails, prices and offers, dated',
  dek: 'What a software company’s competitive intelligence team should track at each competitor, from pricing pages to trial emails, and which tools watch each part. It includes a sheet to copy and a way to keep every change dated.',
  metaTitle: 'Competitor monitoring for software companies: trials, prices',
  description:
    'Competitor monitoring for software companies: what to track, the tools that watch pages and news, and each competitor’s trial emails and offers, dated.',
  answer:
    'Competitor monitoring is the ongoing tracking of what competitors change, from pricing pages and launches to the trial emails and offers they send new sign-ups, so battlecards stay current. Visualping watches the pages you choose, Crayon, Klue and Kompyte turn competitor intel into battlecards, and Google Alerts catches the news. Obsession keeps the trial emails, upgrade prompts and save offers competitors show only to signed-up customers, dated with screenshots, by API or MCP (the standard way AI agents call tools).',
  primaryKeyword: 'competitor monitoring',
  keywords: [
    'competitor monitoring software',
    'competitor monitoring tools',
    'track competitor changes',
    'saas competitor analysis',
    'saas competitor analysis template',
    'competitor monitoring ai',
    'competitor monitoring dashboard',
  ],
  category: 'Watch other companies',
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 15,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'A competitor’s trial, day by day',
      who: 'larkpost.example, an email and SMS platform',
      rows: [
        { time: 'Day 0, 09:02', text: 'Welcome email: 14 day trial, 500 contacts', tone: 'ok' },
        { time: 'Day 3, 10:15', text: 'Onboarding email: import your list', tone: 'info' },
        { time: 'Day 7, 14:40', text: 'Upgrade prompt at 500 contacts', detail: 'In the app, screenshot kept', tone: 'info' },
        { time: 'Day 12, 09:14', text: '30% off a yearly plan', detail: 'Sent to trial users only', tone: 'ok' },
        { time: 'Day 14, 11:30', text: 'Cancel flow: 2 months at half price', detail: 'The save offer', tone: 'ok' },
        { time: 'Day 21, 08:00', text: 'Pricing page unchanged: Pro at $79', tone: 'info' },
      ],
      foot: 'Example: Larkpost is invented. Only the last line ever appeared on its public pricing page.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Competitor monitoring for software companies is the weekly work of tracking what each competitor changes, from its pricing page and launches to the trial emails and offers it sends new sign-ups. The [competitive intelligence](/glossary/competitive-intelligence) (CI) and product marketing teams who brief sales turn those changes into [battlecards](/glossary/battlecard), pricing notes and positioning. A rep can then answer the competitor a buyer names with a fact from this week. Page monitors, CI platforms and news alerts cover the public half well. The other half appears only inside a competitor’s product and inbox, and it moves most often at the self-serve competitors that turn up in deal after deal.',
    },

    { kind: 'h2', id: 'what-to-track', text: 'What competitor monitoring covers at a software company' },
    {
      kind: 'p',
      text: 'A CI team watches 4 places at each competitor. The competitor’s public pages, the news and reviews about it, and what buyers tell your reps can all be followed from outside. The fourth is what the competitor shows inside a signed-up account.',
    },
    {
      kind: 'table',
      caption: 'Where each competitor change shows, and how teams see it today',
      cols: ['What changes', 'Where it shows', 'How teams see it today'],
      rows: [
        ['Plans, prices and packaging', 'The public pricing page', 'A page monitor or a weekly look'],
        ['Launches and features', 'Blog, changelog, docs, press', 'CI platforms and news alerts'],
        ['Funding, hires and reviews', 'News, job boards, review sites', 'CI platforms and news alerts'],
        ['Positioning in deals', 'What buyers tell your reps', 'Call notes and win-loss interviews'],
        ['Trial limits and upgrade prompts', 'Inside the product, after sign-up', 'Someone signs up by hand'],
        ['Onboarding emails and offers', 'The inbox of a new sign-up', 'Someone signs up by hand'],
        ['Save offers when cancelling', 'The cancel flow of a live account', 'Rarely seen at all'],
      ],
    },
    {
      kind: 'p',
      text: 'The first 4 rows change in public, so a tool can watch them for every competitor at once. The last 3 change in private. A competitor can cut its free plan, move its upgrade prompt to day 5 or email trial users 30% off without touching its pricing page. Those are the changes a buyer meets during a trial, and the ones a rep hears about last, usually from the buyer.',
    },

    { kind: 'h2', id: 'how-tools-work', text: 'How competitor monitoring software works' },
    {
      kind: 'p',
      text: 'Most CI teams work from similar sources. They read each competitor’s website, news and review sites, hear what reps learn on calls, and use search tools such as Exa to read the public web in seconds. The software that automates it works in 3 ways:',
    },
    {
      kind: 'list',
      items: [
        '**Page change monitors** load a page you name on a schedule, keep a copy and alert you when its text or its look changes. They suit pricing, plans and docs pages.',
        '**CI platforms** collect from many public sources at once, such as websites, news, reviews, social posts, ads and job posts. They use AI to sort what matters and deliver it as alerts, digests and battlecards inside the CRM and Slack.',
        '**News alerts and search** run a saved query and send what is new. Google Alerts emails new search results for a topic, and Exa’s Monitors repeat a search on a schedule.',
      ],
    },
    {
      kind: 'p',
      text: 'Each of the 3 reads what a competitor publishes, or what a page shows an account your team already holds. None of their own pages describes receiving the emails a competitor sends a new trial user, or keeping a trial open to see the day its prompts and offers change.',
    },

    { kind: 'h2', id: 'tools', text: 'Competitor monitoring tools, by what they watch' },
    {
      kind: 'p',
      text: 'Each tool here is described from its own pages, with the price it lists. [Klue alternatives](/alternatives/klue) and [Crayon alternatives](/alternatives/crayon) sort more options by job.',
    },
    { kind: 'h3', id: 'visualping', text: 'Visualping: changes to the pages you choose' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Visualping](' +
          VISUALPING +
          ') checks the pages you choose for visual and text changes and writes an AI summary of each, flagged important or not. Every plan, the free one included, comes with its REST API and MCP server. Its Actions type a username and password and click log in before each check, so it can watch a page behind a login your team holds.',
        '**Price as listed:** free for 150 checks a month across 5 pages. Personal plans cost $14 to $70 a month and Business plans $140 to $350 a month, less when billed yearly, with a 14 day Business trial and no payment details needed.',
        '**Where it stops:** change history is kept for 3 months by default and 1 year on Business. It watches pages, and its pricing page doesn’t describe receiving the emails a competitor sends.',
        '**Best for:** an alert the day a competitor’s pricing, plans or docs page changes.',
      ],
    },
    { kind: 'h3', id: 'crayon', text: 'Crayon: monitoring that feeds battlecards' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Crayon](' +
          CRAYON +
          ') “monitors your competitors and alerts you to relevant intel”. It summarises articles about competitors with AI, scores what it finds by importance and puts battlecards in Salesforce, Slack, Highspot and other tools. Its win/loss and engagement data show which competitors give the sales team the most trouble, and who uses the battlecards.',
        '**Price as listed:** [not published](' +
          CRAYON_PRICING +
          '). “Crayon’s pricing is tailored to the needs of your competitive intelligence program”, through a Request an Estimate form.',
        '**Where it stops:** its home page describes monitoring competitors and the news about them. Its pages don’t describe signing up to a competitor’s product or keeping the emails it sends.',
        '**Best for:** a CI programme that wants monitoring, battlecards and adoption data in one place.',
      ],
    },
    { kind: 'h3', id: 'klue', text: 'Klue: competitive intelligence with win-loss' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Klue](' +
          KLUE +
          ') calls itself “The AI platform for Competitive Intelligence & Win-Loss”. Its [Compete Agent](' +
          KLUE_AGENT +
          ') “automatically generates insights from sales calls and market data”, and its win-loss suite adds buyer interviews by an AI Interviewer and by Klue’s own analysts. Sellers get cited answers in Slack and the AI tools they already use.',
        '**Price as listed:** [not published](' + KLUE_PRICING + '). The pricing page asks visitors to get a demo.',
        '**Where it stops:** its pages describe market intel, sales calls and buyer interviews, and don’t describe signing up to a competitor’s product or reading its onboarding emails.',
        '**Best for:** teams that want competitor monitoring and win-loss interviews on one platform.',
      ],
    },
    { kind: 'h3', id: 'kompyte', text: 'Kompyte: tracking across hundreds of sources' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Kompyte](' +
          KOMPYTE +
          '), a Semrush product, “automatically tracks your competitors’ updates across hundreds of sources and millions of data points”. It names websites, reviews, content, social, ads and job postings. AI filters the noise into daily summaries. Its battlecards reach the CRM, Slack, Microsoft Teams and sales tools such as Highspot through what it calls bi-directional integrations.',
        '**Price as listed:** not listed on its home page, which offers Get started.',
        '**Where it stops:** the sources it names are public: websites, reviews, content, social, ads and job posts.',
        '**Best for:** web tracking and battlecards beside a team’s Semrush work.',
      ],
    },
    { kind: 'h3', id: 'alerts-and-exa', text: 'Google Alerts and Exa: news and the public web' },
    {
      kind: 'p',
      text: '[Google Alerts](' +
        GOOGLE_ALERTS +
        ') lets you “get emails when new results for a topic show up in Google Search”, set by how often, which sources and which region. It is free, and one alert per competitor name takes minutes to set up.',
    },
    {
      kind: 'p',
      text: '[Exa](' +
        EXA_HOME +
        ') calls itself “The world’s data for AI agents” and says it searches “the largest index of public web and private information”. Its [Monitors](' +
        EXA_PRICING +
        ') are “Scheduled searches that surface new events on the web”, at $2 per 1,000 requests. A rep or an agent gets the public web on any competitor in seconds. [Obsession vs Exa](/compare/obsession-vs-exa) sets out how the two work side by side.',
    },
    { kind: 'h3', id: 'by-hand', text: 'By hand: a trial account, an inbox and a spreadsheet' },
    {
      kind: 'p',
      text: 'Someone on the team signs up to each competitor’s trial and newsletter with a dedicated inbox. They log every email and prompt with its date and a screenshot, and walk the cancel flow before the trial ends. This method sees everything a new customer sees, at any competitor with a public sign-up, for the cost of staff hours.',
    },

    { kind: 'h2', id: 'behind-the-sign-up', text: 'What a competitor shows only to the people who sign up' },
    {
      kind: 'p',
      text: 'A self-serve software competitor does most of its selling after the sign-up. The pricing page names the plans. The account shows where each plan stops, and the inbox shows how hard the competitor works to close and keep each user. These are the facts a buyer in a trial meets, and they change without notice:',
    },
    {
      kind: 'list',
      items: [
        '**[Trial limits](/glossary/trial-limit):** the seats, contacts or credits a free plan allows, and the counter or locked button that appears as they run out.',
        '**[Upgrade prompts](/glossary/upgrade-prompt):** the day and the trigger for each prompt to pay, such as passing 500 contacts or inviting a second user.',
        '**[The welcome series](/glossary/welcome-series) and onboarding emails:** how many, how soon, what each asks the user to do and who signs them.',
        '**Offers to close:** the discount or extra week sent to trial users before the trial ends, often on no public page.',
        '**[Save offers](/glossary/save-offer):** what the [cancel flow](/glossary/cancel-flow) offers a user who tries to leave, such as a pause, a cheaper plan or months at half price.',
        '**The newsletter list:** launches, webinars and pricing news emailed to subscribers, sometimes a day before the website shows them. [Competitor email tracking tools](/blog/competitor-email-tracking-tools) compares the ways to follow them.',
      ],
    },
    {
      kind: 'p',
      text: 'Each is a dated fact a rep can show a buyer. “Their trial users get 30% off on day 12” is worth more in a deal than “they discount”. [Trial teardown](/recipes/trial-teardown) lays out a competitor’s whole trial by day, and [competitor tracking](/recipes/competitor-tracking) keeps every email, offer and price on 1 timeline. [Trial checks for software companies](/use-cases/trial-checks-for-software-companies) shows both at work on a company’s own trial and 5 competitors’.',
    },

    { kind: 'h2', id: 'by-kind-of-vendor', text: 'Track competitor changes by what your company sells' },
    {
      kind: 'p',
      text: 'What matters depends on what your company sells. For vendors whose product touches what their own customers’ customers see, competitors differ most after the sign-up. Each row is a worked example on an invented competitor:',
    },
    {
      kind: 'table',
      caption: 'Example findings at invented .example competitors, and the battlecard line each one gives a rep',
      cols: ['What your company sells', 'What a signed-up account saw', 'The battlecard line'],
      rows: [
        ['Email and SMS platform', 'larkpost.example: 30% off yearly on trial day 12', 'Expect the discount near day 12'],
        ['Help desk and AI support', 'quillhelp.example: AI answers locked on the trial after 50 replies', 'Show our AI answers on the trial'],
        ['Checkout and payments', 'tillpoint.example: 4 setup emails before the identity check', 'Lead with how fast a merchant starts'],
        ['Identity and onboarding', 'verabase.example: upgrade prompt after 100 free checks', 'Price against the real starting volume'],
        ['Loyalty and reviews', 'starloop.example: 2 months at half price in the cancel flow', 'Their customers are offered a reason to stay'],
        ['Messaging API', 'pingwell.example: credit-low email on day 4', 'Compare the price after the free credit'],
      ],
    },

    { kind: 'h2', id: 'worked-example', text: 'One week of competitor monitoring at an email platform' },
    {
      kind: 'p',
      text: 'Sendwell, an email and SMS platform, loses deals to Larkpost, a competitor with a 14 day free trial. Both are invented. Sendwell’s CI lead follows Larkpost’s pricing page with a page monitor and its news through an alert. The lead also keeps a trial account and a newsletter subscription open for as long as Larkpost competes for the same deals.',
    },
    {
      kind: 'art',
      art: {
        kind: 'report',
        title: 'Where each change showed',
        period: 'Example: larkpost.example, 2 to 8 November',
        cols: ['The change', 'Public page', 'Signed-up account'],
        rows: [
          { name: 'Pro plan from $79 to $89', cells: ['Pricing page, Tue', 'Newsletter email, Mon'], tone: 'info' },
          { name: 'AI writer launched', cells: ['Blog post, Wed', 'Launch email, Wed 08:00'], tone: 'info' },
          { name: 'Free plan cut to 1 seat', cells: ['On no public page', 'Notice in the app, Thu'], tone: 'ok' },
          { name: '30% off yearly for trials', cells: ['On no public page', 'Day 12 email, Fri 09:14'], tone: 'ok' },
          { name: 'Save offer: 2 months half price', cells: ['On no public page', 'Cancel flow, Sat'], tone: 'ok' },
        ],
        notes: ['Example: Larkpost and its changes are invented. A page monitor sees the middle column; the right needs an account.'],
      },
      caption: 'Example: most of Larkpost’s changes that week appeared on no public page, only in a signed-up account.',
    },
    {
      kind: 'p',
      text: 'The price rise reached Sendwell’s battlecard on Tuesday through the page monitor, a day after Larkpost emailed it to its newsletter list. The launch came through the news alert. The other 3 changes came only through the trial account: the free plan cut to 1 seat, the 30% yearly discount on day 12 and the save offer in the cancel flow. Sendwell’s battlecard now tells reps to expect the discount near day 12, and to show a buyer’s team that Sendwell’s free plan still fits more than 1 person. [Battlecard template](/blog/battlecard-template) shows where each line goes on the battlecard.',
    },

    { kind: 'h2', id: 'template', text: 'A SaaS competitor analysis template to copy' },
    {
      kind: 'p',
      text: 'Two sheets do the job, and together they make a simple competitor monitoring dashboard. The first compares competitors side by side and is rebuilt each quarter. The second logs every change the day it lands and feeds the first.',
    },
    {
      kind: 'table',
      caption: 'Sheet 1, the SaaS competitor analysis: one column per competitor, each cell dated with the screenshot behind it',
      cols: ['Row', 'What to write', 'Where it comes from'],
      rows: [
        ['Plans and list prices', 'Each plan, price and billing period', 'Public pricing page'],
        ['Trial length and payment', 'Days, and whether payment details are asked for', 'The sign-up form'],
        ['Trial limits', 'Seats, contacts, credits or features', 'The account, as limits appear'],
        ['Upgrade prompts', 'The day and the trigger for each', 'The account, screenshot each'],
        ['Onboarding emails', 'Count, timing, what each asks', 'The trial inbox'],
        ['Offer before the trial ends', 'The discount, its day and its end', 'The trial inbox'],
        ['Save offer', 'What the cancel flow offers', 'The cancel flow'],
        ['Newsletter and launches', 'What went out, and when', 'The newsletter inbox'],
        ['Positioning', 'The claim each leads with', 'Home page, emails, buyer calls'],
        ['Last checked', 'The date of the newest fact', 'This sheet'],
      ],
    },
    {
      kind: 'table',
      caption: 'Sheet 2, the change log: one row per email, prompt or page change',
      cols: ['Column', 'Example entry'],
      rows: [
        ['Competitor', 'larkpost.example'],
        ['Date and time', 'Fri 6 Nov, 09:14'],
        ['Day since sign-up', 'Day 12'],
        ['Where', 'Trial inbox'],
        ['What changed', '30% off a yearly plan, trial users only'],
        ['Screenshot or email', 'A link to the saved copy'],
        ['Battlecard line', 'Expect the discount near day 12'],
        ['Sent to sales', 'Friday note, #compete'],
      ],
    },

    { kind: 'h2', id: 'by-hand-steps', text: 'How to monitor competitors by hand, step by step' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Name the competitors and rank them.** List the competitors named in your CRM’s competitive losses, and put the 3 to 5 that cost you most deals in the first tier. A pass: every rep would name the same first tier.',
        '**Read each competitor’s terms.** Check the trial and website terms for clauses on competitors, competitive use and benchmarking before anyone signs up. A pass: a note per competitor saying what its terms allow.',
        '**Watch the public pages.** Put each competitor’s pricing, plans and changelog pages in a page monitor, and set a news alert on each name. A pass: an alert reaches a shared channel, such as Slack, the day a page changes.',
        '**Sign up where the terms allow.** Use one inbox per competitor and the profile your buyers have, such as a team admin in your country, and join the newsletter as well as the trial. A pass: the welcome email arrives in that inbox.',
        '**Log every email and prompt the day it arrives,** in the change log. A pass: anyone can find day 12’s email in 10 seconds.',
        '**Walk the trial to its end, then the cancel flow.** Open the account on set days, such as 1, 3, 7, 12 and the last day, and screenshot every limit and prompt. Then start a cancellation and record the save offer. A pass: the log shows the whole trial, in order.',
        '**Publish what changed each week.** Update the battlecards, and post a short note to sales with the screenshot behind each line. A pass: reps cite the note in deals.',
      ],
    },

    { kind: 'h2', id: 'terms', text: 'Read the terms before signing up to a competitor’s trial' },
    {
      kind: 'p',
      text: 'Signing up for a trial usually means accepting its terms. [Salesforce’s main services agreement](' +
        SALESFORCE +
        '), last updated on 15 October 2026, says it also governs free trials. It states that “SFDC’s direct competitors are prohibited from accessing the Services, except with SFDC’s prior written consent” (SFDC is Salesforce). It also says the services may not be accessed “for any other benchmarking or competitive purposes”.',
    },
    {
      kind: 'p',
      text: 'Look for clauses on competitors, competitive use, benchmarking, reverse engineering and automated access. Where they bar your company, ask the competitor or a lawyer before signing up, whether a person on your team signs up or a tool does it for you. A newsletter and a public pricing page are open to any visitor, though a website’s own terms of use still apply. [Is it legal to mystery shop competitors](/blog/is-it-legal-to-mystery-shop-competitors) sets out the law by country. This is general information, never legal advice.',
    },

    { kind: 'h2', id: 'workload', text: 'Where competitor monitoring by hand stops' },
    {
      kind: 'p',
      text: 'The work grows with every competitor, every channel and every week. Logging a 14 day trial and its emails, walking the cancel flow, checking the pricing page weekly and filing the newsletter takes about 2 hours a competitor a month, by our sums. Large programmes follow many more competitors: [Klue’s home page](' +
        KLUE +
        ') shows a customer story, Lacework’s, with 150+ competitors monitored.',
    },
    {
      kind: 'table',
      caption: 'Our sums: hours a month to monitor competitors by hand, at about 2 hours a competitor. Example inputs',
      cols: ['Competitors followed', 'Hours a month by hand', 'In analyst time'],
      rows: [
        ['150, as a large CI programme', 'About 300', 'About 2 full-time analysts'],
        ['40', 'About 80', 'About half an analyst'],
        ['10', 'About 20', 'About 2.5 working days'],
      ],
    },
    {
      kind: 'p',
      text: 'The hours are the smaller cost. A trial ends after 14 days, so a change on day 20 needs a new account. One inbox shows one profile, so a team admin’s offers and a solo user’s offers need two. And history can’t be rebuilt: nobody can see last month’s day 12 email today, so [point-in-time data](/glossary/point-in-time-data) has to be kept from the day collection starts.',
    },

    { kind: 'h2', id: 'obsession', text: 'Competitor monitoring for every competitor, every day' },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request.',
    },
    {
      kind: 'p',
      text: 'Page monitors, CI platforms and Exa read what competitors publish. Obsession keeps what each competitor sends and shows the people who sign up, from the welcome email to the save offer in the cancel flow. Each fact is dated and kept for as long as you follow the company. Insights asks one question across every competitor you name, such as what each free plan includes, and answers with a row per company. Each new fact reaches a webhook (a message posted to your server the moment it lands), a table or Slack the day it arrives.',
    },
    {
      kind: 'p',
      text: 'It also shows the platform behind each email, so an email platform’s CI team sees the week an account’s emails start coming from a new platform. Sales teams use the same lookups for account briefs, as [the sales page](/sales) shows. Obsession’s agents have run 1,500 sign-ups, baskets and checkouts at real companies, and counting. [The sample data](/sample-output) holds one real store’s record in every format it comes in.',
    },
    {
      kind: 'p',
      text: 'Feed those dated facts into your battlecards for a quarter, so you can see it in win rate, in competitive losses and in the deals your reps cite it in.',
    },

    { kind: 'h2', id: 'enough', text: 'When public monitoring is enough' },
    {
      kind: 'p',
      text: 'A page monitor, a news alert and win-loss interviews cover a market where competitors sell through a demo with no public trial and price by quote. Many enterprise software companies work that way, and their newsletter and pricing page are the parts a team can follow. The case for signing up to competitors grows with how self-serve they are: a free plan, a trial without a sales call, or limits and offers that change inside the product.',
    },

    { kind: 'h2', id: 'compared', text: 'Competitor monitoring software, side by side', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Competitor monitoring software, from each provider’s own pages on 11 November 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['By hand: a trial account, an inbox and a spreadsheet', 'Everything a new customer sees, at any public sign-up', 'Free, plus about 2 hours a competitor a month', 'Trials end, one profile per inbox', 'A first tier of 3 to 5 competitors'],
        ['Google Alerts', 'New Google results for each name, by email', 'Free', 'What Google search finds', 'Launches, funding and press'],
        ['Visualping', 'Changes to chosen pages, AI summaries, API and MCP', 'Free: 150 checks a month\n$14 to $350 a month', 'Pages, with 3 months of history by default', 'Pricing, plans and docs pages'],
        ['Crayon', 'Monitoring, AI summaries, battlecards in your CRM', 'Not published\nRequest an estimate', 'Signing up to products not described', 'Monitoring with adoption data'],
        ['Klue', 'Compete Agent and win-loss interviews together', 'Not published\nDemo only', 'Signing up to products not described', 'CI programmes with win-loss'],
        ['Kompyte', 'Websites, reviews, social, ads and job posts', 'Not listed on its home page', 'Public sources', 'Web tracking beside Semrush'],
        ['Exa', 'The public web in seconds, Monitors on a schedule', 'Monitors $2 per 1,000\nSearch from $4 per 1,000', 'Signing up to companies not described', 'Research on any competitor'],
        [
          'Obsession (ours): [Competitor tracking](/recipes/competitor-tracking), [Trial teardown](/recipes/trial-teardown), [Email and SMS tracking](/recipes/email-sms-tracking)',
          'Trial limits, prompts, onboarding emails and save offers, each dated',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Every step short of paying, up to any identity check',
          'What competitors show the people who sign up',
        ],
      ],
    },
    {
      kind: 'note',
      title: 'Facts checked 11 November 2026',
      text: 'Each tool’s features and prices come from its own pages, linked where they first appear. Prices change, so check each page before you buy.',
    },

    { kind: 'h2', id: 'choose', text: 'Which competitor monitoring tool to choose' },
    {
      kind: 'p',
      text: 'Use Obsession when your team needs what competitors show only to their customers, at every competitor you name. That means the trial limits, upgrade prompts and onboarding emails, the offer before the trial ends and the save offer in the cancel flow. Each fact is dated with its screenshot and kept for as long as you follow the company. For what competitors publish, pick by job:',
    },
    {
      kind: 'list',
      items: [
        '**What competitors send and show signed-up users:** Obsession, beside any tool here.',
        '**A pricing or docs page changes:** Visualping, free for 5 pages.',
        '**Monitoring and battlecards in one place:** Crayon or Kompyte.',
        '**Monitoring with win-loss interviews:** Klue. [Win loss analysis](/blog/win-loss-analysis) adds what the competitor sent the buyer during the trial.',
        '**News, funding and launches:** Google Alerts, free.',
        '**Research on any competitor in seconds, for a rep or an agent:** Exa.',
        '**Positioning, launch by launch:** [competitive intelligence for product marketing](/blog/competitive-intelligence-for-product-marketing) reads each launch through the competitor’s own emails. [Sales intelligence from behind the login](/use-cases/sales-intelligence-behind-the-login) shows the same view for every role on a revenue team, with an example for each.',
      ],
    },
    {
      kind: 'cta',
      text: 'What every competitor sends and shows the people who sign up: trial limits, onboarding emails and offers, each dated with its screenshot.',
      to: '/#join',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about competitor monitoring' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is competitor monitoring?',
          a: 'Competitor monitoring is the ongoing tracking of what competitors change, from pricing pages and launches to the trial emails and offers they send new sign-ups. It keeps battlecards, pricing and positioning current. At software companies a competitive intelligence or product marketing team usually runs it.',
        },
        {
          q: 'What is the best competitor monitoring software?',
          a: 'It depends on what you need to see. On 11 November 2026, Visualping watched chosen pages for free up to $350 a month. Crayon, Klue and Kompyte turned competitor intel into battlecards, and Google Alerts sent new search results for free. For what competitors show only to signed-up customers, such as trial limits, onboarding emails and save offers, Obsession keeps each one dated with its screenshot.',
        },
        {
          q: 'How do you track competitor changes?',
          a: 'Put each competitor’s pricing and changelog pages in a page monitor, and set a news alert on each name. Where the terms allow, sign up to each trial and newsletter with one inbox per competitor. Log every email, prompt and offer with its date, time and a screenshot, and post what changed each week to sales.',
          link: { label: 'Competitor tracking', to: '/recipes/competitor-tracking' },
        },
        {
          q: 'How do you do a SaaS competitor analysis?',
          a: 'Compare each competitor on plans and prices, trial length and limits, and the claim it leads with. Then add when upgrade prompts appear, the onboarding emails, the offer before the trial ends and the save offer in the cancel flow. The pricing page covers plans and prices. The rest needs a trial account, with each fact dated from the day the trial starts.',
          link: { label: 'Trial teardown', to: '/recipes/trial-teardown' },
        },
        {
          q: 'Is it legal to sign up for a competitor’s free trial?',
          a: 'It usually depends on the trial’s terms. Salesforce’s main services agreement, for example, governs its free trials, bars its direct competitors without written consent and bars access for competitive purposes. Read each competitor’s terms first, and ask a lawyer where they bar your company. This is general information, never legal advice.',
          link: { label: 'Is it legal to mystery shop competitors', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
        },
        {
          q: 'Can AI do competitor monitoring?',
          a: 'Yes, for much of it. Crayon and Kompyte use AI to summarise and sort what they collect, and Klue’s Compete Agent works from sales calls and market data. Visualping writes an AI summary of each page change, and Exa’s Monitors run scheduled searches. For what competitors send new users, an AI agent can look up Obsession over MCP and get each trial email, upgrade prompt and save offer, dated.',
          link: { label: 'See the API and MCP', to: '/developers' },
        },
        {
          q: 'How is Obsession different from Klue or Crayon?',
          a: 'Klue and Crayon collect what competitors publish and what your team hears, and turn it into battlecards. Obsession keeps what competitors show the people who sign up: trial limits, upgrade prompts, onboarding emails and save offers, each dated with its screenshot. A CI team can feed those facts into the battlecards it keeps in Klue or Crayon.',
          link: { label: 'Obsession vs Klue', to: '/compare/obsession-vs-klue' },
        },
      ],
    },
  ],

  sources: [
    { title: 'Pricing', publisher: 'Visualping', url: VISUALPING },
    { title: 'Crayon: competitive intelligence software', publisher: 'Crayon', url: CRAYON },
    { title: 'Pricing', publisher: 'Crayon', url: CRAYON_PRICING },
    { title: 'Klue: competitive intel and win-loss from one platform', publisher: 'Klue', url: KLUE },
    { title: 'Klue Compete Agent', publisher: 'Klue', url: KLUE_AGENT },
    { title: 'Pricing', publisher: 'Klue', url: KLUE_PRICING },
    { title: 'Kompyte: competitive intelligence and sales battlecards software', publisher: 'Kompyte (Semrush)', url: KOMPYTE },
    { title: 'Create an alert', publisher: 'Google Search Help', url: GOOGLE_ALERTS },
    { title: 'Exa: the world’s data for AI agents', publisher: 'Exa', url: EXA_HOME },
    { title: 'Exa API pricing', publisher: 'Exa', url: EXA_PRICING },
    { title: 'Main Services Agreement', publisher: 'Salesforce', url: SALESFORCE, date: '2026-10-15' },
  ],

  related: [
    '/use-cases/sales-intelligence-behind-the-login',
    'battlecard-template',
    'win-loss-analysis',
    'competitive-intelligence-for-product-marketing',
    'competitor-email-tracking-tools',
    'is-it-legal-to-mystery-shop-competitors',
    'recipe:competitor-tracking',
    'recipe:trial-teardown',
    'recipe:email-sms-tracking',
    '/compare/obsession-vs-klue',
    '/use-cases/trial-checks-for-software-companies',
    '/sales',
  ],
}
