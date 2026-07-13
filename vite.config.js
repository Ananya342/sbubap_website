import { resolve } from 'path';
import { defineConfig } from 'vite';

const pages = [
  'index',
  'about',
  'leadership',
  'events',
  'contact',
  'members',
  'resources',
  'membership',
  'apply',
  'gallery',
  'sponsors',
  'attendance',
  'newsletter',
];

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((name) => [name, resolve(__dirname, `${name}.html`)])
      ),
    },
  },
});
