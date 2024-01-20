<script>
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import Card from '$lib/Card.svelte';
</script>

<Card playTransitionIn={true}>
	<span class="heading-container">
		<h2 class="heading-hello typing-animation">
			Hello, world!<span class="cursor" aria-label="">█</span>
		</h2>
	</span>
	<p>
		<span>My name is</span> Drew Maier
		<span
			>and I am a Senior UX Developer for <a href="https://www.indeed.com">Indeed</a> in the Greater
			Philadelphia area.</span
		>
	</p>
	<p>
		Frontend development is my passion. Whether I'm developing a website, game, or mobile app, my
		goal is always to create an enjoyable user experience.
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

		/* 
			Typing effect
			https://css-tricks.com/snippets/css/typewriter-effect/
		*/
		.typing-animation {
			overflow: hidden;
			white-space: nowrap;
			animation: typing 1s steps(20, end);
		}

		@keyframes typing {
			from {
				width: 0;
			}
			to {
				width: 100%;
			}
		}
	}
</style>
