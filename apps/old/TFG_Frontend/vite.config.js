import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $components: '/src/lib/components',
      $functions: '/src/lib/functions'
    }
  },
  server: {
    port: process.env.FRONTEND_PORT || 5173,
    strictPort: false
  }
})
