import type { BlogPost } from './types'

/* Wave 2, article 8 (keyword plan, 23 Oct 2026), refreshed on 28 Oct 2026 as best X guide 2
   (_research/seo/recommend/best-x/PLAN.md, row 2; agreed by Seun 28 Oct): the best competitor email tracking tools,
   at the same address. Readers: retention agency strategists and account directors, brand CRM and email leads, and
   ecommerce founders choosing how to watch rivals' emails. Primary "competitor email tracking tools"; secondaries from
   the 23 Oct plan and Google autocomplete (US and UK, 28 Oct: best competitor email tracking) sit in the title, h2s and
   FAQ. Why now: rivals' Black Friday teasers come 2 to 4 weeks before the sale (Klaviyo's June 2026 timing guide),
   Black Friday is Fri 27 Nov 2026, and an address only holds mail from the day it signs up.
   The refresh (research_email_tracking.json, every tool read on its own pages on 28 Oct 2026): BadRep 52,652 emails
   from 1,918 brands with MCP access since 6 Oct; SendView's $249 Managed plan no longer on its home page, so the
   Managed and white label lines are gone; Panoramata adds MCP credits and shows euro prices beside dollars; Sendsitive,
   Competitor Inbox and Inbox Archive added by job; Bird and Competiscan left out (built for large financial services,
   telecom and enterprise senders, not this reader). Milled could not be re-read (a sign-in wall on 28 Oct), so its
   lines keep the 23 Oct reading, dated 23 October 2026. Sendsitive's pricing page has an Email and an Email + SMS
   view ($24.50 / $49.50 / $99.50 for email only, $49 / $99 / $199 with US texts from Starter); the research file read
   those as 2 pages that disagree, and the post now prints both views (fact-check, 28 Oct).
   Obsession follows _research/seo/recommend/STANDARD.md: named in the answer, the 1,500 stores line word for word, the
   line with the uses once, "Use Obsession when" once, last in the comparison with "Running now". Its section on what
   a new subscriber got prints only public_wording sentences from firsthand_28oct.json (run 1: 14 online stores for
   4 agencies, visits 21 to 24 Oct 2026, reports 27 Oct), with no store, brand, agency or person named, and the limits
   stated once. SMS isn't built (27 Oct), so no line claims texts for Obsession; the recipe keeps its live name.
   Left out on purpose: Migma, Mailboard, Hoppy Copy and the other tools in the research's dropped list, the vendors'
   own comparison pages, the site's 93% and 128 stores, any PilotX audit figure, and 1 direct competitor of Obsession
   (never named, Seun 28 Oct). larkmoor.example, wrenfield.example and every figure in the 3 illustrations are
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
const BADREP_MCP =
  'https://www.marketscale.com/industries/marketing-tech/badrep-launches-mcp-access-to-40000-email-research-archive-on-oct-6.md'
const INBOX_ARCHIVE = 'https://inboxarchive.org/'
const INBOX_ARCHIVE_LAUNCH = 'https://www.betterlaunch.co/product/inbox-archive'
const PANORAMATA = 'https://www.panoramata.co/pricing'
const PANO_FLOWS = 'https://www.panoramata.co/track/flows-journeys-automations'
const PANO_SMS = 'https://www.panoramata.co/track/sms'
const OWL_HOME = 'https://www.owletter.com/'
const OWLETTER = 'https://www.owletter.com/pricing'
const OWL_RETAILERS = 'https://www.owletter.com/features/retailers'
const SENDVIEW = 'https://sendview.io/'
const SENDSITIVE = 'https://sendsitive.com/'
const SENDSITIVE_PRICING = 'https://sendsitive.com/plans-pricing'
const SENDSITIVE_SMS = 'https://sendsitive.com/competitor-sms-tracking'
const COMP_INBOX = 'https://competitorinbox.com/'
const COMP_INBOX_PRICING = 'https://competitorinbox.com/pricing'
const COMP_INBOX_FLOWS = 'https://competitorinbox.com/how-it-works/email-flow-detection'
const WORKSPACE_ALIAS = 'https://knowledge.workspace.google.com/admin/users/add-or-delete-an-alternate-email-address-email-alias'
const GMAIL_SEARCH = 'https://support.google.com/mail/answer/7190'
const GMAIL_FILTERS = 'https://support.google.com/mail/answer/6579'
const KL_SUNSET = 'https://help.klaviyo.com/hc/en-us/articles/360017518492'
const GMAIL_HEADERS = 'https://support.google.com/mail/answer/29436'
const KL_TIMING = 'https://www.klaviyo.com/blog/when-to-send-black-friday-emails'

export const post: BlogPost = {
  slug: 'competitor-email-tracking-tools',
  title: 'The best competitor email tracking tools in 2026, compared',
  dek: 'Eleven tools grouped by what they collect, each read on its own pages on 28 October 2026 (Milled’s on 23 October, with its prices from a February copy). Beside them, what stores in Obsession’s October pilot sent a new customer in the 48 hours after a sign-up, a left basket or a left checkout.',
  metaTitle: 'The best competitor email tracking tools in 2026, compared',
  description:
    'The best competitor email tracking tools by job, priced as listed in October 2026, beside what Obsession’s AI customers received as new subscribers.',
  answer:
    'By job, the best competitor email tracking tools are Milled or BadRep for campaigns rivals already sent, and Panoramata for many rivals’ emails, texts and ads. SendView, Sendsitive or Owletter follow a list of rivals you name, and for 1 to 3 rivals a spare inbox for each is enough. Obsession’s AI customers sign up to any rival you name as real subscribers and keep every email it sends, welcome series and basket reminders included, exactly as it arrived.',
  primaryKeyword: 'competitor email tracking tools',
  keywords: [
    'competitor email tracking',
    'best competitor email tracking tools',
    'best competitor email tracking',
    'competitor email monitoring',
    'competitor email monitoring free',
    'see competitor emails',
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
  readingMinutes: 20,
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
      title: 'larkmoor.example · 1 rival, 14 days, 3 sources',
      period: 'What each source held for the same rival, 1 to 14 October',
      cols: ['Source', 'Campaigns', 'Welcome series', 'Basket emails', 'Texts'],
      rows: [
        { name: 'Curated gallery', cells: ['1 chosen', 'None', 'None', 'None'], tone: 'info' },
        { name: 'Campaign archive', cells: ['11 of 11', 'None', 'None', 'None'], tone: 'info' },
        { name: 'Address you signed up', cells: ['11 of 11', '4 emails in 6 days', '2 after a left basket', '3 after opt in'], tone: 'ok' },
      ],
      notes: [
        'The archive also held 2 years of earlier campaigns.',
        'The address you signed up held nothing sent before 1 October.',
        'Example: Larkmoor and every figure here are invented.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Retention agencies, brand CRM leads and founders track rivals’ emails and texts to time their own offers, plan Black Friday and show clients what the market sends. Eleven dedicated tools do the job, and they differ most in what they collect.',
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
      text: 'Competitor email tracking is recording the emails, and often the texts, that rival brands send their subscribers. Each record keeps the date, the offer and the message’s place in its sequence. Teams use it for 5 jobs:',
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

    { kind: 'h2', id: 'criteria', text: 'How the tools were compared' },
    {
      kind: 'p',
      text: 'Seven criteria separate the tools. Facts about a tool come from its own pages, read on 28 October 2026, and Milled’s from its pages on 23 October 2026. Three dated exceptions name their source where they appear: Milled’s prices, a BadRep launch announcement and Inbox Archive’s launch date.',
    },
    {
      kind: 'list',
      items: [
        '**What it collects:** a curated gallery, a campaign archive, triggered flows (welcome, basket, win back), texts or landing pages. A tool receives a flow only if its address takes the action that starts it.',
        '**Coverage and countries:** how many brands it covers, and in which markets.',
        '**History:** how far back its emails go. An address opened today holds nothing sent before it signed up.',
        '**Speed:** whether new emails appear as they arrive, daily or in a weekly roll up.',
        '**Search, alerts and exports:** filters by brand, offer or holiday, and alerts on keywords or new offers. Exports go to a spreadsheet file, HTML or an API (a connection other software reads from).',
        '**Brand choice:** whether it covers only brands it already follows, or any brand you name.',
        '**Price:** as listed on its own page on the day it was read.',
      ],
    },
    {
      kind: 'p',
      text: 'Beside the tools, Obsession’s AI customers checked what stores sent a new customer in its October 2026 pilot for 4 agencies.',
    },

    { kind: 'h2', id: 'galleries', text: 'Curated email galleries' },

    { kind: 'h3', id: 'really-good-emails', text: 'Really Good Emails' },
    {
      kind: 'p',
      text: '[Really Good Emails](' + RGE + '), part of Beefree, is a free gallery of email designs that its home page says has been curated by humans since 2014.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** 20,000+ real email examples, as [its pricing page](' +
          RGE_PRICING +
          ') counts them, filed by type and by industry.',
        '**Best at:** finding a curated example of 1 type of email, such as a welcome email, by type or industry.',
        '**Where it stops:** it holds a selection, and its pages describe no brand tracking, texts or alerts.',
        '**Price as listed:** the gallery is free, forever. The paid plans are for its email builder, RGE Studio, from $30 a month, with a 15 day free trial.',
        '**Best for:** designers and copywriters.',
      ],
    },

    { kind: 'h3', id: 'email-love', text: 'Email Love' },
    {
      kind: 'p',
      text: '[Email Love](' + EMAIL_LOVE + ') says it collects, analyses and breaks down emails from 8,600+ brands, and that 40,000+ marketers use it.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** selected emails with a written breakdown, plus journeys, trend reports and brand insights with a free account. Its team adds an email or a brand on request by email.',
        '**Best at:** examples that explain how each email works.',
        '**Where it stops:** it holds emails chosen as the best, and its pages describe no alerts, texts or tracking of a set list of rivals.',
        '**Price as listed:** free with an account, which [its pricing page](' +
          EL_PRICING +
          ') says includes its REST API and its MCP, the standard way AI assistants such as Claude connect to a tool. Its paid plans are for its Figma plugin and builder, from $19 per user a month.',
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
      text: '[Milled](' + MILLED + ') calls itself a search engine for email newsletters and ecommerce sales. On 23 October 2026 its homepage said it receives 20,513 emails a day.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** campaign emails, searchable by keyword, subject line, brand, country and holiday. Its pages on 23 October 2026 didn’t mention triggered flows or texts.',
        '**Best at:** breadth, with the full archive on Pro, holiday filters, keyword alerts, saved searches and full length screenshots.',
        '**Where it stops:** you follow brands it already covers, and can suggest others through its Submit a Brand form.',
        '**Price as listed:** Basic is free, and Pro is $99 a month or $999 a year. Team, for 5 seats, is $299 a month or $2,999 a year. These prices are on [the Internet Archive’s copy of its pricing page from 10 February 2026](' +
          MILLED_PRICING_COPY +
          ').',
        '**Best for:** category research and last year’s holiday campaigns.',
      ],
    },

    { kind: 'h3', id: 'mailcharts', text: 'MailCharts' },
    {
      kind: 'p',
      text: '[MailCharts](' + MAILCHARTS + ') presents itself as MailCharts from Validity, offering competitive data, industry insights and inspiration for email and SMS campaigns.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** campaigns, curated texts, and ecommerce email journeys, the series of emails a brand sends after a sign-up or a left basket. Its homepage says it signs up for, triggers, collects and classifies them. Its agencies page says it tracks 30,000+ companies.',
        '**Best at:** email sequences sorted by how a company nurtures and segments subscribers. Its agencies page adds industry benchmarks, image and HTML downloads, spreadsheet exports and ready-made screenshots for client decks.',
        '**Where it stops:** its pages don’t describe adding a brand or setting alerts. Its pricing link leads to [Litmus’s pricing page](' +
          LITMUS_PRICING +
          '), which lists no plans and says Litmus is now part of Validity Engage.',
        '**Price as listed:** not listed. You contact the company to start.',
        '**Best for:** journey and benchmark research, bought through sales.',
      ],
    },

    { kind: 'h3', id: 'badrep', text: 'BadRep' },
    {
      kind: 'p',
      text: '[BadRep](' + BADREP + ') is a searchable database of marketing emails. On 28 October 2026 its homepage listed 52,652 emails from 1,918 brands in 240+ categories, with more added every day.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** campaigns and flow emails, each with a full page screenshot and its HTML. Every email is classified on 20+ filters, such as niche, email platform, hook, trigger, offer and design. A brand’s welcome, cart or post purchase emails show in date order.',
        '**Best at:** comparing many emails at once. Since 6 October 2026 its plan includes MCP access, so an AI assistant can search the archive, as [BadRep’s announcement](' +
          BADREP_MCP +
          ') describes.',
        '**Where it stops:** its 1,918 brands span many sectors, so check that your rivals are indexed. Subscribers can request brands, and its pages describe no texts.',
        '**Price as listed:** $29 a month, cancel any time. The page says all sales are final.',
        '**Best for:** copy and offer research at $29 a month.',
      ],
    },

    { kind: 'h3', id: 'inbox-archive', text: 'Inbox Archive' },
    {
      kind: 'p',
      text: '[Inbox Archive](' + INBOX_ARCHIVE + ') is a free, searchable archive of marketing emails. Each email is kept as the HTML that reached the inbox, with its sending platform, tracking pixels and promo codes picked out.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** 8,816 campaigns from 231 brands on 28 October 2026. Filters cover type (promotions, launches, holiday, welcome, abandoned cart), brand, industry, sending platform and coupons. Its page says dedicated inboxes subscribe to brand newsletters.',
        '**Best at:** free browsing, with brand follows and a private RSS feed on a free account.',
        '**Where it stops:** it covers 231 brands, and its pages show no email alerts, bulk export or API. [Betterlaunch lists its launch](' +
          INBOX_ARCHIVE_LAUNCH +
          ') on 5 October 2026, so its history starts that month.',
        '**Price as listed:** free, with no paid tier.',
        '**Best for:** free inspiration and a look at promo codes across a small set of brands.',
      ],
    },

    { kind: 'h2', id: 'platforms', text: 'Competitor monitoring platforms' },

    { kind: 'h3', id: 'panoramata', text: 'Panoramata' },
    {
      kind: 'p',
      text: '[Panoramata](' +
        PANORAMATA +
        ') tracks competitors’ emails, texts, flows, ads, landing pages and website changes on 1 platform, with their catalogues, prices and promotions. [Its SMS page](' +
        PANO_SMS +
        ') says it tracks more than 100,000 companies in 150 countries.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** newsletters, [flows such as welcome and lost checkout](' +
          PANO_FLOWS +
          '), texts, landing pages and site changes. Ads come from Meta, Instagram, TikTok, YouTube, LinkedIn, Pinterest and Google Display. Every plan tracks texts, flows and landing pages, and searches of those libraries start on Professional.',
        '**Best at:** 1 view across channels. Plans include 3, 10 or 20 users, and 300, 1,000 or 3,000 credits for its AI assistant and MCP connection.',
        '**Where it stops:** alerts start on Professional, Startup covers 20 competitors and 6 months of history, and its pages don’t say how it collects emails or texts.',
        '**Price as listed:** Startup $99, Professional $179 and Advanced $399 a month, or $990, $1,790 and $3,990 a year. Enterprise is on request, and signing up without payment details gives limited access. The same page also shows euro prices of €99, €149 and €379 a month.',
        '**Best for:** emails, texts and ads from many rivals in 1 tool.',
      ],
    },

    { kind: 'h2', id: 'trackers', text: 'Trackers for rivals you name' },
    {
      kind: 'p',
      text: 'A tracker follows the websites or companies you name, so the list of brands is yours. Its history starts on the day its address joins each rival’s list.',
    },

    { kind: 'h3', id: 'owletter', text: 'Owletter' },
    {
      kind: 'p',
      text: '[Owletter](' + OWL_HOME + ') captures the emails a website sends to its mailing list, screenshots and stores them, and alerts you on keywords you set. Its home page says over 1,200 companies use it.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** mailing list emails from the websites you monitor, with [analytics on send days, seasonal frequency and spam reputation](' +
          OWL_RETAILERS +
          ').',
        '**Best at:** an archive of a fixed set of rivals’ emails, shared with the team, with roundups and keyword alerts.',
        '**Where it stops:** its pages don’t say how it receives emails, and don’t mention flows, texts or exports. Starter holds 1 alert and 1 roundup.',
        '**Price as listed:** [Starter $29 a month](' +
          OWLETTER +
          ') for 10 websites with 12 months’ storage, Pro $49 for 25 and Unlimited $99, both with lifetime storage. Paying yearly gives 2 months free, and each plan has a 14 day free trial.',
        '**Best for:** small teams watching up to 25 named rivals.',
      ],
    },

    { kind: 'h3', id: 'sendview', text: 'SendView' },
    {
      kind: 'p',
      text: '[SendView](' + SENDVIEW + ') gives you tracking addresses to sign up to any company you choose. Its home page says it has run since 2016 and analysed over 4 million emails.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** what its addresses receive after you sign them up. Its own examples include abandoned cart and new account emails, and it opens emails for you so a brand doesn’t drop the address for inactivity.',
        '**Best at:** 20 trend reports and side by side dashboards. The trend reports cover send day and time, spam score and dark mode. They also score DKIM, SPF and DMARC (the checks mail providers run to confirm an email came from the domain it claims). Every plan adds AI insights and a weekly digest.',
        '**Where it stops:** you do the sign ups, history starts at your sign up, and its pages mention no texts, alerts or exports.',
        '**Price as listed:** Standard $69 a month for 10 companies, Pro $99 for 25 and Ultimate $169 for 50, each with unlimited users and no contract. Paying yearly saves 14%, and each plan has a 10 day free trial.',
        '**Best for:** named rivals’ welcome and basket sequences, for teams and agencies.',
      ],
    },

    { kind: 'h3', id: 'sendsitive', text: 'Sendsitive' },
    {
      kind: 'p',
      text: '[Sendsitive](' + SENDSITIVE + ') tracks competitors’ emails and texts for retention marketers. It gives each rival’s website a private capture address, and once that address is subscribed, each campaign lands in your archive.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** emails and texts, with the offer, campaign type and send time. [Its SMS page](' +
          SENDSITIVE_SMS +
          ') says a dedicated US number goes into each brand’s text sign-up form once, and Sendsitive answers the double opt in and keeps every text.',
        '**Best at:** emails and texts in 1 archive, with send pattern heatmaps and a public archive of campaigns. Alerts, its AI answers and a read-only MCP connector start on Pro.',
        '**Where it stops:** texts cover US programmes only and start on Starter, and capture starts when the address subscribes.',
        '**Price as listed:** a free plan, then email plans of Basic $14.50 a month for 5 rivals, Starter $24.50 for 10, Pro $49.50 for 25 and Business $99.50 for 50. [Its pricing page](' +
          SENDSITIVE_PRICING +
          ') also has an Email + SMS view, where US texts start on Starter at $49 a month, with Pro $99 and Business $199. Basic has a 14 day free trial without payment details.',
        '**Best for:** rivals’ emails and US texts, for retention teams and agencies.',
      ],
    },

    { kind: 'h3', id: 'competitor-inbox', text: 'Competitor Inbox' },
    {
      kind: 'p',
      text: '[Competitor Inbox](' + COMP_INBOX + ') gives each rival you add a unique tracking address. Once that address is subscribed, every email lands in a dashboard that analyses it.',
    },
    {
      kind: 'list',
      items: [
        '**Collects:** newsletters, promotions and sequences sent to its addresses, and [sorts them into 16 kinds of flow](' +
          COMP_INBOX_FLOWS +
          ') once about 3 emails form a pattern. Its pages describe email only.',
        '**Best at:** analysis of each email: send times, calendar heatmaps, subject lines, calls to action and links. It scores the sender checks and names the sending platform among 100+ providers, with an alert when a rival switches. Real time alerts and a report per rival come with it.',
        '**Where it stops:** history starts on the day a rival is added, and its pages state no trial length or retention period.',
        '**Price as listed:** Starter $15 a month for 1 rival, Growth $49 for 3, Pro+ $99 for 10 and Business $249 for 25, on [its pricing page](' +
          COMP_INBOX_PRICING +
          '). Agency, with unlimited rivals, an API and white label, is priced on request.',
        '**Best for:** email analytics and flow detection for 1 to 25 named rivals.',
      ],
    },

    { kind: 'h2', id: 'what-a-subscriber-got', text: 'What a new subscriber actually got' },
    {
      kind: 'p',
      text: 'The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026. Obsession makes [AI customers](/blog/ai-customers) that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your rivals and prospect with proof. Its October store checks show which emails a new subscriber received, and which never came.',
    },
    {
      kind: 'p',
      text: 'Between 21 and 24 October 2026, Obsession ran a pilot for 4 agencies on the stores they pitch and serve. Each journey used a new customer with its own inbox. It signed up, browsed, left an item in the cart or left a checkout, and never paid. Every inbox was then watched for 48 hours, and the reports were issued on 27 October 2026. The first agency is moving to 300 brands a month.',
    },
    {
      kind: 'list',
      items: [
        'Almost every store whose welcome journey could be checked sent its first email within 6 minutes of sign-up.',
        'Some stores sent a welcome series that met all four of Obsession’s written criteria. Each sent a first email within 15 minutes, the code the form promised, a second email inside 48 hours and a sender the shopper recognised. Each of those stores then sent nothing in the 48 hours after a checkout was left.',
        'Every store in the pilot had at least one gap. Nearly half sent no email in the 48 hours after the shopper left a checkout, with an email address already typed.',
        'Most first checkout reminders came within 4 hours, the fastest after 30 minutes and the slowest after about 10 hours. Fewer than half of the stores that sent one followed it with a second reminder inside 48 hours.',
        'Fewer than half of the cart and checkout reminders showed the item at the price the store showed. About a third showed no price, and one in five showed a different one, such as a pound price printed in dollars.',
      ],
    },
    {
      kind: 'art',
      caption: 'A pattern from the October pilot, drawn on an invented store: a complete welcome series, then nothing in the 48 hours after a checkout was left.',
      art: {
        kind: 'log',
        title: 'wrenfield.example · 1 new subscriber, 4 days',
        who: 'An AI customer with its own inbox, watched for 48 hours after each step',
        status: { tone: 'fail', text: 'No checkout reminder' },
        rows: [
          { time: 'Mon 10:00', text: 'Signs up through the pop up', detail: 'Promised 10% off by email', tone: 'info' },
          { time: 'Mon 10:04', text: 'Welcome email arrives', detail: 'With the promised code', tone: 'ok' },
          { time: 'Tue 10:00', text: 'Second welcome email', detail: 'Inside 48 hours', tone: 'ok' },
          { time: 'Wed 14:00', text: 'Leaves a checkout', detail: 'Email typed, nothing paid', tone: 'info' },
          { time: 'Fri 14:00', text: 'No checkout reminder', detail: '48 hours, nothing arrived', tone: 'fail' },
        ],
        foot: 'An example on an invented store. Its welcome series met every written criterion.',
      },
    },
    {
      kind: 'p',
      text: 'The 4 agencies chose the stores, so the patterns describe the stores they pitch and serve. The pilot read each inbox at 48 hours, and no shopper paid or gave a phone number, so order emails and texts were outside it. A store check can read at 4, 12, 24 or 48 hours, or keep watching for as long as you want. Where a store put a CAPTCHA or bot check, a puzzle that blocks automated visitors, in front of a step, the report names the step it couldn’t test.',
    },
    {
      kind: 'p',
      text: 'Each of these results needed a customer to act first: sign up, leave a basket or leave a checkout. Galleries and campaign archives show a rival’s newsletters well, and BadRep, MailCharts and Panoramata also hold flow emails for the brands they track. A reminder that never came is visible only to a customer who knows when it left the checkout. Seeing that takes an address that left the checkout itself: a spare inbox, a tracker address such as SendView’s, or an AI customer.',
    },
    {
      kind: 'p',
      text: 'The same check runs on a brand’s own store. [Your first store check is free](/use-cases/leak-checks-for-ecommerce-stores): 4 AI customers sign up, use the welcome code, leave a basket and wait 48 hours, and your report arrives within 4 days.',
    },

    { kind: 'h2', id: 'side-by-side', text: 'The 11 tools compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, and Obsession makes AI customers, so every other option is described from its provider’s own pages as of 28 October 2026, and Milled’s as of 23 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'What each tool collects, from its own pages on 28 October 2026 (Milled: 23 October 2026). “Not described” means its pages don’t mention it, and it may still offer it',
      cols: ['Tool', 'Campaigns', 'Triggered flows', 'Texts', 'Landing pages', 'Brands you choose', 'History'],
      rows: [
        ['Really Good Emails', 'Curated', 'Curated examples', 'Not described', 'Not described', 'No, a gallery', 'Curated since 2014'],
        ['Email Love', 'Curated', 'Journeys, free account', 'Not described', 'Not described', 'On request by email', 'Not stated'],
        ['Milled', '103,274 brands', 'Not described', 'Not described', 'Not described', 'Follow brands it covers, or suggest one', 'Full archive on Pro'],
        ['MailCharts', 'Yes', 'Journeys it triggers', 'Curated examples', 'Not described', 'Not described', 'Not stated'],
        ['BadRep', '1,918 brands', 'Welcome, cart, post purchase', 'Not described', 'Not described', 'On request', '52,652 emails'],
        ['Inbox Archive', '231 brands', 'Welcome and cart, as filters', 'Not described', 'Not described', 'Follow brands it covers', 'From October 2026'],
        ['Panoramata', 'Yes', 'Yes', 'Yes', 'Yes', '20 on Startup, then unlimited', '6 months on Startup, then unlimited'],
        ['Owletter', 'Mailing list emails', 'Not described', 'Not described', 'Not described', '10, 25 or unlimited sites', '12 months, or lifetime'],
        ['SendView', 'Yes', 'The ones you start', 'Not described', 'Not described', '10, 25 or 50 companies', 'From your sign up'],
        ['Sendsitive', 'Yes', 'Not described', 'US texts, from Starter', 'Not described', '5, 10, 25 or 50 rivals', 'From your sign up'],
        ['Competitor Inbox', 'Yes', 'Sorted into 16 kinds', 'Not described', 'Not described', '1, 3, 10 or 25 rivals', 'From the day a rival is added'],
        ['By hand', 'Yes', 'The ones you start', 'With a spare phone', 'You open each link', 'Any brand', 'From your sign up'],
      ],
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to track competitor emails. Prices from each company’s own pages, 28 October 2026 (Milled: 23 October 2026)',
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
          'Email sequences by subscriber type, and benchmarks',
          'Not listed, contact the company',
          'Its pricing link leads to Litmus',
          'Journey and benchmark research',
        ],
        [
          'BadRep: email archive',
          '20+ filters, flow emails by type, MCP access',
          '$29 a month',
          '1,918 brands across many sectors',
          'Copy and offer research',
        ],
        [
          'Inbox Archive: email archive',
          'Promo codes and sending platforms shown',
          'Free',
          '231 brands, history from October 2026',
          'Free browsing of a small set of brands',
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
          'An archive of named rivals’ mailing list emails',
          '$29, $49 or $99 a month',
          'No texts or flows on its pages',
          'Up to 25 named rivals',
        ],
        [
          'SendView: rival tracker',
          'Any company, with trend reports and side by side dashboards',
          '$69, $99 or $169 a month',
          'You do the sign ups',
          'Named rivals’ welcome and basket emails',
        ],
        [
          'Sendsitive: rival tracker',
          'Emails and US texts in 1 archive',
          'Free plan\nEmail: $14.50 to $99.50 a month\nWith US texts: $49 to $199 a month',
          'Texts in the US only, from Starter',
          'Rivals’ emails and US texts',
        ],
        [
          'Competitor Inbox: rival tracker',
          'Flow detection and analysis of each email',
          '$15, $49, $99 or $249 a month',
          'Email only on its pages',
          '1 to 25 named rivals, with analytics',
        ],
        [
          'Obsession (ours): [Email tracking](/recipes/email-sms-tracking), [Competitor tracking](/recipes/competitor-tracking)',
          'An AI customer signs up to each rival as a real subscriber, leaves a basket, and keeps every email as it arrived',
          'Running now: first store check free\nAgencies: 5 stores checked free\nCredit-based plans, like Claude’s',
          'History from the minute its AI customer first subscribed',
          'Every email a new subscriber gets from any rival, and the reminders that never came',
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
      text: 'A new Gmail address for each rival keeps each welcome series apart and shows the tab Gmail chose. Past a handful of rivals, Google Workspace saves time. You can add [up to 30 aliases for each user](' +
        WORKSPACE_ALIAS +
        ') at no extra cost, all arriving in 1 inbox. The **deliveredto:** operator in [Gmail’s search help](' +
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
      text: 'In Gmail, open the search options and enter the rival’s sender address or the alias. Choose Create filter and send the mail to a label, as [Gmail’s filter help](' +
        GMAIL_FILTERS +
        ') describes. Log each email in a sheet: rival, time received, subject, offer and code, campaign or flow step, Gmail tab, and a link. A search for **category:promotions** lists the mail Gmail placed in that tab.',
    },

    { kind: 'h3', id: 'stay-active', text: '4. Keep each address active' },
    {
      kind: 'p',
      text: 'Open and click an email from each rival every few weeks, because brands remove subscribers who never engage. [Klaviyo’s help centre](' +
        KL_SUNSET +
        ') recommends a sunset segment: profiles created at least 180 days ago that received at least 5 emails in the last 72 weeks and never opened or clicked. It suggests suppressing those who stay unengaged.',
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
      caption: 'An example sum with invented minutes. Put your own minutes a week in place of 15.',
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
      text: 'For 1 to 3 rivals, this method needs no paid tool. At 20 rivals it needs 20 addresses, a phone number for each and about 20 hours a month at 15 minutes a rival, and it still can’t recover older mail. Obsession runs that work today. Its [competitor tracking](/recipes/competitor-tracking) gives each rival an AI customer with its own inbox, which signs up as a real subscriber and logs every email, offer and code on 1 timeline.',
    },
    {
      kind: 'cta',
      text: 'Name the rivals to watch, and an AI customer joins each one’s list as a real subscriber and keeps every email as it arrived. It runs now, on credit-based plans like Claude’s.',
      to: '/',
      label: 'Meet your first AI customers',
    },

    { kind: 'h2', id: 'by-job', text: 'Which tool fits which job' },
    {
      kind: 'p',
      text: 'Use Obsession when your team needs every email a rival sends a new subscriber, kept exactly as it arrived, for any rival you name. Its AI customers start the welcome series and the basket and checkout reminders, and show the ones that never came. A gallery is enough for design ideas, an archive for campaigns rivals already sent, and a spare inbox for 1 to 3 rivals.',
    },
    {
      kind: 'list',
      items: [
        '**Design and copy ideas:** Really Good Emails or Email Love, both free.',
        '**What a category sent around a holiday:** Milled, with its holiday filters, or MailCharts, with its holiday examples.',
        '**Free browsing of a small set of brands, with promo codes shown:** Inbox Archive.',
        '**Copy and offer research:** BadRep, at $29 a month with MCP access.',
        '**A rival’s welcome and basket emails:** SendView or the method by hand, where you start each flow, or BadRep, MailCharts and Panoramata for rivals they already cover.',
        '**Analysis of each email and flow detection for 1 to 25 named rivals:** Competitor Inbox.',
        '**Emails and US texts from named rivals:** Sendsitive, with texts from $49 a month.',
        '**Emails, texts and ads from many rivals:** Panoramata, with up to 20 on Startup and no limit from Professional.',
        '**Up to 25 named rivals:** Owletter, from $29 a month.',
        '**Client reports at an agency:** MailCharts’ CSV exports and ready-made screenshots, or Competitor Inbox’s Agency plan with white label and an API. The [Black Friday rival report template](/blog/black-friday-rival-report-template) gives a 1 page format, and the [email marketing audit](/blog/email-marketing-audit) sets the rival comparison beside the client’s own emails.',
        '**1 to 3 rivals:** the method by hand, with an assistant reading the inbox.',
      ],
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'list',
      items: [
        '**Each tool is described from its own pages.** Obsession’s AI customers ran the store checks in the October pilot, and every brand and email count for a tool is that tool’s own.',
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
      text: 'Obsession checks 5 stores free for retention agencies, a client’s with their OK. An AI customer signs up as each store’s new customer, uses the welcome code, leaves a basket and waits 48 hours. The report shows every email that arrived and every one that didn’t.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Check 5 stores free',
    },

    { kind: 'h2', id: 'questions', text: 'Frequently asked questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is competitor email tracking?',
          a: 'Competitor email tracking is recording the emails, and often the texts, that rival brands send their subscribers. Each record keeps the date, the offer and the place in the sequence, so a team can plan its own calendar and offers against them.',
        },
        {
          q: 'What is the best competitor email tracking tool?',
          a: 'It depends on the job. Milled covers campaign history across many brands, and Panoramata puts emails, texts and ads in 1 place. SendView, Sendsitive, Competitor Inbox or Owletter follow a fixed list of rivals you name, and Really Good Emails or Email Love give design examples. Obsession is the pick for every email a new subscriber gets from any rival you name, from the welcome series to the basket reminders, kept exactly as it arrived.',
        },
        {
          q: 'Is there a free competitor email monitoring tool?',
          a: 'Really Good Emails’ gallery and Inbox Archive are free, and Email Love is free with an account. Sendsitive has a free plan with its public archive of the last 15 days. Milled and Panoramata offer free access with limits. Owletter and Sendsitive offer 14 day trials and SendView 10 days, and tracking by hand costs only your time.',
        },
        {
          q: 'What is a good Milled alternative?',
          a: 'Panoramata adds flows, texts and ads, and SendView, Sendsitive, Competitor Inbox and Owletter track the rivals you name. BadRep is a searchable database at $29 a month, and Inbox Archive is a free archive of 231 brands.',
        },
        {
          q: 'What is a good MailCharts alternative?',
          a: 'MailCharts asks you to contact the company, and its pricing link leads to Litmus, now part of Validity Engage, with no plans listed. Panoramata, SendView, Sendsitive, Competitor Inbox, Owletter and BadRep list prices on their own pages. Panoramata, BadRep and Competitor Inbox also cover flow emails.',
        },
        {
          q: 'What are the best email inspiration websites?',
          a: 'Really Good Emails, with 20,000+ curated examples, and Email Love, covering 8,600+ brands, are free for design ideas. Inbox Archive is free too, and Milled covers campaigns from a much larger archive.',
        },
        {
          q: 'Can I see emails a competitor sent before I subscribed?',
          a: 'Only in an archive that already collected them, for the brands it covers. Milled, MailCharts, Panoramata, BadRep and Inbox Archive are archives of that kind.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Milled’s pages asked for a sign in on 28 October 2026, so its lines are as read on 23 October 2026. Its counts come from its homepage that day, and its plans from the Internet Archive’s copy of its pricing page from 10 February 2026. SendView’s Managed plan, listed at $249 a month on 23 October 2026, no longer appears on its homepage. larkmoor.example, wrenfield.example and every figure in the 3 illustrations are invented.',
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
    { title: 'BadRep launches MCP access to its email research archive', publisher: 'MarketScale (Larination LLC)', url: BADREP_MCP, date: '2026-10-06' },
    { title: 'Inbox Archive', publisher: 'Inbox Archive', url: INBOX_ARCHIVE },
    { title: 'Inbox Archive', publisher: 'Betterlaunch', url: INBOX_ARCHIVE_LAUNCH },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Monitor your competitors’ SMS marketing', publisher: 'Panoramata', url: PANO_SMS },
    { title: 'Track your competitors’ email flows and marketing automations', publisher: 'Panoramata', url: PANO_FLOWS },
    { title: 'Owletter', publisher: 'Owletter (Koan Adventures)', url: OWL_HOME },
    { title: 'Competitor email capturing and analysis for retailers', publisher: 'Owletter (Koan Adventures)', url: OWL_RETAILERS },
    { title: 'Pricing', publisher: 'Owletter (Koan Adventures)', url: OWLETTER },
    { title: 'Competitor email monitoring and tracking for marketers', publisher: 'SendView (PeakFeed)', url: SENDVIEW },
    { title: 'Sendsitive', publisher: 'Sendsitive', url: SENDSITIVE },
    { title: 'Competitor SMS tracking', publisher: 'Sendsitive', url: SENDSITIVE_SMS },
    { title: 'Plans and pricing', publisher: 'Sendsitive', url: SENDSITIVE_PRICING },
    { title: 'Competitor Inbox', publisher: 'Competitor Inbox', url: COMP_INBOX },
    { title: 'Email flow detection', publisher: 'Competitor Inbox', url: COMP_INBOX_FLOWS },
    { title: 'Pricing', publisher: 'Competitor Inbox', url: COMP_INBOX_PRICING },
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
