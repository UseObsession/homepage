/* The vendor app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/vendor.css, loaded by the page, never imported here. Converted
   from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function VendorScreen() {
  return (
    <div className="il appx-il app-vendor"><div className="appx-fit"><div className="appx" role="img" aria-label="Onboarding for a new customer, Veymoor Health, signed 18 Sep on Net 30: a declared Obsession agent registers your company in their supplier portal, your finance team enters the bank details, JO signs the W-9, and the agent files the 82 question security questionnaire from your approved library on day 3. The buyer reviews it, the PO arrives and the invoice is accepted on day 12, against an average of 41 days, with the first payment due 30 Oct.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Accounts<span>/</span>Onboarding</span>
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
            <a role="none"><i />Prospects</a><a className="on" role="none"><i />Customers</a><a role="none"><i />Rivals</a><a role="none"><i />Suppliers</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          {/* the new customer, and who works on it */}
          <header className="vd-h ax-fade">
            <h2>Onboarding</h2><span className="vd-meta">Veymoor Health · Net 30</span>
            <span className="vd-id"><span className="vd-ag"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          {/* the procurement checklist, left to right */}
          <section className="ax-card vd-steps ax-in" style={{ '--d': '.06s' }}>
            <ol>
              <li className="vd-n" style={{ '--c': '.7s', '--t': '.7s' }}>
                <time>18 Sep</time>
                <span className="vd-mk"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b>Portal</b><span className="vd-sub">As AI agent</span>
              </li>
              <li className="vd-n" style={{ '--c': '1.05s', '--t': '1.05s' }}>
                <time>21 Sep</time>
                <span className="vd-mk"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b>Bank details</b><span className="vd-sub">Finance only</span>
              </li>
              <li className="vd-n" style={{ '--c': '1.4s', '--t': '1.4s' }}>
                <time>21 Sep</time>
                <span className="vd-mk"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b>W-9</b><span className="vd-sub">Signed by JO</span>
              </li>
              <li className="vd-n vd-sec" style={{ '--c': '1.75s', '--t': '3.6s' }}>
                <time>25 Sep</time>
                <span className="vd-mk"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b>Security</b><span className="vd-sub vd-stk"><span>Their review</span><span>Approved</span></span>
              </li>
              <li className="vd-n" style={{ '--c': '4.05s', '--t': '4.05s' }}>
                <time>29 Sep</time>
                <span className="vd-mk"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b>PO received</b><span className="vd-sub ax-mono">PO-77310</span>
              </li>
              <li className="vd-n vd-last" style={{ '--c': '4.5s', '--t': '4.5s' }}>
                <time>30 Sep</time>
                <span className="vd-mk"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b>Invoice</b><span className="vd-sub">Accepted</span>
              </li>
            </ol>
          </section>
          <div className="vd-low">
            {/* the slowest form on the seller's side, answered from what you already approved */}
            <section className="ax-card vd-q ax-in" style={{ '--d': '.12s' }}>
              <header className="vd-qh">
                <svg className="vd-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M8 1.9 13 3.75v4c0 3.05-2.1 5.2-5 6.35-2.9-1.15-5-3.3-5-6.35v-4Z" /><path d="m5.9 7.9 1.5 1.5 2.8-2.9" strokeLinecap="round" /></svg>
                <b>Security questionnaire</b>
                <span className="vd-fd">Filed <span className="ax-mono">21 Sep</span></span>
              </header>
              <div className="vd-prog"><span className="vd-bar" aria-hidden="true"><i /></span><span className="vd-qn"><span className="vd-cnt" />/82</span></div>
              <ul className="vd-qa">
                <li style={{ '--q': '1.85s' }}><span className="id">Q4</span><span className="qq">Data encrypted at rest?</span><span className="aa">Yes, AES-256</span></li>
                <li style={{ '--q': '2.18s' }}><span className="id">Q31</span><span className="qq">SSO with SAML?</span><span className="aa">Yes</span></li>
                <li style={{ '--q': '2.51s' }}><span className="id">Q58</span><span className="qq">Pen test in the last 12 months?</span><span className="aa">Yes, Mar 2026</span></li>
              </ul>
              <p className="vd-qf">79 from your approved library · 3 OK'd by AM</p>
            </section>
            {/* the number that moved */}
            <section className="ax-card vd-r ax-in" style={{ '--d': '.18s' }}>
              <p className="vd-rk">Days to invoice accepted</p>
              <p className="vd-big"><span className="was">41</span><span className="ar">→</span><span className="now vd-day" /></p>
              <div className="vd-cmp">
                <p className="vd-cl"><span>Your last 5 deals</span></p>
                <span className="vd-tr" aria-hidden="true"><i className="avg" /></span>
                <p className="vd-cl"><span>Veymoor Health</span></p>
                <span className="vd-tr" aria-hidden="true"><i className="this" /></span>
              </div>
            </section>
          </div>
          {/* after acceptance, the agent keeps watching until the money lands */}
          <p className="vd-next"><svg className="sig st-waiting moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>Checks daily<span className="ax-mono">08:00</span>until paid</p>
          <div className="ax-toast vd-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Invoice accepted</b><span>Due 30 Oct</span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
