<script lang="ts">
	export let heading: string;
</script>

<section>
	<h3>{heading}</h3>
	<div class="project-card-content">
		<slot />
	</div>
</section>

<style>
	section {
		padding: var(--spacing-5);
	}

	section h3 {
		padding: var(--spacing-3);
		margin-bottom: 0;

		/* background */
		position: relative;
		margin-inline: calc(-1 * var(--spacing-5));
		top: calc(-1 * var(--spacing-5));
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
