import { useId } from 'react'
import { Link } from 'react-router-dom'
import { Crumbs } from '../components/Crumbs'
import { KitOrbit } from '../components/kit/KitOrbit'
import { PersonaGlyph } from '../components/persona/icons'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { kitLinks } from '../content/kitPaths'
import { kits, kitsHub as hub } from '../content/kits'
import { pieces } from '../content/pieces'
import '../components/persona/blueprint.css'
import '../components/piece/PieceHero.css'
import './Kit.css'

/* The kits hub (/kits, 22 Nov 2026): the hero with the orbit under it > the 6 kits as cards, each with the pieces it
   uses > the door for teams who don't code > questions > the form. Words: content/kits (kitsHub, each kit's name, line
   and pieces). */

const pieceName = Object.fromEntries(pieces.map((p) => [p.id, p.name]))

export function Kits() {
  const id = useId()
  const cardsId = useId()
  return (
    <>
      <section className="s-pk-hero k-hero" aria-labelledby={`${id}-h`}>
        <div className="s-wrap s-pk-hero__wrap">
          <Crumbs />
          <div className="s-pk-hero__words ob-anim-hero">
            <h1 className="s-pk-hero__h" id={`${id}-h`}>
              <span className="s-pk-hero__key">{hub.hero.headline.split(': ')[0]}:</span>
              <span className="s-pk-hero__claim"> {hub.hero.headline.split(': ')[1]}</span>
            </h1>
            <p className="s-pk-hero__sub">{hub.hero.sub}</p>
            <div className="s-pk-hero__act">
              <a className="ob-btn ob-btn--lg" href="#join">
                <span className="ob-btn-label">{hub.final.capture.button}</span>
              </a>
              <Link className="ob-btn ob-btn--lg ob-btn--secondary" to={hub.door.cta.to}>
                <span className="ob-btn-label">{hub.door.cta.label}</span>
              </Link>
            </div>
          </div>
          <div className="k-hub__stage ob-anim-hero-object">
            <KitOrbit label={hub.orbit.label} caption={hub.orbit.caption} />
          </div>
        </div>
      </section>

      <section className="s-section" aria-labelledby={`${cardsId}-h`}>
        <div className="s-wrap">
          <h2 className="sr-only" id={`${cardsId}-h`}>
            {hub.meta.title.split(':')[0]}
          </h2>
          <ul className="k-hub__cards">
            {kitLinks.map((k) => {
              const kit = kits.find((x) => x.id === k.id)
              return (
                <li key={k.id}>
                  <Link className="k-hub__card" to={k.path}>
                    <span className="k-hub__ic" aria-hidden="true">
                      <PersonaGlyph name={k.icon} />
                    </span>
                    <span className="k-hub__name">{k.name}</span>
                    <svg className="k-hub__chev" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                      <path d="M6 3.5 10.5 8 6 12.5" />
                    </svg>
                    <span className="k-hub__line">{kit?.hero.sub.split('. ')[0]}.</span>
                    <span className="k-hub__pieces">
                      {kit?.pieces.items.map((p) => (
                        <span className="k-hub__piece" key={p.piece}>
                          {pieceName[p.piece]}
                        </span>
                      ))}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="k-hub__door">
            <p>{hub.door.line}</p>
            <Link className="ob-btn ob-btn--secondary" to={hub.door.cta.to}>
              <span className="ob-btn-label">{hub.door.cta.label}</span>
            </Link>
          </div>
        </div>
      </section>

      <Faq faq={hub.faq} id="questions" className="s-faq--ruled" />
      <FinalCta final={hub.final} id="join" />
    </>
  )
}
