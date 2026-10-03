import { wordsFor, type ScreenProps } from '../components/workspace'

/* The proofmail app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play
   to its root to run the story. Its look and story: css/proofmail.css, loaded by the page, never imported here.
   Converted from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function ProofmailScreen({ workspace = 'agency' }: ScreenProps) {
  const ws = wordsFor(workspace)
  return (
    <div className="il appx-il app-proofmail"><div className="appx-fit"><div className="appx" role="img" aria-label="Prospect intelligence, the opener: a 1:1 email from Sam at Client A to Hannah Price at Tidewren Swim. The proof attaches (texts opted in on 15 Sep, 3 emails but 0 texts by 17 Sep), then the agency’s mockup of Tidewren’s first text, and a 3 line opener types in. AM approves it, it sends, and the proof link is logged in Clay.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>{ws.org}</b><span>/</span>Missions<span>/</span>Prospect intelligence</span>
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
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge">3</span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">{ws.lists}</p>
            <a role="none"><i />Homeware</a><a role="none"><i />Coffee roaster</a><a role="none"><i />Candles</a><a role="none"><i />Outdoor gear</a><a role="none"><i />Dental group</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          <header className="pfm-h ax-fade">
            <h2>Prospect intelligence</h2><span className="pfm-meta">Tidewren Swim</span>
            <span className="pfm-id"><span className="pfm-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for {ws.org}</span>
          </header>
          {/* the drafted 1:1 from the client's sender: who (and who approves), the 3 line opener, the proof and the mockup, the OK */}
          <section className="ax-card pfm-mail ax-in" style={{ '--d': '.06s' }}>
            <div className="pfm-fields">
              <p className="pfm-fr"><span className="pfm-k">From</span><span className="pfm-v"><span className="pfm-pp">S</span><b>Sam, Client A</b><span className="pfm-ad">sam@client-a.example</span></span><span className="pfm-rv">Approver<span className="pfm-pp">AM</span></span></p>
              <p className="pfm-fr"><span className="pfm-k">To</span><span className="pfm-v"><span className="pfm-pp">HP</span><b>Hannah Price, Tidewren Swim</b><span className="pfm-ad">hannah@tidewren.example</span></span></p>
              <p className="pfm-fr"><span className="pfm-k">Subject</span><span className="pfm-v"><b>Tidewren’s texts</b></span></p>
            </div>
            <div className="pfm-bd">
              <p className="pfm-ln pfm-l1"><span className="pfm-tx">Hi Hannah, we opted in for Tidewren’s texts on 15 Sep.<i className="pfm-cv" /></span></p>
              <p className="pfm-ln pfm-l2"><span className="pfm-tx">3 emails in 2 days, but not a single text.<i className="pfm-cv" /></span></p>
              <p className="pfm-ln pfm-l3"><span className="pfm-tx">I’ve mocked up your first 3 with your own offer. Worth a look?<i className="pfm-cv" /></span></p>
            </div>
            <div className="pfm-at">
              <div className="pfm-g pfm-g1">
                <p className="pfm-lab"><b>Proof</b><span>Tidewren, 15 to 17 Sep</span></p>
                <div className="pfm-tiles">
                  <figure className="pfm-t pfm-t1">
                    <div className="ax-shot pfm-shot" aria-hidden="true"><div className="pfm-pg pfm-pg1">
                      <i className="pfm-bk" /><i className="pfm-bl" />
                      <span className="pfm-pop"><i className="pfm-fld" /><span className="pfm-ok"><i className="pfm-tk" /><b>Text me offers</b></span></span>
                    </div></div>
                    <figcaption><span>Text opt in</span><time>15 Sep 10:14</time></figcaption>
                  </figure>
                  <figure className="pfm-t pfm-t2">
                    <div className="ax-shot pfm-shot" aria-hidden="true"><div className="pfm-pg pfm-pg2">
                      <span className="pfm-days"><time>15 Sep</time><i /><time>16 Sep</time><i /><time>17 Sep</time><i /></span>
                      <span className="pfm-sum"><b>0 texts</b><span>3 emails</span></span>
                    </div></div>
                    <figcaption><span>Phone, 48 h</span><time>17 Sep 10:14</time></figcaption>
                  </figure>
                </div>
              </div>
              <div className="pfm-g pfm-g2">
                <p className="pfm-lab"><b>Your mockup</b></p>
                <figure className="pfm-t pfm-t3">
                  <div className="ax-shot pfm-shot pfm-mock" aria-hidden="true"><div className="pfm-pg pfm-pg3">
                    <span className="pfm-day">Day 0</span>
                    <span className="pfm-bub">Welcome to Tidewren!<br />10% off with <b>TIDE10</b></span>
                  </div></div>
                  <figcaption><span>Tidewren texts</span><time>by JO</time></figcaption>
                </figure>
              </div>
            </div>
            <footer className="pfm-ft">
              <div className="pfm-go">
                <span className="ax-btn ghost pfm-edit">Edit</span>
                <span className="ax-btn pfm-ap">Approve</span>
                <span className="pfm-sent"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Sent</b><span className="ax-mono">10:22</span></span>
              </div>
            </footer>
          </section>
          <p className="pfm-note ax-fade" style={{ '--d': '.5s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Sends after your OK</p>
          <div className="ax-toast pfm-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Opener sent</b><span>Proof link in Clay</span></p><span className="ax-btn">Open</span></div>
          <svg className="ax-ptr pfm-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.1 4.6 2-.9-2.1-4.5h4.3Z" /></svg>
        </div>
      </div>
    </div></div></div>
  )
}
