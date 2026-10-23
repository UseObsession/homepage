import type { BlogPost } from '../content/blog/types'
import { formatDate } from '../content/resources'

type Source = BlogPost['sources'][number]

/* Where a post's links sit: every word a reader sees, with the links written into it ([words](url)) and each stat's. */
const textOf = (post: BlogPost) => JSON.stringify([post.answer, post.dek, post.blocks])

/* A post's sources as a reader meets them: only those its text links to, in the order it first links to each. The
   link in the text is the citation; the list at the foot is where a reader checks it. */
export function citedSources(post: BlogPost): Source[] {
  const text = textOf(post)
  return post.sources
    .map((s) => ({ s, at: text.indexOf(s.url) }))
    .filter((x) => x.at >= 0 && isEvidence(x.s.url))
    .sort((a, b) => a.at - b.at)
    .map((x) => x.s)
}

/* A source's own date as the list shows it: 7 Oct 2026, Oct 2026 or 2026. */
export const sourceDate = (d: string) =>
  /^\d{4}-\d{2}-\d{2}$/.test(d) ? formatDate(d) : /^\d{4}-\d{2}$/.test(d) ? formatDate(`${d}-01`).replace(/^1 /, '') : d

/* Our own pages are links to the product, not evidence, so they are never sources; the 1 exception is the published
   record of a real run (/sample-output), which a post may cite for its numbers. */
const OWN = /^https?:\/\/(www\.)?useobsession\.com(\/|$)/
const isEvidence = (url: string) => !OWN.test(url) || /^https?:\/\/(www\.)?useobsession\.com\/sample-output\/?$/.test(url)

/* What the prerender reports about a post's sources. Fails: a source the text never links to (a dead entry, or a
   claim that lost its link), an outside link in the text that isn't listed, one of our product pages listed, a URL
   listed twice, and a date that isn't the source's own (2026-10-07, 2026-10 or 2026: the day the links were checked is
   the post's, said once). Warns: more than 1 quote block (a quote is kept only as the evidence for a claim). */
export function sourceProblems(post: BlogPost): { fails: string[]; warns: string[] } {
  const text = textOf(post)
  const listed = new Set<string>()
  const fails: string[] = []
  for (const s of post.sources) {
    if (listed.has(s.url)) fails.push(`lists ${s.url} twice.`)
    listed.add(s.url)
    if (!text.includes(s.url)) fails.push(`lists "${s.title}" (${s.publisher}), which the text never links to.`)
    if (!isEvidence(s.url)) fails.push(`lists our own page ${s.url}, a link to the product and not a source.`)
    if (s.date && !/^\d{4}(-\d{2}(-\d{2})?)?$/.test(s.date)) fails.push(`dates "${s.title}" as "${s.date}" (use 2026-10-07, 2026-10 or 2026).`)
  }
  for (const [url] of text.matchAll(/https?:\/\/[^\s)"\\\]]+/g))
    if (!listed.has(url) && isEvidence(url)) fails.push(`links to ${url}, which its sources don't list.`)
  const quotes = post.blocks.filter((b) => b.kind === 'quote').length
  return { fails: [...new Set(fails)], warns: quotes > 1 ? [`has ${quotes} quote blocks (1 at most).`] : [] }
}
