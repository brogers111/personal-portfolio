import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distIndexPath = join(__dirname, '../dist/index.html')
const distTrainingPath = join(__dirname, '../dist/training.html')

const TITLE = 'Barn Work Training - Basketball Training in Arvada, CO'
const DESCRIPTION = "From 1 on 1's to small group sessions. Come ready to put in that barn work at a private facility in Arvada, Colorado"
const URL = 'https://brandonrogersconsulting.com/training'
const IMAGE = 'https://brandonrogersconsulting.com/og-training-image.jpg'

let html = readFileSync(distIndexPath, 'utf-8')

html = html
  .replace(/<title>.*?<\/title>/, `<title>${TITLE}</title>\n    <meta name="description" content="${DESCRIPTION}" />\n    <link rel="canonical" href="${URL}" />`)
  .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${URL}" />`)
  .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${TITLE}" />`)
  .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${DESCRIPTION}" />`)
  .replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${IMAGE}" />`)
  .replace(/<meta property="twitter:url" content=".*?" \/>/, `<meta property="twitter:url" content="${URL}" />`)
  .replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${TITLE}" />`)
  .replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${DESCRIPTION}" />`)
  .replace(/<meta property="twitter:image" content=".*?" \/>/, `<meta property="twitter:image" content="${IMAGE}" />`)

writeFileSync(distTrainingPath, html)
console.log('Generated dist/training.html with training-specific meta tags')
