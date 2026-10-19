/* Copy lint for the site's words (COPY.md, "Validation"). Run after `npm run build`:

     node scripts/lint-copy.mjs          # scans dist/*.html text and every file under src/content
     node scripts/lint-copy.mjs --strict # exits 1 on any finding

   It reads the visible text of every prerendered page (every HTML file under dist, scripts and styles stripped) and the raw content
   files, and reports:
   - dashes: em and en dashes anywhere in visible text (the house style uses commas, colons and full stops);
   - retired: phrases the rewrite retired (the old category line, the seller's-representative recipes, Founders as a
     reader, "template", counts of recipes);
   - spelling: American spellings where the site writes British English;
   - contradictions: lines that contradict system.md (agents that "click your ads", "intelligence infrastructure").
   Each finding prints the file, the rule and the text around it. */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const strict = process.argv.includes('--strict')

function walk(dir, test, out = []) {
  if (!existsSync(dir)) return out
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const s = statSync(p)
    if (s.isDirectory()) walk(p, test, out)
    else if (test(p)) out.push(p)
  }
  return out
}

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
}

const RULES = [
  { id: 'dashes', re: /[–—]/g, why: 'em or en dash in visible text' },
  { id: 'retired', re: /intelligence infrastructure for commercial teams/gi, why: 'the retired category line' },
  { id: 'retired', re: /do business with other companies for you/gi, why: 'the retired seller framing' },
  {
    id: 'retired',
    re: /\b(Get paid|Renewal negotiation|Inbound quotes|Supplier quotes|Business case|Expansion offers|Client upsells|Software renewals|Account handover|Cancellation saves|Review requests)\b/g,
    why: "a retired seller's-representative recipe",
  },
  { id: 'retired', re: /\btemplates?\b/gi, why: 'say recipe, not template' },
  { id: 'retired', re: /\/founders\b/g, why: 'Founders is no longer a reader page' },
  { id: 'contradiction', re: /click(s|ing)? (on )?your ads/gi, why: 'agents open an ad’s page; they never click your ads' },
  {
    id: 'spelling',
    re: /\b(optimiz\w*|organiz\w*|analyz\w*|prioritiz\w*|customiz\w*|behavior\w*|color\w*|center(s|ed)?|favorite\w*|catalog\b|license\b)/gi,
    why: 'American spelling (the site writes British English)',
  },
]

const findings = []
function scan(file, text, origin) {
  for (const r of RULES) {
    r.re.lastIndex = 0
    let m
    while ((m = r.re.exec(text))) {
      const at = m.index
      findings.push({
        file: relative(root, file),
        origin,
        rule: r.id,
        why: r.why,
        text: text.slice(Math.max(0, at - 50), at + m[0].length + 50).replace(/\s+/g, ' '),
      })
    }
  }
}

const dist = join(root, 'dist')
for (const f of walk(dist, (p) => p.endsWith('.html') && !p.includes('/screens/'))) {
  scan(f, visibleText(readFileSync(f, 'utf8')), 'page')
}
/* Content files: only string literals, so code identifiers (catalog, color tokens) never count. */
for (const f of walk(join(root, 'src/content'), (p) => p.endsWith('.ts'))) {
  const src = readFileSync(f, 'utf8')
  const strings = [...src.matchAll(/'((?:[^'\\]|\\.)*)'|`((?:[^`\\]|\\.)*)`/g)].map((m) => m[1] ?? m[2]).join('\n')
  scan(f, strings, 'content')
}

const byRule = {}
for (const f of findings) (byRule[f.rule] ??= []).push(f)
for (const [rule, list] of Object.entries(byRule)) {
  console.log(`\n${rule}: ${list.length}`)
  for (const f of list.slice(0, 40)) console.log(`  ${f.file} (${f.origin}): ${f.why}\n    …${f.text}…`)
  if (list.length > 40) console.log(`  …and ${list.length - 40} more`)
}
console.log(`\n${findings.length} finding${findings.length === 1 ? '' : 's'}.`)
if (strict && findings.length) process.exit(1)
