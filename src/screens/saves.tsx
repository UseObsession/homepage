/* The saves app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/saves.css, loaded by the page, never imported here. Converted
   from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function SavesScreen() {
  return (
    <div className="il appx-il app-saves"><div className="appx-fit"><div className="appx" role="img" aria-label="Cancellation saves for a coffee subscription, run by a declared Obsession agent: every request from a subscriber or their AI assistant gets Cancel now beside 1 offer you approved, and the choice goes through at once. Dana R.’s assistant asks to cancel, Dana picks Pause 2 months, the request lands and the month reads Saved 28 of 100.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Missions<span>/</span>Cancellation saves</span>
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
            <a role="none"><i />Prospects</a><a className="on" role="none"><i />Customers</a><a role="none"><i />Rivals</a><a role="none"><i />Suppliers</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          <header className="sv-h ax-fade">
            <h2>Cancellation saves</h2><span className="sv-meta">Coffee plan · October</span>
            <span className="sv-id"><span className="sv-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          {/* the stream: every request, newest on top; Cancel now always sits beside 1 offer, the pick is solid */}
          <section className="sv-tb">
            <div className="sv-row sv-th ax-fade" style={{ '--d': '.08s' }}><span>Subscriber</span><span>Choice</span></div>
            <div className="sv-new"><div className="sv-clip">
              <div className="sv-row sv-hot">
                <span className="sv-who"><span className="sv-mk"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><b>Dana R.</b><em>AI assistant</em></span>
                <span className="sv-pair"><span className="sv-opt sv-o1">Cancel now</span><span className="sv-opt sv-o2 on">Pause 2 months</span></span>
              </div>
            </div></div>
            <div className="sv-old">
              <div className="sv-row ax-in" style={{ '--d': '0.16s' }}><span className="sv-who"><b>Theo M.</b><em>Email</em></span><span className="sv-pair"><span className="sv-opt on">Cancel now</span><span className="sv-opt">Skip next box</span></span></div>
              <div className="sv-row ax-in" style={{ '--d': '0.21s' }}><span className="sv-who"><b>Priya N.</b><em>AI assistant</em></span><span className="sv-pair"><span className="sv-opt">Cancel now</span><span className="sv-opt on">20% off 3 months</span></span></div>
              <div className="sv-row ax-in" style={{ '--d': '0.26s' }}><span className="sv-who"><b>Sam K.</b><em>Account page</em></span><span className="sv-pair"><span className="sv-opt on">Cancel now</span><span className="sv-opt">Pause 2 months</span></span></div>
              <div className="sv-row ax-in" style={{ '--d': '0.31s' }}><span className="sv-who"><b>Lena W.</b><em>AI assistant</em></span><span className="sv-pair"><span className="sv-opt on">Cancel now</span><span className="sv-opt">Skip next box</span></span></div>
              <div className="sv-row ax-in" style={{ '--d': '0.36s' }}><span className="sv-who"><b>Omar F.</b><em>Email</em></span><span className="sv-pair"><span className="sv-opt">Cancel now</span><span className="sv-opt on">Skip next box</span></span></div>
            </div>
          </section>
          {/* the month, and the offers a person approved */}
          <aside className="sv-side">
            <div className="sv-sum ax-fade" style={{ '--d': '.1s' }}>
              <p className="sv-big"><span>Saved</span><b className="sv-stk"><span>27</span><span>28</span></b><span>of <span className="sv-stk"><span>99</span><span>100</span></span></span></p>
              <div className="sv-grid" aria-hidden="true"><i className="s" /><i /><i /><i /><i /><i className="s" /><i /><i /><i className="s" /><i /><i /><i /><i /><i className="s" /><i /><i /><i /><i className="s" /><i /><i className="s" /><i /><i /><i className="s" /><i /><i /><i /><i /><i /><i /><i className="s" /><i /><i className="s" /><i /><i /><i className="s" /><i /><i /><i /><i /><i /><i /><i className="s" /><i /><i className="s" /><i /><i /><i /><i /><i className="s" /><i /><i className="s" /><i /><i /><i /><i /><i className="s" /><i className="s" /><i /><i /><i /><i /><i /><i className="s" /><i /><i /><i /><i /><i className="s" /><i /><i className="s" /><i /><i /><i /><i /><i className="s" /><i /><i /><i className="s" /><i /><i className="s" /><i /><i /><i /><i /><i /><i className="s" /><i /><i /><i className="s" /><i /><i /><i className="s" /><i /><i /><i className="s" /><i /><i /><i className="s" /><i /><i className="sv-c100" /></div>
              <p className="sv-key"><span><i />Saved</span><span><i />Cancelled</span></p>
            </div>
            <div className="sv-off ax-fade" style={{ '--d': '.14s' }}>
              <p className="sv-oh"><b>Offers</b><span>1 per request</span></p>
              <ul className="sv-ol">
                <li><span>Pause 2 months</span><i className="sv-stk"><span>18</span><span>19</span></i></li>
                <li><span>Skip next box</span><i>6</i></li>
                <li><span>20% off 3 months</span><i>3</i></li>
              </ul>
              <div className="sv-bud"><p><span>Discount budget</span><i>£40 / £400</i></p><span className="sv-bar"><i /></span></div>
              <p className="sv-ok"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Approved by AM</b><span>7f3a…c91e</span></p>
            </div>
          </aside>
          <p className="sv-note ax-fade" style={{ '--d': '.2s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Cancel stays 1 step · only offers you approved</p>
          <div className="ax-toast sv-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Paused · 2 months</b><span>Dana R.</span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
