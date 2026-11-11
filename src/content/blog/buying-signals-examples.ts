import type { BlogPost } from './types'

/* Revenue team guides, spec 2 (_research/seo/revenue-teams-11nov/WRITER_BRIEF.md and PLAN.md, 11 Nov 2026). It owns
   "buying signals examples" and buying signals in sales, buying signals meaning, signal based selling and buying signals
   b2b (Google autocomplete, US and UK, 11 Nov: _research/b2b-sales/autocomplete_11nov.json and demand.json). Reader:
   SDR leaders and managers at B2B software companies (persona key sdr_leader), first the vendors whose product touches
   what their own prospects' customers see: email and SMS, loyalty and reviews, checkout and payments, help desk and AI
   support, messaging, identity and onboarding. It serves /sales, recipe:prospect-intelligence, recipe:account-watch and
   recipe:email-sms-tracking.
   The case: page 1 (Martal, Demandbase, UserGems, ZoomInfo, Clearbit) lists website visits, hiring, funding and intent.
   This guide credits those first, from each provider's own pages, then adds the group page 1 lacks: signals in what an
   account sends its own customers (a welcome email that stopped, a cart reminder gone quiet after a site change, texts
   that never come, a trial silent after day 1, a new sending platform, a checkout code refused, support slower than
   promised, a sign-up that fails on a phone), each with what it means, the vendors it matters to, an opener and the
   check by hand. Openers say "I signed up" and never imply anyone already watches the account (outreach-not-creepy).
   Read at the source on 11 Nov 2026: Bombora's home and pricing pages; G2's Buyer Intent page; Dealfront's page and
   pricing (leadfeeder.com, where dealfront.com redirects); UserGems' home and pricing pages; Crunchbase's about page;
   BuiltWith's home and plans pages; Exa's home and pricing pages; Joy Joya's 362-brand test (updated 27 Jul 2026);
   Klaviyo's 2026 benchmarks; Rejoiner's abandoned cart report (10 Feb 2025); Gmail's full header help; RFC 6376 s3.5.
   Left out on purpose: Crunchbase prices (its pricing page showed no plans to our reader), G2 and Bombora prices (none
   listed), Salesforce's State of Sales time figures (not on its page), any "switch" claim beyond the live site's line
   that an account's emails have come from a new platform. Obsession is described in the words of /sales, the prospect
   intelligence and account watch recipes, site.ts and /compare/obsession-vs-exa. Brightloom, Harrowgate and Pellmell are
   invented, at .example addresses, as are every time, code and opener in the pictures. No dashes. */

const BOMBORA = 'https://bombora.com/'
const G2 = 'https://sell.g2.com/buyer-intent'
const DEALFRONT = 'https://www.leadfeeder.com/dealfront/'
const DEALFRONT_PRICING = 'https://www.leadfeeder.com/pricing/'
const USERGEMS = 'https://www.usergems.com/'
const USERGEMS_PRICING = 'https://www.usergems.com/pricing'
const CRUNCHBASE = 'https://about.crunchbase.com/'
const BUILTWITH = 'https://builtwith.com/'
const BUILTWITH_PLANS = 'https://builtwith.com/plans'
const EXA = 'https://exa.ai/'
const EXA_PRICING = 'https://exa.ai/pricing'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const KLAVIYO = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const REJOINER = 'https://rejoiner.com/abandoned-cart-email-report'
const GMAIL_HEADERS = 'https://support.google.com/mail/answer/29436'
const RFC6376 = 'https://datatracker.ietf.org/doc/html/rfc6376'

export const post: BlogPost = {
  slug: 'buying-signals-examples',
  title: 'Buying signals examples for SDR managers: what every account your SDRs own is living through',
  dek: 'The buying signals that SDR (sales development representative) teams act on, grouped by source, from research intent and website visits to the welcome email that stopped arriving. Each comes with what it means, the vendors it matters to, an opener and how to check it by hand.',
  metaTitle: 'Buying signals examples for SDR teams: how to open on each',
  description:
    'Buying signals examples for SDR managers by source: intent, site visits, hiring, funding, and what each account sends its own customers, with an opener.',
  answer:
    'Buying signals examples fall into six groups by source: research intent, website visits, job changes and hiring, funding and news, technology installs, and what an account sends its own customers. The first five suggest an account may be ready to buy; the sixth, such as a welcome email that stopped, shows the exact step a vendor’s product would fix, with a date, and only the account’s customers see it. Obsession keeps what each account you name sends its customers, dated with the email or screenshot, by API, MCP (the standard way AI agents call tools) or a table.',
  primaryKeyword: 'buying signals examples',
  keywords: [
    'buying signals in sales',
    'buying signals meaning',
    'signal based selling',
    'buying signals b2b',
    'b2b buying signals',
    'sdr buying signals',
    'customer facing signals',
  ],
  category: 'Watch other companies',
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 17,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'brightloom.example · as a new customer',
      who: 'A UK skincare brand on an SDR’s list',
      rows: [
        { time: '2 Nov 09:00', text: 'Signed up as a new customer', detail: 'Email and text opt-in, UK, on a phone', tone: 'info' },
        { time: '2 Nov 09:04', text: 'Welcome email with a 15% code', detail: '4 minutes after the sign-up', tone: 'ok' },
        { time: '2 Nov 10:20', text: 'Cart reminder, 1 hour after the basket', detail: 'Basket of 2 items left at 09:20', tone: 'ok' },
        { time: '9 Nov 08:00', text: 'Site relaunched with a new checkout', detail: 'New theme and checkout pages', tone: 'info' },
        { time: '11 Nov 09:20', text: 'No cart reminder in 48 hours', detail: 'Same basket, left on 9 Nov at 09:20', tone: 'fail' },
        { time: '11 Nov 10:00', text: 'Emails now sent by a new platform', detail: 'Since 9 Nov, sender checked', tone: 'info' },
      ],
      foot: 'Invented brand and times. Rows 5 and 6 are buying signals for an email platform’s SDR.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Buying signals examples fall into six groups by source: research intent, website visits, job changes and hiring, funding and news, technology installs, and what an account sends its own customers. The first five suggest that an account may be ready to buy. The sixth shows the exact step a vendor’s product would fix, with a date and a screenshot, and only someone signed up to the account sees it.',
    },
    {
      kind: 'p',
      text: 'An SDR manager’s week turns on which accounts get a first line today and what that line says. Every group has its place in that decision. The sixth usually ranks first for a vendor whose product touches what its prospects’ customers see, such as an email and SMS platform, a help desk, a checkout or an identity provider. It names the problem in the account’s own emails, texts and support replies.',
    },

    { kind: 'h2', id: 'meaning', text: 'Buying signals meaning, and signal based selling' },
    {
      kind: 'p',
      text: 'A buying signal is a dated event at an account that makes a conversation with a vendor more likely to be welcome now. In B2B sales the event is about the company. It might be researching a category, hiring for a team, raising money or changing a tool. It might also be failing its own customers at a step another company sells a fix for.',
    },
    {
      kind: 'p',
      text: 'Signal based selling means an SDR team works the accounts that show a signal first and opens each email on the signal itself. It turns a territory list into a daily queue, and it changes the first line from a compliment to a fact the prospect recognises.',
    },
    {
      kind: 'p',
      text: 'A signal earns a first line when it passes three tests. It is specific to this account, so no other company would receive the same email. It has a date, so the SDR can say when it happened. It ties to the problem your product solves, so the next sentence follows from it.',
    },

    { kind: 'h2', id: 'public-signals', text: 'Buying signals examples from intent, visits, hiring and funding' },
    {
      kind: 'p',
      text: 'Most sales teams use similar data, from contact databases and intent tools to Exa’s search of the public web. Each provider is strong at its own part of the job.',
    },
    {
      kind: 'table',
      caption: 'Buying signals from public and intent data, with where teams get each one and the opener it suits',
      cols: ['Signal', 'What it suggests', 'Where teams get it', 'Opener it suits'],
      rows: [
        ['Research intent', 'The account is reading about your category', 'Bombora\nG2 Buyer Intent', 'The problem the category solves'],
        ['Website visits', 'Someone there read your product or pricing pages', 'Dealfront', 'The page they read'],
        ['Job change', 'A past buyer starts at a new company', 'UserGems', 'What they bought before'],
        ['Hiring', 'The team your product serves is growing', 'Job boards\nCareers pages', 'The new roles'],
        ['Funding and news', 'New money, a launch or a takeover', 'Crunchbase\nPress releases', 'What the money is for'],
        ['Technology install', 'A tool next to yours was added or dropped', 'BuiltWith', 'The tool beside yours'],
        ['Public web research', 'Facts about the company in public', 'Exa', 'A line from their own pages'],
      ],
    },
    {
      kind: 'list',
      items: [
        '**Research intent.** Intent data records which companies are reading about a topic across many websites. [Bombora](' +
          BOMBORA +
          ') says its Company Surge data “reflects real research across 14B+ monthly events and 5M company domains”, drawn from a data co-op of publishers, brand sites and data providers. [G2 Buyer Intent](' +
          G2 +
          ') captures activity on G2 itself: product and category page views, competitor comparisons and pricing page visits. G2 says that lets a seller “see who’s researching you, your category, or your competitors”.',
        '**Website visits.** [Dealfront](' +
          DEALFRONT +
          ') names the companies visiting a team’s own website. It shows “the companies behind your traffic, scored by ICP fit and intent”, where ICP means ideal customer profile, with page views, time spent and gated content requests.',
        '**Job changes and hiring.** [UserGems](' +
          USERGEMS +
          ') lists more than 30 native signals, among them job changes, contact-level intent, website visits, M&A and hiring, and says its Gem-E learns from a team’s open opportunities and closed-won deals. Hiring itself is public on each account’s careers page and on job boards.',
        '**Funding and news.** [Crunchbase](' +
          CRUNCHBASE +
          ') tells sales teams to “anticipate private company funding and growth, and reach high-fit accounts before the window closes”, and says it monitors 39 billion live private company signals.',
        '**Technology installs.** [BuiltWith](' +
          BUILTWITH +
          ') covers more than 128,309 internet technologies and builds lists “using tech signals, spend, and lifecycle events”, so an SDR can see which accounts run the platform next to theirs.',
        '**Public web research.** [Exa](' +
          EXA +
          ') calls itself “The world’s data for AI agents”, says it searches “the largest index of public web and private information” and lists GTM intelligence among its strengths. Exa says its FindAll tool finds more of the companies and people that match a list-building query, which suits building and researching a list in one call.',
      ],
    },
    {
      kind: 'p',
      text: 'Each of these reads what an account researches, publishes, installs or announces. None of their pages describes signing up as the account’s customer and keeping what the account sends. Teams on the same feed see the same surge or funding round on the same morning, so their first lines sound alike. [Obsession vs Exa](/compare/obsession-vs-exa) sets out what Exa holds and what sits behind a sign-up.',
    },

    { kind: 'h2', id: 'customer-signals', text: 'B2B buying signals in what an account sends its customers' },
    {
      kind: 'p',
      text: 'The second family of signals comes from the account’s own customer experience: the emails, texts, codes, trial messages and support answers it sends the people who sign up. These sit behind a [login wall](/glossary/login-wall), any step a site puts between a visitor and what it shows customers, so search crawlers and intent feeds don’t collect them. For a vendor whose product runs that step, each one is the prospect’s problem in the prospect’s own words, with a date.',
    },
    {
      kind: 'table',
      caption: 'Buying signals in what an account sends its customers: a template to copy, one row per signal',
      cols: ['Signal', 'What it means', 'Vendors it matters to', 'Check by hand'],
      rows: [
        ['Welcome email stopped', 'The first flow a new customer meets is broken', 'Email and SMS platforms\nDeliverability tools', 'Sign up, wait 7 days'],
        ['Cart reminder gone quiet', 'A site change broke basket recovery', 'Email and SMS platforms\nCheckout and payments', 'Leave a basket, wait 48 hours'],
        ['Texts never come', 'The SMS opt-in collects numbers it never uses', 'SMS platforms\nMessaging APIs', 'Opt in, wait 7 days'],
        ['Trial silent after day 1', 'Onboarding stops after the welcome', 'Onboarding tools\nLifecycle email for software', 'Start a trial, log 14 days'],
        ['New sending platform', 'The account moved email platforms', 'Deliverability tools\nReviews, loyalty and SMS apps', 'Compare email headers'],
        ['Checkout code refused', 'An offer fails at the payment step', 'Checkout and payments\nPromotions and loyalty', 'Enter the code, stop before paying'],
        ['Support slower than promised', 'Replies miss the help page’s promise', 'Help desk and AI support', 'Ask 1 question, time the reply'],
        ['Sign-up fails on a phone', 'New customers drop at one step', 'Identity and onboarding', 'Sign up on a phone and a laptop'],
      ],
    },
    {
      kind: 'art',
      caption: 'The template filled for 3 invented brands from 2 to 11 November, as a new UK customer on a phone. Each cell links to its email or screenshot.',
      art: {
        kind: 'report',
        title: 'An SDR’s accounts, 2 to 11 November',
        period: 'New customer, UK · 3 invented brands',
        cols: ['Account', 'Welcome email', 'Cart reminder', 'Texts', 'Sending platform'],
        rows: [
          { name: 'brightloom.example', cells: ['In 4 minutes', 'None in 48 hours', '2 in 7 days', 'New since 9 Nov'], tone: 'fail' },
          { name: 'harrowgate.example', cells: ['None in 7 days', 'In 1 hour', 'None after opt-in', 'Unchanged'], tone: 'fail' },
          { name: 'pellmell.example', cells: ['In 2 minutes', 'In 1 hour', '3 in 7 days', 'Unchanged'], tone: 'ok' },
        ],
        notes: ['Brightloom and Harrowgate each give an email platform’s SDR a dated opener.', 'The brands are invented.'],
      },
    },

    { kind: 'h3', id: 'welcome-stopped', text: '1. A welcome email that stopped' },
    {
      kind: 'list',
      items: [
        '**What it means.** A [welcome series](/glossary/welcome-series) is the set of automated emails a company sends a new subscriber, starting with a welcome that often carries a first-order code. When nothing arrives, every new subscriber that week meets silence.',
        '**Who it matters to.** Email and SMS platforms, deliverability tools and the agencies that build flows.',
        '**How an SDR opens.** “I signed up to your list on Monday to see your welcome emails, and nothing had arrived by Wednesday, though the form said ‘Check your inbox’. I kept the screenshots if your team wants to trace it.”',
        '**How to check it by hand.** Sign up with an inbox used for nothing else, confirm the sign-up if asked, check spam and Promotions, and log every email with its arrival time for 7 days.',
      ],
    },
    {
      kind: 'p',
      text: 'The gap is common. In a test [Joy Joya published in July 2026](' +
        JOYJOYA +
        '), fresh email addresses and phone numbers were signed up to 362 ecommerce brands. Of those brands, 158 (43.6%) never sent a welcome email, and 53 (14.6%) never sent the text they promised. It also costs money. In [Klaviyo’s 2026 benchmarks](' +
        KLAVIYO +
        '), automated flows, the [triggered flows](/glossary/triggered-flow) such as a welcome series and cart reminders, “generate nearly 41% of total email revenue from just 5.3% of sends”.',
    },
    {
      kind: 'stat',
      value: '43.6%',
      label: 'of 362 ecommerce brands never sent a welcome email to a new subscriber',
      source: 'Joy Joya, July 2026',
      href: JOYJOYA,
    },

    { kind: 'h3', id: 'cart-quiet', text: '2. A cart reminder gone quiet after a site change' },
    {
      kind: 'list',
      items: [
        '**What it means.** An [abandoned cart email](/glossary/abandoned-cart-email) goes to a shopper who left items in a basket. A relaunch, a new theme or a new checkout often breaks the trigger, and the brand sees it only as a quieter recovery line weeks later.',
        '**Who it matters to.** Email and SMS platforms, cart recovery tools, and checkout and payment providers.',
        '**How an SDR opens.** “I left a basket on your new site last Monday and no reminder came in 48 hours. The week before the relaunch, the same basket got one in an hour. Worth a look before Black Friday on the 27th?”',
        '**How to check it by hand.** Give an email address at checkout, leave a basket and wait 48 hours. Note what changed on the site and when; a new checkout platform also shows up in BuiltWith’s list of the technologies a site runs.',
      ],
    },
    {
      kind: 'p',
      text: 'Rejoiner studied 1,000 direct to consumer brands for [a report published in February 2025](' +
        REJOINER +
        '). It found that 68% of abandoned carts triggered a follow-up email, and that 40% of brands sent the first one within an hour. A reminder that stops after a relaunch moves a brand from the first group to the second without anyone deciding it.',
    },

    { kind: 'h3', id: 'texts-never', text: '3. Texts that never come after an opt-in' },
    {
      kind: 'list',
      items: [
        '**What it means.** The sign-up form asks for a phone number and consent to texts, then no text follows. The account pays for the opt-in and gets nothing from it.',
        '**Who it matters to.** SMS platforms, messaging APIs and the email platforms that sell texts beside email.',
        '**How an SDR opens.** “I ticked the text box when I joined your list 10 days ago, and no text has come yet, though the emails arrive fine. Is the SMS side still being set up?”',
        '**How to check it by hand.** Opt in with a number used for nothing else, send it a control text from another phone to prove it receives, and wait 7 days.',
      ],
    },

    { kind: 'h3', id: 'trial-silent', text: '4. A trial that goes silent after day 1' },
    {
      kind: 'list',
      items: [
        '**What it means.** A software account’s trial sends a welcome, then nothing: no prompt to invite a teammate, connect data or reach the step where users usually upgrade.',
        '**Who it matters to.** Onboarding and product adoption tools, lifecycle email for software companies, and in-app messaging.',
        '**How an SDR opens.** “I started a trial of your app on the 2nd. The welcome email came within a minute, then nothing for 9 days, not even a nudge to invite a teammate. Is that the onboarding you planned?”',
        '**How to check it by hand.** Start a trial with a work address you control, use the product once, then log every email and in-app message by trial day for 14 days.',
      ],
    },

    { kind: 'h3', id: 'new-platform', text: '5. A new sending platform' },
    {
      kind: 'list',
      items: [
        '**What it means.** The account’s emails now come from a different email platform. For the platform it left, that is a lost account; for every tool that plugs into the new one, it is the month integrations get chosen again.',
        '**Who it matters to.** Deliverability tools, and the review, loyalty and SMS apps that connect to an email platform.',
        '**How an SDR opens.** “I’m on your list, and your emails have come from a new platform since 9 November. Teams usually reconnect reviews, loyalty and texts in the month after a move. Is that on the list for this quarter?”',
        '**How to check it by hand.** Open two of the account’s emails a few weeks apart. In Gmail, click More beside Reply, then Show original, to see the full header. Compare the d= domain in the DKIM-Signature line and the Return-Path, the address bounces go back to; between them they often name the platform that sent the email.',
      ],
    },
    {
      kind: 'p',
      text: '[Gmail’s help page](' +
        GMAIL_HEADERS +
        ') shows the steps to open a full header. [DKIM](/glossary/dkim) is a signature checked on arrival, and its standard, [RFC 6376](' +
        RFC6376 +
        '), defines the d= tag as the domain “claiming responsibility for an introduction of a message into the mail stream”.',
    },

    { kind: 'h3', id: 'code-refused', text: '6. A checkout code refused' },
    {
      kind: 'list',
      items: [
        '**What it means.** The welcome email or the pop-up promises a code, and checkout rejects it, often on a subscription or a sale item the offer didn’t exclude in writing.',
        '**Who it matters to.** Checkout and payment providers, promotions tools and loyalty programmes.',
        '**How an SDR opens.** “Your welcome email gave me a 15% code last week, and checkout rejected it on the subscription option, while one-off items took it. Want the screenshot of the error?”',
        '**How to check it by hand.** Sign up for the code, add an item, enter the code at checkout and stop before paying. Try a one-off item and a subscription, because codes often treat them differently.',
      ],
    },

    { kind: 'h3', id: 'support-slow', text: '7. Support slower than it promises' },
    {
      kind: 'list',
      items: [
        '**What it means.** The help page promises a reply within a set time, and the reply takes longer, or the chat answers wrongly.',
        '**Who it matters to.** Help desk software and AI support agents.',
        '**How an SDR opens.** “I asked your support team a delivery question on Monday at 10:00, and the reply came 31 hours later. Your help page says 24. Is the queue busier than usual this month?”',
        '**How to check it by hand.** Ask one plain question through the site’s help form or chat, and time the reply against the promise on the help page.',
      ],
    },

    { kind: 'h3', id: 'signup-phone', text: '8. A sign-up that fails on a phone' },
    {
      kind: 'list',
      items: [
        '**What it means.** Account creation works on a laptop and breaks on a phone, often at a verification or one-time code step, so new customers drop there.',
        '**Who it matters to.** Identity, verification and onboarding providers.',
        '**How an SDR opens.** “I tried to create an account on my phone last week, and the verification step sent me back to the start twice. It worked on a laptop. Have you seen drop-off at that step?”',
        '**How to check it by hand.** Create an account on a phone and on a laptop with an address you control, and screenshot each step until the account is open or the step fails.',
      ],
    },
    {
      kind: 'p',
      text: 'Every opener follows the same four parts, so an SDR team can write its own for any signal. The parts are when you saw it, what you saw in a customer’s words, the step it touches, and one question the prospect can answer in a line. Each opener says the SDR signed up, which keeps the fact true and the tone friendly. Our guide to [cold email first line examples](/blog/cold-email-first-line-examples) gives more of them, grouped by what each vendor sells.',
    },

    { kind: 'h2', id: 'rank', text: 'How to rank buying signals in sales' },
    {
      kind: 'p',
      text: 'An SDR manager’s queue holds more signals than reps have hours, so the order decides the week. Four rules sort it.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Fit first.** A signal at the step your product runs outranks a sign of general activity. An email platform’s best signal is a welcome series that stopped; a help desk’s is a reply that missed its promise.',
        '**Proof second.** A signal with a date and a screenshot an SDR can quote outranks a score the SDR can’t explain to the prospect.',
        '**Freshness third.** Research intent and site visits describe a week of activity. A customer-facing gap lasts until the account fixes it, so re-check it weekly and stop writing the week it closes.',
        '**Stack them.** An account with a customer-facing gap and research intent in the same month goes to the top of the queue, and the gap goes in the first line.',
      ],
    },
    {
      kind: 'p',
      text: 'The same signals time other moves too: [sales trigger events examples](/blog/sales-trigger-events) covers when to start a sequence, and [Clay custom signals](/blog/clay-custom-signals) covers putting each one in a column your router reads.',
    },

    { kind: 'h2', id: 'by-hand', text: 'How to check customer-facing signals by hand' },
    {
      kind: 'p',
      text: 'A team can run this with an inbox, a spare phone and a shared sheet, starting with 20 accounts this week.',
    },
    { kind: 'h3', id: 'pick-signal', text: '1. Pick the signal that matches your product' },
    {
      kind: 'p',
      text: 'Choose one or two signals from the template that sit at the step your product runs. That means welcome and cart emails for an email platform, texts for an SMS platform, support replies for a help desk, and the sign-up on a phone for an identity provider. Fewer signals checked properly beat many checked once.',
    },
    { kind: 'h3', id: 'own-inbox', text: '2. Give each account its own inbox and number' },
    {
      kind: 'p',
      text: 'A separate address and phone number per account means every message arrives labelled. Use addresses and numbers your team controls, and never enter details that aren’t true.',
    },
    { kind: 'h3', id: 'set-off', text: '3. Set off the journey and screenshot each step' },
    {
      kind: 'p',
      text: 'Sign up, opt in to texts, leave a basket, start a trial or ask support a question, as the signal needs. Stop before any payment. Screenshot each step with the time on screen.',
    },
    { kind: 'h3', id: 'log', text: '4. Set the window and log what arrives' },
    {
      kind: 'p',
      text: 'Decide in advance how long counts as missing: an hour for a welcome email, 48 hours for a cart reminder, 7 days for texts. Log every message in one row per check.',
    },
    {
      kind: 'table',
      caption: 'One row of the log, filled in for an invented account. Copy the fields into a sheet.',
      cols: ['Field', 'Example'],
      rows: [
        ['Account', 'brightloom.example'],
        ['Signal', 'Cart reminder after a site change'],
        ['Profile', 'New customer, UK, on a phone'],
        ['Started', 'Mon 9 Nov, 09:20, basket of 2 items'],
        ['Window', '48 hours'],
        ['What arrived', 'Nothing by Wed 11 Nov, 09:20'],
        ['Evidence', 'Basket screenshot\nInbox screenshot at 48 hours'],
        ['Verdict', 'Gap, re-checked Wed 11 Nov'],
      ],
    },
    { kind: 'h3', id: 'headers', text: '5. Read the headers once a month' },
    {
      kind: 'p',
      text: 'Open one email per account each month with Show original and note the DKIM d= domain and the Return-Path. A change from one month to the next is the new sending platform signal, dated to the first email that shows it.',
    },
    { kind: 'h3', id: 'recheck', text: '6. Re-check before anyone writes' },
    {
      kind: 'p',
      text: 'Run the check again the day before an SDR sends. A gap that closed is no longer an opener, and a line about a problem the account already fixed costs more trust than it earns.',
    },
    { kind: 'h3', id: 'hours', text: '7. Work out the hours' },
    {
      kind: 'p',
      text: 'Each account takes about 25 minutes a month: the sign-up and opt-in, a basket or a trial, logging what arrives, a header check and a weekly re-check. Multiply by the accounts your SDRs own.',
    },
    {
      kind: 'art',
      caption: 'The sum for the largest team, with example figures. Replace each line with your own.',
      art: {
        kind: 'price',
        title: 'Customer-side checks by hand, example',
        rows: [
          { label: 'SDRs on the team', value: '10' },
          { label: 'Accounts each SDR owns', value: '200' },
          { label: 'Minutes a month per account', value: '25', note: 'Sign-up, basket, log, headers, re-check' },
          { label: 'Hours a month', value: '833', note: '2,000 accounts × 25 ÷ 60' },
        ],
        total: { label: 'SDRs working on it full time', value: 'About 5', note: 'At 160 working hours a month' },
      },
    },
    {
      kind: 'p',
      text: 'The same sum gives 208 hours a month for 500 accounts and 42 hours for 100. By hand, the method holds for 20 to 50 priority accounts. Past that, it needs an inbox and a number per account, kept open for months, with every email and screenshot saved and every gap re-checked before a rep writes.',
    },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. For [sales teams](/sales), it keeps each of these customer-facing signals for every account you name, every morning, from the welcome email and the cart reminder to support replies and the platform behind each email. [Prospect intelligence](/recipes/prospect-intelligence) writes each fact, its date and a screenshot link back to the same rows in Clay, your CRM or a sheet. [Exa](' +
        EXA +
        ') gives reps and their agents the public web in one call; Obsession gives them what an account shows only to its customers, and an agent can call both. Start with the 50 accounts your SDRs most want to win, so you can see what it does to reply rates, meetings booked and opportunities.',
    },
    {
      kind: 'cta',
      text: 'What each account and competitor sends its own customers, ready before the call. Welcome, cart and trial emails, texts, codes and support answers, each dated with its screenshot.',
      to: '/sales',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'tools', text: 'Buying signal sources compared', compare: true },
    {
      kind: 'p',
      text: 'Each option reads a different source of signals, and many teams combine several. We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Buying signal sources for SDR teams, by where the signal comes from. From each provider’s own pages, 11 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'Reps open on the same public facts as everyone', 'Teams living on inbound leads'],
        [
          'By hand: an SDR signs up to each account',
          'Sees what the account’s customers see',
          'Free, plus about 25 minutes a month per account',
          'Hours grow with every account, and history starts the day you begin',
          '20 to 50 priority accounts',
        ],
        [
          'Research intent: [Bombora](' + BOMBORA + '), [G2 Buyer Intent](' + G2 + ')',
          'Accounts researching your category, competitors or you',
          'On request at both',
          'Research activity across publishers or on G2',
          'Ranking accounts by interest',
        ],
        [
          'Website visits: [Dealfront](' + DEALFRONT + ')',
          'Companies on your site, with pages viewed and time spent',
          '[Free plan](' + DEALFRONT_PRICING + ') for the last 100 companies a month\nPaid from €79 a month, billed yearly',
          'Visitors to your own website',
          'Following up warm accounts',
        ],
        [
          'People signals: [UserGems](' + USERGEMS + ')',
          'More than 30 signals, job changes and hiring among them, with account and contact scoring',
          '[$40,000 to $150,000 a year](' + USERGEMS_PRICING + ')\nEnterprise on request',
          'Its pages don’t describe what an account sends its customers',
          'Job changes and multi-signal scoring',
        ],
        [
          'Technology installs: [BuiltWith](' + BUILTWITH + ')',
          'Which of 128,309+ technologies a site runs',
          '[From $295 a month](' + BUILTWITH_PLANS + ')',
          'An install shows a tool is there, not whether its emails arrive',
          'Lists by platform and spend',
        ],
        [
          'Public web search: [Exa](' + EXA + ')',
          'The public web and select private sources, searched by an agent in one call',
          '[$10 free credit](' + EXA_PRICING + ')\nSearch from $4 per 1,000',
          'Its pages don’t describe keeping what a company sends its customers',
          'Research and list building for agents',
        ],
        [
          'Obsession (ours): [Prospect intelligence](/recipes/prospect-intelligence), [Account watch](/recipes/account-watch)',
          'What each account you name sends its customers: welcome, cart and trial emails, texts, codes, support replies, sending platform',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'An account not yet covered starts its history the day it is added\nEvery journey stops short of paying',
          'Openers and account order for vendors whose product touches their prospects’ customers',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For what each account sends its own customers, use Obsession. It keeps every welcome, cart and trial email, text, checkout code, support reply and sending platform, dated, for every account you name and for as long as you follow it. Bombora and G2 show which accounts are researching your category, and Dealfront shows which companies read your own pages. UserGems tracks job changes and other people signals, BuiltWith shows the tools a site runs, and Exa gives an agent the public web in one call. By hand covers 20 to 50 priority accounts well.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'list',
      items: [
        '**One profile sees one customer’s view.** A new UK subscriber on a phone sees what the account shows new UK subscribers on phones. Record the profile, the country and the device with every signal.',
        '**A quiet email counts as missing only once its window closes.** Set the window per signal before the check starts, and re-check before an SDR writes.',
        '**Checks stop before payment.** Signals that need a real order, such as a delivery email, stay with your own customers’ feedback.',
        '**Software trials come with terms.** Read them before starting a trial for research, and use it as a prospect would.',
      ],
    },
    {
      kind: 'p',
      text: 'Once an account becomes a customer, the same outside view becomes an early warning. [Churn risk indicators](/blog/churn-risk-indicators) covers that for customer success teams, and [external account signals](/recipes/account-watch) puts each change on the account in your CRM. Start with one signal that matches the step your product runs, check it at 20 accounts this week, and write first to the ones with a dated gap.',
    },
    {
      kind: 'cta',
      text: 'Sample data from a real UK store in September 2026: 4 test customers, every inbox watched for 48 hours, and every email and screenshot, in each format the data comes in.',
      to: '/sample-output',
      label: 'See sample data',
    },

    { kind: 'h2', id: 'questions', text: 'Frequently asked questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are buying signals in sales?',
          a: 'A buying signal is a dated event at an account that makes a conversation with a vendor more likely to be welcome now. In B2B sales the event is about the company, such as researching a category, hiring or raising money. It can also be the company failing its own customers at a step a vendor sells a fix for.',
        },
        {
          q: 'What are some buying signals examples in B2B sales?',
          a: 'Research intent, website visits, job changes, hiring, funding, technology installs and public news are the familiar ones. Signals in what an account sends its customers add another group. They include a welcome email that stopped, a cart reminder gone quiet after a site change, texts that never come after an opt-in, a trial silent after day 1, a new sending platform, a refused checkout code, slow support replies and a sign-up that fails on a phone.',
        },
        {
          q: 'What is signal based selling?',
          a: 'Signal based selling means an SDR team works the accounts showing a signal first and opens each email on the signal itself. The queue changes daily as signals appear, and the first line becomes a fact the prospect recognises.',
        },
        {
          q: 'What are the strongest buying signals for an SDR?',
          a: 'The strongest signal sits at the step your product runs, has a date and a screenshot the SDR can quote, and is still true on the day the email goes out. For vendors whose product touches what their prospects’ customers see, a gap in the account’s own customer emails, texts or support usually ranks first.',
        },
        {
          q: 'How can SDRs find buying signals without paid tools?',
          a: 'Careers pages and job boards show hiring, and press releases show funding and launches. Signing up to an account shows its welcome emails, cart reminders, texts and support replies. Use an inbox and number per account, log what arrives with its time, and re-check before writing.',
        },
        {
          q: 'Is it all right to sign up to a prospect’s product to research it?',
          a: 'It depends on the prospect’s terms and the law where you are, and this is general information, not legal advice. Sign up the way any customer can, never enter details that aren’t true, and stop before paying.',
          link: { label: 'Is it legal to mystery shop competitors?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
        },
        {
          q: 'How often should an SDR team re-check a buying signal?',
          a: 'Re-check a customer-facing gap weekly and again the day before an email goes out, because a fixed gap is no longer an opener. Read email headers monthly for a platform change, and treat research intent and site visits as signals of the week they happened.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'Facts checked 11 November 2026',
      text: 'General information. Every provider’s features and prices are quoted from its own pages as they stood on 11 November 2026, and we tested none of the tools. Brightloom, Harrowgate and Pellmell are invented, and every opener, time and figure in the illustrations and the workload example is an example.',
    },
  ],

  sources: [
    { title: 'Bombora', publisher: 'Bombora', url: BOMBORA },
    { title: 'G2 Buyer Intent', publisher: 'G2', url: G2 },
    { title: 'Dealfront', publisher: 'Dealfront', url: DEALFRONT },
    { title: 'UserGems', publisher: 'UserGems', url: USERGEMS },
    { title: 'About Crunchbase', publisher: 'Crunchbase', url: CRUNCHBASE },
    { title: 'BuiltWith', publisher: 'BuiltWith', url: BUILTWITH },
    { title: 'Exa', publisher: 'Exa', url: EXA },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya', url: JOYJOYA, date: '2026-07-27' },
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: KLAVIYO, date: '2026' },
    { title: 'Abandoned cart email statistics and strategy guide: 2025 research report', publisher: 'Rejoiner', url: REJOINER, date: '2025-02-10' },
    { title: 'Trace an email with its full header', publisher: 'Gmail Help', url: GMAIL_HEADERS },
    { title: 'RFC 6376: DomainKeys Identified Mail (DKIM) Signatures', publisher: 'Internet Engineering Task Force', url: RFC6376, date: '2011-09' },
    { title: 'Pricing', publisher: 'Dealfront', url: DEALFRONT_PRICING },
    { title: 'Pricing', publisher: 'UserGems', url: USERGEMS_PRICING },
    { title: 'Plans', publisher: 'BuiltWith', url: BUILTWITH_PLANS },
    { title: 'Pricing', publisher: 'Exa', url: EXA_PRICING },
  ],

  related: [
    'cold-email-first-line-examples',
    'sales-trigger-events',
    'churn-risk-indicators',
    'clay-custom-signals',
    'recipe:prospect-intelligence',
    'recipe:account-watch',
    'recipe:email-sms-tracking',
    '/sales',
  ],
}
