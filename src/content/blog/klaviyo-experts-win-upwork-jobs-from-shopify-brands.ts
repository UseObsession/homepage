import type { BlogPost } from './types'

/* Guide A of the 29 Oct 2026 pair (_research/seo/plan/next-29oct/PLAN.md and BRIEF.md, approved by Seun on 29 Oct with
   his changes in PLAN.md section 9). Readers: email and retention freelancers and founders of small agencies who win
   clients from Klaviyo jobs on Upwork and from LinkedIn. Primary "upwork klaviyo jobs"; secondaries from Google
   autocomplete (US and UK, 29 Oct, autocomplete_upwork.json): klaviyo upwork, upwork klaviyo expert, upwork klaviyo email
   marketing, email marketing proposal template, email campaign proposal template. "Klaviyo flow audit" stays with
   audit-prospect-email-without-klaviyo-login and is linked with that anchor.
   Read at source on 29 Oct 2026: Upwork Help (Review job proposals, edited 4 Sep 2026; How to boost your proposal,
   edited 12 Sep 2026; How to submit a proposal on Upwork, edited 20 Aug 2026; Proposal insights, edited 13 Oct 2026;
   edit dates from the help centre's own article data), OpenAI Help (Using cloud browser in ChatGPT, "Updated:
   yesterday" on 29 Oct), Shopify Help (Recovering abandoned checkouts, the legacy page's 10 minute rule), Klaviyo's
   flow audit checklist (31 Mar 2026: first basket send 30 to 45 minutes, exclude started checkout), Joy Joya's 362 brand
   test (158 with no welcome email, 20 offers that didn't match, the 5 to 15 minute window) and Netalico's published
   pricing (now at /pages/shopify-klaviyo-agency). Upwork's job listing pages showed a bot check, so no job post is
   described; nothing about how Upwork ranks or how fast clients hire is claimed beyond its help pages.
   Our own facts are only the brief's: the 14 online stores 4 agencies sent us (21 to 26 Oct 2026), anonymised, and the
   1,500 stores line word for word. No agency, store or person is named, and nothing from any call is used. Obsession's
   cadence (4 hours, 48 hours, weekly, monthly, for the brands an agency serves) is stated as live per Seun, 29 Oct, as
   are his later lines the same day: an AI customer per step, shopping from the US or the UK; a person on the Obsession
   team completes a "prove you're human" step; 300, 1,000 or 5,000 brands a month, built for millions; the team helps an
   agency set up its first batch. Links once to guide C (/blog/get-clients-as-a-marketing-agency), written alongside.
   Not claimed: Gmail tab reads, texts, the API, any price figure for Obsession. Northfield Skin, its serum and every
   time in the examples are invented; the 25 minutes is an example the reader replaces. No dashes. */

const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const UPWORK_REVIEW = 'https://support.upwork.com/hc/en-us/articles/18010402882195--Review-job-proposals'
const UPWORK_BOOST = 'https://support.upwork.com/hc/en-us/articles/4406395531795-How-to-boost-your-proposal'
const UPWORK_SUBMIT = 'https://support.upwork.com/hc/en-us/articles/211062998-How-to-submit-a-proposal-on-Upwork'
const UPWORK_EDIT = 'https://support.upwork.com/hc/en-us/articles/211060388-How-to-edit-your-proposal'
const UPWORK_INSIGHTS = 'https://support.upwork.com/hc/en-us/articles/34019683309587-Proposal-insights'
const SHOPIFY_ABANDONED = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts'
const KL_CHECKLIST = 'https://klaviyo.com/blog/the-complete-checklist-audit-your-flows'
const NETALICO = 'https://netalico.com/pages/shopify-klaviyo-agency'
const CLOUD_BROWSER = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'

const USE_CASE = '/use-cases/leak-checks-for-retention-agencies'

export const post: BlogPost = {
  slug: 'klaviyo-experts-win-upwork-jobs-from-shopify-brands',
  title: 'How Klaviyo experts win Upwork jobs from Shopify brands: become their customer first',
  dek: 'Klaviyo freelancers and email agencies bidding on Upwork can sign up to a Shopify brand’s store as a new customer, see what its emails get wrong, and open the proposal with that. Each step has a pass mark, and the proposal template puts the finding, its time and one question in the first lines.',
  metaTitle: 'How Klaviyo experts win Upwork jobs from Shopify brands',
  description:
    'Klaviyo experts on Upwork: sign up to the Shopify brand’s store as a new customer, see what its emails miss, and open your proposal with it.',
  answer:
    'To win Upwork Klaviyo jobs from Shopify brands, become the brand’s customer before you bid: within the hour of the job post, sign up to its store, leave a basket and start a checkout. Open the proposal with what its emails got wrong and when, such as a welcome email that came without the code the pop-up promised. To check hundreds of prospects a month, use Obsession: its AI customers become each brand’s new customer and report at the hours you choose, 4, 12, 24 or 48, or for as long as you want to keep watching.',
  primaryKeyword: 'upwork klaviyo jobs',
  keywords: [
    'klaviyo expert upwork',
    'upwork klaviyo expert',
    'klaviyo upwork',
    'how to win jobs on upwork',
    'upwork proposal tips',
    'upwork klaviyo email marketing',
    'email marketing proposal template',
    'email campaign proposal template',
  ],
  category: 'For agencies',
  published: '2026-10-29',
  updated: '2026-10-29',
  readingMinutes: 13,
  order: 1,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'northfield-skin.example',
      who: 'A new customer: a fresh address and a normal browser window',
      status: { tone: 'ok', text: '2 emails by 4 h' },
      rows: [
        { time: '0 min', text: 'Signed up through the pop-up', tone: 'ok' },
        { time: '2 min', text: 'Welcome email, 10% code', tone: 'ok' },
        { time: '10 min', text: 'Basket left, 1 serum', tone: 'info' },
        { time: '45 min', text: 'Reminder, serum and price', tone: 'ok' },
        { time: '4 h', text: 'No second email yet', tone: 'late' },
        { time: '4 h', text: 'Report at 4 hours', detail: 'The full read follows at 48 hours', tone: 'info' },
      ],
      foot: 'An example on an invented store. These 6 rows become the first lines of the proposal.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Email and retention freelancers, and small agencies that bid on Klaviyo jobs on Upwork, can open each proposal with what the brand’s own store sent them that day. Sign up to the store as a new customer, leave a basket, start a checkout and read the inbox at 1 hour and at 4 hours. The first lines of the proposal then carry a finding the brand can check, with the time it arrived.',
    },
    {
      kind: 'p',
      text: 'There is usually something to find. A test of 362 ecommerce brands by [Joy Joya](' +
        JOYJOYA +
        ') used new email addresses. Of those brands, 158 never sent a new subscriber a welcome email, and 20 sent an offer that didn’t match their pop-up.',
    },
    {
      kind: 'stat',
      value: '43.6%',
      label: 'of 362 ecommerce brands never sent a new subscriber a welcome email',
      source: 'Joy Joya, test of 362 ecommerce brands',
      href: JOYJOYA,
    },

    { kind: 'h2', id: 'why-the-first-hours', text: 'Why the first hours decide an Upwork Klaviyo job' },
    {
      kind: 'p',
      text: 'On Upwork, a client reviews each proposal as a bid, a cover letter and any work samples, as [Upwork’s help page for clients](' +
        UPWORK_REVIEW +
        ') describes. The client can then message, shortlist, hire, decline or archive it. Freelancers who spend extra Connects, the credits Upwork charges to send a proposal, can win one of the top 4 places in that list. [Upwork’s page on boosted proposals](' +
        UPWORK_BOOST +
        ') closes that bidding after 7 days or at the first hire, whichever comes first. After that, a proposal on that job can no longer be boosted, so the first hours decide where it sits.',
    },
    {
      kind: 'p',
      text: '[Upwork’s guide to sending a proposal](' +
        UPWORK_SUBMIT +
        ') asks the cover letter to describe what you can do for the client, ask questions about the project and suggest next steps. A finding from the brand’s store does the first, in the brand’s own terms. [Upwork’s page on editing a proposal](' +
        UPWORK_EDIT +
        ') lets you change the cover letter and attachments up to 6 hours after sending, or until the client views it, whichever comes first. A proposal sent at hour 1 with the welcome email can therefore take the 4-hour result too, if the client hasn’t opened it yet.',
    },
    {
      kind: 'p',
      text: 'On the paid Freelancer Plus plan, [Upwork’s proposal insights](' +
        UPWORK_INSIGHTS +
        ') show how many proposals a job has and how many the client has opened, shortlisted or messaged, updated hourly. A count of opened proposals that climbs by the hour shows the client is reading them. Upwork offers these insights on Freelancer Plus, and they count proposals freelancers sent directly.',
    },

    { kind: 'h2', id: 'four-hour-check', text: 'The 4-hour check, step by step' },
    {
      kind: 'p',
      text: 'Use only the public paths any shopper uses: the pop-up, the product pages, the basket and the checkout page. Most of the 4 hours is waiting, so start the check before you write the rest of the proposal.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**A fresh address and a normal browser window.** Make a new email address for this prospect only, named for your business so the brand recognises it later. Use a normal browser window, signed out of any account at the store. Browse from the country the store sells to, and stay in that window to the end. **A pass:** an address the store has never seen.',
        '**Sign up through the pop-up.** Wait for it as a visitor would. Enter the address and screenshot the offer with your clock showing. **A pass:** the form submits on that device and shows a thank-you message or a code.',
        '**Browse 2 products.** Open 2 product pages and stay on each for a minute. **A pass:** both pages load with a price and an Add to cart button. Note which products you viewed, because some stores send a reminder about them later.',
        '**Leave a basket.** Add 1 product and open the basket. Note the product and its price, then close the tab. **A pass:** the basket shows the price the product page showed.',
        '**Start a checkout with the email typed in.** Reopen the store, go to the checkout page, type the address and stop there. Never enter payment details. [Shopify’s help page on abandoned checkouts](' +
          SHOPIFY_ABANDONED +
          '), written for its legacy checkout, counts a checkout as abandoned when it stays incomplete for more than 10 minutes after the customer gives an email. The typed address is what lets a checkout reminder reach you. **A pass:** the checkout page loads and accepts the address.',
        '**Read the inbox at 1 hour and at 4 hours.** Check the spam folder too. Log each email with the minute it arrived. **A pass:** a welcome email within 5 to 15 minutes, the window in Joy Joya’s checklist. A first reminder about 30 to 45 minutes after you leave is the timing [Klaviyo’s flow audit checklist](' +
          KL_CHECKLIST +
          ') gives as common best practice.',
      ],
    },
    {
      kind: 'p',
      text: 'One address that leaves a basket and then starts a checkout usually receives the checkout reminder only. Klaviyo’s checklist tells the basket flow, the automated basket reminder, to leave out anyone who started checkout. To read both reminders on their own, give the basket a second address.',
    },

    { kind: 'h2', id: 'what-to-look-for', text: 'What to look for in the first 4 hours' },
    {
      kind: 'list',
      items: [
        '**The welcome email and its code.** When it arrived, and whether the code works in the basket.',
        '**The pop-up’s promise.** Whether the email’s offer matches it. 15% on the pop-up and 10% in the email is a finding. In Joy Joya’s test, 20 of 362 brands sent an offer that didn’t match.',
        '**The reminder.** Whether it names the product and its price, and links back to the basket or the checkout.',
        '**Anything at all.** An empty inbox at 4 hours, with the spam folder checked, is a finding too. Report it as “nothing yet at 4 hours”.',
      ],
    },
    {
      kind: 'p',
      text: 'Keep to what a customer can see. An empty inbox shows that nothing arrived. The cause could be a flow switched off, a filter, or a delay set longer than 4 hours, and that sits inside the brand’s Klaviyo account. Saying so plainly gives the client a reason to give you access.',
    },

    { kind: 'h2', id: 'proposal-template', text: 'An email marketing proposal template for Klaviyo jobs' },
    {
      kind: 'p',
      text: 'Lead the cover letter with the finding, in this order. Upwork’s help pages say freelancers can attach files to a proposal, so the screenshot goes in as an attachment.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**The first line:** what you did, at which store, and when. “Signed up to Northfield Skin through your pop-up at 10:02 today and left a serum in the basket.”',
        '**One finding, with the time it arrived:** “The welcome email came at 10:04 with the 10% code. A reminder with the serum and its price came at 10:47. By 14:02 nothing else had arrived.”',
        '**One screenshot:** the email as it arrived, with its time showing, attached to the proposal.',
        '**One question:** “Is the basket reminder meant to be a single email, or should a second one follow within the day?”',
        '**Your offer and the next step:** what you’d fix first, and a short call through Upwork Messages, the next step Upwork’s own guide suggests.',
      ],
    },
    {
      kind: 'note',
      title: 'The opening, filled in',
      text: 'Signed up to Northfield Skin through your pop-up at 10:02 today and left a serum in the basket. The welcome email came at 10:04 with the 10% code, and a reminder with the serum and its price came at 10:47. By 14:02 no second reminder had arrived, and your post mentions abandoned carts, so that’s where I’d start. Is the basket reminder meant to be a single email? The screenshot is attached, and I can walk you through it on a short call.',
    },
    {
      kind: 'p',
      text: 'Send it from the profile the client will hire. If a call follows, check the store again the day before, in case the brand has changed something.',
    },

    { kind: 'h2', id: 'what-4-hours-misses', text: 'What a 4-hour check misses' },
    {
      kind: 'p',
      text: 'Some stores send their first reminder later than 4 hours. This month Obsession ran a pilot for 4 agencies on the stores they pitch and serve. Between 21 and 24 October 2026, its AI customers signed up, browsed, left a basket and started a checkout at each store, each with its own inbox, and watched every inbox for 48 hours. Every store in the pilot had at least one gap: an email that never came, came late or missed one of Obsession’s written criteria, such as the item’s price or a link back.',
    },
    {
      kind: 'list',
      items: [
        'Most first reminders came within 4 hours, the fastest after 30 minutes. Some came about 10 hours later, which a 4-hour read reports as nothing.',
        'Nearly half the stores sent nothing in the 48 hours after a shopper left a checkout with their email typed in.',
      ],
    },
    {
      kind: 'art',
      caption: 'An invented week of 5 prospects. At 4 hours, oakmere looked silent after its basket. Its reminder came at 10 hours. Only the 48-hour read can say an email never came.',
      art: {
        kind: 'report',
        title: '5 prospects, read twice',
        period: 'Each signed up, left a basket and started a checkout on Monday at 9:00',
        cols: ['Prospect', 'Welcome', 'By 4 h', 'By 48 h'],
        rows: [
          { name: 'northfield', cells: ['2 min', 'Reminder, 45\u00a0min', '2nd at 22\u00a0h'], tone: 'ok' },
          { name: 'harbourline', cells: ['No code', 'Reminder, 1\u00a0h', 'No more'], tone: 'fail' },
          { name: 'oakmere', cells: ['6 min', 'Nothing yet', 'Reminder, 10\u00a0h'], tone: 'late' },
          { name: 'calderwood', cells: ['4 min', 'No price shown', 'No more'], tone: 'fail' },
          { name: 'birchway', cells: ['Nothing', 'Nothing yet', 'Nothing'], tone: 'fail' },
        ],
        notes: [
          'Every store is invented, on .example addresses.',
          'Proposals at 4 hours say “nothing yet”. Only birchway goes in a pitch as sending nothing.',
        ],
      },
    },
    {
      kind: 'p',
      text: 'A 4-hour read catches most first reminders and misses some. Finish the 48 hours on the prospects worth it, and before any call. Prospects found on LinkedIn have no job post setting the clock. Wait the full 48 hours there, and put the second reminder, or its absence, in the first message.',
    },

    { kind: 'h2', id: 'after-you-win', text: 'After you win: weekly and monthly checks' },
    {
      kind: 'p',
      text: 'The same check keeps working once the brand hires you. Run it on each client every week, before the Monday report. The client then sees which flows reached a new customer, and when. [A weekly flow log](/blog/show-clients-every-flow-fired) sets out that record, with each email and the minute it arrived.',
    },
    {
      kind: 'p',
      text: 'For brands that won’t pay a retainer, sell a monthly check. Run the same sign-up, basket and checkout each month and report what arrived and what changed. Once a client gives you access, the [email marketing audit](/blog/email-marketing-audit) covers the account, deliverability and the customer’s view together. The [Klaviyo flow audit](/blog/audit-prospect-email-without-klaviyo-login) runs the full 48-hour check from outside, with a control address.',
    },
    {
      kind: 'p',
      text: '[Why retention agencies need AI customers](/blog/ai-customers-for-retention-agencies) sets out the weekly routine across clients, their rivals and the agency’s prospects.',
    },

    { kind: 'h2', id: 'your-sum', text: 'Your sum: hours by hand against one client won' },
    {
      kind: 'p',
      text: 'Put your own figures in. As an example, say a check takes 25 minutes of hands-on work. That covers the address, the sign-up, the basket, the checkout, 2 inbox reads, the screenshots and the opening lines. At 5 prospects a week that is about 2 hours, and at 20 a week about 8 hours. At 300 prospects a month it is about 125 hours, or 3 working weeks.',
    },
    {
      kind: 'p',
      text: 'Set that against one client. [Netalico, a Klaviyo agency, publishes its prices](' +
        NETALICO +
        '). Its monthly campaign management costs $1,200 for 4 emails a month, or $5,000 for 16 emails and 4 texts. Those 2 figures serve as a low and a high retainer.',
    },
    {
      kind: 'table',
      caption: 'One client won, at a low and a high published retainer, before any marketplace fee',
      cols: ['Months retained', 'Low: $1,200 a month', 'High: $5,000 a month'],
      rows: [
        ['3', '$3,600', '$15,000'],
        ['6', '$7,200', '$30,000'],
        ['12', '$14,400', '$60,000'],
      ],
    },
    {
      kind: 'p',
      text: 'A quarter of checks takes about 27 hours at 5 a week and about 108 hours at 20 a week. Say that quarter wins 1 client you would not have won otherwise. At the low retainer, the first 3 months return $33 to $133 for each hour of checking, and 12 months return $133 to $533.',
    },

    { kind: 'h2', id: 'options', text: 'Ways to check prospects at volume, compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 29 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to check a prospect’s store before a proposal, as of 29 October 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'The proposal carries no finding from the brand’s store', 'Jobs that hand you the account at the start'],
        [
          'By hand: a new address per prospect and a sheet',
          'Any store, every step, read by you',
          'Free, plus your hours',
          'Hours grow with each prospect and each 48-hour read',
          '1 to 5 prospects a week',
        ],
        [
          'A VA (virtual assistant) or a team member',
          'Runs your written steps while you write proposals',
          'Their hourly rate',
          'Needs written pass marks, and each screenshot still needs your check',
          'Agencies bidding on several jobs a day',
        ],
        [
          'Browser agent: [ChatGPT’s cloud browser](' + CLOUD_BROWSER + ')',
          'Fills in forms and keeps working after you leave',
          'Paid ChatGPT plans in supported regions, excluding Free and Go',
          'Pauses for sign-ins and confirmations, and some websites block it',
          'A one-off sign-up you can watch',
        ],
        [
          'Obsession (ours): [Prospect intelligence](/recipes/prospect-intelligence), [Mystery shopper](/recipes/mystery-shopper)',
          'An AI customer for each step at any store you name, shopping from the US or the UK, each email kept as it arrived',
          'Running now: Check 5 stores free\nCredit-based plans, like Claude’s',
          'Why a flow didn’t send sits inside the brand’s account',
          'Hundreds or thousands of prospects a month, then weekly and monthly client checks',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'An AI customer is an AI agent that becomes a real customer of a company, with its own inbox, phone number and browser, and keeps what the company sends and shows it as evidence ([what AI customers are](/blog/ai-customers)). Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your rivals and prospect with proof. The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026. This month it ran a pilot for 4 agencies on the stores they pitch and serve, and the first is moving to 300 brands a month.',
    },
    {
      kind: 'p',
      text: 'Obsession runs as many AI customers as a prospect list needs, each with its own inbox, phone number and browser, and each doing one thing. One signs up, one browses, one leaves a basket and one starts a checkout, each shopping from the US or the UK to match the brand’s market. When a store asks a visitor to prove it’s human, a person on the Obsession team completes that step and the AI customer carries on. It runs at 300 brands a month, 1,000 or 5,000, and it’s built for millions.',
    },
    {
      kind: 'p',
      text: 'Use Obsession when your agency checks hundreds of prospects a month and wants the hours in your sum back, with a finding about each brand’s own store in every proposal. Each prospect is read at the hours you choose: 4 hours for an Upwork job, 12 or 24 for a warm lead, 48 before any call, or for as long as you want to keep watching. After the win, the same AI customers check each client every week before the Monday report. Brands that won’t pay a retainer get a monthly check, and your agency can run it for every brand it serves. Obsession’s ready-made job for pitch lists, [prospect intelligence](/recipes/prospect-intelligence), returns a verdict for every company on the list, with the email or page that shows it.',
    },
    {
      kind: 'p',
      text: 'For 1 to 5 prospects a week, the check by hand is enough, and a VA can run it from the 6 steps and their pass marks. [ChatGPT’s cloud browser](' +
        CLOUD_BROWSER +
        ') suits a one-off sign-up you can watch, and it pauses when a step needs you.',
    },
    {
      kind: 'cta',
      text: 'Name 5 stores you’re pitching, or clients’ stores with their OK, and Obsession checks them free. Its AI customers sign up, leave a basket and start a checkout at each store, then report what arrived and what didn’t, with every email kept as it arrived. The Obsession team helps your agency set up its first batch.',
      to: USE_CASE,
      label: 'Check 5 stores free',
    },

    { kind: 'h2', id: 'when-you-dont-need-it', text: 'When a check before the proposal isn’t needed' },
    {
      kind: 'list',
      items: [
        '**The work sits inside the account,** such as a template design, a list import or an integration to repair. A customer’s view adds little there.',
        '**The client offers access in the job post or the first message.** Read the flows themselves.',
        '**The store has no sign-up form or isn’t taking orders yet.** Say that in one line of the proposal.',
        '**A referral has already booked the call.** Ask for access on the call.',
      ],
    },
    {
      kind: 'p',
      text: 'Upwork is one channel among several. [How to get email marketing clients](/blog/how-to-get-email-marketing-clients) covers referrals, partner directories and cold email, each opened with a finding from the brand’s store. [How to get clients as a marketing agency](/blog/get-clients-as-a-marketing-agency) sets out the whole workflow, from choosing brands to the call. It covers retention, CRO (conversion rate optimisation), Shopify Plus and performance agencies.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about Upwork Klaviyo jobs' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do I win Upwork Klaviyo jobs?',
          a: 'Open the proposal with what the brand’s own store sent you as a new customer. Sign up within an hour of the job going up, leave a basket and start a checkout. Read the inbox at 1 hour and at 4 hours. Then lead the cover letter with one finding, its time, a screenshot and one question.',
        },
        {
          q: 'What should an email marketing proposal template include?',
          a: 'For a Klaviyo job, 5 parts in this order. A first line says what you did at the store and when. One finding follows with the time it arrived, then one screenshot of the email and one question about the brand’s flows. It ends on what you’d fix first and the next step. An email campaign proposal template follows the same order, with the first campaign you’d send in place of the fix.',
        },
        {
          q: 'Can I edit an Upwork proposal after sending it?',
          a: 'Upwork’s help centre says you can edit the cover letter and attachments up to 6 hours after submitting, or until the client views it, whichever comes first. After that, you can still edit the terms until the client accepts or rejects it. A proposal sent at hour 1 can take the 4-hour result if the client hasn’t opened it.',
        },
        {
          q: 'Is it OK to sign up to a prospect’s store to check their emails?',
          a: 'Signing up through the public pop-up is what any customer does. Use an address of your own, named for your business, never enter payment details and stop before paying. The brand will see your address on its list and a basket in its numbers, so say who you are when you write. This isn’t legal advice.',
        },
        {
          q: 'How long should I wait before saying a store sends no abandoned cart email?',
          a: '48 hours, with the spam folder checked. In Obsession’s October pilot for 4 agencies, some stores sent their first reminder about 10 hours after the shopper left. Until the 48 hours are up, say “nothing yet at 4 hours”.',
        },
        {
          q: 'Does this work if the brand isn’t on Klaviyo?',
          a: 'Yes. Every step is something a customer does, so it works on any store, whichever email tool the brand uses. Only the audit inside the account, once the client gives you access, changes.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the examples',
      text: 'Northfield Skin, its serum and every time in the examples are invented. Obsession’s pilot for 4 agencies ran between 21 and 24 October 2026 on the stores each agency sent in, with every inbox watched for 48 hours. Every store and agency stays anonymous. The 25 minutes in the worked sum is an example to replace with your own, and the 2 retainers are Netalico’s published prices. Upwork’s and OpenAI’s help pages are quoted as they stood on 29 October 2026.',
    },
  ],

  sources: [
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'Review job proposals', publisher: 'Upwork Help', url: UPWORK_REVIEW },
    { title: 'How to boost your proposal', publisher: 'Upwork Help', url: UPWORK_BOOST },
    { title: 'How to submit a proposal on Upwork', publisher: 'Upwork Help', url: UPWORK_SUBMIT },
    { title: 'How to edit your proposal', publisher: 'Upwork Help', url: UPWORK_EDIT },
    { title: 'Proposal insights', publisher: 'Upwork Help', url: UPWORK_INSIGHTS },
    { title: 'Recovering abandoned checkouts', publisher: 'Shopify Help Center', url: SHOPIFY_ABANDONED },
    { title: 'The complete checklist to audit your flows', publisher: 'Klaviyo (Maria Trotta)', url: KL_CHECKLIST, date: '2026-03-31' },
    { title: 'Shopify Klaviyo agency: pricing', publisher: 'Netalico', url: NETALICO },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: CLOUD_BROWSER, date: '2026-10-28' },
  ],

  related: [
    'audit-prospect-email-without-klaviyo-login',
    'how-to-get-email-marketing-clients',
    'show-clients-every-flow-fired',
    'recipe:prospect-intelligence',
  ],
}
