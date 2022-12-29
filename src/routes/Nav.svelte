<script lang="ts">
	import Hamburger from '$lib/icons/Hamburger.svelte';
	import X from '$lib/icons/X.svelte';

	let isMenuOpen = false;
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	// TODO: https://svelte.dev/repl/26eb44932920421da01e2e21539494cd?version=3.55.0
</script>

<nav>
	<a href="/"><h1>Drew Maier</h1></a>
	<button
		on:click={toggleMenu}
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
		<li><a href="/about">About</a></li>
		<li><a href="/projects">Projects</a></li>
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

		position: absolute;
		inset: 0;
		background-color: transparent;
		backdrop-filter: brightness(20%) blur(10px);

		display: flex;
		flex-direction: column;
		justify-content: space-around;
		justify-items: center;
		align-items: center;
	}

	li {
		list-style-type: none;
	}

	a {
		padding: 1rem;
		font-size: var(--font-size-3);
	}

	button {
		z-index: 1;
		margin: 0;
		border: none;
		background-color: transparent;
	}

	.nav-menu--closed {
		display: none;
	}

	@media screen and (min-width: 32rem) {
		ul {
			position: static;
			backdrop-filter: none;
			justify-content: flex-end;
			margin: 0;
		}

		button {
			display: none;
		}

		.nav-menu--closed {
			display: flex;
			flex-direction: row;
		}
	}
</style>
