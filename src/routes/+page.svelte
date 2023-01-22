<section>
	<strong class="hello">Hello, world!</strong>
	<p>
		<span>My name is</span> <strong>Drew</strong>
		<span
			>and I am a UX Developer for <a href="https://www.indeed.com">Indeed</a> in the Philadelphia area.</span
		>
	</p>
	<p>Whether it's for the web, mobile apps, or console video games, I love frontend development.</p>
</section>

<style>
	section {
		padding: var(--spacing-6);
		font-size: var(--font-size-2);
		height: fill;
	}

	:where(p, span):not(:last-child) {
		margin-bottom: var(--spacing-4);
	}

	.hello {
		display: block;
		font-family: var(--font-mono);
		font-size: var(--font-size-7);
		margin: var(--spacing-5) 0;
	}
</style>
