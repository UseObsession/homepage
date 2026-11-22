import type { PieceId } from './prices'
import type { PersonaIcon } from './types'

/* The sign-up card's words (components/SetupCard, lib/setup.ts): it opens where the email was typed and asks 3 short
   questions. How the team will use Obsession (build with the API, run a blueprint, or connect the AI it already uses);
   what it needs first (pieces, a blueprint and where results go, or its tools); who to set it up for. The page picks a
   starting answer where it can (lib/setup doorOf). {email}, {list}, {dest} and {first} are filled in. The answers go
   into the sign-up sheet's existing columns (lib/setup snapshotOf), so the script needs no change. */

export type DoorId = 'build' | 'blueprint' | 'connect'

export const doors: { id: DoorId; icon: PersonaIcon; title: string; line: string; sheet: string }[] = [
  { id: 'build', icon: 'code', title: 'Build with the API', line: 'Give your agents email, phone, messaging, a browser and a sandbox, in code.', sheet: 'Build with the API' },
  { id: 'blueprint', icon: 'check', title: 'Run a blueprint', line: 'Pick a ready-made job, and Obsession runs it every day.', sheet: 'Run a blueprint' },
  { id: 'connect', icon: 'chat', title: 'Connect our AI', line: 'Give Claude, ChatGPT, Zapier, Make or n8n a phone, an inbox and a browser.', sheet: 'Connect our AI' },
]

export const pieces: { id: PieceId; name: string }[] = [
  { id: 'email', name: 'Email' },
  { id: 'phone', name: 'Phone and texts' },
  { id: 'messaging', name: 'Messaging' },
  { id: 'browser', name: 'Browser' },
  { id: 'sandbox', name: 'Sandbox' },
  { id: 'personas', name: 'Personas' },
]

export const destinations = ['Slack', 'Email', 'Your CRM', 'Google Sheets', 'Clay', 'A PDF report', 'Your AI assistant', 'Somewhere else']
export const tools = ['Claude', 'ChatGPT', 'Zapier', 'Make', 'n8n', 'Clay', 'Something else']
export const sizes = ['Just me', '2 to 10', '11 to 50', '51 to 200', 'More than 200']

export const setup = {
  /* The line under the email box, by the page's starting answer. */
  micro: {
    build: 'Free plan, no credit card. We set up your API key and MCP with you.',
    blueprint: 'Free plan, no credit card. Pick the job and where results go.',
    connect: 'Free plan, no credit card. Connect the AI tools your team already uses.',
    none: 'Free plan, no credit card. Build with the API, run a blueprint or connect your AI.',
  } as Record<DoorId | 'none', string>,
  head: { title: 'Let’s set up your first agent.', step: (n: number, of: number) => `${n} of ${of}` },
  door: { title: 'How will your team use Obsession?', help: 'You can add the others later.', error: 'Pick one to continue.' },
  build: {
    title: 'Which pieces do your agents need first?',
    help: 'Pick any. Each works alone or together under one identity.',
    error: 'Pick at least 1.',
    use: { label: 'What will your agents do?', placeholder: 'For example: sign up to 200 trials a month and keep every email they receive' },
  },
  blueprint: {
    title: 'Which job should Obsession run first?',
    help: 'Pick any.',
    helpPicked: 'Pick any. We ticked the one you were reading.',
    error: 'Pick at least 1.',
    dest: 'Where should results go?',
  },
  connect: {
    title: 'Which tools does your team use?',
    help: 'Pick any. We connect Obsession to each one with you.',
    error: 'Pick at least 1.',
    use: { label: 'What should your AI do first?', placeholder: 'For example: call suppliers to confirm deliveries and email me the answer' },
  },
  about: {
    title: 'Who should we set this up for?',
    name: { label: 'Your name', placeholder: 'First and last name' },
    company: { label: 'Company', placeholder: 'Company name' },
    site: { label: 'Company website', placeholder: 'company.com' },
    size: 'Team size',
    errors: { name: 'Enter your name.', company: 'Enter your company.', site: 'Enter your website.', siteBad: 'That doesn’t look like a web address. Check for a typo.' },
  },
  optional: 'Optional',
  actions: { next: 'Continue', back: 'Back', finish: 'Finish', edit: 'Change your answers' },
  done: {
    title: (first: string) => (first ? `You’re in, ${first}.` : 'You’re in.'),
    line: {
      build: 'We’ll email {email} to set up your API key and MCP, starting with {list}.',
      blueprint: 'We’ll email {email} to set up {list}{dest}.',
      connect: 'We’ll email {email} to connect Obsession to {list}.',
    } as Record<DoorId, string>,
    /* Joined into the blueprint line when they named a destination. */
    dest: (d: string) => `, with results sent to ${d}`,
    next: {
      build: { label: 'See the API and MCP', to: '/developers' },
      blueprint: { label: 'Browse blueprints', to: '/blueprints' },
      connect: { label: 'How connecting works', to: '/no-code#connect' },
    } as Record<DoorId, { label: string; to: string }>,
  },
  saved: { failed: 'Some answers didn’t save.', retry: 'Try again' },
  sum: { you: 'You', site: 'Website', use: 'Using', pieces: 'Pieces', blueprints: 'Blueprints', dest: 'Results to', tools: 'Tools' },
}
