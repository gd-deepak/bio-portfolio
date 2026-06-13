import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readdirSync, existsSync } from 'fs'
import { resolve } from 'path'

// Virtual module that auto-reads public/photos/ at build time.
// Drop any image into public/photos/ and run `npm run build` — no code changes needed.
function photoGalleryPlugin() {
  const VIRTUAL_ID = 'virtual:photos'
  const RESOLVED_ID = '\0' + VIRTUAL_ID

  return {
    name: 'photo-gallery',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },
    load(id) {
      if (id === RESOLVED_ID) {
        const dir = resolve('public/photos')
        let files = []
        if (existsSync(dir)) {
          files = readdirSync(dir)
            .filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
            .sort()
            .map(f => `/photos/${f}`)
        }
        return `export const photos = ${JSON.stringify(files)}`
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), photoGalleryPlugin()],
})
