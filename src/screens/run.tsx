import { wordsFor, type ScreenProps } from '../components/workspace'

/* The run app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to its
   root to run the story. Its look and story: css/run.css, loaded by the page, never imported here. Converted from
   its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function RunScreen({ workspace = 'agency' }: ScreenProps) {
  const ws = wordsFor(workspace)
  return (
    <div className="il appx-il app-run"><div className="appx-fit"><div className="appx" role="img" aria-label="The signed record of an example mystery shop for the Candles client: the run log lists each step the test shoppers took, with screenshots, and receipt 4 of 9, the checkout stopped before payment, is open. The account manager clicks Verify, the signature checks out with the chain intact, and a link to share the record with the client appears.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>{ws.org}</b><span>/</span>Records<span>/</span>Mystery shopper</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>AM</span><span>JO</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>{ws.org}</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5h10M3 8h10M3 11.5h6" /></svg>Missions<em>24</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Recipes</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge">3</span></a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">{ws.lists}</p>
            <a role="none"><i />Homeware</a><a role="none"><i />Coffee roaster</a><a className="on" role="none"><i />Candles</a><a role="none"><i />Outdoor gear</a><a role="none"><i />Dental group</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          <header className="ax-h rn-h ax-fade">
            <h2>Mystery shopper</h2>
            <span className="ax-meta">Candles · Example</span>
            <span className="rn-idp"><span className="rn-ag"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for {ws.org}</span>
            <span className="ax-btn ghost rn-sh" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 9.5v-7M5.25 5.25 8 2.5l2.75 2.75M3.5 8.5v4.75h9V8.5" /></svg></span>
          </header>
          <div className="rn-grid">
            <section className="ax-card rn-log ax-fade" style={{ '--d': '.08s' }}>
              <div className="rn-hd"><b>Run log</b><span>Day 1 to 4 · signed</span></div>
              <ol>
                <li className="rn-r r1 ax-in" style={{ '--d': '.3s' }}><time>21:02</time><i className="nd" /><div className="tx"><p>4 test shoppers sign up</p></div></li>
                <li className="rn-r r2 ax-in" style={{ '--d': '.5s' }}><time>21:09</time><i className="nd" /><div className="tx"><p>Shopper 2 browses, leaves</p></div></li>
                <li className="rn-r r3 ax-in" style={{ '--d': '.7s' }}><time>21:14</time><i className="nd" /><div className="tx">
                  <p>Gift box £36 in basket</p>
                  <span className="ax-shot rn-cap cap-bag" aria-hidden="true"><span className="cb"><span className="pg"><i className="im" /><i className="t1" /><i className="t2" /></span><span className="dr"><i className="th" /><i className="ln" /><i className="ln s" /><i className="bt" /></span></span></span>
                </div></li>
                <li className="rn-r r4 ax-in" style={{ '--d': '.9s' }}><time>21:30</time><i className="nd" /><div className="tx">
                  <p>Candle £18 at checkout</p>
                  <span className="ax-shot rn-cap cap-co" aria-hidden="true"><span className="cb"><span className="fm"><i className="f" /><i className="f" /><i className="f h" /><i className="pay" /></span><span className="sm"><i className="th" /><i className="ln" /><i className="ln s" /></span></span></span>
                </div></li>
                <li className="rn-r r5 ax-in" style={{ '--d': '1.1s' }}><time>Day 3</time><i className="nd" /><div className="tx"><p><b>0 basket emails</b> in 48 h</p></div></li>
                <li className="rn-r r6 ax-in" style={{ '--d': '1.3s' }}><time>Day 3</time><i className="nd" /><div className="tx"><p>Fix drafted</p></div></li>
                <li className="rn-r r7 ax-in" style={{ '--d': '1.5s' }}><time>Day 4</time><i className="nd" /><div className="tx"><p>Approved by <span className="av">AM</span></p></div></li>
              </ol>
            </section>
            <section className="ax-card rn-rc ax-fade" style={{ '--d': '.16s' }}>
              <div className="rc-hd">
                <b className="fl" style={{ '--d': '2.66s' }}><span className="v">Receipt 4 of 9</span><i className="sk" style={{ width: '84px' }} /></b>
                <span className="rc-chain" aria-hidden="true"><i style={{ '--d': '4.08s' }} /><i style={{ '--d': '4.13s' }} /><i style={{ '--d': '4.18s' }} /><i className="me" /><i style={{ '--d': '4.28s' }} /><i style={{ '--d': '4.33s' }} /><i style={{ '--d': '4.38s' }} /><i style={{ '--d': '4.43s' }} /><i style={{ '--d': '4.48s' }} /></span>
              </div>
              <dl className="rc-dl">
                <div className="fl" style={{ '--d': '2.74s' }}><dt>Step</dt><dd><span className="v">Left at checkout, stopped before payment</span><i className="sk" style={{ width: '90%' }} /></dd></div>
                <div className="fl" style={{ '--d': '2.82s' }}><dt>When</dt><dd><span className="v">Day 1, 21:30:07 UTC</span><i className="sk" style={{ width: '72%' }} /></dd></div>
                <div className="fl" style={{ '--d': '2.9s' }}><dt>Agent</dt><dd><span className="v">Test customer 3 of 4</span><i className="sk" style={{ width: '66%' }} /></dd></div>
                <div className="fl" style={{ '--d': '2.98s' }}><dt>Evidence</dt><dd><span className="v"><span className="nw">Screenshot 4 of 9 ·</span> <span className="nw">raw page ·</span> <span className="nw">network log</span></span><i className="sk" style={{ width: '80%' }} /></dd></div>
              </dl>
              <div className="rc-ft">
                <div className="rc-sig fl" style={{ '--d': '3.06s' }}><span className="rc-k">Signature</span><span className="rc-sv"><span className="v">ed25519 · 7f3a 91c2 … c91e</span><i className="sk" style={{ width: '82%' }} /></span></div>
                <div className="rc-slot">
                  <div className="rc-pre"><span className="ax-btn rc-vb">Verify</span><span className="rc-hint">Anyone can check it</span></div>
                  <div className="rc-busy"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span>Checking 9 receipts…</span></div>
                  <div className="rc-ok"><span className="ax-tick" /><span>Signature valid · chain intact</span></div>
                </div>
                <div className="rc-link"><span>{ws.domain}/r/candles</span><span className="rc-cp" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"><rect x="5.25" y="5.25" width="8" height="8" rx="1.75" /><path d="M10.75 5.25V4a1.25 1.25 0 0 0-1.25-1.25H4A1.25 1.25 0 0 0 2.75 4v5.5A1.25 1.25 0 0 0 4 10.75h1.25" /></svg></span></div>
              </div>
            </section>
          </div>
          <p className="rn-note ax-fade" style={{ '--d': '.24s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Stops before payment</p>
          <svg className="ax-ptr rn-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.1 4.6 2-.9-2.1-4.5h4.3Z" /></svg>
        </div>
      </div>
    </div></div></div>
  )
}
