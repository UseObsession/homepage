import { plans, prices, registration } from '../../prices'
import type { TeamPage } from '../types'

/* AI agent for higher education (/use-cases/ai-agent-for-higher-education, 23 Nov 2026): range, from one admissions
   office to a system of campuses. Modelled on the admissions and enquiry jobs in the Product Marketing book (voice and
   text follow-up, document chasing, booking, portals, competitor watching) and the Top 3 Buyers ranking. No competitor
   or competitor customer is named and no figure is borrowed. Northvale University is invented, at a .example address. */

const path = '/use-cases/ai-agent-for-higher-education'
const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession gives the AI agent in your admissions office its own phone number, inbox and browser, on one API and one bill. A persona holds all three under one name, so it answers every enquiry, chases documents and books interviews, from one office to a system of campuses.'

export const useCase: TeamPage = {
  id: 'ai-agent-for-higher-education',
  kind: 'case',
  name: 'AI agent for higher education',
  card: 'Every enquiry answered, documents chased and applicants followed up.',
  meta: {
    path,
    title: 'AI agent for higher education: admissions on every channel',
    description:
      'An AI agent for universities on its own number, inbox and browser: it answers every enquiry, chases documents and books interviews. Start free.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agent for higher education', path },
    ],
  },

  hero: { pill: 'Higher education', headline: 'AI agent for higher education: every enquiry answered, every applicant followed up.', sub },

  scene: {
    steps: [
      { icon: 'chat', label: 'An applicant asks about a missing document' },
      { icon: 'mail', label: 'The agent sends the checklist' },
      { icon: 'check', label: 'The upload arrives' },
      { icon: 'record', label: 'Admissions sees it complete' },
    ],
    who: 'Ellis, the admissions agent at Northvale University',
    note: 'Transcript chased, file complete by Friday',
    fleet: '8 faculties · 24,000 applicants this cycle',
    rows: [
      { at: 'Mon 09:12', kind: 'email.received', text: 'Applicant: “Which documents do you still need from me?”' },
      { at: 'Mon 09:12', kind: 'email.sent', text: 'Checklist sent from the admissions inbox · transcript and reference still due' },
      { at: 'Wed 16:30', kind: 'sms.sent', text: 'Reminder by text: transcript due Friday · link to upload' },
      { at: 'Thu 11:05', kind: 'blueprint.result', text: 'Transcript received · file marked complete', tone: 'ok' },
    ],
    caption: 'An applicant’s missing transcript chased by email and text until it arrived. Northvale University is an invented example.',
  },

  uses: {
    heading: 'Every enquiry answered, every applicant followed up, every deadline kept.',
    line: 'For admissions and recruitment teams at colleges, universities and university systems running an AI agent for admissions, and the developers who build it.',
    items: [
      {
        kit: 'talk',
        name: 'Enquiries answered at once',
        line: 'Your agent answers the call, text and email within minutes, at night and in clearing, and logs each question.',
        pieces: ['phone', 'email', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Follow-up on every lead',
        line: 'A prospective student who fills in the form gets a call back and a text from the same name, in minutes.',
        blueprint: 'speed-to-lead-callback',
        pieces: ['phone', 'messaging', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Document chasing',
        line: 'It asks for the missing transcript or reference by email and text until it lands, and marks the file complete.',
        blueprint: 'document-chaser',
        pieces: ['email', 'phone', 'personas'],
      },
      {
        kit: 'talk',
        name: 'Interviews, open days and deadlines',
        line: 'It books the interview or open day, texts the reminder, and warns applicants a week before each deadline.',
        blueprint: 'appointment-reminders',
        pieces: ['phone', 'email', 'personas'],
      },
      {
        kit: 'talk',
        name: 'International applicants on WhatsApp',
        line: 'Applicants abroad message the same agent on WhatsApp, in their own time zone, under the university’s name.',
        pieces: ['messaging', 'personas'],
      },
      {
        kit: 'test',
        name: 'Your own application, tested as a new applicant',
        line: 'Each night a persona signs in to your applicant portal and times the sign-in code from sending to arrival.',
        blueprint: 'sign-in-code-check',
        pieces: ['personas', 'browser', 'email', 'phone'],
      },
      {
        kit: 'watch',
        name: 'Other universities’ offers and deadlines',
        line: 'Personas subscribe to other universities and keep each open day, deadline and scholarship offer, with the date.',
        blueprint: 'competitor-tracking',
        pieces: ['personas', 'browser', 'email'],
      },
      {
        kit: 'portals',
        name: 'Application status behind a login',
        line: 'It signs in with the login it is given, reads each applicant’s status and records it beside the file.',
        pieces: ['browser', 'personas'],
      },
      {
        kit: 'build',
        name: 'Admissions software, built on one key',
        line: 'You give each university you serve a number, an inbox and a browser, under your brand on Enterprise.',
        pieces: ['phone', 'email', 'browser', 'personas'],
      },
    ],
  },

  sizes: {
    heading: 'One office, one university or a whole system.',
    line: 'The same agent at every size, each with its own identity. The cost below is worked out from list prices for one month.',
    items: [
      {
        label: 'One admissions office',
        agents: '1 agent · 2 numbers · one event log',
        jobs: ['Answer every enquiry', 'Chase missing documents', 'Book interviews'],
        usage: { number: 2, inbox: 3, email: 4000, sms: 1500, voice: 600, personaVoice: 600, browser: 20, register: 1 },
      },
      {
        label: 'A university with 8 faculties',
        agents: '8 agents · 8 numbers · one event log',
        jobs: ['Follow up every lead in minutes', 'Remind applicants of deadlines', 'Test the application as a new applicant'],
        usage: { number: 8, inbox: 16, email: 30000, sms: 12000, voice: 4000, personaVoice: 4000, browser: 120, register: 1 },
      },
      {
        label: 'A system of 40 campuses',
        agents: '40 agents · 40 numbers · 80 inboxes · one event log',
        jobs: ['An agent for every campus, each with its own number', 'Watch other universities’ offers', 'International applicants on WhatsApp'],
        usage: { number: 40, inbox: 80, email: 200000, sms: 90000, voice: 30000, personaVoice: 30000, browser: 600, register: 1 },
      },
    ],
  },

  blueprints: {
    heading: 'Follow up every lead, chase every document, and test your own application.',
    line: 'No code. Name the enquiry form, the portal or the other universities, and every answer lands in Slack, a sheet or your CRM.',
    slugs: ['speed-to-lead-callback', 'document-chaser', 'appointment-reminders', 'sign-in-code-check', 'competitor-tracking'],
  },

  prices: ['number', 'voice', 'sms', 'register', 'inbox', 'browser'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Directors of admissions', gets: 'Every enquiry and application followed up, with the day’s calls, texts and emails in one timeline.', watch: 'Enquiry to application rate, time to first reply, applications complete by deadline' },
      { role: 'Recruitment and marketing leads', gets: 'Every lead called back in minutes, and a record of what other universities offer prospective students.', watch: 'Cost per enrolled student, open day attendance, yield' },
      { role: 'Heads of student services and IT', gets: 'An agent for each campus on one bill, with one event log across the system.', watch: 'Campuses live, response time, cost per campus' },
      { role: 'Developers building admissions software', gets: 'A number, an inbox and a browser for each university, under your brand on Enterprise.', watch: 'Universities live, messages sent, cost per university' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/ai-receptionist', '/use-cases/otp-testing'],
  },

  faq: {
    heading: 'Before your agent answers its first applicant.',
    items: [
      {
        q: 'What does an AI agent for a university cost?',
        a: `Start on the Free plan, with no credit card: it includes a number that receives calls and texts. To text applicants and call them back, paid plans are ${orList(fees)} a month, and usage is billed at list rates. A number is ${prices.number.amount} a month, calls ${prices.voice.amount} a minute and texts ${prices.sms.amount} each. ${registration.line}`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does the agent tell applicants it’s an AI?',
        a: 'Yes, whenever it talks to a person, by phone, text, email or WhatsApp. It texts and calls only people who gave the university their number, and it stops at any identity check. This is general information, not legal advice: student data rules differ by country and institution, so check yours before you share applicant records.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How do results reach our admissions system?',
        a: 'Subscribe once to call.ended, sms.received and email.received. Each enquiry, reply and completed file reaches your CRM or student record system through one signed webhook, and the same events can post to Slack or a sheet.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Can we run it across many campuses?',
        a: 'Yes. Each campus gets its own persona, number and inbox, and all of them write to one event log. You start with one office and add faculties and campuses one at a time on the same bill.',
        link: { label: 'See Enterprise', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Give your admissions office’s agent its own number.',
    capture: { kind: 'waitlist', source: 'case-ai-agent-for-higher-education', button: 'Start free', interest: 'callback' },
  },
}
