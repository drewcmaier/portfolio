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
			<h4 class="project-card-technologies-heading">
				<span class="md-slash">//</span> Technologies
			</h4>
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
		font-family: var(--font-mono);
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;
		letter-spacing: -0.02em;
	}

	.project-card-logo {
		max-block-size: 1.5rem;
		margin-inline-end: var(--spacing-3);
		filter: brightness(0);
	}

	:root[data-theme='dark'] .project-card-logo {
		filter: brightness(0) invert(1);
	}

	.project-card-technologies-heading {
		font-family: var(--font-mono);
		font-size: var(--font-size-0);
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-block-end: var(--spacing-3);
	}

	.md-slash {
		color: var(--color-accent-secondary);
	}

	:root[data-theme='dark'] .md-slash {
		color: var(--color-accent);
	}

	.project-card-technologies-list {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-2);
	}

	.project-card-technologies-list-item {
		font-size: var(--font-size-1);
	}
</style>
