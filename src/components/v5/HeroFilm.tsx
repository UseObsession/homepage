import { useEffect, useRef, useState } from 'react'
import type { HeroVideo } from '../../content/types'
import './HeroFilm.css'

/* Home's film, in the page itself, never in a window over it. While at least a third of it is in view it plays
   without sound, as a preview behind the hero's round play button; once it leaves, it stops. The button plays it
   from the start with sound, right where it is, and then a small pause and mute sit in its corner. The file is ours
   (public/film/), so nothing loads from YouTube. Under reduced motion, or where the browser won't start it by itself
   (Low Power Mode on an iPhone, say), the preview waits on its first frame and the button works the same. */
export function HeroFilm({ video }: { video: HeroVideo & { file: NonNullable<HeroVideo['file']> } }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [watching, setWatching] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  /* Paused by the visitor: coming back into view doesn't start it again. */
  const held = useRef(false)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    /* Set here as well as in the markup: React doesn't always write `muted` into the prerendered page, and a browser
       only starts a film by itself when it is muted. */
    v.muted = true
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !held.current) v.play().catch(() => {})
        else if (!e.isIntersecting) v.pause()
      },
      { threshold: 0.33 },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

  /* The round button: the film from the start, with sound (the press is what lets the browser play it). */
  const watch = () => {
    const v = ref.current
    if (!v) return
    held.current = false
    v.currentTime = 0
    v.muted = false
    setWatching(true)
    v.play().catch(() => {
      v.muted = true
      v.play().catch(() => {})
    })
  }
  const toggle = () => {
    const v = ref.current
    if (!v) return
    if (v.paused) {
      held.current = false
      v.play().catch(() => {})
    } else {
      held.current = true
      v.pause()
    }
  }
  const sound = () => {
    const v = ref.current
    if (v) v.muted = !v.muted
  }

  return (
    <figure className={watching ? 'v5-film is-watching' : 'v5-film'}>
      <div className="v5-film-frame">
        <video
          ref={ref}
          className="v5-film-video"
          src={video.file.src}
          poster={video.file.poster}
          width={video.file.width}
          height={video.file.height}
          muted
          loop
          playsInline
          preload="none"
          aria-label={video.title}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
          onClick={watching ? toggle : watch}
        />
        {!watching && (
          <button type="button" className="v5-film-watch" onClick={watch} aria-label={video.label}>
            <span className="v5-film-watch-dot" aria-hidden="true" />
          </button>
        )}
        <div className="v5-film-controls">
          <button type="button" className="v5-film-btn" onClick={toggle} aria-label={playing ? 'Pause the film' : 'Play the film'}>
            <span className={playing ? 'v5-film-ico v5-film-ico--pause' : 'v5-film-ico v5-film-ico--play'} aria-hidden="true" />
          </button>
          {watching && (
            <button type="button" className="v5-film-btn" onClick={sound} aria-label={muted ? 'Turn the sound on' : 'Turn the sound off'}>
              <svg className="v5-film-svg" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                <path d="M3 8h3l4-3.5v11L6 12H3z" />
                {muted ? <path d="M13.5 7.5l5 5M18.5 7.5l-5 5" /> : <path d="M13.5 7a4.5 4.5 0 0 1 0 6M15.8 5a7.5 7.5 0 0 1 0 10" />}
              </svg>
            </button>
          )}
        </div>
      </div>
    </figure>
  )
}
