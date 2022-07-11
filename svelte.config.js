import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	css: (css) => {
		css.write('public/bundle.css');
	},

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},

	onwarn: (warning, handler) => {
		const { code } = warning;

		if (code === 'css-unused-selector') return;

		handler(warning);
	}
};

export default config;
