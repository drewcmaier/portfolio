<script lang="ts">
	import type { Snippet } from 'svelte';

	interface CardProps {
		children: Snippet;
		heading?: Snippet;
		playTransitionIn?: boolean;
		playTransitionOut?: boolean;
	}

	let {
		heading,
		children,
		playTransitionIn = false,
		playTransitionOut = false
	}: CardProps = $props();
</script>

<section class="card" class:card-fade-in={playTransitionIn} class:card-fade-out={playTransitionOut}>
	{#if heading}
		<div class="card-heading">
			{@render heading()}
		</div>
	{/if}
	<div class="card-content">
		{@render children()}
	</div>
</section>

<style>
	.card {
		background-color: var(--color-secondary);
		border-radius: var(--border-radius-sm);
		box-shadow: var(--shadow-outer);
		max-width: var(--content-max-width);
		padding: var(--spacing-5);
		margin: auto;
		flex: 1;
	}

	.card-heading {
		padding: var(--spacing-4);

		/* background */
		position: relative;
		margin-inline: calc(-1 * var(--spacing-5));
		margin-block-end: calc(-1 * var(--spacing-3));
		top: calc(-1 * var(--spacing-5));
		background-color: var(--color-primary);
		border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
		color: var(--color-text-inverse);
		filter: drop-shadow(var(--shadow-text-inverse));
	}

	.card-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-5);
	}

	@media (prefers-reduced-motion: no-preference) {
		.card-fade-in {
			animation: fadein 1s;
			animation-fill-mode: both;
		}

		.card-fade-out {
			animation: fadeout 0.5s;
			animation-fill-mode: both;
		}

		@keyframes fadein {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}

		@keyframes fadeout {
			from {
				opacity: 1;
			}
			to {
				opacity: 0;
			}
		}
	}
</style>
