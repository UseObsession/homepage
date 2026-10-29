import type { BlogPost } from './types'

/* Wave 2, article 7 (keyword plan, 23 Oct 2026): how retention agencies get email marketing clients. Readers: founders
   and heads of growth at retention, email and SMS agencies for Shopify and DTC brands (Klaviyo, Postscript, Attentive,
   Omnisend), and freelancers growing into an agency. Primary "how to get email marketing clients"; secondary how to find
   email marketing clients, how to sell email marketing services, klaviyo agency partner program, klaviyo partner
   directory, email marketing agency for ecommerce.
   Why now: brands freeze code about 20 Nov before Black Friday on Fri 27 Nov 2026, and January is the switch season, so a
   prospect signed up this week has its season on record before the pitch.
   Angle: the agency practitioner's version of a generic freelancer topic. Which brands need email run for them and how to
   tell from outside, every channel with its rules and price, the opening built on a finding the owner can check, how the
   call, the audit (linked to email-marketing-audit, never repeated) and the proposal fit, published pricing models, the
   pipeline sum and one client's 12 month value, and the consent basics for the US, UK and EU.
   Read at source on 23 Oct 2026: SparkToro's 2025 agency survey, AMI's Agency Core 2026 PDF (pages 10, 11, 48, 49),
   Klaviyo's partner page and Academy lessons (tiers, directory, revenue share, the Bronze rename), Klaviyo Help (sending
   domains, user roles, attribution), Shopify Help (Partner Program, directory eligibility) and its email marketing
   directory page, Postscript's partner tiers, Okendo's partner article, Flowium's audit page, Joy Joya's 362 brand test,
   Google's Ads Transparency Center help, Netalico's pricing, Darkroom's, YOCTO's, Excelohunt's and shopexperts' pricing
   guides, Proposify's State of Proposals 2026, Instantly's 2026 benchmark, the FTC's CAN-SPAM guide, the ICO's email
   marketing guidance, the ePrivacy Directive (Article 13, legislation.gov.uk copy), Germany's UWG (English text), the
   European Commission's direct marketing page, and every company in the options table at its own pages. Reused from the
   library: nothing (the r/agency quote was removed on 23 Oct 2026 because Reddit blocked every reader).
   Left out on purpose: anything from SpartanLeadz; our own send results; the site's 93% and 128 stores; any PilotX audit
   figure; strategist hour estimates from our files; Recharge and Smile (pages blocked or dated); Meta's Ad Library
   details (its help page didn't open). Every brand in the 2 illustrations, the 1 in 2 and 1 in 3 rates and the $800
   Klaviyo bill are invented. Buyer words; no dashes. */

const SPARKTORO = 'https://sparktoro.com/blog/digital-agency-new-business-still-a-concern-referrals-still-rule-for-lead-gen-and-are-sales-pipelines-finally-recovering/'
const AMI = 'https://agencymanagementinstitute.com/wp-content/uploads/2026/05/Agency-Core-2026_Executive-Summary.pdf'
const DARKROOM = 'https://www.darkroomagency.com/observatory/retention-marketing-cost-email-sms-2026'
const NETALICO = 'https://netalico.com/pages/services-email-marketing'
const KL_DOMAINS = 'https://help.klaviyo.com/hc/en-us/articles/7674941873947'
const G_ADS = 'https://support.google.com/My-Ad-Center-Help/answer/12155361?hl=en'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const SL_DATA = 'https://storeleads.app/help/faq/what-data-is-available-for-domains'
const BUILTWITH = 'https://builtwith.com/plans'
const POSTSCRIPT = 'https://postscript.io/partner-tiers'
const OKENDO = 'https://support.okendo.io/en/articles/6250511-about-the-okendo-agency-partner-program'
const KL_PARTNERS = 'https://www.klaviyo.com/partners'
const KL_TIERS = 'https://academy.klaviyo.com/en-us/courses/partner-program-fundamentals/lessons/adhere-to-partner-program-requirements'
const KL_DIRECTORY = 'https://academy.klaviyo.com/en-us/courses/partner-program-fundamentals/lessons/list-your-services-on-the-partner-directory'
const KL_BRONZE = 'https://academy.klaviyo.com/en-us/courses/partner-program-fundamentals/lessons/differentiate-partner-program-tracks-and-tiers'
const KL_REFERRAL = 'https://academy.klaviyo.com/en-us/courses/partner-program-fundamentals/lessons/register-a-lead'
const SH_PROGRAM = 'https://help.shopify.com/en/partners/partner-program/about'
const SH_DIRECTORY = 'https://www.shopify.com/partners/directory/services/marketing-and-sales/email-marketing'
const SH_JOIN = 'https://help.shopify.com/en/partners/directory/join'
const CLUTCH = 'https://clutch.co/get-listed'
const UPWORK = 'https://www.upwork.com/resources/is-upwork-free'
const STORELEADS = 'https://storeleads.app/#pricing'
const APOLLO = 'https://www.apollo.io/insights/more-information-on-what-they-are-paying-for-in-apollo-plan-detailsusage-walkthrough'
const CLAY = 'https://www.clay.com/pricing'
const FLOWIUM = 'https://flowium.com/audit'
const FTC = 'https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business'
const ICO = 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/'
const EPRIVACY = 'https://www.legislation.gov.uk/eudr/2002/58/article/13'
const UWG = 'https://www.gesetze-im-internet.de/englisch_uwg/englisch_uwg.html'
const EC_MARKETING = 'https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/legal-grounds-processing-data/can-data-received-third-party-be-used-marketing_en'
const KL_ROLES = 'https://help.klaviyo.com/hc/en-us/articles/115005231648'
const EXCELOHUNT = 'https://www.excelohunt.com/blog/klaviyo-agency-pricing/'
const YOCTO = 'https://yocto.agency/klaviyo-email-marketing-agency-pricing-guide/'
const KL_ATTR = 'https://help.klaviyo.com/hc/en-us/articles/1260804504250'
const SHOPEXPERTS = 'https://shopexperts.com/help/pricing/shopify-email-marketing-cost'
const PROPOSIFY = 'https://www.proposify.com/state-of-proposals-2026'
const INSTANTLY = 'https://instantly.ai/cold-email-benchmark-report-2026'

const USE_CASE = '/use-cases/leak-checks-for-retention-agencies'

export const post: BlogPost = {
  slug: 'how-to-get-email-marketing-clients',
  title: 'How to get email marketing clients: a guide for retention agencies',
  dek: 'Where retention agencies find Shopify and DTC brands that need email and SMS run for them, and how to check each one from outside. Then the first message, call, audit and proposal, with published prices and the pipeline sum in your own numbers.',
  metaTitle: 'How to get email marketing clients: a retention agency guide',
  description:
    'How to get email marketing clients for a retention agency: which brands to target, where to find them, the first message, pricing and the pipeline sum.',
  answer:
    'To get email marketing clients, choose brands that can pay a retainer and send from a platform you work in, sign up to each as a new customer, and open with a dated finding the owner can check on their phone, such as a welcome email that never arrived. Find them through client and partner referrals, the Klaviyo and Shopify partner directories, technology partners, content and events, and cold email built on store data, then run the audit after the first call and price the proposal from it. Obsession’s AI customers make that check at any store you name, signing up and leaving a basket as a real customer would.',
  primaryKeyword: 'how to get email marketing clients',
  keywords: [
    'how to find email marketing clients',
    'how to sell email marketing services',
    'klaviyo agency partner program',
    'klaviyo partner directory',
    'klaviyo agency partners',
    'email marketing agency for ecommerce',
    'retention marketing agency',
  ],
  category: 'For agencies',
  published: '2026-10-23',
  updated: '2026-10-28',
  readingMinutes: 12,
  order: 17,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'brandwatch',
    workspace: 'agency',
    art: {
      kind: 'report',
      title: 'Pitch list · 5 skincare brands checked from outside',
      period: 'Store data read Monday · each brand signed up Monday 09:00 · read Wednesday 09:00',
      cols: ['Brand', 'Est. sales', 'Sends from', 'What a new subscriber got'],
      rows: [
        { name: 'ashcombe.example', cells: ['$4M a year', 'Klaviyo', 'No welcome email in 48 h'], tone: 'fail' },
        { name: 'merrowskin.example', cells: ['$2.5M a year', 'Klaviyo, Postscript', 'Opted in to texts, none sent'], tone: 'fail' },
        { name: 'tallisandco.example', cells: ['$6M a year', 'Klaviyo', 'Welcome in 3 min, code refused'], tone: 'fail' },
        { name: 'fenmore.example', cells: ['$1.8M a year', 'Omnisend', 'Welcome 5 h after sign up'], tone: 'late' },
        { name: 'brackley.example', cells: ['$3M a year', 'Klaviyo', 'Welcome in 2 min, code works'], tone: 'ok' },
      ],
      notes: [
        'Write first to the 3 brands with a gap the owner can check on a phone.',
        'Sales are estimates from store data. Confirm them on the first call.',
        'Every brand and figure here is invented.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Retention, email and SMS agencies win new clients by choosing brands that can pay a retainer, checking what each brand sends a new subscriber, and opening with a finding the owner can check on their own phone. The same method works on Klaviyo, Postscript, Attentive and Omnisend, for a freelancer and for a team of 50.',
    },
    {
      kind: 'p',
      text: 'Most agencies rely on referrals and have nobody whose job is to find the next client. In [SparkToro’s 2025 survey of digital agencies](' +
        SPARKTORO +
        '), referrals from existing and past clients were “by far the biggest driver of new business”, 79% of agencies had no one dedicated to their own marketing, and 70% had no full time sales staff.',
    },
    {
      kind: 'stat',
      value: '67%',
      label: 'of agencies called prospect pipeline a pressing challenge, the top answer for the third year running',
      source: 'Agency Management Institute, Agency Core 2026 (415 responses)',
      href: AMI,
    },

    { kind: 'h2', id: 'which-brands', text: 'Which brands need an agency' },
    {
      kind: 'p',
      text: 'The brands most likely to hire you can pay a monthly retainer, send from a platform you work in, pay for their traffic, and show a gap a new subscriber can see. On size, [Darkroom’s 2026 guide](' +
        DARKROOM +
        ') puts agency starter retainers at $3,000 to $5,000 a month for brands with $1M to $5M in annual revenue, and [Netalico](' +
        NETALICO +
        ') says most of its clients do $2M to $50M in GMV.',
    },
    {
      kind: 'p',
      text: 'A [test of 362 ecommerce brands that Joy Joya published in July 2026](' +
        JOYJOYA +
        '), using new email addresses and phone numbers, found that 158 sent no welcome email, 53 never sent the text they promised and 20 sent an offer that didn’t match the pop up.',
    },
    {
      kind: 'stat',
      value: '158 of 362',
      label: 'ecommerce brands sent no welcome email to a new subscriber, in a test from new addresses published in July 2026',
      source: 'Joy Joya, July 2026',
      href: JOYJOYA,
    },
    {
      kind: 'p',
      text: 'A brand that can pay, runs a platform you know and shows a gap is the strongest prospect, because you have something specific to show it.',
    },

    { kind: 'h2', id: 'check-from-outside', text: 'Check a brand from outside' },
    {
      kind: 'table',
      caption: 'Public checks to run on each prospect before the first message',
      cols: ['Signal', 'Where to check', 'What it tells you'],
      rows: [
        ['Size', '[Store Leads](' + SL_DATA + ') estimated sales and visits', 'Whether the brand can pay your smallest retainer'],
        [
          'Platform',
          'The apps listed in Store Leads or [BuiltWith](' + BUILTWITH + '), and the Gmail sender line',
          'The email and SMS platforms in use\n“via klaviyomail.com” beside the sender means Klaviyo’s shared domain, which a branded sending domain removes, says [Klaviyo’s help centre](' + KL_DOMAINS + ')',
        ],
        ['Paid traffic', '[Google’s Ads Transparency Center](' + G_ADS + ') and Meta’s Ad Library', 'Live ads, so every sign up has a cost to the brand'],
        ['Welcome email and code', 'A new Gmail address, signed up through the pop up on a phone', 'Minutes to arrive, the Gmail tab, and whether the code works'],
        ['Texts', 'A phone number that has never opted in', 'Whether a confirmation text arrives and STOP works'],
        ['Basket and checkout reminders', 'A second and a third new address', 'Whether each reminder arrives once, with the product'],
      ],
    },
    {
      kind: 'p',
      text: 'Use only the sign up paths any customer has, buy nothing, and count a gap once the sign up is confirmed, the spam folder is checked and 48 hours have passed. The full method is in [how to audit a prospect’s email and SMS without a Klaviyo login](/blog/audit-prospect-email-without-klaviyo-login).',
    },
    {
      kind: 'p',
      text: 'By hand, each prospect needs its own addresses, a phone number and 48 hours of watching, which suits about 5 prospects at a time. Obsession runs that check today. It makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof. Its [retention agency use case](' +
        USE_CASE +
        ') runs the same check on any store you name. The method behind that check is [customer journey testing](/blog/ai-customers-find-revenue-leaks).',
    },
    {
      kind: 'cta',
      text: 'Obsession checks 5 stores free, prospects or clients (a client’s with their OK): an AI customer signs up as each store’s new customer, opts in to texts and leaves a basket, and you get what happened within 4 days, with proof.',
      to: USE_CASE,
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'where-to-find', text: 'Where to find email marketing clients', compare: true },
    {
      kind: 'p',
      text: 'Agencies find most clients through people who already know them. In SparkToro’s survey, 15% named partner companies as their top source of referrals, and of the 59% that had tried outbound sales, 9% called it very effective and 33% not effective at all.',
    },
    {
      kind: 'p',
      text: 'We make Obsession, which does some of this, so every line about another tool is taken from that tool’s own pages, checked on 23 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to find email marketing clients. Prices from each company’s own pages, 23 October 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Doing nothing: referrals only',
          'The top source of new business in SparkToro’s survey',
          'Free',
          'Volume depends on clients’ networks\n14% of agencies called their pipeline healthy',
          'Agencies with a full roster',
        ],
        [
          'By hand: new Gmail addresses, a phone, a sheet',
          'A dated finding the owner can check',
          'Free, plus 48 hours of watching per prospect',
          'About 5 prospects at a time, recorded only in your sheet',
          'The first 5 to 10 prospects',
        ],
        [
          'Partner agencies: CRO, Shopify build, paid media',
          'Introductions from a team the brand already trusts',
          'No fee',
          'Volume depends on the partner’s own sales',
          'Agencies with a clear niche',
        ],
        [
          'Technology partners: [Postscript](' + POSTSCRIPT + '), [Okendo](' + OKENDO + ')',
          'A directory of brands that run the app, plus commission',
          'Postscript: directory from Gold\nOkendo: 20% revenue share',
          'Okendo shares leads where available, Gold and Platinum first',
          'Agencies that install these apps',
        ],
        [
          'Klaviyo: Partner Program and directory',
          'Brands filter by service, budget and location, and contact you',
          'No fee listed, directory from Silver',
          '6,000+ agency partners, and Klaviyo approves each profile',
          'Agencies that refer and manage Klaviyo accounts',
        ],
        [
          'Shopify: Partner Program and directory',
          '2,254 email marketing partners, filtered by price, location and tier',
          'Free to join, directory by invitation',
          'Revenue thresholds from $500k a year to Shopify',
          'Agencies that also build stores',
        ],
        [
          'Marketplaces: [Clutch](' + CLUTCH + '), [Upwork](' + UPWORK + ')',
          'A profile and reviews buyers can find',
          'Clutch: free, Verified $499 a year\nUpwork: 0% to 15% per contract',
          'Clutch advertising is priced on request',
          'Freelancers and new agencies',
        ],
        [
          'Store data: [Store Leads](' + STORELEADS + '), BuiltWith',
          'Stores by platform, apps and estimated sales',
          'Store Leads: $75 to $950 a month\nBuiltWith: $295 to $995 a month',
          'Estimates, and nothing on what a subscriber receives',
          'Building the list',
        ],
        [
          'Contact data: [Apollo](' + APOLLO + '), [Clay](' + CLAY + ')',
          'The people at each brand and their email addresses',
          'Apollo: free, Basic $49, Professional $79 a user a month, billed yearly\nClay: free, Launch $185, Growth $495 a month, or $167 and $446 billed yearly',
          'Gives no reason to write, and each country’s consent rules apply',
          'Reaching the founder or head of ecommerce',
        ],
        [
          'Obsession (ours): [Leak checks for retention agencies](/use-cases/leak-checks-for-retention-agencies), [Prospect intelligence](/recipes/prospect-intelligence), [Email and SMS tracking](/recipes/email-sms-tracking)',
          'Leak checks: an AI customer signs up as each store’s new customer, opts in to texts and leaves a basket, with proof\nProspect intelligence: a verdict and a proof link per company\nEmail and SMS tracking: each competitor’s emails and texts',
          'Running now: 5 stores checked free\nCredit-based plans, like Claude’s',
          'Doesn’t find contacts or email addresses',
          'What a real customer gets at every brand on a pitch list, kept as proof',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If your agency needs a dated finding at every brand on a pitch list, use Obsession. An agency that wins enough work through referrals and partner agencies needs none of the paid tools in the table.',
    },

    { kind: 'h3', id: 'referrals', text: 'Referrals from clients and partner agencies' },
    {
      kind: 'p',
      text: 'Ask a client for an introduction once a fix shows in their numbers, and name the kind of brand you want to meet. Agree referrals in both directions with CRO, Shopify build and paid media agencies that serve the same brands without running their email.',
    },

    { kind: 'h3', id: 'technology-partners', text: 'Technology partners' },
    {
      kind: 'p',
      text: 'SMS, review and other apps run their own partner programmes, with directories that reach brands already using the app. Postscript features Gold and Platinum partners in its directory, with Gold at $15,000 of referred MRR over a rolling 12 months, and pays commission monthly for a referred customer’s first 12 months. Okendo pays a 20% revenue share on referred deals and puts Gold and Platinum partners first for lead sharing.',
    },

    { kind: 'h3', id: 'klaviyo-partner-program', text: 'The Klaviyo agency partner program and directory' },
    {
      kind: 'p',
      text: '[Klaviyo’s partner page](' +
        KL_PARTNERS +
        ') lists 6,000+ agency partners, and [its tiers](' +
        KL_TIERS +
        ') run Bronze, Silver, Gold, Platinum and Elite. On the Master track, for agencies that manage clients’ accounts, the requirements include:',
    },
    {
      kind: 'list',
      items: [
        '**Silver:** $250 of referred and $250 of managed MRR, and 1 employee through the required curriculum.',
        '**Gold:** $5,000 of each, $500 of platform MRR other than email, and 3 employees.',
        '**Platinum:** $20,000 of each, $4,000 of platform MRR, and 10 employees.',
        '**Elite:** $40,000 of each, more than 1 case study a year, and 20 people through the curriculum.',
      ],
    },
    {
      kind: 'p',
      text: 'Silver partners and above can list in the [Agency Partner Directory](' +
        KL_DIRECTORY +
        ') once Klaviyo approves their profile. Brands there filter partners by service type, budget and location and contact them from the profile. In the starting tier, [renamed Bronze on 1 July 2025](' +
        KL_BRONZE +
        '), Klaviyo pays a [10% revenue share](' +
        KL_REFERRAL +
        ') on a referred account’s email and text MRR for 12 months, for leads that become customers within 90 days with no earlier sales relationship with Klaviyo.',
    },

    { kind: 'h3', id: 'shopify-partner-directory', text: 'The Shopify Partner Directory' },
    {
      kind: 'p',
      text: 'The [Shopify Partner Program](' +
        SH_PROGRAM +
        ') is free to join, and partners earn a monthly revenue share for each client they refer. On 23 October 2026, [the directory](' +
        SH_DIRECTORY +
        ') listed 2,254 partners for email marketing, which merchants filter by price, location, tier, industry and language. [Listing is by invitation](' +
        SH_JOIN +
        '), mainly for Plus, Premier and Platinum partners. The thresholds include $500k a year of revenue to Shopify from merchants a partner brought in over 5 years, plus at least 2 Plus or Enterprise shops or 40 Standard shops.',
    },

    { kind: 'h3', id: 'content-and-events', text: 'Content and events' },
    {
      kind: 'p',
      text: 'Speaking at events rose to 4th among sources of new business in SparkToro’s survey. In the client study inside [Agency Core 2026](' +
        AMI +
        '), 61% of 400 clients said conference speaking shows true agency expertise, against 23% of agencies who saw it as a trust signal. Write articles that answer what store owners search when a flow breaks, such as [why a welcome or basket email isn’t sending](/blog/welcome-basket-email-not-sending).',
    },

    { kind: 'h3', id: 'cold-outreach', text: 'Store data, contact data and cold email' },
    {
      kind: 'p',
      text: 'Store Leads and BuiltWith build the list by platform, apps and estimated size, and Apollo and Clay find the people and their email addresses. None of these tools shows what a brand sends its subscribers, so the reason to write comes from your own check, and the consent rules below apply to every send.',
    },

    { kind: 'h2', id: 'first-message', text: 'The first message' },
    {
      kind: 'p',
      text: 'A free audit run inside the account needs the brand’s login first. [Flowium’s audit page](' +
        FLOWIUM +
        ') asks for Manager access to a Klaviyo account for a full audit, so the prospect sees the value only after agreeing to work with you. Open instead with 1 thing about the prospect’s own emails that the owner can check on their phone.',
    },
    {
      kind: 'list',
      items: [
        '**Write to the founder or head of ecommerce** from your own address, and say who you are.',
        '**State the finding with its date and time:** when you signed up, what arrived and when, or that nothing came in 48 hours.',
        '**Attach the evidence:** the email as it arrived, or the empty inbox with the time showing.',
        '**Ask for 15 minutes** to show what you would fix first, and check again the day before the call.',
      ],
    },
    {
      kind: 'p',
      text: 'Two example first lines are in the outside audit guide.',
    },

    { kind: 'h2', id: 'consent', text: 'Consent rules for cold email' },
    {
      kind: 'p',
      text: 'The rules depend on the country and on whether you write to a company or a person. This summary is not legal advice.',
    },
    {
      kind: 'list',
      items: [
        '**United States.** The [FTC’s CAN-SPAM guide](' +
          FTC +
          ') says the law makes no exception for business to business email, and it sets no consent requirement before a first email. Each email needs accurate sender details and subject line, your postal address and a clear way to opt out, honoured within 10 business days, and penalties run up to $53,088 for each email that breaks the law.',
        '**United Kingdom.** [The ICO says](' +
          ICO +
          ') you can email a company, limited liability partnership, Scottish partnership or government body without consent, if you don’t hide who you are and you give an address to opt out. Sole traders and some partnerships need consent first, and named employees’ addresses raise data protection questions. The ICO is reviewing its guidance after the Data (Use and Access) Act.',
        '**European Union.** [The ePrivacy Directive](' +
          EPRIVACY +
          ') requires prior consent for email marketing to individuals and leaves businesses to each member state. [Germany’s Act against Unfair Competition](' +
          UWG +
          ') treats email advertising without prior express consent as an unacceptable nuisance, for businesses and consumers alike. Under the GDPR, [the European Commission says](' +
          EC_MARKETING +
          ') people must be told by the first message that you hold their data to send them adverts, and they have the right to object. A bought list needs proof from its seller that the data was collected in line with the GDPR.',
      ],
    },
    {
      kind: 'p',
      text: 'Keep a list of everyone who opts out and suppress them in every tool you send from.',
    },

    { kind: 'h2', id: 'call-audit-proposal', text: 'Call, audit and proposal' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**The first call.** Show the finding, then ask about the past: who runs email and SMS, on which platform, what share of revenue email earned last quarter, what they tried, and who else decides. Close by asking for access.',
        '**Access.** Ask for the narrowest role that covers the audit. [Klaviyo’s Analyst role](' +
          KL_ROLES +
          ') can view analytics, segments and reporting and preview flow messages without editing them, and Flowium says Analyst access works but may limit its report.',
        '**The audit.** Run the 3 layers in [the email marketing audit](/blog/email-marketing-audit): the account, deliverability, and what a new subscriber receives beside 2 or 3 competitors.',
        '**The proposal.** Lead with the priority 1 findings and the monthly revenue each puts at risk, from the brand’s own flow report, then the scope, price, term and the date the first fix goes live.',
        '**After the signature.** Repeat the outside check after each fix, so the monthly report shows each finding as found, fixed and checked again, in the format of [proof that every flow fired](/blog/show-clients-every-flow-fired).',
      ],
    },

    { kind: 'h2', id: 'pricing', text: 'How agencies price the work' },
    {
      kind: 'p',
      text: 'Agencies that publish their prices use 4 models, often combined.',
    },
    {
      kind: 'list',
      items: [
        '**A monthly retainer.** Netalico lists $1,200 a month for 4 emails, $2,500 for 8 emails and 2 texts, and $5,000 for 16 emails and 4 texts. Darkroom’s guide sets agency tiers by brand revenue: $3,000 to $5,000 a month at $1M to $5M, $5,000 to $8,000 at $5M to $15M, and $8,000 to $10,000+ above $15M.',
        '**A fee per flow or project.** Netalico lists flow packages at $2,500, $5,500 and $6,000, and [Excelohunt](' +
          EXCELOHUNT +
          ') sells an abandoned cart flow at $349 and a welcome series at $419.',
        '**A paid audit.** Netalico lists a Klaviyo audit at $1,000, with a report, recommendations and a walkthrough.',
        '**A revenue share.** [YOCTO’s 2026 guide](' +
          YOCTO +
          ') describes 10% to 20% of attributed or incremental revenue, and Excelohunt a lower base fee plus a share. [Klaviyo’s default attribution](' +
          KL_ATTR +
          ') is last touch with 5 day windows for email opens and clicks, so agree the window and how email revenue is counted before you sign, as YOCTO’s guide and [shopexperts’ cost guide](' +
          SHOPEXPERTS +
          ') advise.',
      ],
    },
    {
      kind: 'p',
      text: 'Darkroom’s guide favours month to month or 90 day terms over 12 month contracts. A scope that also names what the client can check each month, such as every flow live and arriving, gives the client a measure beyond the number of emails sent.',
    },

    { kind: 'h2', id: 'pipeline', text: 'The pipeline in your numbers' },
    {
      kind: 'p',
      text: 'Work back from the retainers you want, using your own rates where your CRM has them.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Proposals** = new retainers ÷ your close rate. [Proposify](' +
          PROPOSIFY +
          ') reports a 34% average across 742,137 proposals sent through its own software in 2025.',
        '**First calls** = proposals ÷ the share of first calls that lead to a proposal.',
        '**Conversations** = first calls ÷ the share of conversations that book a call. A conversation is a referral, a directory enquiry or a reply.',
      ],
    },
    {
      kind: 'p',
      text: 'An agency that wants 3 retainers this quarter, closes 34% of proposals, proposes after 1 in 2 first calls and books a call from 1 in 3 conversations needs 9 proposals, 18 first calls and 54 conversations. At the 3.43% average reply rate in [Instantly’s 2025 platform data](' +
        INSTANTLY +
        '), from its own data, 54 conversations from cold email alone would take at least 1,575 first emails, so each referral in the mix replaces about 29 of them.',
    },
    {
      kind: 'art',
      caption: 'A worked example with an invented Klaviyo bill. Replace each figure with your own prices and the client’s plan.',
      art: {
        kind: 'price',
        title: 'One retained client over its first 12 months · an example agency',
        rows: [
          { label: 'Monthly retainer', value: '$2,500', note: 'Netalico’s middle published tier, as an example' },
          { label: 'Retainer over 12 months', value: '$30,000', note: '$2,500 × 12' },
          { label: 'Flow build in month 1', value: '$5,500', note: 'Netalico’s middle flow package' },
          { label: 'Klaviyo referral share', value: '$960', note: '10% of an $800 a month bill × 12, only for a brand new to Klaviyo' },
        ],
        total: { label: 'Revenue from 1 client in its first 12 months', value: '$36,460', note: '$30,000 + $5,500 + $960' },
      },
    },
    {
      kind: 'p',
      text: 'At the $36,460 a client in the example above, 3 new clients bring in $109,380 in their first 12 months.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'list',
      items: [
        '**An outside check covers 1 inbox at 1 moment.** The cause of a gap sits inside the account, which you see after the brand agrees to an audit.',
        '**Store data is estimated.** Confirm size and platform on the first call.',
        '**Partner rules change.** Klaviyo renamed its starting tier in July 2025, and Shopify updates tiers every quarter.',
        '**The pipeline rates are the vendors’ own averages across their users.** After 1 quarter, use your own.',
      ],
    },
    {
      kind: 'p',
      text: 'Black Friday is Friday 27 November 2026, and many stores freeze code around 20 November. Sign up to your 10 best prospects this week, so each brand’s season is in your sheet before January, when brands review their agencies and platforms.',
    },
    {
      kind: 'cta',
      text: 'Prospect intelligence becomes a customer of every company on your pitch list and returns a verdict and a proof link for each one to Clay, your CRM or a sheet. Your own tools find the people. It runs now, on credit-based plans like Claude’s.',
      to: '/',
      label: 'Meet your first AI customers',
    },

    { kind: 'h2', id: 'questions', text: 'Common questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do I get my first email marketing client?',
          a: 'Pick 5 brands that can pay your smallest retainer and use a platform you know, sign up to each as a new customer, and write to the owner with the gap you found and its date. Ask past clients and partner agencies for introductions the same week.',
        },
        {
          q: 'How do I find email marketing clients?',
          a: 'Through client and partner referrals, the Klaviyo and Shopify partner directories, SMS and review app partner programmes, content and events, Clutch and Upwork, and cold email to lists built from store data.',
        },
        {
          q: 'How do I sell email marketing services to ecommerce brands?',
          a: 'Open with a finding the owner can check, learn on the first call who runs email and what it earns, audit the account once you have access, and price the proposal from the priority 1 findings.',
        },
        {
          q: 'How do I get into the Klaviyo partner directory?',
          a: 'Reach Silver or above in Klaviyo’s Partner Program, which on the Master track means $250 of referred and $250 of managed MRR and 1 employee through the curriculum, then submit a profile for Klaviyo to approve.',
        },
        {
          q: 'How much should I charge for email marketing?',
          a: 'Published retainers run from $1,200 to $5,000 a month by email volume at Netalico, and from $3,000 to $10,000+ by brand size in Darkroom’s guide. Price from the scope and the revenue at stake in the client’s own flow report.',
        },
        {
          q: 'Is cold email to brands legal?',
          a: 'In the US it is, with accurate sender details, a postal address and a working opt out. In the UK you can email companies without consent but not sole traders, and EU rules for businesses vary by country, with Germany requiring prior consent. This is not legal advice.',
        },
        {
          q: 'Do I need a Klaviyo login to pitch a brand?',
          a: 'No, because you can sign up to the brand’s store as any customer would and ask for access once the brand agrees to an audit.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Upwork’s page refused our automated reader on 23 October, so we read its fees in a browser. Apollo’s prices come from its pricing guide of 17 September 2026, because its pricing page loads them in the browser. Clay’s plan table opens on yearly billing ($167 and $446 a month), and its monthly prices are the $185 and $495 in its FAQ. Netalico marked its $1,000 audit as sold out. Meta’s Ad Library help page did not open, and EUR-Lex showed a bot check, so the Directive is quoted from legislation.gov.uk. We did not use the tools in the table. The 1 in 2 and 1 in 3 rates, the $800 Klaviyo bill and every brand in the 2 illustrations are invented.',
    },
  ],

  sources: [
    { title: 'Digital agency new business: referrals still rule for lead gen', publisher: 'SparkToro (Paddy Moogan)', url: SPARKTORO, date: '2026-02-17' },
    { title: 'Agency Core 2026 research report, executive summary', publisher: 'Agency Management Institute', url: AMI, date: '2026-05' },
    { title: 'Retention marketing cost: email and SMS in 2026', publisher: 'Darkroom', url: DARKROOM, date: '2026-10-01' },
    { title: 'Klaviyo email marketing services and pricing', publisher: 'Netalico', url: NETALICO },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'What data is available for stores?', publisher: 'Store Leads', url: SL_DATA },
    { title: 'Plans', publisher: 'BuiltWith', url: BUILTWITH },
    { title: 'Understanding branded vs. shared sending domains', publisher: 'Klaviyo Help Center', url: KL_DOMAINS, date: '2025-07-07' },
    { title: 'About advertiser verification and the Ads Transparency Center', publisher: 'Google My Ad Center Help', url: G_ADS },
    { title: 'Partner tiers', publisher: 'Postscript', url: POSTSCRIPT },
    { title: 'About the Okendo Agency Partner Program', publisher: 'Okendo Help Center', url: OKENDO, date: '2024-03-01' },
    { title: 'Get listed', publisher: 'Clutch', url: CLUTCH },
    { title: 'Is Upwork free to join? Our pricing breakdown', publisher: 'Upwork', url: UPWORK, date: '2026-07-23' },
    { title: 'Pricing', publisher: 'Store Leads', url: STORELEADS },
    { title: 'What does Apollo’s pricing actually include?', publisher: 'Apollo', url: APOLLO, date: '2026-09-17' },
    { title: 'Pricing', publisher: 'Clay', url: CLAY },
    { title: 'Partners', publisher: 'Klaviyo', url: KL_PARTNERS },
    { title: 'Adhere to partner program requirements', publisher: 'Klaviyo Academy', url: KL_TIERS },
    { title: 'List your services on the Partner Directory', publisher: 'Klaviyo Academy', url: KL_DIRECTORY },
    { title: 'Differentiate partner program tracks and tiers', publisher: 'Klaviyo Academy', url: KL_BRONZE },
    { title: 'Register a lead', publisher: 'Klaviyo Academy', url: KL_REFERRAL },
    { title: 'About the Shopify Partner Program', publisher: 'Shopify Help Center', url: SH_PROGRAM },
    { title: 'Email marketing service partners', publisher: 'Shopify Partner Directory', url: SH_DIRECTORY },
    { title: 'Eligibility for the Shopify Partner Directory', publisher: 'Shopify Help Center', url: SH_JOIN },
    { title: 'Free email marketing audit', publisher: 'Flowium', url: FLOWIUM },
    { title: 'CAN-SPAM Act: a compliance guide for business', publisher: 'Federal Trade Commission', url: FTC },
    { title: 'Electronic mail marketing', publisher: 'Information Commissioner’s Office', url: ICO },
    { title: 'Directive 2002/58/EC, Article 13: unsolicited communications', publisher: 'legislation.gov.uk', url: EPRIVACY, date: '2002-07-12' },
    { title: 'Act against Unfair Competition, section 7', publisher: 'German Federal Ministry of Justice', url: UWG },
    { title: 'Can data received from a third party be used for marketing?', publisher: 'European Commission', url: EC_MARKETING },
    { title: 'User management and privileges reference for static user roles', publisher: 'Klaviyo Help Center', url: KL_ROLES, date: '2026-03-25' },
    { title: 'Klaviyo agency pricing: what you should pay in 2026', publisher: 'Excelohunt', url: EXCELOHUNT, date: '2026-10-12' },
    { title: 'Klaviyo agency pricing in 2026: what agencies charge', publisher: 'YOCTO', url: YOCTO, date: '2026-09' },
    { title: 'Understanding Klaviyo message attribution', publisher: 'Klaviyo Help Center', url: KL_ATTR, date: '2026-03-10' },
    { title: 'Shopify email marketing cost: what you should actually pay in 2026', publisher: 'shopexperts (Jon Kennedy)', url: SHOPEXPERTS, date: '2026-10-19' },
    { title: 'State of Proposals 2026', publisher: 'Proposify', url: PROPOSIFY, date: '2026' },
    { title: 'Cold email benchmark report 2026', publisher: 'Instantly', url: INSTANTLY, date: '2026-01-12' },
  ],

  related: [
    'email-marketing-audit',
    'audit-prospect-email-without-klaviyo-login',
    'show-clients-every-flow-fired',
    'recipe:prospect-intelligence',
    'recipe:email-sms-tracking',
    '/use-cases/leak-checks-for-retention-agencies',
    '/sample-output',
  ],
}
