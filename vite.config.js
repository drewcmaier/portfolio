import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit({
			extensions: ['.svelte'],
			preprocess: [vitePreprocess()],
			adapter: adapter(),
			compilerOptions: {
				runes: true
			}
		})
	]
};

export default config;
