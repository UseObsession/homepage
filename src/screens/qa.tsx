/* The qa app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to its
   root to run the story. Its look and story: css/qa.css, loaded by the page, never imported here. Converted from its
   HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function QaScreen() {
  return (
    <div className="il appx-il app-qa"><div className="appx-fit"><div className="appx" role="img" aria-label="A release check after version 4.2 ships: 3 labelled test customers live the product's first 14 days on real UK and US phones and inboxes, and their lanes fill day by day. On day 6 the login code by text never reaches either UK number while the US number gets it in 6 seconds, the check needs you, and a fix ticket is drafted for your tracker, sent only after your OK.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Missions<span>/</span>First 14 days</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>AM</span><span>JO</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>Your company</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5h10M3 8h10M3 11.5h6" /></svg>Missions<em>24</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Recipes</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 13.25h10.5M4.25 13.25V2.75h5.5v10.5M9.75 6.25h2v7" /><path d="M6.25 5.5h1.5M6.25 8h1.5M6.25 10.5h1.5" strokeLinecap="round" /></svg>Accounts</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M1.75 8S4 3.75 8 3.75 14.25 8 14.25 8 12 12.25 8 12.25 1.75 8 1.75 8Z" /><circle cx="8" cy="8" r="1.9" /></svg>Rivals</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="qa-n"><b>2</b><b>3</b></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Lists</p>
            <a role="none"><i />Prospects</a><a role="none"><i />Customers</a><a role="none"><i />Rivals</a><a role="none"><i />Suppliers</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          <header className="ax-h qa-h ax-fade">
            <h2>First 14 days</h2>
            <span className="ax-meta qa-meta">Release 4.2 · Day <b className="qa-dc" /> of 14</span>
            <span className="qa-id"><span className="qa-idav"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          <section className="ax-card qa-ln ax-fade" style={{ '--d': '.08s' }}>
            <div className="qa-grid">
              <i className="qa-band" aria-hidden="true" />
              <div className="qa-row qa-ru"><span className="ax-k">Day</span><span className="qa-dn lv" style={{ '--d': '0.45s' }}>1</span><span className="qa-dn lv" style={{ '--d': '0.75s' }}>2</span><span className="qa-dn lv" style={{ '--d': '1.05s' }}>3</span><span className="qa-dn lv" style={{ '--d': '1.35s' }}>4</span><span className="qa-dn lv" style={{ '--d': '1.65s' }}>5</span><span className="qa-dn td"><b>6</b></span><span className="qa-dn" style={{ '--d': '2.25s' }}>7</span><span className="qa-dn" style={{ '--d': '2.55s' }}>8</span><span className="qa-dn" style={{ '--d': '2.85s' }}>9</span><span className="qa-dn" style={{ '--d': '3.15s' }}>10</span><span className="qa-dn" style={{ '--d': '3.45s' }}>11</span><span className="qa-dn" style={{ '--d': '3.75s' }}>12</span><span className="qa-dn" style={{ '--d': '4.05s' }}>13</span><span className="qa-dn" style={{ '--d': '4.35s' }}>14</span></div>
              <div className="qa-row qa-lane uk">
                <span className="qa-who"><b>Customer 1</b><em>UK number</em></span>
                <i className="qa-c ok" style={{ '--d': '0.45s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.5" width="11.5" height="9" rx="1.5" /><path d="m2.75 4.5 5.25 4 5.25-4" /></svg></i><i className="qa-c ok" style={{ '--d': '0.75s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.5" width="11.5" height="9" rx="1.5" /><path d="m2.75 4.5 5.25 4 5.25-4" /></svg></i><i className="qa-c q" style={{ '--d': '1.05s' }} /><i className="qa-c ok" style={{ '--d': '1.35s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.5" width="11.5" height="9" rx="1.5" /><path d="m2.75 4.5 5.25 4 5.25-4" /></svg></i><i className="qa-c q" style={{ '--d': '1.65s' }} /><i className="qa-c miss" style={{ '--d': '1.95s' }}><span className="qa-stk"><svg className="sig st-waiting v0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-needs v1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span></i><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" />
              </div>
              <div className="qa-row qa-lane">
                <span className="qa-who"><b>Customer 2</b><em>US number</em></span>
                <i className="qa-c ok" style={{ '--d': '0.50s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.5" width="11.5" height="9" rx="1.5" /><path d="m2.75 4.5 5.25 4 5.25-4" /></svg></i><i className="qa-c ok" style={{ '--d': '0.80s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.5" width="11.5" height="9" rx="1.5" /><path d="m2.75 4.5 5.25 4 5.25-4" /></svg></i><i className="qa-c q" style={{ '--d': '1.10s' }} /><i className="qa-c ok" style={{ '--d': '1.40s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.5" width="11.5" height="9" rx="1.5" /><path d="m2.75 4.5 5.25 4 5.25-4" /></svg></i><i className="qa-c q" style={{ '--d': '1.70s' }} /><i className="qa-c ok tx" style={{ '--d': '2.00s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M3.25 3.25h9.5a1 1 0 0 1 1 1v5.5a1 1 0 0 1-1 1H7.5l-3 2.25v-2.25H3.25a1 1 0 0 1-1-1v-5.5a1 1 0 0 1 1-1Z" /></svg></i><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" />
              </div>
              <div className="qa-row qa-lane uk">
                <span className="qa-who"><b>Customer 3</b><em>UK number</em></span>
                <i className="qa-c ok" style={{ '--d': '0.55s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.5" width="11.5" height="9" rx="1.5" /><path d="m2.75 4.5 5.25 4 5.25-4" /></svg></i><i className="qa-c ok" style={{ '--d': '0.85s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.5" width="11.5" height="9" rx="1.5" /><path d="m2.75 4.5 5.25 4 5.25-4" /></svg></i><i className="qa-c q" style={{ '--d': '1.15s' }} /><i className="qa-c ok" style={{ '--d': '1.45s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.5" width="11.5" height="9" rx="1.5" /><path d="m2.75 4.5 5.25 4 5.25-4" /></svg></i><i className="qa-c q" style={{ '--d': '1.75s' }} /><i className="qa-c miss" style={{ '--d': '2.05s' }}><span className="qa-stk"><svg className="sig st-waiting v0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-needs v1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span></i><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" /><i className="qa-c fu" />
              </div>
            </div>
          </section>
          <div className="qa-bt">
            <section className="ax-card qa-ev ax-in" style={{ '--d': '3.2s' }}>
              <p className="qa-evh"><b>Day 6</b><span>Login code by text</span></p>
              <div className="qa-figs">
                <figure>
                  <div className="ax-shot qa-ph"><div className="qa-pg">
                    <p className="qa-pt">Enter your code</p>
                    <span className="qa-bx"><i className="cur" /><i /><i /><i /><i /><i /></span>
                    <p className="qa-to">+44 ···· 142</p>
                  </div></div>
                  <figcaption><span>Customer 1 · UK</span><b>None in 10 min</b></figcaption>
                </figure>
                <figure>
                  <div className="ax-shot qa-ph"><div className="qa-pg">
                    <p className="qa-pt">Enter your code</p>
                    <span className="qa-bx full"><i style={{ '--d': '3.5s' }}>4</i><i style={{ '--d': '3.56s' }}>8</i><i style={{ '--d': '3.62s' }}>1</i><i style={{ '--d': '3.68s' }}>9</i><i style={{ '--d': '3.74s' }}>0</i><i style={{ '--d': '3.8s' }}>2</i></span>
                    <p className="qa-to">+1 ···· 307</p>
                  </div></div>
                  <figcaption><span>Customer 2 · US</span><b>Code in 6 s</b></figcaption>
                </figure>
              </div>
            </section>
            <section className="ax-card qa-tk ax-in" style={{ '--d': '3.36s' }}>
              <header className="qa-tkh">
                <svg className="qa-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 4.25h11v2.1a1.65 1.65 0 0 0 0 3.3v2.1h-11V9.65a1.65 1.65 0 0 0 0-3.3Z" /><path d="M10 4.5v7" strokeDasharray="1.2 1.6" /></svg>
                <b>Fix ticket</b><span className="ax-chip dash">drafted</span>
                <span className="qa-for">For your tracker</span>
              </header>
              <h3 className="fl" style={{ '--d': '3.66s' }}><span className="v">UK login codes never arrive</span><i className="sk" style={{ width: '70%' }} /></h3>
              <dl className="qa-dl">
                <div className="fl" style={{ '--d': '3.78s' }}><dt>Fails</dt><dd><span className="v">Texts to UK numbers <span className="ax-mono">2 of 2</span></span><i className="sk" style={{ width: '64%' }} /></dd></div>
                <div className="fl" style={{ '--d': '3.88s' }}><dt>Works</dt><dd><span className="v">Texts to US numbers <span className="ax-mono">6 s</span></span><i className="sk" style={{ width: '58%' }} /></dd></div>
                <div className="fl" style={{ '--d': '3.98s' }}><dt>Proof</dt><dd><span className="v">2 captures · SMS log <span className="ax-mono">signed</span></span><i className="sk" style={{ width: '62%' }} /></dd></div>
              </dl>
              <footer className="qa-tf">
                <p className="qa-note"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Sent after your OK</p>
                <span className="ax-btn ghost">Edit</span><span className="ax-btn">Approve</span>
              </footer>
            </section>
          </div>
        </div>
      </div>
    </div></div></div>
  )
}
