# Cloudflare Pages Deployment Guide

## Build Settings

In your Cloudflare Pages dashboard, configure:

1. **Build command:** `npm run build` (or `bun run build`)
2. **Build output directory:** `dist/client`
3. **Root directory:** (leave empty, or set if your project is in a subdirectory)

## Project Structure

- `functions/[[path]].ts` - Cloudflare Pages Function for SSR (handles all routes)
- `dist/client/` - Client-side assets (HTML, JS, CSS)
- `dist/server/` - Server-side rendering code
- `wrangler.toml` - Cloudflare configuration (optional, mainly for local dev)

## How It Works

1. Cloudflare Pages builds your project using `npm run build`
2. Static assets are served from `dist/client`
3. All HTML routes are handled by `functions/[[path]].ts` which:
   - Renders React components server-side
   - Generates dynamic Open Graph meta tags
   - Returns fully rendered HTML

## Local Development

For local development with Cloudflare Pages Functions:

```bash
# Install Wrangler CLI (if not already installed)
npm install -g wrangler

# Run locally
wrangler pages dev dist/client --functions functions
```

Or continue using your Express server for local dev:
```bash
npm run dev
```

## Notes

- The SSR function automatically handles all routes (`/`, `/roadmap`, `/privacy`, `/terms`)
- Static assets (JS, CSS, images) are served directly by Cloudflare Pages
- Dynamic meta tags are generated server-side for better SEO and social sharing
