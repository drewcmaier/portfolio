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
		padding-inline: var(--spacing-4);
		padding-block: var(--spacing-4);
		display: flex;
		flex-direction: row;
		align-items: center;

		/* background */
		position: relative;
		margin-inline: calc(-1 * var(--spacing-5));
		margin-block-end: calc(-1 * var(--spacing-3));
		top: calc(-1 * var(--spacing-5));
		box-shadow: var(--shadow-outer);
		border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
		color: var(--color-text);
		filter: drop-shadow(var(--shadow-text));
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
				transform: translateY(10px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}

		@keyframes fadeout {
			from {
				opacity: 1;
				transform: translateY(0);
			}
			to {
				opacity: 0;
				transform: translateY(10px);
			}
		}
	}
</style>
