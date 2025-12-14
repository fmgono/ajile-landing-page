import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'
import App from './App.tsx'
import type { View } from './App.tsx'

export async function render(url: string) {
  // Determine view from URL
  const view: View = url === '/' ? 'home' : 
                    url.startsWith('/roadmap') ? 'roadmap' :
                    url.startsWith('/privacy') ? 'privacy' :
                    url.startsWith('/terms') ? 'terms' : 'home'

  const html = renderToString(
    <StrictMode>
      <App initialView={view} />
    </StrictMode>
  )
  
  return { html, view }
}
