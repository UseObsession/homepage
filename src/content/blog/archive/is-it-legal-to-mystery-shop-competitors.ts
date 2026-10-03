import type { BlogPost } from '../types'

/* Post 1 (docs/SEARCH.md section 5): the trust hub's owner page for "is it legal to mystery shop competitors".
   Thought leadership: no rival product is named or reviewed. Every statute, ruling, code and quote was read at its
   source on 3 Oct 2026. The 2 Reddit threads could not be opened (reddit.com refused every automated fetch), so the
   post opens on the Epic v. TCS facts from the Seventh Circuit's opinion instead and cites no Reddit thread.
   HOLD before it ships:
   1. A UK and a US lawyer review this version (SEARCH.md section 1). When both are back, add this sentence to the
      "Not legal advice" note, after its 3rd sentence: "A UK and a US lawyer read it before it went live."
   2. The blog page must render `answer` under the title (SEARCH.md section 5 and the launch checklist). If it
      doesn't, restore an opening paragraph that answers the question before the Epic story.
   3. Once Seun confirms consent for the September store check, append to the paragraph after the run screen:
      " Our [September store check](/sample-output) shows what that record looks like on a real store."
   Screens: battlecard (trial section), kit and run (the standard). */

const SCIP = 'https://www.scip.org/page/Ethical-Intelligence'
const DTSA = 'https://www.law.cornell.edu/uscode/text/18/1839'
const EEA = 'https://www.law.cornell.edu/uscode/text/18/1832'
const EU_TSD = 'https://eur-lex.europa.eu/eli/dir/2016/943/oj/eng'
const UK_TSR = 'https://www.legislation.gov.uk/uksi/2018/597/made'
const CMA = 'https://www.legislation.gov.uk/ukpga/1990/18/section/1'
const FRAUD = 'https://www.legislation.gov.uk/ukpga/2006/35/section/2'
const EU_HG =
  'https://competition-policy.ec.europa.eu/document/download/fd641c1e-7415-4e60-ac21-7ab3e72045d2_en?filename=2023_revised_horizontal_guidelines_en.pdf'
const NRS = 'https://www.leg.state.nv.us/nrs/nrs-648.html'
const PILB = 'https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Boards-commissions/2024/1-FORBES%20LETTER%20TO%20PILB.pdf'
const PILB_GUIDE = 'https://www.pilb.nv.gov/siteassets/pilb.nv.gov/content/work-cards/study-guide-rev-06.2026.pdf'
const CA_7522 = 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7522'
const CA_632 = 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=632'
const MRS = 'https://www.mrs.org.uk/pdf/MRS-Guideline-Conducting-Mystery-Shopping.pdf'
const MSPA =
  'https://mspa-ea.org/files/documents/ethics&standards/2023%20-%20MSPA%20EA%20-%20Guidelines%20for%20Mystery%20Shopping%20vs2%20-%2012122023.pdf'
const ESOMAR = 'https://standards.esomar.org/assets/documents/icc-esomar-code-2025.pdf'
const ETHICS = 'https://onlinelibrary.wiley.com/doi/10.1111/1467-8608.00294'
const SFDC = 'https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/legal/Salesforce_MSA.pdf'
const BMC = 'https://www.bmc.com/content/dam/bmc/corporate/csma.pdf'
const CERBOS = 'https://www.cerbos.dev/assets/legal/cerbos-master-services-agreement-20250707.pdf'
const HIQ = 'https://caselaw.findlaw.com/court/us-dis-crt-n-d-cal/2182242.html'
const EPIC = 'https://law.justia.com/cases/federal/appellate-courts/ca7/19-1613/19-1613-2020-08-20.html'
const NYT = 'https://www.nytimes.com/2001/09/07/business/p-g-said-to-agree-to-pay-unilever-10-million-in-spying-case.html'
const LAT = 'https://www.latimes.com/archives/la-xpm-2001-sep-07-fi-43089-story.html'
const UPI = 'https://www.upi.com/Archives/2001/09/07/PG-Unilever-settle-corporate-spying-case/4335999835200/'
const SEATTLE = 'https://www.seattletimes.com/business/amazon/amazon-sues-to-stop-perplexity-from-using-ai-tool-to-buy-stuff/'
const NINTH_OP = 'https://cdn.ca9.uscourts.gov/datastore/opinions/2026/08/04/26-1444.pdf'
const NINTH = 'https://blog.ericgoldman.org/archives/2026/08/ninth-circuit-lifts-restrictions-on-agentic-ai-accessing-amazon.htm'
const AMAZON = 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GLSBYFE9MGKKQXXM'
const CF_CHANGELOG = 'https://developers.cloudflare.com/changelog/post/2026-07-01-ai-traffic-options/'
const CF_RULES = 'https://blog.cloudflare.com/content-independence-day-ai-options/'
const CF_WBA = 'https://blog.cloudflare.com/web-bot-auth/'
const CF_SIGNED = 'https://blog.cloudflare.com/signed-agents/'
const IETF = 'https://datatracker.ietf.org/doc/draft-ietf-webbotauth-httpsig-protocol/'
const KYA =
  'https://www.businesswire.com/news/home/20260909003891/en/Ant-International-Mastercard-and-Visa-Initiate-Collaboration-on-Know-Your-Agent-Interoperability-to-Scale-Agentic-Commerce'
const DATADOME = 'https://datadome.co/threat-research/ai-agent-identity-crisis/'
const TOS_SURVEY = 'https://agentatwork.xyz/notes/machine-account.html'
const GITHUB = 'https://docs.github.com/en/site-policy/github-terms/github-terms-of-service'
const GOODWIN =
  'https://www.goodwinlaw.com/en/insights/publications/2026/08/alerts-technology-dpc-eu-ai-act-transparency-obligations-now-in-force'
const BOT_ACT = 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=17941'

export const post: BlogPost = {
  slug: 'is-it-legal-to-mystery-shop-competitors',
  title: 'Is it legal to mystery shop your competitors?',
  dek: 'Looking is legal. Lying for access, breaking terms you accepted and getting past a locked door are where it goes wrong, for people posing as buyers and for AI agents alike.',
  metaTitle: 'Is it legal to mystery shop your competitors? 2026 guide',
  description:
    'Is it legal to mystery shop competitors? Usually, as yourself, on public paths. How deception, terms and trade secrets change it, for people and AI agents.',
  answer:
    'Mystery shopping competitors is generally legal when the shopper uses the public paths any customer can, under a real identity: public pages, newsletters, free trials that need no card and the chat bot. The legal risk comes from deceiving staff to get confidential information, breaking terms the shopper accepted, taking trade secrets or getting past a login or block, and the same applies to AI agents: in August 2026 the Ninth Circuit called one shopping agent “a tool, not a person”.',
  primaryKeyword: 'is it legal to mystery shop competitors',
  keywords: [
    'is mystery shopping competitors legal',
    'mystery shopping competition law',
    'is competitive intelligence legal',
    'competitive intelligence vs industrial espionage',
    'is mystery shopping ethical',
    'is it legal to sign up for a competitor’s free trial',
    'is free trial abuse illegal',
    'can ai agents log in to websites',
    'declared ai agent',
    'is mystery shopping legal in the uk',
  ],
  category: 'Declared agents',
  published: '2026-10-03',
  updated: '2026-10-03',
  readingMinutes: 15,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {},

  blocks: [
    {
      kind: 'p',
      text: `In 2014 an employee at a consultancy was sent a spreadsheet comparing his firm’s health record software with a rival’s, Epic’s, function by function. The comparison drew on files downloaded through a login a colleague had got, at an earlier job, by claiming to work for an Epic customer. A jury later valued what that comparison was worth to the consultancy at $140 million ([US Court of Appeals, Seventh Circuit](${EPIC})).`,
    },
    {
      kind: 'p',
      text: 'Most competitor research never comes near that. Whether it’s legal to mystery shop a competitor turns on 4 questions, and a borrowed login fails the last of them.',
    },
    {
      kind: 'note',
      title: 'Not legal advice',
      text: 'We build Obsession, which sends declared AI agents to other companies, so we have a stake in where this line sits. What follows is our reading of the statutes, rulings and professional codes linked throughout, each checked at its source on 3 October 2026. Laws differ by country and by state. Before you run a programme, show this to your own lawyer.',
    },

    { kind: 'h2', id: 'is-it-legal', text: 'Is it legal to mystery shop a competitor?' },
    {
      kind: 'p',
      text: `Looking has never been the problem. US trade secret law says information gained by “reverse engineering, independent derivation, or any other lawful means” isn’t taken by improper means ([18 U.S.C. § 1839](${DTSA})). EU law names the case outright: studying or testing “a product or object that has been made available to the public” is a lawful way to acquire even a trade secret ([Directive 2016/943, Article 3](${EU_TSD})). Even Nevada, whose licensing board files mystery shoppers under private investigators, leaves anyone “accessing exclusively public records, public databases or any other public information” out of that law ([NRS 648.012](${NRS})).`,
    },
    {
      kind: 'p',
      text: `SCIP, the professional association for competitive intelligence, agrees: asked whether mystery shopping is ethical, it says yes, provided it doesn’t break a retailer’s own rules, such as a ban on photography ([SCIP](${SCIP})).`,
    },
    {
      kind: 'p',
      text: 'What decides it is how you got in, what you said on the way and what you carried out.',
    },

    { kind: 'h2', id: 'four-questions', text: 'What turns competitor research into a legal problem?' },
    {
      kind: 'p',
      text: 'Put any method through these 4 questions. A yes to any of them is where lawyers start to earn their fees.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        `**Did you deceive a person?** SCIP’s code asks practitioners “to accurately disclose all relevant information, including one’s identity and organization, prior to all interviews”. On staff who call rivals posing as customers, it adds that the misrepresentation “may be illegal”, depending on where you are ([SCIP](${SCIP})).`,
        '**Did you break terms you accepted?** A free trial’s sign up box is a contract. Many ban competitors outright, and many require true registration details.',
        `**Did you take a trade secret?** That’s information that’s secret, valuable because it’s secret, and guarded with reasonable steps ([Trade Secrets Regulations 2018](${UK_TSR})). US federal law lists “misrepresentation” beside theft, bribery and espionage as improper means of getting one ([18 U.S.C. § 1839](${DTSA})).`,
        `**Did you get past a door that was shut?** In the UK, making a computer give you access you know is unauthorised is a crime ([Computer Misuse Act 1990, section 1](${CMA})). SCIP is blunt about one version: getting a password to a competitor’s site without authorisation “is illegal” ([SCIP](${SCIP})).`,
      ],
    },
    {
      kind: 'p',
      text: `Under all 4 sits personal data. A rival’s staff have names, voices and faces, and the UK’s Market Research Society says that when you shop a competitor, “personal information about employees cannot be collected” ([MRS, March 2020](${MRS})).`,
    },
    {
      kind: 'p',
      text: `Competition law mostly cuts the other way. The European Commission’s own example of a harmless disclosure is a petrol station advertising its prices: it “benefits consumers”, even though rivals see it too. The risk is a rival sharing what it hasn’t published. In the EU, a business that receives commercially sensitive information from a competitor, such as its pricing plans, is presumed to act on it unless it publicly distances itself, for example by saying clearly that it doesn’t want it ([European Commission, Horizontal Guidelines, 2023](${EU_HG})). If a rival ever sends you its plans, tell it in writing that you don’t want them.`,
    },
    {
      kind: 'table',
      caption: 'The usual methods, safest first. Our reading of the law, not legal advice.',
      cols: ['Method', 'Risk', 'Why'],
      rows: [
        [
          'Read public pages, prices and ads',
          'Low',
          'Public information. Check the site’s terms before collecting at scale with software.',
        ],
        [
          'Join the newsletter and texts',
          'Low',
          'You’re a subscriber like any other. Use an inbox that works, and unsubscribe when you’re done.',
        ],
        [
          'Ask the site’s chat bot',
          'Low',
          'A public channel. If a person takes over, you’re talking to staff, so the step ends there.',
        ],
        [
          'Start a free trial that needs no card',
          'Low to medium',
          'Turns on the terms you accept. Many ban competitors and “competitive purposes”.',
        ],
        [
          'Call staff posing as a buyer',
          'Medium',
          'Allowed under the MRS guideline if you collect nothing about the staff, but it deceives a person. SCIP says it may be illegal in some places, and MSPA Europe says shopping a competitor is illegal in some markets.',
        ],
        [
          'Book a demo as a made up company',
          'High',
          'Deceives a person, usually with false details on the booking form. A trade secret learned this way is learned by misrepresentation.',
        ],
        [
          'Get past a CAPTCHA or a block',
          'High',
          'A block withdraws permission. Getting round it is the access question again.',
        ],
        [
          'Log in with someone else’s account',
          'Very high',
          'The site never authorised you, whoever handed over the password.',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Every low risk method can be done under your real name, and most of the risky ones can’t, which is the quickest test there is.',
    },

    { kind: 'h2', id: 'free-trial', text: 'Can you sign up for a competitor’s free trial?' },
    {
      kind: 'p',
      text: 'Usually, as yourself, if the terms allow it. Read them before you click, because plenty don’t.',
    },
    {
      kind: 'p',
      text: `The clause to look for is short. Salesforce’s main services agreement, which also governs its free trials, says its services “may not be accessed for purposes of monitoring their availability, performance or functionality, or for any other benchmarking or competitive purposes”, and that direct competitors need written consent ([Salesforce MSA, updated 1 September 2026](${SFDC})). Near identical wording runs through other vendors’ agreements, such as [BMC’s](${BMC}) and [Cerbos’s](${CERBOS}). Click through one of those as a rival and you’re in breach from the first minute.`,
    },
    {
      kind: 'p',
      text: `Where there’s no such clause, the law leans your way. The EU rule that protects testing a public product also covers a product you hold lawfully, but only while you’re “free from any legally valid duty to limit the acquisition” of what you learn ([Directive 2016/943, Article 3](${EU_TSD})). A trial’s terms can be that duty, so reading them is most of the legal work.`,
    },
    {
      kind: 'p',
      text: `Repeat trials under made up names are a different matter. In hiQ v. LinkedIn, contractors told to open fake accounts were found to have breached LinkedIn’s user agreement whether or not they scraped anything, and hiQ was liable for what its contractors did ([US District Court, 4 November 2022](${HIQ})).`,
    },
    {
      kind: 'p',
      text: 'A clean trial teardown is dull by design, and it’s how our [trial teardown recipe](/recipes/trial-teardown) runs. 1 sign up per rival, under an identity that says what it is. No card, so there’s nothing to bill. No replies to the sales team. If a rep writes or calls, you stop and note the time. Trials that need a card or a sales call get skipped: the first risks a bill, the second means talking to staff.',
    },
    {
      kind: 'screen',
      screen: 'battlecard',
      workspace: 'company',
      caption: 'Example: 3 rivals’ 14 day trials side by side. Rival B’s closed on day 6, the moment its rep wrote.',
    },

    { kind: 'h2', id: 'pretend-buyers', text: 'Where do fake companies and pretend buyers cross the line?' },
    {
      kind: 'p',
      text: 'Ethically, at the first lie told to a person. Legally, at the first lie that gets you something a real buyer wouldn’t: a login, an NDA, a price sheet marked confidential.',
    },
    {
      kind: 'p',
      text: 'What a rep tells every caller is hard to call a secret, which is why pretend buyer research survives. The exposure sits around the pitch: the false name on the booking form, the fake company a rep spends a week qualifying, an NDA signed as someone you aren’t, the confidential price sheet that arrives afterwards. Under US law, a trade secret learned through misrepresentation is learned by improper means.',
    },
    {
      kind: 'p',
      text: 'Firms that sell this work describe it in 2 ways. Some say plainly that their analysts pose as prospective buyers and go through a rival’s whole sales process. Others say they never pretend to be someone else: their consultants are real, and only the story around the purchase is built for the occasion. Both kinds say their work is legal.',
    },
    {
      kind: 'p',
      text: 'Where either sits against SCIP’s disclosure rule is for you and your lawyer to judge. Our agents sidestep the question: at a rival they never talk to staff at all.',
    },
    {
      kind: 'p',
      text: `Getting this wrong costs money even when nothing illegal is proved. In 2001 Procter & Gamble admitted that contractors gathering information on Unilever’s hair care business had taken documents from bins outside a Unilever office, and Fortune reported that they’d also posed as market analysts. P&G said its own rules had been broken, not the law ([Los Angeles Times](${LAT})). It still fired 3 managers ([UPI](${UPI})) and, according to a person briefed on the deal, agreed to pay Unilever about $10 million ([The New York Times](${NYT})).`,
    },
    {
      kind: 'p',
      text: 'SCIP suggests a red face test for cases like this: how would your company feel if a newspaper reported it with your name attached?',
    },

    { kind: 'h2', id: 'ai-agents', text: 'Do the rules change when an AI agent does the shopping?' },
    {
      kind: 'p',
      text: 'Less than you’d hope. The one appeals court to rule so far treats a user’s agent as the user’s tool, which leaves the risk with whoever sends it.',
    },
    {
      kind: 'p',
      text: `The leading case is Amazon’s suit against Perplexity. Amazon sued in November 2025, saying Perplexity’s Comet agent shopped on Amazon for logged in users while presenting itself as a Google Chrome user ([The Seattle Times, 6 November 2025](${SEATTLE})). A district court blocked the agent. On 4 August 2026 the Ninth Circuit lifted that injunction: under the US computer fraud law it was the user, not Perplexity, who accessed Amazon, because the agent “is a tool, not a person for statutory purposes” ([Ninth Circuit opinion](${NINTH_OP})).`,
    },
    {
      kind: 'quote',
      text: 'We do not establish a new legal regime governing agentic AI.',
      cite: 'US Court of Appeals, Ninth Circuit, Amazon v. Perplexity, 4 August 2026',
      href: NINTH_OP,
    },
    {
      kind: 'p',
      text: 'The narrow parts matter as much as the headline. The agent in the case ran inside the user’s own browser, and the court said it wasn’t deciding what happens when a provider controls its agent more directly. Agents that run on their provider’s own browsers with their own identities, as ours do, are that different record. The court also left tort claims open, and said in a footnote that Amazon can still “regulate access to Amazon.com via private terms of service for its users”. That puts the weight on the terms, and on following them.',
    },
    {
      kind: 'p',
      text: `Amazon has written those terms. Its Conditions of Use, last updated 14 August 2026, require every agent to put “Agent/[agent name]” in each request, never to complete or get round a CAPTCHA, and to “respond truthfully” when asked whether it’s a human ([Amazon Conditions of Use](${AMAZON})).`,
    },
    {
      kind: 'p',
      text: `The web’s plumbing is moving the same way. Since 15 September 2026, new domains on Cloudflare block bots in its Agent category on pages that show ads, unless the owner changes the default ([Cloudflare](${CF_CHANGELOG})). Its test for a verified bot is 2 things: “that you represent yourself honestly, and you don’t abuse the access that honesty earns”. It also files “competitive intelligence gathering” under a label of its own, Data Collection, apart from agents that act for a person ([Cloudflare, 1 July 2026](${CF_RULES})).`,
    },
    {
      kind: 'p',
      text: `Proving who you are is getting easier. Cloudflare’s [Web Bot Auth](${CF_WBA}) and [signed agents](${CF_SIGNED}) let an agent sign every request so a site can check who sent it, and on 1 September 2026 the protocol became an IETF working group draft, written by engineers from Cloudflare and Google ([IETF](${IETF})). In the same month Ant International, Mastercard and Visa began work on a Know Your Agent framework that would link each agent to a validated operator ([Business Wire](${KYA})).`,
    },
    {
      kind: 'p',
      text: `Most sites can’t check yet. [DataDome found](${DATADOME}) that 80% of AI agents identify themselves only with a user agent string anyone can copy, then tested what happens when someone does.`,
    },
    {
      kind: 'stat',
      value: '79.7%',
      label: 'of 698,214 websites let a spoofed AI agent through without blocking or challenging it',
      source: 'DataDome, 26 February 2026',
      href: DATADOME,
    },
    {
      kind: 'p',
      text: `Where an agent talks to a person, disclosure is already law in places. Since 2 August 2026, the EU AI Act has required AI systems built to interact with people to tell them they’re dealing with AI, unless it’s obvious ([Goodwin, 3 August 2026](${GOODWIN})). California’s 2018 bot law bans bots that mislead people in California about their artificial identity to push a purchase or sale, and its wording reaches a bot posing as a buyer as well as one selling ([Business and Professions Code § 17941](${BOT_ACT})). A clear statement that it’s a bot is a complete defence.`,
    },
    {
      kind: 'p',
      text: `Then there are the terms, most written before agents existed. One small survey, published in August 2026 by an AI agent looking for work, read 45 platforms’ terms, from payment apps to freelance marketplaces, and found 26 that ban access by automated means and 2 that define an account a machine can hold ([agentatwork, 15 August 2026](${TOS_SURVEY})).`,
    },
    {
      kind: 'p',
      text: `GitHub’s is the rare clause written for them: a machine account is allowed if a named human accepts the terms and “is responsible for its actions” ([GitHub Terms of Service](${GITHUB})). Put together, the direction is easy to plan around. Say what the agent is, sign what it sends, and treat a door marked “no agents” as closed.`,
    },

    { kind: 'h2', id: 'regulation', text: 'Is mystery shopping regulated anywhere?' },
    {
      kind: 'p',
      text: 'Lightly, in most places. Nevada and California put some of it under private investigator law, and the professional codes have only just started to mention AI.',
    },
    {
      kind: 'p',
      text: `Nevada’s private investigator law covers anyone paid to investigate the “conduct”, “honesty” or “efficiency” of any person ([NRS 648.012](${NRS})), and its licensing board files mystery shoppers under it: its work card study guide lists “Private Investigator (Mystery Shopper)” ([Nevada PILB](${PILB_GUIDE})). In 2024 the board told Forbes Travel Guide that its hotel evaluators needed a licence because the work resembled mystery shopping, according to the company’s lawyers, who disputed it ([Nevada PILB board papers, 2024](${PILB})). The statute does leave out anyone using only public information. Ask a Nevada lawyer before you rely on that.`,
    },
    {
      kind: 'p',
      text: `California’s private investigator law exempts shopping studies only while the shopper records objective observations of purchases in a business’s public areas on a set questionnaire, and not when that questionnaire is the sole basis for judging an employee’s work ([Business and Professions Code § 7522](${CA_7522})).`,
    },
    {
      kind: 'p',
      text: `The UK has no licence. The Market Research Society’s guideline sets the standard for its members: when you shop a competitor, collect nothing personal about its staff, keep the time you take from them short, report in aggregate, and make sure the business suffers no “detrimental effect” ([MRS, March 2020](${MRS})).`,
    },
    {
      kind: 'p',
      text: `The Mystery Shopping Professionals Association’s guidelines for Europe and Africa go further: “In some markets it is illegal to Mystery Shop a competitor’s business”, and collecting a competitor employee’s name or contact details is against GDPR best practice in all of them ([MSPA Europe and Africa, 12 December 2023](${MSPA})). They don’t name the markets. Check before you run a programme abroad.`,
    },
    {
      kind: 'p',
      text: `Neither guideline mentions AI. The ICC/ESOMAR code, revised in July 2025 for market research in general, does: researchers collecting personal data must “identify themselves promptly”, and “the use of a synthetic persona for data collection must be clearly notified to the data subject at the beginning of the research” ([ICC/ESOMAR International Code, 2025](${ESOMAR})). It wasn’t written for mystery shopping, but it’s the plainest professional statement we found that an AI standing in for a person has to say so.`,
    },

    { kind: 'h2', id: 'standard', text: 'Declare the agent, use public paths, stop before payment' },
    {
      kind: 'p',
      text: 'A declared AI agent is one that says it’s AI and names who answers for it, in every request and every message, and signs what it sends so anyone can check. These are the 8 rules we hold ours to. Swap “AI” for your own name and a human analyst with a notebook could adopt all but the signature tomorrow. Copy them, change them, publish your own.',
    },
    {
      kind: 'screen',
      screen: 'kit',
      workspace: 'agency',
      caption:
        'Example: test customer 2 of 4 on a client’s store, run with the owner’s OK. Its own inbox, number and browser, a test card capped at £0, and every step signed.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Say it’s AI, and who answers for it.** Name the operator and link to a page that explains the agent (ours is [how our agents identify themselves](/agents)). At a rival or a prospect, ours name Obsession but not the customer they work for, the way a research agency keeps its client private. Answer truthfully if anyone asks whether it’s human.',
        '**Use only the doors any customer uses.** Sign ups, newsletters, texts, public pages, public ads, the chat bot and trials that need no card. Nothing behind a login you weren’t given, and a CAPTCHA or a block is an answer.',
        '**Ask the bot, never the staff.** If a person picks up the chat, the step ends. SCIP’s disclosure rule is about interviews, and the simplest way to keep it is to hold none.',
        '**No card and no basket at a rival.** Skip any trial that needs a card or a sales call.',
        '**Leave when a rep writes.** Never reply. Close the trial and record when it happened.',
        '**Stop before payment on anyone else’s store.** Real orders run only on your own store, on a budget you set.',
        '**Touch a client’s journeys only with the owner’s OK.** Baskets, checkouts and bookings on a client’s business need the owner’s permission in writing.',
        '**Keep a signed record.** Every step dated, screenshotted and signed, so you can show exactly what happened, and what didn’t.',
      ],
    },
    {
      kind: 'screen',
      screen: 'run',
      workspace: 'agency',
      caption:
        'Example: a signed record. Each step has a time, a screenshot and a signature anyone can check, and the checkout stops before payment.',
    },
    {
      kind: 'p',
      text: 'Rules like these cost you something. You won’t hear a rival’s sales pitch, and you won’t see a checkout past the payment page. What you get back is a record you could hand to the company you studied, or to a judge, with nothing in it you’d need to explain.',
    },
    {
      kind: 'p',
      text: 'The same rules hold at a prospect, where an agent becomes a customer ([prospect intelligence](/recipes/prospect-intelligence)), and on a rival’s inbox ([email and SMS tracking](/recipes/email-sms-tracking)). On your own business, or a client’s with their OK, a [mystery shopper](/recipes/mystery-shopper) can go further, into baskets and checkouts.',
    },
    {
      kind: 'p',
      text: 'Agencies can run the public half as a [free audit that wins clients](/blog/free-audit-agency-clients). Our reviews of [AI mystery shopping tools](/blog/best-ai-mystery-shopping-tools) and [competitor email tracking tools](/blog/best-competitor-email-tracking-tools) ask each tool who it contacts, and whether it says it’s AI.',
    },
    {
      kind: 'cta',
      text: 'Competitor tracking runs on these 8 rules. A declared AI agent joins each rival’s emails and texts, reads their public pages and ads, and logs every offer, continuously.',
      to: '/recipes/competitor-tracking',
      label: 'How competitor tracking works',
    },

    { kind: 'h2', id: 'questions', text: 'Competitor sign ups, staff calls and burner emails' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is mystery shopping legal in the UK?',
          a: `Yes. There’s no licence, and the Market Research Society’s guideline sets the professional standard. The limits are the general ones: the [Computer Misuse Act](${CMA}) for access you weren’t given, breach of confidence for trade secrets, and UK GDPR for staff names, voices and recordings. At a competitor, MRS says to collect no personal information about employees.`,
        },
        {
          q: 'Can a competitor sign up for my product?',
          a: `Unless your terms forbid it, yes, and nobody can stop a rival reading your public site. If you want competitors out of your trial, say so in your terms, as many software firms do (“direct competitors are prohibited from accessing the Services” is [common wording](${SFDC})), then enforce it when you spot one.`,
        },
        {
          q: 'Can I call a competitor’s sales team pretending to be a customer?',
          a: `It isn’t unlawful everywhere: the MRS guideline allows mystery shopping competitors, as long as nothing personal is collected about their staff. But it’s where the risk starts. SCIP says this kind of misrepresentation may be illegal depending on where you are, MSPA Europe says shopping a competitor is illegal in some markets, and anything confidential you take away was got by misrepresentation. Recording the call adds a risk of its own: in California, recording a confidential call without every party’s consent is a crime ([Penal Code § 632](${CA_632})). Our agents don’t call staff at all.`,
        },
        {
          q: 'Is competitive intelligence the same as industrial espionage?',
          a: `No. SCIP describes competitive intelligence as gathering information “legally and ethically”, and says corporate spying “often implies illegal activities, such as bribing or hiring employees to divulge confidential information” ([SCIP](${SCIP})). In the US, knowingly getting a trade secret “by fraud, artifice, or deception”, to benefit anyone but its owner, is a federal crime ([18 U.S.C. § 1832](${EEA})). The line runs through the method: a price list is intelligence when it’s on the public site and espionage when it came from a borrowed login.`,
        },
        {
          q: 'Is mystery shopping ethical?',
          a: `The profession says yes, within limits. SCIP calls it ethical if you keep to a business’s own rules, such as a ban on photography, and MRS asks that a competitor’s staff lose little time and have nothing personal collected about them ([MRS, March 2020](${MRS})). The case against is that it asks people to lie: a 2002 study drawing on a UK mobile phone company called mystery shopping “basically unethical”, because employers ask staff to deceive on the company’s behalf ([Business Ethics: A European Review](${ETHICS})). A declared agent sidesteps that objection, because it tells no lie.`,
        },
        {
          q: 'Can AI agents log in to websites?',
          a: 'Technically, yes. Legally, it depends on whose account it is and what the site’s terms say. An agent using your own account at your request is close to the Perplexity case, where the Ninth Circuit treated the user as the one accessing, for computer fraud purposes. An agent using a login it wasn’t given is unauthorised access, whoever wrote the code. Check the terms, name the agent, and stop at a CAPTCHA. If you build your own, give each agent its own identity, as our [API](/developers) does.',
        },
        {
          q: 'Can I use a burner email to sign up for a rival’s trial?',
          a: 'A second inbox is fine, and keeping trial mail out of your work inbox is sensible. What matters is the name and company you attach to it. Many terms require accurate registration details, and fake accounts were enough for a breach finding in hiQ v. LinkedIn. Use a separate inbox under an identity that says who it is.',
        },
        {
          q: 'Is free trial abuse illegal?',
          a: `Taking the same trial over and over under made up names usually breaks the terms, so it’s a contract problem first. With fake payment details or someone else’s identity it moves toward fraud: in England, Wales and Northern Ireland, dishonestly making a false representation to make a gain, or to cause someone a loss, is an offence ([Fraud Act 2006, section 2](${FRAUD})). If a trial needs a card, skip it.`,
        },
      ],
    },
  ],

  sources: [
    { title: 'Ethical Intelligence: SCIP Code of Ethics and ethics FAQs', publisher: 'SCIP', url: SCIP, date: 'Checked 3 Oct 2026' },
    { title: '18 U.S. Code § 1839: Definitions', publisher: 'Legal Information Institute, Cornell Law School', url: DTSA, date: 'Checked 3 Oct 2026' },
    { title: '18 U.S. Code § 1832: Theft of trade secrets', publisher: 'Legal Information Institute, Cornell Law School', url: EEA, date: 'Checked 3 Oct 2026' },
    { title: 'Directive (EU) 2016/943 on the protection of trade secrets', publisher: 'EUR-Lex', url: EU_TSD, date: '8 Jun 2016' },
    { title: 'The Trade Secrets (Enforcement, etc.) Regulations 2018', publisher: 'legislation.gov.uk', url: UK_TSR, date: '9 Jun 2018' },
    { title: 'Computer Misuse Act 1990, section 1', publisher: 'legislation.gov.uk', url: CMA, date: 'Checked 3 Oct 2026' },
    { title: 'Fraud Act 2006, section 2', publisher: 'legislation.gov.uk', url: FRAUD, date: 'Checked 3 Oct 2026' },
    {
      title: 'Horizontal Guidelines (Article 101 TFEU), chapter 6: information exchange',
      publisher: 'European Commission',
      url: EU_HG,
      date: '1 Jun 2023',
    },
    { title: 'NRS 648.012: “Private investigator” defined', publisher: 'Nevada Legislature', url: NRS, date: 'Checked 3 Oct 2026' },
    {
      title: 'Registered work card exam study guide: Private Investigator (Mystery Shopper)',
      publisher: 'Nevada Private Investigators Licensing Board',
      url: PILB_GUIDE,
      date: 'Rev. Jun 2026',
    },
    {
      title: 'Board papers: Forbes Travel Guide letter (18 Jun 2024) and Preferred Investigation letter (9 Sep 2024)',
      publisher: 'Nevada Private Investigators Licensing Board',
      url: PILB,
      date: '2024',
    },
    {
      title: 'Business and Professions Code § 7522: exemptions, including shopping studies (subdivision n)',
      publisher: 'California Legislative Information',
      url: CA_7522,
      date: 'Checked 3 Oct 2026',
    },
    {
      title: 'Penal Code § 632: recording confidential communications',
      publisher: 'California Legislative Information',
      url: CA_632,
      date: 'Checked 3 Oct 2026',
    },
    { title: 'MRS Guideline: Conducting Mystery Shopping', publisher: 'Market Research Society', url: MRS, date: 'Mar 2020' },
    { title: 'Guidelines for Mystery Shopping, version 2', publisher: 'MSPA Europe and Africa', url: MSPA, date: '12 Dec 2023' },
    {
      title: 'ICC/ESOMAR International Code on Market, Opinion and Social Research and Data Analytics',
      publisher: 'ESOMAR and ICC',
      url: ESOMAR,
      date: 'Jul 2025',
    },
    {
      title: 'Investigating the limits of competitive intelligence gathering: is mystery shopping ethical?',
      publisher: 'Business Ethics: A European Review (Ng Kwet Shing and Spence)',
      url: ETHICS,
      date: 'Oct 2002',
    },
    { title: 'Main Services Agreement', publisher: 'Salesforce', url: SFDC, date: 'Updated 1 Sep 2026' },
    { title: 'Cloud Services Master Agreement', publisher: 'BMC', url: BMC, date: 'Updated 30 Jul 2026' },
    { title: 'Master Services Agreement', publisher: 'Cerbos', url: CERBOS, date: 'Updated 7 Jul 2025' },
    { title: 'hiQ Labs v. LinkedIn, order on summary judgment', publisher: 'US District Court, N.D. California (via FindLaw)', url: HIQ, date: '4 Nov 2022' },
    { title: 'Epic Systems v. Tata Consultancy Services', publisher: 'US Court of Appeals, Seventh Circuit (via Justia)', url: EPIC, date: '20 Aug 2020' },
    { title: 'P.& G. Said to Agree to Pay Unilever $10 Million in Spying Case', publisher: 'The New York Times', url: NYT, date: '7 Sep 2001' },
    { title: 'P&G, Unilever Settle Corporate Spying Case', publisher: 'Los Angeles Times', url: LAT, date: '7 Sep 2001' },
    { title: 'P&G, Unilever settle corporate spying case', publisher: 'UPI', url: UPI, date: '7 Sep 2001' },
    {
      title: 'Amazon sues to stop Perplexity from using AI tool to buy stuff',
      publisher: 'The Seattle Times (from Bloomberg)',
      url: SEATTLE,
      date: '6 Nov 2025',
    },
    {
      title: 'Amazon.com Services, LLC v. Perplexity AI, Inc., No. 26-1444, opinion',
      publisher: 'US Court of Appeals, Ninth Circuit',
      url: NINTH_OP,
      date: '4 Aug 2026',
    },
    {
      title: 'Ninth Circuit Lifts Restrictions on Agentic AI Accessing Amazon',
      publisher: 'Technology & Marketing Law Blog (Eric Goldman; guest post by Kieran McCarthy)',
      url: NINTH,
      date: '6 Aug 2026',
    },
    { title: 'Conditions of Use: Agent Terms', publisher: 'Amazon', url: AMAZON, date: 'Updated 14 Aug 2026' },
    { title: 'New options to manage AI traffic', publisher: 'Cloudflare changelog', url: CF_CHANGELOG, date: '1 Jul 2026' },
    { title: 'Your site, your rules: new AI traffic options for all customers', publisher: 'Cloudflare', url: CF_RULES, date: '1 Jul 2026' },
    { title: 'Forget IPs: using cryptography to verify bot and agent traffic', publisher: 'Cloudflare', url: CF_WBA, date: '15 May 2025' },
    { title: 'The age of agents: cryptographically recognizing agent traffic', publisher: 'Cloudflare', url: CF_SIGNED, date: '28 Aug 2025' },
    { title: 'HTTP Message Signatures for automated traffic (draft 00)', publisher: 'IETF Web Bot Auth working group', url: IETF, date: '1 Sep 2026' },
    {
      title: 'Ant International, Mastercard and Visa Initiate Collaboration on Know-Your-Agent Interoperability to Scale Agentic Commerce',
      publisher: 'Business Wire',
      url: KYA,
      date: '9 Sep 2026',
    },
    {
      title: 'The AI Agent Identity Crisis: 80% of Agents Don’t Properly Identify Themselves, 80% of Sites Don’t Verify',
      publisher: 'DataDome (Jérôme Segura)',
      url: DATADOME,
      date: '26 Feb 2026',
    },
    { title: 'Two of forty-five: can a non-human hold an account?', publisher: 'agentatwork (a small independent study)', url: TOS_SURVEY, date: '15 Aug 2026' },
    { title: 'GitHub Terms of Service', publisher: 'GitHub', url: GITHUB, date: 'Checked 3 Oct 2026' },
    {
      title: 'Not Delayed, Not Deferred: EU AI Act Transparency Obligations Are Now in Force',
      publisher: 'Goodwin',
      url: GOODWIN,
      date: '3 Aug 2026',
    },
    { title: 'Business and Professions Code § 17941', publisher: 'California Legislative Information', url: BOT_ACT, date: 'Checked 3 Oct 2026' },
  ],

  related: [
    'free-audit-agency-clients',
    'best-ai-mystery-shopping-tools',
    'best-competitor-email-tracking-tools',
    'recipe:trial-teardown',
    'recipe:competitor-tracking',
    '/agents',
  ],
}
