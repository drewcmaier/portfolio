<script lang="ts">
	import type { Snippet } from 'svelte';

	import Card from '$lib/Card.svelte';
	import Tag from '$lib/Tag.svelte';
	import VisibilityObserver from '$lib/VisibilityObserver.svelte';

	interface ProjectCardProps {
		logo: string;
		heading: string;
		technologies: string[];
		description: Snippet;
	}

	let { logo, heading, technologies, description }: ProjectCardProps = $props();
	let isVisible: boolean = $state(true);
</script>

{#snippet ProjectHeading()}
	<img class="project-card-logo" src={logo} alt="" />
	<h3 class="project-card-heading">{heading}</h3>
{/snippet}

<VisibilityObserver bind:isVisible threshold={0.01}>
	<Card playTransitionIn={isVisible} playTransitionOut={!isVisible} heading={ProjectHeading}>
		{@render description()}
		<aside>
			<h4 class="project-card-technologies-heading">Technologies</h4>
			<ul class="project-card-technologies-list">
				{#each technologies as technology}
					<li class="project-card-technologies-list-item">
						<Tag>{technology}</Tag>
					</li>
				{/each}
			</ul>
		</aside>
	</Card>
</VisibilityObserver>

<style>
	.project-card-heading {
		display: inline;
		margin-block-end: 0;
		filter: inherit;
	}

	.project-card-logo {
		max-block-size: 2rem;
		margin-inline-end: var(--spacing-4);
		filter: brightness(0) invert(1);
	}

	.project-card-technologies-heading {
		font-weight: var(--font-weight-bold);
		margin-block-end: var(--spacing-1);
	}

	.project-card-technologies-list {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-2);
	}

	.project-card-technologies-list-item {
		font-size: var(--font-size-2);
		filter: none;
	}
</style>
