import type { TeamPage } from './types'

/* Sales and RevOps (/sales): speed to lead and account research. A persona fills in the team's own forms as a new lead
   and times every reply (lead response checks), signs up at the accounts it sells to (prospect intelligence, account
   watch), and gives an AI SDR its own inbox and number. Product Marketing book, jobs 1, 2 and 5; Top 3 Buyers ranking
   (revenue teams at insurers, freight brokers and dealer groups; sales AI builders); Commercial View persona `revops`
   (22 Nov 2026). Every company is invented, at a .example address. */

const sub =
  'Obsession gives every AI agent its own inbox, phone number and browser, on one API and one bill. A persona, an AI agent with all three under one name, times every reply to a new lead. It also signs up at the accounts you sell to.'

export const team: TeamPage = {
  id: 'sales',
  name: 'Sales and RevOps',
  meta: {
    path: '/sales',
    title: 'AI agents for sales: speed to lead and account research',
    description:
      'Time your speed to lead on every form, chat and sales line, give each AI SDR its own inbox and number, and know every account before the call. Start free.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Sales and RevOps', path: '/sales' },
    ],
  },

  hero: { pill: 'Sales and RevOps', headline: 'AI agents for sales: every new lead timed, every account known before the call.', sub },

  scene: {
    steps: [
      { icon: 'persona', label: 'A persona fills in your demo form' },
      { icon: 'clock', label: 'It waits for the first reply' },
      { icon: 'phone', label: 'The email, text and call are timed' },
      { icon: 'record', label: 'Speed to lead lands in your CRM' },
    ],
    who: 'A test lead on the demo form at northwind.example',
    rows: [
      { at: 'Tue 21:40', kind: 'page.visited', text: 'northwind.example/demo · form sent · screenshot saved' },
      { at: 'Tue 21:41', kind: 'email.received', text: 'Thanks for your interest · automatic reply' },
      { at: 'Wed 09:12', kind: 'call.received', text: 'First call from a rep, 11 h 32 min after the form', tone: 'fail' },
      { at: 'Wed 09:13', kind: 'blueprint.result', text: 'Speed to lead sent to the CRM, by form' },
    ],
    caption: 'A lead sent at 21:40 heard from a person at 09:12 the next day. Northwind is an invented example.',
  },

  uses: {
    heading: 'Every lead answered, every account known.',
    line: 'For revenue teams at insurers, freight brokers, dealer groups and software companies, and founders building AI SDRs.',
    items: [
      {
        kit: 'test',
        name: 'Speed to lead',
        line: 'A persona fills in every form, chat and sales line as a new lead, weekends included. It times the first email, text and call.',
        blueprint: 'lead-leaks',
        pieces: ['personas', 'email', 'phone', 'browser'],
      },
      {
        kit: 'talk',
        name: 'Follow-up in minutes',
        line: 'Your follow-up agent calls, texts and emails each new lead from its own number and inbox, under one name.',
        pieces: ['phone', 'messaging', 'email', 'personas'],
      },
      {
        kit: 'watch',
        name: 'Prospect intelligence',
        line: 'A persona signs up at each prospect on your list and brings back what it sends its customers, for the first line.',
        blueprint: 'prospect-intelligence',
        pieces: ['personas', 'email', 'browser'],
      },
      {
        kit: 'watch',
        name: 'Account watch',
        line: 'A persona stays signed up at each account you sell to and dates every change on the account in your CRM.',
        blueprint: 'account-watch',
        pieces: ['personas', 'email', 'browser'],
      },
      {
        kit: 'build',
        name: 'An AI SDR’s own inbox and number',
        line: 'Give each AI sales rep its own inbox, number and browser for research, on one key and one bill.',
        pieces: ['email', 'phone', 'browser', 'personas'],
      },
      {
        kit: 'test',
        name: 'Your AI SDR, read as a prospect',
        line: 'Personas join your AI SDR’s lists and keep every email, text and call it sends, with the time.',
        blueprint: 'outbound-agent-check',
        pieces: ['personas', 'email', 'phone'],
      },
      {
        kit: 'test',
        name: 'Your AI sales agent',
        line: 'A persona shops with your AI sales agent and follows every answer up to payment.',
        blueprint: 'sales-agent-check',
        pieces: ['personas', 'browser'],
      },
    ],
  },

  blueprints: {
    heading: 'Blueprints sales teams start with.',
    line: 'No code. Name the forms or the accounts, and results land in Slack, a sheet or your CRM.',
    slugs: ['lead-leaks', 'prospect-intelligence', 'account-watch', 'outbound-agent-check', 'sales-agent-check', 'trial-teardown'],
  },

  prices: ['persona', 'inbox', 'number', 'sms', 'voice', 'browser'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Sales leaders and RevOps', gets: 'Speed to lead on every form and line, each week, with the leads nobody answered.', watch: 'Speed to lead, meetings booked, pipeline' },
      { role: 'SDR managers and account executives', gets: 'A dated fact about each account to open on, the morning of the call.', watch: 'Reply rates, opportunities, win rate' },
      { role: 'Founders building AI SDRs', gets: 'An inbox, a number and a browser for every AI rep you ship, on one key.', watch: 'Meetings booked per agent, reply rates, cost per agent' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/sales-intelligence-behind-the-login', '/use-cases/prospect-intelligence-with-clay'],
  },

  faq: {
    heading: 'Before your first test lead.',
    items: [
      {
        q: 'Doesn’t our CRM already show response time?',
        a: 'It shows when a rep logged the reply. A persona shows when the lead actually heard back, by email, text or call, including the leads nobody answered.',
        link: { label: 'See the blueprint', to: '/blueprints/lead-leaks' },
      },
      {
        q: 'Does it work with Clay and our CRM?',
        a: 'Yes. Send domains from Clay or your CRM, and each finding comes back to the same row through one signed webhook.',
      },
      {
        q: 'What does it cost?',
        a: 'Start on the Free plan, with no credit card. A blueprint is billed on the pieces it uses, at list rates.',
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does the persona say it’s an AI?',
        a: 'Yes, whenever it talks to a person, and who asked is never shown. It stops before payment and at any identity check.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
    ],
  },

  final: {
    heading: 'Time the first reply to your next lead.',
    capture: { kind: 'waitlist', source: 'team-sales', button: 'Start free', interest: 'speed' },
  },
}
