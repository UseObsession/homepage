/* The reorder app screen (23 Nov 2026): 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds
   .play to its root to run the story. Its look and story: css/reorder.css, loaded by the page, never imported here.
   Supplier reorder agent for Lantern Kitchen, an invented restaurant group with 18 sites: on Tuesday at 06:00 the stock
   sheet shows 6 items under their reorder level. Signed in with its own supplier accounts, the agent orders from
   Packmere (cups and lids, 4,000 each: £248.00 + £164.00 = £412.00, Thursday), Scourwell (24 degreaser at £5.60 and 60
   blue roll at £2.55: £287.40, Wednesday) and Kilnby Dairy (120 oat milk at £1.35: £162.00, Wednesday), each paid with
   the company card: 3 orders, £861.40. Corvel Coffee's house blend shows £19.60 a kilo against the agreed £18.00, 9%
   over, so its 40 kilos (£784.00) are held for a person in #purchasing at 06:15. Every name is invented. */

function Sig({ cls }: { cls: string }) {
  return (
    <svg className={`sig ${cls}`} viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
  )
}

/* the 4 suppliers, each signed in with the group's own account at its own moment; 2 + 2 + 1 + 1 = 6 items */
const SUPPLIERS: { name: string; items: string; e: string; held?: boolean }[] = [
  { name: 'Packmere', items: '2 items · ordered', e: '.7s' },
  { name: 'Scourwell', items: '2 items · ordered', e: '.95s' },
  { name: 'Kilnby Dairy', items: '1 item · ordered', e: '1.2s' },
  { name: 'Corvel Coffee', items: '1 item · held', e: '1.45s', held: true },
]

/* this morning's orders: 3 placed (£412.00 + £287.40 + £162.00 = £861.40), 1 held over the agreed price */
const ROWS: { order: string; supplier: string; item: string; note: string; total: string; due: string; t: string; held?: boolean }[] = [
  { order: 'PM-88104', supplier: 'Packmere', item: '12oz cups and lids', note: '4,000 each · agreed price', total: '£412.00', due: 'Thu 26 Nov', t: '2.1s' },
  { order: 'SW-20517', supplier: 'Scourwell', item: 'Degreaser, blue roll', note: '24 and 60 · agreed price', total: '£287.40', due: 'Wed 25 Nov', t: '2.24s' },
  { order: 'KD-33916', supplier: 'Kilnby Dairy', item: 'Oat milk, 1 litre', note: '120 · agreed price', total: '£162.00', due: 'Wed 25 Nov', t: '2.38s' },
  { order: 'Held', supplier: 'Corvel Coffee', item: 'House blend, 1 kg', note: '£19.60 vs £18.00 agreed', total: '£784.00', due: 'For approval', t: '2.52s', held: true },
]

export function ReorderScreen() {
  return (
    <div className="il appx-il app-reorder"><div className="appx-fit"><div className="appx" role="img" aria-label="The Supplier reorder agent for Lantern Kitchen, an invented restaurant group with 18 sites, on Tuesday at 06:00. The stock sheet shows 6 items under their reorder level. Signed in with the group's own supplier accounts, the agent reorders from 4 supplier sites. Packmere: 4,000 cups and 4,000 lids at the agreed prices, £412.00, order PM-88104, confirmed by email at 06:04 for delivery on Thursday 26 November. Scourwell: 24 degreaser and 60 blue roll, £287.40, for Wednesday 25 November. Kilnby Dairy: 120 litres of oat milk, £162.00, for Wednesday. All 3 orders, £861.40 in all, are paid with the company card ending 2291. Corvel Coffee shows its house blend at £19.60 a kilo against the agreed £18.00, 9% over, so the order for 40 kilos, £784.00, is held, not placed, and goes to a person in the purchasing channel in Slack at 06:15. The agent signs in only with the group's own accounts and pays only with the card it is given.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Agents<span>/</span>Supplier reorders</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>NK</span><span>SB</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>Your company</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><circle cx="8" cy="5.5" r="2.5" /><path d="M3.25 13.25c.6-2.4 2.5-3.75 4.75-3.75s4.15 1.35 4.75 3.75" strokeLinecap="round" /></svg>Agents<em>4</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Blueprints</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="ro-nb"><b>0</b><b>1</b></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Event log</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Lists</p>
            <a className="on" role="none"><i />Supplier reorders</a><a role="none"><i />Deliveries</a><a role="none"><i />Receipts</a><a role="none"><i />Agreed prices</a>
          </div>
          <div className="ax-side-f"><Sig cls="st-landed" /><span><b>40</b> suppliers set</span></div>
        </aside>
        <div className="ax-main">
          {/* header: the job, its morning, the declared agent */}
          <header className="ro-h ax-fade">
            <h2>Supplier reorders</h2>
            <span className="ro-meta">Tue 06:00 · 18 sites</span>
            <span className="ro-id"><span className="ro-av"><Sig cls="" /></span>Obsession agent · your accounts</span>
          </header>
          {/* the 4 suppliers, each signed in with the group's own account, then the 2 lines the log just wrote */}
          <section className="ax-card ro-sp ax-fade" style={{ '--d': '.06s' }}>
            <div className="ro-tiles">
              {SUPPLIERS.map((p) => (
                <span className={`ro-tile${p.held ? ' held' : ''}`} style={{ '--ro-e': p.e }} key={p.name}>
                  <span className="ro-tn">
                    <span className="ro-mk"><Sig cls="st-working w0" /><Sig cls={`${p.held ? 'st-needs' : 'st-landed'} w1`} /></span>
                    <b>{p.name}</b>
                  </span>
                  <span className="ro-st"><span className="v0">Signing in</span><span className="v1">{p.items}</span></span>
                </span>
              ))}
            </div>
            <div className="ro-log">
              <span className="ro-l1"><time>06:00</time>Stock sheet: 6 items under their level</span>
              <span className="ro-l2"><time>06:04</time><code>email.received</code>PM-88104 confirmed</span>
            </div>
          </section>
          {/* this morning's orders: each with its total and delivery date, the held one with the price beside the agreed one */}
          <section className="ax-card ro-tb ax-fade" style={{ '--d': '.12s' }}>
            <header className="ro-th"><b>This morning’s orders</b><span className="ro-ct">3 placed · 1 held · £861.40</span></header>
            <div className="ro-g ro-ch"><span>Order</span><span>Supplier</span><span>Items</span><span>Total</span><span>Delivery</span><span aria-hidden="true" /></div>
            {ROWS.map((r) => (
              <div className={`ro-g ro-r${r.held ? ' held' : ''}`} style={{ '--ro-t': r.t }} key={r.supplier}>
                <span className="ro-o">
                  <span className="ro-mk"><Sig cls="st-working w0" /><Sig cls={`${r.held ? 'st-needs' : 'st-landed'} w1`} /></span>
                  <span className="ro-sv"><span className="v0">Ordering</span><span className="v1">{r.order}</span></span>
                </span>
                <span className="ro-sup">{r.supplier}</span>
                <span className="ro-it"><b>{r.item}</b><small>{r.note}</small></span>
                <span className="ro-tot">{r.total}</span>
                <span className="ro-due">{r.due}</span>
                <i className="ro-pf" />
              </div>
            ))}
            <footer className="ro-f"><span>Paid on the company card ·· 2291</span><span><i className="ro-pf" />Every confirmation kept</span></footer>
          </section>
          <p className="ro-note"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>Your supplier accounts only</span><span>Pays only with the card you give it</span></p>
          <div className="ax-toast ro-toast"><Sig cls="st-needs" /><p><b>1 held</b><span>#purchasing · 06:15</span></p><span className="ax-btn">Review</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
