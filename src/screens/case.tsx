/* The case app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to its
   root to run the story. Its look and story: css/case.css, loaded by the page, never imported here. Converted from
   its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function CaseScreen() {
  return (
    <div className="il appx-il app-case"><div className="appx-fit"><div className="appx" role="img" aria-label="A 1 page renewal case for Payroll SaaS, built from its own numbers shared with consent: usage up 41%, 312 tickets resolved a month, a 38 minute median reply and 2 teams added, each with its source and trend line, adding up to as much as $184,000 a year saved. The numbers fill, the saving counts up, the case is signed, and the rep shares it with their finance team, who can verify every number; it updates weekly to renewal.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Accounts<span>/</span>Renewal case</span>
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
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 13.25h10.5M4.25 13.25V2.75h5.5v10.5M9.75 6.25h2v7" /><path d="M6.25 5.5h1.5M6.25 8h1.5M6.25 10.5h1.5" strokeLinecap="round" /></svg>Accounts</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M1.75 8S4 3.75 8 3.75 14.25 8 14.25 8 12 12.25 8 12.25 1.75 8 1.75 8Z" /><circle cx="8" cy="8" r="1.9" /></svg>Rivals</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge">3</span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Lists</p>
            <a role="none"><i />Prospects</a><a className="on" role="none"><i />Customers</a><a role="none"><i />Rivals</a><a role="none"><i />Suppliers</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          {/* the case's own bar: what it is, the declared agent, the 1 way out */}
          <header className="cs-h ax-fade">
            <h2>Renewal case</h2>
            <span className="cs-id"><span className="cs-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
            <span className="cs-sh">
              <span className="ax-btn cs-share"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 9.75V2.75M5.25 5.25 8 2.5l2.75 2.75M3.25 8.5v4.75h9.5V8.5" /></svg>Share with finance</span>
              <svg className="ax-ptr cs-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.1 4.6 2-.9-2.1-4.5h4.3Z" /></svg>
            </span>
          </header>
          {/* the case, as their finance team will read it */}
          <section className="cs-cv">
            <article className="cs-pg ax-in" style={{ '--d': '.06s' }}>
              <header className="cs-ph">
                <span className="cs-lk"><i className="cs-my">Y</i>Your company<span className="cs-x">×</span><i className="cs-mt">P</i>Payroll SaaS</span>
                <span className="cs-rn">Renews 29 Dec</span>
              </header>
              <div className="cs-roi">
                <span className="cs-sk" aria-hidden="true"><i /><i /></span>
                <p className="cs-hl"><span>Up to</span><b className="cs-k" style={{ '--case-k': '184' }} /><span>a year saved</span></p>
                <p className="cs-md"><span>From their own data, with consent</span><span className="ax-mono">312 tickets × 12 × 50 min × $59/h</span></p>
              </div>
              <div className="cs-g">
                <div className="cs-tl" style={{ '--i': '0' }}>
                  <span className="cs-l">Usage</span><span className="ax-chip cs-src">Product analytics</span>
                  <span className="cs-v"><b>+41%</b><small>in 6 months</small></span>
                  <svg className="cs-sp" viewBox="0 0 72 24" aria-hidden="true"><path className="ar" d="M2 20 L15.6 18.44 L29.2 15.32 L42.8 12.98 L56.4 7.9 L70 4 L70 24 L2 24Z" /><path className="ln" pathLength="1" d="M2 20 L15.6 18.44 L29.2 15.32 L42.8 12.98 L56.4 7.9 L70 4" /><circle className="dt" cx="70" cy="4" r="2.25" /></svg>
                </div>
                <div className="cs-tl" style={{ '--i': '1' }}>
                  <span className="cs-l">Tickets resolved</span><span className="ax-chip cs-src">Helpdesk</span>
                  <span className="cs-v"><b>312</b><small>a month</small></span>
                  <svg className="cs-sp" viewBox="0 0 72 24" aria-hidden="true"><path className="ar" d="M2 20 L15.6 16.65 L29.2 13.29 L42.8 10.45 L56.4 6.71 L70 4 L70 24 L2 24Z" /><path className="ln" pathLength="1" d="M2 20 L15.6 16.65 L29.2 13.29 L42.8 10.45 L56.4 6.71 L70 4" /><circle className="dt" cx="70" cy="4" r="2.25" /></svg>
                </div>
                <div className="cs-tl" style={{ '--i': '2' }}>
                  <span className="cs-l">Median reply</span><span className="ax-chip cs-src">Helpdesk</span>
                  <span className="cs-v"><b>38</b><small>min</small></span>
                  <svg className="cs-sp" viewBox="0 0 72 24" aria-hidden="true"><path className="ar" d="M2 4 L15.6 8.14 L29.2 12.28 L42.8 16.14 L56.4 18.34 L70 20 L70 24 L2 24Z" /><path className="ln" pathLength="1" d="M2 4 L15.6 8.14 L29.2 12.28 L42.8 16.14 L56.4 18.34 L70 20" /><circle className="dt" cx="70" cy="20" r="2.25" /></svg>
                </div>
                <div className="cs-tl" style={{ '--i': '3' }}>
                  <span className="cs-l">Teams added</span><span className="ax-chip cs-src">CRM</span>
                  <span className="cs-v"><b>2</b><small>now 5</small></span>
                  <svg className="cs-sp" viewBox="0 0 72 24" aria-hidden="true"><path className="ar" d="M2 20 H22.4 V12 H49.6 V4 H70 V24 H2Z" /><path className="ln" pathLength="1" d="M2 20 H22.4 V12 H49.6 V4 H70" /><circle className="dt" cx="70" cy="4" r="2.25" /></svg>
                </div>
              </div>
              <footer className="cs-pf">
                <svg className="sig st-landed cs-mk" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                <p>Every number sourced and signed</p>
                <span className="cs-hash">ed25519 · 7f3a 91c2 … c91e</span>
              </footer>
            </article>
          </section>
          <div className="ax-toast cs-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Shared with finance</b><span>Updates weekly to renewal</span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
