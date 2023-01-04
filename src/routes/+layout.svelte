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
<footer />

<style>
	main {
		padding: var(--spacing-md);
	}
</style>
