import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: () => ({
			resolve: {
				alias: {
					$components: resolve('./src/components/'),
					$stores: resolve('./src/stores/'),
				},
			},
		}),
	},
};

export default config;