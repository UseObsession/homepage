import { LinkGroups } from '../components/sections/LinkGroups'
import { connectionsFor } from '../lib/connections'
import { guidesCopy } from '../content/connections'
import { useId } from 'react'
import { Link } from 'react-router-dom'
import { Crumbs } from '../components/Crumbs'
import { KitScene } from '../components/kit/KitScene'
import { PieceTogether } from '../components/piece/PieceTogether'
import { CodeWindow } from '../components/sections/DevSection'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { catalog } from '../content/catalog'
import { kitAt, kitUi as ui, type KitPage } from '../content/kits'
import { pieces } from '../content/pieces'
import { cases, teams } from '../content/teams'
import { prices, type PriceKey } from '../content/prices'
import type { PieceId } from '../content/prices'
import '../components/persona/blueprint.css'
import '../components/piece/PieceHero.css'
import '../components/piece/PiecePrices.css'
import '../components/piece/PieceTogether.css'
import './Kit.css'

/* A kit's own page (/blueprints/SLUG, 22 Nov 2026), every word from content/kits, in James's piece-page shape: the hero with
   the scene under it > the pieces in the kit > their prices from content/prices.ts > the blueprints in the kit, or the
   code where a job is built > who uses it, with worked examples > questions > the form (#join). */

const named = Object.fromEntries(pieces.map((p) => [p.id, { name: p.name, path: p.meta.path }])) as Record<PieceId, { name: string; path: string }>
const blueprintBySlug = Object.fromEntries(catalog.recipes.map((r) => [r.slug, r]))
/* Every page a worked example can point at, by address: the older studies, the team pages and the use case pages in
   the team template (content/teams), so a chip never drops because a page moved template. */
const studyByPath: Record<string, { name: string; path: string }> = {
  ...Object.fromEntries(catalog.studies.map((s) => [s.path, { name: s.name, path: s.path }])),
  ...Object.fromEntries([...teams, ...cases].map((t) => [t.meta.path, { name: t.name, path: t.meta.path }])),
}
/* A numeral never ends a line apart from its word. */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1 ')

export function KitAt({ path }: { path: string }) {
  const kit = kitAt(path)
  return kit ? <Kit kit={kit} /> : null
}

/* The hero every kit and team page shares: the tag, the H1 (the searched phrase, then the claim after its colon), the 2
   sentences, Start free and the second button, then the scene in its product window. */
export function SceneHero({ pill, headline, sub, second, scene, place }: { pill: string; headline: string; sub: string; second: { label: string; to: string }; scene: KitPage['scene']; place: string }) {
  const id = useId()
  const cut = headline.indexOf(': ')
  const key = cut > 0 ? headline.slice(0, cut + 1) : headline
  const claim = cut > 0 ? headline.slice(cut + 2) : ''
  return (
    <section className="s-pk-hero k-hero" aria-labelledby={`${id}-h`}>
      <div className="s-wrap s-pk-hero__wrap">
        <Crumbs />
        <div className="s-pk-hero__words ob-anim-hero">
          <a className="s-pk-hero__tag" href={ui.primary.to}>
            <span className="s-pk-hero__dot" aria-hidden="true" />
            {pill}
          </a>
          <h1 className="s-pk-hero__h" id={`${id}-h`}>
            <span className="s-pk-hero__key">{key}</span>
            {claim && <span className="s-pk-hero__claim"> {claim}</span>}
          </h1>
          <p className="s-pk-hero__sub">{sub}</p>
          <div className="s-pk-hero__act">
            <a className="ob-btn ob-btn--lg" href={ui.primary.to}>
              <span className="ob-btn-label">{ui.primary.label}</span>
            </a>
            <a className="ob-btn ob-btn--lg ob-btn--secondary" href={second.to}>
              <span className="ob-btn-label">{second.label}</span>
            </a>
          </div>
        </div>
        <div className="s-pk-hero__stage s-bp-cross k-hero__stage ob-anim-hero-object">
          <KitScene scene={scene} ui={ui} kit={place} />
        </div>
      </div>
    </section>
  )
}

export function KitPrices({ keys, id }: { keys: PriceKey[]; id: string }) {
  const hid = useId()
  return (
    <section className="s-section s-pk-price" data-tone="alt" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap s-pk-price__in">
        <div className="s-pk-price__head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {ui.priceHeading}
          </h2>
          <p className="s-bp-line">
            {ui.priceLine} {ui.billed}
          </p>
          <Link className="s-bp-link s-pk-price__all" to={ui.allPrices.to}>
            {ui.allPrices.label}
          </Link>
        </div>
        <dl className="s-pk-price__rows s-bp-cross" aria-label={ui.prices}>
          {keys.map((k) => {
            const p = prices[k]
            return (
              <div className="s-pk-price__row" key={k}>
                <dt className="s-pk-price__name">{p.name}</dt>
                <dd className="s-pk-price__cost">
                  <span className="s-pk-price__amount">{p.amount}</span> <span className="s-pk-price__unit">{tie(p.unit)}</span>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}

export function BlueprintGrid({ b }: { b?: { heading: string; line: string; slugs: string[] } }) {
  const hid = useId()
  if (!b) return null
  return (
    <section className="s-section k-bps" id="blueprints" aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {b.heading}
          </h2>
          <p className="s-bp-line">{b.line}</p>
        </div>
        <ul className="k-bps__list">
          {b.slugs.map((slug) => {
            const r = blueprintBySlug[slug]
            if (!r) return null
            return (
              <li key={slug}>
                <Link className="k-bps__link" to={`/blueprints/${slug}`}>
                  <span className="k-bps__name">
                    {r.name}
                    <svg className="k-bps__arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                      <path d="M6 3.5 10.5 8 6 12.5" />
                    </svg>
                  </span>
                  <span className="k-bps__line">{r.line}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <Link className="s-bp-link k-bps__all" to={ui.browse.to}>
          {ui.browse.label}
        </Link>
      </div>
    </section>
  )
}

function KitCode({ kit }: { kit: KitPage }) {
  const hid = useId()
  const c = kit.code
  if (!c) return null
  return (
    <section className="s-section k-code" id="code" aria-labelledby={`${hid}-h`}>
      <div className="s-wrap k-code__in">
        <div className="k-code__words">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {c.heading}
          </h2>
          <p className="s-bp-line">{c.line}</p>
          <Link className="s-bp-link" to={ui.api.to}>
            {ui.api.label}
          </Link>
        </div>
        <div className="k-code__win s-bp-cross">
          <CodeWindow code={c.code} label={c.label} />
        </div>
      </div>
    </section>
  )
}

export function WhoSection({ who, examples: ex }: { who: KitPage['who']; examples?: KitPage['examples'] }) {
  const hid = useId()
  const examples = (ex?.paths ?? []).map((p) => studyByPath[p]).filter(Boolean)
  return (
    <section className="s-section k-who" data-tone="alt" id="who" aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {who.heading}
          </h2>
        </div>
        <ul className="k-who__list">
          {who.items.map((w) => (
            <li className="k-who__item" key={w.role}>
              <span className="k-who__role">{w.role}</span>
              <span className="k-who__gets">{w.gets}</span>
              <span className="k-who__watch">
                <span className="k-who__watch-label">{ui.watch}</span> {w.watch}
              </span>
            </li>
          ))}
        </ul>
        {examples.length > 0 && (
          <div className="k-who__ex">
            <span className="k-who__ex-label">{ex?.heading}</span>
            <ul className="k-who__chips">
              {examples.map((s) => (
                <li key={s.path}>
                  <Link className="k-who__chip" to={s.path}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export function Kit({ kit }: { kit: KitPage }) {
  return (
    <>
      <SceneHero pill={ui.pill} headline={kit.hero.headline} sub={kit.hero.sub} second={kit.blueprints ? ui.blueprints : ui.code} scene={kit.scene} place={kit.name} />
      <PieceTogether together={kit.pieces} named={named} label={kit.pieces.heading} id="pieces" />
      <KitPrices keys={kit.pieces.prices} id="pricing" />
      <BlueprintGrid b={kit.blueprints} />
      <KitCode kit={kit} />
      <WhoSection who={kit.who} examples={kit.examples} />
      <Faq faq={kit.faq} id="questions" className="s-faq--ruled" />
      <LinkGroups
        groups={connectionsFor(kit.meta.path, 'reader').map((g) => ({ ...g, name: guidesCopy.recipe.name }))}
        className="s-lg--then-final"
      />
      <FinalCta final={kit.final} id="join" />
    </>
  )
}
