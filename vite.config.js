import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    supported: {
      'top-level-await': true
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@model': path.resolve(__dirname, './src/data'),
      '@view': path.resolve(__dirname, './src/components'),
      '@controller': path.resolve(__dirname, './src/routes'),
    },
  },
  // server: {
  //   https: true
  // },
})
