<script>
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import Card from '$lib/Card.svelte';
	import TypingEffect from '$lib/TypingEffect.svelte';
</script>

<Card playTransitionIn={true}>
	<TypingEffect>
		<h2 class="heading-hello">
			Hello, world!<span class="cursor" aria-label="blinking cursor">█</span>
		</h2>
	</TypingEffect>
	<p>
		<span
			>I'm Drew Maier and I am a Senior UX Developer for <a href="https://www.indeed.com">Indeed</a>
			in the Greater Philadelphia area.</span
		>
	</p>
	<p>
		With a passion for frontend development, I create immersive digital experiences for web, gaming,
		and mobile platforms. My goal is to bring both functionality and enjoyment to every interaction.
	</p>
	<ul class="contact-links">
		<li>
			<a href="https://www.linkedin.com/in/drew-maier" aria-label="LinkedIn profile"><LinkedIn /></a
			>
		</li>
		<li><a href="https://github.com/drewcmaier" aria-label="GitHub profile"><GitHub /></a></li>
	</ul>
</Card>

<style>
	.heading-hello {
		font-family: var(--font-mono);
		font-size: clamp(var(--font-size-1), 12vw, var(--font-size-8));
		padding-block: var(--spacing-7);
	}

	.contact-links {
		display: flex;
		padding: 0;
		gap: var(--spacing-5);
	}

	.contact-links li {
		width: 44px;
		height: 44px;
	}

	@media (prefers-reduced-motion: no-preference) {
		.cursor {
			animation: cursor-blink 1s step-start infinite;
		}

		@keyframes cursor-blink {
			50% {
				opacity: 0;
			}
		}
	}
</style>
