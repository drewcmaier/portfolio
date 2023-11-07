<script lang="ts">
	import VisibilityObserver from '../../lib/VisibilityObserver.svelte';

	export let heading: string;
	let isVisible = false;
</script>

<VisibilityObserver bind:isVisible>
	<section class:project-card--fadein={isVisible}>
		<h3>{heading}</h3>
		<div class="project-card-content">
			<slot />
		</div>
	</section>
</VisibilityObserver>

<style>
	section {
		padding: var(--spacing-4);
		opacity: 0;
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

	.project-card--fadein {
		opacity: 1;
		transition: opacity 0.5s;
	}
</style>
