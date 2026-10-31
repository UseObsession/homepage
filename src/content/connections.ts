/* The words for the site's guide connections (lib/connections.ts): every recipe, use case and reader page lists the
   guides that teach its job, each with what a pass looks like. */

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
