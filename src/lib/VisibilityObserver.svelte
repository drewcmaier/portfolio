<script lang="ts">
	import { onMount } from 'svelte';

	export let threshold = 0;

	let isVisible = false;
	let intersectionRatio = 0.0;
	let containerElement: Element;

	onMount(() => {
		let intersectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					isVisible = entry.isIntersecting;
					intersectionRatio = entry.intersectionRatio;
				});
			},
			{ threshold, root: null }
		);
		intersectionObserver.observe(containerElement);

		return () => intersectionObserver.unobserve(containerElement);
	});
</script>

<div bind:this={containerElement}>
	<slot {isVisible} {intersectionRatio} />
</div>
