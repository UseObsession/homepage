import { capture } from '../capture'
import { consoleHeading } from '../console'
import type { Page } from '../types'

/* Check your AI agents (/verify), the 4th way in (content/ways.ts; _research/verify/VERIFY.md sections 4, 5, 9 and 11).
   The story, in the site's order: hero (the free AI agent check, 5 example runs in the console) > how it works (point
   it at your agent, approve the checks, test customers use it, a verdict and a signed record) > the gap (your vendor
   grades its own agent) > use cases > outcomes (up to ceilings, each with its model in the line) > every kind of AI
   agent > the 8 recipes > proof > questions (the red lines) > the free check.
   No real AI agent check has run yet: every run, screen and figure here is an example and says so (the console's
   Example tag and "Example run." in every ledger; every screen's Example tag). The proof beat is the 1 real run, the
   September store check, as the method the checks use; it makes no claim about an AI agent check. Swap in the first
   real check, with the owner's OK, as soon as it lands.
   The console's runs match their screens' numbers: botcheck (14 day policy, 30 days on chat, 0 emails in 6 hours,
   18 of 20 checks passed), callcheck (£0 said, £50 on the price list, 1 min 12 s on hold), outcheck (3 of 40 messages
   flagged), vendorcheck (17 and 12 of 20) and drift (37, then 28 of 40 after the 23:20 update).
   Screens, each once, all 8 of the AI agent checks' own: How (disclosure: 1 agent on every channel; salescheck: checks
   written from your prices and the rules; callcheck: a declared test caller using it; resolution: the verdict and the
   signed record); use cases (botcheck, outcheck, vendorcheck, drift). The voice receptionist has its console run and
   How's 3rd step rather than a use case tab, so no screen shows twice and no other recipe's screen stands in. The
   proof shows the real report.
   Outcomes, recomputed: 11 days to notice, cut to 1 by a daily check, is up to 10 days sooner; 10,000 billed
   resolutions a month x $0.99 x 19 in 100 not real x 12 = $22,572 (19 in 100 is the resolution screen's own rate);
   15 hours a week of transcript reading x 52 = 780 hours.
   "Customer-Side Assurance" is the category's name for decks and analysts: it appears once here, in the questions,
   and never as a button. */

export const page: Page = {
  meta: {
    path: '/verify',
    title: 'Check your AI agents as a customer, every day · Obsession',
    description:
      'Declared AI test customers call, chat and email your AI agents as your customers do, every day, and check they answer right, hand over and say they’re AI.',
    answer:
      'Obsession checks AI agents from the customer’s side. Declared AI test customers, each with its own inbox, phone number, account and card, use a company’s support bot, voice agent, AI SDR or sales agent on its real channels every day, with the owner’s OK, check it against the company’s policies and the law, and sign every step.',
    ogImage: '/og/verify.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Check your AI agents', path: '/verify' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'AI agents that check your AI agents, as your customer.',
    sub: 'Declared test customers with their own inbox, phone number, account and card call, chat, email and shop your AI agents the way your customers do, every day. You see each wrong answer, missed handoff and broken promise, with the proof.',
    capture: {
      kind: 'verify',
      source: 'verify-hero',
      button: 'Check my AI agent free',
      micro: capture.agent.microOrWaitlist,
      orWaitlist: true,
    },
    proof: [
      { value: 'Every channel', label: 'chat, phone, email, text, portal and checkout' },
      { value: 'Every day', label: 'and again after every update' },
      { value: 'Every step signed', label: 'for legal, your vendor or your insurer' },
    ],
    consoleHeading,
    demos: [
      {
        tab: 'Support bot',
        recipe: 'support-bot',
        task: 'Every morning, ask our support bot what a customer asks, on chat, email and our portal. Check each answer against our policy pages and tell me what breaks.',
        targets: 'Your support bot: chat, email and your portal',
        journey: ['Say it’s AI, ask about a return', 'Ask for a person', 'Wait for the promised email', 'Check against your policy'],
        schedule: 'Daily at 07:00, and after every update',
        report: 'A Slack alert and a signed record',
        kit: ['Agent ID, declared as AI', '2 inboxes', 'A test account on your portal', 'Tagged as a test, never billed'],
        events: [
          { time: 'Mon 07:00', text: 'Test customer 2 says it’s AI and asks to return an order after 20 days, on chat, email and your portal.' },
          { time: 'Mon 07:02', text: 'Chat: “Yes, you have 30 days.” Your returns page, captured at 07:00, says 14.' },
          { time: 'Mon 07:04', text: 'Asks for a person. Chat hands over in 41 seconds, the portal in 3 minutes.' },
          { time: 'Mon 07:12', text: 'Email: a person replies in 12 minutes, and says 14 days.' },
          { time: 'Mon 13:04', text: '6 hours on, the confirmation email the portal promised hasn’t arrived.' },
        ],
        finding: 'Chat gives a 30 day return window where your policy says 14, and the portal’s promised email never came.',
        fix: 'The return answer drafted for your bot’s settings, and the missing email flagged for your helpdesk. Live after your OK.',
        ledger: 'Example run. 20 checks, 18 passed, every answer and wait signed and dated.',
      },
      {
        tab: 'Voice receptionist',
        recipe: 'voice-agent',
        task: 'Every morning, call our AI receptionist as 3 new patients. Book a slot, ask a price and a person, and check every answer against our price list.',
        targets: 'Your AI receptionist, on your own number',
        journey: ['Say it’s an AI test caller', 'Book a real slot, then cancel', 'Ask a price, then a person', 'Wait for the text'],
        schedule: 'Daily at 08:00',
        report: 'A report by 09:00, with every recording',
        kit: ['Agent ID, declared as AI', '3 phone numbers', '3 voices, used with consent', 'Your calendar, connected by you'],
        events: [
          { time: 'Mon 08:00', text: '3 test callers ring as new patients. Each says it’s an AI test caller, there with your OK.' },
          { time: 'Mon 08:00', text: 'Call 2: the receptionist says it’s AI in its first 2 seconds, and books Tuesday at 10:20.' },
          { time: 'Mon 08:01', text: 'Asks about an Invisalign consult. “The consult is free.” Your price list says £50.' },
          { time: 'Mon 08:01', text: 'Asks for a person. A person answers after 1 minute 12 seconds on hold.' },
          { time: 'Mon 08:06', text: 'Every booking is in your calendar and every text arrived. Each slot cancelled.' },
        ],
        finding: 'Your receptionist tells new patients the Invisalign consult is free. Your price list says £50.',
        fix: 'The price answer drafted for your receptionist’s settings. Live after your OK.',
        ledger: 'Example run. 3 calls, recorded with consent, every answer signed and dated.',
      },
      {
        tab: 'AI SDR',
        recipe: 'outbound-agent',
        task: 'Add 2 test prospects to our AI SDR’s lists. Read every email, text and call it sends them, and check each one against our rules.',
        targets: 'Your AI SDR: email, text and calls',
        journey: ['Join its lists, with your OK', 'Read every message', 'Reply no, then STOP', 'Check against your rules'],
        schedule: 'Every message, continuously',
        report: 'A Slack flag, and a weekly signed record',
        kit: ['2 test prospects, declared as AI', '2 inboxes', '2 phone numbers', 'Only receives, never calls out'],
        events: [
          { time: 'Mon 08:31', text: 'Test prospects 1 and 2, added with your OK, get the first email. Its claims match your list.' },
          { time: 'Tue 11:26', text: 'Email: “30% off if you sign today.” Your rule allows up to 15%.' },
          { time: 'Wed 03:12', text: 'A text at 03:12. Your quiet hours run from 21:00 to 08:00.' },
          { time: 'Wed 09:14', text: 'Email: it names a customer you don’t have.' },
          { time: 'Wed 10:02', text: 'Test prospect 2 replies STOP. “You’re unsubscribed.” Nothing follows.' },
        ],
        finding: '3 of 40 messages broke your rules: a discount over its limit, a text at 03:12 and a customer you don’t have.',
        fix: 'Your AI SDR paused by your rule, and 3 rule changes drafted for its settings. Live after your OK.',
        ledger: 'Example run. 40 messages read, every one signed and dated.',
      },
      {
        tab: 'Before you sign',
        recipe: 'vendor-agent',
        task: 'With both vendors’ OK, run our 20 hardest tickets on each shortlisted vendor’s agent, set up on our policies, and compare them side by side.',
        targets: 'Vendor B and Vendor C, with their OK',
        journey: ['Set up the same 20 cases', 'Ask as declared test customers', 'Time every handoff', 'Score against your policy'],
        schedule: '2 weeks, then monthly once you go live',
        report: 'A signed report for procurement',
        kit: ['Agent ID, declared as AI', 'An inbox and number per vendor', 'Your 20 real cases', 'Tagged as tests on both'],
        events: [
          { time: '19 Sep', text: 'Both vendors agree to the test. The same 20 cases go to each agent.' },
          { time: '22 Sep', text: 'Asks for a person. Vendor B connects one in 1 minute 50 seconds.' },
          { time: '22 Sep', text: 'Vendor C says “How can I help?” 3 times. No person in 6 minutes, where your policy says 3.' },
          { time: '29 Sep', text: 'A refund on day 35, an address change, an expired code: every case run on both.' },
          { time: '3 Oct', text: 'Vendor B passes 17 of 20 cases. Vendor C passes 12.' },
        ],
        finding: 'Vendor B passed 17 of 20 cases and Vendor C 12. Vendor C never reached a person.',
        fix: 'A side by side report for procurement, every case signed. The choice stays yours.',
        ledger: 'Example run. 40 runs over 2 weeks, every answer signed and dated.',
      },
      {
        tab: 'After an update',
        recipe: 'drift',
        task: 'Replay our 40 hardest support cases every morning, and again within the hour of any update. Tell me what changed.',
        targets: 'Your support bot, with Vendor A’s OK',
        journey: ['Replay your 40 cases', 'Compare with the baseline', 'Run again after every update', 'Flag every new failure'],
        schedule: 'Daily at 07:00, and within the hour of any update',
        report: 'A Slack alert, and a note for your vendor',
        kit: ['Agent ID, declared as AI', '1 inbox', 'Your 40 cases', 'Tagged as tests, never billed'],
        events: [
          { time: '2 Oct, 07:00', text: 'Morning replay: 37 of 40 cases pass, in line with the baseline.' },
          { time: '2 Oct, 23:20', text: 'Vendor A ships an update to your bot.' },
          { time: '3 Oct, 00:10', text: 'The replay runs again. 28 of 40 pass.' },
          { time: '3 Oct, 00:12', text: '9 cases fail that passed that morning: refunds, delivery fees, warranty, and stopping after “No”.' },
          { time: '3 Oct, 00:14', text: 'A note to Vendor A drafted, with every answer before and after.' },
        ],
        finding: 'Since Vendor A’s update, 9 of your 40 cases fail. Your bot now offers 30 day refunds and free delivery.',
        fix: 'The note to Vendor A, with every answer before and after, signed. Sent after your OK.',
        ledger: 'Example run. 80 replays, every answer signed and dated.',
      },
    ],
  },

  how: {
    heading: 'Point it at your AI agent. Test customers bring back the proof.',
    sub: 'Nobody writes a task or picks a journey. You give it your agent and your policies, and approve the checks it writes.',
    steps: [
      {
        title: 'Point it at your AI agent',
        line: 'A chat page, phone number, inbox, portal or checkout: yours, a client’s with their OK, or a vendor’s you’re trialling with theirs. Add your policies, prices and where you sell.',
        screen: 'disclosure',
        chips: ['Chat', 'Phone', 'Email', 'Text', 'Portal', 'Checkout'],
      },
      {
        title: 'Approve the checks',
        line: 'Obsession writes them from your policies, your prices and the rules where you sell: it says it’s AI, quotes the right price, gets you a person. Change any check, then approve.',
        screen: 'salescheck',
      },
      {
        title: 'Declared test customers use it',
        line: 'Each has its own ID, inbox, number, account and card, and says it’s AI and who it works for. Every day, and after every update. Checkouts stop before payment.',
        screen: 'callcheck',
      },
      {
        title: 'You get a verdict and a signed record',
        line: 'Each check passes or fails, with the transcript or recording, the policy it broke and what happened next. The fix comes drafted, and anyone you show can check the record.',
        screen: 'resolution',
      },
    ],
  },

  gap: {
    heading: 'Your AI vendor grades its own agent. Obsession checks it as your customer.',
    sub: 'It asks, then waits for the refund, the email and the callback, and keeps every receipt.',
    rows: [
      { today: 'Your vendor tests its agent in its own simulator', obsession: 'Declared test customers use it on your real channels' },
      { today: 'You hear from a complaint, days later', obsession: 'A failed check reaches you the same morning' },
      { today: 'Transcripts show what the bot said', obsession: 'Checks follow what happened next: the refund, the email, the booking' },
      { today: 'Resolutions billed on the vendor’s own count', obsession: 'Each billed outcome checked against what the customer got' },
      { today: 'Screenshots in a folder', obsession: 'Every step signed, for legal, your vendor or your insurer' },
    ],
  },

  uses: {
    heading: 'Find the wrong answer before your first customer of the day hears it.',
    items: [
      {
        tab: 'Support bot',
        moment: 'Monday 07:00, before your team logs on.',
        outcome: 'The wrong refund answer, found before the first customer asks.',
        line: 'Test customers ask on chat, email and your portal in the same minute, and check each answer against your policy page.',
        whyOnly: 'Each has a real inbox and portal account, so it sees whether the email the bot promised ever came.',
        recipe: 'support-bot',
        screen: 'botcheck',
      },
      {
        tab: 'AI SDR',
        moment: 'Monday, as the week’s sequences go out.',
        outcome: 'Every claim, discount and send time your AI SDR uses, checked against your rules.',
        line: 'Test prospects on its lists, added with your OK, read every email, text and call, reply no and time how fast it stops.',
        whyOnly: 'Real inboxes and numbers on the receiving end, so you see each message as a prospect does.',
        recipe: 'outbound-agent',
        screen: 'outcheck',
      },
      {
        tab: 'Before you sign',
        moment: 'The shortlist meeting, with 2 vendors left.',
        outcome: '2 vendors, the same 20 cases, signed and side by side.',
        line: 'Test customers run your real cases on each vendor’s agent, with the vendor’s OK, and time every handoff.',
        whyOnly: 'The same customers, cases and channels on both, so the comparison is fair.',
        recipe: 'vendor-agent',
        screen: 'vendorcheck',
      },
      {
        tab: 'After every update',
        moment: 'Your vendor ships an update at 23:20.',
        outcome: 'By 00:10 you know which 9 answers broke.',
        line: 'Test customers replay your 40 hardest cases every morning, and again within the hour of any update.',
        whyOnly: 'The same declared customers ask the same questions every day, so any change is the agent’s.',
        recipe: 'drift',
        screen: 'drift',
      },
    ],
  },

  outcomes: {
    heading: 'Know the morning it breaks, not 11 days later.',
    items: [
      { value: 'Up to 10 days', label: 'sooner: a daily check finds in 1 day what 1 team took 11 days to notice' },
      { value: 'Up to $22,572', label: 'a year of billed resolutions to challenge: 10,000 a month at $0.99, with 19 in 100 not real' },
      { value: 'Up to 780 hours', label: 'back a year: 15 hours a week of reading transcripts, turned into a list of what failed' },
    ],
  },

  kinds: {
    heading: 'Whatever answers your customers gets a test customer.',
    label: 'Pick your AI agent',
    items: [
      {
        name: 'Support bots and help desks',
        line: 'The same question on chat, email and your portal, checked against your policy every morning.',
        recipes: ['support-bot', 'resolution', 'drift', 'disclosure'],
      },
      {
        name: 'Voice receptionists and call agents',
        line: 'Test callers with different voices book, ask a price and ask for a person, every day.',
        recipes: ['voice-agent', 'disclosure', 'drift'],
      },
      {
        name: 'Booking agents',
        line: 'A real slot booked and cancelled, and the calendar entry and the confirmation text checked.',
        recipes: ['voice-agent', 'support-bot'],
      },
      {
        name: 'AI SDRs and outbound callers',
        line: 'Every email, text and call its test prospects receive, checked against your claims, limits and quiet hours.',
        recipes: ['outbound-agent', 'disclosure'],
      },
      {
        name: 'Shopping and sales agents',
        line: 'The prices, stock and delivery it quotes, checked against your store, stopping before payment.',
        recipes: ['sales-agent', 'drift'],
      },
      {
        name: 'AI in your support portal',
        line: 'A test account, with your OK, asks what a signed in customer asks and follows what happens next.',
        recipes: ['support-bot', 'resolution'],
      },
      {
        name: 'Agents you’re about to buy',
        line: 'Your real cases on each shortlisted vendor’s agent, with their OK, before you sign.',
        recipes: ['vendor-agent', 'resolution'],
      },
    ],
  },

  recipes: {
    heading: 'Start from the check that matches your agent.',
    ids: ['support-bot', 'voice-agent', 'outbound-agent', 'sales-agent', 'vendor-agent', 'resolution', 'disclosure', 'drift'],
  },

  proof: {
    heading: 'The same test customers already caught a store going silent.',
    line: 'In September, 4 test customers shopped a UK store, name hidden, and every inbox was watched for 48 hours. 1 left a basket and 1 stopped at checkout, and nobody wrote to either. Your AI agent gets the same customers and the same proof.',
    cta: { label: 'Read the full report', to: '/sample-output' },
  },

  faq: {
    heading: 'Every test customer says it’s AI. Nothing runs without the owner’s OK.',
    items: [
      {
        q: 'Do you need our logins or code?',
        a: 'No. Test customers use your AI agent the way your customers do. A test account on your portal, or a helpdesk export, only if you give them.',
      },
      {
        q: 'Will it try to break or trick our bot?',
        a: 'No. It asks what an ordinary customer asks. No jailbreaks, no prompt tricks and no flattery to win a discount.',
      },
      {
        q: 'Will our vendor bill us for the tests?',
        a: 'Every test is tagged as a test, and we agree that with your vendor before the first one runs.',
      },
      {
        q: 'Are test calls recorded?',
        a: 'Only on numbers you own or authorise. Each test caller says at the start that it’s AI and that the call is recorded, and no recording is ever used for training.',
      },
      {
        q: 'Can we check a vendor’s agent before we sign?',
        a: 'Yes, with the vendor’s agreement, on the same cases for every vendor on your shortlist.',
      },
      {
        q: 'Can you check a rival’s bot?',
        a: 'Only what any customer can do in public, and we never score, rank or publish anyone’s agent.',
      },
      {
        q: 'Does it pay or place orders?',
        a: 'Every checkout stops before payment, unless it’s your own store and you’ve set a budget.',
      },
      {
        q: 'What do we get back?',
        a: 'A verdict on every check, with the transcript or recording, the policy it broke, what happened next and the fix drafted. Every step is signed.',
      },
      {
        q: 'How is this different from our vendor’s own tests?',
        a: 'Your vendor tests its agent inside its own tools, often with simulated customers. Customer-Side Assurance works from the outside: test customers use your real channels with real inboxes, numbers and accounts, and follow what happens next.',
      },
      {
        q: 'Is a passed check a guarantee?',
        a: 'No. It’s dated evidence of what happened on each check.',
      },
    ],
  },

  final: {
    heading: 'Your first AI agent check is free.',
    sub: 'Name a chat page or phone number you run, or a client’s with their OK. 3 test customers use it, and your report lands within 4 days.',
    capture: {
      kind: 'verify',
      source: 'verify-final',
      button: 'Check my AI agent free',
      micro: 'Leave it blank to join the waitlist instead. We keep your email and your AI agent’s address to run the check and tell you about Obsession.',
      orWaitlist: true,
    },
  },
}
