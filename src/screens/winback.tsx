/* The winback app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/winback.css, loaded by the page, never imported here. Converted
   from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function WinbackScreen() {
  return (
    <div className="il appx-il app-winback"><div className="appx-fit"><div className="appx" role="img" aria-label="The Accounts page filtered to 4 accounts lost to a rival, each with the month it left and the date it renews with the rival. For Tarnfell Outdoor, 9 months on Rival A draw out as a timeline of checks every 2 weeks by a declared test customer, with 3 dated breaks and their captures, all from public sign ups: the welcome email stopped in March, a text unsubscribe was ignored in June, and an emailed code had already expired in August. A reopen note citing all 3 is drafted for you to send yourself, and the account turns to needs you.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Accounts</span>
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
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="wb-nb"><b>2</b><b>3</b></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Lists</p>
            <a role="none"><i />Prospects</a><a role="none"><i />Customers</a><a role="none"><i />Rivals</a><a role="none"><i />Suppliers</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          <header className="wb-h ax-fade">
            <h2>Accounts</h2>
            <span className="wb-flt"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M2.75 3.5h10.5L9.25 8.25v4l-2.5 1.25v-5.25Z" /></svg>Lost to a rival<i aria-hidden="true">×</i></span>
            <span className="wb-ct">4</span>
            <span className="wb-id"><span className="wb-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          {/* the 4 lost accounts */}
          <section className="ax-card wb-tb ax-fade" style={{ '--d': '.06s' }}>
            <div className="wb-r wb-hd"><span /><span>Account</span><span>Lost in</span><span>Renews with rival</span></div>
            <div className="wb-r on ax-in" style={{ '--d': '.12s' }}><span className="wb-stk"><svg className="sig st-waiting v0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-needs moving v1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><span className="wb-nm">Tarnfell Outdoor</span><span className="wb-m">Jan</span><span className="wb-m">12 Jan</span></div>
            <div className="wb-r ax-in" style={{ '--d': '.18s' }}><svg className="sig st-waiting" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span className="wb-nm">Dunmarrow Tea</span><span className="wb-m">Mar</span><span className="wb-m">03 Mar</span></div>
            <div className="wb-r ax-in" style={{ '--d': '.24s' }}><svg className="sig st-waiting" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span className="wb-nm">Sallowby Skin</span><span className="wb-m">Apr</span><span className="wb-m">21 Apr</span></div>
            <div className="wb-r ax-in" style={{ '--d': '.3s' }}><svg className="sig st-working" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span className="wb-nm">Pellmoor Pet</span><span className="wb-m">Jun</span><span className="wb-m">30 Jun</span></div>
          </section>
          {/* the selected account: 9 months since it chose the rival */}
          <section className="ax-card wb-tl ax-fade" style={{ '--d': '.2s' }}>
            <header className="wb-th"><b>Tarnfell Outdoor</b><span>on Rival A · checked every 2 weeks</span></header>
            <div className="wb-strip">
              <div className="wb-mo"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span></div>
              <div className="wb-tr"><i className="wb-rail" /><i className="wb-line" /><i className="wb-start" /><i className="wb-dot" style={{ '--p': '6.59', '--t': '0.75s' }} /><i className="wb-dot" style={{ '--p': '11.72', '--t': '0.86s' }} /><i className="wb-dot" style={{ '--p': '16.85', '--t': '0.97s' }} /><i className="wb-dot" style={{ '--p': '21.98', '--t': '1.07s' }} /><i className="wb-dot" style={{ '--p': '32.23', '--t': '1.29s' }} /><i className="wb-dot" style={{ '--p': '37.36', '--t': '1.39s' }} /><i className="wb-dot" style={{ '--p': '42.49', '--t': '1.50s' }} /><i className="wb-dot" style={{ '--p': '47.62', '--t': '1.61s' }} /><i className="wb-dot" style={{ '--p': '52.75', '--t': '1.72s' }} /><i className="wb-dot" style={{ '--p': '63.00', '--t': '1.93s' }} /><i className="wb-dot" style={{ '--p': '68.13', '--t': '2.04s' }} /><i className="wb-dot" style={{ '--p': '73.26', '--t': '2.14s' }} /><i className="wb-dot" style={{ '--p': '78.39', '--t': '2.25s' }} /><i className="wb-dot" style={{ '--p': '88.64', '--t': '2.46s' }} /><i className="wb-dot" style={{ '--p': '93.77', '--t': '2.57s' }} /><i className="wb-dot" style={{ '--p': '98.90', '--t': '2.68s' }} /><i className="wb-mk" style={{ '--p': '27.11', '--t': '1.18s' }} /><i className="wb-pin" style={{ '--p': '27.11', '--t': '1.18s' }} /><i className="wb-mk" style={{ '--p': '57.88', '--t': '1.82s' }} /><i className="wb-pin" style={{ '--p': '57.88', '--t': '1.82s' }} /><i className="wb-mk" style={{ '--p': '83.52', '--t': '2.36s' }} /><i className="wb-pin" style={{ '--p': '83.52', '--t': '2.36s' }} /></div>
            </div>
            <div className="wb-caps"><figure style={{ '--t': '1.18s' }}><div className="ax-shot"><div className="wb-pg wb-c1"><span className="wb-it"><i className="wb-tile" /><i className="wb-bar" /></span><i className="wb-wait" /><b>0 emails</b></div></div><figcaption><b>16 Mar</b><span>Welcome email</span></figcaption></figure><figure style={{ '--t': '1.82s' }}><div className="ax-shot"><div className="wb-pg wb-c2"><span className="wb-out">STOP</span><span className="wb-inb">20% off</span></div></div><figcaption><b>8 Jun</b><span>Unsubscribe</span></figcaption></figure><figure style={{ '--t': '2.36s' }}><div className="ax-shot"><div className="wb-pg wb-c3"><span className="wb-fld"><s>TRAIL10</s></span><b>Code expired</b></div></div><figcaption><b>17 Aug</b><span>Emailed code</span></figcaption></figure></div>
          </section>
          <p className="wb-lock ax-fade" style={{ '--d': '.3s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Public sign ups only · nothing bought</p>
          {/* the drafted note */}
          <section className="ax-card wb-note ax-fade" style={{ '--d': '.28s' }}>
            <header className="wb-nh">
              <svg className="wb-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.5" width="11.5" height="9" rx="1.5" /><path d="m2.75 4.5 5.25 4 5.25-4" /></svg>
              <b>Reopen note</b><span className="wb-sep">·</span><span className="wb-ns"><span className="a">drafting…</span><span className="b">drafted</span></span>
            </header>
            <dl className="wb-to"><div><dt>To</dt><dd>Maya · Head of ecommerce</dd></div><div><dt>Subject</dt><dd className="wb-sj">What broke since January</dd></div></dl>
            <div className="wb-bd">
              <p className="wb-hi"><span className="wb-ty">Hi Maya, since you moved:</span></p>
              <ol className="wb-ci">
                <li style={{ '--d': '3.72s', '--w': '104px' }}><time>16 Mar</time><span>Welcome email stopped</span><i className="wb-sk" /></li>
                <li style={{ '--d': '3.86s', '--w': '96px' }}><time>8 Jun</time><span>Unsubscribe ignored</span><i className="wb-sk" /></li>
                <li style={{ '--d': '4s', '--w': '110px' }}><time>17 Aug</time><span>Emailed code expired</span><i className="wb-sk" /></li>
              </ol>
              <p className="wb-ask" style={{ '--d': '4.14s', '--w': '132px' }}><span>Worth 15 min before 12 Jan?</span><i className="wb-sk" /></p>
            </div>
            <span className="ax-chip wb-att"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m10.75 5.5-4.1 4.1a1.25 1.25 0 0 0 1.77 1.77l4.35-4.35a2.5 2.5 0 0 0-3.54-3.54L4.88 7.83a3.75 3.75 0 0 0 5.3 5.3l3.07-3.07" /></svg>3 captures · signed</span>
            <footer className="wb-nf">
              <span className="wb-hint">You send it yourself</span>
              <span className="ax-btn">Send 1:1</span>
            </footer>
          </section>
          <div className="ax-toast wb-toast"><svg className="sig st-needs" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Tarnfell needs you</b><span>Note ready</span></p><span className="ax-btn">Review</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
