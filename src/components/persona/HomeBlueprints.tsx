import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { catalog } from '../../content/catalog'
import { kitLinks } from '../../content/kitPaths'
import { kits } from '../../content/kits'
import type { HomeBlueprints as Words } from '../../content/types'
import { useInView } from '../../hooks/useReveal'
import { PersonaGlyph } from './icons'
import './HomeBlueprints.css'

/* Home's blueprints (#blueprints, 22 Nov 2026). On the 22 Nov call the kits became six types of blueprints, and Home
   keeps one blueprints section: each type a card (its icon, name, what the agent does and how many blueprints it holds,
   linking the type's page), its first blueprints as rows that link their own pages, and the link to every blueprint.
   Every link carries the site's learn-more cue: a chevron that steps right on hover. Each card wears its type's reader
   colour, as James's blueprint tiles did: a faint glow from its top corner and the colour on its icon (styles/accents.css). The cards rise in order once, when
   the grid enters the view; nothing moves under prefers-reduced-motion, and nothing hides before the page's script arms
   the grid. Words: content/pages/home.ts (homeBlueprints); each type's name and line from content/kitPaths, its
   blueprints from content/kits, each blueprint's name from its own file. */

const SHOW = 3
const nameOf = Object.fromEntries(catalog.recipes.map((r) => [r.slug, r.name]))
const slugsOf = Object.fromEntries(kits.map((k) => [k.id, (k.blueprints?.slugs ?? []).filter((s) => nameOf[s])]))

const Chev = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M6 3.5 10.5 8 6 12.5" />
  </svg>
)

export function HomeBlueprints({ words, id, tone }: { words: Words; id?: string; tone?: 'alt' }) {
  const hid = useId()
  const { ref, inView } = useInView<HTMLUListElement>(0.12)
  const [armed, setArmed] = useState(false)
  useEffect(() => {
    if (!inView) setArmed(true)
  }, [inView])
  return (
    <section className="s-section h-bp" id={id} data-tone={tone} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="h-bp__head">
          <div className="s-bp-head">
            <h2 className="s-bp-h" id={`${hid}-h`}>
              {words.heading}
            </h2>
            <p className="s-bp-line">{words.line}</p>
          </div>
          <Link className="h-bp__all" to={words.all.to}>
            {words.all.label}
            <Chev className="h-bp__chev" />
          </Link>
        </div>

        <ul ref={ref} className={'h-bp__grid' + (inView ? ' is-in' : '')} data-armed={armed ? '' : undefined}>
          {kitLinks.map((k, i) => {
            const slugs = slugsOf[k.id] ?? []
            const rest = slugs.length - SHOW
            return (
              <li className="h-bp__card" key={k.id} style={{ ['--i' as string]: i }} data-reader={k.reader}>
                <Link className="h-bp__type" to={k.path}>
                  <span className="h-bp__ic" aria-hidden="true">
                    <PersonaGlyph name={k.icon} />
                  </span>
                  <span className="h-bp__words">
                    <span className="h-bp__name">{k.name}</span>
                    <span className="h-bp__count">{`${slugs.length} ${slugs.length === 1 ? words.unit.one : words.unit.many}`}</span>
                  </span>
                  <Chev className="h-bp__chev" />
                </Link>
                <p className="h-bp__line">{k.line}</p>
                <ul className="h-bp__list">
                  {slugs.slice(0, SHOW).map((s) => (
                    <li key={s}>
                      <Link className="h-bp__item" to={`/blueprints/${s}`}>
                        <span>{nameOf[s]}</span>
                        <Chev className="h-bp__chev" />
                      </Link>
                    </li>
                  ))}
                  {rest > 0 && (
                    <li>
                      <Link className="h-bp__item h-bp__item--more" to={k.path} aria-label={`${rest} ${words.more}: ${k.name}`}>
                        <span>{`${rest} ${words.more}`}</span>
                        <Chev className="h-bp__chev" />
                      </Link>
                    </li>
                  )}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
