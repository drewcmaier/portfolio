<script>
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
</script>

<section>
	<strong class="hello">Hello, world!<span class="cursor">█</span></strong>
	<p>
		<span>My name is</span> <strong>Drew Maier</strong>
		<span
			>and I am a UX Developer for <a href="https://www.indeed.com">Indeed</a> in the Greater Philadelphia
			area.</span
		>
	</p>
	<p>
		Frontend development is my passion. Whether I'm developing a <strong>website</strong>,
		<strong>game</strong>, or <strong>mobile app</strong>, my goal is always to create an enjoyable
		user experience.
	</p>
	<ul class="contact-links">
		<li><a href="https://www.linkedin.com/in/drew-maier"><LinkedIn /></a></li>
		<li><a href="https://github.com/drewcmaier"><GitHub /></a></li>
	</ul>
</section>

<style>
	section {
		flex: 1;
		padding: var(--spacing-5);
		font-size: var(--font-size-2);
		background-color: var(--color-secondary);
		max-width: var(--breakpoint-lg);
		margin: auto;
	}

	:where(p, span):not(:last-child) {
		margin-bottom: var(--spacing-4);
	}

	:where(p, span):last-child {
		margin-bottom: var(--spacing-5);
	}

	.hello {
		display: block;
		font-family: var(--font-mono);
		font-size: var(--font-size-6);
		padding: var(--spacing-5);

		position: relative;
		margin-inline: calc(-1 * var(--spacing-5));
		top: calc(-1 * var(--spacing-5));
		background-color: var(--color-primary);
		color: var(--color-text-inverse);
		border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
	}

	.contact-links {
		display: flex;
		list-style-type: none;
		padding: 0;
		gap: var(--spacing-3);
		margin-block-start: var(--spacing-5);
	}

	.contact-links li {
		width: 44px;
		height: 44px;
	}

	.cursor {
		animation: cursor-blink 1s step-start infinite;
	}

	@keyframes cursor-blink {
		50% {
			opacity: 0;
		}
	}
</style>
