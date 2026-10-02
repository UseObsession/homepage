import { Link } from 'react-router-dom'
import { Faq, FinalCta, SectionHead } from '../components/Blocks'
import { Reveal } from '../components/Reveal'
import { at } from '../components/stagger'
import { Count, Step, Win } from '../components/UseCase'
import './PriceIntelligence.css'

/* Use case: a price intelligence firm adds what retailers show only after sign up to the sources it already collects.
   Everything here is an illustration. The firm, its client, the retailers, products, prices and figures are made up. */

const basket = [
  { product: 'Brand A macinato 250 g', ean: '80…0417', pub: '3,19 €', member: '2,69 €', gap: '−16%' },
  { product: 'Brand A grani 1 kg', ean: '80…0424', pub: '12,90 €', member: '12,90 €', gap: '' },
  { product: 'Brand A capsule x10', ean: '80…0431', pub: '3,49 €', member: '2,99 €', gap: '−14%' },
  { product: 'Rival B macinato 250 g', ean: '80…1185', pub: '2,89 €', member: '2,29 €', gap: '−21%' },
]

const inbox = [
  { time: 'Day 0, 09:04', channel: 'Email', text: 'Benvenuto! 5 € di sconto su una spesa minima di 30 €', gloss: 'Welcome coupon: €5 off a €30 shop, valid 14 days' },
  { time: 'Day 3, 18:30', channel: 'Email', text: 'Solo per i soci: doppi punti questo weekend', gloss: 'Double points for members, this weekend only' },
  { time: 'Day 7, 11:15', channel: 'SMS', text: 'Solo con la Carta: −20% sul caffè fino a domenica 11/10', gloss: '20% off coffee for card holders, 5 to 11 October', yours: true },
  { time: 'Day 16, 09:00', channel: 'Price', text: 'Brand A macinato 250 g: 2,49 € per i soci', gloss: 'Member price drops from 2,69 € to 2,49 €', yours: true },
  { time: 'Day 21, 10:40', channel: 'Email', text: 'Ci manchi! 10 € di sconto su 50 € se torni entro venerdì', gloss: 'Win back coupon: €10 off €50, until Friday' },
]

/* The promo calendar: 4 weeks from Monday 28 September. start and days are day numbers from that Monday. */
const weeks = ['Week 40 · 28 Sep', 'Week 41 · 5 Oct', 'Week 42 · 12 Oct', 'Week 43 · 19 Oct']
const span = (start: number, days: number) => ({ left: `${(start / 28) * 100}%`, width: `${(days / 28) * 100}%` })
const lanes = [
  {
    name: 'Flyer',
    bars: [
      { start: 1, days: 13, label: 'Home and cleaning' },
      { start: 14, days: 14, label: 'Breakfast: coffee −15%' },
    ],
  },
  {
    name: 'Web campaigns',
    bars: [
      { start: 0, days: 7, label: 'Back to school' },
      { start: 21, days: 7, label: 'Early Black Friday' },
    ],
  },
  { name: 'Newsletters', dots: [{ day: 3 }, { day: 10 }, { day: 17 }, { day: 24 }] },
  {
    name: 'Members',
    fresh: true,
    bars: [{ start: 7, days: 7, label: '−20% coffee, card only', hot: true }],
    dots: [
      { day: 0, label: '€5 welcome' },
      { day: 16, label: '2,49 € price' },
      { day: 21, label: '€10 win back' },
    ],
  },
]

export function PriceIntelligence() {
  return (
    <div className="uc">
      <section className="hero">
        <div className="wrap">
          <div className="hero-in">
            <span className="hero-pill">
              Use cases <b aria-hidden="true">/</b> Member prices for price intelligence
            </span>
            <h1 className="h1 pr-h1">The prices retailers only show after sign up</h1>
            <p className="lede">
              You already watch flyers, shelves, online prices and newsletters. Obsession adds what sits behind the sign up: member
              prices, welcome coupons and the offers that arrive days later, collected by test customers and delivered to your platform
              with the proof.
            </p>
            <ul className="uc-meta">
              <li className="chip">Example: a price intelligence firm</li>
              <li className="chip">Its client: a coffee brand</li>
              <li className="chip">120 Italian grocery retailers</li>
            </ul>
            <p className="uc-note">
              <span className="tag warn">Illustration</span>
              The firm, its client, the retailers, the products, the prices and the numbers on this page are made up.
            </p>
          </div>
          <div className="hero-stage">
            <div className="uc-flow">
              <div className="uc-node">
                <span className="kicker">What you collect</span>
                <b>Your sources</b>
                <ul className="pr-sources">
                  <li>
                    Flyers<span className="tag idle">today</span>
                  </li>
                  <li>
                    Shelves<span className="tag idle">today</span>
                  </li>
                  <li>
                    Online prices<span className="tag idle">today</span>
                  </li>
                  <li>
                    Newsletters<span className="tag idle">today</span>
                  </li>
                  <li className="new">
                    After sign up<span className="tag">new</span>
                  </li>
                </ul>
                <span className="uc-node-foot">Member prices · coupons · later offers</span>
              </div>
              <div className="uc-pipe" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="uc-node mid">
                <span className="kicker">Your platform</span>
                <b>One more domain</b>
                <ul>
                  <li>Matched to your product database</li>
                  <li>On your promo calendar</li>
                  <li>In your alerts and raw data</li>
                </ul>
                <span className="uc-node-foot">
                  <span className="uc-live" /> Your team, your analysis
                </span>
              </div>
              <div className="uc-pipe" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="uc-node">
                <span className="kicker">Your clients</span>
                <b>Brands and retailers</b>
                <ul>
                  <li>Trade marketing</li>
                  <li>Category management</li>
                  <li>Sales teams</li>
                </ul>
                <span className="uc-node-foot">Nothing changes in how they work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sunken">
        <div className="wrap">
          <SectionHead
            kicker="Behind the sign up"
            title="A crawler sees the shop window. A member sees the shop."
            lede="Retailers keep their sharpest prices and offers for people who’ve joined. None of it shows on a public product page or in the flyer."
          />
          <ul className="pr-gaps">
            {[
              ['Member prices', 'The price shown once you’re signed in, or with the loyalty card linked to the account.'],
              ['Welcome coupons', 'The code or credit that lands after joining, and what it takes to use it.'],
              ['Offers that arrive later', 'The email on day 3, the text on day 7, the win back coupon after three weeks.'],
              ['Prices by store', 'Online prices change once you pick a store or a postcode. Each member shops from the city you choose.'],
            ].map(([h, p]) => (
              <Reveal as="li" key={h} className="card">
                <h3 className="h3">{h}</h3>
                <p className="muted">{p}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="uc-gives">
            <p>
              <b>Each observation is dated and tied to a retailer and a store,</b> with the screenshot or the message itself, like the
              flyer pages and newsletters you already collect.
            </p>
          </Reveal>
          <Reveal className="pr-split">
            <div>
              <p className="kicker">You keep</p>
              <h3 className="h3">Your clients, your teams and your analysis.</h3>
              <ul>
                <li>The client relationships and the reports they pay for</li>
                <li>Your field network and the sources you run today</li>
                <li>Product matching against your own database</li>
                <li>The platform your clients log in to</li>
              </ul>
            </div>
            <div className="ours">
              <p className="kicker">Obsession runs</p>
              <h3 className="h3">The identities, the inboxes and the waiting.</h3>
              <ul>
                <li>A test customer per retailer and city, with its own inbox, Italian mobile number and browser</li>
                <li>The sign ups, the store choice and the readings on your basket</li>
                <li>Inboxes and phones kept open, continuously</li>
                <li>A screenshot or the message behind every observation</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            kicker="Step by step"
            title="From a retailer list to a new domain in your platform."
            lede="How the firm in this example adds member prices to one client’s coffee basket, across 120 Italian grocery retailers."
          />

          <div className="uc-phase first">
            <h3>Set it up</h3>
            <span>Steps 1 to 3</span>
          </div>

          <Step
            n={1}
            title="Send the retailers and the basket"
            line="The retailers to join, the products to read and the cities to shop from. Use the tracking basket you already run for the client."
            pick="The firm sends 120 grocery retailers, the 40 item coffee basket it already tracks for its client, and three cities."
          >
            <Win title="New watch · Retailers and basket">
              <div className="uc-fld">
                <p className="uc-lab">Retailers</p>
                <div className="pr-chips uc-seq">
                  <span style={at(0)}>Corvalle</span>
                  <span style={at(1)}>Mirtena</span>
                  <span style={at(2)} className="more">
                    and 118 more, from a CSV
                  </span>
                </div>
              </div>
              <div className="uc-fld">
                <p className="uc-lab">Basket</p>
                <div className="uc-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>EAN</th>
                      </tr>
                    </thead>
                    <tbody className="uc-seq">
                      {basket.map((b, i) => (
                        <tr key={b.product} style={at(i + 3)}>
                          <td>
                            <b>{b.product}</b>
                          </td>
                          <td className="num">{b.ean}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="uc-small">And 36 more items. The EAN helps your matching, but isn’t required.</p>
              </div>
              <div className="uc-fld">
                <p className="uc-lab">Shop from</p>
                <div className="pr-cities">
                  <span>Milano</span>
                  <span>Roma</span>
                  <span>Napoli</span>
                </div>
              </div>
            </Win>
          </Step>

          <Step
            n={2}
            title="Choose what to capture"
            line="Public and member price on every basket item, the welcome offer, and everything that arrives after sign up. Fixed rules decide each reading, so the same page always gives the same answer."
            pick="Member prices every week, to follow the promotion cycle, daily around Black Friday, and every email and text for 30 days after joining."
          >
            <Win title="New watch · Configure">
              <div className="uc-cfg">
                <div>
                  <div className="uc-fld">
                    <p className="uc-lab">Capture</p>
                    <ul className="uc-checks">
                      <li>
                        <span className="uc-cb on" style={at(0)} />
                        Member price on each basket item
                      </li>
                      <li>
                        <span className="uc-cb on" style={at(1)} />
                        Public price on the same page
                      </li>
                      <li>
                        <span className="uc-cb on" style={at(2)} />
                        Welcome coupon and its conditions
                      </li>
                      <li>
                        <span className="uc-cb on" style={at(3)} />
                        Emails and texts after sign up
                      </li>
                      <li>
                        <span className="uc-cb on" style={at(4)} />
                        Prices after choosing a store
                      </li>
                      <li className="locked">
                        <span className="uc-cb lock" />
                        Basket and delivery fees
                        <span className="tag idle">Needs the retailer’s OK</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="uc-fld">
                    <p className="uc-lab">Rules</p>
                    <ul className="uc-rules uc-seq">
                      <li style={at(5)}>Read each price signed out, then signed in, on the same page</li>
                      <li style={at(6)}>Record the store and city every price belongs to</li>
                      <li style={at(7)}>
                        Keep the inbox and phone open for <em>30 days</em>
                      </li>
                      <li style={at(8)}>Never invent identity details. Stop and report where a card needs a tax code</li>
                    </ul>
                  </div>
                  <div className="uc-fld">
                    <p className="uc-lab">How often</p>
                    <div className="uc-seg">
                      <span>Daily</span>
                      <span className="on">Weekly</span>
                      <span>Monthly</span>
                    </div>
                  </div>
                  <div className="uc-fld">
                    <p className="uc-lab">Around key dates</p>
                    <div className="uc-field uc-dd">Daily, 20 November to 2 December</div>
                  </div>
                </div>
              </div>
            </Win>
          </Step>

          <Step
            n={3}
            title="Choose how it arrives"
            line="A feed in the shape your platform already takes: one row per observation, with the image link. Matching to your product database stays with your team."
            pick="The firm takes a daily file, plus a webhook for anything that arrives between files."
          >
            <Win title="New watch · Delivery">
              <ul className="uc-ins">
                <li className="sel">
                  Daily CSV<small>One row per observation</small>
                </li>
                <li className="sel">
                  Webhook<small>As each one lands</small>
                </li>
                <li>
                  API<small>Pull when you like</small>
                </li>
                <li>
                  JSON<small>Same fields, nested</small>
                </li>
              </ul>
              <div className="uc-fld">
                <p className="uc-lab">One row, as it arrives</p>
                <dl className="uc-sum pr-fields uc-seq">
                  {[
                    ['retailer', 'Corvalle'],
                    ['store', 'Milano Centro'],
                    ['product_as_shown', 'Brand A macinato 250 g'],
                    ['ean', '80…0417, when the page shows it'],
                    ['public_price', '3,19'],
                    ['member_price', '2,69'],
                    ['captured_at', '2026-09-28 09:06'],
                    ['image_url', 'Screenshot of both readings'],
                  ].map(([k, v], i) => (
                    <div key={k} style={at(i)}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="uc-small">
                  We send the product as the retailer shows it. Your product specialists link it to your database, as they do for every
                  other source.
                </p>
              </div>
            </Win>
          </Step>

          <div className="uc-phase">
            <h3>Obsession does the collecting</h3>
            <span>Steps 4 to 6 · 30 days in this example</span>
          </div>

          <Step
            n={4}
            title="Each retailer gets its own member"
            line="A real inbox, an Italian mobile number and its own browser, set to the city you chose. It joins the way a customer would, says it’s automated, and never buys anything."
          >
            <Win title="Corvalle · Milano">
              <div className="uc-s6">
                <div className="uc-id">
                  <div className="uc-row uc-between">
                    <span className="uc-mh">Corvalle</span>
                    <span className="tag idle">Member 7C1D</span>
                  </div>
                  <dl className="uc-idrows">
                    <div>
                      <dt>Identity</dt>
                      <dd>Declared as automated</dd>
                    </div>
                    <div>
                      <dt>Inbox</dt>
                      <dd>corvalle.7c1d@test.useobsession.com</dd>
                    </div>
                    <div>
                      <dt>Mobile</dt>
                      <dd>+39 3•• ••• 0418</dd>
                    </div>
                    <div>
                      <dt>Store</dt>
                      <dd>Milano Centro</dd>
                    </div>
                  </dl>
                  <ol className="uc-log uc-seq">
                    {[
                      ['09:02:11', 'Opened the site'],
                      ['09:02:40', 'Chose the Milano Centro store'],
                      ['09:03:05', 'Joined, newsletter and texts ticked'],
                      ['09:04:12', 'Welcome email arrived, with a coupon'],
                      ['09:06:30', 'Read 40 basket items, signed out and in'],
                    ].map(([t, e], i) => (
                      <li key={t} style={at(i)}>
                        <time>{t}</time>
                        {e}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="uc-browser">
                  <div className="uc-url">corvalle.it/spesa/caffe</div>
                  <div className="pr-shop">
                    <div className="pr-shop-bar">
                      <b>Corvalle</b>
                      <span>Milano Centro</span>
                      <span className="pr-socio">Socio ✓</span>
                    </div>
                    <div className="pr-item">
                      <div className="pr-pack" aria-hidden="true">
                        <span>A</span>
                      </div>
                      <div className="pr-item-text uc-seq">
                        <b style={at(0)}>Brand A macinato 250 g</b>
                        <span style={at(1)}>
                          Per tutti <s>3,19 €</s>
                        </span>
                        <span className="pr-member" style={at(5)}>
                          Con la Carta <b>2,69 €</b>
                        </span>
                        <em style={at(6)}>Prezzo soci</em>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Win>
          </Step>

          <Step
            n={5}
            title="Signed out and signed in, side by side"
            line="Every basket item is read twice on the same page, minutes apart, with a screenshot of each. A member price only counts when both readings agree on the product and the store."
          >
            <Win title="Corvalle · Basket readings">
              <ul className="uc-tiles">
                <li>
                  <small>Items with a member price</small>
                  <p>
                    <b>
                      <Count to={14} />
                    </b>
                    <em>of 40</em>
                  </p>
                </li>
                <li>
                  <small>Average member discount</small>
                  <p>
                    <b>
                      <Count to={11} />%
                    </b>
                  </p>
                </li>
                <li>
                  <small>Biggest member discount</small>
                  <p>
                    <b>
                      <Count to={21} />%
                    </b>
                  </p>
                </li>
                <li>
                  <small>Readings, each with a screenshot</small>
                  <p>
                    <b>
                      <Count to={80} />
                    </b>
                  </p>
                </li>
              </ul>
              <div className="uc-table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Public</th>
                      <th>Member</th>
                      <th>Difference</th>
                    </tr>
                  </thead>
                  <tbody className="uc-seq">
                    {basket.map((b, i) => (
                      <tr key={b.product} style={at(i + 3)}>
                        <td>
                          <b>{b.product}</b>
                        </td>
                        <td className="num">{b.pub}</td>
                        <td className="num">{b.member}</td>
                        <td>{b.gap ? <span className="pr-gap">{b.gap}</span> : <span className="tag idle">Same price</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="uc-small">Milano Centro, 28 September 2026. Roma and Napoli are read the same morning.</p>
            </Win>
          </Step>

          <Step
            n={6}
            title="It keeps the inbox open"
            line="Welcome offers, member emails, texts and win back coupons arrive over days and weeks. Each one is captured as it lands, with its dates and conditions."
          >
            <Win title="Corvalle · After sign up">
              <ol className="pr-inbox uc-seq">
                {inbox.map((m, i) => (
                  <li key={m.time} style={at(i)} className={m.yours ? 'yours' : ''}>
                    <time>{m.time}</time>
                    <span className="tag idle">{m.channel}</span>
                    <div>
                      <q>{m.text}</q>
                      <small>{m.gloss}</small>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="uc-small">Highlighted: messages about your client’s category.</p>
            </Win>
          </Step>

          <div className="uc-phase">
            <h3>It lands in your platform</h3>
            <span>Steps 7 and 8</span>
          </div>

          <Step
            n={7}
            title="An identity card for every observation"
            line="Each row carries the retailer, the store, the dates, the conditions and a link to the screenshot or the message, like your flyer and newsletter observations already do."
          >
            <Win title="Observation · Corvalle · SMS">
              <div className="pr-card">
                <div className="pr-sms" aria-hidden="true">
                  <p className="pr-sms-head">
                    Corvalle<small>SMS</small>
                  </p>
                  <p className="pr-bubble">Solo con la Carta: −20% sul caffè fino a domenica 11/10. Ti aspettiamo!</p>
                </div>
                <dl className="uc-idrows uc-seq">
                  {[
                    ['Retailer', 'Corvalle'],
                    ['Channel', 'SMS to members'],
                    ['Received', 'Mon 5 Oct 2026, 11:15'],
                    ['Offer', '20% off coffee, card holders only'],
                    ['Valid', '5 to 11 October'],
                    ['Stores', 'All stores'],
                    ['Image', 'The message as received'],
                  ].map(([k, v], i) => (
                    <div key={k} style={at(i)}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Win>
          </Step>

          <Step
            n={8}
            title="Next to flyers, web campaigns and newsletters"
            line="Member offers become one more line on your promo calendar, so your client sees every channel at once: did the coffee promotion reach the flyer, the website, the newsletter or only the members?"
          >
            <Win title="Promo calendar · Corvalle · Coffee">
              <div className="pr-cal-wrap">
                <div className="pr-cal">
                  <div className="pr-weeks">
                    <span />
                    {weeks.map((w) => (
                      <span key={w}>{w}</span>
                    ))}
                  </div>
                  {lanes.map((l, li) => (
                    <div key={l.name} className={`pr-lane ${l.fresh ? 'fresh' : ''}`}>
                      <span className="pr-lane-name">
                        {l.name}
                        {l.fresh && <em className="tag">new</em>}
                      </span>
                      <div className="pr-track">
                        {l.bars?.map((b, bi) => (
                          <span
                            key={b.label}
                            className={`pr-bar ${'hot' in b && b.hot ? 'hot' : ''}`}
                            style={{ ...span(b.start, b.days), ...at(li * 3 + bi) }}
                          >
                            {b.label}
                          </span>
                        ))}
                        {l.dots?.map((d, di) => (
                          <i key={d.day} className="pr-dot" style={{ left: `${(d.day / 28) * 100}%`, ...at(li * 3 + di) }}>
                            {'label' in d && <span>{d.label}</span>}
                          </i>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pr-insight">
                <span className="tag warn">Only members saw it</span>
                <p>
                  5 to 11 October: 20% off coffee for card holders. That week’s flyer had no coffee, and no web campaign or newsletter
                  mentioned it.
                </p>
              </div>
            </Win>
          </Step>
        </div>
      </section>

      <section className="section sunken">
        <div className="wrap">
          <SectionHead kicker="What you can sell" title="A new module for the clients you already have." />
          <div className="pr-sell">
            {[
              {
                who: 'For brands',
                roles: 'Trade marketing, category and sales',
                items: [
                  ['Check member promotions ran', 'Turn agreed loyalty promotions into evidence, as you already do for flyers.', 'The 20% coffee offer reached Corvalle members, 5 to 11 October.'],
                  ['See who discounts you to members', 'Member price against public price, per retailer and per item.', 'Rival B is 21% cheaper for Corvalle members.'],
                  ['Price erosion behind the login', 'Which retailer goes below a threshold first, for members only.', 'Brand A macinato: 2,49 € for Corvalle members on 14 October.'],
                ],
              },
              {
                who: 'For retailers',
                roles: 'Pricing, loyalty and CRM',
                items: [
                  ['Benchmark the welcome offer', 'What each rival gives a new member, and what it takes to use it.', 'Corvalle: 5 € off a 30 € shop, valid 14 days.'],
                  ['Rivals’ member prices on your basket', 'Your tracking basket, read as a member at each rival.', '14 of 40 items carry a member price at Corvalle.'],
                  ['The sequence after sign up', 'Every email and text a rival sends new members, by day.', '9 messages in 30 days, 3 with a coupon.'],
                ],
              },
            ].map((g) => (
              <div key={g.who} className="pr-sell-group">
                <p className="kicker">
                  {g.who} <span>· {g.roles}</span>
                </p>
                <ul>
                  {g.items.map(([h, p, eg]) => (
                    <Reveal as="li" key={h} className="card uc-way">
                      <h3 className="h3">{h}</h3>
                      <p className="muted">{p}</p>
                      <p className="uc-eg">
                        <span className="tag idle">Example</span>
                        {eg}
                      </p>
                    </Reveal>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap wrap-sm">
          <SectionHead kicker="Questions" title="What price intelligence teams ask." />
          <Faq
            items={[
              {
                q: 'Do you need access to our platform?',
                a: 'No. We deliver a feed, by file, API or webhook, with the fields you choose. It loads into your platform like any other source.',
              },
              {
                q: 'Who matches products to our database?',
                a: 'Your team, as it does today. We send the product as the retailer shows it, the EAN when the page carries one, and the screenshot, so your product specialists can link it.',
              },
              {
                q: 'What about loyalty cards that need a tax code or a card from the store?',
                a: 'We don’t invent identity details. Where a programme needs a codice fiscale or an in store card, the member stops there and reports it, so you know exactly where the wall is.',
              },
              {
                q: 'Do the test members buy anything?',
                a: 'No. They join, choose a store and read what members see. Basket and delivery fees are read only with the retailer’s written OK.',
              },
              {
                q: 'How often does it run?',
                a: 'Weekly to follow promotion cycles, daily around key dates such as Black Friday, or any rhythm you set per retailer.',
              },
              {
                q: 'Will our clients see Obsession?',
                a: 'Only if you want them to. The data comes to you, and you decide how it appears in your platform.',
              },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap uc-more">
          <Reveal className="card">
            <Link to="/recipes/price-watch">
              <span className="kicker">The recipe</span>
              <span className="h3">Price and promotion watch</span>
              <span className="muted">Prices, offers and terms as a customer sees them, on the schedule you set.</span>
              <span className="uc-more-go">Learn more →</span>
            </Link>
          </Reveal>
          <Reveal className="card">
            <Link to="/sample-output">
              <span className="kicker">One real run</span>
              <span className="h3">Sample output</span>
              <span className="muted">A real store check from September 2026, shown in every format it can arrive in.</span>
              <span className="uc-more-go">See it →</span>
            </Link>
          </Reveal>
          <p className="uc-fine">
            About this page: it illustrates how the product works. The firm, its client, the retailers, the products, the prices and
            every figure are made up, and no real retailer’s prices or offers are shown. Basket and delivery fees are read only with the
            retailer’s OK.
          </p>
        </div>
      </section>

      <FinalCta
        title="Try it on ten retailers."
        line="Join the waitlist, and we’ll run ten retailers and one tracking basket: member prices, coupons and what arrives after sign up, as a feed."
        source="usecase-price-final"
      />
    </div>
  )
}
