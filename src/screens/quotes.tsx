/* The quotes app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/quotes.css, loaded by the page, never imported here. Converted
   from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function QuotesScreen() {
  return (
    <div className="il appx-il app-quotes"><div className="appx-fit"><div className="appx" role="img" aria-label="Inbound quotes for Your company: requests by email, phone, a web form and a buyer's procurement agent, each answered from the price book in minutes and followed up to a yes or a no, while a custom request outside the price book waits for a person. A new request lands from a buyer agent, the quote builds line by line from the price book within the 10% discount cap, it is sent and the timer stops at 2 min 40 s, with a follow-up set for Thursday.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Missions<span>/</span>Inbound quotes</span>
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
          <header className="qt-h ax-fade">
            <h2>Inbound quotes</h2><span className="qt-meta">Price book · 412 lines</span>
            <span className="qt-id"><span className="qt-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          <div className="qt-wrap">
            {/* the inbox: every request, any channel, newest first */}
            <section className="qt-ls ax-fade" style={{ '--d': '.05s' }}>
              <p className="qt-lh"><b>Inbox</b><span className="qt-stk qt-ct"><i>4</i><i>5</i></span><span className="qt-md">Median 3 min</span></p>
              <div className="qt-new"><div className="qt-clip"><div className="qt-r qt-sel">
                <p className="qt-l1"><b>Logistics firm</b><span>· Buyer agent</span><time>10:42</time></p>
                <p className="qt-l2">
                  <span className="qt-stk qt-s1"><span className="qt-wk">Quoting from price book</span><span className="qt-q">Quoted in 2 min 40 s</span></span>
                  <span className="ax-st"><svg className="sig st-landed qt-gm" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span className="qt-stk qt-s2"><span>Working</span><span>Sent</span></span></span>
                </p>
              </div></div></div>
              <div className="qt-r qt-hot ax-in" style={{ '--d': '.1s' }}>
                <p className="qt-l1"><b>Dental group</b><span>· Form</span><time>09:31</time></p>
                <p className="qt-l2">
                  <span className="qt-off">Not in price book</span>
                  <span className="ax-st"><svg className="sig st-needs moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>Needs you</span>
                </p>
              </div>
              <div className="qt-r ax-in" style={{ '--d': '.15s' }}>
                <p className="qt-l1"><b>Pet food</b><span>· Email</span><time>Fri</time></p>
                <p className="qt-l2">
                  <span className="qt-q">Quoted in 3 min</span>
                  <span className="ax-st"><svg className="sig st-waiting" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>Follow-up Tue</span>
                </p>
              </div>
              <div className="qt-r ax-in" style={{ '--d': '.2s' }}>
                <p className="qt-l1"><b>Coffee roaster</b><span>· Phone</span><time>Thu</time></p>
                <p className="qt-l2">
                  <span className="qt-q">Quoted in 4 min</span>
                  <span className="ax-st"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>Said yes</span>
                </p>
              </div>
              <div className="qt-r ax-in" style={{ '--d': '.25s' }}>
                <p className="qt-l1"><b>Outdoor gear</b><span>· Email</span><time>Tue</time></p>
                <p className="qt-l2">
                  <span className="qt-q">Quoted in 2 min</span>
                  <span className="ax-st"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>Said no</span>
                </p>
              </div>
            </section>
            {/* the open request: who asked, what, the quote from price-book lines, the clock, the follow-ups */}
            <article className="qt-dt ax-slide" style={{ '--d': '.9s' }}>
              <header className="qt-dh">
                <h3>Logistics firm</h3><span className="qt-no">Q-2291</span>
                <span className="qt-tm"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="8" cy="9.25" r="4.75" /><path d="M8 6.75v2.5l1.5 1M6.5 2.25h3" /></svg><span className="qt-tv"><span className="qt-mn" /><span className="qt-sc" /></span></span>
              </header>
              <p className="qt-who"><b>Procurement agent</b><span>for Logistics firm</span></p>
              <div className="qt-rq ax-in" style={{ '--d': '1.15s' }}>
                <p className="qt-fr">procurement-ai@logistics.example</p>
                <p className="qt-ask">40 bays · 120 beams · install 3 sites</p>
              </div>
              <p className="qt-k ax-fade" style={{ '--d': '1.3s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M8 4.5C6.6 3.6 4.9 3.25 2.75 3.25v9c2.15 0 3.85.35 5.25 1.25 1.4-.9 3.1-1.25 5.25-1.25v-9c-2.15 0-3.85.35-5.25 1.25ZM8 4.5v9" /></svg><span>From price book</span><em>Valid 14 days</em></p>
              <div className="qt-pl">
                <p className="qt-ln" style={{ '--qt-t': '1.5s' }}><span className="c">PB-114</span><span className="i">Pallet bay 2.7 m</span><span className="n">×40</span><span className="a">$7,440</span></p>
                <p className="qt-ln" style={{ '--qt-t': '1.85s' }}><span className="c">PB-208</span><span className="i">Beam pair 2.2 m</span><span className="n">×120</span><span className="a">$4,560</span></p>
                <p className="qt-ln" style={{ '--qt-t': '2.2s' }}><span className="c">PB-310</span><span className="i">Install, per site</span><span className="n">×3</span><span className="a">$3,600</span></p>
                <p className="qt-ln qt-dc" style={{ '--qt-t': '2.55s' }}><span className="i">Volume 5%<span className="ax-chip qt-cap"><span className="ax-tick" />cap 10%</span></span><span className="a">−$780</span></p>
                <p className="qt-tot ax-fade" style={{ '--d': '1.45s' }}><b>Total</b><span className="qt-stk qt-sum"><span style={{ '--qt-b': '1.5s' }}>$0</span><span style={{ '--qt-a': '1.5s', '--qt-b': '1.85s' }}>$7,440</span><span style={{ '--qt-a': '1.85s', '--qt-b': '2.2s' }}>$12,000</span><span style={{ '--qt-a': '2.2s', '--qt-b': '2.55s' }}>$15,600</span><span style={{ '--qt-a': '2.55s' }}>$14,820</span></span></p>
              </div>
              <div className="qt-cd ax-fade" style={{ '--d': '1.3s' }}>
                <span className="qt-ck">Follow-up</span>
                <span className="qt-n qt-n1"><i />Sent</span><i className="qt-cn qt-c1" />
                <span className="qt-n qt-n2"><i />Thu</span><i className="qt-cn" />
                <span className="qt-n"><i />Mon</span><i className="qt-cn" />
                <span className="qt-n qt-end"><i />Yes or no</span>
              </div>
            </article>
          </div>
          <p className="qt-note ax-fade" style={{ '--d': '.3s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Price book only · off-book waits for your OK</p>
          <div className="ax-toast qt-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Quote sent</b><span>Follow-up Thu</span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
