import type { BlogPost } from './types'

/* Revenue team guides, spec 7 (_research/seo/revenue-teams-11nov/WRITER_BRIEF.md and PLAN.md, 11 Nov 2026). It owns
   "qbr template", with quarterly business review template, qbr template examples, qbr presentation and upsell signals
   (Google autocomplete, US and UK, 11 Nov: demand.json, account managers; "upsell signals" returned no suggestions but
   has a page 1). Readers: account managers and customer success at software companies whose product reaches their
   accounts' customers (email and SMS platforms, help desks and AI support, messaging and login codes, loyalty and
   reviews). Persona key cs. Page 1 is whiteboard and strategy-tool templates plus a Reddit thread; none has a slide for
   what the account's customers received, so this guide adds the before and after slide and the upsell slide (texts
   never set up, no browse flow), with the method by hand.
   Read at the source on 11 Nov 2026: Gainsight's QBR guide (undated) and pricing page; ChurnZero's QBR blueprint
   (updated 16 Oct 2026); Miro's QBR presentation template (undated); Smartsheet's QBR templates (updated 20 Oct 2022);
   Klaviyo's help articles on browse abandonment (7 Oct 2026), onsite tracking (30 Mar 2026), Smart Sending (22 Oct
   2026) and SMS consent (21 Oct 2026); Exa's home and pricing pages.
   Left out on purpose: Gainsight's secondhand figures (McKinsey, Salesforce, Oracle), ChurnZero's price (no pricing
   page found), checkout and payment vendors as an example (payment options on a live page weren't found), any revenue
   figure for a browse flow or texts, any promised lift. Obsession is described in the words of site.ts, /sales, the
   account watch, email and SMS tracking and delivery monitoring recipes, and the platform-by-headers line on the CRO
   agencies page. Hartwell, Tamsin, Corvid and Ashby are invented, at .example addresses, as is every time and number
   in the examples. No dashes. */

const GAINSIGHT_GUIDE = 'https://www.gainsight.com/essential-guide/quarterly-business-reviews-qbrs/'
const CHURNZERO = 'https://churnzero.com/blog/quarterly-business-reviews/'
const MIRO = 'https://miro.com/templates/qbr-presentation/'
const SMARTSHEET = 'https://www.smartsheet.com/business-review-qbr-templates'
const KLAVIYO_BROWSE = 'https://help.klaviyo.com/hc/en-us/articles/115002775252'
const KLAVIYO_ONSITE = 'https://help.klaviyo.com/hc/en-us/articles/115005076767'
const KLAVIYO_SMART = 'https://help.klaviyo.com/hc/en-us/articles/115002779311'
const KLAVIYO_SMS = 'https://help.klaviyo.com/hc/en-us/articles/360035056972'
const EXA = 'https://exa.ai/'
const GAINSIGHT_PRICING = 'https://www.gainsight.com/pricing/'
const EXA_PRICING = 'https://exa.ai/pricing'

export const post: BlogPost = {
  slug: 'qbr-template',
  title: 'QBR template for account managers: show the customer what its own customers received',
  dek: 'Nine slides for a quarterly business review, each with where its numbers come from. It adds the slide published templates leave out: what the account’s customers received, before and after, with screenshots.',
  metaTitle: 'QBR template for account managers: what customers received',
  description:
    'QBR template for account managers and customer success: 9 slides written out, plus a before and after slide built on what the account’s customers received.',
  answer:
    'A QBR template is the slide deck an account manager brings to a quarterly business review, from the account’s goals and results to the decisions it ends on. A complete one adds what the account’s customers received before and after last quarter’s changes, from the welcome email to the cart reminder, each dated with a screenshot. Obsession keeps what each account shows only to its customers, by API, MCP (the standard way AI agents call tools) or a table.',
  primaryKeyword: 'qbr template',
  keywords: [
    'qbr template',
    'quarterly business review template',
    'qbr template examples',
    'qbr presentation',
    'qbr template customer success',
    'qbr template ppt',
    'upsell signals',
  ],
  category: 'Watch other companies',
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'hartwell.example · before and after',
      period: 'Example: an email and SMS platform’s account, Q3 beside Q4',
      cols: ['A new customer got', 'Tue 4 Aug', 'Mon 2 Nov'],
      rows: [
        { name: 'Welcome email', cells: ['8 min, no code', '3 min, 10% code'], tone: 'ok' },
        { name: 'Cart reminder', cells: ['None in 48 hours', '1 hour 5 min'], tone: 'ok' },
        { name: 'Checkout reminder', cells: ['None in 48 hours', 'None in 48 hours'], tone: 'fail' },
        { name: 'Browse reminder', cells: ['None in 24 hours', 'None in 24 hours'], tone: 'info' },
        { name: 'Texts', cells: ['No opt-in on the form', 'No opt-in on the form'], tone: 'info' },
      ],
      notes: [
        'Hartwell is an invented coffee store. Each cell links to its email or screenshot.',
        'The browse and texts rows go on slide 6, as messages not set up yet.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A QBR template is the slide deck an account manager brings to a quarterly business review, from the account’s goals and results to the decisions it ends on. A complete one adds what the account’s customers received before and after last quarter’s changes, from the welcome email to the cart reminder, each dated with a screenshot. The 9 slides suit account managers and customer success teams at software companies whose product reaches their accounts’ customers. That covers email and SMS platforms, help desks and AI support, messaging and login code providers, and loyalty and reviews apps.',
    },
    {
      kind: 'p',
      text: 'In the deck, the account is the company that pays for your product, and its customers are the people who buy from it. Your product’s reports show what the account sent. The before and after slide shows what arrived at the other end, each message dated with its screenshot.',
    },

    { kind: 'h2', id: 'what-it-contains', text: 'What a quarterly business review template contains' },
    {
      kind: 'p',
      text: `[Gainsight’s guide to QBRs](${GAINSIGHT_GUIDE}) defines a quarterly business review as a strategic meeting held once every three months between a vendor and its customer. [ChurnZero’s blueprint](${CHURNZERO}) advises against focusing on adoption or usage rates. The free templates that rank for the phrase follow the same order as both guides.`,
    },
    {
      kind: 'table',
      caption: 'How the published QBR templates are built, from each source’s own page on 11 November 2026',
      cols: ['Source', 'Its parts', 'Format', 'Date'],
      rows: [
        ['Gainsight’s guide', 'Performance review, challenges, goals, ROI shown, next steps', 'A guide, no file', 'Undated'],
        ['ChurnZero’s blueprint', 'Customer goals, results such as time saved, baseline to target, next steps', 'A guide, no file', 'Updated 16 Oct 2026'],
        [`[Miro’s template](${MIRO})`, 'Introduction, current position, financial performance, next 90 days', 'Free whiteboard template', 'Undated'],
        [`[Smartsheet’s collection](${SMARTSHEET})`, '6 templates, including an executive QBR and a sales QBR', 'Free PowerPoint, Excel, Word and PDF', 'Updated 20 Oct 2022'],
      ],
    },
    {
      kind: 'p',
      text: 'Every number in those templates comes from the vendor’s product and the account’s own dashboards: sends, tickets, seats and usage. None of the 4 has a slide for what the account’s customers received. That is the part the account’s executives can check on their own phones, and it is what your product exists to deliver.',
    },

    { kind: 'h2', id: 'slide-by-slide', text: 'The QBR template, slide by slide' },
    {
      kind: 'p',
      text: 'Nine slides fit Gainsight’s advice to keep the meeting to about an hour. Each slide states facts the account can check, and the deck ends on decisions.',
    },
    {
      kind: 'table',
      caption: 'The QBR template: 9 slides, what goes on each and where its facts come from. Copy it into PowerPoint, Google Slides or Keynote',
      cols: ['Slide', 'What goes on it', 'Where it comes from'],
      rows: [
        ['1. Goals and agenda', 'The 2 or 3 goals the account set last quarter, in its words', 'Last QBR’s notes and the success plan'],
        ['2. Results against the goals', 'Each goal’s number now, against its target', 'Your product’s reports and the account’s own figures'],
        ['3. Adoption', 'Features in use, volume and seats, against last quarter', 'Your product’s usage data'],
        ['4. What its customers received', 'Each message and answer a new customer got, last quarter beside this one, with screenshots', 'A customer account at the account’s own store or app'],
        ['5. Support and incidents', 'Tickets, outages and fixes since the last QBR', 'Your help desk and status page'],
        ['6. What it hasn’t set up yet', 'Journeys its customers never receive, such as texts or a browse reminder', 'The same customer account'],
        ['7. Next quarter’s plan', 'Roadmap items and changes tied to each goal', 'Your product team'],
        ['8. Risks and the renewal', 'The renewal date, open issues and anything at risk', 'Your CRM'],
        ['9. Decisions, owners and dates', 'Each decision with its owner and date, and the next QBR booked', 'The meeting'],
      ],
    },
    {
      kind: 'p',
      text: 'Slides 4 and 6 are the ones published templates leave out. Slide 4 shows the account that its customers’ experience changed because of the work done since the last review. Slide 6 turns the same screenshots into the next thing to set up. It comes after the account has seen its results, which meets ChurnZero’s warning against QBRs built around the vendor’s upsell.',
    },
    {
      kind: 'p',
      text: 'Where slide 8 needs the cost of a gap in the account’s own numbers, the [sales business case template](/blog/sales-business-case-template) opens on a dated screenshot too. Keep each finding as a field on the account in your CRM too, as the guide to [CRM data enrichment fields](/blog/crm-data-enrichment-fields) sets out, so the next QBR starts from last quarter’s rows.',
    },

    { kind: 'h2', id: 'before-and-after', text: 'Building the before and after slide' },
    {
      kind: 'p',
      text: 'The slide puts 2 runs of the same journeys side by side: one from before last quarter’s changes, and one taken 1 to 2 weeks before the meeting. Each run is a new customer at the account’s own store or app, with every message logged as it arrives.',
    },

    { kind: 'h3', id: 'journeys', text: '1. Pick the journeys your product powers' },
    {
      kind: 'p',
      text: 'Choose the moments where your product reaches the account’s customers. For an email and SMS platform, that means the [welcome series](/glossary/welcome-series), the browse reminder, the [cart reminder](/glossary/abandoned-cart-email) and the checkout reminder. For a help desk, it means a question sent by email and one asked in chat. For a messaging or login code provider, it means the code sent at sign-up and at log-in. For a loyalty app, it means the rewards welcome after joining.',
    },

    { kind: 'h3', id: 'sign-up', text: '2. Sign up as a new customer, with an address and number for each account' },
    {
      kind: 'p',
      text: 'Agree it with your contact at the account first, so nobody there mistakes the test for a real customer. Then use the public form any customer sees, with a new email address and a spare phone number kept for that account. Buy nothing: stop at the payment step and screenshot every page up to it. Before you start, write down how long you will wait before calling a message missing, such as 48 hours for a cart reminder or 10 minutes for a login code.',
    },

    { kind: 'h3', id: 'browse', text: '3. Test the browse reminder in the same browser' },
    {
      kind: 'p',
      text: `A browse reminder goes only to a visitor the email platform already knows. [Klaviyo’s help centre](${KLAVIYO_BROWSE}), updated 7 October 2026, says its browse abandonment flows are triggered by the Viewed Product metric and track identifiable browsers. [Its onsite tracking guide](${KLAVIYO_ONSITE}) says a visit alone doesn’t make a browser known, while a sign-up through its form or a click from one of the brand’s emails does.`,
    },
    {
      kind: 'p',
      text: `So sign up through the form first, then open a product page in the same browser. Klaviyo’s build steps add a delay of at least an hour before the first message. [Smart Sending](${KLAVIYO_SMART}), Klaviyo’s limit on how many emails one person receives, uses a 16 hour window by default, so let the welcome emails finish before you test. Other email platforms set their own rules, so check the account’s.`,
    },

    { kind: 'h3', id: 'log', text: '4. Log every message with its time and screenshot' },
    {
      kind: 'p',
      text: 'Keep a sheet with one row per message. Give each row the journey, the time it arrived, the subject line, any code and a link to the screenshot. Save the original email too, because its headers carry the arrival time and the platform that sent it. [The sample data](/sample-output) has one real finding in that form: a £40 basket left at 02:57 on 22 September at a UK skincare store, and no reminder in the 48 hours watched.',
    },
    {
      kind: 'art',
      caption: 'One week at an account’s store as a new customer: each row becomes a line on slide 4 or slide 6.',
      art: {
        kind: 'log',
        title: 'hartwell.example · a new customer',
        who: 'hartwell.cs@yourcompany.example, signed up through the footer form on Mon 2 Nov, 09:00',
        rows: [
          { time: 'Mon 09:03', text: 'Welcome email with a 10% code', detail: 'Sent by your platform, sender checked', tone: 'ok' },
          { time: 'Tue 09:05', text: 'Second welcome email: bestsellers', detail: 'Every link opens', tone: 'ok' },
          { time: 'Thu 10:00', text: 'Viewed a product, same browser', detail: 'No browse reminder in 24 hours', tone: 'fail' },
          { time: 'Fri 10:15', text: 'Left a £32 basket', detail: 'Reminder at 11:20, with the basket', tone: 'ok' },
          { time: 'Fri 10:30', text: 'Left at the payment step', detail: 'None in 48 hours', tone: 'fail' },
        ],
        foot: 'Slide 4 takes the cart and checkout rows. Slide 6 takes the browse row and the form with no text opt-in.',
      },
    },

    { kind: 'h3', id: 'write-it', text: '5. Write each row as a fact the account can check' },
    {
      kind: 'p',
      text: 'Put both runs in one table with their dates in the header. Write “None in 48 hours” rather than “broken”, and give the window you waited. Leave revenue out of it: the slide shows what arrived, and the account’s own reports show what it earned.',
    },

    { kind: 'h2', id: 'examples', text: 'QBR template examples by vendor type' },
    {
      kind: 'p',
      text: 'The same 2 slides work for any product that reaches the account’s customers. Each row is an invented example at a .example address.',
    },
    {
      kind: 'table',
      caption: 'Example only: invented accounts, times and findings, to show slides 4 and 6 for 4 kinds of vendor. Before is August, after is November',
      cols: ['Vendor and account', 'Journey on slide 4', 'Before', 'After', 'Slide 6: not set up'],
      rows: [
        [
          'Email and SMS platform\nhartwell.example, a coffee store',
          'Cart reminder',
          'None in 48 hours',
          '1 hour 5 minutes, with the basket',
          'No text opt-in on the form\nNo browse reminder in 24 hours',
        ],
        [
          'Help desk and AI support\ntamsin.example, a furniture store',
          'Delivery question by email',
          '31 hours, against 24 promised on its help page',
          '6 hours',
          'No chat answer from 22:00 to 07:00',
        ],
        [
          'Messaging and login codes\ncorvid.example, a money app',
          'Log-in code by text, UK number',
          'None in 10 minutes',
          '7 seconds',
          'Codes by text only, no email backup',
        ],
        [
          'Loyalty and reviews\nashby.example, an outdoor store',
          'Rewards welcome after joining',
          'None in 48 hours',
          '4 minutes, with 100 points',
          'No referral offer in any email',
        ],
      ],
    },
    {
      kind: 'list',
      items: [
        '**Email and SMS platform.** The account’s head of ecommerce sees the cart reminder that started arriving after the flow was rebuilt, with both screenshots. Open slide 6 on the form that asks for no phone number.',
        '**Help desk and AI support.** The account’s head of support sees reply times as a customer meets them, beside the promise on its own help page. Open slide 6 on the chat question sent at 23:00 that waited until morning.',
        '**Messaging and login codes.** The account’s product lead sees UK codes arriving in seconds again after the sender change. Open slide 6 on the customer whose text never arrives and has no other way in.',
        '**Loyalty and reviews.** The account’s marketing lead sees new members get their points welcome within minutes. Open slide 6 on the referral programme no email mentions.',
      ],
    },
    {
      kind: 'p',
      text: 'Agencies reporting to clients use the same idea weekly: the guide on how to [show clients every flow fired](/blog/show-clients-every-flow-fired) gives the format for a retainer review.',
    },

    { kind: 'h2', id: 'upsell', text: 'Upsell signals: what the account hasn’t set up yet' },
    {
      kind: 'p',
      text: 'Upsell signals usually come from inside your product: seats near a limit, a feature used every day, a new team asking for access. The account’s customers show a second kind, and a customer account at the account’s store sees it: messages they never receive, such as a text or a browse reminder.',
    },
    {
      kind: 'list',
      items: [
        `**Texts never set up.** No step of the sign-up form or checkout asks for a phone number with its own consent box, and no text arrives. [Klaviyo’s guide to SMS consent](${KLAVIYO_SMS}), updated 21 October 2026, says email consent is not SMS consent. It recommends a separate checkbox, and a form that asks for the email on one step and the phone number on the next. Screenshot the form as it stands.`,
        '**No browse flow.** A browse reminder is a [triggered flow](/glossary/triggered-flow): it starts when a known visitor views a product. If nothing arrives within the window you set, test once more as in step 3 and write the window on the slide.',
        '**No answer out of hours.** For a help desk, log the time a chat question was sent at night and the time of the first reply.',
        '**One channel for codes.** For a messaging provider, a code sent by text only leaves a customer whose text fails with no other way in. Log a run on a number in each country the account serves.',
      ],
    },
    {
      kind: 'p',
      text: 'Put slide 6 after the results. The account has just seen what improved for its customers, message by message, and the gap that remains comes with its own screenshot and the step that closes it. The guide to [buying signals examples](/blog/buying-signals-examples) lists signals from what companies send their own customers, for companies your team hasn’t sold to yet.',
    },

    { kind: 'h2', id: 'running', text: 'Running the QBR presentation' },
    {
      kind: 'list',
      items: [
        '**Cadence.** Gainsight’s guide holds QBRs every three months. ChurnZero runs strategic accounts quarterly and smaller ones once or twice a year, and sees less value in a QBR on a monthly contract.',
        '**Length.** About an hour, per Gainsight, which leaves time for the decisions on slide 9.',
        '**Before the meeting.** Send the agenda well ahead, and run the customer account 1 to 2 weeks before so slide 4 is current. ChurnZero suggests sending supporting evidence ahead of the call.',
        '**Who attends.** Day-to-day users who know the product and a senior person who sets direction, as Gainsight advises. Show slide 4 to the senior person: it is their own store or app.',
        '**After.** Send the deck as a PDF with each decision’s owner and date, and book the next QBR before the meeting ends.',
      ],
    },

    { kind: 'h2', id: 'hours', text: 'Time needed by hand' },
    {
      kind: 'p',
      text: 'Count it per account. Setting up the address, number and sheet takes about 30 minutes. Logging what arrives takes about 10 minutes a day for 14 days, so one run is about 2 hours 50 minutes. Two runs a quarter across a book of 40 accounts comes to about 227 hours a quarter, as example inputs. Put in your own minutes and the size of your book.',
    },
    {
      kind: 'p',
      text: 'Set those hours against what each review supports. As example inputs, take an account paying $500,000 a year, one paying $100,000 and one paying $25,000. Each renews on the date on slide 8, and slide 4 is the part of the deck its executives can check for themselves.',
    },
    {
      kind: 'p',
      text: 'By hand, the method holds for the 5 to 10 accounts renewing soonest. Past that, it needs an address and number per account, kept for months, with every original saved. A welcome email that stops and a new sending platform are both [churn signals](/recipes/account-watch) to see before the renewal. The guide to [churn risk indicators](/blog/churn-risk-indicators) shows how to score them.',
    },
    {
      kind: 'p',
      text: `Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. For account managers, [Account watch](/recipes/account-watch) keeps a customer account open at every account in the book, so slides 4 and 6 are ready before each QBR. It shows the platform behind each email too, so the week an account’s emails start coming from a new platform lands on its page in your CRM. Most customer success teams use similar data, from health scores to public web search from [Exa](${EXA}), “The world’s data for AI agents”. Obsession adds what each account sends the people who sign up with it, and an agent can call both ([how the two compare](/compare/obsession-vs-exa)). Start with the accounts renewing next quarter, so you can see what it does to renewals, retention and expansion.`,
    },
    {
      kind: 'cta',
      text: 'What every account in your book sends its customers, from the welcome email to the cart reminder, dated with its screenshot and ready before each QBR.',
      to: '/#join',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'tools', text: 'QBR template tools compared', compare: true },
    {
      kind: 'p',
      text: 'Each option fills a different part of the deck. We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'QBR template tools by the slides they fill. Facts checked 11 November 2026, from each provider’s own pages',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Doing nothing',
          'Costs no time',
          'Free',
          'The account hears about a broken journey from its own customers',
          'Accounts on monthly contracts',
        ],
        [
          'By hand: a new customer account per account, and a sheet',
          'Shows exactly what a new customer receives, dated',
          'Free, plus about 2 hours 50 minutes a run',
          'Hours grow with the book, and history starts the day you begin',
          'The 5 to 10 accounts renewing soonest',
        ],
        [
          `Slide and whiteboard templates: [Miro](${MIRO}), [Smartsheet](${SMARTSHEET})`,
          'A ready layout\nMiro: 4 parts\nSmartsheet: 6 templates',
          'Free',
          'The numbers and evidence come from your team',
          'A first QBR deck',
        ],
        [
          `Customer success platforms: [Gainsight CS](${GAINSIGHT_PRICING})`,
          'Dashboards, among the features on its pricing page',
          'Request pricing, on its pricing page',
          'Its pages don’t describe what an account’s customers receive',
          'Health scores and decks across a large book',
        ],
        [
          `Public web search: [Exa](${EXA})`,
          'Searches “the largest index of public web and private information” for AI agents',
          `[$10 free credit a month](${EXA_PRICING})\nSearch from $4 per 1,000\nEnterprise $12,000 a year`,
          'Its pages don’t describe keeping what a company sends its customers',
          'News, pages and company data about an account',
        ],
        [
          'Obsession (ours): [Account watch](/recipes/account-watch), [Email and SMS tracking](/recipes/email-sms-tracking), [Delivery monitoring](/recipes/delivery-monitoring)',
          'Keeps what each account shows only to its customers: emails, texts, support answers and codes, dated with screenshots',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'An account not yet covered starts its history the day it is added\nEvery journey stops short of paying',
          'Slides 4 and 6 for every account, every quarter',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For slides 4 and 6 across a whole book, every quarter, use Obsession. For the layout, a free template is enough, and for health scores across many accounts, a customer success platform does the job. For 1 account a quarter, the sheet is enough.',
    },
    {
      kind: 'cta',
      text: 'A real UK skincare store, September 2026: every email with the time it arrived, and the basket left at 02:57 that got no reminder in 48 hours.',
      to: '/sample-output',
      label: 'See sample data',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What should a QBR template include?',
          a: 'A QBR template should include 9 slides. They cover the account’s goals, results against them, adoption, and what its customers received before and after last quarter’s changes. Then come support and incidents, what the account hasn’t set up yet and next quarter’s plan. The deck ends on risks, the renewal, and decisions with owners and dates.',
        },
        {
          q: 'What is a quarterly business review template?',
          a: 'It is the slide deck a vendor’s account manager or customer success manager brings to the review held every three months with a customer. It shows the customer’s goals, the results, the plan for the next quarter and the decisions to make.',
        },
        {
          q: 'Is there a QBR template for PowerPoint or Google Slides?',
          a: 'The 9 slides work in PowerPoint, Google Slides or Keynote. Smartsheet offers free QBR templates in PowerPoint, Excel, Word and PDF, and Miro’s free template runs on its whiteboard.',
        },
        {
          q: 'How long should a QBR presentation be?',
          a: 'About an hour, which is Gainsight’s advice. Nine slides leave time for the decisions at the end. Send the agenda well before the meeting.',
        },
        {
          q: 'What are upsell signals in customer success?',
          a: 'Upsell signals are signs an account is ready to buy more. Most come from inside your product, such as seats near a limit. A second kind comes from the account’s customers: journeys they never receive, such as texts that were never set up, or no browse reminder after a known visitor views a product.',
          link: { label: 'Buying signals examples', to: '/blog/buying-signals-examples' },
        },
        {
          q: 'What is the difference between a QBR and an EBR?',
          a: 'Gainsight and ChurnZero both treat an executive business review as another name for a quarterly business review. ChurnZero suggests quarterly reviews for strategic accounts and one or two a year for smaller ones.',
        },
        {
          q: 'How do I show a customer what its own customers received?',
          a: 'Agree it with your contact, then sign up at the account’s store or app as a new customer, with an address and number kept for that account. Log every email, text and answer with the time it arrived and a screenshot, and run it again before the next review to show the before and after.',
          link: { label: 'Account watch', to: '/recipes/account-watch' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Facts checked 11 November 2026, each against its source’s own page. The sources are Gainsight’s QBR guide and pricing page, ChurnZero’s blueprint, the Miro and Smartsheet templates, 4 Klaviyo help articles, and Exa’s home and pricing pages. Gainsight’s guide and Miro’s page show no publication date. Klaviyo’s rules describe Klaviyo, and other email platforms set their own. Every account, time and number in the examples is invented, at .example addresses. None of this is legal advice.',
    },
  ],

  sources: [
    { title: 'The essential guide to quarterly business reviews (QBRs)', publisher: 'Gainsight', url: GAINSIGHT_GUIDE },
    { title: 'Quarterly business reviews (QBRs): a blueprint for success', publisher: 'ChurnZero (Darien Aasen)', url: CHURNZERO, date: '2026-10-16' },
    { title: 'QBR presentation template', publisher: 'Miro', url: MIRO },
    { title: 'Free QBR and business review templates', publisher: 'Smartsheet (Kate Eby)', url: SMARTSHEET, date: '2022-10-20' },
    { title: 'How to create a browse abandonment flow', publisher: 'Klaviyo Help Center', url: KLAVIYO_BROWSE, date: '2026-10-07' },
    { title: 'Getting started with Klaviyo onsite tracking', publisher: 'Klaviyo Help Center', url: KLAVIYO_ONSITE, date: '2026-03-30' },
    { title: 'Understanding Smart Sending in Klaviyo', publisher: 'Klaviyo Help Center', url: KLAVIYO_SMART, date: '2026-10-22' },
    { title: 'Understanding SMS consent collection', publisher: 'Klaviyo Help Center', url: KLAVIYO_SMS, date: '2026-10-21' },
    { title: 'Exa: the world’s data for AI agents', publisher: 'Exa', url: EXA },
    { title: 'Pricing', publisher: 'Gainsight', url: GAINSIGHT_PRICING },
    { title: 'Pricing', publisher: 'Exa', url: EXA_PRICING },
  ],

  related: [
    'churn-risk-indicators',
    'sales-business-case-template',
    'buying-signals-examples',
    'crm-data-enrichment-fields',
    'show-clients-every-flow-fired',
    'recipe:account-watch',
    'recipe:email-sms-tracking',
    'recipe:delivery-monitoring',
    '/sales',
    '/sample-output',
  ],
}
