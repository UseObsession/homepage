/* The address of each piece's own page (pages/Piece.tsx, words in content/pieces/). Kept apart from the words so the app
   can route to a piece page without carrying every piece's words (App.tsx). The order is the nav's and Home's. */
import type { PieceId } from './prices'

export const piecePaths: Record<PieceId, string> = {
  email: '/email',
  phone: '/phone',
  messaging: '/messaging',
  browser: '/browser',
  sandbox: '/sandbox',
  personas: '/personas',
}

/* The founders' order since 21 Nov, from the buyer panel's ranking: email inboxes first, the persona bundle second, then
   the browser, then the phone. Home's pieces sheet, /pricing/rates, /developers' prices and each piece page's other
   pieces follow it; the nav's Products menu (content/nav.ts) and the /pricing calculator list the same order by hand. */
export const pieceOrder: PieceId[] = ['email', 'personas', 'browser', 'phone', 'sandbox', 'messaging']
