<script>
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
		/* align-items: center; */
		padding: 2rem;
	}
</style>
