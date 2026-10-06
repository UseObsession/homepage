/* The inbox app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/inbox.css, loaded by the page, never imported here. Converted
   from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function InboxScreen() {
  return (
    <div className="il appx-il app-inbox"><div className="appx-fit"><div className="appx" role="img" aria-label="Rivals inbox: every email and text Rival A, B and C sent in 30 days, caught by a declared subscriber that joined through their public sign ups, with a send rate strip per rival. A new text from Rival B lands, its tags read Free gift and Over £40, today's square fills, the text opens next to its old 20% off offer, and the weekly digest is updated.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Rivals<span>/</span>Inbox</span>
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
          <header className="ibx-h ax-fade">
            <h2>Inbox</h2>
            <div className="ibx-tabs">
              <span className="ibx-tab on">All<i><span className="ibx-n"><b>35</b><b>36</b></span></i></span>
              <span className="ibx-tab"><svg className="ibx-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5" /><path d="m2.75 4.75 5.25 4 5.25-4" /></svg>Email<i>29</i></span>
              <span className="ibx-tab"><svg className="ibx-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M3.25 3.25h9.5c.55 0 1 .45 1 1v5.5c0 .55-.45 1-1 1H7.5l-3.25 2.5v-2.5h-1c-.55 0-1-.45-1-1v-5.5c0-.55.45-1 1-1Z" /></svg>Text<i><span className="ibx-n"><b>6</b><b>7</b></span></i></span>
            </div>
            <span className="ibx-id"><span className="ibx-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          <section className="ax-card ibx-rate ax-fade" style={{ '--d': '.06s' }}>
            <i className="ibx-band" aria-hidden="true" />
            <div className="ibx-rr ibx-cap" aria-hidden="true"><span /><span className="ibx-ax"><span>3 Sep</span><span className="ibx-today">Today</span></span><span className="ibx-ct">30 days</span></div>
            <div className="ibx-rr ibx-ra"><b>Rival A</b><span className="ibx-sq" aria-hidden="true"><i /><i /><i className="ibx-s" /><i /><i /><i /><i className="ibx-s" /><i /><i /><i className="ibx-s" /><i /><i /><i /><i className="ibx-s" /><i /><i /><i className="ibx-s" /><i /><i /><i className="ibx-s" /><i /><i className="ibx-s" /><i /><i /><i className="ibx-s" /><i /><i className="ibx-s" /><i /><i className="ibx-s" /><i className="ibx-t" /></span><span className="ibx-ct"><b>9</b> emails · <b>2</b> texts</span></div>
            <div className="ibx-rr ibx-rb"><b>Rival B</b><span className="ibx-sq" aria-hidden="true"><i /><i className="ibx-s" /><i /><i className="ibx-s" /><i /><i className="ibx-s" /><i /><i /><i className="ibx-s" /><i /><i className="ibx-s" /><i /><i className="ibx-s" /><i /><i /><i className="ibx-s" /><i /><i className="ibx-s" /><i /><i className="ibx-s" /><i /><i className="ibx-s" /><i className="ibx-s" /><i /><i className="ibx-s" /><i /><i className="ibx-s" /><i className="ibx-s" /><i className="ibx-s" /><i className="ibx-s ibx-t" /></span><span className="ibx-ct"><b>14</b> emails · <b><span className="ibx-n"><b>3</b><b>4</b></span></b> texts</span></div>
            <div className="ibx-rr ibx-rc"><b>Rival C</b><span className="ibx-sq" aria-hidden="true"><i /><i /><i /><i /><i className="ibx-s" /><i /><i /><i /><i /><i /><i /><i className="ibx-s" /><i /><i /><i className="ibx-s" /><i /><i /><i /><i className="ibx-s" /><i /><i /><i /><i /><i className="ibx-s" /><i /><i className="ibx-s" /><i /><i /><i className="ibx-s" /><i className="ibx-t" /></span><span className="ibx-ct"><b>6</b> emails · <b>1</b> text</span></div>
          </section>
          <section className="ax-card ibx-list ax-fade" style={{ '--d': '.1s' }}>
            <div className="ibx-rows">
              <div className="ibx-new"><div className="ibx-clip"><div className="ibx-m ibx-sel"><span className="ibx-ico"><i className="ibx-dot" /><svg className="ibx-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M3.25 3.25h9.5c.55 0 1 .45 1 1v5.5c0 .55-.45 1-1 1H7.5l-3.25 2.5v-2.5h-1c-.55 0-1-.45-1-1v-5.5c0-.55.45-1 1-1Z" /></svg></span><p className="ibx-l1"><b>Rival B</b><span className="ibx-ch">Text</span><time>Fri 09:14</time></p><p className="ibx-l2"><span className="ibx-tx">This weekend only</span><span className="ibx-tags"><span className="ax-chip ibx-tg" style={{ '--ibx-d': '2.2s' }}>Free gift</span><span className="ax-chip ibx-tg" style={{ '--ibx-d': '2.36s' }}>Over £40</span></span></p></div></div></div>
              <div className="ibx-m ibx-was ax-in" style={{ '--d': '.12s' }}><svg className="ibx-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5" /><path d="m2.75 4.75 5.25 4 5.25-4" /></svg><p className="ibx-l1"><b>Rival B</b><span className="ibx-ch">Email</span><time>Thu 19:02</time></p><p className="ibx-l2"><span className="ibx-tx">Ends tonight</span><span className="ibx-tags"><span className="ax-chip">20% off</span><span className="ax-chip">Last chance</span></span></p></div>
              <div className="ibx-m ax-in" style={{ '--d': '.17s' }}><svg className="ibx-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5" /><path d="m2.75 4.75 5.25 4 5.25-4" /></svg><p className="ibx-l1"><b>Rival C</b><span className="ibx-ch">Email</span><time>Thu 12:30</time></p><p className="ibx-l2"><span className="ibx-tx">On us, all week</span><span className="ibx-tags"><span className="ax-chip">Free delivery</span></span></p></div>
              <div className="ibx-m ax-in" style={{ '--d': '.22s' }}><svg className="ibx-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M3.25 3.25h9.5c.55 0 1 .45 1 1v5.5c0 .55-.45 1-1 1H7.5l-3.25 2.5v-2.5h-1c-.55 0-1-.45-1-1v-5.5c0-.55.45-1 1-1Z" /></svg><p className="ibx-l1"><b>Rival B</b><span className="ibx-ch">Text</span><time>Thu 10:00</time></p><p className="ibx-l2"><span className="ibx-tx">Last day for 20% off everything</span><span className="ibx-tags"><span className="ax-chip">20% off</span></span></p></div>
              <div className="ibx-m ax-in" style={{ '--d': '.27s' }}><svg className="ibx-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5" /><path d="m2.75 4.75 5.25 4 5.25-4" /></svg><p className="ibx-l1"><b>Rival A</b><span className="ibx-ch">Email</span><time>Thu 08:30</time></p><p className="ibx-l2"><span className="ibx-tx">The autumn edit is here</span><span className="ibx-tags"><span className="ax-chip">New in</span></span></p></div>
            </div>
          </section>
          <aside className="ax-card ibx-pv ax-fade" style={{ '--d': '.16s' }}>
            <div className="ibx-v ibx-v0">
              <header className="ibx-ph"><svg className="ibx-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5" /><path d="m2.75 4.75 5.25 4 5.25-4" /></svg><b>Rival B</b><span>Email</span><svg className="ibx-x" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="m4.5 4.5 7 7M11.5 4.5l-7 7" /></svg></header>
              <div className="ax-shot ibx-shot"><div className="ibx-em"><i className="ibx-lg" /><b>20% off ends tonight</b><i className="ibx-ln" /><i className="ibx-cta" /><span className="ibx-tl"><i /><i /><i /></span></div></div>
              <dl className="ibx-notes">
                <div><dt>Sent</dt><dd>Thu 19:02</dd></div>
                <div><dt>Discount</dt><dd>20%</dd></div>
                <div><dt>Reminder</dt><dd>2nd in 24 h</dd></div>
              </dl>
            </div>
            <div className="ibx-v ibx-v1">
              <header className="ibx-ph"><svg className="ibx-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M3.25 3.25h9.5c.55 0 1 .45 1 1v5.5c0 .55-.45 1-1 1H7.5l-3.25 2.5v-2.5h-1c-.55 0-1-.45-1-1v-5.5c0-.55.45-1 1-1Z" /></svg><b>Rival B</b><span>Text</span><svg className="ibx-x" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="m4.5 4.5 7 7M11.5 4.5l-7 7" /></svg></header>
              <div className="ax-shot ibx-shot"><div className="ibx-sms"><i className="ibx-av2" /><i className="ibx-nm" /><p className="ibx-bub"><b>Free gift over £40</b><span>This weekend only</span><i /></p><i className="ibx-inp" /></div></div>
              <dl className="ibx-notes">
                <div><dt>Sent</dt><dd>Fri 09:14</dd></div>
                <div><dt>Offer</dt><dd className="ibx-now">Free gift over £40</dd></div>
                <div><dt>Was</dt><dd className="ibx-old">20% off · Thu</dd></div>
              </dl>
            </div>
          </aside>
          <p className="ibx-note ax-fade" style={{ '--d': '.2s' }}><svg className="ibx-lk" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Public sign ups only · never replies</p>
          <div className="ax-toast ibx-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Rival B’s new offer</b><span>Digest updated</span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
