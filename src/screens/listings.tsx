/* The listings app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/listings.css, loaded by the page, never imported here.
   Converted from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function ListingsScreen() {
  return (
    <div className="il appx-il app-listings"><div className="appx-fit"><div className="appx" role="img" aria-label="The Presence page for the Leeds location: every place buyers and AI look, from maps and review sites to 4 AI assistants, each with its status. A code reaches your listed number, Review site B is claimed and set to open with the right hours, Maps is corrected, and AI answers naming the business climb from 1 of 12 to 7 of 12 over 6 Mondays.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Missions<span>/</span>Presence</span>
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
          <header className="ls-h ax-fade">
            <h2>Presence</h2><span className="ls-meta">Leeds</span><span className="ls-time">Mon 09:42</span>
            <span className="ls-id"><span className="ls-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          <div className="ls-grid">
            {/* every place buyers and AI look, and what each one says */}
            <section className="ls-tb ax-in" style={{ '--d': '.06s' }}>
              <div className="ls-row ls-th"><span>Where buyers look</span><span>Status</span><span>Updated</span></div>
              <div className="ls-row r-maps"><span className="n">Maps</span><span className="s"><span className="ax-st"><svg className="sig st-landed gm" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span className="ls-stk w"><span className="v0 bad">Wrong hours</span><span className="v1">Correct</span></span></span></span><span className="t"><span className="ls-stk u"><span className="v0" /><span className="v1 m">09:42</span></span></span></div>
              <div className="ls-row"><span className="n">Review site A</span><span className="s"><span className="ax-st"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>Correct</span></span><span className="t"><span className="m">21 Sep</span></span></div>
              <div className="ls-row r-hot"><span className="n">Review site B</span><span className="s"><span className="ax-st"><svg className="sig st-landed gm" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span className="ls-stk w"><span className="v0 bad">Says closed</span><span className="v1">Correct</span></span></span></span><span className="t"><span className="ls-stk u"><span className="v0" /><span className="v1 m">09:41</span></span></span></div>
              <div className="ls-row"><span className="n">Review site C</span><span className="s"><span className="ax-st"><svg className="sig st-needs" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span className="bad">Missing</span></span></span><span className="t"><span className="q">By post</span></span></div>
              <div className="ls-row"><span className="n">Directory A</span><span className="s"><span className="ax-st"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>Correct</span></span><span className="t"><span className="m">08:55</span></span></div>
              <div className="ls-row r-pre"><span className="n">Directory B</span><span className="s"><span className="ax-st"><svg className="sig st-waiting" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span className="bad">Wrong hours</span></span></span><span className="t"><span className="q">Editor asked</span></span></div>
              <div className="ls-row ls-th ls-sub"><span>What AI says</span><span>Answer</span><span>Named</span></div>
              <div className="ls-row r-ai"><span className="n">Assistant A</span><span className="s"><span className="a">Correct</span></span><span className="t"><span className="ls-dots"><i className="f" /><i className="f k3" /><i className="f k4" /></span></span></div>
              <div className="ls-row r-ai"><span className="n">Assistant B</span><span className="s"><span className="a"><span className="ls-stk ab"><span className="v0 bad">Missing</span><span className="v1">Correct</span></span></span></span><span className="t"><span className="ls-dots"><i className="f k1" /><i className="f k3" /><i className="f k5" /></span></span></div>
              <div className="ls-row r-ai"><span className="n">Assistant C</span><span className="s"><span className="a bad">Wrong hours</span></span><span className="t"><span className="ls-dots"><i className="f k5" /><i /><i /></span></span></div>
              <div className="ls-row r-ai r-last"><span className="n">Assistant D</span><span className="s"><span className="a bad">Missing</span></span><span className="t"><span className="ls-dots"><i /><i /><i /></span></span></div>
            </section>
            <div className="ls-col">
              {/* the number that moves */}
              <section className="ls-kpi ax-card ax-in" style={{ '--d': '.12s' }}>
                <p className="ls-kh"><span className="ax-k">AI answers</span><span className="ax-mono">Every Mon</span></p>
                <p className="ls-big"><span>Named in</span><b className="ls-cnt" /><span>of 12</span></p>
                <svg className="ls-chart" viewBox="0 0 200 40" aria-hidden="true">
                  <path className="ls-cap" d="M0 4.5H200" />
                  <path className="ls-base" d="M0 38.5H200" />
                  <polyline className="ls-line" pathLength="1" points="4,33.3 42.4,30.7 80.8,30.7 119.2,25.3 157.6,22.7 196,17.3" />
                  <circle className="ls-pt p0" cx="4" cy="33.3" r="2" />
                  <circle className="ls-pt p1" cx="42.4" cy="30.7" r="2" />
                  <circle className="ls-pt p2" cx="80.8" cy="30.7" r="2" />
                  <circle className="ls-pt p3" cx="119.2" cy="25.3" r="2" />
                  <circle className="ls-pt p4" cx="157.6" cy="22.7" r="2" />
                  <circle className="ls-pt p5 now" cx="196" cy="17.3" r="3" />
                </svg>
                <p className="ls-ax"><span>7 Sep</span><span>12 Oct</span></p>
              </section>
              {/* the claim: the code lands at your listed number */}
              <section className="ls-claim ax-card ax-in" style={{ '--d': '.18s' }}>
                <header className="ls-ch">
                  <svg className="sig st-landed gm" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                  <b>Review site B</b>
                  <span className="ls-stk c"><span className="v0">Claiming</span><span className="v1">Claimed</span></span>
                </header>
                <p className="ls-cl"><span>To your listed number</span><span className="ax-mono">+44 ···· 142</span></p>
                <div className="ls-cells"><i><span className="g0">4</span></i><i><span className="g1">8</span></i><i><span className="g2">2</span></i><b /><i><span className="g3">9</span></i><i><span className="g4">1</span></i><i><span className="g5">3</span></i></div>
                <dl className="ls-diff">
                  <dt>Status</dt><dd><s className="o1">Closed</s><span className="n1"><em>→</em>Open</span></dd>
                  <dt>Hours</dt><dd><s className="o2">9 to 5</s><span className="n2"><em>→</em>8 to 6</span></dd>
                </dl>
              </section>
            </div>
          </div>
          <p className="ls-note ax-fade"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Fixes go live after your OK</p>
          <div className="ax-toast ls-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>3 now correct</b><span>Leeds</span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
