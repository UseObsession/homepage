import { useId, type ReactNode } from 'react'
import { Crumbs } from '../Crumbs'
import './Hero.css'
import './IndexHero.css'

/* The hero of an index page (Resources, Use cases, Blog), as the Recipes index has it: the breadcrumb, then the claim
   and its line, centred on the page's axis, with the design system's hero load sequence. `children` sit under the line
   (the blog's feed link). */
export function IndexHero({ headline, sub, children }: { headline: string; sub: string; children?: ReactNode }) {
  const id = useId()
  return (
    <section className="s-hero s-ix-hero" aria-labelledby={`${id}-h`}>
      <div className="s-wrap s-hero-wrap">
        <Crumbs />
        <div className="s-hero-head ob-anim-hero">
          <h1 className="s-hero-h s-ix-hero__h" id={`${id}-h`}>
            {headline}
          </h1>
          <p className="s-hero-sub s-ix-hero__sub">{sub}</p>
          {children}
        </div>
      </div>
    </section>
  )
}
