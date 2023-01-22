<script lang="ts">
	import Nav from './Nav.svelte';
	import './style.css';
</script>

<header>
	<Nav />
</header>
<main>
	<slot />
</main>
<footer>
	<p>©2023 Drew Maier</p>
	<p>Created with <a href="https://kit.svelte.dev/">Sveltekit</a></p>
</footer>

<style>
	main {
		padding: var(--spacing-3);
		background-color: var(--color-background);
	}

	footer {
		display: flex;
		justify-content: space-between;
		font-size: var(--font-size-0);
		color: var(--color-text-inverse);
		background-color: var(--color-primary);
		padding: var(--spacing-3);
	}

	footer a {
		color: var(--color-text-inverse);
	}
</style>
