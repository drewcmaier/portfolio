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
		border: var(--border-normal);
		border-radius: var(--border-radius-sm);
		background-color: #ffffff;
		padding: var(--spacing-3);
	}
</style>
