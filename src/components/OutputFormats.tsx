import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { prefersReducedMotion, useInView } from '../hooks/useReveal'
import './OutputFormats.css'

/* One real run (the September store check, Brand G's cart journey) shown in every format it can arrive in. */
export type FormatId = 'pdf' | 'email' | 'slack' | 'clay' | 'webhook' | 'workflow'
type Format = { id: FormatId; label: string; line: string; view: () => ReactNode }

const formats: Format[] = [
  {
    id: 'pdf',
    label: 'PDF report',
    line: 'A report to forward to anyone, verdicts first, then the proof behind each one.',
    view: () => (
      <Link to="/sample-output" className="of-pdf" aria-label="Open the full report">
        <img className="of-page back" src="/report/page-2.jpg" alt="" width={992} height={1403} loading="lazy" />
        <img className="of-page front" src="/report/page-1.jpg" alt="Page 1 of the full report" width={992} height={1403} loading="lazy" />
      </Link>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    line: 'An alert the moment a verdict lands, or one digest on the schedule you set.',
    view: () => (
      <div className="of-client">
        <div className="of-bar">
          <i />
          <i />
          <i /> Inbox
        </div>
        <div className="of-body">
          <dl className="of-meta">
            <dt>From</dt>
            <dd>Obsession alerts</dd>
            <dt>To</dt>
            <dd>you@agency.com</dd>
          </dl>
          <p className="of-subj">Brand G: no basket reminder in 48 hours</p>
          <span className="tag bad">Silent · Cart journey</span>
          <div className="of-tl">
            <div>
              <time>22 Sep, 02:57</time>
              <span>Left a Body Care Gift Set (£40) in the basket</span>
            </div>
            <div>
              <time>24 Sep, 02:57</time>
              <span>Nothing arrived. A control message and a second run agree.</span>
            </div>
          </div>
          <span className="of-btn">Open the proof</span>
        </div>
      </div>
    ),
  },
  {
    id: 'slack',
    label: 'Slack',
    line: 'A message in the channel you choose, with the verdict and a link to the proof.',
    view: () => (
      <div className="of-slack">
        <p className="of-ch"># client-brand-g</p>
        <div className="of-msg">
          <span className="of-av">O</span>
          <div>
            <p className="of-name">
              Obsession <span>APP · 02:58</span>
            </p>
            <div className="of-card">
              <b>Silent: Brand G, cart journey</b>
              <span>No reminder 48 hours after a £40 basket was left. Confirmed by a second run.</span>
            </div>
            <div className="of-sbtns">
              <span>View proof</span>
              <span>All journeys</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'clay',
    label: 'Clay',
    line: 'New columns on the rows you already have: the gap, the date it was seen and a proof link.',
    view: () => (
      <div className="of-clay">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th className="new">Gap</th>
              <th className="new">Seen on</th>
              <th className="new">Proof</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brand G</td>
              <td className="new gap">No basket reminder</td>
              <td className="new">24 Sep</td>
              <td className="new">link</td>
            </tr>
            <tr>
              <td>Brand K</td>
              <td className="new none">No gap</td>
              <td className="new">24 Sep</td>
              <td className="new">link</td>
            </tr>
            <tr>
              <td>Brand R</td>
              <td className="new gap">No text after opt in</td>
              <td className="new">25 Sep</td>
              <td className="new">link</td>
            </tr>
            <tr>
              <td>Brand T</td>
              <td className="new none">Checking</td>
              <td className="new">·</td>
              <td className="new">·</td>
            </tr>
          </tbody>
        </table>
        <p className="of-note">Brands K, R and T are illustrative. The columns appear on your own table.</p>
      </div>
    ),
  },
  {
    id: 'webhook',
    label: 'Webhook',
    line: 'Every result as JSON, posted to your endpoint, with links to the evidence.',
    view: () => (
      <pre className="of-code">
        <code>
          <span className="c">// POST https://yourapp.com/hooks/obsession</span>
          {'\n{\n  '}
          <span className="k">"target"</span>: <span className="s">"brand-g.example"</span>
          {',\n  '}
          <span className="k">"journey"</span>: <span className="s">"cart"</span>
          {',\n  '}
          <span className="k">"verdict"</span>: <span className="s">"silent"</span>
          {',\n  '}
          <span className="k">"window"</span>: [<span className="s">"2026-09-22T02:57Z"</span>, <span className="s">"2026-09-24T02:57Z"</span>]
          {',\n  '}
          <span className="k">"checks"</span>: {'{ '}
          <span className="k">"control_message"</span>: true, <span className="k">"second_run"</span>: true {'}'}
          {',\n  '}
          <span className="k">"evidence"</span>: <span className="s">"https://api.useobsession.com/v1/evidence/run_8f2c"</span>
          {'\n}'}
        </code>
      </pre>
    ),
  },
  {
    id: 'workflow',
    label: 'Workflow',
    line: 'A verdict can start anything: the steps you set, then whatever you build next.',
    view: () => (
      <div className="of-flow">
        <div className="of-node trigger">
          <span>When</span>
          <b>A verdict comes in: silent</b>
        </div>
        <div className="of-node">
          <span>Only if</span>
          <b>The brand is on Client A’s list</b>
        </div>
        <div className="of-branch">
          <div className="of-node">
            <span>Then</span>
            <b>Post to Slack</b>
          </div>
          <div className="of-node">
            <span>Then</span>
            <b>Update the Clay row</b>
          </div>
          <div className="of-node custom">
            <span>Then</span>
            <b>Your build: start a sequence, open a ticket, brief a rep</b>
          </div>
        </div>
        <p className="of-note">Workflows open to early access teams first.</p>
      </div>
    ),
  },
]

const STEP_MS = 5000

/* start picks the first format shown, so each page can lead with the one its readers care about. */
export function OutputFormats({ start = 'pdf' }: { start?: FormatId }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  const [i, setI] = useState(() => Math.max(0, formats.findIndex((f) => f.id === start)))
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!inView || !auto || prefersReducedMotion()) return
    const t = window.setTimeout(() => setI((n) => (n + 1) % formats.length), STEP_MS)
    return () => window.clearTimeout(t)
  }, [inView, auto, i])

  const f = formats[i]

  return (
    <div className="of" ref={ref}>
      <div className={`of-tabs ${auto && inView ? 'is-auto' : ''}`} role="tablist" aria-label="Output formats">
        {formats.map((x, n) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={n === i}
            className={n === i ? 'on' : ''}
            onClick={() => {
              setAuto(false)
              setI(n)
            }}
          >
            {x.label}
            {n === i && <i key={`${i}-${auto}`} />}
          </button>
        ))}
      </div>
      <div className="of-stage" role="tabpanel" aria-label={f.label}>
        <div className="of-view" key={f.id}>
          {f.view()}
        </div>
      </div>
      <p className="of-line">{f.line}</p>
    </div>
  )
}
