<script lang="ts">
	import { onMount } from 'svelte';

	export let isVisible = false;
	export let threshold = 0;

	let containerElement: Element;

	onMount(() => {
		let intersectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => (isVisible = entry.isIntersecting));
			},
			{ threshold }
		);
		intersectionObserver.observe(containerElement);

		return () => intersectionObserver.unobserve(containerElement);
	});
</script>

<div bind:this={containerElement}>
	<slot />
</div>
