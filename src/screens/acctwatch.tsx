/* The acctwatch app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play
   to its root to run the story. Its look and story: css/acctwatch.css, loaded by the page, never imported here.
   Converted from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function AcctwatchScreen() {
  return (
    <div className="il appx-il app-acctwatch"><div className="appx-fit"><div className="appx" role="img" aria-label="Account watch for a sales team: each account shows a health mark and 3 signal sources: inside data from your helpdesk and analytics with consent, outside news and hiring, and what their own customers get. Snack brand's usage drops 38% in 14 days and 3 urgent tickets arrive, so it flips to at risk with the reasons listed, a save plan with a QBR deck is drafted, and AM approves it. Inside data with consent, public pages only.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Accounts<span>/</span>Account watch</span>
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
          <header className="acw-h ax-fade">
            <h2>Account watch</h2><span className="acw-time">Daily 07:00</span>
            <span className="acw-id"><span className="acw-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          <div className="acw-wrap">
            <div className="acw-tabs ax-fade" style={{ '--d': '.04s' }}>
              <span className="acw-tab on">All<i>38</i></span>
              <span className="acw-tab"><svg className="sig st-needs" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>At risk<i><span className="acw-n"><b>3</b><b>4</b></span></i></span>
              <span className="acw-tab"><svg className="acw-up" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" /></svg>Expanding<i>6</i></span>
            </div>
            <div className="acw-tb">
              <div className="acw-row acw-th ax-fade" style={{ '--d': '.08s' }}><span>Account</span><span className="g">Signals</span><span className="l">Latest</span><span className="n">Next move</span></div>
              <div className="acw-row ax-in" style={{ '--d': '.12s' }}>
                <span className="a"><svg className="sig st-needs" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Travel app</b><small>Renews 14 Nov</small></span>
                <span className="g"><span className="acw-sg"><i className="acw-sc ">Inside</i><i className="acw-sc on">Outside</i><i className="acw-sc ">Lived</i></span></span>
                <span className="l">Champion left</span>
                <span className="n"><span className="acw-play">Exec intro</span></span>
              </div>
              <div className="acw-row ax-in" style={{ '--d': '.17s' }}>
                <span className="a"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Dental group</b><small>Renews 21 Nov</small></span>
                <span className="g"><span className="acw-sg"><i className="acw-sc on">Inside</i><i className="acw-sc ">Outside</i><i className="acw-sc ">Lived</i></span></span>
                <span className="l">Usage up 14%</span>
                <span className="n"><span className="acw-quiet">Let it renew</span></span>
              </div>
              <div className="acw-row ax-in" style={{ '--d': '.22s' }}>
                <span className="a"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Coffee roaster</b><small>Renews 28 Nov</small></span>
                <span className="g"><span className="acw-sg"><i className="acw-sc on">Inside</i><i className="acw-sc ">Outside</i><i className="acw-sc ">Lived</i></span></span>
                <span className="l">Asked for SSO</span>
                <span className="n"><span className="acw-quiet">Add to renewal</span></span>
              </div>
              <div className="acw-row r-hot">
                <span className="a"><span className="acw-stk acw-mk"><svg className="sig st-working moving w0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-needs moving w1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><b>Snack brand</b><small>Renews 2 Dec</small></span>
                <span className="g"><span className="acw-sg"><i className="acw-sc acw-lit">Inside</i><i className="acw-sc">Outside</i><i className="acw-sc on">Lived</i></span></span>
                <span className="l"><span className="acw-stk acw-lt"><span className="v0">Site down 2×</span><span className="v1"><span className="l1">Usage −38%</span><span className="l2">3 urgent tickets</span></span></span></span>
                <span className="n"><span className="acw-stk acw-nx"><span className="v0 acw-quiet">Watching</span><span className="v1 acw-play">Save plan</span></span></span>
              </div>
              <div className="acw-row ax-in" style={{ '--d': '.32s' }}>
                <span className="a"><svg className="sig st-waiting" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Outdoor gear</b><small>Renews 9 Dec</small></span>
                <span className="g"><span className="acw-sg"><i className="acw-sc ">Inside</i><i className="acw-sc on">Outside</i><i className="acw-sc ">Lived</i></span></span>
                <span className="l">New CFO named</span>
                <span className="n"><span className="acw-quiet">Watching</span></span>
              </div>
              <div className="acw-row ax-in" style={{ '--d': '.37s' }}>
                <span className="a"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Payroll SaaS</b><small>Renews 19 Dec</small></span>
                <span className="g"><span className="acw-sg"><i className="acw-sc ">Inside</i><i className="acw-sc on">Outside</i><i className="acw-sc ">Lived</i></span></span>
                <span className="l">12 sales roles open</span>
                <span className="n"><span className="acw-play">Expansion note</span></span>
              </div>
              <p className="acw-foot ax-fade" style={{ '--d': '.45s' }}><svg className="acw-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>Inside data with consent · public pages only</span></p>
            </div>
            <aside className="acw-pan ax-slide" style={{ '--d': '3.2s' }}>
              <header className="acw-ph">
                <p className="acw-pk">
                  <svg className="sig st-needs" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span>At risk · renews <span className="ax-mono">2 Dec</span></span>
                  <svg className="acw-x" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="m4.5 4.5 7 7M11.5 4.5l-7 7" /></svg>
                </p>
                <h3>Snack brand</h3>
              </header>
              <div className="acw-why ax-in" style={{ '--d': '3.4s' }}>
                <div className="acw-use">
                  <p className="acw-rl"><span>Usage <b>−38%</b> in 14 days</span><i className="acw-sc hot">Inside</i></p>
                  <svg className="acw-chart" viewBox="0 0 188 24" aria-hidden="true">
                    <rect className="bd" x="97.2" y="0" width="90.8" height="24" rx="2" />
                    <path className="ar" d="M2 5.2 L8.3 4.1 L14.7 5.6 L21 4.8 L27.4 3.7 L33.7 5.2 L40.1 6 L46.4 4.5 L52.8 4.8 L59.1 5.6 L65.4 4.1 L71.8 5.2 L78.1 4.5 L84.5 5.6 L90.8 4.8 L97.2 5.2 L103.5 6.3 L109.9 7.8 L116.2 8.9 L122.6 9.7 L128.9 11.1 L135.2 12.2 L141.6 13 L147.9 14.5 L154.3 15.6 L160.6 16.3 L167 17 L173.3 17.8 L179.7 18.9 L186 19.3 L186 24 L2 24Z" />
                    <path className="ln" d="M2 5.2 L8.3 4.1 L14.7 5.6 L21 4.8 L27.4 3.7 L33.7 5.2 L40.1 6 L46.4 4.5 L52.8 4.8 L59.1 5.6 L65.4 4.1 L71.8 5.2 L78.1 4.5 L84.5 5.6 L90.8 4.8 L97.2 5.2 L103.5 6.3 L109.9 7.8 L116.2 8.9 L122.6 9.7 L128.9 11.1 L135.2 12.2 L141.6 13 L147.9 14.5 L154.3 15.6 L160.6 16.3 L167 17 L173.3 17.8 L179.7 18.9 L186 19.3" pathLength="1" />
                    <circle className="dt" cx="186" cy="19.3" r="2.25" />
                  </svg>
                </div>
                <p className="acw-rl ax-in" style={{ '--d': '3.55s' }}><span>3 urgent tickets in 5 days</span><i className="acw-sc hot">Inside</i></p>
                <p className="acw-rl ax-in" style={{ '--d': '3.62s' }}><span>Their site went down 2×</span><i className="acw-sc on">Lived</i></p>
              </div>
              <div className="acw-plan">
                <p className="acw-pl ax-in" style={{ '--d': '3.7s' }}><svg className="acw-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M4 2.5h5.25L12 5.25v8.25H4Z" /><path d="M6.25 8h3.5M6.25 10.5h3.5" strokeLinecap="round" /></svg><b>Save plan</b><span className="acw-stk acw-dr"><span className="ax-chip dash">drafted</span><span className="ax-chip">approved</span></span></p>
                <ol className="acw-steps">
                  <li className="ax-in" style={{ '--d': '3.76s' }}><i>1</i>Close the 3 urgent tickets</li>
                  <li className="ax-in" style={{ '--d': '3.82s' }}><i>2</i>Usage review with their ops</li>
                  <li className="ax-in" style={{ '--d': '3.88s' }}><i>3</i>QBR on 18 Nov<span className="acw-deck"><svg className="acw-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="2.75" width="11.5" height="8" rx="1.25" /><path d="M8 10.75v2.5M5.75 13.25h4.5" strokeLinecap="round" /></svg>QBR deck</span></li>
                </ol>
              </div>
              <footer className="acw-pf ax-in" style={{ '--d': '3.95s' }}>
                <span className="acw-f1"><span className="ax-btn ghost">Edit</span><span className="ax-btn acw-ok">Approve</span></span>
                <span className="acw-f2"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Approved by AM</b><span className="ax-mono">7f3a…c91e</span></span>
              </footer>
            </aside>
          </div>
          <svg className="ax-ptr acw-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.1 4.6 2-.9-2.1-4.5h4.3Z" /></svg>
        </div>
      </div>
    </div></div></div>
  )
}
