import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { catalog } from '../content/catalog'
import { study } from '../content/usecases/competitor-emails-for-retention-agencies'
import { JamesPage } from '../legacy/JamesPage'
import { Faq, FinalCta, SectionHead } from '../legacy/james/components/Blocks'
import { Mark } from '../legacy/james/components/Logo'
import { Reveal } from '../legacy/james/components/Reveal'
import { at } from '../legacy/james/components/stagger'
import { Count, Play, Step, Win } from '../legacy/james/components/UseCase'

/* /use-cases/competitor-emails-for-retention-agencies, drawn in James's format: his Clay page's hero flow, 10 steps in
   3 phases each beside its app window, the opener with its mockup, the questions and the waitlist, built from his
   pieces (src/legacy/james/components) inside his wrapper, so his styles draw it. The words are the content file's
   (content/usecases), so the head, the JSON-LD and the page say the same thing; the app windows' rows and numbers are
   here, as on his. A pet pod at a retention agency watches its category through Black Friday: 2 clients, their 18
   closest rivals and 100 brands it would like to win. Every brand, person and figure is made up; `fine` says so. */

const phases = study.how?.steps ?? []
const step = (phase: number, i: number) => phases[phase].steps[i]

/* The hero's last stop: each brand and what came back, in his tags. */
const tones = ['bad', 'idle', 'warn', 'bad']

/* The recipes the picker shows, by the names and lines on their own pages. */
const picker = ['email-sms-tracking', 'competitor-tracking', 'prospect-intelligence', 'mystery-shopper', 'price-watch', 'ad-tracking']
  .map((slug) => catalog.recipes.find((r) => r.slug === slug))
  .filter((r) => r !== undefined)

const side = [
  { brand: 'Barkwell', role: 'Client', first: '20 Nov', emails: '9', finding: '7 of 9 rivals first', tone: 'bad' },
  { brand: 'Fern Hollow Pet', role: 'Rival', first: '6 Nov', emails: '14', finding: 'First in category', tone: 'idle' },
  { brand: 'Copper & Kibble', role: 'Rival', first: '13 Nov', emails: '11', finding: 'New platform', tone: 'warn' },
  { brand: 'Brightpaw', role: 'To win', first: '24 Nov', emails: '3', finding: 'No basket reminder', tone: 'bad' },
  { brand: 'Thistle & Bone', role: 'To win', first: 'none', emails: '0', finding: 'Quiet since 9 Oct', tone: 'bad' },
]

const toWin = [
  {
    brand: 'Brightpaw',
    gap: 'No basket reminder',
    name: 'Dana Ortiz',
    role: 'Head of Ecommerce',
    what: 'Left a basket on 3 Nov. No reminder in 24 days, then 3 Black Friday emails.',
    seen: '3 Nov',
  },
  {
    brand: 'Thistle & Bone',
    gap: 'Quiet after a move',
    name: 'Owen Reyes',
    role: 'Founder',
    what: 'Moved email platform on 9 Oct. No email since, Black Friday included.',
    seen: '9 Oct',
  },
  {
    brand: 'Pebble & Paw',
    gap: 'No welcome email',
    name: 'Ruth Lin',
    role: 'Ecommerce Manager',
    what: 'Signed up on 2 Nov. No welcome email in 48 hours.',
    seen: '2 Nov',
  },
  {
    brand: 'Harrow Feeds',
    gap: 'No gap',
    name: 'Sam Okafor',
    role: 'Founder',
    what: 'Welcome email in 1 min, basket reminder in 2 hours.',
    seen: '2 Nov',
    none: true,
  },
]

/* The answer under the problem, its opening clause in bold, as on his. */
const answer = study.problem?.answer ?? ''
const cut = answer.indexOf(', ') + 1

export function RetentionAgencies() {
  const flow = study.hero.flow ?? []
  const ways = study.outputs?.groups[0]?.items ?? []
  return (
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
                            const [brand, what] = item.split(': ')
                            return (
                              <li key={item}>
                                {brand}
                                <span className={`tag ${tones[i]}`} style={at(i)}>
                                  {what}
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
              <SectionHead kicker="Why it’s done by hand" title={study.problem.heading} />
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
                  <p className="kicker">One watch per category</p>
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
              <Win title="Obsession · Watches">
                <div className="uc-row uc-between">
                  <span className="uc-mh">Watches</span>
                  <span className="uc-btn uc-pulse">Create a watch</span>
                </div>
                <ul className="uc-list uc-seq">
                  <li style={at(0)}>
                    <b>
                      Skincare clients and rivals<small>From the Competitor tracking recipe</small>
                    </b>
                    <span>140 brands</span>
                    <span className="tag idle">Weekly</span>
                  </li>
                  <li style={at(1)}>
                    <b>
                      Pitch: Harbor Supplements<small>From the Email and SMS tracking recipe</small>
                    </b>
                    <span>10 brands</span>
                    <span className="tag idle">Once</span>
                  </li>
                  <li style={at(2)}>
                    <b>
                      Clients after a rebuild<small>Described in your own words</small>
                    </b>
                    <span>12 brands</span>
                    <span className="tag idle">Each launch</span>
                  </li>
                </ul>
              </Win>
            </Step>

            <Step n={2} title={step(0, 1).title} line={step(0, 1).line} pick={step(0, 1).example}>
              <Win title="New watch · Choose a recipe">
                <p className="uc-mh">Launch from a recipe, or describe what you want to know</p>
                <ul className="uc-recipes uc-seq">
                  {picker.map((r, i) => (
                    <li key={r.slug} style={at(i)} className={`uc-rcard ${r.slug === 'email-sms-tracking' ? 'sel' : ''}`}>
                      <b>{r.name}</b>
                      {r.line}
                    </li>
                  ))}
                  <li style={at(picker.length)} className="uc-rcard own">
                    <b>Describe it yourself</b>
                    “When does each brand send its first Black Friday email?”
                  </li>
                </ul>
                <div className="uc-sets">
                  <b>Email and SMS tracking sets up for each brand:</b>
                  <span>its own inbox</span>
                  <span>a US mobile number</span>
                  <span>a browser</span>
                  <span>a watch until you stop it</span>
                </div>
              </Win>
            </Step>

            <Step n={3} title={step(0, 2).title} line={step(0, 2).line} pick={step(0, 2).example}>
              <Win title="New watch · Email and SMS tracking · Configure">
                <div className="uc-cfg">
                  <div>
                    <div className="uc-fld">
                      <p className="uc-lab">Watching</p>
                      <div className="uc-field">Pet brands: Black Friday</div>
                    </div>
                    <div className="uc-fld">
                      <p className="uc-lab">At each brand, the customer</p>
                      <ul className="uc-checks">
                        <li>
                          <span className="uc-cb on" style={at(0)} />
                          Signs up for emails
                        </li>
                        <li>
                          <span className="uc-cb on" style={at(1)} />
                          Opts in to texts
                        </li>
                        <li>
                          <span className="uc-cb on" style={at(2)} />
                          Leaves a basket
                        </li>
                        <li>
                          <span className="uc-cb" />
                          Joins the loyalty programme
                        </li>
                        <li>
                          <span className="uc-cb" />
                          Subscribes and saves
                        </li>
                        <li>
                          <span className="uc-cb" />
                          Asks support a question
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="uc-fld">
                      <p className="uc-lab">Tell me when</p>
                      <ul className="uc-rules uc-seq">
                        <li style={at(3)}>A brand sends its first Black Friday email</li>
                        <li style={at(4)}>
                          A subject line offers more than <em>30% off</em>
                        </li>
                        <li style={at(5)}>A brand moves email platform</li>
                        <li style={at(6)}>
                          No welcome email within <em>1 hour</em>, or no basket reminder within <em>24 hours</em>
                        </li>
                      </ul>
                    </div>
                    <div className="uc-fld">
                      <p className="uc-lab">Watch each brand</p>
                      <div className="uc-seg">
                        <span>48 hours</span>
                        <span className="on">To 4 Jan</span>
                        <span>Ongoing</span>
                      </div>
                    </div>
                    <div className="uc-fld">
                      <p className="uc-lab">Afterwards</p>
                      <div className="uc-seg">
                        <span>Stop</span>
                        <span className="on">Check every week</span>
                      </div>
                    </div>
                    <div className="uc-fld">
                      <p className="uc-lab">Customers based in</p>
                      <div className="uc-field uc-dd">United States</div>
                    </div>
                    <div className="uc-fld">
                      <p className="uc-lab">Alerts</p>
                      <div className="uc-field uc-dd">Slack #pet-pod, daily at 09:00</div>
                    </div>
                  </div>
                </div>
              </Win>
            </Step>

            <Step n={4} title={step(0, 3).title} line={step(0, 3).line} pick={step(0, 3).example}>
              <Win title="New watch · Add brands">
                <ul className="uc-ins">
                  <li>
                    Connect Clay<small>A table and a view</small>
                  </li>
                  <li className="sel">
                    Upload a CSV<small>pet-brands.csv</small>
                  </li>
                  <li>
                    API<small>Send rows as you go</small>
                  </li>
                  <li>
                    Paste a list<small>For one offs</small>
                  </li>
                </ul>
                <div className="uc-fld">
                  <p className="uc-lab">Read the file</p>
                  <dl className="uc-kv">
                    <dt>Website column</dt>
                    <dd className="uc-field uc-dd">Domain</dd>
                    <dt>Role column</dt>
                    <dd className="uc-field uc-dd">Tag: client, rival or to win</dd>
                    <dt>Rival of</dt>
                    <dd className="uc-field uc-dd">Client</dd>
                  </dl>
                </div>
                <div className="uc-fld">
                  <p className="uc-lab">In this list</p>
                  <ul className="uc-map uc-seq">
                    {[
                      ['Clients', '2 brands, your own'],
                      ['Rivals', '18 brands, 9 for each client'],
                      ['To win', '100 brands for the pitch list'],
                    ].map(([k, v], i) => (
                      <li key={k} style={at(i)}>
                        <span className="uc-col">{k}</span>
                        <span className="uc-arr" aria-hidden="true">
                          →
                        </span>
                        <span className="uc-field">{v}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="uc-small">A rival tagged to a client shows up in that client’s report and nowhere else.</p>
                </div>
                <div className="uc-toggle">
                  <span className="uc-tog" />
                  <div>
                    <b>Bring the history</b>
                    <small>Brands Obsession already watches come with every email since that day.</small>
                  </div>
                </div>
                <div className="uc-ready">
                  <span>
                    Ready to watch<small>74 with emails since September</small>
                  </span>
                  <b>
                    <Count to={120} /> brands now
                  </b>
                </div>
              </Win>
            </Step>

            <Step n={5} title={step(0, 4).title} line={step(0, 4).line} pick={step(0, 4).example}>
              <Win title="New watch · Review">
                <dl className="uc-sum uc-seq">
                  {[
                    ['Recipe', 'Email and SMS tracking'],
                    ['Watching', 'Pet brands: Black Friday'],
                    ['Brands', '120: 2 clients, 18 rivals, 100 to win'],
                    ['At each brand', 'Email sign up, text opt in, a basket left'],
                    ['Tell me when', 'First Black Friday email · Over 30% off · New email platform · No welcome or basket reminder'],
                    ['Watch', 'Through 4 January, then every week'],
                    ['Results', 'Slack daily, a report per client, a list of brands to win'],
                  ].map(([k, v], i) => (
                    <div key={k} style={at(i)}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="uc-row uc-end">
                  <span className="uc-btn alt">Save as a recipe</span>
                  <span className="uc-btn uc-pulse">Start watching 120 brands</span>
                </div>
              </Win>
            </Step>

            <div className="uc-phase">
              <h3>{phases[1].title}</h3>
              <span>{phases[1].line}</span>
            </div>

            <Step n={6} title={step(1, 0).title} line={step(1, 0).line}>
              <Win title="Pet brands · Brightpaw">
                <div className="uc-s6">
                  <div className="uc-id">
                    <div className="uc-row uc-between">
                      <span className="uc-mh">Brightpaw</span>
                      <span className="tag idle">Customer 7C1D</span>
                    </div>
                    <dl className="uc-idrows">
                      <div>
                        <dt>Identity</dt>
                        <dd>AI, says so to a person</dd>
                      </div>
                      <div>
                        <dt>Inbox</dt>
                        <dd>brightpaw.7c1d@test.useobsession.com</dd>
                      </div>
                      <div>
                        <dt>Mobile</dt>
                        <dd>+1 512 555 0143</dd>
                      </div>
                      <div>
                        <dt>Browser</dt>
                        <dd>Its own session, Austin</dd>
                      </div>
                    </dl>
                    <ol className="uc-log uc-seq">
                      {[
                        ['09:02:11', 'Opened the store'],
                        ['09:02:16', 'Found the sign up pop up'],
                        ['09:02:41', 'Signed up, ticked text consent'],
                        ['09:03:32', 'Welcome email, 51 s, Promotions'],
                        ['10:20:05', 'Day 2: left a basket of 2 items'],
                      ].map(([t, e], i) => (
                        <li key={t} style={at(i)}>
                          <time>{t}</time>
                          {e}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="uc-browser">
                    <div className="uc-url">brightpaw.example</div>
                    <div className="uc-page">
                      <div className="uc-pop">
                        <b>15% off your first order</b>
                        <i>
                          <span style={at(0)}>brightpaw.7c1d@test.useobsession.com</span>
                        </i>
                        <i>
                          <span style={at(1)}>+1 512 555 0143</span>
                        </i>
                        <span className="uc-pop-c">
                          <span className="uc-cb on" style={at(8)} />
                          Text me deals and restocks
                        </span>
                        <span className="uc-go">Get my 15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Win>
            </Step>

            <Step n={7} title={step(1, 1).title} line={step(1, 1).line}>
              <Win title="Watches · Pet brands: Black Friday">
                <div className="uc-row">
                  <span className="uc-mh">Pet brands: Black Friday</span>
                  <span className="tag idle">Fri 27 Nov</span>
                  <span className="uc-small">From the Email and SMS tracking recipe</span>
                </div>
                <div className="uc-track">
                  <i style={{ width: '40%' }} />
                </div>
                <ul className="uc-tiles">
                  <li>
                    <small>Emails received</small>
                    <p>
                      <b>
                        <Count to={3412} />
                      </b>
                    </p>
                  </li>
                  <li>
                    <small>Texts received</small>
                    <p>
                      <b>
                        <Count to={1108} />
                      </b>
                    </p>
                  </li>
                  <li>
                    <small>Sent a Black Friday email</small>
                    <p>
                      <b>
                        <Count to={109} />
                      </b>
                      <em>of 120</em>
                    </p>
                  </li>
                  <li className="bad">
                    <small>No basket reminder</small>
                    <p>
                      <b>
                        <Count to={31} />
                      </b>
                      <em>of 120</em>
                    </p>
                  </li>
                </ul>
                <ol className="uc-feed uc-seq">
                  {[
                    ['09:12', 'Fern Hollow Pet, a Barkwell rival: “Doors open: 50% off everything”, Promotions tab'],
                    ['08:40', 'Barkwell, a client: its 6th Black Friday email, 25% off'],
                    ['07:55', 'Copper & Kibble sent from a new email platform for the first time'],
                    ['07:30', 'Thistle & Bone: no email for 49 days, Black Friday included'],
                  ].map(([t, e], i) => (
                    <li key={t} style={at(i + 4)}>
                      <time>{t}</time>
                      {e}
                    </li>
                  ))}
                </ol>
              </Win>
            </Step>

            <Step n={8} title={step(1, 2).title} line={step(1, 2).line}>
              <Win title="Watches · Pet brands: Black Friday · Side by side">
                <ul className="uc-tiles">
                  <li>
                    <small>First Black Friday email in the category</small>
                    <p>
                      <b>6 Nov</b>
                    </p>
                  </li>
                  <li className="bad">
                    <small>Barkwell’s rivals that sent first</small>
                    <p>
                      <b>
                        <Count to={7} />
                      </b>
                      <em>of 9</em>
                    </p>
                  </li>
                  <li>
                    <small>Deepest discount in a subject line</small>
                    <p>
                      <b>
                        <Count to={50} />%
                      </b>
                    </p>
                  </li>
                  <li className="bad">
                    <small>No welcome email within an hour</small>
                    <p>
                      <b>
                        <Count to={23} />
                      </b>
                      <em>of 120</em>
                    </p>
                  </li>
                </ul>
                <div className="uc-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Brand</th>
                        <th>First Black Friday email</th>
                        <th>Emails</th>
                        <th>Finding</th>
                      </tr>
                    </thead>
                    <tbody className="uc-seq">
                      {side.map((r, i) => (
                        <tr key={r.brand} style={at(i + 3)}>
                          <td>
                            <b>{r.brand}</b>
                            <small> · {r.role}</small>
                          </td>
                          <td className={`num ${r.first === 'none' ? 'zero' : ''}`}>{r.first}</td>
                          <td className={`num ${r.emails === '0' ? 'zero' : ''}`}>{r.emails}</td>
                          <td>
                            <span className={`tag ${r.tone}`}>{r.finding}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="uc-small">120 of 120 watched through Black Friday week. 3 had no working sign up form, which is logged as a finding too.</p>
              </Win>
            </Step>

            <div className="uc-phase">
              <h3>{phases[2].title}</h3>
              <span>{phases[2].line}</span>
            </div>

            <Step n={9} title={step(2, 0).title} line={step(2, 0).line}>
              <Win title="Report · Barkwell · Black Friday 2026">
                <div className="uc-verdict">
                  <span className="uc-lab">For the client review</span>
                  <b>Barkwell sent its first Black Friday email on 20 Nov. 7 of its 9 rivals had already sent theirs, and Fern Hollow Pet was 14 days ahead.</b>
                  <span className="uc-small">Every value links to the email it came from.</span>
                </div>
                <ol className="uc-tl uc-seq">
                  {[
                    ['Fri 6 Nov 09:12', 'Fern Hollow Pet: “Early access: 40% off”, Promotions tab'],
                    ['Fri 13 Nov 08:00', 'Copper & Kibble: “Black Friday starts now: 35% off”'],
                    ['Fri 20 Nov 10:00', 'Barkwell: “Our biggest sale: 25% off”, Primary tab'],
                    ['Fri 27 Nov 09:12', 'Fern Hollow Pet: “Doors open: 50% off everything”'],
                    ['Mon 30 Nov', 'The week: Barkwell 9 emails and 4 texts, its rivals 11 emails each on average'],
                  ].map(([t, e], i) => (
                    <li key={t} style={at(i)} className={i === 2 ? 'bad' : ''}>
                      <time>{t}</time>
                      <span>{e}</span>
                    </li>
                  ))}
                </ol>
                <div className="uc-shots">
                  <div className="uc-shot">
                    <div>Fern Hollow’s first email</div>
                    <span>6 Nov, Promotions tab</span>
                  </div>
                  <div className="uc-shot bad">
                    <div>Barkwell’s first email</div>
                    <span>20 Nov, Primary tab</span>
                  </div>
                  <div className="uc-shot">
                    <div>Discounts, 9 rivals</div>
                    <span>Subject lines, 2 to 30 Nov</span>
                  </div>
                </div>
                <div className="uc-row uc-end">
                  <span className="uc-btn alt">Add to the client deck</span>
                  <span className="uc-btn">Copy proof link</span>
                </div>
              </Win>
            </Step>

            <Step n={10} title={step(2, 1).title} line={step(2, 1).line}>
              <Win title="Pet brands · Brands to win">
                <div className="uc-table uc-claytable">
                  <table>
                    <thead>
                      <tr>
                        <th>Brand</th>
                        <th>Contact</th>
                        <th className="new">Gap</th>
                        <th className="new">Seen</th>
                        <th className="new">What happened</th>
                        <th className="new">Proof</th>
                      </tr>
                    </thead>
                    <tbody>
                      {toWin.map((r, i) => (
                        <tr key={r.brand}>
                          <td>
                            <b>{r.brand}</b>
                          </td>
                          <td>
                            {r.name}
                            <small>{r.role}</small>
                          </td>
                          {[r.gap, r.seen, r.what].map((v, j) => (
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
                    <b>Obsession</b> <span className="uc-small">#pet-pod</span>
                    <br />
                    Black Friday week is done for 120 brands. Barkwell’s report is ready for Monday’s review. Of the 100 brands to win,{' '}
                    <b>12</b> sent no welcome email, <b>9</b> left a basket with no reminder and <b>4</b> moved email platform this month.
                  </p>
                </div>
              </Win>
            </Step>
          </div>
        </section>

        <section className="section sunken">
          <div className="wrap">
            <SectionHead kicker="Once it’s in" title={study.outputs?.heading ?? ''} />
            <Reveal className="uc-opener">
              <div>
                <p className="kicker">The opener</p>
                <h3 className="h2">Their own emails and your plan, in 1 email.</h3>
                <p className="muted">The proof shows what the brand’s customers get today. Your mockup shows what you’d send instead.</p>
                <div className="uc-mail">
                  <p className="uc-mail-head">
                    From <b>Maya, your agency</b> to <b>Dana Ortiz, Brightpaw</b> · Subject <b>Brightpaw’s Black Friday</b>
                  </p>
                  <p>Hi Dana,</p>
                  <p>
                    We signed up to Brightpaw on 2 November and left a basket the next morning. No reminder came, and your first Black Friday
                    email arrived on the 24th, after most of the pet brands we watch had sent theirs.
                  </p>
                  <p>I’ve mocked up a basket reminder and a Black Friday run in your voice. Worth 15 minutes?</p>
                  <p>Maya</p>
                  <p className="uc-att">
                    <span>Proof: Brightpaw, 2 to 30 Nov</span>
                    <span>Mockup: Brightpaw emails</span>
                  </p>
                </div>
                <p className="uc-small">Written by your strategist, from Brightpaw’s row.</p>
              </div>
              <div className="uc-phone-wrap">
                <p className="kicker">Your mockup</p>
                <Play className="uc-phone">
                  <div className="uc-screen uc-seq">
                    <p className="uc-screen-head" style={at(0)}>
                      Brightpaw<small>Email</small>
                    </p>
                    {[
                      ['Day 0', 'Still thinking it over? Your salmon bites are saved in your basket.'],
                      ['Day 1', 'Here’s 10% off to finish your order, today only.'],
                      ['Day 3', 'You’re in early: Black Friday starts now for you.'],
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
            <div className="wrap uc-more">
              {[study.more.recipe, study.more.sample].map((l) => (
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

        <FinalCta title={study.final.heading} line={study.final.sub ?? ''} source={study.final.capture.source} withCompany={false} />
      </div>
    </JamesPage>
  )
}
