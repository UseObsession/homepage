/* The promos app screen (12 Nov 2026): 1 720 x 450 window of the product, at rest on its finished scene; AppScreen adds
   .play to its root to run the story. Its look and story: css/promos.css, loaded by the page, never imported here.
   Insights for a fund: discount depth by week for Harrowgate, an invented listed apparel retailer, and 2 competitors,
   from 7 Sep to 14 Nov, drawn only from what was known on 14 Nov (point-in-time). Under it, the newest facts as a feed,
   each with the time it was seen and the email or text behind it. Every name and figure is invented. */

function Sig({ cls }: { cls: string }) {
  return (
    <svg className={`sig ${cls}`} viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
  )
}

/* 11 weekly points, 7 Sep to 14 Nov; x from 34 to 498 (46.4 apart), y = 104 - depth × 2 (0% at 104, 40% at 24). */
const X = (i: number) => +(34 + i * 46.4).toFixed(1)
const Y = (d: number) => 104 - d * 2
const pts = (ds: number[]) => ds.map((d, i) => `${X(i)},${Y(d)}`).join(' ')
const HARROWGATE = [15, 15, 10, 15, 15, 20, 25, 25, 40, 40, 40]
const COMP_A = [10, 10, 15, 10, 10, 15, 15, 15, 20, 20, 20]
const COMP_B = [20, 15, 15, 20, 15, 15, 20, 15, 15, 20, 20]

const FEED = [
  { seen: '14 Nov · 07:12', brand: 'Harrowgate', ch: 'Email', offer: 'Black Friday preview', depth: '40%', t: '2.6s' },
  { seen: '13 Nov · 18:40', brand: 'Competitor A', ch: 'Text', offer: 'Free delivery weekend', depth: 'Delivery', t: '2.75s' },
  { seen: '12 Nov · 09:03', brand: 'Competitor B', ch: 'Email', offer: '20% off outerwear', depth: '20%', t: '2.9s' },
  { seen: '11 Nov · 21:26', brand: 'Harrowgate', ch: 'After a basket', offer: 'Your basket: 15% off', depth: '15%', t: '3.05s' },
]

export function PromosScreen() {
  return (
    <div className="il appx-il app-promos"><div className="appx-fit"><div className="appx" role="img" aria-label="Insights for a fund: discount depth by week for Harrowgate, an invented listed apparel retailer, and 2 competitors, from 7 September to 14 November, drawn only from what was known on 14 November. Harrowgate's top discount climbs from 15% to 25% in October and to 40% on 2 November, while Competitor A stays near 20% and Competitor B near 15 to 20%. Under the chart, the newest facts as a feed, each with the time it was seen, the brand, the channel, the offer, its depth and the email or text behind it: Harrowgate's Black Friday preview at 40% by email on 14 November at 07:12, Competitor A's free delivery by text, Competitor B's 20% off outerwear, and Harrowgate's 15% off sent after a basket. The day's facts are delivered to Supabase.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your fund</b><span>/</span>Insights<span>/</span>Discount depth</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>NK</span><span>SV</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>Your fund</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M8 1.8 9.4 6.6 14.2 8 9.4 9.4 8 14.2 6.6 9.4 1.8 8 6.6 6.6Z" /></svg>Insights</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5h10M3 8h10M3 11.5h6" /></svg>Watches<em>38</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Records</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Coverage</p>
            <a role="none"><i />Apparel</a><a role="none"><i />Beauty</a><a role="none"><i />Grocery</a><a role="none"><i />Travel</a>
          </div>
          <div className="ax-side-f"><Sig cls="st-working moving" /><span><b>38</b> brands collected</span></div>
        </aside>
        <div className="ax-main">
          {/* header: the question, its scope, and the date the view is known as of */}
          <header className="pr-h ax-fade">
            <h2>Discount depth by week</h2>
            <span className="pr-meta">3 brands · UK</span>
            <span className="pr-asof"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="8" cy="8" r="5.25" /><path d="M8 5.25V8l1.75 1.25" /></svg>As known on 14 Nov, 07:15</span>
          </header>
          {/* the chart: 1 line per brand, the leader solid */}
          <section className="ax-card pr-chart ax-fade" style={{ '--d': '.06s' }}>
            <div className="pr-leg">
              <span className="k a"><i />Harrowgate</span>
              <span className="k b"><i />Competitor A</span>
              <span className="k c"><i />Competitor B</span>
              <span className="pr-pit">Point-in-time</span>
            </div>
            <svg className="pr-svg" viewBox="0 0 520 124" aria-hidden="true">
              <g className="pr-grid">
                <line x1="34" x2="498" y1="24" y2="24" />
                <line x1="34" x2="498" y1="64" y2="64" />
                <line x1="34" x2="498" y1="104" y2="104" />
              </g>
              <g className="pr-ylab">
                <text x="26" y="27">40%</text>
                <text x="26" y="67">20%</text>
                <text x="26" y="107">0</text>
              </g>
              <g className="pr-xlab">
                <text x={X(0)} y="120">7 Sep</text>
                <text x={X(4)} y="120">5 Oct</text>
                <text x={X(8)} y="120">2 Nov</text>
                <text x={X(10)} y="120">14 Nov</text>
              </g>
              <g className="pr-lines">
                <polyline className="pr-l c" points={pts(COMP_B)} />
                <polyline className="pr-l b" points={pts(COMP_A)} />
                <polyline className="pr-l a" points={pts(HARROWGATE)} />
              </g>
              <g className="pr-mark">
                <circle cx={X(8)} cy={Y(40)} r="3.5" />
                <line x1={X(8)} x2={X(8)} y1={Y(40) + 6} y2="104" />
              </g>
            </svg>
            <span className="pr-call"><b>40% off</b> Harrowgate · 2 Nov, 07:12</span>
          </section>
          {/* the feed: the newest facts, each with the time it was seen and its proof */}
          <section className="ax-card pr-feed ax-fade" style={{ '--d': '.12s' }}>
            <div className="pr-g pr-fh">
              <span>Seen</span><span>Brand</span><span>Channel</span><span>Offer</span><span>Depth</span><span />
            </div>
            {FEED.map((f) => (
              <div className="pr-g pr-row" style={{ '--pr-t': f.t }} key={f.seen}>
                <span className="pr-seen">{f.seen}</span>
                <span className="pr-brand">{f.brand}</span>
                <span className="pr-ch">{f.ch}</span>
                <span className="pr-offer">{f.offer}</span>
                <span className="pr-depth">{f.depth}</span>
                <i className="pr-pf" />
              </div>
            ))}
          </section>
          <p className="pr-meta2 ax-fade" style={{ '--d': '.18s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 1.5 3.5 9H8l-1 5.5L12.5 7H8Z" /></svg>Webhook on any discount deeper than 30%</p>
          <div className="ax-toast pr-toast"><Sig cls="st-landed" /><p><b>Delivered to Supabase</b></p><span className="ax-btn">Open</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
