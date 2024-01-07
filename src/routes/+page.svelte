<script>
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import Card from '$lib/Card.svelte';
</script>

<Card playTransitionIn={true}>
	<strong slot="heading" class="heading-hello"
		>Hello, world!<span class="cursor" aria-hidden>█</span></strong
	>
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
</Card>

<style>
	.heading-hello {
		display: block;
		font-family: var(--font-mono);
		font-size: clamp(var(--font-size-1), 12vw, var(--font-size-7));
		text-align: center;
		padding-block: var(--spacing-4);
	}

	.contact-links {
		display: flex;
		padding: 0;
		gap: var(--spacing-4);
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
