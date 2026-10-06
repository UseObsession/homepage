/* The suppliers app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play
   to its root to run the story. Its look and story: css/suppliers.css, loaded by the page, never imported here.
   Converted from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function SuppliersScreen() {
  return (
    <div className="il appx-il app-suppliers"><div className="appx-fit"><div className="appx" role="img" aria-label="A founder's Spend page, run by a declared Obsession agent: the packaging supplier is raising prices 18% from 1 Nov, so the agent asked 16 suppliers for quotes as your declared AI buyer, buying nothing. The quotes land and sort by price, the best 3 are cited in a drafted push back, you click Send, and the supplier replies in writing, cutting the rise to 6%: $424 per 1,000 boxes instead of $472; beside it, 6 unused software plans worth $1,140 a month are being cancelled.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Missions<span>/</span>Spend</span>
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
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="sp-n"><b>2</b><b>3</b></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Lists</p>
            <a role="none"><i />Prospects</a><a role="none"><i />Customers</a><a role="none"><i />Rivals</a><a className="on" role="none"><i />Suppliers</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          <header className="sp-h ax-fade">
            <h2>Spend</h2>
            <span className="sp-id"><span className="sp-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for Your company</span>
          </header>
          {/* the rise */}
          <section className="sp-l">
            <header className="sp-lh ax-in" style={{ '--d': '.04s' }}><h3>Packaging</h3><p>Mailer boxes</p></header>
            <div className="sp-rise ax-in" style={{ '--d': '.1s' }}>
              <p className="ax-k">Current supplier</p>
              <div className="sp-big"><span className="sp-stk"><span className="o">+18%</span><span className="n">+6%</span></span><s className="sp-was">+18%</s></div>
              <p className="sp-from">from 1 Nov</p>
            </div>
            <figure className="sp-ev ax-in" style={{ '--d': '.16s' }}>
              <div className="ax-shot sp-note"><div className="sp-pg">
                <i className="lg" /><i className="l1" />
                <p className="hl">+18% from 1 Nov</p>
                <i className="l3" /><i className="l4" />
              </div></div>
              <figcaption>Notice · 28 Sep</figcaption>
            </figure>
            <dl className="sp-kv ax-in" style={{ '--d': '.2s' }}>
              <div><dt>Per 1,000</dt><dd><span className="sp-stk"><span>$400 → $472</span><span>$400 → $424</span></span></dd></div>
              <div><dt>A year</dt><dd>120,000 boxes</dd></div>
            </dl>
            <div className="sp-save"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>16 quotes</b><span>in 5 days</span></p></div>
          </section>
          {/* the quotes */}
          <section className="sp-c">
            <div className="sp-th ax-fade" style={{ '--d': '.06s' }}><h3 className="sp-ch"><span className="sp-cnt" /> quotes</h3><span className="pr">Per 1,000</span><span className="dd">Days</span></div>
            <div className="sp-list">
              <div className="sp-q best b1" style={{ '--dy': '105px', '--dz': '0px', '--a': '1.05s', '--s': '0.272' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">1</span><span className="nm">Supplier A</span><span className="br"><i /></span><span className="pr">$409</span><span className="dd">6</span></div></div></div>
              <div className="sp-q best b2" style={{ '--dy': '180px', '--dz': '0px', '--a': '1.65s', '--s': '0.311' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">2</span><span className="nm">Supplier B</span><span className="br"><i /></span><span className="pr">$416</span><span className="dd">4</span></div></div></div>
              <div className="sp-q best b3" style={{ '--dy': '15px', '--dz': '0px', '--a': '0.65s', '--s': '0.339' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">3</span><span className="nm">Supplier C</span><span className="br"><i /></span><span className="pr">$421</span><span className="dd">5</span></div></div></div>
              <div className="sp-q cur" style={{ '--dy': '-165px', '--dz': '120px', '--a': '0.3s', '--s': '0.356', '--s0': '0.622' }}><div className="sp-qm"><div className="sp-qc"><span className="rk" /><span className="nm">Current</span><span className="br"><i /></span><span className="pr sp-stk"><span>$472</span><span>$424</span></span><span className="dd">5</span></div></div></div>
              <div className="sp-q" style={{ '--dy': '120px', '--dz': '-15px', '--a': '1.45s', '--s': '0.378' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">4</span><span className="nm">Supplier D</span><span className="br"><i /></span><span className="pr">$428</span><span className="dd">7</span></div></div></div>
              <div className="sp-q" style={{ '--dy': '30px', '--dz': '-15px', '--a': '0.95s', '--s': '0.406' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">5</span><span className="nm">Supplier E</span><span className="br"><i /></span><span className="pr">$433</span><span className="dd">5</span></div></div></div>
              <div className="sp-q" style={{ '--dy': '150px', '--dz': '-15px', '--a': '1.85s', '--s': '0.439' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">6</span><span className="nm">Supplier F</span><span className="br"><i /></span><span className="pr">$439</span><span className="dd">8</span></div></div></div>
              <div className="sp-q" style={{ '--dy': '45px', '--dz': '-15px', '--a': '1.25s', '--s': '0.478' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">7</span><span className="nm">Supplier G</span><span className="br"><i /></span><span className="pr">$446</span><span className="dd">6</span></div></div></div>
              <div className="sp-q" style={{ '--dy': '-90px', '--dz': '-15px', '--a': '0.45s', '--s': '0.511' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">8</span><span className="nm">Supplier H</span><span className="br"><i /></span><span className="pr">$452</span><span className="dd">4</span></div></div></div>
              <div className="sp-q" style={{ '--dy': '120px', '--dz': '-15px', '--a': '1.95s', '--s': '0.544' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">9</span><span className="nm">Supplier I</span><span className="br"><i /></span><span className="pr">$458</span><span className="dd">9</span></div></div></div>
              <div className="sp-q" style={{ '--dy': '-75px', '--dz': '-15px', '--a': '0.75s', '--s': '0.572' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">10</span><span className="nm">Supplier J</span><span className="br"><i /></span><span className="pr">$463</span><span className="dd">7</span></div></div></div>
              <div className="sp-q" style={{ '--dy': '30px', '--dz': '-15px', '--a': '1.55s', '--s': '0.606' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">11</span><span className="nm">Supplier K</span><span className="br"><i /></span><span className="pr">$469</span><span className="dd">6</span></div></div></div>
              <div className="sp-q" style={{ '--dy': '-60px', '--dz': '0px', '--a': '1.15s', '--s': '0.656' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">12</span><span className="nm">Supplier L</span><span className="br"><i /></span><span className="pr">$478</span><span className="dd">10</span></div></div></div>
              <div className="sp-q" style={{ '--dy': '-165px', '--dz': '0px', '--a': '0.55s', '--s': '0.7' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">13</span><span className="nm">Supplier M</span><span className="br"><i /></span><span className="pr">$486</span><span className="dd">6</span></div></div></div>
              <div className="sp-q" style={{ '--dy': '0px', '--dz': '0px', '--a': '1.75s', '--s': '0.744' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">14</span><span className="nm">Supplier N</span><span className="br"><i /></span><span className="pr">$494</span><span className="dd">12</span></div></div></div>
              <div className="sp-q" style={{ '--dy': '-150px', '--dz': '0px', '--a': '0.85s', '--s': '0.817' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">15</span><span className="nm">Supplier O</span><span className="br"><i /></span><span className="pr">$507</span><span className="dd">8</span></div></div></div>
              <div className="sp-q" style={{ '--dy': '-90px', '--dz': '0px', '--a': '1.35s', '--s': '0.894' }}><div className="sp-qm"><div className="sp-qc"><span className="rk">16</span><span className="nm">Supplier P</span><span className="br"><i /></span><span className="pr">$521</span><span className="dd">14</span></div></div></div>
            </div>
          </section>
          {/* the push-back and the plans */}
          <section className="sp-r">
            <div className="sp-sk" aria-hidden="true"><div className="sp-pbh"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Push back</b><span>· drafting</span></div></div>
            <div className="ax-card sp-pb ax-slide" style={{ '--d': '3.2s' }}>
              <div className="sp-pbh"><svg className="sp-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"><rect x="2.25" y="3.5" width="11.5" height="9" rx="1.5" /><path d="m2.75 4.5 5.25 4 5.25-4" /></svg><b>Push back</b><span>· drafted</span></div>
              <dl className="sp-hd">
                <dt>To</dt><dd>Current supplier</dd>
                <dt>Subject</dt><dd className="sj">Your 1 Nov price rise</dd>
              </dl>
              <p className="sp-bd">3 quotes beat your new price. Can you review the rise?</p>
              <div className="sp-cite"><span className="ax-chip c1"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.25h5.25L12 5v8.75H4Z" /><path d="M9 2.5V5.25h2.75" /></svg>$409</span><span className="ax-chip c2"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.25h5.25L12 5v8.75H4Z" /><path d="M9 2.5V5.25h2.75" /></svg>$416</span><span className="ax-chip c3"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.25h5.25L12 5v8.75H4Z" /><path d="M9 2.5V5.25h2.75" /></svg>$421</span></div>
              <div className="sp-act">
                <span className="ax-btn ghost sp-edit">Edit</span>{' '}
                <i className="sp-bg" />{' '}
                <span className="sp-s sp-s1"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h9.5M8.5 4l4 4-4 4" /></svg>Send</span>{' '}
                <span className="sp-s sp-s2"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>Sent</b> · Mon 09:14</span></span>{' '}
                <svg className="ax-ptr sp-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.1 4.6 2-.9-2.1-4.5h4.3Z" /></svg>
              </div>
            </div>
            <div className="ax-card sp-pl ax-in" style={{ '--d': '.22s' }}>
              <div className="sp-plh"><b>6 unused plans</b><span><em>$1,140</em> a month</span></div>
              <div className="sp-seg" aria-hidden="true"><i /><i /><i /><i /><i className="w" /><i className="w" /></div>
              <div className="sp-pls">
                <span className="ax-st"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>4 cancelled</span>
                <span className="ax-st"><svg className="sig st-waiting moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>2 chasing</span>
              </div>
            </div>
          </section>
          <p className="sp-lock ax-fade" style={{ '--d': '.3s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Nothing bought</p>
          <div className="ax-toast sp-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Supplier replied</b><span>Rise cut to 6%</span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
