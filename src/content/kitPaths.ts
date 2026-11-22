/* The six types of blueprints (22 Nov 2026), one per job AI agents do. They began as "kits"; on the 22 Nov call the
   founders agreed there is one family, blueprints ("we can't have both Blueprint and Kit", James), so each job is a type
   of blueprint, at /blueprints/SLUG beside the blueprints themselves. The code keeps its kit names (KitId, kitLinks,
   pages/Kit.tsx, content/kits/); readers never see the word. Each type lists its blueprints in content/kits/<id>.ts, and
   every blueprint belongs to exactly one type. This file holds only names, lines and addresses, so the nav, the footer,
   Home and the router can name every type without carrying its words. The order is the Product Marketing book's. */
import type { PersonaIcon } from './types'

export type KitId = 'talk' | 'test' | 'build' | 'portals' | 'watch' | 'train'

export type KitLink = { id: KitId; name: string; line: string; path: string; icon: PersonaIcon }

export const kitsPath = '/blueprints'

export const kitLinks: KitLink[] = [
  { id: 'talk', name: 'Talk to customers', line: 'Calls, texts and email from one number and inbox', path: '/blueprints/talk-to-customers', icon: 'chat' },
  { id: 'test', name: 'Test sign-up and agents', line: 'A new user’s codes, emails and your own bot’s answers', path: '/blueprints/test-sign-up-and-agents', icon: 'check' },
  { id: 'build', name: 'Build agent products', line: 'Every piece for every agent you ship, on one key', path: '/blueprints/build-agent-products', icon: 'code' },
  { id: 'portals', name: 'Work behind logins', line: 'Portals signed in for weeks, every code caught', path: '/blueprints/work-behind-logins', icon: 'key' },
  { id: 'watch', name: 'Watch the market', line: 'Competitors’ trials, emails and prices, kept', path: '/blueprints/watch-the-market', icon: 'record' },
  { id: 'train', name: 'Train and test agents', line: 'Real inboxes, numbers and browsers for every run', path: '/blueprints/train-and-test-agents', icon: 'flask' },
]

export const kitPathOf = Object.fromEntries(kitLinks.map((k) => [k.id, k.path])) as Record<KitId, string>
