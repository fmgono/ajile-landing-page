// Cloudflare Pages SSR Entry Point
import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'
import App, { type View } from './App'

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> }
}

function getViewFromPath(pathname: string): View {
  if (pathname === '/' || pathname === '') return 'home'
  if (pathname.startsWith('/roadmap')) return 'roadmap'
  if (pathname.startsWith('/privacy')) return 'privacy'
  if (pathname.startsWith('/terms')) return 'terms'
  return 'home'
}

function generateMetaTags(view: string, pathname: string): string {
  const baseUrl = 'https://ajile.fmgono.dev'
  const fullUrl = `${baseUrl}${pathname === '/' ? '' : pathname}`
  
  const pages: Record<string, { title: string; description: string }> = {
    home: {
      title: 'Ajile - Master Japanese through Immersion',
      description: 'The Japanese learning app I wish I had. Dictionary, SRS, and sentence mining—running fast and local on your machine. No subscriptions, no tracking.'
    },
    roadmap: {
      title: 'Roadmap - Ajile',
      description: "See what's coming next for Ajile. I'm building in public and prioritizing features based on user feedback."
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

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const pathname = url.pathname

    // Check if this is a static asset request (has a file extension)
    const hasExtension = pathname.includes('.') && !pathname.endsWith('.html')
    
    if (hasExtension) {
      // Let Cloudflare serve static assets directly
      return env.ASSETS.fetch(request)
    }

    try {
      // Determine view from path
      const view = getViewFromPath(pathname)
      
      // Render the React app to string
      const appHtml = renderToString(
        <StrictMode>
          <App initialView={view} />
        </StrictMode>
      )
      
      // Fetch the built index.html template from assets
      const indexRequest = new Request(new URL('/index.html', url.origin))
      const response = await env.ASSETS.fetch(indexRequest)
      
      if (!response.ok) {
        return new Response('Build error: index.html not found', { status: 500 })
      }
      
      let html = await response.text()
      
      // Generate and inject dynamic meta tags
      const metaTags = generateMetaTags(view, pathname)
      
      // Replace placeholders
      html = html.replace('<!--app-head-->', metaTags)
      html = html.replace('<!--app-html-->', appHtml)
      
      return new Response(html, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=0, must-revalidate'
        }
      })
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      const errorStack = error instanceof Error ? error.stack : ''
      console.error('SSR Error:', error)
      return new Response(`SSR Error: ${errorMessage}\n${errorStack}`, {
        status: 500,
        headers: { 'Content-Type': 'text/plain' }
      })
    }
  }
}
