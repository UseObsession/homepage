/* The rivals app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/rivals.css, loaded by the page, never imported here. Converted
   from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function RivalsScreen() {
  return (
    <div className="il appx-il app-rivals"><div className="appx-fit"><div className="appx" role="img" aria-label="The Rivals page: 30 days of Rival A, B and C on 3 timelines, each dated change seen by a declared agent that checks every morning from the US and UK. Today's check catches Rival A's Pro plan rising from $49 to $59 in the US only, shown with before and after captures, and an update to your comparison page is drafted for your OK.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Rivals</span>
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
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="rv-stk"><span>2</span><span>3</span></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Lists</p>
            <a role="none"><i />Prospects</a><a role="none"><i />Customers</a><a role="none"><i />Rivals</a><a role="none"><i />Suppliers</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          <header className="rv-h ax-fade">
            <h2>Rivals</h2><span className="rv-meta">Last 30 days · US and UK</span>
            <span className="rv-id"><span className="rv-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
            <span className="ax-btn ghost rv-add"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" /></svg>Add rival</span>
          </header>
          {/* 3 rivals, 30 days, oldest at the top, today at the foot */}
          <section className="rv-tl">
            <div className="rv-col rv-a">
              <div className="rv-ch ax-in" style={{ '--d': '.06s' }}>
                <span className="rv-mk rv-stk"><svg className="sig st-working rv-w" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-needs moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b>Rival A</b><time>07:04</time>
              </div>
              <div className="rv-rail">
                <i className="rv-line" />{' '}
                <p className="rv-ev" style={{ '--rv-day': '6' }}><i className="rv-dot" /><time>8 Sep</time><span>Launch email</span></p>{' '}
                <p className="rv-ev" style={{ '--rv-day': '15' }}><i className="rv-dot" /><time>17 Sep</time><span>Trial end −20%</span></p>{' '}
                <p className="rv-ev rv-hit" style={{ '--rv-day': '30' }}><i className="rv-dot" /><time>Today</time><span>Pro $49 → $59</span></p>
              </div>
            </div>
            <div className="rv-col">
              <div className="rv-ch ax-in" style={{ '--d': '.12s' }}>
                <span className="rv-mk"><svg className="sig st-waiting" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b>Rival B</b><time>07:02</time>
              </div>
              <div className="rv-rail">
                <i className="rv-line" />{' '}
                <p className="rv-ev" style={{ '--rv-day': '9' }}><i className="rv-dot" /><time>11 Sep</time><span>New Team plan</span></p>{' '}
                <p className="rv-ev" style={{ '--rv-day': '22' }}><i className="rv-dot" /><time>24 Sep</time><span>Launch email</span></p>{' '}
                <p className="rv-ev rv-nil" style={{ '--rv-day': '30' }}><i className="rv-dot" /><time>Today</time><span>No change</span></p>
              </div>
            </div>
            <div className="rv-col">
              <div className="rv-ch ax-in" style={{ '--d': '.18s' }}>
                <span className="rv-mk"><svg className="sig st-waiting" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b>Rival C</b><time>07:03</time>
              </div>
              <div className="rv-rail">
                <i className="rv-line" />{' '}
                <p className="rv-ev" style={{ '--rv-day': '3' }}><i className="rv-dot" /><time>5 Sep</time><span>No free plan</span></p>{' '}
                <p className="rv-ev" style={{ '--rv-day': '19' }}><i className="rv-dot" /><time>21 Sep</time><span>Trial end −30%</span></p>{' '}
                <p className="rv-ev" style={{ '--rv-day': '26' }}><i className="rv-dot" /><time>28 Sep</time><span>Annual −25%</span></p>{' '}
                <p className="rv-ev rv-nil" style={{ '--rv-day': '30' }}><i className="rv-dot" /><time>Today</time><span>No change</span></p>
              </div>
            </div>
          </section>
          {/* the change, with its proof and the drafted move */}
          <section className="rv-find ax-card">
            <div className="rv-txt">
              <p className="ax-k">Rival A · Pricing page</p>
              <h3>Pro<span className="rv-was">$49</span><span className="rv-to">→</span>$59</h3>
              <p className="rv-sub">US only. UK still £39.</p>
              <p className="rv-you">You’re now <b>$12 cheaper</b></p>
            </div>
            <div className="rv-caps">
              <figure className="rv-cap rv-c1">
                <div className="ax-shot"><div className="rv-pg"><p><span>Pro</span><em>US</em></p><b>$49</b><i className="rv-cta" /></div></div>
                <figcaption>1 Oct 07:00</figcaption>
              </figure>
              <figure className="rv-cap rv-c2">
                <div className="ax-shot"><div className="rv-pg"><p><span>Pro</span><em>US</em></p><b><span className="rv-ring">$59</span></b><i className="rv-cta" /></div></div>
                <figcaption>2 Oct 07:04</figcaption>
              </figure>
            </div>
            <div className="rv-act">
              <p className="ax-k">Drafted</p>
              <span className="rv-chip"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M10.5 2.75 13.25 5.5 6 12.75H3.25V10Z" /><path d="M9 4.25 11.75 7" /></svg>Your comparison page</span>
              <time>2 Oct 07:05</time>
            </div>
          </section>
          <p className="rv-note ax-fade" style={{ '--d': '.24s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Public pages only · live after your OK</p>
          <div className="ax-toast rv-toast"><svg className="sig st-needs" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Rival A raised prices</b><span>Page drafted</span></p><span className="ax-btn">Review</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
