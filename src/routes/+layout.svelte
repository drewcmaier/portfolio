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
	}
</style>
