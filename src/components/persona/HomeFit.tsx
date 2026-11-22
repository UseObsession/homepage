import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import type { HomeFit as Words } from '../../content/types'
import { useInView } from '../../hooks/useReveal'
import './HomeFit.css'

/* Home's day one (#act, 22 Nov 2026): a row per thing an AI agent needs to do, what happens on its own, and what Obsession
   gives it. Every row is a link to the piece that does it, cued the way James's pieces sheet is: the whole row answers the
   pointer, a chevron at its end steps right on hover, and the piece's name sits beside it. On a desk it reads as a table;
   on a phone each row stacks. Once, when it enters the view, the rows rise in order; nothing moves under
   prefers-reduced-motion, and nothing hides before the page's script arms it (data-armed). Words: content/pages/home.ts. */
export function HomeFit({ fit, id }: { fit: Words; id?: string }) {
  const hid = useId()
  const { ref, inView } = useInView<HTMLDivElement>(0.2)
  const [armed, setArmed] = useState(false)
  useEffect(() => {
    if (!inView) setArmed(true)
  }, [inView])
  return (
    <section className="s-section h-act" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head h-act__head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {fit.heading}
          </h2>
          <p className="s-bp-line">{fit.line}</p>
        </div>

        <figure className="h-act__fig">
          <div ref={ref} className={'h-act__table' + (inView ? ' is-in' : '')} data-armed={armed ? '' : undefined}>
            <div className="h-act__row h-act__row--head" aria-hidden="true">
              <span>{fit.cols.need}</span>
              <span>{fit.cols.without}</span>
              <span className="h-act__with-h">{fit.cols.with}</span>
            </div>
            <ul className="h-act__rows">
              {fit.rows.map((r, i) => (
                <li key={r.need} style={{ ['--i' as string]: i }}>
                  <Link className="h-act__row h-act__link-row" to={r.piece.to}>
                    <span className="h-act__need">{r.need}</span>
                    <span className="h-act__without">
                      <span className="sr-only">{fit.cols.without}: </span>
                      {r.without}
                    </span>
                    <span className="h-act__with">
                      <span className="sr-only">{fit.cols.with}: </span>
                      <span className="h-act__with-text">{r.with}</span>
                      <span className="h-act__piece">{r.piece.label}</span>
                      <svg className="h-act__chev" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                        <path d="M6 3.5 10.5 8 6 12.5" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <figcaption className="h-act__cap">{fit.caption}</figcaption>
        </figure>

        <a className="s-bp-link h-act__more" href={fit.link.to}>
          {fit.link.label}
        </a>
      </div>
    </section>
  )
}
