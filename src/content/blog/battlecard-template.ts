import type { BlogPost } from './types'

/* Revenue team guides, spec 1 (_research/seo/revenue-teams-11nov/WRITER_BRIEF.md and PLAN.md, 11 Nov 2026). It owns
   "battlecard template" and competitor battlecard template, sales battlecard template, battlecard examples and
   competitive battlecards (Google autocomplete, US and UK, 11 Nov: demand.json, the sales enablement persona).
   /glossary/battlecard owns the definition and reserves the template for a guide; this is that guide.
   Reader: sales enablement and competitive intelligence at B2B software companies, first the vendors whose product
   touches what their own prospects' customers see (email and SMS, help desk and AI support, loyalty and reviews).
   Page 1 is static documents (Klue, HubSpot, Figma, Apollo, the Product Marketing Alliance). The case: a real template,
   12 sections in a table, with one section kept current from what each competitor sends and shows new customers
   (welcome email, trial limits, upgrade prompts, the price inside the account, discounts, save offers) and "what
   changed this week", each line dated with its screenshot; the method by hand, its hours, and where it stops.
   Read at the source on 11 Nov 2026: Klue's automated battlecards article (3 Mar 2026), its battlecards guide
   (1 Apr 2026) and pricing page; Crayon's enable page (the address /products/battlecards redirects there), pricing page
   and 2026 State of Competitive Intelligence; HubSpot's battle card templates page; the Product Marketing Alliance's
   template page (14 May 2023); Salesforce's main services agreement (the PDF, last updated 15 Oct 2026); Visualping's
   pricing; Exa's home, pricing and GTM use case pages. Obsession is described in the words of site.ts, /sales, the trial
   teardown and competitor tracking recipes and /alternatives/klue. Kestrel Mail, Tidewell and Brightpoint are invented,
   at .example addresses, as is every figure about them. Left out on purpose: the platform behind each email (not a
   battlecard fact), any promised lift in win rate, any price figure for Obsession. General information on trial terms,
   never legal advice. No dashes. */

const KLUE_AUTO = 'https://klue.com/topics/automated-battlecards'
const CRAYON_STATE = 'https://www.crayon.co/state-of-competitive-intelligence'
const HUBSPOT = 'https://offers.hubspot.com/battle-card-templates'
const PMA = 'https://www.productmarketingalliance.com/sales-battlecard-template-framework/'
const KLUE_101 = 'https://klue.com/blog/competitive-battlecards-101'
const EXA = 'https://exa.ai/'
const EXA_GTM = 'https://exa.ai/use-cases/gtm'
const SALESFORCE = 'https://www.salesforce.com/company/msa.jsp'
const KLUE_PRICING = 'https://klue.com/pricing'
const CRAYON_ENABLE = 'https://www.crayon.co/product/enable'
const CRAYON_PRICING = 'https://www.crayon.co/pricing'
const VISUALPING = 'https://visualping.io/pricing'
const EXA_PRICING = 'https://exa.ai/pricing'

export const post: BlogPost = {
  slug: 'battlecard-template',
  title: 'Battlecard template for sales enablement: keep it current when competitors change offers',
  dek: 'A battlecard template with 12 sections to copy, worked examples for 3 kinds of software vendor, and one section kept current from what each competitor sends its new customers. Every line carries its date and screenshot.',
  metaTitle: 'Battlecard template for sales enablement: keep it current',
  description:
    'A battlecard template for sales enablement teams: 12 sections to copy, with one kept current from what each competitor sends new customers, dated.',
  answer:
    'A battlecard template is the set of sections a sales enablement team fills in for each competitor, from its pitch and pricing to objections and proof, each line dated. The section that goes stale first is what the competitor shows new customers, such as its trial limits, discounts and save offers, so date each one with a screenshot. Obsession keeps what each competitor shows only to its customers, dated with the email or screenshot, by API, MCP (the standard way AI agents call tools) or a table.',
  primaryKeyword: 'battlecard template',
  keywords: [
    'competitor battlecard template',
    'sales battlecard template',
    'battlecard examples',
    'competitive battlecards',
    'competitive battlecard template',
    'battle card template',
  ],
  category: 'Watch other companies',
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 13,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'kestrelmail.example · a new trial',
      who: 'A new trial user in the UK, from Monday 2 November',
      rows: [
        { time: 'Mon 09:00', text: 'Pricing page: Growth at £59 a month', detail: 'Public, and on last quarter’s card', tone: 'info' },
        { time: 'Mon 09:04', text: 'Welcome email: your first campaign', detail: 'Sent 4 minutes after sign-up', tone: 'ok' },
        { time: 'Day 7', text: 'Upgrade prompt at 500 contacts', detail: 'Texts stay locked in the trial', tone: 'ok' },
        { time: 'Day 12', text: 'Email: 20% off the first year', detail: 'On no public page', tone: 'ok' },
        { time: 'Day 13', text: 'Cancel flow: 2 months at half price', detail: 'Shown after the answer “too expensive”', tone: 'ok' },
        { time: 'Day 14', text: 'The card still says a 21 day trial', detail: 'The trial is now 14 days', tone: 'fail' },
      ],
      foot: 'Invented company and figures. Rows 2 to 5 reached only an account inside the trial.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A battlecard template is the set of sections a sales enablement team fills in for each competitor, from its pitch and pricing to objections and proof, each line dated. It is written for sales enablement and [competitive intelligence](/glossary/competitive-intelligence) (CI) teams at B2B software companies. The worked examples come from vendors of email and SMS, help desk and AI support, and loyalty and reviews software. The template has 12 sections, and one of them stays current from what each competitor sends and shows its new customers, each item dated with a screenshot.',
    },
    {
      kind: 'p',
      text: 'A [battlecard](/glossary/battlecard), or card, is the page a rep opens when a buyer names a competitor. It loses the rep’s trust the first time a buyer corrects it on a call. The line that goes wrong first is usually what the competitor offers a new customer this month: the trial, the discount and the offer to stay. [Klue’s own article on automated battlecards](' +
        KLUE_AUTO +
        ') puts the problem plainly.',
    },
    {
      kind: 'quote',
      text: 'Static battlecards decay the moment they’re published.',
      cite: 'Klue, in its article on automated battlecards, 3 March 2026',
      href: KLUE_AUTO,
    },
    {
      kind: 'stat',
      value: '7 in 10',
      label: 'competitive intelligence teams say at least half of their sales opportunities are now competitive',
      source: 'Crayon, State of Competitive Intelligence 2026',
      href: CRAYON_STATE,
    },
    {
      kind: 'p',
      text: 'When most deals have a competitor in them, the card is open in most calls. The date on each line then matters as much as the line itself, because it tells the rep whether to say it to a buyer.',
    },

    { kind: 'h2', id: 'usual-templates', text: 'What the usual battlecard templates contain' },
    {
      kind: 'p',
      text: 'The templates most teams start from are documents to fill in. [HubSpot offers 3](' +
        HUBSPOT +
        ') behind a form: an in-depth card for reps, a side-by-side comparison and a card for several competitors at once. [The Product Marketing Alliance’s template](' +
        PMA +
        ') lists 8 components, from the company and product overview to pricing and testimonials, as a PDF, a Word file or a Google Doc for subscribers. [Klue’s battlecards guide](' +
        KLUE_101 +
        '), dated 1 April 2026, frames each card as Fact, Impact and Act and offers 6 fillable templates as a free download.',
    },
    {
      kind: 'p',
      text: 'Each gives a sound structure. Keeping every line true is left to the team that fills it in, and Klue’s guide calls keeping content up to date the most important job of all. The 12 sections that follow build the date and the source into every line.',
    },

    { kind: 'h2', id: 'template', text: 'The battlecard template, section by section' },
    {
      kind: 'p',
      text: 'Use 1 card per competitor, with the 12 sections in this order. The first 6 answer what a rep needs in the first minute of a call, and the last 6 hold the arguments.',
    },
    {
      kind: 'table',
      caption: 'A battlecard template for one competitor: 12 sections, each with its source and how often to refresh it',
      cols: ['Section', 'What goes in it', 'Where it comes from', 'Refresh'],
      rows: [
        ['1. Header', 'Competitor, card owner, last checked date', 'Your team', 'Every edit'],
        ['2. Quick facts', 'Who they sell to, their size, the plans they lead with', 'Their home and pricing pages', 'Quarterly'],
        ['3. Their pitch', 'How they describe themselves, in their own words', 'Home page, ads, launch posts', 'Monthly'],
        ['4. Pricing and packaging', 'Public plans, limits and prices', 'Their pricing page', 'Monthly, and on any change'],
        ['5. What a new customer gets', 'Welcome email, trial limits, upgrade prompts, discounts, save offers', 'A trial or a subscription, dated', 'Weekly'],
        ['6. What changed this week', 'Each line that moved: was, now, date, screenshot', 'Sections 4 and 5', 'Every Monday'],
        ['7. Where we win', 'Deal types, segments and the reasons', 'Win-loss interviews, CRM', 'Quarterly'],
        ['8. Where they win', 'The deals they take, and why', 'Win-loss interviews, CRM', 'Quarterly'],
        ['9. Objections and answers', 'What their reps say about you, and the reply', 'Call recordings, reps', 'Monthly'],
        ['10. Landmines', 'Questions that expose a gap in their product', 'Sections 4 and 5, product team', 'Monthly'],
        ['11. Proof', 'Customer stories, quotes and numbers', 'Win-loss, customer marketing', 'Quarterly'],
        ['12. Talk tracks', 'The lines a rep says on a call', 'Enablement', 'When sections 4 to 10 change'],
      ],
    },
    {
      kind: 'p',
      text: 'Every line carries the date it was last checked and a link to where it came from. A rep who sees “checked 3 days ago, screenshot linked” can say the line to a buyer. A rep who sees no date checks with a colleague first, or leaves it out.',
    },
    {
      kind: 'p',
      text: 'Most sales teams fill sections 2, 3, 7 and 8 from similar data, from contact databases and intent tools to [Exa’s search of the public web](' +
        EXA +
        '). Their CRM and call recordings add the deals and objections. Section 5 comes from somewhere else: an account inside the competitor’s trial, or on its email list.',
    },

    { kind: 'h2', id: 'new-customer', text: 'The section that goes stale first: what a new customer gets' },
    {
      kind: 'p',
      text: 'Section 5 holds what the competitor sends and shows the people who sign up, from its [welcome series](/glossary/welcome-series) to the offer they see when they try to leave. It sits behind a sign-up or a login, so a search engine never holds it: it is part of [the web behind the login](/blog/the-web-behind-the-login). Buyers meet all of it in their own trial, so it comes up on calls.',
    },
    {
      kind: 'table',
      caption: 'Section 5 for an invented email and SMS competitor, Kestrel Mail (kestrelmail.example). Every figure is an example',
      cols: ['Item', 'What to record', 'Example: Kestrel Mail'],
      rows: [
        ['Welcome email', 'Arrival time, subject, any offer', '4 minutes after sign-up, “Your first campaign in 10 minutes”'],
        ['Onboarding emails', 'How many, on which trial day, what each asks', '6 emails in 14 days'],
        ['Trial limits', 'Days, seats, contacts, features held back', '14 days, 500 contacts, no texts'],
        ['Upgrade prompt', 'Trial day, what triggers it, its wording', 'Day 7, at 500 contacts'],
        ['Price inside the account', 'The signed-in price beside the pricing page', '£54 inside, £59 on the page'],
        ['Discount', 'Offer, code, deadline, trial day', '20% off year 1, day 12, for 72 hours'],
        ['Save offer', 'What the cancel flow offers, after which answer', '2 months at half price, after “too expensive”'],
        ['Evidence', 'A screenshot or the email, with its date', 'Linked from every line'],
      ],
    },
    {
      kind: 'p',
      text: 'Each item has a plain definition a rep can repeat. A [trial limit](/glossary/trial-limit) is the cap on a trial or free plan, such as days, seats or contacts. An [upgrade prompt](/glossary/upgrade-prompt) is the message that asks a trial user to pay. The [signed-in price](/glossary/signed-in-price) is what the product shows once someone is logged in, which can differ from the pricing page. A [save offer](/glossary/save-offer) is the discount or pause shown in the [cancel flow](/glossary/cancel-flow) to keep a customer.',
    },
    {
      kind: 'p',
      text: 'Every Monday, write “What changed this week” at the top of the card. List only the lines that moved, each with what it was, what it is now, the day it changed and its screenshot. A rep can read 4 changed lines before a call, with the proof one click away. In [Crayon’s 2026 survey](' +
        CRAYON_STATE +
        '), 83% of teams that update their deliverables at least weekly reported revenue impact, against 49% of teams that update less often.',
    },
    {
      kind: 'art',
      caption: 'Section 6 for the invented Kestrel Mail card in the week of 9 November: 4 lines changed and 1 unchanged, each linked to its screenshot or email.',
      art: {
        kind: 'report',
        title: 'Battlecard: Kestrel Mail',
        period: 'What changed, week of 9 November · invented',
        cols: ['Item', 'Was', 'Now', 'Seen'],
        rows: [
          { name: 'Trial length', cells: ['21 days', '14 days', 'Tue 10 Nov'], tone: 'info' },
          { name: 'Upgrade prompt', cells: ['Day 10', 'Day 7, at 500 contacts', 'Mon 9 Nov'], tone: 'info' },
          { name: 'Discount', cells: ['None', '20% off year 1', 'Thu 12 Nov'], tone: 'info' },
          { name: 'Save offer', cells: ['1 month free', '2 months at half price', 'Fri 13 Nov'], tone: 'info' },
          { name: 'Welcome email', cells: ['No change', 'No change', 'Mon 9 Nov'], tone: 'ok' },
        ],
        notes: ['Each line links to its screenshot or email.', 'Kestrel Mail and every figure are invented.'],
      },
    },

    { kind: 'h2', id: 'examples', text: 'Battlecard examples for 3 kinds of software vendor' },
    {
      kind: 'p',
      text: 'Section 5 reads differently for each type of vendor, because each buyer tests the features their own business depends on. Each example uses an invented competitor at a .example address.',
    },
    { kind: 'h3', id: 'email-sms', text: 'An email and SMS platform up against Kestrel Mail' },
    {
      kind: 'p',
      text: 'The card shows that Kestrel Mail’s trial stops at 500 contacts and keeps texts locked until a paid plan. It prompts an upgrade on day 7 and emails 20% off the first year on day 12. When a buyer says Kestrel is cheaper, the talk track asks whether that quote includes texts and the full contact list. The landmine asks whether they could send a test text before paying. Both questions come straight from dated screenshots, so the rep can show them.',
    },
    { kind: 'h3', id: 'help-desk', text: 'A help desk and AI support vendor up against Tidewell' },
    {
      kind: 'p',
      text: 'Tidewell’s trial (tidewell.example) comes with 2 agent seats and 50 AI answers. Its onboarding emails push the AI add-on from day 3, and the add-on’s price appears only inside the account. The card puts the signed-in price beside the per-seat price on Tidewell’s pricing page. The rep asks the buyer what the AI answers cost after the first 50, a number the buyer met in the trial and may not see in Tidewell’s proposal.',
    },
    { kind: 'h3', id: 'loyalty', text: 'A loyalty and reviews platform up against a competitor with no trial' },
    {
      kind: 'p',
      text: 'Brightpoint (brightpoint.example) offers a demo and no trial. Section 5 then fills from what Brightpoint sends anyone who subscribes to its newsletter, guides and webinars, from its public pricing page and from what buyers forward. Say its newsletter announced a new price for review requests on Tuesday 3 November: that email, dated, goes on the card the same week, and the talk track changes with it.',
    },

    { kind: 'h2', id: 'by-hand', text: 'How to keep a competitor battlecard current by hand' },
    {
      kind: 'p',
      text: 'A team can start this on Monday with a spare inbox for each competitor and a shared sheet. Each step says what a pass looks like.',
    },
    { kind: 'h3', id: 'terms', text: '1. Read each competitor’s terms first' },
    {
      kind: 'p',
      text: 'Some companies’ terms bar using a trial to study them. [Salesforce’s main services agreement](' +
        SALESFORCE +
        '), last updated on 15 October 2026, says it governs free trials too. It says its services may not be accessed “for any other benchmarking or competitive purposes”, and that direct competitors need its written consent to access them. Where a competitor’s terms say something similar, keep to the emails it sends subscribers and its public pages, or ask a lawyer first. The guide [is it legal to mystery shop competitors](/blog/is-it-legal-to-mystery-shop-competitors) covers the rest; none of this is legal advice. A pass: each card notes which sources that competitor’s terms allow.',
    },
    { kind: 'h3', id: 'inbox', text: '2. Give each competitor its own inbox, and sign up as yourself' },
    {
      kind: 'p',
      text: 'Use the public form any customer uses, with a new address for each competitor, so every email in that inbox comes from one company. Sign up as yourself, never with invented details. Note the day you joined, because an address receives only what is sent after it exists. A pass: one inbox per competitor, with the sign-up date at the top of its card.',
    },
    { kind: 'h3', id: 'log', text: '3. Log every email and screen the day it arrives' },
    {
      kind: 'p',
      text: 'Keep a sheet with 6 columns: competitor, item, date seen, trial day, what it says, and a link to the screenshot or the email. Save the original email as well as a screenshot, because the original carries its arrival time. A pass: no email older than a day without its row.',
    },
    { kind: 'h3', id: 'sign-in', text: '4. Sign in on set trial days' },
    {
      kind: 'p',
      text: 'Sign in on days 1, 3, 7 and 10 and on the last day, and screenshot the plan page, any limit you hit and every upgrade prompt. Some prompts show only when a user reaches a limit, so add contacts, seats or projects the way a real buyer would. A pass: a dated screenshot of every limit and prompt in the trial.',
    },
    { kind: 'h3', id: 'cancel', text: '5. Open the cancel flow before the trial ends' },
    {
      kind: 'p',
      text: 'A day before the end, start cancelling and go as far as the offer. Screenshot the save offer and the answer that led to it, such as “too expensive”, then decide whether to finish. A buyer who tried to leave that competitor has seen the same offer, so the rep should know it. A pass: the save offer on the card, with the answer that triggered it.',
    },
    { kind: 'h3', id: 'monday', text: '6. Write what changed every Monday' },
    {
      kind: 'p',
      text: 'Compare this week’s sheet with last week’s. Write each changed line at the top of the card, with what it was, what it is now, the date and the screenshot. Post the same lines where reps already read updates. Change the talk tracks and landmines that depend on them the same day. A pass: every change on the card within a week, each with its proof.',
    },

    { kind: 'h2', id: 'hours', text: 'How long competitive battlecards take by hand' },
    {
      kind: 'p',
      text: 'Multiply your competitors by the minutes a week each one takes. 30 minutes a week per competitor is a low estimate. It covers logging the week’s emails, the sign-ins, a look at the pricing page and the Monday note, before any new trial.',
    },
    {
      kind: 'art',
      caption: 'The hours to keep 20 cards current by hand, with example inputs. Replace each line with your own.',
      art: {
        kind: 'price',
        title: 'Keeping 20 cards current by hand',
        rows: [
          { label: 'Competitors with a card', value: '20' },
          { label: 'Minutes a week for each', value: '30', note: 'Emails, sign-ins, pricing page, Monday note' },
          { label: 'Hours a week', value: '10', note: '20 × 30 ÷ 60' },
          { label: 'Weeks a year', value: '52' },
        ],
        total: { label: 'Hours a year', value: '520', note: '10 hours × 52 weeks' },
      },
    },
    {
      kind: 'p',
      text: 'The same sum gives 260 hours a year for 10 competitors and 130 for 5. Price the hours at your team’s rate, and add the time to start a new trial each time one ends.',
    },

    { kind: 'h2', id: 'limits', text: 'Where keeping it by hand stops' },
    {
      kind: 'p',
      text: 'For 3 to 5 competitors, one person and a sheet keep the cards honest. Beyond that, the method strains:',
    },
    {
      kind: 'list',
      items: [
        '**Trials end.** Seeing next quarter’s offer needs a new trial, and nothing between the two trials is kept.',
        '**One account sees one buyer.** A competitor can show a team admin in the US a different trial from a new user in the UK, and one person’s account sees one of them.',
        '**Screenshots sit in a sheet.** Reps see a change only after someone copies it onto the card.',
        '**Changes wait for Monday.** A discount that starts on a Tuesday reaches the card the next Monday at best, after a week of calls.',
      ],
    },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. For a battlecard, [trial teardown](/recipes/trial-teardown) keeps each competitor’s trial by trial day, from what sign-up asks to the offer on the last day. The terms rule in step 1 applies here too: run a trial only where that competitor’s terms allow it. [Competitor tracking](/recipes/competitor-tracking) keeps every email, offer and signed-in price on 1 dated timeline, for as long as you follow the competitor. Insights asks one question across every competitor you name, such as “what does each one offer on the last day of its trial?”, and answers with a row per company. Section 5 then stays current on every card at once. [Exa’s page for go-to-market (GTM) teams](' +
        EXA_GTM +
        ') offers “Company and people data every GTM team can act on”, with monitors for job posts, funding rounds, leadership changes and product launches. Obsession adds what each competitor sends the people who sign up, and both can feed one card ([Obsession vs Exa](/compare/obsession-vs-exa)).',
    },
    {
      kind: 'p',
      text: 'Start with the cards for the 3 competitors your reps meet most, and put section 5 and the Monday changes on those first. Then compare win rates on competitive deals where reps opened the card with deals where they didn’t, as [Klue suggests](' +
        KLUE_AUTO +
        '). That way you can see it in your win rate against each of those competitors, in battlecard usage and in how fast new reps ramp.',
    },
    {
      kind: 'cta',
      text: 'What each competitor sends its customers, from the welcome email and trial limits to the save offer, each dated with its screenshot, on every card you keep.',
      to: '/#join',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'tools', text: 'Competitive battlecards: the tools compared', compare: true },
    {
      kind: 'p',
      text: 'Each option does a different part of the job. We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026. [Obsession vs Klue](/compare/obsession-vs-klue) sets those two side by side, and [Klue alternatives](/alternatives/klue) and [Crayon alternatives](/alternatives/crayon) cover the wider field.',
    },
    {
      kind: 'p',
      text: 'Klue and Crayon run battlecard programmes well. [Klue’s pricing page](' +
        KLUE_PRICING +
        ') describes curators and product marketing managers keeping battlecards current without leaving the conversation. Its article on automated battlecards describes cards fed by CRM data, call recordings and win-loss interviews. It adds monitoring of competitors’ websites, news, reviews, job posts and pricing pages, with cards delivered in Salesforce, Slack and Klue’s own app. [Crayon](' +
        CRAYON_ENABLE +
        ') puts battlecards inside Salesforce, Slack, Microsoft Teams, Highspot, Seismic, Showpad and SharePoint. Its Sparks research tool can run on a schedule to gather competitor activity, such as pricing updates. Their pages don’t describe signing up to a competitor’s trial or keeping the emails it sends new users. That is the section Obsession fills, beside whichever tool a team runs.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Battlecard tools by the part of the job each does, from each provider’s own pages. Facts checked 11 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'Reps hear about changes from buyers', 'Competitors that rarely change'],
        [
          'By hand: the template, a sheet and an inbox per competitor',
          'Sees what a new customer sees',
          'Free, plus about 30 minutes a week per competitor',
          'Trials end, and changes wait for Monday',
          '3 to 5 competitors',
        ],
        [
          'Templates: HubSpot, Product Marketing Alliance, Klue’s toolkit',
          'A tested structure to fill in',
          'Free\nHubSpot: behind a form\nProduct Marketing Alliance: subscribers',
          'Keeping each line true is left to you',
          'Writing the first cards',
        ],
        [
          'Klue: battlecards, Compete Agent, win-loss',
          'Cards fed by CRM, calls, win-loss and public monitoring',
          '[Not listed](' + KLUE_PRICING + ')\nDemo only',
          'Trials and onboarding emails not described',
          'Running a CI and win-loss programme',
        ],
        [
          'Crayon: Compete Hub, Sparks, Crayon Answers',
          'Cards refreshed by scheduled research, in reps’ tools',
          '[Not listed](' + CRAYON_PRICING + ')\nRequest an estimate',
          'Trials and onboarding emails not described',
          'Sales-led CI with alerts',
        ],
        [
          'Visualping: page change alerts',
          'Alerts when a chosen pricing page changes',
          '[Free: 150 checks a month](' + VISUALPING + ')\n$14 to $350 a month',
          'Pages anyone can open',
          'Watching public pricing pages',
        ],
        [
          'Exa: Search, Contents, Answer, Monitors',
          'Public web and company data, searched in one call',
          '[$10 free credit a month](' + EXA_PRICING + ')\nSearch from $4 to $7 per 1,000 requests',
          'Emails after a sign-up not described',
          'News and public pages for reps and agents',
        ],
        [
          'Obsession (ours): Trial teardown, Competitor tracking, Insights, API and MCP',
          'Trial limits, upgrade prompts, emails and save offers, dated',
          'Early access, onboarding teams now\nPriced per call or per company watched',
          'Every journey stops short of paying',
          'Section 5 on every card',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For section 5, use Obsession: it keeps each competitor’s trial, emails and offers, dated with the screenshot, for every competitor on your list. The facts reach a CI tool over the API, MCP or a webhook, a message sent to your own system the moment a fact lands. To write, store and deliver the cards, use Klue or Crayon, or a template and your CRM. To watch public pricing pages, use Visualping, and for news and public pages, Exa. With 3 to 5 competitors and an hour a week to spare, the template and a sheet do the job.',
    },
    {
      kind: 'p',
      text: 'The other guides for revenue teams cover the same competitors from each role’s side. [Competitor monitoring](/blog/competitor-monitoring) serves competitive intelligence teams, and [competitive intelligence for product marketing](/blog/competitive-intelligence-for-product-marketing) covers launches and positioning. [Win loss analysis](/blog/win-loss-analysis) covers why deals were won or lost. [Sales intelligence from behind the login](/use-cases/sales-intelligence-behind-the-login) shows the same view for every role on a revenue team, with an example for each.',
    },
    {
      kind: 'cta',
      text: 'One real company’s emails, each with the time it arrived and its screenshot, in every format the data comes in.',
      to: '/sample-output',
      label: 'See sample data',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What should a battlecard template include?',
          a: 'A battlecard template should include 12 sections. The first 6 are a header with the owner and last checked date, quick facts, the competitor’s pitch, pricing and packaging, what a new customer gets and what changed this week. The other 6 are where you win, where they win, objections and answers, landmines, proof and talk tracks. Every line carries its date and a link to its source.',
        },
        {
          q: 'What is the difference between a sales battlecard template and a competitor battlecard template?',
          a: 'They usually describe the same card. A sales battlecard is named for who uses it, the rep, and a competitor battlecard for who it is about. Some teams also keep a product battlecard for their own product’s positioning, without a named competitor.',
        },
        {
          q: 'How often should battlecards be updated?',
          a: 'Update pricing and what a new customer gets every week, the arguments every quarter, and any line on the day it changes. In Crayon’s 2026 survey, 83% of teams that update their deliverables at least weekly reported revenue impact, against 49% of teams that update less often.',
        },
        {
          q: 'What are good battlecard examples for software companies?',
          a: 'For an email and SMS platform, a card that shows a competitor’s trial stops at 500 contacts and keeps texts locked until a paid plan. For a help desk vendor, one that shows the AI add-on price appears only inside the competitor’s account. For a loyalty and reviews platform facing a competitor with no trial, one filled from that competitor’s newsletter and pricing page.',
        },
        {
          q: 'Is it legal to sign up for a competitor’s free trial?',
          a: 'It depends on the competitor’s terms and your country. Some terms bar competitors or competitive use, as Salesforce’s main services agreement does for its trials. Read each competitor’s terms first, sign up as yourself and ask a lawyer where they bar it. This is general information, never legal advice.',
          link: { label: 'Is it legal to mystery shop competitors?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
        },
        {
          q: 'How do you measure whether a battlecard works?',
          a: 'Compare win rates on competitive deals where reps opened the card with deals where they didn’t, and track battlecard usage and how fast new reps ramp. Look at each competitor separately, because a card can work against one and not another.',
          link: { label: 'Win loss analysis for sales leaders', to: '/blog/win-loss-analysis' },
        },
        {
          q: 'Do Klue and Crayon show what a competitor sends its trial users?',
          a: 'Their pages don’t describe it. Klue describes cards fed by CRM data, calls, win-loss interviews and public monitoring, and Crayon describes monitoring and scheduled research such as pricing updates. Obsession keeps what each competitor shows the people who sign up, dated, and its facts can feed the cards either tool holds.',
          link: { label: 'Obsession vs Klue', to: '/compare/obsession-vs-klue' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'Facts checked 11 November 2026',
      text: 'Every fact about Klue, Crayon, HubSpot, the Product Marketing Alliance, Visualping, Exa and Salesforce comes from their own pages as of 11 November 2026. Crayon’s survey doesn’t publish its sample size. Kestrel Mail, Tidewell and Brightpoint are invented, as are their trials, prices and offers. Trial terms differ by company and country; this is general information, never legal advice.',
    },
  ],

  sources: [
    { title: 'Automated battlecards that keep your sales team always competitive', publisher: 'Klue (Adam McQueen)', url: KLUE_AUTO, date: '2026-03-03' },
    { title: 'State of Competitive Intelligence, 9th edition', publisher: 'Crayon', url: CRAYON_STATE, date: '2026' },
    { title: '3 free sales battle card templates', publisher: 'HubSpot', url: HUBSPOT },
    { title: 'Sales battlecard template', publisher: 'Product Marketing Alliance', url: PMA, date: '2023-05-14' },
    { title: 'Sales battlecards 101: guide and battlecard templates', publisher: 'Klue', url: KLUE_101, date: '2026-04-01' },
    { title: 'Exa: the world’s data for AI agents', publisher: 'Exa', url: EXA },
    { title: 'Main Services Agreement', publisher: 'Salesforce', url: SALESFORCE, date: '2026-10-15' },
    { title: 'Company data API and CRM enrichment for GTM teams', publisher: 'Exa', url: EXA_GTM },
    { title: 'Pricing', publisher: 'Klue', url: KLUE_PRICING },
    { title: 'Distribute competitive insights and enable sales', publisher: 'Crayon', url: CRAYON_ENABLE },
    { title: 'Pricing', publisher: 'Crayon', url: CRAYON_PRICING },
    { title: 'Pricing', publisher: 'Visualping', url: VISUALPING },
    { title: 'Pricing', publisher: 'Exa', url: EXA_PRICING },
  ],

  related: [
    'competitor-monitoring',
    'competitive-intelligence-for-product-marketing',
    'win-loss-analysis',
    'recipe:trial-teardown',
    'recipe:competitor-tracking',
    '/sales',
    '/glossary/battlecard',
    '/compare/obsession-vs-klue',
  ],
}
