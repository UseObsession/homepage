import type { BlogPost } from './types'

/* Content and Search Plan, 23 Oct 2026, idea 7: "Your Black Friday rival report". Readers: retention, email and CRO
   agency strategists and account managers preparing the December client review, and a brand's retention lead briefing
   leadership. Published Tue 24 Nov, the week of the sale, to be used on Tue 1 Dec. Because of that date the by hand
   method says plainly what a late sign up still catches (an address sees only what is sent after it joins) instead of
   promising the teasers.
   Thought leadership, not a review: the template is the gift, and a reader can fill every line with 3 sign ups and a
   sheet. Obsession appears once in the body, where the by hand method stops (one inbox, one moment, no history, no
   scale), and in the 2 quiet links. Read at their source on 23 Oct 2026: Klaviyo's timing guide, BFCM page and
   community recap post, TargetBay's analysis, Panoramata's pricing page, MailCharts' agency page, Gmail's search help
   and Obsession's own retention agencies and email and SMS tracking pages.
   The example table uses invented brands at .example addresses and invented numbers, and says so in its caption.
   Not used, on purpose: the library's "Inbox Watch" data (not built, so no rival figure from it), any promise that the
   page reduces churn, the 93% and 128 stores, any PilotX audit figure, and Milled (its pages returned an error).
   Buyer words (sign up, basket, pop up, report to the client); no dashes. */

const KLAVIYO_BFCM = 'https://www.klaviyo.com/bfcm'
const KLAVIYO_TIMING = 'https://www.klaviyo.com/blog/when-to-send-black-friday-emails'
const KLAVIYO_RECAP = 'https://community.klaviyo.com/product-updates-and-announcements-51/what-did-you-learn-from-bfcm-2025-share-your-biggest-win-or-surprise-18665'
const TARGETBAY = 'https://targetbay.com/blog/best-black-friday-email-ideas/'
const MAILCHARTS = 'https://mailcharts.com/built-for/agencies'
const PANORAMATA = 'https://www.panoramata.co/pricing'
const GMAIL_SEARCH = 'https://support.google.com/mail/answer/7190'
const R_AGENCY = 'https://www.reddit.com/r/agency/comments/1s4iwpc/i_kept_losing_clients_who_couldnt_see_what_they/'

export const post: BlogPost = {
  slug: 'black-friday-rival-report-template',
  title: 'The Black Friday rival email report: a one page template for clients',
  dek: 'A one page report a client reads in 2 minutes: when each rival started, how often it sent, its deepest offer and where its main button led. It includes an example filled in with invented brands and the method to collect every line by hand.',
  metaTitle: 'Black Friday email report: a one page template for clients',
  description:
    'A Black Friday email report your client reads in 2 minutes: each rival’s first send, emails a day, deepest offer and landing page. Template and example.',
  answer:
    'A Black Friday email report for a client is one page: for each of 3 rivals, the first Black Friday email you received and when, the emails and texts a day, the deepest offer and how it works, and the page the email sent people to, then what the client did differently and 3 decisions for January. Collect it by signing up to each rival with its own new address and logging every message as it arrives.',
  primaryKeyword: 'black friday email report',
  keywords: [
    'black friday email report',
    'bfcm post mortem',
    'black friday recap report',
    'competitor email analysis',
    'klaviyo bfcm report',
    'competitor email tracking',
    'see competitors emails',
    'when do brands start black friday emails',
  ],
  category: 'For agencies',
  published: '2026-10-23',
  updated: '2026-10-23',
  readingMinutes: 9,
  order: 1,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    image: {
      src: '/blog/black-friday-rival-report-template/hero-1760.webp',
      thumb: '/blog/black-friday-rival-report-template/thumb-640.webp',
      alt: 'Hands holding a printed report with a bar chart on a wooden meeting table',
      width: 1760,
      height: 990,
      credit: { name: 'RDNE Stock project', url: 'https://www.pexels.com/@rdne' },
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A Black Friday email report shows a client what 3 rival brands sent a new subscriber over Black Friday and Cyber Monday, set beside what the client sent. It is written for retention, email and CRO agency strategists preparing the December client review, and for a brand’s retention lead briefing leadership. The report fits on one side of A4 and goes to the client on Tuesday 1 December, the day after Cyber Monday.',
    },
    {
      kind: 'p',
      text: 'Your client already has its own Black Friday numbers from Shopify and its email platform. What it lacks is the outside view: which rival started first, which sent the most, which made the deepest offer and where each email’s main button led. That view comes from subscribing to each rival.',
    },
    {
      kind: 'quote',
      text: 'constantly be asking us to produce a competitive analysis based on email',
      cite: 'A senior account manager at an agency, in a testimonial on MailCharts’ agency page (vendor content)',
      href: MAILCHARTS,
    },
    {
      kind: 'p',
      text: 'No published count that we could find, as of 23 October 2026, shows when brands sent their first Black Friday email in 2025. [Klaviyo’s guide](' +
        KLAVIYO_TIMING +
        ') puts teasers 2 to 4 weeks before the day, and [TargetBay’s analysis of 5,025 emails from 1,404 brands](' +
        TARGETBAY +
        ') counts the discount wording brands used. Neither source gives first send dates for your client’s 3 rivals.',
    },
    {
      kind: 'stat',
      value: '22.7B',
      label: 'messages sent over BFCM 2025 by Klaviyo’s customers, up 25% on 2024',
      source: 'Klaviyo (vendor data), community post, 2 December 2025',
      href: KLAVIYO_RECAP,
    },
    {
      kind: 'p',
      text: 'Klaviyo’s recap reports all its senders together, so it can’t show what 3 named rivals sent.',
    },

    { kind: 'h2', id: 'the-page', text: 'What the report contains' },
    {
      kind: 'p',
      text: 'Each rival gets 1 row: the first Black Friday email you received and when, the emails and texts a day, the deepest offer with its mechanics (the code, whether it stacks with sale prices, the free shipping line) and the page the main button led to. Your client gets a row too, taken from its own send log. Below the table go 2 short sections: what the client did differently, and what to decide in January.',
    },
    {
      kind: 'table',
      caption:
        'Example only: invented brands, dates and numbers, shown to explain the layout. Each rival was joined on Wed 28 Oct with its own address. Times are UK time. Daily averages run from each brand’s first email to Mon 30 Nov.',
      cols: ['Brand', 'First Black Friday email received', 'Emails and texts a day', 'Deepest offer and mechanics', 'Where the button led'],
      rows: [
        [
          'Hartley Roast (client, hartleyroast.example)',
          'Mon 16 Nov, 08:02',
          '1.5 on average, peak of 3 on Fri 27 Nov',
          '25% off sitewide, applied at checkout, no code. Free shipping over £35.',
          'The homepage',
        ],
        [
          'Brindle & Co (brindleandco.example)',
          'Mon 2 Nov, 07:14: early access, 10% code',
          '1.4 on average, peak of 3 on Fri 27 Nov',
          '40% off with code BFRI40, not valid on sale prices. Free shipping over £30.',
          'A sale page with a countdown',
        ],
        [
          'Marrow Coffee (marrowcoffee.example)',
          'Mon 9 Nov, 16:40: a text. The email came the next day.',
          '1.9 on average, peak of 4 on Mon 30 Nov',
          'Buy 2 get 1 free, applied at checkout. Free shipping over £25.',
          'A collection of the 3 offer products',
        ],
        [
          'Tern Roasters (ternroasters.example)',
          'Thu 19 Nov, 09:01',
          '1.0 on average, peak of 2 on Mon 30 Nov (1 of them a text)',
          '30% off with code TERN30, stacks with the subscription discount. No free shipping line.',
          'A single gift set product page',
        ],
      ],
    },
    {
      kind: 'list',
      items: [
        '**What Hartley Roast did differently (example).** Its first Black Friday email went out on Mon 16 Nov, 2 weeks after Brindle & Co’s. It was the only brand with no code to type. Its button led to the homepage, while all 3 rivals sent people to a page built for the offer.',
        '**Decision 1.** Test a first teaser in the first week of November. Evidence: Brindle & Co, Mon 2 Nov, 07:14.',
        '**Decision 2.** Decide, before the creative is written, whether the code works on sale prices. Evidence: Brindle & Co’s code was not valid on sale prices, and Tern Roasters let its code stack with subscriptions.',
        '**Decision 3.** Build 1 page for the offer and send every button there. Evidence: the offer pages of Brindle & Co, Marrow Coffee and Tern Roasters.',
      ],
    },
    {
      kind: 'p',
      text: 'The report records what arrived in a new subscriber’s inbox and holds no sales data, so it can’t show whether a rival’s choice worked. Each decision is a test to run, listed with the evidence that raised it.',
    },

    { kind: 'h2', id: 'collect-by-hand', text: 'Collecting the data by hand' },
    {
      kind: 'p',
      text: 'An address receives only what a brand sends after it joins, so set up the sign ups and the sheet as early as you can.',
    },

    { kind: 'h3', id: 'sign-up', text: 'Sign up to each rival with its own address' },
    {
      kind: 'p',
      text: 'Use the public form any customer sees: the pop up, the footer or the checkout box. Create 1 new address for each rival so that every message in that inbox comes from 1 brand, and set up 1 Gmail label per rival. Add a spare phone number for the text lists. Each brand’s texts arrive separately, so 1 number can join several lists. Sign up as yourself, buy nothing and write to nobody at the brand. Terms and consent rules differ by country, so read each brand’s terms first. This is not legal advice.',
    },
    {
      kind: 'p',
      text: 'Sign up at least 4 weeks before Black Friday, which this year means by Friday 30 October, because [Klaviyo’s guide](' +
        KLAVIYO_TIMING +
        ') puts teasers 2 to 4 weeks before the day. A later sign up still catches the busiest hour: the guide cites Klaviyo’s 2024 data for the most active marketing hour of BFCM, 9 to 10 a.m. ET on Black Friday. If you join late, write the day you joined at the top of the report and head the column “first email received”.',
    },

    { kind: 'h3', id: 'log', text: 'Log every message when it arrives' },
    {
      kind: 'p',
      text: 'Keep a sheet with 6 columns: rival, time received (in your time zone, stated at the top of the sheet), email or text, subject or first line, the offer with its code and fine print, and where the button led. Save the original email as well as a screenshot, because the original carries its arrival time and is the stronger proof.',
    },
    {
      kind: 'p',
      text: 'To count a day’s messages, search 1 rival’s label with [Gmail’s from, after and before operators](' +
        GMAIL_SEARCH +
        ') and check the first and last message of each day by eye. Show the peak day in the report as well as the average.',
    },
    {
      kind: 'art',
      caption: 'One rival’s inbox, logged as it arrives: the row each message gives your report.',
      art: {
        kind: 'log',
        title: 'brindle.rival@yourdomain.example · Gmail label: Brindle & Co',
        who: 'New subscriber since Wed 28 Oct, 10:02, through the footer form',
        status: { tone: 'info', text: '5 of 14 shown' },
        rows: [
          { time: 'Wed 28 Oct', text: 'Welcome: 10% off your first order', detail: 'Code WELCOME10, 10:06', tone: 'ok' },
          { time: 'Mon 2 Nov', text: 'Early access starts Friday', detail: 'The first Black Friday email, 07:14', tone: 'ok' },
          { time: 'Thu 19 Nov', text: 'A text: 40% off is coming', detail: 'Code BFRI40, not valid on sale prices', tone: 'ok' },
          { time: 'Fri 27 Nov', text: '3 emails and 1 text', detail: 'Every button leads to the countdown sale page', tone: 'ok' },
          { time: 'Mon 30 Nov', text: 'Last chance: ends at midnight', detail: 'Free shipping over £30', tone: 'ok' },
        ],
        foot: 'The report takes 1 line from this: first email Mon 2 Nov at 07:14, 1.4 a day, 40% with BFRI40 and the sale page.',
      },
    },

    { kind: 'h3', id: 'button', text: 'Open each new offer’s button once and record where it lands' },
    {
      kind: 'p',
      text: 'Use a private window, write down the page the button reaches after its tracking redirect, and take a screenshot with the date visible. Senders see clicks, and a click can start a browse or basket email to that address, so open each new offer once and note in the sheet that you did. Record the code, whether the page says it stacks, and the free shipping line.',
    },

    { kind: 'h3', id: 'client-row', text: 'Take your client’s row from its own send log' },
    {
      kind: 'p',
      text: 'The client’s row needs no sign up. Take the first Black Friday email, the sends per day and the offer from the email platform’s campaign list, and the landing page from the email itself. Record the times in the same time zone as the rivals’ rows.',
    },

    { kind: 'h2', id: 'keep-it-fair', text: 'Keeping the report accurate' },
    {
      kind: 'p',
      text: 'The report records only what each address received. Apply these 5 rules when you write it up.',
    },
    {
      kind: 'list',
      items: [
        '**State that the report shows a new subscriber’s view.** Brands send different messages to people who have bought, clicked or lapsed, and your address has done none of these.',
        '**Count messages, offers and pages only.** The report can’t see a rival’s opens, clicks or revenue and should not estimate them.',
        '**Head the column “first email received”.** A teaser sent before you joined never reaches your address, so write the day you joined at the top of the report.',
        '**Write “none received by Mon 30 Nov” only if the address was on the list the whole time.** If a text form refused your number, write “not tested”.',
        '**Put 3 rivals in the report.** Pick the 3 the client names when it asks about competitors, and keep the rest in the sheet, linked from the report.',
      ],
    },
    {
      kind: 'p',
      text: 'For 1 client and 3 rivals joined in time, this method produces the complete report.',
    },

    { kind: 'h2', id: 'present-it', text: 'Sending the report to the client' },
    {
      kind: 'p',
      text: 'The report shows the client what you watched, what you found and what you propose, on one side of A4 that the client can check. It answers a problem [an agency owner on r/agency](' +
        R_AGENCY +
        ') described: losing clients who couldn’t see what they were paying for.',
    },
    {
      kind: 'list',
      items: [
        '**Send it on Tuesday 1 December,** the day after Cyber Monday, with the client’s own Black Friday numbers alongside it.',
        '**Open with the table and close with the decisions,** so that the client reads the evidence first and the request last.',
        '**Give each decision an owner and a date,** and add them to the January calendar. In February the client can see what came from the report.',
        '**Link the sheet from the report.** The sheet holds every message and screenshot, and the report stays at a 2 minute read.',
        '**End with the report’s limits:** it shows a new subscriber’s view from the day you joined, and it counts messages without seeing sales.',
        '**Leave out scores and verdicts.** Write statements the client can check, such as “Brindle & Co’s code is not valid on sale prices”, and leave out judgements such as “Brindle & Co won Black Friday”.',
      ],
    },
    {
      kind: 'p',
      text: 'A brand’s retention lead can send the same report to leadership before they ask about a rival, with a date and an email behind each line.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s leak checks for retention agencies include monthly reports that link every value to its evidence and compare client stores with their rivals.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'See leak checks for retention agencies',
    },

    { kind: 'h2', id: 'hours', text: 'Time needed to keep the log by hand' },
    {
      kind: 'p',
      text: 'Multiply the minutes a day you spend on 1 rival’s log by 3 rivals, by the days from sign up to Cyber Monday and by your number of clients. 10 minutes a day is a low estimate that covers opening the email, logging it and taking 1 screenshot. At 10 minutes a day over 38 days (signing up on Friday 23 October), that comes to 19 hours for 1 client and 190 hours for 10. Use your own timesheet figure and price the hours at your strategist’s day rate.',
    },

    { kind: 'h2', id: 'libraries', text: 'Email libraries for the weeks before you signed up' },
    {
      kind: 'p',
      text: 'An email library can show what a rival sent before your address existed. We make Obsession, which does some of this, so every line about another tool is taken from that tool’s own pages, checked on 23 October 2026. [Panoramata’s pricing page](' +
        PANORAMATA +
        ') lists emails, flows, SMS and ads, says it covers more than 20,000 brands, and gives its $99 plan 20 competitors and 6 months of history, with unlimited on the $179 and $399 plans. [MailCharts says](' +
        MAILCHARTS +
        ') it helps agencies collect competitor emails and share them with clients.',
    },
    {
      kind: 'p',
      text: 'If your client’s rivals are in a library, use it for the weeks before you signed up, and check the date range and the texts it holds for each rival.',
    },

    { kind: 'h2', id: 'where-it-stops', text: 'Limits of collecting by hand' },
    {
      kind: 'p',
      text: 'Each address covers 1 rival and receives only what that rival sends after the address joins, and the record is a sheet and screenshots. For 10 clients the log takes 190 hours in the weeks before the report is due.',
    },
    {
      kind: 'p',
      text: '[Obsession’s email and SMS tracking recipe](/recipes/email-sms-tracking) runs the same method with AI agents: each agent has its own inbox and texting number and logs every message, offer and code on 1 timeline with the original email from the minute it first subscribes, and the recipe has a waitlist you can join.',
    },
    {
      kind: 'cta',
      text: 'Obsession checks 5 stores free, whether prospects or clients with their OK: its AI test customers become each store’s new customer and send you what happened within 4 days, with proof.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What goes in a Black Friday email report for a client?',
          a: 'The report fits on one page. For each of 3 rivals, it gives the first Black Friday email you received and when, the emails and texts a day, the deepest offer and how it works, and the page the email sent people to. It ends with what the client did differently and 3 decisions for January, each with its evidence.',
        },
        {
          q: 'When should I send a Black Friday recap report to a client?',
          a: 'Send it on Tuesday 1 December 2026, the day after Cyber Monday (Monday 30 November), with the client’s own Black Friday numbers alongside it. The log is still fresh and the January decisions have time to be scheduled.',
        },
        {
          q: 'How do I run a competitor email analysis for Black Friday without a tool?',
          a: 'Sign up to each rival through its public form with a new address for each, plus a spare number for texts. Log the time, offer, code and button destination of every message in a sheet, save the original emails and count the messages per day. A low estimate is 10 minutes a day per rival.',
        },
        {
          q: 'Is it all right to sign up to a competitor’s emails?',
          a: 'The sign up forms are public and open to any customer. Sign up as yourself, buy nothing, write to nobody at the brand and read each brand’s terms, which differ by country. This is not legal advice.',
        },
        {
          q: 'What if I only start after the teasers?',
          a: 'Start anyway. Write the day you joined at the top of the report and head the column “first email received”. Use an email library for the weeks before you joined, and check its date range for each rival.',
        },
        {
          q: 'What is the difference between a BFCM post mortem and this report?',
          a: 'A BFCM post mortem reviews your own Black Friday and Cyber Monday: the results, what broke and what to change. This report adds the outside view, what 3 rivals sent a new subscriber, and goes alongside the post mortem.',
        },
        {
          q: 'How many rivals should the report cover?',
          a: '3 rivals fit on one page and a 2 minute read. Keep any others in the sheet, linked from the report.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Klaviyo’s [BFCM page](' +
        KLAVIYO_BFCM +
        ') gives the 2026 dates. Klaviyo’s BFCM 2025 figure comes from its Community post of 2 December 2025, and we did not open the full report. The r/agency line comes from a public thread checked on 3 October 2026. Milled’s pages returned an error, so Milled isn’t described. The brands, dates and numbers in the example table are invented. We found no published count of 2025 first send dates, though one may exist that our search did not find.',
    },
  ],

  sources: [
    { title: 'When to send Black Friday emails', publisher: 'Klaviyo (Katherine Boyarsky)', url: KLAVIYO_TIMING, date: '2026-06-26' },
    { title: 'BFCM hub: Black Friday and Cyber Monday dates and BFCM 2025 results', publisher: 'Klaviyo', url: KLAVIYO_BFCM },
    { title: 'What did you learn from BFCM 2025? Share your biggest win or surprise (BFCM 2025 recap figures)', publisher: 'Klaviyo Community', url: KLAVIYO_RECAP, date: '2025-12-02' },
    { title: 'Proven Black Friday email ideas from 1000+ brands', publisher: 'TargetBay', url: TARGETBAY, date: '2025-11-27' },
    { title: 'Built for agencies', publisher: 'MailCharts', url: MAILCHARTS },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Search operators you can use with Gmail', publisher: 'Google Gmail Help', url: GMAIL_SEARCH },
    { title: 'I kept losing clients who couldn’t see what they were paying for', publisher: 'r/agency', url: R_AGENCY, date: '2026' },
  ],

  related: [
    'recipe:email-sms-tracking',
    'recipe:competitor-tracking',
    '/use-cases/leak-checks-for-retention-agencies',
    '/agencies',
    '/sample-output',
    'black-friday-checklist-new-customer',
  ],
}
