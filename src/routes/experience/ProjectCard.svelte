<script lang="ts">
	import { fade } from 'svelte/transition';
	import RenderWhenVisible from '../../lib/RenderWhenVisible.svelte';

	export let heading: string;
</script>

<RenderWhenVisible>
	<section in:fade={{ delay: 100 }}>
		<h3>{heading}</h3>
		<div class="project-card-content">
			<slot />
		</div>
	</section>
</RenderWhenVisible>

<style>
	section {
		padding: var(--spacing-4);
	}

	section h3 {
		padding: var(--spacing-3);
		margin-bottom: -0.5rem;

		/* background */
		position: relative;
		margin-inline: calc(-1 * var(--spacing-4));
		top: calc(-1 * var(--spacing-4));
		background-color: var(--color-primary);
		color: var(--color-text-inverse);
		border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
	}

	.project-card-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
	}
</style>
