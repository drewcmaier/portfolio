<script lang="ts">
	import { page } from '$app/state';
	import { theme } from '#lib/themeStore.svelte.ts';

	import Footer from './Footer.svelte';
	import Nav from './Nav.svelte';
	import './style.css';

	let { children } = $props();

</script>

{#if page.route.id?.includes('/fun')}
	{@render children()}
{:else}
	<Nav />

	<main class="root-content">
		{@render children()}
	</main>

	<Footer />
{/if}

<style>
	.root-content {
		background-color: transparent;

		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;

		padding: var(--spacing-4);
		padding-block-start: var(--spacing-6);
	}

	@media screen and (min-width: 36rem) {
		.root-content {
			padding: var(--spacing-5);
			padding-block-start: var(--spacing-7);
		}
	}
</style>
