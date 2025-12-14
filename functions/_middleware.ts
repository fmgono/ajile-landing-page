// Middleware to handle SSR for HTML routes
// Static assets are automatically served by Cloudflare Pages

import { renderToString } from 'react-dom/server'
import { createElement } from 'react'

type View = 'home' | 'roadmap' | 'privacy' | 'terms'

export async function onRequest(context: {
  request: Request
  next: () => Promise<Response>
  env: any
}) {
  const url = new URL(context.request.url)
  const pathname = url.pathname

  // Let static assets pass through
  if (
    pathname.startsWith('/assets/') ||
    pathname.endsWith('.js') ||
    pathname.endsWith('.css') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.json')
  ) {
    return context.next()
  }

  // Handle HTML routes with SSR
  try {
    // Determine view from path
    const view: View = pathname === '/' ? 'home' : 
                       pathname.startsWith('/roadmap') ? 'roadmap' :
                       pathname.startsWith('/privacy') ? 'privacy' :
                       pathname.startsWith('/terms') ? 'terms' : 'home'

    // Fetch the static HTML template
    const templateResponse = await context.next()
    
    // If it's not found or error, try to serve index.html
    if (!templateResponse.ok) {
      const indexResponse = await context.env.ASSETS.fetch(new URL('/index.html', url.origin))
      if (!indexResponse.ok) {
        return new Response('Not found', { status: 404 })
      }
    }

    let template = await templateResponse.text()
    
    // Generate dynamic meta tags
    const metaTags = generateMetaTags(view, pathname)
    
    // Inject meta tags
    const html = template.replace('<!--app-head-->', metaTags)

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=0, must-revalidate'
      }
    })
  } catch (error: any) {
    console.error('SSR Error:', error)
    // Fallback to static file
    return context.next()
  }
}

function generateMetaTags(view: View, pathname: string): string {
  const baseUrl = 'https://ajile.fmgono.dev'
  const fullUrl = `${baseUrl}${pathname === '/' ? '' : pathname}`
  
  const pages: Record<View, { title: string; description: string }> = {
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

  const page = pages[view]
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
