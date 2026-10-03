/* The panels of Home's persona band, James's band (src/legacy/james/components/PersonaBand) with 6 panels instead of his
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
    id: 'agencies',
    bandName: 'Agencies',
    bandLine: 'Check every client and prospect as a customer would.',
    page: '/agencies',
    ways: ['Recipes', 'Type a task'],
  },
  {
    id: 'founders',
    bandName: 'Founders',
    bandLine: 'Test every release and every journey as a customer would.',
    page: '/founders',
    ways: ['Recipes', 'Type a task'],
  },
  {
    id: 'sales',
    bandName: 'Sales teams',
    bandLine: 'Know what each account does before you call.',
    page: '/sales',
    ways: ['Recipes', 'Type a task'],
  },
  {
    id: 'marketing',
    bandName: 'Marketing teams',
    bandLine: 'Every email, text, ad and offer your rivals send.',
    page: '/marketing',
    ways: ['Recipes', 'Type a task'],
  },
  {
    id: 'developers',
    bandName: 'Developers',
    bandLine: 'Real customer journeys, from your own code.',
    page: '/developers',
    ways: ['API and SDK', 'Type a task'],
  },
  {
    id: 'verify',
    bandName: 'Check your AI agents',
    bandLine: 'Your support bot, receptionist and AI SDR, checked as a customer every day.',
    page: '/verify',
    ways: ['8 checks', 'Free first check'],
  },
]
