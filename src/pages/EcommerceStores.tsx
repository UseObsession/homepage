import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FinalCta } from '../components/sections/FinalCta'
import { study } from '../content/usecases/leak-checks-for-ecommerce-stores'
import { JamesPage } from '../legacy/JamesPage'
import { Faq, SectionHead } from '../legacy/james/components/Blocks'
import { Mark } from '../legacy/james/components/Logo'
import { Reveal } from '../legacy/james/components/Reveal'
import { at } from '../legacy/james/components/stagger'
import { Count, Play, Step, Win } from '../legacy/james/components/UseCase'
import './RetentionAgencies.css'
import './EcommerceStores.css'

/* /use-cases/leak-checks-for-ecommerce-stores, drawn as the retention agencies page is (RetentionAgencies.tsx): James's
   hero flow, the problem, 10 steps in 3 phases each beside its app window, the handover with its drafted email, the
   questions, 3 link cards and the site's final section, built from his pieces inside his wrapper. Its 3 additions to
   his classes are the agencies page's (RetentionAgencies.css), and 1 of its own (EcommerceStores.css). The words are
   the content file's (content/usecases); the app windows' rows and numbers are here. 1 store carries the page:
   Halden Home, from its first check to the week's report. The store, its people and every figure on their screens are
   made up; `fine` says so. */

const phases = study.how?.steps ?? []
const step = (phase: number, i: number) => phases[phase].steps[i]

/* The hero's last stop: each journey and its verdict, in his tags. */
const tones = ['bad', 'bad', 'bad', 'ok']

const journeys = [
  ['Signs up through the pop up', true],
  ['Uses the welcome code at checkout', true],
  ['Opts in to texts', true],
  ['Browses and leaves', true],
  ['Leaves a basket', true],
  ['Leaves at checkout', true],
  ['Logs in with a code', true],
  ['Places an order, then a refund', true],
  ['Asks support a question', false],
  ['Asks for a back in stock alert', false],
] as const

const results = [
  { journey: 'Welcome email', phone: '2 min', laptop: '2 min', verdict: 'Worked' },
  { journey: 'Welcome code', phone: 'Rejected', laptop: 'Rejected', verdict: 'Broken' },
  { journey: 'Texts', phone: '1 min', laptop: '1 min', verdict: 'Worked' },
  { journey: 'Browse', phone: '3 h', laptop: '3 h', verdict: 'Worked' },
  { journey: 'Basket', phone: 'none', laptop: 'none', verdict: 'Silent' },
  { journey: 'Checkout', phone: '1 h, empty basket', laptop: '1 h, empty basket', verdict: 'Broken' },
  { journey: 'Log in', phone: '20 s', laptop: '20 s', verdict: 'Worked' },
  { journey: 'Order', phone: '40 s', laptop: '40 s', verdict: 'Worked' },
]
const failed = (v: string) => v === 'none' || v === 'Rejected' || v.includes('empty basket')

const fixes = [
  { leak: 'Welcome code', why: 'WELCOME10 ended 30 Sep; the pop up still offers it', fix: 'A live code in the pop up', who: 'Ana, in Shopify' },
  { leak: 'Basket reminder', why: 'The flow has been off since 14 Oct', fix: 'Turn it back on; reminder drafted', who: 'Kilnworth' },
  { leak: 'Checkout button', why: 'It opens the basket page, which is empty', fix: 'Use the checkout’s own return link', who: 'Kilnworth' },
]

const weeks = [
  ['3 Nov, first check', 'Rejected', 'none', 'Empty basket'],
  ['9 Nov, after the fixes', 'Works', '1 h', 'Returns the basket'],
  ['16 Nov', 'Works', '1 h', 'Returns the basket'],
]
const bad = new Set(['Rejected', 'none', 'Empty basket'])

/* The answer under the problem, its opening clause in bold, as on his. */
const answer = study.problem?.answer ?? ''
const cut = answer.indexOf(', ') + 1

export function EcommerceStores() {
  const flow = study.hero.flow ?? []
  const ways = study.outputs?.groups[0]?.items ?? []
  return (
    <>
      <JamesPage>
        <div className="uc">
          <section className="hero">
            <div className="wrap">
              <div className="hero-in">
                <span className="hero-pill">
                  Use cases <b aria-hidden="true">/</b> Ecommerce stores
                </span>
                <h1 className="h1">{study.hero.headline}</h1>
                <p className="lede">{study.hero.sub}</p>
              </div>
              <div className="hero-stage">
                <div className="uc-flow">
                  {flow.map((node, k) => (
                    <Fragment key={node.label}>
                      {k > 0 && (
                        <div className="uc-pipe" aria-hidden="true">
                          <i />
                          <i />
                          <i />
                        </div>
                      )}
                      <div className={`uc-node ${k === 1 ? 'mid' : ''}`}>
                        <span className="kicker">{node.label}</span>
                        <b>{node.title}</b>
                        {k === 2 ? (
                          <ul className="uc-out">
                            {node.items.map((item, i) => {
                              const [journey, verdict] = item.split(': ')
                              return (
                                <li key={item}>
                                  {journey}
                                  <span className={`tag ${tones[i]}`} style={at(i)}>
                                    {verdict}
                                  </span>
                                </li>
                              )
                            })}
                          </ul>
                        ) : (
                          <ul>
                            {node.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        )}
                        {k === 1 ? (
                          <span className="uc-node-foot">
                            <span className="uc-live" /> {node.foot}
                          </span>
                        ) : (
                          <span className="uc-node-foot">{node.foot}</span>
                        )}
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {study.problem && study.fit && (
            <section className="section sunken">
              <div className="wrap">
                <SectionHead kicker="Why nobody sees it" title={study.problem.heading} />
                <ul className="uc-why">
                  {study.problem.items.map((item) => (
                    <Reveal as="li" key={item.title} className="card">
                      <h3 className="h3">{item.title}</h3>
                      <p className="muted">{item.line}</p>
                    </Reveal>
                  ))}
                </ul>
                <Reveal className="uc-gives">
                  <p>
                    <b>{answer.slice(0, cut)}</b>
                    {answer.slice(cut)}
                  </p>
                </Reveal>
                <Reveal className="uc-inout">
                  <div>
                    <p className="kicker">Outside in</p>
                    <h3 className="h2">{study.fit.heading}</h3>
                    <p className="muted">{study.fit.line}</p>
                  </div>
                  <ul>
                    {study.fit.items.map((item) => (
                      <li key={item.title}>
                        <b>{item.title}</b>
                        {item.line}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </section>
          )}

          <section className="section">
            <div className="wrap">
              <SectionHead kicker="Step by step" title={study.how?.heading ?? ''} lede={study.how?.sub} />

              <div className="uc-phase first">
                <h3>{phases[0].title}</h3>
                <span>{phases[0].line}</span>
              </div>

              <Step n={1} title={step(0, 0).title} line={step(0, 0).line} pick={step(0, 0).example}>
                <Win title="New check · Your store">
                  <ul className="uc-ins">
                    <li className="sel">
                      Type its address<small>Any store a customer can reach</small>
                    </li>
                    <li>
                      Connect Shopify<small>Themes and discount codes</small>
                    </li>
                    <li>
                      Connect your email platform<small>Flows</small>
                    </li>
                    <li>
                      API<small>Send changes as they happen</small>
                    </li>
                  </ul>
                  <div className="uc-fld">
                    <p className="uc-lab">Your store</p>
                    <ul className="uc-list uc-seq">
                      <li style={at(0)}>
                        <b>
                          Halden Home
                          <small>haldenhome.example</small>
                        </b>
                        <span>Homewares</span>
                        <span className="tag idle">To check</span>
                      </li>
                      <li style={at(1)}>
                        <b>
                          Shopify
                          <small>Read only</small>
                        </b>
                        <span>Theme publishes and discount codes</span>
                        <span className="tag ok">Connected</span>
                      </li>
                      <li style={at(2)}>
                        <b>
                          Email platform
                          <small>Read only</small>
                        </b>
                        <span>Flows and their settings</span>
                        <span className="tag ok">Connected</span>
                      </li>
                    </ul>
                  </div>
                  <div className="uc-ready">
                    <span>
                      Ready to check<small>Each journey gets its own customer</small>
                    </span>
                    <b>
                      <Count to={8} /> journeys
                    </b>
                  </div>
                </Win>
              </Step>

              <Step n={2} title={step(0, 1).title} line={step(0, 1).line} pick={step(0, 1).example}>
                <Win title="New check · Halden Home · Journeys">
                  <div className="uc-cfg">
                    <div>
                      <div className="uc-fld">
                        <p className="uc-lab">At your store, the customer</p>
                        <ul className="uc-checks">
                          {journeys.map(([j, on], i) => (
                            <li key={j}>
                              <span className={`uc-cb ${on ? 'on' : ''}`} style={on ? at(i) : undefined} />
                              {j}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="uc-fld">
                        <p className="uc-lab">What counts as a leak</p>
                        <ul className="uc-rules uc-seq">
                          <li style={at(8)}>
                            No welcome email within <em>1 hour</em>
                          </li>
                          <li style={at(9)}>The welcome code rejected at checkout</li>
                          <li style={at(10)}>
                            No text within <em>1 hour</em> of opting in
                          </li>
                          <li style={at(11)}>
                            No basket or checkout reminder within <em>24 hours</em>
                          </li>
                          <li style={at(12)}>Any link that doesn’t open the live store</li>
                        </ul>
                      </div>
                      <div className="uc-fld">
                        <p className="uc-lab">Shop on</p>
                        <div className="uc-seg">
                          <span>A phone</span>
                          <span>A laptop</span>
                          <span className="on">Both</span>
                        </div>
                      </div>
                      <div className="uc-fld">
                        <p className="uc-lab">Watch</p>
                        <div className="uc-seg">
                          <span>24 hours</span>
                          <span className="on">48 hours</span>
                          <span>7 days</span>
                        </div>
                      </div>
                      <div className="uc-fld">
                        <p className="uc-lab">Afterwards</p>
                        <div className="uc-seg">
                          <span>Stop</span>
                          <span className="on">Every Monday and after every change</span>
                        </div>
                      </div>
                      <div className="uc-fld">
                        <p className="uc-lab">Results</p>
                        <div className="uc-field uc-dd">Slack #store-checks</div>
                      </div>
                    </div>
                  </div>
                </Win>
              </Step>

              <Step n={3} title={step(0, 2).title} line={step(0, 2).line} pick={step(0, 2).example}>
                <Win title="Halden Home · Welcome code">
                  <div className="uc-s6">
                    <div className="uc-id">
                      <div className="uc-row uc-between">
                        <span className="uc-mh">Halden Home</span>
                        <span className="tag idle">Customer 7C21</span>
                      </div>
                      <dl className="uc-idrows">
                        <div>
                          <dt>Identity</dt>
                          <dd>AI, says so to a person</dd>
                        </div>
                        <div>
                          <dt>Inbox</dt>
                          <dd>halden.7c21@test.useobsession.com</dd>
                        </div>
                        <div>
                          <dt>Mobile</dt>
                          <dd>+44 7700 900418</dd>
                        </div>
                        <div>
                          <dt>Browser</dt>
                          <dd>Its own session, on a phone, Leeds</dd>
                        </div>
                      </dl>
                      <ol className="uc-log uc-seq">
                        {[
                          ['09:02:04', 'Opened the store'],
                          ['09:02:11', 'Found the 10% pop up'],
                          ['09:02:30', 'Signed up'],
                          ['09:04:12', 'WELCOME10 arrived'],
                          ['09:06:40', 'Added a Linen Throw'],
                          ['09:07:15', 'Code rejected at checkout'],
                        ].map(([t, e], i) => (
                          <li key={t} style={at(i)}>
                            <time>{t}</time>
                            {e}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="uc-browser">
                      <div className="uc-url">haldenhome.example/checkout</div>
                      <div className="uc-page">
                        <div className="uc-pop">
                          <b>Checkout</b>
                          <i>
                            <span style={at(0)}>Linen Throw, oat · £68.00</span>
                          </i>
                          <i>
                            <span style={at(1)}>WELCOME10</span>
                          </i>
                          <span className="uc-pop-err">This code isn’t valid.</span>
                          <span className="uc-go">Apply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Win>
              </Step>

              <Step n={4} title={step(0, 3).title} line={step(0, 3).line} pick={step(0, 3).example}>
                <Win title="Halden Home · First check · Results">
                  <ul className="uc-tiles">
                    <li>
                      <small>Worked</small>
                      <p>
                        <b>
                          <Count to={5} />
                        </b>
                        <em>of 8</em>
                      </p>
                    </li>
                    <li className="bad">
                      <small>Silent</small>
                      <p>
                        <b>
                          <Count to={1} />
                        </b>
                      </p>
                    </li>
                    <li className="bad">
                      <small>Broken</small>
                      <p>
                        <b>
                          <Count to={2} />
                        </b>
                      </p>
                    </li>
                    <li>
                      <small>Checks run</small>
                      <p>
                        <b>
                          <Count to={16} />
                        </b>
                      </p>
                    </li>
                  </ul>
                  <div className="uc-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Journey</th>
                          <th>Phone</th>
                          <th>Laptop</th>
                          <th>Verdict</th>
                        </tr>
                      </thead>
                      <tbody className="uc-seq">
                        {results.map((r, i) => (
                          <tr key={r.journey} style={at(i + 3)}>
                            <td>
                              <b>{r.journey}</b>
                            </td>
                            <td className={`num ${failed(r.phone) ? 'zero' : ''}`}>{r.phone}</td>
                            <td className={`num ${failed(r.laptop) ? 'zero' : ''}`}>{r.laptop}</td>
                            <td>
                              <span className={`tag ${r.verdict === 'Worked' ? 'ok' : 'bad'}`}>{r.verdict}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="uc-small">16 of 16 checks done. The 2 orders were marked as AI tests and refunded.</p>
                </Win>
              </Step>

              {study.found && (
                <Reveal className="uc-inout uc-real">
                  <div>
                    <p className="kicker">What real checks found</p>
                    <h3 className="h2">{study.found.heading}</h3>
                    <p className="muted">{study.found.line}</p>
                  </div>
                  <ul>
                    {study.found.items.map((f) => (
                      <li key={f.verdict}>
                        <b>
                          {f.verdict} · {f.label}
                        </b>
                        {f.finding}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              <div className="uc-phase">
                <h3>{phases[1].title}</h3>
                <span>{phases[1].line}</span>
              </div>

              <Step n={5} title={step(1, 0).title} line={step(1, 0).line} pick={step(1, 0).example}>
                <Win title="Proof · Halden Home · Basket">
                  <div className="uc-verdict">
                    <span className="uc-lab">Silent</span>
                    <b>A basket left with the marketing box ticked got no reminder.</b>
                    <span className="uc-small">The deadline passed with nothing, logged at the minute it ran out.</span>
                  </div>
                  <ol className="uc-tl uc-seq">
                    {[
                      ['Tue 3 Nov 09:31', 'Signed up, marketing box ticked'],
                      ['Tue 3 Nov 09:33', 'Welcome email'],
                      ['Tue 3 Nov 09:40', 'Left a basket: Linen Throw, £68'],
                      ['Wed 4 Nov 09:40', 'No reminder after 24 hours'],
                      ['Thu 5 Nov 09:40', '48 hours: 1 email, no reminder'],
                    ].map(([t, e], i) => (
                      <li key={t} style={at(i)} className={i === 3 ? 'bad' : ''}>
                        <time>{t}</time>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="uc-shots">
                    <div className="uc-shot">
                      <div>Basket, Linen Throw</div>
                      <span>09:40</span>
                    </div>
                    <div className="uc-shot">
                      <div>Inbox, 1 email</div>
                      <span>Welcome only</span>
                    </div>
                    <div className="uc-shot bad">
                      <div>No reminder</div>
                      <span>48 hours</span>
                    </div>
                  </div>
                  <div className="uc-row uc-end">
                    <span className="uc-btn">Copy proof link</span>
                  </div>
                </Win>
              </Step>

              <Step n={6} title={step(1, 1).title} line={step(1, 1).line} pick={step(1, 1).example}>
                <Win title="Halden Home · 3 leaks · Fixes">
                  <div className="uc-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Leak</th>
                          <th className="new">Why</th>
                          <th className="new">Fix</th>
                          <th>For</th>
                        </tr>
                      </thead>
                      <tbody className="uc-seq">
                        {fixes.map((f, i) => (
                          <tr key={f.leak} style={at(i)}>
                            <td>
                              <b>{f.leak}</b>
                            </td>
                            <td className="new">{f.why}</td>
                            <td className="new">{f.fix}</td>
                            <td>{f.who}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="uc-small">“Why” comes from the connected Shopify and email platform. From the address alone, you get what happened and the fix to try.</p>
                  <div className="uc-slack">
                    <span className="uc-slack-av">
                      <Mark size={18} />
                    </span>
                    <p>
                      <b>Obsession</b> <span className="uc-small">#store-checks</span>
                      <br />
                      First check done: 8 journeys, <b>3</b> leaks, each with its fix. The welcome code is a 2 minute change.
                    </p>
                  </div>
                </Win>
              </Step>

              <div className="uc-phase">
                <h3>{phases[2].title}</h3>
                <span>{phases[2].line}</span>
              </div>

              <Step n={7} title={step(2, 0).title} line={step(2, 0).line} pick={step(2, 0).example}>
                <Win title="Halden Home · Every Monday">
                  <div className="uc-row">
                    <span className="uc-mh">Halden Home</span>
                    <span className="tag ok">Checked since 3 Nov</span>
                    <span className="uc-small">Every Monday, and after every change</span>
                  </div>
                  <div className="uc-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Check</th>
                          <th>Code</th>
                          <th>Basket</th>
                          <th>Checkout button</th>
                        </tr>
                      </thead>
                      <tbody className="uc-seq">
                        {weeks.map(([w, ...cells], i) => (
                          <tr key={w} style={at(i)}>
                            <td>
                              <b>{w}</b>
                            </td>
                            {cells.map((v, j) => (
                              <td key={j} className={`num ${bad.has(v) ? 'zero' : ''}`}>
                                {v}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="uc-small">The first row is the first check, so the before is on record from day 1.</p>
                </Win>
              </Step>

              <Step n={8} title={step(2, 1).title} line={step(2, 1).line} pick={step(2, 1).example}>
                <Win title="Halden Home · Thu 12 Nov · New theme">
                  <div className="uc-verdict">
                    <span className="uc-lab">Break caught</span>
                    <b>On the new theme, Add to basket does nothing on a phone.</b>
                    <span className="uc-small">Found 20 minutes after it went live. The laptop check passed.</span>
                  </div>
                  <ol className="uc-tl uc-seq">
                    {[
                      ['10:00', 'New theme published; Shopify tells Obsession'],
                      ['10:05', 'The storefront journeys run again, on a phone and a laptop'],
                      ['10:20', 'Phone: Add to basket does nothing. Alert sent with the proof'],
                      ['11:40', 'Kilnworth fixes the basket drawer'],
                      ['11:55', 'Checked again: added on a phone in 2 seconds'],
                    ].map(([t, e], i) => (
                      <li key={t} style={at(i)} className={i === 2 ? 'bad' : ''}>
                        <time>{t}</time>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="uc-slack">
                    <span className="uc-slack-av">
                      <Mark size={18} />
                    </span>
                    <p>
                      <b>Obsession</b> <span className="uc-small">#store-checks</span>
                      <br />
                      The new theme went live at 10:00. On a phone, Add to basket does nothing. Proof attached.
                    </p>
                  </div>
                </Win>
              </Step>

              <Step n={9} title={step(2, 2).title} line={step(2, 2).line} pick={step(2, 2).example}>
                <Win title="Halden Home · Fri 27 Nov · Black Friday">
                  <ul className="uc-tiles">
                    <li>
                      <small>Sale code BF25</small>
                      <p>
                        <b>Works</b>
                        <em>fixed 08:25</em>
                      </p>
                    </li>
                    <li>
                      <small>Banner links</small>
                      <p>
                        <b>
                          <Count to={6} />
                        </b>
                        <em>of 6</em>
                      </p>
                    </li>
                    <li>
                      <small>Sale prices in the basket</small>
                      <p>
                        <b>
                          <Count to={8} />
                        </b>
                        <em>of 8</em>
                      </p>
                    </li>
                    <li>
                      <small>Early access email</small>
                      <p>
                        <b>Came</b>
                        <em>Thursday</em>
                      </p>
                    </li>
                  </ul>
                  <ol className="uc-tl uc-seq">
                    {[
                      ['08:00', 'Sale live; Ana tells Obsession from Slack'],
                      ['08:01', 'Every journey runs on the sale'],
                      ['08:05', 'BF25 rejected at checkout: it starts on Saturday'],
                      ['08:20', 'Start date moved to today'],
                      ['08:25', 'Checked again: BF25 takes 25% off'],
                    ].map(([t, e], i) => (
                      <li key={t} style={at(i)} className={i === 2 ? 'bad' : ''}>
                        <time>{t}</time>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ol>
                </Win>
              </Step>

              <Step n={10} title={step(2, 3).title} line={step(2, 3).line} pick={step(2, 3).example}>
                <Win title="Report · Halden Home · Week of 23 Nov">
                  <ul className="uc-tiles">
                    {[
                      ['Journeys checked', 8, ''],
                      ['Worked', 8, 'of 8'],
                      ['Breaks caught in November', 2, ''],
                      ['Open', 0, ''],
                    ].map(([k, n, of]) => (
                      <li key={k}>
                        <small>{k}</small>
                        <p>
                          <b>
                            <Count to={n as number} />
                          </b>
                          {of && <em>{of}</em>}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <dl className="uc-sum uc-seq">
                    {[
                      ['Last week', '8 journeys on a phone and a laptop, all worked'],
                      ['12 Nov', 'Caught: Add to basket on a phone, after the new theme'],
                      ['27 Nov', 'Caught: BF25 set to start a day late'],
                      ['Fixed', 'Since 3 Nov: the welcome code, the basket reminder, the checkout button'],
                      ['Open', 'None'],
                    ].map(([k, v], i) => (
                      <div key={k} style={at(i)}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="uc-row uc-end">
                    <span className="uc-btn alt">Forward to Kilnworth</span>
                    <span className="uc-btn">Copy report link</span>
                  </div>
                </Win>
              </Step>

              {study.found && (
                <div className="uc-steps-end">
                  <Link className="btn-2" to={study.found.cta.to}>
                    {study.found.cta.label}
                  </Link>
                </div>
              )}
            </div>
          </section>

          <section className="section sunken">
            <div className="wrap">
              <SectionHead kicker="Once you have the leaks" title={study.outputs?.heading ?? ''} />
              <Reveal className="uc-opener">
                <div>
                  <p className="kicker">The handover</p>
                  <h3 className="h2">The proof and the fix, in 1 message to whoever owns it.</h3>
                  <p className="muted">The proof shows what a customer got. The fix says what to change, and the draft shows the email that should have come.</p>
                  <div className="uc-mail">
                    <p className="uc-mail-head">
                      From <b>Ana Ruiz, Halden Home</b> to <b>Kit Doyle, Kilnworth</b> · Subject <b>Basket reminder: nothing in 48 hours</b>
                    </p>
                    <p>Hi Kit,</p>
                    <p>
                      Our check left a Linen Throw in the basket on 3 November, and no reminder came. The flow has been off since 14 October.
                      The proof and a drafted reminder are attached.
                    </p>
                    <p>Can you turn it back on this week?</p>
                    <p>Ana</p>
                    <p className="uc-att">
                      <span>Proof: basket, 3 to 5 Nov</span>
                      <span>Draft: basket reminder</span>
                    </p>
                  </div>
                  <p className="uc-small">Sent from the proof page, with the fix attached.</p>
                </div>
                <div className="uc-phone-wrap">
                  <p className="kicker">The drafted reminder</p>
                  <Play className="uc-phone">
                    <div className="uc-screen uc-seq">
                      <p className="uc-screen-head" style={at(0)}>
                        Halden Home<small>Email</small>
                      </p>
                      {[
                        ['1 hour', 'Your Linen Throw is still in your basket.'],
                        ['Day 1', 'Still thinking about the Linen Throw in oat? It’s saved in your basket.'],
                        ['Day 3', 'Your basket is still here when you’re ready.'],
                      ].map(([d, t], i) => (
                        <div key={d} style={at(i + 1)}>
                          <p className="uc-day">{d}</p>
                          <p className="uc-bub">{t}</p>
                        </div>
                      ))}
                    </div>
                  </Play>
                </div>
              </Reveal>
              <ul className="uc-ways">
                {ways.map((w) => (
                  <Reveal as="li" key={w.title} className="card uc-way">
                    <p className="kicker">{w.label}</p>
                    <h3 className="h3">{w.title}</h3>
                    <p className="muted">{w.line}</p>
                    <p className="uc-eg">{w.example}</p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>

          <section className="section">
            <div className="wrap wrap-sm">
              <SectionHead kicker="Questions" title={study.faq.heading} />
              <Faq items={study.faq.items} />
            </div>
          </section>

          {study.more && (
            <section className="section">
              <div className="wrap uc-more uc-more--3">
                {[study.more.recipe, study.more.second, study.more.sample]
                  .filter((l) => l !== undefined)
                  .map((l) => (
                    <Reveal key={l.title} className="card">
                      <Link to={l.cta.to}>
                        <span className="kicker">{l.label}</span>
                        <span className="h3">{l.title}</span>
                        <span className="muted">{l.line}</span>
                        <span className="uc-more-go">{l.cta.label} →</span>
                      </Link>
                    </Reveal>
                  ))}
                <p className="uc-fine">{study.fine}</p>
              </div>
            </section>
          )}
        </div>
      </JamesPage>
      <FinalCta final={study.final} />
    </>
  )
}
