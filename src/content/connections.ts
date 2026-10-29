/* The words for the site's connections (lib/connections.ts), 29 Oct 2026: the plan is
   _research/seo/recommend/TIE_TOGETHER_29oct.md. Every guide, recipe, use case and reader page ends on the same 5 pages
   that explain Obsession in depth (what an AI customer is, how one works, a real report, what every AI customer will
   and won't do, how Obsession compares), so a reader, a search engine or an AI assistant that lands on any one page can
   reach the whole picture in 1 click. Each line leads with what the reader gets, in the live pages' own words. */

export const howItWorks = {
  name: 'How Obsession works',
  line: 'Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof.',
  rows: [
    {
      label: 'What an AI customer is',
      to: '/blog/ai-customers',
      line: 'An AI agent that becomes a real customer of a company, with its own inbox, phone number and browser, and keeps what the company sends and shows it as evidence.',
    },
    {
      label: 'How AI customers work',
      to: '/blog/how-ai-customers-work',
      line: 'How each one signs up, waits until the company acts, and keeps the email, page or price exactly as it arrived.',
    },
    {
      label: 'A real report',
      to: '/sample-output',
      line: 'A real store check from September 2026: 4 customers, every inbox watched for 48 hours, and what never arrived.',
    },
    {
      label: 'What every AI customer will and won’t do',
      to: '/agents',
      line: 'It says it’s an AI when it talks to a person, never uses fake payment details, and keeps every receipt exactly as it arrived.',
    },
    {
      label: 'Worked examples',
      to: '/use-cases',
      line: 'One job run end to end for a store, an agency or a sales team, from the set up to what lands in their own tools.',
    },
    {
      label: 'Obsession and other tools',
      to: '/compare',
      line: 'Other tools read the outside of a company. Obsession signs up and stays its customer, so it sees what comes after the click.',
    },
  ],
}

/* The guides block's name and line, by where it sits. */
export const guidesCopy = {
  recipe: { name: 'Guides for this job', line: 'Step-by-step guides for this job, each with what a pass looks like.' },
  useCase: { name: 'Guides for this job', line: 'Step-by-step guides behind this use case, each with what a pass looks like.' },
  reader: { name: 'Guides for you', line: 'Step-by-step guides for the work this page covers, each with what a pass looks like.' },
}

/* Which guides each reader page shows: its blog hub, then any guide that links the page itself (lib/connections.ts). */
export const readerHubs: Record<string, string[]> = {
  '/agencies': ['For agencies'],
  '/marketing': ['Watch other companies'],
  '/verify': ['Check your AI agents'],
  '/sales': [],
  '/developers': [],
}
