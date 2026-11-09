/* The 4 ways in: how a team asks the index for what it needs. Pick a recipe, ask a question and build your own read
   what companies send signed-up customers; the 4th, /verify, is what AI agents tell customers, word for word: support
   chats, voice lines and sales agents, yours and competitors'.
   Read by the nav's and the footer's link to /verify, the /verify breadcrumb and llms.txt, so every surface names the
   4 ways the same way. */

export type WayId = 'recipe' | 'task' | 'build' | 'verify'
export type Way = { id: WayId; name: string; who: string; line: string; to: string }

export const ways: Record<WayId, Way> = {
  recipe: {
    id: 'recipe',
    name: 'Pick a recipe',
    who: 'For the jobs teams repeat',
    line: 'A recipe sets the companies, the customer profile, the steps and how often each is checked.',
    to: '/recipes',
  },
  task: {
    id: 'task',
    name: 'Ask a question',
    who: 'For anything else',
    line: 'Search one company or ask across a group, on our website or from your own agent. A company not covered yet is added when you click Watch.',
    to: '/#how',
  },
  build: {
    id: 'build',
    name: 'Build your own',
    who: 'For developers',
    line: 'The same index from your own agent or code: MCP, the API and SDKs, with each new fact sent to your webhook.',
    to: '/developers',
  },
  verify: {
    id: 'verify',
    name: 'What AI agents tell customers',
    who: 'For teams running AI agents, or facing them',
    line: 'What support chats, voice lines and sales agents say to a customer, yours and competitors’, word for word, each with its transcript.',
    to: '/verify',
  },
}

export const WAYS: Way[] = [ways.recipe, ways.task, ways.build, ways.verify]
