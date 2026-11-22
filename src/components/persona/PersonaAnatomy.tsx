import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { PersonaAnatomy as Anatomy } from '../../content/types'
import './blueprint.css'
import './PersonaAnatomy.css'

/* The pieces under one identity (#personas): the claim and its line on the left; on the right, an exploded stack of
   slabs, 1 per part, each with its callout (the part's name, 1 line, and the persona's value in mono). Each slab is a
   small isometric drawing in its own row, so its callout always sits level with it at any width; the slabs overlap the
   row under them, the upper one in front. The first slab, the identity every piece shares, is drawn solid. */

/* 1 slab on a 220 x 120 grid: the top face, then the left and right sides, 16 units thick. Its right corner sits at
   (210, 52), where the callout's leader starts (PersonaAnatomy.css). */
function Slab() {
  return (
    <svg className="s-pa-slab" viewBox="0 0 220 120" aria-hidden="true" focusable="false">
      <path className="s-pa-side-l" d="M10 52 110 102v16L10 68Z" />
      <path className="s-pa-side-r" d="M110 102 210 52v16l-100 50Z" />
      <path className="s-pa-top" d="M110 2 210 52 110 102 10 52Z" />
    </svg>
  )
}

export function PersonaAnatomy({ anatomy, id, tone }: { anatomy: Anatomy; id?: string; tone?: 'alt' }) {
  const hid = useId()
  return (
    <section className="s-section s-pa" id={id} data-tone={tone} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap s-pa-grid">
        <div className="s-pa-words">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {anatomy.heading}
          </h2>
          {anatomy.line && <p className="s-bp-line">{anatomy.line}</p>}
          {anatomy.link && (
            <Link className="s-bp-link" to={anatomy.link.to}>
              {anatomy.link.label}
            </Link>
          )}
        </div>
        <figure className="s-pa-fig">
          <ol className="s-pa-stack">
            {anatomy.parts.map((p, i) => (
              <li className={'s-pa-part' + (i === 0 ? ' is-you' : '')} key={p.name} style={{ ['--i' as string]: i }}>
                <span className="s-pa-art">
                  <Slab />
                </span>
                <div className="s-pa-text">
                  <p className="s-pa-name">{p.name}</p>
                  <p className="s-pa-line">{p.line}</p>
                  <p className="s-pa-eg">{p.eg}</p>
                </div>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  )
}
