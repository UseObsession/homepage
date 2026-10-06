import { PartnerWord } from '../components/PartnerMark'

/* The shop app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to its
   root to run the story. Its look and story: css/shop.css, loaded by the page, never imported here. Converted from
   its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function ShopScreen() {
  return (
    <div className="il appx-il app-shop"><div className="appx-fit"><div className="appx" role="img" aria-label="A mystery shopper mission, run with each owner’s OK: 3 declared AI test customers walk a payroll free trial at Paywren, a first order at hollin and a booking enquiry at Molenna Dental over 3 days. At 09:15 on Day 1, hollin’s welcome code SOFTER10 is rejected at checkout, and the shopper stops before payment. Retested after 48 hours, it still fails on Day 3: the finding that needs you. Paywren’s bot won’t give a price, and the shopper stops when a rep emails; Molenna’s first reply comes after 4h 47m. The report is posted in Slack. 10% welcome code rejected at checkout, 09:15. Still failing on Day 3, for every subscriber.">
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
            <h2>Mystery shopper</h2><span className="ms-meta">3 businesses · 3 AI test customers</span>
            <span className="ms-id"><span className="ms-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession AI agent</span>
          </header>
          <section className="ms-bd ax-fade" style={{ '--d': '.08s' }}>
            {/* the shared day ruler; its foot fills as the 3 days pass */}
            <div className="ms-ru"><b style={{ '--ms-x': '12px' }}>Day 1</b><b style={{ '--ms-x': '180px' }}>Day 2</b><b style={{ '--ms-x': '348px' }}>Day 3</b><i className="ms-fill" aria-hidden="true" /></div>
            <i className="ms-band" aria-hidden="true" />
            {/* 1. Paywren (paywren.example), payroll software: a free trial signed up as AI; the price asked of the bot only; the
                shopper stops, without a reply, when a rep emails */}
            <div className="ms-ln ms-l1">
              <div className="ms-lh">
                <span className="ms-mk"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <i className="ms-fav fv-pw" aria-hidden="true">P</i><b>Paywren</b><em>Payroll · free trial</em>
                <span className="ms-fd" style={{ '--ms-t': '4.56s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.75 13.5V2.75M3.75 3h7.5l-1.5 2.75 1.5 2.75h-7.5" /></svg>Bot won’t give a price</span>
              </div>{' '}
              <i className="ms-pth" style={{ '--ms-a': '34px', '--ms-w': '322px', '--ms-t': '.81s', '--ms-u': '3.58s' }} />{' '}
              <span className="ax-shot ms-c" style={{ '--ms-x': '12px', '--ms-t': '.57s' }}><span className="ms-pg ms-sign"><i className="ms-fl" /><i className="ms-bt" /></span></span>{' '}
              <span className="ax-shot ms-c" style={{ '--ms-x': '98px', '--ms-t': '1.52s' }}><span className="ms-pg ms-mail"><span className="ms-fr"><i className="ms-sq" /><i className="ms-m1" /></span><i className="ms-m2" /><i className="ms-m3" /></span></span>{' '}
              <span className="ax-shot ms-c" style={{ '--ms-x': '180px', '--ms-t': '2.43s' }}><span className="ms-pg ms-mail"><span className="ms-fr"><i className="ms-sq" /><i className="ms-m1" /></span><i className="ms-m3" /><i className="ms-m2" /></span></span>{' '}
              <span className="ax-shot ms-c ms-wide" style={{ '--ms-x': '232px', '--ms-t': '3.01s' }}><span className="ms-pg ms-chat"><i className="ms-q" /><b className="ms-a">Ask sales</b></span></span>{' '}
              <span className="ax-shot ms-c" style={{ '--ms-x': '300px', '--ms-t': '3.76s' }}><span className="ms-pg ms-mail"><span className="ms-fr"><i className="ms-av2" /><i className="ms-m1" /></span><i className="ms-m2" /><i className="ms-m3" /></span></span>{' '}
              <i className="ms-end" style={{ '--ms-x': '355px', '--ms-t': '4.36s' }} />{' '}
              <span className="ms-cap" style={{ '--ms-x': '12px', '--ms-t': '.64s' }}>Signed up as AI</span>{' '}
              <span className="ms-cap" style={{ '--ms-x': '98px', '--ms-t': '1.61s' }}>Welcome</span>{' '}
              <span className="ms-cap" style={{ '--ms-x': '180px', '--ms-t': '2.52s' }}>Setup</span>{' '}
              <span className="ms-cap" style={{ '--ms-x': '232px', '--ms-t': '3.09s' }}>Asked price</span>{' '}
              <span className="ms-cap" style={{ '--ms-x': '300px', '--ms-t': '3.85s' }}>Rep emailed</span>{' '}
              <span className="ms-sp ms-row" style={{ '--ms-x': '366px', '--ms-t': '4.42s' }}><span className="ax-tick" />Stopped when a rep wrote</span>
            </div>
            {/* 2. hollin (hollin.example), the linen store: its welcome email's 10% code, rejected at checkout at 09:15 on Day 1;
                the shopper stops before payment, tests again on Day 3, and it still fails: the finding that needs you */}
            <div className="ms-ln ms-l2">
              {' '}<div className="ms-lh">
                <span className="ms-mk"><svg className="sig st-waiting w0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-needs moving w1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <i className="ms-fav fv-hl" aria-hidden="true">h</i><b>hollin</b><em>Store · first order</em>
                <span className="ms-fd ms-hot" style={{ '--ms-t': '5.82s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.75 13.5V2.75M3.75 3h7.5l-1.5 2.75 1.5 2.75h-7.5" /></svg>Welcome code fails at checkout</span>
              </div>{' '}
              <i className="ms-pth" style={{ '--ms-a': '34px', '--ms-w': '80px', '--ms-t': '.81s', '--ms-u': '.88s' }} />{' '}
              <span className="ax-shot ms-c ms-d1" style={{ '--ms-x': '12px', '--ms-t': '.57s' }}><span className="ms-pg ms-wel"><img className="ms-ph" src="/illus/gap/hollin-email-240.webp" width="44" height="10" alt="" decoding="async" loading="lazy" /><i className="ms-hd" /><b>10%</b></span></span>{' '}
              <span className="ax-shot ms-c ms-d1" style={{ '--ms-x': '64px', '--ms-t': '1.14s' }}><span className="ms-pg ms-co"><img className="ms-th" src="/illus/gap/hollin-pillowcases-120.webp" width="11" height="11" alt="" decoding="async" loading="lazy" /><i className="ms-pr" /><span className="ms-cf"><i /><b>×</b></span></span></span>{' '}
              <i className="ms-stop" style={{ '--ms-x': '114px', '--ms-t': '1.7s' }} />{' '}
              <i className="ms-wt" style={{ '--ms-a': '118px', '--ms-w': '336px', '--ms-t': '1.76s', '--ms-u': '3.74s' }} />{' '}
              <span className="ms-wl" style={{ '--ms-a': '118px', '--ms-w': '336px', '--ms-t': '2.88s' }}>Retest after 48h</span>{' '}
              <span className="ax-shot ms-c ms-d3" style={{ '--ms-x': '458px', '--ms-t': '5.54s' }}><span className="ms-pg ms-co"><img className="ms-th" src="/illus/gap/hollin-pillowcases-120.webp" width="11" height="11" alt="" decoding="async" loading="lazy" /><i className="ms-pr" /><span className="ms-cf"><i /><b>×</b></span></span></span>{' '}
              <span className="ms-sp" style={{ '--ms-x': '12px', '--ms-t': '1.73s' }}><span className="ax-tick" />Stopped before payment</span>{' '}
              <span className="ms-cap ms-rj" style={{ '--ms-t': '5.62s' }}>Rejected again</span>
            </div>
            {/* 3. Molenna Dental (molenna.example): the web booking enquiry, its first reply timed; ended on Day 1. Its finding
                sits on the caption row by the reply it times, leaving the lane's header clear under hollin (the camera's
                last note stands there on Home) */}
            <div className="ms-ln ms-l3">
              <div className="ms-lh">
                <span className="ms-mk"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <i className="ms-fav fv-md" aria-hidden="true">M</i><b>Molenna Dental</b><em>Booking enquiry</em>
              </div>{' '}
              <span className="ax-shot ms-c" style={{ '--ms-x': '12px', '--ms-t': '.57s' }}><span className="ms-pg ms-form"><i className="ms-fl" /><i className="ms-ta" /><i className="ms-bt" /></span></span>{' '}
              <i className="ms-wt" style={{ '--ms-a': '60px', '--ms-w': '34px', '--ms-t': '1.1s', '--ms-u': '.34s' }} />{' '}
              <span className="ax-shot ms-c" style={{ '--ms-x': '98px', '--ms-t': '1.48s' }}><span className="ms-pg ms-mail"><span className="ms-fr"><i className="ms-av2" /><i className="ms-m1" /></span><i className="ms-m2" /><i className="ms-m3" /></span></span>{' '}
              <i className="ms-pth" style={{ '--ms-a': '142px', '--ms-w': '12px', '--ms-t': '1.97s', '--ms-u': '.14s' }} />{' '}
              <i className="ms-end" style={{ '--ms-x': '153px', '--ms-t': '2.04s' }} />{' '}
              <span className="ms-done" style={{ '--ms-x': '165px', '--ms-t': '2.1s' }}>Ended Day 1</span>{' '}
              <span className="ms-cap" style={{ '--ms-x': '12px', '--ms-t': '.64s' }}>Sent 10:40</span>{' '}
              <span className="ms-cap" style={{ '--ms-x': '98px', '--ms-t': '1.55s' }}>Reply 15:27</span>{' '}
              <span className="ms-fd ms-fc" style={{ '--ms-x': '164px', '--ms-t': '2.07s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.75 13.5V2.75M3.75 3h7.5l-1.5 2.75 1.5 2.75h-7.5" /></svg>First reply after 4h 47m</span>
            </div>
          </section>
          <p className="ms-note ax-fade" style={{ '--d': '.16s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Each owner’s OK · nothing bought</p>
          <div className="ax-toast ms-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>3 journeys walked</b><span>Posted in <PartnerWord id="slack" /></span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
