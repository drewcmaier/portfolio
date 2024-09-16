<script lang="ts">
	import type { Snippet } from 'svelte';

	interface VisibilityObserverProps {
		threshold: number;
		isVisible?: boolean;
		intersectionRatio?: number;
		children: Snippet<[boolean, number]>;
	}

	let {
		threshold,
		isVisible = $bindable(false),
		intersectionRatio = $bindable(0.0),
		children
	}: VisibilityObserverProps = $props();

	let containerElement: Element;

	$effect(() => {
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
	{@render children(isVisible, intersectionRatio)}
</div>
