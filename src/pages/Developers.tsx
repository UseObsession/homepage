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
import { api, page, type ApiCall, type ApiFacts, type ApiSections } from '../content/pages/developers'
import type { Cta } from '../content/types'
import './StoryPage.css'
import './Developers.css'

/* /developers, composed from content/pages/developers.ts in the order its comment gives: the hero with the quickstart
   beside it > #pieces (1 code block per piece) > #personas > #recipes (ours or your own job) > #delivery (how events
   reach you: the 6 channels in their order, each beside its code; the first is the webhook, #webhooks, the nav's
   Webhooks link, with every event name under it; then the line on a server that's down) > #mcp >
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

/* Short facts beside the code, with a link under them (#personas, #recipes). */
function Facts({ id, section }: { id: string; section: ApiFacts }) {
  return (
    <ApiSection id={id} heading={section.heading} line={section.line}>
      <div className="s-api-split">
        <div className="s-api-split__words">
          <dl className="s-api-facts">
            {section.facts.map((f) => (
              <div className="s-api-fact" key={f.term}>
                <dt>{f.term}</dt>
                <dd>{f.line}</dd>
              </div>
            ))}
          </dl>
          <More cta={section.link} />
        </div>
        <div className="s-api-split__code">
          <CodeWindow code={section.code} />
        </div>
      </div>
    </ApiSection>
  )
}

/* How events reach you: 1 row per channel, numbered in its order, its name and line beside its code (the #pieces row);
   the webhook's row lists every event name. The line on a server that's down closes the section. */
function Delivery({ delivery }: { delivery: ApiSections['delivery'] }) {
  return (
    <ApiSection id="delivery" heading={delivery.heading} line={delivery.line}>
      <ol className="s-api-pieces">
        {delivery.channels.map((c, i) => (
          <li className="s-api-piece" key={c.id} id={c.anchor}>
            <div className="s-api-piece__words">
              <p className="s-api-channel__n" aria-hidden="true">
                {i + 1}
              </p>
              <h3 className="s-api-piece__name">{c.name}</h3>
              <p className="s-api-piece__line">{c.line}</p>
              {c.events && (
                <div className="s-api-channel__events">
                  <p className="s-api-foot">{delivery.eventsLabel}</p>
                  <Calls items={c.events} />
                </div>
              )}
            </div>
            <div className="s-api-piece__code">
              <CodeWindow code={c.code} label={c.name} />
            </div>
          </li>
        ))}
      </ol>
      <p className="s-api-down">{delivery.down}</p>
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
      <Facts id="personas" section={api.personas} />
      <Facts id="recipes" section={api.recipes} />
      <Delivery delivery={api.delivery} />
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
