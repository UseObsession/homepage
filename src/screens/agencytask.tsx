import { wordsFor, type ScreenProps } from '../components/workspace'

/* The agencytask app screen: 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds .play
   to its root to run the story. Its look and story: css/agencytask.css and css/compose.css, loaded by the page,
   never imported here. Converted from its HTML by scripts/convert-screens.mjs (3 Oct 2026); this file is the
   screen's source now. */
export function AgencytaskScreen({ workspace = 'agency' }: ScreenProps) {
  const ws = wordsFor(workspace)
  return (
    <div className="il appx-il app-compose app-agencytask"><div className="appx-fit"><div className="appx" role="img" aria-label="A new mission, the typed way in: AM types a task to shop the agency’s 15 client stores as 4 customers each, with each client’s OK, before Black Friday, answers the agent’s 2 questions (all 15 clients, a PDF per client), and gets a 4 day plan with its kit: 60 declared agents, each with its own ID and inbox, a 48 hour watch of every inbox and 15 PDF reports. AM approves the plan, which buys nothing, and the agents start working.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>{ws.org}</b><span>/</span>Missions<span>/</span>New mission</span>
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
          <header className="ax-h cp-h ax-fade">
            <h2>New mission</h2><span className="ax-meta cp-time">Mon 09:41</span>
            <span className="cp-id"><span className="cp-idav"><svg className="sig" viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg></span>Obsession agent for {ws.org}</span>
          </header>
          {/* 1. the typed line */}
          <div className="cp-field">
            <span className="cp-gt">›</span><p className="cp-tx"><span className="cp-l l1">Shop our 15 client stores as 4 customers each</span><span className="cp-l l2">with each client’s OK, before Black Friday</span></p>
            <span className="ax-kbd cp-enter">↵</span>
          </div>
          {/* 2. the agent asks 2 things; AM picks the first option of each */}
          <div className="cp-qs">
            <div className="cp-q q1">
              <span className="cp-mk cp-stk" aria-hidden="true">
                <svg className="sig st-needs w0" viewBox="2 2 96 96"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                <svg className="sig st-waiting w1" viewBox="2 2 96 96"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
              </span>
              <p className="cp-ask">Which clients?</p>
              <span className="cp-op pk">All 15</span><span className="cp-op">From a CSV</span><span className="cp-op">Pick</span>
            </div>
            <div className="cp-q q2">
              <span />
              <p className="cp-ask">Report?</p>
              <span className="cp-op pk">PDF per client</span><span className="cp-op">Slack</span><span className="cp-op">Both</span>
            </div>
          </div>
          {/* 3. the plan: steps, the kit it sets up, how long; the red line at its foot */}
          <section className="ax-card cp-plan">
            <header className="cp-ph">
              <span className="cp-mk cp-stk" aria-hidden="true">
                <svg className="sig st-needs w0" viewBox="2 2 96 96"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
                <svg className="sig st-working moving w1" viewBox="2 2 96 96"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
              </span>
              <div className="cp-tt"><h3>Black Friday store check</h3><p>15 stores · 4 test customers each · by 20 Nov</p></div>
              <span className="cp-pill cp-stk">
                <span className="p0"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="8" cy="8" r="5.75" /><path d="M8 4.9v3.35l2.1 1.3" /></svg><b>4 days</b></span>
                <span className="p1"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="8" cy="8" r="5.75" /><path d="M8 4.9v3.35l2.1 1.3" /></svg><b>Day 1</b>of 4</span>
              </span>
            </header>
            <ol className="cp-steps">
              <li style={{ '--d': '4.08s' }}>
                <span className="n">1</span><span className="s">Set up 60 declared agents</span>
                <span className="ax-chip cp-kit"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="1.75" y="3.25" width="12.5" height="9.5" rx="1.5" /><circle cx="5.6" cy="7.25" r="1.5" /><path d="M3.6 10.6c.4-.95 1.1-1.4 2-1.4s1.6.45 2 1.4M9.5 6.75h2.75M9.5 9.25h1.75" /></svg>60 agent IDs</span>
                <time>Day 1</time>
              </li>
              <li style={{ '--d': '4.16s' }}>
                <span className="n">2</span><span className="s">Sign up and fill a basket</span>
                <span className="ax-chip cp-kit"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.5" width="11.5" height="9" rx="1.5" /><path d="m2.75 4.5 5.25 4 5.25-4" /></svg>60 inboxes</span>
                <time>Day 1</time>
              </li>
              <li style={{ '--d': '4.24s' }}>
                <span className="n">3</span><span className="s">Watch every inbox</span>
                <span className="ax-chip cp-kit"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="8" cy="8" r="5.75" /><path d="M8 4.9v3.35l2.1 1.3" /></svg>48 hour watch</span>
                <time>Days 1 to 3</time>
              </li>
              <li style={{ '--d': '4.32s' }}>
                <span className="n">4</span><span className="s">Report per client</span>
                <span className="ax-chip cp-kit"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 1.75h5.5l2.75 2.75v9.75H4Z" /><path d="M9.5 1.75V4.5h2.75M6 8h4M6 10.5h4" /></svg>15 PDFs</span>
                <time>Day 4</time>
              </li>
            </ol>
            <footer className="cp-pf">
              <p className="cp-note"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>With each client’s OK · nothing bought</p>
              <span className="cp-acts cp-stk">
                <span className="a0"><span className="ax-btn ghost">Edit</span><span className="ax-btn cp-go">Approve plan</span></span>
                <span className="a1"><span className="ax-tick" /><b>Approved by AM</b><time>09:42</time></span>
              </span>
            </footer>
          </section>
          <svg className="ax-ptr cp-ptr" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v12.2l3.1-3 2.1 4.6 2-.9-2.1-4.5h4.3Z" /></svg>
        </div>
      </div>
    </div></div></div>
  )
}
