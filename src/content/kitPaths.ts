/* The kits (22 Nov 2026): each job AI agents do, as the pieces and blueprints that do it. Seun: "something that fits into
   the toolkit and blueprint family ... like sections explaining". The toolkit is the whole product; a kit is the part of
   it one job uses; a blueprint is a job Obsession runs for you. Each kit's own page is pages/Kit.tsx, words in
   content/kits/. This file holds only names, lines and addresses, so the nav, the footer, Home and the router can name
   every kit without carrying its words. The order is the Product Marketing book's (22 Nov). */
import type { PersonaIcon } from './types'

export type KitId = 'talk' | 'test' | 'build' | 'portals' | 'watch' | 'train'

export type KitLink = { id: KitId; name: string; line: string; path: string; icon: PersonaIcon }

export const kitsPath = '/kits'

export const kitLinks: KitLink[] = [
  { id: 'talk', name: 'Talk to customers', line: 'Calls, texts and email from one number and inbox', path: '/kits/talk-to-customers', icon: 'chat' },
  { id: 'test', name: 'Test sign-up and agents', line: 'A new user’s codes, emails and your own bot’s answers', path: '/kits/test-sign-up-and-agents', icon: 'check' },
  { id: 'build', name: 'Build agent products', line: 'Every piece for every agent you ship, on one key', path: '/kits/build-agent-products', icon: 'code' },
  { id: 'portals', name: 'Work behind logins', line: 'Portals signed in for weeks, every code caught', path: '/kits/work-behind-logins', icon: 'key' },
  { id: 'watch', name: 'Watch the market', line: 'Competitors’ trials, emails and prices, kept', path: '/kits/watch-the-market', icon: 'record' },
  { id: 'train', name: 'Train and test agents', line: 'Real inboxes, numbers and browsers for every run', path: '/kits/train-and-test-agents', icon: 'flask' },
]

export const kitPathOf = Object.fromEntries(kitLinks.map((k) => [k.id, k.path])) as Record<KitId, string>
