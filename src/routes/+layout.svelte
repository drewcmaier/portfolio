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

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: var(--spacing-md);
	}
</style>
