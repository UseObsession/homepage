/* The ads app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to its
   root to run the story. Its look and story: css/ads.css, loaded by the page, never imported here. Converted from
   its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function AdsScreen() {
  return (
    <div className="il appx-il app-ads"><div className="appx-fit"><div className="appx" role="img" aria-label="Rivals’ ads, checked daily from the ads they run in public: 6 ad cards from Rival A, B and C with their channel, first seen date and days running, and Rival C’s search ad marked as running 41 days. 3 new Rival A ads land, the newest opens and its landing page loads: a free gift on orders over £40, and a £56 price on the page that undercuts your £58 gift set by £2. A note says Rival A has 9 new ads.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Rivals<span>/</span>Ads</span>
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
          <header className="ad-h ax-fade">
            <h2>Ads</h2><span className="ad-meta">Rival A, B and C</span><span className="ad-time">Daily 07:00</span>
            <span className="ad-id"><span className="ad-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          <div className="ad-wrap">
            <section className="ad-grid">
              {/* today: 3 new Rival A ads (9 ads across 3 creatives) */}
              <article className="ad-card ad-nw ad-on" style={{ '--d': '1.15s' }}>
                <div className="ax-shot ad-cr"><div className="ad-art ad-soc ad-wa">
                  <i className="ad-gl" /><i className="ad-gb" /><i className="ad-bt" /><i className="ad-bc" /><i className="ad-cta" />{' '}
                  <span className="ad-new">New</span><span className="ad-vr"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><rect x="1.5" y="3.5" width="6" height="7" rx="1" /><path d="M4 1.5h5.5a1 1 0 0 1 1 1V8" /></svg>4</span>
                </div></div>
                <p className="ad-hk">Free gift over £40</p>
                <p className="ad-ch">Rival A · Social ad</p>
                <p className="ad-dt"><span>2 Oct</span><span>1 day</span></p>
              </article>
              <article className="ad-card ad-nw" style={{ '--d': '1.23s' }}>
                <div className="ax-shot ad-cr"><div className="ad-art ad-soc ad-wb">
                  <i className="ad-tis" /><i className="ad-pek" /><i className="ad-ob" /><i className="ad-cta" />{' '}
                  <span className="ad-new">New</span><span className="ad-vr"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><rect x="1.5" y="3.5" width="6" height="7" rx="1" /><path d="M4 1.5h5.5a1 1 0 0 1 1 1V8" /></svg>2</span>
                </div></div>
                <p className="ad-hk">Free gift inside</p>
                <p className="ad-ch">Rival A · Social ad</p>
                <p className="ad-dt"><span>2 Oct</span><span>1 day</span></p>
              </article>
              <article className="ad-card ad-nw" style={{ '--d': '1.31s' }}>
                <div className="ax-shot ad-cr"><div className="ad-art ad-srch">
                  <i className="ad-sp" /><i className="ad-sh1" /><i className="ad-sh2" /><i className="ad-ur" /><i className="ad-sd1" /><i className="ad-sl1" /><i className="ad-sl2" />{' '}
                  <span className="ad-new">New</span><span className="ad-vr"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><rect x="1.5" y="3.5" width="6" height="7" rx="1" /><path d="M4 1.5h5.5a1 1 0 0 1 1 1V8" /></svg>3</span>
                </div></div>
                <p className="ad-hk">Shop bestsellers</p>
                <p className="ad-ch">Rival A · Search ad</p>
                <p className="ad-dt"><span>2 Oct</span><span>1 day</span></p>
              </article>
              {/* already running */}
              <article className="ad-card ad-ol" style={{ '--d': '.10s', '--ad-o': '0s' }}>
                <div className="ax-shot ad-cr"><div className="ad-art ad-soc ad-cb">
                  <i className="ad-pu" /><i className="ad-tb" /><i className="ad-tc" /><i className="ad-cta" />
                </div></div>
                <p className="ad-hk">New travel size</p>
                <p className="ad-ch">Rival B · Social ad</p>
                <p className="ad-dt"><span>26 Sep</span><span>7 days</span></p>
              </article>
              <article className="ad-card ad-ol" style={{ '--d': '.15s', '--ad-o': '.04s' }}>
                <div className="ax-shot ad-cr"><div className="ad-art ad-soc ad-cc">
                  <i className="ad-b1" /><i className="ad-c1" /><i className="ad-b2" /><i className="ad-c2" /><i className="ad-tg" /><i className="ad-cta" />
                </div></div>
                <p className="ad-hk">2 for £30</p>
                <p className="ad-ch">Rival B · Social ad</p>
                <p className="ad-dt"><span>18 Sep</span><span>15 days</span></p>
              </article>
              <article className="ad-card ad-ol ad-lg" style={{ '--d': '.20s', '--ad-o': '.08s' }}>
                <div className="ax-shot ad-cr"><div className="ad-art ad-srch ad-sc">
                  <i className="ad-sp" /><i className="ad-sh1" /><i className="ad-sh2" /><i className="ad-ur" /><i className="ad-sd1" /><i className="ad-sl1" /><i className="ad-sl2" />{' '}
                  <span className="ad-run">Running 41 days</span>
                </div></div>
                <p className="ad-hk">Free UK delivery</p>
                <p className="ad-ch">Rival C · Search ad</p>
                <p className="ad-dt"><span>23 Aug</span><span>41 days</span></p>
              </article>
              <p className="ad-foot ax-fade" style={{ '--d': '.3s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>The ads they run in public · nothing bought</span></p>
            </section>
            <aside className="ad-pan">
              <header className="ad-ph">
                <p className="ad-pk">
                  <svg className="sig st-landed ad-mk" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span>Rival A · Social ad</span>
                  <svg className="ad-x" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="m4.5 4.5 7 7M11.5 4.5l-7 7" /></svg>
                </p>
                <h3>Free gift over £40</h3>
              </header>
              <figure className="ad-lp">
                <div className="ax-shot ad-pg"><div className="ad-art ad-page">
                  <span className="ad-sk" aria-hidden="true"><i className="k-bar" /><i className="k-l1" /><i className="k-l2" /><i className="k-l3" /><i className="k-bn" /><i className="k-tl" /></span>{' '}
                  <i className="ad-pb" /><i className="ad-pl1" /><i className="ad-pl2" /><i className="ad-pl3" /><i className="ad-bn" />{' '}
                  <i className="ad-tl" /><i className="ad-gb" /><i className="ad-gl" /><i className="ad-bt" /><i className="ad-bc" /><b className="ad-px">£56</b>
                </div></div>
                <figcaption><span>/offers/gift</span><span>07:06</span></figcaption>
              </figure>
              <div className="ad-of">
                <p className="ad-o1">Free gift on orders over £40</p>
                <p className="ad-o2">code<span className="ax-chip">GIFT40</span></p>
              </div>
              <div className="ad-fd">
                <p className="ad-f1">Undercuts you by £2</p>
                <p className="ad-fr"><span>Price on page</span><b>£56</b></p>
                <p className="ad-fr"><span>Your gift set</span><b>£58</b></p>
              </div>
            </aside>
          </div>
          <div className="ax-toast ad-toast">
            <svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
            <p><b>9 new ads</b><span>Rival A</span></p><span className="ax-btn">Open</span>
          </div>
          <svg className="ax-ptr ad-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.1 4.6 2-.9-2.1-4.5h4.3Z" /></svg>
        </div>
      </div>
    </div></div></div>
  )
}
