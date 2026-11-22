import { useId } from 'react'
import { Link } from 'react-router-dom'
import { PersonaGlyph } from '../components/persona/icons'
import { Faq } from '../components/sections/Faq'
import { LinkGroups } from '../components/sections/LinkGroups'
import { FinalCta } from '../components/sections/FinalCta'
import { catalog } from '../content/catalog'
import { kitLinks } from '../content/kitPaths'
import { pieces } from '../content/pieces'
import { teamAt, teamUi as ui, type TeamPage } from '../content/teams'
import { connectionsFor } from '../lib/connections'
import { BlueprintGrid, KitPrices, SceneHero, WhoSection } from './Kit'
import './Kit.css'
import './Team.css'

/* A team's page (22 Nov 2026: /sales, /marketing, /verify, /agencies and the 4 industry pages in the nav's Teams column),
   every word from content/teams, in James's piece-page shape: the hero with the team's scene > the team's use cases,
   each tagged with its kit and what runs it > the blueprints for the team > prices > who uses it, with worked examples >
   questions > the form (#join). */

const kitOf = Object.fromEntries(kitLinks.map((k) => [k.id, k]))
const pieceOf = Object.fromEntries(pieces.map((p) => [p.id, { name: p.name, path: p.meta.path }]))
const blueprintOf = Object.fromEntries(catalog.recipes.map((r) => [r.slug, r]))

export function TeamAt({ path }: { path: string }) {
  const team = teamAt(path)
  return team ? <Team team={team} /> : null
}

function TeamUses({ uses }: { uses: TeamPage['uses'] }) {
  const hid = useId()
  return (
    <section className="s-section t-uses" id="use-cases" aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {uses.heading}
          </h2>
          <p className="s-bp-line">{uses.line}</p>
        </div>
        <ul className="t-uses__list">
          {uses.items.map((u) => {
            const k = kitOf[u.kit]
            const b = u.blueprint ? blueprintOf[u.blueprint] : undefined
            return (
              <li className="t-use" key={u.name}>
                <Link className="t-use__kit" to={k.path}>
                  <span className="t-use__kit-ic" aria-hidden="true">
                    <PersonaGlyph name={k.icon} />
                  </span>
                  {k.name}
                </Link>
                <span className="t-use__name">{u.name}</span>
                <span className="t-use__line">{u.line}</span>
                <span className="t-use__runs">
                  {b && (
                    <Link className="t-use__bp" to={`/blueprints/${u.blueprint}`}>
                      {b.name}
                      <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </Link>
                  )}
                  {u.pieces.map((p) => (
                    <Link className="t-use__piece" to={pieceOf[p].path} key={p}>
                      {pieceOf[p].name}
                    </Link>
                  ))}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export function Team({ team }: { team: TeamPage }) {
  return (
    <>
      <SceneHero pill={team.hero.pill} headline={team.hero.headline} sub={team.hero.sub} second={ui.second} scene={team.scene} place={team.name} />
      <TeamUses uses={team.uses} />
      <BlueprintGrid b={team.blueprints} />
      <KitPrices keys={team.prices} id="pricing" />
      <WhoSection who={team.who} examples={team.examples} />
      <Faq faq={team.faq} id="questions" className="s-faq--ruled" />
      <LinkGroups groups={connectionsFor(team.meta.path, team.meta.path.startsWith('/use-cases/') ? 'useCase' : 'reader')} className="s-lg--then-final" />
      <FinalCta final={team.final} id="join" />
    </>
  )
}

