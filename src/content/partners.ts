import type { ReaderId, ViewerFormatId } from './types'

/* Partner marks: the tools a run's results land in. Each mark is a "works with" claim, so the list is short, every
   placement is in this 1 file, and 1 rule decides them all: a mark appears only where the words beside it name that
   tool. A generic format (a PDF, an email, a webhook) gets no mark.
   - To take a logo off the site, delete its line in `partners`: every placement skips it, and the next
     `npm run partners` stops syncing its file.
   - A placement also skips a logo whose file is not in src/assets/partners yet (scripts/sync-partners.mjs writes them).
   - Never a company we test, a prospect, a rival or an AI assistant. Intercom, Zendesk and Gorgias stay out until the
     founders approve them.
   - Google's and Microsoft's product icons (Gmail, Google Sheets, Outlook, Teams) stay out: both companies forbid
     recolouring them, and in 1 colour they don't read. They come back only in full colour, with permission.
   - No lockup with a partner (Obsession × Clay): that implies an endorsement, which Clay's press terms rule out.

   `size` is the mark's height in px where it stands alone (an icon is 20). Wordmarks run shorter and wide or heavy
   shapes shorter still, so marks shown together carry about the same ink.
   `word` lets a mark stand in for its own name in a line of text (a How chip, a kicker): `x` is its x height and
   `base` its baseline, each as a share of its height, so it sets at the text's x height on the text's baseline.
   A mark without `word` never replaces its name (Salesforce's cloud has no letters to match). */

export type PartnerId = 'clay' | 'slack' | 'hubspot' | 'salesforce' | 'zapier' | 'make' | 'n8n'

export type Partner = { name: string; size: number; word?: { x: number; base: number } }

export const partners: Partial<Record<PartnerId, Partner>> = {
  clay: { name: 'Clay', size: 19, word: { x: 0.57, base: 0.8 } },
  slack: { name: 'Slack', size: 16, word: { x: 0.6, base: 0.856 } },
  hubspot: { name: 'HubSpot', size: 18, word: { x: 0.51, base: 0.84 } },
  salesforce: { name: 'Salesforce', size: 22 },
  zapier: { name: 'Zapier', size: 15.5, word: { x: 0.59, base: 0.83 } },
  make: { name: 'Make', size: 12, word: { x: 0.76, base: 0.985 } },
  n8n: { name: 'n8n', size: 20, word: { x: 0.405, base: 0.7 } },
}

/* The real run's formats (Home and the sample output): the tools a format's tab names, over its object. `note` is the
   words that back marks the tab doesn't name. */
export const outputPartners: Partial<Record<ViewerFormatId, { ids: PartnerId[]; note?: string }>> = {
  slack: { ids: ['slack'] },
  clay: { ids: ['clay'] },
  workflow: { ids: ['zapier', 'make', 'n8n'], note: 'via the webhook' },
}

/* A worked example built on 1 partner (by its path): its mark stands in for its name where the hero's flow says the
   list starts and ends there, and opens the claim where the facts come back into it. */
export const studyPartners: Record<string, PartnerId> = {
  '/use-cases/prospect-intelligence-with-clay': 'clay',
}

/* Home's how it works (sections/HowRail): a chip in its slices that names 1 of these shows its mark in place of the
   word: where the list comes from (Clay) and where a finding lands (Slack). */
export const howRailPartners: PartnerId[] = ['clay', 'slack']

/* Each reader's tools: in How's last step, a chip that names 1 of them shows its mark in place of the word. A tool
   listed here but named by no chip shows nothing (Sales' chip says "CRM", so HubSpot and Salesforce wait for it to
   name them). */
export const readerPartners: Partial<Record<ReaderId, PartnerId[]>> = {
  agencies: ['clay', 'slack'],
  sales: ['clay', 'slack', 'hubspot', 'salesforce'],
  marketing: ['slack', 'hubspot'],
  founders: ['clay', 'slack'],
}
