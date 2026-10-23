import { useRef, useState } from 'react'
import type { HeroVideo as HeroVideoContent } from '../../content/types'
import './HeroVideo.css'

/* A hero's film: 1 play button that opens the YouTube film in a dialog. Big on Home, under the form; `compact` on the
   use case pages, under the sub, with its line beside it. Nothing loads from YouTube until it's pressed, the player is
   youtube-nocookie.com, and closing the dialog removes the player, so the film stops. */
export function HeroVideo({ video, compact = false }: { video: HeroVideoContent; compact?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  const show = () => {
    setOpen(true)
    dialog.current?.showModal()
  }
  const close = () => dialog.current?.close()
  return (
    <div className={compact ? 'v5-video v5-video--compact' : 'v5-video'}>
      {/* A link to the film on YouTube until the app has loaded (the page loads it after its first paint), then the
          button that opens the dialog: a click before then still plays the film, in a new tab. */}
      <a
        className="v5-video-play"
        href={`https://www.youtube.com/watch?v=${video.youtube}`}
        target="_blank"
        rel="noopener"
        aria-haspopup="dialog"
        onClick={(e) => {
          e.preventDefault()
          show()
        }}
      >
        <span className="v5-video-button" aria-hidden="true" />
        <span className="v5-video-label">{video.label}</span>
      </a>
      <dialog
        ref={dialog}
        className="v5-video-dialog"
        aria-label={video.title}
        onClose={() => setOpen(false)}
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <button type="button" className="v5-video-close" onClick={close} aria-label="Close the video" />
        <div className="v5-video-frame">
          {open && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtube}?autoplay=1&rel=0&playsinline=1`}
              title={video.title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}
        </div>
      </dialog>
    </div>
  )
}
