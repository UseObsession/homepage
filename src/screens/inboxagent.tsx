/* The inboxagent app screen (Inbox agent, 23 Nov 2026): 1 720 x 450 window of the product, at rest on its finished scene;
   AppScreen adds .play to its root to run the story. Its look and story: css/inboxagent.css, loaded by the page, never
   imported here. An AI email agent on support@northpine.example (Northpine is invented): the morning's threads on the
   left, Dana's open on the right. Her order question lands at 09:14:02, the reader's own handler looks the order up, and
   the reply leaves in her thread at 09:14:41, signed as Northpine's AI assistant. Sam's £240 refund went to a person in
   Slack; Priya's "Send it" arrives and his reply goes out. */

const Sig = ({ cls }: { cls: string }) => (
  <svg className={`sig ${cls}`} viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
)

/* 1 thread in the list: who, when, the subject and how it ended. */
const Row = ({ who, at, subject, end, cls = '' }: { who: string; at: string; subject: string; end: string; cls?: string }) => (
  <div className={`ia-it ${cls}`}>
    <span className="ia-r1"><b>{who}</b><time>{at}</time></span>
    <span className="ia-r2"><span className="ia-sj">{subject}</span><span className="ia-st"><span className="ia-mk"><Sig cls="st-landed" /></span>{end}</span></span>
  </div>
)

export function InboxagentScreen() {
  return (
    <div className="il appx-il app-inboxagent"><div className="appx-fit"><div className="appx" role="img" aria-label="An Inbox agent answering support@northpine.example, an online homeware brand’s support address, signed as Northpine’s AI assistant. The morning’s threads are listed on the left, each answered in under a minute except Sam’s refund. Dana’s thread is open: at 09:14:02 she asks where order 4471 is, at 09:14:03 the company’s own handler looks it up and finds it left the warehouse on Monday and arrives Thursday, and at 09:14:41 the agent replies in her thread with the tracking link, 39 seconds after she wrote. Sam’s £240 refund was handed to a person in Slack with a draft; Priya replies Send it in #support, and his reply goes out at 09:33. Refunds always go to a person, and every reply says it comes from an AI assistant.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Agents<span>/</span>support@northpine.example</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>AM</span><span>JO</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>Your company</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><circle cx="8" cy="5.5" r="2.5" /><path d="M3.25 13.25c.6-2.4 2.5-3.75 4.75-3.75s4.15 1.35 4.75 3.75" strokeLinecap="round" /></svg>Agents<em>3</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Blueprints</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="ia-nb"><b>2</b><b>1</b></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Event log</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Inboxes</p>
            <a className="on" role="none"><i />support@</a><a role="none"><i />sales@</a><a role="none"><i />billing@</a>
          </div>
          <div className="ax-side-f"><Sig cls="st-working moving" /><span><b>3</b> inbox agents live</span></div>
        </aside>
        <div className="ax-main">
          <header className="ia-h ax-fade">
            <h2>Inbox agent</h2><span className="ia-meta">Always on</span>
            <span className="ia-id"><span className="ia-av"><Sig cls="" /></span>Signs as Northpine’s AI assistant</span>
          </header>

          <section className="ia-bd ax-fade" style={{ '--d': '.06s' }}>
            {/* the morning's threads, newest first; Dana's is open */}
            <div className="ia-ls">
              <p className="ia-lh"><b>Today</b><span>42 threads</span></p>
              <div className="ia-it ia-sam">
                <span className="ia-r1"><b>Sam K.</b><time>09:31</time></span>
                <span className="ia-r2"><span className="ia-sj">Damaged sofa, refund?</span><span className="ia-st ia-sw"><span className="v0"><span className="ia-mk"><Sig cls="st-waiting" /></span>#support</span><span className="v1"><span className="ia-mk"><Sig cls="st-landed" /></span>Approved</span></span></span>
              </div>
              <Row who="Jo M." at="09:22" subject="Change my delivery day" end="44 s" />
              <Row who="Dana R." at="09:14" subject="Where’s my order 4471?" end="39 s" cls="on" />
              <Row who="Ade O." at="09:05" subject="Do you ship to Ireland?" end="31 s" />
              <Row who="Lin W." at="08:52" subject="Invoice for order 4402" end="52 s" />
              <p className="ia-lf"><span><b>38</b> answered</span><span><b>4</b> to a person</span></p>
            </div>

            {/* Dana's thread: her email, the lookup, the reply, timed */}
            <div className="ia-th">
              <header className="ia-thh"><b>Where’s my order 4471?</b><span>dana@inbox.example</span></header>
              <div className="ia-m ia-in" style={{ '--ia-t': '.55s' }}>
                <span className="ia-fr"><b>Dana R.</b><time>09:14:02</time></span>
                <p>Hi, where’s my order 4471? It was due Tuesday and I haven’t heard anything.</p>
              </div>
              <div className="ia-tool" style={{ '--ia-t': '1.05s' }}>
                <span className="ia-mk"><Sig cls="st-working w0" /><Sig cls="st-landed w1" /></span>
                <span className="ia-tl">Your handler</span><span className="ia-tt">4471 shipped Mon, due Thu</span>
              </div>
              <div className="ia-m ia-out" style={{ '--ia-t': '2.35s' }}>
                <span className="ia-fr"><span className="ia-av"><Sig cls="" /></span><b>Northpine’s AI assistant</b><time>09:14:41</time></span>
                <span className="ia-wr" aria-hidden="true"><i /><i /><i /></span>
                <p className="ia-tx">Hi Dana, order 4471 left our warehouse on Monday and arrives on Thursday. Track it at track.northpine.example/4471.</p>
              </div>
              <p className="ia-ev" style={{ '--ia-t': '2.8s' }}><span>email.received</span><i aria-hidden="true" /><span>email.sent</span><b>39 s</b></p>
            </div>
          </section>

          <p className="ia-note ax-fade" style={{ '--d': '.18s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>Every reply signed as an AI</span><span>Refunds go to a person</span></p>
          <div className="ax-toast ia-toast"><Sig cls="st-landed" /><p><b>Sam’s reply sent</b><span>Priya’s OK in #support</span></p><span className="ax-btn ghost">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
