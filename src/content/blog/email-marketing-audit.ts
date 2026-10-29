import type { BlogPost } from './types'

/* Wave 2, article 4 (keyword plan, 23 Oct 2026): the email marketing audit, for retention agencies. Readers: strategists
   and founders at retention and email agencies for Shopify and DTC brands (Klaviyo, Postscript, Attentive, Omnisend), who
   audit clients at onboarding and prospects before a pitch, and brand CRM leads. Primary "email marketing audit", which
   leads its Trends group by far (45 of 100 now, against 2 for "inbox placement test"); this post takes over "email
   marketing audit checklist" from audit-prospect-email-without-klaviyo-login and links to it for the outside only version.
   Why now: client code freezes come about 20 Nov, before Black Friday on Fri 27 Nov 2026, and new clients are audited at
   onboarding through the January switch season.
   Angle: one template in 3 layers (the account, deliverability, and what a new subscriber receives over 14 days beside
   2 or 3 rivals), each check with a pass, where to look when it fails and a priority, then the report and the retainer.
   Read at source on 23 Oct 2026: Klaviyo Help (Smart Sending, delivery vs deliverability, attribution, peer groups, the
   deliverability hub), Klaviyo Academy (audit course, its acquisition and deliverability lessons, sender requirements),
   Klaviyo's March 2026 flow checklist and 2026 benchmarks, Postscript's quiet hours guide, Google's sender guidelines, FAQ
   and Postmaster Tools dashboards, Gmail Help on tabs, Yahoo's sender best practices, Microsoft's Outlook.com post
   (through a text reader), Suped's seed list guide, the Klaviyo Community competitor research thread, the MailCharts
   agencies page, and every company in the options table at its own pages. Reused from the library: Joy Joya's 362 brand
   test, the Aimerce audit time, the r/Klaviyo Smart Sending quote and the r/agency thread (both read live 3 Oct 2026).
   Left out on purpose: any Gmail tab percentage (none found with a method), vendor tab fix claims, the site's 93% and 128
   stores, any PilotX audit figure, retainer price ranges (weak sources), baskets at rival stores. harbourline.example,
   its rivals and every figure in the 2 illustrations and the worked example are invented. Buyer words; no dashes. */

const KL_DELIVERY = 'https://help.klaviyo.com/hc/en-us/articles/35283141315099'
const KL_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const KL_COURSE = 'https://academy.klaviyo.com/en-us/courses/audit-your-klaviyo-account'
const KL_ACQ = 'https://academy.klaviyo.com/en-us/courses/audit-your-klaviyo-account/lessons/audit-your-subscriber-acquisition'
const KL_HEALTH = 'https://academy.klaviyo.com/en-us/courses/audit-your-klaviyo-account/lessons/audit-your-account-health-and-deliverability'
const KL_CHECKLIST = 'https://klaviyo.com/blog/the-complete-checklist-audit-your-flows'
const KL_SMART = 'https://help.klaviyo.com/hc/en-us/articles/115002779311'
const R_SMART = 'https://www.reddit.com/r/Klaviyo/comments/1lcn30l/whats_an_email_mistake_you_made_early_on_that/'
const POSTSCRIPT = 'https://help.postscript.io/en/articles/13563937-guide-to-quiet-hours'
const KL_ATTR = 'https://help.klaviyo.com/hc/en-us/articles/1260804504250'
const KL_PEERS = 'https://help.klaviyo.com/hc/en-us/articles/360050180151'
const KL_SENDER = 'https://academy.klaviyo.com/verify-that-your-account-meets-new-sender-requirements'
const G_GUIDE = 'https://support.google.com/a/answer/81126'
const G_FAQ = 'https://support.google.com/a/answer/14229414'
const YAHOO = 'https://senders.yahooinc.com/best-practices/'
const MICROSOFT = 'https://techcommunity.microsoft.com/blog/outlook/strengthening-email-security-outlook-new-requirements-for-high-volume-senders/4399730'
const POSTMASTER = 'https://support.google.com/mail/answer/14668346'
const KL_HUB = 'https://help.klaviyo.com/hc/en-us/articles/18378819907995'
const GLOCK_TEST = 'https://glockapps.com/inbox-email-tester/'
const SUPED_SEEDS = 'https://www.suped.com/knowledge/email-deliverability/tools/how-accurate-are-seed-lists-for-email-deliverability-testing'
const GMAIL_TABS = 'https://support.google.com/mail/answer/3094499'
const K_RIVALS = 'https://community.klaviyo.com/strategic-advice-27/how-to-conduct-proper-competitor-research-for-email-marketing-15840'
const MC_AGENCIES = 'https://mailcharts.com/built-for/agencies'
const KL_ANALYTICS = 'https://help.klaviyo.com/hc/en-us/articles/115002779351'
const R_AGENCY = 'https://www.reddit.com/r/agency/comments/1s4iwpc/i_kept_losing_clients_who_couldnt_see_what_they/'
const AIMERCE = 'https://newsletter.aimerce.ai/p/we-audited-500-klaviyo-accounts-this-is-how-i-audit-klaviyo-flows'
const KL_PRICING = 'https://www.klaviyo.com/pricing'
const GLOCK_PRICE = 'https://glockapps.com/pricing/'
const INBOX_MONSTER = 'https://inboxmonster.com/pricing'
const VALIDITY = 'https://www.validity.com/everest/'
const MAILTRAP = 'https://mailtrap.io/pricing/'
const SUPED_PRICE = 'https://www.suped.com/pricing'
const MILLED = 'https://milled.com/pricing'
const MAILCHARTS = 'https://www.mailcharts.com/'
const PANORAMATA = 'https://www.panoramata.co/pricing'
const RGE = 'https://reallygoodemails.com/pricing'
const FLOWIUM = 'https://flowium.com/audit'
const NETALICO = 'https://netalico.com/pages/services-email-marketing'

export const post: BlogPost = {
  slug: 'email-marketing-audit',
  title: 'The email marketing audit: a checklist and template in 3 layers',
  dek: 'One audit template for retention agencies and brand CRM leads: the checks inside the email platform, the deliverability checks, and the first 14 days a new subscriber receives beside 2 or 3 competitors. Each check has a pass mark, where to look when it fails and a priority.',
  metaTitle: 'Email marketing audit: a checklist and template in 3 layers',
  description:
    'An email marketing audit template in 3 layers: the account, deliverability and what a new subscriber receives, each check with its pass mark and priority.',
  answer:
    'To do an email marketing audit, check 3 layers: inside the account (forms, flows, Smart Sending, segments, campaigns and attribution), deliverability (SPF, DKIM, DMARC, the Gmail, Yahoo and Microsoft sender rules, spam and bounce rates), and the customer’s view (what a new subscriber receives over 14 days, when, in which Gmail tab, beside 2 or 3 competitors). Give every failed check a priority and estimate its cost from the client’s own flow report. Obsession’s AI customers check the customer’s view as real subscribers of the brand and its competitors, keeping every email with the time it arrived.',
  primaryKeyword: 'email marketing audit',
  keywords: [
    'email marketing audit checklist',
    'email marketing audit template',
    'how to do an email marketing audit',
    'what to include in an email marketing audit',
    'klaviyo audit checklist',
    'email deliverability audit',
    'inbox placement test',
    'why are my klaviyo emails going to spam',
    'email competitor analysis',
  ],
  category: 'For agencies',
  published: '2026-10-23',
  updated: '2026-10-28',
  readingMinutes: 12,
  order: 14,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'qa',
    workspace: 'agency',
    art: {
      kind: 'report',
      title: 'harbourline.example · email marketing audit, 3 layers',
      period: 'Account read Monday · new subscriber and 2 competitors signed up Monday 09:00',
      cols: ['Check', 'Found', 'Priority'],
      rows: [
        { name: 'Basket reminder', cells: ['31% of entries skipped by Smart Sending', '1'], tone: 'fail' },
        { name: 'DMARC', cells: ['Published at p=none, From domain aligned', 'Pass'], tone: 'ok' },
        { name: 'Gmail spam rate', cells: ['0.14% in Postmaster Tools', '2'], tone: 'late' },
        { name: 'Welcome email', cells: ['4 min, Promotions tab, code works', 'Pass'], tone: 'ok' },
        { name: 'Text opt in', cells: ['No confirmation text in 48 h', '1'], tone: 'fail' },
        { name: 'Competitors, 14 days', cells: ['9 and 12 emails, against 5', 'Info'], tone: 'info' },
      ],
      notes: [
        'Fix first: the text confirmation, then Smart Sending on the basket reminder.',
        'Each estimate uses the client’s own flow report, halved.',
        'Every finding links to the email or the setting it came from.',
      ],
    },
  },


  blocks: [
    {
      kind: 'p',
      text: 'An email marketing audit for a Shopify or DTC brand checks 3 layers: inside the account, deliverability, and what a new subscriber receives. Retention agencies run it when they onboard a client, and brand CRM leads before each season.',
    },
    {
      kind: 'p',
      text: 'Layers 1 and 2 need the client’s login. For a prospect, run layer 3 alone, as an [outside audit without a Klaviyo login](/blog/audit-prospect-email-without-klaviyo-login).',
    },
    {
      kind: 'p',
      text: 'The platform’s reports cover layer 1 and part of layer 2, and they can’t show layer 3. [Klaviyo’s help centre](' +
        KL_DELIVERY +
        ') counts an email as delivered once the recipient’s mail server accepts it, even if it goes to spam, and a flow that never starts sends nothing to count.',
    },
    {
      kind: 'stat',
      value: '5.3%',
      label: 'of email sends were flows, which earned nearly 41% of email revenue',
      source: 'Klaviyo 2026 benchmarks',
      href: KL_BENCH,
    },

    { kind: 'h2', id: 'three-layers', text: 'What an email marketing audit covers' },
    {
      kind: 'list',
      items: [
        '**Inside the account:** how the programme is built and what it earns, from the platform’s settings and reports.',
        '**Deliverability:** whether mailbox providers accept and trust the mail, from DNS records, Google Postmaster Tools and the platform’s deliverability reports.',
        '**The customer’s view:** what a new subscriber receives over 14 days, when and in which tab, beside 2 or 3 competitors, from the emails and texts themselves.',
      ],
    },
    {
      kind: 'p',
      text: 'A finding in one layer often has its cause in another. A welcome email missing in layer 3 points to the flow’s trigger in layer 1, and a fall in opens at one mailbox provider points to layer 2.',
    },

    { kind: 'h2', id: 'template', text: 'The email marketing audit template' },
    {
      kind: 'p',
      text: 'Mark each check pass or fail, and give every fail a priority.',
    },
    {
      kind: 'list',
      items: [
        '**Priority 1, this week:** a message that never arrives, a failed authentication check, a broken code, or a Gmail spam rate at 0.3% or above.',
        '**Priority 2, this month:** a late or wrong message, a spam rate between 0.1% and 0.3%, or a setting that changes later reports, such as attribution.',
        '**Priority 3, next quarter:** results below the peer range when everything else passes.',
      ],
    },
    {
      kind: 'table',
      caption: 'The email marketing audit checklist: 19 checks in 3 layers',
      cols: ['Layer', 'Check', 'A pass looks like', 'Priority if it fails'],
      rows: [
        ['Account', 'Sign up forms', 'Each live form submits on a phone and feeds the welcome flow’s list', '1'],
        ['Account', 'Core flows', 'Welcome, basket, checkout, browse, post purchase and win back all Live', '1'],
        ['Account', 'Triggers and filters', 'The right trigger, and the basket flow drops buyers and checkout starters', '1'],
        ['Account', 'Smart Sending', 'Set on purpose on each reminder, with the skipped count known', '1'],
        ['Account', 'SMS rules', 'Confirmation arrives, STOP works, quiet hours set by state', '1'],
        ['Account', 'Segments', 'Campaigns go to people who opted in and still engage', '2'],
        ['Account', 'Attribution settings', 'Model and windows written beside every revenue figure', '2'],
        ['Account', 'Campaigns and benchmarks', 'Clicks and placed orders inside the peer range, with the right industry set', '3'],
        ['Deliverability', 'SPF, DKIM and DMARC', 'All pass, DMARC published, From domain aligned', '1'],
        ['Deliverability', 'Sending domain', 'Branded domain Active, sender on the brand’s own domain', '1'],
        ['Deliverability', 'Unsubscribe', 'One click header and a visible link, honoured within 48 hours', '1'],
        ['Deliverability', 'Gmail spam rate', 'Below 0.1% in Postmaster Tools, never 0.3%', '1 at 0.3%, else 2'],
        ['Deliverability', 'Bounces and complaints', 'No open alerts in the deliverability report', '2'],
        ['Deliverability', 'Seed list test', 'Inbox or a tab at every provider tested', '2'],
        ['Customer view', 'Welcome email', 'Arrives within your pass time with the promised code', '1'],
        ['Customer view', 'Welcome code', 'Works at checkout on a phone, as planned', '1'],
        ['Customer view', 'Basket and checkout reminders', 'Each arrives once, with product, photo and price', '1'],
        ['Customer view', 'Spam folder', 'Nothing from the brand in spam, with the tab recorded for each email', '1'],
        ['Customer view', 'Competitors, same 14 days', 'Counts, timing and first discount set beside 2 or 3 competitors', 'Input to the plan'],
      ],
    },

    { kind: 'h2', id: 'inside-the-account', text: 'Layer 1: inside the account' },
    {
      kind: 'p',
      text: '[Klaviyo Academy’s audit course](' +
        KL_COURSE +
        ') covers settings, account health and deliverability, sign ups, flows and campaigns.',
    },

    { kind: 'h3', id: 'forms', text: 'Sign up forms and list growth' },
    {
      kind: 'p',
      text: 'Submit every live form on a phone with a new address. [Klaviyo Academy’s acquisition lesson](' +
        KL_ACQ +
        ') points to 3 reports, including the sign up forms report for each form’s submit rate and the growth report for where subscribers come from. **A pass:** every form submits, shows its offer and feeds the welcome flow’s list. **If it fails,** check the form’s list, its display rules on small screens and any recent site change.',
    },

    { kind: 'h3', id: 'flows', text: 'Flows, triggers and filters' },
    {
      kind: 'p',
      text: '[Klaviyo’s March 2026 checklist](' +
        KL_CHECKLIST +
        ') names the core flows as welcome, abandoned cart, abandoned browse, post purchase, and win back or sunset. It asks for metric triggers where possible, and for the basket flow to exclude anyone who ordered or started checkout after entering it. **A pass:** each core flow exists once and every message is Live. **If it fails,** read each message’s Skipped reasons in Recipient activity, then the causes in [why a welcome or basket email never arrives](/blog/welcome-basket-email-not-sending).',
    },

    { kind: 'h3', id: 'smart-sending', text: 'Smart Sending and SMS rules' },
    {
      kind: 'p',
      text: 'By default, Smart Sending skips a message when the profile received another within 16 hours for email or 24 hours for SMS, and [Klaviyo’s help centre](' +
        KL_SMART +
        ') says skipped messages are not rescheduled. **A pass:** Smart Sending is set on purpose on each basket and checkout reminder, and last month’s skipped count is in the report. **If it fails,** put the skipped count into the revenue estimate in the report.',
    },
    {
      kind: 'quote',
      text: 'it sort of killed revenue quietly for weeks.',
      cite: 'A reply on r/Klaviyo about Smart Sending blocking basket emails, June 2025',
      href: R_SMART,
    },
    {
      kind: 'p',
      text: 'For texts, check the opt in confirmation, STOP and quiet hours. [Postscript’s guide](' +
        POSTSCRIPT +
        ') holds messages until waking hours, 8am to 9pm by default and 8am to 8pm in 5 states, and its Texas hours have to be switched on in compliance settings. Rules differ by country and by US state, and this is not legal advice.',
    },

    { kind: 'h3', id: 'segments-campaigns', text: 'Segments, campaigns and benchmarks' },
    {
      kind: 'p',
      text: 'Check who each campaign goes to and how often. **A pass:** campaigns go to people who opted in and still engage. Klaviyo compares results with a peer group of [roughly 100 similar companies](' +
        KL_PEERS +
        '), so check the industry in Organization settings first. Compare campaigns with campaigns, since flows had a 5.58% click rate against 1.69% in [Klaviyo’s benchmarks](' +
        KL_BENCH +
        '), and use clicks and placed orders, because [Klaviyo Academy](' +
        KL_HEALTH +
        ') warns that Apple Mail Privacy Protection may skew data.',
    },

    { kind: 'h3', id: 'attribution', text: 'Revenue attribution settings' },
    {
      kind: 'p',
      text: 'Write the attribution settings down before you quote any revenue. [Klaviyo’s attribution page](' +
        KL_ATTR +
        ') gives new accounts a last touch model with 5 day windows for email opens and clicks. Apple Privacy opens and bot clicks can be removed, and a change recalculates past data. **A pass:** the model and windows sit beside every revenue figure in the report.',
    },

    { kind: 'h2', id: 'deliverability', text: 'Layer 2: the deliverability audit' },

    { kind: 'h3', id: 'authentication', text: 'SPF, DKIM, DMARC and the sending domain' },
    {
      kind: 'p',
      text: 'Read the DNS records and the Authentication dashboard in Postmaster Tools. **A pass:** SPF and DKIM pass, DMARC is published (p=none meets the minimum), and the From domain aligns with the SPF or DKIM domain. In Klaviyo, [the sender requirements lesson](' +
        KL_SENDER +
        ') asks for the branded sending domain to show Active under Settings, Account, Domains, and for a default sender on the brand’s own domain, never @gmail.com or @yahoo.com.',
    },

    { kind: 'h3', id: 'sender-rules', text: 'Gmail, Yahoo and Microsoft sender rules' },
    {
      kind: 'list',
      items: [
        '**Gmail:** a sender of close to 5,000 messages a day to personal Gmail accounts [is a bulk sender permanently](' +
          G_FAQ +
          '). [Google’s guidelines](' +
          G_GUIDE +
          ') require SPF, DKIM, aligned DMARC, one click unsubscribe with a visible link and a spam rate below 0.3%, and recommend keeping it below 0.1%. Google recommends honouring unsubscribes within 48 hours, and has been ramping up enforcement since November 2025.',
        '**Yahoo:** [the same core rules](' +
          YAHOO +
          '), with unsubscribes honoured within 2 days and a spam rate below 0.3%.',
        '**Outlook.com:** domains sending over 5,000 emails a day need SPF and DKIM to pass and DMARC at p=none or stronger, aligned. [Microsoft has rejected mail that fails](' +
          MICROSOFT +
          ') since 5 May 2025.',
      ],
    },
    {
      kind: 'p',
      text: 'Klaviyo adds one click unsubscribe to marketing emails automatically, so check that each template still shows a visible unsubscribe link.',
    },

    { kind: 'h3', id: 'postmaster', text: 'Google Postmaster Tools' },
    {
      kind: 'p',
      text: 'Verify the domain in [Postmaster Tools](' +
        POSTMASTER +
        ') and read Compliance status, Spam Rate, Domain Reputation and Delivery Errors. The data covers personal Gmail accounts only. **A pass:** every requirement is met and spam stays below 0.1%. At 0.3%, Google’s FAQ says a bulk sender can’t get mitigation until the rate stays below it for 7 days in a row, so mark it priority 1.',
    },

    { kind: 'h3', id: 'bounces-complaints', text: 'Bounces, complaints and the deliverability score' },
    {
      kind: 'p',
      text: 'Klaviyo’s [deliverability hub](' +
        KL_HUB +
        ') scores the account each day from 30 days of open, click, bounce, unsubscribe and spam complaint rates, once it has sent 1,000 emails in 30 days, and raises alerts for high bounce, complaint and unsubscribe rates. **A pass:** Good (75 to 89) or Excellent (90 to 100), with no open alerts. **If it fails,** check the inbox provider breakdown for one provider behind the drop.',
    },

    { kind: 'h3', id: 'inbox-placement-test', text: 'What an inbox placement test measures' },
    {
      kind: 'p',
      text: 'A seed list test sends an email to test mailboxes at several providers and reports where it landed. [GlockApps](' +
        GLOCK_TEST +
        ') reports each result as Inbox, Tabs, Spam or Missing. The seeds have no history with the sender, and [Suped’s guide](' +
        SUPED_SEEDS +
        ') calls the results directional and warns against treating them as a final deliverability score. **A pass:** inbox or a tab at every provider tested.',
    },

    { kind: 'h3', id: 'gmail-tabs', text: 'The Gmail tabs, as Google describes them' },
    {
      kind: 'p',
      text: '[Gmail Help](' +
        GMAIL_TABS +
        ') lists 5 inbox tabs, with Promotions for deals, offers and other promotional emails. Gmail sorts mail automatically and learns from where each person moves it, and Google’s sender FAQ doesn’t mention the tab. Record the tab each email reached in each test inbox, with the date, as what that inbox showed, and report it apart from spam placement.',
    },

    { kind: 'h2', id: 'customer-view', text: 'Layer 3: the customer’s view' },
    {
      kind: 'p',
      text: 'In a test of 362 ecommerce brands from new addresses, published in July 2026, [Joy Joya](' +
        JOYJOYA +
        ') found that 158 sent no welcome email and 20 sent an offer that didn’t match the pop up. Layer 3 runs the same test at the client for 14 days, beside 2 or 3 competitors. It is a form of [customer journey testing](/blog/ai-customers-find-revenue-leaks).',
    },

    { kind: 'h3', id: 'test-subscriber', text: 'Set up the test subscriber' },
    {
      kind: 'list',
      items: [
        '**A new Gmail address for the client and for each competitor,** so Gmail shows the tab, plus a control address at the client, signed up through the footer form in the same minute.',
        '**A phone number that has never opted in,** and a private browser window on a phone.',
        '**A sheet** with the day, time, sender, subject, offer, code and tab, and a screenshot. Save each email itself too, since it carries its arrival time.',
        '**The client’s OK,** and the test addresses sent to whoever reports their numbers.',
      ],
    },

    { kind: 'h3', id: 'first-14-days', text: 'The first 14 days at the client' },
    {
      kind: 'p',
      text: 'On day 1, sign up through the pop up, opt in to texts and try the welcome code on a phone. Leave a basket and a checkout from separate addresses, as in the outside audit. Then record every email and text for 14 days. **A pass:** every Live message arrives on time with working codes and links, and none lands in spam. **If one is missing,** go back to its flow status, Skipped reasons and Smart Sending in layer 1.',
    },

    { kind: 'h3', id: 'email-competitor-analysis', text: 'Email competitor analysis: 2 or 3 competitors' },
    {
      kind: 'p',
      text: 'Sign the competitor addresses up in the same minute, through the public sign up any customer can use. A Klaviyo Community guide to [competitor research](' +
        K_RIVALS +
        ') suggests 3 to 5 competitors, a separate inbox and a sheet kept over a few weeks. For an audit report, 2 or 3 competitors keep the comparison readable.',
    },
    {
      kind: 'art',
      caption: 'An invented store and 2 invented competitors, signed up in the same minute: the comparison the client reads in the audit report.',
      art: {
        kind: 'report',
        title: 'harbourline.example and 2 competitors',
        period: 'A new subscriber’s first 14 days, signed up the same Monday at 09:00, with 1 new Gmail address and 1 phone each',
        cols: ['Measure', 'Harbourline', 'Competitor A', 'Competitor B'],
        rows: [
          { name: 'Welcome email', cells: ['4 min', '2 min', '11 min'], tone: 'info' },
          { name: 'Welcome tab', cells: ['Promotions', 'Promotions', 'Primary'], tone: 'info' },
          { name: 'Welcome code', cells: ['10%, worked', '15%, worked', 'No code'], tone: 'info' },
          { name: 'Emails in 14 days', cells: ['5', '9', '12'], tone: 'info' },
          { name: 'Texts in 14 days', cells: ['0, no confirmation', '3', '4'], tone: 'fail' },
          { name: 'First discount', cells: ['Day 9, 15%', 'Day 3, 20%', 'Day 6, free delivery'], tone: 'late' },
        ],
        notes: [
          'Competitor A sent its first discount 6 days before the client.',
          'Competitor B’s welcome reached Primary in this 1 inbox, recorded as what that inbox showed.',
          'Every cell links to the email or text it came from.',
        ],
      },
    },
    {
      kind: 'p',
      text: 'Clients ask for this comparison. MailCharts quotes an account manager whose clients would [“constantly be asking us to produce a competitive analysis based on email”](' +
        MC_AGENCIES +
        ').',
    },
    {
      kind: 'p',
      text: 'By hand, layer 3 costs little for 1 client. For 10 clients with 3 competitors each, it takes 50 new addresses and 14 days of reading inboxes, and the record lives only in your sheet. Obsession runs layer 3 today. It makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof. Its [delivery monitoring](/recipes/delivery-monitoring) sends AI customers with real inboxes and numbers through the first 14 days and flags anything that never comes, and its [email and SMS tracking](/recipes/email-sms-tracking) subscribes an AI customer to each competitor’s emails and texts.',
    },
    {
      kind: 'cta',
      text: 'Obsession checks 5 stores free, prospects or clients (a client’s with their OK): an AI customer signs up as each store’s new customer, opts in to texts and leaves a basket, and you get what happened within 4 days, with proof.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'audit-report', text: 'The report the client reads' },
    {
      kind: 'p',
      text: 'Keep the report to what the client can check and act on.',
    },

    { kind: 'h3', id: 'findings', text: 'Findings, each with its evidence' },
    {
      kind: 'p',
      text: 'Write each finding in 1 sentence with a time or a number in it, and put the evidence beside it: the email as it arrived, the setting or the dashboard. For example: opted in to texts at 09:01 on Monday, and no confirmation text arrived in 48 hours.',
    },

    { kind: 'h3', id: 'revenue-estimate', text: 'The revenue estimate, in their numbers' },
    {
      kind: 'p',
      text: 'For each priority 1 finding, take 3 figures from a month when the flow worked: the people who entered it, its Placed Order rate, which [Klaviyo’s flow analytics](' +
        KL_ANALYTICS +
        ') shows by default, and the average order. Multiply them and halve the result, since attributed revenue includes orders that would have happened anyway.',
    },
    {
      kind: 'p',
      text: 'With invented figures: 1,840 entries × 3.1% × £48 is £2,738, so the estimate is about £1,369 a month while the welcome email is missing. For a Smart Sending finding, use the skipped count in place of the entries.',
    },

    { kind: 'h3', id: 'fix-order', text: 'The fix order' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Priority 1 this week,** each fix with an owner and a date.',
        '**Priority 2 this month,** starting with Smart Sending and attribution, since they change every later report.',
        '**Priority 3 as next quarter’s plan.**',
        '**A retest for every fix:** run layer 3 again once the fix is live, and attach the new email to the finding.',
      ],
    },

    { kind: 'h3', id: 'retainer', text: 'How the audit sets up the retainer' },
    {
      kind: 'p',
      text: 'The first audit is the baseline. Run layer 3 again after each fix and every month, and the report shows each finding as found, fixed and checked again. That answers a problem [an agency owner on r/agency](' +
        R_AGENCY +
        ') described: losing clients who couldn’t see what they were paying for. The weekly format is in [proof that every flow fired](/blog/show-clients-every-flow-fired), and the competitor addresses keep collecting for each monthly report.',
    },

    { kind: 'h2', id: 'options', text: 'Email audit tools compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, which does some of this, so every line about another tool is taken from that tool’s own pages, checked on 23 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to run each layer of the audit. Prices from each company’s own pages, 23 October 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Doing nothing',
          'Costs no time',
          'Free',
          'A flow that stops shows only as a zero in its report',
          'Accounts tested since their last change',
        ],
        [
          'By hand: new Gmail addresses, a phone and a sheet',
          'What 1 subscriber received, with the tab, at the client and its competitors',
          'Free, plus your hours\n30 minutes to 2 hours a manual flow audit, in [Aimerce’s own figures](' + AIMERCE + ')',
          '1 inbox at 1 moment, no history before the sign up, more work per client',
          '1 to 5 clients, at onboarding',
        ],
        [
          'Klaviyo’s own reports: flow analytics, benchmarks, the deliverability hub',
          'How the programme is built and what it earns, against about 100 peers',
          'Included in the account\n[Klaviyo](' + KL_PRICING + '): free to 250 active profiles, paid plans by estimate',
          'Counts mail in spam as delivered, and shows no subscriber’s inbox',
          'Layer 1 on every audit',
        ],
        [
          'Google Postmaster Tools',
          'Gmail’s own spam rate, reputation and compliance status',
          'Free',
          'Personal Gmail accounts only, nothing on tabs',
          'Every client that sends to Gmail',
        ],
        [
          'Seed list tests: [GlockApps](' + GLOCK_PRICE + '), [Inbox Monster](' + INBOX_MONSTER + '), [Validity Engage](' + VALIDITY + ')',
          'Placement at many providers from 1 send',
          'GlockApps: 2 free tests, then $59, $99 or $129 a month\nInbox Monster: from $15,000 a year\nValidity Engage, now with Everest: contact sales',
          'Test mailboxes with no subscriber history, so the result is directional',
          'Finding the provider behind a drop',
        ],
        [
          'Testing and DMARC: [Mailtrap](' + MAILTRAP + '), [Suped](' + SUPED_PRICE + ')',
          'Mailtrap: tests emails before they reach anyone\nSuped: monitors DMARC',
          'Mailtrap: free, Basic $17 a month\nSuped: free, Business $24 a month',
          'Neither pricing page lists seed placement tests',
          'Template checks and DMARC rollouts',
        ],
        [
          'Email libraries: [Milled](' + MILLED + '), [MailCharts](' + MAILCHARTS + '), [Panoramata](' + PANORAMATA + '), [Really Good Emails](' + RGE + ')',
          'Searchable archives of brand emails, with flows, SMS, ads and landing pages at Panoramata',
          'Milled: Pro $83.25, Team $249.92 a month, billed yearly\nMailCharts: contact us\nPanoramata: $99, $179 or $399 a month\nReally Good Emails: free gallery',
          'Only the brands and messages each collects, and no pricing page mentions Gmail tabs',
          'Category research',
        ],
        [
          'Agency audits: [Flowium](' + FLOWIUM + '), [Netalico](' + NETALICO + ')',
          'A team reads the account and presents findings',
          'Flowium: free, with Klaviyo Manager access\nNetalico: $1,000 one time',
          'Flowium needs Manager access before any finding, and each audit is 1 snapshot',
          'Brands without an agency',
        ],
        [
          'Obsession (ours): [Delivery monitoring](/recipes/delivery-monitoring), [Email and SMS tracking](/recipes/email-sms-tracking), [Competitor tracking](/recipes/competitor-tracking)',
          'AI customers with real inboxes and numbers live the first 14 days and flag anything that never comes\nAn AI customer logs every competitor email, text, offer and code on 1 timeline',
          'Running now: 5 stores checked free\nCredit-based plans, like Claude’s',
          'Sees what its own AI customers receive',
          'What a real subscriber gets from each client and competitor, every week, kept as proof',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For layer 3 across many clients and their competitors every week, use Obsession. For 1 to 5 clients audited at onboarding, Klaviyo’s reports, Postmaster Tools, a few new Gmail addresses and a sheet cover all 3 layers, and no paid tool is needed.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'list',
      items: [
        '**A layer 3 result covers 1 inbox at 1 moment.** Gmail may sort the same email differently for a long time customer.',
        '**A missing email shows that nothing arrived.** The cause sits in layer 1 or layer 2.',
        '**Seed tests and Postmaster Tools describe providers in aggregate.** Neither shows what a particular subscriber received.',
        '**Every revenue figure is an estimate,** halved because attribution includes orders that would have happened anyway.',
        '**Competitor history starts on the day you subscribe.** Earlier emails can’t be recovered from a new address.',
      ],
    },
    {
      kind: 'p',
      text: 'Black Friday is Friday 27 November 2026. Run the audit on each client before their code freeze, around 20 November for many stores, and sign the competitor addresses up this week, so that 14 days of competitor mail exist before the first Black Friday sends.',
    },
    {
      kind: 'cta',
      text: 'Delivery monitoring proves every email, text and login code arrives: after every release, AI customers with real inboxes and numbers live your first 14 days and flag anything that never comes. It runs now, on credit-based plans like Claude’s.',
      to: '/recipes/delivery-monitoring',
      label: 'See delivery monitoring',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is an email marketing audit?',
          a: 'An email marketing audit reviews how a brand’s email and SMS programme is built, whether its mail reaches the inbox, and what a new subscriber receives, with each finding ranked by priority.',
        },
        {
          q: 'What should an email marketing audit include?',
          a: 'Checks inside the account (forms, flows, Smart Sending, SMS rules, segments, campaigns and attribution), deliverability checks (authentication, sender rules, Postmaster Tools, bounces, complaints, a seed test), and a 14 day test as a new subscriber beside 2 or 3 competitors. They work on any email platform.',
        },
        {
          q: 'What is an email deliverability audit?',
          a: 'It checks whether mailbox providers accept and trust a sender’s mail: SPF, DKIM and DMARC, the Gmail, Yahoo and Microsoft sender rules, the Gmail spam rate, bounces, complaints and a seed list test. GlockApps’ free plan includes 2 tests.',
        },
        {
          q: 'Why are my Klaviyo emails going to spam?',
          a: 'Check the spam rate and Compliance status in Postmaster Tools, SPF, DKIM and DMARC alignment and the branded sending domain first, then whether campaigns go to people who no longer engage. Klaviyo counts an email as delivered once the receiving server accepts it, so its delivery rate won’t show spam placement.',
        },
        {
          q: 'Why are my emails going to Promotions in Gmail?',
          a: 'Gmail sorts mail into tabs automatically, and Gmail Help describes Promotions as the tab for deals, offers and other promotional emails. Promotions is a tab inside the inbox, and Gmail learns from where each person moves their mail, so record the tab your test inbox saw as that inbox’s view.',
        },
        {
          q: 'Why are my email open rates dropping?',
          a: 'Check whether Apple Privacy opens are counted, whether Postmaster Tools shows a rising spam rate or falling reputation, and whether one mailbox provider accounts for the drop. Compare clicks and placed orders too, because Apple Mail Privacy Protection may skew open data.',
        },
        {
          q: 'How do you do an email competitor analysis?',
          a: 'Sign up to 2 or 3 competitors from new addresses in the same minute as the client, and record every email and text for 14 days: the time, offer, code, first discount and Gmail tab. Libraries such as Milled and Panoramata add history for the brands they collect.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Microsoft’s post would not load directly, so we read it through a text reader. Milled’s pricing page showed a bot check on 23 October, so its prices are as the search result for that page showed them that day, and the Internet Archive’s copy of the page from 10 February 2026 shows them as the monthly cost of a yearly plan. MailCharts’ pricing link now leads to Litmus’s contact sales page, and Validity’s Everest page now presents Validity Engage. Netalico’s page marked its $1,000 audit as sold out. The r/Klaviyo and r/agency threads were checked live on 3 October 2026. We did not run any of the tools in the table. harbourline.example, its competitors and every figure in the 2 illustrations and the worked example are invented.',
    },
  ],

  sources: [
    { title: 'Deliverability vs. delivery for each channel', publisher: 'Klaviyo Help Center', url: KL_DELIVERY, date: '2026-02-03' },
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: KL_BENCH, date: '2026' },
    { title: 'Audit your Klaviyo account', publisher: 'Klaviyo Academy', url: KL_COURSE },
    { title: 'Audit your subscriber acquisition', publisher: 'Klaviyo Academy', url: KL_ACQ },
    { title: 'The complete checklist to audit your flows', publisher: 'Klaviyo (Maria Trotta)', url: KL_CHECKLIST, date: '2026-03-31' },
    { title: 'Understanding Smart Sending in Klaviyo', publisher: 'Klaviyo Help Center', url: KL_SMART, date: '2026-10-22' },
    { title: 'What’s an email mistake you made early on', publisher: 'r/Klaviyo', url: R_SMART, date: '2025-06-16' },
    { title: 'Guide to quiet hours', publisher: 'Postscript Help Center', url: POSTSCRIPT, date: '2026-08-18' },
    { title: 'Understanding peer groups and industry benchmarks', publisher: 'Klaviyo Help Center', url: KL_PEERS, date: '2025-09-29' },
    { title: 'Audit your account health and deliverability', publisher: 'Klaviyo Academy', url: KL_HEALTH },
    { title: 'Understanding Klaviyo message attribution', publisher: 'Klaviyo Help Center', url: KL_ATTR, date: '2026-03-10' },
    { title: 'Verify that your account meets new sender requirements', publisher: 'Klaviyo Academy', url: KL_SENDER },
    { title: 'Email sender guidelines FAQ', publisher: 'Google Workspace Admin Help', url: G_FAQ },
    { title: 'Email sender guidelines', publisher: 'Google Workspace Admin Help', url: G_GUIDE },
    { title: 'Sender best practices', publisher: 'Yahoo Sender Hub', url: YAHOO },
    { title: 'Strengthening email ecosystem: Outlook’s new requirements for high volume senders', publisher: 'Microsoft Tech Community', url: MICROSOFT, date: '2025-04-30' },
    { title: 'Postmaster Tools dashboards', publisher: 'Gmail Help', url: POSTMASTER },
    { title: 'Understanding the email deliverability hub in Klaviyo', publisher: 'Klaviyo Help Center', url: KL_HUB, date: '2025-08-05' },
    { title: 'Inbox email tester', publisher: 'GlockApps', url: GLOCK_TEST },
    { title: 'How accurate are seed lists for email deliverability testing?', publisher: 'Suped', url: SUPED_SEEDS, date: '2026-10-16' },
    { title: 'Organize your emails into categories', publisher: 'Gmail Help', url: GMAIL_TABS },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'How to conduct proper competitor research for email marketing', publisher: 'Klaviyo Community', url: K_RIVALS, date: '2025-01-13' },
    { title: 'MailCharts for agencies', publisher: 'MailCharts (Validity)', url: MC_AGENCIES },
    { title: 'Understanding flow analytics', publisher: 'Klaviyo Help Center', url: KL_ANALYTICS, date: '2026-10-07' },
    { title: 'I kept losing clients who couldn’t see what they were paying for', publisher: 'r/agency', url: R_AGENCY, date: '2026' },
    { title: 'We audited 500 Klaviyo accounts: this is how I audit Klaviyo flows', publisher: 'Aimerce (vendor)', url: AIMERCE, date: '2025-07-11' },
    { title: 'Pricing', publisher: 'Klaviyo', url: KL_PRICING },
    { title: 'Pricing', publisher: 'GlockApps', url: GLOCK_PRICE },
    { title: 'Pricing', publisher: 'Inbox Monster', url: INBOX_MONSTER },
    { title: 'Everest, now part of Validity Engage', publisher: 'Validity', url: VALIDITY },
    { title: 'Pricing', publisher: 'Mailtrap', url: MAILTRAP },
    { title: 'Pricing', publisher: 'Suped', url: SUPED_PRICE },
    { title: 'Pricing', publisher: 'Milled', url: MILLED },
    { title: 'MailCharts from Validity', publisher: 'MailCharts', url: MAILCHARTS },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Pricing', publisher: 'Really Good Emails', url: RGE },
    { title: 'Free email marketing audit', publisher: 'Flowium', url: FLOWIUM },
    { title: 'Email marketing services', publisher: 'Netalico', url: NETALICO },
  ],

  related: [
    'audit-prospect-email-without-klaviyo-login',
    'welcome-basket-email-not-sending',
    'show-clients-every-flow-fired',
    'recipe:delivery-monitoring',
    'recipe:email-sms-tracking',
    'recipe:competitor-tracking',
    '/use-cases/leak-checks-for-retention-agencies',
  ],
}
