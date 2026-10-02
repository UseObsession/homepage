import { Link } from 'react-router-dom'
import { Faq, FinalCta, Rules, SampleTeaser, SectionHead, RecipeGrid, UseCases, Watched, type UseCase } from '../components/Blocks'
import type { FormatId } from '../components/OutputFormats'
import type { QA } from '../content/shared'
import { Reveal } from '../components/Reveal'
import { RunWindow } from '../components/RunWindow'
import { CaptureForm } from '../components/CaptureForm'
import { captureFor } from '../content/capture'
import { WaysPicker } from '../components/WaysPicker'
import type { RoleId } from '../content/roles'
import type { Run } from '../content/runs'
import type { RecipeId } from '../content/recipes'

export type Audience = {
  role: RoleId
  source: string
  docTitle: string
  kicker: string
  title: string
  lede: string
  watched: string[]
  runs: Run[]
  stats?: { value: string; label: string; to?: string }[]
  outputStart?: FormatId
  statsNote?: string
  usesTitle: string
  uses: UseCase[]
  waysTitle: string
  waysLede: string
  recipes: RecipeId[]
  faq: QA[]
  finalTitle: string
  finalLine: string
}

/* Agencies, sales and marketing share one layout. Only the words and examples change. */
export function AudiencePage({ a }: { a: Audience }) {

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-in">
            <span className="hero-pill">{a.kicker}</span>
            <h1 className="h1">{a.title}</h1>
            <p className="lede">{a.lede}</p>
            <div className="hero-form">
              <CaptureForm capture={captureFor(`/${a.source}`, `${a.source}-hero`)} />
              <Watched items={a.watched} />
            </div>
          </div>
          {a.stats && (
            <div className="hero-stats">
              <ul>
                {a.stats.map((st) => (
                  <li key={st.value}>
                    {st.to ? (
                      <Link to={st.to}>
                        <b>{st.value}</b>
                        <span>{st.label}</span>
                      </Link>
                    ) : (
                      <>
                        <b>{st.value}</b>
                        <span>{st.label}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              {a.statsNote && <p className="faint">{a.statsNote}</p>}
            </div>
          )}
          <div className="hero-stage">
            <RunWindow runs={a.runs} headings={['What Obsession can do', 'What you can build with Obsession']} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead kicker="What it’s for" title={a.usesTitle} />
          <UseCases items={a.uses} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead kicker="How you run it" title={a.waysTitle} lede={a.waysLede} />
          <Reveal>
            <WaysPicker fixedRole={a.role} />
          </Reveal>
        </div>
      </section>

      <section className="section sunken">
        <div className="wrap">
          <SampleTeaser start={a.outputStart} />
        </div>
      </section>

      <section className="section" id="recipes">
        <div className="wrap">
          <SectionHead kicker="Recipes" title="Start from one of these. Change anything." />
          <RecipeGrid ids={a.recipes} />
        </div>
      </section>

      <section className="section sunken">
        <div className="wrap">
          <SectionHead kicker="Rules every run follows" title="Built to behave." />
          <Rules />
        </div>
      </section>

      <section className="section">
        <div className="wrap wrap-sm">
          <SectionHead kicker="Questions" title="What people ask first" />
          <Faq items={a.faq} />
        </div>
      </section>

      <FinalCta title={a.finalTitle} line={a.finalLine} source={`${a.source}-final`} />
    </>
  )
}
