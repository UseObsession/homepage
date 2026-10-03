import { wordsFor, type ScreenProps } from '../components/workspace'

/* The handover app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/handover.css, loaded by the page, never imported here.
   Converted from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function HandoverScreen({ workspace = 'agency' }: ScreenProps) {
  const ws = wordsFor(workspace)
  return (
    <div className="il appx-il app-handover"><div className="appx-fit"><div className="appx" role="img" aria-label="Account handover for a newly signed Outdoor gear client: 6 accounts move into the client’s name side by side, each by its own route, with a status mark and the day. Search console and Analytics land as the days to full access fall from 31 to 6, then Social goes to the client to approve.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>{ws.org}</b><span>/</span>Missions<span>/</span>Account handover</span>
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
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="hnd-nb"><b>2</b><b>3</b></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">{ws.lists}</p>
            <a role="none"><i />Homeware</a><a role="none"><i />Coffee roaster</a><a role="none"><i />Candles</a><a className="on" role="none"><i />Outdoor gear</a><a role="none"><i />Dental group</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          <header className="hnd-h ax-fade">
            <h2>Account handover</h2><span className="hnd-meta">Outdoor gear · day 3</span>
            <span className="hnd-id"><span className="hnd-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for {ws.org}</span>
          </header>
          <div className="hnd-body">
            {/* the checklist: every account the client must own, each moving by its own route at the same time */}
            <div className="hnd-tb">
              <div className="hnd-row hnd-th ax-fade" style={{ '--d': '.06s' }}><span>Account</span><span>Steps</span><span>Status</span></div>
              <div className="hnd-row r-ads ax-in" style={{ '--d': '.12s' }}>
                <span className="a"><svg className="sig st-waiting moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Ads</b><small>Partner request</small></span>
                <span className="r"><span className="hnd-pips"><i className="on" /><i className="on go" style={{ '--t': '1s' }} /><i /><i /></span></span>
                <span className="s"><b>Former agency asked</b><small>day 3 · nudge on day 5</small></span>
              </div>
              <div className="hnd-row r-an ax-in" style={{ '--d': '.16s' }}>
                <span className="a"><svg className="sig st-landed land" viewBox="2 2 96 96" aria-hidden="true" style={{ '--t': '2.6s' }}><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Analytics</b><small>Admin swap</small></span>
                <span className="r"><span className="hnd-pips"><i className="on" /><i className="on" /><i className="on go" style={{ '--t': '1.3s' }} /><i className="on go" style={{ '--t': '2.45s' }} /></span></span>
                <span className="s"><span className="hnd-stk" style={{ '--t': '2.6s' }}><b>Admin invite sent</b><b>Admin moved to client</b></span><small>day 3</small></span>
              </div>
              <div className="hnd-row r-so hnd-hot">
                <span className="a"><span className="hnd-mk"><svg className="sig st-working w0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-needs moving w1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span><b>Social</b><small>Page request</small></span>
                <span className="r"><span className="hnd-pips"><i className="on" /><i className="on go" style={{ '--t': '1.1s' }} /><i className="nd" style={{ '--t': '3.2s' }} /><i /></span></span>
                <span className="s"><span className="hnd-stk" style={{ '--t': '3.2s' }}><b>Request sent</b><b>Client to approve</b></span><small>day 2</small></span>
              </div>
              <div className="hnd-row r-dom ax-in" style={{ '--d': '.24s' }}>
                <span className="a"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Domain</b><small>DNS proof</small></span>
                <span className="r"><span className="hnd-pips"><i className="on" /><i className="on" /><i className="on" /><i className="on" /></span></span>
                <span className="s"><b>Owner verified by DNS</b><small>day 1</small></span>
              </div>
              <div className="hnd-row r-web ax-in" style={{ '--d': '.28s' }}>
                <span className="a"><svg className="sig st-working" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Website</b><small>Host reset</small></span>
                <span className="r"><span className="hnd-pips"><i className="on" /><i className="on go" style={{ '--t': '1.7s' }} /><i /><i /></span></span>
                <span className="s"><b>Host resetting login</b><small>day 3</small></span>
              </div>
              <div className="hnd-row r-sc ax-in" style={{ '--d': '.32s' }}>
                <span className="a"><svg className="sig st-landed land" viewBox="2 2 96 96" aria-hidden="true" style={{ '--t': '2s' }}><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Search console</b><small>Same DNS record</small></span>
                <span className="r"><span className="hnd-pips"><i className="on" /><i className="on" /><i className="on" /><i className="on go" style={{ '--t': '1.85s' }} /></span></span>
                <span className="s"><span className="hnd-stk" style={{ '--t': '2s' }}><b>Checking DNS</b><b>Verified by DNS</b></span><small>day 3</small></span>
              </div>
            </div>
            {/* the readout: days to full access, how many are in the client's name, what waits on the client */}
            <aside className="hnd-pan ax-fade" style={{ '--d': '.1s' }}>
              <section className="hnd-ps">
                <p className="hnd-k">Days to full access</p>
                <p className="hnd-big"><b className="hnd-cnt" /><span>31 on day 1</span></p>
                <svg className="hnd-spark" viewBox="0 0 124 36" aria-hidden="true">
                  <path className="ar" d="M2 3H7.1V9H35.4V15H56.7V19.8H77.9V25.8H117.2V33H121V36H2Z" />
                  <path className="ln" d="M2 3H7.1V9H35.4V15H56.7V19.8H77.9V25.8H117.2V33H121" />
                  <circle className="dt" cx="121" cy="33" r="2.25" />
                </svg>
                <p className="hnd-ax"><span>day 1</span><span>today</span></p>
              </section>
              <section className="hnd-ps">
                <p className="hnd-k">In the client’s name</p>
                <p className="hnd-v"><b><span className="hnd-n3"><span>1</span><span>2</span><span>3</span></span></b>of 6</p>
                <span className="hnd-seg"><i className="on" /><i className="on go" style={{ '--t': '2s' }} /><i className="on go" style={{ '--t': '2.6s' }} /><i className="nd" style={{ '--t': '3.2s' }} /><i /><i /></span>
              </section>
              <section className="hnd-ps">
                <p className="hnd-k">Needs the client</p>
                <p className="hnd-v"><b><span className="hnd-stk" style={{ '--t': '3.2s' }}><span>0</span><span>1</span></span></b><span className="hnd-who">Social</span></p>
              </section>
            </aside>
          </div>
          <p className="hnd-note ax-fade" style={{ '--d': '.4s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Client’s OK on every transfer</p>
          <div className="ax-toast hnd-toast"><svg className="sig st-needs" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Social needs the client</b><span>Approval link sent</span></p><span className="ax-btn">Review</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
