<script lang="ts">
	export let heading: string;
</script>

<section>
	<h3>{heading}</h3>
	<div class="project-card-content">
		<slot />
	</div>
</section>

<style>
	section {
		padding: var(--spacing-5);
	}

	.project-card-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
	}
</style>
