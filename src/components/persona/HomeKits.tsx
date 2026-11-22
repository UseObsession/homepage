import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { kitLinks } from '../../content/kitPaths'
import { kits } from '../../content/kits'
import { pieces } from '../../content/pieces'
import { useInView } from '../../hooks/useReveal'
import { PersonaGlyph } from './icons'
import '../../pages/Kit.css'
import './HomeKits.css'

/* Home's kits (#kits, 22 Nov 2026): the six jobs AI agents do, each a card with its icon, name, what the agent does and
   the pieces it uses, linking its kit page; then the link to every kit. The cards rise in order once when the row enters
   the view; nothing moves under prefers-reduced-motion, and nothing hides before the page's script arms the row. Words:
   content/pages/home.ts (homeKits), each kit's name and line from content/kitPaths, its pieces from content/kits. */

type Words = { heading: string; line: string; all: { label: string; to: string } }

const pieceName = Object.fromEntries(pieces.map((p) => [p.id, p.name]))
const piecesOf = Object.fromEntries(kits.map((k) => [k.id, k.pieces.items.map((i) => pieceName[i.piece])]))

export function HomeKits({ words, id }: { words: Words; id?: string }) {
  const hid = useId()
  const { ref, inView } = useInView<HTMLUListElement>(0.15)
  const [armed, setArmed] = useState(false)
  useEffect(() => {
    if (!inView) setArmed(true)
  }, [inView])
  return (
    <section className="s-section h-kits" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head h-kits__head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {words.heading}
          </h2>
          <p className="s-bp-line">{words.line}</p>
        </div>
        <ul ref={ref} className={'k-hub__cards h-kits__cards' + (inView ? ' is-in' : '')} data-armed={armed ? '' : undefined}>
          {kitLinks.map((k, i) => (
            <li key={k.id} style={{ ['--i' as string]: i }}>
              <Link className="k-hub__card h-kits__card" to={k.path}>
                <span className="k-hub__ic" aria-hidden="true">
                  <PersonaGlyph name={k.icon} />
                </span>
                <span className="k-hub__name">{k.name}</span>
                <span className="k-hub__line">{k.line}</span>
                <svg className="k-hub__chev" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                  <path d="M6 3.5 10.5 8 6 12.5" />
                </svg>
                <span className="k-hub__pieces">
                  {(piecesOf[k.id] ?? []).map((p) => (
                    <span className="k-hub__piece" key={p}>
                      {p}
                    </span>
                  ))}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link className="s-bp-link h-kits__all" to={words.all.to}>
          {words.all.label}
        </Link>
      </div>
    </section>
  )
}
