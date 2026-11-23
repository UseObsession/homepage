import type { BlogPost } from './types'

/* Wave 2 best-of guide (_research/seo/agent-business-24nov/PLAN.md, 24 Nov 2026): the best email testing tools.
   Primary "best email testing tools"; also "best free email testing tools". Reader: developers and QA engineers who
   need test email caught in development, sign-up, code and magic link tests in CI, or previews and spam checks.
   Every other tool is described only from its own pricing or product page, read on 24 Nov 2026, with prices in US
   dollars as listed that day. Not confirmed on a company's own page: Litmus's own site now sends its pricing to
   Validity Engage, whose page lists no public price (so none is given); Mailpit's page states no licence or price.
   Obsession's prices are typed from src/content/prices.ts as it stood on 24 Nov 2026 (inbox $0.50, emails $0.40 per
   1,000, US number $2, text $0.015; plans Free, $20, $99, $499). The cost table uses example inputs. No dashes. */

const MAILTRAP = 'https://mailtrap.io/email-sandbox/'
const MAILTRAP_PRICING = 'https://mailtrap.io/pricing/'
const MAILOSAUR_PRICING = 'https://mailosaur.com/pricing'
const MAILSLURP_PRICING = 'https://app.mailslurp.com/pricing/'
const TESTMAIL_PRICING = 'https://testmail.app/pricing/'
const VALIDITY = 'https://www.validity.com/pricing/'
const EOA_PRICING = 'https://www.emailonacid.com/pricing/'
const MAILPIT = 'https://mailpit.axllent.org/'
const MAILHOG = 'https://github.com/mailhog/MailHog'

export const post: BlogPost = {
  slug: 'best-email-testing-tools',
  title: 'The best email testing tools: 9 compared by job, free plan and price',
  dek: '9 email testing tools sorted by the job they do: catching test email while you build, testing sign-up codes and magic links end to end, and checking previews and spam. Prices as listed on 24 November 2026.',
  metaTitle: 'Best email testing tools for developers: 9 compared, 2026',
  description:
    'The best email testing tools compared: Mailtrap, Mailosaur, MailSlurp, Testmail, Litmus, Email on Acid, Mailpit and MailHog, with free plans and prices.',
  answer:
    'The best email testing tool depends on the job. Mailpit and MailHog catch test email on your machine for free, Mailtrap catches it in staging and CI, Mailosaur, MailSlurp and Testmail test sign-up codes and magic links end to end, and Litmus and Email on Acid check previews and spam. When a test also needs the text code, Obsession gives each test persona an inbox and a phone number, with every message in one event log.',
  primaryKeyword: 'best email testing tools',
  keywords: ['best email testing tools', 'best free email testing tools', 'email testing tools for developers'],
  category: 'Test sign-up and agents',
  order: 2,
  published: '2026-11-24',
  updated: '2026-11-24',
  readingMinutes: 11,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'Where each email test happens',
      rows: [
        {
          name: 'Catch it while you build',
          who: 'Mailpit, MailHog, Mailtrap',
          nodes: ['Your app', 'A fake mail server', 'You or your CI'],
          links: ['sends to', 'inspected by'],
        },
        {
          name: 'Test the sign-up end to end',
          who: 'Mailosaur, MailSlurp, Testmail',
          nodes: ['Your test suite', 'A throwaway inbox', 'Your own app'],
          links: ['creates', 'waits on'],
        },
        {
          name: 'Check the campaign',
          who: 'Litmus, Email on Acid',
          nodes: ['Your template', 'Preview and spam checks', 'Your designer'],
          links: ['sent to', 'reported to'],
        },
        {
          name: 'The email and the text code',
          who: 'Obsession',
          nodes: ['Your test suite', 'Inbox and number', 'Your sign-up'],
          links: ['starts', 'signs up to'],
          lit: 1,
          ours: true,
        },
      ],
      foot: 'Most tools test one message. A sign-up test often needs two: the email, then the code by text.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An email testing tool answers one of 3 questions. Did my app send the right email? Did the sign-up work when the email arrived? Does the campaign look right in the inbox? Each tool is built for one of them, so start by naming your job. A tool that catches mail in development does nothing for a campaign preview, and a preview tool can’t log a test user in.',
    },
    { kind: 'p', text: 'The 9 tools fall into 4 groups:' },
    {
      kind: 'list',
      items: [
        '**Local test servers:** Mailpit and MailHog, free programs that sit between your app and the internet and keep every email your app sends.',
        '**Hosted sandboxes:** Mailtrap, which does the same in staging and CI, with a web page and an API to read each message.',
        '**Test inboxes for end-to-end tests:** Mailosaur, MailSlurp and Testmail, which create an address for each test run and let your test read the email that arrives, such as a sign-up code or a magic link.',
        '**Campaign checkers:** Litmus and Email on Acid, which show how a template looks across email apps and score it for spam.',
      ],
    },

    { kind: 'h2', id: 'jobs', text: 'The 4 jobs email testing does' },
    {
      kind: 'list',
      items: [
        '**Catching test email in development.** Your app sends a welcome email and you want to see it without mailing a real person. A fake mail server, one that accepts mail and keeps it, does this.',
        '**End-to-end tests of sign-up, codes and magic links.** An automated test fills in a sign-up form, waits for the email and uses what is in it. A [one-time password](/glossary/one-time-password) is a short code that works once. A [magic link](/glossary/magic-link) is a sign-in link sent by email. Both need an inbox your test can read by code.',
        '**Previews.** The same email looks different in different email apps. A preview shows it in each.',
        '**Spam checks.** A score for how likely a message is to land in junk, and why.',
      ],
    },
    {
      kind: 'p',
      text: 'Every tool is described from its own pricing or product page as listed on 24 November 2026, with prices in US dollars a month. Where a page is silent, it says so here.',
    },

    { kind: 'h2', id: 'local', text: 'Catching test email while you build' },

    { kind: 'h3', id: 'mailpit', text: 'Mailpit' },
    {
      kind: 'p',
      text: '[Mailpit’s page](' +
        MAILPIT +
        ') calls it a small, fast, zero-dependency email testing tool and API for developers. It runs as an SMTP server, which is what your app sends mail to, and shows each message in a web page with live updates. It has a REST API for tests, spam scoring with SpamAssassin or Rspamd, HTML and link checks, screenshots, a POP3 server, webhooks and chaos testing, which makes the server return errors on purpose.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** a single file or Docker image on your machine with spam and link checks built in.',
        '**Price as listed:** its page states neither a price nor a licence.',
        '**Where it stops:** it runs where you run it. Its page doesn’t describe public addresses that outside services can send to.',
        '**Best for:** developers who want a free local catcher with an API.',
      ],
    },

    { kind: 'h3', id: 'mailhog', text: 'MailHog' },
    {
      kind: 'p',
      text: '[MailHog’s repository](' +
        MAILHOG +
        ') describes web and API based SMTP testing. Point your app at it and read the mail in a web page or through a JSON API. It can release a message to a real server, store mail in memory, files or MongoDB, and simulate failures. Its licence is MIT.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** the long-standing free option, with an API and a simple setup.',
        '**Price as listed:** free under the MIT licence.',
        '**Where it stops:** its page shows copyright to 2017, a v1.0.0 release and 220 open issues, so check recent activity before you start a new project on it.',
        '**Best for:** teams that already run it.',
      ],
    },

    { kind: 'h3', id: 'mailtrap', text: 'Mailtrap' },
    {
      kind: 'p',
      text: '[Mailtrap’s Email Sandbox](' +
        MAILTRAP +
        ') captures the mail your app sends in development, staging, QA and CI and keeps it to read in a web page or through the API. Nothing reaches a real inbox unless you set up forwarding, and it needs no sending domain. Its related tools check HTML support, spam scores and previews in real email apps.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** one hosted place for the whole team to see staging email, with checks beside each message.',
        '**Price as listed:** on [its pricing page](' +
          MAILTRAP_PRICING +
          '), Free is $0 for 50 test emails a month, 1 sandbox and 10 emails kept. Basic is $17 for 500, Team $42 for 5,000, Business $123 for 50,000 and Enterprise $498 for unlimited, all on monthly billing.',
        '**Where it stops:** the free plan keeps 10 emails and takes 1 every 10 seconds, so it suits a first try, not a busy test suite.',
        '**Best for:** teams that want staging email in one shared page.',
      ],
    },

    { kind: 'h2', id: 'e2e', text: 'Testing sign-ups, codes and magic links end to end' },
    {
      kind: 'p',
      text: 'An end-to-end test needs an address it can create on demand and an API to read what arrives. The 3 services here do that, and they differ in what else a test can receive.',
    },

    { kind: 'h3', id: 'mailosaur', text: 'Mailosaur' },
    {
      kind: 'p',
      text: '[Mailosaur’s pricing page](' +
        MAILOSAUR_PRICING +
        ') describes a dummy SMTP server that catches the email your product sends, with unlimited addresses. It also tests SMS, and sells email previews as an add-on.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** email and text testing from one vendor, with seats for a team and auto-forwarding on its Core plan.',
        '**Price as listed:** Personal is from $20 a month, billed annually, for 1 inbox and 15,000 inbound emails, with a 14-day free trial. Core is from $50 for 75,000 emails and 5 seats. SMS testing is an add-on to Core from $37.50 or a plan from $87.50, with up to 15 numbers in the US, Canada and the UK. Previews start at $25 as an add-on.',
        '**Where it stops:** Personal has no SMS. Its page doesn’t describe a browser or a persona that signs up to sites it doesn’t own.',
        '**Best for:** QA teams testing both the email and the text code of their own product.',
      ],
    },

    { kind: 'h3', id: 'mailslurp', text: 'MailSlurp' },
    {
      kind: 'p',
      text: '[MailSlurp’s pricing page](' +
        MAILSLURP_PRICING +
        ') lists inboxes created by API, email quality audits, previews and placement tests, plus phone numbers on its larger plans.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** a free plan with no card, and phone numbers for SMS tests on paid plans.',
        '**Price as listed:** Free is $0 for 250 emails received a month, with temporary inboxes only. Starter is $19.99 for 2,500, Pro is $69 for 5,000 and Growth is $199 for 5,000 with 5,000 inboxes created a month, each with a 7-day trial. Enterprise is custom.',
        '**Where it stops:** phone numbers and messages are paid separately, and the page shows no rates for them. Its Starter card and phone section disagree on whether Starter can rent a number.',
        '**Best for:** a developer who wants to try inbox testing before paying.',
      ],
    },

    { kind: 'h3', id: 'testmail', text: 'Testmail' },
    {
      kind: 'p',
      text: '[Testmail’s pricing page](' +
        TESTMAIL_PRICING +
        ') explains the idea in one line: mail sent to an address such as namespace.tag@inbox.testmail.app lands in an inbox you read through the API, and the tag makes an unlimited number of addresses.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** the lowest listed price for email-only tests, with unlimited users and addresses on every plan.',
        '**Price as listed:** Free is $0 for 100 emails a month with 1 day of retention. Essential is $9 billed annually or $12 monthly for 10,000 emails. Pro is $29 or $39 for 50,000, with a visual viewer. New accounts get a 14-day trial without a card.',
        '**Where it stops:** its page describes email only. A text code needs another service.',
        '**Best for:** low-cost email checks in a test suite.',
      ],
    },

    { kind: 'h2', id: 'campaign', text: 'Previews and spam checks' },

    { kind: 'h3', id: 'litmus', text: 'Litmus' },
    {
      kind: 'p',
      text: 'Litmus is now part of Validity Engage. [Validity’s page](' +
        VALIDITY +
        ') says every send gets instant previews across 100+ live email apps and devices, with checks on links, images, spelling, alt text and accessibility.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** previews and quality checks for marketing teams, inside a larger email platform.',
        '**Price as listed:** Validity’s page lists no public price and offers a demo.',
        '**Where it stops:** it is a campaign checker, not a way to test your app’s own sign-up emails by code.',
        '**Best for:** marketing teams that already work with Validity.',
      ],
    },

    { kind: 'h3', id: 'email-on-acid', text: 'Email on Acid' },
    {
      kind: 'p',
      text: '[Email on Acid’s pricing page](' +
        EOA_PRICING +
        ') now shows it as Mailgun Inspect (formerly Email on Acid). It counts each screenshot of one email app or device as a preview, so a test across 50 clients uses 50.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** previews across 100+ clients with API access and unlimited users on every plan.',
        '**Price as listed:** Basic is $99 a month for 1,000 previews. Premium is $199 for 2,000 previews and adds accessibility tests, code analysis, link and image checks and spam content checks, which don’t use up previews. Extra previews cost $0.15. Contract is custom.',
        '**Where it stops:** spam checks start on Premium, and the page doesn’t state how long the trials last.',
        '**Best for:** teams that send designed campaigns and need previews every week.',
      ],
    },

    { kind: 'h2', id: 'compared', text: 'The 9 tools and Obsession, side by side', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 24 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Email testing tools. Prices in US dollars a month from each provider’s own pages, as listed on 24 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['By hand: a test inbox someone checks', 'Judgement on how a message reads', 'Your team’s hours', 'Can’t run in CI or at volume', 'One launch a quarter'],
        [
          'Local servers: Mailpit, MailHog',
          'Free catching of your app’s mail, with an API',
          'Mailpit: price not stated\nMailHog: free, MIT',
          'Run on your own machine or server',
          'Developers working locally',
        ],
        [
          'Hosted sandbox: Mailtrap',
          'Shared staging email with checks beside it',
          'Free for 50 a month, then $17, $42, $123 or $498',
          'Free plan keeps 10 emails',
          'QA and staging',
        ],
        [
          'Test inboxes: Mailosaur, MailSlurp, Testmail',
          'Inboxes your test reads by API',
          'Mailosaur: from $20, trial\nMailSlurp: free for 250, then $19.99 to $199\nTestmail: free for 100, then $12 to $39',
          'Mailosaur SMS from Core; MailSlurp numbers paid apart; Testmail email only',
          'Automated sign-up and code tests',
        ],
        [
          'Campaign checkers: Litmus, Email on Acid',
          'Previews and spam scores',
          'Litmus: no public price\nEmail on Acid: $99 or $199',
          'Not built for app tests by code',
          'Marketing sends',
        ],
        [
          'Obsession (ours): [Email](/email), [Phone](/phone), [Sign-in code check](/blueprints/sign-in-code-check)',
          'An inbox and a number per test persona, so a sign-up gets the email code and the text code, each logged with its time',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Says it’s an AI to a person; stops at identity checks and CAPTCHAs; no previews or spam scores',
          'Sign-up and sign-in tests that use both an email and a text',
        ],
      ],
    },

    { kind: 'h2', id: 'cost', text: 'What 5,000 test emails a month cost' },
    {
      kind: 'p',
      text: 'Taking an example suite that receives 5,000 test emails a month, each provider priced on the cheapest plan its page lists for that volume, before tax:',
    },
    {
      kind: 'table',
      caption: 'Example input. Each provider’s listed plans, 24 November 2026. Obsession’s plan fee covers usage at its list rates, $20 of it on Developer',
      cols: ['Provider', 'Plan for 5,000 emails', 'Monthly price'],
      rows: [
        ['Testmail', 'Essential, 10,000 emails', '$12 monthly billing, $9 annual'],
        ['Mailtrap', 'Team, 5,000 test emails', '$42'],
        ['MailSlurp', 'Pro, 5,000 received', '$69'],
        ['Mailosaur', 'Core, 75,000 inbound', 'From $50, billed annually'],
        ['Obsession', 'Developer covers $7 of usage: 5,000 emails and 10 inboxes', '$20'],
      ],
    },
    {
      kind: 'p',
      text: 'For email alone, Testmail is the cheapest. The price only moves toward Obsession when the same test also needs a phone number, because a US number is $2 a month and a text is $0.015.',
    },

    { kind: 'h2', id: 'second-code', text: 'When the test needs the text code too' },
    {
      kind: 'p',
      text: 'Many sign-up and login flows send an email, then a 6-digit code by text. A test that only reads email covers half of the flow, and a number from a consumer service often can’t be reached by a test. Obsession is the toolkit for AI agents: phone numbers, inboxes, browsers and sandboxes on one API and one bill. A persona puts an inbox, a US or UK number and a browser under one identity, so a test run signs up as one person and receives both messages.',
    },
    {
      kind: 'art',
      caption: 'A test persona signs up to an app, confirms by email and takes the text code, with each message timed. Fernpay is an invented company.',
      art: {
        kind: 'log',
        title: 'Sign-up test, nightly run',
        who: 'Persona at fernpay.example',
        rows: [
          { time: '02:00:01', text: 'Sign-up form sent', detail: 'app.fernpay.example', tone: 'info' },
          { time: '02:00:06', text: 'Email received: Confirm your address', detail: 'Link opened', tone: 'ok' },
          { time: '02:00:11', text: 'Text received: Your code is 482910', detail: 'Code entered', tone: 'ok' },
          { time: '02:06:40', text: 'Second text received: sign-in code', detail: '1 min 40 s after the code’s 5 minute expiry', tone: 'late' },
        ],
        foot: 'Every email and text lands in one event log, so the late code is flagged that night.',
      },
    },
    {
      kind: 'p',
      text: 'Obsession’s [Sign-in code check](/blueprints/sign-in-code-check) runs this every night on your own product, or on a client’s with their OK, and flags any code that comes late or never. The [OTP testing use case](/use-cases/otp-testing) shows the same job for a team that tests codes. In code, [the email piece](/email) gives each test an inbox and each email reaches your webhook, a web address in your app that Obsession calls, as email.received, and each text as sms.received. Obsession doesn’t preview a template or score spam, so keep Litmus or Email on Acid for that.',
    },
    {
      kind: 'p',
      text: 'An inbox is $0.50 a month and email $0.40 per 1,000, sent or received. A US number is $2 a month and a text $0.015. The Free plan includes 3 inboxes, 3,000 emails and 1 number ([every rate](/pricing/rates)). Teams using Mailosaur today can compare it line by line in [Obsession vs Mailosaur](/compare/obsession-vs-mailosaur) and see its [alternatives](/alternatives/mailosaur).',
    },
    {
      kind: 'cta',
      text: 'Test the sign-up with an inbox and a phone number per persona, and see the email and the text code in one log. Free plan, no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which to choose, by job' },
    {
      kind: 'list',
      items: [
        '**A free catcher on your laptop:** Mailpit, which also scores spam.',
        '**Shared staging email for a team:** Mailtrap.',
        '**The cheapest email-only sign-up test:** Testmail.',
        '**Email and SMS tests from one vendor, built for QA teams:** Mailosaur.',
        '**A free plan to try inbox testing:** MailSlurp, then check the number rates before you rely on texts.',
        '**An email and a text code under one test identity, with every message logged:** Obsession.',
        '**Previews and spam scores for a campaign:** Email on Acid or Litmus.',
      ],
    },
    {
      kind: 'p',
      text: 'If your agents or tests also sign in to sites, [how to build an AI agent from scratch](/blog/how-to-build-an-ai-agent-from-scratch) wires the first tools, and [the best email API for AI agents](/blog/best-email-api-for-ai-agents) compares inboxes built for agents.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about email testing tools' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are the best email testing tools?',
          a: 'It depends on the job. Mailpit and MailHog catch test email locally for free, Mailtrap catches it in staging, and Mailosaur, MailSlurp and Testmail test sign-up codes and magic links end to end. Litmus and Email on Acid check previews and spam. For a test that also needs a text code, Obsession gives each persona an inbox and a phone number.',
          link: { label: 'Email for AI agents and tests', to: '/email' },
        },
        {
          q: 'What are the best free email testing tools?',
          a: 'MailHog is free under the MIT licence, and Mailpit is a free local tool whose page states no price. As listed on 24 November 2026, Mailtrap’s free plan has 50 test emails a month, MailSlurp’s 250, Testmail’s 100 and Obsession’s Free plan 3,000 emails with 3 inboxes and 1 number, with no card.',
          link: { label: 'Every rate', to: '/pricing/rates' },
        },
        {
          q: 'How do I test a magic link or a one-time code in an automated test?',
          a: 'Create an inbox for the test, sign up with its address, wait for the email through the API and read the link or code from it. A code sent by text needs a phone number the test can read as well.',
          link: { label: 'Sign-in code check', to: '/blueprints/sign-in-code-check' },
        },
        {
          q: 'What is a one-time password?',
          a: 'A short code that works once and expires, sent by email or text to confirm someone is who they say they are. A test has to receive it in time and enter it before it expires.',
          link: { label: 'One-time password', to: '/glossary/one-time-password' },
        },
        {
          q: 'What is a magic link?',
          a: 'A sign-in link sent by email that logs a person in without a password. A test reads the email, opens the link and checks the account is signed in.',
          link: { label: 'Magic link', to: '/glossary/magic-link' },
        },
        {
          q: 'Can Obsession replace Litmus or Email on Acid?',
          a: 'No. Obsession tests what arrives and when, on an inbox and a number, and doesn’t preview a template in email apps or score it for spam. Use a campaign checker for that.',
          link: { label: 'Obsession vs Mailosaur', to: '/compare/obsession-vs-mailosaur' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about another tool comes from that company’s own pricing or product page as listed on 24 November 2026, with prices in US dollars as shown that day. We did not run the tools. The cost table applies each provider’s listed plans to one example volume. Fernpay and its picture are invented.',
    },
  ],

  sources: [
    { title: 'Email Sandbox', publisher: 'Mailtrap', url: MAILTRAP },
    { title: 'Pricing', publisher: 'Mailtrap', url: MAILTRAP_PRICING },
    { title: 'Pricing', publisher: 'Mailosaur', url: MAILOSAUR_PRICING },
    { title: 'Pricing', publisher: 'MailSlurp', url: MAILSLURP_PRICING },
    { title: 'Pricing', publisher: 'Testmail', url: TESTMAIL_PRICING },
    { title: 'Validity Engage pricing', publisher: 'Validity', url: VALIDITY },
    { title: 'Pricing', publisher: 'Email on Acid', url: EOA_PRICING },
    { title: 'Mailpit', publisher: 'Mailpit', url: MAILPIT },
    { title: 'MailHog', publisher: 'GitHub', url: MAILHOG },
  ],

  related: [
    '/email',
    'best-email-api-for-ai-agents',
    '/use-cases/otp-testing',
    '/blueprints/sign-in-code-check',
    '/compare/obsession-vs-mailosaur',
    '/alternatives/mailosaur',
    '/developers',
  ],
}
