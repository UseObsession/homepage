import { wordsFor, type ScreenProps } from '../components/workspace'

/* The approve app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play to
   its root to run the story. Its look and story: css/approve.css, loaded by the page, never imported here. Converted
   from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function ApproveScreen({ workspace = 'agency' }: ScreenProps) {
  const ws = wordsFor(workspace)
  return (
    <div className="il appx-il app-approve"><div className="appx-fit"><div className="appx" role="img" aria-label="The Needs you inbox, 4 items from a declared Obsession agent: a Coffee roaster website audit found 0 welcome emails in 48 hours after a 10% code was promised, shown with the sign up offer and an inbox that stayed empty, and the fix is drafted in the store’s email tool. AM clicks Approve, the fix goes live with the next check on Thursday 09:00, the item closes, Needs you drops to 3 and the signed approval is filed in Records.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>{ws.org}</b><span>/</span>Needs you</span>
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
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge apx-n"><b>4</b><b>3</b></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">{ws.lists}</p>
            <a role="none"><i />Homeware</a><a role="none"><i />Coffee roaster</a><a role="none"><i />Candles</a><a role="none"><i />Outdoor gear</a><a role="none"><i />Dental group</a>
          </div>
          <div className="ax-side-f"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>37</b> agents working</span></div>
        </aside>
        <div className="ax-main">
          <header className="apx-h ax-fade">
            <h2>Needs you</h2><span className="apx-n apx-count"><b>4</b><b>3</b></span>
            <span className="apx-id"><span className="apx-av"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for {ws.org}</span>
          </header>
          {/* the queue */}
          <section className="apx-list">
            <ul>
              <li className="on ax-in" style={{ '--d': '.04s' }}>
                <svg className="sig st-landed apx-close" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                <div><p className="apx-t">0 welcome emails in 48 hours</p><p className="apx-m">Coffee roaster · Website audit</p></div>
              </li>
              <li className="ax-in" style={{ '--d': '.1s' }}>
                <svg className="sig st-needs" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                <div><p className="apx-t">Ad 4 → sold out lamp</p><p className="apx-m">Homeware · Ad tracking</p></div>
              </li>
              <li className="ax-in" style={{ '--d': '.16s' }}>
                <svg className="sig st-needs" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                <div><p className="apx-t">Rival B −£5, ships free</p><p className="apx-m">Candles · Price watch</p></div>
              </li>
              <li className="ax-in" style={{ '--d': '.22s' }}>
                <svg className="sig st-needs" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                <div><p className="apx-t">Cyber Monday code died 19:00</p><p className="apx-m">Outdoor gear · Delivery monitoring</p></div>
              </li>
            </ul>
            <p className="apx-note ax-fade" style={{ '--d': '.3s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Fixes go live after your OK</p>
          </section>
          {/* the selected item */}
          <section className="apx-det">
            <header className="apx-find ax-in" style={{ '--d': '.1s' }}>
              <p className="ax-k">Coffee roaster · Website audit<span className="ax-mono">2 test users</span></p>
              <h3>0 welcome emails in 48 hours</h3>
            </header>
            <div className="apx-ev">
              <figure className="ax-in" style={{ '--d': '.18s' }}>
                <div className="ax-shot apx-bag"><div className="apx-pg">
                  <i className="apx-b1" />
                  <div className="apx-item"><i className="apx-tile" /><span>Welcome code</span><b>10% off</b></div>
                  <i className="apx-cta" />
                </div></div>
              </figure>
              <figure className="ax-in" style={{ '--d': '.24s' }}>
                <div className="ax-shot apx-inbox"><div className="apx-pg">
                  <p className="apx-r1"><time>09:12</time><span>Signed up</span></p>
                  <p className="apx-e apx-r2"><time>+24 h</time><i /></p>
                  <p className="apx-z apx-r3"><time>+48 h</time><b>0 emails</b></p>
                </div></div>
              </figure>
            </div>
            <div className="apx-fix ax-card ax-in" style={{ '--d': '.3s' }}>
              <div className="apx-fix-h">
                <svg className="apx-ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"><rect x="2.25" y="3.5" width="11.5" height="9" rx="1.5" /><path d="m2.75 4.5 5.25 4 5.25-4" /></svg>
                <b>Fix drafted</b><span>in the store’s email tool</span><span className="ax-mono">1 of 3</span>
              </div>
              <div className="apx-mail">
                <dl className="apx-mail-hd">
                  <dt>From</dt><dd>Coffee roaster</dd>
                  <dt>Subject</dt><dd className="apx-subj">Your 10% code is inside</dd>
                </dl>
                <div className="apx-mail-bd">
                  <p>Hi Sam, welcome. Here’s 10% off your first bag.</p>
                </div>
              </div>
              <div className="apx-fix-f">
                <div className="apx-act">
                  <span className="ax-btn ghost apx-edit">Edit</span>{' '}
                  <i className="apx-bg" />{' '}
                  <span className="apx-s apx-s1">Approve</span>{' '}
                  <span className="apx-s apx-s2"><svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>Applying…</span>{' '}
                  <span className="apx-s apx-s3"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><span><b>Live</b> · next check Thu 09:00</span></span>{' '}
                  <svg className="ax-ptr apx-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.1 4.6 2-.9-2.1-4.5h4.3Z" /></svg>
                </div>
              </div>
            </div>
          </section>
          <div className="ax-toast apx-toast"><svg className="sig st-landed" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><p><b>Approved by AM</b><span>Signed · in Records</span></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
