/* The reminders app screen (Appointment reminders, 23 Nov 2026): 1 720 x 450 window of the product, at rest on its
   finished scene; AppScreen adds .play to its root to run the story. Its look and story: css/reminders.css, loaded by
   the page, never imported here. Drawn for Fernhill Physical Therapy, an invented group of 8 clinics, on Monday
   afternoon: Tuesday's 312 bookings as 1 bar (texts at 10:00 bring 241 confirmed and 19 moved; calls at 16:00 to the
   52 still quiet bring 33 confirmed, 6 moved and 13 still quiet: 274, 25 and 13 in all), and 5 of Riverside's rows,
   each showing the text, the call and where it ended. Patients appear by initials only. */

/* The signature mark, in the state its class names (kit.css: working, waiting, needs you, landed). */
function Sig({ c = '' }: { c?: string }) {
  return (
    <svg className={`sig ${c}`.trim()} viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
  )
}

/* A count that changes during the story: every value stacked, only the last shows at rest. */
function Count({ v }: { v: string[] }) {
  return (
    <b className="rm-nb">{v.map((x, i) => <i key={i} className={`n${i}`}>{x}</i>)}</b>
  )
}

/* A row's status: "Texted" while it waits, then where it ended. */
function Status({ end, label }: { end: string; label: string }) {
  return (
    <span className="rm-st"><span className="v0"><Sig c="st-waiting" />Texted</span><span className="v1"><Sig c={end} />{label}</span></span>
  )
}

export function RemindersScreen() {
  return (
    <div className="il appx-il app-reminders"><div className="appx-fit"><div className="appx" role="img" aria-label="Appointment reminders, running for Fernhill Physical Therapy, an invented group of 8 clinics. On Monday it texted the 312 patients booked for Tuesday at 10:00, each from their clinic’s number, as Fernhill’s AI assistant; 241 confirmed and 19 moved by reply. At 16:00 it called the 52 still quiet, each of whom agreed to reminder calls; 33 confirmed and 6 moved, leaving 274 confirmed, 25 moved and 13 still quiet, shown as one bar. Today’s visits had 7 no-shows, and 5 are already rebooked. Five of Riverside’s Tuesday rows show each step: two patients replied C and are confirmed, one asked to move to Thursday and was moved to 11:00, one didn’t reply and confirmed on a call of 1 minute 4 seconds, and one didn’t reply or answer the call and got a second text, so the front desk has one patient still to reach. It says it’s an AI and calls only patients who agreed.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Fernhill PT</b><span>/</span>Blueprints<span>/</span>Appointment reminders</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>SL</span><span>AR</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>F</i>Fernhill PT</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Blueprints<em>2</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 3.25h10.5v7.5H7.5l-3 2.25v-2.25H2.75Z" /></svg>Conversations<em>312</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge">1</span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Event log</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Clinics</p>
            <a className="on" role="none"><i />Riverside</a><a role="none"><i />Oakmead</a><a role="none"><i />Northfield</a><a role="none"><i />Brookside</a><a role="none"><i />Elm Park</a><a className="rm-more" role="none"><i />3 more</a>
          </div>
          <div className="ax-side-f"><Sig c="st-working moving" /><span><b>8</b> clinics reminded</span></div>
        </aside>
        <div className="ax-main">
          <header className="rm-h ax-fade">
            <h2>Appointment reminders</h2><span className="rm-meta">8 clinics · daily 10:00</span>
            <span className="rm-id"><span className="rm-av"><Sig /></span>AI assistant for Fernhill</span>
          </header>
          {/* Tuesday's 312 bookings, as 1 bar: confirmed, moved, still quiet */}
          <section className="rm-sum ax-fade" style={{ '--d': '.06s' }}>
            <div className="rm-sh"><b>Tuesday</b><span>312 booked across 8 clinics</span><span className="rm-today">Today <b>7</b> no-shows · <b>5</b> rebooked</span></div>
            <div className="rm-bar" aria-hidden="true"><i className="rm-bc" /><i className="rm-bm" /></div>
            <div className="rm-lg">
              <span><i className="rm-k rm-kc" />Confirmed<Count v={['0', '241', '274']} /></span>
              <span><i className="rm-k rm-km" />Moved<Count v={['0', '19', '25']} /></span>
              <span><i className="rm-k rm-kq" />Still quiet<Count v={['312', '52', '13']} /></span>
              <span className="rm-steps"><span className="rm-step rm-s1">10:00 texts</span><span className="rm-step rm-s2">16:00 calls</span></span>
            </div>
          </section>
          {/* 5 of Riverside's Tuesday bookings, each step in its own column */}
          <section className="rm-ls ax-fade" style={{ '--d': '.12s' }}>
            <header className="rm-lh"><b>Riverside</b><em>Tue · 41 booked</em><span>Each reply written to the calendar</span></header>
            <div className="rm-r rm-cols"><span>Time</span><span>Patient</span><span>Text, 10:00</span><span>Call, 16:00</span><span>Where it ended</span></div>
            <div className="rm-r rm-r1" style={{ '--rm-t': '.2s' }}><time>08:30</time><span className="rm-p"><b>A.M.</b><small>Knee rehab</small></span>
              <span className="rm-c rm-tx" style={{ '--rm-c-t': '1.2s' }}><b>“C”</b><small>10:06</small></span><span className="rm-c rm-na">·</span>
              <span className="rm-sw" style={{ '--rm-e': '1.3s' }}><Status end="st-landed" label="Confirmed" /></span></div>
            <div className="rm-r rm-r2" style={{ '--rm-t': '.3s' }}><time>09:00</time><span className="rm-p"><b>D.K.</b><small>First visit</small></span>
              <span className="rm-c rm-tx" style={{ '--rm-c-t': '1.5s' }}><b>“Can I move to Thursday?”</b><small>10:41</small></span><span className="rm-c rm-na">·</span>
              <span className="rm-sw" style={{ '--rm-e': '1.6s' }}><Status end="st-landed" label="Moved · Thu 11:00" /></span></div>
            <div className="rm-r rm-r3" style={{ '--rm-t': '.4s' }}><time>09:30</time><span className="rm-p"><b>R.S.</b><small>Back pain</small></span>
              <span className="rm-c rm-tx rm-q" style={{ '--rm-c-t': '2.3s' }}><b>No reply</b><small>by 16:00</small></span>
              <span className="rm-c rm-cl" style={{ '--rm-c-t': '3.2s' }}><b>Confirmed</b><small>1 min 04 s</small></span>
              <span className="rm-sw" style={{ '--rm-e': '3.3s' }}><Status end="st-landed" label="Confirmed" /></span></div>
            <div className="rm-r rm-r4" style={{ '--rm-t': '.5s' }}><time>10:00</time><span className="rm-p"><b>L.P.</b><small>Follow-up</small></span>
              <span className="rm-c rm-tx" style={{ '--rm-c-t': '1.8s' }}><b>“C”</b><small>11:12</small></span><span className="rm-c rm-na">·</span>
              <span className="rm-sw" style={{ '--rm-e': '1.9s' }}><Status end="st-landed" label="Confirmed" /></span></div>
            <div className="rm-r rm-r5" style={{ '--rm-t': '.6s' }}><time>10:30</time><span className="rm-p"><b>T.W.</b><small>Shoulder</small></span>
              <span className="rm-c rm-tx rm-q" style={{ '--rm-c-t': '2.3s' }}><b>No reply</b><small>by 16:00</small></span>
              <span className="rm-c rm-cl rm-q" style={{ '--rm-c-t': '3.6s' }}><b>No answer</b><small>16:05</small></span>
              <span className="rm-sw" style={{ '--rm-e': '3.7s' }}><Status end="st-needs" label="Second text sent" /></span></div>
          </section>
          <p className="rm-note ax-fade" style={{ '--d': '.18s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>Says it’s an AI</span><span>Calls only if they agreed</span></p>
          <div className="ax-toast rm-toast"><Sig c="st-needs" /><p><b>1 patient to reach</b><span>Riverside</span></p><span className="ax-btn">Review</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
