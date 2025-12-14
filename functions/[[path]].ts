// Cloudflare Pages Function for SSR
export async function onRequest(context: {
  request: Request
  env: any
  params: { path?: string }
}) {
  try {
    const url = context.params.path ? `/${context.params.path}` : '/'
    
    // Import the render function dynamically
    const { render } = await import('../dist/server/entry-server.js')
    
    // Get the HTML template from the static assets
    // In Cloudflare Pages, we need to fetch it from the request URL
    const baseUrl = new URL(context.request.url).origin
    const templateResponse = await fetch(`${baseUrl}/index.html`)
    
    // If template fetch fails, use a fallback
    let template: string
    if (templateResponse.ok) {
      template = await templateResponse.text()
    } else {
      // Fallback template if index.html isn't available
      template = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/32x32.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--app-head-->
  </head>
  <body>
    <div id="root"><!--app-html--></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
    }
    
    const { html: appHtml, view } = await render(url)
    
    const metaTags = generateMetaTags(view, url)
    
    const html = template
      .replace(`<!--app-head-->`, metaTags)
      .replace(`<!--app-html-->`, appHtml)
    
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=0, must-revalidate'
      }
    })
  } catch (error: any) {
    console.error('SSR Error:', error)
    return new Response(
      JSON.stringify({ error: error.message, stack: error.stack }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}

function generateMetaTags(view: string, url: string) {
  const baseUrl = 'https://ajile.fmgono.dev'
  const fullUrl = `${baseUrl}${url === '/' ? '' : url}`
  
  const pages: Record<string, { title: string; description: string }> = {
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
