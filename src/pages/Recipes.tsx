import { useId } from 'react'
import { Link } from 'react-router-dom'
import { AppScreen } from '../components/AppScreen'
import { Crumbs } from '../components/Crumbs'
import { Mark } from '../components/Logo'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { jobAnchor as slug } from '../content/nav'
import { recipePage } from '../content/recipe-page'
import { recipes, recipesPage as page } from '../content/registry'
import '../components/sections/Hero.css'
import './Recipes.css'

/* /recipes: every recipe, grouped by the 6 jobs (site.ts recipesPage). The centred hero, with the jobs as quiet jump
   links and the product's Recipes picker under them (the page's 1 product object: glossy black on paper, lit on ink,
   like every other page's hero object); then 1 row per job, its name and line on the left and its recipes as link rows on the right (the same rows as
   every page's Recipes section); then where the companies come from and where the proof goes; questions; the final
   call. Nothing moves but the hero's load sequence and the rows' hover. */

/* A numeral never ends a line apart from its word. */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1\u00a0')

/* Each job's section carries its anchor (content/nav jobAnchor), so the nav's Recipes menu lands on it: /recipes#watch-rivals.
   It takes focus when reached that way (App.tsx ScrollManager), so the keyboard carries on from the job. */

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
          <Crumbs />
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
          <div className="s-hero-console s-hero-object s-ri-hero__screen ob-anim-hero-object">
            <AppScreen name="templates" workspace="company" />
          </div>
        </div>
      </section>

      <div className="s-wrap s-ri-jobs">
        {groups.map((g) => (
          <section className="s-ri-job" id={slug(g.group)} key={g.group} aria-labelledby={`${slug(g.group)}-h`} tabIndex={-1}>
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

      {/* The hub is the page's ink chapter (styles/tones.css, F1): full bleed ink on paper, lit ink on ink. */}
      <section className="s-section s-ri-hub ob-theme-dark" data-tone="ink" aria-labelledby={`${id}-hub`}>
        <div className="s-wrap">
          <header className="s-head s-ri-hub__head">
            <h2 className="ob-type-h2" id={`${id}-hub`}>
              {tie(page.hub.heading)}
            </h2>
            <p className="s-ri-hub__line">{tie(page.hub.line)}</p>
            {/* Every page links to the 1 real report (docs/REBUILD.md 8): here, what a recipe returns. */}
            <Link className="ob-btn ob-btn--link s-ri-hub__cta" to={recipePage.outputs.cta.to}>
              <span className="ob-btn-label">{recipePage.outputs.cta.label}</span>
              <Arrow className="ob-btn-glyph ob-btn-arrow" />
            </Link>
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
