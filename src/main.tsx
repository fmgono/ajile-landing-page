import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Get initial view from URL
const getInitialView = () => {
  const path = window.location.pathname
  if (path === '/') return 'home'
  if (path.startsWith('/roadmap')) return 'roadmap'
  if (path.startsWith('/privacy')) return 'privacy'
  if (path.startsWith('/terms')) return 'terms'
  return 'home'
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App initialView={getInitialView()} />
  </StrictMode>
)
