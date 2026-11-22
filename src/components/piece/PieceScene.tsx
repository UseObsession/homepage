import { useId } from 'react'
import { kitUi } from '../../content/kits'
import type { PiecePage } from '../../content/pieces/types'
import { KitScene } from '../kit/KitScene'
import '../persona/blueprint.css'
import './PieceScene.css'

/* The piece at work (#at-work), under the hero: the claim and its line, then one agent's moment in the product window
   every blueprint, team and use case page shares (components/kit/KitScene, the camera bar: the log fills, the camera
   leans in on the finding, the note draws, Replay runs it again). Words: content/pieces (scene). */
export function PieceScene({ scene, place, id }: { scene: NonNullable<PiecePage['scene']>; place: string; id?: string }) {
  const hid = useId()
  return (
    <section className="s-section s-pk-scene" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {scene.heading}
          </h2>
          <p className="s-bp-line">{scene.line}</p>
        </div>
        <div className="s-pk-scene__stage s-bp-cross">
          <KitScene scene={scene} ui={kitUi} kit={place} />
        </div>
      </div>
    </section>
  )
}
