import { useId } from 'react'
import { Link } from 'react-router-dom'
import { AppScreen } from '../components/AppScreen'
import { Crumbs } from '../components/Crumbs'
import { DescribeJob } from '../components/describe/DescribeJob'
import { Mark } from '../components/Logo'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { blueprintPieces, pieceChips } from '../content/blueprint-ui'
import { catalog } from '../content/catalog'
import { kitLinks } from '../content/kitPaths'
import { kits } from '../content/kits'
import { describe } from '../content/describe'
import { recipePage } from '../content/recipe-page'
import { PersonaGlyph } from '../components/persona/icons'
import { recipesPage as page } from '../content/site'
import '../components/sections/Hero.css'
import './Recipes.css'

/* /blueprints (22 Nov 2026): every blueprint, grouped by the six types of blueprints, one per job AI agents do (the 22 Nov
   call: the kits became these types). The centred hero keeps James's blueprint console under the types as jump links;
   then 1 section per type, numbered: its icon, name, what its blueprints do, the pieces the job uses and the link to the
   type's page on the left, and its blueprints as cards on the right (name, line, the pieces each runs on, a chevron that
   steps right on hover); then where the companies come from and where the data lands; questions; the form. Nothing moves
   but the hero's load sequence and the cards' hover. Words: content/site.ts (recipesPage), each type from
   content/kitPaths and content/kits, each blueprint from its own file. */

/* A numeral never ends a line apart from its word. */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1\u00a0')

/* The pieces' names, for the cards' screen-reader line. */
const UI = { inputs: 'Add companies from', outputs: 'Results go to' }
const bySlug = Object.fromEntries(catalog.recipes.map((r) => [r.slug, r]))
const kitOf = Object.fromEntries(kits.map((k) => [k.id, k]))
const anchorOf = (path: string) => path.split('/').pop() ?? ''

function Chev({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M6 3.5 10.5 8 6 12.5" />
    </svg>
  )
}

function Arrow({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

export function Recipes() {
  const id = useId()
  const types = kitLinks
    .map((k) => ({ ...k, page: kitOf[k.id], items: (kitOf[k.id]?.blueprints?.slugs ?? []).map((sl) => bySlug[sl]).filter(Boolean) }))
    .filter((t) => t.items.length)

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
            <nav className="s-ri-jump" aria-label={page.types.label}>
              <ul>
                {types.map((t) => (
                  <li key={t.id}>
                    <a className="s-ri-jump__link" href={`#${anchorOf(t.path)}`}>
                      <span className="s-ri-jump__ic" aria-hidden="true">
                        <PersonaGlyph name={t.icon} />
                      </span>
                      {t.name}
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

      <div className="s-wrap s-ri-types">
        {types.map((t, i) => (
          <section className="s-ri-type" id={anchorOf(t.path)} key={t.id} aria-labelledby={`${id}-${t.id}`} tabIndex={-1}>
            <header className="s-ri-type__head">
              <p className="s-ri-type__num">{String(i + 1).padStart(2, '0')}</p>
              <span className="s-ri-type__ic" aria-hidden="true">
                <PersonaGlyph name={t.icon} />
              </span>
              <h2 className="s-ri-type__name" id={`${id}-${t.id}`}>
                {t.name}
              </h2>
              <p className="s-ri-type__line">{tie(t.page?.blueprints?.line ?? t.line)}</p>
              <ul className="s-ri-type__pieces" aria-label={page.types.runsOn}>
                {(t.page?.pieces.items ?? []).map((p) => (
                  <li key={p.piece} className="s-ri-chip">
                    <PersonaGlyph name={pieceChips[p.piece].icon} />
                    {pieceChips[p.piece].name}
                  </li>
                ))}
              </ul>
              <Link className="s-ri-type__more" to={t.path}>
                {page.types.more}
                <Chev className="s-ri-chev" />
              </Link>
            </header>
            <ul className="s-ri-cards">
              {t.items.map((r) => (
                <li key={r.id}>
                  <Link className="s-ri-card" to={`/blueprints/${r.slug}`}>
                    <span className="s-ri-card__name">
                      {r.name}
                      <Chev className="s-ri-chev" />
                    </span>
                    <span className="s-ri-card__line">{tie(r.line)}</span>
                    <span className="s-ri-card__runs">
                      <span className="sr-only">{`${page.types.runsOn}: `}</span>
                      {['personas' as const, ...(blueprintPieces[r.slug] ?? [])].map((p) => (
                        <span className="s-ri-card__piece" key={p} title={pieceChips[p].name}>
                          <PersonaGlyph name={pieceChips[p].icon} />
                          <span className="sr-only">{pieceChips[p].name}</span>
                        </span>
                      ))}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* What an AI employee needs (23 Nov 2026): the roles people hire AI employees for, each with the pieces it runs on
          and the blueprints that already cover it. Obsession is what they run on; the roles borrow blueprints and own
          none. Building them yourself is one door to the API. */}
      <section className="s-section s-ri-roles" id={page.roles.id} aria-labelledby={`${id}-roles`} tabIndex={-1}>
        <div className="s-wrap">
          <header className="s-ri-roles__head">
            <h2 className="ob-type-h2" id={`${id}-roles`}>
              {page.roles.heading}
            </h2>
            <p className="s-ri-roles__line">{tie(page.roles.line)}</p>
          </header>
          <ul className="s-ri-roles__list">
            {page.roles.items.map((r) => (
              <li className="s-ri-role" key={r.name}>
                <h3 className="s-ri-role__name">
                  {r.to ? (
                    <Link to={r.to}>
                      {r.name}
                      <Chev className="s-ri-chev" />
                    </Link>
                  ) : (
                    r.name
                  )}
                </h3>
                <p className="s-ri-role__line">{tie(r.line)}</p>
                <div className="s-ri-role__row">
                  <span className="s-ri-role__label">{page.roles.needs}</span>
                  <ul className="s-ri-role__pieces">
                    {r.pieces.map((p) => (
                      <li key={p} className="s-ri-chip">
                        <PersonaGlyph name={pieceChips[p].icon} />
                        {pieceChips[p].name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="s-ri-role__row">
                  <span className="s-ri-role__label">{page.roles.covered}</span>
                  <ul className="s-ri-role__bps">
                    {r.blueprints
                      .filter((sl) => bySlug[sl])
                      .map((sl) => (
                        <li key={sl}>
                          <Link className="s-ri-role__bp" to={`/blueprints/${sl}`}>
                            {bySlug[sl].name}
                            <Arrow className="s-ri-role__arrow" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <p className="s-ri-roles__build">
            <span>{page.roles.build.line}</span>
            <Link className="ob-btn ob-btn--link" to={page.roles.build.to}>
              <span className="ob-btn-label">{page.roles.build.label}</span>
              <Arrow className="ob-btn-glyph ob-btn-arrow" />
            </Link>
          </p>
        </div>
      </section>

      {/* No blueprint for the job (23 Nov 2026): describe it in your own words, and we set it up as a blueprint. The
          picture types a sentence and turns it into a blueprint (components/describe/DescribeJob). */}
      <section className="s-section s-ri-own" aria-labelledby={`${id}-own`}>
        <div className="s-wrap s-ri-own__grid">
          <div className="s-ri-own__words">
            <h2 className="ob-type-h2" id={`${id}-own`}>
              {describe.hub.heading}
            </h2>
            <p className="s-ri-own__line">{describe.hub.line}</p>
            <a className="ob-btn s-ri-own__cta" href={describe.cta.to}>
              <span className="ob-btn-label">{describe.cta.label}</span>
              <Arrow className="ob-btn-glyph ob-btn-arrow" />
            </a>
          </div>
          <DescribeJob className="s-ri-own__pic" />
        </div>
      </section>

      {/* The hub is the page's ink chapter (styles/tones.css, F1): full bleed ink on paper, lit ink on ink. */}
      <section className="s-section s-ri-hub ob-theme-dark" data-tone="ink" aria-labelledby={`${id}-hub`}>
        <div className="s-wrap">
          <header className="s-head s-ri-hub__head">
            <h2 className="ob-type-h2" id={`${id}-hub`}>
              {tie(page.hub.heading)}
            </h2>
            <p className="s-ri-hub__line">{tie(page.hub.line)}</p>
            {/* Every page links to the 1 real record (docs/REBUILD.md 8): here, what a recipe returns. */}
            <Link className="ob-btn ob-btn--link s-ri-hub__cta" to={recipePage.outputs.cta.to}>
              <span className="ob-btn-label">{recipePage.outputs.cta.label}</span>
              <Arrow className="ob-btn-glyph ob-btn-arrow" />
            </Link>
            {/* Every use case, so the catalogue links to who uses each recipe. */}
            <Link className="ob-btn ob-btn--link s-ri-hub__cta" to={page.hub.guide.to}>
              <span className="ob-btn-label">{page.hub.guide.label}</span>
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
