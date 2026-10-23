import type { BlogPost } from './types'

/* Draft for the Content and Search Plan (23 Oct 2026), published 29 Oct: can ChatGPT or Claude watch your competitors’
   emails. Readers: brand CRM and retention leads, and the retention agencies whose clients keep asking what rivals send,
   who asked an assistant first. Why now: rivals’ Black Friday teasers start in late October, Black Friday is Fri 27 Nov
   and Cyber Monday Mon 30 Nov, and a spare inbox only holds mail from the day it subscribes.
   Thought leadership, not a review: the by hand method (a spare Gmail address for each rival, a sheet, an assistant
   reading that inbox through its Gmail connector) is given in full and free, with the line that 1 to 3 rivals need
   nothing more. The five assistants are described job by job from their own help pages, each read at its source on
   23 Oct 2026 (OpenAI pages through a text proxy, because OpenAI blocks direct fetches). Where a page is silent the
   table says "the pages don’t say", never "can’t". Obsession appears twice in the body, where the by hand method
   stops (the email and SMS tracking recipe, and the developers page line), plus the 2 CTAs; every claim about it is
   worded as those pages word it (waitlist, history from the first sign up).
   Left out on purpose: archive brand counts and prices (Milled blocked automated fetches; Panoramata’s own page gives
   two different counts, and the library’s 18k+ and 2,500 brands figures did not hold up), any Gemini in Gmail or
   Copilot Gmail claim that only a search summary supported, the 93% and 128 stores figures, any PilotX audit figure.
   Not legal advice and no legal claims. Buyer words (sign up, welcome email, Promotions tab); no dashes. */

const OPENAI_TASKS = 'https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt'
const OPENAI_AGENT = 'https://help.openai.com/en/articles/11752874-chatgpt-agent'
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
  title: 'Can ChatGPT or Claude watch your competitors’ emails?',
  dek: 'A spare Gmail address, a sheet and an assistant answer what 1 to 3 rivals sent you since you subscribed. Five assistants’ own help pages show where that stops: one inbox, capped schedules, no past, no proof.',
  metaTitle: 'Can ChatGPT track competitor emails? What it can’t do alone',
  description:
    'Can ChatGPT track competitor emails? A spare Gmail method for 1 to 3 rivals, and what ChatGPT, Claude, Gemini, Perplexity and Copilot can and can’t do.',
  answer:
    'ChatGPT, Claude and the other assistants can read and compare the rival emails that reach a Gmail inbox you connect, which is enough for 1 to 3 rivals. They run as one person in one inbox, cap scheduled work, can’t read mail from before you subscribed, and none of the help pages read covers keeping each email as evidence.',
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
  updated: '2026-10-23',
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
      text: 'We read the help pages of ChatGPT, Claude, Gemini, Perplexity and Copilot on 23 October 2026 against one job: following what your rivals email new subscribers. Each can read an inbox you connect or work in a browser you own. None of the pages says it keeps each email as it arrived, or tells you which Gmail tab it landed in.',
    },
    {
      kind: 'p',
      text: 'A client or a boss keeps asking what a rival just sent, and you asked an assistant first because the job looks like reading and summarising. For 1 to 3 rivals it is. A spare Gmail address for each rival, a sheet and an assistant that reads that inbox will tell you what each one has sent since the day you subscribed. You need nothing else for that.',
    },
    {
      kind: 'p',
      text: 'The limits repeat on every page: one person in one inbox, scheduled work with caps, no mail from before you subscribed, and a summary where a client needs a record.',
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
      text: 'The method is not new. [Practical Ecommerce described a version in December 2024](' +
        PRACTICAL +
        '): sign up from a Gmail address, forward the mail to a parser and have ChatGPT pull out the data. [Brian Christner’s version](' +
        CHRISTNER +
        ') saves each email from a dedicated Gmail account into a sheet, where ChatGPT adds a summary and a category. What follows needs only an inbox, a sheet and any assistant with a Gmail connection.',
    },
    {
      kind: 'stat',
      value: '41%',
      label: 'of email revenue comes from automated flows, which are 5.3% of sends, across 183,000+ Klaviyo customers',
      source: 'Klaviyo benchmarks (vendor data), 2026',
      href: KLAVIYO_BENCH,
    },
    {
      kind: 'p',
      text: 'That is one platform’s category figure, not your rival’s. It is why you read the first week of a new subscriber’s mail before anything else.',
    },

    { kind: 'h3', id: 'spare-inbox', text: '1. Make one Gmail address for each rival' },
    {
      kind: 'p',
      text: 'Open a new Gmail address for each rival and use it for nothing else. Each rival sees one new subscriber, the welcome series belongs to one sender, and an assistant connected to that inbox can’t mix two rivals up. One shared address works for 3 rivals if you label the mail by sender. Keep your own mail out of it: Christner set up an isolated Gmail account so his personal mail never reached ChatGPT.',
    },

    { kind: 'h3', id: 'sign-up', text: '2. Sign up the way a customer does' },
    {
      kind: 'p',
      text: 'Use the pop up or the footer form on each rival’s site, on your phone first and then a laptop. Write down the date, the time and the offer on screen. If the first email asks you to confirm, click the link from the new inbox the same day, because a rival’s welcome series may not start until you do.',
    },

    { kind: 'h3', id: 'sheet', text: '3. Log every email in one sheet' },
    {
      kind: 'p',
      text: 'Give each email a row with these columns: **rival**, **received** (date and time), **subject**, **offer and code**, **Gmail tab** and **notes**. Fill it in within a day. After a week you can read off three things: how long each rival took to send a first email, how many welcome steps arrived in 7 days, and the day the offer changed.',
    },

    { kind: 'h3', id: 'gmail-tab', text: '4. Read the Gmail tab yourself' },
    {
      kind: 'p',
      text: 'Gmail shows the tab each email landed in. [Gmail’s own search help](' +
        GMAIL_SEARCH +
        ') documents **category:promotions**, so one search lists a rival’s mail by tab. Log the tab as what that inbox saw. A new address has opened and clicked nothing, so it shows one fresh subscriber’s view, not the view of a rival’s loyal customers.',
    },

    { kind: 'h3', id: 'assistant', text: '5. Let an assistant read and compare' },
    {
      kind: 'p',
      text: 'Connect only the spare inbox. [Claude’s Gmail connector](' +
        CLAUDE_GMAIL +
        ') searches the one Google account you connect, can’t send or change mail, and links each answer to the emails it used. ChatGPT and Perplexity have Gmail connections too, and [OpenAI’s example prompts](' +
        OPENAI_USE +
        ') include a summary of unread emails grouped by sender. Ask for what the sheet needs:',
    },
    {
      kind: 'list',
      items: [
        '“List every email in this inbox since the day I subscribed, newest first, with date, time, subject, offer and code.”',
        '“Compare the first 7 days of mail from rivala.example and rivalb.example: emails sent, first send after sign up, deepest discount.”',
        '“Mark every email whose offer differs from the one before it.”',
      ],
    },
    {
      kind: 'p',
      text: 'Check a count against the inbox before you repeat it. A Gmail search such as **from:news@rivala.example after:2026/10/23** gives the true number, and Claude’s links open the email behind each line. The Claude connector can’t see images embedded in emails, so read any email whose offer sits in an image yourself and add it to the sheet.',
    },

    { kind: 'h3', id: 'weekly', text: '6. Run it on a schedule and match it to the inbox weekly' },
    {
      kind: 'p',
      text: 'ChatGPT runs recurring tasks [up to once an hour on paid plans](' +
        OPENAI_TASKS +
        '), and Gemini’s [scheduled actions](' +
        GEMINI_SCHEDULE +
        ') are built for daily summaries, so step 5 can arrive as a digest. Once a week, compare the digest with the sheet and the inbox. If the digest and the inbox disagree, trust the inbox.',
    },

    { kind: 'h2', id: 'what-each-does', text: 'ChatGPT competitor analysis for emails: what five assistants do, job by job' },
    {
      kind: 'table',
      caption: 'Five assistants, job by job, from their own help pages, read 23 October 2026',
      cols: ['Job', 'ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Copilot'],
      rows: [
        [
          'Read and summarise a connected Gmail inbox',
          'Yes. Gmail is in its summary examples',
          'Yes. Read only, with links to the emails used',
          'Yes. Daily digests can include your emails',
          'Yes, once Gmail is connected',
          'The page read doesn’t say',
        ],
        [
          'Fill in a sign up form for you',
          'Yes. Pauses for you at a login',
          'Yes, in your own Chrome',
          'Yes. You take over to create an account',
          'Yes. Comet acts on websites',
          'Yes, in Edge. No autofill or saved passwords',
        ],
        [
          'Own inbox and phone number for each rival',
          'The pages don’t describe one',
          'The pages don’t describe one',
          'The pages don’t describe one',
          'The pages don’t describe one',
          'The pages don’t describe one',
        ],
        [
          'Run on a schedule',
          'Hourly at the fastest. 3 to 15 active tasks',
          'Cloud tasks hourly at the fastest. 100 runs an hour',
          '10 active schedules. Tasks not offered in the UK or EEA',
          'Hourly at the fastest. 15 tasks per Computer conversation',
          'The page doesn’t mention it',
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
          'Answer from before you subscribed',
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
      text: 'Copilot’s page covers browser actions in Edge, so its column is short because the page is. “The pages don’t say” means the pages read were silent, not that the assistant can’t. The last row is a fact about mailboxes: no inbox holds mail it never received.',
    },

    { kind: 'h3', id: 'good-at', text: 'What each one does well' },
    {
      kind: 'list',
      items: [
        '**ChatGPT** summarises a connected Gmail inbox, can start a task when a [new Gmail message arrives](' +
          OPENAI_TASKS +
          '), and [hands you the browser at a login](' +
          OPENAI_AGENT +
          ').',
        '**Claude** searches your inbox and cites the emails it used. Its [cloud scheduled tasks](' +
          CLAUDE_TASKS +
          ') keep running with the laptop closed, and [Claude in Chrome](' +
          CLAUDE_CHROME +
          ') repeats browser tasks daily, weekly, monthly or annually.',
        '**Gemini’s** [auto browse](' +
          GEMINI_BROWSE +
          ') fills in forms in Chrome and hands you account creation, and its [tasks](' +
          GEMINI_TASKS +
          ') ask before they submit a form or buy.',
        '**Perplexity** queries Gmail once connected, [acts on websites in Comet](' +
          PPLX_COMET +
          '), and its Computer tool runs [event triggered automations with memory of earlier runs](' +
          PPLX_AUTOMATIONS +
          '), published 29 September 2026.',
        '**Copilot** does short browser tasks in Edge that you [watch and can take over at any time](' +
          COPILOT +
          ').',
      ],
    },

    { kind: 'h2', id: 'where-they-stop', text: 'Where every assistant stops: one person, one inbox, no past, no proof' },
    {
      kind: 'p',
      text: 'An assistant reads the inbox you give it. It isn’t a subscriber to anything.',
    },
    {
      kind: 'list',
      items: [
        '**One person, one account.** Claude’s connector reaches only the Google account you connected. [Gemini’s tasks](' +
          GEMINI_TASKS +
          ') need a personal Google Account. [Perplexity’s Gmail connection](' +
          PPLX_GMAIL +
          ') is personal too. A team that wants shared evidence copies it out by hand.',
        '**Scheduled work has caps.** ChatGPT allows 3 to 15 active tasks. Gemini allows 10 active schedules and 15 tasks running at once, and [auto browse allows 20 requests a day on Google AI Pro](' +
          GEMINI_BROWSE +
          '). [Perplexity’s Computer](' +
          PPLX_COMPUTER +
          ') allows 15 per conversation and spends credits on every run. [Claude allows 100 scheduled runs an hour](' +
          CLAUDE_TASKS +
          ') per account, and its [Desktop tasks](' +
          CLAUDE_DESKTOP +
          ') run only while the app is open and the computer is awake. On ChatGPT Plus, each scheduled agent run counts toward [40 agent messages a month](' +
          OPENAI_AGENT +
          ').',
        '**No past.** The assistant reads the mail in the inbox. What a rival sent last month, to anyone but you, isn’t there.',
        '**No evidence.** The pages read don’t describe keeping the original email, its arrival time or its sender check, or reporting the tab. Copilot keeps session screenshots for up to 30 days, which record the session and not the email.',
      ],
    },
    {
      kind: 'p',
      text: 'The email itself, with the time it arrived and its sender check, settles an argument with a client or a boss. A summary or a screenshot starts one.',
    },

    { kind: 'h2', id: 'archives', text: 'What email archives show, and what they don’t' },
    {
      kind: 'p',
      text: 'Archives hold mail already collected, so you get history on day one. [Milled](' +
        MILLED +
        ') calls itself a search engine for email newsletters and ecommerce sales. [MailCharts](' +
        MAILCHARTS +
        ') says it covers email and SMS, and collects ecommerce email journeys. Its agencies page carries the request they answer:',
    },
    {
      kind: 'quote',
      text: 'constantly be asking us to produce a competitive analysis based on email',
      cite: 'A senior account manager at DEFINITION 6, on MailCharts’ own agencies page (vendor testimonial, undated)',
      href: MAILCHARTS_AGENCIES,
    },
    {
      kind: 'p',
      text: '[Panoramata](' +
        PANORAMATA +
        ') says it monitors rivals’ emails and SMS or WhatsApp messages, shows welcome and abandoned checkout flows, and keeps ad and landing page history. It also publishes comparison pages of these tools, so read those as vendor writing.',
    },
    {
      kind: 'p',
      text: 'An archive suits a look at many brands you didn’t subscribe to. It shows what the vendor collected for the brands it covers. You can’t choose the shopper, the basket or the day, and Panoramata’s page doesn’t say how its emails are collected.',
    },

    { kind: 'h2', id: 'twenty-rivals', text: 'Competitor email tracking for 20 rivals: the sum changes' },
    {
      kind: 'p',
      text: 'Your sum: rivals × minutes a week you spend reading each rival’s mail × 4 ÷ 60 = hours a month. At 3 rivals and 20 minutes each, a figure set deliberately low, that is 4 hours. At 20 rivals it is nearly 27. Put your own minutes in.',
    },
    {
      kind: 'p',
      text: 'Past that, the job needs an inbox and a phone number for every brand, running for weeks, kept as they arrived. Developers can build the parts. [AgentMail](' +
        AGENTMAIL +
        ') gives each agent a mailbox, with a free tier of 3 inboxes and 100 emails a day. [Clay’s benchmark of 22 September 2026](' +
        CLAY +
        ') had agents submit 6,346 forms across 100 countries and log replies by email and phone. Clay calls it the first in a series and lists its own caveats, so it is a snapshot of replies to demo forms, not a kept record of any store’s emails.',
    },
    {
      kind: 'p',
      text: 'Obsession’s [email and SMS tracking](/recipes/email-sms-tracking) is built for that case. Its page describes an AI agent for each rival with its own inbox and texting number, every message kept as it arrived, and history that starts from the minute an agent first subscribes. It is open by waitlist.',
    },
    {
      kind: 'p',
      text: 'Obsession’s [developers page](/developers) puts the same gap in one line: “Your AI agent can think. It can’t be a customer for thirty days.”',
    },
    {
      kind: 'cta',
      text: 'For more rivals than you can read by hand, email and SMS tracking gives each rival an AI agent with its own inbox and texting number, and keeps every message as it arrived.',
      to: '/recipes/email-sms-tracking',
      label: 'See email and SMS tracking',
    },

    { kind: 'h2', id: 'for-agencies', text: 'For agencies: the rival report is half of the client call' },
    {
      kind: 'p',
      text: 'A rival’s welcome series is worth most beside your client’s own. A client’s dashboard shows what was sent, and only a new customer shows what arrived. Run the same method on the client’s store, with the client’s OK: a fresh address, a sign up, a basket left behind, and 48 hours of watching the inbox.',
    },
    {
      kind: 'p',
      text: 'Code freezes close about 20 November. A gap found by then is still fixable, and one found on Black Friday is not.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s test customers sign up, leave a basket and stop at checkout at each client store, with each owner’s OK, then watch every inbox for 48 hours. You get what arrived, what never did, and the screenshots.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'start-now', text: 'Sign up before the teasers: the record starts the day you do' },
    {
      kind: 'p',
      text: 'Black Friday is Friday 27 November and Cyber Monday is Monday 30 November. Rivals’ teasers start in late October. An address that subscribes by Friday 30 October holds 4 weeks of a rival’s mail by Black Friday. One that subscribes on Black Friday holds the sale and nothing that led to it, and no assistant can reach back for the rest.',
    },
    {
      kind: 'p',
      text: 'Make the addresses this week, and on Black Friday you read 4 weeks of each rival’s mail instead of guessing.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Can ChatGPT track competitor emails?',
          a: 'ChatGPT can summarise and compare the rival emails that reach a Gmail inbox you connect, but not mail from before you subscribed, and its help pages don’t describe keeping each email as evidence.',
        },
        {
          q: 'Can Claude monitor my competitors’ emails?',
          a: 'Claude’s Gmail connector searches the one Google account you connect, read only, and links each answer to the emails it used. It can’t see images embedded in emails, and it can’t read mail that never reached that inbox.',
        },
        {
          q: 'How do I see what competitors email their customers?',
          a: 'Sign up to each rival from a spare Gmail address, log every email in a sheet with its time, offer and Gmail tab, and have an assistant summarise the inbox. That suits 1 to 3 rivals and needs no paid tool.',
        },
        {
          q: 'Can ChatGPT show me what a rival emailed before I subscribed?',
          a: 'No. It reads the mail in the inbox you connect, and that inbox holds only what arrived after you subscribed. An archive that collected the mail earlier, or an agent that subscribed earlier, can hold older mail.',
        },
        {
          q: 'Can an AI assistant tell me which Gmail tab a rival’s email landed in?',
          a: 'The help pages read don’t say any of the five reports the tab. Gmail shows it, and Gmail search supports category:promotions. A new address shows one fresh subscriber’s view.',
        },
        {
          q: 'How many competitors can I follow by hand?',
          a: 'Work out your own sum: rivals × minutes a week on each × 4 ÷ 60 = hours a month. At 3 rivals and 20 minutes each it is 4 hours. At 20 rivals it is nearly 27.',
        },
        {
          q: 'Do email archives like Milled replace a spare inbox?',
          a: 'They give you history on day one for the brands they cover. They don’t let you choose the shopper, the basket or the day, so they answer a different question.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every help page and document cited here was read at its source on 23 October 2026: OpenAI’s scheduled tasks, ChatGPT agent and connector pages (through a text proxy, because OpenAI blocks direct fetches), Claude’s Gmail connector, Claude in Chrome and scheduled tasks pages, Gemini’s tasks, scheduled actions and auto browse pages, Perplexity’s Gmail connector, Comet and Computer pages, Microsoft’s Browse with Copilot page, Gmail’s search help, Klaviyo’s benchmarks page, Clay’s post and AgentMail’s docs. Most help pages show no date, so the date given is the day they were read. Milled blocked automated fetches, so only its homepage title is used. No archive counts or prices are quoted, because Panoramata’s page gives two different counts and MailCharts’ page gives none. Where a page was silent, this piece says the pages don’t say. It is not a claim that the assistant can’t. Nothing here is legal advice.',
    },
  ],

  sources: [
    { title: 'Scheduled tasks in ChatGPT', publisher: 'OpenAI Help Center', url: OPENAI_TASKS, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'ChatGPT agent', publisher: 'OpenAI Help Center', url: OPENAI_AGENT, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'Plugin use cases and prompts', publisher: 'OpenAI Help Center', url: OPENAI_USE, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'Gmail connector', publisher: 'Claude docs', url: CLAUDE_GMAIL, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'Get started with Claude in Chrome', publisher: 'Claude Help Center', url: CLAUDE_CHROME, date: '2026-08-26' },
    { title: 'Automate work with scheduled tasks', publisher: 'Claude Code docs', url: CLAUDE_TASKS, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'Schedule recurring tasks in Claude Code Desktop', publisher: 'Claude Code docs', url: CLAUDE_DESKTOP, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'Manage your tasks and workflows in Gemini Apps', publisher: 'Gemini Apps Help', url: GEMINI_TASKS, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'Schedule actions in Gemini Apps', publisher: 'Gemini Apps Help', url: GEMINI_SCHEDULE, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'Ask Gemini in Chrome to complete tasks for you with auto browse', publisher: 'Chrome Help', url: GEMINI_BROWSE, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'Connecting Perplexity with Gmail and Google Calendar', publisher: 'Perplexity Help Center', url: PPLX_GMAIL, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'Assistant panel', publisher: 'Comet Browser Help Center', url: PPLX_COMET, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'Scheduled tasks in Computer', publisher: 'Perplexity Help Center', url: PPLX_COMPUTER, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'Computer adds Automations for ongoing work', publisher: 'Perplexity', url: PPLX_AUTOMATIONS, date: '2026-09-29' },
    { title: 'Copilot Actions in Edge (Browse with Copilot)', publisher: 'Microsoft Support', url: COPILOT, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'Refine searches in Gmail', publisher: 'Gmail Help', url: GMAIL_SEARCH, date: 'Read 23 Oct 2026 (undated)' },
    { title: '2026 email marketing benchmarks', publisher: 'Klaviyo', url: KLAVIYO_BENCH, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'How to monitor competitors’ email marketing', publisher: 'Practical Ecommerce (Armando Roggio)', url: PRACTICAL, date: '2024-12-15' },
    { title: 'How to build a competitor analysis tool using ChatGPT', publisher: 'Brian Christner', url: CHRISTNER, date: '2024-03-28 (modified 2026-02-17)' },
    { title: 'Claygent experiment: speed to lead', publisher: 'Clay', url: CLAY, date: '2026-09-22' },
    { title: 'AgentMail docs', publisher: 'AgentMail', url: AGENTMAIL, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'Milled: a search engine for email newsletters and ecommerce sales', publisher: 'Milled', url: MILLED, date: 'Title read 23 Oct 2026' },
    { title: 'MailCharts', publisher: 'MailCharts', url: MAILCHARTS, date: 'Read 23 Oct 2026 (undated)' },
    { title: 'MailCharts for agencies', publisher: 'MailCharts', url: MAILCHARTS_AGENCIES, date: 'Read 23 Oct 2026 (undated testimonial)' },
    { title: 'Panoramata', publisher: 'Panoramata', url: PANORAMATA, date: 'Read 23 Oct 2026 (undated)' },
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
