/* The brief app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/brief.css, loaded by the page, never imported here. Converted
   from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function BriefScreen() {
  return (
    <div className="il appx-il app-brief"><div className="appx-fit"><div className="appx" role="img" aria-label="An account brief for Larchwise before Friday's 10:00 call, built from 7 days as a declared trial customer who asked only their bot: 3 findings with captures, 3 public signals and drafted talking points. The rep clicks Add to CRM and the brief is saved to the account, signed. Public sign ups and pages only.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Accounts<span>/</span>Larchwise</span>
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
            <a className="on" role="none"><i />Prospects</a><a role="none"><i />Customers</a><a role="none"><i />Rivals</a><a role="none"><i />Suppliers</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          {/* header: the account and the call; the declared agent */}
          <header className="br-h ax-fade">
            <h2>Larchwise</h2><span className="br-meta">Call Fri 10:00</span>
            <span className="br-id"><span className="br-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          <div className="br-grid">
            {/* what a customer of theirs actually gets */}
            <section className="ax-card br-fd ax-fade" style={{ '--d': '.08s' }}>
              <div className="br-hd"><b>What their customers get</b><span className="br-dy"><span className="br-days" aria-hidden="true"><i style={{ '--d': '.3s' }} /><i className="hit" style={{ '--d': '.36s', '--h': '.98s' }} /><i style={{ '--d': '.42s' }} /><i style={{ '--d': '.48s' }} /><i className="hit" style={{ '--d': '.54s', '--h': '1.58s' }} /><i className="hit" style={{ '--d': '.6s', '--h': '2.18s' }} /><i style={{ '--d': '.66s' }} /></span><span>7 days</span></span></div>
              <ul>
                <li className="br-f ax-in" style={{ '--d': '.7s', '--m': '.95s' }}>
                  <svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                  <div className="br-ft"><p className="br-k"><span>Trial emails</span><time>Day 2 · 09:14</time></p><p className="br-v">2 emails, then 5 days silent</p></div>
                  <span className="ax-shot br-cap cap-mail" aria-hidden="true"><span className="cb"><span className="r"><i className="a" /><i className="l" /></span><span className="r"><i className="a" /><i className="l s" /></span><span className="r e"><i className="a" /><i className="l" /></span></span></span>
                </li>
                <li className="br-f ax-in" style={{ '--d': '1.3s', '--m': '1.55s' }}>
                  <svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                  <div className="br-ft"><p className="br-k"><span>Pricing page</span><time>Day 5 · 06:00</time></p><p className="br-v">Team plan up 18% on Tue</p></div>
                  <span className="ax-shot br-cap cap-price" aria-hidden="true"><span className="cb"><span className="pl"><i className="n" /><i className="p" /><i className="l" /><i className="l" /></span><span className="pl on"><i className="n" /><i className="p" /><i className="l" /><i className="l" /></span><span className="pl"><i className="n" /><i className="p" /><i className="l" /><i className="l" /></span></span></span>
                </li>
                <li className="br-f ax-in" style={{ '--d': '1.9s', '--m': '2.15s' }}>
                  <svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                  <div className="br-ft"><p className="br-k"><span>Help bot, asked twice</span><time>Day 6 · 11:20</time></p><p className="br-v">2 of 5 answers contradict docs</p></div>
                  <span className="ax-shot br-cap cap-chat" aria-hidden="true"><span className="cb"><i className="q" /><i className="a" /><i className="q s" /><i className="a x" /></span></span>
                </li>
              </ul>
            </section>
            {/* what anyone can read */}
            <section className="ax-card br-sg ax-fade" style={{ '--d': '.16s' }}>
              <div className="br-hd"><b>Signals</b><span>3 new</span></div>
              <ul>
                <li className="br-s">
                  <span className="br-ic ax-pop" style={{ '--d': '2.45s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="6.5" cy="5.25" r="2.5" /><path d="M2 13.25c.5-2.6 2.2-4 4.5-4s4 1.4 4.5 4M12.75 4.5v4M10.75 6.5h4" /></svg></span>
                  <div className="ax-in" style={{ '--d': '2.5s' }}><p>12 open sales roles</p><p className="src">careers page</p></div>
                </li>
                <li className="br-s">
                  <span className="br-ic ax-pop" style={{ '--d': '2.62s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="2.25" width="10" height="11.5" rx="2" /><circle cx="8" cy="6.5" r="1.75" /><path d="M5.25 11.25c.6-1.25 1.5-1.85 2.75-1.85s2.15.6 2.75 1.85" /></svg></span>
                  <div className="ax-in" style={{ '--d': '2.67s' }}><p>New VP Support</p><p className="src">press release</p></div>
                </li>
                <li className="br-s">
                  <span className="br-ic ax-pop" style={{ '--d': '2.79s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"><circle cx="8" cy="8" r="5.5" /><path d="M2.5 8h11M8 2.5c1.55 1.6 2.35 3.45 2.35 5.5S9.55 11.9 8 13.5C6.45 11.9 5.65 10.05 5.65 8S6.45 4.1 8 2.5Z" /></svg></span>
                  <div className="ax-in" style={{ '--d': '2.84s' }}><p>Launch in the Nordics</p><p className="src">news page</p></div>
                </li>
              </ul>
            </section>
          </div>
          {/* the output: what to say on Friday */}
          <section className="ax-card br-tp ax-fade" style={{ '--d': '.24s' }}>
            <div className="br-tp-h">
              <b>Talking points</b><span className="br-st"><span className="br-mk" aria-hidden="true"><svg className="sig st-working moving w0" viewBox="2 2 96 96"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-landed w1" viewBox="2 2 96 96"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><span className="br-sw"><span className="a">drafting…</span><span className="b">drafted</span></span></span>
              <div className="br-acts">
                <span className="ax-btn ghost"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><rect x="5.25" y="5.25" width="7.5" height="7.5" rx="1.5" /><path d="M3.25 10.5V4.75c0-.83.67-1.5 1.5-1.5h5.75" strokeLinecap="round" /></svg>Copy</span>
                <span className="br-add">
                  <span className="ax-btn s1"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M8 3.5v9M3.5 8h9" /></svg>Add to CRM</span>
                  <span className="ax-btn ghost s2"><span className="ax-tick" />In CRM</span>
                </span>
              </div>
            </div>
            <ul>
              <li style={{ '--d': '3s', '--t': '.66s', '--w': '190px' }}><span className="br-tl">Open on the trial: silent after day 2.</span></li>
              <li style={{ '--d': '3.78s', '--t': '.62s', '--w': '184px' }}><span className="br-tl">Show their bot's 2 wrong answers.</span></li>
              <li style={{ '--d': '4.44s', '--t': '.62s', '--w': '198px' }}><span className="br-tl">Hiring 12 reps, yet trials hear nothing.</span></li>
            </ul>
          </section>
          <svg className="ax-ptr br-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.05 4.6 2.15-.95-2-4.5h4.3Z" /></svg>
          <div className="ax-toast br-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Brief added to CRM</b><span>Signed</span></p><span className="ax-btn">Open</span></div>
          <p className="br-note ax-fade" style={{ '--d': '.3s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Public sign ups and pages only</p>
        </div>
      </div>
    </div></div></div>
  )
}
