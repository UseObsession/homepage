import type { BlogPost } from './types'

/* Revenue team guides, spec 4 (_research/seo/revenue-teams-11nov/WRITER_BRIEF.md and PLAN.md, 11 Nov 2026). It owns
   "sales business case template" and business case template for b2b sales, how to write a sales business case,
   business case example sales and discovery call prep (Google autocomplete, US and UK, 11 Nov: demand.json). The
   renewal business case was a retired recipe (/recipes/business-case redirects to /recipes), so nothing else owns it.
   Reader: account executives at B2B software companies whose product touches what their prospects' customers see
   (persona key ae). Page 1 today (Dock, Mutiny, ProjectManager, Smartsheet, Canva) is five-section frames in which
   the seller writes the problem; this guide puts the prospect's own dated problem on page 1 and builds the cost, the
   options, the plan and the proof on it, for an email and SMS platform, a help desk and AI support vendor, and an
   identity and onboarding vendor. Exa's GTM use case page is credited in its own words.
   Read at the source on 11 Nov 2026: Dock's sales business case page (9 Sep 2024, updated 4 Feb 2026); Mutiny's
   business case template post (Matt Ratchford, 10 Nov 2026); HM Treasury's Green Book 2026 (10 Mar 2026, updated
   28 Oct 2026: Table 2, the Five Case Model, business as usual as the benchmark, the do minimum and gold plating);
   Forrester's State of Business Buying 2024 release (4 Dec 2024); Baymard's cart abandonment page (updated 28 Oct
   2026); Klaviyo's 2026 abandoned cart benchmarks (Tiff Regaudie, 2 Oct 2026); Exa's home, GTM use case and pricing
   pages. Obsession is described in the words of site.ts, /sales, the prospect intelligence and account watch recipes,
   /compare/obsession-vs-exa and /sample-output. Larkspur, Corvel Home and Pennant are invented, at .example
   addresses, as are every time and every input in the cost examples. No dashes. General information, never legal
   advice, on signing up to a prospect's product. */

const DOCK = 'https://www.dock.us/library/sales-business-case'
const MUTINY = 'https://www.mutinyhq.com/blog/business-case-template-for-b2b-sales'
const FORRESTER = 'https://www.forrester.com/press-newsroom/forrester-the-state-of-business-buying-2024/'
const GREEN_BOOK = 'https://www.gov.uk/government/publications/the-green-book--2/the-green-book-2026'
const BAYMARD = 'https://baymard.com/lists/cart-abandonment-rate'
const KLAVIYO = 'https://www.klaviyo.com/blog/abandoned-cart-benchmarks'
const EXA = 'https://exa.ai/'
const EXA_GTM = 'https://exa.ai/use-cases/gtm'
const EXA_PRICING = 'https://exa.ai/pricing'

export const post: BlogPost = {
  slug: 'sales-business-case-template',
  title: 'Sales business case template for account executives: open with the prospect’s own screenshot',
  dek: 'A template account executives can copy, opening on the prospect’s own problem, dated, with its screenshot. The cost in their numbers, the options, the plan and the proof follow, worked for 3 kinds of vendor.',
  metaTitle: 'Sales business case template: open on the prospect’s problem',
  description:
    'Sales business case template for account executives: page 1 is the prospect’s own dated problem and screenshot, then the cost, options, plan and proof.',
  answer:
    'A sales business case template sets out what a buyer’s finance lead needs to approve a deal: the problem, its cost, the options, the plan and the proof. Put the prospect’s own problem on page 1, dated, with the screenshot or email that shows it, such as a basket reminder that never arrived. Obsession keeps what each prospect shows only to its customers, dated with a screenshot, and looks it up by API, MCP (the standard way AI agents call tools) or a table.',
  primaryKeyword: 'sales business case template',
  keywords: [
    'sales business case template',
    'business case template for b2b sales',
    'how to write a sales business case',
    'business case example sales',
    'sales business case example',
    'discovery call prep',
    'account executive business case',
  ],
  category: 'Watch other companies',
  order: 4,
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 13,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'larkspur.example · page 1',
      who: 'A new subscriber in the US, from Tuesday 3 November',
      rows: [
        { time: 'Tue 09:00', text: 'Signed up through the footer form', detail: 'Marketing box ticked, screenshot dated', tone: 'info' },
        { time: 'Tue 09:04', text: 'Welcome email: 10% off', detail: 'The list works', tone: 'ok' },
        { time: 'Tue 09:12', text: 'Left a $64 basket', detail: 'Signed in, 2 items', tone: 'info' },
        { time: 'Wed 09:12', text: 'No reminder after 24 hours', detail: 'Spam and Promotions checked', tone: 'late' },
        { time: 'Thu 09:12', text: 'No reminder after 48 hours', detail: 'The window has closed', tone: 'fail' },
        { time: 'Fri 10:00', text: 'Business case sent', detail: 'Page 1: these rows, each linked', tone: 'info' },
      ],
      foot: 'Invented brand, times and basket. Each row links its screenshot or the original email.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A sales business case template is the document a buyer’s finance lead reads before signing: the problem, its cost, the options, the plan and how the result will be proved. The template here is for account executives at B2B software companies whose product touches what their prospects’ customers see. That covers email and SMS, help desk and AI support, checkout and payments, and identity and onboarding. Its first page is the prospect’s own problem, dated, with the screenshot or email that shows it.',
    },
    {
      kind: 'p',
      text: 'Most published templates use five sections. [Dock’s](' +
        DOCK +
        ') runs from an executive summary and current challenges to the business impact and the investment, and is built for the chief financial officer. [Mutiny’s](' +
        MUTINY +
        ') puts the problem first, then the cost of inaction. Both frames are sound, and in both the seller writes the problem section. A first page that shows the problem happening at the prospect, dated, can be checked by their finance lead in a minute, with nobody presenting it.',
    },
    {
      kind: 'stat',
      value: '13 people',
      label: 'involved in the average B2B buying decision, with 89% of purchases involving two or more departments',
      source: 'Forrester, The State of Business Buying 2024, 4 December 2024',
      href: FORRESTER,
    },
    {
      kind: 'p',
      text: 'Most of those people never meet the account executive. [Forrester’s release](' +
        FORRESTER +
        ') also says 86% of B2B purchases stall during the buying process. A case that gets forwarded has to make its point on page 1, in evidence the reader can open.',
    },

    { kind: 'h2', id: 'template', text: 'The sales business case template, section by section' },
    {
      kind: 'p',
      text: 'The template has 7 sections, written in the prospect’s words and numbers. Copy the table into a document and fill one row at a time; page 1 comes from your own sign-up at the prospect, and the numbers come from discovery.',
    },
    {
      kind: 'table',
      caption: 'A sales business case template: 7 sections, each with what goes in it and where it comes from',
      cols: ['Section', 'What goes in it', 'Where it comes from'],
      rows: [
        ['1. The problem, dated', 'One fact, its date and time, the screenshot or email', 'Your own sign-up, trial or basket at the prospect'],
        ['2. What it costs', 'Their volume × their rate × their value, a month', 'Discovery, their analytics, their finance team'],
        ['3. Business as usual', 'The same cost over 3, 6 and 12 months', 'Section 2, multiplied out'],
        ['4. The options', 'Do minimum, fix in house, another vendor, your product', 'Discovery, and what they’ve tried'],
        ['5. The plan', 'Owners, dates and the first 30, 60 and 90 days', 'Your onboarding plan, agreed with their team'],
        ['6. How the result is proved', 'The page 1 journey rerun after go-live, dated', 'The same steps, repeated'],
        ['7. The ask', 'The decision, the signer and the date', 'Their buying process'],
      ],
    },
    {
      kind: 'p',
      text: 'The order follows how a finance reader tests a proposal. [HM Treasury’s Green Book](' +
        GREEN_BOOK +
        ') is the UK government’s guide to appraising spending, updated on 28 October 2026. It builds every business case on 5 cases: strategic, economic, commercial, financial and management. Sections 1 to 3 here are its strategic case and section 4 its economic case. Sections 5 to 7 cover its commercial, financial and management cases, cut to what a software purchase needs.',
    },

    { kind: 'h2', id: 'page-1', text: 'Page 1: the prospect’s own problem, dated' },
    {
      kind: 'p',
      text: 'Page 1 holds one fact the prospect can check for themselves. It shows something that happened to a customer of theirs, which their own dashboards may not show, because a missing email never appears in a sent report. It has 6 parts.',
    },
    {
      kind: 'list',
      items: [
        '**The fact, in one sentence a finance lead can repeat:** “A basket left on larkspur.example at 09:12 on Tuesday 3 November got no reminder by 09:12 on Thursday.”',
        '**The journey that produced it:** what you did, as which customer and from which country, timed to the minute with the time zone.',
        '**The evidence:** the screenshot with its date visible, or the original email with its arrival time. The original email is the stronger of the two, because it carries its own time.',
        '**The window:** how long you watched, and that it has closed. Call an email missing only once the window you chose has closed, whether that is 24, 48 or 72 hours.',
        '**What it means for their customers:** the shopper who left $64 in the basket heard nothing back.',
        '**What it doesn’t show:** their sales figures, or why it happened. Say so on the page, and the rest of the page is trusted more.',
      ],
    },
    {
      kind: 'p',
      text: 'Rerun the journey the day before the case goes out. If the problem has been fixed, say so and give the date: the buyer sees that you checked, and you open on the fix instead. A missing [abandoned cart email](/glossary/abandoned-cart-email) is the clearest page 1 for an email vendor, and each vendor in the examples further down has its own.',
    },

    { kind: 'h2', id: 'cost', text: 'Page 2: what it costs, in the prospect’s numbers' },
    {
      kind: 'p',
      text: 'Page 2 turns the fact into money with three inputs: how often the moment happens each month, how much each occurrence used to bring in, and how long it stays broken. Each input belongs to the prospect. Ask for them in discovery, and use labelled example inputs only until they arrive.',
    },
    {
      kind: 'stat',
      value: '70.22%',
      label: 'of online shopping carts are left before the order, the average across 50 studies',
      source: 'Baymard Institute, last updated 28 October 2026',
      href: BAYMARD,
    },
    {
      kind: 'p',
      text: 'For an email and SMS vendor, the moment is a checkout left with an email address on it, and the value is what the reminder used to earn. [Klaviyo’s 2026 abandoned cart benchmarks](' +
        KLAVIYO +
        ') draw on more than 110,000 Klaviyo customers. They put the average abandoned cart email at $6.77 in revenue per recipient, and $13.70 for the top 10% of brands. Multiply the prospect’s abandoned checkouts with an email by that figure, or by their own from the flow report before the reminder stopped.',
    },
    {
      kind: 'art',
      caption: 'The cost line for the example brand, at the biggest size in the ladder. The inputs are examples until the prospect gives its own.',
      art: {
        kind: 'price',
        title: 'larkspur.example · each silent month',
        rows: [
          { label: 'Abandoned checkouts with an email', value: '50,000', note: 'A month, from Shopify’s abandoned checkouts report' },
          { label: 'Revenue per reminder recipient', value: '$6.77', note: 'Klaviyo’s 2026 average for email' },
        ],
        total: { label: 'Credited revenue while it stays silent', value: '$338,500', note: 'Example inputs for a $100M+ brand' },
      },
    },
    {
      kind: 'table',
      caption: 'Example inputs, biggest first. The rate is Klaviyo’s 2026 average; replace every input with the prospect’s own figures from discovery.',
      cols: ['Prospect', 'Abandoned checkouts with an email, a month', 'Revenue per recipient', 'Credited revenue each silent month'],
      rows: [
        ['$100M+ brand', '50,000', '$6.77', '$338,500'],
        ['$20M+ brand', '10,000', '$6.77', '$67,700'],
        ['$2M+ store', '1,000', '$6.77', '$6,770'],
      ],
    },
    {
      kind: 'p',
      text: 'Revenue per recipient is the revenue a flow is credited with, and some of those shoppers would have come back without a reminder. Say which figure the case uses, and let the finance lead apply their own view of how much is new revenue. A case that states its own assumptions is easier to approve than one that hides them.',
    },

    { kind: 'h2', id: 'options', text: 'Business as usual, then the options' },
    {
      kind: 'p',
      text: 'Start the options with what happens if nothing changes. The Green Book says the business as usual option must always go forward to the shortlist, because “It acts as a benchmark against which other options are compared”. At the $100M+ example, business as usual costs $4,062,000 over 12 months if nothing else changes. That is $2,031,000 over 6 months and $1,015,500 over 3.',
    },
    {
      kind: 'list',
      items: [
        '**Business as usual.** The page 1 problem stays, and the section 3 cost keeps running.',
        '**Do minimum.** The smallest change that fixes page 1, such as restarting the one flow that stopped. The Green Book uses this option to show whether the bigger options add real benefits or only “gold plating”.',
        '**Fix it in house.** Who on their team would do it, how many weeks it takes, and what they would stop doing meanwhile.',
        '**Another vendor.** Describe the other product fairly, by what it does well, and name a competitor only where you can describe it from its own pages.',
        '**Your product.** The preferred option, with the reason it beats the do minimum on their own numbers.',
      ],
    },

    { kind: 'h2', id: 'plan-proof', text: 'The plan, and how the result will be proved' },
    {
      kind: 'p',
      text: 'The plan names an owner and a date for each step. The steps are the contract, the integration, the first live flow or queue, and the reviews at 30, 60 and 90 days. Put their people’s names next to yours, so the plan reads as a joint one.',
    },
    {
      kind: 'p',
      text: 'The proof reuses page 1. After go-live, run the same journey with the same steps. Put the two runs side by side: the basket left on 3 November with no reminder, and the one left after go-live with its reminder’s arrival time. The buyer can repeat the check themselves, which makes the result hard to argue with, and the 3, 6 and 12 month reviews repeat it again.',
    },

    { kind: 'h2', id: 'examples', text: 'Sales business case examples for three kinds of vendor' },
    {
      kind: 'p',
      text: 'The same 7 sections fit any vendor whose product touches what a prospect’s customers see. Only page 1 and the cost line change.',
    },
    { kind: 'h3', id: 'email-sms', text: 'An email and SMS platform selling to an online brand' },
    {
      kind: 'p',
      text: 'Page 1 is the basket at larkspur.example in the picture at the top. Its [welcome series](/glossary/welcome-series) arrived in 4 minutes, so the list works, but no basket reminder came in 48 hours. The cost line is abandoned checkouts with an email × revenue per recipient. Do minimum is restarting the reminder; your product adds the browse and text flows the brand doesn’t send. The proof is a second basket after go-live, with the reminder’s arrival time.',
    },
    { kind: 'h3', id: 'help-desk', text: 'A help desk and AI support vendor selling to a retailer' },
    {
      kind: 'p',
      text: 'Page 1 is at corvelhome.example, a homeware retailer. A question about a late order, sent through the contact form at 10:02 on Monday 2 November, was answered at 17:14 on Tuesday. That is 31 hours, and its help page promises 24. An AI support vendor can use the chat assistant instead: it said returns are accepted for 60 days, and the returns page says 30. The cost line is contacts a month × the share answered after the promised time × the cost of the extra contact each late answer brings. The proof is the same question, through the same form, after go-live.',
    },
    { kind: 'h3', id: 'identity', text: 'An identity and onboarding vendor selling to a savings app' },
    {
      kind: 'p',
      text: 'Page 1 is at pennant.example. On a phone, the application stopped at the address page, the third of 6 steps, where the Continue button didn’t respond. No email followed in 48 hours to help the applicant finish. Walk it as yourself, and stop at the identity check. The cost line is applications started a month × the share lost at that step × the value of a funded account, from their finance team. The proof is the same application on the same phone after go-live.',
    },
    {
      kind: 'table',
      caption: 'Example inputs throughout: invented prospects and rates. The help desk row assumes 20% answered late, 1 extra contact each and $5 a contact; the identity row 5% lost at the step and $200 a funded account.',
      cols: ['Vendor', 'Page 1 at the prospect', 'Cost line, a month', 'Example, biggest first'],
      rows: [
        [
          'Email and SMS platform',
          'No basket reminder in 48 hours',
          'Abandoned checkouts × revenue per recipient',
          '$100M+ brand: $338,500\n$20M+ brand: $67,700\n$2M+ store: $6,770',
        ],
        [
          'Help desk and AI support',
          'Answered in 31 hours against a promised 24',
          'Contacts × share late × cost per contact',
          '300,000 contacts: $300,000\n30,000 contacts: $30,000\n3,000 contacts: $3,000',
        ],
        [
          'Identity and onboarding',
          'Application stalls at the address step on a phone',
          'Applications × share lost × value per account',
          '40,000 applications: $400,000\n4,000 applications: $40,000\n400 applications: $4,000',
        ],
      ],
    },

    { kind: 'h2', id: 'discovery', text: 'Discovery call prep: collect page 1 before the call' },
    {
      kind: 'p',
      text: 'Bring page 1 to discovery, and leave with the inputs for page 2. A dated problem gives the prospect a reason to open their own reports on the call, which is where the volumes, rates and values come from. Each step has a pass mark.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Pick the journey your product touches.** Email and SMS: sign-up, browse and basket. Help desk and AI support: a question through the chat and the contact form. Identity and onboarding: the application, up to the identity check. Pass: 1 journey for each product you sell them.',
        '**Sign up as yourself, with a fresh address for each prospect,** through the public form any customer uses. Pass: every message in that inbox comes from one company.',
        '**Do what a customer does, and stop where a customer pays or proves who they are.** Pass: each step has a screenshot with the date and time visible.',
        '**Wait for the full window, then check spam and Promotions.** Pass: the window has closed before you write “none arrived”.',
        '**Save the original emails as well as the screenshots.** In Gmail, Show original keeps the arrival time with the message. Pass: every line on page 1 links its evidence.',
        '**Rerun the journey the day before you send the case.** Pass: page 1 is dated within the last week.',
      ],
    },
    {
      kind: 'p',
      text: 'On the call, say how you saw it: “I signed up to your store as a customer last Tuesday, and the basket I left got no reminder.” Then ask what the basket reminder earned before it stopped, and how many shoppers leave a checkout each month. The same fact can open the first email, as in our [cold email first line examples](/blog/cold-email-first-line-examples), and it is one of the [buying signals examples](/blog/buying-signals-examples) a sales development team can route. Read each company’s terms first, buy nothing you don’t intend to keep, and treat this as general information, not legal advice.',
    },

    { kind: 'h2', id: 'sources', text: 'Where page 1 can come from', compare: true },
    {
      kind: 'p',
      text: 'Most sales teams use similar data, from contact databases and intent tools to Exa’s search of the public web. [Exa’s home page](' +
        EXA +
        ') calls Exa “The world’s data for AI agents” and says it searches “the largest index of public web and private information”. Its [page for GTM teams](' +
        EXA_GTM +
        ') offers “70M companies, 1B+ people profiles, and the live web”, written to the CRM with a source link for each update. Exa’s pages don’t describe signing up at the companies it covers or keeping what they send their customers, which is the fact page 1 needs. [Our comparison with Exa](/compare/obsession-vs-exa) sets out what each holds. We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Exa’s row is from its home, GTM and [pricing](' + EXA_PRICING + ') pages. Facts checked 11 November 2026.',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'By hand: your own sign-ups, a spare inbox and a sheet',
          'Firsthand, and you see each step as a customer does',
          'Your time: about 20 minutes a journey (example)',
          'One inbox per prospect\nNothing from before you joined',
          'A few late-stage deals',
        ],
        [
          'Exa: Search, Contents, Websets, Monitors',
          'Public web and company data in one call, with sources',
          '$10 free credit a month\nSearch from $4 per 1,000\nEnterprise $12,000 a year',
          'Its pages don’t describe keeping what a company sends customers',
          'News, docs and company facts about an account',
        ],
        [
          'Obsession (ours): Prospect intelligence, Account watch, API and MCP',
          'What each account sends and shows its customers, dated with screenshots',
          'Early access, onboarding teams now\nPriced per call or per company watched',
          'Stops at an identity check or a CAPTCHA, and names the step',
          'A dated page 1 for every open deal',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Use Exa for what an account publishes, and the by-hand method for a few deals in their last weeks. If the deal is against a named competitor, our [battlecard template](/blog/battlecard-template) keeps that side of the case current.',
    },

    { kind: 'h2', id: 'by-hand-stops', text: 'Where doing it by hand stops' },
    {
      kind: 'p',
      text: 'Each prospect needs its own address, each journey takes about 20 minutes to run and write up, and your sheet starts the day you sign up, so it holds nothing from before. Nothing tells you when a fixed problem breaks again. Take an account executive with 30 open opportunities, checking 2 journeys at each and rerunning each before the case goes out. That is 30 × 2 × 20 minutes × 2 runs: 2,400 minutes, or 40 hours a quarter. Those are example inputs; put in your own count.',
    },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. For [sales teams](/sales), [prospect intelligence](/recipes/prospect-intelligence) and [account watch](/recipes/account-watch) put a dated page 1 behind every business case in the pipeline. They keep it current for as long as you follow each account, so you can see what it does to win rate, deal size and sales cycle.',
    },
    {
      kind: 'cta',
      text: 'Open every business case with the prospect’s own emails and screens, dated with the screenshot, for every deal you’re working and for as long as you follow it.',
      to: '/#join',
      label: 'Request early access',
    },
    {
      kind: 'p',
      text: 'The sample holds a page 1 fact in full: one real store’s emails and screenshots, each with its time. It comes from [the web behind the login](/blog/the-web-behind-the-login), the part search engines don’t reach.',
    },
    {
      kind: 'cta',
      text: 'One real record: a UK skincare store in September 2026, where a £40 basket left at 02:57 got no reminder in 48 hours, as a PDF, Clay columns or JSON.',
      to: '/sample-output',
      label: 'See sample data',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is a sales business case template?',
          a: 'A sales business case template is the structure an account executive fills in for a buyer’s finance lead. It covers the problem and its cost in the buyer’s numbers. Then come the options, the plan, how the result will be proved and the ask. The strongest first page shows the prospect’s own problem, dated, with the screenshot or email behind it.',
        },
        {
          q: 'How do you write a sales business case?',
          a: 'Collect one dated problem at the prospect before discovery by signing up as a customer. In discovery, ask for the volume, the rate and the value that turn it into money. Then write the cost over 3, 6 and 12 months and the options, from business as usual to your product. Finish with the plan, its owners and dates, and the check you will rerun after go-live.',
        },
        {
          q: 'What should a business case template for B2B sales include?',
          a: 'Seven sections. The first is the problem with its date and evidence, and the second what it costs a month. Then come business as usual over 3, 6 and 12 months, the options including a do minimum, and the plan. The last two are how the result will be proved, and the decision with its signer and date.',
        },
        {
          q: 'What is a good sales business case example?',
          a: 'An email and SMS platform selling to an online brand opens on a basket left at 09:12 on a Tuesday with no reminder by Thursday. Page 2 multiplies the brand’s abandoned checkouts by the reminder’s revenue per recipient: 50,000 at $6.77 is $338,500 a month for a $100M+ brand, using example inputs and Klaviyo’s 2026 average.',
        },
        {
          q: 'How should an account executive do discovery call prep?',
          a: 'Run the journey your product touches at the prospect a week before the call, as yourself, and save every screenshot and email with its time. Rerun it the day before. Bring that dated fact to the call, and leave with the prospect’s volumes, rates and values for the cost page.',
        },
        {
          q: 'Is it all right to sign up to a prospect’s product to build the case?',
          a: 'Sign-up forms and free trials are open to any customer. Sign up as yourself, buy nothing you don’t intend to keep, stop at any identity check and read the company’s terms, which differ by company and country. This is general information, not legal advice.',
          link: { label: 'Is it legal to mystery shop competitors?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
        },
        {
          q: 'Who reads a sales business case?',
          a: 'Mostly people the account executive never meets. Forrester’s 2024 State of Business Buying release says 13 people are involved in the average B2B buying decision. It adds that 89% of purchases involve two or more departments, so the case has to make its point with nobody presenting it.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'Facts checked 11 November 2026',
      text: 'Every source was checked on its own page on 11 November 2026. The prospects (larkspur.example, corvelhome.example and pennant.example), their times and every input in the cost examples are invented. Klaviyo’s figures describe Klaviyo customers’ flows; use the prospect’s own figure once you have it. The part on signing up to a prospect’s product is general information, not legal advice.',
    },
  ],

  sources: [
    { title: 'Sales business case template', publisher: 'Dock', url: DOCK, date: '2026-02-04' },
    { title: 'Business case template for B2B sales', publisher: 'Mutiny (Matt Ratchford)', url: MUTINY, date: '2026-11-10' },
    { title: 'Forrester: to master B2B buying mayhem, providers must prioritize buyers’ needs (The State of Business Buying, 2024)', publisher: 'Forrester', url: FORRESTER, date: '2024-12-04' },
    { title: 'The Green Book (2026): Table 2, the Five Case Model, and the business as usual option', publisher: 'HM Treasury', url: GREEN_BOOK, date: '2026-10-28' },
    { title: 'Cart abandonment rate statistics', publisher: 'Baymard Institute', url: BAYMARD, date: '2026-10-28' },
    { title: '2026 abandoned cart benchmarks', publisher: 'Klaviyo (Tiff Regaudie)', url: KLAVIYO, date: '2026-10-02' },
    { title: 'The world’s data for AI agents', publisher: 'Exa', url: EXA },
    { title: 'Company data API and CRM enrichment for GTM teams', publisher: 'Exa', url: EXA_GTM },
    { title: 'Pricing', publisher: 'Exa', url: EXA_PRICING },
  ],

  related: [
    'buying-signals-examples',
    'cold-email-first-line-examples',
    'battlecard-template',
    'recipe:prospect-intelligence',
    'recipe:account-watch',
    '/sales',
    '/sample-output',
  ],
}
