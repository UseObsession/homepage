/* The panels of Home's persona band, James's band (src/legacy/james/components/PersonaBand), with 4 panels in 2 rows of
   2 since the October rewrite (COPY.md, "One taxonomy"): Founders folded into Sales and Developers, and Check your AI
   agents became a job (/verify), not a reader. Before that it had 6 panels instead of his
   4. Same fields as his `roles` (content/roles.ts, which stays as he wrote it): the panel's name, its 1 line, its page
   and the chips along its foot. `reader` picks the panel's colour from the site's reader palette (styles/accents.css):
   the 5 readers each have their hue, and the product's own panel, Check your AI agents, is neutral (bone on ink, ink on
   paper), never a hue of its own. His four lines for Agencies, Sales teams and Marketing teams are kept as he wrote them;
   his Founders and developers line is now Developers' alone. Since 4 Nov each panel also says where that reader sends
   its AI customers and links the recipes that start there, in place of the chips naming the ways in: the Kinds section
   ("Send an AI customer anywhere") folded into the band (option 5 of obsession/targets-options.html), so the 13 recipes
   it linked are filed here under the reader who uses them. */
import type { RecipeId } from '../../../content/types'

export type BandReader = 'agencies' | 'founders' | 'sales' | 'marketing' | 'developers' | 'verify'

export type BandRole = {
  id: BandReader
  bandName: string
  bandLine: string
  page: string
  sendsTo: string
  recipes: RecipeId[]
}

export const bandRoles: BandRole[] = [
  {
    id: 'marketing',
    bandName: 'Marketing teams',
    bandLine: 'Send an AI customer to every competitor, and through your own funnel.',
    page: '/marketing',
    sendsTo: 'Competitors and your own funnel',
    recipes: ['competitor', 'email-sms', 'prices', 'ads', 'adcheck'],
  },
  {
    id: 'sales',
    bandName: 'Sales teams',
    bandLine: 'Know what each account and competitor does to its customers before you call.',
    page: '/sales',
    sendsTo: 'Prospects and accounts',
    recipes: ['prospect', 'account-watch', 'trial', 'speed'],
  },
  {
    id: 'agencies',
    bandName: 'Agencies',
    bandLine: 'Send an AI customer to every client and prospect.',
    page: '/agencies',
    sendsTo: 'Clients and prospects',
    recipes: ['mystery', 'audit', 'prospect'],
  },
  {
    id: 'developers',
    bandName: 'Developers',
    bandLine: 'Give your agents an AI customer at every company: MCP, API and an open source core.',
    page: '/developers',
    sendsTo: 'Any company, and your own AI agents',
    recipes: ['support-bot', 'voice-agent', 'outbound-agent'],
  },
]
