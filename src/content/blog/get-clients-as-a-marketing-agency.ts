import type { BlogPost } from './types'

/* Guide C of 29 Oct 2026, from _research/seo/plan/next-29oct/BRIEF.md and PLAN.md (Seun's go).
   An ecommerce agency wins clients by opening each pitch with one finding from the brand's own store.
   Primary phrase from Google autocomplete, US and UK, 29 Oct 2026.
   Read at source on 29 Oct 2026: the Agency Core 2026 PDF, the Forbes Agency Council piece of 8 May 2026 and OpenAI's
   help page on the cloud browser. Our own figures are the October pilot for 4 agencies and the 26 Oct walk, as patterns, anonymised.
   No agency, store or person we worked with is named. The examples are invented, at .example addresses. */

const AMI = 'https://agencymanagementinstitute.com/wp-content/uploads/2026/05/Agency-Core-2026_Executive-Summary.pdf'
const FORBES =
  'https://www.forbes.com/councils/forbesagencycouncil/2026/05/08/outside-in-marketing-audits-see-your-brand-like-your-customers-do/'
const CLOUD_BROWSER = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'

export const post: BlogPost = {
  slug: 'get-clients-as-a-marketing-agency',
  title: 'How to get clients as a marketing agency: win ecommerce brands with proof',
  dek: 'An agency can become a customer of every brand it wants to win and open each pitch with one finding the brand can check in its own inbox. The same checks then keep the client after the win.',
  metaTitle: 'How to get clients as a marketing agency: win with proof',
  description:
    'How to get clients as a marketing agency: become a customer of each ecommerce brand you pitch, then open with one finding, its time and a screenshot.',
  answer:
    'To get clients as a marketing agency, become a customer of each ecommerce brand you pitch and open with one finding from its store, with its time and a screenshot. A finding the brand can check in its own inbox, such as a welcome code that never arrived, sets the pitch apart from every agency promising growth. To do it at 300, 1,000 or 5,000 brands a month, use Obsession: its AI customers become each brand’s customer and report at the hours the agency chooses, 4, 12, 24 or 48, or for as long as it wants to keep watching.',
  primaryKeyword: 'how to get clients as a marketing agency',
  keywords: [
    'how to get clients as a creative agency',
    'agency prospecting',
    'prospecting process',
    'how to win ecommerce clients',
    'outside-in audit',
  ],
  category: 'For agencies',
  published: '2026-10-29',
  updated: '2026-10-29',
  readingMinutes: 16,
  order: 0,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'flow',
      title: 'kinlochstudio.example',
      status: { tone: 'ok', text: 'Each pitch its own' },
      steps: [
        { label: 'Pick', detail: '300 brands with a reason to buy now', tone: 'info' },
        { label: 'Shop', detail: 'An AI customer for each job: sign-up, basket, checkout', tone: 'ok' },
        { label: 'Read', detail: 'At 4, 12, 24 or 48 hours: what each store sent', tone: 'ok' },
        { label: 'Pitch', detail: 'Each proposal opens with that brand’s finding', tone: 'ok' },
      ],
      foot: 'An example on an invented agency. Read each brand at the hour that suits the pitch, and the same AI customers keep checking the brands that sign.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Founders and new-business leads at ecommerce agencies can open every pitch with something the brand has never seen: what its own store sends a new customer. Retention, CRO (conversion rate optimisation), performance, Shopify Plus, paid social and creative agencies run the same workflow. They become a customer, wait for what arrives and lead with one finding.',
    },
    {
      kind: 'p',
      text: 'Finding new clients is the problem agency leaders name most. In [Agency Management Institute’s Agency Core 2026 report](' +
        AMI +
        '), 67% of 415 agency leaders called prospect pipeline a pressing challenge, the top answer for the third year running.',
    },
    {
      kind: 'stat',
      value: '67%',
      label: 'of 415 agency leaders called prospect pipeline a pressing challenge, the top answer for the third year running',
      source: 'Agency Management Institute, Agency Core 2026',
      href: AMI,
    },
    {
      kind: 'p',
      text: 'The method is an outside-in audit: checking a brand the way its customers meet it, with no login. It runs through the public pop-up, the emails, the basket and the checkout. In a [Forbes Agency Council piece of May 2026](' +
        FORBES +
        '), James Fratzke describes the outside-in marketing audit as judging a brand by what its audience sees, rather than by its intentions.',
    },

    { kind: 'h2', id: 'why-proof-wins', text: 'How to win ecommerce clients: show the brand its own store' },
    {
      kind: 'p',
      text: 'Every brand hears the same promise from every agency: more revenue from email, a higher conversion rate, cheaper sales from ads. Agency leaders know it. In Agency Core 2026, 50% named demonstrating differentiation a pressing challenge, up from 33% a year earlier. 36% named building trust with ideal prospects.',
    },
    {
      kind: 'p',
      text: 'A finding from the brand’s own store sets the agency apart and builds trust in the same message. The founder can open the inbox and see the checkout reminder that took 10 hours to arrive, or the one that never came. The finding is about their store and nobody else’s, so it reads as work done for them before any call.',
    },
    {
      kind: 'p',
      text: 'The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026. This month Obsession ran a pilot for 4 agencies on the stores they pitch and serve. Between 21 and 24 October 2026, its AI customers signed up, browsed, left a basket and started a checkout, up to 4 journeys at each store. Each journey had its own inbox, and every inbox was watched for 48 hours.',
    },
    {
      kind: 'p',
      text: 'Each journey was scored against Obsession’s written criteria, such as a first reminder within 4 hours and the item and its price shown in it. Every store in the pilot had at least one gap, such as a late reminder or one with no price.',
    },

    { kind: 'h2', id: 'by-hand', text: 'What checking prospects by hand costs an agency founder' },
    {
      kind: 'p',
      text: 'Agency founders who already pitch this way describe the hours around the check as the hard part:',
    },
    {
      kind: 'list',
      items: [
        '**The wait.** Sign up with a personal address, wait at least 4 hours, leave a basket, wait again and screenshot what came. Alongside client work, a founder manages 3 or 4 brands a day.',
        '**Keeping track.** With 20 brands at different hours of the wait, knowing which brand is at which step is the most manual part of the job.',
        '**Handing it over.** A manager can run the steps once they are written down. Then the founder checks every screenshot, because when nothing arrived, nobody can tell whether the store sent nothing or the sign-up went wrong.',
        '**Looking like a real customer.** Each brand gets its own browser, a personal address and a normal window rather than a private one. A VPN, a service that makes the browser appear to be in the brand’s country, goes on too. A store can show a visitor from another country a different currency, offer or pop-up.',
        '**The clock.** On a fresh job post the brand may hire within hours, so the first finding has to arrive the same day. A prospect found on LinkedIn can wait the full 48 hours.',
      ],
    },
    {
      kind: 'p',
      text: '3 or 4 brands a working day comes to about 65 to 90 a month. An agency that wants 300 a month repeats the steps 1,200 times. Each brand needs a sign-up, a browse, a basket and a checkout, each with its own address to watch.',
    },

    { kind: 'h2', id: 'prospecting-process', text: 'The prospecting process, step by step' },
    {
      kind: 'p',
      text: 'Write each pass mark down before the first brand, so a manager or an AI customer runs the steps the same way every time.',
    },

    { kind: 'h3', id: 'pick', text: '1. Pick brands with a reason to buy now' },
    {
      kind: 'p',
      text: 'Start with brands that have a dated reason to hire help. Each of these reasons can be seen from outside:',
    },
    {
      kind: 'list',
      items: [
        '**A job post** for email, CRO or ads work, on Upwork, LinkedIn or the brand’s own careers page.',
        '**A new head of ecommerce or marketing,** shown on LinkedIn in the last 3 months.',
        '**A launch:** a new product, a new country or a new website.',
        '**A platform move,** such as a store that moved to Shopify this year.',
        '**A date.** Black Friday falls on Friday 27 November 2026, and every pop-up, code and sale email a brand changes before then is one more thing to check.',
      ],
    },
    {
      kind: 'p',
      text: 'The public sources for each reason, from store databases to ad libraries, are in [how to find ecommerce clients](/blog/how-to-find-ecommerce-clients).',
    },
    { kind: 'p', text: '**Pass:** every brand on the list has a dated reason and a named person who decides.' },

    { kind: 'h3', id: 'become-a-customer', text: '2. Become their customer' },
    {
      kind: 'p',
      text: 'Use only the paths any customer has. Give each journey its own email address, so every email that arrives traces back to the one action that triggered it:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Sign up through the pop-up and screenshot the offer it shows.',
        'Browse 2 products.',
        'Leave a basket with 1 product in it.',
        'Start a checkout, type the email address and leave before payment.',
      ],
    },
    {
      kind: 'p',
      text: 'Shop from the brand’s main market, in a normal browser window, and write down the time of every step. Never enter payment details.',
    },
    { kind: 'p', text: '**Pass:** 4 addresses, 4 start times and a screenshot of the pop-up’s offer.' },

    { kind: 'h3', id: 'four-then-48', text: '3. Read early, judge when the window closes' },
    {
      kind: 'p',
      text: 'Read every inbox as early as the pitch needs, at 4, 12 or 24 hours for a brand that is hiring now, and check the spam folder each time. Call an email missing only once the window you chose has closed, 48 hours for most flows. In Obsession’s October pilot, the timing looked like this:',
    },
    {
      kind: 'list',
      items: [
        'Most first reminders came within 4 hours, the fastest after 30 minutes. Some came about 10 hours later.',
        'Nearly half the stores sent nothing in the 48 hours after a shopper left a checkout with their email typed in.',
      ],
    },
    {
      kind: 'p',
      text: 'A 4-hour read sees most first reminders. The 48-hour read is the one that can say no reminder came within 48 hours.',
    },
    { kind: 'p', text: '**Pass:** for each journey, what arrived, when it arrived and what was still missing at 48 hours.' },

    { kind: 'h3', id: 'open-with-a-finding', text: '4. Open with one finding' },
    {
      kind: 'p',
      text: 'Put one finding in the first line with the time it arrived, attach one screenshot and ask one question. Keep the other findings for the call.',
    },
    {
      kind: 'note',
      title: 'A first line, to an invented brand',
      text: 'I signed up to corriebrook.example through your pop-up at 09:02 on Monday, and at 09:06 started a checkout for a candle with my email typed in. The welcome email came at 09:05 with 10% off. By 13:10 no checkout reminder had arrived, in the inbox or in spam. The screenshot is attached with the times. Would it help to see what arrives by Wednesday, when the 48 hours are up?',
    },
    {
      kind: 'p',
      text: 'For a proposal on a Klaviyo job, the opening and template are in [how Klaviyo experts win Upwork jobs](/blog/klaviyo-experts-win-upwork-jobs-from-shopify-brands). For the full email method, step by step, see the [Klaviyo flow audit without a login](/blog/audit-prospect-email-without-klaviyo-login).',
    },
    { kind: 'p', text: '**Pass:** the brand can check the finding on its own phone in a minute.' },

    { kind: 'h3', id: 'the-call', text: '5. Take the call through the rest' },
    {
      kind: 'p',
      text: 'On the call, show the other findings from the 48-hour report in the order a customer met them. Ask about what has already happened: what changed on the store in the last 3 months, who owns the emails, and what the last agency did. Close with a dated next step, such as an audit inside their accounts or a first month’s plan built on the findings. For retention agencies, the route from first message to retainer is in [how to get email marketing clients](/blog/how-to-get-email-marketing-clients).',
    },
    { kind: 'p', text: '**Pass:** a date for the next step, agreed on the call.' },

    { kind: 'h3', id: 'the-win', text: '6. Win, and keep the 48-hour report as the baseline' },
    {
      kind: 'p',
      text: 'Once the brand signs, the 48-hour report becomes the starting point. Run the same journeys after each fix, and the first client report can show each finding before and after.',
    },
    { kind: 'p', text: '**Pass:** every finding from the pitch is marked fixed or still open in the first report.' },

    { kind: 'h2', id: 'agency-types', text: 'What each agency type checks first' },
    {
      kind: 'p',
      text: 'Every agency type follows the same workflow and starts from the part of the store it is paid to fix. The findings in the table come from Obsession’s October checks. On 26 October 2026, an AI agent working for Obsession walked the client stores that Shopify agencies and freelance experts list on their own sites. These are the stores the agencies chose to show on their own websites. It shopped on a phone as a signed-out new customer, added an item to the cart and stopped at the first checkout page.',
    },
    {
      kind: 'table',
      caption: 'What each agency type checks first, with a real finding from Obsession’s October checks that would open a pitch. No store is named',
      cols: ['Agency type', 'Checks first', 'A finding that opens a pitch'],
      rows: [
        ['Retention', 'Every email after sign-up, basket and checkout', 'Nothing in 48 hours after a checkout was left'],
        ['CRO', 'The pop-up, the code at checkout and checkout itself', 'A faded Check out button that did nothing until a small terms box was ticked'],
        ['Shopify Plus build', 'What changed after a release', 'A help button sitting over Check out on a phone'],
        ['Performance', 'The page behind each ad, followed to checkout', 'Free shipping on the top bar, then a spend threshold for it in the cart'],
        ['Paid social and creative', 'What the ad’s offer becomes on the page', 'A subscription price on the page that the cart didn’t honour'],
      ],
    },
    {
      kind: 'p',
      text: 'The same walk found more openers of the kind a brand can check on a phone in a minute:',
    },
    {
      kind: 'list',
      items: [
        'A free gift promised on the page that never appeared in the cart.',
        'A sale banner still showing the day after the sale ended.',
        'A chat prompt sitting over the Check out button on a phone.',
        'A shipping protection charge already switched on in the cart.',
        'A package protection line that appeared after going to checkout and back.',
      ],
    },
    {
      kind: 'p',
      text: 'For a creative or paid social agency, the strongest opener is the gap between the ad and the page. Set the offer, price or product the ad shows against what a new customer meets after the click. That is how to get clients as a creative agency with a phone and the brand’s live ad. The full case by agency type is in [why retention agencies need AI customers](/blog/ai-customers-for-retention-agencies) and [why CRO and performance agencies need AI customers](/blog/ai-customers-for-cro-agencies).',
    },

    { kind: 'h2', id: 'simulate-customers', text: 'Simulate different customers at one brand' },
    {
      kind: 'p',
      text: 'A store treats each customer by what they do. A subscriber gets the welcome emails, a shopper who leaves a basket gets a reminder, and a shopper who types an email at checkout and leaves gets another. One person with one address can be one of them at a time, so the emails mix and nobody can say which action triggered which email.',
    },
    {
      kind: 'p',
      text: 'AI customers split the work. An AI customer is an AI agent that becomes a real customer of a company, with its own inbox, phone number and browser, and keeps what the company sends and shows it as evidence ([what AI customers are](/blog/ai-customers)). An agency can send 5 or more to one brand, each doing one thing:',
    },
    {
      kind: 'list',
      items: [
        '**The subscriber** signs up through the pop-up.',
        '**The window shopper** looks at 2 products and leaves.',
        '**The basket leaver** leaves 1 product in the basket.',
        '**The checkout starter** types its email at checkout and leaves before payment.',
        '**The code hunter** tries every code it finds at checkout.',
        '**The chatbot asker** asks the store’s chat what a buyer would ask.',
        '**The ad follower** opens the brand’s live ad from its own link and goes on to checkout.',
      ],
    },
    {
      kind: 'art',
      caption: '5 AI customers at one invented store, each doing one thing from its own inbox and browser, read at 4 hours.',
      art: {
        kind: 'report',
        title: 'corriebrook.example · 5 AI customers, 1 brand',
        period: 'Started Monday 09:00 from the UK · read at 4 hours',
        cols: ['AI customer', 'What it did', 'What came back', 'When'],
        rows: [
          { name: 'Subscriber', cells: ['Signed up', 'Welcome, 10% code', '3 min'], tone: 'ok' },
          { name: 'Basket', cells: ['Left a candle', 'Reminder with price', '45 min'], tone: 'ok' },
          { name: 'Checkout', cells: ['Typed email, left', 'Nothing yet', 'Read at 48\u00a0h'], tone: 'late' },
          { name: 'Code hunter', cells: ['Tried the code', 'Refused on sale item', 'At checkout'], tone: 'fail' },
          { name: 'Chatbot', cells: ['Asked: by Friday?', '2 days, policy 3 to 5', '1 min'], tone: 'fail' },
        ],
        notes: [
          'Each AI customer has its own inbox, phone number and browser, so each email traces back to one action.',
          'The checkout row gets its verdict at 48 hours.',
          'Corriebrook and every result here are invented.',
        ],
      },
    },
    {
      kind: 'p',
      text: 'Either failed row could open the pitch: a code refused on a sale item, or a chatbot promising delivery faster than the policy page allows.',
    },

    { kind: 'h2', id: 'at-scale', text: 'Agency prospecting at 300, 1,000 or 5,000 brands a month' },
    {
      kind: 'p',
      text: 'By hand, every brand needs 4 addresses to create and 2 reads of each inbox. At 300 brands a month that is 1,200 inboxes to watch. At 1,000 brands it is 4,000, and at 5,000 it is 20,000.',
    },
    {
      kind: 'p',
      text: 'Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof. For an agency, Obsession’s [prospect intelligence](/recipes/prospect-intelligence) does the prospecting with proof:',
    },
    {
      kind: 'list',
      items: [
        '**As many AI customers as the job needs.** Each has its own inbox, phone number and browser, and does one thing at each brand.',
        '**A shopper from the right country.** Each AI customer shops from the US or the UK, to match the brand’s market.',
        '**CAPTCHAs, the puzzles that check a visitor is a person.** In the October pilot, most stores put a CAPTCHA or bot check in front of at least one step. Each report names any step a CAPTCHA kept it from testing, so the agency knows exactly what to check by hand.',
        '**Reports on the agency’s clock.** Read at 4, 12, 24 or 48 hours, or keep the AI customers on for weeks or months. A brand hiring now can get its first finding within hours, and a client gets weekly or monthly checks.',
        '**In the agency’s name.** Reports can carry the agency’s name and logo for the brands it serves.',
        '**Scale.** It runs at 300 brands a month, 1,000 or 5,000, and it is built for millions. The first agency to finish the October pilot is moving to 300 brands a month.',
        '**Pricing.** Credit-based plans, like Claude’s.',
      ],
    },

    { kind: 'h2', id: 'business-case', text: 'The business case in your own numbers' },
    {
      kind: 'p',
      text: 'Put your own figures in. In the example, hands-on time is 15 to 25 minutes a brand: the sign-ups, the basket, 2 inbox reads and the screenshots. The retainer for one client won is an example: $1,500 a month at the low end and $2,500 at the high end.',
    },
    {
      kind: 'art',
      caption: 'An invented agency’s month by hand. Replace the time per brand and the retainer with your own.',
      art: {
        kind: 'price',
        title: 'An agency · 300 prospects a month by hand',
        rows: [
          { label: 'Prospects checked', value: '300', note: 'About 14 each working day' },
          { label: 'Hands-on time each', value: '15 to 25 min', note: 'Sign-ups, a basket, 2 inbox reads, screenshots' },
          { label: 'Hours a month', value: '75 to 125', note: 'About 2 to 3 working weeks' },
          { label: 'One client won, a month', value: '$1,500 to $2,500', note: 'An example retainer: use yours' },
        ],
        total: { label: 'That client over 12 months', value: '$18,000 to $30,000', note: '$4,500 to $7,500 over 3 months, $9,000 to $15,000 over 6' },
      },
    },
    {
      kind: 'p',
      text: 'One client won is worth $4,500 to $7,500 over 3 months and $9,000 to $15,000 over 6. Over 12 months it is worth $18,000 to $30,000. Checking 300 brands a month by hand takes 75 to 125 hours of a founder’s or a manager’s time, every month. With AI customers running the checks, the work changes in 4 ways:',
    },
    {
      kind: 'list',
      items: [
        '**Time back.** The 75 to 125 hours a month go to proposals, calls and client work.',
        '**Every brand checked.** All 300 pitches open with what that brand’s own store sent a new customer, and when, instead of the few a founder has time to check by hand.',
        '**Written for one brand.** Each finding is about that brand’s own store, so no two pitches read the same.',
        '**A service after the win.** The same AI customers keep checking the client every week or every month, which the agency can sell.',
      ],
    },

    { kind: 'h2', id: 'after-the-win', text: 'After the win: checks to sell to every client' },
    {
      kind: 'p',
      text: 'The AI customers that found the opening finding can stay on as the client’s customers. Each of these checks is a service an agency can sell to the brands it works with:',
    },
    {
      kind: 'list',
      items: [
        '**A weekly check before the client report.** Every flow checked as a customer, so the Monday report shows what fired. The format is in [a weekly flow log for clients](/blog/show-clients-every-flow-fired).',
        '**A Black Friday code check.** The pop-up code and each sale code tried at checkout on the days that matter, Friday 27 November 2026 included.',
        '**A competitor watch.** Every email, offer and price the client’s competitors send a new customer.',
        '**Ad landing checks.** The page behind each live ad, followed to checkout after every launch.',
        '**What AI assistants say about the brand,** checked against the live store.',
      ],
    },
    {
      kind: 'p',
      text: 'For brands that won’t pay a full retainer, sell a smaller service: a monthly check. It runs the same sign-up, basket and checkout once a month, with a short note of what changed. The same AI customers that opened the pitch go on to find the client’s revenue leaks and watch its competitors.',
    },

    { kind: 'h2', id: 'options', text: 'Ways to check prospects, compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 29 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to check ecommerce prospects as a customer, from each provider’s own pages on 29 October 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Doing nothing: pitch on the promise',
          'Costs no time before the first reply',
          'Free',
          'Reads like every other agency’s pitch',
          'Agencies whose referrals fill the calendar',
        ],
        [
          'By hand: a new address per journey and a sheet',
          'Any store, any journey, judged by the founder',
          'Free, plus 15 to 25 minutes a brand',
          'Hours grow with every brand and every wait',
          '5 brands a week or fewer',
        ],
        [
          'A VA (virtual assistant) or a team member',
          'Takes the hours off the founder',
          'Their hourly rate, plus time to check their work',
          'Steps to write down, screenshots to check',
          'A steady list, once the steps are written',
        ],
        [
          'Browser agent: [ChatGPT’s cloud browser](' + CLOUD_BROWSER + ')',
          'Clicks, fills in forms and keeps working after you leave',
          'Paid ChatGPT plans in supported regions, excluding Free and Go',
          'Pauses for sign-ins, some sites block it\nNo inbox of its own described',
          'A one-off look at a page or a form',
        ],
        [
          'Obsession (ours): [Prospect intelligence](/recipes/prospect-intelligence), [leak checks for retention agencies](/use-cases/leak-checks-for-retention-agencies), [Funnel QA for CRO agencies](/use-cases/funnel-qa-for-cro-agencies)',
          'AI customers sign up, shop and wait at every brand, each with its own inbox',
          'Running now: 5 stores or 5 brands checked free\nCredit-based plans, like Claude’s',
          'Leaves the message and the call to the agency',
          'Every brand on a long list checked as a customer, then weekly client checks',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If your agency pitches dozens or hundreds of brands a month and needs a first finding within 4 hours of a job post, use Obsession. Its reports can carry the agency’s name, and the same checks carry on weekly or monthly after the win. For 5 brands a week, the steps by hand cover it. A trained manager suits a steady list once the steps are written down, and a browser agent suits a one-off look at a page.',
    },

    { kind: 'h2', id: 'when-not', text: 'When an agency doesn’t need AI customers for prospecting' },
    {
      kind: 'list',
      items: [
        '**Referrals fill the calendar.** An agency at capacity needs no outbound checks.',
        '**5 brands a week or fewer.** At 25 minutes a brand, the steps by hand take about 2 hours a week.',
        '**The brand has already agreed to talk.** Ask for the login and run the audit inside its accounts.',
        '**The pitch is for work a customer never sees,** such as a rebrand or a data project, where the store’s emails and checkout aren’t what the agency would change.',
      ],
    },

    { kind: 'h2', id: 'start', text: 'Start with 5 brands this week' },
    {
      kind: 'p',
      text: 'Pick 5 brands with a dated reason to buy: a job post, a new hire, a launch or Black Friday. Sign each one up by hand on Monday morning, or name them to Obsession, and send the first finding before the brand hires someone else. The Obsession team helps each agency set up its first batch: the brands, the journeys at each and where the reports go. The free check reports within 4 days. Once your own list runs, you choose when to read: 4, 12, 24 or 48 hours, or as long as you want to keep watching.',
    },
    {
      kind: 'cta',
      text: 'For retention agencies: name 5 stores, prospects you’re about to pitch or clients (a client’s store needs the client’s OK). Obsession’s AI customers become each store’s new customer for 48 hours: the pop-up and its code, the welcome email and a basket. What happened reaches you within 4 days.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Check 5 stores free',
    },
    {
      kind: 'cta',
      text: 'For CRO and performance agencies: name 5 brands, the ones you’re about to pitch and clients with their OK. Obsession’s AI customers follow each brand’s live ad as a new customer, sign up through the pop-up and take the code to checkout. They watch the inbox for 48 hours, and each brand’s findings reach you within 4 days, with proof.',
      to: '/use-cases/funnel-qa-for-cro-agencies',
      label: 'Check 5 brands free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about getting agency clients' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do you get clients as a marketing agency?',
          a: 'Pick brands with a dated reason to buy, such as a job post, a new head of ecommerce or a launch. Become a customer of each one, then open the first message with one finding from its store, with the time it arrived and a screenshot. Build referrals from clients and partner agencies alongside the outreach.',
        },
        {
          q: 'How do you get clients as a creative agency?',
          a: 'Show the brand what its ad’s offer becomes after the click. Follow a live ad to the product page, the cart and checkout as a new customer. Open with the gap you find, such as a subscribe-and-save price that turns into the full price in the cart. It needs no login to the brand’s ad account.',
        },
        {
          q: 'What is an outside-in audit?',
          a: 'An outside-in audit checks a brand the way its customers meet it: through the public pop-up, emails, basket and checkout, with no login. It shows what a customer gets. An audit inside the brand’s accounts, once it agrees to work with you, shows why.',
        },
        {
          q: 'What does a good agency prospecting process look like?',
          a: 'Pick brands with a reason to buy now and become their customer. Read what arrives at the hours that suit the pitch, judge once the window closes, then open with one finding and take the call through the rest. Once the brand signs, that report is the baseline. Write a pass mark for each step so anyone on the team runs it the same way.',
        },
        {
          q: 'How many prospects can an agency check by hand?',
          a: 'Each brand takes 15 to 25 minutes of hands-on time. A founder fitting it around client work manages 3 or 4 brands a day, about 65 to 90 a month. At 300 brands a month it takes 75 to 125 hours, about 2 to 3 working weeks.',
        },
        {
          q: 'Is it legal to sign up to a prospect’s store as a customer?',
          a: 'Signing up through a public pop-up and leaving a basket is what any customer does. Use your own addresses, never enter payment details, stop before paying, and say who you are when you write to the brand. Rules on cold email differ by country, and this isn’t legal advice.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the figures',
      text: 'The October pilot ran between 21 and 24 October 2026 for 4 agencies, which chose the stores. Each journey had its own new customer, inbox and 48-hour window, and stopped before payment. On 26 October 2026 an AI agent working for Obsession walked client stores that Shopify agencies and freelance experts list on their own sites, as far as the first checkout page. No store, brand or agency is named. The agency, the brand, the times and the retainer in the examples are invented.',
    },
  ],

  sources: [
    {
      title: 'Agency Leaders See the Path. Now Walk It! The Agency Core 2026 Research Report (executive summary)',
      publisher: 'Agency Management Institute',
      url: AMI,
      date: '2026-05',
    },
    {
      title: 'Outside-in marketing audits: see your brand like your customers do',
      publisher: 'Forbes Agency Council (James Fratzke)',
      url: FORBES,
      date: '2026-05-08',
    },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: CLOUD_BROWSER, date: '2026-10-28' },
  ],

  related: ['klaviyo-experts-win-upwork-jobs-from-shopify-brands', 'how-to-find-ecommerce-clients', 'show-clients-every-flow-fired', 'recipe:prospect-intelligence', '/use-cases/prospect-intelligence-with-clay'],
}
