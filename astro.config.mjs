import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
	site: 'https://bernardtm.github.io',
	integrations: [mdx(), sitemap(), vue()],
});
