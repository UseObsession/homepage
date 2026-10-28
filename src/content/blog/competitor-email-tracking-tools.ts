import type { BlogPost } from './types'

/* Wave 2, article 8 (keyword plan, 23 Oct 2026): competitor email tracking tools, compared. Seun's "best tools for X"
   piece, written as a neutral review. Readers: retention agency strategists and account directors, brand CRM and email
   leads, and ecommerce founders choosing how to watch rivals' emails and texts. Primary "competitor email tracking";
   secondary phrasings from the plan (competitor email monitoring, free, milled alternative, mailcharts alternative,
   email inspiration websites, email competitor analysis) sit in the title, h2s and FAQ.
   Why now: rivals' Black Friday teasers come 2 to 4 weeks before the sale (Klaviyo's June 2026 timing guide), Black
   Friday is Fri 27 Nov 2026, and an address only holds mail from the day it signs up. Tool budgets are set for January.
   The gap it fills (library, email_sms_lens.json): the comparisons that rank are written by the tools themselves, and
   none sets the tools side by side on what they collect (gallery, campaign archive, triggered flows, texts, landing
   pages), coverage, history, timeliness, exports and price.
   Read at each company's own pages on 23 Oct 2026: Really Good Emails (home, pricing), Email Love (home, pricing),
   MailCharts (home, agencies; its pricing link redirects to Litmus's pricing page, which says Litmus is now part of
   Validity Engage), BadRep (home, read in Chrome after automated fetches were rate limited), Panoramata (pricing,
   flows, SMS), Owletter (pricing, retailers), SendView (home with pricing). Milled asked for a sign in, so its plans
   come from the Internet Archive's copy of its pricing page (10 Feb 2026); its counts come from its live homepage
   (read through a text reader on 23 Oct 2026). Also read: Google Workspace alias limits, Gmail filter, search and header help, Klaviyo's
   sunset flow help and Black Friday timing guide, and Obsession's email and SMS tracking and competitor tracking pages.
   Reused: Klaviyo's 2026 benchmarks and the MailCharts agency testimonial (both checked 23 Oct in other articles).
   Corrected against email-marketing-audit.ts: Milled's $83.25 and $249.92 are the monthly equivalents of yearly
   billing ($999 and $2,999 a year); monthly billing was $99 and $299 in the February copy.
   Left out on purpose: Migma (an email builder whose competitor tracking is a paid feature; its pricing page showed no
   figures), the vendors' own comparison pages about each other, forum quotes (Reddit could not be reopened), the
   site's 93% and 128 stores, any PilotX audit figure. larkmoor.example and every figure in the 2 illustrations are
   invented. Buyer words (sign up, welcome email, basket, pop up, Promotions tab, client); no dashes. */

const KLAVIYO_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const MC_AGENCIES = 'https://mailcharts.com/built-for/agencies'
const RGE = 'https://reallygoodemails.com/'
const RGE_PRICING = 'https://reallygoodemails.com/pricing'
const EMAIL_LOVE = 'https://emaillove.com/'
const EL_PRICING = 'https://emaillove.com/pricing'
const MILLED = 'https://milled.com/'
const MILLED_PRICING_COPY = 'https://web.archive.org/web/20260210062729/https://milled.com/pricing'
const MAILCHARTS = 'https://www.mailcharts.com/'
const LITMUS_PRICING = 'https://www.litmus.com/pricing'
const BADREP = 'https://badrep.email/'
const PANORAMATA = 'https://www.panoramata.co/pricing'
const PANO_FLOWS = 'https://www.panoramata.co/track/flows-journeys-automations'
const PANO_SMS = 'https://www.panoramata.co/track/sms'
const OWLETTER = 'https://www.owletter.com/pricing'
const OWL_RETAILERS = 'https://www.owletter.com/features/retailers'
const SENDVIEW = 'https://sendview.io/'
const WORKSPACE_ALIAS = 'https://knowledge.workspace.google.com/admin/users/add-or-delete-an-alternate-email-address-email-alias'
const GMAIL_SEARCH = 'https://support.google.com/mail/answer/7190'
const GMAIL_FILTERS = 'https://support.google.com/mail/answer/6579'
const KL_SUNSET = 'https://help.klaviyo.com/hc/en-us/articles/360017518492'
const GMAIL_HEADERS = 'https://support.google.com/mail/answer/29436'
const KL_TIMING = 'https://www.klaviyo.com/blog/when-to-send-black-friday-emails'

export const post: BlogPost = {
  slug: 'competitor-email-tracking-tools',
  title: 'Competitor email tracking tools compared: what 8 tools collect and cost',
  dek: '8 tools compared on what they collect, which brands they cover, how far back they go and what they cost. Prices are as each company listed them on 23 October 2026, beside the method to track rivals by hand.',
  metaTitle: 'Competitor email tracking tools: 8 compared, with prices',
  description:
    'Competitor email tracking tools compared on what they collect (campaigns, flows, texts), brand choice, history and price, as listed in October 2026.',
  answer:
    'Competitor email tracking tools differ in what they collect: galleries such as Really Good Emails and Email Love hold selected designs, archives such as Milled, MailCharts and BadRep hold emails from the brands they cover, Panoramata adds texts, ads and landing pages, and trackers such as Owletter and SendView follow the rivals you name. Choose by the job, and for 1 to 3 rivals a spare inbox for each and a sheet are enough. Obsession’s AI customers sign up to any rival you name as real subscribers and keep every email it sends, from the welcome series on, exactly as it arrived.',
  primaryKeyword: 'competitor email tracking',
  keywords: [
    'competitor email tracking tools',
    'competitor email monitoring',
    'competitor email monitoring free',
    'milled alternative',
    'mailcharts alternative',
    'really good emails alternative',
    'email inspiration websites',
    'email competitor analysis',
    'how to see competitors emails',
  ],
  category: 'Watch other companies',
  published: '2026-10-23',
  updated: '2026-10-28',
  readingMinutes: 13,
  order: 18,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'inbox',
    workspace: 'company',
    art: {
      kind: 'report',
      title: 'larkmoor.example · 1 rival, 14 days, 3 kinds of source',
      period: 'What each kind of source held for the same rival, 1 to 14 October',
      cols: ['Source', 'Campaigns', 'Welcome series', 'Basket emails', 'Texts'],
      rows: [
        { name: 'Curated gallery', cells: ['1 chosen', 'None', 'None', 'None'], tone: 'info' },
        { name: 'Campaign archive', cells: ['11 of 11', 'None', 'None', 'None'], tone: 'info' },
        { name: 'Address you signed up', cells: ['11 of 11', '4 emails in 6 days', '2 after a left basket', '3 after opt in'], tone: 'ok' },
      ],
      notes: [
        'The archive also held 2 years of earlier campaigns.',
        'The address you signed up held nothing sent before 1 October.',
        'Larkmoor and every figure here are invented.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Retention agencies, brand CRM leads and founders track rivals’ emails and texts to time their own offers, plan Black Friday and show clients what the market sends. 8 dedicated tools do the job, and they differ most in what they collect.',
    },
    {
      kind: 'p',
      text: 'A gallery holds designs its editors chose. An archive holds what its own addresses received from the brands it covers. A tracker holds what reaches addresses pointed at the rivals you name. Listed prices run from free to $399 a month, and 1 tool lists no price.',
    },
    {
      kind: 'p',
      text: 'Triggered flows earn a large share of email revenue. In [Klaviyo’s 2026 benchmarks](' +
        KLAVIYO_BENCH +
        '), automated flows were 5.3% of email sends and earned nearly 41% of email revenue, so a rival’s welcome and basket emails carry much of its email strategy.',
    },
    {
      kind: 'stat',
      value: '41%',
      label: 'of email revenue came from automated flows, which were 5.3% of email sends',
      source: 'Klaviyo 2026 benchmarks',
      href: KLAVIYO_BENCH,
    },

    { kind: 'h2', id: 'what-it-is', text: 'What competitor email tracking is' },
    {
      kind: 'p',
      text: 'Competitor email tracking is recording the emails, and often the texts, that rival brands send their subscribers, with the date, the offer and the place of each message in its sequence. Teams use that record for 5 jobs:',
    },
    {
      kind: 'list',
      items: [
        '**Offer timing:** when a rival discounts, how deep, and how the offer grows for subscribers who haven’t bought.',
        '**Calendars and frequency:** the days and hours rivals send, and how often in a sale week.',
        '**Flows:** the welcome series, basket and browse reminders and win back emails, with the delay before each step.',
        '**Black Friday planning:** when rivals start their teasers and early access emails, and what they repeat each year.',
        '**Client reporting:** a comparison an agency’s client can check. [MailCharts’ agencies page](' +
          MC_AGENCIES +
          ') quotes an account manager whose clients would “constantly be asking us to produce a competitive analysis based on email”.',
      ],
    },

    { kind: 'h2', id: 'criteria', text: 'How to compare the tools' },
    {
      kind: 'p',
      text: '7 criteria separate the tools:',
    },
    {
      kind: 'list',
      items: [
        '**What it collects:** a curated gallery, a campaign archive, triggered flows (welcome, basket, win back), texts or landing pages. A tool receives a flow only if its address takes the action that starts it.',
        '**Coverage and countries:** how many brands it covers, and in which markets.',
        '**History:** how far back the record goes. An address opened today holds nothing sent before it signed up.',
        '**Speed:** whether new emails appear as they arrive, daily or in a weekly roll up.',
        '**Search, alerts and exports:** filters by brand, offer or holiday, alerts on keywords or new offers, and exports to CSV, HTML or an API.',
        '**Brand choice:** whether it covers only brands it already follows, or any brand you name.',
        '**Price:** as listed on its own page on 23 October 2026.',
      ],
    },

    { kind: 'h2', id: 'galleries', text: 'Curated email galleries' },

    { kind: 'h3', id: 'really-good-emails', text: 'Really Good Emails' },
    {
      kind: 'p',
      text: '[Really Good Emails](' + RGE + '), part of Beefree, is a free gallery of email designs that its site says has been curated by humans since 2014.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** 20,000+ selected emails, as [its pricing page](' +
          RGE_PRICING +
          ') counts them, filed by type (welcome, abandoned cart, Black Friday) and by industry.',
        '**Best at:** finding a well designed example of 1 kind of email fast.',
        '**Where it stops:** it holds a selection, and its pages describe no brand tracking, texts or alerts.',
        '**Price as listed:** the gallery is free. The paid plans are for its email builder, RGE Studio, from $30 a month.',
        '**Best for:** designers and copywriters.',
      ],
    },

    { kind: 'h3', id: 'email-love', text: 'Email Love' },
    {
      kind: 'p',
      text: '[Email Love](' + EMAIL_LOVE + ') says it collects, analyses and breaks down the best emails from 8,600+ brands.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** selected emails with a written breakdown, plus journeys and trend reports. You can ask the team by email to add an email or a brand.',
        '**Best at:** examples that explain how each email works.',
        '**Where it stops:** it holds emails chosen as the best, and its pages describe no alerts, texts or tracking of a set list of rivals.',
        '**Price as listed:** free with an account, which [its pricing page](' +
          EL_PRICING +
          ') says includes its MCP and REST API. Its paid plans are for its Figma plugin, from $19 per user a month.',
        '**Best for:** brand teams and freelancers who want examples explained.',
      ],
    },

    { kind: 'h2', id: 'archives', text: 'Searchable email archives' },
    {
      kind: 'p',
      text: 'An archive subscribes its own addresses to many brands and keeps what arrives, so for the brands it covers it holds mail from before you started looking.',
    },
    {
      kind: 'stat',
      value: '52.9M',
      label: 'emails from 103,274 ecommerce brands in Milled’s archive, by its homepage on 23 October 2026',
      source: 'Milled',
      href: MILLED,
    },

    { kind: 'h3', id: 'milled', text: 'Milled' },
    {
      kind: 'p',
      text: '[Milled](' + MILLED + ') calls itself a search engine for email newsletters and ecommerce sales, and its homepage says it receives 20,513 emails a day.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** campaign emails, searchable by keyword, subject line, brand, country and holiday. The pages we read don’t mention triggered flows or texts.',
        '**Best at:** breadth, with the full archive on Pro, holiday filters, keyword alerts, saved searches and full length screenshots.',
        '**Where it stops:** you follow brands it already covers, and can suggest others through its Submit a Brand form.',
        '**Price as listed:** Basic is free. Pro is $99 a month or $999 a year, and Team, for 5 seats, $299 a month or $2,999 a year, on [the Internet Archive’s copy of its pricing page from 10 February 2026](' +
          MILLED_PRICING_COPY +
          ').',
        '**Best for:** category research and last year’s holiday campaigns.',
      ],
    },

    { kind: 'h3', id: 'mailcharts', text: 'MailCharts' },
    {
      kind: 'p',
      text: '[MailCharts](' + MAILCHARTS + ') presents itself as MailCharts from Validity, offering competitive intelligence, industry insights and inspiration for email and SMS.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** campaigns, curated texts, and ecommerce email journeys that its homepage says it signs up for and triggers. Its agencies page says it tracks 30,000+ companies.',
        '**Best at:** journeys by type of subscriber (buyers, cart abandoners, people who haven’t bought), benchmarks of frequency, discounts and send times, and CSV exports for client decks.',
        '**Where it stops:** its pages don’t describe adding a brand or setting alerts, and its pricing link leads to [Litmus’s pricing page](' +
          LITMUS_PRICING +
          '), which lists no plans and says Litmus is now part of Validity Engage.',
        '**Price as listed:** not listed. You contact the company to start.',
        '**Best for:** journey and benchmark research, bought through sales.',
      ],
    },

    { kind: 'h3', id: 'badrep', text: 'BadRep' },
    {
      kind: 'p',
      text: '[BadRep](' + BADREP + ') is a searchable database of marketing emails. On 23 October 2026 its homepage listed 51,174 emails from 1,910 brands in 240+ categories.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** campaigns and flow emails, classified by type, offer, email platform and design, each with a screenshot and its HTML. A brand’s welcome, cart or post purchase emails show in date order.',
        '**Best at:** comparing many emails at once, with 20+ filters.',
        '**Where it stops:** its 1,910 brands span many sectors, so check that your rivals are indexed. You can request brands, and its pages describe no texts.',
        '**Price as listed:** $29 a month, cancel any time. The page says all sales are final.',
        '**Best for:** copy and offer research on a small budget.',
      ],
    },

    { kind: 'h2', id: 'platforms', text: 'Competitor monitoring platforms' },

    { kind: 'h3', id: 'panoramata', text: 'Panoramata' },
    {
      kind: 'p',
      text: '[Panoramata](' + PANORAMATA + ') tracks competitors’ emails, texts, flows, ads, landing pages and website changes on 1 platform.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** newsletters, [flows such as welcome and cart abandonment](' +
          PANO_FLOWS +
          '), [texts](' +
          PANO_SMS +
          '), ads on 6 networks including Meta, TikTok and Google Display, landing pages and site changes, by country. Tracking of texts, flows and landing pages comes with every plan, and searches of its library of them start on Professional.',
        '**Best at:** 1 view across channels, with daily summaries, CSV and PDF exports, alerts from Professional, and an MCP connection to Claude or ChatGPT on every plan.',
        '**Where it stops:** Startup covers 20 competitors and 6 months of history, and its pages don’t say how it collects emails.',
        '**Price as listed:** Startup $99, Professional $179 and Advanced $399 a month, or $990, $1,790 and $3,990 a year. Enterprise on request.',
        '**Best for:** emails, texts and ads from many rivals in 1 tool.',
      ],
    },

    { kind: 'h2', id: 'trackers', text: 'Trackers for rivals you name' },
    {
      kind: 'p',
      text: 'A tracker follows the websites or companies you name, so the list of brands is yours.',
    },

    { kind: 'h3', id: 'owletter', text: 'Owletter' },
    {
      kind: 'p',
      text: '[Owletter](' + OWLETTER + ') captures the emails a website sends to its mailing list, screenshots and stores them, and alerts you on keywords you set.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** mailing list emails from the websites you monitor, with [analytics on send days, seasonal frequency and spam reputation](' +
          OWL_RETAILERS +
          ').',
        '**Best at:** a low cost archive of a fixed set of rivals, shared with the team, with roundups and keyword alerts.',
        '**Where it stops:** its pages don’t say how it receives emails, and don’t mention flows, texts or exports.',
        '**Price as listed:** Starter $29 a month for 10 websites with 12 months’ retention, Pro $49 for 25 and Unlimited $99, both with lifetime storage. Each has a 14 day free trial.',
        '**Best for:** small teams watching up to 25 named rivals.',
      ],
    },

    { kind: 'h3', id: 'sendview', text: 'SendView' },
    {
      kind: 'p',
      text: '[SendView](' + SENDVIEW + ') gives you tracking addresses to sign up to any company you choose, in an inbox built for analysis.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** what its addresses receive after you sign them up, including sequences you start. Its page suggests several addresses for 1 company to compare the newsletter with the abandoned cart emails, and auto open so a brand doesn’t drop the address for inactivity.',
        '**Best at:** control over brands and journeys, with sequence timelines, trend reports on send times, email platforms, DKIM and SPF, weekly digests and AI summaries.',
        '**Where it stops:** you do the sign ups unless you pay for Managed, history starts at your sign up, and its page mentions no texts or ads.',
        '**Price as listed:** Standard $69 a month for 10 companies, Pro $99 for 25, Ultimate $169 for 50, and Managed $249. Standard, Pro and Ultimate have a 10 day free trial.',
        '**Best for:** named rivals’ welcome and basket sequences, for teams and agencies.',
      ],
    },

    { kind: 'h2', id: 'side-by-side', text: 'The 8 tools compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, which does some of this, so every line about another tool is taken from that tool’s own pages, checked on 23 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'What each tool collects, from its own pages on 23 October 2026. “Not described” means its pages don’t mention it, and it may still offer it',
      cols: ['Tool', 'Campaigns', 'Triggered flows', 'Texts', 'Landing pages', 'Brands you choose', 'History'],
      rows: [
        ['Really Good Emails', 'Curated', 'Curated examples', 'Not described', 'Not described', 'No, a gallery', 'Curated since 2014'],
        ['Email Love', 'Curated', 'Journeys, free account', 'Not described', 'Not described', 'On request by email', 'Not stated'],
        ['Milled', '103,274 brands', 'Not described', 'Not described', 'Not described', 'Follow brands it covers, or suggest one', 'Full archive on Pro'],
        ['MailCharts', 'Yes', 'Journeys it triggers', 'Curated examples', 'Not described', 'Not described', 'Not stated'],
        ['BadRep', '1,910 brands', 'Welcome, cart, post purchase', 'Not described', 'Not described', 'On request', '51,174 emails'],
        ['Panoramata', 'Yes', 'Yes', 'Yes', 'Yes', '20 on Startup, then unlimited', '6 months on Startup, then unlimited'],
        ['Owletter', 'Mailing list emails', 'Not described', 'Not described', 'Not described', '10, 25 or unlimited sites', '12 months, or lifetime'],
        ['SendView', 'Yes', 'The ones you start', 'Not described', 'Not described', '10, 25 or 50 companies', 'From your sign up'],
        ['By hand', 'Yes', 'The ones you start', 'With a spare phone', 'You open each link', 'Any brand', 'From your sign up'],
      ],
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to track competitor emails. Prices from each company’s own pages, 23 October 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Doing nothing',
          'Costs no time',
          'Free',
          'You hear of a rival’s offer after it ran',
          'Months with no sale planned',
        ],
        [
          'By hand: an address per rival, a phone, a sheet',
          'Any brand, the flows you start, and texts',
          'Free, plus your hours',
          'History from your sign up, and hours grow with each rival',
          '1 to 3 rivals',
        ],
        [
          'AI assistant: reading the spare inbox',
          'Summarises what arrived',
          'Within your existing plan',
          '1 inbox, capped schedules, no older mail',
          'Reading the inbox faster',
        ],
        [
          'Galleries: Really Good Emails, Email Love',
          'Curated examples by email type',
          'Free, Email Love with an account',
          'A selection, with no alerts',
          'Design and copy ideas',
        ],
        [
          'Milled: email archive',
          'Campaigns from 103,274 brands, with holiday filters',
          'Basic: free\nPro: $99 a month, on its February 2026 page',
          'No flows or texts on its pages',
          'Category and holiday research',
        ],
        [
          'MailCharts: email archive',
          'Journeys by subscriber type, and benchmarks',
          'Not listed, contact the company',
          'Its pricing link leads to Litmus',
          'Journey and benchmark research',
        ],
        [
          'BadRep: email archive',
          '20+ filters, and flow emails by type',
          '$29 a month',
          '1,910 brands across many sectors',
          'Copy and offer research',
        ],
        [
          'Panoramata: monitoring platform',
          'Emails, texts, flows, ads and landing pages',
          '$99, $179 or $399 a month',
          '20 rivals and 6 months of history on Startup',
          'Many rivals across channels',
        ],
        [
          'Owletter: rival tracker',
          'A low cost archive of named rivals',
          '$29, $49 or $99 a month',
          'No texts or flows on its pages',
          'Up to 25 named rivals',
        ],
        [
          'SendView: rival tracker',
          'Any company, with sequence timelines and trends',
          '$69, $99 or $169 a month',
          'You do the sign ups',
          'Named rivals’ welcome and basket emails',
        ],
        [
          'Obsession (ours): [Email and SMS tracking](/recipes/email-sms-tracking), [Competitor tracking](/recipes/competitor-tracking)',
          'An AI customer subscribes to each rival’s emails and texts and logs every message, offer and code on 1 timeline',
          'Running now: first store check free\nAgencies: 5 stores checked free\nCredit-based plans, like Claude’s',
          'History from the minute its AI customer first subscribed',
          'Every email and text a new subscriber gets from any rival, kept as proof',
        ],
      ],
    },

    { kind: 'h2', id: 'by-hand', text: 'Track competitor emails by hand' },
    {
      kind: 'p',
      text: 'The method needs a new address for each rival, a spare phone for texts, a Gmail filter and a sheet. It records the flows you start yourself, and it holds nothing sent before your sign up.',
    },

    { kind: 'h3', id: 'addresses', text: '1. Open 1 address for each rival' },
    {
      kind: 'p',
      text: 'A new Gmail address for each rival keeps each welcome series apart and shows the tab Gmail chose. Past a handful of rivals, Google Workspace saves time: you can add [up to 30 aliases for each user](' +
        WORKSPACE_ALIAS +
        ') at no extra cost, all arriving in 1 inbox, and the **deliveredto:** operator in [Gmail’s search help](' +
        GMAIL_SEARCH +
        ') lists the mail sent to each alias.',
    },

    { kind: 'h3', id: 'sign-up', text: '2. Sign up the way a customer does' },
    {
      kind: 'p',
      text: 'Sign up through each rival’s pop up on a phone, note the time and the offer on screen, and confirm the first email if it asks. For basket emails, sign up a second address, add a product to the basket in the same browser and leave. For texts, opt in with a number that has never joined the rival’s list. Use only the public sign up any customer can use.',
    },

    { kind: 'h3', id: 'log', text: '3. Label each email and log it' },
    {
      kind: 'p',
      text: 'In Gmail, open the search options, enter the rival’s sender address or the alias, choose Create filter and send the mail to a label, as [Gmail’s filter help](' +
        GMAIL_FILTERS +
        ') describes. Log each email in a sheet: rival, time received, subject, offer and code, campaign or flow step, Gmail tab, and a link. A search for **category:promotions** lists the mail Gmail placed in that tab.',
    },

    { kind: 'h3', id: 'stay-active', text: '4. Keep each address active' },
    {
      kind: 'p',
      text: 'Open and click an email from each rival every few weeks, because brands remove subscribers who never engage. [Klaviyo’s help centre](' +
        KL_SUNSET +
        ') recommends a sunset segment of profiles created at least 180 days ago that received at least 5 emails in the last 72 weeks and never opened or clicked, and suppressing those who stay unengaged.',
    },

    { kind: 'h3', id: 'originals', text: '5. Save the original of anything you report' },
    {
      kind: 'p',
      text: 'For an email you will show a client or a manager, choose More, then Show original, which [Gmail’s header help](' +
        GMAIL_HEADERS +
        ') says opens the full header in a new window. Keep the header with the screenshot, since it carries the arrival time and the sender checks.',
    },

    { kind: 'h3', id: 'hours', text: '6. Count the hours' },
    {
      kind: 'p',
      text: 'Use your own minutes: rivals × minutes a week on each rival × 4 ÷ 60 = hours a month. Add time for each new rival’s first week, when its welcome series arrives.',
    },
    {
      kind: 'art',
      caption: 'The sum with invented minutes. Put your own minutes a week in place of 15.',
      art: {
        kind: 'price',
        title: 'Hours a month to track 8 rivals by hand',
        rows: [
          { label: 'Rivals', value: '8' },
          { label: 'Minutes a week on each rival', value: '15', note: 'Reading, logging and a screenshot' },
          { label: 'Weeks a month', value: '× 4' },
          { label: 'Minutes to hours', value: '÷ 60' },
        ],
        total: { label: 'Hours a month', value: '8', note: 'Before each new rival’s first week, when its welcome series arrives' },
      },
    },
    {
      kind: 'p',
      text: 'An AI assistant connected to the spare inbox can summarise and compare what arrived. [What ChatGPT, Claude and 3 other assistants can do here](/blog/can-chatgpt-track-competitor-emails) covers their schedules, caps and limits, including that none can read mail from before the sign up.',
    },
    {
      kind: 'p',
      text: 'For 1 to 3 rivals, this method needs no paid tool. At 20 rivals it needs 20 addresses, a phone number for each and about 20 hours a month at 15 minutes a rival, and it still can’t recover older mail. Obsession runs that work today. It makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your rivals and prospect with proof. Its [email and SMS tracking](/recipes/email-sms-tracking) gives each rival an AI customer with its own inbox and texting number, and logs every message, offer and code on 1 timeline.',
    },
    {
      kind: 'cta',
      text: 'Name the rivals to watch, and an AI customer joins each one’s emails and texts and keeps every message as it arrived. It runs now, on credit-based plans like Claude’s.',
      to: '/',
      label: 'Meet your first AI customers',
    },

    { kind: 'h2', id: 'by-job', text: 'Which tool fits which job' },
    {
      kind: 'list',
      items: [
        '**Every email and text a rival sends a new subscriber, kept as proof:** use Obsession. Its AI customers sign up to any rival you name and keep each message as it arrived, from the welcome series on.',
        '**Design and copy ideas:** Really Good Emails or Email Love, both free.',
        '**What a category sent around a holiday:** Milled, with its holiday filters, or Panoramata.',
        '**A rival’s welcome and basket emails:** SendView or the method by hand, where you start each flow, or BadRep, MailCharts and Panoramata for rivals they already cover.',
        '**Emails, texts and ads from many rivals:** Panoramata, with up to 20 on Startup and no limit from Professional.',
        '**Up to 25 named rivals on a small budget:** Owletter.',
        '**Client reports at an agency:** SendView’s white labelled agency accounts, Panoramata’s white label benchmark reports, sold as an add on, or MailCharts’ exports. The [Black Friday rival report template](/blog/black-friday-rival-report-template) gives a 1 page format, and the [email marketing audit](/blog/email-marketing-audit) sets the rival comparison beside the client’s own emails.',
        '**1 to 3 rivals:** the method by hand, with an assistant reading the inbox.',
      ],
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'list',
      items: [
        '**Every line comes from the vendors’ pages.** We did not run the tools, and every brand and email count is the vendor’s own.',
        '**An archive holds what its own addresses received.** A buyer, a long time subscriber or a subscriber in another country may receive different emails.',
        '**A new address starts empty.** Mail sent before the sign up exists only in an archive that already covered the brand.',
        '**A Gmail tab is 1 inbox’s view.** Gmail can sort the same email differently for an engaged customer.',
        '**Plans and prices change.** Check each pricing page on the day you buy.',
      ],
    },
    {
      kind: 'p',
      text: '[Klaviyo’s June 2026 timing guide](' +
        KL_TIMING +
        ') plans Black Friday teasers 2 to 4 weeks before the sale, in early November. Sign up to each rival by Friday 30 October, so every address is on the list before the teasers and holds 4 weeks of mail by Black Friday on Friday 27 November. What a rival’s first order costs once its welcome code is applied is in [a competitor’s real price after the welcome code](/blog/competitor-price-after-welcome-code).',
    },
    {
      kind: 'cta',
      text: 'Obsession checks 5 stores free, a client’s with their OK: an AI customer signs up as each store’s new customer, opts in to texts and leaves a basket, and you see what happened, with proof.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'questions', text: 'Frequently asked questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is competitor email tracking?',
          a: 'Competitor email tracking is recording the emails, and often the texts, that rival brands send their subscribers, with the date, offer and sequence of each, so you can plan your own calendar and offers against them.',
        },
        {
          q: 'What is the best competitor email tracking tool?',
          a: 'It depends on the job: Milled for campaign history across many brands, Panoramata for emails, texts and ads in 1 place, SendView or Owletter for a fixed list of rivals you name, and Really Good Emails or Email Love for design examples. Obsession keeps every email and text a new subscriber gets from any rival you name, each as it arrived.',
        },
        {
          q: 'Is there a free competitor email monitoring tool?',
          a: 'Really Good Emails’ gallery is free, Email Love is free with an account, and Milled and Panoramata offer free access with limits. Owletter and SendView offer 14 day and 10 day trials, and tracking by hand costs only your time.',
        },
        {
          q: 'What is a good Milled alternative?',
          a: 'Panoramata adds flows, texts and ads, SendView and Owletter track the rivals you name, and BadRep is a smaller searchable database at $29 a month.',
        },
        {
          q: 'What is a good MailCharts alternative?',
          a: 'MailCharts asks you to contact the company, and its pricing link leads to Litmus, now part of Validity Engage, with no plans listed. Panoramata, SendView, Owletter and BadRep list prices on their own pages, and Panoramata and BadRep also cover flow emails.',
        },
        {
          q: 'What are the best email inspiration websites?',
          a: 'Really Good Emails, with 20,000+ curated examples, and Email Love, covering 8,600+ brands, are free for design ideas. Milled covers campaigns from a much larger archive.',
        },
        {
          q: 'Can I see emails a competitor sent before I subscribed?',
          a: 'Only in an archive that already collected them, such as Milled, MailCharts, Panoramata or BadRep, for the brands each one covers.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Milled’s pricing page asked for a sign in on 23 October 2026, so its plans come from the Internet Archive’s copy of that page from 10 February 2026, and its counts from its homepage that day. A search result for its pricing page that day showed the same yearly prices. BadRep’s pages limited automated reads, so we read its homepage in a browser. Panoramata’s pricing page also shows a table in euros (€99, €149 and €379 a month), and we quote its dollar prices. Really Good Emails gives 19,000+ curated emails on its homepage and 20,000+ on its pricing page. SendView lists Ultimate with unlimited users in 1 table and 5 users in another. We did not run any of the tools. larkmoor.example and every figure in the 2 illustrations are invented.',
    },
  ],

  sources: [
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: KLAVIYO_BENCH, date: '2026' },
    { title: 'MailCharts for agencies', publisher: 'MailCharts (Validity)', url: MC_AGENCIES },
    { title: 'Really Good Emails', publisher: 'Really Good Emails (Beefree)', url: RGE },
    { title: 'RGE Studio pricing', publisher: 'Really Good Emails (Beefree)', url: RGE_PRICING },
    { title: 'Email Love', publisher: 'Email Love', url: EMAIL_LOVE },
    { title: 'Pricing', publisher: 'Email Love', url: EL_PRICING },
    { title: 'Milled: a search engine for email newsletters and ecommerce sales', publisher: 'Milled', url: MILLED },
    { title: 'Milled pricing, Internet Archive copy', publisher: 'Milled, via the Internet Archive', url: MILLED_PRICING_COPY, date: '2026-02-10' },
    { title: 'MailCharts from Validity', publisher: 'MailCharts (Validity)', url: MAILCHARTS },
    { title: 'Pricing', publisher: 'Litmus (Validity)', url: LITMUS_PRICING },
    { title: 'BadRep Emails: searchable email intel', publisher: 'BadRep', url: BADREP },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Track your competitors’ email flows and marketing automations', publisher: 'Panoramata', url: PANO_FLOWS },
    { title: 'Monitor your competitors’ SMS marketing', publisher: 'Panoramata', url: PANO_SMS },
    { title: 'Pricing', publisher: 'Owletter (Koan Adventures)', url: OWLETTER },
    { title: 'Competitor email capturing and analysis for retailers', publisher: 'Owletter (Koan Adventures)', url: OWL_RETAILERS },
    { title: 'Competitor email monitoring and tracking for marketers', publisher: 'SendView (PeakFeed)', url: SENDVIEW },
    { title: 'Add or delete an alternate email address (email alias)', publisher: 'Google Workspace Admin Help', url: WORKSPACE_ALIAS, date: '2026-10-22' },
    { title: 'Refine searches in Gmail', publisher: 'Gmail Help', url: GMAIL_SEARCH },
    { title: 'Create rules to filter your emails', publisher: 'Gmail Help', url: GMAIL_FILTERS },
    { title: 'How to create a sunset flow', publisher: 'Klaviyo Help Center', url: KL_SUNSET, date: '2026-03-11' },
    { title: 'Trace an email with its full headers', publisher: 'Gmail Help', url: GMAIL_HEADERS },
    { title: 'When to send Black Friday emails', publisher: 'Klaviyo (Katherine Boyarsky)', url: KL_TIMING, date: '2026-06-26' },
  ],

  related: [
    'can-chatgpt-track-competitor-emails',
    'black-friday-rival-report-template',
    'email-marketing-audit',
    'recipe:email-sms-tracking',
    'recipe:competitor-tracking',
    '/use-cases/leak-checks-for-retention-agencies',
  ],
}
