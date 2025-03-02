<footer class="footer-wrapper">
	<div class="footer-content">
		<p>©2025 Drew Maier</p>
		<p>Created with <a href="https://kit.svelte.dev/">SvelteKit</a></p>
	</div>
</footer>

<style>
	.footer-wrapper {
		background-color: var(--color-primary);
	}

	.footer-content {
		box-sizing: content-box;

		display: flex;
		justify-content: space-between;
		padding: var(--spacing-4);
		font-size: var(--font-size-0);
		color: var(--color-text-inverse);
		filter: drop-shadow(var(--shadow-text-inverse));

		max-width: var(--content-max-width);
		margin: auto;
	}

	.footer-content a {
		color: inherit;
	}

	.footer-content p {
		font-size: inherit;
	}
</style>
