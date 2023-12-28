<script lang="ts">
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import Footer from './Footer.svelte';
	import Nav from './Nav.svelte';
	import './style.css';

	// Enables Vercel analytics
	inject({ mode: dev ? 'development' : 'production' });
</script>

<Nav />

<main class="root-content">
	<slot />
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
