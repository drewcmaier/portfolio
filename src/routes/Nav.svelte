<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
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

	let isMenuOpen = $state(false);
	function onToggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function onClickLink() {
		isMenuOpen = false;
	}

	$effect(() => {
		// Prevent interactions outside nav
		if (browser) {
			['main', 'footer']
				.map((elementName) => document.getElementsByTagName(elementName).item(0) as HTMLElement)
				.forEach((element) => {
					if (element) {
						element.inert = isMenuOpen;
					}
				});
		}
	});
</script>

<header class="nav-outer" class:nav--closed={!isMenuOpen}>
	<nav class="nav-menu">
		<a href="/" onclick={onClickLink} class="nav-menu-link">
			<h1>dm</h1>
		</a>
		<button
			class="nav-menu-toggle"
			onclick={onToggleMenu}
			aria-label="Menu"
			aria-expanded={isMenuOpen}
			aria-controls="nav-menu-list"
		>
			{#if isMenuOpen}
				<X />
			{:else}
				<Hamburger />
			{/if}
		</button>
		<ul class="nav-menu-list" id="nav-menu-list">
			{#each routes as route}
				<li>
					<a
						href={route.path}
						onclick={onClickLink}
						class="nav-menu-link"
						class:nav-menu-link--active={$page.route.id === route.path}>{route.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	.nav-outer {
		background-color: var(--color-primary);
		--nav-shadow: drop-shadow(0 2px 3px var(--color-shadow));
	}

	.nav-menu {
		background-color: var(--color-primary);
		color: var(--color-text-inverse);
		fill: var(--color-text-inverse);

		box-sizing: content-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--spacing-4);

		position: fixed;
		inset: 0 0 auto;
		max-width: var(--content-max-width);
		margin: auto;
		z-index: 100;
		filter: none;
	}

	.nav-menu-list {
		max-width: var(--content-max-width);
		margin: 0 auto;
		padding: 0;

		position: fixed;
		inset: 0;
		background-color: var(--color-primary);

		display: flex;
		flex-direction: column;
		justify-content: center;
		justify-items: center;
		align-items: center;
		gap: var(--spacing-8);

		transition: opacity 0.25s;
	}

	.nav-menu-link {
		color: var(--color-text-inverse);
		font-family: var(--font-heading);
		font-weight: var(--font-weight-normal);
		font-size: var(--font-size-3);
		filter: drop-shadow(var(--shadow-text-inverse));
		text-decoration: none;
	}

	.nav-menu-link--active {
		text-decoration: underline;
	}

	.nav-menu-toggle {
		z-index: 1;
		cursor: pointer;
		border: 0;
		background-color: transparent;
		padding: var(--spacing-3);
		margin: calc(-1 * var(--spacing-3));
	}

	.nav--closed .nav-menu {
		filter: var(--nav-shadow);
	}

	.nav--closed .nav-menu-list {
		opacity: 0;
		visibility: hidden;
	}

	/*
		Large breakpoint styles
		At large widths, nav is always visible instead of a toggled
		hamburger menu.
	 */
	@media screen and (min-width: 32rem) {
		.nav--closed {
			filter: var(--nav-shadow);
		}

		.nav--closed .nav-menu {
			filter: none;
		}

		.nav--closed .nav-menu-list {
			opacity: 1;
			visibility: visible;
			display: flex;
		}

		.nav-menu {
			position: static;
		}

		.nav-menu-list {
			flex-direction: row;
			justify-content: flex-end;
			position: static;
			backdrop-filter: none;
			margin: 0;
			background-color: transparent;
			border: 0;
		}

		.nav-menu-toggle {
			display: none;
		}
	}
</style>
