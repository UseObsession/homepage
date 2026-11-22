/* The travelbook app screen (23 Nov 2026): 1 720 x 450 window of the product, at rest on its finished scene; AppScreen
   adds .play to its root to run the story. Its look and story: css/travelbook.css, loaded by the page, never imported
   here. Travel booking agent for Brackwell, an invented consultancy: on Monday at 09:12 Tom asks in #travel for London to
   Edinburgh, out Tue 1 Dec and back Thu 3 Dec. Inside the policy (economy up to £250 return, hotels up to £180 a night)
   the agent checks 6 fares and rooms, leaves out a £312 fare and sends Tom 2 flights and a hotel. He picks at 09:21; the
   flights (£148 return) are booked with the company card at 09:24 and Hotel Wrenfield (2 nights at £164, £328) at
   09:27: £476, 15 minutes after he asked. Both confirmations land; on Wednesday at 16:02 Fernway Air moves the outbound
   from 07:10 to 07:40 and Tom hears in Slack at 16:03. Every name is invented. */

function Sig({ cls }: { cls: string }) {
  return (
    <svg className={`sig ${cls}`} viewBox="2 2 96 96" aria-hidden="true"><g className="sig-rot"><path className="sig-ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" /><path className="sig-gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" /><g className="sig-orb"><path className="sig-sq" d="M65.404 16.011h18.585v18.585h-18.585Z" /></g></g></svg>
  )
}

/* the fares and rooms checked: 2 flights and the hotel sent to Tom, 1 fare over the cap left out; he picks the first
   flight and the hotel. 6 checked in all; the 2 rooms not shown were further from the office. */
const OPTIONS: { name: string; detail: string; price: string; per: string; t: string; pick?: boolean; over?: boolean }[] = [
  { name: 'Fernway Air 07:10', detail: 'LCY to EDI · back Thu 18:05', price: '£148', per: 'return', t: '1s', pick: true },
  { name: 'Fernway Air 09:30', detail: 'LCY to EDI · back Thu 19:40', price: '£196', per: 'return', t: '1.14s' },
  { name: 'Fernway Air 08:00', detail: 'LHR to EDI · back Thu 17:15', price: '£312', per: 'over £250 cap', t: '1.28s', over: true },
  { name: 'Hotel Wrenfield', detail: '2 nights · near the office', price: '£164', per: 'a night', t: '1.42s', pick: true },
]

/* the trip's own log, as the event log wrote it */
const LOG: { at: string; kind: string; text: string; t: string; chg?: boolean }[] = [
  { at: 'Mon 09:12', kind: 'message.received', text: 'Tom’s request in #travel', t: '.35s' },
  { at: '09:15', kind: 'page.visited', text: '6 fares and rooms, each saved', t: '1.55s' },
  { at: '09:21', kind: 'message.received', text: 'Tom picks the 07:10 and the hotel', t: '2.05s' },
  { at: '09:24', kind: 'page.visited', text: 'Flights booked · card ·· 4417', t: '2.45s' },
  { at: '09:25', kind: 'email.received', text: 'Fernway Air confirms FW7Q2K', t: '2.65s' },
  { at: '09:28', kind: 'email.received', text: 'Hotel Wrenfield confirms HW-58213', t: '2.95s' },
  { at: 'Wed 16:02', kind: 'email.received', text: 'Outbound now 07:40 · Tom told', t: '3.5s', chg: true },
]

export function TravelbookScreen() {
  return (
    <div className="il appx-il app-travelbook"><div className="appx-fit"><div className="appx" role="img" aria-label="The Travel booking agent for Brackwell, an invented consultancy, booking a trip from Slack. On Monday at 09:12 Tom asks in the travel channel for London to Edinburgh, out Tuesday 1 December and back Thursday 3 December, near the client's office. The policy caps economy flights at £250 return and hotels at £180 a night. The agent checks 6 fares and rooms, leaves out a £312 fare from Heathrow because it is over the cap, and sends Tom 2 flights from London City and Hotel Wrenfield. At 09:21 Tom picks the 07:10 flight and the hotel. At 09:24 the flights are booked with the company card ending 4417 for £148 return, with Tom's details from his travel profile, and at 09:27 the hotel is booked for 2 nights at £164. Both confirmations land in the agent's inbox by 09:28. The trip costs £476, inside policy, booked 15 minutes after Tom asked. On Wednesday at 16:02 the airline moves the outbound from 07:10 to 07:40; the change is logged on the trip and Tom is told in Slack at 16:03. The agent pays only with the card it is given and takes traveller details only from the company's travel profiles.">
      <div className="ax-bar">
        <span className="ax-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ax-crumb"><b>Your company</b><span>/</span>Agents<span>/</span>Travel desk</span>
        <span className="ax-search"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.25" /><path d="M10.2 10.2 13 13" /></svg>Search or type a task<span className="ax-kbd">⌘K</span></span>
        <span className="ax-team" aria-hidden="true"><span>HL</span><span>RD</span></span>
      </div>
      <div className="ax-body">
        <aside className="ax-side">
          <div className="ax-ws"><i>Y</i>Your company</div>
          <nav className="ax-nav">
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.75 7.25 8 3l5.25 4.25V13H2.75Z" /></svg>Home</a>
            <a className="on" role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><circle cx="8" cy="5.5" r="2.5" /><path d="M3.25 13.25c.6-2.4 2.5-3.75 4.75-3.75s4.15 1.35 4.75 3.75" strokeLinecap="round" /></svg>Agents<em>3</em></a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="2.75" width="4.5" height="4.5" rx="1" /><rect x="2.75" y="8.75" width="4.5" height="4.5" rx="1" /><rect x="8.75" y="8.75" width="4.5" height="4.5" rx="1" /></svg>Blueprints</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5 4 3.5h8l1.5 6v3.25h-11Z" /></svg>Needs you</a>
            <a role="none"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 2.5h8v11l-2-1.25-2 1.25-2-1.25-2 1.25Z" /><path d="M6 6h4M6 8.75h4" strokeLinecap="round" /></svg>Event log</a>
          </nav>
          <div className="ax-clients">
            <p className="ax-side-h">Travel desks</p>
            <a className="on" role="none"><i />London office</a><a role="none"><i />Manchester office</a><a role="none"><i />Client trips</a>
          </div>
          <div className="ax-side-f"><Sig cls="st-landed" /><span><b>140</b> trips this month</span></div>
        </aside>
        <div className="ax-main">
          {/* header: the trip, its dates, the declared agent */}
          <header className="tb-h ax-fade">
            <h2>Tom · London to Edinburgh</h2>
            <span className="tb-meta">Tue 1 to Thu 3 Dec</span>
            <span className="tb-id"><span className="tb-av"><Sig cls="" /></span>Obsession agent · travel desk</span>
          </header>
          <div className="tb-cols">
            {/* left: the request, the policy, the options sent and the pick */}
            <section className="ax-card tb-req ax-fade" style={{ '--d': '.06s' }}>
              <div className="tb-msg">
                <span className="tb-ava">T</span>
                <p className="tb-mt"><b>Tom</b><span>#travel · 09:12</span></p>
                <p className="tb-mb">London to Edinburgh, out Tue 1 Dec, back Thu 3 Dec. Near the client’s office, please.</p>
              </div>
              <div className="tb-pol">
                <span className="tb-cap">Economy · up to £250</span>
                <span className="tb-cap">Hotel · up to £180 a night</span>
              </div>
              <header className="tb-oh"><b>Options</b><span className="tb-ct">6 checked · 3 sent to Tom</span></header>
              {OPTIONS.map((o) => (
                <div className={`tb-o${o.pick ? ' pick' : ''}${o.over ? ' over' : ''}`} style={{ '--tb-t': o.t }} key={o.name}>
                  <span className="tb-mk">
                    {o.over ? (
                      <svg className="tb-out" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><circle cx="8" cy="8" r="5.25" /><path d="M5.5 8h5" /></svg>
                    ) : (
                      <><Sig cls="st-working w0" /><Sig cls="st-landed w1" /></>
                    )}
                  </span>
                  <span className="tb-on">
                    <span className="tb-n1"><b>{o.name}</b>{o.pick && <span className="tb-tag">Picked</span>}{o.over && <span className="tb-tag dash">Left out</span>}</span>
                    <small>{o.detail}</small>
                  </span>
                  <span className="tb-pr"><b>{o.price}</b><small>{o.per}</small></span>
                </div>
              ))}
              <div className="tb-rep"><span className="tb-ava sm">T</span><p><b>Tom</b><span>09:21</span>The 07:10 and the hotel, thanks.</p></div>
            </section>
            {/* right: the trip, its total and every event it wrote, the change last */}
            <section className="ax-card tb-trip ax-fade" style={{ '--d': '.12s' }}>
              <header className="tb-th">
                <b>Trip TR-1182</b>
                <span className="tb-sv tb-st"><span className="v0 ax-chip dash">Searching</span><span className="v1 ax-chip solid">Booked</span></span>
              </header>
              <div className="tb-tot">
                <span className="tb-sv"><span className="v0 tb-big dim">£0</span><span className="v1 tb-big">£476</span></span>
                <span className="tb-tl"><b>Inside policy</b><small>Flights £148, hotel £328</small></span>
              </div>
              <ol className="tb-log">
                {LOG.map((l) => (
                  <li className={l.chg ? 'chg' : ''} style={{ '--tb-t': l.t }} key={l.at + l.kind}>
                    <span className="tb-l1"><code>{l.kind}</code><time>{l.at}</time></span>
                    <span className="tb-l2">{l.text}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
          <p className="tb-note"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="6.5" rx="1.5" /><path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" /></svg><span>Traveller details from your profiles</span><span>Pays only with the card you give it</span></p>
          <div className="ax-toast tb-toast"><Sig cls="st-landed" /><p><b>Trip booked</b><span>£476 · 15 min</span></p><span className="ax-btn">Open trip</span></div>
        </div>
      </div>
    </div></div></div>
  )
}
