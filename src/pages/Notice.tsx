import { Fragment, type ReactNode } from 'react'
import { Mark } from '../components/Logo'
import type { NoticeSection } from '../content/types'
import './Notice.css'

/* The parts the site's plain pages share (Privacy, Agents, 404, and the stand-ins the Pages phase replaces): the
   centred hero (docs/REBUILD.md, 1c) and the notice sections, 1 claim each. */

export function NoticeHero({
  pill,
  headline,
  sub,
  size = 'page',
  end = false,
  children,
}: {
  pill?: string
  headline: string
  sub: string
  /* 'page' for a notice (the h1 scale); 'display' for a page's own hero, as on Home and the audience pages. */
  size?: 'page' | 'display'
  /* Nothing follows the hero, so it closes the page with the full section space. */
  end?: boolean
  children?: ReactNode
}) {
  return (
    <header className={`s-notice-hero s-notice-hero--${size}${end ? ' s-notice-hero--end' : ''}`}>
      <div className="s-wrap s-notice-hero__in ob-anim-hero">
        {pill && (
          <p className="ob-layout-eyebrow s-notice-hero__pill">
            <Mark size={16} />
            {pill}
          </p>
        )}
        <h1 className="s-notice-hero__h">{headline}</h1>
        <p className="s-notice-hero__sub">{sub}</p>
        {children}
      </div>
    </header>
  )
}

/* Email addresses and the regulator's site become links; every other word stays as the content gives it. */
const LINKABLE = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+)|\b(ico\.org\.uk)\b/g

export function Linked({ text }: { text: string }) {
  const parts: ReactNode[] = []
  let at = 0
  for (const m of text.matchAll(LINKABLE)) {
    const i = m.index ?? 0
    if (i > at) parts.push(text.slice(at, i))
    const href = m[1] ? `mailto:${m[1]}` : `https://${m[2]}`
    parts.push(
      <a key={i} className="ob-btn ob-btn--link ob-btn--inline s-notice__link" href={href}>
        <span className="ob-btn-label">{m[0]}</span>
      </a>,
    )
    at = i + m[0].length
  }
  if (at < text.length) parts.push(text.slice(at))
  return <>{parts.map((p, i) => (typeof p === 'string' ? <Fragment key={`t${i}`}>{p}</Fragment> : p))}</>
}

/* Each section is 1 row: the claim on the left, what it means on the right; 1 column on a phone. Each keeps its id,
   so a link can point straight at it (/privacy#rights). */
export function NoticeSections({ sections, className = '' }: { sections: NoticeSection[]; className?: string }) {
  return (
    <div className={`s-wrap s-notice ${className}`}>
      {sections.map((s) => (
        <section className="s-notice__row" id={s.id} key={s.id} aria-labelledby={`${s.id}-h`}>
          <h2 className="s-notice__h" id={`${s.id}-h`}>
            <Linked text={s.heading} />
          </h2>
          <div className="s-notice__body">
            {s.lines.map((line) => (
              <p key={line}>
                <Linked text={line} />
              </p>
            ))}
            {s.list && (
              <ul className="s-notice__list">
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}
