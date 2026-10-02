import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  /* The prerender reads the manifest to link each page's own CSS (the screens' CSS, split per screen) in its head. */
  build: { manifest: true },
})
