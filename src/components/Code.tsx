import type { ReactNode } from 'react'

const TOKEN = /(\/\/.*$)|('[^']*')|("[^"]*")|\b(import|from|const|await|new|export|async|function|return)\b/g

function highlight(line: string): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  for (const m of line.matchAll(TOKEN)) {
    const i = m.index ?? 0
    if (i > last) out.push(line.slice(last, i))
    const cls = m[1] ? 'c' : m[2] || m[3] ? 's' : 'k'
    out.push(
      <span key={i} className={cls}>
        {m[0]}
      </span>,
    )
    last = i + m[0].length
  }
  if (last < line.length) out.push(line.slice(last))
  return out
}

export function Code({ code, label }: { code: string; label?: string }) {
  return (
    <div className="code">
      {label && <p className="code-label">{label}</p>}
      <pre>
        <code>
          {code.split('\n').map((line, i) => (
            <span key={i} className="code-line">
              {highlight(line)}
              {'\n'}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}

export const sdkExample = `import { Obsession } from '@obsession/sdk'

const obs = new Obsession({ apiKey: process.env.OBS_KEY })

// Run a recipe on a schedule
await obs.runs.create({
  recipe: 'competitor_tracking',
  targets: ['rivala.com', 'rivalb.com'],
  schedule: 'weekly',
  webhook: 'https://yourapp.com/hooks/obsession',
})

// Or describe the job in plain words
await obs.runs.create({
  task: 'Tell me if an onboarding email stops arriving',
  targets: ['yourproduct.com'],
  schedule: 'weekly',
})`

export const webhookExample = `{
  "run": "run_8f2c",
  "target": "rivala.com",
  "step": "welcome_email",
  "verdict": "arrived",
  "at": "2026-10-05T07:04:12Z",
  "evidence": {
    "message": "https://api.useobsession.com/v1/evidence/msg_41a9",
    "screenshot": "https://api.useobsession.com/v1/evidence/img_77d0"
  }
}`
