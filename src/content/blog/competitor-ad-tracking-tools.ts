import type { BlogPost } from './types'

/* Price tracking wave B, piece B3 (_research/seo/price-tracking-14nov/PLAN.md and WRITER_BRIEF.md; approved by Seun
   14 Nov 2026, "GO"): the best competitor ad tracking tools, by job, and what happens after the click. Primary
   "competitor ad tracking"; secondaries from Google autocomplete (US and UK, 14 Nov, autocomplete_14nov.json):
   competitive ad tracking, competitor ad tracker, competitor ad monitoring. "How to see competitor ads" (and "competitor
   ads") stays with /blog/how-to-see-competitor-ads, linked with that anchor. Readers: marketing, growth and paid media
   teams at ecommerce brands, and the agencies that run paid social, search or conversion work for them.
   Format of /blog/best-competitor-price-tracking-tools and /blog/klaviyo-audit-tools: 4 free libraries and 9 paid tools
   in groups by job, alphabetical inside each, no stars, ranking or Review markup; each one's strengths first from its
   own pages, prices as listed, and "its pages don't describe…" where a page is silent. Every fact about another company
   was read on its own page on 14 November 2026: Foreplay pricing; Atria pricing (its Black Friday offer); AdSpy's home
   page; BigSpy pricing; SpyFu's home page and pricing (Basic only: the higher plans' prices load apart from their names,
   so they are left out); Semrush's Advertising Toolkit pricing, its Advertising Toolkit and subscriptions help articles;
   Similarweb's Ad Intelligence page, its Ad Intelligence Overview help article and its AI Search packages page (the
   package with Ad Intelligence); Pathmatics' product page at Sensor Tower; Panoramata's ads page and pricing; LinkedIn's
   Ad Library help page; TikTok's Commercial Content Library help page and its About Top Ads help page; Google's Ads
   transparency help page; Meta's Ad Library API page and its Transparency Center page. Google's FAQ answers load behind
   a script on 14 Nov; the window, delay and landing page lines match its 11 Nov reading in how-to-see-competitor-ads.ts.
   Left out: MagicBrief (its home page says it closed on 31 July 2026 and its team joined Canva), PiPiADS (its pricing
   page didn't render), Motion (its pages describe analysing your own ads first). The 37 minutes and the hours ladder are
   the sum in how-to-see-competitor-ads.ts. Obsession's lines use the live Ad tracking and Ad landing check recipes, Price
   watch, the leak checks use case and the lookup page's words only. hollin.example and every figure in both pictures
   are invented. British English, numerals, no dashes. */

const META_API = 'https://www.facebook.com/ads/library/api'
const META_TOOLS = 'https://transparency.meta.com/researchtools/ad-library-tools/'
const GOOGLE_HELP = 'https://support.google.com/adspolicy/answer/13733850'
const GOOGLE_FAQ = 'https://adstransparency.google.com/faq'
const LI_LIB = 'https://www.linkedin.com/help/linkedin/answer/a1517918'
const TT_CCL = 'https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/commercial-content-library'
const TT_TOP = 'https://ads.tiktok.com/help/article/top-ads'
const ATRIA = 'https://www.tryatria.com/pricing'
const FOREPLAY = 'https://www.foreplay.co/pricing'
const ADSPY = 'https://adspy.com/'
const BIGSPY = 'https://bigspy.com/pricing'
const SEMRUSH = 'https://www.semrush.com/kb/801-advertising-toolkit'
const SEMRUSH_PRICING = 'https://www.semrush.com/pricing/advertising/'
const SEMRUSH_PLANS = 'https://www.semrush.com/kb/1011-subscriptions'
const SPYFU = 'https://www.spyfu.com/'
const SPYFU_PRICING = 'https://www.spyfu.com/pricing'
const PATHMATICS = 'https://sensortower.com/product/digital-advertising/pathmatics'
const SIMILARWEB = 'https://www.similarweb.com/corp/web/advertising/'
const SIMILARWEB_HELP = 'https://support.similarweb.com/hc/en-us/articles/24435120044957-Ad-Intelligence-Overview'
const SIMILARWEB_PRICING = 'https://www.similarweb.com/packages/ai-search/'
const PANORAMATA_ADS = 'https://www.panoramata.co/track/ads'
const PANORAMATA = 'https://www.panoramata.co/pricing'

export const post: BlogPost = {
  slug: 'competitor-ad-tracking-tools',
  title: 'The best competitor ad tracking tools in 2026, and what happens after the click',
  dek: 'The 4 free ad libraries and 9 competitor ad trackers, grouped by job, with what each records, where it stops and its price on 14 November 2026. Beside them, Obsession follows each competitor ad past the click to its page, its code and the emails that follow a sign-up.',
  metaTitle: 'Competitor ad tracking tools for brands and agencies, 2026',
  description:
    'Competitor ad tracking tools for brands and agencies, by job and price: free ad libraries, ad trackers, spend estimates and what happens after the click.',
  answer:
    'Competitor ad tracking means recording the ads other companies run, when each started and how long it runs, so a team sees what each competitor is pushing. The free ad libraries and tools such as Foreplay, SpyFu, Semrush and Pathmatics record each ad, its search ad history or its estimated spend. Obsession follows each competitor ad past the click to its page, price and code, then signs up where the ad offers a code and keeps what arrives, dated.',
  primaryKeyword: 'competitor ad tracking',
  keywords: ['competitive ad tracking', 'competitor ad tracker', 'competitor ad monitoring', 'competitor ad tracking tools', 'best competitor ad tracking tools'],
  category: 'Watch other companies',
  published: '2026-11-14',
  updated: '2026-11-14',
  readingMinutes: 17,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'hollin.example · one ad, tracked 4 ways',
      period: 'What each tool records about one ad, week of 9 November 2026',
      cols: ['Tool', 'What it records'],
      rows: [
        { name: 'Ad library', cells: ['The ad, from 9 Nov'], tone: 'info' },
        { name: 'Ad tracker', cells: ['4 versions, 6 days'], tone: 'info' },
        { name: 'Spend estimate', cells: ['Spend up this week'], tone: 'info' },
        { name: 'After the click', cells: ['SAVE20, then 30% off'], tone: 'ok' },
      ],
      notes: [
        'The first 3 stop at the ad. Following it past the click shows the welcome code, then a bigger offer 2 days later, sent only to people who signed up.',
        'Example: Hollin and every figure here are invented.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Marketing, growth and paid media teams at ecommerce brands use competitor ad tracking to see which ads each competitor runs, since when and with what offer. So do the agencies that run paid social, search or conversion work for them. The 4 free ad libraries and 9 paid tools here sit in groups by job. Each entry gives what the tool records, where it stops and its price as listed on 14 November 2026. Past every ad sits what a customer meets after the click: the page it lands on, the code it offers and the emails that follow a sign-up.',
    },

    { kind: 'h2', id: 'what-it-is', text: 'What is competitor ad tracking?' },
    {
      kind: 'p',
      text: 'Competitor ad tracking is recording the ads other companies run: the words, the image or video, the platforms, the start date and how long each one runs. An ad that runs for months is one a competitor keeps paying for, so run length is the plainest public sign of an ad that sells. Some tools add estimated spend and share of voice, the share of a category’s ad impressions each company holds. An impression is one showing of an ad on someone’s screen.',
    },
    {
      kind: 'p',
      text: 'A competitor ad tracker does the recording on a schedule. A team names its competitors once, and the tracker saves each new ad as it appears, so the team keeps a copy after the ad stops running. Competitor ad monitoring adds the alert: a message the morning a competitor starts a new ad or changes its offer.',
    },

    { kind: 'h2', id: 'free-libraries', text: 'Which competitor ads can you track for free?' },
    {
      kind: 'p',
      text: 'Meta, Google, LinkedIn and TikTok each keep a searchable library of the ads they show, free to search. Each library shows the ad and its dates, and what else it shows depends on where the ad ran. The walk through each library, step by step, is in [how to see competitor ads](/blog/how-to-see-competitor-ads).',
    },
    {
      kind: 'table',
      caption: 'The 4 free ad libraries, from each platform’s own pages as of 14 November 2026',
      cols: ['Library', 'Which ads', 'Kept after it stops', 'What else it shows'],
      rows: [
        ['Meta Ad Library', 'Every active ad on Facebook, Instagram and Meta’s other apps', 'EU and UK ads: 1 year\nPolitical ads: 7 years\nOther ads: while running', 'EU and UK ads: reach and targeting\nPolitical ads: spend ranges'],
        ['Google Ads Transparency Center', 'Ads on Google platforms such as Search, Shopping and YouTube', '1 year after last shown\nElection ads: up to 7 years', 'Up to 5 versions of an ad\nEurope: times shown and audience'],
        ['LinkedIn Ad Library', 'Ads run on LinkedIn since 1 June 2023', '1 year after the last impression', 'EU ads: impressions, targeting and dates'],
        ['TikTok Commercial Content Library', 'Ads shown in the EEA, Switzerland and the UK', '1 year after the last view', 'First and last shown\nUnique viewers as a range'],
      ],
    },
    {
      kind: 'p',
      text: '[Meta’s developer page for the Ad Library](' +
        META_API +
        ') lists ads of any type delivered to the EU or the UK in the past year. Ads about politics or social issues stay for 7 years, and Meta’s [Transparency Center](' +
        META_TOOLS +
        ') says ads that reach the EU are archived for a year after their last impression. [Google’s Ads Transparency Center](' +
        GOOGLE_HELP +
        ') can be searched by advertiser or website name and filtered by date and location. Its [FAQ](' +
        GOOGLE_FAQ +
        ') says the click-through from an ad to its landing page has been removed, so each ad shows as a picture. [LinkedIn’s Ad Library](' +
        LI_LIB +
        ') can be searched by company, payer, keyword, country and date.',
    },
    {
      kind: 'p',
      text: 'TikTok’s [Commercial Content Library](' +
        TT_CCL +
        ') covers ads shown in the EEA (the EU plus Iceland, Liechtenstein and Norway), Switzerland and the UK, and needs no TikTok account. For ads that ran elsewhere, TikTok’s Creative Center has [Top Ads](' +
        TT_TOP +
        '), a collection of high-performing ads filtered by region, industry and campaign objective. Every Top Ad is authorised by its advertiser, so a named competitor’s TikTok ads outside Europe may not be there.',
    },

    { kind: 'h2', id: 'how-compared', text: 'How the tools were compared' },
    {
      kind: 'p',
      text: 'Facts about each tool come from its own pages as they stood on 14 November 2026. Prices are as listed that day, in US dollars, the currency every tool here used. Each tool was compared on 5 points:',
    },
    {
      kind: 'list',
      items: [
        '**What it records:** the ad, its landing page, the search keywords behind it or its estimated spend.',
        '**Which platforms:** Meta, TikTok, Google, LinkedIn and the rest, by plan.',
        '**How it keeps watch:** a list of named competitors it checks for you, a library you search, or saved copies of the ads you pick.',
        '**Price as listed,** with any free plan or trial.',
        '**Where it stops,** from its own pages.',
      ],
    },
    {
      kind: 'p',
      text: 'Tools sit in groups by the job they do best, in alphabetical order inside each group, with no stars or ranking. Prices change, so check each page before you buy.',
    },

    { kind: 'h2', id: 'creative-teams', text: 'Competitor ad trackers for creative teams' },
    {
      kind: 'p',
      text: 'These 2 tools keep a library of ads to search and save, and track named competitors’ new ads, for teams that write and test their own ads on Meta and TikTok.',
    },
    { kind: 'h3', id: 'atria', text: 'Atria' },
    {
      kind: 'list',
      items: [
        '**What it records:** [Atria](' +
          ATRIA +
          ') describes itself as an AI-powered creative management platform, from competitor research to making, launching and analysing ads. Its library holds 100M+ ads from Meta and TikTok, updated weekly, beside Radar, which Atria calls a 24/7 AI strategist. It connects to a team’s own Meta and TikTok ad accounts. AI agents can call it through [MCP](/glossary/model-context-protocol), the standard way AI agents call tools, and code through an API, the interface software uses to request its data.',
        '**Price as listed:** in its Black Friday offer, Core is $129 a month billed annually, against $219 listed, with 5 seats. Plus is $343 a month against $549, and Business and Enterprise cost more.',
        '**Where it stops:** its library covers Meta and TikTok, and its FAQ puts other channels on its roadmap. Its pages don’t describe signing up where a competitor’s ad offers a code, or the emails that follow.',
        '**Best for:** a team that makes, launches and reports on Meta and TikTok ads in one place.',
      ],
    },
    { kind: 'h3', id: 'foreplay', text: 'Foreplay' },
    {
      kind: 'list',
      items: [
        '**What it records:** [Foreplay](' +
          FOREPLAY +
          ')’s Discovery searches over 200 million ads collected by its community, sorted by time running and impressions. Its Spyder feature tracks every ad a named competitor launches on Meta, and a Chrome extension saves ads from the Meta Ad Library, Instagram and other platforms into shared boards. From the Workflow plan, it connects to Claude and ChatGPT by MCP or API and reports on a team’s own Meta and TikTok ads.',
        '**Price as listed:** Basic is $59 a month, Workflow $175 for 5 users and Agency $459 for 10 users, or $49, $149 and $389 a month billed annually. The plan cards list Spyder for 10+ brands on Workflow and 50+ on Agency, with no cap on annual billing.',
        '**Where it stops:** its competitor tracking is listed for Meta ads. Its pages don’t describe following an ad to its landing page, a sign-up or the emails that follow.',
        '**Best for:** creative teams and agencies building a library of ads that work, with competitors’ Meta ads tracked around the clock.',
      ],
    },

    { kind: 'h2', id: 'social-search', text: 'Social ad search tools' },
    {
      kind: 'p',
      text: 'These 2 tools hold large databases of social ads, searched by keyword, advertiser or landing page.',
    },
    { kind: 'h3', id: 'adspy', text: 'AdSpy' },
    {
      kind: 'list',
      items: [
        '**What it records:** [AdSpy](' +
          ADSPY +
          ') calls itself the largest searchable database of Facebook and Instagram ads, and its home page counts over 214 million ads from 225 countries. A team searches by ad text, URL, page name or the comments under an ad, and filters by affiliate network or landing page technology. Its home page also shows who an ad targets by location, gender and age range.',
        '**Price as listed:** $149 a month, which its home page calls virtually unlimited usage.',
        '**Where it stops:** its pages describe Facebook and Instagram ads. They don’t describe signing up on a landing page or the emails that follow.',
        '**Best for:** searching Facebook and Instagram ads, and the comments under them, at volume.',
      ],
    },
    { kind: 'h3', id: 'bigspy', text: 'BigSpy' },
    {
      kind: 'list',
      items: [
        '**What it records:** [BigSpy](' +
          BIGSPY +
          ') searches ad creatives across up to 11 platforms, by plan. Starter covers Facebook and Instagram, and Growth adds Google Ads, YouTube, X, TikTok and others, with Pinterest, Yahoo and Unity on Ultimate. From Growth, its plan table adds ad pages, domain analysis and up to 100 followed pages and domains.',
        '**Price as listed:** a free plan covers Facebook creatives with 10 searches a day. Starter is $69 a month or $49 billed annually, Growth $159 or $119, Scale $399 or $299 for 5 seats, and Ultimate $499 or $399.',
        '**Where it stops:** platforms and quotas rise by plan, and its industry filters are ecommerce, games and tools. Its pages don’t describe signing up where an ad offers a code.',
        '**Best for:** ecommerce and app teams researching creative across many ad networks.',
      ],
    },

    { kind: 'h2', id: 'search-ads', text: 'Search ad tracking tools' },
    {
      kind: 'p',
      text: 'These 2 tools show the keywords a competitor buys on Google and the text ads it shows for them, going back years. PPC, pay per click, is the search ad model in which an advertiser pays each time someone clicks.',
    },
    { kind: 'h3', id: 'semrush', text: 'Semrush Advertising Toolkit' },
    {
      kind: 'list',
      items: [
        '**What it records:** [Semrush](' +
          SEMRUSH +
          ')’s Advertising Research tool lists any domain’s paid search competitors, the keywords it bids on, and its ads back to 2012 as well as live ones. PLA Research analyses its Google Shopping ads from 2022 on. The Pro plan adds AdClarity, for competitors’ display, video and social ads across 50+ markets, and competitor landing page views.',
        '**Price as listed:** [Base](' +
          SEMRUSH_PRICING +
          ') is $99 a month and Pro $220 a month, each shown as billed annually, and its [help centre](' +
          SEMRUSH_PLANS +
          ') lists a 7-day free trial on both.',
        '**Where it stops:** Pro’s pricing lists display, video or social ads, so check which channel the plan covers for your competitors. Its pages don’t describe signing up on a competitor’s landing page.',
        '**Best for:** PPC teams that want a competitor’s search ads and keywords in the same tool as their own campaigns.',
      ],
    },
    { kind: 'h3', id: 'spyfu', text: 'SpyFu' },
    {
      kind: 'list',
      items: [
        '**What it records:** [SpyFu](' +
          SPYFU +
          ') shows the SEO and PPC keywords competitors buy and rank for, and every ad they’ve tested, across 38 countries. Its pricing page lists 10+ years of ad history.',
        '**Price as listed:** [Basic](' +
          SPYFU_PRICING +
          ') is $39 a month, or $29 a month billed annually, with a 30-day money-back guarantee. The Pro + AI and Team / Agency plans cost more.',
        '**Where it stops:** its pages describe search, organic and paid. They don’t describe social ads or what a landing page offers after a sign-up.',
        '**Best for:** a PPC team or agency reading a competitor’s Google Ads history before a pitch or a new campaign.',
      ],
    },

    { kind: 'h2', id: 'spend', text: 'Competitive ad tracking with spend estimates' },
    {
      kind: 'p',
      text: 'These 2 tools estimate what companies spend on ads and how many impressions they get, modelled from panels of people and from crawlers. Brand, media and agency teams use them to measure share of voice across a whole category.',
    },
    { kind: 'h3', id: 'pathmatics', text: 'Pathmatics by Sensor Tower' },
    {
      kind: 'list',
      items: [
        '**What it records:** [Pathmatics](' +
          PATHMATICS +
          ') estimates ad spend and impressions across social, display, video and streaming TV such as Netflix and Hulu. Its social coverage names Facebook, Instagram, YouTube, TikTok, X, Snapchat and LinkedIn. Each creative comes with its messaging, call to action, audience profile, site targeting, spend, impressions and flighting, the dates it ran. Its data comes from an opt-in panel of millions of people, crawlers, partnerships and models that estimate spend.',
        '**Price as listed:** its pages list no price.',
        '**Where it stops:** spend and impressions are estimates. Its FAQ lists markets such as the US, Canada, the UK, Germany, France, Italy, Spain and Australia, and its pages don’t describe signing up on an ad’s landing page.',
        '**Best for:** brand and media teams sizing a competitor’s spend by channel and season.',
      ],
    },
    { kind: 'h3', id: 'similarweb', text: 'Similarweb' },
    {
      kind: 'list',
      items: [
        '**What it records:** [Similarweb](' +
          SIMILARWEB +
          ')’s Ad Intelligence covers display, video, social and search ads, including top creatives, landing pages, keywords and spend trends. Its [help centre](' +
          SIMILARWEB_HELP +
          ') says it models impressions and spend for each ad and publisher, and records the first and last day each ad was seen. Creatives that lead to the same landing page are grouped as one campaign. It also lists GenAI ads among its channels.',
        '**Price as listed:** the [self-service package](' +
          SIMILARWEB_PRICING +
          ') with Ad Intelligence is $542 a month billed annually, for 1 user and 6 months of history.',
        '**Where it stops:** spend and impressions are modelled. Its pages don’t describe signing up where an ad offers a code.',
        '**Best for:** performance marketers comparing their channel mix and share of voice with competitors.',
      ],
    },

    { kind: 'h2', id: 'emails-and-pages', text: 'A competitor ad tracker with emails and landing pages' },
    {
      kind: 'p',
      text: 'Panoramata tracks competitors’ ads beside their emails, texts and website changes, so a brand or agency sees each competitor’s campaigns across channels in one place.',
    },
    { kind: 'h3', id: 'panoramata', text: 'Panoramata' },
    {
      kind: 'list',
      items: [
        '**What it records:** [Panoramata](' +
          PANORAMATA_ADS +
          ') archives competitors’ ads on Facebook, Instagram, TikTok, YouTube, LinkedIn, Pinterest and Google Display, with full history. It also tracks the funnels and landing pages competitors use on Meta. Beside the ads, it tracks their emails, texts, WhatsApp messages, flows and website changes, and every plan includes its MCP.',
        '**Price as listed:** [Startup](' +
          PANORAMATA +
          ') is $99 a month for 20 competitors and 6 months of history. Professional is $179 for unlimited competitors and history, adding texts, landing pages and flows to its searches. Advanced is $399, and yearly plans give 2 months free. Its page says the platform is in beta and opens accounts on request.',
        '**Where it stops:** its pages don’t describe tying one ad to the code and emails that a sign-up from that ad receives. [Obsession vs Panoramata](/compare/obsession-vs-panoramata) sets the two side by side.',
        '**Best for:** a brand or agency watching many competitors’ ads and emails in one place.',
      ],
    },

    { kind: 'h2', id: 'after-the-click', text: 'What happens after the click on a competitor’s ad?' },
    {
      kind: 'p',
      text: 'After the click, a competitor’s ad hands over to its landing page and then to the inbox, where most of the offer sits. The page shows the price, the stock and often a pop-up that trades an email address for a code. The code arrives in the first email of a [welcome series](/glossary/welcome-series), and a later email can offer more to the people who signed up. An offer sent by email alone never runs as an ad, so no ad library holds it.',
    },
    {
      kind: 'p',
      text: 'The tools here record the ad, and several keep its landing page too. Semrush’s Pro plan shows competitor landing pages, Similarweb groups creatives by landing page, and Panoramata tracks the landing pages behind Meta ads. Their pages don’t describe signing up where an ad offers a code, or keeping each email that sign-up receives, dated.',
    },
    {
      kind: 'art',
      caption: 'One competitor ad followed past the click: the ad library holds the first row, and the page, the code and the bigger offer 2 days later come from following it. Hollin is an invented company.',
      art: {
        kind: 'log',
        title: 'One competitor ad, past the click',
        who: 'hollin.example · from the ad to day 3',
        rows: [
          { time: 'Mon 07:00', text: 'New ad: 20% off your first order', detail: 'Started 9 Nov, read from the ad library', tone: 'info' },
          { time: 'Mon 07:04', text: 'Landing page opened from its link', detail: 'Throw at £68, a pop-up asks for an email', tone: 'ok' },
          { time: 'Mon 07:05', text: 'Welcome email with code SAVE20', detail: 'Arrived 1 minute after the sign-up', tone: 'ok' },
          { time: 'Mon 07:06', text: 'Offer set beside yours', detail: '£54.40 with the code, yours £58', tone: 'info' },
          { time: 'Wed 09:30', text: 'Second email: 30% off for 48 hours', detail: 'In no ad and on no page', tone: 'ok' },
        ],
        foot: 'Example. An ad library or tracker records the first row. Every row after it comes from following the ad.',
      },
    },
    {
      kind: 'p',
      text: 'By hand, [how to see competitor ads](/blog/how-to-see-competitor-ads) sets out 5 steps for each new ad. Log it, open the landing page from its link, sign up where it offers a code, try the code at checkout, then read the inbox for a week. Use only the public sign-up any customer can use; whether that is allowed in your market is covered in [is it legal to mystery shop competitors](/blog/is-it-legal-to-mystery-shop-competitors). The same guide’s sum comes to about 37 minutes per competitor a week. An agency watching 5 competitors for each of 20 clients spends about 62 hours a week on it. A brand team watching 10 spends about 6 hours, and a brand watching 3 about 2 hours.',
    },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. Its [Ad tracking](/recipes/ad-tracking) checks read the ads competitors run in public every morning and follow each one to its page, price and code. Each page is opened directly on a phone and a desktop, so no click is paid for. Where an ad offers a code for signing up, Obsession signs up and keeps what arrives, and when. Each new offer lands dated beside the ad that led to it, in Slack, a table or from the API.',
    },

    { kind: 'h2', id: 'own-ads-and-clients', text: 'How do you track your own ads, your category’s leaders and your clients’ competitors?' },
    {
      kind: 'p',
      text: 'For your own company, Obsession’s [Ad landing check](/recipes/ad-landing-check) opens every live ad’s landing page each morning from the ad’s link, on a phone and a desktop. It records whether each page loads, whether the offer and price match the ad and whether the product is in stock, with the costliest failing ad first. It reads the ad accounts you connect and changes nothing in them. With [final URL expansion](/blog/where-your-ads-land-morning-check), Google can send a click to a page you never put in the ad, and that guide sets out a morning check for Google and Meta ads.',
    },
    {
      kind: 'p',
      text: 'With Obsession, your ads and offers sit beside the biggest companies in your category, read the same way. Each of their new ads arrives with its page, its code and the emails that follow, dated. You see where the leaders put their offers before your own sale goes live.',
    },
    {
      kind: 'p',
      text: 'Agencies that run paid social, search or conversion work for ecommerce brands use it for 3 jobs:',
    },
    {
      kind: 'list',
      items: [
        '**Win the pitch:** open with the newest ads from the prospect’s competitors and the code behind each one, before the brand shares its ad accounts.',
        '**Keep the client:** every client’s live ads checked each morning, with a record of every page that failed and how long each took to fix.',
        '**Grow the account:** offers competitors send after the click, such as a bigger code 2 days after a sign-up, become the client’s next test, email or landing page.',
      ],
    },
    {
      kind: 'screen',
      screen: 'ads',
      caption: 'Competitors’ public ads, checked every morning at 07:00. Competitor A starts 9 new ads, and the newest one’s landing page offers a free gift over £40 and a gift set at £56, £2 under yours.',
    },
    {
      kind: 'p',
      text: 'It keeps running. Ads are read every morning, or more often in a sale week. Prices, stock and delivery are read every morning in [Price watch](/recipes/price-watch), and the guide to [competitor price tracking tools](/blog/best-competitor-price-tracking-tools) sets it beside the price tools. A fresh sign-up can run every step again each week in [leak checks](/use-cases/leak-checks-for-ecommerce-stores). It works the same for one company or a list of 3,000, on an index built for millions of companies. 1,500 sign-ups, baskets and checkouts run at real companies, and counting.',
    },

    { kind: 'h2', id: 'which-to-choose', text: 'Which competitor ad tracking tool to choose' },
    {
      kind: 'p',
      text: 'Use Obsession when your team needs what each competitor shows and sends after its ads, for every competitor you name. That means the page, the price, the code and every email after a sign-up, dated. Use an ad tracker for the ads themselves.',
    },
    {
      kind: 'list',
      items: [
        '**What competitors show and send after the click:** Obsession, with Ad tracking every morning.',
        '**Every live ad of your own landing on a page that can sell:** Obsession’s Ad landing check.',
        '**A first look at a competitor’s ads, at no cost:** the Meta, Google, LinkedIn and TikTok libraries.',
        '**A library of ads to learn from, with competitors’ Meta ads tracked:** Foreplay or Atria.',
        '**Facebook and Instagram ads searched at volume:** AdSpy, or BigSpy across up to 11 platforms.',
        '**A competitor’s Google search ads and keywords over years:** SpyFu or Semrush.',
        '**Estimated spend and share of voice:** Pathmatics or Similarweb.',
        '**Many competitors’ ads and emails in one place:** Panoramata.',
        '**1 to 5 competitors checked by hand:** the free libraries, a phone and a sheet.',
      ],
    },
    {
      kind: 'cta',
      text: 'The ads your competitors run in public, each followed to its page, price and code, with every new offer dated beside the ad that led to it.',
      to: '/recipes/ad-tracking',
      label: 'See the recipe',
    },

    { kind: 'h2', id: 'compared', text: 'Competitor ad tracking tools and Obsession, side by side', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 14 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Competitor ad tracking tools by job, from each provider’s own pages, as listed on 14 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'A competitor’s offer seen after it ran', 'Months with no launch planned'],
        ['By hand: the free libraries, a phone, a sheet', 'The ad, the page and the inbox, any competitor', 'Free, plus staff hours', 'About 37 minutes per competitor a week', '1 to 5 competitors'],
        ['The free ad libraries: Meta, Google, LinkedIn, TikTok', 'Each platform’s own record of its ads', 'Free', 'No landing page click-through on Google', 'A first look at any competitor'],
        ['Atria', '100M+ Meta and TikTok ads, an AI strategist', 'Core: $129 a month, billed annually (Black Friday offer)', 'Meta and TikTok', 'Making and testing ads in one place'],
        ['Foreplay', '200M+ ads to search, competitors’ Meta ads tracked', 'Basic: $59 a month\nWorkflow: $175 a month\nAgency: $459 a month', 'Sign-ups and emails not described', 'Creative teams saving ads that work'],
        ['AdSpy', '214M+ Facebook and Instagram ads, comment search', '$149 a month', 'Facebook and Instagram', 'Searching social ads at volume'],
        ['BigSpy', 'Up to 11 ad platforms, followed domains', 'Free plan\n$49 to $399 a month, billed annually', 'Platforms and quotas by plan', 'Creative research across networks'],
        ['Semrush Advertising Toolkit', 'Search ads back to 2012, Shopping ads', 'Base: $99 a month\nPro: $220 a month, billed annually', 'Display, video or social on Pro', 'PPC teams with their own campaigns'],
        ['SpyFu', 'Competitors’ paid keywords and every ad tested', 'Basic: $39 a month, or $29 billed annually', 'Search ads and SEO', 'Google Ads history before a pitch'],
        ['Pathmatics', 'Spend and impressions across social, display and streaming TV', 'No price on its pages', 'Estimates from a panel and crawlers', 'Share of voice by channel and season'],
        ['Similarweb', 'Modelled spend, creatives and landing pages', '$542 a month, billed annually, 1 user', 'Spend and impressions are modelled', 'Channel mix against competitors'],
        ['Panoramata', 'Ads on 7 networks, with emails, texts and flows', '$99 to $399 a month', 'In beta, accounts opened on request', 'Many competitors in one place'],
        [
          'Obsession (ours): [Ad tracking](/recipes/ad-tracking), [Ad landing check](/recipes/ad-landing-check)',
          'Each competitor ad followed to its page, price and code, then the sign-up and every email after it, dated',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Spend estimates left to panel tools',
          'What any competitor shows and sends after its ads, by API, MCP or a table',
        ],
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about competitor ad tracking' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best competitor ad tracker?',
          a: 'The best competitor ad tracker depends on the job. On 14 November 2026, Foreplay and Atria kept libraries of ads for creative teams, and AdSpy and BigSpy searched social ads. SpyFu and Semrush showed search ad history, and Pathmatics and Similarweb estimated spend. For what a competitor shows and sends after its ads, Obsession follows each ad to its page, code and emails, dated.',
        },
        {
          q: 'Is there a free competitor ad tracker?',
          a: 'Yes. Meta’s Ad Library, Google’s Ads Transparency Center, LinkedIn’s Ad Library and TikTok’s Commercial Content Library are all free to search. BigSpy has a free plan for Facebook ads with 10 searches a day. Each shows the ad itself, and following it to the page and the emails behind it is done by hand.',
          link: { label: 'How to see competitor ads', to: '/blog/how-to-see-competitor-ads' },
        },
        {
          q: 'What is competitive ad tracking?',
          a: 'Competitive ad tracking is following the ads every company in a category runs, usually with estimated spend and share of voice. Share of voice is the share of the category’s ad impressions each company holds. Pathmatics and Similarweb model spend and impressions from panels and crawlers. Meta’s free library shows spend ranges for ads about politics and social issues.',
        },
        {
          q: 'How does competitor ad monitoring work?',
          a: 'Competitor ad monitoring checks each named competitor’s ads on a schedule and flags what is new. Foreplay’s Spyder tracks competitors’ Meta ads around the clock, and Panoramata archives ads on Meta, TikTok, YouTube, LinkedIn, Pinterest and Google Display. Obsession reads the ads competitors run in public every morning and follows each new one to its page, price and code.',
          link: { label: 'Ad tracking', to: '/recipes/ad-tracking' },
        },
        {
          q: 'Can you see how much a competitor spends on ads?',
          a: 'As an estimate. Pathmatics and Similarweb model spend and impressions from what panels and crawlers see, and Semrush says its AdClarity monitors ad spend for display, video and social ads. The free libraries show spend ranges for ads about politics and social issues, such as Meta’s, and Google publishes impression ranges for ads shown in Europe.',
        },
        {
          q: 'What happens after someone clicks a competitor’s ad?',
          a: 'The ad sends them to a landing page with a price and often a sign-up offer, and a sign-up starts a welcome series of emails. Ad libraries record the ad, and some trackers keep its landing page. Obsession opens each page from the ad’s link, signs up where the ad offers a code and keeps what arrives, dated with screenshots.',
        },
        {
          q: 'Can an agency track its clients’ competitors’ ads?',
          a: 'Yes. On 14 November 2026, Foreplay’s Agency plan tracked 50 brands’ Meta ads on monthly billing, with no cap on annual billing, and Panoramata’s Advanced plan was written for agencies with 10+ markets. Obsession’s Ad tracking takes any competitor you name, or a client’s competitors, every morning.',
        },
      ],
    },
  ],

  sources: [
    { title: 'Meta Ad Library API', publisher: 'Meta', url: META_API },
    { title: 'Meta Ad Library tools', publisher: 'Meta Transparency Center', url: META_TOOLS, date: '2023-08-24' },
    { title: 'Ads transparency', publisher: 'Google Advertising Policies Help', url: GOOGLE_HELP },
    { title: 'Ads Transparency Center FAQ', publisher: 'Google', url: GOOGLE_FAQ },
    { title: 'LinkedIn’s Ad Library', publisher: 'LinkedIn Help', url: LI_LIB },
    { title: 'TikTok’s Commercial Content Library', publisher: 'TikTok Help Center', url: TT_CCL },
    { title: 'About Top Ads', publisher: 'TikTok Ads Help Center', url: TT_TOP, date: '2025-05' },
    { title: 'Pricing', publisher: 'Atria', url: ATRIA },
    { title: 'Pricing', publisher: 'Foreplay', url: FOREPLAY },
    { title: 'AdSpy', publisher: 'AdSpy', url: ADSPY },
    { title: 'Pricing', publisher: 'BigSpy', url: BIGSPY },
    { title: 'Advertising Toolkit', publisher: 'Semrush Knowledge Base', url: SEMRUSH },
    { title: 'Advertising Toolkit plans and pricing', publisher: 'Semrush', url: SEMRUSH_PRICING },
    { title: 'Subscription plans and toolkits', publisher: 'Semrush Knowledge Base', url: SEMRUSH_PLANS },
    { title: 'Competitor keyword research tools for Google Ads, PPC and SEO', publisher: 'SpyFu', url: SPYFU },
    { title: 'Pricing', publisher: 'SpyFu', url: SPYFU_PRICING },
    { title: 'Pathmatics: digital ad intelligence', publisher: 'Sensor Tower', url: PATHMATICS },
    { title: 'Ad Intelligence', publisher: 'Similarweb', url: SIMILARWEB },
    { title: 'Ad Intelligence overview', publisher: 'Similarweb Knowledge Center', url: SIMILARWEB_HELP },
    { title: 'AI Search Intelligence plans and pricing', publisher: 'Similarweb', url: SIMILARWEB_PRICING },
    { title: 'Track your competitors’ ads', publisher: 'Panoramata', url: PANORAMATA_ADS },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA },
  ],

  related: [
    'how-to-see-competitor-ads',
    'recipe:ad-tracking',
    'recipe:ad-landing-check',
    'where-your-ads-land-morning-check',
    'competitor-email-tracking-tools',
    '/marketing',
  ],
}
