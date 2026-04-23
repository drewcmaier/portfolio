<footer class="footer-wrapper">
	<div class="footer-content">
		<p><span class="md-slash">//</span> © 2026 Drew Maier</p>
		<p><span class="md-slash">//</span> <a href="https://kit.svelte.dev/">svelte</a></p>
	</div>
</footer>

<style>
	.footer-wrapper {
		background-color: var(--color-background);
		border-top: var(--border-normal);
		margin-block-start: var(--spacing-7);
		transition:
			background-color 0.2s,
			border-color 0.2s;
	}

	.footer-content {
		display: flex;
		justify-content: space-between;
		padding: var(--spacing-4);
		font-family: var(--font-mono);
		font-size: var(--font-size-0);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-text-muted);
		max-width: var(--content-max-width);
		margin: auto;
	}

	.footer-content a {
		color: var(--color-text);
		text-decoration: none;
		padding: 0 0.2em;
	}

	.footer-content a:hover {
		background-color: var(--color-accent);
		color: var(--color-accent-ink);
	}

	.footer-content p {
		font-size: inherit;
		margin: 0;
	}

	.md-slash {
		color: var(--color-accent-secondary);
	}

	:root[data-theme='dark'] .md-slash {
		color: var(--color-accent);
	}

	@media screen and (min-width: 52rem) {
		.footer-content {
			padding: var(--spacing-4) 0;
		}
	}
</style>
