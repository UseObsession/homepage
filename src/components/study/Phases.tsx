import { useId } from 'react'
import type { StudyStep, UseCaseStudy } from '../../content/types'
import { AppScreen, type Workspace } from '../AppScreen'
import { tie } from './tie'
import './Study.css'

/* What the customer in the example chose or got, set off under the step it belongs to: a ruled line led by "Example",
   so a reader always knows which words are the product and which are the example. */
export function Example({ text, label = 'Example' }: { text: string; label?: string }) {
  return (
    <p className="s-st-ex">
      <span className="s-st-ex__k">{label}</span>
      {tie(text)}
    </p>
  )
}

/* Numbered steps: the number, the step's title, its line, and the example. `start` continues the count across phases.
   `level` is the titles' heading level: 4 under a phase's h3, 3 where the steps sit straight under a section's h2
   (StudyProof), so the outline never skips a level. */
export function StepList({ steps, start = 1, className = '', level = 4 }: { steps: StudyStep[]; start?: number; className?: string; level?: 3 | 4 }) {
  const Title = level === 3 ? 'h3' : 'h4'
  return (
    <ol className={`s-st-steps ${className}`} start={start}>
      {steps.map((s, i) => (
        <li key={s.title} className="s-st-step">
          <span className="s-st-step__n ob-num" aria-hidden="true">
            {start + i}
          </span>
          <Title className="s-st-step__title">{s.title}</Title>
          <p className="s-st-step__line">{tie(s.line)}</p>
          {s.example && <Example text={s.example} />}
        </li>
      ))}
    </ol>
  )
}

/* How it runs (docs/REBUILD.md 2, beat 2), for a worked example: the phases in order. Each phase is its title, its line
   and its chips beside the screen that shows it, with its numbered steps under the title; the screen stays in view
   while the steps go by, and plays its story as it arrives. A phase without a screen sets its steps beside its title.
   The count runs on across phases, as James numbered them. */
export function Phases({ how, workspace, id = 'how' }: { how: UseCaseStudy['how']; workspace: Workspace; id?: string }) {
  const uid = useId()
  const starts = how.steps.reduce<number[]>((acc, _, i) => [...acc, i === 0 ? 1 : acc[i - 1] + how.steps[i - 1].steps.length], [])
  return (
    <section className="s-section s-st-how" id={id} aria-labelledby={`${uid}-h`}>
      <div className="s-wrap">
        <header className="s-head s-head--wide s-st-head">
          <h2 className="ob-type-h2" id={`${uid}-h`}>
            {tie(how.heading)}
          </h2>
          {how.sub && <p className="ob-type-body-lg">{tie(how.sub)}</p>}
        </header>

        <div className="s-st-phases">
          {how.steps.map((p, i) => (
            <article key={p.title} className={'s-st-phase' + (p.screen ? '' : ' s-st-phase--words')} aria-labelledby={`${uid}-p${i}`}>
              <div className="s-st-phase__copy">
                <header className="s-st-phase__head">
                  <h3 className="s-st-phase__title" id={`${uid}-p${i}`}>
                    {tie(p.title)}
                  </h3>
                  <p className="s-st-phase__line">{tie(p.line)}</p>
                  {p.chips && p.chips.length > 0 && (
                    <ul className="s-st-chips">
                      {p.chips.map((c) => (
                        <li key={c} className="ob-tag">
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                </header>
                {p.screen && <StepList steps={p.steps} start={starts[i]} />}
              </div>
              {p.screen ? (
                <div className="s-st-phase__screen">
                  <div className="s-st-sticky">
                    <AppScreen name={p.screen} workspace={workspace} />
                  </div>
                </div>
              ) : (
                <StepList steps={p.steps} start={starts[i]} className="s-st-steps--beside" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
