/* The ledger app screen (Order and receipt ledger, 23 Nov 2026): 1 720 x 450 window of the product, at rest on its
   finished scene; AppScreen adds .play to its root to run the story. Its look and story: css/ledger.css, loaded by the
   page, never imported here. Ashgrove Kitchens (invented, 40 kitchens) runs a reorder agent and a travel agent, each on
   its own inbox and number. Top: this week's latest 5 orders in the ledger, each row its confirmation, receipt and
   delivery, read from the agents' emails and texts (214 orders that week across 40 suppliers). The 1 thing: Packwell's
   receipt for PW-20931 is £412.80 against £398.00 confirmed, £14.80 of delivery the confirmation didn't show. Below:
   both emails side by side, the difference named. Amounts: £398.00 + £14.80 = £412.80. */

const Sig = ({ cls }: { cls: string }) => (
  <svg className={`sig ${cls}`} viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
)

const BoxIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M2.75 5 8 2.5 13.25 5v6L8 13.5 2.75 11Z" /><path d="M2.75 5 8 7.5 13.25 5M8 7.5v6" /></svg>
)
const TravelIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 9.25 13.5 4.5l-2 7.25-3.25-2.25-1.75 2v-3Z" /><path d="m8.25 9.5 5.25-5" /></svg>
)
const MailIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5" /><path d="m2.75 4.5 5.25 4 5.25-4" strokeLinecap="round" /></svg>
)
const SheetIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.75" y="2.75" width="10.5" height="10.5" rx="1.5" /><path d="M2.75 6.25h10.5M2.75 9.75h10.5M6.5 6.25v7" /></svg>
)

/* the 5 rows: order, its agent, merchant, amount, confirmed, receipt (with its mark), delivered */
type Row = { order: string; agent: 'reorder' | 'travel'; merchant: string; amount: string; confirmed: string; receipt: string; mark: 'needs' | 'landed' | 'waiting'; delivered: string }
const rows: Row[] = [
  { order: 'PW-20931', agent: 'reorder', merchant: 'Packwell', amount: '£398.00', confirmed: 'Mon 09:14', receipt: '£412.80', mark: 'needs', delivered: 'Tue 13:02' },
  { order: 'CP-7781', agent: 'reorder', merchant: 'Cleanpro', amount: '£126.40', confirmed: 'Mon 10:02', receipt: '£126.40', mark: 'landed', delivered: 'Tue 11:30' },
  { order: 'NR-55120', agent: 'travel', merchant: 'Northrail', amount: '£84.50', confirmed: 'Mon 16:40', receipt: '£84.50', mark: 'landed', delivered: 'E-ticket' },
  { order: 'HS-3318', agent: 'travel', merchant: 'Harbour Stay', amount: '£238.00', confirmed: 'Tue 08:05', receipt: 'Due at stay', mark: 'waiting', delivered: 'Stay Thu' },
  { order: 'FL-90442', agent: 'reorder', merchant: 'Freshline', amount: '£312.75', confirmed: 'Tue 06:30', receipt: 'Pending', mark: 'waiting', delivered: 'Out 07:40' },
]

export function LedgerScreen() {
  return (
    <div className="il appx-il app-ledger"><div className="appx-fit"><div className="appx" role="img" aria-label="An Order and receipt ledger for Ashgrove Kitchens, a group of 40 kitchens with a reorder agent and a travel agent, each on its own inbox and number. This week’s latest 5 orders sit in one ledger, each with its confirmation, receipt and delivery read from the agents’ emails and texts: Packwell, Cleanpro and Freshline supplies, a Northrail train ticket and a Harbour Stay hotel. Cleanpro’s and Northrail’s receipts match their orders; the hotel receipt is due at the stay and Freshline’s is pending while the order is out for delivery. Packwell’s receipt for order PW-20931 comes to £412.80 against £398.00 confirmed, so it is flagged. Below, both emails sit side by side: the confirmation on Monday at 09:14 and the receipt on Tuesday at 14:22, with the difference named as £14.80 of delivery the confirmation didn’t show. A flag goes to Slack #finance at 14:23. 214 orders came in that week, across 40 suppliers.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Ashgrove</b><span>/</span>Ledger<span>/</span>Orders this week</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>NB</span><span>TS</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>A</i>Ashgrove</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5h10M3 8h10M3 11.5h6" /></svg>Ledger<em>214</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Blueprints</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="ld-nb"><b>0</b><b>1</b></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Event log</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Buying agents</p>
            <a className="on" role="none"><i />All agents</a><a role="none"><i />Reorder agent</a><a role="none"><i />Travel agent</a>
          </div>
          <div className="ax-side-f"><Sig cls="st-working moving" /><span><b>40</b> suppliers this week</span></div>
        </aside>
        <div className="ax-main">
          <header className="ld-h ax-fade">
            <h2>Order and receipt ledger</h2><span className="ld-meta">2 agents · always on</span>
            <span className="ld-id"><span className="ld-ic"><SheetIcon /></span>Orders sheet · synced</span>
          </header>

          {/* the latest 5 orders: each row its confirmation, receipt and delivery, read from the agents' emails and texts */}
          <section className="ld-tb ax-fade" style={{ '--d': '.06s' }}>
            <div className="ld-r ld-hd"><span>Order</span><span>Merchant</span><span className="ld-n">Amount</span><span>Confirmed</span><span>Receipt</span><span>Delivered</span></div>
            {rows.map((r, i) => (
              <div key={r.order} className={`ld-r ld-row ld-${r.mark}`} style={{ '--ld-t': `${(0.4 + i * 0.14).toFixed(2)}s` }}>
                <span className="ld-or"><span className="ld-ic">{r.agent === 'reorder' ? <BoxIcon /> : <TravelIcon />}</span>{r.order}</span>
                <span className="ld-mc">{r.merchant}</span>
                <span className="ld-n ld-am">{r.amount}</span>
                <span className="ld-t">{r.confirmed}</span>
                <span className="ld-rc"><span className="ld-mk">{r.mark === 'needs' ? <><Sig cls="st-working w0" /><Sig cls="st-needs w1" /></> : <Sig cls={`st-${r.mark}`} />}</span><span className="ld-rv">{r.receipt}</span></span>
                <span className="ld-t">{r.delivered}</span>
              </div>
            ))}
          </section>

          {/* the flagged order as evidence: the confirmation beside the receipt, the difference named */}
          <section className="ld-ev ax-fade" style={{ '--d': '.12s' }}>
            <header className="ld-eh">
              <span className="ld-ic"><MailIcon /></span><b>PW-20931 · Packwell</b><em>orders@packwell.example</em>
              <span className="ld-df">+£14.80 delivery</span>
            </header>
            <div className="ld-eb">
              <div className="ld-mail">
                <span className="ld-ek">email.received · Mon 09:14</span>
                <b>Order PW-20931 confirmed</b>
                <span className="ld-li"><span>40 cases, takeaway boxes</span></span>
                <span className="ld-li ld-tot"><span>Total</span><span>£398.00</span></span>
              </div>
              <div className="ld-mail ld-hot">
                <span className="ld-ek">email.received · Tue 14:22</span>
                <b>Your receipt for PW-20931</b>
                <span className="ld-li"><span>Goods £398.00</span><span className="ld-add">Delivery £14.80</span></span>
                <span className="ld-li ld-tot"><span>Total</span><span>£412.80</span></span>
              </div>
            </div>
          </section>

          <p className="ld-note ax-fade" style={{ '--d': '.18s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>Paid with Ashgrove’s card</span><span>Reads its own inboxes only</span></p>
          <div className="ax-toast ld-toast"><Sig cls="st-needs" /><p><b>1 receipt doesn’t match</b><span>#finance 14:23</span></p><span className="ax-btn">Review</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
