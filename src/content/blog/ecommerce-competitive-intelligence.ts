import type { BlogPost } from './types'

/* Wave 2, article 5 (keyword plan, 23 Oct 2026): the thesis, written as ecommerce competitive intelligence. Readers:
   heads of growth and ecommerce at DTC brands, agency founders and strategists, and analysts building a competitor
   view. Why now: "competitive intelligence platform" is rising in US search (Google Trends, 23 Oct 2026), synthetic
   customers are being sold as a substitute for research, and Black Friday (Fri 27 Nov 2026) needs rival sign ups made
   weeks ahead, because an inbox holds only mail sent after it subscribed.
   The case is argued on its merits and in a neutral register: competitor information sorted by where it lives (public
   surfaces against private channels), why private information counts only when observed over time and kept as
   evidence, what synthetic customers, mystery shoppers and AI assistants can and can't do, then a by hand programme
   with a sum the reader fills in. Obsession appears once where the by hand programme stops, once as a row in the
   options table, in the disclosure and in 2 cta blocks, in the words of its live recipe and use case pages (read
   23 Oct 2026).
   Read at the source on 23 Oct 2026: Similarweb (pricing, data page), Semrush prices (shown in pounds), BuiltWith plans,
   Store Leads home and pricing, Meta's Ad Library help page (through a text reader) and Google's Ads Transparency help
   page, Foreplay pricing, MailCharts home (its pricing link redirects to Litmus, which shows no price), Panoramata
   pricing, Prisync pricing, Price2Spy pricing (no figure for Starter or Basic), Crayon home and pricing, Klue pricing,
   T-ROC's cost guide, BestMark, Shepper, S-PRO's AI suite, Bain's May 2026 brief, PwC Customer Link, Qualtrics
   synthetic panels, Ipsos PersonaBot, Gartner's July 2023 release, Synthetic Users pricing, Aaru, Argyle et al. on
   arXiv (its abstract proposes language models as proxies for groups; the "explore hypotheses first" line in search
   summaries is not in it, so it is not used), Bisbee et al. on Cambridge Core (text reader), Gmail's sender guidelines
   and header help, RFC 6376.
   Reused from checked live articles and the research library: Klaviyo's 2026 benchmarks, Joy Joya's 362 brand test,
   ChatGPT's task caps and Claude's Gmail connector limits (assistant_limits.json), the r/smallbusiness price thread
   (3 Oct 2026 pull; Reddit can't be fetched).
   Left out on purpose: Milled's brand and email counts and its price (its pages blocked automated reads; the counts
   came only from search summaries), Gartner's paywalled DToC research, any accuracy figure for Store Leads or
   Similarweb (neither page states one), Grep, Archil and every internal name and price from the System, any PilotX
   audit figure, the 93% and 128 stores, and the $410 lamp. The hero store and the cost example are invented. No dashes.
   "Trial teardown" appears once, as the recipe's own name in the options table. */

const KLAVIYO_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const META_ADLIB = 'https://www.facebook.com/business/help/2405092116183307'
const GOOGLE_ATC = 'https://support.google.com/adspolicy/answer/13733850'
const BUILTWITH = 'https://builtwith.com/plans'
const STORELEADS = 'https://storeleads.app/'
const SIMILARWEB_DATA = 'https://www.similarweb.com/corp/ourdata/'
const SIMILARWEB_PRICING = 'https://www.similarweb.com/corp/pricing/'
const GMAIL_SENDERS = 'https://support.google.com/a/answer/81126?hl=en'
const RFC_DKIM = 'https://www.rfc-editor.org/rfc/rfc6376'
const GMAIL_HEADERS = 'https://support.google.com/mail/answer/29436?hl=en'
const BAIN = 'https://www.bain.com/insights/synthetic-customers-earn-their-stripes/'
const PWC = 'https://www.pwc.com/us/en/services/consulting/enterprise-strategy/customer-link.html'
const QUALTRICS = 'https://www.qualtrics.com/support/survey-platform/distributions-module/synthetic-panels/'
const IPSOS = 'https://www.ipsos.com/en/node/1050826'
const GARTNER =
  'https://www.gartner.com/en/newsroom/press-releases/2023-07-20-gartner-survey-shows-just-27-percent-of-chief-supply-chain-officers-plan-to-implement-a-digital-twin-of-the-customer'
const SYNTH_USERS = 'https://www.syntheticusers.com/pricing'
const AARU = 'https://aaru.com/'
const ARGYLE = 'https://arxiv.org/abs/2209.06899'
const BISBEE =
  'https://www.cambridge.org/core/journals/political-analysis/article/synthetic-replacements-for-human-survey-data-the-perils-of-large-language-models/B92267DC26195C7F36E63EA04A47D2FE'
const TROC = 'https://trocglobal.com/mystery-shopping-cost/'
const BESTMARK = 'https://www.bestmark.com/'
const SHEPPER = 'https://www.shepper.com/'
const SPRO = 'https://s-pro.io/mystery-shopper-ai-suite'
const OPENAI_TASKS = 'https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt'
const CLAUDE_GMAIL = 'https://claude.com/docs/connectors/google/gmail'
const R_PRICES = 'https://www.reddit.com/r/smallbusiness/comments/1q6gue2/how_do_you_track_competitor_prices_efficiently/'
const SEMRUSH = 'https://www.semrush.com/prices/'
const FOREPLAY = 'https://www.foreplay.co/pricing'
const MILLED = 'https://milled.com/'
const MAILCHARTS = 'https://www.mailcharts.com'
const PANORAMATA = 'https://www.panoramata.co/pricing'
const PRISYNC = 'https://prisync.com/pricing/'
const PRICE2SPY = 'https://www.price2spy.com/pricing.html'
const CRAYON = 'https://www.crayon.co/'
const CRAYON_PRICING = 'https://www.crayon.co/pricing'
const KLUE = 'https://klue.com/'

export const post: BlogPost = {
  slug: 'ecommerce-competitive-intelligence',
  title: 'Ecommerce competitive intelligence: what each source can see',
  dek: 'What competitor stores show anyone, what only their customers see, the tools that read each source with their listed prices, and a programme you can start this week.',
  metaTitle: 'Ecommerce competitive intelligence: sources, tools, limits',
  description:
    'Ecommerce competitive intelligence sorted by where the data lives: pages, ads, inboxes, checkout and AI answers, with tools, listed prices and a method.',
  answer:
    'Ecommerce competitive intelligence is the dated record of what competitor stores show, send and charge their customers. Product pages, ad libraries, tech stack and traffic estimates are covered by many tools, while welcome codes, basket and win back emails, texts and checkout totals reach only a customer, so a lasting programme signs up to each competitor as a new customer, watches for months and keeps every email and page as evidence. Obsession’s AI customers do that as real customers of each competitor you name, keeping every email, offer and price exactly as it arrived.',
  primaryKeyword: 'ecommerce competitive intelligence',
  keywords: [
    'competitive intelligence tools',
    'competitive intelligence platform',
    'ecommerce competitor analysis',
    'ecommerce competitor analysis tools',
    'competitor analysis shopify',
    'shopify competitor research',
    'synthetic customers',
    'synthetic respondents',
    'digital twin of a customer',
    'ai mystery shopper',
  ],
  category: 'Watch other companies',
  published: '2026-10-23',
  updated: '2026-10-28',
  readingMinutes: 14,
  order: 15,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'rivals',
    workspace: 'company',
    art: {
      kind: 'log',
      title: 'ridgeline.example · followed as a new customer',
      who: 'A new Gmail address and phone, signed up on Wednesday 28 October',
      status: { tone: 'info', text: '4 of 6 seen only as a customer' },
      rows: [
        { time: 'Wed 09:02', text: 'Signed up through the pop up', detail: 'It promised 15% off and a code by text', tone: 'ok' },
        { time: 'Wed 09:05', text: 'Welcome email with code RIDGE15', detail: 'Promotions tab, kept with its full header', tone: 'ok' },
        { time: 'Fri 09:05', text: 'No text with the promised code', detail: 'Nothing 48 hours after sign up', tone: 'fail' },
        { time: 'Mon 06:00', text: 'Trail 40 pack on the product page: £120', detail: 'Public, and unchanged since Wednesday', tone: 'info' },
        { time: 'Mon 06:10', text: 'Basket total after RIDGE15: £102', detail: '15% off, with free delivery over £100', tone: 'info' },
        { time: 'Tue 11:40', text: 'Early access email: 25% off for subscribers', detail: 'Not on the site or in the ad library that morning', tone: 'info' },
      ],
      foot: 'An example on an invented store. Rows 2, 3, 5 and 6 were visible only to the new customer.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A competitor store’s list prices, ads and technology are on show to anyone with the right tool. Its welcome code, basket emails, texts and checkout total reach only its customers, and those decide many shoppers’ choices.',
    },
    {
      kind: 'p',
      text: 'In [Klaviyo’s 2026 benchmarks](' +
        KLAVIYO_BENCH +
        '), automated flows such as welcome and basket emails were 5.3% of email sends and nearly 41% of email revenue, and those emails go only to subscribers and to shoppers who left a basket.',
    },
    {
      kind: 'stat',
      value: '41%',
      label: 'of email revenue comes from automated flows, which are 5.3% of sends',
      source: 'Klaviyo benchmarks, 2026',
      href: KLAVIYO_BENCH,
    },
    {
      kind: 'p',
      text: 'What a site promises and what a subscriber receives can differ. [A test of 362 ecommerce brands](' +
        JOYJOYA +
        ') that Joy Joya published in July 2026, using new email addresses and phone numbers, found that 158 sent no welcome email and 20 sent an offer that didn’t match the pop up.',
    },

    { kind: 'h2', id: 'what-it-covers', text: 'What ecommerce competitive intelligence covers' },
    {
      kind: 'p',
      text: 'Ecommerce competitive intelligence is the dated record of what competitor stores show, send and charge their customers, and how each of those changes over time.',
    },
    {
      kind: 'p',
      text: 'That information sits in 2 kinds of place. **Public surfaces,** such as product pages, ad libraries, reviews and the technology a site loads, are open to anyone and to software at scale. **Private channels,** such as an inbox, a phone that opted in to texts, a basket and an account, show their contents only to the customer they belong to.',
    },
    {
      kind: 'table',
      caption: 'Where competitor information lives in ecommerce, and who can see it',
      cols: ['Where it lives', 'What it holds', 'Who sees it', 'Can the history be recovered later'],
      rows: [
        ['Product pages', 'Prices, banners, delivery thresholds, policies', 'Anyone', 'Only from a monitor or archive already reading the page'],
        ['Ad libraries', 'Live ads, with dates and reach for some', 'Anyone', 'Partly\nMeta keeps inactive ads only for some regions and topics'],
        ['Tech stack and traffic tools', 'Installed apps, estimated sales and traffic', 'The tool’s users', 'Yes, from the tool’s own history'],
        ['Email and SMS', 'Welcome codes, basket and win back emails, sale teasers, texts', 'Subscribers', 'No\nAn inbox starts on its sign up day'],
        ['Basket and checkout', 'The price after the code, stacking, delivery charges, member prices', 'A shopper with a basket', 'No'],
        ['Delivery and support', 'Dispatch emails, returns steps, support bot answers', 'Customers, and anyone who opens the chat', 'No'],
        ['AI assistants', 'What ChatGPT and others tell shoppers about a brand', 'Anyone who asks', 'Only the answers someone recorded'],
      ],
    },

    { kind: 'h2', id: 'public-surfaces', text: 'What public surfaces show' },
    {
      kind: 'list',
      items: [
        '**Ads.** [Meta’s Ad Library](' +
          META_ADLIB +
          ') holds every active ad shown across Meta’s apps, searchable without an account. It keeps inactive ads only if they concern social issues, elections or politics (for 7 years) or ran in the EU or the UK (for 1 year after their last impression). [Google’s Ads Transparency Center](' +
          GOOGLE_ATC +
          ') lists advertisers’ ads on Search, Display, Gmail and YouTube, filtered by date and location.',
        '**Technology.** [BuiltWith](' +
          BUILTWITH +
          ') says it tracks 127,929 web technologies, and [Store Leads](' +
          STORELEADS +
          ') lists over 40 attributes for each store, including installed apps, app change history and estimated monthly sales, updated weekly.',
        '**Traffic.** [Similarweb](' +
          SIMILARWEB_DATA +
          ') builds its figures from first party analytics, a contributor network, public data and partners, and says it extrapolates from those signals.',
        '**Pages and prices.** Price trackers and page monitors read list prices, stock and page changes across many products, several times a day.',
      ],
    },
    {
      kind: 'p',
      text: 'These sources answer questions of reach and position. Their traffic and sales figures are modelled estimates, best used to compare competitors and spot changes.',
    },

    { kind: 'h2', id: 'customer-only', text: 'What only a customer sees' },
    {
      kind: 'p',
      text: 'What decides a shopper’s choice between 2 stores often sits in private channels. A competitor’s list price can match yours while its first order costs 15% less after the welcome code. Only a customer of the competitor sees:',
    },
    {
      kind: 'list',
      items: [
        '**The welcome code and its terms,** by email or text, and whether the code works on sale prices.',
        '**Basket, browse and win back emails,** their timing and any extra discount.',
        '**Texts,** including any code the pop up promised.',
        '**Subscriber only prices and early access.**',
        '**The checkout price** after the code, stacking and delivery, which the guide to [a competitor’s price after the welcome code](/blog/competitor-price-after-welcome-code) covers.',
        '**Delivery and returns,** from the dispatch email to the steps to send something back.',
        '**Support answers,** what a competitor’s chat or support bot tells a shopper about delivery, returns and codes.',
      ],
    },
    {
      kind: 'p',
      text: 'Software that reads public pages can’t reach any of these, because each appears only after a sign up, a basket or a conversation. AI assistants’ answers about a competitor sit between the two: anyone can ask, and an answer becomes a record only once someone asks and saves it. The guide to [what ChatGPT says about a store](/blog/what-chatgpt-says-about-your-store) sets out a method.',
    },

    { kind: 'h2', id: 'history-and-evidence', text: 'History and evidence' },
    {
      kind: 'p',
      text: 'Private information is worth most when it has been observed over time and kept in a form someone else can check.',
    },
    {
      kind: 'p',
      text: '**History can’t be recovered later.** An inbox holds only mail sent after it subscribed, so a competitor’s September welcome series is out of reach for anyone who signed up in October. A competitor view for Black Friday, on Friday 27 November 2026, has to begin weeks before it.',
    },
    {
      kind: 'p',
      text: '**An original email proves more than a screenshot.** Since 1 February 2024, [Gmail’s sender guidelines](' +
        GMAIL_SENDERS +
        ') have required senders of more than 5,000 messages a day to Gmail to set up SPF, DKIM and DMARC. A DKIM signature lets the signing domain claim responsibility for a message, checked against a public key fetched from that domain ([RFC 6376](' +
        RFC_DKIM +
        ')). An email kept with its full header shows which domain signed it and when it arrived. In Gmail, [Show original](' +
        GMAIL_HEADERS +
        ') opens that header.',
    },
    {
      kind: 'p',
      text: '**One identity throughout.** Keep the same new customer at each competitor from the first sign up, so every later email traces back to a known date and offer.',
    },

    { kind: 'h2', id: 'synthetic-customers', text: 'Synthetic customers and digital twins' },
    {
      kind: 'p',
      text: 'Synthetic customers, synthetic respondents and digital twins of a customer are models that predict how people might think, answer or behave. Their makers sell them for research.',
    },
    {
      kind: 'list',
      items: [
        '**[Bain](' +
          BAIN +
          ')** (May 2026) describes synthetic customers as AI generated representations of real customers, built as one to one digital twins or segment personas, for testing prices, bundles, concepts and messages. In one backtest its twins replicated about 90% of the key outcomes of a large conjoint study. Bain recommends adding them to existing research first.',
        '**[PwC’s Customer Link](' +
          PWC +
          ')** runs simulated interviews, focus groups and surveys on AI models of customer segments, and says it can field 25 questions across 5,000 synthetic respondents in 30 minutes.',
        '**[Qualtrics](' +
          QUALTRICS +
          ')** sells synthetic panels from its own AI model and asks users to say the data comes from generative AI. **[Ipsos PersonaBot](' +
          IPSOS +
          ')** turns a segmentation into personas colleagues can question.',
        '**[Gartner](' +
          GARTNER +
          ')** defines a digital twin of a customer as “a dynamic virtual mirror representation of a customer that simulates and learns to emulate and anticipate behavior.”',
        '**[Synthetic Users](' +
          SYNTH_USERS +
          ')** sells simulated interviews from $12,500 a year, and **[Aaru](' +
          AARU +
          ')** sells simulated populations and publishes its own accuracy benchmark.',
      ],
    },
    {
      kind: 'p',
      text: 'Research on accuracy is mixed. [Argyle and colleagues](' +
        ARGYLE +
        ') conditioned an OpenAI language model on the backgrounds of real survey respondents and found it reproduced the answer patterns of many groups (Political Analysis, 2023). [Bisbee and colleagues](' +
        BISBEE +
        ') found that about 48% of regression coefficients from ChatGPT’s answers differed significantly from a national election survey, that its answers varied less than people’s, and that the same prompt gave different results in April and July 2023 (Political Analysis, 2024).',
    },
    {
      kind: 'p',
      text: 'Synthetic research suits concept, message and price tests before fieldwork. No model received the email a competitor sent its new subscribers on 3 November, so a synthetic customer can’t report what a company did.',
    },

    { kind: 'h2', id: 'mystery-shoppers', text: 'Human and AI mystery shoppers' },
    {
      kind: 'p',
      text: 'Mystery shopping observes a company as a customer, and human programmes are priced per visit.',
    },
    {
      kind: 'stat',
      value: '$50 to $200',
      label: 'per shop for institutional quality mystery shopping, against $15 to $30 a shop from budget providers',
      source: 'T-ROC cost guide, 2026',
      href: TROC,
    },
    {
      kind: 'p',
      text: '[BestMark](' +
        BESTMARK +
        ') works on site, online, by call centre and in app, and [Shepper](' +
        SHEPPER +
        ') says it has over 300,000 shoppers in the UK and Ireland. [T-ROC’s guide](' +
        TROC +
        ') puts basic retail shops at $40 to $65. At $50 a shop, a monthly visit to 10 competitors costs $6,000 a year, and each visit reports 1 moment.',
    },
    {
      kind: 'p',
      text: 'AI mystery shoppers use software agents for the same job. [S-PRO’s suite](' +
        SPRO +
        ') runs shopper agents across the site, email, chat and phone for CX teams in banking, insurance and retail, and publishes no price. Like a human shopper, it reports what a real company did.',
    },

    { kind: 'h2', id: 'ai-assistants', text: 'What AI assistants can do' },
    {
      kind: 'p',
      text: 'ChatGPT and Claude are good at the reasoning side of this work: researching competitors, comparing pages and summarising the emails in an inbox you connect. [ChatGPT](' +
        OPENAI_TASKS +
        ') allows 3 to 15 active scheduled tasks, by plan, and [Claude’s Gmail connector](' +
        CLAUDE_GMAIL +
        ') reads only the account you connect and can’t see images inside emails. An assistant can say what a competitor sent in the last 30 days only if that mail already sits in a connected inbox. The guide [Can ChatGPT or Claude track your competitors’ emails?](/blog/can-chatgpt-track-competitor-emails) compares 5 assistants job by job.',
    },

    { kind: 'h2', id: 'programme', text: 'A durable competitive intelligence programme' },
    {
      kind: 'p',
      text: 'A lasting programme watches the channels behind your offers at a steady rhythm, keeps every item as evidence and reports each change. It can start this week with free tools.',
    },

    { kind: 'h3', id: 'competitors-and-decisions', text: '1. Choose the competitors and the decisions' },
    {
      kind: 'p',
      text: 'List the 3 to 10 competitors your customers compare you with, then the decisions the programme feeds, such as your Black Friday offer, your welcome code and your delivery threshold.',
    },

    { kind: 'h3', id: 'new-customer', text: '2. Give each competitor a new customer' },
    {
      kind: 'p',
      text: 'For each competitor, set up a new Gmail address, a phone number that can receive texts and a private browser window. Sign up through the public pop up, record the offer on screen with the time, and confirm the first email the same day. Read each site’s terms and never place an order you won’t take delivery of. None of this is legal advice.',
    },

    { kind: 'h3', id: 'what-and-how-often', text: '3. Set what to watch and how often' },
    {
      kind: 'list',
      items: [
        '**Daily in sale weeks, weekly otherwise:** list prices, sitewide banners, delivery thresholds and the pop up offer.',
        '**As it arrives:** every email and text, logged within a day with its time, subject, offer, code and Gmail tab.',
        '**Weekly:** new ads in the Meta and Google libraries, each opened to its page.',
        '**Monthly, and before each sale:** a basket and checkout at each competitor for the price after the code and delivery, then the basket email, plus 3 questions about prices, delivery and returns, put to its support bot and to 2 AI assistants.',
        '**Quarterly:** tech stack and traffic estimates.',
      ],
    },

    { kind: 'h3', id: 'keep-evidence', text: '4. Keep every item as evidence' },
    {
      kind: 'p',
      text: 'Keep the original of every email with its full header, and a timed screenshot of every page and checkout. Log each item in a sheet with the competitor, channel, time, what you saw, the offer and a link to the original, so anyone can check a row against its source.',
    },

    { kind: 'h3', id: 'report', text: '5. Report each change with its evidence' },
    {
      kind: 'p',
      text: 'Send 1 page a week: what changed at each competitor, when, the evidence link and the decision it affects. In sale weeks, send changes the same morning. The [Black Friday competitor report template](/blog/black-friday-competitor-email-report-template) gives a layout for clients.',
    },

    { kind: 'h3', id: 'cost', text: '6. Work out the cost by hand' },
    {
      kind: 'p',
      text: 'Use your own numbers: competitors × channels × minutes a week on each ÷ 60 = hours a week. Multiply by your team’s cost an hour and by 52.',
    },
    {
      kind: 'art',
      caption: 'The sum worked once with example figures. Replace each line with your own.',
      art: {
        kind: 'price',
        title: 'A by hand programme, example figures',
        rows: [
          { label: 'Competitors watched', value: '5' },
          { label: 'Channels for each competitor', value: '4', note: 'Email, texts, prices, ads' },
          { label: 'Minutes a week on each channel', value: '15' },
          { label: 'Hours a week', value: '5', note: '5 × 4 × 15 ÷ 60' },
          { label: 'Your team’s cost an hour', value: '$40' },
        ],
        total: { label: 'Cost a year', value: '$10,400', note: '5 hours × $40 × 52 weeks' },
      },
    },
    {
      kind: 'p',
      text: 'For comparison, a store owner [on r/smallbusiness](' +
        R_PRICES +
        ') wrote in January 2026 of spending 1 to 2 hours every day on competitor prices alone.',
    },
    {
      kind: 'p',
      text: 'By hand, the programme holds for 1 to 3 competitors. Past that, it needs an inbox and phone number per competitor for months, with every original kept. Obsession runs that programme today. Its AI customers sign up to any company you name and keep every email, text, price, page, checkout and AI answer they get, so you can find your revenue leaks, watch your competitors and prospect with proof. For competitors, [competitor tracking](/recipes/competitor-tracking) signs an AI customer up to each one you name and logs every email, text, offer, price change and public ad on 1 timeline. [Price watch](/recipes/price-watch) checks competitors’ prices, offers and delivery each morning, plus the codes they only send subscribers.',
    },
    {
      kind: 'cta',
      text: 'Competitor tracking runs now on the competitors you name, with every message dated from a known sign up, on credit-based plans like Claude’s.',
      to: '/',
      label: 'Meet your first AI customers',
    },

    { kind: 'h2', id: 'tools', text: 'Competitive intelligence tools compared', compare: true },
    {
      kind: 'p',
      text: 'The tools group by where their data comes from, which sets what each can see. We make Obsession, which does some of this, so every line about another tool is taken from that tool’s own pages, checked on 23 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ecommerce competitive intelligence tools, by where their data comes from. Prices from each company’s own pages, 23 October 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Doing nothing',
          'Costs no time',
          'Free',
          'Competitor moves show up first in your own sales',
          'Markets where offers rarely change',
        ],
        [
          'By hand: an inbox, phone and sheet per competitor',
          'Sees what a new customer sees, at any competitor',
          'Free, plus your team’s hours',
          'History starts at sign up, and hours grow with each competitor',
          '1 to 3 competitors',
        ],
        [
          'Traffic and SEO: [Similarweb](' + SIMILARWEB_PRICING + '), [Semrush](' + SEMRUSH + ')',
          'Traffic, keywords and share, with up to 37 months of history at Similarweb',
          'Similarweb: through sales\nSemrush: SEO plan £113 a month',
          'Modelled estimates, with no emails, codes or checkout',
          'Market sizing and search',
        ],
        [
          'Tech stack: [BuiltWith](' + BUILTWITH + '), [Store Leads](' + STORELEADS + ')',
          'Platform and apps per store, plus estimated sales at Store Leads',
          'BuiltWith: from $295 a month\nStore Leads: from $75 a month',
          'What a store installed, not what it sends',
          'Prospect lists and stack changes',
        ],
        [
          'Ad libraries: [Meta Ad Library](' + META_ADLIB + '), [Google Ads Transparency Center](' + GOOGLE_ATC + '), [Foreplay](' + FOREPLAY + ')',
          'Live ads by brand, and Foreplay saves ads and tracks brands',
          'Meta, Google: free\nForeplay: from $59 a month, $175 with brand tracking',
          'The ad and its page, and Meta drops most inactive ads',
          'Creative research',
        ],
        [
          'Email and SMS libraries: [Milled](' + MILLED + '), [MailCharts](' + MAILCHARTS + '), [Panoramata](' + PANORAMATA + ')',
          'History from day 1 for the brands covered, with SMS and flows at Panoramata',
          'Milled: prices behind a sign in\nMailCharts: on request\nPanoramata: $99 to $399 a month',
          'Only the brands and journeys the vendor collected',
          'History across many brands',
        ],
        [
          'Price trackers: [Prisync](' + PRISYNC + '), [Price2Spy](' + PRICE2SPY + ')',
          'List prices and stock across many products, several times a day',
          'Prisync: from $99 a month for 100 products\nPrice2Spy: Premium on request',
          'No subscriber codes or checkout totals on their pricing pages',
          'Large catalogues',
        ],
        [
          'B2B CI platforms: [Crayon](' + CRAYON + '), [Klue](' + KLUE + ')',
          'Battlecards, win loss analysis and competitor news for sales teams',
          '[On request](' + CRAYON_PRICING + ') at both',
          'Built around B2B deals',
          'Software and other B2B sellers',
        ],
        [
          'Human mystery shopping: [BestMark](' + BESTMARK + '), [Shepper](' + SHEPPER + ')',
          'A trained person shops as a customer and reports',
          'BestMark, Shepper: on request\nT-ROC’s guide: $50 to $200 a shop',
          'Priced per visit, 1 moment each',
          'Stores, calls and service quality',
        ],
        [
          'Synthetic customers: [PwC](' + PWC + '), [Qualtrics](' + QUALTRICS + '), [Ipsos](' + IPSOS + '), [Synthetic Users](' + SYNTH_USERS + '), [Aaru](' + AARU + ')',
          'Fast answers on how people might respond',
          'Synthetic Users: from $12,500 a year\nThe others: by credits or on request',
          'Predicts responses, and can’t observe what a company did',
          'Concept, message and price tests',
        ],
        [
          'AI assistants: [ChatGPT](' + OPENAI_TASKS + '), [Claude](' + CLAUDE_GMAIL + ')',
          'Research, and summaries of a connected inbox',
          'Free and paid plans',
          'One inbox, capped schedules, no older mail',
          '1 to 3 competitors',
        ],
        [
          'Obsession (ours): [Competitor tracking](/recipes/competitor-tracking), [Price watch](/recipes/price-watch), [Email and SMS tracking](/recipes/email-sms-tracking), [Ad tracking](/recipes/ad-tracking), [Trial teardown](/recipes/trial-teardown)',
          'Logs every email, text, offer, price change and public ad from each competitor on 1 timeline, each kept as it arrived',
          'Running now: first store check free\nCredit-based plans, like Claude’s',
          'History starts at an AI customer’s first sign up there\nNot needed for traffic, search or stack questions',
          'What a real customer gets from each competitor, on every channel, for months',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Crayon and Klue are built for B2B sales teams, with battlecards and answers for deals in flight. None of the page, ad, stack or traffic tools signs up as a customer, so welcome codes, basket emails, texts and checkout totals fall outside them. If your team needs what a customer gets from each competitor, use Obsession, whose AI customers stay real customers of every competitor you name. Similarweb, Semrush, BuiltWith and Store Leads answer traffic, search and tech stack questions directly.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'list',
      items: [
        '**1 identity sees 1 customer’s view.** A new subscriber sees what competitors send new subscribers. Offers for loyal customers, other markets and other devices need identities of their own, so record the market and device with every item.',
        '**Third party figures are estimates.** Use traffic and sales figures from these tools for direction and relative size.',
      ],
    },
    {
      kind: 'p',
      text: 'Start the sign ups this week. Competitors’ Black Friday teasers begin in late October, and an inbox that signs up by Friday 30 October holds 4 weeks of a competitor’s mail by Black Friday on 27 November. Before code freezes, about 20 November, run the same new customer tests on your own store.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s AI customers shop your own store as new customers every week and after every change. Your first store check is free.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'questions', text: 'Frequently asked questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is ecommerce competitive intelligence?',
          a: 'It is the dated record of what competitor stores show, send and charge their customers, from list prices and ads to welcome codes, basket emails and checkout totals.',
        },
        {
          q: 'What are the best ecommerce competitor analysis tools?',
          a: 'It depends on the question: Similarweb and Semrush for traffic, BuiltWith and Store Leads for tech stack, the ad libraries and Foreplay for ads, Panoramata, MailCharts and Milled for email history, and Prisync or Price2Spy for prices. A competitor’s checkout total, and its emails where no library covers it, need a customer identity at that competitor. Obsession’s AI customers are that identity at every competitor you name.',
        },
        {
          q: 'How do I do a competitor analysis on Shopify?',
          a: 'Read apps in Store Leads or BuiltWith, live ads in the ad libraries and list prices in a price tracker, then sign up to each competitor from a new address and phone, leave a basket, and record the price after the code and every email that follows.',
        },
        {
          q: 'What are synthetic customers?',
          a: 'They are AI models of customers, built from survey and behavioural data, that predict how people might answer or react to an offer, and they are used to test concepts, messages and prices before research with people.',
        },
        {
          q: 'What is the difference between synthetic respondents and a digital twin of a customer?',
          a: 'Synthetic respondents answer surveys in place of people, usually as members of a segment. A digital twin of a customer models one customer or segment and keeps learning from new data.',
        },
        {
          q: 'What is an AI mystery shopper?',
          a: 'An AI mystery shopper is a software agent that goes through a company’s site, emails, chat or phone line as a customer and records what happened.',
        },
        {
          q: 'Can synthetic customers tell me what my competitors are doing?',
          a: 'No, because what a competitor sent, showed or charged is known only to someone who was its customer at the time.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Milled’s pages blocked automated reads on 23 October 2026, so its price is not shown. The pages of Meta, PwC and Gartner and the Bisbee study opened only through a text reader, and the Argyle study was taken from its arXiv copy. Semrush showed prices in pounds, Price2Spy showed no figure for Starter or Basic, and Klue’s pricing link now opens its home page, which shows no price. The Reddit thread was opened on 3 October 2026 and could not be reopened. Bain’s, PwC’s and Aaru’s figures are their own, and we tested none of the tools. The store in the illustration and the cost example are invented.',
    },
  ],

  sources: [
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: KLAVIYO_BENCH, date: '2026' },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'About the Meta Ad Library', publisher: 'Meta Business Help Centre', url: META_ADLIB },
    { title: 'Ads transparency', publisher: 'Google Advertising Policies Help', url: GOOGLE_ATC },
    { title: 'Plans', publisher: 'BuiltWith', url: BUILTWITH },
    { title: 'Ecommerce store data and pricing', publisher: 'Store Leads', url: STORELEADS },
    { title: 'Our data', publisher: 'Similarweb', url: SIMILARWEB_DATA },
    { title: 'Email sender guidelines', publisher: 'Google Workspace Admin Help', url: GMAIL_SENDERS },
    { title: 'RFC 6376: DomainKeys Identified Mail (DKIM) Signatures', publisher: 'IETF', url: RFC_DKIM, date: '2011-09' },
    { title: 'Trace an email with its full headers', publisher: 'Gmail Help', url: GMAIL_HEADERS },
    { title: 'Synthetic customers earn their stripes', publisher: 'Bain & Company', url: BAIN, date: '2026-05-04' },
    { title: 'Customer Link', publisher: 'PwC', url: PWC },
    { title: 'Synthetic panels', publisher: 'Qualtrics Support', url: QUALTRICS },
    { title: 'Ipsos PersonaBot', publisher: 'Ipsos', url: IPSOS, date: '2025-07-08' },
    {
      title: 'Gartner survey shows just 27% of chief supply chain officers plan to implement a digital twin of the customer',
      publisher: 'Gartner',
      url: GARTNER,
      date: '2023-07-20',
    },
    { title: 'Pricing', publisher: 'Synthetic Users', url: SYNTH_USERS },
    { title: 'Simulated populations', publisher: 'Aaru', url: AARU },
    {
      title: 'Out of one, many: using language models to simulate human samples',
      publisher: 'Argyle et al., arXiv (published in Political Analysis, 2023)',
      url: ARGYLE,
      date: '2022-09-14',
    },
    {
      title: 'Synthetic replacements for human survey data? The perils of large language models',
      publisher: 'Bisbee et al., Political Analysis',
      url: BISBEE,
      date: '2024',
    },
    { title: 'Mystery shopping cost', publisher: 'T-ROC', url: TROC, date: '2026' },
    { title: 'Mystery shopping and customer experience research', publisher: 'BestMark', url: BESTMARK },
    { title: 'Mystery shopping and retail audits', publisher: 'Shepper', url: SHEPPER },
    { title: 'Mystery Shopper AI Suite', publisher: 'S-PRO', url: SPRO },
    { title: 'Scheduled tasks in ChatGPT', publisher: 'OpenAI Help Center', url: OPENAI_TASKS },
    { title: 'Gmail connector', publisher: 'Claude docs', url: CLAUDE_GMAIL },
    { title: 'How do you track competitor prices efficiently?', publisher: 'r/smallbusiness', url: R_PRICES, date: '2026-01-07' },
    { title: 'Pricing', publisher: 'Similarweb', url: SIMILARWEB_PRICING },
    { title: 'Plans and pricing', publisher: 'Semrush', url: SEMRUSH },
    { title: 'Pricing', publisher: 'Foreplay', url: FOREPLAY },
    { title: 'Milled', publisher: 'Milled', url: MILLED },
    { title: 'MailCharts', publisher: 'MailCharts (Validity)', url: MAILCHARTS },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Pricing', publisher: 'Prisync', url: PRISYNC },
    { title: 'Pricing', publisher: 'Price2Spy', url: PRICE2SPY },
    { title: 'Competitive intelligence software', publisher: 'Crayon', url: CRAYON },
    { title: 'Competitive intel and win loss from one platform', publisher: 'Klue', url: KLUE },
    { title: 'Pricing', publisher: 'Crayon', url: CRAYON_PRICING },
  ],

  related: [
    'recipe:competitor-tracking',
    'recipe:price-watch',
    'recipe:email-sms-tracking',
    'recipe:ad-tracking',
    'can-chatgpt-track-competitor-emails',
    'competitor-price-after-welcome-code',
    'black-friday-competitor-email-report-template',
  ],
}
