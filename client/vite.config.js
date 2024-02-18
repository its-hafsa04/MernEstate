import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://mern-estate-api-cyan.vercel.app',
        changeOrigin: true,
        secure: true,
      },
    },
  },
  plugins: [react()],
})
