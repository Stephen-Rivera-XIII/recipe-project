import { defineConfig } from 'vitest/config';
import path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [
      'node_modules',
      'tests/e2e',
      'tests-examples',
      '**/dist/**',
      '**/.nuxt/**'
    ]
  },
  plugins: [vue()]
});