/* The dev app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to its
   root to run the story. Its look and story: css/dev.css, loaded by the page, never imported here. Converted from
   its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function DevScreen() {
  return (
    <div className="il appx-il app-dev"><div className="appx-fit"><div className="appx" role="img" aria-label="A developer console in test mode: 3 missions created by code stream into the request log, each POST /v1/missions answered 201, and the newest opens on its verdict payload with a receipt_url. The verdict lands on your webhook with 200 OK.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Missions<span>/</span>Developers</span>
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
          <header className="dv-h ax-fade">
            <h2>Developers</h2>
            <span className="ax-meta">API v1</span>
            <span className="dv-test"><span className="ax-toggle" />Test mode</span>
            <span className="dv-id"><span className="dv-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          <section className="ax-card dv-key ax-fade" style={{ '--d': '.06s' }}>
            <span className="dv-ki"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="5.5" cy="10.5" r="2.75" /><path d="M7.45 8.55 13 3M10.75 5.25 12.5 7" /></svg></span>
            <span className="dv-kl">Secret key</span>
            <span className="dv-kv">
              <span className="pre">obs_test_</span><span className="mask"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></span><span className="end">4f2a</span>
              <svg className="cp" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="5.25" y="5.25" width="8" height="8" rx="1.5" /><path d="M10.75 3.25v-.25a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0-.75.75v7c0 .41.34.75.75.75h.25" /></svg>
            </span>
            <span className="dv-used">Used<span className="dv-stk"><b>09:40</b><b>09:41</b></span></span>
            <span className="ax-btn ghost">Roll key</span>
          </section>
          <div className="dv-grid">
            <section className="ax-card dv-log ax-fade" style={{ '--d': '.12s' }}>
              <header className="dv-lh"><b>Requests</b><span className="n">Last hour</span><span className="lv"><i className="cur" />Live</span></header>
              <ol className="dv-ls">
                <li className="dv-li dv-new n3 on"><div className="dv-in">
                  <div className="dv-r"><span className="dv-stk"><svg className="sig st-working w" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-landed f" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><span className="m">POST</span><span className="p">/v1/missions</span><span className="t">competitor_inbox</span><span className="sc">201</span><span className="ms">142 ms</span></div>
                  <div className="dv-x"><div className="dv-xi"><div className="dv-well">
                    <p><span className="pu">{'{'}</span><span className="dv-ev">mission.verdict</span></p>
                    <p>{'  '}<span className="k">"target"</span><span className="pu">:</span>{' '}<span className="s">"Rival B"</span><span className="pu">,</span></p>
                    <p>{'  '}<span className="k">"finding"</span><span className="pu">:</span>{' '}<span className="s">"Candle £5 cheaper, free shipping"</span><span className="pu">,</span></p>
                    <p className="rc">{'  '}<span className="k">"receipt_url"</span><span className="pu">:</span>{' '}<span className="s">"<u>https://useobsession.com/r/7f3a</u>"</span></p>
                    <p><span className="pu">{'}'}</span></p>
                  </div></div></div>
                </div></li>
                <li className="dv-li dv-new n2"><div className="dv-in"><div className="dv-r"><svg className="sig st-working" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span className="m">POST</span><span className="p">/v1/missions</span><span className="t">mystery_shopper</span><span className="sc">201</span><span className="ms">156 ms</span></div></div></li>
                <li className="dv-li dv-new n1"><div className="dv-in"><div className="dv-r"><svg className="sig st-working" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span className="m">POST</span><span className="p">/v1/missions</span><span className="t">price_monitoring</span><span className="sc">201</span><span className="ms">188 ms</span></div></div></li>
                <li className="dv-li"><div className="dv-in"><div className="dv-r"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span className="m">POST</span><span className="p">/v1/missions</span><span className="t">website_audit</span><span className="sc">201</span><span className="ms">171 ms</span></div></div></li>
                <li className="dv-li"><div className="dv-in"><div className="dv-r"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span className="m">POST</span><span className="p">/v1/missions</span><span className="t">ad_tracking</span><span className="sc">201</span><span className="ms">203 ms</span></div></div></li>
              </ol>
            </section>
            <aside className="ax-card dv-wh ax-fade" style={{ '--d': '.18s' }}>
              <header className="dv-wh-h"><span className="dv-stk"><svg className="sig st-waiting w" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-landed f" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><b>Webhook</b><span className="ax-toggle" /></header>
              <p className="dv-ep">your-app.example</p>
              <ol className="dv-dl">
                <li className="dv-li dv-new d1"><div className="dv-in"><div className="dv-d"><span className="dv-stk"><svg className="sig st-working w" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span className="ax-tick f" /></span><span className="c">200 OK</span><time>09:41:09</time><span className="e">verdict · 38 ms</span></div></div></li>
                <li className="dv-li"><div className="dv-in"><div className="dv-d"><span className="ax-tick" /><span className="c">200 OK</span><time>09:12:40</time><span className="e">verdict · 41 ms</span></div></div></li>
                <li className="dv-li"><div className="dv-in"><div className="dv-d"><span className="ax-tick" /><span className="c">200 OK</span><time>08:58:02</time><span className="e">verdict · 36 ms</span></div></div></li>
              </ol>
              <div className="dv-24"><p>Last 24 h<b>100%</b></p><div className="dv-bars"><i style={{ '--h': '0.35' }} /><i style={{ '--h': '0.5' }} /><i style={{ '--h': '0.3' }} /><i style={{ '--h': '0.25' }} /><i style={{ '--h': '0.2' }} /><i style={{ '--h': '0.15' }} /><i style={{ '--h': '0.2' }} /><i style={{ '--h': '0.45' }} /><i style={{ '--h': '0.6' }} /><i style={{ '--h': '0.55' }} /><i style={{ '--h': '0.4' }} /><i style={{ '--h': '0.7' }} /><i style={{ '--h': '0.5' }} /><i style={{ '--h': '0.45' }} /><i style={{ '--h': '0.65' }} /><i style={{ '--h': '0.8' }} /><i style={{ '--h': '0.55' }} /><i style={{ '--h': '0.4' }} /><i style={{ '--h': '0.6' }} /><i style={{ '--h': '0.5' }} /><i style={{ '--h': '0.35' }} /><i style={{ '--h': '0.55' }} /><i style={{ '--h': '0.7' }} /><i style={{ '--h0': '.45', '--h': '.85' }} /></div></div>
              <footer className="dv-wf"><svg className="ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M8 1.75 13 3.6v4.1c0 3-2.1 5.4-5 6.55C5.1 13.1 3 10.7 3 7.7V3.6Z" /><path d="m5.9 7.9 1.5 1.5 2.8-2.9" strokeLinecap="round" /></svg>Signed · ed25519</footer>
            </aside>
          </div>
        </div>
      </div>
    </div></div></div>
  )
}
