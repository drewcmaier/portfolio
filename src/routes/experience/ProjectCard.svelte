<script lang="ts">
	import Card from '$lib/Card.svelte';
	import Tag from '$lib/Tag.svelte';
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
					<li>
						<Tag>{technology}</Tag>
					</li>
				{/each}
			</ul>
		</aside>
	</Card>
</VisibilityObserver>

<style>
	h3 {
		margin-block-end: 0;
		filter: inherit;
	}

	h4 {
		font-weight: var(--font-weight-bold);
		margin-block-end: var(--spacing-1);
	}

	.technologies-list {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-2);
	}

	.technologies-list li {
		font-size: var(--font-size-2);
		filter: none;
	}
</style>
