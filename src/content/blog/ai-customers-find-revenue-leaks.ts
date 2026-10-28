import type { BlogPost } from './types'
import { AI_CUSTOMER } from '../glossary'

/* The AI customers series, article 6 (24 Oct 2026): how AI customers find revenue leaks. It owns "customer journey
   testing" (primary), "abandoned cart email not sending" and "revenue leaks". Readers: store owners and growth leads,
   retention and CRO agencies, RevOps leads at B2B sellers and CX teams running support bots, who suspect money is lost
   in steps their dashboards report as working. Why now: the code freeze (about 20 Nov), Black Friday (Fri 27 Nov 2026)
   and Cyber Monday (Mon 30 Nov), and AI agents now answering for companies under the CMA's March 2026 guidance.
   The argument: a revenue leak is a promise the customer received late, broken, wrong or not at all, while the
   company's reports showed the step working; only a customer who knows the promise and waits for it sees it. Then where
   they hide (online stores first, then B2B lead forms, then AI agents and AI answers), the method an AI customer runs
   (write the promise, sign up, wait, open, compare), the reader's own sum (revenue a day × days silent, where the days
   silent average half the gap between checks, worked once with invented figures), how often to check, when a human
   check is enough, the options, limits and the FAQ.
   Facts from the verified library _research/seo/plan/ai-customers/facts.json (24 Oct 2026): Joy Joya, Rejoiner, Baymard,
   Shopify's abandoned checkout pages, Mailchimp's double opt in, Gmail's header help, RevenueHero, Workato (the 114
   company experiment only), Clay, Moffatt v Air Canada, the CMA, Product.ai and Shopify's agentic storefronts. Clay and
   Rejoiner were opened again on 24 Oct for the 96% and the 1,000 brand base. Options opened at each company's own
   page on 24 Oct: Datadog pricing (synthetic tests), Checkly pricing, S-PRO's Mystery Shopper AI Suite, and, through the
   library, Secret View's FAQ, T-ROC's cost guide and OpenAI's cloud browser help. Obsession is described from its live
   pages as of 24 Oct (the ecommerce use case, delivery monitoring, /verify, /sample-output). Google autocomplete (US,
   24 Oct) gave the FAQ phrasings: revenue leaks meaning, revenue leakage examples, revenue leakage audit, shopify
   abandoned cart email not sending.
   Left out on purpose: the site's 93%, 77% and 128 stores, every PilotX audit figure, Workato's 42 hours, CXL (bot
   wall), Gartner, ChatGPT agent (retired), and the causes of a silent flow, which welcome-basket-email-not-sending
   covers. saltmarsh.example and every figure in the 2 illustrations are invented. No dashes. */

const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const REJOINER = 'https://rejoiner.com/abandoned-cart-email-report'
const BAYMARD = 'https://baymard.com/lists/cart-abandonment-rate'
const SH_ABANDONED = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts'
const SH_SECOND = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/migrate-abandoned-checkout'
const SAMPLE = 'https://useobsession.com/sample-output'
const WORKATO = 'https://www.workato.com/the-connector/lead-response-time'
const REVENUEHERO = 'https://www.revenuehero.io/blog/b2b-lead-response-times'
const CLAY = 'https://www.clay.com/blog/claygent-experiment-speed-to-lead'
const MCCARTHY = 'https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot'
const FOX = 'https://foxbusiness.com/lifestyle/air-canada-chatbot-gave-customer-wrong-info-airline-pay'
const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const SHOPIFY_AGENTIC = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts'
const PRODUCT_AI = 'https://dnyuz.com/2026/09/25/ai-cant-take-over-your-holiday-shopping-quite-yet-a-new-study-suggests/'
const MAILCHIMP_DOI = 'https://mailchimp.com/help/about-double-opt-in/'
const GMAIL_HEADERS = 'https://support.google.com/mail/answer/29436?hl=en'
const DATADOG = 'https://www.datadoghq.com/pricing/?product=synthetic-testing--monitoring'
const CHECKLY = 'https://www.checklyhq.com/pricing/'
const TROC = 'https://trocglobal.com/mystery-shopping-cost/'
const SECRET_VIEW = 'https://www.secretview.io/en/resources/frequently-asked-questions'
const CLOUD_BROWSER = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'
const SPRO = 'https://s-pro.io/mystery-shopper-ai-suite'

const CAUSES = '/blog/welcome-basket-email-not-sending'
const CHECKLIST = '/blog/black-friday-checklist-new-customer'
const BOT_TEST = '/blog/test-store-chatbot-returns-policy'

export const post: BlogPost = {
  slug: 'ai-customers-find-revenue-leaks',
  title: 'Customer journey testing: how AI customers find revenue leaks',
  dek: 'The steps that lose money rarely raise an error. Where they hide in online stores, B2B lead forms and AI agents, what a pass looks like at each, how an AI customer finds them, and what a silent step costs in your own numbers.',
  metaTitle: 'Customer journey testing: AI customers find revenue leaks',
  description:
    'Customer journey testing with AI customers: where revenue leaks hide in stores, lead forms and AI agents, what a pass looks like, and what one costs you.',
  answer:
    'Customer journey testing with AI customers finds revenue leaks where a company’s own reports can’t: an AI customer signs up with its own inbox, phone number and browser, waits, opens every email, text and reply, and checks each one against what was promised. The leaks it finds are steps that fail without an error, such as a welcome text that never arrives, a code refused at checkout, a basket reminder hours late, a chatbot quoting the wrong policy or a demo form nobody answers. Obsession’s AI customers run these tests on any store, lead form or AI agent you name, every week and after every change.',
  primaryKeyword: 'customer journey testing',
  keywords: [
    'revenue leaks',
    'revenue leaks meaning',
    'revenue leakage examples',
    'revenue leakage audit',
    'abandoned cart email not sending',
    'shopify abandoned cart email not sending',
    'customer experience testing',
    'speed to lead',
    'ai customers',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-28',
  readingMinutes: 11,
  order: 7,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'saltmarsh.example · 1 AI customer’s first 2 days',
      who: 'A new customer of an invented store, checked against the store’s own promises',
      status: { tone: 'fail', text: '3 failed, 1 late' },
      rows: [
        { time: 'Mon 10:00', text: 'Signs up through the pop up', detail: 'Promised 15% off, by email and by text', tone: 'ok' },
        { time: 'Mon 10:03', text: 'Welcome email arrives', detail: 'With the code SALT15, 3 minutes after sign up', tone: 'ok' },
        { time: 'Mon 10:30', text: 'Code refused at checkout', detail: 'SALT15 on a £52 sale jumper', tone: 'fail' },
        { time: 'Mon 10:40', text: 'Leaves the basket', detail: 'The reminder is set for 1 hour', tone: 'info' },
        { time: 'Mon 11:00', text: 'Chat says sale items can be returned', detail: 'The returns page says sale items are final', tone: 'fail' },
        { time: 'Tue 07:40', text: 'Basket reminder arrives', detail: '21 hours after the basket, against 1 hour', tone: 'late' },
        { time: 'Wed 10:00', text: 'No welcome text', detail: '48 hours after the promise', tone: 'fail' },
      ],
      foot: 'An example on an invented store. Its own reports showed both flows live and the code active.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Store owners, retention and CRO agencies, RevOps leads and CX teams can use customer journey testing to find the steps that lose money without raising an error.',
    },
    {
      kind: 'p',
      text: 'Those steps fail outside the company’s own reports. A welcome text that never triggered leaves no row in the flow report, a refused code counts as one more abandoned checkout, and a chatbot’s wrong answer can be logged as a resolved chat. A customer who knows what was promised, and waits for it, sees each one.',
    },
    {
      kind: 'p',
      text: '[A test of 362 ecommerce brands](' +
        JOYJOYA +
        ') by Joy Joya, run with new email addresses and phone numbers, found that 158 sent no welcome email and 53 never sent the text they promised. Rejoiner’s own [analysis of 1,000 direct to consumer brands](' +
        REJOINER +
        ') found that 68% of abandoned carts triggered a reminder email, so about 1 in 3 got none.',
    },
    {
      kind: 'stat',
      value: '68%',
      label: 'of abandoned carts at 1,000 direct to consumer brands triggered a reminder email, so about 1 in 3 got none',
      source: 'Rejoiner, February 2025',
      href: REJOINER,
    },

    { kind: 'h2', id: 'what-they-are', text: 'What revenue leaks are' },
    {
      kind: 'p',
      text: 'A revenue leak is a step in a customer journey where the customer was promised something and received it late, broken, wrong or not at all, while the company’s own reports showed the step working. The promise can be an email, a text, a code, a reminder, a reply to a form or an answer from a chatbot.',
    },
    {
      kind: 'list',
      items: [
        '**Silent:** nothing arrived by the deadline.',
        '**Late:** it arrived after the delay you set or the time you promised.',
        '**Broken:** it arrived with a blank product, a dead link or a code that fails.',
        '**Wrong:** it contradicts your own pages, or it came twice.',
      ],
    },
    {
      kind: 'p',
      text: 'Revenue leakage also names billing losses, such as usage never invoiced. Those sit in finance systems, where a customer can’t see them.',
    },
    {
      kind: 'p',
      text: `${AI_CUSTOMER.definition} Because it is a customer, it receives what a new customer receives, at your company or any other. [What AI customers are](/blog/ai-customers) defines the term in full.`,
    },

    { kind: 'h2', id: 'online-stores', text: 'Online stores' },
    {
      kind: 'p',
      text: 'In a store, the promises start with the ad and the pop up and end with the shipping email.',
    },
    {
      kind: 'table',
      caption: 'Where an online store’s promises fail, and what a pass looks like',
      cols: ['Step', 'The promise', 'A pass looks like', 'The failure to look for'],
      rows: [
        ['Ad to page', 'The ad’s product and offer', 'Same price and offer, in stock', 'Sold out, or another offer'],
        ['Pop up', 'An offer by email or text', 'Submits on a phone', 'An error, or no confirmation'],
        ['Welcome email', 'The code the pop up named', 'Within minutes, with that code', 'Nothing, or another offer'],
        ['Welcome text', 'A text after opt in', 'Arrives, and STOP works', 'No text at all'],
        ['Code at checkout', 'The discount in the email', 'Applies, or is refused as planned', 'Refused on sale items or past a cap'],
        ['Basket and checkout reminders', '1 reminder after your delay', 'On time, with product, photo and price', 'Nothing, hours late, blank or twice'],
        ['Order and delivery emails', 'Confirmation and shipping updates', 'Both arrive, links work', 'No shipping email'],
      ],
    },
    {
      kind: 'p',
      text: 'Joy Joya’s test also found 20 brands whose welcome offer didn’t match the one on their pop up.',
    },

    { kind: 'h3', id: 'abandoned-cart-email', text: 'Abandoned cart email not sending' },
    {
      kind: 'p',
      text: '[Baymard Institute](' +
        BAYMARD +
        ') puts the average documented basket abandonment rate at 70.22%, from 50 studies, so the basket and checkout reminders are meant for most shoppers who add something to a basket.',
    },
    {
      kind: 'p',
      text: 'On Shopify, [a checkout counts as abandoned](' +
        SH_ABANDONED +
        ') after more than 10 minutes incomplete once the shopper has given an email, and you set the wait under Send after. [A second abandoned checkout automation](' +
        SH_SECOND +
        ') defaults to a 10 hour wait, and the automation emails only customers subscribed to email marketing by default. A test shopper who leaves the marketing box unticked gets nothing, which is the setting working. A reminder planned for 1 hour that comes 10 hours later points to that default.',
    },
    {
      kind: 'p',
      text: '[A check of a UK skincare store](' +
        SAMPLE +
        ') begun on 22 September 2026 left a £40 gift set in the basket at 02:57 and a £21 deodorant at checkout at 03:11. Both shoppers had ticked the marketing box, and no reminder arrived for either in 48 hours. The causes to check in Klaviyo and Shopify are in [why a welcome or basket email never arrives](' +
        CAUSES +
        ').',
    },

    { kind: 'h2', id: 'lead-forms', text: 'B2B lead forms and speed to lead' },
    {
      kind: 'p',
      text: 'A demo or contact form promises a reply, on the form itself or in the sales team’s own target. Testing that promise as a prospect is an established method. [Workato](' +
        WORKATO +
        ') filled in demo request forms at 114 B2B companies in a study published in November 2021, [RevenueHero](' +
        REVENUEHERO +
        ') requested a demo on 1,000 B2B websites in a study published in March 2024, and agents built in [Clay](' +
        CLAY +
        ') submitted 6,346 demo and contact forms across 100 countries in 2026, each company publishing its own results.',
    },
    {
      kind: 'p',
      text: 'RevenueHero got 365 replies from its 1,000 requests, after 1 day, 5 hours and 17 minutes on average. In Clay’s test, 2 in 3 companies never replied, 32% of forms got an email reply and 96% of companies never called. Clay notes that spam filters may have blocked some submissions.',
    },
    {
      kind: 'stat',
      value: '2 in 3',
      label: 'companies never replied to a demo or contact form, across 6,346 forms in 100 countries',
      source: 'Clay, September 2026',
      href: CLAY,
    },
    {
      kind: 'list',
      items: [
        '**The form passes** when it submits, confirms, and the lead appears in your CRM with an owner.',
        '**The first reply passes** when a person answers on any channel within the time you promise or target. Log automatic replies separately.',
        '**The phone passes** when a call or text arrives within the same target, if the form asked for a number.',
        '**The booking link passes** when it opens a calendar with free times.',
      ],
    },

    { kind: 'h2', id: 'ai-agents', text: 'AI agents and AI answers' },
    {
      kind: 'p',
      text: 'A support bot, voice agent or AI sales agent makes promises in its answers, and the company is held to them. A British Columbia tribunal held Air Canada responsible for what its website chatbot told a customer about a bereavement refund, [as McCarthy Tétrault reports](' +
        MCCARTHY +
        '), and ordered it to pay [CA$812](' +
        FOX +
        '). The UK’s Competition and Markets Authority says a business is [responsible for what its AI agent does](' +
        CMA +
        ') as it is for an employee, and could be fined up to 10% of its worldwide turnover.',
    },
    {
      kind: 'p',
      text: 'AI assistants answer for a store as well. [Shopify’s agentic storefronts](' +
        SHOPIFY_AGENTIC +
        '), which list a store’s products in ChatGPT, Gemini, Copilot and other AI channels, are on by default for eligible stores. In a study Product.ai ran and [Business Insider reported](' +
        PRODUCT_AI +
        '), 85% of 913 checkable price answers from ChatGPT, Claude, Gemini and Perplexity matched the current or listed price, and the wrong ones were off by a median of $300.',
    },
    {
      kind: 'list',
      items: [
        '**A support bot passes** when its answers on refunds, delivery and prices match your policy pages as they read that day, and it hands over to a person when asked.',
        '**An AI assistant passes** when the price, stock and policy it gives for your products match your store’s pages.',
      ],
    },
    {
      kind: 'p',
      text: '[How to test your store’s chatbot](' + BOT_TEST + ') lists the questions to ask and how to score each answer.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s AI customers use every AI agent you run as your customers do, on every channel, every day. The first check is free: 3 AI customers, 1 channel, and your report within 4 days.',
      to: '/verify',
      label: 'Check your AI agents',
    },

    { kind: 'h2', id: 'customer-journey-testing', text: 'Customer journey testing, step by step' },
    {
      kind: 'p',
      text: 'Customer journey testing is going through your own journeys as a new customer and checking each promise against what arrives, and when. An AI customer runs it in 5 steps, and a person can run each one by hand.',
    },
    { kind: 'h3', id: 'promise', text: '1. Write down each promise and its deadline' },
    {
      kind: 'p',
      text: 'Take each promise from your own pages and settings: the pop up’s offer, each flow’s delay, the form’s reply time, the returns window on the policy page. Give each a deadline, such as the flow’s delay plus 1 hour, so every result is a pass or a fail against a line written in advance.',
    },
    { kind: 'h3', id: 'sign-up', text: '2. Sign up as a new customer' },
    {
      kind: 'p',
      text: 'Use an inbox, phone number and browser the company has never seen, because your own login carries your history and staff discounts. Tick the marketing box as a shopper would. With double opt in, [Mailchimp’s help centre](' +
        MAILCHIMP_DOI +
        ') says a subscriber is added only after clicking the link in the confirmation email or text, so open it and click.',
    },
    { kind: 'h3', id: 'wait', text: '3. Wait for each deadline' },
    {
      kind: 'p',
      text: 'Waiting is most of the test. Give reminders 48 hours, and start every journey at once, each with its own identity.',
    },
    { kind: 'h3', id: 'open', text: '4. Open everything and use it' },
    {
      kind: 'p',
      text: 'Open each email and text on a phone, click every link, apply each code at checkout and stop before payment. Time a lead form’s first reply on any channel, and ask a bot what customers ask about refunds, delivery and prices.',
    },
    { kind: 'h3', id: 'compare', text: '5. Compare with the promise and keep the original' },
    {
      kind: 'p',
      text: 'Mark each step passed, silent, late, broken or wrong, with its time. Keep the email itself with the screenshot. [Gmail’s Show original](' +
        GMAIL_HEADERS +
        ') opens its full header, which shows where it came from, so the step’s owner can check the finding without repeating the test. Report each failure to its owner as the step, the promise, what arrived and its cost a day.',
    },
    {
      kind: 'p',
      text: 'An AI customer runs the same 5 steps, waits days or weeks at almost no cost and keeps every message as it arrived, as [how AI customers work](/blog/how-ai-customers-work) explains. Obsession’s AI customers shop a store as new customers every week and after every change, and every failure comes back with proof and the fix.',
    },

    { kind: 'h2', id: 'your-number', text: 'What a silent step costs' },
    {
      kind: 'p',
      text: 'The cost of a silent step is its revenue a day multiplied by the days it stays silent, both from your own reports.',
    },
    {
      kind: 'list',
      items: [
        '**Revenue a day:** the flow’s attributed revenue for the last 30 days, divided by 30. Halve it for a cautious figure, since some of those shoppers would have bought anyway.',
        '**Days silent:** from the break to the check that finds it, plus the fix. A break at a random moment waits on average half the gap between checks: about 15 days with a monthly review, 3.5 with a weekly test and half a day with a daily one.',
        '**Cost:** revenue a day × days silent.',
      ],
    },
    {
      kind: 'art',
      caption: 'The sum worked once, with invented figures on an invented store. Put your own flow report’s numbers in each row.',
      art: {
        kind: 'price',
        title: 'saltmarsh.example · a silent basket reminder',
        rows: [
          { label: 'Basket reminder revenue', value: '£27,000', note: 'Last 30 days, from the flow report' },
          { label: 'Revenue a day', value: '£900', note: '£27,000 ÷ 30' },
          { label: 'Cautious revenue a day', value: '£450', note: 'Half, for shoppers who would have bought anyway' },
          { label: 'Days silent', value: '× 15', note: 'The average wait for a monthly review, before the fix' },
        ],
        total: { label: 'Cost before anyone notices', value: '£6,750', note: '£1,575 with a weekly test, £225 with a daily one' },
      },
    },
    {
      kind: 'p',
      text: 'Halving the gap between checks halves the expected cost of a break, so set the interval from this figure. For sale week, use last year’s Black Friday week from the same report.',
    },
    {
      kind: 'p',
      text: 'For a lead form, the sum is unanswered requests a day × days silent × your request to deal rate × your average first year deal value. For a support bot, it is the refund or credit a wrong answer promises × the customers who asked.',
    },

    { kind: 'h2', id: 'how-often', text: 'How often to check' },
    {
      kind: 'list',
      items: [
        '**After every change, the same day.** A new theme, app, form, flow, discount, routing rule or bot prompt can break a step that worked yesterday, so test the journeys it touches.',
        '**Every morning** for what moves daily: the pages behind live ads, and your bot’s answers on refunds, delivery and prices.',
        '**Every week,** every journey end to end, each with a new identity, and lead forms at several hours of the day, evenings included.',
        '**Before peak dates:** before your code freeze, about 20 November, the evening before Black Friday on Friday 27 November 2026, and on Cyber Monday, 30 November.',
      ],
    },
    {
      kind: 'p',
      text: 'The [Black Friday checklist](' + CHECKLIST + ') sets out 12 store tests in the order a shopper meets them.',
    },

    { kind: 'h2', id: 'by-hand', text: 'When a human check is enough' },
    {
      kind: 'p',
      text: 'For 1 store that changes rarely and runs no paid traffic, a person with a new email address, a phone and a sheet covers it, once a month and after every change. It takes an afternoon to start and 48 hours of waiting.',
    },
    {
      kind: 'p',
      text: 'A human mystery shopper is the right check where judgement matters, such as a shop floor, the tone of a phone call or a delivery at the door ([AI customers and mystery shoppers](/blog/hire-ai-customers) compares the two).',
    },
    {
      kind: 'p',
      text: 'By hand, each test covers 1 moment and builds no history, the hours grow with each store or client, and the evidence is whatever someone saved. Use Obsession where a team checks many journeys, stores or clients, changes something every week, buys paid traffic or runs AI agents in front of customers.',
    },

    { kind: 'h2', id: 'options', text: 'Ways to test your customer journeys', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 24 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to find failed steps in your customer journeys. Prices from each company’s own pages, 24 October 2026. Secret View’s range is for 1 to 5 locations, before shop credit',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'You find out from the month’s numbers', 'Steps that never change'],
        ['By hand: a new address, a phone, a sheet', 'Any journey, at any company', 'Free, plus your hours', '1 moment, no history', '1 store, monthly and after changes'],
        ['Your own reports: email platform, Shopify, CRM', 'What was sent, and what it earned', 'In your plan', 'Steps that never triggered or arrived', 'Spotting a drop once it shows'],
        [
          'Synthetic monitoring: [Datadog](' + DATADOG + '), [Checkly](' + CHECKLY + ')',
          'Scripted paths on your own site, from many locations',
          'Datadog: from $12 per 1,000 browser runs, billed annually\nCheckly: $0, $24 or $64 a month, billed annually',
          'Doesn’t wait days for what arrives',
          'Uptime and checkout paths',
        ],
        [
          'Human mystery shoppers: [T-ROC](' + TROC + '), [Secret View](' + SECRET_VIEW + ')',
          'Human judgement in stores and on calls',
          'T-ROC’s guide: $50 to $200 a shop\nSecret View: €29.99 to €49.99 a shopper',
          'Priced per visit, 1 moment each',
          'In person and phone service',
        ],
        [
          'AI browser agent: [ChatGPT’s cloud browser](' + CLOUD_BROWSER + ')',
          'Fills in forms and clicks through a task',
          'Paid ChatGPT plans',
          'Pauses for your input or sign in',
          'One off checks of a page or form',
        ],
        [
          'AI mystery shopper service: [S-PRO](' + SPRO + ')',
          'Shopper agents on public and private journeys, with scored evidence',
          'Not listed',
          'Private journeys need your systems connected',
          'CX and conduct reviews',
        ],
        [
          'Obsession (ours): [Mystery shopper](/recipes/mystery-shopper), [Website audit](/recipes/website-audit), [Lead leaks](/recipes/lead-leaks), [Support bot check](/recipes/support-bot-check)',
          'AI customers sign up, wait and keep every email, text and reply as proof',
          'Running now: first store check free\nCredit-based plans, like Claude’s',
          'Sees what its own AI customers receive',
          'What a real customer gets, weekly and after every change',
        ],
      ],
    },
    {
      kind: 'cta',
      text: 'Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find revenue leaks, watch rivals and prospect with proof. Your first store check is free: 4 AI customers sign up, browse, leave a basket and stop at checkout, every inbox is watched for 48 hours, and your report arrives within 4 days.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'limits', text: 'Limits' },
    {
      kind: 'list',
      items: [
        '**A test shows what arrived.** The cause of a silent step sits in your own tools: the flow, the trigger, the routing rule or the pages the bot reads.',
        '**A new customer sees what new customers get.** A long standing subscriber can receive other emails, in another Gmail tab.',
        '**1 run is 1 customer at 1 moment.** Repeat runs show whether a failure happens every time or now and then.',
        '**An AI customer stops at a bot wall or a CAPTCHA,** and records the step it couldn’t test.',
      ],
    },
    {
      kind: 'p',
      text: 'Start with the journey your flow report says earns most. Run it once this week as a new customer, then put its revenue a day into the cost sum to set how often to check it.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about revenue leaks' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are revenue leaks?',
          a: 'Revenue leaks are steps in a customer journey where the customer was promised an email, a code, a reminder, a reply or a correct answer and received it late, broken, wrong or not at all, while the company’s reports showed the step working.',
        },
        {
          q: 'What are examples of revenue leakage in ecommerce?',
          a: 'A welcome email or text that never arrives, a welcome code refused at checkout, a basket reminder hours after the delay you set, an ad that lands on a sold out product, and a chatbot that quotes the wrong returns policy.',
        },
        {
          q: 'Why is my Shopify abandoned cart email not sending?',
          a: 'Shopify’s automation emails only customers subscribed to email marketing by default, and counts a checkout as abandoned only after more than 10 minutes once the shopper gave an email. Check the audience and the Send after wait, then test with a new address that ticks the marketing box.',
        },
        {
          q: 'What is customer journey testing?',
          a: 'Customer journey testing is going through a company’s journeys as a new customer, from the ad or sign up to the last email, and checking each promised message, code and reply against what arrives and when.',
        },
        {
          q: 'How do I run a revenue leakage audit?',
          a: 'List each promise your journeys make, with a deadline, run every journey as a new customer, and mark each step passed, silent, late, broken or wrong. Then rank the failures by revenue a day × days silent.',
        },
        {
          q: 'How often should I test my customer journeys?',
          a: 'After every change to a theme, app, form, flow, discount or bot, every week for each journey end to end, and before peak dates such as Black Friday on Friday 27 November 2026.',
        },
        {
          q: 'Can AI customers test B2B lead forms?',
          a: 'Yes. An AI customer fills in the demo or contact form as a prospect, says it is an AI to anyone it talks to, and times the first reply on every channel.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Business Insider’s report of the Product.ai study is cited through DNYUZ’s republication, because Business Insider wasn’t reachable. The store in the illustrations and every figure in the cost example are invented. We ran none of these tests, and the only result of our own is the September store check on our sample output page. For legal questions about AI agents, take advice for your own case.',
    },
  ],

  sources: [
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'Abandoned cart email statistics & strategy guide: 2025 research report', publisher: 'Rejoiner', url: REJOINER, date: '2025-02-10' },
    { title: '50 cart abandonment rate statistics 2026', publisher: 'Baymard Institute', url: BAYMARD, date: '2025-09-22' },
    { title: 'Recovering abandoned checkouts', publisher: 'Shopify Help Center', url: SH_ABANDONED },
    { title: 'Opt in to the new abandoned checkout automation', publisher: 'Shopify Help Center', url: SH_SECOND },
    { title: 'Sample output: the September store check', publisher: 'Obsession', url: SAMPLE, date: '2026-09' },
    { title: 'What is lead response time? And how do you improve yours?', publisher: 'Workato', url: WORKATO, date: '2021-11-23' },
    { title: 'We tested lead response times of 1000 B2B sales teams. Here are the results.', publisher: 'RevenueHero', url: REVENUEHERO, date: '2024-03-20' },
    { title: 'We asked 6,346 companies for a demo. Most never wrote back.', publisher: 'Clay', url: CLAY, date: '2026-09-22' },
    { title: 'Moffatt v. Air Canada: A Misrepresentation by an AI Chatbot', publisher: 'McCarthy Tétrault', url: MCCARTHY, date: '2024-02-19' },
    { title: 'Air Canada chatbot gave a customer wrong info and the airline had to pay', publisher: 'Fox Business', url: FOX, date: '2024-02-19' },
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-03-09' },
    { title: 'Shopify agentic storefronts', publisher: 'Shopify Help Center', url: SHOPIFY_AGENTIC },
    { title: 'AI can’t take over your holiday shopping quite yet, a new study suggests (Product.ai study)', publisher: 'Business Insider, republished by DNYUZ', url: PRODUCT_AI, date: '2026-09-25' },
    { title: 'About double opt-in', publisher: 'Mailchimp Help', url: MAILCHIMP_DOI },
    { title: 'Trace an email with its full header', publisher: 'Gmail Help', url: GMAIL_HEADERS },
    { title: 'Pricing: Synthetic Testing and Monitoring', publisher: 'Datadog', url: DATADOG },
    { title: 'Pricing', publisher: 'Checkly', url: CHECKLY },
    { title: 'How much does mystery shopping cost? 2026 pricing guide', publisher: 'T-ROC', url: TROC, date: '2026' },
    { title: 'Frequently asked questions', publisher: 'Secret View', url: SECRET_VIEW },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: CLOUD_BROWSER },
    { title: 'Mystery Shopper AI Suite', publisher: 'S-PRO', url: SPRO },
  ],
  related: [
    'ai-customers',
    'how-ai-customers-work',
    'hire-ai-customers',
    'welcome-basket-email-not-sending',
    'recipe:mystery-shopper',
    'recipe:lead-leaks',
    '/sample-output',
  ],
}
