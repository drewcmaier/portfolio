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
		box-shadow: var(--shadow-inner);
		padding: var(--spacing-3);
	}
</style>
