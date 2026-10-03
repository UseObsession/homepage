/* The prices app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/prices.css, loaded by the page, never imported here. Converted
   from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function PricesScreen() {
  return (
    <div className="il appx-il app-prices"><div className="appx-fit"><div className="appx" role="img" aria-label="Price watch for Your company: 6 products priced against Rival A, B and C, read daily at 06:00 from public pages and email lists by a declared Obsession agent. The check visits each rival, Rival B cuts 3 prices and its soy candle drops from £24 to £19 with free delivery, £5 under yours 4 days before Black Friday, so that row needs you, the before and after screenshots land with the new price outlined, and an alert goes to #pricing.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Rivals<span>/</span>Prices</span>
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
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="pr-stk pr-nb"><span>2</span><span>3</span></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Lists</p>
            <a role="none"><i />Prospects</a><a role="none"><i />Customers</a><a role="none"><i />Rivals</a><a role="none"><i />Suppliers</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          <header className="pr-h ax-fade">
            <h2>Prices</h2>
            <span className="pr-meta"><span className="pr-time">Daily 06:00</span> · public pages and email lists</span>
            <span className="pr-id"><span className="pr-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          <section className="pr-tb ax-fade" style={{ '--d': '.08s' }}>
            <i className="pr-band" style={{ '--pr-x': '208px', '--pr-t': '.65s', '--pr-l': '.9s' }} aria-hidden="true" /><i className="pr-band" style={{ '--pr-x': '280px', '--pr-t': '1.4s', '--pr-l': '1s' }} aria-hidden="true" /><i className="pr-band" style={{ '--pr-x': '352px', '--pr-t': '2.25s', '--pr-l': '.85s' }} aria-hidden="true" />
            <div className="pr-r pr-th"><span className="pr-p">Product</span><span className="pr-y">You</span><span>Rival A</span><span>Rival B</span><span>Rival C</span><span className="pr-c">14 days</span></div>
            <div className="pr-r pr-hot" style={{ '--pr-i': '0' }}><span className="pr-p"><span className="pr-mk"><svg className="sig st-needs moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><b>Soy candle 200g</b></span><span className="pr-y">£24</span><span>£26</span><span><span className="pr-stk pr-flip"><span className="pr-v0">£24</span><span className="pr-v1 pr-cut"><s>£24</s><b>£19</b></span></span></span><span>£25</span><span className="pr-c"><svg className="pr-sp pr-hot" viewBox="0 0 56 18" aria-hidden="true"><path className="pr-ln" d="M2 4 H6 V4 H10 V4 H14 V5.67 H18 V5.67 H22 V5.67 H26 V5.67 H30 V4 H34 V4 H38 V5.67 H42 V5.67 H46 V5.67 H50 V5.67" /><path className="pr-ex" d="M50 5.67 H54 V14" pathLength="1" /><circle className="pr-d0" cx="50" cy="5.67" r="1.6" /><circle className="pr-d1" cx="54" cy="14" r="2" /></svg><em>−£5</em></span></div>
            <div className="pr-r" style={{ '--pr-i': '1' }}><span className="pr-p"><b>Reed diffuser</b></span><span className="pr-y">£28</span><span>£32</span><span><span className="pr-stk pr-flip"><span className="pr-v0">£30</span><span className="pr-v1 pr-cut"><s>£30</s><b>£28</b></span></span></span><span>£31</span><span className="pr-c"><svg className="pr-sp pr-hot" viewBox="0 0 56 18" aria-hidden="true"><path className="pr-ln" d="M2 4 H6 V4 H10 V4 H14 V4 H18 V7.33 H22 V7.33 H26 V7.33 H30 V7.33 H34 V7.33 H38 V4 H42 V7.33 H46 V7.33 H50 V7.33" /><path className="pr-ex" d="M50 7.33 H54 V14" pathLength="1" /><circle className="pr-d0" cx="50" cy="7.33" r="1.6" /><circle className="pr-d1" cx="54" cy="14" r="2" /></svg><em>−£2</em></span></div>
            <div className="pr-r" style={{ '--pr-i': '2' }}><span className="pr-p"><b>Wax melts ×6</b></span><span className="pr-y">£9</span><span>£11</span><span><span className="pr-stk pr-flip"><span className="pr-v0">£10</span><span className="pr-v1 pr-cut"><s>£10</s><b>£9</b></span></span></span><span>£12</span><span className="pr-c"><svg className="pr-sp pr-hot" viewBox="0 0 56 18" aria-hidden="true"><path className="pr-ln" d="M2 9 H6 V9 H10 V4 H14 V4 H18 V9 H22 V9 H26 V9 H30 V9 H34 V9 H38 V9 H42 V9 H46 V9 H50 V9" /><path className="pr-ex" d="M50 9 H54 V14" pathLength="1" /><circle className="pr-d0" cx="50" cy="9" r="1.6" /><circle className="pr-d1" cx="54" cy="14" r="2" /></svg><em>−£1</em></span></div>
            <div className="pr-r" style={{ '--pr-i': '3' }}><span className="pr-p"><b>Gift set</b></span><span className="pr-y">£58</span><span>£62</span><span>£60</span><span>£64</span><span className="pr-c"><svg className="pr-sp" viewBox="0 0 56 18" aria-hidden="true"><path className="pr-ln" d="M2 6.5 H6 V6.5 H10 V6.5 H14 V6.5 H18 V10.5 H22 V10.5 H26 V10.5 H30 V10.5 H34 V10.5 H38 V10.5 H42 V10.5 H46 V10.5 H50 V10.5" /><path className="pr-ex" d="M50 10.5 H54 V10.5" pathLength="1" /><circle className="pr-d0" cx="50" cy="10.5" r="1.6" /><circle className="pr-d1" cx="54" cy="10.5" r="2" /></svg><em /></span></div>
            <div className="pr-r" style={{ '--pr-i': '4' }}><span className="pr-p"><b>Travel tin 80g</b></span><span className="pr-y">£12</span><span>£13</span><span>£14</span><span>£12</span><span className="pr-c"><svg className="pr-sp" viewBox="0 0 56 18" aria-hidden="true"><path className="pr-ln" d="M2 6.5 H6 V6.5 H10 V6.5 H14 V10.5 H18 V10.5 H22 V10.5 H26 V10.5 H30 V10.5 H34 V6.5 H38 V6.5 H42 V10.5 H46 V10.5 H50 V10.5" /><path className="pr-ex" d="M50 10.5 H54 V10.5" pathLength="1" /><circle className="pr-d0" cx="50" cy="10.5" r="1.6" /><circle className="pr-d1" cx="54" cy="10.5" r="2" /></svg><em /></span></div>
            <div className="pr-r pr-last" style={{ '--pr-i': '5' }}><span className="pr-p"><b>Wick trimmer</b></span><span className="pr-y">£14</span><span>£15</span><span>£16</span><span>£14</span><span className="pr-c"><svg className="pr-sp" viewBox="0 0 56 18" aria-hidden="true"><path className="pr-ln" d="M2 10.5 H6 V10.5 H10 V10.5 H14 V10.5 H18 V10.5 H22 V6.5 H26 V6.5 H30 V10.5 H34 V10.5 H38 V10.5 H42 V10.5 H46 V10.5 H50 V10.5" /><path className="pr-ex" d="M50 10.5 H54 V10.5" pathLength="1" /><circle className="pr-d0" cx="50" cy="10.5" r="1.6" /><circle className="pr-d1" cx="54" cy="10.5" r="2" /></svg><em /></span></div>
            <div className="pr-code">
              <svg className="pr-ic pr-tag" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M2.75 8.5V3.25a.5.5 0 0 1 .5-.5H8.5l4.75 4.75-5.75 5.75Z" /><circle cx="5.6" cy="5.6" r="1" /></svg>
              <span className="ax-chip dash">CYBER25</span>
              <span className="pr-who"><b>Rival A</b> · Cyber Monday 2025 · <span className="ax-mono">ended 19:00</span></span>
              <span className="pr-rl">From its email</span>
            </div>
          </section>
          <section className="pr-find ax-card">
            <div className="pr-txt">
              <p className="ax-k">Rival B · Soy candle 200g</p>
              <h3>£5 cheaper, ships free</h3>
              <p className="pr-when">4 days before Black Friday</p>
            </div>
            <div className="pr-caps">
              <figure className="pr-cap pr-c1">
                <div className="ax-shot"><div className="pr-pg"><i className="pr-img" /><span className="pr-inf"><i className="pr-tl" /><b>£24</b><span className="pr-sh"><svg className="pr-tk" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true"><path d="M1.75 4h7.5v7h-7.5ZM9.25 6.5h2.75l2.25 2.5v2h-5Z" /><circle cx="4.5" cy="12" r="1.4" fill="currentColor" stroke="none" /><circle cx="11.75" cy="12" r="1.4" fill="currentColor" stroke="none" /></svg>£3.95<i className="pr-cta" /></span></span></div></div>
                <figcaption>Sun 06:02</figcaption>
              </figure>
              <figure className="pr-cap pr-c2">
                <div className="ax-shot"><div className="pr-pg"><i className="pr-img" /><span className="pr-inf"><i className="pr-tl" /><b><span className="pr-ring">£19</span></b><span className="pr-sh"><svg className="pr-tk" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true"><path d="M1.75 4h7.5v7h-7.5ZM9.25 6.5h2.75l2.25 2.5v2h-5Z" /><circle cx="4.5" cy="12" r="1.4" fill="currentColor" stroke="none" /><circle cx="11.75" cy="12" r="1.4" fill="currentColor" stroke="none" /></svg>Free<i className="pr-cta" /></span></span></div></div>
                <figcaption>Mon 06:04</figcaption>
              </figure>
            </div>
          </section>
          <div className="ax-toast pr-toast"><svg className="sig st-needs" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Rival B cut 3 prices</b><span>Alert sent to #pricing</span></p><span className="ax-btn">Review</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
