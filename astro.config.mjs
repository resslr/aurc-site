import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: cloudflare()
});