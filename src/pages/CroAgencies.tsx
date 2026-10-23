import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FinalCta } from '../components/sections/FinalCta'
import { HeroVideo } from '../components/v5/HeroVideo'
import { study } from '../content/usecases/funnel-qa-for-cro-agencies'
import { JamesPage } from '../legacy/JamesPage'
import { Faq, SectionHead } from '../legacy/james/components/Blocks'
import { Mark } from '../legacy/james/components/Logo'
import { Reveal } from '../legacy/james/components/Reveal'
import { at } from '../legacy/james/components/stagger'
import { Count, Play, Step, Win } from '../legacy/james/components/UseCase'
import './RetentionAgencies.css'
import './EcommerceStores.css'

/* /use-cases/funnel-qa-for-cro-agencies, drawn as the retention agencies page is (RetentionAgencies.tsx): James's hero
   flow, the problem, 10 steps in 3 phases each beside its app window, the opener with the agency's plan, the questions,
   4 link cards and the site's final section, built from his pieces inside his wrapper. It needs no classes of its own:
   the retention page's 3 additions and the ecommerce page's 4 link cards (EcommerceStores.css) cover it. The words are
   the content file's (content/usecases); the app windows' rows and numbers are here. 1 brand carries the page: Ferrow
   Coffee, from the pitch check to November's readout. The brands, the people and every figure on their screens are made
   up; `fine` says so. */

const phases = study.how?.steps ?? []
const step = (phase: number, i: number) => phases[phase].steps[i]

/* The hero's last stop: each brand and what happened after its sign up, in his tags. */
const tones = ['bad', 'bad', 'idle', 'bad']

const pipeline = [
  { brand: 'Ferrow Coffee', domain: 'ferrowcoffee.example', tag: 'Call Thu', tone: 'ok' },
  { brand: 'Brindlecup', domain: 'brindlecup.example', tag: 'To pitch', tone: 'idle' },
  { brand: 'Oskerby Roasters', domain: 'oskerbyroasters.example', tag: 'To pitch', tone: 'idle' },
  { brand: 'Tallis & Ash', domain: 'tallisandash.example', tag: 'To pitch', tone: 'idle' },
]

/* A value that failed: a missing email, a rejected code, or an offer off the ad's. */
const failed = (v: string) => v === 'none' || v === 'Rejected' || v.includes(', ad ')

const results = [
  { brand: 'Ferrow Coffee', offer: '15%, ad 20%', email: '7 h', code: 'Rejected', leaks: '3 leaks', tone: 'bad' },
  { brand: 'Brindlecup', offer: 'Matches', email: 'none', code: 'none', leaks: '2 leaks', tone: 'bad' },
  { brand: 'Tallis & Ash', offer: '10%, ad 15%', email: '4 min', code: 'Works', leaks: '1 leak', tone: 'bad' },
  { brand: 'Oskerby Roasters', offer: 'Matches', email: '2 min', code: 'Works', leaks: 'No leak', tone: 'idle' },
]

const rivals = [
  { brand: 'Ferrow Coffee', role: 'Prospect', offer: '15%, ad 20%', email: '7 h', code: 'Rejected' },
  { brand: 'Wendlow Coffee', role: 'Rival', offer: 'Matches', email: '2 min', code: 'Works' },
  { brand: 'Gorsedale Roasters', role: 'Rival', offer: 'Matches', email: '6 min', code: 'Works' },
  { brand: 'Linnet Roast', role: 'Rival', offer: 'Matches', email: '1 min', code: 'Works' },
  { brand: 'Mallin & Crane', role: 'Rival', offer: '10%, ad 15%', email: '9 min', code: 'Works' },
  { brand: 'Abberly Coffee', role: 'Rival', offer: 'Matches', email: '2 min', code: 'Works' },
]

const variants = [
  ['A · Code by email', '“Check your inbox”', '40 s', 'Works'],
  ['B · Code on screen', '“Your code: FERROW20”', '38 s', 'Works'],
]

const weeks = [
  ['2 Nov, the pitch check', '15%, ad 20%', '7 h', 'Rejected'],
  ['16 Nov, test 1 live', 'Matches', '40 s', 'Works'],
  ['30 Nov, Cyber Monday', 'Matches', '38 s', 'Works'],
]

/* The answer under the problem, its opening clause in bold, as on his. */
const answer = study.problem?.answer ?? ''
const cut = answer.indexOf(', ') + 1

export function CroAgencies() {
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
                  Use cases <b aria-hidden="true">/</b> CRO agencies
                </span>
                <h1 className="h1">{study.hero.headline}</h1>
                <p className="lede">{study.hero.sub}</p>
                {study.hero.video && <HeroVideo video={study.hero.video} compact />}
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
                              const [brand, verdict] = item.split(': ')
                              return (
                                <li key={item}>
                                  {brand}
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
                <SectionHead kicker="Why nobody sees past the sign up" title={study.problem.heading} />
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
                    <p className="kicker">Before the yes, and after it</p>
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
                <Win title="New check · Add brands">
                  <ul className="uc-ins">
                    <li className="sel">
                      Paste a list<small>Names or websites</small>
                    </li>
                    <li>
                      Upload a CSV<small>One column of websites</small>
                    </li>
                    <li>
                      Connect Clay<small>A table and a view</small>
                    </li>
                    <li>
                      API<small>Send brands as you go</small>
                    </li>
                  </ul>
                  <div className="uc-fld">
                    <p className="uc-lab">Pipeline: November</p>
                    <ul className="uc-list uc-seq">
                      {pipeline.map((s, i) => (
                        <li key={s.brand} style={at(i)}>
                          <b>
                            {s.brand}
                            <small>{s.domain}</small>
                          </b>
                          <span>Coffee</span>
                          <span className={`tag ${s.tone}`}>{s.tag}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="uc-small">And 8 more from the list you pasted.</p>
                  </div>
                  <div className="uc-ready">
                    <span>
                      Ready to check<small>Each brand gets its own new customer</small>
                    </span>
                    <b>
                      <Count to={12} /> brands
                    </b>
                  </div>
                </Win>
              </Step>

              <Step n={2} title={step(0, 1).title} line={step(0, 1).line} pick={step(0, 1).example}>
                <Win title="New check · Pipeline: November · Configure">
                  <div className="uc-cfg">
                    <div>
                      <div className="uc-fld">
                        <p className="uc-lab">Each visit starts from</p>
                        <div className="uc-field uc-dd">The page behind a live ad</div>
                      </div>
                      <div className="uc-fld">
                        <p className="uc-lab">At each brand, the customer</p>
                        <ul className="uc-checks">
                          <li>
                            <span className="uc-cb on" style={at(0)} />
                            Signs up through the pop up
                          </li>
                          <li>
                            <span className="uc-cb on" style={at(1)} />
                            Takes the code to checkout
                          </li>
                          <li>
                            <span className="uc-cb" />
                            Signs up through the footer form
                          </li>
                          <li>
                            <span className="uc-cb" />
                            Opts in to texts
                          </li>
                          <li>
                            <span className="uc-cb" />
                            Leaves a basket
                          </li>
                          <li>
                            <span className="uc-cb" />
                            Places an order
                          </li>
                        </ul>
                      </div>
                      <div className="uc-fld">
                        <p className="uc-lab">Device</p>
                        <div className="uc-seg">
                          <span className="on">Mobile</span>
                          <span>Desktop</span>
                          <span>Both</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="uc-fld">
                        <p className="uc-lab">What counts as a leak</p>
                        <ul className="uc-rules uc-seq">
                          <li style={at(2)}>The pop up breaks message match with the ad</li>
                          <li style={at(3)}>Nothing on screen after the sign up</li>
                          <li style={at(4)}>
                            No email within <em>1 hour</em>
                          </li>
                          <li style={at(5)}>The promised code not in the email</li>
                          <li style={at(6)}>The code rejected at checkout</li>
                        </ul>
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
                          <span className="on">Stop</span>
                          <span>Check every week</span>
                        </div>
                      </div>
                      <div className="uc-fld">
                        <p className="uc-lab">Results</p>
                        <div className="uc-field uc-dd">Slack #new-business</div>
                      </div>
                    </div>
                  </div>
                </Win>
              </Step>

              <Step n={3} title={step(0, 2).title} line={step(0, 2).line} pick={step(0, 2).example}>
                <Win title="Pipeline · Ferrow Coffee">
                  <div className="uc-s6">
                    <div className="uc-id">
                      <div className="uc-row uc-between">
                        <span className="uc-mh">Ferrow Coffee</span>
                        <span className="tag idle">Customer 5B2C</span>
                      </div>
                      <dl className="uc-idrows">
                        <div>
                          <dt>Identity</dt>
                          <dd>AI, says so to a person</dd>
                        </div>
                        <div>
                          <dt>Inbox</dt>
                          <dd>ferrowcoffee.5b2c@test.useobsession.com</dd>
                        </div>
                        <div>
                          <dt>Mobile</dt>
                          <dd>+1 303 555 0143</dd>
                        </div>
                        <div>
                          <dt>Browser</dt>
                          <dd>Its own session, on mobile, Denver</dd>
                        </div>
                      </dl>
                      <ol className="uc-log uc-seq">
                        {[
                          ['10:11:48', 'Found 3 live ads in public'],
                          ['10:12:02', 'Opened the 20% ad’s page from its link'],
                          ['10:12:07', 'No discount in the cart: the link carried no code'],
                          ['10:12:19', 'Pop up: 15% off your first bag'],
                          ['10:12:41', 'Signed up; “Check your inbox” shown'],
                        ].map(([t, e], i) => (
                          <li key={t} style={at(i)}>
                            <time>{t}</time>
                            {e}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="uc-browser">
                      <div className="uc-url">ferrowcoffee.example/subscribe</div>
                      <div className="uc-page">
                        <div className="uc-pop">
                          <b>15% off your first bag</b>
                          <i>
                            <span style={at(0)}>ferrowcoffee.5b2c@test.useobsession.com</span>
                          </i>
                          <span className="uc-go">Get my 15%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Win>
              </Step>

              <Step n={4} title={step(0, 3).title} line={step(0, 3).line} pick={step(0, 3).example}>
                <Win title="Pipeline: November · Results">
                  <ul className="uc-tiles">
                    {[
                      ['Pop up breaks message match', 4, 'bad'],
                      ['No email within 1 hour', 6, 'bad'],
                      ['Code rejected at checkout', 3, 'bad'],
                      ['2 or more leaks', 6, ''],
                    ].map(([k, n, tone]) => (
                      <li key={k} className={tone as string}>
                        <small>{k}</small>
                        <p>
                          <b>
                            <Count to={n as number} />
                          </b>
                          <em>of 12</em>
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="uc-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Brand</th>
                          <th>Offer</th>
                          <th>First email</th>
                          <th>Code</th>
                          <th>Leaks</th>
                        </tr>
                      </thead>
                      <tbody className="uc-seq">
                        {results.map((r, i) => (
                          <tr key={r.brand} style={at(i + 3)}>
                            <td>
                              <b>{r.brand}</b>
                            </td>
                            {[r.offer, r.email, r.code].map((v, j) => (
                              <td key={j} className={`num ${failed(v) ? 'zero' : ''}`}>
                                {v}
                              </td>
                            ))}
                            <td>
                              <span className={`tag ${r.tone}`}>{r.leaks}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="uc-small">12 of 12 done. Brindlecup’s pop up took the email and showed nothing, which counts as a leak too.</p>
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
                <Win title="Teardown slide · Ferrow Coffee · After the sign up">
                  <div className="uc-verdict">
                    <span className="uc-lab">3 leaks</span>
                    <b>The ad promised 20% and the pop up 15%. The code came 7 hours later and was rejected on a subscription.</b>
                    <span className="uc-small">Every step dated; the email kept as it arrived, with its headers.</span>
                  </div>
                  <ol className="uc-tl uc-seq">
                    {[
                      ['Mon 2 Nov 10:12', 'Opened the page behind the 20% ad', false],
                      ['Mon 2 Nov 10:12', 'The pop up offered 15%; signed up on mobile, “Check your inbox” shown', false],
                      ['Mon 2 Nov 11:12', 'No email after 1 hour', true],
                      ['Mon 2 Nov 17:24', 'Welcome email with FERROW15, sent at 17:23 by Ferrow’s email platform, by its own headers', false],
                      ['Mon 2 Nov 17:26', 'FERROW15 rejected on a subscription', true],
                    ].map(([t, e, bad], i) => (
                      <li key={i} style={at(i)} className={bad ? 'bad' : ''}>
                        <time>{t}</time>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="uc-shots">
                    <div className="uc-shot">
                      <div>Ad, 20% off</div>
                      <span>10:12</span>
                    </div>
                    <div className="uc-shot bad">
                      <div>Pop up, 15% off</div>
                      <span>10:12</span>
                    </div>
                    <div className="uc-shot bad">
                      <div>Checkout</div>
                      <span>17:26, code rejected</span>
                    </div>
                  </div>
                  <div className="uc-row uc-end">
                    <span className="uc-btn alt">Add to the teardown</span>
                    <span className="uc-btn">Copy proof link</span>
                  </div>
                </Win>
              </Step>

              <Step n={6} title={step(1, 1).title} line={step(1, 1).line} pick={step(1, 1).example}>
                <Win title="Pipeline · Ferrow Coffee · Beside 5 rivals">
                  <ul className="uc-tiles">
                    <li className="bad">
                      <small>First email</small>
                      <p>
                        <b>7 h</b>
                        <em>rivals 4 min</em>
                      </p>
                    </li>
                    <li>
                      <small>Message match with the ad</small>
                      <p>
                        <b>
                          <Count to={4} />
                        </b>
                        <em>of 6 brands</em>
                      </p>
                    </li>
                    <li>
                      <small>Code works on a subscription</small>
                      <p>
                        <b>
                          <Count to={5} />
                        </b>
                        <em>of 6 brands</em>
                      </p>
                    </li>
                    <li>
                      <small>Code shown on screen after the sign up</small>
                      <p>
                        <b>
                          <Count to={0} />
                        </b>
                        <em>of 6 brands</em>
                      </p>
                    </li>
                  </ul>
                  <div className="uc-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Brand</th>
                          <th>Offer</th>
                          <th>First email</th>
                          <th>Code</th>
                        </tr>
                      </thead>
                      <tbody className="uc-seq">
                        {rivals.map((r, i) => (
                          <tr key={r.brand} style={at(i + 3)}>
                            <td>
                              <b>{r.brand}</b>
                              <small> · {r.role}</small>
                            </td>
                            {[r.offer, r.email, r.code].map((v, j) => (
                              <td key={j} className={`num ${failed(v) || v === '7 h' ? 'zero' : ''}`}>
                                {v}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="uc-slack">
                    <span className="uc-slack-av">
                      <Mark size={18} />
                    </span>
                    <p>
                      <b>Obsession</b> <span className="uc-small">#new-business</span>
                      <br />
                      Ferrow Coffee is ready for Thursday: <b>3</b> leaks after the sign up, each with proof, beside 5 rivals. The slide is in
                      the teardown.
                    </p>
                  </div>
                </Win>
              </Step>

              <div className="uc-phase">
                <h3>{phases[2].title}</h3>
                <span>{phases[2].line}</span>
              </div>

              <Step n={7} title={step(2, 0).title} line={step(2, 0).line} pick={step(2, 0).example}>
                <Win title="Ferrow Coffee · Test 1 · Before launch">
                  <div className="uc-row">
                    <span className="uc-mh">Ferrow Coffee</span>
                    <span className="tag ok">Client since 9 Nov</span>
                    <span className="uc-small">Launches Monday 16 Nov</span>
                  </div>
                  <div className="uc-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Variant</th>
                          <th>On screen</th>
                          <th>First email</th>
                          <th>Code</th>
                        </tr>
                      </thead>
                      <tbody className="uc-seq">
                        {variants.map(([v, screen, email, code], i) => (
                          <tr key={v} style={at(i)}>
                            <td>
                              <b>{v}</b>
                            </td>
                            <td>{screen}</td>
                            <td className="num">{email}</td>
                            <td className="num">{code}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="uc-small">Each variant reached from its preview link, on mobile and desktop, the night before launch.</p>
                </Win>
              </Step>

              <Step n={8} title={step(2, 1).title} line={step(2, 1).line} pick={step(2, 1).example}>
                <Win title="Ferrow Coffee · Test 1 · Fri 20 Nov">
                  <div className="uc-verdict">
                    <span className="uc-lab">Leak caught</span>
                    <b>After an overnight update to the pop up app, variant B takes the email and gives no code.</b>
                    <span className="uc-small">B is ahead on opt-in rate, not yet significant. A still sends its code.</span>
                  </div>
                  <ol className="uc-tl uc-seq">
                    {[
                      ['07:00', 'The morning check: a new customer signs up through A and B on mobile'],
                      ['07:01', 'A: the code by email in 40 seconds'],
                      ['07:01', 'B: a blank where the code should be; alert sent with the proof'],
                      ['08:01', 'B: no email after 1 hour either'],
                      ['08:40', 'The agency finds the app updated overnight and reconnects B'],
                      ['09:00', 'Checked again: B shows FERROW20 and emails it in 38 seconds'],
                    ].map(([t, e], i) => (
                      <li key={i} style={at(i)} className={i === 2 || i === 3 ? 'bad' : ''}>
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
                      <b>Obsession</b> <span className="uc-small">#ferrow-coffee</span>
                      <br />
                      Test 1, variant B: since an overnight app update, the pop up takes the email and gives no code, on screen or by email.
                      Last good check Thursday 07:00. Proof attached.
                    </p>
                  </div>
                </Win>
              </Step>

              <Step n={9} title={step(2, 2).title} line={step(2, 2).line} pick={step(2, 2).example}>
                <Win title="Ferrow Coffee · Since the pitch">
                  <div className="uc-row">
                    <span className="uc-mh">Ferrow Coffee</span>
                    <span className="tag ok">Client since 9 Nov</span>
                    <span className="uc-small">Every Monday, and every morning a test is live</span>
                  </div>
                  <div className="uc-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Check</th>
                          <th>Offer</th>
                          <th>First email</th>
                          <th>Code</th>
                        </tr>
                      </thead>
                      <tbody className="uc-seq">
                        {weeks.map(([w, ...vals], i) => (
                          <tr key={w} style={at(i)}>
                            <td>
                              <b>{w}</b>
                            </td>
                            {vals.map((v, j) => (
                              <td key={j} className={`num ${failed(v) || v === '7 h' ? 'zero' : ''}`}>
                                {v}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="uc-small">The first row is the check from the pitch, so the before is on record from day 1.</p>
                </Win>
              </Step>

              <Step n={10} title={step(2, 3).title} line={step(2, 3).line} pick={step(2, 3).example}>
                <Win title="Readout · Ferrow Coffee · November">
                  <ul className="uc-tiles">
                    {[
                      ['Quick wins shipped', 3],
                      ['Variants checked every morning', 2],
                      ['Caught and fixed the same morning', 1],
                      ['Leaks open', 0],
                    ].map(([k, n]) => (
                      <li key={k}>
                        <small>{k}</small>
                        <p>
                          <b>
                            <Count to={n as number} />
                          </b>
                        </p>
                      </li>
                    ))}
                  </ul>
                  <dl className="uc-sum uc-seq">
                    {[
                      ['Fixed', 'The pop up matches the ad; the welcome email sends at once; the code works on a subscription'],
                      ['Caught', 'Test 1: B gave no code after an overnight app update, fixed the same morning'],
                      ['Open', 'None'],
                      ['Against 5 rivals', 'The fastest first email of the 6'],
                      ['Before and after', '2 Nov: first email after 7 hours, code rejected. 30 Nov: 38 seconds, code works'],
                    ].map(([k, v], i) => (
                      <div key={k} style={at(i)}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="uc-row uc-end">
                    <span className="uc-btn alt">Add to the readout</span>
                    <span className="uc-btn">Copy readout link</span>
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
                  <p className="kicker">The opener</p>
                  <h3 className="h2">Their own funnel and your first test, in 1 email.</h3>
                  <p className="muted">The proof shows what a new customer gets today. Your plan shows what you’d change first.</p>
                  <div className="uc-mail">
                    <p className="uc-mail-head">
                      From <b>Jonah, your agency</b> to <b>Sam Ortega, Ferrow Coffee</b> · Subject <b>Your 20% ad, and a 15% pop up</b>
                    </p>
                    <p>Hi Sam,</p>
                    <p>
                      Before Thursday’s call, we followed your “20% off your first bag” ad as a new customer on mobile. The pop up offered 15%,
                      the code came 7 hours later, and it was rejected on a subscription.
                    </p>
                    <p>I’ve attached the slide and the first test we’d run. Worth walking through on Thursday?</p>
                    <p>Jonah</p>
                    <p className="uc-att">
                      <span>Proof: Ferrow Coffee, 2 to 4 Nov</span>
                      <span>Plan: after the sign up</span>
                    </p>
                  </div>
                  <p className="uc-small">Written by your audit lead, from the brand’s proof.</p>
                </div>
                <div className="uc-phone-wrap">
                  <p className="kicker">Your plan</p>
                  <Play className="uc-phone">
                    <div className="uc-screen uc-seq">
                      <p className="uc-screen-head" style={at(0)}>
                        Ferrow Coffee<small>Plan</small>
                      </p>
                      {[
                        ['Quick win', 'Match the pop up to the ad: 20% off your first bag.'],
                        ['Quick win', 'Send the code at once, and let it work on a subscription.'],
                        ['Test 1', 'Show the code on screen after the sign up.'],
                      ].map(([d, t], i) => (
                        <div key={i} style={at(i + 1)}>
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
              <div className="wrap uc-more uc-more--4">
                {[study.more.recipe, study.more.second, study.more.third, study.more.sample]
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
