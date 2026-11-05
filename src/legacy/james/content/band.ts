/* The panels of Home's band, James's band (src/legacy/james/components/PersonaBand). Since 4 Nov evening (Seun's order,
   "What would I use it for?") a panel is a use, not a reader: the 3 places the hero's sub names, in its order
   (prospects, clients, competitors), each named by what you do there. Your own company sits with clients, since finding
   the leaks is the same job in both. The names and lines are Seun's from his Home draft (4 Nov), the prospect and leaks
   lines cut to the length of the competitors line; their examples (a basket with no email after it, support 31 hours
   late against a promised 24) are already on the receipt above the band. Before that the band had 4 readers (Marketing, Sales, Agencies, Developers), each
   saying where it sends its AI customers; before 4 Nov, 6 readers.
   Since 5 Nov (James: Obsession is the index, and AI customers are how it fills; COPY.md) each line says what you pull from the index, not
   what an AI customer sees, and its examples reach past stores (a software welcome email, a bank's chat); the leaks panel
   opens the website audit, not the mystery shopper.
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
    bandLine: 'Before you pitch a company, pull what its new customers get, and open with the email or page that shows the problem.',
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
    bandName: 'Find your revenue leaks',
    bandLine: 'A welcome link that opens a closed site, a chat quoting the wrong rate, a reminder that never came. Know the day it starts, at your company or a client’s.',
    page: '/recipes/website-audit',
    readers: [
      { name: 'Agencies', page: '/agencies' },
      { name: 'Marketing teams', page: '/marketing' },
      { name: 'Developers', page: '/developers' },
    ],
    recipes: ['audit', 'mystery', 'adcheck', 'support-bot', 'voice-agent'],
  },
  {
    id: 'competitors',
    reader: 'marketing',
    bandName: 'Watch your competitors',
    bandLine: 'Every email, offer and price your rivals give a new customer, including the ones never on their websites.',
    page: '/recipes/competitor-tracking',
    readers: [
      { name: 'Marketing teams', page: '/marketing' },
      { name: 'Sales teams', page: '/sales' },
    ],
    recipes: ['competitor', 'email-sms', 'prices', 'ads', 'trial'],
  },
]
