// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://demo-sports.altitudz.com',
  vite: {
    plugins: [tailwindcss()]
  }
});
