/* The site's 1 Worker. It runs for the films (/film/*, `run_worker_first` in wrangler.jsonc) and for any address with no
   file behind it (`not_found_handling` "none", see missing() below); every file that exists is served without it.
   Static assets answer a byte-range request with the whole file, and
   Safari plays a video only from a server that answers ranges (Apple: "HTTP servers hosting media files for iOS must
   support byte-range requests"), so this answers them: 206 with just the bytes asked for. The assets binding doesn't
   say how long a file is, so the file is read once per request (5.4 MB for the home film, well inside a Worker's
   memory) and the range cut from it. Anything else (no Range, several ranges) passes through unchanged. */

const YEAR = 'public, max-age=31536000, immutable'

/* The headers public/_headers gives every address. Cloudflare applies _headers only to files it serves itself, never
   to a response this Worker makes, so the Worker's own answers carry them here (keep the 2 lists the same). */
const SITE = {
  'Strict-Transport-Security': 'max-age=15552000',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Content-Security-Policy': "frame-ancestors 'self'",
  'X-Frame-Options': 'SAMEORIGIN',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
}

/* An address with no file behind it. Under /assets/ it is a page's code or style from another release: a deploy takes
   a few seconds to reach every Cloudflare location, so a page from the new release can ask a location still on the
   old one for its new file, and a page left open asks for a file the new release dropped (Cloudflare: "version
   skew"). That 404 is never stored. Served by static assets it took /assets/*'s year-long immutable cache from
   _headers, and a browser that met it kept it: on 13 Nov 2026 the home page's code stayed a 404 in James's browser
   after the file was live, the reload in main.tsx met the same stored 404, and the page never woke (no menu). Every
   other address gets the 404 page with a real 404 status, as `not_found_handling` "404-page" served it before. */
async function missing(request, env) {
  const url = new URL(request.url)
  if (url.pathname.startsWith('/assets/')) {
    return new Response('Not found', { status: 404, headers: { ...SITE, 'Cache-Control': 'no-store', 'Content-Type': 'text/plain; charset=utf-8' } })
  }
  const page = await env.ASSETS.fetch(new Request(new URL('/404', url), { method: request.method === 'HEAD' ? 'HEAD' : 'GET' }))
  const headers = new Headers(page.headers)
  for (const [k, v] of Object.entries(SITE)) headers.set(k, v)
  return new Response(page.body, { status: 404, headers })
}

/* The headers every film answer carries: ranges offered, a year's cache (a new cut gets a new name), no sniffing. */
function headersOf(res) {
  const h = new Headers(res.headers)
  h.set('Accept-Ranges', 'bytes')
  h.set('Cache-Control', YEAR)
  h.set('X-Content-Type-Options', 'nosniff')
  return h
}

export default {
  async fetch(request, env) {
    if (!new URL(request.url).pathname.startsWith('/film/')) return missing(request, env)
    const range = /^bytes=(\d*)-(\d*)$/.exec((request.headers.get('Range') || '').trim())
    if (!range || (range[1] === '' && range[2] === '')) {
      const res = await env.ASSETS.fetch(request)
      if (res.status === 404) return missing(request, env)
      return res.status === 200 ? new Response(res.body, { status: 200, headers: headersOf(res) }) : res
    }
    /* A range: the whole file (a HEAD asks for it too, to learn its length), then the bytes asked for. */
    const res = await env.ASSETS.fetch(new Request(request.url, { method: 'GET', headers: request.headers }))
    if (res.status === 404) return missing(request, env)
    if (res.status !== 200) return res
    const file = await res.arrayBuffer()
    const size = file.byteLength
    /* bytes=a-b, bytes=a- (to the end) or bytes=-n (the last n). */
    const start = range[1] === '' ? Math.max(size - Number(range[2]), 0) : Number(range[1])
    const end = range[1] === '' || range[2] === '' ? size - 1 : Math.min(Number(range[2]), size - 1)
    const headers = headersOf(res)
    headers.delete('Content-Length')
    if (start > end) {
      headers.set('Content-Range', `bytes */${size}`)
      return new Response(null, { status: 416, headers })
    }
    headers.set('Content-Range', `bytes ${start}-${end}/${size}`)
    headers.set('Content-Length', String(end - start + 1))
    return new Response(request.method === 'HEAD' ? null : file.slice(start, end + 1), { status: 206, headers })
  },
}
