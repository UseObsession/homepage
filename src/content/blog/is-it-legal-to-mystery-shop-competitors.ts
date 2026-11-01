import type { BlogPost } from './types'
import { AI_CUSTOMER } from '../glossary'

/* Guide 3 of the week from 2 Nov 2026 (_research/seo/plan/week-2nov/SLATE.md and WRITER_BRIEF.md; Seun's go, 1 Nov
   2026). It owns "is it legal to mystery shop competitors" and the neighbours in its keywords (Google autocomplete, US
   and UK, 31 Oct: autocomplete_slate_31oct.json). The job seekers' phrases ("worth it", "legit") are left alone.
   Readers: founders, marketing and sales leads, agencies and their legal teams, before they run or buy competitor
   research. General information, never legal advice: every legal point names where it applies and links to the law,
   the court's opinion or the company's own terms. Read at source on 1 Nov 2026: 18 U.S.C. 1839, 2511 and 45c (Cornell
   LII), Van Buren v. United States (supremecourt.gov), hiQ v. LinkedIn and Amazon v. Perplexity (the Ninth Circuit's own
   PDFs), Eric Goldman's blog post of 6 Aug 2026, Directive (EU) 2016/943 (the Official Journal text from the EU
   Publications Office, because EUR-Lex answered with a bot challenge), SI 2018/597, the Computer Misuse Act 1990 and the
   UK GDPR (legislation.gov.uk), RCW 9.73.030 (Washington State Legislature), NRS 648.012 (Nevada Legislature), the AI
   Act Service Desk, SCIP's ethics page (moved to scip.world), the MRS guideline (March 2020), Salesforce's main services
   agreement, Klaviyo's terms of service, eBay's user agreement, Cloudflare's blog, changelog and docs, and the IETF
   draft. DataDome's study and the Business Wire release on agent checks were walled, so they are left out. The AI
   customers section uses the words of the /agents page. thornvale.example is invented. No dashes. */

const CA9_PERPLEXITY = 'https://cdn.ca9.uscourts.gov/datastore/opinions/2026/08/04/26-1444.pdf'
const USC_1839 = 'https://www.law.cornell.edu/uscode/text/18/1839'
const EU_TSD = 'https://eur-lex.europa.eu/eli/dir/2016/943/oj'
const SCIP = 'https://scip.world/ethics/'
const HIQ = 'https://cdn.ca9.uscourts.gov/datastore/opinions/2022/04/18/17-16783.pdf'
const UK_TSR_2 = 'https://www.legislation.gov.uk/uksi/2018/597/regulation/2'
const UK_TSR_3 = 'https://www.legislation.gov.uk/uksi/2018/597/regulation/3'
const VAN_BUREN = 'https://www.supremecourt.gov/opinions/20pdf/19-783_k53l.pdf'
const CMA_S1 = 'https://www.legislation.gov.uk/ukpga/1990/18/section/1'
const CMA_S17 = 'https://www.legislation.gov.uk/ukpga/1990/18/section/17'
const SALESFORCE = 'https://www.salesforce.com/company/msa.jsp'
const KLAVIYO = 'https://www.klaviyo.com/legal/terms-of-service'
const MRS = 'https://www.mrs.org.uk/pdf/MRS-Guideline-Conducting-Mystery-Shopping.pdf'
const USC_2511 = 'https://www.law.cornell.edu/uscode/text/18/2511'
const WA_RCW = 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.73.030'
const UK_GDPR_4 = 'https://www.legislation.gov.uk/eur/2016/679/article/4'
const UK_GDPR_6 = 'https://www.legislation.gov.uk/eur/2016/679/article/6'
const GOLDMAN = 'https://blog.ericgoldman.org/archives/2026/08/ninth-circuit-lifts-restrictions-on-agentic-ai-accessing-amazon.htm'
const EBAY = 'https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259'
const CF_WBA = 'https://blog.cloudflare.com/web-bot-auth/'
const IETF = 'https://datatracker.ietf.org/doc/draft-ietf-webbotauth-httpsig-protocol/'
const CF_AI_TRAFFIC = 'https://developers.cloudflare.com/changelog/post/2026-07-01-ai-traffic-options/'
const CF_VERIFIED = 'https://developers.cloudflare.com/bots/concepts/bot/verified-bots/'
const AI_ACT_50 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50'
const AI_ACT_113 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113'
const BOTS_ACT = 'https://www.law.cornell.edu/uscode/text/15/45c'
const NRS_648 = 'https://www.leg.state.nv.us/nrs/nrs-648.html#NRS648Sec012'

export const post: BlogPost = {
  slug: 'is-it-legal-to-mystery-shop-competitors',
  title: 'Is it legal to mystery shop competitors? Usually, through public paths and as yourself',
  dek: 'In the US, the UK and the EU, whether it’s legal usually turns on 4 questions: deception, the terms your company accepted, trade secrets and access to systems. The same questions apply when an AI agent does the shopping, and the Ninth Circuit ruled on a shopping agent in Amazon v. Perplexity on 4 August 2026.',
  metaTitle: 'Is it legal to mystery shop competitors? AI agents included',
  description:
    'Mystery shopping competitors is usually legal through public paths, as yourself. How deception, terms and trade secrets change that, for AI agents too.',
  answer:
    'In the US, the UK and the EU, mystery shopping a competitor is usually legal through the paths any customer uses, as yourself. The risk comes from deceiving staff, breaking terms your company accepted, taking trade secrets or getting into systems nobody let you into, and the same questions apply to AI agents. To watch your competitors as a customer, use Obsession: its AI customers join through public forms, keep what each competitor sends and say they’re AI when they talk to a person.',
  primaryKeyword: 'is it legal to mystery shop competitors',
  keywords: [
    'is mystery shopping legal',
    'is mystery shopping competitors legal',
    'is mystery shopper legal',
    'is competitive intelligence legal',
    'is mystery shopping legal in the uk',
    'is it legal to sign up for a competitor’s free trial',
  ],
  category: 'Watch other companies',
  published: '2026-11-01',
  updated: '2026-11-01',
  readingMinutes: 15,
  order: 2,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'flow',
      title: 'thornvale.example · an AI agent’s path',
      steps: [
        { label: 'Public pages', detail: 'Reads the prices, offers and delivery terms any visitor sees', tone: 'ok' },
        { label: 'Sign-up', detail: 'Joins the newsletter as itself, with its own inbox', tone: 'ok' },
        { label: 'Help chat', detail: 'Asks about returns and says it’s an AI when a person replies', tone: 'ok' },
        { label: 'Sales team', detail: 'Books a demo posing as a buyer from a made-up company', tone: 'fail' },
      ],
      foot: 'Reading, signing up and asking the chat as itself are paths any customer uses. Posing as a buyer to the sales team misleads the competitor’s staff, which is where research becomes misrepresentation. Thornvale is an invented company.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'In the US, the UK and the EU, mystery shopping a competitor is usually legal through the paths any customer uses, as yourself.',
    },
    {
      kind: 'p',
      text: 'Mystery shopping a competitor means using its website, newsletter, free trial or help chat the way a new customer would. The point is to see its prices and offers, and how it treats the people who sign up. As yourself means under your real name or your company’s.',
    },
    {
      kind: 'p',
      text: 'Founders, marketing and sales leads, agencies and their legal teams can check a plan against 4 questions before they run or buy that research. The questions are deception, the terms your company accepted, trade secrets, and access to systems nobody let you into.',
    },
    {
      kind: 'p',
      text: 'The same questions apply when an AI agent does the shopping. On 4 August 2026 the US Court of Appeals for the Ninth Circuit ruled on a shopping agent in [Amazon v. Perplexity](' +
        CA9_PERPLEXITY +
        '), and said its ruling didn’t limit Amazon’s ability to control access to its site through its terms of service.',
    },

    { kind: 'h2', id: 'what-decides-it', text: 'What turns competitor research into a legal problem' },
    {
      kind: 'p',
      text: 'Each question looks at what the researcher did, so the same task can be lawful done one way and unlawful done another. Laws differ by country and, in the US, by state, so each point names where it applies.',
    },
    { kind: 'h3', id: 'deception', text: 'Deception' },
    {
      kind: 'p',
      text: 'Lying about who you are turns ordinary research into misrepresentation. In US federal law, the Defend Trade Secrets Act lists misrepresentation among the “improper means” of getting a trade secret, beside theft, bribery and espionage ([18 U.S.C. §1839](' +
        USC_1839 +
        ')). The EU’s trade secrets directive makes it unlawful to acquire a trade secret, without its holder’s consent, by any conduct “contrary to honest commercial practices” ([Directive (EU) 2016/943](' +
        EU_TSD +
        '), Article 4).',
    },
    {
      kind: 'p',
      text: 'Codes of practice draw the same line. SCIP, the association for people who research competitors for a living, asks its members to disclose their identity and organisation before every interview. Its ethics guidance adds that posing as a customer or a student to get information may be illegal, depending on the jurisdiction ([SCIP’s code of ethics](' +
        SCIP +
        ')).',
    },
    { kind: 'h3', id: 'terms', text: 'Terms your company accepted' },
    {
      kind: 'p',
      text: 'Signing up for a trial or an account usually means accepting the company’s terms, and some terms bar competitors outright. Breaking them is a contract question, which the Ninth Circuit has kept open even where computer crime law doesn’t reach. In [hiQ v. LinkedIn](' +
        HIQ +
        ') in 2022, it said a company whose public pages were scraped may still have claims such as breach of contract or copyright infringement.',
    },
    {
      kind: 'p',
      text: 'In Amazon v. Perplexity the same court said its ruling didn’t limit Amazon’s ability to control access to Amazon.com through its terms of service ([the opinion](' +
        CA9_PERPLEXITY +
        '), footnote 5).',
    },
    { kind: 'h3', id: 'trade-secrets', text: 'Trade secrets' },
    {
      kind: 'p',
      text: 'A trade secret is business or technical information that a company keeps secret and that is worth more because it is secret. The US definition requires the owner to have taken “reasonable measures to keep such information secret” ([18 U.S.C. §1839](' +
        USC_1839 +
        ')). The EU directive covers information that isn’t generally known or readily accessible to people in that field, and that is kept secret with reasonable steps ([Directive (EU) 2016/943](' +
        EU_TSD +
        '), Article 2). The UK regulations define it the same way ([regulation 2](' +
        UK_TSR_2 +
        ')).',
    },
    {
      kind: 'p',
      text: 'Trade secret law leaves room to learn from what a company makes public. In the US, information counts as a trade secret only if it isn’t “readily ascertainable through proper means”, and the definition of improper means excludes “reverse engineering, independent derivation, or any other lawful means of acquisition”. The EU directive lists as lawful the “observation, study, disassembly or testing of a product or object that has been made available to the public” (Article 3).',
    },
    {
      kind: 'p',
      text: 'In the UK, the Trade Secrets (Enforcement, etc.) Regulations 2018 make acquiring a trade secret unlawful where it is a “breach of confidence in confidential information” ([regulation 3](' +
        UK_TSR_3 +
        ')).',
    },
    { kind: 'h3', id: 'access', text: 'Access to systems' },
    {
      kind: 'p',
      text: 'The US federal computer crime law, the Computer Fraud and Abuse Act (CFAA), covers getting into a computer without authorisation or beyond what you’re allowed. The Supreme Court read it in [Van Buren v. United States](' +
        VAN_BUREN +
        ') in 2021 as a “gates-up-or-down inquiry”, which asks whether a person was allowed into the system, or into the part of it they reached. In the Court’s reading, a bad motive for looking at information that is open to you doesn’t count.',
    },
    {
      kind: 'p',
      text: 'In hiQ, which affirmed a preliminary injunction, the Ninth Circuit concluded that “the concept of ‘without authorization’ does not apply to public websites”. It left open what follows when a site refuses one particular person or bot. A login is a gate. In an earlier case that hiQ describes, the same court found that a former employee who used current staff’s logins to collect confidential information acted “without authorization” ([hiQ v. LinkedIn](' +
        HIQ +
        ')).',
    },
    {
      kind: 'p',
      text: 'In the UK, the Computer Misuse Act 1990 makes it an offence to get into a computer’s programs or data knowing the access is unauthorised ([section 1](' +
        CMA_S1 +
        ')). Access is unauthorised when the person isn’t entitled to control it and has no consent from someone who is ([section 17](' +
        CMA_S17 +
        ')). In the EU, the trade secrets directive counts unauthorised access to a company’s documents or electronic files as unlawful acquisition of the secrets in them (Article 4).',
    },

    { kind: 'h2', id: 'by-method', text: 'Each research method, and what decides it' },
    {
      kind: 'p',
      text: 'Competitor research usually mixes several methods, and each turns on a different question.',
    },
    {
      kind: 'table',
      caption: 'Ways to research a competitor, what usually decides whether each is allowed in the US, the UK and the EU, and when to ask a lawyer first',
      cols: ['Method', 'What usually decides it', 'Ask a lawyer'],
      rows: [
        ['Reading public pages', 'Pages open to any visitor', 'If you copy content at scale'],
        ['Joining a newsletter as yourself', 'Your real name or your company’s', 'If the name isn’t real'],
        ['Starting a free trial', 'The terms your company accepts', 'If the terms bar competitors'],
        ['Asking the chat', 'Saying who you are if a person replies', 'If you pose as someone else'],
        ['Posing as a made-up company', 'Misleading the competitor’s staff', 'Before any attempt'],
        ['Using someone else’s login', 'Consent from whoever controls the system', 'Before any attempt'],
        ['Bypassing a CAPTCHA', 'The site’s refusal of automated visitors', 'Before any attempt'],
      ],
    },
    {
      kind: 'p',
      text: 'Reading public pages and joining a newsletter as yourself are what any customer does. The questions there come from scale and copying: hiQ named copyright infringement among the claims a scraped site may still bring. Asking a help chat is like asking a shop assistant, so if a person takes over, say who you are. Bypassing a CAPTCHA, the puzzle a site uses to stop automated visitors, means going where the site has turned bots away.',
    },
    {
      kind: 'p',
      text: '[Competitor email tracking tools](/blog/competitor-email-tracking-tools) compares the ways to follow a competitor’s emails as a subscriber, and [can ChatGPT track competitor emails](/blog/can-chatgpt-track-competitor-emails) covers what an AI assistant does with a spare inbox. [Ecommerce competitive intelligence](/blog/ecommerce-competitive-intelligence) shows what each source can see, such as a competitor’s site, its ads and its emails.',
    },

    { kind: 'h2', id: 'free-trials', text: 'Is it legal to sign up for a competitor’s free trial?' },
    {
      kind: 'p',
      text: 'It usually comes down to the trial’s terms, which your company accepts when it signs up. Some software companies bar competitors from their trials outright.',
    },
    {
      kind: 'p',
      text: 'Salesforce’s main services agreement, last updated on 15 October 2026, says it governs free trials too. It states that “SFDC’s direct competitors are prohibited from accessing the Services” (SFDC is Salesforce) unless Salesforce agrees in writing. It also bars access for benchmarking or competitive purposes ([Salesforce](' +
        SALESFORCE +
        ')). Klaviyo’s terms of service, updated on 17 December 2025, bar customers from using its services in competition with Klaviyo or giving a competitor access ([Klaviyo](' +
        KLAVIYO +
        ')).',
    },
    {
      kind: 'p',
      text: 'Breaking terms like these is usually a contract matter, which hiQ and the Perplexity ruling both leave open. Using a false name or a made-up company to get round a ban adds misrepresentation, the first of the 4 questions.',
    },
    {
      kind: 'p',
      text: 'In the EU, the trade secrets directive’s rule on testing covers a product made available to the public. It also covers one in the lawful possession of someone “free from any legally valid duty to limit the acquisition of the trade secret” (Article 3). Its recitals add that reverse engineering a lawfully acquired product is lawful “except when otherwise contractually agreed” ([Directive (EU) 2016/943](' +
        EU_TSD +
        '), recital 16). Trial terms that bar reverse engineering may be such an agreement.',
    },
    {
      kind: 'p',
      text: 'Before a trial, read the terms for clauses on competitors, competitive use, benchmarking, reverse engineering and automated access. Where they bar your company, ask the competitor or a lawyer before signing up.',
    },

    { kind: 'h2', id: 'pretend-buyers', text: 'Pretend buyers, staff and recordings' },
    {
      kind: 'p',
      text: 'Booking a demo or calling sales as a made-up buyer is the plainest case of misrepresentation, because a person is misled about who is asking. It also spends the competitor’s staff time on a lead that will never buy.',
    },
    {
      kind: 'p',
      text: 'Research codes protect the competitor’s staff. The Market Research Society (MRS) is the UK’s professional body for research. Its March 2020 guideline says a mystery shop of a competitor should keep staff time as short as possible and should not be seen to waste the competitor’s resources. It adds that personal information about the competitor’s employees can’t be collected ([MRS guideline](' +
        MRS +
        ')).',
    },
    {
      kind: 'p',
      text: 'SCIP’s guidance calls mystery shopping ethical where it keeps to a retailer’s own rules, such as a ban on photography. Some [AI mystery shopping tools](/blog/best-ai-mystery-shopping-tools) now phone a competitor’s staff as a buyer, so the same questions apply to them.',
    },
    {
      kind: 'p',
      text: 'Recording a call adds a second set of rules. Under US federal law, a person who is a party to a call may record it, unless the purpose is a criminal or tortious act ([18 U.S.C. §2511](' +
        USC_2511 +
        ')). Some states require everyone’s consent. Washington makes it unlawful to record a private phone call without “the consent of all the participants in the communication” ([RCW 9.73.030](' +
        WA_RCW +
        ')).',
    },
    {
      kind: 'p',
      text: 'In the UK, a recording or a note that identifies a member of staff is personal data under the UK GDPR, the UK’s data protection law ([Article 4](' +
        UK_GDPR_4 +
        ')). Recording and storing it is lawful only on one of the grounds in [Article 6](' +
        UK_GDPR_6 +
        '). The MRS guideline adds that a mystery shop may be recorded only when a company checks its own staff and has told them it may happen.',
    },

    { kind: 'h2', id: 'ai-agents', text: 'When an AI agent does the shopping' },
    {
      kind: 'p',
      text: 'AI agents now browse websites, fill in forms and chat for the people and companies that send them. The 4 questions apply to an agent’s actions as they do to a person’s, and courts have begun to decide whose actions they are.',
    },
    {
      kind: 'p',
      text: 'In Amazon v. Perplexity, Amazon sued over Comet, Perplexity’s web browser, whose AI assistant can shop on Amazon.com for its user. On 4 August 2026 the Ninth Circuit vacated the injunction a lower court had granted Amazon and sent the case back. It found Amazon unlikely to show that Perplexity had “accessed” Amazon’s computers under the CFAA or California’s computer crime law ([the opinion](' +
        CA9_PERPLEXITY +
        ')).',
    },
    {
      kind: 'p',
      text: 'The court called the assistant “a tool, not a person for statutory purposes”. It was the user who accessed Amazon, with the assistant’s help. On that reasoning, the person or company directing an agent may be treated as the one doing the accessing. The court left open whether an agent’s maker could control it closely enough to count instead.',
    },
    {
      kind: 'p',
      text: 'Identification was at the centre of the dispute. Amazon had told Perplexity that its AI products weren’t allowed on the store. The court records that Perplexity chose not to send a user-agent string, the label a browser sends to say what it is, though a footnote notes that the parties dispute whether Perplexity knowingly altered it. That label would have told Amazon an AI agent was visiting and let it block the agent.',
    },
    {
      kind: 'quote',
      text: 'We do not establish a new legal regime governing agentic AI.',
      cite: 'US Court of Appeals for the Ninth Circuit, Amazon.com Services v. Perplexity AI, 4 August 2026',
      href: CA9_PERPLEXITY,
    },
    {
      kind: 'p',
      text: 'The court also left open other claims against Perplexity, including tort claims, and left Amazon’s terms of service untouched. On Eric Goldman’s Technology & Marketing Law Blog, Kieran McCarthy set out the ruling on 6 August 2026 ([the post](' +
        GOLDMAN +
        ')). In his comments, Goldman asked what claims Amazon might still bring against the users themselves.',
    },
    {
      kind: 'p',
      text: 'Some site terms now name agents directly. eBay’s user agreement, in force from 28 June 2026 for existing users, bars robots, scrapers and other automated tools without eBay’s express permission. It names agents that buy for a shopper and bots run by large language models, and it also bars getting round eBay’s technical measures ([eBay](' +
        EBAY +
        ')).',
    },
    {
      kind: 'p',
      text: 'Identifying an agent is becoming a technical standard too. In May 2025 Cloudflare proposed two ways for a bot or agent to prove which one it is: a cryptographic signature on each request, called HTTP message signatures, and request mTLS, a certificate check on the connection itself ([Cloudflare](' +
        CF_WBA +
        ')). A user-agent label alone, Cloudflare wrote, is easy to fake. The signature method is now a draft at the Internet Engineering Task Force (IETF), the body that writes the internet’s technical standards, last revised on 29 October 2026 ([IETF](' +
        IETF +
        ')).',
    },
    {
      kind: 'p',
      text: 'Sites decide which agents to let in. Since 1 July 2026, every site on Cloudflare, free plan included, can block agents acting for a person on all pages or on pages with ads ([Cloudflare](' +
        CF_AI_TRAFFIC +
        ')). Cloudflare’s classification of bots treats price scraping and competitive intelligence gathering as a behaviour of their own: Data Collection. To be verified, a bot has to be transparent about who it is and what it does. It must also obey robots.txt, the file where a site says what bots may fetch, and not be seen evading what site owners prefer ([Cloudflare docs](' +
        CF_VERIFIED +
        ')).',
    },
    {
      kind: 'p',
      text: 'In the EU, Article 50(1) of the AI Act covers AI systems that interact directly with people ([Article 50](' +
        AI_ACT_50 +
        ')). Their providers must design them so the people are told they’re dealing with an AI, unless that is obvious. The rule applies from 2 August 2026 ([Article 113](' +
        AI_ACT_113 +
        ')). Whether it reaches an agent sent to research a competitor is a question for a lawyer.',
    },
    {
      kind: 'p',
      text: 'A CAPTCHA tells an agent plainly that the site wants a person at that step. In US federal law, the BOTS Act already makes it unlawful to get round the security measures a ticket site uses to enforce its purchase limits ([15 U.S.C. §45c](' +
        BOTS_ACT +
        ')).',
    },
    {
      kind: 'p',
      text: 'For an agent doing competitor research, the practical line is to identify it, keep to public paths, respect what a site blocks and never get past a CAPTCHA. Site owners weighing the other side can see [should you block AI agents](/blog/agent-ready-website).',
    },

    { kind: 'h2', id: 'ai-customers', text: 'How AI customers keep to these lines' },
    {
      kind: 'p',
      text: '**' +
        AI_CUSTOMER.definition +
        '** It works for the company that sends it, at any company it is sent to, competitors included. The term is explained in full in [what AI customers are](/blog/ai-customers).',
    },
    {
      kind: 'p',
      text: 'Every AI customer says it’s an AI when it talks to a person, never uses fake payment details, never gets round a CAPTCHA or a bot block and never clicks paid ads at volume. It keeps what any customer would see. Any company can write to seun@useobsession.com to keep Obsession’s AI customers off its site, as the [page for companies an AI customer visits](/agents) sets out.',
    },
    {
      kind: 'p',
      text: 'Where a company puts a CAPTCHA or a bot check in front of a step, the report names the step it couldn’t test. Each email, page and price is kept exactly as it arrived, with the time it came.',
    },
    {
      kind: 'p',
      text: 'Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof. The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026.',
    },
    {
      kind: 'list',
      items: [
        '[Competitor tracking](/recipes/competitor-tracking) signs up to every competitor and logs each email, offer, price change and public ad.',
        '[Price watch](/recipes/price-watch) checks every competitor’s prices, offers and delivery each morning, plus the codes they only send subscribers.',
        '[Trial teardown](/recipes/trial-teardown) starts a competitor’s free trial and logs every onboarding email, prompt and offer, day by day.',
        'To [track competitor emails](/recipes/email-sms-tracking), AI customers subscribe to every brand on your list and set their emails side by side: who sends most, and who discounts first.',
        'The [AI mystery shopper](/recipes/mystery-shopper) goes through your own business, or a client’s, as a customer does, from the first click to the last email.',
      ],
    },
    {
      kind: 'p',
      text: '[Worked examples](/use-cases) show one job run end to end for a store, an agency or a sales team. Your company chooses which competitors and which trials its AI customers join, so checking each trial’s terms first stays with your company. If your company needs to see what competitors send their customers, every email, offer and price as it arrived, use Obsession.',
    },
    {
      kind: 'cta',
      text: 'Name any company, your own, a competitor or a prospect, and an AI customer signs up there as a real customer, with its own inbox, phone number and browser. It stays for months and keeps every email, offer, price and page exactly as it arrived.',
      to: '/',
      label: 'Meet your first AI customers',
    },

    { kind: 'h2', id: 'ask-a-lawyer', text: 'When to ask a lawyer' },
    {
      kind: 'p',
      text: 'Ask a lawyer where your company and the competitor operate before research that involves any of these:',
    },
    {
      kind: 'list',
      items: [
        '**Posing as someone.** A made-up company, a false name or a pretend buyer on a call or a demo.',
        '**A login that isn’t yours.** Someone else’s account, a shared password or an invite meant for another person.',
        '**A block or a warning.** A CAPTCHA, a bot check, a blocked address or a letter asking you to stop.',
        '**Staff on record.** Call recordings, screenshots that show named people, or notes on individual employees.',
        '**Personal data.** Anything about the competitor’s staff or customers, which data protection law such as the UK GDPR covers.',
        '**Terms that bar your use.** A trial or a site whose terms exclude competitors, competitive use, bots or AI agents.',
        '**Licensed work and regulated sectors.** Financial services, healthcare, gambling or ticketing, or paid checks on a competitor’s staff in a US state that licenses them. Nevada’s private investigator law, for example, covers paid investigations into a person’s conduct or efficiency, unless only public information is used ([NRS 648.012](' +
          NRS_648 +
          ')).',
        '**More than one country.** Your company in one and the competitor in another, where both sets of law can apply.',
      ],
    },

    { kind: 'h2', id: 'questions', text: 'Questions about mystery shopping competitors' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is mystery shopping legal?',
          a: 'Mystery shopping is an established research method. Companies use mystery shoppers to check their own staff and sites, and research bodies such as the MRS in the UK publish rules for it. What decides a particular shop is how it’s done: whether anyone is deceived, what terms apply, whether trade secrets are taken and whether anyone gets into a system they weren’t let into.',
        },
        {
          q: 'Is mystery shopping legal in the UK?',
          a: 'Mystery shopping is an established research method in the UK, and the Market Research Society publishes a guideline for it, mystery shops of competitors included. The Computer Misuse Act 1990 covers access to systems, and the Trade Secrets (Enforcement, etc.) Regulations 2018 cover confidential information. The UK GDPR covers personal data, such as recordings of staff.',
        },
        {
          q: 'Is competitive intelligence legal?',
          a: 'Competitive intelligence is the work of gathering and analysing information about competitors, such as their prices, products and hiring. US and EU trade secret law count reverse engineering, and testing a product made available to the public, as lawful ways to get information. SCIP, the profession’s association, separates that work from corporate espionage, which its ethics guidance says often involves illegal acts such as bribing employees to reveal confidential information.',
        },
        {
          q: 'Can a competitor sign up to my company’s newsletter or trial?',
          a: 'Usually, through the same public form any customer uses, unless your company’s terms bar it. Some companies’ terms exclude competitors, as Salesforce’s do for its trials. A site can also turn away bots and AI agents through its terms, its robots.txt file or a service such as Cloudflare.',
        },
        {
          q: 'Is it legal to use an AI agent to research a competitor?',
          a: 'The same 4 questions apply as for a person: deception, terms, trade secrets and access. In the US, the Ninth Circuit treated a shopping agent as its user’s tool under computer crime law in August 2026, and left terms of service and other claims open. Identify the agent, keep it to public paths, respect what each site blocks and never let it get past a CAPTCHA.',
        },
        {
          q: 'Is competitive intelligence the same as industrial espionage?',
          a: 'No. US trade secret law (18 U.S.C. §1839) names espionage, theft and bribery as improper means of getting a trade secret, and excludes reverse engineering and other lawful means. Competitive intelligence works from public sources, such as a competitor’s website, ads and filings, and SCIP’s code asks its members to comply with all applicable laws.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'General information, not legal advice',
      text: 'Each legal point names the place it applies and links to the law, the court’s opinion or the company’s own terms, with terms quoted as they stood on 1 November 2026. It’s general information, not legal advice. For a specific plan, ask a lawyer where your company and the competitor operate. Thornvale is an invented company.',
    },
  ],

  sources: [
    { title: 'Amazon.com Services, LLC v. Perplexity AI, Inc., No. 26-1444', publisher: 'US Court of Appeals for the Ninth Circuit', url: CA9_PERPLEXITY, date: '2026-08-04' },
    { title: '18 U.S.C. §1839, definitions (Defend Trade Secrets Act)', publisher: 'Legal Information Institute, Cornell Law School', url: USC_1839, date: '2016-05-11' },
    {
      title: 'Directive (EU) 2016/943 on the protection of undisclosed know-how and business information (trade secrets)',
      publisher: 'Official Journal of the European Union',
      url: EU_TSD,
      date: '2016-06-08',
    },
    { title: 'Ethics and integrity: the SCIP code of ethics and ethics FAQs', publisher: 'SCIP', url: SCIP },
    { title: 'hiQ Labs, Inc. v. LinkedIn Corporation, No. 17-16783', publisher: 'US Court of Appeals for the Ninth Circuit', url: HIQ, date: '2022-04-18' },
    { title: 'The Trade Secrets (Enforcement, etc.) Regulations 2018, regulation 2', publisher: 'legislation.gov.uk', url: UK_TSR_2, date: '2018-05-15' },
    { title: 'The Trade Secrets (Enforcement, etc.) Regulations 2018, regulation 3', publisher: 'legislation.gov.uk', url: UK_TSR_3, date: '2018-05-15' },
    { title: 'Van Buren v. United States, No. 19-783', publisher: 'Supreme Court of the United States', url: VAN_BUREN, date: '2021-06-03' },
    { title: 'Computer Misuse Act 1990, section 1', publisher: 'legislation.gov.uk', url: CMA_S1, date: '1990-06-29' },
    { title: 'Computer Misuse Act 1990, section 17', publisher: 'legislation.gov.uk', url: CMA_S17, date: '1990-06-29' },
    { title: 'Main Services Agreement', publisher: 'Salesforce', url: SALESFORCE, date: '2026-10-15' },
    { title: 'Terms of Service', publisher: 'Klaviyo', url: KLAVIYO, date: '2025-12-17' },
    { title: 'MRS Guideline: Conducting Mystery Shopping', publisher: 'Market Research Society', url: MRS, date: '2020-03' },
    { title: '18 U.S.C. §2511, interception of communications', publisher: 'Legal Information Institute, Cornell Law School', url: USC_2511, date: '1986' },
    { title: 'RCW 9.73.030: intercepting, recording, or divulging private communication', publisher: 'Washington State Legislature', url: WA_RCW, date: '2021' },
    { title: 'UK GDPR, Article 4: definitions', publisher: 'legislation.gov.uk', url: UK_GDPR_4, date: '2016-04-27' },
    { title: 'UK GDPR, Article 6: lawfulness of processing', publisher: 'legislation.gov.uk', url: UK_GDPR_6, date: '2016-04-27' },
    { title: 'Ninth Circuit lifts restrictions on agentic AI accessing Amazon', publisher: 'Technology & Marketing Law Blog (Eric Goldman)', url: GOLDMAN, date: '2026-08-06' },
    { title: 'User Agreement', publisher: 'eBay', url: EBAY, date: '2026-06-28' },
    { title: 'Forget IPs: using cryptography to verify bot and agent traffic', publisher: 'Cloudflare', url: CF_WBA, date: '2025-05-15' },
    { title: 'HTTP Message Signatures for automated traffic (draft-ietf-webbotauth-httpsig-protocol-01)', publisher: 'IETF', url: IETF, date: '2026-10-29' },
    { title: 'New options to manage AI traffic', publisher: 'Cloudflare changelog', url: CF_AI_TRAFFIC, date: '2026-07-01' },
    { title: 'Verified bots', publisher: 'Cloudflare docs', url: CF_VERIFIED, date: '2026-10-08' },
    { title: 'AI Act, Article 50: transparency obligations', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_50, date: '2026-07-27' },
    { title: 'AI Act, Article 113: entry into force and application', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_113, date: '2026-07-27' },
    { title: '15 U.S.C. §45c, circumvention of ticket access control measures (BOTS Act)', publisher: 'Legal Information Institute, Cornell Law School', url: BOTS_ACT, date: '2016-12-14' },
    { title: 'NRS 648.012: private investigator defined', publisher: 'Nevada Legislature', url: NRS_648, date: '2015' },
  ],

  related: [
    'recipe:competitor-tracking',
    'recipe:email-sms-tracking',
    'recipe:trial-teardown',
    'recipe:mystery-shopper',
    'recipe:price-watch',
    'competitor-email-tracking-tools',
    'ecommerce-competitive-intelligence',
  ],
}
