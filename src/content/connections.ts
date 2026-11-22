import { kitLinks } from './kitPaths'
/* The words for the site's guide connections (lib/connections.ts): every recipe, use case and reader page lists the
   guides that teach its job. The name only: the guides' titles say the rest (founder, 22 Nov 2026). */

export const guidesCopy: Record<'recipe' | 'useCase' | 'reader', { name: string; line?: string }> = {
  recipe: { name: 'Guides for this job' },
  useCase: { name: 'Guides for this job' },
  reader: { name: 'Guides for you' },
}

/* Which guides each reader page shows: its blog hub, then any guide that links the page itself (lib/connections.ts). */
export const readerHubs: Record<string, string[]> = {
  '/agencies': ['For agencies'],
  '/marketing': ['Watch the market'],
  '/verify': ['Test sign-up and agents'],
  '/sales': ['Talk to customers'],
  '/developers': ['Build agent products', 'Work behind logins'],
  /* Each type of blueprint shows its own job's guides: the blog's hubs carry the six job names. */
  ...Object.fromEntries(kitLinks.map((k) => [k.path, [k.name]])),
}
