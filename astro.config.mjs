import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

import tailwind from "@astrojs/tailwind";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: 'https://aoi-s-office.jp',
  integrations: [tailwind(), sitemap()]
});
