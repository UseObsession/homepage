import type { BlogPost } from './types'

/* Post 1 (docs/SEARCH.md section 5): the trust hub's owner page for "is it legal to mystery shop competitors".
   Thought leadership: no rival product is reviewed. 2 B2B mystery shopping firms are described only in their own
   words, as factual reporting. Every statute, ruling, code and quote was read at its source on 3 Oct 2026.
   Before it ships: a UK and a US lawyer review it (SEARCH.md section 1), and the 2 Reddit threads are re-opened in a
   browser (reddit.com refused automated fetches on 3 Oct, so those 2 lines are paraphrased from the research notes
   and carry no quotes). Screens: battlecard (trial section), kit and run (the standard). */

const SCIP = 'https://www.scip.org/page/Ethical-Intelligence'
const DTSA = 'https://www.law.cornell.edu/uscode/text/18/1839'
const EEA = 'https://www.law.cornell.edu/uscode/text/18/1832'
const EU_TSD = 'https://eur-lex.europa.eu/eli/dir/2016/943/oj/eng'
const UK_TSR = 'https://www.legislation.gov.uk/uksi/2018/597/made'
const CMA = 'https://www.legislation.gov.uk/ukpga/1990/18/section/1'
const FRAUD = 'https://www.legislation.gov.uk/ukpga/2006/35/section/2'
const NRS = 'https://www.leg.state.nv.us/nrs/nrs-648.html'
const PILB = 'https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Boards-commissions/2024/1-FORBES%20LETTER%20TO%20PILB.pdf'
const MRS = 'https://www.mrs.org.uk/pdf/MRS-Guideline-Conducting-Mystery-Shopping.pdf'
const MSPA =
  'https://mspa-ea.org/files/documents/ethics&standards/2023%20-%20MSPA%20EA%20-%20Guidelines%20for%20Mystery%20Shopping%20vs2%20-%2012122023.pdf'
const ESOMAR = 'https://standards.esomar.org/assets/documents/icc-esomar-code-2025.pdf'
const SFDC = 'https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/legal/Salesforce_MSA.pdf'
const BMC = 'https://www.bmc.com/content/dam/bmc/corporate/csma.pdf'
const CERBOS = 'https://www.cerbos.dev/assets/legal/cerbos-master-services-agreement-20250707.pdf'
const HIQ = 'https://caselaw.findlaw.com/court/us-dis-crt-n-d-cal/2182242.html'
const EPIC = 'https://law.justia.com/cases/federal/appellate-courts/ca7/19-1613/19-1613-2020-08-20.html'
const NYT = 'https://www.nytimes.com/2001/09/07/business/p-g-said-to-agree-to-pay-unilever-10-million-in-spying-case.html'
const LAT = 'https://www.latimes.com/archives/la-xpm-2001-sep-07-fi-43089-story.html'
const UPI = 'https://www.upi.com/Archives/2001/09/07/PG-Unilever-settle-corporate-spying-case/4335999835200/'
const SEATTLE = 'https://www.seattletimes.com/business/amazon/amazon-sues-to-stop-perplexity-from-using-ai-tool-to-buy-stuff/'
const NINTH = 'https://blog.ericgoldman.org/archives/2026/08/ninth-circuit-lifts-restrictions-on-agentic-ai-accessing-amazon.htm'
const AMAZON = 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GLSBYFE9MGKKQXXM'
const CF_CHANGELOG = 'https://developers.cloudflare.com/changelog/post/2026-07-01-ai-traffic-options/'
const CF_RULES = 'https://blog.cloudflare.com/content-independence-day-ai-options/'
const CF_WBA = 'https://blog.cloudflare.com/web-bot-auth/'
const CF_SIGNED = 'https://blog.cloudflare.com/signed-agents/'
const IETF = 'https://datatracker.ietf.org/doc/draft-ietf-webbotauth-httpsig-protocol/'
const KYA =
  'https://www.businesswire.com/news/home/20260909003891/en/Ant-International-Mastercard-and-Visa-Initiate-Collaboration-on-Know-Your-Agent-Interoperability-to-Scale-Agentic-Commerce'
const DATADOME =
  'https://securityboulevard.com/2026/02/the-ai-agent-identity-crisis-80-of-agents-dont-properly-identify-themselves-80-of-sites-dont-verify/'
const TOS_SURVEY = 'https://agentatwork.xyz/notes/machine-account.html'
const GITHUB = 'https://docs.github.com/en/site-policy/github-terms/github-terms-of-service'
const GOODWIN =
  'https://www.goodwinlaw.com/en/insights/publications/2026/08/alerts-technology-dpc-eu-ai-act-transparency-obligations-now-in-force'
const BOT_ACT = 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=17941'
const OCTOPUS = 'https://www.octopusintelligence.com/b2b-mystery-shopping-competitive-intelligence/'
const MYSTERY_DEMO = 'https://www.mysterydemo.com/'
const REDDIT_SALES = 'https://www.reddit.com/r/sales/comments/1ruu0dh/legality_of_lying_to_obtain_competitor_information/'
const REDDIT_SAAS = 'https://www.reddit.com/r/SaaS/comments/1ny4skt/our_competitors_ceo_just_signed_up_on_our_website/'

export const post: BlogPost = {
  slug: 'is-it-legal-to-mystery-shop-competitors',
  title: 'Is it legal to mystery shop your competitors?',
  dek: 'Usually, if you go in the way any customer can, as yourself. Deception, contracts, trade secrets and logins are where it goes wrong, for people posing as buyers and for AI agents alike.',
  metaTitle: 'Is it legal to mystery shop your competitors? 2026 guide',
  description:
    'Is it legal to mystery shop competitors? Usually, via public paths, as yourself. How deception, terms and trade secrets change that, for people and AI agents.',
  answer:
    'Mystery shopping competitors is generally legal when the shopper uses the public paths any customer can, under a real identity: public pages, newsletters, free trials that need no card and the chat bot. It turns unlawful through deceiving staff, breaking terms the shopper accepted, taking trade secrets or getting past a login or block, and the same applies to AI agents, which the Ninth Circuit called “a tool, not a person” in August 2026.',
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
  author: { name: 'Obsession', role: 'Research' },
  hero: {},

  blocks: [
    {
      kind: 'p',
      text: `Generally, it’s legal to mystery shop competitors when you go in the way any customer can, as yourself: read their public pages, join their emails, start a free trial that needs no card, ask their chat bot. It stops being legal when you deceive their staff, break terms you agreed to, take trade secrets or get past a login or a block, and that holds when an AI agent does the shopping too, because in August 2026 the Ninth Circuit called a shopping agent [“a tool, not a person”](${NINTH}).`,
    },
    {
      kind: 'p',
      text: `In March 2026 an account executive [asked r/sales](${REDDIT_SALES}) whether his head of research had broken the law. The head of research had built a fake company, a fake website and a LinkedIn profile with his own face and a made up name, then booked intro calls with about a dozen competitors to learn their pricing and how far their reps would discount. He wanted to know if this was normal.`,
    },
    {
      kind: 'p',
      text: 'Plenty of firms do it. Whether it’s legal turns on 4 questions, and a fake company fails the first at the booking form.',
    },
    {
      kind: 'note',
      title: 'Not legal advice',
      text: 'We build Obsession, which sends declared AI agents to other companies, so we have a stake in where this line sits. What follows is our reading of the statutes, rulings and professional codes linked throughout, each checked at its source on 3 October 2026. Laws differ by country and by state. Before you run a programme, show this to your own lawyer.',
    },

    { kind: 'h2', id: 'is-it-legal', text: 'Is it legal to mystery shop a competitor?' },
    {
      kind: 'p',
      text: `Looking has never been the problem. US trade secret law says information gained by “reverse engineering, independent derivation, or any other lawful means” isn’t taken by improper means ([18 U.S.C. § 1839](${DTSA})). EU law names the case outright: studying or testing “a product or object that has been made available to the public” is a lawful way to acquire even a trade secret ([Directive 2016/943, Article 3](${EU_TSD})). Nevada, which treats mystery shopping as private investigation, leaves anyone “accessing exclusively public records, public databases or any other public information” out of its private investigator law ([NRS 648.012](${NRS})).`,
    },
    {
      kind: 'p',
      text: `The profession agrees. Asked whether mystery shopping is ethical, SCIP, the professional association for competitive intelligence, says yes, provided it doesn’t break a retailer’s own rules, such as a ban on photography ([SCIP](${SCIP})).`,
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
        '**Did you break terms you accepted?** A free trial’s sign up box is a contract. Many ban competitors outright, and most ban false registration details.',
        `**Did you take a trade secret?** That’s information that’s secret, valuable because it’s secret, and guarded with reasonable steps ([Trade Secrets Regulations 2018](${UK_TSR})). US federal law lists “misrepresentation” beside theft, bribery and espionage as improper means of getting one ([18 U.S.C. § 1839](${DTSA})).`,
        `**Did you get past a door that was shut?** In the UK, making a computer give you access you know is unauthorised is a crime ([Computer Misuse Act 1990, section 1](${CMA})). SCIP is blunt about the commonest version: getting a password to a competitor’s site without authorisation “is illegal” ([SCIP](${SCIP})).`,
      ],
    },
    {
      kind: 'p',
      text: `Under all 4 sits personal data. A rival’s staff have names, voices and faces, and the UK’s Market Research Society says that when you shop a competitor, “personal information about employees cannot be collected” ([MRS, March 2020](${MRS})).`,
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
          'Start a free trial that needs no card',
          'Low to medium',
          'Turns on the terms you accept. Many ban competitors and “competitive purposes”.',
        ],
        [
          'Ask the site’s chat bot',
          'Low',
          'A public channel. If a person takes over, you’re talking to staff, so the step ends there.',
        ],
        [
          'Book a demo as a made up company',
          'High',
          'Deceives a person and breaks most terms on false identities. A trade secret learned this way is learned by misrepresentation.',
        ],
        [
          'Call staff posing as a buyer',
          'High',
          'The same deception, plus their personal data. MSPA Europe says shopping a competitor is illegal in some markets.',
        ],
        [
          'Log in with someone else’s account',
          'Very high',
          'The site never authorised you, whoever handed over the password.',
        ],
        [
          'Get past a CAPTCHA or a block',
          'High',
          'A block withdraws permission. Getting round it is the access question again.',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Every low risk method can be done under your real name. None of the high risk ones can, which is the quickest test there is. The login row comes with a bill.',
    },
    {
      kind: 'stat',
      value: '$140 million',
      label:
        'awarded to Epic Systems, and upheld on appeal, after a consultancy’s staff downloaded confidential files through a login obtained by claiming to work for an Epic customer',
      source: 'US Court of Appeals, Seventh Circuit, 20 August 2020',
      href: EPIC,
    },

    { kind: 'h2', id: 'free-trial', text: 'Can you sign up for a competitor’s free trial?' },
    {
      kind: 'p',
      text: 'Usually, as yourself, if the terms allow it. Read them before you click, because plenty don’t.',
    },
    {
      kind: 'p',
      text: `The clause to look for is short. Salesforce’s master agreement, which also governs its free trials, says its services “may not be accessed for purposes of monitoring their availability, performance or functionality, or for any other benchmarking or competitive purposes”, and that direct competitors need written consent ([Salesforce MSA, updated 1 September 2026](${SFDC})). Near identical wording runs through other vendors’ agreements, such as [BMC’s](${BMC}) and [Cerbos’s](${CERBOS}). Click through one of those as a rival and you’re in breach from the first minute.`,
    },
    {
      kind: 'p',
      text: `Where there’s no such clause, the law leans your way. The EU rule that protects testing a public product also covers a product you hold lawfully, but only while you’re “free from any legally valid duty to limit the acquisition” of what you learn ([Directive 2016/943, Article 3](${EU_TSD})). A trial’s terms can be that duty, so reading them is most of the legal work.`,
    },
    {
      kind: 'p',
      text: `Founders notice. In October 2025 a founder [posted on r/SaaS](${REDDIT_SAAS}) that a new sign up under a throwaway Gmail address had turned out to be the CEO of 1 of their biggest competitors. A disguised sign up tells a rival 2 things: you’re watching, and you hoped they wouldn’t find out.`,
    },
    {
      kind: 'p',
      text: `Repeat trials under made up names are a different matter. In hiQ v. LinkedIn, contractors told to open fake accounts were found to have breached LinkedIn’s user agreement whether or not they scraped anything ([US District Court, 4 November 2022](${HIQ})).`,
    },
    {
      kind: 'p',
      text: 'A clean trial teardown is dull by design. 1 sign up per rival, under an identity that says what it is. No card, so there’s nothing to bill. No replies to the sales team. If a rep writes or calls, you stop and note the time. Trials that need a card or a sales call get skipped, because there’s no way through them without pretending.',
    },
    {
      kind: 'screen',
      screen: 'battlecard',
      workspace: 'company',
      caption: 'Example: 3 rivals’ 14 day trials side by side. Rival B’s closed on day 6, the moment its rep wrote.',
    },
    {
      kind: 'cta',
      text: 'Trial teardown starts each rival’s free trial as a declared AI agent, with no card. It never replies, and it closes the trial the moment a rep writes or calls.',
      to: '/recipes/trial-teardown',
      label: 'How trial teardown works',
    },

    { kind: 'h2', id: 'pretend-buyers', text: 'Where do fake companies and pretend buyers cross the line?' },
    { kind: 'p', text: 'At the first lie told to a person.' },
    {
      kind: 'p',
      text: 'What a rep tells every caller is hard to call a secret, which is why pretend buyer research survives. The exposure sits around the pitch: the false name on the booking form, the fake company a rep spends a week qualifying, an NDA signed as someone you aren’t, the confidential price sheet that arrives afterwards. Under US law, a trade secret learned through misrepresentation is learned by improper means.',
    },
    {
      kind: 'p',
      text: `The firms that sell this work describe it differently. Octopus Intelligence says “We pose as genuine prospective buyers and go through your competitors’ full sales process”, and that it doesn’t “misrepresent our identity in ways that cause harm” ([Octopus Intelligence](${OCTOPUS})). Mystery Demo says “We never pretend to be someone else”: its consultants are real, working inside “a believable company profile, use case, and buying scenario” ([Mystery Demo](${MYSTERY_DEMO})). Both say their work is legal.`,
    },
    {
      kind: 'p',
      text: 'Where each sits against SCIP’s disclosure rule is for you and your lawyer to judge. Our agents sidestep the question: at a rival they never talk to staff at all.',
    },
    {
      kind: 'p',
      text: `Getting this wrong costs money even when nothing illegal is proved. In 2001 Procter & Gamble admitted that contractors gathering information on Unilever’s hair care business had taken documents from bins outside a Unilever office, and Fortune reported that they’d also posed as market analysts. P&G said its own rules had been broken, not the law ([Los Angeles Times](${LAT})). It still fired 3 managers ([UPI](${UPI})) and, according to a person briefed on the deal, agreed to pay Unilever about $10 million ([The New York Times](${NYT})).`,
    },
    {
      kind: 'p',
      text: 'SCIP suggests a red face test for any method: how would your company feel if a newspaper reported it with your name attached?',
    },

    { kind: 'h2', id: 'ai-agents', text: 'Do the rules change when an AI agent does the shopping?' },
    {
      kind: 'p',
      text: 'Less than you’d hope, because the law treats the agent as your tool and the risk as yours.',
    },
    {
      kind: 'p',
      text: `The leading case is Amazon’s suit against Perplexity. Amazon sued in November 2025, saying Perplexity’s Comet agent shopped on Amazon for logged in users while presenting itself as a Google Chrome user ([The Seattle Times, 6 November 2025](${SEATTLE})). A district court blocked the agent. On 4 August 2026 the Ninth Circuit lifted that injunction: under the US computer fraud law it was the user, not Perplexity, who accessed Amazon, because the agent “is a tool, not a person for statutory purposes” ([Technology & Marketing Law Blog](${NINTH})).`,
    },
    {
      kind: 'quote',
      text: 'We do not establish a new legal regime governing agentic AI.',
      cite: 'US Court of Appeals, Ninth Circuit, Amazon v. Perplexity, 4 August 2026',
      href: NINTH,
    },
    {
      kind: 'p',
      text: 'The narrow parts matter as much as the headline. The court left tort claims open, and said in a footnote that Amazon can still “regulate access to Amazon.com via private terms of service for its users”. That puts the weight on whoever sends the agent, and on the terms they accepted.',
    },
    {
      kind: 'p',
      text: `Amazon has written those terms. Its Conditions of Use require every agent to put “Agent/[agent name]” in each request, never to complete or get round a CAPTCHA, and to “respond truthfully” when asked whether it’s a human ([Amazon Conditions of Use](${AMAZON})).`,
    },
    {
      kind: 'p',
      text: `The web’s plumbing is moving the same way. Since 15 September 2026, new domains on Cloudflare block bots in its Agent category on pages that show ads, unless the owner changes the default ([Cloudflare](${CF_CHANGELOG})). Its test for a verified bot is 2 things: “that you represent yourself honestly, and you don’t abuse the access that honesty earns”. It also files “competitive intelligence gathering” under a label of its own, Data Collection, so a site can block it separately ([Cloudflare, 1 July 2026](${CF_RULES})).`,
    },
    {
      kind: 'p',
      text: `Proving who you are is getting easier. Cloudflare’s [Web Bot Auth](${CF_WBA}) and [signed agents](${CF_SIGNED}) let an agent sign every request so a site can check who sent it, and the IETF’s Web Bot Auth working group published its draft on 1 September 2026 ([IETF](${IETF})). In the same month Ant International, Mastercard and Visa began work on a Know Your Agent framework that links every agent to a validated operator ([Business Wire](${KYA})).`,
    },
    {
      kind: 'p',
      text: `Most sites can’t check yet. [DataDome found](${DATADOME}) that 80% of AI agents identify themselves only with a user agent string anyone can copy, then tested what happens when someone does.`,
    },
    {
      kind: 'stat',
      value: '79.7%',
      label: 'of 698,214 websites let a spoofed AI agent through without blocking or challenging it',
      source: 'DataDome, via Security Boulevard, 26 February 2026',
      href: DATADOME,
    },
    {
      kind: 'p',
      text: `Where an agent talks to a person, disclosure is already law in places. Since 2 August 2026, the EU AI Act has required AI systems built to interact with people to tell them they’re dealing with AI, unless it’s obvious ([Goodwin, 3 August 2026](${GOODWIN})). California’s 2018 bot law bans bots that mislead people in California about their artificial identity to push a purchase or sale ([Business and Professions Code § 17941](${BOT_ACT})). It was written for bots that sell. A bot posing as a buyer is close enough that we wouldn’t test it.`,
    },
    {
      kind: 'p',
      text: 'Then there are the terms, which mostly predate agents and mostly say no.',
    },
    {
      kind: 'stat',
      value: '57.8%',
      label: 'of 45 platforms’ terms of service, in a small independent survey, ban access by automated means',
      source: 'agentatwork, 15 August 2026',
      href: TOS_SURVEY,
    },
    {
      kind: 'p',
      text: `GitHub’s is the rare clause written for them: a machine account is allowed if a named human accepts the terms and “is responsible for its actions” ([GitHub Terms of Service](${GITHUB})). Put together, the direction is easy to plan around. Say what the agent is, sign what it sends, and treat a door marked “no agents” as closed.`,
    },

    { kind: 'h2', id: 'regulation', text: 'Is mystery shopping regulated anywhere?' },
    {
      kind: 'p',
      text: 'Lightly, in most places. Nevada is the exception, and the professional codes have only just started to mention AI.',
    },
    {
      kind: 'p',
      text: `Nevada’s private investigator law covers anyone paid to investigate the “conduct”, “honesty” or “efficiency” of any person ([NRS 648.012](${NRS})), and its licensing board counts mystery shopping that judges staff. In 2024 it told Forbes Travel Guide that hotel inspectors needed a licence because the work resembled mystery shopping, according to the company’s lawyers, and shoppers there work for licensed firms with a board work card ([Nevada PILB, 2024](${PILB})). The statute does leave out anyone using only public information. Ask a Nevada lawyer before you rely on that.`,
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
      text: `Neither guideline mentions AI. The first big code to catch up is ICC/ESOMAR’s, revised in 2025 for research in general: researchers must “identify themselves promptly”, and “the use of a synthetic persona for data collection must be clearly notified to the data subject at the beginning of the research” ([ICC/ESOMAR International Code, 2025](${ESOMAR})). It covers research in general, and it’s the clearest professional statement yet that an AI standing in for a person has to say so.`,
    },

    { kind: 'h2', id: 'standard', text: 'Declare the agent, use public paths, stop before payment' },
    {
      kind: 'p',
      text: 'These are the 8 rules we hold our own agents to. Nothing in them needs software: a human analyst with a notebook could adopt them tomorrow. Copy them, change them, publish your own.',
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
        '**Say it’s AI, and who answers for it.** Name the operator and link to a page that explains the agent (ours is [useobsession.com/agents](/agents)). Answer truthfully if anyone asks whether it’s human.',
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
          q: 'Is competitive intelligence the same as industrial espionage?',
          a: `No. SCIP describes competitive intelligence as gathering information “legally and ethically”, and says corporate spying “often implies illegal activities, such as bribing or hiring employees to divulge confidential information” ([SCIP](${SCIP})). In the US, getting a trade secret “by fraud, artifice, or deception” is a federal crime ([18 U.S.C. § 1832](${EEA})). The line runs through the method: a price list is intelligence when it’s on the public site and espionage when it came from a borrowed login.`,
        },
        {
          q: 'Can AI agents log in to websites?',
          a: 'Technically, yes. Legally, it depends on whose account it is and what the site’s terms say. An agent using your own account at your request is close to the Perplexity case, where the Ninth Circuit treated the user as the one accessing, for computer fraud purposes. An agent using a login it wasn’t given is unauthorised access, whoever wrote the code. Check the terms, name the agent, and stop at a CAPTCHA. If you build your own, give each agent its own identity, as our [API](/developers) does.',
        },
        {
          q: 'Can I use a burner email to sign up for a rival’s trial?',
          a: 'A second inbox is fine, and keeping trial mail out of your work inbox is sensible. What matters is the name and company you attach to it. Most terms require accurate registration details, and fake accounts were enough for a breach finding in hiQ v. LinkedIn. Use a separate inbox under an identity that says who it is.',
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
    { title: 'NRS 648.012: “Private investigator” defined', publisher: 'Nevada Legislature', url: NRS, date: 'Checked 3 Oct 2026' },
    {
      title: 'Board papers: Forbes Travel Guide letter (18 Jun 2024) and Preferred Investigation letter (9 Sep 2024)',
      publisher: 'Nevada Private Investigators Licensing Board',
      url: PILB,
      date: '2024',
    },
    { title: 'MRS Guideline: Conducting Mystery Shopping', publisher: 'Market Research Society', url: MRS, date: 'Mar 2020' },
    { title: 'Guidelines for Mystery Shopping, version 2', publisher: 'MSPA Europe and Africa', url: MSPA, date: '12 Dec 2023' },
    {
      title: 'ICC/ESOMAR International Code on Market, Opinion and Social Research and Data Analytics',
      publisher: 'ESOMAR and ICC',
      url: ESOMAR,
      date: 'Jul 2025',
    },
    { title: 'Main Services Agreement', publisher: 'Salesforce', url: SFDC, date: 'Updated 1 Sep 2026' },
    { title: 'Cloud Services Master Agreement', publisher: 'BMC', url: BMC, date: 'Updated 30 Jul 2026' },
    { title: 'Master Services Agreement', publisher: 'Cerbos', url: CERBOS, date: 'Updated 7 Jul 2025' },
    { title: 'hiQ Labs v. LinkedIn, order on summary judgment', publisher: 'US District Court, N.D. California (via FindLaw)', url: HIQ, date: '4 Nov 2022' },
    { title: 'Epic Systems v. Tata Consultancy Services', publisher: 'US Court of Appeals, Seventh Circuit (via Justia)', url: EPIC, date: '20 Aug 2020' },
    { title: 'P.& G. Said to Agree to Pay Unilever $10 Million in Spying Case', publisher: 'The New York Times', url: NYT, date: '7 Sep 2001' },
    { title: 'P&G, Unilever Settle Corporate Spying Case', publisher: 'Los Angeles Times', url: LAT, date: '7 Sep 2001' },
    { title: 'P&G, Unilever settle corporate spying case', publisher: 'UPI', url: UPI, date: '7 Sep 2001' },
    { title: 'Amazon sues to stop Perplexity from using AI tool to buy stuff', publisher: 'The Seattle Times', url: SEATTLE, date: '6 Nov 2025' },
    {
      title: 'Ninth Circuit Lifts Restrictions on Agentic AI Accessing Amazon',
      publisher: 'Technology & Marketing Law Blog (Eric Goldman; guest post by Kieran McCarthy)',
      url: NINTH,
      date: '6 Aug 2026',
    },
    { title: 'Conditions of Use: Agent Terms', publisher: 'Amazon', url: AMAZON, date: 'Checked 3 Oct 2026' },
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
      publisher: 'Security Boulevard (DataDome, Jérôme Segura)',
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
    { title: 'B2B Mystery Shopping & Competitor Pricing Experts', publisher: 'Octopus Intelligence', url: OCTOPUS, date: 'Checked 3 Oct 2026' },
    { title: 'Mystery Shopping For B2B SaaS', publisher: 'Mystery Demo', url: MYSTERY_DEMO, date: 'Checked 3 Oct 2026' },
    { title: 'Legality of lying to obtain competitor information?', publisher: 'Reddit, r/sales', url: REDDIT_SALES, date: '15 Mar 2026' },
    { title: 'Our competitor’s CEO just signed up on our website', publisher: 'Reddit, r/SaaS', url: REDDIT_SAAS, date: '4 Oct 2025' },
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
