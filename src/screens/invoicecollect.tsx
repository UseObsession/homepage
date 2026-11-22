/* The invoicecollect app screen (23 Nov 2026): 1 720 x 450 window of the product, at rest on its finished scene;
   AppScreen adds .play to its root to run the story. Its look and story: css/invoicecollect.css, loaded by the page,
   never imported here. (The older `invoices` screen is the Get paid page, chasing what customers owe; this one collects
   what vendors bill.) Invoice collector for Calder Foods, an invented food distributor, on Monday 7 December: from 07:00
   a persona signs in to 64 vendor portals with Calder's own logins and by 07:41 has filed 62 November invoices as PDFs
   in Finance / Invoices / November. 2 vendors haven't posted one yet, and the telecoms bill is $4,860.00 against
   $1,920.00 in October, so 3 need a look in #finance at 07:45. Every name and address is invented. */

function Sig({ cls }: { cls: string }) {
  return (
    <svg className={`sig ${cls}`} viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
  )
}

type Row = {
  vendor: string
  host: string
  inv: [string, string]
  amount: [string, string]
  due: [string, string]
  t: string
  kind: 'filed' | 'changed' | 'missing'
}
/* 3 that need a look first, then 2 of the 59 others filed; 62 filed + 2 missing = 64 portals */
const ROWS: Row[] = [
  { vendor: 'Telecoms', host: 'billing.telco.example', inv: ['4471-1125', '1 Dec'], amount: ['$4,860.00', 'was $1,920.00'], due: ['20 Dec', 'in 13 days'], t: '1.25s', kind: 'changed' },
  { vendor: 'Packaging supplier', host: 'portal.packco.example', inv: ['Not posted yet', 'usually by the 1st'], amount: ['$640.00', 'last month'], due: ['1 Dec', 'expected'], t: '1.39s', kind: 'missing' },
  { vendor: 'Cloud host', host: 'console.cloud.example', inv: ['Not posted yet', 'usually by the 2nd'], amount: ['$2,115.40', 'last month'], due: ['2 Dec', 'expected'], t: '1.53s', kind: 'missing' },
  { vendor: 'Energy supplier', host: 'account.energy.example', inv: ['INV-88213', '1 Dec'], amount: ['$3,412.50', 'was $3,288.10'], due: ['15 Dec', 'in 8 days'], t: '1.67s', kind: 'filed' },
  { vendor: 'Freight carrier', host: 'pay.haulage.example', inv: ['FC-200417', '3 Dec'], amount: ['$1,276.00', '6 deliveries'], due: ['2 Jan', 'in 26 days'], t: '1.81s', kind: 'filed' },
]

const PDF = (
  <svg className="ic-pdf" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" aria-hidden="true"><path d="M4 1.75h5.5L12.5 4.75v9.5H4Z" /><path d="M9.25 1.75V5h3.25" /><path d="M6 8.5h4.5M6 11h3" strokeLinecap="round" /></svg>
)

export function InvoicecollectScreen() {
  return (
    <div className="il appx-il app-invoicecollect"><div className="appx-fit"><div className="appx" role="img" aria-label="The Invoice collector watch for Calder Foods, an invented food distributor, on Monday 7 December. From 07:00 a persona signs in to 64 vendor portals with Calder’s own logins and by 07:41 has downloaded 62 November invoices, each PDF named and filed in Finance, Invoices, November, with vendor, number, amount and due date in the sheet. 3 need a look: the telecoms bill, invoice 4471-1125, is $4,860.00 against $1,920.00 last month, due 20 December; the packaging supplier and the cloud host haven’t posted November’s invoice, though they usually do by the 1st and the 2nd. The energy supplier’s $3,412.50 and the freight carrier’s $1,276.00 are filed. The 3 post to the finance channel in Slack at 07:45. It signs in only with Calder’s own logins and stops before any payment.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Watches<span>/</span>Invoice collector</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>NA</span><span>PW</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>Your company</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5h10M3 8h10M3 11.5h6" /></svg>Watches<em>3</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Blueprints</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="ic-nb"><b>0</b><b>3</b></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Event log</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Lists</p>
            <a className="on" role="none"><i />Vendor invoices</a><a role="none"><i />Card receipts</a><a role="none"><i />Statements</a>
          </div>
          <div className="ax-side-f"><Sig cls="st-landed" /><span><b>64</b> portals signed in</span></div>
        </aside>
        <div className="ax-main">
          {/* header: the watch, its size, the declared agent */}
          <header className="ic-h ax-fade">
            <h2>Invoice collector</h2>
            <span className="ic-meta">64 vendor portals</span>
            <span className="ic-id"><span className="ic-av"><Sig cls="" /></span>Obsession agent · your logins</span>
          </header>
          {/* where the PDFs went, and the month in 3 counts */}
          <section className="ax-card ic-top ax-fade" style={{ '--d': '.06s' }}>
            <div className="ic-fold">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M1.75 4.25a1 1 0 0 1 1-1h3.5l1.5 1.75h5.5a1 1 0 0 1 1 1v6.75a1 1 0 0 1-1 1H2.75a1 1 0 0 1-1-1Z" /></svg>
              <span className="ic-fv"><b>Finance / Invoices / November</b><small>Mon 7 Dec · 07:00 to 07:41</small></span>
            </div>
            <span className="ic-k ok" style={{ '--ic-t': '2.15s' }}><span className="ic-mk"><Sig cls="st-landed" /></span><b>62</b><small>filed</small></span>
            <span className="ic-k" style={{ '--ic-t': '2.27s' }}><span className="ic-mk"><Sig cls="st-needs" /></span><b>2</b><small>missing</small></span>
            <span className="ic-k" style={{ '--ic-t': '2.39s' }}><span className="ic-mk"><Sig cls="st-needs" /></span><b>1</b><small>changed</small></span>
          </section>
          {/* November's invoices: the 3 that need a look first, each with its PDF or the gap where it should be */}
          <section className="ax-card ic-tb ax-fade" style={{ '--d': '.12s' }}>
            <header className="ic-th"><b>November invoices</b><span className="ic-ct">62 of 64 · 3 need a look</span></header>
            <div className="ic-g ic-ch"><span>Vendor</span><span>Invoice</span><span className="ic-ar">Amount</span><span>Due</span><span aria-hidden="true" /></div>
            {ROWS.map((r) => (
              <div className={`ic-g ic-r ${r.kind}`} style={{ '--ic-t': r.t }} key={r.vendor}>
                <span className="ic-v">
                  <span className="ic-mk">{r.kind === 'filed' ? <Sig cls="st-landed" /> : <><Sig cls="st-working w0" /><Sig cls="st-needs w1" /></>}</span>
                  <span className="ic-two"><b>{r.vendor}</b><small className="ic-host">{r.host}</small></span>
                </span>
                {r.kind === 'missing' ? (
                  <span className="ic-sv"><span className="v0 ic-two"><b>Checking</b><small>billing page</small></span><span className="v1 ic-two"><b>{r.inv[0]}</b><small>{r.inv[1]}</small></span></span>
                ) : (
                  <span className="ic-two ic-mono"><b>{r.inv[0]}</b><small>{r.inv[1]}</small></span>
                )}
                <span className="ic-two ic-mono ic-amt"><b>{r.amount[0]}</b><small>{r.amount[1]}</small></span>
                <span className="ic-two ic-mono"><b>{r.due[0]}</b><small>{r.due[1]}</small></span>
                {r.kind === 'missing' ? <i className="ic-gap" /> : PDF}
              </div>
            ))}
            <footer className="ic-f"><span>59 more filed, each named by vendor, date and number</span><span><i className="ic-pf" />The portal page behind every PDF</span></footer>
          </section>
          <p className="ic-note"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>Your vendor logins only</span><span>Stops before any payment</span></p>
          <div className="ax-toast ic-toast"><Sig cls="st-needs" /><p><b>3 need a look</b><span>#finance · 07:45</span></p><span className="ax-btn">Review</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
