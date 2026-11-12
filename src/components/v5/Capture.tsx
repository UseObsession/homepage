import type { ExLook } from '../../content/types'
import './Capture.css'

/* One captured thing, drawn the way it arrived (content/types.ts ExLook): a screen with its address bar, an email, a
   text thread in a phone, an ad as public ad libraries show it, push notifications on a lock screen, a chat, a call
   with its transcript, a document, a photo, a job post, or a plain record such as DNS. What a company showed is light
   paper in both themes, as it was; the phone and the call follow the page's theme. Home's explorer (Evidence) and
   /sample-output's kinds section share it. `small` draws a screen as a thumbnail in a row of screens. */

const WAVE = [8, 14, 22, 12, 26, 18, 10, 6, 14, 24, 28, 16, 10, 20, 26, 14, 8, 12, 22, 18, 10, 6, 14, 20, 24, 12, 8, 16, 10, 6]

export function Capture({ look, small }: { look: ExLook; small?: boolean }) {
  switch (look.t) {
    case 'screen':
      return (
        <div className={'cap cap-paper cap-screen' + (small ? ' cap-small' : '')}>
          <div className="cap-bar" aria-hidden="true">
            <span />
            <span />
            <span className="cap-url">{look.url}</span>
          </div>
          <div className="cap-page">
            <span className="cap-brand">{look.brand}</span>
            {look.img && <span className="cap-img" aria-hidden="true" />}
            <span className="cap-title">{look.title}</span>
            {look.lines?.map((l) => (
              <span className="cap-line" key={l}>
                {l}
              </span>
            ))}
            {look.fields?.map((f) => (
              <span className="cap-field" key={f}>
                {f}
              </span>
            ))}
            {look.button && <span className="cap-btn">{look.button}</span>}
          </div>
          {look.popup && (
            <div className="cap-veil">
              <div className="cap-pop">
                <span className="cap-title">{look.popup.title}</span>
                <span className="cap-btn">{look.popup.button}</span>
                <span className="cap-line">No thanks</span>
              </div>
            </div>
          )}
        </div>
      )
    case 'email':
      return (
        <div className="cap cap-paper cap-email">
          <div className="cap-mailhead">
            <span className="cap-from">{look.from}</span>
            <span className="cap-subject">{look.subject}</span>
          </div>
          <div className="cap-page">
            <span className="cap-img" aria-hidden="true" />
            {look.lines.map((l) => (
              <span className="cap-body" key={l}>
                {l}
              </span>
            ))}
            {look.button && <span className="cap-btn">{look.button}</span>}
          </div>
        </div>
      )
    case 'sms':
      return (
        <div className="cap cap-phone">
          <div className="cap-screenin">
            <span className="cap-sender">{look.from}</span>
            {look.msgs.map((m, i) => (
              <div key={i} className="cap-msgrow">
                {m.day && <span className="cap-day">{m.day}</span>}
                <span className={'cap-bubble' + (m.ours ? ' cap-ours' : '')}>
                  {m.text}
                  <span className="cap-at">{m.at}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )
    case 'ad':
      return (
        <div className="cap cap-paper cap-ad">
          <div className="cap-adhead">
            <span className="cap-avatar" aria-hidden="true" />
            <span>
              <span className="cap-adname">{look.brand}</span>
              <span className="cap-line">Sponsored</span>
            </span>
          </div>
          <div className="cap-creative" data-tone={look.tone ?? 1}>
            {look.headline}
          </div>
          <div className="cap-adfoot">
            <span>Started running on {look.since}</span>
            <span className="cap-line">{look.where}</span>
          </div>
        </div>
      )
    case 'push':
      return (
        <div className="cap cap-phone">
          <div className="cap-screenin cap-lock">
            <span className="cap-lockday">{look.day}</span>
            {look.items.map((n) => (
              <div className="cap-note" key={n.time + n.title}>
                <span className="cap-notehead">
                  <span>{look.app}</span>
                  <span>{n.time}</span>
                </span>
                <span className="cap-notetitle">{n.title}</span>
                <span className="cap-notebody">{n.body}</span>
              </div>
            ))}
          </div>
        </div>
      )
    case 'chat':
      return (
        <div className="cap cap-paper cap-chat">
          <div className="cap-mailhead">
            <span className="cap-subject">{look.who}</span>
          </div>
          <div className="cap-chatbody">
            {look.msgs.map((m, i) => (
              <span key={i} className={'cap-cmsg' + (m.ours ? ' cap-ours' : '')}>
                {m.text}
              </span>
            ))}
          </div>
        </div>
      )
    case 'call':
      return (
        <div className="cap cap-call">
          <div className="cap-player" aria-hidden="true">
            <span className="cap-play" />
            <span className="cap-wave">
              {WAVE.map((h, i) => (
                <span key={i} style={{ height: h }} />
              ))}
            </span>
            <span className="cap-len">{look.length}</span>
          </div>
          <dl className="cap-lines">
            {look.lines.map((l, i) => (
              <div key={i}>
                <dt>{l.who}</dt>
                <dd>
                  {l.text}
                  {l.quote && (
                    <span className="cap-quote">
                      <b>quoted</b> {l.quote}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )
    case 'doc':
      return (
        <div className="cap cap-paper cap-doc">
          <span className="cap-brand">{look.title}</span>
          <span className="cap-mono">{look.sub}</span>
          {look.rows.map(([k, v]) => (
            <span className="cap-docrow" key={k}>
              <span>{k}</span>
              <span className="cap-mono">{v}</span>
            </span>
          ))}
          {look.foot && <span className="cap-line">{look.foot}</span>}
        </div>
      )
    case 'photo':
      return (
        <div className="cap cap-photo">
          <div className={'cap-card' + (look.dark ? ' cap-card-dark' : '')}>
            {look.lines.map((l, i) => (
              <span key={i} className={i === 0 ? 'cap-cardtop' : undefined}>
                {l}
              </span>
            ))}
          </div>
          <span className="cap-caption">Photo · {look.caption}</span>
        </div>
      )
    case 'job':
      return (
        <div className="cap cap-paper cap-doc">
          <span className="cap-mono">{look.board}</span>
          <span className="cap-title">{look.title}</span>
          <ul className="cap-list">
            {look.lines.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      )
    case 'record':
      return <pre className="cap cap-record">{look.text}</pre>
  }
}
