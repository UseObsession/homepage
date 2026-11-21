/* How events reach you (21 Nov 2026, James): every event (an email lands, a text, a call, a page visited, a sandbox
   finishing, a recipe result) is saved in the account's event log (1 per account; its entries are events), then
   delivered through 6 channels, in this order: 1 signed webhook for every piece and recipe, the event log read by
   cursor, MCP, a handler on our runtime, a live stream for local work, and Zapier, Make and n8n. Recipes deliver their
   results the same way, as recipe.result events. Home (#delivery), every piece page (#delivery), every recipe page
   (#delivery) and /developers (#delivery, its #webhooks inside) read these words, so the site describes one system the
   same way everywhere. Described as designed, with no build state. API names: obsession.events.subscribe and
   obsession.events.list. */

/* Every event name a developer subscribes to, with what it means in 1 line. */
export type EventName =
  | 'email.received'
  | 'email.sent'
  | 'sms.received'
  | 'call.received'
  | 'call.ended'
  | 'message.received'
  | 'page.visited'
  | 'sandbox.finished'
  | 'blueprint.result'

export const eventLines: Record<EventName, string> = {
  'email.received': 'An email lands in one of your inboxes, with its thread and attachments.',
  'email.sent': 'An email your agent wrote leaves its inbox.',
  'sms.received': 'A text reaches one of your numbers.',
  'call.received': 'Someone calls one of your numbers.',
  'call.ended': 'A call ends, with its length and its transcript.',
  'message.received': 'A message arrives on iMessage, WhatsApp, Slack or Telegram.',
  'page.visited': 'A browser opens a page, kept with its screenshot.',
  'sandbox.finished': 'A sandbox finishes its task, with its output.',
  'blueprint.result': 'A blueprint, ours or your own, brings back a result.',
}

/* 1 way events reach you: its name, 1 line, and `eg`, the line of code (or the trigger) it takes, in mono. */
export type Channel = { id: 'webhook' | 'cursor' | 'mcp' | 'handler' | 'listen' | 'nocode'; name: string; line: string; eg: string }

export const channels: Channel[] = [
  {
    id: 'webhook',
    name: 'One signed webhook',
    line: 'Subscribe once for every piece and blueprint. Each event is signed, retried for 27 hours if your server is down, and can be replayed.',
    eg: 'await obsession.events.subscribe({ url: "https://your-app.example/hooks", events: ["*"] })',
  },
  {
    id: 'cursor',
    name: 'Your event log, by cursor',
    line: 'Read every event after the last one you saw, to catch anything you missed.',
    eg: 'const { events, cursor } = await obsession.events.list({ after: lastCursor })',
  },
  {
    id: 'mcp',
    name: 'Your own agent, over MCP',
    line: 'Your agent subscribes to events as tools, in Claude Code, Cursor or any MCP client.',
    eg: 'claude mcp add obsession',
  },
  {
    id: 'handler',
    name: 'Your handler, on our runtime',
    line: 'Your code runs about 50 ms after the event lands, with no server of your own.',
    eg: 'persona.on("email.received", async (email) => { ... })',
  },
  {
    id: 'listen',
    name: 'A live stream while you build',
    line: 'Every event, forwarded to the app running on your laptop.',
    eg: 'npx obsession listen --forward http://localhost:3000/hooks',
  },
  {
    id: 'nocode',
    name: 'Zapier, Make and n8n',
    line: 'Each event starts a Zap, a scenario or a workflow, with no code.',
    eg: 'blueprint.result → Slack, Sheets or your CRM',
  },
]

/* What happens when the developer's server is down, in 1 line. */
export const downLine = 'If your server is down, each event is retried for 27 hours, and you can replay any event from your event log.'
