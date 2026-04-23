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
		{ path: '/', label: 'about' },
		{ path: '/experience', label: 'experience' },
		{ path: '/contact', label: 'contact' }
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
		<a href="/" onclick={onClickLink} class="nav-brand">
			<span class="nav-brand-prompt">&gt;</span>drew-maier<span class="nav-brand-cursor">_</span>
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
						class:nav-menu-link--active={$page.route.id === route.path}
					>
						{#if $page.route.id === route.path}<span class="nav-bracket">[</span
							>{/if}{route.label}{#if $page.route.id === route.path}<span class="nav-bracket"
								>]</span
							>{/if}
					</a>
				</li>
			{/each}
			<li class="nav-menu-item-theme">
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
			</li>
		</ul>
	</nav>
</header>

<style>
	.nav-outer {
		position: relative;
		background-color: var(--color-background);
		border-bottom: var(--border-normal);
		transition:
			background-color 0.2s,
			border-color 0.2s;
	}

	.nav-menu {
		background-color: transparent;
		color: var(--color-text);

		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--spacing-4);

		max-width: var(--content-max-width);
		margin: auto;
	}

	.nav-brand {
		font-family: var(--font-mono);
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-bold);
		text-decoration: none;
		color: var(--color-text);
		padding: 0;
	}

	.nav-brand:hover {
		background-color: transparent;
		color: var(--color-text);
	}

	.nav-brand-prompt {
		color: var(--color-accent-secondary);
		margin-inline-end: 0.3em;
	}

	:root[data-theme='dark'] .nav-brand-prompt {
		color: var(--color-accent);
	}

	.nav-brand-cursor {
		color: var(--color-accent-secondary);
		animation: cursor-blink 1.2s step-start infinite;
	}

	:root[data-theme='dark'] .nav-brand-cursor {
		color: var(--color-accent);
	}

	@keyframes cursor-blink {
		50% {
			opacity: 0;
		}
	}

	.nav-menu-list {
		position: fixed;
		inset: 0;
		z-index: 1;
		background-color: var(--color-background);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--spacing-6);
		transition: opacity 0.25s;
	}

	.nav-menu-link {
		color: var(--color-text);
		font-family: var(--font-mono);
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-medium);
		text-decoration: none;
		padding: var(--spacing-2) var(--spacing-3);
		transition:
			background-color 0.15s,
			color 0.15s;
	}

	.nav-menu-link:hover,
	.nav-menu-link:focus-visible {
		background-color: var(--color-accent);
		color: var(--color-accent-ink);
	}

	.nav-menu-link--active {
		color: var(--color-text);
		font-weight: var(--font-weight-bold);
	}

	.nav-bracket {
		color: var(--color-accent-secondary);
	}

	:root[data-theme='dark'] .nav-bracket {
		color: var(--color-accent);
	}

	.nav-menu-toggle {
		position: relative;
		z-index: 2;
		cursor: pointer;
		border: var(--border-normal);
		background-color: transparent;
		width: 36px;
		height: 36px;
		padding: 0;
		color: var(--color-text);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-menu-toggle :global(svg) {
		width: 16px;
		height: 16px;
		fill: var(--color-text);
		stroke: var(--color-text);
		margin-block-start: 0;
		filter: none;
	}

	.theme-toggle {
		background: none;
		border: var(--border-normal);
		border-radius: 0;
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		color: var(--color-text);
		transition: background-color 0.15s;
		padding: 0;
	}

	.theme-toggle:hover {
		background-color: var(--color-accent);
	}

	.theme-toggle :global(svg) {
		width: 16px;
		height: 16px;
		fill: var(--color-text);
		stroke: var(--color-text);
	}

	.theme-toggle:hover :global(svg) {
		fill: var(--color-accent-ink);
		stroke: var(--color-accent-ink);
	}

	.nav-menu-item-theme {
		display: flex;
		justify-content: center;
	}

	.nav--closed .nav-menu-list {
		opacity: 0;
		visibility: hidden;
	}

	@media screen and (min-width: 52rem) {
		.nav-menu {
			padding: var(--spacing-4) 0;
		}
	}

	@media screen and (min-width: 36rem) {
		.nav--closed .nav-menu-list {
			opacity: 1;
			visibility: visible;
			display: flex;
		}

		.nav-menu-list {
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			position: static;
			margin: 0;
			background-color: transparent;
			gap: var(--spacing-4);
		}

		.nav-menu-toggle {
			display: none;
		}
	}
</style>
