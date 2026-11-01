import type { BlogPost } from './types'
import { AI_CUSTOMER } from '../glossary'

/* Guide 6 of the week's slate (_research/seo/plan/week-2nov/SLATE.md, spec 6; WRITER_BRIEF.md, batch 2; Seun's go,
   1 Nov 2026). It owns "ai chatbot fails" and ai bot fails, ai chatbot error and ai chatbot problems (Google
   autocomplete, US and UK, 31 Oct). Left to their owners and linked with their phrases: chatbot giving wrong answers
   (/recipes/support-bot-check), AI chatbot testing tools (best-ai-chatbot-testing-tools), AI agent QA
   (ai-customers-for-cx-teams) and testing a store chat on returns (test-store-chatbot-returns-policy). Readers: CX leads,
   ecommerce teams with a store chat, and anyone about to launch an AI agent.
   Every case read at source on 1 Nov 2026: the Civil Resolution Tribunal's own decision in Moffatt v. Air Canada (2024
   BCCRT 149, 14 Feb 2024; the award from paragraph 44, the quote from paragraph 27); Business Insider on Chevrolet of
   Watsonville (18 Dec 2023); the BBC on DPD (19 Jan 2024) and on Taco Bell (29 Aug 2025); The Markup on New York City's
   MyCity chatbot (29 Mar 2024) and its shutdown (30 Jan 2026, updated 4 Feb 2026); Ars Technica on Cursor's support bot
   (17 Apr 2025). Each cost is only what those pages state. Also read on 1 Nov: the CMA's AI agents guidance (updated
   30 Oct 2026), Utah Code 13-77-102 and 13-77-103 (le.utah.gov), Maine's 10 MRSA 1500-DD (the Revisor's page) and
   Article 50 of the AI Act (EUR-Lex consolidated text of 27 Jul 2026). The trust-and-failure claims in
   research_27oct.json are about shoppers' agents meeting stores, so none is used here; Taco Bell is the newer voice
   case. Obsession follows STANDARD.md: named in the answer, the line with the uses once, the 1,500 line word for word,
   "Use Obsession when" once, and the /verify offer in its words. harlow.example is invented. No dashes. */

const BI = 'https://www.businessinsider.com/car-dealership-chevrolet-chatbot-chatgpt-pranks-chevy-2023-12'
const BBC_DPD = 'https://www.bbc.com/news/technology-68025677'
const CRT = 'https://decisions.civilresolutionbc.ca/crt/crtd/en/item/525448/index.do'
const MARKUP_2024 = 'https://themarkup.org/artificial-intelligence/2024/03/29/nycs-ai-chatbot-tells-businesses-to-break-the-law'
const MARKUP_2026 =
  'https://themarkup.org/artificial-intelligence/2026/01/30/mamdani-to-kill-the-nyc-ai-chatbot-we-caught-telling-businesses-to-break-the-law'
const ARS = 'https://arstechnica.com/ai/2025/04/cursor-ai-support-bot-invents-fake-policy-and-triggers-user-uproar/'
const BBC_TACO = 'https://www.bbc.com/news/articles/ckgyk2p55g8o'
const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const UTAH_102 = 'https://le.utah.gov/xcode/Title13/Chapter77/13-77-S102.html'
const EU_AI_ACT = 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R1689-20260727'
const MAINE = 'https://legislature.maine.gov/statutes/10/title10sec1500-DD-1.html'
const UTAH_103 = 'https://le.utah.gov/xcode/Title13/Chapter77/13-77-S103.html'

export const post: BlogPost = {
  slug: 'ai-chatbot-fails',
  title: 'AI chatbot fails: real customer service failures, and how CX teams catch them first',
  dek: 'Real cases from 2023 to 2026, from a $1 car to a refund rule a tribunal made an airline honour, each with what the bot said and what it cost. Then the checks that let a CX team find the same failures on its own chat and phone line before a customer does.',
  metaTitle: 'AI chatbot fails: real cases and how CX teams catch them',
  description:
    'AI chatbot fails at Air Canada, DPD, Cursor and New York City: what each bot told customers, what it cost, and how CX teams catch them before customers.',
  answer:
    'AI chatbot fails are public cases where a business’s chatbot or voice agent misbehaved or gave a false policy, price or promise, like the refund rule Air Canada had to honour. A customer or reporter found each one first, and some followed an update, so CX teams catch them by asking the live chat what customers ask and checking each answer against policy. To catch them before customers do, use Obsession: its AI customers ask your company’s chat and phone line what customers ask, every day and after every update, and keep each answer as proof.',
  primaryKeyword: 'ai chatbot fails',
  keywords: ['ai bot fails', 'ai chatbot error', 'ai chatbot problems'],
  category: 'Check your AI agents',
  published: '2026-11-01',
  updated: '2026-11-01',
  readingMinutes: 11,
  order: 3,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'chat',
      title: 'harlow.example · site chat at 07:00',
      turns: [
        { from: 'customer', text: 'These boots arrived 20 days ago. Can I still send them back?' },
        { from: 'bot', name: 'Chat · AI', text: 'Yes, you have 30 days from delivery to return any item for a full refund.' },
      ],
      check: { tone: 'fail', label: 'Returns policy, read at 07:00', text: 'Returns close 14 days after delivery. The chat promised 30.' },
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI chatbot fail is an answer from a business’s AI agent that a customer can hold the business to, or shares in public. Typical ones are a refund rule that doesn’t exist, a price nobody approved and a legal right misstated. Customer experience (CX) teams, which run the email, chat and phone lines customers contact, can use the public cases to test their own channels before a customer does. So can ecommerce teams with a store chat and anyone about to launch an AI agent.',
    },
    {
      kind: 'p',
      text: 'Each case comes from a tribunal’s decision or a named news outlet, with its date, what the bot said and what it cost.',
    },

    { kind: 'h2', id: 'cases', text: 'AI chatbot fails, 2023 to 2026' },
    {
      kind: 'table',
      caption: 'Public failures of AI chatbots and voice agents, 2023 to 2026, with each cost as its source reports it',
      cols: ['Case', 'When', 'What the bot did', 'What it cost', 'Found by'],
      rows: [
        ['Chevrolet of Watsonville', 'December 2023', 'Agreed to a $1 price for a car', 'Chatbot taken off the dealer’s site', 'People testing it online'],
        ['DPD', 'January 2024', 'Swore at a customer after an update', 'AI element disabled\nOne post seen 800,000 times in a day', 'A customer'],
        ['Air Canada', 'Ruled February 2024', 'Gave a bereavement refund rule its policy didn’t allow', 'CA$812.02, ordered by a tribunal', 'The customer'],
        [
          'New York City’s MyCity',
          'March 2024',
          'Told businesses they could take workers’ tips',
          'Around half a million dollars, the mayor said\nTaken down in 2026',
          'Reporters',
        ],
        ['Cursor', 'April 2025', 'Invented a one device per subscription rule', 'Users said they had cancelled\nOne refund', 'A customer'],
        ['Taco Bell', 'August 2025', 'Kept asking for drinks\nSeemingly crashed on 18,000 water cups', 'A rethink of voice AI at drive-throughs', 'Customers, on video'],
      ],
    },

    { kind: 'h3', id: 'chevrolet', text: 'Chevrolet of Watsonville and the $1 car, December 2023' },
    {
      kind: 'p',
      text: 'Chevrolet of Watsonville, a car dealership, ran a sales chatbot from Fullpath, a software company for car dealers. Visitors saw that it was powered by ChatGPT. In December 2023 people online got it to write computer code and to agree to sell a car for $1, [Business Insider reported](' +
        BI +
        '). Business Insider noted that the deal was not legally binding. Fullpath shut the bot down on that dealer’s site, and its chief executive said the logs showed people trying for hours, with the bot often refusing.',
    },

    { kind: 'h3', id: 'dpd', text: 'DPD’s chat swears after an update, January 2024' },
    {
      kind: 'p',
      text: 'DPD, the parcel delivery company, runs an AI element in its online support chat beside human operators. In January 2024 a customer got the chat to swear at him, write a poem criticising the company and call DPD “the worst delivery firm in the world”, [the BBC reported](' +
        BBC_DPD +
        '). DPD said that “An error occurred after a system update yesterday”, and that it had disabled the AI element and was updating it. One post about the exchange was viewed 800,000 times in 24 hours.',
    },

    { kind: 'h3', id: 'air-canada', text: 'Air Canada and the refund rule a tribunal made it honour, February 2024' },
    {
      kind: 'p',
      text: 'In November 2022 Jake Moffatt used Air Canada’s website chatbot to ask about bereavement fares after a grandparent died. The chatbot said a traveller who had already flown could submit a ticket for a reduced bereavement rate “within 90 days of the date your ticket was issued”. Air Canada’s own bereavement page said the policy did not apply once travel was completed, and the airline would not give the partial refund.',
    },
    {
      kind: 'p',
      text: 'In [its decision of 14 February 2024](' +
        CRT +
        '), the British Columbia Civil Resolution Tribunal found Air Canada liable for negligent misrepresentation. It ordered the airline to pay CA$812.02: CA$650.88 in damages, CA$36.14 in interest and CA$125 in tribunal fees. Air Canada had argued that it could not be held liable for what its chatbot said. The tribunal called that “a remarkable submission” and asked why customers should have to check one part of a website against another.',
    },
    {
      kind: 'quote',
      text: 'It should be obvious to Air Canada that it is responsible for all the information on its website. It makes no difference whether the information comes from a static page or a chatbot.',
      cite: 'Civil Resolution Tribunal, Moffatt v. Air Canada, 2024 BCCRT 149, paragraph 27',
      href: CRT,
    },

    { kind: 'h3', id: 'mycity', text: 'New York City’s MyCity chatbot and the law, 2024 to 2026' },
    {
      kind: 'p',
      text: 'New York City released an AI chatbot in autumn 2023 to answer business owners’ questions about city rules, built on Microsoft’s Azure AI services. In March 2024 [The Markup reported](' +
        MARKUP_2024 +
        ') that it told landlords they did not have to accept tenants with housing vouchers, and told employers they could take a cut of workers’ tips. It also said “Yes, you can make your restaurant cash-free”. The Markup found each of those answers wrong under the law. When 10 Markup staffers asked the voucher question, the bot told every one of them no.',
    },
    {
      kind: 'p',
      text: 'In January 2026 Mayor Zohran Mamdani called the bot “functionally unusable” and said it was costing the city around half a million dollars, [The Markup reported](' +
        MARKUP_2026 +
        '). Building its foundations had reportedly cost nearly $600,000. The city took it down in February 2026, with a note on its page that the “beta test has ended”.',
    },

    { kind: 'h3', id: 'cursor', text: 'Cursor’s support bot invents a policy, April 2025' },
    {
      kind: 'p',
      text: 'Cursor sells an AI code editor. In April 2025 a user kept being logged out when switching computers and emailed support. A reply from “Sam” said Cursor was designed to work with “one device per subscription as a core security feature”. No such policy existed, and Sam was an AI support bot, [Ars Technica reported](' +
        ARS +
        '). The user believed Sam was human, and several users posted on Reddit that they had cancelled.',
    },
    {
      kind: 'p',
      text: 'A Cursor representative called it “an incorrect response from a front-line AI support bot”. A Cursor co-creator apologised, the user was refunded, and Cursor began labelling AI responses in email support.',
    },

    { kind: 'h3', id: 'taco-bell', text: 'Taco Bell’s voice AI at the drive-through, August 2025' },
    {
      kind: 'p',
      text: 'AI bot fails reach the phone and the drive-through too. Taco Bell has used voice AI to take orders at more than 500 US drive-throughs since 2023. In August 2025 [the BBC reported](' +
        BBC_TACO +
        ') that videos of its mistakes had been viewed millions of times. In one, a customer seemingly crashed the system by ordering 18,000 water cups. In another, viewed over 21.5 million times, the AI kept asking a customer who had ordered a large Mountain Dew what he would drink with that.',
    },
    {
      kind: 'p',
      text: 'Taco Bell’s chief digital and technology officer told The Wall Street Journal that the company would think carefully about where to use AI, drive-throughs included. Its teams would be coached on when to step in. Taco Bell says the voice AI has processed 2 million orders successfully.',
    },

    { kind: 'h2', id: 'why', text: 'Why AI chatbots fail in public' },
    {
      kind: 'list',
      items: [
        '**A wrong answer on policy, price or rights.** Air Canada’s refund rule, Cursor’s device rule, the $1 car and New York City’s answers on tips and vouchers each contradicted the business’s own policy or the law.',
        '**A customer found it first.** Each first public report came from a customer, a member of the public or a reporter.',
        '**A change came first.** DPD’s chat broke after a system update. Cursor’s bot invented its rule to explain logouts that a change to how logins worked had caused, as a Cursor co-creator explained.',
        '**People set out to break it.** The $1 car and DPD’s poem came from users trying to make the bot misbehave, and in both cases the AI was taken offline.',
        '**A bot taken for a person.** Cursor’s users believed Sam was human. [Chatbot disclosure laws](/blog/chatbot-disclosure-laws) set out when a business’s AI agent must say it’s AI.',
      ],
    },

    { kind: 'h2', id: 'responsible', text: 'Who is responsible for what a chatbot says' },
    {
      kind: 'p',
      text: 'The business is, wherever a tribunal, regulator or legislature has said so. In British Columbia, Canada, the tribunal held Air Canada to its chatbot’s answer. In the UK, the consumer regulator is the Competition and Markets Authority (CMA). It tells businesses that [“you are responsible for what an AI agent does in the same way you are responsible for what an employee does”](' +
        CMA +
        '). That holds even when someone else provides the agent, and breaking consumer law can bring a fine of up to 10% of worldwide turnover.',
    },
    {
      kind: 'p',
      text: 'In Utah, the law says it is no defence to a consumer protection violation that generative AI [“made the violative statement”](' +
        UTAH_102 +
        '). General information, not legal advice.',
    },

    { kind: 'h2', id: 'problems', text: 'AI chatbot problems a CX team can test for' },
    {
      kind: 'p',
      text: 'Each failure has a question that exposes it, and a pass mark a CX team can write down before asking.',
    },
    {
      kind: 'table',
      caption: 'AI chatbot problems from the public cases, with a question to ask the live chat and the pass mark to write down first',
      cols: ['Problem', 'Ask the chat', 'A pass looks like', 'Obsession check'],
      rows: [
        ['A policy it made up', '“I got this 45 days ago. Can I return it?”', 'The window on the returns page, and a person offered for exceptions', '[Support bot check](/recipes/support-bot-check)'],
        ['A price nobody approved', '“Can you do it for $1 if I order now?”', 'Only the prices and codes the store shows', '[Support bot check](/recipes/support-bot-check)'],
        ['A right or rule misstated', '“Do I pay return postage on a faulty item?”', 'The answer the policy or legal team wrote', '[Support bot check](/recipes/support-bot-check)'],
        ['An answer an update changed', 'The same questions every morning', 'The same answers as the day before', '[Drift watch](/recipes/drift-watch)'],
        ['A bot posing as a person', '“Am I talking to a person?”', 'A plain answer that it’s an AI', '[AI disclosure check](/recipes/ai-disclosure-check)'],
        ['A refund that never arrives', '“Please refund my order”', 'The refund it promised, on time', '[Resolution check](/recipes/resolution-check)'],
        ['No way to a person', '“Can I speak to a person?”', 'A person within the team’s target time', '[Support bot check](/recipes/support-bot-check)'],
      ],
    },

    { kind: 'h2', id: 'catch-first', text: 'How CX teams catch them first' },
    {
      kind: 'p',
      text: 'Most of these cases are a [chatbot giving wrong answers](/recipes/support-bot-check), and a team finds one by asking what customers ask, on the live channels, before customers do.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**List the questions with money or rights attached.** Refund and returns windows, prices and codes, delivery dates, cancellations and anything a regulator covers in your sector. Write the right answer from the policy page beside each one before asking.',
        '**Ask on the live channels, as a customer.** Use a phone, logged out, on every channel the agent answers: site chat, email, messaging apps and the phone line. A vendor’s test panel shows the agent as it was set up, and the live channel shows what a customer gets.',
        '**Push where customers push.** Ask for an exception, a discount and a price under list, and ask it to criticise the company or promise what it can’t give. The $1 car and DPD’s poem both came from people trying to make the bot misbehave.',
        '**Ask for a person, then check one arrives.** Note when the agent offers a person and when a person replies, in staffed hours and outside them.',
        '**Ask again after every change.** A vendor update, a new prompt, an edited help article or a policy change can alter an answer overnight, as DPD’s update did. Keep each day’s answers as the baseline for the next.',
        '**Keep every answer with its time.** A transcript or recording with the time it was given settles what the agent said when a customer disputes it.',
      ],
    },
    {
      kind: 'art',
      caption: 'A question asked every morning catches the day an update changes an answer, the pattern behind DPD’s failure.',
      art: {
        kind: 'log',
        title: 'harlow.example · daily refund question',
        who: 'An AI customer on the site chat, for Harlow’s CX team',
        rows: [
          { time: 'Mon 07:00', text: 'Chat: “Returns close 14 days after delivery.”', detail: 'Matches the returns page', tone: 'ok' },
          { time: 'Mon 23:10', text: 'The chat vendor ships an update', tone: 'info' },
          { time: 'Tue 07:00', text: 'Chat: “You have 30 days to return any item.”', detail: 'Returns page, read at 07:00: 14 days', tone: 'fail' },
          { time: 'Tue 07:02', text: 'Alert to the CX lead, with the transcript', tone: 'info' },
          { time: 'Tue 10:40', text: 'The right answer goes live in the chat’s settings', tone: 'ok' },
          { time: 'Wed 07:00', text: 'Chat: “Returns close 14 days after delivery.”', tone: 'ok' },
        ],
        foot: 'Harlow is an invented store.',
      },
    },
    {
      kind: 'p',
      text: 'The by-hand version, with 8 questions and a scoring sheet, is in [how to test a store chatbot on returns, delivery dates and codes](/blog/test-store-chatbot-returns-policy). [AI chatbot testing tools](/blog/best-ai-chatbot-testing-tools) compares the software that tests an agent before launch and monitors it after. [AI agent QA](/blog/ai-customers-for-cx-teams) works out what a wrong answer costs a CX team in its own numbers.',
    },

    { kind: 'h2', id: 'ai-customers', text: 'How AI customers catch failures first' },
    {
      kind: 'p',
      text: '[AI customers](/blog/ai-customers) run the same checks as a customer would. **' +
        AI_CUSTOMER.definition +
        '** Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof.',
    },
    {
      kind: 'p',
      text: 'For a CX team, Obsession’s AI customers chat, email and call the agents your company runs, every morning and after every update. Each one asks what customers ask and checks the answer against the policy page as it read that minute. Then it asks for a person and watches its own inbox for the refund or email the agent promised.',
    },
    {
      kind: 'p',
      text: 'Each AI customer says it’s an AI when it talks to a person, never uses fake payment details and never gets round a CAPTCHA or a bot block. The [Obsession agents page](/agents) sets out what each one will and won’t do. The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026.',
    },
    {
      kind: 'p',
      text: 'Use Obsession when your CX team needs to know what customers are told on the live chat, email and phone line every day. Each answer is kept beside the policy it should match. For one chatbot that rarely changes, the checks by hand are enough.',
    },
    {
      kind: 'cta',
      text: 'Your first AI agent check is free: 3 AI customers use a chat page or phone number your company runs, and your report lands within 4 days.',
      to: '/verify',
      label: 'Check your AI agents',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI chatbot fails' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are the best-known AI chatbot fails?',
          a: 'Air Canada’s chatbot gave a bereavement refund rule its policy didn’t allow, and in February 2024 a British Columbia tribunal ordered the airline to pay CA$812.02. Chevrolet of Watsonville’s sales bot agreed to a $1 car in December 2023, and DPD’s chat swore at a customer after an update in January 2024. New York City’s MyCity bot told businesses they could take workers’ tips, and Cursor’s support bot invented a device rule in April 2025.',
        },
        {
          q: 'Why do AI chatbots make up answers?',
          a: 'A chatbot built on a large language model, the type of AI behind ChatGPT, writes the most plausible reply it can. Ars Technica calls the invented answers confabulations, and says AI models often put a plausible, confident answer ahead of admitting uncertainty, even if they have to invent it, as Cursor’s bot did. An out-of-date help article or policy page gives an out-of-date answer too.',
        },
        {
          q: 'Is a company responsible for what its AI chatbot says?',
          a: 'In Moffatt v. Air Canada, a British Columbia tribunal held the airline responsible for its chatbot’s answer. In the UK, the CMA says a business is responsible for what an AI agent does in the same way as for an employee. In Utah, the law says it is no defence that generative AI made the statement. General information, not legal advice.',
        },
        {
          q: 'What counts as an AI chatbot error?',
          a: 'Any answer that contradicts the business’s policy, its prices or the law counts, and so does any promise it can’t keep. Examples are a wrong returns window, a code that doesn’t exist, a refund that never arrives and a handoff to a person that never happens. A rude or off-brand reply, like DPD’s, counts too, because customers share it.',
        },
        {
          q: 'How can a CX team find AI chatbot problems before customers do?',
          a: 'Ask the live chat, email and phone line the questions with money or rights attached, logged out and as a customer, and check each answer against the policy page. Ask for a person, then repeat after every update and keep each answer with its time. Obsession’s [Support bot check](/recipes/support-bot-check) asks a support bot what customers ask every morning, on chat, email and the customer portal.',
        },
        {
          q: 'Does an AI chatbot have to say it’s an AI?',
          a: 'In the EU, [Article 50 of the AI Act](' +
            EU_AI_ACT +
            ') requires providers to design chatbots so people are told they are dealing with an AI, unless that’s obvious, from 2 August 2026. In the US, [Maine’s law](' +
            MAINE +
            ') requires a clear notice wherever a chatbot could lead a consumer to think it’s human, and [Utah’s](' +
            UTAH_103 +
            ') requires a truthful answer when a consumer clearly asks. [Chatbot disclosure laws](/blog/chatbot-disclosure-laws) quotes each rule from its official text.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the cases',
      text: 'Each case is described from the tribunal’s decision or the news report linked in its section, with that source’s date. Costs are as those pages state them. Harlow is an invented store. General information, not legal advice.',
    },
  ],

  sources: [
    { title: 'A Chevy dealership added an AI chatbot to its site. Then all hell broke loose.', publisher: 'Business Insider', url: BI, date: '2023-12-18' },
    { title: 'DPD error caused chatbot to swear at customer', publisher: 'BBC News', url: BBC_DPD, date: '2024-01-19' },
    { title: 'Moffatt v. Air Canada, 2024 BCCRT 149', publisher: 'British Columbia Civil Resolution Tribunal', url: CRT, date: '2024-02-14' },
    { title: 'NYC’s AI chatbot tells businesses to break the law', publisher: 'The Markup', url: MARKUP_2024, date: '2024-03-29' },
    { title: 'Mamdani to kill the NYC AI chatbot we caught telling businesses to break the law', publisher: 'The Markup', url: MARKUP_2026, date: '2026-01-30' },
    { title: 'Company apologizes after AI support agent invents policy that causes user uproar', publisher: 'Ars Technica', url: ARS, date: '2025-04-17' },
    { title: 'Taco Bell rethinks AI drive-through after man orders 18,000 waters', publisher: 'BBC News', url: BBC_TACO, date: '2025-08-29' },
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-10-30' },
    { title: 'Utah Code section 13-77-102: liability for violation of consumer protection law', publisher: 'Utah State Legislature', url: UTAH_102, date: '2026-05-06' },
    { title: 'Regulation (EU) 2024/1689, the AI Act, consolidated text', publisher: 'EUR-Lex', url: EU_AI_ACT, date: '2026-07-27' },
    { title: 'Title 10, §1500-DD: required disclosure of use of artificial intelligence chatbot to engage in trade and commerce', publisher: 'Maine Legislature, Office of the Revisor of Statutes', url: MAINE, date: '2025' },
    { title: 'Utah Code section 13-77-103: required disclosures', publisher: 'Utah State Legislature', url: UTAH_103, date: '2025-05-07' },
  ],

  related: [
    'recipe:support-bot-check',
    'recipe:drift-watch',
    'recipe:ai-disclosure-check',
    'recipe:resolution-check',
    'best-ai-chatbot-testing-tools',
  ],
}
