import { useId, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { shops } from '../../content/shops'
import type { ShopId, StudyFinding, UseCaseStudy } from '../../content/types'
import { StillMark } from '../StillMark'
import { tie } from './tie'
import './Found.css'

/* What real audits found (types.ts StudyFound), on a use case's paper break: the claim and its line, then each finding
   retold at an invented shop (content/shops.ts) as the moment it was, in Obsession's report look. Each finding is a
   report window (.ob-window, a glossy product object): the kind of store and the journey in its bar, the verdict beside
   the ring, and inside, what the test customer's inbox actually got, drawn in the shop's own world (its wordmark, its
   colours, its product, its email). The 4 are 4 different moments on purpose, never 4 copies of 1 card: a trail and the
   wrong email, an inbox of 2 broken emails, a welcome whose button opens a closed store, a welcome and then 48 hours of
   nothing. On a wide screen they sit on 1 staggered grid (7 and 5 columns, then 5 and 7), each finding over its window
   on 1 shared line (subgrid), each window only as tall as its moment; on a phone they stack.
   Still on purpose: nothing here has a job to move. Each picture is decorative (aria-hidden): the bar, the verdict and
   the finding say it in words. The shops' colours live only on their own surfaces (Found.css), never on a tag or a
   mark of ours. */

const Icon = {
  basket: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2.5 6h11l-1.25 6.75h-8.5Z" />
      <path d="M5.5 6 8 2.75 10.5 6" />
    </svg>
  ),
  leave: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M9.5 3.25h-5.75v9.5h5.75" />
      <path d="M7.25 8h6.25M11 5.5 13.5 8 11 10.5" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5" />
      <path d="m2.75 4.75 5.25 4 5.25-4" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect x="3.75" y="7" width="8.5" height="6.25" rx="1.25" />
      <path d="M5.75 7V5.25a2.25 2.25 0 0 1 4.5 0V7" />
    </svg>
  ),
}

/* The pointer over the button the shopper pressed. */
function Pointer() {
  return (
    <svg className="s-fd-pointer" viewBox="0 0 12 16" aria-hidden="true">
      <path d="M1 1v12.2l3.1-3 2.2 5 2-.9-2.2-4.9H10Z" />
    </svg>
  )
}

/* ---- The shops' products, drawn: flat, in each shop's own colours (Found.css) -------------------------------------- */

function Overshirt() {
  return (
    <svg className="s-fd-prod s-fd-prod--shirt" viewBox="0 0 100 100" aria-hidden="true">
      <path className="s-fd-prod__body" d="M31 19 42 13q8 5 16 0l11 6 16 12-7 14-8-5v49H30V40l-8 5-7-14Z" />
      <path className="s-fd-prod__line" d="M42 13 50 25 58 13M50 25v64M56 38h10v10H56Z" />
      <circle className="s-fd-prod__dot" cx="50" cy="35" r="1.6" />
      <circle className="s-fd-prod__dot" cx="50" cy="49" r="1.6" />
      <circle className="s-fd-prod__dot" cx="50" cy="63" r="1.6" />
      <circle className="s-fd-prod__dot" cx="50" cy="77" r="1.6" />
    </svg>
  )
}

function Lipstick() {
  return (
    <svg className="s-fd-prod s-fd-prod--lip" viewBox="0 0 120 80" aria-hidden="true">
      <path className="s-fd-prod__bullet" d="M47 32V16q0-5 7-9l7 5v20Z" />
      <rect className="s-fd-prod__sleeve" x="45" y="31" width="18" height="11" rx="1" />
      <rect className="s-fd-prod__case" x="43" y="41" width="22" height="33" rx="2" />
      <ellipse className="s-fd-prod__case" cx="88" cy="66" rx="17" ry="7" />
      <ellipse className="s-fd-prod__pan" cx="88" cy="62" rx="17" ry="7" />
    </svg>
  )
}

function Can() {
  return (
    <svg className="s-fd-prod s-fd-prod--can" viewBox="0 0 100 100" aria-hidden="true">
      <circle className="s-fd-prod__fruit" cx="70" cy="70" r="15" />
      <path className="s-fd-prod__seg" d="M70 58v24M58 70h24M61.5 61.5l17 17M78.5 61.5l-17 17" />
      <rect className="s-fd-prod__can" x="30" y="14" width="30" height="74" rx="6" />
      <rect className="s-fd-prod__band" x="30" y="40" width="30" height="24" />
      <path className="s-fd-prod__rim" d="M33 18h24" />
      <circle className="s-fd-prod__seal" cx="45" cy="52" r="6" />
    </svg>
  )
}

function Soap({ small = false }: { small?: boolean }) {
  return (
    <svg className={'s-fd-prod s-fd-prod--soap' + (small ? ' is-small' : '')} viewBox="0 0 100 70" aria-hidden="true">
      <rect className="s-fd-prod__bar" x="14" y="20" width="72" height="38" rx="15" />
      <rect className="s-fd-prod__press" x="24" y="28" width="52" height="22" rx="10" />
      <path className="s-fd-prod__stem" d="M36 44c10-3 20-8 30-16" />
      <ellipse className="s-fd-prod__leaf" cx="44" cy="38" rx="4.5" ry="1.6" transform="rotate(-40 44 38)" />
      <ellipse className="s-fd-prod__leaf" cx="52" cy="36" rx="4.5" ry="1.6" transform="rotate(30 52 36)" />
      <ellipse className="s-fd-prod__leaf" cx="57" cy="31" rx="4.5" ry="1.6" transform="rotate(-50 57 31)" />
      <circle className="s-fd-prod__bloom" cx="67" cy="28" r="4.2" />
      <circle className="s-fd-prod__eye" cx="67" cy="28" r="1.6" />
    </svg>
  )
}

/* ---- The inbox: the shop's avatar, name and address as any mail app shows them, then the subject ------------------- */

function From({ name, from, time }: { name: string; from: string; time?: string }) {
  return (
    <p className="s-fd-from">
      <span className="s-fd-avatar">{name.charAt(0)}</span>
      <span className="s-fd-from__n">
        <b>{name}</b>
        <span>{from}</span>
      </span>
      {time && <time>{time}</time>}
    </p>
  )
}

/* A blank where the email should have said something: drawn as the empty space it was, never a stand in. */
const Blank = ({ wide = false }: { wide?: boolean }) => <span className={'s-fd-blank' + (wide ? ' is-wide' : '')} />

/* ---- The 4 moments ---------------------------------------------------------------------------------------------- */

/* Fashion, basket left: the shopper's trail beside the email that came 2 hours later, a browse email. The wait
   stretches to the email's height, so the 2 hours of nothing is the longest part of the trail. */
function Pellam() {
  const s = shops.pellam
  const [added, left, mail] = s.trail
  return (
    <div className="s-fd-body s-fd-body--pellam" aria-hidden="true">
      <ol className="s-fd-trail">
        <li className="s-fd-step">
          <span className="s-fd-ic">{Icon[added.glyph]}</span>
          <b>{added.title}</b>
          <time>{added.time}</time>
          <span className="s-fd-chip">
            <span className="s-fd-chip__ph">
              <Overshirt />
            </span>
            <span>
              <b>{s.product.name}</b>
              <span>{s.product.detail}</span>
            </span>
          </span>
        </li>
        <li className="s-fd-step">
          <span className="s-fd-ic">{Icon[left.glyph]}</span>
          <b>{left.title}</b>
          <time>{left.time}</time>
        </li>
        <li className="s-fd-wait">{s.wait}</li>
        <li className="s-fd-step is-in">
          <span className="s-fd-ic">{Icon[mail.glyph]}</span>
          <b>{mail.title}</b>
          <time>{mail.time}</time>
        </li>
      </ol>
      <div className="s-fd-mail">
        <From name={s.name} from={s.from} time={mail.time} />
        <p className="s-fd-subject">{s.mail.subject}</p>
        <div className="s-fd-art">
          <p className="s-fd-wm">{s.name}</p>
          <p className="s-fd-art__h">{s.mail.head}</p>
          <p className="s-fd-art__k">
            <span className="s-fd-mark">{s.mail.seen}</span>
          </p>
          <p className="s-fd-pdp">
            <span className="s-fd-pdp__ph">
              <Overshirt />
            </span>
            <b>{s.product.name}</b>
          </p>
          <span className="s-fd-btn">{s.mail.cta}</span>
        </div>
      </div>
    </div>
  )
}

/* Cosmetics, basket left: 2 cart emails in the inbox, and the first open, its table empty. The second is the same
   email again, so it sits behind the first. */
function Celandre() {
  const s = shops.celandre
  return (
    <div className="s-fd-body s-fd-body--celandre" aria-hidden="true">
      <ul className="s-fd-inbox">
        {s.inbox.map((m, i) => (
          <li key={m.subject} className={'s-fd-row' + (i === 0 ? ' is-open' : '')}>
            <span className="s-fd-avatar">{s.name.charAt(0)}</span>
            <span className="s-fd-row__t">
              <b>{s.name}</b>
              <span>{m.subject}</span>
            </span>
            <time>{m.time}</time>
          </li>
        ))}
      </ul>
      <div className="s-fd-art s-fd-art--stack">
        <p className="s-fd-wm">{s.name}</p>
        <div className="s-fd-band">
          <Lipstick />
        </div>
        <p className="s-fd-art__h">{s.mail.head}</p>
        <div className="s-fd-table">
          <p className="s-fd-table__h">{s.mail.table}</p>
          <div className="s-fd-table__row">
            <span className="s-fd-table__img" />
            <span className="s-fd-table__cells">
              <Blank wide />
              <span>
                {s.mail.qty} <Blank />
              </span>
            </span>
          </div>
          <p className="s-fd-table__total">
            {s.mail.total}
            <Blank />
          </p>
        </div>
        <span className="s-fd-btn">{s.mail.cta}</span>
      </div>
    </div>
  )
}

/* Drinks, new subscriber: the welcome email, the pointer on its button and the address it goes to, and the closed
   store that opens. */
function Quinnet() {
  const s = shops.quinnet
  return (
    <div className="s-fd-body s-fd-body--quinnet" aria-hidden="true">
      <div className="s-fd-mail">
        <From name={s.name} from={s.from} time={s.mail.time} />
        <p className="s-fd-subject">{s.mail.subject}</p>
        <div className="s-fd-art">
          <p className="s-fd-wm">{s.name}</p>
          <div className="s-fd-band">
            <Can />
            <span className="s-fd-band__n">{s.mail.product}</span>
          </div>
          <p className="s-fd-art__h">{s.mail.head}</p>
          <p className="s-fd-art__b">{s.mail.body}</p>
          <p className="s-fd-art__go">
            <span className="s-fd-code">{s.mail.code}</span>
            <span className="s-fd-btn is-hover">
              {s.mail.cta}
              <Pointer />
            </span>
          </p>
        </div>
        <p className="s-fd-url">{s.mail.link}</p>
      </div>
      <div className="s-fd-closed">
        <p className="s-fd-closed__bar">
          <span className="s-fd-ic">{Icon.lock}</span>
          {s.closed.url}
        </p>
        <div className="s-fd-closed__page">
          <span className="s-fd-closed__lock">{Icon.lock}</span>
          <b>{s.closed.head}</b>
          <span>{s.closed.line}</span>
        </div>
      </div>
    </div>
  )
}

/* Natural beauty, basket left: the welcome email that proves the store had the address, then the basket and 48 hours
   with nothing on them, centred beside the welcome. */
function Ferula() {
  const s = shops.ferula
  return (
    <div className="s-fd-body s-fd-body--ferula" aria-hidden="true">
      <div className="s-fd-mail">
        <From name={s.name} from={s.from} time={s.welcome.time} />
        <p className="s-fd-subject">{s.welcome.subject}</p>
        <div className="s-fd-art">
          <p className="s-fd-wm">{s.name}</p>
          <Soap />
          <p className="s-fd-art__h">{s.welcome.head}</p>
          <p className="s-fd-art__b">{s.welcome.body}</p>
        </div>
      </div>
      <div className="s-fd-after">
        <p className="s-fd-after__k">{s.basket.label}</p>
        <p className="s-fd-after__item">
          <span className="s-fd-after__ph">
            <Soap small />
          </span>
          <b>{s.basket.item}</b>
          <time>{s.basket.time}</time>
        </p>
        <div className="s-fd-watch">
          <span className="s-fd-watch__track">
            {s.watch.ticks.map((t, i) => (
              <i key={t} style={{ left: `${(i / (s.watch.ticks.length - 1)) * 100}%` }} />
            ))}
          </span>
          <span className="s-fd-watch__scale">
            {s.watch.ticks.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </span>
        </div>
        <p className="s-fd-none">
          <span className="s-fd-ic">{Icon.mail}</span>
          {s.watch.none}
        </p>
      </div>
    </div>
  )
}

const MOMENT: Record<ShopId, () => ReactNode> = { pellam: Pellam, celandre: Celandre, quinnet: Quinnet, ferula: Ferula }

/* 1 finding: the line first, then the report window that shows it. */
function Finding({ f }: { f: StudyFinding }) {
  const Moment = MOMENT[f.shop]
  return (
    <figure className={`s-fd-item s-fd-item--${f.shop}`}>
      <figcaption className="s-fd-finding">{tie(f.finding)}</figcaption>
      <div className="ob-window ob-object s-fd-win">
        <div className="ob-window-bar">
          <p className="ob-window-title">{f.label}</p>
          <span className="ob-status ob-status--bare s-fd-verdict">
            <StillMark state="needs-you" size={14} className="s-fd-verdict__mark" />
            {f.verdict}
          </span>
        </div>
        <Moment />
      </div>
    </figure>
  )
}

/* `fine` is the example's small print when there are no link rows to hang it under (pages/UseCase): it closes the
   findings, right under the 4 it explains. */
export function Found({ found, fine, id = 'found' }: { found: NonNullable<UseCaseStudy['found']>; fine?: string; id?: string }) {
  const uid = useId()
  return (
    <section className="s-section s-fd ob-theme-hybrid" data-tone="paper" id={id} aria-labelledby={`${uid}-h`}>
      <div className="s-wrap">
        <header className="s-head s-head--wide s-st-head">
          <h2 className="ob-type-h2" id={`${uid}-h`}>
            {tie(found.heading)}
          </h2>
          <p className="ob-type-body-lg">{tie(found.line)}</p>
        </header>
        <div className="s-fd-grid">
          {found.items.map((f) => (
            <Finding key={f.shop} f={f} />
          ))}
        </div>
        <Link className="ob-btn ob-btn--secondary s-fd-cta" to={found.cta.to}>
          <span className="ob-btn-label">{found.cta.label}</span>
          <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
        {fine && <p className="s-st-fine s-st-fine--after">{tie(fine)}</p>}
      </div>
    </section>
  )
}
