import { render } from '../../dist/server/entry-server.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Cache the HTML template
const templatePath = path.resolve(__dirname, '../../dist/client/index.html')
const template = fs.readFileSync(templatePath, 'utf-8')

function generateMetaTags(view, url) {
  const baseUrl = 'https://ajile.fmgono.dev'
  const fullUrl = `${baseUrl}${url === '/' ? '' : url}`
  
  const pages = {
    home: {
      title: 'Ajile - Master Japanese through Immersion',
      description: 'The Japanese learning app I wish I had. Dictionary, SRS, and sentence mining—running fast and local on your machine. No subscriptions, no tracking.'
    },
    roadmap: {
      title: 'Roadmap - Ajile',
      description: 'See what\'s coming next for Ajile. I\'m building in public and prioritizing features based on user feedback.'
    },
    privacy: {
      title: 'Privacy Policy - Ajile',
      description: 'Your data belongs to you. Ajile runs locally on your machine. No clouds, no tracking, no monthly fees.'
    },
    terms: {
      title: 'Terms of Service - Ajile',
      description: 'By using Ajile, you agree to these terms. I keep them simple because nobody likes reading legal jargon.'
    }
  }

  const page = pages[view] || pages.home
  const imageUrl = `${baseUrl}/logo.svg`

  return `
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:image" content="${imageUrl}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${fullUrl}" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${imageUrl}" />
  `
}

export const handler = async (event) => {
  try {
    // Extract path from Netlify event
    const url = event.path || event.rawPath || '/'
    
    const { html: appHtml, view } = await render(url)
    
    const metaTags = generateMetaTags(view, url)
    
    const html = template
      .replace(`<!--app-head-->`, metaTags)
      .replace(`<!--app-html-->`, appHtml)
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=0, must-revalidate'
      },
      body: html
    }
  } catch (error) {
    console.error('SSR Error:', error)
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: error.message, stack: error.stack })
    }
  }
}

