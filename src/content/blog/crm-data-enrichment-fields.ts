import type { BlogPost } from './types'

/* Revenue team guides, spec 12 (_research/seo/revenue-teams-11nov/WRITER_BRIEF.md and PLAN.md, 11 Nov 2026): CRM data
   enrichment for RevOps. Primary "crm data enrichment"; also "crm enrichment fields", "crm data enrichment tools",
   "account scoring model", "lead scoring signals" (Google autocomplete, US and UK, 11 Nov 2026, demand.json: the head
   term returns tools, services, best tools and HubSpot; the field and scoring phrases return little, so the guide owns
   the field spec long tail). Page 1 on 11 Nov: Reddit, ZoomInfo, Clay, Affinity, monday and Zapier, all firmographics,
   contacts and intent; Exa's GTM use case page ("Company Data API and CRM Enrichment for GTM Teams") is the closest
   neighbour for the same intent.
   Reader: RevOps at B2B software vendors whose product touches their accounts' customers (persona key revops). The
   guide never assumes which tools the reader pays for.
   Every other company is described only from its own pages, read 11 Nov 2026: ZoomInfo's guide (updated 07/02/2026,
   US date) and pricing page; Apollo's enrichment page (its pricing page showed no figures, so no Apollo price is given);
   HubSpot's enrichment, property type and lead scoring help pages; Salesforce's custom field types page; Clay's pricing
   page (cards show annual billing, $167 and $446; monthly $185 and $495 per its own FAQ and plan cards); BuiltWith's
   plans; Bombora's intent page (no update frequency stated, so none given); Exa's home, pricing and GTM pages. Header
   rules from RFC 6376 (DKIM d=) and RFC 5321 (return-path). The sending platform line stays inside what the live site
   says: Obsession shows the platform behind each email, with its sender checked, and the week that changes.
   Points, windows and hours are labelled example inputs. larkfield.example, fennick.example and tidewell.example are
   invented. No dashes. */

const ZI_GUIDE = 'https://pipeline.zoominfo.com/operations/crm-data-enrichment'
const BUILTWITH = 'https://builtwith.com/plans'
const BOMBORA = 'https://bombora.com/intent/'
const ZI_PRICING = 'https://www.zoominfo.com/pricing'
const APOLLO = 'https://www.apollo.io/data-enrichment'
const HUBSPOT_ENRICH = 'https://knowledge.hubspot.com/records/get-started-with-data-enrichment'
const CLAY_PRICING = 'https://www.clay.com/pricing'
const EXA = 'https://exa.ai/'
const EXA_GTM = 'https://exa.ai/use-cases/gtm'
const EXA_PRICING = 'https://exa.ai/pricing'
const HUBSPOT_TYPES = 'https://knowledge.hubspot.com/properties/property-field-types-in-hubspot'
const SF_TYPES = 'https://help.salesforce.com/s/articleView?id=platform.custom_field_types.htm&type=5'
const RFC_DKIM = 'https://www.rfc-editor.org/rfc/rfc6376'
const RFC_SMTP = 'https://www.rfc-editor.org/rfc/rfc5321'
const HUBSPOT_SCORING = 'https://knowledge.hubspot.com/scoring/understand-the-lead-scoring-tool'

export const post: BlogPost = {
  slug: 'crm-data-enrichment-fields',
  title: 'CRM data enrichment for RevOps: fields for what each account actually sends its customers',
  dek: 'A field spec RevOps teams can copy: 6 fields for what each account sends its own customers, each with its type, values and update rule. Then the scores and routing that use them, and the data quality rules that keep them true.',
  metaTitle: 'CRM data enrichment for RevOps: what accounts send customers',
  description:
    'CRM data enrichment for RevOps: a copyable field spec for what each account sends its own customers, with update rules for routing and account scoring.',
  answer:
    'CRM data enrichment adds outside data to the accounts and contacts in a CRM, usually firmographics, contacts, technographics and intent, so routing and scoring run on facts nobody typed in. For B2B software vendors whose product touches their accounts’ customers, the next fields record what each account sends them: its welcome email, its texts and the platform that sends its email. Obsession keeps what any company shows only to its customers, dated with the email or screenshot, and lands each fact as a CRM field by API, MCP (the standard way AI agents call tools) or a table.',
  primaryKeyword: 'crm data enrichment',
  keywords: [
    'crm data enrichment',
    'crm enrichment fields',
    'crm data enrichment tools',
    'best crm data enrichment tools',
    'account scoring model',
    'lead scoring signals',
    'hubspot crm data enrichment',
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
      kind: 'report',
      title: 'larkfield.example · account fields',
      period: 'Example: one account record in an SMS platform’s CRM after the week’s checks, 9 November 2026',
      cols: ['Field', 'Value', 'Last seen'],
      rows: [
        { name: 'Welcome sent', cells: ['Yes, in 4 minutes', '2 Nov, 09:04'], tone: 'ok' },
        { name: 'Texts live', cells: ['No, opted in 2 Nov', '9 Nov'], tone: 'fail' },
        { name: 'Cart reminder live', cells: ['None in 48 hours', '5 Nov'], tone: 'fail' },
        { name: 'Sending platform', cells: ['Changed on 6 Nov', '6 Nov'], tone: 'late' },
        { name: 'Last offer date', cells: ['4 Nov, 15% code', '4 Nov'], tone: 'info' },
        { name: 'Last checked', cells: ['9 Nov, 07:00', '9 Nov'], tone: 'info' },
      ],
      notes: [
        'Email works and texts are off, so the router sends Larkfield to the rep who sells texts, with the opt-in screenshot attached.',
        'Larkfield is an invented company. Each value links to the email or screenshot behind it.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'CRM data enrichment is adding outside data to the accounts and contacts in a CRM, so routing, scoring and reps work from facts nobody typed in. Most of it adds 4 kinds of field: firmographics, contacts, technographics and intent.',
    },
    {
      kind: 'p',
      text: 'Some B2B software vendors sell a product that touches what their accounts’ customers see. That covers email and SMS, loyalty and reviews, checkout and payments, help desk and AI support, messaging, identity and onboarding. For their RevOps teams, a fifth set of fields belongs on every account: what the account sends its own customers. The welcome email a new customer gets, the texts after an opt-in and the email platform behind the account’s mail each describe the need the product meets, at that account, this week.',
    },

    { kind: 'h2', id: 'today', text: 'What CRM data enrichment adds today' },
    {
      kind: 'p',
      text: '[ZoomInfo’s guide](' +
        ZI_GUIDE +
        ') defines CRM data enrichment as “the automated process of merging external data with internal CRM records”, and names the 4 kinds of data it appends:',
    },
    {
      kind: 'list',
      items: [
        '**Firmographics:** industry, headcount, revenue and headquarters, the facts fit scores and territory rules run on.',
        '**Contacts:** job title, seniority, direct phone and verified email for the people at each account.',
        '**Technographics:** the software a company uses. [BuiltWith’s plans page](' +
          BUILTWITH +
          ') says it tracks more than 128,000 technologies.',
        '**Intent:** signs that an account is researching a category. [Bombora](' +
          BOMBORA +
          ') says it monitors company research activity against 25,300+ topics and scores an account’s last 3 weeks against a 12-week baseline.',
      ],
    },
    {
      kind: 'p',
      text: 'The providers describe their own strengths, as of 11 November 2026:',
    },
    {
      kind: 'list',
      items: [
        '**ZoomInfo** describes its data enrichment as “One always-fresh source of truth feeding every system you run on”, sold in [custom packages](' +
          ZI_PRICING +
          ').',
        '**Apollo** says it can push [“30+ fresh data points”](' +
          APOLLO +
          ') to a CRM automatically, on a schedule or by hand, from data it puts at 240M contacts and 30M companies.',
        '**HubSpot’s own enrichment** looks companies up by their domain. Its [continuous setting](' +
          HUBSPOT_ENRICH +
          ') updates enriched records monthly when new data becomes available, and enrichment uses no HubSpot credits.',
        '**Clay** includes multi-provider waterfalls on every plan, asking several providers in turn for the same field, and its [pricing page](' +
          CLAY_PRICING +
          ') says it can find and enrich data from 150+ providers.',
        '**Exa** calls itself [“The world’s data for AI agents”](' +
          EXA +
          '). Its [GTM page](' +
          EXA_GTM +
          ') offers to “Enrich CRM records with cited sources” from 70M companies and 1B+ people profiles, writing each update to the CRM with a source address. Its Monitors run searches on a schedule, as often as hourly.',
      ],
    },
    {
      kind: 'p',
      text: 'Most sales teams use similar data, from contact databases and intent tools to Exa’s search of the public web. So every competitor’s router sees the same headcount, the same installed tools and the same intent spike at the same accounts.',
    },

    { kind: 'h2', id: 'gap', text: 'What the usual fields leave out' },
    {
      kind: 'p',
      text: 'A technographic field says a tool is installed. It doesn’t say the tool works. An SMS platform’s target can show a text opt-in on its site and never send a text. An email platform’s target can load an email tool on every page while its welcome email has stopped.',
    },
    {
      kind: 'p',
      text: 'Those facts reach a customer of the account: someone who signed up, opted in or left a basket. They sit behind a [login wall](/glossary/login-wall), any step a site puts between a visitor and what it shows customers. They arrive in an inbox or on a phone, which a crawler has no address for. Exa’s pages don’t describe signing up to the companies it covers or keeping what they send their customers. [Obsession vs Exa](/compare/obsession-vs-exa) sets out how the two work side by side.',
    },
    {
      kind: 'p',
      text: 'For a vendor whose product touches its accounts’ customers, those facts are the need itself. A [welcome series](/glossary/welcome-series) stopped, a [triggered flow](/glossary/triggered-flow) never fires after a basket, or texts promised at sign-up never come.',
    },

    { kind: 'h2', id: 'field-spec', text: 'CRM enrichment fields for account behaviour' },
    {
      kind: 'p',
      text: 'Six fields cover what an account sends its customers. Create them on the company or account object, never on the contact, because they describe the business. One integration user writes them; routing and scoring read them.',
    },
    {
      kind: 'table',
      caption: 'A field spec for account behaviour. Types in each platform’s own terms, from HubSpot’s and Salesforce’s help pages, 11 November 2026',
      cols: ['Field', 'Type', 'Values', 'Update rule', 'Used by'],
      rows: [
        ['welcome_sent', 'HubSpot: dropdown select\nSalesforce: picklist', 'Yes\nNo\nNot checked', 'No only once the window closes', 'Fit score\nEmail platform routing'],
        ['texts_live', 'HubSpot: dropdown select\nSalesforce: picklist', 'Yes\nNo\nNo opt-in offered\nNot checked', 'Yes on the first text after opt-in', 'SMS routing\nFit score'],
        ['sending_platform', 'HubSpot: single-line text\nSalesforce: text', 'Platform named in the email’s headers', 'Changed only by a newer email', 'Displacement routing\nRenewal alerts'],
        ['cart_reminder_live', 'HubSpot: dropdown select\nSalesforce: picklist', 'Yes\nNo\nNo basket possible\nNot checked', 'No only once the window closes', 'Recovery score\nCheckout and SMS routing'],
        ['last_offer_date', 'HubSpot: date picker\nSalesforce: date', 'Date of the latest code or discount', 'Moves forward only', 'Timing score\nLoyalty and offer plays'],
        ['last_checked', 'HubSpot: date and time picker\nSalesforce: date/time', 'Time of the latest check', 'Set on every check', 'Data quality\nScore decay'],
      ],
    },
    {
      kind: 'p',
      text: 'Give each behaviour field 2 companions. One is a date field for when the value was last confirmed (welcome_sent_seen_on). The other is a URL field linking the email or screenshot behind it (welcome_sent_evidence). The sending_platform field also gets platform_changed_on, the date a newer email first came from a different platform. That date is the one a displacement play or a renewal alert triggers on.',
    },
    {
      kind: 'p',
      text: 'Use a picklist for the yes or no fields, never a checkbox. [HubSpot’s single checkbox](' +
        HUBSPOT_TYPES +
        ') holds a yes or no value, and [Salesforce’s checkbox](' +
        SF_TYPES +
        ') records a true or false attribute, with reports filtering unchecked boxes as False. An account nobody has checked then reads as No, and the router sends a rep to a gap that may not exist. Not checked is a value of its own.',
    },
    { kind: 'h3', id: 'values', text: 'What each value means' },
    {
      kind: 'list',
      items: [
        '**welcome_sent:** Yes when the first email after a sign-up arrives inside the window your team sets, often an hour. No when the window closes with nothing in the inbox or the spam folder. A sign-up form that fails is a finding too, kept with its screenshot.',
        '**texts_live:** Yes when a text arrives after the opt-in. No opt-in offered when the site asks for no phone number, which is a different sale from an opt-in that never sends.',
        '**sending_platform:** the email platform named in the email’s own headers. [DKIM](/glossary/dkim) is a signature checked on arrival to prove which company sent an email. Its d= tag names the signing domain, which [RFC 6376](' +
          RFC_DKIM +
          ') defines as the one “claiming responsibility for an introduction of a message into the mail stream”. Under [RFC 5321](' +
          RFC_SMTP +
          '), the receiving server adds a return-path line holding the address from the sender’s MAIL command, where bounces go. When a company sends through an email platform, one of the 2 domains often belongs to the platform.',
        '**cart_reminder_live:** Yes when a reminder arrives after a basket is left and checkout stops before payment. No basket possible for accounts that sell by quote or through a sales call.',
        '**last_offer_date:** the date of the latest email or text carrying a code, a discount or a free delivery offer. It moves forward only, so an older email that arrives late never rolls it back.',
        '**last_checked:** when the account was last read, whatever the result. It tells a score whether the other 5 values are current.',
      ],
    },

    { kind: 'h2', id: 'scoring', text: 'An account scoring model with behaviour fields' },
    {
      kind: 'p',
      text: '[HubSpot’s lead scoring tool](' +
        HUBSPOT_SCORING +
        ') separates 2 scores. A fit score qualifies records “based on their demographic information through property values”, and an engagement score is built from actions such as form submissions and email opens. Companies can carry either or both. Behaviour fields are property values on the company, so they sit on the fit side. They add what fit criteria rarely hold: the gap the product fills at that account, seen this week.',
    },
    {
      kind: 'p',
      text: 'A workable account scoring model keeps 3 parts apart, so a rep can see why an account scored:',
    },
    {
      kind: 'list',
      items: [
        '**Fit:** firmographics and technographics, from enrichment.',
        '**Need:** behaviour fields, from what the account sends its customers.',
        '**Timing:** intent, hiring and news, plus platform_changed_on and last_offer_date.',
      ],
    },
    {
      kind: 'table',
      caption: 'An example need score for an SMS platform. The points are example inputs; set your own from closed-won accounts',
      cols: ['Rule', 'Points', 'What it means'],
      rows: [
        ['texts_live is No and welcome_sent is Yes', '+30', 'Email works, texts are off'],
        ['platform_changed_on in the last 30 days', '+20', 'A new email platform, so the stack is open'],
        ['texts_live is No opt-in offered', '+15', 'No phone capture yet, a longer sale'],
        ['last_offer_date in the last 14 days', '+10', 'Running promotions now'],
        ['last_checked older than 14 days', 'Need points count 0', 'Stale values never route'],
      ],
    },

    { kind: 'h2', id: 'by-vendor', text: 'Lead scoring signals by kind of vendor' },
    {
      kind: 'p',
      text: 'The same 6 fields score differently for an email platform, a loyalty vendor or a help desk, and each can add a field for its own product. [Buying signals examples for SDR managers](/blog/buying-signals-examples) lists the wider set of signals these fields sit beside.',
    },
    {
      kind: 'table',
      caption: 'Which behaviour fields score for each kind of vendor, with an example routing rule. Added fields are examples',
      cols: ['Kind of vendor', 'Fields that score', 'Example routing rule'],
      rows: [
        ['Email platform', 'welcome_sent: No\ncart_reminder_live: No', 'Both No: to an account executive that day'],
        ['SMS and messaging', 'texts_live: No\nwelcome_sent: Yes', 'Email on, texts off: SMS specialist'],
        ['Loyalty and reviews', 'last_offer_date\nsending_platform', 'Offers every week: loyalty pitch'],
        ['Checkout and payments', 'cart_reminder_live\nAdded: checkout_loads', 'Checkout fails twice: owner alert'],
        ['Help desk and AI support', 'Added: support_reply_hours\nlast_checked', 'Slower than promised: support pitch'],
        ['Identity and onboarding', 'welcome_sent\nAdded: signup_form_works', 'Form fails on a phone: onboarding pitch'],
      ],
    },
    {
      kind: 'list',
      items: [
        '**An SMS platform and larkfield.example:** the welcome email arrived 4 minutes after sign-up on 2 November. Texts were opted in the same day and none had come by 9 November. The texts_live field turns No, the need score rises 30 points, and the account routes to the SMS specialist with the opt-in screenshot.',
        '**An email platform and fennick.example:** on 6 November its emails start coming from a different platform, with the sender checked, and platform_changed_on is set. For a prospect that is a window while the new setup beds in. For a current customer it is the week its emails start coming from a new platform, which belongs with the renewal owner that day.',
        '**A help desk vendor and tidewell.example:** the vendor adds support_reply_hours. A delivery question took 31 hours to answer against the 24 its help page promises, so the account reaches its account executive with the thread attached.',
      ],
    },

    { kind: 'h2', id: 'routing', text: 'Routing when a field changes' },
    {
      kind: 'p',
      text: 'A behaviour field earns its place when its change moves an account. HubSpot workflows can enrol a record when a property value changes, and Salesforce’s record-triggered flows run when a record is updated, so set the triggers on the companion dates and the values together:',
    },
    {
      kind: 'list',
      items: [
        '**welcome_sent turns No at an open opportunity:** attach the screenshot to the opportunity, so the account executive opens the next call on it.',
        '**platform_changed_on is set:** for a prospect, a sequence about the move; for a customer, a call before the renewal. [Churn risk indicators for customer success](/blog/churn-risk-indicators) covers the customer side.',
        '**texts_live moves from Yes to No at a customer:** a task for the account manager, with the evidence link.',
        '**last_checked goes stale:** take the account out of behaviour-based routing until it is read again.',
      ],
    },
    {
      kind: 'p',
      text: '[Sales trigger events examples](/blog/sales-trigger-events) sets out the plays for each change, and [Clay signals for GTM engineers](/blog/clay-custom-signals) shows the same facts as a column in Clay, with routing on change.',
    },

    { kind: 'h2', id: 'data-quality', text: 'Data quality rules for enrichment fields' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**One writer.** The integration user writes behaviour fields. Reps read them, and a rep’s view goes in a note, never in the value.',
        '**Not checked is never No.** An empty value means nobody looked, and routing ignores it.',
        '**No waits for the window.** A welcome email that hasn’t arrived 10 minutes after sign-up counts as late until the window your team set closes.',
        '**Every value carries its date and its evidence.** The seen-on date and the evidence link travel with the value, so a rep opens the email before quoting it to a buyer.',
        '**Newer evidence wins.** The last_offer_date field moves forward only, and sending_platform changes only on a newer email.',
        '**Keep the history.** Write each change as a dated entry on the account’s timeline or in a history table, so a score can be rebuilt as it stood on any date. That is [point-in-time data](/glossary/point-in-time-data), and it can’t be collected later, because last month’s email sits only in the inbox that received it.',
        '**Stale values decay.** After 14 days without a check, need points fall to 0.',
        '**Match on the domain.** Key every account on its root domain, the input HubSpot’s own enrichment uses for companies, so behaviour fields land on the same record as firmographics.',
      ],
    },

    { kind: 'h2', id: 'by-hand', text: 'How to fill the fields by hand' },
    {
      kind: 'p',
      text: 'A RevOps analyst can set up 10 top accounts in an afternoon, then read the results 2 days later. Each step ends on what a pass looks like.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Pick the accounts.** Start with open opportunities and renewals in the next 90 days. Pass: a list of domains, each with an owner.',
        '**Give each account its own inbox and phone number.** Never a rep’s own address, so nothing from one account mixes with another. Pass: one inbox and one number per account.',
        '**Sign up as any customer can.** Join the email list, opt in to texts where offered, and leave a basket where the account sells online, stopping before payment. Pass: a timed screenshot of each step.',
        '**Wait out each window.** For example 1 hour for the welcome email and 48 hours for texts and the basket reminder. Pass: every inbox, spam folder and phone read at the deadline.',
        '**Read the first email’s headers.** Open the original message and note the DKIM d= domain and the return-path domain. Pass: the platform named, with the date.',
        '**Write the values.** The 6 fields, each with its date and a link to the screenshot or saved email. Pass: no checked field left empty.',
        '**Repeat every week.** Read the inboxes again, record new offers and any change of platform. Pass: last_checked never older than 7 days.',
      ],
    },
    {
      kind: 'table',
      caption: 'Example inputs: 20 minutes to set up each account and 5 minutes a week to keep it current. Our sums',
      cols: ['Accounts', 'To set up', 'Each week after'],
      rows: [
        ['5,000', 'About 1,670 hours', 'About 420 hours, 10 people full time'],
        ['1,000', 'About 330 hours', 'About 83 hours, 2 people full time'],
        ['300', 'About 100 hours', 'About 25 hours'],
      ],
    },
    {
      kind: 'p',
      text: 'By hand also breaks in ways a sheet never shows. Inboxes stop receiving, numbers lapse and sign-up forms change, and a screenshot is the sole record of when an email arrived. It suits a short list of top accounts. A router that scores every account needs the fields kept current every day.',
    },

    { kind: 'h2', id: 'obsession', text: 'Filling the fields for every account' },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request.',
    },
    {
      kind: 'p',
      text: 'For RevOps, a domain goes in and the behaviour fields come back on the same account record, each value dated with its email or screenshot. They arrive through the [API](/developers), MCP, a webhook (an address in your app that receives each fact as it lands) or a table such as Clay. Obsession shows the platform behind each email, with its sender checked, and the week that changes. A router can then act the week an account’s emails start coming from a new platform. [Account watch](/recipes/account-watch) puts each change on the account’s record in the CRM every morning. [Prospect intelligence](/recipes/prospect-intelligence) does the same for a list of target accounts, and [prospect intelligence with Clay](/use-cases/prospect-intelligence-with-clay) shows the facts landing as columns.',
    },
    {
      kind: 'p',
      text: 'Obsession’s agents have run 1,500 sign-ups, baskets and checkouts at real companies, and counting. [The sample data](/sample-output) is one real store’s record, in every format it comes in.',
    },
    {
      kind: 'p',
      text: 'Start with the accounts in open opportunities, route on texts_live and platform_changed_on for a quarter, and compare them with the rest. That way you can see it in conversion rates from the fields your reps actually use, and in data quality, with every value carrying its date and its proof. [Sales intelligence from behind the login](/use-cases/sales-intelligence-behind-the-login) shows the same view for every role on a revenue team, with an example for each.',
    },
    {
      kind: 'cta',
      text: 'What each account shows only to its customers, as CRM fields: welcome emails, texts, sending platform and offers, each dated with its screenshot, by API, MCP or a table.',
      to: '/#join',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'compared', text: 'CRM data enrichment tools compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'CRM data enrichment tools by the fields each fills, with prices in US dollars as listed on each provider’s own pages. Facts checked 11 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing: the fields already in the CRM', 'No new setup', 'No new spend', 'Routes on size and industry alone', 'Products that never touch accounts’ customers'],
        ['By hand: an inbox, a number and a sheet per account', 'Exact, with an analyst’s judgement', 'Your team’s hours', 'About 5 minutes per account a week', 'A short list of top accounts'],
        [
          'Contact and company data: ZoomInfo, Apollo, HubSpot',
          'Contacts and firmographics on every record',
          'ZoomInfo: custom packages\nApollo: Free to Custom plans\nHubSpot: no credits used',
          'Company and contact facts, as their pages describe',
          'Contacts and fit on every account',
        ],
        [
          'Waterfall enrichment: Clay',
          'Several providers in turn, 150+ in all',
          'Launch from $185 a month, Growth from $495, per its FAQ\nPlan cards show $167 and $446, with a Save 10% toggle',
          'CRM sync on Growth and Enterprise',
          'Teams building their own enrichment logic',
        ],
        ['Technographics: BuiltWith', 'Technologies a site runs, more than 128,000 tracked', 'Basic: $295 a month\nPro: $495\nTeam: $995', 'What a site has installed', 'Lists by installed tool'],
        ['Intent: Bombora', 'Research activity against 25,300+ topics', 'Not listed: speak to an expert', 'Research on B2B sites, as its pages describe', 'Accounts researching a category now'],
        [
          'Company data for agents: Exa',
          'Firmographics, hiring and tech stack, cited, into the CRM',
          'Lite search: $4 per 1,000\n$10 free credit a month',
          'Pages don’t describe signed-up accounts',
          'Company research and monitors at agent speed',
        ],
        [
          'Obsession (ours): [Account watch](/recipes/account-watch), [Prospect intelligence](/recipes/prospect-intelligence); lookup, facts, notify',
          'What each account shows only to its customers, dated',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Every step short of paying, at any company you name',
          'Behaviour fields that route and score',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Exa’s Lite price and monthly credit are from [its pricing page](' +
        EXA_PRICING +
        '). Use Obsession for what each account sends and shows its own customers, dated, for every account on the book. For contacts and firmographics, a contact database or HubSpot’s own enrichment. For several sources behind one field, Clay. For installed tools, BuiltWith. For research activity, Bombora. For company research inside an agent, Exa, and an agent that needs both halves calls both.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about CRM data enrichment' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is CRM data enrichment?',
          a: 'CRM data enrichment is adding outside data to the accounts and contacts in a CRM, so routing, scoring and reps work from facts nobody typed in. The usual fields are firmographics, contacts, technographics and intent. For vendors whose product touches their accounts’ customers, a fifth set records what each account sends those customers, such as whether its welcome email arrives and whether its texts are live.',
        },
        {
          q: 'What are the most useful CRM enrichment fields?',
          a: 'Firmographics and contacts for fit, intent and news for timing, and behaviour fields for need: welcome_sent, texts_live, sending_platform, cart_reminder_live, last_offer_date and last_checked. Make the yes or no fields picklists with a Not checked value, and give each value the date it was seen and a link to its evidence.',
        },
        {
          q: 'What are the best CRM data enrichment tools?',
          a: 'It depends on the field. ZoomInfo, Apollo and HubSpot’s own enrichment fill contacts and firmographics, and Clay asks several providers in turn for the same field. BuiltWith fills installed technologies, Bombora fills research intent, and Exa enriches records with cited sources from its company and people data. For what each account shows only to its customers, Obsession fills behaviour fields, each value dated with the email or screenshot.',
        },
        {
          q: 'How do you build an account scoring model?',
          a: 'Keep 3 parts apart so reps can see why an account scored. Fit comes from firmographics and technographics, need from behaviour fields, and timing from intent, news and the dates a behaviour field changed. Set the points from closed-won accounts, and let need points fall to 0 once an account goes 14 days without a check.',
        },
        {
          q: 'What are lead scoring signals?',
          a: 'Lead scoring signals are the facts a score adds points for. Most are fit facts, such as job title and company size, or engagement, such as form fills and email opens. Behaviour fields add a signal from the account’s own business: a welcome email that stopped, texts never sent after an opt-in, or a new email platform this week.',
        },
        {
          q: 'How do you keep CRM enrichment data accurate?',
          a: 'Let one integration user write the fields, and treat an empty value as not checked. Record No only once the window closes, and give every value its date and evidence link. Let newer evidence win, keep every change as a dated entry, and stop counting values older than 14 days.',
        },
        {
          q: 'Can CRM enrichment show which email platform an account uses?',
          a: 'An email’s own headers name it. The DKIM signature’s d= tag names the domain that took responsibility for the message, and the return-path holds the bounce address. When a company sends through an email platform, one of the 2 often belongs to it. Obsession shows the platform behind each email, with its sender checked, and the week that changes.',
          link: { label: 'See sample data', to: '/sample-output' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Facts checked 11 November 2026. Every line about another company comes from that company’s own pages, read that day. They are ZoomInfo’s guide and pricing page, Apollo’s enrichment page, HubSpot’s and Salesforce’s help pages, Clay’s and BuiltWith’s pricing pages, Bombora’s intent page, and Exa’s home, pricing and GTM pages. The header rules are from RFC 6376 and RFC 5321. Points, windows and hours are example inputs, and every company at a .example address is invented.',
    },
  ],

  sources: [
    { title: 'CRM data enrichment: the complete 2026 guide', publisher: 'ZoomInfo', url: ZI_GUIDE, date: '2026-07-02' },
    { title: 'Plans', publisher: 'BuiltWith', url: BUILTWITH },
    { title: 'Intent data', publisher: 'Bombora', url: BOMBORA },
    { title: 'Pricing', publisher: 'ZoomInfo', url: ZI_PRICING },
    { title: 'Data enrichment', publisher: 'Apollo', url: APOLLO },
    { title: 'Get started with data enrichment', publisher: 'HubSpot Knowledge Base', url: HUBSPOT_ENRICH, date: '2026-07-10' },
    { title: 'Pricing', publisher: 'Clay', url: CLAY_PRICING },
    { title: 'Exa home page', publisher: 'Exa', url: EXA },
    { title: 'Company data API and CRM enrichment for GTM teams', publisher: 'Exa', url: EXA_GTM },
    { title: 'Property field types in HubSpot', publisher: 'HubSpot Knowledge Base', url: HUBSPOT_TYPES, date: '2026-09-29' },
    { title: 'Custom field types', publisher: 'Salesforce Help', url: SF_TYPES },
    { title: 'RFC 6376: DomainKeys Identified Mail (DKIM) Signatures', publisher: 'RFC Editor', url: RFC_DKIM, date: '2011-09' },
    { title: 'RFC 5321: Simple Mail Transfer Protocol', publisher: 'RFC Editor', url: RFC_SMTP, date: '2008-10' },
    { title: 'Understand the lead scoring tool', publisher: 'HubSpot Knowledge Base', url: HUBSPOT_SCORING, date: '2026-09-02' },
    { title: 'Pricing', publisher: 'Exa', url: EXA_PRICING },
  ],

  related: [
    'buying-signals-examples',
    'clay-custom-signals',
    'churn-risk-indicators',
    'sales-trigger-events',
    'recipe:account-watch',
    'recipe:prospect-intelligence',
    '/sales',
    '/use-cases/prospect-intelligence-with-clay',
  ],
}
