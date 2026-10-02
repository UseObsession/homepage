import type { BlogPost } from './types'

/* Post 2 (docs/SEARCH.md section 5): the free audit that wins agency clients. Hub: Prospect intelligence.
   The one real run is the September 2026 store check on /sample-output, stated only as that page states it: a skincare
   store shopped from the UK, 4 labelled test customers with 1 inbox each, 48 hours watched, 5 messages (welcome 2, No
   verdict; browse 3, Delivered), basket £40 at 02:57 and checkout £21 at 03:11 on Tue 22 Sep, both silent, 15
   screenshots. It is never called signed. Basket and checkout journeys are framed as owner OK only; Seun confirms
   Brand G's consent before this ships. Thought leadership: no competitor product is named. Every number links to its
   source or sits in a stat block; every source was read on 3 Oct 2026. */

export const post: BlogPost = {
  slug: 'free-audit-agency-clients',
  title: 'The free audit that wins agency clients: what the prospect’s customers receive',
  dek: 'Most free audits describe a website the prospect can already see. The one that gets a reply records what their customers receive after they sign up, timed, with proof the owner can check.',
  metaTitle: 'Free audits that win agency clients: the outside-in method',
  description:
    'Free audit lead generation for agencies: test what a prospect’s customers receive. Built on a real 48 hour store check where 2 of 4 journeys went silent.',
  answer:
    'The free audit that wins agency clients is an outside-in audit: a labelled test customer signs up, asks the chat bot and waits, and every email and text that arrives, or never does, is timed and kept as proof. In a real September 2026 store check, 2 of 4 journeys got no message in 48 hours.',
  primaryKeyword: 'free audit lead generation for agencies',
  keywords: [
    'outside-in marketing audit',
    'agency lead magnet',
    'free email marketing audit',
    'welcome email audit',
    'abandoned cart email audit',
    'productised agency audit',
    'paid audit to retainer',
    'prospect intelligence',
    'how to win agency clients',
  ],
  category: 'Prospect intelligence',
  published: '2026-10-03',
  updated: '2026-10-03',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: { screen: 'pack', workspace: 'agency' },

  blocks: [
    {
      kind: 'p',
      text: 'Free audit lead generation for agencies works when the audit shows a prospect something they can’t see from their own desk: what a new customer receives after signing up. Sign up as a labelled test customer, time every message, and open the conversation with the one that never arrived.',
    },
    {
      kind: 'p',
      text: 'We ran that test on [a real skincare store](/sample-output) in September 2026. 4 test customers, every inbox watched for 48 hours. The 2 shoppers who left full baskets heard nothing. A finding like that gets a reply, because the owner can check it on their own phone before lunch.',
    },

    { kind: 'h2', id: 'why-free-audits-fail', text: 'Why does free audit lead generation fail for most agencies?' },
    {
      kind: 'p',
      text: 'Because the audit is usually an opinion about pages the prospect can already see. A crawl score, a page of warnings about image sizes, a guess about the hero banner. The owner has had the same report from other agencies, their developer says half of it doesn’t matter, and none of it is about money they lost last week.',
    },
    {
      kind: 'p',
      text: 'And every agency is sending one, because pipeline is the problem they all share.',
    },
    {
      kind: 'stat',
      value: '67%',
      label: 'of agency leaders call prospect pipeline a pressing challenge, the top one for the third year running',
      source: 'Agency Management Institute, Agency Core 2026',
      href: 'https://agencymanagementinstitute.com/wp-content/uploads/2026/05/Agency-Core-2026_Executive-Summary.pdf',
    },
    {
      kind: 'p',
      text: 'The audits that get read carry a finding about revenue that the prospect can check without you. A missing welcome email qualifies: they sign up on their phone and wait. A slow hero image doesn’t, because their developer will argue with it.',
    },
    {
      kind: 'p',
      text: 'Email audits have a second problem. The usual version reads the brand’s email platform, which needs a login or an API key, and no prospect hands that to a stranger. Even with access, the dashboard reports what the platform sent. Whether it arrived is a separate question.',
    },

    { kind: 'h2', id: 'what-is-an-outside-in-audit', text: 'What is an outside-in audit?' },
    {
      kind: 'p',
      text: 'An outside-in audit tests a business the way its customers meet it. A labelled test customer takes the public paths (the signup popup, the text opt in, the chat bot, the ads), then waits, and every message that arrives, or doesn’t, is timed and kept.',
    },
    {
      kind: 'p',
      text: 'The term isn’t ours. In May 2026 James Fratzke wrote in [Forbes Agency Council](https://www.forbes.com/councils/forbesagencycouncil/2026/05/08/outside-in-marketing-audits-see-your-brand-like-your-customers-do/) that an outside-in marketing audit is “a structured assessment of your brand’s external presence and perception”. His version reads what a brand communicates: the website, ads, social, press and search. The version that wins agency clients adds what a brand sends, because that’s where the automated emails earn their money.',
    },
    {
      kind: 'table',
      caption: 'The 3 audits an agency can offer a prospect, and the blind spot in each',
      cols: ['Audit', 'What it looks at', 'What it needs', 'What it can’t see'],
      rows: [
        ['Site audit', 'Pages, speed, search, copy', 'Nothing', 'Anything that happens after the signup'],
        ['Account audit', 'Flows, settings and send reports inside the email platform', 'A login or an API key', 'Whether a message arrived, and which folder it landed in'],
        ['Outside-in audit', 'What a test customer receives, timed to the minute', 'Nothing for public paths; the owner’s OK for baskets and checkouts', 'Why a message failed inside their systems'],
      ],
    },
    {
      kind: 'p',
      text: 'The last column matters. An outside-in audit proves what a customer got. It can’t tell you whether the basket flow is switched off, filtered out or broken by a theme update. You answer that once you’re hired, with the account access a client gives you.',
    },

    { kind: 'h2', id: 'real-store-check', text: 'What did a 48 hour check of a real store find?' },
    {
      kind: 'p',
      text: 'In September 2026 Obsession’s agents shopped a skincare store, called [Brand G in the report](/sample-output), as 4 labelled test customers, shopping from the UK. Each had its own inbox and its own journey: welcome, browse, basket and checkout. Each inbox was watched for 48 hours.',
    },
    {
      kind: 'p',
      text: 'On Tuesday 22 September the basket shopper left a £40 Body Care Gift Set in the basket at 02:57, UK time. At 03:11 the checkout shopper left a £21 deodorant at checkout, before payment. Both had ticked the marketing box, so the store had permission to write to them.',
    },
    {
      kind: 'p',
      text: '5 messages arrived in the 48 hours, all to the welcome and browse inboxes. Browse got 3, a clear Delivered. Welcome got 2, which the report counted as too few to call, so it reads No verdict. The basket and checkout inboxes got nothing. £61 of products sat in 2 baskets and no message asked either shopper back. The [full sample output](/sample-output) keeps all 15 screenshots and the 5 messages.',
    },
    {
      kind: 'figure',
      src: '/report/page-1.jpg',
      alt: 'Page 1 of the real September report: the 4 journeys and their verdicts, a checkout screenshot and the test customer set up',
      caption: 'Page 1 of the real report. Welcome: No verdict. Browse: Delivered. Basket and checkout: Silent. Store name hidden.',
      width: 992,
      height: 1404,
    },
    {
      kind: 'p',
      text: 'The report ends with the 2 reminders the store didn’t send, drafted from the evidence and marked as unsent: “James, your Body Care Gift Set is still in your bag” and “James, you were one step from done”. James is a placeholder name; the test customer gave the store none.',
    },
    {
      kind: 'p',
      text: 'Look at what the report doesn’t claim. It’s 1 run on 1 store, and it never says the basket flow is switched off. It says a customer who left a full basket heard nothing in 48 hours. The owner can check that, and an agency can fix it.',
    },

    { kind: 'h2', id: 'how-often-messages-fail', text: 'How often do welcome, cart and checkout messages fail?' },
    {
      kind: 'p',
      text: 'More often than the dashboards suggest. The largest recent test of what customers actually receive that we found came from Laryssa Wirstiuk of Joy Joya, who subscribed to 362 ecommerce brands with fresh email addresses and phone numbers.',
    },
    {
      kind: 'stat',
      value: '43.6%',
      label: 'of 362 ecommerce brands never sent a welcome email to a new subscriber',
      source: 'Joy Joya, July 2026',
      href: 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands',
    },
    {
      kind: 'p',
      text: 'The rest of [her numbers](https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands) are just as blunt. 29 brands sent nothing at all. 53, or 14.6%, never sent the text they promised. 20 sent an offer that didn’t match the popup, and 44 had no real way to sign up beyond a small footer form. She saw all of it from outside, without a single dashboard login.',
    },
    {
      kind: 'p',
      text: 'Basket reminders have a thinner record. In [Iterable’s 2017 study](https://iterable.com/wp-content/uploads/2017/02/Iterable_UETop100_EmailEcommerce_Q117.pdf) of the top 100 US online retailers, a logged in test customer added an item and left: only 50% sent a cart reminder, though 87% sent a welcome email. [Cordial’s 2018 check](https://cordial.com/resources/analyzing-the-welcome-emails-of-total-retails-top-100-omnichannel-retailers/) of Total Retail’s top 100 found 23 that sent no welcome email. We haven’t found a larger study of basket reminders from the customer’s side since, which is part of why a dated check of 1 store carries weight in a pitch.',
    },
    {
      kind: 'p',
      text: 'These gaps sit in the messages that earn the most per send. Klaviyo’s 2026 benchmarks cover more than 183,000 of its customers.',
    },
    {
      kind: 'stat',
      value: '41%',
      label: 'of email revenue came from automated flows, which were just 5.3% of email sends',
      source: 'Klaviyo, 2026 email benchmarks',
      href: 'https://www.klaviyo.com/products/email-marketing/benchmarks',
    },
    {
      kind: 'p',
      text: 'Omnisend’s 2026 report, built on 150,000 brands, points the same way and names the 2 journeys that matter most.',
    },
    {
      kind: 'stat',
      value: '76%',
      label: 'of orders from automated messages came from abandoned cart and welcome messages',
      source: 'Omnisend, 2026 ecommerce marketing report',
      href: 'https://www.omnisend.com/resources/reports/2026-ecommerce-marketing-report/',
    },
    {
      kind: 'p',
      text: 'So a missing welcome or basket reminder is no nitpick. It’s a hole in the part of the email programme that does the most work per message, and you found it from the outside.',
    },

    { kind: 'h2', id: 'what-you-can-test', text: 'Which journeys can an agency test without asking?' },
    {
      kind: 'p',
      text: 'Anything a customer can do alone on the public site, as long as your test customer says it’s a test and never poses as a buyer to a person. Baskets and checkouts need the owner’s OK. Split the audit into 2 tiers and the line stays clear.',
    },
    { kind: 'h3', id: 'tier-1', text: 'Tier 1: the public paths, without asking' },
    {
      kind: 'p',
      text: 'Run these before the first call. Any member of the public can do them, and nobody at the prospect spends a minute on a customer who doesn’t exist.',
    },
    {
      kind: 'list',
      items: [
        'Sign up through the popup, with a fresh, labelled inbox for each journey. Time the welcome email, check spam and promotions, and compare its offer with the popup’s.',
        'Opt in to texts where they’re offered. Record what was promised and whether a text arrives.',
        'Ask the site’s chat bot 1 question a buyer would ask, such as delivery times to a postcode. If a person picks up, the step ends there.',
        'Open their live ads from the public ad libraries and follow each one to its page on a phone. Is it live, in stock, and showing the same offer?',
        'Try the signup form on a phone. Klaviyo’s own team, after [nearly 100 account audits](https://www.klaviyo.com/blog/email-sms-marketing-priorities-2026), told brands to test every form on a phone, not just in the editor.',
      ],
    },
    {
      kind: 'p',
      text: 'Never fill a contact form, book a demo, call, or reply to a person. Each of those spends an employee’s time on a fake customer. If you want the legal side, read [is it legal to mystery shop competitors](/blog/is-it-legal-to-mystery-shop-competitors); this is where good manners draw the line.',
    },
    { kind: 'h3', id: 'tier-2', text: 'Tier 2: baskets and checkouts, with the owner’s OK' },
    {
      kind: 'p',
      text: 'Leaving a basket or starting checkout leaves a record in the store’s own systems, so these journeys run only with the owner’s OK, and every checkout stops before payment. In the September check, both silent journeys were basket and checkout ones: the journeys tier 2 covers.',
    },
    {
      kind: 'p',
      text: 'That makes tier 2 the natural second step. Tier 1 finds a gap and earns the reply. The offer of tier 2 (“want me to run your basket and checkout journeys next?”) opens the conversation about paid work.',
    },
    { kind: 'h3', id: 'saas-version', text: 'For a software prospect: the free trial, with no card' },
    {
      kind: 'p',
      text: 'The journeys change but the method doesn’t. Start the free trial where no card is needed, then log every onboarding email by trial day, the reminder before the trial ends, and the bot’s answer to 1 buyer question. If the trial asks for a card, stop and note it. Never reply, and close the trial the moment a sales rep writes or calls.',
    },
    { kind: 'h3', id: 'worked-example', text: 'A tier 1 audit, start to finish' },
    {
      kind: 'p',
      text: 'Here’s the whole job by hand, for an invented homeware prospect at homeware-brand.example.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Write the rule before you start. For example: a welcome email within 15 minutes, carrying the 10% the popup promised. [Joy Joya’s own checklist](https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands) expects it within 5 to 15 minutes.',
        'Set up 1 inbox per journey on a domain you own, named so anyone can see it’s a test (welcome-test@audits.your-agency.example), plus 1 phone number for texts. No invented person.',
        'Monday 09:00: sign up through the popup. Screenshot the popup, the confirmation and the clock.',
        '09:05: opt in to texts. 09:10: ask the bot about delivery. 09:20: open 2 live ads on a phone and follow them through.',
        'Watch the inbox and the phone for 48 hours, longer for a welcome series. Log each message with its time, sender name, subject and offer. Check spam every time.',
        'Give each journey a verdict: Delivered, Silent, No verdict or Couldn’t test. Silent only counts if the signup was confirmed, the spam folder checked and the whole window watched.',
        'Write the finding as 1 sentence with a time in it, draft the missing message, and send both with the screenshots.',
      ],
    },
    {
      kind: 'note',
      title: 'A first line the owner can check',
      text: 'Signed up to your list at 09:02 on Monday. 48 hours later there’s no welcome email, and no sign of the 10% the popup promised. Screenshots attached, with the email I’d have sent. If it helps, I can run your basket and checkout journeys next. Those need your OK.',
    },
    { kind: 'h3', id: 'mistakes', text: 'Mistakes that turn a finding into an argument' },
    {
      kind: 'list',
      items: [
        'Calling a gap before the window ends. Silence at hour 6 proves nothing yet.',
        'Skipping the spam folder. A welcome email in spam is a different finding, and an embarrassing one to get wrong.',
        'Using 1 inbox for every journey. You’ll never know which signup triggered which email.',
        'Shopping from the wrong country. Use the country the store sells to, or the popup and offer may differ.',
        'Pitching a gap that has since closed. Check again the day before the call.',
        'Claiming the cause. You saw no email; you don’t know the flow is off. Say what you saw.',
      ],
    },
    {
      kind: 'p',
      text: 'By hand, tier 1 works for a handful of prospects. Across a list, it’s a job for software. Obsession’s [prospect intelligence recipe](/recipes/prospect-intelligence) runs the same public paths with a declared AI agent per company, each with its own inbox and number, and writes the gap and a proof link back to your rows. The [prospect intelligence with Clay](/use-cases/prospect-intelligence-with-clay) example shows it on a real table.',
    },
    {
      kind: 'screen',
      screen: 'leads',
      workspace: 'company',
      caption: 'Example: 50 prospects from a Clay table, each joined through its public signup. The 13 with a gap are listed with their proof, and you send every opener yourself.',
    },
    {
      kind: 'cta',
      text: 'Run tier 1 at every prospect on your list, with a declared agent and a proof link for each company.',
      to: '/recipes/prospect-intelligence',
      label: 'See prospect intelligence',
    },

    { kind: 'h2', id: 'what-to-charge', text: 'What should an agency charge for an audit?' },
    {
      kind: 'p',
      text: 'Give tier 1 away and charge for tier 2. Tier 1 costs you a few inboxes and some patience, and its job is to earn a meeting. Tier 2 needs the owner’s OK and covers the journeys where money leaks, so it’s worth a fee, or worth folding into the first month of a retainer.',
    },
    {
      kind: 'p',
      text: 'Published prices for other audits give you an anchor. [Similarweb’s June 2026 guide](https://aisearch.similarweb.com/blog/agencies-ai-visibility/) prices a single AI visibility audit at $500 to $5,000, puts a standard one at $1,500 to $2,500, and treats it as the step that converts to a retainer. In [Ahrefs’ survey of 439 SEO providers](https://ahrefs.com/blog/seo-pricing/), the most common project fee for agencies was $2,501 to $5,000.',
    },
    {
      kind: 'p',
      text: 'Price tier 2 on what it includes, never on the length of the report: the basket and checkout journeys on phone and desktop, the drafted fixes, and a retest once the fixes are live. The retest is what the client remembers. If they sign, credit the fee against the first month, so the audit reads as the start of the work.',
    },

    { kind: 'h2', id: 'monthly-proof', text: 'How does an audit become monthly proof a client reads?' },
    {
      kind: 'p',
      text: 'Run the same journeys every month and report what changed. The audit that won the client becomes the baseline, and every report after it answers the question clients ask most.',
    },
    {
      kind: 'p',
      text: 'In the [AgencyAnalytics 2026 benchmarks](https://agencyanalytics.com/agency-benchmarks-2026), from 494 agency professionals, that question is “Can you connect marketing performance to revenue?”, named by 55%. Budget cuts, at 42%, now outrank performance as the top reason clients leave. The retainer that shows its work is the one that survives a budget review.',
    },
    {
      kind: 'p',
      text: 'Clients say the same from their side. In the [Agency Core companion study](https://agencymanagementinstitute.com/wp-content/uploads/2026/05/Agency-Core-2026_Executive-Summary.pdf) of 400 people who hire agencies, 89% want full accountability from their agency, even when AI does part of the work.',
    },
    { kind: 'p', text: 'A monthly outside-in report fits on a page:' },
    {
      kind: 'list',
      items: [
        'Each journey’s verdict this month, beside last month’s.',
        'Time to the first message, and every message received, with its offer.',
        'Anything that broke: a dead link in a text, a code that expired early, an ad landing on a sold out page.',
        'Every fix, found, approved, live, then checked again by a fresh test customer.',
        'What a few rivals sent the same kind of customer, from their public signups. [Competitor email tracking tools](/blog/best-competitor-email-tracking-tools) compares the ways to collect it.',
      ],
    },
    {
      kind: 'p',
      text: 'The retest line does the selling. An example: “Basket reminder missing on 24 September. Switched on 30 September. Our test basket on 1 October got it in 52 minutes.” A finance director can follow that without a call.',
    },
    {
      kind: 'screen',
      screen: 'report',
      workspace: 'agency',
      caption: 'Example: a monthly report in the agency’s own brand, setting a client’s emails and texts beside 3 rivals’, ready to send.',
    },
    {
      kind: 'p',
      text: 'Obsession runs these checks on a schedule, with every step signed and dated, so each line in the report links to proof the client can open. Its [rival email and text tracking](/recipes/email-sms-tracking) fills the last row, and the [agencies page](/agencies) shows how the pieces fit across every client.',
    },
    {
      kind: 'cta',
      text: 'Start with 1 client store, with their OK: 4 test customers, 48 hours watched, the report within 4 days. Your first one is free.',
      to: '/recipes/mystery-shopper',
      label: 'See the mystery shopper',
    },

    { kind: 'h2', id: 'questions', text: 'Charging, timing and permission, answered' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Should agencies charge for audits?',
          a: 'Charge for the part that needs the owner’s time. A check of public paths makes a good free lead magnet: it costs little and needs nobody’s permission. Basket and checkout journeys, drafted fixes and a retest are worth a fee, credited against the first month if the client signs.',
        },
        {
          q: 'How long should a test run?',
          a: 'Long enough for the message you’re testing to arrive. 48 hours suits basket and checkout reminders, which is what the September store check used. Give a welcome series or a text programme a week or 2, and a software trial its full length. Set the window before you start, and never call a gap early.',
        },
        {
          q: 'Can I audit a prospect without permission?',
          a: 'Through the public paths, yes: signing up, opting in to texts, asking the chat bot, and reading their pages and ads, with a test identity that says it’s a test. Not their basket or checkout, and never contact their staff as a pretend buyer. [Is it legal to mystery shop competitors?](/blog/is-it-legal-to-mystery-shop-competitors) covers the law.',
        },
        {
          q: 'What should a free email audit include?',
          a: 'When the welcome email arrived and which folder it landed in, whether its offer matches the popup, whether a promised text arrived, the sender name, and 1 answer from the chat bot. Each finding needs a time, a screenshot and the window you watched. Add the missing message, drafted, so the fix is already on the table.',
        },
        {
          q: 'Do I need access to the prospect’s email platform?',
          a: 'Not for this audit. An account audit reads what the platform sent; an outside-in audit records what a customer received. Once you’re hired, the account tells you why a message didn’t arrive.',
        },
        {
          q: 'What if every message arrives on time?',
          a: 'Then say so and don’t invent a weakness. Keep checking on a schedule. If a journey breaks later, you’ll know first, and that makes a better opener than a forced finding.',
        },
      ],
    },
  ],

  sources: [
    {
      title: 'Sample output: a real store check with 0 basket reminders',
      publisher: 'Obsession',
      url: 'https://useobsession.com/sample-output',
      date: '22 to 24 Sep 2026',
    },
    {
      title: 'Why Your Welcome Email Isn’t Working (I Tested 362 Brands)',
      publisher: 'Joy Joya (Laryssa Wirstiuk)',
      url: 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands',
      date: '27 Jul 2026',
    },
    {
      title: 'Analyzing welcome emails from Total Retail’s Top 100 Omnichannel Retailers',
      publisher: 'Cordial',
      url: 'https://cordial.com/resources/analyzing-the-welcome-emails-of-total-retails-top-100-omnichannel-retailers/',
      date: '16 Aug 2018',
    },
    {
      title: 'The Q1 2017 User Engagement Top 100 Report: Email Marketing in E-Commerce',
      publisher: 'Iterable',
      url: 'https://iterable.com/wp-content/uploads/2017/02/Iterable_UETop100_EmailEcommerce_Q117.pdf',
      date: 'Feb 2017',
    },
    {
      title: '2026 email marketing benchmarks by industry',
      publisher: 'Klaviyo',
      url: 'https://www.klaviyo.com/products/email-marketing/benchmarks',
      date: '3 Feb 2026',
    },
    {
      title: 'Omnisend’s 2026 ecommerce marketing report',
      publisher: 'Omnisend',
      url: 'https://www.omnisend.com/resources/reports/2026-ecommerce-marketing-report/',
      date: '2026, updated 12 Aug 2026',
    },
    {
      title: 'What nearly 100 account audits revealed about email and text message marketing priorities for 2026',
      publisher: 'Klaviyo',
      url: 'https://www.klaviyo.com/blog/email-sms-marketing-priorities-2026',
      date: '12 Feb 2026',
    },
    {
      title: 'Agency Leaders See the Path. Now Walk It! The Agency Core 2026 Research Report',
      publisher: 'Agency Management Institute and Audience Audit',
      url: 'https://agencymanagementinstitute.com/wp-content/uploads/2026/05/Agency-Core-2026_Executive-Summary.pdf',
      date: 'May 2026',
    },
    {
      title: 'How Agencies Can Offer AI Visibility as a Service',
      publisher: 'Similarweb',
      url: 'https://aisearch.similarweb.com/blog/agencies-ai-visibility/',
      date: '1 Jun 2026',
    },
    {
      title: 'SEO Pricing: How Much Does SEO Cost? 439 People Polled',
      publisher: 'Ahrefs',
      url: 'https://ahrefs.com/blog/seo-pricing/',
      date: 'Updated 15 Aug 2024',
    },
    {
      title: '2026 AgencyAnalytics Marketing Agency Benchmarks Report',
      publisher: 'AgencyAnalytics',
      url: 'https://agencyanalytics.com/agency-benchmarks-2026',
      date: '2026',
    },
    {
      title: 'Outside-In Marketing Audits: See Your Brand Like Your Customers Do',
      publisher: 'Forbes Agency Council (James Fratzke)',
      url: 'https://www.forbes.com/councils/forbesagencycouncil/2026/05/08/outside-in-marketing-audits-see-your-brand-like-your-customers-do/',
      date: '8 May 2026',
    },
  ],

  related: [
    'is-it-legal-to-mystery-shop-competitors',
    'best-competitor-email-tracking-tools',
    'recipe:prospect-intelligence',
    'recipe:mystery-shopper',
    '/use-cases/prospect-intelligence-with-clay',
    '/sample-output',
    '/agencies',
  ],
}
