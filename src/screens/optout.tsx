/* The optout app screen (12 Nov 2026): 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds
   .play to its root to run the story. Its look and story: css/optout.css, loaded by the page, never imported here.
   Fernhill, a gym membership app, beside 3 competitors: how each one's cancel flow, unsubscribe and STOP behave, every
   cell backed by its screenshot or message. The finding is Fernhill's own: a promotional email 9 days after an
   unsubscribe, against the 2 days it holds itself to, sent to its compliance team's webhook. Every name is invented. */

function Sig({ cls }: { cls: string }) {
  return (
    <svg className={`sig ${cls}`} viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
  )
}

type Cell = { v: string; s: string; t: string; hl?: boolean; flag?: boolean }
const ROWS: { name: string; you?: boolean; cells: [Cell, Cell, Cell] }[] = [
  {
    name: 'Fernhill',
    you: true,
    cells: [
      { v: '4 screens', s: 'save offer, step 2', t: '.7s' },
      { v: '1 email after', s: '9 days later', t: '2.9s', hl: true, flag: true },
      { v: 'Confirmed', s: 'nothing after', t: '1.5s' },
    ],
  },
  {
    name: 'Brackenridge',
    cells: [
      { v: '6 screens', s: '2 save offers', t: '.95s' },
      { v: 'Honoured', s: 'nothing after', t: '2.2s' },
      { v: 'Confirmed', s: 'nothing after', t: '1.7s' },
    ],
  },
  {
    name: 'Calder Club',
    cells: [
      { v: 'By phone', s: 'no online cancel', t: '1.15s', hl: true },
      { v: 'Honoured', s: 'nothing after', t: '2.35s' },
      { v: 'Confirmed', s: 'nothing after', t: '1.85s' },
    ],
  },
  {
    name: 'Dunmore Fit',
    cells: [
      { v: '2 screens', s: 'no save offer', t: '1.3s' },
      { v: 'Honoured', s: 'nothing after', t: '2.5s' },
      { v: 'Confirmed', s: 'nothing after', t: '2s' },
    ],
  },
]

export function OptoutScreen() {
  return (
    <div className="il appx-il app-optout"><div className="appx-fit"><div className="appx" role="img" aria-label="The Records page for cancel and opt-outs at Fernhill, an invented gym membership app, and 3 competitors since 1 October. For each company, a row shows its cancel flow, what happened after an unsubscribe and what happened after a STOP text, each cell backed by its screenshot or message. Brackenridge takes 6 screens with 2 save offers, Calder Club cancels only by phone, Dunmore Fit takes 2 screens. Fernhill's own cancel flow takes 4 screens with a save offer on step 2, and its STOP is confirmed with nothing after, but a promotional email arrived 9 days after its unsubscribe: unsubscribed 1 Nov at 09:14, Last chance: 30% off annual arrived 10 Nov at 08:02, DKIM pass, against the 2 days Fernhill holds itself to. The finding is sent to the compliance team's webhook.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Records<span>/</span>Cancel and opt-outs</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>LC</span><span>RT</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>Your company</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M8 1.8 9.4 6.6 14.2 8 9.4 9.4 8 14.2 6.6 9.4 1.8 8 6.6 6.6Z" /></svg>Insights</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5h10M3 8h10M3 11.5h6" /></svg>Watches<em>4</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge">1</span></a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Checks</p>
            <a role="none"><i />Cancel flow</a><a role="none"><i />Unsubscribe</a><a role="none"><i />SMS STOP</a><a role="none"><i />Renewal notices</a>
          </div>
          <div className="ax-side-f"><Sig cls="st-working moving" /><span>Checked <b>daily</b></span></div>
        </aside>
        <div className="ax-main">
          {/* header: the page, its scope, the declared agent */}
          <header className="oo-h ax-fade">
            <h2>Cancel and opt-outs</h2>
            <span className="oo-meta">4 companies · UK</span>
            <span className="oo-id"><span className="oo-av"><Sig cls="" /></span>Obsession agent · says it’s AI</span>
          </header>
          {/* the table: 1 grid shared by the head and every row */}
          <section className="ax-card oo-card ax-fade" style={{ '--d': '.06s' }}>
            <div className="oo-g oo-ch">
              <p className="oo-cap">Since 1 Oct</p>
              <p>Cancel flow</p>
              <p>Unsubscribe</p>
              <p>SMS STOP</p>
            </div>
            {ROWS.map((r) => (
              <div className={`oo-g oo-r${r.you ? ' you' : ''}`} key={r.name}>
                <p className="oo-l"><b>{r.name}</b>{r.you && <span className="oo-you">You</span>}</p>
                {r.cells.map((c, i) => (
                  <span className={`oo-c${c.hl ? ' hl' : ''}${c.flag ? ' flag' : ''}`} style={{ '--oo-t': c.t }} key={i}>
                    <span className="oo-v"><i className="oo-sk" /><span className="oo-val"><b>{c.v}</b><small>{c.s}</small></span></span>
                    {c.flag ? (
                      <span className="oo-flag" aria-hidden="true">!</span>
                    ) : (
                      <i className="oo-pf" />
                    )}
                  </span>
                ))}
              </div>
            ))}
            <footer className="oo-f">
              <span><i className="oo-pf" />A screenshot or the message behind every cell</span>
              <span className="oo-note"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg>Never invents identity details</span>
            </footer>
          </section>
          {/* bottom: the flagged email as evidence, and Fernhill's 4 cancel steps */}
          <div className="oo-bot">
            <section className="ax-card oo-ev ax-fade" style={{ '--d': '.12s' }}>
              <header className="oo-ev-h">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3.5" width="12" height="9" rx="1.5" /><path d="m2.5 4.5 5.5 4.5 5.5-4.5" /></svg>
                <span className="oo-from">From <b>Fernhill</b></span>
                <span className="oo-late">9 days after · limit 2</span>
              </header>
              <p className="oo-subj">Last chance: 30% off annual</p>
              <div className="oo-tl">
                <span className="oo-pt"><i />Unsubscribed<b>1 Nov · 09:14</b></span>
                <span className="oo-line" />
                <span className="oo-pt late"><i />Arrived<b>10 Nov · 08:02</b></span>
              </div>
              <p className="oo-chips">
                <span className="ax-chip oo-k1"><span className="ax-tick" />DKIM pass</span>
                <span className="ax-chip oo-k2">SHA-256 7c41…</span>
                <span className="ax-chip oo-k3">Raw email</span>
              </p>
            </section>
            <div className="oo-side">
              <section className="ax-card oo-steps ax-fade" style={{ '--d': '.18s' }}>
                <p className="oo-steps-h"><b>Fernhill cancel</b><span>1 Nov</span></p>
                <div className="oo-shots">
                  <span className="oo-shot" style={{ '--oo-t': '3.35s' }}><span className="ax-shot"><i /></span><small>1 Account</small></span>
                  <span className="oo-shot offer" style={{ '--oo-t': '3.5s' }}><span className="ax-shot"><i /><em>50% off</em></span><small>2 Offer</small></span>
                  <span className="oo-shot" style={{ '--oo-t': '3.65s' }}><span className="ax-shot"><i /></span><small>3 Reason</small></span>
                  <span className="oo-shot" style={{ '--oo-t': '3.8s' }}><span className="ax-shot"><i /></span><small>4 Done</small></span>
                </div>
              </section>
              <p className="oo-meta2"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 1.5 3.5 9H8l-1 5.5L12.5 7H8Z" /></svg>Webhook on any send after an opt-out</p>
            </div>
          </div>
          <div className="ax-toast oo-toast"><Sig cls="st-landed" /><p><b>Sent to #compliance</b></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
