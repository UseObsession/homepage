import { useEffect, useId, useRef, useState } from 'react'
import { nav } from '../content/nav'
import { CaptureForm } from './CaptureForm'
import './SoonDialog.css'

/* Coming soon, for the code (4 Nov, James). The GitHub org isn't open yet, so every link to it opens this dialog
   instead of GitHub: the bar's Star on GitHub, the open source section's and the developers hero's Star it on GitHub,
   the hero's Open source tag and the footer's Open source link. The links keep their address in the HTML, so crawlers
   and a click before the script loads still reach it; 1 listener on the document catches them once the app runs, with
   or without a modifier key. The dialog is the design system's (surfaces.css .ob-dialog): the news, and the waitlist
   form, drawn only while it is open. Delete this component and its line in App.tsx, and the links go to GitHub again. */
const CODE = nav.github.to

export function SoonDialog() {
  const hid = useId()
  const dialog = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return
      const a = e.target instanceof Element ? e.target.closest('a[href]') : null
      if (!(a instanceof HTMLAnchorElement) || !a.href.startsWith(CODE)) return
      e.preventDefault()
      setOpen(true)
      dialog.current?.showModal()
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  const close = () => dialog.current?.close()
  return (
    <dialog
      ref={dialog}
      className="ob-dialog ob-anim-dialog s-soon"
      aria-labelledby={`${hid}-h`}
      onClose={() => setOpen(false)}
      onClick={(e) => {
        /* A click on the scrim lands on the dialog itself, outside its box. */
        const r = e.currentTarget.getBoundingClientRect()
        const out = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom
        if (e.target === e.currentTarget && out) close()
      }}
    >
      {open && (
        <>
          <div className="ob-dialog-head">
            <h2 className="ob-dialog-title" id={`${hid}-h`}>
              Coming soon
            </h2>
            <button type="button" className="ob-btn ob-btn--ghost ob-btn--icon ob-btn--sm" aria-label="Close" onClick={close}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" focusable="false">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>
          </div>
          <p className="ob-dialog-body">Our code goes up on GitHub soon. Join the waitlist and we’ll email you the day it does.</p>
          <CaptureForm capture={{ kind: 'waitlist', button: 'Join the waitlist', interest: 'any', source: 'github-soon' }} />
        </>
      )}
    </dialog>
  )
}
