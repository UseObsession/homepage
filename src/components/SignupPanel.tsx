import { useEffect, useId, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import type { DoorId } from '../content/setup'
import type { Capture, RecipeId } from '../content/types'
import { track } from '../lib/analytics'
import { CaptureForm } from './CaptureForm'
import './SignupPanel.css'

/* The sign-up panel (26 Nov 2026, Seun: "ensure the ctas have better ux and not just straight down to footer capture").
   Every "Start free", "Run this blueprint", "Get API access" and plan button points at a page's #join, and before this a
   click scrolled the reader to the bottom of the page, or sent them to another page's bottom (/#join from /pricing,
   /developers#join from a comparison). Now the click opens this panel where the reader is: a centred dialog on a
   desktop, a sheet from the bottom on a phone, with the page's own heading and line, the same email form, and the same
   sign-up card after it, already pointed at this page's path (an API key on /developers and the piece pages, this
   blueprint on a blueprint page).
   - The links keep their address, so crawlers, a click before the script loads, and a click with a modifier key still
     reach the form at the bottom.
   - 1 listener on the document catches the click in the capture phase, before a router link navigates.
   - The page's #join section (FinalCta) carries its capture as data-* attributes; a link to another page's #join gets
     the words for where it points. */

type Panel = { title: string; body: string; capture: Capture; door?: DoorId }

const FREE = 'Free plan, no credit card.'

/* What a link to another page's form opens, by where it points. */
function elsewhere(path: string): Panel {
  if (path.startsWith('/developers'))
    return {
      title: 'Get your API key and MCP.',
      body: 'Free plan, no credit card. Tell us which pieces your agent needs first, and we set up your key and MCP with you.',
      capture: { kind: 'waitlist', source: 'panel-developers', button: 'Start free', interest: 'any' },
      door: 'build',
    }
  return {
    title: 'Start on the Free plan.',
    body: 'No credit card. Tell us how your team will use Obsession, and we set up your account with you.',
    capture: { kind: 'waitlist', source: 'panel-home', button: 'Start free', interest: 'any' },
  }
}

/* A plan's button on /pricing: every account starts on Free, so the panel names the plan they picked and says how
   they get to it. */
function plan(name: string): Panel {
  const id = name.toLowerCase().replace(/[^a-z]+/g, '-')
  return name === 'Free'
    ? elsewhere('/')
    : {
        title: `Start with the ${name} plan.`,
        body: `Every account opens on the Free plan, with no credit card, and moves to ${name} when your agents need more. We set up your account with you.`,
        capture: { kind: 'waitlist', source: `panel-pricing-${id}`, button: 'Start free', interest: 'any' },
      }
}

/* What a link to this page's own form opens: the page's closing heading, its line, and its form's settings. */
function here(): Panel | null {
  const s = document.getElementById('join')
  if (!s?.dataset.source) return null
  const d = s.dataset
  return {
    title: s.querySelector('h2')?.textContent?.trim() || 'Start free.',
    body: s.querySelector('.s-final__sub')?.textContent?.trim() || FREE,
    capture: {
      kind: (d.kind as Capture['kind']) || 'waitlist',
      source: `${d.source}-panel`,
      button: d.button || 'Start free',
      interest: (d.interest as RecipeId | 'any') || 'any',
    },
  }
}

export function SignupPanel() {
  const hid = useId()
  const { pathname } = useLocation()
  const dialog = useRef<HTMLDialogElement>(null)
  const [panel, setPanel] = useState<Panel | null>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target instanceof Element ? e.target.closest('a[href]') : null
      if (!(a instanceof HTMLAnchorElement) || a.closest('.s-panel') || a.dataset.panel === 'off') return
      const url = new URL(a.href, window.location.href)
      if (url.origin !== window.location.origin || url.hash !== '#join') return
      const same = url.pathname.replace(/\/$/, '') === window.location.pathname.replace(/\/$/, '')
      /* The bar's Start free points at Home's form (/#join) from most pages: on a page with its own closing section it
         opens with that page's words, since that is where the reader is. A link to another page's form by name
         (/developers#join) opens with that page's. */
      const picked = a.closest('.s-pr-plan')?.querySelector('h2, h3')?.textContent?.trim()
      const next = (picked && plan(picked)) || ((same || url.pathname === '/') && here()) || elsewhere(url.pathname)
      e.preventDefault()
      setPanel(next)
      dialog.current?.showModal()
      track('signup_panel_open', { from: window.location.pathname, to: `${url.pathname}${url.hash}` })
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  /* A new page closes it. */
  useEffect(() => {
    dialog.current?.close()
  }, [pathname])

  const close = () => dialog.current?.close()
  return (
    <dialog
      ref={dialog}
      className="ob-dialog ob-anim-dialog s-panel"
      aria-labelledby={`${hid}-h`}
      aria-describedby={`${hid}-b`}
      onClose={() => setPanel(null)}
      onClick={(e) => {
        /* A click on the scrim lands on the dialog itself, outside its box. */
        const r = e.currentTarget.getBoundingClientRect()
        const out = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom
        if (e.target === e.currentTarget && out) close()
      }}
    >
      {panel && (
        <>
          <span className="s-panel__grip" aria-hidden="true" />
          <div className="ob-dialog-head">
            <h2 className="ob-dialog-title s-panel__title" id={`${hid}-h`}>
              {panel.title}
            </h2>
            <button type="button" className="ob-btn ob-btn--ghost ob-btn--icon ob-btn--sm" aria-label="Close" onClick={close}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" focusable="false">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>
          </div>
          <p className="ob-dialog-body s-panel__body" id={`${hid}-b`}>
            {panel.body}
          </p>
          <CaptureForm capture={panel.capture} door={panel.door} className="s-panel__form" />
        </>
      )}
    </dialog>
  )
}
