import { useState } from 'react'
import { FinalCta } from '../components/Blocks'
import { Reveal } from '../components/Reveal'
import { report } from '../content/report'
import './SampleReport.css'

export function SampleReport() {

  return (
    <>
      <section className="section rep-top">
        <div className="wrap">
          <p className="kicker">{report.kicker}</p>
          <h1 className="h2 rep-h">{report.headline}</h1>
          <p className="lede">{report.summary}</p>

          <ul className="rep-figs">
            {report.figures.map((f) => (
              <li key={f.label} className="card">
                <b>{f.value}</b>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker rep-k">Scorecard · 4 journeys, 1 test customer each</p>
          <ul className="rep-cards">
            {report.journeys.map((j) => (
              <Reveal as="li" key={j.n} className={`card rep-card ${j.tone === 'bad' ? 'is-gap' : ''}`}>
                <div className="rep-card-top">
                  <h2 className="h3">
                    {j.n}. {j.name}
                  </h2>
                  <span className={`tag ${j.tone}`}>{j.tag}</span>
                </div>
                <p className="muted">{j.body}</p>
              </Reveal>
            ))}
          </ul>

          <div className="rep-proof">
            <Reveal className="rep-shot">
              <p className="kicker rep-k">Proof · screenshot from the checkout session</p>
              <figure className="card">
                <img src="/report/checkout-capture.png" alt="The store's checkout page with the test customer's inbox address filled in and the marketing box ticked" width={760} height={475} />
                <figcaption className="faint">Captured during the checkout journey, one of 4 frames that session recorded.</figcaption>
              </figure>
            </Reveal>
            <Reveal className="rep-panels">
              <div className="card rep-panel">
                <div className="rep-panel-top">
                  <h2 className="h3">Test customer set up</h2>
                  <span className="tag ok">Verified</span>
                </div>
                <dl>
                  {report.setup.map((r) => (
                    <div key={r.k}>
                      <dt>{r.k}</dt>
                      <dd className={r.k === 'Inbox' ? 'mono' : ''}>{r.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="card rep-panel">
                <div className="rep-panel-top">
                  <h2 className="h3">Observation</h2>
                  <span className="tag bad">2 gaps</span>
                </div>
                <dl>
                  {report.result.map((r) => (
                    <div key={r.k}>
                      <dt>{r.k}</dt>
                      <dd>{r.v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="rep-obs">{report.observation}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {report.gaps.map((g) => (
        <Gap key={g.n} g={g} />
      ))}

      <FinalCta title="Name a company. Get a report like this." line="Tell us which store or company you’d check first." source="sample-report" />
    </>
  )
}

function Gap({ g }: { g: (typeof report.gaps)[number] }) {
  const [showDraft, setShowDraft] = useState(false)
  return (
    <section className="section rep-gap">
      <div className="wrap">
        <Reveal className="rep-gap-head">
          <p className="kicker">
            Gap {g.n} of 2 · {g.journey}
          </p>
          <h2 className="h2">{g.title}</h2>
          <p className="lede">{g.finding}</p>
          <p className="faint rep-consent">{report.consent}</p>
        </Reveal>

        <div className="rep-gap-grid">
          <Reveal className="card rep-nothing">
            <p className="rep-nothing-mark">Nothing arrived</p>
            <p className="muted">
              We watched <span className="mono">{g.inbox}</span> from {g.window}. No message from {report.store} reached it in that window.
            </p>
            <p className="muted">The storefront capture is why this is a finding rather than a guess: the journey completed, so there was something to respond to.</p>
          </Reveal>
          <Reveal className="card rep-basket">
            <p className="kicker">What the session left behind</p>
            <p className="rep-item">
              <span>{g.basket.item}</span>
              <b>{g.basket.price}</b>
            </p>
            <p className="faint">Read off the storefront during the session, not from the store’s systems.</p>
          </Reveal>
        </div>

        <div className="rep-draft">
          <button className="btn-2" onClick={() => setShowDraft((s) => !s)} aria-expanded={showDraft}>
            {showDraft ? 'Hide the draft' : 'See the follow up we drafted from this evidence'}
          </button>
          {showDraft && (
            <figure className="rep-draft-fig">
              <p className="rep-draft-band">Draft · written from the evidence · not sent</p>
              <p className="rep-draft-subj">
                <span className="faint">Subject</span> {g.draft.subject}
              </p>
              <img src={g.draft.image} alt={`Draft email: ${g.draft.subject}`} width={1200} height={1600} loading="lazy" />
            </figure>
          )}
        </div>
      </div>
    </section>
  )
}
