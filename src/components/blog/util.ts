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

/* Each hub reads in the colour of the reader it serves (styles/accents.css), and since 22 Nov 2026 the hubs are the kits
   (content/kitPaths.ts), so the blog tells the same story as the site: talking to customers in sales' hue, testing your
   own sign-up and agents in founders' indigo, building agent products and working behind logins in developers' cobalt,
   watching the market in marketing's violet, agencies in orchid, and training agents in tide. Colour marks the reader,
   never status. */
const HUB_READER: Record<string, string> = {
  'Talk to customers': 'sales',
  'Test sign-up and agents': 'founders',
  'Build agent products': 'developers',
  'Work behind logins': 'developers',
  'Watch the market': 'marketing',
  'For agencies': 'agencies',
  'Train and test agents': 'sales',
}
export const readerOf = (category: string) => HUB_READER[category] ?? 'founders'
