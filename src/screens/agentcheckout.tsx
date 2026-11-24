/* The agentcheckout app screen (Agent checkout test, 23 Nov 2026): 1 720 x 450 window of the product, at rest on its
   finished scene; AppScreen adds .play to its root to run the story. Its look and story: css/agentcheckout.css, loaded
   by the page, never imported here. Every morning at 07:00, 3 personas shop haldane.example (invented) the way
   shoppers' AI agents do: a UK desktop, a UK phone and a US desktop, each buying the merino crew in navy, size M, with
   the code WELCOME10. Top: the 3 shoppers on 1 step rail (Product, Basket, Code, Checkout, Payment; 60px a step, the
   rail starts 144px into the card). Both UK shoppers reach payment (3:04, 3:21); a sign-up pop-up covers the US shopper's
   Continue button at checkout (3:10) and the run stops there. Below: that step as evidence, the checkout page beside the events it wrote,
   and the 2 abandoned checkout emails that came after (07:44, 07:46). */

const Sig = ({ cls }: { cls: string }) => (
  <svg className={`sig ${cls}`} viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
)

const DesktopIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3" width="11.5" height="7.5" rx="1.25" /><path d="M6 13h4M8 10.5V13" /></svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4.75" y="2.25" width="6.5" height="11.5" rx="1.5" /><path d="M7.25 11.5h1.5" /></svg>
)
const BrowserIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="3" width="11.5" height="10" rx="1.5" /><path d="M2.25 5.75h11.5" /></svg>
)
const CardIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2.25" y="4" width="11.5" height="8" rx="1.5" /><path d="M2.25 6.75h11.5M4.75 9.5h2.5" /></svg>
)

/* 1 lane: its 5 steps as dots on the rail; `reach` is how many steps it passed, `blocked` the step that stopped it. */
const steps = ['Product', 'Basket', 'Code', 'Checkout', 'Payment']

export function AgentcheckoutScreen() {
  return (
    <div className="il appx-il app-agentcheckout"><div className="appx-fit"><div className="appx" role="img" aria-label="An Agent checkout test on Haldane’s own online store, every morning at 07:00. 3 personas shop it the way shoppers’ AI agents do, each buying the merino crew in navy, size M, with the code WELCOME10: a UK shopper on a desktop, a UK shopper on a phone and a US shopper on a desktop. On one step rail of product, basket, code, checkout and payment, both UK shoppers reach payment, at 3 minutes 4 seconds and 3 minutes 21 seconds. A sign-up pop-up covers the Continue button on the US shopper’s checkout page at 3 minutes 10 seconds, and the run stops there. Below, the checkout page with the pop-up is kept beside the events it wrote, and the two UK shoppers’ abandoned checkout emails arrive at 07:44 and 07:46. Payment is never reached without the store’s own card. An alert goes to Slack #ecommerce at 07:05.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Haldane</b><span>/</span>Watches<span>/</span>Checkout, as AI agents</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>RK</span><span>LT</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>H</i>Haldane</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5h10M3 8h10M3 11.5h6" /></svg>Watches<em>6</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Blueprints</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you<span className="ax-badge"><span className="ac-nb"><b>0</b><b>1</b></span></span></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Event log</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Journeys</p>
            <a className="on" role="none"><i />Agent checkout</a><a role="none"><i />Gift cards</a><a role="none"><i />Returns</a>
          </div>
          <div className="ax-side-f"><Sig cls="st-working moving" /><span><b>3</b> shoppers each morning</span></div>
        </aside>
        <div className="ax-main">
          <header className="ac-h ax-fade">
            <h2>Agent checkout test</h2><span className="ac-meta">3 shoppers · daily 07:00</span>
            <span className="ac-id"><span className="ac-ic"><CardIcon /></span>Stops at payment</span>
          </header>

          {/* the 3 shoppers on 1 step rail: 5 steps of 60px, dots at 30, 90, 150, 210 and 270px into the rail */}
          <section className="ac-tl ax-fade" style={{ '--d': '.06s' }}>
            <div className="ac-ru">
              <span className="ac-ch">Shopper</span>
              {steps.map((s, i) => <b key={s} style={{ '--ac-x': `${174 + i * 60}px` }}>{s}</b>)}
              <span className="ac-ch ac-chr">Time</span>
            </div>

            <div className="ac-ln ac-l1" style={{ '--ac-o': '0s' }}>
              <span className="ac-lb"><span className="ac-ic"><DesktopIcon /></span><b>Shopper 1</b><em>UK</em></span>
              <span className="ac-tr"><i className="ac-w" />{steps.map((s, i) => <i key={s} className="ac-d" style={{ '--ac-i': String(i) }} />)}</span>
              <span className="ac-rs"><span className="ac-mk"><Sig cls="st-landed" /></span><span className="ac-v">3:04</span></span>
            </div>
            <div className="ac-ln ac-l2" style={{ '--ac-o': '.12s' }}>
              <span className="ac-lb"><span className="ac-ic"><PhoneIcon /></span><b>Shopper 2</b><em>UK</em></span>
              <span className="ac-tr"><i className="ac-w" />{steps.map((s, i) => <i key={s} className="ac-d" style={{ '--ac-i': String(i) }} />)}</span>
              <span className="ac-rs"><span className="ac-mk"><Sig cls="st-landed" /></span><span className="ac-v">3:21</span></span>
            </div>
            <div className="ac-ln ac-l3" style={{ '--ac-o': '.24s' }}>
              <span className="ac-lb"><span className="ac-ic"><DesktopIcon /></span><b>Shopper 3</b><em>US</em></span>
              <span className="ac-tr">
                <i className="ac-w" />
                {steps.slice(0, 3).map((s, i) => <i key={s} className="ac-d" style={{ '--ac-i': String(i) }} />)}
                <span className="ac-blk">Pop-up</span>
                <i className="ac-d ac-no" style={{ '--ac-i': '4' }} />
              </span>
              <span className="ac-rs"><span className="ac-mk"><Sig cls="st-working w0" /><Sig cls="st-needs w1" /></span><span className="ac-v">3:10</span></span>
            </div>
          </section>

          {/* the step that stopped it, as evidence: the checkout page beside the events it wrote */}
          <section className="ac-ev ax-fade" style={{ '--d': '.12s' }}>
            <header className="ac-eh">
              <span className="ac-ic"><BrowserIcon /></span><b>Shopper 3 · checkout</b><em>US site · desktop</em>
              <span className="ac-tm">07:03:10</span>
            </header>
            <div className="ac-eb">
              <div className="ac-shot">
                <span className="ac-url">haldane.example/checkout</span>
                <span className="ac-pg">
                  <span className="ac-pt">Checkout</span>
                  <span className="ac-fd"><i /><i /></span>
                  <span className="ac-cap"><span>Sign up for 10% off</span><i className="ac-box" aria-hidden="true" /></span>
                </span>
              </div>
              <ul className="ac-log">
                <li><span className="ac-ek">page.visited · 07:03:10</span><span>Checkout opened. A pop-up covers Continue.</span></li>
                <li className="ac-stop"><span className="ac-ek">blueprint.result · 07:03:10</span><span>Stopped at checkout: Continue is covered.</span></li>
                <li><span className="ac-ek">email.received · 07:44 and 07:46</span><span>Both UK shoppers’ abandoned checkout emails.</span></li>
              </ul>
            </div>
          </section>

          <p className="ac-note ax-fade" style={{ '--d': '.18s' }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>Haldane’s own store</span><span>Stops before payment</span></p>
          <div className="ax-toast ac-toast"><Sig cls="st-needs" /><p><b>1 checkout stopped</b><span>#ecommerce 07:05</span></p><span className="ax-btn">Review</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
