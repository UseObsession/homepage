import type { Recipe } from '../types'

/* Document chaser (/blueprints/document-chaser). Talk to customers, wave 2 (23 Nov 2026,
   _research/seo/blueprints-22nov/PLAN.md). The pull it copies: lenders who chase hundreds of thousands of applications
   a month for their documents by AI (none named on the page). Owns "document collection automation" and "document
   collection software" (Google suggestions, US and UK, 23 Nov; no page of ours held them).
   Rules kept on the page: every email and text says it's the business's AI assistant and how to reach a person; texts go
   only to applicants who gave their number and agreed to texts, STOP ends them; quiet hours 08:00 to 21:00 in the
   applicant's time zone; texting runs on paid plans with US texting registration (prices.ts registration), so the
   free run chases by email. It never asks for or checks an identity document (identity checks stay with the business).
   The run is an example (screen: docchase): Fernhill Lending, invented, at fernhill-lending.example. Priya's personal
   loan application arrives Mon 09:00; payslips Tue 08:12; a text Tue 18:30; her question Wed 12:40; 3 statements Wed
   13:05, October cut short at the 14th and asked for again; the full statement and a utility bill Thu 10:22, file
   complete. */

export const recipe: Recipe = {
  id: 'documents',
  slug: 'document-chaser',
  name: 'Document chaser',
  group: 'Talk to customers',
  line: 'Chases each applicant by email and text until every document is in, and checks each file the minute it arrives.',
  gets: 'Every file complete with nobody chasing, each document checked, and a daily list of who still owes what.',
  kit: [
    'An inbox that sends the list and receives every file',
    'A number for reminders and questions by text',
    'Your document list for each product, such as a loan or a mortgage',
    'Your reminder schedule and quiet hours',
    'Each file read and checked against the list',
    'A daily list of who’s missing what',
  ],
  build: {
    line: 'A new application starts the chase, and every document, reply and completed file comes back as an event your code can handle.',
    code: `await obsession.blueprints.run("document-chaser", {
  application: app.id,
  list: ["payslips:2", "bank-statements:3", "proof-of-address"],
})

obsession.on("blueprint.result", async (e) => {
  if (e.data.complete) await underwriting.send(e.data.files)
})`,
    events: [
      { kind: 'email.received', text: 'A reply from an applicant, with each document attached and the time it arrived.' },
      { kind: 'sms.received', text: 'A question or a reply by text, such as whether a screenshot counts.' },
      { kind: 'email.sent', text: 'Each request and reminder the assistant sends, in order.' },
      { kind: 'blueprint.result', text: 'Each document checked, passed or sent back with the reason, and the file once it’s complete.' },
    ],
  },

  meta: {
    path: '/blueprints/document-chaser',
    title: 'Chase every missing document: document collection automation',
    description:
      'Document collection automation for lenders and onboarding teams: each applicant is chased by email and text until every file arrives, and each is checked.',
    answer:
      'Document chaser emails each applicant the documents you need, then reminds them by email and text until every file arrives. It checks each file against your list and sends your team a daily list of who still owes what.',
    ogImage: '/og/document-chaser.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Document chaser', path: '/blueprints/document-chaser' },
    ],
  },

  hero: {
    headline: 'Chase every missing document by email and text until the file is complete.',
    sub: 'Document chaser emails each applicant the documents you need, then reminds them by email and text until every file arrives. It checks each file against your list and sends your team a daily list of who still owes what.',
    screen: 'docchase',
    capture: {
      kind: 'waitlist',
      source: 'recipe-documents-hero',
      button: 'Start free',
      interest: 'documents',
    },
  },

  buyer: 'For lenders, mortgage brokers, insurers, accountants and onboarding teams that wait on documents from applicants and clients.',
  unit: 'applicant chased to a complete file',
  per: 'team',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['Your document list emailed to each applicant', 'Reminders by email until every file arrives', 'Each file checked against your list'] },
    { name: 'Starter', includes: ['Reminders by text as well, with US texting registration', 'Applicants’ questions answered by email and text', 'A daily list of who’s missing what, in Slack'] },
    { name: 'Team', includes: ['Each file checked for dates, names and every page', 'Complete files sent to underwriting, your CRM or a folder', 'Completion rate and days to complete, each week'] },
    { name: 'Multi-team', includes: ['Each team’s lists and schedules kept apart', 'One daily list across every team', 'Each file sent to the right team’s folder'] },
  ],

  run: {
    tab: 'Loan applications, every day',
    recipe: 'documents',
    task: 'For every new loan application at Fernhill Lending, email the list of documents and remind by email and text until each one arrives. Check each file, and send the team the day’s missing list at 09:00.',
    targets: 'Fernhill Lending’s new personal loan applications, from its application form',
    journey: ['Email the list', 'Remind by text and email', 'Check each file', 'Hand the complete file over'],
    schedule: 'Email on days 1, 3 and 5, texts on days 2 and 4, 08:00 to 21:00 in the applicant’s time zone',
    report: 'Who’s missing what, in Slack at 09:00',
    kit: ['1 inbox: documents@fernhill-lending.example', '1 number for texts, registered', 'The personal loan document list', 'Underwriting’s shared folder'],
    events: [
      { time: 'Mon 09:00', text: 'Priya’s application arrives. Fernhill Lending’s AI assistant emails her the list: 2 recent payslips, 3 months of bank statements and a proof of address.' },
      { time: 'Tue 08:12', text: 'She replies with 2 payslips attached. Both pass: her name, September and October, every page readable.' },
      { time: 'Tue 18:30', text: 'A text from the assistant: “Thanks, Priya, your payslips are in. We still need 3 months of bank statements and a proof of address.”' },
      { time: 'Wed 12:40', text: 'Priya texts back: “Does a screenshot from my banking app work?” The assistant explains that a PDF statement shows the account name and dates, and how to download one.' },
      { time: 'Wed 13:05', text: '3 statements arrive by email. August and September pass. October stops on the 14th, so the assistant asks for the full month.' },
      { time: 'Thu 10:22', text: 'The full October statement and a utility bill arrive. Every document passes, and the file goes to underwriting.' },
    ],
    finding: 'Priya’s file was complete by Thursday at 10:22, and nobody on the team sent a reminder. The October statement that stopped on the 14th went back for the full month within a minute of arriving.',
    fix: 'Underwriting got the complete file at 10:22. The 09:00 list in Slack showed every other open file and the document each one still needs.',
    ledger: 'Every email, text and file kept with the time it arrived, and the check on each file.',
  },

  steps: [
    {
      title: 'Set the list',
      line: 'The documents each product needs, such as a personal loan, a mortgage or a claim, and what counts for each: dates, pages and whose name.',
    },
    {
      title: 'Connect new applications',
      line: 'From your application form, your CRM or a webhook, with each applicant’s email and, if they agreed to texts, their number.',
    },
    {
      title: 'It chases on your schedule',
      line: 'The list by email, then reminders by email and text, and answers to questions, until every file is in.',
    },
    {
      title: 'Complete files land with your team',
      line: 'Each file in your folder, CRM or underwriting queue, with a daily list of who still owes what in Slack.',
    },
  ],

  checks: [
    {
      group: 'Each file, as it arrives',
      items: [
        { title: 'The right document', line: 'A payslip where you asked for a payslip, and a bank statement where you asked for one.' },
        { title: 'The right dates', line: 'The months you asked for, every day of each, with nothing cut short.' },
        { title: 'The right name', line: 'The applicant’s name on each document, matching the application.' },
        { title: 'Readable', line: 'Every page there and legible, and photos of paper checked for cut-off edges.' },
      ],
    },
    {
      group: 'The chasing',
      items: [
        { title: 'Says it’s an AI', line: 'Every email and text says it’s your business’s AI assistant, and how to reach a person.' },
        { title: 'Texts with consent', line: 'Texts go only to applicants who gave you their number and agreed to texts. STOP ends them.' },
        { title: 'Your schedule', line: 'Reminders on the days you set, from 08:00 to 21:00 in each applicant’s time zone.' },
        { title: 'Questions answered', line: 'What counts, how to download a statement and where to send it, from your own answers.' },
      ],
    },
    {
      group: 'When it stops',
      items: [
        { title: 'File complete', line: 'The chasing stops the minute the last document passes.' },
        { title: 'A person takes over', line: 'After the last reminder, or when an applicant asks for a person, the file goes to your team.' },
        { title: 'Where files go', line: 'Each file goes only where you set: your folder, your CRM or your underwriting system.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every file comes back complete, with each document checked.',
    items: [
      { format: 'A daily list', line: 'Who still owes what, at 09:00, in Slack, a sheet or email.' },
      { format: 'Each document', line: 'The file itself, the time it arrived and whether it passed.' },
      { format: 'What was wrong', line: 'A month cut short, a missing page or the wrong name, and what was asked for next.' },
      { format: 'Every reminder', line: 'Each email and text sent, and every reply, in order.' },
      { format: 'Complete files', line: 'Sent to your folder, CRM or underwriting the minute the last document passes.' },
      { format: 'Completion rate', line: 'Applications completed, days to complete and where applicants drop off, each week.' },
    ],
  },

  settings: [
    { k: 'Applications', v: 'From your form, your CRM, a sheet or a webhook' },
    { k: 'Document lists', v: 'One for each product, such as a personal loan or a mortgage, with what counts for each document' },
    { k: 'Reminders', v: 'Email on days 1, 3 and 5, and texts on days 2 and 4, or the schedule you set' },
    { k: 'Quiet hours', v: 'Never before 08:00 or after 21:00 in the applicant’s time zone' },
    { k: 'Texts', v: 'Only to applicants who agreed to texts, on paid plans with US texting registration' },
    { k: 'The assistant', v: 'Says it’s your business’s AI assistant, and how to reach a person' },
    { k: 'Hand-off', v: 'To your team after the last reminder, or when an applicant asks for a person' },
    { k: 'Where it lands', v: 'Your folder, CRM, Slack, a sheet or a webhook' },
  ],

  table: {
    heading: 'Your team chases paperwork between everything else. The assistant chases it on schedule.',
    cols: ['By hand', 'With Document chaser'],
    rows: [
      { label: 'The first request', values: ['When someone gets to it', 'The minute the application arrives'] },
      { label: 'Reminders', values: ['When someone remembers', 'On your schedule until every file is in'] },
      { label: 'A statement cut short', values: ['Found at underwriting', 'Sent back the minute it arrives'] },
      { label: '“Does a screenshot work?”', values: ['Answered the next day', 'Answered by text in minutes'] },
      { label: 'Who owes what', values: ['A spreadsheet kept by hand', 'A list in Slack every morning'] },
      { label: 'Days to a complete file', values: ['Guessed', 'Counted for every applicant'] },
    ],
  },

  faq: {
    heading: 'The assistant chases until every file is in, and says it’s an AI.',
    items: [
      {
        q: 'How does document collection automation work?',
        a: 'A new application reaches Obsession from your form, your CRM or a webhook. The assistant emails the list, then reminds by email and text on your schedule. It reads each file as it arrives, checks it against the list and asks again for anything missing or wrong.',
      },
      {
        q: 'What does Document chaser check in each document?',
        a: 'That it’s the document you asked for, covers the dates you asked for, carries the applicant’s name and has every page readable. A statement that stops mid-month goes back the minute it arrives.',
      },
      {
        q: 'Does the assistant say it’s an AI?',
        a: 'Yes. Every email and text says it’s your business’s AI assistant, and how to reach a person on your team.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'Can it text applicants?',
        a: 'Yes, on a paid plan, to applicants who gave you their number and agreed to texts. US carriers require texting registration, which Obsession files for you. On the Free plan it chases by email.',
        link: { label: 'What 10DLC registration involves', to: '/blog/10dlc-registration' },
      },
      {
        q: 'Where do the documents go?',
        a: 'Only where you set: a shared folder, your CRM, your underwriting system or a webhook. Each file is also kept in your event log with the time it arrived.',
      },
      {
        q: 'Which teams use Document chaser?',
        a: 'Lenders and mortgage brokers chase payslips and statements with it, and insurers chase claim and policy documents. Accountants use it for tax paperwork, at thousands of applicants and clients a month.',
        link: { label: 'See AI agents for insurance agencies', to: '/use-cases/ai-agent-for-insurance' },
      },
      {
        q: 'What happens when an applicant stops replying?',
        a: 'After the last reminder the file goes to your team with every message sent and every document received, so a person can pick it up where the assistant left off.',
      },
      {
        q: 'What does Document chaser cost?',
        a: 'It’s billed on the pieces it uses, at list rates: an inbox, a number for texts, and the emails and texts it sends. An applicant who sends everything on day 1 costs far less than one who needs every reminder.',
        link: { label: 'See inboxes for AI agents', to: '/email' },
      },
    ],
  },

  final: {
    heading: 'Get every document in, with nobody on your team chasing.',
    sub: 'Try it on the Free plan: chase 10 applicants by email, then watch your application completion and drop-off.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-documents-final',
      button: 'Start free',
      interest: 'documents',
    },
    link: { label: 'More blueprints to talk to customers', to: '/blueprints/talk-to-customers' },
  },
}
