import type { BlogPost } from './types'

/* Article for the January switch season (written and published 23 Oct 2026, read most in January). Readers: owners of retention and
   email agencies and their account managers, when clients review what the retainer buys. Angle: attribution reports get
   argued, a receipt gets checked. The article gives a weekly flow receipt format (welcome, basket, checkout, post
   purchase, back in stock), how to run it by hand, what it costs in hours across a client list, and how to put it in
   front of a client without overclaiming: it proves delivery, not revenue, and it promises nothing about churn.
   Checked at source on 23 Oct 2026: Klaviyo Help (attribution, flow analytics, email metrics reference, Smart Sending,
   list triggered flows, back in stock flow), Klaviyo's 2026 benchmarks, Joy Joya's 362 brand test, Shopify's test order
   help, Suped's seed list guide, the Claude Gmail connector page, and the site's own agency pages. The r/agency
   quote comes from the research library (read live on 3 Oct 2026; Reddit could not be opened on 23 Oct).
   Search terms: autocomplete on 23 Oct 2026 returned nothing for "retention agency client reporting", "how to show
   clients email marketing value", "email marketing client report" or "klaviyo client report template". It did return
   suggestions for "email marketing report template" (9), "email marketing report example", "klaviyo report template",
   "klaviyo reporting", "marketing agency report template" and "agency client retention" (2), so those carry the
   headings and the FAQ and the task's phrases stay as the primary keyword. Demand for the exact phrasing is unmeasured.
   Left out on purpose: the ASK BOSCO survey (62% and 75% on the same page, 100 UK marketers, undated, from a
   reporting software vendor), any churn statistic or promise, plus addressing as a Google documented feature (Google's
   help pages don't cover it, so it appears only as something to test), ChatGPT scheduled task limits (the OpenAI page
   returned 403), the 93% and 128 stores on the site, any PilotX audit figure, and any claim that Obsession covers post
   purchase or back in stock. The only Obsession result cited is the September store check on /sample-output.
   Tarn Tea Co is invented, at an .example address. Buyer words (sign up, welcome email, basket, pop up, Promotions
   tab); no dashes. */

const ATTR = 'https://help.klaviyo.com/hc/en-us/articles/1260804504250'
const FLOWREP = 'https://help.klaviyo.com/hc/en-us/articles/115002779351'
const METRICS = 'https://help.klaviyo.com/hc/en-us/articles/360036974872'
const SMART = 'https://help.klaviyo.com/hc/en-us/articles/115002779311'
const LISTFLOW = 'https://help.klaviyo.com/hc/en-us/articles/360003040052'
const BIS = 'https://help.klaviyo.com/hc/en-us/articles/115003872251'
const BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const SHOPIFY_TEST = 'https://help.shopify.com/en/manual/checkout-settings/test-orders'
const SUPED = 'https://www.suped.com/knowledge/email-deliverability/tools/how-accurate-are-seed-lists-for-email-deliverability-testing'
const CLAUDE_GMAIL = 'https://claude.com/docs/connectors/google/gmail'
const R_AGENCY = 'https://www.reddit.com/r/agency/comments/1s4iwpc/i_kept_losing_clients_who_couldnt_see_what_they/'
const SAMPLE = 'https://useobsession.com/sample-output'
const USECASE = 'https://useobsession.com/use-cases/leak-checks-for-retention-agencies'

export const post: BlogPost = {
  slug: 'show-clients-every-flow-fired',
  title: 'Show the client the receipts: a weekly proof that every flow fired',
  dek: 'Attribution reports get argued; a receipt gets checked. A weekly format that shows, flow by flow, that each one reached a new customer this week, what it costs in hours, and how to send it without claiming more than it proves.',
  metaTitle: 'Retention agency client reporting: a weekly flow receipt',
  description:
    'Retention agency client reporting a client can check: a weekly receipt that each flow fired for a new shopper, its cost in hours, and what it never proves.',
  answer:
    'To show a client their email flows ran, send a weekly flow receipt: for each flow (welcome, basket, checkout, post purchase, back in stock), what you did as a new customer, the email that arrived with its time and Gmail tab, a status of fired, late, did not fire or not due, and the dates any fix was found, approved, live and checked again. It proves delivery, not revenue.',
  primaryKeyword: 'retention agency client reporting',
  keywords: [
    'retention agency client reporting',
    'how to show clients email marketing value',
    'email marketing client report',
    'email marketing report template',
    'email marketing report example',
    'klaviyo report template',
    'klaviyo reporting',
    'marketing agency report template',
    'agency client retention',
  ],
  category: 'For agencies',
  published: '2026-10-23',
  updated: '2026-10-23',
  readingMinutes: 9,
  order: 8,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'board',
    workspace: 'agency',
    art: {
      kind: 'log',
      title: 'tarntea.example · weekly flow receipt, week of Monday 19 October',
      who: 'A new customer each run: fresh address, private window, a phone',
      status: { tone: 'late', text: '2 of 3 on time' },
      rows: [
        { time: 'Mon 09:01', text: 'Welcome fired, with its code', detail: '1 minute after sign up, Promotions tab', tone: 'ok' },
        { time: 'Mon 10:08', text: 'Basket reminder fired', detail: 'Smoked Oolong, £14, named with photo and price', tone: 'ok' },
        { time: 'Wed 09:14', text: 'Checkout reminder did not fire', detail: 'Nothing at 48 hours', tone: 'fail' },
        { time: 'Wed 15:40', text: 'Fix live, approved by the client at 15:10', detail: 'A filter left from the summer sale', tone: 'info' },
        { time: 'Thu 10:02', text: 'Checkout checked again: fired', detail: 'Left at 09:00, reminder at 10:02', tone: 'ok' },
      ],
      foot: 'Found, approved, live and checked again: a record the client can open in their own inbox.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Klaviyo’s help page on attribution says it itself: “Every platform or vendor may define event or message attribution slightly differently.” By default it gives a sale to the last eligible touchpoint before the order, and for new accounts the email windows are [5 days after a click and 5 days after an open](' +
        ATTR +
        '). A client who sets that report beside the store’s own numbers can end up with two figures and no way to settle which is right.',
    },
    {
      kind: 'p',
      text: 'January is when the retainer gets read. The client has a revenue number it can’t reconcile and a set of flows it has never watched send, and it asks what it is paying for. An agency owner on r/agency put the cost in one line.',
    },
    {
      kind: 'quote',
      text: 'I kept losing clients who couldn’t see what they were paying for',
      cite: 'An agency owner on r/agency, 2026',
      href: R_AGENCY,
    },
    {
      kind: 'p',
      text: 'In retention agency client reporting, an attribution figure gets argued and a receipt gets checked. **A flow receipt is a dated record, made as a new customer, that one flow’s email reached an inbox: what you did, the email itself, the minute it arrived and the tab it landed in.** It proves delivery. It doesn’t prove revenue, and you should never present it as if it did.',
    },
    {
      kind: 'stat',
      value: 'Nearly 41%',
      label: 'of email revenue comes from flows, which are 5.3% of sends, across 183,000+ Klaviyo customers',
      source: 'Klaviyo (vendor data), 2026 benchmarks',
      href: BENCH,
    },
    {
      kind: 'p',
      text: 'Flows are where the retainer earns, and where the client sees least. A campaign lands in the client’s own inbox on send day. A flow sends to strangers one at a time, so when one stops, nobody on the client’s side is likely to notice.',
    },
    {
      kind: 'p',
      text: 'A customer side test shows how common the silence is. When Joy Joya signed up to [362 ecommerce brands](' +
        JOYJOYA +
        ') with fresh email addresses and phone numbers, and recorded what reached a real inbox and phone, 158 never sent a welcome email.',
    },
    {
      kind: 'stat',
      value: '43.6%',
      label: 'of 362 ecommerce brands never sent a new subscriber a welcome email',
      source: 'Joy Joya, page updated 27 July 2026',
      href: JOYJOYA,
    },

    { kind: 'h2', id: 'argued-or-checked', text: 'Why a number gets argued and a receipt gets checked' },
    {
      kind: 'p',
      text: 'A flow report answers a different question. Klaviyo’s [flow report](' +
        FLOWREP +
        ') shows recipients, opens, clicks and, in its 30 day snapshot, the revenue attributed to the email. Its [email metrics reference](' +
        METRICS +
        ') defines Received Email as “When a recipient receives an email” and doesn’t mention inbox placement or Gmail tabs. Suped, an email deliverability vendor, is plainer still in its [seed list guide](' +
        SUPED +
        '): “Delivery means the receiving server accepted the message.” That is what a platform report is for.',
    },
    {
      kind: 'p',
      text: 'A receipt records what a customer got, and the client can check it by opening their own inbox. Leave opens out of it. The same metrics reference says tracked opens can include automated opens from Apple Mail Privacy Protection, so an open proves less than an arrival.',
    },
    {
      kind: 'p',
      text: 'Keep both documents and never merge them. Print the attribution window on the revenue report and put the receipt beside it. One says what the flows earned by the platform’s rules. The other says they ran.',
    },

    { kind: 'h2', id: 'the-format', text: 'The weekly receipt: an email marketing report template for each client' },
    {
      kind: 'p',
      text: 'One table per client, sent on the same day every week, one row per flow. The table below is for an invented client, Tarn Tea Co (tarntea.example), for the week of Monday 19 October 2026. Every name, time and fix in it is made up.',
    },
    {
      kind: 'table',
      caption: 'A weekly flow receipt for one client. Invented example: Tarn Tea Co, tarntea.example',
      cols: ['Flow', 'You did', 'What arrived', 'Status', 'If it broke'],
      rows: [
        ['Welcome', 'Signed up at the pop up, Mon 19 Oct 09:00', 'Welcome email with code, 09:01, Promotions', 'Fired', 'None'],
        ['Basket', 'Left Smoked Oolong (£14) in the basket, Mon 09:06', 'Reminder at 10:08, Promotions', 'Fired', 'None'],
        [
          'Checkout',
          'Left checkout with a £28 tea set, Mon 09:14',
          'Nothing at 48 hours, Wed 09:14',
          'Did not fire',
          'Found Wed 21 Oct 09:14. Cause: a filter left from the summer sale. Approved by the client 15:10. Live 15:40. Checked again Thu 22 Oct: left at 09:00, reminder at 10:02.',
        ],
        ['Post purchase', 'No order this week', 'None expected', 'Not due', 'Next run Mon 2 Nov, with an order the client OKs'],
        ['Back in stock', 'Asked to be told about Jade Gunpowder (sold out), Mon 09:20', 'Not restocked this week', 'Not due', 'Closes when the client restocks'],
      ],
    },
    {
      kind: 'p',
      text: '**Fired** is an email inside its deadline. **Late** is an email after its deadline but inside 48 hours. **Did not fire** is nothing at 48 hours, the window the [September store check](' +
        SAMPLE +
        ') used. **Not due** is a flow that can’t start until the client does something, such as take an order or restock a product. Set each deadline with the client, from the flow’s own delay, and write it down before the first run. A flow built to send after 1 hour can have a 2 hour deadline. Without that, “late” becomes the next argument.',
    },
    {
      kind: 'p',
      text: 'Above the table, put the verdict in one line: **2 of 3 flows run this week fired on time. Checkout did not; it was fixed on Wednesday and fired when checked again on Thursday. Post purchase and back in stock were not due.** Under it, give each fix its four dates: found, approved, live, checked again. Attach every email as it arrived, forwarded with the received time showing. A screenshot starts an argument. The email settles it.',
    },

    { kind: 'h2', id: 'by-hand', text: 'How to run it by hand, flow by flow' },
    {
      kind: 'p',
      text: 'Use a new address for every flow, every client and every run. Klaviyo says [Smart Sending](' +
        SMART +
        ') caps how many emails one person gets inside a window, 16 hours by default, that it is enabled for flow messages in many of its ready made flows, and that a message it skips isn’t rescheduled. One address that signs up at 09:00 can lose its basket reminder at 10:00 to a rule real shoppers meet too. List triggered flows add a second reason: Klaviyo’s [default for new ones](' +
        LISTFLOW +
        ') is that a profile enters only once, so an address that has been through the welcome series won’t go through it again. The rules quoted here are Klaviyo’s. The receipt works on any platform, because every row is something a customer does; look up your own platform’s equivalents.',
    },
    {
      kind: 'p',
      text: 'That is a lot of addresses: 3 flows across 20 clients is 60 a week. Mail to a tagged address such as receipts+tarncheckout@yourdomain.example may reach one inbox, if your mail host supports it and the sign up form accepts the plus sign. Test that first. Use Gmail where you can, because the tab is part of the receipt.',
    },

    { kind: 'h3', id: 'welcome', text: '1. Welcome: sign up through the pop up' },
    {
      kind: 'p',
      text: 'Sign up on a phone in a private window and write down the minute you submit. **A pass:** the welcome email arrives inside its deadline with the code the pop up promised, and the code works at checkout. A code that arrives and fails is a break the customer finds before you do. **If nothing arrives,** check which list the form feeds, whether double opt in is waiting for a confirmation click, and whether the address already existed.',
    },

    { kind: 'h3', id: 'basket', text: '2. Basket: leave one product behind' },
    {
      kind: 'p',
      text: 'Give the store your address the way a real shopper does, for example by signing up, then add 1 product and close the window. **A pass:** a reminder inside the deadline with the product’s name, photo and price filled in. If the sign up also sent a welcome email, say so in the row, because Smart Sending can explain a missing reminder and a real shopper meets it too. **If nothing arrives,** check the event that starts the flow is still being recorded, especially after a theme or app change, then the flow’s filters.',
    },

    { kind: 'h3', id: 'checkout', text: '3. Checkout: start it and stop before paying' },
    {
      kind: 'p',
      text: 'Enter the new address at the first step of checkout, tick the marketing box if the store shows one, and leave before payment. **A pass:** exactly 1 reminder inside the deadline. If two tools can send it, 2 emails is a fail too. A missing one reads like the row above: nothing at 48 hours. In the [September store check](' +
        SAMPLE +
        '), a £40 basket and a £21 checkout got no reminder in 48 hours.',
    },

    { kind: 'h3', id: 'post-purchase', text: '4. Post purchase: start it with an order' },
    {
      kind: 'p',
      text: 'This flow starts from an order, so it can’t run weekly for free. Run it monthly and after any change, with an order the client agrees to. [Shopify lists](' +
        SHOPIFY_TEST +
        ') a test payment gateway, Shopify Payments test mode, or a real order you cancel and refund, which may cost a processor fee. Its help page says test orders can confirm email notifications. It doesn’t say they start a flow in a separate email platform, so confirm once, in that platform, that the test order registers. **A pass:** the post purchase email arrives on its delay with the right order in it. Until then the row reads Not due.',
    },

    { kind: 'h3', id: 'back-in-stock', text: '5. Back in stock: wait for the restock' },
    {
      kind: 'p',
      text: 'Ask to be told about a sold out product. Klaviyo says the [flow starts at that request](' +
        BIS +
        ') and sends once stock reaches the restock minimum set in the flow, so the row stays Not due until a restock lands. Ask the client to tell you when one does. **A pass:** the email arrives after the restock. A restock below the minimum sends nothing, so check the minimum before you call silence a break.',
    },

    { kind: 'h2', id: 'hours', text: 'What it costs in hours across a client list' },
    {
      kind: 'p',
      text: 'Time one client before you commit the team. A run has 3 parts: starting the flow, filing the email when it lands, and checking back at the deadline. **Hours a week = clients × flows × minutes per flow ÷ 60.**',
    },
    {
      kind: 'p',
      text: 'Take placeholder timings of 6 minutes a flow, 3 flows that can run on demand (welcome, basket, checkout) and 20 clients. 20 × 3 × 6 ÷ 60 is 6 hours a week, or 312 hours across 52 weeks, before any fix. They are placeholders, not a measurement. Put your own minutes in, and time your second run of a client, because the first includes setup.',
    },
    {
      kind: 'p',
      text: 'With 5 clients or fewer, do it by hand and buy nothing. At the same timings that is 1.5 hours a week, and a shared sheet with the five columns above is the whole tool.',
    },

    { kind: 'h2', id: 'overclaiming', text: 'How to show clients email marketing value without overclaiming' },
    {
      kind: 'p',
      text: 'Send the receipt on the same day each week, verdict first, table under it.',
    },
    {
      kind: 'list',
      items: [
        '**Say what it proves, at the top of every receipt:** these flows reached a new customer’s inbox, and this is not a revenue report.',
        '**Show breaks the way you show passes.** A receipt that only ever passes stops being read.',
        '**Word the tab as one address’s view:** Promotions in a new Gmail address, not “your emails go to Promotions”.',
        '**Ask before you test, and keep the tests out of their numbers.** You are signing up and leaving baskets on their store. Tell whoever reports their numbers which addresses you used, and delete the test profiles afterwards.',
      ],
    },
    {
      kind: 'p',
      text: 'Nothing here is a promise that a client stays. It isn’t measured against renewals. It shows the client one part of the work, dated, in their own inbox.',
    },

    { kind: 'h2', id: 'limits', text: 'What a run by hand can’t tell you' },
    {
      kind: 'p',
      text: 'Run by hand, the receipt has limits to know before you put a verdict in front of a client.',
    },
    {
      kind: 'list',
      items: [
        '**1 inbox, 1 moment.** A pass on Monday says nothing about Thursday’s theme update. Run it again after any launch, rebuild or flow edit.',
        '**Silence needs a control.** If a welcome never came, check that a second new address got the client’s newsletter. If it did, sending works and the flow is the fault. If neither got anything, look at the form or the sending first.',
        '**A receipt shows silence, not its cause.** Why it happened is your diagnosis, inside the platform.',
        '**1 Gmail address shows 1 view.** A new subscriber’s tab can differ from a loyal customer’s. Seed lists test where a campaign lands in a set of test mailboxes and are, in their own vendor’s words, [a directional diagnostic](' +
          SUPED +
          '). They answer a different question from a receipt.',
        '**History starts on your first run.** A week you skipped has no receipt, and nobody can make one afterwards.',
      ],
    },
    {
      kind: 'p',
      text: 'An assistant can read the receipts inbox for you. Claude’s [Gmail connector](' +
        CLAUDE_GMAIL +
        ') searches the mail you connect and cites the messages it used, but it is read only: it can’t send, and it can’t see images embedded in emails, so a missing product photo is yours to catch. It reads email. It doesn’t do the signing up, so at 20 clients the hours are still in starting flows. For 5 clients, summarising the week’s receipts is a sound use.',
    },
    {
      kind: 'p',
      text: 'Where the run outgrows a Monday, Obsession’s AI test customers do the signing up: a real inbox and mobile number for each store, a fresh sign up every week and after every launch you tell it about, and every email kept as it arrived. [It does the outside half, and your audit still does the inside](' +
        USECASE +
        '). It checks a client’s store with the client’s OK.',
    },
    {
      kind: 'cta',
      text: 'Each client store gets its own new customer every week, and every email comes back as it arrived, linked and ready for the review call.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'See leak checks for retention agencies',
    },

    { kind: 'h2', id: 'start-here', text: 'Start with the clients whose renewal comes first' },
    {
      kind: 'p',
      text: 'Pick the 3 clients whose retainer is reviewed next. Give each a fresh inbox, run welcome, basket and checkout on Monday, and send the first receipt on Wednesday, when the 48 hours are up. The first one you send is a receipt the client didn’t have to ask for.',
    },
    {
      kind: 'cta',
      text: 'Name 5 client stores. Obsession’s AI test customers sign up, opt in to texts and leave a basket at each for 48 hours, with each client’s OK, then bring back what arrived and what never did, with proof.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What should a retention agency’s client report include?',
          a: 'Two documents kept apart. The revenue report from the email platform, with its attribution window printed on it, and a weekly flow receipt: for each flow, what you did as a new customer, the email that arrived with its time and tab, a status of fired, late, did not fire or not due, and the dates of any fix. The first says what the flows earned. The second shows they ran.',
        },
        {
          q: 'How do you show clients email marketing value?',
          a: 'Show what the flows earned and show that they ran: the platform’s revenue report with its attribution window, beside a dated receipt that each flow reached a new customer.',
        },
        {
          q: 'Does a flow receipt prove email revenue?',
          a: 'No. It proves an email reached a new customer’s inbox, at a time you can read off it. Revenue stays in the platform’s report, under its attribution rules.',
        },
        {
          q: 'How often should I run the receipts?',
          a: 'Weekly for the flows that can run on demand, and again the same day after any theme, app, discount or flow change. Post purchase fits a monthly run with an order the client agrees to, and back in stock closes when the client restocks.',
        },
        {
          q: 'Why can a live flow send nothing to a new customer?',
          a: 'Klaviyo documents two ways. List triggered flows default to letting a profile enter only once, and Smart Sending skips a message when the person got another inside its window, 16 hours by default for email, without rescheduling it. A receipt shows the silence, not which cause it was.',
        },
        {
          q: 'Does a flow receipt improve agency client retention?',
          a: 'Nothing here is measured against renewals, so it makes no promise about them. A receipt removes one argument, whether the email went, and leaves the rest of the retainer to be judged as before.',
        },
        {
          q: 'Can an AI assistant run these checks?',
          a: 'Part of it. Claude’s Gmail connector can search and summarise the inbox you connect, with citations, but it is read only, can’t see images embedded in emails and doesn’t sign up to stores. Starting the flows is still yours.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every platform rule here was read at its source on 23 October 2026: Klaviyo’s help pages on attribution, flow analytics, email metrics, Smart Sending, list triggered flows and the back in stock flow, Klaviyo’s 2026 benchmarks, Joy Joya’s test of 362 brands, Shopify’s test order help, Suped’s seed list guide and the Claude Gmail connector page. The agency owner’s words come from a public r/agency thread, checked live on 3 October 2026. Tarn Tea Co and its receipt are invented. The 1 result of our own is the September store check, shown in full on our sample output page. The time sums use placeholder minutes; replace them with your own.',
    },
  ],

  sources: [
    { title: 'Understanding Klaviyo message attribution', publisher: 'Klaviyo Help Center', url: ATTR, date: 'Updated 10 Mar 2026; read 23 Oct 2026' },
    { title: 'Understanding flow analytics', publisher: 'Klaviyo Help Center', url: FLOWREP, date: 'Updated 7 Oct 2026; read 23 Oct 2026' },
    { title: 'Email metrics reference', publisher: 'Klaviyo Help Center', url: METRICS, date: 'Updated 3 Oct 2025; read 23 Oct 2026' },
    { title: 'Understanding Smart Sending', publisher: 'Klaviyo Help Center', url: SMART, date: 'Read 23 Oct 2026' },
    { title: 'How to create a segment or list triggered flow', publisher: 'Klaviyo Help Center', url: LISTFLOW, date: 'Updated 8 Oct 2026; read 23 Oct 2026' },
    { title: 'How to build a back in stock flow', publisher: 'Klaviyo Help Center', url: BIS, date: 'Read 23 Oct 2026' },
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: BENCH, date: '2026' },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'Placing test orders', publisher: 'Shopify Help Center', url: SHOPIFY_TEST, date: 'Read 23 Oct 2026' },
    { title: 'How accurate are seed lists for email deliverability testing?', publisher: 'Suped', url: SUPED, date: 'Published 2025-06-08; updated 2026-10-16' },
    { title: 'Gmail connector', publisher: 'Claude docs', url: CLAUDE_GMAIL, date: 'Read 23 Oct 2026' },
    { title: 'I kept losing clients who couldn’t see what they were paying for', publisher: 'r/agency', url: R_AGENCY, date: '2026' },
    { title: 'Sample output: the September store check', publisher: 'Obsession', url: SAMPLE, date: 'Run 22 to 24 Sep 2026' },
    { title: 'Leak checks for retention agencies', publisher: 'Obsession', url: USECASE, date: 'Read 23 Oct 2026' },
  ],

  related: [
    'recipe:mystery-shopper',
    'recipe:website-audit',
    '/use-cases/leak-checks-for-retention-agencies',
    '/agencies',
    '/sample-output',
    'black-friday-checklist-new-customer',
  ],
}
