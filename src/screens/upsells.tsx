import { wordsFor, type ScreenProps } from '../components/workspace'

/* The upsells app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/upsells.css, loaded by the page, never imported here. Converted
   from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function UpsellsScreen({ workspace = 'agency' }: ScreenProps) {
  const ws = wordsFor(workspace)
  return (
    <div className="il appx-il app-upsells"><div className="appx-fit"><div className="appx" role="img" aria-label="Client upsells for an agency: this month’s next service for each client, each backed by proof from the agency’s own checks, with Homeware’s SMS welcome series proposal open beside the list. The proposals assemble with their proof, you approve Homeware’s at £1,200 a month, and it goes out in the agency’s brand from your own thread, only after that OK.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>{ws.org}</b><span>/</span>Missions<span>/</span>Client upsells</span>
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
          <header className="ups-h ax-fade">
            <h2>Client upsells</h2><span className="ups-meta">5 clients · from your checks</span>
            <span className="ups-id"><span className="ups-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for {ws.org}</span>
          </header>
          <div className="ups-wrap">
            {/* the list: each client's proof, and the service it points to */}
            <section className="ups-ls ax-fade" style={{ '--d': '.04s' }}>
              <div className="ups-th"><span>Client</span><span>Price</span></div>
              {/* 1. Homeware: open in the preview; approved and sent at rest */}
              <div className="ups-row ups-r1 on">
                <span className="ups-mk"><svg className="sig st-working w0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-needs w1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-landed w2" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b className="ups-cl">Homeware</b><span className="ups-pr">£1,200/mo</span>
                <p className="ups-pf">No text welcome flow · 0 texts in 7 days</p>
                <svg className="ups-to" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.5 3v4.75a2 2 0 0 0 2 2h6M10 7l2.5 2.75L10 12.5" /></svg><p className="ups-sv">SMS welcome series</p>
              </div>
              {/* 2. Coffee roaster: ready, waits on your OK */}
              <div className="ups-row ups-r2">
                <span className="ups-mk"><svg className="sig st-working w0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-needs w1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b className="ups-cl">Coffee roaster</b><span className="ups-pr">£900/mo</span>
                <p className="ups-pf">AI assistants quote last year’s price</p>
                <svg className="ups-to" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.5 3v4.75a2 2 0 0 0 2 2h6M10 7l2.5 2.75L10 12.5" /></svg><p className="ups-sv">AI answers retainer</p>
              </div>
              {/* 3. Candles: ready, waits on your OK */}
              <div className="ups-row ups-r3">
                <span className="ups-mk"><svg className="sig st-working w0" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><svg className="sig st-needs w1" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>
                <b className="ups-cl">Candles</b><span className="ups-pr">£2,400 once</span>
                <p className="ups-pf">Checkout fails for AI shoppers</p>
                <svg className="ups-to" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.5 3v4.75a2 2 0 0 0 2 2h6M10 7l2.5 2.75L10 12.5" /></svg><p className="ups-sv">AI checkout fixes</p>
              </div>
              {/* the rest of the clients: no proof, so nothing proposed */}
              <p className="ups-qt">Outdoor gear, Dental group · no gap found</p>
            </section>
            {/* the proposal, as Homeware will get it, with its approval underneath */}
            <aside className="ups-pp ax-fade" style={{ '--d': '.08s' }}>
              <div className="ups-doc">
                <div className="ups-br"><i>Y</i><span>{ws.org}</span><span className="ups-dt">Oct 2026</span></div>
                <div className="ups-ti"><p className="ups-for">Proposal for Homeware</p><h3>SMS welcome series</h3></div>
                <div className="ups-ev">
                  <p className="ups-lab"><b>Proof</b><span>Signed<i>7f3a…c91e</i></span></p>
                  <div className="ups-caps">
                    <figure className="ups-c ups-c1">
                      <div className="ax-shot ups-shot" aria-hidden="true"><div className="ups-pg ups-pg1">
                        <i className="ups-pt" /><i className="ups-ln" />
                        <span className="ups-pop"><i className="ups-fld" /><span className="ups-ok"><i className="ups-tk" /><b>Text me offers</b></span></span>
                      </div></div>
                      <figcaption><span>Opted in</span><time>24 Sep</time></figcaption>
                    </figure>
                    <figure className="ups-c ups-c2">
                      <div className="ax-shot ups-shot" aria-hidden="true"><div className="ups-pg ups-pg2">
                        <span className="ups-zero"><b>0</b><span>texts</span></span>
                        <span className="ups-days"><i /><i /><i /><i /><i /><i /><i /></span>
                      </div></div>
                      <figcaption><span>Test phone</span><time>1 Oct</time></figcaption>
                    </figure>
                  </div>
                </div>
                <div className="ups-px"><p className="ups-amt"><b>£1,200</b><span>/mo</span></p><span className="ups-st">From 1 Nov</span></div>
              </div>
              <footer className="ups-ft">
                <span className="ups-f1"><span className="ax-btn ghost">Edit</span><span className="ax-btn ups-ap">Approve</span></span>
                <span className="ups-f2"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>Sent</b> in your thread</span><span className="ax-mono">10:24</span></span>
              </footer>
            </aside>
          </div>
          <p className="ups-note ax-fade" style={{ '--d': '.3s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Sends after your OK</p>
          <div className="ax-toast ups-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Proposal sent to Homeware</b><span>SMS welcome series</span></p><span className="ax-btn">Open</span></div>
          <svg className="ax-ptr ups-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.1 4.6 2-.9-2.1-4.5h4.3Z" /></svg>
        </div>
      </div>
    </div></div></div>
  )
}
