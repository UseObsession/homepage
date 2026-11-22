/* The missedcall app screen (Missed call text back, 23 Nov 2026): 1 720 x 450 window of the product, at rest on its
   finished scene; AppScreen adds .play to its root to run the story. Its look and story: css/missedcall.css, loaded by
   the page, never imported here. Drawn for Ridgeline Plumbing, an invented company with 6 branch lines, at Tue 12:45:
   today's missed calls on the left, the 12:04 Eastside caller's text thread on the right, from the forwarded call to the
   booking. Everything adds up: 19 missed so far, every caller texted (median 7 s), 11 replied, 8 booked; the list shows 6
   of them. Phone numbers sit in the 555-01xx range kept for fiction. */

/* The signature mark, in the state its class names (kit.css: working, waiting, needs you, landed). */
function Sig({ c = '' }: { c?: string }) {
  return (
    <svg className={`sig ${c}`.trim()} viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
  )
}

/* A phone handset with a small cross: a call nobody answered. */
function Missed() {
  return (
    <svg className="mc-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.25 3h1.9l.95 2.6-1.3.95a6.6 6.6 0 0 0 3.15 3.15l.95-1.3 2.6.95v1.9a1.25 1.25 0 0 1-1.25 1.25A9.75 9.75 0 0 1 3 4.25 1.25 1.25 0 0 1 4.25 3Z" /><path d="M10.25 2.5l3 3M13.25 2.5l-3 3" /></svg>
  )
}

export function MissedcallScreen() {
  return (
    <div className="il appx-il app-missedcall"><div className="appx-fit"><div className="appx" role="img" aria-label="Missed call text back, running for Ridgeline Plumbing, an invented company with 6 branch lines that forward their unanswered calls to an AI assistant’s number. By 12:45 on Tuesday, 19 calls have gone unanswered, every caller got a text with a median of 7 seconds, 11 replied and 8 have booked. One thread plays: a call to the Eastside branch rings out at 12:04:11 and is forwarded; 7 seconds later the caller gets a text saying it’s Ridgeline’s AI assistant and asking how it can help; the caller says their water heater is leaking and asks for someone today; the assistant offers 3 to 5 pm today and the $79 service call fee from the price list; the caller says yes, and the visit is booked in the Eastside calendar and posted to the team’s front desk channel in Slack. The assistant says it’s an AI and texts only the number that called.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Ridgeline Plumbing</b><span>/</span>Blueprints<span>/</span>Missed call text back</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>DM</span><span>KR</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>R</i>Ridgeline</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Blueprints<em>3</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 3.25h10.5v7.5H7.5l-3 2.25v-2.25H2.75Z" /></svg>Conversations<em>19</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge">1</span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Event log</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Branches</p>
            <a role="none"><i />Eastside</a><a role="none"><i />Northgate</a><a role="none"><i />Westfield</a><a role="none"><i />Southbank</a><a role="none"><i />Hillcrest</a><a role="none"><i />Old Town</a>
          </div>
          <div className="ax-side-f"><Sig c="st-working moving" /><span><b>6</b> lines answered</span></div>
        </aside>
        <div className="ax-main">
          <header className="mc-h ax-fade">
            <h2>Missed call text back</h2><span className="mc-meta">6 lines · always on</span>
            <span className="mc-id"><span className="mc-av"><Sig /></span>AI assistant for Ridgeline</span>
          </header>
          {/* today so far: the counts the list and thread below add up to */}
          <section className="mc-st ax-fade" style={{ '--d': '.06s' }}>
            <span><b>19</b><em>missed today</em></span>
            <span><b>7 s</b><em>median to text</em></span>
            <span><b className="mc-nb"><i>10</i><i>11</i></b><em>replied</em></span>
            <span><b className="mc-nb"><i>7</i><i>8</i></b><em>booked</em></span>
          </section>
          <div className="mc-pn">
            {/* today's missed calls, newest first; 12:04 Eastside is open on the right */}
            <section className="mc-ls ax-fade" style={{ '--d': '.12s' }}>
              <header className="mc-lh"><b>Missed calls</b><span>Tue · newest first</span></header>
              <div className="mc-r" style={{ '--mc-t': '.2s' }}><time>12:41</time><span className="mc-who"><b>Northgate</b><small>··· 0142</small></span><span className="mc-cp mc-c-wait"><Sig c="st-waiting moving" />Texted</span></div>
              <div className="mc-r" style={{ '--mc-t': '.3s' }}><time>12:22</time><span className="mc-who"><b>Westfield</b><small>··· 0119</small></span><span className="mc-cp mc-c-ok"><Sig c="st-landed" />Booked</span></div>
              <div className="mc-r mc-on" style={{ '--mc-t': '.4s' }}><time>12:04</time><span className="mc-who"><b>Eastside</b><small>··· 0187</small></span>
                <span className="mc-cp mc-c-ok mc-sw"><span className="v0"><Missed />Rang out</span><span className="v1"><Sig c="st-waiting" />Texted</span><span className="v2"><Sig c="st-landed" />Booked</span></span></div>
              <div className="mc-r" style={{ '--mc-t': '.5s' }}><time>11:47</time><span className="mc-who"><b>Eastside</b><small>··· 0163</small></span><span className="mc-cp mc-c-need"><Sig c="st-needs" />A person</span></div>
              <div className="mc-r" style={{ '--mc-t': '.6s' }}><time>11:30</time><span className="mc-who"><b>Southbank</b><small>··· 0131</small></span><span className="mc-cp mc-c-ok"><Sig c="st-landed" />Booked</span></div>
              <div className="mc-r" style={{ '--mc-t': '.7s' }}><time>11:12</time><span className="mc-who"><b>Hillcrest</b><small>··· 0175</small></span><span className="mc-cp mc-c-dim">No reply</span></div>
            </section>
            {/* the open thread: the forwarded call, 4 texts, the booking */}
            <section className="mc-th ax-fade" style={{ '--d': '.18s' }}>
              <header className="mc-thh"><span className="mc-ph"><Missed /></span><b>(512) 555-0187</b><em>Eastside</em><span className="mc-tag">Water heater</span></header>
              <div className="mc-tb">
                <p className="mc-sys mc-s1" style={{ '--mc-t': '.9s' }}><Missed /><time>12:04:11</time><span>Rang out after 5 rings, forwarded</span></p>
                <div className="mc-msg mc-out mc-m1" style={{ '--mc-t': '1.5s' }}><time className="mc-fast">+7 s</time><p>Sorry we missed you. I’m Ridgeline’s AI assistant. How can I help?</p></div>
                <div className="mc-msg mc-in mc-m2" style={{ '--mc-t': '2.4s' }}><p>Water heater’s leaking. Can someone come today?</p><time>12:05:02</time></div>
                <div className="mc-msg mc-out mc-m3" style={{ '--mc-t': '3.1s' }}><time>12:05:09</time><p>Today, 3 to 5 pm works. The service call is $79. Book it?</p></div>
                <div className="mc-msg mc-in mc-m4" style={{ '--mc-t': '3.9s' }}><p>Yes please</p><time>12:06:40</time></div>
                <p className="mc-sys mc-done" style={{ '--mc-t': '4.6s' }}><Sig c="st-landed" /><b>Booked · Eastside · Tue 3 to 5 pm</b><span>#front-desk</span></p>
              </div>
            </section>
          </div>
          <p className="mc-note ax-fade" style={{ '--d': '.24s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>Says it’s an AI</span><span>Texts only the caller</span></p>
          <div className="ax-toast mc-toast"><Sig c="st-landed" /><p><b>Booked: water heater</b><span>Eastside · Tue 3 to 5 pm</span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
