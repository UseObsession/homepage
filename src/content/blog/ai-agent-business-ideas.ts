import type { BlogPost } from './types'

/* Track 1, guide A1 (_research/seo/agent-search-23nov/PLAN.md; 23 Nov 2026). Primary "ai agent business ideas";
   secondaries from Google suggestions (US and UK, 23 Nov 2026, autocomplete_23nov_ideas.json). Readers: founders,
   freelancers and small business owners looking for something to build or run on agents. Spine: the answer, what makes
   an idea work, how the run cost is worked, 30 ideas in five groups (each a table: who pays for the job today, what the
   agents do, the run cost per customer from the list rates, and the total at 10 and at 10,000 customers), how it grows,
   what goes wrong, how to start, FAQ, note and sources.
   Prices read on 23 Nov 2026, each on its own page: Smith.ai pricing (Starter $300 a month for 30 calls, $11.50 each
   over); AppointmentReminders.com pricing (Personal $34.95 for 400 reminders; Small Business $69.95 for 900, 7.7 cents
   each over); Tenderbase pricing (GBP 25 to 55 a month, daily tender alerts); AirHelp's fees page (updated 9 Nov 2026:
   Service Fee 35% of the flight compensation, including VAT); FCC 24-17 (8 Feb 2024). Obsession's list rates are from
   src/lib/pricing/pricing.json, read 23 Nov: inbox $0.50 a month, emails $0.40 per 1,000, a US or UK number $2 a month,
   texts $0.015, calls $0.012 a minute, browser $0.10 an hour, sandbox $0.12 an active vCPU hour, events $5 per million,
   US texting registration $25 once and $17 a month per campaign (counts toward a plan’s covered usage; one campaign per business that texts), waiting persona free but its number and inbox bill. Every sum was worked
   in a script from the monthly volumes written in each row's cost cell; the event log (under a cent at these volumes)
   and model tokens are left out. The monthly volumes are example inputs, not measured runs. Every business named in the
   pictures is invented. British English, no dashes. */

const SMITH = 'https://smith.ai/pricing'
const APPT = 'https://www.appointmentreminders.com/pricing'
const TENDER = 'https://tenderbase.co.uk/pricing'
const AIRHELP = 'https://www.airhelp.com/en-int/our-fees'
const FCC_24_17 = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'

const COLS = ['Idea and customer', 'Who pays for the job today', 'What the agents do', 'Run cost per customer a month', '10 customers / 10,000']

export const post: BlogPost = {
  slug: 'ai-agent-business-ideas',
  title: 'AI agent business ideas: 30 services agents can run, and what each costs to run',
  dek: 'Each idea is a job people do today on the phone, in an inbox or in a website, now done by agents with their own number, inbox and browser. Each shows who pays for the job today, and what it costs to run per customer at list rates.',
  metaTitle: 'AI agent business ideas: 30 services that agents can run',
  description:
    'AI agent business ideas for founders and freelancers: 30 services agents can run, with what each job costs today and what it costs to run per customer.',
  answer:
    'The AI agent business ideas worth building are services that used to need people on the phone, in inboxes and in portals, such as missed-call text back, tender watching and claims chasing. Thirty are listed, each with who pays for the job today and what it costs to run per customer. On Obsession, every agent has its own phone number, inbox and browser.',
  primaryKeyword: 'ai agent business ideas',
  keywords: [
    'top ai agent business ideas',
    'ai agent startup ideas',
    'business ideas with ai agents',
    'ai agent ideas to make money',
  ],
  category: 'Build agent products',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 10,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'Missed-call desk, five trades',
      period: 'One month at list rates, one number and inbox each',
      cols: ['Missed calls', 'Texts sent', 'Run cost'],
      rows: [
        { name: 'Harbour Plumbing', cells: ['20', '40', '$3.14'], tone: 'ok' },
        { name: 'Elm Electrical', cells: ['30', '60', '$3.44'], tone: 'ok' },
        { name: 'Kestrel Roofing', cells: ['45', '90', '$3.89'], tone: 'ok' },
        { name: 'Marsh Heating', cells: ['60', '120', '$4.34'], tone: 'ok' },
        { name: 'Linden Locksmiths', cells: ['90', '180', '$5.24'], tone: 'info' },
      ],
      notes: [
        'Each business has its own number, and every text goes out from it in the business’s name.',
        'US texting registration, $17 a month per campaign, is added for each business that texts and counts toward a plan’s covered usage.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'The AI agent business ideas that hold up are services people already pay for, where the work is calls, emails and website forms. An agent with its own phone number, inbox and browser can do that work every day for hundreds of customers. These 30 ideas are for founders, freelancers and small business owners. Each shows who pays for the job today and what it costs to run per customer.',
    },

    { kind: 'h2', id: 'what-works', text: 'What makes an agent business idea work' },
    {
      kind: 'p',
      text: 'Three tests separate a service an agent can run from a demo. An idea that passes all three has a customer who already pays, a job that repeats and a running cost well under the price.',
    },
    {
      kind: 'list',
      items: [
        '**A person does it today** by phone, by email or inside a website, and customers or staff already pay for that time.',
        '**It repeats** every day or every week, so each customer needs the agent again and again.',
        '**One customer’s job is small:** a few hundred texts, a few hours in a browser, a handful of calls.',
      ],
    },
    {
      kind: 'p',
      text: 'Every idea here keeps to the [rules every Obsession agent follows](/agents). The agent says it’s an AI to anyone it speaks to. It texts and calls only people who gave the business their number. It signs in only with logins the customer provides, and it stops at any identity check and before payment unless it’s given the customer’s card. Ideas that need an agent to apply for jobs in bulk, grab appointment slots, resell tickets or write reviews break those rules, so none appear.',
    },

    { kind: 'h2', id: 'cost', text: 'How the run cost is worked' },
    {
      kind: 'p',
      text: 'Each idea’s run cost is the usage one customer causes in a month, at Obsession’s list rates on 23 November 2026. An inbox is $0.50 a month and a US or UK phone number $2 a month. Emails cost $0.40 per 1,000, texts $0.015 each, calls $0.012 a minute and browser time $0.10 an hour. A sandbox, where an agent runs code, is $0.12 per active vCPU hour. A persona that is waiting costs nothing, though its number and inbox still bill monthly.',
    },
    {
      kind: 'art',
      art: {
        kind: 'price',
        title: 'One missed-call desk, one month',
        rows: [
          { label: 'Number', value: '$2.00', note: 'one US number' },
          { label: '60 texts', value: '$0.90', note: '$0.015 each' },
          { label: 'Inbox', value: '$0.50', note: 'one inbox' },
          { label: '100 emails', value: '$0.04', note: '$0.40 per 1,000' },
        ],
        total: { label: 'Run cost per customer', value: '$3.44', note: 'plus $17 a month US texting registration' },
      },
      caption: 'The sum behind idea 1, worked from the list rates. The volumes are example inputs: 60 texts and 100 emails a month for one trade business.',
    },
    {
      kind: 'p',
      text: 'The sums leave out model tokens, which start at $0.975 per million input tokens, and the event log, which at $5 per million events adds under a cent at these volumes. Your own volumes will differ, so change the numbers in each cost cell and redo the sum.',
    },
    {
      kind: 'p',
      text: 'Every texting idea here costs less to run than its $17 a month US texting registration. US carriers require that registration before a business sends texts, and each business that texts needs its own campaign, so price it in first. Most ideas that work in a browser cost under $5 a month per customer, because browser time is $0.10 an hour.',
    },

    { kind: 'h2', id: 'local', text: '1 to 6: local services' },
    {
      kind: 'p',
      text: 'Local businesses lose money on calls nobody answers and bookings nobody confirms. Each idea below gives the business’s customers one agent, on a number and inbox of its own, and works while the owner is on a job. An agency can run the same six for many businesses under its own brand.',
    },
    {
      kind: 'table',
      caption:
        'Ideas 1 to 6. Prices as listed on 23 November 2026. Volumes are example inputs for one customer a month. Texting ideas also need a US registration at $17 a month for each business that texts, and it counts toward a plan’s covered usage',
      cols: COLS,
      rows: [
        [
          '1. Missed-call text back for trades',
          `Answering service: [Smith.ai](${SMITH}) $300 a month for 30 calls, $11.50 each over`,
          'Texts every missed caller within seconds, answers from the price list and books a visit',
          '$3.44\nnumber $2, 60 texts $0.90, inbox $0.50, 100 emails $0.04',
          '$34 / $34,400',
        ],
        [
          '2. Reminder and no-show desk for clinics and salons',
          `[AppointmentReminders.com](${APPT}) $69.95 a month, 7.7 cents a reminder over the plan`,
          'Texts a reminder, calls people who agreed to calls, offers a new time to every no-show',
          '$9.66\nnumber $2, 400 texts $6, 90 call minutes $1.08, inbox $0.50, 200 emails $0.08',
          '$97 / $96,600',
        ],
        [
          '3. Rental enquiry desk for landlords',
          'A person on the leasing desk answers each enquiry by hand',
          'Answers every listing enquiry by text and email, books viewings and keeps the thread',
          '$7.78\nnumber $2, 300 texts $4.50, 20 calls of 3 minutes $0.72, inbox $0.50, 150 emails $0.06',
          '$78 / $77,800',
        ],
        [
          '4. Quote chaser for builders and decorators',
          'The tradesperson chases quotes in spare time, or not at all',
          'Follows up each quote at day 3 and day 7 by text and email, and logs who replied',
          '$6.15\nnumber $2, 240 texts $3.60, inbox $0.50, 120 emails $0.05',
          '$61 / $61,480',
        ],
        [
          '5. Recall desk for vets and dentists',
          `Front-desk staff, or reminder plans from [$34.95 a month](${APPT})`,
          'Texts everyone due a check-up, calls people who agreed to calls and books the slot',
          '$8.08\nnumber $2, 300 texts $4.50, 80 call minutes $0.96, inbox $0.50, 300 emails $0.12',
          '$81 / $80,800',
        ],
        [
          '6. Phone orders and bookings for takeaways',
          'Staff on the phone at the busiest hour of the night',
          'Answers calls the kitchen can’t take, confirms the order or table by text',
          '$14.20\nnumber $2, 600 call minutes $7.20, 300 texts $4.50, inbox $0.50',
          '$142 / $142,000',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'The blueprints [Missed call text back](/blueprints/missed-call-text-back), [Appointment reminders](/blueprints/appointment-reminders) and [Speed-to-lead callback](/blueprints/speed-to-lead-callback) already run similar jobs for a business, without code. [How to build an AI receptionist](/blog/how-to-build-an-ai-receptionist) covers idea 6 step by step.',
    },

    { kind: 'h2', id: 'ecommerce', text: '7 to 12: online stores' },
    {
      kind: 'p',
      text: 'Small online stores spend their week on parcels, returns, suppliers and disputes. Most of it happens in carrier and supplier websites, where the store holds a login, so an agent signed in with that login can do the checking every morning.',
    },
    {
      kind: 'table',
      caption: 'Ideas 7 to 12. Volumes are example inputs for one store a month. The agent signs in only with logins the store provides',
      cols: COLS,
      rows: [
        [
          '7. Stuck-parcel chaser',
          'Staff check parcel tracking in each carrier’s website by hand',
          'Checks tracking daily, finds parcels with no movement and emails the customer before they ask',
          '$2.66\n20 browser hours $2, 400 emails $0.16, inbox $0.50',
          '$27 / $26,600',
        ],
        [
          '8. Returns desk',
          'A person answers each return request and books the label',
          'Reads return requests by email, checks the policy, books the carrier label and replies',
          '$1.62\n10 browser hours $1, 300 emails $0.12, inbox $0.50',
          '$16 / $16,200',
        ],
        [
          '9. Supplier backorder chaser',
          'The buyer chases each late order by email and phone',
          'Emails and calls suppliers for delivery dates, says it’s an AI and updates the store’s sheet',
          '$3.54\nnumber $2, 80 call minutes $0.96, 200 emails $0.08, inbox $0.50',
          '$35 / $35,400',
        ],
        [
          '10. Wholesale enquiry desk',
          'A sales person answers each trade enquiry',
          'Replies to every wholesale enquiry with the line sheet and terms, then books a call',
          '$3.52\nnumber $2, 75 call minutes $0.90, 300 emails $0.12, inbox $0.50',
          '$35 / $35,200',
        ],
        [
          '11. Supplier portal stock sync',
          'Someone downloads a stock file from each supplier portal',
          'Signs in to each portal, downloads the file and turns it into one stock sheet',
          '$4.20\n25 browser hours $2.50, 10 sandbox hours $1.20, inbox $0.50',
          '$42 / $42,000',
        ],
        [
          '12. Chargeback evidence desk',
          'Staff collect delivery proof for each dispute',
          'Pulls delivery proof from the carrier’s website and emails the evidence pack for each dispute',
          '$1.17\n25 disputes at 15 minutes each, 6.25 browser hours $0.63, 100 emails $0.04, inbox $0.50',
          '$12 / $11,650',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'The [Supplier reorder agent](/blueprints/supplier-reorder-agent) and [Inbox agent](/blueprints/inbox-agent) run versions of ideas 8 to 10. [AI agents in ecommerce](/blog/agentic-ai-use-cases-in-ecommerce) covers the shopper’s side.',
    },

    { kind: 'h2', id: 'b2b', text: '13 to 18: B2B and back office' },
    {
      kind: 'p',
      text: 'Accountants, clinics and brokers lose hours to chasing: a missing invoice, a missing form, a status that sits in someone else’s portal. These jobs are dull for a person and the agent doesn’t tire of them. One idea here shares its cost across customers, which the next section explains.',
    },
    {
      kind: 'table',
      caption:
        'Ideas 13 to 18. Prices as listed on 23 November 2026. Idea 16 shares one sweep across all customers, so its cost is a $30 base plus $0.51 a customer. Idea 15 handles patient information: check the privacy rules that apply to you',
      cols: COLS,
      rows: [
        [
          '13. Invoice collector for bookkeepers',
          'Bookkeeping staff download invoices from each vendor’s portal',
          'Signs in to every vendor portal each week and files each invoice with the client’s name',
          '$1.32\n8 browser hours $0.80, 60 emails $0.02, inbox $0.50',
          '$13 / $13,240',
        ],
        [
          '14. Document chaser for immigration and accounting firms',
          'Staff text and email clients for missing papers until they arrive',
          'Reminds each client by text and email, lists what is still missing and stops when it all arrives',
          '$11.74 for a firm of 150 clients\nnumber $2, 600 texts $9, 600 emails $0.24, inbox $0.50',
          '$117 / $117,400',
        ],
        [
          '15. Prior authorization status for clinics',
          'Clinic staff check payer portals and wait on hold',
          'Checks each request’s status in the payer’s portal and calls the payer when a status is stuck',
          '$9.38\n40 browser hours $4, 240 call minutes $2.88, number $2, inbox $0.50',
          '$94 / $93,800',
        ],
        [
          '16. Tender and grant watch',
          `[Tenderbase](${TENDER}) £25 to £55 a month for daily tender alerts`,
          'Checks 300 public tender and grant portals every morning and sends each client only the notices that fit',
          '$0.51 a client, plus the shared sweep\n300 portals at 2 minutes a day is 300 browser hours $30, then inbox $0.50 and 30 emails $0.01 per client',
          '$35 / $5,150',
        ],
        [
          '17. Quote collection for small firms',
          'An owner fills in the same form on each comparison site',
          'Fills the same request on 20 sites up to any identity check and returns one table of quotes',
          '$0.68 a request\n100 minutes in a browser $0.17, 40 emails $0.02, inbox $0.50',
          '$7 / $6,827',
        ],
        [
          '18. Load tracking for small freight brokers',
          'Dispatchers check each carrier’s portal by hand',
          'Checks every load in carrier portals four times a day and texts drivers and shippers',
          '$11.00\n40 browser hours $4, 300 texts $4.50, number $2, inbox $0.50',
          '$110 / $110,000',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'The blueprints [Document chaser](/blueprints/document-chaser), [Invoice collector](/blueprints/invoice-collector), [Prior authorization status](/blueprints/prior-authorization-status) and [Load tracking](/blueprints/load-tracking) run ideas 13 to 15 and 18 today. For idea 16, tender portals publish new notices every day, and a subscription alert service is the price a client already accepts.',
    },

    { kind: 'h2', id: 'consumer', text: '19 to 24: concierge services for people' },
    {
      kind: 'p',
      text: 'Individuals and families have the same chores: bills, refunds, moves, school emails. Each customer is small, so the run cost is cents to a couple of dollars. A concierge works with the customer’s own logins and consent, and says it’s an AI when it calls.',
    },
    {
      kind: 'table',
      caption:
        'Ideas 19 to 24. Prices as listed on 23 November 2026. The agent uses only logins the customer provides and stops before any payment unless it’s given the customer’s card',
      cols: COLS,
      rows: [
        [
          '19. Subscription and bill checker',
          'People read their own statements, now and then',
          'Lists every subscription from the customer’s emails, flags what they no longer use and cancels it on their say-so',
          '$0.66\n1.5 browser hours $0.15, 20 emails $0.01, inbox $0.50',
          '$7 / $6,580',
        ],
        [
          '20. Refund and warranty claims',
          `[AirHelp](${AIRHELP}) takes 35% of the flight compensation, including VAT, on a successful claim`,
          'Files the claim in the retailer’s or airline’s website, chases it by email and keeps every reply',
          '$0.71\n2 browser hours $0.20, 30 emails $0.01, inbox $0.50',
          '$7 / $7,120',
        ],
        [
          '21. Move-house admin',
          'The family, over several weekends',
          'Changes the address with each utility, bank and council, by website or call, and keeps a checklist',
          '$2.04 a move\n8 browser hours $0.80, 60 call minutes $0.72, 40 emails $0.02, inbox $0.50',
          '$20 / $20,360',
        ],
        [
          '22. Receipt and warranty vault',
          'A shoebox, a folder or nothing',
          'Files every receipt that reaches the customer’s inbox, notes the warranty end date and warns before it ends',
          '$0.52\ninbox $0.50, 50 emails $0.02',
          '$5 / $5,200',
        ],
        [
          '23. School and club admin for parents',
          'Parents read every email and portal themselves',
          'Reads the school’s and clubs’ emails and portals and sends one weekly list of dates and forms',
          '$1.52\n10 browser hours $1, inbox $0.50, 40 emails $0.02',
          '$15 / $15,160',
        ],
        [
          '24. Trip admin',
          'A travel agent’s planning time, or hours of searching',
          'Searches flights and hotels inside a budget, calls to confirm special requests and emails the options',
          '$1.35 a trip\n6 browser hours $0.60, 20 call minutes $0.24, 30 emails $0.01, inbox $0.50',
          '$14 / $13,520',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'The [Travel booking agent](/blueprints/travel-booking-agent) and [iMessage assistant](/blueprints/imessage-assistant) blueprints run similar jobs for a team that wants them inside its own product.',
    },

    { kind: 'h2', id: 'data', text: '25 to 30: data and watch services' },
    {
      kind: 'p',
      text: 'The last group sells what the agents find, not what they do for one customer. The agents do the sweep once and every customer reads the result, so the cost grows far more slowly than the customer list. These suit a person who knows one industry well.',
    },
    {
      kind: 'table',
      caption:
        'Ideas 25 to 30. Ideas 25, 26 and 30 share one sweep across all customers. Their cost is a base plus a small amount per customer, and the last column shows the monthly total at each size',
      cols: COLS,
      rows: [
        [
          '25. Competitor newsletter digest for one niche',
          'Analysts subscribe to competitors’ newsletters and read them',
          'Signs up to 200 brands from 20 inboxes, reads every email and sends a weekly digest to subscribers',
          '$13.12 a niche, plus $0.0016 a subscriber\n20 inboxes $10, 1,600 emails $0.64, 20 browser hours $2, 4 sandbox hours $0.48',
          '$13 / $29',
        ],
        [
          '26. Wholesale price tracker',
          'Buyers check supplier websites by hand each week',
          'Reads 100 supplier price lists every day and sends each client the changes for their products',
          '$0.50 a client, plus a $16.20 shared sweep\n150 browser hours $15, 10 sandbox hours $1.20, inbox $0.50 per client',
          '$21 / $5,016',
        ],
        [
          '27. Franchise lead-response audit',
          'A mystery-shopping firm sends people to ask',
          'Enquires at 500 locations as a customer, says it’s an AI, has the franchisor’s say-so and reports which never replied',
          '$6.37 an audit of 500 locations\n16.7 browser hours $1.67, 5 inboxes $2.50, 500 emails $0.20, number $2',
          '$64 / $63,667',
        ],
        [
          '28. Supplier price checks for restaurants and clinics',
          'The owner or office manager compares invoices',
          'Reads each supplier’s portal weekly with the client’s login and flags every price rise',
          '$1.30\n8 browser hours $0.80, inbox $0.50',
          '$13 / $13,000',
        ],
        [
          '29. Listings check for local businesses',
          'Nobody checks until a customer complains',
          'Checks the business’s hours, phone and address on each major listing and emails what is wrong',
          '$1.30\n8 browser hours $0.80, inbox $0.50',
          '$13 / $13,000',
        ],
        [
          '30. Product recall watch for retailers',
          'A compliance person reads regulators’ recall pages',
          'Reads regulators’ recall pages daily and emails a retailer when a notice matches its catalogue',
          '$0.51 a retailer, plus a $0.25 shared sweep\n2.5 browser hours $0.25, inbox $0.50 and 30 emails $0.01 per retailer',
          '$5 / $5,120',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Idea 27 is a version of the [Lead response checks](/blueprints/lead-leaks) blueprint, and [Listings and AI answers](/blueprints/listings-ai-answers) runs idea 29.',
    },

    { kind: 'h2', id: 'grow', text: 'From 10 customers to 10,000' },
    {
      kind: 'p',
      text: 'Costs grow in three ways, and the last column of each table shows which. For ideas 1 to 15, 17 to 24 and 27 to 29, usage rises in step with customers: ten times the customers, ten times the cost. Ten of these cost $5 to $142 a month at list rates, and 10,000 cost $5,200 to $142,000.',
    },
    {
      kind: 'p',
      text: 'The shared sweeps grow far slower. Idea 16 costs $35 a month for 10 clients and $5,150 for 10,000, because the 300 portals are read once whoever is subscribed. Idea 25 costs $13 for 10 subscribers and $29 for 10,000, since the sweep is the same and each extra digest email is a fraction of a cent. These are the ideas where a growing list changes the economics most.',
    },
    {
      kind: 'p',
      text: 'The third cost is fixed. Each texting campaign needs a US registration, $25 once and then $17 a month, each business that texts needs its own campaign, and it counts toward a plan’s covered usage without shrinking with volume. [10DLC registration](/blog/10dlc-registration) explains what carriers require and why.',
    },
    {
      kind: 'p',
      text: 'A paid plan’s fee covers that much usage at list rates: Developer $20, Startup $99 and Scale $499 a month, with Enterprise from $1,500 a month. Ten customers of most ideas here fit inside Startup or Scale. At 10,000 customers, usage sits in Enterprise, from $1,500 a month.',
    },

    { kind: 'h2', id: 'wrong', text: 'What goes wrong, and how to plan for it' },
    {
      kind: 'list',
      items: [
        '**Texting without consent.** The FCC’s [February 2024 ruling](' + FCC_24_17 + ') puts AI-generated voices under the US Telephone Consumer Protection Act, so each call needs the person’s prior express consent. Text and call only customers who gave the business their number.',
        '**A website changes.** A carrier or supplier portal can change its layout or ask for a new code. Give the agent its own inbox and number, so sign-in codes reach it, and read the event log each morning for the first month.',
        '**An identity check or a bot block.** The agent stops there and hands over. Choose ideas where that’s rare, and never promise a customer it will get through.',
        '**A customer’s login terms.** Some websites limit automated sign-in. Read the terms of each portal before selling a job that uses it, and sell only jobs the customer is allowed to do on their own account.',
        '**Health and money.** Ideas 5, 15 and 17 touch patient information or quotes. Check the privacy and licensing rules for your country with an adviser before you start.',
      ],
    },

    { kind: 'h2', id: 'platform', text: 'One agent, one identity, every piece these 30 ideas need' },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. All 30 ideas are built from the same few pieces, so what you set up for idea 1 carries into idea 2 and idea 3.',
    },
    {
      kind: 'list',
      items: [
        '**Inbox:** a real email address the agent owns. It sends and receives, keeps each thread and calls your webhook, a message to your own system, on every new email. Ideas 3, 4, 8, 10 and 13 work mostly here.',
        '**Phone number:** a US or UK number the agent owns. It sends and receives texts, makes and takes calls and receives sign-in codes, and texts go out from the agent’s number in the business’s name. Ideas 1 to 6, 9 and 14 run on it.',
        '**Browser:** a cloud browser whose sessions keep their logins between runs, so the agent signs in once with the logins you give it and stays signed in. Ideas 7, 11, 12, 13, 15 to 17 and 26 to 30 depend on it.',
        '**Sandbox:** a computer started only when a task needs to run code, such as turning a supplier’s file into one stock sheet in ideas 11 and 26.',
        '**Messaging:** iMessage, WhatsApp, Slack and Telegram from the same identity, for customers who answer there instead of by text.',
      ],
    },
    {
      kind: 'p',
      text: 'A persona puts the pieces under one identity: one name, one address, one number and one browser profile. A sign-in code that arrives by text reaches the same agent whose browser is waiting at the login page, as in ideas 11 and 15. A customer who emails and then calls reaches the same agent with the whole history, as in idea 3. A waiting persona costs nothing, though its number ($2) and inbox ($0.50) bill monthly, and it answers a new message in about 50 ms without starting a machine.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page lands in one event log, dated, with the email, screenshot or recording behind it. Results reach Slack, email, a CRM, a sheet, Clay, a PDF report or a Claude agent. If you sell one of these services, the log is the weekly proof of what the agent did for each client.',
    },
    {
      kind: 'p',
      text: 'The usual way to build these is four vendors: an email API, a phone and texting API, a cloud browser and a sandbox, each with its own key, bill, webhook and log. That is four integrations to keep working, and the seams are where jobs break: the sign-in code lands at one vendor while the browser waits at another, and the call log and the email thread sit in different places. When an idea needs only one piece, a single specialist can be enough. [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) sets them side by side, and [the four layers of an AI agent’s toolkit](/blog/ai-agent-infrastructure-stack) explains how they fit.',
    },
    {
      kind: 'p',
      text: 'There are two ways to run it. With no code, pick a blueprint, or describe the job in your own words and Obsession sets it up and spins up the agent. Developers use the API, the SDKs or MCP: obsession.personas.create({ inbox: true, phone: "US" }) makes the persona, and each email.received event reaches your handler about 50 ms after it lands. Start with one agent, or run ten thousand, each with its own identity and paid for by what each one uses.',
    },
    {
      kind: 'p',
      text: 'Once an agent has its own number, inbox and browser, the next idea is often a small step. The same persona could also:',
    },
    {
      kind: 'list',
      items: [
        'Turn a missed-call desk into a quote chaser by following up each quote it booked (ideas 1 and 4).',
        'Let a returns desk reorder from the supplier when stock drops, with the supplier portal login it already holds (ideas 8 and 11).',
        'Add a tender watch to an accountant’s document chaser, so each client hears about notices that fit them (ideas 14 and 16).',
      ],
    },

    { kind: 'h2', id: 'start', text: 'How to start with one idea' },
    {
      kind: 'p',
      text: 'Pick the idea whose customer you can already name. Run it for one business, free or at cost, for a month, then read what the event log shows: which texts were answered, which portals failed and how many minutes it used.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Choose one customer and one job.** Write the job as you would brief a new employee.',
        '**Start on the Free plan.** It includes 3 inboxes and a number that receives up to 50 texts and 30 call minutes a month and sends none, so test the email and portal side first, then move to a paid plan to text.',
        '**Run a matching blueprint** if one exists, or describe the job in plain words and let Obsession set it up.',
        '**Work out the sum** with your own volumes and check it against what the customer pays today.',
        '**Add customers one at a time** and keep each on its own number and inbox, so every message stays traceable.',
      ],
    },
    {
      kind: 'cta',
      text: 'Describe the job in your own words. Obsession sets it up and spins up an agent with its own number, inbox and browser to run it for one customer or ten thousand.',
      to: '/no-code',
      label: 'Start free',
    },
    {
      kind: 'cta',
      text: 'Pick a blueprint for your first idea, or run blueprints for every client under your own brand.',
      to: '/blueprints',
      label: 'Browse blueprints',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about AI agent business ideas' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are the best AI agent business ideas?',
          a: 'The best ones are services customers already pay a person for, where the work is calls, emails or website forms and repeats every week. Missed-call text back, appointment reminders, document chasing and tender watching all fit, because each customer’s job costs a few dollars a month to run.',
        },
        {
          q: 'Can you make money with AI agents?',
          a: 'Some jobs are paid for today: on 23 November 2026, Smith.ai listed an answering service from $300 a month, and AirHelp takes 35% of a successful flight claim. Run costs per customer are in the tables above, and the sum against what customers pay is yours to do. Nothing here promises income.',
        },
        {
          q: 'Do I need to code to start an AI agent business?',
          a: 'No. Pick a blueprint, a ready-made job Obsession runs, or describe your own job in plain words and Obsession sets it up and runs an agent for it. Developers can build the same jobs with the API.',
          link: { label: 'Describe your own job', to: '/no-code' },
        },
        {
          q: 'How much does it cost to run an AI agent for a customer?',
          a: 'Across the 30 ideas here, usage ran from about $0.50 to $14.20 per customer a month at Obsession’s list rates on 23 November 2026, before model tokens. US texting adds a $17 a month registration for each business that texts, which counts toward a plan’s covered usage.',
          link: { label: 'See every rate', to: '/pricing' },
        },
        {
          q: 'Which AI agent business ideas should I avoid?',
          a: 'Avoid any idea that needs the agent to beat a bot check or an identity check, apply for jobs in bulk, take appointment slots, resell tickets or post reviews. Obsession’s agents stop at those, and so does this list.',
          link: { label: 'What every agent keeps to', to: '/agents' },
        },
        {
          q: 'How do I sell an AI agent service to businesses?',
          a: 'Offer one finished job with one outcome, such as every missed call texted back in seconds, and price it against what the business pays today. You can run the job for each client under your own brand, with each result in a dashboard and report that carry your name.',
          link: { label: 'Run blueprints under your brand', to: '/agencies' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the sources',
      text: 'Prices are from each provider’s own page as read on 23 November 2026 (AirHelp’s page is dated 9 November 2026) and change often. The run costs are worked from Obsession’s published list rates with example volumes, and exclude model tokens and taxes. The calling and texting point is general information, not legal advice, and differs by country and state.',
    },
  ],

  sources: [
    { title: 'Smith.ai pricing', publisher: 'Smith.ai', url: SMITH },
    { title: 'Appointment reminder pricing', publisher: 'AppointmentReminders.com', url: APPT },
    { title: 'Tender alerts pricing', publisher: 'Tenderbase', url: TENDER },
    { title: 'How does AirHelp’s fee work?', publisher: 'AirHelp', url: AIRHELP, date: '2026-11-09' },
    { title: 'Declaratory Ruling FCC 24-17: AI technologies and unwanted robocalls', publisher: 'Federal Communications Commission', url: FCC_24_17, date: '2024-02-08' },
  ],

  related: [
    '/no-code',
    'recipe:missed-call-text-back',
    'recipe:appointment-reminders',
    'recipe:document-chaser',
    'how-to-build-an-ai-receptionist',
    'ai-voice-agent-for-small-business',
  ],
}
