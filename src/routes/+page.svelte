<script>
	import { fade } from 'svelte/transition';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
</script>

<section class="card" in:fade={{ duration: 500 }}>
	<strong class="card-heading">Hello, world!<span class="cursor">█</span></strong>
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
		<li>
			<a href="https://www.linkedin.com/in/drew-maier" aria-label="LinkedIn profile"><LinkedIn /></a
			>
		</li>
		<li><a href="https://github.com/drewcmaier" aria-label="GitHub profile"><GitHub /></a></li>
	</ul>
</section>

<style>
	.card {
		flex: 1;
		padding: var(--spacing-4);
		margin: auto;
	}

	.card-heading {
		display: block;
		font-family: var(--font-mono);
		font-size: clamp(var(--font-size-1), 11vw, var(--font-size-7));
		padding: var(--spacing-4);

		/* background */
		position: relative;
		margin-inline: calc(-1 * var(--spacing-4));
		top: calc(-1 * var(--spacing-4));
		background-color: var(--color-primary);
		color: var(--color-text-inverse);
		border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
	}

	.card p {
		margin-block-end: var(--spacing-4);
	}

	.contact-links {
		display: flex;
		padding: 0;
		gap: var(--spacing-3);
		margin-block-start: var(--spacing-4);
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
