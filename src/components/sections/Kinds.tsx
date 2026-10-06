import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { catalog, type CatalogRecipe } from '../../content/catalog'
import type { Kinds as KindsContent, RecipeId } from '../../content/types'
import './Kinds.css'

/* Every kind of reader it fits (docs/REBUILD.md 2, beat 6): 1 chip per kind (forms.css option chips, single choice, so
   arrows move between them natively). Picking one shows its line and the recipes it runs, each linking to its own page.
   The open kind swaps in with the system's panel entrance (.ob-anim-rise) and is announced politely. Every kind's
   result is in the page (the others hidden), so crawlers and llms-full.txt read every kind and its recipe links. */

const byId = new Map<RecipeId, CatalogRecipe>(catalog.recipes.map((r) => [r.id, r]))

export function Kinds({ kinds, id }: { kinds: KindsContent; id?: string }) {
  const uid = useId()
  const [sel, setSel] = useState(0)
  /* The panel only moves once the reader picks: nothing animates on load. */
  const [picked, setPicked] = useState(false)
  const kind = kinds.items[sel] ?? kinds.items[0]
  const recipesOf = (ids: RecipeId[]) => ids.map((r) => byId.get(r)).filter((r): r is CatalogRecipe => !!r)
  const headId = `${uid}-h`

  return (
    <section className="s-section s-kinds" id={id} aria-labelledby={headId}>
      <div className="s-wrap">
        <header className="s-head s-kinds-head">
          <h2 id={headId} className="ob-type-h2">
            {kinds.heading}
          </h2>
        </header>

        <div className="s-kinds-body">
          <fieldset className="ob-chips s-kinds-chips">
            <legend className="s-kinds-legend">{kinds.label}</legend>
            {kinds.items.map((k, i) => (
              <label key={k.name} className="ob-chip">
                <input
                  className="ob-chip-input"
                  type="radio"
                  name={`${uid}-kind`}
                  value={k.name}
                  checked={i === sel}
                  onChange={() => {
                    setSel(i)
                    setPicked(true)
                  }}
                />
                <span className="ob-chip-label">{k.name}</span>
              </label>
            ))}
          </fieldset>

          <div className="s-kinds-result">
            {kinds.items.map((k, i) => {
              const recipes = recipesOf(k.recipes)
              return (
                <div key={k.name} className={'s-kinds-pick' + (picked && i === sel ? ' ob-anim-rise' : '')} hidden={i !== sel} data-llms="keep">
                  <p className="s-kinds-name">{k.name}</p>
                  <p className="s-kinds-line">{k.line}</p>
                  {recipes.length > 0 && (
                    <ul className="s-kinds-recipes">
                      {recipes.map((r) => (
                        <li key={r.id}>
                          <Link className="s-kinds-link" to={`/recipes/${r.slug}`}>
                            <span>{r.name}</span>
                            <svg className="s-kinds-go" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                              <path d="M3 8h10M9 4l4 4-4 4" />
                            </svg>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
            <p className="s-sr" aria-live="polite">
              {picked ? `${kind.name}. ${kind.line}` : ''}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
