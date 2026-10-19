/* The panels of Home's persona band, James's band (src/legacy/james/components/PersonaBand), with 4 panels in 2 rows of
   2 since the October rewrite (COPY.md, "One taxonomy"): Founders folded into Sales and Developers, and Check your AI
   agents became a job (/verify), not a reader. Before that it had 6 panels instead of his
   4. Same fields as his `roles` (content/roles.ts, which stays as he wrote it): the panel's name, its 1 line, its page
   and the chips along its foot. `reader` picks the panel's colour from the site's reader palette (styles/accents.css):
   the 5 readers each have their hue, and the product's own panel, Check your AI agents, is neutral (bone on ink, ink on
   paper), never a hue of its own. His four lines for Agencies, Sales teams and Marketing teams are kept as he wrote them;
   his Founders and developers line is now Developers' alone. */
export type BandReader = 'agencies' | 'founders' | 'sales' | 'marketing' | 'developers' | 'verify'

export type BandRole = {
  id: BandReader
  bandName: string
  bandLine: string
  page: string
  ways: string[]
}

export const bandRoles: BandRole[] = [
  {
    id: 'marketing',
    bandName: 'Marketing teams',
    bandLine: 'Every rival ad, email and offer, and your own funnel, seen as a customer.',
    page: '/marketing',
    ways: ['Recipes', 'Your own agent'],
  },
  {
    id: 'sales',
    bandName: 'Sales teams',
    bandLine: 'Know what each account and rival does to its customers before you call.',
    page: '/sales',
    ways: ['Recipes', 'Your own agent'],
  },
  {
    id: 'agencies',
    bandName: 'Agencies',
    bandLine: 'Check every client and prospect as a customer would.',
    page: '/agencies',
    ways: ['Recipes', 'Your own agent'],
  },
  {
    id: 'developers',
    bandName: 'Developers',
    bandLine: 'Give your agents a customer at every company: MCP, API and an open source core.',
    page: '/developers',
    ways: ['MCP and API', 'Open source'],
  },
]
