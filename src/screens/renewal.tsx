/* The renewal app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/renewal.css, loaded by the page, never imported here. Converted
   from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function RenewalScreen() {
  return (
    <div className="il appx-il app-renewal"><div className="appx-fit"><div className="appx" role="img" aria-label="A $48,000 renewal negotiated with Dental group’s declared procurement agent. Round 1 asks 18% off; the same day your agent answers with a signed usage record and offers only from AM’s approved concession grid, 5% for a 2-year term; round 2 accepts, the round closes and the renewal is held at $45,600, 95% of list, with the signature requested.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Accounts<span>/</span>Renewal</span>
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
          <header className="rnw-h ax-fade">
            <h2>Renewal</h2><span className="rnw-meta">Dental group · <span className="ax-mono">$48,000</span> a year</span>
            <span className="rnw-id"><span className="rnw-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          <div className="rnw-wrap">
            {/* the thread with their procurement agent */}
            <section className="rnw-th ax-fade" style={{ '--d': '.04s' }}>
              <header className="rnw-thh">
                <span className="rnw-a them">DG</span>
                <p className="rnw-who"><b>Procurement agent</b> for Dental group</p>
                <span className="rnw-state"><span className="rnw-stk"><span className="v0"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>Open</span><span className="v1"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>Closed</span></span></span>
              </header>
              <div className="rnw-log">
                <div className="rnw-m m1">
                  <span className="rnw-a them">DG</span>
                  <div className="rnw-mb">
                    <p className="rnw-mh"><b>Their agent</b><span>Round 1 · Mon 09:12</span></p>
                    <p className="rnw-tx">18% off, or we go to tender.<span className="rnw-ask">−18% · over cap</span></p>
                  </div>
                </div>
                <div className="rnw-m m2">
                  <span className="rnw-a us"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                  <div className="rnw-mb">
                    <p className="rnw-mh"><b>Your agent</b><span>Round 1 · Mon 14:40</span><span className="rnw-same">Same day</span></p>
                    <p className="rnw-tx rnw-offer">Counter<b>2-year term · 5% off</b><span className="rnw-from">from your grid</span></p>
                    <div className="rnw-ev">
                      <span className="rnw-stat s1"><b>112/120</b><em>seats used</em></span>
                      <span className="rnw-stat s2"><b>4,820</b><em>visits booked</em></span>
                      <span className="rnw-stat s3"><b>+14%</b><em>usage, 90 days</em></span>
                      <p className="rnw-sig"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>ed25519 · 7f3a 91c2 … c91e</p>
                    </div>
                  </div>
                </div>
                <div className="rnw-m m3">
                  <span className="rnw-a them">DG</span>
                  <div className="rnw-mb">
                    <p className="rnw-mh"><b>Their agent</b><span>Round 2 · Tue 10:05</span></p>
                    <p className="rnw-tx"><span className="ax-tick" />Accepted: 5% on a 2-year term.</p>
                  </div>
                </div>
              </div>
              <div className="rnw-steps">
                <span className="rnw-step sg"><span className="rnw-mk"><span className="rnw-stk"><span className="v0"><i className="rnw-pip" /></span><span className="v1"><svg className="sig st-waiting moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span></span></span><span className="rnw-sl"><b>Signature</b><span className="rnw-stk"><em className="v0">Pending</em><em className="v1">Requested</em></span></span></span>
                <i className="rnw-ln" />
                <span className="rnw-step po"><span className="rnw-mk"><i className="rnw-pip" /></span><span className="rnw-sl"><b>PO</b><em>Next</em></span></span>
                <i className="rnw-ln" />
                <span className="rnw-step pd"><span className="rnw-mk"><i className="rnw-pip end" /></span><span className="rnw-sl"><b>Paid</b><em>Net 30</em></span></span>
              </div>
            </section>
            <div className="rnw-side">
              {/* the concession grid AM approved: the only offers the agent may make */}
              <section className="rnw-gc ax-fade" style={{ '--d': '.08s' }}>
                <header className="rnw-gh"><b>Concession grid</b><span>Approved by AM</span></header>
                <div className="rnw-grid">
                  <span className="rnw-gk" /><span className="rnw-gk col">Yearly</span><span className="rnw-gk">Upfront</span>
                  <span className="rnw-gk">1 year</span><span className="rnw-c">0%</span><span className="rnw-c">2%</span>
                  <span className="rnw-gk row">2 years</span><span className="rnw-c on">5%</span><span className="rnw-c">7%</span>
                  <span className="rnw-gk">3 years</span><span className="rnw-c">8%</span><span className="rnw-c">10%</span>
                </div>
                <p className="rnw-cap"><span>Cap</span><b>10% off</b><span className="rnw-floor">floor $43,200</span></p>
              </section>
              {/* the money */}
              <section className="rnw-sm ax-fade" style={{ '--d': '.12s' }}>
                <p className="rnw-r held"><span>Held</span><span className="rnw-stk rnw-hv"><span className="v0">Not yet</span><span className="v1"><b>$45,600</b><em>95%</em></span></span></p>
                <p className="rnw-r ask"><span>Asked</span><b>$39,360</b><em>−18%</em></p>
                <p className="rnw-r"><span>Term</span><span className="rnw-stk rnw-tv"><b className="v0">1 year</b><b className="v1">2 years</b></span></p>
                <p className="rnw-r"><span>Renews</span><b>21 Nov</b></p>
              </section>
            </div>
          </div>
          <p className="rnw-note ax-fade" style={{ '--d': '.16s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Offers only from your grid</p>
          <div className="ax-toast rnw-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Renewal held at 95%</b><span>Signature requested</span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
