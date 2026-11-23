import { useId } from 'react'
import { Link } from 'react-router-dom'
import { Crumbs } from '../components/Crumbs'
import { KitOrbit } from '../components/kit/KitOrbit'
import { PersonaGlyph } from '../components/persona/icons'
import { FinalCta } from '../components/sections/FinalCta'
import { LinkGroups } from '../components/sections/LinkGroups'
import { catalog } from '../content/catalog'
import { kitLinks } from '../content/kitPaths'
import { useCasesPage as page } from '../content/resources'
import { cases, teams } from '../content/teams'
import '../components/persona/blueprint.css'
import '../components/piece/PieceHero.css'
import './Kit.css'
import './UseCases.css'

/* /use-cases (22 Nov 2026): the hero with the kits orbit under it, then every use case and team page under the kit whose
   job it does, each a card with its name and 1 line, then the 2 long guides and the form (#join). Names and lines come
   from each page's own words (content/teams, content/teams/cases, the worked examples in content/usecases). */

const firstSentence = (s: string) => s.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? s
const cardOf: Record<string, { name: string; line: string }> = {
  ...Object.fromEntries(catalog.studies.map((s) => [s.path, { name: s.name, line: s.line }])),
  ...Object.fromEntries([...teams, ...cases].map((t) => [t.meta.path, { name: t.name, line: t.card ?? firstSentence(t.hero.sub) }])),
}
const kitOf = Object.fromEntries(kitLinks.map((k) => [k.id, k]))

export function UseCases() {
  const id = useId()
  return (
    <>
      <section className="s-pk-hero k-hero" aria-labelledby={`${id}-h`}>
        <div className="s-wrap s-pk-hero__wrap">
          <Crumbs />
          <div className="s-pk-hero__words ob-anim-hero">
            <h1 className="s-pk-hero__h" id={`${id}-h`}>
              <span className="s-pk-hero__key">{page.hero.headline}</span>
            </h1>
            <p className="s-pk-hero__sub">{page.hero.sub}</p>
          </div>
          <div className="k-hub__stage ob-anim-hero-object">
            <KitOrbit label={page.orbit.label} caption={page.orbit.caption} />
          </div>
        </div>
      </section>

      <section className="s-section uc-who" id={page.byWho.id} aria-labelledby={`${id}-who`}>
        <div className="s-wrap">
          <div className="s-bp-head">
            <h2 className="s-bp-h" id={`${id}-who`}>
              {page.byWho.heading}
            </h2>
            <p className="s-bp-line">{page.byWho.line}</p>
          </div>
          {page.byWho.groups.map((g) => (
            <div className="uc-who__group" key={g.label}>
              <h3 className="uc-who__label">{g.label}</h3>
              <ul className="k-hub__cards">
                {g.paths
                  .map((p) => ({ path: p, ...cardOf[p] }))
                  .filter((r) => r.name)
                  .map((r) => (
                    <li key={r.path}>
                      <Link className="k-hub__card uc-card" to={r.path}>
                        <span className="k-hub__name">{r.name}</span>
                        <span className="k-hub__line">{r.line}</span>
                        <svg className="k-hub__chev" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                          <path d="M6 3.5 10.5 8 6 12.5" />
                        </svg>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {page.byKit.map((group) => {
        const k = kitOf[group.kit]
        const rows = group.paths.map((p) => ({ path: p, ...cardOf[p] })).filter((r) => r.name)
        return (
          <section className="s-section uc-kit" key={group.kit} id={group.kit} aria-labelledby={`${id}-${group.kit}`}>
            <div className="s-wrap">
              <div className="uc-kit__head">
                <span className="uc-kit__ic" aria-hidden="true">
                  <PersonaGlyph name={k.icon} />
                </span>
                <div className="uc-kit__words">
                  <h2 className="s-bp-h" id={`${id}-${group.kit}`}>
                    {k.name}
                  </h2>
                  <p className="s-bp-line">{k.line}</p>
                </div>
                <Link className="s-bp-link uc-kit__all" to={k.path}>
                  {`See the blueprints`}
                </Link>
              </div>
              <ul className="k-hub__cards">
                {rows.map((r) => (
                  <li key={r.path}>
                    <Link className="k-hub__card uc-card" to={r.path}>
                      <span className="k-hub__name">{r.name}</span>
                      <span className="k-hub__line">{r.line}</span>
                      <svg className="k-hub__chev" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                        <path d="M6 3.5 10.5 8 6 12.5" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )
      })}

      <LinkGroups className="s-lg--then-final" single groups={[page.guides]} />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
