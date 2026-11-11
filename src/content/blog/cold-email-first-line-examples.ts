import type { BlogPost } from './types'

/* Revenue team guides, spec 5 (_research/seo/revenue-teams-11nov/WRITER_BRIEF.md and PLAN.md, 11 Nov 2026). It owns
   "cold email first line examples" and personalized cold email first line, cold email opening lines, icebreaker examples
   for cold emails and how to personalize cold emails at scale (demand.json: page 1 is listicles and a Reddit thread;
   autocomplete returned nothing for the long forms, so demand is moderate). Reader: SDRs and BDRs and their managers at
   B2B software companies whose product touches what their prospects' customers see (persona key sdr_leader).
   The case: page 1 teaches compliments on podcasts, funding and posts, which AI research agents now draft for every row.
   This guide gives 24 first lines grouped by kind of vendor, each built on what the prospect's own customers received,
   framed as one sign-up the rep made ("I signed up to your store last week and…"), never as ongoing watching. Then the
   copyable template, where facts come from today (fair to public research, intent data, AI research agents and Exa),
   how to get the facts by hand, how to check a line before it goes (truth, tone, CAN-SPAM, PECR reg 23), the workload
   ladder, Obsession once, a fair comparison and the KPI close (reply rates, meetings booked, opportunities).
   Read at the source on 11 Nov 2026: Clay's Claygent page (its sample prompt) and pricing page; Gong Labs' "4 data-backed
   ways" (published 7 Jul 2023, modified 4 Mar 2026); Instantly's Cold Email Benchmark Report 2026 (updated 12 Jan 2026,
   2025 data); Exa's home, GTM use case and pricing pages; the FTC's CAN-SPAM guide; PECR regulation 23 on
   legislation.gov.uk. Obsession is described in the words of /sales, /recipes/prospect-intelligence, site.ts and
   /compare ("every step short of paying"); the platform behind an email follows /sales ("Their emails have come from a
   new platform since 2 October"). Fennick Home and every fact in the lines and pictures are invented examples. Left out:
   any reply-rate lift for our own lines (none measured), Gong's 87% buyer figure (it links only to a gated guide). No
   dashes. General information, never legal advice. */

const CLAYGENT = 'https://www.clay.com/claygent'
const GONG = 'https://www.gong.io/resources/labs/4-data-backed-ways-to-increase-your-email-reply-rate-and-book-that-meeting/'
const INSTANTLY = 'https://instantly.ai/cold-email-benchmark-report-2026'
const EXA = 'https://exa.ai/'
const EXA_GTM = 'https://exa.ai/use-cases/gtm'
const FTC = 'https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business'
const PECR = 'https://www.legislation.gov.uk/uksi/2003/2426/regulation/23'
const CLAY_PRICING = 'https://www.clay.com/pricing'
const EXA_PRICING = 'https://exa.ai/pricing'

export const post: BlogPost = {
  slug: 'cold-email-first-line-examples',
  title: 'Cold email first line examples for SDRs: open on the prospect’s own problem',
  dek: '24 first lines for sales development teams at companies that sell to brands, stores, apps and software companies. Each opens on something the prospect’s own customers received, with the fact behind it, why it works and how to check it before it goes.',
  metaTitle: 'Cold email first line examples: 24 openers for sales teams',
  description:
    'Cold email first line examples for SDRs: 24 openers by vendor type, each built on what the prospect’s customers received, with the fact behind it.',
  answer:
    'The best cold email first line examples open on a problem the prospect’s own customers met, such as “I signed up to your store on Monday, and your welcome email arrived 7 hours later.” A compliment on a podcast can now be drafted for every rep at once, while a line about the prospect’s own emails is true of one company. Obsession keeps what each company on your list shows only to its customers, dated with a screenshot, by API, MCP (the standard way AI agents call tools) or a table.',
  primaryKeyword: 'cold email first line examples',
  keywords: [
    'personalized cold email first line',
    'cold email opening lines',
    'icebreaker examples for cold emails',
    'how to personalize cold emails at scale',
    'cold email first lines',
    'sdr personalization',
  ],
  category: 'Watch other companies',
  order: 5,
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 18,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'fennick.example · a new subscriber',
      who: 'A new subscriber in the UK, from Monday 2 November',
      rows: [
        { time: 'Mon 09:00', text: 'Signed up through the homepage pop-up', detail: 'The pop-up promised 15% off', tone: 'info' },
        { time: 'Mon 09:01', text: 'Confirmation email', detail: 'Sent by the store’s email platform', tone: 'ok' },
        { time: 'Mon 16:12', text: 'Welcome email, 7 hours later', detail: 'Its code was 10% off', tone: 'late' },
        { time: 'Mon 16:20', text: 'Left an £85 basket', detail: 'Stopped before payment', tone: 'info' },
        { time: 'Wed 16:20', text: 'No basket reminder in 48 hours', detail: 'Spam folder checked', tone: 'fail' },
        { time: 'Thu 10:30', text: 'Chat: “Returns are free”', detail: 'The returns page says £3.95', tone: 'fail' },
      ],
      foot: 'Invented store. Each row is a first line for a different type of vendor.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Cold email first line examples that earn replies open on a problem the prospect’s own customers met this week, seen by signing up as one of them. “I signed up to your store on Monday, and your welcome email arrived 7 hours later” is true of one company. The prospect can check it in a minute, and it names the problem an email platform fixes.',
    },
    {
      kind: 'p',
      text: 'Most advice on first lines teaches the compliment: a podcast episode, a funding round, a LinkedIn post. AI research agents now draft those for every row of a list. [Clay’s page for Claygent](' +
        CLAYGENT +
        '), its research agent, offers the sample prompt “Write a personalized email copy based on recent news and job postings from this company’s website.” When every sales development representative (SDR) can produce the same compliment in one step, the prospect reads it as a template.',
    },
    {
      kind: 'p',
      text: 'A fact about the prospect’s own company still works. Gong Labs analysed more than 30,000 prospecting emails from more than 250 companies, and [found](' +
        GONG +
        ') that “engaging executive buyers (directors and above) using a company-specific topic triples prospecting email reply rates”. It also warns that “irrelevant personalization still falls flat”. The first email carries most of the result. [Instantly’s Cold Email Benchmark Report 2026](' +
        INSTANTLY +
        ') covers its users’ sending from January to mid-December 2025. It puts the average reply rate at 3.43%, and the top 10% of senders at 10.7% or more.',
    },
    {
      kind: 'stat',
      value: '58%',
      label: 'of all replies come from the first email in a cold email sequence',
      source: 'Instantly, Cold Email Benchmark Report 2026',
      href: INSTANTLY,
    },

    { kind: 'h2', id: 'what-works', text: 'What makes a personalized cold email first line work' },
    {
      kind: 'p',
      text: 'The first line is the sentence after the greeting, and most inboxes show it as preview text beside the subject line. A personalized cold email first line works when it passes 4 tests.',
    },
    {
      kind: 'list',
      items: [
        'It is a dated fact about the prospect’s business.',
        'The fact is a problem your product fixes.',
        'The prospect can check it in a minute.',
        'It could be sent to no other company.',
      ],
    },
    {
      kind: 'p',
      text: 'The strongest facts come from what the prospect sends the people who sign up. That means its welcome email, the reminder after a basket, the text after an opt-in, the chat’s answer and the emails in a free trial. Those reach only someone on the other side of the sign-up, so no other rep has them unless they did the same work. This works for any vendor whose product touches what the prospect’s customers see. That covers email and SMS platforms, deliverability, loyalty and reviews, checkout and payments, and help desks and AI support. It also covers messaging and verification APIs, identity and onboarding, and the tools software companies use to run trials.',
    },
    {
      kind: 'art',
      caption: 'The same invented prospect, 3 first lines. Only the third is true of one company, and it names a problem an email platform fixes.',
      art: {
        kind: 'runs',
        title: 'One prospect, three first lines',
        prompt: 'Write the first line to Fennick Home’s head of ecommerce',
        runs: [
          { label: 'From a podcast', answer: 'Loved your podcast episode on growing a homeware brand.', verdict: { tone: 'fail', text: 'Any tool drafts it' } },
          { label: 'From funding news', answer: 'Congratulations on the Series B, exciting times at Fennick.', verdict: { tone: 'fail', text: 'Every vendor sends it' } },
          { label: 'From a sign-up', answer: 'I signed up on Monday, and your welcome email arrived 7 hours later.', verdict: { tone: 'ok', text: 'Only a subscriber knows' } },
        ],
        foot: 'Fennick Home is an invented store at fennick.example.',
      },
    },
    { kind: 'h3', id: 'template', text: 'The first line template' },
    {
      kind: 'p',
      text: 'Every line in the examples follows one shape, so a team can copy it into its own playbook. Keep it to one sentence of under 25 words.',
    },
    {
      kind: 'table',
      caption: 'The first line template, with an example in each part. The benchmark part is optional',
      cols: ['Part', 'What to write', 'Example'],
      rows: [
        ['When', 'A day the prospect can check', 'On Monday'],
        ['What you did', 'One thing any customer does', 'I signed up to your store'],
        ['What happened', 'What arrived or didn’t, with a time', 'your welcome email arrived 7 hours later'],
        ['Their benchmark', 'Their own promise or page', 'your help page promises 24 hours'],
      ],
    },
    {
      kind: 'p',
      text: 'The second sentence offers the screenshot, and the third says in one line what your product changes. The fact does the persuading, so the line needs no adjectives.',
    },

    { kind: 'h2', id: 'examples', text: '24 cold email first line examples for 8 types of vendor' },
    {
      kind: 'p',
      text: 'Each line is written as a rep who signed up once, on a date the prospect can check, and stopped before paying. Each comes with the fact behind it and why it works. Pick the group your company sells into, then swap in the fact you found.',
    },
    { kind: 'h3', id: 'email-sms', text: 'Email and SMS platforms selling to brands' },
    {
      kind: 'list',
      items: [
        '**“I signed up to your store on Monday, and your welcome email arrived 7 hours later.”** Behind it: the welcome email’s arrival time, measured from the sign-up confirmation. Why it works: welcome timing is a setting in the prospect’s email platform, and they can check it in their own flow report.',
        '**“I left an £85 basket on your store on Monday evening, and no reminder had arrived by Wednesday night.”** Behind it: no [abandoned cart email](/glossary/abandoned-cart-email) inside 48 hours, with the spam folder checked. Why it works: the prospect believes that flow is running, and the basket puts a number on it.',
        '**“I ticked the box for texts when I signed up last week, and no text has arrived since.”** Behind it: a text opt-in with no message inside 7 days. Why it works: an SMS vendor sells the revenue from that list, and an opt-in with no text is a list nobody is using.',
        '**“I signed up on Monday and got the same welcome email twice, 4 minutes apart.”** Behind it: 2 identical emails with their arrival times. Why it works: a doubled welcome points to 2 flows firing on one sign-up, a setup problem the platform’s onboarding team fixes.',
      ],
    },
    { kind: 'h3', id: 'deliverability', text: 'Deliverability and email authentication' },
    {
      kind: 'list',
      items: [
        '**“Your welcome email went to spam in a new Outlook inbox I signed up with on Monday.”** Behind it: the folder where the email landed, in one new inbox. Why it works: a sending report counts an email as delivered, and the spam folder is where the subscriber found it.',
        '**“Your welcome email on Monday failed its DKIM check in a new Gmail inbox.”** [DKIM](/glossary/dkim) is a signature checked on arrival to prove which company sent an email. Behind it: the authentication result in the email’s own headers. Why it works: authentication is a deliverability vendor’s first fix, and the prospect can read the same header in a minute.',
      ],
    },
    { kind: 'h3', id: 'loyalty-reviews', text: 'Loyalty, reviews and referral apps' },
    {
      kind: 'list',
      items: [
        '**“I joined your rewards club when I signed up last week, and the email with my welcome points hasn’t arrived.”** Behind it: the loyalty welcome message missing inside the window. Why it works: the points email is the first thing a loyalty programme sends, and the gap sits in a setting the prospect can open today.',
        '**“The referral link in your welcome email on Monday opened a page saying the offer had ended.”** Behind it: the link, the page it opened and the date. Why it works: a referral programme runs on that link, so a broken one costs every share a customer makes.',
        '**“Your welcome email on Monday asked me to review a product before I’d bought anything.”** Behind it: a review request sent to a subscriber with no order. Why it works: a reviews app that fires on sign-up instead of delivery is a trigger setting a reviews vendor can show them.',
      ],
    },
    { kind: 'h3', id: 'checkout-payments', text: 'Checkout, payments and promotions' },
    {
      kind: 'list',
      items: [
        '**“The 15% code from your welcome email was refused at checkout on Tuesday.”** Behind it: the code, the basket and the error message, in one screenshot. Why it works: a refused code loses the order at the last step, and a checkout or promotions vendor can show the rule that rejected it.',
        '**“On a phone last week, your checkout offered card payment only, with no Apple Pay or PayPal.”** Behind it: the payment options shown at checkout on a phone. Why it works: wallet options are what a payments vendor sells, and the screenshot shows exactly what a mobile shopper saw.',
        '**“Delivery was free on your product page on Monday, and a £4.95 charge appeared only at the last step of checkout.”** Behind it: the product page and the final checkout step, side by side. Why it works: a charge that appears late is a checkout problem with a price on it.',
        '**“Your homepage pop-up offered 15% on Monday, and the welcome email that followed offered 10%.”** Behind it: 2 different offers for one sign-up. Why it works: a pop-up or onsite vendor can show which tool sent which code.',
      ],
    },
    { kind: 'h3', id: 'support', text: 'Help desks and AI support' },
    {
      kind: 'list',
      items: [
        '**“I asked your chat on Monday whether returns are free, and it said yes; your returns page says £3.95.”** Behind it: the chat transcript beside the policy page, both dated. Why it works: a wrong answer from a support bot becomes a refund or a complaint, and help desk and AI support vendors sell accurate answers.',
        '**“I emailed your support at 10:00 on Monday, and the first reply came 31 hours later; your help page promises 24.”** Behind it: the response time against the prospect’s own published promise. Why it works: their promise is the benchmark, so the line needs no claim from you.',
        '**“During my trial last week, your in-app chat said single sign-on (SSO) was included; your pricing page lists it on Enterprise only.”** Behind it: the chat answer beside the pricing page. Why it works: a bot that promises a feature the plan lacks creates a sales problem as well as a support one, at a software company that sells on trust.',
      ],
    },
    { kind: 'h3', id: 'messaging', text: 'Messaging and verification APIs selling to apps' },
    {
      kind: 'list',
      items: [
        '**“Your sign-up code took 6 minutes to reach my phone on Monday, and the first one never came.”** Behind it: each one-time code with the time it was requested and the time it arrived. Why it works: code delivery is what an SMS or verification API sells, and a slow code stalls the sign-up at a step the prospect’s growth team measures.',
        '**“I chose WhatsApp updates when I signed up last week, and every message since has come by email instead.”** Behind it: the channel chosen at sign-up and the channel each message used. Why it works: a messaging vendor sells delivery on the channel the customer chose.',
      ],
    },
    { kind: 'h3', id: 'identity', text: 'Identity, sign-up and onboarding' },
    {
      kind: 'list',
      items: [
        '**“Your verification email took 40 minutes to arrive on Monday, so my sign-up sat unfinished.”** Behind it: the sign-up time and the arrival time of the verification email. Why it works: identity and onboarding vendors sell completed sign-ups, and 40 minutes is long enough for a new customer to leave.',
        '**“Your sign-up failed at the address step on a phone last week, with no error message.”** Behind it: a screenshot of the step and the device. Why it works: the prospect’s analytics show a drop at that step without the reason, and the screenshot is the reason.',
      ],
    },
    { kind: 'h3', id: 'trials', text: 'Trials, onboarding and retention at software companies' },
    {
      kind: 'list',
      items: [
        '**“I started your free trial on 2 November, and after the welcome email nothing came until ‘Your trial ends tomorrow’ on day 13.”** Behind it: every trial email by trial day. Why it works: onboarding and lifecycle vendors sell the days between, and the prospect’s own trial shows the silence.',
        '**“Your free plan stopped me at 3 projects on day 2, and no upgrade prompt explained the paid plans.”** Behind it: the [trial limit](/glossary/trial-limit) and the missing [upgrade prompt](/glossary/upgrade-prompt), each with a screenshot. Why it works: pricing and paywall vendors sell the moment a free user hits a limit.',
        '**“When I cancelled my trial last week, the cancel page offered 50% off for 3 months, and the email that followed offered 30%.”** Behind it: the [save offer](/glossary/save-offer) in the [cancel flow](/glossary/cancel-flow) beside the one in the email. Why it works: retention and billing vendors sell one save offer, set once, and 2 offers mean 2 tools disagree.',
        '**“I invited a teammate during my trial on Monday, and the invitation email never reached them.”** Behind it: the invite time and an empty second inbox after 24 hours. Why it works: product-led growth tools sell team invites, because each invite is a new user.',
      ],
    },

    { kind: 'h2', id: 'sources', text: 'Where the facts behind cold email opening lines come from' },
    {
      kind: 'p',
      text: 'Most sales teams use similar data, from contact databases and intent tools to Exa’s search of the public web. Each source is good at its part of the job.',
    },
    { kind: 'h3', id: 'public-research', text: 'Public research by hand' },
    {
      kind: 'p',
      text: 'The company’s website, its annual report, the latest news, its job posts and its leaders’ posts give a rep context on the company and the person. They cost nothing but time, and every other rep selling into the account reads the same pages.',
    },
    { kind: 'h3', id: 'databases-intent', text: 'Contact databases and intent data' },
    {
      kind: 'p',
      text: 'Contact databases give names, titles and verified addresses, and intent tools report which accounts are researching a topic across the web. Together they say who to email and when. Intent data says an account might buy; its own customer emails show why.',
    },
    { kind: 'h3', id: 'ai-agents', text: 'AI research agents' },
    {
      kind: 'p',
      text: 'An AI research agent runs the public research for every row of a list and drafts a line from it. [Claygent](' +
        CLAYGENT +
        ') describes itself as able to take on “company research, lead qualification, signal detection”, with web access “to do more real-time research” and a reasoning trace behind each decision. Its pages don’t describe signing up as a customer at the companies it researches.',
    },
    { kind: 'h3', id: 'exa', text: 'Exa and search of the public web' },
    {
      kind: 'p',
      text: 'As of 11 November 2026, [Exa](' +
        EXA +
        ') calls itself “The world’s data for AI agents” and says it searches “the largest index of public web and private information”. Its [page for go-to-market teams](' +
        EXA_GTM +
        ') offers “One company data API for finding accounts, enriching your CRM with cited sources, and tracking signals that win deals”. It draws on 70 million companies, more than 1 billion people profiles and live web sources. That puts the public web in front of a rep in seconds. Exa’s pages don’t describe signing up at the companies it covers or keeping what those companies send their customers. [Obsession vs Exa](/compare/obsession-vs-exa) sets the two side by side.',
    },

    { kind: 'h2', id: 'what-they-miss', text: 'What public sources can’t show' },
    {
      kind: 'p',
      text: 'Every source in that list reads what a company publishes, or what others publish about it. What a company sends the people who sign up sits on the other side of a [login wall](/glossary/login-wall), any step a site puts between a visitor and what it shows customers. Its welcome email, its basket reminder, the text after an opt-in, the chat’s answer and the emails in its trial reach only a customer. Our guide to [the web behind the login](/blog/the-web-behind-the-login) covers what sits behind each sign-up, login and form.',
    },
    {
      kind: 'p',
      text: 'The same facts double as timing. A welcome email that stops is a [buying signal](/blog/buying-signals-examples) for an email platform, and a trial that goes quiet after day 1 is one for an onboarding tool. So is the week an account’s emails start coming from a new email platform. An SDR manager can sort a whole territory by them.',
    },

    { kind: 'h2', id: 'by-hand', text: 'How to get the facts by hand' },
    {
      kind: 'p',
      text: 'One rep can collect these facts for a short list of top accounts this week. Each step has what a pass looks like.',
    },
    { kind: 'h3', id: 'step-1', text: '1. Pick the accounts and the problem' },
    {
      kind: 'p',
      text: 'List the accounts. For each one, write down the problem your product fixes that a customer could see, such as a slow welcome email, a missing reminder or a wrong chat answer. A pass is one sentence per account.',
    },
    { kind: 'h3', id: 'step-2', text: '2. Sign up as a customer' },
    {
      kind: 'p',
      text: 'Use a fresh inbox and phone number for each account, in your own name or your company’s, and never enter details that aren’t true. The guide [is it legal to mystery shop competitors](/blog/is-it-legal-to-mystery-shop-competitors) sets out what decides whether a method is allowed; none of this is legal advice. A pass is the confirmation email in the inbox, with its time written down.',
    },
    { kind: 'h3', id: 'step-3', text: '3. Do what a customer does, then stop before paying' },
    {
      kind: 'p',
      text: 'Opt in to texts, leave a basket, start a trial or ask the chat one question, whichever matches the problem. Record the country and the device, because a store can treat a UK phone and a US desktop differently.',
    },
    { kind: 'h3', id: 'step-4', text: '4. Wait for the window to close' },
    {
      kind: 'p',
      text: 'Set the window before you start: 1 hour for a welcome email, 48 hours for a basket reminder, 7 to 14 days for texts. A message counts as missing only once the window has closed and the spam folder has been checked.',
    },
    { kind: 'h3', id: 'step-5', text: '5. Save the evidence' },
    {
      kind: 'p',
      text: 'Screenshot every screen and keep every email with its full header, which shows the time it arrived and the domain that sent it. A pass is a folder per account with a dated file for each fact.',
    },
    { kind: 'h3', id: 'step-6', text: '6. Write the line' },
    {
      kind: 'p',
      text: 'Fill the template: when, what you did, what happened, and the prospect’s own benchmark where one exists. Read it aloud. If it would make sense sent to another company, it isn’t finished.',
    },

    { kind: 'h2', id: 'check', text: 'How to check a first line before it goes' },
    {
      kind: 'list',
      items: [
        '**True, in the right voice.** Write “I” only if you signed up yourself. When your team or a service it uses collected the fact, write “we”, and keep the screenshot ready to send.',
        '**What any customer could see.** Nothing about a person, nothing from inside their systems, nothing that needed a password a customer wouldn’t have.',
        '**One sign-up, said once.** The line describes one visit on one date. It never suggests the company has been followed for months, and it offers the screenshot instead of attaching a file of findings.',
        '**A problem your product fixes.** A true fact your product doesn’t touch is trivia, and the prospect reads it that way.',
        '**Still true on send day.** Teams fix broken emails and codes. Check the welcome email or the code again if the line is more than a week old.',
        '**Within the law.** In the US, the [FTC’s CAN-SPAM guide](' +
          FTC +
          ') says “the law makes no exception for business-to-business email”. It bans deceptive subject lines and requires a valid postal address and opt-outs honoured within 10 business days. In the UK, [regulation 23 of the Privacy and Electronic Communications Regulations](' +
          PECR +
          ') bars marketing email that hides who it is from or gives no valid address for opting out. This is general information, not legal advice.',
      ],
    },

    { kind: 'h2', id: 'at-scale', text: 'How to personalize cold emails at scale' },
    {
      kind: 'p',
      text: 'Signing up by hand takes about 15 minutes an account: 10 to sign up, act and screenshot, and 5 to log what arrives across the window (example times). The days of waiting run alongside. The sum grows with every account a team adds.',
    },
    {
      kind: 'art',
      caption: 'The sum for the largest team, with example figures. Replace each line with your own.',
      art: {
        kind: 'price',
        title: 'Sign-ups by hand, example figures',
        rows: [
          { label: 'SDRs on the team', value: '40' },
          { label: 'New accounts each, a week', value: '50' },
          { label: 'Minutes per account', value: '15', note: 'Sign up, act, screenshot, log' },
          { label: 'Hours a week', value: '500', note: '40 × 50 × 15 ÷ 60' },
        ],
        total: { label: 'Full-time people needed', value: 'About 13', note: '500 hours ÷ 37.5 hours a week' },
      },
    },
    {
      kind: 'p',
      text: 'The same sum gives 125 hours a week for 10 SDRs, and 12.5 hours for one. Past a short list of top accounts, it needs an inbox and phone number per account, kept open for weeks, with every original saved.',
    },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. For outbound, Obsession’s [prospect intelligence](/recipes/prospect-intelligence) signs up, opts in to texts and asks the chat at every company on your list. It writes each fact, its date and its screenshot back to the same rows in Clay, a sheet or the CRM, for as long as you set. It also shows the platform that sent each email, and the week an account’s emails start coming from a different one, as on [the page for sales teams](/sales). [Exa](' +
        EXA +
        ') gives reps the public web in seconds; Obsession gives them what each account sends the people who sign up, and a team can use both. Run it on the accounts your SDRs open this month, so you can see what it does to reply rates, meetings booked and opportunities.',
    },
    {
      kind: 'cta',
      text: 'What each account on your list sends its own customers, from the welcome email to the chat answer, dated with a screenshot and ready for the first line.',
      to: '/#join',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'options', text: 'Where SDRs get first line facts, compared', compare: true },
    {
      kind: 'p',
      text: 'Each option reads a different part of an account. We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026. Facts checked 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Sources for cold email first lines, by where their facts come from. From each provider’s own pages, 11 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Doing nothing: a template opener',
          'Costs no time',
          'Free',
          'Reads like every other email in the inbox',
          'Lists too large to research at all',
        ],
        [
          'By hand: website, news, annual report, job posts',
          'Context on the company and the person',
          'Free, plus minutes per account',
          'What a company publishes, read by every rep',
          'Context before a call',
        ],
        [
          'AI research agents: [Claygent](' + CLAYGENT + ')',
          'Public research and a drafted line on every row of a list',
          '[Free plan; credit-based paid plans](' + CLAY_PRICING + '), priced on its pricing page',
          'Its pages don’t describe signing up as a customer',
          'Lines from public facts, at list scale',
        ],
        [
          'Search of the public web: [Exa](' + EXA + ')',
          'Company and people data plus the live web, in one call',
          '[$10 free credit a month; search from $4 per 1,000](' + EXA_PRICING + ')',
          'Its pages don’t describe keeping what a company sends its customers',
          'Finding accounts and public facts fast',
        ],
        [
          'By hand: sign up as a customer',
          'Sees what a new customer gets',
          'Free, plus about 15 minutes an account',
          'An inbox and phone number per account, kept for weeks',
          'A short list of top accounts',
        ],
        [
          'Obsession (ours): [Prospect intelligence](/recipes/prospect-intelligence), [Email and SMS tracking](/recipes/email-sms-tracking), [Trial teardown](/recipes/trial-teardown)',
          'Keeps what each account shows only to its customers: emails, texts, chat answers, trial emails, the platform that sent each email',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'An account not yet covered starts its history the day it is added\nOrders and identity checks stay with your own team',
          'First lines about the prospect’s own customers, for every account on the list',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For a first line about what the prospect’s own customers received, use Obsession, which keeps it dated for every account on your list, for as long as you set. Public research and Exa give the context on the company. AI research agents draft lines from public facts across a whole list, and signing up by hand works for a short list of top accounts.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'list',
      items: [
        '**Lines about orders need an order.** Delivery emails, returns and review requests after a purchase reach only someone who bought. Obsession covers every step short of paying, so those lines come from an order your own team placed.',
        '**One sign-up is one customer’s view.** A new UK subscriber on a phone sees what that store shows new UK subscribers on phones. Say so in the line when it matters.',
        '**A fact that isn’t a problem is not a first line.** Many sign-ups will turn up nothing worth saying. That is useful too: it moves the account down the list.',
      ],
    },
    {
      kind: 'p',
      text: 'When the prospect replies, the [sales business case template](/blog/sales-business-case-template) opens the next call with the same screenshot. Teams that want each fact as a field in their own tools can follow [Clay custom signals](/blog/clay-custom-signals). Start with the 10 accounts your SDRs most want to meet this month, and write each first line from their own inbox. [Sales intelligence from behind the login](/use-cases/sales-intelligence-behind-the-login) shows the same view for every role on a revenue team, with an example for each.',
    },
    {
      kind: 'cta',
      text: 'Sample data from a real UK store in September 2026: 4 test customers, every inbox watched for 48 hours, and each email and screenshot in every format it comes in.',
      to: '/sample-output',
      label: 'See sample data',
    },

    { kind: 'h2', id: 'questions', text: 'Frequently asked questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are good cold email first line examples?',
          a: 'The strongest open on a dated problem the prospect’s own customers met, such as “I signed up to your store on Monday, and your welcome email arrived 7 hours later.” Each is true of one company, can be checked in a minute and names a problem your product fixes. Compliments on podcasts or funding rounds are now drafted for every rep at once, so prospects read them as templates.',
        },
        {
          q: 'How do you write a personalized cold email first line?',
          a: 'Use 4 parts in one sentence of under 25 words: when, what you did as a customer, what happened, and the prospect’s own benchmark where one exists. For example: on Monday, I emailed your support, and the reply came 31 hours later, while your help page promises 24.',
        },
        {
          q: 'What are good icebreaker examples for cold emails?',
          a: 'The icebreakers that work in B2B are facts the prospect recognises from their own business. Examples are a welcome email that came late, a code refused at checkout or a chat answer that contradicts the pricing page. Keep the tone of a peer passing on something useful, and offer the screenshot instead of describing it at length.',
        },
        {
          q: 'How do you personalize cold emails at scale?',
          a: 'Collect one fact per account from what it sends its own customers, then write each line from the template. By hand that takes about 15 minutes an account plus the waiting window. Obsession collects those facts for every account on a list and writes each one, with its date and screenshot, back to the same rows.',
          link: { label: 'Prospect intelligence', to: '/recipes/prospect-intelligence' },
        },
        {
          q: 'Should a cold email open with a compliment?',
          a: 'Only if it is specific to the person and true. Gong Labs found that company-specific topics lifted replies most with directors and above, and warned that irrelevant personalization falls flat. A fact about the prospect’s own customers is specific by nature.',
        },
        {
          q: 'Is it legal to sign up to a prospect’s store to write a first line?',
          a: 'Signing up as any customer can, in your own name, is how most teams test a public sign-up, though each site’s terms and the law where you are decide what is allowed. Never enter details that aren’t true, and never go past an identity check. This is general information, not legal advice.',
          link: { label: 'Is it legal to mystery shop competitors?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
        },
        {
          q: 'How long should a cold email first line be?',
          a: 'One sentence of under 25 words, so most of it shows in the preview text beside the subject line. The second sentence offers the screenshot and the third says what your product changes.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About these examples',
      text: 'Facts checked 11 November 2026. Every first line, store, time and figure in the examples and pictures is an invented example; Fennick Home is not a real company. Tools are described from each provider’s own pages as they stood on 11 November 2026, and we tested none of them. Rules are quoted from the FTC’s guide and UK legislation as general information, not legal advice.',
    },
  ],

  sources: [
    { title: 'Claygent: specialized agents for every part of your GTM', publisher: 'Clay', url: CLAYGENT },
    { title: '4 data-backed ways to increase your email reply rate and book that meeting', publisher: 'Gong Labs', url: GONG, date: '2026-03-04' },
    { title: 'Cold Email Benchmark Report 2026', publisher: 'Instantly', url: INSTANTLY, date: '2026-01-12' },
    { title: 'Exa: the world’s data for AI agents', publisher: 'Exa', url: EXA },
    { title: 'Company data API and CRM enrichment for GTM teams', publisher: 'Exa', url: EXA_GTM },
    { title: 'CAN-SPAM Act: a compliance guide for business', publisher: 'Federal Trade Commission', url: FTC, date: '2023-08' },
    { title: 'The Privacy and Electronic Communications (EC Directive) Regulations 2003, regulation 23', publisher: 'legislation.gov.uk', url: PECR, date: '2003' },
    { title: 'Pricing', publisher: 'Clay', url: CLAY_PRICING },
    { title: 'Pricing', publisher: 'Exa', url: EXA_PRICING },
  ],

  related: [
    'buying-signals-examples',
    'sales-business-case-template',
    'clay-custom-signals',
    'recipe:prospect-intelligence',
    'recipe:email-sms-tracking',
    'recipe:trial-teardown',
    '/sales',
  ],
}
