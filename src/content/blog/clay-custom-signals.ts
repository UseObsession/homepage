import type { BlogPost } from './types'

/* Revenue team guides, spec 6 (_research/seo/revenue-teams-11nov/WRITER_BRIEF.md and PLAN.md, 11 Nov 2026): Clay custom
   signals for GTM engineers. Primary "clay custom signals"; also "clay signals", "clay enrichment", "gtm engineer",
   "clay api enrichment", "custom signals clay" (Google autocomplete, US and UK, 11 Nov 2026, demand.json, GTM engineers).
   Page 1 for the neighbours is definitions and hiring (Clay, ZoomInfo, Norwest, Reddit); Exa's GTM use case page sells
   company data, CRM enrichment and monitors of public signals.
   Reader: GTM engineers and RevOps at B2B software companies, first fit vendors whose product touches what their own
   accounts' customers see (email and SMS, loyalty, checkout and payments, help desk and AI support, messaging, identity
   and onboarding). Persona key revops. Serves /developers; links /sales, /recipes/account-watch and the Clay use case,
   which owns the Clay prospect research workflow (docs/SEARCH.md §2), so the workflow itself is linked, never retaught.
   The H1 carries "Clay custom signals" word for word (the brief's later section: the primary phrase in the metaTitle,
   the H1, the first sentence, one H2 and one FAQ), so the spec's "Clay signals" H1 gains "custom".
   Every Clay line is from Clay's own docs, blog and signals page, read 11 Nov 2026. Exa is held to its own GTM use case,
   Websets and pricing pages, read the same day. The platform behind an email is said only as the live site says it
   (/sales: "Their emails have come from a new platform since 2 October"). Field
   names are the reader's columns, built from the facts the site describes (company, kind, sentence, seen_at, receipt on
   /developers; "No verdict" on /recipes/prospect-intelligence). Every account and figure in the pictures and tables is
   invented at a .example address; the workload sums are example inputs. No dashes. */

const CLAY_GTM = 'https://www.clay.com/blog/gtm-engineering'
const CLAY_LAUNCH = 'https://www.clay.com/blog/signals'
const CLAY_SIGNALS_DOC = 'https://university.clay.com/docs/signals'
const CLAY_CUSTOM_DOC = 'https://university.clay.com/docs/custom-signals'
const CLAY_SIGNALS_PAGE = 'https://www.clay.com/signals'
const EXA_GTM = 'https://exa.ai/use-cases/gtm'
const EXA_PRICING = 'https://exa.ai/pricing'
const CLAY_HTTP = 'https://university.clay.com/docs/http-api-integration-overview'
const CLAY_WEBHOOK = 'https://university.clay.com/docs/webhook-integration-guide'

export const post: BlogPost = {
  slug: 'clay-custom-signals',
  title: 'Clay custom signals for GTM engineers: a buying signal your competitor’s team can’t get',
  dek: 'How Clay’s signals, custom signals and API enrichment work, from Clay’s own docs as of 11 November 2026, with a field table and routing rules to copy. Then the buying signal a competitor’s GTM team can’t build from public pages: what each account sends its own customers, dated.',
  metaTitle: 'Clay custom signals for GTM teams: what each account sends',
  description:
    'Clay custom signals from Clay’s own docs, with a field table and routing rules to copy, plus a buying signal from what each account sends its customers.',
  answer:
    'Clay custom signals watch a data source for every row of a Clay table, daily to quarterly, and add a row when the result changes, turning any enrichment into a trigger. Most run on public sources, such as job posts, funding news and website changes, that any team with the same tools can watch. Obsession adds what each account sends its own customers, such as whether its welcome email arrives, as dated facts with the email or screenshot on the same Clay rows.',
  primaryKeyword: 'clay custom signals',
  keywords: [
    'clay custom signals',
    'clay signals',
    'custom signals clay',
    'clay enrichment',
    'clay api enrichment',
    'gtm engineer',
  ],
  category: 'Behind the login',
  order: 16,
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 15,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'larkfield.example in a Clay table',
      who: 'One account’s facts, each one a row with its date',
      rows: [
        { time: 'Mon 2 Nov 07:00', text: 'Domain added from the Clay table', detail: 'Covered since September, history returned', tone: 'info' },
        { time: 'Mon 2 Nov 09:04', text: 'Welcome email arrived', detail: '38 seconds after sign-up, sender checked', tone: 'ok' },
        { time: 'Tue 3 Nov 02:57', text: 'Basket left before payment', detail: 'Window set to 48 hours', tone: 'info' },
        { time: 'Thu 5 Nov 02:57', text: 'No basket reminder in 48 hours', detail: 'Cart reminder live: no', tone: 'fail' },
        { time: 'Mon 9 Nov 17:23', text: 'Emails now sent by another platform', detail: 'Sender checked', tone: 'info' },
        { time: 'Mon 9 Nov 17:24', text: 'fact.created posted to Clay', detail: 'Account owner alerted in Slack', tone: 'ok' },
      ],
      foot: 'Example. Larkfield is invented. The platform change on 9 Nov is the signal; every row links its email or screenshot.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Clay custom signals are scheduled checks that watch a data source for every company or person in a Clay table and add a row when the result changes. GTM engineers use them to turn any enrichment into a trigger, such as a Slack alert, a CRM update or a step in a sequence. A GTM engineer builds a sales team’s data, automation and routing, and Clay’s own blog describes the role as people who [“build revenue engines using AI and automation”](' +
        CLAY_GTM +
        ').',
    },
    {
      kind: 'p',
      text: 'When Clay launched the feature in May 2025, it told teams to [“Track custom signals that your competitors aren’t looking for”](' +
        CLAY_LAUNCH +
        '). A signal is as rare as the source behind it. Job posts, funding news and website changes are public, so a competitor’s GTM team with the same tools can watch the same accounts for the same change on the same day.',
    },
    {
      kind: 'p',
      text: 'One kind of buying signal sits in no public source: what each account sends its own customers. That covers whether its welcome email arrives, whether its basket reminder still fires after a site change, which platform sends its emails and when its last offer went out. Those facts reach a customer’s inbox and phone, never a page a crawler can read. They matter most to vendors whose product touches those messages. That means email and SMS platforms, loyalty apps, checkout and payments, help desk and AI support, messaging, and identity and onboarding tools.',
    },

    { kind: 'h2', id: 'how-clay-custom-signals-work', text: 'How Clay custom signals work' },
    {
      kind: 'p',
      text: 'As of 11 November 2026, [Clay’s Signals docs](' +
        CLAY_SIGNALS_DOC +
        ') describe signals as “automated tracking systems that notify you of important changes related to your contacts and target companies”. Every signal starts from a table of the companies or people to watch, with a column holding the identifier the signal reads. News and fundraising reads a company domain, new hires and job postings read a domain or a company profile address, and job changes and promotions read a person’s profile address. The pre-built signals cover:',
    },
    {
      kind: 'list',
      items: [
        '**Topic intent:** companies and people researching the topics you choose.',
        '**New hires, promotions and job changes:** people starting, moving up or leaving.',
        '**Job postings:** the roles a target company opens.',
        '**News and fundraising:** significant events at companies you watch.',
        '**Web intent:** the companies visiting your own website, on Growth and Enterprise plans.',
      ],
    },
    {
      kind: 'p',
      text: 'A signal runs Quarterly, Monthly, Biweekly, Weekly or Daily, and a new one starts at Monthly. It can’t be set to a specific time. Signals run on Clay credits, charged for each result returned or each record checked depending on the signal, and Clay shows the estimated cost for the chosen cadence before a signal starts. The docs list them on every paid plan except Flex.',
    },

    { kind: 'h3', id: 'custom-signals', text: 'Custom signals in Clay' },
    {
      kind: 'p',
      text: '[Clay’s custom signals page](' +
        CLAY_CUSTOM_DOC +
        ') says they “let you monitor data sources for specific changes on a regular schedule”. It names websites and social media, technology adoption, hiring profiles and new feature rollouts as sources. It also covers compliance changes, such as a company adding GDPR to its trust center, RSS feeds for web mentions and scheduled runs of Clay’s AI tool. Setting one up takes 6 steps:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Add it:** in a workbook, + Add and then Custom signal; in a table, Actions, Import and then Custom signal.',
        '**Pick a source to monitor,** with Clay’s estimated cost per result beside each one.',
        '**Configure the source.** Some need your own account, and others use one Clay provides.',
        '**Set how often it runs.**',
        '**Add enrichments if you want them,** such as a Slack notification or a Salesforce update that fires when the signal runs.',
        '**Save it.**',
      ],
    },

    { kind: 'h3', id: 'enrichment-to-signal', text: 'Turning any Clay enrichment into a signal' },
    {
      kind: 'p',
      text: 'For a change no pre-built signal covers, the same page walks through a pattern of 4 tables:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**The enrichment table:** the companies, the enrichment to watch, and Re-run columns on a schedule turned on. Send table data copies each run to a second table, with Update existing rows on re-run turned off, so every run adds a new row.',
        '**The run history table:** one row per company per run, with its Created At date shown.',
        '**The lookup table:** Lookup Multiple Rows in Other Table pulls each company’s runs, and a Use AI step compares the 2 most recent and returns what’s new, plus true or false. For structured or numerical data, the docs suggest a formula instead.',
        '**The signal table:** rows arrive only when the comparison finds a change, and Created At becomes the time the signal was detected.',
      ],
    },
    {
      kind: 'p',
      text: 'A custom signal is a comparison between 2 snapshots of the same enrichment. Scheduled columns run every 24 hours from the moment they were first scheduled, so the docs advise a short gap between the 2 scheduled runs. The signal fires no faster than its schedule, and it sees no more than its enrichment can. If the enrichment reads a public page, the signal is a change to that page, and any team that builds the same 4 tables gets it too.',
    },

    { kind: 'h2', id: 'public-sources', text: 'Where most teams’ Clay signals come from' },
    {
      kind: 'p',
      text: 'Most sales teams use similar data, from contact databases and intent tools to Exa’s search of the public web. [Clay’s signals page](' +
        CLAY_SIGNALS_PAGE +
        ') lists dozens of kinds, from job changes, funding and tech stack changes to product usage, website changes, web intent, news, and LinkedIn, YouTube and Reddit activity. It says any of Clay’s 200+ enrichments, or a query to its AI agent, can become one.',
    },
    {
      kind: 'p',
      text: '[Exa’s use case page for GTM teams](' +
        EXA_GTM +
        ') offers “One company data API for finding accounts, enriching your CRM with cited sources, and tracking signals that win deals”. Its Monitors run searches on a schedule, as often as hourly, for new job postings, funding rounds, leadership changes and product launches. The page lists Clay as an integration through custom API columns. Search starts at [$4 per 1,000 Lite searches, with $10 of free credit each month](' +
        EXA_PRICING +
        ').',
    },
    {
      kind: 'p',
      text: 'These are strong tools for finding accounts and reading what each one publishes, and a team that runs them gets real value from them. Their reach is also their limit for uniqueness: a public source is open to everyone, so a signal built on it reaches every competitor that builds the same check. [Obsession vs Exa](/compare/obsession-vs-exa) sets out what each one holds.',
    },

    { kind: 'h2', id: 'customer-signals', text: 'Buying signals from what each account sends its customers' },
    {
      kind: 'p',
      text: 'Every company that sells online sends its customers a stream of messages after they sign up. That stream includes a [welcome series](/glossary/welcome-series), reminders after a basket or a trial day, texts after an opt-in, offers and codes, and replies from support. None of it is published. Each message reaches one inbox or one phone and changes with the customer’s country, plan and day of trial. A crawler with no account sees none of it, and the history has to be kept the day each message arrives, which makes it [point-in-time data](/glossary/point-in-time-data) nobody can collect later.',
    },
    {
      kind: 'p',
      text: 'For a vendor whose product sits in that stream, these are the buying signals that count, because each one is a dated fact about the problem the product fixes:',
    },
    {
      kind: 'list',
      items: [
        '**Welcome email stopped or slowed:** the last one arrived on Monday, or it now takes 7 hours. It matters to email and SMS platforms and onboarding tools.',
        '**Basket reminder gone quiet:** an [abandoned cart email](/glossary/abandoned-cart-email) that fired before a site change and doesn’t after it. It matters to email, SMS and cart recovery vendors.',
        '**No texts after an opt-in:** the account took a phone number and consent, then sent nothing. It matters to SMS and messaging vendors.',
        '**A new sending platform:** the platform behind each email, with its sender checked, and the week that changes. The week an account’s emails start coming from a new platform is the week an email platform’s rep calls.',
        '**A new offer or a code that fails:** what the account emailed and when, and whether its code worked at checkout. It matters to loyalty, checkout and payments vendors.',
        '**Support slower than its own promise:** for example, a 31-hour reply where the help page promises 24. It matters to help desk and AI support vendors.',
        '**A sign-up form that breaks on a phone:** the step where it fails, with a screenshot. It matters to identity and onboarding tools.',
      ],
    },
    {
      kind: 'p',
      text: '[Buying signals examples](/blog/buying-signals-examples) sets these beside the familiar ones, with how an SDR opens on each, and [sales trigger events](/blog/sales-trigger-events) gives the play to run for each change.',
    },

    { kind: 'h2', id: 'api-enrichment', text: 'Clay API enrichment: a domain in, dated facts out' },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. MCP, the Model Context Protocol, is the standard way AI agents such as Claude call tools. Exa and search APIs like it give agents the public web, what any visitor can read. Obsession gives them what a company shows only to its customers, dated and kept for as long as anyone follows the company, as a column beside the ones a team already runs.',
    },
    {
      kind: 'p',
      text: 'Obsession’s agents have run 1,500 sign-ups, baskets and checkouts at real companies, and counting. Facts reach a Clay table 3 ways, each described on [the developer page](/developers):',
    },
    {
      kind: 'list',
      items: [
        '**Pull, row by row.** [Clay’s HTTP API enrichment](' +
          CLAY_HTTP +
          ') adds API data to existing rows, one row at a time, by GET, POST, PUT or DELETE. Point it at Obsession’s facts call with the row’s domain. Keep the key in an HTTP API (Headers) account, which Clay encrypts at the workspace level, and use Field paths to return to pick the fields you map. A conditional run skips rows without a domain.',
        '**Push, as each fact lands.** Obsession’s notify call posts each new fact as JSON to a webhook, an address that receives data the moment it is sent. A Clay table started from Monitor webhook gives that address. [Clay’s webhook docs](' +
          CLAY_WEBHOOK +
          ') cap a webhook source at 50,000 submissions, even after rows are deleted, unless an Enterprise plan turns on Auto-delete.',
        '**Ask, before you build.** Claude, ChatGPT, Codex and Cursor call the same 5 verbs over [MCP](/glossary/model-context-protocol): lookup, facts, evidence, index and notify. A GTM engineer can ask what an account sent its customers this month before wiring a column.',
      ],
    },
    {
      kind: 'p',
      text: 'Each fact carries the same fields whichever way it arrives, as the webhook example on the developer page shows:',
    },
    {
      kind: 'list',
      items: [
        '**company:** the domain, such as larkfield.example.',
        '**kind:** what the fact is about, such as an email or an offer.',
        '**sentence:** the fact in one plain sentence.',
        '**seen_at:** when it was seen, as a timestamp with its time zone.',
        '**receipt:** the journey it came from, such as welcome or basket, the [DKIM](/glossary/dkim) result and a link to the raw email or page as captured. DKIM is a signature checked on arrival to prove which company sent an email.',
      ],
    },
    {
      kind: 'p',
      text: 'The whole outbound flow on those columns, from a filtered view to the first line of the email, is [the Clay prospect research workflow](/use-cases/prospect-intelligence-with-clay). The signal itself rests on which fields a team keeps and what it does when one changes.',
    },

    { kind: 'h2', id: 'fields', text: 'The fields to map, with data quality rules' },
    {
      kind: 'p',
      text: 'A signal needs a stable field to compare, so turn each fact into a column with one type and one rule. A starting set for vendors whose product touches their accounts’ customers:',
    },
    {
      kind: 'table',
      caption: 'Signal columns for a Clay table. Each value links the email or screenshot behind it; field names are yours to choose',
      cols: ['Field', 'Type', 'Comes from', 'Changes when', 'Matters to'],
      rows: [
        ['Welcome sent', 'Yes, no or no verdict', 'The welcome email', 'It stops or slows', 'Email, SMS, onboarding'],
        ['Cart reminder live', 'Yes, no or no verdict', 'A basket left before payment', 'It stops after a site change', 'Email, SMS, cart recovery'],
        ['Texts after opt-in', 'Yes, no or no verdict', 'The text opt-in', 'No text in the window', 'SMS, messaging'],
        ['Sending platform', 'Text', 'The email, sender checked', 'Another platform sends', 'Email and SMS platforms'],
        ['Last offer date', 'Date', 'Offer emails and codes', 'A new offer lands', 'Loyalty, checkout, payments'],
        ['Code works', 'Yes, no or no verdict', 'The code taken to checkout', 'It’s rejected', 'Checkout, payments, loyalty'],
        ['Support reply', 'Hours', 'One support question', 'It passes the promise', 'Help desk, AI support'],
        ['Sign-up works', 'Yes, no or no verdict', 'The sign-up form, phone and desktop', 'A step fails', 'Identity, onboarding'],
        ['Last checked', 'Date', 'The latest run', 'Every run', 'Data quality, every field'],
      ],
    },
    {
      kind: 'list',
      items: [
        '**3 values, never 2.** A yes or no counts once the sign-up is confirmed, the spam folder is checked and the full window has passed. Until then the field reads No verdict, the same rule [Prospect intelligence](/recipes/prospect-intelligence) uses before it calls a gap.',
        '**Date the fact, never the run.** Write seen_at into the field’s date column, so a re-run doesn’t make an old fact look new.',
        '**Never overwrite with a blank.** When an HTTP API column writes on to your CRM, turn on Remove empty fields from request, which Clay’s docs say prevents overwriting existing data with blank values.',
        '**Keep the receipt beside the value.** A rep trusts a field they can open, and the link settles a disagreement in one click.',
      ],
    },
    {
      kind: 'p',
      text: 'RevOps (revenue operations, the team that owns the CRM and its data) can take the same columns into the CRM. [CRM data enrichment fields](/blog/crm-data-enrichment-fields) gives the full field spec, with update rules and the scores each field feeds.',
    },

    { kind: 'h2', id: 'by-vendor', text: 'Worked examples by kind of vendor' },
    {
      kind: 'p',
      text: 'The same table serves 6 kinds of vendor, each watching the field that maps to what it sells:',
    },
    {
      kind: 'table',
      caption: 'Example accounts and facts, all invented. Dates are November 2026',
      cols: ['Vendor', 'Account and fact', 'Field that changes', 'Route'],
      rows: [
        ['Email and SMS platform', 'harrowgate.example: emails sent by a new platform from 9 Nov', 'Sending platform', 'Account owner, that week'],
        ['Loyalty app', 'pellmoor.example: first member offer emailed 4 Nov', 'Last offer date', 'SDR sequence'],
        ['Checkout and payments', 'ostwick.example: welcome code rejected at checkout, 6 Nov', 'Code works', 'Account executive'],
        ['Help desk and AI support', 'quillon.example: 31-hour reply, help page promises 24', 'Support reply', 'SDR sequence'],
        ['Messaging', 'brindlemere.example: opted in 2 Nov, no text by 16 Nov', 'Texts after opt-in', 'Outbound list'],
        ['Identity and onboarding', 'larchfold.example: sign-up fails on a phone at step 2', 'Sign-up works', 'Account executive'],
      ],
    },
    {
      kind: 'art',
      caption: 'Example. One Clay table, 5 invented accounts. Each cell is a dated fact with its email or screenshot, and a red row is a change to route.',
      art: {
        kind: 'report',
        title: 'Signal columns · example table',
        period: 'Accounts added from a Clay view, November 2026',
        cols: ['Account', 'Welcome sent', 'Cart reminder', 'Platform'],
        rows: [
          { name: 'harrowgate.example', cells: ['Yes, 4 minutes', 'Live', 'New from 9 Nov'], tone: 'fail' },
          { name: 'larkfield.example', cells: ['Yes, 38 seconds', 'None in 48 hours', 'New from 9 Nov'], tone: 'fail' },
          { name: 'pellmoor.example', cells: ['Stopped 2 Nov', 'Live', 'Same since Sep'], tone: 'fail' },
          { name: 'ostwick.example', cells: ['Yes, 7 hours', 'Live', 'Same since Oct'], tone: 'late' },
          { name: 'quillon.example', cells: ['Yes, 2 minutes', 'Live', 'Same since Sep'], tone: 'ok' },
        ],
        notes: [
          'No verdict appears until the window closes, so a gap is never called early.',
          'Every account here is invented.',
        ],
      },
    },

    { kind: 'h2', id: 'routing', text: 'Routing a change to the right owner' },
    {
      kind: 'p',
      text: 'With a pull column, the change is found the way Clay’s 4-table pattern finds it: compare today’s value with the last one. For a structured field such as Welcome sent or Sending platform, a formula does it, as Clay’s docs advise, and a run condition sends the row on only when the value differs. With the webhook, each fact.created event is already the change, with its date, so the run history and lookup tables aren’t needed.',
    },
    {
      kind: 'table',
      caption: 'Example routing rules. Each change carries its date and the email or screenshot behind it',
      cols: ['Change', 'Who cares', 'Route to', 'Then'],
      rows: [
        ['Emails start coming from a new platform', 'Email and SMS platforms', 'Account owner in Slack', 'Call that week'],
        ['Welcome email stops at a customer', 'The platform that sends it', 'Customer success', 'Check before the renewal'],
        ['Basket reminder goes quiet', 'Cart recovery, email, SMS', 'SDR sequence', 'Open on the date it stopped'],
        ['Code rejected at checkout', 'Checkout, payments, loyalty', 'Account executive', 'Send the screenshot'],
        ['Support passes its own promise', 'Help desk, AI support', 'SDR sequence', 'Open on the reply time'],
        ['The gap closes', 'Every vendor', 'The sequence', 'Pause it'],
      ],
    },
    {
      kind: 'p',
      text: 'The last rule protects reply rates and trust. When an account fixes the gap, the field changes back, the run condition pauses the sequence, and no rep opens on a problem that’s gone. [Churn risk indicators](/blog/churn-risk-indicators) covers the customer success side of the second rule, and [cold email first line examples](/blog/cold-email-first-line-examples) shows how an SDR writes the opener once a row arrives.',
    },
    {
      kind: 'p',
      text: 'For accounts a team already sells to, [Account watch](/recipes/account-watch) runs the same check every morning. Each change lands on the account’s record in the CRM, with public news and job posts beside it.',
    },

    { kind: 'h2', id: 'by-hand', text: 'Building the signal by hand' },
    {
      kind: 'p',
      text: 'A team can collect these facts itself. For each account:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Give it its own inbox and phone number,** used for that account alone, so every message traces back to one sign-up.',
        '**Sign up the way a customer would:** the newsletter, a text opt-in, a basket left before payment, or a trial if the account sells software.',
        '**Log every message with the time it arrived,** and keep the original email beside the screenshot.',
        '**Read the sending platform from the headers.** The DKIM signature’s d= tag names the domain that signed the email, often the platform’s, and the Received lines show the servers it passed through.',
        '**Wait out the window** before calling anything missing: 48 hours for a basket reminder, 14 days for texts, or whatever your rule says.',
        '**Write the result to the row,** with the date and a link to the evidence.',
      ],
    },
    {
      kind: 'p',
      text: 'The work grows with the list. At an example 10 minutes per account per week to check inboxes, log messages and update rows:',
    },
    {
      kind: 'table',
      caption: 'Example inputs: 10 minutes per account per week; a month is 52 weeks ÷ 12',
      cols: ['Accounts watched', 'Hours a week', 'Hours a month'],
      rows: [
        ['5,000', '833', '3,611'],
        ['1,000', '167', '722'],
        ['300', '50', '217'],
      ],
    },
    {
      kind: 'p',
      text: 'The hours are the smaller cost. Sign-ups break when a site changes, a phone number gets flagged, and a missing email can be proved missing only by the inbox it should have reached. By hand suits a few dozen key accounts. Across a few hundred, the column needs a source that stays signed up at every account and dates each message as it lands.',
    },

    { kind: 'h2', id: 'options', text: 'Options for account signals in Clay', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to feed account signals into a Clay table. Facts checked 11 November 2026 on each provider’s own pages',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing: firmographics alone', 'No set-up', 'Nothing extra', 'No timing and no reason to write', 'Lists that rarely change'],
        ['By hand: an inbox and phone per account', 'Exact on the accounts that matter most', 'Your team’s hours', 'Hours grow with every account', 'A few key accounts'],
        [
          'Clay pre-built signals: job changes, new hires, job postings, news, intent',
          'Ready on any table, Daily to Quarterly',
          'Clay credits per result or record checked',
          'Daily at the fastest; what each source can see',
          'People and company moves',
        ],
        [
          'Clay custom signals: any enrichment, compared run to run',
          'Any source Clay can read becomes a trigger',
          'Clay credits, cost shown before it runs',
          'No faster than its schedule, no deeper than its source',
          'Changes to pages, posts and filings',
        ],
        [
          'Exa: Monitors, Websets, Search',
          'Lists from a description, monitors as often as hourly',
          'Search from $4 per 1,000\n$10 free credit a month',
          'Public web and partner data, as its pages describe',
          'Finding accounts and what they publish',
        ],
        [
          'Obsession (ours): [Account watch](/recipes/account-watch), [Prospect intelligence](/recipes/prospect-intelligence), [Email and SMS tracking](/recipes/email-sms-tracking)',
          'What each account sends its own customers, dated with the email or screenshot',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Every step short of paying, at any company your team names',
          'Signals about the problem your product fixes',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Use Obsession for the buying signals that live in customers’ inboxes and phones. It returns what each account sends its own customers as dated fields in the same Clay table, for every account a team names. Use Clay’s pre-built signals for people and company moves, custom signals for changes to pages, posts and filings, and Exa for finding accounts and reading what they publish. They sit side by side on one table, and [the sales page](/sales) shows the same facts behind briefs and battlecards.',
    },

    { kind: 'h2', id: 'start', text: 'How GTM engineers start' },
    {
      kind: 'p',
      text: 'Start with the accounts your reps care about most, map 3 or 4 of the fields, and route one change to one owner. Open [the sample data](/sample-output) to see one real store’s record in every format it comes in, including the columns a sheet or Clay receives. Early access includes API and MCP access, lookups of every company already covered, and up to 5 companies added for you. From there you can see it in conversion rates from the fields your reps use, in data quality and in the adoption of every column your team builds. [Sales intelligence from behind the login](/use-cases/sales-intelligence-behind-the-login) shows the same view for every role on a revenue team, with an example for each.',
    },
    {
      kind: 'cta',
      text: 'Dated columns in Clay for what each account sends its own customers: welcome emails, reminders, texts, offers and the platform behind them.',
      to: '/#join',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about Clay custom signals' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are Clay custom signals?',
          a: 'Clay custom signals monitor a data source for each row of a Clay table on a schedule you set, and add a row when the result changes. Any enrichment can become one: Clay’s docs describe 4 tables that save each run, compare the 2 most recent and keep only the changes, each dated when it was detected.',
        },
        {
          q: 'How do I create custom signals in Clay?',
          a: 'In a workbook, click + Add and choose Custom signal, or in a table use Actions, Import and Custom signal. Pick a source, which shows its estimated cost per result, and configure it. Then set how often it runs, add any enrichments such as a Slack notification, and save.',
        },
        {
          q: 'How often do Clay signals run?',
          a: 'Clay’s signals run Quarterly, Monthly, Biweekly, Weekly or Daily, and a new signal starts at Monthly. Scheduled columns re-run every 24 hours from when they were first scheduled, and neither can be set to a specific time, according to Clay’s docs as of 11 November 2026.',
        },
        {
          q: 'How does Clay API enrichment work?',
          a: 'Clay’s HTTP API enrichment calls an API once for each existing row and writes the fields you choose back to that row. It supports GET, POST, PUT and DELETE. Keys can sit in an HTTP API (Headers) account that Clay encrypts at the workspace level, and a conditional run skips rows that lack the input.',
        },
        {
          q: 'What is a GTM engineer?',
          a: 'A GTM engineer builds the data, automation and routing behind a company’s sales and marketing: the tables, enrichments, signals and rules that send each account to the right owner. Clay’s blog describes GTM engineers as people who build revenue engines using AI and automation.',
        },
        {
          q: 'Which buying signals can a competitor’s team not copy?',
          a: 'Signals from sources your team alone holds, such as your own product usage, and what each account sends its own customers. Those messages reach a signed-up customer’s inbox and phone, so a team needs an account at every company to see them. Obsession keeps those facts for any company a team names, each dated with the email or screenshot.',
          link: { label: 'Account watch', to: '/recipes/account-watch' },
        },
        {
          q: 'How do I see which platform sends a company’s emails?',
          a: 'Sign up to its emails and read the headers of what arrives. The DKIM signature’s d= tag names the domain that signed the email, often the sending platform’s. Obsession records the platform behind each email it keeps, and the week that platform changes.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'Facts checked 11 November 2026',
      text: 'Every line about Clay and Exa comes from their own docs, blog posts and pricing pages on 11 November 2026, with prices in US dollars as listed that day. The workload figures are example inputs. Every account, date and fact in the pictures and tables is invented.',
    },
  ],

  sources: [
    { title: 'GTM Engineering: What It Is and How to Hire in 2026', publisher: 'Clay blog', url: CLAY_GTM, date: '2026-04-21' },
    { title: 'Announcing custom signals at Clay', publisher: 'Clay blog', url: CLAY_LAUNCH, date: '2025-05-22' },
    { title: 'Signals in Clay', publisher: 'Clay University docs', url: CLAY_SIGNALS_DOC },
    { title: 'Custom Signals', publisher: 'Clay University docs', url: CLAY_CUSTOM_DOC },
    { title: 'Custom Signals', publisher: 'Clay', url: CLAY_SIGNALS_PAGE },
    { title: 'Company Data API and CRM Enrichment for GTM Teams', publisher: 'Exa', url: EXA_GTM },
    { title: 'Pricing', publisher: 'Exa', url: EXA_PRICING },
    { title: 'HTTP API', publisher: 'Clay University docs', url: CLAY_HTTP },
    { title: 'Webhooks in Clay', publisher: 'Clay University docs', url: CLAY_WEBHOOK },
  ],

  related: [
    'buying-signals-examples',
    'crm-data-enrichment-fields',
    'sales-trigger-events',
    'churn-risk-indicators',
    'recipe:account-watch',
    'recipe:prospect-intelligence',
    '/use-cases/prospect-intelligence-with-clay',
    '/developers',
  ],
}
