/* The battlecard app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play
   to its root to run the story. Its look and story: css/battlecard.css, loaded by the page, never imported here.
   Converted from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function BattlecardScreen() {
  return (
    <div className="il appx-il app-battlecard"><div className="appx-fit"><div className="appx" role="img" aria-label="The Rivals page: a battlecard built from 3 rivals' 14 day trials that need no card, each run by a declared AI agent that never replies. Day by day the cells fill with onboarding emails, time to a first report, the trial end offer and the 40 seat price, each linked to a signed capture; Rival B's trial closes on day 6 when its rep writes. A 3 line talk track is drafted, Push to CRM is clicked and the battlecard goes live for 14 reps.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Rivals<span>/</span>Battlecard</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>AM</span><span>JO</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>Your company</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5h10M3 8h10M3 11.5h6" /></svg>Missions<em>24</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Recipes</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 13.25h10.5M4.25 13.25V2.75h5.5v10.5M9.75 6.25h2v7" /><path d="M6.25 5.5h1.5M6.25 8h1.5M6.25 10.5h1.5" strokeLinecap="round" /></svg>Accounts</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M1.75 8S4 3.75 8 3.75 14.25 8 14.25 8 12 12.25 8 12.25 1.75 8 1.75 8Z" /><circle cx="8" cy="8" r="1.9" /></svg>Rivals</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge">3</span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Lists</p>
            <a role="none"><i />Prospects</a><a role="none"><i />Customers</a><a role="none"><i />Rivals</a><a role="none"><i />Suppliers</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          {/* header: the page, the trial clock, the declared agent, the 1 action */}
          <header className="bc-h ax-fade">
            <h2>Battlecard</h2>
            <span className="bc-day">Day <span className="bc-dn" /> of 14</span>
            <span className="bc-acts">
              <span className="bc-id"><span className="bc-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
              <span className="bc-push">
                {' '}<span className="bc-s bc-s1"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.75 8h7.5M7.5 5.25 10.25 8 7.5 10.75M13 3.25v9.5" /></svg>Push to CRM</span>{' '}
                <span className="bc-s bc-s2"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>Pushing</span>{' '}
                <span className="bc-s bc-s3"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>In CRM</span>{' '}
                <svg className="ax-ptr bc-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.1 4.6 2-.9-2.1-4.5h4.3Z" /></svg>{' '}
              </span>
            </span>
          </header>
          {/* the battlecard: 1 grid shared by the head and every row, so the columns align */}
          <section className="ax-card bc-card ax-fade" style={{ '--d': '.06s' }}>
            <div className="bc-g bc-ch">
              <p className="bc-cap"><b>14 day trials</b><span>Emails by day</span></p>
              <div className="bc-rv" style={{ '--bc-t': '2.89s' }}>
                <p><b>Rival A</b><span className="bc-mk"><svg className="sig st-working w0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-landed w1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span></p>
                <span className="bc-days" aria-hidden="true"><i className="e" /><i className="e" /><i className="e" /><i className="e" /><i className="e" /><i /><i className="e" /><i className="e" /><i /><i className="e" /><i className="e" /><i /><i className="o" /><i className="e" /></span>
              </div>
              <div className="bc-rv" style={{ '--bc-t': '1.45s' }}>
                <p><b>Rival B</b><span className="bc-mk"><svg className="sig st-working w0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-landed w1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span></p>
                <span className="bc-days" aria-hidden="true"><i className="e" /><i className="e" /><i className="e" /><i /><i className="e" /><i className="r" /><i className="x" /><i className="x" /><i className="x" /><i className="x" /><i className="x" /><i className="x" /><i className="x" /><i className="x" /></span>
              </div>
              <div className="bc-rv" style={{ '--bc-t': '2.89s' }}>
                <p><b>Rival C</b><span className="bc-mk"><svg className="sig st-working w0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-landed w1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span></p>
                <span className="bc-days" aria-hidden="true"><i className="e" /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i className="o" /></span>
              </div>
            </div>
            <div className="bc-g bc-r">
              <p className="bc-l">Onboarding emails</p>
              <span className="bc-c" style={{ '--bc-t': '.55s' }}><span className="bc-v"><span className="bc-val"><b className="bc-n na" /></span></span><i className="bc-pf" /></span>
              <span className="bc-c" style={{ '--bc-t': '.55s' }}><span className="bc-v"><span className="bc-val"><b className="bc-n nb" /></span></span><i className="bc-pf" /></span>
              <span className="bc-c" style={{ '--bc-t': '.55s' }}><span className="bc-v"><span className="bc-val"><b className="bc-n nc" /></span></span><i className="bc-pf" /></span>
            </div>
            <div className="bc-g bc-r">
              <p className="bc-l">First report</p>
              <span className="bc-c" style={{ '--bc-t': '.72s' }}><span className="bc-v"><i className="bc-sk" /><span className="bc-val"><b>20 min</b></span></span><i className="bc-pf" /></span>
              <span className="bc-c hl" style={{ '--bc-t': '.91s' }}><span className="bc-v"><i className="bc-sk" /><span className="bc-val"><b>3 days</b></span></span><i className="bc-pf" /></span>
              <span className="bc-c" style={{ '--bc-t': '.8s' }}><span className="bc-v"><i className="bc-sk" /><span className="bc-val"><b>45 min</b></span></span><i className="bc-pf" /></span>
            </div>
            <div className="bc-g bc-r tall">
              <p className="bc-l">Trial end offer</p>
              <span className="bc-c hl" style={{ '--bc-t': '2.71s' }}><span className="bc-v"><i className="bc-sk" /><span className="bc-val"><b>20% off</b><small>on day 13</small></span></span><i className="bc-pf" /></span>
              <span className="bc-c" style={{ '--bc-t': '1.45s' }}><span className="bc-v"><i className="bc-sk" /><span className="bc-val dim"><b>Closed</b><small>rep wrote, day 6</small></span></span><i className="bc-pf" /></span>
              <span className="bc-c hl" style={{ '--bc-t': '2.89s' }}><span className="bc-v"><i className="bc-sk" /><span className="bc-val"><b>30% off</b><small>pay within 7 days</small></span></span><i className="bc-pf" /></span>
            </div>
            <div className="bc-g bc-r">
              <p className="bc-l">40 seats, yearly</p>
              <span className="bc-c" style={{ '--bc-t': '.6s' }}><span className="bc-v"><i className="bc-sk" /><span className="bc-val"><b>$24,000</b></span></span><i className="bc-pf" /></span>
              <span className="bc-c" style={{ '--bc-t': '.66s' }}><span className="bc-v"><i className="bc-sk" /><span className="bc-val"><b>$14,400</b></span></span><i className="bc-pf" /></span>
              <span className="bc-c" style={{ '--bc-t': '.62s' }}><span className="bc-v"><i className="bc-sk" /><span className="bc-val"><b>$16,800</b></span></span><i className="bc-pf" /></span>
            </div>
            <footer className="bc-f">
              <span><i className="bc-pf" />Signed capture</span>
              <span className="bc-note"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Trials with no card · never replies</span>
            </footer>
          </section>
          {/* bottom: the drafted talk track; the toast lands in the space beside it */}
          <div className="bc-bot">
            <section className="ax-card bc-tt ax-fade" style={{ '--d': '.12s' }}>
              <header className="bc-tt-h">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.75 3.75h10.5v6.5H7.5l-3 2.5v-2.5H2.75Z" /><path d="M5.25 6.25h5.5M5.25 8.25h3.5" /></svg>
                <b>Talk track</b><span className="bc-dr">drafted</span>
              </header>
              <ul>
                <li style={{ '--bc-t': '3.1s' }}><span className="bc-k">A</span><span className="bc-tx"><i className="bc-sk" /><p>Offers <b>20% off</b> on day 13. Plan for it.</p></span></li>
                <li style={{ '--bc-t': '3.22s' }}><span className="bc-k">B</span><span className="bc-tx"><i className="bc-sk" /><p>Claims setup in 1 day. <b>It took 3.</b></p></span></li>
                <li style={{ '--bc-t': '3.34s' }}><span className="bc-k">C</span><span className="bc-tx"><i className="bc-sk" /><p><b>30% off</b> ends 7 days after the trial.</p></span></li>
              </ul>
            </section>
            <div className="bc-meta ax-fade" style={{ '--d': '.18s' }}>
              <p><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="8" cy="8" r="5.25" /><path d="M8 5.25V8l1.75 1.25" /></svg>Checked every Monday</p>
              <p><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6.75 9.25 9.25 6.75M7.5 4.75l1-1a2.47 2.47 0 0 1 3.5 3.5l-1 1M8.5 11.25l-1 1a2.47 2.47 0 0 1-3.5-3.5l1-1" /></svg>On every deal with a rival</p>
            </div>
          </div>
          <div className="ax-toast bc-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Battlecard live</b><span>14 reps</span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
