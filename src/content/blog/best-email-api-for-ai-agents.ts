import type { BlogPost } from './types'

/* Wave 2, batch A, page 1 (_research/seo/wave2-pull-23nov/PLAN.md, 23 Nov 2026): the best email API for AI agents.
   Primary "best email api for ai agents"; also "best email service for ai agents", "email apis for ai agents compared"
   (Google suggestions, US and UK, 23 Nov 2026, autocomplete_23nov.json). "email api for ai agents" stays with /email,
   which this post links with that phrase.
   Reader: developers and founding engineers choosing where their agents' mail lives. Serves /email.
   Every other service is described only from its own pricing, product and docs pages, each listed on 23 Nov 2026, with
   prices in US dollars as listed that day; every fact and its address is in
   _research/seo/wave2-pull-23nov/research/best-email-api-for-ai-agents.json. Obsession's prices are typed from
   src/content/prices.ts as it stood on 23 Nov 2026 (inbox $0.50, emails $0.40 per 1,000, US number $2, text $0.015;
   plans Free, $20, $99, $499); update them here if that file changes.
   The worked month uses example inputs (20 or 1,000 inboxes) and each vendor's listed plan. larkfield.example and every
   row in its picture are invented. No dashes. */

const AGENTMAIL = 'https://www.agentmail.to/'
const AGENTMAIL_PRICING = 'https://www.agentmail.to/pricing'
const RESEND_PRICING = 'https://resend.com/pricing'
const RESEND_INBOXES = 'https://resend.com/blog/announcing-inboxes'
const RESEND_RECEIVING = 'https://resend.com/docs/dashboard/receiving/introduction'
const NYLAS_AGENTS = 'https://www.nylas.com/products/agent-accounts/'
const NYLAS_PRICING = 'https://www.nylas.com/pricing/'
const POSTMARK_PRICING = 'https://postmarkapp.com/pricing'
const POSTMARK_INBOUND = 'https://postmarkapp.com/inbound-email'
const MAILGUN_PRICING = 'https://www.mailgun.com/pricing/'
const SES_PRICING = 'https://aws.amazon.com/ses/pricing/'
const SES_RECEIVING = 'https://docs.aws.amazon.com/ses/latest/dg/receiving-email.html'
const MAILSLURP = 'https://www.mailslurp.com/'
const MAILSLURP_PRICING = 'https://app.mailslurp.com/pricing/'

export const post: BlogPost = {
  slug: 'best-email-api-for-ai-agents',
  title: 'The best email API for AI agents: 7 compared on inboxes, receiving and price',
  dek: '7 email APIs compared on what an AI agent needs from email: its own inbox, mail that arrives as an event, threads, your own domain and the price per inbox. Prices as listed on 23 November 2026.',
  metaTitle: 'The best email API for AI agents: 7 priced for developers',
  description:
    'The best email API for AI agents, compared: AgentMail, Resend, Nylas, Postmark, Mailgun, Amazon SES and MailSlurp on inboxes, receiving and price.',
  answer:
    'The best email API for AI agents depends on what the agent does with mail. AgentMail, Resend Inboxes and Nylas Agent Accounts give each agent its own inbox, while Postmark, Mailgun and Amazon SES send at volume and pass incoming mail to your code. When the agent also needs a phone number for text codes and a browser that stays signed in, Obsession puts all three under one identity, with inboxes at $0.50 a month.',
  primaryKeyword: 'best email api for ai agents',
  keywords: ['best email api for ai agents', 'best email service for ai agents', 'email apis for ai agents compared'],
  category: 'Build agent products',
  order: 1,
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'Where an agent’s email lives',
      rows: [
        {
          name: 'Inboxes for agents',
          who: 'AgentMail, Resend Inboxes, Nylas',
          nodes: ['Your agent', 'Its own inbox', 'Anyone who emails it'],
          links: ['owns', 'receives from'],
        },
        {
          name: 'Sending APIs that receive',
          who: 'Postmark, Mailgun, Amazon SES',
          nodes: ['Your code', 'One inbound domain', 'Senders'],
          links: ['parses', 'routes from'],
        },
        {
          name: 'Test inboxes',
          who: 'MailSlurp',
          nodes: ['Your test suite', 'Throwaway inbox', 'Your own app'],
          links: ['creates', 'waits on'],
        },
        {
          name: 'The whole agent',
          who: 'Obsession',
          nodes: ['Your agent', 'Inbox, number, browser', 'Any company'],
          links: ['uses', 'signs up to'],
          lit: 1,
          ours: true,
        },
      ],
      foot: 'Agent inboxes give each agent an address of its own. Sending APIs route a domain’s mail to your code. Obsession adds the number and browser under the same identity.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An email API for AI agents gives an agent an address it can send from and receive at, through code. A support agent answers customers from it and a sales agent reads the reply to its follow-up. A buying agent signs up to a supplier portal and opens the confirmation link. For developers choosing one, the useful split is how each service treats incoming mail, because an agent that can send but can’t read the reply only does half of its job.',
    },
    { kind: 'p', text: 'These 7 services fall into 3 kinds:' },
    {
      kind: 'list',
      items: [
        '**Inboxes built for agents:** AgentMail, Resend Inboxes and Nylas Agent Accounts, where one API call creates a new address with its own mailbox and threads.',
        '**Sending APIs that also receive:** Postmark, Mailgun and Amazon SES, built to send transactional mail at volume, which parse mail sent to your domain and hand it to your code.',
        '**Test inboxes:** MailSlurp, which creates inboxes and phone numbers for automated tests of sign-up and password reset flows.',
      ],
    },

    { kind: 'h2', id: 'needs', text: 'What an agent needs from an email API' },
    {
      kind: 'p',
      text: 'A person reads mail in an app. An agent reads it through an API, so 6 checks decide whether a service fits:',
    },
    {
      kind: 'list',
      items: [
        '**An inbox per agent, in one call.** A new address for each agent, user or task, ready when the call returns, so one agent’s mail never mixes with another’s.',
        '**Receiving that arrives as an event.** A webhook is a web address in your app that the service calls the moment an email lands. The agent acts on the reply in seconds instead of checking a mailbox on a timer.',
        '**Threads.** Replies grouped by conversation, so the agent reads the whole exchange before it answers.',
        '**Your own domain.** Sending from your company’s domain needs SPF, DKIM and DMARC, the DNS records that receiving mail servers check to confirm which company sent a message. They decide whether mail reaches the inbox.',
        '**A price per inbox you can scale.** One agent costs little anywhere. The bill that matters is 50, 1,000 or 10,000 inboxes.',
        '**The second code.** Many sign-ups send a confirmation link by email and then a 6-digit code by text. An email API covers the first, and the agent still needs a phone number for the second.',
      ],
    },
    {
      kind: 'p',
      text: 'Every service is described from its own pricing, product and documentation pages as listed on 23 November 2026, with prices in US dollars per month. Some also run an MCP server (Model Context Protocol, the standard way AI agents such as Claude call tools), so an assistant can read and send mail without code.',
    },

    { kind: 'h2', id: 'agent-inboxes', text: 'Inboxes built for agents' },

    { kind: 'h3', id: 'agentmail', text: 'AgentMail' },
    {
      kind: 'p',
      text: '[AgentMail’s home page](' +
        AGENTMAIL +
        ') is headed “Email for AI Agents”. It creates inboxes through a REST API, with threaded replies, attachments, and webhooks and WebSockets for new mail. It adds custom domains, Python and TypeScript SDKs, an MCP server and IMAP and SMTP access, the protocols mail apps use to read and send.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** an inbox per agent with everything a developer expects from a mailbox, built for agents from the start.',
        '**Price as listed:** on [its pricing page](' +
          AGENTMAIL_PRICING +
          '), Free is $0 for 3 inboxes and 3,000 emails a month. Developer is $20 for 10 inboxes and 10,000 emails, with $2 a month for each extra inbox and each extra 1,000 emails. Startup is $200 for 150 inboxes and 15,000 emails a day, with a SOC 2 report.',
        '**Where it stops:** its pages describe email. An agent that also needs a phone number or a browser buys those from other providers.',
        '**Best for:** agents whose whole job happens over email.',
      ],
    },

    { kind: 'h3', id: 'resend', text: 'Resend Inboxes' },
    {
      kind: 'p',
      text: 'Resend began as a sending API for developers. On 22 October 2026 it [announced Inboxes](' +
        RESEND_INBOXES +
        '): each inbox sends and receives at an address on one of your domains, conversations are grouped into threads, and agents connect through MCP or skills. A built-in agent can draft replies, forward threads, add labels and archive, with the actions you allow. [Resend’s receiving docs](' +
        RESEND_RECEIVING +
        ') describe incoming mail parsed and posted to your endpoint, at your domain or at a Resend address.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** inboxes on the same account as a high-volume sending API, at $1 a month for each extra inbox.',
        '**Price as listed:** on [its pricing page](' +
          RESEND_PRICING +
          '), every plan includes 3 inboxes, and extra inboxes cost $1 a month each on paid plans with pay as you go. Free is $0 for 3,000 emails a month and 100 a day; Pro is $20 for 50,000 emails or $35 for 100,000.',
        '**Where it stops:** each received email counts toward the plan’s sending quota, and extra inboxes need a paid plan.',
        '**Best for:** teams already sending through Resend who want an agent on the same account.',
      ],
    },

    { kind: 'h3', id: 'nylas', text: 'Nylas Agent Accounts' },
    {
      kind: 'p',
      text: 'Nylas built its API to read people’s own Gmail and Outlook accounts. [Its Agent Accounts page](' +
        NYLAS_AGENTS +
        ') is headed “Email & Calendar for Your AI Agents”: a mailbox and a calendar hosted by Nylas, created in one API call. The agent can propose times, send invitations and handle replies to them from the same address. Nylas writes the MX records for your domain and sets up SPF, DKIM and DMARC. Its MCP server lists 40+ coding agents, Claude Code and Cursor among them.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** a calendar beside the inbox, for agents that book meetings, with the same API reading your users’ own accounts.',
        '**Price as listed:** on [its pricing page](' +
          NYLAS_PRICING +
          '), Free includes 3 agent accounts and 3,000 emails a month. Essentials is $15 for 10 accounts and 10,000 emails. Pro is $49 a month for 50 accounts and 50,000 emails, then $0.40 for each extra account and $0.80 per extra 1,000 emails.',
        '**Where it stops:** IMAP and SMTP access starts on Essentials, and the page lists no overage prices for Free or Essentials.',
        '**Best for:** scheduling agents, and products that work in users’ own mailboxes as well as the agent’s.',
      ],
    },

    { kind: 'h2', id: 'sending-apis', text: 'Sending APIs that also receive' },
    {
      kind: 'p',
      text: 'These 3 services were built to send receipts, password resets and notifications at volume. Each can also receive: mail sent to your domain is parsed and passed to your code. There is no inbox to create per agent, so your code decides which agent each address belongs to and keeps the threads.',
    },

    { kind: 'h3', id: 'postmark', text: 'Postmark' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [inbound processing](' +
          POSTMARK_INBOUND +
          ') that posts each email to your app as JSON, with its spam score, headers and attachments. It adds a clean copy of the reply text without the quoted thread.',
        '**Price as listed:** on [its pricing page](' +
          POSTMARK_PRICING +
          '), a free developer plan sends 100 emails a month. Pro is $16.50 a month from 10,000 emails, then $1.30 per 1,000, with inbound processing included.',
        '**Where it stops:** inbound processing is on Pro and Platform, and Basic ($15) doesn’t list it.',
        '**Best for:** a support or reply agent on one domain, where clean reply text saves the model reading quoted history.',
      ],
    },

    { kind: 'h3', id: 'mailgun', text: 'Mailgun' },
    {
      kind: 'list',
      items: [
        '**What it does well:** inbound routes, rules that match incoming mail by address and forward it to your webhook or another inbox.',
        '**Price as listed:** on [its pricing page](' +
          MAILGUN_PRICING +
          '), Free sends 100 emails a day with 1 inbound route. Basic is from $15 for 10,000 emails with 5 routes. Foundation is $35 for 50,000 emails with full inbound routing, and Scale is $90 for 100,000.',
        '**Where it stops:** full inbound routing starts on Foundation, and Free keeps logs for 1 day.',
        '**Best for:** teams sending at volume who want rules that send each address’s mail to the right agent.',
      ],
    },

    { kind: 'h3', id: 'ses', text: 'Amazon SES' },
    {
      kind: 'list',
      items: [
        '**What it does well:** the lowest list price here. [SES pricing](' +
          SES_PRICING +
          ') is $0.10 per 1,000 emails sent and $0.10 per 1,000 received, plus $0.09 per 1,000 incoming chunks of 256 KB.',
        '**Price as listed:** pay as you go; new AWS customers get up to $200 in Free Tier credits.',
        '**Where it stops:** [receipt rules](' +
          SES_RECEIVING +
          ') deliver incoming mail to an S3 bucket or an SNS topic, so your team writes the inboxes, threads and webhooks to the agent. Receiving works only in the AWS Regions that support it.',
        '**Best for:** teams already on AWS with engineers to build inboxes and threads themselves.',
      ],
    },

    { kind: 'h2', id: 'testing', text: 'Test inboxes for QA' },

    { kind: 'h3', id: 'mailslurp', text: 'MailSlurp' },
    {
      kind: 'p',
      text: '[MailSlurp’s home page](' +
        MAILSLURP +
        ') reads “Build, test and automate email and SMS.” It creates temporary or permanent inboxes and real mobile numbers for codes, with libraries for Playwright, Cypress and Selenium, and lets agents receive messages and draft replies through MCP and its API.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** email and text in one test account, for checking that a sign-up sends its code.',
        '**Price as listed:** on [its pricing page](' +
          MAILSLURP_PRICING +
          '), Free is $0 for 250 emails received a month in temporary inboxes. Starter is $19.99 for 2,500 received, Pro $69 for 5,000, and Growth $199 for 5,000 with a custom domain. Phone numbers are paid separately.',
        '**Where it stops:** every listed plan caps the emails received each month, from 250 to 5,000.',
        '**Best for:** QA teams testing their own sign-up, login and password reset flows.',
      ],
    },

    { kind: 'h2', id: 'compared', text: 'Email APIs for AI agents compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Email APIs for AI agents. Prices in US dollars a month from each provider’s own pages, as listed on 23 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['By hand: a shared mailbox a person checks', 'Judgement on every reply', 'Your team’s hours', 'Falls behind an agent’s speed and volume', 'A few emails a day'],
        [
          'Inboxes for agents: AgentMail, Resend Inboxes, Nylas',
          'An inbox per agent in one call, with threads',
          'AgentMail: free for 3, $20 for 10, $2 each after\nResend: 3 included, $1 each after\nNylas: free for 3, $49 for 50',
          'AgentMail: email only\nResend: received mail uses send quota\nNylas: IMAP from $15',
          'Agents that live in email',
        ],
        [
          'Sending APIs that receive: Postmark, Mailgun, Amazon SES',
          'Sending at volume, inbound parsed to your code',
          'Postmark: $16.50 for 10,000\nMailgun: $35 for 50,000\nSES: $0.10 per 1,000',
          'No inbox per agent; threads are your code',
          'High-volume senders with engineers to spare',
        ],
        [
          'Test inboxes: MailSlurp',
          'Email and text codes in one test account',
          'Free for 250 received, then $19.99 to $199',
          'Received mail capped per month',
          'QA on your own sign-up',
        ],
        [
          'Obsession (ours): [Email](/email), [Phone](/phone), [Browser](/browser), [Inbox agent](/blueprints/inbox-agent)',
          'An inbox per agent, plus a number and a browser under one identity, every event in one log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Says it’s an AI to a person; stops at identity checks and CAPTCHAs',
          'Agents that sign up, take text codes and read every reply',
        ],
      ],
    },

    { kind: 'h2', id: 'cost', text: 'What 20 or 1,000 agent inboxes cost' },
    {
      kind: 'p',
      text: 'Inbox prices pull apart as a fleet grows. Taking 2 example fleets, each priced on the cheapest plan its provider lists for it, before taxes and any volume deal:',
    },
    {
      kind: 'table',
      caption: 'Example inputs. Each provider’s listed plans and extra-inbox prices, 23 November 2026. Obsession’s plan fee covers usage at its list rates up to $20 on Developer and $588 on Scale',
      cols: ['Provider', '20 inboxes, 20,000 emails', '1,000 inboxes, 100,000 emails'],
      rows: [
        ['AgentMail', '$60: Developer $20, 10 extra inboxes and 10,000 extra emails at $2 each', '$1,900: Startup $200, 850 extra inboxes at $2'],
        ['Resend', '$37: Pro $20, 17 extra inboxes at $1', '$1,032: Pro $35, 997 extra inboxes at $1'],
        ['Nylas', '$49: Pro, up to 50 agent accounts', '$469: Pro $49, 950 extra accounts at $0.40, 50,000 extra emails'],
        ['Obsession', '$20: Developer covers the $18 of usage', '$499: Scale covers the $540 of usage'],
      ],
    },
    {
      kind: 'p',
      text: 'At 10,000 inboxes, before email volume, the same listed prices come to $19,900 a month on AgentMail, $10,017 on Resend, $4,029 on Nylas and $4,911 on Obsession’s Scale plan. At that size AgentMail’s bill is about $239,000 a year, before any agent needs a phone number. Postmark, Mailgun and SES price sending and receiving, with no inbox to buy, so they sit outside this table.',
    },

    { kind: 'h2', id: 'second-code', text: 'When the code comes by text' },
    {
      kind: 'p',
      text: 'An agent signing up to a supplier portal, a software trial or a booking site often meets 2 checks in a row: a link by email, then a code by text. An email API answers the first. For the second, the agent needs a phone number. Where the site remembers the device, it also needs a browser that stays signed in, so tomorrow starts without the checks.',
    },
    {
      kind: 'art',
      caption: 'One agent signs up, confirms by email, takes the text code and is still signed in the next morning, every step in one log. Larkfield is an invented company.',
      art: {
        kind: 'log',
        title: 'Signing up to a supplier portal',
        who: 'Buyer agent at larkfield.example',
        rows: [
          { time: '09:00:02', text: 'Registration form sent', detail: 'portal.supplier.example', tone: 'info' },
          { time: '09:00:09', text: 'Email received: Confirm your address', detail: 'Link opened 3 s later', tone: 'ok' },
          { time: '09:00:15', text: 'Text received: Your code is 482910', detail: 'Code entered, account active', tone: 'ok' },
          { time: '09:01:40', text: 'Trade price list saved', detail: '1,240 items, screenshot kept', tone: 'ok' },
          { time: 'Next day 07:00', text: 'Still signed in', detail: 'No new code needed', tone: 'ok' },
        ],
        foot: 'Email, text and browser steps share one identity, so each check finds the address and number it expects.',
      },
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: phone numbers, inboxes, browsers and sandboxes on one API and one bill. Its [email API for AI agents](/email) gives each agent an inbox in one call. The inbox sends and receives, keeps every thread and attachment, and reads verification codes and confirmation links out of each email. A persona puts that inbox, a US or UK number and a browser that keeps its logins under one identity, free while it waits. Every email, text and page lands in one event log.',
    },
    {
      kind: 'p',
      text: '[Obsession’s API and MCP](/developers) give an agent each piece in one call, the same over MCP, the HTTP API and the TypeScript and Python SDKs.',
    },
    {
      kind: 'list',
      items: [
        '**obsession.inboxes.create()** gives the agent its own address. Each new email reaches your webhook as email.received, about 50 ms after it lands.',
        '**obsession.numbers.create({ country: "US" })** gives it a number. Each text arrives as sms.received.',
        '**obsession.personas.create({ inbox: true, phone: "US", browser: true })** puts the inbox, number and browser under one identity.',
      ],
    },
    {
      kind: 'p',
      text: 'An inbox is $0.50 a month and email $0.40 per 1,000, sent or received. A US number is $2 a month and a text $0.015. The Free plan includes 3 inboxes, 3,000 emails and 1 number ([every rate](/pricing/rates)). Teams who don’t write code can run the [Inbox agent](/blueprints/inbox-agent) blueprint instead. It answers every email on its own address from your help pages and rules, and hands the rest to a person in Slack with a draft.',
    },
    {
      kind: 'cta',
      text: 'Give every agent its own inbox, plus a number for text codes and a browser that stays signed in, in one call. Free plan, no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which to choose, by job' },
    {
      kind: 'p',
      text: 'Use Obsession when your agent needs an inbox and one more piece, such as a number for text codes or a browser that stays signed in. For email alone:',
    },
    {
      kind: 'list',
      items: [
        '**An inbox per agent, email only:** AgentMail, with an SMTP relay and an MCP server on every plan.',
        '**The lowest price per extra inbox:** Resend, at $1 a month once a team is on a paid plan.',
        '**Agents that book meetings:** Nylas, with a calendar beside each agent’s inbox.',
        '**A reply agent on one domain:** Postmark, for its clean reply text, or Mailgun for routing rules.',
        '**The lowest price per email, with engineers to build the rest:** Amazon SES.',
        '**QA on your own sign-up and password reset flows:** MailSlurp.',
      ],
    },
    {
      kind: 'p',
      text: 'An agent that signs in to websites needs a browser too, and [the best browser for AI agents](/blog/best-browser-for-ai-agents) compares 7 cloud browsers on price per hour and per GB. [The AI agent infrastructure stack](/blog/ai-agent-infrastructure-stack) sets out every layer an agent can need, and [how to build an AI agent from scratch](/blog/how-to-build-an-ai-agent-from-scratch) wires the first tools. [Obsession vs AgentMail](/compare/obsession-vs-agentmail) compares the two inboxes line by line, and [AgentMail, Twilio, Browserbase and E2B in one API](/compare/agentmail-twilio-browserbase-e2b) prices 4 bills against one.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about email APIs for AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best email API for AI agents?',
          a: 'It depends on the job. AgentMail, Resend Inboxes and Nylas Agent Accounts give each agent its own inbox. Postmark, Mailgun and Amazon SES send at volume and pass incoming mail to your code, and MailSlurp is built for testing sign-ups. When the agent also needs a phone number for text codes and a browser that stays signed in, Obsession puts all three under one identity.',
        },
        {
          q: 'What is the best email service for AI agents that need their own inbox?',
          a: 'One that creates an inbox per agent in one call and posts each new email to a webhook. As listed on 23 November 2026, AgentMail charges $20 a month for 10 inboxes and Nylas $49 for 50. Resend charges $1 for each extra inbox on a paid plan, and Obsession $0.50 an inbox a month.',
          link: { label: 'Email API for AI agents', to: '/email' },
        },
        {
          q: 'Can an AI agent have its own email address?',
          a: 'Yes. An inbox API creates an address with its own mailbox, so the agent sends from it, receives replies and reads confirmation links. With your own domain and its SPF, DKIM and DMARC records, the agent sends from your company’s domain.',
        },
        {
          q: 'How does an AI agent receive email?',
          a: 'Through a webhook or a WebSocket. The service calls your app the moment an email lands, with its thread and attachments, and your code passes it to the agent. Sending APIs such as Postmark and Mailgun parse mail sent to your domain the same way, and Amazon SES delivers it to an S3 bucket or an SNS topic.',
        },
        {
          q: 'Is there a free email API for AI agents?',
          a: 'Several have free plans. As listed on 23 November 2026, AgentMail, Resend and Nylas each include 3 inboxes and 3,000 emails a month. Obsession’s Free plan includes 3 inboxes, 3,000 emails, 1 phone number and 10 browser hours, with no credit card.',
        },
        {
          q: 'Can an email API receive verification codes for an AI agent?',
          a: 'It receives codes and links sent by email. Many sign-ups also send a code by text, which needs a phone number. Obsession reads the code out of each email and gives the same agent a number, so both arrive as events at your webhook.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about another service comes from that service’s own pricing, product and documentation pages as listed on 23 November 2026, with prices in US dollars as shown that day. We did not run the services. The fleet costs apply each provider’s listed plans to example inputs. Larkfield and every row in its picture are invented.',
    },
  ],

  sources: [
    { title: 'AgentMail home page', publisher: 'AgentMail', url: AGENTMAIL },
    { title: 'Pricing', publisher: 'AgentMail', url: AGENTMAIL_PRICING },
    { title: 'Announcing Inboxes', publisher: 'Resend', url: RESEND_INBOXES, date: '2026-10-22' },
    { title: 'Receiving emails', publisher: 'Resend documentation', url: RESEND_RECEIVING },
    { title: 'Pricing', publisher: 'Resend', url: RESEND_PRICING },
    { title: 'Agent Accounts', publisher: 'Nylas', url: NYLAS_AGENTS },
    { title: 'Pricing', publisher: 'Nylas', url: NYLAS_PRICING },
    { title: 'Inbound email', publisher: 'Postmark', url: POSTMARK_INBOUND },
    { title: 'Pricing', publisher: 'Postmark', url: POSTMARK_PRICING },
    { title: 'Pricing', publisher: 'Mailgun', url: MAILGUN_PRICING },
    { title: 'Amazon SES pricing', publisher: 'Amazon Web Services', url: SES_PRICING },
    { title: 'Email receiving with Amazon SES', publisher: 'Amazon Web Services documentation', url: SES_RECEIVING },
    { title: 'MailSlurp home page', publisher: 'MailSlurp', url: MAILSLURP },
    { title: 'Pricing', publisher: 'MailSlurp', url: MAILSLURP_PRICING },
  ],

  related: [
    '/email',
    'best-browser-for-ai-agents',
    'best-sandbox-for-ai-agents',
    'ai-agent-infrastructure-stack',
    '/compare/obsession-vs-agentmail',
    '/compare/agentmail-twilio-browserbase-e2b',
    '/blueprints/inbox-agent',
    '/developers',
  ],
}
