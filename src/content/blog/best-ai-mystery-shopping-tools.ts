import type { BlogPost } from './types'

/* Post 3 (docs/SEARCH.md, section 5): the honest review of AI mystery shopping tools. Review rules hold: facts from
   each vendor's own pages, every price dated (all checked 3 Oct 2026), grouped by job and alphabetical inside each
   group, Obsession once and disclosed, no stars or winners, no Review markup. Vendor practices are paraphrased from
   their own pages (1 direct quote in the post: Checker). The September 2026 store check is stated only as
   /sample-output states it: never as signed, no control message, no second run. DeepCall is left out (its site returned
   HTTP 521 on 3 Oct 2026); FireCoach and Evalyn are named as tools that don't send an agent; Gen.QA is on a waitlist.
   Before publishing: re-check every row within 7 days, try the free tiers as Obsession staff, confirm Brand G consent
   for the basket journeys (see SEARCH.md section 1), and send each vendor its facts for a right of reply. */

export const post: BlogPost = {
  slug: 'best-ai-mystery-shopping-tools',
  title: 'The best AI mystery shopping tools in 2026, compared by what they test',
  dek: '13 tools sorted by the job they do, every price dated and checked on the vendor’s own page, with the human shopper’s price beside them. We make 1 of the 13.',
  metaTitle: 'Best AI mystery shopping tools in 2026, compared by job',
  description:
    'AI mystery shopping tools compared on what each tests, who it contacts, whether it says it’s AI, the proof you get and the price, checked October 2026.',
  answer:
    'AI mystery shopping tools send software agents to play the customer. In 2026 the tools do 3 different jobs: voice agents call your staff, simulators test your own AI bots, and browser agents walk a website, trial or booking and wait for what follows; choose by what you need to see, who the agent contacts and whether the agent says it’s AI.',
  primaryKeyword: 'ai mystery shopping',
  keywords: [
    'best ai mystery shopping tools',
    'ai mystery shopper',
    'ai secret shopper',
    'mystery shopping software',
    'mystery shopping tools',
    'online mystery shopping',
    'saas mystery shopping',
    'ai shadow caller',
    'test ai customer service agent',
    'mystery shopping cost',
  ],
  category: 'Mystery shopping',
  published: '2026-10-03',
  updated: '2026-10-03',
  readingMinutes: 13,
  author: { name: 'Obsession', role: 'Research' },
  hero: {},

  blocks: [
    {
      kind: 'p',
      text: 'AI mystery shopping tools send software agents to play the customer. In 2026 the tools do 3 different jobs: voice agents call your staff, simulators test your own AI bots, and browser agents walk a website, trial or booking and wait for what follows. Choose by what you need to see, who the agent contacts and whether it says it’s AI.',
    },
    {
      kind: 'note',
      title: 'We make Obsession, 1 of the 13 tools here',
      text: 'It sits in its group in alphabetical order and is judged on the same questions as the rest, limits included. No vendor paid to be listed or saw this before it went live. Each one gets the published facts and a right of reply, and any correction goes in the Updated line.',
    },

    { kind: 'h2', id: 'what-is-ai-mystery-shopping', text: 'What is AI mystery shopping?' },
    {
      kind: 'p',
      text: 'AI mystery shopping is a test where software, not a hired person, plays a customer of a business and reports what happened. The agent might ring a front desk, argue with a support bot, start a free trial or leave a full basket, then score the experience against rules you set.',
    },
    {
      kind: 'p',
      text: 'The term is loose. FireCoach’s free [AI mystery shopper](https://firecoach.ai/tools/ai-mystery-shopper) runs an AI buyer against a sales script you paste in, so it never touches your business. Evalyn uses AI to [analyse calls, chats and surveys](https://www.evalyn.ai/) that have already happened. Both are useful, and neither sends a customer anywhere, so neither is in the grid below.',
    },
    {
      kind: 'p',
      text: 'The tools that do send an agent split by who it ends up talking to:',
    },
    {
      kind: 'list',
      items: [
        '**Your staff.** A voice agent calls your reps or locations as a customer and scores the call.',
        '**Your bot.** Synthetic customers put your AI agent through hundreds of conversations before real customers reach it.',
        '**Your website and inboxes.** A browser agent completes a journey, such as a sign up, a basket or a booking. The better ones then watch for the emails and texts that should follow.',
      ],
    },
    {
      kind: 'p',
      text: 'Some of the calling tools also ring competitors’ staff as a pretend buyer, which is where disclosure stops being a detail.',
    },

    { kind: 'h2', id: 'which-tool-fits-which-job', text: 'Which AI mystery shopping tool fits which job?' },
    {
      kind: 'p',
      text: 'Start with what you need to see, then check who the agent contacts. Price comes last, because the cheapest tool for one job can’t do the others at any price. A miss below means the vendor’s own pages don’t claim it; we haven’t tested the tools ourselves.',
    },
    {
      kind: 'table',
      caption:
        'What 13 AI mystery shopping tools see, miss and cost, from each vendor’s own pages, all checked on 3 October 2026. Prices as listed, in US dollars.',
      cols: ['Tool', 'Sees', 'Misses', 'Contacts', 'Says it’s AI', 'Proof', 'Price'],
      rows: [
        ['AdStack AI Secret Shopping', 'How calls, forms and chats are handled', 'Store visits, baskets and checkouts', 'Your staff', 'Staff not told by default; your choice', 'Recording, transcript, score', 'Not listed'],
        ['Dealer Driven Data', 'Rival car dealers’ texts, emails, calls and prices', 'Your own team', 'Rival dealers’ sales staff', 'Not stated', 'Message timeline, weekly price report', '$499 a month'],
        ['Implement AI', 'Calls to every site you run, or to rivals', 'Web and inbox journeys', 'Your sites’ staff, or rivals’', 'Not stated', 'Scored transcripts, live presentation', 'Not listed'],
        ['PressTwo AI Shadow Caller', 'A rep’s call against your yes or no rubric', 'Web, chat and inbox journeys', 'Your phone reps', 'Plays a customer; says it never claims a false identity', 'Transcript, score, coaching note', '$149 a month for 100 calls'],
        ['Cresta Synthetic Customers', 'Your AI agent against personas from your own conversations', 'What live customers get today', 'Your AI agent, in testing', 'Simulation', 'Test results, coverage estimate', 'Not listed'],
        ['LivePerson Syntrix', 'AI and live agents against synthetic customers', 'Website and inbox journeys', 'Your AI and live agents', 'Live Agent Audit is unannounced', 'Simulation reports, goal scores', 'Not listed'],
        ['TokenSurf', 'Your public bot’s answers, tone and handoffs', 'Phone staff, web journeys', 'Your public chatbot', 'Not stated', 'Scored report, transcripts', '$1,500 an audit, or $1,500 a month'],
        ['UndercoverAgent', 'Bot answers, plus prompt injection and other attacks', 'Staff, web journeys', 'Your bot or voice agent', 'Not stated', 'Weekly brief, transcripts', '$500 a week'],
        ['AI Store Shopper', 'Whether an AI shopping agent can reach your checkout', 'Human experience, emails', 'Your storefront', 'Yes, a named agent identity', 'Graded report, walk log', '$149, then $29.99 a month'],
        ['mocktomer', 'Where personas give up on your pages; whether AI assistants recommend you', 'Emails and texts that come later', 'Your website', 'Not stated', 'Friction report, transcripts', 'Free for 10 a month; from $29 a month'],
        ['Obsession (ours)', 'Journeys, then every email, text and reply after them', 'A rep’s manner; store visits; rivals’ baskets', 'Your own business, or a client’s with their OK; at rivals, public sign ups and the chat bot', 'Yes, and who it works for', 'Screenshots, raw messages, signed timed log', 'First store check free; early access'],
        ['Qualified Test My Response Time', 'How fast reps answer an inbound lead', 'What happens after the first reply', 'Your sales reps', 'Not stated', 'Response times', 'Free'],
        ['S-PRO Mystery Shopper AI Suite', '8 channels, from search to adviser booking, plus rival benchmarks', 'Store visits', 'Your channels; rivals in benchmarks', 'No disclosure language found', 'Transcripts, screenshots, timestamps, heatmap', 'Not listed'],
      ],
    },

    { kind: 'h2', id: 'tools-that-call-your-staff', text: 'Which tools call your staff as a customer?' },
    {
      kind: 'p',
      text: 'These are closest to a classic mystery shop. A voice agent rings a front desk or sales line with a scenario, then scores what the person on the other end did. They suit businesses with many phones and many people answering them, which is why several name a minimum: PressTwo writes for teams with 20 or more reps, Implement AI for businesses with 20 or more sites.',
    },
    {
      kind: 'list',
      items: [
        '**AdStack AI Secret Shopping.** AI voice agents place scripted inbound calls, AdStack also tests forms and chat, and every call is recorded, transcribed and scored. Its page says staff never know it’s a test, while its FAQ leaves that choice to you. AdStack runs it as a service and turns the findings into coaching, so it suits owners who want the programme handled. [No price is listed](https://www.adstack.com/ai-secret-shopping).',
        '**Dealer Driven Data.** Built for car dealers. Its AI shops competing dealerships by text, email and phone, from numbers that take texts and voicemail, and keeps every reply on a timeline with weekly price trends. [$499 a month](https://dealerdrivendata.com/), with a free 7 day shop. It contacts rivals’ sales teams as a buyer, and its pages don’t say whether the agent declares itself.',
        '**Implement AI.** Its digital workers call every location of businesses with 20 or more sites, then present the findings live with estimates of the revenue missed. Its [February 2026 page](https://implementai.io/mystery-shopping/) describes a campaign that called 47 competing insurance brokers in 3 days to map their pricing and process. No price; it takes 5 campaigns a month.',
        '**PressTwo AI Shadow Caller.** It calls your phone reps with a customer scenario you write, rotates through 10 voices so reps can’t spot a pattern, and scores each call against a yes or no rubric, with a transcript and a coaching note. [$149 a month covers 100 test calls](https://presstwo.ai/solutions/ai-shadow-caller). PressTwo says the caller never claims a false identity, employer consent is captured at onboarding and recording notices follow each state’s rules.',
      ],
    },
    {
      kind: 'p',
      text: 'None of these sees anything that isn’t a conversation. A rep can be perfect on the phone while the booking confirmation never sends.',
    },

    { kind: 'h2', id: 'tools-that-test-your-ai-agents', text: 'Which tools test your own AI agents before customers do?' },
    {
      kind: 'p',
      text: 'If a bot or AI agent answers your customers, it needs the scrutiny you’d give a new hire. It fails differently: confidently, at 3am, to a customer who may not come back.',
    },
    {
      kind: 'stat',
      value: '27%',
      label: 'of customers would try a chatbot again after a bad experience, in a Gartner survey of 3,566 B2B and B2C customers run in February and March 2026',
      source: 'Gartner, 2 September 2026',
      href: 'https://www.gartner.com/en/newsroom/press-releases/2026-09-02-gartner-finds-only-27-percent-of-customers-would-try-a-chatbot-again-after-a-negative-experience',
    },
    {
      kind: 'p',
      text: 'These tools run synthetic customers against your agent, usually before launch and after every change. None of them touches another company.',
    },
    {
      kind: 'list',
      items: [
        '**Cresta Synthetic Customers.** [Launched 28 May 2026](https://cresta.com/blog/introducing-synthetic-customers-a-living-model-of-your-customer-base). It builds personas from your own conversation history, ranked by how much real traffic each represents, and feeds them into Cresta’s automated testing for AI agents. The strength is realism, because the personas come from your customers rather than a prompt. It assumes you’re on Cresta and have the conversation volume to learn from. No public price.',
        '**LivePerson Syntrix.** [Launched 3 March 2026](https://pr.liveperson.com/2026-03-03-Syntrix-Launches-as-the-First-AI-Agent-Evaluation-and-Live-Agent-Training-Platform-for-Enterprise-CX) to test AI agents and train live agents against synthetic customers. An [April 2026 release](https://community.liveperson.com/kb/articles/2302-week-of-apr-1st-2026) added a Live Agent Audit, where live agents don’t know the customer is synthetic: a mystery shop of your own contact centre. It works with LivePerson’s Conversational Cloud and, [since June 2026](https://community.liveperson.com/kb/articles/2313-week-of-june-10th-2026), Genesys. No public price.',
        '**TokenSurf.** A service more than software. It writes scenarios for your public chatbot (angry customers, refund requests, handoffs to a person), and its founder reviews every important finding. [$1,500 for 1 audit, or $1,500 a month](https://tokensurf.io/) for weekly testing. It needs your bot’s address, not your production transcripts.',
        '**UndercoverAgent.** Tests a chatbot, voice agent or custom API with confused, angry and hostile customers, prompt injection attempts included. Its main offer is a weekly written brief on 1 live agent for [$500 a week](https://undercoveragent.ai/blog/watching-the-chat-is-not-a-weekly-brief). It calls its findings test evidence and says they certify nothing, which is the right way to read every tool in this group.',
      ],
    },
    {
      kind: 'p',
      text: 'This group can’t tell you what happens once the bot hands a customer on: the email that should follow, the person who should call back. Gartner expects agentic AI to [resolve 80% of common service issues without a person by 2029](https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-predicts-agentic-ai-will-autonomously-resolve-80-percent-of-common-customer-service-issues-without-human-intervention-by-20290). The more of your service runs on agents, the more of it lives in those handoffs.',
    },

    { kind: 'h2', id: 'tools-that-walk-a-website-or-trial', text: 'Which tools walk a website or trial like a customer?' },
    {
      kind: 'p',
      text: 'These agents open a browser and complete a journey. What separates them is how long they stay. Some finish in minutes and report what happened on the page. Others wait hours or days for the email, text or reply that should follow, which is where online businesses lose customers without noticing.',
    },
    {
      kind: 'list',
      items: [
        '**AI Store Shopper.** It answers 1 question: can an AI shopping agent buy from your store? It walks from your homepage to checkout under a named agent identity, stops before ordering, and grades how findable, readable and buyable your store is, including whether bot rules turn agents away at the door. [$149 for 1 store and 1 report](https://aistoreshopper.com/), then $29.99 a month for a weekly walk after the first month. US merchants only.',
        '**mocktomer.** AI personas, from a budget shopper to a SaaS trial starter, browse your site in their own browsers and say in their own words where they gave up. Paid plans also score whether ChatGPT, Claude and Gemini find and recommend you. Results come back in about 10 minutes; [10 runs a month are free](https://mocktomer.ai/) and $29 a month buys 40 persona runs and 40 assistant checks. It never places real orders. Its pages don’t mention watching an inbox afterwards, so treat it as fast usability testing rather than a check on your follow up.',
        '**Obsession (ours).** Declared AI test customers, each with its own inbox, phone number and browser, go through your store, trial, demo or booking, or a client’s with their OK. They then watch every inbox and number for the window you set, from 24 hours to 7 days, and each journey gets a verdict with screenshots, the raw messages and a timed, signed log. At competitors it only takes public sign up steps and asks the site’s chat bot, never staff, and never fills a basket. The limits: it calls your own lines only as a labelled test, so it can time an answer but can’t grade a rep’s manner; it never visits a store; it stops before payment except on your own store, on a budget you set; and it’s in early access, with no public price beyond a [free first store check](/recipes/mystery-shopper).',
        '**Qualified Test My Response Time.** A free check of how fast your sales reps answer an inbound lead at different times of day and week, which [Qualified calls a secret shopper experiment](https://www.qualified.com/resources/test-my-response-time). The page doesn’t say how the test lead is sent or whether it’s labelled. Good for 1 number; [speed to lead statistics](/blog/speed-to-lead-statistics) shows what to compare it with.',
        '**S-PRO Mystery Shopper AI Suite.** [Launched 29 July 2026](https://s-pro.io/mystery-shopper-ai-suite). Persona agents run across 8 channels, from search and the website to email, chat, phone and adviser booking, with examples mostly from banking, such as a family relocating to Zurich. Its sample findings include a benchmark against a rival’s named adviser, and it states its 90% saving against human shopping as a target. No price, and we found no disclosure language on the page.',
      ],
    },
    {
      kind: 'screen',
      screen: 'shop',
      workspace: 'company',
      caption:
        'Obsession, example: 6 declared test customers across a software trial, a homeware store and a dental booking, each with the owner’s OK. The trial closes when a rep writes, and nothing is bought.',
    },
    {
      kind: 'p',
      text: 'For software teams the same walk belongs after every release: a fresh test customer signs up, opens every email and link, and stops before payment. That’s the job our [website audit recipe](/recipes/website-audit) does each morning or on every deploy.',
    },

    { kind: 'h2', id: 'what-a-good-ai-mystery-shop-looks-like', text: 'What does a good AI mystery shop of an online journey look like?' },
    {
      kind: 'p',
      text: 'Here’s a real one. In September 2026 we shopped a skincare store, name hidden, as 4 labelled test customers with 1 inbox each. One signed up for emails. One browsed and left. One left a £40 gift set in the basket at 02:57 UK time on 22 September, and one left a £21 deodorant at checkout, before paying, at 03:11. Every inbox was watched for 48 hours.',
    },
    {
      kind: 'p',
      text: 'The browse shopper got 3 messages. The welcome shopper got 2, too few to call either way. The basket and checkout shoppers got nothing. Both of those journeys completed, with screenshots to prove it, and the 2 reminders that should chase a lost sale never came. The [full report from the store check](/sample-output) has all 15 screenshots and 5 messages.',
    },
    {
      kind: 'p',
      text: 'A tool that calls your staff would never have found that, and nor would any tool that ends its run when the page is done. The failure was silence, and silence only shows up if you wait. You can run the same test by hand:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**List the journeys that should trigger a message:** sign up, basket, checkout, trial days 1 to 7, demo request, booking, quote form.',
        '**Write the rule before you start.** A basket reminder within 24 hours, say, or a booking confirmation within 10 minutes. Decide what counts as silent and how few messages is too few to call.',
        '**Give every journey its own identity:** a fresh inbox, and a number if texts are in scope, labelled as a test. Share 1 inbox and you can’t tell which journey triggered which email.',
        '**Prove the trigger happened.** Screenshot the full basket and note the time. Silence only counts as a finding if the journey completed.',
        '**Stop before payment** on any store you don’t own.',
        '**Watch the whole window** and log every message with its arrival time.',
        '**Call each journey** delivered, silent or no verdict, with the evidence beside it.',
        '**Run it again after every change** to the site, the email platform or the flows.',
      ],
    },
    {
      kind: 'screen',
      screen: 'kit',
      workspace: 'agency',
      caption:
        'Obsession, example: test customer 2 of 4 for a homeware store, with its own inbox, phone number and phone browser, a test card capped at £0 and a 48 hour watch.',
    },
    {
      kind: 'p',
      text: '4 things spoil a test like this. Ending the watch early: a reminder set for 36 hours won’t land in a 24 hour window. Shopping from a country your customers aren’t in, when offers and flows can differ by region. Calling a journey broken on 1 or 2 messages. And signing up with a colleague’s own email, which the store may already know as a customer.',
    },
    {
      kind: 'cta',
      text: 'Run the same check on your store, trial or booking, or a client’s with their OK: declared test customers, every inbox watched, a verdict on every journey.',
      to: '/recipes/mystery-shopper',
      label: 'The mystery shopper recipe',
    },

    { kind: 'h2', id: 'when-a-human-shopper-wins', text: 'When is a human mystery shopper still the better buy?' },
    {
      kind: 'p',
      text: 'More often than the AI vendors suggest. No tool here walks into a building, so anything that happens in a room needs a person: the state of the shop floor, the queue, how a salesperson reads a customer face to face.',
    },
    {
      kind: 'list',
      items: [
        '**In person service:** shops, showrooms, branches, restaurants.',
        '**A real order on someone else’s business.** None of the AI tools here says it completes a purchase there, so delivery, unboxing and returns need a human shopper, or your own store.',
        '**Compliance checks that need a person at the counter.** Age verification for alcohol and tobacco is a standard [compliance mystery shop](https://trocglobal.com/mystery-shopping-services/).',
        '**Prices behind a paid membership.** Intouch sells human online shoppers partly to see [prices shown only to members](https://www.intouchinsight.com/blog/online-mystery-shopping), such as Costco’s.',
      ],
    },
    {
      kind: 'p',
      text: 'The human industry knows the ground is moving. Checker, which makes software for mystery shopping agencies, ended its outlook for 2026 with a warning:',
    },
    {
      kind: 'quote',
      text: 'Those that fail to adapt risk being replaced not by competitors, but by platforms.',
      cite: 'Kate Yarosh, Checker, 5 December 2025',
      href: 'https://www.checker-soft.com/the-biggest-issues-in-mystery-shopping-and-cx-research-in-2025-and-how-agencies-can-fix-them-in-2026/',
    },
    {
      kind: 'p',
      text: 'AI is taking the repeatable work on phones and screens, where volume and consistency matter more than judgement. Humans keep the room.',
    },

    { kind: 'h2', id: 'ai-mystery-shopping-cost', text: 'How much does AI mystery shopping cost against a human shopper?' },
    {
      kind: 'stat',
      value: '$209',
      label: 'the 2026 US benchmark price for 1 mystery shop, across in person, phone and online shops',
      source: 'IBISWorld, Mystery Shopping Services procurement report, 2026',
      href: 'https://www.ibisworld.com/united-states/procurement/mystery-shopping-services/53965161/',
    },
    {
      kind: 'p',
      text: 'Simple human shops cost less. CustomerOptix sells them [from $45](https://www.customeroptix.com/services/mystery-shopping), with reports in 48 to 72 hours at best and usually within 2 weeks. T-ROC prices a store visit at [$40 to $150](https://trocglobal.com/mystery-shopping-services/) depending on the scenario.',
    },
    {
      kind: 'p',
      text: 'Listed AI prices on 3 October 2026 ran from free to $1,500 a month, and 5 of the 13 tools quote only on request. PressTwo’s plan works out at $1.49 a call.',
    },
    {
      kind: 'p',
      text: 'Take a dental group with 20 practices that wants every front desk called once a month. At $45 to $209 a human shop, that’s $900 to $4,180 a month. PressTwo’s listed plan covers 100 calls for $149, enough to call each practice 5 times. The saving is real, and so is the trade: a human can also walk in, see the waiting room and sit through a real appointment.',
    },
    {
      kind: 'p',
      text: 'The bigger change is frequency. A quarterly shop of a sample of sites becomes a monthly call to every one, or a daily check of every journey, so a problem shows up in days instead of at the next review.',
    },
    {
      kind: 'stat',
      value: '$2.31B',
      label: 'the global mystery shopping services market in 2025, by Fortune Business Insights’ estimate; QY Research puts the same year at $1.05B',
      source: 'Fortune Business Insights, updated 15 June 2026',
      href: 'https://www.fortunebusinessinsights.com/mystery-shopping-services-market-111774',
    },
    {
      kind: 'p',
      text: 'The 2 estimates differ by more than 2 times. [QY Research’s figure](https://www.qyresearch.com/reports/6041360/mystery-shopping-service) came out in March 2026; treat any market size in this field as a rough order of magnitude.',
    },

    { kind: 'h2', id: 'should-an-ai-mystery-shopper-say-its-ai', text: 'Should an AI mystery shopper say it’s AI?' },
    {
      kind: 'p',
      text: 'The tools disagree, and the right answer depends on who the agent is talking to.',
    },
    {
      kind: 'p',
      text: '**Your own staff.** Here a blind test is the point: you want what a real customer gets, and human mystery shopping has always worked this way. The questions are consent and use. PressTwo captures employer consent at onboarding and says scores are never used to dismiss anyone automatically without a manager’s review, a sensible line for any staff test. AdStack leaves the choice to you. LivePerson’s Live Agent Audit is built to go unannounced.',
    },
    {
      kind: 'p',
      text: '**Your own systems.** Saying it’s AI costs almost nothing. An abandoned basket email fires or it doesn’t, whatever the shopper is called. AI Store Shopper browses under a named agent identity, and Obsession labels every test customer. A declared agent should also leave a record the business can check: what it did, when, and for whom.',
    },
    {
      kind: 'screen',
      screen: 'run',
      workspace: 'agency',
      caption: 'Obsession, example: a candle store’s run log, where each step is a receipt with a screenshot and a signature anyone can check.',
    },
    {
      kind: 'p',
      text: '**Someone else’s staff.** The hard case. An agent posing as a buyer spends a real salesperson’s time on a deal that doesn’t exist. Implement AI and Dealer Driven Data both sell competitor shops by phone, text or email, and S-PRO’s sample benchmarks a rival’s adviser. Obsession draws its line here: at rivals it asks the site’s bot, never staff. The law behind that line is in [is it legal to mystery shop your competitors](/blog/is-it-legal-to-mystery-shop-competitors), and most of what a rival shows its customers can be seen through public sign ups: [see competitors’ emails, ads and prices as a customer](/marketing).',
    },
    {
      kind: 'p',
      text: 'The law is moving one way. Since 2 August 2026, [Article 50 of the EU AI Act](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act) has required AI systems that talk directly with people, AI agents included, to be designed so those people know it’s AI, unless that’s obvious. The Commission’s [July 2026 guidelines](https://ai-act-service-desk.ec.europa.eu/sites/default/files/2026-07/guidelines%5Fon%5Fthe%5Fimplementation%5Fof%5Fthe%5Ftransparency%5Fobligations%5Ffor%5Fcertain%5Fai%5Fsystems%5Funder%5Farticle%5F50%5Fof%5Fthe%5Fai%5Fact%5Fbzptwqhk0ikg1dtlddap41psfy%5F131215.pdf) give agents that disclose their identity in a verifiable way as one example. Whether a given mystery shop falls inside that is a question for your lawyer.',
    },

    { kind: 'h2', id: 'how-we-checked', text: 'Every price and claim here was checked on 3 October 2026 on the vendor’s own pages' },
    {
      kind: 'p',
      text: 'We read each vendor’s product, pricing and help pages, plus launch posts and release notes for dates, and took every price as listed on 3 October 2026. Where a page gave no price, the grid says so. This is a desk review: we haven’t paid for or run these tools yet. When we try the free tiers, as Obsession staff under our own names, we’ll add what we find and date the change.',
    },
    {
      kind: 'p',
      text: 'Tools are grouped by job and listed alphabetically inside each group, with no stars, scores or winners. FireCoach and Evalyn are out because they don’t send an agent, Gen.QA because it’s still on a waitlist, and DeepCall because its site returned an error when we checked. Every row gets checked again each quarter, alongside our other posts on [online mystery shopping](/blog#mystery-shopping).',
    },

    { kind: 'h2', id: 'faq', text: 'Cost, legality and SaaS trials, answered' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How much does AI mystery shopping cost?',
          a: 'On 3 October 2026, listed prices ran from free (Qualified, and mocktomer’s first 10 runs a month) to $1,500 a month (TokenSurf). A human shop costs about $209 on IBISWorld’s 2026 US benchmark, and from $45 for simple ones.',
        },
        {
          q: 'Is AI mystery shopping legal?',
          a: 'Testing your own business is the low risk case; the questions there are staff consent and the call recording rules where you operate. Posing as a buyer to someone else’s staff is where the risk sits. Read [is it legal to mystery shop your competitors](/blog/is-it-legal-to-mystery-shop-competitors) and take advice for your country. This isn’t legal advice.',
        },
        {
          q: 'Can an AI mystery shopper test a SaaS free trial?',
          a: 'Yes. On your own product, a test customer can [sign up and go through your trial as a new customer](/founders), timing every onboarding email and the reminder before the trial ends. At a competitor, keep to the public steps: a declared sign up, no card, no replies, and close the trial if a salesperson writes.',
        },
        {
          q: 'Can an AI mystery shopper visit a physical store?',
          a: 'Not in person. Voice tools can call the store and browser tools can test its booking page or website, but the shop floor still needs a human.',
        },
        {
          q: 'Will my staff know they’re being tested?',
          a: 'It depends on the tool. AdStack lets you choose, LivePerson’s Live Agent Audit is unannounced, PressTwo captures employer consent at onboarding, and declared agents such as AI Store Shopper and Obsession say what they are. Tell your team that tests happen, even if you don’t say when.',
        },
        {
          q: 'How is AI mystery shopping different from website monitoring?',
          a: 'A monitor checks that a page loads. An AI mystery shopper completes a journey as a customer, and the better ones wait for what should follow: the email, the text, the reply. Our [speed to lead recipe](/recipes/speed-to-lead) does this for new leads on your own form, chat and phone.',
        },
      ],
    },
  ],

  sources: [
    { title: 'AI Secret Shopping', publisher: 'AdStack', url: 'https://www.adstack.com/ai-secret-shopping', date: 'Checked 3 Oct 2026' },
    { title: 'AI Mystery Shopping and Vehicle Comments for Car Dealers', publisher: 'Dealer Driven Data', url: 'https://dealerdrivendata.com/', date: 'Checked 3 Oct 2026' },
    { title: 'Mystery shopping', publisher: 'Implement AI', url: 'https://implementai.io/mystery-shopping/', date: '8 Feb 2026' },
    { title: 'AI Shadow Caller', publisher: 'PressTwo', url: 'https://presstwo.ai/solutions/ai-shadow-caller', date: 'Checked 3 Oct 2026' },
    {
      title: 'Introducing Synthetic Customers: A Living Model of Your Customer Base',
      publisher: 'Cresta',
      url: 'https://cresta.com/blog/introducing-synthetic-customers-a-living-model-of-your-customer-base',
      date: '28 May 2026',
    },
    {
      title: 'Syntrix Launches as the First AI Agent Evaluation and Live Agent Training Platform for Enterprise CX',
      publisher: 'LivePerson',
      url: 'https://pr.liveperson.com/2026-03-03-Syntrix-Launches-as-the-First-AI-Agent-Evaluation-and-Live-Agent-Training-Platform-for-Enterprise-CX',
      date: '3 Mar 2026',
    },
    {
      title: 'Syntrix 1.1: Audit live agents with high fidelity synthetic customers',
      publisher: 'LivePerson Customer Success Center',
      url: 'https://community.liveperson.com/kb/articles/2302-week-of-apr-1st-2026',
      date: '1 Apr 2026',
    },
    {
      title: 'Syntrix v1.5: Genesys Cloud support',
      publisher: 'LivePerson Customer Success Center',
      url: 'https://community.liveperson.com/kb/articles/2313-week-of-june-10th-2026',
      date: '10 Jun 2026',
    },
    { title: 'AI Mystery Shopper Agent', publisher: 'TokenSurf', url: 'https://tokensurf.io/', date: 'Checked 3 Oct 2026' },
    { title: 'Secret Shopper for AI Agents', publisher: 'UndercoverAgent', url: 'https://undercoveragent.ai/', date: 'Checked 3 Oct 2026' },
    {
      title: 'Watching the Chat Is Not a Weekly Brief',
      publisher: 'UndercoverAgent',
      url: 'https://undercoveragent.ai/blog/watching-the-chat-is-not-a-weekly-brief',
      date: '29 Aug 2026',
    },
    { title: 'AI Store Shopper: can an AI buy from your store?', publisher: 'Stelar Digital', url: 'https://aistoreshopper.com/', date: 'Checked 3 Oct 2026' },
    { title: 'Test your site for people and AI', publisher: 'mocktomer', url: 'https://mocktomer.ai/', date: 'Checked 3 Oct 2026' },
    { title: 'Sample output: a real store check', publisher: 'Obsession', url: 'https://useobsession.com/sample-output', date: 'Run 22 to 24 Sep 2026' },
    { title: 'Test My Response Time', publisher: 'Qualified', url: 'https://www.qualified.com/resources/test-my-response-time', date: 'Checked 3 Oct 2026' },
    { title: 'Mystery Shopper AI Suite', publisher: 'S-PRO', url: 'https://s-pro.io/mystery-shopper-ai-suite', date: '29 Jul 2026' },
    {
      title: 'Mystery Shopping Services in the US: Procurement Price, Data and Insights',
      publisher: 'IBISWorld',
      url: 'https://www.ibisworld.com/united-states/procurement/mystery-shopping-services/53965161/',
      date: '2026',
    },
    { title: 'How it Works: Mystery Shopping', publisher: 'CustomerOptix', url: 'https://www.customeroptix.com/services/mystery-shopping', date: 'Checked 3 Oct 2026' },
    { title: 'Mystery Shopping Services: Complete Guide and Pricing (2026)', publisher: 'T-ROC', url: 'https://trocglobal.com/mystery-shopping-services/', date: '4 May 2026' },
    {
      title: 'What Online Mystery Shopping Reveals About Your Digital CX',
      publisher: 'Intouch Insight',
      url: 'https://www.intouchinsight.com/blog/online-mystery-shopping',
      date: '17 Nov 2025',
    },
    {
      title: 'Mystery Shopping Services Market Size, Share and Industry Analysis',
      publisher: 'Fortune Business Insights',
      url: 'https://www.fortunebusinessinsights.com/mystery-shopping-services-market-111774',
      date: 'Updated 15 Jun 2026',
    },
    {
      title: 'Mystery Shopping Service: Global Market Share and Ranking, Overall Sales and Demand Forecast 2026 to 2032',
      publisher: 'QY Research',
      url: 'https://www.qyresearch.com/reports/6041360/mystery-shopping-service',
      date: '8 Mar 2026',
    },
    {
      title: 'The Biggest Issues in Mystery Shopping and CX Research in 2025 And How Agencies Can Fix Them in 2026',
      publisher: 'Checker',
      url: 'https://www.checker-soft.com/the-biggest-issues-in-mystery-shopping-and-cx-research-in-2025-and-how-agencies-can-fix-them-in-2026/',
      date: '5 Dec 2025',
    },
    {
      title: 'Gartner Survey Finds Only 27% of Customers Would Try a Chatbot Again After a Negative Experience',
      publisher: 'Gartner',
      url: 'https://www.gartner.com/en/newsroom/press-releases/2026-09-02-gartner-finds-only-27-percent-of-customers-would-try-a-chatbot-again-after-a-negative-experience',
      date: '2 Sep 2026',
    },
    {
      title: 'Gartner Predicts Agentic AI Will Autonomously Resolve 80% of Common Customer Service Issues Without Human Intervention by 2029',
      publisher: 'Gartner',
      url: 'https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-predicts-agentic-ai-will-autonomously-resolve-80-percent-of-common-customer-service-issues-without-human-intervention-by-20290',
      date: '5 Mar 2025',
    },
    {
      title: 'Transparency obligations under Article 50 of the AI Act',
      publisher: 'European Commission',
      url: 'https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act',
      date: 'Checked 3 Oct 2026',
    },
    {
      title: 'Guidelines on the implementation of the transparency obligations for certain AI systems under Article 50 of the AI Act, C(2026) 5054',
      publisher: 'European Commission',
      url: 'https://ai-act-service-desk.ec.europa.eu/sites/default/files/2026-07/guidelines%5Fon%5Fthe%5Fimplementation%5Fof%5Fthe%5Ftransparency%5Fobligations%5Ffor%5Fcertain%5Fai%5Fsystems%5Funder%5Farticle%5F50%5Fof%5Fthe%5Fai%5Fact%5Fbzptwqhk0ikg1dtlddap41psfy%5F131215.pdf',
      date: '20 Jul 2026',
    },
    { title: 'AI Mystery Shopper for Sales Calls', publisher: 'FireCoach', url: 'https://firecoach.ai/tools/ai-mystery-shopper', date: 'Checked 3 Oct 2026' },
    { title: 'AI Customer Experience Analytics and Training', publisher: 'Evalyn', url: 'https://www.evalyn.ai/', date: 'Checked 3 Oct 2026' },
  ],

  related: [
    'is-it-legal-to-mystery-shop-competitors',
    'speed-to-lead-statistics',
    'free-audit-agency-clients',
    'recipe:mystery-shopper',
    'recipe:website-audit',
    '/sample-output',
  ],
}
