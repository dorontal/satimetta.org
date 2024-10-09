import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build'
		})/*,
		paths: {
			// base: process.env.NODE_ENV === 'production' ? '/satimetta.org': ''
			// base: dev ? '' : '/satimetta.org'
		}*/
	}
};

export default config;
