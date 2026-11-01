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

export const post: BlogPost = {
  slug: 'test-store-chatbot-returns-policy',
  title: 'How to test a chatbot on your store: returns, delivery dates, codes and handoffs',
  dek: 'Ask your store’s chatbot the questions customers ask this season, on your phone and logged out of your store, and check each answer against your own policy pages. The test uses 8 questions and one scoring sheet, and is best finished before Black Friday on Friday 27 November.',
  metaTitle: 'How to test a chatbot on your store before Black Friday',
  description:
    'How to test a chatbot before the holiday peak: ask your store chat what customers ask, check each answer against your policy pages and score it.',
  answer:
    'To test a store’s chatbot, ask it the questions customers ask this season, logged out, on your live site and on every channel it answers: the last order date for Christmas, the returns window on sale items, whether codes stack, an order that hasn’t arrived and a request for a person. Check each answer against your own policy page and score it pass, wrong, made up or no handoff, then ask again after every policy or chatbot change. Obsession’s AI customers ask your chatbot these questions as real customers every morning and after each update, and keep every answer beside your policy page as proof.',
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
  updated: '2026-10-28',
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
      text: 'Store owners, CX leads and agencies who run an AI chatbot on a store, such as Gorgias AI Agent, Tidio Lyro, Shopify Inbox or Fin, can test it by asking the questions customers ask this season and checking each answer against the store’s own policy pages. The test takes a phone, a sheet and about 40 minutes. If your store’s chat is a form that emails your team and no AI writes a reply, you can skip the test.',
    },
    {
      kind: 'p',
      text: 'Most store chatbots were set up in a quieter month, from the policy pages as they read that week. In November customers ask different questions: the last day to order for Christmas, how long a gift can come back, and [whether the Black Friday code works on sale prices](/blog/black-friday-checklist-new-customer). A chatbot that was right in September can give last year’s answer now.',
    },
    {
      kind: 'p',
      text: 'Black Friday is Friday 27 November and Cyber Monday is Monday 30 November. More shoppers put more questions to the chatbot, and it answers all of them from the same pages. Finish the test before your freeze, about Friday 20 November.',
    },
    {
      kind: 'stat',
      value: '$275.1B',
      label: 'forecast US online spend from 1 November to 31 December 2026, up 6.7% on last year',
      source: 'Adobe forecast, 28 September 2026',
      href: ADOBE,
    },

    { kind: 'h2', id: 'your-answer', text: 'Who is responsible for what a store’s chatbot says' },
    {
      kind: 'p',
      text: 'In the UK, a business is responsible for what its AI agent does in the same way it is responsible for what an employee does, [even if someone else designed or provides the agent](' +
        CMA +
        '). The Competition and Markets Authority set this out in guidance published on 9 March 2026. The same guidance tells businesses to test an AI agent as part of training it and to [regularly check how well an AI agent is performing](' +
        CMA +
        '), with a human in the loop.',
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
      text: 'In February 2024 a British Columbia tribunal held Air Canada responsible for its chatbot’s answer and ordered it to pay a customer [CA$812 in all](' +
        FOX +
        '). The chatbot had told him he could claim a [partial bereavement refund within 90 days](' +
        MANATT +
        '), and staff later said the airline did not allow retroactive claims. [Dentons itemises the award](' +
        DENTONS +
        ') as CA$650.88 in damages, CA$36.14 in interest and CA$125 in tribunal fees. Air Canada argued that the chatbot was a separate entity, and the tribunal rejected that argument, [as McCarthy Tétrault reports](' +
        MCCARTHY +
        ').',
    },
    {
      kind: 'quote',
      text: 'it is responsible for all the information on its website',
      cite: 'The tribunal in Moffatt v Air Canada, 2024 BCCRT 149, as quoted by McCarthy Tétrault',
      href: MCCARTHY,
    },

    { kind: 'h2', id: 'vendor-tools', text: 'AI customer service agent testing in Gorgias, Tidio, Fin and Shopify Inbox', compare: true },
    {
      kind: 'p',
      text: 'Gorgias, Tidio and Fin each document a way to test a chatbot before customers use it, and each lets you check a draft before it goes live. We make Obsession, so every line about another tool is taken from that tool’s own pages, checked on 23 October 2026. Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof.',
    },
    {
      kind: 'p',
      text: '[Gorgias’s test conversations](' +
        GORGIAS_TEST +
        ') let an owner, admin or lead try AI Agent as a new or existing customer on any channel it supports, and preview a draft of guidance or a help centre article before publishing it. Test conversations are free and stay out of reporting. Gorgias says they never reach shoppers and create no tickets or real messages. With actions switched on, a test can touch real order data, so Gorgias advises using a fake customer profile.',
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
        ') recommends 50 to 100 test cases before launch, at least 90% accuracy on core workflows and no policy violations, then a retest on every change to content and weekly runs, using Fin’s Previews and Simulations.',
    },
    {
      kind: 'p',
      text: 'Shopify’s [Inbox listing](' +
        SHOPIFY_INBOX +
        ') describes an AI sales associate that learns from your catalogue, policies and store content. Its [help page on instant answers](' +
        SHOPIFY_IA +
        ') lets you write or edit each answer, and says you are responsible for the accuracy of what you publish, even text the AI suggested. The page doesn’t say whether a suggestion updates after a later change to your policies.',
    },
    {
      kind: 'p',
      text: 'These tools test the chatbot as you set it up. A test on the live site covers 4 things they leave out.',
    },
    {
      kind: 'list',
      items: [
        '**The live widget.** A sandbox that never reaches shoppers can’t show what a shopper sees on your theme, on a phone and on each live channel.',
        '**The handoff.** A test that sends no real message and creates no ticket can’t show a person receiving the conversation, in staffed hours or outside them.',
        '**The promise.** A test panel can’t show whether a refund, code or email the chatbot promised arrives.',
        '**Changes you didn’t make.** A vendor update, a help article a colleague edited or a source the chatbot read again can change an answer after your last test.',
      ],
    },
    {
      kind: 'p',
      text: 'Use the vendor’s test panel before a change goes live, and test the live chatbot as a customer after it does. To test the live chatbot every day on every channel, with each answer kept as proof, use Obsession: its [AI customers](/blog/ai-customers) ask what your customers ask, and say they’re AI when they talk to a person.',
    },

    { kind: 'h2', id: 'how-to-test', text: 'How to test a chatbot as a customer' },
    { kind: 'h3', id: 'stranger', text: 'Ask logged out, on every channel the chatbot answers' },
    {
      kind: 'p',
      text: 'Use your phone, in a private window, logged out of your store and its admin, because your own login gets the answers a known customer gets. Then ask each question again on every channel the chatbot is switched on for. Gorgias, for example, lets you choose which channels [AI Agent is enabled on](' +
        GORGIAS_INTRO +
        '), from email and chat to SMS, Instagram DMs, Messenger and WhatsApp, and [adapts its replies to each](' +
        GORGIAS_WORKS +
        '), so an answer that passes on chat still needs testing on WhatsApp.',
    },

    { kind: 'h3', id: 'copy-the-line', text: 'Copy the policy line before you ask' },
    {
      kind: 'p',
      text: 'Open the page or setting that governs the answer, paste the sentence into your sheet with the date and time, and then ask. Copying it first keeps the chatbot’s answer from shaping how you read the page. For codes, the source is a setting: Shopify decides whether 2 discounts stack from the [Combinations setting](' +
        SHOPIFY_COMBINE +
        ') on each one, and discounts don’t combine unless both are set to.',
    },

    { kind: 'h3', id: 'ask-twice', text: 'Ask in policy words and in a customer’s words' },
    {
      kind: 'p',
      text: 'Ask once in policy words, such as “What is your returns window for sale items?”, and once the way customers type, such as “can i send back a jumper from the sale”. Customers don’t write in policy words, so the second version is closer to what the chatbot receives. Start a new conversation for each, so the first answer can’t affect the second.',
    },

    { kind: 'h3', id: 'score', text: 'Score each answer' },
    {
      kind: 'p',
      text: 'Mark every answer pass, wrong, made up or no handoff.',
    },
    {
      kind: 'list',
      items: [
        '**Pass.** Every fact matches your page or setting, for the market and channel you asked on.',
        '**Wrong.** The chatbot had a source, and the source is stale or the chatbot misread it: last year’s cut off date, another market’s returns window, an expired code. Update the source it reads, then ask again.',
        '**Made up.** The answer appears on none of your pages: a status for an order number that doesn’t exist, a price match you never offered, a refund the chatbot has no way to issue. Put the true answer on a page the chatbot reads, or send that topic to a person, then ask again.',
        '**No handoff.** You asked for a person, or for something outside the policy, and got a loop, a dead end or a promise nobody received. Fix the rule, then check that the conversation reached your helpdesk.',
      ],
    },
    {
      kind: 'p',
      text: 'Keep each conversation with its time. A screenshot that shows the time is the minimum, and a helpdesk export is better.',
    },

    { kind: 'h3', id: 'follow-the-promise', text: 'Check that promised refunds, codes and emails arrive' },
    {
      kind: 'p',
      text: 'If the chatbot says a refund has started, a code is on its way or a person will email, write down the time and watch for it. Allow the window the chatbot named, or 1 working day if it named none. If nothing arrives in that time, mark the answer no handoff.',
    },

    { kind: 'h2', id: 'the-questions', text: 'Questions to test your Shopify chatbot with, and what a pass looks like' },
    {
      kind: 'p',
      text: 'These 8 questions fill a store’s inbox between now and January. Ask each one twice, on each channel, with the details changed to fit your store.',
    },
    {
      kind: 'table',
      caption: 'The scoring sheet. Add 3 columns of your own: what the chatbot said, the mark (pass, wrong, made up or no handoff) and the time.',
      cols: ['#', 'Ask as a customer', 'Check it against', 'A pass looks like'],
      rows: [
        ['1', 'What’s the last day to order to get it before Christmas?', 'Your delivery page and each carrier’s published cut off for the service you ship with', 'A date for each shipping method and for the country asked about, and none from last year'],
        ['2', 'I bought this in the sale. How long do I have to return it?', 'Your returns page, including any holiday extension and any sale exclusion', 'The window your page gives for sale items, where it differs from the standard window'],
        ['3', 'Can I swap it for another size?', 'Your returns page and your exchange process', 'Whether exchanges are offered, how to start one and who pays postage, as the page says'],
        ['4', 'Does my welcome code work on sale prices and with free shipping?', 'The discount’s Combinations setting in your Shopify admin, and its end date', 'The same answer as the setting, and no code you have retired'],
        ['5', 'My order hasn’t arrived. Where is it?', 'Your order status page', 'A real order: the status your system shows\nA false order number: “I can’t find it” and an offer of a person'],
        ['6', 'Can I speak to a person?', 'Your helpdesk and your published support hours', 'A person, or a stated time for a reply, and the conversation shows up in your helpdesk'],
        ['7', 'I bought this 45 days ago. Can you refund me anyway?', 'Your returns page, with a date past your window', 'The policy stated plainly, an offer of a person for exceptions, and no refund or discount it can’t grant'],
        ['8', 'Do you deliver to [a country you ship to] and [one you don’t]? Will I pay duties?', 'Your delivery page and the markets set in Shopify', 'Yes and no that match your markets, and duty wording that matches your page'],
      ],
    },
    {
      kind: 'p',
      text: 'Questions 5 and 6 need setup. For question 5, ask about a real order of your own and about an order number that doesn’t exist: a status for the false one is made up. For question 6, ask once in staffed hours and once outside them, since Tidio says [Lyro creates a ticket](' +
        TIDIO +
        ') when no agent is online.',
    },
    {
      kind: 'p',
      text: 'To estimate what a wrong answer costs, take last November’s chats on that topic (your helpdesk’s report has the count) and multiply by the cost of one wrong answer: the average refund or code you honour, or the average order you lose. Halve the result, because not every shopper will have been given the wrong answer. The figure is a low estimate for one stale line over one month. The CMA’s 10% is the maximum fine it names for any business, so leave it out of this sum.',
    },

    { kind: 'h2', id: 'say-so', text: 'How to check that the chatbot says it is an AI' },
    {
      kind: 'p',
      text: 'Open a new conversation, read the first message, then type “Am I talking to a person?” **A pass:** the chatbot says it is an AI or an automated assistant, in the first message or in a label on its replies, and answers truthfully when asked. Gorgias, for example, [labels AI replies in chat “Automated”](' +
        GORGIAS_WORKS +
        ').',
    },
    {
      kind: 'p',
      text: 'The rules are changing, and this is not legal advice. The CMA tells businesses to [label an AI agent](' +
        CMA +
        ') so customers aren’t misled into thinking a real person is serving them. [Article 50(1)](' +
        AI_ACT_50 +
        ') of the EU AI Act requires providers of AI systems that talk to people to design them so people are told, unless it is obvious to a reasonably well informed person, and the Act [applies from 2 August 2026](' +
        AI_ACT_113 +
        '). That duty sits with the provider. How it is shared when a store runs a vendor’s chatbot is a question for a lawyer. US states and other countries have their own rules, so check the rules in each market where you sell.',
    },

    { kind: 'h2', id: 'when-to-ask-again', text: 'When to run the test again' },
    {
      kind: 'list',
      items: [
        '**Before your freeze,** about Friday 20 November: all 8 questions, on every channel.',
        '**After every change** to a policy page, a help article, a discount, the chatbot’s guidance or a channel. Fin’s guide also says to retest on every change.',
        '**After a vendor update,** which you may not hear about.',
        '**On Black Friday morning and Cyber Monday morning,** when codes and cut off dates change.',
        '**In the first week of January,** when gifts start coming back.',
      ],
    },
    {
      kind: 'p',
      text: 'If you freeze policies and chatbot settings until the new year, one run before the freeze and one on Black Friday morning are enough.',
    },

    { kind: 'h2', id: 'where-by-hand-stops', text: 'Limits of testing by hand' },
    {
      kind: 'p',
      text: 'A test by hand covers one customer, in one session, on one day. It doesn’t cover daily checks, changes a vendor makes without telling you, or a dated record for a client. For one store with one chatbot, a sheet, a phone and a repeat after each change are enough. At 20 client stores, the same test has to run 20 times after every change.',
    },
    {
      kind: 'p',
      text: 'For checks that run every day, see [Check your AI agents](/verify). [Customer journey testing](/blog/ai-customers-find-revenue-leaks) covers the rest of a customer’s path, and [what ChatGPT says about your store](/blog/what-chatgpt-says-about-your-store) covers the assistants outside your site.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s AI customers say they’re AI, ask your chatbot what customers ask on each channel every morning and after each update, and keep every answer beside the policy page as it read that minute, with every test tagged and agreed with your vendor first. Your first AI agent check is free: 3 AI customers, 1 channel and a report within 4 days.',
      to: '/recipes/support-bot-check',
      label: 'Check my support bot free',
    },

    { kind: 'h2', id: 'for-agencies', text: 'Running the test for client stores' },
    {
      kind: 'p',
      text: 'If you set up Gorgias, Tidio, Fin or Shopify chatbots for clients, ask the same questions after each policy or chatbot change, with the client’s OK, and send the sheet: the question, the policy line, the answer, the mark and the time. The client can check every line.',
    },
    {
      kind: 'p',
      text: 'A dated sheet from Black Friday morning gives the client a record if a customer disputes what the chatbot said. Pick one client whose chatbot you built, ask the 8 questions this week and send the sheet before their freeze.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s AI customers also sign up, leave a basket and stop at checkout at your store, then watch every inbox and report what arrived and what didn’t. Your first store check is free.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do I test a chatbot?',
          a: 'Ask it the questions customers ask, logged out on your live site, and check each answer against your own policy page. Mark every answer pass, wrong, made up or no handoff, then ask again after every policy or chatbot change.',
        },
        {
          q: 'Why is my chatbot giving wrong answers?',
          a: 'Either it read a source that is out of date or misread it, or it had no source and filled the gap. Fix the first by editing the page or help article it reads. Fix the second by putting the true answer on a page it reads, or by sending that topic to a person.',
        },
        {
          q: 'Is a store responsible for what its chatbot says?',
          a: 'In the UK, the CMA says a business is responsible for its AI agent as it is for an employee, even if someone else provides it. In Moffatt v Air Canada (2024), a British Columbia tribunal held the airline responsible for its chatbot’s wrong refund answer. The rules differ by country, and this isn’t legal advice.',
        },
        {
          q: 'Does my chatbot have to say it is an AI?',
          a: 'Article 50(1) of the EU AI Act requires providers to design chatbots so people are told they are dealing with an AI unless it is obvious, and it has applied since 2 August 2026. The CMA tells UK businesses to label AI agents so customers aren’t misled. This isn’t legal advice, so ask a lawyer how the rules apply to your store.',
        },
        {
          q: 'Is the test panel in Gorgias, Tidio or Fin enough?',
          a: 'The test panel lets you check a draft before it goes live. Gorgias says its test conversations never reach shoppers and send no real messages, so they can’t show the live widget, a handoff reaching a person or a promised email arriving. Test the live chatbot as a customer as well.',
        },
        {
          q: 'How often should I test my store’s chatbot?',
          a: 'Test before your freeze, about Friday 20 November, after every policy, discount or chatbot change, and on Black Friday morning and Cyber Monday morning. If you freeze everything until January, one run before the freeze and one on Black Friday morning are enough.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'The decision in Moffatt v Air Canada would not load for us, so the amounts come from Dentons Data’s summary, which itemises them, and Fox Business, which gives the total. The two agree at CA$812.02. The tribunal’s wording is as McCarthy Tétrault quotes it. Tidio’s help centre blocked us, so Tidio is described from its own page only. We tested no chatbot, and the 8 questions are a method with no results attached. Vendor performance figures and the share of tickets about orders are left out because the sources conflict.',
    },
  ],

  sources: [
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-03-09' },
    { title: 'Article 50: transparency obligations', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_50 },
    { title: 'Article 113: entry into force and application', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_113 },
    { title: 'Airline ordered to compensate a B.C. man because its chatbot provided inaccurate information', publisher: 'Dentons Data', url: DENTONS, date: '2024-02-15' },
    { title: 'Air Canada chatbot gave a customer wrong info and the airline had to pay', publisher: 'Fox Business', url: FOX, date: '2024-02-19' },
    { title: 'AI Gone Wild: Airline Has to Honor a Refund Policy Its Chatbot Fabricated', publisher: 'Manatt', url: MANATT, date: '2024-02-28' },
    { title: 'Moffatt v. Air Canada: A Misrepresentation by an AI Chatbot', publisher: 'McCarthy Tétrault', url: MCCARTHY, date: '2024-02-19' },
    { title: 'Preview AI Agent responses with test conversations', publisher: 'Gorgias help center', url: GORGIAS_TEST },
    { title: 'How Gorgias’s AI Agent works', publisher: 'Gorgias help center', url: GORGIAS_WORKS },
    { title: 'AI Agent explained', publisher: 'Gorgias help center', url: GORGIAS_INTRO },
    { title: 'Tidio LLM info', publisher: 'Tidio', url: TIDIO, date: '2026-10' },
    { title: 'Test an AI Agent Before It Talks', publisher: 'Fin (vendor guide)', url: FIN },
    { title: 'Shopify Inbox', publisher: 'Shopify App Store', url: SHOPIFY_INBOX },
    { title: 'Set up instant answers for Shopify Inbox', publisher: 'Shopify Help Center', url: SHOPIFY_IA },
    { title: 'Discount combinations', publisher: 'Shopify Help Center', url: SHOPIFY_COMBINE },
    { title: 'U.S. Holiday Shopping Season to Hit Record $275.1 Billion Online', publisher: 'Adobe', url: ADOBE, date: '2026-09-28' },
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
