import type { BlogPost } from './types'

/* Wave 2, batch 1, spec 19 (11 Nov 2026): how to see competitor ads on Meta, Google, LinkedIn and TikTok, and follow
   each one past the click. Readers: marketing, growth and paid media teams at brands, and the agencies that run their
   ads. Demand: Google autocomplete US and UK, 11 Nov (how to see competitor ads, on facebook, meta, linkedin, tiktok,
   see competitors google ads, competitor ad monitoring, competitor ad tracking). Serves recipe:ad-tracking,
   recipe:ad-landing-check and /marketing; the Obsession lines use those pages' own words (read 11 Nov at the branch).
   Read at the source on 11 Nov 2026: Meta's "About the Meta Ad Library" help page and the Ad Library's own home page and
   FAQ; Google's Ads transparency help page, the Ads Transparency Center's home, an ad details page and its FAQ (the
   landing page answers are quoted from it); LinkedIn's Ad Library, its targeting and impressions page and the Page ads
   filter page; TikTok's Commercial Content Library help page and the Creative Center's Top Ads page; Foreplay pricing,
   AdSpy's home page (its price is there), PiPiADS pricing (monthly view, a November sale price beside the list price),
   Motion's pricing and home pages.
   Left out on purpose: SEMrush and other SEO suites' ad estimates (not read today), TikTok's Commercial Content API
   (its page wasn't read), any spend figure for a commercial ad (no library shows one), AdSpy's line about cloakers, and
   anything about Foreplay covering Google beyond its own "coming soon". The hero and sheet companies are invented. */

const META_LIB = 'https://www.facebook.com/ads/library/'
const META_HELP = 'https://www.facebook.com/business/help/2405092116183307'
const GOOGLE_HELP = 'https://support.google.com/adspolicy/answer/13733850'
const GOOGLE_ATC = 'https://adstransparency.google.com/'
const GOOGLE_FAQ = 'https://adstransparency.google.com/faq'
const LI_LIB = 'https://www.linkedin.com/help/linkedin/answer/a1517918'
const LI_EU = 'https://www.linkedin.com/help/linkedin/answer/a1620070'
const LI_PAGE = 'https://www.linkedin.com/help/linkedin/answer/a426649'
const TT_CCL = 'https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/commercial-content-library'
const TT_TOP = 'https://ads.tiktok.com/business/creativecenter/inspiration/topads/pc/en'
const FOREPLAY = 'https://www.foreplay.co/pricing'
const ADSPY = 'https://adspy.com/'
const PIPIADS = 'https://www.pipiads.com/pricing'
const MOTION = 'https://motionapp.com/pricing'
const MOTION_HOME = 'https://motionapp.com/'

export const post: BlogPost = {
  slug: 'how-to-see-competitor-ads',
  title: 'How to see competitor ads on Meta, Google, LinkedIn and TikTok, and follow each one past the click',
  dek: 'Meta, Google, LinkedIn and TikTok each keep a free, searchable library of the ads they run. Each library shows the ad and when it ran. None shows the page, the offer, the sign-up or the emails behind it, so marketing teams and agencies follow each ad past the click themselves.',
  metaTitle: 'How to see competitor ads on Meta, Google, LinkedIn, TikTok',
  description:
    'For marketing teams and agencies: see competitor ads in the Meta, Google, LinkedIn and TikTok libraries, step by step, then follow each ad past the click.',
  answer:
    'To see competitor ads, search each competitor’s name or website in the free ad libraries: Meta’s for Facebook and Instagram, Google’s Ads Transparency Center, LinkedIn’s Ad Library and TikTok’s Commercial Content Library. Each shows the ad and when it ran, so open each ad’s landing page from its link, sign up where it offers a code and log what arrives. Obsession keeps what each competitor shows and sends after its ads, such as the welcome code and every email that follows, each dated with its screenshot.',
  primaryKeyword: 'how to see competitor ads',
  keywords: [
    'how to see competitor ads',
    'how to see competitor ads on facebook',
    'how to see competitor ads on meta',
    'see competitors google ads',
    'how to see competitor ads on linkedin',
    'how to see competitor ads on tiktok',
    'competitor ad monitoring',
    'competitor ad tracking',
  ],
  category: 'Watch other companies',
  order: 5,
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'One competitor ad, followed past the click',
      who: 'fernvale.example · from the ad library to the inbox',
      rows: [
        { time: 'Mon 07:00', text: 'New ad: 20% off your first order', detail: 'Meta Ad Library, started running 9 Nov', tone: 'info' },
        { time: 'Mon 07:04', text: 'Landing page opened from the ad’s link', detail: 'Candle set at £48, a pop-up asks for an email', tone: 'ok' },
        { time: 'Mon 07:05', text: 'Signed up through the pop-up', detail: 'An address kept for this competitor', tone: 'info' },
        { time: 'Mon 07:07', text: 'Welcome email with code FERN20', detail: '20% off, as the ad promised', tone: 'ok' },
        { time: 'Mon 07:20', text: 'Code tried at checkout', detail: 'Applied, £38.40, stopped before payment', tone: 'ok' },
        { time: 'Wed 10:12', text: 'Second email: 25% off for 48 hours', detail: 'In no ad and nowhere on the site', tone: 'ok' },
      ],
      foot: 'Example. The ad library holds the first row. Every row after it comes from following the ad.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Marketing, growth and paid media teams, and the agencies that run their ads, can see competitor ads free in 4 public ad libraries. There is one for each ad network: Meta’s for Facebook and Instagram, Google’s Ads Transparency Center, LinkedIn’s Ad Library and TikTok’s Commercial Content Library. Each shows the ad itself and when it ran. None follows the ad past the click. The page it lands on, the code it offers and the emails a new customer gets are found by hand, or with a tool built for it.',
    },
    {
      kind: 'p',
      text: 'An ad library is a public archive in which a social network or search engine keeps the ads it has shown, searchable by advertiser or keyword. Several exist because of transparency law. Meta [archives ads delivered in the EU](' +
        META_HELP +
        ') because of the EU’s Digital Services Act. TikTok’s library covers ads shown in the European Economic Area (the EU plus Iceland, Liechtenstein and Norway), Switzerland and the UK. So what you can see about a competitor depends on where its ads ran.',
    },
    {
      kind: 'stat',
      value: '1 year',
      label: 'how long Meta keeps an ad that ran in the EU or the UK after its last impression. An ad that ran elsewhere shows only while it runs, unless it is about politics or social issues',
      source: 'Meta Business Help Centre, About the Meta Ad Library',
      href: META_HELP,
    },

    { kind: 'h2', id: 'what-each-shows', text: 'What each ad library shows' },
    {
      kind: 'p',
      text: 'The 4 libraries hold different ads for different lengths of time, and only some show reach or targeting. An impression is one showing of an ad on someone’s screen.',
    },
    {
      kind: 'table',
      caption: 'The 4 ad libraries, from each platform’s own help pages as of 11 November 2026',
      cols: ['Library', 'Which ads', 'Kept after it stops', 'Dates', 'Reach or spend'],
      rows: [
        [
          'Meta Ad Library',
          'Every active ad on Facebook, Instagram and Meta’s other apps',
          'EU and UK ads: 1 year\nPolitical ads: 7 years\nOther ads: only while running',
          'Start date\nEU and UK ads: dates it ran',
          'EU and UK ads: reach and targeting\nPolitical ads: spend',
        ],
        [
          'Google Ads Transparency Center',
          'Verified advertisers worldwide\nEvery advertiser in Europe and Türkiye',
          '1 year after last shown\nElection ads: up to 7 years',
          'Last shown',
          'Impression ranges after 90 days\nEurope: targeting and reach',
        ],
        [
          'LinkedIn Ad Library',
          'Ads run since 1 June 2023',
          '1 year after the last impression',
          'Dates it ran, on EU ads',
          'EU ads: estimated impressions and targeting',
        ],
        [
          'TikTok Commercial Content Library',
          'Ads shown in the EEA, Switzerland and the UK',
          '1 year after the last view',
          'First and last shown',
          'Range of unique viewers, targeting summary',
        ],
      ],
    },

    { kind: 'h2', id: 'facebook-instagram', text: 'How to see competitor ads on Facebook and Instagram' },
    {
      kind: 'p',
      text: 'The [Meta Ad Library](' +
        META_LIB +
        ') lists every ad currently running across Meta’s apps, plus ads that ran in the EU or the UK in the past year. Anyone can search it with or without a Facebook account.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Set the country** to the market you compete in, and choose **All ads** as the category.',
        '**Type the competitor’s name and pick its Page from the suggestions.** A plain keyword search returns any ad that contains the word, so a competitor’s name in another company’s ad shows up too.',
        '**Read each result.** It shows the Library ID, the date the ad started running, the platforms it runs on and the ad itself. An ad that has run for months is one the competitor keeps paying for.',
        '**Open See ad details** for more. For ads delivered in the EU or the UK, it shows the reach and the advertiser’s targeting by age, gender and location.',
        '**Note the link the ad points to,** from the button on the ad. You will open it in step 2 of the method further down.',
      ],
    },
    {
      kind: 'p',
      text: '**A pass:** a list of the competitor’s active ads in your market, each with its start date and its link. Outside the EU and the UK, Meta shows only the date an ad started. An ad that stops there [leaves the library](' +
        META_HELP +
        '), so a screenshot today is the only record you will have of it.',
    },

    { kind: 'h2', id: 'google', text: 'How to see competitors’ Google ads' },
    {
      kind: 'p',
      text: 'Google’s [Ads Transparency Center](' +
        GOOGLE_ATC +
        ') is a searchable archive of the ads advertisers have run on Google, which Google’s [help page](' +
        GOOGLE_HELP +
        ') lists as Search, Display, Gmail and YouTube. Its [FAQ](' +
        GOOGLE_FAQ +
        ') says it holds ads from verified advertisers across Search, Play, Maps, Shopping and YouTube. Each stays for 1 year after it was last shown, and ads from every advertiser in Europe and Türkiye are included.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Set the region** you compete in.',
        '**Search by the competitor’s website, then by its name.** A website search gathers every advertiser account whose ads point to that domain, such as a brand’s accounts in different countries, and you can narrow it to one account.',
        '**Filter** by date, platform and format.',
        '**Open an ad.** Its page shows the format, the date it was last shown in your region and up to 5 common variations. Google says the ad any one person sees is one of many variations, so treat what you see as a sample.',
        '**Note the website the ad names.** The Center won’t open the landing page for you.',
      ],
    },
    {
      kind: 'quote',
      text: '…not intended to be used for landing page verification or click-through validation.',
      cite: 'Google, Ads Transparency Center FAQ, November 2026',
      href: GOOGLE_FAQ,
    },
    {
      kind: 'p',
      text: 'Google also says click-throughs are gone for good, because landing page links “can change over time, be subject to dynamic routing” or point at sites that no longer exist. Expect a lag: an ad can take 48 to 72 hours to appear, dates are in Pacific Time, and impression ranges are published after 90 days.',
    },

    { kind: 'h2', id: 'linkedin', text: 'How to see competitor ads on LinkedIn' },
    {
      kind: 'p',
      text: '[LinkedIn’s Ad Library](' +
        LI_LIB +
        ') is a public database of ads that ran on LinkedIn after 1 June 2023, each kept for 1 year after its last impression. The Ads filter that used to sit on a company’s LinkedIn Page has been [phased out gradually since May 2024](' +
        LI_PAGE +
        '), and the Page now links to the library.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Search** by company or advertiser name, payer name or keyword.',
        '**Filter** by country and date range.',
        '**Open an ad** to see its preview, format, advertiser and payer. Restricted ads hide the preview and the names for legal reasons.',
        '**For ads targeted to the EU, open More.** LinkedIn shows [the dates the ad ran](' +
          LI_EU +
          ') and an estimate of total impressions by country. It also lists the targeting the advertiser chose: job, company, education, location, language, age, gender, matched audiences and member interests.',
      ],
    },
    {
      kind: 'p',
      text: 'The EU targeting is the most useful part for B2B teams: it shows which job titles and companies a competitor is paying to reach.',
    },

    { kind: 'h2', id: 'tiktok', text: 'How to see competitor ads on TikTok' },
    {
      kind: 'p',
      text: 'TikTok’s [Commercial Content Library](' +
        TT_CCL +
        ') at library.tiktok.com covers ads shown to people in the EEA, Switzerland and the UK. No TikTok account is needed. An ad appears within 24 hours of its first view and stays for 1 year after its last.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Click Ad Library** at the top.',
        '**Choose the ad target country, the ad type and the published date,** then type the advertiser’s name or a keyword.',
        '**Sort** by audience size, last shown date or published date.',
        '**Open an ad** to see the advertiser, who paid for it and the countries it reached. It also shows the first and last date it was shown, unique viewers as an estimated range, and a targeting summary.',
      ],
    },
    {
      kind: 'p',
      text: 'For ads that ran only in the US or elsewhere outside Europe, TikTok’s Creative Center has [Top Ads](' +
        TT_TOP +
        '): high-performing ads by country and period. TikTok says the page is limited to ads their advertisers authorised, and you log in to see them all, so a named competitor’s ads may not be there.',
    },

    { kind: 'h2', id: 'what-libraries-miss', text: 'What the ad libraries leave out' },
    {
      kind: 'list',
      items: [
        '**Spend.** None of the 4 shows what a company spends on an ordinary commercial ad. Meta shows spend ranges for political ads, and Google publishes impression ranges 90 days late.',
        '**Ads that stopped, outside Europe.** On Meta, an ad that ran only in the US shows only while it runs.',
        '**Every version.** Google shows up to 5 common variations of an ad, and the one a customer saw may combine its text, images and links differently.',
        '**The last day.** TikTok takes up to 24 hours to list an ad, and Google 48 to 72 hours.',
        '**Everything after the click.** No library shows the landing page, the code it offers or the emails that arrive after a sign-up.',
      ],
    },
    {
      kind: 'p',
      text: 'The last gap holds offers that never run as ads. An ad promises 20% off; the welcome email delivers the code, and a second email 2 days later can offer more to the people who signed up. That second offer never appears in an ad library, because it never ran as an ad. The [web behind the login](/blog/the-web-behind-the-login) explains why search engines and public archives stop at that point.',
    },

    { kind: 'h2', id: 'follow-past-the-click', text: 'How to follow a competitor ad past the click' },
    {
      kind: 'p',
      text: 'Run these steps each morning for every new ad you found in the libraries. Use a phone and a desktop, a sheet, and one email address per competitor.',
    },
    { kind: 'h3', id: 'log-the-ad', text: '1. Log the ad' },
    {
      kind: 'p',
      text: 'Write down the platform, the Library ID or ad link, the start or last shown date, and the offer in the ad’s own words. **A pass:** anyone on the team could find the same ad again from the row.',
    },
    { kind: 'h3', id: 'open-the-page', text: '2. Open the landing page from its link' },
    {
      kind: 'p',
      text: 'Paste the link into a private window on a phone, then on a desktop. Don’t tap the live ad in your feed or in search results. Depending on how the competitor pays, a tap can be billed to it as a click, and it adds to its numbers. Screenshot the page and note the price, the stock and any offer or code it shows. **A pass:** the screenshot shows the same offer the ad promised, or you’ve noted the difference.',
    },
    { kind: 'h3', id: 'sign-up', text: '3. Sign up where the page offers a code' },
    {
      kind: 'p',
      text: 'If the page asks for an email in return for a discount, sign up with the address you keep for that competitor and note the time. Use only the public sign-up any customer can use; whether it is allowed in your market is covered in [is it legal to mystery shop competitors](/blog/is-it-legal-to-mystery-shop-competitors). **A pass:** the code arrives, and you’ve logged how long it took and whether it matches the ad.',
    },
    { kind: 'h3', id: 'basket', text: '4. Try the code at checkout' },
    {
      kind: 'p',
      text: 'Add the product from the ad to a basket and take it to checkout. Enter the code and note the total, the delivery charge and any fees, then stop before payment. **A pass:** you know what a new customer pays after the ad.',
    },
    { kind: 'h3', id: 'inbox', text: '5. Read the inbox for the next days' },
    {
      kind: 'p',
      text: 'Log every email and text that arrives over the next 7 days, with its time and offer. Setting up the addresses and filters is covered step by step in [competitor email tracking tools](/blog/competitor-email-tracking-tools). **A pass:** the sheet shows each ad beside everything it led to, in the order it arrived.',
    },
    {
      kind: 'art',
      art: {
        kind: 'report',
        title: 'Competitor ads this week, followed',
        period: 'Monday 9 to Wednesday 11 November',
        cols: ['Running', 'Page offer', 'After sign-up'],
        rows: [
          { name: 'Fernvale: 20% off first order', cells: ['3 days', '£48 set, code by email', 'FERN20, then 25% off'], tone: 'ok' },
          { name: 'Ashcombe: free delivery', cells: ['41 days', 'Free over £30', 'No email in 48 hours'], tone: 'fail' },
          { name: 'Northfold: new travel tin', cells: ['6 days', '£12, sold out', 'Back in stock email'], tone: 'info' },
        ],
        notes: ['Example companies. The library gives the first column; following each ad gives the rest.'],
      },
      caption: 'A week of competitor ads in one sheet: the ad library dates each ad, and following it fills in the page, the code and the emails. Example companies.',
    },

    { kind: 'h2', id: 'how-long', text: 'How long following competitor ads takes by hand' },
    {
      kind: 'p',
      text: 'Count it per competitor, per week. A sweep of 4 libraries at 3 minutes each is 12 minutes. Following 2 new ads at 10 minutes each is 20 minutes. Reading what arrives adds 5. That is about 37 minutes per competitor a week, with these example inputs.',
    },
    {
      kind: 'list',
      items: [
        '**An agency with 20 clients and 5 competitors each:** 100 competitors, about 62 hours a week.',
        '**A brand team watching 10 competitors:** about 6 hours a week.',
        '**A store watching 3:** about 2 hours a week.',
      ],
    },
    {
      kind: 'p',
      text: 'The hours grow in the weeks that matter most. A sale week brings more new ads per competitor, and each one leads to a new page and a new run of emails. Put your own competitor count and new ads per week into the same sum.',
    },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. Its Ad tracking recipe, a ready-made collection of checks, reads the ads competitors run in public each morning and follows each one to its page, price and code. Where an ad offers a code for signing up, it signs up and keeps what arrives, so [marketing teams](/marketing) see every new offer beside the ad that led to it.',
    },
    {
      kind: 'cta',
      text: 'Every competitor ad followed past the click: the page, the code and the emails a new customer gets, dated with each screenshot, for every competitor you name. Teams start in early access.',
      to: '/marketing',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'tools-compared', text: 'Tools for competitor ad monitoring, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to see and follow competitor ads. Prices from each provider’s own pages, 11 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'You hear of a competitor’s offer after it ran', 'Months with no launch planned'],
        [
          'By hand: the 4 ad libraries, a phone, a sheet',
          'Each platform’s own record, any competitor',
          'Free, plus your hours',
          'About 37 minutes per competitor a week',
          '1 to 5 competitors',
        ],
        [
          '[Foreplay](' + FOREPLAY + '): ad library and competitor tracking',
          'Saves ads from the Meta, TikTok and LinkedIn libraries\nTracks competitors’ Meta ads from Workflow (15 brands) and Agency (50)\nMCP',
          'Basic: $59 a month\nWorkflow: $175 a month\nAgency: $459 a month\n($49, $149, $389 billed annually)',
          'Google’s library listed as coming soon; its pages don’t describe sign-ups or emails',
          'Creative teams building a library of winning ads',
        ],
        [
          '[AdSpy](' + ADSPY + '): Facebook and Instagram ad search',
          'Over 214 million ads in 225 countries, searched by ad text, URL, page name or comments',
          '$149 a month, as an introductory price',
          'Facebook and Instagram, on its pages',
          'Searching ads and comments at volume',
        ],
        [
          '[PiPiADS](' + PIPIADS + '): TikTok and Facebook ad search',
          'Ads, products, advertisers and rankings, with ad trackers and TikTok Shop data',
          'Basic: $69 a month listed, $49 in its current sale\nAdvanced: $99 a month in the sale',
          'Credits spent per result and per ad detail',
          'TikTok product and ad research',
        ],
        [
          '[Motion](' + MOTION_HOME + '): creative analytics',
          'Reports on your own Meta, TikTok, YouTube and LinkedIn ads, and an AI agent that finds competitors’ newest ads',
          '[Starter](' + MOTION + '): $999 a month, up to $50k of ad spend a month\nPro and Growth: on request, past $50k and $125k a month',
          'Its pages don’t describe following competitor ads past the click',
          'Brands testing creative at scale',
        ],
        [
          'Obsession (ours): [Ad tracking](/recipes/ad-tracking), [Ad landing check](/recipes/ad-landing-check)',
          'Every competitor ad followed to its page, price and code, then the sign-up and every email that arrives, dated with screenshots',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'No history before a competitor is added',
          'What any competitor shows and sends after its ads, by API, MCP or a table',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For what a competitor shows and sends after its ads, Obsession is built for the job. It keeps the code on the page, the sign-up and every email after it, for any competitor you name and for as long as you follow them. [Foreplay](' +
        FOREPLAY +
        ') fits a library of saved ads, and AdSpy fits searching Facebook and Instagram ads with their comments. PiPiADS fits TikTok product research, and [Motion](' +
        MOTION_HOME +
        ') fits analysing your own creative with competitors beside it. For 1 to 5 competitors and an hour a week, the 4 free libraries and a sheet are enough. Your own ads have a morning check too: [where your ads land](/blog/where-your-ads-land-morning-check) covers it.',
    },
    {
      kind: 'cta',
      text: 'The ads your competitors run in public, each followed to its page, price and code, with every new offer dated beside the ad that led to it.',
      to: '/recipes/ad-tracking',
      label: 'See the recipe',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do I see competitor ads on Facebook and Instagram?',
          a: 'Open the Meta Ad Library, set your country, choose All ads, type the competitor’s name and pick its Page from the suggestions. Each result shows the ad, the date it started running and the platforms it runs on. No Facebook account is needed.',
        },
        {
          q: 'How can I see my competitors’ Google ads?',
          a: 'Search the competitor’s website in Google’s Ads Transparency Center, set your region, and filter by date, platform and format. Each ad’s page shows when it was last shown and up to 5 common variations. The Center doesn’t open landing pages, so note the website in the ad and open it yourself.',
        },
        {
          q: 'How do I see competitor ads on LinkedIn?',
          a: 'Search LinkedIn’s Ad Library by company name, payer or keyword, and filter by country and date. It holds ads that ran after 1 June 2023, for 1 year after their last impression. For ads targeted to the EU, it also shows estimated impressions and the targeting, such as job and company.',
        },
        {
          q: 'How do I see competitor ads on TikTok?',
          a: 'TikTok’s Commercial Content Library at library.tiktok.com holds ads shown in the EEA, Switzerland and the UK, with first and last shown dates and unique viewers as an estimated range. For ads that ran elsewhere, Top Ads in TikTok’s Creative Center shows high-performing ads their advertisers authorised.',
        },
        {
          q: 'Can I see how much a competitor spends on ads?',
          a: 'Not for ordinary commercial ads in any of the 4 libraries. Meta shows spend ranges for political ads, Google publishes impression ranges 90 days late, and LinkedIn and TikTok show estimated impressions or unique viewers for ads in Europe.',
        },
        {
          q: 'Does clicking a competitor’s ad cost them money?',
          a: 'It can. If the competitor pays per click, a tap on its live ad in a feed or in search results can be billed as a click. Open the page from the link in the ad library, or type the address, instead.',
        },
        {
          q: 'Can an AI agent track competitor ads?',
          a: 'For the public part, yes. Meta’s Ad Library API covers political ads and ads delivered in the EU. Web search APIs such as Exa, Tavily and Firecrawl give agents the public web, what any visitor can read. Obsession gives agents what a competitor shows and sends after the sign-up, through its API or MCP, the standard way AI agents call tools.',
          link: { label: 'Exa alternatives, sorted by job', to: '/blog/exa-alternatives' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'Terms and downloads',
      text: 'Each library has its own terms. Meta lets you download Ad Library searches once you log in and agree to its terms. Google says use of its data is subject to the Ads Transparency Center terms of service. Read the terms of each library before you store or share what you collect; nothing here is legal advice.',
    },
  ],

  sources: [
    { title: 'About the Meta Ad Library', publisher: 'Meta Business Help Centre', url: META_HELP },
    { title: 'Meta Ad Library', publisher: 'Meta', url: META_LIB },
    { title: 'Ads Transparency Center', publisher: 'Google', url: GOOGLE_ATC },
    { title: 'Ads transparency', publisher: 'Google Advertising Policies Help', url: GOOGLE_HELP },
    { title: 'Ads Transparency Center FAQ', publisher: 'Google', url: GOOGLE_FAQ },
    { title: 'LinkedIn’s Ad Library', publisher: 'LinkedIn Help', url: LI_LIB },
    { title: 'Ads filter on a LinkedIn Page', publisher: 'LinkedIn Help', url: LI_PAGE },
    { title: 'Ad Library targeting parameters and impressions', publisher: 'LinkedIn Help', url: LI_EU },
    { title: 'TikTok’s Commercial Content Library', publisher: 'TikTok Help Center', url: TT_CCL },
    { title: 'Top Ads: high-performing auction ads', publisher: 'TikTok Creative Center', url: TT_TOP },
    { title: 'Pricing', publisher: 'Foreplay', url: FOREPLAY },
    { title: 'AdSpy', publisher: 'AdSpy', url: ADSPY },
    { title: 'Pricing', publisher: 'PiPiADS', url: PIPIADS },
    { title: 'Motion: ship more winning ads', publisher: 'Motion', url: MOTION_HOME },
    { title: 'Pricing', publisher: 'Motion', url: MOTION },
  ],

  related: [
    'recipe:ad-tracking',
    'recipe:ad-landing-check',
    '/marketing',
    'the-web-behind-the-login',
    'competitor-email-tracking-tools',
    'exa-alternatives',
  ],
}
