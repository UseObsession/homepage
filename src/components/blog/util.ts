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
