<script lang="ts">
	let { year, images } = $props<{ year: number; images: string[] }>();
</script>

<article class="awards-layout">
	<h1 class="awards-title">The Dogcademy Awards {year}</h1>
	{#each images as image}
		<img src={image} alt="" />
	{/each}
</article>

<style>
	@import './awards.css';
</style>
