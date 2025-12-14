# Cloudflare Pages Deployment Guide

## Dashboard Settings

In your Cloudflare Pages dashboard, configure:

| Setting | Value |
|---------|-------|
| **Build command** | `npm run build:cf` |
| **Build output directory** | `dist/client` |
| **Root directory** | (leave empty) |

## How It Works

1. **Client Build**: Vite builds React app → `dist/client/`
2. **Static Assets**: Cloudflare Pages serves JS, CSS, images directly
3. **Functions**: `functions/[[path]].ts` handles all HTML routes:
   - Fetches `index.html` from static assets
   - Injects dynamic Open Graph meta tags based on the route
   - Returns the modified HTML

## Project Structure

```
├── functions/
│   └── [[path]].ts      # Catch-all function for dynamic OG tags
├── dist/
│   └── client/          # Built static assets (served by CF Pages)
├── src/                  # React source code
├── wrangler.toml        # Cloudflare config
└── package.json
```

## Local Development

```bash
# Standard dev (Express server)
npm run dev

# Test Cloudflare Pages locally (after build)
npm run build:cf
npm run pages:dev
```

## Deploy

### Option 1: Git Integration (Recommended)
1. Connect your repo to Cloudflare Pages
2. Set build command: `npm run build:cf`
3. Set output directory: `dist/client`
4. Deploy!

### Option 2: Wrangler CLI
```bash
npm run pages:deploy
```

## Routes Handled

| Route | Dynamic Title | Dynamic Description |
|-------|---------------|---------------------|
| `/` | Ajile - Master Japanese through Immersion | The Japanese learning app I wish I had... |
| `/roadmap` | Roadmap - Ajile | See what's coming next... |
| `/privacy` | Privacy Policy - Ajile | Your data belongs to you... |
| `/terms` | Terms of Service - Ajile | By using Ajile, you agree... |

## Notes

- Static assets (`.js`, `.css`, `.svg`, `.png`) bypass the function
- The function only modifies HTML responses
- No full React SSR - just meta tag injection (faster, simpler)
- The React app handles client-side routing after hydration
