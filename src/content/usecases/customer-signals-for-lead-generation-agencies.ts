import type { UseCaseStudy } from '../types'

/* Customer signals for lead generation agencies (/use-cases/customer-signals-for-lead-generation-agencies).
   Generalised on 20 Oct 2026 from the Spartan Leadz prospect page (obsession/spartan-leadz-use-case.html). James's
   call, after the first review shrank the offer to a 40 company snapshot a VA could do: the offer is the feed. Obsession
   becomes a customer of every company in a client's market, every week, and hands the agency the accounts that have
   the problem the client fixes, each with its fact and receipt. The fact picks who gets the email and when; the copy
   can stay the agency's own. What nobody can build with a VA: every company in a market, every week, across demo
   forms, emails, chat bots and the tools they run, with the history of what changed and a receipt for every fact, on
   a record shared across every Obsession customer, which is why it costs cents a company.
   Written as designed (COPY.md, "Sell it as designed; the market sets the build"): no build caveats. The 3 lines hold:
   the agent says it's AI in every request (the law), and the agency stays private.
   It runs on Prospect intelligence (the demo request journey, and a signal as the input: a new Clay row, a webhook from
   a signal tool such as treg, or a call from the customer's own AI agent).
   Every company and count here is made up; the fine print says so. */

export const study: UseCaseStudy = {
  name: 'Customer signals for lead generation agencies',
  line: 'Every company in your client’s market, watched as its customer, and the ones with the problem it fixes.',

  meta: {
    path: '/use-cases/customer-signals-for-lead-generation-agencies',
    title: 'Customer signals for lead generation and outbound agencies',
    description:
      'Obsession becomes a customer of every company in your client’s market, every week, and hands you the accounts with the problem your client fixes.',
    answer:
      'Customer signals are facts only a customer can see. Obsession becomes a customer of every company in your client’s market, every week, and hands you the accounts that have the problem your client fixes, each with its fact and receipt.',
    ogImage: '/og/customer-signals-for-lead-generation-agencies.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Customer signals for lead generation agencies', path: '/use-cases/customer-signals-for-lead-generation-agencies' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'Be a customer of every company in your client’s market. Email the ones with the problem.',
    sub: 'Bought signals are the same for every agency. Obsession’s customer agents ask every company for a demo, read what it sends a buyer and see the tools it really runs, every week, so you email the accounts with the problem your client fixes, the week it shows.',
    example: { chips: [] },
    flow: [
      {
        label: 'Your client’s market in',
        title: 'Every company, from your TAM build',
        items: ['Up to 5,000 companies', 'From Clay, a CSV or a signal', 'Watched every week'],
        foot: 'Thousands of companies, 1 list',
      },
      {
        label: 'Obsession',
        title: 'A customer of every one',
        items: ['Asks for a demo, declared as AI', 'Reads what it sends a buyer', 'Asks its chat bot', 'Sees the tools it really runs'],
        foot: 'Every fact kept with its receipt',
      },
      {
        label: 'Your segment out',
        title: 'The accounts with the problem, this week',
        items: ['Each with its fact and receipt', 'What changed since last week', 'As Clay columns or an Instantly list'],
        foot: 'Your copy, the right accounts',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-leadgen-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to set up your first market and tell you about Obsession.',
      roles: { question: 'Who do you run outbound for?', options: ['Our own agency', 'Our clients', 'Both'] },
      interest: 'prospect',
    },
    secondary: { label: 'See Prospect intelligence', to: '/recipes/prospect-intelligence' },
  },

  problem: {
    heading: 'Every agency buys the same signals.',
    sub: 'Funding, hiring and tech installs say a company can buy. They don’t say it has the problem your client fixes, and every rival agency can buy them too.',
    items: [
      {
        title: 'Your list is wide. The signals on it aren’t.',
        line: 'Any agency can buy new funding, leadership changes, job posts and tech installs, so your prospects hear the same “saw you raised” line every week.',
      },
      {
        title: 'A signal says they can buy, not that they have the problem',
        line: 'Funding says they can spend. It doesn’t say their demo requests wait a day for a person, that their chat bot can’t quote a price, or that they moved their helpdesk last week.',
      },
      {
        title: 'First hand, every week',
        line: 'These facts come from being each company’s customer, refreshed every week, each with its receipt. Your rivals can’t buy them, so they can’t send the same email.',
      },
    ],
    answer: 'As a customer of every company in the market, you get a dated fact about the problem your client fixes, per account, every week.',
  },

  fit: {
    heading: 'It starts and ends in your signal stack.',
    line: 'Their signals say who might buy. Ours say who has the problem.',
    items: [
      {
        title: 'Signals add companies',
        line: 'A new Clay row, a webhook from a signal tool such as treg, or one call from your own AI agent adds a company to the market we watch.',
      },
      {
        title: 'Obsession becomes its customer',
        line: 'A declared customer agent asks for a demo, signs up, asks the chat bot and reads which tools answer and send, then keeps every fact with its receipt.',
      },
      {
        title: 'The segment goes out',
        line: 'The accounts with your client’s problem come back as Clay columns or a new Instantly list, with what changed since last week.',
      },
    ],
  },

  /* The 3 ways an agency earns from it. Each label says whose campaign it is, so the cards carry no line of their own. */
  outputs: {
    heading: 'One feed, three ways it earns.',
    groups: [
      {
        items: [
          {
            label: 'Your own new business',
            title: 'Pitch each prospect its market, scored by the problem it fixes',
            example: 'A routing tool’s market: 412 of 5,000 companies answered a demo request after a day or more.',
          },
          {
            label: 'Every client campaign',
            title: 'Email only the accounts with the problem, the week it shows',
            example: 'A helpdesk vendor’s market: 37 companies moved their support chat to a new tool this month.',
          },
          {
            label: 'A line on the retainer',
            title: 'Sell the feed as part of each retainer',
            example: 'A client’s market, watched every week, with what changed and its receipts.',
          },
        ],
      },
    ],
  },

  fine: 'The markets, the companies, the counts and every example here are made up, and no real company’s result is shown. Clay, treg, Apollo and Instantly are trademarks of their owners, named to show where results can come from and go.',

  /* The questions an agency owner asks first. The first answer is meta.answer, word for word. */
  faq: {
    heading: 'What an agency asks first.',
    items: [
      {
        q: 'What are customer signals?',
        a: 'Customer signals are facts only a customer can see. Obsession becomes a customer of every company in your client’s market, every week, and hands you the accounts that have the problem your client fixes, each with its fact and receipt.',
      },
      {
        q: 'Couldn’t we build this ourselves, or give it to a VA?',
        a: 'A VA can fill 40 forms once. The feed is every company in a client’s market, every week, across demo forms, emails, chat bots and the tools they run, with the history of when each thing changed and a receipt for every fact. The record is shared across every Obsession customer, which is why it costs cents a company.',
      },
      {
        q: 'How is this different from Clay, treg or Apollo signals?',
        a: 'Those resell the same hiring, funding and tech install data to every agency. Customer signals come from being each company’s customer, so nobody can buy them and your rivals can’t send the same email. Use both: their signals say who might buy, ours say who has the problem.',
      },
      {
        q: 'Do we have to tell prospects what we saw?',
        a: 'No. The fact can just pick who gets your usual email, and when. Where it helps, the first line can be a fact the prospect can check.',
      },
      {
        q: 'Won’t the companies mind?',
        a: 'Every request says it’s an AI agent from Obsession and gives true answers. It asks rarely, books no meeting, and anyone who writes back gets a reply. Any company can ask us to keep our agents off its site.',
      },
      {
        q: 'Is it legal?',
        a: 'The agent says it’s AI and who it’s from in the request itself, uses public forms and pages only, gives true answers and solves no CAPTCHA. Check the rules where you sell with your own counsel; this is not legal advice.',
      },
      {
        q: 'Which clients fit?',
        a: 'Clients whose product fixes something a buyer sees: inbound routing and scheduling, chat and support, email and SMS, payments and checkout, and marketing or CRO agencies. For clients whose product a customer can’t see, the feed still gives timing: which tools each account just switched, and how fast it answers.',
      },
      {
        q: 'How do we know it works?',
        a: 'Let your own replies decide. Split your next send for one client at random: the feed’s accounts in one half, a control from the same market in the other, with the same copy. To see a 2x lift at a 1% to 2% positive reply rate, plan on about 1,100 to 2,300 companies a half; a smaller market reads as directional.',
      },
      {
        q: 'Can it run from Clay, treg or Instantly?',
        a: 'Yes. A new Clay row, a webhook from a signal tool such as treg, or a call from your own AI agent adds a company. The segment comes back as Clay columns or an Instantly list.',
      },
      {
        q: 'What does it cost, and who pays?',
        a: 'A price per company watched, in cents a month, passed through to the client whose market it is, with your margin on top. The first market is measured against your control before you commit.',
      },
    ],
  },

  final: {
    heading: 'Start with one client’s market.',
    sub: 'We become a customer of every company in one client’s market and hand you the accounts with the problem it fixes, each with its receipt. Your control group decides the rest.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-leadgen-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to set up your first market and tell you about Obsession.',
      roles: { question: 'Who do you run outbound for?', options: ['Our own agency', 'Our clients', 'Both'] },
      interest: 'prospect',
    },
    link: { label: 'See everything agents do for agencies', to: '/agencies' },
  },
}
