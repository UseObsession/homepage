import { wordsFor, type ScreenProps } from '../components/workspace'

/* The templates app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play
   to its root to run the story. Its look and story: css/templates.css, loaded by the page, never imported here.
   Converted from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the screen's source now. */
export function TemplatesScreen({ workspace = 'agency' }: ScreenProps) {
  const ws = wordsFor(workspace)
  return (
    <div className="il appx-il app-templates"><div className="appx-fit"><div className="appx" role="img" aria-label="The Recipes page: a typed line for any task above the recipes, among them a Support bot check for your own AI agent. A person picks Mystery shopper, its setup sheet slides in with 2 client stores, a 4 step journey that always stops before payment, weekly runs and the report, and Approve and run starts setting up 8 agents.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>{ws.org}</b><span>/</span>Recipes</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>AM</span><span>JO</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>{ws.org}</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5h10M3 8h10M3 11.5h6" /></svg>Missions<em>24</em></a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Recipes</a>
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
          {/* page head: the title and the declared agent */}
          <header className="ax-h tp-h ax-fade">
            <h2>Recipes</h2>
            <span className="tp-idp"><span className="tp-ag"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for {ws.org}</span>
          </header>
          {/* the typed line: any task, in plain words */}
          <div className="tp-field ax-in" style={{ '--d': '.04s' }}>
            <span className="tp-gt">›</span>
            <span className="tp-ph"><i className="tp-caret" />Type a task, or pick a recipe</span>
            <span className="tp-ico"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M10.6 5.2 6 9.8a1.35 1.35 0 0 0 1.9 1.9l4.7-4.7a2.7 2.7 0 0 0-3.8-3.8L4.1 7.9a4 4 0 0 0 5.7 5.7l3.4-3.4" /></svg></span>
            <span className="ax-kbd">↵</span>
          </div>
          {/* the 8 templates; the counts add up to the 24 missions in the sidebar */}
          <div className="tp-grid">
            <div className="tp-card is-pick ax-in" style={{ '--d': '.14s' }}><div className="tp-cin">
              <span className="tp-tile"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.6 7.25h10.8l-.85 8.6a1.5 1.5 0 0 1-1.5 1.35H6.95a1.5 1.5 0 0 1-1.5-1.35Z" /><path d="M7.5 9.6V6.25a2.5 2.5 0 0 1 5 0V9.6" /></svg><span className="tp-tile-on" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.6 7.25h10.8l-.85 8.6a1.5 1.5 0 0 1-1.5 1.35H6.95a1.5 1.5 0 0 1-1.5-1.35Z" /><path d="M7.5 9.6V6.25a2.5 2.5 0 0 1 5 0V9.6" /></svg></span></span>
              <p className="tp-tx"><b>Mystery shopper</b><span>4 test customers shop a store</span></p>
              <span className="tp-use">6 missions</span>
              <i className="tp-ring" aria-hidden="true" />
            </div></div>
            <div className="tp-card ax-in" style={{ '--d': '.18s' }}><div className="tp-cin">
              <span className="tp-tile"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.75" cy="8.75" r="5" /><path d="m12.4 12.4 4.35 4.35" /></svg></span>
              <p className="tp-tx"><b>Prospect intelligence</b><span>Joins prospects as a customer</span></p>
              <span className="tp-use">5 missions</span>
            </div></div>
            <div className="tp-card ax-in" style={{ '--d': '.22s' }}><div className="tp-cin">
              <span className="tp-tile"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.75 8.1h2.9l5.6-3.6v11l-5.6-3.6h-2.9Z" /><path d="M6.65 11.9 7.6 16h1.9" /><path d="M14.9 7.6a3.3 3.3 0 0 1 0 4.8" /></svg></span>
              <p className="tp-tx"><b>Ad tracking</b><span>Follows rivals’ public ads daily</span></p>
              <span className="tp-use">4 missions</span>
            </div></div>
            <div className="tp-card ax-in" style={{ '--d': '.26s' }}><div className="tp-cin">
              <span className="tp-tile"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2.75" y="3.75" width="14.5" height="12.5" rx="2" /><path d="M2.75 7.25h14.5" /><path d="m7.4 11.8 1.8 1.8 3.5-3.6" /></svg></span>
              <p className="tp-tx"><b>Website audit</b><span>Tests every form and booking link</span></p>
              <span className="tp-use">3 missions</span>
            </div></div>
            <div className="tp-card ax-in" style={{ '--d': '.30s' }}><div className="tp-cin">
              <span className="tp-tile"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 3.75h11a1.75 1.75 0 0 1 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75H9.25l-3.5 2.75v-2.75H4.5a1.75 1.75 0 0 1-1.75-1.75v-7A1.75 1.75 0 0 1 4.5 3.75Z" /><path d="m7.25 9 1.9 1.9 3.6-3.6" /></svg></span>
              <p className="tp-tx"><b>Support bot check</b><span>Asks your bot what customers ask</span></p>
              <span className="tp-use">2 missions</span>
            </div></div>
            <div className="tp-card ax-in" style={{ '--d': '.34s' }}><div className="tp-cin">
              <span className="tp-tile"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2.75" y="3.75" width="10.5" height="7.75" rx="1.5" /><path d="m3.4 4.6 4.6 3.5 4.6-3.5" /><path d="M12.6 12.75h2.65a2 2 0 0 1 0 4h-1.1l-1.9 1.4v-1.5a2 2 0 0 1 .35-3.9Z" /></svg></span>
              <p className="tp-tx"><b>Email and SMS tracking</b><span>Logs every email and text</span></p>
              <span className="tp-use">2 missions</span>
            </div></div>
            <div className="tp-card ax-in" style={{ '--d': '.38s' }}><div className="tp-cin">
              <span className="tp-tile"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.25 4.5v5.2a1 1 0 0 0 .3.7l6.3 6.3a1 1 0 0 0 1.4 0l5.2-5.2a1 1 0 0 0 0-1.4l-6.3-6.3a1 1 0 0 0-.7-.3H4.5a1.25 1.25 0 0 0-1.25 1Z" /><circle cx="7" cy="7" r="1.2" /></svg></span>
              <p className="tp-tx"><b>Price watch</b><span>Flags rivals’ price changes</span></p>
              <span className="tp-use">1 mission</span>
            </div></div>
            <div className="tp-card ax-in" style={{ '--d': '.42s' }}><div className="tp-cin">
              <span className="tp-tile"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.25 10s2.8-5.25 7.75-5.25S17.75 10 17.75 10 14.95 15.25 10 15.25 2.25 10 2.25 10Z" /><circle cx="10" cy="10" r="2.4" /></svg></span>
              <p className="tp-tx"><b>Competitor tracking</b><span>Logs every rival email, text and ad</span></p>
              <span className="tp-use">1 mission</span>
            </div></div>
          </div>
          {/* the setup sheet for the picked template: it sits exactly over columns 2 to 4 */}
          <section className="tp-sheet" aria-hidden="true">
            <header className="tp-sh-h">
              <span className="tp-tile tp-tile-sm"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4.6 7.25h10.8l-.85 8.6a1.5 1.5 0 0 1-1.5 1.35H6.95a1.5 1.5 0 0 1-1.5-1.35Z" /><path d="M7.5 9.6V6.25a2.5 2.5 0 0 1 5 0V9.6" /></svg></span>
              <h3>Mystery shopper</h3>
              <span className="tp-x"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="m4.5 4.5 7 7M11.5 4.5l-7 7" /></svg></span>
            </header>
            <div className="tp-form">
              <span className="ax-k tp-l">Targets</span>
              <div className="tp-v tp-in">
                <span className="tp-tok"><i />Homeware<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="m5 5 6 6M11 5l-6 6" /></svg></span>
                <span className="tp-tok"><i />Candles<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="m5 5 6 6M11 5l-6 6" /></svg></span>
                <span className="tp-csv"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 10V2.75M5.25 5.5 8 2.75l2.75 2.75M3 9.75v2.5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2.5" /></svg>CSV</span>
              </div>
              <span className="ax-k tp-l tp-l-j">Journey</span>
              <ol className="tp-v tp-jr">
                <li><i>1</i>Sign up and browse<span className="ax-toggle" /></li>
                <li><i>2</i>Leave a basket<span className="ax-toggle" /></li>
                <li><i>3</i>Ask the bot<span className="ax-toggle" /></li>
                <li className="tp-lock"><i>4</i>Stop before payment<span className="tp-al"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><rect x="3.5" y="7" width="9" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Always on</span></li>
              </ol>
              <span className="ax-k tp-l tp-l-s">How often</span>
              <div className="tp-v tp-often"><span className="tp-seg"><span>Once</span><span className="on">Weekly</span></span><span className="tp-when">Mon 08:00</span></div>
              <span className="ax-k tp-l tp-l-s">Report</span>
              <div className="tp-v tp-rep"><span className="tp-ck"><i className="ax-tick" />PDF</span><span className="tp-ck"><i className="ax-tick" />Email</span><span className="tp-ck"><i className="ax-tick" />Client link</span><span className="tp-when">By day 4</span></div>
            </div>
            <footer className="tp-foot">
              <p className="tp-sum"><b>2 stores</b> · 4 test customers each</p>
              <span className="ax-btn tp-go">Approve and run</span>
              <div className="tp-run">
                <svg className="sig st-working moving" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg><b>Setting up 8 agents</b>
                <span className="tp-q"><i className="on" style={{ '--d': '4.78s' }} /><i className="on" style={{ '--d': '4.96s' }} /><i className="on" style={{ '--d': '5.14s' }} /><i className="on" style={{ '--d': '5.32s' }} /><i className="on" style={{ '--d': '5.5s' }} /><i /><i /><i /></span>
              </div>
            </footer>
          </section>
          <svg className="ax-ptr tp-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.05 4.6 2.15-.95-2-4.5h4.3Z" /></svg>
        </div>
      </div>
    </div></div></div>
  )
}
