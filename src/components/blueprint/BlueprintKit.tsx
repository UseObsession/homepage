import { Link } from 'react-router-dom'
import { blueprintUi as ui, kitOrder } from '../../content/blueprint-ui'
import { catalog } from '../../content/catalog'
import { kitLinks, type KitLink } from '../../content/kitPaths'
import { kits } from '../../content/kits'
import { PersonaGlyph } from '../persona/icons'
import '../../pages/Kit.css'
import './blueprint.css'

/* A blueprint's kit (22 Nov 2026): the kit whose `blueprints.slugs` (content/kits) lists it, the first in kitOrder when 2
   do, with the kit's other blueprints in the kit's own order. A blueprint no kit lists has no kit, and its page shows
   neither the badge nor the section. */

export type BlueprintKitOf = { link: KitLink; others: string[] }

const linkOf = Object.fromEntries(kitLinks.map((k) => [k.id, k])) as Record<KitLink['id'], KitLink>
const slugsOf = Object.fromEntries(kits.map((k) => [k.id, k.blueprints?.slugs ?? []])) as Record<KitLink['id'], string[]>
const blueprintBySlug = Object.fromEntries(catalog.recipes.map((r) => [r.slug, r]))

export function kitOfBlueprint(slug: string): BlueprintKitOf | undefined {
  const id = kitOrder.find((k) => slugsOf[k]?.includes(slug))
  if (!id) return undefined
  return { link: linkOf[id], others: slugsOf[id].filter((s) => s !== slug && blueprintBySlug[s]) }
}

function Arrow({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

/* The hero's badge, beside the "Blueprint" pill: the kit's icon, "{kit} kit" and an arrow, as the team pages tag each use
   case with its kit (pages/Team.css .t-use__kit), at the pill's height so the 2 sit on 1 line. */
export function KitBadge({ link }: { link: KitLink }) {
  return (
    <Link className="bp-badge" to={link.path}>
      <span className="bp-badge__ic" aria-hidden="true">
        <PersonaGlyph name={link.icon} />
      </span>
      {ui.badge(link.name)}
      <Arrow className="bp-badge__arrow" />
    </Link>
  )
}

/* The kit's other blueprints as the kit page's cards (pages/Kit.css .k-bps), at most ui.kit.max, in the kit's order. */
export function KitCards({ kit }: { kit: BlueprintKitOf }) {
  return (
    <ul className="k-bps__list bp-kit__list">
      {kit.others.slice(0, ui.kit.max).map((slug) => {
        const r = blueprintBySlug[slug]
        return (
          <li key={slug}>
            <Link className="k-bps__link" to={`/blueprints/${slug}`}>
              <span className="k-bps__name">
                {r.name}
                <Arrow className="k-bps__arrow" />
              </span>
              <span className="k-bps__line">{r.line}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

/* The section's way to the kit's page, under its claim (which names the kit): the kit's icon in a tile, then "See the kit". */
export function KitLinkAction({ link }: { link: KitLink }) {
  return (
    <Link className="ob-btn ob-btn--link bp-kit__to" to={link.path}>
      <span className="bp-kit__ic" aria-hidden="true">
        <PersonaGlyph name={link.icon} />
      </span>
      <span className="ob-btn-label">{ui.kit.link}</span>
      <Arrow className="ob-btn-glyph ob-btn-arrow" />
    </Link>
  )
}
