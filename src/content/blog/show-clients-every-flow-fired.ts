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
  title: 'Retention agency client reporting: weekly proof that every flow fired',
  dek: 'A weekly flow log, made as a new customer, shows each client which email flows reached an inbox, when each email arrived and how any break was fixed.',
  metaTitle: 'Retention agency client reporting: proof each flow fired',
  description:
    'Retention agency client reporting a client can check: a weekly log that each flow reached a new customer, the hours it takes, and what it can’t prove.',
  answer:
    'To show a client their email flows ran, send a weekly flow log: for each flow (welcome, basket, checkout, post purchase, back in stock), what you did as a new customer, the email that arrived with its time and Gmail tab, a status of fired, late, did not fire or not due, and the dates any fix was found, approved, live and checked again. It proves delivery only, and revenue stays in the email platform’s own report.',
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
      title: 'tarntea.example · weekly flow log, week of Monday 19 October',
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
      text: 'Retention and email agencies can add a record to their client reporting that the client checks for themselves. **A flow log is a dated record, made as a new customer, that one flow’s email reached an inbox: what you did, the email itself, the minute it arrived and the tab it landed in.** A weekly flow log proves that each flow’s email was delivered. It is not evidence of revenue and should not be presented as such.',
    },
    {
      kind: 'p',
      text: 'Clients often review the retainer in January. By then a client may hold a revenue number it can’t reconcile and flows it has never seen send, and it asks what it is paying for. One agency owner titled a 2026 post on r/agency “[I kept losing clients who couldn’t see what they were paying for](' +
        R_AGENCY +
        ')”.',
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
      text: 'Flows bring in that share of revenue out of the client’s view. A campaign lands in the client’s own inbox on send day. A flow sends to new customers one at a time, so when one stops, nobody on the client’s side is likely to notice.',
    },
    {
      kind: 'p',
      text: '[Joy Joya’s July 2026 test](' +
        JOYJOYA +
        ') signed up to 362 ecommerce brands with fresh email addresses and phone numbers and recorded what reached a real inbox and phone. 158 of the brands never sent a welcome email.',
    },
    {
      kind: 'stat',
      value: '43.6%',
      label: 'of 362 ecommerce brands never sent a new subscriber a welcome email',
      source: 'Joy Joya, page updated 27 July 2026',
      href: JOYJOYA,
    },

    { kind: 'h2', id: 'argued-or-checked', text: 'How a flow log differs from a platform report' },
    {
      kind: 'p',
      text: 'A platform report credits revenue by the platform’s own rules. [Klaviyo’s help page on attribution](' +
        ATTR +
        ') says: “Every platform or vendor may define event or message attribution slightly differently.” By default, Klaviyo credits a sale to the last eligible touchpoint before the order, and for new accounts the email windows are 5 days after a click and 5 days after an open. A client who puts that report beside the store’s own numbers can end up with 2 figures and no way to settle which is right.',
    },
    {
      kind: 'p',
      text: 'Klaviyo’s [flow report](' +
        FLOWREP +
        ') shows recipients, opens, clicks and, in its 30 day snapshot, the revenue attributed to the email. Its [email metrics reference](' +
        METRICS +
        ') defines Received Email as “When a recipient receives an email” and doesn’t mention inbox placement or Gmail tabs. Suped, an email deliverability vendor, defines delivery in its [seed list guide](' +
        SUPED +
        '): “Delivery means the receiving server accepted the message.”',
    },
    {
      kind: 'p',
      text: 'A flow log records what a new customer received, and the client can check it in their own inbox. Leave opens out of the log. The same metrics reference says tracked opens can include automated opens from Apple Mail Privacy Protection.',
    },
    {
      kind: 'p',
      text: 'Keep the 2 documents separate. Print the attribution window on the revenue report, which shows what the flows earned under the platform’s rules, and send the flow log beside it as the record that the flows ran.',
    },

    { kind: 'h2', id: 'the-format', text: 'An email marketing report template: the weekly flow log' },
    {
      kind: 'p',
      text: 'Send one table per client on the same day every week, with one row per flow. The example below is for an invented client, Tarn Tea Co (tarntea.example), for the week of Monday 19 October 2026. Every name, time and fix in it is made up.',
    },
    {
      kind: 'table',
      caption: 'A weekly flow log for one client. Invented example: Tarn Tea Co, tarntea.example',
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
      kind: 'list',
      items: [
        '**Fired:** an email arrived inside its deadline.',
        '**Late:** an email arrived after its deadline but inside 48 hours.',
        '**Did not fire:** nothing arrived in 48 hours, the window the [September store check](' +
          SAMPLE +
          ') used.',
        '**Not due:** the flow can’t start until the client does something, such as take an order or restock a product.',
      ],
    },
    {
      kind: 'p',
      text: 'Set each deadline with the client from the flow’s own delay, and write it down before the first run. A flow built to send after 1 hour can have a 2 hour deadline. An agreed deadline gives you and the client the same rule for what counts as late.',
    },
    {
      kind: 'p',
      text: 'Above the table, put the verdict: **2 of 3 flows run this week fired on time. Checkout did not fire, was fixed on Wednesday and fired when checked again on Thursday. Post purchase and back in stock were not due.** Under it, give each fix its 4 dates: found, approved, live and checked again. Attach every email as it arrived, forwarded with the received time showing, in place of screenshots.',
    },

    { kind: 'h2', id: 'by-hand', text: 'How to run the checks by hand, flow by flow' },
    {
      kind: 'p',
      text: 'Use a new address for every flow, every client and every run. The first reason is Klaviyo’s [Smart Sending](' +
        SMART +
        '), which caps how many emails one person gets inside a window, 16 hours by default. Klaviyo says it is on for flow messages in many of its ready made flows, and a message it skips isn’t rescheduled. An address that signs up at 09:00 can lose its 10:00 basket reminder to that rule, as a real customer can.',
    },
    {
      kind: 'p',
      text: 'The second reason is list triggered flows. Klaviyo’s [default for new ones](' +
        LISTFLOW +
        ') lets a profile enter only once, so an address that has been through the welcome series won’t go through it again. On another platform, look up the equivalent settings. The log itself works on any platform, because every row is something a customer does.',
    },
    {
      kind: 'p',
      text: 'New addresses add up: 3 flows across 20 clients is 60 a week. Tagged addresses such as tests+tarncheckout@yourdomain.example can all reach one inbox if your mail host supports them and the sign up form accepts the plus sign, so test both first. Use Gmail where you can, because the tab an email lands in is part of the log.',
    },

    { kind: 'h3', id: 'welcome', text: '1. Welcome: sign up through the pop up' },
    {
      kind: 'p',
      text: 'Sign up on a phone in a private window and write down the minute you submit. **A pass:** the welcome email arrives inside its deadline with the code the pop up promised, and the code works at checkout. A code that arrives but fails at checkout counts as a break. **If nothing arrives,** check which list the form feeds, whether double opt in is waiting for a confirmation click, and whether the address already existed.',
    },

    { kind: 'h3', id: 'basket', text: '2. Basket: leave one product behind' },
    {
      kind: 'p',
      text: 'Give the store your address the way a real customer does, for example by signing up, then add 1 product and close the window. **A pass:** a reminder inside the deadline with the product’s name, photo and price filled in. If the sign up also sent a welcome email, note it in the row, because Smart Sending can explain a missing reminder and real customers meet the same rule. **If nothing arrives,** check that the event that starts the flow is still being recorded, especially after a theme or app change, then check the flow’s filters.',
    },

    { kind: 'h3', id: 'checkout', text: '3. Checkout: start it and stop before paying' },
    {
      kind: 'p',
      text: 'Enter the new address at the first step of checkout, tick the marketing box if the store shows one, and leave before payment. **A pass:** exactly 1 reminder inside the deadline. If 2 tools can send it, 2 emails count as a fail, and so does nothing at 48 hours. In the [September store check](' +
        SAMPLE +
        '), a £40 basket and a £21 checkout got no reminder in 48 hours.',
    },

    { kind: 'h3', id: 'post-purchase', text: '4. Post purchase: start it with an order' },
    {
      kind: 'p',
      text: 'This flow starts from an order, so it can’t run weekly at no cost. Run it monthly and after any change, with an order the client agrees to. [Shopify lists the ways to place one](' +
        SHOPIFY_TEST +
        '): a test payment gateway, Shopify Payments test mode, or a real order you cancel and refund, which may cost a processor fee. Its help page says test orders can confirm email notifications, and it doesn’t say whether they start a flow in a separate email platform. Confirm once, in that platform, that the test order registers. **A pass:** the post purchase email arrives on its delay with the right order in it. Until then the row reads Not due.',
    },

    { kind: 'h3', id: 'back-in-stock', text: '5. Back in stock: wait for the restock' },
    {
      kind: 'p',
      text: 'Ask to be told about a sold out product. Klaviyo says the [flow starts at that request](' +
        BIS +
        ') and sends once stock reaches the restock minimum set in the flow, so the row stays Not due until a restock lands. Ask the client to tell you when one does. **A pass:** the email arrives after the restock. A restock below the minimum sends nothing, so check the minimum before you record a missing email as a break.',
    },

    { kind: 'h2', id: 'hours', text: 'Hours needed across a client list' },
    {
      kind: 'p',
      text: 'Time one client before you commit the team. A run has 3 parts: starting the flow, filing the email when it lands, and checking back at the deadline. **Hours a week = clients × flows × minutes per flow ÷ 60.**',
    },
    {
      kind: 'p',
      text: 'With placeholder timings of 6 minutes a flow, 3 flows that can run on demand (welcome, basket, checkout) and 20 clients, 20 × 3 × 6 ÷ 60 is 6 hours a week, or 312 hours across 52 weeks, before any fix. Replace the 6 minutes with your own timing from a client’s second run, because the first includes setup.',
    },
    {
      kind: 'p',
      text: 'With 5 clients or fewer, the same timings come to 1.5 hours a week. At that size the checks can run by hand, and a shared sheet with the table’s 5 columns is enough.',
    },

    { kind: 'h2', id: 'overclaiming', text: 'How to show clients email marketing value without overclaiming' },
    {
      kind: 'p',
      text: 'Send the log on the same day each week, with the verdict first and the table under it.',
    },
    {
      kind: 'list',
      items: [
        '**State what it proves at the top of every log:** these flows reached a new customer’s inbox. It is not a revenue report.',
        '**Report breaks in the same format as passes,** with the 4 dates for each fix.',
        '**Describe the tab as one address’s view,** for example “Promotions, in a new Gmail address”. Another subscriber’s inbox can sort the same email differently.',
        '**Ask before you test, and keep the tests out of the client’s numbers.** You are signing up and leaving baskets on their store. Tell whoever reports their numbers which addresses you used, and delete the test profiles afterwards.',
      ],
    },
    {
      kind: 'p',
      text: 'The log hasn’t been measured against renewals and makes no promise that a client stays. It shows the client one part of the work, dated, in their own inbox.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits of checking by hand' },
    {
      kind: 'list',
      items: [
        '**Each check covers one moment.** A pass on Monday doesn’t cover Thursday’s theme update. Run it again after any launch, rebuild or flow edit.',
        '**A missing email needs a control.** If a welcome never came, check that a second new address got the client’s newsletter. If it did, sending works and the fault is in the flow. If neither got anything, look at the form or the sending first.',
        '**The log doesn’t show the cause.** Finding why an email is missing is diagnosis work inside the platform.',
        '**A single Gmail address shows one inbox’s sorting.** A new subscriber’s tab can differ from a loyal customer’s. Seed lists test where a campaign lands across a set of test mailboxes, and Suped, a deliverability vendor, calls them [a directional diagnostic](' +
          SUPED +
          ').',
        '**History starts on your first run.** A skipped week has no log, and nobody can create one afterwards.',
      ],
    },
    {
      kind: 'p',
      text: 'An AI assistant can read the test inbox. Claude’s [Gmail connector](' +
        CLAUDE_GMAIL +
        ') searches the mail you connect and cites the messages it used. It is read only and can’t send. It also can’t see images embedded in emails, so a missing product photo still has to be caught by a person. It doesn’t sign up to stores, so at 20 clients the hours still go on starting flows. At 5 clients, it can summarise the week’s logs.',
    },
    {
      kind: 'p',
      text: 'When the checks take too long by hand, [Obsession’s AI test customers](' +
        USECASE +
        ') can do the signing up with each client’s OK: a real inbox and mobile number for each store, a fresh sign up every week and after every launch you tell Obsession about, and every email kept as it arrived.',
    },
    {
      kind: 'cta',
      text: 'Obsession gives each client store its own new customer every week and returns every email as it arrived, linked and ready for the review call.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'See leak checks for retention agencies',
    },

    { kind: 'h2', id: 'start-here', text: 'First steps: the clients reviewed next' },
    {
      kind: 'p',
      text: 'Pick the 3 clients whose retainer is reviewed next. Give each a fresh inbox, run welcome, basket and checkout on Monday, and send the first log on Wednesday, when the 48 hours are up, before the client has asked for one.',
    },
    {
      kind: 'cta',
      text: 'Name 5 client stores, and Obsession’s AI test customers sign up, opt in to texts and leave a basket at each, with each client’s OK. They report, with proof, what arrived within 48 hours and what never did, and the 5 checks are free.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What should a retention agency’s client report include?',
          a: 'It should include 2 documents, kept separate: the email platform’s revenue report with its attribution window printed on it, and a weekly flow log. The log shows, for each flow, what you did as a new customer, the email that arrived with its time and tab, a status of fired, late, did not fire or not due, and the dates of any fix.',
        },
        {
          q: 'How do you show clients email marketing value?',
          a: 'Send the platform’s revenue report with its attribution window, and beside it a dated flow log showing that each flow reached a new customer.',
        },
        {
          q: 'Does a flow log prove email revenue?',
          a: 'No. It proves an email reached a new customer’s inbox, at a time you can read off it. Revenue stays in the platform’s report, under its attribution rules.',
        },
        {
          q: 'How often should I check that email flows are firing?',
          a: 'Weekly for the flows that can run on demand, and again the same day after any theme, app, discount or flow change. Post purchase fits a monthly run with an order the client agrees to, and back in stock waits until the client restocks.',
        },
        {
          q: 'Why can a live flow send nothing to a new customer?',
          a: 'Klaviyo documents 2 causes. List triggered flows let a profile enter only once by default, and Smart Sending skips a message, without rescheduling it, when the person got another inside its window, 16 hours by default for email. The flow log shows that the email is missing, and the cause is found inside the platform.',
        },
        {
          q: 'Does a flow log improve agency client retention?',
          a: 'It hasn’t been measured against renewals, so it comes with no promise about them. It settles one question, whether the email went, and the rest of the retainer is judged as before.',
        },
        {
          q: 'Can an AI assistant run these checks?',
          a: 'Partly. Claude’s Gmail connector can search and summarise the inbox you connect, with citations. It is read only, can’t see images embedded in emails and doesn’t sign up to stores, so starting the flows stays with you.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'The agency owner’s post comes from a public r/agency thread, checked live on 3 October 2026. Tarn Tea Co and its flow log are invented. The only result of our own is the September store check, shown in full on our sample output page. The time sums use placeholder minutes, so replace them with your own.',
    },
  ],

  sources: [
    { title: 'Understanding Klaviyo message attribution', publisher: 'Klaviyo Help Center', url: ATTR, date: '2026-03-10' },
    { title: 'Understanding flow analytics', publisher: 'Klaviyo Help Center', url: FLOWREP, date: '2026-10-07' },
    { title: 'Email metrics reference', publisher: 'Klaviyo Help Center', url: METRICS, date: '2025-10-03' },
    { title: 'Understanding Smart Sending', publisher: 'Klaviyo Help Center', url: SMART },
    { title: 'How to create a segment or list triggered flow', publisher: 'Klaviyo Help Center', url: LISTFLOW, date: '2026-10-08' },
    { title: 'How to build a back in stock flow', publisher: 'Klaviyo Help Center', url: BIS },
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: BENCH, date: '2026' },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'Placing test orders', publisher: 'Shopify Help Center', url: SHOPIFY_TEST },
    { title: 'How accurate are seed lists for email deliverability testing?', publisher: 'Suped', url: SUPED, date: '2026-10-16' },
    { title: 'Gmail connector', publisher: 'Claude docs', url: CLAUDE_GMAIL },
    { title: 'I kept losing clients who couldn’t see what they were paying for', publisher: 'r/agency', url: R_AGENCY, date: '2026' },
    { title: 'Sample output: the September store check', publisher: 'Obsession', url: SAMPLE, date: '2026-09' },
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
