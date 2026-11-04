import { useId, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { StopTrack as StopTrackContent } from '../../content/types'
import { useInView } from './useInView'
import './StopTrack.css'

/* Home's comparison as 1 journey (COPY.md, "Compare"; 4 Nov). The customer's steps run across the top; each kind of
   tool is a line that stops at the last step it reaches, with a dot and a short note there. By hand reaches every step,
   so its line runs the whole way and thins out. Your AI customers' line runs to the end, with a mark on every step.
   The lines draw in once in view (data-v5-play, src/boot.ts); at rest, and under reduced motion, they are drawn. Below
   760px the track scrolls inside its own frame, the tool names held at the left. */
export function StopTrack({ track, id }: { track: StopTrackContent; id?: string }) {
  const hid = useId()
  const [ref, on] = useInView<HTMLDivElement>()
  const n = track.steps.length
  return (
    <section className="v5-section v5-stops" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="v5-head">
          <h2 className="v5-h2" id={`${hid}-h`}>
            {track.heading}
          </h2>
          {track.line && <p className="v5-line">{track.line}</p>}
        </div>
        <div className="v5-stops-frame" tabIndex={0} role="region" aria-label={track.heading}>
          <div
            className="v5-stops-grid"
            ref={ref}
            data-v5-play=""
            data-on={on ? '' : undefined}
            style={{ '--n': n } as CSSProperties}
          >
            <div className="v5-stops-corner" aria-hidden="true" />
            <ol className="v5-stops-steps" aria-label="The customer’s journey">
              {track.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            {track.rows.map((r, i) => {
              const reach = r.fade ? n : (r.stop ?? n)
              /* A line ends in the middle of its last step's column. */
              const end = r.ours ? 100 : ((reach - 0.5) / n) * 100
              const cls = 'v5-stops-row' + (r.ours ? ' v5-stops-row--ours' : '') + (r.fade ? ' v5-stops-row--fade' : '')
              return (
                <div className={cls} key={r.name} style={{ '--i': i, '--end': `${end}%` } as CSSProperties}>
                  <div className="v5-stops-name">
                    <span className="v5-stops-tool">{r.name}</span>
                    <span className="v5-stops-who">{r.who}</span>
                  </div>
                  <div className="v5-stops-lane">
                    <span className="v5-stops-rail" aria-hidden="true" />
                    <span className="v5-stops-run" aria-hidden="true" />
                    {r.ours ? (
                      <span className="v5-stops-marks" aria-hidden="true">
                        {track.steps.map((s) => (
                          <i key={s} />
                        ))}
                      </span>
                    ) : (
                      !r.fade && <span className="v5-stops-dot" aria-hidden="true" />
                    )}
                    <span className="v5-stops-note">{r.note}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {(track.foot || track.more) && (
          <div className="v5-stops-foot">
            {track.foot && <p className="v5-stops-note-foot">{track.foot}</p>}
            {track.more && (
              <Link className="v5-link" to={track.more.to}>
                {track.more.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
