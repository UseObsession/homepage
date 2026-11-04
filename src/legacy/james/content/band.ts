/* The panels of Home's band, James's band (src/legacy/james/components/PersonaBand). Since 4 Nov evening (Seun's order,
   "What would I use it for?") a panel is a use, not a reader: the 3 places the hero's sub names, in its order
   (prospects, clients, competitors), each named by what you do there. Your own company sits with clients, since finding
   the leaks is the same job in both. Before that the band had 4 readers (Marketing, Sales, Agencies, Developers), each
   saying where it sends its AI customers; before 4 Nov, 6 readers.
   Same fields as before where they still apply: the panel's name, its 1 line, its page (the use's main recipe) and the
   recipes it links. `reader` picks the panel's colour from the site's reader palette (styles/accents.css), the hue of
   the reader who uses it most, and `readers` links each reader page, so the 4 reader pages are still 1 click from Home. */
import type { RecipeId } from '../../../content/types'

export type BandReader = 'agencies' | 'founders' | 'sales' | 'marketing' | 'developers' | 'verify'

export type BandRole = {
  id: string
  reader: BandReader
  bandName: string
  bandLine: string
  page: string
  readers: { name: string; page: string }[]
  recipes: RecipeId[]
}

export const bandRoles: BandRole[] = [
  {
    id: 'prospects',
    reader: 'sales',
    bandName: 'Prospect with proof',
    bandLine: 'Open with what a prospect’s own customers get, before anyone hands you a login.',
    page: '/recipes/prospect-intelligence',
    readers: [
      { name: 'Sales teams', page: '/sales' },
      { name: 'Agencies', page: '/agencies' },
    ],
    recipes: ['prospect', 'account-watch', 'speed'],
  },
  {
    id: 'leaks',
    reader: 'agencies',
    bandName: 'Find the leaks',
    bandLine: 'Catch the broken code, the silent reminder and the unanswered request, at your own company or a client’s, before customers do.',
    page: '/recipes/mystery-shopper',
    readers: [
      { name: 'Agencies', page: '/agencies' },
      { name: 'Marketing teams', page: '/marketing' },
      { name: 'Developers', page: '/developers' },
    ],
    recipes: ['mystery', 'audit', 'adcheck', 'support-bot', 'voice-agent'],
  },
  {
    id: 'competitors',
    reader: 'marketing',
    bandName: 'Watch competitors',
    bandLine: 'See the emails, offers and prices competitors give new customers, including the ones not on their website.',
    page: '/recipes/competitor-tracking',
    readers: [
      { name: 'Marketing teams', page: '/marketing' },
      { name: 'Sales teams', page: '/sales' },
    ],
    recipes: ['competitor', 'email-sms', 'prices', 'ads', 'trial'],
  },
]
