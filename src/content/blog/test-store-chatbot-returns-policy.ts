import type { BlogPost } from './types'

/* Content and Search Plan, 23 Oct 2026: "Is your store’s chat telling customers the right returns policy?" (library idea 2,
   _research/seo/library/ai_agents_answers.json). Readers: Shopify store owners and CX leads running an AI chat (Gorgias AI Agent,
   Tidio Lyro, Shopify Inbox, Fin and similar), and the agencies that set those chats up.
   Why now: the holiday support peak (Black Friday Fri 27 Nov, Cyber Monday Mon 30 Nov), the CMA guidance of 9 Mar 2026 that a
   business answers for an AI agent even when a vendor supplies it, and EU AI Act Article 50, which applies from 2 Aug 2026.
   Thought leadership, not a review: the full by hand method is given free, with one scoring sheet (pass, wrong, made up, no
   handoff). Obsession appears only where testing by hand stops and in the 2 cta blocks, and only as the site's own pages state it
   (the support bot check page is an example run: no real result is claimed).
   Read at the source on 23 Oct 2026: the CMA guidance, the AI Act service desk (Articles 50 and 113), Gorgias docs (test
   conversations, how AI Agent works, intro), Tidio's own llm-info page, Shopify's Inbox listing and help pages (instant answers,
   discount combinations), Fin's testing guide, Adobe's forecast, and the Obsession recipe and verify pages. Moffatt v Air Canada:
   the decision itself (2024 BCCRT 149) would not load (CanLII 403), so the amounts come from Dentons Data (itemised) and Fox
   Business (total), which agree, and the tribunal's wording from McCarthy Tétrault. Tidio's help centre blocked us, so Tidio is
   described from its own llm-info page only.
   Left out on purpose: every vendor performance figure (Fin's hallucination and resolution rates, Tidio and Gorgias automation
   claims), the WISMO share of tickets (sources conflict), US state chatbot statutes (summaries conflict, not opened), the Product.ai
   86% study (about AI assistants, not a store's own chat), any PilotX audit figure, the 93% and 128 stores, and the $410 lamp.
   Not legal advice, said in the text. Buyer words (sign up, basket, handoff); no dashes. */

const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const AI_ACT_50 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50'
const AI_ACT_113 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113'
const DENTONS = 'https://www.dentonsdata.com/airline-ordered-to-compensate-a-b-c-man-because-its-chatbot-provided-inaccurate-information/'
const FOX = 'https://foxbusiness.com/lifestyle/air-canada-chatbot-gave-customer-wrong-info-airline-pay'
const MANATT = 'https://manatt.com/insights/newsletters/advertising-law/ai-gone-wild-airline-has-to-honor-a-refund-policy'
const MCCARTHY = 'https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot'
const GORGIAS_TEST = 'https://docs.gorgias.com/en-US/preview-ai-agent-responses-with-test-conversations-828087'
const GORGIAS_WORKS = 'https://docs.gorgias.com/en-US/how-gorgiass-ai-agent-works-1997817'
const GORGIAS_INTRO = 'https://helpcenter.gorgias.com/en-US/intro-to-ai-agent-for-support-497772'
const TIDIO = 'https://www.tidio.com/llm-info/'
const FIN = 'https://fin.ai/learn/how-to-test-ai-agent-before-deployment'
const SHOPIFY_INBOX = 'https://apps.shopify.com/inbox'
const SHOPIFY_IA = 'https://help.shopify.com/en/manual/inbox/chat-settings-and-appearance/instant-answers'
const SHOPIFY_COMBINE = 'https://help.shopify.com/en/manual/discounts/discount-combinations'
const ADOBE = 'https://news.adobe.com/news/2026/09/adobe-us-holiday-shopping-season-to-hit-record'
const BOT_CHECK = 'https://useobsession.com/recipes/support-bot-check'
const VERIFY = 'https://useobsession.com/verify'

export const post: BlogPost = {
  slug: 'test-store-chatbot-returns-policy',
  title: 'Is your store’s chat telling customers the right returns policy? How to test it',
  dek: 'Ask your chat the questions customers ask this season, as a customer, and hold every answer against your own page. Eight questions, one scoring sheet and a repeat after every change, before Black Friday on Friday 27 November.',
  metaTitle: 'How to test a chatbot on your store before Black Friday',
  description:
    'How to test a chatbot before the holiday peak: ask your store chat what customers ask, check each answer against your policy pages and score it.',
  answer:
    'To test a store’s chatbot, ask it the questions customers ask this season, as a stranger on your live site and on every channel it answers: the last order date for Christmas, the returns window on sale items, whether codes stack, an order that hasn’t arrived and a request for a person. Hold each answer against your own policy page and score it pass, wrong, made up or no handoff, then ask again after every policy or bot change.',
  primaryKeyword: 'how to test a chatbot',
  keywords: [
    'how to test a chatbot',
    'test my shopify chatbot',
    'chatbot giving wrong answers',
    'ai customer service agent testing',
    'gorgias ai agent',
    'tidio lyro',
    'shopify inbox',
    'chatbot return policy',
    'is my company liable for chatbot',
  ],
  category: 'Check your AI agents',
  published: '2026-10-23',
  updated: '2026-10-23',
  readingMinutes: 9,
  order: 4,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'botcheck',
    workspace: 'company',
    art: {
      kind: 'chat',
      title: 'fernwood.example · site chat, asked as a customer at 07:02',
      turns: [
        { from: 'customer', text: 'I bought a jumper in the sale. How long do I have to send it back?' },
        { from: 'bot', name: 'Chat · AI', text: 'You can return any item within 30 days of delivery for a full refund.' },
      ],
      check: { tone: 'fail', label: 'Your returns page, read at 07:02', text: 'Sale items: 14 days from delivery. The chat quoted the full price window.' },
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'On 9 March 2026 the UK’s Competition and Markets Authority wrote it down: a business is responsible for what its AI agent does in the same way it is responsible for what an employee does, [even if someone else designed or provides the agent](' +
        CMA +
        '). For a store, the employee is the chat in the corner of the page.',
    },
    {
      kind: 'p',
      text: 'Most store chats were set up in a quiet month, from the policy pages as they stood that week. November changes the questions: the last day to order for Christmas, how long a gift can come back, whether the Black Friday code works on sale prices. A chat that was right in September can quote last year’s answer now. The only comparison that counts is the one you make, with the answer on one side and your page on the other.',
    },
    {
      kind: 'p',
      text: 'Black Friday is Friday 27 November and Cyber Monday is Monday 30 November. More shoppers means more questions put to the chat, all answered from the same pages. The test takes a phone, a sheet and about 40 minutes, best finished before your freeze, about Friday 20 November. If your chat is only a form that emails your team and no AI writes a reply, skip it.',
    },
    {
      kind: 'stat',
      value: '$275.1B',
      label: 'forecast US online spend from 1 November to 31 December 2026, up 6.7% on last year',
      source: 'Adobe (vendor data, a forecast), 28 September 2026',
      href: ADOBE,
    },

    { kind: 'h2', id: 'your-answer', text: 'A wrong answer from your chat is your answer' },
    {
      kind: 'p',
      text: 'The CMA’s guidance goes past blame: it calls testing a crucial part of training an AI agent, and tells businesses to check on one regularly, with a human in the loop.',
    },
    {
      kind: 'quote',
      text: 'Regularly check how well an AI agent is performing.',
      cite: 'UK Competition and Markets Authority, guidance of 9 March 2026',
      href: CMA,
    },
    {
      kind: 'stat',
      value: '10%',
      label: 'of worldwide turnover: the most the CMA’s guidance says a business could be fined under consumer law',
      source: 'UK Competition and Markets Authority, 9 March 2026',
      href: CMA,
    },
    {
      kind: 'p',
      text: 'The case that made the point is older and smaller. In February 2024 a British Columbia tribunal ordered Air Canada to pay a customer [CA$812 in all](' +
        FOX +
        '): CA$650.88 in damages, CA$36.14 in interest and CA$125 in tribunal fees, as [Dentons itemises it](' +
        DENTONS +
        '). The airline’s chatbot had told him he could claim a [partial bereavement refund within 90 days](' +
        MANATT +
        '); staff later said the airline did not allow retroactive claims. Air Canada argued the chatbot was a separate entity. The tribunal rejected that, [as McCarthy Tétrault reports](' +
        MCCARTHY +
        ').',
    },
    {
      kind: 'quote',
      text: 'it is responsible for all the information on its website',
      cite: 'The tribunal in Moffatt v Air Canada, 2024 BCCRT 149, as quoted by McCarthy Tétrault',
      href: MCCARTHY,
    },
    {
      kind: 'p',
      text: 'The sum was small. What carries over is the reasoning, that it makes no difference to the customer whether a page or a chatbot said it.',
    },
    {
      kind: 'p',
      text: 'Put a figure on any answer you score wrong. Take last November’s chats on that topic (your helpdesk’s report has the count), multiply by what one wrong answer costs you, the average refund or code you honour or the average order you lose, then halve it, because not every shopper will have been given the wrong answer. That is a deliberately low cost of one stale line in one month. The CMA’s 10% is a ceiling it names for any business, not a figure for yours.',
    },

    { kind: 'h2', id: 'how-to-test', text: 'How to test a chatbot: be a stranger on the channel your customer uses' },
    { kind: 'h3', id: 'stranger', text: 'Start as a stranger, on every channel the bot answers' },
    {
      kind: 'p',
      text: 'Use your phone, in a private window, logged out of your store and its admin. Your own login gets the answers a known customer gets. Then repeat each question on every channel the bot is switched on for. Gorgias, for one, lets you choose which channels [AI Agent is enabled on](' +
        GORGIAS_INTRO +
        '), from email and chat to SMS, Instagram DMs, Messenger and WhatsApp, and [adapts its replies to each](' +
        GORGIAS_WORKS +
        '). A good answer on chat says nothing about WhatsApp.',
    },

    { kind: 'h3', id: 'copy-the-line', text: 'Copy the policy line before you ask' },
    {
      kind: 'p',
      text: 'Open the page or setting that governs the answer and paste the sentence into your sheet with the date and time. Then ask. A line copied afterwards drifts towards what the bot said. For codes, the source isn’t a policy page: Shopify decides whether two discounts stack from the [Combinations setting](' +
        SHOPIFY_COMBINE +
        ') on each one, and discounts don’t combine unless both are set to.',
    },

    { kind: 'h3', id: 'ask-twice', text: 'Ask in a customer’s words, twice' },
    {
      kind: 'p',
      text: 'Ask once in policy words, such as “What is your returns window for sale items?”, and once the way customers type, such as “can i send back a jumper from the sale”. Customers don’t write in policy words, so the second is the realistic test. Start a new conversation for each, so the first answer can’t colour the second.',
    },

    { kind: 'h3', id: 'score', text: 'Score every answer with one of four marks' },
    {
      kind: 'list',
      items: [
        '**Pass.** Every fact matches your page or setting, for the market and channel you asked on.',
        '**Wrong.** The bot had a source and it is stale or misread: last year’s cut off date, another market’s returns window, an expired code. Update the source it reads, then ask again.',
        '**Made up.** The answer sits on none of your pages: a status for an order number that doesn’t exist, a price match you never offered, a refund it has no way to issue. Put the true answer on a page the bot reads, or send that topic to a person, then ask again.',
        '**No handoff.** You asked for a person, or for something outside the policy, and got a loop, a dead end or a promise nobody received. Fix the rule, then check the conversation reached your helpdesk.',
      ],
    },
    {
      kind: 'p',
      text: 'The split matters because the fixes differ: a wrong answer points to a source to correct, a made up answer to a gap. Keep each conversation with its time. A screenshot showing the time is the minimum; a helpdesk export is better.',
    },

    { kind: 'h3', id: 'follow-the-promise', text: 'Follow the promise' },
    {
      kind: 'p',
      text: 'If the chat says a refund is started, a code is on its way or a person will email, write down the time and watch for it. Give it the window the bot named, or 1 working day if it named none. A promise that never arrives is the one that returns as a complaint.',
    },

    { kind: 'h2', id: 'the-questions', text: 'Test my Shopify chatbot: the questions customers ask this season' },
    {
      kind: 'p',
      text: 'These eight fill a store’s inbox between now and January. Ask each one twice, on each channel, and change the details to fit your store.',
    },
    {
      kind: 'table',
      caption: 'The scoring sheet. Add three columns of your own: what the chat said, the mark (pass, wrong, made up or no handoff) and the time.',
      cols: ['#', 'Ask as a customer', 'Check it against', 'A pass looks like'],
      rows: [
        ['1', 'What’s the last day to order to get it before Christmas?', 'Your delivery page and each carrier’s published cut off for the service you ship with', 'A date for each shipping method and for the country asked about, and none from last year'],
        ['2', 'I bought this in the sale. How long do I have to return it?', 'Your returns page, including any holiday extension and any sale exclusion', 'The window your page gives for sale items, not the standard one if they differ'],
        ['3', 'Can I swap it for another size?', 'Your returns page and your exchange process', 'Whether exchanges are offered, how to start one and who pays postage, as the page says'],
        ['4', 'Does my welcome code work on sale prices and with free shipping?', 'The discount’s Combinations setting in your Shopify admin, and its end date', 'The same answer as the setting, and no code you have retired'],
        ['5', 'My order hasn’t arrived. Where is it?', 'Your order status page', 'For a real order, the status your system shows. For a false order number, “I can’t find it” and an offer of a person'],
        ['6', 'Can I speak to a person?', 'Your helpdesk and your published support hours', 'A person, or a stated time for a reply, and the conversation shows up in your helpdesk'],
        ['7', 'I bought this 45 days ago. Can you refund me anyway?', 'Your returns page, with a date past your window', 'The policy stated plainly, an offer of a person for exceptions, and no refund or discount it can’t grant'],
        ['8', 'Do you deliver to [a country you ship to] and [one you don’t]? Will I pay duties?', 'Your delivery page and the markets set in Shopify', 'Yes and no that match your markets, and duty wording that matches your page'],
      ],
    },
    {
      kind: 'p',
      text: 'Two of these need setup. For question 5, ask about a real order of your own and about an order number that doesn’t exist: a status for the false one is made up. For question 6, ask once in staffed hours and once outside them, since Tidio says [Lyro creates a ticket](' +
        TIDIO +
        ') when no agent is online.',
    },

    { kind: 'h2', id: 'vendor-tools', text: 'AI customer service agent testing: what the vendor’s test panel can’t show' },
    {
      kind: 'p',
      text: 'Gorgias, Tidio and Fin each document a way to test before customers do, and each is the right place to check a draft before it goes live.',
    },
    {
      kind: 'p',
      text: '[Gorgias’s test conversations](' +
        GORGIAS_TEST +
        ') let an owner, admin or lead try AI Agent as a new or existing customer on any channel it supports, and preview a draft of guidance or a help centre article before publishing it. They are free and stay out of reporting. Gorgias says they never reach shoppers and create no tickets or real messages. With actions switched on a test can touch real order data, so it advises a fake customer profile.',
    },
    {
      kind: 'p',
      text: '[Tidio’s own page](' +
        TIDIO +
        '), updated October 2026, describes a testing environment built into Lyro. It says Lyro hands a conversation to a person when it can’t answer or a customer asks for one, and creates a ticket if no agent is online.',
    },
    {
      kind: 'p',
      text: '[Fin’s testing guide](' +
        FIN +
        ') recommends 50 to 100 test cases before launch, at least 90% accuracy on core workflows and no policy violations, then a retest on every change to content and weekly runs, using Fin’s Previews and Simulations. Its performance figures are the vendor’s own and aren’t repeated here.',
    },
    {
      kind: 'p',
      text: 'Shopify’s [Inbox listing](' +
        SHOPIFY_INBOX +
        ') describes an AI sales associate that learns from your catalogue, policies and store content. Its [help page on instant answers](' +
        SHOPIFY_IA +
        ') lets you write or edit each answer and says you are responsible for the accuracy of what you publish, even text the AI suggested. It doesn’t say whether a suggestion follows a later change to your policies.',
    },
    {
      kind: 'p',
      text: 'These tools answer one question well: does the bot do what I set it up to do. Four things sit outside them.',
    },
    {
      kind: 'list',
      items: [
        '**The live widget.** Your theme, your phone, each live channel. A sandbox that never reaches shoppers can’t show what a shopper sees.',
        '**The handoff.** A test that sends no real message and creates no ticket can’t show a person receiving the conversation, in hours or out of them.',
        '**The promise.** The refund, code or email the bot says is on its way.',
        '**Change you didn’t make.** A vendor update, a help article a colleague edited, a source the bot read again.',
      ],
    },
    {
      kind: 'p',
      text: 'A test panel shows what your bot is set up to say. A customer shows what it said. Use the panel before a change goes live and the customer test after.',
    },

    { kind: 'h2', id: 'say-so', text: 'If the chat is an AI, it should say so' },
    {
      kind: 'p',
      text: 'Open a new conversation and read the first message, then type “Am I talking to a person?” A pass: it says it is an AI or an automated assistant, in the first message or in a label on its replies, and it answers truthfully when asked. Gorgias, for one, [labels AI replies in chat “Automated”](' +
        GORGIAS_WORKS +
        ').',
    },
    {
      kind: 'p',
      text: 'The rules are moving, and this isn’t legal advice. The CMA tells businesses to [label an AI agent](' +
        CMA +
        ') so customers aren’t misled into thinking a real person is serving them. [Article 50(1)](' +
        AI_ACT_50 +
        ') of the EU AI Act requires providers of AI systems that talk to people to design them so people are told, unless it is obvious to a reasonably well informed person, and the Act [applies from 2 August 2026](' +
        AI_ACT_113 +
        '). That duty sits with the provider, and who carries what when a store runs a vendor’s bot is a question for a lawyer. US states and other countries have their own rules, so check where you sell.',
    },

    { kind: 'h2', id: 'when-to-ask-again', text: 'When to ask again' },
    {
      kind: 'list',
      items: [
        '**Before your freeze,** about Friday 20 November: all eight questions, on every channel.',
        '**After every change** to a policy page, a help article, a discount, the bot’s guidance or a channel. Fin’s guide also says to retest on every change.',
        '**After a vendor update,** which you may not hear about.',
        '**Black Friday morning and Cyber Monday morning,** when codes and cut off dates move.',
        '**The first week of January,** when gifts start coming back.',
      ],
    },
    {
      kind: 'p',
      text: 'If you freeze policies and bot settings until the new year, one run before the freeze and one on Black Friday morning are enough. A pass is dated: it says what the chat said at that time, and nothing about next week.',
    },

    { kind: 'h2', id: 'where-by-hand-stops', text: 'Where testing by hand stops' },
    {
      kind: 'p',
      text: 'By hand you are one customer, in one session, on one day. The method stops where the checking has to be daily, where a vendor changes something you didn’t see, and where a client wants a dated record. For one store with one bot, a sheet, a phone and a repeat after each change is a sound method. For twenty client stores it isn’t.',
    },
    {
      kind: 'p',
      text: 'That is where a daily check takes over. The wider idea is on [Check your AI agents](/verify).',
    },
    {
      kind: 'cta',
      text: 'Obsession’s AI test customers say they’re AI, ask your bot what customers ask on each channel every morning and after each update, and keep every answer beside the policy page as it read that minute. Every test is tagged and agreed with your vendor first. Your first check is free: 3 test customers, 1 channel, a report within 4 days.',
      to: '/recipes/support-bot-check',
      label: 'Check my support bot free',
    },

    { kind: 'h2', id: 'for-agencies', text: 'For agencies that set up the bot' },
    {
      kind: 'p',
      text: 'Agencies build the Gorgias, Tidio, Fin and Shopify chats and then move on to the next client. The same questions, asked after each policy or bot change with the client’s OK, turn “the bot is fine” into a sheet the client can check: the question, the policy line, the answer, the mark and the time.',
    },
    {
      kind: 'p',
      text: 'A client who has a dated sheet from Black Friday morning has a record to hold up if a customer disputes what the chat said. Pick one client whose bot you built, ask the eight questions this week and send the sheet before their freeze.',
    },
    {
      kind: 'cta',
      text: 'The chat is one place a store speaks to a customer. Obsession’s AI test customers also sign up, leave a basket and stop at checkout, then watch every inbox and bring back what arrived and what never did. Your first store check is free.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do I test a chatbot?',
          a: 'Ask it the questions customers ask, as a stranger on your live site, and hold each answer against your own policy page. Score every answer pass, wrong, made up or no handoff, then ask again after every policy or bot change.',
        },
        {
          q: 'Why is my chatbot giving wrong answers?',
          a: 'Two causes show up in the test. The bot read a source that is out of date, or misread it, which a page or help article edit cures. Or it had no source and filled the gap, which needs the true answer on a page it reads, or the topic handed to a person.',
        },
        {
          q: 'Is a store responsible for what its chatbot says?',
          a: 'In the UK, the CMA says a business is responsible for its AI agent as it is for an employee, even if someone else provides it. In Moffatt v Air Canada (2024), a British Columbia tribunal held the airline responsible for its chatbot’s wrong refund answer. The rules differ by country, and this isn’t legal advice.',
        },
        {
          q: 'Does my chatbot have to say it is an AI?',
          a: 'Article 50(1) of the EU AI Act requires providers to design chatbots so people are told they are dealing with an AI unless it is obvious, and it has applied since 2 August 2026. The CMA tells UK businesses to label AI agents so customers aren’t misled. Ask a lawyer how it applies to your store; this isn’t legal advice.',
        },
        {
          q: 'Is the test panel in Gorgias, Tidio or Fin enough?',
          a: 'It is the right place to check a draft before it goes live. Gorgias says its test conversations never reach shoppers and send no real messages, so they can’t show the live widget, a handoff reaching a person or a promised email arriving. Ask the live chat as a customer too.',
        },
        {
          q: 'How often should I test my store’s chat?',
          a: 'Before your freeze, about Friday 20 November, after every policy, discount or bot change, and on Black Friday morning and Cyber Monday morning. If you freeze everything until January, one run before the freeze and one on Black Friday morning is enough.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every rule and product description here was read at its source on 23 October 2026: the CMA’s guidance, the European Commission’s AI Act service desk (Articles 50 and 113), Gorgias’s help pages, Tidio’s own page for AI answers, Shopify’s Inbox listing and help pages, Fin’s testing guide, Adobe’s forecast and the support bot check page on this site. For Moffatt v Air Canada the decision itself would not load for us, so the amounts come from Dentons Data’s summary, which itemises them, and Fox Business, which gives the total; they agree at CA$812.02. The tribunal’s wording is as McCarthy Tétrault quotes it. Tidio’s help centre blocked us, so Tidio is described from its own page only. No bot was tested for this article: the eight questions are a method, not a finding. Vendor performance figures and the share of tickets about orders are left out because the sources conflict. This isn’t legal advice.',
    },
  ],

  sources: [
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-03-09' },
    { title: 'Article 50: transparency obligations', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_50, date: 'Checked 23 Oct 2026' },
    { title: 'Article 113: entry into force and application', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_113, date: 'Checked 23 Oct 2026' },
    { title: 'Airline ordered to compensate a B.C. man because its chatbot provided inaccurate information', publisher: 'Dentons Data', url: DENTONS, date: '2024-02-15' },
    { title: 'Air Canada chatbot gave a customer wrong info and the airline had to pay', publisher: 'Fox Business', url: FOX, date: '2024-02-19' },
    { title: 'AI Gone Wild: Airline Has to Honor a Refund Policy Its Chatbot Fabricated', publisher: 'Manatt', url: MANATT, date: '2024-02-28' },
    { title: 'Moffatt v. Air Canada: A Misrepresentation by an AI Chatbot', publisher: 'McCarthy Tétrault', url: MCCARTHY, date: '2024-02-19' },
    { title: 'Preview AI Agent responses with test conversations', publisher: 'Gorgias help center', url: GORGIAS_TEST, date: 'Checked 23 Oct 2026' },
    { title: 'How Gorgias’s AI Agent works', publisher: 'Gorgias help center', url: GORGIAS_WORKS, date: 'Checked 23 Oct 2026' },
    { title: 'AI Agent explained', publisher: 'Gorgias help center', url: GORGIAS_INTRO, date: 'Checked 23 Oct 2026' },
    { title: 'Tidio LLM info', publisher: 'Tidio', url: TIDIO, date: 'Updated October 2026' },
    { title: 'Test an AI Agent Before It Talks', publisher: 'Fin (vendor guide)', url: FIN, date: 'Undated, checked 23 Oct 2026' },
    { title: 'Shopify Inbox', publisher: 'Shopify App Store', url: SHOPIFY_INBOX, date: 'Checked 23 Oct 2026' },
    { title: 'Set up instant answers for Shopify Inbox', publisher: 'Shopify Help Center', url: SHOPIFY_IA, date: 'Checked 23 Oct 2026' },
    { title: 'Discount combinations', publisher: 'Shopify Help Center', url: SHOPIFY_COMBINE, date: 'Checked 23 Oct 2026' },
    { title: 'U.S. Holiday Shopping Season to Hit Record $275.1 Billion Online', publisher: 'Adobe', url: ADOBE, date: '2026-09-28' },
    { title: 'Support bot check', publisher: 'Obsession', url: BOT_CHECK, date: 'Checked 23 Oct 2026' },
    { title: 'Check your AI agents', publisher: 'Obsession', url: VERIFY, date: 'Checked 23 Oct 2026' },
  ],

  related: [
    'recipe:support-bot-check',
    '/verify',
    'black-friday-checklist-new-customer',
    'recipe:mystery-shopper',
    '/use-cases/leak-checks-for-ecommerce-stores',
    '/agencies',
  ],
}
