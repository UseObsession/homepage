import { Faq, FinalCta, Rules, SampleTeaser, SectionHead, UseCases } from '../components/Blocks'
import { Code, sdkExample, webhookExample } from '../components/Code'
import { Reveal } from '../components/Reveal'
import { WaitlistForm } from '../components/WaitlistForm'
import { WaysPicker } from '../components/WaysPicker'
import { pricingAnswer } from '../content/shared'
import './Developers.css'

const blocks = [
  { title: 'Identities', line: 'An email address and phone number for each test customer, receiving real messages.' },
  { title: 'Browsers', line: 'An isolated browser per run, so one journey never sees another’s cookies.' },
  { title: 'Waits', line: 'Pause for minutes or weeks. The run keeps its place without holding a browser open.' },
  { title: 'Captures', line: 'Screenshots, full messages with headers, and timings for every step.' },
  { title: 'Schedules', line: 'Run once, daily or weekly. Only a change sends a webhook.' },
  { title: 'Webhooks', line: 'Each result posts to your endpoint with links to its evidence.' },
]

export function Developers() {

  return (
    <>
      <section className="hero left">
        <div className="wrap dev-hero">
          <div className="hero-in">
            <span className="hero-pill">For founders and developers</span>
            <h1 className="h1">Real customer journeys, from your own code.</h1>
            <p className="lede">
              Create a run with a target, a task and a schedule. Obsession supplies the inbox, phone number and browser, waits as long as
              the journey takes, and posts each result to your webhook.
            </p>
            <div className="hero-form">
              <WaitlistForm source="developers-hero" button="Get API access" />
              <p className="faint dev-note">The API opens to early access teams first.</p>
            </div>
          </div>
          <Reveal className="dev-code">
            <Code code={sdkExample} label="Create a run" />
            <Code code={webhookExample} label="What your webhook receives" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            kicker="What you get"
            title="The hard parts, run for you."
            lede="Signing up once is easy. Doing it at a thousand companies, waiting a week for each reply and proving what arrived is the part nobody wants to build."
          />
          <ul className="dev-blocks">
            {blocks.map((b) => (
              <Reveal as="li" key={b.title} className="card dev-block">
                <h3 className="h3">{b.title}</h3>
                <p className="muted">{b.line}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section sunken">
        <div className="wrap">
          <SampleTeaser start="webhook" />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead kicker="What you could build" title="Ideas to start from." />
          <UseCases
            items={[
              {
                title: 'Watch your own onboarding',
                line: 'Sign up as a new user every Monday and get told when an email stops arriving.',
              },
              {
                title: 'Evidence in your outbound',
                line: 'Run a check at each account on your list and put the finding in the first line of the email.',
              },
              {
                title: 'Competitor data in your product',
                line: 'Feed rivals’ emails, prices and ads into your own app, for your own customers.',
              },
              { title: 'Journeys of your own', line: 'Save a journey once, then run it on any company you name.' },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            kicker="Three ways to use it"
            title="Code when you want it. Plain words when you don’t."
            lede="The API, a typed task and the recipes all run on the same infrastructure."
          />
          <Reveal>
            <WaysPicker fixedRole="builder" />
          </Reveal>
        </div>
      </section>

      <section className="section sunken">
        <div className="wrap">
          <SectionHead kicker="Rules every run follows" title="Built in, so you don’t have to." />
          <Rules />
        </div>
      </section>

      <section className="section">
        <div className="wrap wrap-sm">
          <SectionHead kicker="Questions" title="What developers ask first" />
          <Faq
            items={[
              {
                q: 'Which languages?',
                a: 'We’re starting with a TypeScript SDK on top of a plain HTTP API, so any language can call it.',
              },
              {
                q: 'Can I run a journey you don’t have a recipe for?',
                a: 'Yes. Describe it as a task in plain words, or set the steps yourself. Recipes are saved journeys, nothing more.',
              },
              {
                q: 'What stops a run doing something it shouldn’t?',
                a: 'The rules are part of the engine, not a setting: test customers say they’re automated, checkouts stop before payment and CAPTCHAs end the step.',
              },
              { q: 'What does it cost?', a: pricingAnswer },
            ]}
          />
        </div>
      </section>

      <FinalCta title="Build on it." line="Tell us what you’d build, and we’ll be in touch about API access." source="developers-final" />
    </>
  )
}
