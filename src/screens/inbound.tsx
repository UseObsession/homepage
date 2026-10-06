import { PartnerWord } from '../components/PartnerMark'

/* The inbound app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/inbound.css, loaded by the page, never imported here. Converted
   from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function InboundScreen() {
  return (
    <div className="il appx-il app-inbound"><div className="appx-fit"><div className="appx" role="img" aria-label="The Lead leaks page: with your OK, a test lead declared as AI uses your demo form, site chat and sales line at 09:00, 13:00 and 17:00 every day, each first reply timed against a 5 minute target. At 09:00 chat replies in 38 s and is assigned to JO in HubSpot; the form waits 4 h 12 m and lands unassigned; the sales line rings out with no voicemail and lands unassigned. Form waited 4h 12m. Phone rang out. 1 routing rule closes both leaks: unassigned form and phone leads go to the next free rep within 1 minute, live after your OK, and AM approves it at 13:20. At the 17:00 retest the form replies in 3 m 40 s. Same day: 4h 12m down to 3m 40s.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Missions<span>/</span>Lead leaks</span>
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
          {/* the page: your own funnel, tested by a declared AI test lead */}
          <header className="ib-h ax-fade">
            <h2>Lead leaks</h2>
            <span className="ib-meta">Test lead, declared AI · 3 runs a day</span>
            <span className="ib-id"><span className="ib-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession AI agent</span>
          </header>
          {/* the hero: 3 channels against the 5 minute line */}
          <section className="ax-card ib-chart ax-fade" style={{ '--d': '.06s' }}>
            <header className="ib-ch">
              <b>Time to first reply</b><span>target 5 min</span>
              <span className="ib-runs" aria-hidden="true"><span className="on">09:00</span><span>13:00</span><span>17:00</span></span>
            </header>
            <div className="ib-lanes">
              {/* Form */}
              <div className="ib-lane l-form">
                <span className="ib-ch-n">
                  <span className="ib-mk"><svg className="sig st-working v-work" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-landed v-land" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                  <span><b>Form</b><em>Demo form</em></span>
                </span>
                <span className="ib-tr"><i className="ib-rail" /><i className="ib-b ib-b1" /><i className="ib-b ib-b2" /></span>
                <span className="ib-rd">
                  <span className="ib-v">
                    <span style={{ '--t': '.3s', '--s': '.55s' }}>0<i>s</i></span><span style={{ '--t': '.85s', '--s': '.15s' }}>6<i>s</i></span><span style={{ '--t': '1s', '--s': '.1s' }}>14<i>s</i></span><span style={{ '--t': '1.1s', '--s': '.13s' }}>23<i>s</i></span><span style={{ '--t': '1.23s', '--s': '.22s' }}>38<i>s</i></span><span style={{ '--t': '1.45s' }}>1<i>m</i></span><span style={{ '--t': '1.7s' }}>3<i>m</i></span><span style={{ '--t': '1.95s' }}>6<i>m</i></span><span style={{ '--t': '2.2s' }}>13<i>m</i></span><span style={{ '--t': '2.45s' }}>29<i>m</i></span><span style={{ '--t': '2.7s' }}>1<i>h</i></span><span style={{ '--t': '2.95s', '--s': '.23s' }}>2<i>h</i> 8<i>m</i></span><span className="last" style={{ '--t': '3.18s' }}>4<i>h</i> 12<i>m</i></span>
                  </span>
                  <span className="ib-rt" style={{ '--t': '3.25s' }}><PartnerWord id="hubspot" /><i className="ib-dt">·</i><i className="ib-un" /><b>Unassigned</b></span>
                </span>
              </div>
              {/* Chat */}
              <div className="ib-lane l-chat">
                <span className="ib-ch-n">
                  <span className="ib-mk"><svg className="sig st-working v-work" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-landed v-land" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                  <span><b>Chat</b><em>Site chat</em></span>
                </span>
                <span className="ib-tr"><i className="ib-rail" /><i className="ib-b ib-b0" /></span>
                <span className="ib-rd">
                  <span className="ib-v">
                    <span style={{ '--t': '.3s', '--s': '.55s' }}>0<i>s</i></span><span style={{ '--t': '.85s', '--s': '.15s' }}>6<i>s</i></span><span style={{ '--t': '1s', '--s': '.1s' }}>14<i>s</i></span><span style={{ '--t': '1.1s', '--s': '.13s' }}>23<i>s</i></span><span className="last" style={{ '--t': '1.23s' }}>38<i>s</i></span>
                  </span>
                  <span className="ib-rt" style={{ '--t': '1.3s' }}><PartnerWord id="hubspot" /><i className="ib-dt">·</i><i className="ib-jo">JO</i>Assigned</span>
                </span>
              </div>
              {/* Phone */}
              <div className="ib-lane l-phone">
                <span className="ib-ch-n">
                  <span className="ib-mk"><svg className="sig st-working v-work" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-waiting v-wait" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-needs v-need" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-landed v-land" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                  <span><b>Phone</b><em>Sales line</em></span>
                </span>
                <span className="ib-tr"><i className="ib-rail" /><i className="ib-b ib-b3" /><i className="ib-x" /><i className="ib-dash" /></span>
                <span className="ib-rd">
                  <span className="ib-v">
                    <span style={{ '--t': '.3s', '--s': '.55s' }}>0<i>s</i></span><span style={{ '--t': '.85s', '--s': '.15s' }}>6<i>s</i></span><span style={{ '--t': '1s', '--s': '.1s' }}>14<i>s</i></span><span style={{ '--t': '1.1s', '--s': '.1s' }}>23<i>s</i></span><span className="last ib-word" style={{ '--t': '1.2s' }}>Missed</span>
                  </span>
                  <span className="ib-rt ib-rts" style={{ '--t': '1.25s' }}><span className="w">Rang out, no voicemail</span><span className="n"><PartnerWord id="hubspot" /><i className="ib-dt">·</i><i className="ib-un" /><b>Unassigned</b></span></span>
                </span>
              </div>
            </div>
            {/* the scale and the target line, over the track column */}
            <div className="ib-plot" aria-hidden="true">
              <i className="ib-tgt" />{' '}
              <span className="ib-ax" style={{ '--p': '0' }}>0</span><span className="ib-ax" style={{ '--p': '25.3' }}>1 min</span><span className="ib-ax t" style={{ '--p': '44.7' }}>5 min</span><span className="ib-ax" style={{ '--p': '76.7' }}>1 h</span><span className="ib-ax" style={{ '--p': '94.7' }}>4 h</span>
            </div>
          </section>
          {/* the drafted routing fix */}
          <section className="ax-card ib-fix">
            <div className="ib-fx">
              <p className="ib-fh"><svg className="ib-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 5h2.2c1.1 0 1.8.4 2.4 1.3l1.8 3.4c.6.9 1.3 1.3 2.4 1.3h2.2" /><path d="M2.5 11h2.2c.9 0 1.5-.3 2-.9M9.3 5.9c.5-.6 1.1-.9 2-.9h2.2" /><path d="m12 3.25 1.75 1.75L12 6.75M12 9.25 13.75 11 12 12.75" /></svg><b>Routing fix</b><span>Form and phone leads · <PartnerWord id="hubspot" /></span></p>
              <p className="ib-rule"><span className="ib-old">Unassigned</span><svg className="ib-arw" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" /></svg><span className="ib-new">Next free rep within 1 min</span></p>
            </div>
            <div className="ib-act">
              <span className="ax-btn ghost ib-edit">Edit</span>{' '}
              <span className="ax-btn ib-ok">Approve</span>{' '}
              <span className="ib-done"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>Approved by AM · 13:20</span>{' '}
              <svg className="ax-ptr ib-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.1 4.6 2-.9-2.1-4.5h4.3Z" /></svg>
              <p className="ib-lock"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Live after your OK</p>
            </div>
          </section>
          <div className="ax-toast ib-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>17:00 retest</b><span>Form 3m 40s</span></p><span className="ax-btn">View</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
