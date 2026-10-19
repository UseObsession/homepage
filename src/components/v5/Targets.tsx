import { useId } from 'react'
import { Link } from 'react-router-dom'
import { catalog, type CatalogRecipe } from '../../content/catalog'
import type { RecipeId, Targets as TargetsContent } from '../../content/types'
import { AppScreen, type Workspace } from '../AppScreen'
import './Targets.css'

/* What a customer agent can be a customer of (COPY.md, "Home > Who you can watch"): the kinds of company, 2 by 2, each
   over its own app screen, with the recipes that start there. A whole app screen is too much to read at a card's
   size, so each is filmed (components/camera, src/screens/cam.ts): as its story plays, the camera leans in to each
   beat and labels it, so the one thing that matters reads at a legible size. Every screen here has a shot list, and
   runs to the card's foot. */
const byId = Object.fromEntries(catalog.recipes.map((r) => [r.id, r])) as Record<RecipeId, CatalogRecipe>

export function Targets({ targets, id, workspace = 'company' }: { targets: TargetsContent; id?: string; workspace?: Workspace }) {
  const hid = useId()
  return (
    <section className="v5-section v5-targets" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="v5-head">
          <h2 className="v5-h2" id={`${hid}-h`}>
            {targets.heading}
          </h2>
          {targets.line && <p className="v5-line">{targets.line}</p>}
        </div>
        <div className="v5-targets-grid v5-rail">
          {targets.items.map((t) => (
            <article className="v5-target" key={t.name}>
              <div className="v5-target-copy">
                <h3 className="v5-target-h">
                  <Link to={t.to}>{t.name}</Link>
                </h3>
                <p className="v5-target-line">{t.line}</p>
                <ul className="v5-target-recipes">
                  {t.recipes
                    .map((id) => byId[id])
                    .filter(Boolean)
                    .map((r) => (
                      <li key={r.id}>
                        <Link to={`/recipes/${r.slug}`}>
                          <span>{r.name}</span>
                          <svg className="v5-target-go" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                            <path d="M5 11 11 5M6.5 5H11v4.5" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="v5-target-screen">
                <AppScreen name={t.screen} workspace={workspace} camera />
              </div>
            </article>
          ))}
        </div>
        <p className="v5-targets-all">
          <Link className="v5-link" to={targets.all.to}>
            {targets.all.label}
          </Link>
        </p>
      </div>
    </section>
  )
}
