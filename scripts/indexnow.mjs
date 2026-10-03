/* Tells IndexNow (Bing, and through it Copilot and ChatGPT search's Bing results; also Yandex, Seznam, Naver, Yep, the
   Internet Archive and Amazonbot) that pages changed, so they are crawled again within hours instead of weeks.
   Run it by hand after every deploy, never before: IndexNow checks the key file on the live site.

     npx wrangler deploy && npm run indexnow          every page in dist/sitemap.xml
     npm run indexnow -- /agencies /recipes/lead-leaks  only the pages that changed
     npm run indexnow -- --dry-run                     print what would be sent, send nothing

   The key is public/KEY.txt (32 hex characters, the file holding only its own name), served at
   https://useobsession.com/KEY.txt. It is not a secret: anyone can read it, and it only proves we own the host.
   A new key is `openssl rand -hex 16` saved the same way, with the old file deleted.
   Protocol: indexnow.org/documentation. 200 or 202 means received; 403 means the key file isn't live yet; 422 means a
   URL isn't on useobsession.com; 429 means too many pings (wait and send only what changed). */
import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const HOST = 'useobsession.com'
const SITE = `https://${HOST}`
const ENDPOINT = 'https://api.indexnow.org/indexnow'
/* IndexNow takes up to 10,000 URLs in 1 post. */
const BATCH = 10000

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const args = process.argv.slice(2)
const dry = args.includes('--dry-run')
const paths = args.filter((a) => !a.startsWith('--'))

const keys = readdirSync(join(root, 'public')).filter((f) => {
  const name = f.slice(0, -4)
  return f.endsWith('.txt') && /^[0-9a-f]{8,128}$/i.test(name) && readFileSync(join(root, 'public', f), 'utf8').trim() === name
})
if (keys.length !== 1) throw new Error(`Expected 1 IndexNow key file in public/, found ${keys.length}.`)
const key = keys[0].slice(0, -4)
const keyLocation = `${SITE}/${key}.txt`

/* The pages: the ones named, or every page in the built sitemap. */
let urlList
if (paths.length) {
  urlList = paths.map((p) => (p.startsWith('http') ? p : SITE + (p.startsWith('/') ? p : `/${p}`)))
} else {
  const sitemap = readFileSync(join(root, 'dist', 'sitemap.xml'), 'utf8')
  urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}
const foreign = urlList.filter((u) => new URL(u).host !== HOST)
if (foreign.length) throw new Error(`Not on ${HOST}: ${foreign.join(', ')}`)
if (!urlList.length) throw new Error('No URLs to send. Run npm run build first, or name the pages.')

if (dry) {
  console.log(JSON.stringify({ host: HOST, key, keyLocation, urlList }, null, 2))
  process.exit(0)
}

/* The key file must be live first, or IndexNow answers 403. */
const live = await fetch(keyLocation).then((r) => (r.ok ? r.text() : ''), () => '')
if (live.trim() !== key) throw new Error(`${keyLocation} doesn't serve the key yet. Deploy first, then run this again.`)

for (let i = 0; i < urlList.length; i += BATCH) {
  const batch = urlList.slice(i, i + BATCH)
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key, keyLocation, urlList: batch }),
  })
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`IndexNow answered ${res.status} ${res.statusText}: ${(await res.text()).slice(0, 300)}`)
  }
  console.log(`IndexNow: ${batch.length} URL${batch.length > 1 ? 's' : ''} sent, answered ${res.status}.`)
}
