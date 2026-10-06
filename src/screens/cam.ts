/* The shot lists for the camera (components/camera.ts): Seun and James, 3 Oct, "pan and zoom in to every clicked target
   section ... nobody is going to be reading anything on that page" (docs: _research/illus/CAMERA.md).
   - Keyed by screen name. The camera loads them with itself, so no page carries them, and the screens' markup stays
     exactly as drawn. Only a screen AppScreen is asked to film (camera: Home's hero tabs, ScreenTabs) and that has a
     list here is filmed; every other screen plays as it always has.
   - Times are seconds on the screen's own story clock (0 is the .play start, the clock its CSS story runs on).
     Selectors are inside the screen's window (.appx); a shot frames the union of what they match.
   - Rhythm: at most 2 close beats before the last, each held at least 1.2 s (aim for 1.5), so its 1 point reads at a
     glance; moves take .7 to .8 s. The camera opens on the first shot and ends on the last, which holds the screen's
     finding, close and still. A click shot is framed and still before the pointer sets off. */
export type Shot = {
  /* When the camera has arrived: the move into the shot ends here, and the shot holds until the next move starts. */
  at: number
  /* What it frames. None: the whole window, the opening wide view (phones skip it and open close). */
  on?: string
  /* A tighter shot for phones, where the card is a third as wide. */
  phone?: string
  /* A shot for 1 size only. */
  only?: 'phone' | 'desk'
  /* The move into it, in seconds (.8 by default). */
  move?: number
  /* The pointer clicks this element at `tap` seconds (it is framed and still by then). */
  click?: string
  tap?: number
}

export const SHOTS: Record<string, Shot[]> = {
  /* Prospect intelligence: the 3 prospects landing with their gaps; the Coffee pitch building its 3 findings, the click
     on Copy link and "Copied"; then the pitch's findings, still. */
  pack: [
    { at: 0 },
    { at: 1, move: 0.7, on: '.pk-lh, .pk-r1, .pk-r2, .pk-r3' },
    { at: 3, move: 0.8, on: '.pk-pane', phone: '.pk-copy, .pk-page h3', click: '.pk-copy', tap: 4.24 },
    { at: 5.6, move: 0.7, on: '.pk-page h3, .pk-finds' },
  ],
  /* Mystery shopper: Day 1, the dental reply timed and the store stopped before payment; then the store's 4 inboxes
     watched for 48 hours and the finding that needs you. */
  shop: [
    { at: 0 },
    {
      at: 1.1,
      move: 0.7,
      on: '.ms-l2 .ms-lh, .ms-l2 .ms-sp, .ms-l3 .ms-lh, .ms-l3 .ms-cap, .ms-l3 .ms-done',
      phone: '.ms-l3 .ms-lh b, .ms-l3 .ms-cap, .ms-l3 .ms-done',
    },
    { at: 4.2, move: 0.8, on: '.ms-l2 .ms-wl, .ms-l2 .ms-box, .ms-l2 .ms-tm, .ms-l2 .ms-fd', phone: '.ms-l2 .ms-box, .ms-l2 .ms-tm, .ms-l2 .ms-fd' },
  ],
  /* Competitor tracking: Rival A's 30 days until today's price rise lands; then the change with its before and after
     captures. */
  rivals: [
    { at: 0 },
    { at: 1.2, move: 0.8, on: '.rv-a' },
    { at: 4, move: 0.8, on: '.rv-txt, .rv-caps', phone: '.rv-txt' },
  ],
  /* Lead leaks: the 3 channels timed against the 5 minute line, until the form lands with nobody and the phone is
     missed; the routing fix and the click on Approve; then the approval and the re-test's first reply. */
  inbound: [
    { at: 0 },
    { at: 1.3, move: 0.8, on: '.ib-lanes', phone: '.ib-rd' },
    { at: 4.05, move: 0.6, on: '.ib-new, .ib-act', phone: '.ib-act', click: '.ib-ok', tap: 4.8 },
    { at: 6, move: 0.7, on: '.ib-new, .ib-done, .ib-toast', phone: '.ib-toast p' },
  ],
  /* Check your AI agents: the checks ticking across the 3 channels; then the refund answer, its 30 days against the 14
     day policy, and the fix drafted. */
  botcheck: [
    { at: 0 },
    { at: 0.8, move: 0.6, on: '.bk-th, .bk-rows', phone: '.bk-th, .bk-fail' },
    { at: 2.8, move: 0.8, on: '.bk-v1', phone: '.bk-v1 .bk-x, .bk-v1 .bk-fx' },
  ],
}
