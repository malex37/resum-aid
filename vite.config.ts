import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader';
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname + '/src'),
      "~": path.resolve(__dirname + '/public'),
    }
  },
  plugins: [
    react(),
    svgLoader({ defaultImport: 'url', svgo: false })],
})
