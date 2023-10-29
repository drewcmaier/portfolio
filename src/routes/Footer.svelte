<footer>
	<div class="footer-content">
		<p>©2023 Drew Maier</p>
		<p>Created with <a href="https://kit.svelte.dev/">Sveltekit</a></p>
	</div>
</footer>

<style>
	footer {
		background-color: var(--color-primary);
	}

	footer a {
		color: var(--color-text-inverse);
	}

	.footer-content {
		box-sizing: content-box;

		display: flex;
		justify-content: space-between;
		padding: var(--spacing-3);
		font-size: var(--font-size-0);
		color: var(--color-text-inverse);

		max-width: var(--breakpoint-lg);
		margin: auto;
	}
</style>
