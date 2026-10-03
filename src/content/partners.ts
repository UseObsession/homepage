import type { ReaderId, ViewerFormatId } from './types'

/* Partner marks: the tools a run's results land in, shown only where a page says they land there. Each mark is a
   "works with" claim, so the list is short and every placement is here, in 1 file.
   - To take a logo off the site, delete its line in `partners`: every placement skips it. (Deleting its file in
     Brand/Partner logos and running `npm run partners` does the same.)
   - A placement also skips a logo whose file is not in src/assets/partners yet (scripts/sync-partners.mjs writes them).
   - Never a company we test, a prospect, a rival or an AI assistant. Intercom, Zendesk and Gorgias stay out until the
     founders approve them.
   `size` is the mark's height in px where an icon stands 20px tall: wordmarks run shorter and wide shapes shorter
   still, so every mark carries about the same weight (optical sizing, set by eye in both themes). */

export type PartnerId =
  | 'clay'
  | 'hubspot'
  | 'salesforce'
  | 'slack'
  | 'google-sheets'
  | 'gmail'
  | 'outlook'
  | 'microsoft-teams'
  | 'zapier'
  | 'make'
  | 'n8n'
  | 'webhook'

export type Partner = { name: string; size: number }

export const partners: Partial<Record<PartnerId, Partner>> = {
  clay: { name: 'Clay', size: 19 },
  hubspot: { name: 'HubSpot', size: 19 },
  salesforce: { name: 'Salesforce', size: 24 },
  slack: { name: 'Slack', size: 18 },
  'google-sheets': { name: 'Google Sheets', size: 21 },
  gmail: { name: 'Gmail', size: 17 },
  outlook: { name: 'Outlook', size: 21 },
  'microsoft-teams': { name: 'Microsoft Teams', size: 19 },
  zapier: { name: 'Zapier', size: 16 },
  make: { name: 'Make', size: 15 },
  n8n: { name: 'n8n', size: 19 },
  /* Not a logo: the design system's own glyph for "any endpoint". */
  webhook: { name: 'Webhook', size: 20 },
}

/* The real run's formats (Home and the sample output): each format's own tools, in the order its tab names them. */
export const outputPartners: Partial<Record<ViewerFormatId, PartnerId[]>> = {
  email: ['gmail', 'outlook'],
  slack: ['slack'],
  clay: ['google-sheets', 'clay'],
  webhook: ['webhook'],
  workflow: ['zapier', 'make', 'n8n'],
}

/* A worked example built on 1 partner (by its path): the hero's lockup, and the mark where its facts come back. */
export const studyPartners: Record<string, PartnerId> = {
  '/use-cases/prospect-intelligence-with-clay': 'clay',
}

/* Each reader's own tools, on the line where How says the results land (its last step). */
export const readerPartners: Partial<Record<ReaderId, PartnerId[]>> = {
  agencies: ['clay', 'slack', 'google-sheets'],
  sales: ['hubspot', 'salesforce', 'slack'],
  marketing: ['slack', 'google-sheets', 'hubspot'],
  founders: ['slack', 'gmail', 'google-sheets'],
  developers: ['webhook', 'zapier', 'make', 'n8n'],
}
