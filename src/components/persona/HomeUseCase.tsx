import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { HomeUseCase as UseCase } from '../../content/types'
import './blueprint.css'
import './HomeUseCase.css'

/* 1 use case, as 1 wide card on the ruled line: the claim, its line and the link to its page on one side; on the other,
   what sits behind a sign up, drawn as a page cut by the wall: the public part faint above the dashed line, what only
   people who signed up see in full ink under it. */
export function HomeUseCase({ useCase, id }: { useCase: UseCase; id?: string }) {
  const hid = useId()
  return (
    <section className="s-section s-bp-ruled s-uc" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-uc-card ob-object">
          <div className="s-uc-words">
            <h2 className="s-bp-h s-uc-h" id={`${hid}-h`}>
              {useCase.heading}
            </h2>
            <p className="s-bp-line">{useCase.line}</p>
            <Link className="s-bp-link s-uc-link" to={useCase.link.to}>
              {useCase.link.label}
            </Link>
          </div>
          <div className="s-uc-wall">
            <p className="s-uc-before">{useCase.before}</p>
            <p className="s-uc-line">
              <span>{useCase.wall}</span>
            </p>
            <ul className="s-uc-after">
              {useCase.after.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
