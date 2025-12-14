// Cloudflare Pages Middleware for dynamic meta tags
// This intercepts HTML responses and injects Open Graph tags

type View = 'home' | 'roadmap' | 'privacy' | 'terms'

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url)
  const pathname = url.pathname

  // Check if this is a static asset - let it pass through unchanged
  if (
    pathname.startsWith('/assets/') ||
    pathname.match(/\.(js|css|svg|png|ico|json|txt|xml|woff|woff2|ttf|eot|map)$/)
  ) {
    return context.next()
  }

  // For HTML routes, get the response first
  const response = await context.next()
  
  // Only modify HTML responses
  const contentType = response.headers.get('content-type') || ''
  if (!contentType.includes('text/html')) {
    return response
  }

  try {
    // Determine view from path
    const view: View = pathname === '/' ? 'home' : 
                       pathname.startsWith('/roadmap') ? 'roadmap' :
                       pathname.startsWith('/privacy') ? 'privacy' :
                       pathname.startsWith('/terms') ? 'terms' : 'home'

    let html = await response.text()
    
    // Generate and inject dynamic meta tags
    const metaTags = generateMetaTags(view, pathname)
    html = html.replace('<!--app-head-->', metaTags)

    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=0, must-revalidate'
      }
    })
  } catch (error) {
    console.error('Middleware Error:', error)
    return response
  }
}

function generateMetaTags(view: View, pathname: string): string {
  const baseUrl = 'https://ajile.pages.dev'
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
