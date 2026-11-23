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

/* A guide's topic, its colour and its anchor on /blog live in content/blogTopics.ts (23 Nov 2026). */
