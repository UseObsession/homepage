import { PartnerWord } from '../components/PartnerMark'
import { wordsFor, type ScreenProps } from '../components/workspace'

/* The pack app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to its
   root to run the story. Its look and story: css/pack.css, loaded by the page, never imported here. Converted from
   its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function PackScreen({ workspace = 'agency' }: ScreenProps) {
  const ws = wordsFor(workspace)
  /* A company's workspace (Home's hero tabs, beside 4 screens drawn for a company) has their sidebar: Accounts and
     Rivals in the nav, its own lists. An agency's lists its clients. */
  const company = workspace === 'company'
  return (
    <div className="il appx-il app-pack"><div className="appx-fit"><div className="appx" role="img" aria-label="A prospect intelligence mission for 12 prospects from Clay, run by a declared Obsession AI agent that signs up at each as a new customer, through public sign ups only. Rows land 1 by 1, each with its gap, until 10 of the 12 have one. Hobstone Coffee’s pitch fills with 3 findings and their captures, signed, and a click on Copy link copies its proof link. The lead finding is in the test inbox’s Spam folder. 10 of 12 prospects failed a new customer. Proof link Hobstone can check for itself. Hobstone’s 10% welcome code lands in spam.">
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
            {company && (
              <>
                <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 13.25h10.5M4.25 13.25V2.75h5.5v10.5M9.75 6.25h2v7" /><path d="M6.25 5.5h1.5M6.25 8h1.5M6.25 10.5h1.5" strokeLinecap="round" /></svg>Accounts</a>
                <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M1.75 8S4 3.75 8 3.75 14.25 8 14.25 8 12 12.25 8 12.25 1.75 8 1.75 8Z" /><circle cx="8" cy="8" r="1.9" /></svg>Rivals</a>
              </>
            )}
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge">3</span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">{ws.lists}</p>
            {company ? (
              <>
                <a role="none"><i />Prospects</a><a role="none"><i />Customers</a><a role="none"><i />Rivals</a><a role="none"><i />Suppliers</a>
              </>
            ) : (
              <>
                <a role="none"><i />Homeware</a><a role="none"><i />Coffee roaster</a><a role="none"><i />Candles</a><a role="none"><i />Outdoor gear</a><a role="none"><i />Dental group</a>
              </>
            )}
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          <header className="ax-h pk-h ax-in">
            <h2>Prospect intelligence</h2>
            <span className="ax-meta">12 prospects from <PartnerWord id="clay" /></span>
            <span className="pk-id"><span className="pk-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession AI agent</span>
          </header>
          <div className="pk-cols">
            <section className="pk-list ax-card ax-in" style={{ '--d': '.06s' }}>
              <div className="pk-lh">
                <span className="pk-count"><span className="pk-num"><b className="n7">7</b><b className="n8">8</b><b className="n9">9</b><b className="n10">10</b></span>of 12 with a gap</span>
                <span className="pk-seg" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i className="s8" /><i className="s9" /><i className="s10" /><i className="ng" /><i className="wk" /></span>
              </div>
              <div className="pk-row pk-r1">
                <i className="pk-fv fv-tw" aria-hidden="true"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><path d="M3 6c.8-.9 1.6-.9 2.4 0s1.6.9 2.4 0 1.6-.9 2.4 0" /><path d="M3 8.9c.8-.9 1.6-.9 2.4 0s1.6.9 2.4 0 1.6-.9 2.4 0" /></svg></i>
                <div><p className="pk-nm">Tidewren Swim</p><p className="pk-gp"><span className="w">Waiting for a text, 47h</span><span className="g">Opted in, 0 texts in 48h</span></p></div>
                <svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
              </div>
              <div className="pk-row pk-r2">
                <i className="pk-fv fv-fn" aria-hidden="true">F</i>
                <div><p className="pk-nm">Fennick Home</p><p className="pk-gp"><span className="w">Trying the sign up page</span><span className="g">Sign up page returns 404</span></p></div>
                <svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
              </div>
              <div className="pk-row pk-r3 on">
                <i className="pk-fv fv-hb" aria-hidden="true">H</i>
                <div><p className="pk-nm">Hobstone Coffee</p><p className="pk-gp"><span className="w">Checking inbox and spam</span><span className="g">Welcome email in spam</span></p></div>
                <svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
              </div>
              <div className="pk-row">
                <i className="pk-fv fv-lb" aria-hidden="true"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6.4c1.2.2 2.2 1 2.8 2.4C6.9 6.3 8.6 4.9 11 4.4" /></svg></i>
                <div><p className="pk-nm">Larkbound</p><p className="pk-gp"><span className="g">Ad opens a sold out page</span></p></div>
                <svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
              </div>
              <div className="pk-row dim">
                <i className="pk-fv fv-hm" aria-hidden="true"><svg viewBox="0 0 14 14" fill="currentColor"><path d="M3.6 10.4C3.4 6.5 5.6 4 10.4 3.6c.2 4.6-2.2 7-6.3 6.9Z" /><path d="m3.6 10.4 3.9-3.9" fill="none" stroke="#55603F" strokeWidth=".9" strokeLinecap="round" /></svg></i>
                <div><p className="pk-nm">Halvard &amp; Moss</p><p className="pk-gp"><span className="g">No gap found in 7 days</span></p></div>
                <svg className="pk-ok" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="5.15" /><path d="M3.9 6.15 5.35 7.6 8.15 4.7" /></svg>
              </div>
              <p className="pk-lf"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Public sign ups only · nothing bought</p>
            </section>
            <section className="pk-pane ax-in" style={{ '--d': '.12s' }}>
              <div className="pk-bar">
                <span className="ax-btn ghost"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 2.75v7.5M5 7.5l3 3 3-3M3.25 13.25h9.5" /></svg>PDF</span>
                <span className="ax-btn ghost">Send to <PartnerWord id="clay" /></span>
                <span className="ax-btn pk-copy"><span className="pk-cl pk-a"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M6.9 9.1a2.4 2.4 0 0 0 3.4 0l2-2a2.4 2.4 0 0 0-3.4-3.4l-.7.7M9.1 6.9a2.4 2.4 0 0 0-3.4 0l-2 2a2.4 2.4 0 0 0 3.4 3.4l.7-.7" /></svg>Copy link</span><span className="pk-cl pk-b"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>Copied</span></span>
              </div>
              <article className="pk-page">
                <div className="pk-brand"><i>Y</i><span>{ws.org}</span><span className="pk-date">Pitch · 8 Oct</span></div>
                <h3>Prepared for <i className="pk-fv fv-hb" aria-hidden="true">H</i>Hobstone Coffee</h3>
                <ol className="pk-finds">
                  <li className="pk-f" style={{ '--d': '4.65s' }}>
                    <span className="pk-n">1</span><span className="pk-ft"><b>Welcome email in spam</b><em>09:06 · 10% code inside</em></span>
                    <span className="ax-shot pk-shot pk-s1" aria-hidden="true"><b className="sp">Spam</b><i className="pk-mk" /><i className="dv" /><i className="a1" /><i className="l1" /><b className="t1">10% off</b><i className="a2" /><i className="l2" /></span>
                    <span className="pk-sk k1" aria-hidden="true" /><span className="pk-sk k2" aria-hidden="true"><i /><i /></span><span className="pk-sk k3" aria-hidden="true" />
                  </li>
                  <li className="pk-f" style={{ '--d': '4.8s' }}>
                    <span className="pk-n">2</span><span className="pk-ft"><b>No text after opt in</b><em>0 texts in 48h</em></span>
                    <span className="ax-shot pk-shot pk-s2" aria-hidden="true"><i className="lb" /><i className="in" /><i className="cd" /><i className="bt" /><i className="er" /><i className="tl" /></span>
                    <span className="pk-sk k1" aria-hidden="true" /><span className="pk-sk k2" aria-hidden="true"><i /><i /></span><span className="pk-sk k3" aria-hidden="true" />
                  </li>
                  <li className="pk-f" style={{ '--d': '4.95s' }}>
                    <span className="pk-n">3</span><span className="pk-ft"><b>Bot has no delivery date</b><em>Asked twice · 11:40</em></span>
                    <span className="ax-shot pk-shot pk-s3" aria-hidden="true"><i className="p1" /><i className="n1" /><i className="q1" /><i className="p2" /><i className="n2" /><i className="q2" /></span>
                    <span className="pk-sk k1" aria-hidden="true" /><span className="pk-sk k2" aria-hidden="true"><i /><i /></span><span className="pk-sk k3" aria-hidden="true" />
                  </li>
                </ol>
                <p className="pk-sign"><span>Signed</span>11:52 · 7f3a 91c2 … c91e</p>
              </article>
            </section>
          </div>
          <svg className="ax-ptr pk-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.05 4.6 2.15-.95-2-4.5h4.3Z" /></svg>
        </div>
      </div>
    </div></div></div>
  )
}
