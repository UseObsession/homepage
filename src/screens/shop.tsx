/* The shop app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to its
   root to run the story. Its look and story: css/shop.css, loaded by the page, never imported here. Converted from
   its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function ShopScreen() {
  return (
    <div className="il appx-il app-shop"><div className="appx-fit"><div className="appx" role="img" aria-label="A mystery shopper mission, run with each owner’s OK: 6 declared test customers walk a payroll SaaS free trial, 2 baskets at a homeware store and a dental group booking side by side over 3 days. Steps land as the days pass, the store stops before payment and its basket inboxes get 0 emails in 48 hours, the finding that needs you; the bot can’t answer pricing, the trial closes when a rep writes, the dental reply is slow, and the report is ready.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Missions<span>/</span>Mystery shopper</span>
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
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="ms-nb"><b>2</b><b>3</b></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Lists</p>
            <a role="none"><i />Prospects</a><a role="none"><i />Customers</a><a role="none"><i />Rivals</a><a role="none"><i />Suppliers</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          <header className="ms-h ax-fade">
            <h2>Mystery shopper</h2><span className="ms-meta">3 journeys · 6 test customers</span>
            <span className="ms-id"><span className="ms-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          <section className="ms-bd ax-fade" style={{ '--d': '.08s' }}>
            {/* the shared day ruler; its foot fills as the 3 days pass */}
            <div className="ms-ru"><b style={{ '--ms-x': '12px' }}>Day 1</b><b style={{ '--ms-x': '180px' }}>Day 2</b><b style={{ '--ms-x': '348px' }}>Day 3</b><i className="ms-fill" aria-hidden="true" /></div>
            <i className="ms-band" aria-hidden="true" />
            {/* 1. Payroll SaaS: a free trial signed up as AI; pricing asked of the bot only; closed without a reply when a rep wrote */}
            <div className="ms-ln ms-l1">
              <div className="ms-lh">
                <span className="ms-mk"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b>Payroll SaaS</b><em>Free trial</em>
                <span className="ms-fd" style={{ '--ms-t': '3.4s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.75 13.5V2.75M3.75 3h7.5l-1.5 2.75 1.5 2.75h-7.5" /></svg>Bot can’t answer pricing</span>
              </div>{' '}
              <i className="ms-pth" style={{ '--ms-a': '34px', '--ms-w': '322px', '--ms-t': '.72s', '--ms-u': '2.56s' }} />{' '}
              <span className="ax-shot ms-c" style={{ '--ms-x': '12px', '--ms-t': '.55s' }}><span className="ms-pg ms-sign"><i className="ms-fl" /><i className="ms-bt" /></span></span>{' '}
              <span className="ax-shot ms-c" style={{ '--ms-x': '98px', '--ms-t': '1.23s' }}><span className="ms-pg ms-mail"><span className="ms-fr"><i className="ms-sq" /><i className="ms-m1" /></span><i className="ms-m2" /><i className="ms-m3" /></span></span>{' '}
              <span className="ax-shot ms-c" style={{ '--ms-x': '180px', '--ms-t': '1.88s' }}><span className="ms-pg ms-mail"><span className="ms-fr"><i className="ms-sq" /><i className="ms-m1" /></span><i className="ms-m3" /><i className="ms-m2" /></span></span>{' '}
              <span className="ax-shot ms-c ms-wide" style={{ '--ms-x': '232px', '--ms-t': '2.29s' }}><span className="ms-pg ms-chat"><i className="ms-q" /><b className="ms-a">Ask sales</b></span></span>{' '}
              <span className="ax-shot ms-c" style={{ '--ms-x': '300px', '--ms-t': '2.83s' }}><span className="ms-pg ms-mail"><span className="ms-fr"><i className="ms-av2" /><i className="ms-m1" /></span><i className="ms-m2" /><i className="ms-m3" /></span></span>{' '}
              <i className="ms-end" style={{ '--ms-x': '355px', '--ms-t': '3.26s' }} />{' '}
              <span className="ms-cap" style={{ '--ms-x': '12px', '--ms-t': '.6s' }}>Signed up as AI</span>{' '}
              <span className="ms-cap" style={{ '--ms-x': '98px', '--ms-t': '1.29s' }}>Email 1</span>{' '}
              <span className="ms-cap" style={{ '--ms-x': '180px', '--ms-t': '1.94s' }}>Email 2</span>{' '}
              <span className="ms-cap" style={{ '--ms-x': '232px', '--ms-t': '2.35s' }}>Pricing?</span>{' '}
              <span className="ms-cap" style={{ '--ms-x': '300px', '--ms-t': '2.89s' }}>Rep wrote</span>{' '}
              <span className="ms-sp ms-row" style={{ '--ms-x': '366px', '--ms-t': '3.3s' }}><span className="ax-tick" />Closed when a rep wrote</span>
            </div>
            {/* 2. Homeware store: 2 baskets, stopped before payment, 4 inboxes watched 48 hours: the finding that needs you */}
            <div className="ms-ln ms-l2">
              {' '}<div className="ms-lh">
                <span className="ms-mk"><svg className="sig st-waiting w0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-needs moving w1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b>Homeware store</b><em>2 baskets · £34, £22</em>
                <span className="ms-fd ms-hot" style={{ '--ms-t': '4.3s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.75 13.5V2.75M3.75 3h7.5l-1.5 2.75 1.5 2.75h-7.5" /></svg>0 basket emails in 48 hours</span>
              </div>{' '}
              <i className="ms-pth" style={{ '--ms-a': '34px', '--ms-w': '80px', '--ms-t': '.72s', '--ms-u': '.63s' }} />{' '}
              <span className="ax-shot ms-c" style={{ '--ms-x': '12px', '--ms-t': '.55s' }}><span className="ms-pg ms-bask"><i className="ms-pt" /><span className="ms-ls"><i /><i /></span><i className="ms-bn" /></span></span>{' '}
              <span className="ax-shot ms-c" style={{ '--ms-x': '64px', '--ms-t': '.96s' }}><span className="ms-pg ms-bask"><i className="ms-pt ms-p2" /><span className="ms-ls"><i /><i /></span><i className="ms-bn" /></span></span>{' '}
              <i className="ms-stop" style={{ '--ms-x': '114px', '--ms-t': '1.36s' }} />{' '}
              <i className="ms-wt" style={{ '--ms-a': '118px', '--ms-w': '336px', '--ms-t': '1.4s', '--ms-u': '2.67s' }} />{' '}
              <span className="ms-wl" style={{ '--ms-a': '118px', '--ms-w': '336px', '--ms-t': '2.2s' }}>Watching 4 inboxes</span>{' '}
              <span className="ax-shot ms-c" style={{ '--ms-x': '458px', '--ms-t': '4.1s' }}><span className="ms-pg ms-box"><b>0</b><i /></span></span>{' '}
              <span className="ms-sp" style={{ '--ms-x': '12px', '--ms-t': '1.38s' }}><span className="ax-tick" />Stopped before payment</span>{' '}
              <span className="ms-cap ms-tm" style={{ '--ms-x': '458px', '--ms-t': '4.16s' }}>48 h</span>
            </div>
            {/* 3. Dental group: the web enquiry, its first reply timed; done on Day 1 */}
            <div className="ms-ln ms-l3">
              <div className="ms-lh">
                <span className="ms-mk"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b>Dental group</b><em>Booking</em>
                <span className="ms-fd" style={{ '--ms-t': '1.62s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.75 13.5V2.75M3.75 3h7.5l-1.5 2.75 1.5 2.75h-7.5" /></svg>Slow first reply</span>
              </div>{' '}
              <span className="ax-shot ms-c" style={{ '--ms-x': '12px', '--ms-t': '.55s' }}><span className="ms-pg ms-form"><i className="ms-fl" /><i className="ms-ta" /><i className="ms-bt" /></span></span>{' '}
              <i className="ms-wt" style={{ '--ms-a': '60px', '--ms-w': '30px', '--ms-t': '.93s', '--ms-u': '.24s' }} />{' '}
              <span className="ax-shot ms-c" style={{ '--ms-x': '94px', '--ms-t': '1.2s' }}><span className="ms-pg ms-mail"><span className="ms-fr"><i className="ms-av2" /><i className="ms-m1" /></span><i className="ms-m2" /><i className="ms-m3" /></span></span>{' '}
              <i className="ms-pth" style={{ '--ms-a': '138px', '--ms-w': '12px', '--ms-t': '1.55s', '--ms-u': '.1s' }} />{' '}
              <i className="ms-end" style={{ '--ms-x': '149px', '--ms-t': '1.6s' }} />{' '}
              <span className="ms-done" style={{ '--ms-x': '161px', '--ms-t': '1.64s' }}>Done Day 1</span>{' '}
              <span className="ms-cap" style={{ '--ms-x': '12px', '--ms-t': '.6s' }}>Form sent</span>{' '}
              <span className="ms-cap ms-tm" style={{ '--ms-x': '94px', '--ms-t': '1.25s' }}>4 h 12 m</span>
            </div>
          </section>
          <p className="ms-note ax-fade" style={{ '--d': '.16s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Each owner’s OK · nothing bought</p>
          <div className="ax-toast ms-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>3 journeys walked</b><span>Report ready</span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
