import { useRef, useState } from 'react'
import type { HeroVideo as HeroVideoContent } from '../../content/types'
import './HeroVideo.css'

/* Home's hero object: 1 big play button that opens the YouTube film in a dialog. Nothing loads from YouTube until it's
   pressed, the player is youtube-nocookie.com, and closing the dialog removes the player, so the film stops. */
export function HeroVideo({ video }: { video: HeroVideoContent }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  const show = () => {
    setOpen(true)
    dialog.current?.showModal()
  }
  const close = () => dialog.current?.close()
  return (
    <div className="v5-video">
      <button type="button" className="v5-video-play" onClick={show} aria-haspopup="dialog">
        <span className="v5-video-button" aria-hidden="true" />
        <span className="v5-video-label">{video.label}</span>
      </button>
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
