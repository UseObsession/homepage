import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Crumbs } from '../components/Crumbs'
import { LinkGroups } from '../components/sections/LinkGroups'
import { Compare as CompareTable } from '../components/v5/Compare'
import { Parity } from '../components/v5/Parity'
import { page } from '../content/pages/compare'
import { refUi } from '../content/reference'
import { rowsOf } from '../lib/refLinks'
import '../components/v5/Hero5.css'
import './StoryPage.css'

/* /compare, composed from content/pages/compare.ts: the claim (a plain hero, words only: the table is the page's
   object), the table, when you might want something else, Obsession beside each tool (1 page per tool, and the
   alternatives pages, content/reference.ts), questions, the early access form. */
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
      <LinkGroups
        groups={[
          { id: refUi.compareList.vs.id, name: refUi.compareList.vs.name, line: refUi.compareList.vs.line, rows: rowsOf('compare') },
          {
            id: refUi.compareList.alternatives.id,
            name: refUi.compareList.alternatives.name,
            line: refUi.compareList.alternatives.line,
            rows: [
              ...rowsOf('alternatives'),
              refUi.compareList.alternatives.all,
              { label: refUi.compareList.glossary.label, to: refUi.compareList.glossary.to, line: refUi.compareList.glossary.line },
            ],
          },
        ].filter((g) => g.rows.length > 0)}
      />
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
