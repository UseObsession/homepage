import { useId } from 'react'
import type { PiecePage } from '../../content/pieces/types'
import type { Cta } from '../../content/types'
import { Crumbs } from '../Crumbs'
import { CodeWindow } from '../sections/DevSection'
import '../persona/blueprint.css'
import './PieceHero.css'

/* A piece page's hero (pages/Piece.tsx): the breadcrumb, the tag, the H1 (the searched phrase in full ink, the claim
   after its first colon in the second ink), the 2 sentences and the 2 buttons in 1 centred column, as Home's hero; then
   a ruled line at the container's width with the code under it, in the design system's code well. Words: content/pieces
   (hero) and pieceUi. */

type Ui = { pill: string; primary: Cta; secondary: Cta; code: string }

export function PieceHero({ hero, ui }: { hero: PiecePage['hero']; ui: Ui }) {
  const id = useId()
  const cut = hero.headline.indexOf(': ')
  const key = cut > 0 ? hero.headline.slice(0, cut + 1) : hero.headline
  const claim = cut > 0 ? hero.headline.slice(cut + 2) : ''
  return (
    <section className="s-pk-hero" aria-labelledby={`${id}-h`}>
      <div className="s-wrap s-pk-hero__wrap">
        <Crumbs />
        <div className="s-pk-hero__words ob-anim-hero">
          <a className="s-pk-hero__tag" href={ui.primary.to}>
            <span className="s-pk-hero__dot" aria-hidden="true" />
            {ui.pill}
          </a>
          <h1 className="s-pk-hero__h" id={`${id}-h`}>
            <span className="s-pk-hero__key">{key}</span>
            {claim && <span className="s-pk-hero__claim"> {claim}</span>}
          </h1>
          <p className="s-pk-hero__sub">{hero.sub}</p>
          <div className="s-pk-hero__act">
            <a className="ob-btn ob-btn--lg" href={ui.primary.to}>
              <span className="ob-btn-label">{ui.primary.label}</span>
            </a>
            <a className="ob-btn ob-btn--lg ob-btn--secondary" href={ui.secondary.to}>
              <span className="ob-btn-label">{ui.secondary.label}</span>
            </a>
          </div>
        </div>
        <div className="s-pk-hero__stage s-bp-cross">
          <div className="s-pk-hero__code ob-anim-hero-object">
            <CodeWindow code={hero.code} label={ui.code} />
          </div>
        </div>
      </div>
    </section>
  )
}
