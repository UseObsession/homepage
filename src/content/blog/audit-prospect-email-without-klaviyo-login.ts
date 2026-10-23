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
const SAMPLE = 'https://useobsession.com/sample-output'
const USE_CASE = 'https://useobsession.com/use-cases/leak-checks-for-retention-agencies'

export const post: BlogPost = {
  slug: 'audit-prospect-email-without-klaviyo-login',
  title: 'Audit a prospect’s email and SMS without a Klaviyo login',
  dek: 'Most free audits need the prospect’s Klaviyo login before an agency can show a finding. An agency can instead sign up to the prospect’s store as a new customer, record 48 hours of email and texts, and send the owner what arrived before any call.',
  metaTitle: 'Klaviyo flow audit without a login: 48 hours as a customer',
  description:
    'Run a Klaviyo flow audit on a prospect without their login: sign up as a new customer, record 48 hours of email and SMS, and send the owner the result.',
  answer:
    'To audit a prospect’s email and SMS without a Klaviyo login, sign up to their store as a new customer from an address and phone number that have never bought, then record every email and text for 48 hours with its time and Gmail tab. Send the owner the emails as they arrived, with their times, and leave the audit inside their Klaviyo account until they agree to work with you.',
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
      text: 'Retention, email, CRO and Shopify build agencies can audit a prospect’s welcome, basket and checkout messages without a Klaviyo login. Sign up to the prospect’s store as a new customer, record every email and text that arrives over 48 hours, and send the owner the result before the first call.',
    },
    {
      kind: 'p',
      text: 'A July 2026 test of 362 ecommerce brands, run from new email addresses and phone numbers with no access to any brand’s account, found that 158 sent no welcome email, 53 never sent the text they promised and 20 sent an offer that didn’t match the pop up ([Joy Joya](' +
        JOYJOYA +
        ')).',
    },
    {
      kind: 'stat',
      value: '43.6%',
      label: 'of 362 ecommerce brands never sent a new subscriber a welcome email',
      source: 'Joy Joya, July 2026',
      href: JOYJOYA,
    },

    { kind: 'h2', id: 'inside-audit-after-the-yes', text: 'What an outside audit and an inside audit each cover' },
    {
      kind: 'p',
      text: 'An outside audit records what a new customer receives: what arrived, when it arrived and where it landed. It finds each gap, meaning a message that never arrived, arrived late or carried a different offer from the one promised. An inside audit, run in the prospect’s Klaviyo account, can show why. [Klaviyo Academy’s lesson](' +
        ACADEMY +
        ') starts from the flow performance report and the benchmarks page, and [Klaviyo’s March 2026 checklist](' +
        KL_CHECKLIST +
        ') starts from analytics. Both check which core flows are live, which a new customer can also test from outside, along with what each flow sends.',
    },
    {
      kind: 'p',
      text: '[Flowium’s audit page](' +
        FLOWIUM +
        ') says a full audit of a Klaviyo account needs Manager access and takes 2 to 5 business days, so the owner sees an inside audit only after agreeing to a call and granting access.',
    },
    {
      kind: 'table',
      caption: 'The outside audit and the inside audit, compared',
      cols: ['', 'Outside audit', 'Inside audit'],
      rows: [
        ['Needs', 'A new address, a phone number and 48 hours', 'Access to the prospect’s Klaviyo account (Flowium asks for Manager access)'],
        ['Starts', 'Today, before any call', 'After the owner agrees and grants access'],
        ['Sees', 'What arrived, when, in which tab, with the offer it carried', 'How the flows are built, what they earn and where the setup is wrong'],
        ['Can’t see', 'Why a message did or didn’t arrive', 'Where a customer’s inbox put the email'],
        ['Evidence the owner can check', 'The email itself and its time, on their own phone', 'Findings in their own account, after the call'],
        ['Costs you', 'Minutes of setup, then 48 hours of waiting', 'A strategist’s hours before a client signs'],
      ],
    },
    {
      kind: 'p',
      text: 'The inside audit reads the flows, filters and delays that explain a gap. Aimerce, a flow audit vendor, puts a manual audit at [30 minutes to 2 hours](' +
        AIMERCE +
        ') (vendor data, July 2025). The outside audit shows whether a gap exists, which a dashboard can miss: [Klaviyo’s help centre](' +
        DELIVERY +
        ') counts a message as delivered once the recipient’s mail server accepts it, even if it goes to spam.',
    },

    { kind: 'h2', id: 'win-ecommerce-clients', text: 'When to use an outside audit to win ecommerce clients' },
    {
      kind: 'p',
      text: 'An outside audit gives the owner something to check before the first call. Agency leaders rank prospect pipeline as their top challenge, and the pitch season runs from December to February.',
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
      text: 'Start with prospects that run ads and a sign up pop up. They pay for every subscriber, so a welcome email that never arrives wastes money they can already see. If a client has already introduced you and a call is booked, skip the outside audit and ask for the login.',
    },

    { kind: 'h2', id: 'klaviyo-flow-audit-from-outside', text: 'How to run a Klaviyo flow audit from outside, as a new customer' },
    {
      kind: 'p',
      text: 'Use only the public paths any customer has: the pop up, the footer form, the text opt in, the basket and the checkout page. None of them needs a made up identity, a contact form or a call.',
    },

    { kind: 'h3', id: 'set-up', text: 'Set up 4 addresses, a phone number and a sheet' },
    {
      kind: 'list',
      items: [
        '**4 new Gmail addresses,** named for your agency so the owner recognises one in their list: welcome, basket, checkout and a control. Gmail shows you the tab each email lands in.',
        '**1 phone number** that can receive texts and has never opted in at the prospect’s store.',
        '**A private window on a phone,** in the country the store sells to.',
        '**A sheet** with columns for the step, the time, what arrived and when, the Gmail tab and a screenshot.',
        '**A pass rule, written before you start,** such as a welcome email within 15 minutes carrying the code the pop up promised. Joy Joya’s checklist asks for 5 to 15 minutes, and Klaviyo’s checklist suggests a first basket reminder 30 to 45 minutes after the basket is left.',
      ],
    },

    { kind: 'h3', id: 'pop-up', text: 'The pop up, on a phone' },
    {
      kind: 'p',
      text: 'Wait for the pop up as a visitor would, then enter the first address and, if it asks, the phone number. Screenshot the offer with the time showing. **Record:** the offer, when the pop up appeared and whether the form submitted on a phone. Record a missing pop up too: 44 of Joy Joya’s 362 brands had no real way to sign up beyond a small footer form.',
    },

    { kind: 'h3', id: 'welcome-email', text: 'The welcome email and its code' },
    {
      kind: 'p',
      text: 'Write down the minutes from submit to inbox and set the email’s offer beside the pop up’s. In Joy Joya’s test, 20 brands sent an offer that didn’t match, such as 15% off in the pop up and 10% in the email. Try the code in a basket on a phone, and note the Gmail tab. [Gmail Help](' +
        GMAIL_TABS +
        ') describes Promotions as the inbox tab for deals and offers, so record the tab without reporting Promotions as a gap.',
    },

    { kind: 'h3', id: 'text-opt-in', text: 'The text opt in' },
    {
      kind: 'p',
      text: 'Record whether a confirmation text arrives, what it promises, and each text after it with its time. 53 of Joy Joya’s 362 brands (14.6%) never sent the text they promised. Reply STOP when the 48 hours end and check that the texts stop. Rules on consent and quiet hours differ by country and by US state, and this isn’t legal advice.',
    },

    { kind: 'h3', id: 'basket', text: 'A basket left behind' },
    {
      kind: 'p',
      text: 'Using the basket address, add 1 product to the basket and leave. Record when a reminder arrives and whether it shows the product’s name, photo and price. Don’t buy, and never use payment details. The basket you leave appears in the store’s numbers as one more basket.',
    },

    { kind: 'h3', id: 'checkout', text: 'A checkout stopped before payment' },
    {
      kind: 'p',
      text: 'Using the checkout address, go to the checkout page, enter that email address and stop before payment. Record whether none, 1 or 2 reminders arrive. Keep this address separate from the basket address. Klaviyo’s checklist tells the basket flow to exclude anyone who started checkout, so one address doing both would make it unclear which flow sent which email.',
    },

    { kind: 'h3', id: 'control', text: 'Watch for 48 hours, with a control and the spam folder' },
    {
      kind: 'p',
      text: 'Watch the inboxes and the phone for 48 hours, and look in the spam folder each time. The control is the fourth address, signed up through the footer form in the same minute as the pop up. If the footer address gets a welcome email and the pop up address doesn’t, the gap is in the pop up. If neither gets one, the gap goes beyond the pop up, and from outside you can’t tell where. Count a gap only once the sign up is confirmed, the spam folder is checked and the full 48 hours have passed.',
    },

    { kind: 'h3', id: 'cro-audit-shopify', text: 'Extra checks for a CRO audit on Shopify' },
    {
      kind: 'p',
      text: 'CRO and Shopify build agencies can run the same steps and record more than email. On the phone, note how the pop up opens and whether it closes, what the basket page shows, and what checkout asks before it lets you leave.',
    },

    { kind: 'h2', id: 'what-one-inbox-cant-prove', text: 'What an outside audit can’t show' },
    {
      kind: 'p',
      text: 'An outside audit records what one new customer received. It can’t support these claims:',
    },
    {
      kind: 'list',
      items: [
        '**“Your flow is switched off.”** The audit shows that no email arrived. [Klaviyo’s help centre](' +
          SMART_SENDING +
          ') says Smart Sending skips a flow email to a profile that received another within the window, 16 hours by default, and a skipped email isn’t sent later. A missing basket reminder can come from that setting, and from outside you can’t tell which applies.',
        '**“Your emails land in Promotions.”** A new address shows 1 inbox’s view. Gmail sorts mail into tabs on its own and learns from the moves each person makes, so a loyal customer’s inbox may sort the same email differently. Report the tab you saw, with the date.',
        '**“Your welcome series is weak.”** The audit covers the first 48 hours of the series.',
        '**“Every customer gets this.”** A flow can hold conditional splits, so 2 sign ups can receive different emails.',
        '**“This is what you send.”** A December welcome email can carry the holiday offer, so date everything you record.',
        '**“This costs you £X.”** Revenue figures sit in the owner’s flow report, so leave the sum to the owner.',
      ],
    },

    { kind: 'h2', id: 'one-page-pitch', text: 'How to present the findings to the owner' },
    {
      kind: 'p',
      text: 'Put the findings on one page, limited to what the owner can check on their own phone:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**The finding, in 1 sentence with a time in it,** for example: signed up at 09:02 on Monday, and the welcome email arrived at 14:37.',
        '**The email itself, as it arrived,** forwarded or saved with its arrival time. An original email with its arrival time is harder to dispute than a screenshot.',
        '**The pop up’s promise beside the email’s offer.**',
        '**The owner’s sum, with the figures left blank:** last month’s new sign ups, times the share of welcome email recipients who place an order (in their flow report), times their average order, halved. You can’t see those figures from outside. The owner can fill them in within a minute, which gives you a reason to ask for the login.',
      ],
    },
    {
      kind: 'p',
      text: 'Halving keeps the estimate conservative. If the gap is only in the pop up, count only the sign ups that came through it.',
    },
    {
      kind: 'p',
      text: 'Store owners run the same test on their own flows when one looks wrong, so the owner can repeat your check in a minute.',
    },
    {
      kind: 'quote',
      text: 'I’m not getting any automatic emails when I sign up with a dummy address.',
      cite: 'A store owner on r/Klaviyo, February 2026',
      href: R_DUMMY,
    },
    {
      kind: 'p',
      text: 'An example from the September store check in our [sample output](' +
        SAMPLE +
        '): on Tuesday 22 September a test customer left a £40 Body Care Gift Set in a UK skincare store’s basket at 02:57, and another stopped at checkout with a £21 deodorant at 03:11. No email reached either inbox in the 48 hours that followed. The check used 4 test customers with 1 inbox each, at 1 store in 1 run, so it records what arrived and can’t say why.',
    },
    {
      kind: 'note',
      title: 'A first line when the email came late',
      text: 'Signed up to oakhouse.example on my phone at 09:02 on Monday. The pop up promised 15% off. The welcome email reached my inbox at 14:37, 5 hours 35 minutes later, with 10% off. Both are attached as they arrived. Your flow report will show whether this happens to every new subscriber.',
    },
    {
      kind: 'note',
      title: 'A first line when nothing came',
      text: 'Signed up to oakhouse.example through your pop up at 09:02 on Monday. 48 hours later there is no welcome email in the inbox or the spam folder, and no sign of the 15% the pop up promised. A second address I signed up through your footer form in the same minute got its welcome at 09:07. Screenshots of both are attached. If it helps, I can show you what I’d check first.',
    },
    {
      kind: 'p',
      text: 'Open your message with whichever example fits. Send it from your own address to the owner or the head of ecommerce, and say who you are, as they will see your address in their list. Check again the day before any call, in case the gap has been fixed.',
    },

    { kind: 'h2', id: 'where-checking-by-hand-stops', text: 'Limits of an email flow audit by hand' },
    {
      kind: 'p',
      text: 'A sheet kept by hand is enough for 5 prospects.',
    },
    {
      kind: 'list',
      items: [
        '**The work grows with each prospect.** 40 prospects need 160 addresses created and watched, and 40 sheets of screenshots.',
        '**Each audit covers one point in time.** A pass on Monday doesn’t show what happens on Friday.',
        '**There is no history.** You see nothing sent before the day you signed up.',
        '**Only you hold the record.** The prospect sees your screenshots and can’t open the original.',
      ],
    },
    {
      kind: 'p',
      text: '[Obsession’s AI test customers](' +
        USE_CASE +
        ') run the same sign up at any store you name, keep each email as it arrived, say they’re AI when they talk to a person and return each result as a link the prospect can open.',
    },
    {
      kind: 'cta',
      text: 'Name 5 stores, prospects or clients (a client’s with their OK), and Obsession checks them free. Its AI test customers sign up, opt in to texts and leave a basket at each, watch every inbox for 48 hours and send back what arrived and what didn’t, with proof, within 4 days.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'five-prospects-this-week', text: 'Next steps: audit 5 prospects in one week' },
    {
      kind: 'p',
      text: 'Pick the 5 stores you most want to win. Sign each one up on Monday morning, write the time beside every step and read the inboxes on Wednesday. Write first to the owners whose store has a gap you can name, and ask for the login once they agree to work with you.',
    },
    {
      kind: 'p',
      text: 'Once a prospect becomes a client, the first outside audit is the baseline. Run the same sign up after each fix, and the monthly report can show each flow before and after.',
    },
    {
      kind: 'cta',
      text: 'For a full pitch list, the prospect intelligence recipe returns a verdict and a proof link for every company to Clay, your CRM or a sheet.',
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
          a: 'Set the window before you start. Joy Joya’s checklist expects a welcome email in 5 to 15 minutes, and Klaviyo’s checklist suggests a first basket reminder 30 to 45 minutes after the basket is left. 48 hours covers both, and the spam folder should be checked before you record a gap.',
        },
        {
          q: 'Is it legal to sign up to a prospect’s list as a test?',
          a: 'Signing up through the public pop up or form is what any customer does, so use your own address, never enter payment details and stop before paying. The owner will see your address in their list and a basket in their numbers, so say who you are when you write. Rules on text consent differ by country and by US state, and this isn’t legal advice.',
        },
        {
          q: 'What if every message arrives on time?',
          a: 'Report that result to the owner as it is. Keep the record and check again before any call, in case something changes in the meantime.',
        },
        {
          q: 'Does this work if the prospect isn’t on Klaviyo?',
          a: 'Yes. Every step is something a customer does, so it works on any store and any email and text platform. Only the inside audit, after the owner agrees, changes.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'The 67% and the 415 come from pages 10 and 11 of the Agency Core 2026 report. The r/Klaviyo quote was checked live on 3 October 2026. The only result of our own is the September store check on our sample output page. The store in the 2 example first lines is invented.',
    },
  ],

  sources: [
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'Free email marketing audit', publisher: 'Flowium', url: FLOWIUM },
    { title: 'Audit your flows', publisher: 'Klaviyo Academy', url: ACADEMY },
    { title: 'The complete checklist to audit your flows', publisher: 'Klaviyo (Maria Trotta)', url: KL_CHECKLIST, date: '2026-03-31' },
    { title: 'Understanding Smart Sending in Klaviyo', publisher: 'Klaviyo Help Center', url: SMART_SENDING },
    { title: 'Deliverability vs. delivery for each channel', publisher: 'Klaviyo Help Center', url: DELIVERY },
    { title: 'Organize your emails into categories', publisher: 'Gmail Help', url: GMAIL_TABS },
    { title: 'We audited 500 Klaviyo accounts: this is how I audit Klaviyo flows', publisher: 'Aimerce (vendor)', url: AIMERCE, date: '2025-07-11' },
    { title: 'Agency Leaders See the Path. Now Walk It! The Agency Core 2026 Research Report', publisher: 'Agency Core', url: AGENCY_CORE, date: '2026-05' },
    { title: 'Klaviyo not sending welcome series emails from flow', publisher: 'r/Klaviyo', url: R_DUMMY, date: '2026-02-21' },
    { title: 'Sample output: the September store check', publisher: 'Obsession', url: SAMPLE, date: '2026-09' },
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
