import { Link } from 'react-router-dom'
import { study } from '../../../content/usecases/prospect-intelligence-with-clay'
import { Faq, FinalCta, SectionHead } from '../components/Blocks'
import { Mark } from '../components/Logo'
import { Reveal } from '../components/Reveal'
import { at } from '../components/stagger'
import { Count, Play, Step, Win } from '../components/UseCase'
import { allRecipeIds, recipes, type RecipeId } from '../content/recipes'

/* Use case (9 Nov rewrite): an outbound agency gets a column of facts on its client's Clay rows, what each brand emails
   and texts a new customer and what never came, each dated with a screenshot. The agency, client, brands, people and
   numbers are made up, and the small print says so. The hero's headline and sub, the questions and the small print come
   from the content file (content/usecases), whose hero.flow mirrors the flow here. */

const brands = [
  { name: 'Tidewren Swim', gap: 'No texts after opt in', tone: 'bad' },
  { name: 'Halvard & Moss', gap: 'No gap', tone: 'idle' },
  { name: 'Fennick Home', gap: 'No welcome email', tone: 'bad' },
  { name: 'Larkbound', gap: 'No texts, no reply', tone: 'bad' },
]

const shortLine: Record<RecipeId, string> = {
  competitor: 'Competitors’ sign-ups, emails, offers and launches, over time',
  prospect: 'A fact about each company on your list',
  mystery: 'Every email a store sends after a sign-up, basket and checkout',
  speed: 'How fast and how well companies answer',
  prices: 'Prices, offers and terms as a customer sees them',
  ads: 'Competitors’ ads, and where each click lands',
  trial: 'A competitor’s whole onboarding, on 1 page',
}

const columns = ['Fact', 'Seen on', 'What happened', 'Screenshot']

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
            <h1 className="h1">{study.hero.headline}</h1>
            <p className="lede">{study.hero.sub}</p>
          </div>
          <div className="hero-stage">
            <div className="uc-flow">
              <div className="uc-node">
                <span className="kicker">Clay in</span>
                <b>UK ecommerce brands</b>
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
                <b>Each brand, as a new customer</b>
                <ul>
                  <li>Its history, if it’s covered</li>
                  <li>Watched from today, if not</li>
                  <li>Profile: New customer · UK</li>
                  <li>Every fact dated</li>
                </ul>
                <span className="uc-node-foot">
                  <span className="uc-live" /> Watching 300 brands
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
                Every agency can buy the same install data, so the brands you write to hear the same “noticed you use” line every week.
              </p>
            </Reveal>
            <Reveal as="li" className="card">
              <h3 className="h3">Installed isn’t working</h3>
              <p className="muted">An install says the tool is there, not that it works. A mockup shows the fix, but nothing yet shows the problem.</p>
            </Reveal>
            <Reveal as="li" className="card">
              <h3 className="h3">By hand doesn’t scale</h3>
              <p className="muted">
                Signing up with a spare inbox and phone, then waiting and checking each one, at 300 brands per client, is weeks of work
                for a small team.
              </p>
            </Reveal>
          </ul>
          <Reveal className="uc-gives">
            <p>
              <b>Obsession gives you a dated fact about each brand,</b> with its receipt, about the exact problem your client’s
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
                Each client’s TAM is a Clay table, built from your ecommerce and install data.
              </li>
              <li>
                <b>Facts come back as columns</b>
                Use them as a variable in your copy, a filter for who to write to, and a trigger when they change.
              </li>
              <li>
                <b>Everything else still works</b>
                Google Sheets, a CSV, the API or MCP, or a pasted list for one offs, like 25 brands before a pitch.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            kicker="Step by step"
            title="From a Clay view to facts on every row."
            lede="How the agency in this example runs it for 1 client, an SMS app, across 300 UK ecommerce brands."
          />

          <div className="uc-phase first">
            <h3>Set it up</h3>
            <span>Steps 1 to 5</span>
          </div>

          <Step
            n={1}
            title="Create a watch"
            line="A watch is 1 list of companies, the facts to collect and how long to keep each account open. Start from a recipe, or describe what you want to know."
            pick="The agency starts a new watch on SMS app prospects."
          >
            <Win title="Obsession · Watches">
              <div className="uc-row uc-between">
                <span className="uc-mh">Watches</span>
                <span className="uc-btn uc-pulse">Create a watch</span>
              </div>
              <ul className="uc-list uc-seq">
                <li style={at(0)}>
                  <b>
                    Reviews app prospects<small>From the Prospect intelligence recipe</small>
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
                    Loyalty app prospects<small>Described in your own words</small>
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
            line="A recipe sets up the facts for 1 job. Launch it as it is, change anything, or describe what you want to know in your own words."
            pick={
              <>
                <b>The agency picks Prospect intelligence:</b> a fact about each company you’re about to write to. Competitor tracking is for
                watching competitors over time.
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
                <b>Prospect intelligence sets up for each company:</b>
                <span>a customer profile</span>
                <span>an inbox and a UK number</span>
                <span>a browser</span>
                <span>an account kept open</span>
              </div>
            </Win>
          </Step>

          <Step
            n={3}
            title="Configure it"
            line="Choose the facts your client’s product is about and when a missing message counts. Each check has its own deadline, and fixed rules decide every verdict, so the same evidence always gets the same answer."
            pick="Email sign-up, text opt in and 1 support question, checked at 48 hours, then every week."
          >
            <Win title="New watch · Prospect intelligence · Configure">
              <div className="uc-cfg">
                <div>
                  <div className="uc-fld">
                    <p className="uc-lab">Watching</p>
                    <div className="uc-field">SMS app prospects</div>
                  </div>
                  <div className="uc-fld">
                    <p className="uc-lab">The facts to collect</p>
                    <ul className="uc-checks">
                      <li>
                        <span className="uc-cb on" style={at(0)} />
                        Email sign-up
                      </li>
                      <li>
                        <span className="uc-cb on" style={at(1)} />
                        Text opt in
                      </li>
                      <li>
                        <span className="uc-cb on" style={at(2)} />
                        1 support question
                      </li>
                      <li>
                        <span className="uc-cb" />
                        WhatsApp opt in
                      </li>
                      <li>
                        <span className="uc-cb" />
                        Live chat
                      </li>
                      <li>
                        <span className="uc-cb" />
                        Basket, checkout and purchase
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="uc-fld">
                    <p className="uc-lab">What counts as missing</p>
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
                    <p className="uc-lab">Check each brand at</p>
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
                    <p className="uc-lab">Customer profile</p>
                    <div className="uc-field uc-dd">New customer · UK</div>
                  </div>
                  <div className="uc-fld">
                    <p className="uc-lab">Webhook</p>
                    <div className="uc-field uc-dd">Each new fact, to your endpoint</div>
                  </div>
                </div>
              </div>
            </Win>
          </Step>

          <Step
            n={4}
            title="Add the companies"
            line="Connect Clay, upload a CSV, call the API or paste a list. With Clay you pick a table and a view you’ve already filtered, point at the website column, and choose where each fact lands."
            pick={
              <>
                <b>The agency connects Clay.</b> It uses its “SMS popup” view, so no lookup is spent on a brand with no texts at all, and turns
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
                  <dd className="uc-field uc-dd">UK ecommerce brands</dd>
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
            line="1 summary of what will happen. A brand already covered returns its facts at once. The rest fill in as their emails and texts arrive, with each verdict at 48 hours."
            pick={
              <>
                <b>The agency saves it as a recipe,</b> “SMS app client”, ready to rerun for the next SMS client it signs.
              </>
            }
          >
            <Win title="New watch · Review">
              <dl className="uc-sum uc-seq">
                {[
                  ['Recipe', 'Prospect intelligence'],
                  ['Watching', 'SMS app prospects'],
                  ['Brands', '300 now, plus new rows from the Clay view'],
                  ['Checks', 'Email sign-up, text opt in, 1 support question'],
                  ['Missing', 'No welcome in 1 hour · No text in 24 hours · No reply in 24 hours'],
                  ['Watch', '48 hours per brand, then every week'],
                  ['Results', 'Back to Clay as 4 columns, each new fact to your webhook'],
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
            title="Each brand gets its own customer account"
            line="Its own inbox, UK mobile number and browser, used for that 1 brand only. It signs up the way any customer can and keeps a screenshot at every step. It says it’s AI when it talks to a person."
          >
            <Win title="UK ecommerce TAM · Tidewren Swim">
              <div className="uc-s6">
                <div className="uc-id">
                  <div className="uc-row uc-between">
                    <span className="uc-mh">Tidewren Swim</span>
                    <span className="tag idle">Account 4F2A</span>
                  </div>
                  <dl className="uc-idrows">
                    <div>
                      <dt>Profile</dt>
                      <dd>New customer · UK</dd>
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
                      ['10:14:09', 'Found the sign-up popup'],
                      ['10:14:30', 'Signed up, ticked text consent'],
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
                  <div className="uc-url">tidewren.example</div>
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
            line="Every email, text and reply lands in that brand’s own inbox and phone. With rechecks on, a deadline that passes with nothing gets a second run from a fresh number before it counts. Brands added later run on their own clock."
          >
            <Win title="Watches · UK ecommerce TAM">
              <div className="uc-row">
                <span className="uc-mh">UK ecommerce TAM</span>
                <span className="tag idle">Hour 30 of 48</span>
                <span className="uc-small">From the Prospect intelligence recipe</span>
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
            line="A fact for every brand. With rechecks on, as here, a missed deadline counts only once the control text and the second run confirm it."
          >
            <Win title="Watches · UK ecommerce TAM · Results">
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
              <p className="uc-small">296 of 300 finished. 4 had no working sign-up form, which is a fact too.</p>
            </Win>
          </Step>

          <div className="uc-phase">
            <h3>The facts land in Clay</h3>
            <span>Steps 9 and 10</span>
          </div>

          <Step
            n={9}
            title="The receipt behind every fact"
            line="The verdict, a timeline with every step’s time, the screenshots and the emails and texts themselves. 1 link anyone can open, including the brand."
          >
            <Win title="Evidence · Tidewren Swim">
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
                  ['Tue 15 Sep 10:31', 'Asked support about sizing, said it’s AI'],
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
                <span className="uc-btn">Copy the link</span>
              </div>
            </Win>
          </Step>

          <Step
            n={10}
            title="The facts land back in Clay"
            line="4 new columns on the same rows: the fact, the day it was seen, what happened in 1 plain sentence, and the screenshot. Obsession reports what happened, and your own Clay prompts decide what to say."
          >
            <Win title="Clay table · UK ecommerce brands">
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
                  <b>Obsession</b> <span className="uc-small">#sms_app_prospects · by webhook</span>
                  <br />
                  UK ecommerce TAM: the first 300 brands are done. <b>61</b> opted in for texts and never got one, and <b>19</b> never sent a
                  welcome email. New rows report as they finish. The facts and screenshots are in your Clay table.
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
              <h3 className="h2">Our fact and your mockup, in 1 email.</h3>
              <p className="muted">
                The fact shows what’s happening at the brand today. Your mockup shows what it could look like with your client’s product.
              </p>
              <div className="uc-mail">
                <p className="uc-mail-head">
                  From <b>Sam, SMS app</b> to <b>Hannah Price, Tidewren Swim</b> · Subject <b>Tidewren’s texts</b>
                </p>
                <p>Hi Hannah,</p>
                <p>We opted in for Tidewren’s texts on 15 September. 3 emails arrived in the next 2 days, but not a single text.</p>
                <p>I’ve mocked up what your first 3 could look like, using your own welcome offer. Worth a look?</p>
                <p>Sam</p>
                <p className="uc-att">
                  <span>Screenshots: Tidewren, 15 to 17 Sep</span>
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
              ['A sharper list', 'Write only where there’s a gap', 'Filter the Clay table on the Fact column and leave the rest out of the sequence.', '61 of 300 brands get the SMS email this month.'],
              ['Triggers', 'Changes become reasons to write', 'Weekly checks tell you when to write, and when to stop.', 'Tidewren sent its first text: pause the sequence.'],
              ['Something to sell', 'A monthly add on per client', 'Brand facts for each SaaS client: brands checked, gaps open, gaps fixed, each with its screenshot.', 'SMS app prospects, October: 73 open gaps, 12 fixed.'],
              ['Winning clients', 'Open the pitch with facts', 'Paste 25 brands from a prospect’s TAM before the first call.', '“9 of 25 brands you’d sell to took a text opt in and never sent one.”'],
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
        <div className="wrap wrap-sm">
          <SectionHead kicker="Questions" title={study.faq.heading} />
          <Faq items={study.faq.items} />
        </div>
      </section>

      <section className="section">
        <div className="wrap uc-more">
          <Reveal className="card">
            <Link to="/recipes/prospect-intelligence">
              <span className="kicker">The recipe</span>
              <span className="h3">Prospect intelligence</span>
              <span className="muted">Every check it can run, and everything you can change.</span>
              <span className="uc-more-go">Learn more →</span>
            </Link>
          </Reveal>
          <Reveal className="card">
            <Link to="/sample-output">
              <span className="kicker">1 real run</span>
              <span className="h3">Sample data</span>
              <span className="muted">Brand G, a real skincare store: a £40 basket left at 02:57 on 22 Sep, still no reminder 48 hours later.</span>
              <span className="uc-more-go">See it →</span>
            </Link>
          </Reveal>
          <p className="uc-fine">{study.fine}</p>
        </div>
      </section>

      <FinalCta
        title={study.final.heading}
        line={study.final.sub ?? ''}
        source="usecase-clay-final"
        withCompany={false}
      />
    </div>
  )
}
