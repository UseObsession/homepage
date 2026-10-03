// A local stand-in for the waitlist web app: runs the real waitlist/Code.js against a fake sheet, logs every posted
// body, and collects the in-page test results. Never talks to Google.
// node waitlist/test/stub.mjs PORT [LOG_DIR], then build with VITE_WAITLIST_URL=http://127.0.0.1:PORT/ VITE_SIGNUP_TEST=1.
// GET /__sheet shows the fake sheet and the alerts it would send.
import http from 'node:http'
import { appendFileSync, writeFileSync } from 'node:fs'
import { makeGas } from './gas.mjs'
const PORT = +process.argv[2]
const HERE = process.argv[3] || new URL('.', import.meta.url).pathname
const g = makeGas(new URL('../Code.js', import.meta.url).pathname)
writeFileSync(HERE + 'posts.jsonl', ''); writeFileSync(HERE + 'reports.jsonl', '')
const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS' }
http.createServer((req, res) => {
  let body = ''
  req.on('data', (c) => (body += c))
  req.on('end', () => {
    const url = req.url.split('?')[0]
    if (req.method === 'OPTIONS') { res.writeHead(204, cors); return res.end() }
    if (url === '/__report') { appendFileSync(HERE + 'reports.jsonl', body + '\n'); res.writeHead(200, cors); return res.end('{}') }
    if (url === '/__sheet') { res.writeHead(200, { ...cors, 'Content-Type': 'application/json' }); return res.end(JSON.stringify({ rows: g.table(), mail: g.mail }, null, 1)) }
    if (req.method !== 'POST') { res.writeHead(200, cors); return res.end('{"ok":true,"service":"stub"}') }
    const type = req.headers['content-type'] || ''
    appendFileSync(HERE + 'posts.jsonl', JSON.stringify({ t: Date.now(), type, body }) + '\n')
    g.tick(8 * 60 * 1000) // 8 minutes a post, so a run of screenshots stays under the 8 sign ups an hour
    const out = type.startsWith('application/x-www-form-urlencoded') ? g.post(Object.fromEntries(new URLSearchParams(body)), type) : g.post(body, type || 'text/plain')
    if (out.html) { res.writeHead(200, { ...cors, 'Content-Type': 'text/html' }); return res.end(out.html) }
    res.writeHead(200, { ...cors, 'Content-Type': 'application/json' }); res.end(JSON.stringify(out))
  })
}).listen(PORT, '127.0.0.1', () => console.log('stub on', PORT))
