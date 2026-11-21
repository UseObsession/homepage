import { pieceOrder } from '../piecePaths'
import type { PieceId } from '../prices'
import { browser } from './browser'
import { email } from './email'
import { messaging } from './messaging'
import { personas } from './personas'
import { phone } from './phone'
import { sandbox } from './sandbox'
import type { PiecePage } from './types'

/* Every piece's own page (21 Nov 2026), in the nav's order (piecePaths.ts pieceOrder), and the words the piece pages
   share. pages/Piece.tsx draws them; App.tsx routes each `meta.path` to it, and meta.ts, the sitemap and llms.txt read
   `pieces` for each page's head. */
export type { PiecePage } from './types'

const byId: Record<PieceId, PiecePage> = { email, phone, messaging, browser, sandbox, personas }

export const pieces: PiecePage[] = pieceOrder.map((id) => byId[id])

export const pieceAt = (path: string): PiecePage | undefined => pieces.find((p) => p.meta.path === path)

/* The words every piece page shares: the hero's tag and buttons, the price block's link to every price, the label on
   each link to another piece, and the event log card's words. */
export const pieceUi = {
  pill: 'Early access',
  primary: { label: 'Request early access', to: '#join' },
  secondary: { label: 'See pricing', to: '#pricing' },
  code: 'The code',
  allPrices: { label: 'See every price', to: '/pricing' },
  prices: 'Prices',
  pieces: 'The other pieces',
  log: 'Event log',
  shot: 'Kept with a screenshot',
}
