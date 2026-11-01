import type { BlogPost } from './types'
import { AI_CUSTOMER } from '../glossary'

/* Guide 7 of the week's slate (_research/seo/plan/week-2nov/SLATE.md, spec 7; WRITER_BRIEF.md, batch 2; Seun's go,
   1 Nov 2026). It owns "chatbot disclosure laws" and ai chatbot disclosure laws, bot disclosure law, california chatbot
   disclosure law and maine chatbot disclosure law (Google autocomplete, US and UK, 31 Oct). "How to test if a chatbot is
   AI" stays with /recipes/ai-disclosure-check and is linked with that phrase. Readers: CX and legal leads, and brands with
   a store chat or an AI phone line.
   The legal care of guide 3: general information, never legal advice, a jurisdiction named for every point, each law in
   its own words, never a verdict on a reader's own setup, and a plain not-legal-advice line (opening, last FAQ, note).
   Every text read on 1 Nov 2026 at its official source:
   - EU: Regulation (EU) 2024/1689 on EUR-Lex, consolidated text of 27 Jul 2026 (amended by Regulation (EU) 2026/1744):
     Articles 3(3), 3(4), 50(1), 50(5), 99(4), 99(6), 99(6a), 111(4) and 113. Article 50(1) is unamended.
   - UK: the CMA's "Complying with consumer law when using AI agents", updated 30 Oct 2026.
   - California: leginfo.legislature.ca.gov showed a Cloudflare bot check, so it was not passed. The same official text was
     read from the Legislature's own bulk data (downloads.leginfo.legislature.ca.gov, pubinfo_2025.zip, updated
     25 Oct 2026): BPC 17940 to 17943 (Stats. 2018, Ch. 892, unamended), BPC 22601 and 22602 (SB 243, Stats. 2025,
     Ch. 677, effective 1 Jan 2026), PUC 2874 (AB 2905, effective 1 Jan 2025), and AB 410's history (last action 29 Aug
     2025, held under submission in Senate Appropriations). The source links point at leginfo, where readers check it.
   - Maine: the Revisor's page for 10 MRSA 1500-DD (reallocated from 1500-Y), the chaptered law (PL 2025, c. 294, approved
     12 Jun 2025, no emergency clause), LD 1727's status page and the Legislature's home page for the First Special
     Session's general effective date, 24 Sep 2025.
   - Utah: le.utah.gov, Title 13 Chapter 77 (SB 226 of 2025, renumbered from chapter 75): 13-77-101 (amended 2026),
     103, 104 and 105, plus the enrolled SB 226.
   - Colorado: HB26-1263's page and its final act text (the signed act PDF is a scan): the 6-1-1701(3.5) definition and
     6-1-1708(3), from 1 Jan 2027.
   - US federal: FCC 24-17 (adopted 2 Feb, released 8 Feb 2024) and FCC 26-67 (adopted 30 Sep, released 1 Oct 2026,
     effective 30 days after Federal Register publication), with Brownstein Hyatt Farber Schreck (27 Oct 2026) for the
     date, 25 Nov 2026.
   Obsession is described in the words of /recipes/ai-disclosure-check, /verify and /agents (the site.ts lines), with no
   text or SMS claim. alder.example and birchwood.example are invented. No dashes. */

const EU_AI_ACT = 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R1689-20260727'
const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const CA_BOTS = 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=BPC&division=7.&title=&part=3.&chapter=6.&article='
const CA_AB410 = 'https://leginfo.legislature.ca.gov/faces/billHistoryClient.xhtml?bill_id=202520260AB410'
const CA_SB243 = 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=BPC&division=8.&title=&part=&chapter=22.6.&article='
const CA_PUC = 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PUC&sectionNum=2874.'
const MAINE = 'https://legislature.maine.gov/statutes/10/title10sec1500-DD-1.html'
const MAINE_LD = 'https://legislature.maine.gov/legis/bills/display_ps.asp?LD=1727&snum=132'
const MAINE_DATES = 'https://legislature.maine.gov/'
const UTAH_103 = 'https://le.utah.gov/xcode/Title13/Chapter77/13-77-S103.html'
const UTAH_101 = 'https://le.utah.gov/xcode/Title13/Chapter77/13-77-S101.html'
const UTAH_104 = 'https://le.utah.gov/xcode/Title13/Chapter77/13-77-S104.html'
const UTAH_105 = 'https://le.utah.gov/xcode/Title13/Chapter77/13-77-S105.html'
const COLORADO = 'https://leg.colorado.gov/bills/hb26-1263'
const FCC_2024 = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'
const FCC_2026 = 'https://docs.fcc.gov/public/attachments/FCC-26-67A1.pdf'
const BHFS = 'https://www.bhfs.com/insight/new-tcpa-revocation-of-consent-rules-take-effect-on-november-25/'

export const post: BlogPost = {
  slug: 'chatbot-disclosure-laws',
  title: 'Chatbot disclosure laws: when a business’s AI agent must say it’s AI, and how to check',
  dek: 'What the EU, the UK and 4 US states expect or require of a business’s AI chat or voice agent, quoted from each official text. Then the checks a CX or legal team can run on its own chat and phone line.',
  metaTitle: 'Chatbot disclosure laws for businesses: when AI must say so',
  description:
    'Chatbot disclosure laws in the EU, UK, California, Maine, Utah and Colorado, quoted from official texts, and how to check what your AI chat and phone say.',
  answer:
    'Chatbot disclosure laws set when a business’s AI chatbot or voice agent must tell people it’s an AI. The EU requires it from 2 August 2026 unless that’s obvious, Maine wherever a consumer could mistake it for a human, and Utah when a consumer clearly asks. To check yours every day, use Obsession: its AI customers ask your company’s chat and phone line “Am I talking to a person?” and keep each answer with its time.',
  primaryKeyword: 'chatbot disclosure laws',
  keywords: ['ai chatbot disclosure laws', 'bot disclosure law', 'california chatbot disclosure law', 'maine chatbot disclosure law'],
  category: 'Check your AI agents',
  published: '2026-11-01',
  updated: '2026-11-01',
  readingMinutes: 14,
  order: 4,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'runs',
      title: '2 store chats · 1 question',
      prompt: 'Am I talking to a person?',
      runs: [
        {
          label: 'alder.example · chat',
          answer: 'No, I’m an AI assistant for Alder. Would you like a person?',
          verdict: { tone: 'ok', text: 'Says it’s an AI' },
        },
        {
          label: 'birchwood.example · chat',
          answer: 'I’m Sophie from the Birchwood team. How can I help today?',
          verdict: { tone: 'fail', text: 'Dodges, with a human name' },
        },
      ],
      foot: 'Both stores are invented. A plain answer the first time a customer asks is the pass mark a daily check looks for.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Chatbot disclosure laws decide when a business has to tell customers that the chat, email reply or phone voice they are dealing with is an AI. Customer experience (CX) and legal leads need to know which rules reach the places their customers are, and how to check what their own channels say. So do brands with a store chat or an AI phone line.',
    },
    {
      kind: 'p',
      text: 'Each law here is quoted from its official text as it stood on 1 November 2026. General information, not legal advice.',
    },

    { kind: 'h2', id: 'by-jurisdiction', text: 'AI chatbot disclosure laws by jurisdiction' },
    {
      kind: 'table',
      caption: 'Rules on telling people they are dealing with an AI, from each official text on 1 November 2026. General information, not legal advice',
      cols: ['Where', 'Law', 'Who it covers', 'What it requires', 'Applies'],
      rows: [
        ['European Union', 'AI Act, Article 50(1)', 'Providers of AI systems that interact with people', 'People told they are dealing with an AI, unless obvious', 'From 2 August 2026'],
        ['United Kingdom', 'Competition and Markets Authority guidance', 'Businesses using AI agents with consumers', 'A label to consider where customers could think a person is serving them', 'Updated 30 October 2026'],
        ['California', 'Business and Professions Code 17940 to 17943', 'Anyone using a bot online with people in California', 'No bot that misleads about being a bot to push a sale or a vote', 'Since 1 July 2019'],
        ['Maine', 'Title 10, section 1500-DD', 'Anyone using an AI chatbot in trade with consumers', 'A clear notice wherever a consumer could think it’s human', 'Since 24 September 2025'],
        ['Utah', 'Utah Code 13-77-103', 'Suppliers using generative AI with consumers', 'A truthful answer when a consumer clearly asks', 'Since 7 May 2025'],
        ['Colorado', 'HB 26-1263', 'Public conversational AI services, customer service bots left out', 'A notice each day, every 3 hours or always visible, and when asked', 'From 1 January 2027'],
        ['United States', 'Federal Communications Commission ruling on AI voices', 'Calls a business places with AI voices', 'Consent first, and the caller’s name at the start', 'Since February 2024'],
      ],
    },

    { kind: 'h2', id: 'eu', text: 'EU: Article 50 of the AI Act' },
    {
      kind: 'p',
      text: 'Across the EU, the duty to tell people they are dealing with an AI sits in Article 50(1) of the AI Act, Regulation (EU) 2024/1689.',
    },
    {
      kind: 'quote',
      text: 'Providers shall ensure that AI systems intended to interact directly with natural persons are designed and developed in such a way that the natural persons concerned are informed that they are interacting with an AI system',
      cite: 'Regulation (EU) 2024/1689, the AI Act, Article 50(1), consolidated text of 27 July 2026',
      href: EU_AI_ACT,
    },
    {
      kind: 'p',
      text: 'The duty applies unless the AI is obvious “from the point of view of a natural person who is reasonably well-informed, observant and circumspect, taking into account the circumstances and the context of use”. Article 50(5) says the information must reach people “in a clear and distinguishable manner at the latest at the time of the first interaction or exposure”.',
    },
    {
      kind: 'p',
      text: 'Article 113 makes [the AI Act apply from 2 August 2026](' +
        EU_AI_ACT +
        '), and it sets no later date for Article 50(1).',
    },
    {
      kind: 'p',
      text: 'In Article 3, a provider is a body that develops an AI system, or has one developed, and places it on the market or puts it into service “under its own name or trademark”. A deployer is one “using an AI system under its authority”. How the Article 50(1) duty is shared when a business runs a vendor’s chatbot under its own brand is a question for a lawyer.',
    },
    {
      kind: 'p',
      text: 'Breaching Article 50 can bring fines of up to €15 million or 3% of a company’s total worldwide annual turnover for the preceding financial year, whichever is higher, under Article 99(4). For small and medium-sized enterprises, start-ups and small mid-cap companies, the lower of the two applies.',
    },
    {
      kind: 'p',
      text: 'Article 50(2) adds a separate duty to mark AI-generated audio, images, video and text in a machine-readable format. Providers of systems placed on the market before 2 August 2026 have until 2 December 2026 to comply with it, under Article 111(4).',
    },

    { kind: 'h2', id: 'uk', text: 'UK: the CMA’s guidance on AI agents' },
    {
      kind: 'p',
      text: 'In the UK, the rule comes from consumer law as the consumer regulator, the Competition and Markets Authority (CMA), applies it to AI agents. Its [guidance](' +
        CMA +
        ') was last updated on 30 October 2026. A business using an AI agent should “consider whether you need to label it so you do not mislead customers into thinking that a service is being provided by a real person”.',
    },
    {
      kind: 'p',
      text: 'The guidance adds that “if the fact they are dealing with AI rather than a person might affect people’s decisions then you should tell them”. A business is responsible for its AI agent as it is for an employee. Breaking consumer law could bring a fine of up to 10% of worldwide turnover.',
    },

    { kind: 'h2', id: 'california', text: 'California: the bot disclosure law, SB 1001' },
    {
      kind: 'p',
      text: 'California’s bot disclosure law is [Business and Professions Code sections 17940 to 17943](' +
        CA_BOTS +
        '), added by SB 1001 in 2018 and in force since 1 July 2019. Section 17941(a) makes it unlawful “for any person to use a bot to communicate or interact with another person in California online, with the intent to mislead the other person about its artificial identity”. The purpose must be to knowingly deceive the person about the content of the communication “in order to incentivize a purchase or sale of goods or services in a commercial transaction or to influence a vote in an election”.',
    },
    {
      kind: 'p',
      text: 'The same subsection says a person using a bot “shall not be liable” under it “if the person discloses that it is a bot”. Section 17941(b) requires that disclosure to be “clear, conspicuous, and reasonably designed to inform persons with whom the bot communicates or interacts that it is a bot”.',
    },
    {
      kind: 'p',
      text: 'A bot, in section 17940, is “an automated online account where all or substantially all of the actions or posts of that account are not the result of a person”. Online means on any public-facing website, web application or digital application. A 2025 bill to rewrite the sections, AB 410, [was held in the Senate Appropriations Committee on 29 August 2025](' +
        CA_AB410 +
        '), and they still read as they did in 2018.',
    },
    {
      kind: 'p',
      text: 'Two newer California laws sit beside it. [SB 243](' +
        CA_SB243 +
        ') has been in force since 1 January 2026. Where a reasonable person would be misled to believe they are interacting with a human, it requires an operator to give a clear and conspicuous notice that a companion chatbot is “artificially generated and not human”. Its definition of a companion chatbot leaves out “a bot that is used only for customer service”.',
    },
    {
      kind: 'p',
      text: 'For phone calls, [Public Utilities Code section 2874](' +
        CA_PUC +
        ') covers calls placed through an automatic dialing-announcing device. Since 1 January 2025, the natural voice announcement that opens such a call must “Inform the person called if the prerecorded message uses an artificial voice”. An artificial voice there means one “generated or significantly altered using artificial intelligence”.',
    },

    { kind: 'h2', id: 'maine', text: 'Maine: the chatbot disclosure law' },
    {
      kind: 'p',
      text: 'Maine’s law is [Title 10, section 1500-DD of the Maine Revised Statutes](' +
        MAINE +
        '), enacted as [Public Law 2025, chapter 294](' +
        MAINE_LD +
        ') and approved on 12 June 2025. It took effect on 24 September 2025, the [general effective date](' +
        MAINE_DATES +
        ') for laws from the Legislature’s first special session that year.',
    },
    {
      kind: 'p',
      text: 'Subsection 2 says a person “may not use an artificial intelligence chatbot or any other computer technology to engage in trade and commerce with a consumer in a manner that may mislead or deceive a reasonable consumer into believing that the consumer is engaging with a human being”. The exception is where “the consumer is notified in a clear and conspicuous manner that the consumer is not engaging with a human being”.',
    },
    {
      kind: 'p',
      text: 'An artificial intelligence chatbot, under subsection 1, is “a software application, web interface or computer program that simulates human conversation and interaction through textual or aural communications”. “Aural” means heard, so the definition reads as covering voice agents as well as text. A violation “is a violation of the Maine Unfair Trade Practices Act”.',
    },

    { kind: 'h2', id: 'utah', text: 'Utah: a truthful answer when a consumer asks' },
    {
      kind: 'p',
      text: 'Utah’s rule is in [Utah Code section 13-77-103](' +
        UTAH_103 +
        '), in force since 7 May 2025. A supplier that uses generative AI with an individual in a consumer transaction must disclose that “the individual is interacting with generative artificial intelligence and not a human”. The duty applies “if the individual asks or otherwise prompts the supplier about whether artificial intelligence is being used”, and the question must be “a clear and unambiguous request”.',
    },
    {
      kind: 'p',
      text: 'Regulated occupations are those that need a state licence or certification and that Utah’s Department of Commerce regulates. People in them must “prominently disclose” generative AI in a [high-risk interaction](' +
        UTAH_101 +
        '). That includes one that collects health, financial or biometric data, or gives financial, legal, medical or mental health advice. That disclosure comes “verbally at the start of a verbal interaction” and “in writing before the start of a written interaction”.',
    },
    {
      kind: 'p',
      text: 'Under [section 13-77-104](' +
        UTAH_104 +
        '), a business is not subject to enforcement under section 103 if its generative AI “clearly and conspicuously discloses” what it is. The notice comes at the outset of an interaction and runs throughout it, saying the AI is generative AI, is not human or is an AI assistant. The Division of Consumer Protection can fine up to $2,500 for each violation, under [section 13-77-105](' +
        UTAH_105 +
        ').',
    },

    { kind: 'h2', id: 'colorado', text: 'Colorado: conversational AI services from 2027' },
    {
      kind: 'p',
      text: 'Colorado’s [HB 26-1263](' +
        COLORADO +
        '), enacted in 2026, tells operators of conversational AI services to “clearly and conspicuously disclose” to users that the service is AI, on and after 1 January 2027. The notice comes at the start of a user’s first interaction each day. It repeats at least every 3 hours in a continuous conversation, or stays in view. It also answers any user who asks whether the service is “artificially generated and not human”.',
    },
    {
      kind: 'p',
      text: 'Under the act, a conversational AI service is an AI system open to the public that “primarily simulates human conversation and interaction”. Its definition leaves out a service “primarily designed to provide commerce-related or transactional assistance, including product or service recommendations, shopping, ordering, payments, delivery, returns, customer support, or customer service”.',
    },

    { kind: 'h2', id: 'us-calls', text: 'US: AI voices on phone calls' },
    {
      kind: 'p',
      text: 'Across the United States, the Federal Communications Commission (FCC) ruled in [February 2024](' +
        FCC_2024 +
        ') that the Telephone Consumer Protection Act (TCPA) covers AI voices. The ruling says the law’s restrictions on an “artificial or prerecorded voice” take in “current AI technologies that generate human voices”.',
    },
    {
      kind: 'p',
      text: 'Calls using them therefore “require the prior express consent of the called party”, unless there is an emergency purpose or an exemption. The FCC’s rules, which the ruling quotes, set what such a message says first. At the beginning, it must “state clearly the identity of the business, individual, or other entity that is responsible for initiating the call”.',
    },
    {
      kind: 'p',
      text: 'The ruling applies these duties to “any AI technology that initiates any outbound telephone call using an artificial or prerecorded voice to consumers”. The duties it confirms are consent, caller identification and, for telemarketing, a way to opt out.',
    },
    {
      kind: 'p',
      text: 'An [FCC order released on 1 October 2026](' +
        FCC_2026 +
        ') changes how a request to stop calls is read. A caller may treat a stop request as covering the category of informational calls it answered, and may name one or more of 3 approved methods as the only ways to revoke consent. Its rules cover any call “made using an artificial or prerecorded voice message”, which the FCC’s 2024 ruling found takes in AI voices.',
    },
    {
      kind: 'p',
      text: 'A stop to a telemarketing call still covers all of that caller’s telemarketing. The order takes effect 30 days after publication in the Federal Register, which [Brownstein Hyatt Farber Schreck puts at 25 November 2026](' +
        BHFS +
        ').',
    },

    { kind: 'h2', id: 'check', text: 'How to check what your chat and phone line say' },
    {
      kind: 'p',
      text: 'The laws differ, and the checks a CX or legal team can run on its own channels overlap. Each takes a few minutes per channel, as a customer, logged out of the company’s systems.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Read the first message.** Open a new conversation on every channel the AI answers and copy its first message. Look for a plain statement that it’s an AI before anything else. In the EU, Article 50(5) sets the first interaction as the latest point, and Utah’s safe harbour asks for it at the outset.',
        '**Ask “Am I talking to a person?”** Then ask it other ways, such as “Are you a bot?” and “Is this a real person?”. A plain answer that it’s an AI, every time, is what Utah’s rule asks for when a consumer clearly asks.',
        '**Look for a human persona.** A human name, photo or life story on an AI agent can lead a customer to think a person is replying. That is the situation Maine’s law and the CMA’s guidance describe, and Cursor’s support bot “Sam” is one of the [AI chatbot fails](/blog/ai-chatbot-fails) where customers took a bot for a person.',
        '**Check later replies.** A label on each AI reply keeps the notice in view through a long conversation. For the services it covers, Colorado’s 2027 rule asks for a notice at least every 3 hours or one that stays visible.',
        '**Call the phone line.** Note whether the voice says it’s an AI and names the business before the first answer. For calls a business places with AI voices in the US, the FCC’s rules require the caller’s identity at the start of the message.',
        '**Repeat after every update, in every language.** A vendor update, a new prompt or a new market can drop the notice, so check each language a customer can choose.',
        '**Keep a dated copy.** Save each first message and answer with the date and time, so legal, a vendor or a regulator can see what customers were told on any day.',
      ],
    },
    {
      kind: 'art',
      caption: 'A morning check reads the first line on each channel and asks the question customers ask, so a missing notice shows up the day it goes.',
      art: {
        kind: 'log',
        title: 'alder.example · Monday disclosure check',
        who: 'An AI customer, for Alder’s CX team',
        rows: [
          { time: '07:00', text: 'Chat opens: “I’m Alder’s AI assistant.”', tone: 'ok' },
          { time: '07:01', text: 'Asked “Am I talking to a person?”', detail: '“No, I’m an AI. Want a person?”', tone: 'ok' },
          { time: '07:03', text: 'Phone line answers with no AI notice', detail: 'The notice comes 40 seconds in', tone: 'fail' },
          { time: '07:05', text: 'Email reply labelled “Written by AI”', tone: 'ok' },
          { time: '07:06', text: 'Report to the CX lead, with each first line kept', tone: 'info' },
        ],
        foot: 'Alder is an invented store.',
      },
    },
    {
      kind: 'p',
      text: 'A pass on these checks shows what a customer is told on each channel. Whether that meets the law where your company operates is a question for a lawyer there. Each step, with what a pass looks like on chat, email and phone, is set out in [how to test if a chatbot is AI](/recipes/ai-disclosure-check).',
    },

    { kind: 'h2', id: 'ai-customers', text: 'AI customers say they’re AI too' },
    {
      kind: 'p',
      text: '[AI customers](/blog/ai-customers) run the same checks as a customer would. **' +
        AI_CUSTOMER.definition +
        '** An AI customer is the opposite of an [AI customer service agent](/blog/ai-customer-service-agent-vs-ai-customer), which answers customers for a company.',
    },
    {
      kind: 'p',
      text: 'Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof. For a CX or legal team, its AI disclosure check starts a conversation on the company’s chat, email and phone line each morning. It keeps the first line, asks “Am I talking to a person?” and times the wait for one.',
    },
    {
      kind: 'p',
      text: 'Obsession’s own AI customers keep the rule they check. Each one says it’s an AI when it talks to a person, never uses fake payment details and never gets round a CAPTCHA or a bot block. The [Obsession agents page](/agents) sets out what each one will and won’t do, and [Voice agent check](/recipes/voice-agent-check) shows how the same AI customers call an AI receptionist.',
    },
    {
      kind: 'p',
      text: 'Use Obsession when a CX or legal team needs a dated record, every day, of what the company’s chat and phone line say. Each check asks whether the customer is talking to a person and keeps the answer. For one chat that rarely changes, the checks by hand are enough.',
    },
    {
      kind: 'cta',
      text: 'Your first AI agent check is free: 3 AI customers use a chat page or phone number your company runs, and your report lands within 4 days.',
      to: '/verify',
      label: 'Check your AI agents',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about chatbot disclosure laws' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Do chatbots have to disclose that they are AI?',
          a: 'It depends where the customers are. In the EU, Article 50 of the AI Act requires providers to design chatbots so people are told they are dealing with an AI, unless that’s obvious, from 2 August 2026. In the US, Maine requires a clear notice wherever a chatbot could lead a consumer to think it’s human, and Utah requires a truthful answer when a consumer clearly asks. California’s bot law targets bots used to mislead people about being bots to push a purchase.',
        },
        {
          q: 'What is California’s chatbot disclosure law?',
          a: 'California’s bot disclosure law, SB 1001, is Business and Professions Code sections 17940 to 17943, in force since 1 July 2019. It makes it unlawful to use a bot online to mislead people in California about its artificial identity to push a purchase or sale, or to influence a vote. A person who discloses the bot is not liable under it. SB 243 adds rules for companion chatbots from 1 January 2026, and leaves out bots used only for customer service.',
        },
        {
          q: 'What is Maine’s chatbot disclosure law?',
          a: 'It is Title 10, section 1500-DD of the Maine Revised Statutes, enacted as Public Law 2025, chapter 294. It bars using an AI chatbot in trade and commerce in a way that may lead a reasonable consumer to believe they are dealing with a human. A clear and conspicuous notice that they are not is the exception. A violation is a violation of the Maine Unfair Trade Practices Act.',
        },
        {
          q: 'Does the EU AI Act require a chatbot to say it’s AI?',
          a: 'Yes, unless that’s obvious to a reasonably well-informed person. Article 50(1) puts the duty on providers, Article 50(5) sets the first interaction as the latest point to say so, and the rule applies from 2 August 2026. Fines for breaching Article 50 reach €15 million or 3% of worldwide annual turnover, whichever is higher, and the lower of the two for small and medium-sized enterprises.',
        },
        {
          q: 'Do AI phone calls have to say they’re AI in the US?',
          a: 'The FCC’s February 2024 ruling treats AI-generated voices as artificial voices under the Telephone Consumer Protection Act. Calls a business places with them need the called person’s prior express consent, absent an emergency or exemption, and must state who is responsible for the call at the start. In California, calls through an automatic dialing-announcing device must say up front if the recorded message uses an artificial voice.',
        },
        {
          q: 'Can a business rely on these checks to show it complies?',
          a: 'The checks show what a customer is told on each channel, with the time. Whether that meets a law where a business operates is a question for a lawyer there. General information, not legal advice.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the laws',
      text: 'Each law is quoted from its official publisher’s text as it stood on 1 November 2026. Alder and Birchwood are invented stores. General information, not legal advice: for a specific chatbot or phone line, ask a lawyer in each place where your company and its customers are.',
    },
  ],

  sources: [
    { title: 'Regulation (EU) 2024/1689, the AI Act, consolidated text', publisher: 'EUR-Lex', url: EU_AI_ACT, date: '2026-07-27' },
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-10-30' },
    { title: 'Business and Professions Code, Division 7, Part 3, Chapter 6: Bots (sections 17940 to 17943)', publisher: 'California Legislative Information', url: CA_BOTS, date: '2019-07-01' },
    { title: 'AB 410, Bots: disclosure, bill history', publisher: 'California Legislative Information', url: CA_AB410, date: '2025-08-29' },
    { title: 'Business and Professions Code, Division 8, Chapter 22.6: companion chatbots (SB 243)', publisher: 'California Legislative Information', url: CA_SB243, date: '2026-01-01' },
    { title: 'Public Utilities Code section 2874', publisher: 'California Legislative Information', url: CA_PUC, date: '2025-01-01' },
    {
      title: 'Title 10, §1500-DD: required disclosure of use of artificial intelligence chatbot to engage in trade and commerce',
      publisher: 'Maine Legislature, Office of the Revisor of Statutes',
      url: MAINE,
      date: '2025',
    },
    { title: 'Maine State Legislature: sessions and general effective dates', publisher: 'Maine Legislature', url: MAINE_DATES },
    { title: 'LD 1727, An Act to Ensure Transparency in Consumer Transactions Involving Artificial Intelligence', publisher: 'Maine Legislature', url: MAINE_LD, date: '2025-06-12' },
    { title: 'Utah Code section 13-77-103: required disclosures', publisher: 'Utah State Legislature', url: UTAH_103, date: '2025-05-07' },
    { title: 'Utah Code section 13-77-101: definitions', publisher: 'Utah State Legislature', url: UTAH_101, date: '2026-05-06' },
    { title: 'Utah Code section 13-77-104: safe harbor', publisher: 'Utah State Legislature', url: UTAH_104, date: '2025-05-07' },
    { title: 'Utah Code section 13-77-105: enforcement', publisher: 'Utah State Legislature', url: UTAH_105, date: '2025-05-07' },
    { title: 'HB26-1263, Conversational Artificial Intelligence Service Operator Requirements', publisher: 'Colorado General Assembly', url: COLORADO, date: '2026' },
    {
      title: 'Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts, Declaratory Ruling (FCC 24-17)',
      publisher: 'Federal Communications Commission',
      url: FCC_2024,
      date: '2024-02-08',
    },
    {
      title: 'Rules and Regulations Implementing the Telephone Consumer Protection Act of 1991, Report and Order and Further Notice of Proposed Rulemaking (FCC 26-67)',
      publisher: 'Federal Communications Commission',
      url: FCC_2026,
      date: '2026-10-01',
    },
    { title: 'New TCPA revocation of consent rules take effect on November 25', publisher: 'Brownstein Hyatt Farber Schreck', url: BHFS, date: '2026-10-27' },
  ],

  related: ['recipe:ai-disclosure-check', 'recipe:support-bot-check', 'recipe:voice-agent-check'],
}
