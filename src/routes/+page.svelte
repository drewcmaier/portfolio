<script>
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
</script>

<section>
	<strong class="hello">Hello, world!&nbsp;👋</strong>
	<p>
		<span>My name is</span> <strong>Drew Maier</strong>
		<span
			>and I am a UX Developer for <a href="https://www.indeed.com">Indeed</a> in the Greater Philadelphia
			area.</span
		>
	</p>
	<p>
		Whether it's <strong>websites</strong>, <strong>games</strong>, or
		<strong>mobile apps</strong>, frontend development is my passion. My goal is to create software
		that people enjoy using.
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
		margin: var(--spacing-5) 0;
	}

	.contact-links {
		display: flex;
		list-style: none;
		padding: 0;
		gap: var(--spacing-3);
		margin-block-start: var(--spacing-5);
	}

	.contact-links li {
		padding: var(--spacing-2);
		margin: calc(0px - var(--spacing-2));
	}
</style>
