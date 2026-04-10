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
		border-radius: var(--border-radius-md);
		background-color: var(--color-inset);
		border: 1px solid var(--color-accent);
		color: var(--color-text);
		padding: var(--spacing-3) var(--spacing-4);
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-normal);
		display: inline-block;
	}
</style>
