import type { BlogPost } from './types'

/* Post 5 (docs/SEARCH.md section 5). A review: every vendor fact checked on the vendor's own pages on 3 Oct 2026, prices
   as listed that day, nothing tested hands on (the method section says so). Obsession appears in the disclosure, the
   grid and its own entry only, judged on the same questions with its limits stated. Groups by how a tool collects
   messages, alphabetical inside each. Recart, CompetitorTrack and Newsletrix added after review, each checked on its own
   pages on 3 Oct 2026. Left out until verified on their own sites: Competitors App, Hoppy Copy, Reyo. The
   r/ProductMarketing quote in the brief was dropped: Reddit blocked every fetch, so it could not be re-checked at its
   URL. The FCC paragraph rests on the Ecommerce Innovation Alliance's 1 Oct account of the adopted order; swap in the
   FCC's own text once it is released. The September store check sentence is cut until Seun confirms the store
   owner's OK (docs/SEARCH.md). Open for Seun and James: hands on tests of the 6 free tiers before 2 Nov, and whether
   Obsession's entry notes that some rival trials bar competitive use. Re-check every vendor fact within 7 days of
   publishing. */

export const post: BlogPost = {
  slug: 'best-competitor-email-tracking-tools',
  title: 'The best competitor email and SMS tracking tools in 2026',
  dek: '13 tools and the free method, sorted by where each one gets a rival’s messages and graded on what it can actually see. Every price checked on the vendor’s own site on 3 October 2026.',
  metaTitle: 'The best competitor email and SMS tracking tools in 2026',
  description:
    'Competitor email tracking tools compared on what each can see: campaigns, flows, texts, trials and STOP. 13 tools and the free method, prices checked.',
  answer:
    'Competitor email and SMS tracking tools collect rivals’ messages in 3 ways: vendor archives, consumer panels and subscriber inboxes you control. Archives and panels show campaigns and common flows across thousands of brands; to see one specific journey, such as a B2B trial’s onboarding or what happens after you text STOP, you need a subscriber that lives it.',
  primaryKeyword: 'competitor email tracking',
  keywords: [
    'track competitor emails',
    'competitor email monitoring free',
    'track competitor sms',
    'competitor newsletter monitoring',
    'how to see competitors email campaigns',
    'competitor welcome email examples',
    'competitor onboarding emails',
    'mailcharts alternative',
    'panoramata alternative',
  ],
  category: 'Competitor intelligence',
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
      kind: 'note',
      title: 'We make Obsession, 1 of the tools reviewed here',
      text: 'It’s judged on the same questions as the others, with its limits stated. Tools are grouped by how they collect messages and listed alphabetically inside each group, so ours isn’t first by default. Nobody paid to be included, and there are no affiliate links.',
    },
    {
      kind: 'p',
      text: 'Competitor email tracking comes down to whose inbox the message lands in. That decides what you can see far more than any feature list does, so each tool here is graded on 7 things lifecycle teams ask about: campaigns, the welcome series, cart and browse flows, texts, a B2B trial’s onboarding, what happens after STOP, and whether the offer matches the pop-up.',
    },

    { kind: 'h2', id: 'how-to-track', text: 'How do you track a competitor’s emails and texts?' },
    {
      kind: 'p',
      text: 'Every tool we found gets a rival’s messages in 1 of 3 ways, or a mix of them.',
    },
    {
      kind: 'list',
      items: [
        '**Archives.** The vendor subscribes to thousands of brands and you search what arrives. Quick, cheap per brand and good for history. You see what the vendor’s addresses were sent, for the brands it covers; some add one on request.',
        '**Consumer panels.** Real people opt in to share their inbox or phone, and the vendor reads the commercial messages. You see what actual customers get, buyers and lapsed customers included. You can’t steer which journeys the panel takes.',
        '**Subscriber inboxes you control.** You, or a tool working for you, sign up with an address and number that belong to you. You choose the brand, the moment and the journey, and you know to the minute when it started. You get nothing from before the sign up.',
      ],
    },
    {
      kind: 'p',
      text: 'The split matters because flows earn far more per message than campaigns. Flows are the messages a subscriber’s actions trigger: the welcome series, the abandoned cart reminder, the win back. Campaigns are the broadcasts the whole list gets. Campaigns are easy to collect. A flow only shows up for whoever triggers it.',
    },
    {
      kind: 'stat',
      value: '5.3%',
      label: 'of sends were flows, and they earned nearly 41% of email revenue, across 183,000+ Klaviyo customers',
      source: 'Klaviyo, 2026 email marketing benchmarks',
      href: 'https://www.klaviyo.com/products/email-marketing/benchmarks',
    },
    {
      kind: 'p',
      text: 'So the question worth putting to any tool is which flows it can trigger, and at which brands.',
    },

    { kind: 'h2', id: 'which-tool-fits', text: 'Which competitor email tracking tool fits your team?' },
    {
      kind: 'p',
      text: '“Not listed” means the vendor’s own pages don’t claim it. We didn’t test the tools hands on, so a gap in this grid is a gap in what the vendor says, not a measured failure.',
    },
    {
      kind: 'table',
      caption: 'What each tool can see, from its own pages, checked 3 October 2026',
      cols: ['Tool', 'Where messages come from', 'Welcome and cart flows', 'SMS', 'A journey you pick (trial, STOP)', 'Price'],
      rows: [
        ['BadRep', 'Not disclosed; a classified catalogue of 1,500+ brands', 'Welcome, cart and after purchase, by brand', 'Not listed', 'No', '$19 a month launch price; browse free'],
        ['Milled', 'A searchable archive of brand newsletters', 'Not listed', 'Not listed', 'No', 'Free to search; Pro price not shown'],
        ['Panoramata', 'Not disclosed; 20,000+ brands, by its pricing page', 'Welcome, cart, checkout, browse and after purchase', 'Listed', 'No; adds a missing brand or flow on request', '$99, $179 or $399 a month'],
        ['Recart Campaign Library', 'Not disclosed; 10,000+ online stores', 'Not listed', 'Yes, 100,000+ campaigns', 'No', 'Free'],
        ['Validity Engage and MailCharts', '1.2M+ campaigns; MailCharts signs up and triggers journeys', 'Ecommerce journeys', 'SMS examples', 'No', 'Through sales'],
        ['Axess Intelligence', 'Panel apps on opted in consumers’ phones', 'Onboarding, retention, win back', 'Yes, plus push and in app', 'No', 'Through a demo'],
        ['Bird Competitive Tracker', 'A permissioned panel and persona addresses (2020)', 'Welcome, cart recovery, reengagement', 'Not listed', 'No', 'Not published'],
        ['Competitor Inbox', 'A tracking address per rival that you sign up with', 'Sequences you trigger', 'Not listed', 'Email journeys you start', '$15 to $249 a month'],
        ['CompetitorTrack', 'A tracking address per rival that you sign up with', 'Sequences you trigger', 'Not listed', 'Email journeys you start', 'First competitor free; then $10 a competitor a month'],
        ['Do it yourself', 'Your own inboxes and phone number', 'What you trigger', 'Yes', 'Yes, by hand', 'Free, plus your time'],
        ['Newsletrix', 'A forwarding address you sign up with', 'Not listed', 'Not listed', 'Email journeys you start', 'Free plan; then $9 to $69 a month'],
        ['Obsession (ours)', 'A declared AI agent per rival, with its own inbox and number', 'Welcome; never a rival’s basket', 'Yes, STOP included', 'Yes: trials that need no card, STOP', 'Not public; waitlist'],
        ['Owletter', 'Captures what the websites you name send', 'Not listed', 'Not listed', 'No', '$29, $49 or $99 a month'],
        ['SendView', 'Tracking addresses, several per brand if you want', 'Cart flow, on an address you trigger it with', 'Not listed', 'Email journeys you start', '$69, $99 or $169 a month'],
      ],
    },
    {
      kind: 'list',
      items: [
        '**A DTC lifecycle team after ideas and benchmarks:** an archive. BadRep if your category is in its catalogue and the budget is small; Panoramata if you want ads and texts in the same feed; Recart’s free library if texts are all you need.',
        '**A retention agency reporting to several clients:** an archive for breadth, plus a tracking inbox on each client’s 3 closest rivals, so the monthly report shows dated sequences, not just screenshots.',
        '**A large B2C brand that needs to know how rivals treat VIPs and lapsed customers:** a panel, the only kind of tool here that reads real customers’ inboxes.',
        '**A B2B product marketer:** a subscriber you control. A rival’s trial emails only arrive for someone who starts the trial.',
      ],
    },

    { kind: 'h2', id: 'archives', text: 'Which tools give you a library of rivals’ campaigns?' },
    {
      kind: 'p',
      text: 'Archives are the fastest way in: search a brand, see months or years of sends. You see what the vendor’s own addresses received, which is mostly campaigns plus whichever flows the vendor chose to trigger.',
    },
    { kind: 'h3', id: 'badrep', text: 'BadRep' },
    {
      kind: 'p',
      text: 'BadRep is a classified catalogue: [1,500+ brands and 30,700+ emails](https://badrep.email/), each tagged on 20+ dimensions such as hook, offer and ESP, with the raw HTML kept. Pick a brand and a type to get its welcome, cart or after purchase emails in date order. It’s $19 a month at a launch price, and the vault is free to browse. Its own guide says the catalogue [leans towards wellness, edtech, fintech and habit change brands](https://badrep.email/guides/competitor-email-intelligence).',
    },
    {
      kind: 'p',
      text: '**Suits** a small team that wants to search by angle or offer across many brands. **Falls short** on texts, which it doesn’t list, and on any rival outside its catalogue.',
    },
    { kind: 'h3', id: 'milled', text: 'Milled' },
    {
      kind: 'p',
      text: '[Milled](https://milled.com/) is a search engine for brand newsletters. It’s free to search, and Milled Pro opens the archive back to 2012 and lets you follow lists of brands. We couldn’t load a Pro price on Milled’s own pages. **Suits** a quick look at what a consumer brand sent last week. **Falls short** as a tracker: there are no flows or texts listed, and nothing can be timed from a sign up.',
    },
    { kind: 'h3', id: 'panoramata', text: 'Panoramata' },
    {
      kind: 'p',
      text: 'Panoramata puts emails and ads in one place, and lists SMS, flows and landing pages among what it monitors. [Plans](https://www.panoramata.co/pricing) are $99 a month for 20 competitors and 6 months of history, $179 for unlimited access with library searches of texts and flows, and $399 for teams covering 10+ markets, which adds detection of CRM segments and A/B tests. Its pricing page puts coverage at 20,000+ brands. It adds a missing rival on request, and its [help pages](https://www.panoramata.co/help-faq/flows-access-collect) say it adds a missing flow on request too. It doesn’t say how it collects messages.',
    },
    {
      kind: 'p',
      text: '**Suits** an agency or multichannel team that wants emails, texts and ads in 1 feed. **Falls short** when you need to know exactly what triggered a message.',
    },
    { kind: 'h3', id: 'recart', text: 'Recart Campaign Library' },
    {
      kind: 'p',
      text: '[Recart’s Campaign Library](https://recart.com/campaign-library) is a free archive of texts: 100,000+ SMS campaigns from 10,000+ online stores, 12 months of history, searchable by brand, industry or keyword, with each brand’s send frequency and timing. Recart sells SMS marketing, and the page doesn’t say how the texts are collected. **Suits** anyone checking what a consumer brand texted this year, at no cost. **Falls short** on email, on any brand outside its list, and on flows: it lists campaigns.',
    },
    { kind: 'h3', id: 'validity-engage', text: 'Validity Engage and MailCharts' },
    {
      kind: 'p',
      text: 'Validity bought [MailCharts in 2022](https://www.prweb.com/releases/Validity_Acquires_MailCharts_to_Power_Ecommerce_Marketing_Campaigns/prweb18604538.htm) and [Litmus in 2025](https://www.prnewswire.com/news-releases/validity-acquires-litmus-advances-leadership-as-best-in-class-global-provider-of-marketing-success-and-customer-data-intelligence-solutions-302426098.html), and [launched Engage in February 2026](https://www.prnewswire.com/news-releases/validity-announces-engage-the-next-generation-ai-email-platform-to-help-marketers-execute-with-confidence-302685294.html). [Litmus’s site](https://www.litmus.com/contact-sales) now says Litmus is part of Validity Engage, and the old MailCharts pricing link ends at its sales form. Engage’s [competitor intelligence](https://www.validity.com/capabilities/engage-competitor-intelligence-inspiration/) offers a library of 1.2M+ campaigns, side by side tracking of brands you pick, and send time and cadence views. [MailCharts’ page](https://www.mailcharts.com/) says it signs up to, triggers and classifies thousands of ecommerce email journeys, and curates SMS examples.',
    },
    {
      kind: 'p',
      text: '**Suits** an enterprise email team already buying Validity’s tools. **Falls short** for anyone who wants a price before a sales call.',
    },

    { kind: 'h2', id: 'panels', text: 'Which tools read from consumer panels?' },
    {
      kind: 'p',
      text: 'Panels see what no fresh subscriber can: what a brand sends to people who buy. A new sign up only gets the new subscriber treatment. Real customers also get the VIP offer, the discount for lapsed buyers and the email after an order.',
    },
    { kind: 'h3', id: 'axess', text: 'Axess Intelligence' },
    {
      kind: 'p',
      text: '[Axess](https://www.axessintelligence.com/), based in Cologne, captures email, SMS, push and in app messages through what it calls “privacy-compliant panel apps” on the phones of opted in consumers: 10M+ messages, 5,000+ brands, 50+ markets. Its sign up view compares brands on days 1, 2, 3 and 7 and flags gaps, and it offers to show how rivals treat VIPs against customers about to leave, which is a panel’s real edge. [Pricing](https://www.axessintelligence.com/pricing) is modular, through a demo.',
    },
    {
      kind: 'p',
      text: '**Suits** a large B2C brand with a CRM team. **Falls short** for B2B, and you can’t send it down a journey of your choosing.',
    },
    { kind: 'h3', id: 'bird', text: 'Bird Competitive Tracker' },
    {
      kind: 'p',
      text: 'Bird says its tracker follows [millions of domains across 250,000 brands](https://bird.com/en-us/products/email/competitive-tracker), including rivals’ welcome series, cart recovery and reengagement, plus their inbox placement. The [latest public account of its data we found](https://bird.com/en-us/blog/sparkposts-data-sources-explained), a 2020 SparkPost post on Bird’s blog, names a permissioned panel of people who share their commercial email and a persona network that subscribes with a fresh address for every list. No price is published. **Suits** a high volume sender who cares about rivals’ inbox placement as much as their content. **Falls short** on texts and on journeys you choose.',
    },

    { kind: 'h2', id: 'tracking-inboxes', text: 'Which tools give each rival its own tracking address?' },
    {
      kind: 'p',
      text: 'These give each rival its own address and collect what arrives in a dashboard built for comparison, not your own inbox. With most, you sign up with the address yourself, so you control the moment and the path. Owletter says it captures what each website you name sends.',
    },
    { kind: 'h3', id: 'competitor-inbox', text: 'Competitor Inbox' },
    {
      kind: 'p',
      text: '[Competitor Inbox](https://competitorinbox.com/) gives each rival a unique tracking address and analyses what arrives: send patterns, subject lines, ESP switches, and each sender’s SPF, DKIM and DMARC. [Plans](https://competitorinbox.com/pricing) run from $15 a month for 1 competitor to $249 for 25. Email only.',
    },
    { kind: 'h3', id: 'competitortrack', text: 'CompetitorTrack' },
    {
      kind: 'p',
      text: '[CompetitorTrack](https://competitortrack.io/) gives each rival a tracking address you subscribe with, and keeps website, social and review changes beside the emails. [The first competitor is free](https://competitortrack.io/pricing), with a live 7 day window of history; after that it’s $10 a competitor a month with the full archive. Email only.',
    },
    { kind: 'h3', id: 'newsletrix', text: 'Newsletrix' },
    {
      kind: 'p',
      text: '[Newsletrix](https://newsletrix.com/) is built for newsletters: you subscribe with a forwarding address and it analyses subject lines, calls to action and send times. [It’s free](https://newsletrix.com/pricing) for 1 tracking address and 2 analyses a week, then $9, $29 or $69 a month, priced by analyses rather than by competitor. Email only.',
    },
    { kind: 'h3', id: 'owletter', text: 'Owletter' },
    {
      kind: 'p',
      text: '[Owletter](https://www.owletter.com/) captures the emails a website sends to its list, screenshots and stores them, and alerts you to the ones that matter. It’s [$29, $49 or $99 a month](https://www.owletter.com/pricing) for 10, 25 or unlimited websites, with a 14 day free trial. Email only.',
    },
    { kind: 'h3', id: 'sendview', text: 'SendView' },
    {
      kind: 'p',
      text: '[SendView](https://sendview.io/) adds more analysis: a timeline from the moment you signed up, the days between emails, a monthly PDF report. You can give 1 company several addresses to compare its newsletter with its abandoned cart flow, and switch on automatic opens so an address isn’t dropped for inactivity. It’s $69, $99 or $169 a month for 10, 25 or 50 companies, or $249 a month for the managed service. Email only.',
    },
    {
      kind: 'p',
      text: '**These suit** a team that knows its rivals and wants clean, timed sequences. **They fall short** on texts, on everything outside the inbox such as a trial’s in app prompts, and on history: the record starts when the address signs up, unless the vendor already holds that brand. Competitor Inbox says it keeps a growing archive you can search by date.',
    },

    { kind: 'h2', id: 'what-they-miss', text: 'What do archives and panels miss?' },
    {
      kind: 'p',
      text: '**A message that never came.** An archive can only hold what was sent. When a brand’s welcome email breaks, its archive page just looks quiet, and quiet looks like a brand that doesn’t send much. You only catch the failure from an inbox with a known sign up time and a promise to check against.',
    },
    {
      kind: 'stat',
      value: '43.6%',
      label: 'of 362 ecommerce brands never sent a welcome email to a fresh subscriber',
      source: 'Laryssa Wirstiuk, Joy Joya, 27 July 2026',
      href: 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands',
    },
    {
      kind: 'p',
      text: 'Laryssa Wirstiuk of Joy Joya [signed up to 362 brands](https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands) with fresh emails and phone numbers. 158 never sent a welcome email, 53 never sent the text they promised, and 20 sent an offer that didn’t match the pop-up. None of those 3 failures leaves a trace in a library of what brands sent.',
    },
    {
      kind: 'p',
      text: '**A journey you choose.** Archives and panels see the journeys their addresses or panellists happen to take. A software rival’s onboarding emails, its reminder before the trial ends and its last day discount only reach someone who starts the trial, and none of the archives or panels above say they start trials. PageCrawl, which sells page monitoring, says the same of its own kind of tool:',
    },
    {
      kind: 'quote',
      text: 'the in-product sequence needs a human to walk it once a quarter',
      cite: 'PageCrawl, 26 September 2026',
      href: 'https://pagecrawl.io/blog/competitor-free-trial-onboarding-change-monitoring',
    },
    {
      kind: 'p',
      text: 'Once a quarter is a long gap when the trial is where a rival tests its offer. For a software rival, the full view takes a subscriber you control who starts the trial. Read the trial’s terms first: a common clause in software contracts, [Salesforce’s among them](https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/Salesforce_MSA.pdf), bars access “for any other benchmarking or competitive purposes”.',
    },
    {
      kind: 'p',
      text: '**The reply to STOP.** No tool here claims to show what a brand does after you text STOP or click unsubscribe, and we found no published study that has texted STOP to brands and logged what came next. The nearest outside-in check is old: in 2018, Cordial found [8 of 87 welcome emails](https://cordial.com/resources/analyzing-the-welcome-emails-of-total-retails-top-100-omnichannel-retailers/) from Total Retail’s Top 100 Omnichannel Retailers had no working unsubscribe link.',
    },
    {
      kind: 'p',
      text: 'It’s worth testing now. On 30 September 2026 the FCC [voted 3 to 0](https://bankingjournal.aba.com/2026/09/fcc-votes-to-revise-revoke-all-rule-and-provided-number-condition/) to rewrite its opt out rules for calls and texts. Under the order as adopted, a STOP reply to a marketing text still ends all of that sender’s marketing texts, and a sender may make a standard reply word its only opt out route if it says so clearly in the text ([Ecommerce Innovation Alliance](https://www.ecomm-alliance.org/blog/update-fcc-adopts-exclusive-opt-out-rule/)). The rules start 30 days after Federal Register publication, and on 1 October the FCC had yet to publish the final text. For email, US senders must honour an unsubscribe [within 10 business days](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business).',
    },
    {
      kind: 'stat',
      value: '$2.95m',
      label: 'the record CAN-SPAM payment Verkada agreed in 2024, over charges that included not honouring opt outs',
      source: 'WilmerHale, 30 September 2024',
      href: 'https://www.wilmerhale.com/en/insights/blogs/wilmerhale-privacy-and-cybersecurity-law/20240930-ftc-penalizes-cloudbased-physical-security-company-for-data-security-and-canspam-violations',
    },
    {
      kind: 'p',
      text: 'In 2023, Experian [agreed to pay $650,000](https://ftc.gov/news-events/news/press-releases/2023/08/ftc-charges-experian-spamming-consumers-who-signed-company-accounts-marketing-emails-they-couldnt) over marketing emails to account holders that had no way to opt out. In September 2026, Palm Beach Tan was settling a class action for $2.5m over texts sent after people replied STOP ([Troutman Amin](https://www.jdsupra.com/legalnews/what-is-a-stop-request-palm-beach-tan-3267070/)). Start with your own list: text STOP to your own programme, unsubscribe from your own emails, and log what arrives over the next 10 business days. An archive or a panel can’t run that test for you.',
    },

    { kind: 'h2', id: 'free', text: 'Can you track competitor emails for free?' },
    {
      kind: 'p',
      text: 'Yes, for a few rivals, if you’ll trade time for money. Milled is free to search, BadRep’s vault is free to browse and Recart’s library of texts is free to search. CompetitorTrack tracks 1 competitor free, Newsletrix gives you 1 tracking address free, and Panoramata’s free sign up gives limited access. For timed sequences and texts across more rivals, you need a subscriber of your own. The usual advice is a burner Gmail and an abandoned cart ([Retainful’s 2026 guide](https://www.retainful.com/blog/checking-competitors-campaigns) is typical). A tracker that holds up for 3 rivals looks more like this:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**1 inbox per rival.** Separate inboxes keep each brand’s timings clean. Sign up under your real name or a plain role name, never an invented persona: posing as someone you’re not is where research turns into a legal problem ([is it legal to mystery shop competitors?](/blog/is-it-legal-to-mystery-shop-competitors)).',
        '**1 phone number for texts, in the rival’s country.** Each brand texts from its own sender, so 1 number can serve every rival.',
        '**Sign up from the main pop-up, and write down the minute.** Screenshot the offer. The time lets you say the welcome came 2 minutes later; the screenshot lets you say it offered 10% when the pop-up promised 15%.',
        '**Pick 1 behaviour and keep it.** Flows can branch on whether you open or click, and some lists drop inactive addresses, which is why SendView offers automatic opens. Open everything or nothing, the same at every rival, or the comparison measures you.',
        '**Log every message in a sheet:** rival, channel, received at, hours since sign up, subject or first line, offer, code, and where the link goes.',
        '**End with STOP and unsubscribe, and keep logging.** A well run programme sends 1 confirmation, then nothing.',
      ],
    },
    {
      kind: 'p',
      text: 'Say Rival B’s pop-up promised 15%, its welcome email 2 minutes later offered 10%, and day 3 brought 15% to anyone who hadn’t bought. That gap is the finding: Rival B pays its full discount only to people who wait, and your next welcome offer can answer it.',
    },
    {
      kind: 'p',
      text: '**After 30 days, a good log shows** each rival’s welcome series in hours from sign up, every offer next to the promise that earned the sign up, and a line per rival on what changed. **The usual mistakes:** 1 inbox for every brand, no sign up time, a personal Gmail that files rivals’ messages under Promotions or spam, and nobody opting out at the end.',
    },
    {
      kind: 'p',
      text: 'The cost is attention. Someone has to log every message for every rival, every day, and it’s the first job to slip when the team gets busy. That’s the case for paying for any tool in this review.',
    },

    { kind: 'h2', id: 'obsession', text: 'Obsession lives the journey you choose, as a declared subscriber' },
    {
      kind: 'p',
      text: 'Obsession is ours. It’s a subscriber you control, run by a declared AI agent: 1 per rival, each with its own inbox, phone number and browser, joining through the public sign up any customer uses. It says it’s an AI agent, links to [a page explaining Obsession](/agents) and never names you. It never answers a message; the only text it sends is STOP, when the watch ends. You pick the journeys: the welcome series, the text club and a B2B trial that needs no card. Every message is kept as it arrived, dated and signed.',
    },
    {
      kind: 'screen',
      screen: 'inbox',
      workspace: 'company',
      caption: 'Obsession, our product: 3 rivals’ emails and texts on 1 timeline over 30 days. Example data.',
    },
    {
      kind: 'p',
      text: 'It starts a rival’s trial as any new user would, logs every email, prompt and offer by trial day, and closes the trial the moment a rep writes or calls ([trial teardown](/recipes/trial-teardown)).',
    },
    {
      kind: 'screen',
      screen: 'battlecard',
      workspace: 'company',
      caption: 'Obsession, our product: 3 rivals’ 14 day trials that need no card, day by day. Rival B’s trial closed on day 6, when its rep wrote. Example data.',
    },
    {
      kind: 'p',
      text: '**Where it falls short.** No back catalogue: the record starts when the agent signs up. Only the companies on your list, so it’s no use for browsing a category for ideas. It never fills a basket at a rival (our rule, not the law), so it can’t show a rival’s abandoned cart flow; archives and panels can. As a fresh subscriber it never sees what a rival sends its buyers. And it isn’t generally available: there’s a waitlist and no public price.',
    },
    {
      kind: 'p',
      text: '**Suits** [agencies](/agencies) and B2B teams who need a dated record of a specific journey at named rivals, and [marketing teams](/marketing) who want texts and emails on 1 timeline. **Doesn’t suit** a team that wants ideas from thousands of brands or years of history. [Competitor tracking](/recipes/competitor-tracking) adds rivals’ prices, ads and pages to the same record, and agencies use the same outside-in view to [win clients with a free audit](/blog/free-audit-agency-clients).',
    },
    {
      kind: 'cta',
      text: 'A declared AI subscriber on each rival’s list, every email and text on 1 timeline, continuously.',
      to: '/recipes/email-sms-tracking',
      label: 'The email and SMS tracking recipe',
    },

    { kind: 'h2', id: 'method', text: 'Every price and feature here was checked on the vendor’s own pages on 3 October 2026' },
    {
      kind: 'p',
      text: 'We read each vendor’s own product and pricing pages on 3 October 2026, and press releases for changes of ownership. We didn’t buy or trial the tools for this version, so the grid shows what each vendor says it covers, not what we measured. Where a page didn’t load or didn’t show a price, we say so.',
    },
    {
      kind: 'p',
      text: 'We left out tools we couldn’t verify on their own sites in time: Competitors App, Hoppy Copy and Reyo. If you run any tool here and something is wrong or out of date, write to [hello@useobsession.com](mailto:hello@useobsession.com). We’ll correct it within 5 working days and note the change by the date at the top. We check every entry again each quarter.',
    },

    { kind: 'h2', id: 'faq', text: 'Joining a rival’s list is generally lawful; seeing its flows and texts takes the right tool' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is it legal to sign up for a competitor’s emails?',
          a: 'Joining a newsletter or text club through the public sign up is what every subscriber does, and it’s generally lawful. The risk comes from deception: an invented persona, posing as a buyer to staff, or breaking terms you agreed to. Our guide on [whether it’s legal to mystery shop competitors](/blog/is-it-legal-to-mystery-shop-competitors) covers where the line sits. It isn’t legal advice.',
        },
        {
          q: 'Can I see a competitor’s abandoned cart emails?',
          a: 'Yes, through tools that trigger or observe them. MailCharts says it triggers ecommerce journeys, BadRep and Panoramata list cart flows, Bird reports cart recovery, and SendView lets you set up a second address for the cart flow.',
        },
        {
          q: 'How do I track competitor texts?',
          a: 'Opt in to each rival’s text club with a number you control and log every message, or use a tool that lists SMS: Panoramata, Axess or MailCharts, or Recart’s free library of texts. Follow each short link and log the offer on the page it opens.',
        },
        {
          q: 'What’s the difference between campaign and flow tracking?',
          a: 'Campaigns are broadcasts to a whole list or segment, so any archive catches them. Flows are triggered by what a subscriber does: signing up, browsing, leaving a basket, going quiet. A tracker only sees a flow if its subscriber triggers it, and flows earn [nearly 41% of email revenue](https://www.klaviyo.com/products/email-marketing/benchmarks) across Klaviyo’s customers.',
        },
        {
          q: 'Is there a MailCharts alternative with a public price?',
          a: 'MailCharts belongs to Validity, alongside Litmus and Engage, and its old pricing link ends at a Litmus sales form. Archives with prices on their own sites include BadRep and Panoramata, and Recart’s library of texts is free. Tracking inbox tools with listed prices include CompetitorTrack, Competitor Inbox, Newsletrix, Owletter and SendView. The grid above has each price as of 3 October 2026.',
        },
        {
          q: 'Is there a cheaper alternative to Panoramata?',
          a: 'For email alone, BadRep is an archive at $19 a month, and CompetitorTrack (first competitor free, then $10 each a month), Competitor Inbox (from $15 a month) and Owletter (from $29 a month) are tracking inboxes. For texts, Recart’s campaign library is free to search. None of them lists rivals’ ads beside the emails, which is Panoramata’s draw. The grid above has each price as of 3 October 2026.',
        },
      ],
    },
  ],
  sources: [
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: 'https://www.klaviyo.com/products/email-marketing/benchmarks', date: '2026' },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands', date: '2026-07-27' },
    { title: 'BadRep Emails: searchable email intel', publisher: 'BadRep', url: 'https://badrep.email/', date: 'checked 2026-10-03' },
    { title: 'Competitor email intelligence: the 2026 guide', publisher: 'BadRep', url: 'https://badrep.email/guides/competitor-email-intelligence', date: '2026-08-04' },
    { title: 'Milled: a search engine for email newsletters', publisher: 'Milled', url: 'https://milled.com/', date: 'checked 2026-10-03' },
    { title: 'Panoramata pricing', publisher: 'Panoramata', url: 'https://www.panoramata.co/pricing', date: 'checked 2026-10-03' },
    { title: 'What are flows? How do I access them? What flows do you collect?', publisher: 'Panoramata', url: 'https://www.panoramata.co/help-faq/flows-access-collect', date: '2026-08-15' },
    { title: 'Campaign Library: what are the top DTC brands texting?', publisher: 'Recart', url: 'https://recart.com/campaign-library', date: 'checked 2026-10-03' },
    { title: 'Validity acquires MailCharts to power ecommerce marketing campaigns', publisher: 'Validity (PRWeb)', url: 'https://www.prweb.com/releases/Validity_Acquires_MailCharts_to_Power_Ecommerce_Marketing_Campaigns/prweb18604538.htm', date: '2022-04-07' },
    { title: 'Validity acquires Litmus', publisher: 'Litmus (PR Newswire)', url: 'https://www.prnewswire.com/news-releases/validity-acquires-litmus-advances-leadership-as-best-in-class-global-provider-of-marketing-success-and-customer-data-intelligence-solutions-302426098.html', date: '2025-04-10' },
    { title: 'Validity announces Engage, the next-generation AI email platform', publisher: 'Validity (PR Newswire)', url: 'https://www.prnewswire.com/news-releases/validity-announces-engage-the-next-generation-ai-email-platform-to-help-marketers-execute-with-confidence-302685294.html', date: '2026-02-11' },
    { title: 'Contact sales: Litmus is now part of Validity Engage', publisher: 'Litmus', url: 'https://www.litmus.com/contact-sales', date: 'checked 2026-10-03' },
    { title: 'Competitor Intelligence & Inspiration', publisher: 'Validity', url: 'https://www.validity.com/capabilities/engage-competitor-intelligence-inspiration/', date: 'checked 2026-10-03' },
    { title: 'Email and SMS campaign intelligence', publisher: 'MailCharts from Validity', url: 'https://www.mailcharts.com/', date: 'checked 2026-10-03' },
    { title: 'Axess Intelligence home and pricing', publisher: 'Axess Intelligence', url: 'https://www.axessintelligence.com/', date: 'checked 2026-10-03' },
    { title: 'Competitive email tracker and benchmarking', publisher: 'Bird', url: 'https://bird.com/en-us/products/email/competitive-tracker', date: 'checked 2026-10-03' },
    { title: 'SparkPost’s data sources explained', publisher: 'Bird', url: 'https://bird.com/en-us/blog/sparkposts-data-sources-explained', date: '2020-02-12' },
    { title: 'Competitor Inbox: monitor competitor email campaigns', publisher: 'Competitor Inbox', url: 'https://competitorinbox.com/', date: 'checked 2026-10-03' },
    { title: 'Competitor Inbox pricing', publisher: 'Competitor Inbox', url: 'https://competitorinbox.com/pricing', date: 'checked 2026-10-03' },
    { title: 'Pricing plans', publisher: 'CompetitorTrack', url: 'https://competitortrack.io/pricing', date: 'checked 2026-10-03' },
    { title: 'Pricing', publisher: 'Newsletrix', url: 'https://newsletrix.com/pricing', date: 'checked 2026-10-03' },
    { title: 'Monitoring your competitors’ email marketing newsletters', publisher: 'Owletter', url: 'https://www.owletter.com/', date: 'checked 2026-10-03' },
    { title: 'Owletter pricing', publisher: 'Owletter', url: 'https://www.owletter.com/pricing', date: 'checked 2026-10-03' },
    { title: 'Competitor email monitoring and tracking for marketers', publisher: 'SendView', url: 'https://sendview.io/', date: 'checked 2026-10-03' },
    { title: 'Competitor free trial and onboarding change monitoring', publisher: 'PageCrawl', url: 'https://pagecrawl.io/blog/competitor-free-trial-onboarding-change-monitoring', date: '2026-09-26' },
    { title: 'Main Services Agreement', publisher: 'Salesforce', url: 'https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/Salesforce_MSA.pdf', date: '2023-10-16' },
    { title: 'Analyzing welcome emails from Total Retail’s Top 100 Omnichannel Retailers', publisher: 'Cordial', url: 'https://cordial.com/resources/analyzing-the-welcome-emails-of-total-retails-top-100-omnichannel-retailers/', date: '2018' },
    { title: 'FCC votes to revise ‘revoke all’ rule and ‘provided number’ condition', publisher: 'ABA Banking Journal', url: 'https://bankingjournal.aba.com/2026/09/fcc-votes-to-revise-revoke-all-rule-and-provided-number-condition/', date: '2026-09-30' },
    { title: 'FCC revises TCPA revocation of consent rules that were set to go into effect in January', publisher: 'Troutman Pepper Locke', url: 'https://www.troutman.com/insights/fcc-revises-tcpa-revocation-of-consent-rules-that-were-set-to-go-into-effect-in-january/', date: '2026-09-17' },
    { title: 'Update: FCC adopts exclusive opt-out rule', publisher: 'Ecommerce Innovation Alliance', url: 'https://www.ecomm-alliance.org/blog/update-fcc-adopts-exclusive-opt-out-rule/', date: '2026-10-01' },
    { title: 'CAN-SPAM Act: a compliance guide for business', publisher: 'Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business', date: 'checked 2026-10-03' },
    { title: 'FTC charges Experian with spamming consumers who signed up for company accounts', publisher: 'Federal Trade Commission', url: 'https://ftc.gov/news-events/news/press-releases/2023/08/ftc-charges-experian-spamming-consumers-who-signed-company-accounts-marketing-emails-they-couldnt', date: '2023-08-14' },
    { title: 'What is a STOP request? Palm Beach Tan to pay $2.5MM to settle TCPA suit for text messages sent after stop requests', publisher: 'Troutman Amin (JD Supra)', url: 'https://www.jdsupra.com/legalnews/what-is-a-stop-request-palm-beach-tan-3267070/', date: '2026-09-24' },
    { title: 'FTC penalizes cloud-based physical security company for data security and CAN-SPAM violations', publisher: 'WilmerHale', url: 'https://www.wilmerhale.com/en/insights/blogs/wilmerhale-privacy-and-cybersecurity-law/20240930-ftc-penalizes-cloudbased-physical-security-company-for-data-security-and-canspam-violations', date: '2024-09-30' },
    { title: 'How to check competitors’ email marketing and ad campaigns in 2026', publisher: 'Retainful', url: 'https://www.retainful.com/blog/checking-competitors-campaigns', date: '2026-02-02' },
  ],
  related: [
    'is-it-legal-to-mystery-shop-competitors',
    'free-audit-agency-clients',
    'recipe:email-sms-tracking',
    'recipe:trial-teardown',
    '/marketing',
  ],
}
