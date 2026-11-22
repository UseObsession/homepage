/* The loads app screen (23 Nov 2026): 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds
   .play to its root to run the story. Its look and story: css/loads.css, loaded by the page, never imported here.
   Load tracking for Larkspur Logistics, an invented freight brokerage: the 06:00 read of the day's 4 signs in to 8 carrier
   portals with Larkspur's own logins and reads all 312 loads in transit in 19 minutes. The board opens on what to act
   on: load 77120's ETA moved 19 hours later and load 77208 has had no update for 14 hours (3 more have none since
   yesterday, so 5 exceptions); load 77341 was delivered at 05:12 and its proof of delivery (POD) came by email at 06:24.
   The 5 exceptions post to #loads at 06:25. Every name is invented. */

function Sig({ cls }: { cls: string }) {
  return (
    <svg className={`sig ${cls}`} viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
  )
}

type Row = {
  load: string
  lane: string
  kind: string
  carrier: string
  status: [string, string]
  eta: [string, string]
  t: string
  /* an exception: what the board showed before this read, then what it shows now */
  was?: { status?: string; eta?: string }
  pod?: boolean
}
const ROWS: Row[] = [
  { load: '77120', lane: 'Chicago to Memphis', kind: 'Dry van', carrier: 'Carrier C', status: ['In transit', 'ETA 19 h later'], eta: ['Wed 09:00', 'was Tue 14:00'], t: '1.3s', was: { eta: 'Tue 14:00' } },
  { load: '77208', lane: 'Reno to Denver', kind: 'Reefer', carrier: 'Carrier F', status: ['No update', '14 h since last'], eta: ['Tue 16:00', 'last given'], t: '1.44s', was: { status: 'In transit' } },
  { load: '77341', lane: 'Dallas to Atlanta', kind: 'Dry van', carrier: 'Carrier A', status: ['Delivered 05:12', 'POD by email, 06:24'], eta: ['05:12', 'arrived'], t: '1.58s', pod: true },
  { load: '77412', lane: 'Newark to Columbus', kind: 'LTL · 6 pallets', carrier: 'Carrier B', status: ['Out for delivery', 'updated 05:58'], eta: ['Tue 11:30', 'on time'], t: '1.72s' },
  { load: '77455', lane: 'Laredo to Houston', kind: 'Flatbed', carrier: 'Carrier D', status: ['Picked up 05:40', 'updated 05:44'], eta: ['Wed 16:00', 'on time'], t: '1.86s' },
]

/* the day's 4 reads on 1 track, 06:00 to 18:00 across 240px */
const READS = [
  { at: '06:00', x: '0px', done: true },
  { at: '10:00', x: '80px' },
  { at: '14:00', x: '160px' },
  { at: '18:00', x: '240px' },
]

export function LoadsScreen() {
  return (
    <div className="il appx-il app-loads"><div className="appx-fit"><div className="appx" role="img" aria-label="The Load tracking watch for Larkspur Logistics, an invented freight brokerage, on Tuesday morning. At 06:00, the first of the day’s 4 reads, a persona per carrier signs in to 8 carrier portals with Larkspur’s own logins and reads all 312 loads in transit in 19 minutes, each page saved with a screenshot; the next reads run at 10:00, 14:00 and 18:00. The board opens on what to act on: load 77120, Chicago to Memphis with Carrier C, is in transit but its ETA moved 19 hours later, from Tuesday 14:00 to Wednesday 09:00; load 77208, Reno to Denver with Carrier F, has had no update for 14 hours. Load 77341, Dallas to Atlanta, was delivered at 05:12 and its proof of delivery arrived by email at 06:24. Loads 77412 and 77455 are on time. With 3 more loads that have had no update since yesterday, 5 exceptions are posted to the loads channel in Slack at 06:25. It signs in only with Larkspur’s own logins and stops before any payment.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Watches<span>/</span>Load tracking</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>DB</span><span>MO</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>Your company</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5h10M3 8h10M3 11.5h6" /></svg>Watches<em>4</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Blueprints</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="lt-nb"><b>0</b><b>5</b></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Event log</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Lists</p>
            <a className="on" role="none"><i />Loads in transit</a><a role="none"><i />Rate confirmations</a><a role="none"><i />Appointments</a><a role="none"><i />Carrier invoices</a>
          </div>
          <div className="ax-side-f"><Sig cls="st-landed" /><span><b>8</b> carriers signed in</span></div>
        </aside>
        <div className="ax-main">
          {/* header: the watch, its size, the declared agent */}
          <header className="lt-h ax-fade">
            <h2>Load tracking</h2>
            <span className="lt-meta">312 in transit</span>
            <span className="lt-id"><span className="lt-av"><Sig cls="" /></span>Obsession agent · your logins</span>
          </header>
          {/* the day's 4 reads: the 06:00 read done, 3 to come */}
          <section className="ax-card lt-day ax-fade" style={{ '--d': '.06s' }}>
            <div className="lt-sum">
              <span className="lt-mk"><Sig cls="st-working w0" /><Sig cls="st-landed w1" /></span>
              <span className="lt-sv">
                <span className="v0"><b>06:00 read</b><small>8 portals, signing in</small></span>
                <span className="v1"><b>06:00 read · 19 min</b><small>312 loads · 8 portals · 1 code</small></span>
              </span>
            </div>
            <div className="lt-track" aria-hidden="true">
              <i className="lt-line" />
              {READS.map((r) => (
                <span className={`lt-node${r.done ? ' done' : ''}`} style={{ '--lt-x': r.x }} key={r.at}><i /><time>{r.at}</time></span>
              ))}
            </div>
          </section>
          {/* the board: exceptions first, then the rest, each row with its screenshot */}
          <section className="ax-card lt-tb ax-fade" style={{ '--d': '.12s' }}>
            <header className="lt-th"><b>Since the 18:00 read yesterday</b><span className="lt-ct">5 exceptions · 312 loads</span></header>
            <div className="lt-g lt-ch"><span>Load</span><span>Lane</span><span>Carrier</span><span>Status</span><span>ETA</span><span aria-hidden="true" /></div>
            {ROWS.map((r) => (
              <div className={`lt-g lt-r${r.was ? ' ex' : ''}`} style={{ '--lt-t': r.t }} key={r.load}>
                <span className="lt-ld">{r.load}</span>
                <span className="lt-two"><b>{r.lane}</b><small>{r.kind}</small></span>
                <span className="lt-cr">{r.carrier}</span>
                <span className="lt-s">
                  <span className="lt-mk">{r.was ? <><Sig cls="st-landed w0" /><Sig cls="st-needs w1" /></> : <Sig cls="st-landed" />}</span>
                  {r.was?.status ? (
                    <span className="lt-sv"><span className="v0 lt-two"><b>{r.was.status}</b><small>updated 16:10</small></span><span className="v1 lt-two"><b>{r.status[0]}</b><small>{r.status[1]}</small></span></span>
                  ) : (
                    <span className="lt-two"><b>{r.status[0]}</b><small>{r.pod && <svg className="lt-clip" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.5 4.5 5.75 9.25a1.6 1.6 0 0 0 2.25 2.25l5-5a3 3 0 0 0-4.25-4.25l-5 5a4.4 4.4 0 0 0 6.25 6.25l3.5-3.5" /></svg>}{r.status[1]}</small></span>
                  )}
                </span>
                {r.was?.eta ? (
                  <span className="lt-sv lt-eta"><span className="v0 lt-two"><b>{r.was.eta}</b><small>carrier ETA</small></span><span className="v1 lt-two"><b>{r.eta[0]}</b><small>{r.eta[1]}</small></span></span>
                ) : (
                  <span className="lt-two lt-eta"><b>{r.eta[0]}</b><small>{r.eta[1]}</small></span>
                )}
                <i className="lt-pf" />
              </div>
            ))}
            <footer className="lt-f"><span>3 more with no update since yesterday</span><span><i className="lt-pf" />A screenshot behind every row</span></footer>
          </section>
          <p className="lt-note"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>Your carrier logins only</span><span>Stops before any payment</span></p>
          <div className="ax-toast lt-toast"><Sig cls="st-needs" /><p><b>5 exceptions</b><span>#loads · 06:25</span></p><span className="ax-btn">Review</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
