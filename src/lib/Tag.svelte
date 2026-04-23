<script lang="ts">
	import type { Snippet } from 'svelte';

	interface TagProps {
		children: Snippet;
	}

	let { children }: TagProps = $props();
</script>

<div class="tag">
	{@render children()}
</div>

<style>
	.tag {
		border-radius: 0;
		background-color: transparent;
		border: 2px solid var(--color-border);
		color: var(--color-text);
		padding: 0.15rem 0.5rem;
		font-size: var(--font-size-0);
		font-family: var(--font-mono);
		font-weight: var(--font-weight-medium);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		display: inline-block;
	}
</style>
