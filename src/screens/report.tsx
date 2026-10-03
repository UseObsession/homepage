import { wordsFor, type ScreenProps } from '../components/workspace'

/* The report app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/report.css, loaded by the page, never imported here. Converted
   from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function ReportScreen({ workspace = 'agency' }: ScreenProps) {
  const ws = wordsFor(workspace)
  return (
    <div className="il appx-il app-report"><div className="appx-fit"><div className="appx" role="img" aria-label="A monthly email and SMS report for the Candles client, in the agency’s brand, gathered by a declared Obsession agent through public sign ups only: the counts fill in and 3 rivals’ message bars run 4 times longer than the client’s. The agency sends it, and the button reads Sent, in your brand.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>{ws.org}</b><span>/</span>Records<span>/</span>Email and SMS tracking</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>AM</span><span>JO</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>{ws.org}</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5h10M3 8h10M3 11.5h6" /></svg>Missions<em>24</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Recipes</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge">3</span></a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">{ws.lists}</p>
            <a role="none"><i />Homeware</a><a role="none"><i />Coffee roaster</a><a className="on" role="none"><i />Candles</a><a role="none"><i />Outdoor gear</a><a role="none"><i />Dental group</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          <header className="ax-h apr-h ax-fade">
            <h2>Email and SMS tracking</h2><span className="ax-meta">You bill $1,000/mo</span>
            <span className="apr-id"><span className="apr-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for {ws.org}</span>
          </header>
          <article className="apr-page ax-in" style={{ '--d': '.06s' }}>
            <div className="apr-brand"><i>Y</i><span>{ws.org}</span><span className="apr-date">October 2026</span></div>
            <div className="apr-kpis">
              <div className="apr-kpi"><b className="apr-cnt" style={{ '--apr-n': '160', '--d': '.35s' }} /><span className="ax-k">Messages captured</span></div>
              <div className="apr-kpi"><b className="apr-cnt" style={{ '--apr-n': '11', '--d': '.45s' }} /><span className="ax-k">Rival offers logged</span></div>
              <div className="apr-kpi"><b className="apr-cnt apr-pct" style={{ '--apr-n': '20', '--d': '.55s' }} /><span className="ax-k">Biggest rival discount</span></div>
            </div>
            <section className="apr-chart">
              <div className="apr-ch"><b>Messages sent</b><span className="apr-key"><i />Message<i className="o" />Offer</span></div>
              <div className="apr-rows">
                <div className="apr-row me" style={{ '--r': '0' }}><span className="apr-nm">You</span><span className="apr-trk"><span className="apr-bar" style={{ '--n': '12' }} /></span><b className="apr-cnt apr-ct" style={{ '--apr-n': '12' }} /></div>
                <div className="apr-row" style={{ '--r': '1' }}><span className="apr-nm">Rival A</span><span className="apr-trk"><span className="apr-bar" style={{ '--n': '52' }}><i style={{ '--i': '9' }} /><i style={{ '--i': '27' }} /><i style={{ '--i': '44' }} /></span></span><b className="apr-cnt apr-ct" style={{ '--apr-n': '52' }} /></div>
                <div className="apr-row" style={{ '--r': '2' }}><span className="apr-nm">Rival B</span><span className="apr-trk"><span className="apr-bar" style={{ '--n': '49' }}><i style={{ '--i': '4' }} /><i style={{ '--i': '13' }} /><i style={{ '--i': '22' }} /><i style={{ '--i': '33' }} /><i style={{ '--i': '45' }} /></span></span><b className="apr-cnt apr-ct" style={{ '--apr-n': '49' }} /></div>
                <div className="apr-row" style={{ '--r': '3' }}><span className="apr-nm">Rival C</span><span className="apr-trk"><span className="apr-bar" style={{ '--n': '47' }}><i style={{ '--i': '16' }} /><i style={{ '--i': '31' }} /><i style={{ '--i': '40' }} /></span></span><b className="apr-cnt apr-ct" style={{ '--apr-n': '47' }} /></div>
              </div>
            </section>
            <footer className="apr-read">
              <p className="apr-ins">Rivals sent 4 times your messages.</p>
              <p className="apr-sign"><span>Signed</span>ed25519 · 7f3a 91c2 … c91e</p>
            </footer>
          </article>
          <footer className="apr-foot">
            <p className="apr-note ax-fade" style={{ '--d': '.3s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Public sign ups only · nothing bought</p>
            <span className="ax-btn apr-send"><span className="apr-s1"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2.75 8h9.5M8.75 4.5 12.25 8l-3.5 3.5" /></svg>Send to client</span><span className="apr-s2"><i className="ax-tick" />Sent · in your brand</span></span>
          </footer>
          <svg className="ax-ptr apr-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 1.5v11.6l3-2.9 2.1 4.7 2-.9-2.1-4.6h4.3Z" /></svg>
        </div>
      </div>
    </div></div></div>
  )
}
