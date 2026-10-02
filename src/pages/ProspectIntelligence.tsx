import { Link } from 'react-router-dom'
import { FinalCta, SectionHead } from '../components/Blocks'
import { Mark } from '../components/Logo'
import { Reveal } from '../components/Reveal'
import { at } from '../components/stagger'
import { Count, Play, Step, Win } from '../components/UseCase'
import { allRecipeIds, recipes, type RecipeId } from '../content/recipes'

/* Use case: an outbound agency runs prospect research for one client from a Clay table.
   Everything here is an illustration. The agency, client, brands, people and numbers are made up. */

const brands = [
  { name: 'Tidewren Swim', gap: 'No texts after opt in', tone: 'bad' },
  { name: 'Halvard & Moss', gap: 'No gap', tone: 'idle' },
  { name: 'Fennick Home', gap: 'No welcome email', tone: 'bad' },
  { name: 'Larkbound', gap: 'No texts, no reply', tone: 'bad' },
]

const shortLine: Record<RecipeId, string> = {
  competitor: 'Rivals’ sign ups, emails, offers and launches, over time',
  prospect: 'Proof of a real gap at each company on your list',
  mystery: 'Your own or a client’s store, journey by journey',
  speed: 'How fast and how well companies answer',
  prices: 'Prices, offers and terms as a customer sees them',
  ads: 'Rivals’ ads, and where each click lands',
  trial: 'A rival’s whole onboarding, on one page',
}

const columns = ['Gap', 'Seen', 'What happened', 'Proof']

const clayRows = [
  {
    company: 'Tidewren Swim',
    name: 'Hannah Price',
    role: 'Head of CRM',
    gap: 'No texts after opt in',
    what: 'Opted in for texts on 15 Sep. 3 emails, 0 texts in the 48 hours since.',
  },
  {
    company: 'Halvard & Moss',
    name: 'Leo Grant',
    role: 'Founder',
    gap: 'No gap',
    what: 'Welcome email in 2 min, 2 texts, support reply in 3 hours.',
    none: true,
  },
  {
    company: 'Fennick Home',
    name: 'Priya Shah',
    role: 'Head of Retention',
    gap: 'No welcome email',
    what: 'Signed up on 15 Sep. 1 text, no emails in the 48 hours since.',
  },
  {
    company: 'Larkbound',
    name: 'Owen Hale',
    role: 'Ecommerce Director',
    gap: 'No texts, no reply',
    what: 'Opted in on 15 Sep. 4 emails, 0 texts, no reply to a support question.',
  },
]

export function ProspectIntelligence() {
  return (
    <div className="uc">
      <section className="hero">
        <div className="wrap">
          <div className="hero-in">
            <span className="hero-pill">
              Use cases <b aria-hidden="true">/</b> Prospect intelligence with Clay
            </span>
            <h1 className="h1">Proof of a real gap at every brand on your list</h1>
            <p className="lede">
              Obsession becomes a customer of each brand your client wants to win, watches what happens, and writes the facts back into
              your Clay table.
            </p>
            <ul className="uc-meta">
              <li className="chip">Example: an outbound agency</li>
              <li className="chip">Its client: an SMS app</li>
              <li className="chip">300 UK Shopify brands</li>
            </ul>
            <p className="uc-note">
              <span className="tag warn">Illustration</span>
              The agency, its client, the brands, the people and the numbers on this page are made up.
            </p>
          </div>
          <div className="hero-stage">
            <div className="uc-flow">
              <div className="uc-node">
                <span className="kicker">Clay in</span>
                <b>Client A, UK TAM</b>
                <ul>
                  {brands.map((b) => (
                    <li key={b.name}>{b.name}</li>
                  ))}
                </ul>
                <span className="uc-node-foot">View: SMS popup is yes · 300 rows</span>
              </div>
              <div className="uc-pipe" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="uc-node mid">
                <span className="kicker">Obsession</span>
                <b>A shopper for each brand</b>
                <ul>
                  <li>Its own inbox</li>
                  <li>A UK mobile number</li>
                  <li>Its own browser</li>
                  <li>A control message and a second run</li>
                </ul>
                <span className="uc-node-foot">
                  <span className="uc-live" /> Watching for 48 hours
                </span>
              </div>
              <div className="uc-pipe" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="uc-node">
                <span className="kicker">Back in Clay</span>
                <b>4 new columns, same rows</b>
                <ul className="uc-out">
                  {brands.map((b, i) => (
                    <li key={b.name}>
                      {b.name}
                      <span className={`tag ${b.tone}`} style={at(i)}>
                        {b.gap}
                      </span>
                    </li>
                  ))}
                </ul>
                <span className="uc-node-foot">{columns.join(' · ')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sunken">
        <div className="wrap">
          <SectionHead kicker="Why installs aren’t enough" title="Install data tells you what a brand has, not what it does." />
          <ul className="uc-why">
            <Reveal as="li" className="card">
              <h3 className="h3">Everyone has the same signals</h3>
              <p className="muted">
                Store Leads and BuiltWith are open to every agency, so the brands you write to hear “noticed you use Klaviyo” every week.
              </p>
            </Reveal>
            <Reveal as="li" className="card">
              <h3 className="h3">Installed isn’t working</h3>
              <p className="muted">An install says the tool is there, not that it works. A mockup shows the fix, but nothing yet proves the problem.</p>
            </Reveal>
            <Reveal as="li" className="card">
              <h3 className="h3">Proof by hand doesn’t scale</h3>
              <p className="muted">
                Signing up, giving a number, waiting for replies and checking every inbox and phone, at 300 brands per client, is weeks of
                work for a small team.
              </p>
            </Reveal>
          </ul>
          <Reveal className="uc-gives">
            <p>
              <b>Obsession gets you a dated fact about each brand,</b> collected as a customer, about the exact problem your client’s
              product fixes.
            </p>
          </Reveal>
          <Reveal className="uc-inout">
            <div>
              <p className="kicker">Clay in, Clay out</p>
              <h3 className="h2">It starts and ends in your Clay table.</h3>
              <p className="muted">No export, no new place to work. The brands go in from Clay and the facts come back to the same rows.</p>
            </div>
            <ul>
              <li>
                <b>Your list is already there</b>
                Each client’s TAM is a Clay table, built from your ecommerce data, Store Leads and BuiltWith.
              </li>
              <li>
                <b>Facts come back as columns</b>
                Use them as a variable in your copy, a filter for who to write to, and a trigger when they change.
              </li>
              <li>
                <b>Everything else still works</b>
                Upload a CSV, call the API or paste a list for one offs, like 25 brands before a pitch.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            kicker="Step by step"
            title="From recipe to facts in Clay."
            lede="How the agency in this example runs it for one client, an SMS app, across 300 UK Shopify brands."
          />

          <div className="uc-phase first">
            <h3>Set it up</h3>
            <span>Steps 1 to 5</span>
          </div>

          <Step
            n={1}
            title="Create a watch"
            line="A watch is one list of companies, the checks to run on them, and how long to keep watching. Start one from a recipe, or by describing what you want to know."
            pick="The agency starts a new watch for Client A, an SMS app."
          >
            <Win title="Obsession · Watches">
              <div className="uc-row uc-between">
                <span className="uc-mh">Watches</span>
                <span className="uc-btn uc-pulse">Create a watch</span>
              </div>
              <ul className="uc-list uc-seq">
                <li style={at(0)}>
                  <b>
                    Client B, reviews app<small>From the Prospect research recipe</small>
                  </b>
                  <span>120 brands</span>
                  <span className="tag idle">Weekly</span>
                </li>
                <li style={at(1)}>
                  <b>
                    Pitch: helpdesk prospect<small>From the Speed to lead recipe</small>
                  </b>
                  <span>25 brands</span>
                  <span className="tag idle">Once</span>
                </li>
                <li style={at(2)}>
                  <b>
                    Client C, loyalty app<small>Described in your own words</small>
                  </b>
                  <span>210 brands</span>
                  <span className="tag idle">Weekly</span>
                </li>
              </ul>
            </Win>
          </Step>

          <Step
            n={2}
            title="Pick a recipe"
            line="A recipe sets up the checks for one job. Launch it as it is, change anything you like, or skip recipes and describe what you want to know in your own words."
            pick={
              <>
                <b>The agency picks Prospect research.</b> It proves a gap at companies you’re about to write to. Competitor tracking is for
                watching rivals over time.
              </>
            }
          >
            <Win title="New watch · Choose a recipe">
              <p className="uc-mh">Launch from a recipe, or describe what you want to know</p>
              <ul className="uc-recipes uc-seq">
                {allRecipeIds.map((id, i) => (
                  <li key={id} style={at(i)} className={`uc-rcard ${id === 'prospect' ? 'sel' : ''}`}>
                    <b>{recipes[id].name}</b>
                    {shortLine[id]}
                  </li>
                ))}
                <li style={at(allRecipeIds.length)} className="uc-rcard own">
                  <b>Describe it yourself</b>
                  “Does each brand answer a sizing question within a day?”
                </li>
              </ul>
              <div className="uc-sets">
                <b>Prospect research sets up for each company:</b>
                <span>its own inbox</span>
                <span>a UK mobile number</span>
                <span>a browser</span>
                <span>a 48 hour watch</span>
              </div>
            </Win>
          </Step>

          <Step
            n={3}
            title="Configure it"
            line="Choose the gap your client’s product closes and what counts as a gap. Each check has its own deadline, and fixed rules decide every verdict, so the same evidence always gets the same answer."
            pick="Email sign up, SMS opt in and one support question, watched for 48 hours, then every week."
          >
            <Win title="New watch · Prospect research · Configure">
              <div className="uc-cfg">
                <div>
                  <div className="uc-fld">
                    <p className="uc-lab">Watch for</p>
                    <div className="uc-field">Client A, SMS app</div>
                  </div>
                  <div className="uc-fld">
                    <p className="uc-lab">The gap to prove</p>
                    <ul className="uc-checks">
                      <li>
                        <span className="uc-cb on" style={at(0)} />
                        Email sign up
                      </li>
                      <li>
                        <span className="uc-cb on" style={at(1)} />
                        SMS opt in
                      </li>
                      <li>
                        <span className="uc-cb on" style={at(2)} />
                        One support question
                      </li>
                      <li>
                        <span className="uc-cb" />
                        WhatsApp opt in
                      </li>
                      <li>
                        <span className="uc-cb" />
                        Live chat
                      </li>
                      <li className="locked">
                        <span className="uc-cb lock" />
                        Basket, checkout and purchase
                        <span className="tag idle">Needs the brand’s OK</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="uc-fld">
                    <p className="uc-lab">What counts as a gap</p>
                    <ul className="uc-rules uc-seq">
                      <li style={at(3)}>
                        No text within <em>24 hours</em> of opting in
                      </li>
                      <li style={at(4)}>
                        No welcome email within <em>1 hour</em>
                      </li>
                      <li style={at(5)}>
                        No support reply within <em>24 hours</em>
                      </li>
                      <li style={at(6)}>Recheck every miss from a fresh number before it counts</li>
                    </ul>
                  </div>
                  <div className="uc-fld">
                    <p className="uc-lab">Watch each brand for</p>
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
                      <span className="on">Check every week</span>
                    </div>
                  </div>
                  <div className="uc-fld">
                    <p className="uc-lab">Shoppers based in</p>
                    <div className="uc-field uc-dd">United Kingdom</div>
                  </div>
                  <div className="uc-fld">
                    <p className="uc-lab">Alerts</p>
                    <div className="uc-field uc-dd">Slack #signals_client_a</div>
                  </div>
                </div>
              </div>
            </Win>
          </Step>

          <Step
            n={4}
            title="Add the companies"
            line="Connect Clay, upload a CSV, call the API or paste a list. With Clay you choose a table and a view you’ve already filtered, point at the website column, and choose where each fact lands."
            pick={
              <>
                <b>The agency connects Clay.</b> It uses its “SMS popup” view, so no check is spent on a brand with no SMS at all, and turns
                on new rows so the watch grows with the table.
              </>
            }
          >
            <Win title="New watch · Add companies">
              <ul className="uc-ins">
                <li className="sel">
                  Connect Clay<small>Connected</small>
                </li>
                <li>
                  Upload a CSV<small>One column of websites</small>
                </li>
                <li>
                  API<small>Send rows as you go</small>
                </li>
                <li>
                  Paste a list<small>For one offs</small>
                </li>
              </ul>
              <div className="uc-fld">
                <p className="uc-lab">Bring companies in</p>
                <dl className="uc-kv">
                  <dt>Table</dt>
                  <dd className="uc-field uc-dd">Client A, UK TAM</dd>
                  <dt>View</dt>
                  <dd className="uc-field uc-dd">SMS popup is yes</dd>
                  <dt>Website column</dt>
                  <dd className="uc-field uc-dd">Domain</dd>
                </dl>
              </div>
              <div className="uc-fld">
                <p className="uc-lab">Send facts back</p>
                <ul className="uc-map uc-seq">
                  {columns.map((c, i) => (
                    <li key={c} style={at(i)}>
                      <span className="uc-col">{c}</span>
                      <span className="uc-arr" aria-hidden="true">
                        →
                      </span>
                      <span className="uc-field uc-dd">New column: {c}</span>
                    </li>
                  ))}
                </ul>
                <p className="uc-small">Rows are matched on the website column. Choose an existing column instead to fill that one.</p>
              </div>
              <div className="uc-toggle">
                <span className="uc-tog" />
                <div>
                  <b>Watch new rows too</b>
                  <small>Rows added to this view later get their own watch automatically. Rows that leave the view stop.</small>
                </div>
              </div>
              <div className="uc-ready">
                <span>
                  Ready to watch<small>New rows join automatically</small>
                </span>
                <b>
                  <Count to={300} /> brands now
                </b>
              </div>
            </Win>
          </Step>

          <Step
            n={5}
            title="Check and start"
            line="One summary of what will happen. Welcome emails can arrive within minutes, and each brand’s verdict lands 48 hours after its sign up."
            pick={
              <>
                <b>The agency saves it as a recipe,</b> “SMS app client”, ready to rerun for the next SMS client it signs.
              </>
            }
          >
            <Win title="New watch · Review">
              <dl className="uc-sum uc-seq">
                {[
                  ['Recipe', 'Prospect research'],
                  ['For', 'Client A, SMS app'],
                  ['Brands', '300 now, plus new rows from the Clay view'],
                  ['Checks', 'Email sign up, SMS opt in, one support question'],
                  ['Gaps', 'No welcome in 1 hour · No text in 24 hours · No reply in 24 hours'],
                  ['Watch', '48 hours per brand, then every week'],
                  ['Results', 'Back to Clay as 4 columns, alerts in Slack'],
                ].map(([k, v], i) => (
                  <div key={k} style={at(i)}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="uc-row uc-end">
                <span className="uc-btn alt">Save as a recipe</span>
                <span className="uc-btn uc-pulse">Start watching 300 brands</span>
              </div>
            </Win>
          </Step>

          <div className="uc-phase">
            <h3>Obsession does the watching</h3>
            <span>Steps 6 to 8 · 48 hours in this example</span>
          </div>

          <Step
            n={6}
            title="Each brand gets its own shopper"
            line="A real inbox, a real UK mobile number and its own browser, used for that one brand only. It signs up the way a customer would and saves a screenshot at every step. It always says it’s automated."
          >
            <Win title="UK Shopify TAM · Tidewren Swim">
              <div className="uc-s6">
                <div className="uc-id">
                  <div className="uc-row uc-between">
                    <span className="uc-mh">Tidewren Swim</span>
                    <span className="tag idle">Shopper 4F2A</span>
                  </div>
                  <dl className="uc-idrows">
                    <div>
                      <dt>Identity</dt>
                      <dd>Declared as automated</dd>
                    </div>
                    <div>
                      <dt>Inbox</dt>
                      <dd>tidewren.4f2a@test.useobsession.com</dd>
                    </div>
                    <div>
                      <dt>Mobile</dt>
                      <dd>+44 7700 900418</dd>
                    </div>
                    <div>
                      <dt>Browser</dt>
                      <dd>Its own session, London</dd>
                    </div>
                  </dl>
                  <ol className="uc-log uc-seq">
                    {[
                      ['10:14:02', 'Opened the store'],
                      ['10:14:09', 'Found the sign up popup'],
                      ['10:14:30', 'Signed up, ticked SMS consent'],
                      ['10:15:08', 'Welcome email arrived, 38 s'],
                      ['10:20:00', 'Control text arrived, 4 s'],
                    ].map(([t, e], i) => (
                      <li key={t} style={at(i)}>
                        <time>{t}</time>
                        {e}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="uc-browser">
                  <div className="uc-url">tidewren.co.uk</div>
                  <div className="uc-page">
                    <div className="uc-pop">
                      <b>10% off your first suit</b>
                      <i>
                        <span style={at(0)}>tidewren.4f2a@test.useobsession.com</span>
                      </i>
                      <i>
                        <span style={at(1)}>+44 7700 900418</span>
                      </i>
                      <span className="uc-pop-c">
                        <span className="uc-cb on" style={at(8)} />
                        Text me offers and new drops
                      </span>
                      <span className="uc-go">Sign me up</span>
                    </div>
                  </div>
                </div>
              </div>
            </Win>
          </Step>

          <Step
            n={7}
            title="It waits, up to 48 hours"
            line="Every email, text and reply lands in that brand’s own inbox and phone. When a deadline passes with nothing, it tries again from a fresh number before calling it. Brands added later run on their own clock."
          >
            <Win title="Watches · UK Shopify TAM">
              <div className="uc-row">
                <span className="uc-mh">UK Shopify TAM</span>
                <span className="tag idle">Hour 30 of 48</span>
                <span className="uc-small">From the Prospect research recipe</span>
              </div>
              <div className="uc-track">
                <i style={{ width: '62.5%' }} />
              </div>
              <ul className="uc-tiles">
                <li>
                  <small>Emails received</small>
                  <p>
                    <b>
                      <Count to={1104} />
                    </b>
                  </p>
                </li>
                <li>
                  <small>Texts received</small>
                  <p>
                    <b>
                      <Count to={466} />
                    </b>
                  </p>
                </li>
                <li>
                  <small>Support replies</small>
                  <p>
                    <b>
                      <Count to={205} />
                    </b>
                    <em>of 296</em>
                  </p>
                </li>
                <li className="bad">
                  <small>No text 24 hours after opting in</small>
                  <p>
                    <b>
                      <Count to={74} />
                    </b>
                    <em>of 296</em>
                  </p>
                </li>
              </ul>
              <ol className="uc-feed uc-seq">
                {[
                  ['16:42', 'Halvard & Moss sent its second text'],
                  ['16:39', 'Larkbound sent its third email'],
                  ['10:14', 'Tidewren Swim: no text after 24 hours, second run started from a fresh number'],
                  ['09:20', '12 new rows arrived from Clay and started their own watch'],
                ].map(([t, e], i) => (
                  <li key={t} style={at(i + 4)}>
                    <time>{t}</time>
                    {e}
                  </li>
                ))}
              </ol>
            </Win>
          </Step>

          <Step
            n={8}
            title="Results after 48 hours"
            line="A finding for every brand. A missed deadline only counts as a gap once a control message and a second run from a fresh number confirm it."
          >
            <Win title="Watches · UK Shopify TAM · Results">
              <ul className="uc-tiles">
                <li className="bad">
                  <small>Opted in for texts, none sent</small>
                  <p>
                    <b>
                      <Count to={61} />
                    </b>
                    <em>of 296</em>
                  </p>
                </li>
                <li>
                  <small>Welcome email within an hour</small>
                  <p>
                    <b>
                      <Count to={231} />
                    </b>
                    <em>of 296</em>
                  </p>
                </li>
                <li className="bad">
                  <small>No welcome email at all</small>
                  <p>
                    <b>
                      <Count to={19} />
                    </b>
                    <em>of 296</em>
                  </p>
                </li>
                <li>
                  <small>Support took over 24 hours</small>
                  <p>
                    <b>
                      <Count to={84} />
                    </b>
                    <em>of 296</em>
                  </p>
                </li>
              </ul>
              <div className="uc-table">
                <table>
                  <thead>
                    <tr>
                      <th>Brand</th>
                      <th>Emails</th>
                      <th>Texts</th>
                      <th>Support</th>
                      <th>Finding</th>
                    </tr>
                  </thead>
                  <tbody className="uc-seq">
                    {[
                      ['Tidewren Swim', '3', '0', '26 h', 'No texts after opt in'],
                      ['Halvard & Moss', '2', '2', '3 h', ''],
                      ['Fennick Home', '0', '1', '31 h', 'No welcome email'],
                      ['Larkbound', '4', '0', 'none', 'No texts, no reply'],
                    ].map(([b, e, t, s, f], i) => (
                      <tr key={b} style={at(i + 3)}>
                        <td>
                          <b>{b}</b>
                        </td>
                        <td className={`num ${e === '0' ? 'zero' : ''}`}>{e}</td>
                        <td className={`num ${t === '0' ? 'zero' : ''}`}>{t}</td>
                        <td className={`num ${s === 'none' ? 'zero' : ''}`}>{s}</td>
                        <td>{f ? <span className="tag bad">{f}</span> : <span className="tag idle">No gap</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="uc-small">296 of 300 finished. 4 had no working sign up form, which is logged as a finding too.</p>
            </Win>
          </Step>

          <div className="uc-phase">
            <h3>You get the proof</h3>
            <span>Steps 9 and 10</span>
          </div>

          <Step
            n={9}
            title="Proof for every brand"
            line="The verdict, a timeline with every step’s time, the screenshots and the actual emails and texts. One link anyone can open, including the brand."
          >
            <Win title="Proof · Tidewren Swim">
              <div className="uc-verdict">
                <span className="uc-lab">Gap found</span>
                <b>Opted in for texts on 15 September. No texts in 48 hours.</b>
                <span className="uc-small">Confirmed with a control text and a second run from a fresh number.</span>
              </div>
              <ol className="uc-tl uc-seq">
                {[
                  ['Tue 15 Sep 10:14', 'Signed up with an email and a UK mobile'],
                  ['Tue 15 Sep 10:15', 'Welcome email after 38 s'],
                  ['Tue 15 Sep 10:20', 'Control text to the same number arrived in 4 s'],
                  ['Tue 15 Sep 10:31', 'Asked support about sizing, declared as automated'],
                  ['Wed 16 Sep 10:14', 'No text after 24 hours; second run from a fresh number'],
                  ['Wed 16 Sep 12:40', 'Support replied after 26 hours'],
                  ['Thu 17 Sep 10:14', '48 hours: 3 emails, 0 texts on either number'],
                ].map(([t, e], i, all) => (
                  <li key={t} style={at(i)} className={i === all.length - 1 ? 'bad' : ''}>
                    <time>{t}</time>
                    <span>{e}</span>
                  </li>
                ))}
              </ol>
              <div className="uc-shots">
                <div className="uc-shot">
                  <div>Popup screenshot</div>
                  <span>Consent ticked, 10:14:30</span>
                </div>
                <div className="uc-shot">
                  <div>Inbox, 3 emails</div>
                  <span>15 to 17 Sep</span>
                </div>
                <div className="uc-shot bad">
                  <div>No texts</div>
                  <span>Both numbers, 48 hours</span>
                </div>
              </div>
              <div className="uc-row uc-end">
                <span className="uc-btn">Copy proof link</span>
              </div>
            </Win>
          </Step>

          <Step
            n={10}
            title="The facts land back in Clay"
            line="Four new columns on the same rows: the gap, the date it was seen, what happened in one plain sentence, and the proof link. Obsession reports what happened; your own Clay prompts decide what to say."
          >
            <Win title="Clay table · Client A, UK TAM">
              <div className="uc-table uc-claytable">
                <table>
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th>Contact</th>
                      {columns.map((c) => (
                        <th key={c} className="new">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {clayRows.map((r, i) => (
                      <tr key={r.company}>
                        <td>
                          <b>{r.company}</b>
                        </td>
                        <td>
                          {r.name}
                          <small>{r.role}</small>
                        </td>
                        {[r.gap, '15 Sep', r.what].map((v, j) => (
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
                  <b>Obsession</b> <span className="uc-small">#signals_client_a</span>
                  <br />
                  UK Shopify TAM: the first 300 brands are done. <b>61</b> opted in for texts and never got one, and <b>19</b> never sent a
                  welcome email. New rows report as they finish. The facts and proof are in your Clay table.
                </p>
              </div>
            </Win>
          </Step>
        </div>
      </section>

      <section className="section sunken">
        <div className="wrap">
          <SectionHead kicker="Once the facts are in" title="What you do with the facts." />
          <Reveal className="uc-opener">
            <div>
              <p className="kicker">The opener</p>
              <h3 className="h2">Our proof and your mockup, in one email.</h3>
              <p className="muted">
                The proof shows what’s happening at the brand today. Your mockup shows what it could look like with your client’s product.
              </p>
              <div className="uc-mail">
                <p className="uc-mail-head">
                  From <b>Sam, Client A</b> to <b>Hannah Price, Tidewren Swim</b> · Subject <b>Tidewren’s texts</b>
                </p>
                <p>Hi Hannah,</p>
                <p>We opted in for Tidewren’s texts on 15 September. Three emails arrived in the next two days, but not one text.</p>
                <p>I’ve mocked up what your first three could look like, using your own welcome offer. Worth a look?</p>
                <p>Sam</p>
                <p className="uc-att">
                  <span>Proof: Tidewren, 15 to 17 Sep</span>
                  <span>Mockup: Tidewren texts</span>
                </p>
              </div>
              <p className="uc-small">Written by your own Clay prompt, from the “What happened” column.</p>
            </div>
            <div className="uc-phone-wrap">
              <p className="kicker">Your mockup</p>
              <Play className="uc-phone">
                <div className="uc-screen uc-seq">
                  <p className="uc-screen-head" style={at(0)}>
                    Tidewren<small>Text message</small>
                  </p>
                  {[
                    ['Day 0', 'Welcome to Tidewren! Here’s 10% off your first suit with code TIDE10.'],
                    ['Day 2', 'The Ardley is back in your size. Want us to hold one for you?'],
                    ['Day 5', 'Last day for your 10%. Reply with your usual size and we’ll suggest a fit.'],
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
            {[
              ['A sharper list', 'Write only where there’s a gap', 'Filter the Clay table on the Gap column and leave the rest out of the sequence.', '61 of 300 brands get the SMS email this month.'],
              ['Triggers', 'Changes become reasons to write', 'Weekly checks tell you when to write, and when to stop.', 'Tidewren sent its first text: pause the sequence.'],
              ['Something to sell', 'A monthly add on per client', 'Brand evidence for each SaaS client: brands checked, gaps open, gaps fixed, a proof link for each.', 'Client A, October: 73 open gaps, 12 fixed.'],
              ['Winning clients', 'Open the pitch with proof', 'Paste 25 brands from a prospect’s TAM before the first call.', '“Nine of 25 brands you’d sell to took a text opt in and never sent one.”'],
            ].map(([k, h, p, eg]) => (
              <Reveal as="li" key={k} className="card uc-way">
                <p className="kicker">{k}</p>
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
      </section>

      <section className="section">
        <div className="wrap uc-more">
          <Reveal className="card">
            <Link to="/recipes/prospect-research">
              <span className="kicker">The recipe</span>
              <span className="h3">Prospect research</span>
              <span className="muted">Every check it can run, and everything you can change.</span>
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
            About this page: it illustrates how the product works. The agency, its client, the brands, the people, the phone number and every
            figure are made up, and no real company’s results are shown. Basket, checkout and purchase checks run only with the brand’s OK.
            Clay, Store Leads, BuiltWith and Klaviyo are trademarks of their owners, named here to describe where data comes from and goes.
          </p>
        </div>
      </section>

      <FinalCta
        title="Try it on one client."
        line="Join the waitlist, and we’ll run prospect research on 20 brands from one client’s list, with the facts back in your Clay table."
        source="usecase-clay-final"
        withCompany={false}
      />
    </div>
  )
}
