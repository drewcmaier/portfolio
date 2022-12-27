<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/projects">Projects</a></li>
	</ul>
</nav>

<style>
	nav {
		background-color: var(--color-neutral);
	}
	ul {
		/* TODO breakpoints */
		max-width: 48rem;
		margin: 0 auto;
		padding: 2rem 0;

		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
		gap: 2rem;
	}
	li {
		list-style-type: none;
		text-transform: uppercase;
	}

	@media screen and (min-width: 32rem) {
		ul {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
