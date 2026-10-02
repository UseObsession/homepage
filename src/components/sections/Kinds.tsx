import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Kinds as KindsContent, Recipe, RecipeId } from '../../content/types'
import './Kinds.css'

/* Every kind of reader it fits (docs/REBUILD.md 2, beat 6): 1 chip per kind (forms.css option chips, single choice, so
   arrows move between them natively). Picking one shows its line and the recipes it runs, each linking to its own page.
   The open kind swaps in with the system's panel entrance (.ob-anim-rise) and is announced politely. */

const RECIPES = import.meta.glob('../../content/recipes/*.ts', { eager: true, import: 'recipe' }) as Record<string, Recipe>
const byId = new Map<RecipeId, Recipe>(Object.values(RECIPES).map((r) => [r.id, r]))

export function Kinds({ kinds, id }: { kinds: KindsContent; id?: string }) {
  const uid = useId()
  const [sel, setSel] = useState(0)
  /* The panel only moves once the reader picks: nothing animates on load. */
  const [picked, setPicked] = useState(false)
  const kind = kinds.items[sel] ?? kinds.items[0]
  const recipes = kind.recipes.map((r) => byId.get(r)).filter((r): r is Recipe => !!r)
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

          <div className="s-kinds-result" aria-live="polite">
            <div key={sel} className={'s-kinds-pick' + (picked ? ' ob-anim-rise' : '')}>
              <p className="s-kinds-name">{kind.name}</p>
              <p className="s-kinds-line">{kind.line}</p>
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
          </div>
        </div>
      </div>
    </section>
  )
}
