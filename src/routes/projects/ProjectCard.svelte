<script lang="ts">
	export let heading: string;
</script>

<section>
	<h3>{heading}</h3>
	<slot />
</section>

<style>
	h3 {
		font-weight: 700;
	}

	section {
		border-radius: 0.25rem;
		border: 0.5px solid var(--color-primary);
		padding: var(--spacing-md);
	}
</style>
