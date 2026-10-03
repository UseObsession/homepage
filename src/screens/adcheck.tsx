/* The adcheck app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/adcheck.css, loaded by the page, never imported here. Converted
   from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function AdcheckScreen() {
  return (
    <div className="il appx-il app-adcheck"><div className="appx-fit"><div className="appx" role="img" aria-label="Ad landing check for Your company: every morning a declared Obsession agent opens each of 6 live search and social ads’ landing pages as a customer and checks it loads, the offer and price match the ad, and the item is in stock. Ad 4 sends clicks to a sold out lamp at $410 a day, so a fix is drafted; AM approves the pause and Ad 4 is paused, 36 minutes after it was flagged.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Missions<span>/</span>Ad landing check</span>
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
          <header className="adc-h ax-fade">
            <h2>Ad landing check</h2><span className="adc-meta">6 live ads · daily 07:00</span>
            <span className="adc-id"><span className="adc-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          <div className="adc-wrap">
            {/* every live ad, its landing page opened as a customer: 4 checks each, and what it spends a day */}
            <section className="adc-tb ax-fade" style={{ '--d': '.06s' }}>
              <p className="adc-tt"><span>Checked as a customer</span><span className="adc-sum"><b className="adc-cnt" /> of 24 checks pass</span></p>
              <div className="adc-row adc-th"><span className="a">Ad</span><span className="k">Loads</span><span className="k">Offer</span><span className="k">Price</span><span className="k">Stock</span><span className="d">Daily</span><span className="u">Landing page<i>Load</i></span></div>
              <div className="adc-row" style={{ '--t': '0.62s' }}>
                <span className="a"><span className="adc-mk"><svg className="sig st-landed adc-cl" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><span className="ax-shot adc-cr adc-ts"><span className="adc-tp"><i className="t1" /><i className="t2" /><i className="t3" /><i className="t4" /></span></span><span className="adc-nm"><b>Ad 1</b><em>Search ad</em></span></span>
                <span className="k" style={{ '--k': '0' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '1' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '2' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '3' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span>
                <span className="d">$120</span><span className="u">/linen-sheets<i>0.8 s</i></span>
              </div>
              <div className="adc-row" style={{ '--t': '0.92s' }}>
                <span className="a"><span className="adc-mk"><svg className="sig st-landed adc-cl" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><span className="ax-shot adc-cr adc-to"><span className="adc-tp"><i className="im p2" /><span className="ft"><i /><i className="cta" /></span></span></span><span className="adc-nm"><b>Ad 2</b><em>Social ad</em></span></span>
                <span className="k" style={{ '--k': '0' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '1' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '2' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '3' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span>
                <span className="d">$85</span><span className="u">/stoneware-mugs<i>1.1 s</i></span>
              </div>
              <div className="adc-row" style={{ '--t': '1.22s' }}>
                <span className="a"><span className="adc-mk"><svg className="sig st-landed adc-cl" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><span className="ax-shot adc-cr adc-ts"><span className="adc-tp"><i className="t1" /><i className="t2" /><i className="t3" /><i className="t4" /></span></span><span className="adc-nm"><b>Ad 3</b><em>Search ad</em></span></span>
                <span className="k" style={{ '--k': '0' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '1' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '2' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '3' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span>
                <span className="d">$240</span><span className="u">/wool-throw<i>0.9 s</i></span>
              </div>
              <div className="adc-row r-hot" style={{ '--t': '1.52s' }}>
                <span className="a"><span className="adc-mk adc-stk"><svg className="sig st-working w0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-needs w1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-landed w2" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><span className="ax-shot adc-cr adc-to"><span className="adc-tp"><i className="im p1" /><span className="ft"><i /><i className="cta" /></span></span></span><span className="adc-nm"><b>Ad 4</b><em>Social ad</em></span></span>
                <span className="k" style={{ '--k': '0' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '1' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '2' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k adc-fail"><span className="adc-no"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3.75 3.75 8.25 8.25M8.25 3.75 3.75 8.25" /></svg></span></span>
                <span className="d"><span className="adc-stk"><b>$410</b><em>Paused</em></span></span><span className="u">/table-lamp<i>0.7 s</i></span>
              </div>
              <div className="adc-row" style={{ '--t': '1.82s' }}>
                <span className="a"><span className="adc-mk"><svg className="sig st-landed adc-cl" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><span className="ax-shot adc-cr adc-ts"><span className="adc-tp"><i className="t1" /><i className="t2" /><i className="t3" /><i className="t4" /></span></span><span className="adc-nm"><b>Ad 5</b><em>Search ad</em></span></span>
                <span className="k" style={{ '--k': '0' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '1' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '2' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '3' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span>
                <span className="d">$64</span><span className="u">/oak-shelf<i>1.2 s</i></span>
              </div>
              <div className="adc-row" style={{ '--t': '2.12s' }}>
                <span className="a"><span className="adc-mk"><svg className="sig st-landed adc-cl" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><span className="ax-shot adc-cr adc-to"><span className="adc-tp"><i className="im p3" /><span className="ft"><i /><i className="cta" /></span></span></span><span className="adc-nm"><b>Ad 6</b><em>Social ad</em></span></span>
                <span className="k" style={{ '--k': '0' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '1' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '2' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span><span className="k" style={{ '--k': '3' }}><svg className="adc-ok" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.75 6.4 5 8.6 9.25 3.6" /></svg></span>
                <span className="d">$150</span><span className="u">/linen-cushion<i>0.9 s</i></span>
              </div>
            </section>
            {/* the 1 that fails: what the agent saw, what it costs, the drafted fix, and the OK */}
            <aside className="adc-pan">
              <p className="adc-ph"><span className="adc-mk adc-stk"><svg className="sig st-needs w1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-landed w2" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><b>Ad 4</b><em>Social ad</em><time>07:04</time></p>
              <div className="adc-fd">
                <h3>Sends clicks to a sold out page</h3>
                <p className="adc-cost"><b>$410</b><span>a day</span></p>
              </div>
              <div className="adc-ev">
                <span className="ax-shot adc-c adc-ad"><span className="adc-cp"><span className="hd"><i className="av" /><i className="nm" /></span><i className="im" /><span className="ft"><i /><i className="cta" /></span></span></span>
                <svg className="adc-ar" viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1.5 5h9M7.5 2 10.5 5 7.5 8" /></svg>
                <span className="ax-shot adc-c adc-pg"><span className="adc-cp"><i className="im" /><span className="ln"><i className="l1" /><i className="l2" /><i className="l3" /></span><b className="so">Sold out</b></span></span>
                <span className="adc-cap">The ad</span><span className="adc-cap m">/table-lamp</span>
              </div>
              <div className="adc-fx">
                <p className="adc-fl"><svg className="adc-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M4 2.5h5.25L12 5.25v8.25H4Z" /><path d="M6.25 8h3.5M6.25 10.5h3.5" strokeLinecap="round" /></svg>Drafted fix</p>
                <p className="adc-ft">Pause Ad 4 or point it to a lamp in stock</p>
              </div>
              <footer className="adc-pf">
                <span className="adc-f1"><span className="ax-btn ghost">Change link</span><span className="ax-btn adc-go">Pause Ad 4</span></span>
                <span className="adc-f2"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Paused by AM</b><span className="ax-mono">7f3a…c91e</span></span>
              </footer>
            </aside>
          </div>
          <p className="adc-note ax-fade" style={{ '--d': '.2s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Never clicks your ads · pauses after your OK</p>
          <div className="ax-toast adc-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Ad 4 paused</b><span>36 min after the flag</span></p><span className="ax-btn">Open</span></div>
          <svg className="ax-ptr adc-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.1 4.6 2-.9-2.1-4.5h4.3Z" /></svg>
        </div>
      </div>
    </div></div></div>
  )
}
