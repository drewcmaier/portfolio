<script lang="ts">
	import { page } from '$app/stores';
	import Hamburger from '$lib/icons/Hamburger.svelte';
	import X from '$lib/icons/X.svelte';

	interface Route {
		path: string;
		label: string;
	}

	const routes: Route[] = [
		{ path: '/', label: 'About me' },
		{ path: '/experience', label: 'Experience' }
	];

	let isMenuOpen = false;
	function onToggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function onClickLink() {
		isMenuOpen = false;
	}
</script>

<header>
	<nav>
		<a href="/" on:click={onClickLink}>
			<h1>dm</h1>
		</a>
		<button on:click={onToggleMenu} aria-label="Menu" role="menu" aria-controls="nav-menu-list">
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
</header>

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
	header {
		background-color: var(--color-primary);
	}

	nav {
		background-color: var(--color-primary);
		color: var(--color-text-inverse);
		fill: var(--color-text-inverse);

		border-bottom: var(--border-normal);

		box-sizing: content-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--spacing-3);

		position: fixed;
		inset: 0 0 auto;
		max-width: var(--breakpoint-lg);
		margin: auto;
		z-index: 100;
	}

	h1 {
		text-align: center;
	}

	ul {
		max-width: var(--breakpoint-lg);
		margin: 0 auto;
		padding: 0;

		position: fixed;
		inset: 0;
		background-color: var(--color-primary);
		border: var(--border-normal);

		display: flex;
		flex-direction: column;
		justify-content: center;
		justify-items: center;
		align-items: center;
		gap: 4rem;

		transition: opacity 0.2s;
	}

	li {
		list-style-type: none;
	}

	a,
	a:visited {
		color: var(--color-text-inverse);
		text-decoration: none;
		font-weight: var(--font-weight-normal);
		font-size: var(--font-size-3);
	}

	a.active {
		text-decoration: underline;
	}

	button {
		z-index: 1;
		margin: 0;
		cursor: pointer;
		border: 0;
		background-color: transparent;
		padding: 0.5rem;
		margin: -0.5rem;
	}

	.nav-menu--closed {
		opacity: 0;
		left: -9999px;
		top: -9999px;
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
			border: 0;
		}

		button {
			display: none;
		}

		.nav-menu--closed {
			opacity: 1;
			display: flex;
		}
	}
</style>
