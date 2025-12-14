# Cloudflare Pages SSR Deployment

## How It Works

This project uses **Server-Side Rendering (SSR)** on Cloudflare Pages:

1. `vite build` creates the client-side bundle (`assets/`, `index.html`)
2. `vite build --ssr` creates `_worker.js` which:
   - Renders React components server-side using `renderToString`
   - Injects dynamic Open Graph meta tags
   - Returns fully rendered HTML

## Cloudflare Dashboard Settings

| Setting | Value |
|---------|-------|
| **Framework preset** | None |
| **Build command** | `npm run build` or `bun run build` |
| **Build output directory** | `dist/client` |

## Project Structure

```
dist/client/
├── _worker.js          # SSR worker (handles all HTML requests)
├── index.html          # HTML template
├── assets/
│   ├── index-xxx.js    # Client-side React bundle
│   └── index-xxx.css   # Styles
├── logo.svg
└── 32x32.png
```

## SSR Flow

1. User requests `/roadmap`
2. Cloudflare runs `_worker.js`
3. Worker renders `<App initialView="roadmap" />` to HTML string
4. Worker injects dynamic meta tags for `/roadmap`
5. Worker returns complete HTML with pre-rendered content
6. Client hydrates with React

## Local Development

### Node.js SSR (Express)
```bash
npm run dev
```

### Cloudflare Workers (Wrangler)
```bash
npm run build
npm run pages:dev
```

## Deployment

### Automatic (GitHub integration)
Push to main branch → Cloudflare auto-builds and deploys

### Manual
```bash
npm run pages:deploy
```

## Dynamic Meta Tags

Each route gets unique SEO meta tags:

| Route | Title |
|-------|-------|
| `/` | Ajile - Master Japanese through Immersion |
| `/roadmap` | Roadmap - Ajile |
| `/privacy` | Privacy Policy - Ajile |
| `/terms` | Terms of Service - Ajile |

## Notes

- Uses Cloudflare's "Advanced Mode" (`_worker.js`)
- SSR code is bundled by Vite with `target: 'webworker'`
- All dependencies are bundled (no Node.js runtime)
- Static assets served directly from Cloudflare CDN
