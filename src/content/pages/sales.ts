import { askExamples, askShared, life } from '../shared5'
import { consoleHeading } from '../console'
import type { Page } from '../types'

/* Sales (/sales), the October rewrite (COPY.md, "Copy deck > Sales"). Sales teams, RevOps and the GTM engineers who
   build their plays. Their words (research/voc.md): "battlecards", "competitor intel", "keep current", and Jamie's
   "evidence", "prove", "domain as the input". The trigger is the calendar: a first call booked starts a customer agent
   at that account, so the brief is ready on the day.
   The story: what it is for you (each account and rival, seen as their customer) > what your CRM can't see > 6 jobs
   from first call to win back, each with its screen > how a customer agent lives > the real
   September store check > questions > early access. Every use case screen is an example (its Example tag). */


export const page: Page = {
  meta: {
    path: '/sales',
    title: 'AI customers for sales: what each account does to customers',
    description:
      'Obsession’s AI customers join each prospect, account and competitor before you call, so every brief and battlecard opens on what their customers get.',
    answer:
      'Obsession’s AI agents become a customer of each prospect, account and competitor before you call, so every brief, battlecard and renewal opens on what their customers actually get, with proof.',
    ogImage: '/og/sales.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Sales', path: '/sales' },
    ],
  },

  hero: {
    pill: '',
    headline: 'Know what every account and competitor does to its customers.',
    sub: 'Obsession’s AI agents become a customer of each prospect, account and competitor before you call, so every brief, battlecard and renewal opens on what their customers actually get, with proof.',
    capture: { kind: 'waitlist', source: 'sales-hero', button: 'Join the waitlist', interest: 'prospect' },
    secondary: { label: 'See how it compares', to: '/compare' },
    proof: [],
    consoleHeading,
    screens: [{ tab: 'Clay', screen: 'claycols', recipe: 'prospect', line: '' }],
  },

  gapPair: {
    heading: 'Your CRM knows what they told you. A customer knows what they do.',
    line: 'Intent data says an account is shopping. It can’t say that their trial goes quiet on day 3, or that a competitor just cut its price by 20%. Only a customer gets that.',
    tools: {
      label: 'What you can see today',
      items: [
        'Their website and LinkedIn',
        'News and funding alerts',
        'Intent data and firmographics',
        'What the buyer says on the call',
      ],
    },
    customer: {
      label: 'What a customer of each account gets',
      items: [
        'How fast they answer a new lead, by form, chat and phone',
        'What their trial sends, and when it goes quiet',
        'Every price and discount a competitor offers',
        'The welcome email that never came',
        'What their support bot tells a customer',
      ],
    },
  },

  uses: {
    heading: 'From the first call to the win back, every deal opens on proof.',
    items: [
      {
        tab: 'Account brief',
        moment: 'Friday 16:00. A first call books for next Friday, and the calendar invite starts an AI customer at the account.',
        outcome: 'Know what each account does before you call: 7 days as their customer.',
        line: 'An agent joins their newsletter, starts a trial, asks their help bot and reads their news, and the brief is ready the morning of the call.',
        whyOnly: 'A welcome email or a trial nudge only reaches an inbox that signed up. Each agent has its own, at every account on your list.',
        recipe: 'prospect',
        screen: 'brief',
      },
      {
        tab: 'Battlecards',
        moment: 'Wednesday 15:00. A buyer says the competitor is cheaper.',
        outcome: 'Know every competitor’s discount before your buyer quotes it.',
        line: 'Agents start each competitor’s trial and keep every email, price and offer until it ends, then check the competitor’s pages every Monday.',
        whyOnly: 'Competitor A’s 20% off only reaches trials still open on day 13. Each agent stays in its trial to the last day.',
        recipe: 'trial',
        screen: 'battlecard',
      },
      {
        tab: 'Lead leaks',
        moment: 'Thursday 09:00. Inbound is up, meetings booked are not.',
        outcome: 'Find where your own form, chat and phone drop leads.',
        line: 'Every day, a labelled test lead uses your form, chat and phone, times each reply and checks who got it.',
        whyOnly: 'Your CRM shows the lead arrived. Only a lead on the other side, with its own inbox and number, can time the 4 hour wait and the missed call.',
        recipe: 'speed',
        screen: 'inbound',
      },
      {
        tab: 'Pilot proof',
        moment: 'Tuesday 09:00. Kickoff, and their CFO wants proof by day 30.',
        outcome: 'Turn pilots into contracts on a before and after anyone can check.',
        line: 'With their OK, the same test customers ask their support the same 20 questions on day 0, 14 and 28, and time every answer.',
        whyOnly: 'Each test customer keeps its own inbox and number from day 0 to day 28, so every answer is timed the same way.',
        recipe: 'mystery',
        screen: 'pilot',
      },
      {
        tab: 'Account watch',
        moment: 'Monday 08:00. 2 hours before the forecast call.',
        outcome: 'See churn and upsell coming, with the play drafted.',
        line: 'Agents stay customers of each account, follow its news and read the CRM, tickets and calls you connect.',
        whyOnly: 'Each agent lives as their customer, so it sees what breaks for them before their usage drops.',
        recipe: 'account-watch',
        screen: 'acctwatch',
      },
      {
        tab: 'Win back',
        moment: 'Thursday 14:00. The lost deals list nobody reopens.',
        outcome: 'Reopen lost accounts the week their new setup breaks.',
        line: 'An agent joins each lost account’s emails and texts, keeps what breaks or changes, and drafts your rep’s note.',
        whyOnly: 'Each agent stays on every lost account’s list with its own inbox and number, so it sees the welcome email stop and the code expire after the move.',
        recipe: 'email-sms',
        screen: 'winback',
      },
    ],
  },

  life,

  /* The ask section (docs/positioning/ask-section.md), where the comparison sits on other pages: an account brief,
     support speed across a target list, and what changed in their stack. */
  ask: {
    ...askShared,
    areas: ['Prospects', 'Accounts', 'Competitors'],
    examples: [{ ...askExamples.brief, where: 'Claude Code' }, askExamples.support, askExamples.watch],
  },

  proof: {
    heading: 'On a real store, 1 shopper left a basket and 1 stopped at checkout. Neither got a reminder in 48 hours.',
    line: 'A skincare store in September 2026, name hidden: 4 test customers, every inbox watched for 48 hours, 15 screenshots. Your briefs and battlecards come back with the same detail, and the same proof.',
    cta: { label: 'See the real report', to: '/sample-output' },
  },

  faq: {
    heading: 'Questions from sales teams.',
    items: [
      {
        q: 'What does Obsession do for a sales team?',
        a: 'Obsession’s AI agents become a customer of each prospect, account and competitor before you call, so every brief, battlecard and renewal opens on what their customers actually get, with proof.',
      },
      {
        q: 'Can it start when a meeting is booked?',
        a: 'Yes. Connect your calendar and an agent becomes the account’s customer the moment a first call is booked, so the brief is ready on the day.',
      },
      {
        q: 'Does it work with Clay and our CRM?',
        a: 'Yes. Send a list from Clay, HubSpot or Salesforce, and each finding comes back to the same row, with its proof linked.',
      },
      {
        q: 'Can our own agent use it?',
        a: 'Yes. Connect Obsession to Claude, ChatGPT or your own agent through MCP or the API, and it can ask what any account does to its customers.',
      },
    ],
  },

  final: {
    heading: 'Pick an account. See what it does.',
    sub: 'Start with the renewal you can’t lose, or the deal you’re fighting for.',
    capture: { kind: 'waitlist', source: 'sales-final', button: 'Join the waitlist', interest: 'any' },
  },
}
