// SSG Script - Generates static HTML for each route with proper meta tags
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')

const routes = {
  '/': {
    file: 'index.html',
    title: 'Ajile - Master Japanese through Immersion',
    description: 'The Japanese learning app I wish I had. Dictionary, SRS, and sentence mining—running fast and local on your machine. No subscriptions, no tracking.'
  },
  '/roadmap': {
    file: 'roadmap/index.html',
    title: 'Roadmap - Ajile',
    description: "See what's coming next for Ajile. I'm building in public and prioritizing features based on user feedback."
  },
  '/privacy': {
    file: 'privacy/index.html',
    title: 'Privacy Policy - Ajile',
    description: 'Your data belongs to you. Ajile runs locally on your machine. No clouds, no tracking, no monthly fees.'
  },
  '/terms': {
    file: 'terms/index.html',
    title: 'Terms of Service - Ajile',
    description: 'By using Ajile, you agree to these terms. I keep them simple because nobody likes reading legal jargon.'
  }
}

const baseUrl = 'https://ajile.fmgono.dev'

function generateMetaTags(route, { title, description }) {
  const fullUrl = `${baseUrl}${route === '/' ? '' : route}`
  const imageUrl = `${baseUrl}/logo.svg`

  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${imageUrl}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${fullUrl}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${imageUrl}" />
  `
}

async function generate() {
  // Read the base index.html
  const indexPath = path.join(distDir, 'index.html')
  const baseHtml = fs.readFileSync(indexPath, 'utf-8')

  for (const [route, config] of Object.entries(routes)) {
    const metaTags = generateMetaTags(route, config)
    const html = baseHtml.replace('<!--app-head-->', metaTags)
    
    const outputPath = path.join(distDir, config.file)
    const outputDir = path.dirname(outputPath)
    
    // Create directory if needed
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }
    
    fs.writeFileSync(outputPath, html)
    console.log(`✓ Generated ${config.file}`)
  }

  console.log('\n✨ SSG complete!')
}

generate()
