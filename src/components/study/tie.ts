/* A numeral never ends a line apart from its word ("48 hours", "300 brands"). */
export const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1\u00a0')
