<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { theme } from '$lib/themeStore.svelte';
	import Hamburger from '$lib/icons/Hamburger.svelte';
	import X from '$lib/icons/X.svelte';
	import Sun from '$lib/icons/Sun.svelte';
	import Moon from '$lib/icons/Moon.svelte';

	interface Route {
		path: string;
		label: string;
	}

	const routes: Route[] = [
		{ path: '/', label: 'About me' },
		{ path: '/experience', label: 'Experience' },
		{ path: '/contact', label: 'Contact' }
	];

	let isMenuOpen = $state(false);
	let mounted = $state(false);

	function onToggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function onClickLink() {
		isMenuOpen = false;
	}

	function handleThemeToggle() {
		theme.toggle();
	}

	$effect(() => {
		mounted = true;
	});

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
		<div class="nav-controls">
			<button
				class="theme-toggle"
				onclick={handleThemeToggle}
				aria-label="Toggle theme"
				title={$theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
			>
				{#if mounted}
					{#if $theme === 'light'}
						<Moon />
					{:else}
						<Sun />
					{/if}
				{/if}
			</button>
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
		</div>
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
			<li class="nav-menu-item-theme">
				<button
					class="theme-toggle theme-toggle--menu"
					onclick={handleThemeToggle}
					aria-label="Toggle theme"
					title={$theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
				>
					{#if mounted}
						{#if $theme === 'light'}
							<Moon />
						{:else}
							<Sun />
						{/if}
					{/if}
				</button>
			</li>
		</ul>
	</nav>
</header>

<style>
	.nav-outer {
		background-color: var(--color-secondary);
		--nav-shadow: drop-shadow(0 2px 3px var(--color-shadow));
		transition:
			background-color 0.3s ease,
			border-color 0.3s ease;
	}

	.nav-menu {
		background-color: var(--color-secondary);
		color: var(--color-text);
		fill: var(--color-accent);
		border-bottom: 1px solid var(--color-border);

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
		background-color: var(--color-secondary);

		display: flex;
		flex-direction: column;
		justify-content: center;
		justify-items: center;
		align-items: center;
		gap: var(--spacing-8);

		transition: opacity 0.25s;
	}

	.nav-menu-link {
		color: var(--color-text);
		font-family: var(--font-heading);
		font-weight: var(--font-weight-normal);
		font-size: var(--font-size-3);
		filter: drop-shadow(var(--shadow-text));
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.nav-menu-link:hover,
	.nav-menu-link:focus-visible {
		color: var(--color-accent);
	}

	.nav-menu-link--active {
		text-decoration: underline;
		color: var(--color-accent);
	}

	.nav-menu-toggle {
		z-index: 1;
		cursor: pointer;
		border: 0;
		background-color: transparent;
		padding: var(--spacing-3);
		margin: calc(-1 * var(--spacing-3));
		color: var(--color-text);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-menu-toggle :global(svg) {
		fill: var(--color-accent);
		stroke: var(--color-accent);
	}

	.nav-controls {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
	}

	.theme-toggle {
		background: none;
		border: 1px solid var(--color-border);
		border-radius: var(--border-radius-md);
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		color: var(--color-text);
		transition:
			background-color 0.2s ease,
			border-color 0.2s ease,
			transform 0.1s ease;
		padding: 0;
	}

	.theme-toggle:hover {
		background-color: var(--color-background);
		border-color: var(--color-accent);
		transform: scale(1.05);
	}

	.theme-toggle:active {
		transform: scale(0.95);
	}

	.theme-toggle :global(svg) {
		width: 20px;
		height: 20px;
		fill: var(--color-accent);
		stroke: var(--color-accent);
	}

	.theme-toggle--menu :global(svg) {
		width: 24px;
		height: 24px;
	}

	.nav-menu-item-theme {
		display: flex;
		justify-content: center;
	}

	.theme-toggle--menu {
		width: auto;
		height: auto;
		/* border: none; */
		font-size: var(--font-size-2);
		gap: var(--spacing-2);
		display: flex;
		align-items: center;
		background: none;
		border: 1px solid var(--color-border);
		border-radius: var(--border-radius-md);
		padding: var(--spacing-3);
		cursor: pointer;
		color: var(--color-text);
		transition:
			background-color 0.2s ease,
			border-color 0.2s ease,
			transform 0.1s ease;
	}

	.theme-toggle--menu:hover {
		background-color: var(--color-background);
		border-color: var(--color-accent);
		transform: scale(1.05);
	}

	.theme-toggle--menu:active {
		transform: scale(0.95);
	}

	.nav-controls .theme-toggle {
		display: none;
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
	@media screen and (min-width: 36rem) {
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

		.nav-outer {
			border-bottom: 1px solid var(--color-border);
		}

		.nav-menu {
			position: static;
			border-bottom: none;
		}

		.nav-menu-list {
			flex-direction: row;
			justify-content: flex-end;
			position: static;
			backdrop-filter: none;
			margin: 0;
			background-color: transparent;
			border: 0;
			gap: var(--spacing-6);
		}

		.nav-menu-toggle {
			display: none;
		}

		.nav-controls {
			position: absolute;
			right: var(--spacing-4);
		}

		.nav-controls .theme-toggle {
			display: flex;
			filter: drop-shadow(var(--shadow-text));
		}

		.nav-menu-item-theme {
			display: none;
		}

		.theme-toggle--menu {
			display: none;
		}
	}

	@media screen and (max-width: 55rem) {
		.nav-menu-list {
			padding-right: 80px;
		}
	}
</style>
