<script>
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import Card from '$lib/Card.svelte';
	import TypingEffect from '$lib/TypingEffect.svelte';
</script>

<Card playTransitionIn={true}>
	<TypingEffect>
		<h1 class="heading-hello">
			<span class="visually-hidden">Drew Maier</span>
			<span aria-hidden="true"><span class="md-hash">#</span>&nbsp;drew maier</span>
		</h1>
	</TypingEffect>
	<p class="intro">
		Staff Software Engineer at <a href="https://www.indeed.com">Indeed</a>, building frontends for
		the Employer product. Working remotely from the Philadelphia area.
	</p>

	<section class="md-section">
		<h2 class="md-heading"><span class="md-hash">##</span> background</h2>
		<p>
			Ten years in games (Gearbox, EA, and others) before pivoting to the web. I bring game-UI
			instincts to enterprise software.
		</p>
	</section>

	<section class="md-section">
		<h2 class="md-heading"><span class="md-hash">##</span> currently building</h2>
		<p>
			<a href="https://www.indeed.com/employers/talentscout">Talent Scout</a>: AI-assisted hiring
			for employers.
		</p>
	</section>

	<section class="md-section">
		<h2 class="md-heading"><span class="md-hash">##</span> find me</h2>
		<ul class="contact-links">
			<li>
				<a href="https://www.linkedin.com/in/drew-maier" aria-label="LinkedIn profile">
					<LinkedIn /><span class="link-label">linkedin</span>
				</a>
			</li>
			<li>
				<a href="https://github.com/drewcmaier" aria-label="GitHub profile">
					<GitHub /><span class="link-label">github</span>
				</a>
			</li>
		</ul>
	</section>
</Card>

<style>
	.heading-hello {
		font-family: var(--font-mono);
		font-size: clamp(var(--font-size-5), 9vw, var(--font-size-7));
		font-weight: 700;
		text-transform: none;
		letter-spacing: -0.03em;
		line-height: 1;
		padding-block: var(--spacing-3);
	}

	.md-hash {
		color: var(--color-accent-secondary);
	}

	:root[data-theme='dark'] .md-hash {
		color: var(--color-accent);
	}

	.intro {
		font-size: var(--font-size-3);
		margin-block-end: var(--spacing-3);
	}

	.md-section {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);
	}

	.md-heading {
		font-family: var(--font-mono);
		font-size: var(--font-size-3);
		font-weight: 700;
		text-transform: none;
		letter-spacing: -0.01em;
		line-height: 1.2;
	}

	.md-section p {
		font-size: var(--font-size-2);
		margin: 0;
	}

	.contact-links {
		display: flex;
		flex-direction: row;
		padding: 0;
		gap: var(--spacing-2);
	}

	.contact-links li {
		flex: 1;
	}

	.contact-links a {
		display: flex;
		align-items: center;
		width: 100%;
		gap: var(--spacing-3);
		padding: var(--spacing-3) var(--spacing-4);
		border: var(--border-normal);
		text-decoration: none;
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size-1);
		font-family: var(--font-mono);
		transition:
			background-color 0.15s,
			color 0.15s;
	}

	.contact-links a:hover {
		background-color: var(--color-accent);
		color: var(--color-accent-ink);
	}

	.contact-links a:hover :global(svg circle),
	.contact-links a:hover :global(svg > path:first-of-type) {
		fill: var(--color-accent-ink);
	}

	.contact-links a:hover :global(svg g path),
	.contact-links a:hover :global(svg > path:last-of-type) {
		fill: var(--color-accent);
	}

	.link-label {
		letter-spacing: 0.05em;
		text-transform: lowercase;
	}

	.contact-links :global(svg) {
		width: 20px;
		height: 20px;
	}

	@media (prefers-reduced-motion: no-preference) {
		@keyframes cursor-blink {
			50% {
				opacity: 0;
			}
		}
	}
</style>
