/* The site's 1 Worker. It runs only for the films (/film/*, `run_worker_first` in wrangler.jsonc); every other address
   is served as a file without it, as before. Static assets answer a byte-range request with the whole file, and
   Safari plays a video only from a server that answers ranges (Apple: "HTTP servers hosting media files for iOS must
   support byte-range requests"), so this answers them: 206 with just the bytes asked for. The assets binding doesn't
   say how long a file is, so the file is read once per request (5.4 MB for the home film, well inside a Worker's
   memory) and the range cut from it. Anything else (no Range, several ranges, a file that isn't there) passes through
   unchanged. */

const YEAR = 'public, max-age=31536000, immutable'

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
    const range = /^bytes=(\d*)-(\d*)$/.exec((request.headers.get('Range') || '').trim())
    if (!range || (range[1] === '' && range[2] === '')) {
      const res = await env.ASSETS.fetch(request)
      return res.status === 200 ? new Response(res.body, { status: 200, headers: headersOf(res) }) : res
    }
    /* A range: the whole file (a HEAD asks for it too, to learn its length), then the bytes asked for. */
    const res = await env.ASSETS.fetch(new Request(request.url, { method: 'GET', headers: request.headers }))
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
