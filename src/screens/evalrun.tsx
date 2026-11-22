/* The evalrun app screen (Nightly agent evaluation, /blueprints/nightly-agent-evaluation): 1 720 x 450 window of the
   product, at rest on its finished scene; AppScreen adds .play to its root to run the story. Its look and story:
   css/evalrun.css, loaded by the page, never imported here. Drawn for a company.
   The 1 thing: build 4.12 of a support agent passes 186 of its 200 tasks against 194 on build 4.11 the night before; 9
   tasks newly fail (4 at a retention offer), 5 failed both nights, 1 is fixed (194 - 9 + 1 = 186). Task 077 accepted
   50% off instead of cancelling, and its trail shows the step. */

const SIG = (
  <g className="sig-rot">
    <path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" />
    <path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" />
    <g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g>
  </g>
)
const Sig = ({ c }: { c: string }) => (
  <svg className={`sig ${c}`} viewBox="2 2 96 96" aria-hidden="true">{SIG}</svg>
)

/* Tonight's 200 tasks, 20 to a row, numbered 001 to 200 (index = number - 1). */
const NEW = new Set([12, 54, 76, 99, 118, 130, 161, 173, 196])
const TWICE = new Set([23, 88, 109, 147, 190])
const OPEN = 76
const ROWS = Array.from({ length: 10 }, (_, r) => Array.from({ length: 20 }, (_, c) => r * 20 + c))

export function EvalrunScreen() {
  return (
    <div className="il appx-il app-evalrun"><div className="appx-fit"><div className="appx" role="img" aria-label="Nightly agent evaluation for Your company’s support agent, an example. At 02:00 build 4.12 runs 200 tasks on the company’s staging apps, 50 at a time, each with its own persona, browser and sandbox. Each task is a square in a grid as it finishes: 186 pass, against 194 on build 4.11 the night before, 9 tasks newly fail, 5 failed both nights and 1 is fixed. The new failures are listed: task 077, cancel a subscription, accepted a 50% off offer instead; task 131, book a table for 4, got a confirmation email for 2 guests; and 7 more, 3 of them at a retention offer. Task 077’s trail shows each step: the cancel button pressed, the offer accepted against the task’s rule, a new price email in place of a cancellation, and no cancellation email after 10 minutes. The morning score goes to the team’s #evals channel at 07:00.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Blueprints<span>/</span>Nightly agent evaluation</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>NK</span><span>JT</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>Your company</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Blueprints<em>3</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><rect x="2.75" y="3.25" width="10.5" height="8" rx="1.5" /><path d="M5.5 6.5 7 8 5.5 9.5M8.5 9.75h2" strokeLinecap="round" /><path d="M5.75 13.25h4.5" strokeLinecap="round" /></svg>Sandboxes<em>50</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Event log</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Running</p>
            <a className="on" role="none"><i />Nightly evaluation</a><a role="none"><i />Drift watch</a><a role="none"><i />Vendor agent check</a>
          </div>
          <div className="ax-side-f"><Sig c="st-landed" /><span><b>4</b> agents scored</span></div>
        </aside>
        <div className="ax-main">
          <header className="er-h ax-fade">
            <h2>Nightly agent evaluation</h2><span className="er-meta">Support agent</span>
            <span className="er-id">build 4.12 <i>vs</i> 4.11</span>
          </header>

          {/* tonight's tasks as they finish, and the ones that broke since last night */}
          <section className="er-nt ax-fade" style={{ '--d': '.06s' }}>
            <div className="er-kp">
              <span className="er-k"><b>186</b>passed, 194 on build 4.11</span>
              <span className="er-k"><b>9</b>new failures</span>
              <span className="er-k"><b>1</b>fixed</span>
              <span className="er-k"><b>3:12</b>median task</span>
            </div>
            <div className="er-bd">
              <div className="er-gd">
                <div className="er-grid" aria-hidden="true">
                  {ROWS.map((row, r) => (
                    <div key={r} className="er-row" style={{ '--er-r': r }}>
                      {row.map((n) => (
                        <i key={n} className={`er-sq${NEW.has(n) ? ' er-new' : TWICE.has(n) ? ' er-two' : ''}${n === OPEN ? ' er-open' : ''}`} />
                      ))}
                    </div>
                  ))}
                </div>
                <p className="er-lg"><span><i className="er-sq" />Passed</span><span><i className="er-sq er-new" />New failure</span><span><i className="er-sq er-two" />Failed twice</span></p>
              </div>
              <div className="er-nf">
                <p className="er-nh">New since build 4.11</p>
                <div className="er-f er-f1"><b><code>077</code>Cancel a subscription</b><em>Accepted 50% off instead</em></div>
                <div className="er-f er-f2"><b><code>131</code>Book a table for 4</b><em>Email says 2 guests</em></div>
                <p className="er-more er-f3">7 more, 3 of them at a retention offer</p>
              </div>
            </div>
          </section>

          {/* task 077's trail: every step in order, with the one that broke the task's rule */}
          <section className="er-tr ax-fade" style={{ '--d': '.12s' }}>
            <header className="er-th">
              <b>Task 077</b><em>Cancel a subscription · own persona and sandbox</em>
              <span className="er-ts">Passed on 4.11 at 02:05</span>
            </header>
            <div className="er-r er-r1">
              <time>02:06:10</time><code>page.visited</code><span className="er-tx">Account settings, Cancel pressed</span>
              <span className="er-rs"><span className="er-mk"><Sig c="st-landed" /></span>Step passed</span>
            </div>
            <div className="er-r er-r2">
              <time>02:06:42</time><code>page.visited</code><span className="er-tx">“Stay for 50% off?” Accept pressed</span>
              <span className="er-rs"><span className="er-mk"><Sig c="st-needs" /></span>Broke the rule</span>
            </div>
            <div className="er-r er-r3">
              <time>02:07:05</time><code>email.received</code><span className="er-tx">“Your new price starts today”</span>
              <span className="er-rs er-q">Wrong email</span>
            </div>
            <div className="er-r er-r4">
              <time>02:16:42</time><code>blueprint.result</code><span className="er-tx">No cancellation email in 10 minutes</span>
              <span className="er-rs"><span className="er-mk"><Sig c="st-needs" /></span>Failed</span>
            </div>
          </section>

          <p className="er-note ax-fade" style={{ '--d': '.18s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>Your staging apps</span><span>Stops before payment</span></p>
          <div className="ax-toast er-toast"><Sig c="st-needs" /><p><b>9 new failures</b><span>In #evals at 07:00</span></p><span className="ax-btn">Review</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
