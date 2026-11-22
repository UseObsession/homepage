/* The priorauth app screen (23 Nov 2026): 1 720 x 450 window of the product, at rest on its finished scene; AppScreen
   adds .play to its root to run the story. Its look and story: css/priorauth.css, loaded by the page, never imported here.
   Prior authorization status for Ashbrook Clinics, an invented clinic group: at 06:00 a persona per payer signs in to 5
   payer portals with the clinic group's own logins (Payer C's login code reaches its number in 9 seconds), reads all
   120 pending requests (24, 25, 23, 24 and 24) and lists what changed overnight: 9 requests, 6 approved, 2 sent back for
   more information and 1 denied, of which the 3 that need a person go to the work queue at 06:45. Every name is
   invented. */

function Sig({ cls }: { cls: string }) {
  return (
    <svg className={`sig ${cls}`} viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
  )
}

/* the 5 payer portals, each signed in at its own moment (Payer C waits for its code); 24 + 25 + 23 + 24 + 24 = 120 */
const PORTALS: { name: string; read: number; e: string; code?: boolean }[] = [
  { name: 'Payer A', read: 24, e: '.7s' },
  { name: 'Payer B', read: 25, e: '.95s' },
  { name: 'Payer C', read: 23, e: '1.7s', code: true },
  { name: 'Payer D', read: 24, e: '1.2s' },
  { name: 'Payer E', read: 24, e: '1.45s' },
]

/* what changed overnight: 5 of the 9 shown, the other 4 approved (foot) */
const ROWS: { id: string; payer: string; now: string; note: string; waited: string; t: string; needs?: boolean }[] = [
  { id: 'PA-30418', payer: 'Payer A', now: 'Approved', note: 'Ref A-77120 · 12 visits', waited: '3 days', t: '2.2s' },
  { id: 'PA-30502', payer: 'Payer C', now: 'Approved', note: 'Ref C-11934 · 1 scan', waited: '2 days', t: '2.34s' },
  { id: 'PA-30577', payer: 'Payer B', now: 'More information', note: 'Last 2 clinic notes', waited: '4 days', t: '2.48s', needs: true },
  { id: 'PA-30611', payer: 'Payer D', now: 'Denied', note: 'Reason on screenshot', waited: '6 days', t: '2.62s', needs: true },
  { id: 'PA-30640', payer: 'Payer E', now: 'More information', note: 'Signed order form', waited: '3 days', t: '2.76s', needs: true },
]

export function PriorauthScreen() {
  return (
    <div className="il appx-il app-priorauth"><div className="appx-fit"><div className="appx" role="img" aria-label="The Prior authorization status watch for Ashbrook Clinics, an invented clinic group, on Tuesday at 06:00. A persona per payer signs in to 5 payer portals with the clinic group’s own logins; Payer C asks for a login code, which reaches the persona’s own number in 9 seconds. By 06:38 all 120 pending requests are read, each status page saved with a screenshot. 9 changed overnight: 6 approved, such as PA-30418 at Payer A after 3 days; 2 sent back for more information, PA-30577 at Payer B asking for the last 2 clinic notes and PA-30640 at Payer E asking for a signed order form; and 1 denied, PA-30611 at Payer D after 6 days, its reason on the screenshot. The 3 that need a person go to the work queue at 06:45. It signs in only with the clinic group’s own logins, stops at any identity check, and runs under a signed business associate agreement.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Watches<span>/</span>Prior authorization</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>RM</span><span>KT</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>Your company</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5h10M3 8h10M3 11.5h6" /></svg>Watches<em>4</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Blueprints</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="pa-nb"><b>0</b><b>3</b></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Event log</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Lists</p>
            <a role="none"><i />Claim status</a><a role="none"><i />Eligibility</a><a className="on" role="none"><i />Prior authorization</a><a role="none"><i />Remittances</a>
          </div>
          <div className="ax-side-f"><Sig cls="st-landed" /><span><b>5</b> portals signed in</span></div>
        </aside>
        <div className="ax-main">
          {/* header: the watch, its size, the declared agent */}
          <header className="pa-h ax-fade">
            <h2>Prior authorization status</h2>
            <span className="pa-meta">120 pending</span>
            <span className="pa-id"><span className="pa-av"><Sig cls="" /></span>Obsession agent · your logins</span>
          </header>
          {/* the 5 payer portals, each signed in with the clinic group's own logins, then the 2 lines the log just wrote */}
          <section className="ax-card pa-pt ax-fade" style={{ '--d': '.06s' }}>
            <div className="pa-tiles">
              {PORTALS.map((p) => (
                <span className={`pa-tile${p.code ? ' code' : ''}`} style={{ '--pa-e': p.e }} key={p.name}>
                  <span className="pa-tn">
                    <span className="pa-mk"><Sig cls="st-working w0" /><Sig cls="st-landed w1" /></span>
                    <b>{p.name}</b>
                    {p.code && (
                      <svg className="pa-key" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="5.25" cy="10.75" r="2.75" /><path d="M7.25 8.75 13 3M10.75 5.25l1.75 1.75" /></svg>
                    )}
                  </span>
                  <span className="pa-st"><span className="v0">Signing in</span><span className="v1">{p.read} read</span></span>
                </span>
              ))}
            </div>
            <div className="pa-log">
              <span className="pa-l1"><time>06:01</time><code>sms.received</code>Payer C login code, in 9 s</span>
              <span className="pa-l2"><time>06:38</time><code>page.visited</code>120 status pages saved</span>
            </div>
          </section>
          {/* what changed overnight: each request's status before and after, the days it waited, its screenshot */}
          <section className="ax-card pa-tb ax-fade" style={{ '--d': '.12s' }}>
            <header className="pa-th"><b>Changed overnight</b><span className="pa-ct">9 of 120 · 3 need a person</span></header>
            <div className="pa-g pa-ch"><span>Request</span><span>Payer</span><span>Status</span><span>Waited</span><span aria-hidden="true" /></div>
            {ROWS.map((r) => (
              <div className={`pa-g pa-r${r.needs ? ' needs' : ''}`} style={{ '--pa-t': r.t }} key={r.id}>
                <span className="pa-id2">{r.id}</span>
                <span className="pa-py">{r.payer}</span>
                <span className="pa-s">
                  <span className="pa-mk"><Sig cls="st-waiting w0" /><Sig cls={`${r.needs ? 'st-needs' : 'st-landed'} w1`} /></span>
                  <span className="pa-sv"><span className="v0">Pending</span><span className="v1"><b>{r.now}</b><small>{r.note}</small></span></span>
                </span>
                <span className="pa-w">{r.waited}</span>
                <i className="pa-pf" />
              </div>
            ))}
            <footer className="pa-f"><span>4 more approved · 3 past the 5 day target</span><span><i className="pa-pf" />A screenshot behind every status</span></footer>
          </section>
          <p className="pa-note"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>BAA signed · your logins only</span><span>Stops at any identity check</span></p>
          <div className="ax-toast pa-toast"><Sig cls="st-needs" /><p><b>3 need a person</b><span>Work queue · 06:45</span></p><span className="ax-btn">Open queue</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
