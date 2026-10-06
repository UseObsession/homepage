/* A screen's shot list, for the camera (components/camera.ts): Seun and James, 3 Oct, "pan and zoom in to every clicked
   target section ... nobody is going to be reading anything on that page" (docs: _research/illus/CAMERA.md).
   - A screen opts in by writing its list on its root (data-cam={cam(SHOTS)}). It is drawn into the screen's HTML at
     build time like the rest of the screen, and the camera reads it in the browser when the story plays. A screen
     without one plays exactly as it always has.
   - Times are seconds on the screen's own story clock (0 is the .play start, the clock its CSS story runs on).
     Selectors are inside the screen's window (.appx); a shot frames the union of what they match.
   - The camera starts on the first shot and ends on the last, which holds the screen's finding, close and still. */
export type Shot = {
  /* When the camera has arrived: the move into the shot ends here, and the shot holds until the next move starts. */
  at: number
  /* What it frames. None: the whole window, the opening wide view (phones skip it and open close). */
  on?: string
  /* A tighter shot for phones, where the card is a third as wide. */
  phone?: string
  /* A shot for 1 size only. */
  only?: 'phone' | 'desk'
  /* The move into it, in seconds (.6 by default). */
  move?: number
  /* The pointer clicks this element at `tap` seconds (it is framed by then). */
  click?: string
  tap?: number
}

export const cam = (shots: Shot[]): string => JSON.stringify(shots)
