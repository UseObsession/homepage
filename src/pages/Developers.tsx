import { useId, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LinkGroups } from '../components/sections/LinkGroups'
import { connectionsFor } from '../lib/connections'
import { CodeWindow } from '../components/sections/DevSection'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { CardGrid } from '../components/v5/CardGrid'
import { Hero5 } from '../components/v5/Hero5'
import { OpenSource } from '../components/v5/OpenSource'
import { api, page, type ApiCall, type ApiSections } from '../content/pages/developers'
import type { Cta } from '../content/types'
import './StoryPage.css'
import './Developers.css'

/* /developers, composed from content/pages/developers.ts in the order its comment gives: the hero with the quickstart
   beside it > #pieces (1 code block per piece) > #personas > #webhooks (the nav's Webhooks link) > #mcp >
   #integrations (the nav links its #baserow and #supabase cards) > #prices (from content/prices.ts) > #open-source >
   the guides > questions > "Get API access" (#join). The sections only this page draws live here, on the shared v5 head
   (.v5-section, .v5-head, .v5-h2, .v5-line) so they read as the rest of the site; their own classes start s-api-. */

/* A section on the v5 head: the claim, its 1 line, then the section's body. */
function ApiSection({ id, heading, line, children }: { id: string; heading: string; line: string; children: ReactNode }) {
  const hid = useId()
  return (
    <section className={`v5-section s-api s-api--${id}`} id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="v5-head">
          <h2 className="v5-h2" id={`${hid}-h`}>
            {heading}
          </h2>
          <p className="v5-line">{line}</p>
        </div>
        {children}
      </div>
    </section>
  )
}

function More({ cta }: { cta: Cta }) {
  return (
    <Link className="v5-link s-api-more" to={cta.to}>
      {cta.label}
    </Link>
  )
}

/* A list of calls or events: the name in mono, 1 plain line beside it. */
function Calls({ items }: { items: ApiCall[] }) {
  return (
    <dl className="s-api-calls">
      {items.map((c) => (
        <div className="s-api-call" key={c.name}>
          <dt>
            <code>{c.name}</code>
          </dt>
          <dd>{c.line}</dd>
        </div>
      ))}
    </dl>
  )
}

function Pieces({ pieces }: { pieces: ApiSections['pieces'] }) {
  return (
    <ApiSection id="pieces" heading={pieces.heading} line={pieces.line}>
      <ul className="s-api-pieces">
        {pieces.items.map((p) => (
          <li className="s-api-piece" key={p.id} id={`piece-${p.id}`}>
            <div className="s-api-piece__words">
              <h3 className="s-api-piece__name">{p.name}</h3>
              <p className="s-api-piece__line">{p.line}</p>
              <More cta={p.link} />
            </div>
            <div className="s-api-piece__code">
              <CodeWindow code={p.code} label={p.name} />
            </div>
          </li>
        ))}
      </ul>
    </ApiSection>
  )
}

function Personas({ personas }: { personas: ApiSections['personas'] }) {
  return (
    <ApiSection id="personas" heading={personas.heading} line={personas.line}>
      <div className="s-api-split">
        <div className="s-api-split__words">
          <dl className="s-api-facts">
            {personas.facts.map((f) => (
              <div className="s-api-fact" key={f.term}>
                <dt>{f.term}</dt>
                <dd>{f.line}</dd>
              </div>
            ))}
          </dl>
          <More cta={personas.link} />
        </div>
        <div className="s-api-split__code">
          <CodeWindow code={personas.code} />
        </div>
      </div>
    </ApiSection>
  )
}

function Webhooks({ webhooks }: { webhooks: ApiSections['webhooks'] }) {
  return (
    <ApiSection id="webhooks" heading={webhooks.heading} line={webhooks.line}>
      <div className="s-api-split">
        <div className="s-api-split__words">
          <Calls items={webhooks.events} />
          <p className="s-api-foot">{webhooks.foot}</p>
        </div>
        <div className="s-api-split__code">
          <CodeWindow code={webhooks.code} />
        </div>
      </div>
    </ApiSection>
  )
}

function Mcp({ mcp }: { mcp: ApiSections['mcp'] }) {
  return (
    <ApiSection id="mcp" heading={mcp.heading} line={mcp.line}>
      <div className="s-api-split">
        <div className="s-api-split__words">
          <CodeWindow code={mcp.setup} />
          <p className="s-api-foot">{mcp.note}</p>
        </div>
        <div className="s-api-split__code">
          <Calls items={mcp.tools} />
        </div>
      </div>
    </ApiSection>
  )
}

function Prices({ prices }: { prices: ApiSections['prices'] }) {
  return (
    <ApiSection id="prices" heading={prices.heading} line={prices.line}>
      <ul className="s-api-prices">
        {prices.groups.map((g) => (
          <li className="s-api-pgroup" key={g.id}>
            <h3 className="s-api-pgroup__name">
              <Link to={g.to}>{g.name}</Link>
            </h3>
            <dl className="s-api-prows">
              {g.rows.map((r) => (
                <div className="s-api-prow" key={r.name}>
                  <dt>{r.name}</dt>
                  <dd>
                    <span className="s-api-prow__price">
                      <strong>{r.amount}</strong> {r.unit}
                    </span>
                    {r.note && <span className="s-api-prow__note">{r.note}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
      <More cta={prices.cta} />
    </ApiSection>
  )
}

export function Developers() {
  return (
    <>
      <Hero5 hero={page.hero} reader="developers" visual={<CodeWindow code={api.quickstart.code} label={api.quickstart.label} />} />
      <Pieces pieces={api.pieces} />
      <Personas personas={api.personas} />
      <Webhooks webhooks={api.webhooks} />
      <Mcp mcp={api.mcp} />
      {page.integrations && <CardGrid grid={page.integrations} id="integrations" />}
      <Prices prices={api.prices} />
      {page.openSource && <OpenSource open={page.openSource} id="open-source" />}
      <LinkGroups groups={connectionsFor('/developers', 'reader')} />
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
