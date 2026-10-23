import type { BlogPost } from './types'

/* Post for the December to February pitch season (Content and Search Plan, 23 Oct 2026), published 8 Dec 2026. Readers:
   owners and heads of new business at retention, email and CRO agencies, plus Shopify build agencies that sell
   retention. Primary query "klaviyo flow audit"; also email marketing audit checklist, email flow audit, how to win
   ecommerce clients, cro audit shopify. Idea: "Audit a prospect's email and SMS with no Klaviyo login"
   (_research/seo/library/email_sms_lens.json, rank 6), with the retention agency profile's pains and alternatives
   (_research/money-icps/profile_retention_agencies.json).
   Angle: every agency offers a free audit and most need the brand's login first, so the prospect sees value only after
   agreeing to a call. The article teaches the outside half completely and free (what a new customer of the prospect
   gets in 48 hours, the one page, the first line, what one inbox can't prove) and keeps the inside audit as the second
   step after the yes. A prospect is checked through the public sign up any customer can use; the basket and checkout
   stop leave one more basket in the store's numbers and use no payment details.
   Reworked from the archived free-audit-agency-clients post: its Joy Joya figures, its audit comparison table and its
   first line the owner can check. Dropped on purpose: "declared" agents, tier 1 and tier 2, "with the owner's OK" for
   baskets, the pricing section, the agency study round-up.
   Read at source on 23 Oct 2026: Joy Joya's test of 362 brands, Flowium's audit page, Klaviyo Academy's flow audit
   lesson, Klaviyo's March 2026 flow checklist, Klaviyo Help on Smart Sending and on delivery, Gmail Help on inbox
   categories, Aimerce's flow audit post, the Agency Core 2026 report (the PDF, for the 67%), the site's sample output,
   the retention agencies use case and the prospect intelligence recipe. The two quotes come from public threads in the
   library (read live on 3 Oct 2026; Reddit could not be reopened on 23 Oct). The only Obsession result cited is the
   September store check on /sample-output, as the page states it. Not used, on purpose: the 93% and 128 stores, any
   PilotX audit figure, the $410 lamp, any agency pricing figure, any estimate of strategist hours from our own files.
   The store and the owner in the two first messages are invented, at an .example address. Buyer words; no dashes. */

const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const FLOWIUM = 'https://flowium.com/audit'
const ACADEMY = 'https://academy.klaviyo.com/en-us/courses/audit-your-klaviyo-account/lessons/audit-your-flows'
const KL_CHECKLIST = 'https://klaviyo.com/blog/the-complete-checklist-audit-your-flows'
const SMART_SENDING = 'https://help.klaviyo.com/hc/en-us/articles/115002779311'
const DELIVERY = 'https://help.klaviyo.com/hc/en-us/articles/35283141315099'
const GMAIL_TABS = 'https://support.google.com/mail/answer/3094499'
const AIMERCE = 'https://newsletter.aimerce.ai/p/we-audited-500-klaviyo-accounts-this-is-how-i-audit-klaviyo-flows'
const AGENCY_CORE = 'https://agencymanagementinstitute.com/wp-content/uploads/2026/05/Agency-Core-2026_Executive-Summary.pdf'
const R_DUMMY = 'https://www.reddit.com/r/Klaviyo/comments/1rawe00/klaviyo_not_sending_welcome_series_emails_from_flow/'
const R_AGENCY = 'https://www.reddit.com/r/agency/comments/1s4iwpc/i_kept_losing_clients_who_couldnt_see_what_they/'
const SAMPLE = 'https://useobsession.com/sample-output'
const USE_CASE = 'https://useobsession.com/use-cases/leak-checks-for-retention-agencies'
const RECIPE = 'https://useobsession.com/recipes/prospect-intelligence'

export const post: BlogPost = {
  slug: 'audit-prospect-email-without-klaviyo-login',
  title: 'Audit a prospect’s email and SMS without a Klaviyo login',
  dek: 'Every agency offers a free audit, and most need the brand’s login first. Sign up as the prospect’s new customer instead, and send the owner the email itself with its time.',
  metaTitle: 'Klaviyo flow audit without a login: 48 hours as a customer',
  description:
    'Run a Klaviyo flow audit on a prospect without their login: sign up as a new customer, record 48 hours of email and SMS, and send the owner the proof.',
  answer:
    'To audit a prospect’s email and SMS without a Klaviyo login, sign up to their store as a new customer from an address and phone number that have never bought, then record every email and text for 48 hours with its time and Gmail tab. Send the owner the email itself and its time, and keep the inside flow audit for after the yes.',
  primaryKeyword: 'klaviyo flow audit',
  keywords: [
    'email flow audit',
    'email marketing audit checklist',
    'how to win ecommerce clients',
    'cro audit shopify',
    'free email marketing audit',
    'welcome email audit',
    'klaviyo flow not sending',
    'audit a prospect’s email',
  ],
  category: 'For agencies',
  published: '2026-10-23',
  updated: '2026-10-23',
  readingMinutes: 10,
  order: 6,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'pack',
    workspace: 'agency',
    art: {
      kind: 'report',
      title: 'oakhouse.example · what a new customer got in 48 hours',
      period: 'Signed up Monday 09:02 on a phone · read Wednesday 09:02',
      cols: ['Step', 'What arrived', 'When'],
      rows: [
        { name: 'Pop up', cells: ['15% off promised', '09:02'], tone: 'info' },
        { name: 'Welcome email', cells: ['10% off, not 15%', '5 h 35 min later'], tone: 'late' },
        { name: 'Text opt in', cells: ['No confirmation text', 'None in 48 h'], tone: 'fail' },
        { name: 'Basket left', cells: ['Reminder with product, photo, price', '1 h 04 min later'], tone: 'ok' },
        { name: 'Checkout left', cells: ['No reminder', 'None in 48 h'], tone: 'fail' },
      ],
      notes: [
        'The first line: the pop up promised 15%; the welcome email came 5 hours 35 minutes later, with 10%.',
        'Attach both emails as they arrived, with their times.',
        'Leave the sum for the owner: their sign ups, their rate, their average order.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'In July 2026 Laryssa Wirstiuk of Joy Joya signed up to 362 ecommerce brands with fresh email addresses and phone numbers, and logged what arrived. She had no access to any brand’s dashboards. 158 never sent a welcome email, 53 never sent the text they promised, and 20 sent an offer that didn’t match the pop up ([Joy Joya, July 2026](' +
        JOYJOYA +
        ')).',
    },
    {
      kind: 'p',
      text: 'Any agency can run that test on a prospect before it says a word. Few do, because the free audit every agency offers starts inside the brand’s account. [Flowium’s audit page](' +
        FLOWIUM +
        ') says a full audit of a Klaviyo account needs Manager access, and gives 2 to 5 business days. So the owner sees what you found only after agreeing to a call, and your offer sits in the inbox beside every other agency’s free audit.',
    },
    {
      kind: 'p',
      text: 'The rule for the outside half is short: report what arrived, when it arrived and where it landed, never why. A new customer can see all three in 48 hours with nothing to hand over. The inside audit, which can see why, becomes the second step after the yes.',
    },
    {
      kind: 'stat',
      value: '43.6%',
      label: 'of 362 ecommerce brands never sent a new subscriber a welcome email',
      source: 'Joy Joya, July 2026',
      href: JOYJOYA,
    },

    { kind: 'h2', id: 'klaviyo-flow-audit-from-outside', text: 'How to run a Klaviyo flow audit from outside, as a new customer' },
    {
      kind: 'p',
      text: 'Klaviyo’s own audit guides work inside the account. [Its Academy lesson](' +
        ACADEMY +
        ') starts from the flow performance report and the benchmarks page, and its [March 2026 checklist](' +
        KL_CHECKLIST +
        ') starts from analytics. Both confirm which core flows are live. A new customer can test that, and what the flows send, without being let in.',
    },

    { kind: 'h3', id: 'set-up', text: 'Set up customers the prospect has never met' },
    {
      kind: 'list',
      items: [
        '**4 new Gmail addresses,** named for your agency so the owner recognises one in their list: welcome, basket, checkout and a control. Gmail shows you the tab each email lands in.',
        '**1 phone number** that can receive texts and has never opted in to the brand.',
        '**A private window on a phone,** in the country the store sells to.',
        '**A sheet:** the step, the time, what arrived and when, the tab and a screenshot.',
        '**A rule, written first.** For example, a welcome email in 15 minutes with the code the pop up promised. Joy Joya’s checklist asks for 5 to 15 minutes. Klaviyo’s checklist suggests a first basket reminder 30 to 45 minutes after the basket is left.',
      ],
    },
    {
      kind: 'p',
      text: 'Use only the public paths any customer has: the pop up, the footer form, the text opt in, the basket and the checkout page. Nothing here needs a made up identity, a contact form or a call.',
    },

    { kind: 'h3', id: 'pop-up', text: 'The pop up, on a phone' },
    {
      kind: 'p',
      text: 'Wait for the pop up as a visitor would, then enter the first address and, if it asks, the phone number. Screenshot the offer word for word, with the clock. **Record:** the offer, when the pop up appeared and whether the form submitted on a phone. No pop up is a finding too: 44 of Joy Joya’s 362 brands had no real way to sign up beyond a small footer form.',
    },

    { kind: 'h3', id: 'welcome-email', text: 'The welcome email and its code' },
    {
      kind: 'p',
      text: 'Write down the minutes from submit to inbox and set the offer beside the pop up’s. In Joy Joya’s test, 20 brands sent an offer that didn’t match, such as 15% off in the pop up and 10% in the email. Try the code in a basket on a phone. Note the tab. [Gmail Help](' +
        GMAIL_TABS +
        ') describes Promotions as the tab for deals and offers: it sits in the inbox, not in spam, so record it and don’t call it a fault.',
    },

    { kind: 'h3', id: 'text-opt-in', text: 'The text opt in' },
    {
      kind: 'p',
      text: 'Record whether a confirmation text arrives, what it promises, and each text after it with its time. 53 of Joy Joya’s 362 brands, 14.6%, never sent the text they promised. Reply STOP when the window ends and check the texts stop. Consent and quiet hours rules differ by country and by US state, and this isn’t legal advice.',
    },

    { kind: 'h3', id: 'basket', text: 'A basket left behind' },
    {
      kind: 'p',
      text: 'On the basket address, add 1 product and leave. Record when a reminder arrives and whether it shows the product’s name, photo and price. A basket you leave appears in the store’s numbers as one more basket, so don’t buy, and never use payment details.',
    },

    { kind: 'h3', id: 'checkout', text: 'A checkout, stopped before paying' },
    {
      kind: 'p',
      text: 'On the checkout address, reach the checkout page, enter the address and stop before payment. Record whether 1 reminder arrives, 2 or none. Keep this address apart from the basket one: Klaviyo’s checklist tells the basket flow to exclude anyone who started checkout, so one address doing both would blur which flow sent what.',
    },

    { kind: 'h3', id: 'control', text: 'The 48 hours, with a control and the spam folder checked' },
    {
      kind: 'p',
      text: 'Watch the inboxes and the phone for 48 hours, and look in the spam folder each time. The control is the fourth address, signed up through the footer form in the same minute as the pop up. If the footer address gets a welcome and the pop up address doesn’t, the pop up is where it breaks. If neither does, the break isn’t the pop up alone, and you still can’t say where. A gap counts only once the sign up is confirmed, the spam folder is checked and the whole window is watched.',
    },

    { kind: 'h2', id: 'one-page-pitch', text: 'Turn the 48 hours into one page and a first line the owner can check' },
    {
      kind: 'p',
      text: 'The owner can repeat this in a minute, because it is what they do when a flow looks wrong.',
    },
    {
      kind: 'quote',
      text: 'I’m not getting any automatic emails when I sign up with a dummy address.',
      cite: 'A store owner on r/Klaviyo, February 2026',
      href: R_DUMMY,
    },
    {
      kind: 'p',
      text: 'Keep the page to what they can check on their own phone:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**The finding, in 1 sentence with a time in it.** Signed up at 09:02 on Monday; the welcome email arrived at 14:37.',
        '**The email itself, as it arrived,** forwarded or saved with the time it came. A screenshot starts an argument. The email settles it.',
        '**The pop up’s promise beside the email’s offer.**',
        '**The owner’s sum, left blank for them.** New sign ups last month, times the share of welcome email recipients who place an order (their flow report has it), times their average order, halved. You can’t see those figures from outside. The owner can, in a minute, and that is the reason to ask for the login.',
      ],
    },
    {
      kind: 'p',
      text: 'Halve the sum on purpose, so it stays low enough to be true. If the break is only in the pop up, count only the sign ups that came through it.',
    },
    {
      kind: 'p',
      text: 'The September store check shows the shape. On Tuesday 22 September a test customer left a £40 Body Care Gift Set in a UK skincare store’s basket at 02:57, and another stopped at checkout with a £21 deodorant at 03:11. In the 48 hours that followed, no email reached either inbox ([the sample output](' +
        SAMPLE +
        ')). It was 4 test customers, 1 inbox each, one store and one run, so it reports what arrived and not why.',
    },
    {
      kind: 'note',
      title: 'A first line when the email came late',
      text: 'Signed up to oakhouse.example on my phone at 09:02 on Monday. The pop up promised 15% off; the welcome email reached my inbox at 14:37, 5 hours 35 minutes later, with 10% off. Both are attached as they arrived. Your flow report will show whether it’s everyone or just me.',
    },
    {
      kind: 'note',
      title: 'A first line when nothing came',
      text: 'Signed up to oakhouse.example through your pop up at 09:02 on Monday. 48 hours later there is no welcome email in the inbox or the spam folder, and no sign of the 15% the pop up promised. A second address I signed up through your footer form in the same minute got its welcome at 09:07. Screenshots of both are attached. If it helps, I can show you what I’d check first.',
    },
    {
      kind: 'p',
      text: 'Open the message with the one that fits. Send it to the owner or the head of ecommerce from your own address, and say who you are: they will see your address in their list. Check again the day before any call: a gap that has closed is no longer a pitch.',
    },

    { kind: 'h2', id: 'what-one-inbox-cant-prove', text: 'What one inbox can’t prove, so don’t claim it' },
    {
      kind: 'list',
      items: [
        '**“Your flow is switched off.”** You saw no email, not the flow. Klaviyo’s Smart Sending skips a flow email to a profile that got another inside the window, 16 hours by default, and a skipped email isn’t sent later ([Klaviyo Help](' +
          SMART_SENDING +
          ')). A silent basket can be a setting, and from outside you can’t tell which.',
        '**“Your emails land in Promotions.”** A new address shows 1 inbox’s view. Gmail sorts mail into tabs on its own and learns from the moves each person makes, so a loyal customer’s inbox may sort the same email differently. Report the tab you saw, with the date.',
        '**“Your welcome series is weak.”** You saw its first 48 hours.',
        '**“Every customer gets this.”** A flow can hold conditional splits, so 2 sign ups can receive different emails.',
        '**“This is what you send.”** A December welcome email can carry the holiday offer. Date everything you record.',
        '**“This costs you £X.”** Revenue sits in their flow report. Leave the sum to the owner.',
      ],
    },

    { kind: 'h2', id: 'win-ecommerce-clients', text: 'How to win ecommerce clients before the first call' },
    {
      kind: 'p',
      text: 'Pipeline is the problem agencies name first, and the pitch season runs from December to February.',
    },
    {
      kind: 'stat',
      value: '67%',
      label: 'of 415 agency leaders call prospect pipeline a pressing challenge, the top one in 2022, 2025 and 2026',
      source: 'Agency Core 2026 research report',
      href: AGENCY_CORE,
    },
    {
      kind: 'p',
      text: 'That 67% is the category, not your agency. The outside audit moves the proof ahead of the call. Sign up on Monday, send the first message on Wednesday, and the owner has something to check on their own phone before deciding whether to talk. Start with prospects that run ads and a sign up pop up. They pay for every subscriber, so a welcome email that never arrives costs money they can already see.',
    },
    {
      kind: 'p',
      text: 'The outside audit earns a call. When a client has already introduced you and a call is booked, skip it and ask for the login.',
    },
    { kind: 'h3', id: 'cro-audit-shopify', text: 'For a CRO audit on Shopify, the same sign up covers the shopper’s side' },
    {
      kind: 'p',
      text: 'CRO and Shopify build agencies run the same steps and read more than email. On the phone, note how the pop up opens and whether it closes, what the basket page shows, and what checkout asks before it lets you leave.',
    },

    { kind: 'h2', id: 'inside-audit-after-the-yes', text: 'The inside audit is the second step, after the yes' },
    {
      kind: 'table',
      caption: 'The outside audit and the inside audit, compared',
      cols: ['', 'Outside audit', 'Inside audit'],
      rows: [
        ['Needs', 'A new address, a phone number and 48 hours', 'Access to the brand’s Klaviyo account (Flowium asks for Manager access)'],
        ['Starts', 'Today, before any call', 'After the owner says yes and grants access'],
        ['Sees', 'What arrived, when, in which tab, with the offer it carried', 'How the flows are built, what they earn and where the setup is wrong'],
        ['Can’t see', 'Why a message did or didn’t arrive', 'Where a customer’s inbox put the email'],
        ['Proof the owner can check', 'The email itself and its time, on their own phone', 'Findings in their own account, after the call'],
        ['Costs you', 'Minutes of setup, then 48 hours of waiting', 'A strategist’s hours before a client signs'],
      ],
    },
    {
      kind: 'p',
      text: 'The inside audit reads the flows, filters and delays that explain a gap, and it is where Klaviyo’s lesson and checklist point. One flow audit vendor puts a manual audit at [30 minutes to 2 hours](' +
        AIMERCE +
        ') (vendor data, July 2025). The outside audit shows the gap exists, which a dashboard can miss: in [Klaviyo’s help](' +
        DELIVERY +
        '), delivery means the recipient’s mail server accepted the message, even if it goes to spam.',
    },
    {
      kind: 'p',
      text: 'After the yes, the first outside record is the baseline. Run the same sign up after each fix and the monthly report becomes a before and after.',
    },
    {
      kind: 'quote',
      text: 'I kept losing clients who couldn’t see what they were paying for',
      cite: 'An agency owner on r/agency, 2026',
      href: R_AGENCY,
    },

    { kind: 'h2', id: 'where-checking-by-hand-stops', text: 'Where an email flow audit by hand stops' },
    {
      kind: 'p',
      text: 'For 5 prospects, the sheet above is all you need.',
    },
    {
      kind: 'list',
      items: [
        '**Scale.** 40 prospects need 160 addresses created and watched, and 40 sheets of screenshots.',
        '**1 moment.** A pass on Monday says nothing about Friday.',
        '**No history.** You see nothing sent before the day you signed up.',
        '**The proof is yours.** A screenshot you took is weaker than a record the prospect can open.',
      ],
    },
    {
      kind: 'p',
      text: 'Obsession’s AI test customers do the same sign up at any store you name, keep each email as it arrived and say they’re AI when they talk to a person. Each result is a link the prospect can open. [The use case page](' +
        USE_CASE +
        ') covers it for retention agencies.',
    },
    {
      kind: 'cta',
      text: 'Name 5 stores, prospects or clients (a client’s with their OK). Obsession’s AI test customers sign up, opt in to texts and leave a basket at each, watch every inbox for 48 hours and send back what arrived and what never did, with proof, within 4 days.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'five-prospects-this-week', text: 'Five prospects, signed up on Monday' },
    {
      kind: 'p',
      text: 'Pick the 5 stores you most want to win. Sign each one up on Monday morning, write the time beside every step, and read the inboxes on Wednesday. By then you know which have a gap you can name, and those are the owners you write to first. The login comes after they say yes.',
    },
    {
      kind: 'cta',
      text: 'For a whole pitch list, the prospect intelligence recipe gives every company a verdict and a proof link, back in Clay, your CRM or a sheet.',
      to: '/recipes/prospect-intelligence',
      label: 'See prospect intelligence',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is an email flow audit?',
          a: 'An email flow audit checks the automated emails and texts a brand sends after a sign up or a basket, either inside the platform or from outside, as a new customer.',
        },
        {
          q: 'How do you run a Klaviyo flow audit without access?',
          a: 'Sign up to the store as a new customer with an address and phone number that have never bought, then record every email and text for 48 hours with its time and Gmail tab. That shows what arrived. It can’t show how the flow is built, which needs the login.',
        },
        {
          q: 'What should an email marketing audit checklist include?',
          a: 'From outside: the pop up and its offer, the welcome email and its code, the text opt in and STOP, a basket reminder and a checkout reminder, each with its time and tab. From inside: the flows, filters, delays, splits and revenue behind them.',
        },
        {
          q: 'How long should I wait before calling a message missing?',
          a: 'Set the window before you start. Joy Joya’s checklist expects a welcome email in 5 to 15 minutes, and Klaviyo’s checklist suggests a first basket reminder 30 to 45 minutes after the basket is left. 48 hours covers both with room to spare, and the spam folder is checked before you call a gap.',
        },
        {
          q: 'Is it legal to sign up to a prospect’s list as a test?',
          a: 'Signing up through the public pop up or form is what any customer does. Use your own address, never use payment details and stop before paying. They will see your address in their list and a basket in their numbers, so say who you are. The rules on text consent differ by country and by US state. This isn’t legal advice.',
        },
        {
          q: 'What if every message arrives on time?',
          a: 'Say so and don’t invent a weakness. Keep the record and check again before the call: if a journey breaks later, you will know first.',
        },
        {
          q: 'Does this work if the prospect isn’t on Klaviyo?',
          a: 'Yes. Every step is something a customer does, so it works on any store and any email and text platform. Only what you check inside after the yes changes.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'On 23 October 2026 we read, at their sources: Joy Joya’s test of 362 brands, Flowium’s audit page, Klaviyo Academy’s lesson on auditing flows, Klaviyo’s March 2026 flow checklist, its Smart Sending and delivery help pages, Gmail Help on inbox categories, Aimerce’s flow audit post and the Agency Core 2026 report (the 67% and the 415 are from its pages 10 and 11). The two quotes come from public threads checked live on 3 October 2026. The 1 result of our own is the September store check on our sample output page. The store in the two first messages is invented.',
    },
  ],

  sources: [
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'Free email marketing audit', publisher: 'Flowium', url: FLOWIUM, date: 'Checked 23 Oct 2026' },
    { title: 'Audit your flows', publisher: 'Klaviyo Academy', url: ACADEMY, date: 'Checked 23 Oct 2026' },
    { title: 'The complete checklist to audit your flows', publisher: 'Klaviyo (Maria Trotta)', url: KL_CHECKLIST, date: '2026-03-31' },
    { title: 'Understanding Smart Sending in Klaviyo', publisher: 'Klaviyo Help Center', url: SMART_SENDING, date: 'Checked 23 Oct 2026' },
    { title: 'Deliverability vs. delivery for each channel', publisher: 'Klaviyo Help Center', url: DELIVERY, date: 'Checked 23 Oct 2026' },
    { title: 'Organize your emails into categories', publisher: 'Gmail Help', url: GMAIL_TABS, date: 'Checked 23 Oct 2026' },
    { title: 'We audited 500 Klaviyo accounts: this is how I audit Klaviyo flows', publisher: 'Aimerce (vendor)', url: AIMERCE, date: '2025-07-11' },
    { title: 'Agency Leaders See the Path. Now Walk It! The Agency Core 2026 Research Report', publisher: 'Agency Core', url: AGENCY_CORE, date: 'May 2026' },
    { title: 'Klaviyo not sending welcome series emails from flow', publisher: 'r/Klaviyo', url: R_DUMMY, date: '2026-02-21' },
    { title: 'I kept losing clients who couldn’t see what they were paying for', publisher: 'r/agency', url: R_AGENCY, date: '2026' },
    { title: 'Sample output: the September store check', publisher: 'Obsession', url: SAMPLE, date: 'Run 22 to 24 Sep 2026' },
    { title: 'Leak checks for retention agencies', publisher: 'Obsession', url: USE_CASE, date: 'Checked 23 Oct 2026' },
    { title: 'Prospect intelligence', publisher: 'Obsession', url: RECIPE, date: 'Checked 23 Oct 2026' },
  ],

  related: [
    'recipe:prospect-intelligence',
    'recipe:mystery-shopper',
    'recipe:email-sms-tracking',
    '/use-cases/leak-checks-for-retention-agencies',
    '/sample-output',
    'black-friday-checklist-new-customer',
  ],
}
