import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { resolve } from 'node:path'

// Each page gets its own real HTML file (multi-page site, not an SPA) so
// crawlers and social previews get correct, unique meta tags per route.
const clientPages = {
  main: resolve(__dirname, 'index.html'),
  resume: resolve(__dirname, 'resume/index.html'),
  'technical-projects': resolve(__dirname, 'technical-projects/index.html'),
  contact: resolve(__dirname, 'contact/index.html'),
  training: resolve(__dirname, 'training/index.html'),
  'not-found': resolve(__dirname, '404.html'),
  // Private, auth-gated, and fully dynamic — deliberately left out of
  // ssrPages/scripts/prerender.mjs. No point prerendering a login screen.
  admin: resolve(__dirname, 'admin/index.html'),
}

// SSR entries used only at build time (see scripts/prerender.mjs) to bake
// each page's actual rendered content into its static HTML file.
const ssrPages = {
  main: resolve(__dirname, 'src/entry-server/home.tsx'),
  resume: resolve(__dirname, 'src/entry-server/resume.tsx'),
  'technical-projects': resolve(__dirname, 'src/entry-server/technical-projects.tsx'),
  contact: resolve(__dirname, 'src/entry-server/contact.tsx'),
  training: resolve(__dirname, 'src/entry-server/training.tsx'),
  'not-found': resolve(__dirname, 'src/entry-server/not-found.tsx'),
}

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  // This is a multi-page site, not an SPA — without this, Vite's dev server
  // silently falls back to serving the root index.html for any path it can't
  // resolve directly (e.g. "/resume" without a trailing slash), which made
  // nav links appear broken: the URL would change but the content wouldn't.
  appType: 'mpa',
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 78 },
      jpg: { quality: 78 },
      webp: { quality: 80 },
    }),
  ],
  server: {
    hmr: true,
    open: true
  },
  build: isSsrBuild
    ? {
        outDir: 'dist-ssr',
        rollupOptions: { input: ssrPages },
      }
    : {
        rollupOptions: { input: clientPages },
      },
}))
