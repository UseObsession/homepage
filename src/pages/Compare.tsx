import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Crumbs } from '../components/Crumbs'
import { Compare as CompareTable } from '../components/v5/Compare'
import { Parity } from '../components/v5/Parity'
import { page } from '../content/pages/compare'
import '../components/v5/Hero5.css'
import './StoryPage.css'

/* /compare, composed from content/pages/compare.ts: the claim (a plain hero, words only: the table is the page's
   object), the table, when you might want something else, questions, the waitlist. */
export function Compare() {
  return (
    <>
      <section className="v5-hero v5-hero--text" aria-labelledby="compare-h">
        <div className="s-wrap v5-hero-wrap">
          <Crumbs />
          <div className="v5-hero-words ob-anim-hero">
            <h1 className="v5-hero-h" id="compare-h">
              {page.hero.headline}
            </h1>
            <p className="v5-hero-sub">{page.hero.sub}</p>
          </div>
        </div>
      </section>
      {page.compare && <CompareTable compare={page.compare} id="table" />}
      {page.parity && <Parity parity={page.parity} id="tools" />}
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
