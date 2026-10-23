/* The source's host, as a reader would say it: "ons.gov.uk". */
export const hostOf = (href: string) => {
  try {
    return new URL(href).hostname.replace(/^www\./, '')
  } catch {
    return href
  }
}

/* A numeral never ends a line apart from its word. */
export const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1\u00a0')

/* A blog hub's anchor on /blog: "Mystery shopping" > mystery-shopping. */
export const categoryId = (c: string) => c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

/* Each hub reads in the colour of the reader it serves (styles/accents.css): stores in founders' indigo, rivals in
   marketing's violet, agencies in orchid, AI agents in developers' cobalt. Colour marks the reader, never status. */
const HUB_READER: Record<string, string> = {
  'Check your own journeys': 'founders',
  'Watch other companies': 'marketing',
  'For agencies': 'agencies',
  'Check your AI agents': 'developers',
}
export const readerOf = (category: string) => HUB_READER[category] ?? 'founders'
