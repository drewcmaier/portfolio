<script lang="ts">
	import Footer from './Footer.svelte';
	import Nav from './Nav.svelte';
	import './style.css';
</script>

<Nav />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		padding: var(--spacing-3);
		background-color: var(--color-background);

		flex: 1;
		display: flex;
		flex-direction: column;

		padding: var(--spacing-3);
		/* shift down content to account for header  */
		padding-top: calc(71px + var(--spacing-3));
	}

	@media screen and (min-width: 32rem) {
		main {
			padding-top: var(--spacing-3);
		}
	}
</style>
