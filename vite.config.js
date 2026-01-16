import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser', // Use Terser for better minification/obfuscation
    terserOptions: {
      compress: {
        drop_console: true, // Remove all console.logs
        drop_debugger: true,
      },
      format: {
        comments: false, // Remove all comments
      },
      mangle: {
        toplevel: true, // Mangle top-level variable names
      }
    },
    sourcemap: false, // Disables source maps
    rollupOptions: {
      output: {
        // Obfuscate filenames: "assets/index-D8s7d8.js" -> "assets/c-[hash].js"
        entryFileNames: 'assets/e-[hash].js',
        chunkFileNames: 'assets/c-[hash].js',
        assetFileNames: 'assets/a-[hash].[ext]',
      },
    },
  }
})
