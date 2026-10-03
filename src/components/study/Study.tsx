import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { StudyLink, UseCaseStudy } from '../../content/types'
import { AppScreen, type Workspace } from '../AppScreen'
import { Mark } from '../Logo'
import { Example, StepList } from './Phases'
import { tie } from './tie'
import './Study.css'

/* The beats of a worked example (pages/UseCase), after its hero and its phases, in the story's order: the problem
   (the gap), how it fits the reader's own tools or who does what, what the reader does with it, the proof on its
   screen (and the first email written from it), then the recipe and the 1 real run. Each is a claim heading and a few
   short lines on the design system; nothing moves but the screens.
   Their grounds (styles/tones.css, F2 and D1): the problem is the page's ink chapter; how it fits and who does what
   stand on the page's own ground, so the chapter never touches a second ground that reads as its twin on ink (the lit
   chapter and the lifted ink measure 1.03:1); the proof is the paper break on ink (stone on paper), its screen and mail
   glossy black. */

function Arrow({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

/* The gap: why it matters, in the reader's terms. The pains side by side under the claim, then the answer, raised. */
export function Problem({ problem, id = 'gap' }: { problem: UseCaseStudy['problem']; id?: string }) {
  const uid = useId()
  return (
    <section className="s-section s-st-problem ob-theme-dark" data-tone="ink" id={id} aria-labelledby={`${uid}-h`}>
      <div className="s-wrap">
        <header className="s-head s-head--wide s-st-head">
          <h2 className="ob-type-h2" id={`${uid}-h`}>
            {tie(problem.heading)}
          </h2>
          {problem.sub && <p className="ob-type-body-lg">{tie(problem.sub)}</p>}
        </header>
        <ul className="s-st-points" style={{ ['--s-st-cols' as string]: problem.items.length }}>
          {problem.items.map((p) => (
            <li key={p.title} className="s-st-point">
              <h3 className="s-st-point__title">{tie(p.title)}</h3>
              <p className="s-st-point__line">{tie(p.line)}</p>
            </li>
          ))}
        </ul>
        {problem.answer && (
          <p className="s-st-answer">
            <Mark size={20} />
            <span>{tie(problem.answer)}</span>
          </p>
        )}
      </div>
    </section>
  )
}

/* How it fits the reader's own tools: the claim and its line beside the 3 ways it fits. */
export function Fit({ fit, id = 'fit' }: { fit: NonNullable<UseCaseStudy['fit']>; id?: string }) {
  const uid = useId()
  return (
    <section className="s-section s-st-fit" id={id} aria-labelledby={`${uid}-h`}>
      <div className="s-wrap s-st-fit__in">
        <header className="s-st-fit__head">
          <h2 className="ob-type-h2" id={`${uid}-h`}>
            {tie(fit.heading)}
          </h2>
          <p className="s-st-lede">{tie(fit.line)}</p>
        </header>
        <ul className="s-st-rows">
          {fit.items.map((f) => (
            <li key={f.title} className="s-st-row">
              <h3 className="s-st-row__title">{tie(f.title)}</h3>
              <p className="s-st-row__line">{tie(f.line)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* Who does what: what the reader keeps, quiet, beside what Obsession runs, raised (the Gap's 2 sides). */
export function Split({ split, id = 'split' }: { split: NonNullable<UseCaseStudy['split']>; id?: string }) {
  const uid = useId()
  const side = (s: typeof split.yours, ours: boolean, n: number) => (
    <div className={'s-st-side' + (ours ? ' is-ours' : '')} aria-labelledby={`${uid}-s${n}`}>
      <p className="s-st-side__label">
        {ours && <Mark size={16} />}
        {s.label}
      </p>
      <h2 className="s-st-side__h" id={`${uid}-s${n}`}>
        {tie(s.heading)}
      </h2>
      <ul className="s-st-side__list">
        {s.items.map((it) => (
          <li key={it}>{tie(it)}</li>
        ))}
      </ul>
    </div>
  )
  return (
    <section className="s-section s-st-split" id={id}>
      <div className="s-wrap s-st-split__in">
        {side(split.yours, false, 0)}
        {side(split.ours, true, 1)}
      </div>
    </section>
  )
}

/* What the reader does with it: each use under its own name, with the example of it. Grouped when the reader has more
   than 1 kind of client (brands, retailers). */
export function Uses({ outputs, id = 'uses' }: { outputs: NonNullable<UseCaseStudy['outputs']>; id?: string }) {
  const uid = useId()
  return (
    <section className="s-section s-st-uses" id={id} aria-labelledby={`${uid}-h`}>
      <div className="s-wrap">
        <header className="s-head s-head--wide s-st-head">
          <h2 className="ob-type-h2" id={`${uid}-h`}>
            {tie(outputs.heading)}
          </h2>
          {outputs.sub && <p className="ob-type-body-lg">{tie(outputs.sub)}</p>}
        </header>
        <div className="s-st-groups">
          {outputs.groups.map((g, gi) => (
            <div key={g.label ?? gi} className="s-st-group" aria-labelledby={g.label ? `${uid}-g${gi}` : undefined}>
              {g.label && (
                <div className="s-st-group__head">
                  <h3 className="s-st-group__name" id={`${uid}-g${gi}`}>
                    {g.label}
                  </h3>
                  {g.line && <p className="s-st-group__line">{g.line}</p>}
                </div>
              )}
              <ul className="s-st-uselist" data-cols={g.items.length % 3 === 0 ? 3 : 2} style={{ ['--s-st-cols' as string]: g.items.length % 3 === 0 ? 3 : 2 }}>
                {g.items.map((u) => (
                  <li key={u.title} className="s-st-use">
                    {u.label && <p className="s-st-use__label">{u.label}</p>}
                    {g.label ? <h4 className="s-st-use__title">{tie(u.title)}</h4> : <h3 className="s-st-use__title">{tie(u.title)}</h3>}
                    <p className="s-st-use__line">{tie(u.line)}</p>
                    <Example text={u.example} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* The first email the reader writes from the proof, beside the mockup of their client's product it carries. */
function Opener({ opener }: { opener: NonNullable<UseCaseStudy['proof']['opener']> }) {
  const uid = useId()
  const { mail, mockup } = opener
  return (
    <div className="s-st-opener" aria-labelledby={`${uid}-h`}>
      <header className="s-st-opener__head">
        <h3 className="s-st-opener__h" id={`${uid}-h`}>
          {tie(opener.heading)}
        </h3>
        <p className="s-st-opener__line">{tie(opener.line)}</p>
      </header>
      <div className="s-st-opener__body">
        <figure className="s-st-mail">
          <div className="s-st-mail__card ob-object">
            <dl className="s-st-mail__meta">
              <div>
                <dt>From</dt>
                <dd>{mail.from}</dd>
              </div>
              <div>
                <dt>To</dt>
                <dd>{mail.to}</dd>
              </div>
              <div>
                <dt>Subject</dt>
                <dd className="s-st-mail__subject">{mail.subject}</dd>
              </div>
            </dl>
            <div className="s-st-mail__body">
              {mail.body.map((p) => (
                <p key={p}>{tie(p)}</p>
              ))}
            </div>
            <ul className="s-st-mail__files">
              {mail.attachments.map((a) => (
                <li key={a} className="s-st-mail__file">
                  <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                    <path d="M4.5 2.5h5l3 3v8h-8z M9.5 2.5v3h3" />
                  </svg>
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <figcaption className="s-screen-note">{mail.note}</figcaption>
        </figure>
        <figure className="s-st-sms">
          <div className="s-st-sms__card ob-object">
            <p className="s-st-sms__head">
              <span className="s-st-sms__from">{mockup.sender}</span>
              <span className="s-st-sms__channel">{mockup.channel}</span>
            </p>
            <ol className="s-st-sms__list">
              {mockup.messages.map((m) => (
                <li key={m.day} className="s-st-sms__msg">
                  <span className="s-st-sms__day">{m.day}</span>
                  <p className="s-st-sms__bubble">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <figcaption className="s-screen-note">{mockup.label}</figcaption>
        </figure>
      </div>
    </div>
  )
}

/* What lands: the claim, the steps beside the screen that shows them, then the first email written from it. */
export function StudyProof({ proof, workspace, id = 'proof' }: { proof: UseCaseStudy['proof']; workspace: Workspace; id?: string }) {
  const uid = useId()
  return (
    <section className="s-section s-st-proof ob-theme-hybrid" data-tone="paper" id={id} aria-labelledby={`${uid}-h`}>
      <div className="s-wrap">
        <header className="s-head s-head--wide s-st-head">
          <h2 className="ob-type-h2" id={`${uid}-h`}>
            {tie(proof.heading)}
          </h2>
          <p className="ob-type-body-lg">{tie(proof.line)}</p>
        </header>
        <div className="s-st-phase">
          <div className="s-st-phase__copy">{proof.steps && <StepList steps={proof.steps} level={3} />}</div>
          <div className="s-st-phase__screen">
            <div className="s-st-sticky">
              <AppScreen name={proof.screen} workspace={workspace} />
            </div>
          </div>
        </div>
        {proof.opener && <Opener opener={proof.opener} />}
      </div>
    </section>
  )
}

/* Where to go next: the recipe this example runs on and the 1 real run, as the quiet link rows every page uses. Then
   the small print that says what is made up. */
export function More({ links, fine, label }: { links: StudyLink[]; fine: string; label: string }) {
  return (
    <aside className="s-section s-st-more" aria-label={label}>
      <div className="s-wrap">
        <ul className="s-st-more__list">
          {links.map((l) => (
            <li key={l.cta.to}>
              <Link className="s-st-link" to={l.cta.to}>
                <span className="s-st-link__label">{l.label}</span>
                <span className="s-st-link__title">
                  {l.title}
                  <Arrow className="s-st-link__arrow" />
                </span>
                <span className="s-st-link__line">{tie(l.line)}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="s-st-fine">{tie(fine)}</p>
      </div>
    </aside>
  )
}
