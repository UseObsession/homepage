/* The imessage app screen (iMessage assistant, 23 Nov 2026): 1 720 x 450 window of the product, at rest on its finished
   scene; AppScreen adds .play to its root to run the story. Its look and story: css/imessage.css, loaded by the page,
   never imported here. Mabel (invented, mabel.example) is an AI assistant on its own iMessage line and UK number. Left:
   Maya's iMessage thread, the assistant's bubbles in full ink (the brand's black and white for iMessage's blue): its
   first message says it's an AI, then Maya's receipt photo and the split. Right: the event log, row by row, including
   Leo texting the number from an Android phone for a reminder. */

const Sig = ({ cls }: { cls: string }) => (
  <svg className={`sig ${cls}`} viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
)

export function ImessageScreen() {
  return (
    <div className="il appx-il app-imessage"><div className="appx-fit"><div className="appx" role="img" aria-label="An iMessage assistant called Mabel, an AI agent on its own iMessage line and UK number. In Maya’s iMessage thread, Mabel’s first message, on Monday, says it is an AI assistant. On Friday at 19:41 Maya sends a photo of a dinner receipt and asks to split it 4 ways; a sandbox reads 7 items and the 12.5% service charge, £93.60 in all, and Mabel replies in the thread 3 seconds after the photo: £23.40 each, service included, and Maya reads it. In the event log beside it, Leo texts Mabel’s number from an Android phone at 19:44 asking for a reminder at 6 the next evening, Mabel texts back 2 seconds later, and the reminder is set for Saturday at 18:00. Mabel texts only people who messaged it first.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Agents<span>/</span>Mabel</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>AM</span><span>JO</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>Your company</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><circle cx="8" cy="5.5" r="2.5" /><path d="M3.25 13.25c.6-2.4 2.5-3.75 4.75-3.75s4.15 1.35 4.75 3.75" strokeLinecap="round" /></svg>Agents<em>1</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Blueprints</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M3.25 3.25h9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.5l-3.25 2.5v-2.5h-1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z" /></svg>Threads<em>214</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Event log</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Mabel’s channels</p>
            <a className="on" role="none"><i />iMessage</a><a role="none"><i />Texts · UK</a><a role="none"><i />Email</a>
          </div>
          <div className="ax-side-f"><Sig cls="st-working moving" /><span><b>1</b> line · <b>1</b> number</span></div>
        </aside>
        <div className="ax-main">
          <header className="im-h ax-fade">
            <h2>iMessage assistant</h2><span className="im-meta">Mabel · always on</span>
            <span className="im-id">Says it’s an AI first<span className="ax-toggle" aria-hidden="true" /></span>
          </header>

          <section className="im-bd ax-fade" style={{ '--d': '.06s' }}>
            {/* Maya's iMessage thread, as she sees it */}
            <div className="im-ph">
              <header className="im-ct"><span className="im-pa">M</span><span className="im-who"><b>Maya</b><em>iMessage</em></span></header>
              <div className="im-cv">
                <span className="im-dy">Mon 10:12</span>
                <p className="im-b im-o">Hi Maya, I’m Mabel, an AI assistant.</p>
                <span className="im-dy">Fri 19:41</span>
                <span className="im-pic im-i1" aria-hidden="true"><span className="im-rc"><i /><i /><i /><i /><i className="im-tot" /></span></span>
                <p className="im-b im-i im-i2">Split this 4 ways?</p>
                <span className="im-ty" aria-hidden="true"><i /><i /><i /></span>
                <p className="im-b im-o im-o2">£23.40 each, service included.</p>
                <span className="im-rd">Read 19:41</span>
              </div>
            </div>

            {/* the event log: every message, the sandbox's working, each reply */}
            <div className="im-lg">
              <p className="im-lh"><b>Event log</b><span>Fri, newest last</span></p>
              <div className="im-r im-r1">
                <span className="im-l1"><time>19:41:02</time><code>message.received</code><span>Maya</span></span>
                <span className="im-l2">Photo of a receipt, “Split this 4 ways?”</span>
              </div>
              <div className="im-r im-r2">
                <span className="im-l1"><time>19:41:04</time><code>sandbox.finished</code><span className="im-mk"><Sig cls="st-working w0" /><Sig cls="st-landed w1" /></span></span>
                <span className="im-l2">7 items + 12.5% service = £93.60</span>
              </div>
              <div className="im-r im-r3 im-rp">
                <span className="im-l1"><time>19:41:05</time><span className="im-re"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6.5 4.5 3 8l3.5 3.5M3.5 8h6a3.5 3.5 0 0 1 3.5 3.5" /></svg>Reply on iMessage</span><span>3 s</span></span>
                <span className="im-l2">“£23.40 each, service included.”</span>
              </div>
              <div className="im-r im-r4">
                <span className="im-l1"><time>19:44:10</time><code>sms.received</code><span>Leo · UK +44</span></span>
                <span className="im-l2">“Remind me at 6 tomorrow to call Mum.”</span>
              </div>
              <div className="im-r im-r5 im-rp">
                <span className="im-l1"><time>19:44:12</time><span className="im-re"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6.5 4.5 3 8l3.5 3.5M3.5 8h6a3.5 3.5 0 0 1 3.5 3.5" /></svg>Reply by text</span><span>2 s</span></span>
                <span className="im-l2">“Done. I’ll text you at 18:00 tomorrow.”</span>
              </div>
            </div>
          </section>

          <p className="im-note ax-fade" style={{ '--d': '.18s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>Texts only people who asked</span><span>Stops before payment</span></p>
          <div className="ax-toast im-toast"><Sig cls="st-landed" /><p><b>Reminder set for Leo</b><span>By text, Sat 18:00</span></p><span className="ax-btn ghost">View</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
