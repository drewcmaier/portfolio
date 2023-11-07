<script lang="ts">
	import { onMount } from 'svelte';

	let containerElement: Element;
	export let isVisible = false;

	onMount(() => {
		let intersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => (isVisible = entry.isIntersecting));
		});
		intersectionObserver.observe(containerElement);

		return () => intersectionObserver.unobserve(containerElement);
	});
</script>

<div bind:this={containerElement}>
	<slot />
</div>
