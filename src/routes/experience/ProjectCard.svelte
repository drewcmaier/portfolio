<script lang="ts">
	import Card from '$lib/Card.svelte';
	import VisibilityObserver from '$lib/VisibilityObserver.svelte';

	export let heading: string;
	export let technologies: string[];
</script>

<VisibilityObserver let:isVisible threshold={0.01}>
	<Card playTransitionIn={isVisible} playTransitionOut={!isVisible}>
		<h3 slot="heading">{heading}</h3>
		<slot name="description" />
		<aside class="technologies-inset">
			<h4>Technologies</h4>
			<ul class="technologies-list">
				{#each technologies as technology}
					<li>{technology}</li>
				{/each}
			</ul>
		</aside>
	</Card>
</VisibilityObserver>

<style>
	h3 {
		margin-block-end: 0;
	}

	h4 {
		font-weight: bold;
	}

	.technologies-inset {
		background-color: var(--color-inset);
		border-radius: var(--border-radius-sm);
		padding: var(--spacing-4);
		box-shadow: var(--shadow-inner);
	}

	.technologies-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
	}

	.technologies-list li {
		list-style: square outside;
		margin-inline-start: var(--spacing-4);
		font-size: var(--font-size-2);
	}
</style>
