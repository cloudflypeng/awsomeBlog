import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS(), VitePWA({
    injectRegister: 'auto',
    registerType: 'autoUpdate', devOptions: {
      enabled: true
    }
  })],
})