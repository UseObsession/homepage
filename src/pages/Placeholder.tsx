import { CaptureForm } from '../components/CaptureForm'
import type { Capture } from '../content/types'
import { NoticeHero } from './Notice'

/* A stand-in for a page the Pages phase has not rebuilt yet: its centred hero and its form, from its own content, so
   the route prerenders its real h1, words and capture. Replaced page by page; nothing else uses it. */
export function Placeholder({ pill, headline, sub, capture }: { pill?: string; headline: string; sub: string; capture: Capture }) {
  return (
    <NoticeHero pill={pill} headline={headline} sub={sub} size="display" end>
      <div className="s-notice-hero__join" id="join">
        <CaptureForm capture={capture} />
      </div>
    </NoticeHero>
  )
}
