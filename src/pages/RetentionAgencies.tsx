import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FinalCta } from '../components/sections/FinalCta'
import { study } from '../content/usecases/leak-checks-for-retention-agencies'
import { JamesPage } from '../legacy/JamesPage'
import { Faq, SectionHead } from '../legacy/james/components/Blocks'
import { Mark } from '../legacy/james/components/Logo'
import { Reveal } from '../legacy/james/components/Reveal'
import { at } from '../legacy/james/components/stagger'
import { Count, Play, Step, Win } from '../legacy/james/components/UseCase'
import './RetentionAgencies.css'

/* /use-cases/leak-checks-for-retention-agencies, drawn in James's format: his Clay page's hero flow, the problem, 10
   steps in 3 phases each beside its app window, the opener with its mockup, the questions and the waitlist, built from
   his pieces (src/legacy/james/components) inside his wrapper, so his styles draw it. The words are the content file's
   (content/usecases), so the head, the JSON-LD and the page say the same thing; the app windows' rows and numbers are
   here, as on his. 1 store carries the page, as Tidewren carries his: Larch & Lye, from the pitch list to the month's
   report. The stores in the steps and every figure on their screens are made up; `fine` says so.
   Since the mystery shopping page merged in (21 Oct), the page also carries the real proof right after step 4 (`found`,
   in his 2 column block), 3 link cards (the 2 recipes and the real run), and the site's own final section, whose form
   takes a store's address for the 5 free checks (components/sections/FinalCta, outside his wrapper, so the site's form
   keeps its own styles). The hero's 2 buttons go to that form and to the real report. */

const phases = study.how?.steps ?? []
const step = (phase: number, i: number) => phases[phase].steps[i]

/* The hero's last stop: each store and its leak, in his tags. */
const tones = ['bad', 'bad', 'idle', 'bad']

const pitchList = [
  { store: 'Larch & Lye', domain: 'larchandlye.example' },
  { store: 'Pellwood', domain: 'pellwood.example' },
  { store: 'Fenwick Apothecary', domain: 'fenwickapothecary.example' },
  { store: 'Marrow Skin', domain: 'marrowskin.example' },
]

const results = [
  { store: 'Larch & Lye', code: 'none', text: 'none', reminder: 'none', leaks: '3 leaks', tone: 'bad' },
  { store: 'Marrow Skin', code: '6 min', text: 'none', reminder: '2 h', leaks: '1 leak', tone: 'bad' },
  { store: 'Pellwood', code: '2 min', text: '4 min', reminder: 'none', leaks: '1 leak', tone: 'bad' },
  { store: 'Fenwick Apothecary', code: '1 min', text: '3 min', reminder: '1 h', leaks: 'No leak', tone: 'idle' },
]

const sorted = [
  {
    store: 'Larch & Lye',
    name: 'Clara Holt',
    role: 'Head of Ecommerce',
    leak: 'No 15% code',
    what: 'Pop up promised 15% off. Welcome came 9 hours later, no code. No text, no basket reminder.',
  },
  { store: 'Marrow Skin', name: 'Theo Grant', role: 'Founder', leak: 'Texts never sent', what: 'Opted in for texts. 0 texts in 48 hours.' },
  { store: 'Pellwood', name: 'Nadia Reyes', role: 'Ecommerce Manager', leak: 'No basket reminder', what: 'Code in 2 min, texts in 4. Basket left, no reminder.' },
  { store: 'Fenwick Apothecary', name: 'Ruth Lin', role: 'Founder', leak: 'No leak', what: 'Code in 1 min, basket reminder in 1 hour.', none: true },
]

const rivals = [
  { store: 'Larch & Lye', role: 'Client', welcome: '40 s', reminder: '1 h', text: '2 min', emails: '3' },
  { store: 'Ashgrove Skin', role: 'Rival', welcome: '4 h', reminder: 'none', text: 'none', emails: '6' },
  { store: 'Ceril Botanics', role: 'Rival', welcome: '11 h', reminder: 'none', text: '5 min', emails: '5' },
  { store: 'Hollin & Pine', role: 'Rival', welcome: '2 h', reminder: 'none', text: 'none', emails: '4' },
  { store: 'Wrenmoor', role: 'Rival', welcome: '9 h', reminder: 'none', text: '1 day', emails: '7' },
  { store: 'Sallow & Co', role: 'Rival', welcome: '6 h', reminder: 'none', text: 'none', emails: '4' },
]

/* The answer under the problem, its opening clause in bold, as on his. */
const answer = study.problem?.answer ?? ''
const cut = answer.indexOf(', ') + 1

export function RetentionAgencies() {
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
                  Use cases <b aria-hidden="true">/</b> Retention agencies
                </span>
                <h1 className="h1">{study.hero.headline}</h1>
                <p className="lede">{study.hero.sub}</p>
                <div className="uc-hero-ctas">
                  <a className="btn" href="#join">
                    {study.final.capture.button}
                  </a>
                  {study.hero.secondary && (
                    <Link className="btn-2" to={study.hero.secondary.to}>
                      {study.hero.secondary.label}
                    </Link>
                  )}
                </div>
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
                              const [store, leak] = item.split(': ')
                              return (
                                <li key={item}>
                                  {store}
                                  <span className={`tag ${tones[i]}`} style={at(i)}>
                                    {leak}
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
                <SectionHead kicker="Why a login isn’t enough" title={study.problem.heading} />
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
                <Win title="New check · Add stores">
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
                      API<small>Send stores as you go</small>
                    </li>
                  </ul>
                  <div className="uc-fld">
                    <p className="uc-lab">Pitch list: skincare, November</p>
                    <ul className="uc-list uc-seq">
                      {pitchList.map((s, i) => (
                        <li key={s.store} style={at(i)}>
                          <b>
                            {s.store}
                            <small>{s.domain}</small>
                          </b>
                          <span>Skincare</span>
                          <span className="tag idle">To pitch</span>
                        </li>
                      ))}
                    </ul>
                    <p className="uc-small">And 36 more from the list you pasted.</p>
                  </div>
                  <div className="uc-ready">
                    <span>
                      Ready to check<small>Each store gets its own customer</small>
                    </span>
                    <b>
                      <Count to={40} /> stores
                    </b>
                  </div>
                </Win>
              </Step>

              <Step n={2} title={step(0, 1).title} line={step(0, 1).line} pick={step(0, 1).example}>
                <Win title="New check · Pitch list: skincare · Configure">
                  <div className="uc-cfg">
                    <div>
                      <div className="uc-fld">
                        <p className="uc-lab">At each store, the customer</p>
                        <ul className="uc-checks">
                          <li>
                            <span className="uc-cb on" style={at(0)} />
                            Signs up through the pop up
                          </li>
                          <li>
                            <span className="uc-cb on" style={at(1)} />
                            Opts in to texts
                          </li>
                          <li>
                            <span className="uc-cb on" style={at(2)} />
                            Browses a product
                          </li>
                          <li>
                            <span className="uc-cb on" style={at(3)} />
                            Leaves a basket
                          </li>
                          <li>
                            <span className="uc-cb" />
                            Asks support a question
                          </li>
                          <li>
                            <span className="uc-cb" />
                            Places an order
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="uc-fld">
                        <p className="uc-lab">What counts as a leak</p>
                        <ul className="uc-rules uc-seq">
                          <li style={at(4)}>
                            No discount code within <em>1 hour</em> of signing up
                          </li>
                          <li style={at(5)}>
                            No welcome email within <em>1 hour</em>
                          </li>
                          <li style={at(6)}>
                            No text within <em>24 hours</em> of opting in
                          </li>
                          <li style={at(7)}>
                            No basket reminder within <em>24 hours</em>
                          </li>
                        </ul>
                      </div>
                      <div className="uc-fld">
                        <p className="uc-lab">Wait at each store</p>
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
                <Win title="Pitch list · Larch & Lye">
                  <div className="uc-s6">
                    <div className="uc-id">
                      <div className="uc-row uc-between">
                        <span className="uc-mh">Larch & Lye</span>
                        <span className="tag idle">Customer 3E9A</span>
                      </div>
                      <dl className="uc-idrows">
                        <div>
                          <dt>Identity</dt>
                          <dd>AI, says so to a person</dd>
                        </div>
                        <div>
                          <dt>Inbox</dt>
                          <dd>larchandlye.3e9a@test.useobsession.com</dd>
                        </div>
                        <div>
                          <dt>Mobile</dt>
                          <dd>+1 512 555 0186</dd>
                        </div>
                        <div>
                          <dt>Browser</dt>
                          <dd>Its own session, Austin</dd>
                        </div>
                      </dl>
                      <ol className="uc-log uc-seq">
                        {[
                          ['10:14:02', 'Opened the store'],
                          ['10:14:09', 'Found the 15% pop up'],
                          ['10:14:31', 'Signed up, ticked text consent'],
                          ['10:16:40', 'Browsed the Night Balm'],
                          ['10:18:05', 'Left a basket'],
                        ].map(([t, e], i) => (
                          <li key={t} style={at(i)}>
                            <time>{t}</time>
                            {e}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="uc-browser">
                      <div className="uc-url">larchandlye.example</div>
                      <div className="uc-page">
                        <div className="uc-pop">
                          <b>15% off your first order</b>
                          <i>
                            <span style={at(0)}>larchandlye.3e9a@test.useobsession.com</span>
                          </i>
                          <i>
                            <span style={at(1)}>+1 512 555 0186</span>
                          </i>
                          <span className="uc-pop-c">
                            <span className="uc-cb on" style={at(8)} />
                            Text me offers and restocks
                          </span>
                          <span className="uc-go">Get my 15%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Win>
              </Step>

              <Step n={4} title={step(0, 3).title} line={step(0, 3).line} pick={step(0, 3).example}>
                <Win title="Pitch list: skincare · Results">
                  <ul className="uc-tiles">
                    <li className="bad">
                      <small>No code from the pop up</small>
                      <p>
                        <b>
                          <Count to={14} />
                        </b>
                        <em>of 40</em>
                      </p>
                    </li>
                    <li className="bad">
                      <small>No text after opting in</small>
                      <p>
                        <b>
                          <Count to={17} />
                        </b>
                        <em>of 40</em>
                      </p>
                    </li>
                    <li className="bad">
                      <small>Nothing after a basket</small>
                      <p>
                        <b>
                          <Count to={22} />
                        </b>
                        <em>of 40</em>
                      </p>
                    </li>
                    <li>
                      <small>3 or more leaks</small>
                      <p>
                        <b>
                          <Count to={12} />
                        </b>
                        <em>of 40</em>
                      </p>
                    </li>
                  </ul>
                  <div className="uc-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Store</th>
                          <th>Code</th>
                          <th>Text</th>
                          <th>Basket</th>
                          <th>Leaks</th>
                        </tr>
                      </thead>
                      <tbody className="uc-seq">
                        {results.map((r, i) => (
                          <tr key={r.store} style={at(i + 3)}>
                            <td>
                              <b>{r.store}</b>
                            </td>
                            <td className={`num ${r.code === 'none' ? 'zero' : ''}`}>{r.code}</td>
                            <td className={`num ${r.text === 'none' ? 'zero' : ''}`}>{r.text}</td>
                            <td className={`num ${r.reminder === 'none' ? 'zero' : ''}`}>{r.reminder}</td>
                            <td>
                              <span className={`tag ${r.tone}`}>{r.leaks}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="uc-small">40 of 40 done. 2 had no working sign up form, which counts as a leak too.</p>
                </Win>
              </Step>

              {study.found && (
                <Reveal className="uc-inout uc-real">
                  <div>
                    <p className="kicker">What real checks found</p>
                    <h3 className="h2">{study.found.heading}</h3>
                    <p className="muted">{study.found.line}</p>
                    <Link className="btn-2" to={study.found.cta.to}>
                      {study.found.cta.label}
                    </Link>
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
                <Win title="Receipt · Larch & Lye">
                  <div className="uc-verdict">
                    <span className="uc-lab">3 leaks</span>
                    <b>The pop up promised 15% off. No code came, no text came, and the basket got no reminder.</b>
                    <span className="uc-small">Each deadline passed with nothing, logged at the minute it ran out.</span>
                  </div>
                  <ol className="uc-tl uc-seq">
                    {[
                      ['Mon 2 Nov 10:14', 'Signed up through the 15% pop up, with an email and a US mobile'],
                      ['Mon 2 Nov 10:18', 'Left a basket: the Night Balm'],
                      ['Mon 2 Nov 19:20', 'Welcome email, 9 hours later, with no code in it'],
                      ['Tue 3 Nov 10:14', 'No text 24 hours after opting in'],
                      ['Tue 3 Nov 10:18', 'No basket reminder after 24 hours'],
                      ['Wed 4 Nov 10:14', '48 hours: 1 email, 0 texts, no code'],
                    ].map(([t, e], i, all) => (
                      <li key={t} style={at(i)} className={i === all.length - 1 ? 'bad' : ''}>
                        <time>{t}</time>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="uc-shots">
                    <div className="uc-shot">
                      <div>Pop up, 15% off</div>
                      <span>Signed up, 10:14</span>
                    </div>
                    <div className="uc-shot bad">
                      <div>Welcome email</div>
                      <span>19:20, no code</span>
                    </div>
                    <div className="uc-shot bad">
                      <div>No texts</div>
                      <span>48 hours</span>
                    </div>
                  </div>
                  <div className="uc-row uc-end">
                    <span className="uc-btn">Copy receipt link</span>
                  </div>
                </Win>
              </Step>

              <Step n={6} title={step(1, 1).title} line={step(1, 1).line} pick={step(1, 1).example}>
                <Win title="Pitch list: skincare · Sorted by leaks">
                  <div className="uc-table uc-claytable">
                    <table>
                      <thead>
                        <tr>
                          <th>Store</th>
                          <th>Contact</th>
                          <th className="new">Leak</th>
                          <th className="new">Seen</th>
                          <th className="new">What happened</th>
                          <th className="new">Receipt</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sorted.map((r, i) => (
                          <tr key={r.store}>
                            <td>
                              <b>{r.store}</b>
                            </td>
                            <td>
                              {r.name}
                              <small>{r.role}</small>
                            </td>
                            {[r.leak, '2 Nov', r.what].map((v, j) => (
                              <td key={j} className={`new ${r.none ? 'none' : ''}`}>
                                <span style={at(i * 4 + j)}>{v}</span>
                              </td>
                            ))}
                            <td className="new">
                              <span className="uc-proof" style={at(i * 4 + 3)}>
                                open
                              </span>
                            </td>
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
                      Pitch list done: 40 skincare stores. <b>12</b> have 3 or more leaks, sorted to the top with their receipts. Larch & Lye
                      is first.
                    </p>
                  </div>
                </Win>
              </Step>

              <div className="uc-phase">
                <h3>{phases[2].title}</h3>
                <span>{phases[2].line}</span>
              </div>

              <Step n={7} title={step(2, 0).title} line={step(2, 0).line} pick={step(2, 0).example}>
                <Win title="Clients · Larch & Lye · Every week">
                  <div className="uc-row">
                    <span className="uc-mh">Larch & Lye</span>
                    <span className="tag ok">Client since 16 Nov</span>
                    <span className="uc-small">Every Monday, and after every launch</span>
                  </div>
                  <div className="uc-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Sign up</th>
                          <th>Code</th>
                          <th>Text</th>
                          <th>Basket</th>
                        </tr>
                      </thead>
                      <tbody className="uc-seq">
                        {[
                          ['2 Nov, before you', 'none', 'none', 'none'],
                          ['23 Nov, after the rebuild', '40 s', '2 min', '1 h'],
                          ['30 Nov, Black Friday week', '38 s', '2 min', '1 h'],
                        ].map(([w, c, t, b], i) => (
                          <tr key={w} style={at(i)}>
                            <td>
                              <b>{w}</b>
                            </td>
                            {[c, t, b].map((v, j) => (
                              <td key={j} className={`num ${v === 'none' ? 'zero' : ''}`}>
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

              <Step n={8} title={step(2, 1).title} line={step(2, 1).line} pick={step(2, 1).example}>
                <Win title="Clients · Larch & Lye · Tue 1 Dec">
                  <div className="uc-verdict">
                    <span className="uc-lab">Leak caught</span>
                    <b>After this morning’s theme update, the pop up takes the email but sends no code.</b>
                    <span className="uc-small">Found 1 hour after the update. Fixed the same morning.</span>
                  </div>
                  <ol className="uc-tl uc-seq">
                    {[
                      ['09:00', 'Theme update goes live; the agency tells Obsession'],
                      ['09:20', 'A fresh sign up through the 15% pop up'],
                      ['10:20', 'No code after 1 hour: alert sent with the receipt'],
                      ['11:05', 'The agency reconnects the pop up to the welcome email'],
                      ['11:30', 'Checked again: code in 39 seconds'],
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
                      <b>Obsession</b> <span className="uc-small">#larch-and-lye</span>
                      <br />
                      After this morning’s theme update, the pop up takes the email but sends no code. Receipt attached.
                    </p>
                  </div>
                </Win>
              </Step>

              <Step n={9} title={step(2, 2).title} line={step(2, 2).line} pick={step(2, 2).example}>
                <Win title="Clients · Larch & Lye · Beside 5 rivals">
                  <ul className="uc-tiles">
                    <li>
                      <small>Welcome email</small>
                      <p>
                        <b>40 s</b>
                        <em>rivals 6 h</em>
                      </p>
                    </li>
                    <li>
                      <small>Basket reminder</small>
                      <p>
                        <b>
                          <Count to={1} />
                        </b>
                        <em>of 6 stores</em>
                      </p>
                    </li>
                    <li>
                      <small>Text after opting in</small>
                      <p>
                        <b>2 min</b>
                        <em>3 rivals never</em>
                      </p>
                    </li>
                    <li>
                      <small>Emails a week</small>
                      <p>
                        <b>
                          <Count to={3} />
                        </b>
                        <em>rivals 5</em>
                      </p>
                    </li>
                  </ul>
                  <div className="uc-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Store</th>
                          <th>Welcome</th>
                          <th>Basket</th>
                          <th>Text</th>
                          <th>A week</th>
                        </tr>
                      </thead>
                      <tbody className="uc-seq">
                        {rivals.map((r, i) => (
                          <tr key={r.store} style={at(i + 3)}>
                            <td>
                              <b>{r.store}</b>
                              <small> · {r.role}</small>
                            </td>
                            <td className="num">{r.welcome}</td>
                            <td className={`num ${r.reminder === 'none' ? 'zero' : ''}`}>{r.reminder}</td>
                            <td className={`num ${r.text === 'none' ? 'zero' : ''}`}>{r.text}</td>
                            <td className="num">{r.emails}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Win>
              </Step>

              <Step n={10} title={step(2, 3).title} line={step(2, 3).line} pick={step(2, 3).example}>
                <Win title="Report · Larch & Lye · December">
                  <ul className="uc-tiles">
                    {[
                      ['Leaks fixed', 3, ''],
                      ['Caught and fixed the same day', 1, ''],
                      ['Leaks open', 0, ''],
                      ['Faster welcome than', 5, 'of 5 rivals'],
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
                      ['Fixed', 'The 15% code, the text opt in, the basket reminder'],
                      ['Caught', 'Code stopped after the 1 Dec theme update, fixed the same morning'],
                      ['Open', 'None'],
                      ['Against 5 rivals', 'Fastest welcome email; the only basket reminder'],
                      ['Before and after', '2 Nov: 1 email, no code. 1 Dec: code in 39 seconds'],
                    ].map(([k, v], i) => (
                      <div key={k} style={at(i)}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="uc-row uc-end">
                    <span className="uc-btn alt">Add to the review deck</span>
                    <span className="uc-btn">Copy report link</span>
                  </div>
                </Win>
              </Step>
            </div>
          </section>

          <section className="section sunken">
            <div className="wrap">
              <SectionHead kicker="Once you have the leaks" title={study.outputs?.heading ?? ''} />
              <Reveal className="uc-opener">
                <div>
                  <p className="kicker">The opener</p>
                  <h3 className="h2">Their own receipt and your fix, in 1 email.</h3>
                  <p className="muted">The receipt shows what the store does to a new customer today. Your mockup shows what it would do with you.</p>
                  <div className="uc-mail">
                    <p className="uc-mail-head">
                      From <b>Maya, your agency</b> to <b>Clara Holt, Larch & Lye</b> · Subject <b>Larch & Lye’s 15% code</b>
                    </p>
                    <p>Hi Clara,</p>
                    <p>
                      We signed up through Larch & Lye’s pop up on 2 November. It promised 15% off your first order, but the code never came,
                      and the basket we left got no reminder either.
                    </p>
                    <p>I’ve mocked up the welcome email and basket reminder we’d send instead. Worth 15 minutes?</p>
                    <p>Maya</p>
                    <p className="uc-att">
                      <span>Receipt: Larch & Lye, 2 to 4 Nov</span>
                      <span>Mockup: Larch & Lye welcome</span>
                    </p>
                  </div>
                  <p className="uc-small">Written by your strategist, from the store’s receipt.</p>
                </div>
                <div className="uc-phone-wrap">
                  <p className="kicker">Your mockup</p>
                  <Play className="uc-phone">
                    <div className="uc-screen uc-seq">
                      <p className="uc-screen-head" style={at(0)}>
                        Larch & Lye<small>Email</small>
                      </p>
                      {[
                        ['Day 0', 'Welcome to Larch & Lye. Here’s your 15%: LARCH15.'],
                        ['Day 1', 'Still thinking about the Night Balm? It’s in your basket.'],
                        ['Day 3', 'Your 15% ends tonight.'],
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
