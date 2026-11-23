import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { PersonaGlyph } from '../components/persona/icons'
import { TeamChecksSection } from '../components/sections/AgencyChecks'
import { Faq } from '../components/sections/Faq'
import { LinkGroups } from '../components/sections/LinkGroups'
import { FinalCta } from '../components/sections/FinalCta'
import { catalog } from '../content/catalog'
import { kitLinks } from '../content/kitPaths'
import { pieces } from '../content/pieces'
import { teamAt, teamUi as ui, type TeamPage } from '../content/teams'
import { dollars, monthOf } from '../content/teams/sizes'
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

/* The kinds of reader (23 Nov 2026, Seun: "every addition should not feel like a dump"): one at a time, in the Home
   teams chooser's language. The kinds sit on the left (a row of chips on a phone); the chosen one opens beside them
   with its world, the jobs agents take off it, the KPIs it watches and the blueprints that run those jobs. Every panel
   is in the page for search; only the chosen one shows. */
function TeamKindsSection({ kinds }: { kinds: NonNullable<TeamPage['kinds']> }) {
  const hid = useId()
  const [at, setAt] = useState(0)
  return (
    <section className="s-section t-kinds" id="kinds" aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {kinds.heading}
          </h2>
          <p className="s-bp-line">{kinds.line}</p>
        </div>
        <div className="t-kinds__grid">
          <div className="t-kinds__pick" role="group" aria-label={kinds.label}>
            {kinds.items.map((k, n) => (
              <button key={k.name} type="button" className="t-kinds__btn" aria-pressed={n === at} aria-controls={`${hid}-p${n}`} onClick={() => setAt(n)}>
                <i aria-hidden="true" />
                <span>
                  <b className="t-kinds__full">{k.name}</b>
                  <b className="t-kinds__short" aria-hidden="true">
                    {k.short}
                  </b>
                  <small>{k.tag}</small>
                </span>
              </button>
            ))}
          </div>
          {kinds.items.map((k, n) => (
            <div className="t-kinds__panel" id={`${hid}-p${n}`} key={k.name} hidden={n !== at}>
              <h3 className="t-kinds__name">{k.name}</h3>
              <p className="t-kinds__world">{k.world}</p>
              <ul className="t-kinds__jobs">
                {k.jobs.map((j) => (
                  <li key={j}>{j}</li>
                ))}
              </ul>
              <p className="t-kinds__kpis">
                <b>Watch</b>
                {k.kpis}
              </p>
              <p className="t-kinds__bps">
                {k.blueprints
                  .filter((sl) => blueprintOf[sl])
                  .map((sl) => (
                    <Link className="t-use__bp" to={`/blueprints/${sl}`} key={sl}>
                      {blueprintOf[sl].name}
                      <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </Link>
                  ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamUses({ uses }: { uses: NonNullable<TeamPage['uses']> }) {
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
                  <span className="t-use__pieces">
                    {u.pieces.map((p) => (
                      <Link className="t-use__piece" to={pieceOf[p].path} key={p}>
                        {pieceOf[p].name}
                      </Link>
                    ))}
                  </span>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/* The same work at three sizes (23 Nov 2026): a hairline bar that grows with each size on a log scale, who runs it, how
   many agents with what identity, the jobs, and the month at list rates with the cheapest plan that carries it. */
function TeamSizes({ sizes }: { sizes: NonNullable<TeamPage['sizes']> }) {
  const hid = useId()
  const months = sizes.items.map((s) => monthOf(s.usage))
  const top = Math.log10(Math.max(...months.map((m) => m.list), 10))
  return (
    <section className="s-section t-sizes" id="sizes" aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {sizes.heading}
          </h2>
          <p className="s-bp-line">{sizes.line}</p>
        </div>
        <ol className="t-sizes__list">
          {sizes.items.map((s, i) => {
            const m = months[i]
            const fill = Math.max(0.12, Math.log10(Math.max(m.list, 1.5)) / top)
            return (
              <li className="t-size" key={s.label} style={{ ['--fill' as string]: fill.toFixed(3) }}>
                <span className="t-size__bar" aria-hidden="true">
                  <i />
                </span>
                <span className="t-size__label">{s.label}</span>
                <span className="t-size__agents">{s.agents}</span>
                <ul className="t-size__jobs">
                  {s.jobs.map((j) => (
                    <li key={j}>{j}</li>
                  ))}
                </ul>
                <span className="t-size__cost">
                  <b>{`About ${dollars(m.list)} a month`}</b>
                  <span>{`in usage at list rates · on ${m.plan.name}, about ${dollars(m.plan.total)} a month, before model tokens`}</span>
                </span>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export function Team({ team }: { team: TeamPage }) {
  return (
    <>
      <SceneHero pill={team.hero.pill} headline={team.hero.headline} sub={team.hero.sub} second={ui.second} scene={team.scene} place={team.name} />
      {team.checks && <TeamChecksSection checks={team.checks} />}
      {team.kinds && <TeamKindsSection kinds={team.kinds} />}
      {team.uses && <TeamUses uses={team.uses} />}
      {team.sizes && <TeamSizes sizes={team.sizes} />}
      <BlueprintGrid b={team.blueprints} />
      <KitPrices keys={team.prices} id="pricing" />
      <WhoSection who={team.who} examples={team.examples} />
      <Faq faq={team.faq} id="questions" className="s-faq--ruled" />
      <LinkGroups groups={connectionsFor(team.meta.path, team.meta.path.startsWith('/use-cases/') ? 'useCase' : 'reader')} className="s-lg--then-final" />
      <FinalCta final={team.final} id="join" />
    </>
  )
}

