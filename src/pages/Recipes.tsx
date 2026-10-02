import { useId } from 'react'
import { Link } from 'react-router-dom'
import { Mark } from '../components/Logo'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { recipes, recipesPage as page } from '../content/registry'
import type { RecipeGroup } from '../content/types'
import '../components/sections/Hero.css'
import './Recipes.css'

/* /recipes: every recipe, grouped by the 5 jobs (site.ts recipesPage). The centred hero, with the jobs as quiet jump
   links; then 1 row per job, its name and line on the left and its recipes as link rows on the right (the same rows as
   every page's Recipes section); then where the companies come from and where the proof goes; questions; the final
   call. Nothing moves but the hero's load sequence and the rows' hover. */

/* A numeral never ends a line apart from its word. */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1\u00a0')

const slug = (g: RecipeGroup) => g.toLowerCase().replace(/[^a-z]+/g, '-')

/* The jump links' name, for screen readers. */
const UI = { jobs: 'Recipes by job', inputs: 'Add companies from', outputs: 'Results go to' }

function Arrow({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

export function Recipes() {
  const id = useId()
  const groups = page.groups.map((g) => ({ ...g, items: recipes.filter((r) => r.group === g.group) })).filter((g) => g.items.length)

  return (
    <>
      <section className="s-hero s-ri-hero" aria-labelledby={`${id}-h`}>
        <div className="s-wrap s-hero-wrap">
          <div className="s-hero-head ob-anim-hero">
            <h1 className="s-hero-h" id={`${id}-h`}>
              {page.hero.headline}
            </h1>
            <p className="s-hero-sub s-ri-hero__sub">{page.hero.sub}</p>
            <nav className="s-ri-jump" aria-label={UI.jobs}>
              <ul>
                {groups.map((g) => (
                  <li key={g.group}>
                    <a className="s-ri-jump__link" href={`#${slug(g.group)}`}>
                      {g.group}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <div className="s-wrap s-ri-jobs">
        {groups.map((g) => (
          <section className="s-ri-job" id={slug(g.group)} key={g.group} aria-labelledby={`${slug(g.group)}-h`}>
            <header className="s-ri-job__head">
              <h2 className="s-ri-job__name" id={`${slug(g.group)}-h`}>
                {g.group}
              </h2>
              <p className="s-ri-job__line">{tie(g.line)}</p>
            </header>
            <ul className="s-ri-job__list">
              {g.items.map((r) => (
                <li key={r.id}>
                  <Link className="s-ri-item" to={`/recipes/${r.slug}`}>
                    <span className="s-ri-item__name">
                      {r.name}
                      <Arrow className="s-ri-item__arrow" />
                    </span>
                    <span className="s-ri-item__line">{tie(r.line)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="s-section s-ri-hub" aria-labelledby={`${id}-hub`}>
        <div className="s-wrap">
          <header className="s-head s-head--center s-ri-hub__head">
            <h2 className="ob-type-h2" id={`${id}-hub`}>
              {tie(page.hub.heading)}
            </h2>
            <p className="s-ri-hub__line">{tie(page.hub.line)}</p>
          </header>
          <div className="s-ri-flow">
            <ul className="s-ri-flow__col s-ri-flow__col--in" aria-label={UI.inputs}>
              {page.hub.inputs.map((x) => (
                <li key={x} className="s-ri-flow__pill">
                  {x}
                </li>
              ))}
            </ul>
            <div className="s-ri-flow__core" aria-hidden="true">
              <span className="s-ri-flow__wire" />
              <span className="s-ri-flow__mark">
                <Mark size={32} />
              </span>
              <span className="s-ri-flow__wire" />
            </div>
            <ul className="s-ri-flow__col s-ri-flow__col--out" aria-label={UI.outputs}>
              {page.hub.outputs.map((x) => (
                <li key={x} className="s-ri-flow__pill">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq faq={page.faq} id="questions" />

      <FinalCta final={page.final} />
    </>
  )
}
