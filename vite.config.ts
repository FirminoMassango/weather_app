import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    VitePWA({ 
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'Weather App',
        short_name: 'WeaherApp',
        description: 'See the weather forecast for 5 days.',
        theme_color: '#282D44',
        icons: [
          {
            src: './assets/pwa-icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './assets/pwa-icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: './assets/pwa-icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})
