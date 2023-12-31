<footer class="footer-wrapper">
	<div class="footer-content">
		<p>©2023 Drew Maier</p>
		<p>Created with <a href="https://kit.svelte.dev/">SvelteKit</a></p>
	</div>
</footer>

<style>
	.footer-wrapper {
		background-color: var(--color-primary);
	}

	.footer-wrapper a {
		color: var(--color-text-inverse);
	}

	.footer-content {
		box-sizing: content-box;

		display: flex;
		justify-content: space-between;
		padding: var(--spacing-4);
		font-size: var(--font-size-0);
		color: var(--color-text-inverse);

		max-width: var(--breakpoint-lg);
		margin: auto;
	}

	.footer-content p {
		font-size: inherit;
	}
</style>
