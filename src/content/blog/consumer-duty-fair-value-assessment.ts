import type { BlogPost } from './types'

/* Wave 2, batch 1, spec 11 (_research/seo/revamp-11nov/WAVE2_BRIEF.md and WAVE2_SLATE.md, 11 Nov 2026). It owns
   "consumer duty fair value assessment" and consumer duty fair value assessment template, consumer duty fair value
   rules, fca consumer duty fair value and the price and value outcome (Google autocomplete, US and UK, 11 Nov,
   autocomplete_11nov_gaps.json). Readers: UK conduct, product governance and customer journey teams at banks, lenders,
   insurers and fintechs. It serves /use-cases/journey-checks-for-banks-and-fintechs.
   The legal care of the regulatory posts: general information, never legal or regulatory advice, every point tied to
   the FCA's own text, no verdict on a reader's own product, the not-advice line in the opening, a FAQ and the note.
   Every source read on 11 Nov 2026 on its own page:
   - FCA Handbook, rendered in a browser (the new handbook.fca.org.uk app): PRIN 2A.4 (viewed as of 10/11/2026, last
     updated 09/12/2025; provision numbers 2A.4.1R to 2A.4.36R read off the page), PRIN 2A.5 (2A.5.3R, 5.5R, 5.10R;
     last updated 26/06/2026), PRIN 2A.8 (2A.8.3R, 8.4R; last updated 26/06/2026), PRIN 2A.9 (2A.9.8R to 9.12R; last
     updated 26/06/2026).
   - PS22/9, the policy statement page: in force 31 July 2023 (open products) and 31 July 2024 (closed products).
   - FCA, "Fair value in consumer finance" (good and poor practice, 29 Oct 2026): sections 1, 3, 4.1 to 4.6 and 5.
   - FCA, "Consumer Duty: Findings from our review of fair value frameworks" (10 May 2023): the comparisons and averages
     lines.
   - FCA blog, Alison Walters, 29 Oct 2026: the one quote, under 15 words.
   Obsession is described in the words of /use-cases/journey-checks-for-banks-and-fintechs (signed-in rates, offers
   after the form, chat answers, never invents identity details), the member prices page (stops where a programme needs
   identity details) and site.ts (ENTITY, the 1,500 line). No claim past an identity check. Fernbank, Kestrel,
   Larchmont and Quayside are invented, with every rate and fee. British English, no dashes. */

const PS22_9 = 'https://www.fca.org.uk/publications/policy-statements/ps22-9-new-consumer-duty'
const PRIN_2A4 = 'https://handbook.fca.org.uk/handbook/prin2a/prin2as4'
const PRIN_2A5 = 'https://handbook.fca.org.uk/handbook/prin2a/prin2as5'
const PRIN_2A9 = 'https://handbook.fca.org.uk/handbook/prin2a/prin2as9'
const PRIN_2A8 = 'https://handbook.fca.org.uk/handbook/prin2a/prin2as8'
const FCA_FV_2026 = 'https://www.fca.org.uk/publications/good-and-poor-practice/fair-value-consumer-finance'
const FCA_FV_2023 = 'https://www.fca.org.uk/publications/good-and-poor-practice/consumer-duty-findings-our-review-fair-value-frameworks'
const FCA_BLOG = 'https://www.fca.org.uk/news/blogs/fair-value-look-practice-three-years-consumer-duty'

const BANKS = '/use-cases/journey-checks-for-banks-and-fintechs'

export const post: BlogPost = {
  slug: 'consumer-duty-fair-value-assessment',
  title: 'Consumer Duty fair value assessment: evidence of what customers are actually shown',
  dek: 'What the FCA’s price and value outcome requires, and a template tied to each rule. Then where the evidence is thinnest: what customers are shown after sign-up, at renewal and on the way out, and what competitors charge for the same product.',
  metaTitle: 'Consumer Duty fair value assessment template for UK firms',
  description:
    'A Consumer Duty fair value assessment template tied to PRIN 2A.4, and how to evidence what customers are shown, from fee wording to renewal notices.',
  answer:
    'A Consumer Duty fair value assessment is a UK financial firm’s documented test, under PRIN 2A.4 of the FCA Handbook, that a product’s expected total price is reasonable for the benefits each group of its customers can expect. The FCA’s October 2026 findings say the weakest assessments rest on assumptions, outdated fee lists and headline price comparisons. Obsession keeps what your firm and its competitors show customers after sign-up, from fee wording to signed-in rates and renewal notices, each dated with its screenshot, by API or MCP, the standard way AI agents call tools.',
  primaryKeyword: 'consumer duty fair value assessment',
  keywords: [
    'consumer duty fair value assessment template',
    'consumer duty fair value rules',
    'fca consumer duty price and value outcome',
    'fca consumer duty fair value',
    'consumer duty price and fair value',
    'consumer duty manufacturer fair value assessment',
  ],
  category: 'Watch other companies',
  order: 9,
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
      title: 'Fixed saver · what customers saw',
      who: 'A new UK saver at fernbank.example',
      rows: [
        { time: '1 Sep 09:12', text: 'Rate page: 4.5% fixed for 12 months', tone: 'ok' },
        { time: '1 Sep 09:18', text: 'Early exit charge first shown on screen 5', detail: 'After the saver had typed in their details', tone: 'late' },
        { time: '1 Sep 09:24', text: 'Welcome email: rate, term and charge together', tone: 'ok' },
        { time: '3 Sep 07:04', text: 'Chat: “You can withdraw any time, free”', detail: 'The terms: 90 days’ interest to leave early', tone: 'fail' },
        { time: '18 Aug 08:00', text: 'Maturity email: rolls over to 1.5% variable', detail: 'A year on, 14 days before the term ends', tone: 'info' },
      ],
      foot: 'Fernbank is an invented bank. Each line is kept with its screenshot or email and the time it appeared.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A Consumer Duty fair value assessment is the written test that a financial product’s total price is reasonable for the benefits its customers can expect. It has to hold for every group of customers the product serves, and for as long as they are likely to keep it. Conduct, product governance and customer journey teams at UK banks, lenders, insurers and fintechs own it. The Financial Conduct Authority (FCA) says its weakest part is evidence of what customers are shown and charged.',
    },
    {
      kind: 'p',
      text: 'Each rule here is summarised from the FCA Handbook and the FCA’s own guidance pages as they stood on 11 November 2026. General information, not legal or regulatory advice.',
    },

    { kind: 'h2', id: 'rules', text: 'The price and value outcome: what PRIN 2A.4 requires' },
    {
      kind: 'p',
      text: `The Consumer Duty is Principle 12 of the FCA’s Principles for Businesses, with its detailed rules in chapter PRIN 2A of the Handbook. Those rules came into force on [31 July 2023 for products on sale or open to renewal, and on 31 July 2024 for closed products](${PS22_9}), which are no longer sold or renewed.`,
    },
    {
      kind: 'p',
      text: `The price and value outcome is [PRIN 2A.4](${PRIN_2A4}). Its first rule, PRIN 2A.4.1R, defines value as the relationship between what a retail customer pays for a product and the benefits they can reasonably expect from it. A product gives fair value where the amount paid is reasonable relative to those benefits.`,
    },
    {
      kind: 'p',
      text: 'The duty falls first on the manufacturer, the firm that makes the product. Under PRIN 2A.4.2R it must make sure each product gives fair value to customers in its target market. It must also carry out a value assessment and review it regularly, at intervals that suit the product’s nature and duration. PRIN 2A.4.3R requires the first assessment before a product, or a significant change to it, is marketed. Under PRIN 2A.4.5R the firm must be satisfied that the product will stay fair value for a reasonably foreseeable period, including after any renewal.',
    },
    {
      kind: 'p',
      text: 'PRIN 2A.4.8R sets what every assessment must consider, as a minimum:',
    },
    {
      kind: 'list',
      items: [
        'the nature of the product, including the benefits customers can reasonably expect and its quality',
        'any limitations that are part of the product',
        'the expected total price: the price agreed at the start, regular charges over the product’s life, contingent charges such as arrears fees, and any non-financial costs the customer is asked to provide',
        'any characteristics of vulnerability in the target market, and how far they make it less likely a customer gets fair value',
      ],
    },
    {
      kind: 'p',
      text: 'Guidance at PRIN 2A.4.9G adds factors a firm may weigh. They include its own costs, the market rate and charges for a comparable product, and accrued costs and benefits on existing or closed products. They also include whether products priced significantly lower give a similar or better benefit. PRIN 2A.4.10G names personal data, and permission to use it, as a non-financial cost. PRIN 2A.4.11G asks firms to check fair value for each group of customers in the target market, including where different groups pay different prices. PRIN 2A.4.20R stops a firm leaving the judgement to individual customers in place of its own assessment.',
    },
    {
      kind: 'p',
      text: 'Distributors carry their own duty under PRIN 2A.4.16R: their arrangements, including any remuneration, must be consistent with the product giving fair value. Where a review finds a product no longer gives fair value, PRIN 2A.4.25R requires the manufacturer to mitigate harm to existing customers, remediate it where appropriate, and prevent harm to new ones.',
    },
    {
      kind: 'p',
      text: 'Under PRIN 2A.4.32R, the section doesn’t apply to non-investment insurance products, certain funeral plans, or authorised fund managers for products under the fund rules in COLL. Those firms keep applying their own product governance rules, PROD 4 for insurance, and the evidence questions that follow are useful for an insurer’s fair value file too.',
    },

    { kind: 'h2', id: 'whole-duty', text: 'Where fair value meets the rest of the Duty' },
    {
      kind: 'p',
      text: `A fair value conclusion leans on the other outcomes. In the consumer understanding outcome, [PRIN 2A.5.3R](${PRIN_2A5}) requires a firm’s communications to meet customers’ information needs and be likely to be understood. They must also equip customers to make effective, timely and properly informed decisions. PRIN 2A.5.5R says timely means before purchase and at suitable points through the product’s life. PRIN 2A.5.10R asks firms, where appropriate, to test communications before sending them and monitor their effect afterwards.`,
    },
    {
      kind: 'p',
      text: `[PRIN 2A.9.8R](${PRIN_2A9}) requires firms to monitor the outcomes customers get from their products, their communications and their customer support. Under PRIN 2A.9.9R that monitoring must show whether products give fair value, and under PRIN 2A.9.10R whether any group of customers gets worse outcomes than another group using the same product.`,
    },
    {
      kind: 'p',
      text: `The results reach the top of the firm. [PRIN 2A.8.3R](${PRIN_2A8}) requires a report to the governing body on that monitoring and the actions it calls for. Under PRIN 2A.8.4R the governing body must, at least once a year, review and approve the report and confirm whether it is satisfied the firm is meeting the Duty.`,
    },

    { kind: 'h2', id: 'template', text: 'Consumer Duty fair value assessment template' },
    {
      kind: 'p',
      text: `The FCA doesn’t prescribe a template. Its [October 2026 findings on fair value in consumer finance](${FCA_FV_2026}) say its examples create no new requirements. A few smaller firms, it notes, built their assessments around the 5 areas of its [May 2023 review of fair value frameworks](${FCA_FV_2023}): understanding of the requirements, costs and benefits, contextual factors, differential outcomes, and data and governance. Each part of this template maps to the rule behind it and the evidence that supports it.`,
    },
    {
      kind: 'table',
      caption: 'A fair value assessment template, each part tied to PRIN 2A as it stood on 11 November 2026. General information, not legal or regulatory advice',
      cols: ['Part', 'What it records', 'Rule', 'Evidence behind it'],
      rows: [
        ['Product and target market', 'Features, customer groups, channels', 'PRIN 2A.4.2R', 'Product approval file'],
        ['Benefits and quality', 'What customers can reasonably expect', 'PRIN 2A.4.8R(1)', 'Usage, service levels, rewards paid'],
        ['Limitations', 'Exclusions, conditions and caps', 'PRIN 2A.4.8R(2)', 'Terms, and where the journey shows them'],
        ['Expected total price', 'Entry price, regular and contingent charges', 'PRIN 2A.4.8R(3)', 'Live fee list, fees paid by customer'],
        ['Non-financial costs', 'Personal data, time and effort', 'PRIN 2A.4.8R(3)(d)', 'Steps and time to switch or cancel'],
        ['Customer groups', 'Groups paying different prices', 'PRIN 2A.4.11G', 'New against existing customers'],
        ['Vulnerability', 'Who may be less likely to get fair value', 'PRIN 2A.4.8R(4)', 'Outcomes split by vulnerability'],
        ['Market comparison', 'Comparable products, and cheaper ones', 'PRIN 2A.4.9G', 'Chosen comparators, past the headline'],
        ['Distribution', 'Distributor arrangements and pay', 'PRIN 2A.4.16R', 'Distributor information'],
        ['Value over time', 'Renewal, rate changes, maturity', 'PRIN 2A.4.5R', 'Notices, and the price after renewal'],
        ['Conclusion and action', 'Fair value or not, actions, next review', 'PRIN 2A.4.24R and 2A.4.25R', 'Sign-off, governing body report'],
      ],
    },
    {
      kind: 'p',
      text: 'Most rows can be filled from the firm’s own files. Two can’t: market comparison and value over time. Both need evidence of what a customer is shown outside the firm’s systems, at the firm itself and at its competitors.',
    },

    { kind: 'h2', id: 'weakest', text: 'Where the evidence is weakest' },
    {
      kind: 'p',
      text: 'The FCA’s October 2026 findings come from reviews of consumer credit, debt advice, credit reference and debt collection firms. Weaker assessments:',
    },
    {
      kind: 'list',
      items: [
        'relied on narrative statements, assumptions or hypothetical models instead of customer data',
        'rested on incomplete or outdated information; one counted a fee no longer charged and left out a fee customers could still incur',
        'benchmarked headline prices without allowing for features, service or target market, or didn’t explain why the comparators were chosen',
        'monitored outcomes for the whole portfolio, without checking whether they differed between customer groups',
        'gave little thought to how value changes over time, through renewal, fee changes or arrears',
      ],
    },
    {
      kind: 'p',
      text: 'On communications, the FCA saw material fees disclosed late in the application journey. Fee information was spread across several pages and documents, and the amount, timing or frequency of some charges wasn’t clear. Its May 2023 review made a related point about comparisons. A comparison with other firms can hide fair value problems common across a whole market, and averages can hide pockets of poor value.',
    },
    {
      kind: 'quote',
      text: 'If there’s one thing to take from this, it’s to show your working',
      cite: 'Alison Walters, Director of consumer finance, FCA, 29 October 2026',
      href: FCA_BLOG,
    },
    {
      kind: 'p',
      text: 'Read together, the findings point at one gap. A fair value file is mostly built from inside the firm. It draws on the fee schedule, the terms, the product approval papers and management information (MI), the firm’s own data on complaints, cancellations, arrears and usage. Those show what the firm intended to charge and say. They don’t show which screen of the application first showed a fee, or what the renewal email said on the day it arrived. Nor do they show what chat answered when a customer asked whether a rate was fixed, or what competitors offer a customer once the form is filled in.',
    },

    { kind: 'h2', id: 'method', text: 'How to evidence what customers are shown' },
    {
      kind: 'p',
      text: 'The method works for a firm’s own products and for the competitors it benchmarks against. Each step ends with what a pass looks like.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**List the moments that set the price.** The application, the first email or statement, any rate or fee change, the end of an introductory rate or fixed term, renewal, arrears, and cancelling or switching. Each is a point where PRIN 2A.5.5R expects information in good time.',
        '**Walk the journey as a new customer.** Go through it outside the firm’s systems, on the website, in the app and in chat, and save every screen with the date and time. It passes when every charge in the assessment appears before the customer commits, in the same words as the terms.',
        '**Reconcile the fee list.** Check the expected total price in the assessment against what the journey and the live terms show. It passes when no live charge is missing and no retired one is still counted, the mismatch the FCA found in one assessment.',
        '**Ask the questions customers ask.** Put the price questions to chat, email support and the phone line: is this rate fixed, what happens when the bonus ends, what does it cost to leave early. It passes when every answer matches the terms. Real cases of chatbots giving customers the wrong answer are collected in [AI chatbot fails](/blog/ai-chatbot-fails).',
        '**Follow the product past day 1.** Keep every renewal notice, rate change email and end of term letter, and count the steps and minutes it takes to cancel or switch. The FCA’s findings treat that time and effort as a non-financial cost. A useful pass mark: each notice arrives before the change with the new price stated, and leaving takes no more steps than joining.',
        '**Benchmark past the headline.** Choose comparators and write down why each is comparable in features, benefits, target market and service, as the FCA’s findings ask. For each, record the public rate, the rate an existing customer is paid, any offer shown only after the form, and the quote for the same customer profile, each dated. It passes when a reviewer can see why each comparator was picked and what its customers are shown.',
        '**Split by customer group.** Compare what new and existing customers, each channel and each profile are shown and charged. It passes when every difference has a reason backed by evidence, as PRIN 2A.4.11G and PRIN 2A.9.10R expect.',
        '**Date it and run it again after every change.** A price change, a new journey, a chatbot update or a competitor’s new offer each starts the clock again. It passes when the governing body report can point to a dated record behind each conclusion.',
      ],
    },
    {
      kind: 'art',
      caption: 'A headline rate table ranks Kestrel first. The rate an existing customer is paid, and the offers shown only after the form, change the order.',
      art: {
        kind: 'report',
        title: 'Easy access savings · 4 banks',
        period: 'One UK saver profile, as shown on 10 November 2026',
        cols: ['Bank', 'Public page', 'Existing customer', 'After the form'],
        rows: [
          { name: 'kestrel.example', cells: ['4.75%', '3.20%', 'None'] },
          { name: 'quayside.example', cells: ['4.60%', '2.90%', '£100 to switch'] },
          { name: 'fernbank.example', cells: ['4.50%', '4.50%', 'None'] },
          { name: 'larchmont.example', cells: ['4.40%', '4.40%', '5.00% for 6 months'] },
        ],
        notes: ['A headline comparison shows only the first column', 'Every bank and rate here is invented'],
      },
    },
    {
      kind: 'p',
      text: 'The same gap between the public price and the signed-in one drives [member-only pricing](/blog/member-only-pricing) in retail and travel, and the full competitor template for banks is in [bank competitor analysis](/blog/bank-competitor-analysis).',
    },
    {
      kind: 'p',
      text: 'In the Fernbank example, the dated findings turn into actions the governing body can follow.',
    },
    {
      kind: 'table',
      caption: 'How the invented Fernbank example moves from a dated finding to the fair value file and the governing body report',
      cols: ['Date', 'What a customer was shown', 'What the firm did'],
      rows: [
        ['1 Sep', 'Early exit charge first shown on screen 5', 'Charge moved to the first screen'],
        ['3 Sep', 'Chat said early withdrawal is free', 'Chat answer corrected'],
        ['5 Sep', 'Both journeys checked again', 'Closed and logged in the file'],
        ['18 Aug', 'Maturity email names the new rate', 'Kept as value over time evidence'],
      ],
    },

    { kind: 'h2', id: 'cost', text: 'What a gap in the evidence can cost' },
    {
      kind: 'p',
      text: 'When a review finds a product no longer gives fair value, PRIN 2A.4.25R asks for mitigation and, where appropriate, remediation. The size of that bill grows with the customer base, which is why evidence that catches a gap in its first week is worth more than evidence found at the annual review.',
    },
    {
      kind: 'table',
      caption: 'Example inputs: 5% of a product’s customers charged a £25 fee they weren’t shown before they committed. Refunds alone, before interest and the cost of the exercise',
      cols: ['Customers on the product', 'Charged the fee', 'Refunds at £25 each'],
      rows: [
        ['2,000,000', '100,000', '£2.5 million'],
        ['500,000', '25,000', '£625,000'],
        ['50,000', '2,500', '£62,500'],
      ],
    },
    {
      kind: 'p',
      text: 'Put in the product’s own numbers: the customer count from the product file, the share charged from fee MI, and the charge from the live terms.',
    },

    { kind: 'h2', id: 'options', text: 'Ways to gather the evidence, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described as firms use it today, as of 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to evidence what customers are shown and charged, 11 November 2026. Price is each option’s own terms or the time it takes',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing beyond the file: fee schedule, terms, approval papers', 'Fast, and records what the firm intended', 'Staff time', 'Shows intent, not what customers saw on the day', 'A simple product with one published charge'],
        ['Your own MI: complaints, cancellations, arrears, usage', 'Real outcomes, split by customer group', 'Staff and data time', 'Shows harm after it happens; complaints show only what customers raise', 'Every assessment, as its core'],
        ['By hand: staff walk the journey and save each screen', 'Exactly what a customer sees, on the day', 'Staff time per journey', 'Hard to repeat after every change, or across many firms', 'One product, reviewed once a year'],
        ['Customer research and comprehension testing', 'Whether customers understood the charges', 'Per study', 'A sample, at one point in time', 'A new or changed communication'],
        ['Public rate pages and comparison sites', 'Headline market rates, quick to scan', 'Free to read, plus staff time', 'Public rates; not what an existing customer is paid', 'A first scan of the market'],
        ['Mystery shopping by people', 'Branch, phone and adviser journeys', 'Per brief, quoted by the agency', 'Each visit is one moment in a sample', 'Journeys that need a person'],
        [
          'Obsession (ours): [Support bot check](/recipes/support-bot-check), [Competitor tracking](/recipes/competitor-tracking)',
          'Each step customers are shown, every email after, signed-in rates and chat answers, at your firm and competitors, dated',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Never invents identity details',
          'Dated evidence across many firms, after every change',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Use Obsession when a conduct, product governance or journey team needs dated evidence of what customers are shown, at its own firm and across its competitors, repeated after every change. Your own MI stays the core of the outcomes evidence, and comprehension testing tells you whether customers understood. For one product with a single published charge, a yearly walk-through by hand is enough.',
    },

    { kind: 'h2', id: 'obsession', text: 'Dated evidence from the customer’s side' },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request.',
    },
    {
      kind: 'p',
      text: `Search engines and comparison sites stop at the public rate page. Obsession collects what a firm shows past the login and the form, [the web behind the login](/blog/the-web-behind-the-login). For [banks and fintechs](${BANKS}), Obsession keeps each step of account opening, every email and text after it, signed-in rates beside public ones and offers shown after the form. It keeps what chat tells a customer too, at your own firm and every competitor you name, for as long as you follow them. Obsession’s agents have run 1,500 sign-ups, baskets and checkouts at real companies, and counting. The [sample data](/sample-output) shows everything collected from one real store.`,
    },
    {
      kind: 'cta',
      text: 'Account opening, signed-in rates, offers and chat answers, at your firm and your competitors. Each is dated with its screenshot or transcript, ready for the fair value file and the governing body report.',
      to: BANKS,
      label: 'Request early access',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about Consumer Duty fair value assessments' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is a Consumer Duty fair value assessment?',
          a: 'It is a manufacturer’s documented assessment, required by PRIN 2A.4.2R, that a product’s expected total price is reasonable relative to the benefits customers in its target market can reasonably expect. It is carried out before launch or a significant change and reviewed regularly. It must consider the product’s benefits and quality, its limitations, the expected total price including non-financial costs, and vulnerability in the target market.',
        },
        {
          q: 'Is there an FCA template for a fair value assessment?',
          a: 'No. The FCA doesn’t prescribe one, and its October 2026 findings say its examples of good practice create no new requirements. Firms build their own around the factors in PRIN 2A.4.8R. Some use the 5 areas from the FCA’s May 2023 review: understanding of the requirements, costs and benefits, contextual factors, differential outcomes, and data and governance.',
        },
        {
          q: 'What are the Consumer Duty fair value rules?',
          a: 'They are the price and value outcome in PRIN 2A.4 of the FCA Handbook. Manufacturers must make sure each product gives fair value to its target market, assess it before launch and review it regularly. Distributors’ arrangements must be consistent with fair value. Where a product no longer gives fair value, the firm must mitigate and, where appropriate, remediate harm and prevent harm to new customers. Monitoring under PRIN 2A.9 and the governing body’s yearly review under PRIN 2A.8.4R sit around them.',
        },
        {
          q: 'How often should a fair value assessment be reviewed?',
          a: 'PRIN 2A.4.2R requires a review on a regular basis that suits the nature and duration of the product, and PRIN 2A.4.3R requires a new assessment before any significant change is marketed. Separately, the governing body must review the firm’s report on customer outcomes at least once a year under PRIN 2A.8.4R. A price change, a new fee or a competitor’s new offer is a natural trigger for an earlier look.',
        },
        {
          q: 'Does PRIN 2A.4 apply to insurance?',
          a: 'Not to non-investment insurance products. PRIN 2A.4.32R excludes them, along with certain funeral plans and authorised fund managers for products under the COLL rules. Those firms keep applying PROD 4, PROD 7 or the relevant COLL rules. The exclusion covers the price and value section only.',
        },
        {
          q: 'Can benchmarking against competitors prove fair value?',
          a: 'Not on its own. The FCA’s October 2026 findings treat benchmarking as one source of evidence beside the total price, the benefits and customer outcomes. Firms are expected to explain why each comparator was chosen, what the comparison showed and its limits. The FCA’s May 2023 review warned that comparisons with other firms can hide problems common across a market.',
          link: { label: 'Bank competitor analysis', to: '/blog/bank-competitor-analysis' },
        },
        {
          q: 'Where does Obsession’s data about competitors come from?',
          a: 'From real accounts. Obsession’s agents open accounts, sign in and ask chat the way any customer can, as the customer profiles and countries a team chooses, and keep each account open for months. They never invent identity details, never sign in to an account that isn’t their own, and say they’re an AI when they talk to a person.',
          link: { label: 'Journey checks for banks and fintechs', to: BANKS },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the rules',
      text: 'Each rule is summarised from the FCA Handbook, and each finding from the FCA’s own pages, as they stood on 11 November 2026; rule numbers are the Handbook’s. Fernbank, Kestrel, Larchmont and Quayside are invented banks, and every rate and fee shown for them is made up. General information, not legal or regulatory advice: for a specific product, ask your compliance function or a regulatory lawyer.',
    },
  ],

  sources: [
    { title: 'PS22/9: A new Consumer Duty', publisher: 'Financial Conduct Authority', url: PS22_9, date: '2022-07-27' },
    { title: 'PRIN 2A.4 Consumer Duty: retail customer outcome on price and value', publisher: 'FCA Handbook', url: PRIN_2A4, date: '2025-12-09' },
    { title: 'PRIN 2A.5 Consumer Duty: retail customer outcome on consumer understanding', publisher: 'FCA Handbook', url: PRIN_2A5, date: '2026-06-26' },
    { title: 'PRIN 2A.9 Monitoring of consumer outcomes', publisher: 'FCA Handbook', url: PRIN_2A9, date: '2026-06-26' },
    { title: 'PRIN 2A.8 Governance and culture', publisher: 'FCA Handbook', url: PRIN_2A8, date: '2026-06-26' },
    { title: 'Fair value in consumer finance', publisher: 'Financial Conduct Authority', url: FCA_FV_2026, date: '2026-10-29' },
    { title: 'Consumer Duty: Findings from our review of fair value frameworks', publisher: 'Financial Conduct Authority', url: FCA_FV_2023, date: '2023-05-10' },
    {
      title: 'What does ‘fair value’ look like in practice? Three years into the Consumer Duty, here’s what we’ve learned',
      publisher: 'Financial Conduct Authority',
      url: FCA_BLOG,
      date: '2026-10-29',
    },
  ],

  related: ['bank-competitor-analysis', 'the-web-behind-the-login', 'member-only-pricing', 'recipe:support-bot-check', 'recipe:competitor-tracking', BANKS],
}
