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

export const pieceOrder: PieceId[] = ['email', 'phone', 'browser', 'personas', 'messaging', 'sandbox']
