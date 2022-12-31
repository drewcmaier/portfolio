<script lang="ts">
	import type { PageData } from './$types';

	import Nav from './Nav.svelte';
	import './style.css';

	export let data: PageData;
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
