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

const KLAVIYO_TIMING = 'https://www.klaviyo.com/blog/when-to-send-black-friday-emails'
const KLAVIYO_BFCM = 'https://www.klaviyo.com/bfcm'
const KLAVIYO_RECAP = 'https://community.klaviyo.com/product-updates-and-announcements-51/what-did-you-learn-from-bfcm-2025-share-your-biggest-win-or-surprise-18665'
const TARGETBAY = 'https://targetbay.com/blog/best-black-friday-email-ideas/'
const MAILCHARTS = 'https://mailcharts.com/built-for/agencies'
const PANORAMATA = 'https://www.panoramata.co/pricing'
const GMAIL_SEARCH = 'https://support.google.com/mail/answer/7190'
const R_AGENCY = 'https://www.reddit.com/r/agency/comments/1s4iwpc/i_kept_losing_clients_who_couldnt_see_what_they/'
const PAGE_AGENCIES = 'https://useobsession.com/use-cases/leak-checks-for-retention-agencies'
const PAGE_RECIPE = 'https://useobsession.com/recipes/email-sms-tracking'

export const post: BlogPost = {
  slug: 'black-friday-rival-report-template',
  title: 'Your Black Friday rival report: a one page template to send clients on 1 December',
  dek: 'A client reads it in 2 minutes: when each rival started, how often they sent, how deep the offer went and where the button led. Here is the page, filled in with invented brands, and how to collect every line by hand.',
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
      text: 'On 23 October 2026 we looked for a count of when brands sent their first Black Friday email in 2025. We found advice on when to start and none that counts when brands did. [Klaviyo’s guide](' +
        KLAVIYO_TIMING +
        ') puts teasers 2 to 4 weeks before the day. One open set of brand emails, [TargetBay’s 5,025 emails from 1,404 brands](' +
        TARGETBAY +
        '), counts discount wording, not first sends. Whether your client’s 3 rivals followed it, none of the guides we read says.',
    },
    {
      kind: 'p',
      text: 'That is the line your client will ask for on Tuesday 1 December, the day after Cyber Monday. A Black Friday email report, as used here, is one side of A4 on what rival brands sent a new subscriber, set beside what your client sent.',
    },
    {
      kind: 'quote',
      text: 'constantly be asking us to produce a competitive analysis based on email',
      cite: 'A senior account manager at an agency, in a testimonial on MailCharts’ agency page (vendor content)',
      href: MAILCHARTS,
    },
    {
      kind: 'p',
      text: 'Your client already has its own Black Friday numbers, because Shopify and the email platform report them. The page it doesn’t have is the outside view: who started first, who sent most, who went deepest and where each button led. A dashboard shows what was sent. Only a subscriber sees what arrived.',
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
      text: 'That is a platform wide figure, and it isn’t your client’s inbox. Klaviyo’s recap tells a brand how its senders did together. The page below tells it what 3 named rivals sent.',
    },

    { kind: 'h2', id: 'the-page', text: 'The page a client reads in 2 minutes' },
    {
      kind: 'p',
      text: 'Each rival gets one row. It holds the first Black Friday email you received and when, the emails and texts a day, the deepest offer with its mechanics (the code, whether it stacks with sale prices, the free shipping line) and the page the main button led to. Your client gets a row too, from its own send log. Under the table sit two short blocks: what the client did differently, and what to decide in January.',
    },
    {
      kind: 'table',
      caption:
        'EXAMPLE ONLY: invented brands, dates and numbers, shown to explain the layout. Rivals joined on Wed 28 Oct, one address each. Times are UK. Daily averages run from each brand’s first email to Mon 30 Nov.',
      cols: ['Brand', 'First Black Friday email received', 'Emails and texts a day', 'Deepest offer and mechanics', 'Where the button led'],
      rows: [
        [
          'Hartley Roast (client, hartleyroast.example)',
          'Mon 16 Nov, 08:02',
          '1.5 on average; peak 3 on Fri 27 Nov',
          '25% off sitewide, applied at checkout, no code. Free shipping over £35.',
          'The homepage',
        ],
        [
          'Brindle & Co (brindleandco.example)',
          'Mon 2 Nov, 07:14: early access, 10% code',
          '1.4 on average; peak 3 on Fri 27 Nov',
          '40% off with code BFRI40, not valid on sale prices. Free shipping over £30.',
          'A sale page with a countdown',
        ],
        [
          'Marrow Coffee (marrowcoffee.example)',
          'Mon 9 Nov, 16:40: a text; the email came next day',
          '1.9 on average; peak 4 on Mon 30 Nov',
          'Buy 2 get 1 free, applied at checkout. Free shipping over £25.',
          'A collection of the 3 offer products',
        ],
        [
          'Tern Roasters (ternroasters.example)',
          'Thu 19 Nov, 09:01',
          '1.0 on average; peak 2 on Mon 30 Nov, one a text',
          '30% off with code TERN30, stacks with the subscription discount. No free shipping line.',
          'One gift set product page',
        ],
      ],
    },
    {
      kind: 'list',
      items: [
        '**What Hartley Roast did differently (example).** Its first Black Friday email went out on Mon 16 Nov, two weeks after Brindle & Co’s. It was the only brand with no code to type. Its button led to the homepage, and all 3 rivals sent people to a page built for the offer.',
        '**Decision 1.** Test a first teaser in the first week of November. Receipt: Brindle & Co, Mon 2 Nov, 07:14.',
        '**Decision 2.** Choose, before the creative is written, whether the code works on sale prices. Receipt: Brindle & Co refused its code on sale prices, and Tern Roasters let its code stack with subscriptions.',
        '**Decision 3.** Build one page for the offer and send every button there. Receipt: the pages of Brindle & Co, Marrow Coffee and Tern Roasters.',
      ],
    },
    {
      kind: 'p',
      text: 'Nothing on the page says a rival’s choice worked. It shows what arrived in a new subscriber’s inbox, not what sold, so each decision is a test to run, with the receipt that raised it.',
    },

    { kind: 'h2', id: 'collect-by-hand', text: 'Collect it by hand: sign up first, then log every message as it lands' },
    {
      kind: 'p',
      text: 'An address sees only what a brand sends after it joins. Every step below follows from that.',
    },

    { kind: 'h3', id: 'sign-up', text: 'Sign up to each rival with its own address' },
    {
      kind: 'p',
      text: 'Use the public form any customer meets: the pop up, the footer, the checkout box. Make one new address for each rival, so every message in that inbox is one brand’s, and set one Gmail label per rival. Add a spare phone number for the text lists. Each brand texts separately, so one number can join several. Sign up as yourself, buy nothing and write to nobody at the brand. Terms and consent rules differ by country, so read each brand’s terms first. This isn’t legal advice.',
    },
    {
      kind: 'p',
      text: 'Sign up at least 4 weeks before Black Friday. Klaviyo’s guide puts teasers 2 to 4 weeks out, which makes Friday 30 October the date to beat this year. If you are reading this in the last week, sign up today anyway. [Klaviyo’s guide](' +
        KLAVIYO_TIMING +
        ') cites its 2024 data for the most active marketing hour of BFCM, 9 to 10 a.m. ET on Black Friday, and a new address catches that hour. The page then says the day you joined, and its column reads “first email received”, not “first email sent”.',
    },

    { kind: 'h3', id: 'log', text: 'Log every message the minute it lands' },
    {
      kind: 'p',
      text: 'Keep a sheet with 6 columns: rival, time received (in your time zone, written at the top of the sheet), email or text, subject or first line, the offer with its code and fine print, and where the button led. Save the email itself as well as a screenshot. The email, with its arrival time, settles an argument. A screenshot starts one.',
    },
    {
      kind: 'p',
      text: 'To count a day, search one rival’s label with [Gmail’s from, after and before operators](' +
        GMAIL_SEARCH +
        ') and read the first and last message of each day by eye. Name the peak day on the page as well as the average.',
    },
    {
      kind: 'art',
      caption: 'One rival’s inbox, logged as it arrives: the row each message gives your page.',
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
        foot: 'The page takes 1 line from this: first email Mon 2 Nov, 07:14; 1.4 a day; 40% with BFRI40; the sale page.',
      },
    },

    { kind: 'h3', id: 'button', text: 'Open each new offer’s button once and record where it lands' },
    {
      kind: 'p',
      text: 'Use a private window, write down the page the button reaches after its tracking redirect, and take a screenshot with the date showing. Senders see clicks, and a click can start a browse or basket email to that address, so open each new offer once and note in the sheet that you did. Record the code, whether the page says it stacks, and the free shipping line.',
    },

    { kind: 'h3', id: 'client-row', text: 'Pull your client’s row from its own send log' },
    {
      kind: 'p',
      text: 'The client’s row needs no sign up. Take the first Black Friday email, the sends per day and the offer from the email platform’s campaign list, and the landing page from the email itself. Write the times in the same time zone as the rivals’.',
    },

    { kind: 'h2', id: 'hours', text: 'What the log costs in hours' },
    {
      kind: 'p',
      text: 'Take the minutes a day you spend on one rival’s log, times 3 rivals, times the days from sign up to Cyber Monday, times your clients. 10 minutes a day is a deliberately low figure: it covers opening the email, logging it and one screenshot. At 10 minutes and 38 days (a sign up today, Friday 23 October) that is 19 hours for one client and 190 hours for ten. Put your own timesheet number in and price the hours at your strategist’s day rate.',
    },

    { kind: 'h2', id: 'keep-it-fair', text: 'Keep it fair: one new address shows one subscriber’s view' },
    {
      kind: 'list',
      items: [
        '**A new subscriber is not a loyal customer.** Brands send different things to people who have bought, clicked or lapsed. Your address has done none of that, so the page says it shows a new subscriber’s view.',
        '**Arrived is not sold.** The page counts messages, offers and pages. It can’t see a rival’s opens, clicks or revenue, and it shouldn’t estimate them.',
        '**First received is not first sent.** A teaser sent before you joined is invisible to you. Write the day you joined at the top, and head the column “first email received”.',
        '**A blank is not a zero.** Write “none received by Mon 30 Nov” only if the address was on the list that whole time. If a text form refused your number, write “not tested”.',
        '**3 rivals make a page, and more make a sheet.** Pick the 3 the client names when it asks about competitors, and keep the rest in the log, linked from the page.',
      ],
    },
    {
      kind: 'p',
      text: 'For one client and 3 rivals you joined in time, that is the whole job. No tool will make the page better.',
    },

    { kind: 'h2', id: 'libraries', text: 'A library shows the weeks before you joined' },
    {
      kind: 'p',
      text: 'A library of emails can show what a rival sent before your address existed. [Panoramata’s pricing page](' +
        PANORAMATA +
        '), checked on 23 October 2026, lists emails, flows, SMS and ads, says it covers more than 20,000 brands, and gives its $99 plan 20 competitors and 6 months of history, with unlimited on the $179 and $399 plans. [MailCharts says](' +
        MAILCHARTS +
        ') it helps agencies collect competitor emails and share them with clients. If your client’s rivals are in a library, use it for the weeks before you joined, and check the date range and the texts it holds for each rival.',
    },

    { kind: 'h2', id: 'where-it-stops', text: 'Where the by hand method stops' },
    {
      kind: 'p',
      text: 'It stops at the edge of one inbox. An address sees only what is sent after it joins, one rival at a time, with a sheet and screenshots as proof. For ten clients the log is 190 hours in the weeks before the page is due.',
    },
    {
      kind: 'p',
      text: '[Obsession’s email and SMS tracking recipe](/recipes/email-sms-tracking) is the same method run by AI agents: each has its own inbox and texting number, logs every message, offer and code on 1 timeline with the original email, and its history starts the minute an agent first subscribes. You can join its waitlist.',
    },
    {
      kind: 'cta',
      text: 'Monthly reports that link every value to its evidence, and client stores compared with rivals, are part of leak checks for retention agencies.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'See leak checks for retention agencies',
    },

    { kind: 'h2', id: 'present-it', text: 'Present it so the client can see what the retainer does' },
    {
      kind: 'quote',
      text: 'I kept losing clients who couldn’t see what they were paying for',
      cite: 'An agency owner on r/agency, 2026',
      href: R_AGENCY,
    },
    {
      kind: 'p',
      text: 'A report doesn’t keep a client. It shows what you watched, what you found and what you propose, on one side of A4 where the client can check it.',
    },
    {
      kind: 'list',
      items: [
        '**Send it on Tuesday 1 December,** the day after Cyber Monday, with the client’s own Black Friday numbers beside it, not instead of them.',
        '**Open with the table and close with the decisions.** The client reads the evidence first and the ask last.',
        '**Give each decision an owner and a date,** and put them in the January calendar. In February the client can see what came from the page.',
        '**Link the sheet instead of pasting it.** The log holds every message and screenshot. The page holds what the client needs in 2 minutes.',
        '**End with what the page can’t see:** a new subscriber’s view, the day you joined, messages counted, sales not seen.',
        '**Leave out scores and verdicts.** “Brindle & Co’s code is not valid on sale prices” can be checked. “Brindle & Co won Black Friday” can’t.',
      ],
    },
    {
      kind: 'p',
      text: 'In house, the same page goes to leadership before they ask about a rival. The retention lead who sends it first answers with a date and an email.',
    },
    {
      kind: 'p',
      text: 'The page is due on Tuesday 1 December. Three sign ups and one sheet, started today, give it its first row before Black Friday morning.',
    },
    {
      kind: 'cta',
      text: 'Name 5 stores, prospects or clients with their OK. Obsession’s AI test customers become each one’s new customer and send you what happened within 4 days, with proof.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What goes in a Black Friday email report for a client?',
          a: 'One page. For each of 3 rivals: the first Black Friday email you received and when, the emails and texts a day, the deepest offer and how it works, and the page the email sent people to. Then what the client did differently and 3 decisions for January, each with its receipt.',
        },
        {
          q: 'When should I send a Black Friday recap report to a client?',
          a: 'On Tuesday 1 December 2026, the day after Cyber Monday (Monday 30 November), with the client’s own Black Friday numbers beside it. The log is fresh and the January decisions have time to be scheduled.',
        },
        {
          q: 'How do I run a competitor email analysis for Black Friday without a tool?',
          a: 'Sign up to each rival through its public form with a new address each, plus a spare number for texts. Log the time, offer, code and button destination of every message in a sheet, save the emails themselves and count the messages per day. At a low estimate that is 10 minutes a day per rival.',
        },
        {
          q: 'Is it all right to sign up to a competitor’s emails?',
          a: 'The sign up forms are public and open to any customer. Sign up as yourself, buy nothing, write to nobody at the brand and read each brand’s terms, which differ by country. This isn’t legal advice.',
        },
        {
          q: 'What if I only start after the teasers?',
          a: 'Start anyway. Write the day you joined at the top of the page and head the column “first email received”. Use a library of emails for the weeks before you joined, and check its date range for each rival.',
        },
        {
          q: 'What is the difference between a BFCM post mortem and this report?',
          a: 'A BFCM post mortem reviews your own Black Friday and Cyber Monday: the results, what broke and what to change. This report adds the outside view, what 3 rivals sent a new subscriber, and sits beside it.',
        },
        {
          q: 'How many rivals should the report cover?',
          a: '3 fit one page and a 2 minute read. Keep any others in the sheet, linked from the page.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every source was opened on 23 October 2026: Klaviyo’s guide to when to send Black Friday emails (26 June 2026), its BFCM page for the 2026 dates and the Klaviyo Community post that carries its BFCM 2025 recap (2 December 2025; the figure is Klaviyo’s own and we did not open the full report), TargetBay’s Black Friday email analysis (last updated 27 November 2025), Panoramata’s pricing page, MailCharts’ agency page, Gmail’s search help, and Obsession’s own pages for retention agencies and for email and SMS tracking. The r/agency line comes from a public thread checked on 3 October 2026. Milled’s pages returned an error, so it isn’t described. The brands, dates and numbers in the example table are invented. We found no published count of 2025 first send dates; that is a search result, not proof that none exists.',
    },
  ],

  sources: [
    { title: 'When to send Black Friday emails', publisher: 'Klaviyo (Katherine Boyarsky)', url: KLAVIYO_TIMING, date: '2026-06-26' },
    { title: 'BFCM hub: Black Friday and Cyber Monday dates and BFCM 2025 results', publisher: 'Klaviyo', url: KLAVIYO_BFCM, date: 'Checked 23 Oct 2026' },
    { title: 'What did you learn from BFCM 2025? Share your biggest win or surprise (BFCM 2025 recap figures)', publisher: 'Klaviyo Community', url: KLAVIYO_RECAP, date: '2025-12-02' },
    { title: 'Proven Black Friday email ideas from 1000+ brands', publisher: 'TargetBay', url: TARGETBAY, date: '2025-11-27' },
    { title: 'Built for agencies', publisher: 'MailCharts', url: MAILCHARTS, date: 'Checked 23 Oct 2026' },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA, date: 'Checked 23 Oct 2026' },
    { title: 'Search operators you can use with Gmail', publisher: 'Google Gmail Help', url: GMAIL_SEARCH, date: 'Checked 23 Oct 2026' },
    { title: 'I kept losing clients who couldn’t see what they were paying for', publisher: 'r/agency', url: R_AGENCY, date: '2026' },
    { title: 'Be the new customer of every store you pitch, and every store you keep', publisher: 'Obsession', url: PAGE_AGENCIES, date: 'Checked 23 Oct 2026' },
    { title: 'Email and SMS tracking', publisher: 'Obsession', url: PAGE_RECIPE, date: 'Checked 23 Oct 2026' },
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
