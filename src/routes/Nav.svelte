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
		{ path: '/about', label: 'About me' },
		{ path: '/projects', label: 'Projects' }
	];

	let isMenuOpen = false;
	function onToggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function onClickLink() {
		isMenuOpen = false;
	}
</script>

<nav>
	<a href="/" on:click={onClickLink}>
		<h1>Drew Maier</h1>
	</a>
	<button on:click={onToggleMenu} aria-label="Menu" role="menu" aria-controls="nav-menu-list">
		{#if isMenuOpen}
			<X />
		{:else}
			<Hamburger />
		{/if}
	</button>
	<ul id="nav-menu-list" class:nav-menu--closed={!isMenuOpen} aria-expanded={isMenuOpen}>
		{#each routes as route}
			<li>
				<a href={route.path} on:click={onClickLink} class:active={$page.route.id === route.path}
					>{route.label}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<!--
	Scroll lock when menu is open
	Source: https://github.com/sveltejs/svelte/issues/3105
-->
<svelte:head>
	{#if isMenuOpen}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

<style>
	nav {
		background-color: var(--color-secondary);
		color: var(--color-text);
		border-bottom: 1px solid;

		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--spacing-md);
	}

	h1 {
		text-align: center;
		font-weight: 400;
	}

	ul {
		max-width: var(--breakpoint-lg);
		margin: 0 auto;
		padding: 0;

		position: fixed;
		/* TODO - measure */
		inset: 72px 0 0 0;
		background-color: var(--color-secondary);
		border-top: 1px solid;

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
		text-decoration: none;
		font-weight: 400;
		font-size: var(--font-size-3);
		color: var(--color-text);
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
		padding: 0.5rem;
		margin: -0.5rem;
	}

	.nav-menu--closed {
		display: none;
	}

	@media screen and (min-width: 32rem) {
		nav {
			position: static;
		}

		ul {
			flex-direction: row;
			position: static;
			backdrop-filter: none;
			justify-content: flex-end;
			gap: 2rem;
			margin: 0;
			background-color: transparent;
			border: none;
		}

		button {
			display: none;
		}

		.nav-menu--closed {
			display: flex;
		}
	}
</style>
