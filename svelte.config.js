import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
// import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
		/* 		alias: {
			'$components/*': resolve('./src/components/*'),
			'$entities/*': resolve('./src/entities/*'),
			'$service/*': resolve('./src/service/*'),
			'$utils/*': resolve('./src/utils/*'),
			'$store/*': resolve('./src/store/*')
		} */
	}
};

export default config;
