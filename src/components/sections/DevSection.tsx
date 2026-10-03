import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Cta, Developers } from '../../content/types'
import { AppScreen, type Workspace } from '../AppScreen'
import './DevSection.css'

/* The developer section (page.developers): the shared section head (the claim, 1 line, the call to action), then the
   code sample beside its app screen. The code is coloured quietly from the ink tokens only (mono 400, never bold):
   keys and names in --ob-text, strings and values in --ob-text-2, keywords, punctuation and comments in --ob-text-3.
   Colour never means a status here, so nothing uses the danger, success or warning inks. */

/* The words the controls need. They are chrome, not copy; a page can pass its own. */
const devUi = {
  copy: 'Copy the code',
  copied: 'Copied',
}
export type DevUi = typeof devUi

/* ---- Code ---------------------------------------------------------------------------------------------------------
   1 small tokeniser for the 2 languages the site shows: TypeScript calls and the JSON a webhook receives. */
const TOKEN =
  /(\/\/.*$)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\\n]|\\.)*`)(\s*:)?|\b(import|from|const|let|var|await|async|new|export|function|return)\b|\b(true|false|null|undefined)\b|(-?\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)(?=\s*:)|([{}[\](),;:.=])/g

function tokens(line: string): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  for (const m of line.matchAll(TOKEN)) {
    const at = m.index ?? 0
    if (at > last) out.push(line.slice(last, at))
    const [all, comment, str, colon, keyword, literal, num, key, punct] = m
    if (comment) out.push(<span key={at} className="s-tok-c">{comment}</span>)
    else if (str && colon) {
      out.push(<span key={at} className="s-tok-key">{str}</span>)
      out.push(<span key={at + 'p'} className="s-tok-p">{colon}</span>)
    } else if (str) out.push(<span key={at} className="s-tok-s">{str}</span>)
    else if (keyword) out.push(<span key={at} className="s-tok-k">{keyword}</span>)
    else if (literal || num) out.push(<span key={at} className="s-tok-v">{literal ?? num}</span>)
    else if (key) out.push(<span key={at} className="s-tok-key">{key}</span>)
    else if (punct) out.push(<span key={at} className="s-tok-p">{punct}</span>)
    else out.push(all)
    last = at + all.length
  }
  if (last < line.length) out.push(line.slice(last))
  return out
}

/* Every line is its own block, so a long line wraps under itself with a hanging indent instead of scrolling sideways.
   The leading spaces stay in the text, so selecting and copying keeps the indentation. */
export function CodeLines({ code }: { code: string }) {
  return (
    <code className="s-code-lines">
      {code.split('\n').map((line, i) => {
        const indent = line.length - line.trimStart().length
        return (
          <span key={i} className="s-code-line" style={{ ['--s-indent' as string]: indent }}>
            {tokens(line)}
          </span>
        )
      })}
    </code>
  )
}

async function writeClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    /* Older browsers and insecure origins: copy through a hidden text field. */
    const field = document.createElement('textarea')
    field.value = text
    field.setAttribute('readonly', '')
    field.style.position = 'fixed'
    field.style.opacity = '0'
    document.body.appendChild(field)
    field.select()
    let ok = false
    try {
      ok = document.execCommand('copy')
    } catch {
      ok = false
    }
    field.remove()
    return ok
  }
}

const HOLD_MS = 1600 /* --ob-btn-copied-hold */
const TIP_DELAY_MS = 500 /* --ob-delay-tooltip */

/* The design system's copy button: a round icon button whose front sheet fills while Copied holds, with its name as a
   tooltip on hover (after 500ms) and on keyboard focus. A polite live region says Copied for screen readers. */
function CopyButton({ text, ui }: { text: string; ui: DevUi }) {
  const [copied, setCopied] = useState(false)
  const [tip, setTip] = useState(false)
  const hovered = useRef(false)
  const focused = useRef(false)
  const timer = useRef<number>(0)
  const hold = useRef<number>(0)

  useEffect(
    () => () => {
      window.clearTimeout(timer.current)
      window.clearTimeout(hold.current)
    },
    [],
  )

  async function copy() {
    if (!(await writeClipboard(text))) return
    setCopied(true)
    setTip(true)
    window.clearTimeout(hold.current)
    hold.current = window.setTimeout(() => {
      setCopied(false)
      if (!hovered.current && !focused.current) setTip(false)
    }, HOLD_MS)
  }

  return (
    <span className="ob-tip s-code__copy">
      <button
        type="button"
        className={'ob-btn ob-btn--ghost ob-btn--icon ob-btn--sm' + (copied ? ' is-copied' : '')}
        aria-label={ui.copy}
        onClick={copy}
        onPointerEnter={(e) => {
          if (e.pointerType !== 'mouse') return
          hovered.current = true
          window.clearTimeout(timer.current)
          timer.current = window.setTimeout(() => setTip(true), TIP_DELAY_MS)
        }}
        onPointerLeave={() => {
          hovered.current = false
          window.clearTimeout(timer.current)
          if (!focused.current && !copied) setTip(false)
        }}
        onFocus={(e) => {
          if (!e.currentTarget.matches(':focus-visible')) return
          focused.current = true
          setTip(true)
        }}
        onBlur={() => {
          focused.current = false
          if (!hovered.current) setTip(false)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setTip(false)
        }}
      >
        <span className="ob-btn-icon" aria-hidden="true">
          <svg className="ob-btn-glyph" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <rect className="ob-btn-glyph-front" x="5.5" y="5.5" width="8" height="8" rx="1.5" />
            <path d="M10.5 3V2.5h-8v8H3" />
          </svg>
        </span>
      </button>
      <span className="ob-tooltip ob-anim-tooltip s-code__tip" data-side="left" aria-hidden="true" hidden={!tip}>
        {copied ? ui.copied : ui.copy}
      </span>
      <span className="ob-sr" role="status">
        {copied ? ui.copied : ''}
      </span>
    </span>
  )
}

/* A code sample in the design system's code well, with its copy button. */
export function CodeWindow({ code, label, ui = devUi }: { code: string; label?: string; ui?: DevUi }) {
  return (
    <figure className="s-code ob-object" aria-label={label}>
      <pre className="s-code__pre">
        <CodeLines code={code} />
      </pre>
      <CopyButton text={code} ui={ui} />
    </figure>
  )
}

/* A call to action: a router link inside the site, a plain link for an anchor on this page. */
export function SectionCta({ cta }: { cta: Cta }) {
  const inner = (
    <>
      <span className="ob-btn-label">{cta.label}</span>
      <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </>
  )
  const cls = 'ob-btn ob-btn--secondary s-sechead__cta'
  return cta.to.startsWith('#') || /^https?:/.test(cta.to) ? (
    <a className={cls} href={cta.to}>
      {inner}
    </a>
  ) : (
    <Link className={cls} to={cta.to}>
      {inner}
    </Link>
  )
}

/* A numeral stays on the line of the word it counts ("0 reminders", "48 hours"): the words are unchanged. */
const keepNumerals = (text: string) => text.replace(/(\d) (?=\S)/g, '$1\u00a0')

/* A section's head: the claim and its 1 line on the left, the call to action on the right, level with the line's
   foot. The output viewer and the developer section share it, so the 2 read as 1 system. Under 860px it stacks. */
export function SectionHead({ id, heading, line, cta }: { id: string; heading: string; line?: string; cta?: Cta }) {
  return (
    <div className={'s-sechead' + (cta ? ' has-cta' : '')}>
      <div className="s-sechead__text">
        <h2 id={id} className="ob-type-h2 s-sechead__h">
          {keepNumerals(heading)}
        </h2>
        {line && <p className="ob-type-body-lg s-sechead__line">{line}</p>}
      </div>
      {cta && <SectionCta cta={cta} />}
    </div>
  )
}

type Props = {
  developers: Developers
  /* Whose workspace the screen shows. The developer screens are drawn for "Your company". */
  workspace?: Workspace
  id?: string
  className?: string
  ui?: DevUi
}

export function DevSection({ developers, workspace = 'company', id, className, ui = devUi }: Props) {
  const headingId = useId()
  const { heading, line, code, screen, cta } = developers
  return (
    <section id={id} className={'s-section s-dev' + (className ? ' ' + className : '')} aria-labelledby={headingId}>
      <div className="s-wrap">
        <SectionHead id={headingId} heading={heading} line={line} cta={cta} />
        <div className="s-dev__body">
          <div className="s-dev__code">
            <CodeWindow code={code} ui={ui} />
          </div>
          <div className="s-dev__screen">
            <AppScreen name={screen} workspace={workspace} />
          </div>
        </div>
      </div>
    </section>
  )
}
