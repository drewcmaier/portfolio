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
		flex: 1;
		width: 100%;
		max-width: var(--content-max-width);
	}

	.card-heading {
		align-items: center;
		color: var(--color-text);
		display: flex;
		flex-direction: row;
		padding: var(--spacing-3) var(--spacing-4);
		border: var(--border-normal);
		border-bottom: none;
		background-color: var(--color-secondary);
	}

	.card-content {
		background-color: var(--color-secondary);
		border: var(--border-normal);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-5);
		padding: var(--spacing-5);
		position: relative;
	}

	.card-content::before {
		content: '';
		position: absolute;
		inset: 6px -6px -6px 6px;
		background-color: var(--color-accent-secondary);
		z-index: -1;
	}

	:root[data-theme='dark'] .card-content::before {
		background-color: var(--color-accent);
	}

	@media (prefers-reduced-motion: no-preference) {
		.card-fade-in {
			animation: slidein 0.5s cubic-bezier(0.2, 0.9, 0.2, 1);
			animation-fill-mode: both;
		}

		.card-fade-out {
			animation: slideout 0.3s cubic-bezier(0.2, 0.9, 0.2, 1);
			animation-fill-mode: both;
		}

		@keyframes slidein {
			from {
				opacity: 0;
				transform: translateX(-12px);
			}
			to {
				opacity: 1;
				transform: translateX(0);
			}
		}

		@keyframes slideout {
			from {
				opacity: 1;
				transform: translateX(0);
			}
			to {
				opacity: 0;
				transform: translateX(12px);
			}
		}
	}
</style>
