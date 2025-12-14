import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!

// Get initial view from URL to match SSR
const getInitialView = () => {
  const path = window.location.pathname
  if (path === '/') return 'home'
  if (path.startsWith('/roadmap')) return 'roadmap'
  if (path.startsWith('/privacy')) return 'privacy'
  if (path.startsWith('/terms')) return 'terms'
  return 'home'
}

// Hydrate instead of render for SSR
hydrateRoot(
  root,
  <StrictMode>
    <App initialView={getInitialView()} />
  </StrictMode>
)

// Mark body as hydrated (fallback if script in HTML didn't run)
if (typeof document !== 'undefined') {
  document.body.classList.add('hydrated')
}
