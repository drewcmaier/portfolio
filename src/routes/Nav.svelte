<script lang="ts">
	import Hamburger from '$lib/icons/Hamburger.svelte';
	import X from '$lib/icons/X.svelte';

	// TODO: use responsive helper
	// https://svelte.dev/repl/26eb44932920421da01e2e21539494cd?version=3.55.0

	interface Route {
		path: string;
		label: string;
	}

	let isMenuOpen = false;
	function onToggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	const routes: Route[] = [
		{ path: '/about', label: 'About' },
		{ path: '/projects', label: 'Projects' }
	];

	function onClickLink() {
		isMenuOpen = false;
	}
</script>

<nav>
	<a href="/" on:click={onClickLink}>
		<h1>Drew Maier</h1>
	</a>
	<button
		on:click={onToggleMenu}
		aria-label="Menu"
		role="menu"
		aria-controls="nav-menu-list"
		aria-expanded={isMenuOpen}
	>
		{#if isMenuOpen}
			<X />
		{:else}
			<Hamburger />
		{/if}
	</button>
	<ul id="nav-menu-list" class={isMenuOpen ? undefined : 'nav-menu--closed'}>
		{#each routes as route}
			<li><a href={route.path} on:click={onClickLink}>{route.label}</a></li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		background-color: var(--color-neutral);
		color: var(--color-text-inverse);

		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem;
	}

	h1 {
		text-align: center;
	}

	ul {
		/* TODO breakpoints */
		max-width: 48rem;
		margin: 0 auto;
		padding: 0;

		position: absolute;
		/* TODO - measure */
		inset: 7rem 0 0 0;
		backdrop-filter: brightness(20%) blur(8px);

		display: flex;
		flex-direction: column;
		justify-content: center;
		justify-items: center;
		align-items: center;
		gap: 4rem;
	}

	li {
		list-style-type: none;
	}

	a {
		font-size: var(--font-size-3);
		color: var(--color-text-inverse);
	}

	button {
		z-index: 1;
		margin: 0;
		cursor: pointer;
		border: none;
		background-color: transparent;
	}

	.nav-menu--closed {
		display: none;
	}

	@media screen and (min-width: 32rem) {
		ul {
			flex-direction: row;
			position: static;
			backdrop-filter: none;
			justify-content: flex-end;
			gap: 2rem;
			margin: 0;
		}

		button {
			display: none;
		}

		.nav-menu--closed {
			display: flex;
		}
	}
</style>
