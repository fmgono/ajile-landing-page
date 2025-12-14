import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: isSsrBuild
    ? {
        // SSR build for Cloudflare Workers
        outDir: 'dist/client',
        ssr: true,
        emptyOutDir: false, // Don't delete client build files!
        rollupOptions: {
          input: 'src/entry-cloudflare.tsx',
          output: {
            // Cloudflare Pages looks for _worker.js
            entryFileNames: '_worker.js',
            format: 'es'
          }
        },
        minify: true
      }
    : {
        // Client build
        outDir: 'dist/client',
        assetsDir: 'assets',
        emptyOutDir: true
      },
  ssr: {
    // Bundle everything for Cloudflare Workers (no Node.js builtins)
    noExternal: true,
    target: 'webworker'
  }
}))
