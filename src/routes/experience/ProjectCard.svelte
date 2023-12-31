<script lang="ts">
	import Card from '$lib/Card.svelte';
	import VisibilityObserver from '$lib/VisibilityObserver.svelte';

	export let heading: string;
</script>

<VisibilityObserver let:isVisible threshold={0.01}>
	<Card playTransitionIn={isVisible} playTransitionOut={!isVisible}>
		<h3 slot="heading">{heading}</h3>
		<slot name="description" />
		<aside class="technologies-inset">
			<h4>Technologies:</h4>
			<ul>
				<slot name="technologies" />
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
</style>
