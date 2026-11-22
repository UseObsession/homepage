/* The callback app screen (Speed-to-lead callback, /blueprints/speed-to-lead-callback): 1 720 x 450 window of the
   product, at rest on its finished scene; AppScreen adds .play to its root to run the story. Its look and story:
   css/callback.css, loaded by the page, never imported here. Drawn for a company. Sunmere Solar is invented
   (sunmere-solar.example); the agent's number is in the 555-01xx range kept for fiction.
   The 1 thing: a form lead at 14:02:07 is called at 14:02:46 (39 s), and the call books a survey that lands on her CRM
   contact. Today: 41 leads, a median of 0:44 to first call, 83% reached (34), 17 booked (16 before Maria). */

const SIG = (
  <g className="sig-rot">
    <path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" />
    <path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" />
    <g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g>
  </g>
)
const Sig = ({ c }: { c: string }) => (
  <svg className={`sig ${c}`} viewBox="2 2 96 96" aria-hidden="true">{SIG}</svg>
)

/* The day's leads, in the order their forms arrived. `s` is how long from form to first ring. */
const LEADS = [
  { t: '13:48', who: 'Aaron', src: 'Quote form', s: '0:41', out: 'Booked', note: 'Wed 15:00', st: 'st-landed' },
  { t: '13:55', who: 'Lena', src: 'Ad page', s: '0:47', out: 'Transferred', note: 'to an adviser', st: 'st-landed' },
  { t: '14:02', who: 'Maria', src: 'Quote form', s: '0:39', out: 'Booked', note: 'Thu 10:00', st: 'st-landed' },
  { t: '14:08', who: 'Dev', src: 'Ad page', s: '0:42', out: 'Missed, texted', note: 'call at 17:00', st: 'st-waiting' },
  { t: '14:16', who: 'Tom', src: 'Quote form', s: '0:51', out: 'Call back', note: 'Fri 12:00', st: 'st-waiting' },
]

/* Form to first ring as a bar: a minute across 76px. */
const secs = (s: string) => {
  const [m, x] = s.split(':').map(Number)
  return m * 60 + x
}

export function CallbackScreen() {
  return (
    <div className="il appx-il app-callback"><div className="appx-fit"><div className="appx" role="img" aria-label="Speed-to-lead callback at Sunmere Solar, an example company. Every new quote request is called within a minute by the company’s AI assistant, from 08:00 to 21:00 in the lead’s time zone, and only leads who agreed to a call are called. Today: 41 leads, a median of 44 seconds to the first call, 83% reached and 17 surveys booked. Maria’s form arrives at 14:02:07 and she is called 39 seconds later. The assistant says it is an AI and that the call is recorded, saves her answers (a south-facing roof, she owns the house, bills of about $190 a month) and books a home survey for Thursday at 10:00, which lands on her CRM contact as the call ends. Dev misses his call at 14:09, gets a text, and is called back at 17:00.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Blueprints<span>/</span>Speed-to-lead callback</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>RK</span><span>SL</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>Your company</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Blueprints<em>3</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M5.25 2.75h-1.5a1 1 0 0 0-1 1.1c.5 4.9 4.5 8.9 9.4 9.4a1 1 0 0 0 1.1-1v-1.5l-2.5-1-1.25 1.25a7 7 0 0 1-3-3L7.25 6.5l-1-2.5Z" /></svg>Calls<em>41</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Event log</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Running</p>
            <a className="on" role="none"><i />Speed-to-lead callback</a><a role="none"><i />Missed call text-back</a><a role="none"><i />Appointment reminders</a>
          </div>
          <div className="ax-side-f"><Sig c="st-landed" /><span><b>12</b> locations live</span></div>
        </aside>
        <div className="ax-main">
          <header className="cb-h ax-fade">
            <h2>Speed-to-lead callback</h2><span className="cb-meta">Sunmere Solar · 08:00 to 21:00</span>
            <span className="cb-id"><span className="cb-av"><Sig c="" /></span>+1 (555) 010-4417</span>
          </header>

          {/* the day's leads, each with seconds from form to first ring; Maria's row is the one open below */}
          <section className="cb-q ax-fade" style={{ '--d': '.06s' }}>
            <div className="cb-kp">
              <span className="cb-k"><b>41</b>leads today</span>
              <span className="cb-k"><b>0:44</b>median to first call</span>
              <span className="cb-k"><b>83%</b>reached</span>
              <span className="cb-k"><b className="cb-nb"><i>16</i><i>17</i></b>booked</span>
            </div>
            {LEADS.map((l, i) => (
              <div key={l.who} className={`cb-ln cb-l${i + 1}`}>
                <time>{l.t}</time>
                <span className="cb-who"><b>{l.who}</b><em>{l.src}</em></span>
                <span className="cb-s"><i className="cb-bar" style={{ '--cb-w': `${(secs(l.s) / 60) * 76}px` }} aria-hidden="true" /><span>{l.s}</span></span>
                <span className="cb-out"><span className="cb-mk"><Sig c={l.st} /></span><b>{l.out}</b><em>{l.note}</em></span>
              </div>
            ))}
          </section>

          {/* Maria's call as it happened: each line timed, each answer saved as a field */}
          <section className="cb-call ax-fade" style={{ '--d': '.12s' }}>
            <header className="cb-ch">
              <span className="cb-pl" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M5.5 3.75v8.5L12.25 8Z" /></svg></span>
              <b>Maria</b><em>Form 14:02:07 · called 14:02:46 · 2:16</em>
              <span className="cb-cs"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Agreed to a call on the form</span>
            </header>
            <div className="cb-r cb-r1">
              <span className="cb-tx"><span className="cb-sp"><time>00:01</time>AI assistant</span><span className="cb-qt">“Hi Maria, I’m Sunmere’s AI assistant.”</span></span>
              <span className="cb-ck"><span className="cb-cn"><span className="cb-mk"><Sig c="st-landed" /></span>Said it’s an AI, call recorded</span><span className="cb-rl">First sentence · 00:01 to 00:06</span></span>
            </div>
            <div className="cb-r cb-r2">
              <span className="cb-tx"><span className="cb-sp"><time>00:34</time>Maria</span><span className="cb-qt">“It faces south, and we own the house.”</span></span>
              <span className="cb-ck"><span className="cb-fd"><i>Roof · south</i><i>Owner · yes</i><em>Saved</em></span></span>
            </div>
            <div className="cb-r cb-r3">
              <span className="cb-tx"><span className="cb-sp"><time>01:05</time>Maria</span><span className="cb-qt">“About $190 a month.”</span></span>
              <span className="cb-ck"><span className="cb-fd"><i>Bill · $190 a month</i><em>Saved</em></span></span>
            </div>
            <div className="cb-r cb-r4">
              <span className="cb-tx"><span className="cb-sp"><time>01:52</time>AI assistant</span><span className="cb-qt">“You’re booked for Thursday at 10:00.”</span></span>
              <span className="cb-ck"><span className="cb-cn"><span className="cb-mk"><Sig c="st-landed" /></span>Home survey booked</span><span className="cb-rl">Survey calendar · Thu 10:00</span></span>
            </div>
          </section>

          <p className="cb-note ax-fade" style={{ '--d': '.18s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>Only leads who agreed to a call</span><span>STOP ends calls and texts</span></p>
          <div className="ax-toast cb-toast"><Sig c="st-landed" /><p><b>Maria booked</b><span>Thu 10:00, in the CRM</span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
