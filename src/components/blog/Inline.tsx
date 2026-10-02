import { Fragment, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { tie } from './util'

/* The blog's inline text (content/blog/types.ts): plain words with [link text](url) and **bold**. Root relative links
   are the site's own pages and move inside the app; any other address is a plain link. A numeral stays on the line of
   the word it counts. Nothing else is parsed, so a stray symbol is only ever text. */
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g

export function Inline({ text }: { text: string }) {
  const out: ReactNode[] = []
  let at = 0
  for (const m of text.matchAll(TOKEN)) {
    const i = m.index ?? 0
    if (i > at) out.push(tie(text.slice(at, i)))
    if (m[1] !== undefined) {
      const [label, href] = [m[1], m[2]]
      out.push(
        href.startsWith('/') ? (
          <Link key={i} className="s-art-a" to={href}>
            {tie(label)}
          </Link>
        ) : (
          <a key={i} className="s-art-a" href={href} rel="noopener">
            {tie(label)}
          </a>
        ),
      )
    } else out.push(<strong key={i}>{tie(m[3])}</strong>)
    at = i + m[0].length
  }
  if (at < text.length) out.push(tie(text.slice(at)))
  return <>{out.map((p, i) => (typeof p === 'string' ? <Fragment key={`t${i}`}>{p}</Fragment> : p))}</>
}
