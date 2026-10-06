import { wordsFor, type ScreenProps } from '../components/workspace'

/* The kit app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to its
   root to run the story. Its look and story: css/kit.css, loaded by the page, never imported here. Converted from
   its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function KitScreen({ workspace = 'agency' }: ScreenProps) {
  const ws = wordsFor(workspace)
  return (
    <div className="il appx-il app-kit"><div className="appx-fit"><div className="appx" role="img" aria-label="A Homeware mystery shop being set up in Missions: Obsession issues test customer 2 of 4 its own declared identity, field by field, with an inbox, a phone number, a browser, a card capped at £0 that stops before payment, a watch of 48 hours and signed records. Then all 4 agents are ready, with nothing to install.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>{ws.org}</b><span>/</span>Missions<span>/</span>Mystery shopper</span>
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
            <a className="on" role="none"><i />Homeware</a><a role="none"><i />Coffee roaster</a><a role="none"><i />Candles</a><a role="none"><i />Outdoor gear</a><a role="none"><i />Dental group</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          {/* header: the mission, and who runs it */}
          <header className="ax-h kt-h ax-fade">
            <h2>Mystery shopper</h2>
            <span className="ax-meta">Homeware · 4 test customers</span>
            <span className="kt-id-pill"><span className="kt-ag"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for {ws.org}</span>
          </header>
          <section className="kt-stage ax-fade" style={{ '--d': '.06s' }}>
            <div className="kt-desk">
              {/* the agent's ID, issued field by field */}
              <article className="kt-id ax-in" style={{ '--d': '.16s' }}>
                <header className="kt-band">
                  <span className="kt-lbl">Agent ID</span>
                  <span className="kt-iss"><span className="v0">Issuing…</span><span className="v1">Issued 1 Oct</span></span>
                </header>
                <div className="kt-body">
                  <div className="kt-photo" aria-hidden="true">
                    <i className="c1" /><i className="c2" /><i className="c3" /><i className="c4" />
                    <span className="kt-mk">
                      <svg className="sig st-working moving w0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                      <svg className="sig st-landed w1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                    </span>
                  </div>
                  <div className="kt-main">
                    <div className="kt-name">
                      <h3>Test customer 2 of 4</h3>
                      <p>Labelled tester <i>·</i> Homeware store</p>
                    </div>
                    <dl className="kt-fields">
                      <div className="kt-f" style={{ '--t': '.8s' }}><dt>Inbox</dt><dd className="m"><span className="v">shopper2@test.useobsession.com</span><i className="sk" style={{ width: '86%' }} /></dd><dd className="kt-ck"><span className="ax-tick" /></dd></div>
                      <div className="kt-f" style={{ '--t': '1.2s' }}><dt>Phone</dt><dd className="m"><span className="v">+44 7700 900 214</span><i className="sk" style={{ width: '48%' }} /></dd><dd className="kt-ck"><span className="ax-tick" /></dd></div>
                      <div className="kt-f" style={{ '--t': '1.6s' }}><dt>Browser</dt><dd><span className="v">Phone browser · London</span><i className="sk" style={{ width: '70%' }} /></dd><dd className="kt-ck"><span className="ax-tick" /></dd></div>
                      <div className="kt-f" style={{ '--t': '2s' }}><dt>Card</dt><dd><span className="v">Test card · capped at £0</span><i className="sk" style={{ width: '90%' }} /></dd><dd className="kt-ck"><span className="ax-tick" /></dd></div>
                      <div className="kt-f" style={{ '--t': '2.4s' }}><dt>Schedule</dt><dd><span className="v">Watched 48 hours</span><i className="sk" style={{ width: '38%' }} /></dd><dd className="kt-ck"><span className="ax-tick" /></dd></div>
                      <div className="kt-f" style={{ '--t': '2.8s' }}><dt>Record</dt><dd><span className="v">Signing on</span><i className="sk" style={{ width: '30%' }} /></dd><dd className="kt-ck"><span className="ax-tick" /></dd></div>
                    </dl>
                  </div>
                </div>
              </article>
            </div>
            <footer className="kt-foot">
              <div className="kt-team" aria-hidden="true">
                <span className="kt-av a1"><b>1</b></span><span className="kt-av a2 on" style={{ '--t': '3.4s' }}><b>2</b></span><span className="kt-av a3" style={{ '--t': '4.15s' }}><b>3</b></span><span className="kt-av a4" style={{ '--t': '4.45s' }}><b>4</b></span>
              </div>
              <span className="kt-st">
                <span className="v0">Setting up 4 test customers</span>
                <span className="v1"><b>4 agents ready</b><i>·</i>0 to install</span>
              </span>
              <span className="ax-btn kt-go">Start run</span>
            </footer>
          </section>
          <p className="kt-note ax-fade" style={{ '--d': '.2s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Stops before payment</p>
        </div>
      </div>
    </div></div></div>
  )
}
