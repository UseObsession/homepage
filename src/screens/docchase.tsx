/* The docchase app screen (Document chaser, /blueprints/document-chaser): 1 720 x 450 window of the product, at rest on
   its finished scene; AppScreen adds .play to its root to run the story. Its look and story: css/docchase.css, loaded by
   the page, never imported here. Drawn for a company. Fernhill Lending is invented (fernhill-lending.example).
   The 1 thing: Priya's October statement stops on the 14th, is sent back the minute it arrives, and her file is complete
   on Thursday at 10:22 with nobody on the team chasing. Applied Mon 09:00, so Thursday is day 4. */

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

/* A document's cell: in (landed), asked and not yet sent (a dashed box), or sent and wrong (needs you). */
type Cell = [kind: 'ok' | 'no' | 'bad', text: string]
const Doc = ({ c }: { c: Cell }) => (
  <span className={`dc-c dc-${c[0]}`}>
    <span className="dc-mk">{c[0] === 'no' ? <i className="dc-box" /> : <Sig c={c[0] === 'ok' ? 'st-landed' : 'st-needs'} />}</span>
    {c[1]}
  </span>
)

/* The open files below Priya's (hers is drawn on its own, as its cells change in the story). */
const FILES: { who: string; day: string; docs: [Cell, Cell, Cell]; st: string; mark: string }[] = [
  { who: 'Marcus O.', day: 'Day 2', docs: [['ok', 'Sep, Oct'], ['no', 'Asked'], ['ok', 'Lease']], st: 'Text at 18:30', mark: 'st-waiting' },
  { who: 'Hannah W.', day: 'Day 3', docs: [['bad', 'Oct only'], ['ok', 'Aug to Oct'], ['no', 'Asked']], st: 'Asked for Sep', mark: 'st-waiting' },
  { who: 'Dana K.', day: 'Day 6', docs: [['no', 'Asked'], ['no', 'Asked'], ['no', 'Asked']], st: 'With Sam', mark: 'st-needs' },
  { who: 'Luis R.', day: 'Day 1', docs: [['no', 'Asked'], ['no', 'Asked'], ['no', 'Asked']], st: 'List sent', mark: 'st-waiting' },
]

export function DocchaseScreen() {
  return (
    <div className="il appx-il app-docchase"><div className="appx-fit"><div className="appx" role="img" aria-label="Document chaser at Fernhill Lending, an example lender: its AI assistant emails each personal loan applicant the documents it needs (2 payslips, 3 months of bank statements and a proof of address), reminds them by email and text, and checks each file as it arrives. Priya applied on Monday at 09:00. Her payslips arrive Tuesday at 08:12 and pass. On Wednesday she texts to ask whether a screenshot works and is answered a minute later. Her bank statements arrive at 13:05, and the October one stops on the 14th, so the assistant asks for the full month. On Thursday at 10:22 the full statement and a utility bill arrive, every document passes, and her file goes to underwriting. Other files show what each applicant still owes, and one file that went quiet after 6 days is with a person on the team. Texts go only to applicants who agreed to them, and the assistant says it is an AI.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Blueprints<span>/</span>Document chaser</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>SA</span><span>PN</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>Your company</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Blueprints<em>3</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge">1</span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Event log</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Running</p>
            <a className="on" role="none"><i />Document chaser</a><a role="none"><i />Speed-to-lead callback</a><a role="none"><i />Appointment reminders</a>
          </div>
          <div className="ax-side-f"><Sig c="st-landed" /><span><b>128</b> files open</span></div>
        </aside>
        <div className="ax-main">
          <header className="dc-h ax-fade">
            <h2>Document chaser</h2><span className="dc-meta">Personal loans</span>
            <span className="dc-id"><span className="dc-av"><Sig c="" /></span>documents@fernhill-lending.example</span>
          </header>

          {/* every open file: what each applicant has sent, what's still asked for, and where the file stands */}
          <section className="dc-fl ax-fade" style={{ '--d': '.06s' }}>
            <div className="dc-kp">
              <span className="dc-k"><b>128</b>files open</span>
              <span className="dc-k"><b className="dc-nb"><i>22</i><i>23</i></b>complete today</span>
              <span className="dc-k"><b>2.6</b>days to complete</span>
              <span className="dc-k"><b>4</b>with your team</span>
            </div>
            <div className="dc-hd"><span>Applicant</span><span>Payslips</span><span>Bank statements</span><span>Proof of address</span><span>Where it stands</span></div>
            <div className="dc-ln dc-l1">
              <span className="dc-who"><b>Priya S.</b><em>Day 4</em></span>
              <Doc c={['ok', 'Sep, Oct']} />
              <span className="dc-sw">
                <span className="v0"><Doc c={['no', 'Asked']} /></span>
                <span className="v1"><Doc c={['bad', 'Oct short']} /></span>
                <span className="v2"><Doc c={['ok', 'Aug to Oct']} /></span>
              </span>
              <span className="dc-sw dc-ad">
                <span className="v0"><Doc c={['no', 'Asked']} /></span>
                <span className="v2"><Doc c={['ok', 'Utility bill']} /></span>
              </span>
              <span className="dc-sw dc-st">
                <span className="v0"><span className="dc-c"><span className="dc-mk"><Sig c="st-waiting" /></span>Chasing</span></span>
                <span className="v2"><span className="dc-c dc-done"><span className="dc-mk"><Sig c="st-landed" /></span>Complete</span></span>
              </span>
            </div>
            {FILES.map((f, i) => (
              <div key={f.who} className={`dc-ln dc-l${i + 2}`}>
                <span className="dc-who"><b>{f.who}</b><em>{f.day}</em></span>
                {f.docs.map((d, j) => <Doc key={j} c={d} />)}
                <span className="dc-c"><span className="dc-mk"><Sig c={f.mark} /></span>{f.st}</span>
              </div>
            ))}
          </section>

          {/* Priya's file, as it happened: each event in the order it arrived, and what the assistant made of it */}
          <section className="dc-tl ax-fade" style={{ '--d': '.12s' }}>
            <header className="dc-th">
              <b>Priya S.</b><em>Personal loan · applied Mon 09:00</em>
              <span className="dc-ts">Reminders on days 1 to 5 · 08:00 to 21:00</span>
            </header>
            <div className="dc-r dc-r1">
              <time>Tue 08:12</time><code>email.received</code><span className="dc-tx">2 payslips attached</span>
              <span className="dc-rs"><span className="dc-mk"><Sig c="st-landed" /></span>Sep and Oct, her name</span>
            </div>
            <div className="dc-r dc-r2">
              <time>Wed 12:40</time><code>sms.received</code><span className="dc-tx">“Does a screenshot work?”</span>
              <span className="dc-rs"><span className="dc-mk"><Sig c="st-landed" /></span>Answered at 12:41</span>
            </div>
            <div className="dc-r dc-r3">
              <time>Wed 13:05</time><code>email.received</code><span className="dc-tx">3 bank statements</span>
              <span className="dc-rs"><span className="dc-mk"><Sig c="st-needs" /></span>October stops on the 14th</span>
            </div>
            <div className="dc-r dc-r4">
              <time>Thu 10:22</time><code>email.received</code><span className="dc-tx">Full October, utility bill</span>
              <span className="dc-rs"><span className="dc-mk"><Sig c="st-landed" /></span>File complete</span>
            </div>
          </section>

          <p className="dc-note ax-fade" style={{ '--d': '.18s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>Texts only with consent</span><span>Says it’s an AI assistant</span></p>
          <div className="ax-toast dc-toast"><Sig c="st-landed" /><p><b>Priya’s file is complete</b><span>To underwriting</span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
