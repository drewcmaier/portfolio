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
		border: var(--border-thin);
		padding: var(--spacing-md);
	}
</style>
