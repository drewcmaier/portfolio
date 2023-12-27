<script lang="ts">
	export let transitionIn: boolean = false;
</script>

<section class="card" class:card-transition-in={transitionIn}>
	<div class="card-heading">
		<slot name="heading" />
	</div>
	<div class="card-content">
		<slot />
	</div>
</section>

<style>
	.card {
		padding: var(--spacing-4);
		margin: auto;
		flex: 1;
	}

	.card-heading {
		padding: var(--spacing-3);

		/* background */
		position: relative;
		margin-inline: calc(-1 * var(--spacing-4));
		top: calc(-1 * var(--spacing-4));
		background-color: var(--color-primary);
		color: var(--color-text-inverse);
		border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
	}

	.card-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
	}

	.card-transition-in {
		animation: fadein 0.5s;
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
