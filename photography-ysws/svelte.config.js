import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			// GitHub Pages uses /Darkroom unless CUSTOM_DOMAIN is set.
			// Vercel serves the project at the domain root.
			base: process.env.VERCEL || process.env.CUSTOM_DOMAIN ? '' : '/Darkroom'
		}
	}
};

export default config;