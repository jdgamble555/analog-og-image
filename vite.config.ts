/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  build: {
    target: ['es2020'],
    rollupOptions: {
      external: ['sharp', '@img/sharp-wasm32', '@img/sharp-linux-x64']
    },
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      ssr: true,
      static: false,
      prerender: {
        routes: [],
      },
      nitro: {
        preset: 'vercel-edge'
      }
    }),
    tailwindcss()
  ],
}));
