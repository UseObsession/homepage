/* The 4 ways in: how a team tells Obsession what to do (_research/verify/VERIFY.md section 4; James's roles.ts on main
   had the first 3). Pick a recipe, type a task and build your own say what to do; check your AI agents is the 4th
   because what you hand over is different: you point Obsession at an AI agent and your policies, Obsession writes the
   checks, and you approve them. Nobody writes a task or picks a journey.
   Read by Home's how it works (its first step names all 4), the nav's and the footer's link to /verify, the /verify
   breadcrumb and llms.txt, so every surface names the 4th way the same way. */

export type WayId = 'recipe' | 'task' | 'build' | 'verify'
export type Way = { id: WayId; name: string; who: string; line: string; to: string }

export const ways: Record<WayId, Way> = {
  recipe: {
    id: 'recipe',
    name: 'Pick a recipe',
    who: 'For the jobs teams repeat',
    line: 'A recipe comes with its agents, inboxes, numbers, schedule and checks already set up.',
    to: '/recipes',
  },
  task: {
    id: 'task',
    name: 'Type a task',
    who: 'For anything else',
    line: 'Describe the job in plain words. Obsession sets up the agents, asks what it needs and runs it after your OK.',
    to: '/#how',
  },
  build: {
    id: 'build',
    name: 'Build your own',
    who: 'For developers',
    line: 'The same agents, inboxes, numbers and browsers, from your own code, with every step posted to your webhook.',
    to: '/developers',
  },
  verify: {
    id: 'verify',
    name: 'Check your AI agents',
    who: 'For teams running AI agents',
    line: 'Give us the chat page, phone number or inbox your AI answers on. Declared test customers use it as your customers do, every day, and sign what they find.',
    to: '/verify',
  },
}

export const WAYS: Way[] = [ways.recipe, ways.task, ways.build, ways.verify]
