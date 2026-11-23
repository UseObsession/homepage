import { useEffect, useId, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { HomeDoorDemo, HomeDoors as Words } from '../../content/types'
import { useInView } from '../../hooks/useReveal'
import { PersonaGlyph } from './icons'
import './blueprint.css'
import './HomeDoors.css'

/* The two ways in (#start), Home's last section before the sign-up (23 Nov 2026). Seun: send developers and teams that
   don't develop to their own page, make it plain that Obsession works for both, and let each reader picture using it:
   premium, concise, a small picture, never a big one. Two cards side by side (stacked on a phone), each one link to its
   page: its reader, what they get in one line, one moment of it working, the detail, and the link's words with the
   site's chevron.

   The moment: for developers, one call and the event it brings back about 50 ms later; for teams, the job as a sentence
   with its blanks filled in and the result that lands in Slack. Motion explains the order once, when the cards enter the
   view: the call, then its event; the blanks fill, then the result arrives. Under prefers-reduced-motion nothing moves;
   before the page's script arms the cards, every word shows. Hover lifts the card, strengthens its edge and steps the
   chevron. Words: content/pages/home.ts (homeDoors). */

const Chev = () => (
  <svg className="h-dr__chev" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M6 3.5 10.5 8 6 12.5" />
  </svg>
)

const tie = (s: string) => s.replace(/(\d) /g, '$1 ')

function Demo({ demo }: { demo: HomeDoorDemo }) {
  if (demo.kind === 'code')
    return (
      <div className="h-dr__demo" aria-hidden="true">
        <code className="h-dr__call h-dr__beat" style={{ ['--d' as string]: 0 } as CSSProperties}>
          {demo.call}
        </code>
        <p className="h-dr__evt h-dr__beat" style={{ ['--d' as string]: 1 } as CSSProperties}>
          <i className="h-dr__dot" />
          <span className="h-dr__at">{demo.at}</span>
          <span className="h-dr__kind">{demo.event}</span>
          <span className="h-dr__text">{demo.text}</span>
          <span className="h-dr__ms">{demo.ms}</span>
        </p>
      </div>
    )
  let blank = 0
  return (
    <div className="h-dr__demo" aria-hidden="true">
      <p className="h-dr__job">
        {demo.sentence.map((p, i) =>
          typeof p === 'string' ? (
            <span key={i}>{p}</span>
          ) : (
            <mark key={i} className="h-dr__blank h-dr__beat" style={{ ['--d' as string]: blank++ * 0.5 } as CSSProperties}>
              {tie(p.v)}
            </mark>
          ),
        )}
      </p>
      <p className="h-dr__evt h-dr__beat" style={{ ['--d' as string]: 2 } as CSSProperties}>
        <i className="h-dr__dot" />
        <span className="h-dr__kind">{demo.where}</span>
        <span className="h-dr__text">{demo.result}</span>
        <span className="h-dr__ms">{demo.at}</span>
      </p>
    </div>
  )
}

export function HomeDoors({ doors, id, tone }: { doors: Words; id?: string; tone?: 'alt' }) {
  const hid = useId()
  const { ref, inView } = useInView<HTMLUListElement>(0.3)
  const [armed, setArmed] = useState(false)
  useEffect(() => {
    if (!inView) setArmed(true)
  }, [inView])
  return (
    <section className="s-section h-dr" id={id} data-tone={tone} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {doors.heading}
          </h2>
          <p className="s-bp-line">{doors.line}</p>
        </div>
        <ul ref={ref} className={'h-dr__grid' + (inView ? ' is-in' : '')} data-armed={armed ? '' : undefined}>
          {doors.doors.map((d) => (
            <li className="h-dr__card" key={d.id} data-reader={d.reader}>
              <p className="h-dr__k">
                <span className="h-dr__ic" aria-hidden="true">
                  <PersonaGlyph name={d.icon} />
                </span>
                {d.label}
              </p>
              <h3 className="h-dr__title">
                <Link className="h-dr__link" to={d.cta.to}>
                  {d.title}
                </Link>
              </h3>
              <Demo demo={d.demo} />
              <p className="h-dr__line">{d.line}</p>
              <span className="h-dr__go" aria-hidden="true">
                {d.cta.label}
                <Chev />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
