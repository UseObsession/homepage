/* The site's 1 Worker. It runs only for the films (/film/*, `run_worker_first` in wrangler.jsonc); every other address
   is served as a file without it, as before. Static assets answer a byte-range request with the whole file, and
   Safari plays a video only from a server that answers ranges (Apple: "HTTP servers hosting media files for iOS must
   support byte-range requests"), so this answers them: 206 with just the bytes asked for, cut from the file as it
   streams, never held whole in memory. Anything else (no Range, several ranges, a file that isn't there) passes
   through unchanged. */

const YEAR = 'public, max-age=31536000, immutable'

/* The bytes from `start` up to (not including) `end` of a stream, then it stops reading. */
function slice(start, end) {
  let at = 0
  return new TransformStream({
    transform(chunk, controller) {
      const from = Math.max(start - at, 0)
      const to = Math.min(end - at, chunk.byteLength)
      at += chunk.byteLength
      if (to > from) controller.enqueue(chunk.subarray(from, to))
      if (at >= end) controller.terminate()
    },
  })
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
    const res = await env.ASSETS.fetch(request)
    if (res.status !== 200) return res
    const size = Number(res.headers.get('Content-Length'))
    const range = /^bytes=(\d*)-(\d*)$/.exec((request.headers.get('Range') || '').trim())
    if (!range || !size || (range[1] === '' && range[2] === '')) return new Response(res.body, { status: 200, headers: headersOf(res) })

    /* bytes=a-b, bytes=a- (to the end) or bytes=-n (the last n). */
    const start = range[1] === '' ? Math.max(size - Number(range[2]), 0) : Number(range[1])
    const end = range[1] === '' || range[2] === '' ? size - 1 : Math.min(Number(range[2]), size - 1)
    const headers = headersOf(res)
    if (start > end) {
      res.body?.cancel()
      headers.set('Content-Range', `bytes */${size}`)
      headers.delete('Content-Length')
      return new Response(null, { status: 416, headers })
    }
    headers.set('Content-Range', `bytes ${start}-${end}/${size}`)
    headers.set('Content-Length', String(end - start + 1))
    const body = request.method === 'HEAD' || !res.body ? null : res.body.pipeThrough(slice(start, end + 1))
    return new Response(body, { status: 206, headers })
  },
}
