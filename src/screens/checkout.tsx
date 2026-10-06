/* The checkout app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/checkout.css, loaded by the page, never imported here.
   Converted from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function CheckoutScreen() {
  return (
    <div className="il appx-il app-checkout"><div className="appx-fit"><div className="appx" role="img" aria-label="An AI checkout test on your own store: a declared Obsession agent places 1 real £48.20 order on each of 6 AI checkout paths, each on its own card, used once and capped at £48.20 inside a £300 monthly budget, and refunds every one. 5 paths land; 1 AI assistant’s path ends with an empty basket because sizes are hidden from agents, so the agent drafts the fix, you approve it, and a retest is booked.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Missions<span>/</span>AI checkout test</span>
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
          <header className="ck-h ax-fade">
            <h2>AI checkout test</h2><span className="ck-meta">your-store.example · 3 Oct</span>
            <span className="ck-id"><span className="ck-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          {/* the money rails: the monthly budget fills as each order is placed; every card is used once and capped to its order */}
          <div className="ck-sp ax-fade" style={{ '--d': '.06s' }}>
            <span className="ck-bg"><span className="ck-k">Monthly budget</span><span className="ck-mt" aria-hidden="true"><i /></span><span className="ck-sum"><b className="ck-cnt" />/ £300</span></span>
            <span className="ck-cp"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><rect x="2" y="3.75" width="12" height="8.5" rx="1.5" /><path d="M2 6.75h12M4.5 9.75h2.5" strokeLinecap="round" /></svg><span className="ck-k">1 card per order, used once</span><b>Cap £48.20</b></span>
          </div>
          {/* 6 paths: 5 land with a refunded order each; Assistant A's checkout empties the basket and needs you */}
          <section className="ck-gr">
            <div className="ck-t ck-s ax-in" style={{ gridArea: 'a', '--d': '.10s', '--ck-s': '.3s', '--ck-n': '1', '--ck-t': '1.1s' }}>
              <p className="ck-th"><svg className="sig st-landed ck-spn ck-lnd" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Store agent</b><time>09:12</time></p>
              <p className="ck-am ck-stk"><span className="ck-wk">Placing order</span><span className="ck-ok1"><b>£48.20</b><em>#1042</em></span></p>
              <p className="ck-rc"><span className="ck-cd">•••• 4417</span><span className="ck-rf"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3.5 3 6.5l3 3" /><path d="M3 6.5h6.5a3.25 3.25 0 0 1 0 6.5H7" /></svg>Refunded</span></p>
            </div>
            <div className="ck-t ck-f ax-in" style={{ gridArea: 'f', '--d': '.13s', '--ck-s': '.7s', '--ck-n': '3' }}>
              <p className="ck-th">
                <span className="ck-mk"><svg className="sig st-working ck-spn w0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-needs moving w1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-waiting moving w2" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><b>Assistant A</b>
                <span className="ck-ss ck-stk"><span className="ck-wk">Placing order</span><span className="ck-nd">Needs you</span><span className="ck-rb">Retest 14:00</span></span>
              </p>
              <div className="ck-fb">
                {/* while it runs: the agent's own log */}
                <ol className="ck-log" aria-hidden="true">
                  <li style={{ '--ck-l': '1.2s' }}><time>09:16:02</time>Linen shirt, M found</li>
                  <li style={{ '--ck-l': '1.95s' }}><time>09:16:04</time>Added to basket</li>
                  <li style={{ '--ck-l': '2.7s' }}><time>09:16:05</time>Basket: 0 items</li>
                </ol>
                {/* the finding, with what the agent saw */}
                <div className="ck-fd">
                  <div className="ck-tx">
                    <h3>Basket empty after add</h3>
                    <p className="ck-why">Size hidden from agents</p>
                    <p className="ck-cd2">•••• 6602 · not charged</p>
                  </div>
                  <span className="ax-shot ck-c ck-c1"><span className="ck-pg ck-prod"><i className="ck-im" /><span className="ck-pl"><i /><i /><span className="ck-sz"><i /><i /><i /></span></span><i className="ck-bt" /></span></span>
                  <svg className="ck-ar" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1.5 5h7M6 2.5 8.5 5 6 7.5" /></svg>
                  <span className="ax-shot ck-c ck-c2"><span className="ck-pg ck-cart"><i className="ck-ln" /><span className="ck-zero"><b>0</b><i /></span><i className="ck-bt" /></span></span>
                </div>
              </div>
              {/* the drafted fix, and the human OK */}
              <div className="ck-fx">
                <svg className="ck-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M4 2.5h5.25L12 5.25v8.25H4Z" /><path d="M6.25 8h3.5M6.25 10.5h3.5" strokeLinecap="round" /></svg>
                <span className="ck-fxt">
                  <span className="ck-fl ck-stk"><span>Drafted fix</span><span>Signed by AM · <i>7f3a…c91e</i></span></span>
                  <b>Add sizes to the product feed</b>
                </span>
                <span className="ck-act ck-stk"><span className="ax-btn ck-go">Approve fix</span><span className="ck-dn"><span className="ax-tick" />Approved</span></span>
              </div>
            </div>
            <div className="ck-t ck-s ax-in" style={{ gridArea: 'b', '--d': '.16s', '--ck-s': '.7s', '--ck-n': '1', '--ck-t': '1.5s' }}>
              <p className="ck-th"><svg className="sig st-landed ck-spn ck-lnd" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Assistant B</b><time>09:13</time></p>
              <p className="ck-am ck-stk"><span className="ck-wk">Placing order</span><span className="ck-ok1"><b>£48.20</b><em>#1043</em></span></p>
              <p className="ck-rc"><span className="ck-cd">•••• 2093</span><span className="ck-rf"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3.5 3 6.5l3 3" /><path d="M3 6.5h6.5a3.25 3.25 0 0 1 0 6.5H7" /></svg>Refunded</span></p>
            </div>
            <div className="ck-t ck-s ax-in" style={{ gridArea: 'c', '--d': '.19s', '--ck-s': '.3s', '--ck-n': '2', '--ck-t': '1.9s' }}>
              <p className="ck-th"><svg className="sig st-landed ck-spn ck-lnd" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Assistant C</b><time>09:13</time></p>
              <p className="ck-am ck-stk"><span className="ck-wk">Placing order</span><span className="ck-ok1"><b>£48.20</b><em>#1044</em></span></p>
              <p className="ck-rc"><span className="ck-cd">•••• 7781</span><span className="ck-rf"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3.5 3 6.5l3 3" /><path d="M3 6.5h6.5a3.25 3.25 0 0 1 0 6.5H7" /></svg>Refunded</span></p>
            </div>
            <div className="ck-t ck-s ax-in" style={{ gridArea: 'd', '--d': '.22s', '--ck-s': '.7s', '--ck-n': '2', '--ck-t': '2.3s' }}>
              <p className="ck-th"><svg className="sig st-landed ck-spn ck-lnd" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Assistant D</b><time>09:14</time></p>
              <p className="ck-am ck-stk"><span className="ck-wk">Placing order</span><span className="ck-ok1"><b>£48.20</b><em>#1045</em></span></p>
              <p className="ck-rc"><span className="ck-cd">•••• 5160</span><span className="ck-rf"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3.5 3 6.5l3 3" /><path d="M3 6.5h6.5a3.25 3.25 0 0 1 0 6.5H7" /></svg>Refunded</span></p>
            </div>
            <div className="ck-t ck-s ax-in" style={{ gridArea: 'e', '--d': '.25s', '--ck-s': '.3s', '--ck-n': '3', '--ck-t': '2.7s' }}>
              <p className="ck-th"><svg className="sig st-landed ck-spn ck-lnd" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Browser agent</b><time>09:15</time></p>
              <p className="ck-am ck-stk"><span className="ck-wk">Placing order</span><span className="ck-ok1"><b>£48.20</b><em>#1046</em></span></p>
              <p className="ck-rc"><span className="ck-cd">•••• 3348</span><span className="ck-rf"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3.5 3 6.5l3 3" /><path d="M3 6.5h6.5a3.25 3.25 0 0 1 0 6.5H7" /></svg>Refunded</span></p>
            </div>
          </section>
          <p className="ck-note ax-fade" style={{ '--d': '.3s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Your own store only · fixes need your OK</p>
          <div className="ax-toast ck-toast"><svg className="sig st-waiting" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Fix approved</b><span>Retest booked</span></p><span className="ax-btn">Open</span></div>
          <svg className="ax-ptr ck-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.1 4.6 2-.9-2.1-4.5h4.3Z" /></svg>
        </div>
      </div>
    </div></div></div>
  )
}
