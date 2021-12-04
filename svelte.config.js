import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',  // path to public directory
			assets: 'build',  // path to public directory
			fallback: null,
		}),
		target: '#svelte',
		vite: () => ({
			resolve: {
				alias: {
					$components: resolve('./src/components/'),
					$stores: resolve('./src/stores/'),
				},
			},
		}),
		appDir: 'app',
		paths: {
			// YOUR github repository name
			base: '/svelte-problem',
		},
	},
};

export default config;
