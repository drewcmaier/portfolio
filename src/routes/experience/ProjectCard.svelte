<script lang="ts">
	import Card from '$lib/Card.svelte';
	import VisibilityObserver from '$lib/VisibilityObserver.svelte';

	export let heading: string;
</script>

<VisibilityObserver let:isVisible threshold={0.1}>
	<Card playTransitionIn={isVisible} playTransitionOut={!isVisible}>
		<h3 slot="heading">{heading}</h3>
		<slot />
	</Card>
</VisibilityObserver>

<style>
	h3 {
		margin-block-end: 0;
	}
</style>
