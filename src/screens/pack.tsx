import { wordsFor, type ScreenProps } from '../components/workspace'

/* The pack app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to its
   root to run the story. Its look and story: css/pack.css, loaded by the page, never imported here. Converted from
   its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function PackScreen({ workspace = 'agency' }: ScreenProps) {
  const ws = wordsFor(workspace)
  return (
    <div className="il appx-il app-pack"><div className="appx-fit"><div className="appx" role="img" aria-label="A prospect intelligence mission for 12 prospects from Clay, run by a declared Obsession agent through public sign ups only: rows land 1 by 1 with each prospect’s proven gap; when the Coffee prospect lands, its pitch pack builds 3 findings with captures, and a click on Copy link copies the pack’s link.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>{ws.org}</b><span>/</span>Missions<span>/</span>Prospect intelligence</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>AM</span><span>JO</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>{ws.org}</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5h10M3 8h10M3 11.5h6" /></svg>Missions<em>24</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Recipes</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge">3</span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">{ws.lists}</p>
            <a role="none"><i />Homeware</a><a role="none"><i />Coffee roaster</a><a role="none"><i />Candles</a><a role="none"><i />Outdoor gear</a><a role="none"><i />Dental group</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          <header className="ax-h pk-h ax-in">
            <h2>Prospect intelligence</h2>
            <span className="ax-meta">12 prospects from Clay</span>
            <span className="pk-id"><span className="pk-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for {ws.org}</span>
          </header>
          <div className="pk-cols">
            <section className="pk-list ax-card ax-in" style={{ '--d': '.06s' }}>
              <div className="pk-lh">
                <span className="pk-count"><span className="pk-num"><b className="n7">7</b><b className="n8">8</b><b className="n9">9</b><b className="n10">10</b></span>of 12 gaps proven</span>
                <span className="pk-seg" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i className="s8" /><i className="s9" /><i className="s10" /><i className="ng" /><i className="wk" /></span>
              </div>
              <div className="pk-row pk-r1">
                <svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                <div><p className="pk-nm">Candle prospect</p><p className="pk-gp"><span className="w">Asking the site’s bot</span><span className="g">Bot can’t answer delivery</span></p></div>
              </div>
              <div className="pk-row pk-r2">
                <svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                <div><p className="pk-nm">Pet food prospect</p><p className="pk-gp"><span className="w">Walking subscribe flow</span><span className="g">Subscribe page returns 404</span></p></div>
              </div>
              <div className="pk-row pk-r3 on">
                <svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                <div><p className="pk-nm">Coffee prospect</p><p className="pk-gp"><span className="w">Reading inbox</span><span className="g">Welcome email in spam</span></p></div>
              </div>
              <div className="pk-row">
                <svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                <div><p className="pk-nm">Bike shop prospect</p><p className="pk-gp"><span className="g">Ad 2 lands on a sold out page</span></p></div>
              </div>
              <div className="pk-row dim">
                <svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                <div><p className="pk-nm">Fitness prospect</p><p className="pk-gp"><span className="g">No gap found in 7 days</span></p></div>
              </div>
              <div className="pk-row dim">
                <svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                <div><p className="pk-nm">Jewellery prospect</p><p className="pk-gp"><span className="g">Opting in to texts</span></p></div>
              </div>
            </section>
            <section className="pk-pane ax-in" style={{ '--d': '.12s' }}>
              <div className="pk-bar">
                <span className="ax-btn ghost">PDF</span>
                <span className="ax-btn ghost">Send to Clay</span>
                <span className="ax-btn pk-copy"><span className="pk-cl pk-a"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M6.9 9.1a2.4 2.4 0 0 0 3.4 0l2-2a2.4 2.4 0 0 0-3.4-3.4l-.7.7M9.1 6.9a2.4 2.4 0 0 0-3.4 0l-2 2a2.4 2.4 0 0 0 3.4 3.4l.7-.7" /></svg>Copy link</span><span className="pk-cl pk-b"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>Copied</span></span>
              </div>
              <article className="pk-page">
                <div className="pk-brand"><i>Y</i><span>{ws.org}</span><span className="pk-date">Pitch · Thu 8 Oct</span></div>
                <h3>Prepared for Coffee prospect</h3>
                <ol className="pk-finds">
                  <li className="pk-f" style={{ '--d': '2.4s' }}>
                    <span className="pk-n">1</span><span className="pk-ft"><b>Welcome email in spam</b><em>09:06 · code inside</em></span>
                    <span className="ax-shot pk-shot pk-s1" aria-hidden="true"><i className="r" /><i className="r1" /><i className="r2" /><i className="r3" /><i className="a1" /><i className="l1" /><i className="t1" /><i className="a2" /><i className="l2" /><i className="a3" /><i className="l3" /></span>
                    <span className="pk-sk k1" aria-hidden="true" /><span className="pk-sk k2" aria-hidden="true"><i /><i /></span><span className="pk-sk k3" aria-hidden="true" />
                  </li>
                  <li className="pk-f" style={{ '--d': '2.65s' }}>
                    <span className="pk-n">2</span><span className="pk-ft"><b>No text after opt in</b><em>0 texts in 48 h</em></span>
                    <span className="ax-shot pk-shot pk-s2" aria-hidden="true"><i className="lb" /><i className="in" /><i className="cd" /><i className="bt" /><i className="er" /><i className="tl" /></span>
                    <span className="pk-sk k1" aria-hidden="true" /><span className="pk-sk k2" aria-hidden="true"><i /><i /></span><span className="pk-sk k3" aria-hidden="true" />
                  </li>
                  <li className="pk-f" style={{ '--d': '2.9s' }}>
                    <span className="pk-n">3</span><span className="pk-ft"><b>Bot can’t answer delivery</b><em>Ended when staff joined</em></span>
                    <span className="ax-shot pk-shot pk-s3" aria-hidden="true"><i className="p1" /><i className="n1" /><i className="q1" /><i className="p2" /><i className="n2" /><i className="q2" /><i className="bt" /></span>
                    <span className="pk-sk k1" aria-hidden="true" /><span className="pk-sk k2" aria-hidden="true"><i /><i /></span><span className="pk-sk k3" aria-hidden="true" />
                  </li>
                </ol>
                <p className="pk-sign"><span>Signed</span>ed25519 · 7f3a 91c2 … c91e</p>
              </article>
            </section>
          </div>
          <p className="pk-note ax-fade" style={{ '--d': '.3s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Public sign ups only · nothing bought</p>
          <div className="ax-toast pk-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Copied</b><span>{ws.domain}/p/coffee</span></p><span className="ax-btn">Open</span></div>
          <svg className="ax-ptr pk-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.05 4.6 2.15-.95-2-4.5h4.3Z" /></svg>
        </div>
      </div>
    </div></div></div>
  )
}
