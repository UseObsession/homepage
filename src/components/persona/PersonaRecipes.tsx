import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { PersonaRecipes as Recipes } from '../../content/types'
import './blueprint.css'
import './PersonaRecipes.css'

/* Recipes, for teams who don't write code (#recipes): mystery shopping as the tall tile, the other recipes beside and
   under it. Each tile takes the hue of the reader it fits (styles/accents.css, data-reader) as its mark and its 1 soft
   glow; its status line says who it fits. */
export function PersonaRecipes({ recipes, id }: { recipes: Recipes; id?: string }) {
  const hid = useId()
  return (
    <section className="s-section s-rt" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {recipes.heading}
          </h2>
          {recipes.line && <p className="s-bp-line">{recipes.line}</p>}
        </div>
        <ul className="s-rt-grid">
          {recipes.items.map((r) => (
            <li className={'s-rt-tile' + (r.live ? ' is-live' : '')} key={r.name} data-reader={r.reader}>
              <p className="s-rt-status">
                <span className="s-rt-dot" aria-hidden="true" />
                {r.status}
              </p>
              <h3 className="s-rt-name">{r.name}</h3>
              <p className="s-rt-line">{r.line}</p>
              {/* Named for the recipe too, so the "See the recipe" links read apart. */}
              {r.link.to.startsWith('/') ? (
                <Link className="s-bp-link s-rt-link" to={r.link.to} aria-label={`${r.link.label}: ${r.name}`}>
                  {r.link.label}
                </Link>
              ) : (
                <a className="s-bp-link s-rt-link" href={r.link.to} aria-label={`${r.link.label}: ${r.name}`}>
                  {r.link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
