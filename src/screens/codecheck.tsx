/* The codecheck app screen (Sign-in code check, 23 Nov 2026): 1 720 x 450 window of the product, at rest on its finished
   scene; AppScreen adds .play to its root to run the story. Its look and story: css/codecheck.css, loaded by the page,
   never imported here. Every night at 02:00, 4 personas sign in to Fernpay (invented, fernpay.example) with its own test
   accounts and ask for a one-time code: by text on a US and a UK number, by email and by a call. Top: the 4 codes on 1
   clock (0 to 8 minutes across 300px, 37.5px a minute; the track starts 144px into the card), with Fernpay's 5 minute
   expiry as a line and everything after it hatched. The 1 thing: the UK text lands at 6:40, inside the hatched zone.
   Below: that code as evidence, the text itself beside the sign-in page that refused it. */

const Sig = ({ cls }: { cls: string }) => (
  <svg className={`sig ${cls}`} viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
)

const TextIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M3.25 3.25h9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.5l-3.25 2.5v-2.5h-1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z" /></svg>
)
const MailIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5" /><path d="m2.75 4.5 5.25 4 5.25-4" strokeLinecap="round" /></svg>
)
const CallIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M5.6 2.75H3.5a.75.75 0 0 0-.75.8 10.5 10.5 0 0 0 9.7 9.7.75.75 0 0 0 .8-.75v-2.1l-2.6-1-1.3 1.3a7.5 7.5 0 0 1-3.55-3.55L7.1 5.85Z" /></svg>
)

export function CodecheckScreen() {
  return (
    <div className="il appx-il app-codecheck"><div className="appx-fit"><div className="appx" role="img" aria-label="A Sign-in code check on Fernpay’s own test accounts, every night at 02:00. 4 personas ask for a one-time sign-in code: by text on a US number, by text on a UK number, by email and by a phone call, and each code is timed on one clock against Fernpay’s 5 minute expiry. The US text arrives in 4 seconds, the email in 9 seconds and the call reads its code aloud at 21 seconds, and all 3 sign in. The UK text arrives at 6 minutes 40 seconds, 1 minute 40 seconds after the code expired. Typed in, the sign-in page says the code has expired, so that sign-in fails. The text and the screenshot are kept, and an alert goes to Slack #auth-alerts at 02:06.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Watches<span>/</span>Fernpay sign-in</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>AM</span><span>JO</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>Your company</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5h10M3 8h10M3 11.5h6" /></svg>Watches<em>12</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Blueprints</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="cd-nb"><b>0</b><b>1</b></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Event log</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Sign-ins</p>
            <a className="on" role="none"><i />Fernpay app</a><a role="none"><i />Fernpay web</a><a role="none"><i />Admin console</a>
          </div>
          <div className="ax-side-f"><Sig cls="st-working moving" /><span><b>4</b> channels nightly</span></div>
        </aside>
        <div className="ax-main">
          <header className="cd-h ax-fade">
            <h2>Sign-in code check</h2><span className="cd-meta">4 sign-ins · nightly 02:00</span>
            <span className="cd-id"><span className="cd-lk"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="8" cy="8.5" r="5.25" /><path d="M8 5.75V8.5l1.75 1.25M6.5 2h3" /></svg></span>Code expires after 5:00</span>
          </header>

          {/* the 4 codes on 1 clock: 0 to 8 minutes across 300px; the expiry line at 187.5px, hatched after it */}
          <section className="cd-tl ax-fade" style={{ '--d': '.06s' }}>
            <div className="cd-ru">
              <span className="cd-ch">Channel</span>
              <b style={{ '--cd-x': '144px' }}>0:00</b><b style={{ '--cd-x': '219px' }}>2:00</b><b style={{ '--cd-x': '294px' }}>4:00</b>
              <span className="cd-ch cd-chr">Arrived</span>
            </div>
            <i className="cd-zone" aria-hidden="true"><span>Expired after 5:00</span></i>

            <div className="cd-ln cd-l1" style={{ '--cd-x': '2.5px', '--cd-t': '.54s' }}>
              <span className="cd-lb"><span className="cd-ic"><TextIcon /></span><b>Text</b><em>US +1</em></span>
              <span className="cd-tr"><i className="cd-w" /><i className="cd-dot" /></span>
              <span className="cd-rs"><span className="cd-mk"><Sig cls="st-landed" /></span><span className="cd-v">4 s</span></span>
            </div>
            <div className="cd-ln cd-l2" style={{ '--cd-x': '250px', '--cd-t': '4.2s' }}>
              <span className="cd-lb"><span className="cd-ic"><TextIcon /></span><b>Text</b><em>UK +44</em></span>
              <span className="cd-tr"><i className="cd-w" /><i className="cd-dot" /></span>
              <span className="cd-rs"><span className="cd-mk"><Sig cls="st-working w0" /><Sig cls="st-needs w1" /></span><span className="cd-v">6:40</span></span>
            </div>
            <div className="cd-ln cd-l3" style={{ '--cd-x': '5.6px', '--cd-t': '.58s' }}>
              <span className="cd-lb"><span className="cd-ic"><MailIcon /></span><b>Email</b><em>Code</em></span>
              <span className="cd-tr"><i className="cd-w" /><i className="cd-dot" /></span>
              <span className="cd-rs"><span className="cd-mk"><Sig cls="st-landed" /></span><span className="cd-v">9 s</span></span>
            </div>
            <div className="cd-ln cd-l4" style={{ '--cd-x': '13.1px', '--cd-t': '.69s' }}>
              <span className="cd-lb"><span className="cd-ic"><CallIcon /></span><b>Call</b><em>US +1</em></span>
              <span className="cd-tr"><i className="cd-w" /><i className="cd-dot" /></span>
              <span className="cd-rs"><span className="cd-mk"><Sig cls="st-landed" /></span><span className="cd-v">21 s</span></span>
            </div>
            <i className="cd-ph" aria-hidden="true" />
          </section>

          {/* the late code as evidence: the text as it arrived, beside the page that refused it */}
          <section className="cd-ev ax-fade" style={{ '--d': '.12s' }}>
            <header className="cd-eh">
              <span className="cd-ic"><TextIcon /></span><b>Text · UK</b><em>+44 7700 900461</em>
              <span className="cd-tm">Asked 02:00:02 · arrived 02:06:42</span>
            </header>
            <div className="cd-eb">
              <div className="cd-msg">
                <span className="cd-ek">sms.received · 02:06:42</span>
                <p className="cd-bub">“Your Fernpay code is 482 913. It expires in 5 minutes.”</p>
                <p className="cd-fx"><span>6 min 40 s to arrive</span><b>1 min 40 s past expiry</b></p>
              </div>
              <div className="cd-shot">
                <span className="cd-url">fernpay.example/login</span>
                <span className="cd-pg">
                  <span className="cd-pt">Enter your code</span>
                  <span className="cd-in">482913</span>
                  <span className="cd-er"><i aria-hidden="true" />This code has expired.</span>
                </span>
                <span className="cd-ek">page.visited · 02:06:44</span>
              </div>
            </div>
          </section>

          <p className="cd-note ax-fade" style={{ '--d': '.18s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>Fernpay’s test accounts</span><span>Works within your spend limit</span></p>
          <div className="ax-toast cd-toast"><Sig cls="st-needs" /><p><b>1 late code</b><span>UK texts · #auth-alerts 02:06</span></p><span className="ax-btn">Review</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
