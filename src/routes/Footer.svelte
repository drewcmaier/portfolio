<footer class="footer-wrapper">
	<div class="footer-content">
		<p>©2026 Drew Maier</p>
		<p>Created with <a href="https://kit.svelte.dev/">SvelteKit</a></p>
	</div>
</footer>

<style>
	.footer-wrapper {
		background-color: var(--color-secondary);
		border-top: 1px solid var(--color-border);
		transition:
			background-color 0.3s ease,
			border-color 0.3s ease;
	}

	.footer-content {
		box-sizing: content-box;

		display: flex;
		justify-content: space-between;
		padding: var(--spacing-4);
		font-size: var(--font-size-0);
		color: var(--color-text);
		filter: drop-shadow(var(--shadow-text));

		max-width: var(--content-max-width);
		margin: auto;
	}

	.footer-content a {
		color: var(--color-accent);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.footer-content a:hover {
		color: var(--color-link-hover);
		text-decoration: underline;
	}

	.footer-content p {
		font-size: inherit;
		margin: 0;
	}
</style>
