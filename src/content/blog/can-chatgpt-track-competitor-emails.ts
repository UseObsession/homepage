import type { BlogPost } from './types'

/* Draft for the Content and Search Plan (23 Oct 2026), published 29 Oct: can ChatGPT or Claude watch your competitors’
   emails. Readers: brand CRM and retention leads, and the retention agencies whose clients keep asking what rivals send,
   who asked an assistant first. Why now: rivals’ Black Friday teasers start in late October, Black Friday is Fri 27 Nov
   and Cyber Monday Mon 30 Nov, and a spare inbox only holds mail from the day it subscribes.
   Thought leadership, not a review: the by hand method (a spare Gmail address for each rival, a sheet, an assistant
   reading that inbox through its Gmail connector) is given in full and free, with the line that 1 to 3 rivals need
   nothing more. The five assistants are described job by job from their own help pages, each read at its source on
   23 Oct 2026 (OpenAI pages through a text proxy, because OpenAI blocks direct fetches). Where a page is silent the
   table says "the pages don’t say", never "can’t". Obsession appears in the body in the disclosure and in 1 sentence
   where the by hand method stops (the email and SMS tracking recipe, with the developers page linked in the same
   sentence; its quoted line was cut in the 23 Oct copy pass), plus the 2 CTAs. Every claim about it is
   worded as those pages word it (history from the first sign up). Since 28 Oct it is presented as live (STANDARD.md).
   Left out on purpose: archive brand counts and prices (Milled blocked automated fetches; Panoramata’s own page gives
   two different counts, and the library’s 18k+ and 2,500 brands figures did not hold up), any Gemini in Gmail or
   Copilot Gmail claim that only a search summary supported, the 93% and 128 stores figures, any PilotX audit figure.
   Not legal advice and no legal claims. Buyer words (sign up, welcome email, Promotions tab); no dashes. */

const OPENAI_TASKS = 'https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt'
const OPENAI_CLOUD = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'
const OPENAI_USE = 'https://help.openai.com/en/articles/12084614-connector-use-cases-and-prompts'
const CLAUDE_GMAIL = 'https://claude.com/docs/connectors/google/gmail'
const CLAUDE_CHROME = 'https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome'
const CLAUDE_TASKS = 'https://code.claude.com/docs/en/routines'
const CLAUDE_DESKTOP = 'https://code.claude.com/docs/en/desktop-scheduled-tasks'
const GEMINI_TASKS = 'https://support.google.com/gemini/answer/17094507'
const GEMINI_SCHEDULE = 'https://support.google.com/gemini/answer/16316416?hl=en&co=GENIE.Platform%3DDesktop'
const GEMINI_BROWSE = 'https://support.google.com/chrome/answer/16821166?hl=en'
const PPLX_GMAIL = 'https://www.perplexity.ai/help-center/en/articles/12168040-connecting-perplexity-with-gmail-and-google-calendar'
const PPLX_COMET = 'https://www.perplexity.ai/help-center/comet/en/articles/11734688-assistant-panel'
const PPLX_COMPUTER = 'https://www.perplexity.ai/help-center/en/articles/11521526-perplexity-tasks'
const PPLX_AUTOMATIONS = 'https://www.perplexity.ai/hub/blog/computer-adds-automations-for-ongoing-work'
const COPILOT = 'https://support.microsoft.com/en-us/topic/copilot-actions-in-edge-5ed5e17e-42df-40a3-984a-20420eba86e2'
const GMAIL_SEARCH = 'https://support.google.com/mail/answer/7190?hl=en'
const KLAVIYO_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const CLAY = 'https://www.clay.com/blog/claygent-experiment-speed-to-lead'
const PRACTICAL = 'https://www.practicalecommerce.com/how-to-monitor-competitors-email-marketing'
const CHRISTNER = 'https://brianchristner.io/how-to-build-a-competitor-analysis-tool-using-chatgpt/'
const MILLED = 'https://milled.com/'
const MAILCHARTS = 'https://www.mailcharts.com'
const MAILCHARTS_AGENCIES = 'https://mailcharts.com/built-for/agencies'
const PANORAMATA = 'https://www.panoramata.co'
const AGENTMAIL = 'https://docs.agentmail.to/welcome'

export const post: BlogPost = {
  slug: 'can-chatgpt-track-competitor-emails',
  title: 'Can ChatGPT or Claude track your competitors’ emails?',
  dek: 'For 1 to 3 competitors, a spare Gmail inbox, a sheet and an AI assistant show what each one has sent since you signed up. The help pages of 5 assistants set the limits: one inbox, capped schedules, no older mail and nothing on keeping each email as evidence.',
  metaTitle: 'Can ChatGPT track competitor emails? A method and its limits',
  description:
    'ChatGPT can track competitor emails that reach a Gmail inbox you connect. A method for 1 to 3 competitors, and what 5 assistants’ help pages say.',
  answer:
    'Yes, for 1 to 3 competitors: ChatGPT, Claude, Gemini and Perplexity can read and compare the competitor emails that reach a Gmail inbox you connect. Each works as one person in one inbox, caps scheduled work and can’t read mail from before you signed up, and none of their help pages describes keeping each email as evidence. Obsession’s AI customers each sign up to a competitor as a real customer, with their own inbox, and keep every email that competitor sends as proof.',
  primaryKeyword: 'can chatgpt track competitor emails',
  keywords: [
    'can chatgpt track competitor emails',
    'chatgpt competitor analysis',
    'how to see what competitors email their customers',
    'competitor email tracking',
    'competitor email monitoring',
    'competitor email monitoring free',
    'view competitor emails',
    'milled alternative',
  ],
  category: 'Watch other companies',
  published: '2026-10-23',
  updated: '2026-10-28',
  readingMinutes: 8,
  order: 3,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'inbox',
    workspace: 'company',
    art: {
      kind: 'chat',
      title: 'An assistant, connected to the spare inbox',
      turns: [
        { from: 'customer', text: 'What did Wrenfield email its new subscribers in the last 30 days?' },
        { from: 'bot', name: 'Assistant', text: 'I can search the inbox you connected. It subscribed to Wrenfield on 28 October, so I can see 3 emails since then: a welcome with 10% off, a restock note and an early access teaser.' },
      ],
      check: { tone: 'fail', label: 'Before 28 October', text: 'Nothing to read. An assistant answers from the inbox it can see, and that inbox only began the day it signed up.' },
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'If you run CRM or retention for a brand, or for an agency’s clients, you can track 1 to 3 competitors’ emails with free tools. Give each competitor a spare Gmail inbox, log the mail in a sheet and connect ChatGPT, Claude, Gemini or Perplexity to that inbox. The assistant can then tell you what each competitor has sent since the day you signed up.',
    },
    {
      kind: 'p',
      text: 'The help pages of ChatGPT, Claude, Gemini, Perplexity and Copilot, checked on 23 October 2026, show where that method stops. Each assistant works as one person, in an inbox you connect or a browser you own, and none can read mail from before you signed up. The 4 assistants whose pages describe scheduled work all cap it. None of the pages says the assistant keeps each email as it arrived or reports which Gmail tab it landed in.',
    },
    {
      kind: 'stat',
      value: '3 to 15',
      label: 'active scheduled tasks in ChatGPT, by plan: 3 on Free and Go, 5 on Plus, 10 on Business and Edu, 15 on Pro and Enterprise',
      source: 'OpenAI Help Center, read 23 Oct 2026 (undated page)',
      href: OPENAI_TASKS,
    },

    { kind: 'h2', id: 'by-hand', text: 'How to see what competitors email their customers, by hand' },
    {
      kind: 'p',
      text: 'You need a spare Gmail inbox for each competitor, a sheet and any assistant with a Gmail connection. [Practical Ecommerce described a version of this method in December 2024](' +
        PRACTICAL +
        '): sign up from a Gmail address, forward the mail to a parser and have ChatGPT pull out the data. [Brian Christner’s version](' +
        CHRISTNER +
        ') saves each email from a dedicated Gmail account into a sheet, where ChatGPT adds a summary and a category.',
    },
    {
      kind: 'stat',
      value: '41%',
      label: 'of email revenue comes from automated flows, which are 5.3% of sends, across 183,000+ Klaviyo customers',
      source: 'Klaviyo benchmarks, 2026',
      href: KLAVIYO_BENCH,
    },
    {
      kind: 'p',
      text: 'The figure covers Klaviyo’s customers as a whole. Because automated flows carry that share of revenue, start with the first week of a new subscriber’s mail, when the welcome series arrives.',
    },

    { kind: 'h3', id: 'spare-inbox', text: '1. Open one spare Gmail inbox for each competitor' },
    {
      kind: 'p',
      text: 'Open a new Gmail account for each competitor and use it for nothing else. Each competitor then sees one new subscriber, each welcome series comes from one sender, and an assistant connected to the inbox can’t confuse two competitors. One shared inbox works for 3 competitors if you label the mail by sender. Keep your own mail out of it: Christner set up an isolated Gmail account so his personal mail never reached ChatGPT.',
    },

    { kind: 'h3', id: 'sign-up', text: '2. Sign up the way a customer does' },
    {
      kind: 'p',
      text: 'Use the pop up or the footer form on each competitor’s site, on your phone first and then on a laptop. Write down the date, the time and the offer on screen. If the first email asks you to confirm, click the link from the spare inbox the same day, because a competitor’s welcome series may not start until you do.',
    },

    { kind: 'h3', id: 'sheet', text: '3. Log every email in one sheet' },
    {
      kind: 'p',
      text: 'Give each email a row with these columns: **competitor**, **received** (date and time), **subject**, **offer and code**, **Gmail tab** and **notes**. Fill it in within a day. After a week the sheet shows 3 things: how long each competitor took to send a first email, how many welcome emails arrived in 7 days, and the day the offer changed.',
    },

    { kind: 'h3', id: 'gmail-tab', text: '4. Record the Gmail tab yourself' },
    {
      kind: 'p',
      text: 'Gmail shows the tab each email landed in, and [Gmail’s search help](' +
        GMAIL_SEARCH +
        ') documents **category:promotions**, so one search lists a competitor’s mail by tab. Log the tab as what that one inbox saw. A spare inbox has opened and clicked nothing, so its tab shows one new subscriber’s view, which may differ from the tab a competitor’s loyal customers see.',
    },

    { kind: 'h3', id: 'assistant', text: '5. Connect an assistant to read and compare' },
    {
      kind: 'p',
      text: 'Connect only the spare inbox. [Claude’s Gmail connector](' +
        CLAUDE_GMAIL +
        ') searches the one Google account you connect, can’t send or change mail, and links each answer to the emails it used. ChatGPT and Perplexity also connect to Gmail, and [OpenAI’s example prompts](' +
        OPENAI_USE +
        ') include a summary of unread emails grouped by sender. These prompts fill the sheet:',
    },
    {
      kind: 'list',
      items: [
        '“List every email in this inbox since the day I signed up, newest first, with date, time, subject, offer and code.”',
        '“Compare the first 7 days of mail from rivala.example and rivalb.example: emails sent, first send after sign up, deepest discount.”',
        '“Mark every email whose offer differs from the one before it.”',
      ],
    },
    {
      kind: 'p',
      text: 'Check each count against the inbox before you use it. A Gmail search such as **from:news@rivala.example after:2026/10/23** gives the exact number, and Claude’s links open the email behind each line. The Claude connector can’t see images embedded in emails, so read any email whose offer is in an image yourself and add it to the sheet.',
    },

    { kind: 'h3', id: 'weekly', text: '6. Schedule a digest and check it against the inbox weekly' },
    {
      kind: 'p',
      text: 'ChatGPT runs recurring tasks [up to once an hour on paid plans](' +
        OPENAI_TASKS +
        '), and Gemini’s [scheduled actions](' +
        GEMINI_SCHEDULE +
        ') are built for daily summaries, so the comparison can arrive as a scheduled digest. Once a week, compare the digest with the sheet and the inbox. Where the digest and the inbox disagree, use the inbox.',
    },

    { kind: 'h2', id: 'what-each-does', text: 'ChatGPT competitor analysis for emails: what 5 assistants can do', compare: true },
    {
      kind: 'p',
      text: 'All 5 assistants can fill in a sign up form in a browser, and 4 of them can read a connected Gmail inbox. None of their help pages describes an inbox or phone number of the assistant’s own.',
    },
    {
      kind: 'table',
      compare: true,
      caption: '5 assistants, job by job, from their own help pages, read 23 October 2026',
      cols: ['Job', 'ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Copilot'],
      rows: [
        [
          'Read and summarise a connected Gmail inbox',
          'Yes\nGmail is in its summary examples',
          'Yes\nRead only, with links to the emails used',
          'Yes\nDaily digests can include your emails',
          'Yes, once Gmail is connected',
          'The page doesn’t say',
        ],
        [
          'Fill in a sign up form for you',
          'Yes\nPauses for you at a login',
          'Yes, in your own Chrome',
          'Yes\nYou take over to create an account',
          'Yes\nComet acts on websites',
          'Yes, in Edge\nNo autofill or saved passwords',
        ],
        [
          'Own inbox and phone number for each competitor',
          'The pages don’t describe one',
          'The pages don’t describe one',
          'The pages don’t describe one',
          'The pages don’t describe one',
          'The page doesn’t describe one',
        ],
        [
          'Run on a schedule',
          'Hourly at the fastest\n3 to 15 active tasks',
          'Cloud tasks hourly at the fastest\n100 runs an hour',
          '10 active schedules\nTasks not offered in the UK or EEA',
          'Hourly at the fastest\n15 tasks per Computer conversation',
          'The page doesn’t say',
        ],
        [
          'Say which Gmail tab an email landed in',
          'The pages don’t say',
          'The pages don’t say',
          'The pages don’t say',
          'The pages don’t say',
          'The page doesn’t say',
        ],
        [
          'Keep the email itself as evidence',
          'The pages don’t say',
          'Links back to each email it used',
          'The pages don’t say',
          'The pages don’t say',
          'Session screenshots, kept up to 30 days',
        ],
        [
          'Answer from before you signed up',
          'Only mail already in the inbox',
          'Only mail already in the inbox',
          'Only mail already in the inbox',
          'Only mail already in the inbox',
          'Only mail already in the inbox',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Copilot’s page covers browser actions in Edge, so its column has fewer answers. “The pages don’t say” means the pages we read were silent on that job, and the assistant may still do it. The last row is the same for all 5 because an assistant reads only the mail that reached the inbox.',
    },
    {
      kind: 'p',
      text: 'We make Obsession, so every line about another tool is taken from that tool’s own pages, checked on 23 October 2026. Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof.',
    },

    { kind: 'h3', id: 'good-at', text: 'What each assistant offers for this job' },
    {
      kind: 'list',
      items: [
        '**ChatGPT** summarises a connected Gmail inbox, can start a task when a [new Gmail message arrives](' +
          OPENAI_TASKS +
          '), and its [cloud browser pauses for you at a sign in](' +
          OPENAI_CLOUD +
          ').',
        '**Claude** searches your inbox and cites the emails it used. Its [cloud scheduled tasks](' +
          CLAUDE_TASKS +
          ') keep running with the laptop closed, and [Claude in Chrome](' +
          CLAUDE_CHROME +
          ') repeats browser tasks daily, weekly, monthly or annually.',
        '**Gemini** fills in forms in Chrome through [auto browse](' +
          GEMINI_BROWSE +
          ') and hands account creation to you, and its [tasks](' +
          GEMINI_TASKS +
          ') ask before they submit a form or buy.',
        '**Perplexity** queries Gmail once connected and [acts on websites in Comet](' +
          PPLX_COMET +
          '). On 29 September 2026, Perplexity added [event triggered automations with memory of earlier runs](' +
          PPLX_AUTOMATIONS +
          ') to its Computer tool.',
        '**Copilot** does short browser tasks in Edge that you [watch and can take over at any time](' +
          COPILOT +
          ').',
      ],
    },

    { kind: 'h2', id: 'where-they-stop', text: 'Where the assistants stop' },
    {
      kind: 'p',
      text: 'None of the help pages describes an assistant with an inbox or phone number of its own, so each one reads only the inbox you connect. The pages show 4 limits:',
    },
    {
      kind: 'list',
      items: [
        '**One person, one account.** Claude’s connector reaches only the Google account you connected. [Gemini’s tasks](' +
          GEMINI_TASKS +
          ') need a personal Google Account, and [Perplexity’s Gmail connection](' +
          PPLX_GMAIL +
          ') is personal too. A team that wants shared evidence copies it out by hand.',
        '**Caps on scheduled work.** ChatGPT allows 3 to 15 active tasks. Gemini allows 10 active schedules and 15 tasks running at once, and [auto browse allows 20 requests a day on Google AI Pro](' +
          GEMINI_BROWSE +
          '). [Perplexity’s Computer](' +
          PPLX_COMPUTER +
          ') allows 15 per conversation and spends credits on every run. [Claude allows 100 scheduled runs an hour](' +
          CLAUDE_TASKS +
          ') per account, and its [Desktop tasks](' +
          CLAUDE_DESKTOP +
          ') run only while the app is open and the computer is awake. ChatGPT’s [cloud browser](' +
          OPENAI_CLOUD +
          ') runs only on paid plans, excluding Free and Go.',
        '**No older mail.** The assistant reads the mail in the inbox, so anything a competitor sent before you signed up, or sent to anyone else, isn’t there.',
        '**No kept copy.** None of the pages describes keeping the original email, its arrival time or its sender check, or reporting the Gmail tab. Copilot keeps screenshots of its browser sessions for up to 30 days.',
      ],
    },
    {
      kind: 'p',
      text: 'To show a client or a manager what a competitor sent, you need the original email with its arrival time and sender check, and a summary or a screenshot includes neither.',
    },

    { kind: 'h2', id: 'archives', text: 'What email archives such as Milled, MailCharts and Panoramata show' },
    {
      kind: 'p',
      text: 'Archives hold mail they have already collected, so you get history from day one. [Milled](' +
        MILLED +
        ') calls itself a search engine for email newsletters and ecommerce sales. [MailCharts](' +
        MAILCHARTS +
        ') says it covers email and SMS and collects ecommerce email journeys, and [its agencies page](' +
        MAILCHARTS_AGENCIES +
        ') quotes a senior account manager at DEFINITION 6, in an undated testimonial, on requests to produce a competitive analysis based on email.',
    },
    {
      kind: 'p',
      text: '[Panoramata](' +
        PANORAMATA +
        ') says it monitors competitors’ emails and SMS or WhatsApp messages, shows welcome and abandoned checkout flows, and keeps ad and landing page history. It also publishes comparison pages of these tools, which are vendor content.',
    },
    {
      kind: 'p',
      text: 'An archive suits [a look at many brands you haven’t signed up to](/blog/competitor-email-tracking-tools). It shows what the vendor collected for the brands it covers. You can’t choose the shopper, the basket or the day, and Panoramata’s page doesn’t say how its emails are collected.',
    },

    { kind: 'h2', id: 'twenty-competitors', text: 'Competitor email tracking beyond 3 competitors' },
    {
      kind: 'p',
      text: 'Work out the hours with your own minutes: competitors × minutes a week on each competitor’s mail × 4 ÷ 60 = hours a month. At 3 competitors and 20 minutes each, a low estimate, that is 4 hours a month, and at 20 competitors it is nearly 27.',
    },
    {
      kind: 'p',
      text: 'At 20 competitors, the job needs [an inbox and a phone number for every brand](/blog/ai-customers), running for weeks, with every message kept as it arrived. [Developers can build the parts](/blog/ai-customers-for-developers). [AgentMail](' +
        AGENTMAIL +
        ') gives each agent a mailbox, with a free tier of 3 inboxes and 100 emails a day. In [Clay’s benchmark of 22 September 2026](' +
        CLAY +
        '), agents submitted 6,346 forms across 100 countries and logged replies by email and phone. Clay calls it the first in a series and lists its own caveats. It is a single snapshot of replies to demo forms.',
    },
    {
      kind: 'p',
      text: 'For 20 competitors, use Obsession. Its [email and SMS tracking](/recipes/email-sms-tracking) gives each competitor its own AI customer, with history that starts from the minute it first signs up, and its [developers page](/developers) covers the same gap for teams building their own AI agents. For 1 to 3 competitors, a spare inbox and an assistant are enough.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s email and SMS tracking gives each competitor an AI agent with its own inbox and texting number, and keeps every message as it arrived.',
      to: '/recipes/email-sms-tracking',
      label: 'See email and SMS tracking',
    },

    { kind: 'h2', id: 'for-agencies', text: 'For agencies: running the same test on a client’s store' },
    {
      kind: 'p',
      text: 'Run the same method on your client’s store, with the client’s OK: a spare inbox, a sign up, a basket left behind, and 48 hours of watching the inbox. A competitor’s welcome series can then be read next to your client’s own. The client’s dashboard reports which emails were sent, and the spare inbox shows which of them reached a new customer.',
    },
    {
      kind: 'p',
      text: 'Code freezes begin about 20 November. Run the test before then so there is time to fix what it finds.',
    },
    {
      kind: 'cta',
      text: 'Obsession checks 5 client stores free, with each owner’s OK. Its AI customers sign up, leave a basket and stop at checkout, then report which emails arrived within 48 hours and which never came, with screenshots.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'start-now', text: 'When to sign up before Black Friday' },
    {
      kind: 'p',
      text: 'Open the spare inboxes and sign up this week. Competitors’ teasers start in late October, Black Friday is Friday 27 November and Cyber Monday is Monday 30 November. If you sign up by Friday 30 October, the inbox holds 4 weeks of a competitor’s mail by Black Friday. If you sign up on Black Friday, it holds only the sale emails, and no assistant can retrieve the earlier ones. The [Black Friday competitor email report](/blog/black-friday-competitor-email-report-template) turns the sheet into a one page report for a client.',
    },

    { kind: 'h2', id: 'questions', text: 'Frequently asked questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Can ChatGPT track competitor emails?',
          a: 'ChatGPT can summarise and compare the competitor emails that reach a Gmail inbox you connect. It can’t read mail from before you signed up, and its help pages don’t describe keeping each email as evidence.',
        },
        {
          q: 'Can Claude monitor my competitors’ emails?',
          a: 'Claude’s Gmail connector can search the competitor emails in the one Google account you connect, read only, and links each answer to the emails it used. It can’t see images embedded in emails or read mail that never reached that inbox.',
        },
        {
          q: 'How do I see what competitors email their customers?',
          a: 'Sign up to each competitor from a spare Gmail inbox, log every email in a sheet with its time, offer and Gmail tab, and have an assistant summarise the inbox. That suits 1 to 3 competitors and needs no paid tool.',
        },
        {
          q: 'Can ChatGPT show me what a competitor emailed before I signed up?',
          a: 'No. It reads the mail in the inbox you connect, and that inbox holds only what arrived after you signed up. An archive that collected the mail earlier, or an agent that signed up earlier, can hold older mail.',
        },
        {
          q: 'Can an AI assistant tell me which Gmail tab a competitor’s email landed in?',
          a: 'None of the 5 assistants’ help pages says it reports the tab. Gmail shows the tab, and a Gmail search for category:promotions lists the mail in that tab. A spare inbox shows the tab one new subscriber sees.',
        },
        {
          q: 'How many competitors can I follow by hand?',
          a: 'Use this sum: competitors × minutes a week on each × 4 ÷ 60 = hours a month. At 3 competitors and 20 minutes each it is 4 hours a month, and at 20 competitors it is nearly 27.',
        },
        {
          q: 'Do email archives like Milled replace a spare inbox?',
          a: 'They cover part of the job. An archive gives you history from day one for the brands it covers, and you can’t choose the shopper, the basket or the day.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'OpenAI blocks direct fetches, so its pages were read through a text proxy. Most help pages show no date, so the sources list gives none for them. Milled blocked automated fetches, so only its homepage title is used. No archive counts or prices are quoted, because Panoramata’s page gives 2 different counts and MailCharts’ page gives none. Where a page was silent, the table says so, and the assistant may still do that job. Nothing here is legal advice.',
    },
  ],

  sources: [
    { title: 'Scheduled tasks in ChatGPT', publisher: 'OpenAI Help Center', url: OPENAI_TASKS },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: OPENAI_CLOUD },
    { title: 'Plugin use cases and prompts', publisher: 'OpenAI Help Center', url: OPENAI_USE },
    { title: 'Gmail connector', publisher: 'Claude docs', url: CLAUDE_GMAIL },
    { title: 'Get started with Claude in Chrome', publisher: 'Claude Help Center', url: CLAUDE_CHROME, date: '2026-08-26' },
    { title: 'Automate work with scheduled tasks', publisher: 'Claude Code docs', url: CLAUDE_TASKS },
    { title: 'Schedule recurring tasks in Claude Code Desktop', publisher: 'Claude Code docs', url: CLAUDE_DESKTOP },
    { title: 'Manage your tasks and workflows in Gemini Apps', publisher: 'Gemini Apps Help', url: GEMINI_TASKS },
    { title: 'Schedule actions in Gemini Apps', publisher: 'Gemini Apps Help', url: GEMINI_SCHEDULE },
    { title: 'Ask Gemini in Chrome to complete tasks for you with auto browse', publisher: 'Chrome Help', url: GEMINI_BROWSE },
    { title: 'Connecting Perplexity with Gmail and Google Calendar', publisher: 'Perplexity Help Center', url: PPLX_GMAIL },
    { title: 'Assistant panel', publisher: 'Comet Browser Help Center', url: PPLX_COMET },
    { title: 'Scheduled tasks in Computer', publisher: 'Perplexity Help Center', url: PPLX_COMPUTER },
    { title: 'Computer adds Automations for ongoing work', publisher: 'Perplexity', url: PPLX_AUTOMATIONS, date: '2026-09-29' },
    { title: 'Copilot Actions in Edge (Browse with Copilot)', publisher: 'Microsoft Support', url: COPILOT },
    { title: 'Refine searches in Gmail', publisher: 'Gmail Help', url: GMAIL_SEARCH },
    { title: '2026 email marketing benchmarks', publisher: 'Klaviyo', url: KLAVIYO_BENCH },
    { title: 'How to monitor competitors’ email marketing', publisher: 'Practical Ecommerce (Armando Roggio)', url: PRACTICAL, date: '2024-12-15' },
    { title: 'How to build a competitor analysis tool using ChatGPT', publisher: 'Brian Christner', url: CHRISTNER, date: '2026-02-17' },
    { title: 'Claygent experiment: speed to lead', publisher: 'Clay', url: CLAY, date: '2026-09-22' },
    { title: 'AgentMail docs', publisher: 'AgentMail', url: AGENTMAIL },
    { title: 'Milled: a search engine for email newsletters and ecommerce sales', publisher: 'Milled', url: MILLED },
    { title: 'MailCharts', publisher: 'MailCharts', url: MAILCHARTS },
    { title: 'MailCharts for agencies', publisher: 'MailCharts', url: MAILCHARTS_AGENCIES },
    { title: 'Panoramata', publisher: 'Panoramata', url: PANORAMATA },
  ],

  related: [
    'recipe:email-sms-tracking',
    'recipe:competitor-tracking',
    'recipe:ad-tracking',
    '/developers',
    '/use-cases/leak-checks-for-retention-agencies',
    'black-friday-checklist-new-customer',
  ],
}
