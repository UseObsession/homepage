import { Mark } from '../components/Logo'
import { RunWindow } from '../components/RunWindow'
import { WaitlistForm } from '../components/WaitlistForm'
import { PersonaBand } from '../components/PersonaBand'
import { Reveal } from '../components/Reveal'
import {
  Different,
  Faq,
  FinalCta,
  Rules,
  SampleTeaser,
  SectionHead,
  Steps,
  RecipeGrid,
  UseCases,
  Watched,
} from '../components/Blocks'
import { homeRuns } from '../content/runs'
import { pricingAnswer } from '../content/shared'

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-in">
            <span className="hero-pill">
                <Mark size={14} /> Early access
              </span>
            <h1 className="h1">The intelligence infrastructure for commercial teams</h1>
            <p className="lede">
              Every sales and marketing decision rests on what prospects, competitors and your own business actually do. Obsession runs
              the inboxes, phone numbers and browsers to research, sign up, ask, chase and check at any company. You get the proof and
              your next move.
            </p>
            <div className="hero-form">
              <WaitlistForm source="home-hero" withCompany />
              <Watched items={['Sign ups', 'Baskets', 'Support', 'Emails', 'Texts', 'Ads', 'TikTok', 'Prices', 'Pages']} />
            </div>
          </div>
          <div className="hero-stage">
            <RunWindow runs={homeRuns} headings={['What Obsession can do', 'What you can build with Obsession']} />
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="wrap">
          <SectionHead kicker="How it works" title="Name a company. Get back what it did." />
          <Steps
            steps={[
              {
                title: 'Name the companies',
                line: 'A prospect, a competitor, your own store or a client’s. One or a thousand, from wherever your list lives.',
                chips: ['Paste a list', 'CSV', 'Clay', 'API'],
              },
              {
                title: 'Choose what to check',
                line: 'Pick a recipe or describe the job. Set what counts as a gap, how long to wait and how often to look again.',
              },
              {
                title: 'A test customer goes through it',
                line: 'Each company gets its own shopper with a real inbox, phone number and browser, marked as automated. It waits days if the journey does.',
              },
              {
                title: 'You get the proof',
                line: 'A verdict, a timestamped timeline, the screenshots and the messages themselves. A gap only counts once a second run confirms it.',
                chips: ['Email', 'PDF', 'Slack', 'Clay', 'Webhook', 'JSON'],
              },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            kicker="What you can find out"
            title="Three jobs cover most requests. The fourth is anything you can describe."
          />
          <UseCases
            items={[
              {
                title: 'Your competitors’ playbook',
                line: 'Every email, text, ad and TikTok a rival sends, with its offers and price changes, on one timeline.',
              },
              {
                title: 'Where prospects lose money',
                line: 'Ads landing on sold out pages, welcome emails that never arrive, enquiries nobody answers. A reason to get in touch they can check in a minute.',
              },
              {
                title: 'Where your own journeys break',
                line: 'Your sign up, basket and support journeys, or a client’s, run again on a schedule. You hear when one stops.',
              },
              {
                title: 'Anything else you can describe',
                line: 'Type it in plain words. We confirm the plan with you, then run it.',
                example: '› Time how fast 300 dental practices answer a web enquiry',
              },
            ]}
          />
        </div>
      </section>

      <section className="section sunken">
        <div className="wrap">
          <SampleTeaser />
        </div>
      </section>

      <section className="section" id="who">
        <div className="wrap">
          <SectionHead
            kicker="Who it’s for"
            title="Pick who you are."
            lede="Recipes, a task in plain words, or the API. Each page shows the parts that fit you."
          />
          <Reveal>
            <PersonaBand />
          </Reveal>
        </div>
      </section>

      <section className="section" id="recipes">
        <div className="wrap">
          <SectionHead
            kicker="Recipes"
            title="Each recipe spins up the infrastructure for one job."
            lede="Choose one and Obsession sets up what it needs: the shoppers with their own inboxes, numbers and browsers, the waits, and the checks. Run it once or on a schedule, and change anything."
          />
          <RecipeGrid ids={['competitor', 'mystery', 'prospect', 'speed', 'prices', 'ads']} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            kicker="Why it’s different"
            title="Most tools read what a company publishes. Obsession goes through it as a customer."
          />
          <Different
            intro="Ad libraries and email archives show what brands put out, mostly for the brands they already track. Enrichment tools tell you what a company has installed. Neither shows what happens when someone actually signs up."
            points={[
              { title: 'It takes part', line: 'It signs up, fills a basket, asks a question and texts STOP, the way a customer would.' },
              { title: 'It waits', line: 'Minutes or weeks. A follow up that lands on day three still gets caught.' },
              { title: 'It keeps the receipts', line: 'Every message, screenshot and timestamp, so anyone can check the finding.' },
            ]}
          />
        </div>
      </section>

      <section className="section sunken">
        <div className="wrap">
          <SectionHead kicker="Rules every run follows" title="Built to behave." />
          <Rules />
        </div>
      </section>

      <section className="section">
        <div className="wrap wrap-sm">
          <SectionHead kicker="Questions" title="Before you name a company" />
          <Faq
            items={[
              {
                q: 'What is Obsession?',
                a: 'Infrastructure that goes through companies’ journeys the way a customer would. It runs the inboxes, phone numbers and browsers, waits as long as the journey takes, and hands back timestamped proof of what happened.',
              },
              {
                q: 'Is it live?',
                a: 'Store checks like the sample report run today. The other recipes open to early access teams one at a time.',
              },
              {
                q: 'How long does a run take?',
                a: 'Pages, ads and prices take minutes. Anything that waits for a reply or a follow up takes as long as the company does, usually one to seven days.',
              },
              {
                q: 'How do I know a finding is real?',
                a: 'Each one comes with the message or screenshot behind it and the time it happened. You can check it without taking our word for it.',
              },
              {
                q: 'Will it flood me with alerts?',
                a: 'No. A scheduled run only writes when something changes. A quiet week means a quiet inbox.',
              },
              {
                q: 'Do I need to write code?',
                a: 'No. Recipes and plain language tasks cover most teams. The API is for developers who want to build on it.',
              },
              { q: 'What does it cost?', a: pricingAnswer },
            ]}
          />
        </div>
      </section>

      <FinalCta
        title="Name a company. See what it does."
        line="Tell us what you want to find out, and we’ll run the first one with you."
        source="home-final"
      />
    </>
  )
}
