import { Link } from 'react-router-dom'
import type { Recipe, RecipeGroup, RecipeId } from '../../content/types'
import './RecipeGrid.css'

/* A numeral never ends a line apart from its word ("0 reminders", "48 hours"). */
const tie = (s: string) => s.replace(/(\d) /g, '$1\u00a0')

/* Every recipe's own data, read from src/content/recipes/*.ts, so a name or a line is only ever written once. */
const FILES = import.meta.glob('../../content/recipes/*.ts', { eager: true, import: 'recipe' }) as Record<string, Recipe>
const RECIPES = Object.fromEntries(Object.values(FILES).map((r) => [r.id, r])) as Record<RecipeId, Recipe>

/* The 6 jobs, in the order every page shows them (content/nav JOBS). */
const JOBS: RecipeGroup[] = [
  'Win customers',
  'Keep customers',
  'Watch rivals',
  'Check your own journeys',
  'Get paid and save',
  'Check your AI agents',
]

type Props = {
  heading: string
  /* The recipes this page shows, in its own order; each lands under its job. */
  ids: RecipeId[]
  /* Optional: 1 line under each job's name (the /recipes index passes site.ts recipesPage.groups). */
  lines?: Partial<Record<RecipeGroup, string>>
  id?: string
  className?: string
}

/* Recipes (docs/REBUILD.md, story beat 7): grouped by the job they do. Each recipe is a quiet link row, its name and
   its 1 line, opening /recipes/SLUG. No boxes: the hover layer and the arrow say it's a link. */
export function RecipeGrid({ heading, ids, lines, id = 'recipes', className = '' }: Props) {
  const groups = JOBS.map((job) => ({ job, items: ids.map((i) => RECIPES[i]).filter((r) => r && r.group === job) })).filter(
    (g) => g.items.length > 0,
  )

  return (
    <section className={`s-section s-recipes ${className}`} id={id} aria-labelledby={`${id}-h`}>
      <div className="s-wrap">
        <div className="s-head s-head--wide">
          <h2 className="ob-type-h2" id={`${id}-h`}>
            {tie(heading)}
          </h2>
        </div>

        <div className="s-recipes__jobs">
          {groups.map((g, gi) => (
            <div className="s-recipes__job" key={g.job}>
              <div className="s-recipes__job-head">
                <h3 className="s-recipes__job-name" id={`${id}-j${gi}`}>
                  {g.job}
                </h3>
                {lines?.[g.job] && <p className="s-recipes__job-line">{lines[g.job]}</p>}
              </div>
              <ul className="s-recipes__list" aria-labelledby={`${id}-j${gi}`}>
                {g.items.map((r) => (
                  <li key={r.id}>
                    <Link className="s-recipes__item" to={`/recipes/${r.slug}`}>
                      <span className="s-recipes__name">
                        {r.name}
                        <svg className="s-recipes__arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </span>
                      <span className="s-recipes__line">{r.line}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
