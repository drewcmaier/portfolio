<script lang="ts">
	import { page } from '$app/stores';

	import Hamburger from '$lib/icons/Hamburger.svelte';
	import X from '$lib/icons/X.svelte';

	// TODO: use responsive helper
	// https://svelte.dev/repl/26eb44932920421da01e2e21539494cd?version=3.55.0

	interface Route {
		path: string;
		label: string;
	}

	const routes: Route[] = [
		{ path: '/about', label: 'About' },
		{ path: '/projects', label: 'Projects' }
	];

	let isMenuOpen = false;
	function onToggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function onClickLink() {
		isMenuOpen = false;
	}

	function isCurrentRoute(route: string) {
		return $page.route.id === route;
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
	<ul id="nav-menu-list" class:nav-menu--closed={!isMenuOpen}>
		{#each routes as route}
			<li>
				<a href={route.path} on:click={onClickLink} class:active={$page.route.id === route.path}
					>{route.label}</a
				>
			</li>
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
		padding: 1rem;
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
		inset: 5rem 0 0 0;
		backdrop-filter: brightness(20%) blur(8px);
		background-color: var(--color-neutral);

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

	a,
	a:visited {
		font-size: var(--font-size-3);
		color: var(--color-text-inverse);
	}

	a.active {
		text-decoration: underline;
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
