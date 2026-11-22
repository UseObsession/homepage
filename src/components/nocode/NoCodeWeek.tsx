import { useEffect, useState } from 'react'
import type { NoCodeFormat, NoCodePage } from '../../content/pages/no-code'
import { useInView } from '../../hooks/useReveal'
import { FormatIcon, formatName } from './formats'
import './NoCodeWeek.css'

/* The no-code page's hero picture (23 Nov 2026): a working week at one invented company, Monday to Friday, each day's
   results from different teams, each card in the format that team works in (Slack, email, the CRM, a sheet, a PDF, the
   team's AI assistant), so a reader sees the range of jobs and that the format never matters before reading a word.
   The days arrive left to right once, when the window enters the view; nothing moves under prefers-reduced-motion, and
   before the page's script runs the whole week shows. Words: content/pages/no-code.ts (week). */
export function NoCodeWeek({ week }: { week: NoCodePage['week'] }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15)
  const [armed, setArmed] = useState(false)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (inView) setSeen(true)
    else if (!seen) setArmed(true)
  }, [inView, seen])
  return (
    <figure className="nc-week">
      <div
        ref={ref}
        className={'nc-week__win' + (seen ? ' is-in' : '')}
        data-armed={armed ? '' : undefined}
        role="img"
        aria-label={week.label}
      >
        <div className="nc-week__bar" aria-hidden="true">
          <span className="nc-week__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="nc-week__crumb">{week.company}</span>
        </div>
        <div className="nc-week__days" aria-hidden="true">
          {week.days.map((d, di) => (
            <div className="nc-week__day" key={d.day} style={{ ['--i' as string]: di }}>
              <p className="nc-week__dayname">{d.day}</p>
              {d.items.map((it) => (
                <div className="nc-week__card" key={it.text} data-reader={it.reader}>
                  <p className="nc-week__fmt">
                    <FormatIcon id={it.format as NoCodeFormat} />
                    {formatName[it.format]}
                  </p>
                  <p className="nc-week__text">{it.text}</p>
                  <p className="nc-week__team">
                    <i aria-hidden="true" />
                    {it.team}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="nc-week__cap">{week.caption}</figcaption>
    </figure>
  )
}
