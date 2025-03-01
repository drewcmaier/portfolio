<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/state';
	import { inject } from '@vercel/analytics';

	import Footer from './Footer.svelte';
	import Nav from './Nav.svelte';
	import './style.css';

	let { children } = $props();

	// Enables Vercel analytics
	inject({ mode: dev ? 'development' : 'production' });
</script>

{#if page.route.id === '/fun'}
	<main class="root-content">
		{@render children()}
	</main>
{:else}
	<Nav />

	<main class="root-content">
		{@render children()}
	</main>

	<Footer />

	<style>
		.root-content {
			padding: var(--spacing-3);
			background-color: var(--color-background);

			flex: 1;
			display: flex;
			flex-direction: column;

			padding: var(--spacing-4);
			/* shift down content to account for floating header  */
			padding-block-start: calc(70px + var(--spacing-4));
		}

		@media screen and (min-width: 32rem) {
			.root-content {
				padding-block-start: var(--spacing-4);
			}
		}
	</style>
{/if}
