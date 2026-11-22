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

/* Each page's other pieces follow pieceOrder too, whatever order its file lists them in. */
const rank = (id: PieceId) => pieceOrder.indexOf(id)
export const pieces: PiecePage[] = pieceOrder.map((id) => {
  const p = byId[id]
  return { ...p, together: { ...p.together, items: [...p.together.items].sort((a, b) => rank(a.piece) - rank(b.piece)) } }
})

export const pieceAt = (path: string): PiecePage | undefined => pieces.find((p) => p.meta.path === path)

/* The words every piece page shares: the hero's tag and buttons, the price block's link to every price, the label on
   each link to another piece, the event log card's words, and how events reach you (#delivery: the claim, its line and
   the labels over the piece's events and the channels; the channels themselves and the line on a server that's down
   are content/delivery.ts, the same words as Home, the recipe pages and /developers). */
export const pieceUi = {
  pill: 'Early access',
  primary: { label: 'Request early access', to: '#join' },
  secondary: { label: 'See pricing', to: '#pricing' },
  code: 'The code',
  allPrices: { label: 'See every price', to: '/pricing/rates' },
  prices: 'Prices',
  pieces: 'The other pieces',
  log: 'Event log',
  shot: 'Kept with a screenshot',
  delivery: {
    heading: 'Every event reaches your webhook, your code or your agent.',
    line: 'Each event is saved in your event log, then sent where you listen.',
    events: 'The events it sends',
    channels: 'Where they reach you',
    link: { label: 'See the code for each channel', to: '/developers#delivery' },
  },
}
