import { Fragment, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { tie } from './util'

/* The blog's inline text (content/blog/types.ts): plain words with [link text](url) and **bold** (which may hold a link). Root relative links
   are the site's own pages and move inside the app; any other address is a plain link. A numeral stays on the line of
   the word it counts. Nothing else is parsed, so a stray symbol is only ever text. */
const PASS = /^(A pass|Pass)\b/
const FAIL = /^(If it fails|If nothing arrives|If nothing came|Fail|Wrong|Made up|No handoff)\b/
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g

/* A link: inside the app for the site's own pages, else a plain link. */
function linkOf(label: string, href: string, key: string | number) {
  return href.startsWith('/') ? (
    <Link key={key} className="s-art-a" to={href}>
      {tie(label)}
    </Link>
  ) : (
    <a key={key} className="s-art-a" href={href} rel="noopener">
      {tie(label)}
    </a>
  )
}

/* Bold words may hold a link (a named tool, say); nothing else nests. */
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g
function withLinks(text: string): ReactNode[] {
  const out: ReactNode[] = []
  let at = 0
  for (const m of text.matchAll(LINK)) {
    const i = m.index ?? 0
    if (i > at) out.push(<Fragment key={`t${i}`}>{tie(text.slice(at, i))}</Fragment>)
    out.push(linkOf(m[1], m[2], i))
    at = i + m[0].length
  }
  if (at < text.length) out.push(<Fragment key={`t${at}`}>{tie(text.slice(at))}</Fragment>)
  return out
}

export function Inline({ text }: { text: string }) {
  const out: ReactNode[] = []
  let at = 0
  for (const m of text.matchAll(TOKEN)) {
    const i = m.index ?? 0
    if (i > at) out.push(tie(text.slice(at, i)))
    if (m[1] !== undefined) {
      out.push(linkOf(m[1], m[2], i))
    } else {
      /* A run-in label that names a result carries its colour: a pass in success, a failure in danger. */
      const k = PASS.test(m[3]) ? ' s-art-k s-art-k--pass' : FAIL.test(m[3]) ? ' s-art-k s-art-k--fail' : ''
      out.push(
        <strong key={i} className={k ? k.trim() : undefined}>
          {withLinks(m[3])}
        </strong>,
      )
    }
    at = i + m[0].length
  }
  if (at < text.length) out.push(tie(text.slice(at)))
  return <>{out.map((p, i) => (typeof p === 'string' ? <Fragment key={`t${i}`}>{p}</Fragment> : p))}</>
}
