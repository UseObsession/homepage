import { wordsFor, type ScreenProps } from '../components/workspace'

/* The brandwatch app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play
   to its root to run the story. Its look and story: css/brandwatch.css, loaded by the page, never imported here.
   Converted from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function BrandwatchScreen({ workspace = 'agency' }: ScreenProps) {
  const ws = wordsFor(workspace)
  return (
    <div className="il appx-il app-brandwatch"><div className="appx-fit"><div className="appx" role="img" aria-label="Tidewren Swim, 1 of 300 brands from Clay, watched for 48 hours by a declared Obsession agent through test shopper 4F2A, which has its own inbox, UK mobile number and browser and says it’s AI. After the 10:14 sign up the welcome email lands in 38 seconds, the control text in 4 and the chat bot’s answer in 5, the basket reminder stays locked until the brand says OK, and the playhead sweeps 48 hours with no text from the brand, so the gap is called and added to Clay.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>{ws.org}</b><span>/</span>Missions<span>/</span>Prospect intelligence<span>/</span>Tidewren Swim</span>
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
          <header className="bw-h ax-fade">
            <h2>Tidewren Swim</h2>
            <span className="ax-chip"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 2.75v7M5.25 7 8 9.75 10.75 7M3 10.5v2.75h10V10.5" /></svg>1 of 300 from Clay</span>
            <span className="bw-id"><span className="bw-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for {ws.org}</span>
          </header>
          <section className="bw-card ax-fade" style={{ '--d': '.06s' }}>
            <div className="bw-row bw-rl">
              <span className="bw-hr">Hour <b /> of 48</span>
              <span className="bw-trk"><span className="bw-tk t0">15 Sep 10:14</span><span className="bw-tk t24">16 Sep 10:14</span><span className="bw-tk t48">17 Sep 10:14</span></span>
            </div>
            <div className="bw-lanes">
              <span className="bw-grid" aria-hidden="true"><i /><i /><i /><i /><i /></span>
              <div className="bw-row bw-ln bw-l1">
                <span className="bw-lb"><svg className="sig st-landed bw-mk" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>Welcome email</span>
                <span className="bw-trk"><span className="bw-ev"><i className="bw-pin" /><time>10:14</time><span>In 38 s</span></span></span>
              </div>
              <div className="bw-row bw-ln bw-miss">
                <span className="bw-lb"><svg className="sig st-landed bw-mk" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>Text opt in</span>
                <span className="bw-trk"><i className="bw-void" /><span className="bw-ev bw-ctl"><i className="bw-pin" /><span>Control text · in 4 s</span></span><span className="bw-find"><b>No text in 48 h</b></span></span>
              </div>
              <div className="bw-row bw-ln bw-l3">
                <span className="bw-lb"><svg className="sig st-landed bw-mk" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>Chat bot answer</span>
                <span className="bw-trk"><span className="bw-ev"><i className="bw-pin" /><span>In 5 s</span></span></span>
              </div>
              <div className="bw-row bw-ln bw-lock">
                <span className="bw-lb"><svg className="bw-lk" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Basket reminder</span>
                <span className="bw-trk"><span className="bw-hatch"><b>Needs the brand’s OK</b><em>Never run</em></span></span>
              </div>
              <span className="bw-ph" aria-hidden="true"><i /></span>
            </div>
          </section>
          <section className="bw-who ax-card ax-in" style={{ '--d': '.14s' }}>
            <div className="bw-wh"><b>Test shopper <span>4F2A</span></b><span className="ax-chip">Says it’s AI</span></div>
            <dl className="bw-kv">
              <div><dt><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5" /><path d="m2.75 4.75 5.25 4 5.25-4" /></svg>Own inbox</dt><dd className="m">4f2a@obsession.example</dd></div>
              <div><dt><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="4.75" y="1.75" width="6.5" height="12.5" rx="1.5" /><path d="M7.25 11.75h1.5" strokeLinecap="round" /></svg>UK mobile</dt><dd className="m">+44 7700 900418</dd></div>
              <div><dt><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="2.75" width="11.5" height="10.5" rx="1.5" /><path d="M2.25 5.75h11.5" /></svg>Own browser</dt><dd>London</dd></div>
            </dl>
          </section>
          <p className="bw-note ax-fade" style={{ '--d': '.2s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Public sign up and chat bot only · nothing bought</p>
          <div className="ax-toast bw-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Gap proven</b><span>Added to Clay</span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
