/* The salescheck app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play
   to its root to run the story. Its look and story: css/salescheck.css, loaded by the page, never imported here.
   Converted from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function SalescheckScreen() {
  return (
    <div className="il appx-il app-salescheck"><div className="appx-fit"><div className="appx" role="img" aria-label="The Sales agent check for Your company on WhatsApp and site chat: a declared AI test customer asks the brand’s AI sales agent for the Duo bundle’s price, and the checkout stops before payment on a €0 budget. The agent says it is AI and gets stock and delivery right, but quotes €89 where the price list says €189, so the price check fails with the excerpt and up to 27 orders at risk, signed, and goes to Needs you with a fix drafted for your OK.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Missions<span>/</span>Sales agent check</span>
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
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="slc-nb"><b>2</b><b>3</b></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Lists</p>
            <a role="none"><i />Prospects</a><a role="none"><i />Customers</a><a role="none"><i />Rivals</a><a role="none"><i />Suppliers</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          <header className="ax-h slc-h ax-fade">
            <h2>Sales agent check</h2><span className="ax-meta">WhatsApp · Site chat · daily</span>
            <span className="slc-id"><span className="slc-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          <div className="slc-grid">
            {/* the conversation, as the test customer had it */}
            <section className="slc-chat ax-fade" style={{ '--d': '.06s' }}>
              <div className="slc-ct">
                <span className="slc-seg"><span className="on">WhatsApp</span><span>Site chat</span></span>
                <span className="slc-day">Mon 07:01</span>
              </div>
              <div className="slc-cv">
                <p className="slc-dc"><span className="slc-dav"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Test customer 2 · AI · for Your company</p>
                <p className="slc-b slc-out slc-m1">AI test customer for Your company. Duo bundle price?</p>
                <div className="slc-b2w">
                  <span className="slc-typ" aria-hidden="true"><i /><i /><i /></span>
                  <p className="slc-b slc-in slc-m2">I’m the AI assistant. The Duo bundle is <mark className="slc-hit">€89</mark>, in stock and arrives in 2 to 3 working days.</p>
                </div>
                <p className="slc-b slc-out slc-m3">Can I order now?</p>
                <div className="slc-co">
                  <span className="ax-shot slc-cs" aria-hidden="true"><span className="slc-cpg"><i className="t" /><i className="l" /><i className="b" /></span></span>
                  <span className="slc-cot"><b>Checkout</b><em>Duo bundle</em></span>
                  <span className="slc-cop">€89.00</span>
                </div>
                <p className="slc-stop"><span className="ax-tick" />Stopped before payment<span className="slc-bud">Budget €0</span></p>
              </div>
            </section>
            {/* the verdicts, as evidence */}
            <section className="slc-ck ax-fade" style={{ '--d': '.1s' }}>
              <div className="slc-kh">
                <b>4 checks</b>
                <span className="slc-sum">
                  <span><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>3 pass</span>
                  <span><svg className="sig st-needs" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>1 needs you</span>
                </span>
              </div>
              <div className="slc-fail">
                <p className="slc-ft">
                  <span className="slc-mk"><svg className="sig st-working w0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-needs moving w1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                  <b>Bundle price</b><time>07:01</time>
                </p>
                <div className="slc-df">
                  <p className="slc-dr slc-d1"><span className="k">Agent said</span><span className="q">“Duo bundle is €89”</span><b>€89</b></p>
                  <p className="slc-dr slc-d2"><span className="k">Price list</span><span className="s">Duo bundle · 07:00</span><b>€189</b></p>
                </div>
                <p className="slc-rk"><b>Up to 27 orders at risk</b><span>27 bundle chats last week</span></p>
              </div>
              <div className="slc-row" style={{ '--t': '2.05s' }}>
                <span className="slc-rm"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b>Says it’s AI</b><time>07:01</time>
                <p className="slc-ev"><span className="q">“I’m the AI assistant”</span><i>=</i><span>AI Act, Art. 50</span></p>
              </div>
              <div className="slc-row" style={{ '--t': '2.2s' }}>
                <span className="slc-rm"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b>Stock answer</b><time>07:01</time>
                <p className="slc-ev"><span className="q">“in stock”</span><i>=</i><span>Stock feed · 07:00</span></p>
              </div>
              <div className="slc-row" style={{ '--t': '2.35s' }}>
                <span className="slc-rm"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b>Delivery time</b><time>07:01</time>
                <p className="slc-ev"><span className="q">“2 to 3 working days”</span><i>=</i><span>Delivery page</span></p>
              </div>
              <p className="slc-sg"><span>Signed</span><span className="ax-mono">ed25519 · 7f3a 91c2 … c91e</span></p>
            </section>
          </div>
          <p className="slc-note ax-fade" style={{ '--d': '.2s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>With your OK · no jailbreaks</p>
          <div className="ax-toast slc-toast"><svg className="sig st-needs" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Wrong price caught</b><span>fix drafted for your OK</span></p><span className="ax-btn">Review</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
