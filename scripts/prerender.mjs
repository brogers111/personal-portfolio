import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

// Maps each SSR bundle (built by `vite build --ssr`) to the client HTML
// file (built by `vite build`) it should be baked into.
const pages = [
  { entry: 'main.js', html: 'index.html' },
  { entry: 'resume.js', html: 'resume/index.html' },
  { entry: 'technical-projects.js', html: 'technical-projects/index.html' },
  { entry: 'contact.js', html: 'contact/index.html' },
  { entry: 'training.js', html: 'training/index.html' },
  { entry: 'not-found.js', html: '404.html' },
]

for (const page of pages) {
  const { render } = await import(join(root, 'dist-ssr', page.entry))
  const appHtml = render()

  const htmlPath = join(root, 'dist', page.html)
  const html = readFileSync(htmlPath, 'utf-8')
  const withContent = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  writeFileSync(htmlPath, withContent)

  console.log(`Prerendered ${page.html}`)
}
