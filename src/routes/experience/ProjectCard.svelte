<script lang="ts">
	import VisibilityObserver from '../../lib/VisibilityObserver.svelte';

	export let heading: string;
</script>

<VisibilityObserver let:isVisible threshold={0.01}>
	<section class="project-card" class:project-card-transition-in={isVisible}>
		<h3 class="project-card-heading">{heading}</h3>
		<div class="project-card-content">
			<slot />
		</div>
	</section>
</VisibilityObserver>

<style>
	.project-card {
		padding: var(--spacing-4);
		opacity: 0;
		transition: opacity 0.5s;
	}

	.project-card-heading {
		padding: var(--spacing-3);
		margin-block-end: 0;

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

	.project-card-transition-in {
		opacity: 1;
	}
</style>
